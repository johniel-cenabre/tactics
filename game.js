var kl="160";var ku=0,rc=1,Hu=2;var Hh=1,Hl=2,Ri=3,Zi=0,$n=1,hn=2;var qi=0,Gs=1,ac=2,oc=3,lc=4,zu=5,cs=100,Vu=101,Gu=102,cc=103,hc=104,Wu=200,Xu=201,qu=202,Yu=203,Yo=204,$o=205,$u=206,Zu=207,Ku=208,Ju=209,ju=210,Qu=211,ed=212,td=213,nd=214,id=0,sd=1,rd=2,fa=3,ad=4,od=5,ld=6,cd=7,zh=0,hd=1,ud=2,Yi=0,dd=1,fd=2,pd=3,md=4,gd=5,xd=6;var Vh=300,qs=301,Ys=302,Zo=303,Ko=304,Xa=306,Mr=1e3,pi=1001,Jo=1002,Hn=1003,uc=1004;var ho=1005;var ii=1006,_d=1007;var br=1008;var $i=1009,yd=1010,vd=1011,zl=1012,Gh=1013,Wi=1014,Xi=1015,Sr=1016,Wh=1017,Xh=1018,us=1020,Md=1021,mi=1023,bd=1024,Sd=1025,ds=1026,$s=1027,Ed=1028,qh=1029,Td=1030,Yh=1031,$h=1033,uo=33776,fo=33777,po=33778,mo=33779,dc=35840,fc=35841,pc=35842,mc=35843,Zh=36196,gc=37492,xc=37496,_c=37808,yc=37809,vc=37810,Mc=37811,bc=37812,Sc=37813,Ec=37814,Tc=37815,wc=37816,Ac=37817,Rc=37818,Cc=37819,Pc=37820,Ic=37821,go=36492,Lc=36494,Dc=36495,wd=36283,Uc=36284,Nc=36285,Oc=36286;var pa=2300,ma=2301,xo=2302,Fc=2400,Bc=2401,kc=2402;var Kh=3e3,fs=3001,Ad=3200,Rd=3201,Jh=0,Cd=1,si="",Ln="srgb",Pi="srgb-linear",Vl="display-p3",qa="display-p3-linear",ga="linear",$t="srgb",xa="rec709",_a="p3";var Ss=7680;var Hc=519,Pd=512,Id=513,Ld=514,jh=515,Dd=516,Ud=517,Nd=518,Od=519,zc=35044;var Vc="300 es",jo=1035,Ci=2e3,ya=2001,Ki=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var _o=Math.PI/180,Qo=180/Math.PI;function er(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nn[i&255]+Nn[i>>8&255]+Nn[i>>16&255]+Nn[i>>24&255]+"-"+Nn[e&255]+Nn[e>>8&255]+"-"+Nn[e>>16&15|64]+Nn[e>>24&255]+"-"+Nn[t&63|128]+Nn[t>>8&255]+"-"+Nn[t>>16&255]+Nn[t>>24&255]+Nn[n&255]+Nn[n>>8&255]+Nn[n>>16&255]+Nn[n>>24&255]).toLowerCase()}function Fn(i,e,t){return Math.max(e,Math.min(t,i))}function Fd(i,e){return(i%e+e)%e}function yo(i,e,t){return(1-t)*i+t*e}function Gc(i){return(i&i-1)===0&&i!==0}function el(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ur(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Yn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Be=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Fn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Rt=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],d=n[2],h=n[5],_=n[8],v=s[0],g=s[3],p=s[6],M=s[1],y=s[4],T=s[7],O=s[2],I=s[5],L=s[8];return r[0]=a*v+o*M+l*O,r[3]=a*g+o*y+l*I,r[6]=a*p+o*T+l*L,r[1]=c*v+u*M+f*O,r[4]=c*g+u*y+f*I,r[7]=c*p+u*T+f*L,r[2]=d*v+h*M+_*O,r[5]=d*g+h*y+_*I,r[8]=d*p+h*T+_*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*r,h=c*r-a*l,_=t*f+n*d+s*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/_;return e[0]=f*v,e[1]=(s*c-u*n)*v,e[2]=(o*n-s*a)*v,e[3]=d*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=h*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(vo.makeScale(e,t)),this}rotate(e){return this.premultiply(vo.makeRotation(-e)),this}translate(e,t){return this.premultiply(vo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},vo=new Rt;function Qh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function va(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Bd(){let i=va("canvas");return i.style.display="block",i}var Wc={};function gr(i){i in Wc||(Wc[i]=!0,console.warn(i))}var Xc=new Rt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),qc=new Rt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Hr={[Pi]:{transfer:ga,primaries:xa,toReference:i=>i,fromReference:i=>i},[Ln]:{transfer:$t,primaries:xa,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[qa]:{transfer:ga,primaries:_a,toReference:i=>i.applyMatrix3(qc),fromReference:i=>i.applyMatrix3(Xc)},[Vl]:{transfer:$t,primaries:_a,toReference:i=>i.convertSRGBToLinear().applyMatrix3(qc),fromReference:i=>i.applyMatrix3(Xc).convertLinearToSRGB()}},kd=new Set([Pi,qa]),Ht={enabled:!0,_workingColorSpace:Pi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!kd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Hr[e].toReference,s=Hr[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Hr[i].primaries},getTransfer:function(i){return i===si?ga:Hr[i].transfer}};function Ws(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Mo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Es,Ma=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Es===void 0&&(Es=va("canvas")),Es.width=e.width,Es.height=e.height;let n=Es.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Es}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=va("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ws(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ws(t[n]/255)*255):t[n]=Ws(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Hd=0,ba=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=er(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(bo(s[a].image)):r.push(bo(s[a]))}else r=bo(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function bo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ma.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var zd=0,ai=class i extends Ki{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=pi,s=pi,r=ii,a=br,o=mi,l=$i,c=i.DEFAULT_ANISOTROPY,u=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=er(),this.name="",this.source=new ba(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(gr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===fs?Ln:si),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mr:e.x=e.x-Math.floor(e.x);break;case pi:e.x=e.x<0?0:1;break;case Jo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mr:e.y=e.y-Math.floor(e.y);break;case pi:e.y=e.y<0?0:1;break;case Jo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return gr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ln?fs:Kh}set encoding(e){gr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===fs?Ln:si}};ai.DEFAULT_IMAGE=null;ai.DEFAULT_MAPPING=Vh;ai.DEFAULT_ANISOTROPY=1;var In=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],_=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(_+g)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,T=(h+1)/2,O=(p+1)/2,I=(u+d)/4,L=(f+v)/4,$=(_+g)/4;return y>T&&y>O?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=I/n,r=L/n):T>O?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=I/s,r=$/s):O<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),n=L/r,s=$/r),this.set(n,s,r,t),this}let M=Math.sqrt((g-_)*(g-_)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(g-_)/M,this.y=(f-v)/M,this.z=(d-u)/M,this.w=Math.acos((c+h+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},tl=class extends Ki{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new In(0,0,e,t),this.scissorTest=!1,this.viewport=new In(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(gr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===fs?Ln:si),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ii,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new ai(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ba(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ii=class extends tl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Sa=class extends ai{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var nl=class extends ai{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ji=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3],d=r[a+0],h=r[a+1],_=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=h,e[t+2]=_,e[t+3]=v;return}if(f!==v||l!==d||c!==h||u!==_){let g=1-o,p=l*d+c*h+u*_+f*v,M=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let O=Math.sqrt(y),I=Math.atan2(O,p*M);g=Math.sin(g*I)/O,o=Math.sin(o*I)/O}let T=o*M;if(l=l*g+d*T,c=c*g+h*T,u=u*g+_*T,f=f*g+v*T,g===1-o){let O=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=O,c*=O,u*=O,f*=O}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[a],d=r[a+1],h=r[a+2],_=r[a+3];return e[t]=o*_+u*f+l*h-c*d,e[t+1]=l*_+u*d+c*f-o*h,e[t+2]=c*_+u*h+o*d-l*f,e[t+3]=u*_-o*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),f=o(r/2),d=l(n/2),h=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=d*u*f+c*h*_,this._y=c*h*f-d*u*_,this._z=c*u*_+d*h*f,this._w=c*u*f-d*h*_;break;case"YXZ":this._x=d*u*f+c*h*_,this._y=c*h*f-d*u*_,this._z=c*u*_-d*h*f,this._w=c*u*f+d*h*_;break;case"ZXY":this._x=d*u*f-c*h*_,this._y=c*h*f+d*u*_,this._z=c*u*_+d*h*f,this._w=c*u*f-d*h*_;break;case"ZYX":this._x=d*u*f-c*h*_,this._y=c*h*f+d*u*_,this._z=c*u*_-d*h*f,this._w=c*u*f+d*h*_;break;case"YZX":this._x=d*u*f+c*h*_,this._y=c*h*f+d*u*_,this._z=c*u*_-d*h*f,this._w=c*u*f-d*h*_;break;case"XZY":this._x=d*u*f-c*h*_,this._y=c*h*f-d*u*_,this._z=c*u*_+d*h*f,this._w=c*u*f+d*h*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=n+o+f;if(d>0){let h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(a-s)*h}else if(n>o&&n>f){let h=2*Math.sqrt(1+n-o-f);this._w=(u-l)/h,this._x=.25*h,this._y=(s+a)/h,this._z=(r+c)/h}else if(o>f){let h=2*Math.sqrt(1+o-n-f);this._w=(r-c)/h,this._x=(s+a)/h,this._y=.25*h,this._z=(l+u)/h}else{let h=2*Math.sqrt(1+f-n-o);this._w=(a-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Fn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let h=1-t;return this._w=h*a+t*this._w,this._x=h*n+t*this._x,this._y=h*s+t*this._y,this._z=h*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*u,this.y=n+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return So.copy(this).projectOnVector(e),this.sub(So)}reflect(e){return this.sub(So.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Fn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},So=new F,Yc=new Ji,ps=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,hi):hi.fromBufferAttribute(r,a),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zr.copy(n.boundingBox)),zr.applyMatrix4(e.matrixWorld),this.union(zr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(dr),Vr.subVectors(this.max,dr),Ts.subVectors(e.a,dr),ws.subVectors(e.b,dr),As.subVectors(e.c,dr),ki.subVectors(ws,Ts),Hi.subVectors(As,ws),ss.subVectors(Ts,As);let t=[0,-ki.z,ki.y,0,-Hi.z,Hi.y,0,-ss.z,ss.y,ki.z,0,-ki.x,Hi.z,0,-Hi.x,ss.z,0,-ss.x,-ki.y,ki.x,0,-Hi.y,Hi.x,0,-ss.y,ss.x,0];return!Eo(t,Ts,ws,As,Vr)||(t=[1,0,0,0,1,0,0,0,1],!Eo(t,Ts,ws,As,Vr))?!1:(Gr.crossVectors(ki,Hi),t=[Gr.x,Gr.y,Gr.z],Eo(t,Ts,ws,As,Vr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Si=[new F,new F,new F,new F,new F,new F,new F,new F],hi=new F,zr=new ps,Ts=new F,ws=new F,As=new F,ki=new F,Hi=new F,ss=new F,dr=new F,Vr=new F,Gr=new F,rs=new F;function Eo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){rs.fromArray(i,r);let o=s.x*Math.abs(rs.x)+s.y*Math.abs(rs.y)+s.z*Math.abs(rs.z),l=e.dot(rs),c=t.dot(rs),u=n.dot(rs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Vd=new ps,fr=new F,To=new F,Zs=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Vd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fr.subVectors(e,this.center);let t=fr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(fr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(To.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fr.copy(e.center).add(To)),this.expandByPoint(fr.copy(e.center).sub(To))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ei=new F,wo=new F,Wr=new F,zi=new F,Ao=new F,Xr=new F,Ro=new F,Er=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ei.copy(this.origin).addScaledVector(this.direction,t),Ei.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){wo.copy(e).add(t).multiplyScalar(.5),Wr.copy(t).sub(e).normalize(),zi.copy(this.origin).sub(wo);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Wr),o=zi.dot(this.direction),l=-zi.dot(Wr),c=zi.lengthSq(),u=Math.abs(1-a*a),f,d,h,_;if(u>0)if(f=a*l-o,d=a*o-l,_=r*u,f>=0)if(d>=-_)if(d<=_){let v=1/u;f*=v,d*=v,h=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),h=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-r,-l),r),h=d*(d+2*l)+c):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),h=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(wo).addScaledVector(Wr,d),h}intersectSphere(e,t){Ei.subVectors(e.center,this.origin);let n=Ei.dot(this.direction),s=Ei.dot(Ei)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ei)!==null}intersectTriangle(e,t,n,s,r){Ao.subVectors(t,e),Xr.subVectors(n,e),Ro.crossVectors(Ao,Xr);let a=this.direction.dot(Ro),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;zi.subVectors(this.origin,e);let l=o*this.direction.dot(Xr.crossVectors(zi,Xr));if(l<0)return null;let c=o*this.direction.dot(Ao.cross(zi));if(c<0||l+c>a)return null;let u=-o*zi.dot(Ro);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},_n=class i{constructor(e,t,n,s,r,a,o,l,c,u,f,d,h,_,v,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,f,d,h,_,v,g)}set(e,t,n,s,r,a,o,l,c,u,f,d,h,_,v,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=_,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Rs.setFromMatrixColumn(e,0).length(),r=1/Rs.setFromMatrixColumn(e,1).length(),a=1/Rs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let d=a*u,h=a*f,_=o*u,v=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=h+_*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=_+h*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*u,h=l*f,_=c*u,v=c*f;t[0]=d+v*o,t[4]=_*o-h,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=h*o-_,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*u,h=l*f,_=c*u,v=c*f;t[0]=d-v*o,t[4]=-a*f,t[8]=_+h*o,t[1]=h+_*o,t[5]=a*u,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*u,h=a*f,_=o*u,v=o*f;t[0]=l*u,t[4]=_*c-h,t[8]=d*c+v,t[1]=l*f,t[5]=v*c+d,t[9]=h*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,h=a*c,_=o*l,v=o*c;t[0]=l*u,t[4]=v-d*f,t[8]=_*f+h,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=h*f+_,t[10]=d-v*f}else if(e.order==="XZY"){let d=a*l,h=a*c,_=o*l,v=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+v,t[5]=a*u,t[9]=h*f-_,t[2]=_*f-h,t[6]=o*u,t[10]=v*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gd,e,Wd)}lookAt(e,t,n){let s=this.elements;return jn.subVectors(e,t),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),Vi.crossVectors(n,jn),Vi.lengthSq()===0&&(Math.abs(n.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),Vi.crossVectors(n,jn)),Vi.normalize(),qr.crossVectors(jn,Vi),s[0]=Vi.x,s[4]=qr.x,s[8]=jn.x,s[1]=Vi.y,s[5]=qr.y,s[9]=jn.y,s[2]=Vi.z,s[6]=qr.z,s[10]=jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],d=n[9],h=n[13],_=n[2],v=n[6],g=n[10],p=n[14],M=n[3],y=n[7],T=n[11],O=n[15],I=s[0],L=s[4],$=s[8],S=s[12],A=s[1],N=s[5],B=s[9],j=s[13],P=s[2],W=s[6],D=s[10],se=s[14],Y=s[3],Q=s[7],ie=s[11],he=s[15];return r[0]=a*I+o*A+l*P+c*Y,r[4]=a*L+o*N+l*W+c*Q,r[8]=a*$+o*B+l*D+c*ie,r[12]=a*S+o*j+l*se+c*he,r[1]=u*I+f*A+d*P+h*Y,r[5]=u*L+f*N+d*W+h*Q,r[9]=u*$+f*B+d*D+h*ie,r[13]=u*S+f*j+d*se+h*he,r[2]=_*I+v*A+g*P+p*Y,r[6]=_*L+v*N+g*W+p*Q,r[10]=_*$+v*B+g*D+p*ie,r[14]=_*S+v*j+g*se+p*he,r[3]=M*I+y*A+T*P+O*Y,r[7]=M*L+y*N+T*W+O*Q,r[11]=M*$+y*B+T*D+O*ie,r[15]=M*S+y*j+T*se+O*he,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],_=e[3],v=e[7],g=e[11],p=e[15];return _*(+r*l*f-s*c*f-r*o*d+n*c*d+s*o*h-n*l*h)+v*(+t*l*h-t*c*d+r*a*d-s*a*h+s*c*u-r*l*u)+g*(+t*c*f-t*o*h-r*a*f+n*a*h+r*o*u-n*c*u)+p*(-s*o*u-t*l*f+t*o*d+s*a*f-n*a*d+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],_=e[12],v=e[13],g=e[14],p=e[15],M=f*g*c-v*d*c+v*l*h-o*g*h-f*l*p+o*d*p,y=_*d*c-u*g*c-_*l*h+a*g*h+u*l*p-a*d*p,T=u*v*c-_*f*c+_*o*h-a*v*h-u*o*p+a*f*p,O=_*f*l-u*v*l-_*o*d+a*v*d+u*o*g-a*f*g,I=t*M+n*y+s*T+r*O;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/I;return e[0]=M*L,e[1]=(v*d*r-f*g*r-v*s*h+n*g*h+f*s*p-n*d*p)*L,e[2]=(o*g*r-v*l*r+v*s*c-n*g*c-o*s*p+n*l*p)*L,e[3]=(f*l*r-o*d*r-f*s*c+n*d*c+o*s*h-n*l*h)*L,e[4]=y*L,e[5]=(u*g*r-_*d*r+_*s*h-t*g*h-u*s*p+t*d*p)*L,e[6]=(_*l*r-a*g*r-_*s*c+t*g*c+a*s*p-t*l*p)*L,e[7]=(a*d*r-u*l*r+u*s*c-t*d*c-a*s*h+t*l*h)*L,e[8]=T*L,e[9]=(_*f*r-u*v*r-_*n*h+t*v*h+u*n*p-t*f*p)*L,e[10]=(a*v*r-_*o*r+_*n*c-t*v*c-a*n*p+t*o*p)*L,e[11]=(u*o*r-a*f*r-u*n*c+t*f*c+a*n*h-t*o*h)*L,e[12]=O*L,e[13]=(u*v*s-_*f*s+_*n*d-t*v*d-u*n*g+t*f*g)*L,e[14]=(_*o*s-a*v*s-_*n*l+t*v*l+a*n*g-t*o*g)*L,e[15]=(a*f*s-u*o*s+u*n*l-t*f*l-a*n*d+t*o*d)*L,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,f=o+o,d=r*c,h=r*u,_=r*f,v=a*u,g=a*f,p=o*f,M=l*c,y=l*u,T=l*f,O=n.x,I=n.y,L=n.z;return s[0]=(1-(v+p))*O,s[1]=(h+T)*O,s[2]=(_-y)*O,s[3]=0,s[4]=(h-T)*I,s[5]=(1-(d+p))*I,s[6]=(g+M)*I,s[7]=0,s[8]=(_+y)*L,s[9]=(g-M)*L,s[10]=(1-(d+v))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Rs.set(s[0],s[1],s[2]).length(),a=Rs.set(s[4],s[5],s[6]).length(),o=Rs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ui.copy(this);let c=1/r,u=1/a,f=1/o;return ui.elements[0]*=c,ui.elements[1]*=c,ui.elements[2]*=c,ui.elements[4]*=u,ui.elements[5]*=u,ui.elements[6]*=u,ui.elements[8]*=f,ui.elements[9]*=f,ui.elements[10]*=f,t.setFromRotationMatrix(ui),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Ci){let l=this.elements,c=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s),h,_;if(o===Ci)h=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===ya)h=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Ci){let l=this.elements,c=1/(t-e),u=1/(n-s),f=1/(a-r),d=(t+e)*c,h=(n+s)*u,_,v;if(o===Ci)_=(a+r)*f,v=-2*f;else if(o===ya)_=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Rs=new F,ui=new _n,Gd=new F(0,0,0),Wd=new F(1,1,1),Vi=new F,qr=new F,jn=new F,$c=new _n,Zc=new Ji,Ea=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],d=s[6],h=s[10];switch(t){case"XYZ":this._y=Math.asin(Fn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Fn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Fn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Fn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Fn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-Fn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return $c.makeRotationFromQuaternion(e),this.setFromRotationMatrix($c,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zc.setFromEuler(this),this.setFromQuaternion(Zc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ea.DEFAULT_ORDER="XYZ";var Tr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Xd=0,Kc=new F,Cs=new Ji,Ti=new _n,Yr=new F,pr=new F,qd=new F,Yd=new Ji,Jc=new F(1,0,0),jc=new F(0,1,0),Qc=new F(0,0,1),$d={type:"added"},Zd={type:"removed"},Vn=class i extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=er(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new F,t=new Ea,n=new Ji,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _n},normalMatrix:{value:new Rt}}),this.matrix=new _n,this.matrixWorld=new _n,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis(Jc,e)}rotateY(e){return this.rotateOnAxis(jc,e)}rotateZ(e){return this.rotateOnAxis(Qc,e)}translateOnAxis(e,t){return Kc.copy(e).applyQuaternion(this.quaternion),this.position.add(Kc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jc,e)}translateY(e){return this.translateOnAxis(jc,e)}translateZ(e){return this.translateOnAxis(Qc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Yr.copy(e):Yr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(pr,Yr,this.up):Ti.lookAt(Yr,pr,this.up),this.quaternion.setFromRotationMatrix(Ti),s&&(Ti.extractRotation(s.matrixWorld),Cs.setFromRotationMatrix(Ti),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent($d)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zd)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,e,qd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,Yd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),h=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),h.length>0&&(n.animations=h),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Vn.DEFAULT_UP=new F(0,1,0);Vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var di=new F,wi=new F,Co=new F,Ai=new F,Ps=new F,Is=new F,eh=new F,Po=new F,Io=new F,Lo=new F,$r=!1,ks=class i{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),di.subVectors(e,t),s.cross(di);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){di.subVectors(s,t),wi.subVectors(n,t),Co.subVectors(e,t);let a=di.dot(di),o=di.dot(wi),l=di.dot(Co),c=wi.dot(wi),u=wi.dot(Co),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let d=1/f,h=(c*l-o*u)*d,_=(a*u-o*l)*d;return r.set(1-h-_,_,h)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getUV(e,t,n,s,r,a,o,l){return $r===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),$r=!0),this.getInterpolation(e,t,n,s,r,a,o,l)}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ai.x),l.addScaledVector(a,Ai.y),l.addScaledVector(o,Ai.z),l)}static isFrontFacing(e,t,n,s){return di.subVectors(n,t),wi.subVectors(e,t),di.cross(wi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),di.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return $r===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),$r=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ps.subVectors(s,n),Is.subVectors(r,n),Po.subVectors(e,n);let l=Ps.dot(Po),c=Is.dot(Po);if(l<=0&&c<=0)return t.copy(n);Io.subVectors(e,s);let u=Ps.dot(Io),f=Is.dot(Io);if(u>=0&&f<=u)return t.copy(s);let d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ps,a);Lo.subVectors(e,r);let h=Ps.dot(Lo),_=Is.dot(Lo);if(_>=0&&h<=_)return t.copy(r);let v=h*c-l*_;if(v<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(Is,o);let g=u*_-h*f;if(g<=0&&f-u>=0&&h-_>=0)return eh.subVectors(r,s),o=(f-u)/(f-u+(h-_)),t.copy(s).addScaledVector(eh,o);let p=1/(g+v+d);return a=v*p,o=d*p,t.copy(n).addScaledVector(Ps,a).addScaledVector(Is,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},eu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},Zr={h:0,s:0,l:0};function Do(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var gt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ht.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ht.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ht.workingColorSpace){if(e=Fd(e,1),t=Fn(t,0,1),n=Fn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Do(a,r,e+1/3),this.g=Do(a,r,e),this.b=Do(a,r,e-1/3)}return Ht.toWorkingColorSpace(this,s),this}setStyle(e,t=Ln){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ln){let n=eu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}copyLinearToSRGB(e){return this.r=Mo(e.r),this.g=Mo(e.g),this.b=Mo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ln){return Ht.fromWorkingColorSpace(On.copy(this),e),Math.round(Fn(On.r*255,0,255))*65536+Math.round(Fn(On.g*255,0,255))*256+Math.round(Fn(On.b*255,0,255))}getHexString(e=Ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ht.workingColorSpace){Ht.fromWorkingColorSpace(On.copy(this),t);let n=On.r,s=On.g,r=On.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ht.workingColorSpace){return Ht.fromWorkingColorSpace(On.copy(this),t),e.r=On.r,e.g=On.g,e.b=On.b,e}getStyle(e=Ln){Ht.fromWorkingColorSpace(On.copy(this),e);let t=On.r,n=On.g,s=On.b;return e!==Ln?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Gi),this.setHSL(Gi.h+e,Gi.s+t,Gi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Gi),e.getHSL(Zr);let n=yo(Gi.h,Zr.h,t),s=yo(Gi.s,Zr.s,t),r=yo(Gi.l,Zr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},On=new gt;gt.NAMES=eu;var Kd=0,ji=class extends Ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=er(),this.name="",this.type="Material",this.blending=Gs,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yo,this.blendDst=$o,this.blendEquation=cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=fa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(n.blending=this.blending),this.side!==Zi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Yo&&(n.blendSrc=this.blendSrc),this.blendDst!==$o&&(n.blendDst=this.blendDst),this.blendEquation!==cs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},un=class extends ji{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=zh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var xn=new F,Kr=new Be,Zn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=zc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Kr.fromBufferAttribute(this,t),Kr.applyMatrix3(e),this.setXY(t,Kr.x,Kr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix3(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix4(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyNormalMatrix(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.transformDirection(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ur(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Yn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ur(t,this.array)),t}setX(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ur(t,this.array)),t}setY(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ur(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ur(t,this.array)),t}setW(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Yn(t,this.array),n=Yn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Yn(t,this.array),n=Yn(n,this.array),s=Yn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Yn(t,this.array),n=Yn(n,this.array),s=Yn(s,this.array),r=Yn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zc&&(e.usage=this.usage),e}};var Ta=class extends Zn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var wa=class extends Zn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ln=class extends Zn{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Jd=0,ni=new _n,Uo=new Vn,Ls=new F,Qn=new ps,mr=new ps,Pn=new F,Kn=class i extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=er(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qh(e)?wa:Ta)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Rt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,t,n){return ni.makeTranslation(e,t,n),this.applyMatrix4(ni),this}scale(e,t,n){return ni.makeScale(e,t,n),this.applyMatrix4(ni),this}lookAt(e){return Uo.lookAt(e),Uo.updateMatrix(),this.applyMatrix4(Uo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ls).negate(),this.translate(Ls.x,Ls.y,Ls.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ln(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ps);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Qn.setFromBufferAttribute(r),this.morphTargetsRelative?(Pn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(Pn),Pn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(Pn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(Qn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];mr.setFromBufferAttribute(o),this.morphTargetsRelative?(Pn.addVectors(Qn.min,mr.min),Qn.expandByPoint(Pn),Pn.addVectors(Qn.max,mr.max),Qn.expandByPoint(Pn)):(Qn.expandByPoint(mr.min),Qn.expandByPoint(mr.max))}Qn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Pn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Pn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Pn.fromBufferAttribute(o,c),l&&(Ls.fromBufferAttribute(e,c),Pn.add(Ls)),s=Math.max(s,n.distanceToSquared(Pn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zn(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],u=[];for(let A=0;A<o;A++)c[A]=new F,u[A]=new F;let f=new F,d=new F,h=new F,_=new Be,v=new Be,g=new Be,p=new F,M=new F;function y(A,N,B){f.fromArray(s,A*3),d.fromArray(s,N*3),h.fromArray(s,B*3),_.fromArray(a,A*2),v.fromArray(a,N*2),g.fromArray(a,B*2),d.sub(f),h.sub(f),v.sub(_),g.sub(_);let j=1/(v.x*g.y-g.x*v.y);isFinite(j)&&(p.copy(d).multiplyScalar(g.y).addScaledVector(h,-v.y).multiplyScalar(j),M.copy(h).multiplyScalar(v.x).addScaledVector(d,-g.x).multiplyScalar(j),c[A].add(p),c[N].add(p),c[B].add(p),u[A].add(M),u[N].add(M),u[B].add(M))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let A=0,N=T.length;A<N;++A){let B=T[A],j=B.start,P=B.count;for(let W=j,D=j+P;W<D;W+=3)y(n[W+0],n[W+1],n[W+2])}let O=new F,I=new F,L=new F,$=new F;function S(A){L.fromArray(r,A*3),$.copy(L);let N=c[A];O.copy(N),O.sub(L.multiplyScalar(L.dot(N))).normalize(),I.crossVectors($,N);let j=I.dot(u[A])<0?-1:1;l[A*4]=O.x,l[A*4+1]=O.y,l[A*4+2]=O.z,l[A*4+3]=j}for(let A=0,N=T.length;A<N;++A){let B=T[A],j=B.start,P=B.count;for(let W=j,D=j+P;W<D;W+=3)S(n[W+0]),S(n[W+1]),S(n[W+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Zn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,h=n.count;d<h;d++)n.setXYZ(d,0,0,0);let s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,u=new F,f=new F;if(e)for(let d=0,h=e.count;d<h;d+=3){let _=e.getX(d+0),v=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,h=t.count;d<h;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Pn.fromBufferAttribute(e,t),Pn.normalize(),e.setXYZ(t,Pn.x,Pn.y,Pn.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u),h=0,_=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?h=l[v]*o.data.stride+o.offset:h=l[v]*u;for(let p=0;p<u;p++)d[_++]=c[h++]}return new Zn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){let d=c[u],h=e(d,n);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){let h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],f=r[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},th=new _n,as=new Er,Jr=new Zs,nh=new F,Ds=new F,Us=new F,Ns=new F,No=new F,jr=new F,Qr=new Be,ea=new Be,ta=new Be,ih=new F,sh=new F,rh=new F,na=new F,ia=new F,Je=class extends Vn{constructor(e=new Kn,t=new un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){jr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],f=r[l];u!==0&&(No.fromBufferAttribute(f,e),a?jr.addScaledVector(No,u):jr.addScaledVector(No.sub(t),u))}t.add(jr)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(r),as.copy(e.ray).recast(e.near),!(Jr.containsPoint(as.origin)===!1&&(as.intersectSphere(Jr,nh)===null||as.origin.distanceToSquared(nh)>(e.far-e.near)**2))&&(th.copy(r).invert(),as.copy(e.ray).applyMatrix4(th),!(n.boundingBox!==null&&as.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,as)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,h=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=d.length;_<v;_++){let g=d[_],p=a[g.materialIndex],M=Math.max(g.start,h.start),y=Math.min(o.count,Math.min(g.start+g.count,h.start+h.count));for(let T=M,O=y;T<O;T+=3){let I=o.getX(T),L=o.getX(T+1),$=o.getX(T+2);s=sa(this,p,e,n,c,u,f,I,L,$),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let _=Math.max(0,h.start),v=Math.min(o.count,h.start+h.count);for(let g=_,p=v;g<p;g+=3){let M=o.getX(g),y=o.getX(g+1),T=o.getX(g+2);s=sa(this,a,e,n,c,u,f,M,y,T),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,v=d.length;_<v;_++){let g=d[_],p=a[g.materialIndex],M=Math.max(g.start,h.start),y=Math.min(l.count,Math.min(g.start+g.count,h.start+h.count));for(let T=M,O=y;T<O;T+=3){let I=T,L=T+1,$=T+2;s=sa(this,p,e,n,c,u,f,I,L,$),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let _=Math.max(0,h.start),v=Math.min(l.count,h.start+h.count);for(let g=_,p=v;g<p;g+=3){let M=g,y=g+1,T=g+2;s=sa(this,a,e,n,c,u,f,M,y,T),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function jd(i,e,t,n,s,r,a,o){let l;if(e.side===$n?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Zi,o),l===null)return null;ia.copy(o),ia.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ia);return c<t.near||c>t.far?null:{distance:c,point:ia.clone(),object:i}}function sa(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Ds),i.getVertexPosition(l,Us),i.getVertexPosition(c,Ns);let u=jd(i,e,t,n,Ds,Us,Ns,na);if(u){s&&(Qr.fromBufferAttribute(s,o),ea.fromBufferAttribute(s,l),ta.fromBufferAttribute(s,c),u.uv=ks.getInterpolation(na,Ds,Us,Ns,Qr,ea,ta,new Be)),r&&(Qr.fromBufferAttribute(r,o),ea.fromBufferAttribute(r,l),ta.fromBufferAttribute(r,c),u.uv1=ks.getInterpolation(na,Ds,Us,Ns,Qr,ea,ta,new Be),u.uv2=u.uv1),a&&(ih.fromBufferAttribute(a,o),sh.fromBufferAttribute(a,l),rh.fromBufferAttribute(a,c),u.normal=ks.getInterpolation(na,Ds,Us,Ns,ih,sh,rh,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new F,materialIndex:0};ks.getNormal(Ds,Us,Ns,f.normal),u.face=f}return u}var Tn=class i extends Kn{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],f=[],d=0,h=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ln(c,3)),this.setAttribute("normal",new ln(u,3)),this.setAttribute("uv",new ln(f,2));function _(v,g,p,M,y,T,O,I,L,$,S){let A=T/L,N=O/$,B=T/2,j=O/2,P=I/2,W=L+1,D=$+1,se=0,Y=0,Q=new F;for(let ie=0;ie<D;ie++){let he=ie*N-j;for(let xe=0;xe<W;xe++){let te=xe*A-B;Q[v]=te*M,Q[g]=he*y,Q[p]=P,c.push(Q.x,Q.y,Q.z),Q[v]=0,Q[g]=0,Q[p]=I>0?1:-1,u.push(Q.x,Q.y,Q.z),f.push(xe/L),f.push(1-ie/$),se+=1}}for(let ie=0;ie<$;ie++)for(let he=0;he<L;he++){let xe=d+he+W*ie,te=d+he+W*(ie+1),fe=d+(he+1)+W*(ie+1),Ce=d+(he+1)+W*ie;l.push(xe,te,Ce),l.push(te,fe,Ce),Y+=6}o.addGroup(h,Y,S),h+=Y,d+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ks(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function kn(i){let e={};for(let t=0;t<i.length;t++){let n=Ks(i[t]);for(let s in n)e[s]=n[s]}return e}function Qd(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function tu(i){return i.getRenderTarget()===null?i.outputColorSpace:Ht.workingColorSpace}var ef={clone:Ks,merge:kn},tf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Li=class extends ji{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tf,this.fragmentShader=nf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=Qd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Aa=class extends Vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _n,this.projectionMatrix=new _n,this.projectionMatrixInverse=new _n,this.coordinateSystem=Ci}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},zn=class extends Aa{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Qo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(_o*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qo*2*Math.atan(Math.tan(_o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(_o*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Os=-90,Fs=1,il=class extends Vn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new zn(Os,Fs,e,t);s.layers=this.layers,this.add(s);let r=new zn(Os,Fs,e,t);r.layers=this.layers,this.add(r);let a=new zn(Os,Fs,e,t);a.layers=this.layers,this.add(a);let o=new zn(Os,Fs,e,t);o.layers=this.layers,this.add(o);let l=new zn(Os,Fs,e,t);l.layers=this.layers,this.add(l);let c=new zn(Os,Fs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Ci)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ya)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(f,d,h),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Ra=class extends ai{constructor(e,t,n,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:qs,super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},sl=class extends Ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(gr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===fs?Ln:si),this.texture=new Ra(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ii}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Tn(5,5,5),r=new Li({name:"CubemapFromEquirect",uniforms:Ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$n,blending:qi});r.uniforms.tEquirect.value=t;let a=new Je(s,r),o=t.minFilter;return t.minFilter===br&&(t.minFilter=ii),new il(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Oo=new F,sf=new F,rf=new Rt,fi=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Oo.subVectors(n,t).cross(sf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Oo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||rf.getNormalMatrix(e),s=this.coplanarPoint(Oo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},os=new Zs,ra=new F,wr=class{constructor(e=new fi,t=new fi,n=new fi,s=new fi,r=new fi,a=new fi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ci){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],f=s[6],d=s[7],h=s[8],_=s[9],v=s[10],g=s[11],p=s[12],M=s[13],y=s[14],T=s[15];if(n[0].setComponents(l-r,d-c,g-h,T-p).normalize(),n[1].setComponents(l+r,d+c,g+h,T+p).normalize(),n[2].setComponents(l+a,d+u,g+_,T+M).normalize(),n[3].setComponents(l-a,d-u,g-_,T-M).normalize(),n[4].setComponents(l-o,d-f,g-v,T-y).normalize(),t===Ci)n[5].setComponents(l+o,d+f,g+v,T+y).normalize();else if(t===ya)n[5].setComponents(o,f,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),os.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(os)}intersectsSprite(e){return os.center.set(0,0,0),os.radius=.7071067811865476,os.applyMatrix4(e.matrixWorld),this.intersectsSphere(os)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ra.x=s.normal.x>0?e.max.x:e.min.x,ra.y=s.normal.y>0?e.max.y:e.min.y,ra.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ra)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function nu(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function af(i,e){let t=e.isWebGL2,n=new WeakMap;function s(c,u){let f=c.array,d=c.usage,h=f.byteLength,_=i.createBuffer();i.bindBuffer(u,_),i.bufferData(u,f,d),c.onUploadCallback();let v;if(f instanceof Float32Array)v=i.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=i.SHORT;else if(f instanceof Uint32Array)v=i.UNSIGNED_INT;else if(f instanceof Int32Array)v=i.INT;else if(f instanceof Int8Array)v=i.BYTE;else if(f instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:h}}function r(c,u,f){let d=u.array,h=u._updateRange,_=u.updateRanges;if(i.bindBuffer(f,c),h.count===-1&&_.length===0&&i.bufferSubData(f,0,d),_.length!==0){for(let v=0,g=_.length;v<g;v++){let p=_[v];t?i.bufferSubData(f,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):i.bufferSubData(f,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}h.count!==-1&&(t?i.bufferSubData(f,h.offset*d.BYTES_PER_ELEMENT,d,h.offset,h.count):i.bufferSubData(f,h.offset*d.BYTES_PER_ELEMENT,d.subarray(h.offset,h.offset+h.count)),h.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){let d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let f=n.get(c);if(f===void 0)n.set(c,s(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,c,u),f.version=c.version}}return{get:a,remove:o,update:l}}var Di=class i extends Kn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,f=e/o,d=t/l,h=[],_=[],v=[],g=[];for(let p=0;p<u;p++){let M=p*d-a;for(let y=0;y<c;y++){let T=y*f-r;_.push(T,-M,0),v.push(0,0,1),g.push(y/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){let y=M+c*p,T=M+c*(p+1),O=M+1+c*(p+1),I=M+1+c*p;h.push(y,T,I),h.push(T,O,I)}this.setIndex(h),this.setAttribute("position",new ln(_,3)),this.setAttribute("normal",new ln(v,3)),this.setAttribute("uv",new ln(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},of=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lf=`#ifdef USE_ALPHAHASH
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
#endif`,cf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,df=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ff=`#ifdef USE_AOMAP
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
#endif`,pf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mf=`#ifdef USE_BATCHING
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
#endif`,gf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,xf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_f=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vf=`#ifdef USE_IRIDESCENCE
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
#endif`,Mf=`#ifdef USE_BUMPMAP
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
#endif`,bf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ef=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Af=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Cf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Pf=`#define PI 3.141592653589793
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
} // validated`,If=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Lf=`vec3 transformedNormal = objectNormal;
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
#endif`,Df=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Uf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Of=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ff="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bf=`
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
}`,kf=`#ifdef USE_ENVMAP
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
#endif`,Hf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zf=`#ifdef USE_ENVMAP
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
#endif`,Vf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gf=`#ifdef USE_ENVMAP
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
#endif`,Wf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$f=`#ifdef USE_GRADIENTMAP
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
}`,Zf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Kf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qf=`uniform bool receiveShadow;
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
#endif`,ep=`#ifdef USE_ENVMAP
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
#endif`,tp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,np=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ip=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rp=`PhysicalMaterial material;
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
#endif`,ap=`struct PhysicalMaterial {
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
}`,op=`
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
#endif`,lp=`#if defined( RE_IndirectDiffuse )
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
#endif`,cp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,up=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,fp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,pp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xp=`#if defined( USE_POINTS_UV )
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
#endif`,_p=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mp=`#ifdef USE_MORPHNORMALS
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
#endif`,bp=`#ifdef USE_MORPHTARGETS
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
#endif`,Sp=`#ifdef USE_MORPHTARGETS
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
#endif`,Ep=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Tp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ap=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cp=`#ifdef USE_NORMALMAP
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
#endif`,Pp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ip=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Up=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Np=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Op=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xp=`float getShadowMask() {
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
}`,qp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yp=`#ifdef USE_SKINNING
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
#endif`,$p=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zp=`#ifdef USE_SKINNING
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
#endif`,Kp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,em=`#ifdef USE_TRANSMISSION
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
#endif`,tm=`#ifdef USE_TRANSMISSION
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
#endif`,nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,am=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,om=`uniform sampler2D t2D;
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
}`,lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,um=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dm=`#include <common>
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
}`,fm=`#if DEPTH_PACKING == 3200
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
}`,pm=`#define DISTANCE
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
}`,mm=`#define DISTANCE
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
}`,gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_m=`uniform float scale;
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
}`,ym=`uniform vec3 diffuse;
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
}`,vm=`#include <common>
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
}`,Mm=`uniform vec3 diffuse;
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
}`,bm=`#define LAMBERT
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
}`,Sm=`#define LAMBERT
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
}`,Em=`#define MATCAP
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
}`,Tm=`#define MATCAP
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
}`,wm=`#define NORMAL
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
}`,Am=`#define NORMAL
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
}`,Rm=`#define PHONG
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
}`,Cm=`#define PHONG
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
}`,Pm=`#define STANDARD
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
}`,Im=`#define STANDARD
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
}`,Lm=`#define TOON
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
}`,Dm=`#define TOON
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
}`,Um=`uniform float size;
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
}`,Nm=`uniform vec3 diffuse;
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
}`,Om=`#include <common>
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
}`,Fm=`uniform vec3 color;
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
}`,Bm=`uniform float rotation;
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
}`,km=`uniform vec3 diffuse;
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
}`,St={alphahash_fragment:of,alphahash_pars_fragment:lf,alphamap_fragment:cf,alphamap_pars_fragment:hf,alphatest_fragment:uf,alphatest_pars_fragment:df,aomap_fragment:ff,aomap_pars_fragment:pf,batching_pars_vertex:mf,batching_vertex:gf,begin_vertex:xf,beginnormal_vertex:_f,bsdfs:yf,iridescence_fragment:vf,bumpmap_pars_fragment:Mf,clipping_planes_fragment:bf,clipping_planes_pars_fragment:Sf,clipping_planes_pars_vertex:Ef,clipping_planes_vertex:Tf,color_fragment:wf,color_pars_fragment:Af,color_pars_vertex:Rf,color_vertex:Cf,common:Pf,cube_uv_reflection_fragment:If,defaultnormal_vertex:Lf,displacementmap_pars_vertex:Df,displacementmap_vertex:Uf,emissivemap_fragment:Nf,emissivemap_pars_fragment:Of,colorspace_fragment:Ff,colorspace_pars_fragment:Bf,envmap_fragment:kf,envmap_common_pars_fragment:Hf,envmap_pars_fragment:zf,envmap_pars_vertex:Vf,envmap_physical_pars_fragment:ep,envmap_vertex:Gf,fog_vertex:Wf,fog_pars_vertex:Xf,fog_fragment:qf,fog_pars_fragment:Yf,gradientmap_pars_fragment:$f,lightmap_fragment:Zf,lightmap_pars_fragment:Kf,lights_lambert_fragment:Jf,lights_lambert_pars_fragment:jf,lights_pars_begin:Qf,lights_toon_fragment:tp,lights_toon_pars_fragment:np,lights_phong_fragment:ip,lights_phong_pars_fragment:sp,lights_physical_fragment:rp,lights_physical_pars_fragment:ap,lights_fragment_begin:op,lights_fragment_maps:lp,lights_fragment_end:cp,logdepthbuf_fragment:hp,logdepthbuf_pars_fragment:up,logdepthbuf_pars_vertex:dp,logdepthbuf_vertex:fp,map_fragment:pp,map_pars_fragment:mp,map_particle_fragment:gp,map_particle_pars_fragment:xp,metalnessmap_fragment:_p,metalnessmap_pars_fragment:yp,morphcolor_vertex:vp,morphnormal_vertex:Mp,morphtarget_pars_vertex:bp,morphtarget_vertex:Sp,normal_fragment_begin:Ep,normal_fragment_maps:Tp,normal_pars_fragment:wp,normal_pars_vertex:Ap,normal_vertex:Rp,normalmap_pars_fragment:Cp,clearcoat_normal_fragment_begin:Pp,clearcoat_normal_fragment_maps:Ip,clearcoat_pars_fragment:Lp,iridescence_pars_fragment:Dp,opaque_fragment:Up,packing:Np,premultiplied_alpha_fragment:Op,project_vertex:Fp,dithering_fragment:Bp,dithering_pars_fragment:kp,roughnessmap_fragment:Hp,roughnessmap_pars_fragment:zp,shadowmap_pars_fragment:Vp,shadowmap_pars_vertex:Gp,shadowmap_vertex:Wp,shadowmask_pars_fragment:Xp,skinbase_vertex:qp,skinning_pars_vertex:Yp,skinning_vertex:$p,skinnormal_vertex:Zp,specularmap_fragment:Kp,specularmap_pars_fragment:Jp,tonemapping_fragment:jp,tonemapping_pars_fragment:Qp,transmission_fragment:em,transmission_pars_fragment:tm,uv_pars_fragment:nm,uv_pars_vertex:im,uv_vertex:sm,worldpos_vertex:rm,background_vert:am,background_frag:om,backgroundCube_vert:lm,backgroundCube_frag:cm,cube_vert:hm,cube_frag:um,depth_vert:dm,depth_frag:fm,distanceRGBA_vert:pm,distanceRGBA_frag:mm,equirect_vert:gm,equirect_frag:xm,linedashed_vert:_m,linedashed_frag:ym,meshbasic_vert:vm,meshbasic_frag:Mm,meshlambert_vert:bm,meshlambert_frag:Sm,meshmatcap_vert:Em,meshmatcap_frag:Tm,meshnormal_vert:wm,meshnormal_frag:Am,meshphong_vert:Rm,meshphong_frag:Cm,meshphysical_vert:Pm,meshphysical_frag:Im,meshtoon_vert:Lm,meshtoon_frag:Dm,points_vert:Um,points_frag:Nm,shadow_vert:Om,shadow_frag:Fm,sprite_vert:Bm,sprite_frag:km},Re={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Rt},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Rt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Rt},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0},uvTransform:{value:new Rt}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Rt},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0}}},Mi={basic:{uniforms:kn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:St.meshbasic_vert,fragmentShader:St.meshbasic_frag},lambert:{uniforms:kn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new gt(0)}}]),vertexShader:St.meshlambert_vert,fragmentShader:St.meshlambert_frag},phong:{uniforms:kn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30}}]),vertexShader:St.meshphong_vert,fragmentShader:St.meshphong_frag},standard:{uniforms:kn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag},toon:{uniforms:kn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new gt(0)}}]),vertexShader:St.meshtoon_vert,fragmentShader:St.meshtoon_frag},matcap:{uniforms:kn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:St.meshmatcap_vert,fragmentShader:St.meshmatcap_frag},points:{uniforms:kn([Re.points,Re.fog]),vertexShader:St.points_vert,fragmentShader:St.points_frag},dashed:{uniforms:kn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:St.linedashed_vert,fragmentShader:St.linedashed_frag},depth:{uniforms:kn([Re.common,Re.displacementmap]),vertexShader:St.depth_vert,fragmentShader:St.depth_frag},normal:{uniforms:kn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:St.meshnormal_vert,fragmentShader:St.meshnormal_frag},sprite:{uniforms:kn([Re.sprite,Re.fog]),vertexShader:St.sprite_vert,fragmentShader:St.sprite_frag},background:{uniforms:{uvTransform:{value:new Rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:St.background_vert,fragmentShader:St.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:St.backgroundCube_vert,fragmentShader:St.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:St.cube_vert,fragmentShader:St.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:St.equirect_vert,fragmentShader:St.equirect_frag},distanceRGBA:{uniforms:kn([Re.common,Re.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:St.distanceRGBA_vert,fragmentShader:St.distanceRGBA_frag},shadow:{uniforms:kn([Re.lights,Re.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:St.shadow_vert,fragmentShader:St.shadow_frag}};Mi.physical={uniforms:kn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Rt},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Rt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Rt},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Rt},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Rt},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Rt},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Rt}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag};var aa={r:0,b:0,g:0};function Hm(i,e,t,n,s,r,a){let o=new gt(0),l=r===!0?0:1,c,u,f=null,d=0,h=null;function _(g,p){let M=!1,y=p.isScene===!0?p.background:null;y&&y.isTexture&&(y=(p.backgroundBlurriness>0?t:e).get(y)),y===null?v(o,l):y&&y.isColor&&(v(y,1),M=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Xa)?(u===void 0&&(u=new Je(new Tn(1,1,1),new Li({name:"BackgroundCubeMaterial",uniforms:Ks(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(O,I,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=Ht.getTransfer(y.colorSpace)!==$t,(f!==y||d!==y.version||h!==i.toneMapping)&&(u.material.needsUpdate=!0,f=y,d=y.version,h=i.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Je(new Di(2,2),new Li({name:"BackgroundMaterial",uniforms:Ks(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=Ht.getTransfer(y.colorSpace)!==$t,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||d!==y.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,f=y,d=y.version,h=i.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function v(g,p){g.getRGB(aa,tu(i)),n.buffers.color.setClear(aa.r,aa.g,aa.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(g,p=1){o.set(g),l=p,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,v(o,l)},render:_}}function zm(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=g(null),c=l,u=!1;function f(P,W,D,se,Y){let Q=!1;if(a){let ie=v(se,D,W);c!==ie&&(c=ie,h(c.object)),Q=p(P,se,D,Y),Q&&M(P,se,D,Y)}else{let ie=W.wireframe===!0;(c.geometry!==se.id||c.program!==D.id||c.wireframe!==ie)&&(c.geometry=se.id,c.program=D.id,c.wireframe=ie,Q=!0)}Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),(Q||u)&&(u=!1,$(P,W,D,se),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function h(P){return n.isWebGL2?i.bindVertexArray(P):r.bindVertexArrayOES(P)}function _(P){return n.isWebGL2?i.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function v(P,W,D){let se=D.wireframe===!0,Y=o[P.id];Y===void 0&&(Y={},o[P.id]=Y);let Q=Y[W.id];Q===void 0&&(Q={},Y[W.id]=Q);let ie=Q[se];return ie===void 0&&(ie=g(d()),Q[se]=ie),ie}function g(P){let W=[],D=[],se=[];for(let Y=0;Y<s;Y++)W[Y]=0,D[Y]=0,se[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:D,attributeDivisors:se,object:P,attributes:{},index:null}}function p(P,W,D,se){let Y=c.attributes,Q=W.attributes,ie=0,he=D.getAttributes();for(let xe in he)if(he[xe].location>=0){let fe=Y[xe],Ce=Q[xe];if(Ce===void 0&&(xe==="instanceMatrix"&&P.instanceMatrix&&(Ce=P.instanceMatrix),xe==="instanceColor"&&P.instanceColor&&(Ce=P.instanceColor)),fe===void 0||fe.attribute!==Ce||Ce&&fe.data!==Ce.data)return!0;ie++}return c.attributesNum!==ie||c.index!==se}function M(P,W,D,se){let Y={},Q=W.attributes,ie=0,he=D.getAttributes();for(let xe in he)if(he[xe].location>=0){let fe=Q[xe];fe===void 0&&(xe==="instanceMatrix"&&P.instanceMatrix&&(fe=P.instanceMatrix),xe==="instanceColor"&&P.instanceColor&&(fe=P.instanceColor));let Ce={};Ce.attribute=fe,fe&&fe.data&&(Ce.data=fe.data),Y[xe]=Ce,ie++}c.attributes=Y,c.attributesNum=ie,c.index=se}function y(){let P=c.newAttributes;for(let W=0,D=P.length;W<D;W++)P[W]=0}function T(P){O(P,0)}function O(P,W){let D=c.newAttributes,se=c.enabledAttributes,Y=c.attributeDivisors;D[P]=1,se[P]===0&&(i.enableVertexAttribArray(P),se[P]=1),Y[P]!==W&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,W),Y[P]=W)}function I(){let P=c.newAttributes,W=c.enabledAttributes;for(let D=0,se=W.length;D<se;D++)W[D]!==P[D]&&(i.disableVertexAttribArray(D),W[D]=0)}function L(P,W,D,se,Y,Q,ie){ie===!0?i.vertexAttribIPointer(P,W,D,Y,Q):i.vertexAttribPointer(P,W,D,se,Y,Q)}function $(P,W,D,se){if(n.isWebGL2===!1&&(P.isInstancedMesh||se.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();let Y=se.attributes,Q=D.getAttributes(),ie=W.defaultAttributeValues;for(let he in Q){let xe=Q[he];if(xe.location>=0){let te=Y[he];if(te===void 0&&(he==="instanceMatrix"&&P.instanceMatrix&&(te=P.instanceMatrix),he==="instanceColor"&&P.instanceColor&&(te=P.instanceColor)),te!==void 0){let fe=te.normalized,Ce=te.itemSize,Ve=t.get(te);if(Ve===void 0)continue;let Ge=Ve.buffer,ot=Ve.type,ut=Ve.bytesPerElement,We=n.isWebGL2===!0&&(ot===i.INT||ot===i.UNSIGNED_INT||te.gpuType===Gh);if(te.isInterleavedBufferAttribute){let Et=te.data,K=Et.stride,Qt=te.offset;if(Et.isInstancedInterleavedBuffer){for(let je=0;je<xe.locationSize;je++)O(xe.location+je,Et.meshPerAttribute);P.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let je=0;je<xe.locationSize;je++)T(xe.location+je);i.bindBuffer(i.ARRAY_BUFFER,Ge);for(let je=0;je<xe.locationSize;je++)L(xe.location+je,Ce/xe.locationSize,ot,fe,K*ut,(Qt+Ce/xe.locationSize*je)*ut,We)}else{if(te.isInstancedBufferAttribute){for(let Et=0;Et<xe.locationSize;Et++)O(xe.location+Et,te.meshPerAttribute);P.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Et=0;Et<xe.locationSize;Et++)T(xe.location+Et);i.bindBuffer(i.ARRAY_BUFFER,Ge);for(let Et=0;Et<xe.locationSize;Et++)L(xe.location+Et,Ce/xe.locationSize,ot,fe,Ce*ut,Ce/xe.locationSize*Et*ut,We)}}else if(ie!==void 0){let fe=ie[he];if(fe!==void 0)switch(fe.length){case 2:i.vertexAttrib2fv(xe.location,fe);break;case 3:i.vertexAttrib3fv(xe.location,fe);break;case 4:i.vertexAttrib4fv(xe.location,fe);break;default:i.vertexAttrib1fv(xe.location,fe)}}}}I()}function S(){B();for(let P in o){let W=o[P];for(let D in W){let se=W[D];for(let Y in se)_(se[Y].object),delete se[Y];delete W[D]}delete o[P]}}function A(P){if(o[P.id]===void 0)return;let W=o[P.id];for(let D in W){let se=W[D];for(let Y in se)_(se[Y].object),delete se[Y];delete W[D]}delete o[P.id]}function N(P){for(let W in o){let D=o[W];if(D[P.id]===void 0)continue;let se=D[P.id];for(let Y in se)_(se[Y].object),delete se[Y];delete D[P.id]}}function B(){j(),u=!0,c!==l&&(c=l,h(c.object))}function j(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:B,resetDefaultState:j,dispose:S,releaseStatesOfGeometry:A,releaseStatesOfProgram:N,initAttributes:y,enableAttribute:T,disableUnusedAttributes:I}}function Vm(i,e,t,n){let s=n.isWebGL2,r;function a(u){r=u}function o(u,f){i.drawArrays(r,u,f),t.update(f,r,1)}function l(u,f,d){if(d===0)return;let h,_;if(s)h=i,_="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[_](r,u,f,d),t.update(f,r,d)}function c(u,f,d){if(d===0)return;let h=e.get("WEBGL_multi_draw");if(h===null)for(let _=0;_<d;_++)this.render(u[_],f[_]);else{h.multiDrawArraysWEBGL(r,u,0,f,0,d);let _=0;for(let v=0;v<d;v++)_+=f[v];t.update(_,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Gm(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let L=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,T=a||e.has("OES_texture_float"),O=y&&T,I=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:h,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:M,vertexTextures:y,floatFragmentTextures:T,floatVertexTextures:O,maxSamples:I}}function Wm(i){let e=this,t=null,n=0,s=!1,r=!1,a=new fi,o=new Rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let h=f.length!==0||d||n!==0||s;return s=d,n=f.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){let _=f.clippingPlanes,v=f.clipIntersection,g=f.clipShadows,p=i.get(f);if(!s||_===null||_.length===0||r&&!g)r?u(null):c();else{let M=r?0:n,y=M*4,T=p.clippingState||null;l.value=T,T=u(_,d,y,h);for(let O=0;O!==y;++O)T[O]=t[O];p.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,h,_){let v=f!==null?f.length:0,g=null;if(v!==0){if(g=l.value,_!==!0||g===null){let p=h+v*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,T=h;y!==v;++y,T+=4)a.copy(f[y]).applyMatrix4(M,o),a.normal.toArray(g,T),g[T+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function Xm(i){let e=new WeakMap;function t(a,o){return o===Zo?a.mapping=qs:o===Ko&&(a.mapping=Ys),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Zo||o===Ko)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new sl(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Ca=class extends Aa{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Hs=4,ah=[.125,.215,.35,.446,.526,.582],hs=20,Fo=new Ca,oh=new gt,Bo=null,ko=0,Ho=0,ls=(1+Math.sqrt(5))/2,Bs=1/ls,lh=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,ls,Bs),new F(0,ls,-Bs),new F(Bs,0,ls),new F(-Bs,0,ls),new F(ls,Bs,0),new F(-ls,Bs,0)],Pa=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Bo=this._renderer.getRenderTarget(),ko=this._renderer.getActiveCubeFace(),Ho=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bo,ko,Ho),e.scissorTest=!1,oa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qs||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bo=this._renderer.getRenderTarget(),ko=this._renderer.getActiveCubeFace(),Ho=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ii,minFilter:ii,generateMipmaps:!1,type:Sr,format:mi,colorSpace:Pi,depthBuffer:!1},s=ch(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ch(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qm(r)),this._blurMaterial=Ym(r,e,t)}return s}_compileMaterial(e){let t=new Je(this._lodPlanes[0],e);this._renderer.compile(t,Fo)}_sceneToCubeUV(e,t,n,s){let o=new zn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(oh),u.toneMapping=Yi,u.autoClear=!1;let h=new un({name:"PMREM.Background",side:$n,depthWrite:!1,depthTest:!1}),_=new Je(new Tn,h),v=!1,g=e.background;g?g.isColor&&(h.color.copy(g),e.background=null,v=!0):(h.color.copy(oh),v=!0);for(let p=0;p<6;p++){let M=p%3;M===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):M===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let y=this._cubeSize;oa(s,M*y,p>2?y:0,y,y),u.setRenderTarget(s),v&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===qs||e.mapping===Ys;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=uh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Je(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;oa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Fo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=lh[(s-1)%lh.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,f=new Je(this._lodPlanes[s],c),d=c.uniforms,h=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*hs-1),v=r/_,g=isFinite(r)?1+Math.floor(u*v):hs;g>hs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${hs}`);let p=[],M=0;for(let L=0;L<hs;++L){let $=L/v,S=Math.exp(-$*$/2);p.push(S),L===0?M+=S:L<g&&(M+=2*S)}for(let L=0;L<p.length;L++)p[L]=p[L]/M;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:y}=this;d.dTheta.value=_,d.mipInt.value=y-n;let T=this._sizeLods[s],O=3*T*(s>y-Hs?s-y+Hs:0),I=4*(this._cubeSize-T);oa(t,O,I,3*T,2*T),l.setRenderTarget(t),l.render(f,Fo)}};function qm(i){let e=[],t=[],n=[],s=i,r=i-Hs+1+ah.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Hs?l=ah[a-i+Hs-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,_=6,v=3,g=2,p=1,M=new Float32Array(v*_*h),y=new Float32Array(g*_*h),T=new Float32Array(p*_*h);for(let I=0;I<h;I++){let L=I%3*2/3-1,$=I>2?0:-1,S=[L,$,0,L+2/3,$,0,L+2/3,$+1,0,L,$,0,L+2/3,$+1,0,L,$+1,0];M.set(S,v*_*I),y.set(d,g*_*I);let A=[I,I,I,I,I,I];T.set(A,p*_*I)}let O=new Kn;O.setAttribute("position",new Zn(M,v)),O.setAttribute("uv",new Zn(y,g)),O.setAttribute("faceIndex",new Zn(T,p)),e.push(O),s>Hs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ch(i,e,t){let n=new Ii(i,e,t);return n.texture.mapping=Xa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function oa(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Ym(i,e,t){let n=new Float32Array(hs),s=new F(0,1,0);return new Li({name:"SphericalGaussianBlur",defines:{n:hs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Gl(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function hh(){return new Li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gl(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function uh(){return new Li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Gl(){return`

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
	`}function $m(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Zo||l===Ko,u=l===qs||l===Ys;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new Pa(i)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{let f=o.image;if(c&&f&&f.height>0||u&&f&&s(f)){t===null&&(t=new Pa(i));let d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Zm(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Km(i,e,t,n){let s={},r=new WeakMap;function a(f){let d=f.target;d.index!==null&&e.remove(d.index);for(let _ in d.attributes)e.remove(d.attributes[_]);for(let _ in d.morphAttributes){let v=d.morphAttributes[_];for(let g=0,p=v.length;g<p;g++)e.remove(v[g])}d.removeEventListener("dispose",a),delete s[d.id];let h=r.get(d);h&&(e.remove(h),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(f){let d=f.attributes;for(let _ in d)e.update(d[_],i.ARRAY_BUFFER);let h=f.morphAttributes;for(let _ in h){let v=h[_];for(let g=0,p=v.length;g<p;g++)e.update(v[g],i.ARRAY_BUFFER)}}function c(f){let d=[],h=f.index,_=f.attributes.position,v=0;if(h!==null){let M=h.array;v=h.version;for(let y=0,T=M.length;y<T;y+=3){let O=M[y+0],I=M[y+1],L=M[y+2];d.push(O,I,I,L,L,O)}}else if(_!==void 0){let M=_.array;v=_.version;for(let y=0,T=M.length/3-1;y<T;y+=3){let O=y+0,I=y+1,L=y+2;d.push(O,I,I,L,L,O)}}else return;let g=new(Qh(d)?wa:Ta)(d,1);g.version=v;let p=r.get(f);p&&e.remove(p),r.set(f,g)}function u(f){let d=r.get(f);if(d){let h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Jm(i,e,t,n){let s=n.isWebGL2,r;function a(h){r=h}let o,l;function c(h){o=h.type,l=h.bytesPerElement}function u(h,_){i.drawElements(r,_,o,h*l),t.update(_,r,1)}function f(h,_,v){if(v===0)return;let g,p;if(s)g=i,p="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[p](r,_,o,h*l,v),t.update(_,r,v)}function d(h,_,v){if(v===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<v;p++)this.render(h[p]/l,_[p]);else{g.multiDrawElementsWEBGL(r,_,0,o,h,0,v);let p=0;for(let M=0;M<v;M++)p+=_[M];t.update(p,r,1)}}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=d}function jm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Qm(i,e){return i[0]-e[0]}function eg(i,e){return Math.abs(e[1])-Math.abs(i[1])}function tg(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,a=new In,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f){let d=c.morphTargetInfluences;if(e.isWebGL2===!0){let h=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=h!==void 0?h.length:0,v=r.get(u);if(v===void 0||v.count!==_){let P=function(){B.dispose(),r.delete(u),u.removeEventListener("dispose",P)};v!==void 0&&v.texture.dispose();let M=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,O=u.morphAttributes.position||[],I=u.morphAttributes.normal||[],L=u.morphAttributes.color||[],$=0;M===!0&&($=1),y===!0&&($=2),T===!0&&($=3);let S=u.attributes.position.count*$,A=1;S>e.maxTextureSize&&(A=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let N=new Float32Array(S*A*4*_),B=new Sa(N,S,A,_);B.type=Xi,B.needsUpdate=!0;let j=$*4;for(let W=0;W<_;W++){let D=O[W],se=I[W],Y=L[W],Q=S*A*4*W;for(let ie=0;ie<D.count;ie++){let he=ie*j;M===!0&&(a.fromBufferAttribute(D,ie),N[Q+he+0]=a.x,N[Q+he+1]=a.y,N[Q+he+2]=a.z,N[Q+he+3]=0),y===!0&&(a.fromBufferAttribute(se,ie),N[Q+he+4]=a.x,N[Q+he+5]=a.y,N[Q+he+6]=a.z,N[Q+he+7]=0),T===!0&&(a.fromBufferAttribute(Y,ie),N[Q+he+8]=a.x,N[Q+he+9]=a.y,N[Q+he+10]=a.z,N[Q+he+11]=Y.itemSize===4?a.w:1)}}v={count:_,texture:B,size:new Be(S,A)},r.set(u,v),u.addEventListener("dispose",P)}let g=0;for(let M=0;M<d.length;M++)g+=d[M];let p=u.morphTargetsRelative?1:1-g;f.getUniforms().setValue(i,"morphTargetBaseInfluence",p),f.getUniforms().setValue(i,"morphTargetInfluences",d),f.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}else{let h=d===void 0?0:d.length,_=n[u.id];if(_===void 0||_.length!==h){_=[];for(let y=0;y<h;y++)_[y]=[y,0];n[u.id]=_}for(let y=0;y<h;y++){let T=_[y];T[0]=y,T[1]=d[y]}_.sort(eg);for(let y=0;y<8;y++)y<h&&_[y][1]?(o[y][0]=_[y][0],o[y][1]=_[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(Qm);let v=u.morphAttributes.position,g=u.morphAttributes.normal,p=0;for(let y=0;y<8;y++){let T=o[y],O=T[0],I=T[1];O!==Number.MAX_SAFE_INTEGER&&I?(v&&u.getAttribute("morphTarget"+y)!==v[O]&&u.setAttribute("morphTarget"+y,v[O]),g&&u.getAttribute("morphNormal"+y)!==g[O]&&u.setAttribute("morphNormal"+y,g[O]),s[y]=I,p+=I):(v&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),g&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),s[y]=0)}let M=u.morphTargetsRelative?1:1-p;f.getUniforms().setValue(i,"morphTargetBaseInfluence",M),f.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function ng(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Ia=class extends ai{constructor(e,t,n,s,r,a,o,l,c,u){if(u=u!==void 0?u:ds,u!==ds&&u!==$s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ds&&(n=Wi),n===void 0&&u===$s&&(n=us),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Hn,this.minFilter=l!==void 0?l:Hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},iu=new ai,su=new Ia(1,1);su.compareFunction=jh;var ru=new Sa,au=new nl,ou=new Ra,dh=[],fh=[],ph=new Float32Array(16),mh=new Float32Array(9),gh=new Float32Array(4);function tr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=dh[s];if(r===void 0&&(r=new Float32Array(s),dh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function wn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function An(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ya(i,e){let t=fh[e];t===void 0&&(t=new Int32Array(e),fh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ig(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function sg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wn(t,e))return;i.uniform2fv(this.addr,e),An(t,e)}}function rg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wn(t,e))return;i.uniform3fv(this.addr,e),An(t,e)}}function ag(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wn(t,e))return;i.uniform4fv(this.addr,e),An(t,e)}}function og(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(wn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),An(t,e)}else{if(wn(t,n))return;gh.set(n),i.uniformMatrix2fv(this.addr,!1,gh),An(t,n)}}function lg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(wn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),An(t,e)}else{if(wn(t,n))return;mh.set(n),i.uniformMatrix3fv(this.addr,!1,mh),An(t,n)}}function cg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(wn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),An(t,e)}else{if(wn(t,n))return;ph.set(n),i.uniformMatrix4fv(this.addr,!1,ph),An(t,n)}}function hg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ug(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wn(t,e))return;i.uniform2iv(this.addr,e),An(t,e)}}function dg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wn(t,e))return;i.uniform3iv(this.addr,e),An(t,e)}}function fg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wn(t,e))return;i.uniform4iv(this.addr,e),An(t,e)}}function pg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function mg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wn(t,e))return;i.uniform2uiv(this.addr,e),An(t,e)}}function gg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wn(t,e))return;i.uniform3uiv(this.addr,e),An(t,e)}}function xg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wn(t,e))return;i.uniform4uiv(this.addr,e),An(t,e)}}function _g(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?su:iu;t.setTexture2D(e||r,s)}function yg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||au,s)}function vg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||ou,s)}function Mg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||ru,s)}function bg(i){switch(i){case 5126:return ig;case 35664:return sg;case 35665:return rg;case 35666:return ag;case 35674:return og;case 35675:return lg;case 35676:return cg;case 5124:case 35670:return hg;case 35667:case 35671:return ug;case 35668:case 35672:return dg;case 35669:case 35673:return fg;case 5125:return pg;case 36294:return mg;case 36295:return gg;case 36296:return xg;case 35678:case 36198:case 36298:case 36306:case 35682:return _g;case 35679:case 36299:case 36307:return yg;case 35680:case 36300:case 36308:case 36293:return vg;case 36289:case 36303:case 36311:case 36292:return Mg}}function Sg(i,e){i.uniform1fv(this.addr,e)}function Eg(i,e){let t=tr(e,this.size,2);i.uniform2fv(this.addr,t)}function Tg(i,e){let t=tr(e,this.size,3);i.uniform3fv(this.addr,t)}function wg(i,e){let t=tr(e,this.size,4);i.uniform4fv(this.addr,t)}function Ag(i,e){let t=tr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Rg(i,e){let t=tr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Cg(i,e){let t=tr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Pg(i,e){i.uniform1iv(this.addr,e)}function Ig(i,e){i.uniform2iv(this.addr,e)}function Lg(i,e){i.uniform3iv(this.addr,e)}function Dg(i,e){i.uniform4iv(this.addr,e)}function Ug(i,e){i.uniform1uiv(this.addr,e)}function Ng(i,e){i.uniform2uiv(this.addr,e)}function Og(i,e){i.uniform3uiv(this.addr,e)}function Fg(i,e){i.uniform4uiv(this.addr,e)}function Bg(i,e,t){let n=this.cache,s=e.length,r=Ya(t,s);wn(n,r)||(i.uniform1iv(this.addr,r),An(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||iu,r[a])}function kg(i,e,t){let n=this.cache,s=e.length,r=Ya(t,s);wn(n,r)||(i.uniform1iv(this.addr,r),An(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||au,r[a])}function Hg(i,e,t){let n=this.cache,s=e.length,r=Ya(t,s);wn(n,r)||(i.uniform1iv(this.addr,r),An(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||ou,r[a])}function zg(i,e,t){let n=this.cache,s=e.length,r=Ya(t,s);wn(n,r)||(i.uniform1iv(this.addr,r),An(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||ru,r[a])}function Vg(i){switch(i){case 5126:return Sg;case 35664:return Eg;case 35665:return Tg;case 35666:return wg;case 35674:return Ag;case 35675:return Rg;case 35676:return Cg;case 5124:case 35670:return Pg;case 35667:case 35671:return Ig;case 35668:case 35672:return Lg;case 35669:case 35673:return Dg;case 5125:return Ug;case 36294:return Ng;case 36295:return Og;case 36296:return Fg;case 35678:case 36198:case 36298:case 36306:case 35682:return Bg;case 35679:case 36299:case 36307:return kg;case 35680:case 36300:case 36308:case 36293:return Hg;case 36289:case 36303:case 36311:case 36292:return zg}}var rl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=bg(t.type)}},al=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Vg(t.type)}},ol=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},zo=/(\w+)(\])?(\[|\.)?/g;function xh(i,e){i.seq.push(e),i.map[e.id]=e}function Gg(i,e,t){let n=i.name,s=n.length;for(zo.lastIndex=0;;){let r=zo.exec(n),a=zo.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){xh(t,c===void 0?new rl(o,i,e):new al(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new ol(o),xh(t,f)),t=f}}}var Xs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Gg(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function _h(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Wg=37297,Xg=0;function qg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Yg(i){let e=Ht.getPrimaries(Ht.workingColorSpace),t=Ht.getPrimaries(i),n;switch(e===t?n="":e===_a&&t===xa?n="LinearDisplayP3ToLinearSRGB":e===xa&&t===_a&&(n="LinearSRGBToLinearDisplayP3"),i){case Pi:case qa:return[n,"LinearTransferOETF"];case Ln:case Vl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function yh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+qg(i.getShaderSource(e),a)}else return s}function $g(i,e){let t=Yg(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Zg(i,e){let t;switch(e){case dd:t="Linear";break;case fd:t="Reinhard";break;case pd:t="OptimizedCineon";break;case md:t="ACESFilmic";break;case xd:t="AgX";break;case gd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Kg(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(zs).join(`
`)}function Jg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(zs).join(`
`)}function jg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Qg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function zs(i){return i!==""}function vh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var e0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ll(i){return i.replace(e0,n0)}var t0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function n0(i,e){let t=St[e];if(t===void 0){let n=t0.get(e);if(n!==void 0)t=St[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ll(t)}var i0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bh(i){return i.replace(i0,s0)}function s0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Sh(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function r0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Hh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Hl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ri&&(e="SHADOWMAP_TYPE_VSM"),e}function a0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case qs:case Ys:e="ENVMAP_TYPE_CUBE";break;case Xa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function o0(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ys:e="ENVMAP_MODE_REFRACTION";break}return e}function l0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case zh:e="ENVMAP_BLENDING_MULTIPLY";break;case hd:e="ENVMAP_BLENDING_MIX";break;case ud:e="ENVMAP_BLENDING_ADD";break}return e}function c0(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function h0(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=r0(t),c=a0(t),u=o0(t),f=l0(t),d=c0(t),h=t.isWebGL2?"":Kg(t),_=Jg(t),v=jg(r),g=s.createProgram(),p,M,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(zs).join(`
`),p.length>0&&(p+=`
`),M=[h,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(zs).join(`
`),M.length>0&&(M+=`
`)):(p=[Sh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zs).join(`
`),M=[h,Sh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yi?"#define TONE_MAPPING":"",t.toneMapping!==Yi?St.tonemapping_pars_fragment:"",t.toneMapping!==Yi?Zg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",St.colorspace_pars_fragment,$g("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zs).join(`
`)),a=ll(a),a=vh(a,t),a=Mh(a,t),o=ll(o),o=vh(o,t),o=Mh(o,t),a=bh(a),o=bh(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Vc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);let T=y+p+a,O=y+M+o,I=_h(s,s.VERTEX_SHADER,T),L=_h(s,s.FRAGMENT_SHADER,O);s.attachShader(g,I),s.attachShader(g,L),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function $(B){if(i.debug.checkShaderErrors){let j=s.getProgramInfoLog(g).trim(),P=s.getShaderInfoLog(I).trim(),W=s.getShaderInfoLog(L).trim(),D=!0,se=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(D=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,I,L);else{let Y=yh(s,I,"vertex"),Q=yh(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Program Info Log: `+j+`
`+Y+`
`+Q)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(P===""||W==="")&&(se=!1);se&&(B.diagnostics={runnable:D,programLog:j,vertexShader:{log:P,prefix:p},fragmentShader:{log:W,prefix:M}})}s.deleteShader(I),s.deleteShader(L),S=new Xs(s,g),A=Qg(s,g)}let S;this.getUniforms=function(){return S===void 0&&$(this),S};let A;this.getAttributes=function(){return A===void 0&&$(this),A};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(g,Wg)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Xg++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=I,this.fragmentShader=L,this}var u0=0,cl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new hl(e),t.set(e,n)),n}},hl=class{constructor(e){this.id=u0++,this.code=e,this.usedTimes=0}};function d0(i,e,t,n,s,r,a){let o=new Tr,l=new cl,c=[],u=s.isWebGL2,f=s.logarithmicDepthBuffer,d=s.vertexTextures,h=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return S===0?"uv":`uv${S}`}function g(S,A,N,B,j){let P=B.fog,W=j.geometry,D=S.isMeshStandardMaterial?B.environment:null,se=(S.isMeshStandardMaterial?t:e).get(S.envMap||D),Y=se&&se.mapping===Xa?se.image.height:null,Q=_[S.type];S.precision!==null&&(h=s.getMaxPrecision(S.precision),h!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",h,"instead."));let ie=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,he=ie!==void 0?ie.length:0,xe=0;W.morphAttributes.position!==void 0&&(xe=1),W.morphAttributes.normal!==void 0&&(xe=2),W.morphAttributes.color!==void 0&&(xe=3);let te,fe,Ce,Ve;if(Q){let vt=Mi[Q];te=vt.vertexShader,fe=vt.fragmentShader}else te=S.vertexShader,fe=S.fragmentShader,l.update(S),Ce=l.getVertexShaderID(S),Ve=l.getFragmentShaderID(S);let Ge=i.getRenderTarget(),ot=j.isInstancedMesh===!0,ut=j.isBatchedMesh===!0,We=!!S.map,Et=!!S.matcap,K=!!se,Qt=!!S.aoMap,je=!!S.lightMap,rt=!!S.bumpMap,Ye=!!S.normalMap,Gt=!!S.displacementMap,pt=!!S.emissiveMap,C=!!S.metalnessMap,b=!!S.roughnessMap,J=S.anisotropy>0,Se=S.clearcoat>0,_e=S.iridescence>0,Ee=S.sheen>0,Ze=S.transmission>0,Pe=J&&!!S.anisotropyMap,ke=Se&&!!S.clearcoatMap,it=Se&&!!S.clearcoatNormalMap,lt=Se&&!!S.clearcoatRoughnessMap,oe=_e&&!!S.iridescenceMap,ct=_e&&!!S.iridescenceThicknessMap,nt=Ee&&!!S.sheenColorMap,ht=Ee&&!!S.sheenRoughnessMap,Ke=!!S.specularMap,Oe=!!S.specularColorMap,Qe=!!S.specularIntensityMap,Pt=Ze&&!!S.transmissionMap,He=Ze&&!!S.thicknessMap,De=!!S.gradientMap,me=!!S.alphaMap,U=S.alphaTest>0,Ie=!!S.alphaHash,Le=!!S.extensions,tt=!!W.attributes.uv1,Xe=!!W.attributes.uv2,At=!!W.attributes.uv3,Dt=Yi;return S.toneMapped&&(Ge===null||Ge.isXRRenderTarget===!0)&&(Dt=i.toneMapping),{isWebGL2:u,shaderID:Q,shaderType:S.type,shaderName:S.name,vertexShader:te,fragmentShader:fe,defines:S.defines,customVertexShaderID:Ce,customFragmentShaderID:Ve,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:h,batching:ut,instancing:ot,instancingColor:ot&&j.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Ge===null?i.outputColorSpace:Ge.isXRRenderTarget===!0?Ge.texture.colorSpace:Pi,map:We,matcap:Et,envMap:K,envMapMode:K&&se.mapping,envMapCubeUVHeight:Y,aoMap:Qt,lightMap:je,bumpMap:rt,normalMap:Ye,displacementMap:d&&Gt,emissiveMap:pt,normalMapObjectSpace:Ye&&S.normalMapType===Cd,normalMapTangentSpace:Ye&&S.normalMapType===Jh,metalnessMap:C,roughnessMap:b,anisotropy:J,anisotropyMap:Pe,clearcoat:Se,clearcoatMap:ke,clearcoatNormalMap:it,clearcoatRoughnessMap:lt,iridescence:_e,iridescenceMap:oe,iridescenceThicknessMap:ct,sheen:Ee,sheenColorMap:nt,sheenRoughnessMap:ht,specularMap:Ke,specularColorMap:Oe,specularIntensityMap:Qe,transmission:Ze,transmissionMap:Pt,thicknessMap:He,gradientMap:De,opaque:S.transparent===!1&&S.blending===Gs,alphaMap:me,alphaTest:U,alphaHash:Ie,combine:S.combine,mapUv:We&&v(S.map.channel),aoMapUv:Qt&&v(S.aoMap.channel),lightMapUv:je&&v(S.lightMap.channel),bumpMapUv:rt&&v(S.bumpMap.channel),normalMapUv:Ye&&v(S.normalMap.channel),displacementMapUv:Gt&&v(S.displacementMap.channel),emissiveMapUv:pt&&v(S.emissiveMap.channel),metalnessMapUv:C&&v(S.metalnessMap.channel),roughnessMapUv:b&&v(S.roughnessMap.channel),anisotropyMapUv:Pe&&v(S.anisotropyMap.channel),clearcoatMapUv:ke&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:it&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:nt&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:ht&&v(S.sheenRoughnessMap.channel),specularMapUv:Ke&&v(S.specularMap.channel),specularColorMapUv:Oe&&v(S.specularColorMap.channel),specularIntensityMapUv:Qe&&v(S.specularIntensityMap.channel),transmissionMapUv:Pt&&v(S.transmissionMap.channel),thicknessMapUv:He&&v(S.thicknessMap.channel),alphaMapUv:me&&v(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Ye||J),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUv1s:tt,vertexUv2s:Xe,vertexUv3s:At,pointsUvs:j.isPoints===!0&&!!W.attributes.uv&&(We||me),fog:!!P,useFog:S.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:j.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:xe,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Dt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:We&&S.map.isVideoTexture===!0&&Ht.getTransfer(S.map.colorSpace)===$t,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===hn,flipSided:S.side===$n,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:Le&&S.extensions.derivatives===!0,extensionFragDepth:Le&&S.extensions.fragDepth===!0,extensionDrawBuffers:Le&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:Le&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Le&&S.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){let A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(let N in S.defines)A.push(N),A.push(S.defines[N]);return S.isRawShaderMaterial===!1&&(M(A,S),y(A,S),A.push(i.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function M(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.numLightProbes),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function y(S,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),A.batching&&o.enable(19),S.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),S.push(o.mask)}function T(S){let A=_[S.type],N;if(A){let B=Mi[A];N=ef.clone(B.uniforms)}else N=S.uniforms;return N}function O(S,A){let N;for(let B=0,j=c.length;B<j;B++){let P=c[B];if(P.cacheKey===A){N=P,++N.usedTimes;break}}return N===void 0&&(N=new h0(i,A,S,r),c.push(N)),N}function I(S){if(--S.usedTimes===0){let A=c.indexOf(S);c[A]=c[c.length-1],c.pop(),S.destroy()}}function L(S){l.remove(S)}function $(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:T,acquireProgram:O,releaseProgram:I,releaseShaderCache:L,programs:c,dispose:$}}function f0(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function p0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Eh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Th(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f,d,h,_,v,g){let p=i[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:h,groupOrder:_,renderOrder:f.renderOrder,z:v,group:g},i[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=h,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=v,p.group=g),e++,p}function o(f,d,h,_,v,g){let p=a(f,d,h,_,v,g);h.transmission>0?n.push(p):h.transparent===!0?s.push(p):t.push(p)}function l(f,d,h,_,v,g){let p=a(f,d,h,_,v,g);h.transmission>0?n.unshift(p):h.transparent===!0?s.unshift(p):t.unshift(p)}function c(f,d){t.length>1&&t.sort(f||p0),n.length>1&&n.sort(d||Eh),s.length>1&&s.sort(d||Eh)}function u(){for(let f=e,d=i.length;f<d;f++){let h=i[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function m0(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Th,i.set(n,[a])):s>=r.length?(a=new Th,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function g0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new gt};break;case"SpotLight":t={position:new F,direction:new F,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new gt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":t={color:new gt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function x0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var _0=0;function y0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function v0(i,e){let t=new g0,n=x0(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new F);let r=new F,a=new _n,o=new _n;function l(u,f){let d=0,h=0,_=0;for(let B=0;B<9;B++)s.probe[B].set(0,0,0);let v=0,g=0,p=0,M=0,y=0,T=0,O=0,I=0,L=0,$=0,S=0;u.sort(y0);let A=f===!0?Math.PI:1;for(let B=0,j=u.length;B<j;B++){let P=u[B],W=P.color,D=P.intensity,se=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=W.r*D*A,h+=W.g*D*A,_+=W.b*D*A;else if(P.isLightProbe){for(let Q=0;Q<9;Q++)s.probe[Q].addScaledVector(P.sh.coefficients[Q],D);S++}else if(P.isDirectionalLight){let Q=t.get(P);if(Q.color.copy(P.color).multiplyScalar(P.intensity*A),P.castShadow){let ie=P.shadow,he=n.get(P);he.shadowBias=ie.bias,he.shadowNormalBias=ie.normalBias,he.shadowRadius=ie.radius,he.shadowMapSize=ie.mapSize,s.directionalShadow[v]=he,s.directionalShadowMap[v]=Y,s.directionalShadowMatrix[v]=P.shadow.matrix,T++}s.directional[v]=Q,v++}else if(P.isSpotLight){let Q=t.get(P);Q.position.setFromMatrixPosition(P.matrixWorld),Q.color.copy(W).multiplyScalar(D*A),Q.distance=se,Q.coneCos=Math.cos(P.angle),Q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Q.decay=P.decay,s.spot[p]=Q;let ie=P.shadow;if(P.map&&(s.spotLightMap[L]=P.map,L++,ie.updateMatrices(P),P.castShadow&&$++),s.spotLightMatrix[p]=ie.matrix,P.castShadow){let he=n.get(P);he.shadowBias=ie.bias,he.shadowNormalBias=ie.normalBias,he.shadowRadius=ie.radius,he.shadowMapSize=ie.mapSize,s.spotShadow[p]=he,s.spotShadowMap[p]=Y,I++}p++}else if(P.isRectAreaLight){let Q=t.get(P);Q.color.copy(W).multiplyScalar(D),Q.halfWidth.set(P.width*.5,0,0),Q.halfHeight.set(0,P.height*.5,0),s.rectArea[M]=Q,M++}else if(P.isPointLight){let Q=t.get(P);if(Q.color.copy(P.color).multiplyScalar(P.intensity*A),Q.distance=P.distance,Q.decay=P.decay,P.castShadow){let ie=P.shadow,he=n.get(P);he.shadowBias=ie.bias,he.shadowNormalBias=ie.normalBias,he.shadowRadius=ie.radius,he.shadowMapSize=ie.mapSize,he.shadowCameraNear=ie.camera.near,he.shadowCameraFar=ie.camera.far,s.pointShadow[g]=he,s.pointShadowMap[g]=Y,s.pointShadowMatrix[g]=P.shadow.matrix,O++}s.point[g]=Q,g++}else if(P.isHemisphereLight){let Q=t.get(P);Q.skyColor.copy(P.color).multiplyScalar(D*A),Q.groundColor.copy(P.groundColor).multiplyScalar(D*A),s.hemi[y]=Q,y++}}M>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Re.LTC_FLOAT_1,s.rectAreaLTC2=Re.LTC_FLOAT_2):(s.rectAreaLTC1=Re.LTC_HALF_1,s.rectAreaLTC2=Re.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Re.LTC_FLOAT_1,s.rectAreaLTC2=Re.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Re.LTC_HALF_1,s.rectAreaLTC2=Re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=h,s.ambient[2]=_;let N=s.hash;(N.directionalLength!==v||N.pointLength!==g||N.spotLength!==p||N.rectAreaLength!==M||N.hemiLength!==y||N.numDirectionalShadows!==T||N.numPointShadows!==O||N.numSpotShadows!==I||N.numSpotMaps!==L||N.numLightProbes!==S)&&(s.directional.length=v,s.spot.length=p,s.rectArea.length=M,s.point.length=g,s.hemi.length=y,s.directionalShadow.length=T,s.directionalShadowMap.length=T,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=I,s.spotShadowMap.length=I,s.directionalShadowMatrix.length=T,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=I+L-$,s.spotLightMap.length=L,s.numSpotLightShadowsWithMaps=$,s.numLightProbes=S,N.directionalLength=v,N.pointLength=g,N.spotLength=p,N.rectAreaLength=M,N.hemiLength=y,N.numDirectionalShadows=T,N.numPointShadows=O,N.numSpotShadows=I,N.numSpotMaps=L,N.numLightProbes=S,s.version=_0++)}function c(u,f){let d=0,h=0,_=0,v=0,g=0,p=f.matrixWorldInverse;for(let M=0,y=u.length;M<y;M++){let T=u[M];if(T.isDirectionalLight){let O=s.directional[d];O.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),O.direction.sub(r),O.direction.transformDirection(p),d++}else if(T.isSpotLight){let O=s.spot[_];O.position.setFromMatrixPosition(T.matrixWorld),O.position.applyMatrix4(p),O.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),O.direction.sub(r),O.direction.transformDirection(p),_++}else if(T.isRectAreaLight){let O=s.rectArea[v];O.position.setFromMatrixPosition(T.matrixWorld),O.position.applyMatrix4(p),o.identity(),a.copy(T.matrixWorld),a.premultiply(p),o.extractRotation(a),O.halfWidth.set(T.width*.5,0,0),O.halfHeight.set(0,T.height*.5,0),O.halfWidth.applyMatrix4(o),O.halfHeight.applyMatrix4(o),v++}else if(T.isPointLight){let O=s.point[h];O.position.setFromMatrixPosition(T.matrixWorld),O.position.applyMatrix4(p),h++}else if(T.isHemisphereLight){let O=s.hemi[g];O.direction.setFromMatrixPosition(T.matrixWorld),O.direction.transformDirection(p),g++}}}return{setup:l,setupView:c,state:s}}function wh(i,e){let t=new v0(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(f){n.push(f)}function o(f){s.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function M0(i,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),l;return o===void 0?(l=new wh(i,e),t.set(r,[l])):a>=o.length?(l=new wh(i,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:n,dispose:s}}var ul=class extends ji{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ad,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},dl=class extends ji{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},b0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,S0=`uniform sampler2D shadow_pass;
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
}`;function E0(i,e,t){let n=new wr,s=new Be,r=new Be,a=new In,o=new ul({depthPacking:Rd}),l=new dl,c={},u=t.maxTextureSize,f={[Zi]:$n,[$n]:Zi,[hn]:hn},d=new Li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:b0,fragmentShader:S0}),h=d.clone();h.defines.HORIZONTAL_PASS=1;let _=new Kn;_.setAttribute("position",new Zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Je(_,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hh;let p=this.type;this.render=function(I,L,$){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||I.length===0)return;let S=i.getRenderTarget(),A=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),B=i.state;B.setBlending(qi),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let j=p!==Ri&&this.type===Ri,P=p===Ri&&this.type!==Ri;for(let W=0,D=I.length;W<D;W++){let se=I[W],Y=se.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let Q=Y.getFrameExtents();if(s.multiply(Q),r.copy(Y.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Q.x),s.x=r.x*Q.x,Y.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Q.y),s.y=r.y*Q.y,Y.mapSize.y=r.y)),Y.map===null||j===!0||P===!0){let he=this.type!==Ri?{minFilter:Hn,magFilter:Hn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Ii(s.x,s.y,he),Y.map.texture.name=se.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();let ie=Y.getViewportCount();for(let he=0;he<ie;he++){let xe=Y.getViewport(he);a.set(r.x*xe.x,r.y*xe.y,r.x*xe.z,r.y*xe.w),B.viewport(a),Y.updateMatrices(se,he),n=Y.getFrustum(),T(L,$,Y.camera,se,this.type)}Y.isPointLightShadow!==!0&&this.type===Ri&&M(Y,$),Y.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(S,A,N)};function M(I,L){let $=e.update(v);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,h.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Ii(s.x,s.y)),d.uniforms.shadow_pass.value=I.map.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(L,null,$,d,v,null),h.uniforms.shadow_pass.value=I.mapPass.texture,h.uniforms.resolution.value=I.mapSize,h.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(L,null,$,h,v,null)}function y(I,L,$,S){let A=null,N=$.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(N!==void 0)A=N;else if(A=$.isPointLight===!0?l:o,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){let B=A.uuid,j=L.uuid,P=c[B];P===void 0&&(P={},c[B]=P);let W=P[j];W===void 0&&(W=A.clone(),P[j]=W,L.addEventListener("dispose",O)),A=W}if(A.visible=L.visible,A.wireframe=L.wireframe,S===Ri?A.side=L.shadowSide!==null?L.shadowSide:L.side:A.side=L.shadowSide!==null?L.shadowSide:f[L.side],A.alphaMap=L.alphaMap,A.alphaTest=L.alphaTest,A.map=L.map,A.clipShadows=L.clipShadows,A.clippingPlanes=L.clippingPlanes,A.clipIntersection=L.clipIntersection,A.displacementMap=L.displacementMap,A.displacementScale=L.displacementScale,A.displacementBias=L.displacementBias,A.wireframeLinewidth=L.wireframeLinewidth,A.linewidth=L.linewidth,$.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let B=i.properties.get(A);B.light=$}return A}function T(I,L,$,S,A){if(I.visible===!1)return;if(I.layers.test(L.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&A===Ri)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,I.matrixWorld);let j=e.update(I),P=I.material;if(Array.isArray(P)){let W=j.groups;for(let D=0,se=W.length;D<se;D++){let Y=W[D],Q=P[Y.materialIndex];if(Q&&Q.visible){let ie=y(I,Q,S,A);I.onBeforeShadow(i,I,L,$,j,ie,Y),i.renderBufferDirect($,null,j,ie,I,Y),I.onAfterShadow(i,I,L,$,j,ie,Y)}}}else if(P.visible){let W=y(I,P,S,A);I.onBeforeShadow(i,I,L,$,j,W,null),i.renderBufferDirect($,null,j,W,I,null),I.onAfterShadow(i,I,L,$,j,W,null)}}let B=I.children;for(let j=0,P=B.length;j<P;j++)T(B[j],L,$,S,A)}function O(I){I.target.removeEventListener("dispose",O);for(let $ in c){let S=c[$],A=I.target.uuid;A in S&&(S[A].dispose(),delete S[A])}}}function T0(i,e,t){let n=t.isWebGL2;function s(){let U=!1,Ie=new In,Le=null,tt=new In(0,0,0,0);return{setMask:function(Xe){Le!==Xe&&!U&&(i.colorMask(Xe,Xe,Xe,Xe),Le=Xe)},setLocked:function(Xe){U=Xe},setClear:function(Xe,At,Dt,Ut,vt){vt===!0&&(Xe*=Ut,At*=Ut,Dt*=Ut),Ie.set(Xe,At,Dt,Ut),tt.equals(Ie)===!1&&(i.clearColor(Xe,At,Dt,Ut),tt.copy(Ie))},reset:function(){U=!1,Le=null,tt.set(-1,0,0,0)}}}function r(){let U=!1,Ie=null,Le=null,tt=null;return{setTest:function(Xe){Xe?ut(i.DEPTH_TEST):We(i.DEPTH_TEST)},setMask:function(Xe){Ie!==Xe&&!U&&(i.depthMask(Xe),Ie=Xe)},setFunc:function(Xe){if(Le!==Xe){switch(Xe){case id:i.depthFunc(i.NEVER);break;case sd:i.depthFunc(i.ALWAYS);break;case rd:i.depthFunc(i.LESS);break;case fa:i.depthFunc(i.LEQUAL);break;case ad:i.depthFunc(i.EQUAL);break;case od:i.depthFunc(i.GEQUAL);break;case ld:i.depthFunc(i.GREATER);break;case cd:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Le=Xe}},setLocked:function(Xe){U=Xe},setClear:function(Xe){tt!==Xe&&(i.clearDepth(Xe),tt=Xe)},reset:function(){U=!1,Ie=null,Le=null,tt=null}}}function a(){let U=!1,Ie=null,Le=null,tt=null,Xe=null,At=null,Dt=null,Ut=null,vt=null;return{setTest:function(xt){U||(xt?ut(i.STENCIL_TEST):We(i.STENCIL_TEST))},setMask:function(xt){Ie!==xt&&!U&&(i.stencilMask(xt),Ie=xt)},setFunc:function(xt,Zt,en){(Le!==xt||tt!==Zt||Xe!==en)&&(i.stencilFunc(xt,Zt,en),Le=xt,tt=Zt,Xe=en)},setOp:function(xt,Zt,en){(At!==xt||Dt!==Zt||Ut!==en)&&(i.stencilOp(xt,Zt,en),At=xt,Dt=Zt,Ut=en)},setLocked:function(xt){U=xt},setClear:function(xt){vt!==xt&&(i.clearStencil(xt),vt=xt)},reset:function(){U=!1,Ie=null,Le=null,tt=null,Xe=null,At=null,Dt=null,Ut=null,vt=null}}}let o=new s,l=new r,c=new a,u=new WeakMap,f=new WeakMap,d={},h={},_=new WeakMap,v=[],g=null,p=!1,M=null,y=null,T=null,O=null,I=null,L=null,$=null,S=new gt(0,0,0),A=0,N=!1,B=null,j=null,P=null,W=null,D=null,se=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,Q=0,ie=i.getParameter(i.VERSION);ie.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(ie)[1]),Y=Q>=1):ie.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),Y=Q>=2);let he=null,xe={},te=i.getParameter(i.SCISSOR_BOX),fe=i.getParameter(i.VIEWPORT),Ce=new In().fromArray(te),Ve=new In().fromArray(fe);function Ge(U,Ie,Le,tt){let Xe=new Uint8Array(4),At=i.createTexture();i.bindTexture(U,At),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Dt=0;Dt<Le;Dt++)n&&(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)?i.texImage3D(Ie,0,i.RGBA,1,1,tt,0,i.RGBA,i.UNSIGNED_BYTE,Xe):i.texImage2D(Ie+Dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Xe);return At}let ot={};ot[i.TEXTURE_2D]=Ge(i.TEXTURE_2D,i.TEXTURE_2D,1),ot[i.TEXTURE_CUBE_MAP]=Ge(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ot[i.TEXTURE_2D_ARRAY]=Ge(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ot[i.TEXTURE_3D]=Ge(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ut(i.DEPTH_TEST),l.setFunc(fa),pt(!1),C(rc),ut(i.CULL_FACE),Ye(qi);function ut(U){d[U]!==!0&&(i.enable(U),d[U]=!0)}function We(U){d[U]!==!1&&(i.disable(U),d[U]=!1)}function Et(U,Ie){return h[U]!==Ie?(i.bindFramebuffer(U,Ie),h[U]=Ie,n&&(U===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Ie),U===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Ie)),!0):!1}function K(U,Ie){let Le=v,tt=!1;if(U)if(Le=_.get(Ie),Le===void 0&&(Le=[],_.set(Ie,Le)),U.isWebGLMultipleRenderTargets){let Xe=U.texture;if(Le.length!==Xe.length||Le[0]!==i.COLOR_ATTACHMENT0){for(let At=0,Dt=Xe.length;At<Dt;At++)Le[At]=i.COLOR_ATTACHMENT0+At;Le.length=Xe.length,tt=!0}}else Le[0]!==i.COLOR_ATTACHMENT0&&(Le[0]=i.COLOR_ATTACHMENT0,tt=!0);else Le[0]!==i.BACK&&(Le[0]=i.BACK,tt=!0);tt&&(t.isWebGL2?i.drawBuffers(Le):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Le))}function Qt(U){return g!==U?(i.useProgram(U),g=U,!0):!1}let je={[cs]:i.FUNC_ADD,[Vu]:i.FUNC_SUBTRACT,[Gu]:i.FUNC_REVERSE_SUBTRACT};if(n)je[cc]=i.MIN,je[hc]=i.MAX;else{let U=e.get("EXT_blend_minmax");U!==null&&(je[cc]=U.MIN_EXT,je[hc]=U.MAX_EXT)}let rt={[Wu]:i.ZERO,[Xu]:i.ONE,[qu]:i.SRC_COLOR,[Yo]:i.SRC_ALPHA,[ju]:i.SRC_ALPHA_SATURATE,[Ku]:i.DST_COLOR,[$u]:i.DST_ALPHA,[Yu]:i.ONE_MINUS_SRC_COLOR,[$o]:i.ONE_MINUS_SRC_ALPHA,[Ju]:i.ONE_MINUS_DST_COLOR,[Zu]:i.ONE_MINUS_DST_ALPHA,[Qu]:i.CONSTANT_COLOR,[ed]:i.ONE_MINUS_CONSTANT_COLOR,[td]:i.CONSTANT_ALPHA,[nd]:i.ONE_MINUS_CONSTANT_ALPHA};function Ye(U,Ie,Le,tt,Xe,At,Dt,Ut,vt,xt){if(U===qi){p===!0&&(We(i.BLEND),p=!1);return}if(p===!1&&(ut(i.BLEND),p=!0),U!==zu){if(U!==M||xt!==N){if((y!==cs||I!==cs)&&(i.blendEquation(i.FUNC_ADD),y=cs,I=cs),xt)switch(U){case Gs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ac:i.blendFunc(i.ONE,i.ONE);break;case oc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case lc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Gs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ac:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case oc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case lc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}T=null,O=null,L=null,$=null,S.set(0,0,0),A=0,M=U,N=xt}return}Xe=Xe||Ie,At=At||Le,Dt=Dt||tt,(Ie!==y||Xe!==I)&&(i.blendEquationSeparate(je[Ie],je[Xe]),y=Ie,I=Xe),(Le!==T||tt!==O||At!==L||Dt!==$)&&(i.blendFuncSeparate(rt[Le],rt[tt],rt[At],rt[Dt]),T=Le,O=tt,L=At,$=Dt),(Ut.equals(S)===!1||vt!==A)&&(i.blendColor(Ut.r,Ut.g,Ut.b,vt),S.copy(Ut),A=vt),M=U,N=!1}function Gt(U,Ie){U.side===hn?We(i.CULL_FACE):ut(i.CULL_FACE);let Le=U.side===$n;Ie&&(Le=!Le),pt(Le),U.blending===Gs&&U.transparent===!1?Ye(qi):Ye(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),o.setMask(U.colorWrite);let tt=U.stencilWrite;c.setTest(tt),tt&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),J(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ut(i.SAMPLE_ALPHA_TO_COVERAGE):We(i.SAMPLE_ALPHA_TO_COVERAGE)}function pt(U){B!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),B=U)}function C(U){U!==ku?(ut(i.CULL_FACE),U!==j&&(U===rc?i.cullFace(i.BACK):U===Hu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):We(i.CULL_FACE),j=U}function b(U){U!==P&&(Y&&i.lineWidth(U),P=U)}function J(U,Ie,Le){U?(ut(i.POLYGON_OFFSET_FILL),(W!==Ie||D!==Le)&&(i.polygonOffset(Ie,Le),W=Ie,D=Le)):We(i.POLYGON_OFFSET_FILL)}function Se(U){U?ut(i.SCISSOR_TEST):We(i.SCISSOR_TEST)}function _e(U){U===void 0&&(U=i.TEXTURE0+se-1),he!==U&&(i.activeTexture(U),he=U)}function Ee(U,Ie,Le){Le===void 0&&(he===null?Le=i.TEXTURE0+se-1:Le=he);let tt=xe[Le];tt===void 0&&(tt={type:void 0,texture:void 0},xe[Le]=tt),(tt.type!==U||tt.texture!==Ie)&&(he!==Le&&(i.activeTexture(Le),he=Le),i.bindTexture(U,Ie||ot[U]),tt.type=U,tt.texture=Ie)}function Ze(){let U=xe[he];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Pe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ke(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function it(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function lt(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function oe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ct(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function nt(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ht(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ke(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Oe(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Qe(U){Ce.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Ce.copy(U))}function Pt(U){Ve.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Ve.copy(U))}function He(U,Ie){let Le=f.get(Ie);Le===void 0&&(Le=new WeakMap,f.set(Ie,Le));let tt=Le.get(U);tt===void 0&&(tt=i.getUniformBlockIndex(Ie,U.name),Le.set(U,tt))}function De(U,Ie){let tt=f.get(Ie).get(U);u.get(Ie)!==tt&&(i.uniformBlockBinding(Ie,tt,U.__bindingPointIndex),u.set(Ie,tt))}function me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},he=null,xe={},h={},_=new WeakMap,v=[],g=null,p=!1,M=null,y=null,T=null,O=null,I=null,L=null,$=null,S=new gt(0,0,0),A=0,N=!1,B=null,j=null,P=null,W=null,D=null,Ce.set(0,0,i.canvas.width,i.canvas.height),Ve.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:ut,disable:We,bindFramebuffer:Et,drawBuffers:K,useProgram:Qt,setBlending:Ye,setMaterial:Gt,setFlipSided:pt,setCullFace:C,setLineWidth:b,setPolygonOffset:J,setScissorTest:Se,activeTexture:_e,bindTexture:Ee,unbindTexture:Ze,compressedTexImage2D:Pe,compressedTexImage3D:ke,texImage2D:Ke,texImage3D:Oe,updateUBOMapping:He,uniformBlockBinding:De,texStorage2D:nt,texStorage3D:ht,texSubImage2D:it,texSubImage3D:lt,compressedTexSubImage2D:oe,compressedTexSubImage3D:ct,scissor:Qe,viewport:Pt,reset:me}}function w0(i,e,t,n,s,r,a){let o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,f,d=new WeakMap,h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,b){return h?new OffscreenCanvas(C,b):va("canvas")}function v(C,b,J,Se){let _e=1;if((C.width>Se||C.height>Se)&&(_e=Se/Math.max(C.width,C.height)),_e<1||b===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){let Ee=b?el:Math.floor,Ze=Ee(_e*C.width),Pe=Ee(_e*C.height);f===void 0&&(f=_(Ze,Pe));let ke=J?_(Ze,Pe):f;return ke.width=Ze,ke.height=Pe,ke.getContext("2d").drawImage(C,0,0,Ze,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Ze+"x"+Pe+")."),ke}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function g(C){return Gc(C.width)&&Gc(C.height)}function p(C){return o?!1:C.wrapS!==pi||C.wrapT!==pi||C.minFilter!==Hn&&C.minFilter!==ii}function M(C,b){return C.generateMipmaps&&b&&C.minFilter!==Hn&&C.minFilter!==ii}function y(C){i.generateMipmap(C)}function T(C,b,J,Se,_e=!1){if(o===!1)return b;if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Ee=b;if(b===i.RED&&(J===i.FLOAT&&(Ee=i.R32F),J===i.HALF_FLOAT&&(Ee=i.R16F),J===i.UNSIGNED_BYTE&&(Ee=i.R8)),b===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(Ee=i.R8UI),J===i.UNSIGNED_SHORT&&(Ee=i.R16UI),J===i.UNSIGNED_INT&&(Ee=i.R32UI),J===i.BYTE&&(Ee=i.R8I),J===i.SHORT&&(Ee=i.R16I),J===i.INT&&(Ee=i.R32I)),b===i.RG&&(J===i.FLOAT&&(Ee=i.RG32F),J===i.HALF_FLOAT&&(Ee=i.RG16F),J===i.UNSIGNED_BYTE&&(Ee=i.RG8)),b===i.RGBA){let Ze=_e?ga:Ht.getTransfer(Se);J===i.FLOAT&&(Ee=i.RGBA32F),J===i.HALF_FLOAT&&(Ee=i.RGBA16F),J===i.UNSIGNED_BYTE&&(Ee=Ze===$t?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT_4_4_4_4&&(Ee=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(Ee=i.RGB5_A1)}return(Ee===i.R16F||Ee===i.R32F||Ee===i.RG16F||Ee===i.RG32F||Ee===i.RGBA16F||Ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Ee}function O(C,b,J){return M(C,J)===!0||C.isFramebufferTexture&&C.minFilter!==Hn&&C.minFilter!==ii?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function I(C){return C===Hn||C===uc||C===ho?i.NEAREST:i.LINEAR}function L(C){let b=C.target;b.removeEventListener("dispose",L),S(b),b.isVideoTexture&&u.delete(b)}function $(C){let b=C.target;b.removeEventListener("dispose",$),N(b)}function S(C){let b=n.get(C);if(b.__webglInit===void 0)return;let J=C.source,Se=d.get(J);if(Se){let _e=Se[b.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&A(C),Object.keys(Se).length===0&&d.delete(J)}n.remove(C)}function A(C){let b=n.get(C);i.deleteTexture(b.__webglTexture);let J=C.source,Se=d.get(J);delete Se[b.__cacheKey],a.memory.textures--}function N(C){let b=C.texture,J=n.get(C),Se=n.get(b);if(Se.__webglTexture!==void 0&&(i.deleteTexture(Se.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(J.__webglFramebuffer[_e]))for(let Ee=0;Ee<J.__webglFramebuffer[_e].length;Ee++)i.deleteFramebuffer(J.__webglFramebuffer[_e][Ee]);else i.deleteFramebuffer(J.__webglFramebuffer[_e]);J.__webglDepthbuffer&&i.deleteRenderbuffer(J.__webglDepthbuffer[_e])}else{if(Array.isArray(J.__webglFramebuffer))for(let _e=0;_e<J.__webglFramebuffer.length;_e++)i.deleteFramebuffer(J.__webglFramebuffer[_e]);else i.deleteFramebuffer(J.__webglFramebuffer);if(J.__webglDepthbuffer&&i.deleteRenderbuffer(J.__webglDepthbuffer),J.__webglMultisampledFramebuffer&&i.deleteFramebuffer(J.__webglMultisampledFramebuffer),J.__webglColorRenderbuffer)for(let _e=0;_e<J.__webglColorRenderbuffer.length;_e++)J.__webglColorRenderbuffer[_e]&&i.deleteRenderbuffer(J.__webglColorRenderbuffer[_e]);J.__webglDepthRenderbuffer&&i.deleteRenderbuffer(J.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let _e=0,Ee=b.length;_e<Ee;_e++){let Ze=n.get(b[_e]);Ze.__webglTexture&&(i.deleteTexture(Ze.__webglTexture),a.memory.textures--),n.remove(b[_e])}n.remove(b),n.remove(C)}let B=0;function j(){B=0}function P(){let C=B;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),B+=1,C}function W(C){let b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function D(C,b){let J=n.get(C);if(C.isVideoTexture&&Gt(C),C.isRenderTargetTexture===!1&&C.version>0&&J.__version!==C.version){let Se=C.image;if(Se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(J,C,b);return}}t.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+b)}function se(C,b){let J=n.get(C);if(C.version>0&&J.__version!==C.version){Ce(J,C,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+b)}function Y(C,b){let J=n.get(C);if(C.version>0&&J.__version!==C.version){Ce(J,C,b);return}t.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+b)}function Q(C,b){let J=n.get(C);if(C.version>0&&J.__version!==C.version){Ve(J,C,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+b)}let ie={[Mr]:i.REPEAT,[pi]:i.CLAMP_TO_EDGE,[Jo]:i.MIRRORED_REPEAT},he={[Hn]:i.NEAREST,[uc]:i.NEAREST_MIPMAP_NEAREST,[ho]:i.NEAREST_MIPMAP_LINEAR,[ii]:i.LINEAR,[_d]:i.LINEAR_MIPMAP_NEAREST,[br]:i.LINEAR_MIPMAP_LINEAR},xe={[Pd]:i.NEVER,[Od]:i.ALWAYS,[Id]:i.LESS,[jh]:i.LEQUAL,[Ld]:i.EQUAL,[Nd]:i.GEQUAL,[Dd]:i.GREATER,[Ud]:i.NOTEQUAL};function te(C,b,J){if(J?(i.texParameteri(C,i.TEXTURE_WRAP_S,ie[b.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,ie[b.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,ie[b.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,he[b.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,he[b.minFilter])):(i.texParameteri(C,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(C,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(b.wrapS!==pi||b.wrapT!==pi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(C,i.TEXTURE_MAG_FILTER,I(b.magFilter)),i.texParameteri(C,i.TEXTURE_MIN_FILTER,I(b.minFilter)),b.minFilter!==Hn&&b.minFilter!==ii&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,xe[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let Se=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===Hn||b.minFilter!==ho&&b.minFilter!==br||b.type===Xi&&e.has("OES_texture_float_linear")===!1||o===!1&&b.type===Sr&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(i.texParameterf(C,Se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function fe(C,b){let J=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",L));let Se=b.source,_e=d.get(Se);_e===void 0&&(_e={},d.set(Se,_e));let Ee=W(b);if(Ee!==C.__cacheKey){_e[Ee]===void 0&&(_e[Ee]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,J=!0),_e[Ee].usedTimes++;let Ze=_e[C.__cacheKey];Ze!==void 0&&(_e[C.__cacheKey].usedTimes--,Ze.usedTimes===0&&A(b)),C.__cacheKey=Ee,C.__webglTexture=_e[Ee].texture}return J}function Ce(C,b,J){let Se=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Se=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Se=i.TEXTURE_3D);let _e=fe(C,b),Ee=b.source;t.bindTexture(Se,C.__webglTexture,i.TEXTURE0+J);let Ze=n.get(Ee);if(Ee.version!==Ze.__version||_e===!0){t.activeTexture(i.TEXTURE0+J);let Pe=Ht.getPrimaries(Ht.workingColorSpace),ke=b.colorSpace===si?null:Ht.getPrimaries(b.colorSpace),it=b.colorSpace===si||Pe===ke?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let lt=p(b)&&g(b.image)===!1,oe=v(b.image,lt,!1,s.maxTextureSize);oe=pt(b,oe);let ct=g(oe)||o,nt=r.convert(b.format,b.colorSpace),ht=r.convert(b.type),Ke=T(b.internalFormat,nt,ht,b.colorSpace,b.isVideoTexture);te(Se,b,ct);let Oe,Qe=b.mipmaps,Pt=o&&b.isVideoTexture!==!0&&Ke!==Zh,He=Ze.__version===void 0||_e===!0,De=O(b,oe,ct);if(b.isDepthTexture)Ke=i.DEPTH_COMPONENT,o?b.type===Xi?Ke=i.DEPTH_COMPONENT32F:b.type===Wi?Ke=i.DEPTH_COMPONENT24:b.type===us?Ke=i.DEPTH24_STENCIL8:Ke=i.DEPTH_COMPONENT16:b.type===Xi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===ds&&Ke===i.DEPTH_COMPONENT&&b.type!==zl&&b.type!==Wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Wi,ht=r.convert(b.type)),b.format===$s&&Ke===i.DEPTH_COMPONENT&&(Ke=i.DEPTH_STENCIL,b.type!==us&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=us,ht=r.convert(b.type))),He&&(Pt?t.texStorage2D(i.TEXTURE_2D,1,Ke,oe.width,oe.height):t.texImage2D(i.TEXTURE_2D,0,Ke,oe.width,oe.height,0,nt,ht,null));else if(b.isDataTexture)if(Qe.length>0&&ct){Pt&&He&&t.texStorage2D(i.TEXTURE_2D,De,Ke,Qe[0].width,Qe[0].height);for(let me=0,U=Qe.length;me<U;me++)Oe=Qe[me],Pt?t.texSubImage2D(i.TEXTURE_2D,me,0,0,Oe.width,Oe.height,nt,ht,Oe.data):t.texImage2D(i.TEXTURE_2D,me,Ke,Oe.width,Oe.height,0,nt,ht,Oe.data);b.generateMipmaps=!1}else Pt?(He&&t.texStorage2D(i.TEXTURE_2D,De,Ke,oe.width,oe.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe.width,oe.height,nt,ht,oe.data)):t.texImage2D(i.TEXTURE_2D,0,Ke,oe.width,oe.height,0,nt,ht,oe.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Pt&&He&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,Ke,Qe[0].width,Qe[0].height,oe.depth);for(let me=0,U=Qe.length;me<U;me++)Oe=Qe[me],b.format!==mi?nt!==null?Pt?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,Oe.width,Oe.height,oe.depth,nt,Oe.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,me,Ke,Oe.width,Oe.height,oe.depth,0,Oe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pt?t.texSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,Oe.width,Oe.height,oe.depth,nt,ht,Oe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,me,Ke,Oe.width,Oe.height,oe.depth,0,nt,ht,Oe.data)}else{Pt&&He&&t.texStorage2D(i.TEXTURE_2D,De,Ke,Qe[0].width,Qe[0].height);for(let me=0,U=Qe.length;me<U;me++)Oe=Qe[me],b.format!==mi?nt!==null?Pt?t.compressedTexSubImage2D(i.TEXTURE_2D,me,0,0,Oe.width,Oe.height,nt,Oe.data):t.compressedTexImage2D(i.TEXTURE_2D,me,Ke,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pt?t.texSubImage2D(i.TEXTURE_2D,me,0,0,Oe.width,Oe.height,nt,ht,Oe.data):t.texImage2D(i.TEXTURE_2D,me,Ke,Oe.width,Oe.height,0,nt,ht,Oe.data)}else if(b.isDataArrayTexture)Pt?(He&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,Ke,oe.width,oe.height,oe.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,nt,ht,oe.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ke,oe.width,oe.height,oe.depth,0,nt,ht,oe.data);else if(b.isData3DTexture)Pt?(He&&t.texStorage3D(i.TEXTURE_3D,De,Ke,oe.width,oe.height,oe.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,nt,ht,oe.data)):t.texImage3D(i.TEXTURE_3D,0,Ke,oe.width,oe.height,oe.depth,0,nt,ht,oe.data);else if(b.isFramebufferTexture){if(He)if(Pt)t.texStorage2D(i.TEXTURE_2D,De,Ke,oe.width,oe.height);else{let me=oe.width,U=oe.height;for(let Ie=0;Ie<De;Ie++)t.texImage2D(i.TEXTURE_2D,Ie,Ke,me,U,0,nt,ht,null),me>>=1,U>>=1}}else if(Qe.length>0&&ct){Pt&&He&&t.texStorage2D(i.TEXTURE_2D,De,Ke,Qe[0].width,Qe[0].height);for(let me=0,U=Qe.length;me<U;me++)Oe=Qe[me],Pt?t.texSubImage2D(i.TEXTURE_2D,me,0,0,nt,ht,Oe):t.texImage2D(i.TEXTURE_2D,me,Ke,nt,ht,Oe);b.generateMipmaps=!1}else Pt?(He&&t.texStorage2D(i.TEXTURE_2D,De,Ke,oe.width,oe.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,nt,ht,oe)):t.texImage2D(i.TEXTURE_2D,0,Ke,nt,ht,oe);M(b,ct)&&y(Se),Ze.__version=Ee.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Ve(C,b,J){if(b.image.length!==6)return;let Se=fe(C,b),_e=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+J);let Ee=n.get(_e);if(_e.version!==Ee.__version||Se===!0){t.activeTexture(i.TEXTURE0+J);let Ze=Ht.getPrimaries(Ht.workingColorSpace),Pe=b.colorSpace===si?null:Ht.getPrimaries(b.colorSpace),ke=b.colorSpace===si||Ze===Pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let it=b.isCompressedTexture||b.image[0].isCompressedTexture,lt=b.image[0]&&b.image[0].isDataTexture,oe=[];for(let me=0;me<6;me++)!it&&!lt?oe[me]=v(b.image[me],!1,!0,s.maxCubemapSize):oe[me]=lt?b.image[me].image:b.image[me],oe[me]=pt(b,oe[me]);let ct=oe[0],nt=g(ct)||o,ht=r.convert(b.format,b.colorSpace),Ke=r.convert(b.type),Oe=T(b.internalFormat,ht,Ke,b.colorSpace),Qe=o&&b.isVideoTexture!==!0,Pt=Ee.__version===void 0||Se===!0,He=O(b,ct,nt);te(i.TEXTURE_CUBE_MAP,b,nt);let De;if(it){Qe&&Pt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,He,Oe,ct.width,ct.height);for(let me=0;me<6;me++){De=oe[me].mipmaps;for(let U=0;U<De.length;U++){let Ie=De[U];b.format!==mi?ht!==null?Qe?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,U,0,0,Ie.width,Ie.height,ht,Ie.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,U,Oe,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,U,0,0,Ie.width,Ie.height,ht,Ke,Ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,U,Oe,Ie.width,Ie.height,0,ht,Ke,Ie.data)}}}else{De=b.mipmaps,Qe&&Pt&&(De.length>0&&He++,t.texStorage2D(i.TEXTURE_CUBE_MAP,He,Oe,oe[0].width,oe[0].height));for(let me=0;me<6;me++)if(lt){Qe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,oe[me].width,oe[me].height,ht,Ke,oe[me].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,Oe,oe[me].width,oe[me].height,0,ht,Ke,oe[me].data);for(let U=0;U<De.length;U++){let Le=De[U].image[me].image;Qe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,U+1,0,0,Le.width,Le.height,ht,Ke,Le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,U+1,Oe,Le.width,Le.height,0,ht,Ke,Le.data)}}else{Qe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,ht,Ke,oe[me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,Oe,ht,Ke,oe[me]);for(let U=0;U<De.length;U++){let Ie=De[U];Qe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,U+1,0,0,ht,Ke,Ie.image[me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,U+1,Oe,ht,Ke,Ie.image[me])}}}M(b,nt)&&y(i.TEXTURE_CUBE_MAP),Ee.__version=_e.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Ge(C,b,J,Se,_e,Ee){let Ze=r.convert(J.format,J.colorSpace),Pe=r.convert(J.type),ke=T(J.internalFormat,Ze,Pe,J.colorSpace);if(!n.get(b).__hasExternalTextures){let lt=Math.max(1,b.width>>Ee),oe=Math.max(1,b.height>>Ee);_e===i.TEXTURE_3D||_e===i.TEXTURE_2D_ARRAY?t.texImage3D(_e,Ee,ke,lt,oe,b.depth,0,Ze,Pe,null):t.texImage2D(_e,Ee,ke,lt,oe,0,Ze,Pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),Ye(b)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Se,_e,n.get(J).__webglTexture,0,rt(b)):(_e===i.TEXTURE_2D||_e>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Se,_e,n.get(J).__webglTexture,Ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(C,b,J){if(i.bindRenderbuffer(i.RENDERBUFFER,C),b.depthBuffer&&!b.stencilBuffer){let Se=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(J||Ye(b)){let _e=b.depthTexture;_e&&_e.isDepthTexture&&(_e.type===Xi?Se=i.DEPTH_COMPONENT32F:_e.type===Wi&&(Se=i.DEPTH_COMPONENT24));let Ee=rt(b);Ye(b)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ee,Se,b.width,b.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,Se,b.width,b.height)}else i.renderbufferStorage(i.RENDERBUFFER,Se,b.width,b.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,C)}else if(b.depthBuffer&&b.stencilBuffer){let Se=rt(b);J&&Ye(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,i.DEPTH24_STENCIL8,b.width,b.height):Ye(b)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se,i.DEPTH24_STENCIL8,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,C)}else{let Se=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let _e=0;_e<Se.length;_e++){let Ee=Se[_e],Ze=r.convert(Ee.format,Ee.colorSpace),Pe=r.convert(Ee.type),ke=T(Ee.internalFormat,Ze,Pe,Ee.colorSpace),it=rt(b);J&&Ye(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,it,ke,b.width,b.height):Ye(b)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it,ke,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ke,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ut(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),D(b.depthTexture,0);let Se=n.get(b.depthTexture).__webglTexture,_e=rt(b);if(b.depthTexture.format===ds)Ye(b)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Se,0,_e):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Se,0);else if(b.depthTexture.format===$s)Ye(b)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Se,0,_e):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Se,0);else throw new Error("Unknown depthTexture format")}function We(C){let b=n.get(C),J=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");ut(b.__webglFramebuffer,C)}else if(J){b.__webglDepthbuffer=[];for(let Se=0;Se<6;Se++)t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[Se]),b.__webglDepthbuffer[Se]=i.createRenderbuffer(),ot(b.__webglDepthbuffer[Se],C,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=i.createRenderbuffer(),ot(b.__webglDepthbuffer,C,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Et(C,b,J){let Se=n.get(C);b!==void 0&&Ge(Se.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&We(C)}function K(C){let b=C.texture,J=n.get(C),Se=n.get(b);C.addEventListener("dispose",$),C.isWebGLMultipleRenderTargets!==!0&&(Se.__webglTexture===void 0&&(Se.__webglTexture=i.createTexture()),Se.__version=b.version,a.memory.textures++);let _e=C.isWebGLCubeRenderTarget===!0,Ee=C.isWebGLMultipleRenderTargets===!0,Ze=g(C)||o;if(_e){J.__webglFramebuffer=[];for(let Pe=0;Pe<6;Pe++)if(o&&b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer[Pe]=[];for(let ke=0;ke<b.mipmaps.length;ke++)J.__webglFramebuffer[Pe][ke]=i.createFramebuffer()}else J.__webglFramebuffer[Pe]=i.createFramebuffer()}else{if(o&&b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer=[];for(let Pe=0;Pe<b.mipmaps.length;Pe++)J.__webglFramebuffer[Pe]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(Ee)if(s.drawBuffers){let Pe=C.texture;for(let ke=0,it=Pe.length;ke<it;ke++){let lt=n.get(Pe[ke]);lt.__webglTexture===void 0&&(lt.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&Ye(C)===!1){let Pe=Ee?b:[b];J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let ke=0;ke<Pe.length;ke++){let it=Pe[ke];J.__webglColorRenderbuffer[ke]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[ke]);let lt=r.convert(it.format,it.colorSpace),oe=r.convert(it.type),ct=T(it.internalFormat,lt,oe,it.colorSpace,C.isXRRenderTarget===!0),nt=rt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,ct,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.RENDERBUFFER,J.__webglColorRenderbuffer[ke])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),ot(J.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(_e){t.bindTexture(i.TEXTURE_CUBE_MAP,Se.__webglTexture),te(i.TEXTURE_CUBE_MAP,b,Ze);for(let Pe=0;Pe<6;Pe++)if(o&&b.mipmaps&&b.mipmaps.length>0)for(let ke=0;ke<b.mipmaps.length;ke++)Ge(J.__webglFramebuffer[Pe][ke],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,ke);else Ge(J.__webglFramebuffer[Pe],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0);M(b,Ze)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){let Pe=C.texture;for(let ke=0,it=Pe.length;ke<it;ke++){let lt=Pe[ke],oe=n.get(lt);t.bindTexture(i.TEXTURE_2D,oe.__webglTexture),te(i.TEXTURE_2D,lt,Ze),Ge(J.__webglFramebuffer,C,lt,i.COLOR_ATTACHMENT0+ke,i.TEXTURE_2D,0),M(lt,Ze)&&y(i.TEXTURE_2D)}t.unbindTexture()}else{let Pe=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?Pe=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Pe,Se.__webglTexture),te(Pe,b,Ze),o&&b.mipmaps&&b.mipmaps.length>0)for(let ke=0;ke<b.mipmaps.length;ke++)Ge(J.__webglFramebuffer[ke],C,b,i.COLOR_ATTACHMENT0,Pe,ke);else Ge(J.__webglFramebuffer,C,b,i.COLOR_ATTACHMENT0,Pe,0);M(b,Ze)&&y(Pe),t.unbindTexture()}C.depthBuffer&&We(C)}function Qt(C){let b=g(C)||o,J=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let Se=0,_e=J.length;Se<_e;Se++){let Ee=J[Se];if(M(Ee,b)){let Ze=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Pe=n.get(Ee).__webglTexture;t.bindTexture(Ze,Pe),y(Ze),t.unbindTexture()}}}function je(C){if(o&&C.samples>0&&Ye(C)===!1){let b=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],J=C.width,Se=C.height,_e=i.COLOR_BUFFER_BIT,Ee=[],Ze=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=n.get(C),ke=C.isWebGLMultipleRenderTargets===!0;if(ke)for(let it=0;it<b.length;it++)t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let it=0;it<b.length;it++){Ee.push(i.COLOR_ATTACHMENT0+it),C.depthBuffer&&Ee.push(Ze);let lt=Pe.__ignoreDepthValues!==void 0?Pe.__ignoreDepthValues:!1;if(lt===!1&&(C.depthBuffer&&(_e|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&(_e|=i.STENCIL_BUFFER_BIT)),ke&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[it]),lt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ze]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ze])),ke){let oe=n.get(b[it]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,oe,0)}i.blitFramebuffer(0,0,J,Se,0,0,J,Se,_e,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ee)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ke)for(let it=0;it<b.length;it++){t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[it]);let lt=n.get(b[it]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.TEXTURE_2D,lt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}}function rt(C){return Math.min(s.maxSamples,C.samples)}function Ye(C){let b=n.get(C);return o&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Gt(C){let b=a.render.frame;u.get(C)!==b&&(u.set(C,b),C.update())}function pt(C,b){let J=C.colorSpace,Se=C.format,_e=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===jo||J!==Pi&&J!==si&&(Ht.getTransfer(J)===$t?o===!1?e.has("EXT_sRGB")===!0&&Se===mi?(C.format=jo,C.minFilter=ii,C.generateMipmaps=!1):b=Ma.sRGBToLinear(b):(Se!==mi||_e!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),b}this.allocateTextureUnit=P,this.resetTextureUnits=j,this.setTexture2D=D,this.setTexture2DArray=se,this.setTexture3D=Y,this.setTextureCube=Q,this.rebindTextures=Et,this.setupRenderTarget=K,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=Ge,this.useMultisampledRTT=Ye}function A0(i,e,t){let n=t.isWebGL2;function s(r,a=si){let o,l=Ht.getTransfer(a);if(r===$i)return i.UNSIGNED_BYTE;if(r===Wh)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Xh)return i.UNSIGNED_SHORT_5_5_5_1;if(r===yd)return i.BYTE;if(r===vd)return i.SHORT;if(r===zl)return i.UNSIGNED_SHORT;if(r===Gh)return i.INT;if(r===Wi)return i.UNSIGNED_INT;if(r===Xi)return i.FLOAT;if(r===Sr)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Md)return i.ALPHA;if(r===mi)return i.RGBA;if(r===bd)return i.LUMINANCE;if(r===Sd)return i.LUMINANCE_ALPHA;if(r===ds)return i.DEPTH_COMPONENT;if(r===$s)return i.DEPTH_STENCIL;if(r===jo)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Ed)return i.RED;if(r===qh)return i.RED_INTEGER;if(r===Td)return i.RG;if(r===Yh)return i.RG_INTEGER;if(r===$h)return i.RGBA_INTEGER;if(r===uo||r===fo||r===po||r===mo)if(l===$t)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===uo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===fo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===po)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===mo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===uo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===fo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===po)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===mo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===dc||r===fc||r===pc||r===mc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===dc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===fc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===pc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===mc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Zh)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===gc||r===xc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===gc)return l===$t?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===xc)return l===$t?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===_c||r===yc||r===vc||r===Mc||r===bc||r===Sc||r===Ec||r===Tc||r===wc||r===Ac||r===Rc||r===Cc||r===Pc||r===Ic)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===_c)return l===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===yc)return l===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===vc)return l===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Mc)return l===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===bc)return l===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Sc)return l===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ec)return l===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Tc)return l===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===wc)return l===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ac)return l===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Rc)return l===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Cc)return l===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Pc)return l===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ic)return l===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===go||r===Lc||r===Dc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===go)return l===$t?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Lc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Dc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===wd||r===Uc||r===Nc||r===Oc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===go)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Uc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Nc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Oc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===us?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var fl=class extends zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ri=class extends Vn{constructor(){super(),this.isGroup=!0,this.type="Group"}},R0={type:"move"},xr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ri,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ri,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ri,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,n),p=this._getHandJoint(c,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,_=.005;c.inputState.pinching&&d>h+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(R0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ri;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},pl=class extends Ki{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,_=null,v=t.getContextAttributes(),g=null,p=null,M=[],y=[],T=new Be,O=null,I=new zn;I.layers.enable(1),I.viewport=new In;let L=new zn;L.layers.enable(2),L.viewport=new In;let $=[I,L],S=new fl;S.layers.enable(1),S.layers.enable(2);let A=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let fe=M[te];return fe===void 0&&(fe=new xr,M[te]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(te){let fe=M[te];return fe===void 0&&(fe=new xr,M[te]=fe),fe.getGripSpace()},this.getHand=function(te){let fe=M[te];return fe===void 0&&(fe=new xr,M[te]=fe),fe.getHandSpace()};function B(te){let fe=y.indexOf(te.inputSource);if(fe===-1)return;let Ce=M[fe];Ce!==void 0&&(Ce.update(te.inputSource,te.frame,c||a),Ce.dispatchEvent({type:te.type,data:te.inputSource}))}function j(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",P);for(let te=0;te<M.length;te++){let fe=y[te];fe!==null&&(y[te]=null,M[te].disconnect(fe))}A=null,N=null,e.setRenderTarget(g),h=null,d=null,f=null,s=null,p=null,xe.stop(),n.isPresenting=!1,e.setPixelRatio(O),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",j),s.addEventListener("inputsourceschange",P),v.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(T),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let fe={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),p=new Ii(h.framebufferWidth,h.framebufferHeight,{format:mi,type:$i,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let fe=null,Ce=null,Ve=null;v.depth&&(Ve=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=v.stencil?$s:ds,Ce=v.stencil?us:Wi);let Ge={colorFormat:t.RGBA8,depthFormat:Ve,scaleFactor:r};f=new XRWebGLBinding(s,t),d=f.createProjectionLayer(Ge),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new Ii(d.textureWidth,d.textureHeight,{format:mi,type:$i,depthTexture:new Ia(d.textureWidth,d.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});let ot=e.properties.get(p);ot.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),xe.setContext(s),xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function P(te){for(let fe=0;fe<te.removed.length;fe++){let Ce=te.removed[fe],Ve=y.indexOf(Ce);Ve>=0&&(y[Ve]=null,M[Ve].disconnect(Ce))}for(let fe=0;fe<te.added.length;fe++){let Ce=te.added[fe],Ve=y.indexOf(Ce);if(Ve===-1){for(let ot=0;ot<M.length;ot++)if(ot>=y.length){y.push(Ce),Ve=ot;break}else if(y[ot]===null){y[ot]=Ce,Ve=ot;break}if(Ve===-1)break}let Ge=M[Ve];Ge&&Ge.connect(Ce)}}let W=new F,D=new F;function se(te,fe,Ce){W.setFromMatrixPosition(fe.matrixWorld),D.setFromMatrixPosition(Ce.matrixWorld);let Ve=W.distanceTo(D),Ge=fe.projectionMatrix.elements,ot=Ce.projectionMatrix.elements,ut=Ge[14]/(Ge[10]-1),We=Ge[14]/(Ge[10]+1),Et=(Ge[9]+1)/Ge[5],K=(Ge[9]-1)/Ge[5],Qt=(Ge[8]-1)/Ge[0],je=(ot[8]+1)/ot[0],rt=ut*Qt,Ye=ut*je,Gt=Ve/(-Qt+je),pt=Gt*-Qt;fe.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(pt),te.translateZ(Gt),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert();let C=ut+Gt,b=We+Gt,J=rt-pt,Se=Ye+(Ve-pt),_e=Et*We/b*C,Ee=K*We/b*C;te.projectionMatrix.makePerspective(J,Se,_e,Ee,C,b),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}function Y(te,fe){fe===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(fe.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;S.near=L.near=I.near=te.near,S.far=L.far=I.far=te.far,(A!==S.near||N!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),A=S.near,N=S.far);let fe=te.parent,Ce=S.cameras;Y(S,fe);for(let Ve=0;Ve<Ce.length;Ve++)Y(Ce[Ve],fe);Ce.length===2?se(S,I,L):S.projectionMatrix.copy(I.projectionMatrix),Q(te,S,fe)};function Q(te,fe,Ce){Ce===null?te.matrix.copy(fe.matrixWorld):(te.matrix.copy(Ce.matrixWorld),te.matrix.invert(),te.matrix.multiply(fe.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(fe.projectionMatrix),te.projectionMatrixInverse.copy(fe.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Qo*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(te){l=te,d!==null&&(d.fixedFoveation=te),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=te)};let ie=null;function he(te,fe){if(u=fe.getViewerPose(c||a),_=fe,u!==null){let Ce=u.views;h!==null&&(e.setRenderTargetFramebuffer(p,h.framebuffer),e.setRenderTarget(p));let Ve=!1;Ce.length!==S.cameras.length&&(S.cameras.length=0,Ve=!0);for(let Ge=0;Ge<Ce.length;Ge++){let ot=Ce[Ge],ut=null;if(h!==null)ut=h.getViewport(ot);else{let Et=f.getViewSubImage(d,ot);ut=Et.viewport,Ge===0&&(e.setRenderTargetTextures(p,Et.colorTexture,d.ignoreDepthValues?void 0:Et.depthStencilTexture),e.setRenderTarget(p))}let We=$[Ge];We===void 0&&(We=new zn,We.layers.enable(Ge),We.viewport=new In,$[Ge]=We),We.matrix.fromArray(ot.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(ot.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(ut.x,ut.y,ut.width,ut.height),Ge===0&&(S.matrix.copy(We.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Ve===!0&&S.cameras.push(We)}}for(let Ce=0;Ce<M.length;Ce++){let Ve=y[Ce],Ge=M[Ce];Ve!==null&&Ge!==void 0&&Ge.update(Ve,fe,c||a)}ie&&ie(te,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),_=null}let xe=new nu;xe.setAnimationLoop(he),this.setAnimationLoop=function(te){ie=te},this.dispose=function(){}}};function C0(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,tu(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,M,y,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),f(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&h(g,p,T)):p.isMeshMatcapMaterial?(r(g,p),_(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),v(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,M,y):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===$n&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===$n&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let M=e.get(p).envMap;if(M&&(g.envMap.value=M,g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;let y=i._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*y,t(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,M,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=y*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),e.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function h(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$n&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){let M=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function P0(i,e,t,n){let s={},r={},a=[],o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,y){let T=y.program;n.uniformBlockBinding(M,T)}function c(M,y){let T=s[M.id];T===void 0&&(_(M),T=u(M),s[M.id]=T,M.addEventListener("dispose",g));let O=y.program;n.updateUBOMapping(M,O);let I=e.render.frame;r[M.id]!==I&&(d(M),r[M.id]=I)}function u(M){let y=f();M.__bindingPointIndex=y;let T=i.createBuffer(),O=M.__size,I=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,O,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,T),T}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let y=s[M.id],T=M.uniforms,O=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let I=0,L=T.length;I<L;I++){let $=Array.isArray(T[I])?T[I]:[T[I]];for(let S=0,A=$.length;S<A;S++){let N=$[S];if(h(N,I,S,O)===!0){let B=N.__offset,j=Array.isArray(N.value)?N.value:[N.value],P=0;for(let W=0;W<j.length;W++){let D=j[W],se=v(D);typeof D=="number"||typeof D=="boolean"?(N.__data[0]=D,i.bufferSubData(i.UNIFORM_BUFFER,B+P,N.__data)):D.isMatrix3?(N.__data[0]=D.elements[0],N.__data[1]=D.elements[1],N.__data[2]=D.elements[2],N.__data[3]=0,N.__data[4]=D.elements[3],N.__data[5]=D.elements[4],N.__data[6]=D.elements[5],N.__data[7]=0,N.__data[8]=D.elements[6],N.__data[9]=D.elements[7],N.__data[10]=D.elements[8],N.__data[11]=0):(D.toArray(N.__data,P),P+=se.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(M,y,T,O){let I=M.value,L=y+"_"+T;if(O[L]===void 0)return typeof I=="number"||typeof I=="boolean"?O[L]=I:O[L]=I.clone(),!0;{let $=O[L];if(typeof I=="number"||typeof I=="boolean"){if($!==I)return O[L]=I,!0}else if($.equals(I)===!1)return $.copy(I),!0}return!1}function _(M){let y=M.uniforms,T=0,O=16;for(let L=0,$=y.length;L<$;L++){let S=Array.isArray(y[L])?y[L]:[y[L]];for(let A=0,N=S.length;A<N;A++){let B=S[A],j=Array.isArray(B.value)?B.value:[B.value];for(let P=0,W=j.length;P<W;P++){let D=j[P],se=v(D),Y=T%O;Y!==0&&O-Y<se.boundary&&(T+=O-Y),B.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=T,T+=se.storage}}}let I=T%O;return I>0&&(T+=O-I),M.__size=T,M.__cache={},this}function v(M){let y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function g(M){let y=M.target;y.removeEventListener("dispose",g);let T=a.indexOf(y.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Ar=class{constructor(e={}){let{canvas:t=Bd(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let h=new Uint32Array(4),_=new Int32Array(4),v=null,g=null,p=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ln,this._useLegacyLights=!1,this.toneMapping=Yi,this.toneMappingExposure=1;let y=this,T=!1,O=0,I=0,L=null,$=-1,S=null,A=new In,N=new In,B=null,j=new gt(0),P=0,W=t.width,D=t.height,se=1,Y=null,Q=null,ie=new In(0,0,W,D),he=new In(0,0,W,D),xe=!1,te=new wr,fe=!1,Ce=!1,Ve=null,Ge=new _n,ot=new Be,ut=new F,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Et(){return L===null?se:1}let K=n;function Qt(E,X){for(let ee=0;ee<E.length;ee++){let ne=E[ee],q=t.getContext(ne,X);if(q!==null)return q}return null}try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${kl}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",U,!1),t.addEventListener("webglcontextcreationerror",Ie,!1),K===null){let X=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&X.shift(),K=Qt(X,E),K===null)throw Qt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&K instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),K.getShaderPrecisionFormat===void 0&&(K.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let je,rt,Ye,Gt,pt,C,b,J,Se,_e,Ee,Ze,Pe,ke,it,lt,oe,ct,nt,ht,Ke,Oe,Qe,Pt;function He(){je=new Zm(K),rt=new Gm(K,je,e),je.init(rt),Oe=new A0(K,je,rt),Ye=new T0(K,je,rt),Gt=new jm(K),pt=new f0,C=new w0(K,je,Ye,pt,rt,Oe,Gt),b=new Xm(y),J=new $m(y),Se=new af(K,rt),Qe=new zm(K,je,Se,rt),_e=new Km(K,Se,Gt,Qe),Ee=new ng(K,_e,Se,Gt),nt=new tg(K,rt,C),lt=new Wm(pt),Ze=new d0(y,b,J,je,rt,Qe,lt),Pe=new C0(y,pt),ke=new m0,it=new M0(je,rt),ct=new Hm(y,b,J,Ye,Ee,d,l),oe=new E0(y,Ee,rt),Pt=new P0(K,Gt,rt,Ye),ht=new Vm(K,je,Gt,rt),Ke=new Jm(K,je,Gt,rt),Gt.programs=Ze.programs,y.capabilities=rt,y.extensions=je,y.properties=pt,y.renderLists=ke,y.shadowMap=oe,y.state=Ye,y.info=Gt}He();let De=new pl(y,K);this.xr=De,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){let E=je.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=je.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(E){E!==void 0&&(se=E,this.setSize(W,D,!1))},this.getSize=function(E){return E.set(W,D)},this.setSize=function(E,X,ee=!0){if(De.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=E,D=X,t.width=Math.floor(E*se),t.height=Math.floor(X*se),ee===!0&&(t.style.width=E+"px",t.style.height=X+"px"),this.setViewport(0,0,E,X)},this.getDrawingBufferSize=function(E){return E.set(W*se,D*se).floor()},this.setDrawingBufferSize=function(E,X,ee){W=E,D=X,se=ee,t.width=Math.floor(E*ee),t.height=Math.floor(X*ee),this.setViewport(0,0,E,X)},this.getCurrentViewport=function(E){return E.copy(A)},this.getViewport=function(E){return E.copy(ie)},this.setViewport=function(E,X,ee,ne){E.isVector4?ie.set(E.x,E.y,E.z,E.w):ie.set(E,X,ee,ne),Ye.viewport(A.copy(ie).multiplyScalar(se).floor())},this.getScissor=function(E){return E.copy(he)},this.setScissor=function(E,X,ee,ne){E.isVector4?he.set(E.x,E.y,E.z,E.w):he.set(E,X,ee,ne),Ye.scissor(N.copy(he).multiplyScalar(se).floor())},this.getScissorTest=function(){return xe},this.setScissorTest=function(E){Ye.setScissorTest(xe=E)},this.setOpaqueSort=function(E){Y=E},this.setTransparentSort=function(E){Q=E},this.getClearColor=function(E){return E.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor.apply(ct,arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha.apply(ct,arguments)},this.clear=function(E=!0,X=!0,ee=!0){let ne=0;if(E){let q=!1;if(L!==null){let Ne=L.texture.format;q=Ne===$h||Ne===Yh||Ne===qh}if(q){let Ne=L.texture.type,$e=Ne===$i||Ne===Wi||Ne===zl||Ne===us||Ne===Wh||Ne===Xh,ze=ct.getClearColor(),at=ct.getClearAlpha(),Mt=ze.r,ft=ze.g,mt=ze.b;$e?(h[0]=Mt,h[1]=ft,h[2]=mt,h[3]=at,K.clearBufferuiv(K.COLOR,0,h)):(_[0]=Mt,_[1]=ft,_[2]=mt,_[3]=at,K.clearBufferiv(K.COLOR,0,_))}else ne|=K.COLOR_BUFFER_BIT}X&&(ne|=K.DEPTH_BUFFER_BIT),ee&&(ne|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",U,!1),t.removeEventListener("webglcontextcreationerror",Ie,!1),ke.dispose(),it.dispose(),pt.dispose(),b.dispose(),J.dispose(),Ee.dispose(),Qe.dispose(),Pt.dispose(),Ze.dispose(),De.dispose(),De.removeEventListener("sessionstart",vt),De.removeEventListener("sessionend",xt),Ve&&(Ve.dispose(),Ve=null),Zt.stop()};function me(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let E=Gt.autoReset,X=oe.enabled,ee=oe.autoUpdate,ne=oe.needsUpdate,q=oe.type;He(),Gt.autoReset=E,oe.enabled=X,oe.autoUpdate=ee,oe.needsUpdate=ne,oe.type=q}function Ie(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Le(E){let X=E.target;X.removeEventListener("dispose",Le),tt(X)}function tt(E){Xe(E),pt.remove(E)}function Xe(E){let X=pt.get(E).programs;X!==void 0&&(X.forEach(function(ee){Ze.releaseProgram(ee)}),E.isShaderMaterial&&Ze.releaseShaderCache(E))}this.renderBufferDirect=function(E,X,ee,ne,q,Ne){X===null&&(X=We);let $e=q.isMesh&&q.matrixWorld.determinant()<0,ze=ir(E,X,ee,ne,q);Ye.setMaterial(ne,$e);let at=ee.index,Mt=1;if(ne.wireframe===!0){if(at=_e.getWireframeAttribute(ee),at===void 0)return;Mt=2}let ft=ee.drawRange,mt=ee.attributes.position,tn=ft.start*Mt,Kt=(ft.start+ft.count)*Mt;Ne!==null&&(tn=Math.max(tn,Ne.start*Mt),Kt=Math.min(Kt,(Ne.start+Ne.count)*Mt)),at!==null?(tn=Math.max(tn,0),Kt=Math.min(Kt,at.count)):mt!=null&&(tn=Math.max(tn,0),Kt=Math.min(Kt,mt.count));let mn=Kt-tn;if(mn<0||mn===1/0)return;Qe.setup(q,ne,ze,ee,at);let ci,Xt=ht;if(at!==null&&(ci=Se.get(at),Xt=Ke,Xt.setIndex(ci)),q.isMesh)ne.wireframe===!0?(Ye.setLineWidth(ne.wireframeLinewidth*Et()),Xt.setMode(K.LINES)):Xt.setMode(K.TRIANGLES);else if(q.isLine){let _t=ne.linewidth;_t===void 0&&(_t=1),Ye.setLineWidth(_t*Et()),q.isLineSegments?Xt.setMode(K.LINES):q.isLineLoop?Xt.setMode(K.LINE_LOOP):Xt.setMode(K.LINE_STRIP)}else q.isPoints?Xt.setMode(K.POINTS):q.isSprite&&Xt.setMode(K.TRIANGLES);if(q.isBatchedMesh)Xt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else if(q.isInstancedMesh)Xt.renderInstances(tn,mn,q.count);else if(ee.isInstancedBufferGeometry){let _t=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Wn=Math.min(ee.instanceCount,_t);Xt.renderInstances(tn,mn,Wn)}else Xt.render(tn,mn)};function At(E,X,ee){E.transparent===!0&&E.side===hn&&E.forceSinglePass===!1?(E.side=$n,E.needsUpdate=!0,ts(E,X,ee),E.side=Zi,E.needsUpdate=!0,ts(E,X,ee),E.side=hn):ts(E,X,ee)}this.compile=function(E,X,ee=null){ee===null&&(ee=E),g=it.get(ee),g.init(),M.push(g),ee.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(g.pushLight(q),q.castShadow&&g.pushShadow(q))}),E!==ee&&E.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(g.pushLight(q),q.castShadow&&g.pushShadow(q))}),g.setupLights(y._useLegacyLights);let ne=new Set;return E.traverse(function(q){let Ne=q.material;if(Ne)if(Array.isArray(Ne))for(let $e=0;$e<Ne.length;$e++){let ze=Ne[$e];At(ze,ee,q),ne.add(ze)}else At(Ne,ee,q),ne.add(Ne)}),M.pop(),g=null,ne},this.compileAsync=function(E,X,ee=null){let ne=this.compile(E,X,ee);return new Promise(q=>{function Ne(){if(ne.forEach(function($e){pt.get($e).currentProgram.isReady()&&ne.delete($e)}),ne.size===0){q(E);return}setTimeout(Ne,10)}je.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let Dt=null;function Ut(E){Dt&&Dt(E)}function vt(){Zt.stop()}function xt(){Zt.start()}let Zt=new nu;Zt.setAnimationLoop(Ut),typeof self<"u"&&Zt.setContext(self),this.setAnimationLoop=function(E){Dt=E,De.setAnimationLoop(E),E===null?Zt.stop():Zt.start()},De.addEventListener("sessionstart",vt),De.addEventListener("sessionend",xt),this.render=function(E,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(De.cameraAutoUpdate===!0&&De.updateCamera(X),X=De.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,X,L),g=it.get(E,M.length),g.init(),M.push(g),Ge.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),te.setFromProjectionMatrix(Ge),Ce=this.localClippingEnabled,fe=lt.init(this.clippingPlanes,Ce),v=ke.get(E,p.length),v.init(),p.push(v),en(E,X,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(Y,Q),this.info.render.frame++,fe===!0&&lt.beginShadows();let ee=g.state.shadowsArray;if(oe.render(ee,E,X),fe===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset(),ct.render(v,E),g.setupLights(y._useLegacyLights),X.isArrayCamera){let ne=X.cameras;for(let q=0,Ne=ne.length;q<Ne;q++){let $e=ne[q];Bn(v,E,$e,$e.viewport)}}else Bn(v,E,X);L!==null&&(C.updateMultisampleRenderTarget(L),C.updateRenderTargetMipmap(L)),E.isScene===!0&&E.onAfterRender(y,E,X),Qe.resetDefaultState(),$=-1,S=null,M.pop(),M.length>0?g=M[M.length-1]:g=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function en(E,X,ee,ne){if(E.visible===!1)return;if(E.layers.test(X.layers)){if(E.isGroup)ee=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(X);else if(E.isLight)g.pushLight(E),E.castShadow&&g.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||te.intersectsSprite(E)){ne&&ut.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ge);let $e=Ee.update(E),ze=E.material;ze.visible&&v.push(E,$e,ze,ee,ut.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||te.intersectsObject(E))){let $e=Ee.update(E),ze=E.material;if(ne&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ut.copy(E.boundingSphere.center)):($e.boundingSphere===null&&$e.computeBoundingSphere(),ut.copy($e.boundingSphere.center)),ut.applyMatrix4(E.matrixWorld).applyMatrix4(Ge)),Array.isArray(ze)){let at=$e.groups;for(let Mt=0,ft=at.length;Mt<ft;Mt++){let mt=at[Mt],tn=ze[mt.materialIndex];tn&&tn.visible&&v.push(E,$e,tn,ee,ut.z,mt)}}else ze.visible&&v.push(E,$e,ze,ee,ut.z,null)}}let Ne=E.children;for(let $e=0,ze=Ne.length;$e<ze;$e++)en(Ne[$e],X,ee,ne)}function Bn(E,X,ee,ne){let q=E.opaque,Ne=E.transmissive,$e=E.transparent;g.setupLightsView(ee),fe===!0&&lt.setGlobalState(y.clippingPlanes,ee),Ne.length>0&&Jn(q,Ne,X,ee),ne&&Ye.viewport(A.copy(ne)),q.length>0&&_i(q,X,ee),Ne.length>0&&_i(Ne,X,ee),$e.length>0&&_i($e,X,ee),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function Jn(E,X,ee,ne){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;let Ne=rt.isWebGL2;Ve===null&&(Ve=new Ii(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")?Sr:$i,minFilter:br,samples:Ne?4:0})),y.getDrawingBufferSize(ot),Ne?Ve.setSize(ot.x,ot.y):Ve.setSize(el(ot.x),el(ot.y));let $e=y.getRenderTarget();y.setRenderTarget(Ve),y.getClearColor(j),P=y.getClearAlpha(),P<1&&y.setClearColor(16777215,.5),y.clear();let ze=y.toneMapping;y.toneMapping=Yi,_i(E,ee,ne),C.updateMultisampleRenderTarget(Ve),C.updateRenderTargetMipmap(Ve);let at=!1;for(let Mt=0,ft=X.length;Mt<ft;Mt++){let mt=X[Mt],tn=mt.object,Kt=mt.geometry,mn=mt.material,ci=mt.group;if(mn.side===hn&&tn.layers.test(ne.layers)){let Xt=mn.side;mn.side=$n,mn.needsUpdate=!0,li(tn,ee,ne,Kt,mn,ci),mn.side=Xt,mn.needsUpdate=!0,at=!0}}at===!0&&(C.updateMultisampleRenderTarget(Ve),C.updateRenderTargetMipmap(Ve)),y.setRenderTarget($e),y.setClearColor(j,P),y.toneMapping=ze}function _i(E,X,ee){let ne=X.isScene===!0?X.overrideMaterial:null;for(let q=0,Ne=E.length;q<Ne;q++){let $e=E[q],ze=$e.object,at=$e.geometry,Mt=ne===null?$e.material:ne,ft=$e.group;ze.layers.test(ee.layers)&&li(ze,X,ee,at,Mt,ft)}}function li(E,X,ee,ne,q,Ne){E.onBeforeRender(y,X,ee,ne,q,Ne),E.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),q.onBeforeRender(y,X,ee,ne,E,Ne),q.transparent===!0&&q.side===hn&&q.forceSinglePass===!1?(q.side=$n,q.needsUpdate=!0,y.renderBufferDirect(ee,X,ne,q,E,Ne),q.side=Zi,q.needsUpdate=!0,y.renderBufferDirect(ee,X,ne,q,E,Ne),q.side=hn):y.renderBufferDirect(ee,X,ne,q,E,Ne),E.onAfterRender(y,X,ee,ne,q,Ne)}function ts(E,X,ee){X.isScene!==!0&&(X=We);let ne=pt.get(E),q=g.state.lights,Ne=g.state.shadowsArray,$e=q.state.version,ze=Ze.getParameters(E,q.state,Ne,X,ee),at=Ze.getProgramCacheKey(ze),Mt=ne.programs;ne.environment=E.isMeshStandardMaterial?X.environment:null,ne.fog=X.fog,ne.envMap=(E.isMeshStandardMaterial?J:b).get(E.envMap||ne.environment),Mt===void 0&&(E.addEventListener("dispose",Le),Mt=new Map,ne.programs=Mt);let ft=Mt.get(at);if(ft!==void 0){if(ne.currentProgram===ft&&ne.lightsStateVersion===$e)return Ui(E,ze),ft}else ze.uniforms=Ze.getUniforms(E),E.onBuild(ee,ze,y),E.onBeforeCompile(ze,y),ft=Ze.acquireProgram(ze,at),Mt.set(at,ft),ne.uniforms=ze.uniforms;let mt=ne.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(mt.clippingPlanes=lt.uniform),Ui(E,ze),ne.needsLights=to(E),ne.lightsStateVersion=$e,ne.needsLights&&(mt.ambientLightColor.value=q.state.ambient,mt.lightProbe.value=q.state.probe,mt.directionalLights.value=q.state.directional,mt.directionalLightShadows.value=q.state.directionalShadow,mt.spotLights.value=q.state.spot,mt.spotLightShadows.value=q.state.spotShadow,mt.rectAreaLights.value=q.state.rectArea,mt.ltc_1.value=q.state.rectAreaLTC1,mt.ltc_2.value=q.state.rectAreaLTC2,mt.pointLights.value=q.state.point,mt.pointLightShadows.value=q.state.pointShadow,mt.hemisphereLights.value=q.state.hemi,mt.directionalShadowMap.value=q.state.directionalShadowMap,mt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,mt.spotShadowMap.value=q.state.spotShadowMap,mt.spotLightMatrix.value=q.state.spotLightMatrix,mt.spotLightMap.value=q.state.spotLightMap,mt.pointShadowMap.value=q.state.pointShadowMap,mt.pointShadowMatrix.value=q.state.pointShadowMatrix),ne.currentProgram=ft,ne.uniformsList=null,ft}function dn(E){if(E.uniformsList===null){let X=E.currentProgram.getUniforms();E.uniformsList=Xs.seqWithValue(X.seq,E.uniforms)}return E.uniformsList}function Ui(E,X){let ee=pt.get(E);ee.outputColorSpace=X.outputColorSpace,ee.batching=X.batching,ee.instancing=X.instancing,ee.instancingColor=X.instancingColor,ee.skinning=X.skinning,ee.morphTargets=X.morphTargets,ee.morphNormals=X.morphNormals,ee.morphColors=X.morphColors,ee.morphTargetsCount=X.morphTargetsCount,ee.numClippingPlanes=X.numClippingPlanes,ee.numIntersection=X.numClipIntersection,ee.vertexAlphas=X.vertexAlphas,ee.vertexTangents=X.vertexTangents,ee.toneMapping=X.toneMapping}function ir(E,X,ee,ne,q){X.isScene!==!0&&(X=We),C.resetTextureUnits();let Ne=X.fog,$e=ne.isMeshStandardMaterial?X.environment:null,ze=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Pi,at=(ne.isMeshStandardMaterial?J:b).get(ne.envMap||$e),Mt=ne.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,ft=!!ee.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),mt=!!ee.morphAttributes.position,tn=!!ee.morphAttributes.normal,Kt=!!ee.morphAttributes.color,mn=Yi;ne.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(mn=y.toneMapping);let ci=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Xt=ci!==void 0?ci.length:0,_t=pt.get(ne),Wn=g.state.lights;if(fe===!0&&(Ce===!0||E!==S)){let Xn=E===S&&ne.id===$;lt.setState(ne,E,Xn)}let qt=!1;ne.version===_t.__version?(_t.needsLights&&_t.lightsStateVersion!==Wn.state.version||_t.outputColorSpace!==ze||q.isBatchedMesh&&_t.batching===!1||!q.isBatchedMesh&&_t.batching===!0||q.isInstancedMesh&&_t.instancing===!1||!q.isInstancedMesh&&_t.instancing===!0||q.isSkinnedMesh&&_t.skinning===!1||!q.isSkinnedMesh&&_t.skinning===!0||q.isInstancedMesh&&_t.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&_t.instancingColor===!1&&q.instanceColor!==null||_t.envMap!==at||ne.fog===!0&&_t.fog!==Ne||_t.numClippingPlanes!==void 0&&(_t.numClippingPlanes!==lt.numPlanes||_t.numIntersection!==lt.numIntersection)||_t.vertexAlphas!==Mt||_t.vertexTangents!==ft||_t.morphTargets!==mt||_t.morphNormals!==tn||_t.morphColors!==Kt||_t.toneMapping!==mn||rt.isWebGL2===!0&&_t.morphTargetsCount!==Xt)&&(qt=!0):(qt=!0,_t.__version=ne.version);let ei=_t.currentProgram;qt===!0&&(ei=ts(ne,X,q));let sr=!1,ns=!1,is=!1,yn=ei.getUniforms(),yi=_t.uniforms;if(Ye.useProgram(ei.program)&&(sr=!0,ns=!0,is=!0),ne.id!==$&&($=ne.id,ns=!0),sr||S!==E){yn.setValue(K,"projectionMatrix",E.projectionMatrix),yn.setValue(K,"viewMatrix",E.matrixWorldInverse);let Xn=yn.map.cameraPosition;Xn!==void 0&&Xn.setValue(K,ut.setFromMatrixPosition(E.matrixWorld)),rt.logarithmicDepthBuffer&&yn.setValue(K,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&yn.setValue(K,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,ns=!0,is=!0)}if(q.isSkinnedMesh){yn.setOptional(K,q,"bindMatrix"),yn.setOptional(K,q,"bindMatrixInverse");let Xn=q.skeleton;Xn&&(rt.floatVertexTextures?(Xn.boneTexture===null&&Xn.computeBoneTexture(),yn.setValue(K,"boneTexture",Xn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}q.isBatchedMesh&&(yn.setOptional(K,q,"batchingTexture"),yn.setValue(K,"batchingTexture",q._matricesTexture,C));let Nt=ee.morphAttributes;if((Nt.position!==void 0||Nt.normal!==void 0||Nt.color!==void 0&&rt.isWebGL2===!0)&&nt.update(q,ee,ei),(ns||_t.receiveShadow!==q.receiveShadow)&&(_t.receiveShadow=q.receiveShadow,yn.setValue(K,"receiveShadow",q.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(yi.envMap.value=at,yi.flipEnvMap.value=at.isCubeTexture&&at.isRenderTargetTexture===!1?-1:1),ns&&(yn.setValue(K,"toneMappingExposure",y.toneMappingExposure),_t.needsLights&&eo(yi,is),Ne&&ne.fog===!0&&Pe.refreshFogUniforms(yi,Ne),Pe.refreshMaterialUniforms(yi,ne,se,D,Ve),Xs.upload(K,dn(_t),yi,C)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Xs.upload(K,dn(_t),yi,C),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&yn.setValue(K,"center",q.center),yn.setValue(K,"modelViewMatrix",q.modelViewMatrix),yn.setValue(K,"normalMatrix",q.normalMatrix),yn.setValue(K,"modelMatrix",q.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){let Xn=ne.uniformsGroups;for(let Ft=0,vs=Xn.length;Ft<vs;Ft++)if(rt.isWebGL2){let rr=Xn[Ft];Pt.update(rr,ei),Pt.bind(rr,ei)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ei}function eo(E,X){E.ambientLightColor.needsUpdate=X,E.lightProbe.needsUpdate=X,E.directionalLights.needsUpdate=X,E.directionalLightShadows.needsUpdate=X,E.pointLights.needsUpdate=X,E.pointLightShadows.needsUpdate=X,E.spotLights.needsUpdate=X,E.spotLightShadows.needsUpdate=X,E.rectAreaLights.needsUpdate=X,E.hemisphereLights.needsUpdate=X}function to(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(E,X,ee){pt.get(E.texture).__webglTexture=X,pt.get(E.depthTexture).__webglTexture=ee;let ne=pt.get(E);ne.__hasExternalTextures=!0,ne.__hasExternalTextures&&(ne.__autoAllocateDepthBuffer=ee===void 0,ne.__autoAllocateDepthBuffer||je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,X){let ee=pt.get(E);ee.__webglFramebuffer=X,ee.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(E,X=0,ee=0){L=E,O=X,I=ee;let ne=!0,q=null,Ne=!1,$e=!1;if(E){let at=pt.get(E);at.__useDefaultFramebuffer!==void 0?(Ye.bindFramebuffer(K.FRAMEBUFFER,null),ne=!1):at.__webglFramebuffer===void 0?C.setupRenderTarget(E):at.__hasExternalTextures&&C.rebindTextures(E,pt.get(E.texture).__webglTexture,pt.get(E.depthTexture).__webglTexture);let Mt=E.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&($e=!0);let ft=pt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ft[X])?q=ft[X][ee]:q=ft[X],Ne=!0):rt.isWebGL2&&E.samples>0&&C.useMultisampledRTT(E)===!1?q=pt.get(E).__webglMultisampledFramebuffer:Array.isArray(ft)?q=ft[ee]:q=ft,A.copy(E.viewport),N.copy(E.scissor),B=E.scissorTest}else A.copy(ie).multiplyScalar(se).floor(),N.copy(he).multiplyScalar(se).floor(),B=xe;if(Ye.bindFramebuffer(K.FRAMEBUFFER,q)&&rt.drawBuffers&&ne&&Ye.drawBuffers(E,q),Ye.viewport(A),Ye.scissor(N),Ye.setScissorTest(B),Ne){let at=pt.get(E.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+X,at.__webglTexture,ee)}else if($e){let at=pt.get(E.texture),Mt=X||0;K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,at.__webglTexture,ee||0,Mt)}$=-1},this.readRenderTargetPixels=function(E,X,ee,ne,q,Ne,$e){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=pt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&$e!==void 0&&(ze=ze[$e]),ze){Ye.bindFramebuffer(K.FRAMEBUFFER,ze);try{let at=E.texture,Mt=at.format,ft=at.type;if(Mt!==mi&&Oe.convert(Mt)!==K.getParameter(K.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let mt=ft===Sr&&(je.has("EXT_color_buffer_half_float")||rt.isWebGL2&&je.has("EXT_color_buffer_float"));if(ft!==$i&&Oe.convert(ft)!==K.getParameter(K.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ft===Xi&&(rt.isWebGL2||je.has("OES_texture_float")||je.has("WEBGL_color_buffer_float")))&&!mt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=E.width-ne&&ee>=0&&ee<=E.height-q&&K.readPixels(X,ee,ne,q,Oe.convert(Mt),Oe.convert(ft),Ne)}finally{let at=L!==null?pt.get(L).__webglFramebuffer:null;Ye.bindFramebuffer(K.FRAMEBUFFER,at)}}},this.copyFramebufferToTexture=function(E,X,ee=0){let ne=Math.pow(2,-ee),q=Math.floor(X.image.width*ne),Ne=Math.floor(X.image.height*ne);C.setTexture2D(X,0),K.copyTexSubImage2D(K.TEXTURE_2D,ee,0,0,E.x,E.y,q,Ne),Ye.unbindTexture()},this.copyTextureToTexture=function(E,X,ee,ne=0){let q=X.image.width,Ne=X.image.height,$e=Oe.convert(ee.format),ze=Oe.convert(ee.type);C.setTexture2D(ee,0),K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,ee.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,ee.unpackAlignment),X.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,ne,E.x,E.y,q,Ne,$e,ze,X.image.data):X.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,ne,E.x,E.y,X.mipmaps[0].width,X.mipmaps[0].height,$e,X.mipmaps[0].data):K.texSubImage2D(K.TEXTURE_2D,ne,E.x,E.y,$e,ze,X.image),ne===0&&ee.generateMipmaps&&K.generateMipmap(K.TEXTURE_2D),Ye.unbindTexture()},this.copyTextureToTexture3D=function(E,X,ee,ne,q=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Ne=E.max.x-E.min.x+1,$e=E.max.y-E.min.y+1,ze=E.max.z-E.min.z+1,at=Oe.convert(ne.format),Mt=Oe.convert(ne.type),ft;if(ne.isData3DTexture)C.setTexture3D(ne,0),ft=K.TEXTURE_3D;else if(ne.isDataArrayTexture||ne.isCompressedArrayTexture)C.setTexture2DArray(ne,0),ft=K.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,ne.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,ne.unpackAlignment);let mt=K.getParameter(K.UNPACK_ROW_LENGTH),tn=K.getParameter(K.UNPACK_IMAGE_HEIGHT),Kt=K.getParameter(K.UNPACK_SKIP_PIXELS),mn=K.getParameter(K.UNPACK_SKIP_ROWS),ci=K.getParameter(K.UNPACK_SKIP_IMAGES),Xt=ee.isCompressedTexture?ee.mipmaps[q]:ee.image;K.pixelStorei(K.UNPACK_ROW_LENGTH,Xt.width),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Xt.height),K.pixelStorei(K.UNPACK_SKIP_PIXELS,E.min.x),K.pixelStorei(K.UNPACK_SKIP_ROWS,E.min.y),K.pixelStorei(K.UNPACK_SKIP_IMAGES,E.min.z),ee.isDataTexture||ee.isData3DTexture?K.texSubImage3D(ft,q,X.x,X.y,X.z,Ne,$e,ze,at,Mt,Xt.data):ee.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),K.compressedTexSubImage3D(ft,q,X.x,X.y,X.z,Ne,$e,ze,at,Xt.data)):K.texSubImage3D(ft,q,X.x,X.y,X.z,Ne,$e,ze,at,Mt,Xt),K.pixelStorei(K.UNPACK_ROW_LENGTH,mt),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,tn),K.pixelStorei(K.UNPACK_SKIP_PIXELS,Kt),K.pixelStorei(K.UNPACK_SKIP_ROWS,mn),K.pixelStorei(K.UNPACK_SKIP_IMAGES,ci),q===0&&ne.generateMipmaps&&K.generateMipmap(ft),Ye.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?C.setTextureCube(E,0):E.isData3DTexture?C.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?C.setTexture2DArray(E,0):C.setTexture2D(E,0),Ye.unbindTexture()},this.resetState=function(){O=0,I=0,L=null,Ye.reset(),Qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Vl?"display-p3":"srgb",t.unpackColorSpace=Ht.workingColorSpace===qa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ln?fs:Kh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===fs?Ln:Pi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},ml=class extends Ar{};ml.prototype.isWebGL1Renderer=!0;var La=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new gt(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Da=class extends Vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var Rr=class extends ji{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ah=new F,Rh=new F,Ch=new _n,Vo=new Er,la=new Zs,gl=class extends Vn{constructor(e=new Kn,t=new Rr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Ah.fromBufferAttribute(t,s-1),Rh.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ah.distanceTo(Rh);e.setAttribute("lineDistance",new ln(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),la.copy(n.boundingSphere),la.applyMatrix4(s),la.radius+=r,e.ray.intersectsSphere(la)===!1)return;Ch.copy(s).invert(),Vo.copy(e.ray).applyMatrix4(Ch);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new F,u=new F,f=new F,d=new F,h=this.isLineSegments?2:1,_=n.index,g=n.attributes.position;if(_!==null){let p=Math.max(0,a.start),M=Math.min(_.count,a.start+a.count);for(let y=p,T=M-1;y<T;y+=h){let O=_.getX(y),I=_.getX(y+1);if(c.fromBufferAttribute(g,O),u.fromBufferAttribute(g,I),Vo.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);let $=e.ray.origin.distanceTo(d);$<e.near||$>e.far||t.push({distance:$,point:f.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,a.start),M=Math.min(g.count,a.start+a.count);for(let y=p,T=M-1;y<T;y+=h){if(c.fromBufferAttribute(g,y),u.fromBufferAttribute(g,y+1),Vo.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);let I=e.ray.origin.distanceTo(d);I<e.near||I>e.far||t.push({distance:I,point:f.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},Ph=new F,Ih=new F,Ua=class extends gl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Ph.fromBufferAttribute(t,s),Ih.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ph.distanceTo(Ih);e.setAttribute("lineDistance",new ln(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Na=class extends ai{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},oi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],d=n[s+1]-u,h=(a-u)/d;return(s+h)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Be:new F);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new F,s=[],r=[],a=[],o=new F,l=new _n;for(let h=0;h<=e;h++){let _=h/e;s[h]=this.getTangentAt(_,new F)}r[0]=new F,a[0]=new F;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let h=1;h<=e;h++){if(r[h]=r[h-1].clone(),a[h]=a[h-1].clone(),o.crossVectors(s[h-1],s[h]),o.length()>Number.EPSILON){o.normalize();let _=Math.acos(Fn(s[h-1].dot(s[h]),-1,1));r[h].applyMatrix4(l.makeRotationAxis(o,_))}a[h].crossVectors(s[h],r[h])}if(t===!0){let h=Math.acos(Fn(r[0].dot(r[e]),-1,1));h/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(h=-h);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],h*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Cr=class extends oi{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let n=t||new Be,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,h=c-this.aY;l=d*u-h*f+this.aX,c=d*f+h*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},xl=class extends Cr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Wl(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,f){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,h=(o-a)/u-(l-a)/(u+f)+(l-o)/f;d*=u,h*=u,s(a,o,d,h)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var ca=new F,Go=new Wl,Wo=new Wl,Xo=new Wl,_l=class extends oi{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new F){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(ca.subVectors(s[0],s[1]).add(s[0]),c=ca);let f=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(ca.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=ca),this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?.5:.25,_=Math.pow(c.distanceToSquared(f),h),v=Math.pow(f.distanceToSquared(d),h),g=Math.pow(d.distanceToSquared(u),h);v<1e-4&&(v=1),_<1e-4&&(_=v),g<1e-4&&(g=v),Go.initNonuniformCatmullRom(c.x,f.x,d.x,u.x,_,v,g),Wo.initNonuniformCatmullRom(c.y,f.y,d.y,u.y,_,v,g),Xo.initNonuniformCatmullRom(c.z,f.z,d.z,u.z,_,v,g)}else this.curveType==="catmullrom"&&(Go.initCatmullRom(c.x,f.x,d.x,u.x,this.tension),Wo.initCatmullRom(c.y,f.y,d.y,u.y,this.tension),Xo.initCatmullRom(c.z,f.z,d.z,u.z,this.tension));return n.set(Go.calc(l),Wo.calc(l),Xo.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new F().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Lh(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function I0(i,e){let t=1-i;return t*t*e}function L0(i,e){return 2*(1-i)*i*e}function D0(i,e){return i*i*e}function _r(i,e,t,n){return I0(i,e)+L0(i,t)+D0(i,n)}function U0(i,e){let t=1-i;return t*t*t*e}function N0(i,e){let t=1-i;return 3*t*t*i*e}function O0(i,e){return 3*(1-i)*i*i*e}function F0(i,e){return i*i*i*e}function yr(i,e,t,n,s){return U0(i,e)+N0(i,t)+O0(i,n)+F0(i,s)}var Oa=class extends oi{constructor(e=new Be,t=new Be,n=new Be,s=new Be){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Be){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(yr(e,s.x,r.x,a.x,o.x),yr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},yl=class extends oi{constructor(e=new F,t=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(yr(e,s.x,r.x,a.x,o.x),yr(e,s.y,r.y,a.y,o.y),yr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Fa=class extends oi{constructor(e=new Be,t=new Be){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Be){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Be){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vl=class extends oi{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ba=class extends oi{constructor(e=new Be,t=new Be,n=new Be){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Be){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(_r(e,s.x,r.x,a.x),_r(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ml=class extends oi{constructor(e=new F,t=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(_r(e,s.x,r.x,a.x),_r(e,s.y,r.y,a.y),_r(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ka=class extends oi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Be){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(Lh(o,l.x,c.x,u.x,f.x),Lh(o,l.y,c.y,u.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Be().fromArray(s))}return this}},Dh=Object.freeze({__proto__:null,ArcCurve:xl,CatmullRomCurve3:_l,CubicBezierCurve:Oa,CubicBezierCurve3:yl,EllipseCurve:Cr,LineCurve:Fa,LineCurve3:vl,QuadraticBezierCurve:Ba,QuadraticBezierCurve3:Ml,SplineCurve:ka}),bl=class extends oi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Dh[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Dh[s.type]().fromJSON(s))}return this}},Js=class extends bl{constructor(e){super(),this.type="Path",this.currentPoint=new Be,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Fa(this.currentPoint.clone(),new Be(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Ba(this.currentPoint.clone(),new Be(e,t),new Be(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Oa(this.currentPoint.clone(),new Be(e,t),new Be(n,s),new Be(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ka(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Cr(e,t,n,s,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var Qi=class i extends Kn{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],f=[],d=[],h=[],_=0,v=[],g=n/2,p=0;M(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new ln(f,3)),this.setAttribute("normal",new ln(d,3)),this.setAttribute("uv",new ln(h,2));function M(){let T=new F,O=new F,I=0,L=(t-e)/n;for(let $=0;$<=r;$++){let S=[],A=$/r,N=A*(t-e)+e;for(let B=0;B<=s;B++){let j=B/s,P=j*l+o,W=Math.sin(P),D=Math.cos(P);O.x=N*W,O.y=-A*n+g,O.z=N*D,f.push(O.x,O.y,O.z),T.set(W,L,D).normalize(),d.push(T.x,T.y,T.z),h.push(j,1-A),S.push(_++)}v.push(S)}for(let $=0;$<s;$++)for(let S=0;S<r;S++){let A=v[S][$],N=v[S+1][$],B=v[S+1][$+1],j=v[S][$+1];u.push(A,N,j),u.push(N,B,j),I+=6}c.addGroup(p,I,0),p+=I}function y(T){let O=_,I=new Be,L=new F,$=0,S=T===!0?e:t,A=T===!0?1:-1;for(let B=1;B<=s;B++)f.push(0,g*A,0),d.push(0,A,0),h.push(.5,.5),_++;let N=_;for(let B=0;B<=s;B++){let P=B/s*l+o,W=Math.cos(P),D=Math.sin(P);L.x=S*D,L.y=g*A,L.z=S*W,f.push(L.x,L.y,L.z),d.push(0,A,0),I.x=W*.5+.5,I.y=D*.5*A+.5,h.push(I.x,I.y),_++}for(let B=0;B<s;B++){let j=O+B,P=N+B;T===!0?u.push(P,P+1,j):u.push(P+1,P,j),$+=3}c.addGroup(p,$,T===!0?1:2),p+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},gi=class i extends Qi{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Sl=class i extends Kn{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new ln(r,3)),this.setAttribute("normal",new ln(r.slice(),3)),this.setAttribute("uv",new ln(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let y=new F,T=new F,O=new F;for(let I=0;I<t.length;I+=3)h(t[I+0],y),h(t[I+1],T),h(t[I+2],O),l(y,T,O,M)}function l(M,y,T,O){let I=O+1,L=[];for(let $=0;$<=I;$++){L[$]=[];let S=M.clone().lerp(T,$/I),A=y.clone().lerp(T,$/I),N=I-$;for(let B=0;B<=N;B++)B===0&&$===I?L[$][B]=S:L[$][B]=S.clone().lerp(A,B/N)}for(let $=0;$<I;$++)for(let S=0;S<2*(I-$)-1;S++){let A=Math.floor(S/2);S%2===0?(d(L[$][A+1]),d(L[$+1][A]),d(L[$][A])):(d(L[$][A+1]),d(L[$+1][A+1]),d(L[$+1][A]))}}function c(M){let y=new F;for(let T=0;T<r.length;T+=3)y.x=r[T+0],y.y=r[T+1],y.z=r[T+2],y.normalize().multiplyScalar(M),r[T+0]=y.x,r[T+1]=y.y,r[T+2]=y.z}function u(){let M=new F;for(let y=0;y<r.length;y+=3){M.x=r[y+0],M.y=r[y+1],M.z=r[y+2];let T=g(M)/2/Math.PI+.5,O=p(M)/Math.PI+.5;a.push(T,1-O)}_(),f()}function f(){for(let M=0;M<a.length;M+=6){let y=a[M+0],T=a[M+2],O=a[M+4],I=Math.max(y,T,O),L=Math.min(y,T,O);I>.9&&L<.1&&(y<.2&&(a[M+0]+=1),T<.2&&(a[M+2]+=1),O<.2&&(a[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function h(M,y){let T=M*3;y.x=e[T+0],y.y=e[T+1],y.z=e[T+2]}function _(){let M=new F,y=new F,T=new F,O=new F,I=new Be,L=new Be,$=new Be;for(let S=0,A=0;S<r.length;S+=9,A+=6){M.set(r[S+0],r[S+1],r[S+2]),y.set(r[S+3],r[S+4],r[S+5]),T.set(r[S+6],r[S+7],r[S+8]),I.set(a[A+0],a[A+1]),L.set(a[A+2],a[A+3]),$.set(a[A+4],a[A+5]),O.copy(M).add(y).add(T).divideScalar(3);let N=g(O);v(I,A+0,M,N),v(L,A+2,y,N),v($,A+4,T,N)}}function v(M,y,T,O){O<0&&M.x===1&&(a[y]=M.x-1),T.x===0&&T.z===0&&(a[y]=O/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},Ha=class i extends Sl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var js=class extends Js{constructor(e){super(e),this.uuid=er(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Js().fromJSON(s))}return this}},B0={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=lu(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,u,f,d,h;if(n&&(r=G0(i,e,r,t)),i.length>80*t){o=c=i[0],l=u=i[1];for(let _=t;_<s;_+=t)f=i[_],d=i[_+1],f<o&&(o=f),d<l&&(l=d),f>c&&(c=f),d>u&&(u=d);h=Math.max(c-o,u-l),h=h!==0?32767/h:0}return Pr(r,a,t,o,l,h,0),a}};function lu(i,e,t,n,s){let r,a;if(s===ex(i,e,t,n)>0)for(r=e;r<t;r+=n)a=Uh(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=Uh(r,i[r],i[r+1],a);return a&&$a(a,a.next)&&(Lr(a),a=a.next),a}function ms(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&($a(t,t.next)||on(t.prev,t,t.next)===0)){if(Lr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Pr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&$0(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?H0(i,n,s,r):k0(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Lr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=z0(ms(i),e,t),Pr(i,e,t,n,s,r,2)):a===2&&V0(i,e,t,n,s,r):Pr(ms(i),e,t,n,s,r,1);break}}}function k0(i){let e=i.prev,t=i,n=i.next;if(on(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=s<r?s<a?s:a:r<a?r:a,f=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,h=o>l?o>c?o:c:l>c?l:c,_=n.next;for(;_!==e;){if(_.x>=u&&_.x<=d&&_.y>=f&&_.y<=h&&Vs(s,o,r,l,a,c,_.x,_.y)&&on(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function H0(i,e,t,n){let s=i.prev,r=i,a=i.next;if(on(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,f=r.y,d=a.y,h=o<l?o<c?o:c:l<c?l:c,_=u<f?u<d?u:d:f<d?f:d,v=o>l?o>c?o:c:l>c?l:c,g=u>f?u>d?u:d:f>d?f:d,p=El(h,_,e,t,n),M=El(v,g,e,t,n),y=i.prevZ,T=i.nextZ;for(;y&&y.z>=p&&T&&T.z<=M;){if(y.x>=h&&y.x<=v&&y.y>=_&&y.y<=g&&y!==s&&y!==a&&Vs(o,u,l,f,c,d,y.x,y.y)&&on(y.prev,y,y.next)>=0||(y=y.prevZ,T.x>=h&&T.x<=v&&T.y>=_&&T.y<=g&&T!==s&&T!==a&&Vs(o,u,l,f,c,d,T.x,T.y)&&on(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;y&&y.z>=p;){if(y.x>=h&&y.x<=v&&y.y>=_&&y.y<=g&&y!==s&&y!==a&&Vs(o,u,l,f,c,d,y.x,y.y)&&on(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;T&&T.z<=M;){if(T.x>=h&&T.x<=v&&T.y>=_&&T.y<=g&&T!==s&&T!==a&&Vs(o,u,l,f,c,d,T.x,T.y)&&on(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function z0(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!$a(s,r)&&cu(s,n,n.next,r)&&Ir(s,r)&&Ir(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Lr(n),Lr(n.next),n=i=r),n=n.next}while(n!==i);return ms(n)}function V0(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&J0(a,o)){let l=hu(a,o);a=ms(a,a.next),l=ms(l,l.next),Pr(a,e,t,n,s,r,0),Pr(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function G0(i,e,t,n){let s=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=lu(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(K0(c));for(s.sort(W0),r=0;r<s.length;r++)t=X0(s[r],t);return t}function W0(i,e){return i.x-e.x}function X0(i,e){let t=q0(i,e);if(!t)return e;let n=hu(t,i);return ms(n,n.next),ms(t,t.next)}function q0(i,e){let t=e,n=-1/0,s,r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,l=s.x,c=s.y,u=1/0,f;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Vs(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(f=Math.abs(a-t.y)/(r-t.x),Ir(t,i)&&(f<u||f===u&&(t.x>s.x||t.x===s.x&&Y0(s,t)))&&(s=t,u=f)),t=t.next;while(t!==o);return s}function Y0(i,e){return on(i.prev,i,e.prev)<0&&on(e.next,i,i.next)<0}function $0(i,e,t,n){let s=i;do s.z===0&&(s.z=El(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Z0(s)}function Z0(i){let e,t,n,s,r,a,o,l,c=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(a>1);return i}function El(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function K0(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Vs(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function J0(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!j0(i,e)&&(Ir(i,e)&&Ir(e,i)&&Q0(i,e)&&(on(i.prev,i,e.prev)||on(i,e.prev,e))||$a(i,e)&&on(i.prev,i,i.next)>0&&on(e.prev,e,e.next)>0)}function on(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function $a(i,e){return i.x===e.x&&i.y===e.y}function cu(i,e,t,n){let s=ua(on(i,e,t)),r=ua(on(i,e,n)),a=ua(on(t,n,i)),o=ua(on(t,n,e));return!!(s!==r&&a!==o||s===0&&ha(i,t,e)||r===0&&ha(i,n,e)||a===0&&ha(t,i,n)||o===0&&ha(t,e,n))}function ha(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ua(i){return i>0?1:i<0?-1:0}function j0(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&cu(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ir(i,e){return on(i.prev,i,i.next)<0?on(i,e,i.next)>=0&&on(i,i.prev,e)>=0:on(i,e,i.prev)<0||on(i,i.next,e)<0}function Q0(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function hu(i,e){let t=new Tl(i.i,i.x,i.y),n=new Tl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Uh(i,e,t,n){let s=new Tl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Lr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Tl(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ex(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var vr=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Nh(e),Oh(n,e);let a=e.length;t.forEach(Nh);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Oh(n,t[l]);let o=B0.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Nh(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Oh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Dr=class i extends Kn{constructor(e=new js([new Be(0,.5),new Be(-.5,-.5),new Be(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new ln(s,3)),this.setAttribute("normal",new ln(r,3)),this.setAttribute("uv",new ln(a,2));function c(u){let f=s.length/3,d=u.extractPoints(t),h=d.shape,_=d.holes;vr.isClockWise(h)===!1&&(h=h.reverse());for(let g=0,p=_.length;g<p;g++){let M=_[g];vr.isClockWise(M)===!0&&(_[g]=M.reverse())}let v=vr.triangulateShape(h,_);for(let g=0,p=_.length;g<p;g++){let M=_[g];h=h.concat(M)}for(let g=0,p=h.length;g<p;g++){let M=h[g];s.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let g=0,p=v.length;g<p;g++){let M=v[g],y=M[0]+f,T=M[1]+f,O=M[2]+f;n.push(y,T,O),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return tx(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function tx(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var bi=class i extends Kn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],f=new F,d=new F,h=[],_=[],v=[],g=[];for(let p=0;p<=n;p++){let M=[],y=p/n,T=0;p===0&&a===0?T=.5/t:p===n&&l===Math.PI&&(T=-.5/t);for(let O=0;O<=t;O++){let I=O/t;f.x=-e*Math.cos(s+I*r)*Math.sin(a+y*o),f.y=e*Math.cos(a+y*o),f.z=e*Math.sin(s+I*r)*Math.sin(a+y*o),_.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),g.push(I+T,1-y),M.push(c++)}u.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){let y=u[p][M+1],T=u[p][M],O=u[p+1][M],I=u[p+1][M+1];(p!==0||a>0)&&h.push(y,T,I),(p!==n-1||l<Math.PI)&&h.push(T,O,I)}this.setIndex(h),this.setAttribute("position",new ln(_,3)),this.setAttribute("normal",new ln(v,3)),this.setAttribute("uv",new ln(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Dn=class extends ji{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jh,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function da(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function nx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Qs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},wl=class extends Qs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fc,endingEnd:Fc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Bc:r=e,o=2*t-n;break;case kc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Bc:a=e,l=2*n-t;break;case kc:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,h=this._weightNext,_=(n-t)/(s-t),v=_*_,g=v*_,p=-d*g+2*d*v-d*_,M=(1+d)*g+(-1.5-2*d)*v+(-.5+d)*_+1,y=(-1-h)*g+(1.5+h)*v+.5*_,T=h*g-h*v;for(let O=0;O!==o;++O)r[O]=p*a[u+O]+M*a[c+O]+y*a[l+O]+T*a[f+O];return r}},Al=class extends Qs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),f=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*f+a[l+d]*u;return r}},Rl=class extends Qs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},xi=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=da(t,this.TimeBufferType),this.values=da(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:da(e.times,Array),values:da(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Rl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Al(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new wl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case pa:t=this.InterpolantFactoryMethodDiscrete;break;case ma:t=this.InterpolantFactoryMethodLinear;break;case xo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return pa;case this.InterpolantFactoryMethodLinear:return ma;case this.InterpolantFactoryMethodSmooth:return xo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&nx(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===xo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*n,d=f-n,h=f+n;for(let _=0;_!==n;++_){let v=t[f+_];if(v!==t[d+_]||v!==t[h+_]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*n,d=a*n;for(let h=0;h!==n;++h)t[d+h]=t[f+h]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};xi.prototype.TimeBufferType=Float32Array;xi.prototype.ValueBufferType=Float32Array;xi.prototype.DefaultInterpolation=ma;var gs=class extends xi{};gs.prototype.ValueTypeName="bool";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=pa;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;var Cl=class extends xi{};Cl.prototype.ValueTypeName="color";var Pl=class extends xi{};Pl.prototype.ValueTypeName="number";var Il=class extends Qs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)Ji.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ur=class extends xi{InterpolantFactoryMethodLinear(e){return new Il(this.times,this.values,this.getValueSize(),e)}};Ur.prototype.ValueTypeName="quaternion";Ur.prototype.DefaultInterpolation=ma;Ur.prototype.InterpolantFactoryMethodSmooth=void 0;var xs=class extends xi{};xs.prototype.ValueTypeName="string";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=pa;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ll=class extends xi{};Ll.prototype.ValueTypeName="vector";var Dl=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){let h=c[f],_=c[f+1];if(h.global&&(h.lastIndex=0),h.test(u))return _}return null}}},ix=new Dl,Ul=class{constructor(e){this.manager=e!==void 0?e:ix,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ul.DEFAULT_MATERIAL_NAME="__DEFAULT";var za=class extends Vn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new gt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};var qo=new _n,Fh=new F,Bh=new F,Nl=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.map=null,this.mapPass=null,this.matrix=new _n,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wr,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new In(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Fh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fh),Bh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bh),t.updateMatrixWorld(),qo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(qo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Ol=class extends Nl{constructor(){super(new Ca(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Va=class extends za{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vn.DEFAULT_UP),this.updateMatrix(),this.target=new Vn,this.shadow=new Ol}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ga=class extends za{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Xl="\\[\\]\\.:\\/",sx=new RegExp("["+Xl+"]","g"),ql="[^"+Xl+"]",rx="[^"+Xl.replace("\\.","")+"]",ax=/((?:WC+[\/:])*)/.source.replace("WC",ql),ox=/(WCOD+)?/.source.replace("WCOD",rx),lx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ql),cx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ql),hx=new RegExp("^"+ax+ox+lx+cx+"$"),ux=["material","materials","bones","map"],Fl=class{constructor(e,t,n){let s=n||jt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},jt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(sx,"")}static parseTrackName(e){let t=hx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ux.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};jt.Composite=Fl;jt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};jt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};jt.prototype.GetterByBindingType=[jt.prototype._getValue_direct,jt.prototype._getValue_array,jt.prototype._getValue_arrayElement,jt.prototype._getValue_toArray];jt.prototype.SetterByBindingTypeAndVersioning=[[jt.prototype._setValue_direct,jt.prototype._setValue_direct_setNeedsUpdate,jt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[jt.prototype._setValue_array,jt.prototype._setValue_array_setNeedsUpdate,jt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[jt.prototype._setValue_arrayElement,jt.prototype._setValue_arrayElement_setNeedsUpdate,jt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[jt.prototype._setValue_fromArray,jt.prototype._setValue_fromArray_setNeedsUpdate,jt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Tx=new Float32Array(1);var Wa=class{constructor(e,t,n=0,s=1/0){this.ray=new Er(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Tr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Bl(e,this,n,t),n.sort(kh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Bl(e[s],this,n,t);return n.sort(kh),n}};function kh(i,e){return i.distance-e.distance}function Bl(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,a=s.length;r<a;r++)Bl(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kl);var fx=35,px=25,yt=.95,Gn=.35,Za=6,_s=130,uu=300,du=typeof window<"u"&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||window.location.search.includes("dev=1")),mx=[{value:"balanced",label:"Balanced (HP + even stats)"},{value:"tanky",label:"Tanky (HP + VIT)"},{value:"aggressive",label:"Aggressive (STR + AGI)"},{value:"scout",label:"Scout (high AGI)"},{value:"ranged",label:"Ranged (DEX + range)"},{value:"caster",label:"Caster (INT + MP)"},{value:"random",label:"Random"},{value:"custom",label:"Custom order"}],gx=["berserker","knight","lancer","werewolf","samurai","ninja","assassin","ghoul","monk","hunter","mage","witch","paladin","exorcist","bandit","ranger","blacksmith","alchemist"],et={PATH:0,GRASS:1,TREE:2,WATER:3,ROCK:4,BASE_TOP:5,BASE_BOTTOM:6,CENTER:7},Ka=["knight","mage","monk","ghoul","lancer","hunter","assassin","berserker","witch","ninja","samurai","werewolf","paladin","exorcist","bandit","ranger","blacksmith","alchemist"];function xx(i){for(let e=i.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[i[e],i[t]]=[i[t],i[e]]}return i}var Bt={knight:{name:"Knight",gender:"male",hp:27,maxHp:27,mp:5,maxMp:5,str:13,agi:8,vit:14,dex:10,luk:4,int:7,range:1},mage:{name:"Mage",gender:"female",hp:17,maxHp:17,mp:22,maxMp:22,str:5,agi:4,vit:5,dex:4,luk:13,int:17,range:1},monk:{name:"Monk",gender:"male",hp:23,maxHp:23,mp:13,maxMp:13,str:10,agi:10,vit:12,dex:9,luk:11,int:10,range:1},ghoul:{name:"Ghoul",gender:"male",hp:21,maxHp:21,mp:6,maxMp:6,str:12,agi:9,vit:9,dex:11,luk:9,int:5,range:1},lancer:{name:"Lancer",gender:"female",hp:22,maxHp:22,mp:7,maxMp:7,str:13,agi:11,vit:10,dex:7,luk:5,int:8,range:2},hunter:{name:"Hunter",gender:"female",hp:18,maxHp:18,mp:9,maxMp:9,str:7,agi:5,vit:7,dex:15,luk:12,int:5,range:7},assassin:{name:"Assassin",gender:"female",hp:19,maxHp:19,mp:10,maxMp:10,str:9,agi:14,vit:6,dex:14,luk:10,int:4,range:1},berserker:{name:"Berserker",gender:"male",hp:30,maxHp:30,mp:3,maxMp:3,str:15,agi:7,vit:13,dex:8,luk:6,int:2,range:1},witch:{name:"Witch",gender:"female",hp:16,maxHp:16,mp:24,maxMp:24,str:6,agi:6,vit:4,dex:5,luk:14,int:14,range:3},ninja:{name:"Ninja",gender:"female",hp:20,maxHp:20,mp:11,maxMp:11,str:8,agi:15,vit:7,dex:12,luk:8,int:9,range:1},samurai:{name:"Samurai",gender:"male",hp:24,maxHp:24,mp:8,maxMp:8,str:11,agi:12,vit:8,dex:13,luk:7,int:6,range:1},werewolf:{name:"Werewolf",gender:"male",hp:25,maxHp:25,mp:4,maxMp:4,str:14,agi:13,vit:11,dex:6,luk:6,int:3,range:1},paladin:{name:"Paladin",gender:"male",hp:26,maxHp:26,mp:12,maxMp:12,str:10,agi:8,vit:16,dex:7,luk:10,int:11,range:1},exorcist:{name:"Exorcist",gender:"male",hp:21,maxHp:20,mp:14,maxMp:14,str:7,agi:5,vit:9,dex:6,luk:15,int:13,range:1},bandit:{name:"Bandit",gender:"male",hp:20,maxHp:20,mp:5,maxMp:5,str:9,agi:14,vit:6,dex:14,luk:13,int:4,range:1},ranger:{name:"Ranger",gender:"female",hp:19,maxHp:19,mp:10,maxMp:10,str:8,agi:10,vit:8,dex:12,luk:7,int:4,range:5},blacksmith:{name:"Blacksmith",gender:"female",hp:22,maxHp:22,mp:6,maxMp:6,str:12,agi:7,vit:10,dex:11,luk:12,int:2,range:1},alchemist:{name:"Alchemist",gender:"female",hp:17,maxHp:17,mp:13,maxMp:13,str:6,agi:6,vit:11,dex:5,luk:8,int:12,range:5}},Ja={knight:{primary:6908265,secondary:9127187,hair:11696641,cape:3355443,belt:9127187},mage:{primary:16776656,secondary:3355443,hair:13353955,cape:4853326},monk:{primary:16777188,secondary:16119285,hair:2889744,belt:657930},ghoul:{primary:32896,secondary:6636321,hair:32896,skin:32896},lancer:{primary:3169502,secondary:16776656,hair:15854290,cape:14423100},hunter:{primary:8421376,secondary:9584654,hair:7898731,cape:16119285},assassin:{primary:986695,secondary:16119285,hair:2621751,belt:8948621},berserker:{primary:657930,secondary:986695,hair:657930,cape:1118481},witch:{primary:16119285,secondary:8388640,hair:16777188,cape:2263842},ninja:{primary:267292,secondary:137541,hair:791074},samurai:{primary:13882323,secondary:3556687,hair:2039842},werewolf:{primary:4408907,secondary:2378091,hair:12632256,belt:466741},paladin:{primary:16445630,secondary:16774638,hair:12887172,cape:4286945,belt:4286945},exorcist:{primary:3881787,secondary:3881787,hair:16775930,cape:8488329},bandit:{primary:9125425,secondary:6045747,hair:14423100,cape:6710937},ranger:{primary:16775930,secondary:10913299,hair:16035328,cape:11402348,belt:10913299},blacksmith:{primary:13874819,secondary:9849600,hair:11696641,apron:9849600},alchemist:{primary:16738740,secondary:11154282,hair:16711807,cape:8900331}},Nr={knight:"https://creator.nightcafe.studio/jobs/OlIWpAye2LeM5gPkAGEI/OlIWpAye2LeM5gPkAGEI--1--xc223.jpg",mage:"https://media.craiyon.com/2025-08-13/bLqz0LbwSIynOcUHty4Maw.webp",monk:"https://cdnb.artstation.com/p/assets/images/images/028/576/499/large/ahruna-art-oct17.jpg?1594859688",ghoul:"https://i.pinimg.com/736x/d3/cc/41/d3cc41778d05dec0371a69e29659f792.jpg",lancer:"https://i.redd.it/zolf64gpoa0c1.jpg",hunter:"https://coolvibe.com/wp-content/uploads/2011/02/hunter.jpg",assassin:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk2-NBPpPOU7duYgN_k_9oFKZ5hJjU28qyoA&s",berserker:"https://entertainment.inquirer.net/files/2016/07/top_bg.jpg",witch:"https://w0.peakpx.com/wallpaper/382/134/HD-wallpaper-evil-witch-witch-female-dress-white-hair-evil-black-woman-girl-darkness-anime-dark-beauty-lady-long-hair.jpg",ninja:"https://i.pinimg.com/474x/02/88/60/0288609778e53701b7e64051d7164922.jpg",samurai:"https://files.idyllic.app/files/static/3120390?width=256&optimizer=image",werewolf:"https://i.pinimg.com/736x/1f/95/27/1f9527c6255465547d664f19dd11967c.jpg",paladin:"https://upload-os-bbs.hoyolab.com/upload/2023/12/01/84522063/a6a130d65b61025d979eda3750b0abd4_2602645990799609868.jpg?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_70",exorcist:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bdc0afb9-e917-4267-b7e6-2155f9c5c14c/detuach-b1b79b16-7fed-4175-b1a2-ca3d1bc6166b.jpg/v1/fill/w_1024,h_1449,q_75,strp/my_priest_by_domyzu_detuach-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi9iZGMwYWZiOS1lOTE3LTQyNjctYjdlNi0yMTU1ZjljNWMxNGMvZGV0dWFjaC1iMWI3OWIxNi03ZmVkLTQxNzUtYjFhMi1jYTNkMWJjNjE2NmIuanBnIiwiaGVpZ2h0IjoiPD0xNDQ5Iiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiL3dtL2JkYzBhZmI5LWU5MTctNDI2Ny1iN2U2LTIxNTVmOWM1YzE0Yy9kb215enUtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.5ueq8PhVPSB7hz65z6Cok8mX7IGeIrsQzCOaVFpt1pU",bandit:"https://i.pinimg.com/736x/6b/15/b0/6b15b06ae23f690e20968bc87c370831.jpg",ranger:"https://i.redd.it/2nfikbmqpwoa1.jpg",blacksmith:"https://images-ng.pixai.art/images/orig/489d970a-890e-4523-8f99-c0ba2d6bfeae",alchemist:"https://pics.craiyon.com/2023-07-11/ddbb35d3d2614541a9ad13181838257d.webp"},fu={knight:[{name:"Brave",description:"Gain +3 VIT for 2 turns.",cost:3,target:"self",range:0,level:2,effectKey:"brave"},{name:"Dominate",description:"Steal 1 STR from an enemy.",cost:5,target:"enemy",range:1,level:3,effectKey:"dominate"}],mage:[{name:"Arcane Bolt",description:"Deal INT-based damage to one enemy.",cost:8,target:"enemy",range:6,level:1,effectKey:"arcaneBolt",type:"spell"},{name:"Mana Drain",description:"Drain enemy MP based on INT.",cost:1,target:"enemy",range:6,level:2,effectKey:"manaDrain"}],monk:[{name:"Mantra",description:"Gain LUK based on INT for both ally and self for 2 turns.",cost:4,target:"ally",range:1,level:2,effectKey:"mantra"},{name:"Chakra",description:"Heal HP for both ally and self.",cost:8,target:"ally",range:4,level:3,effectKey:"chakra"}],ghoul:[{name:"Weaken",description:"Steal 1 VIT from an enemy.",cost:3,target:"enemy",range:1,level:2,effectKey:"weaken"},{name:"Feast",description:"Deal STR-based damage to enemy and heal self.",cost:4,target:"enemy",range:1,level:3,effectKey:"feast"}],lancer:[{name:"Impale",description:"Reduce target's AGI by 2 for 3 turns.",cost:4,target:"enemy",range:2,level:2,effectKey:"impale"},{name:"Pierce",description:"Deal STR-based damage through the defense.",cost:6,target:"enemy",range:2,level:3,effectKey:"pierce"}],hunter:[{name:"Focus",description:"Gain +3 DEX for 2 turns.",cost:4,target:"self",range:0,level:1,effectKey:"focus"},{name:"Snipe",description:"Deal DEX-based damage to one enemy.",cost:6,target:"enemy",range:10,level:2,effectKey:"snipe"}],assassin:[{name:"Cripple",description:"Steal 1 AGI from an enemy.",cost:5,target:"enemy",range:1,level:2,effectKey:"cripple"},{name:"Execute",description:"Deal AGI-based damage to one enemy.",cost:7,target:"enemy",range:1,level:3,effectKey:"execute"}],berserker:[{name:"Berserk",description:"Deal STR-based damage for -3 HP.",cost:0,hpCost:3,target:"enemy",range:1,level:2,effectKey:"berserk"},{name:"Bloodlust",description:"Gain STR and VIT based on lost HP for 1 turn.",cost:5,target:"self",range:0,level:3,effectKey:"bloodlust"}],witch:[{name:"Hex",description:"Steal 1 INT from an enemy.",cost:5,target:"enemy",range:5,level:1,effectKey:"hex"},{name:"Drain",description:"Deal INT-based damage to enemy and heal self.",cost:6,target:"enemy",range:5,level:2,effectKey:"drain",type:"spell"}],ninja:[{name:"Blind",description:"Steal 1 DEX from an enemy.",cost:6,target:"enemy",range:1,level:2,effectKey:"blind"},{name:"Shuriken",description:"Deal DEX-based ranged attack.",cost:7,target:"enemy",range:4,level:3,effectKey:"shuriken"}],samurai:[{name:"Iaido",description:"Gain +1 STR and +1 DEX for 3 turns.",cost:5,target:"self",range:0,level:2,effectKey:"iaido"},{name:"Chokuto",description:"Deal STR+DEX-based damage to one enemy.",cost:7,target:"enemy",range:1,level:3,effectKey:"chokuto"}],werewolf:[{name:"Bite",description:"Deal STR+AGI-based damage to one enemy.",cost:5,target:"enemy",range:1,level:2,effectKey:"bite"},{name:"Howl",description:"Gain +2 STR and +2 AGI for 3 turns.",cost:6,target:"self",range:0,level:3,effectKey:"howl"}],paladin:[{name:"Sacrifice",description:"Heal ally for -3 HP.",cost:0,hpCost:3,target:"ally",range:3,level:3,effectKey:"sacrifice"},{name:"Judgement",description:"Deal damage based on remaining HP.",cost:7,target:"enemy",range:1,level:2,effectKey:"judgement"}],exorcist:[{name:"Sanctuary",description:"Gain +1 all stats for both ally and self for 2 turns.",cost:6,target:"ally",range:3,level:1,effectKey:"sanctuary"},{name:"Exorcise",description:"Deal damage based on enemy lost HP.",cost:7,target:"enemy",range:3,level:2,effectKey:"exorcise",type:"spell"}],bandit:[{name:"Raid",description:"Steal 2 LUK from an enemy.",cost:5,target:"enemy",range:1,level:2,effectKey:"raid"},{name:"Assault",description:"Deal LUK-based damage to one enemy.",cost:6,target:"enemy",range:1,level:3,effectKey:"assault"}],ranger:[{name:"Wind walk",description:"Gain +1 DEX and +3 AGI for 2 turns.",cost:5,target:"self",range:0,level:1,effectKey:"windWalk"},{name:"Power Shot",description:"Deal knockback damage to one enemy.",cost:6,target:"enemy",range:7,level:3,effectKey:"powerShot"}],blacksmith:[{name:"Forge",description:"Gain +2 STR for both ally and self for 2 turns.",cost:4,target:"ally",range:1,level:1,effectKey:"forge"},{name:"Fortify",description:"Gain +2 STR and +2 VIT for both ally and self for 2 turns.",cost:5,target:"ally",range:2,level:3,effectKey:"fortify"}],alchemist:[{name:"Poison",description:"Poison enemy for 2 turns.",cost:5,target:"enemy",range:5,level:1,effectKey:"poison"},{name:"Concoct",description:"Deal INT-based damage to one enemy and add to 50% to LUK",cost:8,target:"enemy",range:7,level:2,effectKey:"concoct",type:"spell"}]};function ae(i,e){let t=i[e]!=null?i[e]:0,n=i.tempBuff&&i.tempBuff[e]!=null?i.tempBuff[e]:0,s=i.tempDebuff&&i.tempDebuff[e]!=null?i.tempDebuff[e]:0;return t+n-s}function ja(i,e,t,n){let s=e,r=t,o={brave:"Brave",dominate:"Dominate",arcaneBolt:"Arcane Bolt",manaDrain:"Mana Drain",mantra:"Mantra",chakra:"Chakra",weaken:"Weaken",feast:"Feast",impale:"Impale",pierce:"Pierce",focus:"Focus",snipe:"Snipe",execute:"Execute",cripple:"Cripple",berserk:"Berserk",bloodlust:"Bloodlust",hex:"Hex",drain:"Drain",shuriken:"Shuriken",blind:"Blind",iaido:"Iaido",chokuto:"Chokuto",bite:"Bite",howl:"Howl"}[i]||i.replace(/([A-Z])/g," $1").replace(/^./,h=>h.toUpperCase()).trim();n.showFloatingCombatText&&n.showFloatingCombatText(s.x,s.y,o,!1,"skill-name");let l=i.replace(/([A-Z])/g," $1").replace(/^./,h=>h.toUpperCase()).trim(),c=r?`${r.name} (${r.class}, P${r.player})`:"self",u=null,f=(h,_,v,g)=>{if(v)h.hp=Math.min(h.maxHp,h.hp+_),n.showFloatingCombatText&&n.showFloatingCombatText(h.x,h.y,`+${_}`,!1,"heal");else{let p=h===s,M=!0;if(!p&&!g){let y=ae(h,"agi")*.7+ae(h,"luk")*.3;M=Math.random()*Math.max(.001,y)<=ae(s,"dex")}return M?(h.hp=Math.max(0,h.hp-_),h!==s&&(u=_),n.showFloatingCombatText&&n.showFloatingCombatText(h.x,h.y,String(_),!1),n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(h),h.hp<=0&&n.handleUnitDeath&&n.handleUnitDeath(h)):n.showFloatingCombatText&&n.showFloatingCombatText(h.x,h.y,"MISS",!0),M}},d=(h,_,v,g)=>{n.showFloatingCombatText&&n.showFloatingCombatText(h,_,v,!1,g?"buff":"debuff")};switch(i){case"brave":s.tempBuff=s.tempBuff||{},s.tempBuff.vit=3,s.tempBuff.duration=3,d(s.x,s.y,"+3 VIT",!0);break;case"dominate":{if(!r)break;let h=2;r.str=Math.max(1,(r.str||0)-h),s.str=(s.str||0)+h,d(r.x,r.y,`-${h} STR`,!1),d(s.x,s.y,`+${h} STR`,!0)}break;case"arcaneBolt":{if(!r)break;let h=Math.max(1,Math.ceil(ae(s,"int")-(ae(r,"int")*.7+ae(r,"luk")*.2)));f(r,h,!1,!0)}break;case"manaDrain":if(r){let h=Math.max(1,Math.floor(ae(r,"int")*.3));r.str=Math.max(1,(r.mp||0)-h),s.mp=(s.mp||0)+h,d(r.x,r.y,`-${h} MP`,!1),d(s.x,s.y,`+${h} MP`,!0)}break;case"mantra":if(r){let h=Math.max(1,Math.floor(ae(s,"int")*.3));if(s.tempBuff=s.tempBuff||{},s.tempBuff.int=h,s.tempBuff.duration=3,d(s.x,s.y,`+${h} LUK`,!0),!r)break;r.tempBuff=r.tempBuff||{},r.tempBuff.luk=h,r.tempBuff.duration=3,d(r.x,r.y,`+${h} LUK`,!0)}break;case"chakra":{if(f(s,Math.max(1,Math.floor(ae(s,"int")*.3+ae(s,"luk")*.2)),!0),!r)break;f(r,Math.max(1,Math.floor(ae(s,"int")*.3+ae(r,"luk")*.2)),!0)}break;case"weaken":{if(!r)break;let h=1;r.vit=Math.max(1,(r.vit||0)-h),s.vit=(s.vit||0)+h,d(r.x,r.y,`-${h} VIT`,!1),d(s.x,s.y,`+${h} VIT`,!0)}break;case"feast":{if(!r)break;let h=Math.max(1,Math.floor(ae(s,"str")*.7-(ae(r,"vit")*.3+ae(r,"luk")*.2)));f(r,h,!1)&&f(s,h,!0)}break;case"impale":{if(!r)break;let h=2;r.tempDebuff=r.tempDebuff||{},r.tempDebuff.agi=h,r.tempDebuff.duration=4,d(r.x,r.y,`-${h} AGI`,!1)}break;case"pierce":{if(!r)break;let h=Math.max(1,Math.floor(ae(s,"str")*.6));f(r,h,!1)}break;case"focus":s.tempBuff=s.tempBuff||{},s.tempBuff.dex=3,s.tempBuff.duration=3,d(s.x,s.y,"+3 DEX",!0);break;case"snipe":{if(!r)break;let h=Math.max(1,Math.floor(ae(s,"dex")*.7-(ae(r,"vit")*.3+ae(r,"luk")*.2)));f(r,h,!1)}break;case"cripple":{if(!r)break;let h=1;r.agi=Math.max(1,(r.agi||0)-h),s.agi=(s.agi||0)+h,d(r.x,r.y,`-${h} AGI`,!1),d(s.x,s.y,`+${h} AGI`,!0)}break;case"execute":if(r){let h=Math.max(1,Math.floor(ae(s,"agi")*.7-(ae(r,"vit")*.3+ae(r,"luk")*.2)));f(r,h,!1)}break;case"berserk":r&&(f(r,Math.max(1,Math.floor(ae(s,"str")*.8-ae(r,"vit")*.3+ae(r,"luk")*.2)),!1),f(s,3,!1));break;case"bloodlust":{let h=Math.max(1,Math.floor((s.maxHp-s.hp)*.2));s.tempBuff=s.tempBuff||{},s.tempBuff.str=h,s.tempBuff.vit=h,s.tempBuff.duration=2,d(s.x,s.y,`+${h} STR, +${h} VIT`,!0)}break;case"hex":{if(!r)break;let h=1;r.int=Math.max(1,(r.int||0)-h),s.int=(s.int||0)+h,d(r.x,r.y,`-${h} INT`,!1),d(s.x,s.y,`+${h} INT`,!0)}break;case"drain":{if(!r)break;let h=Math.max(1,Math.ceil(ae(s,"int")*.6-(ae(r,"int")*.4+ae(r,"luk")*.2)));f(r,h,!1,!0),f(s,h,!0)}break;case"blind":{if(!r)break;let h=1;r.dex=Math.max(1,(r.dex||0)-h),s.dex=(s.dex||0)+h,d(r.x,r.y,`-${h} DEX`,!1),d(s.x,s.y,`+${h} DEX`,!0)}break;case"shuriken":{if(!r)break;let h=Math.max(1,Math.floor(ae(s,"dex")*.7-(ae(r,"vit")*.3+ae(r,"luk")*.2)));f(r,h,!1)}break;case"iaido":s.tempBuff=s.tempBuff||{},s.tempBuff.str=1,s.tempBuff.dex=1,s.tempBuff.duration=4,d(s.x,s.y,"+1 STR, +1 DEX",!0);break;case"chokuto":{if(!r)break;let h=Math.max(1,Math.floor(ae(s,"str")*.4+ae(s,"dex")*.4-(ae(r,"vit")*.3+ae(r,"luk")*.2)));f(r,h,!1)}break;case"bite":{if(!r)break;let h=Math.max(1,Math.floor(ae(s,"str")*.7+ae(s,"agi")*.1-(ae(r,"vit")*.3+ae(r,"luk")*.2)));f(r,h,!1)}break;case"howl":s.tempBuff=s.tempBuff||{},s.tempBuff.str=2,s.tempBuff.agi=2,s.tempBuff.duration=4,d(s.x,s.y,"+2 STR, +2 AGI",!0);break;case"sacrifice":{let h=Math.max(1,Math.floor(ae(s,"int")*.4));f(r,h,!0),f(s,3,!1)}break;case"judgement":{if(!r)break;let h=Math.max(1,Math.floor(s.maxHp-s.hp-(ae(r,"int")*.3+ae(r,"luk")*.2+ae(r,"vit")*.1)));f(r,h,!1,!0)}break;case"sanctuary":s.tempBuff=s.tempBuff||{},s.tempBuff.str=1,s.tempBuff.vit=1,s.tempBuff.dex=1,s.tempBuff.agi=1,s.tempBuff.int=1,s.tempBuff.luk=1,s.tempBuff.duration=3,r.tempBuff=r.tempBuff||{},r.tempBuff.str=1,r.tempBuff.vit=1,r.tempBuff.dex=1,r.tempBuff.agi=1,r.tempBuff.int=1,r.tempBuff.luk=1,r.tempBuff.duration=3,d(s.x,s.y,"+1 ALL STATS",!0),d(r.x,r.y,"+1 ALL STATS",!0);break;case"exorcise":{if(!r)break;let h=Math.max(1,Math.floor(r.maxHp-r.hp-(ae(r,"int")*.4+ae(r,"luk")*.2)));f(r,h,!1,!0)}break;case"raid":r.luk=Math.max(1,(r.luk||0)-2),s.luk=(s.luk||0)+2,d(r.x,r.y,"-2 LUK",!1),d(s.x,s.y,"+2 LUK",!0);break;case"assault":{if(!r)break;let h=Math.max(1,Math.floor(ae(s,"luk")*.6-(ae(r,"vit")*.3+ae(r,"luk")*.2)));f(r,h,!1)}break;case"windWalk":s.tempBuff=s.tempBuff||{},s.tempBuff.dex=1,s.tempBuff.agi=3,s.tempBuff.duration=3,d(s.x,s.y,"+1 DEX, +3 AGI",!0);break;case"powerShot":{if(!r)break;let h=Math.max(1,Math.floor(ae(s,"dex")*.6-(ae(r,"vit")*.3+ae(r,"luk")*.2)));if(f(r,h,!1)&&n.world&&n.units&&n.updateUnitPosition){let v=Math.max(1,Math.floor(h*.2)),g=Mx(n.world,n.units,s,r,v);r.x=g.newGx,r.y=g.newGy,n.updateUnitPosition(r),n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(r),g.collisionDamage>0&&f(r,g.collisionDamage,!1)}}break;case"forge":s.tempBuff=s.tempBuff||{},s.tempBuff.str=2,s.tempBuff.duration=3,r.tempBuff=r.tempBuff||{},r.tempBuff.str=2,r.tempBuff.duration=3,d(s.x,s.y,"+2 STR",!0),d(r.x,r.y,"+2 STR",!0);break;case"fortify":s.tempBuff=s.tempBuff||{},s.tempBuff.str=3,s.tempBuff.vit=3,s.tempBuff.duration=3,r.tempBuff=r.tempBuff||{},r.tempBuff.str=3,r.tempBuff.vit=3,r.tempBuff.duration=3,d(s.x,s.y,"+3 STR, +3 VIT",!0),d(r.x,r.y,"+3 STR, +3 VIT",!0);break;case"poison":{if(!r)break;let h=Math.max(1,Math.floor(ae(r,"luk")*.2));r.tempDebuff=r.tempDebuff||{},r.tempDebuff.poison=h,r.tempDebuff.duration=3,d(r.x,r.y,"Poisoned for 2 turns",!1)}break;case"concoct":{if(!r)break;let h=Math.max(1,Math.floor(ae(s,"int")*.8-(ae(r,"int")*.4+ae(r,"luk")*.2)));f(r,h,!1,!0);let _=Math.max(1,Math.floor(h*.5));s.luk=Math.max(1,(s.luk||0)+_),d(s.x,s.y,`+${_} LUK`,!0)}break;default:break}console.log("[SKILL]",`${s.name} (${s.class}, P${s.player})`,"uses",l,"\u2192",c,`| MP ${s.mp}`,u!=null?`| ${u} dmg`:""),n.updateTurnUI&&n.updateTurnUI()}function _x(){let i=fx,e=px,t=Array.from({length:e},()=>Array(i).fill(!1)),n=Array.from({length:e},()=>Array(i).fill(0)),s=Array.from({length:e},()=>Array(i).fill(et.GRASS)),r=Math.floor(i/2),a=Math.floor(i/2),o=0,l=e-1;for(let N=-1;N<=1;N++)for(let B=-2;B<=2;B++){let j=r+B,P=o+N;j>=0&&j<i&&P>=0&&P<e&&(t[P][j]=!0,s[P][j]=et.BASE_TOP,n[P][j]=1)}for(let N=-1;N<=1;N++)for(let B=-2;B<=2;B++){let j=a+B,P=l+N;j>=0&&j<i&&P>=0&&P<e&&(t[P][j]=!0,s[P][j]=et.BASE_BOTTOM,n[P][j]=1)}let c=Math.floor(i/2),u=Math.floor(e/2);for(let N=-1;N<=1;N++)for(let B=-2;B<=2;B++){let j=c+B,P=u+N;j>=0&&j<i&&P>=0&&P<e&&(t[P][j]=!0,s[P][j]=et.CENTER,n[P][j]=1)}let f=new Set,d=(N,B)=>Math.abs(N-c)<=2&&Math.abs(B-u)<=1,h=(N,B)=>{N<0||N>=i||B<0||B>=e||d(N,B)||f.add(B*i+N)},_=Math.floor(i/2),v=Math.floor(e/2),g=Math.min(i,e)*.29,p=Math.max(60,(e+i)*2);for(let N=0;N<2;N++){let B=N===0?_-g:_+g,j=N===0?Math.PI/2:-Math.PI/2,P=N===0?Math.PI*3/2:Math.PI/2;for(let W=0;W<=p;W++){let D=W/p,se=j+D*(P-j),Y=B+g*Math.cos(se),Q=v+g*Math.sin(se),ie=Math.round(Y),he=Math.round(Q);h(ie,he),h(ie+1,he),h(ie-1,he),h(ie,he+1),h(ie,he-1)}}let M=[[0,1],[0,-1],[1,0],[-1,0]];for(let N=0;N<1;N++){let B=[];f.forEach(j=>{let P=j%i,W=j/i|0;for(let[D,se]of M){let Y=P+D,Q=W+se;if(Y<0||Y>=i||Q<0||Q>=e)continue;let ie=Q*i+Y;f.has(ie)||B.push(ie)}}),B.forEach(j=>f.add(j))}f.forEach(N=>{let B=N%i,j=N/i|0;s[j][B]===et.BASE_TOP||s[j][B]===et.BASE_BOTTOM||s[j][B]===et.CENTER||(t[j][B]=!0,s[j][B]=et.PATH,n[j][B]=1)});let y=Math.round(_-g*1.6),T=Math.round(_+g*1.6),O=Math.round(_-g),I=Math.round(_+g),L=1;for(let N=u-L;N<=u+L;N++)if(!(N<0||N>=e))for(let B=y;B<=T;B++)B<0||B>=i||(t[N][B]=!0,s[N][B]!==et.CENTER&&s[N][B]!==et.BASE_TOP&&s[N][B]!==et.BASE_BOTTOM&&(s[N][B]=et.PATH),n[N][B]=Math.max(n[N][B],1));function $(N,B,j,P){let W=Math.max(1,Math.min(N,B)),D=Math.min(e-2,Math.max(N,B)),se=Math.max(1,Math.min(j,P)),Y=Math.min(i-2,Math.max(j,P));for(let Q=W;Q<=D;Q++)for(let ie=se;ie<=Y;ie++)s[Q][ie]===et.BASE_TOP||s[Q][ie]===et.BASE_BOTTOM||s[Q][ie]===et.CENTER||(t[Q][ie]=!0,s[Q][ie]=et.PATH,n[Q][ie]=1)}let S=3,A=3;$(o,o+S-1,O,r-1),$(o,o+S-1,r+1,I),$(l-A+1,l,O,a-1),$(l-A+1,l,a+1,I);for(let N=-1;N<=2;N++)for(let B=-2;B<=2;B++){let j=r+B,P=o+N;j>=0&&j<i&&P>=0&&P<e&&(t[P][j]=!0,s[P][j]=et.BASE_TOP,n[P][j]=1)}for(let N=-2;N<=1;N++)for(let B=-2;B<=2;B++){let j=a+B,P=l+N;j>=0&&j<i&&P>=0&&P<e&&(t[P][j]=!0,s[P][j]=et.BASE_BOTTOM,n[P][j]=1)}for(let N=0;N<e;N++)for(let B=0;B<i;B++){if(t[N][B]||s[N][B]===et.BASE_TOP||s[N][B]===et.BASE_BOTTOM||s[N][B]===et.CENTER)continue;let j=Math.abs(B-r)<=4&&Math.abs(N-o)<=3,P=Math.abs(B-a)<=4&&Math.abs(N-l)<=3,W=j||P,D=Math.random();D<.55&&!W?(s[N][B]=et.TREE,n[N][B]=1+Math.floor(Math.random()*2)):D<.75||W&&D<.5?(s[N][B]=et.WATER,n[N][B]=0):(s[N][B]=et.ROCK,n[N][B]=1+Math.floor(Math.random()*2))}return{w:i,h:e,path:t,height:n,type:s,topBaseX:r,topBaseY:o,botBaseX:a,botBaseY:l}}function yx(i,e,t){let n=e===1?et.BASE_BOTTOM:et.BASE_TOP,s=[];for(let r=0;r<i.h;r++)for(let a=0;a<i.w;a++)i.type[r][a]===n&&(t&&t.has(r*i.w+a)||s.push({gx:a,gy:r}));return s}function vx(i){let e=[];for(let t=0;t<i.h;t++)for(let n=0;n<i.w;n++)i.type[t][n]===et.CENTER&&e.push({gx:n,gy:t});return e}function pu(i,e){let t=vx(i);if(t.length===0)return e;let n=s=>Math.min(...t.map(r=>Math.abs(s.gx-r.gx)+Math.abs(s.gy-r.gy)));return[...e].sort((s,r)=>n(s)-n(r))}function nr(i,e,t){if(e<0||e>=i.w||t<0||t>=i.h)return!1;let n=i.type[t][e];return!(n===et.TREE||n===et.WATER||n===et.ROCK)}function Mx(i,e,t,n,s){let r=n.x,a=n.y,o=n.x-t.x,l=n.y-t.y,c=Math.abs(o)>=Math.abs(l)?o>0?1:o<0?-1:0:0,u=Math.abs(l)>Math.abs(o)?l>0?1:l<0?-1:0:0;if(c===0&&u===0)return{newGx:r,newGy:a,collisionDamage:0};let f=0;for(let d=0;d<s;d++){let h=r+c,_=a+u,v=h<0||h>=i.w||_<0||_>=i.h,g=!nr(i,h,_),p=e.some(M=>M.hp>0&&M.id!==n.id&&M.x===h&&M.y===_);if(v||g||p){let M=Math.max(1,f*3+Math.floor((t.str||0)*.3));return{newGx:r,newGy:a,collisionDamage:M}}r=h,a=_,f++}return{newGx:r,newGy:a,collisionDamage:0}}function bx(i,e,t,n){let s=[],r=i,a=e,o=t,l=n,c=Math.abs(o-r),u=Math.abs(l-a),f=r<o?1:-1,d=a<l?1:-1,h=c-u;for(;s.push({x:r,y:a}),!(r===o&&a===l);){let _=2*h;_>-u&&(h-=u,r+=f),_<c&&(h+=c,a+=d)}return s}function ys(i,e,t,n,s){let r=bx(e,t,n,s);for(let a=1;a<r.length-1;a++){let o=r[a];if(!nr(i,o.x,o.y))return!1}return!0}function Qa(i,e,t,n,s,r){let a=(f,d)=>d*i.w+f,o=new Map;o.set(a(e,t),0);let l=[{x:e,y:t,d:0}],c=[[0,1],[0,-1],[1,0],[-1,0]],u=s!=null&&r!=null;for(;l.length;){let{x:f,y:d,d:h}=l.shift();if(!(h>=n))for(let[_,v]of c){let g=f+_,p=d+v;if(!nr(i,g,p))continue;if(u){let T=s.find(O=>O.hp>0&&O.x===g&&O.y===p);if(T&&T.player!==r.player)continue}let M=a(g,p);if(o.has(M))continue;let y=h+1;o.set(M,y),l.push({x:g,y:p,d:y})}}return o}function mu(i,e,t,n){let s=new Map;for(let r=0;r<i.h;r++)for(let a=0;a<i.w;a++){let o=Math.abs(a-e)+Math.abs(r-t);o>=1&&o<=n&&s.set(r*i.w+a,o)}return s}function es(i,e,t,n,s,r,a){if(e===n&&t===s)return[{x:e,y:t}];let o=(d,h)=>h*i.w+d,l=new Map,c=[{x:e,y:t}];l.set(o(e,t),null);let u=[[0,1],[0,-1],[1,0],[-1,0]];function f(d,h){if(!nr(i,d,h))return!1;let _=r.find(v=>v.hp>0&&v.x===d&&v.y===h);return _?_.id===a.id||_.player===a.player:!0}for(;c.length;){let{x:d,y:h}=c.shift();if(d===n&&h===s){let _=[],v={x:n,y:s};for(;v;)_.unshift(v),v=l.get(o(v.x,v.y));return _}for(let[_,v]of u){let g=d+_,p=h+v,M=o(g,p);l.has(M)||f(g,p)&&(l.set(M,{x:d,y:h}),c.push({x:g,y:p}))}}return null}var gu={[et.PATH]:2976557,[et.GRASS]:2968109,[et.TREE]:1719578,[et.WATER]:1989278,[et.ROCK]:4872778,[et.BASE_TOP]:8014410,[et.BASE_BOTTOM]:4872826,[et.CENTER]:13940810};function xu(i){return i.w*yt/2}function _u(i){return i.h*yt/2}function yu(i){let e=document.createElement("canvas");e.width=i,e.height=i;let t=e.getContext("2d"),n=t.createImageData(i,i),s=n.data;for(let a=0;a<s.length;a+=4){let o=Math.floor(128+(Math.random()-.5)*80);s[a]=s[a+1]=s[a+2]=o,s[a+3]=255}t.putImageData(n,0,0);let r=new Na(e);return r.wrapS=r.wrapT=Mr,r.repeat.set(4,4),r.needsUpdate=!0,r}function Sx(i){let e=new ri,t=xu(i),n=_u(i),s=new Tn(yt,Gn,yt),r=yu(64),a=.88,o=.02,l=[];function c(d,h,_,v,g){let p=new Dn({color:3828266,roughness:.9});p.bumpMap=r,p.bumpScale=.12;for(let M=0;M<v;M++){let y=.08+Math.random()*g,T=.03+Math.random()*.03,O=new Je(new Qi(T*.5,T,y,6),p);O.position.set(d+(Math.random()-.5)*.5,_+y/2,h+(Math.random()-.5)*.5),O.rotation.x=(Math.random()-.5)*.2,O.rotation.z=(Math.random()-.5)*.2,O.castShadow=!0,e.add(O)}}let u=.12;function f(d,h,_,v){let g=_+.02,p=[[d-u,g,h-u],[d+u,g,h+u],[d-u,g,h+u],[d+u,g,h-u],[d-u+.06,g,h-u+.06],[d+u-.06,g,h+u-.06],[d-u+.06,g,h+u-.06],[d+u-.06,g,h-u+.06]],M=new Float32Array(p.length*3);p.forEach((I,L)=>{M[L*3]=I[0],M[L*3+1]=I[1],M[L*3+2]=I[2]});let y=new Kn;y.setAttribute("position",new Zn(M,3)),y.computeBoundingSphere();let T=new Rr({color:855309,linewidth:1}),O=new Ua(y,T);v.add(O)}for(let d=0;d<i.h;d++)for(let h=0;h<i.w;h++){let _=i.type[d][h],v=i.height[d][h],g=gu[_],p=Gn+v*.35,M=p/2+Gn/2,y=new Dn({roughness:Math.max(.7,Math.min(1,a+(Math.random()-.5)*.18)),metalness:Math.max(0,Math.min(.1,o+(Math.random()-.5)*.04))}),T=(g>>16&255)/255,O=(g>>8&255)/255,I=(g&255)/255,L=T,$=O,S=I;if(_===et.PATH||_===et.TREE||_===et.ROCK){let se=Math.random()*.45;L=T*(1-se)+.42*se,$=O*(1-se)+.26*se,S=I*(1-se)+.14*se}(_===et.TREE||_===et.ROCK)&&(L*=.5,$*=.5,S*=.5);let A=1+(Math.random()-.5)*.12;y.color.setRGB(Math.min(1,L*A),Math.min(1,$*A),Math.min(1,S*A)),y.bumpMap=r,y.bumpScale=.12;let N=new Je(s,y);N.position.set(h*yt-t+yt/2,p/2,d*yt-n+yt/2),N.castShadow=!0,N.receiveShadow=!0,N.userData={gx:h,gy:d,type:_},e.add(N);let B=h*yt-t+yt/2,j=d*yt-n+yt/2;if(_===et.TREE&&f(B,j,M,e),_===et.TREE){let P=new ri;P.position.set(B,M,j);let W=h===0||h===i.w-1||d===0||d===i.h-1,D=W?.75+Math.random()*.35:.5+Math.random()*.2,se=new gt(4007959),Y=()=>1+(Math.random()-.5)*.4;se.r=Math.min(1,Math.max(0,se.r*Y())),se.g=Math.min(1,Math.max(0,se.g*Y())),se.b=Math.min(1,Math.max(0,se.b*Y()));let Q=.85+Math.random()*.2,ie=new Dn({color:se,roughness:Q});ie.bumpMap=r,ie.bumpScale=.1+Math.random()*.12;let he=new Je(new Qi(.12,.14,D,8),ie);he.position.set(0,D/2,0),he.castShadow=!0,he.raycast=function(){},P.add(he);let xe=r.clone();xe.repeat.set(3,3);let te=new gt(2972205),fe=()=>1+(Math.random()-.5)*.44;te.r=Math.min(1,Math.max(0,te.r*fe())),te.g=Math.min(1,Math.max(0,te.g*fe())),te.b=Math.min(1,Math.max(0,te.b*fe()));let Ce=.78+Math.random()*.24,Ve=new Dn({color:te,roughness:Ce});Ve.bumpMap=xe,Ve.bumpScale=.16+Math.random()*.14;let Ge=W?.52:.45,ot=W?1.05:.9,ut=.12,We=ot*.5,Et=ot*.45,K=ot*.4,Qt=new Je(new gi(Ge,We,8),Ve);Qt.position.set(0,D+We/2,0),Qt.castShadow=!0,Qt.raycast=function(){},P.add(Qt);let je=new Je(new gi(Ge*.75,Et,8),Ve);je.position.set(0,D+We-ut+Et/2,0),je.castShadow=!0,je.raycast=function(){},P.add(je);let rt=new Je(new gi(Ge*.5,K,8),Ve);rt.position.set(0,D+We-ut+Et-ut+K/2,0),rt.castShadow=!0,rt.raycast=function(){},P.add(rt),e.add(P),l.push(P)}else if(_===et.WATER){let P=gu[et.WATER],W=(P>>16&255)/255,D=(P>>8&255)/255,se=(P&255)/255,Y=1+(Math.random()-.5)*.12,Q=new Dn({color:new gt().setRGB(Math.min(1,W*Y),Math.min(1,D*Y),Math.min(1,se*Y)),roughness:.08,metalness:.45,transparent:!0,opacity:.94,bumpMap:r,bumpScale:.03}),ie=new Je(new Di(yt,yt),Q);ie.rotation.x=-Math.PI/2,ie.position.set(B,M+.02,j),ie.receiveShadow=!0,e.add(ie)}else if(_===et.ROCK){let P=new Dn({color:6974058,roughness:.9});P.bumpMap=r,P.bumpScale=.2;let W=(Q,ie,he)=>{let xe=new Je(new Ha(Q,0),P);xe.position.set(B+ie,M+Q-.2,j+he),xe.rotation.set(Math.random(),Math.random(),Math.random()),xe.castShadow=!0,e.add(xe)},D=.32+Math.random()*.14,se=.2+Math.random()*.12,Y=.12+Math.random()*.12;W(D,(Math.random()-.5)*.15,(Math.random()-.5)*.15),W(se,(Math.random()-.5)*.25,(Math.random()-.5)*.25),W(Y,(Math.random()-.5)*.28,(Math.random()-.5)*.28)}}return e.userData.treeGroups=l,e}function Ex(){let i=document.querySelector("#mode-select-overlay .mode-select-instructions");i&&console.log(i.textContent.trim());let e=_x(),t=document.getElementById("canvas-wrap"),n=new Da;n.background=new gt(1711652),n.fog=new La(1711652,30,90);let s=e.w*yt/2,r=e.h*yt/2,a=new zn(50,t.clientWidth/t.clientHeight,.1,200),o=17,l=new F(12,38,16).normalize().multiplyScalar(o),c=new F,u=new F,f=new fi(new F(0,1,0),0),d=new F,h=new F,_=!1,v=!1,g=!1,p=null,M=5,y=.004,T=-Math.PI*.4,O=Math.PI*.4,I=new F,L={x:0,y:0},$=1,S=40,A=.08,N=.15,B=null,j=new Ga(16777215,.45);n.add(j);let P=new Va(16774630,1.1);P.position.set(30,50,20),P.castShadow=!0,P.shadow.mapSize.width=2048,P.shadow.mapSize.height=2048,P.shadow.camera.near=1,P.shadow.camera.far=120,P.shadow.camera.left=-50,P.shadow.camera.right=50,P.shadow.camera.top=50,P.shadow.camera.bottom=-50,n.add(P);let W=Sx(e);n.add(W);let D=[],se=1,Y=new Map,Q=yu(64),ie=xu(e),he=_u(e);function xe(x,m){let w=(Gn+e.height[m][x]*.35)/2+Gn/2;return new F(x*yt-ie+yt/2,w,m*yt-he+yt/2)}function te(x,m){let R=(x>>16&255)/255,w=(x>>8&255)/255,H=(x&255)/255,z=1+(Math.random()-.5)*m;return new gt(Math.min(1,R*z),Math.min(1,w*z),Math.min(1,H*z))}let fe=.62;function Ce(x,m){m=m??fe;let R=x instanceof gt?x:new gt(x);return new gt(Math.max(0,R.r*m),Math.max(0,R.g*m),Math.max(0,R.b*m))}function Ve(x,m,R){let w=Ja[m]||Ja.knight,H=Ce(te(w.primary,.08)),z=Ce(te(w.secondary,.08)),V=Bt[m]&&Bt[m].gender||"male",k=R??4006676,G=Ce(te(w.skin!=null?w.skin:15250592,.06)),Z=Ce(te(k,.08)),ce=()=>(Math.random()-.5)*.08,Ae=()=>(Math.random()-.5)*.04,le=new Dn({color:H,metalness:Math.max(0,.25+Ae()),roughness:Math.max(.3,Math.min(1,.5+ce()))});le.bumpMap=Q,le.bumpScale=.1;let pe=new Dn({color:z,metalness:Math.max(0,.2+Ae()),roughness:Math.max(.3,Math.min(1,.55+ce()))});pe.bumpMap=Q,pe.bumpScale=.1;let Fe=new Dn({color:H,metalness:Math.max(0,.25+Ae()),roughness:Math.max(.3,Math.min(1,.5+ce()))});Fe.bumpMap=Q,Fe.bumpScale=.1;let kt=new Dn({color:G,metalness:.1,roughness:Math.max(.5,Math.min(1,.7+ce()))});kt.bumpMap=Q,kt.bumpScale=.05;let It=new ri,Tt=.28,Jt=.08,nn=.08,sn=new Je(new Tn(Jt,Tt,nn),pe);sn.position.set(-.06,Tt/2,0),sn.castShadow=!0,It.add(sn);let Mn=new Je(new Tn(Jt,Tt,nn),pe);Mn.position.set(.06,Tt/2,0),Mn.castShadow=!0,It.add(Mn);let Vt=.28,Ot=.2,wt=.12,Yt=new Je(new Tn(Ot,Vt,wt),le);Yt.position.set(0,Tt+Vt/2,0),Yt.castShadow=!0,It.add(Yt);let bt=.06,gn=.22,bn=.06,Sn=new Je(new Tn(bt,gn,bn),Fe);Sn.position.set(-(Ot/2+bt/2),Tt+Vt-.08,0),Sn.castShadow=!0,It.add(Sn);let Cn=new Je(new Tn(bt,gn,bn),Fe);if(Cn.position.set(Ot/2+bt/2,Tt+Vt-.08,0),Cn.castShadow=!0,It.add(Cn),w.cape!=null){let we=Ot*1.95,be=we*.6,Ue=Tt+Vt*.28,Lt=new js;Lt.moveTo(-be/2,Ue/2),Lt.lineTo(be/2,Ue/2),Lt.lineTo(we/2,-Ue/2),Lt.lineTo(-we/2,-Ue/2),Lt.closePath();let Wt=new Dr(Lt),qe=new Dn({color:Ce(te(w.cape,.08)),metalness:.15,roughness:Math.max(.5,Math.min(1,.8+ce())),side:hn});qe.bumpMap=Q,qe.bumpScale=.12;let dt=new Je(Wt,qe);dt.position.set(0,Tt+Vt-Ue/2+.05,-wt/2-.02),dt.rotation.y=Math.PI,dt.castShadow=!0,It.add(dt);let Ct=.055,pn=Tt+Vt+.02,rn=.02,En=Ot/2+bt*.5,an=new Je(new bi(Ct,10,8,0,Math.PI*2,0,Math.PI*.55),qe.clone());an.position.set(-En,pn,rn),an.rotation.x=-Math.PI*.35,an.rotation.z=Math.PI*.5,an.scale.set(1.2,.85,1.1),an.castShadow=!0,It.add(an);let Un=new Je(new bi(Ct,10,8,0,Math.PI*2,0,Math.PI*.55),qe.clone());Un.position.set(En,pn,rn),Un.rotation.x=-Math.PI*.35,Un.rotation.z=-Math.PI*.5,Un.scale.set(1.2,.85,1.1),Un.castShadow=!0,It.add(Un)}if(w.belt!=null){let we=new Dn({color:Ce(te(w.belt,.08)),metalness:.2,roughness:Math.max(.4,Math.min(1,.6+ce()))});we.bumpMap=Q,we.bumpScale=.1;let be=.022,Ue=.04,Lt=new Je(new Tn(Ot+.04,be,wt+Ue),we);Lt.position.set(0,Tt+.04,0),Lt.castShadow=!0,It.add(Lt)}if(w.apron!=null){let we=new Dn({color:Ce(te(w.apron,.08)),metalness:.08,roughness:Math.max(.5,Math.min(1,.75+ce())),side:hn});we.bumpMap=Q,we.bumpScale=.12;let be=Ot*.95,Ue=Tt*.85,Lt=new Je(new Di(be,Ue),we),Wt=Tt+.2;Lt.position.set(0,Wt-Ue/2,wt/2+.02),Lt.castShadow=!0,It.add(Lt);let qe=Tt+Vt+.02,dt=Ot/2+bt*.2,Ct=.018,pn=.008,rn=qe-Wt,En=new Je(new Tn(Ct,rn,pn),we.clone());En.position.set(-dt,(Wt+qe)/2,wt/2+.015),En.castShadow=!0,It.add(En);let an=new Je(new Tn(Ct,rn,pn),we.clone());an.position.set(dt,(Wt+qe)/2,wt/2+.015),an.castShadow=!0,It.add(an)}let re=.1,ge=new Je(new bi(re,12,10),kt);ge.position.set(0,Tt+Vt+re,0),ge.castShadow=!0,It.add(ge);let Me=new un({color:1710638}),de=new Je(new Tn(.032,.004,.004),Me);de.position.set(-.032,.028,re*.92),ge.add(de);let ue=new Je(new Tn(.032,.004,.004),Me);ue.position.set(.032,.028,re*.92),ge.add(ue);let ye=new un({color:2957087}),Te=new Je(new Tn(.045,.012,.008),ye);Te.position.set(0,-.028,re*.92),ge.add(Te);let ve=new Dn({color:Z,metalness:.05,roughness:Math.max(.6,Math.min(1,.85+ce()))});ve.bumpMap=Q,ve.bumpScale=.15;let st=we=>{let be=re*.32,Ue=re*.22,Lt=new Je(new gi(Ue*.9,be,5),ve);Lt.position.set(-re*.25,re*.22,re*.72),Lt.rotation.x=.35,Lt.rotation.z=.12,Lt.castShadow=!0,we.add(Lt);let Wt=new Je(new gi(Ue,be,5),ve);Wt.position.set(re*.28,re*.18,re*.68),Wt.rotation.x=.28,Wt.rotation.z=-.1,Wt.castShadow=!0,we.add(Wt);let qe=new Je(new gi(Ue*.7,be*.9,5),ve);qe.position.set(0,re*.28,re*.78),qe.rotation.x=.4,qe.castShadow=!0,we.add(qe)};if(V==="female"){let we=new Je(new bi(re*.92,12,10,0,Math.PI*2,0,Math.PI*.52),ve);we.position.set(0,re*.28,-re*.18),we.rotation.y=.06,we.rotation.x=-.04,we.castShadow=!0,ge.add(we);let be=new Je(new Tn(re*1.15,re*2.2,re*.55),ve);be.position.set(0,-re*.6,-re*.95),be.rotation.z=.03,be.castShadow=!0,ge.add(be),st(ge)}else{let we=new Je(new bi(re*.9,12,10,0,Math.PI*2,0,Math.PI*.5),ve);we.position.set(0,re*.4,-re*.12),we.rotation.y=.08,we.rotation.x=-.05,we.rotation.z=.04,we.castShadow=!0,ge.add(we);let be=new Je(new bi(re*.75,10,8,Math.PI*.2,Math.PI*.6,0,Math.PI*.4),ve);be.position.set(0,re*.1,-re*.05),be.rotation.y=.1,be.castShadow=!0,ge.add(be),st(ge)}return It.userData.leftLeg=sn,It.userData.rightLeg=Mn,It.userData.leftArm=Sn,It.userData.rightArm=Cn,It}function Ge(x,m){let R=x.userData;if(!R.leftLeg)return;let w=m*Math.PI*2,H=.35,z=.28;R.leftLeg.rotation.x=Math.sin(w)*H,R.rightLeg.rotation.x=Math.sin(w+Math.PI)*H,R.leftArm.rotation.y=Math.sin(w+Math.PI)*z,R.rightArm.rotation.y=Math.sin(w)*z}function ot(x){let m=x.userData;m.leftLeg&&(m.leftLeg.rotation.x=0,m.rightLeg.rotation.x=0,m.leftArm.rotation.y=0,m.rightArm.rotation.y=0)}function ut(x){let m=Ve(x.player,x.class,x.hairColor);m.position.copy(xe(x.x,x.y)),m.castShadow=!0,m.userData.unitId=x.id;let R=.28,w=.28,H=.12,z=.18,V=.04,k=new Di(z,V),G=new un({color:6037528,side:hn,depthTest:!0,depthWrite:!1}),Z=new Je(k,G);Z.position.set(0,R+w/2,H/2+.02),Z.rotation.x=-Math.PI/2,Z.rotation.z=Math.PI/4,Z.visible=x.maxHp>0&&x.hp<x.maxHp&&x.hp>0,m.add(Z),m.userData.slashMark=Z,n.add(m),Y.set(x.id,m),K(m,x.maxHp>0&&x.hp/x.maxHp<.35)}function We(x){let m=Y.get(x.id);!m||!m.userData.slashMark||(m.userData.slashMark.visible=x.maxHp>0&&x.hp<x.maxHp&&x.hp>0)}let Et=.35;function K(x,m){if(x)if(m){x.rotation.x=.35,x.scale.setScalar(.96);let R=x.userData;R&&R.leftArm&&R.rightArm&&(R.leftArm.rotation.y=.2,R.rightArm.rotation.y=.2),x.traverse(w=>{w.isMesh&&w.material&&w.material.color&&(w.userData.originalColor||(w.userData.originalColor=w.material.color.clone()),w.material.color.copy(w.userData.originalColor).multiplyScalar(.82))})}else{x.rotation.x=0,x.scale.setScalar(1);let R=x.userData;R&&R.leftArm&&R.rightArm&&(R.leftArm.rotation.y=0,R.rightArm.rotation.y=0),x.traverse(w=>{w.isMesh&&w.material&&w.userData.originalColor&&w.material.color.copy(w.userData.originalColor)})}}function Qt(x){if(x.level>=3)return;let m=x.maxHp>0?x.hp/x.maxHp:1;x.level+=1;let R=H=>Math.max(1,Math.ceil(H*1.1)),w=H=>Math.max(1,Math.ceil(H*1.1));x.maxHp=R(x.maxHp),x.maxMp=R(x.maxMp),x.hp=Math.max(1,Math.min(x.maxHp,Math.ceil(m*x.maxHp))),x.mp=Math.max(1,Math.min(x.maxMp,Math.ceil(m*x.maxMp))),x.str=w(x.str),x.agi=w(x.agi),x.vit=w(x.vit),x.dex=w(x.dex),x.luk=w(x.luk),x.int=w(x.int),x.range>2&&(x.range=w(x.range)),console.log("[LEVEL UP]",`${x.name} (${x.class}, P${x.player})`,`\u2192 Lv.${x.level}`,`| HP ${x.hp}/${x.maxHp} MP ${x.mp}/${x.maxMp} STR ${x.str} VIT ${x.vit}`),je(x)}function je(x){let m=Y.get(x.id),R=x.level===3?"levelup level3":x.level===2?"levelup level2":"levelup";if(Ou(x,R),!m)return;let w=performance.now(),H=0;function z(V){H++,H%2===0&&dn();let k=V-w,G=Math.min(1,k/Se),Z=G<.5?1+.35*(G/.5):1+.35*(1-(G-.5)/.5);m.scale.setScalar(Z),G<1?requestAnimationFrame(z):m.scale.setScalar(1)}requestAnimationFrame(z)}let rt=400,Ye=280,Gt=.45,pt=160,C=280,b=350,J=500,Se=600,_e=!1,Ee=new F,Ze=new F,Pe=new F,ke=new F;function it(x=!1){let m=null;if(ct==="playing"&&He.length>0){let V=He[De];m=D.find(k=>k.id===V&&k.hp>0)}if(m||(m=D.find(V=>V.player===oe&&V.hp>0)),!m)return;let R=a.position.distanceTo(c);if(R<.1&&(R=o),u.copy(a.position).sub(c).normalize(),u.lengthSq()<.01&&u.copy(l).normalize(),Pe.copy(xe(m.x,m.y)),ke.copy(Pe).add(u.clone().multiplyScalar(R)),x||_e){c.copy(Pe),a.position.copy(ke),a.lookAt(c),dn();return}_e=!0,Ee.copy(c),Ze.copy(a.position);let w=performance.now(),H=0;Rn.shadowMap.enabled=!1;function z(V){H++,H%2===0&&dn();let k=Math.min(1,(V-w)/rt),G=k*(2-k);c.lerpVectors(Ee,Pe,G),a.position.lerpVectors(Ze,ke,G),a.lookAt(c),k<1?requestAnimationFrame(z):(Rn.shadowMap.enabled=!0,_e=!1)}requestAnimationFrame(z)}let lt=0,oe=1,ct="draft",nt="pvp",ht="balanced",Ke=new Set(Ka),Oe=0,Qe=null,Pt=new Set,He=[],De=0,me=null,U=new Map,Ie=null;function Le(x){if(!x||x.hp<=0)return;Ie=x.id;let m=document.getElementById("unit-preview-card"),R=document.getElementById("unit-preview-image"),w=document.getElementById("unit-preview-name"),H=document.getElementById("unit-preview-meta"),z=document.getElementById("unit-preview-stats");m.classList.remove("player-1","player-2"),m.classList.add(x.player===1?"player-1":"player-2"),m.classList.toggle("level-2",x.level>=2&&x.level<3),m.classList.toggle("level-3",x.level>=3),R.src=Nr[x.class]||"",R.alt=x.name,w.textContent=x.name,H.textContent=`Lv.${x.level} ${x.class} \u2014 Player ${x.player}`,z.innerHTML=[["HP",`${x.hp}/${x.maxHp}`],["MP",`${x.mp}/${x.maxMp}`],["STR",ae(x,"str")],["AGI",ae(x,"agi")],["VIT",ae(x,"vit")],["DEX",ae(x,"dex")],["LUK",ae(x,"luk")],["INT",ae(x,"int")]].map(([k,G])=>`<span class="stat-label">${k}</span><span class="stat-val${k==="HP"?" stat-val-hp":""}">${G}</span>`).join("");let V=x.maxHp>0&&x.hp/x.maxHp<.3;m.classList.toggle("low-hp",V),m.style.display="block"}function tt(){Ie=null;let x=document.getElementById("unit-preview-card");x.classList.remove("low-hp","level-2","level-3"),x.style.display="none"}let Xe=!1,At=!1,Dt=!1,Ut=null,vt=!1,xt=!1,Zt=!1,en=[],Bn=new ri;n.add(Bn);let Jn=[],_i=!0,li=0,ts=0;function dn(){_i=!0,li=performance.now()}let Ui=new ri;n.add(Ui);let ir=[],eo=yt,to=.02,E=3368703,X=13382451;function ee(x,m){let R=x/2,w=R-m,H=new js;H.moveTo(-R,-R),H.lineTo(R,-R),H.lineTo(R,R),H.lineTo(-R,R),H.lineTo(-R,-R);let z=new Js;return z.moveTo(-w,-w),z.lineTo(w,-w),z.lineTo(w,w),z.lineTo(-w,w),z.lineTo(-w,-w),H.holes.push(z),new Dr(H)}let ne=ee(eo,to);function q(x=null){let m=D.filter(R=>R.hp>0&&R.id!==x).map(R=>`${R.id},${R.x},${R.y},${R.player}`).sort().join("|");if(!(q._lastSig===m&&q._lastExclude===x)){for(q._lastSig=m,q._lastExclude=x,ir.forEach(R=>R.dispose()),ir.length=0;Ui.children.length;){let R=Ui.children[0];Ui.remove(R)}D.filter(R=>R.hp>0&&R.id!==x).forEach(R=>{let w=R.x,H=R.y,V=(Gn+e.height[H][w]*.35)/2+Gn/2,k=w*yt-ie+yt/2,G=H*yt-he+yt/2,Z=V+.02,ce=R.player===1?E:X,Ae=new un({color:ce,side:hn}),le=new Je(ne,Ae);le.rotation.x=-Math.PI/2,le.position.set(k,Z,G),Ui.add(le),ir.push(Ae)}),dn()}}let Ne=1.15,$e={1:8102901,2:15628943},ze=(()=>{let x=new un({color:$e[1]}),m=new Je(new gi(.1,.25,8),x);return m.rotation.x=Math.PI,m.visible=!1,n.add(m),m})();function at(){if(ct!=="playing"||He.length===0||Zt){ze.visible=!1,ze.removeFromParent(),n.add(ze);return}let x=He[De],m=D.find(w=>w.id===x);if(!m||m.hp<=0){ze.visible=!1,ze.removeFromParent(),n.add(ze);return}let R=Y.get(x);if(!R){ze.visible=!1;return}ze.removeFromParent(),R.add(ze),ze.position.set(0,Ne,0),ze.material&&ze.material.color.setHex($e[m.player]??$e[1]),ze.visible=!0}function Mt(x){let m=[[0,1],[0,-1],[1,0],[-1,0]],R=[];for(let[w,H]of m){let z=x.x+w,V=x.y+H;!nr(e,z,V)||D.some(G=>G.id!==x.id&&G.x===z&&G.y===V&&G.hp>0)||R.push(Math.atan2(w,H))}return R}function ft(x){if(en.length===0)return x;if(en.length===1)return en[0];let m=en[0],R=Math.abs(mt(x-m));for(let w=1;w<en.length;w++){let H=Math.abs(mt(x-en[w]));H<R&&(R=H,m=en[w])}return m}function mt(x){for(;x>Math.PI;)x-=2*Math.PI;for(;x<-Math.PI;)x+=2*Math.PI;return x}let tn=1.2,Kt=(()=>{let x=new Je(new gi(.12,.35,8),new un({color:4500223}));return x.rotation.x=-Math.PI/2,x.visible=!1,n.add(x),x})();function mn(x,m){if(!Zt||He.length===0||en.length===0)return;let R=He[De],w=D.find(Ae=>Ae.id===R),H=Y.get(R);if(!w||!H)return;Br(x,m),Oi.setFromCamera(Fi,a);let z=Oi.intersectObjects(W.children,!0);if(z.length===0)return;let V=null;for(let Ae of z){let le=Ae.object;for(;le&&(le.userData.gx==null||le.userData.gy==null);)le=le.parent;if(le&&le.userData.gx!=null){V=Ae.point;break}}if(!V)return;let k=xe(w.x,w.y),G=V.x-k.x,Z=V.z-k.z;if(G*G+Z*Z<1e-6)return;let ce=Math.atan2(G,Z);H.rotation.y=ft(ce)}function ci(){if(He.length===0)return;let x=He[De],m=D.find(H=>H.id===x),R=Y.get(x);if(!m||!R)return;en=[[0,1],[0,-1],[1,0],[-1,0]].map(([H,z])=>Math.atan2(H,z)),Kt.removeFromParent(),R.add(Kt),Kt.position.set(0,tn,0),Kt.rotation.x=-Math.PI/2,Kt.rotation.y=0,Kt.rotation.z=Math.PI,Kt.visible=!0,R.rotation.y=en[0]}function Xt(){Kt.visible=!1,Kt.removeFromParent(),n.add(Kt)}let _t=(()=>{let x=Za,m=[1];for(let R=0;R<Math.floor((x-1)/2);R++)m.push(2,2,1,1);return x%2===1?m.push(2):(m.push(2,2),m.push(1)),m})();function Wn(){return _t[Oe]}function qt(){let x=Wn(),m=0;for(let R=0;R<Oe;R++)_t[R]===x&&m++;return m+1}function ei(){ct="draft",Oe=0,Ke=new Set(Ka),Qe=null,Pt.clear(),cn(),is(),document.getElementById("turn-menu").style.display="none",document.getElementById("draft-panel").style.display="flex"}function sr(){return D.filter(x=>x.hp>0).sort((x,m)=>{let R=ae(x,"agi"),w=ae(m,"agi");if(w!==R)return w-R;let H=ae(x,"dex");return ae(m,"dex")-H}).map(x=>x.id)}function ns(){document.getElementById("draft-panel").style.display="none";let x=document.getElementById("draft-placement-card");x&&(x.style.display="none",x.innerHTML=""),cn();let m=document.getElementById("battle-start-overlay");m&&(m.classList.add("visible"),m.setAttribute("aria-hidden","false")),document.getElementById("draft-panel").style.display="none";let R=document.getElementById("draft-placement-card");for(R&&(R.style.display="none",R.innerHTML=""),ct="playing",lt=0,He=sr(),De=0;De<He.length&&D.find(z=>z.id===He[De]).hp<=0;)De++;De>=He.length&&(De=0);let w=D.find(z=>z.id===He[De]);oe=w?w.player:1,vt=!1,xt=!1,me=He[De],setTimeout(()=>{m&&(m.classList.remove("visible"),m.setAttribute("aria-hidden","true")),document.getElementById("turn-menu").style.display="flex",q(),Nt(),at(),it(!0)},4e3)}function is(){let x=document.getElementById("draft-panel"),m=document.getElementById("draft-title"),R=document.getElementById("draft-classes"),w=document.getElementById("draft-message"),H=document.getElementById("turn-player"),z=document.getElementById("draft-placement-card");if(Qe){x.style.display="none",H.textContent=`Draft: Player ${Wn()} \u2014 place ${Bt[Qe].name}`;let k=Wn();z.style.display="flex",z.classList.remove("player-1","player-2"),z.classList.add("player-"+k),z.style.left=k===1?"24px":"",z.style.right=k===2?"24px":"";let G=[...D.filter(Ae=>Ae.player===k).map(Ae=>Ae.class),Qe],Z=(Ae,le)=>{let pe=Bt[Ae];return`
        <div class="draft-class-card${le?" draft-class-card-current":""}">
          <img class="draft-class-card-image" src="${Nr[Ae]||""}" alt="${pe.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="draft-class-card-body">
            <div class="draft-class-card-name">${pe.name}</div>
            <div class="draft-class-card-stats">
              <span class="draft-stat-label">HP</span><span class="draft-stat-value">${pe.hp}</span>
              <span class="draft-stat-label">MP</span><span class="draft-stat-value">${pe.mp}</span>
              <span class="draft-stat-label">STR</span><span class="draft-stat-value">${pe.str}</span>
              <span class="draft-stat-label">AGI</span><span class="draft-stat-value">${pe.agi}</span>
              <span class="draft-stat-label">VIT</span><span class="draft-stat-value">${pe.vit}</span>
              <span class="draft-stat-label">DEX</span><span class="draft-stat-value">${pe.dex}</span>
              <span class="draft-stat-label">LUK</span><span class="draft-stat-value">${pe.luk}</span>
              <span class="draft-stat-label">INT</span><span class="draft-stat-value">${pe.int}</span>
              <span class="draft-stat-label">Range</span><span class="draft-stat-value">${pe.range}</span>
            </div>
          </div>
        </div>
      `},ce=3;if(G.length>ce){z.classList.add("draft-placement-cols");let Ae=[];for(let pe=0;pe<G.length;pe+=ce)Ae.push(G.slice(pe,pe+ce));let le=G.length-1;z.innerHTML=Ae.map((pe,Fe)=>{let kt=Fe===Ae.length-1,It=pe.map((Tt,Jt)=>{let sn=Fe*ce+Jt===le;return Z(Tt,sn)}).join("");return`<div class="draft-placement-col${kt?" draft-placement-col-current":""}">${It}</div>`}).join("")}else z.classList.remove("draft-placement-cols"),z.innerHTML=G.map((Ae,le)=>{let pe=le===G.length-1;return Z(Ae,pe)}).join("");nt==="pvcpu"&&Wn()===2&&setTimeout(or,500),nt==="cvcpu"&&setTimeout(or,500);return}z.style.display="none",z.innerHTML="",ct==="draft"&&(x.style.display="flex");let V=Wn();m.textContent=`Player ${V}: Pick a class (${qt()}/${Za})`,w.textContent="",R.innerHTML="",H.textContent=`Draft: Player ${V} \u2014 pick a class`,xx([...Ka]).forEach(k=>{let G=Ke.has(k),Z=Bt[k],ce=document.createElement("button");ce.type="button",ce.className="draft-class-card"+(G?"":" draft-class-card-selected"),ce.disabled=!G,ce.innerHTML=`
          <img class="draft-class-card-image" src="${Nr[k]||""}" alt="${Z.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="draft-class-card-body">
            <div class="draft-class-card-name">${Z.name}</div>
            <div class="draft-class-card-stats">
              <span class="draft-stat-label">HP</span><span class="draft-stat-value">${Z.hp}</span>
              <span class="draft-stat-label">MP</span><span class="draft-stat-value">${Z.mp}</span>
              <span class="draft-stat-label">STR</span><span class="draft-stat-value">${Z.str}</span>
              <span class="draft-stat-label">AGI</span><span class="draft-stat-value">${Z.agi}</span>
              <span class="draft-stat-label">VIT</span><span class="draft-stat-value">${Z.vit}</span>
              <span class="draft-stat-label">DEX</span><span class="draft-stat-value">${Z.dex}</span>
              <span class="draft-stat-label">LUK</span><span class="draft-stat-value">${Z.luk}</span>
              <span class="draft-stat-label">INT</span><span class="draft-stat-value">${Z.int}</span>
              <span class="draft-stat-label">Range</span><span class="draft-stat-value">${Z.range}</span>
            </div>
          </div>
        `,G&&ce.addEventListener("click",()=>yn(k)),R.appendChild(ce)}),nt==="pvcpu"&&Wn()===2&&setTimeout(or,500),nt==="cvcpu"&&setTimeout(or,500)}function yn(x){if(!Ke.has(x)||Qe)return;Qe=x;let m=Wn(),R=new Set(D.map(z=>z.y*e.w+z.x)),w=yx(e,m,R),H=pu(e,w);Pt=new Set(H.map(z=>z.gy*e.w+z.gx)),Au(H),is()}function yi(x,m){if(!Qe)return;let R=Wn(),w=m*e.w+x;if(!Pt.has(w))return;let H=Bt[Qe],z={id:se++,player:R,x,y:m,level:1,name:H.name,class:Qe,hairColor:(Ja[Qe]||Ja.knight).hair,hp:H.hp,maxHp:H.maxHp,mp:H.mp,maxMp:H.maxMp,str:H.str,agi:H.agi,vit:H.vit,dex:H.dex,luk:H.luk,int:H.int,range:H.range};D.push(z),ut(z);let V=Y.get(z.id);V&&(V.rotation.y=z.player===1?Math.PI:0),Ke.delete(Qe),Qe=null,Pt.clear(),cn();let k=document.getElementById("draft-placement-card");if(k&&(k.style.display="none",k.innerHTML=""),Oe++,Oe>=2*Za){ns();return}let G=Wn(),Z=qt(),ce=document.getElementById("draft-panel"),Ae=document.getElementById("draft-title"),le=document.getElementById("draft-message"),pe=document.getElementById("draft-classes"),Fe=document.getElementById("turn-player");ce&&Ae&&pe&&Fe&&(ce.style.display="flex",Ae.textContent=`Player ${G}: Pick a class (${Z}/${Za})`,le&&(le.textContent="Get ready\u2026"),pe.innerHTML="",Fe.textContent=`Draft: Player ${G} \u2014 pick a class`),setTimeout(is,1500)}function Nt(){Nt._pending||(Nt._pending=!0,requestAnimationFrame(()=>{Nt._pending=!1,Xn()}))}function Xn(){let x=Nt._cache||(Nt._cache={}),m=x.turnEl||(x.turnEl=document.getElementById("turn-player")),R=x.menuLabel||(x.menuLabel=document.getElementById("menu-label")),w=x.turnMenu||(x.turnMenu=document.getElementById("turn-menu")),H=x.unitInfo||(x.unitInfo=document.getElementById("unit-info")),z=x.unitNameEl||(x.unitNameEl=document.getElementById("unit-name")),V=x.unitLevelClassEl||(x.unitLevelClassEl=document.getElementById("unit-level-class")),k=x.unitStatsEl||(x.unitStatsEl=document.getElementById("unit-stats")),G=x.unitClassImageEl||(x.unitClassImageEl=document.getElementById("unit-class-image"));if(ct==="playing"&&D.forEach(le=>{if(le.hp<=0)return;let pe=Y.get(le.id);pe&&K(pe,le.maxHp>0&&le.hp/le.maxHp<Et)}),w.classList.remove("player-1","player-2"),w.classList.add(oe===1?"player-1":"player-2"),w.classList.toggle("level-2",!1),w.classList.toggle("level-3",!1),ct==="playing"&&He.length>0){let le=He[De];D.find(Fe=>Fe.id===le&&Fe.hp>0)&&(me==null||!D.find(Fe=>Fe.id===me&&Fe.hp>0))&&(me=le)}if(me!=null){let le=D.find(pe=>pe.id===me);if(le&&le.hp>0){H.classList.remove("no-unit");let pe=le.maxHp>0&&le.hp/le.maxHp<.25;w.classList.toggle("low-hp",pe),w.classList.toggle("level-2",le.level>=2&&le.level<3),w.classList.toggle("level-3",le.level>=3),z.textContent=le.name,V.textContent=`Lv.${le.level} ${le.class}`,G.src=Nr[le.class]||"",G.alt=le.name,k.innerHTML=[["HP",`${le.hp}/${le.maxHp}`],["MP",`${le.mp}/${le.maxMp}`],["STR",ae(le,"str")],["AGI",ae(le,"agi")],["VIT",ae(le,"vit")],["DEX",ae(le,"dex")],["LUK",ae(le,"luk")],["INT",ae(le,"int")]].map(([Fe,kt])=>`<span>${Fe}</span><span class="stat-val${Fe==="HP"?" stat-val-hp":""}">${kt}</span>`).join("")}else w.classList.remove("low-hp","level-2","level-3"),H.classList.add("no-unit"),z.textContent="\u2014 Select a unit \u2014",V.textContent="",k.textContent="",G.src="",G.alt=""}else w.classList.remove("low-hp","level-2","level-3"),H.classList.add("no-unit"),z.textContent="\u2014 Select a unit \u2014",V.textContent="",k.textContent="",G.src="",G.alt="";if(me!=null)m.textContent=`Player ${oe} \u2014 Unit ${z.innerHTML} active`;else{let le=He.length?D.find(pe=>pe.id===He[De]):null;m.textContent=le?`${le.name} (Player ${oe})`:`Player ${oe}`}R.textContent=`Player ${oe}`;let Z=x.btnAttack||(x.btnAttack=document.getElementById("btn-attack")),ce=x.btnSkill||(x.btnSkill=document.getElementById("btn-skill")),Ae=x.btnEnd||(x.btnEnd=document.getElementById("btn-end"));if(nt==="cvcpu"&&ct==="playing")Z.disabled=!0,ce.disabled=!0,Ae&&(Ae.disabled=!0),m.textContent=`Player ${oe} (CPU)`;else if(Zt)Z.disabled=!0,ce.disabled=!0,m.textContent="Click on map to choose facing direction";else if(ct==="playing"){Z.disabled=xt;let le=He.length?He[De]:null,pe=le?D.find(It=>It.id===le&&It.hp>0):null,Fe=nt!=="cvcpu"&&(nt!=="pvcpu"||oe===1),kt=Fe&&pe&&!xt?Fr(pe):[];ce.disabled=xt||!Fe||kt.length===0,Ae&&(Ae.disabled=!1)}if(ct==="playing"){let le=Math.min(lt+1,_s);m.textContent=(m.textContent||"")+` \u2014 Turn ${le}/${_s}`;let pe=x.turnsLeftEl||(x.turnsLeftEl=document.getElementById("turns-left")),Fe=x.turnsLeftValueEl||(x.turnsLeftValueEl=document.getElementById("turns-left-value"));if(pe&&Fe){pe.style.display="";let kt=Math.max(0,_s-lt);Fe.textContent=String(kt),pe.classList.toggle("turns-left-low",kt<=10)}}else{let le=x.turnsLeftEl||(x.turnsLeftEl=document.getElementById("turns-left"));le&&(le.style.display="none")}ct==="playing"&&ro(oe)&&!Xe&&setTimeout(fn,700)}function Ft(){dn(),tt(),At=!1,Dt=!1,Ut=null,Zt=!1,en=[],Xt(),cn();let x=He.length;if(x===0)return;let m=He[De],R=D.find(k=>k.id===m);if(R&&R.tempDebuff&&R.tempDebuff.duration--,R&&R.tempDebuff&&R.tempDebuff.duration<=0&&(R.tempDebuff=void 0),R&&R.tempBuff&&R.tempBuff.duration--,R&&R.tempBuff&&R.tempBuff.duration<=0&&(R.tempBuff=void 0),R&&R.hp>0){let k=Math.ceil(ae(R,"int")*.15);R.mp=Math.min(R.maxMp,R.mp+k)}if(R&&R.hp>0){let k=R.x,G=R.y;e.type[G][k]===et.CENTER&&R.level===1&&Qt(R);let Z=R.player===1?et.BASE_TOP:et.BASE_BOTTOM;e.type[G][k]===Z&&R.level===2&&Qt(R)}if(lt++,lt>=_s){Fu();return}let w=(De+1)%x,H=0;for(;H<x;){let k=He[w],G=D.find(Z=>Z.id===k);if(G&&G.hp>0)break;w=(w+1)%x,H++}let z=w===0;De=w;for(let k=0;k<x;k++){let G=He[De],Z=D.find(Ae=>Ae.id===G);if(!Z||Z.hp<=0)break;let ce=Z.tempDebuff&&Z.tempDebuff.poison!=null?Z.tempDebuff.poison:0;if(ce<=0)break;if(Z.hp=Math.max(0,Z.hp-ce),qn(Z.x,Z.y,String(ce),!1,"poison"),We(Z),Z.hp<=0){vn(Z),w=(De+1)%x;let Ae=0;for(;Ae<x;){let le=He[w],pe=D.find(Fe=>Fe.id===le);if(pe&&pe.hp>0)break;w=(w+1)%x,Ae++}De=w;continue}break}let V=D.find(k=>k.id===He[De]);oe=V?V.player:1,vt=!1,xt=!1,me=He[De],z&&(He=sr(),De=0),Nt(),at(),it()}document.getElementById("btn-attack").addEventListener("click",()=>{if(Xe||xt||ct!=="playing"||He.length===0)return;tt();let x=He[De],m=D.find(H=>H.id===x);if(!m||m.hp<=0)return;let R=m.range!=null?m.range:1;me=x,At=!0;let w=mu(e,m.x,m.y,R);U=new Map,w.forEach((H,z)=>{let V=z%e.w,k=Math.floor(z/e.w);ys(e,m.x,m.y,V,k)&&U.set(z,H)}),Ru(U),Nt()}),document.getElementById("btn-skill").addEventListener("click",x=>{if(x.preventDefault(),x.stopPropagation(),Xe||xt)return;let m=He[De],R=m?D.find(k=>k.id===m&&k.hp>0):null;if(!R||R.player!==oe)return;let w=document.getElementById("skill-list-overlay"),H=document.getElementById("btn-skill");if(!H)return;if(w&&w.style.display==="block"){w.style.display="none";return}let z=Fr(R),V=H.getBoundingClientRect();w||(w=document.createElement("div"),w.id="skill-list-overlay",w.className="skill-list-overlay",w.setAttribute("aria-hidden","true"),document.body.appendChild(w)),w.style.left=`${V.left}px`,w.style.top=`${V.top-4}px`,w.style.transform="translateY(-100%)",w.style.right="auto",w.style.bottom="auto",w.style.display="none",z.length===0?w.innerHTML='<div class="skill-option" style="cursor:default;color:#8b949e;">No skills available</div>':(w.innerHTML=z.map((k,G)=>`<button type="button" class="skill-option" data-skill-index="${G}" ${k.disabled?"disabled":""}>
          <span class="skill-name">${k.name}</span> <span class="skill-meta">${k.cost} MP \xB7 Lv.${k.level}</span><br/>
          <span class="skill-meta">${k.description}</span>
        </button>`).join(""),w.querySelectorAll(".skill-option").forEach((k,G)=>{k.addEventListener("click",Z=>{Z.preventDefault(),Z.stopPropagation();let ce=z[G];if(Ut=ce,w.style.display="none",w.setAttribute("aria-hidden","true"),ce.target==="self"){if(R.mp<ce.cost)return;R.mp-=ce.cost,xt=!0,Or(R,R,ce,{showFloatingCombatText:qn,handleUnitDeath:vn,updateUnitSlashVisibility:We,updateTurnUI:Nt},()=>{cn(),Dt=!1,Ut=null,Ms=new Set,vt?Ft():Nt()}),Nt();return}if(ce.target==="ally"&&lr(R,ce,D).filter(pe=>pe.targetUnit&&pe.targetUnit.id!==R.id).length===0&&R.mp>=ce.cost){R.mp-=ce.cost,xt=!0,Or(R,R,ce,{showFloatingCombatText:qn,handleUnitDeath:vn,updateUnitSlashVisibility:We,updateTurnUI:Nt},()=>{cn(),Dt=!1,Ut=null,Ms=new Set,vt?Ft():Nt()}),Nt();return}Dt=!0,At=!1,wu(R,ce),Nt()})})),requestAnimationFrame(()=>{w.style.display="block",w.style.visibility="visible",w.setAttribute("aria-hidden","false")})}),document.addEventListener("click",x=>{let m=document.getElementById("skill-list-overlay"),R=document.getElementById("btn-skill"),w=document.querySelector(".skill-wrap");!m||m.style.display!=="block"||w&&w.contains(x.target)||m.contains(x.target)||(m.style.display="none",m.setAttribute("aria-hidden","true"))}),document.getElementById("btn-end").addEventListener("click",()=>{if(Xe||Zt||ct!=="playing"||He.length===0)return;let x=He[De],m=D.find(w=>w.id===x);if(!m||m.hp<=0)return;Zt=!0,me=null,At=!1,U=new Map,cn(),ci(),at();let R=document.getElementById("turn-player");R.textContent="Click on map to choose facing direction",Nt()}),c.set(0,8,0),a.position.copy(c).add(l),a.lookAt(c);let vs=document.getElementById("mode-select-overlay"),rr=document.getElementById("mode-pvp"),Yl=document.getElementById("mode-pvcpu"),no=document.getElementById("mode-cvcpu"),ar=document.getElementById("ai-draft-preference"),$l=document.getElementById("mode-select-ai-draft");$l&&($l.style.display=du?"":"none"),ar&&(mx.forEach(x=>{let m=document.createElement("option");m.value=x.value,m.textContent=x.label,ar.appendChild(m)}),ar.value=ht,ar.addEventListener("change",()=>{ht=ar.value}));let Ni=new Audio;Ni.loop=!0,Ni.volume=.3,Ni.preload="auto";let io=window.location.href.replace(/[^/]*$/,""),Zl=typeof window.TACTICS_BGM_URL<"u"?window.TACTICS_BGM_URL:io+(io.includes("/src/")?"../assets/music/tavern.mp3":"assets/music/tavern.mp3");Ni.src=Zl,Ni.addEventListener("error",()=>{let x=io+"assets/music/tavern.mp3";x!==Zl&&(Ni.src=x)});function so(){Ni.paused&&Ni.play().catch(()=>{})}vs&&rr&&Yl?(rr.addEventListener("click",()=>{so(),nt="pvp",vs.classList.add("hidden"),ei()}),Yl.addEventListener("click",()=>{so(),nt="pvcpu",vs.classList.add("hidden"),ei()}),no&&(du?no.addEventListener("click",()=>{so(),nt="cvcpu",vs.classList.add("hidden"),ei()}):no.style.display="none")):ei();function ro(x){return nt==="pvcpu"&&x===2||nt==="cvcpu"}function vu(){let x=Ka.filter(z=>Ke.has(z));if(x.length===0)return null;let m=ht||"balanced";if(m==="random")return x[Math.floor(Math.random()*x.length)];if(m==="custom")return gx.filter(V=>Ke.has(V))[0]??x[0]??null;let R=["hp","maxHp","mp","str","agi","vit","dex","luk","int"];function w(z){let V=Bt[z];if(!V)return 1/0;let k=R.map(Z=>V[Z]??0),G=k.reduce((Z,ce)=>Z+ce,0)/k.length;return k.reduce((Z,ce)=>Z+(ce-G)**2,0)/k.length}return m==="tanky"?[...x].sort((V,k)=>{let G=Bt[V]?.hp??0,Z=Bt[k]?.hp??0;return Z!==G?Z-G:(Bt[k]?.vit??0)-(Bt[V]?.vit??0)})[0]??null:m==="aggressive"?[...x].sort((V,k)=>{let G=Bt[V]?.str??0,Z=Bt[k]?.str??0;return Z!==G?Z-G:(Bt[k]?.agi??0)-(Bt[V]?.agi??0)})[0]??null:m==="scout"?[...x].sort((V,k)=>{let G=Bt[V]?.agi??0,Z=Bt[k]?.agi??0;return Z!==G?Z-G:(Bt[k]?.dex??0)-(Bt[V]?.dex??0)})[0]??null:m==="ranged"?[...x].sort((V,k)=>{let G=Bt[V]?.range??0,Z=Bt[k]?.range??0;return Z!==G?Z-G:(Bt[k]?.dex??0)-(Bt[V]?.dex??0)})[0]??null:m==="caster"?[...x].sort((V,k)=>{let G=Bt[V]?.int??0,Z=Bt[k]?.int??0;return Z!==G?Z-G:(Bt[k]?.mp??0)-(Bt[V]?.mp??0)})[0]??null:[...x].sort((z,V)=>{let k=Bt[z]?.hp??0,G=Bt[V]?.hp??0;return G!==k?G-k:w(z)-w(V)})[0]??null}function or(){if(ct!=="draft"||!ro(Wn()))return;if(!Qe){let R=vu();R&&yn(R),setTimeout(or,500);return}let x=Array.from(Pt).map(R=>({gx:R%e.w,gy:Math.floor(R/e.w)})),m=pu(e,x);if(m.length>0){let{gx:R,gy:w}=m[0];yi(R,w)}}function Kl(){let x=[];for(let m=0;m<e.h;m++)for(let R=0;R<e.w;R++)e.type[m][R]===et.CENTER&&x.push({gx:R,gy:m});return x}function Mu(x){let m=[],R=x===1?et.BASE_TOP:et.BASE_BOTTOM;for(let w=0;w<e.h;w++)for(let H=0;H<e.w;H++)e.type[w][H]===R&&m.push({gx:H,gy:w});return m}function ti(x,m,R,w){return Math.abs(x-R)+Math.abs(m-w)}function bu(x){let m=x.range!=null?x.range:1,R=[];for(let w of D){if(w.hp<=0||w.player===x.player)continue;let H=ti(x.x,x.y,w.x,w.y);H<=m&&H>0&&ys(e,x.x,x.y,w.x,w.y)&&R.push({target:w,dist:H})}return R}function Su(x){let m=D.filter(R=>R.hp>0&&R.player===x.player&&R.id!==x.id);for(let R of m){let w=D.filter(H=>H.hp>0&&H.player!==x.player);for(let H of w){let z=H.range!=null?H.range:1,V=ti(H.x,H.y,R.x,R.y);if(V<=z&&V>0&&ys(e,H.x,H.y,R.x,R.y))return!0}}return!1}function zt(x,m,R,w){let H=x.x,z=x.y,V=es(e,x.x,x.y,m,R,D,x);if(!V||V.length<=1){w&&w();return}me=null,cn(),Xe=!0,q(x.id),dn();let k=Y.get(x.id),G=1;function Z(){if(G>=V.length){x.x=V[V.length-1].x,x.y=V[V.length-1].y,Xe=!1,ot(k),q(),U=new Map,vt=!0,w&&w();return}let ce=V[G-1],Ae=V[G],le=xe(ce.x,ce.y).clone(),pe=xe(Ae.x,Ae.y).clone(),Fe=pe.x-le.x,kt=pe.z-le.z;Fe*Fe+kt*kt>1e-6&&(k.rotation.y=Math.atan2(Fe,kt));let It=performance.now(),Tt=0;function Jt(nn){Tt++,Tt%2===0&&dn();let sn=Math.min(1,(nn-It)/uu),Vt=(Ot=>Ot*Ot*(3-2*Ot))(sn);k.position.lerpVectors(le,pe,Vt),Ge(k,Vt),sn<1?requestAnimationFrame(Jt):(G++,Z())}requestAnimationFrame(Jt)}Z()}function Jl(x,m){let R=ae(m,"agi")*.7+ae(m,"luk")*.3,H=Math.random()*Math.max(.001,R)<=ae(x,"dex"),z=0;if(H){let wt=ae(x,"str")*.7+ae(x,"dex")*.2+ae(x,"int")*.1-(ae(m,"vit")*.3+ae(m,"luk")*.2);z=Math.max(1,Math.floor(wt))}xt=!0,me=null,At=!1,cn(),console.log("[ATTACK]",`${x.name} (${x.class}, P${x.player})`,"\u2192",`${m.name} (${m.class}, P${m.player})`,H?`${z} dmg`:"MISS",`| ${m.name} HP ${m.hp} \u2192 ${Math.max(0,m.hp-z)}/${m.maxHp}`);let V=Y.get(x.id);if(!V||!V.userData.rightArm){H?(m.hp=Math.max(0,m.hp-z),qn(m.x,m.y,String(z),!1),We(m),m.hp<=0&&vn(m)):qn(m.x,m.y,"MISS",!0),setTimeout(vt?()=>Ft():()=>Nt(),400);return}let k=xe(x.x,x.y).clone(),G=xe(m.x,m.y).clone(),Z=k.clone().lerp(G,.35),ce=G.x-k.x,Ae=G.z-k.z;if(ce*ce+Ae*Ae>1e-6&&(V.rotation.y=Math.atan2(ce,Ae)),(x.range!=null?x.range:1)>2){let ve=function(st){Te++,Te%2===0&&dn();let we=st-ye,be=Math.min(1,we/C);if(bt.position.lerpVectors(de,ue,be),!re&&be>=1&&(re=!0,n.remove(bt),wt.dispose(),Yt.dispose(),H?(m.hp=Math.max(0,m.hp-z),qn(m.x,m.y,String(z),!1),m.hp<=0&&(Me=!0),Y.get(m.id)?ge=st:Me&&(vn(m),Me=!1),We(m)):qn(m.x,m.y,"MISS",!0)),ge!=null&&H){let Ue=Y.get(m.id);if(Ue){let Lt=Math.min(1,(st-ge)/pt),Wt=1-Lt;Bi.copy(Sn).multiplyScalar(Cn*Wt),Ue.position.copy(bn).add(Bi),Lt>=1&&(Ue.position.copy(bn),ge=null,Me&&(vn(m),Me=!1))}else ge=null,Me&&(vn(m),Me=!1)}if(be<1)requestAnimationFrame(ve);else{let Ue=ge==null;Ue&&Me&&(vn(m),Me=!1),Ue?(Rn.shadowMap.enabled=!0,setTimeout(vt?()=>Ft():()=>Nt(),400)):requestAnimationFrame(ve)}},wt=new Qi(.035,.035,.4,6),Yt=new un({color:16763972}),bt=new Je(wt,Yt);bt.position.copy(k),bt.position.y+=.6;let gn=G.clone().sub(k).normalize();bt.quaternion.setFromUnitVectors(new F(0,1,0),gn),n.add(bt);let bn=xe(m.x,m.y).clone(),Sn=G.clone().sub(k).normalize(),Cn=.4,re=!1,ge=null,Me=!1,de=bt.position.clone(),ue=G.clone();ue.y+=.6;let ye=performance.now(),Te=0;Rn.shadowMap.enabled=!1,requestAnimationFrame(ve);return}let Fe=!1,kt=performance.now(),It=V.userData.rightArm,Tt=null,Jt=!1,nn=xe(m.x,m.y).clone(),sn=G.clone().sub(k).normalize(),Mn=.4,Vt=0;function Ot(wt){Vt++,Vt%2===0&&dn();let Yt=wt-kt,bt=Math.min(1,Yt/Ye),gn=bt<=.4?bt/.4:1,bn=bt>.4?(bt-.4)/.6:0;bt<=.4?V.position.lerpVectors(k,Z,gn):V.position.lerpVectors(Z,k,bn);let Sn=bt<=.35?bt/.35:bt<=.7?(.7-bt)/.35:0;if(It.rotation.y=-Sn*1.1,!Fe&&bt>=Gt&&(Fe=!0,H?(m.hp=Math.max(0,m.hp-z),qn(m.x,m.y,String(z),!1),m.hp<=0&&(Jt=!0),We(m),Y.get(m.id)?Tt=wt:Jt&&(vn(m),Jt=!1)):qn(m.x,m.y,"MISS",!0)),Tt!=null&&H){let Cn=Y.get(m.id);if(Cn){let re=Math.min(1,(wt-Tt)/pt),ge=1-re;Bi.copy(sn).multiplyScalar(Mn*ge),Cn.position.copy(nn).add(Bi),re>=1&&(Cn.position.copy(nn),Tt=null,Jt&&(vn(m),Jt=!1))}else Tt=null,Jt&&(vn(m),Jt=!1)}if(bt<1)requestAnimationFrame(Ot);else{V.position.copy(k),It.rotation.y=0;let Cn=Tt==null;Cn&&Jt&&(vn(m),Jt=!1),Cn?(Rn.shadowMap.enabled=!0,setTimeout(vt?()=>Ft():()=>Nt(),400)):requestAnimationFrame(Ot)}}Rn.shadowMap.enabled=!1,requestAnimationFrame(Ot)}function Eu(x,m){let R=xe(x,m);R.y+=.4;let w=new bi(.1,12,12),H=new un({color:8930559,transparent:!0,opacity:.9}),z=new Je(w,H);z.position.copy(R),n.add(z);let V=performance.now(),k=0;function G(Z){k++,k%2===0&&dn();let ce=Z-V,Ae=Math.min(1,ce/b),le=Ae*(2-Ae);z.scale.setScalar(le*4.5),H.opacity=.9*(1-Ae),Ae<1?requestAnimationFrame(G):(n.remove(z),w.dispose(),H.dispose())}requestAnimationFrame(G)}function Or(x,m,R,w,H){if(R.target==="enemy"&&m==null){w.updateTurnUI&&w.updateTurnUI(),H&&H();return}let V=(R.range??0)>2&&m!=null&&(m.x!==x.x||m.y!==x.y),k=!V&&m!=null&&(m.x!==x.x||m.y!==x.y);if(!V&&!k){ja(R.effectKey,x,m,w),w.updateTurnUI&&w.updateTurnUI(),H&&H();return}if(k){let st=function(we){ve++,ve%2===0&&dn();let be=we-Te,Ue=Math.min(1,be/Ye),Lt=Ue<=.4?Ue/.4:1,Wt=Ue>.4?(Ue-.4)/.6:0;Ue<=.4?wt.position.lerpVectors(Yt,gn,Lt):wt.position.lerpVectors(gn,Yt,Wt);let qe=Ue<=.35?Ue/.35:Ue<=.7?(.7-Ue)/.35:0;if(Me.rotation.y=-qe*1.1,!de&&Ue>=Gt&&(de=!0,ja(R.effectKey,x,m,w),m.hp<=0&&(ye=!0),w.updateUnitSlashVisibility&&w.updateUnitSlashVisibility(m),Y.get(m.id)&&R.target!=="ally"?ue=we:ye&&(vn(m),ye=!1)),ue!=null){let dt=Y.get(m.id);if(dt){let Ct=Math.min(1,(we-ue)/pt),pn=1-Ct;Bi.copy(re).multiplyScalar(ge*pn),dt.position.copy(Cn).add(Bi),Ct>=1&&(dt.position.copy(Cn),ue=null,ye&&(vn(m),ye=!1))}else ue=null,ye&&(vn(m),ye=!1)}Ue<1?requestAnimationFrame(st):(wt.position.copy(Yt),Me.rotation.y=0,ue==null&&ye&&(vn(m),ye=!1),ue==null?(Rn.shadowMap.enabled=!0,w.updateTurnUI&&w.updateTurnUI(),H&&H()):requestAnimationFrame(st))},wt=Y.get(x.id);if(!wt||!wt.userData.rightArm){ja(R.effectKey,x,m,w),w.updateUnitSlashVisibility&&w.updateUnitSlashVisibility(m),w.updateTurnUI&&w.updateTurnUI(),H&&H();return}let Yt=xe(x.x,x.y).clone(),bt=xe(m.x,m.y).clone(),gn=Yt.clone().lerp(bt,.35),bn=bt.x-Yt.x,Sn=bt.z-Yt.z;bn*bn+Sn*Sn>1e-6&&(wt.rotation.y=Math.atan2(bn,Sn));let Cn=xe(m.x,m.y).clone(),re=bt.clone().sub(Yt).normalize(),ge=.4,Me=wt.userData.rightArm,de=!1,ue=null,ye=!1,Te=performance.now(),ve=0;Rn.shadowMap.enabled=!1,requestAnimationFrame(st);return}let G=xe(x.x,x.y).clone(),Z=xe(m.x,m.y).clone(),ce=new Qi(.035,.035,.4,6),Ae=new un({color:16763972}),le=new Je(ce,Ae);le.position.copy(G),le.position.y+=.6;let pe=Z.clone().sub(G).normalize();le.quaternion.setFromUnitVectors(new F(0,1,0),pe),n.add(le);let Fe=le.position.clone(),kt=Z.clone();kt.y+=.6;let It=performance.now(),Tt=xe(m.x,m.y).clone(),Jt=Z.clone().sub(G).normalize(),nn=.4,sn=!1,Mn=null,Vt=0;function Ot(wt){Vt++,Vt%2===0&&dn();let Yt=wt-It,bt=Math.min(1,Yt/C);if(le.position.lerpVectors(Fe,kt,bt),!sn&&bt>=1&&(sn=!0,n.remove(le),ce.dispose(),Ae.dispose(),R.type==="spell"&&Eu(m.x,m.y),ja(R.effectKey,x,m,w),Y.get(m.id)&&m.hp>0&&(Mn=wt),w.updateUnitSlashVisibility&&w.updateUnitSlashVisibility(m)),Mn!=null){let gn=Y.get(m.id);if(gn){let bn=Math.min(1,(wt-Mn)/pt),Sn=1-bn;Bi.copy(Jt).multiplyScalar(nn*Sn),gn.position.copy(Tt).add(Bi),bn>=1&&(gn.position.copy(Tt),Mn=null)}else Mn=null}bt<1?requestAnimationFrame(Ot):Mn==null?(Rn.shadowMap.enabled=!0,w.updateTurnUI&&w.updateTurnUI(),H&&H()):requestAnimationFrame(Ot)}Rn.shadowMap.enabled=!1,requestAnimationFrame(Ot)}function fn(){if(ct!=="playing"||!ro(oe)||Xe||He.length===0)return;let x=He[De],m=D.find(re=>re.id===x);if(!m||m.hp<=0)return;let R=Qa(e,m.x,m.y,ae(m,"agi"),D,m),w=[];R.forEach((re,ge)=>{if(re===0)return;let Me=ge%e.w,de=Math.floor(ge/e.w);D.some(ye=>ye.id!==m.id&&ye.x===Me&&ye.y===de&&ye.hp>0)||w.push({gx:Me,gy:de,dist:re})});let H=bu(m),z=Kl(),V=Mu(m.player),k=.25,G=.03,Z=m.maxHp>0&&m.hp/m.maxHp<k,ce=m.maxHp>0&&m.hp/m.maxHp<G,Ae=m.level===2,le=re=>D.some(ge=>ge.hp>0&&ge.x===re.gx&&ge.y===re.gy&&ge.id!==m.id),pe=z.filter(re=>!le(re)),Fe=V.filter(re=>!le(re)),kt=Fr(m).filter(re=>!re.disabled&&m.mp>=re.cost&&re.target==="enemy"),It=kt.length>0?Math.max(...kt.map(re=>re.range||0)):0,Tt=Math.max(m.range!=null?m.range:1,It);function Jt(re,ge){if(ge.length===0)return null;let Me=null,de=1/0;for(let ue of re){let ye=0;for(let Te of ge)ye+=ti(ue.gx,ue.gy,Te.gx,Te.gy);ye<de&&(de=ye,Me=ue)}return Me}function nn(re,ge){if(ge.length===0||re.length===0)return null;let Me=null,de=1/0;for(let ue of re){let ye=Math.min(...ge.map(Te=>ti(ue.gx,ue.gy,Te.gx,Te.gy)));ye<de&&(de=ye,Me=ue)}return Me}function sn(re,ge){let Me=Tt,de=[];for(let ue of D){if(ue.hp<=0||ue.player===m.player)continue;let ye=ti(re,ge,ue.x,ue.y);ye<=Me&&ye>0&&ys(e,re,ge,ue.x,ue.y)&&de.push({target:ue,dist:ye})}return de}let Mn=new Set(w.map(re=>re.gy*e.w+re.gx));function Vt(re,ge){if(!re||re.length<=1)return null;let Me=Math.min(ge,re.length-1);for(let de=Me;de>=1;de--){let ue=re[de],ye=ue.y*e.w+ue.x;if(Mn.has(ye))return{gx:ue.x,gy:ue.y}}return null}function Ot(re,ge){if(!re||re.length<=1)return null;let Me=Math.min(ge,re.length-1);for(let de=Me;de>=1;de--){let ue=re[de];if(!D.some(Te=>Te.id!==m.id&&Te.hp>0&&Te.x===ue.x&&Te.y===ue.y))return{gx:ue.x,gy:ue.y}}return null}function wt(re){let ge=null,Me=null,de=1/0;for(let ue of re){let ye=es(e,m.x,m.y,ue.gx,ue.gy,D,m);ye&&ye.length>1&&ye.length<de&&(de=ye.length,ge=ye,Me=ue)}return ge&&Me?{path:ge,target:Me}:null}function Yt(re){let ge=re??w;if(ge.length===0)return null;let Me=D.filter(ye=>ye.hp>0&&ye.player!==m.player);if(Me.length===0)return ge[0];let de=null,ue=-1;for(let ye of ge){let Te=Math.min(...Me.map(ve=>ti(ye.gx,ye.gy,ve.x,ve.y)));Te>ue&&(ue=Te,de=ye)}return de}function bt(re){let ge=re??w;if(ge.length===0)return null;let Me=D.filter(ve=>ve.hp>0&&ve.player!==m.player),de=D.filter(ve=>ve.hp>0&&ve.player===m.player&&ve.id!==m.id);if(Me.length===0)return ge[0];let ue=m.maxHp>0&&m.hp/m.maxHp>=.6,ye=null,Te=-1/0;for(let ve of ge){let st=Math.min(...Me.map(Ue=>ti(ve.gx,ve.gy,Ue.x,Ue.y))),we=de.length>0?Math.min(...de.map(Ue=>ti(ve.gx,ve.gy,Ue.x,Ue.y))):999,be;ue?be=we<st?st-1e3:st:be=st-we,be>Te&&(Te=be,ye=ve)}return ye}function gn(){let re=Tt,ge=D.filter(ue=>ue.hp>0&&ue.player!==m.player);if(ge.length===0)return null;let Me=null,de=-1;for(let ue of w){let ye=Math.min(...ge.map(ve=>ti(ue.gx,ue.gy,ve.x,ve.y)));ge.some(ve=>ti(ue.gx,ue.gy,ve.x,ve.y)<=re)&&ye>de&&(de=ye,Me=ue)}return Me}if(xt){if(vt){Ft();return}if(_s-lt<=20&&z.length>0){let Te=z.some(ve=>ve.gx===m.x&&ve.gy===m.y);if(Te&&w.length>0){let ve=new Set(z.map(be=>be.gy*e.w+be.gx)),we=w.filter(be=>ve.has(be.gy*e.w+be.gx)).filter(be=>be.gx!==m.x||be.gy!==m.y);if(we.length>0){let be=Yt(we);if(be&&(be.gx!==m.x||be.gy!==m.y)){zt(m,be.gx,be.gy,()=>setTimeout(Ft,400));return}}Ft();return}if(Te){Ft();return}if(w.length>0){let ve=pe.length>0?pe:z,st=wt(ve),we=st?Ot(st.path,ae(m,"agi")):null;if(we&&(we.gx!==m.x||we.gy!==m.y)){zt(m,we.gx,we.gy,()=>setTimeout(Ft,400));return}let be=nn(w,ve);if(be&&(be.gx!==m.x||be.gy!==m.y)){zt(m,be.gx,be.gy,()=>setTimeout(Ft,400));return}}Ft();return}if(!Z&&w.length>0){if(z.length>0&&!z.some(ve=>ve.gx===m.x&&ve.gy===m.y)){let ve=pe.length>0?pe:z,st=wt(ve),we=st?Ot(st.path,ae(m,"agi")):null;if(we&&(we.gx!==m.x||we.gy!==m.y)){zt(m,we.gx,we.gy,()=>setTimeout(Ft,400));return}let be=nn(w,ve);if(be&&(be.gx!==m.x||be.gy!==m.y)){zt(m,be.gx,be.gy,()=>setTimeout(Ft,400));return}}if(Ae&&V.length>0&&!V.some(ve=>ve.gx===m.x&&ve.gy===m.y)){let ve=Fe.length>0?Fe:V,st=wt(ve),we=st?Ot(st.path,ae(m,"agi")):null;if(we&&(we.gx!==m.x||we.gy!==m.y)){zt(m,we.gx,we.gy,()=>setTimeout(Ft,400));return}let be=nn(w,ve);if(be&&(be.gx!==m.x||be.gy!==m.y)){zt(m,be.gx,be.gy,()=>setTimeout(Ft,400));return}}}let ge=new Set(z.map(Te=>Te.gy*e.w+Te.gx)),Me=z.length>0?w.filter(Te=>ge.has(Te.gy*e.w+Te.gx)):null,de=Me!=null&&Me.length>0?Me:w,ue=D.filter(Te=>Te.hp>0&&Te.player===m.player&&Te.id!==m.id),ye=null;if(de.length>0&&ue.length>0&&(ye=bt(de),ye)){let Te=es(e,m.x,m.y,ye.gx,ye.gy,D,m),ve=Te?Te.length-1:1/0;(!Te||Te.length<=1||ve>ae(m,"agi"))&&(ye=Yt(de))}if(!ye&&de.length>0&&(ye=Yt(de)),ye&&(ye.gx!==m.x||ye.gy!==m.y)){zt(m,ye.gx,ye.gy,()=>setTimeout(Ft,400));return}Ft();return}if(ce&&_s-lt>20&&!vt&&w.length>0){let re=null,ge=1/0;for(let de of w){let ye=sn(de.gx,de.gy).filter(Te=>Te.target.maxHp>0&&Te.target.hp/Te.target.maxHp<k);if(ye.length>0){let Te=Math.min(...ye.map(ve=>ve.target.hp));Te<ge&&(ge=Te,re=de)}}if(re){let de=es(e,m.x,m.y,re.gx,re.gy,D,m),ue=de?Vt(de,ae(m,"agi")):null;if(ue&&(ue.gx!==m.x||ue.gy!==m.y)){zt(m,ue.gx,ue.gy,()=>setTimeout(fn,600));return}}let Me=Yt();if(Me&&(Me.gx!==m.x||Me.gy!==m.y)){zt(m,Me.gx,Me.gy,()=>setTimeout(fn,600));return}Ft();return}if(!xt){let st=function(qe){return lr(m,qe,D).filter(Ct=>Ct.targetUnit!=null).map(Ct=>Ct.targetUnit)},re=Fr(m),ge=m.maxHp>0?m.hp/m.maxHp:1,Me=.35,de=new Set(["arcaneBolt","feast","pierce","snipe","berserk","drain","shuriken","chokuto","bite","execute","judgement","exorcise","assault","powerShot","concoct"]),ue=new Set(["chakra","sacrifice"]),ye=new Set(["brave","focus","bloodlust","iaido","howl","mantra","sanctuary","windWalk","forge","fortify"]),Te=new Set(["manaDrain","impale","poison"]),ve=new Set(["dominate","weaken","cripple","hex","blind","raid"]),we={showFloatingCombatText:qn,handleUnitDeath:vn,updateUnitSlashVisibility:We,updateTurnUI:Nt,world:e,units:D,updateUnitPosition(qe){let dt=Y.get(qe.id);dt&&dt.position.copy(xe(qe.x,qe.y))}},be=null,Ue=null,Lt=H.some(qe=>qe.target.maxHp>0&&qe.target.hp/qe.target.maxHp<k),Wt=Lt||w.some(qe=>sn(qe.gx,qe.gy).some(Ct=>Ct.target.maxHp>0&&Ct.target.hp/Ct.target.maxHp<k));if(!Wt){for(let dt of re)if(!dt.disabled&&ue.has(dt.effectKey)){let pn=lr(m,dt,D).filter(rn=>rn.targetUnit&&rn.targetUnit.maxHp>0&&rn.targetUnit.hp/rn.targetUnit.maxHp<.5);if(pn.length>0){let rn=pn.sort((En,an)=>En.targetUnit.hp-an.targetUnit.hp)[0].targetUnit;be=dt,Ue=rn;break}}}if(!be&&!Wt&&(H.length>0||w.some(dt=>sn(dt.gx,dt.gy).length>0)))for(let dt of re){if(dt.disabled)continue;let Ct=m.tempBuff&&m.tempBuff.duration>0;if(ye.has(dt.effectKey)){if(dt.target==="self"){if(dt.effectKey==="bloodlust"&&m.hp/m.maxHp>.8)continue;if(!Ct){be=dt,Ue=m;break}}if(dt.target==="ally"){if(dt.effectKey==="mantra"&&Ct||dt.effectKey==="sanctuary"&&Ct)continue;let rn=lr(m,dt,D).filter(En=>En.targetUnit!=null).map(En=>En.targetUnit);if(rn.length>0){let En=rn.filter(Un=>!Un.tempBuff||Un.tempBuff.duration<=0),an=(En.length>0?En:rn).sort((Un,Bu)=>Un.hp-Bu.hp)[0];be=dt,Ue=an;break}}}}if(!be){for(let qe of re)if(!qe.disabled&&de.has(qe.effectKey)){if(qe.effectKey==="feast"&&m.hp/m.maxHp>.7||qe.effectKey==="berserk"&&m.hp/m.maxHp<.25||qe.effectKey==="shuriken"&&H.length>0||qe.effectKey==="judgement"&&m.hp/m.maxHp>.7)continue;let dt=st(qe);if(dt.length===0)continue;let Ct=dt.filter(an=>an.maxHp>0&&an.hp/an.maxHp<Me),pn=(an,Un)=>ae(an,"int")-ae(Un,"int")||an.hp-Un.hp,rn=(an,Un)=>an.hp-Un.hp,En=Ct.length>0?qe.type==="spell"?Ct.sort(pn)[0]:Ct.sort(rn)[0]:qe.type==="spell"?dt.sort(pn)[0]:dt.sort(rn)[0];be=qe,Ue=En;break}}if(!be&&!Lt){for(let qe of re)if(!qe.disabled&&ve.has(qe.effectKey)){let Ct=st(qe).sort((pn,rn)=>pn.hp-rn.hp)[0];be=qe,Ue=Ct;break}}if(!be&&!Lt){for(let qe of re)if(!qe.disabled&&Te.has(qe.effectKey)){let Ct=st(qe).filter(pn=>!pn.tempDebuff||pn.tempDebuff.duration<=0);if(Ct.length>0){let pn=Ct.sort((rn,En)=>rn.hp-En.hp)[0];be=qe,Ue=pn;break}}}if(be&&Ue){m.mp-=be.cost,xt=!0;let qe=be.target==="self"?m:Ue;Or(m,qe,be,we,()=>setTimeout(fn,600));return}}if(Su(m)&&H.length>0){H.sort((ge,Me)=>ge.target.hp-Me.target.hp||ge.dist-Me.dist);let re=H[0].target;Jl(m,re);return}if(H.length>0){H.sort((ge,Me)=>ge.target.hp-Me.target.hp||ge.dist-Me.dist);let re=H[0].target;Jl(m,re);return}let bn=_s-lt;if(bn<=20&&z.length>0&&!vt&&w.length>0&&!z.some(ge=>ge.gx===m.x&&ge.gy===m.y)){let ge=pe.length>0?pe:z,Me=wt(ge),de=Me?Me.path:null,ue=(Ue,Lt)=>Math.min(...z.map(Wt=>ti(Ue,Lt,Wt.gx,Wt.gy))),ye=ue(m.x,m.y),Te=null,ve=-1,st=k;for(let Ue of w){if(ue(Ue.gx,Ue.gy)>ye||sn(Ue.gx,Ue.gy).filter(Ct=>Ct.target.maxHp>0&&Ct.target.hp/Ct.target.maxHp<st).length===0)continue;let qe=de?de.findIndex(Ct=>Ct.x===Ue.gx&&Ct.y===Ue.gy):-1,dt=qe>=0?qe:0;dt>ve&&(ve=dt,Te=Ue)}if(Te&&(Te.gx!==m.x||Te.gy!==m.y)){zt(m,Te.gx,Te.gy,()=>setTimeout(fn,600));return}let we=Me?Ot(Me.path,ae(m,"agi")):null;if(we&&(we.gx!==m.x||we.gy!==m.y)){zt(m,we.gx,we.gy,()=>setTimeout(fn,600));return}let be=nn(w,ge);if(be&&(be.gx!==m.x||be.gy!==m.y)){zt(m,be.gx,be.gy,()=>setTimeout(fn,600));return}}if(Z&&w.length>0&&!vt){let re=null,ge=1/0;for(let Me of w){let ue=sn(Me.gx,Me.gy).filter(ye=>ye.target.maxHp>0&&ye.target.hp/ye.target.maxHp<k);if(ue.length>0){let ye=Math.min(...ue.map(Te=>Te.target.hp));ye<ge&&(ge=ye,re=Me)}}if(re){let Me=es(e,m.x,m.y,re.gx,re.gy,D,m),de=Me?Vt(Me,ae(m,"agi")):null;if(de&&(de.gx!==m.x||de.gy!==m.y)){zt(m,de.gx,de.gy,()=>setTimeout(fn,600));return}}if(bn>20&&Ae&&V.length>0&&!V.some(de=>de.gx===m.x&&de.gy===m.y)){let de=Fe.length>0?Fe:V,ue=wt(de);if(ue!=null&&ue.path.length<=5){let Te=Ot(ue.path,ae(m,"agi"));if(Te&&(Te.gx!==m.x||Te.gy!==m.y)){zt(m,Te.gx,Te.gy,()=>setTimeout(fn,600));return}let ve=nn(w,de);if(ve&&(ve.gx!==m.x||ve.gy!==m.y)){zt(m,ve.gx,ve.gy,()=>setTimeout(fn,600));return}}}if(bn>20){let Me=Yt();if(Me&&ti(m.x,m.y,Me.gx,Me.gy)>0){zt(m,Me.gx,Me.gy,()=>setTimeout(fn,600));return}Ft();return}}if(bn<=10&&z.length>0&&!vt&&w.length>0&&!z.some(ge=>ge.gx===m.x&&ge.gy===m.y)){let ge=pe.length>0?pe:z,Me=wt(ge),de=Me?Ot(Me.path,ae(m,"agi")):null;if(de&&(de.gx!==m.x||de.gy!==m.y)){zt(m,de.gx,de.gy,()=>setTimeout(fn,600));return}let ue=nn(w,ge);if(ue&&(ue.gx!==m.x||ue.gy!==m.y)){zt(m,ue.gx,ue.gy,()=>setTimeout(fn,600));return}}if(m.level===1&&z.length>0&&!vt&&!z.some(ge=>ge.gx===m.x&&ge.gy===m.y)&&w.length>0){let ge=pe.length>0?pe:z,Me=wt(ge),de=Me?Ot(Me.path,ae(m,"agi")):null;if(de&&(de.gx!==m.x||de.gy!==m.y)){zt(m,de.gx,de.gy,()=>setTimeout(fn,600));return}let ue=nn(w,ge);if(ue&&(ue.gx!==m.x||ue.gy!==m.y)){zt(m,ue.gx,ue.gy,()=>setTimeout(fn,600));return}}if(Ae&&V.length>0&&!vt&&!V.some(ge=>ge.gx===m.x&&ge.gy===m.y)&&w.length>0){let Me=D.filter(we=>we.hp>0&&we.player!==m.player).filter(we=>we.maxHp>0&&we.hp/we.maxHp<k),de=null,ue=1/0;for(let we of w){let Ue=sn(we.gx,we.gy).find(Lt=>Me.some(Wt=>Wt.id===Lt.target.id));Ue&&Ue.target.hp<ue&&(ue=Ue.target.hp,de=we)}if(de){let we=es(e,m.x,m.y,de.gx,de.gy,D,m),be=we?Vt(we,ae(m,"agi")):null;if(be&&(be.gx!==m.x||be.gy!==m.y)){zt(m,be.gx,be.gy,()=>setTimeout(fn,600));return}}let ye=Fe.length>0?Fe:V,Te=wt(ye),ve=Te?Ot(Te.path,ae(m,"agi")):null;if(ve&&(ve.gx!==m.x||ve.gy!==m.y)){zt(m,ve.gx,ve.gy,()=>setTimeout(fn,600));return}let st=nn(w,ye);if(st&&(st.gx!==m.x||st.gy!==m.y)){zt(m,st.gx,st.gy,()=>setTimeout(fn,600));return}}let Sn=D.filter(re=>re.hp>0&&re.player!==m.player);if(m.level>=2&&Tt>=2&&Sn.length>0&&!vt&&w.length>0){let re=gn();if(re&&(re.gx!==m.x||re.gy!==m.y)){zt(m,re.gx,re.gy,()=>setTimeout(fn,600));return}}if(Sn.length>0&&!vt&&w.length>0){let ge=function(de,ue){let ye=null;for(let Te=-re;Te<=re;Te++)for(let ve=-re;ve<=re;ve++){if(ve===0&&Te===0||Math.abs(ve)+Math.abs(Te)>re)continue;let st=de.x+ve,we=de.y+Te;if(st<0||st>=e.w||we<0||we>=e.h||!nr(e,st,we)||!ys(e,st,we,de.x,de.y)||D.some(qe=>qe.hp>0&&qe.x===st&&qe.y===we))continue;let Ue=es(e,m.x,m.y,st,we,D,m),Lt=Ue?Ue.length-1:1/0;Ue&&Ue.length>1&&(!ue||Lt<=ae(m,"agi"))&&(!ye||Ue.length<ye.length)&&(ye=Ue)}return ye},re=Tt,Me=[];for(let de of Sn){let ue=ge(de,!0);ue&&Me.push({enemy:de,path:ue})}if(Me.length>0){let de=Me.filter(ve=>ve.enemy.maxHp>0&&ve.enemy.hp/ve.enemy.maxHp<k),ue=de.length>0?de:Me;de.length>0?ue.sort((ve,st)=>ve.enemy.hp-st.enemy.hp||ve.path.length-st.path.length):ue.sort((ve,st)=>ve.path.length-st.path.length||ve.enemy.hp-st.enemy.hp);let ye=ue[0],Te=Vt(ye.path,ae(m,"agi"));if(Te&&(Te.gx!==m.x||Te.gy!==m.y)){zt(m,Te.gx,Te.gy,()=>setTimeout(fn,600));return}}if(Me.length===0){let de=null,ue=1/0;for(let ye of Sn){let Te=ge(ye,!1);Te&&Te.length<ue&&(ue=Te.length,de=Te)}if(de){let ye=Vt(de,ae(m,"agi"));if(ye&&(ye.gx!==m.x||ye.gy!==m.y)){zt(m,ye.gx,ye.gy,()=>setTimeout(fn,600));return}}}}Ft()}function cn(){for(Jn.length=0;Bn.children.length;){let x=Bn.children[0];Bn.remove(x),x.geometry!==cr&&x.geometry!==hr&&x.geometry.dispose(),x.material.dispose()}dn()}let Ms=new Set;function Fr(x){return!x||!x.class?[]:fu[x.class]?fu[x.class].map(m=>({...m,disabled:m.disabled===!0||x.level<m.level||m.hpCost&&x.hp<m.hpCost||m.cost&&x.mp<m.cost})):[]}function lr(x,m,R){let w=[],H=(V,k,G,Z)=>Math.abs(V-G)+Math.abs(k-Z),z=m.range||0;if(m.target==="self")return w.push({gx:x.x,gy:x.y,targetUnit:null}),w;for(let V of R)V.hp<=0||H(x.x,x.y,V.x,V.y)>z||z>2&&!ys(e,x.x,x.y,V.x,V.y)||(m.target==="enemy"&&V.player!==x.player&&w.push({gx:V.x,gy:V.y,targetUnit:V}),m.target==="ally"&&V.player===x.player&&w.push({gx:V.x,gy:V.y,targetUnit:V}));return w}function Tu(x,m){let R=m.range||0;if(m.target==="self")return[{gx:x.x,gy:x.y}];let w=mu(e,x.x,x.y,R),H=[];return w.forEach((z,V)=>{let k=V%e.w,G=V/e.w|0;R>2&&!ys(e,x.x,x.y,k,G)||H.push({gx:k,gy:G})}),H}function wu(x,m){let R=lr(x,m,D);Ms=new Set(R.map(H=>`${H.gx},${H.gy}`));let w=m.target==="self"?R:Tu(x,m);cn(),w.forEach(({gx:H,gy:z})=>{let k=(Gn+e.height[z][H]*.35)/2+Gn/2,G=H*yt-ie+yt/2,Z=z*yt-he+yt/2,ce=k+.01,Ae=new un({color:8926122,transparent:!0,opacity:.4,side:hn}),le=new Je(cr,Ae);le.rotation.x=-Math.PI/2,le.position.set(G,ce,Z),Bn.add(le),Jn.push(Ae);let pe=new un({color:11167436,transparent:!0,opacity:.7,side:hn}),Fe=new Je(hr,pe);Fe.rotation.x=-Math.PI/2,Fe.position.set(G,ce+.01,Z),Fe.userData.gx=H,Fe.userData.gy=z,Bn.add(Fe),Jn.push(pe)})}let jl=.82,Ql=1.02,cr=new Di(Ql,Ql),hr=new Di(jl,jl);function Au(x){cn(),x.forEach(({gx:m,gy:R})=>{let H=(Gn+e.height[R][m]*.35)/2+Gn/2,z=m*yt-ie+yt/2,V=R*yt-he+yt/2,k=H+.01,G=new un({color:2271812,transparent:!0,opacity:.4,side:hn}),Z=new Je(cr,G);Z.rotation.x=-Math.PI/2,Z.position.set(z,k,V),Bn.add(Z),Jn.push(G);let ce=new un({color:4508774,transparent:!0,opacity:.7,side:hn}),Ae=new Je(hr,ce);Ae.rotation.x=-Math.PI/2,Ae.position.set(z,k+.01,V),Ae.userData.gx=m,Ae.userData.gy=R,Bn.add(Ae),Jn.push(ce)}),dn()}function ao(x){cn(),x.forEach((m,R)=>{if(m===0)return;let w=R%e.w,H=R/e.w|0,V=(Gn+e.height[H][w]*.35)/2+Gn/2,k=w*yt-ie+yt/2,G=H*yt-he+yt/2,Z=V+.01,ce=new un({color:3381759,transparent:!0,opacity:.35,side:hn}),Ae=new Je(cr,ce);Ae.rotation.x=-Math.PI/2,Ae.position.set(k,Z,G),Bn.add(Ae),Jn.push(ce);let le=new un({color:6730751,transparent:!0,opacity:.65,side:hn}),pe=new Je(hr,le);pe.rotation.x=-Math.PI/2,pe.position.set(k,Z+.01,G),Bn.add(pe),Jn.push(le)}),dn()}function Ru(x){cn(),x.forEach((m,R)=>{if(m===0)return;let w=R%e.w,H=R/e.w|0,V=(Gn+e.height[H][w]*.35)/2+Gn/2,k=w*yt-ie+yt/2,G=H*yt-he+yt/2,Z=V+.01,ce=new un({color:10035746,transparent:!0,opacity:.4,side:hn}),Ae=new Je(cr,ce);Ae.rotation.x=-Math.PI/2,Ae.position.set(k,Z,G),Bn.add(Ae),Jn.push(ce);let le=new un({color:13386820,transparent:!0,opacity:.7,side:hn}),pe=new Je(hr,le);pe.rotation.x=-Math.PI/2,pe.position.set(k,Z+.01,G),Bn.add(pe),Jn.push(le)}),dn()}let Oi=new Wa,Fi=new Be;function Br(x,m){let R=t.getBoundingClientRect();return Fi.x=(x-R.left)/R.width*2-1,Fi.y=-((m-R.top)/R.height)*2+1,{x:Fi.x,y:Fi.y}}function Cu(x,m){if(Xe)return;Fi.x=x,Fi.y=m,Oi.setFromCamera(Fi,a);let R=Oi.intersectObjects(W.children,!0);if(R.length===0)return;let w=null;for(let k of R){let G=k.object;for(;G&&(G.userData.gx==null||G.userData.gy==null);)G=G.parent;if(G&&G.userData.gx!=null){w=G;break}}if(!w||w.userData.gx==null)return;let H=w.userData.gx,z=w.userData.gy;if(ct==="draft"&&Qe){let k=z*e.w+H;Pt.has(k)&&yi(H,z);return}if(ct!=="playing"||nt==="cvcpu")return;if(Dt&&Ut){let k=He[De],G=D.find(pe=>pe.id===k&&pe.hp>0);if(G&&H===G.x&&z===G.y){Dt=!1,Ut=null,Ms=new Set,cn(),vt?U=new Map:(U=Qa(e,G.x,G.y,ae(G,"agi"),D,G),ao(U)),Nt();return}let Z=`${H},${z}`;if(!Ms.has(Z))return;if(!G||G.mp<Ut.cost){Dt=!1,Ut=null,cn(),Nt();return}let ce=D.find(pe=>pe.x===H&&pe.y===z&&pe.hp>0);if(Ut.target==="enemy"&&(!ce||ce.player===G.player)||Ut.target==="ally"&&ce&&ce.player!==G.player||Ut.target==="self"&&(H!==G.x||z!==G.y)||Ut.target==="enemy"&&!ce)return;G.mp-=Ut.cost,xt=!0;let Ae={showFloatingCombatText:qn,handleUnitDeath:vn,updateUnitSlashVisibility:We,updateTurnUI:Nt,world:e,units:D,updateUnitPosition(pe){let Fe=Y.get(pe.id);Fe&&Fe.position.copy(xe(pe.x,pe.y))}},le=Ut.target==="self"?G:ce||null;Or(G,le,Ut,Ae,()=>{cn(),Dt=!1,Ut=null,Ms=new Set,vt?Ft():Nt()});return}if(Zt){let k=He[De],G=D.find(ce=>ce.id===k),Z=Y.get(k);if(G&&Z&&en.length>0){let ce=xe(G.x,G.y),Ae=xe(H,z),le=Ae.x-ce.x,pe=Ae.z-ce.z,Fe=le*le+pe*pe>1e-6?Math.atan2(le,pe):Z.rotation.y;Z.rotation.y=ft(Fe)}Ft();return}if(me!=null&&At){let k=D.find(ce=>ce.id===me);if(!k||k.player!==oe)return;let G=z*e.w+H,Z=D.find(ce=>ce.x===H&&ce.y===z&&ce.hp>0);if(Z&&Z.id===He[De]&&Z.player===oe){At=!1,me=Z.id,vt?(cn(),U=new Map):(U=Qa(e,Z.x,Z.y,ae(Z,"agi"),D,Z),ao(U)),Nt();return}if(!U.has(G)||U.get(G)===0)return;if(Z&&Z.player!==oe){let ce=ae(Z,"agi")*.7+ae(Z,"luk")*.3;if(Math.random()*Math.max(.001,ce)<=ae(k,"dex")){let pe=ae(k,"str")*.7+ae(k,"dex")*.1+ae(k,"int")*.07-(ae(Z,"vit")*.3+ae(Z,"luk")*.1),Fe=Math.max(1,Math.floor(pe));Z.hp=Math.max(0,Z.hp-Fe),qn(Z.x,Z.y,String(Fe),!1),Z.hp<=0&&vn(Z),We(Z)}else qn(Z.x,Z.y,"MISS",!0);xt=!0,me=null,At=!1,cn(),vt?Ft():Nt()}return}let V=D.find(k=>k.x===H&&k.y===z&&k.hp>0);if(V){if(V.id===He[De]&&V.player===oe){tt(),me=V.id,At=!1,vt?(cn(),U=new Map):(U=Qa(e,H,z,ae(V,"agi"),D,V),ao(U)),Nt();return}cn(),U=new Map,At=!1,Le(V),Nt();return}if(tt(),me!=null){let pe=function(){if(le>=ce.length){k.x=ce[ce.length-1].x,k.y=ce[ce.length-1].y,Xe=!1,ot(Ae),q(),U=new Map,vt=!0,xt?Ft():Nt();return}let Fe=ce[le-1],kt=ce[le],It=xe(Fe.x,Fe.y).clone(),Tt=xe(kt.x,kt.y).clone(),Jt=Tt.x-It.x,nn=Tt.z-It.z;Jt*Jt+nn*nn>1e-6&&(Ae.rotation.y=Math.atan2(Jt,nn));let sn=performance.now(),Mn=0;function Vt(Ot){Mn++,Mn%2===0&&dn();let wt=Math.min(1,(Ot-sn)/uu),bt=(gn=>gn*gn*(3-2*gn))(wt);Ae.position.lerpVectors(It,Tt,bt),Ge(Ae,bt),wt<1?requestAnimationFrame(Vt):(le++,pe())}requestAnimationFrame(Vt)};if(At)return;let k=D.find(Fe=>Fe.id===me);if(!k||k.player!==oe)return;let G=z*e.w+H;if(!U.has(G)||U.get(G)===0||D.some(Fe=>Fe.id!==k.id&&Fe.x===H&&Fe.y===z&&Fe.hp>0)||Xe||vt)return;let ce=es(e,k.x,k.y,H,z,D,k);if(!ce||ce.length<=1)return;me=null,cn(),Xe=!0,q(k.id);let Ae=Y.get(k.id),le=1;pe()}}function ec(x){L.x=x.clientX,L.y=x.clientY,g=x.ctrlKey,p=Br(x.clientX,x.clientY),t.style.cursor=(x.ctrlKey,"grabbing")}function oo(x){return x.touches&&x.touches.length>0?{clientX:x.touches[0].clientX,clientY:x.touches[0].clientY}:x.changedTouches&&x.changedTouches.length>0?{clientX:x.changedTouches[0].clientX,clientY:x.changedTouches[0].clientY}:{clientX:x.clientX,clientY:x.clientY}}function tc(x){if(!x||x.length<2)return 0;let m=x[0],R=x[1];return Math.hypot(R.clientX-m.clientX,R.clientY-m.clientY)}function Pu(x){if(x.touches.length===2){B=tc(x.touches),p=null;return}if(x.touches.length!==1)return;B=null;let m=oo(x);ec({clientX:m.clientX,clientY:m.clientY,ctrlKey:!1})}function Iu(x){if(x.touches.length===2){x.preventDefault();let R=tc(x.touches);if(B!=null&&B>0){let w=R-B,H=a.position.distanceTo(c),z=Math.max($,Math.min(S,H-w*N));h.copy(c).sub(a.position).normalize(),a.position.copy(c).sub(h.multiplyScalar(z)),a.lookAt(c),li=performance.now()}B=R;return}if(B=null,x.touches.length!==1)return;x.preventDefault();let m=oo(x);nc({clientX:m.clientX,clientY:m.clientY,ctrlKey:!1})}function Lu(x){if(x.touches.length<2&&(B=null),x.touches.length===2||x.changedTouches.length===0)return;let m=oo(x);lo({clientX:m.clientX,clientY:m.clientY,ctrlKey:!1})}function nc(x){if(Zt){mn(x.clientX,x.clientY);return}if(p==null)return;let m=x.clientX-L.x,R=x.clientY-L.y;if(!_&&!v&&(Math.abs(m)>M||Math.abs(R)>M)&&(x.ctrlKey||g?v=!0:_=!0),v){I.copy(a.position).sub(c);let w=I.length();if(w<.001)return;let H=Math.atan2(I.x,I.z),z=Math.asin(Math.max(-1,Math.min(1,I.y/w)));H-=m*y,z+=R*y,z=Math.max(T,Math.min(O,z)),I.x=w*Math.cos(z)*Math.sin(H),I.y=w*Math.sin(z),I.z=w*Math.cos(z)*Math.cos(H),a.position.copy(c).add(I),a.lookAt(c),L.x=x.clientX,L.y=x.clientY,li=performance.now()}else if(_){let w=Br(x.clientX,x.clientY);f.setFromNormalAndCoplanarPoint(new F(0,1,0),new F(0,c.y,0)),Oi.setFromCamera(new Be(p.x,p.y),a),Oi.ray.intersectPlane(f,d);let H=d.clone();Oi.setFromCamera(new Be(w.x,w.y),a),Oi.ray.intersectPlane(f,d);let z=H.sub(d);c.add(z),a.position.add(z),a.lookAt(c),p={x:w.x,y:w.y},li=performance.now()}}function lo(x){if(p!=null&&!_&&!v){let m=Br(x.clientX,x.clientY);Cu(m.x,m.y)}p=null,_=!1,v=!1,g=!1,t.style.cursor="grab"}function Du(x){x.preventDefault();let m=a.position.distanceTo(c),R=Math.max($,Math.min(S,m+x.deltaY*A));h.copy(c).sub(a.position).normalize(),a.position.copy(c).sub(h.multiplyScalar(R)),a.lookAt(c),li=performance.now()}t.style.cursor="grab",t.addEventListener("mousedown",ec),t.addEventListener("mousemove",nc),t.addEventListener("mouseup",lo),t.addEventListener("mouseleave",lo),t.addEventListener("touchstart",Pu,{passive:!0}),t.addEventListener("touchmove",Iu,{passive:!1}),t.addEventListener("touchend",Lu,{passive:!0}),t.addEventListener("wheel",Du,{passive:!1});function ic(){let x=t.clientWidth,m=t.clientHeight;a.aspect=x/m,a.updateProjectionMatrix(),Rn.setSize(x,m),Rn.setPixelRatio(Math.min(window.devicePixelRatio,1.7))}window.addEventListener("resize",ic);let Rn=new Ar({antialias:!1});Rn.setSize(t.clientWidth,t.clientHeight),Rn.setPixelRatio(Math.min(window.devicePixelRatio,1.7)),Rn.shadowMap.enabled=!0,Rn.shadowMap.type=Hl,t.appendChild(Rn.domElement),ic();let kr=document.createElement("div");kr.id="combat-text-layer",t.appendChild(kr);let vi=new F,Bi=new F,Uu=1400;function qn(x,m,R,w,H){let z=document.createElement("div");z.className="combat-text-float "+(w?"miss":"damage")+(H?" "+H:""),z.textContent=R,z.style.position="absolute",kr.appendChild(z);let V=H==="skill-name"?1.7:1.2,k=performance.now();function G(){vi.copy(xe(x,m)),vi.y+=V,vi.project(a);let Ae=t.clientWidth,le=t.clientHeight;z.style.left=(vi.x*.5+.5)*Ae+"px",z.style.top=(1-(vi.y*.5+.5))*le+"px"}let Z=0;function ce(){Z%2===0&&G(),Z++,performance.now()-k<Uu?requestAnimationFrame(ce):z.remove()}requestAnimationFrame(ce)}let Nu=1500;function Ou(x,m){let R=document.createElement("div");R.className="combat-text-float "+(m||"levelup"),R.textContent="LEVEL UP!",R.style.position="absolute",kr.appendChild(R);let w=performance.now(),H=0;function z(){vi.copy(xe(x.x,x.y)),vi.y+=1.2,vi.project(a);let k=t.clientWidth,G=t.clientHeight;R.style.left=(vi.x*.5+.5)*k+"px",R.style.top=(1-(vi.y*.5+.5))*G+"px"}function V(){H%2===0&&z(),H++,performance.now()-w<Nu?requestAnimationFrame(V):R.remove()}requestAnimationFrame(V)}function vn(x){console.log("[DEATH]",`${x.name} (${x.class}, P${x.player})`,`at (${x.x},${x.y})`,`Lv.${x.level}`),qn(x.x,x.y,"DEAD",!1);let m=Y.get(x.id);if(!m){q(),sc();return}let R=performance.now();function w(H){dn();let z=H-R,V=Math.min(1,z/J),k=V*V;m.rotation.x=k*Math.PI*.5,V<1?requestAnimationFrame(w):(n.remove(m),Y.delete(x.id),q(),sc())}requestAnimationFrame(w)}function sc(){if(ct!=="playing")return;let x=D.some(R=>R.player===1&&R.hp>0),m=D.some(R=>R.player===2&&R.hp>0);x?m||co(1):co(2)}function Fu(){let x=Kl(),m=new Set(x.map(V=>V.gy*e.w+V.gx)),R=D.filter(V=>V.hp>0&&V.player===1&&m.has(V.y*e.w+V.x)).length,w=D.filter(V=>V.hp>0&&V.player===2&&m.has(V.y*e.w+V.x)).length,H=null,z="";if(R>w)H=1,z=`Time's up! Player 1 wins! (${R} vs ${w} units on center base)`;else if(w>R)H=2,z=`Time's up! Player 2 wins! (${w} vs ${R} units on center base)`;else{let V=D.filter(G=>G.hp>0&&G.player===1).reduce((G,Z)=>G+Z.hp,0),k=D.filter(G=>G.hp>0&&G.player===2).reduce((G,Z)=>G+Z.hp,0);V>k?(H=1,z=`Time's up! Draw on center \u2014 Player 1 wins on total HP (${V} vs ${k})`):k>V?(H=2,z=`Time's up! Draw on center \u2014 Player 2 wins on total HP (${k} vs ${V})`):z=`Draw! (equal units on center: ${R}, equal HP)`}co(H,z)}function co(x,m){ct="gameover",document.getElementById("turn-menu").style.display="none",tt(),cn();let R=document.getElementById("game-over-overlay"),w=document.getElementById("game-over-title"),H=document.getElementById("game-over-cards");w.textContent=m??`Player ${x} wins!`;let z=D.filter(V=>V.player===(x??1));H.innerHTML=z.map(V=>{let k=V,G=V.level>=3?" level-3":V.level>=2?" level-2":"",Z=k.maxHp>0&&k.hp/k.maxHp<.3?" low-hp":"";return`
        <div class="game-over-card${G}${Z}">
          <img class="game-over-card-image" src="${Nr[V.class]||""}" alt="${k.name}" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="game-over-card-body">
            <div class="game-over-card-name">${k.name}</div>
            <div class="game-over-card-meta">Lv.${k.level} ${k.class} \u2014 HP ${k.hp}/${k.maxHp}</div>
            <div class="game-over-card-stats">
              <span class="stat-label">HP</span><span class="stat-val stat-val-hp">${k.hp}/${k.maxHp}</span>
              <span class="stat-label">MP</span><span class="stat-val">${k.mp}/${k.maxMp}</span>
              <span class="stat-label">STR</span><span class="stat-val">${ae(k,"str")}</span>
              <span class="stat-label">AGI</span><span class="stat-val">${ae(k,"agi")}</span>
              <span class="stat-label">VIT</span><span class="stat-val">${ae(k,"vit")}</span>
              <span class="stat-label">DEX</span><span class="stat-val">${ae(k,"dex")}</span>
              <span class="stat-label">LUK</span><span class="stat-val">${ae(k,"luk")}</span>
              <span class="stat-label">INT</span><span class="stat-val">${ae(k,"int")}</span>
              <span class="stat-label">Range</span><span class="stat-val">${k.range}</span>
            </div>
          </div>
        </div>
      `}).join(""),R.classList.add("visible")}function bs(x=0){requestAnimationFrame(bs),li===0&&(li=x);let m=x-li>500,R=0;typeof bs.frameCount=="number"&&(R=bs.frameCount),bs.frameCount=R+1;let w=()=>{if(_i){let H=.6+.4*Math.sin(x*.004);for(let z=0;z<Jn.length;z++){let V=z%2===0?.4:.7;Jn[z].opacity=V*H}Rn.render(n,a),_i=!1}};m?x-ts>=100&&(ts=x,_i=!0,w()):(bs.frameCount%2===0&&(_i=!0),w())}bs()}Ex();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
