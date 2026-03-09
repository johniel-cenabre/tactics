var gl="160";var Qh=0,Ul=1,eu=2;var hh=1,_l=2,gi=3,Bi=0,Ln=1,Kt=2;var Ni=0,Cs=1,Nl=2,Ol=3,Fl=4,tu=5,qi=100,nu=101,iu=102,Bl=103,zl=104,su=200,ru=201,au=202,ou=203,Eo=204,To=205,lu=206,cu=207,hu=208,uu=209,du=210,fu=211,pu=212,mu=213,gu=214,_u=0,xu=1,yu=2,$r=3,vu=4,Mu=5,Su=6,bu=7,uh=0,Eu=1,Tu=2,Oi=0,wu=1,Au=2,Ru=3,Cu=4,Pu=5,Iu=6;var dh=300,Ls=301,Ds=302,wo=303,Ao=304,wa=306,Ro=1e3,ei=1001,Co=1002,An=1003,kl=1004;var Va=1005;var Vn=1006,Lu=1007;var tr=1008;var Fi=1009,Du=1010,Uu=1011,xl=1012,fh=1013,Di=1014,Ui=1015,nr=1016,ph=1017,mh=1018,$i=1020,Nu=1021,ti=1023,Ou=1024,Fu=1025,Zi=1026,Us=1027,Bu=1028,gh=1029,zu=1030,_h=1031,xh=1033,Ga=33776,Wa=33777,Xa=33778,qa=33779,Hl=35840,Vl=35841,Gl=35842,Wl=35843,yh=36196,Xl=37492,ql=37496,Yl=37808,$l=37809,Zl=37810,Kl=37811,Jl=37812,jl=37813,Ql=37814,ec=37815,tc=37816,nc=37817,ic=37818,sc=37819,rc=37820,ac=37821,Ya=36492,oc=36494,lc=36495,ku=36283,cc=36284,hc=36285,uc=36286;var Zr=2300,Kr=2301,$a=2302,dc=2400,fc=2401,pc=2402;var vh=3e3,Ki=3001,Hu=3200,Vu=3201,Mh=0,Gu=1,Gn="",xn="srgb",xi="srgb-linear",yl="display-p3",Aa="display-p3-linear",Jr="linear",Ht="srgb",jr="rec709",Qr="p3";var cs=7680;var mc=519,Wu=512,Xu=513,qu=514,Sh=515,Yu=516,$u=517,Zu=518,Ku=519,gc=35044;var _c="300 es",Po=1035,_i=2e3,ea=2001,zi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Za=Math.PI/180,Io=180/Math.PI;function zs(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Sn[i&255]+Sn[i>>8&255]+Sn[i>>16&255]+Sn[i>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[t&63|128]+Sn[t>>8&255]+"-"+Sn[t>>16&255]+Sn[t>>24&255]+Sn[n&255]+Sn[n>>8&255]+Sn[n>>16&255]+Sn[n>>24&255]).toLowerCase()}function En(i,e,t){return Math.max(e,Math.min(t,i))}function Ju(i,e){return(i%e+e)%e}function Ka(i,e,t){return(1-t)*i+t*e}function xc(i){return(i&i-1)===0&&i!==0}function Lo(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Xs(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function In(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ue=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(En(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},_t=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],m=n[5],_=n[8],v=s[0],p=s[3],f=s[6],S=s[1],y=s[4],w=s[7],O=s[2],P=s[5],L=s[8];return r[0]=a*v+o*S+l*O,r[3]=a*p+o*y+l*P,r[6]=a*f+o*w+l*L,r[1]=c*v+h*S+d*O,r[4]=c*p+h*y+d*P,r[7]=c*f+h*w+d*L,r[2]=u*v+m*S+_*O,r[5]=u*p+m*y+_*P,r[8]=u*f+m*w+_*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,m=c*r-a*l,_=t*d+n*u+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/_;return e[0]=d*v,e[1]=(s*c-h*n)*v,e[2]=(o*n-s*a)*v,e[3]=u*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=m*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ja.makeScale(e,t)),this}rotate(e){return this.premultiply(Ja.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ja.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ja=new _t;function bh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ta(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ju(){let i=ta("canvas");return i.style.display="block",i}var yc={};function Ks(i){i in yc||(yc[i]=!0,console.warn(i))}var vc=new _t().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Mc=new _t().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Sr={[xi]:{transfer:Jr,primaries:jr,toReference:i=>i,fromReference:i=>i},[xn]:{transfer:Ht,primaries:jr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Aa]:{transfer:Jr,primaries:Qr,toReference:i=>i.applyMatrix3(Mc),fromReference:i=>i.applyMatrix3(vc)},[yl]:{transfer:Ht,primaries:Qr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Mc),fromReference:i=>i.applyMatrix3(vc).convertLinearToSRGB()}},Qu=new Set([xi,Aa]),Dt={enabled:!0,_workingColorSpace:xi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Qu.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Sr[e].toReference,s=Sr[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Sr[i].primaries},getTransfer:function(i){return i===Gn?Jr:Sr[i].transfer}};function Ps(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ja(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var hs,na=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{hs===void 0&&(hs=ta("canvas")),hs.width=e.width,hs.height=e.height;let n=hs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=hs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ta("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ps(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ps(t[n]/255)*255):t[n]=Ps(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ed=0,ia=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=zs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Qa(s[a].image)):r.push(Qa(s[a]))}else r=Qa(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Qa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?na.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var td=0,ii=class i extends zi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ei,s=ei,r=Vn,a=tr,o=ti,l=Fi,c=i.DEFAULT_ANISOTROPY,h=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=zs(),this.name="",this.source=new ia(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ks("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ki?xn:Gn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ro:e.x=e.x-Math.floor(e.x);break;case ei:e.x=e.x<0?0:1;break;case Co:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ro:e.y=e.y-Math.floor(e.y);break;case ei:e.y=e.y<0?0:1;break;case Co:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ks("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===xn?Ki:vh}set encoding(e){Ks("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ki?xn:Gn}};ii.DEFAULT_IMAGE=null;ii.DEFAULT_MAPPING=dh;ii.DEFAULT_ANISOTROPY=1;var _n=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],m=l[5],_=l[9],v=l[2],p=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,w=(m+1)/2,O=(f+1)/2,P=(h+u)/4,L=(d+v)/4,K=(_+p)/4;return y>w&&y>O?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=P/n,r=L/n):w>O?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=P/s,r=K/s):O<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),n=L/r,s=K/r),this.set(n,s,r,t),this}let S=Math.sqrt((p-_)*(p-_)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(p-_)/S,this.y=(d-v)/S,this.z=(u-h)/S,this.w=Math.acos((c+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Do=class extends zi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _n(0,0,e,t),this.scissorTest=!1,this.viewport=new _n(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(Ks("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ki?xn:Gn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new ii(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ia(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},yi=class extends Do{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},sa=class extends ii{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=An,this.minFilter=An,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Uo=class extends ii{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=An,this.minFilter=An,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ki=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],m=r[a+1],_=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=m,e[t+2]=_,e[t+3]=v;return}if(d!==v||l!==u||c!==m||h!==_){let p=1-o,f=l*u+c*m+h*_+d*v,S=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){let O=Math.sqrt(y),P=Math.atan2(O,f*S);p=Math.sin(p*P)/O,o=Math.sin(o*P)/O}let w=o*S;if(l=l*p+u*w,c=c*p+m*w,h=h*p+_*w,d=d*p+v*w,p===1-o){let O=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=O,c*=O,h*=O,d*=O}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],m=r[a+2],_=r[a+3];return e[t]=o*_+h*d+l*m-c*u,e[t+1]=l*_+h*u+c*d-o*m,e[t+2]=c*_+h*m+o*u-l*d,e[t+3]=h*_-o*d-l*u-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),m=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*m*_,this._y=c*m*d-u*h*_,this._z=c*h*_+u*m*d,this._w=c*h*d-u*m*_;break;case"YXZ":this._x=u*h*d+c*m*_,this._y=c*m*d-u*h*_,this._z=c*h*_-u*m*d,this._w=c*h*d+u*m*_;break;case"ZXY":this._x=u*h*d-c*m*_,this._y=c*m*d+u*h*_,this._z=c*h*_+u*m*d,this._w=c*h*d-u*m*_;break;case"ZYX":this._x=u*h*d-c*m*_,this._y=c*m*d+u*h*_,this._z=c*h*_-u*m*d,this._w=c*h*d+u*m*_;break;case"YZX":this._x=u*h*d+c*m*_,this._y=c*m*d+u*h*_,this._z=c*h*_-u*m*d,this._w=c*h*d-u*m*_;break;case"XZY":this._x=u*h*d-c*m*_,this._y=c*m*d-u*h*_,this._z=c*h*_+u*m*d,this._w=c*h*d+u*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){let m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>d){let m=2*Math.sqrt(1+n-o-d);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>d){let m=2*Math.sqrt(1+o-n-d);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+d-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(En(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return eo.copy(this).projectOnVector(e),this.sub(eo)}reflect(e){return this.sub(eo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(En(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},eo=new F,Sc=new ki,Ji=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Kn):Kn.fromBufferAttribute(r,a),Kn.applyMatrix4(e.matrixWorld),this.expandByPoint(Kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),br.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),br.copy(n.boundingBox)),br.applyMatrix4(e.matrixWorld),this.union(br)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qs),Er.subVectors(this.max,qs),us.subVectors(e.a,qs),ds.subVectors(e.b,qs),fs.subVectors(e.c,qs),Ri.subVectors(ds,us),Ci.subVectors(fs,ds),Hi.subVectors(us,fs);let t=[0,-Ri.z,Ri.y,0,-Ci.z,Ci.y,0,-Hi.z,Hi.y,Ri.z,0,-Ri.x,Ci.z,0,-Ci.x,Hi.z,0,-Hi.x,-Ri.y,Ri.x,0,-Ci.y,Ci.x,0,-Hi.y,Hi.x,0];return!to(t,us,ds,fs,Er)||(t=[1,0,0,0,1,0,0,0,1],!to(t,us,ds,fs,Er))?!1:(Tr.crossVectors(Ri,Ci),t=[Tr.x,Tr.y,Tr.z],to(t,us,ds,fs,Er))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ui=[new F,new F,new F,new F,new F,new F,new F,new F],Kn=new F,br=new Ji,us=new F,ds=new F,fs=new F,Ri=new F,Ci=new F,Hi=new F,qs=new F,Er=new F,Tr=new F,Vi=new F;function to(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Vi.fromArray(i,r);let o=s.x*Math.abs(Vi.x)+s.y*Math.abs(Vi.y)+s.z*Math.abs(Vi.z),l=e.dot(Vi),c=t.dot(Vi),h=n.dot(Vi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var nd=new Ji,Ys=new F,no=new F,ir=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):nd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ys.subVectors(e,this.center);let t=Ys.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ys,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(no.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ys.copy(e.center).add(no)),this.expandByPoint(Ys.copy(e.center).sub(no))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},di=new F,io=new F,wr=new F,Pi=new F,so=new F,Ar=new F,ro=new F,ra=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,t),di.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){io.copy(e).add(t).multiplyScalar(.5),wr.copy(t).sub(e).normalize(),Pi.copy(this.origin).sub(io);let r=e.distanceTo(t)*.5,a=-this.direction.dot(wr),o=Pi.dot(this.direction),l=-Pi.dot(wr),c=Pi.lengthSq(),h=Math.abs(1-a*a),d,u,m,_;if(h>0)if(d=a*l-o,u=a*o-l,_=r*h,d>=0)if(u>=-_)if(u<=_){let v=1/h;d*=v,u*=v,m=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;else u<=-_?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+u*(u+2*l)+c):u<=_?(d=0,u=Math.min(Math.max(-r,-l),r),m=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(io).addScaledVector(wr,u),m}intersectSphere(e,t){di.subVectors(e.center,this.origin);let n=di.dot(this.direction),s=di.dot(di)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,t,n,s,r){so.subVectors(t,e),Ar.subVectors(n,e),ro.crossVectors(so,Ar);let a=this.direction.dot(ro),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Pi.subVectors(this.origin,e);let l=o*this.direction.dot(Ar.crossVectors(Pi,Ar));if(l<0)return null;let c=o*this.direction.dot(so.cross(Pi));if(c<0||l+c>a)return null;let h=-o*Pi.dot(ro);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},on=class i{constructor(e,t,n,s,r,a,o,l,c,h,d,u,m,_,v,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,d,u,m,_,v,p)}set(e,t,n,s,r,a,o,l,c,h,d,u,m,_,v,p){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=m,f[7]=_,f[11]=v,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/ps.setFromMatrixColumn(e,0).length(),r=1/ps.setFromMatrixColumn(e,1).length(),a=1/ps.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,m=a*d,_=o*h,v=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=m+_*c,t[5]=u-v*c,t[9]=-o*l,t[2]=v-u*c,t[6]=_+m*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,m=l*d,_=c*h,v=c*d;t[0]=u+v*o,t[4]=_*o-m,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=m*o-_,t[6]=v+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,m=l*d,_=c*h,v=c*d;t[0]=u-v*o,t[4]=-a*d,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*h,t[9]=v-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,m=a*d,_=o*h,v=o*d;t[0]=l*h,t[4]=_*c-m,t[8]=u*c+v,t[1]=l*d,t[5]=v*c+u,t[9]=m*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,m=a*c,_=o*l,v=o*c;t[0]=l*h,t[4]=v-u*d,t[8]=_*d+m,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*d+_,t[10]=u-v*d}else if(e.order==="XZY"){let u=a*l,m=a*c,_=o*l,v=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+v,t[5]=a*h,t[9]=m*d-_,t[2]=_*d-m,t[6]=o*h,t[10]=v*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(id,e,sd)}lookAt(e,t,n){let s=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),Ii.crossVectors(n,Bn),Ii.lengthSq()===0&&(Math.abs(n.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),Ii.crossVectors(n,Bn)),Ii.normalize(),Rr.crossVectors(Bn,Ii),s[0]=Ii.x,s[4]=Rr.x,s[8]=Bn.x,s[1]=Ii.y,s[5]=Rr.y,s[9]=Bn.y,s[2]=Ii.z,s[6]=Rr.z,s[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],m=n[13],_=n[2],v=n[6],p=n[10],f=n[14],S=n[3],y=n[7],w=n[11],O=n[15],P=s[0],L=s[4],K=s[8],b=s[12],A=s[1],U=s[5],B=s[9],W=s[13],I=s[2],D=s[6],ee=s[10],Q=s[14],ne=s[3],j=s[7],J=s[11],fe=s[15];return r[0]=a*P+o*A+l*I+c*ne,r[4]=a*L+o*U+l*D+c*j,r[8]=a*K+o*B+l*ee+c*J,r[12]=a*b+o*W+l*Q+c*fe,r[1]=h*P+d*A+u*I+m*ne,r[5]=h*L+d*U+u*D+m*j,r[9]=h*K+d*B+u*ee+m*J,r[13]=h*b+d*W+u*Q+m*fe,r[2]=_*P+v*A+p*I+f*ne,r[6]=_*L+v*U+p*D+f*j,r[10]=_*K+v*B+p*ee+f*J,r[14]=_*b+v*W+p*Q+f*fe,r[3]=S*P+y*A+w*I+O*ne,r[7]=S*L+y*U+w*D+O*j,r[11]=S*K+y*B+w*ee+O*J,r[15]=S*b+y*W+w*Q+O*fe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],m=e[14],_=e[3],v=e[7],p=e[11],f=e[15];return _*(+r*l*d-s*c*d-r*o*u+n*c*u+s*o*m-n*l*m)+v*(+t*l*m-t*c*u+r*a*u-s*a*m+s*c*h-r*l*h)+p*(+t*c*d-t*o*m-r*a*d+n*a*m+r*o*h-n*c*h)+f*(-s*o*h-t*l*d+t*o*u+s*a*d-n*a*u+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],m=e[11],_=e[12],v=e[13],p=e[14],f=e[15],S=d*p*c-v*u*c+v*l*m-o*p*m-d*l*f+o*u*f,y=_*u*c-h*p*c-_*l*m+a*p*m+h*l*f-a*u*f,w=h*v*c-_*d*c+_*o*m-a*v*m-h*o*f+a*d*f,O=_*d*l-h*v*l-_*o*u+a*v*u+h*o*p-a*d*p,P=t*S+n*y+s*w+r*O;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/P;return e[0]=S*L,e[1]=(v*u*r-d*p*r-v*s*m+n*p*m+d*s*f-n*u*f)*L,e[2]=(o*p*r-v*l*r+v*s*c-n*p*c-o*s*f+n*l*f)*L,e[3]=(d*l*r-o*u*r-d*s*c+n*u*c+o*s*m-n*l*m)*L,e[4]=y*L,e[5]=(h*p*r-_*u*r+_*s*m-t*p*m-h*s*f+t*u*f)*L,e[6]=(_*l*r-a*p*r-_*s*c+t*p*c+a*s*f-t*l*f)*L,e[7]=(a*u*r-h*l*r+h*s*c-t*u*c-a*s*m+t*l*m)*L,e[8]=w*L,e[9]=(_*d*r-h*v*r-_*n*m+t*v*m+h*n*f-t*d*f)*L,e[10]=(a*v*r-_*o*r+_*n*c-t*v*c-a*n*f+t*o*f)*L,e[11]=(h*o*r-a*d*r-h*n*c+t*d*c+a*n*m-t*o*m)*L,e[12]=O*L,e[13]=(h*v*s-_*d*s+_*n*u-t*v*u-h*n*p+t*d*p)*L,e[14]=(_*o*s-a*v*s-_*n*l+t*v*l+a*n*p-t*o*p)*L,e[15]=(a*d*s-h*o*s+h*n*l-t*d*l-a*n*u+t*o*u)*L,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,m=r*h,_=r*d,v=a*h,p=a*d,f=o*d,S=l*c,y=l*h,w=l*d,O=n.x,P=n.y,L=n.z;return s[0]=(1-(v+f))*O,s[1]=(m+w)*O,s[2]=(_-y)*O,s[3]=0,s[4]=(m-w)*P,s[5]=(1-(u+f))*P,s[6]=(p+S)*P,s[7]=0,s[8]=(_+y)*L,s[9]=(p-S)*L,s[10]=(1-(u+v))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=ps.set(s[0],s[1],s[2]).length(),a=ps.set(s[4],s[5],s[6]).length(),o=ps.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Jn.copy(this);let c=1/r,h=1/a,d=1/o;return Jn.elements[0]*=c,Jn.elements[1]*=c,Jn.elements[2]*=c,Jn.elements[4]*=h,Jn.elements[5]*=h,Jn.elements[6]*=h,Jn.elements[8]*=d,Jn.elements[9]*=d,Jn.elements[10]*=d,t.setFromRotationMatrix(Jn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=_i){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),u=(n+s)/(n-s),m,_;if(o===_i)m=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===ea)m=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=_i){let l=this.elements,c=1/(t-e),h=1/(n-s),d=1/(a-r),u=(t+e)*c,m=(n+s)*h,_,v;if(o===_i)_=(a+r)*d,v=-2*d;else if(o===ea)_=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ps=new F,Jn=new on,id=new F(0,0,0),sd=new F(1,1,1),Ii=new F,Rr=new F,Bn=new F,bc=new on,Ec=new ki,aa=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(En(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-En(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(En(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-En(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(En(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-En(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return bc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ec.setFromEuler(this),this.setFromQuaternion(Ec,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};aa.DEFAULT_ORDER="XYZ";var sr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},rd=0,Tc=new F,ms=new ki,fi=new on,Cr=new F,$s=new F,ad=new F,od=new ki,wc=new F(1,0,0),Ac=new F(0,1,0),Rc=new F(0,0,1),ld={type:"added"},cd={type:"removed"},Dn=class i extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=zs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new F,t=new aa,n=new ki,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new on},normalMatrix:{value:new _t}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ms.setFromAxisAngle(e,t),this.quaternion.multiply(ms),this}rotateOnWorldAxis(e,t){return ms.setFromAxisAngle(e,t),this.quaternion.premultiply(ms),this}rotateX(e){return this.rotateOnAxis(wc,e)}rotateY(e){return this.rotateOnAxis(Ac,e)}rotateZ(e){return this.rotateOnAxis(Rc,e)}translateOnAxis(e,t){return Tc.copy(e).applyQuaternion(this.quaternion),this.position.add(Tc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wc,e)}translateY(e){return this.translateOnAxis(Ac,e)}translateZ(e){return this.translateOnAxis(Rc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Cr.copy(e):Cr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt($s,Cr,this.up):fi.lookAt(Cr,$s,this.up),this.quaternion.setFromRotationMatrix(fi),s&&(fi.extractRotation(s.matrixWorld),ms.setFromRotationMatrix(fi),this.quaternion.premultiply(ms.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ld)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cd)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(fi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,e,ad),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,od,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Dn.DEFAULT_UP=new F(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var jn=new F,pi=new F,ao=new F,mi=new F,gs=new F,_s=new F,Cc=new F,oo=new F,lo=new F,co=new F,Pr=!1,Ts=class i{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),jn.subVectors(e,t),s.cross(jn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){jn.subVectors(s,t),pi.subVectors(n,t),ao.subVectors(e,t);let a=jn.dot(jn),o=jn.dot(pi),l=jn.dot(ao),c=pi.dot(pi),h=pi.dot(ao),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,m=(c*l-o*h)*u,_=(a*h-o*l)*u;return r.set(1-m-_,_,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getUV(e,t,n,s,r,a,o,l){return Pr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Pr=!0),this.getInterpolation(e,t,n,s,r,a,o,l)}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,mi.x),l.addScaledVector(a,mi.y),l.addScaledVector(o,mi.z),l)}static isFrontFacing(e,t,n,s){return jn.subVectors(n,t),pi.subVectors(e,t),jn.cross(pi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),jn.cross(pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Pr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Pr=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;gs.subVectors(s,n),_s.subVectors(r,n),oo.subVectors(e,n);let l=gs.dot(oo),c=_s.dot(oo);if(l<=0&&c<=0)return t.copy(n);lo.subVectors(e,s);let h=gs.dot(lo),d=_s.dot(lo);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(gs,a);co.subVectors(e,r);let m=gs.dot(co),_=_s.dot(co);if(_>=0&&m<=_)return t.copy(r);let v=m*c-l*_;if(v<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(_s,o);let p=h*_-m*d;if(p<=0&&d-h>=0&&m-_>=0)return Cc.subVectors(r,s),o=(d-h)/(d-h+(m-_)),t.copy(s).addScaledVector(Cc,o);let f=1/(p+v+u);return a=v*f,o=u*f,t.copy(n).addScaledVector(gs,a).addScaledVector(_s,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Eh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},Ir={h:0,s:0,l:0};function ho(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var vt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Dt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Dt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Dt.workingColorSpace){if(e=Ju(e,1),t=En(t,0,1),n=En(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ho(a,r,e+1/3),this.g=ho(a,r,e),this.b=ho(a,r,e-1/3)}return Dt.toWorkingColorSpace(this,s),this}setStyle(e,t=xn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xn){let n=Eh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ps(e.r),this.g=Ps(e.g),this.b=Ps(e.b),this}copyLinearToSRGB(e){return this.r=ja(e.r),this.g=ja(e.g),this.b=ja(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xn){return Dt.fromWorkingColorSpace(bn.copy(this),e),Math.round(En(bn.r*255,0,255))*65536+Math.round(En(bn.g*255,0,255))*256+Math.round(En(bn.b*255,0,255))}getHexString(e=xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Dt.workingColorSpace){Dt.fromWorkingColorSpace(bn.copy(this),t);let n=bn.r,s=bn.g,r=bn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Dt.workingColorSpace){return Dt.fromWorkingColorSpace(bn.copy(this),t),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=xn){Dt.fromWorkingColorSpace(bn.copy(this),e);let t=bn.r,n=bn.g,s=bn.b;return e!==xn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Li),this.setHSL(Li.h+e,Li.s+t,Li.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Li),e.getHSL(Ir);let n=Ka(Li.h,Ir.h,t),s=Ka(Li.s,Ir.s,t),r=Ka(Li.l,Ir.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},bn=new vt;vt.NAMES=Eh;var hd=0,ji=class extends zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=zs(),this.name="",this.type="Material",this.blending=Cs,this.side=Bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eo,this.blendDst=To,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=$r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(n.blending=this.blending),this.side!==Bi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Eo&&(n.blendSrc=this.blendSrc),this.blendDst!==To&&(n.blendDst=this.blendDst),this.blendEquation!==qi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$r&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},qt=class extends ji{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=uh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var nn=new F,Lr=new Ue,Wn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=gc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Lr.fromBufferAttribute(this,t),Lr.applyMatrix3(e),this.setXY(t,Lr.x,Lr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix3(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Xs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=In(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xs(t,this.array)),t}setX(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xs(t,this.array)),t}setY(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xs(t,this.array)),t}setW(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),n=In(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),n=In(n,this.array),s=In(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),n=In(n,this.array),s=In(s,this.array),r=In(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gc&&(e.usage=this.usage),e}};var oa=class extends Wn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var la=class extends Wn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Jt=class extends Wn{constructor(e,t,n){super(new Float32Array(e),t,n)}};var ud=0,Hn=new on,uo=new Dn,xs=new F,zn=new Ji,Zs=new Ji,gn=new F,si=class i extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=zs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bh(e)?la:oa)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new _t().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,t,n){return Hn.makeTranslation(e,t,n),this.applyMatrix4(Hn),this}scale(e,t,n){return Hn.makeScale(e,t,n),this.applyMatrix4(Hn),this}lookAt(e){return uo.lookAt(e),uo.updateMatrix(),this.applyMatrix4(uo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Jt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ji);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];zn.setFromBufferAttribute(r),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ir);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Zs.setFromBufferAttribute(o),this.morphTargetsRelative?(gn.addVectors(zn.min,Zs.min),zn.expandByPoint(gn),gn.addVectors(zn.max,Zs.max),zn.expandByPoint(gn)):(zn.expandByPoint(Zs.min),zn.expandByPoint(Zs.max))}zn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)gn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(gn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)gn.fromBufferAttribute(o,c),l&&(xs.fromBufferAttribute(e,c),gn.add(xs)),s=Math.max(s,n.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wn(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let A=0;A<o;A++)c[A]=new F,h[A]=new F;let d=new F,u=new F,m=new F,_=new Ue,v=new Ue,p=new Ue,f=new F,S=new F;function y(A,U,B){d.fromArray(s,A*3),u.fromArray(s,U*3),m.fromArray(s,B*3),_.fromArray(a,A*2),v.fromArray(a,U*2),p.fromArray(a,B*2),u.sub(d),m.sub(d),v.sub(_),p.sub(_);let W=1/(v.x*p.y-p.x*v.y);isFinite(W)&&(f.copy(u).multiplyScalar(p.y).addScaledVector(m,-v.y).multiplyScalar(W),S.copy(m).multiplyScalar(v.x).addScaledVector(u,-p.x).multiplyScalar(W),c[A].add(f),c[U].add(f),c[B].add(f),h[A].add(S),h[U].add(S),h[B].add(S))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let A=0,U=w.length;A<U;++A){let B=w[A],W=B.start,I=B.count;for(let D=W,ee=W+I;D<ee;D+=3)y(n[D+0],n[D+1],n[D+2])}let O=new F,P=new F,L=new F,K=new F;function b(A){L.fromArray(r,A*3),K.copy(L);let U=c[A];O.copy(U),O.sub(L.multiplyScalar(L.dot(U))).normalize(),P.crossVectors(K,U);let W=P.dot(h[A])<0?-1:1;l[A*4]=O.x,l[A*4+1]=O.y,l[A*4+2]=O.z,l[A*4+3]=W}for(let A=0,U=w.length;A<U;++A){let B=w[A],W=B.start,I=B.count;for(let D=W,ee=W+I;D<ee;D+=3)b(n[D+0]),b(n[D+1]),b(n[D+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Wn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);let s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,h=new F,d=new F;if(e)for(let u=0,m=e.count;u<m;u+=3){let _=e.getX(u+0),v=e.getX(u+1),p=e.getX(u+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,p),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,m=t.count;u<m;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)gn.fromBufferAttribute(e,t),gn.normalize(),e.setXYZ(t,gn.x,gn.y,gn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),m=0,_=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*h;for(let f=0;f<h;f++)u[_++]=c[m++]}return new Wn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],m=e(u,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let m=c[d];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,m=d.length;u<m;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pc=new on,Gi=new ra,Dr=new ir,Ic=new F,ys=new F,vs=new F,Ms=new F,fo=new F,Ur=new F,Nr=new Ue,Or=new Ue,Fr=new Ue,Lc=new F,Dc=new F,Uc=new F,Br=new F,zr=new F,rt=class extends Dn{constructor(e=new si,t=new qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ur.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(fo.fromBufferAttribute(d,e),a?Ur.addScaledVector(fo,h):Ur.addScaledVector(fo.sub(t),h))}t.add(Ur)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(r),Gi.copy(e.ray).recast(e.near),!(Dr.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(Dr,Ic)===null||Gi.origin.distanceToSquared(Ic)>(e.far-e.near)**2))&&(Pc.copy(r).invert(),Gi.copy(e.ray).applyMatrix4(Pc),!(n.boundingBox!==null&&Gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Gi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=u.length;_<v;_++){let p=u[_],f=a[p.materialIndex],S=Math.max(p.start,m.start),y=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let w=S,O=y;w<O;w+=3){let P=o.getX(w),L=o.getX(w+1),K=o.getX(w+2);s=kr(this,f,e,n,c,h,d,P,L,K),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let _=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=_,f=v;p<f;p+=3){let S=o.getX(p),y=o.getX(p+1),w=o.getX(p+2);s=kr(this,a,e,n,c,h,d,S,y,w),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,v=u.length;_<v;_++){let p=u[_],f=a[p.materialIndex],S=Math.max(p.start,m.start),y=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let w=S,O=y;w<O;w+=3){let P=w,L=w+1,K=w+2;s=kr(this,f,e,n,c,h,d,P,L,K),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let _=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=_,f=v;p<f;p+=3){let S=p,y=p+1,w=p+2;s=kr(this,a,e,n,c,h,d,S,y,w),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function dd(i,e,t,n,s,r,a,o){let l;if(e.side===Ln?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Bi,o),l===null)return null;zr.copy(o),zr.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(zr);return c<t.near||c>t.far?null:{distance:c,point:zr.clone(),object:i}}function kr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,ys),i.getVertexPosition(l,vs),i.getVertexPosition(c,Ms);let h=dd(i,e,t,n,ys,vs,Ms,Br);if(h){s&&(Nr.fromBufferAttribute(s,o),Or.fromBufferAttribute(s,l),Fr.fromBufferAttribute(s,c),h.uv=Ts.getInterpolation(Br,ys,vs,Ms,Nr,Or,Fr,new Ue)),r&&(Nr.fromBufferAttribute(r,o),Or.fromBufferAttribute(r,l),Fr.fromBufferAttribute(r,c),h.uv1=Ts.getInterpolation(Br,ys,vs,Ms,Nr,Or,Fr,new Ue),h.uv2=h.uv1),a&&(Lc.fromBufferAttribute(a,o),Dc.fromBufferAttribute(a,l),Uc.fromBufferAttribute(a,c),h.normal=Ts.getInterpolation(Br,ys,vs,Ms,Lc,Dc,Uc,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new F,materialIndex:0};Ts.getNormal(ys,vs,Ms,d.normal),h.face=d}return h}var Un=class i extends si{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,m=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(d,2));function _(v,p,f,S,y,w,O,P,L,K,b){let A=w/L,U=O/K,B=w/2,W=O/2,I=P/2,D=L+1,ee=K+1,Q=0,ne=0,j=new F;for(let J=0;J<ee;J++){let fe=J*U-W;for(let Ie=0;Ie<D;Ie++){let te=Ie*A-B;j[v]=te*S,j[p]=fe*y,j[f]=I,c.push(j.x,j.y,j.z),j[v]=0,j[p]=0,j[f]=P>0?1:-1,h.push(j.x,j.y,j.z),d.push(Ie/L),d.push(1-J/K),Q+=1}}for(let J=0;J<K;J++)for(let fe=0;fe<L;fe++){let Ie=u+fe+D*J,te=u+fe+D*(J+1),ue=u+(fe+1)+D*(J+1),Pe=u+(fe+1)+D*J;l.push(Ie,te,Pe),l.push(te,ue,Pe),ne+=6}o.addGroup(m,ne,b),m+=ne,u+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ns(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function wn(i){let e={};for(let t=0;t<i.length;t++){let n=Ns(i[t]);for(let s in n)e[s]=n[s]}return e}function fd(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Th(i){return i.getRenderTarget()===null?i.outputColorSpace:Dt.workingColorSpace}var pd={clone:Ns,merge:wn},md=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,vi=class extends ji{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=md,this.fragmentShader=gd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ns(e.uniforms),this.uniformsGroups=fd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ca=class extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=_i}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Rn=class extends ca{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Io*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Za*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Io*2*Math.atan(Math.tan(Za*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Za*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ss=-90,bs=1,No=class extends Dn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Rn(Ss,bs,e,t);s.layers=this.layers,this.add(s);let r=new Rn(Ss,bs,e,t);r.layers=this.layers,this.add(r);let a=new Rn(Ss,bs,e,t);a.layers=this.layers,this.add(a);let o=new Rn(Ss,bs,e,t);o.layers=this.layers,this.add(o);let l=new Rn(Ss,bs,e,t);l.layers=this.layers,this.add(l);let c=new Rn(Ss,bs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===_i)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ea)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(d,u,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},ha=class extends ii{constructor(e,t,n,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ls,super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Oo=class extends yi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Ks("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ki?xn:Gn),this.texture=new ha(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Vn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Un(5,5,5),r=new vi({name:"CubemapFromEquirect",uniforms:Ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ln,blending:Ni});r.uniforms.tEquirect.value=t;let a=new rt(s,r),o=t.minFilter;return t.minFilter===tr&&(t.minFilter=Vn),new No(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},po=new F,_d=new F,xd=new _t,Qn=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=po.subVectors(n,t).cross(_d.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(po),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||xd.getNormalMatrix(e),s=this.coplanarPoint(po).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Wi=new ir,Hr=new F,rr=class{constructor(e=new Qn,t=new Qn,n=new Qn,s=new Qn,r=new Qn,a=new Qn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=_i){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],m=s[8],_=s[9],v=s[10],p=s[11],f=s[12],S=s[13],y=s[14],w=s[15];if(n[0].setComponents(l-r,u-c,p-m,w-f).normalize(),n[1].setComponents(l+r,u+c,p+m,w+f).normalize(),n[2].setComponents(l+a,u+h,p+_,w+S).normalize(),n[3].setComponents(l-a,u-h,p-_,w-S).normalize(),n[4].setComponents(l-o,u-d,p-v,w-y).normalize(),t===_i)n[5].setComponents(l+o,u+d,p+v,w+y).normalize();else if(t===ea)n[5].setComponents(o,d,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(e){return Wi.center.set(0,0,0),Wi.radius=.7071067811865476,Wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Hr.x=s.normal.x>0?e.max.x:e.min.x,Hr.y=s.normal.y>0?e.max.y:e.min.y,Hr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Hr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function wh(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function yd(i,e){let t=e.isWebGL2,n=new WeakMap;function s(c,h){let d=c.array,u=c.usage,m=d.byteLength,_=i.createBuffer();i.bindBuffer(h,_),i.bufferData(h,d,u),c.onUploadCallback();let v;if(d instanceof Float32Array)v=i.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=i.SHORT;else if(d instanceof Uint32Array)v=i.UNSIGNED_INT;else if(d instanceof Int32Array)v=i.INT;else if(d instanceof Int8Array)v=i.BYTE;else if(d instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,d){let u=h.array,m=h._updateRange,_=h.updateRanges;if(i.bindBuffer(d,c),m.count===-1&&_.length===0&&i.bufferSubData(d,0,u),_.length!==0){for(let v=0,p=_.length;v<p;v++){let f=_[v];t?i.bufferSubData(d,f.start*u.BYTES_PER_ELEMENT,u,f.start,f.count):i.bufferSubData(d,f.start*u.BYTES_PER_ELEMENT,u.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u,m.offset,m.count):i.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let d=n.get(c);if(d===void 0)n.set(c,s(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,h),d.version=c.version}}return{get:a,remove:o,update:l}}var Cn=class i extends si{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=e/o,u=t/l,m=[],_=[],v=[],p=[];for(let f=0;f<h;f++){let S=f*u-a;for(let y=0;y<c;y++){let w=y*d-r;_.push(w,-S,0),v.push(0,0,1),p.push(y/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let S=0;S<o;S++){let y=S+c*f,w=S+c*(f+1),O=S+1+c*(f+1),P=S+1+c*f;m.push(y,w,P),m.push(w,O,P)}this.setIndex(m),this.setAttribute("position",new Jt(_,3)),this.setAttribute("normal",new Jt(v,3)),this.setAttribute("uv",new Jt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},vd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Md=`#ifdef USE_ALPHAHASH
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
#endif`,Sd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ed=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Td=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wd=`#ifdef USE_AOMAP
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
#endif`,Ad=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rd=`#ifdef USE_BATCHING
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
#endif`,Cd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Pd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Id=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ld=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Dd=`#ifdef USE_IRIDESCENCE
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
#endif`,Ud=`#ifdef USE_BUMPMAP
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
#endif`,Nd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Od=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Vd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Gd=`#define PI 3.141592653589793
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
} // validated`,Wd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Xd=`vec3 transformedNormal = objectNormal;
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
#endif`,qd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$d=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jd=`
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
}`,jd=`#ifdef USE_ENVMAP
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
#endif`,Qd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ef=`#ifdef USE_ENVMAP
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
#endif`,tf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nf=`#ifdef USE_ENVMAP
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
#endif`,sf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,af=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,of=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lf=`#ifdef USE_GRADIENTMAP
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
}`,cf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,hf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,df=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ff=`uniform bool receiveShadow;
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
#endif`,pf=`#ifdef USE_ENVMAP
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
#endif`,mf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_f=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yf=`PhysicalMaterial material;
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
#endif`,vf=`struct PhysicalMaterial {
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
}`,Mf=`
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
#endif`,Sf=`#if defined( RE_IndirectDiffuse )
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
#endif`,bf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ef=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Af=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Rf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,If=`#if defined( USE_POINTS_UV )
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
#endif`,Lf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Df=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Uf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nf=`#ifdef USE_MORPHNORMALS
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
#endif`,Of=`#ifdef USE_MORPHTARGETS
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
#endif`,Ff=`#ifdef USE_MORPHTARGETS
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
#endif`,Bf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gf=`#ifdef USE_NORMALMAP
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
#endif`,Wf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$f=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Kf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ep=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,np=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ip=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rp=`float getShadowMask() {
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
}`,ap=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,op=`#ifdef USE_SKINNING
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
#endif`,lp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cp=`#ifdef USE_SKINNING
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
#endif`,hp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,up=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pp=`#ifdef USE_TRANSMISSION
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
#endif`,mp=`#ifdef USE_TRANSMISSION
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
#endif`,gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,vp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mp=`uniform sampler2D t2D;
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
}`,Sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wp=`#include <common>
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
}`,Ap=`#if DEPTH_PACKING == 3200
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
}`,Rp=`#define DISTANCE
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
}`,Cp=`#define DISTANCE
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
}`,Pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ip=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lp=`uniform float scale;
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
}`,Dp=`uniform vec3 diffuse;
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
}`,Up=`#include <common>
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
}`,Np=`uniform vec3 diffuse;
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
}`,Op=`#define LAMBERT
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
}`,Fp=`#define LAMBERT
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
}`,Bp=`#define MATCAP
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
}`,zp=`#define MATCAP
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
}`,kp=`#define NORMAL
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
}`,Hp=`#define NORMAL
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
}`,Vp=`#define PHONG
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
}`,Gp=`#define PHONG
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
}`,Wp=`#define STANDARD
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
}`,Xp=`#define STANDARD
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
}`,qp=`#define TOON
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
}`,Yp=`#define TOON
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
}`,$p=`uniform float size;
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
}`,Zp=`uniform vec3 diffuse;
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
}`,Kp=`#include <common>
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
}`,Jp=`uniform vec3 color;
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
}`,jp=`uniform float rotation;
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
}`,Qp=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:vd,alphahash_pars_fragment:Md,alphamap_fragment:Sd,alphamap_pars_fragment:bd,alphatest_fragment:Ed,alphatest_pars_fragment:Td,aomap_fragment:wd,aomap_pars_fragment:Ad,batching_pars_vertex:Rd,batching_vertex:Cd,begin_vertex:Pd,beginnormal_vertex:Id,bsdfs:Ld,iridescence_fragment:Dd,bumpmap_pars_fragment:Ud,clipping_planes_fragment:Nd,clipping_planes_pars_fragment:Od,clipping_planes_pars_vertex:Fd,clipping_planes_vertex:Bd,color_fragment:zd,color_pars_fragment:kd,color_pars_vertex:Hd,color_vertex:Vd,common:Gd,cube_uv_reflection_fragment:Wd,defaultnormal_vertex:Xd,displacementmap_pars_vertex:qd,displacementmap_vertex:Yd,emissivemap_fragment:$d,emissivemap_pars_fragment:Zd,colorspace_fragment:Kd,colorspace_pars_fragment:Jd,envmap_fragment:jd,envmap_common_pars_fragment:Qd,envmap_pars_fragment:ef,envmap_pars_vertex:tf,envmap_physical_pars_fragment:pf,envmap_vertex:nf,fog_vertex:sf,fog_pars_vertex:rf,fog_fragment:af,fog_pars_fragment:of,gradientmap_pars_fragment:lf,lightmap_fragment:cf,lightmap_pars_fragment:hf,lights_lambert_fragment:uf,lights_lambert_pars_fragment:df,lights_pars_begin:ff,lights_toon_fragment:mf,lights_toon_pars_fragment:gf,lights_phong_fragment:_f,lights_phong_pars_fragment:xf,lights_physical_fragment:yf,lights_physical_pars_fragment:vf,lights_fragment_begin:Mf,lights_fragment_maps:Sf,lights_fragment_end:bf,logdepthbuf_fragment:Ef,logdepthbuf_pars_fragment:Tf,logdepthbuf_pars_vertex:wf,logdepthbuf_vertex:Af,map_fragment:Rf,map_pars_fragment:Cf,map_particle_fragment:Pf,map_particle_pars_fragment:If,metalnessmap_fragment:Lf,metalnessmap_pars_fragment:Df,morphcolor_vertex:Uf,morphnormal_vertex:Nf,morphtarget_pars_vertex:Of,morphtarget_vertex:Ff,normal_fragment_begin:Bf,normal_fragment_maps:zf,normal_pars_fragment:kf,normal_pars_vertex:Hf,normal_vertex:Vf,normalmap_pars_fragment:Gf,clearcoat_normal_fragment_begin:Wf,clearcoat_normal_fragment_maps:Xf,clearcoat_pars_fragment:qf,iridescence_pars_fragment:Yf,opaque_fragment:$f,packing:Zf,premultiplied_alpha_fragment:Kf,project_vertex:Jf,dithering_fragment:jf,dithering_pars_fragment:Qf,roughnessmap_fragment:ep,roughnessmap_pars_fragment:tp,shadowmap_pars_fragment:np,shadowmap_pars_vertex:ip,shadowmap_vertex:sp,shadowmask_pars_fragment:rp,skinbase_vertex:ap,skinning_pars_vertex:op,skinning_vertex:lp,skinnormal_vertex:cp,specularmap_fragment:hp,specularmap_pars_fragment:up,tonemapping_fragment:dp,tonemapping_pars_fragment:fp,transmission_fragment:pp,transmission_pars_fragment:mp,uv_pars_fragment:gp,uv_pars_vertex:_p,uv_vertex:xp,worldpos_vertex:yp,background_vert:vp,background_frag:Mp,backgroundCube_vert:Sp,backgroundCube_frag:bp,cube_vert:Ep,cube_frag:Tp,depth_vert:wp,depth_frag:Ap,distanceRGBA_vert:Rp,distanceRGBA_frag:Cp,equirect_vert:Pp,equirect_frag:Ip,linedashed_vert:Lp,linedashed_frag:Dp,meshbasic_vert:Up,meshbasic_frag:Np,meshlambert_vert:Op,meshlambert_frag:Fp,meshmatcap_vert:Bp,meshmatcap_frag:zp,meshnormal_vert:kp,meshnormal_frag:Hp,meshphong_vert:Vp,meshphong_frag:Gp,meshphysical_vert:Wp,meshphysical_frag:Xp,meshtoon_vert:qp,meshtoon_frag:Yp,points_vert:$p,points_frag:Zp,shadow_vert:Kp,shadow_frag:Jp,sprite_vert:jp,sprite_frag:Qp},Re={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _t}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _t},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0},uvTransform:{value:new _t}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}}},ci={basic:{uniforms:wn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:wn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new vt(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:wn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:wn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:wn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new vt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:wn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:wn([Re.points,Re.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:wn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:wn([Re.common,Re.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:wn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:wn([Re.sprite,Re.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new _t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:wn([Re.common,Re.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:wn([Re.lights,Re.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};ci.physical={uniforms:wn([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _t},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _t},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _t},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _t},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _t},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _t},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _t}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};var Vr={r:0,b:0,g:0};function em(i,e,t,n,s,r,a){let o=new vt(0),l=r===!0?0:1,c,h,d=null,u=0,m=null;function _(p,f){let S=!1,y=f.isScene===!0?f.background:null;y&&y.isTexture&&(y=(f.backgroundBlurriness>0?t:e).get(y)),y===null?v(o,l):y&&y.isColor&&(v(y,1),S=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===wa)?(h===void 0&&(h=new rt(new Un(1,1,1),new vi({name:"BackgroundCubeMaterial",uniforms:Ns(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,P,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=Dt.getTransfer(y.colorSpace)!==Ht,(d!==y||u!==y.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,d=y,u=y.version,m=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new rt(new Cn(2,2),new vi({name:"BackgroundMaterial",uniforms:Ns(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:Bi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=Dt.getTransfer(y.colorSpace)!==Ht,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=y,u=y.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function v(p,f){p.getRGB(Vr,Th(i)),n.buffers.color.setClear(Vr.r,Vr.g,Vr.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(p,f=1){o.set(p),l=f,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,v(o,l)},render:_}}function tm(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=p(null),c=l,h=!1;function d(I,D,ee,Q,ne){let j=!1;if(a){let J=v(Q,ee,D);c!==J&&(c=J,m(c.object)),j=f(I,Q,ee,ne),j&&S(I,Q,ee,ne)}else{let J=D.wireframe===!0;(c.geometry!==Q.id||c.program!==ee.id||c.wireframe!==J)&&(c.geometry=Q.id,c.program=ee.id,c.wireframe=J,j=!0)}ne!==null&&t.update(ne,i.ELEMENT_ARRAY_BUFFER),(j||h)&&(h=!1,K(I,D,ee,Q),ne!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(ne).buffer))}function u(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(I){return n.isWebGL2?i.bindVertexArray(I):r.bindVertexArrayOES(I)}function _(I){return n.isWebGL2?i.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function v(I,D,ee){let Q=ee.wireframe===!0,ne=o[I.id];ne===void 0&&(ne={},o[I.id]=ne);let j=ne[D.id];j===void 0&&(j={},ne[D.id]=j);let J=j[Q];return J===void 0&&(J=p(u()),j[Q]=J),J}function p(I){let D=[],ee=[],Q=[];for(let ne=0;ne<s;ne++)D[ne]=0,ee[ne]=0,Q[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:ee,attributeDivisors:Q,object:I,attributes:{},index:null}}function f(I,D,ee,Q){let ne=c.attributes,j=D.attributes,J=0,fe=ee.getAttributes();for(let Ie in fe)if(fe[Ie].location>=0){let ue=ne[Ie],Pe=j[Ie];if(Pe===void 0&&(Ie==="instanceMatrix"&&I.instanceMatrix&&(Pe=I.instanceMatrix),Ie==="instanceColor"&&I.instanceColor&&(Pe=I.instanceColor)),ue===void 0||ue.attribute!==Pe||Pe&&ue.data!==Pe.data)return!0;J++}return c.attributesNum!==J||c.index!==Q}function S(I,D,ee,Q){let ne={},j=D.attributes,J=0,fe=ee.getAttributes();for(let Ie in fe)if(fe[Ie].location>=0){let ue=j[Ie];ue===void 0&&(Ie==="instanceMatrix"&&I.instanceMatrix&&(ue=I.instanceMatrix),Ie==="instanceColor"&&I.instanceColor&&(ue=I.instanceColor));let Pe={};Pe.attribute=ue,ue&&ue.data&&(Pe.data=ue.data),ne[Ie]=Pe,J++}c.attributes=ne,c.attributesNum=J,c.index=Q}function y(){let I=c.newAttributes;for(let D=0,ee=I.length;D<ee;D++)I[D]=0}function w(I){O(I,0)}function O(I,D){let ee=c.newAttributes,Q=c.enabledAttributes,ne=c.attributeDivisors;ee[I]=1,Q[I]===0&&(i.enableVertexAttribArray(I),Q[I]=1),ne[I]!==D&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,D),ne[I]=D)}function P(){let I=c.newAttributes,D=c.enabledAttributes;for(let ee=0,Q=D.length;ee<Q;ee++)D[ee]!==I[ee]&&(i.disableVertexAttribArray(ee),D[ee]=0)}function L(I,D,ee,Q,ne,j,J){J===!0?i.vertexAttribIPointer(I,D,ee,ne,j):i.vertexAttribPointer(I,D,ee,Q,ne,j)}function K(I,D,ee,Q){if(n.isWebGL2===!1&&(I.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();let ne=Q.attributes,j=ee.getAttributes(),J=D.defaultAttributeValues;for(let fe in j){let Ie=j[fe];if(Ie.location>=0){let te=ne[fe];if(te===void 0&&(fe==="instanceMatrix"&&I.instanceMatrix&&(te=I.instanceMatrix),fe==="instanceColor"&&I.instanceColor&&(te=I.instanceColor)),te!==void 0){let ue=te.normalized,Pe=te.itemSize,qe=t.get(te);if(qe===void 0)continue;let Ve=qe.buffer,nt=qe.type,ct=qe.bytesPerElement,Ke=n.isWebGL2===!0&&(nt===i.INT||nt===i.UNSIGNED_INT||te.gpuType===fh);if(te.isInterleavedBufferAttribute){let Mt=te.data,q=Mt.stride,hn=te.offset;if(Mt.isInstancedInterleavedBuffer){for(let Ye=0;Ye<Ie.locationSize;Ye++)O(Ie.location+Ye,Mt.meshPerAttribute);I.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let Ye=0;Ye<Ie.locationSize;Ye++)w(Ie.location+Ye);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let Ye=0;Ye<Ie.locationSize;Ye++)L(Ie.location+Ye,Pe/Ie.locationSize,nt,ue,q*ct,(hn+Pe/Ie.locationSize*Ye)*ct,Ke)}else{if(te.isInstancedBufferAttribute){for(let Mt=0;Mt<Ie.locationSize;Mt++)O(Ie.location+Mt,te.meshPerAttribute);I.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Mt=0;Mt<Ie.locationSize;Mt++)w(Ie.location+Mt);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let Mt=0;Mt<Ie.locationSize;Mt++)L(Ie.location+Mt,Pe/Ie.locationSize,nt,ue,Pe*ct,Pe/Ie.locationSize*Mt*ct,Ke)}}else if(J!==void 0){let ue=J[fe];if(ue!==void 0)switch(ue.length){case 2:i.vertexAttrib2fv(Ie.location,ue);break;case 3:i.vertexAttrib3fv(Ie.location,ue);break;case 4:i.vertexAttrib4fv(Ie.location,ue);break;default:i.vertexAttrib1fv(Ie.location,ue)}}}}P()}function b(){B();for(let I in o){let D=o[I];for(let ee in D){let Q=D[ee];for(let ne in Q)_(Q[ne].object),delete Q[ne];delete D[ee]}delete o[I]}}function A(I){if(o[I.id]===void 0)return;let D=o[I.id];for(let ee in D){let Q=D[ee];for(let ne in Q)_(Q[ne].object),delete Q[ne];delete D[ee]}delete o[I.id]}function U(I){for(let D in o){let ee=o[D];if(ee[I.id]===void 0)continue;let Q=ee[I.id];for(let ne in Q)_(Q[ne].object),delete Q[ne];delete ee[I.id]}}function B(){W(),h=!0,c!==l&&(c=l,m(c.object))}function W(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:B,resetDefaultState:W,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfProgram:U,initAttributes:y,enableAttribute:w,disableUnusedAttributes:P}}function nm(i,e,t,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,d){i.drawArrays(r,h,d),t.update(d,r,1)}function l(h,d,u){if(u===0)return;let m,_;if(s)m=i,_="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](r,h,d,u),t.update(d,r,u)}function c(h,d,u){if(u===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<u;_++)this.render(h[_],d[_]);else{m.multiDrawArraysWEBGL(r,h,0,d,0,u);let _=0;for(let v=0;v<u;v++)_+=d[v];t.update(_,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function im(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let L=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=u>0,w=a||e.has("OES_texture_float"),O=y&&w,P=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:m,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:S,vertexTextures:y,floatFragmentTextures:w,floatVertexTextures:O,maxSamples:P}}function sm(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Qn,o=new _t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let m=d.length!==0||u||n!==0||s;return s=u,n=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,m){let _=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,f=i.get(d);if(!s||_===null||_.length===0||r&&!p)r?h(null):c();else{let S=r?0:n,y=S*4,w=f.clippingState||null;l.value=w,w=h(_,u,y,m);for(let O=0;O!==y;++O)w[O]=t[O];f.clippingState=w,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,m,_){let v=d!==null?d.length:0,p=null;if(v!==0){if(p=l.value,_!==!0||p===null){let f=m+v*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<f)&&(p=new Float32Array(f));for(let y=0,w=m;y!==v;++y,w+=4)a.copy(d[y]).applyMatrix4(S,o),a.normal.toArray(p,w),p[w+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function rm(i){let e=new WeakMap;function t(a,o){return o===wo?a.mapping=Ls:o===Ao&&(a.mapping=Ds),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===wo||o===Ao)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Oo(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var ua=class extends ca{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ws=4,Nc=[.125,.215,.35,.446,.526,.582],Yi=20,mo=new ua,Oc=new vt,go=null,_o=0,xo=0,Xi=(1+Math.sqrt(5))/2,Es=1/Xi,Fc=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,Xi,Es),new F(0,Xi,-Es),new F(Es,0,Xi),new F(-Es,0,Xi),new F(Xi,Es,0),new F(-Xi,Es,0)],da=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){go=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),xo=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(go,_o,xo),e.scissorTest=!1,Gr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ls||e.mapping===Ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),go=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),xo=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:nr,format:ti,colorSpace:xi,depthBuffer:!1},s=Bc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bc(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=am(r)),this._blurMaterial=om(r,e,t)}return s}_compileMaterial(e){let t=new rt(this._lodPlanes[0],e);this._renderer.compile(t,mo)}_sceneToCubeUV(e,t,n,s){let o=new Rn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Oc),h.toneMapping=Oi,h.autoClear=!1;let m=new qt({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1}),_=new rt(new Un,m),v=!1,p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(Oc),v=!0);for(let f=0;f<6;f++){let S=f%3;S===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):S===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));let y=this._cubeSize;Gr(s,S*y,f>2?y:0,y,y),h.setRenderTarget(s),v&&h.render(_,o),h.render(e,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ls||e.mapping===Ds;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=kc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zc());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new rt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Gr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,mo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Fc[(s-1)%Fc.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new rt(this._lodPlanes[s],c),u=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Yi-1),v=r/_,p=isFinite(r)?1+Math.floor(h*v):Yi;p>Yi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Yi}`);let f=[],S=0;for(let L=0;L<Yi;++L){let K=L/v,b=Math.exp(-K*K/2);f.push(b),L===0?S+=b:L<p&&(S+=2*b)}for(let L=0;L<f.length;L++)f[L]=f[L]/S;u.envMap.value=e.texture,u.samples.value=p,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:y}=this;u.dTheta.value=_,u.mipInt.value=y-n;let w=this._sizeLods[s],O=3*w*(s>y-ws?s-y+ws:0),P=4*(this._cubeSize-w);Gr(t,O,P,3*w,2*w),l.setRenderTarget(t),l.render(d,mo)}};function am(i){let e=[],t=[],n=[],s=i,r=i-ws+1+Nc.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-ws?l=Nc[a-i+ws-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,_=6,v=3,p=2,f=1,S=new Float32Array(v*_*m),y=new Float32Array(p*_*m),w=new Float32Array(f*_*m);for(let P=0;P<m;P++){let L=P%3*2/3-1,K=P>2?0:-1,b=[L,K,0,L+2/3,K,0,L+2/3,K+1,0,L,K,0,L+2/3,K+1,0,L,K+1,0];S.set(b,v*_*P),y.set(u,p*_*P);let A=[P,P,P,P,P,P];w.set(A,f*_*P)}let O=new si;O.setAttribute("position",new Wn(S,v)),O.setAttribute("uv",new Wn(y,p)),O.setAttribute("faceIndex",new Wn(w,f)),e.push(O),s>ws&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Bc(i,e,t){let n=new yi(i,e,t);return n.texture.mapping=wa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function om(i,e,t){let n=new Float32Array(Yi),s=new F(0,1,0);return new vi({name:"SphericalGaussianBlur",defines:{n:Yi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:vl(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function zc(){return new vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vl(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function kc(){return new vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function vl(){return`

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
	`}function lm(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===wo||l===Ao,h=l===Ls||l===Ds;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new da(i)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{let d=o.image;if(c&&d&&d.height>0||h&&d&&s(d)){t===null&&(t=new da(i));let u=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,u),o.addEventListener("dispose",r),u.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function cm(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function hm(i,e,t,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let _ in u.attributes)e.remove(u.attributes[_]);for(let _ in u.morphAttributes){let v=u.morphAttributes[_];for(let p=0,f=v.length;p<f;p++)e.remove(v[p])}u.removeEventListener("dispose",a),delete s[u.id];let m=r.get(u);m&&(e.remove(m),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let _ in u)e.update(u[_],i.ARRAY_BUFFER);let m=d.morphAttributes;for(let _ in m){let v=m[_];for(let p=0,f=v.length;p<f;p++)e.update(v[p],i.ARRAY_BUFFER)}}function c(d){let u=[],m=d.index,_=d.attributes.position,v=0;if(m!==null){let S=m.array;v=m.version;for(let y=0,w=S.length;y<w;y+=3){let O=S[y+0],P=S[y+1],L=S[y+2];u.push(O,P,P,L,L,O)}}else if(_!==void 0){let S=_.array;v=_.version;for(let y=0,w=S.length/3-1;y<w;y+=3){let O=y+0,P=y+1,L=y+2;u.push(O,P,P,L,L,O)}}else return;let p=new(bh(u)?la:oa)(u,1);p.version=v;let f=r.get(d);f&&e.remove(f),r.set(d,p)}function h(d){let u=r.get(d);if(u){let m=d.index;m!==null&&u.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function um(i,e,t,n){let s=n.isWebGL2,r;function a(m){r=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function h(m,_){i.drawElements(r,_,o,m*l),t.update(_,r,1)}function d(m,_,v){if(v===0)return;let p,f;if(s)p=i,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](r,_,o,m*l,v),t.update(_,r,v)}function u(m,_,v){if(v===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<v;f++)this.render(m[f]/l,_[f]);else{p.multiDrawElementsWEBGL(r,_,0,o,m,0,v);let f=0;for(let S=0;S<v;S++)f+=_[S];t.update(f,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=u}function dm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function fm(i,e){return i[0]-e[0]}function pm(i,e){return Math.abs(e[1])-Math.abs(i[1])}function mm(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,a=new _n,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,d){let u=c.morphTargetInfluences;if(e.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=m!==void 0?m.length:0,v=r.get(h);if(v===void 0||v.count!==_){let I=function(){B.dispose(),r.delete(h),h.removeEventListener("dispose",I)};v!==void 0&&v.texture.dispose();let S=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,O=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],L=h.morphAttributes.color||[],K=0;S===!0&&(K=1),y===!0&&(K=2),w===!0&&(K=3);let b=h.attributes.position.count*K,A=1;b>e.maxTextureSize&&(A=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let U=new Float32Array(b*A*4*_),B=new sa(U,b,A,_);B.type=Ui,B.needsUpdate=!0;let W=K*4;for(let D=0;D<_;D++){let ee=O[D],Q=P[D],ne=L[D],j=b*A*4*D;for(let J=0;J<ee.count;J++){let fe=J*W;S===!0&&(a.fromBufferAttribute(ee,J),U[j+fe+0]=a.x,U[j+fe+1]=a.y,U[j+fe+2]=a.z,U[j+fe+3]=0),y===!0&&(a.fromBufferAttribute(Q,J),U[j+fe+4]=a.x,U[j+fe+5]=a.y,U[j+fe+6]=a.z,U[j+fe+7]=0),w===!0&&(a.fromBufferAttribute(ne,J),U[j+fe+8]=a.x,U[j+fe+9]=a.y,U[j+fe+10]=a.z,U[j+fe+11]=ne.itemSize===4?a.w:1)}}v={count:_,texture:B,size:new Ue(b,A)},r.set(h,v),h.addEventListener("dispose",I)}let p=0;for(let S=0;S<u.length;S++)p+=u[S];let f=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(i,"morphTargetBaseInfluence",f),d.getUniforms().setValue(i,"morphTargetInfluences",u),d.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}else{let m=u===void 0?0:u.length,_=n[h.id];if(_===void 0||_.length!==m){_=[];for(let y=0;y<m;y++)_[y]=[y,0];n[h.id]=_}for(let y=0;y<m;y++){let w=_[y];w[0]=y,w[1]=u[y]}_.sort(pm);for(let y=0;y<8;y++)y<m&&_[y][1]?(o[y][0]=_[y][0],o[y][1]=_[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(fm);let v=h.morphAttributes.position,p=h.morphAttributes.normal,f=0;for(let y=0;y<8;y++){let w=o[y],O=w[0],P=w[1];O!==Number.MAX_SAFE_INTEGER&&P?(v&&h.getAttribute("morphTarget"+y)!==v[O]&&h.setAttribute("morphTarget"+y,v[O]),p&&h.getAttribute("morphNormal"+y)!==p[O]&&h.setAttribute("morphNormal"+y,p[O]),s[y]=P,f+=P):(v&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),p&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),s[y]=0)}let S=h.morphTargetsRelative?1:1-f;d.getUniforms().setValue(i,"morphTargetBaseInfluence",S),d.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function gm(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var fa=class extends ii{constructor(e,t,n,s,r,a,o,l,c,h){if(h=h!==void 0?h:Zi,h!==Zi&&h!==Us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Zi&&(n=Di),n===void 0&&h===Us&&(n=$i),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:An,this.minFilter=l!==void 0?l:An,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ah=new ii,Rh=new fa(1,1);Rh.compareFunction=Sh;var Ch=new sa,Ph=new Uo,Ih=new ha,Hc=[],Vc=[],Gc=new Float32Array(16),Wc=new Float32Array(9),Xc=new Float32Array(4);function ks(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Hc[s];if(r===void 0&&(r=new Float32Array(s),Hc[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function ln(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function cn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ra(i,e){let t=Vc[e];t===void 0&&(t=new Int32Array(e),Vc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function _m(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function xm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;i.uniform2fv(this.addr,e),cn(t,e)}}function ym(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ln(t,e))return;i.uniform3fv(this.addr,e),cn(t,e)}}function vm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;i.uniform4fv(this.addr,e),cn(t,e)}}function Mm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(ln(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,n))return;Xc.set(n),i.uniformMatrix2fv(this.addr,!1,Xc),cn(t,n)}}function Sm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(ln(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,n))return;Wc.set(n),i.uniformMatrix3fv(this.addr,!1,Wc),cn(t,n)}}function bm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(ln(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,n))return;Gc.set(n),i.uniformMatrix4fv(this.addr,!1,Gc),cn(t,n)}}function Em(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Tm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;i.uniform2iv(this.addr,e),cn(t,e)}}function wm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;i.uniform3iv(this.addr,e),cn(t,e)}}function Am(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;i.uniform4iv(this.addr,e),cn(t,e)}}function Rm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Cm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;i.uniform2uiv(this.addr,e),cn(t,e)}}function Pm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;i.uniform3uiv(this.addr,e),cn(t,e)}}function Im(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;i.uniform4uiv(this.addr,e),cn(t,e)}}function Lm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Rh:Ah;t.setTexture2D(e||r,s)}function Dm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Ph,s)}function Um(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Ih,s)}function Nm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Ch,s)}function Om(i){switch(i){case 5126:return _m;case 35664:return xm;case 35665:return ym;case 35666:return vm;case 35674:return Mm;case 35675:return Sm;case 35676:return bm;case 5124:case 35670:return Em;case 35667:case 35671:return Tm;case 35668:case 35672:return wm;case 35669:case 35673:return Am;case 5125:return Rm;case 36294:return Cm;case 36295:return Pm;case 36296:return Im;case 35678:case 36198:case 36298:case 36306:case 35682:return Lm;case 35679:case 36299:case 36307:return Dm;case 35680:case 36300:case 36308:case 36293:return Um;case 36289:case 36303:case 36311:case 36292:return Nm}}function Fm(i,e){i.uniform1fv(this.addr,e)}function Bm(i,e){let t=ks(e,this.size,2);i.uniform2fv(this.addr,t)}function zm(i,e){let t=ks(e,this.size,3);i.uniform3fv(this.addr,t)}function km(i,e){let t=ks(e,this.size,4);i.uniform4fv(this.addr,t)}function Hm(i,e){let t=ks(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Vm(i,e){let t=ks(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Gm(i,e){let t=ks(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Wm(i,e){i.uniform1iv(this.addr,e)}function Xm(i,e){i.uniform2iv(this.addr,e)}function qm(i,e){i.uniform3iv(this.addr,e)}function Ym(i,e){i.uniform4iv(this.addr,e)}function $m(i,e){i.uniform1uiv(this.addr,e)}function Zm(i,e){i.uniform2uiv(this.addr,e)}function Km(i,e){i.uniform3uiv(this.addr,e)}function Jm(i,e){i.uniform4uiv(this.addr,e)}function jm(i,e,t){let n=this.cache,s=e.length,r=Ra(t,s);ln(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Ah,r[a])}function Qm(i,e,t){let n=this.cache,s=e.length,r=Ra(t,s);ln(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Ph,r[a])}function eg(i,e,t){let n=this.cache,s=e.length,r=Ra(t,s);ln(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Ih,r[a])}function tg(i,e,t){let n=this.cache,s=e.length,r=Ra(t,s);ln(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Ch,r[a])}function ng(i){switch(i){case 5126:return Fm;case 35664:return Bm;case 35665:return zm;case 35666:return km;case 35674:return Hm;case 35675:return Vm;case 35676:return Gm;case 5124:case 35670:return Wm;case 35667:case 35671:return Xm;case 35668:case 35672:return qm;case 35669:case 35673:return Ym;case 5125:return $m;case 36294:return Zm;case 36295:return Km;case 36296:return Jm;case 35678:case 36198:case 36298:case 36306:case 35682:return jm;case 35679:case 36299:case 36307:return Qm;case 35680:case 36300:case 36308:case 36293:return eg;case 36289:case 36303:case 36311:case 36292:return tg}}var Fo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Om(t.type)}},Bo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ng(t.type)}},zo=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},yo=/(\w+)(\])?(\[|\.)?/g;function qc(i,e){i.seq.push(e),i.map[e.id]=e}function ig(i,e,t){let n=i.name,s=n.length;for(yo.lastIndex=0;;){let r=yo.exec(n),a=yo.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){qc(t,c===void 0?new Fo(o,i,e):new Bo(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new zo(o),qc(t,d)),t=d}}}var Is=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);ig(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Yc(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var sg=37297,rg=0;function ag(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function og(i){let e=Dt.getPrimaries(Dt.workingColorSpace),t=Dt.getPrimaries(i),n;switch(e===t?n="":e===Qr&&t===jr?n="LinearDisplayP3ToLinearSRGB":e===jr&&t===Qr&&(n="LinearSRGBToLinearDisplayP3"),i){case xi:case Aa:return[n,"LinearTransferOETF"];case xn:case yl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function $c(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+ag(i.getShaderSource(e),a)}else return s}function lg(i,e){let t=og(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function cg(i,e){let t;switch(e){case wu:t="Linear";break;case Au:t="Reinhard";break;case Ru:t="OptimizedCineon";break;case Cu:t="ACESFilmic";break;case Iu:t="AgX";break;case Pu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function hg(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(As).join(`
`)}function ug(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(As).join(`
`)}function dg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function fg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function As(i){return i!==""}function Zc(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var pg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ko(i){return i.replace(pg,gg)}var mg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function gg(i,e){let t=pt[e];if(t===void 0){let n=mg.get(e);if(n!==void 0)t=pt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ko(t)}var _g=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jc(i){return i.replace(_g,xg)}function xg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function jc(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function yg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===hh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===_l?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===gi&&(e="SHADOWMAP_TYPE_VSM"),e}function vg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ls:case Ds:e="ENVMAP_TYPE_CUBE";break;case wa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Mg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ds:e="ENVMAP_MODE_REFRACTION";break}return e}function Sg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case uh:e="ENVMAP_BLENDING_MULTIPLY";break;case Eu:e="ENVMAP_BLENDING_MIX";break;case Tu:e="ENVMAP_BLENDING_ADD";break}return e}function bg(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Eg(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=yg(t),c=vg(t),h=Mg(t),d=Sg(t),u=bg(t),m=t.isWebGL2?"":hg(t),_=ug(t),v=dg(r),p=s.createProgram(),f,S,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(As).join(`
`),f.length>0&&(f+=`
`),S=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(As).join(`
`),S.length>0&&(S+=`
`)):(f=[jc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(As).join(`
`),S=[m,jc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Oi?"#define TONE_MAPPING":"",t.toneMapping!==Oi?pt.tonemapping_pars_fragment:"",t.toneMapping!==Oi?cg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,lg("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(As).join(`
`)),a=ko(a),a=Zc(a,t),a=Kc(a,t),o=ko(o),o=Zc(o,t),o=Kc(o,t),a=Jc(a),o=Jc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,f=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===_c?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_c?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);let w=y+f+a,O=y+S+o,P=Yc(s,s.VERTEX_SHADER,w),L=Yc(s,s.FRAGMENT_SHADER,O);s.attachShader(p,P),s.attachShader(p,L),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function K(B){if(i.debug.checkShaderErrors){let W=s.getProgramInfoLog(p).trim(),I=s.getShaderInfoLog(P).trim(),D=s.getShaderInfoLog(L).trim(),ee=!0,Q=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(ee=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,P,L);else{let ne=$c(s,P,"vertex"),j=$c(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+W+`
`+ne+`
`+j)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(I===""||D==="")&&(Q=!1);Q&&(B.diagnostics={runnable:ee,programLog:W,vertexShader:{log:I,prefix:f},fragmentShader:{log:D,prefix:S}})}s.deleteShader(P),s.deleteShader(L),b=new Is(s,p),A=fg(s,p)}let b;this.getUniforms=function(){return b===void 0&&K(this),b};let A;this.getAttributes=function(){return A===void 0&&K(this),A};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(p,sg)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rg++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=P,this.fragmentShader=L,this}var Tg=0,Ho=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Vo(e),t.set(e,n)),n}},Vo=class{constructor(e){this.id=Tg++,this.code=e,this.usedTimes=0}};function wg(i,e,t,n,s,r,a){let o=new sr,l=new Ho,c=[],h=s.isWebGL2,d=s.logarithmicDepthBuffer,u=s.vertexTextures,m=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return b===0?"uv":`uv${b}`}function p(b,A,U,B,W){let I=B.fog,D=W.geometry,ee=b.isMeshStandardMaterial?B.environment:null,Q=(b.isMeshStandardMaterial?t:e).get(b.envMap||ee),ne=Q&&Q.mapping===wa?Q.image.height:null,j=_[b.type];b.precision!==null&&(m=s.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));let J=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,fe=J!==void 0?J.length:0,Ie=0;D.morphAttributes.position!==void 0&&(Ie=1),D.morphAttributes.normal!==void 0&&(Ie=2),D.morphAttributes.color!==void 0&&(Ie=3);let te,ue,Pe,qe;if(j){let Ut=ci[j];te=Ut.vertexShader,ue=Ut.fragmentShader}else te=b.vertexShader,ue=b.fragmentShader,l.update(b),Pe=l.getVertexShaderID(b),qe=l.getFragmentShaderID(b);let Ve=i.getRenderTarget(),nt=W.isInstancedMesh===!0,ct=W.isBatchedMesh===!0,Ke=!!b.map,Mt=!!b.matcap,q=!!Q,hn=!!b.aoMap,Ye=!!b.lightMap,et=!!b.bumpMap,ke=!!b.normalMap,Bt=!!b.displacementMap,ut=!!b.emissiveMap,T=!!b.metalnessMap,M=!!b.roughnessMap,Y=b.anisotropy>0,pe=b.clearcoat>0,de=b.iridescence>0,_e=b.sheen>0,Oe=b.transmission>0,ye=Y&&!!b.anisotropyMap,Ee=pe&&!!b.clearcoatMap,ze=pe&&!!b.clearcoatNormalMap,tt=pe&&!!b.clearcoatRoughnessMap,he=de&&!!b.iridescenceMap,at=de&&!!b.iridescenceThicknessMap,it=_e&&!!b.sheenColorMap,Te=_e&&!!b.sheenRoughnessMap,we=!!b.specularMap,Se=!!b.specularColorMap,He=!!b.specularIntensityMap,Tt=Oe&&!!b.transmissionMap,Vt=Oe&&!!b.thicknessMap,st=!!b.gradientMap,xe=!!b.alphaMap,N=b.alphaTest>0,Ae=!!b.alphaHash,Me=!!b.extensions,De=!!D.attributes.uv1,Fe=!!D.attributes.uv2,St=!!D.attributes.uv3,mt=Oi;return b.toneMapped&&(Ve===null||Ve.isXRRenderTarget===!0)&&(mt=i.toneMapping),{isWebGL2:h,shaderID:j,shaderType:b.type,shaderName:b.name,vertexShader:te,fragmentShader:ue,defines:b.defines,customVertexShaderID:Pe,customFragmentShaderID:qe,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:ct,instancing:nt,instancingColor:nt&&W.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:Ve===null?i.outputColorSpace:Ve.isXRRenderTarget===!0?Ve.texture.colorSpace:xi,map:Ke,matcap:Mt,envMap:q,envMapMode:q&&Q.mapping,envMapCubeUVHeight:ne,aoMap:hn,lightMap:Ye,bumpMap:et,normalMap:ke,displacementMap:u&&Bt,emissiveMap:ut,normalMapObjectSpace:ke&&b.normalMapType===Gu,normalMapTangentSpace:ke&&b.normalMapType===Mh,metalnessMap:T,roughnessMap:M,anisotropy:Y,anisotropyMap:ye,clearcoat:pe,clearcoatMap:Ee,clearcoatNormalMap:ze,clearcoatRoughnessMap:tt,iridescence:de,iridescenceMap:he,iridescenceThicknessMap:at,sheen:_e,sheenColorMap:it,sheenRoughnessMap:Te,specularMap:we,specularColorMap:Se,specularIntensityMap:He,transmission:Oe,transmissionMap:Tt,thicknessMap:Vt,gradientMap:st,opaque:b.transparent===!1&&b.blending===Cs,alphaMap:xe,alphaTest:N,alphaHash:Ae,combine:b.combine,mapUv:Ke&&v(b.map.channel),aoMapUv:hn&&v(b.aoMap.channel),lightMapUv:Ye&&v(b.lightMap.channel),bumpMapUv:et&&v(b.bumpMap.channel),normalMapUv:ke&&v(b.normalMap.channel),displacementMapUv:Bt&&v(b.displacementMap.channel),emissiveMapUv:ut&&v(b.emissiveMap.channel),metalnessMapUv:T&&v(b.metalnessMap.channel),roughnessMapUv:M&&v(b.roughnessMap.channel),anisotropyMapUv:ye&&v(b.anisotropyMap.channel),clearcoatMapUv:Ee&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:ze&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:at&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:it&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Te&&v(b.sheenRoughnessMap.channel),specularMapUv:we&&v(b.specularMap.channel),specularColorMapUv:Se&&v(b.specularColorMap.channel),specularIntensityMapUv:He&&v(b.specularIntensityMap.channel),transmissionMapUv:Tt&&v(b.transmissionMap.channel),thicknessMapUv:Vt&&v(b.thicknessMap.channel),alphaMapUv:xe&&v(b.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(ke||Y),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUv1s:De,vertexUv2s:Fe,vertexUv3s:St,pointsUvs:W.isPoints===!0&&!!D.attributes.uv&&(Ke||xe),fog:!!I,useFog:b.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:W.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Ie,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:mt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ke&&b.map.isVideoTexture===!0&&Dt.getTransfer(b.map.colorSpace)===Ht,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Kt,flipSided:b.side===Ln,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:Me&&b.extensions.derivatives===!0,extensionFragDepth:Me&&b.extensions.fragDepth===!0,extensionDrawBuffers:Me&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:Me&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Me&&b.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function f(b){let A=[];if(b.shaderID?A.push(b.shaderID):(A.push(b.customVertexShaderID),A.push(b.customFragmentShaderID)),b.defines!==void 0)for(let U in b.defines)A.push(U),A.push(b.defines[U]);return b.isRawShaderMaterial===!1&&(S(A,b),y(A,b),A.push(i.outputColorSpace)),A.push(b.customProgramCacheKey),A.join()}function S(b,A){b.push(A.precision),b.push(A.outputColorSpace),b.push(A.envMapMode),b.push(A.envMapCubeUVHeight),b.push(A.mapUv),b.push(A.alphaMapUv),b.push(A.lightMapUv),b.push(A.aoMapUv),b.push(A.bumpMapUv),b.push(A.normalMapUv),b.push(A.displacementMapUv),b.push(A.emissiveMapUv),b.push(A.metalnessMapUv),b.push(A.roughnessMapUv),b.push(A.anisotropyMapUv),b.push(A.clearcoatMapUv),b.push(A.clearcoatNormalMapUv),b.push(A.clearcoatRoughnessMapUv),b.push(A.iridescenceMapUv),b.push(A.iridescenceThicknessMapUv),b.push(A.sheenColorMapUv),b.push(A.sheenRoughnessMapUv),b.push(A.specularMapUv),b.push(A.specularColorMapUv),b.push(A.specularIntensityMapUv),b.push(A.transmissionMapUv),b.push(A.thicknessMapUv),b.push(A.combine),b.push(A.fogExp2),b.push(A.sizeAttenuation),b.push(A.morphTargetsCount),b.push(A.morphAttributeCount),b.push(A.numDirLights),b.push(A.numPointLights),b.push(A.numSpotLights),b.push(A.numSpotLightMaps),b.push(A.numHemiLights),b.push(A.numRectAreaLights),b.push(A.numDirLightShadows),b.push(A.numPointLightShadows),b.push(A.numSpotLightShadows),b.push(A.numSpotLightShadowsWithMaps),b.push(A.numLightProbes),b.push(A.shadowMapType),b.push(A.toneMapping),b.push(A.numClippingPlanes),b.push(A.numClipIntersection),b.push(A.depthPacking)}function y(b,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),A.batching&&o.enable(19),b.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),b.push(o.mask)}function w(b){let A=_[b.type],U;if(A){let B=ci[A];U=pd.clone(B.uniforms)}else U=b.uniforms;return U}function O(b,A){let U;for(let B=0,W=c.length;B<W;B++){let I=c[B];if(I.cacheKey===A){U=I,++U.usedTimes;break}}return U===void 0&&(U=new Eg(i,A,b,r),c.push(U)),U}function P(b){if(--b.usedTimes===0){let A=c.indexOf(b);c[A]=c[c.length-1],c.pop(),b.destroy()}}function L(b){l.remove(b)}function K(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:w,acquireProgram:O,releaseProgram:P,releaseShaderCache:L,programs:c,dispose:K}}function Ag(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Rg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Qc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function eh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d,u,m,_,v,p){let f=i[e];return f===void 0?(f={id:d.id,object:d,geometry:u,material:m,groupOrder:_,renderOrder:d.renderOrder,z:v,group:p},i[e]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=m,f.groupOrder=_,f.renderOrder=d.renderOrder,f.z=v,f.group=p),e++,f}function o(d,u,m,_,v,p){let f=a(d,u,m,_,v,p);m.transmission>0?n.push(f):m.transparent===!0?s.push(f):t.push(f)}function l(d,u,m,_,v,p){let f=a(d,u,m,_,v,p);m.transmission>0?n.unshift(f):m.transparent===!0?s.unshift(f):t.unshift(f)}function c(d,u){t.length>1&&t.sort(d||Rg),n.length>1&&n.sort(u||Qc),s.length>1&&s.sort(u||Qc)}function h(){for(let d=e,u=i.length;d<u;d++){let m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Cg(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new eh,i.set(n,[a])):s>=r.length?(a=new eh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Pg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new vt};break;case"SpotLight":t={position:new F,direction:new F,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new vt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":t={color:new vt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function Ig(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Lg=0;function Dg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ug(i,e){let t=new Pg,n=Ig(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new F);let r=new F,a=new on,o=new on;function l(h,d){let u=0,m=0,_=0;for(let B=0;B<9;B++)s.probe[B].set(0,0,0);let v=0,p=0,f=0,S=0,y=0,w=0,O=0,P=0,L=0,K=0,b=0;h.sort(Dg);let A=d===!0?Math.PI:1;for(let B=0,W=h.length;B<W;B++){let I=h[B],D=I.color,ee=I.intensity,Q=I.distance,ne=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=D.r*ee*A,m+=D.g*ee*A,_+=D.b*ee*A;else if(I.isLightProbe){for(let j=0;j<9;j++)s.probe[j].addScaledVector(I.sh.coefficients[j],ee);b++}else if(I.isDirectionalLight){let j=t.get(I);if(j.color.copy(I.color).multiplyScalar(I.intensity*A),I.castShadow){let J=I.shadow,fe=n.get(I);fe.shadowBias=J.bias,fe.shadowNormalBias=J.normalBias,fe.shadowRadius=J.radius,fe.shadowMapSize=J.mapSize,s.directionalShadow[v]=fe,s.directionalShadowMap[v]=ne,s.directionalShadowMatrix[v]=I.shadow.matrix,w++}s.directional[v]=j,v++}else if(I.isSpotLight){let j=t.get(I);j.position.setFromMatrixPosition(I.matrixWorld),j.color.copy(D).multiplyScalar(ee*A),j.distance=Q,j.coneCos=Math.cos(I.angle),j.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),j.decay=I.decay,s.spot[f]=j;let J=I.shadow;if(I.map&&(s.spotLightMap[L]=I.map,L++,J.updateMatrices(I),I.castShadow&&K++),s.spotLightMatrix[f]=J.matrix,I.castShadow){let fe=n.get(I);fe.shadowBias=J.bias,fe.shadowNormalBias=J.normalBias,fe.shadowRadius=J.radius,fe.shadowMapSize=J.mapSize,s.spotShadow[f]=fe,s.spotShadowMap[f]=ne,P++}f++}else if(I.isRectAreaLight){let j=t.get(I);j.color.copy(D).multiplyScalar(ee),j.halfWidth.set(I.width*.5,0,0),j.halfHeight.set(0,I.height*.5,0),s.rectArea[S]=j,S++}else if(I.isPointLight){let j=t.get(I);if(j.color.copy(I.color).multiplyScalar(I.intensity*A),j.distance=I.distance,j.decay=I.decay,I.castShadow){let J=I.shadow,fe=n.get(I);fe.shadowBias=J.bias,fe.shadowNormalBias=J.normalBias,fe.shadowRadius=J.radius,fe.shadowMapSize=J.mapSize,fe.shadowCameraNear=J.camera.near,fe.shadowCameraFar=J.camera.far,s.pointShadow[p]=fe,s.pointShadowMap[p]=ne,s.pointShadowMatrix[p]=I.shadow.matrix,O++}s.point[p]=j,p++}else if(I.isHemisphereLight){let j=t.get(I);j.skyColor.copy(I.color).multiplyScalar(ee*A),j.groundColor.copy(I.groundColor).multiplyScalar(ee*A),s.hemi[y]=j,y++}}S>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Re.LTC_FLOAT_1,s.rectAreaLTC2=Re.LTC_FLOAT_2):(s.rectAreaLTC1=Re.LTC_HALF_1,s.rectAreaLTC2=Re.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Re.LTC_FLOAT_1,s.rectAreaLTC2=Re.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Re.LTC_HALF_1,s.rectAreaLTC2=Re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=u,s.ambient[1]=m,s.ambient[2]=_;let U=s.hash;(U.directionalLength!==v||U.pointLength!==p||U.spotLength!==f||U.rectAreaLength!==S||U.hemiLength!==y||U.numDirectionalShadows!==w||U.numPointShadows!==O||U.numSpotShadows!==P||U.numSpotMaps!==L||U.numLightProbes!==b)&&(s.directional.length=v,s.spot.length=f,s.rectArea.length=S,s.point.length=p,s.hemi.length=y,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=P+L-K,s.spotLightMap.length=L,s.numSpotLightShadowsWithMaps=K,s.numLightProbes=b,U.directionalLength=v,U.pointLength=p,U.spotLength=f,U.rectAreaLength=S,U.hemiLength=y,U.numDirectionalShadows=w,U.numPointShadows=O,U.numSpotShadows=P,U.numSpotMaps=L,U.numLightProbes=b,s.version=Lg++)}function c(h,d){let u=0,m=0,_=0,v=0,p=0,f=d.matrixWorldInverse;for(let S=0,y=h.length;S<y;S++){let w=h[S];if(w.isDirectionalLight){let O=s.directional[u];O.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),O.direction.sub(r),O.direction.transformDirection(f),u++}else if(w.isSpotLight){let O=s.spot[_];O.position.setFromMatrixPosition(w.matrixWorld),O.position.applyMatrix4(f),O.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),O.direction.sub(r),O.direction.transformDirection(f),_++}else if(w.isRectAreaLight){let O=s.rectArea[v];O.position.setFromMatrixPosition(w.matrixWorld),O.position.applyMatrix4(f),o.identity(),a.copy(w.matrixWorld),a.premultiply(f),o.extractRotation(a),O.halfWidth.set(w.width*.5,0,0),O.halfHeight.set(0,w.height*.5,0),O.halfWidth.applyMatrix4(o),O.halfHeight.applyMatrix4(o),v++}else if(w.isPointLight){let O=s.point[m];O.position.setFromMatrixPosition(w.matrixWorld),O.position.applyMatrix4(f),m++}else if(w.isHemisphereLight){let O=s.hemi[p];O.direction.setFromMatrixPosition(w.matrixWorld),O.direction.transformDirection(f),p++}}}return{setup:l,setupView:c,state:s}}function th(i,e){let t=new Ug(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(d){n.push(d)}function o(d){s.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Ng(i,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),l;return o===void 0?(l=new th(i,e),t.set(r,[l])):a>=o.length?(l=new th(i,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:n,dispose:s}}var Go=class extends ji{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Wo=class extends ji{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Og=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fg=`uniform sampler2D shadow_pass;
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
}`;function Bg(i,e,t){let n=new rr,s=new Ue,r=new Ue,a=new _n,o=new Go({depthPacking:Vu}),l=new Wo,c={},h=t.maxTextureSize,d={[Bi]:Ln,[Ln]:Bi,[Kt]:Kt},u=new vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:Og,fragmentShader:Fg}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let _=new si;_.setAttribute("position",new Wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new rt(_,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hh;let f=this.type;this.render=function(P,L,K){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||P.length===0)return;let b=i.getRenderTarget(),A=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Ni),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let W=f!==gi&&this.type===gi,I=f===gi&&this.type!==gi;for(let D=0,ee=P.length;D<ee;D++){let Q=P[D],ne=Q.shadow;if(ne===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(ne.autoUpdate===!1&&ne.needsUpdate===!1)continue;s.copy(ne.mapSize);let j=ne.getFrameExtents();if(s.multiply(j),r.copy(ne.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,ne.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,ne.mapSize.y=r.y)),ne.map===null||W===!0||I===!0){let fe=this.type!==gi?{minFilter:An,magFilter:An}:{};ne.map!==null&&ne.map.dispose(),ne.map=new yi(s.x,s.y,fe),ne.map.texture.name=Q.name+".shadowMap",ne.camera.updateProjectionMatrix()}i.setRenderTarget(ne.map),i.clear();let J=ne.getViewportCount();for(let fe=0;fe<J;fe++){let Ie=ne.getViewport(fe);a.set(r.x*Ie.x,r.y*Ie.y,r.x*Ie.z,r.y*Ie.w),B.viewport(a),ne.updateMatrices(Q,fe),n=ne.getFrustum(),w(L,K,ne.camera,Q,this.type)}ne.isPointLightShadow!==!0&&this.type===gi&&S(ne,K),ne.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(b,A,U)};function S(P,L){let K=e.update(v);u.defines.VSM_SAMPLES!==P.blurSamples&&(u.defines.VSM_SAMPLES=P.blurSamples,m.defines.VSM_SAMPLES=P.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new yi(s.x,s.y)),u.uniforms.shadow_pass.value=P.map.texture,u.uniforms.resolution.value=P.mapSize,u.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(L,null,K,u,v,null),m.uniforms.shadow_pass.value=P.mapPass.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(L,null,K,m,v,null)}function y(P,L,K,b){let A=null,U=K.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(U!==void 0)A=U;else if(A=K.isPointLight===!0?l:o,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){let B=A.uuid,W=L.uuid,I=c[B];I===void 0&&(I={},c[B]=I);let D=I[W];D===void 0&&(D=A.clone(),I[W]=D,L.addEventListener("dispose",O)),A=D}if(A.visible=L.visible,A.wireframe=L.wireframe,b===gi?A.side=L.shadowSide!==null?L.shadowSide:L.side:A.side=L.shadowSide!==null?L.shadowSide:d[L.side],A.alphaMap=L.alphaMap,A.alphaTest=L.alphaTest,A.map=L.map,A.clipShadows=L.clipShadows,A.clippingPlanes=L.clippingPlanes,A.clipIntersection=L.clipIntersection,A.displacementMap=L.displacementMap,A.displacementScale=L.displacementScale,A.displacementBias=L.displacementBias,A.wireframeLinewidth=L.wireframeLinewidth,A.linewidth=L.linewidth,K.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let B=i.properties.get(A);B.light=K}return A}function w(P,L,K,b,A){if(P.visible===!1)return;if(P.layers.test(L.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&A===gi)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,P.matrixWorld);let W=e.update(P),I=P.material;if(Array.isArray(I)){let D=W.groups;for(let ee=0,Q=D.length;ee<Q;ee++){let ne=D[ee],j=I[ne.materialIndex];if(j&&j.visible){let J=y(P,j,b,A);P.onBeforeShadow(i,P,L,K,W,J,ne),i.renderBufferDirect(K,null,W,J,P,ne),P.onAfterShadow(i,P,L,K,W,J,ne)}}}else if(I.visible){let D=y(P,I,b,A);P.onBeforeShadow(i,P,L,K,W,D,null),i.renderBufferDirect(K,null,W,D,P,null),P.onAfterShadow(i,P,L,K,W,D,null)}}let B=P.children;for(let W=0,I=B.length;W<I;W++)w(B[W],L,K,b,A)}function O(P){P.target.removeEventListener("dispose",O);for(let K in c){let b=c[K],A=P.target.uuid;A in b&&(b[A].dispose(),delete b[A])}}}function zg(i,e,t){let n=t.isWebGL2;function s(){let N=!1,Ae=new _n,Me=null,De=new _n(0,0,0,0);return{setMask:function(Fe){Me!==Fe&&!N&&(i.colorMask(Fe,Fe,Fe,Fe),Me=Fe)},setLocked:function(Fe){N=Fe},setClear:function(Fe,St,mt,Rt,Ut){Ut===!0&&(Fe*=Rt,St*=Rt,mt*=Rt),Ae.set(Fe,St,mt,Rt),De.equals(Ae)===!1&&(i.clearColor(Fe,St,mt,Rt),De.copy(Ae))},reset:function(){N=!1,Me=null,De.set(-1,0,0,0)}}}function r(){let N=!1,Ae=null,Me=null,De=null;return{setTest:function(Fe){Fe?ct(i.DEPTH_TEST):Ke(i.DEPTH_TEST)},setMask:function(Fe){Ae!==Fe&&!N&&(i.depthMask(Fe),Ae=Fe)},setFunc:function(Fe){if(Me!==Fe){switch(Fe){case _u:i.depthFunc(i.NEVER);break;case xu:i.depthFunc(i.ALWAYS);break;case yu:i.depthFunc(i.LESS);break;case $r:i.depthFunc(i.LEQUAL);break;case vu:i.depthFunc(i.EQUAL);break;case Mu:i.depthFunc(i.GEQUAL);break;case Su:i.depthFunc(i.GREATER);break;case bu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Me=Fe}},setLocked:function(Fe){N=Fe},setClear:function(Fe){De!==Fe&&(i.clearDepth(Fe),De=Fe)},reset:function(){N=!1,Ae=null,Me=null,De=null}}}function a(){let N=!1,Ae=null,Me=null,De=null,Fe=null,St=null,mt=null,Rt=null,Ut=null;return{setTest:function(wt){N||(wt?ct(i.STENCIL_TEST):Ke(i.STENCIL_TEST))},setMask:function(wt){Ae!==wt&&!N&&(i.stencilMask(wt),Ae=wt)},setFunc:function(wt,sn,kn){(Me!==wt||De!==sn||Fe!==kn)&&(i.stencilFunc(wt,sn,kn),Me=wt,De=sn,Fe=kn)},setOp:function(wt,sn,kn){(St!==wt||mt!==sn||Rt!==kn)&&(i.stencilOp(wt,sn,kn),St=wt,mt=sn,Rt=kn)},setLocked:function(wt){N=wt},setClear:function(wt){Ut!==wt&&(i.clearStencil(wt),Ut=wt)},reset:function(){N=!1,Ae=null,Me=null,De=null,Fe=null,St=null,mt=null,Rt=null,Ut=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,d=new WeakMap,u={},m={},_=new WeakMap,v=[],p=null,f=!1,S=null,y=null,w=null,O=null,P=null,L=null,K=null,b=new vt(0,0,0),A=0,U=!1,B=null,W=null,I=null,D=null,ee=null,Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ne=!1,j=0,J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(J)[1]),ne=j>=1):J.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),ne=j>=2);let fe=null,Ie={},te=i.getParameter(i.SCISSOR_BOX),ue=i.getParameter(i.VIEWPORT),Pe=new _n().fromArray(te),qe=new _n().fromArray(ue);function Ve(N,Ae,Me,De){let Fe=new Uint8Array(4),St=i.createTexture();i.bindTexture(N,St),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let mt=0;mt<Me;mt++)n&&(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)?i.texImage3D(Ae,0,i.RGBA,1,1,De,0,i.RGBA,i.UNSIGNED_BYTE,Fe):i.texImage2D(Ae+mt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Fe);return St}let nt={};nt[i.TEXTURE_2D]=Ve(i.TEXTURE_2D,i.TEXTURE_2D,1),nt[i.TEXTURE_CUBE_MAP]=Ve(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(nt[i.TEXTURE_2D_ARRAY]=Ve(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),nt[i.TEXTURE_3D]=Ve(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ct(i.DEPTH_TEST),l.setFunc($r),ut(!1),T(Ul),ct(i.CULL_FACE),ke(Ni);function ct(N){u[N]!==!0&&(i.enable(N),u[N]=!0)}function Ke(N){u[N]!==!1&&(i.disable(N),u[N]=!1)}function Mt(N,Ae){return m[N]!==Ae?(i.bindFramebuffer(N,Ae),m[N]=Ae,n&&(N===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=Ae),N===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=Ae)),!0):!1}function q(N,Ae){let Me=v,De=!1;if(N)if(Me=_.get(Ae),Me===void 0&&(Me=[],_.set(Ae,Me)),N.isWebGLMultipleRenderTargets){let Fe=N.texture;if(Me.length!==Fe.length||Me[0]!==i.COLOR_ATTACHMENT0){for(let St=0,mt=Fe.length;St<mt;St++)Me[St]=i.COLOR_ATTACHMENT0+St;Me.length=Fe.length,De=!0}}else Me[0]!==i.COLOR_ATTACHMENT0&&(Me[0]=i.COLOR_ATTACHMENT0,De=!0);else Me[0]!==i.BACK&&(Me[0]=i.BACK,De=!0);De&&(t.isWebGL2?i.drawBuffers(Me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Me))}function hn(N){return p!==N?(i.useProgram(N),p=N,!0):!1}let Ye={[qi]:i.FUNC_ADD,[nu]:i.FUNC_SUBTRACT,[iu]:i.FUNC_REVERSE_SUBTRACT};if(n)Ye[Bl]=i.MIN,Ye[zl]=i.MAX;else{let N=e.get("EXT_blend_minmax");N!==null&&(Ye[Bl]=N.MIN_EXT,Ye[zl]=N.MAX_EXT)}let et={[su]:i.ZERO,[ru]:i.ONE,[au]:i.SRC_COLOR,[Eo]:i.SRC_ALPHA,[du]:i.SRC_ALPHA_SATURATE,[hu]:i.DST_COLOR,[lu]:i.DST_ALPHA,[ou]:i.ONE_MINUS_SRC_COLOR,[To]:i.ONE_MINUS_SRC_ALPHA,[uu]:i.ONE_MINUS_DST_COLOR,[cu]:i.ONE_MINUS_DST_ALPHA,[fu]:i.CONSTANT_COLOR,[pu]:i.ONE_MINUS_CONSTANT_COLOR,[mu]:i.CONSTANT_ALPHA,[gu]:i.ONE_MINUS_CONSTANT_ALPHA};function ke(N,Ae,Me,De,Fe,St,mt,Rt,Ut,wt){if(N===Ni){f===!0&&(Ke(i.BLEND),f=!1);return}if(f===!1&&(ct(i.BLEND),f=!0),N!==tu){if(N!==S||wt!==U){if((y!==qi||P!==qi)&&(i.blendEquation(i.FUNC_ADD),y=qi,P=qi),wt)switch(N){case Cs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nl:i.blendFunc(i.ONE,i.ONE);break;case Ol:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Cs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ol:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}w=null,O=null,L=null,K=null,b.set(0,0,0),A=0,S=N,U=wt}return}Fe=Fe||Ae,St=St||Me,mt=mt||De,(Ae!==y||Fe!==P)&&(i.blendEquationSeparate(Ye[Ae],Ye[Fe]),y=Ae,P=Fe),(Me!==w||De!==O||St!==L||mt!==K)&&(i.blendFuncSeparate(et[Me],et[De],et[St],et[mt]),w=Me,O=De,L=St,K=mt),(Rt.equals(b)===!1||Ut!==A)&&(i.blendColor(Rt.r,Rt.g,Rt.b,Ut),b.copy(Rt),A=Ut),S=N,U=!1}function Bt(N,Ae){N.side===Kt?Ke(i.CULL_FACE):ct(i.CULL_FACE);let Me=N.side===Ln;Ae&&(Me=!Me),ut(Me),N.blending===Cs&&N.transparent===!1?ke(Ni):ke(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),o.setMask(N.colorWrite);let De=N.stencilWrite;c.setTest(De),De&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Y(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ct(i.SAMPLE_ALPHA_TO_COVERAGE):Ke(i.SAMPLE_ALPHA_TO_COVERAGE)}function ut(N){B!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),B=N)}function T(N){N!==Qh?(ct(i.CULL_FACE),N!==W&&(N===Ul?i.cullFace(i.BACK):N===eu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ke(i.CULL_FACE),W=N}function M(N){N!==I&&(ne&&i.lineWidth(N),I=N)}function Y(N,Ae,Me){N?(ct(i.POLYGON_OFFSET_FILL),(D!==Ae||ee!==Me)&&(i.polygonOffset(Ae,Me),D=Ae,ee=Me)):Ke(i.POLYGON_OFFSET_FILL)}function pe(N){N?ct(i.SCISSOR_TEST):Ke(i.SCISSOR_TEST)}function de(N){N===void 0&&(N=i.TEXTURE0+Q-1),fe!==N&&(i.activeTexture(N),fe=N)}function _e(N,Ae,Me){Me===void 0&&(fe===null?Me=i.TEXTURE0+Q-1:Me=fe);let De=Ie[Me];De===void 0&&(De={type:void 0,texture:void 0},Ie[Me]=De),(De.type!==N||De.texture!==Ae)&&(fe!==Me&&(i.activeTexture(Me),fe=Me),i.bindTexture(N,Ae||nt[N]),De.type=N,De.texture=Ae)}function Oe(){let N=Ie[fe];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ye(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ee(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ze(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function tt(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function he(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function at(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function it(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Te(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function we(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Se(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function He(N){Pe.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Pe.copy(N))}function Tt(N){qe.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),qe.copy(N))}function Vt(N,Ae){let Me=d.get(Ae);Me===void 0&&(Me=new WeakMap,d.set(Ae,Me));let De=Me.get(N);De===void 0&&(De=i.getUniformBlockIndex(Ae,N.name),Me.set(N,De))}function st(N,Ae){let De=d.get(Ae).get(N);h.get(Ae)!==De&&(i.uniformBlockBinding(Ae,De,N.__bindingPointIndex),h.set(Ae,De))}function xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},fe=null,Ie={},m={},_=new WeakMap,v=[],p=null,f=!1,S=null,y=null,w=null,O=null,P=null,L=null,K=null,b=new vt(0,0,0),A=0,U=!1,B=null,W=null,I=null,D=null,ee=null,Pe.set(0,0,i.canvas.width,i.canvas.height),qe.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:ct,disable:Ke,bindFramebuffer:Mt,drawBuffers:q,useProgram:hn,setBlending:ke,setMaterial:Bt,setFlipSided:ut,setCullFace:T,setLineWidth:M,setPolygonOffset:Y,setScissorTest:pe,activeTexture:de,bindTexture:_e,unbindTexture:Oe,compressedTexImage2D:ye,compressedTexImage3D:Ee,texImage2D:we,texImage3D:Se,updateUBOMapping:Vt,uniformBlockBinding:st,texStorage2D:it,texStorage3D:Te,texSubImage2D:ze,texSubImage3D:tt,compressedTexSubImage2D:he,compressedTexSubImage3D:at,scissor:He,viewport:Tt,reset:xe}}function kg(i,e,t,n,s,r,a){let o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,d,u=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,M){return m?new OffscreenCanvas(T,M):ta("canvas")}function v(T,M,Y,pe){let de=1;if((T.width>pe||T.height>pe)&&(de=pe/Math.max(T.width,T.height)),de<1||M===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){let _e=M?Lo:Math.floor,Oe=_e(de*T.width),ye=_e(de*T.height);d===void 0&&(d=_(Oe,ye));let Ee=Y?_(Oe,ye):d;return Ee.width=Oe,Ee.height=ye,Ee.getContext("2d").drawImage(T,0,0,Oe,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+Oe+"x"+ye+")."),Ee}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function p(T){return xc(T.width)&&xc(T.height)}function f(T){return o?!1:T.wrapS!==ei||T.wrapT!==ei||T.minFilter!==An&&T.minFilter!==Vn}function S(T,M){return T.generateMipmaps&&M&&T.minFilter!==An&&T.minFilter!==Vn}function y(T){i.generateMipmap(T)}function w(T,M,Y,pe,de=!1){if(o===!1)return M;if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let _e=M;if(M===i.RED&&(Y===i.FLOAT&&(_e=i.R32F),Y===i.HALF_FLOAT&&(_e=i.R16F),Y===i.UNSIGNED_BYTE&&(_e=i.R8)),M===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(_e=i.R8UI),Y===i.UNSIGNED_SHORT&&(_e=i.R16UI),Y===i.UNSIGNED_INT&&(_e=i.R32UI),Y===i.BYTE&&(_e=i.R8I),Y===i.SHORT&&(_e=i.R16I),Y===i.INT&&(_e=i.R32I)),M===i.RG&&(Y===i.FLOAT&&(_e=i.RG32F),Y===i.HALF_FLOAT&&(_e=i.RG16F),Y===i.UNSIGNED_BYTE&&(_e=i.RG8)),M===i.RGBA){let Oe=de?Jr:Dt.getTransfer(pe);Y===i.FLOAT&&(_e=i.RGBA32F),Y===i.HALF_FLOAT&&(_e=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(_e=Oe===Ht?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(_e=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(_e=i.RGB5_A1)}return(_e===i.R16F||_e===i.R32F||_e===i.RG16F||_e===i.RG32F||_e===i.RGBA16F||_e===i.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function O(T,M,Y){return S(T,Y)===!0||T.isFramebufferTexture&&T.minFilter!==An&&T.minFilter!==Vn?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function P(T){return T===An||T===kl||T===Va?i.NEAREST:i.LINEAR}function L(T){let M=T.target;M.removeEventListener("dispose",L),b(M),M.isVideoTexture&&h.delete(M)}function K(T){let M=T.target;M.removeEventListener("dispose",K),U(M)}function b(T){let M=n.get(T);if(M.__webglInit===void 0)return;let Y=T.source,pe=u.get(Y);if(pe){let de=pe[M.__cacheKey];de.usedTimes--,de.usedTimes===0&&A(T),Object.keys(pe).length===0&&u.delete(Y)}n.remove(T)}function A(T){let M=n.get(T);i.deleteTexture(M.__webglTexture);let Y=T.source,pe=u.get(Y);delete pe[M.__cacheKey],a.memory.textures--}function U(T){let M=T.texture,Y=n.get(T),pe=n.get(M);if(pe.__webglTexture!==void 0&&(i.deleteTexture(pe.__webglTexture),a.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(Y.__webglFramebuffer[de]))for(let _e=0;_e<Y.__webglFramebuffer[de].length;_e++)i.deleteFramebuffer(Y.__webglFramebuffer[de][_e]);else i.deleteFramebuffer(Y.__webglFramebuffer[de]);Y.__webglDepthbuffer&&i.deleteRenderbuffer(Y.__webglDepthbuffer[de])}else{if(Array.isArray(Y.__webglFramebuffer))for(let de=0;de<Y.__webglFramebuffer.length;de++)i.deleteFramebuffer(Y.__webglFramebuffer[de]);else i.deleteFramebuffer(Y.__webglFramebuffer);if(Y.__webglDepthbuffer&&i.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let de=0;de<Y.__webglColorRenderbuffer.length;de++)Y.__webglColorRenderbuffer[de]&&i.deleteRenderbuffer(Y.__webglColorRenderbuffer[de]);Y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let de=0,_e=M.length;de<_e;de++){let Oe=n.get(M[de]);Oe.__webglTexture&&(i.deleteTexture(Oe.__webglTexture),a.memory.textures--),n.remove(M[de])}n.remove(M),n.remove(T)}let B=0;function W(){B=0}function I(){let T=B;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),B+=1,T}function D(T){let M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function ee(T,M){let Y=n.get(T);if(T.isVideoTexture&&Bt(T),T.isRenderTargetTexture===!1&&T.version>0&&Y.__version!==T.version){let pe=T.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(Y,T,M);return}}t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+M)}function Q(T,M){let Y=n.get(T);if(T.version>0&&Y.__version!==T.version){Pe(Y,T,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+M)}function ne(T,M){let Y=n.get(T);if(T.version>0&&Y.__version!==T.version){Pe(Y,T,M);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+M)}function j(T,M){let Y=n.get(T);if(T.version>0&&Y.__version!==T.version){qe(Y,T,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+M)}let J={[Ro]:i.REPEAT,[ei]:i.CLAMP_TO_EDGE,[Co]:i.MIRRORED_REPEAT},fe={[An]:i.NEAREST,[kl]:i.NEAREST_MIPMAP_NEAREST,[Va]:i.NEAREST_MIPMAP_LINEAR,[Vn]:i.LINEAR,[Lu]:i.LINEAR_MIPMAP_NEAREST,[tr]:i.LINEAR_MIPMAP_LINEAR},Ie={[Wu]:i.NEVER,[Ku]:i.ALWAYS,[Xu]:i.LESS,[Sh]:i.LEQUAL,[qu]:i.EQUAL,[Zu]:i.GEQUAL,[Yu]:i.GREATER,[$u]:i.NOTEQUAL};function te(T,M,Y){if(Y?(i.texParameteri(T,i.TEXTURE_WRAP_S,J[M.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,J[M.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,J[M.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,fe[M.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,fe[M.minFilter])):(i.texParameteri(T,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(T,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(M.wrapS!==ei||M.wrapT!==ei)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(T,i.TEXTURE_MAG_FILTER,P(M.magFilter)),i.texParameteri(T,i.TEXTURE_MIN_FILTER,P(M.minFilter)),M.minFilter!==An&&M.minFilter!==Vn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Ie[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let pe=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===An||M.minFilter!==Va&&M.minFilter!==tr||M.type===Ui&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===nr&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(T,pe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function ue(T,M){let Y=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",L));let pe=M.source,de=u.get(pe);de===void 0&&(de={},u.set(pe,de));let _e=D(M);if(_e!==T.__cacheKey){de[_e]===void 0&&(de[_e]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),de[_e].usedTimes++;let Oe=de[T.__cacheKey];Oe!==void 0&&(de[T.__cacheKey].usedTimes--,Oe.usedTimes===0&&A(M)),T.__cacheKey=_e,T.__webglTexture=de[_e].texture}return Y}function Pe(T,M,Y){let pe=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(pe=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(pe=i.TEXTURE_3D);let de=ue(T,M),_e=M.source;t.bindTexture(pe,T.__webglTexture,i.TEXTURE0+Y);let Oe=n.get(_e);if(_e.version!==Oe.__version||de===!0){t.activeTexture(i.TEXTURE0+Y);let ye=Dt.getPrimaries(Dt.workingColorSpace),Ee=M.colorSpace===Gn?null:Dt.getPrimaries(M.colorSpace),ze=M.colorSpace===Gn||ye===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let tt=f(M)&&p(M.image)===!1,he=v(M.image,tt,!1,s.maxTextureSize);he=ut(M,he);let at=p(he)||o,it=r.convert(M.format,M.colorSpace),Te=r.convert(M.type),we=w(M.internalFormat,it,Te,M.colorSpace,M.isVideoTexture);te(pe,M,at);let Se,He=M.mipmaps,Tt=o&&M.isVideoTexture!==!0&&we!==yh,Vt=Oe.__version===void 0||de===!0,st=O(M,he,at);if(M.isDepthTexture)we=i.DEPTH_COMPONENT,o?M.type===Ui?we=i.DEPTH_COMPONENT32F:M.type===Di?we=i.DEPTH_COMPONENT24:M.type===$i?we=i.DEPTH24_STENCIL8:we=i.DEPTH_COMPONENT16:M.type===Ui&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Zi&&we===i.DEPTH_COMPONENT&&M.type!==xl&&M.type!==Di&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Di,Te=r.convert(M.type)),M.format===Us&&we===i.DEPTH_COMPONENT&&(we=i.DEPTH_STENCIL,M.type!==$i&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=$i,Te=r.convert(M.type))),Vt&&(Tt?t.texStorage2D(i.TEXTURE_2D,1,we,he.width,he.height):t.texImage2D(i.TEXTURE_2D,0,we,he.width,he.height,0,it,Te,null));else if(M.isDataTexture)if(He.length>0&&at){Tt&&Vt&&t.texStorage2D(i.TEXTURE_2D,st,we,He[0].width,He[0].height);for(let xe=0,N=He.length;xe<N;xe++)Se=He[xe],Tt?t.texSubImage2D(i.TEXTURE_2D,xe,0,0,Se.width,Se.height,it,Te,Se.data):t.texImage2D(i.TEXTURE_2D,xe,we,Se.width,Se.height,0,it,Te,Se.data);M.generateMipmaps=!1}else Tt?(Vt&&t.texStorage2D(i.TEXTURE_2D,st,we,he.width,he.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,he.width,he.height,it,Te,he.data)):t.texImage2D(i.TEXTURE_2D,0,we,he.width,he.height,0,it,Te,he.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Tt&&Vt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,st,we,He[0].width,He[0].height,he.depth);for(let xe=0,N=He.length;xe<N;xe++)Se=He[xe],M.format!==ti?it!==null?Tt?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xe,0,0,0,Se.width,Se.height,he.depth,it,Se.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,xe,we,Se.width,Se.height,he.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Tt?t.texSubImage3D(i.TEXTURE_2D_ARRAY,xe,0,0,0,Se.width,Se.height,he.depth,it,Te,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,xe,we,Se.width,Se.height,he.depth,0,it,Te,Se.data)}else{Tt&&Vt&&t.texStorage2D(i.TEXTURE_2D,st,we,He[0].width,He[0].height);for(let xe=0,N=He.length;xe<N;xe++)Se=He[xe],M.format!==ti?it!==null?Tt?t.compressedTexSubImage2D(i.TEXTURE_2D,xe,0,0,Se.width,Se.height,it,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,xe,we,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Tt?t.texSubImage2D(i.TEXTURE_2D,xe,0,0,Se.width,Se.height,it,Te,Se.data):t.texImage2D(i.TEXTURE_2D,xe,we,Se.width,Se.height,0,it,Te,Se.data)}else if(M.isDataArrayTexture)Tt?(Vt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,st,we,he.width,he.height,he.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,it,Te,he.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,we,he.width,he.height,he.depth,0,it,Te,he.data);else if(M.isData3DTexture)Tt?(Vt&&t.texStorage3D(i.TEXTURE_3D,st,we,he.width,he.height,he.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,it,Te,he.data)):t.texImage3D(i.TEXTURE_3D,0,we,he.width,he.height,he.depth,0,it,Te,he.data);else if(M.isFramebufferTexture){if(Vt)if(Tt)t.texStorage2D(i.TEXTURE_2D,st,we,he.width,he.height);else{let xe=he.width,N=he.height;for(let Ae=0;Ae<st;Ae++)t.texImage2D(i.TEXTURE_2D,Ae,we,xe,N,0,it,Te,null),xe>>=1,N>>=1}}else if(He.length>0&&at){Tt&&Vt&&t.texStorage2D(i.TEXTURE_2D,st,we,He[0].width,He[0].height);for(let xe=0,N=He.length;xe<N;xe++)Se=He[xe],Tt?t.texSubImage2D(i.TEXTURE_2D,xe,0,0,it,Te,Se):t.texImage2D(i.TEXTURE_2D,xe,we,it,Te,Se);M.generateMipmaps=!1}else Tt?(Vt&&t.texStorage2D(i.TEXTURE_2D,st,we,he.width,he.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,it,Te,he)):t.texImage2D(i.TEXTURE_2D,0,we,it,Te,he);S(M,at)&&y(pe),Oe.__version=_e.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function qe(T,M,Y){if(M.image.length!==6)return;let pe=ue(T,M),de=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+Y);let _e=n.get(de);if(de.version!==_e.__version||pe===!0){t.activeTexture(i.TEXTURE0+Y);let Oe=Dt.getPrimaries(Dt.workingColorSpace),ye=M.colorSpace===Gn?null:Dt.getPrimaries(M.colorSpace),Ee=M.colorSpace===Gn||Oe===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let ze=M.isCompressedTexture||M.image[0].isCompressedTexture,tt=M.image[0]&&M.image[0].isDataTexture,he=[];for(let xe=0;xe<6;xe++)!ze&&!tt?he[xe]=v(M.image[xe],!1,!0,s.maxCubemapSize):he[xe]=tt?M.image[xe].image:M.image[xe],he[xe]=ut(M,he[xe]);let at=he[0],it=p(at)||o,Te=r.convert(M.format,M.colorSpace),we=r.convert(M.type),Se=w(M.internalFormat,Te,we,M.colorSpace),He=o&&M.isVideoTexture!==!0,Tt=_e.__version===void 0||pe===!0,Vt=O(M,at,it);te(i.TEXTURE_CUBE_MAP,M,it);let st;if(ze){He&&Tt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Vt,Se,at.width,at.height);for(let xe=0;xe<6;xe++){st=he[xe].mipmaps;for(let N=0;N<st.length;N++){let Ae=st[N];M.format!==ti?Te!==null?He?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,N,0,0,Ae.width,Ae.height,Te,Ae.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,N,Se,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,N,0,0,Ae.width,Ae.height,Te,we,Ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,N,Se,Ae.width,Ae.height,0,Te,we,Ae.data)}}}else{st=M.mipmaps,He&&Tt&&(st.length>0&&Vt++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Vt,Se,he[0].width,he[0].height));for(let xe=0;xe<6;xe++)if(tt){He?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,he[xe].width,he[xe].height,Te,we,he[xe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,Se,he[xe].width,he[xe].height,0,Te,we,he[xe].data);for(let N=0;N<st.length;N++){let Me=st[N].image[xe].image;He?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,N+1,0,0,Me.width,Me.height,Te,we,Me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,N+1,Se,Me.width,Me.height,0,Te,we,Me.data)}}else{He?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Te,we,he[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,Se,Te,we,he[xe]);for(let N=0;N<st.length;N++){let Ae=st[N];He?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,N+1,0,0,Te,we,Ae.image[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,N+1,Se,Te,we,Ae.image[xe])}}}S(M,it)&&y(i.TEXTURE_CUBE_MAP),_e.__version=de.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function Ve(T,M,Y,pe,de,_e){let Oe=r.convert(Y.format,Y.colorSpace),ye=r.convert(Y.type),Ee=w(Y.internalFormat,Oe,ye,Y.colorSpace);if(!n.get(M).__hasExternalTextures){let tt=Math.max(1,M.width>>_e),he=Math.max(1,M.height>>_e);de===i.TEXTURE_3D||de===i.TEXTURE_2D_ARRAY?t.texImage3D(de,_e,Ee,tt,he,M.depth,0,Oe,ye,null):t.texImage2D(de,_e,Ee,tt,he,0,Oe,ye,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),ke(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pe,de,n.get(Y).__webglTexture,0,et(M)):(de===i.TEXTURE_2D||de>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,pe,de,n.get(Y).__webglTexture,_e),t.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(T,M,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,T),M.depthBuffer&&!M.stencilBuffer){let pe=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(Y||ke(M)){let de=M.depthTexture;de&&de.isDepthTexture&&(de.type===Ui?pe=i.DEPTH_COMPONENT32F:de.type===Di&&(pe=i.DEPTH_COMPONENT24));let _e=et(M);ke(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e,pe,M.width,M.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,pe,M.width,M.height)}else i.renderbufferStorage(i.RENDERBUFFER,pe,M.width,M.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,T)}else if(M.depthBuffer&&M.stencilBuffer){let pe=et(M);Y&&ke(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,i.DEPTH24_STENCIL8,M.width,M.height):ke(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe,i.DEPTH24_STENCIL8,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,T)}else{let pe=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let de=0;de<pe.length;de++){let _e=pe[de],Oe=r.convert(_e.format,_e.colorSpace),ye=r.convert(_e.type),Ee=w(_e.internalFormat,Oe,ye,_e.colorSpace),ze=et(M);Y&&ke(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,Ee,M.width,M.height):ke(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ze,Ee,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Ee,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ct(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ee(M.depthTexture,0);let pe=n.get(M.depthTexture).__webglTexture,de=et(M);if(M.depthTexture.format===Zi)ke(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,pe,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,pe,0);else if(M.depthTexture.format===Us)ke(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,pe,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function Ke(T){let M=n.get(T),Y=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");ct(M.__webglFramebuffer,T)}else if(Y){M.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[pe]),M.__webglDepthbuffer[pe]=i.createRenderbuffer(),nt(M.__webglDepthbuffer[pe],T,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),nt(M.__webglDepthbuffer,T,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Mt(T,M,Y){let pe=n.get(T);M!==void 0&&Ve(pe.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&Ke(T)}function q(T){let M=T.texture,Y=n.get(T),pe=n.get(M);T.addEventListener("dispose",K),T.isWebGLMultipleRenderTargets!==!0&&(pe.__webglTexture===void 0&&(pe.__webglTexture=i.createTexture()),pe.__version=M.version,a.memory.textures++);let de=T.isWebGLCubeRenderTarget===!0,_e=T.isWebGLMultipleRenderTargets===!0,Oe=p(T)||o;if(de){Y.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(o&&M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer[ye]=[];for(let Ee=0;Ee<M.mipmaps.length;Ee++)Y.__webglFramebuffer[ye][Ee]=i.createFramebuffer()}else Y.__webglFramebuffer[ye]=i.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ye=0;ye<M.mipmaps.length;ye++)Y.__webglFramebuffer[ye]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(_e)if(s.drawBuffers){let ye=T.texture;for(let Ee=0,ze=ye.length;Ee<ze;Ee++){let tt=n.get(ye[Ee]);tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&T.samples>0&&ke(T)===!1){let ye=_e?M:[M];Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Ee=0;Ee<ye.length;Ee++){let ze=ye[Ee];Y.__webglColorRenderbuffer[Ee]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[Ee]);let tt=r.convert(ze.format,ze.colorSpace),he=r.convert(ze.type),at=w(ze.internalFormat,tt,he,ze.colorSpace,T.isXRRenderTarget===!0),it=et(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,it,at,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,Y.__webglColorRenderbuffer[Ee])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),nt(Y.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(de){t.bindTexture(i.TEXTURE_CUBE_MAP,pe.__webglTexture),te(i.TEXTURE_CUBE_MAP,M,Oe);for(let ye=0;ye<6;ye++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let Ee=0;Ee<M.mipmaps.length;Ee++)Ve(Y.__webglFramebuffer[ye][Ee],T,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ee);else Ve(Y.__webglFramebuffer[ye],T,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);S(M,Oe)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){let ye=T.texture;for(let Ee=0,ze=ye.length;Ee<ze;Ee++){let tt=ye[Ee],he=n.get(tt);t.bindTexture(i.TEXTURE_2D,he.__webglTexture),te(i.TEXTURE_2D,tt,Oe),Ve(Y.__webglFramebuffer,T,tt,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,0),S(tt,Oe)&&y(i.TEXTURE_2D)}t.unbindTexture()}else{let ye=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(o?ye=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ye,pe.__webglTexture),te(ye,M,Oe),o&&M.mipmaps&&M.mipmaps.length>0)for(let Ee=0;Ee<M.mipmaps.length;Ee++)Ve(Y.__webglFramebuffer[Ee],T,M,i.COLOR_ATTACHMENT0,ye,Ee);else Ve(Y.__webglFramebuffer,T,M,i.COLOR_ATTACHMENT0,ye,0);S(M,Oe)&&y(ye),t.unbindTexture()}T.depthBuffer&&Ke(T)}function hn(T){let M=p(T)||o,Y=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let pe=0,de=Y.length;pe<de;pe++){let _e=Y[pe];if(S(_e,M)){let Oe=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ye=n.get(_e).__webglTexture;t.bindTexture(Oe,ye),y(Oe),t.unbindTexture()}}}function Ye(T){if(o&&T.samples>0&&ke(T)===!1){let M=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],Y=T.width,pe=T.height,de=i.COLOR_BUFFER_BIT,_e=[],Oe=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=n.get(T),Ee=T.isWebGLMultipleRenderTargets===!0;if(Ee)for(let ze=0;ze<M.length;ze++)t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ze,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ze,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let ze=0;ze<M.length;ze++){_e.push(i.COLOR_ATTACHMENT0+ze),T.depthBuffer&&_e.push(Oe);let tt=ye.__ignoreDepthValues!==void 0?ye.__ignoreDepthValues:!1;if(tt===!1&&(T.depthBuffer&&(de|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&(de|=i.STENCIL_BUFFER_BIT)),Ee&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ye.__webglColorRenderbuffer[ze]),tt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Oe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Oe])),Ee){let he=n.get(M[ze]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,he,0)}i.blitFramebuffer(0,0,Y,pe,0,0,Y,pe,de,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_e)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ee)for(let ze=0;ze<M.length;ze++){t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ze,i.RENDERBUFFER,ye.__webglColorRenderbuffer[ze]);let tt=n.get(M[ze]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ze,i.TEXTURE_2D,tt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}}function et(T){return Math.min(s.maxSamples,T.samples)}function ke(T){let M=n.get(T);return o&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Bt(T){let M=a.render.frame;h.get(T)!==M&&(h.set(T,M),T.update())}function ut(T,M){let Y=T.colorSpace,pe=T.format,de=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Po||Y!==xi&&Y!==Gn&&(Dt.getTransfer(Y)===Ht?o===!1?e.has("EXT_sRGB")===!0&&pe===ti?(T.format=Po,T.minFilter=Vn,T.generateMipmaps=!1):M=na.sRGBToLinear(M):(pe!==ti||de!==Fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),M}this.allocateTextureUnit=I,this.resetTextureUnits=W,this.setTexture2D=ee,this.setTexture2DArray=Q,this.setTexture3D=ne,this.setTextureCube=j,this.rebindTextures=Mt,this.setupRenderTarget=q,this.updateRenderTargetMipmap=hn,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=Ve,this.useMultisampledRTT=ke}function Hg(i,e,t){let n=t.isWebGL2;function s(r,a=Gn){let o,l=Dt.getTransfer(a);if(r===Fi)return i.UNSIGNED_BYTE;if(r===ph)return i.UNSIGNED_SHORT_4_4_4_4;if(r===mh)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Du)return i.BYTE;if(r===Uu)return i.SHORT;if(r===xl)return i.UNSIGNED_SHORT;if(r===fh)return i.INT;if(r===Di)return i.UNSIGNED_INT;if(r===Ui)return i.FLOAT;if(r===nr)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Nu)return i.ALPHA;if(r===ti)return i.RGBA;if(r===Ou)return i.LUMINANCE;if(r===Fu)return i.LUMINANCE_ALPHA;if(r===Zi)return i.DEPTH_COMPONENT;if(r===Us)return i.DEPTH_STENCIL;if(r===Po)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Bu)return i.RED;if(r===gh)return i.RED_INTEGER;if(r===zu)return i.RG;if(r===_h)return i.RG_INTEGER;if(r===xh)return i.RGBA_INTEGER;if(r===Ga||r===Wa||r===Xa||r===qa)if(l===Ht)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Ga)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Wa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Xa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===qa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Ga)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Wa)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Xa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===qa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Hl||r===Vl||r===Gl||r===Wl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Hl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Vl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Gl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Wl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===yh)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Xl||r===ql)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Xl)return l===Ht?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===ql)return l===Ht?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Yl||r===$l||r===Zl||r===Kl||r===Jl||r===jl||r===Ql||r===ec||r===tc||r===nc||r===ic||r===sc||r===rc||r===ac)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Yl)return l===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===$l)return l===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Zl)return l===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Kl)return l===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Jl)return l===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===jl)return l===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ql)return l===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ec)return l===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===tc)return l===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===nc)return l===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ic)return l===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===sc)return l===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===rc)return l===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ac)return l===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ya||r===oc||r===lc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Ya)return l===Ht?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===oc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===lc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ku||r===cc||r===hc||r===uc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Ya)return o.COMPRESSED_RED_RGTC1_EXT;if(r===cc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===hc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===uc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===$i?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Xo=class extends Rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ni=class extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Vg={type:"move"},Js=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ni,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ni,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ni,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let p=t.getJointPose(v,n),f=this._getHandJoint(c,v);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),m=.02,_=.005;c.inputState.pinching&&u>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Vg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ni;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},qo=class extends zi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,m=null,_=null,v=t.getContextAttributes(),p=null,f=null,S=[],y=[],w=new Ue,O=null,P=new Rn;P.layers.enable(1),P.viewport=new _n;let L=new Rn;L.layers.enable(2),L.viewport=new _n;let K=[P,L],b=new Xo;b.layers.enable(1),b.layers.enable(2);let A=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ue=S[te];return ue===void 0&&(ue=new Js,S[te]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(te){let ue=S[te];return ue===void 0&&(ue=new Js,S[te]=ue),ue.getGripSpace()},this.getHand=function(te){let ue=S[te];return ue===void 0&&(ue=new Js,S[te]=ue),ue.getHandSpace()};function B(te){let ue=y.indexOf(te.inputSource);if(ue===-1)return;let Pe=S[ue];Pe!==void 0&&(Pe.update(te.inputSource,te.frame,c||a),Pe.dispatchEvent({type:te.type,data:te.inputSource}))}function W(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",I);for(let te=0;te<S.length;te++){let ue=y[te];ue!==null&&(y[te]=null,S[te].disconnect(ue))}A=null,U=null,e.setRenderTarget(p),m=null,u=null,d=null,s=null,f=null,Ie.stop(),n.isPresenting=!1,e.setPixelRatio(O),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",W),s.addEventListener("inputsourceschange",I),v.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(w),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let ue={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,ue),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),f=new yi(m.framebufferWidth,m.framebufferHeight,{format:ti,type:Fi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let ue=null,Pe=null,qe=null;v.depth&&(qe=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=v.stencil?Us:Zi,Pe=v.stencil?$i:Di);let Ve={colorFormat:t.RGBA8,depthFormat:qe,scaleFactor:r};d=new XRWebGLBinding(s,t),u=d.createProjectionLayer(Ve),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),f=new yi(u.textureWidth,u.textureHeight,{format:ti,type:Fi,depthTexture:new fa(u.textureWidth,u.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});let nt=e.properties.get(f);nt.__ignoreDepthValues=u.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ie.setContext(s),Ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function I(te){for(let ue=0;ue<te.removed.length;ue++){let Pe=te.removed[ue],qe=y.indexOf(Pe);qe>=0&&(y[qe]=null,S[qe].disconnect(Pe))}for(let ue=0;ue<te.added.length;ue++){let Pe=te.added[ue],qe=y.indexOf(Pe);if(qe===-1){for(let nt=0;nt<S.length;nt++)if(nt>=y.length){y.push(Pe),qe=nt;break}else if(y[nt]===null){y[nt]=Pe,qe=nt;break}if(qe===-1)break}let Ve=S[qe];Ve&&Ve.connect(Pe)}}let D=new F,ee=new F;function Q(te,ue,Pe){D.setFromMatrixPosition(ue.matrixWorld),ee.setFromMatrixPosition(Pe.matrixWorld);let qe=D.distanceTo(ee),Ve=ue.projectionMatrix.elements,nt=Pe.projectionMatrix.elements,ct=Ve[14]/(Ve[10]-1),Ke=Ve[14]/(Ve[10]+1),Mt=(Ve[9]+1)/Ve[5],q=(Ve[9]-1)/Ve[5],hn=(Ve[8]-1)/Ve[0],Ye=(nt[8]+1)/nt[0],et=ct*hn,ke=ct*Ye,Bt=qe/(-hn+Ye),ut=Bt*-hn;ue.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(ut),te.translateZ(Bt),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert();let T=ct+Bt,M=Ke+Bt,Y=et-ut,pe=ke+(qe-ut),de=Mt*Ke/M*T,_e=q*Ke/M*T;te.projectionMatrix.makePerspective(Y,pe,de,_e,T,M),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}function ne(te,ue){ue===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ue.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;b.near=L.near=P.near=te.near,b.far=L.far=P.far=te.far,(A!==b.near||U!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),A=b.near,U=b.far);let ue=te.parent,Pe=b.cameras;ne(b,ue);for(let qe=0;qe<Pe.length;qe++)ne(Pe[qe],ue);Pe.length===2?Q(b,P,L):b.projectionMatrix.copy(P.projectionMatrix),j(te,b,ue)};function j(te,ue,Pe){Pe===null?te.matrix.copy(ue.matrixWorld):(te.matrix.copy(Pe.matrixWorld),te.matrix.invert(),te.matrix.multiply(ue.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ue.projectionMatrix),te.projectionMatrixInverse.copy(ue.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Io*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(te){l=te,u!==null&&(u.fixedFoveation=te),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=te)};let J=null;function fe(te,ue){if(h=ue.getViewerPose(c||a),_=ue,h!==null){let Pe=h.views;m!==null&&(e.setRenderTargetFramebuffer(f,m.framebuffer),e.setRenderTarget(f));let qe=!1;Pe.length!==b.cameras.length&&(b.cameras.length=0,qe=!0);for(let Ve=0;Ve<Pe.length;Ve++){let nt=Pe[Ve],ct=null;if(m!==null)ct=m.getViewport(nt);else{let Mt=d.getViewSubImage(u,nt);ct=Mt.viewport,Ve===0&&(e.setRenderTargetTextures(f,Mt.colorTexture,u.ignoreDepthValues?void 0:Mt.depthStencilTexture),e.setRenderTarget(f))}let Ke=K[Ve];Ke===void 0&&(Ke=new Rn,Ke.layers.enable(Ve),Ke.viewport=new _n,K[Ve]=Ke),Ke.matrix.fromArray(nt.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(nt.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(ct.x,ct.y,ct.width,ct.height),Ve===0&&(b.matrix.copy(Ke.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),qe===!0&&b.cameras.push(Ke)}}for(let Pe=0;Pe<S.length;Pe++){let qe=y[Pe],Ve=S[Pe];qe!==null&&Ve!==void 0&&Ve.update(qe,ue,c||a)}J&&J(te,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),_=null}let Ie=new wh;Ie.setAnimationLoop(fe),this.setAnimationLoop=function(te){J=te},this.dispose=function(){}}};function Gg(i,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Th(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,S,y,w){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),d(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f)):f.isMeshStandardMaterial?(r(p,f),u(p,f),f.isMeshPhysicalMaterial&&m(p,f,w)):f.isMeshMatcapMaterial?(r(p,f),_(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),v(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,S,y):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Ln&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Ln&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let S=e.get(f).envMap;if(S&&(p.envMap.value=S,p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;let y=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*y,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,S,y){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*S,p.scale.value=y*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function u(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,S){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ln&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,f){f.matcap&&(p.matcap.value=f.matcap)}function v(p,f){let S=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Wg(i,e,t,n){let s={},r={},a=[],o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,y){let w=y.program;n.uniformBlockBinding(S,w)}function c(S,y){let w=s[S.id];w===void 0&&(_(S),w=h(S),s[S.id]=w,S.addEventListener("dispose",p));let O=y.program;n.updateUBOMapping(S,O);let P=e.render.frame;r[S.id]!==P&&(u(S),r[S.id]=P)}function h(S){let y=d();S.__bindingPointIndex=y;let w=i.createBuffer(),O=S.__size,P=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,O,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,w),w}function d(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){let y=s[S.id],w=S.uniforms,O=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let P=0,L=w.length;P<L;P++){let K=Array.isArray(w[P])?w[P]:[w[P]];for(let b=0,A=K.length;b<A;b++){let U=K[b];if(m(U,P,b,O)===!0){let B=U.__offset,W=Array.isArray(U.value)?U.value:[U.value],I=0;for(let D=0;D<W.length;D++){let ee=W[D],Q=v(ee);typeof ee=="number"||typeof ee=="boolean"?(U.__data[0]=ee,i.bufferSubData(i.UNIFORM_BUFFER,B+I,U.__data)):ee.isMatrix3?(U.__data[0]=ee.elements[0],U.__data[1]=ee.elements[1],U.__data[2]=ee.elements[2],U.__data[3]=0,U.__data[4]=ee.elements[3],U.__data[5]=ee.elements[4],U.__data[6]=ee.elements[5],U.__data[7]=0,U.__data[8]=ee.elements[6],U.__data[9]=ee.elements[7],U.__data[10]=ee.elements[8],U.__data[11]=0):(ee.toArray(U.__data,I),I+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(S,y,w,O){let P=S.value,L=y+"_"+w;if(O[L]===void 0)return typeof P=="number"||typeof P=="boolean"?O[L]=P:O[L]=P.clone(),!0;{let K=O[L];if(typeof P=="number"||typeof P=="boolean"){if(K!==P)return O[L]=P,!0}else if(K.equals(P)===!1)return K.copy(P),!0}return!1}function _(S){let y=S.uniforms,w=0,O=16;for(let L=0,K=y.length;L<K;L++){let b=Array.isArray(y[L])?y[L]:[y[L]];for(let A=0,U=b.length;A<U;A++){let B=b[A],W=Array.isArray(B.value)?B.value:[B.value];for(let I=0,D=W.length;I<D;I++){let ee=W[I],Q=v(ee),ne=w%O;ne!==0&&O-ne<Q.boundary&&(w+=O-ne),B.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=w,w+=Q.storage}}}let P=w%O;return P>0&&(w+=O-P),S.__size=w,S.__cache={},this}function v(S){let y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function p(S){let y=S.target;y.removeEventListener("dispose",p);let w=a.indexOf(y.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function f(){for(let S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}var ar=class{constructor(e={}){let{canvas:t=ju(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=a;let m=new Uint32Array(4),_=new Int32Array(4),v=null,p=null,f=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xn,this._useLegacyLights=!1,this.toneMapping=Oi,this.toneMappingExposure=1;let y=this,w=!1,O=0,P=0,L=null,K=-1,b=null,A=new _n,U=new _n,B=null,W=new vt(0),I=0,D=t.width,ee=t.height,Q=1,ne=null,j=null,J=new _n(0,0,D,ee),fe=new _n(0,0,D,ee),Ie=!1,te=new rr,ue=!1,Pe=!1,qe=null,Ve=new on,nt=new Ue,ct=new F,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Mt(){return L===null?Q:1}let q=n;function hn(E,V){for(let Z=0;Z<E.length;Z++){let X=E[Z],$=t.getContext(X,V);if($!==null)return $}return null}try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${gl}`),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",N,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),q===null){let V=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&V.shift(),q=hn(V,E),q===null)throw hn(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&q instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ye,et,ke,Bt,ut,T,M,Y,pe,de,_e,Oe,ye,Ee,ze,tt,he,at,it,Te,we,Se,He,Tt;function Vt(){Ye=new cm(q),et=new im(q,Ye,e),Ye.init(et),Se=new Hg(q,Ye,et),ke=new zg(q,Ye,et),Bt=new dm(q),ut=new Ag,T=new kg(q,Ye,ke,ut,et,Se,Bt),M=new rm(y),Y=new lm(y),pe=new yd(q,et),He=new tm(q,Ye,pe,et),de=new hm(q,pe,Bt,He),_e=new gm(q,de,pe,Bt),it=new mm(q,et,T),tt=new sm(ut),Oe=new wg(y,M,Y,Ye,et,He,tt),ye=new Gg(y,ut),Ee=new Cg,ze=new Ng(Ye,et),at=new em(y,M,Y,ke,_e,u,l),he=new Bg(y,_e,et),Tt=new Wg(q,Bt,et,ke),Te=new nm(q,Ye,Bt,et),we=new um(q,Ye,Bt,et),Bt.programs=Oe.programs,y.capabilities=et,y.extensions=Ye,y.properties=ut,y.renderLists=Ee,y.shadowMap=he,y.state=ke,y.info=Bt}Vt();let st=new qo(y,q);this.xr=st,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){let E=Ye.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Ye.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(E){E!==void 0&&(Q=E,this.setSize(D,ee,!1))},this.getSize=function(E){return E.set(D,ee)},this.setSize=function(E,V,Z=!0){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=E,ee=V,t.width=Math.floor(E*Q),t.height=Math.floor(V*Q),Z===!0&&(t.style.width=E+"px",t.style.height=V+"px"),this.setViewport(0,0,E,V)},this.getDrawingBufferSize=function(E){return E.set(D*Q,ee*Q).floor()},this.setDrawingBufferSize=function(E,V,Z){D=E,ee=V,Q=Z,t.width=Math.floor(E*Z),t.height=Math.floor(V*Z),this.setViewport(0,0,E,V)},this.getCurrentViewport=function(E){return E.copy(A)},this.getViewport=function(E){return E.copy(J)},this.setViewport=function(E,V,Z,X){E.isVector4?J.set(E.x,E.y,E.z,E.w):J.set(E,V,Z,X),ke.viewport(A.copy(J).multiplyScalar(Q).floor())},this.getScissor=function(E){return E.copy(fe)},this.setScissor=function(E,V,Z,X){E.isVector4?fe.set(E.x,E.y,E.z,E.w):fe.set(E,V,Z,X),ke.scissor(U.copy(fe).multiplyScalar(Q).floor())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(E){ke.setScissorTest(Ie=E)},this.setOpaqueSort=function(E){ne=E},this.setTransparentSort=function(E){j=E},this.getClearColor=function(E){return E.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor.apply(at,arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha.apply(at,arguments)},this.clear=function(E=!0,V=!0,Z=!0){let X=0;if(E){let $=!1;if(L!==null){let Le=L.texture.format;$=Le===xh||Le===_h||Le===gh}if($){let Le=L.texture.type,Ge=Le===Fi||Le===Di||Le===xl||Le===$i||Le===ph||Le===mh,Ze=at.getClearColor(),We=at.getClearAlpha(),ht=Ze.r,je=Ze.g,ot=Ze.b;Ge?(m[0]=ht,m[1]=je,m[2]=ot,m[3]=We,q.clearBufferuiv(q.COLOR,0,m)):(_[0]=ht,_[1]=je,_[2]=ot,_[3]=We,q.clearBufferiv(q.COLOR,0,_))}else X|=q.COLOR_BUFFER_BIT}V&&(X|=q.DEPTH_BUFFER_BIT),Z&&(X|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",N,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),Ee.dispose(),ze.dispose(),ut.dispose(),M.dispose(),Y.dispose(),_e.dispose(),He.dispose(),Tt.dispose(),Oe.dispose(),st.dispose(),st.removeEventListener("sessionstart",Ut),st.removeEventListener("sessionend",wt),qe&&(qe.dispose(),qe=null),sn.stop()};function xe(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let E=Bt.autoReset,V=he.enabled,Z=he.autoUpdate,X=he.needsUpdate,$=he.type;Vt(),Bt.autoReset=E,he.enabled=V,he.autoUpdate=Z,he.needsUpdate=X,he.type=$}function Ae(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Me(E){let V=E.target;V.removeEventListener("dispose",Me),De(V)}function De(E){Fe(E),ut.remove(E)}function Fe(E){let V=ut.get(E).programs;V!==void 0&&(V.forEach(function(Z){Oe.releaseProgram(Z)}),E.isShaderMaterial&&Oe.releaseShaderCache(E))}this.renderBufferDirect=function(E,V,Z,X,$,Le){V===null&&(V=Ke);let Ge=$.isMesh&&$.matrixWorld.determinant()<0,Ze=On(E,V,Z,X,$);ke.setMaterial(X,Ge);let We=Z.index,ht=1;if(X.wireframe===!0){if(We=de.getWireframeAttribute(Z),We===void 0)return;ht=2}let je=Z.drawRange,ot=Z.attributes.position,zt=je.start*ht,yn=(je.start+je.count)*ht;Le!==null&&(zt=Math.max(zt,Le.start*ht),yn=Math.min(yn,(Le.start+Le.count)*ht)),We!==null?(zt=Math.max(zt,0),yn=Math.min(yn,We.count)):ot!=null&&(zt=Math.max(zt,0),yn=Math.min(yn,ot.count));let Yt=yn-zt;if(Yt<0||Yt===1/0)return;He.setup($,X,Ze,Z,We);let Nt,xt=Te;if(We!==null&&(Nt=pe.get(We),xt=we,xt.setIndex(Nt)),$.isMesh)X.wireframe===!0?(ke.setLineWidth(X.wireframeLinewidth*Mt()),xt.setMode(q.LINES)):xt.setMode(q.TRIANGLES);else if($.isLine){let lt=X.linewidth;lt===void 0&&(lt=1),ke.setLineWidth(lt*Mt()),$.isLineSegments?xt.setMode(q.LINES):$.isLineLoop?xt.setMode(q.LINE_LOOP):xt.setMode(q.LINE_STRIP)}else $.isPoints?xt.setMode(q.POINTS):$.isSprite&&xt.setMode(q.TRIANGLES);if($.isBatchedMesh)xt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else if($.isInstancedMesh)xt.renderInstances(zt,Yt,$.count);else if(Z.isInstancedBufferGeometry){let lt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,as=Math.min(Z.instanceCount,lt);xt.renderInstances(zt,Yt,as)}else xt.render(zt,Yt)};function St(E,V,Z){E.transparent===!0&&E.side===Kt&&E.forceSinglePass===!1?(E.side=Ln,E.needsUpdate=!0,rs(E,V,Z),E.side=Bi,E.needsUpdate=!0,rs(E,V,Z),E.side=Kt):rs(E,V,Z)}this.compile=function(E,V,Z=null){Z===null&&(Z=E),p=ze.get(Z),p.init(),S.push(p),Z.traverseVisible(function($){$.isLight&&$.layers.test(V.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),E!==Z&&E.traverseVisible(function($){$.isLight&&$.layers.test(V.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),p.setupLights(y._useLegacyLights);let X=new Set;return E.traverse(function($){let Le=$.material;if(Le)if(Array.isArray(Le))for(let Ge=0;Ge<Le.length;Ge++){let Ze=Le[Ge];St(Ze,Z,$),X.add(Ze)}else St(Le,Z,$),X.add(Le)}),S.pop(),p=null,X},this.compileAsync=function(E,V,Z=null){let X=this.compile(E,V,Z);return new Promise($=>{function Le(){if(X.forEach(function(Ge){ut.get(Ge).currentProgram.isReady()&&X.delete(Ge)}),X.size===0){$(E);return}setTimeout(Le,10)}Ye.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let mt=null;function Rt(E){mt&&mt(E)}function Ut(){sn.stop()}function wt(){sn.start()}let sn=new wh;sn.setAnimationLoop(Rt),typeof self<"u"&&sn.setContext(self),this.setAnimationLoop=function(E){mt=E,st.setAnimationLoop(E),E===null?sn.stop():sn.start()},st.addEventListener("sessionstart",Ut),st.addEventListener("sessionend",wt),this.render=function(E,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(V),V=st.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,V,L),p=ze.get(E,S.length),p.init(),S.push(p),Ve.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),te.setFromProjectionMatrix(Ve),Pe=this.localClippingEnabled,ue=tt.init(this.clippingPlanes,Pe),v=Ee.get(E,f.length),v.init(),f.push(v),kn(E,V,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(ne,j),this.info.render.frame++,ue===!0&&tt.beginShadows();let Z=p.state.shadowsArray;if(he.render(Z,E,V),ue===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset(),at.render(v,E),p.setupLights(y._useLegacyLights),V.isArrayCamera){let X=V.cameras;for(let $=0,Le=X.length;$<Le;$++){let Ge=X[$];gr(v,E,Ge,Ge.viewport)}}else gr(v,E,V);L!==null&&(T.updateMultisampleRenderTarget(L),T.updateRenderTargetMipmap(L)),E.isScene===!0&&E.onAfterRender(y,E,V),He.resetDefaultState(),K=-1,b=null,S.pop(),S.length>0?p=S[S.length-1]:p=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function kn(E,V,Z,X){if(E.visible===!1)return;if(E.layers.test(V.layers)){if(E.isGroup)Z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(V);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||te.intersectsSprite(E)){X&&ct.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ve);let Ge=_e.update(E),Ze=E.material;Ze.visible&&v.push(E,Ge,Ze,Z,ct.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||te.intersectsObject(E))){let Ge=_e.update(E),Ze=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ct.copy(E.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),ct.copy(Ge.boundingSphere.center)),ct.applyMatrix4(E.matrixWorld).applyMatrix4(Ve)),Array.isArray(Ze)){let We=Ge.groups;for(let ht=0,je=We.length;ht<je;ht++){let ot=We[ht],zt=Ze[ot.materialIndex];zt&&zt.visible&&v.push(E,Ge,zt,Z,ct.z,ot)}}else Ze.visible&&v.push(E,Ge,Ze,Z,ct.z,null)}}let Le=E.children;for(let Ge=0,Ze=Le.length;Ge<Ze;Ge++)kn(Le[Ge],V,Z,X)}function gr(E,V,Z,X){let $=E.opaque,Le=E.transmissive,Ge=E.transparent;p.setupLightsView(Z),ue===!0&&tt.setGlobalState(y.clippingPlanes,Z),Le.length>0&&Ua($,Le,V,Z),X&&ke.viewport(A.copy(X)),$.length>0&&ss($,V,Z),Le.length>0&&ss(Le,V,Z),Ge.length>0&&ss(Ge,V,Z),ke.buffers.depth.setTest(!0),ke.buffers.depth.setMask(!0),ke.buffers.color.setMask(!0),ke.setPolygonOffset(!1)}function Ua(E,V,Z,X){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;let Le=et.isWebGL2;qe===null&&(qe=new yi(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")?nr:Fi,minFilter:tr,samples:Le?4:0})),y.getDrawingBufferSize(nt),Le?qe.setSize(nt.x,nt.y):qe.setSize(Lo(nt.x),Lo(nt.y));let Ge=y.getRenderTarget();y.setRenderTarget(qe),y.getClearColor(W),I=y.getClearAlpha(),I<1&&y.setClearColor(16777215,.5),y.clear();let Ze=y.toneMapping;y.toneMapping=Oi,ss(E,Z,X),T.updateMultisampleRenderTarget(qe),T.updateRenderTargetMipmap(qe);let We=!1;for(let ht=0,je=V.length;ht<je;ht++){let ot=V[ht],zt=ot.object,yn=ot.geometry,Yt=ot.material,Nt=ot.group;if(Yt.side===Kt&&zt.layers.test(X.layers)){let xt=Yt.side;Yt.side=Ln,Yt.needsUpdate=!0,_r(zt,Z,X,yn,Yt,Nt),Yt.side=xt,Yt.needsUpdate=!0,We=!0}}We===!0&&(T.updateMultisampleRenderTarget(qe),T.updateRenderTargetMipmap(qe)),y.setRenderTarget(Ge),y.setClearColor(W,I),y.toneMapping=Ze}function ss(E,V,Z){let X=V.isScene===!0?V.overrideMaterial:null;for(let $=0,Le=E.length;$<Le;$++){let Ge=E[$],Ze=Ge.object,We=Ge.geometry,ht=X===null?Ge.material:X,je=Ge.group;Ze.layers.test(Z.layers)&&_r(Ze,V,Z,We,ht,je)}}function _r(E,V,Z,X,$,Le){E.onBeforeRender(y,V,Z,X,$,Le),E.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),$.onBeforeRender(y,V,Z,X,E,Le),$.transparent===!0&&$.side===Kt&&$.forceSinglePass===!1?($.side=Ln,$.needsUpdate=!0,y.renderBufferDirect(Z,V,X,$,E,Le),$.side=Bi,$.needsUpdate=!0,y.renderBufferDirect(Z,V,X,$,E,Le),$.side=Kt):y.renderBufferDirect(Z,V,X,$,E,Le),E.onAfterRender(y,V,Z,X,$,Le)}function rs(E,V,Z){V.isScene!==!0&&(V=Ke);let X=ut.get(E),$=p.state.lights,Le=p.state.shadowsArray,Ge=$.state.version,Ze=Oe.getParameters(E,$.state,Le,V,Z),We=Oe.getProgramCacheKey(Ze),ht=X.programs;X.environment=E.isMeshStandardMaterial?V.environment:null,X.fog=V.fog,X.envMap=(E.isMeshStandardMaterial?Y:M).get(E.envMap||X.environment),ht===void 0&&(E.addEventListener("dispose",Me),ht=new Map,X.programs=ht);let je=ht.get(We);if(je!==void 0){if(X.currentProgram===je&&X.lightsStateVersion===Ge)return xr(E,Ze),je}else Ze.uniforms=Oe.getUniforms(E),E.onBuild(Z,Ze,y),E.onBeforeCompile(Ze,y),je=Oe.acquireProgram(Ze,We),ht.set(We,je),X.uniforms=Ze.uniforms;let ot=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ot.clippingPlanes=tt.uniform),xr(E,Ze),X.needsLights=Tl(E),X.lightsStateVersion=Ge,X.needsLights&&(ot.ambientLightColor.value=$.state.ambient,ot.lightProbe.value=$.state.probe,ot.directionalLights.value=$.state.directional,ot.directionalLightShadows.value=$.state.directionalShadow,ot.spotLights.value=$.state.spot,ot.spotLightShadows.value=$.state.spotShadow,ot.rectAreaLights.value=$.state.rectArea,ot.ltc_1.value=$.state.rectAreaLTC1,ot.ltc_2.value=$.state.rectAreaLTC2,ot.pointLights.value=$.state.point,ot.pointLightShadows.value=$.state.pointShadow,ot.hemisphereLights.value=$.state.hemi,ot.directionalShadowMap.value=$.state.directionalShadowMap,ot.directionalShadowMatrix.value=$.state.directionalShadowMatrix,ot.spotShadowMap.value=$.state.spotShadowMap,ot.spotLightMatrix.value=$.state.spotLightMatrix,ot.spotLightMap.value=$.state.spotLightMap,ot.pointShadowMap.value=$.state.pointShadowMap,ot.pointShadowMatrix.value=$.state.pointShadowMatrix),X.currentProgram=je,X.uniformsList=null,je}function ai(E){if(E.uniformsList===null){let V=E.currentProgram.getUniforms();E.uniformsList=Is.seqWithValue(V.seq,E.uniforms)}return E.uniformsList}function xr(E,V){let Z=ut.get(E);Z.outputColorSpace=V.outputColorSpace,Z.batching=V.batching,Z.instancing=V.instancing,Z.instancingColor=V.instancingColor,Z.skinning=V.skinning,Z.morphTargets=V.morphTargets,Z.morphNormals=V.morphNormals,Z.morphColors=V.morphColors,Z.morphTargetsCount=V.morphTargetsCount,Z.numClippingPlanes=V.numClippingPlanes,Z.numIntersection=V.numClipIntersection,Z.vertexAlphas=V.vertexAlphas,Z.vertexTangents=V.vertexTangents,Z.toneMapping=V.toneMapping}function On(E,V,Z,X,$){V.isScene!==!0&&(V=Ke),T.resetTextureUnits();let Le=V.fog,Ge=X.isMeshStandardMaterial?V.environment:null,Ze=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:xi,We=(X.isMeshStandardMaterial?Y:M).get(X.envMap||Ge),ht=X.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,je=!!Z.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),ot=!!Z.morphAttributes.position,zt=!!Z.morphAttributes.normal,yn=!!Z.morphAttributes.color,Yt=Oi;X.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Yt=y.toneMapping);let Nt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,xt=Nt!==void 0?Nt.length:0,lt=ut.get(X),as=p.state.lights;if(ue===!0&&(Pe===!0||E!==b)){let un=E===b&&X.id===K;tt.setState(X,E,un)}let kt=!1;X.version===lt.__version?(lt.needsLights&&lt.lightsStateVersion!==as.state.version||lt.outputColorSpace!==Ze||$.isBatchedMesh&&lt.batching===!1||!$.isBatchedMesh&&lt.batching===!0||$.isInstancedMesh&&lt.instancing===!1||!$.isInstancedMesh&&lt.instancing===!0||$.isSkinnedMesh&&lt.skinning===!1||!$.isSkinnedMesh&&lt.skinning===!0||$.isInstancedMesh&&lt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&lt.instancingColor===!1&&$.instanceColor!==null||lt.envMap!==We||X.fog===!0&&lt.fog!==Le||lt.numClippingPlanes!==void 0&&(lt.numClippingPlanes!==tt.numPlanes||lt.numIntersection!==tt.numIntersection)||lt.vertexAlphas!==ht||lt.vertexTangents!==je||lt.morphTargets!==ot||lt.morphNormals!==zt||lt.morphColors!==yn||lt.toneMapping!==Yt||et.isWebGL2===!0&&lt.morphTargetsCount!==xt)&&(kt=!0):(kt=!0,lt.__version=X.version);let oi=lt.currentProgram;kt===!0&&(oi=rs(X,V,$));let qn=!1,hi=!1,os=!1,jt=oi.getUniforms(),Yn=lt.uniforms;if(ke.useProgram(oi.program)&&(qn=!0,hi=!0,os=!0),X.id!==K&&(K=X.id,hi=!0),qn||b!==E){jt.setValue(q,"projectionMatrix",E.projectionMatrix),jt.setValue(q,"viewMatrix",E.matrixWorldInverse);let un=jt.map.cameraPosition;un!==void 0&&un.setValue(q,ct.setFromMatrixPosition(E.matrixWorld)),et.logarithmicDepthBuffer&&jt.setValue(q,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&jt.setValue(q,"isOrthographic",E.isOrthographicCamera===!0),b!==E&&(b=E,hi=!0,os=!0)}if($.isSkinnedMesh){jt.setOptional(q,$,"bindMatrix"),jt.setOptional(q,$,"bindMatrixInverse");let un=$.skeleton;un&&(et.floatVertexTextures?(un.boneTexture===null&&un.computeBoneTexture(),jt.setValue(q,"boneTexture",un.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}$.isBatchedMesh&&(jt.setOptional(q,$,"batchingTexture"),jt.setValue(q,"batchingTexture",$._matricesTexture,T));let Gs=Z.morphAttributes;if((Gs.position!==void 0||Gs.normal!==void 0||Gs.color!==void 0&&et.isWebGL2===!0)&&it.update($,Z,oi),(hi||lt.receiveShadow!==$.receiveShadow)&&(lt.receiveShadow=$.receiveShadow,jt.setValue(q,"receiveShadow",$.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Yn.envMap.value=We,Yn.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),hi&&(jt.setValue(q,"toneMappingExposure",y.toneMappingExposure),lt.needsLights&&Vs(Yn,os),Le&&X.fog===!0&&ye.refreshFogUniforms(Yn,Le),ye.refreshMaterialUniforms(Yn,X,Q,ee,qe),Is.upload(q,ai(lt),Yn,T)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Is.upload(q,ai(lt),Yn,T),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&jt.setValue(q,"center",$.center),jt.setValue(q,"modelViewMatrix",$.modelViewMatrix),jt.setValue(q,"normalMatrix",$.normalMatrix),jt.setValue(q,"modelMatrix",$.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let un=X.uniformsGroups;for(let ls=0,Na=un.length;ls<Na;ls++)if(et.isWebGL2){let Tn=un[ls];Tt.update(Tn,oi),Tt.bind(Tn,oi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return oi}function Vs(E,V){E.ambientLightColor.needsUpdate=V,E.lightProbe.needsUpdate=V,E.directionalLights.needsUpdate=V,E.directionalLightShadows.needsUpdate=V,E.pointLights.needsUpdate=V,E.pointLightShadows.needsUpdate=V,E.spotLights.needsUpdate=V,E.spotLightShadows.needsUpdate=V,E.rectAreaLights.needsUpdate=V,E.hemisphereLights.needsUpdate=V}function Tl(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(E,V,Z){ut.get(E.texture).__webglTexture=V,ut.get(E.depthTexture).__webglTexture=Z;let X=ut.get(E);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=Z===void 0,X.__autoAllocateDepthBuffer||Ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,V){let Z=ut.get(E);Z.__webglFramebuffer=V,Z.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(E,V=0,Z=0){L=E,O=V,P=Z;let X=!0,$=null,Le=!1,Ge=!1;if(E){let We=ut.get(E);We.__useDefaultFramebuffer!==void 0?(ke.bindFramebuffer(q.FRAMEBUFFER,null),X=!1):We.__webglFramebuffer===void 0?T.setupRenderTarget(E):We.__hasExternalTextures&&T.rebindTextures(E,ut.get(E.texture).__webglTexture,ut.get(E.depthTexture).__webglTexture);let ht=E.texture;(ht.isData3DTexture||ht.isDataArrayTexture||ht.isCompressedArrayTexture)&&(Ge=!0);let je=ut.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(je[V])?$=je[V][Z]:$=je[V],Le=!0):et.isWebGL2&&E.samples>0&&T.useMultisampledRTT(E)===!1?$=ut.get(E).__webglMultisampledFramebuffer:Array.isArray(je)?$=je[Z]:$=je,A.copy(E.viewport),U.copy(E.scissor),B=E.scissorTest}else A.copy(J).multiplyScalar(Q).floor(),U.copy(fe).multiplyScalar(Q).floor(),B=Ie;if(ke.bindFramebuffer(q.FRAMEBUFFER,$)&&et.drawBuffers&&X&&ke.drawBuffers(E,$),ke.viewport(A),ke.scissor(U),ke.setScissorTest(B),Le){let We=ut.get(E.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+V,We.__webglTexture,Z)}else if(Ge){let We=ut.get(E.texture),ht=V||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,We.__webglTexture,Z||0,ht)}K=-1},this.readRenderTargetPixels=function(E,V,Z,X,$,Le,Ge){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ze=ut.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ge!==void 0&&(Ze=Ze[Ge]),Ze){ke.bindFramebuffer(q.FRAMEBUFFER,Ze);try{let We=E.texture,ht=We.format,je=We.type;if(ht!==ti&&Se.convert(ht)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let ot=je===nr&&(Ye.has("EXT_color_buffer_half_float")||et.isWebGL2&&Ye.has("EXT_color_buffer_float"));if(je!==Fi&&Se.convert(je)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_TYPE)&&!(je===Ui&&(et.isWebGL2||Ye.has("OES_texture_float")||Ye.has("WEBGL_color_buffer_float")))&&!ot){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=E.width-X&&Z>=0&&Z<=E.height-$&&q.readPixels(V,Z,X,$,Se.convert(ht),Se.convert(je),Le)}finally{let We=L!==null?ut.get(L).__webglFramebuffer:null;ke.bindFramebuffer(q.FRAMEBUFFER,We)}}},this.copyFramebufferToTexture=function(E,V,Z=0){let X=Math.pow(2,-Z),$=Math.floor(V.image.width*X),Le=Math.floor(V.image.height*X);T.setTexture2D(V,0),q.copyTexSubImage2D(q.TEXTURE_2D,Z,0,0,E.x,E.y,$,Le),ke.unbindTexture()},this.copyTextureToTexture=function(E,V,Z,X=0){let $=V.image.width,Le=V.image.height,Ge=Se.convert(Z.format),Ze=Se.convert(Z.type);T.setTexture2D(Z,0),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,Z.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,Z.unpackAlignment),V.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,X,E.x,E.y,$,Le,Ge,Ze,V.image.data):V.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,X,E.x,E.y,V.mipmaps[0].width,V.mipmaps[0].height,Ge,V.mipmaps[0].data):q.texSubImage2D(q.TEXTURE_2D,X,E.x,E.y,Ge,Ze,V.image),X===0&&Z.generateMipmaps&&q.generateMipmap(q.TEXTURE_2D),ke.unbindTexture()},this.copyTextureToTexture3D=function(E,V,Z,X,$=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Le=E.max.x-E.min.x+1,Ge=E.max.y-E.min.y+1,Ze=E.max.z-E.min.z+1,We=Se.convert(X.format),ht=Se.convert(X.type),je;if(X.isData3DTexture)T.setTexture3D(X,0),je=q.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)T.setTexture2DArray(X,0),je=q.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,X.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,X.unpackAlignment);let ot=q.getParameter(q.UNPACK_ROW_LENGTH),zt=q.getParameter(q.UNPACK_IMAGE_HEIGHT),yn=q.getParameter(q.UNPACK_SKIP_PIXELS),Yt=q.getParameter(q.UNPACK_SKIP_ROWS),Nt=q.getParameter(q.UNPACK_SKIP_IMAGES),xt=Z.isCompressedTexture?Z.mipmaps[$]:Z.image;q.pixelStorei(q.UNPACK_ROW_LENGTH,xt.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,xt.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,E.min.x),q.pixelStorei(q.UNPACK_SKIP_ROWS,E.min.y),q.pixelStorei(q.UNPACK_SKIP_IMAGES,E.min.z),Z.isDataTexture||Z.isData3DTexture?q.texSubImage3D(je,$,V.x,V.y,V.z,Le,Ge,Ze,We,ht,xt.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(je,$,V.x,V.y,V.z,Le,Ge,Ze,We,xt.data)):q.texSubImage3D(je,$,V.x,V.y,V.z,Le,Ge,Ze,We,ht,xt),q.pixelStorei(q.UNPACK_ROW_LENGTH,ot),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,zt),q.pixelStorei(q.UNPACK_SKIP_PIXELS,yn),q.pixelStorei(q.UNPACK_SKIP_ROWS,Yt),q.pixelStorei(q.UNPACK_SKIP_IMAGES,Nt),$===0&&X.generateMipmaps&&q.generateMipmap(je),ke.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?T.setTextureCube(E,0):E.isData3DTexture?T.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?T.setTexture2DArray(E,0):T.setTexture2D(E,0),ke.unbindTexture()},this.resetState=function(){O=0,P=0,L=null,ke.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===yl?"display-p3":"srgb",t.unpackColorSpace=Dt.workingColorSpace===Aa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===xn?Ki:vh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ki?xn:xi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Yo=class extends ar{};Yo.prototype.isWebGL1Renderer=!0;var pa=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new vt(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ma=class extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var Xn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,m=(a-h)/u;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Ue:new F);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new F,s=[],r=[],a=[],o=new F,l=new on;for(let m=0;m<=e;m++){let _=m/e;s[m]=this.getTangentAt(_,new F)}r[0]=new F,a[0]=new F;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();let _=Math.acos(En(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(o,_))}a[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(En(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(m=-m);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],m*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},or=class extends Xn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let n=t||new Ue,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,m=c-this.aY;l=u*h-m*d+this.aX,c=u*d+m*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},$o=class extends or{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Ml(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,m=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,m*=h,s(a,o,u,m)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Wr=new F,vo=new Ml,Mo=new Ml,So=new Ml,Zo=class extends Xn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new F){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Wr.subVectors(s[0],s[1]).add(s[0]),c=Wr);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Wr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Wr),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,_=Math.pow(c.distanceToSquared(d),m),v=Math.pow(d.distanceToSquared(u),m),p=Math.pow(u.distanceToSquared(h),m);v<1e-4&&(v=1),_<1e-4&&(_=v),p<1e-4&&(p=v),vo.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,_,v,p),Mo.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,_,v,p),So.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,_,v,p)}else this.curveType==="catmullrom"&&(vo.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Mo.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),So.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(vo.calc(l),Mo.calc(l),So.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new F().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function nh(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Xg(i,e){let t=1-i;return t*t*e}function qg(i,e){return 2*(1-i)*i*e}function Yg(i,e){return i*i*e}function js(i,e,t,n){return Xg(i,e)+qg(i,t)+Yg(i,n)}function $g(i,e){let t=1-i;return t*t*t*e}function Zg(i,e){let t=1-i;return 3*t*t*i*e}function Kg(i,e){return 3*(1-i)*i*i*e}function Jg(i,e){return i*i*i*e}function Qs(i,e,t,n,s){return $g(i,e)+Zg(i,t)+Kg(i,n)+Jg(i,s)}var ga=class extends Xn{constructor(e=new Ue,t=new Ue,n=new Ue,s=new Ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Ue){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Qs(e,s.x,r.x,a.x,o.x),Qs(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ko=class extends Xn{constructor(e=new F,t=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Qs(e,s.x,r.x,a.x,o.x),Qs(e,s.y,r.y,a.y,o.y),Qs(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},_a=class extends Xn{constructor(e=new Ue,t=new Ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ue){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Jo=class extends Xn{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xa=class extends Xn{constructor(e=new Ue,t=new Ue,n=new Ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ue){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(js(e,s.x,r.x,a.x),js(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},jo=class extends Xn{constructor(e=new F,t=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(js(e,s.x,r.x,a.x),js(e,s.y,r.y,a.y),js(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ya=class extends Xn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ue){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(nh(o,l.x,c.x,h.x,d.x),nh(o,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Ue().fromArray(s))}return this}},ih=Object.freeze({__proto__:null,ArcCurve:$o,CatmullRomCurve3:Zo,CubicBezierCurve:ga,CubicBezierCurve3:Ko,EllipseCurve:or,LineCurve:_a,LineCurve3:Jo,QuadraticBezierCurve:xa,QuadraticBezierCurve3:jo,SplineCurve:ya}),Qo=class extends Xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ih[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new ih[s.type]().fromJSON(s))}return this}},Os=class extends Qo{constructor(e){super(),this.type="Path",this.currentPoint=new Ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new _a(this.currentPoint.clone(),new Ue(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new xa(this.currentPoint.clone(),new Ue(e,t),new Ue(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new ga(this.currentPoint.clone(),new Ue(e,t),new Ue(n,s),new Ue(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ya(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new or(e,t,n,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var Qi=class i extends si{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],m=[],_=0,v=[],p=n/2,f=0;S(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Jt(d,3)),this.setAttribute("normal",new Jt(u,3)),this.setAttribute("uv",new Jt(m,2));function S(){let w=new F,O=new F,P=0,L=(t-e)/n;for(let K=0;K<=r;K++){let b=[],A=K/r,U=A*(t-e)+e;for(let B=0;B<=s;B++){let W=B/s,I=W*l+o,D=Math.sin(I),ee=Math.cos(I);O.x=U*D,O.y=-A*n+p,O.z=U*ee,d.push(O.x,O.y,O.z),w.set(D,L,ee).normalize(),u.push(w.x,w.y,w.z),m.push(W,1-A),b.push(_++)}v.push(b)}for(let K=0;K<s;K++)for(let b=0;b<r;b++){let A=v[b][K],U=v[b+1][K],B=v[b+1][K+1],W=v[b][K+1];h.push(A,U,W),h.push(U,B,W),P+=6}c.addGroup(f,P,0),f+=P}function y(w){let O=_,P=new Ue,L=new F,K=0,b=w===!0?e:t,A=w===!0?1:-1;for(let B=1;B<=s;B++)d.push(0,p*A,0),u.push(0,A,0),m.push(.5,.5),_++;let U=_;for(let B=0;B<=s;B++){let I=B/s*l+o,D=Math.cos(I),ee=Math.sin(I);L.x=b*ee,L.y=p*A,L.z=b*D,d.push(L.x,L.y,L.z),u.push(0,A,0),P.x=D*.5+.5,P.y=ee*.5*A+.5,m.push(P.x,P.y),_++}for(let B=0;B<s;B++){let W=O+B,I=U+B;w===!0?h.push(I,I+1,W):h.push(I+1,I,W),K+=3}c.addGroup(f,K,w===!0?1:2),f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Fs=class i extends Qi{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},el=class i extends si{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Jt(r,3)),this.setAttribute("normal",new Jt(r.slice(),3)),this.setAttribute("uv",new Jt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let y=new F,w=new F,O=new F;for(let P=0;P<t.length;P+=3)m(t[P+0],y),m(t[P+1],w),m(t[P+2],O),l(y,w,O,S)}function l(S,y,w,O){let P=O+1,L=[];for(let K=0;K<=P;K++){L[K]=[];let b=S.clone().lerp(w,K/P),A=y.clone().lerp(w,K/P),U=P-K;for(let B=0;B<=U;B++)B===0&&K===P?L[K][B]=b:L[K][B]=b.clone().lerp(A,B/U)}for(let K=0;K<P;K++)for(let b=0;b<2*(P-K)-1;b++){let A=Math.floor(b/2);b%2===0?(u(L[K][A+1]),u(L[K+1][A]),u(L[K][A])):(u(L[K][A+1]),u(L[K+1][A+1]),u(L[K+1][A]))}}function c(S){let y=new F;for(let w=0;w<r.length;w+=3)y.x=r[w+0],y.y=r[w+1],y.z=r[w+2],y.normalize().multiplyScalar(S),r[w+0]=y.x,r[w+1]=y.y,r[w+2]=y.z}function h(){let S=new F;for(let y=0;y<r.length;y+=3){S.x=r[y+0],S.y=r[y+1],S.z=r[y+2];let w=p(S)/2/Math.PI+.5,O=f(S)/Math.PI+.5;a.push(w,1-O)}_(),d()}function d(){for(let S=0;S<a.length;S+=6){let y=a[S+0],w=a[S+2],O=a[S+4],P=Math.max(y,w,O),L=Math.min(y,w,O);P>.9&&L<.1&&(y<.2&&(a[S+0]+=1),w<.2&&(a[S+2]+=1),O<.2&&(a[S+4]+=1))}}function u(S){r.push(S.x,S.y,S.z)}function m(S,y){let w=S*3;y.x=e[w+0],y.y=e[w+1],y.z=e[w+2]}function _(){let S=new F,y=new F,w=new F,O=new F,P=new Ue,L=new Ue,K=new Ue;for(let b=0,A=0;b<r.length;b+=9,A+=6){S.set(r[b+0],r[b+1],r[b+2]),y.set(r[b+3],r[b+4],r[b+5]),w.set(r[b+6],r[b+7],r[b+8]),P.set(a[A+0],a[A+1]),L.set(a[A+2],a[A+3]),K.set(a[A+4],a[A+5]),O.copy(S).add(y).add(w).divideScalar(3);let U=p(O);v(P,A+0,S,U),v(L,A+2,y,U),v(K,A+4,w,U)}}function v(S,y,w,O){O<0&&S.x===1&&(a[y]=S.x-1),w.x===0&&w.z===0&&(a[y]=O/2/Math.PI+.5)}function p(S){return Math.atan2(S.z,-S.x)}function f(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},va=class i extends el{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var lr=class extends Os{constructor(e){super(e),this.uuid=zs(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Os().fromJSON(s))}return this}},jg={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Lh(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,d,u,m;if(n&&(r=i0(i,e,r,t)),i.length>80*t){o=c=i[0],l=h=i[1];for(let _=t;_<s;_+=t)d=i[_],u=i[_+1],d<o&&(o=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);m=Math.max(c-o,h-l),m=m!==0?32767/m:0}return cr(r,a,t,o,l,m,0),a}};function Lh(i,e,t,n,s){let r,a;if(s===p0(i,e,t,n)>0)for(r=e;r<t;r+=n)a=sh(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=sh(r,i[r],i[r+1],a);return a&&Ca(a,a.next)&&(ur(a),a=a.next),a}function es(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ca(t,t.next)||Xt(t.prev,t,t.next)===0)){if(ur(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function cr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&l0(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?e0(i,n,s,r):Qg(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),ur(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=t0(es(i),e,t),cr(i,e,t,n,s,r,2)):a===2&&n0(i,e,t,n,s,r):cr(es(i),e,t,n,s,r,1);break}}}function Qg(i){let e=i.prev,t=i,n=i.next;if(Xt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,d=o<l?o<c?o:c:l<c?l:c,u=s>r?s>a?s:a:r>a?r:a,m=o>l?o>c?o:c:l>c?l:c,_=n.next;for(;_!==e;){if(_.x>=h&&_.x<=u&&_.y>=d&&_.y<=m&&Rs(s,o,r,l,a,c,_.x,_.y)&&Xt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function e0(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Xt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,m=o<l?o<c?o:c:l<c?l:c,_=h<d?h<u?h:u:d<u?d:u,v=o>l?o>c?o:c:l>c?l:c,p=h>d?h>u?h:u:d>u?d:u,f=tl(m,_,e,t,n),S=tl(v,p,e,t,n),y=i.prevZ,w=i.nextZ;for(;y&&y.z>=f&&w&&w.z<=S;){if(y.x>=m&&y.x<=v&&y.y>=_&&y.y<=p&&y!==s&&y!==a&&Rs(o,h,l,d,c,u,y.x,y.y)&&Xt(y.prev,y,y.next)>=0||(y=y.prevZ,w.x>=m&&w.x<=v&&w.y>=_&&w.y<=p&&w!==s&&w!==a&&Rs(o,h,l,d,c,u,w.x,w.y)&&Xt(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;y&&y.z>=f;){if(y.x>=m&&y.x<=v&&y.y>=_&&y.y<=p&&y!==s&&y!==a&&Rs(o,h,l,d,c,u,y.x,y.y)&&Xt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;w&&w.z<=S;){if(w.x>=m&&w.x<=v&&w.y>=_&&w.y<=p&&w!==s&&w!==a&&Rs(o,h,l,d,c,u,w.x,w.y)&&Xt(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function t0(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!Ca(s,r)&&Dh(s,n,n.next,r)&&hr(s,r)&&hr(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),ur(n),ur(n.next),n=i=r),n=n.next}while(n!==i);return es(n)}function n0(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&u0(a,o)){let l=Uh(a,o);a=es(a,a.next),l=es(l,l.next),cr(a,e,t,n,s,r,0),cr(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function i0(i,e,t,n){let s=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Lh(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(h0(c));for(s.sort(s0),r=0;r<s.length;r++)t=r0(s[r],t);return t}function s0(i,e){return i.x-e.x}function r0(i,e){let t=a0(i,e);if(!t)return e;let n=Uh(t,i);return es(n,n.next),es(t,t.next)}function a0(i,e){let t=e,n=-1/0,s,r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let u=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=r&&u>n&&(n=u,s=t.x<t.next.x?t:t.next,u===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,d;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Rs(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(d=Math.abs(a-t.y)/(r-t.x),hr(t,i)&&(d<h||d===h&&(t.x>s.x||t.x===s.x&&o0(s,t)))&&(s=t,h=d)),t=t.next;while(t!==o);return s}function o0(i,e){return Xt(i.prev,i,e.prev)<0&&Xt(e.next,i,i.next)<0}function l0(i,e,t,n){let s=i;do s.z===0&&(s.z=tl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,c0(s)}function c0(i){let e,t,n,s,r,a,o,l,c=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(a>1);return i}function tl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function h0(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Rs(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function u0(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!d0(i,e)&&(hr(i,e)&&hr(e,i)&&f0(i,e)&&(Xt(i.prev,i,e.prev)||Xt(i,e.prev,e))||Ca(i,e)&&Xt(i.prev,i,i.next)>0&&Xt(e.prev,e,e.next)>0)}function Xt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ca(i,e){return i.x===e.x&&i.y===e.y}function Dh(i,e,t,n){let s=qr(Xt(i,e,t)),r=qr(Xt(i,e,n)),a=qr(Xt(t,n,i)),o=qr(Xt(t,n,e));return!!(s!==r&&a!==o||s===0&&Xr(i,t,e)||r===0&&Xr(i,n,e)||a===0&&Xr(t,i,n)||o===0&&Xr(t,e,n))}function Xr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function qr(i){return i>0?1:i<0?-1:0}function d0(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Dh(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function hr(i,e){return Xt(i.prev,i,i.next)<0?Xt(i,e,i.next)>=0&&Xt(i,i.prev,e)>=0:Xt(i,e,i.prev)<0||Xt(i,i.next,e)<0}function f0(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Uh(i,e){let t=new nl(i.i,i.x,i.y),n=new nl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function sh(i,e,t,n){let s=new nl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ur(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function nl(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function p0(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var er=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];rh(e),ah(n,e);let a=e.length;t.forEach(rh);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,ah(n,t[l]);let o=jg.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function rh(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function ah(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Ma=class i extends si{constructor(e=new lr([new Ue(0,.5),new Ue(-.5,-.5),new Ue(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Jt(s,3)),this.setAttribute("normal",new Jt(r,3)),this.setAttribute("uv",new Jt(a,2));function c(h){let d=s.length/3,u=h.extractPoints(t),m=u.shape,_=u.holes;er.isClockWise(m)===!1&&(m=m.reverse());for(let p=0,f=_.length;p<f;p++){let S=_[p];er.isClockWise(S)===!0&&(_[p]=S.reverse())}let v=er.triangulateShape(m,_);for(let p=0,f=_.length;p<f;p++){let S=_[p];m=m.concat(S)}for(let p=0,f=m.length;p<f;p++){let S=m[p];s.push(S.x,S.y,0),r.push(0,0,1),a.push(S.x,S.y)}for(let p=0,f=v.length;p<f;p++){let S=v[p],y=S[0]+d,w=S[1]+d,O=S[2]+d;n.push(y,w,O),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return m0(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function m0(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Mi=class i extends si{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new F,u=new F,m=[],_=[],v=[],p=[];for(let f=0;f<=n;f++){let S=[],y=f/n,w=0;f===0&&a===0?w=.5/t:f===n&&l===Math.PI&&(w=-.5/t);for(let O=0;O<=t;O++){let P=O/t;d.x=-e*Math.cos(s+P*r)*Math.sin(a+y*o),d.y=e*Math.cos(a+y*o),d.z=e*Math.sin(s+P*r)*Math.sin(a+y*o),_.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),p.push(P+w,1-y),S.push(c++)}h.push(S)}for(let f=0;f<n;f++)for(let S=0;S<t;S++){let y=h[f][S+1],w=h[f][S],O=h[f+1][S],P=h[f+1][S+1];(f!==0||a>0)&&m.push(y,w,P),(f!==n-1||l<Math.PI)&&m.push(w,O,P)}this.setIndex(m),this.setAttribute("position",new Jt(_,3)),this.setAttribute("normal",new Jt(v,3)),this.setAttribute("uv",new Jt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Nn=class extends ji{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mh,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Yr(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function g0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Bs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},il=class extends Bs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:dc,endingEnd:dc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case fc:r=e,o=2*t-n;break;case pc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case fc:a=e,l=2*n-t;break;case pc:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,m=this._weightNext,_=(n-t)/(s-t),v=_*_,p=v*_,f=-u*p+2*u*v-u*_,S=(1+u)*p+(-1.5-2*u)*v+(-.5+u)*_+1,y=(-1-m)*p+(1.5+m)*v+.5*_,w=m*p-m*v;for(let O=0;O!==o;++O)r[O]=f*a[h+O]+S*a[c+O]+y*a[l+O]+w*a[d+O];return r}},sl=class extends Bs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},rl=class extends Bs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ri=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Yr(t,this.TimeBufferType),this.values=Yr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Yr(e.times,Array),values:Yr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new rl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new sl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new il(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Zr:t=this.InterpolantFactoryMethodDiscrete;break;case Kr:t=this.InterpolantFactoryMethodLinear;break;case $a:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zr;case this.InterpolantFactoryMethodLinear:return Kr;case this.InterpolantFactoryMethodSmooth:return $a}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&g0(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===$a,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*n,u=d-n,m=d+n;for(let _=0;_!==n;++_){let v=t[d+_];if(v!==t[u+_]||v!==t[m+_]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,u=a*n;for(let m=0;m!==n;++m)t[u+m]=t[d+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};ri.prototype.TimeBufferType=Float32Array;ri.prototype.ValueBufferType=Float32Array;ri.prototype.DefaultInterpolation=Kr;var ts=class extends ri{};ts.prototype.ValueTypeName="bool";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=Zr;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var al=class extends ri{};al.prototype.ValueTypeName="color";var ol=class extends ri{};ol.prototype.ValueTypeName="number";var ll=class extends Bs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)ki.slerpFlat(r,0,a,c-o,a,c,l);return r}},dr=class extends ri{InterpolantFactoryMethodLinear(e){return new ll(this.times,this.values,this.getValueSize(),e)}};dr.prototype.ValueTypeName="quaternion";dr.prototype.DefaultInterpolation=Kr;dr.prototype.InterpolantFactoryMethodSmooth=void 0;var ns=class extends ri{};ns.prototype.ValueTypeName="string";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=Zr;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var cl=class extends ri{};cl.prototype.ValueTypeName="vector";var hl=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let m=c[d],_=c[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return _}return null}}},_0=new hl,ul=class{constructor(e){this.manager=e!==void 0?e:_0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ul.DEFAULT_MATERIAL_NAME="__DEFAULT";var Sa=class extends Dn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};var bo=new on,oh=new F,lh=new F,dl=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.map=null,this.mapPass=null,this.matrix=new on,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rr,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new _n(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;oh.setFromMatrixPosition(e.matrixWorld),t.position.copy(oh),lh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(lh),t.updateMatrixWorld(),bo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(bo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var fl=class extends dl{constructor(){super(new ua(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ba=class extends Sa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.target=new Dn,this.shadow=new fl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ea=class extends Sa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Sl="\\[\\]\\.:\\/",x0=new RegExp("["+Sl+"]","g"),bl="[^"+Sl+"]",y0="[^"+Sl.replace("\\.","")+"]",v0=/((?:WC+[\/:])*)/.source.replace("WC",bl),M0=/(WCOD+)?/.source.replace("WCOD",y0),S0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bl),b0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bl),E0=new RegExp("^"+v0+M0+S0+b0+"$"),T0=["material","materials","bones","map"],pl=class{constructor(e,t,n){let s=n||Wt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Wt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(x0,"")}static parseTrackName(e){let t=E0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);T0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Wt.Composite=pl;Wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Wt.prototype.GetterByBindingType=[Wt.prototype._getValue_direct,Wt.prototype._getValue_array,Wt.prototype._getValue_arrayElement,Wt.prototype._getValue_toArray];Wt.prototype.SetterByBindingTypeAndVersioning=[[Wt.prototype._setValue_direct,Wt.prototype._setValue_direct_setNeedsUpdate,Wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Wt.prototype._setValue_array,Wt.prototype._setValue_array_setNeedsUpdate,Wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Wt.prototype._setValue_arrayElement,Wt.prototype._setValue_arrayElement_setNeedsUpdate,Wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Wt.prototype._setValue_fromArray,Wt.prototype._setValue_fromArray_setNeedsUpdate,Wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var B0=new Float32Array(1);var Ta=class{constructor(e,t,n=0,s=1/0){this.ray=new ra(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new sr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return ml(e,this,n,t),n.sort(ch),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)ml(e[s],this,n,t);return n.sort(ch),n}};function ch(i,e){return i.distance-e.distance}function ml(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,a=s.length;r<a;r++)ml(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gl);var A0=35,R0=25,dt=.95,Pn=.35,Pa=6,is=120;var Qe={PATH:0,GRASS:1,TREE:2,WATER:3,ROCK:4,BASE_TOP:5,BASE_BOTTOM:6,CENTER:7},Ia=["knight","mage","monk","ghoul","lancer","hunter","assassin","berserker","witch","ninja","samurai","werewolf"],Si={knight:{name:"Knight",gender:"male",hp:27,maxHp:27,mp:5,maxMp:5,str:13,agi:8,vit:14,dex:10,luk:4,int:7,range:1},mage:{name:"Mage",gender:"female",hp:17,maxHp:17,mp:22,maxMp:22,str:6,agi:4,vit:5,dex:4,luk:13,int:15,range:4},monk:{name:"Monk",gender:"male",hp:23,maxHp:23,mp:12,maxMp:12,str:10,agi:10,vit:12,dex:9,luk:9,int:10,range:1},ghoul:{name:"Ghoul",gender:"male",hp:21,maxHp:21,mp:6,maxMp:6,str:11,agi:9,vit:9,dex:11,luk:11,int:5,range:1},lancer:{name:"Lancer",gender:"female",hp:22,maxHp:22,mp:7,maxMp:7,str:13,agi:11,vit:10,dex:7,luk:5,int:8,range:2},hunter:{name:"Hunter",gender:"female",hp:18,maxHp:18,mp:9,maxMp:9,str:7,agi:5,vit:7,dex:15,luk:12,int:5,range:6},assassin:{name:"Assassin",gender:"female",hp:19,maxHp:19,mp:10,maxMp:10,str:9,agi:14,vit:6,dex:14,luk:10,int:4,range:1},berserker:{name:"Berserker",gender:"male",hp:30,maxHp:30,mp:3,maxMp:3,str:15,agi:7,vit:13,dex:8,luk:6,int:2,range:1},witch:{name:"Witch",gender:"female",hp:16,maxHp:16,mp:24,maxMp:24,str:5,agi:6,vit:4,dex:5,luk:14,int:14,range:3},ninja:{name:"Ninja",gender:"female",hp:20,maxHp:20,mp:12,maxMp:12,str:8,agi:15,vit:7,dex:12,luk:8,int:9,range:1},samurai:{name:"Samurai",gender:"male",hp:24,maxHp:24,mp:8,maxMp:8,str:12,agi:12,vit:8,dex:13,luk:7,int:6,range:1},werewolf:{name:"Werewolf",gender:"male",hp:25,maxHp:25,mp:4,maxMp:4,str:14,agi:13,vit:11,dex:6,luk:6,int:3,range:1}},La={knight:{primary:6908265,secondary:9127187,hair:12887172,cape:3355443},mage:{primary:16776656,secondary:3355443,hair:13353955,cape:4853326},monk:{primary:16777188,secondary:16119285,hair:2889744},ghoul:{primary:32896,secondary:6636321,hair:32896,skin:32896},lancer:{primary:3169502,secondary:16776656,hair:15854290,cape:14423100},hunter:{primary:8421376,secondary:9584654,hair:7898731,cape:16119285},assassin:{primary:986695,secondary:16119285,hair:2621751},berserker:{primary:657930,secondary:986695,hair:657930,cape:1118481},witch:{primary:16119285,secondary:8388640,hair:16777188,cape:2263842},ninja:{primary:267292,secondary:4744577,hair:4744577},samurai:{primary:13882323,secondary:3556687,hair:3556687},werewolf:{primary:11119017,secondary:14474460,hair:12632256}},fr={knight:"https://creator.nightcafe.studio/jobs/OlIWpAye2LeM5gPkAGEI/OlIWpAye2LeM5gPkAGEI--1--xc223.jpg",mage:"https://media.craiyon.com/2025-08-13/bLqz0LbwSIynOcUHty4Maw.webp",monk:"https://cdnb.artstation.com/p/assets/images/images/028/576/499/large/ahruna-art-oct17.jpg?1594859688",ghoul:"https://i.pinimg.com/736x/d3/cc/41/d3cc41778d05dec0371a69e29659f792.jpg",lancer:"https://i.redd.it/zolf64gpoa0c1.jpg",hunter:"https://coolvibe.com/wp-content/uploads/2011/02/hunter.jpg",assassin:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk2-NBPpPOU7duYgN_k_9oFKZ5hJjU28qyoA&s",berserker:"https://entertainment.inquirer.net/files/2016/07/top_bg.jpg",witch:"https://w0.peakpx.com/wallpaper/382/134/HD-wallpaper-evil-witch-witch-female-dress-white-hair-evil-black-woman-girl-darkness-anime-dark-beauty-lady-long-hair.jpg",ninja:"https://i.pinimg.com/474x/02/88/60/0288609778e53701b7e64051d7164922.jpg",samurai:"https://files.idyllic.app/files/static/3120390?width=256&optimizer=image",werewolf:"https://i.pinimg.com/736x/1f/95/27/1f9527c6255465547d664f19dd11967c.jpg"},C0={knight:[{name:"Shield Wall",description:"Gain +2 VIT for 2 turns.",cost:3,target:"self",range:0,level:2,effectKey:"shieldWall"},{name:"Dominate",description:"Steal 1 STR from an enemy.",cost:5,target:"enemy",range:1,level:3,effectKey:"dominate"}],mage:[{name:"Arcane Bolt",description:"Deal INT-based damage to one enemy.",cost:4,target:"enemy",range:4,level:1,effectKey:"arcaneBolt",type:"spell"},{name:"Freeze",description:"Reduce target's AGI by 10 for 1 turn.",cost:8,target:"enemy",range:4,level:2,effectKey:"freeze",type:"spell"}],monk:[{name:"Mantra",description:"Steal 2 LUK from an enemy.",cost:5,target:"enemy",range:1,level:2,effectKey:"mantra"},{name:"Chakra",description:"Restore INT-based HP to self.",cost:6,target:"self",range:0,level:3,effectKey:"chakra"}],ghoul:[{name:"Weaken",description:"Steal 1 VIT from an enemy.",cost:4,target:"enemy",range:1,level:2,effectKey:"weaken"},{name:"Feast",description:"Deal STR-based damage to enemy and heal self.",cost:5,target:"enemy",range:1,level:3,effectKey:"feast"}],lancer:[{name:"Impale",description:"Reduce target's AGI by 2 for 3 turns.",cost:4,target:"enemy",range:2,level:2,effectKey:"impale"},{name:"Pierce",description:"Deal STR-based damage through the defense.",cost:6,target:"enemy",range:2,level:3,effectKey:"pierce"}],hunter:[{name:"Focus",description:"Gain +2 DEX for 2 turns.",cost:4,target:"self",range:6,level:2,effectKey:"focus"},{name:"Snipe",description:"Deal DEX-based damage to one enemy.",cost:6,target:"enemy",range:10,level:3,effectKey:"snipe"}],assassin:[{name:"Cripple",description:"Steal 1 AGI from an enemy.",cost:5,target:"enemy",range:1,level:2,effectKey:"cripple"},{name:"Poison",description:"Reduce target's VIT by 3 for 3 turns.",cost:6,target:"enemy",range:1,level:3,effectKey:"poison"}],berserker:[{name:"Berserk",description:"Deal STR-based damage for -2 HP.",cost:0,target:"enemy",range:1,level:2,effectKey:"berserk"},{name:"Bloodlust",description:"Gain STR and VIT based on lost HP for 2 turns.",cost:5,target:"self",range:0,level:3,effectKey:"bloodlust"}],witch:[{name:"Hex",description:"Steal 1 INT from an enemy.",cost:5,target:"enemy",range:3,level:1,effectKey:"hex",type:"spell"},{name:"Drain",description:"Deal INT-based damage to enemy and heal self.",cost:6,target:"enemy",range:3,level:2,effectKey:"drain",type:"spell"}],ninja:[{name:"Shuriken",description:"Deal DEX-based ranged attack.",cost:5,target:"enemy",range:4,level:2,effectKey:"shuriken"},{name:"Blind",description:"Steal 2 DEX from an enemy.",cost:8,target:"enemy",range:1,level:3,effectKey:"blind"}],samurai:[{name:"Iaido",description:"Gain +1 STR and +1 DEX for 2 turns.",cost:5,target:"self",range:0,level:2,effectKey:"iaido"},{name:"Strike",description:"Deal STR+DEX-based damage to one enemy.",cost:7,target:"enemy",range:1,level:3,effectKey:"strike"}],werewolf:[{name:"Bite",description:"Deal STR+AGI-based damage to one enemy.",cost:5,target:"enemy",range:1,level:2,effectKey:"bite"},{name:"Howl",description:"Gain +2 STR and +2 AGI for 2 turns.",cost:6,target:"self",range:0,level:3,effectKey:"howl"}]};function Be(i,e){let t=i[e]!=null?i[e]:0,n=i.tempBuff&&i.tempBuff[e]!=null?i.tempBuff[e]:0,s=i.tempDebuff&&i.tempDebuff[e]!=null?i.tempDebuff[e]:0;return t+n-s}function Da(i,e,t,n){let s=e,r=t,o={shieldWall:"Shield Wall",dominate:"Dominate",arcaneBolt:"Arcane Bolt",freeze:"Freeze",mantra:"Mantra",chakra:"Chakra",weaken:"Weaken",feast:"Feast",impale:"Impale",pierce:"Pierce",focus:"Focus",snipe:"Snipe",poison:"Poison",cripple:"Cripple",berserk:"Berserk",bloodlust:"Bloodlust",hex:"Hex",drain:"Drain",shuriken:"Shuriken",blind:"Blind",iaido:"Iaido",strike:"Strike",bite:"Bite",howl:"Howl"}[i]||i.replace(/([A-Z])/g," $1").replace(/^./,u=>u.toUpperCase()).trim();n.showFloatingCombatText&&n.showFloatingCombatText(s.x,s.y,o,!1,"skill-name");let l=i.replace(/([A-Z])/g," $1").replace(/^./,u=>u.toUpperCase()).trim(),c=r?`${r.name} (${r.class}, P${r.player})`:"self";console.log("[SKILL]",`${s.name} (${s.class}, P${s.player})`,"uses",l,"\u2192",c,`| MP ${s.mp}`);let h=(u,m,_,v)=>{if(_)u.hp=Math.min(u.maxHp,u.hp+m),n.showFloatingCombatText&&n.showFloatingCombatText(u.x,u.y,`+${m}`,!1);else{let p=u===s,f=!0;if(!p&&!v){let S=Be(u,"agi")*.7+Be(u,"luk")*.3;f=Math.random()*Math.max(.001,S)<=Be(s,"dex")}return f?(u.hp=Math.max(0,u.hp-m),n.showFloatingCombatText&&n.showFloatingCombatText(u.x,u.y,String(m),!1),n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(u),u.hp<=0&&n.handleUnitDeath&&n.handleUnitDeath(u)):n.showFloatingCombatText&&n.showFloatingCombatText(u.x,u.y,"MISS",!0),f}},d=(u,m,_,v)=>{n.showFloatingCombatText&&n.showFloatingCombatText(u,m,_,!1,v?"buff":"debuff")};switch(i){case"shieldWall":s.tempBuff=s.tempBuff||{},s.tempBuff.vit=2,s.tempBuff.duration=3,d(s.x,s.y,"+2 VIT",!0);break;case"dominate":r&&(r.str=Math.max(1,(r.str||0)-1),s.str=(s.str||0)+1,d(r.x,r.y,"-1 STR",!1),d(s.x,s.y,"+1 STR",!0));break;case"arcaneBolt":{if(!r)break;let u=Math.max(1,Math.ceil(Be(s,"int")*1.5-(Be(r,"int")*1.3+Be(r,"luk")*.1)));h(r,u,!1,!0);break}case"freeze":r&&(r.tempDebuff=r.tempDebuff||{},r.tempDebuff.agi=10,r.tempDebuff.duration=1,d(r.x,r.y,"-10 AGI",!1));break;case"mantra":r&&(r.luk=Math.max(1,(r.luk||0)-2),s.luk=(s.luk||0)+2,d(r.x,r.y,"-2 LUK",!1),d(s.x,s.y,"+2 LUK",!0));break;case"chakra":s.hp=Math.min(s.maxHp,s.hp+Be(s,"int")),h(s,Math.max(1,Math.floor(Be(s,"int")*.6)),!0);break;case"weaken":r&&(r.vit=Math.max(1,(r.vit||0)-1),s.vit=(s.vit||0)+1,d(r.x,r.y,"-1 VIT",!1),d(s.x,s.y,"+1 VIT",!0));break;case"feast":{if(!r)break;let u=Math.max(1,Math.floor(Be(s,"str")*.6-(Be(r,"vit")*.3+Be(r,"luk")*.1)));h(r,u,!1)&&h(s,u,!0);break}case"impale":r&&(r.tempDebuff=r.tempDebuff||{},r.tempDebuff.agi=2,r.tempDebuff.duration=4,d(r.x,r.y,"-2 AGI",!1));break;case"pierce":{if(!r)break;let u=Math.max(1,Math.floor(Be(s,"str")*.6));h(r,u,!1);break}case"focus":s.tempBuff=s.tempBuff||{},s.tempBuff.dex=2,s.tempBuff.duration=3,d(s.x,s.y,"+2 DEX",!0);break;case"snipe":{if(!r)break;let u=Math.max(1,Math.floor(Be(s,"dex")*.6-(Be(r,"vit")*.3+Be(r,"luk")*.1)));h(r,u,!1);break}case"poison":r&&(r.tempDebuff=r.tempDebuff||{},r.tempDebuff.vit=3,r.tempDebuff.duration=4,d(r.x,r.y,"-3 VIT",!1));break;case"cripple":r&&(r.agi=Math.max(1,(r.agi||0)-1),s.agi=(s.agi||0)+1,d(r.x,r.y,"-1 AGI",!1),d(s.x,s.y,"+1 AGI",!0));break;case"berserk":s.hp=Math.max(0,s.hp-2),h(r,Math.max(1,Math.floor(Be(s,"str")*.8-Be(r,"vit")*.3+Be(r,"luk")*.1)),!1),h(s,2,!1);break;case"bloodlust":{let u=Math.max(1,Math.floor((s.maxHp-s.hp)*.5));s.tempBuff=s.tempBuff||{},s.tempBuff.str=u,s.tempBuff.vit=u,s.tempBuff.duration=3,d(s.x,s.y,`+${u} STR, +${u} VIT`,!0);break}case"hex":r&&(r.int=Math.max(1,(r.int||0)-1),s.int=(s.int||0)+1,d(r.x,r.y,"-1 INT",!1),d(s.x,s.y,"+1 INT",!0));break;case"drain":{if(!r)break;let u=Math.max(1,Math.ceil(Be(s,"int")*.6-(Be(r,"int")*.4+Be(r,"luk")*.1)));h(r,u,!1,!0),h(s,u,!0);break}case"shuriken":{if(!r)break;let u=Math.max(1,Math.floor(Be(s,"dex")*.5-(Be(r,"vit")*.3+Be(r,"luk")*.1)));h(r,u,!1);break}case"blind":r&&(r.dex=Math.max(1,(r.dex||0)-2),s.dex=(s.dex||0)+2,d(r.x,r.y,"-2 DEX",!1),d(s.x,s.y,"+2 DEX",!0));break;case"iaido":s.tempBuff=s.tempBuff||{},s.tempBuff.str=1,s.tempBuff.dex=1,s.tempBuff.duration=3,d(s.x,s.y,"+1 STR, +1 DEX",!0);break;case"strike":{if(!r)break;let u=Math.max(1,Math.floor((s.str||0)+(s.dex||0)*.3));h(r,u,!1);break}case"bite":{if(!r)break;let u=Math.max(1,Math.floor(Be(s,"str")*.4+Be(s,"agi")*.3-(Be(r,"vit")*.3+Be(r,"luk")*.1)));h(r,u,!1);break}case"howl":s.tempBuff=s.tempBuff||{},s.tempBuff.str=2,s.tempBuff.agi=2,s.tempBuff.duration=2,d(s.x,s.y,"+2 STR, +2 AGI",!0);break;default:break}n.updateTurnUI&&n.updateTurnUI()}function P0(){let i=A0,e=R0,t=Array.from({length:e},()=>Array(i).fill(!1)),n=Array.from({length:e},()=>Array(i).fill(0)),s=Array.from({length:e},()=>Array(i).fill(Qe.GRASS)),r=Math.floor(i/2),a=Math.floor(i/2),o=0,l=e-1;for(let U=-1;U<=1;U++)for(let B=-2;B<=2;B++){let W=r+B,I=o+U;W>=0&&W<i&&I>=0&&I<e&&(t[I][W]=!0,s[I][W]=Qe.BASE_TOP,n[I][W]=1)}for(let U=-1;U<=1;U++)for(let B=-2;B<=2;B++){let W=a+B,I=l+U;W>=0&&W<i&&I>=0&&I<e&&(t[I][W]=!0,s[I][W]=Qe.BASE_BOTTOM,n[I][W]=1)}let c=Math.floor(i/2),h=Math.floor(e/2);for(let U=-1;U<=1;U++)for(let B=-2;B<=2;B++){let W=c+B,I=h+U;W>=0&&W<i&&I>=0&&I<e&&(t[I][W]=!0,s[I][W]=Qe.CENTER,n[I][W]=1)}let d=new Set,u=(U,B)=>Math.abs(U-c)<=2&&Math.abs(B-h)<=1,m=(U,B)=>{U<0||U>=i||B<0||B>=e||u(U,B)||d.add(B*i+U)},_=Math.floor(i/2),v=Math.floor(e/2),p=Math.min(i,e)*.29,f=Math.max(60,(e+i)*2);for(let U=0;U<2;U++){let B=U===0?_-p:_+p,W=U===0?Math.PI/2:-Math.PI/2,I=U===0?Math.PI*3/2:Math.PI/2;for(let D=0;D<=f;D++){let ee=D/f,Q=W+ee*(I-W),ne=B+p*Math.cos(Q),j=v+p*Math.sin(Q),J=Math.round(ne),fe=Math.round(j);m(J,fe),m(J+1,fe),m(J-1,fe),m(J,fe+1),m(J,fe-1)}}let S=[[0,1],[0,-1],[1,0],[-1,0]];for(let U=0;U<1;U++){let B=[];d.forEach(W=>{let I=W%i,D=W/i|0;for(let[ee,Q]of S){let ne=I+ee,j=D+Q;if(ne<0||ne>=i||j<0||j>=e)continue;let J=j*i+ne;d.has(J)||B.push(J)}}),B.forEach(W=>d.add(W))}d.forEach(U=>{let B=U%i,W=U/i|0;s[W][B]===Qe.BASE_TOP||s[W][B]===Qe.BASE_BOTTOM||s[W][B]===Qe.CENTER||(t[W][B]=!0,s[W][B]=Qe.PATH,n[W][B]=1)});let y=Math.round(_-p*1.6),w=Math.round(_+p*1.6),O=Math.round(_-p),P=Math.round(_+p),L=1;for(let U=h-L;U<=h+L;U++)if(!(U<0||U>=e))for(let B=y;B<=w;B++)B<0||B>=i||(t[U][B]=!0,s[U][B]!==Qe.CENTER&&s[U][B]!==Qe.BASE_TOP&&s[U][B]!==Qe.BASE_BOTTOM&&(s[U][B]=Qe.PATH),n[U][B]=Math.max(n[U][B],1));function K(U,B,W,I){let D=Math.max(1,Math.min(U,B)),ee=Math.min(e-2,Math.max(U,B)),Q=Math.max(1,Math.min(W,I)),ne=Math.min(i-2,Math.max(W,I));for(let j=D;j<=ee;j++)for(let J=Q;J<=ne;J++)s[j][J]===Qe.BASE_TOP||s[j][J]===Qe.BASE_BOTTOM||s[j][J]===Qe.CENTER||(t[j][J]=!0,s[j][J]=Qe.PATH,n[j][J]=1)}let b=3,A=3;K(o,o+b-1,O,r-1),K(o,o+b-1,r+1,P),K(l-A+1,l,O,a-1),K(l-A+1,l,a+1,P);for(let U=-1;U<=2;U++)for(let B=-2;B<=2;B++){let W=r+B,I=o+U;W>=0&&W<i&&I>=0&&I<e&&(t[I][W]=!0,s[I][W]=Qe.BASE_TOP,n[I][W]=1)}for(let U=-2;U<=1;U++)for(let B=-2;B<=2;B++){let W=a+B,I=l+U;W>=0&&W<i&&I>=0&&I<e&&(t[I][W]=!0,s[I][W]=Qe.BASE_BOTTOM,n[I][W]=1)}for(let U=0;U<e;U++)for(let B=0;B<i;B++){if(t[U][B]||s[U][B]===Qe.BASE_TOP||s[U][B]===Qe.BASE_BOTTOM||s[U][B]===Qe.CENTER)continue;let W=Math.random();W<.35?(s[U][B]=Qe.TREE,n[U][B]=1+Math.floor(Math.random()*2)):W<.55?(s[U][B]=Qe.WATER,n[U][B]=0):(s[U][B]=Qe.ROCK,n[U][B]=1+Math.floor(Math.random()*2))}return{w:i,h:e,path:t,height:n,type:s,topBaseX:r,topBaseY:o,botBaseX:a,botBaseY:l}}function I0(i,e,t){let n=e===1?Qe.BASE_BOTTOM:Qe.BASE_TOP,s=[];for(let r=0;r<i.h;r++)for(let a=0;a<i.w;a++)i.type[r][a]===n&&(t&&t.has(r*i.w+a)||s.push({gx:a,gy:r}));return s}function L0(i){let e=[];for(let t=0;t<i.h;t++)for(let n=0;n<i.w;n++)i.type[t][n]===Qe.CENTER&&e.push({gx:n,gy:t});return e}function Nh(i,e){let t=L0(i);if(t.length===0)return e;let n=s=>Math.min(...t.map(r=>Math.abs(s.gx-r.gx)+Math.abs(s.gy-r.gy)));return[...e].sort((s,r)=>n(s)-n(r))}function mr(i,e,t){if(e<0||e>=i.w||t<0||t>=i.h)return!1;let n=i.type[t][e];return!(n===Qe.TREE||n===Qe.WATER||n===Qe.ROCK)}function D0(i,e,t,n){let s=[],r=i,a=e,o=t,l=n,c=Math.abs(o-r),h=Math.abs(l-a),d=r<o?1:-1,u=a<l?1:-1,m=c-h;for(;s.push({x:r,y:a}),!(r===o&&a===l);){let _=2*m;_>-h&&(m-=h,r+=d),_<c&&(m+=c,a+=u)}return s}function Hs(i,e,t,n,s){let r=D0(e,t,n,s);for(let a=1;a<r.length-1;a++){let o=r[a];if(!mr(i,o.x,o.y))return!1}return!0}function El(i,e,t,n,s,r){let a=(d,u)=>u*i.w+d,o=new Map;o.set(a(e,t),0);let l=[{x:e,y:t,d:0}],c=[[0,1],[0,-1],[1,0],[-1,0]],h=s!=null&&r!=null;for(;l.length;){let{x:d,y:u,d:m}=l.shift();if(!(m>=n))for(let[_,v]of c){let p=d+_,f=u+v;if(!mr(i,p,f))continue;if(h){let w=s.find(O=>O.hp>0&&O.x===p&&O.y===f);if(w&&w.player!==r.player)continue}let S=a(p,f);if(o.has(S))continue;let y=m+1;o.set(S,y),l.push({x:p,y:f,d:y})}}return o}function U0(i,e,t,n){let s=new Map;for(let r=0;r<i.h;r++)for(let a=0;a<i.w;a++){let o=Math.abs(a-e)+Math.abs(r-t);o>=1&&o<=n&&s.set(r*i.w+a,o)}return s}function pr(i,e,t,n,s,r,a){if(e===n&&t===s)return[{x:e,y:t}];let o=(u,m)=>m*i.w+u,l=new Map,c=[{x:e,y:t}];l.set(o(e,t),null);let h=[[0,1],[0,-1],[1,0],[-1,0]];function d(u,m){if(!mr(i,u,m))return!1;let _=r.find(v=>v.hp>0&&v.x===u&&v.y===m);return _?_.id===a.id||_.player===a.player:!0}for(;c.length;){let{x:u,y:m}=c.shift();if(u===n&&m===s){let _=[],v={x:n,y:s};for(;v;)_.unshift(v),v=l.get(o(v.x,v.y));return _}for(let[_,v]of h){let p=u+_,f=m+v,S=o(p,f);l.has(S)||d(p,f)&&(l.set(S,{x:u,y:m}),c.push({x:p,y:f}))}}return null}var N0={[Qe.PATH]:5929562,[Qe.GRASS]:2968109,[Qe.TREE]:1981726,[Qe.WATER]:1722986,[Qe.ROCK]:5921370,[Qe.BASE_TOP]:8014410,[Qe.BASE_BOTTOM]:4872826,[Qe.CENTER]:13940810};function Oh(i){return i.w*dt/2}function Fh(i){return i.h*dt/2}function O0(i){let e=new ni,t=Oh(i),n=Fh(i),s=new Un(dt*.98,Pn,dt*.98),r=new Nn({roughness:.88,metalness:.02});for(let a=0;a<i.h;a++)for(let o=0;o<i.w;o++){let l=i.type[a][o],c=i.height[a][o],h=N0[l],d=Pn+c*.35,u=d/2+Pn/2,m=r.clone();m.color.setHex(h);let _=new rt(s,m);_.position.set(o*dt-t+dt/2,d/2,a*dt-n+dt/2),_.castShadow=!0,_.receiveShadow=!0,_.userData={gx:o,gy:a,type:l},e.add(_);let v=o*dt-t+dt/2,p=a*dt-n+dt/2;if(l===Qe.TREE){let f=.5+Math.random()*.2,S=new rt(new Qi(.12,.14,f,8),new Nn({color:4007959,roughness:.95}));S.position.set(v,u+f/2,p),S.castShadow=!0,e.add(S);let y=new rt(new Fs(.45,.9,8),new Nn({color:2972205,roughness:.9}));y.position.set(v,u+f+.35,p),y.castShadow=!0,e.add(y)}else if(l===Qe.WATER){let f=new rt(new Cn(dt*.9,dt*.9),new Nn({color:2779802,roughness:.2,metalness:.3,transparent:!0,opacity:.92}));f.rotation.x=-Math.PI/2,f.position.set(v,u+.02,p),f.receiveShadow=!0,e.add(f)}else if(l===Qe.ROCK){let f=.25+Math.random()*.15,S=new rt(new va(f,0),new Nn({color:6974058,roughness:.9}));S.position.set(v+(Math.random()-.5)*.2,u+f-.2,p+(Math.random()-.5)*.2),S.rotation.set(Math.random(),Math.random(),Math.random()),S.castShadow=!0,e.add(S)}}return e}function F0(){let i=P0(),e=document.getElementById("canvas-wrap"),t=new ma;t.background=new vt(1711652),t.fog=new pa(1711652,30,90);let n=i.w*dt/2,s=i.h*dt/2,r=new Rn(50,e.clientWidth/e.clientHeight,.1,200),a=20,o=new F(12,38,16).normalize().multiplyScalar(a),l=new F,c=new F,h=new Qn(new F(0,1,0),0),d=new F,u=new F,m=!1,_=!1,v=!1,p=null,f=5,S=.004,y=-Math.PI*.4,w=Math.PI*.4,O=new F,P={x:0,y:0},L=1,K=40,b=.08,A=.15,U=null,B=new Ea(16777215,.45);t.add(B);let W=new ba(16774630,1.1);W.position.set(30,50,20),W.castShadow=!0,W.shadow.mapSize.width=2048,W.shadow.mapSize.height=2048,W.shadow.camera.near=1,W.shadow.camera.far=120,W.shadow.camera.left=-50,W.shadow.camera.right=50,W.shadow.camera.top=50,W.shadow.camera.bottom=-50,t.add(W);let I=O0(i);t.add(I);let D=[],ee=1,Q=new Map,ne=Oh(i),j=Fh(i);function J(x,g){let C=(Pn+i.height[g][x]*.35)/2+Pn/2;return new F(x*dt-ne+dt/2,C,g*dt-j+dt/2)}function fe(x,g,R){let C=La[g]||La.knight,z=C.primary,k=C.secondary,G=Si[g]&&Si[g].gender||"male",H=R??4006676,se=new Nn({color:z,metalness:.25,roughness:.5}),ie=new Nn({color:k,metalness:.2,roughness:.55}),ve=new Nn({color:z,metalness:.25,roughness:.5}),Ne=new Nn({color:C.skin!=null?C.skin:15250592,metalness:.1,roughness:.7}),ae=new ni,me=.28,Xe=.08,Je=.08,$t=new rt(new Un(Xe,me,Je),ie);$t.position.set(-.06,me/2,0),$t.castShadow=!0,ae.add($t);let Lt=new rt(new Un(Xe,me,Je),ie);Lt.position.set(.06,me/2,0),Lt.castShadow=!0,ae.add(Lt);let Ot=.28,Ft=.2,dn=.12,Mn=new rt(new Un(Ft,Ot,dn),se);Mn.position.set(0,me+Ot/2,0),Mn.castShadow=!0,ae.add(Mn);let fn=.06,At=.22,It=.06,ft=new rt(new Un(fn,At,It),ve);ft.position.set(-(Ft/2+fn/2),me+Ot-.08,0),ft.castShadow=!0,ae.add(ft);let pn=new rt(new Un(fn,At,It),ve);if(pn.position.set(Ft/2+fn/2,me+Ot-.08,0),pn.castShadow=!0,ae.add(pn),C.cape!=null){let re=Ft*1.35,ge=me+Ot*.15,be=new Cn(re,ge),$e=new Nn({color:C.cape,metalness:.15,roughness:.8,side:Kt}),Et=new rt(be,$e);Et.position.set(0,me+ge/2-.02,-dn/2-.02),Et.rotation.y=Math.PI,Et.castShadow=!0,ae.add(Et)}let Ct=.1,Gt=new rt(new Mi(Ct,12,10),Ne);Gt.position.set(0,me+Ot+Ct,0),Gt.castShadow=!0,ae.add(Gt);let en=new qt({color:1710638}),Zn=new rt(new Mi(.018,8,6),en);Zn.position.set(-.032,.028,Ct*.92),Gt.add(Zn);let ce=new rt(new Mi(.018,8,6),en);ce.position.set(.032,.028,Ct*.92),Gt.add(ce);let oe=new qt({color:2957087}),Ce=new rt(new Un(.045,.012,.008),oe);Ce.position.set(0,-.028,Ct*.92),Gt.add(Ce);let le=new Nn({color:H,metalness:.05,roughness:.85});if(G==="female"){let re=new rt(new Mi(Ct*.85,10,8,0,Math.PI*2,0,Math.PI*.45),le);re.position.set(0,Ct*.35,-Ct*.2),re.castShadow=!0,Gt.add(re);let ge=new rt(new Un(Ct*1.1,Ct*2.2,Ct*.5),le);ge.position.set(0,-Ct*.6,-Ct*.95),ge.castShadow=!0,Gt.add(ge)}else{let re=new rt(new Mi(Ct*.82,10,8,0,Math.PI*2,0,Math.PI*.35),le);re.position.set(0,Ct*.5,-Ct*.15),re.castShadow=!0,Gt.add(re)}return ae.userData.leftLeg=$t,ae.userData.rightLeg=Lt,ae.userData.leftArm=ft,ae.userData.rightArm=pn,ae}function Ie(x,g){let R=x.userData;if(!R.leftLeg)return;let C=g*Math.PI*2,z=.4,k=.35;R.leftLeg.rotation.x=Math.sin(C)*z,R.rightLeg.rotation.x=Math.sin(C+Math.PI)*z,R.leftArm.rotation.y=Math.sin(C+Math.PI)*k,R.rightArm.rotation.y=Math.sin(C)*k}function te(x){let g=x.userData;g.leftLeg&&(g.leftLeg.rotation.x=0,g.rightLeg.rotation.x=0,g.leftArm.rotation.y=0,g.rightArm.rotation.y=0)}function ue(x){let g=fe(x.player,x.class,x.hairColor);g.position.copy(J(x.x,x.y)),g.castShadow=!0,g.userData.unitId=x.id;let R=.28,C=.28,z=.12,k=.18,G=.04,H=new Cn(k,G),se=new qt({color:6037528,side:Kt,depthTest:!0,depthWrite:!1}),ie=new rt(H,se);ie.position.set(0,R+C/2,z/2+.02),ie.rotation.x=-Math.PI/2,ie.rotation.z=Math.PI/4,ie.visible=x.maxHp>0&&x.hp<x.maxHp&&x.hp>0,g.add(ie),g.userData.slashMark=ie,t.add(g),Q.set(x.id,g),Ve(g,x.maxHp>0&&x.hp/x.maxHp<.35)}function Pe(x){let g=Q.get(x.id);!g||!g.userData.slashMark||(g.userData.slashMark.visible=x.maxHp>0&&x.hp<x.maxHp&&x.hp>0)}let qe=.35;function Ve(x,g){if(x)if(g){x.rotation.x=.35,x.scale.setScalar(.96);let R=x.userData;R&&R.leftArm&&R.rightArm&&(R.leftArm.rotation.y=.2,R.rightArm.rotation.y=.2),x.traverse(C=>{C.isMesh&&C.material&&C.material.color&&(C.userData.originalColor||(C.userData.originalColor=C.material.color.clone()),C.material.color.copy(C.userData.originalColor).multiplyScalar(.82))})}else{x.rotation.x=0,x.scale.setScalar(1);let R=x.userData;R&&R.leftArm&&R.rightArm&&(R.leftArm.rotation.y=0,R.rightArm.rotation.y=0),x.traverse(C=>{C.isMesh&&C.material&&C.userData.originalColor&&C.material.color.copy(C.userData.originalColor)})}}function nt(x){if(x.level>=3)return;let g=x.maxHp>0?x.hp/x.maxHp:1;x.level+=1;let R=z=>Math.max(1,Math.ceil(z*1.1)),C=z=>Math.max(1,Math.ceil(z*1.1));x.maxHp=R(x.maxHp),x.maxMp=R(x.maxMp),x.hp=Math.max(1,Math.min(x.maxHp,Math.ceil(g*x.maxHp))),x.mp=Math.max(1,Math.min(x.maxMp,Math.ceil(g*x.maxMp))),x.str=C(x.str),x.agi=C(x.agi),x.vit=C(x.vit),x.dex=C(x.dex),x.luk=C(x.luk),x.int=C(x.int),x.range>2&&(x.range=C(x.range)),console.log("[LEVEL UP]",`${x.name} (${x.class}, P${x.player})`,`\u2192 Lv.${x.level}`,`| HP ${x.hp}/${x.maxHp} MP ${x.mp}/${x.maxMp} STR ${x.str} VIT ${x.vit}`),ct(x)}function ct(x){let g=Q.get(x.id),R=x.level===3?"levelup level3":x.level===2?"levelup level2":"levelup";if(Jh(x,R),!g)return;let C=performance.now();function z(k){let G=k-C,H=Math.min(1,G/ut),se=H<.5?1+.35*(H/.5):1+.35*(1-(H-.5)/.5);g.scale.setScalar(se),H<1?requestAnimationFrame(z):g.scale.setScalar(1)}requestAnimationFrame(z)}let Ke=430,Mt=320,q=280,hn=.45,Ye=160,et=280,ke=350,Bt=500,ut=600,T=!1,M=new F,Y=new F,pe=new F,de=new F;function _e(x=!1){let g=null;if(Ee==="playing"&&Te.length>0){let k=Te[we];g=D.find(G=>G.id===k&&G.hp>0)}if(g||(g=D.find(k=>k.player===ye&&k.hp>0)),!g)return;let R=r.position.distanceTo(l);if(R<.1&&(R=a),c.copy(r.position).sub(l).normalize(),c.lengthSq()<.01&&c.copy(o).normalize(),pe.copy(J(g.x,g.y)),de.copy(pe).add(c.clone().multiplyScalar(R)),x||T){l.copy(pe),r.position.copy(de),r.lookAt(l);return}T=!0,M.copy(l),Y.copy(r.position);let C=performance.now();function z(k){let G=Math.min(1,(k-C)/Ke),H=G*(2-G);l.lerpVectors(M,pe,H),r.position.lerpVectors(Y,de,H),r.lookAt(l),G<1?requestAnimationFrame(z):T=!1}requestAnimationFrame(z)}let Oe=0,ye=1,Ee="draft",ze="pvp",tt=new Set(Ia),he=0,at=null,it=new Set,Te=[],we=0,Se=null,He=new Map,Tt=null;function Vt(x){if(!x||x.hp<=0)return;Tt=x.id;let g=document.getElementById("unit-preview-card"),R=document.getElementById("unit-preview-image"),C=document.getElementById("unit-preview-name"),z=document.getElementById("unit-preview-meta"),k=document.getElementById("unit-preview-stats");g.classList.remove("player-1","player-2"),g.classList.add(x.player===1?"player-1":"player-2"),g.classList.toggle("level-2",x.level>=2&&x.level<3),g.classList.toggle("level-3",x.level>=3),R.src=fr[x.class]||"",R.alt=x.name,C.textContent=x.name,z.textContent=`Lv.${x.level} ${x.class} \u2014 Player ${x.player}`,k.innerHTML=[["HP",`${x.hp}/${x.maxHp}`],["MP",`${x.mp}/${x.maxMp}`],["STR",Be(x,"str")],["AGI",Be(x,"agi")],["VIT",Be(x,"vit")],["DEX",Be(x,"dex")],["LUK",Be(x,"luk")],["INT",Be(x,"int")]].map(([H,se])=>`<span class="stat-label">${H}</span><span class="stat-val${H==="HP"?" stat-val-hp":""}">${se}</span>`).join("");let G=x.maxHp>0&&x.hp/x.maxHp<.3;g.classList.toggle("low-hp",G),g.style.display="block"}function st(){Tt=null;let x=document.getElementById("unit-preview-card");x.classList.remove("low-hp","level-2","level-3"),x.style.display="none"}let xe=!1,N=!1,Ae=!1,Me=null,De=!1,Fe=!1,St=!1,mt=[],Rt=new ni;t.add(Rt);let Ut=[],wt=new ni;t.add(wt);let sn=[],kn=dt,gr=.02,Ua=3368703,ss=13382451;function _r(x,g){let R=x/2,C=R-g,z=new lr;z.moveTo(-R,-R),z.lineTo(R,-R),z.lineTo(R,R),z.lineTo(-R,R),z.lineTo(-R,-R);let k=new Os;return k.moveTo(-C,-C),k.lineTo(C,-C),k.lineTo(C,C),k.lineTo(-C,C),k.lineTo(-C,-C),z.holes.push(k),new Ma(z)}let rs=_r(kn,gr);function ai(x=null){for(sn.forEach(g=>g.dispose()),sn.length=0;wt.children.length;){let g=wt.children[0];wt.remove(g)}D.filter(g=>g.hp>0&&g.id!==x).forEach(g=>{let R=g.x,C=g.y,k=(Pn+i.height[C][R]*.35)/2+Pn/2,G=R*dt-ne+dt/2,H=C*dt-j+dt/2,se=k+.02,ie=g.player===1?Ua:ss,ve=new qt({color:ie,side:Kt}),Ne=new rt(rs,ve);Ne.rotation.x=-Math.PI/2,Ne.position.set(G,se,H),wt.add(Ne),sn.push(ve)})}let xr=1.15,On=(()=>{let x=new rt(new Fs(.1,.25,8),new qt({color:16768324}));return x.rotation.x=Math.PI,x.visible=!1,t.add(x),x})();function Vs(){if(Ee!=="playing"||Te.length===0||St){On.visible=!1,On.removeFromParent(),t.add(On);return}let x=Te[we],g=D.find(C=>C.id===x);if(!g||g.hp<=0){On.visible=!1,On.removeFromParent(),t.add(On);return}let R=Q.get(x);if(!R){On.visible=!1;return}On.removeFromParent(),R.add(On),On.position.set(0,xr,0),On.visible=!0}function Tl(x){let g=[[0,1],[0,-1],[1,0],[-1,0]],R=[];for(let[C,z]of g){let k=x.x+C,G=x.y+z;!mr(i,k,G)||D.some(se=>se.id!==x.id&&se.x===k&&se.y===G&&se.hp>0)||R.push(Math.atan2(C,z))}return R}function E(x){if(mt.length===0)return x;if(mt.length===1)return mt[0];let g=mt[0],R=Math.abs(V(x-g));for(let C=1;C<mt.length;C++){let z=Math.abs(V(x-mt[C]));z<R&&(R=z,g=mt[C])}return g}function V(x){for(;x>Math.PI;)x-=2*Math.PI;for(;x<-Math.PI;)x+=2*Math.PI;return x}let Z=1.2,X=(()=>{let x=new rt(new Fs(.12,.35,8),new qt({color:4500223}));return x.rotation.x=-Math.PI/2,x.visible=!1,t.add(x),x})();function $(x,g){if(!St||Te.length===0||mt.length===0)return;let R=Te[we],C=D.find(Ne=>Ne.id===R),z=Q.get(R);if(!C||!z)return;vr(x,g),Ti.setFromCamera(wi,r);let k=Ti.intersectObjects(I.children,!0);if(k.length===0)return;let G=J(C.x,C.y),H=k[0].point,se=H.x-G.x,ie=H.z-G.z;if(se*se+ie*ie<1e-6)return;let ve=Math.atan2(se,ie);z.rotation.y=E(ve)}function Le(){if(Te.length===0)return;let x=Te[we],g=D.find(z=>z.id===x),R=Q.get(x);if(!g||!R)return;mt=[[0,1],[0,-1],[1,0],[-1,0]].map(([z,k])=>Math.atan2(z,k)),X.removeFromParent(),R.add(X),X.position.set(0,Z,0),X.rotation.x=-Math.PI/2,X.rotation.y=0,X.rotation.z=Math.PI,X.visible=!0,R.rotation.y=mt[0]}function Ge(){X.visible=!1,X.removeFromParent(),t.add(X)}let Ze=(()=>{let x=Pa,g=[1];for(let R=0;R<Math.floor((x-1)/2);R++)g.push(2,2,1,1);return x%2===1?g.push(2):(g.push(2,2),g.push(1)),g})();function We(){return Ze[he]}function ht(){let x=We(),g=0;for(let R=0;R<he;R++)Ze[R]===x&&g++;return g+1}function je(){Ee="draft",he=0,tt=new Set(Ia),at=null,it.clear(),an(),zt(),document.getElementById("turn-menu").style.display="none",document.getElementById("draft-panel").style.display="flex"}function ot(){for(Ee="playing",Oe=0,Te=D.slice().sort((R,C)=>C.agi!==R.agi?C.agi-R.agi:C.dex-R.dex).map(R=>R.id),we=0;we<Te.length&&D.find(R=>R.id===Te[we]).hp<=0;)we++;we>=Te.length&&(we=0);let x=D.find(R=>R.id===Te[we]);ye=x?x.player:1,De=!1,Fe=!1,Se=Te[we],document.getElementById("draft-panel").style.display="none",document.getElementById("turn-menu").style.display="flex";let g=document.getElementById("draft-placement-card");g&&(g.style.display="none",g.innerHTML=""),an(),ai(),Nt(),Vs(),_e(!0)}function zt(){let x=document.getElementById("draft-panel"),g=document.getElementById("draft-title"),R=document.getElementById("draft-classes"),C=document.getElementById("draft-message"),z=document.getElementById("turn-player"),k=document.getElementById("draft-placement-card");if(at){x.style.display="none",z.textContent=`Draft: Player ${We()} \u2014 place ${Si[at].name}`;let H=We();k.style.display="flex",k.classList.remove("player-1","player-2"),k.classList.add("player-"+H),k.style.left=H===1?"24px":"",k.style.right=H===2?"24px":"";let se=[...D.filter(Ne=>Ne.player===H).map(Ne=>Ne.class),at],ie=(Ne,ae)=>{let me=Si[Ne];return`
        <div class="draft-class-card${ae?" draft-class-card-current":""}">
          <img class="draft-class-card-image" src="${fr[Ne]||""}" alt="${me.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="draft-class-card-body">
            <div class="draft-class-card-name">${me.name}</div>
            <div class="draft-class-card-stats">
              <span class="draft-stat-label">HP</span><span class="draft-stat-value">${me.hp}</span>
              <span class="draft-stat-label">MP</span><span class="draft-stat-value">${me.mp}</span>
              <span class="draft-stat-label">STR</span><span class="draft-stat-value">${me.str}</span>
              <span class="draft-stat-label">AGI</span><span class="draft-stat-value">${me.agi}</span>
              <span class="draft-stat-label">VIT</span><span class="draft-stat-value">${me.vit}</span>
              <span class="draft-stat-label">DEX</span><span class="draft-stat-value">${me.dex}</span>
              <span class="draft-stat-label">LUK</span><span class="draft-stat-value">${me.luk}</span>
              <span class="draft-stat-label">INT</span><span class="draft-stat-value">${me.int}</span>
              <span class="draft-stat-label">Range</span><span class="draft-stat-value">${me.range}</span>
            </div>
          </div>
        </div>
      `},ve=3;if(se.length>ve){k.classList.add("draft-placement-cols");let Ne=[];for(let me=0;me<se.length;me+=ve)Ne.push(se.slice(me,me+ve));let ae=se.length-1;k.innerHTML=Ne.map((me,Xe)=>{let Je=Xe===Ne.length-1,$t=me.map((Lt,Ot)=>{let dn=Xe*ve+Ot===ae;return ie(Lt,dn)}).join("");return`<div class="draft-placement-col${Je?" draft-placement-col-current":""}">${$t}</div>`}).join("")}else k.classList.remove("draft-placement-cols"),k.innerHTML=se.map((Ne,ae)=>{let me=ae===se.length-1;return ie(Ne,me)}).join("");ze==="pvcpu"&&We()===2&&setTimeout(un,500),ze==="cvcpu"&&setTimeout(un,500);return}k.style.display="none",k.innerHTML="",Ee==="draft"&&(x.style.display="flex");let G=We();g.textContent=`Player ${G}: Pick a class (${ht()}/${Pa})`,C.textContent="",R.innerHTML="",z.textContent=`Draft: Player ${G} \u2014 pick a class`,Ia.forEach(H=>{let se=tt.has(H),ie=Si[H],ve=document.createElement("button");ve.type="button",ve.className="draft-class-card"+(se?"":" draft-class-card-selected"),ve.disabled=!se,ve.innerHTML=`
          <img class="draft-class-card-image" src="${fr[H]||""}" alt="${ie.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="draft-class-card-body">
            <div class="draft-class-card-name">${ie.name}</div>
            <div class="draft-class-card-stats">
              <span class="draft-stat-label">HP</span><span class="draft-stat-value">${ie.hp}</span>
              <span class="draft-stat-label">MP</span><span class="draft-stat-value">${ie.mp}</span>
              <span class="draft-stat-label">STR</span><span class="draft-stat-value">${ie.str}</span>
              <span class="draft-stat-label">AGI</span><span class="draft-stat-value">${ie.agi}</span>
              <span class="draft-stat-label">VIT</span><span class="draft-stat-value">${ie.vit}</span>
              <span class="draft-stat-label">DEX</span><span class="draft-stat-value">${ie.dex}</span>
              <span class="draft-stat-label">LUK</span><span class="draft-stat-value">${ie.luk}</span>
              <span class="draft-stat-label">INT</span><span class="draft-stat-value">${ie.int}</span>
              <span class="draft-stat-label">Range</span><span class="draft-stat-value">${ie.range}</span>
            </div>
          </div>
        `,se&&ve.addEventListener("click",()=>yn(H)),R.appendChild(ve)}),ze==="pvcpu"&&We()===2&&setTimeout(un,500),ze==="cvcpu"&&setTimeout(un,500)}function yn(x){if(!tt.has(x)||at)return;at=x;let g=We(),R=new Set(D.map(k=>k.y*i.w+k.x)),C=I0(i,g,R),z=Nh(i,C);it=new Set(z.map(k=>k.gy*i.w+k.gx)),Vh(z),zt()}function Yt(x,g){if(!at)return;let R=We(),C=g*i.w+x;if(!it.has(C))return;let z=Si[at],k={id:ee++,player:R,x,y:g,level:1,name:z.name,class:at,hairColor:(La[at]||La.knight).hair,hp:z.hp,maxHp:z.maxHp,mp:z.mp,maxMp:z.maxMp,str:z.str,agi:z.agi,vit:z.vit,dex:z.dex,luk:z.luk,int:z.int,range:z.range};D.push(k),ue(k);let G=Q.get(k.id);G&&(G.rotation.y=k.player===1?Math.PI:0),tt.delete(at),at=null,it.clear(),an();let H=document.getElementById("draft-placement-card");if(H&&(H.style.display="none",H.innerHTML=""),he++,he>=2*Pa){ot();return}let se=We(),ie=ht(),ve=document.getElementById("draft-panel"),Ne=document.getElementById("draft-title"),ae=document.getElementById("draft-message"),me=document.getElementById("draft-classes"),Xe=document.getElementById("turn-player");ve&&Ne&&me&&Xe&&(ve.style.display="flex",Ne.textContent=`Player ${se}: Pick a class (${ie}/${Pa})`,ae&&(ae.textContent="Get ready\u2026"),me.innerHTML="",Xe.textContent=`Draft: Player ${se} \u2014 pick a class`),setTimeout(zt,1500)}function Nt(){Ee==="playing"&&D.forEach(ae=>{if(ae.hp<=0)return;let me=Q.get(ae.id);me&&Ve(me,ae.maxHp>0&&ae.hp/ae.maxHp<qe)});let x=document.getElementById("turn-player"),g=document.getElementById("menu-label"),R=document.getElementById("turn-menu"),C=document.getElementById("unit-info"),z=document.getElementById("unit-name"),k=document.getElementById("unit-level-class"),G=document.getElementById("unit-stats"),H=document.getElementById("unit-class-image");if(R.classList.remove("player-1","player-2"),R.classList.add(ye===1?"player-1":"player-2"),R.classList.toggle("level-2",!1),R.classList.toggle("level-3",!1),Ee==="playing"&&Te.length>0){let ae=Te[we];D.find(Xe=>Xe.id===ae&&Xe.hp>0)&&(Se==null||!D.find(Xe=>Xe.id===Se&&Xe.hp>0))&&(Se=ae)}if(Se!=null){let ae=D.find(me=>me.id===Se);if(ae&&ae.hp>0){C.classList.remove("no-unit");let me=ae.maxHp>0&&ae.hp/ae.maxHp<.25;R.classList.toggle("low-hp",me),R.classList.toggle("level-2",ae.level>=2&&ae.level<3),R.classList.toggle("level-3",ae.level>=3),z.textContent=ae.name,k.textContent=`Lv.${ae.level} ${ae.class}`,H.src=fr[ae.class]||"",H.alt=ae.name,G.innerHTML=[["HP",`${ae.hp}/${ae.maxHp}`],["MP",`${ae.mp}/${ae.maxMp}`],["STR",Be(ae,"str")],["AGI",Be(ae,"agi")],["VIT",Be(ae,"vit")],["DEX",Be(ae,"dex")],["LUK",Be(ae,"luk")],["INT",Be(ae,"int")]].map(([Xe,Je])=>`<span>${Xe}</span><span class="stat-val${Xe==="HP"?" stat-val-hp":""}">${Je}</span>`).join("")}else R.classList.remove("low-hp","level-2","level-3"),C.classList.add("no-unit"),z.textContent="\u2014 Select a unit \u2014",k.textContent="",G.textContent="",H.src="",H.alt=""}else R.classList.remove("low-hp","level-2","level-3"),C.classList.add("no-unit"),z.textContent="\u2014 Select a unit \u2014",k.textContent="",G.textContent="",H.src="",H.alt="";if(Se!=null)x.textContent=`Player ${ye} \u2014 Unit ${z.innerHTML} active`;else{let ae=Te.length?D.find(me=>me.id===Te[we]):null;x.textContent=ae?`${ae.name} (Player ${ye})`:`Player ${ye}`}g.textContent=`Player ${ye}`;let se=document.getElementById("btn-attack"),ie=document.getElementById("btn-skill"),ve=document.getElementById("btn-spell"),Ne=document.getElementById("btn-end");if(ze==="cvcpu"&&Ee==="playing")se.disabled=!0,ie.disabled=!0,ve.disabled=!0,Ne&&(Ne.disabled=!0),x.textContent=`Player ${ye} (CPU)`;else if(St)se.disabled=!0,ie.disabled=!0,ve.disabled=!0,x.textContent="Click on map to choose facing direction";else if(Ee==="playing"){se.disabled=Fe;let ae=Te.length?Te[we]:null,me=ae?D.find($t=>$t.id===ae&&$t.hp>0):null,Xe=ze!=="cvcpu"&&(ze!=="pvcpu"||ye===1),Je=Xe&&me&&!Fe?yr(me):[];ie.disabled=Fe||!Xe||Je.length===0,ve.disabled=!1,Ne&&(Ne.disabled=!1)}if(Ee==="playing"){let ae=Math.min(Oe+1,is);x.textContent=(x.textContent||"")+` \u2014 Turn ${ae}/${is}`;let me=document.getElementById("turns-left"),Xe=document.getElementById("turns-left-value");if(me&&Xe){me.style.display="";let Je=Math.max(0,is-Oe);Xe.textContent=String(Je),me.classList.toggle("turns-left-low",Je<=10)}}else{let ae=document.getElementById("turns-left");ae&&(ae.style.display="none")}Ee==="playing"&&Yn(ye)&&!xe&&setTimeout(Qt,700)}function xt(){st(),N=!1,Ae=!1,Me=null,St=!1,mt=[],Ge(),an();let x=Te.length;if(x===0)return;let g=Te[we],R=D.find(G=>G.id===g);if(R&&R.tempDebuff&&R.tempDebuff.duration--,R&&R.tempDebuff&&R.tempDebuff.duration<=0&&(R.tempDebuff=void 0),R&&R.tempBuff&&R.tempBuff.duration--,R&&R.tempBuff&&R.tempBuff.duration<=0&&(R.tempBuff=void 0),R&&R.hp>0){let G=Math.ceil(Be(R,"int")*.15);R.mp=Math.min(R.maxMp,R.mp+G)}if(R&&R.hp>0){let G=R.x,H=R.y;i.type[H][G]===Qe.CENTER&&R.level===1&&nt(R);let se=R.player===1?Qe.BASE_TOP:Qe.BASE_BOTTOM;i.type[H][G]===se&&R.level===2&&nt(R)}if(Oe++,Oe>=is){jh();return}let C=(we+1)%x,z=0;for(;z<x;){let G=Te[C],H=D.find(se=>se.id===G);if(H&&H.hp>0)break;C=(C+1)%x,z++}we=C;let k=D.find(G=>G.id===Te[we]);ye=k?k.player:1,De=!1,Fe=!1,Se=Te[we],Nt(),Vs(),_e()}document.getElementById("btn-attack").addEventListener("click",()=>{if(xe||Fe||Ee!=="playing"||Te.length===0)return;st();let x=Te[we],g=D.find(z=>z.id===x);if(!g||g.hp<=0)return;let R=g.range!=null?g.range:1;Se=x,N=!0;let C=U0(i,g.x,g.y,R);He=new Map,C.forEach((z,k)=>{let G=k%i.w,H=Math.floor(k/i.w);Hs(i,g.x,g.y,G,H)&&He.set(k,z)}),Gh(He),Nt()}),document.getElementById("btn-skill").addEventListener("click",x=>{if(x.preventDefault(),x.stopPropagation(),xe||Fe)return;let g=Te[we],R=g?D.find(H=>H.id===g&&H.hp>0):null;if(!R||R.player!==ye)return;let C=document.getElementById("skill-list-overlay"),z=document.getElementById("btn-skill");if(!z)return;if(C&&C.style.display==="block"){C.style.display="none";return}let k=yr(R),G=z.getBoundingClientRect();C||(C=document.createElement("div"),C.id="skill-list-overlay",C.className="skill-list-overlay",C.setAttribute("aria-hidden","true"),document.body.appendChild(C)),C.style.left=`${G.left}px`,C.style.top=`${G.top-4}px`,C.style.transform="translateY(-100%)",C.style.right="auto",C.style.bottom="auto",C.style.display="none",k.length===0?C.innerHTML='<div class="skill-option" style="cursor:default;color:#8b949e;">No skills available</div>':(C.innerHTML=k.map((H,se)=>`<button type="button" class="skill-option" data-skill-index="${se}" ${R.mp<H.cost?"disabled":""}>
          <span class="skill-name">${H.name}</span> <span class="skill-meta">${H.cost} MP \xB7 Lv.${H.level}</span><br/>
          <span class="skill-meta">${H.description}</span>
        </button>`).join(""),C.querySelectorAll(".skill-option").forEach((H,se)=>{H.addEventListener("click",ie=>{ie.preventDefault(),ie.stopPropagation();let ve=k[se];Me=ve,C.style.display="none",C.setAttribute("aria-hidden","true"),Ae=!0,N=!1,Hh(R,ve),Nt()})})),requestAnimationFrame(()=>{C.style.display="block",C.style.visibility="visible",C.setAttribute("aria-hidden","false")})}),document.addEventListener("click",x=>{let g=document.getElementById("skill-list-overlay"),R=document.getElementById("btn-skill"),C=document.querySelector(".skill-wrap");!g||g.style.display!=="block"||C&&C.contains(x.target)||g.contains(x.target)||(g.style.display="none",g.setAttribute("aria-hidden","true"))}),document.getElementById("btn-spell").addEventListener("click",()=>{}),document.getElementById("btn-end").addEventListener("click",()=>{if(xe||St||Ee!=="playing"||Te.length===0)return;let x=Te[we],g=D.find(C=>C.id===x);if(!g||g.hp<=0)return;St=!0,Se=null,N=!1,He=new Map,an(),Le(),Vs();let R=document.getElementById("turn-player");R.textContent="Click on map to choose facing direction",Nt()}),l.set(0,8,0),r.position.copy(l).add(o),r.lookAt(l);let lt=document.getElementById("mode-select-overlay"),as=document.getElementById("mode-pvp"),kt=document.getElementById("mode-pvcpu"),oi=document.getElementById("mode-cvcpu"),qn=new Audio;qn.loop=!0,qn.volume=.3,qn.preload="auto";let hi=window.location.href.replace(/[^/]*$/,""),os=typeof window.TACTICS_BGM_URL<"u"?window.TACTICS_BGM_URL:hi+(hi.includes("/src/")?"../assets/music/tavern.mp3":"assets/music/tavern.mp3");qn.src=os,qn.addEventListener("error",()=>{let x=hi+"assets/music/tavern.mp3";x!==os&&(qn.src=x)});function jt(){qn.paused&&qn.play().catch(()=>{})}lt&&as&&kt?(as.addEventListener("click",()=>{jt(),ze="pvp",lt.classList.add("hidden"),je()}),kt.addEventListener("click",()=>{jt(),ze="pvcpu",lt.classList.add("hidden"),je()}),oi&&oi.addEventListener("click",()=>{jt(),ze="cvcpu",lt.classList.add("hidden"),je()})):je();function Yn(x){return ze==="pvcpu"&&x===2||ze==="cvcpu"}function Gs(){let x=Ia.filter(z=>tt.has(z));if(x.length===0)return null;let g=["hp","maxHp","mp","str","agi","vit","dex","luk","int"];function R(z){let k=Si[z];if(!k)return 1/0;let G=g.map(se=>k[se]??0),H=G.reduce((se,ie)=>se+ie,0)/G.length;return G.reduce((se,ie)=>se+(ie-H)**2,0)/G.length}return[...x].sort((z,k)=>{let G=Si[z]?.hp??0,H=Si[k]?.hp??0;return H!==G?H-G:R(z)-R(k)})[0]??null}function un(){if(Ee!=="draft"||!Yn(We()))return;if(!at){let R=Gs();R&&yn(R),setTimeout(un,500);return}let x=Array.from(it).map(R=>({gx:R%i.w,gy:Math.floor(R/i.w)})),g=Nh(i,x);if(g.length>0){let{gx:R,gy:C}=g[0];Yt(R,C)}}function ls(){let x=[];for(let g=0;g<i.h;g++)for(let R=0;R<i.w;R++)i.type[g][R]===Qe.CENTER&&x.push({gx:R,gy:g});return x}function Na(x){let g=[],R=x===1?Qe.BASE_TOP:Qe.BASE_BOTTOM;for(let C=0;C<i.h;C++)for(let z=0;z<i.w;z++)i.type[C][z]===R&&g.push({gx:z,gy:C});return g}function Tn(x,g,R,C){return Math.abs(x-R)+Math.abs(g-C)}function Bh(x){let g=x.range!=null?x.range:1,R=[];for(let C of D){if(C.hp<=0||C.player===x.player)continue;let z=Tn(x.x,x.y,C.x,C.y);z<=g&&z>0&&Hs(i,x.x,x.y,C.x,C.y)&&R.push({target:C,dist:z})}return R}function zh(x){let g=D.filter(R=>R.hp>0&&R.player===x.player&&R.id!==x.id);for(let R of g){let C=D.filter(z=>z.hp>0&&z.player!==x.player);for(let z of C){let k=z.range!=null?z.range:1,G=Tn(z.x,z.y,R.x,R.y);if(G<=k&&G>0&&Hs(i,z.x,z.y,R.x,R.y))return!0}}return!1}function rn(x,g,R,C){let z=x.x,k=x.y,G=pr(i,x.x,x.y,g,R,D,x);if(!G||G.length<=1){C&&C();return}Se=null,an(),xe=!0,ai(x.id);let H=Q.get(x.id),se=1;function ie(){if(se>=G.length){x.x=G[G.length-1].x,x.y=G[G.length-1].y,xe=!1,te(H),ai(),He=new Map,De=!0,console.log("[MOVE]",`${x.name} (${x.class}, P${x.player})`,`${z},${k} \u2192 ${x.x},${x.y}`,`(Lv.${x.level})`),C&&C();return}let ve=G[se-1],Ne=G[se],ae=J(ve.x,ve.y).clone(),me=J(Ne.x,Ne.y).clone(),Xe=me.x-ae.x,Je=me.z-ae.z;Xe*Xe+Je*Je>1e-6&&(H.rotation.y=Math.atan2(Xe,Je));let $t=performance.now();function Lt(Ot){let Ft=Math.min(1,(Ot-$t)/Mt),dn=Ft*(2-Ft);H.position.lerpVectors(ae,me,dn),Ie(H,Ft),Ft<1?requestAnimationFrame(Lt):(se++,ie())}requestAnimationFrame(Lt)}ie()}function Oa(x,g){let R=Be(g,"agi")*.7+Be(g,"luk")*.3,z=Math.random()*Math.max(.001,R)<=Be(x,"dex"),k=0;if(z){let At=Be(x,"str")*.7+Be(x,"dex")*.1+Be(x,"int")*.07-(Be(g,"vit")*.3+Be(g,"luk")*.1);k=Math.max(1,Math.floor(At))}Fe=!0,Se=null,N=!1,an(),console.log("[ATTACK]",`${x.name} (${x.class}, P${x.player})`,"\u2192",`${g.name} (${g.class}, P${g.player})`,z?`${k} dmg`:"MISS",`| ${g.name} HP ${g.hp} \u2192 ${Math.max(0,g.hp-k)}/${g.maxHp}`);let G=Q.get(x.id);if(!G||!G.userData.rightArm){z?(g.hp=Math.max(0,g.hp-k),$n(g.x,g.y,String(k),!1),Pe(g),g.hp<=0&&vn(g)):$n(g.x,g.y,"MISS",!0),setTimeout(De?()=>xt():()=>Nt(),400);return}let H=J(x.x,x.y).clone(),se=J(g.x,g.y).clone(),ie=H.clone().lerp(se,.35),ve=se.x-H.x,Ne=se.z-H.z;if(ve*ve+Ne*Ne>1e-6&&(G.rotation.y=Math.atan2(ve,Ne)),(x.range!=null?x.range:1)>2){let ge=function(be){let $e=be-re,Et=Math.min(1,$e/et);if(ft.position.lerpVectors(Ce,le,Et),!Zn&&Et>=1&&(Zn=!0,t.remove(ft),At.dispose(),It.dispose(),z?(g.hp=Math.max(0,g.hp-k),$n(g.x,g.y,String(k),!1),g.hp<=0&&(oe=!0),Q.get(g.id)?ce=be:oe&&(vn(g),oe=!1),Pe(g)):$n(g.x,g.y,"MISS",!0)),ce!=null&&z){let yt=Q.get(g.id);if(yt){let Pt=Math.min(1,(be-ce)/Ye),bt=1-Pt;yt.position.copy(Ct).add(Gt.clone().multiplyScalar(en*bt)),Pt>=1&&(yt.position.copy(Ct),ce=null,oe&&(vn(g),oe=!1))}else ce=null,oe&&(vn(g),oe=!1)}if(Et<1)requestAnimationFrame(ge);else{let yt=ce==null;yt&&oe&&(vn(g),oe=!1),yt?setTimeout(De?()=>xt():()=>Nt(),400):requestAnimationFrame(ge)}},At=new Qi(.035,.035,.4,6),It=new qt({color:16763972}),ft=new rt(At,It);ft.position.copy(H),ft.position.y+=.6;let pn=se.clone().sub(H).normalize();ft.quaternion.setFromUnitVectors(new F(0,1,0),pn),t.add(ft);let Ct=J(g.x,g.y).clone(),Gt=se.clone().sub(H).normalize(),en=.4,Zn=!1,ce=null,oe=!1,Ce=ft.position.clone(),le=se.clone();le.y+=.6;let re=performance.now();requestAnimationFrame(ge);return}let Xe=!1,Je=performance.now(),$t=G.userData.rightArm,Lt=null,Ot=!1,Ft=J(g.x,g.y).clone(),dn=se.clone().sub(H).normalize(),Mn=.4;function fn(At){let It=At-Je,ft=Math.min(1,It/q),pn=ft<=.4?ft/.4:1,Ct=ft>.4?(ft-.4)/.6:0;ft<=.4?G.position.lerpVectors(H,ie,pn):G.position.lerpVectors(ie,H,Ct);let Gt=ft<=.35?ft/.35:ft<=.7?(.7-ft)/.35:0;if($t.rotation.y=-Gt*1.1,!Xe&&ft>=hn&&(Xe=!0,z?(g.hp=Math.max(0,g.hp-k),$n(g.x,g.y,String(k),!1),g.hp<=0&&(Ot=!0),Pe(g),Q.get(g.id)?Lt=At:Ot&&(vn(g),Ot=!1)):$n(g.x,g.y,"MISS",!0)),Lt!=null&&z){let en=Q.get(g.id);if(en){let Zn=Math.min(1,(At-Lt)/Ye),ce=1-Zn;en.position.copy(Ft).add(dn.clone().multiplyScalar(Mn*ce)),Zn>=1&&(en.position.copy(Ft),Lt=null,Ot&&(vn(g),Ot=!1))}else Lt=null,Ot&&(vn(g),Ot=!1)}if(ft<1)requestAnimationFrame(fn);else{G.position.copy(H),$t.rotation.y=0;let en=Lt==null;en&&Ot&&(vn(g),Ot=!1),en?setTimeout(De?()=>xt():()=>Nt(),400):requestAnimationFrame(fn)}}requestAnimationFrame(fn)}function kh(x,g){let R=J(x,g);R.y+=.4;let C=new Mi(.1,12,12),z=new qt({color:8930559,transparent:!0,opacity:.9}),k=new rt(C,z);k.position.copy(R),t.add(k);let G=performance.now();function H(se){let ie=se-G,ve=Math.min(1,ie/ke),Ne=ve*(2-ve);k.scale.setScalar(Ne*4.5),z.opacity=.9*(1-ve),ve<1?requestAnimationFrame(H):(t.remove(k),C.dispose(),z.dispose())}requestAnimationFrame(H)}function wl(x,g,R,C,z){if(R.target==="enemy"&&g==null){C.updateTurnUI&&C.updateTurnUI(),z&&z();return}let G=(R.range??0)>2&&g!=null&&(g.x!==x.x||g.y!==x.y),H=!G&&g!=null&&(g.x!==x.x||g.y!==x.y);if(!G&&!H){Da(R.effectKey,x,g,C),C.updateTurnUI&&C.updateTurnUI(),z&&z();return}if(H){let be=function($e){let Et=$e-ge,yt=Math.min(1,Et/q),Pt=yt<=.4?yt/.4:1,bt=yt>.4?(yt-.4)/.6:0;yt<=.4?At.position.lerpVectors(It,pn,Pt):At.position.lerpVectors(pn,It,bt);let gt=yt<=.35?yt/.35:yt<=.7?(.7-yt)/.35:0;if(oe.rotation.y=-gt*1.1,!Ce&&yt>=hn&&(Ce=!0,Da(R.effectKey,x,g,C),g.hp<=0&&(re=!0),C.updateUnitSlashVisibility&&C.updateUnitSlashVisibility(g),Q.get(g.id)?le=$e:re&&(vn(g),re=!1)),le!=null){let tn=Q.get(g.id);if(tn){let Zt=Math.min(1,($e-le)/Ye),Fn=1-Zt;tn.position.copy(en).add(Zn.clone().multiplyScalar(ce*Fn)),Zt>=1&&(tn.position.copy(en),le=null,re&&(vn(g),re=!1))}else le=null,re&&(vn(g),re=!1)}yt<1?requestAnimationFrame(be):(At.position.copy(It),oe.rotation.y=0,le==null&&re&&(vn(g),re=!1),le==null?(C.updateTurnUI&&C.updateTurnUI(),z&&z()):requestAnimationFrame(be))},At=Q.get(x.id);if(!At||!At.userData.rightArm){Da(R.effectKey,x,g,C),C.updateUnitSlashVisibility&&C.updateUnitSlashVisibility(g),C.updateTurnUI&&C.updateTurnUI(),z&&z();return}let It=J(x.x,x.y).clone(),ft=J(g.x,g.y).clone(),pn=It.clone().lerp(ft,.35),Ct=ft.x-It.x,Gt=ft.z-It.z;Ct*Ct+Gt*Gt>1e-6&&(At.rotation.y=Math.atan2(Ct,Gt));let en=J(g.x,g.y).clone(),Zn=ft.clone().sub(It).normalize(),ce=.4,oe=At.userData.rightArm,Ce=!1,le=null,re=!1,ge=performance.now();requestAnimationFrame(be);return}let se=J(x.x,x.y).clone(),ie=J(g.x,g.y).clone(),ve=new Qi(.035,.035,.4,6),Ne=new qt({color:16763972}),ae=new rt(ve,Ne);ae.position.copy(se),ae.position.y+=.6;let me=ie.clone().sub(se).normalize();ae.quaternion.setFromUnitVectors(new F(0,1,0),me),t.add(ae);let Xe=ae.position.clone(),Je=ie.clone();Je.y+=.6;let $t=performance.now(),Lt=J(g.x,g.y).clone(),Ot=ie.clone().sub(se).normalize(),Ft=.4,dn=!1,Mn=null;function fn(At){let It=At-$t,ft=Math.min(1,It/et);if(ae.position.lerpVectors(Xe,Je,ft),!dn&&ft>=1&&(dn=!0,t.remove(ae),ve.dispose(),Ne.dispose(),R.type==="spell"&&kh(g.x,g.y),Da(R.effectKey,x,g,C),Q.get(g.id)&&g.hp>0&&(Mn=At),C.updateUnitSlashVisibility&&C.updateUnitSlashVisibility(g)),Mn!=null){let pn=Q.get(g.id);if(pn){let Ct=Math.min(1,(At-Mn)/Ye),Gt=1-Ct;pn.position.copy(Lt).add(Ot.clone().multiplyScalar(Ft*Gt)),Ct>=1&&(pn.position.copy(Lt),Mn=null)}else Mn=null}ft<1?requestAnimationFrame(fn):Mn==null?(C.updateTurnUI&&C.updateTurnUI(),z&&z()):requestAnimationFrame(fn)}requestAnimationFrame(fn)}function Qt(){if(Ee!=="playing"||!Yn(ye)||xe||Te.length===0)return;let x=Te[we],g=D.find(ce=>ce.id===x);if(!g||g.hp<=0)return;let R=El(i,g.x,g.y,g.agi,D,g),C=[];R.forEach((ce,oe)=>{if(ce===0)return;let Ce=oe%i.w,le=Math.floor(oe/i.w);D.some(ge=>ge.id!==g.id&&ge.x===Ce&&ge.y===le&&ge.hp>0)||C.push({gx:Ce,gy:le,dist:ce})});let z=Bh(g),k=ls(),G=Na(g.player),H=.15,se=.03,ie=g.maxHp>0&&g.hp/g.maxHp<H,ve=g.maxHp>0&&g.hp/g.maxHp<se,Ne=g.level===2,ae=ce=>D.some(oe=>oe.hp>0&&oe.x===ce.gx&&oe.y===ce.gy&&oe.id!==g.id),me=k.filter(ce=>!ae(ce)),Xe=G.filter(ce=>!ae(ce)),Je=yr(g).filter(ce=>g.mp>=ce.cost&&ce.target==="enemy"),$t=Je.length>0?Math.max(...Je.map(ce=>ce.range||0)):0,Lt=Math.max(g.range!=null?g.range:1,$t);function Ot(ce,oe){if(oe.length===0)return null;let Ce=null,le=1/0;for(let re of ce){let ge=0;for(let be of oe)ge+=Tn(re.gx,re.gy,be.gx,be.gy);ge<le&&(le=ge,Ce=re)}return Ce}function Ft(ce,oe){if(oe.length===0||ce.length===0)return null;let Ce=null,le=1/0;for(let re of ce){let ge=Math.min(...oe.map(be=>Tn(re.gx,re.gy,be.gx,be.gy)));ge<le&&(le=ge,Ce=re)}return Ce}function dn(ce,oe){let Ce=Lt,le=[];for(let re of D){if(re.hp<=0||re.player===g.player)continue;let ge=Tn(ce,oe,re.x,re.y);ge<=Ce&&ge>0&&Hs(i,ce,oe,re.x,re.y)&&le.push({target:re,dist:ge})}return le}let Mn=new Set(C.map(ce=>ce.gy*i.w+ce.gx));function fn(ce,oe){if(!ce||ce.length<=1)return null;let Ce=Math.min(oe,ce.length-1);for(let le=Ce;le>=1;le--){let re=ce[le],ge=re.y*i.w+re.x;if(Mn.has(ge))return{gx:re.x,gy:re.y}}return null}function At(ce,oe){if(!ce||ce.length<=1)return null;let Ce=Math.min(oe,ce.length-1);for(let le=Ce;le>=1;le--){let re=ce[le];if(!D.some(be=>be.id!==g.id&&be.hp>0&&be.x===re.x&&be.y===re.y))return{gx:re.x,gy:re.y}}return null}function It(ce){let oe=null,Ce=null,le=1/0;for(let re of ce){let ge=pr(i,g.x,g.y,re.gx,re.gy,D,g);ge&&ge.length>1&&ge.length<le&&(le=ge.length,oe=ge,Ce=re)}return oe&&Ce?{path:oe,target:Ce}:null}function ft(ce){let oe=ce??C;if(oe.length===0)return null;let Ce=D.filter(ge=>ge.hp>0&&ge.player!==g.player);if(Ce.length===0)return oe[0];let le=null,re=-1;for(let ge of oe){let be=Math.min(...Ce.map($e=>Tn(ge.gx,ge.gy,$e.x,$e.y)));be>re&&(re=be,le=ge)}return le}function pn(ce){let oe=ce??C;if(oe.length===0)return null;let Ce=D.filter($e=>$e.hp>0&&$e.player!==g.player),le=D.filter($e=>$e.hp>0&&$e.player===g.player&&$e.id!==g.id);if(Ce.length===0)return oe[0];let re=g.maxHp>0&&g.hp/g.maxHp>=.6,ge=null,be=-1/0;for(let $e of oe){let Et=Math.min(...Ce.map(bt=>Tn($e.gx,$e.gy,bt.x,bt.y))),yt=le.length>0?Math.min(...le.map(bt=>Tn($e.gx,$e.gy,bt.x,bt.y))):999,Pt;re?Pt=yt<Et?Et-1e3:Et:Pt=Et-yt,Pt>be&&(be=Pt,ge=$e)}return ge}function Ct(){let ce=Lt,oe=D.filter(re=>re.hp>0&&re.player!==g.player);if(oe.length===0)return null;let Ce=null,le=-1;for(let re of C){let ge=Math.min(...oe.map($e=>Tn(re.gx,re.gy,$e.x,$e.y)));oe.some($e=>Tn(re.gx,re.gy,$e.x,$e.y)<=ce)&&ge>le&&(le=ge,Ce=re)}return Ce}if(Fe){if(De){xt();return}if(is-Oe<=20){xt();return}let oe=new Set(k.map(be=>be.gy*i.w+be.gx)),Ce=k.length>0?C.filter(be=>oe.has(be.gy*i.w+be.gx)):null,le=Ce!=null&&Ce.length>0?Ce:C,re=D.filter(be=>be.hp>0&&be.player===g.player&&be.id!==g.id),ge=null;if(le.length>0&&re.length>0&&(ge=pn(le),ge)){let be=pr(i,g.x,g.y,ge.gx,ge.gy,D,g),$e=be?be.length-1:1/0;(!be||be.length<=1||$e>g.agi)&&(ge=ft(le))}if(!ge&&le.length>0&&(ge=ft(le)),ge&&(ge.gx!==g.x||ge.gy!==g.y)){rn(g,ge.gx,ge.gy,()=>setTimeout(xt,400));return}xt();return}if(ve&&is-Oe>20&&!De&&C.length>0){let ce=ft();if(ce&&(ce.gx!==g.x||ce.gy!==g.y)){rn(g,ce.gx,ce.gy,()=>setTimeout(Qt,600));return}xt();return}if(!Fe){let Et=function(gt){return Ba(g,gt,D).filter(Zt=>Zt.targetUnit!=null).map(Zt=>Zt.targetUnit)},ce=yr(g),oe=g.maxHp>0?g.hp/g.maxHp:1,Ce=.35,le=new Set(["arcaneBolt","feast","pierce","snipe","berserk","drain","shuriken","strike","bite"]),re=new Set(["chakra"]),ge=new Set(["shieldWall","focus","bloodlust","iaido","howl"]),be=new Set(["freeze","impale","poison"]),$e=new Set(["dominate","mantra","weaken","cripple","hex","blind"]),yt={showFloatingCombatText:$n,handleUnitDeath:vn,updateUnitSlashVisibility:Pe,updateTurnUI:Nt},Pt=null,bt=null;for(let gt of ce)if(le.has(gt.effectKey)){if(g.mp<gt.cost||gt.effectKey==="berserk"&&g.hp<g.maxHp*.3||gt.effectKey==="shuriken"&&z.length>0)continue;let tn=Et(gt);if(tn.length===0)continue;let Zt=tn.filter(mn=>mn.maxHp>0&&mn.hp/mn.maxHp<Ce),Fn=Zt.length>0?Zt.sort((mn,Ws)=>mn.hp-Ws.hp)[0]:tn.sort((mn,Ws)=>mn.hp-Ws.hp)[0];Pt=gt,bt=Fn;break}if(!Pt&&oe<=.5){for(let gt of ce)if(!(g.mp<gt.cost)&&re.has(gt.effectKey)){let tn=Ba(g,gt,D);if(tn.length>0){Pt=gt,bt=gt.target==="self"?g:tn[0].targetUnit||g;break}}}if(!Pt){for(let gt of ce)if(!(g.mp<gt.cost)&&ge.has(gt.effectKey)&&gt.target==="self"&&!(g.tempBuff&&g.tempBuff.duration>0)){Pt=gt,bt=g;break}}if(!Pt){for(let gt of ce)if(!(g.mp<gt.cost)&&$e.has(gt.effectKey)){let Zt=Et(gt).sort((Fn,mn)=>Fn.hp-mn.hp)[0];Pt=gt,bt=Zt;break}}if(!Pt){for(let gt of ce)if(!(g.mp<gt.cost)&&be.has(gt.effectKey)){let Zt=Et(gt).filter(Fn=>!Fn.tempDebuff||Fn.tempDebuff.duration<=0);if(Zt.length>0){let Fn=Zt.sort((mn,Ws)=>mn.hp-Ws.hp)[0];Pt=gt,bt=Fn;break}}}if(Pt&&bt){g.mp-=Pt.cost,Fe=!0;let gt=Pt.target==="self"?g:bt;wl(g,gt,Pt,yt,()=>setTimeout(Qt,600));return}}if(zh(g)&&z.length>0){z.sort((oe,Ce)=>oe.target.hp-Ce.target.hp||oe.dist-Ce.dist);let ce=z[0].target;Oa(g,ce);return}if(z.length>0){z.sort((oe,Ce)=>oe.target.hp-Ce.target.hp||oe.dist-Ce.dist);let ce=z[0].target;Oa(g,ce);return}let Gt=is-Oe;if(Gt<=20&&k.length>0&&!De&&C.length>0&&!k.some(oe=>oe.gx===g.x&&oe.gy===g.y)){let oe=me.length>0?me:k,Ce=It(oe),le=Ce?Ce.path:null,re=(bt,gt)=>Math.min(...k.map(tn=>Tn(bt,gt,tn.gx,tn.gy))),ge=re(g.x,g.y),be=null,$e=-1,Et=H;for(let bt of C){if(re(bt.gx,bt.gy)>ge||dn(bt.gx,bt.gy).filter(mn=>mn.target.maxHp>0&&mn.target.hp/mn.target.maxHp<Et).length===0)continue;let Zt=le?le.findIndex(mn=>mn.x===bt.gx&&mn.y===bt.gy):-1,Fn=Zt>=0?Zt:0;Fn>$e&&($e=Fn,be=bt)}if(be&&(be.gx!==g.x||be.gy!==g.y)){rn(g,be.gx,be.gy,()=>setTimeout(Qt,600));return}let yt=Ce?At(Ce.path,g.agi):null;if(yt&&(yt.gx!==g.x||yt.gy!==g.y)){rn(g,yt.gx,yt.gy,()=>setTimeout(Qt,600));return}let Pt=Ft(C,oe);if(Pt&&(Pt.gx!==g.x||Pt.gy!==g.y)){rn(g,Pt.gx,Pt.gy,()=>setTimeout(Qt,600));return}}if(ie&&C.length>0&&!De){let ce=z.filter(oe=>oe.target.maxHp>0&&oe.target.hp/oe.target.maxHp<H);if(ce.length>0){ce.sort((oe,Ce)=>oe.target.hp-Ce.target.hp||oe.dist-Ce.dist),Oa(g,ce[0].target);return}if(Gt>20&&Ne&&G.length>0&&!G.some(Ce=>Ce.gx===g.x&&Ce.gy===g.y)){let Ce=Xe.length>0?Xe:G,le=It(Ce);if(le!=null&&le.path.length<=5){let ge=At(le.path,g.agi);if(ge&&(ge.gx!==g.x||ge.gy!==g.y)){rn(g,ge.gx,ge.gy,()=>setTimeout(Qt,600));return}let be=Ft(C,Ce);if(be&&(be.gx!==g.x||be.gy!==g.y)){rn(g,be.gx,be.gy,()=>setTimeout(Qt,600));return}}}if(Gt>20){let oe=ft();if(oe&&Tn(g.x,g.y,oe.gx,oe.gy)>0){rn(g,oe.gx,oe.gy,()=>setTimeout(Qt,600));return}xt();return}}if(Gt<=10&&k.length>0&&!De&&C.length>0&&!k.some(oe=>oe.gx===g.x&&oe.gy===g.y)){let oe=me.length>0?me:k,Ce=It(oe),le=Ce?At(Ce.path,g.agi):null;if(le&&(le.gx!==g.x||le.gy!==g.y)){rn(g,le.gx,le.gy,()=>setTimeout(Qt,600));return}let re=Ft(C,oe);if(re&&(re.gx!==g.x||re.gy!==g.y)){rn(g,re.gx,re.gy,()=>setTimeout(Qt,600));return}}if(g.level===1&&k.length>0&&!De&&!k.some(oe=>oe.gx===g.x&&oe.gy===g.y)&&C.length>0){let oe=me.length>0?me:k,Ce=It(oe),le=Ce?At(Ce.path,g.agi):null;if(le&&(le.gx!==g.x||le.gy!==g.y)){rn(g,le.gx,le.gy,()=>setTimeout(Qt,600));return}let re=Ft(C,oe);if(re&&(re.gx!==g.x||re.gy!==g.y)){rn(g,re.gx,re.gy,()=>setTimeout(Qt,600));return}}if(Ne&&G.length>0&&!De&&!G.some(oe=>oe.gx===g.x&&oe.gy===g.y)&&C.length>0&&!D.filter(le=>le.hp>0&&le.player!==g.player).some(le=>le.maxHp<=0||le.hp/le.maxHp>=H?!1:C.some(re=>dn(re.gx,re.gy).some(be=>be.target.id===le.id)))){let le=Xe.length>0?Xe:G,re=It(le),ge=re?At(re.path,g.agi):null;if(ge&&(ge.gx!==g.x||ge.gy!==g.y)){rn(g,ge.gx,ge.gy,()=>setTimeout(Qt,600));return}let be=Ft(C,le);if(be&&(be.gx!==g.x||be.gy!==g.y)){rn(g,be.gx,be.gy,()=>setTimeout(Qt,600));return}}let en=D.filter(ce=>ce.hp>0&&ce.player!==g.player);if(g.level>=2&&Lt>=2&&en.length>0&&!De&&C.length>0){let ce=Ct();if(ce&&(ce.gx!==g.x||ce.gy!==g.y)){rn(g,ce.gx,ce.gy,()=>setTimeout(Qt,600));return}}if(en.length>0&&!De&&C.length>0){let oe=function(le,re){let ge=null;for(let be=-ce;be<=ce;be++)for(let $e=-ce;$e<=ce;$e++){if($e===0&&be===0||Math.abs($e)+Math.abs(be)>ce)continue;let Et=le.x+$e,yt=le.y+be;if(Et<0||Et>=i.w||yt<0||yt>=i.h||!mr(i,Et,yt)||!Hs(i,Et,yt,le.x,le.y)||D.some(Zt=>Zt.hp>0&&Zt.x===Et&&Zt.y===yt))continue;let bt=pr(i,g.x,g.y,Et,yt,D,g),gt=bt?bt.length-1:1/0;bt&&bt.length>1&&(!re||gt<=g.agi)&&(!ge||bt.length<ge.length)&&(ge=bt)}return ge},ce=Lt,Ce=[];for(let le of en){let re=oe(le,!0);re&&Ce.push({enemy:le,path:re})}if(Ce.length>0){let le=Ce.filter($e=>$e.enemy.maxHp>0&&$e.enemy.hp/$e.enemy.maxHp<H),re=le.length>0?le:Ce;le.length>0?re.sort(($e,Et)=>$e.enemy.hp-Et.enemy.hp||$e.path.length-Et.path.length):re.sort(($e,Et)=>$e.path.length-Et.path.length||$e.enemy.hp-Et.enemy.hp);let ge=re[0],be=fn(ge.path,g.agi);if(be&&(be.gx!==g.x||be.gy!==g.y)){rn(g,be.gx,be.gy,()=>setTimeout(Qt,600));return}}if(Ce.length===0){let le=null,re=1/0;for(let ge of en){let be=oe(ge,!1);be&&be.length<re&&(re=be.length,le=be)}if(le){let ge=fn(le,g.agi);if(ge&&(ge.gx!==g.x||ge.gy!==g.y)){rn(g,ge.gx,ge.gy,()=>setTimeout(Qt,600));return}}}}if(Ne&&G.length>0&&!De&&C.length>0&&!G.some(oe=>oe.gx===g.x&&oe.gy===g.y)){let oe=Xe.length>0?Xe:G,Ce=It(oe),le=Ce?At(Ce.path,g.agi):null;if(le&&(le.gx!==g.x||le.gy!==g.y)){rn(g,le.gx,le.gy,()=>setTimeout(Qt,600));return}let re=Ft(C,oe);if(re&&(re.gx!==g.x||re.gy!==g.y)){rn(g,re.gx,re.gy,()=>setTimeout(Qt,600));return}}xt()}function an(){for(Ut.length=0;Rt.children.length;){let x=Rt.children[0];Rt.remove(x),x.geometry.dispose(),x.material.dispose()}}let Fa=new Set;function yr(x){if(!x||!x.class)return[];let g=C0[x.class];return g?g.filter(R=>x.level>=R.level):[]}function Ba(x,g,R){let C=[],z=(G,H,se,ie)=>Math.abs(G-se)+Math.abs(H-ie),k=g.range||0;if(g.target==="self")return C.push({gx:x.x,gy:x.y,targetUnit:null}),C;for(let G of R)G.hp<=0||z(x.x,x.y,G.x,G.y)>k||k>2&&!Hs(i,x.x,x.y,G.x,G.y)||(g.target==="enemy"&&G.player!==x.player&&C.push({gx:G.x,gy:G.y,targetUnit:G}),g.target==="ally"&&G.player===x.player&&C.push({gx:G.x,gy:G.y,targetUnit:G}));return C}function Hh(x,g){let R=Ba(x,g,D);Fa=new Set(R.map(C=>`${C.gx},${C.gy}`)),an(),R.forEach(({gx:C,gy:z})=>{let G=(Pn+i.height[z][C]*.35)/2+Pn/2,H=C*dt-ne+dt/2,se=z*dt-j+dt/2,ie=G+.01,ve=new Cn(Ei,Ei),Ne=new qt({color:8926122,transparent:!0,opacity:.4,side:Kt}),ae=new rt(ve,Ne);ae.rotation.x=-Math.PI/2,ae.position.set(H,ie,se),Rt.add(ae),Ut.push(Ne);let me=new Cn(bi,bi),Xe=new qt({color:11167436,transparent:!0,opacity:.7,side:Kt}),Je=new rt(me,Xe);Je.rotation.x=-Math.PI/2,Je.position.set(H,ie+.01,se),Je.userData.gx=C,Je.userData.gy=z,Rt.add(Je),Ut.push(Xe)})}let bi=.82,Ei=1.02;function Vh(x){an(),x.forEach(({gx:g,gy:R})=>{let z=(Pn+i.height[R][g]*.35)/2+Pn/2,k=g*dt-ne+dt/2,G=R*dt-j+dt/2,H=z+.01,se=new Cn(Ei,Ei),ie=new qt({color:2271812,transparent:!0,opacity:.4,side:Kt}),ve=new rt(se,ie);ve.rotation.x=-Math.PI/2,ve.position.set(k,H,G),Rt.add(ve),Ut.push(ie);let Ne=new Cn(bi,bi),ae=new qt({color:4508774,transparent:!0,opacity:.7,side:Kt}),me=new rt(Ne,ae);me.rotation.x=-Math.PI/2,me.position.set(k,H+.01,G),me.userData.gx=g,me.userData.gy=R,Rt.add(me),Ut.push(ae)})}function Al(x){an(),x.forEach((g,R)=>{if(g===0)return;let C=R%i.w,z=R/i.w|0,G=(Pn+i.height[z][C]*.35)/2+Pn/2,H=C*dt-ne+dt/2,se=z*dt-j+dt/2,ie=G+.01,ve=new Cn(Ei,Ei),Ne=new qt({color:3381759,transparent:!0,opacity:.35,side:Kt}),ae=new rt(ve,Ne);ae.rotation.x=-Math.PI/2,ae.position.set(H,ie,se),Rt.add(ae),Ut.push(Ne);let me=new Cn(bi,bi),Xe=new qt({color:6730751,transparent:!0,opacity:.65,side:Kt}),Je=new rt(me,Xe);Je.rotation.x=-Math.PI/2,Je.position.set(H,ie+.01,se),Rt.add(Je),Ut.push(Xe)})}function Gh(x){an(),x.forEach((g,R)=>{if(g===0)return;let C=R%i.w,z=R/i.w|0,G=(Pn+i.height[z][C]*.35)/2+Pn/2,H=C*dt-ne+dt/2,se=z*dt-j+dt/2,ie=G+.01,ve=new Cn(Ei,Ei),Ne=new qt({color:10035746,transparent:!0,opacity:.4,side:Kt}),ae=new rt(ve,Ne);ae.rotation.x=-Math.PI/2,ae.position.set(H,ie,se),Rt.add(ae),Ut.push(Ne);let me=new Cn(bi,bi),Xe=new qt({color:13386820,transparent:!0,opacity:.7,side:Kt}),Je=new rt(me,Xe);Je.rotation.x=-Math.PI/2,Je.position.set(H,ie+.01,se),Rt.add(Je),Ut.push(Xe)})}let Ti=new Ta,wi=new Ue;function vr(x,g){let R=e.getBoundingClientRect();return wi.x=(x-R.left)/R.width*2-1,wi.y=-((g-R.top)/R.height)*2+1,{x:wi.x,y:wi.y}}function Wh(x,g){if(xe)return;wi.x=x,wi.y=g,Ti.setFromCamera(wi,r);let R=Ti.intersectObjects(I.children,!0);if(R.length===0)return;let C=R[0].object;for(;C&&(C.userData.gx==null||C.userData.gy==null);)C=C.parent;if(!C||C.userData.gx==null)return;let z=C.userData.gx,k=C.userData.gy;if(Ee==="draft"&&at){let H=k*i.w+z;it.has(H)&&Yt(z,k);return}if(Ee!=="playing"||ze==="cvcpu")return;if(Ae&&Me){let H=`${z},${k}`;if(!Fa.has(H))return;let se=Te[we],ie=D.find(me=>me.id===se&&me.hp>0);if(!ie||ie.mp<Me.cost){Ae=!1,Me=null,an(),Nt();return}let ve=D.find(me=>me.x===z&&me.y===k&&me.hp>0);if(Me.target==="enemy"&&(!ve||ve.player===ie.player)||Me.target==="ally"&&ve&&ve.player!==ie.player||Me.target==="self"&&(z!==ie.x||k!==ie.y)||Me.target==="enemy"&&!ve)return;ie.mp-=Me.cost,Fe=!0;let Ne={showFloatingCombatText:$n,handleUnitDeath:vn,updateUnitSlashVisibility:Pe,updateTurnUI:Nt},ae=Me.target==="self"?ie:ve||null;wl(ie,ae,Me,Ne,()=>{an(),Ae=!1,Me=null,Fa=new Set,Nt()});return}if(St){let H=Te[we],se=D.find(ve=>ve.id===H),ie=Q.get(H);if(se&&ie&&mt.length>0){let ve=J(se.x,se.y),Ne=J(z,k),ae=Ne.x-ve.x,me=Ne.z-ve.z,Xe=ae*ae+me*me>1e-6?Math.atan2(ae,me):ie.rotation.y;ie.rotation.y=E(Xe)}xt();return}if(Se!=null&&N){let H=D.find(ve=>ve.id===Se);if(!H||H.player!==ye)return;let se=k*i.w+z,ie=D.find(ve=>ve.x===z&&ve.y===k&&ve.hp>0);if(ie&&ie.id===Te[we]&&ie.player===ye){N=!1,Se=ie.id,De?(an(),He=new Map):(He=El(i,ie.x,ie.y,ie.agi,D,ie),Al(He)),Nt();return}if(!He.has(se)||He.get(se)===0)return;if(ie&&ie.player!==ye){let ve=Be(ie,"agi")*.7+Be(ie,"luk")*.3;if(Math.random()*Math.max(.001,ve)<=Be(H,"dex")){let me=Be(H,"str")*.7+Be(H,"dex")*.1+Be(H,"int")*.07-(Be(ie,"vit")*.3+Be(ie,"luk")*.1),Xe=Math.max(1,Math.floor(me));ie.hp=Math.max(0,ie.hp-Xe),$n(ie.x,ie.y,String(Xe),!1),ie.hp<=0&&vn(ie),Pe(ie)}else $n(ie.x,ie.y,"MISS",!0);Fe=!0,Se=null,N=!1,an(),De?xt():Nt()}return}let G=D.find(H=>H.x===z&&H.y===k&&H.hp>0);if(G){if(G.id===Te[we]&&G.player===ye){st(),Se=G.id,N=!1,De?(an(),He=new Map):(He=El(i,z,k,G.agi,D,G),Al(He)),Nt();return}an(),He=new Map,N=!1,Vt(G),Nt();return}if(st(),Se!=null){let Xe=function(){if(me>=ve.length){H.x=ve[ve.length-1].x,H.y=ve[ve.length-1].y,xe=!1,te(ae),ai(),He=new Map,De=!0,Fe?xt():Nt();return}let Je=ve[me-1],$t=ve[me],Lt=J(Je.x,Je.y).clone(),Ot=J($t.x,$t.y).clone(),Ft=Ot.x-Lt.x,dn=Ot.z-Lt.z;Ft*Ft+dn*dn>1e-6&&(ae.rotation.y=Math.atan2(Ft,dn));let Mn=performance.now();function fn(At){let It=Math.min(1,(At-Mn)/Ne),ft=It*(2-It);ae.position.lerpVectors(Lt,Ot,ft),Ie(ae,It),It<1?requestAnimationFrame(fn):(me++,Xe())}requestAnimationFrame(fn)};if(N)return;let H=D.find(Je=>Je.id===Se);if(!H||H.player!==ye)return;let se=k*i.w+z;if(!He.has(se)||He.get(se)===0||D.some(Je=>Je.id!==H.id&&Je.x===z&&Je.y===k&&Je.hp>0)||xe||De)return;let ve=pr(i,H.x,H.y,z,k,D,H);if(!ve||ve.length<=1)return;Se=null,an(),xe=!0,ai(H.id);let Ne=220,ae=Q.get(H.id),me=1;Xe()}}function Rl(x){P.x=x.clientX,P.y=x.clientY,v=x.ctrlKey,p=vr(x.clientX,x.clientY),e.style.cursor=(x.ctrlKey,"grabbing")}function za(x){return x.touches&&x.touches.length>0?{clientX:x.touches[0].clientX,clientY:x.touches[0].clientY}:x.changedTouches&&x.changedTouches.length>0?{clientX:x.changedTouches[0].clientX,clientY:x.changedTouches[0].clientY}:{clientX:x.clientX,clientY:x.clientY}}function Cl(x){if(!x||x.length<2)return 0;let g=x[0],R=x[1];return Math.hypot(R.clientX-g.clientX,R.clientY-g.clientY)}function Xh(x){if(x.touches.length===2){U=Cl(x.touches),p=null;return}if(x.touches.length!==1)return;U=null;let g=za(x);Rl({clientX:g.clientX,clientY:g.clientY,ctrlKey:!1})}function qh(x){if(x.touches.length===2){x.preventDefault();let R=Cl(x.touches);if(U!=null&&U>0){let C=R-U,z=r.position.distanceTo(l),k=Math.max(L,Math.min(K,z-C*A));u.copy(l).sub(r.position).normalize(),r.position.copy(l).sub(u.multiplyScalar(k)),r.lookAt(l)}U=R;return}if(U=null,x.touches.length!==1)return;x.preventDefault();let g=za(x);Pl({clientX:g.clientX,clientY:g.clientY,ctrlKey:!1})}function Yh(x){if(x.touches.length<2&&(U=null),x.touches.length===2||x.changedTouches.length===0)return;let g=za(x);ka({clientX:g.clientX,clientY:g.clientY,ctrlKey:!1})}function Pl(x){if(St){$(x.clientX,x.clientY);return}if(p==null)return;let g=x.clientX-P.x,R=x.clientY-P.y;if(!m&&!_&&(Math.abs(g)>f||Math.abs(R)>f)&&(x.ctrlKey||v?_=!0:m=!0),_){O.copy(r.position).sub(l);let C=O.length();if(C<.001)return;let z=Math.atan2(O.x,O.z),k=Math.asin(Math.max(-1,Math.min(1,O.y/C)));z-=g*S,k+=R*S,k=Math.max(y,Math.min(w,k)),O.x=C*Math.cos(k)*Math.sin(z),O.y=C*Math.sin(k),O.z=C*Math.cos(k)*Math.cos(z),r.position.copy(l).add(O),r.lookAt(l),P.x=x.clientX,P.y=x.clientY}else if(m){let C=vr(x.clientX,x.clientY);h.setFromNormalAndCoplanarPoint(new F(0,1,0),new F(0,l.y,0)),Ti.setFromCamera(new Ue(p.x,p.y),r),Ti.ray.intersectPlane(h,d);let z=d.clone();Ti.setFromCamera(new Ue(C.x,C.y),r),Ti.ray.intersectPlane(h,d);let k=z.sub(d);l.add(k),r.position.add(k),r.lookAt(l),p={x:C.x,y:C.y}}}function ka(x){if(p!=null&&!m&&!_){let g=vr(x.clientX,x.clientY);Wh(g.x,g.y)}p=null,m=!1,_=!1,v=!1,e.style.cursor="grab"}function $h(x){x.preventDefault();let g=r.position.distanceTo(l),R=Math.max(L,Math.min(K,g+x.deltaY*b));u.copy(l).sub(r.position).normalize(),r.position.copy(l).sub(u.multiplyScalar(R)),r.lookAt(l)}e.style.cursor="grab",e.addEventListener("mousedown",Rl),e.addEventListener("mousemove",Pl),e.addEventListener("mouseup",ka),e.addEventListener("mouseleave",ka),e.addEventListener("touchstart",Xh,{passive:!0}),e.addEventListener("touchmove",qh,{passive:!1}),e.addEventListener("touchend",Yh,{passive:!0}),e.addEventListener("wheel",$h,{passive:!1});function Il(){let x=e.clientWidth,g=e.clientHeight;r.aspect=x/g,r.updateProjectionMatrix(),Ai.setSize(x,g),Ai.setPixelRatio(Math.min(window.devicePixelRatio,2))}window.addEventListener("resize",Il);let Ai=new ar({antialias:!0});Ai.setSize(e.clientWidth,e.clientHeight),Ai.setPixelRatio(Math.min(window.devicePixelRatio,2)),Ai.shadowMap.enabled=!0,Ai.shadowMap.type=_l,e.appendChild(Ai.domElement),Il();let Mr=document.createElement("div");Mr.id="combat-text-layer",e.appendChild(Mr);let li=new F,Zh=1400;function $n(x,g,R,C,z){let k=document.createElement("div");k.className="combat-text-float "+(C?"miss":"damage")+(z?" "+z:""),k.textContent=R,k.style.position="absolute",Mr.appendChild(k);let G=z==="skill-name"?1.7:1.2,H=performance.now();function se(){li.copy(J(x,g)),li.y+=G,li.project(r);let ve=e.clientWidth,Ne=e.clientHeight;k.style.left=(li.x*.5+.5)*ve+"px",k.style.top=(1-(li.y*.5+.5))*Ne+"px"}function ie(){se(),performance.now()-H<Zh?requestAnimationFrame(ie):k.remove()}requestAnimationFrame(ie)}let Kh=1500;function Jh(x,g){let R=document.createElement("div");R.className="combat-text-float "+(g||"levelup"),R.textContent="LEVEL UP!",R.style.position="absolute",Mr.appendChild(R);let C=performance.now();function z(){li.copy(J(x.x,x.y)),li.y+=1.2,li.project(r);let G=e.clientWidth,H=e.clientHeight;R.style.left=(li.x*.5+.5)*G+"px",R.style.top=(1-(li.y*.5+.5))*H+"px"}function k(){z(),performance.now()-C<Kh?requestAnimationFrame(k):R.remove()}requestAnimationFrame(k)}function vn(x){console.log("[DEATH]",`${x.name} (${x.class}, P${x.player})`,`at (${x.x},${x.y})`,`Lv.${x.level}`),$n(x.x,x.y,"DEAD",!1);let g=Q.get(x.id);if(!g){ai(),Ll();return}let R=performance.now();function C(z){let k=z-R,G=Math.min(1,k/Bt),H=G*G;g.rotation.x=H*Math.PI*.5,G<1?requestAnimationFrame(C):(t.remove(g),Q.delete(x.id),ai(),Ll())}requestAnimationFrame(C)}function Ll(){if(Ee!=="playing")return;let x=D.some(R=>R.player===1&&R.hp>0),g=D.some(R=>R.player===2&&R.hp>0);x?g||Ha(1):Ha(2)}function jh(){let x=ls(),g=new Set(x.map(G=>G.gy*i.w+G.gx)),R=D.filter(G=>G.hp>0&&G.player===1&&g.has(G.y*i.w+G.x)).length,C=D.filter(G=>G.hp>0&&G.player===2&&g.has(G.y*i.w+G.x)).length,z=null,k="";if(R>C)z=1,k=`Time's up! Player 1 wins! (${R} vs ${C} units on center base)`;else if(C>R)z=2,k=`Time's up! Player 2 wins! (${C} vs ${R} units on center base)`;else{let G=D.filter(se=>se.hp>0&&se.player===1).reduce((se,ie)=>se+ie.hp,0),H=D.filter(se=>se.hp>0&&se.player===2).reduce((se,ie)=>se+ie.hp,0);G>H?(z=1,k=`Time's up! Draw on center \u2014 Player 1 wins on total HP (${G} vs ${H})`):H>G?(z=2,k=`Time's up! Draw on center \u2014 Player 2 wins on total HP (${H} vs ${G})`):k=`Draw! (equal units on center: ${R}, equal HP)`}Ha(z,k)}function Ha(x,g){Ee="gameover",document.getElementById("turn-menu").style.display="none",st(),an();let R=document.getElementById("game-over-overlay"),C=document.getElementById("game-over-title"),z=document.getElementById("game-over-cards");C.textContent=g??`Player ${x} wins!`;let k=D.filter(G=>G.player===(x??1));z.innerHTML=k.map(G=>{let H=G,se=G.level>=3?" level-3":G.level>=2?" level-2":"",ie=H.maxHp>0&&H.hp/H.maxHp<.3?" low-hp":"";return`
        <div class="game-over-card${se}${ie}">
          <img class="game-over-card-image" src="${fr[G.class]||""}" alt="${H.name}" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="game-over-card-body">
            <div class="game-over-card-name">${H.name}</div>
            <div class="game-over-card-meta">Lv.${H.level} ${H.class} \u2014 HP ${H.hp}/${H.maxHp}</div>
            <div class="game-over-card-stats">
              <span class="stat-label">HP</span><span class="stat-val stat-val-hp">${H.hp}/${H.maxHp}</span>
              <span class="stat-label">MP</span><span class="stat-val">${H.mp}/${H.maxMp}</span>
              <span class="stat-label">STR</span><span class="stat-val">${Be(H,"str")}</span>
              <span class="stat-label">AGI</span><span class="stat-val">${Be(H,"agi")}</span>
              <span class="stat-label">VIT</span><span class="stat-val">${Be(H,"vit")}</span>
              <span class="stat-label">DEX</span><span class="stat-val">${Be(H,"dex")}</span>
              <span class="stat-label">LUK</span><span class="stat-val">${Be(H,"luk")}</span>
              <span class="stat-label">INT</span><span class="stat-val">${Be(H,"int")}</span>
              <span class="stat-label">Range</span><span class="stat-val">${H.range}</span>
            </div>
          </div>
        </div>
      `}).join(""),R.classList.add("visible")}function Dl(x=0){requestAnimationFrame(Dl);let g=.6+.4*Math.sin(x*.004);for(let R=0;R<Ut.length;R++){let C=R%2===0?.4:.7;Ut[R].opacity=C*g}Ai.render(t,r)}Dl()}F0();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
