var Wl="160";var $u=0,fc=1,Zu=2;var $h=1,Xl=2,Ri=3,Zi=0,$n=1,gn=2;var qi=0,Gs=1,pc=2,mc=3,gc=4,Ku=5,cs=100,Ju=101,ju=102,xc=103,yc=104,Qu=200,ed=201,td=202,nd=203,jo=204,Qo=205,id=206,sd=207,rd=208,ad=209,od=210,ld=211,cd=212,hd=213,ud=214,dd=0,fd=1,pd=2,ga=3,md=4,gd=5,xd=6,yd=7,Zh=0,_d=1,vd=2,Yi=0,Md=1,bd=2,Sd=3,Ed=4,Td=5,wd=6;var Kh=300,qs=301,Ys=302,el=303,tl=304,$a=306,Mr=1e3,pi=1001,nl=1002,zn=1003,_c=1004;var go=1005;var ii=1006,Ad=1007;var br=1008;var $i=1009,Rd=1010,Cd=1011,ql=1012,Jh=1013,Wi=1014,Xi=1015,Sr=1016,jh=1017,Qh=1018,us=1020,Pd=1021,mi=1023,Id=1024,Ld=1025,ds=1026,$s=1027,Dd=1028,eu=1029,Ud=1030,tu=1031,nu=1033,xo=33776,yo=33777,_o=33778,vo=33779,vc=35840,Mc=35841,bc=35842,Sc=35843,iu=36196,Ec=37492,Tc=37496,wc=37808,Ac=37809,Rc=37810,Cc=37811,Pc=37812,Ic=37813,Lc=37814,Dc=37815,Uc=37816,Nc=37817,Oc=37818,Fc=37819,Bc=37820,kc=37821,Mo=36492,Hc=36494,zc=36495,Nd=36283,Vc=36284,Gc=36285,Wc=36286;var xa=2300,ya=2301,bo=2302,Xc=2400,qc=2401,Yc=2402;var su=3e3,fs=3001,Od=3200,Fd=3201,ru=0,Bd=1,si="",Dn="srgb",Pi="srgb-linear",Yl="display-p3",Za="display-p3-linear",_a="linear",Qt="srgb",va="rec709",Ma="p3";var Ss=7680;var $c=519,kd=512,Hd=513,zd=514,au=515,Vd=516,Gd=517,Wd=518,Xd=519,Zc=35044;var Kc="300 es",il=1035,Ci=2e3,ba=2001,Ki=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var So=Math.PI/180,sl=180/Math.PI;function er(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nn[i&255]+Nn[i>>8&255]+Nn[i>>16&255]+Nn[i>>24&255]+"-"+Nn[e&255]+Nn[e>>8&255]+"-"+Nn[e>>16&15|64]+Nn[e>>24&255]+"-"+Nn[t&63|128]+Nn[t>>8&255]+"-"+Nn[t>>16&255]+Nn[t>>24&255]+Nn[n&255]+Nn[n>>8&255]+Nn[n>>16&255]+Nn[n>>24&255]).toLowerCase()}function Fn(i,e,t){return Math.max(e,Math.min(t,i))}function qd(i,e){return(i%e+e)%e}function Eo(i,e,t){return(1-t)*i+t*e}function Jc(i){return(i&i-1)===0&&i!==0}function rl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ur(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Yn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Be=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Fn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},It=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],d=n[2],h=n[5],y=n[8],v=s[0],g=s[3],p=s[6],M=s[1],_=s[4],T=s[7],O=s[2],I=s[5],L=s[8];return r[0]=a*v+o*M+l*O,r[3]=a*g+o*_+l*I,r[6]=a*p+o*T+l*L,r[1]=c*v+u*M+f*O,r[4]=c*g+u*_+f*I,r[7]=c*p+u*T+f*L,r[2]=d*v+h*M+y*O,r[5]=d*g+h*_+y*I,r[8]=d*p+h*T+y*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*r,h=c*r-a*l,y=t*f+n*d+s*h;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/y;return e[0]=f*v,e[1]=(s*c-u*n)*v,e[2]=(o*n-s*a)*v,e[3]=d*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=h*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(To.makeScale(e,t)),this}rotate(e){return this.premultiply(To.makeRotation(-e)),this}translate(e,t){return this.premultiply(To.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},To=new It;function ou(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Sa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Yd(){let i=Sa("canvas");return i.style.display="block",i}var jc={};function gr(i){i in jc||(jc[i]=!0,console.warn(i))}var Qc=new It().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),eh=new It().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Gr={[Pi]:{transfer:_a,primaries:va,toReference:i=>i,fromReference:i=>i},[Dn]:{transfer:Qt,primaries:va,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Za]:{transfer:_a,primaries:Ma,toReference:i=>i.applyMatrix3(eh),fromReference:i=>i.applyMatrix3(Qc)},[Yl]:{transfer:Qt,primaries:Ma,toReference:i=>i.convertSRGBToLinear().applyMatrix3(eh),fromReference:i=>i.applyMatrix3(Qc).convertLinearToSRGB()}},$d=new Set([Pi,Za]),Gt={enabled:!0,_workingColorSpace:Pi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!$d.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Gr[e].toReference,s=Gr[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Gr[i].primaries},getTransfer:function(i){return i===si?_a:Gr[i].transfer}};function Ws(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Es,Ea=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Es===void 0&&(Es=Sa("canvas")),Es.width=e.width,Es.height=e.height;let n=Es.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Es}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Sa("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ws(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ws(t[n]/255)*255):t[n]=Ws(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Zd=0,Ta=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=er(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ao(s[a].image)):r.push(Ao(s[a]))}else r=Ao(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Ao(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ea.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Kd=0,ai=class i extends Ki{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=pi,s=pi,r=ii,a=br,o=mi,l=$i,c=i.DEFAULT_ANISOTROPY,u=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=er(),this.name="",this.source=new Ta(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(gr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===fs?Dn:si),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mr:e.x=e.x-Math.floor(e.x);break;case pi:e.x=e.x<0?0:1;break;case nl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mr:e.y=e.y-Math.floor(e.y);break;case pi:e.y=e.y<0?0:1;break;case nl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return gr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Dn?fs:su}set encoding(e){gr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===fs?Dn:si}};ai.DEFAULT_IMAGE=null;ai.DEFAULT_MAPPING=Kh;ai.DEFAULT_ANISOTROPY=1;var Ln=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],y=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(y-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(y+g)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,T=(h+1)/2,O=(p+1)/2,I=(u+d)/4,L=(f+v)/4,$=(y+g)/4;return _>T&&_>O?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=I/n,r=L/n):T>O?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=I/s,r=$/s):O<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),n=L/r,s=$/r),this.set(n,s,r,t),this}let M=Math.sqrt((g-y)*(g-y)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(g-y)/M,this.y=(f-v)/M,this.z=(d-u)/M,this.w=Math.acos((c+h+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},al=class extends Ki{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ln(0,0,e,t),this.scissorTest=!1,this.viewport=new Ln(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(gr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===fs?Dn:si),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ii,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new ai(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ta(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ii=class extends al{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},wa=class extends ai{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=zn,this.minFilter=zn,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ol=class extends ai{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=zn,this.minFilter=zn,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ji=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3],d=r[a+0],h=r[a+1],y=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=h,e[t+2]=y,e[t+3]=v;return}if(f!==v||l!==d||c!==h||u!==y){let g=1-o,p=l*d+c*h+u*y+f*v,M=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let O=Math.sqrt(_),I=Math.atan2(O,p*M);g=Math.sin(g*I)/O,o=Math.sin(o*I)/O}let T=o*M;if(l=l*g+d*T,c=c*g+h*T,u=u*g+y*T,f=f*g+v*T,g===1-o){let O=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=O,c*=O,u*=O,f*=O}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[a],d=r[a+1],h=r[a+2],y=r[a+3];return e[t]=o*y+u*f+l*h-c*d,e[t+1]=l*y+u*d+c*f-o*h,e[t+2]=c*y+u*h+o*d-l*f,e[t+3]=u*y-o*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),f=o(r/2),d=l(n/2),h=l(s/2),y=l(r/2);switch(a){case"XYZ":this._x=d*u*f+c*h*y,this._y=c*h*f-d*u*y,this._z=c*u*y+d*h*f,this._w=c*u*f-d*h*y;break;case"YXZ":this._x=d*u*f+c*h*y,this._y=c*h*f-d*u*y,this._z=c*u*y-d*h*f,this._w=c*u*f+d*h*y;break;case"ZXY":this._x=d*u*f-c*h*y,this._y=c*h*f+d*u*y,this._z=c*u*y+d*h*f,this._w=c*u*f-d*h*y;break;case"ZYX":this._x=d*u*f-c*h*y,this._y=c*h*f+d*u*y,this._z=c*u*y-d*h*f,this._w=c*u*f+d*h*y;break;case"YZX":this._x=d*u*f+c*h*y,this._y=c*h*f+d*u*y,this._z=c*u*y-d*h*f,this._w=c*u*f-d*h*y;break;case"XZY":this._x=d*u*f-c*h*y,this._y=c*h*f-d*u*y,this._z=c*u*y+d*h*f,this._w=c*u*f+d*h*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=n+o+f;if(d>0){let h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(a-s)*h}else if(n>o&&n>f){let h=2*Math.sqrt(1+n-o-f);this._w=(u-l)/h,this._x=.25*h,this._y=(s+a)/h,this._z=(r+c)/h}else if(o>f){let h=2*Math.sqrt(1+o-n-f);this._w=(r-c)/h,this._x=(s+a)/h,this._y=.25*h,this._z=(l+u)/h}else{let h=2*Math.sqrt(1+f-n-o);this._w=(a-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Fn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let h=1-t;return this._w=h*a+t*this._w,this._x=h*n+t*this._x,this._y=h*s+t*this._y,this._z=h*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(th.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(th.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*u,this.y=n+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ro.copy(this).projectOnVector(e),this.sub(Ro)}reflect(e){return this.sub(Ro.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Fn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ro=new F,th=new Ji,ps=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,hi):hi.fromBufferAttribute(r,a),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wr.copy(n.boundingBox)),Wr.applyMatrix4(e.matrixWorld),this.union(Wr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(dr),Xr.subVectors(this.max,dr),Ts.subVectors(e.a,dr),ws.subVectors(e.b,dr),As.subVectors(e.c,dr),ki.subVectors(ws,Ts),Hi.subVectors(As,ws),ss.subVectors(Ts,As);let t=[0,-ki.z,ki.y,0,-Hi.z,Hi.y,0,-ss.z,ss.y,ki.z,0,-ki.x,Hi.z,0,-Hi.x,ss.z,0,-ss.x,-ki.y,ki.x,0,-Hi.y,Hi.x,0,-ss.y,ss.x,0];return!Co(t,Ts,ws,As,Xr)||(t=[1,0,0,0,1,0,0,0,1],!Co(t,Ts,ws,As,Xr))?!1:(qr.crossVectors(ki,Hi),t=[qr.x,qr.y,qr.z],Co(t,Ts,ws,As,Xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Si=[new F,new F,new F,new F,new F,new F,new F,new F],hi=new F,Wr=new ps,Ts=new F,ws=new F,As=new F,ki=new F,Hi=new F,ss=new F,dr=new F,Xr=new F,qr=new F,rs=new F;function Co(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){rs.fromArray(i,r);let o=s.x*Math.abs(rs.x)+s.y*Math.abs(rs.y)+s.z*Math.abs(rs.z),l=e.dot(rs),c=t.dot(rs),u=n.dot(rs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Jd=new ps,fr=new F,Po=new F,Zs=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Jd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fr.subVectors(e,this.center);let t=fr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(fr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Po.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fr.copy(e.center).add(Po)),this.expandByPoint(fr.copy(e.center).sub(Po))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ei=new F,Io=new F,Yr=new F,zi=new F,Lo=new F,$r=new F,Do=new F,Er=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ei.copy(this.origin).addScaledVector(this.direction,t),Ei.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Io.copy(e).add(t).multiplyScalar(.5),Yr.copy(t).sub(e).normalize(),zi.copy(this.origin).sub(Io);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Yr),o=zi.dot(this.direction),l=-zi.dot(Yr),c=zi.lengthSq(),u=Math.abs(1-a*a),f,d,h,y;if(u>0)if(f=a*l-o,d=a*o-l,y=r*u,f>=0)if(d>=-y)if(d<=y){let v=1/u;f*=v,d*=v,h=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d<=-y?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),h=-f*f+d*(d+2*l)+c):d<=y?(f=0,d=Math.min(Math.max(-r,-l),r),h=d*(d+2*l)+c):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),h=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Io).addScaledVector(Yr,d),h}intersectSphere(e,t){Ei.subVectors(e.center,this.origin);let n=Ei.dot(this.direction),s=Ei.dot(Ei)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ei)!==null}intersectTriangle(e,t,n,s,r){Lo.subVectors(t,e),$r.subVectors(n,e),Do.crossVectors(Lo,$r);let a=this.direction.dot(Do),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;zi.subVectors(this.origin,e);let l=o*this.direction.dot($r.crossVectors(zi,$r));if(l<0)return null;let c=o*this.direction.dot(Lo.cross(zi));if(c<0||l+c>a)return null;let u=-o*zi.dot(Do);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Mn=class i{constructor(e,t,n,s,r,a,o,l,c,u,f,d,h,y,v,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,f,d,h,y,v,g)}set(e,t,n,s,r,a,o,l,c,u,f,d,h,y,v,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=y,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Rs.setFromMatrixColumn(e,0).length(),r=1/Rs.setFromMatrixColumn(e,1).length(),a=1/Rs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let d=a*u,h=a*f,y=o*u,v=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=h+y*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=y+h*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*u,h=l*f,y=c*u,v=c*f;t[0]=d+v*o,t[4]=y*o-h,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=h*o-y,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*u,h=l*f,y=c*u,v=c*f;t[0]=d-v*o,t[4]=-a*f,t[8]=y+h*o,t[1]=h+y*o,t[5]=a*u,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*u,h=a*f,y=o*u,v=o*f;t[0]=l*u,t[4]=y*c-h,t[8]=d*c+v,t[1]=l*f,t[5]=v*c+d,t[9]=h*c-y,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,h=a*c,y=o*l,v=o*c;t[0]=l*u,t[4]=v-d*f,t[8]=y*f+h,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=h*f+y,t[10]=d-v*f}else if(e.order==="XZY"){let d=a*l,h=a*c,y=o*l,v=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+v,t[5]=a*u,t[9]=h*f-y,t[2]=y*f-h,t[6]=o*u,t[10]=v*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jd,e,Qd)}lookAt(e,t,n){let s=this.elements;return jn.subVectors(e,t),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),Vi.crossVectors(n,jn),Vi.lengthSq()===0&&(Math.abs(n.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),Vi.crossVectors(n,jn)),Vi.normalize(),Zr.crossVectors(jn,Vi),s[0]=Vi.x,s[4]=Zr.x,s[8]=jn.x,s[1]=Vi.y,s[5]=Zr.y,s[9]=jn.y,s[2]=Vi.z,s[6]=Zr.z,s[10]=jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],d=n[9],h=n[13],y=n[2],v=n[6],g=n[10],p=n[14],M=n[3],_=n[7],T=n[11],O=n[15],I=s[0],L=s[4],$=s[8],S=s[12],A=s[1],N=s[5],B=s[9],J=s[13],P=s[2],V=s[6],D=s[10],ae=s[14],Y=s[3],j=s[7],re=s[11],ue=s[15];return r[0]=a*I+o*A+l*P+c*Y,r[4]=a*L+o*N+l*V+c*j,r[8]=a*$+o*B+l*D+c*re,r[12]=a*S+o*J+l*ae+c*ue,r[1]=u*I+f*A+d*P+h*Y,r[5]=u*L+f*N+d*V+h*j,r[9]=u*$+f*B+d*D+h*re,r[13]=u*S+f*J+d*ae+h*ue,r[2]=y*I+v*A+g*P+p*Y,r[6]=y*L+v*N+g*V+p*j,r[10]=y*$+v*B+g*D+p*re,r[14]=y*S+v*J+g*ae+p*ue,r[3]=M*I+_*A+T*P+O*Y,r[7]=M*L+_*N+T*V+O*j,r[11]=M*$+_*B+T*D+O*re,r[15]=M*S+_*J+T*ae+O*ue,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],y=e[3],v=e[7],g=e[11],p=e[15];return y*(+r*l*f-s*c*f-r*o*d+n*c*d+s*o*h-n*l*h)+v*(+t*l*h-t*c*d+r*a*d-s*a*h+s*c*u-r*l*u)+g*(+t*c*f-t*o*h-r*a*f+n*a*h+r*o*u-n*c*u)+p*(-s*o*u-t*l*f+t*o*d+s*a*f-n*a*d+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],y=e[12],v=e[13],g=e[14],p=e[15],M=f*g*c-v*d*c+v*l*h-o*g*h-f*l*p+o*d*p,_=y*d*c-u*g*c-y*l*h+a*g*h+u*l*p-a*d*p,T=u*v*c-y*f*c+y*o*h-a*v*h-u*o*p+a*f*p,O=y*f*l-u*v*l-y*o*d+a*v*d+u*o*g-a*f*g,I=t*M+n*_+s*T+r*O;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/I;return e[0]=M*L,e[1]=(v*d*r-f*g*r-v*s*h+n*g*h+f*s*p-n*d*p)*L,e[2]=(o*g*r-v*l*r+v*s*c-n*g*c-o*s*p+n*l*p)*L,e[3]=(f*l*r-o*d*r-f*s*c+n*d*c+o*s*h-n*l*h)*L,e[4]=_*L,e[5]=(u*g*r-y*d*r+y*s*h-t*g*h-u*s*p+t*d*p)*L,e[6]=(y*l*r-a*g*r-y*s*c+t*g*c+a*s*p-t*l*p)*L,e[7]=(a*d*r-u*l*r+u*s*c-t*d*c-a*s*h+t*l*h)*L,e[8]=T*L,e[9]=(y*f*r-u*v*r-y*n*h+t*v*h+u*n*p-t*f*p)*L,e[10]=(a*v*r-y*o*r+y*n*c-t*v*c-a*n*p+t*o*p)*L,e[11]=(u*o*r-a*f*r-u*n*c+t*f*c+a*n*h-t*o*h)*L,e[12]=O*L,e[13]=(u*v*s-y*f*s+y*n*d-t*v*d-u*n*g+t*f*g)*L,e[14]=(y*o*s-a*v*s-y*n*l+t*v*l+a*n*g-t*o*g)*L,e[15]=(a*f*s-u*o*s+u*n*l-t*f*l-a*n*d+t*o*d)*L,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,f=o+o,d=r*c,h=r*u,y=r*f,v=a*u,g=a*f,p=o*f,M=l*c,_=l*u,T=l*f,O=n.x,I=n.y,L=n.z;return s[0]=(1-(v+p))*O,s[1]=(h+T)*O,s[2]=(y-_)*O,s[3]=0,s[4]=(h-T)*I,s[5]=(1-(d+p))*I,s[6]=(g+M)*I,s[7]=0,s[8]=(y+_)*L,s[9]=(g-M)*L,s[10]=(1-(d+v))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Rs.set(s[0],s[1],s[2]).length(),a=Rs.set(s[4],s[5],s[6]).length(),o=Rs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ui.copy(this);let c=1/r,u=1/a,f=1/o;return ui.elements[0]*=c,ui.elements[1]*=c,ui.elements[2]*=c,ui.elements[4]*=u,ui.elements[5]*=u,ui.elements[6]*=u,ui.elements[8]*=f,ui.elements[9]*=f,ui.elements[10]*=f,t.setFromRotationMatrix(ui),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Ci){let l=this.elements,c=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s),h,y;if(o===Ci)h=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===ba)h=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Ci){let l=this.elements,c=1/(t-e),u=1/(n-s),f=1/(a-r),d=(t+e)*c,h=(n+s)*u,y,v;if(o===Ci)y=(a+r)*f,v=-2*f;else if(o===ba)y=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=v,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Rs=new F,ui=new Mn,jd=new F(0,0,0),Qd=new F(1,1,1),Vi=new F,Zr=new F,jn=new F,nh=new Mn,ih=new Ji,Aa=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],d=s[6],h=s[10];switch(t){case"XYZ":this._y=Math.asin(Fn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Fn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Fn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Fn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Fn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-Fn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return nh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ih.setFromEuler(this),this.setFromQuaternion(ih,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Aa.DEFAULT_ORDER="XYZ";var Tr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ef=0,sh=new F,Cs=new Ji,Ti=new Mn,Kr=new F,pr=new F,tf=new F,nf=new Ji,rh=new F(1,0,0),ah=new F(0,1,0),oh=new F(0,0,1),sf={type:"added"},rf={type:"removed"},Gn=class i extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=er(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new F,t=new Aa,n=new Ji,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Mn},normalMatrix:{value:new It}}),this.matrix=new Mn,this.matrixWorld=new Mn,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis(rh,e)}rotateY(e){return this.rotateOnAxis(ah,e)}rotateZ(e){return this.rotateOnAxis(oh,e)}translateOnAxis(e,t){return sh.copy(e).applyQuaternion(this.quaternion),this.position.add(sh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rh,e)}translateY(e){return this.translateOnAxis(ah,e)}translateZ(e){return this.translateOnAxis(oh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Kr.copy(e):Kr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(pr,Kr,this.up):Ti.lookAt(Kr,pr,this.up),this.quaternion.setFromRotationMatrix(Ti),s&&(Ti.extractRotation(s.matrixWorld),Cs.setFromRotationMatrix(Ti),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(sf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rf)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,e,tf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,nf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),h=a(e.animations),y=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),h.length>0&&(n.animations=h),y.length>0&&(n.nodes=y)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Gn.DEFAULT_UP=new F(0,1,0);Gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var di=new F,wi=new F,Uo=new F,Ai=new F,Ps=new F,Is=new F,lh=new F,No=new F,Oo=new F,Fo=new F,Jr=!1,ks=class i{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),di.subVectors(e,t),s.cross(di);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){di.subVectors(s,t),wi.subVectors(n,t),Uo.subVectors(e,t);let a=di.dot(di),o=di.dot(wi),l=di.dot(Uo),c=wi.dot(wi),u=wi.dot(Uo),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let d=1/f,h=(c*l-o*u)*d,y=(a*u-o*l)*d;return r.set(1-h-y,y,h)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getUV(e,t,n,s,r,a,o,l){return Jr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Jr=!0),this.getInterpolation(e,t,n,s,r,a,o,l)}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ai.x),l.addScaledVector(a,Ai.y),l.addScaledVector(o,Ai.z),l)}static isFrontFacing(e,t,n,s){return di.subVectors(n,t),wi.subVectors(e,t),di.cross(wi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),di.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Jr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Jr=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ps.subVectors(s,n),Is.subVectors(r,n),No.subVectors(e,n);let l=Ps.dot(No),c=Is.dot(No);if(l<=0&&c<=0)return t.copy(n);Oo.subVectors(e,s);let u=Ps.dot(Oo),f=Is.dot(Oo);if(u>=0&&f<=u)return t.copy(s);let d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ps,a);Fo.subVectors(e,r);let h=Ps.dot(Fo),y=Is.dot(Fo);if(y>=0&&h<=y)return t.copy(r);let v=h*c-l*y;if(v<=0&&c>=0&&y<=0)return o=c/(c-y),t.copy(n).addScaledVector(Is,o);let g=u*y-h*f;if(g<=0&&f-u>=0&&h-y>=0)return lh.subVectors(r,s),o=(f-u)/(f-u+(h-y)),t.copy(s).addScaledVector(lh,o);let p=1/(g+v+d);return a=v*p,o=d*p,t.copy(n).addScaledVector(Ps,a).addScaledVector(Is,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},lu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},jr={h:0,s:0,l:0};function Bo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var _t=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Gt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Gt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Gt.workingColorSpace){if(e=qd(e,1),t=Fn(t,0,1),n=Fn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Bo(a,r,e+1/3),this.g=Bo(a,r,e),this.b=Bo(a,r,e-1/3)}return Gt.toWorkingColorSpace(this,s),this}setStyle(e,t=Dn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dn){let n=lu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}copyLinearToSRGB(e){return this.r=wo(e.r),this.g=wo(e.g),this.b=wo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dn){return Gt.fromWorkingColorSpace(On.copy(this),e),Math.round(Fn(On.r*255,0,255))*65536+Math.round(Fn(On.g*255,0,255))*256+Math.round(Fn(On.b*255,0,255))}getHexString(e=Dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Gt.workingColorSpace){Gt.fromWorkingColorSpace(On.copy(this),t);let n=On.r,s=On.g,r=On.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Gt.workingColorSpace){return Gt.fromWorkingColorSpace(On.copy(this),t),e.r=On.r,e.g=On.g,e.b=On.b,e}getStyle(e=Dn){Gt.fromWorkingColorSpace(On.copy(this),e);let t=On.r,n=On.g,s=On.b;return e!==Dn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Gi),this.setHSL(Gi.h+e,Gi.s+t,Gi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Gi),e.getHSL(jr);let n=Eo(Gi.h,jr.h,t),s=Eo(Gi.s,jr.s,t),r=Eo(Gi.l,jr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},On=new _t;_t.NAMES=lu;var af=0,ji=class extends Ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=er(),this.name="",this.type="Material",this.blending=Gs,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jo,this.blendDst=Qo,this.blendEquation=cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=ga,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$c,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(n.blending=this.blending),this.side!==Zi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==jo&&(n.blendSrc=this.blendSrc),this.blendDst!==Qo&&(n.blendDst=this.blendDst),this.blendEquation!==cs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ga&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$c&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},xn=class extends ji{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var vn=new F,Qr=new Be,Zn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Zc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qr.fromBufferAttribute(this,t),Qr.applyMatrix3(e),this.setXY(t,Qr.x,Qr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix3(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix4(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyNormalMatrix(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.transformDirection(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ur(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Yn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ur(t,this.array)),t}setX(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ur(t,this.array)),t}setY(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ur(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ur(t,this.array)),t}setW(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Yn(t,this.array),n=Yn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Yn(t,this.array),n=Yn(n,this.array),s=Yn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Yn(t,this.array),n=Yn(n,this.array),s=Yn(s,this.array),r=Yn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zc&&(e.usage=this.usage),e}};var Ra=class extends Zn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ca=class extends Zn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var dn=class extends Zn{constructor(e,t,n){super(new Float32Array(e),t,n)}};var of=0,ni=new Mn,ko=new Gn,Ls=new F,Qn=new ps,mr=new ps,In=new F,Kn=class i extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=er(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ou(e)?Ca:Ra)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new It().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,t,n){return ni.makeTranslation(e,t,n),this.applyMatrix4(ni),this}scale(e,t,n){return ni.makeScale(e,t,n),this.applyMatrix4(ni),this}lookAt(e){return ko.lookAt(e),ko.updateMatrix(),this.applyMatrix4(ko.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ls).negate(),this.translate(Ls.x,Ls.y,Ls.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new dn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ps);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Qn.setFromBufferAttribute(r),this.morphTargetsRelative?(In.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(In),In.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(In)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(Qn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];mr.setFromBufferAttribute(o),this.morphTargetsRelative?(In.addVectors(Qn.min,mr.min),Qn.expandByPoint(In),In.addVectors(Qn.max,mr.max),Qn.expandByPoint(In)):(Qn.expandByPoint(mr.min),Qn.expandByPoint(mr.max))}Qn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)In.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(In));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)In.fromBufferAttribute(o,c),l&&(Ls.fromBufferAttribute(e,c),In.add(Ls)),s=Math.max(s,n.distanceToSquared(In))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zn(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],u=[];for(let A=0;A<o;A++)c[A]=new F,u[A]=new F;let f=new F,d=new F,h=new F,y=new Be,v=new Be,g=new Be,p=new F,M=new F;function _(A,N,B){f.fromArray(s,A*3),d.fromArray(s,N*3),h.fromArray(s,B*3),y.fromArray(a,A*2),v.fromArray(a,N*2),g.fromArray(a,B*2),d.sub(f),h.sub(f),v.sub(y),g.sub(y);let J=1/(v.x*g.y-g.x*v.y);isFinite(J)&&(p.copy(d).multiplyScalar(g.y).addScaledVector(h,-v.y).multiplyScalar(J),M.copy(h).multiplyScalar(v.x).addScaledVector(d,-g.x).multiplyScalar(J),c[A].add(p),c[N].add(p),c[B].add(p),u[A].add(M),u[N].add(M),u[B].add(M))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let A=0,N=T.length;A<N;++A){let B=T[A],J=B.start,P=B.count;for(let V=J,D=J+P;V<D;V+=3)_(n[V+0],n[V+1],n[V+2])}let O=new F,I=new F,L=new F,$=new F;function S(A){L.fromArray(r,A*3),$.copy(L);let N=c[A];O.copy(N),O.sub(L.multiplyScalar(L.dot(N))).normalize(),I.crossVectors($,N);let J=I.dot(u[A])<0?-1:1;l[A*4]=O.x,l[A*4+1]=O.y,l[A*4+2]=O.z,l[A*4+3]=J}for(let A=0,N=T.length;A<N;++A){let B=T[A],J=B.start,P=B.count;for(let V=J,D=J+P;V<D;V+=3)S(n[V+0]),S(n[V+1]),S(n[V+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Zn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,h=n.count;d<h;d++)n.setXYZ(d,0,0,0);let s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,u=new F,f=new F;if(e)for(let d=0,h=e.count;d<h;d+=3){let y=e.getX(d+0),v=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,y),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,y),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(y,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,h=t.count;d<h;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)In.fromBufferAttribute(e,t),In.normalize(),e.setXYZ(t,In.x,In.y,In.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u),h=0,y=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?h=l[v]*o.data.stride+o.offset:h=l[v]*u;for(let p=0;p<u;p++)d[y++]=c[h++]}return new Zn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){let d=c[u],h=e(d,n);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){let h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],f=r[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ch=new Mn,as=new Er,ea=new Zs,hh=new F,Ds=new F,Us=new F,Ns=new F,Ho=new F,ta=new F,na=new Be,ia=new Be,sa=new Be,uh=new F,dh=new F,fh=new F,ra=new F,aa=new F,je=class extends Gn{constructor(e=new Kn,t=new xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ta.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],f=r[l];u!==0&&(Ho.fromBufferAttribute(f,e),a?ta.addScaledVector(Ho,u):ta.addScaledVector(Ho.sub(t),u))}t.add(ta)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(r),as.copy(e.ray).recast(e.near),!(ea.containsPoint(as.origin)===!1&&(as.intersectSphere(ea,hh)===null||as.origin.distanceToSquared(hh)>(e.far-e.near)**2))&&(ch.copy(r).invert(),as.copy(e.ray).applyMatrix4(ch),!(n.boundingBox!==null&&as.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,as)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,h=r.drawRange;if(o!==null)if(Array.isArray(a))for(let y=0,v=d.length;y<v;y++){let g=d[y],p=a[g.materialIndex],M=Math.max(g.start,h.start),_=Math.min(o.count,Math.min(g.start+g.count,h.start+h.count));for(let T=M,O=_;T<O;T+=3){let I=o.getX(T),L=o.getX(T+1),$=o.getX(T+2);s=oa(this,p,e,n,c,u,f,I,L,$),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let y=Math.max(0,h.start),v=Math.min(o.count,h.start+h.count);for(let g=y,p=v;g<p;g+=3){let M=o.getX(g),_=o.getX(g+1),T=o.getX(g+2);s=oa(this,a,e,n,c,u,f,M,_,T),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let y=0,v=d.length;y<v;y++){let g=d[y],p=a[g.materialIndex],M=Math.max(g.start,h.start),_=Math.min(l.count,Math.min(g.start+g.count,h.start+h.count));for(let T=M,O=_;T<O;T+=3){let I=T,L=T+1,$=T+2;s=oa(this,p,e,n,c,u,f,I,L,$),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let y=Math.max(0,h.start),v=Math.min(l.count,h.start+h.count);for(let g=y,p=v;g<p;g+=3){let M=g,_=g+1,T=g+2;s=oa(this,a,e,n,c,u,f,M,_,T),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function lf(i,e,t,n,s,r,a,o){let l;if(e.side===$n?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Zi,o),l===null)return null;aa.copy(o),aa.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(aa);return c<t.near||c>t.far?null:{distance:c,point:aa.clone(),object:i}}function oa(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Ds),i.getVertexPosition(l,Us),i.getVertexPosition(c,Ns);let u=lf(i,e,t,n,Ds,Us,Ns,ra);if(u){s&&(na.fromBufferAttribute(s,o),ia.fromBufferAttribute(s,l),sa.fromBufferAttribute(s,c),u.uv=ks.getInterpolation(ra,Ds,Us,Ns,na,ia,sa,new Be)),r&&(na.fromBufferAttribute(r,o),ia.fromBufferAttribute(r,l),sa.fromBufferAttribute(r,c),u.uv1=ks.getInterpolation(ra,Ds,Us,Ns,na,ia,sa,new Be),u.uv2=u.uv1),a&&(uh.fromBufferAttribute(a,o),dh.fromBufferAttribute(a,l),fh.fromBufferAttribute(a,c),u.normal=ks.getInterpolation(ra,Ds,Us,Ns,uh,dh,fh,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new F,materialIndex:0};ks.getNormal(Ds,Us,Ns,f.normal),u.face=f}return u}var Tn=class i extends Kn{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],f=[],d=0,h=0;y("z","y","x",-1,-1,n,t,e,a,r,0),y("z","y","x",1,-1,n,t,-e,a,r,1),y("x","z","y",1,1,e,n,t,s,a,2),y("x","z","y",1,-1,e,n,-t,s,a,3),y("x","y","z",1,-1,e,t,n,s,r,4),y("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new dn(c,3)),this.setAttribute("normal",new dn(u,3)),this.setAttribute("uv",new dn(f,2));function y(v,g,p,M,_,T,O,I,L,$,S){let A=T/L,N=O/$,B=T/2,J=O/2,P=I/2,V=L+1,D=$+1,ae=0,Y=0,j=new F;for(let re=0;re<D;re++){let ue=re*N-J;for(let fe=0;fe<V;fe++){let te=fe*A-B;j[v]=te*M,j[g]=ue*_,j[p]=P,c.push(j.x,j.y,j.z),j[v]=0,j[g]=0,j[p]=I>0?1:-1,u.push(j.x,j.y,j.z),f.push(fe/L),f.push(1-re/$),ae+=1}}for(let re=0;re<$;re++)for(let ue=0;ue<L;ue++){let fe=d+ue+V*re,te=d+ue+V*(re+1),me=d+(ue+1)+V*(re+1),Pe=d+(ue+1)+V*re;l.push(fe,te,Pe),l.push(te,me,Pe),Y+=6}o.addGroup(h,Y,S),h+=Y,d+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ks(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Hn(i){let e={};for(let t=0;t<i.length;t++){let n=Ks(i[t]);for(let s in n)e[s]=n[s]}return e}function cf(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function cu(i){return i.getRenderTarget()===null?i.outputColorSpace:Gt.workingColorSpace}var hf={clone:Ks,merge:Hn},uf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,df=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Li=class extends ji{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uf,this.fragmentShader=df,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=cf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Pa=class extends Gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mn,this.projectionMatrix=new Mn,this.projectionMatrixInverse=new Mn,this.coordinateSystem=Ci}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Vn=class extends Pa{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=sl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(So*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sl*2*Math.atan(Math.tan(So*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(So*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Os=-90,Fs=1,ll=class extends Gn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Vn(Os,Fs,e,t);s.layers=this.layers,this.add(s);let r=new Vn(Os,Fs,e,t);r.layers=this.layers,this.add(r);let a=new Vn(Os,Fs,e,t);a.layers=this.layers,this.add(a);let o=new Vn(Os,Fs,e,t);o.layers=this.layers,this.add(o);let l=new Vn(Os,Fs,e,t);l.layers=this.layers,this.add(l);let c=new Vn(Os,Fs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Ci)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ba)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(f,d,h),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}},Ia=class extends ai{constructor(e,t,n,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:qs,super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},cl=class extends Ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(gr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===fs?Dn:si),this.texture=new Ia(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ii}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Tn(5,5,5),r=new Li({name:"CubemapFromEquirect",uniforms:Ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$n,blending:qi});r.uniforms.tEquirect.value=t;let a=new je(s,r),o=t.minFilter;return t.minFilter===br&&(t.minFilter=ii),new ll(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},zo=new F,ff=new F,pf=new It,fi=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=zo.subVectors(n,t).cross(ff.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(zo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||pf.getNormalMatrix(e),s=this.coplanarPoint(zo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},os=new Zs,la=new F,wr=class{constructor(e=new fi,t=new fi,n=new fi,s=new fi,r=new fi,a=new fi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ci){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],f=s[6],d=s[7],h=s[8],y=s[9],v=s[10],g=s[11],p=s[12],M=s[13],_=s[14],T=s[15];if(n[0].setComponents(l-r,d-c,g-h,T-p).normalize(),n[1].setComponents(l+r,d+c,g+h,T+p).normalize(),n[2].setComponents(l+a,d+u,g+y,T+M).normalize(),n[3].setComponents(l-a,d-u,g-y,T-M).normalize(),n[4].setComponents(l-o,d-f,g-v,T-_).normalize(),t===Ci)n[5].setComponents(l+o,d+f,g+v,T+_).normalize();else if(t===ba)n[5].setComponents(o,f,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),os.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(os)}intersectsSprite(e){return os.center.set(0,0,0),os.radius=.7071067811865476,os.applyMatrix4(e.matrixWorld),this.intersectsSphere(os)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(la.x=s.normal.x>0?e.max.x:e.min.x,la.y=s.normal.y>0?e.max.y:e.min.y,la.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(la)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function hu(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function mf(i,e){let t=e.isWebGL2,n=new WeakMap;function s(c,u){let f=c.array,d=c.usage,h=f.byteLength,y=i.createBuffer();i.bindBuffer(u,y),i.bufferData(u,f,d),c.onUploadCallback();let v;if(f instanceof Float32Array)v=i.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=i.SHORT;else if(f instanceof Uint32Array)v=i.UNSIGNED_INT;else if(f instanceof Int32Array)v=i.INT;else if(f instanceof Int8Array)v=i.BYTE;else if(f instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:y,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:h}}function r(c,u,f){let d=u.array,h=u._updateRange,y=u.updateRanges;if(i.bindBuffer(f,c),h.count===-1&&y.length===0&&i.bufferSubData(f,0,d),y.length!==0){for(let v=0,g=y.length;v<g;v++){let p=y[v];t?i.bufferSubData(f,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):i.bufferSubData(f,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}h.count!==-1&&(t?i.bufferSubData(f,h.offset*d.BYTES_PER_ELEMENT,d,h.offset,h.count):i.bufferSubData(f,h.offset*d.BYTES_PER_ELEMENT,d.subarray(h.offset,h.offset+h.count)),h.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){let d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let f=n.get(c);if(f===void 0)n.set(c,s(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,c,u),f.version=c.version}}return{get:a,remove:o,update:l}}var Di=class i extends Kn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,f=e/o,d=t/l,h=[],y=[],v=[],g=[];for(let p=0;p<u;p++){let M=p*d-a;for(let _=0;_<c;_++){let T=_*f-r;y.push(T,-M,0),v.push(0,0,1),g.push(_/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){let _=M+c*p,T=M+c*(p+1),O=M+1+c*(p+1),I=M+1+c*p;h.push(_,T,I),h.push(T,O,I)}this.setIndex(h),this.setAttribute("position",new dn(y,3)),this.setAttribute("normal",new dn(v,3)),this.setAttribute("uv",new dn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},gf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xf=`#ifdef USE_ALPHAHASH
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
#endif`,yf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_f=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Mf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bf=`#ifdef USE_AOMAP
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
#endif`,Sf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ef=`#ifdef USE_BATCHING
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
#endif`,Tf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,wf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Af=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cf=`#ifdef USE_IRIDESCENCE
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
#endif`,Pf=`#ifdef USE_BUMPMAP
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
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Of=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ff=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Bf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,kf=`#define PI 3.141592653589793
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
} // validated`,Hf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zf=`vec3 transformedNormal = objectNormal;
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
#endif`,Vf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yf=`
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
}`,$f=`#ifdef USE_ENVMAP
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
#endif`,Zf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Kf=`#ifdef USE_ENVMAP
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
#endif`,Jf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jf=`#ifdef USE_ENVMAP
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
#endif`,Qf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ep=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,np=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ip=`#ifdef USE_GRADIENTMAP
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
}`,sp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,rp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ap=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,op=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lp=`uniform bool receiveShadow;
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
#endif`,cp=`#ifdef USE_ENVMAP
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
#endif`,hp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pp=`PhysicalMaterial material;
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
#endif`,mp=`struct PhysicalMaterial {
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
}`,gp=`
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
#endif`,xp=`#if defined( RE_IndirectDiffuse )
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
#endif`,yp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_p=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,bp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Sp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ep=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wp=`#if defined( USE_POINTS_UV )
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
#endif`,Ap=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pp=`#ifdef USE_MORPHNORMALS
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
#endif`,Ip=`#ifdef USE_MORPHTARGETS
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
#endif`,Lp=`#ifdef USE_MORPHTARGETS
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
#endif`,Dp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Up=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Op=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bp=`#ifdef USE_NORMALMAP
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
#endif`,kp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$p=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,em=`float getShadowMask() {
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
}`,tm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nm=`#ifdef USE_SKINNING
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
#endif`,im=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sm=`#ifdef USE_SKINNING
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
#endif`,rm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,am=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,om=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cm=`#ifdef USE_TRANSMISSION
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
#endif`,hm=`#ifdef USE_TRANSMISSION
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
#endif`,um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,mm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gm=`uniform sampler2D t2D;
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
}`,xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ym=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mm=`#include <common>
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
}`,bm=`#if DEPTH_PACKING == 3200
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
}`,Sm=`#define DISTANCE
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
}`,Em=`#define DISTANCE
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
}`,Tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Am=`uniform float scale;
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
}`,Rm=`uniform vec3 diffuse;
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
}`,Cm=`#include <common>
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
}`,Pm=`uniform vec3 diffuse;
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
}`,Im=`#define LAMBERT
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
}`,Lm=`#define LAMBERT
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
}`,Dm=`#define MATCAP
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
}`,Um=`#define MATCAP
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
}`,Nm=`#define NORMAL
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
}`,Om=`#define NORMAL
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
}`,Fm=`#define PHONG
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
}`,Bm=`#define PHONG
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
}`,km=`#define STANDARD
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
}`,Hm=`#define STANDARD
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
}`,zm=`#define TOON
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
}`,Vm=`#define TOON
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
}`,Gm=`uniform float size;
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
}`,Wm=`uniform vec3 diffuse;
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
}`,Xm=`#include <common>
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
}`,qm=`uniform vec3 color;
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
}`,Ym=`uniform float rotation;
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
}`,$m=`uniform vec3 diffuse;
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
}`,Rt={alphahash_fragment:gf,alphahash_pars_fragment:xf,alphamap_fragment:yf,alphamap_pars_fragment:_f,alphatest_fragment:vf,alphatest_pars_fragment:Mf,aomap_fragment:bf,aomap_pars_fragment:Sf,batching_pars_vertex:Ef,batching_vertex:Tf,begin_vertex:wf,beginnormal_vertex:Af,bsdfs:Rf,iridescence_fragment:Cf,bumpmap_pars_fragment:Pf,clipping_planes_fragment:If,clipping_planes_pars_fragment:Lf,clipping_planes_pars_vertex:Df,clipping_planes_vertex:Uf,color_fragment:Nf,color_pars_fragment:Of,color_pars_vertex:Ff,color_vertex:Bf,common:kf,cube_uv_reflection_fragment:Hf,defaultnormal_vertex:zf,displacementmap_pars_vertex:Vf,displacementmap_vertex:Gf,emissivemap_fragment:Wf,emissivemap_pars_fragment:Xf,colorspace_fragment:qf,colorspace_pars_fragment:Yf,envmap_fragment:$f,envmap_common_pars_fragment:Zf,envmap_pars_fragment:Kf,envmap_pars_vertex:Jf,envmap_physical_pars_fragment:cp,envmap_vertex:jf,fog_vertex:Qf,fog_pars_vertex:ep,fog_fragment:tp,fog_pars_fragment:np,gradientmap_pars_fragment:ip,lightmap_fragment:sp,lightmap_pars_fragment:rp,lights_lambert_fragment:ap,lights_lambert_pars_fragment:op,lights_pars_begin:lp,lights_toon_fragment:hp,lights_toon_pars_fragment:up,lights_phong_fragment:dp,lights_phong_pars_fragment:fp,lights_physical_fragment:pp,lights_physical_pars_fragment:mp,lights_fragment_begin:gp,lights_fragment_maps:xp,lights_fragment_end:yp,logdepthbuf_fragment:_p,logdepthbuf_pars_fragment:vp,logdepthbuf_pars_vertex:Mp,logdepthbuf_vertex:bp,map_fragment:Sp,map_pars_fragment:Ep,map_particle_fragment:Tp,map_particle_pars_fragment:wp,metalnessmap_fragment:Ap,metalnessmap_pars_fragment:Rp,morphcolor_vertex:Cp,morphnormal_vertex:Pp,morphtarget_pars_vertex:Ip,morphtarget_vertex:Lp,normal_fragment_begin:Dp,normal_fragment_maps:Up,normal_pars_fragment:Np,normal_pars_vertex:Op,normal_vertex:Fp,normalmap_pars_fragment:Bp,clearcoat_normal_fragment_begin:kp,clearcoat_normal_fragment_maps:Hp,clearcoat_pars_fragment:zp,iridescence_pars_fragment:Vp,opaque_fragment:Gp,packing:Wp,premultiplied_alpha_fragment:Xp,project_vertex:qp,dithering_fragment:Yp,dithering_pars_fragment:$p,roughnessmap_fragment:Zp,roughnessmap_pars_fragment:Kp,shadowmap_pars_fragment:Jp,shadowmap_pars_vertex:jp,shadowmap_vertex:Qp,shadowmask_pars_fragment:em,skinbase_vertex:tm,skinning_pars_vertex:nm,skinning_vertex:im,skinnormal_vertex:sm,specularmap_fragment:rm,specularmap_pars_fragment:am,tonemapping_fragment:om,tonemapping_pars_fragment:lm,transmission_fragment:cm,transmission_pars_fragment:hm,uv_pars_fragment:um,uv_pars_vertex:dm,uv_vertex:fm,worldpos_vertex:pm,background_vert:mm,background_frag:gm,backgroundCube_vert:xm,backgroundCube_frag:ym,cube_vert:_m,cube_frag:vm,depth_vert:Mm,depth_frag:bm,distanceRGBA_vert:Sm,distanceRGBA_frag:Em,equirect_vert:Tm,equirect_frag:wm,linedashed_vert:Am,linedashed_frag:Rm,meshbasic_vert:Cm,meshbasic_frag:Pm,meshlambert_vert:Im,meshlambert_frag:Lm,meshmatcap_vert:Dm,meshmatcap_frag:Um,meshnormal_vert:Nm,meshnormal_frag:Om,meshphong_vert:Fm,meshphong_frag:Bm,meshphysical_vert:km,meshphysical_frag:Hm,meshtoon_vert:zm,meshtoon_frag:Vm,points_vert:Gm,points_frag:Wm,shadow_vert:Xm,shadow_frag:qm,sprite_vert:Ym,sprite_frag:$m},Ce={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}}},Mi={basic:{uniforms:Hn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:Rt.meshbasic_vert,fragmentShader:Rt.meshbasic_frag},lambert:{uniforms:Hn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new _t(0)}}]),vertexShader:Rt.meshlambert_vert,fragmentShader:Rt.meshlambert_frag},phong:{uniforms:Hn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30}}]),vertexShader:Rt.meshphong_vert,fragmentShader:Rt.meshphong_frag},standard:{uniforms:Hn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag},toon:{uniforms:Hn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new _t(0)}}]),vertexShader:Rt.meshtoon_vert,fragmentShader:Rt.meshtoon_frag},matcap:{uniforms:Hn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:Rt.meshmatcap_vert,fragmentShader:Rt.meshmatcap_frag},points:{uniforms:Hn([Ce.points,Ce.fog]),vertexShader:Rt.points_vert,fragmentShader:Rt.points_frag},dashed:{uniforms:Hn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Rt.linedashed_vert,fragmentShader:Rt.linedashed_frag},depth:{uniforms:Hn([Ce.common,Ce.displacementmap]),vertexShader:Rt.depth_vert,fragmentShader:Rt.depth_frag},normal:{uniforms:Hn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:Rt.meshnormal_vert,fragmentShader:Rt.meshnormal_frag},sprite:{uniforms:Hn([Ce.sprite,Ce.fog]),vertexShader:Rt.sprite_vert,fragmentShader:Rt.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Rt.background_vert,fragmentShader:Rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Rt.backgroundCube_vert,fragmentShader:Rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Rt.cube_vert,fragmentShader:Rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Rt.equirect_vert,fragmentShader:Rt.equirect_frag},distanceRGBA:{uniforms:Hn([Ce.common,Ce.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Rt.distanceRGBA_vert,fragmentShader:Rt.distanceRGBA_frag},shadow:{uniforms:Hn([Ce.lights,Ce.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:Rt.shadow_vert,fragmentShader:Rt.shadow_frag}};Mi.physical={uniforms:Hn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new It}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag};var ca={r:0,b:0,g:0};function Zm(i,e,t,n,s,r,a){let o=new _t(0),l=r===!0?0:1,c,u,f=null,d=0,h=null;function y(g,p){let M=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?t:e).get(_)),_===null?v(o,l):_&&_.isColor&&(v(_,1),M=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===$a)?(u===void 0&&(u=new je(new Tn(1,1,1),new Li({name:"BackgroundCubeMaterial",uniforms:Ks(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(O,I,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=Gt.getTransfer(_.colorSpace)!==Qt,(f!==_||d!==_.version||h!==i.toneMapping)&&(u.material.needsUpdate=!0,f=_,d=_.version,h=i.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new je(new Di(2,2),new Li({name:"BackgroundMaterial",uniforms:Ks(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=Gt.getTransfer(_.colorSpace)!==Qt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||d!==_.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,f=_,d=_.version,h=i.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function v(g,p){g.getRGB(ca,cu(i)),n.buffers.color.setClear(ca.r,ca.g,ca.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(g,p=1){o.set(g),l=p,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,v(o,l)},render:y}}function Km(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=g(null),c=l,u=!1;function f(P,V,D,ae,Y){let j=!1;if(a){let re=v(ae,D,V);c!==re&&(c=re,h(c.object)),j=p(P,ae,D,Y),j&&M(P,ae,D,Y)}else{let re=V.wireframe===!0;(c.geometry!==ae.id||c.program!==D.id||c.wireframe!==re)&&(c.geometry=ae.id,c.program=D.id,c.wireframe=re,j=!0)}Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),(j||u)&&(u=!1,$(P,V,D,ae),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function h(P){return n.isWebGL2?i.bindVertexArray(P):r.bindVertexArrayOES(P)}function y(P){return n.isWebGL2?i.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function v(P,V,D){let ae=D.wireframe===!0,Y=o[P.id];Y===void 0&&(Y={},o[P.id]=Y);let j=Y[V.id];j===void 0&&(j={},Y[V.id]=j);let re=j[ae];return re===void 0&&(re=g(d()),j[ae]=re),re}function g(P){let V=[],D=[],ae=[];for(let Y=0;Y<s;Y++)V[Y]=0,D[Y]=0,ae[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:D,attributeDivisors:ae,object:P,attributes:{},index:null}}function p(P,V,D,ae){let Y=c.attributes,j=V.attributes,re=0,ue=D.getAttributes();for(let fe in ue)if(ue[fe].location>=0){let me=Y[fe],Pe=j[fe];if(Pe===void 0&&(fe==="instanceMatrix"&&P.instanceMatrix&&(Pe=P.instanceMatrix),fe==="instanceColor"&&P.instanceColor&&(Pe=P.instanceColor)),me===void 0||me.attribute!==Pe||Pe&&me.data!==Pe.data)return!0;re++}return c.attributesNum!==re||c.index!==ae}function M(P,V,D,ae){let Y={},j=V.attributes,re=0,ue=D.getAttributes();for(let fe in ue)if(ue[fe].location>=0){let me=j[fe];me===void 0&&(fe==="instanceMatrix"&&P.instanceMatrix&&(me=P.instanceMatrix),fe==="instanceColor"&&P.instanceColor&&(me=P.instanceColor));let Pe={};Pe.attribute=me,me&&me.data&&(Pe.data=me.data),Y[fe]=Pe,re++}c.attributes=Y,c.attributesNum=re,c.index=ae}function _(){let P=c.newAttributes;for(let V=0,D=P.length;V<D;V++)P[V]=0}function T(P){O(P,0)}function O(P,V){let D=c.newAttributes,ae=c.enabledAttributes,Y=c.attributeDivisors;D[P]=1,ae[P]===0&&(i.enableVertexAttribArray(P),ae[P]=1),Y[P]!==V&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,V),Y[P]=V)}function I(){let P=c.newAttributes,V=c.enabledAttributes;for(let D=0,ae=V.length;D<ae;D++)V[D]!==P[D]&&(i.disableVertexAttribArray(D),V[D]=0)}function L(P,V,D,ae,Y,j,re){re===!0?i.vertexAttribIPointer(P,V,D,Y,j):i.vertexAttribPointer(P,V,D,ae,Y,j)}function $(P,V,D,ae){if(n.isWebGL2===!1&&(P.isInstancedMesh||ae.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();let Y=ae.attributes,j=D.getAttributes(),re=V.defaultAttributeValues;for(let ue in j){let fe=j[ue];if(fe.location>=0){let te=Y[ue];if(te===void 0&&(ue==="instanceMatrix"&&P.instanceMatrix&&(te=P.instanceMatrix),ue==="instanceColor"&&P.instanceColor&&(te=P.instanceColor)),te!==void 0){let me=te.normalized,Pe=te.itemSize,We=t.get(te);if(We===void 0)continue;let Xe=We.buffer,ht=We.type,mt=We.bytesPerElement,qe=n.isWebGL2===!0&&(ht===i.INT||ht===i.UNSIGNED_INT||te.gpuType===Jh);if(te.isInterleavedBufferAttribute){let Ct=te.data,Z=Ct.stride,rn=te.offset;if(Ct.isInstancedInterleavedBuffer){for(let Qe=0;Qe<fe.locationSize;Qe++)O(fe.location+Qe,Ct.meshPerAttribute);P.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=Ct.meshPerAttribute*Ct.count)}else for(let Qe=0;Qe<fe.locationSize;Qe++)T(fe.location+Qe);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let Qe=0;Qe<fe.locationSize;Qe++)L(fe.location+Qe,Pe/fe.locationSize,ht,me,Z*mt,(rn+Pe/fe.locationSize*Qe)*mt,qe)}else{if(te.isInstancedBufferAttribute){for(let Ct=0;Ct<fe.locationSize;Ct++)O(fe.location+Ct,te.meshPerAttribute);P.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Ct=0;Ct<fe.locationSize;Ct++)T(fe.location+Ct);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let Ct=0;Ct<fe.locationSize;Ct++)L(fe.location+Ct,Pe/fe.locationSize,ht,me,Pe*mt,Pe/fe.locationSize*Ct*mt,qe)}}else if(re!==void 0){let me=re[ue];if(me!==void 0)switch(me.length){case 2:i.vertexAttrib2fv(fe.location,me);break;case 3:i.vertexAttrib3fv(fe.location,me);break;case 4:i.vertexAttrib4fv(fe.location,me);break;default:i.vertexAttrib1fv(fe.location,me)}}}}I()}function S(){B();for(let P in o){let V=o[P];for(let D in V){let ae=V[D];for(let Y in ae)y(ae[Y].object),delete ae[Y];delete V[D]}delete o[P]}}function A(P){if(o[P.id]===void 0)return;let V=o[P.id];for(let D in V){let ae=V[D];for(let Y in ae)y(ae[Y].object),delete ae[Y];delete V[D]}delete o[P.id]}function N(P){for(let V in o){let D=o[V];if(D[P.id]===void 0)continue;let ae=D[P.id];for(let Y in ae)y(ae[Y].object),delete ae[Y];delete D[P.id]}}function B(){J(),u=!0,c!==l&&(c=l,h(c.object))}function J(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:B,resetDefaultState:J,dispose:S,releaseStatesOfGeometry:A,releaseStatesOfProgram:N,initAttributes:_,enableAttribute:T,disableUnusedAttributes:I}}function Jm(i,e,t,n){let s=n.isWebGL2,r;function a(u){r=u}function o(u,f){i.drawArrays(r,u,f),t.update(f,r,1)}function l(u,f,d){if(d===0)return;let h,y;if(s)h=i,y="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[y](r,u,f,d),t.update(f,r,d)}function c(u,f,d){if(d===0)return;let h=e.get("WEBGL_multi_draw");if(h===null)for(let y=0;y<d;y++)this.render(u[y],f[y]);else{h.multiDrawArraysWEBGL(r,u,0,f,0,d);let y=0;for(let v=0;v<d;v++)y+=f[v];t.update(y,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function jm(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let L=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,T=a||e.has("OES_texture_float"),O=_&&T,I=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:h,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:M,vertexTextures:_,floatFragmentTextures:T,floatVertexTextures:O,maxSamples:I}}function Qm(i){let e=this,t=null,n=0,s=!1,r=!1,a=new fi,o=new It,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let h=f.length!==0||d||n!==0||s;return s=d,n=f.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){let y=f.clippingPlanes,v=f.clipIntersection,g=f.clipShadows,p=i.get(f);if(!s||y===null||y.length===0||r&&!g)r?u(null):c();else{let M=r?0:n,_=M*4,T=p.clippingState||null;l.value=T,T=u(y,d,_,h);for(let O=0;O!==_;++O)T[O]=t[O];p.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,h,y){let v=f!==null?f.length:0,g=null;if(v!==0){if(g=l.value,y!==!0||g===null){let p=h+v*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,T=h;_!==v;++_,T+=4)a.copy(f[_]).applyMatrix4(M,o),a.normal.toArray(g,T),g[T+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function eg(i){let e=new WeakMap;function t(a,o){return o===el?a.mapping=qs:o===tl&&(a.mapping=Ys),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===el||o===tl)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new cl(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var La=class extends Pa{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Hs=4,ph=[.125,.215,.35,.446,.526,.582],hs=20,Vo=new La,mh=new _t,Go=null,Wo=0,Xo=0,ls=(1+Math.sqrt(5))/2,Bs=1/ls,gh=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,ls,Bs),new F(0,ls,-Bs),new F(Bs,0,ls),new F(-Bs,0,ls),new F(ls,Bs,0),new F(-ls,Bs,0)],Da=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Go=this._renderer.getRenderTarget(),Wo=this._renderer.getActiveCubeFace(),Xo=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_h(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Go,Wo,Xo),e.scissorTest=!1,ha(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qs||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Go=this._renderer.getRenderTarget(),Wo=this._renderer.getActiveCubeFace(),Xo=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ii,minFilter:ii,generateMipmaps:!1,type:Sr,format:mi,colorSpace:Pi,depthBuffer:!1},s=xh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xh(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tg(r)),this._blurMaterial=ng(r,e,t)}return s}_compileMaterial(e){let t=new je(this._lodPlanes[0],e);this._renderer.compile(t,Vo)}_sceneToCubeUV(e,t,n,s){let o=new Vn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(mh),u.toneMapping=Yi,u.autoClear=!1;let h=new xn({name:"PMREM.Background",side:$n,depthWrite:!1,depthTest:!1}),y=new je(new Tn,h),v=!1,g=e.background;g?g.isColor&&(h.color.copy(g),e.background=null,v=!0):(h.color.copy(mh),v=!0);for(let p=0;p<6;p++){let M=p%3;M===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):M===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let _=this._cubeSize;ha(s,M*_,p>2?_:0,_,_),u.setRenderTarget(s),v&&u.render(y,o),u.render(e,o)}y.geometry.dispose(),y.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===qs||e.mapping===Ys;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=_h()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new je(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;ha(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Vo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=gh[(s-1)%gh.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,f=new je(this._lodPlanes[s],c),d=c.uniforms,h=this._sizeLods[n]-1,y=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*hs-1),v=r/y,g=isFinite(r)?1+Math.floor(u*v):hs;g>hs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${hs}`);let p=[],M=0;for(let L=0;L<hs;++L){let $=L/v,S=Math.exp(-$*$/2);p.push(S),L===0?M+=S:L<g&&(M+=2*S)}for(let L=0;L<p.length;L++)p[L]=p[L]/M;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:_}=this;d.dTheta.value=y,d.mipInt.value=_-n;let T=this._sizeLods[s],O=3*T*(s>_-Hs?s-_+Hs:0),I=4*(this._cubeSize-T);ha(t,O,I,3*T,2*T),l.setRenderTarget(t),l.render(f,Vo)}};function tg(i){let e=[],t=[],n=[],s=i,r=i-Hs+1+ph.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Hs?l=ph[a-i+Hs-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,y=6,v=3,g=2,p=1,M=new Float32Array(v*y*h),_=new Float32Array(g*y*h),T=new Float32Array(p*y*h);for(let I=0;I<h;I++){let L=I%3*2/3-1,$=I>2?0:-1,S=[L,$,0,L+2/3,$,0,L+2/3,$+1,0,L,$,0,L+2/3,$+1,0,L,$+1,0];M.set(S,v*y*I),_.set(d,g*y*I);let A=[I,I,I,I,I,I];T.set(A,p*y*I)}let O=new Kn;O.setAttribute("position",new Zn(M,v)),O.setAttribute("uv",new Zn(_,g)),O.setAttribute("faceIndex",new Zn(T,p)),e.push(O),s>Hs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function xh(i,e,t){let n=new Ii(i,e,t);return n.texture.mapping=$a,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ha(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function ng(i,e,t){let n=new Float32Array(hs),s=new F(0,1,0);return new Li({name:"SphericalGaussianBlur",defines:{n:hs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:$l(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function yh(){return new Li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$l(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function _h(){return new Li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function $l(){return`

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
	`}function ig(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===el||l===tl,u=l===qs||l===Ys;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new Da(i)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{let f=o.image;if(c&&f&&f.height>0||u&&f&&s(f)){t===null&&(t=new Da(i));let d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function sg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function rg(i,e,t,n){let s={},r=new WeakMap;function a(f){let d=f.target;d.index!==null&&e.remove(d.index);for(let y in d.attributes)e.remove(d.attributes[y]);for(let y in d.morphAttributes){let v=d.morphAttributes[y];for(let g=0,p=v.length;g<p;g++)e.remove(v[g])}d.removeEventListener("dispose",a),delete s[d.id];let h=r.get(d);h&&(e.remove(h),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(f){let d=f.attributes;for(let y in d)e.update(d[y],i.ARRAY_BUFFER);let h=f.morphAttributes;for(let y in h){let v=h[y];for(let g=0,p=v.length;g<p;g++)e.update(v[g],i.ARRAY_BUFFER)}}function c(f){let d=[],h=f.index,y=f.attributes.position,v=0;if(h!==null){let M=h.array;v=h.version;for(let _=0,T=M.length;_<T;_+=3){let O=M[_+0],I=M[_+1],L=M[_+2];d.push(O,I,I,L,L,O)}}else if(y!==void 0){let M=y.array;v=y.version;for(let _=0,T=M.length/3-1;_<T;_+=3){let O=_+0,I=_+1,L=_+2;d.push(O,I,I,L,L,O)}}else return;let g=new(ou(d)?Ca:Ra)(d,1);g.version=v;let p=r.get(f);p&&e.remove(p),r.set(f,g)}function u(f){let d=r.get(f);if(d){let h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function ag(i,e,t,n){let s=n.isWebGL2,r;function a(h){r=h}let o,l;function c(h){o=h.type,l=h.bytesPerElement}function u(h,y){i.drawElements(r,y,o,h*l),t.update(y,r,1)}function f(h,y,v){if(v===0)return;let g,p;if(s)g=i,p="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[p](r,y,o,h*l,v),t.update(y,r,v)}function d(h,y,v){if(v===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<v;p++)this.render(h[p]/l,y[p]);else{g.multiDrawElementsWEBGL(r,y,0,o,h,0,v);let p=0;for(let M=0;M<v;M++)p+=y[M];t.update(p,r,1)}}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=d}function og(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function lg(i,e){return i[0]-e[0]}function cg(i,e){return Math.abs(e[1])-Math.abs(i[1])}function hg(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,a=new Ln,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f){let d=c.morphTargetInfluences;if(e.isWebGL2===!0){let h=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,y=h!==void 0?h.length:0,v=r.get(u);if(v===void 0||v.count!==y){let P=function(){B.dispose(),r.delete(u),u.removeEventListener("dispose",P)};v!==void 0&&v.texture.dispose();let M=u.morphAttributes.position!==void 0,_=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,O=u.morphAttributes.position||[],I=u.morphAttributes.normal||[],L=u.morphAttributes.color||[],$=0;M===!0&&($=1),_===!0&&($=2),T===!0&&($=3);let S=u.attributes.position.count*$,A=1;S>e.maxTextureSize&&(A=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let N=new Float32Array(S*A*4*y),B=new wa(N,S,A,y);B.type=Xi,B.needsUpdate=!0;let J=$*4;for(let V=0;V<y;V++){let D=O[V],ae=I[V],Y=L[V],j=S*A*4*V;for(let re=0;re<D.count;re++){let ue=re*J;M===!0&&(a.fromBufferAttribute(D,re),N[j+ue+0]=a.x,N[j+ue+1]=a.y,N[j+ue+2]=a.z,N[j+ue+3]=0),_===!0&&(a.fromBufferAttribute(ae,re),N[j+ue+4]=a.x,N[j+ue+5]=a.y,N[j+ue+6]=a.z,N[j+ue+7]=0),T===!0&&(a.fromBufferAttribute(Y,re),N[j+ue+8]=a.x,N[j+ue+9]=a.y,N[j+ue+10]=a.z,N[j+ue+11]=Y.itemSize===4?a.w:1)}}v={count:y,texture:B,size:new Be(S,A)},r.set(u,v),u.addEventListener("dispose",P)}let g=0;for(let M=0;M<d.length;M++)g+=d[M];let p=u.morphTargetsRelative?1:1-g;f.getUniforms().setValue(i,"morphTargetBaseInfluence",p),f.getUniforms().setValue(i,"morphTargetInfluences",d),f.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}else{let h=d===void 0?0:d.length,y=n[u.id];if(y===void 0||y.length!==h){y=[];for(let _=0;_<h;_++)y[_]=[_,0];n[u.id]=y}for(let _=0;_<h;_++){let T=y[_];T[0]=_,T[1]=d[_]}y.sort(cg);for(let _=0;_<8;_++)_<h&&y[_][1]?(o[_][0]=y[_][0],o[_][1]=y[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(lg);let v=u.morphAttributes.position,g=u.morphAttributes.normal,p=0;for(let _=0;_<8;_++){let T=o[_],O=T[0],I=T[1];O!==Number.MAX_SAFE_INTEGER&&I?(v&&u.getAttribute("morphTarget"+_)!==v[O]&&u.setAttribute("morphTarget"+_,v[O]),g&&u.getAttribute("morphNormal"+_)!==g[O]&&u.setAttribute("morphNormal"+_,g[O]),s[_]=I,p+=I):(v&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),g&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),s[_]=0)}let M=u.morphTargetsRelative?1:1-p;f.getUniforms().setValue(i,"morphTargetBaseInfluence",M),f.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function ug(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Ua=class extends ai{constructor(e,t,n,s,r,a,o,l,c,u){if(u=u!==void 0?u:ds,u!==ds&&u!==$s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ds&&(n=Wi),n===void 0&&u===$s&&(n=us),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:zn,this.minFilter=l!==void 0?l:zn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},uu=new ai,du=new Ua(1,1);du.compareFunction=au;var fu=new wa,pu=new ol,mu=new Ia,vh=[],Mh=[],bh=new Float32Array(16),Sh=new Float32Array(9),Eh=new Float32Array(4);function tr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=vh[s];if(r===void 0&&(r=new Float32Array(s),vh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function wn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function An(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ka(i,e){let t=Mh[e];t===void 0&&(t=new Int32Array(e),Mh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function dg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function fg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wn(t,e))return;i.uniform2fv(this.addr,e),An(t,e)}}function pg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wn(t,e))return;i.uniform3fv(this.addr,e),An(t,e)}}function mg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wn(t,e))return;i.uniform4fv(this.addr,e),An(t,e)}}function gg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(wn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),An(t,e)}else{if(wn(t,n))return;Eh.set(n),i.uniformMatrix2fv(this.addr,!1,Eh),An(t,n)}}function xg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(wn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),An(t,e)}else{if(wn(t,n))return;Sh.set(n),i.uniformMatrix3fv(this.addr,!1,Sh),An(t,n)}}function yg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(wn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),An(t,e)}else{if(wn(t,n))return;bh.set(n),i.uniformMatrix4fv(this.addr,!1,bh),An(t,n)}}function _g(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function vg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wn(t,e))return;i.uniform2iv(this.addr,e),An(t,e)}}function Mg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wn(t,e))return;i.uniform3iv(this.addr,e),An(t,e)}}function bg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wn(t,e))return;i.uniform4iv(this.addr,e),An(t,e)}}function Sg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Eg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wn(t,e))return;i.uniform2uiv(this.addr,e),An(t,e)}}function Tg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wn(t,e))return;i.uniform3uiv(this.addr,e),An(t,e)}}function wg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wn(t,e))return;i.uniform4uiv(this.addr,e),An(t,e)}}function Ag(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?du:uu;t.setTexture2D(e||r,s)}function Rg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||pu,s)}function Cg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||mu,s)}function Pg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||fu,s)}function Ig(i){switch(i){case 5126:return dg;case 35664:return fg;case 35665:return pg;case 35666:return mg;case 35674:return gg;case 35675:return xg;case 35676:return yg;case 5124:case 35670:return _g;case 35667:case 35671:return vg;case 35668:case 35672:return Mg;case 35669:case 35673:return bg;case 5125:return Sg;case 36294:return Eg;case 36295:return Tg;case 36296:return wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ag;case 35679:case 36299:case 36307:return Rg;case 35680:case 36300:case 36308:case 36293:return Cg;case 36289:case 36303:case 36311:case 36292:return Pg}}function Lg(i,e){i.uniform1fv(this.addr,e)}function Dg(i,e){let t=tr(e,this.size,2);i.uniform2fv(this.addr,t)}function Ug(i,e){let t=tr(e,this.size,3);i.uniform3fv(this.addr,t)}function Ng(i,e){let t=tr(e,this.size,4);i.uniform4fv(this.addr,t)}function Og(i,e){let t=tr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Fg(i,e){let t=tr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Bg(i,e){let t=tr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function kg(i,e){i.uniform1iv(this.addr,e)}function Hg(i,e){i.uniform2iv(this.addr,e)}function zg(i,e){i.uniform3iv(this.addr,e)}function Vg(i,e){i.uniform4iv(this.addr,e)}function Gg(i,e){i.uniform1uiv(this.addr,e)}function Wg(i,e){i.uniform2uiv(this.addr,e)}function Xg(i,e){i.uniform3uiv(this.addr,e)}function qg(i,e){i.uniform4uiv(this.addr,e)}function Yg(i,e,t){let n=this.cache,s=e.length,r=Ka(t,s);wn(n,r)||(i.uniform1iv(this.addr,r),An(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||uu,r[a])}function $g(i,e,t){let n=this.cache,s=e.length,r=Ka(t,s);wn(n,r)||(i.uniform1iv(this.addr,r),An(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||pu,r[a])}function Zg(i,e,t){let n=this.cache,s=e.length,r=Ka(t,s);wn(n,r)||(i.uniform1iv(this.addr,r),An(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||mu,r[a])}function Kg(i,e,t){let n=this.cache,s=e.length,r=Ka(t,s);wn(n,r)||(i.uniform1iv(this.addr,r),An(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||fu,r[a])}function Jg(i){switch(i){case 5126:return Lg;case 35664:return Dg;case 35665:return Ug;case 35666:return Ng;case 35674:return Og;case 35675:return Fg;case 35676:return Bg;case 5124:case 35670:return kg;case 35667:case 35671:return Hg;case 35668:case 35672:return zg;case 35669:case 35673:return Vg;case 5125:return Gg;case 36294:return Wg;case 36295:return Xg;case 36296:return qg;case 35678:case 36198:case 36298:case 36306:case 35682:return Yg;case 35679:case 36299:case 36307:return $g;case 35680:case 36300:case 36308:case 36293:return Zg;case 36289:case 36303:case 36311:case 36292:return Kg}}var hl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ig(t.type)}},ul=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Jg(t.type)}},dl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},qo=/(\w+)(\])?(\[|\.)?/g;function Th(i,e){i.seq.push(e),i.map[e.id]=e}function jg(i,e,t){let n=i.name,s=n.length;for(qo.lastIndex=0;;){let r=qo.exec(n),a=qo.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Th(t,c===void 0?new hl(o,i,e):new ul(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new dl(o),Th(t,f)),t=f}}}var Xs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);jg(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function wh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Qg=37297,e0=0;function t0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function n0(i){let e=Gt.getPrimaries(Gt.workingColorSpace),t=Gt.getPrimaries(i),n;switch(e===t?n="":e===Ma&&t===va?n="LinearDisplayP3ToLinearSRGB":e===va&&t===Ma&&(n="LinearSRGBToLinearDisplayP3"),i){case Pi:case Za:return[n,"LinearTransferOETF"];case Dn:case Yl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ah(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+t0(i.getShaderSource(e),a)}else return s}function i0(i,e){let t=n0(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function s0(i,e){let t;switch(e){case Md:t="Linear";break;case bd:t="Reinhard";break;case Sd:t="OptimizedCineon";break;case Ed:t="ACESFilmic";break;case wd:t="AgX";break;case Td:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function r0(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(zs).join(`
`)}function a0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(zs).join(`
`)}function o0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function l0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function zs(i){return i!==""}function Rh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ch(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var c0=/^[ \t]*#include +<([\w\d./]+)>/gm;function fl(i){return i.replace(c0,u0)}var h0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function u0(i,e){let t=Rt[e];if(t===void 0){let n=h0.get(e);if(n!==void 0)t=Rt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return fl(t)}var d0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ph(i){return i.replace(d0,f0)}function f0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ih(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function p0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===$h?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Xl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ri&&(e="SHADOWMAP_TYPE_VSM"),e}function m0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case qs:case Ys:e="ENVMAP_TYPE_CUBE";break;case $a:e="ENVMAP_TYPE_CUBE_UV";break}return e}function g0(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ys:e="ENVMAP_MODE_REFRACTION";break}return e}function x0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Zh:e="ENVMAP_BLENDING_MULTIPLY";break;case _d:e="ENVMAP_BLENDING_MIX";break;case vd:e="ENVMAP_BLENDING_ADD";break}return e}function y0(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function _0(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=p0(t),c=m0(t),u=g0(t),f=x0(t),d=y0(t),h=t.isWebGL2?"":r0(t),y=a0(t),v=o0(r),g=s.createProgram(),p,M,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(zs).join(`
`),p.length>0&&(p+=`
`),M=[h,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(zs).join(`
`),M.length>0&&(M+=`
`)):(p=[Ih(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zs).join(`
`),M=[h,Ih(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yi?"#define TONE_MAPPING":"",t.toneMapping!==Yi?Rt.tonemapping_pars_fragment:"",t.toneMapping!==Yi?s0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Rt.colorspace_pars_fragment,i0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zs).join(`
`)),a=fl(a),a=Rh(a,t),a=Ch(a,t),o=fl(o),o=Rh(o,t),o=Ch(o,t),a=Ph(a),o=Ph(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[y,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Kc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);let T=_+p+a,O=_+M+o,I=wh(s,s.VERTEX_SHADER,T),L=wh(s,s.FRAGMENT_SHADER,O);s.attachShader(g,I),s.attachShader(g,L),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function $(B){if(i.debug.checkShaderErrors){let J=s.getProgramInfoLog(g).trim(),P=s.getShaderInfoLog(I).trim(),V=s.getShaderInfoLog(L).trim(),D=!0,ae=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(D=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,I,L);else{let Y=Ah(s,I,"vertex"),j=Ah(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Program Info Log: `+J+`
`+Y+`
`+j)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(P===""||V==="")&&(ae=!1);ae&&(B.diagnostics={runnable:D,programLog:J,vertexShader:{log:P,prefix:p},fragmentShader:{log:V,prefix:M}})}s.deleteShader(I),s.deleteShader(L),S=new Xs(s,g),A=l0(s,g)}let S;this.getUniforms=function(){return S===void 0&&$(this),S};let A;this.getAttributes=function(){return A===void 0&&$(this),A};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(g,Qg)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=e0++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=I,this.fragmentShader=L,this}var v0=0,pl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ml(e),t.set(e,n)),n}},ml=class{constructor(e){this.id=v0++,this.code=e,this.usedTimes=0}};function M0(i,e,t,n,s,r,a){let o=new Tr,l=new pl,c=[],u=s.isWebGL2,f=s.logarithmicDepthBuffer,d=s.vertexTextures,h=s.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return S===0?"uv":`uv${S}`}function g(S,A,N,B,J){let P=B.fog,V=J.geometry,D=S.isMeshStandardMaterial?B.environment:null,ae=(S.isMeshStandardMaterial?t:e).get(S.envMap||D),Y=ae&&ae.mapping===$a?ae.image.height:null,j=y[S.type];S.precision!==null&&(h=s.getMaxPrecision(S.precision),h!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",h,"instead."));let re=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ue=re!==void 0?re.length:0,fe=0;V.morphAttributes.position!==void 0&&(fe=1),V.morphAttributes.normal!==void 0&&(fe=2),V.morphAttributes.color!==void 0&&(fe=3);let te,me,Pe,We;if(j){let wt=Mi[j];te=wt.vertexShader,me=wt.fragmentShader}else te=S.vertexShader,me=S.fragmentShader,l.update(S),Pe=l.getVertexShaderID(S),We=l.getFragmentShaderID(S);let Xe=i.getRenderTarget(),ht=J.isInstancedMesh===!0,mt=J.isBatchedMesh===!0,qe=!!S.map,Ct=!!S.matcap,Z=!!ae,rn=!!S.aoMap,Qe=!!S.lightMap,lt=!!S.bumpMap,$e=!!S.normalMap,Yt=!!S.displacementMap,xt=!!S.emissiveMap,C=!!S.metalnessMap,b=!!S.roughnessMap,K=S.anisotropy>0,Ee=S.clearcoat>0,ye=S.iridescence>0,Te=S.sheen>0,Ke=S.transmission>0,Ie=K&&!!S.anisotropyMap,ke=Ee&&!!S.clearcoatMap,st=Ee&&!!S.clearcoatNormalMap,ut=Ee&&!!S.clearcoatRoughnessMap,ce=ye&&!!S.iridescenceMap,dt=ye&&!!S.iridescenceThicknessMap,it=Te&&!!S.sheenColorMap,pt=Te&&!!S.sheenRoughnessMap,Je=!!S.specularMap,Fe=!!S.specularColorMap,et=!!S.specularIntensityMap,Lt=Ke&&!!S.transmissionMap,ze=Ke&&!!S.thicknessMap,Ue=!!S.gradientMap,ge=!!S.alphaMap,U=S.alphaTest>0,Le=!!S.alphaHash,De=!!S.extensions,nt=!!V.attributes.uv1,Ye=!!V.attributes.uv2,Pt=!!V.attributes.uv3,Ut=Yi;return S.toneMapped&&(Xe===null||Xe.isXRRenderTarget===!0)&&(Ut=i.toneMapping),{isWebGL2:u,shaderID:j,shaderType:S.type,shaderName:S.name,vertexShader:te,fragmentShader:me,defines:S.defines,customVertexShaderID:Pe,customFragmentShaderID:We,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:h,batching:mt,instancing:ht,instancingColor:ht&&J.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Xe===null?i.outputColorSpace:Xe.isXRRenderTarget===!0?Xe.texture.colorSpace:Pi,map:qe,matcap:Ct,envMap:Z,envMapMode:Z&&ae.mapping,envMapCubeUVHeight:Y,aoMap:rn,lightMap:Qe,bumpMap:lt,normalMap:$e,displacementMap:d&&Yt,emissiveMap:xt,normalMapObjectSpace:$e&&S.normalMapType===Bd,normalMapTangentSpace:$e&&S.normalMapType===ru,metalnessMap:C,roughnessMap:b,anisotropy:K,anisotropyMap:Ie,clearcoat:Ee,clearcoatMap:ke,clearcoatNormalMap:st,clearcoatRoughnessMap:ut,iridescence:ye,iridescenceMap:ce,iridescenceThicknessMap:dt,sheen:Te,sheenColorMap:it,sheenRoughnessMap:pt,specularMap:Je,specularColorMap:Fe,specularIntensityMap:et,transmission:Ke,transmissionMap:Lt,thicknessMap:ze,gradientMap:Ue,opaque:S.transparent===!1&&S.blending===Gs,alphaMap:ge,alphaTest:U,alphaHash:Le,combine:S.combine,mapUv:qe&&v(S.map.channel),aoMapUv:rn&&v(S.aoMap.channel),lightMapUv:Qe&&v(S.lightMap.channel),bumpMapUv:lt&&v(S.bumpMap.channel),normalMapUv:$e&&v(S.normalMap.channel),displacementMapUv:Yt&&v(S.displacementMap.channel),emissiveMapUv:xt&&v(S.emissiveMap.channel),metalnessMapUv:C&&v(S.metalnessMap.channel),roughnessMapUv:b&&v(S.roughnessMap.channel),anisotropyMapUv:Ie&&v(S.anisotropyMap.channel),clearcoatMapUv:ke&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:st&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:it&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:pt&&v(S.sheenRoughnessMap.channel),specularMapUv:Je&&v(S.specularMap.channel),specularColorMapUv:Fe&&v(S.specularColorMap.channel),specularIntensityMapUv:et&&v(S.specularIntensityMap.channel),transmissionMapUv:Lt&&v(S.transmissionMap.channel),thicknessMapUv:ze&&v(S.thicknessMap.channel),alphaMapUv:ge&&v(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&($e||K),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:nt,vertexUv2s:Ye,vertexUv3s:Pt,pointsUvs:J.isPoints===!0&&!!V.attributes.uv&&(qe||ge),fog:!!P,useFog:S.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:J.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:fe,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ut,useLegacyLights:i._useLegacyLights,decodeVideoTexture:qe&&S.map.isVideoTexture===!0&&Gt.getTransfer(S.map.colorSpace)===Qt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===gn,flipSided:S.side===$n,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:De&&S.extensions.derivatives===!0,extensionFragDepth:De&&S.extensions.fragDepth===!0,extensionDrawBuffers:De&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:De&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:De&&S.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){let A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(let N in S.defines)A.push(N),A.push(S.defines[N]);return S.isRawShaderMaterial===!1&&(M(A,S),_(A,S),A.push(i.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function M(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.numLightProbes),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function _(S,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),A.batching&&o.enable(19),S.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),S.push(o.mask)}function T(S){let A=y[S.type],N;if(A){let B=Mi[A];N=hf.clone(B.uniforms)}else N=S.uniforms;return N}function O(S,A){let N;for(let B=0,J=c.length;B<J;B++){let P=c[B];if(P.cacheKey===A){N=P,++N.usedTimes;break}}return N===void 0&&(N=new _0(i,A,S,r),c.push(N)),N}function I(S){if(--S.usedTimes===0){let A=c.indexOf(S);c[A]=c[c.length-1],c.pop(),S.destroy()}}function L(S){l.remove(S)}function $(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:T,acquireProgram:O,releaseProgram:I,releaseShaderCache:L,programs:c,dispose:$}}function b0(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function S0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Lh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Dh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f,d,h,y,v,g){let p=i[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:h,groupOrder:y,renderOrder:f.renderOrder,z:v,group:g},i[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=h,p.groupOrder=y,p.renderOrder=f.renderOrder,p.z=v,p.group=g),e++,p}function o(f,d,h,y,v,g){let p=a(f,d,h,y,v,g);h.transmission>0?n.push(p):h.transparent===!0?s.push(p):t.push(p)}function l(f,d,h,y,v,g){let p=a(f,d,h,y,v,g);h.transmission>0?n.unshift(p):h.transparent===!0?s.unshift(p):t.unshift(p)}function c(f,d){t.length>1&&t.sort(f||S0),n.length>1&&n.sort(d||Lh),s.length>1&&s.sort(d||Lh)}function u(){for(let f=e,d=i.length;f<d;f++){let h=i[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function E0(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Dh,i.set(n,[a])):s>=r.length?(a=new Dh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function T0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new _t};break;case"SpotLight":t={position:new F,direction:new F,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new _t,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":t={color:new _t,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function w0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var A0=0;function R0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function C0(i,e){let t=new T0,n=w0(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new F);let r=new F,a=new Mn,o=new Mn;function l(u,f){let d=0,h=0,y=0;for(let B=0;B<9;B++)s.probe[B].set(0,0,0);let v=0,g=0,p=0,M=0,_=0,T=0,O=0,I=0,L=0,$=0,S=0;u.sort(R0);let A=f===!0?Math.PI:1;for(let B=0,J=u.length;B<J;B++){let P=u[B],V=P.color,D=P.intensity,ae=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=V.r*D*A,h+=V.g*D*A,y+=V.b*D*A;else if(P.isLightProbe){for(let j=0;j<9;j++)s.probe[j].addScaledVector(P.sh.coefficients[j],D);S++}else if(P.isDirectionalLight){let j=t.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity*A),P.castShadow){let re=P.shadow,ue=n.get(P);ue.shadowBias=re.bias,ue.shadowNormalBias=re.normalBias,ue.shadowRadius=re.radius,ue.shadowMapSize=re.mapSize,s.directionalShadow[v]=ue,s.directionalShadowMap[v]=Y,s.directionalShadowMatrix[v]=P.shadow.matrix,T++}s.directional[v]=j,v++}else if(P.isSpotLight){let j=t.get(P);j.position.setFromMatrixPosition(P.matrixWorld),j.color.copy(V).multiplyScalar(D*A),j.distance=ae,j.coneCos=Math.cos(P.angle),j.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),j.decay=P.decay,s.spot[p]=j;let re=P.shadow;if(P.map&&(s.spotLightMap[L]=P.map,L++,re.updateMatrices(P),P.castShadow&&$++),s.spotLightMatrix[p]=re.matrix,P.castShadow){let ue=n.get(P);ue.shadowBias=re.bias,ue.shadowNormalBias=re.normalBias,ue.shadowRadius=re.radius,ue.shadowMapSize=re.mapSize,s.spotShadow[p]=ue,s.spotShadowMap[p]=Y,I++}p++}else if(P.isRectAreaLight){let j=t.get(P);j.color.copy(V).multiplyScalar(D),j.halfWidth.set(P.width*.5,0,0),j.halfHeight.set(0,P.height*.5,0),s.rectArea[M]=j,M++}else if(P.isPointLight){let j=t.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity*A),j.distance=P.distance,j.decay=P.decay,P.castShadow){let re=P.shadow,ue=n.get(P);ue.shadowBias=re.bias,ue.shadowNormalBias=re.normalBias,ue.shadowRadius=re.radius,ue.shadowMapSize=re.mapSize,ue.shadowCameraNear=re.camera.near,ue.shadowCameraFar=re.camera.far,s.pointShadow[g]=ue,s.pointShadowMap[g]=Y,s.pointShadowMatrix[g]=P.shadow.matrix,O++}s.point[g]=j,g++}else if(P.isHemisphereLight){let j=t.get(P);j.skyColor.copy(P.color).multiplyScalar(D*A),j.groundColor.copy(P.groundColor).multiplyScalar(D*A),s.hemi[_]=j,_++}}M>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ce.LTC_FLOAT_1,s.rectAreaLTC2=Ce.LTC_FLOAT_2):(s.rectAreaLTC1=Ce.LTC_HALF_1,s.rectAreaLTC2=Ce.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ce.LTC_FLOAT_1,s.rectAreaLTC2=Ce.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Ce.LTC_HALF_1,s.rectAreaLTC2=Ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=h,s.ambient[2]=y;let N=s.hash;(N.directionalLength!==v||N.pointLength!==g||N.spotLength!==p||N.rectAreaLength!==M||N.hemiLength!==_||N.numDirectionalShadows!==T||N.numPointShadows!==O||N.numSpotShadows!==I||N.numSpotMaps!==L||N.numLightProbes!==S)&&(s.directional.length=v,s.spot.length=p,s.rectArea.length=M,s.point.length=g,s.hemi.length=_,s.directionalShadow.length=T,s.directionalShadowMap.length=T,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=I,s.spotShadowMap.length=I,s.directionalShadowMatrix.length=T,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=I+L-$,s.spotLightMap.length=L,s.numSpotLightShadowsWithMaps=$,s.numLightProbes=S,N.directionalLength=v,N.pointLength=g,N.spotLength=p,N.rectAreaLength=M,N.hemiLength=_,N.numDirectionalShadows=T,N.numPointShadows=O,N.numSpotShadows=I,N.numSpotMaps=L,N.numLightProbes=S,s.version=A0++)}function c(u,f){let d=0,h=0,y=0,v=0,g=0,p=f.matrixWorldInverse;for(let M=0,_=u.length;M<_;M++){let T=u[M];if(T.isDirectionalLight){let O=s.directional[d];O.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),O.direction.sub(r),O.direction.transformDirection(p),d++}else if(T.isSpotLight){let O=s.spot[y];O.position.setFromMatrixPosition(T.matrixWorld),O.position.applyMatrix4(p),O.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),O.direction.sub(r),O.direction.transformDirection(p),y++}else if(T.isRectAreaLight){let O=s.rectArea[v];O.position.setFromMatrixPosition(T.matrixWorld),O.position.applyMatrix4(p),o.identity(),a.copy(T.matrixWorld),a.premultiply(p),o.extractRotation(a),O.halfWidth.set(T.width*.5,0,0),O.halfHeight.set(0,T.height*.5,0),O.halfWidth.applyMatrix4(o),O.halfHeight.applyMatrix4(o),v++}else if(T.isPointLight){let O=s.point[h];O.position.setFromMatrixPosition(T.matrixWorld),O.position.applyMatrix4(p),h++}else if(T.isHemisphereLight){let O=s.hemi[g];O.direction.setFromMatrixPosition(T.matrixWorld),O.direction.transformDirection(p),g++}}}return{setup:l,setupView:c,state:s}}function Uh(i,e){let t=new C0(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(f){n.push(f)}function o(f){s.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function P0(i,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),l;return o===void 0?(l=new Uh(i,e),t.set(r,[l])):a>=o.length?(l=new Uh(i,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:n,dispose:s}}var gl=class extends ji{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Od,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},xl=class extends ji{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},I0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,L0=`uniform sampler2D shadow_pass;
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
}`;function D0(i,e,t){let n=new wr,s=new Be,r=new Be,a=new Ln,o=new gl({depthPacking:Fd}),l=new xl,c={},u=t.maxTextureSize,f={[Zi]:$n,[$n]:Zi,[gn]:gn},d=new Li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:I0,fragmentShader:L0}),h=d.clone();h.defines.HORIZONTAL_PASS=1;let y=new Kn;y.setAttribute("position",new Zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new je(y,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$h;let p=this.type;this.render=function(I,L,$){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||I.length===0)return;let S=i.getRenderTarget(),A=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),B=i.state;B.setBlending(qi),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let J=p!==Ri&&this.type===Ri,P=p===Ri&&this.type!==Ri;for(let V=0,D=I.length;V<D;V++){let ae=I[V],Y=ae.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let j=Y.getFrameExtents();if(s.multiply(j),r.copy(Y.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/j.x),s.x=r.x*j.x,Y.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/j.y),s.y=r.y*j.y,Y.mapSize.y=r.y)),Y.map===null||J===!0||P===!0){let ue=this.type!==Ri?{minFilter:zn,magFilter:zn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Ii(s.x,s.y,ue),Y.map.texture.name=ae.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();let re=Y.getViewportCount();for(let ue=0;ue<re;ue++){let fe=Y.getViewport(ue);a.set(r.x*fe.x,r.y*fe.y,r.x*fe.z,r.y*fe.w),B.viewport(a),Y.updateMatrices(ae,ue),n=Y.getFrustum(),T(L,$,Y.camera,ae,this.type)}Y.isPointLightShadow!==!0&&this.type===Ri&&M(Y,$),Y.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(S,A,N)};function M(I,L){let $=e.update(v);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,h.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Ii(s.x,s.y)),d.uniforms.shadow_pass.value=I.map.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(L,null,$,d,v,null),h.uniforms.shadow_pass.value=I.mapPass.texture,h.uniforms.resolution.value=I.mapSize,h.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(L,null,$,h,v,null)}function _(I,L,$,S){let A=null,N=$.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(N!==void 0)A=N;else if(A=$.isPointLight===!0?l:o,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){let B=A.uuid,J=L.uuid,P=c[B];P===void 0&&(P={},c[B]=P);let V=P[J];V===void 0&&(V=A.clone(),P[J]=V,L.addEventListener("dispose",O)),A=V}if(A.visible=L.visible,A.wireframe=L.wireframe,S===Ri?A.side=L.shadowSide!==null?L.shadowSide:L.side:A.side=L.shadowSide!==null?L.shadowSide:f[L.side],A.alphaMap=L.alphaMap,A.alphaTest=L.alphaTest,A.map=L.map,A.clipShadows=L.clipShadows,A.clippingPlanes=L.clippingPlanes,A.clipIntersection=L.clipIntersection,A.displacementMap=L.displacementMap,A.displacementScale=L.displacementScale,A.displacementBias=L.displacementBias,A.wireframeLinewidth=L.wireframeLinewidth,A.linewidth=L.linewidth,$.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let B=i.properties.get(A);B.light=$}return A}function T(I,L,$,S,A){if(I.visible===!1)return;if(I.layers.test(L.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&A===Ri)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,I.matrixWorld);let J=e.update(I),P=I.material;if(Array.isArray(P)){let V=J.groups;for(let D=0,ae=V.length;D<ae;D++){let Y=V[D],j=P[Y.materialIndex];if(j&&j.visible){let re=_(I,j,S,A);I.onBeforeShadow(i,I,L,$,J,re,Y),i.renderBufferDirect($,null,J,re,I,Y),I.onAfterShadow(i,I,L,$,J,re,Y)}}}else if(P.visible){let V=_(I,P,S,A);I.onBeforeShadow(i,I,L,$,J,V,null),i.renderBufferDirect($,null,J,V,I,null),I.onAfterShadow(i,I,L,$,J,V,null)}}let B=I.children;for(let J=0,P=B.length;J<P;J++)T(B[J],L,$,S,A)}function O(I){I.target.removeEventListener("dispose",O);for(let $ in c){let S=c[$],A=I.target.uuid;A in S&&(S[A].dispose(),delete S[A])}}}function U0(i,e,t){let n=t.isWebGL2;function s(){let U=!1,Le=new Ln,De=null,nt=new Ln(0,0,0,0);return{setMask:function(Ye){De!==Ye&&!U&&(i.colorMask(Ye,Ye,Ye,Ye),De=Ye)},setLocked:function(Ye){U=Ye},setClear:function(Ye,Pt,Ut,Nt,wt){wt===!0&&(Ye*=Nt,Pt*=Nt,Ut*=Nt),Le.set(Ye,Pt,Ut,Nt),nt.equals(Le)===!1&&(i.clearColor(Ye,Pt,Ut,Nt),nt.copy(Le))},reset:function(){U=!1,De=null,nt.set(-1,0,0,0)}}}function r(){let U=!1,Le=null,De=null,nt=null;return{setTest:function(Ye){Ye?mt(i.DEPTH_TEST):qe(i.DEPTH_TEST)},setMask:function(Ye){Le!==Ye&&!U&&(i.depthMask(Ye),Le=Ye)},setFunc:function(Ye){if(De!==Ye){switch(Ye){case dd:i.depthFunc(i.NEVER);break;case fd:i.depthFunc(i.ALWAYS);break;case pd:i.depthFunc(i.LESS);break;case ga:i.depthFunc(i.LEQUAL);break;case md:i.depthFunc(i.EQUAL);break;case gd:i.depthFunc(i.GEQUAL);break;case xd:i.depthFunc(i.GREATER);break;case yd:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}De=Ye}},setLocked:function(Ye){U=Ye},setClear:function(Ye){nt!==Ye&&(i.clearDepth(Ye),nt=Ye)},reset:function(){U=!1,Le=null,De=null,nt=null}}}function a(){let U=!1,Le=null,De=null,nt=null,Ye=null,Pt=null,Ut=null,Nt=null,wt=null;return{setTest:function(vt){U||(vt?mt(i.STENCIL_TEST):qe(i.STENCIL_TEST))},setMask:function(vt){Le!==vt&&!U&&(i.stencilMask(vt),Le=vt)},setFunc:function(vt,en,an){(De!==vt||nt!==en||Ye!==an)&&(i.stencilFunc(vt,en,an),De=vt,nt=en,Ye=an)},setOp:function(vt,en,an){(Pt!==vt||Ut!==en||Nt!==an)&&(i.stencilOp(vt,en,an),Pt=vt,Ut=en,Nt=an)},setLocked:function(vt){U=vt},setClear:function(vt){wt!==vt&&(i.clearStencil(vt),wt=vt)},reset:function(){U=!1,Le=null,De=null,nt=null,Ye=null,Pt=null,Ut=null,Nt=null,wt=null}}}let o=new s,l=new r,c=new a,u=new WeakMap,f=new WeakMap,d={},h={},y=new WeakMap,v=[],g=null,p=!1,M=null,_=null,T=null,O=null,I=null,L=null,$=null,S=new _t(0,0,0),A=0,N=!1,B=null,J=null,P=null,V=null,D=null,ae=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,j=0,re=i.getParameter(i.VERSION);re.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(re)[1]),Y=j>=1):re.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),Y=j>=2);let ue=null,fe={},te=i.getParameter(i.SCISSOR_BOX),me=i.getParameter(i.VIEWPORT),Pe=new Ln().fromArray(te),We=new Ln().fromArray(me);function Xe(U,Le,De,nt){let Ye=new Uint8Array(4),Pt=i.createTexture();i.bindTexture(U,Pt),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ut=0;Ut<De;Ut++)n&&(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)?i.texImage3D(Le,0,i.RGBA,1,1,nt,0,i.RGBA,i.UNSIGNED_BYTE,Ye):i.texImage2D(Le+Ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ye);return Pt}let ht={};ht[i.TEXTURE_2D]=Xe(i.TEXTURE_2D,i.TEXTURE_2D,1),ht[i.TEXTURE_CUBE_MAP]=Xe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ht[i.TEXTURE_2D_ARRAY]=Xe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ht[i.TEXTURE_3D]=Xe(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),mt(i.DEPTH_TEST),l.setFunc(ga),xt(!1),C(fc),mt(i.CULL_FACE),$e(qi);function mt(U){d[U]!==!0&&(i.enable(U),d[U]=!0)}function qe(U){d[U]!==!1&&(i.disable(U),d[U]=!1)}function Ct(U,Le){return h[U]!==Le?(i.bindFramebuffer(U,Le),h[U]=Le,n&&(U===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Le),U===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Le)),!0):!1}function Z(U,Le){let De=v,nt=!1;if(U)if(De=y.get(Le),De===void 0&&(De=[],y.set(Le,De)),U.isWebGLMultipleRenderTargets){let Ye=U.texture;if(De.length!==Ye.length||De[0]!==i.COLOR_ATTACHMENT0){for(let Pt=0,Ut=Ye.length;Pt<Ut;Pt++)De[Pt]=i.COLOR_ATTACHMENT0+Pt;De.length=Ye.length,nt=!0}}else De[0]!==i.COLOR_ATTACHMENT0&&(De[0]=i.COLOR_ATTACHMENT0,nt=!0);else De[0]!==i.BACK&&(De[0]=i.BACK,nt=!0);nt&&(t.isWebGL2?i.drawBuffers(De):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(De))}function rn(U){return g!==U?(i.useProgram(U),g=U,!0):!1}let Qe={[cs]:i.FUNC_ADD,[Ju]:i.FUNC_SUBTRACT,[ju]:i.FUNC_REVERSE_SUBTRACT};if(n)Qe[xc]=i.MIN,Qe[yc]=i.MAX;else{let U=e.get("EXT_blend_minmax");U!==null&&(Qe[xc]=U.MIN_EXT,Qe[yc]=U.MAX_EXT)}let lt={[Qu]:i.ZERO,[ed]:i.ONE,[td]:i.SRC_COLOR,[jo]:i.SRC_ALPHA,[od]:i.SRC_ALPHA_SATURATE,[rd]:i.DST_COLOR,[id]:i.DST_ALPHA,[nd]:i.ONE_MINUS_SRC_COLOR,[Qo]:i.ONE_MINUS_SRC_ALPHA,[ad]:i.ONE_MINUS_DST_COLOR,[sd]:i.ONE_MINUS_DST_ALPHA,[ld]:i.CONSTANT_COLOR,[cd]:i.ONE_MINUS_CONSTANT_COLOR,[hd]:i.CONSTANT_ALPHA,[ud]:i.ONE_MINUS_CONSTANT_ALPHA};function $e(U,Le,De,nt,Ye,Pt,Ut,Nt,wt,vt){if(U===qi){p===!0&&(qe(i.BLEND),p=!1);return}if(p===!1&&(mt(i.BLEND),p=!0),U!==Ku){if(U!==M||vt!==N){if((_!==cs||I!==cs)&&(i.blendEquation(i.FUNC_ADD),_=cs,I=cs),vt)switch(U){case Gs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pc:i.blendFunc(i.ONE,i.ONE);break;case mc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Gs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case mc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}T=null,O=null,L=null,$=null,S.set(0,0,0),A=0,M=U,N=vt}return}Ye=Ye||Le,Pt=Pt||De,Ut=Ut||nt,(Le!==_||Ye!==I)&&(i.blendEquationSeparate(Qe[Le],Qe[Ye]),_=Le,I=Ye),(De!==T||nt!==O||Pt!==L||Ut!==$)&&(i.blendFuncSeparate(lt[De],lt[nt],lt[Pt],lt[Ut]),T=De,O=nt,L=Pt,$=Ut),(Nt.equals(S)===!1||wt!==A)&&(i.blendColor(Nt.r,Nt.g,Nt.b,wt),S.copy(Nt),A=wt),M=U,N=!1}function Yt(U,Le){U.side===gn?qe(i.CULL_FACE):mt(i.CULL_FACE);let De=U.side===$n;Le&&(De=!De),xt(De),U.blending===Gs&&U.transparent===!1?$e(qi):$e(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),o.setMask(U.colorWrite);let nt=U.stencilWrite;c.setTest(nt),nt&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),K(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?mt(i.SAMPLE_ALPHA_TO_COVERAGE):qe(i.SAMPLE_ALPHA_TO_COVERAGE)}function xt(U){B!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),B=U)}function C(U){U!==$u?(mt(i.CULL_FACE),U!==J&&(U===fc?i.cullFace(i.BACK):U===Zu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):qe(i.CULL_FACE),J=U}function b(U){U!==P&&(Y&&i.lineWidth(U),P=U)}function K(U,Le,De){U?(mt(i.POLYGON_OFFSET_FILL),(V!==Le||D!==De)&&(i.polygonOffset(Le,De),V=Le,D=De)):qe(i.POLYGON_OFFSET_FILL)}function Ee(U){U?mt(i.SCISSOR_TEST):qe(i.SCISSOR_TEST)}function ye(U){U===void 0&&(U=i.TEXTURE0+ae-1),ue!==U&&(i.activeTexture(U),ue=U)}function Te(U,Le,De){De===void 0&&(ue===null?De=i.TEXTURE0+ae-1:De=ue);let nt=fe[De];nt===void 0&&(nt={type:void 0,texture:void 0},fe[De]=nt),(nt.type!==U||nt.texture!==Le)&&(ue!==De&&(i.activeTexture(De),ue=De),i.bindTexture(U,Le||ht[U]),nt.type=U,nt.texture=Le)}function Ke(){let U=fe[ue];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Ie(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ke(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function st(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ut(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ce(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function dt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function it(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pt(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Je(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Fe(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(U){Pe.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Pe.copy(U))}function Lt(U){We.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),We.copy(U))}function ze(U,Le){let De=f.get(Le);De===void 0&&(De=new WeakMap,f.set(Le,De));let nt=De.get(U);nt===void 0&&(nt=i.getUniformBlockIndex(Le,U.name),De.set(U,nt))}function Ue(U,Le){let nt=f.get(Le).get(U);u.get(Le)!==nt&&(i.uniformBlockBinding(Le,nt,U.__bindingPointIndex),u.set(Le,nt))}function ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},ue=null,fe={},h={},y=new WeakMap,v=[],g=null,p=!1,M=null,_=null,T=null,O=null,I=null,L=null,$=null,S=new _t(0,0,0),A=0,N=!1,B=null,J=null,P=null,V=null,D=null,Pe.set(0,0,i.canvas.width,i.canvas.height),We.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:mt,disable:qe,bindFramebuffer:Ct,drawBuffers:Z,useProgram:rn,setBlending:$e,setMaterial:Yt,setFlipSided:xt,setCullFace:C,setLineWidth:b,setPolygonOffset:K,setScissorTest:Ee,activeTexture:ye,bindTexture:Te,unbindTexture:Ke,compressedTexImage2D:Ie,compressedTexImage3D:ke,texImage2D:Je,texImage3D:Fe,updateUBOMapping:ze,uniformBlockBinding:Ue,texStorage2D:it,texStorage3D:pt,texSubImage2D:st,texSubImage3D:ut,compressedTexSubImage2D:ce,compressedTexSubImage3D:dt,scissor:et,viewport:Lt,reset:ge}}function N0(i,e,t,n,s,r,a){let o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,f,d=new WeakMap,h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(C,b){return h?new OffscreenCanvas(C,b):Sa("canvas")}function v(C,b,K,Ee){let ye=1;if((C.width>Ee||C.height>Ee)&&(ye=Ee/Math.max(C.width,C.height)),ye<1||b===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){let Te=b?rl:Math.floor,Ke=Te(ye*C.width),Ie=Te(ye*C.height);f===void 0&&(f=y(Ke,Ie));let ke=K?y(Ke,Ie):f;return ke.width=Ke,ke.height=Ie,ke.getContext("2d").drawImage(C,0,0,Ke,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Ke+"x"+Ie+")."),ke}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function g(C){return Jc(C.width)&&Jc(C.height)}function p(C){return o?!1:C.wrapS!==pi||C.wrapT!==pi||C.minFilter!==zn&&C.minFilter!==ii}function M(C,b){return C.generateMipmaps&&b&&C.minFilter!==zn&&C.minFilter!==ii}function _(C){i.generateMipmap(C)}function T(C,b,K,Ee,ye=!1){if(o===!1)return b;if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Te=b;if(b===i.RED&&(K===i.FLOAT&&(Te=i.R32F),K===i.HALF_FLOAT&&(Te=i.R16F),K===i.UNSIGNED_BYTE&&(Te=i.R8)),b===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(Te=i.R8UI),K===i.UNSIGNED_SHORT&&(Te=i.R16UI),K===i.UNSIGNED_INT&&(Te=i.R32UI),K===i.BYTE&&(Te=i.R8I),K===i.SHORT&&(Te=i.R16I),K===i.INT&&(Te=i.R32I)),b===i.RG&&(K===i.FLOAT&&(Te=i.RG32F),K===i.HALF_FLOAT&&(Te=i.RG16F),K===i.UNSIGNED_BYTE&&(Te=i.RG8)),b===i.RGBA){let Ke=ye?_a:Gt.getTransfer(Ee);K===i.FLOAT&&(Te=i.RGBA32F),K===i.HALF_FLOAT&&(Te=i.RGBA16F),K===i.UNSIGNED_BYTE&&(Te=Ke===Qt?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT_4_4_4_4&&(Te=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(Te=i.RGB5_A1)}return(Te===i.R16F||Te===i.R32F||Te===i.RG16F||Te===i.RG32F||Te===i.RGBA16F||Te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Te}function O(C,b,K){return M(C,K)===!0||C.isFramebufferTexture&&C.minFilter!==zn&&C.minFilter!==ii?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function I(C){return C===zn||C===_c||C===go?i.NEAREST:i.LINEAR}function L(C){let b=C.target;b.removeEventListener("dispose",L),S(b),b.isVideoTexture&&u.delete(b)}function $(C){let b=C.target;b.removeEventListener("dispose",$),N(b)}function S(C){let b=n.get(C);if(b.__webglInit===void 0)return;let K=C.source,Ee=d.get(K);if(Ee){let ye=Ee[b.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&A(C),Object.keys(Ee).length===0&&d.delete(K)}n.remove(C)}function A(C){let b=n.get(C);i.deleteTexture(b.__webglTexture);let K=C.source,Ee=d.get(K);delete Ee[b.__cacheKey],a.memory.textures--}function N(C){let b=C.texture,K=n.get(C),Ee=n.get(b);if(Ee.__webglTexture!==void 0&&(i.deleteTexture(Ee.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ye=0;ye<6;ye++){if(Array.isArray(K.__webglFramebuffer[ye]))for(let Te=0;Te<K.__webglFramebuffer[ye].length;Te++)i.deleteFramebuffer(K.__webglFramebuffer[ye][Te]);else i.deleteFramebuffer(K.__webglFramebuffer[ye]);K.__webglDepthbuffer&&i.deleteRenderbuffer(K.__webglDepthbuffer[ye])}else{if(Array.isArray(K.__webglFramebuffer))for(let ye=0;ye<K.__webglFramebuffer.length;ye++)i.deleteFramebuffer(K.__webglFramebuffer[ye]);else i.deleteFramebuffer(K.__webglFramebuffer);if(K.__webglDepthbuffer&&i.deleteRenderbuffer(K.__webglDepthbuffer),K.__webglMultisampledFramebuffer&&i.deleteFramebuffer(K.__webglMultisampledFramebuffer),K.__webglColorRenderbuffer)for(let ye=0;ye<K.__webglColorRenderbuffer.length;ye++)K.__webglColorRenderbuffer[ye]&&i.deleteRenderbuffer(K.__webglColorRenderbuffer[ye]);K.__webglDepthRenderbuffer&&i.deleteRenderbuffer(K.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ye=0,Te=b.length;ye<Te;ye++){let Ke=n.get(b[ye]);Ke.__webglTexture&&(i.deleteTexture(Ke.__webglTexture),a.memory.textures--),n.remove(b[ye])}n.remove(b),n.remove(C)}let B=0;function J(){B=0}function P(){let C=B;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),B+=1,C}function V(C){let b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function D(C,b){let K=n.get(C);if(C.isVideoTexture&&Yt(C),C.isRenderTargetTexture===!1&&C.version>0&&K.__version!==C.version){let Ee=C.image;if(Ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(K,C,b);return}}t.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+b)}function ae(C,b){let K=n.get(C);if(C.version>0&&K.__version!==C.version){Pe(K,C,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+b)}function Y(C,b){let K=n.get(C);if(C.version>0&&K.__version!==C.version){Pe(K,C,b);return}t.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+b)}function j(C,b){let K=n.get(C);if(C.version>0&&K.__version!==C.version){We(K,C,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+b)}let re={[Mr]:i.REPEAT,[pi]:i.CLAMP_TO_EDGE,[nl]:i.MIRRORED_REPEAT},ue={[zn]:i.NEAREST,[_c]:i.NEAREST_MIPMAP_NEAREST,[go]:i.NEAREST_MIPMAP_LINEAR,[ii]:i.LINEAR,[Ad]:i.LINEAR_MIPMAP_NEAREST,[br]:i.LINEAR_MIPMAP_LINEAR},fe={[kd]:i.NEVER,[Xd]:i.ALWAYS,[Hd]:i.LESS,[au]:i.LEQUAL,[zd]:i.EQUAL,[Wd]:i.GEQUAL,[Vd]:i.GREATER,[Gd]:i.NOTEQUAL};function te(C,b,K){if(K?(i.texParameteri(C,i.TEXTURE_WRAP_S,re[b.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,re[b.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,re[b.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,ue[b.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,ue[b.minFilter])):(i.texParameteri(C,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(C,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(b.wrapS!==pi||b.wrapT!==pi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(C,i.TEXTURE_MAG_FILTER,I(b.magFilter)),i.texParameteri(C,i.TEXTURE_MIN_FILTER,I(b.minFilter)),b.minFilter!==zn&&b.minFilter!==ii&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,fe[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let Ee=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===zn||b.minFilter!==go&&b.minFilter!==br||b.type===Xi&&e.has("OES_texture_float_linear")===!1||o===!1&&b.type===Sr&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(i.texParameterf(C,Ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function me(C,b){let K=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",L));let Ee=b.source,ye=d.get(Ee);ye===void 0&&(ye={},d.set(Ee,ye));let Te=V(b);if(Te!==C.__cacheKey){ye[Te]===void 0&&(ye[Te]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,K=!0),ye[Te].usedTimes++;let Ke=ye[C.__cacheKey];Ke!==void 0&&(ye[C.__cacheKey].usedTimes--,Ke.usedTimes===0&&A(b)),C.__cacheKey=Te,C.__webglTexture=ye[Te].texture}return K}function Pe(C,b,K){let Ee=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Ee=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Ee=i.TEXTURE_3D);let ye=me(C,b),Te=b.source;t.bindTexture(Ee,C.__webglTexture,i.TEXTURE0+K);let Ke=n.get(Te);if(Te.version!==Ke.__version||ye===!0){t.activeTexture(i.TEXTURE0+K);let Ie=Gt.getPrimaries(Gt.workingColorSpace),ke=b.colorSpace===si?null:Gt.getPrimaries(b.colorSpace),st=b.colorSpace===si||Ie===ke?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let ut=p(b)&&g(b.image)===!1,ce=v(b.image,ut,!1,s.maxTextureSize);ce=xt(b,ce);let dt=g(ce)||o,it=r.convert(b.format,b.colorSpace),pt=r.convert(b.type),Je=T(b.internalFormat,it,pt,b.colorSpace,b.isVideoTexture);te(Ee,b,dt);let Fe,et=b.mipmaps,Lt=o&&b.isVideoTexture!==!0&&Je!==iu,ze=Ke.__version===void 0||ye===!0,Ue=O(b,ce,dt);if(b.isDepthTexture)Je=i.DEPTH_COMPONENT,o?b.type===Xi?Je=i.DEPTH_COMPONENT32F:b.type===Wi?Je=i.DEPTH_COMPONENT24:b.type===us?Je=i.DEPTH24_STENCIL8:Je=i.DEPTH_COMPONENT16:b.type===Xi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===ds&&Je===i.DEPTH_COMPONENT&&b.type!==ql&&b.type!==Wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Wi,pt=r.convert(b.type)),b.format===$s&&Je===i.DEPTH_COMPONENT&&(Je=i.DEPTH_STENCIL,b.type!==us&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=us,pt=r.convert(b.type))),ze&&(Lt?t.texStorage2D(i.TEXTURE_2D,1,Je,ce.width,ce.height):t.texImage2D(i.TEXTURE_2D,0,Je,ce.width,ce.height,0,it,pt,null));else if(b.isDataTexture)if(et.length>0&&dt){Lt&&ze&&t.texStorage2D(i.TEXTURE_2D,Ue,Je,et[0].width,et[0].height);for(let ge=0,U=et.length;ge<U;ge++)Fe=et[ge],Lt?t.texSubImage2D(i.TEXTURE_2D,ge,0,0,Fe.width,Fe.height,it,pt,Fe.data):t.texImage2D(i.TEXTURE_2D,ge,Je,Fe.width,Fe.height,0,it,pt,Fe.data);b.generateMipmaps=!1}else Lt?(ze&&t.texStorage2D(i.TEXTURE_2D,Ue,Je,ce.width,ce.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ce.width,ce.height,it,pt,ce.data)):t.texImage2D(i.TEXTURE_2D,0,Je,ce.width,ce.height,0,it,pt,ce.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Lt&&ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ue,Je,et[0].width,et[0].height,ce.depth);for(let ge=0,U=et.length;ge<U;ge++)Fe=et[ge],b.format!==mi?it!==null?Lt?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,0,Fe.width,Fe.height,ce.depth,it,Fe.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ge,Je,Fe.width,Fe.height,ce.depth,0,Fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?t.texSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,0,Fe.width,Fe.height,ce.depth,it,pt,Fe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ge,Je,Fe.width,Fe.height,ce.depth,0,it,pt,Fe.data)}else{Lt&&ze&&t.texStorage2D(i.TEXTURE_2D,Ue,Je,et[0].width,et[0].height);for(let ge=0,U=et.length;ge<U;ge++)Fe=et[ge],b.format!==mi?it!==null?Lt?t.compressedTexSubImage2D(i.TEXTURE_2D,ge,0,0,Fe.width,Fe.height,it,Fe.data):t.compressedTexImage2D(i.TEXTURE_2D,ge,Je,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?t.texSubImage2D(i.TEXTURE_2D,ge,0,0,Fe.width,Fe.height,it,pt,Fe.data):t.texImage2D(i.TEXTURE_2D,ge,Je,Fe.width,Fe.height,0,it,pt,Fe.data)}else if(b.isDataArrayTexture)Lt?(ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ue,Je,ce.width,ce.height,ce.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,it,pt,ce.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Je,ce.width,ce.height,ce.depth,0,it,pt,ce.data);else if(b.isData3DTexture)Lt?(ze&&t.texStorage3D(i.TEXTURE_3D,Ue,Je,ce.width,ce.height,ce.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,it,pt,ce.data)):t.texImage3D(i.TEXTURE_3D,0,Je,ce.width,ce.height,ce.depth,0,it,pt,ce.data);else if(b.isFramebufferTexture){if(ze)if(Lt)t.texStorage2D(i.TEXTURE_2D,Ue,Je,ce.width,ce.height);else{let ge=ce.width,U=ce.height;for(let Le=0;Le<Ue;Le++)t.texImage2D(i.TEXTURE_2D,Le,Je,ge,U,0,it,pt,null),ge>>=1,U>>=1}}else if(et.length>0&&dt){Lt&&ze&&t.texStorage2D(i.TEXTURE_2D,Ue,Je,et[0].width,et[0].height);for(let ge=0,U=et.length;ge<U;ge++)Fe=et[ge],Lt?t.texSubImage2D(i.TEXTURE_2D,ge,0,0,it,pt,Fe):t.texImage2D(i.TEXTURE_2D,ge,Je,it,pt,Fe);b.generateMipmaps=!1}else Lt?(ze&&t.texStorage2D(i.TEXTURE_2D,Ue,Je,ce.width,ce.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,it,pt,ce)):t.texImage2D(i.TEXTURE_2D,0,Je,it,pt,ce);M(b,dt)&&_(Ee),Ke.__version=Te.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function We(C,b,K){if(b.image.length!==6)return;let Ee=me(C,b),ye=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+K);let Te=n.get(ye);if(ye.version!==Te.__version||Ee===!0){t.activeTexture(i.TEXTURE0+K);let Ke=Gt.getPrimaries(Gt.workingColorSpace),Ie=b.colorSpace===si?null:Gt.getPrimaries(b.colorSpace),ke=b.colorSpace===si||Ke===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let st=b.isCompressedTexture||b.image[0].isCompressedTexture,ut=b.image[0]&&b.image[0].isDataTexture,ce=[];for(let ge=0;ge<6;ge++)!st&&!ut?ce[ge]=v(b.image[ge],!1,!0,s.maxCubemapSize):ce[ge]=ut?b.image[ge].image:b.image[ge],ce[ge]=xt(b,ce[ge]);let dt=ce[0],it=g(dt)||o,pt=r.convert(b.format,b.colorSpace),Je=r.convert(b.type),Fe=T(b.internalFormat,pt,Je,b.colorSpace),et=o&&b.isVideoTexture!==!0,Lt=Te.__version===void 0||Ee===!0,ze=O(b,dt,it);te(i.TEXTURE_CUBE_MAP,b,it);let Ue;if(st){et&&Lt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ze,Fe,dt.width,dt.height);for(let ge=0;ge<6;ge++){Ue=ce[ge].mipmaps;for(let U=0;U<Ue.length;U++){let Le=Ue[U];b.format!==mi?pt!==null?et?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,U,0,0,Le.width,Le.height,pt,Le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,U,Fe,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):et?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,U,0,0,Le.width,Le.height,pt,Je,Le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,U,Fe,Le.width,Le.height,0,pt,Je,Le.data)}}}else{Ue=b.mipmaps,et&&Lt&&(Ue.length>0&&ze++,t.texStorage2D(i.TEXTURE_CUBE_MAP,ze,Fe,ce[0].width,ce[0].height));for(let ge=0;ge<6;ge++)if(ut){et?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,ce[ge].width,ce[ge].height,pt,Je,ce[ge].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Fe,ce[ge].width,ce[ge].height,0,pt,Je,ce[ge].data);for(let U=0;U<Ue.length;U++){let De=Ue[U].image[ge].image;et?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,U+1,0,0,De.width,De.height,pt,Je,De.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,U+1,Fe,De.width,De.height,0,pt,Je,De.data)}}else{et?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,pt,Je,ce[ge]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Fe,pt,Je,ce[ge]);for(let U=0;U<Ue.length;U++){let Le=Ue[U];et?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,U+1,0,0,pt,Je,Le.image[ge]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,U+1,Fe,pt,Je,Le.image[ge])}}}M(b,it)&&_(i.TEXTURE_CUBE_MAP),Te.__version=ye.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Xe(C,b,K,Ee,ye,Te){let Ke=r.convert(K.format,K.colorSpace),Ie=r.convert(K.type),ke=T(K.internalFormat,Ke,Ie,K.colorSpace);if(!n.get(b).__hasExternalTextures){let ut=Math.max(1,b.width>>Te),ce=Math.max(1,b.height>>Te);ye===i.TEXTURE_3D||ye===i.TEXTURE_2D_ARRAY?t.texImage3D(ye,Te,ke,ut,ce,b.depth,0,Ke,Ie,null):t.texImage2D(ye,Te,ke,ut,ce,0,Ke,Ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),$e(b)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ee,ye,n.get(K).__webglTexture,0,lt(b)):(ye===i.TEXTURE_2D||ye>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Ee,ye,n.get(K).__webglTexture,Te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(C,b,K){if(i.bindRenderbuffer(i.RENDERBUFFER,C),b.depthBuffer&&!b.stencilBuffer){let Ee=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(K||$e(b)){let ye=b.depthTexture;ye&&ye.isDepthTexture&&(ye.type===Xi?Ee=i.DEPTH_COMPONENT32F:ye.type===Wi&&(Ee=i.DEPTH_COMPONENT24));let Te=lt(b);$e(b)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te,Ee,b.width,b.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,Ee,b.width,b.height)}else i.renderbufferStorage(i.RENDERBUFFER,Ee,b.width,b.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,C)}else if(b.depthBuffer&&b.stencilBuffer){let Ee=lt(b);K&&$e(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,i.DEPTH24_STENCIL8,b.width,b.height):$e(b)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ee,i.DEPTH24_STENCIL8,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,C)}else{let Ee=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ye=0;ye<Ee.length;ye++){let Te=Ee[ye],Ke=r.convert(Te.format,Te.colorSpace),Ie=r.convert(Te.type),ke=T(Te.internalFormat,Ke,Ie,Te.colorSpace),st=lt(b);K&&$e(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,st,ke,b.width,b.height):$e(b)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st,ke,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ke,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function mt(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),D(b.depthTexture,0);let Ee=n.get(b.depthTexture).__webglTexture,ye=lt(b);if(b.depthTexture.format===ds)$e(b)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Ee,0,ye):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Ee,0);else if(b.depthTexture.format===$s)$e(b)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Ee,0,ye):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Ee,0);else throw new Error("Unknown depthTexture format")}function qe(C){let b=n.get(C),K=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");mt(b.__webglFramebuffer,C)}else if(K){b.__webglDepthbuffer=[];for(let Ee=0;Ee<6;Ee++)t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[Ee]),b.__webglDepthbuffer[Ee]=i.createRenderbuffer(),ht(b.__webglDepthbuffer[Ee],C,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=i.createRenderbuffer(),ht(b.__webglDepthbuffer,C,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ct(C,b,K){let Ee=n.get(C);b!==void 0&&Xe(Ee.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&qe(C)}function Z(C){let b=C.texture,K=n.get(C),Ee=n.get(b);C.addEventListener("dispose",$),C.isWebGLMultipleRenderTargets!==!0&&(Ee.__webglTexture===void 0&&(Ee.__webglTexture=i.createTexture()),Ee.__version=b.version,a.memory.textures++);let ye=C.isWebGLCubeRenderTarget===!0,Te=C.isWebGLMultipleRenderTargets===!0,Ke=g(C)||o;if(ye){K.__webglFramebuffer=[];for(let Ie=0;Ie<6;Ie++)if(o&&b.mipmaps&&b.mipmaps.length>0){K.__webglFramebuffer[Ie]=[];for(let ke=0;ke<b.mipmaps.length;ke++)K.__webglFramebuffer[Ie][ke]=i.createFramebuffer()}else K.__webglFramebuffer[Ie]=i.createFramebuffer()}else{if(o&&b.mipmaps&&b.mipmaps.length>0){K.__webglFramebuffer=[];for(let Ie=0;Ie<b.mipmaps.length;Ie++)K.__webglFramebuffer[Ie]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(Te)if(s.drawBuffers){let Ie=C.texture;for(let ke=0,st=Ie.length;ke<st;ke++){let ut=n.get(Ie[ke]);ut.__webglTexture===void 0&&(ut.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&$e(C)===!1){let Ie=Te?b:[b];K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let ke=0;ke<Ie.length;ke++){let st=Ie[ke];K.__webglColorRenderbuffer[ke]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[ke]);let ut=r.convert(st.format,st.colorSpace),ce=r.convert(st.type),dt=T(st.internalFormat,ut,ce,st.colorSpace,C.isXRRenderTarget===!0),it=lt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,it,dt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.RENDERBUFFER,K.__webglColorRenderbuffer[ke])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),ht(K.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ye){t.bindTexture(i.TEXTURE_CUBE_MAP,Ee.__webglTexture),te(i.TEXTURE_CUBE_MAP,b,Ke);for(let Ie=0;Ie<6;Ie++)if(o&&b.mipmaps&&b.mipmaps.length>0)for(let ke=0;ke<b.mipmaps.length;ke++)Xe(K.__webglFramebuffer[Ie][ke],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,ke);else Xe(K.__webglFramebuffer[Ie],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0);M(b,Ke)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){let Ie=C.texture;for(let ke=0,st=Ie.length;ke<st;ke++){let ut=Ie[ke],ce=n.get(ut);t.bindTexture(i.TEXTURE_2D,ce.__webglTexture),te(i.TEXTURE_2D,ut,Ke),Xe(K.__webglFramebuffer,C,ut,i.COLOR_ATTACHMENT0+ke,i.TEXTURE_2D,0),M(ut,Ke)&&_(i.TEXTURE_2D)}t.unbindTexture()}else{let Ie=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?Ie=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ie,Ee.__webglTexture),te(Ie,b,Ke),o&&b.mipmaps&&b.mipmaps.length>0)for(let ke=0;ke<b.mipmaps.length;ke++)Xe(K.__webglFramebuffer[ke],C,b,i.COLOR_ATTACHMENT0,Ie,ke);else Xe(K.__webglFramebuffer,C,b,i.COLOR_ATTACHMENT0,Ie,0);M(b,Ke)&&_(Ie),t.unbindTexture()}C.depthBuffer&&qe(C)}function rn(C){let b=g(C)||o,K=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let Ee=0,ye=K.length;Ee<ye;Ee++){let Te=K[Ee];if(M(Te,b)){let Ke=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ie=n.get(Te).__webglTexture;t.bindTexture(Ke,Ie),_(Ke),t.unbindTexture()}}}function Qe(C){if(o&&C.samples>0&&$e(C)===!1){let b=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],K=C.width,Ee=C.height,ye=i.COLOR_BUFFER_BIT,Te=[],Ke=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ie=n.get(C),ke=C.isWebGLMultipleRenderTargets===!0;if(ke)for(let st=0;st<b.length;st++)t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let st=0;st<b.length;st++){Te.push(i.COLOR_ATTACHMENT0+st),C.depthBuffer&&Te.push(Ke);let ut=Ie.__ignoreDepthValues!==void 0?Ie.__ignoreDepthValues:!1;if(ut===!1&&(C.depthBuffer&&(ye|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&(ye|=i.STENCIL_BUFFER_BIT)),ke&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[st]),ut===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ke]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ke])),ke){let ce=n.get(b[st]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ce,0)}i.blitFramebuffer(0,0,K,Ee,0,0,K,Ee,ye,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Te)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ke)for(let st=0;st<b.length;st++){t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[st]);let ut=n.get(b[st]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.TEXTURE_2D,ut,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}}function lt(C){return Math.min(s.maxSamples,C.samples)}function $e(C){let b=n.get(C);return o&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Yt(C){let b=a.render.frame;u.get(C)!==b&&(u.set(C,b),C.update())}function xt(C,b){let K=C.colorSpace,Ee=C.format,ye=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===il||K!==Pi&&K!==si&&(Gt.getTransfer(K)===Qt?o===!1?e.has("EXT_sRGB")===!0&&Ee===mi?(C.format=il,C.minFilter=ii,C.generateMipmaps=!1):b=Ea.sRGBToLinear(b):(Ee!==mi||ye!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),b}this.allocateTextureUnit=P,this.resetTextureUnits=J,this.setTexture2D=D,this.setTexture2DArray=ae,this.setTexture3D=Y,this.setTextureCube=j,this.rebindTextures=Ct,this.setupRenderTarget=Z,this.updateRenderTargetMipmap=rn,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=Xe,this.useMultisampledRTT=$e}function O0(i,e,t){let n=t.isWebGL2;function s(r,a=si){let o,l=Gt.getTransfer(a);if(r===$i)return i.UNSIGNED_BYTE;if(r===jh)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Qh)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Rd)return i.BYTE;if(r===Cd)return i.SHORT;if(r===ql)return i.UNSIGNED_SHORT;if(r===Jh)return i.INT;if(r===Wi)return i.UNSIGNED_INT;if(r===Xi)return i.FLOAT;if(r===Sr)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Pd)return i.ALPHA;if(r===mi)return i.RGBA;if(r===Id)return i.LUMINANCE;if(r===Ld)return i.LUMINANCE_ALPHA;if(r===ds)return i.DEPTH_COMPONENT;if(r===$s)return i.DEPTH_STENCIL;if(r===il)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Dd)return i.RED;if(r===eu)return i.RED_INTEGER;if(r===Ud)return i.RG;if(r===tu)return i.RG_INTEGER;if(r===nu)return i.RGBA_INTEGER;if(r===xo||r===yo||r===_o||r===vo)if(l===Qt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===xo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===yo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===_o)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===vo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===xo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===yo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===_o)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===vo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===vc||r===Mc||r===bc||r===Sc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===vc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Mc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===bc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Sc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===iu)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Ec||r===Tc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Ec)return l===Qt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Tc)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===wc||r===Ac||r===Rc||r===Cc||r===Pc||r===Ic||r===Lc||r===Dc||r===Uc||r===Nc||r===Oc||r===Fc||r===Bc||r===kc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===wc)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ac)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Rc)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Cc)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Pc)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ic)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Lc)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Dc)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Uc)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Nc)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Oc)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Fc)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Bc)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===kc)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Mo||r===Hc||r===zc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Mo)return l===Qt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Hc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===zc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Nd||r===Vc||r===Gc||r===Wc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Mo)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Vc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Gc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Wc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===us?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var yl=class extends Vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ri=class extends Gn{constructor(){super(),this.isGroup=!0,this.type="Group"}},F0={type:"move"},xr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ri,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ri,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ri,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,n),p=this._getHandJoint(c,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,y=.005;c.inputState.pinching&&d>h+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(F0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ri;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},_l=class extends Ki{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,y=null,v=t.getContextAttributes(),g=null,p=null,M=[],_=[],T=new Be,O=null,I=new Vn;I.layers.enable(1),I.viewport=new Ln;let L=new Vn;L.layers.enable(2),L.viewport=new Ln;let $=[I,L],S=new yl;S.layers.enable(1),S.layers.enable(2);let A=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let me=M[te];return me===void 0&&(me=new xr,M[te]=me),me.getTargetRaySpace()},this.getControllerGrip=function(te){let me=M[te];return me===void 0&&(me=new xr,M[te]=me),me.getGripSpace()},this.getHand=function(te){let me=M[te];return me===void 0&&(me=new xr,M[te]=me),me.getHandSpace()};function B(te){let me=_.indexOf(te.inputSource);if(me===-1)return;let Pe=M[me];Pe!==void 0&&(Pe.update(te.inputSource,te.frame,c||a),Pe.dispatchEvent({type:te.type,data:te.inputSource}))}function J(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",P);for(let te=0;te<M.length;te++){let me=_[te];me!==null&&(_[te]=null,M[te].disconnect(me))}A=null,N=null,e.setRenderTarget(g),h=null,d=null,f=null,s=null,p=null,fe.stop(),n.isPresenting=!1,e.setPixelRatio(O),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",J),s.addEventListener("inputsourceschange",P),v.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(T),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let me={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,t,me),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),p=new Ii(h.framebufferWidth,h.framebufferHeight,{format:mi,type:$i,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let me=null,Pe=null,We=null;v.depth&&(We=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=v.stencil?$s:ds,Pe=v.stencil?us:Wi);let Xe={colorFormat:t.RGBA8,depthFormat:We,scaleFactor:r};f=new XRWebGLBinding(s,t),d=f.createProjectionLayer(Xe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new Ii(d.textureWidth,d.textureHeight,{format:mi,type:$i,depthTexture:new Ua(d.textureWidth,d.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});let ht=e.properties.get(p);ht.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),fe.setContext(s),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function P(te){for(let me=0;me<te.removed.length;me++){let Pe=te.removed[me],We=_.indexOf(Pe);We>=0&&(_[We]=null,M[We].disconnect(Pe))}for(let me=0;me<te.added.length;me++){let Pe=te.added[me],We=_.indexOf(Pe);if(We===-1){for(let ht=0;ht<M.length;ht++)if(ht>=_.length){_.push(Pe),We=ht;break}else if(_[ht]===null){_[ht]=Pe,We=ht;break}if(We===-1)break}let Xe=M[We];Xe&&Xe.connect(Pe)}}let V=new F,D=new F;function ae(te,me,Pe){V.setFromMatrixPosition(me.matrixWorld),D.setFromMatrixPosition(Pe.matrixWorld);let We=V.distanceTo(D),Xe=me.projectionMatrix.elements,ht=Pe.projectionMatrix.elements,mt=Xe[14]/(Xe[10]-1),qe=Xe[14]/(Xe[10]+1),Ct=(Xe[9]+1)/Xe[5],Z=(Xe[9]-1)/Xe[5],rn=(Xe[8]-1)/Xe[0],Qe=(ht[8]+1)/ht[0],lt=mt*rn,$e=mt*Qe,Yt=We/(-rn+Qe),xt=Yt*-rn;me.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(xt),te.translateZ(Yt),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert();let C=mt+Yt,b=qe+Yt,K=lt-xt,Ee=$e+(We-xt),ye=Ct*qe/b*C,Te=Z*qe/b*C;te.projectionMatrix.makePerspective(K,Ee,ye,Te,C,b),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}function Y(te,me){me===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(me.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;S.near=L.near=I.near=te.near,S.far=L.far=I.far=te.far,(A!==S.near||N!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),A=S.near,N=S.far);let me=te.parent,Pe=S.cameras;Y(S,me);for(let We=0;We<Pe.length;We++)Y(Pe[We],me);Pe.length===2?ae(S,I,L):S.projectionMatrix.copy(I.projectionMatrix),j(te,S,me)};function j(te,me,Pe){Pe===null?te.matrix.copy(me.matrixWorld):(te.matrix.copy(Pe.matrixWorld),te.matrix.invert(),te.matrix.multiply(me.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(me.projectionMatrix),te.projectionMatrixInverse.copy(me.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=sl*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(te){l=te,d!==null&&(d.fixedFoveation=te),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=te)};let re=null;function ue(te,me){if(u=me.getViewerPose(c||a),y=me,u!==null){let Pe=u.views;h!==null&&(e.setRenderTargetFramebuffer(p,h.framebuffer),e.setRenderTarget(p));let We=!1;Pe.length!==S.cameras.length&&(S.cameras.length=0,We=!0);for(let Xe=0;Xe<Pe.length;Xe++){let ht=Pe[Xe],mt=null;if(h!==null)mt=h.getViewport(ht);else{let Ct=f.getViewSubImage(d,ht);mt=Ct.viewport,Xe===0&&(e.setRenderTargetTextures(p,Ct.colorTexture,d.ignoreDepthValues?void 0:Ct.depthStencilTexture),e.setRenderTarget(p))}let qe=$[Xe];qe===void 0&&(qe=new Vn,qe.layers.enable(Xe),qe.viewport=new Ln,$[Xe]=qe),qe.matrix.fromArray(ht.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(ht.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(mt.x,mt.y,mt.width,mt.height),Xe===0&&(S.matrix.copy(qe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),We===!0&&S.cameras.push(qe)}}for(let Pe=0;Pe<M.length;Pe++){let We=_[Pe],Xe=M[Pe];We!==null&&Xe!==void 0&&Xe.update(We,me,c||a)}re&&re(te,me),me.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:me}),y=null}let fe=new hu;fe.setAnimationLoop(ue),this.setAnimationLoop=function(te){re=te},this.dispose=function(){}}};function B0(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,cu(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,M,_,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),f(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&h(g,p,T)):p.isMeshMatcapMaterial?(r(g,p),y(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),v(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,M,_):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===$n&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===$n&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let M=e.get(p).envMap;if(M&&(g.envMap.value=M,g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;let _=i._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*_,t(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,M,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=_*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),e.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function h(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$n&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function y(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){let M=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function k0(i,e,t,n){let s={},r={},a=[],o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,_){let T=_.program;n.uniformBlockBinding(M,T)}function c(M,_){let T=s[M.id];T===void 0&&(y(M),T=u(M),s[M.id]=T,M.addEventListener("dispose",g));let O=_.program;n.updateUBOMapping(M,O);let I=e.render.frame;r[M.id]!==I&&(d(M),r[M.id]=I)}function u(M){let _=f();M.__bindingPointIndex=_;let T=i.createBuffer(),O=M.__size,I=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,O,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,T),T}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let _=s[M.id],T=M.uniforms,O=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let I=0,L=T.length;I<L;I++){let $=Array.isArray(T[I])?T[I]:[T[I]];for(let S=0,A=$.length;S<A;S++){let N=$[S];if(h(N,I,S,O)===!0){let B=N.__offset,J=Array.isArray(N.value)?N.value:[N.value],P=0;for(let V=0;V<J.length;V++){let D=J[V],ae=v(D);typeof D=="number"||typeof D=="boolean"?(N.__data[0]=D,i.bufferSubData(i.UNIFORM_BUFFER,B+P,N.__data)):D.isMatrix3?(N.__data[0]=D.elements[0],N.__data[1]=D.elements[1],N.__data[2]=D.elements[2],N.__data[3]=0,N.__data[4]=D.elements[3],N.__data[5]=D.elements[4],N.__data[6]=D.elements[5],N.__data[7]=0,N.__data[8]=D.elements[6],N.__data[9]=D.elements[7],N.__data[10]=D.elements[8],N.__data[11]=0):(D.toArray(N.__data,P),P+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(M,_,T,O){let I=M.value,L=_+"_"+T;if(O[L]===void 0)return typeof I=="number"||typeof I=="boolean"?O[L]=I:O[L]=I.clone(),!0;{let $=O[L];if(typeof I=="number"||typeof I=="boolean"){if($!==I)return O[L]=I,!0}else if($.equals(I)===!1)return $.copy(I),!0}return!1}function y(M){let _=M.uniforms,T=0,O=16;for(let L=0,$=_.length;L<$;L++){let S=Array.isArray(_[L])?_[L]:[_[L]];for(let A=0,N=S.length;A<N;A++){let B=S[A],J=Array.isArray(B.value)?B.value:[B.value];for(let P=0,V=J.length;P<V;P++){let D=J[P],ae=v(D),Y=T%O;Y!==0&&O-Y<ae.boundary&&(T+=O-Y),B.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=T,T+=ae.storage}}}let I=T%O;return I>0&&(T+=O-I),M.__size=T,M.__cache={},this}function v(M){let _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function g(M){let _=M.target;_.removeEventListener("dispose",g);let T=a.indexOf(_.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Ar=class{constructor(e={}){let{canvas:t=Yd(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let h=new Uint32Array(4),y=new Int32Array(4),v=null,g=null,p=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Dn,this._useLegacyLights=!1,this.toneMapping=Yi,this.toneMappingExposure=1;let _=this,T=!1,O=0,I=0,L=null,$=-1,S=null,A=new Ln,N=new Ln,B=null,J=new _t(0),P=0,V=t.width,D=t.height,ae=1,Y=null,j=null,re=new Ln(0,0,V,D),ue=new Ln(0,0,V,D),fe=!1,te=new wr,me=!1,Pe=!1,We=null,Xe=new Mn,ht=new Be,mt=new F,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ct(){return L===null?ae:1}let Z=n;function rn(E,G){for(let Q=0;Q<E.length;Q++){let ne=E[Q],W=t.getContext(ne,G);if(W!==null)return W}return null}try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Wl}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",U,!1),t.addEventListener("webglcontextcreationerror",Le,!1),Z===null){let G=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&G.shift(),Z=rn(G,E),Z===null)throw rn(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Z.getShaderPrecisionFormat===void 0&&(Z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Qe,lt,$e,Yt,xt,C,b,K,Ee,ye,Te,Ke,Ie,ke,st,ut,ce,dt,it,pt,Je,Fe,et,Lt;function ze(){Qe=new sg(Z),lt=new jm(Z,Qe,e),Qe.init(lt),Fe=new O0(Z,Qe,lt),$e=new U0(Z,Qe,lt),Yt=new og(Z),xt=new b0,C=new N0(Z,Qe,$e,xt,lt,Fe,Yt),b=new eg(_),K=new ig(_),Ee=new mf(Z,lt),et=new Km(Z,Qe,Ee,lt),ye=new rg(Z,Ee,Yt,et),Te=new ug(Z,ye,Ee,Yt),it=new hg(Z,lt,C),ut=new Qm(xt),Ke=new M0(_,b,K,Qe,lt,et,ut),Ie=new B0(_,xt),ke=new E0,st=new P0(Qe,lt),dt=new Zm(_,b,K,$e,Te,d,l),ce=new D0(_,Te,lt),Lt=new k0(Z,Yt,lt,$e),pt=new Jm(Z,Qe,Yt,lt),Je=new ag(Z,Qe,Yt,lt),Yt.programs=Ke.programs,_.capabilities=lt,_.extensions=Qe,_.properties=xt,_.renderLists=ke,_.shadowMap=ce,_.state=$e,_.info=Yt}ze();let Ue=new _l(_,Z);this.xr=Ue,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){let E=Qe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Qe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(E){E!==void 0&&(ae=E,this.setSize(V,D,!1))},this.getSize=function(E){return E.set(V,D)},this.setSize=function(E,G,Q=!0){if(Ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=E,D=G,t.width=Math.floor(E*ae),t.height=Math.floor(G*ae),Q===!0&&(t.style.width=E+"px",t.style.height=G+"px"),this.setViewport(0,0,E,G)},this.getDrawingBufferSize=function(E){return E.set(V*ae,D*ae).floor()},this.setDrawingBufferSize=function(E,G,Q){V=E,D=G,ae=Q,t.width=Math.floor(E*Q),t.height=Math.floor(G*Q),this.setViewport(0,0,E,G)},this.getCurrentViewport=function(E){return E.copy(A)},this.getViewport=function(E){return E.copy(re)},this.setViewport=function(E,G,Q,ne){E.isVector4?re.set(E.x,E.y,E.z,E.w):re.set(E,G,Q,ne),$e.viewport(A.copy(re).multiplyScalar(ae).floor())},this.getScissor=function(E){return E.copy(ue)},this.setScissor=function(E,G,Q,ne){E.isVector4?ue.set(E.x,E.y,E.z,E.w):ue.set(E,G,Q,ne),$e.scissor(N.copy(ue).multiplyScalar(ae).floor())},this.getScissorTest=function(){return fe},this.setScissorTest=function(E){$e.setScissorTest(fe=E)},this.setOpaqueSort=function(E){Y=E},this.setTransparentSort=function(E){j=E},this.getClearColor=function(E){return E.copy(dt.getClearColor())},this.setClearColor=function(){dt.setClearColor.apply(dt,arguments)},this.getClearAlpha=function(){return dt.getClearAlpha()},this.setClearAlpha=function(){dt.setClearAlpha.apply(dt,arguments)},this.clear=function(E=!0,G=!0,Q=!0){let ne=0;if(E){let W=!1;if(L!==null){let Oe=L.texture.format;W=Oe===nu||Oe===tu||Oe===eu}if(W){let Oe=L.texture.type,Ze=Oe===$i||Oe===Wi||Oe===ql||Oe===us||Oe===jh||Oe===Qh,Ve=dt.getClearColor(),ct=dt.getClearAlpha(),At=Ve.r,gt=Ve.g,yt=Ve.b;Ze?(h[0]=At,h[1]=gt,h[2]=yt,h[3]=ct,Z.clearBufferuiv(Z.COLOR,0,h)):(y[0]=At,y[1]=gt,y[2]=yt,y[3]=ct,Z.clearBufferiv(Z.COLOR,0,y))}else ne|=Z.COLOR_BUFFER_BIT}G&&(ne|=Z.DEPTH_BUFFER_BIT),Q&&(ne|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",U,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),ke.dispose(),st.dispose(),xt.dispose(),b.dispose(),K.dispose(),Te.dispose(),et.dispose(),Lt.dispose(),Ke.dispose(),Ue.dispose(),Ue.removeEventListener("sessionstart",wt),Ue.removeEventListener("sessionend",vt),We&&(We.dispose(),We=null),en.stop()};function ge(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let E=Yt.autoReset,G=ce.enabled,Q=ce.autoUpdate,ne=ce.needsUpdate,W=ce.type;ze(),Yt.autoReset=E,ce.enabled=G,ce.autoUpdate=Q,ce.needsUpdate=ne,ce.type=W}function Le(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function De(E){let G=E.target;G.removeEventListener("dispose",De),nt(G)}function nt(E){Ye(E),xt.remove(E)}function Ye(E){let G=xt.get(E).programs;G!==void 0&&(G.forEach(function(Q){Ke.releaseProgram(Q)}),E.isShaderMaterial&&Ke.releaseShaderCache(E))}this.renderBufferDirect=function(E,G,Q,ne,W,Oe){G===null&&(G=qe);let Ze=W.isMesh&&W.matrixWorld.determinant()<0,Ve=ir(E,G,Q,ne,W);$e.setMaterial(ne,Ze);let ct=Q.index,At=1;if(ne.wireframe===!0){if(ct=ye.getWireframeAttribute(Q),ct===void 0)return;At=2}let gt=Q.drawRange,yt=Q.attributes.position,ln=gt.start*At,tn=(gt.start+gt.count)*At;Oe!==null&&(ln=Math.max(ln,Oe.start*At),tn=Math.min(tn,(Oe.start+Oe.count)*At)),ct!==null?(ln=Math.max(ln,0),tn=Math.min(tn,ct.count)):yt!=null&&(ln=Math.max(ln,0),tn=Math.min(tn,yt.count));let _n=tn-ln;if(_n<0||_n===1/0)return;et.setup(W,ne,Ve,Q,ct);let ci,Zt=pt;if(ct!==null&&(ci=Ee.get(ct),Zt=Je,Zt.setIndex(ci)),W.isMesh)ne.wireframe===!0?($e.setLineWidth(ne.wireframeLinewidth*Ct()),Zt.setMode(Z.LINES)):Zt.setMode(Z.TRIANGLES);else if(W.isLine){let St=ne.linewidth;St===void 0&&(St=1),$e.setLineWidth(St*Ct()),W.isLineSegments?Zt.setMode(Z.LINES):W.isLineLoop?Zt.setMode(Z.LINE_LOOP):Zt.setMode(Z.LINE_STRIP)}else W.isPoints?Zt.setMode(Z.POINTS):W.isSprite&&Zt.setMode(Z.TRIANGLES);if(W.isBatchedMesh)Zt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)Zt.renderInstances(ln,_n,W.count);else if(Q.isInstancedBufferGeometry){let St=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,kn=Math.min(Q.instanceCount,St);Zt.renderInstances(ln,_n,kn)}else Zt.render(ln,_n)};function Pt(E,G,Q){E.transparent===!0&&E.side===gn&&E.forceSinglePass===!1?(E.side=$n,E.needsUpdate=!0,ts(E,G,Q),E.side=Zi,E.needsUpdate=!0,ts(E,G,Q),E.side=gn):ts(E,G,Q)}this.compile=function(E,G,Q=null){Q===null&&(Q=E),g=st.get(Q),g.init(),M.push(g),Q.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),E!==Q&&E.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),g.setupLights(_._useLegacyLights);let ne=new Set;return E.traverse(function(W){let Oe=W.material;if(Oe)if(Array.isArray(Oe))for(let Ze=0;Ze<Oe.length;Ze++){let Ve=Oe[Ze];Pt(Ve,Q,W),ne.add(Ve)}else Pt(Oe,Q,W),ne.add(Oe)}),M.pop(),g=null,ne},this.compileAsync=function(E,G,Q=null){let ne=this.compile(E,G,Q);return new Promise(W=>{function Oe(){if(ne.forEach(function(Ze){xt.get(Ze).currentProgram.isReady()&&ne.delete(Ze)}),ne.size===0){W(E);return}setTimeout(Oe,10)}Qe.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let Ut=null;function Nt(E){Ut&&Ut(E)}function wt(){en.stop()}function vt(){en.start()}let en=new hu;en.setAnimationLoop(Nt),typeof self<"u"&&en.setContext(self),this.setAnimationLoop=function(E){Ut=E,Ue.setAnimationLoop(E),E===null?en.stop():en.start()},Ue.addEventListener("sessionstart",wt),Ue.addEventListener("sessionend",vt),this.render=function(E,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Ue.enabled===!0&&Ue.isPresenting===!0&&(Ue.cameraAutoUpdate===!0&&Ue.updateCamera(G),G=Ue.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,G,L),g=st.get(E,M.length),g.init(),M.push(g),Xe.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),te.setFromProjectionMatrix(Xe),Pe=this.localClippingEnabled,me=ut.init(this.clippingPlanes,Pe),v=ke.get(E,p.length),v.init(),p.push(v),an(E,G,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(Y,j),this.info.render.frame++,me===!0&&ut.beginShadows();let Q=g.state.shadowsArray;if(ce.render(Q,E,G),me===!0&&ut.endShadows(),this.info.autoReset===!0&&this.info.reset(),dt.render(v,E),g.setupLights(_._useLegacyLights),G.isArrayCamera){let ne=G.cameras;for(let W=0,Oe=ne.length;W<Oe;W++){let Ze=ne[W];Bn(v,E,Ze,Ze.viewport)}}else Bn(v,E,G);L!==null&&(C.updateMultisampleRenderTarget(L),C.updateRenderTargetMipmap(L)),E.isScene===!0&&E.onAfterRender(_,E,G),et.resetDefaultState(),$=-1,S=null,M.pop(),M.length>0?g=M[M.length-1]:g=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function an(E,G,Q,ne){if(E.visible===!1)return;if(E.layers.test(G.layers)){if(E.isGroup)Q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(G);else if(E.isLight)g.pushLight(E),E.castShadow&&g.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||te.intersectsSprite(E)){ne&&mt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Xe);let Ze=Te.update(E),Ve=E.material;Ve.visible&&v.push(E,Ze,Ve,Q,mt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||te.intersectsObject(E))){let Ze=Te.update(E),Ve=E.material;if(ne&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),mt.copy(E.boundingSphere.center)):(Ze.boundingSphere===null&&Ze.computeBoundingSphere(),mt.copy(Ze.boundingSphere.center)),mt.applyMatrix4(E.matrixWorld).applyMatrix4(Xe)),Array.isArray(Ve)){let ct=Ze.groups;for(let At=0,gt=ct.length;At<gt;At++){let yt=ct[At],ln=Ve[yt.materialIndex];ln&&ln.visible&&v.push(E,Ze,ln,Q,mt.z,yt)}}else Ve.visible&&v.push(E,Ze,Ve,Q,mt.z,null)}}let Oe=E.children;for(let Ze=0,Ve=Oe.length;Ze<Ve;Ze++)an(Oe[Ze],G,Q,ne)}function Bn(E,G,Q,ne){let W=E.opaque,Oe=E.transmissive,Ze=E.transparent;g.setupLightsView(Q),me===!0&&ut.setGlobalState(_.clippingPlanes,Q),Oe.length>0&&Jn(W,Oe,G,Q),ne&&$e.viewport(A.copy(ne)),W.length>0&&yi(W,G,Q),Oe.length>0&&yi(Oe,G,Q),Ze.length>0&&yi(Ze,G,Q),$e.buffers.depth.setTest(!0),$e.buffers.depth.setMask(!0),$e.buffers.color.setMask(!0),$e.setPolygonOffset(!1)}function Jn(E,G,Q,ne){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;let Oe=lt.isWebGL2;We===null&&(We=new Ii(1,1,{generateMipmaps:!0,type:Qe.has("EXT_color_buffer_half_float")?Sr:$i,minFilter:br,samples:Oe?4:0})),_.getDrawingBufferSize(ht),Oe?We.setSize(ht.x,ht.y):We.setSize(rl(ht.x),rl(ht.y));let Ze=_.getRenderTarget();_.setRenderTarget(We),_.getClearColor(J),P=_.getClearAlpha(),P<1&&_.setClearColor(16777215,.5),_.clear();let Ve=_.toneMapping;_.toneMapping=Yi,yi(E,Q,ne),C.updateMultisampleRenderTarget(We),C.updateRenderTargetMipmap(We);let ct=!1;for(let At=0,gt=G.length;At<gt;At++){let yt=G[At],ln=yt.object,tn=yt.geometry,_n=yt.material,ci=yt.group;if(_n.side===gn&&ln.layers.test(ne.layers)){let Zt=_n.side;_n.side=$n,_n.needsUpdate=!0,li(ln,Q,ne,tn,_n,ci),_n.side=Zt,_n.needsUpdate=!0,ct=!0}}ct===!0&&(C.updateMultisampleRenderTarget(We),C.updateRenderTargetMipmap(We)),_.setRenderTarget(Ze),_.setClearColor(J,P),_.toneMapping=Ve}function yi(E,G,Q){let ne=G.isScene===!0?G.overrideMaterial:null;for(let W=0,Oe=E.length;W<Oe;W++){let Ze=E[W],Ve=Ze.object,ct=Ze.geometry,At=ne===null?Ze.material:ne,gt=Ze.group;Ve.layers.test(Q.layers)&&li(Ve,G,Q,ct,At,gt)}}function li(E,G,Q,ne,W,Oe){E.onBeforeRender(_,G,Q,ne,W,Oe),E.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(_,G,Q,ne,E,Oe),W.transparent===!0&&W.side===gn&&W.forceSinglePass===!1?(W.side=$n,W.needsUpdate=!0,_.renderBufferDirect(Q,G,ne,W,E,Oe),W.side=Zi,W.needsUpdate=!0,_.renderBufferDirect(Q,G,ne,W,E,Oe),W.side=gn):_.renderBufferDirect(Q,G,ne,W,E,Oe),E.onAfterRender(_,G,Q,ne,W,Oe)}function ts(E,G,Q){G.isScene!==!0&&(G=qe);let ne=xt.get(E),W=g.state.lights,Oe=g.state.shadowsArray,Ze=W.state.version,Ve=Ke.getParameters(E,W.state,Oe,G,Q),ct=Ke.getProgramCacheKey(Ve),At=ne.programs;ne.environment=E.isMeshStandardMaterial?G.environment:null,ne.fog=G.fog,ne.envMap=(E.isMeshStandardMaterial?K:b).get(E.envMap||ne.environment),At===void 0&&(E.addEventListener("dispose",De),At=new Map,ne.programs=At);let gt=At.get(ct);if(gt!==void 0){if(ne.currentProgram===gt&&ne.lightsStateVersion===Ze)return Ui(E,Ve),gt}else Ve.uniforms=Ke.getUniforms(E),E.onBuild(Q,Ve,_),E.onBeforeCompile(Ve,_),gt=Ke.acquireProgram(Ve,ct),At.set(ct,gt),ne.uniforms=Ve.uniforms;let yt=ne.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(yt.clippingPlanes=ut.uniform),Ui(E,Ve),ne.needsLights=ro(E),ne.lightsStateVersion=Ze,ne.needsLights&&(yt.ambientLightColor.value=W.state.ambient,yt.lightProbe.value=W.state.probe,yt.directionalLights.value=W.state.directional,yt.directionalLightShadows.value=W.state.directionalShadow,yt.spotLights.value=W.state.spot,yt.spotLightShadows.value=W.state.spotShadow,yt.rectAreaLights.value=W.state.rectArea,yt.ltc_1.value=W.state.rectAreaLTC1,yt.ltc_2.value=W.state.rectAreaLTC2,yt.pointLights.value=W.state.point,yt.pointLightShadows.value=W.state.pointShadow,yt.hemisphereLights.value=W.state.hemi,yt.directionalShadowMap.value=W.state.directionalShadowMap,yt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,yt.spotShadowMap.value=W.state.spotShadowMap,yt.spotLightMatrix.value=W.state.spotLightMatrix,yt.spotLightMap.value=W.state.spotLightMap,yt.pointShadowMap.value=W.state.pointShadowMap,yt.pointShadowMatrix.value=W.state.pointShadowMatrix),ne.currentProgram=gt,ne.uniformsList=null,gt}function on(E){if(E.uniformsList===null){let G=E.currentProgram.getUniforms();E.uniformsList=Xs.seqWithValue(G.seq,E.uniforms)}return E.uniformsList}function Ui(E,G){let Q=xt.get(E);Q.outputColorSpace=G.outputColorSpace,Q.batching=G.batching,Q.instancing=G.instancing,Q.instancingColor=G.instancingColor,Q.skinning=G.skinning,Q.morphTargets=G.morphTargets,Q.morphNormals=G.morphNormals,Q.morphColors=G.morphColors,Q.morphTargetsCount=G.morphTargetsCount,Q.numClippingPlanes=G.numClippingPlanes,Q.numIntersection=G.numClipIntersection,Q.vertexAlphas=G.vertexAlphas,Q.vertexTangents=G.vertexTangents,Q.toneMapping=G.toneMapping}function ir(E,G,Q,ne,W){G.isScene!==!0&&(G=qe),C.resetTextureUnits();let Oe=G.fog,Ze=ne.isMeshStandardMaterial?G.environment:null,Ve=L===null?_.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Pi,ct=(ne.isMeshStandardMaterial?K:b).get(ne.envMap||Ze),At=ne.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,gt=!!Q.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),yt=!!Q.morphAttributes.position,ln=!!Q.morphAttributes.normal,tn=!!Q.morphAttributes.color,_n=Yi;ne.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(_n=_.toneMapping);let ci=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Zt=ci!==void 0?ci.length:0,St=xt.get(ne),kn=g.state.lights;if(me===!0&&(Pe===!0||E!==S)){let Xn=E===S&&ne.id===$;ut.setState(ne,E,Xn)}let Kt=!1;ne.version===St.__version?(St.needsLights&&St.lightsStateVersion!==kn.state.version||St.outputColorSpace!==Ve||W.isBatchedMesh&&St.batching===!1||!W.isBatchedMesh&&St.batching===!0||W.isInstancedMesh&&St.instancing===!1||!W.isInstancedMesh&&St.instancing===!0||W.isSkinnedMesh&&St.skinning===!1||!W.isSkinnedMesh&&St.skinning===!0||W.isInstancedMesh&&St.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&St.instancingColor===!1&&W.instanceColor!==null||St.envMap!==ct||ne.fog===!0&&St.fog!==Oe||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==ut.numPlanes||St.numIntersection!==ut.numIntersection)||St.vertexAlphas!==At||St.vertexTangents!==gt||St.morphTargets!==yt||St.morphNormals!==ln||St.morphColors!==tn||St.toneMapping!==_n||lt.isWebGL2===!0&&St.morphTargetsCount!==Zt)&&(Kt=!0):(Kt=!0,St.__version=ne.version);let ei=St.currentProgram;Kt===!0&&(ei=ts(ne,G,W));let sr=!1,ns=!1,is=!1,bn=ei.getUniforms(),_i=St.uniforms;if($e.useProgram(ei.program)&&(sr=!0,ns=!0,is=!0),ne.id!==$&&($=ne.id,ns=!0),sr||S!==E){bn.setValue(Z,"projectionMatrix",E.projectionMatrix),bn.setValue(Z,"viewMatrix",E.matrixWorldInverse);let Xn=bn.map.cameraPosition;Xn!==void 0&&Xn.setValue(Z,mt.setFromMatrixPosition(E.matrixWorld)),lt.logarithmicDepthBuffer&&bn.setValue(Z,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&bn.setValue(Z,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,ns=!0,is=!0)}if(W.isSkinnedMesh){bn.setOptional(Z,W,"bindMatrix"),bn.setOptional(Z,W,"bindMatrixInverse");let Xn=W.skeleton;Xn&&(lt.floatVertexTextures?(Xn.boneTexture===null&&Xn.computeBoneTexture(),bn.setValue(Z,"boneTexture",Xn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}W.isBatchedMesh&&(bn.setOptional(Z,W,"batchingTexture"),bn.setValue(Z,"batchingTexture",W._matricesTexture,C));let Ft=Q.morphAttributes;if((Ft.position!==void 0||Ft.normal!==void 0||Ft.color!==void 0&&lt.isWebGL2===!0)&&it.update(W,Q,ei),(ns||St.receiveShadow!==W.receiveShadow)&&(St.receiveShadow=W.receiveShadow,bn.setValue(Z,"receiveShadow",W.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(_i.envMap.value=ct,_i.flipEnvMap.value=ct.isCubeTexture&&ct.isRenderTargetTexture===!1?-1:1),ns&&(bn.setValue(Z,"toneMappingExposure",_.toneMappingExposure),St.needsLights&&so(_i,is),Oe&&ne.fog===!0&&Ie.refreshFogUniforms(_i,Oe),Ie.refreshMaterialUniforms(_i,ne,ae,D,We),Xs.upload(Z,on(St),_i,C)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Xs.upload(Z,on(St),_i,C),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&bn.setValue(Z,"center",W.center),bn.setValue(Z,"modelViewMatrix",W.modelViewMatrix),bn.setValue(Z,"normalMatrix",W.normalMatrix),bn.setValue(Z,"modelMatrix",W.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){let Xn=ne.uniformsGroups;for(let Ht=0,vs=Xn.length;Ht<vs;Ht++)if(lt.isWebGL2){let rr=Xn[Ht];Lt.update(rr,ei),Lt.bind(rr,ei)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ei}function so(E,G){E.ambientLightColor.needsUpdate=G,E.lightProbe.needsUpdate=G,E.directionalLights.needsUpdate=G,E.directionalLightShadows.needsUpdate=G,E.pointLights.needsUpdate=G,E.pointLightShadows.needsUpdate=G,E.spotLights.needsUpdate=G,E.spotLightShadows.needsUpdate=G,E.rectAreaLights.needsUpdate=G,E.hemisphereLights.needsUpdate=G}function ro(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(E,G,Q){xt.get(E.texture).__webglTexture=G,xt.get(E.depthTexture).__webglTexture=Q;let ne=xt.get(E);ne.__hasExternalTextures=!0,ne.__hasExternalTextures&&(ne.__autoAllocateDepthBuffer=Q===void 0,ne.__autoAllocateDepthBuffer||Qe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,G){let Q=xt.get(E);Q.__webglFramebuffer=G,Q.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(E,G=0,Q=0){L=E,O=G,I=Q;let ne=!0,W=null,Oe=!1,Ze=!1;if(E){let ct=xt.get(E);ct.__useDefaultFramebuffer!==void 0?($e.bindFramebuffer(Z.FRAMEBUFFER,null),ne=!1):ct.__webglFramebuffer===void 0?C.setupRenderTarget(E):ct.__hasExternalTextures&&C.rebindTextures(E,xt.get(E.texture).__webglTexture,xt.get(E.depthTexture).__webglTexture);let At=E.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(Ze=!0);let gt=xt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(gt[G])?W=gt[G][Q]:W=gt[G],Oe=!0):lt.isWebGL2&&E.samples>0&&C.useMultisampledRTT(E)===!1?W=xt.get(E).__webglMultisampledFramebuffer:Array.isArray(gt)?W=gt[Q]:W=gt,A.copy(E.viewport),N.copy(E.scissor),B=E.scissorTest}else A.copy(re).multiplyScalar(ae).floor(),N.copy(ue).multiplyScalar(ae).floor(),B=fe;if($e.bindFramebuffer(Z.FRAMEBUFFER,W)&&lt.drawBuffers&&ne&&$e.drawBuffers(E,W),$e.viewport(A),$e.scissor(N),$e.setScissorTest(B),Oe){let ct=xt.get(E.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+G,ct.__webglTexture,Q)}else if(Ze){let ct=xt.get(E.texture),At=G||0;Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,ct.__webglTexture,Q||0,At)}$=-1},this.readRenderTargetPixels=function(E,G,Q,ne,W,Oe,Ze){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=xt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ze!==void 0&&(Ve=Ve[Ze]),Ve){$e.bindFramebuffer(Z.FRAMEBUFFER,Ve);try{let ct=E.texture,At=ct.format,gt=ct.type;if(At!==mi&&Fe.convert(At)!==Z.getParameter(Z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let yt=gt===Sr&&(Qe.has("EXT_color_buffer_half_float")||lt.isWebGL2&&Qe.has("EXT_color_buffer_float"));if(gt!==$i&&Fe.convert(gt)!==Z.getParameter(Z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(gt===Xi&&(lt.isWebGL2||Qe.has("OES_texture_float")||Qe.has("WEBGL_color_buffer_float")))&&!yt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=E.width-ne&&Q>=0&&Q<=E.height-W&&Z.readPixels(G,Q,ne,W,Fe.convert(At),Fe.convert(gt),Oe)}finally{let ct=L!==null?xt.get(L).__webglFramebuffer:null;$e.bindFramebuffer(Z.FRAMEBUFFER,ct)}}},this.copyFramebufferToTexture=function(E,G,Q=0){let ne=Math.pow(2,-Q),W=Math.floor(G.image.width*ne),Oe=Math.floor(G.image.height*ne);C.setTexture2D(G,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,Q,0,0,E.x,E.y,W,Oe),$e.unbindTexture()},this.copyTextureToTexture=function(E,G,Q,ne=0){let W=G.image.width,Oe=G.image.height,Ze=Fe.convert(Q.format),Ve=Fe.convert(Q.type);C.setTexture2D(Q,0),Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,Q.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,Q.unpackAlignment),G.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,ne,E.x,E.y,W,Oe,Ze,Ve,G.image.data):G.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,ne,E.x,E.y,G.mipmaps[0].width,G.mipmaps[0].height,Ze,G.mipmaps[0].data):Z.texSubImage2D(Z.TEXTURE_2D,ne,E.x,E.y,Ze,Ve,G.image),ne===0&&Q.generateMipmaps&&Z.generateMipmap(Z.TEXTURE_2D),$e.unbindTexture()},this.copyTextureToTexture3D=function(E,G,Q,ne,W=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Oe=E.max.x-E.min.x+1,Ze=E.max.y-E.min.y+1,Ve=E.max.z-E.min.z+1,ct=Fe.convert(ne.format),At=Fe.convert(ne.type),gt;if(ne.isData3DTexture)C.setTexture3D(ne,0),gt=Z.TEXTURE_3D;else if(ne.isDataArrayTexture||ne.isCompressedArrayTexture)C.setTexture2DArray(ne,0),gt=Z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,ne.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,ne.unpackAlignment);let yt=Z.getParameter(Z.UNPACK_ROW_LENGTH),ln=Z.getParameter(Z.UNPACK_IMAGE_HEIGHT),tn=Z.getParameter(Z.UNPACK_SKIP_PIXELS),_n=Z.getParameter(Z.UNPACK_SKIP_ROWS),ci=Z.getParameter(Z.UNPACK_SKIP_IMAGES),Zt=Q.isCompressedTexture?Q.mipmaps[W]:Q.image;Z.pixelStorei(Z.UNPACK_ROW_LENGTH,Zt.width),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Zt.height),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,E.min.x),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,E.min.y),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,E.min.z),Q.isDataTexture||Q.isData3DTexture?Z.texSubImage3D(gt,W,G.x,G.y,G.z,Oe,Ze,Ve,ct,At,Zt.data):Q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Z.compressedTexSubImage3D(gt,W,G.x,G.y,G.z,Oe,Ze,Ve,ct,Zt.data)):Z.texSubImage3D(gt,W,G.x,G.y,G.z,Oe,Ze,Ve,ct,At,Zt),Z.pixelStorei(Z.UNPACK_ROW_LENGTH,yt),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,ln),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,tn),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,_n),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,ci),W===0&&ne.generateMipmaps&&Z.generateMipmap(gt),$e.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?C.setTextureCube(E,0):E.isData3DTexture?C.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?C.setTexture2DArray(E,0):C.setTexture2D(E,0),$e.unbindTexture()},this.resetState=function(){O=0,I=0,L=null,$e.reset(),et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Yl?"display-p3":"srgb",t.unpackColorSpace=Gt.workingColorSpace===Za?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Dn?fs:su}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===fs?Dn:Pi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},vl=class extends Ar{};vl.prototype.isWebGL1Renderer=!0;var Na=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new _t(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Oa=class extends Gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var Rr=class extends ji{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Nh=new F,Oh=new F,Fh=new Mn,Yo=new Er,ua=new Zs,Ml=class extends Gn{constructor(e=new Kn,t=new Rr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Nh.fromBufferAttribute(t,s-1),Oh.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Nh.distanceTo(Oh);e.setAttribute("lineDistance",new dn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ua.copy(n.boundingSphere),ua.applyMatrix4(s),ua.radius+=r,e.ray.intersectsSphere(ua)===!1)return;Fh.copy(s).invert(),Yo.copy(e.ray).applyMatrix4(Fh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new F,u=new F,f=new F,d=new F,h=this.isLineSegments?2:1,y=n.index,g=n.attributes.position;if(y!==null){let p=Math.max(0,a.start),M=Math.min(y.count,a.start+a.count);for(let _=p,T=M-1;_<T;_+=h){let O=y.getX(_),I=y.getX(_+1);if(c.fromBufferAttribute(g,O),u.fromBufferAttribute(g,I),Yo.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);let $=e.ray.origin.distanceTo(d);$<e.near||$>e.far||t.push({distance:$,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,a.start),M=Math.min(g.count,a.start+a.count);for(let _=p,T=M-1;_<T;_+=h){if(c.fromBufferAttribute(g,_),u.fromBufferAttribute(g,_+1),Yo.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);let I=e.ray.origin.distanceTo(d);I<e.near||I>e.far||t.push({distance:I,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},Bh=new F,kh=new F,Fa=class extends Ml{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Bh.fromBufferAttribute(t,s),kh.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Bh.distanceTo(kh);e.setAttribute("lineDistance",new dn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ba=class extends ai{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},oi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],d=n[s+1]-u,h=(a-u)/d;return(s+h)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Be:new F);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new F,s=[],r=[],a=[],o=new F,l=new Mn;for(let h=0;h<=e;h++){let y=h/e;s[h]=this.getTangentAt(y,new F)}r[0]=new F,a[0]=new F;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let h=1;h<=e;h++){if(r[h]=r[h-1].clone(),a[h]=a[h-1].clone(),o.crossVectors(s[h-1],s[h]),o.length()>Number.EPSILON){o.normalize();let y=Math.acos(Fn(s[h-1].dot(s[h]),-1,1));r[h].applyMatrix4(l.makeRotationAxis(o,y))}a[h].crossVectors(s[h],r[h])}if(t===!0){let h=Math.acos(Fn(r[0].dot(r[e]),-1,1));h/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(h=-h);for(let y=1;y<=e;y++)r[y].applyMatrix4(l.makeRotationAxis(s[y],h*y)),a[y].crossVectors(s[y],r[y])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Cr=class extends oi{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let n=t||new Be,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,h=c-this.aY;l=d*u-h*f+this.aX,c=d*f+h*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},bl=class extends Cr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Zl(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,f){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,h=(o-a)/u-(l-a)/(u+f)+(l-o)/f;d*=u,h*=u,s(a,o,d,h)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var da=new F,$o=new Zl,Zo=new Zl,Ko=new Zl,Sl=class extends oi{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new F){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(da.subVectors(s[0],s[1]).add(s[0]),c=da);let f=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(da.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=da),this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?.5:.25,y=Math.pow(c.distanceToSquared(f),h),v=Math.pow(f.distanceToSquared(d),h),g=Math.pow(d.distanceToSquared(u),h);v<1e-4&&(v=1),y<1e-4&&(y=v),g<1e-4&&(g=v),$o.initNonuniformCatmullRom(c.x,f.x,d.x,u.x,y,v,g),Zo.initNonuniformCatmullRom(c.y,f.y,d.y,u.y,y,v,g),Ko.initNonuniformCatmullRom(c.z,f.z,d.z,u.z,y,v,g)}else this.curveType==="catmullrom"&&($o.initCatmullRom(c.x,f.x,d.x,u.x,this.tension),Zo.initCatmullRom(c.y,f.y,d.y,u.y,this.tension),Ko.initCatmullRom(c.z,f.z,d.z,u.z,this.tension));return n.set($o.calc(l),Zo.calc(l),Ko.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new F().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Hh(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function H0(i,e){let t=1-i;return t*t*e}function z0(i,e){return 2*(1-i)*i*e}function V0(i,e){return i*i*e}function yr(i,e,t,n){return H0(i,e)+z0(i,t)+V0(i,n)}function G0(i,e){let t=1-i;return t*t*t*e}function W0(i,e){let t=1-i;return 3*t*t*i*e}function X0(i,e){return 3*(1-i)*i*i*e}function q0(i,e){return i*i*i*e}function _r(i,e,t,n,s){return G0(i,e)+W0(i,t)+X0(i,n)+q0(i,s)}var ka=class extends oi{constructor(e=new Be,t=new Be,n=new Be,s=new Be){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Be){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(_r(e,s.x,r.x,a.x,o.x),_r(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},El=class extends oi{constructor(e=new F,t=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(_r(e,s.x,r.x,a.x,o.x),_r(e,s.y,r.y,a.y,o.y),_r(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ha=class extends oi{constructor(e=new Be,t=new Be){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Be){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Be){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Tl=class extends oi{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},za=class extends oi{constructor(e=new Be,t=new Be,n=new Be){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Be){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(yr(e,s.x,r.x,a.x),yr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wl=class extends oi{constructor(e=new F,t=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(yr(e,s.x,r.x,a.x),yr(e,s.y,r.y,a.y),yr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Va=class extends oi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Be){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(Hh(o,l.x,c.x,u.x,f.x),Hh(o,l.y,c.y,u.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Be().fromArray(s))}return this}},zh=Object.freeze({__proto__:null,ArcCurve:bl,CatmullRomCurve3:Sl,CubicBezierCurve:ka,CubicBezierCurve3:El,EllipseCurve:Cr,LineCurve:Ha,LineCurve3:Tl,QuadraticBezierCurve:za,QuadraticBezierCurve3:wl,SplineCurve:Va}),Al=class extends oi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zh[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new zh[s.type]().fromJSON(s))}return this}},Js=class extends Al{constructor(e){super(),this.type="Path",this.currentPoint=new Be,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ha(this.currentPoint.clone(),new Be(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new za(this.currentPoint.clone(),new Be(e,t),new Be(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new ka(this.currentPoint.clone(),new Be(e,t),new Be(n,s),new Be(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Va(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Cr(e,t,n,s,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var Qi=class i extends Kn{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],f=[],d=[],h=[],y=0,v=[],g=n/2,p=0;M(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new dn(f,3)),this.setAttribute("normal",new dn(d,3)),this.setAttribute("uv",new dn(h,2));function M(){let T=new F,O=new F,I=0,L=(t-e)/n;for(let $=0;$<=r;$++){let S=[],A=$/r,N=A*(t-e)+e;for(let B=0;B<=s;B++){let J=B/s,P=J*l+o,V=Math.sin(P),D=Math.cos(P);O.x=N*V,O.y=-A*n+g,O.z=N*D,f.push(O.x,O.y,O.z),T.set(V,L,D).normalize(),d.push(T.x,T.y,T.z),h.push(J,1-A),S.push(y++)}v.push(S)}for(let $=0;$<s;$++)for(let S=0;S<r;S++){let A=v[S][$],N=v[S+1][$],B=v[S+1][$+1],J=v[S][$+1];u.push(A,N,J),u.push(N,B,J),I+=6}c.addGroup(p,I,0),p+=I}function _(T){let O=y,I=new Be,L=new F,$=0,S=T===!0?e:t,A=T===!0?1:-1;for(let B=1;B<=s;B++)f.push(0,g*A,0),d.push(0,A,0),h.push(.5,.5),y++;let N=y;for(let B=0;B<=s;B++){let P=B/s*l+o,V=Math.cos(P),D=Math.sin(P);L.x=S*D,L.y=g*A,L.z=S*V,f.push(L.x,L.y,L.z),d.push(0,A,0),I.x=V*.5+.5,I.y=D*.5*A+.5,h.push(I.x,I.y),y++}for(let B=0;B<s;B++){let J=O+B,P=N+B;T===!0?u.push(P,P+1,J):u.push(P+1,P,J),$+=3}c.addGroup(p,$,T===!0?1:2),p+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},gi=class i extends Qi{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Rl=class i extends Kn{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new dn(r,3)),this.setAttribute("normal",new dn(r.slice(),3)),this.setAttribute("uv",new dn(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let _=new F,T=new F,O=new F;for(let I=0;I<t.length;I+=3)h(t[I+0],_),h(t[I+1],T),h(t[I+2],O),l(_,T,O,M)}function l(M,_,T,O){let I=O+1,L=[];for(let $=0;$<=I;$++){L[$]=[];let S=M.clone().lerp(T,$/I),A=_.clone().lerp(T,$/I),N=I-$;for(let B=0;B<=N;B++)B===0&&$===I?L[$][B]=S:L[$][B]=S.clone().lerp(A,B/N)}for(let $=0;$<I;$++)for(let S=0;S<2*(I-$)-1;S++){let A=Math.floor(S/2);S%2===0?(d(L[$][A+1]),d(L[$+1][A]),d(L[$][A])):(d(L[$][A+1]),d(L[$+1][A+1]),d(L[$+1][A]))}}function c(M){let _=new F;for(let T=0;T<r.length;T+=3)_.x=r[T+0],_.y=r[T+1],_.z=r[T+2],_.normalize().multiplyScalar(M),r[T+0]=_.x,r[T+1]=_.y,r[T+2]=_.z}function u(){let M=new F;for(let _=0;_<r.length;_+=3){M.x=r[_+0],M.y=r[_+1],M.z=r[_+2];let T=g(M)/2/Math.PI+.5,O=p(M)/Math.PI+.5;a.push(T,1-O)}y(),f()}function f(){for(let M=0;M<a.length;M+=6){let _=a[M+0],T=a[M+2],O=a[M+4],I=Math.max(_,T,O),L=Math.min(_,T,O);I>.9&&L<.1&&(_<.2&&(a[M+0]+=1),T<.2&&(a[M+2]+=1),O<.2&&(a[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function h(M,_){let T=M*3;_.x=e[T+0],_.y=e[T+1],_.z=e[T+2]}function y(){let M=new F,_=new F,T=new F,O=new F,I=new Be,L=new Be,$=new Be;for(let S=0,A=0;S<r.length;S+=9,A+=6){M.set(r[S+0],r[S+1],r[S+2]),_.set(r[S+3],r[S+4],r[S+5]),T.set(r[S+6],r[S+7],r[S+8]),I.set(a[A+0],a[A+1]),L.set(a[A+2],a[A+3]),$.set(a[A+4],a[A+5]),O.copy(M).add(_).add(T).divideScalar(3);let N=g(O);v(I,A+0,M,N),v(L,A+2,_,N),v($,A+4,T,N)}}function v(M,_,T,O){O<0&&M.x===1&&(a[_]=M.x-1),T.x===0&&T.z===0&&(a[_]=O/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},Ga=class i extends Rl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var js=class extends Js{constructor(e){super(e),this.uuid=er(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Js().fromJSON(s))}return this}},Y0={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=gu(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,u,f,d,h;if(n&&(r=j0(i,e,r,t)),i.length>80*t){o=c=i[0],l=u=i[1];for(let y=t;y<s;y+=t)f=i[y],d=i[y+1],f<o&&(o=f),d<l&&(l=d),f>c&&(c=f),d>u&&(u=d);h=Math.max(c-o,u-l),h=h!==0?32767/h:0}return Pr(r,a,t,o,l,h,0),a}};function gu(i,e,t,n,s){let r,a;if(s===cx(i,e,t,n)>0)for(r=e;r<t;r+=n)a=Vh(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=Vh(r,i[r],i[r+1],a);return a&&Ja(a,a.next)&&(Lr(a),a=a.next),a}function ms(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ja(t,t.next)||un(t.prev,t,t.next)===0)){if(Lr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Pr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&ix(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Z0(i,n,s,r):$0(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Lr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=K0(ms(i),e,t),Pr(i,e,t,n,s,r,2)):a===2&&J0(i,e,t,n,s,r):Pr(ms(i),e,t,n,s,r,1);break}}}function $0(i){let e=i.prev,t=i,n=i.next;if(un(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=s<r?s<a?s:a:r<a?r:a,f=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,h=o>l?o>c?o:c:l>c?l:c,y=n.next;for(;y!==e;){if(y.x>=u&&y.x<=d&&y.y>=f&&y.y<=h&&Vs(s,o,r,l,a,c,y.x,y.y)&&un(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function Z0(i,e,t,n){let s=i.prev,r=i,a=i.next;if(un(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,f=r.y,d=a.y,h=o<l?o<c?o:c:l<c?l:c,y=u<f?u<d?u:d:f<d?f:d,v=o>l?o>c?o:c:l>c?l:c,g=u>f?u>d?u:d:f>d?f:d,p=Cl(h,y,e,t,n),M=Cl(v,g,e,t,n),_=i.prevZ,T=i.nextZ;for(;_&&_.z>=p&&T&&T.z<=M;){if(_.x>=h&&_.x<=v&&_.y>=y&&_.y<=g&&_!==s&&_!==a&&Vs(o,u,l,f,c,d,_.x,_.y)&&un(_.prev,_,_.next)>=0||(_=_.prevZ,T.x>=h&&T.x<=v&&T.y>=y&&T.y<=g&&T!==s&&T!==a&&Vs(o,u,l,f,c,d,T.x,T.y)&&un(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;_&&_.z>=p;){if(_.x>=h&&_.x<=v&&_.y>=y&&_.y<=g&&_!==s&&_!==a&&Vs(o,u,l,f,c,d,_.x,_.y)&&un(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;T&&T.z<=M;){if(T.x>=h&&T.x<=v&&T.y>=y&&T.y<=g&&T!==s&&T!==a&&Vs(o,u,l,f,c,d,T.x,T.y)&&un(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function K0(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!Ja(s,r)&&xu(s,n,n.next,r)&&Ir(s,r)&&Ir(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Lr(n),Lr(n.next),n=i=r),n=n.next}while(n!==i);return ms(n)}function J0(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&ax(a,o)){let l=yu(a,o);a=ms(a,a.next),l=ms(l,l.next),Pr(a,e,t,n,s,r,0),Pr(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function j0(i,e,t,n){let s=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=gu(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(rx(c));for(s.sort(Q0),r=0;r<s.length;r++)t=ex(s[r],t);return t}function Q0(i,e){return i.x-e.x}function ex(i,e){let t=tx(i,e);if(!t)return e;let n=yu(t,i);return ms(n,n.next),ms(t,t.next)}function tx(i,e){let t=e,n=-1/0,s,r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,l=s.x,c=s.y,u=1/0,f;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Vs(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(f=Math.abs(a-t.y)/(r-t.x),Ir(t,i)&&(f<u||f===u&&(t.x>s.x||t.x===s.x&&nx(s,t)))&&(s=t,u=f)),t=t.next;while(t!==o);return s}function nx(i,e){return un(i.prev,i,e.prev)<0&&un(e.next,i,i.next)<0}function ix(i,e,t,n){let s=i;do s.z===0&&(s.z=Cl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,sx(s)}function sx(i){let e,t,n,s,r,a,o,l,c=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(a>1);return i}function Cl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function rx(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Vs(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function ax(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!ox(i,e)&&(Ir(i,e)&&Ir(e,i)&&lx(i,e)&&(un(i.prev,i,e.prev)||un(i,e.prev,e))||Ja(i,e)&&un(i.prev,i,i.next)>0&&un(e.prev,e,e.next)>0)}function un(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ja(i,e){return i.x===e.x&&i.y===e.y}function xu(i,e,t,n){let s=pa(un(i,e,t)),r=pa(un(i,e,n)),a=pa(un(t,n,i)),o=pa(un(t,n,e));return!!(s!==r&&a!==o||s===0&&fa(i,t,e)||r===0&&fa(i,n,e)||a===0&&fa(t,i,n)||o===0&&fa(t,e,n))}function fa(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function pa(i){return i>0?1:i<0?-1:0}function ox(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&xu(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ir(i,e){return un(i.prev,i,i.next)<0?un(i,e,i.next)>=0&&un(i,i.prev,e)>=0:un(i,e,i.prev)<0||un(i,i.next,e)<0}function lx(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function yu(i,e){let t=new Pl(i.i,i.x,i.y),n=new Pl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Vh(i,e,t,n){let s=new Pl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Lr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Pl(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function cx(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var vr=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Gh(e),Wh(n,e);let a=e.length;t.forEach(Gh);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Wh(n,t[l]);let o=Y0.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Gh(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Wh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Dr=class i extends Kn{constructor(e=new js([new Be(0,.5),new Be(-.5,-.5),new Be(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new dn(s,3)),this.setAttribute("normal",new dn(r,3)),this.setAttribute("uv",new dn(a,2));function c(u){let f=s.length/3,d=u.extractPoints(t),h=d.shape,y=d.holes;vr.isClockWise(h)===!1&&(h=h.reverse());for(let g=0,p=y.length;g<p;g++){let M=y[g];vr.isClockWise(M)===!0&&(y[g]=M.reverse())}let v=vr.triangulateShape(h,y);for(let g=0,p=y.length;g<p;g++){let M=y[g];h=h.concat(M)}for(let g=0,p=h.length;g<p;g++){let M=h[g];s.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let g=0,p=v.length;g<p;g++){let M=v[g],_=M[0]+f,T=M[1]+f,O=M[2]+f;n.push(_,T,O),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return hx(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function hx(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var bi=class i extends Kn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],f=new F,d=new F,h=[],y=[],v=[],g=[];for(let p=0;p<=n;p++){let M=[],_=p/n,T=0;p===0&&a===0?T=.5/t:p===n&&l===Math.PI&&(T=-.5/t);for(let O=0;O<=t;O++){let I=O/t;f.x=-e*Math.cos(s+I*r)*Math.sin(a+_*o),f.y=e*Math.cos(a+_*o),f.z=e*Math.sin(s+I*r)*Math.sin(a+_*o),y.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),g.push(I+T,1-_),M.push(c++)}u.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){let _=u[p][M+1],T=u[p][M],O=u[p+1][M],I=u[p+1][M+1];(p!==0||a>0)&&h.push(_,T,I),(p!==n-1||l<Math.PI)&&h.push(T,O,I)}this.setIndex(h),this.setAttribute("position",new dn(y,3)),this.setAttribute("normal",new dn(v,3)),this.setAttribute("uv",new dn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Un=class extends ji{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new _t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ru,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function ma(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function ux(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Qs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Il=class extends Qs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xc,endingEnd:Xc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case qc:r=e,o=2*t-n;break;case Yc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case qc:a=e,l=2*n-t;break;case Yc:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,h=this._weightNext,y=(n-t)/(s-t),v=y*y,g=v*y,p=-d*g+2*d*v-d*y,M=(1+d)*g+(-1.5-2*d)*v+(-.5+d)*y+1,_=(-1-h)*g+(1.5+h)*v+.5*y,T=h*g-h*v;for(let O=0;O!==o;++O)r[O]=p*a[u+O]+M*a[c+O]+_*a[l+O]+T*a[f+O];return r}},Ll=class extends Qs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),f=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*f+a[l+d]*u;return r}},Dl=class extends Qs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},xi=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ma(t,this.TimeBufferType),this.values=ma(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ma(e.times,Array),values:ma(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Dl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ll(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Il(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case xa:t=this.InterpolantFactoryMethodDiscrete;break;case ya:t=this.InterpolantFactoryMethodLinear;break;case bo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xa;case this.InterpolantFactoryMethodLinear:return ya;case this.InterpolantFactoryMethodSmooth:return bo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&ux(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===bo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*n,d=f-n,h=f+n;for(let y=0;y!==n;++y){let v=t[f+y];if(v!==t[d+y]||v!==t[h+y]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*n,d=a*n;for(let h=0;h!==n;++h)t[d+h]=t[f+h]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};xi.prototype.TimeBufferType=Float32Array;xi.prototype.ValueBufferType=Float32Array;xi.prototype.DefaultInterpolation=ya;var gs=class extends xi{};gs.prototype.ValueTypeName="bool";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=xa;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ul=class extends xi{};Ul.prototype.ValueTypeName="color";var Nl=class extends xi{};Nl.prototype.ValueTypeName="number";var Ol=class extends Qs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)Ji.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ur=class extends xi{InterpolantFactoryMethodLinear(e){return new Ol(this.times,this.values,this.getValueSize(),e)}};Ur.prototype.ValueTypeName="quaternion";Ur.prototype.DefaultInterpolation=ya;Ur.prototype.InterpolantFactoryMethodSmooth=void 0;var xs=class extends xi{};xs.prototype.ValueTypeName="string";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=xa;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;var Fl=class extends xi{};Fl.prototype.ValueTypeName="vector";var Bl=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){let h=c[f],y=c[f+1];if(h.global&&(h.lastIndex=0),h.test(u))return y}return null}}},dx=new Bl,kl=class{constructor(e){this.manager=e!==void 0?e:dx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};kl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Wa=class extends Gn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};var Jo=new Mn,Xh=new F,qh=new F,Hl=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.map=null,this.mapPass=null,this.matrix=new Mn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wr,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new Ln(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Xh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xh),qh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qh),t.updateMatrixWorld(),Jo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Jo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var zl=class extends Hl{constructor(){super(new La(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Xa=class extends Wa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gn.DEFAULT_UP),this.updateMatrix(),this.target=new Gn,this.shadow=new zl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},qa=class extends Wa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Kl="\\[\\]\\.:\\/",fx=new RegExp("["+Kl+"]","g"),Jl="[^"+Kl+"]",px="[^"+Kl.replace("\\.","")+"]",mx=/((?:WC+[\/:])*)/.source.replace("WC",Jl),gx=/(WCOD+)?/.source.replace("WCOD",px),xx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jl),yx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jl),_x=new RegExp("^"+mx+gx+xx+yx+"$"),vx=["material","materials","bones","map"],Vl=class{constructor(e,t,n){let s=n||sn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},sn=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(fx,"")}static parseTrackName(e){let t=_x.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);vx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};sn.Composite=Vl;sn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};sn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};sn.prototype.GetterByBindingType=[sn.prototype._getValue_direct,sn.prototype._getValue_array,sn.prototype._getValue_arrayElement,sn.prototype._getValue_toArray];sn.prototype.SetterByBindingTypeAndVersioning=[[sn.prototype._setValue_direct,sn.prototype._setValue_direct_setNeedsUpdate,sn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[sn.prototype._setValue_array,sn.prototype._setValue_array_setNeedsUpdate,sn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[sn.prototype._setValue_arrayElement,sn.prototype._setValue_arrayElement_setNeedsUpdate,sn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[sn.prototype._setValue_fromArray,sn.prototype._setValue_fromArray_setNeedsUpdate,sn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Nx=new Float32Array(1);var Ya=class{constructor(e,t,n=0,s=1/0){this.ray=new Er(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Tr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Gl(e,this,n,t),n.sort(Yh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Gl(e[s],this,n,t);return n.sort(Yh),n}};function Yh(i,e){return i.distance-e.distance}function Gl(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,a=s.length;r<a;r++)Gl(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wl);var bx=35,Sx=25,Tt=.95,Wn=.35,Nr=6,ys=130,ja=300,_u=typeof window<"u"&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||window.location.search.includes("dev=1")),Ex=[{value:"balanced",label:"Balanced (lineup mix)"},{value:"tanky",label:"Tanky (HP + VIT)"},{value:"aggressive",label:"Aggressive (STR + AGI)"},{value:"scout",label:"Scout (high AGI)"},{value:"ranged",label:"Ranged (DEX + range)"},{value:"caster",label:"Caster (INT + MP)"},{value:"random",label:"Random"},{value:"custom",label:"Custom order"}],Tx=["berserker","knight","lancer","werewolf","samurai","ninja","assassin","ghoul","monk","hunter","mage","witch","paladin","exorcist","bandit","ranger","blacksmith","alchemist"],Qa={tank:["knight","berserker","werewolf","ghoul"],melee:["assassin","ninja","samurai","bandit","lancer"],support:["paladin","monk","blacksmith","exorcist"],ranged:["hunter","ranger","alchemist"],caster:["mage","witch"]},Or={tank:2,melee:2,support:1,ranged:1,caster:1};function wx(i){let e=Math.max(1,i),t=Object.keys(Or),n=t.reduce((l,c)=>l+(Or[c]??0),0),s={},r=0;for(let l of t){let c=Math.floor(e*(Or[l]??0)/n);s[l]=c,r+=c}let a=e-r,o=[...t].sort((l,c)=>s[l]!==s[c]?s[l]-s[c]:(Or[c]??0)-(Or[l]??0));for(let l=0;a>0&&l<o.length;l++)s[o[l]]++,a--;return s}var tt={PATH:0,GRASS:1,TREE:2,WATER:3,ROCK:4,BASE_TOP:5,BASE_BOTTOM:6,CENTER:7},eo=["knight","mage","monk","ghoul","lancer","hunter","assassin","berserker","witch","ninja","samurai","werewolf","paladin","exorcist","bandit","ranger","blacksmith","alchemist"];function Ax(i){for(let e=i.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[i[e],i[t]]=[i[t],i[e]]}return i}var Vt={knight:{name:"Knight",gender:"male",hp:27,maxHp:27,mp:5,maxMp:5,str:13,agi:8,vit:14,dex:10,luk:4,int:7,range:1},mage:{name:"Mage",gender:"female",hp:17,maxHp:17,mp:22,maxMp:22,str:5,agi:4,vit:5,dex:4,luk:13,int:17,range:1},monk:{name:"Monk",gender:"male",hp:23,maxHp:23,mp:13,maxMp:13,str:10,agi:10,vit:12,dex:9,luk:11,int:10,range:1},ghoul:{name:"Ghoul",gender:"male",hp:21,maxHp:21,mp:6,maxMp:6,str:12,agi:9,vit:9,dex:11,luk:9,int:5,range:1},lancer:{name:"Lancer",gender:"female",hp:22,maxHp:22,mp:7,maxMp:7,str:13,agi:11,vit:10,dex:7,luk:5,int:8,range:2},hunter:{name:"Hunter",gender:"female",hp:18,maxHp:18,mp:9,maxMp:9,str:7,agi:5,vit:7,dex:15,luk:12,int:5,range:7},assassin:{name:"Assassin",gender:"female",hp:19,maxHp:19,mp:10,maxMp:10,str:9,agi:14,vit:6,dex:14,luk:10,int:4,range:1},berserker:{name:"Berserker",gender:"male",hp:30,maxHp:30,mp:3,maxMp:3,str:15,agi:7,vit:13,dex:8,luk:6,int:2,range:1},witch:{name:"Witch",gender:"female",hp:16,maxHp:16,mp:24,maxMp:24,str:6,agi:6,vit:4,dex:5,luk:14,int:14,range:3},ninja:{name:"Ninja",gender:"female",hp:20,maxHp:20,mp:11,maxMp:11,str:8,agi:15,vit:7,dex:12,luk:8,int:9,range:1},samurai:{name:"Samurai",gender:"male",hp:24,maxHp:24,mp:8,maxMp:8,str:11,agi:12,vit:8,dex:13,luk:7,int:6,range:1},werewolf:{name:"Werewolf",gender:"male",hp:25,maxHp:25,mp:4,maxMp:4,str:14,agi:13,vit:11,dex:6,luk:6,int:3,range:1},paladin:{name:"Paladin",gender:"male",hp:26,maxHp:26,mp:12,maxMp:12,str:10,agi:8,vit:16,dex:7,luk:10,int:11,range:1},exorcist:{name:"Exorcist",gender:"male",hp:21,maxHp:20,mp:14,maxMp:14,str:7,agi:5,vit:9,dex:6,luk:15,int:13,range:1},bandit:{name:"Bandit",gender:"male",hp:20,maxHp:20,mp:5,maxMp:5,str:9,agi:14,vit:6,dex:14,luk:13,int:4,range:1},ranger:{name:"Ranger",gender:"female",hp:19,maxHp:19,mp:10,maxMp:10,str:8,agi:10,vit:8,dex:12,luk:7,int:4,range:5},blacksmith:{name:"Blacksmith",gender:"female",hp:22,maxHp:22,mp:6,maxMp:6,str:12,agi:7,vit:10,dex:11,luk:12,int:2,range:1},alchemist:{name:"Alchemist",gender:"female",hp:17,maxHp:17,mp:13,maxMp:13,str:6,agi:6,vit:11,dex:5,luk:8,int:12,range:5}},to={knight:{primary:6908265,secondary:9127187,hair:11696641,cape:3355443,belt:9127187},mage:{primary:16776656,secondary:3355443,hair:13353955,cape:4853326},monk:{primary:16777188,secondary:16119285,hair:2889744,belt:657930},ghoul:{primary:32896,secondary:6636321,hair:32896,skin:32896},lancer:{primary:3169502,secondary:16776656,hair:15854290,cape:14423100},hunter:{primary:8421376,secondary:9584654,hair:7898731,cape:16119285},assassin:{primary:986695,secondary:16119285,hair:2621751,belt:8948621},berserker:{primary:657930,secondary:986695,hair:657930,cape:1118481},witch:{primary:16119285,secondary:8388640,hair:16777188,cape:2263842},ninja:{primary:267292,secondary:137541,hair:791074},samurai:{primary:13882323,secondary:3556687,hair:2039842},werewolf:{primary:4408907,secondary:2378091,hair:12632256,belt:466741},paladin:{primary:16445630,secondary:16774638,hair:12887172,cape:4286945,belt:4286945},exorcist:{primary:3881787,secondary:3881787,hair:16775930,cape:8488329},bandit:{primary:9125425,secondary:6045747,hair:14423100,cape:6710937},ranger:{primary:16775930,secondary:10913299,hair:16035328,cape:11402348,belt:10913299},blacksmith:{primary:13874819,secondary:9849600,hair:11696641,apron:9849600},alchemist:{primary:16738740,secondary:11154282,hair:16711807,cape:8900331}},Fr={knight:"https://creator.nightcafe.studio/jobs/OlIWpAye2LeM5gPkAGEI/OlIWpAye2LeM5gPkAGEI--1--xc223.jpg",mage:"https://media.craiyon.com/2025-08-13/bLqz0LbwSIynOcUHty4Maw.webp",monk:"https://cdnb.artstation.com/p/assets/images/images/028/576/499/large/ahruna-art-oct17.jpg?1594859688",ghoul:"https://i.pinimg.com/736x/d3/cc/41/d3cc41778d05dec0371a69e29659f792.jpg",lancer:"https://i.redd.it/zolf64gpoa0c1.jpg",hunter:"https://coolvibe.com/wp-content/uploads/2011/02/hunter.jpg",assassin:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk2-NBPpPOU7duYgN_k_9oFKZ5hJjU28qyoA&s",berserker:"https://entertainment.inquirer.net/files/2016/07/top_bg.jpg",witch:"https://w0.peakpx.com/wallpaper/382/134/HD-wallpaper-evil-witch-witch-female-dress-white-hair-evil-black-woman-girl-darkness-anime-dark-beauty-lady-long-hair.jpg",ninja:"https://i.pinimg.com/474x/02/88/60/0288609778e53701b7e64051d7164922.jpg",samurai:"https://files.idyllic.app/files/static/3120390?width=256&optimizer=image",werewolf:"https://i.pinimg.com/736x/1f/95/27/1f9527c6255465547d664f19dd11967c.jpg",paladin:"https://upload-os-bbs.hoyolab.com/upload/2023/12/01/84522063/a6a130d65b61025d979eda3750b0abd4_2602645990799609868.jpg?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_70",exorcist:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bdc0afb9-e917-4267-b7e6-2155f9c5c14c/detuach-b1b79b16-7fed-4175-b1a2-ca3d1bc6166b.jpg/v1/fill/w_1024,h_1449,q_75,strp/my_priest_by_domyzu_detuach-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi9iZGMwYWZiOS1lOTE3LTQyNjctYjdlNi0yMTU1ZjljNWMxNGMvZGV0dWFjaC1iMWI3OWIxNi03ZmVkLTQxNzUtYjFhMi1jYTNkMWJjNjE2NmIuanBnIiwiaGVpZ2h0IjoiPD0xNDQ5Iiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiL3dtL2JkYzBhZmI5LWU5MTctNDI2Ny1iN2U2LTIxNTVmOWM1YzE0Yy9kb215enUtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.5ueq8PhVPSB7hz65z6Cok8mX7IGeIrsQzCOaVFpt1pU",bandit:"https://i.pinimg.com/736x/6b/15/b0/6b15b06ae23f690e20968bc87c370831.jpg",ranger:"https://i.redd.it/2nfikbmqpwoa1.jpg",blacksmith:"https://images-ng.pixai.art/images/orig/489d970a-890e-4523-8f99-c0ba2d6bfeae",alchemist:"https://pics.craiyon.com/2023-07-11/ddbb35d3d2614541a9ad13181838257d.webp"},vu={knight:[{name:"Brave",description:"Gain +3 VIT for 2 turns.",cost:3,target:"self",range:0,level:2,effectKey:"brave"},{name:"Dominate",description:"Steal 1 STR from an enemy.",cost:5,target:"enemy",range:1,level:3,effectKey:"dominate"}],mage:[{name:"Arcane Bolt",description:"Deal INT-based damage to one enemy.",cost:8,target:"enemy",range:6,level:1,effectKey:"arcaneBolt",type:"spell"},{name:"Mana Drain",description:"Drain enemy MP based on INT.",cost:1,target:"enemy",range:6,level:2,effectKey:"manaDrain"}],monk:[{name:"Mantra",description:"Gain LUK based on INT for both ally and self for 2 turns.",cost:4,target:"ally",range:1,level:2,effectKey:"mantra"},{name:"Chakra",description:"Heal HP for both ally and self.",cost:8,target:"ally",range:4,level:3,effectKey:"chakra"}],ghoul:[{name:"Weaken",description:"Steal 1 VIT from an enemy.",cost:3,target:"enemy",range:1,level:2,effectKey:"weaken"},{name:"Feast",description:"Deal STR-based damage to enemy and heal self.",cost:4,target:"enemy",range:1,level:3,effectKey:"feast"}],lancer:[{name:"Impale",description:"Reduce target's AGI by 2 for 3 turns.",cost:4,target:"enemy",range:2,level:2,effectKey:"impale"},{name:"Pierce",description:"Deal STR-based damage through the defense.",cost:6,target:"enemy",range:2,level:3,effectKey:"pierce"}],hunter:[{name:"Focus",description:"Gain +3 DEX for 2 turns.",cost:4,target:"self",range:0,level:1,effectKey:"focus"},{name:"Snipe",description:"Deal DEX-based damage to one enemy.",cost:6,target:"enemy",range:10,level:2,effectKey:"snipe"}],assassin:[{name:"Cripple",description:"Steal 1 AGI from an enemy.",cost:4,target:"enemy",range:1,level:2,effectKey:"cripple"},{name:"Execute",description:"Deal AGI-based damage to one enemy.",cost:6,target:"enemy",range:1,level:3,effectKey:"execute"}],berserker:[{name:"Berserk",description:"Deal STR-based damage for -3 HP.",cost:0,hpCost:3,target:"enemy",range:1,level:2,effectKey:"berserk"},{name:"Bloodlust",description:"Gain STR and VIT based on lost HP for 1 turn.",cost:5,target:"self",range:0,level:3,effectKey:"bloodlust"}],witch:[{name:"Hex",description:"Steal 1 INT from an enemy.",cost:5,target:"enemy",range:5,level:1,effectKey:"hex"},{name:"Drain",description:"Deal INT-based damage to enemy and heal self.",cost:6,target:"enemy",range:5,level:2,effectKey:"drain",type:"spell"}],ninja:[{name:"Blind",description:"Steal 1 DEX from an enemy.",cost:4,target:"enemy",range:1,level:2,effectKey:"blind"},{name:"Shuriken",description:"Deal DEX-based ranged attack.",cost:6,target:"enemy",range:4,level:3,effectKey:"shuriken"}],samurai:[{name:"Iaido",description:"Gain +1 STR and +1 DEX for 3 turns.",cost:5,target:"self",range:0,level:2,effectKey:"iaido"},{name:"Chokuto",description:"Deal STR+DEX-based damage to one enemy.",cost:7,target:"enemy",range:1,level:3,effectKey:"chokuto"}],werewolf:[{name:"Bite",description:"Deal STR+AGI-based damage to one enemy.",cost:5,target:"enemy",range:1,level:2,effectKey:"bite"},{name:"Howl",description:"Gain +2 STR and +2 AGI for 3 turns.",cost:6,target:"self",range:0,level:3,effectKey:"howl"}],paladin:[{name:"Sacrifice",description:"Heal ally for -3 HP.",cost:0,hpCost:3,target:"ally",range:3,level:3,effectKey:"sacrifice"},{name:"Judgement",description:"Deal damage based on remaining HP.",cost:7,target:"enemy",range:1,level:2,effectKey:"judgement"}],exorcist:[{name:"Sanctuary",description:"Gain +1 all stats for both ally and self for 2 turns.",cost:6,target:"ally",range:3,level:1,effectKey:"sanctuary"},{name:"Exorcise",description:"Deal damage based on enemy lost HP.",cost:7,target:"enemy",range:3,level:2,effectKey:"exorcise",type:"spell"}],bandit:[{name:"Raid",description:"Steal 2 LUK from an enemy.",cost:4,target:"enemy",range:1,level:2,effectKey:"raid"},{name:"Ambush",description:"Deal LUK-based damage to one enemy.",cost:6,target:"enemy",range:1,level:3,effectKey:"ambush"}],ranger:[{name:"Wind walk",description:"Gain +1 DEX and +3 AGI for 2 turns.",cost:4,target:"self",range:0,level:1,effectKey:"windWalk"},{name:"Power Shot",description:"Deal knockback damage to one enemy.",cost:6,target:"enemy",range:7,level:3,effectKey:"powerShot"}],blacksmith:[{name:"Forge",description:"Gain +2 STR for both ally and self for 2 turns.",cost:4,target:"ally",range:1,level:1,effectKey:"forge"},{name:"Fortify",description:"Gain +2 STR and +2 VIT for both ally and self for 2 turns.",cost:5,target:"ally",range:2,level:3,effectKey:"fortify"}],alchemist:[{name:"Poison",description:"Poison enemy for 2 turns.",cost:5,target:"enemy",range:5,level:1,effectKey:"poison"},{name:"Concoct",description:"Deal INT-based damage to one enemy and add to 50% to LUK",cost:8,target:"enemy",range:7,level:2,effectKey:"concoct",type:"spell"}]};function le(i,e){let t=i[e]!=null?i[e]:0,n=i.tempBuff&&i.tempBuff[e]!=null?i.tempBuff[e]:0,s=i.tempDebuff&&i.tempDebuff[e]!=null?i.tempDebuff[e]:0;return t+n-s}function no(i,e,t,n){let s=e,r=t,o={brave:"Brave",dominate:"Dominate",arcaneBolt:"Arcane Bolt",manaDrain:"Mana Drain",mantra:"Mantra",chakra:"Chakra",weaken:"Weaken",feast:"Feast",impale:"Impale",pierce:"Pierce",focus:"Focus",snipe:"Snipe",execute:"Execute",cripple:"Cripple",berserk:"Berserk",bloodlust:"Bloodlust",hex:"Hex",drain:"Drain",shuriken:"Shuriken",blind:"Blind",iaido:"Iaido",chokuto:"Chokuto",bite:"Bite",howl:"Howl"}[i]||i.replace(/([A-Z])/g," $1").replace(/^./,h=>h.toUpperCase()).trim();n.showFloatingCombatText&&n.showFloatingCombatText(s.x,s.y,o,!1,"skill-name");let l=i.replace(/([A-Z])/g," $1").replace(/^./,h=>h.toUpperCase()).trim(),c=r?`${r.name} (${r.class}, P${r.player})`:"self",u=null,f=(h,y,v,g)=>{if(v)h.hp=Math.min(h.maxHp,h.hp+y),n.showFloatingCombatText&&n.showFloatingCombatText(h.x,h.y,`+${y}`,!1,"heal");else{let p=h===s,M=!0;if(!p&&!g){let _=le(h,"agi")*.7+le(h,"luk")*.3;M=Math.random()*Math.max(.001,_)<=le(s,"dex")}return M?(h.hp=Math.max(0,h.hp-y),h!==s&&(u=y),n.showFloatingCombatText&&n.showFloatingCombatText(h.x,h.y,String(y),!1),n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(h),h.hp<=0&&n.handleUnitDeath&&n.handleUnitDeath(h)):n.showFloatingCombatText&&n.showFloatingCombatText(h.x,h.y,"MISS",!0),M}},d=(h,y,v,g)=>{n.showFloatingCombatText&&n.showFloatingCombatText(h,y,v,!1,g?"buff":"debuff")};switch(i){case"brave":s.tempBuff=s.tempBuff||{},s.tempBuff.vit=3,s.tempBuff.duration=3,d(s.x,s.y,"+3 VIT",!0);break;case"dominate":{if(!r)break;let h=2;r.str=Math.max(1,(r.str||0)-h),s.str=(s.str||0)+h,d(r.x,r.y,`-${h} STR`,!1),d(s.x,s.y,`+${h} STR`,!0)}break;case"arcaneBolt":{if(!r)break;let h=Math.max(1,Math.ceil(le(s,"int")-(le(r,"int")*.7+le(r,"luk")*.2)));f(r,h,!1,!0)}break;case"manaDrain":if(r){let h=Math.max(1,Math.floor(le(r,"int")*.3));r.str=Math.max(1,(r.mp||0)-h),s.mp=(s.mp||0)+h,d(r.x,r.y,`-${h} MP`,!1),d(s.x,s.y,`+${h} MP`,!0)}break;case"mantra":if(r){let h=Math.max(1,Math.floor(le(s,"int")*.3));if(s.tempBuff=s.tempBuff||{},s.tempBuff.int=h,s.tempBuff.duration=3,d(s.x,s.y,`+${h} LUK`,!0),!r)break;r.tempBuff=r.tempBuff||{},r.tempBuff.luk=h,r.tempBuff.duration=3,d(r.x,r.y,`+${h} LUK`,!0)}break;case"chakra":{if(f(s,Math.max(1,Math.floor(le(s,"int")*.3+le(s,"luk")*.2)),!0),!r)break;f(r,Math.max(1,Math.floor(le(s,"int")*.3+le(r,"luk")*.2)),!0)}break;case"weaken":{if(!r)break;let h=1;r.vit=Math.max(1,(r.vit||0)-h),s.vit=(s.vit||0)+h,d(r.x,r.y,`-${h} VIT`,!1),d(s.x,s.y,`+${h} VIT`,!0)}break;case"feast":{if(!r)break;let h=Math.max(1,Math.floor(le(s,"str")*.7-(le(r,"vit")*.3+le(r,"luk")*.2)));f(r,h,!1)&&f(s,h,!0)}break;case"impale":{if(!r)break;let h=2;r.tempDebuff=r.tempDebuff||{},r.tempDebuff.agi=h,r.tempDebuff.duration=4,d(r.x,r.y,`-${h} AGI`,!1)}break;case"pierce":{if(!r)break;let h=Math.max(1,Math.floor(le(s,"str")*.6));f(r,h,!1)}break;case"focus":s.tempBuff=s.tempBuff||{},s.tempBuff.dex=3,s.tempBuff.duration=3,d(s.x,s.y,"+3 DEX",!0);break;case"snipe":{if(!r)break;let h=Math.max(1,Math.floor(le(s,"dex")*.7-(le(r,"vit")*.3+le(r,"luk")*.2)));f(r,h,!1)}break;case"cripple":{if(!r)break;let h=1;r.agi=Math.max(1,(r.agi||0)-h),s.agi=(s.agi||0)+h,d(r.x,r.y,`-${h} AGI`,!1),d(s.x,s.y,`+${h} AGI`,!0)}break;case"execute":if(r){let h=Math.max(1,Math.floor(le(s,"agi")*.8-(le(r,"vit")*.3+le(r,"luk")*.2)));f(r,h,!1)}break;case"berserk":r&&(f(r,Math.max(1,Math.floor(le(s,"str")*.8-le(r,"vit")*.3+le(r,"luk")*.2)),!1),f(s,3,!1));break;case"bloodlust":{let h=Math.max(1,Math.floor((s.maxHp-s.hp)*.2));s.tempBuff=s.tempBuff||{},s.tempBuff.str=h,s.tempBuff.vit=h,s.tempBuff.duration=2,d(s.x,s.y,`+${h} STR, +${h} VIT`,!0)}break;case"hex":{if(!r)break;let h=1;r.int=Math.max(1,(r.int||0)-h),s.int=(s.int||0)+h,d(r.x,r.y,`-${h} INT`,!1),d(s.x,s.y,`+${h} INT`,!0)}break;case"drain":{if(!r)break;let h=Math.max(1,Math.ceil(le(s,"int")*.6-(le(r,"int")*.4+le(r,"luk")*.2)));f(r,h,!1,!0),f(s,h,!0)}break;case"blind":{if(!r)break;let h=1;r.dex=Math.max(1,(r.dex||0)-h),s.dex=(s.dex||0)+h,d(r.x,r.y,`-${h} DEX`,!1),d(s.x,s.y,`+${h} DEX`,!0)}break;case"shuriken":{if(!r)break;let h=Math.max(1,Math.floor(le(s,"dex")*.7-(le(r,"vit")*.3+le(r,"luk")*.2)));f(r,h,!1)}break;case"iaido":s.tempBuff=s.tempBuff||{},s.tempBuff.str=1,s.tempBuff.dex=1,s.tempBuff.duration=4,d(s.x,s.y,"+1 STR, +1 DEX",!0);break;case"chokuto":{if(!r)break;let h=Math.max(1,Math.floor(le(s,"str")*.4+le(s,"dex")*.4-(le(r,"vit")*.3+le(r,"luk")*.2)));f(r,h,!1)}break;case"bite":{if(!r)break;let h=Math.max(1,Math.floor(le(s,"str")*.7+le(s,"agi")*.1-(le(r,"vit")*.3+le(r,"luk")*.2)));f(r,h,!1)}break;case"howl":s.tempBuff=s.tempBuff||{},s.tempBuff.str=2,s.tempBuff.agi=2,s.tempBuff.duration=4,d(s.x,s.y,"+2 STR, +2 AGI",!0);break;case"sacrifice":{let h=Math.max(1,Math.floor(le(s,"int")*.4));f(r,h,!0),f(s,3,!1)}break;case"judgement":{if(!r)break;let h=Math.max(1,Math.floor(s.maxHp-s.hp-(le(r,"int")*.3+le(r,"luk")*.2+le(r,"vit")*.1)));f(r,h,!1,!0)}break;case"sanctuary":s.tempBuff=s.tempBuff||{},s.tempBuff.str=1,s.tempBuff.vit=1,s.tempBuff.dex=1,s.tempBuff.agi=1,s.tempBuff.int=1,s.tempBuff.luk=1,s.tempBuff.duration=3,r.tempBuff=r.tempBuff||{},r.tempBuff.str=1,r.tempBuff.vit=1,r.tempBuff.dex=1,r.tempBuff.agi=1,r.tempBuff.int=1,r.tempBuff.luk=1,r.tempBuff.duration=3,d(s.x,s.y,"+1 ALL STATS",!0),d(r.x,r.y,"+1 ALL STATS",!0);break;case"exorcise":{if(!r)break;let h=Math.max(1,Math.floor(r.maxHp-r.hp-(le(r,"int")*.4+le(r,"luk")*.2)));f(r,h,!1,!0)}break;case"raid":r.luk=Math.max(1,(r.luk||0)-2),s.luk=(s.luk||0)+2,d(r.x,r.y,"-2 LUK",!1),d(s.x,s.y,"+2 LUK",!0);break;case"ambush":{if(!r)break;let h=Math.max(1,Math.floor(le(s,"luk")*.7-(le(r,"vit")*.3+le(r,"luk")*.2)));f(r,h,!1)}break;case"windWalk":s.tempBuff=s.tempBuff||{},s.tempBuff.dex=1,s.tempBuff.agi=3,s.tempBuff.duration=3,d(s.x,s.y,"+1 DEX, +3 AGI",!0);break;case"powerShot":{if(!r)break;let h=Math.max(1,Math.floor(le(s,"dex")*.6-(le(r,"vit")*.3+le(r,"luk")*.2)));if(f(r,h,!1)&&n.world&&n.units&&n.updateUnitPosition){let v=Math.max(1,Math.floor(h*.2)),g=Ix(n.world,n.units,s,r,v),p=r.x,M=r.y;r.x=g.newGx,r.y=g.newGy,g.collisionDamage>0?(n.updateUnitPosition(r),n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(r),f(r,g.collisionDamage,!1)):n.animateKnockback?n.animateKnockback(r,p,M,g.newGx,g.newGy,()=>{n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(r)}):(n.updateUnitPosition(r),n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(r))}}break;case"forge":s.tempBuff=s.tempBuff||{},s.tempBuff.str=2,s.tempBuff.duration=3,r.tempBuff=r.tempBuff||{},r.tempBuff.str=2,r.tempBuff.duration=3,d(s.x,s.y,"+2 STR",!0),d(r.x,r.y,"+2 STR",!0);break;case"fortify":s.tempBuff=s.tempBuff||{},s.tempBuff.str=3,s.tempBuff.vit=3,s.tempBuff.duration=3,r.tempBuff=r.tempBuff||{},r.tempBuff.str=3,r.tempBuff.vit=3,r.tempBuff.duration=3,d(s.x,s.y,"+3 STR, +3 VIT",!0),d(r.x,r.y,"+3 STR, +3 VIT",!0);break;case"poison":{if(!r)break;let h=Math.max(1,Math.floor(le(r,"luk")*.2));r.tempDebuff=r.tempDebuff||{},r.tempDebuff.poison=h,r.tempDebuff.duration=3,d(r.x,r.y,"Poisoned for 2 turns",!1)}break;case"concoct":{if(!r)break;let h=Math.max(1,Math.floor(le(s,"int")*.8-(le(r,"int")*.4+le(r,"luk")*.2)));f(r,h,!1,!0);let y=Math.max(1,Math.floor(h*.5));s.luk=Math.max(1,(s.luk||0)+y),d(s.x,s.y,`+${y} LUK`,!0)}break;default:break}console.log("[SKILL]",`${s.name} (${s.class}, P${s.player})`,"uses",l,"\u2192",c,`| MP ${s.mp}`,u!=null?`| ${u} dmg`:""),n.updateTurnUI&&n.updateTurnUI()}function Rx(){let i=bx,e=Sx,t=Array.from({length:e},()=>Array(i).fill(!1)),n=Array.from({length:e},()=>Array(i).fill(0)),s=Array.from({length:e},()=>Array(i).fill(tt.GRASS)),r=Math.floor(i/2),a=Math.floor(i/2),o=0,l=e-1;for(let N=-1;N<=1;N++)for(let B=-2;B<=2;B++){let J=r+B,P=o+N;J>=0&&J<i&&P>=0&&P<e&&(t[P][J]=!0,s[P][J]=tt.BASE_TOP,n[P][J]=1)}for(let N=-1;N<=1;N++)for(let B=-2;B<=2;B++){let J=a+B,P=l+N;J>=0&&J<i&&P>=0&&P<e&&(t[P][J]=!0,s[P][J]=tt.BASE_BOTTOM,n[P][J]=1)}let c=Math.floor(i/2),u=Math.floor(e/2);for(let N=-1;N<=1;N++)for(let B=-2;B<=2;B++){let J=c+B,P=u+N;J>=0&&J<i&&P>=0&&P<e&&(t[P][J]=!0,s[P][J]=tt.CENTER,n[P][J]=1)}let f=new Set,d=(N,B)=>Math.abs(N-c)<=2&&Math.abs(B-u)<=1,h=(N,B)=>{N<0||N>=i||B<0||B>=e||d(N,B)||f.add(B*i+N)},y=Math.floor(i/2),v=Math.floor(e/2),g=Math.min(i,e)*.29,p=Math.max(60,(e+i)*2);for(let N=0;N<2;N++){let B=N===0?y-g:y+g,J=N===0?Math.PI/2:-Math.PI/2,P=N===0?Math.PI*3/2:Math.PI/2;for(let V=0;V<=p;V++){let D=V/p,ae=J+D*(P-J),Y=B+g*Math.cos(ae),j=v+g*Math.sin(ae),re=Math.round(Y),ue=Math.round(j);h(re,ue),h(re+1,ue),h(re-1,ue),h(re,ue+1),h(re,ue-1)}}let M=[[0,1],[0,-1],[1,0],[-1,0]];for(let N=0;N<1;N++){let B=[];f.forEach(J=>{let P=J%i,V=J/i|0;for(let[D,ae]of M){let Y=P+D,j=V+ae;if(Y<0||Y>=i||j<0||j>=e)continue;let re=j*i+Y;f.has(re)||B.push(re)}}),B.forEach(J=>f.add(J))}f.forEach(N=>{let B=N%i,J=N/i|0;s[J][B]===tt.BASE_TOP||s[J][B]===tt.BASE_BOTTOM||s[J][B]===tt.CENTER||(t[J][B]=!0,s[J][B]=tt.PATH,n[J][B]=1)});let _=Math.round(y-g*1.6),T=Math.round(y+g*1.6),O=Math.round(y-g),I=Math.round(y+g),L=1;for(let N=u-L;N<=u+L;N++)if(!(N<0||N>=e))for(let B=_;B<=T;B++)B<0||B>=i||(t[N][B]=!0,s[N][B]!==tt.CENTER&&s[N][B]!==tt.BASE_TOP&&s[N][B]!==tt.BASE_BOTTOM&&(s[N][B]=tt.PATH),n[N][B]=Math.max(n[N][B],1));function $(N,B,J,P){let V=Math.max(1,Math.min(N,B)),D=Math.min(e-2,Math.max(N,B)),ae=Math.max(1,Math.min(J,P)),Y=Math.min(i-2,Math.max(J,P));for(let j=V;j<=D;j++)for(let re=ae;re<=Y;re++)s[j][re]===tt.BASE_TOP||s[j][re]===tt.BASE_BOTTOM||s[j][re]===tt.CENTER||(t[j][re]=!0,s[j][re]=tt.PATH,n[j][re]=1)}let S=3,A=3;$(o,o+S-1,O,r-1),$(o,o+S-1,r+1,I),$(l-A+1,l,O,a-1),$(l-A+1,l,a+1,I);for(let N=-1;N<=2;N++)for(let B=-2;B<=2;B++){let J=r+B,P=o+N;J>=0&&J<i&&P>=0&&P<e&&(t[P][J]=!0,s[P][J]=tt.BASE_TOP,n[P][J]=1)}for(let N=-2;N<=1;N++)for(let B=-2;B<=2;B++){let J=a+B,P=l+N;J>=0&&J<i&&P>=0&&P<e&&(t[P][J]=!0,s[P][J]=tt.BASE_BOTTOM,n[P][J]=1)}for(let N=0;N<e;N++)for(let B=0;B<i;B++){if(t[N][B]||s[N][B]===tt.BASE_TOP||s[N][B]===tt.BASE_BOTTOM||s[N][B]===tt.CENTER)continue;let J=Math.abs(B-r)<=4&&Math.abs(N-o)<=3,P=Math.abs(B-a)<=4&&Math.abs(N-l)<=3,V=J||P,D=Math.random();D<.55&&!V?(s[N][B]=tt.TREE,n[N][B]=1+Math.floor(Math.random()*2)):D<.75||V&&D<.5?(s[N][B]=tt.WATER,n[N][B]=0):(s[N][B]=tt.ROCK,n[N][B]=1+Math.floor(Math.random()*2))}return{w:i,h:e,path:t,height:n,type:s,topBaseX:r,topBaseY:o,botBaseX:a,botBaseY:l}}function Cx(i,e,t){let n=e===1?tt.BASE_BOTTOM:tt.BASE_TOP,s=[];for(let r=0;r<i.h;r++)for(let a=0;a<i.w;a++)i.type[r][a]===n&&(t&&t.has(r*i.w+a)||s.push({gx:a,gy:r}));return s}function Px(i){let e=[];for(let t=0;t<i.h;t++)for(let n=0;n<i.w;n++)i.type[t][n]===tt.CENTER&&e.push({gx:n,gy:t});return e}function Mu(i,e){let t=Px(i);if(t.length===0)return e;let n=s=>Math.min(...t.map(r=>Math.abs(s.gx-r.gx)+Math.abs(s.gy-r.gy)));return[...e].sort((s,r)=>n(s)-n(r))}function nr(i,e,t){if(e<0||e>=i.w||t<0||t>=i.h)return!1;let n=i.type[t][e];return!(n===tt.TREE||n===tt.WATER||n===tt.ROCK)}function Ix(i,e,t,n,s){let r=n.x,a=n.y,o=n.x-t.x,l=n.y-t.y,c=Math.abs(o)>=Math.abs(l)?o>0?1:o<0?-1:0:0,u=Math.abs(l)>Math.abs(o)?l>0?1:l<0?-1:0:0;if(c===0&&u===0)return{newGx:r,newGy:a,collisionDamage:0};let f=0;for(let d=0;d<s;d++){let h=r+c,y=a+u,v=h<0||h>=i.w||y<0||y>=i.h,g=!nr(i,h,y),p=e.some(M=>M.hp>0&&M.id!==n.id&&M.x===h&&M.y===y);if(v||g||p){let M=Math.max(1,f*3+Math.floor((t.str||0)*.3));return{newGx:r,newGy:a,collisionDamage:M}}r=h,a=y,f++}return{newGx:r,newGy:a,collisionDamage:0}}function Lx(i,e,t,n){let s=[],r=i,a=e,o=t,l=n,c=Math.abs(o-r),u=Math.abs(l-a),f=r<o?1:-1,d=a<l?1:-1,h=c-u;for(;s.push({x:r,y:a}),!(r===o&&a===l);){let y=2*h;y>-u&&(h-=u,r+=f),y<c&&(h+=c,a+=d)}return s}function _s(i,e,t,n,s){let r=Lx(e,t,n,s);for(let a=1;a<r.length-1;a++){let o=r[a];if(!nr(i,o.x,o.y))return!1}return!0}function io(i,e,t,n,s,r){let a=(f,d)=>d*i.w+f,o=new Map;o.set(a(e,t),0);let l=[{x:e,y:t,d:0}],c=[[0,1],[0,-1],[1,0],[-1,0]],u=s!=null&&r!=null;for(;l.length;){let{x:f,y:d,d:h}=l.shift();if(!(h>=n))for(let[y,v]of c){let g=f+y,p=d+v;if(!nr(i,g,p))continue;if(u){let T=s.find(O=>O.hp>0&&O.x===g&&O.y===p);if(T&&T.player!==r.player)continue}let M=a(g,p);if(o.has(M))continue;let _=h+1;o.set(M,_),l.push({x:g,y:p,d:_})}}return o}function bu(i,e,t,n){let s=new Map;for(let r=0;r<i.h;r++)for(let a=0;a<i.w;a++){let o=Math.abs(a-e)+Math.abs(r-t);o>=1&&o<=n&&s.set(r*i.w+a,o)}return s}function es(i,e,t,n,s,r,a){if(e===n&&t===s)return[{x:e,y:t}];let o=(d,h)=>h*i.w+d,l=new Map,c=[{x:e,y:t}];l.set(o(e,t),null);let u=[[0,1],[0,-1],[1,0],[-1,0]];function f(d,h){if(!nr(i,d,h))return!1;let y=r.find(v=>v.hp>0&&v.x===d&&v.y===h);return y?y.id===a.id||y.player===a.player:!0}for(;c.length;){let{x:d,y:h}=c.shift();if(d===n&&h===s){let y=[],v={x:n,y:s};for(;v;)y.unshift(v),v=l.get(o(v.x,v.y));return y}for(let[y,v]of u){let g=d+y,p=h+v,M=o(g,p);l.has(M)||f(g,p)&&(l.set(M,{x:d,y:h}),c.push({x:g,y:p}))}}return null}var Su={[tt.PATH]:2976557,[tt.GRASS]:2968109,[tt.TREE]:1719578,[tt.WATER]:1989278,[tt.ROCK]:4872778,[tt.BASE_TOP]:8014410,[tt.BASE_BOTTOM]:4872826,[tt.CENTER]:13940810};function Eu(i){return i.w*Tt/2}function Tu(i){return i.h*Tt/2}function wu(i){let e=document.createElement("canvas");e.width=i,e.height=i;let t=e.getContext("2d"),n=t.createImageData(i,i),s=n.data;for(let a=0;a<s.length;a+=4){let o=Math.floor(128+(Math.random()-.5)*80);s[a]=s[a+1]=s[a+2]=o,s[a+3]=255}t.putImageData(n,0,0);let r=new Ba(e);return r.wrapS=r.wrapT=Mr,r.repeat.set(4,4),r.needsUpdate=!0,r}function Dx(i){let e=new ri,t=Eu(i),n=Tu(i),s=new Tn(Tt,Wn,Tt),r=wu(64),a=.88,o=.02,l=[];function c(d,h,y,v,g){let p=new Un({color:3828266,roughness:.9});p.bumpMap=r,p.bumpScale=.12;for(let M=0;M<v;M++){let _=.08+Math.random()*g,T=.03+Math.random()*.03,O=new je(new Qi(T*.5,T,_,6),p);O.position.set(d+(Math.random()-.5)*.5,y+_/2,h+(Math.random()-.5)*.5),O.rotation.x=(Math.random()-.5)*.2,O.rotation.z=(Math.random()-.5)*.2,O.castShadow=!0,e.add(O)}}let u=.12;function f(d,h,y,v){let g=y+.02,p=[[d-u,g,h-u],[d+u,g,h+u],[d-u,g,h+u],[d+u,g,h-u],[d-u+.06,g,h-u+.06],[d+u-.06,g,h+u-.06],[d-u+.06,g,h+u-.06],[d+u-.06,g,h-u+.06]],M=new Float32Array(p.length*3);p.forEach((I,L)=>{M[L*3]=I[0],M[L*3+1]=I[1],M[L*3+2]=I[2]});let _=new Kn;_.setAttribute("position",new Zn(M,3)),_.computeBoundingSphere();let T=new Rr({color:855309,linewidth:1}),O=new Fa(_,T);v.add(O)}for(let d=0;d<i.h;d++)for(let h=0;h<i.w;h++){let y=i.type[d][h],v=i.height[d][h],g=Su[y],p=Wn+v*.35,M=p/2+Wn/2,_=new Un({roughness:Math.max(.7,Math.min(1,a+(Math.random()-.5)*.18)),metalness:Math.max(0,Math.min(.1,o+(Math.random()-.5)*.04))}),T=(g>>16&255)/255,O=(g>>8&255)/255,I=(g&255)/255,L=T,$=O,S=I;if(y===tt.PATH||y===tt.TREE||y===tt.ROCK){let ae=Math.random()*.45;L=T*(1-ae)+.42*ae,$=O*(1-ae)+.26*ae,S=I*(1-ae)+.14*ae}(y===tt.TREE||y===tt.ROCK)&&(L*=.5,$*=.5,S*=.5);let A=1+(Math.random()-.5)*.12;_.color.setRGB(Math.min(1,L*A),Math.min(1,$*A),Math.min(1,S*A)),_.bumpMap=r,_.bumpScale=.12;let N=new je(s,_);N.position.set(h*Tt-t+Tt/2,p/2,d*Tt-n+Tt/2),N.castShadow=!0,N.receiveShadow=!0,N.userData={gx:h,gy:d,type:y},e.add(N);let B=h*Tt-t+Tt/2,J=d*Tt-n+Tt/2;if(y===tt.TREE&&f(B,J,M,e),y===tt.TREE){let P=new ri;P.position.set(B,M,J);let V=h===0||h===i.w-1||d===0||d===i.h-1,D=V?.75+Math.random()*.35:.5+Math.random()*.2,ae=new _t(4007959),Y=()=>1+(Math.random()-.5)*.4;ae.r=Math.min(1,Math.max(0,ae.r*Y())),ae.g=Math.min(1,Math.max(0,ae.g*Y())),ae.b=Math.min(1,Math.max(0,ae.b*Y()));let j=.85+Math.random()*.2,re=new Un({color:ae,roughness:j});re.bumpMap=r,re.bumpScale=.1+Math.random()*.12;let ue=new je(new Qi(.12,.14,D,8),re);ue.position.set(0,D/2,0),ue.castShadow=!0,ue.raycast=function(){},P.add(ue);let fe=r.clone();fe.repeat.set(3,3);let te=new _t(2972205),me=()=>1+(Math.random()-.5)*.44;te.r=Math.min(1,Math.max(0,te.r*me())),te.g=Math.min(1,Math.max(0,te.g*me())),te.b=Math.min(1,Math.max(0,te.b*me()));let Pe=.78+Math.random()*.24,We=new Un({color:te,roughness:Pe});We.bumpMap=fe,We.bumpScale=.16+Math.random()*.14;let Xe=V?.52:.45,ht=V?1.05:.9,mt=.12,qe=ht*.5,Ct=ht*.45,Z=ht*.4,rn=new je(new gi(Xe,qe,8),We);rn.position.set(0,D+qe/2,0),rn.castShadow=!0,rn.raycast=function(){},P.add(rn);let Qe=new je(new gi(Xe*.75,Ct,8),We);Qe.position.set(0,D+qe-mt+Ct/2,0),Qe.castShadow=!0,Qe.raycast=function(){},P.add(Qe);let lt=new je(new gi(Xe*.5,Z,8),We);lt.position.set(0,D+qe-mt+Ct-mt+Z/2,0),lt.castShadow=!0,lt.raycast=function(){},P.add(lt),e.add(P),l.push(P)}else if(y===tt.WATER){let P=Su[tt.WATER],V=(P>>16&255)/255,D=(P>>8&255)/255,ae=(P&255)/255,Y=1+(Math.random()-.5)*.12,j=new Un({color:new _t().setRGB(Math.min(1,V*Y),Math.min(1,D*Y),Math.min(1,ae*Y)),roughness:.08,metalness:.45,transparent:!0,opacity:.94,bumpMap:r,bumpScale:.03}),re=new je(new Di(Tt,Tt),j);re.rotation.x=-Math.PI/2,re.position.set(B,M+.02,J),re.receiveShadow=!0,e.add(re)}else if(y===tt.ROCK){let P=new Un({color:6974058,roughness:.9});P.bumpMap=r,P.bumpScale=.2;let V=(j,re,ue)=>{let fe=new je(new Ga(j,0),P);fe.position.set(B+re,M+j-.2,J+ue),fe.rotation.set(Math.random(),Math.random(),Math.random()),fe.castShadow=!0,e.add(fe)},D=.32+Math.random()*.14,ae=.2+Math.random()*.12,Y=.12+Math.random()*.12;V(D,(Math.random()-.5)*.15,(Math.random()-.5)*.15),V(ae,(Math.random()-.5)*.25,(Math.random()-.5)*.25),V(Y,(Math.random()-.5)*.28,(Math.random()-.5)*.28)}}return e.userData.treeGroups=l,e}function Ux(){let i=document.querySelector("#mode-select-overlay .mode-select-instructions");i&&console.log(i.textContent.trim());let e=Rx(),t=document.getElementById("canvas-wrap"),n=new Oa;n.background=new _t(1711652),n.fog=new Na(1711652,30,90);let s=e.w*Tt/2,r=e.h*Tt/2,a=new Vn(50,t.clientWidth/t.clientHeight,.1,200),o=17,l=new F(12,38,16).normalize().multiplyScalar(o),c=new F,u=new F,f=new fi(new F(0,1,0),0),d=new F,h=new F,y=!1,v=!1,g=!1,p=null,M=5,_=.004,T=-Math.PI*.4,O=Math.PI*.4,I=new F,L={x:0,y:0},$=1,S=40,A=.08,N=.15,B=null,J=new qa(16777215,.45);n.add(J);let P=new Xa(16774630,1.1);P.position.set(30,50,20),P.castShadow=!0,P.shadow.mapSize.width=2048,P.shadow.mapSize.height=2048,P.shadow.camera.near=1,P.shadow.camera.far=120,P.shadow.camera.left=-50,P.shadow.camera.right=50,P.shadow.camera.top=50,P.shadow.camera.bottom=-50,n.add(P);let V=Dx(e);n.add(V);let D=[],ae=1,Y=new Map,j=wu(64),re=Eu(e),ue=Tu(e);function fe(x,m){let w=(Wn+e.height[m][x]*.35)/2+Wn/2;return new F(x*Tt-re+Tt/2,w,m*Tt-ue+Tt/2)}function te(x,m){let R=(x>>16&255)/255,w=(x>>8&255)/255,k=(x&255)/255,H=1+(Math.random()-.5)*m;return new _t(Math.min(1,R*H),Math.min(1,w*H),Math.min(1,k*H))}let me=.62;function Pe(x,m){m=m??me;let R=x instanceof _t?x:new _t(x);return new _t(Math.max(0,R.r*m),Math.max(0,R.g*m),Math.max(0,R.b*m))}function We(x,m,R){let w=to[m]||to.knight,k=Pe(te(w.primary,.08)),H=Pe(te(w.secondary,.08)),X=Vt[m]&&Vt[m].gender||"male",z=R??4006676,q=Pe(te(w.skin!=null?w.skin:15250592,.06)),se=Pe(te(z,.08)),he=()=>(Math.random()-.5)*.08,we=()=>(Math.random()-.5)*.04,ee=new Un({color:k,metalness:Math.max(0,.25+we()),roughness:Math.max(.3,Math.min(1,.5+he()))});ee.bumpMap=j,ee.bumpScale=.1;let ie=new Un({color:H,metalness:Math.max(0,.2+we()),roughness:Math.max(.3,Math.min(1,.55+he()))});ie.bumpMap=j,ie.bumpScale=.1;let Me=new Un({color:k,metalness:Math.max(0,.25+we()),roughness:Math.max(.3,Math.min(1,.5+he()))});Me.bumpMap=j,Me.bumpScale=.1;let rt=new Un({color:q,metalness:.1,roughness:Math.max(.5,Math.min(1,.7+he()))});rt.bumpMap=j,rt.bumpScale=.05;let Ge=new ri,ft=.28,Bt=.08,kt=.08,Jt=new je(new Tn(Bt,ft,kt),ie);Jt.position.set(-.06,ft/2,0),Jt.castShadow=!0,Ge.add(Jt);let pn=new je(new Tn(Bt,ft,kt),ie);pn.position.set(.06,ft/2,0),pn.castShadow=!0,Ge.add(pn);let zt=.28,Ot=.2,bt=.12,Xt=new je(new Tn(Ot,zt,bt),ee);Xt.position.set(0,ft+zt/2,0),Xt.castShadow=!0,Ge.add(Xt);let Mt=.06,mn=.22,cn=.06,En=new je(new Tn(Mt,mn,cn),Me);En.position.set(-(Ot/2+Mt/2),ft+zt-.08,0),En.castShadow=!0,Ge.add(En);let Cn=new je(new Tn(Mt,mn,cn),Me);if(Cn.position.set(Ot/2+Mt/2,ft+zt-.08,0),Cn.castShadow=!0,Ge.add(Cn),w.cape!=null){let Re=Ot*1.95,Se=Re*.6,Ne=ft+zt*.28,Dt=new js;Dt.moveTo(-Se/2,Ne/2),Dt.lineTo(Se/2,Ne/2),Dt.lineTo(Re/2,-Ne/2),Dt.lineTo(-Re/2,-Ne/2),Dt.closePath();let $t=new Dr(Dt),He=new Un({color:Pe(te(w.cape,.08)),metalness:.15,roughness:Math.max(.5,Math.min(1,.8+he())),side:gn});He.bumpMap=j,He.bumpScale=.12;let ot=new je($t,He);ot.position.set(0,ft+zt-Ne/2+.05,-bt/2-.02),ot.rotation.y=Math.PI,ot.castShadow=!0,Ge.add(ot);let Et=.055,hn=ft+zt+.02,jt=.02,nn=Ot/2+Mt*.5,qt=new je(new bi(Et,10,8,0,Math.PI*2,0,Math.PI*.55),He.clone());qt.position.set(-nn,hn,jt),qt.rotation.x=-Math.PI*.35,qt.rotation.z=Math.PI*.5,qt.scale.set(1.2,.85,1.1),qt.castShadow=!0,Ge.add(qt);let Pn=new je(new bi(Et,10,8,0,Math.PI*2,0,Math.PI*.55),He.clone());Pn.position.set(nn,hn,jt),Pn.rotation.x=-Math.PI*.35,Pn.rotation.z=-Math.PI*.5,Pn.scale.set(1.2,.85,1.1),Pn.castShadow=!0,Ge.add(Pn)}if(w.belt!=null){let Re=new Un({color:Pe(te(w.belt,.08)),metalness:.2,roughness:Math.max(.4,Math.min(1,.6+he()))});Re.bumpMap=j,Re.bumpScale=.1;let Se=.022,Ne=.04,Dt=new je(new Tn(Ot+.04,Se,bt+Ne),Re);Dt.position.set(0,ft+.04,0),Dt.castShadow=!0,Ge.add(Dt)}if(w.apron!=null){let Re=new Un({color:Pe(te(w.apron,.08)),metalness:.08,roughness:Math.max(.5,Math.min(1,.75+he())),side:gn});Re.bumpMap=j,Re.bumpScale=.12;let Se=Ot*.95,Ne=ft*.85,Dt=new je(new Di(Se,Ne),Re),$t=ft+.2;Dt.position.set(0,$t-Ne/2,bt/2+.02),Dt.castShadow=!0,Ge.add(Dt);let He=ft+zt+.02,ot=Ot/2+Mt*.2,Et=.018,hn=.008,jt=He-$t,nn=new je(new Tn(Et,jt,hn),Re.clone());nn.position.set(-ot,($t+He)/2,bt/2+.015),nn.castShadow=!0,Ge.add(nn);let qt=new je(new Tn(Et,jt,hn),Re.clone());qt.position.set(ot,($t+He)/2,bt/2+.015),qt.castShadow=!0,Ge.add(qt)}let oe=.1,xe=new je(new bi(oe,12,10),rt);xe.position.set(0,ft+zt+oe,0),xe.castShadow=!0,Ge.add(xe);let be=new xn({color:1710638}),pe=new je(new Tn(.032,.004,.004),be);pe.position.set(-.032,.028,oe*.92),xe.add(pe);let de=new je(new Tn(.032,.004,.004),be);de.position.set(.032,.028,oe*.92),xe.add(de);let _e=new xn({color:2957087}),Ae=new je(new Tn(.045,.012,.008),_e);Ae.position.set(0,-.028,oe*.92),xe.add(Ae);let ve=new Un({color:se,metalness:.05,roughness:Math.max(.6,Math.min(1,.85+he()))});ve.bumpMap=j,ve.bumpScale=.15;let at=Re=>{let Se=oe*.32,Ne=oe*.22,Dt=new je(new gi(Ne*.9,Se,5),ve);Dt.position.set(-oe*.25,oe*.22,oe*.72),Dt.rotation.x=.35,Dt.rotation.z=.12,Dt.castShadow=!0,Re.add(Dt);let $t=new je(new gi(Ne,Se,5),ve);$t.position.set(oe*.28,oe*.18,oe*.68),$t.rotation.x=.28,$t.rotation.z=-.1,$t.castShadow=!0,Re.add($t);let He=new je(new gi(Ne*.7,Se*.9,5),ve);He.position.set(0,oe*.28,oe*.78),He.rotation.x=.4,He.castShadow=!0,Re.add(He)};if(X==="female"){let Re=new je(new bi(oe*.92,12,10,0,Math.PI*2,0,Math.PI*.52),ve);Re.position.set(0,oe*.28,-oe*.18),Re.rotation.y=.06,Re.rotation.x=-.04,Re.castShadow=!0,xe.add(Re);let Se=new je(new Tn(oe*1.15,oe*2.2,oe*.55),ve);Se.position.set(0,-oe*.6,-oe*.95),Se.rotation.z=.03,Se.castShadow=!0,xe.add(Se),at(xe)}else{let Re=new je(new bi(oe*.9,12,10,0,Math.PI*2,0,Math.PI*.5),ve);Re.position.set(0,oe*.4,-oe*.12),Re.rotation.y=.08,Re.rotation.x=-.05,Re.rotation.z=.04,Re.castShadow=!0,xe.add(Re);let Se=new je(new bi(oe*.75,10,8,Math.PI*.2,Math.PI*.6,0,Math.PI*.4),ve);Se.position.set(0,oe*.1,-oe*.05),Se.rotation.y=.1,Se.castShadow=!0,xe.add(Se),at(xe)}return Ge.userData.leftLeg=Jt,Ge.userData.rightLeg=pn,Ge.userData.leftArm=En,Ge.userData.rightArm=Cn,Ge}function Xe(x,m){let R=x.userData;if(!R.leftLeg)return;let w=m*Math.PI*2,k=.35,H=.28;R.leftLeg.rotation.x=Math.sin(w)*k,R.rightLeg.rotation.x=Math.sin(w+Math.PI)*k,R.leftArm.rotation.y=Math.sin(w+Math.PI)*H,R.rightArm.rotation.y=Math.sin(w)*H}function ht(x){let m=x.userData;m.leftLeg&&(m.leftLeg.rotation.x=0,m.rightLeg.rotation.x=0,m.leftArm.rotation.y=0,m.rightArm.rotation.y=0)}function mt(x){let m=We(x.player,x.class,x.hairColor);m.position.copy(fe(x.x,x.y)),m.castShadow=!0,m.userData.unitId=x.id;let R=.28,w=.28,k=.12,H=.18,X=.04,z=new Di(H,X),q=new xn({color:6037528,side:gn,depthTest:!0,depthWrite:!1}),se=new je(z,q);se.position.set(0,R+w/2,k/2+.02),se.rotation.x=-Math.PI/2,se.rotation.z=Math.PI/4,se.visible=x.maxHp>0&&x.hp<x.maxHp&&x.hp>0,m.add(se),m.userData.slashMark=se,n.add(m),Y.set(x.id,m),Z(m,x.maxHp>0&&x.hp/x.maxHp<.35)}function qe(x){let m=Y.get(x.id);!m||!m.userData.slashMark||(m.userData.slashMark.visible=x.maxHp>0&&x.hp<x.maxHp&&x.hp>0)}let Ct=.35;function Z(x,m){if(x)if(m){x.rotation.x=.35,x.scale.setScalar(.96);let R=x.userData;R&&R.leftArm&&R.rightArm&&(R.leftArm.rotation.y=.2,R.rightArm.rotation.y=.2),x.traverse(w=>{w.isMesh&&w.material&&w.material.color&&(w.userData.originalColor||(w.userData.originalColor=w.material.color.clone()),w.material.color.copy(w.userData.originalColor).multiplyScalar(.82))})}else{x.rotation.x=0,x.scale.setScalar(1);let R=x.userData;R&&R.leftArm&&R.rightArm&&(R.leftArm.rotation.y=0,R.rightArm.rotation.y=0),x.traverse(w=>{w.isMesh&&w.material&&w.userData.originalColor&&w.material.color.copy(w.userData.originalColor)})}}function rn(x){if(x.level>=3)return;let m=x.maxHp>0?x.hp/x.maxHp:1;x.level+=1;let R=k=>Math.max(1,Math.ceil(k*1.1)),w=k=>Math.max(1,Math.ceil(k*1.1));x.maxHp=R(x.maxHp),x.maxMp=R(x.maxMp),x.hp=Math.max(1,Math.min(x.maxHp,Math.ceil(m*x.maxHp))),x.mp=Math.max(1,Math.min(x.maxMp,Math.ceil(m*x.maxMp))),x.str=w(x.str),x.agi=w(x.agi),x.vit=w(x.vit),x.dex=w(x.dex),x.luk=w(x.luk),x.int=w(x.int),x.range>2&&(x.range=w(x.range)),console.log("[LEVEL UP]",`${x.name} (${x.class}, P${x.player})`,`\u2192 Lv.${x.level}`,`| HP ${x.hp}/${x.maxHp} MP ${x.mp}/${x.maxMp} STR ${x.str} VIT ${x.vit}`),Qe(x)}function Qe(x){let m=Y.get(x.id),R=x.level===3?"levelup level3":x.level===2?"levelup level2":"levelup";if(Gu(x,R),!m)return;let w=performance.now(),k=0;function H(X){k++,k%2===0&&on();let z=X-w,q=Math.min(1,z/Ee),se=q<.5?1+.35*(q/.5):1+.35*(1-(q-.5)/.5);m.scale.setScalar(se),q<1?requestAnimationFrame(H):m.scale.setScalar(1)}requestAnimationFrame(H)}let lt=400,$e=280,Yt=.45,xt=160,C=280,b=350,K=500,Ee=600,ye=!1,Te=new F,Ke=new F,Ie=new F,ke=new F;function st(x=!1){let m=null;if(dt==="playing"&&ze.length>0){let X=ze[Ue];m=D.find(z=>z.id===X&&z.hp>0)}if(m||(m=D.find(X=>X.player===ce&&X.hp>0)),!m)return;let R=a.position.distanceTo(c);if(R<.1&&(R=o),u.copy(a.position).sub(c).normalize(),u.lengthSq()<.01&&u.copy(l).normalize(),Ie.copy(fe(m.x,m.y)),ke.copy(Ie).add(u.clone().multiplyScalar(R)),x||ye){c.copy(Ie),a.position.copy(ke),a.lookAt(c),on();return}ye=!0,Te.copy(c),Ke.copy(a.position);let w=performance.now(),k=0;Rn.shadowMap.enabled=!1;function H(X){k++,k%2===0&&on();let z=Math.min(1,(X-w)/lt),q=z*(2-z);c.lerpVectors(Te,Ie,q),a.position.lerpVectors(Ke,ke,q),a.lookAt(c),z<1?requestAnimationFrame(H):(Rn.shadowMap.enabled=!0,ye=!1)}requestAnimationFrame(H)}let ut=0,ce=1,dt="draft",it="pvp",pt="balanced",Je=new Set(eo),Fe=0,et=null,Lt=new Set,ze=[],Ue=0,ge=null,U=new Map,Le=null;function De(x){if(!x||x.hp<=0)return;Le=x.id;let m=document.getElementById("unit-preview-card"),R=document.getElementById("unit-preview-image"),w=document.getElementById("unit-preview-name"),k=document.getElementById("unit-preview-meta"),H=document.getElementById("unit-preview-stats");m.classList.remove("player-1","player-2"),m.classList.add(x.player===1?"player-1":"player-2"),m.classList.toggle("level-2",x.level>=2&&x.level<3),m.classList.toggle("level-3",x.level>=3),R.src=Fr[x.class]||"",R.alt=x.name,w.textContent=x.name,k.textContent=`Lv.${x.level} ${x.class} \u2014 Player ${x.player}`,H.innerHTML=[["HP",`${x.hp}/${x.maxHp}`],["MP",`${x.mp}/${x.maxMp}`],["STR",le(x,"str")],["AGI",le(x,"agi")],["VIT",le(x,"vit")],["DEX",le(x,"dex")],["LUK",le(x,"luk")],["INT",le(x,"int")]].map(([z,q])=>`<span class="stat-label">${z}</span><span class="stat-val${z==="HP"?" stat-val-hp":""}">${q}</span>`).join("");let X=x.maxHp>0&&x.hp/x.maxHp<.3;m.classList.toggle("low-hp",X),m.style.display="block"}function nt(){Le=null;let x=document.getElementById("unit-preview-card");x.classList.remove("low-hp","level-2","level-3"),x.style.display="none"}let Ye=!1,Pt=!1,Ut=!1,Nt=null,wt=!1,vt=!1,en=!1,an=[],Bn=new ri;n.add(Bn);let Jn=[],yi=!0,li=0,ts=0;function on(){yi=!0,li=performance.now()}let Ui=new ri;n.add(Ui);let ir=[],so=Tt,ro=.02,E=3368703,G=13382451;function Q(x,m){let R=x/2,w=R-m,k=new js;k.moveTo(-R,-R),k.lineTo(R,-R),k.lineTo(R,R),k.lineTo(-R,R),k.lineTo(-R,-R);let H=new Js;return H.moveTo(-w,-w),H.lineTo(w,-w),H.lineTo(w,w),H.lineTo(-w,w),H.lineTo(-w,-w),k.holes.push(H),new Dr(k)}let ne=Q(so,ro);function W(x=null){let m=D.filter(R=>R.hp>0&&R.id!==x).map(R=>`${R.id},${R.x},${R.y},${R.player}`).sort().join("|");if(!(W._lastSig===m&&W._lastExclude===x)){for(W._lastSig=m,W._lastExclude=x,ir.forEach(R=>R.dispose()),ir.length=0;Ui.children.length;){let R=Ui.children[0];Ui.remove(R)}D.filter(R=>R.hp>0&&R.id!==x).forEach(R=>{let w=R.x,k=R.y,X=(Wn+e.height[k][w]*.35)/2+Wn/2,z=w*Tt-re+Tt/2,q=k*Tt-ue+Tt/2,se=X+.02,he=R.player===1?E:G,we=new xn({color:he,side:gn}),ee=new je(ne,we);ee.rotation.x=-Math.PI/2,ee.position.set(z,se,q),Ui.add(ee),ir.push(we)}),on()}}let Oe=1.15,Ze={1:8102901,2:15628943},Ve=(()=>{let x=new xn({color:Ze[1]}),m=new je(new gi(.1,.25,8),x);return m.rotation.x=Math.PI,m.visible=!1,n.add(m),m})();function ct(){if(dt!=="playing"||ze.length===0||en){Ve.visible=!1,Ve.removeFromParent(),n.add(Ve);return}let x=ze[Ue],m=D.find(w=>w.id===x);if(!m||m.hp<=0){Ve.visible=!1,Ve.removeFromParent(),n.add(Ve);return}let R=Y.get(x);if(!R){Ve.visible=!1;return}Ve.removeFromParent(),R.add(Ve),Ve.position.set(0,Oe,0),Ve.material&&Ve.material.color.setHex(Ze[m.player]??Ze[1]),Ve.visible=!0}function At(x){let m=[[0,1],[0,-1],[1,0],[-1,0]],R=[];for(let[w,k]of m){let H=x.x+w,X=x.y+k;!nr(e,H,X)||D.some(q=>q.id!==x.id&&q.x===H&&q.y===X&&q.hp>0)||R.push(Math.atan2(w,k))}return R}function gt(x){if(an.length===0)return x;if(an.length===1)return an[0];let m=an[0],R=Math.abs(yt(x-m));for(let w=1;w<an.length;w++){let k=Math.abs(yt(x-an[w]));k<R&&(R=k,m=an[w])}return m}function yt(x){for(;x>Math.PI;)x-=2*Math.PI;for(;x<-Math.PI;)x+=2*Math.PI;return x}let ln=1.2,tn=(()=>{let x=new je(new gi(.12,.35,8),new xn({color:4500223}));return x.rotation.x=-Math.PI/2,x.visible=!1,n.add(x),x})();function _n(x,m){if(!en||ze.length===0||an.length===0)return;let R=ze[Ue],w=D.find(we=>we.id===R),k=Y.get(R);if(!w||!k)return;Hr(x,m),Oi.setFromCamera(Fi,a);let H=Oi.intersectObjects(V.children,!0);if(H.length===0)return;let X=null;for(let we of H){let ee=we.object;for(;ee&&(ee.userData.gx==null||ee.userData.gy==null);)ee=ee.parent;if(ee&&ee.userData.gx!=null){X=we.point;break}}if(!X)return;let z=fe(w.x,w.y),q=X.x-z.x,se=X.z-z.z;if(q*q+se*se<1e-6)return;let he=Math.atan2(q,se);k.rotation.y=gt(he)}function ci(){if(ze.length===0)return;let x=ze[Ue],m=D.find(k=>k.id===x),R=Y.get(x);if(!m||!R)return;an=[[0,1],[0,-1],[1,0],[-1,0]].map(([k,H])=>Math.atan2(k,H)),tn.removeFromParent(),R.add(tn),tn.position.set(0,ln,0),tn.rotation.x=-Math.PI/2,tn.rotation.y=0,tn.rotation.z=Math.PI,tn.visible=!0,R.rotation.y=an[0]}function Zt(){tn.visible=!1,tn.removeFromParent(),n.add(tn)}let St=(()=>{let x=Nr,m=[1];for(let R=0;R<Math.floor((x-1)/2);R++)m.push(2,2,1,1);return x%2===1?m.push(2):(m.push(2,2),m.push(1)),m})();function kn(){return St[Fe]}function Kt(){let x=kn(),m=0;for(let R=0;R<Fe;R++)St[R]===x&&m++;return m+1}function ei(){dt="draft",Fe=0,Je=new Set(eo),et=null,Lt.clear(),fn(),is(),document.getElementById("turn-menu").style.display="none",document.getElementById("draft-panel").style.display="flex"}function sr(){return D.filter(x=>x.hp>0).sort((x,m)=>{let R=le(x,"agi"),w=le(m,"agi");if(w!==R)return w-R;let k=le(x,"dex");return le(m,"dex")-k}).map(x=>x.id)}function ns(){document.getElementById("draft-panel").style.display="none";let x=document.getElementById("draft-placement-card");x&&(x.style.display="none",x.innerHTML=""),fn();let m=document.getElementById("battle-start-overlay");m&&(m.classList.add("visible"),m.setAttribute("aria-hidden","false")),document.getElementById("draft-panel").style.display="none";let R=document.getElementById("draft-placement-card");for(R&&(R.style.display="none",R.innerHTML=""),dt="playing",ut=0,ze=sr(),Ue=0;Ue<ze.length&&D.find(H=>H.id===ze[Ue]).hp<=0;)Ue++;Ue>=ze.length&&(Ue=0);let w=D.find(H=>H.id===ze[Ue]);ce=w?w.player:1,wt=!1,vt=!1,ge=ze[Ue],setTimeout(()=>{m&&(m.classList.remove("visible"),m.setAttribute("aria-hidden","true")),document.getElementById("turn-menu").style.display="flex",W(),Ft(),ct(),st(!0)},4e3)}function is(){let x=document.getElementById("draft-panel"),m=document.getElementById("draft-title"),R=document.getElementById("draft-classes"),w=document.getElementById("draft-message"),k=document.getElementById("turn-player"),H=document.getElementById("draft-placement-card");if(et){x.style.display="none",k.textContent=`Draft: Player ${kn()} \u2014 place ${Vt[et].name}`;let z=kn();H.style.display="flex",H.classList.remove("player-1","player-2"),H.classList.add("player-"+z),H.style.left=z===1?"24px":"",H.style.right=z===2?"24px":"";let q=[...D.filter(we=>we.player===z).map(we=>we.class),et],se=(we,ee)=>{let ie=Vt[we];return`
        <div class="draft-class-card${ee?" draft-class-card-current":""}">
          <img class="draft-class-card-image" src="${Fr[we]||""}" alt="${ie.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
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
        </div>
      `},he=3;if(q.length>he){H.classList.add("draft-placement-cols");let we=[];for(let ie=0;ie<q.length;ie+=he)we.push(q.slice(ie,ie+he));let ee=q.length-1;H.innerHTML=we.map((ie,Me)=>{let rt=Me===we.length-1,Ge=ie.map((ft,Bt)=>{let Jt=Me*he+Bt===ee;return se(ft,Jt)}).join("");return`<div class="draft-placement-col${rt?" draft-placement-col-current":""}">${Ge}</div>`}).join("")}else H.classList.remove("draft-placement-cols"),H.innerHTML=q.map((we,ee)=>{let ie=ee===q.length-1;return se(we,ie)}).join("");it==="pvcpu"&&kn()===2&&setTimeout(or,500),it==="cvcpu"&&setTimeout(or,500);return}H.style.display="none",H.innerHTML="",dt==="draft"&&(x.style.display="flex");let X=kn();m.textContent=`Player ${X}: Pick a class (${Kt()}/${Nr})`,w.textContent="",R.innerHTML="",k.textContent=`Draft: Player ${X} \u2014 pick a class`,Ax([...eo]).forEach(z=>{let q=Je.has(z),se=Vt[z],he=document.createElement("button");he.type="button",he.className="draft-class-card"+(q?"":" draft-class-card-selected"),he.disabled=!q,he.innerHTML=`
          <img class="draft-class-card-image" src="${Fr[z]||""}" alt="${se.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="draft-class-card-body">
            <div class="draft-class-card-name">${se.name}</div>
            <div class="draft-class-card-stats">
              <span class="draft-stat-label">HP</span><span class="draft-stat-value">${se.hp}</span>
              <span class="draft-stat-label">MP</span><span class="draft-stat-value">${se.mp}</span>
              <span class="draft-stat-label">STR</span><span class="draft-stat-value">${se.str}</span>
              <span class="draft-stat-label">AGI</span><span class="draft-stat-value">${se.agi}</span>
              <span class="draft-stat-label">VIT</span><span class="draft-stat-value">${se.vit}</span>
              <span class="draft-stat-label">DEX</span><span class="draft-stat-value">${se.dex}</span>
              <span class="draft-stat-label">LUK</span><span class="draft-stat-value">${se.luk}</span>
              <span class="draft-stat-label">INT</span><span class="draft-stat-value">${se.int}</span>
              <span class="draft-stat-label">Range</span><span class="draft-stat-value">${se.range}</span>
            </div>
          </div>
        `,q&&he.addEventListener("click",()=>bn(z)),R.appendChild(he)}),it==="pvcpu"&&kn()===2&&setTimeout(or,500),it==="cvcpu"&&setTimeout(or,500)}function bn(x){if(!Je.has(x)||et)return;et=x;let m=kn(),R=new Set(D.map(H=>H.y*e.w+H.x)),w=Cx(e,m,R),k=Mu(e,w);Lt=new Set(k.map(H=>H.gy*e.w+H.gx)),Uu(k),is()}function _i(x,m){if(!et)return;let R=kn(),w=m*e.w+x;if(!Lt.has(w))return;let k=Vt[et],H={id:ae++,player:R,x,y:m,level:1,name:k.name,class:et,hairColor:(to[et]||to.knight).hair,hp:k.hp,maxHp:k.maxHp,mp:k.mp,maxMp:k.maxMp,str:k.str,agi:k.agi,vit:k.vit,dex:k.dex,luk:k.luk,int:k.int,range:k.range};D.push(H),mt(H);let X=Y.get(H.id);X&&(X.rotation.y=H.player===1?Math.PI:0),Je.delete(et),et=null,Lt.clear(),fn();let z=document.getElementById("draft-placement-card");if(z&&(z.style.display="none",z.innerHTML=""),Fe++,Fe>=2*Nr){ns();return}let q=kn(),se=Kt(),he=document.getElementById("draft-panel"),we=document.getElementById("draft-title"),ee=document.getElementById("draft-message"),ie=document.getElementById("draft-classes"),Me=document.getElementById("turn-player");he&&we&&ie&&Me&&(he.style.display="flex",we.textContent=`Player ${q}: Pick a class (${se}/${Nr})`,ee&&(ee.textContent="Get ready\u2026"),ie.innerHTML="",Me.textContent=`Draft: Player ${q} \u2014 pick a class`),setTimeout(is,1500)}function Ft(){Ft._pending||(Ft._pending=!0,requestAnimationFrame(()=>{Ft._pending=!1,Xn()}))}function Xn(){let x=Ft._cache||(Ft._cache={}),m=x.turnEl||(x.turnEl=document.getElementById("turn-player")),R=x.menuLabel||(x.menuLabel=document.getElementById("menu-label")),w=x.turnMenu||(x.turnMenu=document.getElementById("turn-menu")),k=x.unitInfo||(x.unitInfo=document.getElementById("unit-info")),H=x.unitNameEl||(x.unitNameEl=document.getElementById("unit-name")),X=x.unitLevelClassEl||(x.unitLevelClassEl=document.getElementById("unit-level-class")),z=x.unitStatsEl||(x.unitStatsEl=document.getElementById("unit-stats")),q=x.unitClassImageEl||(x.unitClassImageEl=document.getElementById("unit-class-image"));if(dt==="playing"&&D.forEach(ee=>{if(ee.hp<=0)return;let ie=Y.get(ee.id);ie&&Z(ie,ee.maxHp>0&&ee.hp/ee.maxHp<Ct)}),w.classList.remove("player-1","player-2"),w.classList.add(ce===1?"player-1":"player-2"),w.classList.toggle("level-2",!1),w.classList.toggle("level-3",!1),dt==="playing"&&ze.length>0){let ee=ze[Ue];D.find(Me=>Me.id===ee&&Me.hp>0)&&(ge==null||!D.find(Me=>Me.id===ge&&Me.hp>0))&&(ge=ee)}if(ge!=null){let ee=D.find(ie=>ie.id===ge);if(ee&&ee.hp>0){k.classList.remove("no-unit");let ie=ee.maxHp>0&&ee.hp/ee.maxHp<.25;w.classList.toggle("low-hp",ie),w.classList.toggle("level-2",ee.level>=2&&ee.level<3),w.classList.toggle("level-3",ee.level>=3),H.textContent=ee.name,X.textContent=`Lv.${ee.level} ${ee.class}`,q.src=Fr[ee.class]||"",q.alt=ee.name,z.innerHTML=[["HP",`${ee.hp}/${ee.maxHp}`],["MP",`${ee.mp}/${ee.maxMp}`],["STR",le(ee,"str")],["AGI",le(ee,"agi")],["VIT",le(ee,"vit")],["DEX",le(ee,"dex")],["LUK",le(ee,"luk")],["INT",le(ee,"int")]].map(([Me,rt])=>`<span>${Me}</span><span class="stat-val${Me==="HP"?" stat-val-hp":""}">${rt}</span>`).join("")}else w.classList.remove("low-hp","level-2","level-3"),k.classList.add("no-unit"),H.textContent="\u2014 Select a unit \u2014",X.textContent="",z.textContent="",q.src="",q.alt=""}else w.classList.remove("low-hp","level-2","level-3"),k.classList.add("no-unit"),H.textContent="\u2014 Select a unit \u2014",X.textContent="",z.textContent="",q.src="",q.alt="";if(ge!=null)m.textContent=`Player ${ce} \u2014 Unit ${H.innerHTML} active`;else{let ee=ze.length?D.find(ie=>ie.id===ze[Ue]):null;m.textContent=ee?`${ee.name} (Player ${ce})`:`Player ${ce}`}R.textContent=`Player ${ce}`;let se=x.btnAttack||(x.btnAttack=document.getElementById("btn-attack")),he=x.btnSkill||(x.btnSkill=document.getElementById("btn-skill")),we=x.btnEnd||(x.btnEnd=document.getElementById("btn-end"));if(it==="cvcpu"&&dt==="playing")se.disabled=!0,he.disabled=!0,we&&(we.disabled=!0),m.textContent=`Player ${ce} (CPU)`;else if(en)se.disabled=!0,he.disabled=!0,m.textContent="Click on map to choose facing direction";else if(dt==="playing"){se.disabled=vt;let ee=ze.length?ze[Ue]:null,ie=ee?D.find(Ge=>Ge.id===ee&&Ge.hp>0):null,Me=it!=="cvcpu"&&(it!=="pvcpu"||ce===1),rt=Me&&ie&&!vt?kr(ie):[];he.disabled=vt||!Me||rt.length===0,we&&(we.disabled=!1)}if(dt==="playing"){let ee=Math.min(ut+1,ys);m.textContent=(m.textContent||"")+` \u2014 Turn ${ee}/${ys}`;let ie=x.turnsLeftEl||(x.turnsLeftEl=document.getElementById("turns-left")),Me=x.turnsLeftValueEl||(x.turnsLeftValueEl=document.getElementById("turns-left-value"));if(ie&&Me){ie.style.display="";let rt=Math.max(0,ys-ut);Me.textContent=String(rt),ie.classList.toggle("turns-left-low",rt<=10)}}else{let ee=x.turnsLeftEl||(x.turnsLeftEl=document.getElementById("turns-left"));ee&&(ee.style.display="none")}dt==="playing"&&co(ce)&&!Ye&&setTimeout(yn,700)}function Ht(){on(),nt(),Pt=!1,Ut=!1,Nt=null,en=!1,an=[],Zt(),fn();let x=ze.length;if(x===0)return;let m=ze[Ue],R=D.find(z=>z.id===m);if(R&&R.tempDebuff&&R.tempDebuff.duration--,R&&R.tempDebuff&&R.tempDebuff.duration<=0&&(R.tempDebuff=void 0),R&&R.tempBuff&&R.tempBuff.duration--,R&&R.tempBuff&&R.tempBuff.duration<=0&&(R.tempBuff=void 0),R&&R.hp>0){let z=Math.ceil(le(R,"int")*.15);R.mp=Math.min(R.maxMp,R.mp+z)}if(R&&R.hp>0){let z=R.x,q=R.y;e.type[q][z]===tt.CENTER&&R.level===1&&rn(R);let se=R.player===1?tt.BASE_TOP:tt.BASE_BOTTOM;e.type[q][z]===se&&R.level===2&&rn(R)}if(ut++,ut>=ys){Wu();return}let w=(Ue+1)%x,k=0;for(;k<x;){let z=ze[w],q=D.find(se=>se.id===z);if(q&&q.hp>0)break;w=(w+1)%x,k++}let H=w===0;Ue=w;for(let z=0;z<x;z++){let q=ze[Ue],se=D.find(we=>we.id===q);if(!se||se.hp<=0)break;let he=se.tempDebuff&&se.tempDebuff.poison!=null?se.tempDebuff.poison:0;if(he<=0)break;if(se.hp=Math.max(0,se.hp-he),qn(se.x,se.y,String(he),!1,"poison"),qe(se),se.hp<=0){Sn(se),w=(Ue+1)%x;let we=0;for(;we<x;){let ee=ze[w],ie=D.find(Me=>Me.id===ee);if(ie&&ie.hp>0)break;w=(w+1)%x,we++}Ue=w;continue}break}let X=D.find(z=>z.id===ze[Ue]);ce=X?X.player:1,wt=!1,vt=!1,ge=ze[Ue],H&&(ze=sr(),Ue=0),Ft(),ct(),st()}document.getElementById("btn-attack").addEventListener("click",()=>{if(Ye||vt||dt!=="playing"||ze.length===0)return;nt();let x=ze[Ue],m=D.find(k=>k.id===x);if(!m||m.hp<=0)return;let R=m.range!=null?m.range:1;ge=x,Pt=!0;let w=bu(e,m.x,m.y,R);U=new Map,w.forEach((k,H)=>{let X=H%e.w,z=Math.floor(H/e.w);_s(e,m.x,m.y,X,z)&&U.set(H,k)}),Nu(U),Ft()}),document.getElementById("btn-skill").addEventListener("click",x=>{if(x.preventDefault(),x.stopPropagation(),Ye||vt)return;let m=ze[Ue],R=m?D.find(z=>z.id===m&&z.hp>0):null;if(!R||R.player!==ce)return;let w=document.getElementById("skill-list-overlay"),k=document.getElementById("btn-skill");if(!k)return;if(w&&w.style.display==="block"){w.style.display="none";return}let H=kr(R),X=k.getBoundingClientRect();w||(w=document.createElement("div"),w.id="skill-list-overlay",w.className="skill-list-overlay",w.setAttribute("aria-hidden","true"),document.body.appendChild(w)),w.style.left=`${X.left}px`,w.style.top=`${X.top-4}px`,w.style.transform="translateY(-100%)",w.style.right="auto",w.style.bottom="auto",w.style.display="none",H.length===0?w.innerHTML='<div class="skill-option" style="cursor:default;color:#8b949e;">No skills available</div>':(w.innerHTML=H.map((z,q)=>`<button type="button" class="skill-option" data-skill-index="${q}" ${z.disabled?"disabled":""}>
          <span class="skill-name">${z.name}</span> <span class="skill-meta">${z.cost} MP \xB7 Lv.${z.level}</span><br/>
          <span class="skill-meta">${z.description}</span>
        </button>`).join(""),w.querySelectorAll(".skill-option").forEach((z,q)=>{z.addEventListener("click",se=>{se.preventDefault(),se.stopPropagation();let he=H[q];if(Nt=he,w.style.display="none",w.setAttribute("aria-hidden","true"),he.target==="self"){if(R.mp<he.cost)return;R.mp-=he.cost,vt=!0,Br(R,R,he,{showFloatingCombatText:qn,handleUnitDeath:Sn,updateUnitSlashVisibility:qe,updateTurnUI:Ft},()=>{fn(),Ut=!1,Nt=null,Ms=new Set,wt?Ht():Ft()}),Ft();return}if(he.target==="ally"&&lr(R,he,D).filter(ie=>ie.targetUnit&&ie.targetUnit.id!==R.id).length===0&&R.mp>=he.cost){R.mp-=he.cost,vt=!0,Br(R,R,he,{showFloatingCombatText:qn,handleUnitDeath:Sn,updateUnitSlashVisibility:qe,updateTurnUI:Ft},()=>{fn(),Ut=!1,Nt=null,Ms=new Set,wt?Ht():Ft()}),Ft();return}Ut=!0,Pt=!1,Du(R,he),Ft()})})),requestAnimationFrame(()=>{w.style.display="block",w.style.visibility="visible",w.setAttribute("aria-hidden","false")})}),document.addEventListener("click",x=>{let m=document.getElementById("skill-list-overlay"),R=document.getElementById("btn-skill"),w=document.querySelector(".skill-wrap");!m||m.style.display!=="block"||w&&w.contains(x.target)||m.contains(x.target)||(m.style.display="none",m.setAttribute("aria-hidden","true"))}),document.getElementById("btn-end").addEventListener("click",()=>{if(Ye||en||dt!=="playing"||ze.length===0)return;let x=ze[Ue],m=D.find(w=>w.id===x);if(!m||m.hp<=0)return;en=!0,ge=null,Pt=!1,U=new Map,fn(),ci(),ct();let R=document.getElementById("turn-player");R.textContent="Click on map to choose facing direction",Ft()}),c.set(0,8,0),a.position.copy(c).add(l),a.lookAt(c);let vs=document.getElementById("mode-select-overlay"),rr=document.getElementById("mode-pvp"),jl=document.getElementById("mode-pvcpu"),ao=document.getElementById("mode-cvcpu"),ar=document.getElementById("ai-draft-preference"),Ql=document.getElementById("mode-select-ai-draft");Ql&&(Ql.style.display=_u?"":"none"),ar&&(Ex.forEach(x=>{let m=document.createElement("option");m.value=x.value,m.textContent=x.label,ar.appendChild(m)}),ar.value=pt,ar.addEventListener("change",()=>{pt=ar.value}));let Ni=new Audio;Ni.loop=!0,Ni.volume=.3,Ni.preload="auto";let oo=window.location.href.replace(/[^/]*$/,""),ec=typeof window.TACTICS_BGM_URL<"u"?window.TACTICS_BGM_URL:oo+(oo.includes("/src/")?"../assets/music/tavern.mp3":"assets/music/tavern.mp3");Ni.src=ec,Ni.addEventListener("error",()=>{let x=oo+"assets/music/tavern.mp3";x!==ec&&(Ni.src=x)});function lo(){Ni.paused&&Ni.play().catch(()=>{})}vs&&rr&&jl?(rr.addEventListener("click",()=>{lo(),it="pvp",vs.classList.add("hidden"),ei()}),jl.addEventListener("click",()=>{lo(),it="pvcpu",vs.classList.add("hidden"),ei()}),ao&&(_u?ao.addEventListener("click",()=>{lo(),it="cvcpu",vs.classList.add("hidden"),ei()}):ao.style.display="none")):ei();function co(x){return it==="pvcpu"&&x===2||it==="cvcpu"}function Au(){let x=eo.filter(ee=>Je.has(ee));if(x.length===0)return null;let m=pt||"balanced";if(m==="random")return x[Math.floor(Math.random()*x.length)];if(m==="custom")return Tx.filter(ie=>Je.has(ie))[0]??x[0]??null;let R=["hp","maxHp","mp","str","agi","vit","dex","luk","int"];function w(ee){let ie=Vt[ee];if(!ie)return 1/0;let Me=R.map(Ge=>ie[Ge]??0),rt=Me.reduce((Ge,ft)=>Ge+ft,0)/Me.length;return Me.reduce((Ge,ft)=>Ge+(ft-rt)**2,0)/Me.length}if(m==="tanky")return[...x].sort((ie,Me)=>{let rt=Vt[ie]?.hp??0,Ge=Vt[Me]?.hp??0;return Ge!==rt?Ge-rt:(Vt[Me]?.vit??0)-(Vt[ie]?.vit??0)})[0]??null;if(m==="aggressive")return[...x].sort((ie,Me)=>{let rt=Vt[ie]?.str??0,Ge=Vt[Me]?.str??0;return Ge!==rt?Ge-rt:(Vt[Me]?.agi??0)-(Vt[ie]?.agi??0)})[0]??null;if(m==="scout")return[...x].sort((ie,Me)=>{let rt=Vt[ie]?.agi??0,Ge=Vt[Me]?.agi??0;return Ge!==rt?Ge-rt:(Vt[Me]?.dex??0)-(Vt[ie]?.dex??0)})[0]??null;if(m==="ranged")return[...x].sort((ie,Me)=>{let rt=Vt[ie]?.range??0,Ge=Vt[Me]?.range??0;return Ge!==rt?Ge-rt:(Vt[Me]?.dex??0)-(Vt[ie]?.dex??0)})[0]??null;if(m==="caster")return[...x].sort((ie,Me)=>{let rt=Vt[ie]?.int??0,Ge=Vt[Me]?.int??0;return Ge!==rt?Ge-rt:(Vt[Me]?.mp??0)-(Vt[ie]?.mp??0)})[0]??null;let k=kn(),X=wx(Nr),z=D.filter(ee=>ee.player===k).map(ee=>ee.class),q={};for(let ee of Object.keys(Qa))q[ee]=0;for(let ee of z)for(let ie of Object.keys(Qa))if(Qa[ie].includes(ee)){q[ie]++;break}let se=ee=>Math.max(0,(X[ee]??0)-(q[ee]??0)),he=ee=>{for(let[ie,Me]of Object.entries(Qa))if(Me.includes(ee))return ie;return null};return[...x].sort((ee,ie)=>{let Me=he(ee),rt=he(ie),Ge=Me!=null?se(Me):0,ft=rt!=null?se(rt):0;if(ft!==Ge)return ft-Ge;let Bt=Vt[ee]?.hp??0,kt=Vt[ie]?.hp??0;return kt!==Bt?kt-Bt:w(ee)-w(ie)})[0]??null}function or(){if(dt!=="draft"||!co(kn()))return;if(!et){let R=Au();R&&bn(R),setTimeout(or,500);return}let x=Array.from(Lt).map(R=>({gx:R%e.w,gy:Math.floor(R/e.w)})),m=Mu(e,x);if(m.length>0){let{gx:R,gy:w}=m[0];_i(R,w)}}function tc(){let x=[];for(let m=0;m<e.h;m++)for(let R=0;R<e.w;R++)e.type[m][R]===tt.CENTER&&x.push({gx:R,gy:m});return x}function Ru(x){let m=[],R=x===1?tt.BASE_TOP:tt.BASE_BOTTOM;for(let w=0;w<e.h;w++)for(let k=0;k<e.w;k++)e.type[w][k]===R&&m.push({gx:k,gy:w});return m}function ti(x,m,R,w){return Math.abs(x-R)+Math.abs(m-w)}function Cu(x){let m=x.range!=null?x.range:1,R=[];for(let w of D){if(w.hp<=0||w.player===x.player)continue;let k=ti(x.x,x.y,w.x,w.y);k<=m&&k>0&&_s(e,x.x,x.y,w.x,w.y)&&R.push({target:w,dist:k})}return R}function Pu(x){let m=D.filter(R=>R.hp>0&&R.player===x.player&&R.id!==x.id);for(let R of m){let w=D.filter(k=>k.hp>0&&k.player!==x.player);for(let k of w){let H=k.range!=null?k.range:1,X=ti(k.x,k.y,R.x,R.y);if(X<=H&&X>0&&_s(e,k.x,k.y,R.x,R.y))return!0}}return!1}function Wt(x,m,R,w){let k=x.x,H=x.y,X=es(e,x.x,x.y,m,R,D,x);if(!X||X.length<=1){w&&w();return}ge=null,fn(),Ye=!0,W(x.id),on();let z=Y.get(x.id),q=1;function se(){if(q>=X.length){x.x=X[X.length-1].x,x.y=X[X.length-1].y,Ye=!1,ht(z),W(),U=new Map,wt=!0,w&&w();return}let he=X[q-1],we=X[q],ee=fe(he.x,he.y).clone(),ie=fe(we.x,we.y).clone(),Me=ie.x-ee.x,rt=ie.z-ee.z;Me*Me+rt*rt>1e-6&&(z.rotation.y=Math.atan2(Me,rt));let Ge=performance.now(),ft=0;function Bt(kt){ft++,ft%2===0&&on();let Jt=Math.min(1,(kt-Ge)/ja),zt=(Ot=>Ot*Ot*(3-2*Ot))(Jt);z.position.lerpVectors(ee,ie,zt),Xe(z,zt),Jt<1?requestAnimationFrame(Bt):(q++,se())}requestAnimationFrame(Bt)}se()}function nc(x,m){let R=le(m,"agi")*.7+le(m,"luk")*.3,k=Math.random()*Math.max(.001,R)<=le(x,"dex"),H=0;if(k){let bt=le(x,"str")*.7+le(x,"dex")*.2+le(x,"int")*.1-(le(m,"vit")*.3+le(m,"luk")*.2);H=Math.max(1,Math.floor(bt))}vt=!0,ge=null,Pt=!1,fn(),console.log("[ATTACK]",`${x.name} (${x.class}, P${x.player})`,"\u2192",`${m.name} (${m.class}, P${m.player})`,k?`${H} dmg`:"MISS",`| ${m.name} HP ${m.hp} \u2192 ${Math.max(0,m.hp-H)}/${m.maxHp}`);let X=Y.get(x.id);if(!X||!X.userData.rightArm){k?(m.hp=Math.max(0,m.hp-H),qn(m.x,m.y,String(H),!1),qe(m),m.hp<=0&&Sn(m)):qn(m.x,m.y,"MISS",!0),setTimeout(wt?()=>Ht():()=>Ft(),400);return}let z=fe(x.x,x.y).clone(),q=fe(m.x,m.y).clone(),se=z.clone().lerp(q,.35),he=q.x-z.x,we=q.z-z.z;if(he*he+we*we>1e-6&&(X.rotation.y=Math.atan2(he,we)),(x.range!=null?x.range:1)>2){let ve=function(at){Ae++,Ae%2===0&&on();let Re=at-_e,Se=Math.min(1,Re/C);if(Mt.position.lerpVectors(pe,de,Se),!oe&&Se>=1&&(oe=!0,n.remove(Mt),bt.dispose(),Xt.dispose(),k?(m.hp=Math.max(0,m.hp-H),qn(m.x,m.y,String(H),!1),m.hp<=0&&(be=!0),Y.get(m.id)?xe=at:be&&(Sn(m),be=!1),qe(m)):qn(m.x,m.y,"MISS",!0)),xe!=null&&k){let Ne=Y.get(m.id);if(Ne){let Dt=Math.min(1,(at-xe)/xt),$t=1-Dt;Bi.copy(En).multiplyScalar(Cn*$t),Ne.position.copy(cn).add(Bi),Dt>=1&&(Ne.position.copy(cn),xe=null,be&&(Sn(m),be=!1))}else xe=null,be&&(Sn(m),be=!1)}if(Se<1)requestAnimationFrame(ve);else{let Ne=xe==null;Ne&&be&&(Sn(m),be=!1),Ne?(Rn.shadowMap.enabled=!0,setTimeout(wt?()=>Ht():()=>Ft(),400)):requestAnimationFrame(ve)}},bt=new Qi(.035,.035,.4,6),Xt=new xn({color:16763972}),Mt=new je(bt,Xt);Mt.position.copy(z),Mt.position.y+=.6;let mn=q.clone().sub(z).normalize();Mt.quaternion.setFromUnitVectors(new F(0,1,0),mn),n.add(Mt);let cn=fe(m.x,m.y).clone(),En=q.clone().sub(z).normalize(),Cn=.4,oe=!1,xe=null,be=!1,pe=Mt.position.clone(),de=q.clone();de.y+=.6;let _e=performance.now(),Ae=0;Rn.shadowMap.enabled=!1,requestAnimationFrame(ve);return}let Me=!1,rt=performance.now(),Ge=X.userData.rightArm,ft=null,Bt=!1,kt=fe(m.x,m.y).clone(),Jt=q.clone().sub(z).normalize(),pn=.4,zt=0;function Ot(bt){zt++,zt%2===0&&on();let Xt=bt-rt,Mt=Math.min(1,Xt/$e),mn=Mt<=.4?Mt/.4:1,cn=Mt>.4?(Mt-.4)/.6:0;Mt<=.4?X.position.lerpVectors(z,se,mn):X.position.lerpVectors(se,z,cn);let En=Mt<=.35?Mt/.35:Mt<=.7?(.7-Mt)/.35:0;if(Ge.rotation.y=-En*1.1,!Me&&Mt>=Yt&&(Me=!0,k?(m.hp=Math.max(0,m.hp-H),qn(m.x,m.y,String(H),!1),m.hp<=0&&(Bt=!0),qe(m),Y.get(m.id)?ft=bt:Bt&&(Sn(m),Bt=!1)):qn(m.x,m.y,"MISS",!0)),ft!=null&&k){let Cn=Y.get(m.id);if(Cn){let oe=Math.min(1,(bt-ft)/xt),xe=1-oe;Bi.copy(Jt).multiplyScalar(pn*xe),Cn.position.copy(kt).add(Bi),oe>=1&&(Cn.position.copy(kt),ft=null,Bt&&(Sn(m),Bt=!1))}else ft=null,Bt&&(Sn(m),Bt=!1)}if(Mt<1)requestAnimationFrame(Ot);else{X.position.copy(z),Ge.rotation.y=0;let Cn=ft==null;Cn&&Bt&&(Sn(m),Bt=!1),Cn?(Rn.shadowMap.enabled=!0,setTimeout(wt?()=>Ht():()=>Ft(),400)):requestAnimationFrame(Ot)}}Rn.shadowMap.enabled=!1,requestAnimationFrame(Ot)}function Iu(x,m){let R=fe(x,m);R.y+=.4;let w=new bi(.1,12,12),k=new xn({color:8930559,transparent:!0,opacity:.9}),H=new je(w,k);H.position.copy(R),n.add(H);let X=performance.now(),z=0;function q(se){z++,z%2===0&&on();let he=se-X,we=Math.min(1,he/b),ee=we*(2-we);H.scale.setScalar(ee*4.5),k.opacity=.9*(1-we),we<1?requestAnimationFrame(q):(n.remove(H),w.dispose(),k.dispose())}requestAnimationFrame(q)}function Br(x,m,R,w,k){if(R.target==="enemy"&&m==null){w.updateTurnUI&&w.updateTurnUI(),k&&k();return}let X=(R.range??0)>2&&m!=null&&(m.x!==x.x||m.y!==x.y),z=!X&&m!=null&&(m.x!==x.x||m.y!==x.y);if(!X&&!z){no(R.effectKey,x,m,w),w.updateTurnUI&&w.updateTurnUI(),k&&k();return}if(z){let at=function(Re){ve++,ve%2===0&&on();let Se=Re-Ae,Ne=Math.min(1,Se/$e),Dt=Ne<=.4?Ne/.4:1,$t=Ne>.4?(Ne-.4)/.6:0;Ne<=.4?bt.position.lerpVectors(Xt,mn,Dt):bt.position.lerpVectors(mn,Xt,$t);let He=Ne<=.35?Ne/.35:Ne<=.7?(.7-Ne)/.35:0;if(be.rotation.y=-He*1.1,!pe&&Ne>=Yt&&(pe=!0,no(R.effectKey,x,m,w),m.hp<=0&&(_e=!0),w.updateUnitSlashVisibility&&w.updateUnitSlashVisibility(m),Y.get(m.id)&&R.target!=="ally"?de=Re:_e&&(Sn(m),_e=!1)),de!=null){let ot=Y.get(m.id);if(ot){let Et=Math.min(1,(Re-de)/xt),hn=1-Et;Bi.copy(oe).multiplyScalar(xe*hn),ot.position.copy(Cn).add(Bi),Et>=1&&(ot.position.copy(Cn),de=null,_e&&(Sn(m),_e=!1))}else de=null,_e&&(Sn(m),_e=!1)}Ne<1?requestAnimationFrame(at):(bt.position.copy(Xt),be.rotation.y=0,de==null&&_e&&(Sn(m),_e=!1),de==null?(Rn.shadowMap.enabled=!0,w.updateTurnUI&&w.updateTurnUI(),k&&k()):requestAnimationFrame(at))},bt=Y.get(x.id);if(!bt||!bt.userData.rightArm){no(R.effectKey,x,m,w),w.updateUnitSlashVisibility&&w.updateUnitSlashVisibility(m),w.updateTurnUI&&w.updateTurnUI(),k&&k();return}let Xt=fe(x.x,x.y).clone(),Mt=fe(m.x,m.y).clone(),mn=Xt.clone().lerp(Mt,.35),cn=Mt.x-Xt.x,En=Mt.z-Xt.z;cn*cn+En*En>1e-6&&(bt.rotation.y=Math.atan2(cn,En));let Cn=fe(m.x,m.y).clone(),oe=Mt.clone().sub(Xt).normalize(),xe=.4,be=bt.userData.rightArm,pe=!1,de=null,_e=!1,Ae=performance.now(),ve=0;Rn.shadowMap.enabled=!1,requestAnimationFrame(at);return}let q=fe(x.x,x.y).clone(),se=fe(m.x,m.y).clone(),he=new Qi(.035,.035,.4,6),we=new xn({color:16763972}),ee=new je(he,we);ee.position.copy(q),ee.position.y+=.6;let ie=se.clone().sub(q).normalize();ee.quaternion.setFromUnitVectors(new F(0,1,0),ie),n.add(ee);let Me=ee.position.clone(),rt=se.clone();rt.y+=.6;let Ge=performance.now(),ft=fe(m.x,m.y).clone(),Bt=se.clone().sub(q).normalize(),kt=.4,Jt=!1,pn=null,zt=0;function Ot(bt){zt++,zt%2===0&&on();let Xt=bt-Ge,Mt=Math.min(1,Xt/C);if(ee.position.lerpVectors(Me,rt,Mt),!Jt&&Mt>=1&&(Jt=!0,n.remove(ee),he.dispose(),we.dispose(),R.type==="spell"&&Iu(m.x,m.y),no(R.effectKey,x,m,w),Y.get(m.id)&&m.hp>0&&(pn=bt),w.updateUnitSlashVisibility&&w.updateUnitSlashVisibility(m)),pn!=null){let mn=Y.get(m.id);if(mn){let cn=Math.min(1,(bt-pn)/xt),En=1-cn;Bi.copy(Bt).multiplyScalar(kt*En),mn.position.copy(ft).add(Bi),cn>=1&&(mn.position.copy(ft),pn=null)}else pn=null}Mt<1?requestAnimationFrame(Ot):pn==null?(Rn.shadowMap.enabled=!0,w.updateTurnUI&&w.updateTurnUI(),k&&k()):requestAnimationFrame(Ot)}Rn.shadowMap.enabled=!1,requestAnimationFrame(Ot)}function yn(){if(dt!=="playing"||!co(ce)||Ye||ze.length===0)return;let x=ze[Ue],m=D.find(oe=>oe.id===x);if(!m||m.hp<=0)return;let R=io(e,m.x,m.y,le(m,"agi"),D,m),w=[];R.forEach((oe,xe)=>{if(oe===0)return;let be=xe%e.w,pe=Math.floor(xe/e.w);D.some(_e=>_e.id!==m.id&&_e.x===be&&_e.y===pe&&_e.hp>0)||w.push({gx:be,gy:pe,dist:oe})});let k=Cu(m),H=tc(),X=Ru(m.player),z=.25,q=.03,se=m.maxHp>0&&m.hp/m.maxHp<z,he=m.maxHp>0&&m.hp/m.maxHp<q,we=m.level===2,ee=oe=>D.some(xe=>xe.hp>0&&xe.x===oe.gx&&xe.y===oe.gy&&xe.id!==m.id),ie=H.filter(oe=>!ee(oe)),Me=X.filter(oe=>!ee(oe)),rt=kr(m).filter(oe=>!oe.disabled&&m.mp>=oe.cost&&oe.target==="enemy"),Ge=rt.length>0?Math.max(...rt.map(oe=>oe.range||0)):0,ft=Math.max(m.range!=null?m.range:1,Ge);function Bt(oe,xe){if(xe.length===0)return null;let be=null,pe=1/0;for(let de of oe){let _e=0;for(let Ae of xe)_e+=ti(de.gx,de.gy,Ae.gx,Ae.gy);_e<pe&&(pe=_e,be=de)}return be}function kt(oe,xe){if(xe.length===0||oe.length===0)return null;let be=null,pe=1/0;for(let de of oe){let _e=Math.min(...xe.map(Ae=>ti(de.gx,de.gy,Ae.gx,Ae.gy)));_e<pe&&(pe=_e,be=de)}return be}function Jt(oe,xe){let be=ft,pe=[];for(let de of D){if(de.hp<=0||de.player===m.player)continue;let _e=ti(oe,xe,de.x,de.y);_e<=be&&_e>0&&_s(e,oe,xe,de.x,de.y)&&pe.push({target:de,dist:_e})}return pe}let pn=new Set(w.map(oe=>oe.gy*e.w+oe.gx));function zt(oe,xe){if(!oe||oe.length<=1)return null;let be=Math.min(xe,oe.length-1);for(let pe=be;pe>=1;pe--){let de=oe[pe],_e=de.y*e.w+de.x;if(pn.has(_e))return{gx:de.x,gy:de.y}}return null}function Ot(oe,xe){if(!oe||oe.length<=1)return null;let be=Math.min(xe,oe.length-1);for(let pe=be;pe>=1;pe--){let de=oe[pe];if(!D.some(Ae=>Ae.id!==m.id&&Ae.hp>0&&Ae.x===de.x&&Ae.y===de.y))return{gx:de.x,gy:de.y}}return null}function bt(oe){let xe=null,be=null,pe=1/0;for(let de of oe){let _e=es(e,m.x,m.y,de.gx,de.gy,D,m);_e&&_e.length>1&&_e.length<pe&&(pe=_e.length,xe=_e,be=de)}return xe&&be?{path:xe,target:be}:null}function Xt(oe){let xe=oe??w;if(xe.length===0)return null;let be=D.filter(_e=>_e.hp>0&&_e.player!==m.player);if(be.length===0)return xe[0];let pe=null,de=-1;for(let _e of xe){let Ae=Math.min(...be.map(ve=>ti(_e.gx,_e.gy,ve.x,ve.y)));Ae>de&&(de=Ae,pe=_e)}return pe}function Mt(oe){let xe=oe??w;if(xe.length===0)return null;let be=D.filter(ve=>ve.hp>0&&ve.player!==m.player),pe=D.filter(ve=>ve.hp>0&&ve.player===m.player&&ve.id!==m.id);if(be.length===0)return xe[0];let de=m.maxHp>0&&m.hp/m.maxHp>=.6,_e=null,Ae=-1/0;for(let ve of xe){let at=Math.min(...be.map(Ne=>ti(ve.gx,ve.gy,Ne.x,Ne.y))),Re=pe.length>0?Math.min(...pe.map(Ne=>ti(ve.gx,ve.gy,Ne.x,Ne.y))):999,Se;de?Se=Re<at?at-1e3:at:Se=at-Re,Se>Ae&&(Ae=Se,_e=ve)}return _e}function mn(){let oe=ft,xe=D.filter(de=>de.hp>0&&de.player!==m.player);if(xe.length===0)return null;let be=null,pe=-1;for(let de of w){let _e=Math.min(...xe.map(ve=>ti(de.gx,de.gy,ve.x,ve.y)));xe.some(ve=>ti(de.gx,de.gy,ve.x,ve.y)<=oe)&&_e>pe&&(pe=_e,be=de)}return be}if(vt){if(wt){Ht();return}if(ys-ut<=20&&H.length>0){let Ae=H.some(ve=>ve.gx===m.x&&ve.gy===m.y);if(Ae&&w.length>0){let ve=new Set(H.map(Se=>Se.gy*e.w+Se.gx)),Re=w.filter(Se=>ve.has(Se.gy*e.w+Se.gx)).filter(Se=>Se.gx!==m.x||Se.gy!==m.y);if(Re.length>0){let Se=Xt(Re);if(Se&&(Se.gx!==m.x||Se.gy!==m.y)){Wt(m,Se.gx,Se.gy,()=>setTimeout(Ht,400));return}}Ht();return}if(Ae){Ht();return}if(w.length>0){let ve=ie.length>0?ie:H,at=bt(ve),Re=at?Ot(at.path,le(m,"agi")):null;if(Re&&(Re.gx!==m.x||Re.gy!==m.y)){Wt(m,Re.gx,Re.gy,()=>setTimeout(Ht,400));return}let Se=kt(w,ve);if(Se&&(Se.gx!==m.x||Se.gy!==m.y)){Wt(m,Se.gx,Se.gy,()=>setTimeout(Ht,400));return}}Ht();return}if(!se&&w.length>0){if(H.length>0&&!H.some(ve=>ve.gx===m.x&&ve.gy===m.y)){let ve=ie.length>0?ie:H,at=bt(ve),Re=at?Ot(at.path,le(m,"agi")):null;if(Re&&(Re.gx!==m.x||Re.gy!==m.y)){Wt(m,Re.gx,Re.gy,()=>setTimeout(Ht,400));return}let Se=kt(w,ve);if(Se&&(Se.gx!==m.x||Se.gy!==m.y)){Wt(m,Se.gx,Se.gy,()=>setTimeout(Ht,400));return}}if(we&&X.length>0&&!X.some(ve=>ve.gx===m.x&&ve.gy===m.y)){let ve=Me.length>0?Me:X,at=bt(ve),Re=at?Ot(at.path,le(m,"agi")):null;if(Re&&(Re.gx!==m.x||Re.gy!==m.y)){Wt(m,Re.gx,Re.gy,()=>setTimeout(Ht,400));return}let Se=kt(w,ve);if(Se&&(Se.gx!==m.x||Se.gy!==m.y)){Wt(m,Se.gx,Se.gy,()=>setTimeout(Ht,400));return}}}let xe=new Set(H.map(Ae=>Ae.gy*e.w+Ae.gx)),be=H.length>0?w.filter(Ae=>xe.has(Ae.gy*e.w+Ae.gx)):null,pe=be!=null&&be.length>0?be:w,de=D.filter(Ae=>Ae.hp>0&&Ae.player===m.player&&Ae.id!==m.id),_e=null;if(pe.length>0&&de.length>0&&(_e=Mt(pe),_e)){let Ae=es(e,m.x,m.y,_e.gx,_e.gy,D,m),ve=Ae?Ae.length-1:1/0;(!Ae||Ae.length<=1||ve>le(m,"agi"))&&(_e=Xt(pe))}if(!_e&&pe.length>0&&(_e=Xt(pe)),_e&&(_e.gx!==m.x||_e.gy!==m.y)){Wt(m,_e.gx,_e.gy,()=>setTimeout(Ht,400));return}Ht();return}if(he&&ys-ut>20&&!wt&&w.length>0){let oe=null,xe=1/0;for(let pe of w){let _e=Jt(pe.gx,pe.gy).filter(Ae=>Ae.target.maxHp>0&&Ae.target.hp/Ae.target.maxHp<z);if(_e.length>0){let Ae=Math.min(..._e.map(ve=>ve.target.hp));Ae<xe&&(xe=Ae,oe=pe)}}if(oe){let pe=es(e,m.x,m.y,oe.gx,oe.gy,D,m),de=pe?zt(pe,le(m,"agi")):null;if(de&&(de.gx!==m.x||de.gy!==m.y)){Wt(m,de.gx,de.gy,()=>setTimeout(yn,600));return}}let be=Xt();if(be&&(be.gx!==m.x||be.gy!==m.y)){Wt(m,be.gx,be.gy,()=>setTimeout(yn,600));return}Ht();return}if(!vt){let at=function(He){return lr(m,He,D).filter(Et=>Et.targetUnit!=null).map(Et=>Et.targetUnit)},oe=kr(m),xe=m.maxHp>0?m.hp/m.maxHp:1,be=.35,pe=new Set(["arcaneBolt","feast","pierce","snipe","berserk","drain","shuriken","chokuto","bite","execute","judgement","exorcise","ambush","powerShot","concoct"]),de=new Set(["chakra","sacrifice"]),_e=new Set(["brave","focus","bloodlust","iaido","howl","mantra","sanctuary","windWalk","forge","fortify"]),Ae=new Set(["manaDrain","impale","poison"]),ve=new Set(["dominate","weaken","cripple","hex","blind","raid"]),Re={showFloatingCombatText:qn,handleUnitDeath:Sn,updateUnitSlashVisibility:qe,updateTurnUI:Ft,world:e,units:D,updateUnitPosition(He){let ot=Y.get(He.id);ot&&ot.position.copy(fe(He.x,He.y))},animateKnockback(He,ot,Et,hn,jt,nn){let qt=Y.get(He.id);if(!qt){nn&&nn();return}let Pn=fe(ot,Et).clone(),Vr=fe(hn,jt).clone(),Xu=performance.now(),hc=0;function uc(qu){hc++,hc%2===0&&on();let dc=Math.min(1,(qu-Xu)/ja),Yu=mo=>mo*mo*(3-2*mo);qt.position.lerpVectors(Pn,Vr,Yu(dc)),dc<1?requestAnimationFrame(uc):(qt.position.copy(Vr),nn&&nn())}requestAnimationFrame(uc)}},Se=null,Ne=null,Dt=k.some(He=>He.target.maxHp>0&&He.target.hp/He.target.maxHp<z),$t=Dt||w.some(He=>Jt(He.gx,He.gy).some(Et=>Et.target.maxHp>0&&Et.target.hp/Et.target.maxHp<z));if(!$t){for(let ot of oe)if(!ot.disabled&&de.has(ot.effectKey)){let hn=lr(m,ot,D).filter(jt=>jt.targetUnit&&jt.targetUnit.maxHp>0&&jt.targetUnit.hp/jt.targetUnit.maxHp<.5);if(hn.length>0){let jt=hn.sort((nn,qt)=>nn.targetUnit.hp-qt.targetUnit.hp)[0].targetUnit;Se=ot,Ne=jt;break}}}if(!Se&&!$t&&(k.length>0||w.some(ot=>Jt(ot.gx,ot.gy).length>0)))for(let ot of oe){if(ot.disabled)continue;let Et=m.tempBuff&&m.tempBuff.duration>0;if(_e.has(ot.effectKey)){if(ot.target==="self"){if(ot.effectKey==="bloodlust"&&m.hp/m.maxHp>.8)continue;if(!Et){Se=ot,Ne=m;break}}if(ot.target==="ally"){if(ot.effectKey==="forge"&&Et||ot.effectKey==="fortify"&&Et||ot.effectKey==="mantra"&&Et||ot.effectKey==="sanctuary"&&Et)continue;let jt=lr(m,ot,D).filter(nn=>nn.targetUnit!=null).map(nn=>nn.targetUnit);if(jt.length>0){let nn=jt.filter(Pn=>!Pn.tempBuff||Pn.tempBuff.duration<=0),qt=(nn.length>0?nn:jt).sort((Pn,Vr)=>Pn.hp-Vr.hp)[0];Se=ot,Ne=qt;break}}}}if(!Se){for(let He of oe)if(!He.disabled&&pe.has(He.effectKey)){if(He.effectKey==="feast"&&m.hp/m.maxHp>.7||He.effectKey==="berserk"&&m.hp/m.maxHp<.25||He.effectKey==="shuriken"&&k.length>0||He.effectKey==="judgement"&&m.hp/m.maxHp>.7)continue;let ot=at(He);if(ot.length===0)continue;let Et=ot.filter(qt=>qt.maxHp>0&&qt.hp/qt.maxHp<be),hn=(qt,Pn)=>le(qt,"int")-le(Pn,"int")||qt.hp-Pn.hp,jt=(qt,Pn)=>qt.hp-Pn.hp,nn=Et.length>0?He.type==="spell"?Et.sort(hn)[0]:Et.sort(jt)[0]:He.type==="spell"?ot.sort(hn)[0]:ot.sort(jt)[0];Se=He,Ne=nn;break}}if(!Se&&!Dt){for(let He of oe)if(!He.disabled&&ve.has(He.effectKey)){let Et=at(He).sort((hn,jt)=>hn.hp-jt.hp)[0];Se=He,Ne=Et;break}}if(!Se&&!Dt){for(let He of oe)if(!He.disabled&&Ae.has(He.effectKey)){let Et=at(He).filter(hn=>!hn.tempDebuff||hn.tempDebuff.duration<=0);if(Et.length>0){let hn=Et.sort((jt,nn)=>jt.hp-nn.hp)[0];Se=He,Ne=hn;break}}}if(Se&&Ne){m.mp-=Se.cost,vt=!0;let He=Se.target==="self"?m:Ne;Br(m,He,Se,Re,()=>setTimeout(yn,600));return}}if(Pu(m)&&k.length>0){k.sort((xe,be)=>xe.target.hp-be.target.hp||xe.dist-be.dist);let oe=k[0].target;nc(m,oe);return}if(k.length>0){k.sort((xe,be)=>xe.target.hp-be.target.hp||xe.dist-be.dist);let oe=k[0].target;nc(m,oe);return}let cn=ys-ut;if(cn<=20&&H.length>0&&!wt&&w.length>0&&!H.some(xe=>xe.gx===m.x&&xe.gy===m.y)){let xe=ie.length>0?ie:H,be=bt(xe),pe=be?be.path:null,de=(Ne,Dt)=>Math.min(...H.map($t=>ti(Ne,Dt,$t.gx,$t.gy))),_e=de(m.x,m.y),Ae=null,ve=-1,at=z;for(let Ne of w){if(de(Ne.gx,Ne.gy)>_e||Jt(Ne.gx,Ne.gy).filter(Et=>Et.target.maxHp>0&&Et.target.hp/Et.target.maxHp<at).length===0)continue;let He=pe?pe.findIndex(Et=>Et.x===Ne.gx&&Et.y===Ne.gy):-1,ot=He>=0?He:0;ot>ve&&(ve=ot,Ae=Ne)}if(Ae&&(Ae.gx!==m.x||Ae.gy!==m.y)){Wt(m,Ae.gx,Ae.gy,()=>setTimeout(yn,600));return}let Re=be?Ot(be.path,le(m,"agi")):null;if(Re&&(Re.gx!==m.x||Re.gy!==m.y)){Wt(m,Re.gx,Re.gy,()=>setTimeout(yn,600));return}let Se=kt(w,xe);if(Se&&(Se.gx!==m.x||Se.gy!==m.y)){Wt(m,Se.gx,Se.gy,()=>setTimeout(yn,600));return}}if(se&&w.length>0&&!wt){let oe=null,xe=1/0;for(let be of w){let de=Jt(be.gx,be.gy).filter(_e=>_e.target.maxHp>0&&_e.target.hp/_e.target.maxHp<z);if(de.length>0){let _e=Math.min(...de.map(Ae=>Ae.target.hp));_e<xe&&(xe=_e,oe=be)}}if(oe){let be=es(e,m.x,m.y,oe.gx,oe.gy,D,m),pe=be?zt(be,le(m,"agi")):null;if(pe&&(pe.gx!==m.x||pe.gy!==m.y)){Wt(m,pe.gx,pe.gy,()=>setTimeout(yn,600));return}}if(cn>20&&we&&X.length>0&&!X.some(pe=>pe.gx===m.x&&pe.gy===m.y)){let pe=Me.length>0?Me:X,de=bt(pe);if(de!=null&&de.path.length<=5){let Ae=Ot(de.path,le(m,"agi"));if(Ae&&(Ae.gx!==m.x||Ae.gy!==m.y)){Wt(m,Ae.gx,Ae.gy,()=>setTimeout(yn,600));return}let ve=kt(w,pe);if(ve&&(ve.gx!==m.x||ve.gy!==m.y)){Wt(m,ve.gx,ve.gy,()=>setTimeout(yn,600));return}}}if(cn>20){let be=Xt();if(be&&ti(m.x,m.y,be.gx,be.gy)>0){Wt(m,be.gx,be.gy,()=>setTimeout(yn,600));return}Ht();return}}if(cn<=10&&H.length>0&&!wt&&w.length>0&&!H.some(xe=>xe.gx===m.x&&xe.gy===m.y)){let xe=ie.length>0?ie:H,be=bt(xe),pe=be?Ot(be.path,le(m,"agi")):null;if(pe&&(pe.gx!==m.x||pe.gy!==m.y)){Wt(m,pe.gx,pe.gy,()=>setTimeout(yn,600));return}let de=kt(w,xe);if(de&&(de.gx!==m.x||de.gy!==m.y)){Wt(m,de.gx,de.gy,()=>setTimeout(yn,600));return}}if(m.level===1&&H.length>0&&!wt&&!H.some(xe=>xe.gx===m.x&&xe.gy===m.y)&&w.length>0){let xe=ie.length>0?ie:H,be=bt(xe),pe=be?Ot(be.path,le(m,"agi")):null;if(pe&&(pe.gx!==m.x||pe.gy!==m.y)){Wt(m,pe.gx,pe.gy,()=>setTimeout(yn,600));return}let de=kt(w,xe);if(de&&(de.gx!==m.x||de.gy!==m.y)){Wt(m,de.gx,de.gy,()=>setTimeout(yn,600));return}}if(we&&X.length>0&&!wt&&!X.some(xe=>xe.gx===m.x&&xe.gy===m.y)&&w.length>0){let be=D.filter(Re=>Re.hp>0&&Re.player!==m.player).filter(Re=>Re.maxHp>0&&Re.hp/Re.maxHp<z),pe=null,de=1/0;for(let Re of w){let Ne=Jt(Re.gx,Re.gy).find(Dt=>be.some($t=>$t.id===Dt.target.id));Ne&&Ne.target.hp<de&&(de=Ne.target.hp,pe=Re)}if(pe){let Re=es(e,m.x,m.y,pe.gx,pe.gy,D,m),Se=Re?zt(Re,le(m,"agi")):null;if(Se&&(Se.gx!==m.x||Se.gy!==m.y)){Wt(m,Se.gx,Se.gy,()=>setTimeout(yn,600));return}}let _e=Me.length>0?Me:X,Ae=bt(_e),ve=Ae?Ot(Ae.path,le(m,"agi")):null;if(ve&&(ve.gx!==m.x||ve.gy!==m.y)){Wt(m,ve.gx,ve.gy,()=>setTimeout(yn,600));return}let at=kt(w,_e);if(at&&(at.gx!==m.x||at.gy!==m.y)){Wt(m,at.gx,at.gy,()=>setTimeout(yn,600));return}}let En=D.filter(oe=>oe.hp>0&&oe.player!==m.player);if(m.level>=2&&ft>=2&&En.length>0&&!wt&&w.length>0){let oe=mn();if(oe&&(oe.gx!==m.x||oe.gy!==m.y)){Wt(m,oe.gx,oe.gy,()=>setTimeout(yn,600));return}}if(En.length>0&&!wt&&w.length>0){let xe=function(pe,de){let _e=null;for(let Ae=-oe;Ae<=oe;Ae++)for(let ve=-oe;ve<=oe;ve++){if(ve===0&&Ae===0||Math.abs(ve)+Math.abs(Ae)>oe)continue;let at=pe.x+ve,Re=pe.y+Ae;if(at<0||at>=e.w||Re<0||Re>=e.h||!nr(e,at,Re)||!_s(e,at,Re,pe.x,pe.y)||D.some(He=>He.hp>0&&He.x===at&&He.y===Re))continue;let Ne=es(e,m.x,m.y,at,Re,D,m),Dt=Ne?Ne.length-1:1/0;Ne&&Ne.length>1&&(!de||Dt<=le(m,"agi"))&&(!_e||Ne.length<_e.length)&&(_e=Ne)}return _e},oe=ft,be=[];for(let pe of En){let de=xe(pe,!0);de&&be.push({enemy:pe,path:de})}if(be.length>0){let pe=be.filter(ve=>ve.enemy.maxHp>0&&ve.enemy.hp/ve.enemy.maxHp<z),de=pe.length>0?pe:be;pe.length>0?de.sort((ve,at)=>ve.enemy.hp-at.enemy.hp||ve.path.length-at.path.length):de.sort((ve,at)=>ve.path.length-at.path.length||ve.enemy.hp-at.enemy.hp);let _e=de[0],Ae=zt(_e.path,le(m,"agi"));if(Ae&&(Ae.gx!==m.x||Ae.gy!==m.y)){Wt(m,Ae.gx,Ae.gy,()=>setTimeout(yn,600));return}}if(be.length===0){let pe=null,de=1/0;for(let _e of En){let Ae=xe(_e,!1);Ae&&Ae.length<de&&(de=Ae.length,pe=Ae)}if(pe){let _e=zt(pe,le(m,"agi"));if(_e&&(_e.gx!==m.x||_e.gy!==m.y)){Wt(m,_e.gx,_e.gy,()=>setTimeout(yn,600));return}}}}Ht()}function fn(){for(Jn.length=0;Bn.children.length;){let x=Bn.children[0];Bn.remove(x),x.geometry!==cr&&x.geometry!==hr&&x.geometry.dispose(),x.material.dispose()}on()}let Ms=new Set;function kr(x){return!x||!x.class?[]:vu[x.class]?vu[x.class].map(m=>({...m,disabled:m.disabled===!0||x.level<m.level||m.hpCost&&x.hp<m.hpCost||m.cost&&x.mp<m.cost})):[]}function lr(x,m,R){let w=[],k=(X,z,q,se)=>Math.abs(X-q)+Math.abs(z-se),H=m.range||0;if(m.target==="self")return w.push({gx:x.x,gy:x.y,targetUnit:null}),w;for(let X of R)X.hp<=0||k(x.x,x.y,X.x,X.y)>H||H>2&&!_s(e,x.x,x.y,X.x,X.y)||(m.target==="enemy"&&X.player!==x.player&&w.push({gx:X.x,gy:X.y,targetUnit:X}),m.target==="ally"&&X.player===x.player&&w.push({gx:X.x,gy:X.y,targetUnit:X}));return w}function Lu(x,m){let R=m.range||0;if(m.target==="self")return[{gx:x.x,gy:x.y}];let w=bu(e,x.x,x.y,R),k=[];return w.forEach((H,X)=>{let z=X%e.w,q=X/e.w|0;R>2&&!_s(e,x.x,x.y,z,q)||k.push({gx:z,gy:q})}),k}function Du(x,m){let R=lr(x,m,D);Ms=new Set(R.map(k=>`${k.gx},${k.gy}`));let w=m.target==="self"?R:Lu(x,m);fn(),w.forEach(({gx:k,gy:H})=>{let z=(Wn+e.height[H][k]*.35)/2+Wn/2,q=k*Tt-re+Tt/2,se=H*Tt-ue+Tt/2,he=z+.01,we=new xn({color:8926122,transparent:!0,opacity:.4,side:gn}),ee=new je(cr,we);ee.rotation.x=-Math.PI/2,ee.position.set(q,he,se),Bn.add(ee),Jn.push(we);let ie=new xn({color:11167436,transparent:!0,opacity:.7,side:gn}),Me=new je(hr,ie);Me.rotation.x=-Math.PI/2,Me.position.set(q,he+.01,se),Me.userData.gx=k,Me.userData.gy=H,Bn.add(Me),Jn.push(ie)})}let ic=.82,sc=1.02,cr=new Di(sc,sc),hr=new Di(ic,ic);function Uu(x){fn(),x.forEach(({gx:m,gy:R})=>{let k=(Wn+e.height[R][m]*.35)/2+Wn/2,H=m*Tt-re+Tt/2,X=R*Tt-ue+Tt/2,z=k+.01,q=new xn({color:2271812,transparent:!0,opacity:.4,side:gn}),se=new je(cr,q);se.rotation.x=-Math.PI/2,se.position.set(H,z,X),Bn.add(se),Jn.push(q);let he=new xn({color:4508774,transparent:!0,opacity:.7,side:gn}),we=new je(hr,he);we.rotation.x=-Math.PI/2,we.position.set(H,z+.01,X),we.userData.gx=m,we.userData.gy=R,Bn.add(we),Jn.push(he)}),on()}function ho(x){fn(),x.forEach((m,R)=>{if(m===0)return;let w=R%e.w,k=R/e.w|0,X=(Wn+e.height[k][w]*.35)/2+Wn/2,z=w*Tt-re+Tt/2,q=k*Tt-ue+Tt/2,se=X+.01,he=new xn({color:3381759,transparent:!0,opacity:.35,side:gn}),we=new je(cr,he);we.rotation.x=-Math.PI/2,we.position.set(z,se,q),Bn.add(we),Jn.push(he);let ee=new xn({color:6730751,transparent:!0,opacity:.65,side:gn}),ie=new je(hr,ee);ie.rotation.x=-Math.PI/2,ie.position.set(z,se+.01,q),Bn.add(ie),Jn.push(ee)}),on()}function Nu(x){fn(),x.forEach((m,R)=>{if(m===0)return;let w=R%e.w,k=R/e.w|0,X=(Wn+e.height[k][w]*.35)/2+Wn/2,z=w*Tt-re+Tt/2,q=k*Tt-ue+Tt/2,se=X+.01,he=new xn({color:10035746,transparent:!0,opacity:.4,side:gn}),we=new je(cr,he);we.rotation.x=-Math.PI/2,we.position.set(z,se,q),Bn.add(we),Jn.push(he);let ee=new xn({color:13386820,transparent:!0,opacity:.7,side:gn}),ie=new je(hr,ee);ie.rotation.x=-Math.PI/2,ie.position.set(z,se+.01,q),Bn.add(ie),Jn.push(ee)}),on()}let Oi=new Ya,Fi=new Be;function Hr(x,m){let R=t.getBoundingClientRect();return Fi.x=(x-R.left)/R.width*2-1,Fi.y=-((m-R.top)/R.height)*2+1,{x:Fi.x,y:Fi.y}}function Ou(x,m){if(Ye)return;Fi.x=x,Fi.y=m,Oi.setFromCamera(Fi,a);let R=Oi.intersectObjects(V.children,!0);if(R.length===0)return;let w=null;for(let z of R){let q=z.object;for(;q&&(q.userData.gx==null||q.userData.gy==null);)q=q.parent;if(q&&q.userData.gx!=null){w=q;break}}if(!w||w.userData.gx==null)return;let k=w.userData.gx,H=w.userData.gy;if(dt==="draft"&&et){let z=H*e.w+k;Lt.has(z)&&_i(k,H);return}if(dt!=="playing"||it==="cvcpu")return;if(Ut&&Nt){let z=ze[Ue],q=D.find(ie=>ie.id===z&&ie.hp>0);if(q&&k===q.x&&H===q.y){Ut=!1,Nt=null,Ms=new Set,fn(),wt?U=new Map:(U=io(e,q.x,q.y,le(q,"agi"),D,q),ho(U)),Ft();return}let se=`${k},${H}`;if(!Ms.has(se))return;if(!q||q.mp<Nt.cost){Ut=!1,Nt=null,fn(),Ft();return}let he=D.find(ie=>ie.x===k&&ie.y===H&&ie.hp>0);if(Nt.target==="enemy"&&(!he||he.player===q.player)||Nt.target==="ally"&&he&&he.player!==q.player||Nt.target==="self"&&(k!==q.x||H!==q.y)||Nt.target==="enemy"&&!he)return;q.mp-=Nt.cost,vt=!0;let we={showFloatingCombatText:qn,handleUnitDeath:Sn,updateUnitSlashVisibility:qe,updateTurnUI:Ft,world:e,units:D,updateUnitPosition(ie){let Me=Y.get(ie.id);Me&&Me.position.copy(fe(ie.x,ie.y))},animateKnockback(ie,Me,rt,Ge,ft,Bt){let kt=Y.get(ie.id);if(!kt){Bt&&Bt();return}let Jt=fe(Me,rt).clone(),pn=fe(Ge,ft).clone(),zt=performance.now(),Ot=0;function bt(Xt){Ot++,Ot%2===0&&on();let Mt=Math.min(1,(Xt-zt)/ja),mn=cn=>cn*cn*(3-2*cn);kt.position.lerpVectors(Jt,pn,mn(Mt)),Mt<1?requestAnimationFrame(bt):(kt.position.copy(pn),Bt&&Bt())}requestAnimationFrame(bt)}},ee=Nt.target==="self"?q:he||null;Br(q,ee,Nt,we,()=>{fn(),Ut=!1,Nt=null,Ms=new Set,wt?Ht():Ft()});return}if(en){let z=ze[Ue],q=D.find(he=>he.id===z),se=Y.get(z);if(q&&se&&an.length>0){let he=fe(q.x,q.y),we=fe(k,H),ee=we.x-he.x,ie=we.z-he.z,Me=ee*ee+ie*ie>1e-6?Math.atan2(ee,ie):se.rotation.y;se.rotation.y=gt(Me)}Ht();return}if(ge!=null&&Pt){let z=D.find(he=>he.id===ge);if(!z||z.player!==ce)return;let q=H*e.w+k,se=D.find(he=>he.x===k&&he.y===H&&he.hp>0);if(se&&se.id===ze[Ue]&&se.player===ce){Pt=!1,ge=se.id,wt?(fn(),U=new Map):(U=io(e,se.x,se.y,le(se,"agi"),D,se),ho(U)),Ft();return}if(!U.has(q)||U.get(q)===0)return;if(se&&se.player!==ce){let he=le(se,"agi")*.7+le(se,"luk")*.3;if(Math.random()*Math.max(.001,he)<=le(z,"dex")){let ie=le(z,"str")*.7+le(z,"dex")*.1+le(z,"int")*.07-(le(se,"vit")*.3+le(se,"luk")*.1),Me=Math.max(1,Math.floor(ie));se.hp=Math.max(0,se.hp-Me),qn(se.x,se.y,String(Me),!1),se.hp<=0&&Sn(se),qe(se)}else qn(se.x,se.y,"MISS",!0);vt=!0,ge=null,Pt=!1,fn(),wt?Ht():Ft()}return}let X=D.find(z=>z.x===k&&z.y===H&&z.hp>0);if(X){if(X.id===ze[Ue]&&X.player===ce){nt(),ge=X.id,Pt=!1,wt?(fn(),U=new Map):(U=io(e,k,H,le(X,"agi"),D,X),ho(U)),Ft();return}fn(),U=new Map,Pt=!1,De(X),Ft();return}if(nt(),ge!=null){let ie=function(){if(ee>=he.length){z.x=he[he.length-1].x,z.y=he[he.length-1].y,Ye=!1,ht(we),W(),U=new Map,wt=!0,vt?Ht():Ft();return}let Me=he[ee-1],rt=he[ee],Ge=fe(Me.x,Me.y).clone(),ft=fe(rt.x,rt.y).clone(),Bt=ft.x-Ge.x,kt=ft.z-Ge.z;Bt*Bt+kt*kt>1e-6&&(we.rotation.y=Math.atan2(Bt,kt));let Jt=performance.now(),pn=0;function zt(Ot){pn++,pn%2===0&&on();let bt=Math.min(1,(Ot-Jt)/ja),Mt=(mn=>mn*mn*(3-2*mn))(bt);we.position.lerpVectors(Ge,ft,Mt),Xe(we,Mt),bt<1?requestAnimationFrame(zt):(ee++,ie())}requestAnimationFrame(zt)};if(Pt)return;let z=D.find(Me=>Me.id===ge);if(!z||z.player!==ce)return;let q=H*e.w+k;if(!U.has(q)||U.get(q)===0||D.some(Me=>Me.id!==z.id&&Me.x===k&&Me.y===H&&Me.hp>0)||Ye||wt)return;let he=es(e,z.x,z.y,k,H,D,z);if(!he||he.length<=1)return;ge=null,fn(),Ye=!0,W(z.id);let we=Y.get(z.id),ee=1;ie()}}function rc(x){L.x=x.clientX,L.y=x.clientY,g=x.ctrlKey,p=Hr(x.clientX,x.clientY),t.style.cursor=(x.ctrlKey,"grabbing")}function uo(x){return x.touches&&x.touches.length>0?{clientX:x.touches[0].clientX,clientY:x.touches[0].clientY}:x.changedTouches&&x.changedTouches.length>0?{clientX:x.changedTouches[0].clientX,clientY:x.changedTouches[0].clientY}:{clientX:x.clientX,clientY:x.clientY}}function ac(x){if(!x||x.length<2)return 0;let m=x[0],R=x[1];return Math.hypot(R.clientX-m.clientX,R.clientY-m.clientY)}function Fu(x){if(x.touches.length===2){B=ac(x.touches),p=null;return}if(x.touches.length!==1)return;B=null;let m=uo(x);rc({clientX:m.clientX,clientY:m.clientY,ctrlKey:!1})}function Bu(x){if(x.touches.length===2){x.preventDefault();let R=ac(x.touches);if(B!=null&&B>0){let w=R-B,k=a.position.distanceTo(c),H=Math.max($,Math.min(S,k-w*N));h.copy(c).sub(a.position).normalize(),a.position.copy(c).sub(h.multiplyScalar(H)),a.lookAt(c),li=performance.now()}B=R;return}if(B=null,x.touches.length!==1)return;x.preventDefault();let m=uo(x);oc({clientX:m.clientX,clientY:m.clientY,ctrlKey:!1})}function ku(x){if(x.touches.length<2&&(B=null),x.touches.length===2||x.changedTouches.length===0)return;let m=uo(x);fo({clientX:m.clientX,clientY:m.clientY,ctrlKey:!1})}function oc(x){if(en){_n(x.clientX,x.clientY);return}if(p==null)return;let m=x.clientX-L.x,R=x.clientY-L.y;if(!y&&!v&&(Math.abs(m)>M||Math.abs(R)>M)&&(x.ctrlKey||g?v=!0:y=!0),v){I.copy(a.position).sub(c);let w=I.length();if(w<.001)return;let k=Math.atan2(I.x,I.z),H=Math.asin(Math.max(-1,Math.min(1,I.y/w)));k-=m*_,H+=R*_,H=Math.max(T,Math.min(O,H)),I.x=w*Math.cos(H)*Math.sin(k),I.y=w*Math.sin(H),I.z=w*Math.cos(H)*Math.cos(k),a.position.copy(c).add(I),a.lookAt(c),L.x=x.clientX,L.y=x.clientY,li=performance.now()}else if(y){let w=Hr(x.clientX,x.clientY);f.setFromNormalAndCoplanarPoint(new F(0,1,0),new F(0,c.y,0)),Oi.setFromCamera(new Be(p.x,p.y),a),Oi.ray.intersectPlane(f,d);let k=d.clone();Oi.setFromCamera(new Be(w.x,w.y),a),Oi.ray.intersectPlane(f,d);let H=k.sub(d);c.add(H),a.position.add(H),a.lookAt(c),p={x:w.x,y:w.y},li=performance.now()}}function fo(x){if(p!=null&&!y&&!v){let m=Hr(x.clientX,x.clientY);Ou(m.x,m.y)}p=null,y=!1,v=!1,g=!1,t.style.cursor="grab"}function Hu(x){x.preventDefault();let m=a.position.distanceTo(c),R=Math.max($,Math.min(S,m+x.deltaY*A));h.copy(c).sub(a.position).normalize(),a.position.copy(c).sub(h.multiplyScalar(R)),a.lookAt(c),li=performance.now()}t.style.cursor="grab",t.addEventListener("mousedown",rc),t.addEventListener("mousemove",oc),t.addEventListener("mouseup",fo),t.addEventListener("mouseleave",fo),t.addEventListener("touchstart",Fu,{passive:!0}),t.addEventListener("touchmove",Bu,{passive:!1}),t.addEventListener("touchend",ku,{passive:!0}),t.addEventListener("wheel",Hu,{passive:!1});function lc(){let x=t.clientWidth,m=t.clientHeight;a.aspect=x/m,a.updateProjectionMatrix(),Rn.setSize(x,m),Rn.setPixelRatio(Math.min(window.devicePixelRatio,1.7))}window.addEventListener("resize",lc);let Rn=new Ar({antialias:!1});Rn.setSize(t.clientWidth,t.clientHeight),Rn.setPixelRatio(Math.min(window.devicePixelRatio,1.7)),Rn.shadowMap.enabled=!0,Rn.shadowMap.type=Xl,t.appendChild(Rn.domElement),lc();let zr=document.createElement("div");zr.id="combat-text-layer",t.appendChild(zr);let vi=new F,Bi=new F,zu=1400;function qn(x,m,R,w,k){let H=document.createElement("div");H.className="combat-text-float "+(w?"miss":"damage")+(k?" "+k:""),H.textContent=R,H.style.position="absolute",zr.appendChild(H);let X=k==="skill-name"?1.7:1.2,z=performance.now();function q(){vi.copy(fe(x,m)),vi.y+=X,vi.project(a);let we=t.clientWidth,ee=t.clientHeight;H.style.left=(vi.x*.5+.5)*we+"px",H.style.top=(1-(vi.y*.5+.5))*ee+"px"}let se=0;function he(){se%2===0&&q(),se++,performance.now()-z<zu?requestAnimationFrame(he):H.remove()}requestAnimationFrame(he)}let Vu=1500;function Gu(x,m){let R=document.createElement("div");R.className="combat-text-float "+(m||"levelup"),R.textContent="LEVEL UP!",R.style.position="absolute",zr.appendChild(R);let w=performance.now(),k=0;function H(){vi.copy(fe(x.x,x.y)),vi.y+=1.2,vi.project(a);let z=t.clientWidth,q=t.clientHeight;R.style.left=(vi.x*.5+.5)*z+"px",R.style.top=(1-(vi.y*.5+.5))*q+"px"}function X(){k%2===0&&H(),k++,performance.now()-w<Vu?requestAnimationFrame(X):R.remove()}requestAnimationFrame(X)}function Sn(x){console.log("[DEATH]",`${x.name} (${x.class}, P${x.player})`,`at (${x.x},${x.y})`,`Lv.${x.level}`),qn(x.x,x.y,"DEAD",!1);let m=Y.get(x.id);if(!m){W(),cc();return}let R=performance.now();function w(k){on();let H=k-R,X=Math.min(1,H/K),z=X*X;m.rotation.x=z*Math.PI*.5,X<1?requestAnimationFrame(w):(n.remove(m),Y.delete(x.id),W(),cc())}requestAnimationFrame(w)}function cc(){if(dt!=="playing")return;let x=D.some(R=>R.player===1&&R.hp>0),m=D.some(R=>R.player===2&&R.hp>0);x?m||po(1):po(2)}function Wu(){let x=tc(),m=new Set(x.map(X=>X.gy*e.w+X.gx)),R=D.filter(X=>X.hp>0&&X.player===1&&m.has(X.y*e.w+X.x)).length,w=D.filter(X=>X.hp>0&&X.player===2&&m.has(X.y*e.w+X.x)).length,k=null,H="";if(R>w)k=1,H=`Time's up! Player 1 wins! (${R} vs ${w} units on center base)`;else if(w>R)k=2,H=`Time's up! Player 2 wins! (${w} vs ${R} units on center base)`;else{let X=D.filter(q=>q.hp>0&&q.player===1).reduce((q,se)=>q+se.hp,0),z=D.filter(q=>q.hp>0&&q.player===2).reduce((q,se)=>q+se.hp,0);X>z?(k=1,H=`Time's up! Draw on center \u2014 Player 1 wins on total HP (${X} vs ${z})`):z>X?(k=2,H=`Time's up! Draw on center \u2014 Player 2 wins on total HP (${z} vs ${X})`):H=`Draw! (equal units on center: ${R}, equal HP)`}po(k,H)}function po(x,m){dt="gameover",document.getElementById("turn-menu").style.display="none",nt(),fn();let R=document.getElementById("game-over-overlay"),w=document.getElementById("game-over-title"),k=document.getElementById("game-over-cards");w.textContent=m??`Player ${x} wins!`;let H=D.filter(X=>X.player===(x??1));k.innerHTML=H.map(X=>{let z=X,q=X.level>=3?" level-3":X.level>=2?" level-2":"",se=z.maxHp>0&&z.hp/z.maxHp<.3?" low-hp":"";return`
        <div class="game-over-card${q}${se}">
          <img class="game-over-card-image" src="${Fr[X.class]||""}" alt="${z.name}" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="game-over-card-body">
            <div class="game-over-card-name">${z.name}</div>
            <div class="game-over-card-meta">Lv.${z.level} ${z.class} \u2014 HP ${z.hp}/${z.maxHp}</div>
            <div class="game-over-card-stats">
              <span class="stat-label">HP</span><span class="stat-val stat-val-hp">${z.hp}/${z.maxHp}</span>
              <span class="stat-label">MP</span><span class="stat-val">${z.mp}/${z.maxMp}</span>
              <span class="stat-label">STR</span><span class="stat-val">${le(z,"str")}</span>
              <span class="stat-label">AGI</span><span class="stat-val">${le(z,"agi")}</span>
              <span class="stat-label">VIT</span><span class="stat-val">${le(z,"vit")}</span>
              <span class="stat-label">DEX</span><span class="stat-val">${le(z,"dex")}</span>
              <span class="stat-label">LUK</span><span class="stat-val">${le(z,"luk")}</span>
              <span class="stat-label">INT</span><span class="stat-val">${le(z,"int")}</span>
              <span class="stat-label">Range</span><span class="stat-val">${z.range}</span>
            </div>
          </div>
        </div>
      `}).join(""),R.classList.add("visible")}function bs(x=0){requestAnimationFrame(bs),li===0&&(li=x);let m=x-li>500,R=0;typeof bs.frameCount=="number"&&(R=bs.frameCount),bs.frameCount=R+1;let w=()=>{if(yi){let k=.6+.4*Math.sin(x*.004);for(let H=0;H<Jn.length;H++){let X=H%2===0?.4:.7;Jn[H].opacity=X*k}Rn.render(n,a),yi=!1}};m?x-ts>=100&&(ts=x,yi=!0,w()):(bs.frameCount%2===0&&(yi=!0),w())}bs()}Ux();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
