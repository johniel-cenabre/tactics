var Ul="160";var Iu=0,jl=1,Lu=2;var Dh=1,Nl=2,xi=3,Bi=0,Hn=1,cn=2;var Ni=0,Us=1,Ql=2,ec=3,tc=4,Du=5,ji=100,Uu=101,Nu=102,nc=103,ic=104,Ou=200,Fu=201,Bu=202,Hu=203,Vo=204,Go=205,zu=206,ku=207,Vu=208,Gu=209,Wu=210,Xu=211,qu=212,Yu=213,$u=214,Zu=0,Ku=1,Ju=2,sa=3,ju=4,Qu=5,ed=6,td=7,Uh=0,nd=1,id=2,Oi=0,sd=1,rd=2,ad=3,od=4,ld=5,cd=6;var Nh=300,Fs=301,Bs=302,Wo=303,Xo=304,Fa=306,cr=1e3,si=1001,qo=1002,Dn=1003,sc=1004;var ro=1005;var $n=1006,hd=1007;var hr=1008;var Fi=1009,ud=1010,dd=1011,Ol=1012,Oh=1013,Di=1014,Ui=1015,ur=1016,Fh=1017,Bh=1018,es=1020,fd=1021,ri=1023,pd=1024,md=1025,ts=1026,Hs=1027,gd=1028,Hh=1029,_d=1030,zh=1031,kh=1033,ao=33776,oo=33777,lo=33778,co=33779,rc=35840,ac=35841,oc=35842,lc=35843,Vh=36196,cc=37492,hc=37496,uc=37808,dc=37809,fc=37810,pc=37811,mc=37812,gc=37813,_c=37814,xc=37815,yc=37816,vc=37817,Mc=37818,Sc=37819,bc=37820,Ec=37821,ho=36492,Tc=36494,wc=36495,xd=36283,Ac=36284,Rc=36285,Cc=36286;var ra=2300,aa=2301,uo=2302,Pc=2400,Ic=2401,Lc=2402;var Gh=3e3,ns=3001,yd=3200,vd=3201,Wh=0,Md=1,Zn="",Sn="srgb",vi="srgb-linear",Fl="display-p3",Ba="display-p3-linear",oa="linear",Vt="srgb",la="rec709",ca="p3";var ps=7680;var Dc=519,Sd=512,bd=513,Ed=514,Xh=515,Td=516,wd=517,Ad=518,Rd=519,Uc=35044;var Nc="300 es",Yo=1035,yi=2e3,ha=2001,Hi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var fo=Math.PI/180,$o=180/Math.PI;function Ws(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(An[i&255]+An[i>>8&255]+An[i>>16&255]+An[i>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[t&63|128]+An[t>>8&255]+"-"+An[t>>16&255]+An[t>>24&255]+An[n&255]+An[n>>8&255]+An[n>>16&255]+An[n>>24&255]).toLowerCase()}function Cn(i,e,t){return Math.max(e,Math.min(t,i))}function Cd(i,e){return(i%e+e)%e}function po(i,e,t){return(1-t)*i+t*e}function Oc(i){return(i&i-1)===0&&i!==0}function Zo(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Qs(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Bn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Fe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Cn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Et=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],x=n[8],v=s[0],m=s[3],p=s[6],M=s[1],y=s[4],T=s[7],U=s[2],I=s[5],L=s[8];return r[0]=a*v+o*M+l*U,r[3]=a*m+o*y+l*I,r[6]=a*p+o*T+l*L,r[1]=c*v+h*M+f*U,r[4]=c*m+h*y+f*I,r[7]=c*p+h*T+f*L,r[2]=u*v+d*M+x*U,r[5]=u*m+d*y+x*I,r[8]=u*p+d*T+x*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,x=t*f+n*u+s*d;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/x;return e[0]=f*v,e[1]=(s*c-h*n)*v,e[2]=(o*n-s*a)*v,e[3]=u*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=d*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(mo.makeScale(e,t)),this}rotate(e){return this.premultiply(mo.makeRotation(-e)),this}translate(e,t){return this.premultiply(mo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},mo=new Et;function qh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ua(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Pd(){let i=ua("canvas");return i.style.display="block",i}var Fc={};function sr(i){i in Fc||(Fc[i]=!0,console.warn(i))}var Bc=new Et().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Hc=new Et().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ir={[vi]:{transfer:oa,primaries:la,toReference:i=>i,fromReference:i=>i},[Sn]:{transfer:Vt,primaries:la,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ba]:{transfer:oa,primaries:ca,toReference:i=>i.applyMatrix3(Hc),fromReference:i=>i.applyMatrix3(Bc)},[Fl]:{transfer:Vt,primaries:ca,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Hc),fromReference:i=>i.applyMatrix3(Bc).convertLinearToSRGB()}},Id=new Set([vi,Ba]),Ot={enabled:!0,_workingColorSpace:vi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Id.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Ir[e].toReference,s=Ir[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Ir[i].primaries},getTransfer:function(i){return i===Zn?oa:Ir[i].transfer}};function Ns(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function go(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ms,da=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ms===void 0&&(ms=ua("canvas")),ms.width=e.width,ms.height=e.height;let n=ms.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ms}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ua("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ns(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ns(t[n]/255)*255):t[n]=Ns(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ld=0,fa=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=Ws(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(_o(s[a].image)):r.push(_o(s[a]))}else r=_o(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function _o(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?da.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Dd=0,Jn=class i extends Hi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=si,s=si,r=$n,a=hr,o=ri,l=Fi,c=i.DEFAULT_ANISOTROPY,h=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=Ws(),this.name="",this.source=new fa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(sr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ns?Sn:Zn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cr:e.x=e.x-Math.floor(e.x);break;case si:e.x=e.x<0?0:1;break;case qo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cr:e.y=e.y-Math.floor(e.y);break;case si:e.y=e.y<0?0:1;break;case qo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return sr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Sn?ns:Gh}set encoding(e){sr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ns?Sn:Zn}};Jn.DEFAULT_IMAGE=null;Jn.DEFAULT_MAPPING=Nh;Jn.DEFAULT_ANISOTROPY=1;var xn=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],x=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-v)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+v)<.1&&Math.abs(x+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,T=(d+1)/2,U=(p+1)/2,I=(h+u)/4,L=(f+v)/4,Y=(x+m)/4;return y>T&&y>U?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=I/n,r=L/n):T>U?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=I/s,r=Y/s):U<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),n=L/r,s=Y/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-x)*(m-x)+(f-v)*(f-v)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-x)/M,this.y=(f-v)/M,this.z=(u-h)/M,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ko=class extends Hi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new xn(0,0,e,t),this.scissorTest=!1,this.viewport=new xn(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(sr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ns?Sn:Zn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Jn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new fa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Mi=class extends Ko{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},pa=class extends Jn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Jo=class extends Jn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var zi=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=r[a+0],d=r[a+1],x=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(o===1){e[t+0]=u,e[t+1]=d,e[t+2]=x,e[t+3]=v;return}if(f!==v||l!==u||c!==d||h!==x){let m=1-o,p=l*u+c*d+h*x+f*v,M=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let U=Math.sqrt(y),I=Math.atan2(U,p*M);m=Math.sin(m*I)/U,o=Math.sin(o*I)/U}let T=o*M;if(l=l*m+u*T,c=c*m+d*T,h=h*m+x*T,f=f*m+v*T,m===1-o){let U=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=U,c*=U,h*=U,f*=U}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],u=r[a+1],d=r[a+2],x=r[a+3];return e[t]=o*x+h*f+l*d-c*u,e[t+1]=l*x+h*u+c*f-o*d,e[t+2]=c*x+h*d+o*u-l*f,e[t+3]=h*x-o*f-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),u=l(n/2),d=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*x,this._y=c*d*f-u*h*x,this._z=c*h*x+u*d*f,this._w=c*h*f-u*d*x;break;case"YXZ":this._x=u*h*f+c*d*x,this._y=c*d*f-u*h*x,this._z=c*h*x-u*d*f,this._w=c*h*f+u*d*x;break;case"ZXY":this._x=u*h*f-c*d*x,this._y=c*d*f+u*h*x,this._z=c*h*x+u*d*f,this._w=c*h*f-u*d*x;break;case"ZYX":this._x=u*h*f-c*d*x,this._y=c*d*f+u*h*x,this._z=c*h*x-u*d*f,this._w=c*h*f+u*d*x;break;case"YZX":this._x=u*h*f+c*d*x,this._y=c*d*f+u*h*x,this._z=c*h*x-u*d*f,this._w=c*h*f-u*d*x;break;case"XZY":this._x=u*h*f-c*d*x,this._y=c*d*f-u*h*x,this._z=c*h*x+u*d*f,this._w=c*h*f+u*d*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=n+o+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>f){let d=2*Math.sqrt(1+n-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){let d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Cn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*f+this._w*u,this._x=n*f+this._x*u,this._y=s*f+this._y*u,this._z=r*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return xo.copy(this).projectOnVector(e),this.sub(xo)}reflect(e){return this.sub(xo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Cn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},xo=new F,zc=new zi,is=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ei):ei.fromBufferAttribute(r,a),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Lr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Lr.copy(n.boundingBox)),Lr.applyMatrix4(e.matrixWorld),this.union(Lr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(er),Dr.subVectors(this.max,er),gs.subVectors(e.a,er),_s.subVectors(e.b,er),xs.subVectors(e.c,er),Ri.subVectors(_s,gs),Ci.subVectors(xs,_s),Yi.subVectors(gs,xs);let t=[0,-Ri.z,Ri.y,0,-Ci.z,Ci.y,0,-Yi.z,Yi.y,Ri.z,0,-Ri.x,Ci.z,0,-Ci.x,Yi.z,0,-Yi.x,-Ri.y,Ri.x,0,-Ci.y,Ci.x,0,-Yi.y,Yi.x,0];return!yo(t,gs,_s,xs,Dr)||(t=[1,0,0,0,1,0,0,0,1],!yo(t,gs,_s,xs,Dr))?!1:(Ur.crossVectors(Ri,Ci),t=[Ur.x,Ur.y,Ur.z],yo(t,gs,_s,xs,Dr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},fi=[new F,new F,new F,new F,new F,new F,new F,new F],ei=new F,Lr=new is,gs=new F,_s=new F,xs=new F,Ri=new F,Ci=new F,Yi=new F,er=new F,Dr=new F,Ur=new F,$i=new F;function yo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){$i.fromArray(i,r);let o=s.x*Math.abs($i.x)+s.y*Math.abs($i.y)+s.z*Math.abs($i.z),l=e.dot($i),c=t.dot($i),h=n.dot($i);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ud=new is,tr=new F,vo=new F,zs=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Ud.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;tr.subVectors(e,this.center);let t=tr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(tr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(tr.copy(e.center).add(vo)),this.expandByPoint(tr.copy(e.center).sub(vo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},pi=new F,Mo=new F,Nr=new F,Pi=new F,So=new F,Or=new F,bo=new F,dr=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,t),pi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Mo.copy(e).add(t).multiplyScalar(.5),Nr.copy(t).sub(e).normalize(),Pi.copy(this.origin).sub(Mo);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Nr),o=Pi.dot(this.direction),l=-Pi.dot(Nr),c=Pi.lengthSq(),h=Math.abs(1-a*a),f,u,d,x;if(h>0)if(f=a*l-o,u=a*o-l,x=r*h,f>=0)if(u>=-x)if(u<=x){let v=1/h;f*=v,u*=v,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-x?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=x?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Mo).addScaledVector(Nr,u),d}intersectSphere(e,t){pi.subVectors(e.center,this.origin);let n=pi.dot(this.direction),s=pi.dot(pi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,t,n,s,r){So.subVectors(t,e),Or.subVectors(n,e),bo.crossVectors(So,Or);let a=this.direction.dot(bo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Pi.subVectors(this.origin,e);let l=o*this.direction.dot(Or.crossVectors(Pi,Or));if(l<0)return null;let c=o*this.direction.dot(So.cross(Pi));if(c<0||l+c>a)return null;let h=-o*Pi.dot(bo);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},fn=class i{constructor(e,t,n,s,r,a,o,l,c,h,f,u,d,x,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,f,u,d,x,v,m)}set(e,t,n,s,r,a,o,l,c,h,f,u,d,x,v,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=x,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/ys.setFromMatrixColumn(e,0).length(),r=1/ys.setFromMatrixColumn(e,1).length(),a=1/ys.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let u=a*h,d=a*f,x=o*h,v=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=d+x*c,t[5]=u-v*c,t[9]=-o*l,t[2]=v-u*c,t[6]=x+d*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,d=l*f,x=c*h,v=c*f;t[0]=u+v*o,t[4]=x*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=d*o-x,t[6]=v+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,d=l*f,x=c*h,v=c*f;t[0]=u-v*o,t[4]=-a*f,t[8]=x+d*o,t[1]=d+x*o,t[5]=a*h,t[9]=v-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,d=a*f,x=o*h,v=o*f;t[0]=l*h,t[4]=x*c-d,t[8]=u*c+v,t[1]=l*f,t[5]=v*c+u,t[9]=d*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,d=a*c,x=o*l,v=o*c;t[0]=l*h,t[4]=v-u*f,t[8]=x*f+d,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*f+x,t[10]=u-v*f}else if(e.order==="XZY"){let u=a*l,d=a*c,x=o*l,v=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+v,t[5]=a*h,t[9]=d*f-x,t[2]=x*f-d,t[6]=o*h,t[10]=v*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Nd,e,Od)}lookAt(e,t,n){let s=this.elements;return Gn.subVectors(e,t),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),Ii.crossVectors(n,Gn),Ii.lengthSq()===0&&(Math.abs(n.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),Ii.crossVectors(n,Gn)),Ii.normalize(),Fr.crossVectors(Gn,Ii),s[0]=Ii.x,s[4]=Fr.x,s[8]=Gn.x,s[1]=Ii.y,s[5]=Fr.y,s[9]=Gn.y,s[2]=Ii.z,s[6]=Fr.z,s[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],x=n[2],v=n[6],m=n[10],p=n[14],M=n[3],y=n[7],T=n[11],U=n[15],I=s[0],L=s[4],Y=s[8],b=s[12],w=s[1],D=s[5],O=s[9],j=s[13],C=s[2],G=s[6],N=s[10],se=s[14],$=s[3],Q=s[7],ne=s[11],ue=s[15];return r[0]=a*I+o*w+l*C+c*$,r[4]=a*L+o*D+l*G+c*Q,r[8]=a*Y+o*O+l*N+c*ne,r[12]=a*b+o*j+l*se+c*ue,r[1]=h*I+f*w+u*C+d*$,r[5]=h*L+f*D+u*G+d*Q,r[9]=h*Y+f*O+u*N+d*ne,r[13]=h*b+f*j+u*se+d*ue,r[2]=x*I+v*w+m*C+p*$,r[6]=x*L+v*D+m*G+p*Q,r[10]=x*Y+v*O+m*N+p*ne,r[14]=x*b+v*j+m*se+p*ue,r[3]=M*I+y*w+T*C+U*$,r[7]=M*L+y*D+T*G+U*Q,r[11]=M*Y+y*O+T*N+U*ne,r[15]=M*b+y*j+T*se+U*ue,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],d=e[14],x=e[3],v=e[7],m=e[11],p=e[15];return x*(+r*l*f-s*c*f-r*o*u+n*c*u+s*o*d-n*l*d)+v*(+t*l*d-t*c*u+r*a*u-s*a*d+s*c*h-r*l*h)+m*(+t*c*f-t*o*d-r*a*f+n*a*d+r*o*h-n*c*h)+p*(-s*o*h-t*l*f+t*o*u+s*a*f-n*a*u+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],d=e[11],x=e[12],v=e[13],m=e[14],p=e[15],M=f*m*c-v*u*c+v*l*d-o*m*d-f*l*p+o*u*p,y=x*u*c-h*m*c-x*l*d+a*m*d+h*l*p-a*u*p,T=h*v*c-x*f*c+x*o*d-a*v*d-h*o*p+a*f*p,U=x*f*l-h*v*l-x*o*u+a*v*u+h*o*m-a*f*m,I=t*M+n*y+s*T+r*U;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/I;return e[0]=M*L,e[1]=(v*u*r-f*m*r-v*s*d+n*m*d+f*s*p-n*u*p)*L,e[2]=(o*m*r-v*l*r+v*s*c-n*m*c-o*s*p+n*l*p)*L,e[3]=(f*l*r-o*u*r-f*s*c+n*u*c+o*s*d-n*l*d)*L,e[4]=y*L,e[5]=(h*m*r-x*u*r+x*s*d-t*m*d-h*s*p+t*u*p)*L,e[6]=(x*l*r-a*m*r-x*s*c+t*m*c+a*s*p-t*l*p)*L,e[7]=(a*u*r-h*l*r+h*s*c-t*u*c-a*s*d+t*l*d)*L,e[8]=T*L,e[9]=(x*f*r-h*v*r-x*n*d+t*v*d+h*n*p-t*f*p)*L,e[10]=(a*v*r-x*o*r+x*n*c-t*v*c-a*n*p+t*o*p)*L,e[11]=(h*o*r-a*f*r-h*n*c+t*f*c+a*n*d-t*o*d)*L,e[12]=U*L,e[13]=(h*v*s-x*f*s+x*n*u-t*v*u-h*n*m+t*f*m)*L,e[14]=(x*o*s-a*v*s-x*n*l+t*v*l+a*n*m-t*o*m)*L,e[15]=(a*f*s-h*o*s+h*n*l-t*f*l-a*n*u+t*o*u)*L,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,x=r*f,v=a*h,m=a*f,p=o*f,M=l*c,y=l*h,T=l*f,U=n.x,I=n.y,L=n.z;return s[0]=(1-(v+p))*U,s[1]=(d+T)*U,s[2]=(x-y)*U,s[3]=0,s[4]=(d-T)*I,s[5]=(1-(u+p))*I,s[6]=(m+M)*I,s[7]=0,s[8]=(x+y)*L,s[9]=(m-M)*L,s[10]=(1-(u+v))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=ys.set(s[0],s[1],s[2]).length(),a=ys.set(s[4],s[5],s[6]).length(),o=ys.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ti.copy(this);let c=1/r,h=1/a,f=1/o;return ti.elements[0]*=c,ti.elements[1]*=c,ti.elements[2]*=c,ti.elements[4]*=h,ti.elements[5]*=h,ti.elements[6]*=h,ti.elements[8]*=f,ti.elements[9]*=f,ti.elements[10]*=f,t.setFromRotationMatrix(ti),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=yi){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),f=(t+e)/(t-e),u=(n+s)/(n-s),d,x;if(o===yi)d=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===ha)d=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=yi){let l=this.elements,c=1/(t-e),h=1/(n-s),f=1/(a-r),u=(t+e)*c,d=(n+s)*h,x,v;if(o===yi)x=(a+r)*f,v=-2*f;else if(o===ha)x=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ys=new F,ti=new fn,Nd=new F(0,0,0),Od=new F(1,1,1),Ii=new F,Fr=new F,Gn=new F,kc=new fn,Vc=new zi,ma=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Cn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Cn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Cn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Cn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Cn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Cn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return kc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vc.setFromEuler(this),this.setFromQuaternion(Vc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ma.DEFAULT_ORDER="XYZ";var fr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Fd=0,Gc=new F,vs=new zi,mi=new fn,Br=new F,nr=new F,Bd=new F,Hd=new zi,Wc=new F(1,0,0),Xc=new F(0,1,0),qc=new F(0,0,1),zd={type:"added"},kd={type:"removed"},Nn=class i extends Hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=Ws(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new F,t=new ma,n=new zi,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new fn},normalMatrix:{value:new Et}}),this.matrix=new fn,this.matrixWorld=new fn,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vs.setFromAxisAngle(e,t),this.quaternion.multiply(vs),this}rotateOnWorldAxis(e,t){return vs.setFromAxisAngle(e,t),this.quaternion.premultiply(vs),this}rotateX(e){return this.rotateOnAxis(Wc,e)}rotateY(e){return this.rotateOnAxis(Xc,e)}rotateZ(e){return this.rotateOnAxis(qc,e)}translateOnAxis(e,t){return Gc.copy(e).applyQuaternion(this.quaternion),this.position.add(Gc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wc,e)}translateY(e){return this.translateOnAxis(Xc,e)}translateZ(e){return this.translateOnAxis(qc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Br.copy(e):Br.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(nr,Br,this.up):mi.lookAt(Br,nr,this.up),this.quaternion.setFromRotationMatrix(mi),s&&(mi.extractRotation(s.matrixWorld),vs.setFromRotationMatrix(mi),this.quaternion.premultiply(vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(zd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kd)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,e,Bd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,Hd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),d=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Nn.DEFAULT_UP=new F(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ni=new F,gi=new F,Eo=new F,_i=new F,Ms=new F,Ss=new F,Yc=new F,To=new F,wo=new F,Ao=new F,Hr=!1,Ps=class i{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ni.subVectors(e,t),s.cross(ni);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ni.subVectors(s,t),gi.subVectors(n,t),Eo.subVectors(e,t);let a=ni.dot(ni),o=ni.dot(gi),l=ni.dot(Eo),c=gi.dot(gi),h=gi.dot(Eo),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-o*h)*u,x=(a*h-o*l)*u;return r.set(1-d-x,x,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getUV(e,t,n,s,r,a,o,l){return Hr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Hr=!0),this.getInterpolation(e,t,n,s,r,a,o,l)}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_i.x),l.addScaledVector(a,_i.y),l.addScaledVector(o,_i.z),l)}static isFrontFacing(e,t,n,s){return ni.subVectors(n,t),gi.subVectors(e,t),ni.cross(gi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),ni.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Hr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Hr=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ms.subVectors(s,n),Ss.subVectors(r,n),To.subVectors(e,n);let l=Ms.dot(To),c=Ss.dot(To);if(l<=0&&c<=0)return t.copy(n);wo.subVectors(e,s);let h=Ms.dot(wo),f=Ss.dot(wo);if(h>=0&&f<=h)return t.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Ms,a);Ao.subVectors(e,r);let d=Ms.dot(Ao),x=Ss.dot(Ao);if(x>=0&&d<=x)return t.copy(r);let v=d*c-l*x;if(v<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(n).addScaledVector(Ss,o);let m=h*x-d*f;if(m<=0&&f-h>=0&&d-x>=0)return Yc.subVectors(r,s),o=(f-h)/(f-h+(d-x)),t.copy(s).addScaledVector(Yc,o);let p=1/(m+v+u);return a=v*p,o=u*p,t.copy(n).addScaledVector(Ms,a).addScaledVector(Ss,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Yh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},zr={h:0,s:0,l:0};function Ro(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var bt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ot.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ot.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ot.workingColorSpace){if(e=Cd(e,1),t=Cn(t,0,1),n=Cn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ro(a,r,e+1/3),this.g=Ro(a,r,e),this.b=Ro(a,r,e-1/3)}return Ot.toWorkingColorSpace(this,s),this}setStyle(e,t=Sn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Sn){let n=Yh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ns(e.r),this.g=Ns(e.g),this.b=Ns(e.b),this}copyLinearToSRGB(e){return this.r=go(e.r),this.g=go(e.g),this.b=go(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Sn){return Ot.fromWorkingColorSpace(Rn.copy(this),e),Math.round(Cn(Rn.r*255,0,255))*65536+Math.round(Cn(Rn.g*255,0,255))*256+Math.round(Cn(Rn.b*255,0,255))}getHexString(e=Sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ot.workingColorSpace){Ot.fromWorkingColorSpace(Rn.copy(this),t);let n=Rn.r,s=Rn.g,r=Rn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ot.workingColorSpace){return Ot.fromWorkingColorSpace(Rn.copy(this),t),e.r=Rn.r,e.g=Rn.g,e.b=Rn.b,e}getStyle(e=Sn){Ot.fromWorkingColorSpace(Rn.copy(this),e);let t=Rn.r,n=Rn.g,s=Rn.b;return e!==Sn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Li),this.setHSL(Li.h+e,Li.s+t,Li.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Li),e.getHSL(zr);let n=po(Li.h,zr.h,t),s=po(Li.s,zr.s,t),r=po(Li.l,zr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Rn=new bt;bt.NAMES=Yh;var Vd=0,ki=class extends Hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=Ws(),this.name="",this.type="Material",this.blending=Us,this.side=Bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vo,this.blendDst=Go,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=sa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(n.blending=this.blending),this.side!==Bi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Vo&&(n.blendSrc=this.blendSrc),this.blendDst!==Go&&(n.blendDst=this.blendDst),this.blendEquation!==ji&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==sa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ps&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ps&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ps&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},nn=class extends ki{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Uh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var dn=new F,kr=new Fe,zn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Uc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)kr.fromBufferAttribute(this,t),kr.applyMatrix3(e),this.setXY(t,kr.x,kr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix3(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Qs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Bn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Bn(t,this.array),n=Bn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Bn(t,this.array),n=Bn(n,this.array),s=Bn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Bn(t,this.array),n=Bn(n,this.array),s=Bn(s,this.array),r=Bn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Uc&&(e.usage=this.usage),e}};var ga=class extends zn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var _a=class extends zn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Jt=class extends zn{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Gd=0,Yn=new fn,Co=new Nn,bs=new F,Wn=new is,ir=new is,_n=new F,kn=class i extends Hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=Ws(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qh(e)?_a:ga)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Et().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yn.makeRotationFromQuaternion(e),this.applyMatrix4(Yn),this}rotateX(e){return Yn.makeRotationX(e),this.applyMatrix4(Yn),this}rotateY(e){return Yn.makeRotationY(e),this.applyMatrix4(Yn),this}rotateZ(e){return Yn.makeRotationZ(e),this.applyMatrix4(Yn),this}translate(e,t,n){return Yn.makeTranslation(e,t,n),this.applyMatrix4(Yn),this}scale(e,t,n){return Yn.makeScale(e,t,n),this.applyMatrix4(Yn),this}lookAt(e){return Co.lookAt(e),Co.updateMatrix(),this.applyMatrix4(Co.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Jt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new is);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Wn.setFromBufferAttribute(r),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ir.setFromBufferAttribute(o),this.morphTargetsRelative?(_n.addVectors(Wn.min,ir.min),Wn.expandByPoint(_n),_n.addVectors(Wn.max,ir.max),Wn.expandByPoint(_n)):(Wn.expandByPoint(ir.min),Wn.expandByPoint(ir.max))}Wn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)_n.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(_n));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)_n.fromBufferAttribute(o,c),l&&(bs.fromBufferAttribute(e,c),_n.add(bs)),s=Math.max(s,n.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zn(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<o;w++)c[w]=new F,h[w]=new F;let f=new F,u=new F,d=new F,x=new Fe,v=new Fe,m=new Fe,p=new F,M=new F;function y(w,D,O){f.fromArray(s,w*3),u.fromArray(s,D*3),d.fromArray(s,O*3),x.fromArray(a,w*2),v.fromArray(a,D*2),m.fromArray(a,O*2),u.sub(f),d.sub(f),v.sub(x),m.sub(x);let j=1/(v.x*m.y-m.x*v.y);isFinite(j)&&(p.copy(u).multiplyScalar(m.y).addScaledVector(d,-v.y).multiplyScalar(j),M.copy(d).multiplyScalar(v.x).addScaledVector(u,-m.x).multiplyScalar(j),c[w].add(p),c[D].add(p),c[O].add(p),h[w].add(M),h[D].add(M),h[O].add(M))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let w=0,D=T.length;w<D;++w){let O=T[w],j=O.start,C=O.count;for(let G=j,N=j+C;G<N;G+=3)y(n[G+0],n[G+1],n[G+2])}let U=new F,I=new F,L=new F,Y=new F;function b(w){L.fromArray(r,w*3),Y.copy(L);let D=c[w];U.copy(D),U.sub(L.multiplyScalar(L.dot(D))).normalize(),I.crossVectors(Y,D);let j=I.dot(h[w])<0?-1:1;l[w*4]=U.x,l[w*4+1]=U.y,l[w*4+2]=U.z,l[w*4+3]=j}for(let w=0,D=T.length;w<D;++w){let O=T[w],j=O.start,C=O.count;for(let G=j,N=j+C;G<N;G+=3)b(n[G+0]),b(n[G+1]),b(n[G+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new zn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,h=new F,f=new F;if(e)for(let u=0,d=e.count;u<d;u+=3){let x=e.getX(u+0),v=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_n.fromBufferAttribute(e,t),_n.normalize(),e.setXYZ(t,_n.x,_n.y,_n.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h),d=0,x=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*h;for(let p=0;p<h;p++)u[x++]=c[d++]}return new zn(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=e(u,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},$c=new fn,Zi=new dr,Vr=new zs,Zc=new F,Es=new F,Ts=new F,ws=new F,Po=new F,Gr=new F,Wr=new Fe,Xr=new Fe,qr=new Fe,Kc=new F,Jc=new F,jc=new F,Yr=new F,$r=new F,lt=class extends Nn{constructor(e=new kn,t=new nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Gr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(Po.fromBufferAttribute(f,e),a?Gr.addScaledVector(Po,h):Gr.addScaledVector(Po.sub(t),h))}t.add(Gr)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere),Vr.applyMatrix4(r),Zi.copy(e.ray).recast(e.near),!(Vr.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(Vr,Zc)===null||Zi.origin.distanceToSquared(Zc)>(e.far-e.near)**2))&&($c.copy(r).invert(),Zi.copy(e.ray).applyMatrix4($c),!(n.boundingBox!==null&&Zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Zi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,v=u.length;x<v;x++){let m=u[x],p=a[m.materialIndex],M=Math.max(m.start,d.start),y=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let T=M,U=y;T<U;T+=3){let I=o.getX(T),L=o.getX(T+1),Y=o.getX(T+2);s=Zr(this,p,e,n,c,h,f,I,L,Y),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let x=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=x,p=v;m<p;m+=3){let M=o.getX(m),y=o.getX(m+1),T=o.getX(m+2);s=Zr(this,a,e,n,c,h,f,M,y,T),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,v=u.length;x<v;x++){let m=u[x],p=a[m.materialIndex],M=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let T=M,U=y;T<U;T+=3){let I=T,L=T+1,Y=T+2;s=Zr(this,p,e,n,c,h,f,I,L,Y),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let x=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=x,p=v;m<p;m+=3){let M=m,y=m+1,T=m+2;s=Zr(this,a,e,n,c,h,f,M,y,T),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Wd(i,e,t,n,s,r,a,o){let l;if(e.side===Hn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Bi,o),l===null)return null;$r.copy(o),$r.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo($r);return c<t.near||c>t.far?null:{distance:c,point:$r.clone(),object:i}}function Zr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Es),i.getVertexPosition(l,Ts),i.getVertexPosition(c,ws);let h=Wd(i,e,t,n,Es,Ts,ws,Yr);if(h){s&&(Wr.fromBufferAttribute(s,o),Xr.fromBufferAttribute(s,l),qr.fromBufferAttribute(s,c),h.uv=Ps.getInterpolation(Yr,Es,Ts,ws,Wr,Xr,qr,new Fe)),r&&(Wr.fromBufferAttribute(r,o),Xr.fromBufferAttribute(r,l),qr.fromBufferAttribute(r,c),h.uv1=Ps.getInterpolation(Yr,Es,Ts,ws,Wr,Xr,qr,new Fe),h.uv2=h.uv1),a&&(Kc.fromBufferAttribute(a,o),Jc.fromBufferAttribute(a,l),jc.fromBufferAttribute(a,c),h.normal=Ps.getInterpolation(Yr,Es,Ts,ws,Kc,Jc,jc,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new F,materialIndex:0};Ps.getNormal(Es,Ts,ws,f.normal),h.face=f}return h}var Pn=class i extends kn{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],u=0,d=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,s,a,2),x("x","z","y",1,-1,e,n,-t,s,a,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(f,2));function x(v,m,p,M,y,T,U,I,L,Y,b){let w=T/L,D=U/Y,O=T/2,j=U/2,C=I/2,G=L+1,N=Y+1,se=0,$=0,Q=new F;for(let ne=0;ne<N;ne++){let ue=ne*D-j;for(let fe=0;fe<G;fe++){let te=fe*w-O;Q[v]=te*M,Q[m]=ue*y,Q[p]=C,c.push(Q.x,Q.y,Q.z),Q[v]=0,Q[m]=0,Q[p]=I>0?1:-1,h.push(Q.x,Q.y,Q.z),f.push(fe/L),f.push(1-ne/Y),se+=1}}for(let ne=0;ne<Y;ne++)for(let ue=0;ue<L;ue++){let fe=u+ue+G*ne,te=u+ue+G*(ne+1),he=u+(ue+1)+G*(ne+1),be=u+(ue+1)+G*ne;l.push(fe,te,be),l.push(te,he,be),$+=6}o.addGroup(d,$,b),d+=$,u+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ks(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Ln(i){let e={};for(let t=0;t<i.length;t++){let n=ks(i[t]);for(let s in n)e[s]=n[s]}return e}function Xd(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function $h(i){return i.getRenderTarget()===null?i.outputColorSpace:Ot.workingColorSpace}var qd={clone:ks,merge:Ln},Yd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$d=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Si=class extends ki{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yd,this.fragmentShader=$d,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ks(e.uniforms),this.uniformsGroups=Xd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},xa=class extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fn,this.projectionMatrix=new fn,this.projectionMatrixInverse=new fn,this.coordinateSystem=yi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Un=class extends xa{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=$o*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(fo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $o*2*Math.atan(Math.tan(fo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(fo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},As=-90,Rs=1,jo=class extends Nn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Un(As,Rs,e,t);s.layers=this.layers,this.add(s);let r=new Un(As,Rs,e,t);r.layers=this.layers,this.add(r);let a=new Un(As,Rs,e,t);a.layers=this.layers,this.add(a);let o=new Un(As,Rs,e,t);o.layers=this.layers,this.add(o);let l=new Un(As,Rs,e,t);l.layers=this.layers,this.add(l);let c=new Un(As,Rs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===yi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ha)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(f,u,d),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},ya=class extends Jn{constructor(e,t,n,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Fs,super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Qo=class extends Mi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(sr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ns?Sn:Zn),this.texture=new ya(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:$n}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Pn(5,5,5),r=new Si({name:"CubemapFromEquirect",uniforms:ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Hn,blending:Ni});r.uniforms.tEquirect.value=t;let a=new lt(s,r),o=t.minFilter;return t.minFilter===hr&&(t.minFilter=$n),new jo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Io=new F,Zd=new F,Kd=new Et,ii=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Io.subVectors(n,t).cross(Zd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Io),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Kd.getNormalMatrix(e),s=this.coplanarPoint(Io).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ki=new zs,Kr=new F,pr=class{constructor(e=new ii,t=new ii,n=new ii,s=new ii,r=new ii,a=new ii){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=yi){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],f=s[6],u=s[7],d=s[8],x=s[9],v=s[10],m=s[11],p=s[12],M=s[13],y=s[14],T=s[15];if(n[0].setComponents(l-r,u-c,m-d,T-p).normalize(),n[1].setComponents(l+r,u+c,m+d,T+p).normalize(),n[2].setComponents(l+a,u+h,m+x,T+M).normalize(),n[3].setComponents(l-a,u-h,m-x,T-M).normalize(),n[4].setComponents(l-o,u-f,m-v,T-y).normalize(),t===yi)n[5].setComponents(l+o,u+f,m+v,T+y).normalize();else if(t===ha)n[5].setComponents(o,f,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ki)}intersectsSprite(e){return Ki.center.set(0,0,0),Ki.radius=.7071067811865476,Ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ki)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Kr.x=s.normal.x>0?e.max.x:e.min.x,Kr.y=s.normal.y>0?e.max.y:e.min.y,Kr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Kr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Zh(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Jd(i,e){let t=e.isWebGL2,n=new WeakMap;function s(c,h){let f=c.array,u=c.usage,d=f.byteLength,x=i.createBuffer();i.bindBuffer(h,x),i.bufferData(h,f,u),c.onUploadCallback();let v;if(f instanceof Float32Array)v=i.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=i.SHORT;else if(f instanceof Uint32Array)v=i.UNSIGNED_INT;else if(f instanceof Int32Array)v=i.INT;else if(f instanceof Int8Array)v=i.BYTE;else if(f instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:x,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:d}}function r(c,h,f){let u=h.array,d=h._updateRange,x=h.updateRanges;if(i.bindBuffer(f,c),d.count===-1&&x.length===0&&i.bufferSubData(f,0,u),x.length!==0){for(let v=0,m=x.length;v<m;v++){let p=x[v];t?i.bufferSubData(f,p.start*u.BYTES_PER_ELEMENT,u,p.start,p.count):i.bufferSubData(f,p.start*u.BYTES_PER_ELEMENT,u.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}d.count!==-1&&(t?i.bufferSubData(f,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count):i.bufferSubData(f,d.offset*u.BYTES_PER_ELEMENT,u.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let f=n.get(c);if(f===void 0)n.set(c,s(c,h));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,c,h),f.version=c.version}}return{get:a,remove:o,update:l}}var bi=class i extends kn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=e/o,u=t/l,d=[],x=[],v=[],m=[];for(let p=0;p<h;p++){let M=p*u-a;for(let y=0;y<c;y++){let T=y*f-r;x.push(T,-M,0),v.push(0,0,1),m.push(y/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){let y=M+c*p,T=M+c*(p+1),U=M+1+c*(p+1),I=M+1+c*p;d.push(y,T,I),d.push(T,U,I)}this.setIndex(d),this.setAttribute("position",new Jt(x,3)),this.setAttribute("normal",new Jt(v,3)),this.setAttribute("uv",new Jt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},jd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qd=`#ifdef USE_ALPHAHASH
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
#endif`,ef=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,sf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rf=`#ifdef USE_AOMAP
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
#endif`,af=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,of=`#ifdef USE_BATCHING
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
#endif`,lf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,cf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,df=`#ifdef USE_IRIDESCENCE
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
#endif`,ff=`#ifdef USE_BUMPMAP
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
#endif`,pf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_f=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Mf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Sf=`#define PI 3.141592653589793
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
} // validated`,bf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ef=`vec3 transformedNormal = objectNormal;
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
#endif`,Tf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Af=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pf=`
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
}`,If=`#ifdef USE_ENVMAP
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
#endif`,Lf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Df=`#ifdef USE_ENVMAP
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
#endif`,Uf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nf=`#ifdef USE_ENVMAP
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
#endif`,Of=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ff=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zf=`#ifdef USE_GRADIENTMAP
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
}`,kf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Vf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xf=`uniform bool receiveShadow;
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
#endif`,qf=`#ifdef USE_ENVMAP
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
#endif`,Yf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$f=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jf=`PhysicalMaterial material;
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
#endif`,jf=`struct PhysicalMaterial {
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
}`,Qf=`
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
#endif`,ep=`#if defined( RE_IndirectDiffuse )
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
#endif`,tp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,np=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ip=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,rp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ap=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,op=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cp=`#if defined( USE_POINTS_UV )
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
#endif`,hp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,up=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fp=`#ifdef USE_MORPHNORMALS
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
#endif`,pp=`#ifdef USE_MORPHTARGETS
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
#endif`,mp=`#ifdef USE_MORPHTARGETS
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
#endif`,gp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_p=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mp=`#ifdef USE_NORMALMAP
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
#endif`,Sp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ep=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ap=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Rp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ip=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Up=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Np=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Op=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Fp=`float getShadowMask() {
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
}`,Bp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hp=`#ifdef USE_SKINNING
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
#endif`,zp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kp=`#ifdef USE_SKINNING
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
#endif`,Vp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qp=`#ifdef USE_TRANSMISSION
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
#endif`,Yp=`#ifdef USE_TRANSMISSION
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
#endif`,$p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,jp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qp=`uniform sampler2D t2D;
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
}`,em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,im=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sm=`#include <common>
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
}`,rm=`#if DEPTH_PACKING == 3200
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
}`,am=`#define DISTANCE
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
}`,om=`#define DISTANCE
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
}`,lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hm=`uniform float scale;
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
}`,um=`uniform vec3 diffuse;
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
}`,dm=`#include <common>
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
}`,fm=`uniform vec3 diffuse;
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
}`,pm=`#define LAMBERT
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
}`,mm=`#define LAMBERT
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
}`,gm=`#define MATCAP
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
}`,_m=`#define MATCAP
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
}`,xm=`#define NORMAL
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
}`,ym=`#define NORMAL
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
}`,vm=`#define PHONG
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
}`,Mm=`#define PHONG
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
}`,Sm=`#define STANDARD
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
}`,bm=`#define STANDARD
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
}`,Em=`#define TOON
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
}`,Tm=`#define TOON
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
}`,wm=`uniform float size;
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
}`,Am=`uniform vec3 diffuse;
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
}`,Rm=`#include <common>
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
}`,Cm=`uniform vec3 color;
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
}`,Pm=`uniform float rotation;
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
}`,Im=`uniform vec3 diffuse;
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
}`,Mt={alphahash_fragment:jd,alphahash_pars_fragment:Qd,alphamap_fragment:ef,alphamap_pars_fragment:tf,alphatest_fragment:nf,alphatest_pars_fragment:sf,aomap_fragment:rf,aomap_pars_fragment:af,batching_pars_vertex:of,batching_vertex:lf,begin_vertex:cf,beginnormal_vertex:hf,bsdfs:uf,iridescence_fragment:df,bumpmap_pars_fragment:ff,clipping_planes_fragment:pf,clipping_planes_pars_fragment:mf,clipping_planes_pars_vertex:gf,clipping_planes_vertex:_f,color_fragment:xf,color_pars_fragment:yf,color_pars_vertex:vf,color_vertex:Mf,common:Sf,cube_uv_reflection_fragment:bf,defaultnormal_vertex:Ef,displacementmap_pars_vertex:Tf,displacementmap_vertex:wf,emissivemap_fragment:Af,emissivemap_pars_fragment:Rf,colorspace_fragment:Cf,colorspace_pars_fragment:Pf,envmap_fragment:If,envmap_common_pars_fragment:Lf,envmap_pars_fragment:Df,envmap_pars_vertex:Uf,envmap_physical_pars_fragment:qf,envmap_vertex:Nf,fog_vertex:Of,fog_pars_vertex:Ff,fog_fragment:Bf,fog_pars_fragment:Hf,gradientmap_pars_fragment:zf,lightmap_fragment:kf,lightmap_pars_fragment:Vf,lights_lambert_fragment:Gf,lights_lambert_pars_fragment:Wf,lights_pars_begin:Xf,lights_toon_fragment:Yf,lights_toon_pars_fragment:$f,lights_phong_fragment:Zf,lights_phong_pars_fragment:Kf,lights_physical_fragment:Jf,lights_physical_pars_fragment:jf,lights_fragment_begin:Qf,lights_fragment_maps:ep,lights_fragment_end:tp,logdepthbuf_fragment:np,logdepthbuf_pars_fragment:ip,logdepthbuf_pars_vertex:sp,logdepthbuf_vertex:rp,map_fragment:ap,map_pars_fragment:op,map_particle_fragment:lp,map_particle_pars_fragment:cp,metalnessmap_fragment:hp,metalnessmap_pars_fragment:up,morphcolor_vertex:dp,morphnormal_vertex:fp,morphtarget_pars_vertex:pp,morphtarget_vertex:mp,normal_fragment_begin:gp,normal_fragment_maps:_p,normal_pars_fragment:xp,normal_pars_vertex:yp,normal_vertex:vp,normalmap_pars_fragment:Mp,clearcoat_normal_fragment_begin:Sp,clearcoat_normal_fragment_maps:bp,clearcoat_pars_fragment:Ep,iridescence_pars_fragment:Tp,opaque_fragment:wp,packing:Ap,premultiplied_alpha_fragment:Rp,project_vertex:Cp,dithering_fragment:Pp,dithering_pars_fragment:Ip,roughnessmap_fragment:Lp,roughnessmap_pars_fragment:Dp,shadowmap_pars_fragment:Up,shadowmap_pars_vertex:Np,shadowmap_vertex:Op,shadowmask_pars_fragment:Fp,skinbase_vertex:Bp,skinning_pars_vertex:Hp,skinning_vertex:zp,skinnormal_vertex:kp,specularmap_fragment:Vp,specularmap_pars_fragment:Gp,tonemapping_fragment:Wp,tonemapping_pars_fragment:Xp,transmission_fragment:qp,transmission_pars_fragment:Yp,uv_pars_fragment:$p,uv_pars_vertex:Zp,uv_vertex:Kp,worldpos_vertex:Jp,background_vert:jp,background_frag:Qp,backgroundCube_vert:em,backgroundCube_frag:tm,cube_vert:nm,cube_frag:im,depth_vert:sm,depth_frag:rm,distanceRGBA_vert:am,distanceRGBA_frag:om,equirect_vert:lm,equirect_frag:cm,linedashed_vert:hm,linedashed_frag:um,meshbasic_vert:dm,meshbasic_frag:fm,meshlambert_vert:pm,meshlambert_frag:mm,meshmatcap_vert:gm,meshmatcap_frag:_m,meshnormal_vert:xm,meshnormal_frag:ym,meshphong_vert:vm,meshphong_frag:Mm,meshphysical_vert:Sm,meshphysical_frag:bm,meshtoon_vert:Em,meshtoon_frag:Tm,points_vert:wm,points_frag:Am,shadow_vert:Rm,shadow_frag:Cm,sprite_vert:Pm,sprite_frag:Im},Te={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Et}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Et},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0},uvTransform:{value:new Et}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}}},ui={basic:{uniforms:Ln([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:Mt.meshbasic_vert,fragmentShader:Mt.meshbasic_frag},lambert:{uniforms:Ln([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new bt(0)}}]),vertexShader:Mt.meshlambert_vert,fragmentShader:Mt.meshlambert_frag},phong:{uniforms:Ln([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:Mt.meshphong_vert,fragmentShader:Mt.meshphong_frag},standard:{uniforms:Ln([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag},toon:{uniforms:Ln([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new bt(0)}}]),vertexShader:Mt.meshtoon_vert,fragmentShader:Mt.meshtoon_frag},matcap:{uniforms:Ln([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:Mt.meshmatcap_vert,fragmentShader:Mt.meshmatcap_frag},points:{uniforms:Ln([Te.points,Te.fog]),vertexShader:Mt.points_vert,fragmentShader:Mt.points_frag},dashed:{uniforms:Ln([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Mt.linedashed_vert,fragmentShader:Mt.linedashed_frag},depth:{uniforms:Ln([Te.common,Te.displacementmap]),vertexShader:Mt.depth_vert,fragmentShader:Mt.depth_frag},normal:{uniforms:Ln([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:Mt.meshnormal_vert,fragmentShader:Mt.meshnormal_frag},sprite:{uniforms:Ln([Te.sprite,Te.fog]),vertexShader:Mt.sprite_vert,fragmentShader:Mt.sprite_frag},background:{uniforms:{uvTransform:{value:new Et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Mt.background_vert,fragmentShader:Mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Mt.backgroundCube_vert,fragmentShader:Mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Mt.cube_vert,fragmentShader:Mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Mt.equirect_vert,fragmentShader:Mt.equirect_frag},distanceRGBA:{uniforms:Ln([Te.common,Te.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Mt.distanceRGBA_vert,fragmentShader:Mt.distanceRGBA_frag},shadow:{uniforms:Ln([Te.lights,Te.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:Mt.shadow_vert,fragmentShader:Mt.shadow_frag}};ui.physical={uniforms:Ln([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Et},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Et},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Et},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Et},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Et},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Et},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Et}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag};var Jr={r:0,b:0,g:0};function Lm(i,e,t,n,s,r,a){let o=new bt(0),l=r===!0?0:1,c,h,f=null,u=0,d=null;function x(m,p){let M=!1,y=p.isScene===!0?p.background:null;y&&y.isTexture&&(y=(p.backgroundBlurriness>0?t:e).get(y)),y===null?v(o,l):y&&y.isColor&&(v(y,1),M=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Fa)?(h===void 0&&(h=new lt(new Pn(1,1,1),new Si({name:"BackgroundCubeMaterial",uniforms:ks(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,I,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=Ot.getTransfer(y.colorSpace)!==Vt,(f!==y||u!==y.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,f=y,u=y.version,d=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new lt(new bi(2,2),new Si({name:"BackgroundMaterial",uniforms:ks(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:Bi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=Ot.getTransfer(y.colorSpace)!==Vt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||u!==y.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,f=y,u=y.version,d=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,p){m.getRGB(Jr,$h(i)),n.buffers.color.setClear(Jr.r,Jr.g,Jr.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(o,l)},render:x}}function Dm(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null),c=l,h=!1;function f(C,G,N,se,$){let Q=!1;if(a){let ne=v(se,N,G);c!==ne&&(c=ne,d(c.object)),Q=p(C,se,N,$),Q&&M(C,se,N,$)}else{let ne=G.wireframe===!0;(c.geometry!==se.id||c.program!==N.id||c.wireframe!==ne)&&(c.geometry=se.id,c.program=N.id,c.wireframe=ne,Q=!0)}$!==null&&t.update($,i.ELEMENT_ARRAY_BUFFER),(Q||h)&&(h=!1,Y(C,G,N,se),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function u(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function d(C){return n.isWebGL2?i.bindVertexArray(C):r.bindVertexArrayOES(C)}function x(C){return n.isWebGL2?i.deleteVertexArray(C):r.deleteVertexArrayOES(C)}function v(C,G,N){let se=N.wireframe===!0,$=o[C.id];$===void 0&&($={},o[C.id]=$);let Q=$[G.id];Q===void 0&&(Q={},$[G.id]=Q);let ne=Q[se];return ne===void 0&&(ne=m(u()),Q[se]=ne),ne}function m(C){let G=[],N=[],se=[];for(let $=0;$<s;$++)G[$]=0,N[$]=0,se[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:N,attributeDivisors:se,object:C,attributes:{},index:null}}function p(C,G,N,se){let $=c.attributes,Q=G.attributes,ne=0,ue=N.getAttributes();for(let fe in ue)if(ue[fe].location>=0){let he=$[fe],be=Q[fe];if(be===void 0&&(fe==="instanceMatrix"&&C.instanceMatrix&&(be=C.instanceMatrix),fe==="instanceColor"&&C.instanceColor&&(be=C.instanceColor)),he===void 0||he.attribute!==be||be&&he.data!==be.data)return!0;ne++}return c.attributesNum!==ne||c.index!==se}function M(C,G,N,se){let $={},Q=G.attributes,ne=0,ue=N.getAttributes();for(let fe in ue)if(ue[fe].location>=0){let he=Q[fe];he===void 0&&(fe==="instanceMatrix"&&C.instanceMatrix&&(he=C.instanceMatrix),fe==="instanceColor"&&C.instanceColor&&(he=C.instanceColor));let be={};be.attribute=he,he&&he.data&&(be.data=he.data),$[fe]=be,ne++}c.attributes=$,c.attributesNum=ne,c.index=se}function y(){let C=c.newAttributes;for(let G=0,N=C.length;G<N;G++)C[G]=0}function T(C){U(C,0)}function U(C,G){let N=c.newAttributes,se=c.enabledAttributes,$=c.attributeDivisors;N[C]=1,se[C]===0&&(i.enableVertexAttribArray(C),se[C]=1),$[C]!==G&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,G),$[C]=G)}function I(){let C=c.newAttributes,G=c.enabledAttributes;for(let N=0,se=G.length;N<se;N++)G[N]!==C[N]&&(i.disableVertexAttribArray(N),G[N]=0)}function L(C,G,N,se,$,Q,ne){ne===!0?i.vertexAttribIPointer(C,G,N,$,Q):i.vertexAttribPointer(C,G,N,se,$,Q)}function Y(C,G,N,se){if(n.isWebGL2===!1&&(C.isInstancedMesh||se.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();let $=se.attributes,Q=N.getAttributes(),ne=G.defaultAttributeValues;for(let ue in Q){let fe=Q[ue];if(fe.location>=0){let te=$[ue];if(te===void 0&&(ue==="instanceMatrix"&&C.instanceMatrix&&(te=C.instanceMatrix),ue==="instanceColor"&&C.instanceColor&&(te=C.instanceColor)),te!==void 0){let he=te.normalized,be=te.itemSize,Be=t.get(te);if(Be===void 0)continue;let ze=Be.buffer,Je=Be.type,it=Be.bytesPerElement,Qe=n.isWebGL2===!0&&(Je===i.INT||Je===i.UNSIGNED_INT||te.gpuType===Oh);if(te.isInterleavedBufferAttribute){let wt=te.data,J=wt.stride,yn=te.offset;if(wt.isInstancedInterleavedBuffer){for(let tt=0;tt<fe.locationSize;tt++)U(fe.location+tt,wt.meshPerAttribute);C.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=wt.meshPerAttribute*wt.count)}else for(let tt=0;tt<fe.locationSize;tt++)T(fe.location+tt);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let tt=0;tt<fe.locationSize;tt++)L(fe.location+tt,be/fe.locationSize,Je,he,J*it,(yn+be/fe.locationSize*tt)*it,Qe)}else{if(te.isInstancedBufferAttribute){for(let wt=0;wt<fe.locationSize;wt++)U(fe.location+wt,te.meshPerAttribute);C.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let wt=0;wt<fe.locationSize;wt++)T(fe.location+wt);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let wt=0;wt<fe.locationSize;wt++)L(fe.location+wt,be/fe.locationSize,Je,he,be*it,be/fe.locationSize*wt*it,Qe)}}else if(ne!==void 0){let he=ne[ue];if(he!==void 0)switch(he.length){case 2:i.vertexAttrib2fv(fe.location,he);break;case 3:i.vertexAttrib3fv(fe.location,he);break;case 4:i.vertexAttrib4fv(fe.location,he);break;default:i.vertexAttrib1fv(fe.location,he)}}}}I()}function b(){O();for(let C in o){let G=o[C];for(let N in G){let se=G[N];for(let $ in se)x(se[$].object),delete se[$];delete G[N]}delete o[C]}}function w(C){if(o[C.id]===void 0)return;let G=o[C.id];for(let N in G){let se=G[N];for(let $ in se)x(se[$].object),delete se[$];delete G[N]}delete o[C.id]}function D(C){for(let G in o){let N=o[G];if(N[C.id]===void 0)continue;let se=N[C.id];for(let $ in se)x(se[$].object),delete se[$];delete N[C.id]}}function O(){j(),h=!0,c!==l&&(c=l,d(c.object))}function j(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:O,resetDefaultState:j,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfProgram:D,initAttributes:y,enableAttribute:T,disableUnusedAttributes:I}}function Um(i,e,t,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,f){i.drawArrays(r,h,f),t.update(f,r,1)}function l(h,f,u){if(u===0)return;let d,x;if(s)d=i,x="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[x](r,h,f,u),t.update(f,r,u)}function c(h,f,u){if(u===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let x=0;x<u;x++)this.render(h[x],f[x]);else{d.multiDrawArraysWEBGL(r,h,0,f,0,u);let x=0;for(let v=0;v<u;v++)x+=f[v];t.update(x,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Nm(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let L=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=u>0,T=a||e.has("OES_texture_float"),U=y&&T,I=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:M,vertexTextures:y,floatFragmentTextures:T,floatVertexTextures:U,maxSamples:I}}function Om(i){let e=this,t=null,n=0,s=!1,r=!1,a=new ii,o=new Et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){let x=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||x===null||x.length===0||r&&!m)r?h(null):c();else{let M=r?0:n,y=M*4,T=p.clippingState||null;l.value=T,T=h(x,u,y,d);for(let U=0;U!==y;++U)T[U]=t[U];p.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,d,x){let v=f!==null?f.length:0,m=null;if(v!==0){if(m=l.value,x!==!0||m===null){let p=d+v*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,T=d;y!==v;++y,T+=4)a.copy(f[y]).applyMatrix4(M,o),a.normal.toArray(m,T),m[T+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Fm(i){let e=new WeakMap;function t(a,o){return o===Wo?a.mapping=Fs:o===Xo&&(a.mapping=Bs),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Wo||o===Xo)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Qo(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var va=class extends xa{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Is=4,Qc=[.125,.215,.35,.446,.526,.582],Qi=20,Lo=new va,eh=new bt,Do=null,Uo=0,No=0,Ji=(1+Math.sqrt(5))/2,Cs=1/Ji,th=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,Ji,Cs),new F(0,Ji,-Cs),new F(Cs,0,Ji),new F(-Cs,0,Ji),new F(Ji,Cs,0),new F(-Ji,Cs,0)],Ma=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Do=this._renderer.getRenderTarget(),Uo=this._renderer.getActiveCubeFace(),No=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ih(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Do,Uo,No),e.scissorTest=!1,jr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fs||e.mapping===Bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Do=this._renderer.getRenderTarget(),Uo=this._renderer.getActiveCubeFace(),No=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:ur,format:ri,colorSpace:vi,depthBuffer:!1},s=nh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nh(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Bm(r)),this._blurMaterial=Hm(r,e,t)}return s}_compileMaterial(e){let t=new lt(this._lodPlanes[0],e);this._renderer.compile(t,Lo)}_sceneToCubeUV(e,t,n,s){let o=new Un(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(eh),h.toneMapping=Oi,h.autoClear=!1;let d=new nn({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1}),x=new lt(new Pn,d),v=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,v=!0):(d.color.copy(eh),v=!0);for(let p=0;p<6;p++){let M=p%3;M===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):M===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let y=this._cubeSize;jr(s,M*y,p>2?y:0,y,y),h.setRenderTarget(s),v&&h.render(x,o),h.render(e,o)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=u,h.autoClear=f,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Fs||e.mapping===Bs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=sh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ih());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new lt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;jr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Lo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=th[(s-1)%th.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new lt(this._lodPlanes[s],c),u=c.uniforms,d=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Qi-1),v=r/x,m=isFinite(r)?1+Math.floor(h*v):Qi;m>Qi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qi}`);let p=[],M=0;for(let L=0;L<Qi;++L){let Y=L/v,b=Math.exp(-Y*Y/2);p.push(b),L===0?M+=b:L<m&&(M+=2*b)}for(let L=0;L<p.length;L++)p[L]=p[L]/M;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:y}=this;u.dTheta.value=x,u.mipInt.value=y-n;let T=this._sizeLods[s],U=3*T*(s>y-Is?s-y+Is:0),I=4*(this._cubeSize-T);jr(t,U,I,3*T,2*T),l.setRenderTarget(t),l.render(f,Lo)}};function Bm(i){let e=[],t=[],n=[],s=i,r=i-Is+1+Qc.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Is?l=Qc[a-i+Is-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,x=6,v=3,m=2,p=1,M=new Float32Array(v*x*d),y=new Float32Array(m*x*d),T=new Float32Array(p*x*d);for(let I=0;I<d;I++){let L=I%3*2/3-1,Y=I>2?0:-1,b=[L,Y,0,L+2/3,Y,0,L+2/3,Y+1,0,L,Y,0,L+2/3,Y+1,0,L,Y+1,0];M.set(b,v*x*I),y.set(u,m*x*I);let w=[I,I,I,I,I,I];T.set(w,p*x*I)}let U=new kn;U.setAttribute("position",new zn(M,v)),U.setAttribute("uv",new zn(y,m)),U.setAttribute("faceIndex",new zn(T,p)),e.push(U),s>Is&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function nh(i,e,t){let n=new Mi(i,e,t);return n.texture.mapping=Fa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function jr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Hm(i,e,t){let n=new Float32Array(Qi),s=new F(0,1,0);return new Si({name:"SphericalGaussianBlur",defines:{n:Qi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Bl(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function ih(){return new Si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bl(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function sh(){return new Si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Bl(){return`

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
	`}function zm(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Wo||l===Xo,h=l===Fs||l===Bs;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new Ma(i)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{let f=o.image;if(c&&f&&f.height>0||h&&f&&s(f)){t===null&&(t=new Ma(i));let u=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,u),o.addEventListener("dispose",r),u.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function km(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Vm(i,e,t,n){let s={},r=new WeakMap;function a(f){let u=f.target;u.index!==null&&e.remove(u.index);for(let x in u.attributes)e.remove(u.attributes[x]);for(let x in u.morphAttributes){let v=u.morphAttributes[x];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}u.removeEventListener("dispose",a),delete s[u.id];let d=r.get(u);d&&(e.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(f){let u=f.attributes;for(let x in u)e.update(u[x],i.ARRAY_BUFFER);let d=f.morphAttributes;for(let x in d){let v=d[x];for(let m=0,p=v.length;m<p;m++)e.update(v[m],i.ARRAY_BUFFER)}}function c(f){let u=[],d=f.index,x=f.attributes.position,v=0;if(d!==null){let M=d.array;v=d.version;for(let y=0,T=M.length;y<T;y+=3){let U=M[y+0],I=M[y+1],L=M[y+2];u.push(U,I,I,L,L,U)}}else if(x!==void 0){let M=x.array;v=x.version;for(let y=0,T=M.length/3-1;y<T;y+=3){let U=y+0,I=y+1,L=y+2;u.push(U,I,I,L,L,U)}}else return;let m=new(qh(u)?_a:ga)(u,1);m.version=v;let p=r.get(f);p&&e.remove(p),r.set(f,m)}function h(f){let u=r.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function Gm(i,e,t,n){let s=n.isWebGL2,r;function a(d){r=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function h(d,x){i.drawElements(r,x,o,d*l),t.update(x,r,1)}function f(d,x,v){if(v===0)return;let m,p;if(s)m=i,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,x,o,d*l,v),t.update(x,r,v)}function u(d,x,v){if(v===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<v;p++)this.render(d[p]/l,x[p]);else{m.multiDrawElementsWEBGL(r,x,0,o,d,0,v);let p=0;for(let M=0;M<v;M++)p+=x[M];t.update(p,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=f,this.renderMultiDraw=u}function Wm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Xm(i,e){return i[0]-e[0]}function qm(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Ym(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,a=new xn,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,f){let u=c.morphTargetInfluences;if(e.isWebGL2===!0){let d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=d!==void 0?d.length:0,v=r.get(h);if(v===void 0||v.count!==x){let C=function(){O.dispose(),r.delete(h),h.removeEventListener("dispose",C)};v!==void 0&&v.texture.dispose();let M=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,U=h.morphAttributes.position||[],I=h.morphAttributes.normal||[],L=h.morphAttributes.color||[],Y=0;M===!0&&(Y=1),y===!0&&(Y=2),T===!0&&(Y=3);let b=h.attributes.position.count*Y,w=1;b>e.maxTextureSize&&(w=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let D=new Float32Array(b*w*4*x),O=new pa(D,b,w,x);O.type=Ui,O.needsUpdate=!0;let j=Y*4;for(let G=0;G<x;G++){let N=U[G],se=I[G],$=L[G],Q=b*w*4*G;for(let ne=0;ne<N.count;ne++){let ue=ne*j;M===!0&&(a.fromBufferAttribute(N,ne),D[Q+ue+0]=a.x,D[Q+ue+1]=a.y,D[Q+ue+2]=a.z,D[Q+ue+3]=0),y===!0&&(a.fromBufferAttribute(se,ne),D[Q+ue+4]=a.x,D[Q+ue+5]=a.y,D[Q+ue+6]=a.z,D[Q+ue+7]=0),T===!0&&(a.fromBufferAttribute($,ne),D[Q+ue+8]=a.x,D[Q+ue+9]=a.y,D[Q+ue+10]=a.z,D[Q+ue+11]=$.itemSize===4?a.w:1)}}v={count:x,texture:O,size:new Fe(b,w)},r.set(h,v),h.addEventListener("dispose",C)}let m=0;for(let M=0;M<u.length;M++)m+=u[M];let p=h.morphTargetsRelative?1:1-m;f.getUniforms().setValue(i,"morphTargetBaseInfluence",p),f.getUniforms().setValue(i,"morphTargetInfluences",u),f.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}else{let d=u===void 0?0:u.length,x=n[h.id];if(x===void 0||x.length!==d){x=[];for(let y=0;y<d;y++)x[y]=[y,0];n[h.id]=x}for(let y=0;y<d;y++){let T=x[y];T[0]=y,T[1]=u[y]}x.sort(qm);for(let y=0;y<8;y++)y<d&&x[y][1]?(o[y][0]=x[y][0],o[y][1]=x[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(Xm);let v=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let y=0;y<8;y++){let T=o[y],U=T[0],I=T[1];U!==Number.MAX_SAFE_INTEGER&&I?(v&&h.getAttribute("morphTarget"+y)!==v[U]&&h.setAttribute("morphTarget"+y,v[U]),m&&h.getAttribute("morphNormal"+y)!==m[U]&&h.setAttribute("morphNormal"+y,m[U]),s[y]=I,p+=I):(v&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),m&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),s[y]=0)}let M=h.morphTargetsRelative?1:1-p;f.getUniforms().setValue(i,"morphTargetBaseInfluence",M),f.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function $m(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,f=e.get(l,h);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return f}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Sa=class extends Jn{constructor(e,t,n,s,r,a,o,l,c,h){if(h=h!==void 0?h:ts,h!==ts&&h!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ts&&(n=Di),n===void 0&&h===Hs&&(n=es),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Dn,this.minFilter=l!==void 0?l:Dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Kh=new Jn,Jh=new Sa(1,1);Jh.compareFunction=Xh;var jh=new pa,Qh=new Jo,eu=new ya,rh=[],ah=[],oh=new Float32Array(16),lh=new Float32Array(9),ch=new Float32Array(4);function Xs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=rh[s];if(r===void 0&&(r=new Float32Array(s),rh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function pn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function mn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ha(i,e){let t=ah[e];t===void 0&&(t=new Int32Array(e),ah[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Zm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Km(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;i.uniform2fv(this.addr,e),mn(t,e)}}function Jm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pn(t,e))return;i.uniform3fv(this.addr,e),mn(t,e)}}function jm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;i.uniform4fv(this.addr,e),mn(t,e)}}function Qm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(pn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,n))return;ch.set(n),i.uniformMatrix2fv(this.addr,!1,ch),mn(t,n)}}function eg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(pn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,n))return;lh.set(n),i.uniformMatrix3fv(this.addr,!1,lh),mn(t,n)}}function tg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(pn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,n))return;oh.set(n),i.uniformMatrix4fv(this.addr,!1,oh),mn(t,n)}}function ng(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ig(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;i.uniform2iv(this.addr,e),mn(t,e)}}function sg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;i.uniform3iv(this.addr,e),mn(t,e)}}function rg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;i.uniform4iv(this.addr,e),mn(t,e)}}function ag(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function og(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;i.uniform2uiv(this.addr,e),mn(t,e)}}function lg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;i.uniform3uiv(this.addr,e),mn(t,e)}}function cg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;i.uniform4uiv(this.addr,e),mn(t,e)}}function hg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Jh:Kh;t.setTexture2D(e||r,s)}function ug(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Qh,s)}function dg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||eu,s)}function fg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||jh,s)}function pg(i){switch(i){case 5126:return Zm;case 35664:return Km;case 35665:return Jm;case 35666:return jm;case 35674:return Qm;case 35675:return eg;case 35676:return tg;case 5124:case 35670:return ng;case 35667:case 35671:return ig;case 35668:case 35672:return sg;case 35669:case 35673:return rg;case 5125:return ag;case 36294:return og;case 36295:return lg;case 36296:return cg;case 35678:case 36198:case 36298:case 36306:case 35682:return hg;case 35679:case 36299:case 36307:return ug;case 35680:case 36300:case 36308:case 36293:return dg;case 36289:case 36303:case 36311:case 36292:return fg}}function mg(i,e){i.uniform1fv(this.addr,e)}function gg(i,e){let t=Xs(e,this.size,2);i.uniform2fv(this.addr,t)}function _g(i,e){let t=Xs(e,this.size,3);i.uniform3fv(this.addr,t)}function xg(i,e){let t=Xs(e,this.size,4);i.uniform4fv(this.addr,t)}function yg(i,e){let t=Xs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function vg(i,e){let t=Xs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Mg(i,e){let t=Xs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Sg(i,e){i.uniform1iv(this.addr,e)}function bg(i,e){i.uniform2iv(this.addr,e)}function Eg(i,e){i.uniform3iv(this.addr,e)}function Tg(i,e){i.uniform4iv(this.addr,e)}function wg(i,e){i.uniform1uiv(this.addr,e)}function Ag(i,e){i.uniform2uiv(this.addr,e)}function Rg(i,e){i.uniform3uiv(this.addr,e)}function Cg(i,e){i.uniform4uiv(this.addr,e)}function Pg(i,e,t){let n=this.cache,s=e.length,r=Ha(t,s);pn(n,r)||(i.uniform1iv(this.addr,r),mn(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Kh,r[a])}function Ig(i,e,t){let n=this.cache,s=e.length,r=Ha(t,s);pn(n,r)||(i.uniform1iv(this.addr,r),mn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Qh,r[a])}function Lg(i,e,t){let n=this.cache,s=e.length,r=Ha(t,s);pn(n,r)||(i.uniform1iv(this.addr,r),mn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||eu,r[a])}function Dg(i,e,t){let n=this.cache,s=e.length,r=Ha(t,s);pn(n,r)||(i.uniform1iv(this.addr,r),mn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||jh,r[a])}function Ug(i){switch(i){case 5126:return mg;case 35664:return gg;case 35665:return _g;case 35666:return xg;case 35674:return yg;case 35675:return vg;case 35676:return Mg;case 5124:case 35670:return Sg;case 35667:case 35671:return bg;case 35668:case 35672:return Eg;case 35669:case 35673:return Tg;case 5125:return wg;case 36294:return Ag;case 36295:return Rg;case 36296:return Cg;case 35678:case 36198:case 36298:case 36306:case 35682:return Pg;case 35679:case 36299:case 36307:return Ig;case 35680:case 36300:case 36308:case 36293:return Lg;case 36289:case 36303:case 36311:case 36292:return Dg}}var el=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=pg(t.type)}},tl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ug(t.type)}},nl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Oo=/(\w+)(\])?(\[|\.)?/g;function hh(i,e){i.seq.push(e),i.map[e.id]=e}function Ng(i,e,t){let n=i.name,s=n.length;for(Oo.lastIndex=0;;){let r=Oo.exec(n),a=Oo.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){hh(t,c===void 0?new el(o,i,e):new tl(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new nl(o),hh(t,f)),t=f}}}var Os=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Ng(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function uh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Og=37297,Fg=0;function Bg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Hg(i){let e=Ot.getPrimaries(Ot.workingColorSpace),t=Ot.getPrimaries(i),n;switch(e===t?n="":e===ca&&t===la?n="LinearDisplayP3ToLinearSRGB":e===la&&t===ca&&(n="LinearSRGBToLinearDisplayP3"),i){case vi:case Ba:return[n,"LinearTransferOETF"];case Sn:case Fl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function dh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Bg(i.getShaderSource(e),a)}else return s}function zg(i,e){let t=Hg(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function kg(i,e){let t;switch(e){case sd:t="Linear";break;case rd:t="Reinhard";break;case ad:t="OptimizedCineon";break;case od:t="ACESFilmic";break;case cd:t="AgX";break;case ld:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Vg(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ls).join(`
`)}function Gg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ls).join(`
`)}function Wg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Xg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ls(i){return i!==""}function fh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ph(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var qg=/^[ \t]*#include +<([\w\d./]+)>/gm;function il(i){return i.replace(qg,$g)}var Yg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function $g(i,e){let t=Mt[e];if(t===void 0){let n=Yg.get(e);if(n!==void 0)t=Mt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return il(t)}var Zg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mh(i){return i.replace(Zg,Kg)}function Kg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function gh(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Jg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Dh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Nl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===xi&&(e="SHADOWMAP_TYPE_VSM"),e}function jg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Fs:case Bs:e="ENVMAP_TYPE_CUBE";break;case Fa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Qg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Bs:e="ENVMAP_MODE_REFRACTION";break}return e}function e0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Uh:e="ENVMAP_BLENDING_MULTIPLY";break;case nd:e="ENVMAP_BLENDING_MIX";break;case id:e="ENVMAP_BLENDING_ADD";break}return e}function t0(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function n0(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Jg(t),c=jg(t),h=Qg(t),f=e0(t),u=t0(t),d=t.isWebGL2?"":Vg(t),x=Gg(t),v=Wg(r),m=s.createProgram(),p,M,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ls).join(`
`),p.length>0&&(p+=`
`),M=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ls).join(`
`),M.length>0&&(M+=`
`)):(p=[gh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ls).join(`
`),M=[d,gh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Oi?"#define TONE_MAPPING":"",t.toneMapping!==Oi?Mt.tonemapping_pars_fragment:"",t.toneMapping!==Oi?kg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Mt.colorspace_pars_fragment,zg("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ls).join(`
`)),a=il(a),a=fh(a,t),a=ph(a,t),o=il(o),o=fh(o,t),o=ph(o,t),a=mh(a),o=mh(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Nc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);let T=y+p+a,U=y+M+o,I=uh(s,s.VERTEX_SHADER,T),L=uh(s,s.FRAGMENT_SHADER,U);s.attachShader(m,I),s.attachShader(m,L),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function Y(O){if(i.debug.checkShaderErrors){let j=s.getProgramInfoLog(m).trim(),C=s.getShaderInfoLog(I).trim(),G=s.getShaderInfoLog(L).trim(),N=!0,se=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(N=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,I,L);else{let $=dh(s,I,"vertex"),Q=dh(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+j+`
`+$+`
`+Q)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(C===""||G==="")&&(se=!1);se&&(O.diagnostics={runnable:N,programLog:j,vertexShader:{log:C,prefix:p},fragmentShader:{log:G,prefix:M}})}s.deleteShader(I),s.deleteShader(L),b=new Os(s,m),w=Xg(s,m)}let b;this.getUniforms=function(){return b===void 0&&Y(this),b};let w;this.getAttributes=function(){return w===void 0&&Y(this),w};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(m,Og)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Fg++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=I,this.fragmentShader=L,this}var i0=0,sl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new rl(e),t.set(e,n)),n}},rl=class{constructor(e){this.id=i0++,this.code=e,this.usedTimes=0}};function s0(i,e,t,n,s,r,a){let o=new fr,l=new sl,c=[],h=s.isWebGL2,f=s.logarithmicDepthBuffer,u=s.vertexTextures,d=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return b===0?"uv":`uv${b}`}function m(b,w,D,O,j){let C=O.fog,G=j.geometry,N=b.isMeshStandardMaterial?O.environment:null,se=(b.isMeshStandardMaterial?t:e).get(b.envMap||N),$=se&&se.mapping===Fa?se.image.height:null,Q=x[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));let ne=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ue=ne!==void 0?ne.length:0,fe=0;G.morphAttributes.position!==void 0&&(fe=1),G.morphAttributes.normal!==void 0&&(fe=2),G.morphAttributes.color!==void 0&&(fe=3);let te,he,be,Be;if(Q){let Gt=ui[Q];te=Gt.vertexShader,he=Gt.fragmentShader}else te=b.vertexShader,he=b.fragmentShader,l.update(b),be=l.getVertexShaderID(b),Be=l.getFragmentShaderID(b);let ze=i.getRenderTarget(),Je=j.isInstancedMesh===!0,it=j.isBatchedMesh===!0,Qe=!!b.map,wt=!!b.matcap,J=!!se,yn=!!b.aoMap,tt=!!b.lightMap,ct=!!b.bumpMap,ke=!!b.normalMap,Ft=!!b.displacementMap,_t=!!b.emissiveMap,A=!!b.metalnessMap,S=!!b.roughnessMap,K=b.anisotropy>0,_e=b.clearcoat>0,me=b.iridescence>0,ge=b.sheen>0,Ge=b.transmission>0,Ce=K&&!!b.anisotropyMap,Le=_e&&!!b.clearcoatMap,Ne=_e&&!!b.clearcoatNormalMap,We=_e&&!!b.clearcoatRoughnessMap,le=me&&!!b.iridescenceMap,It=me&&!!b.iridescenceThicknessMap,ut=ge&&!!b.sheenColorMap,rt=ge&&!!b.sheenRoughnessMap,Oe=!!b.specularMap,De=!!b.specularColorMap,Ae=!!b.specularIntensityMap,qe=Ge&&!!b.transmissionMap,dt=Ge&&!!b.thicknessMap,Xe=!!b.gradientMap,Se=!!b.alphaMap,B=b.alphaTest>0,Ee=!!b.alphaHash,ve=!!b.extensions,Ye=!!G.attributes.uv1,$e=!!G.attributes.uv2,gt=!!G.attributes.uv3,st=Oi;return b.toneMapped&&(ze===null||ze.isXRRenderTarget===!0)&&(st=i.toneMapping),{isWebGL2:h,shaderID:Q,shaderType:b.type,shaderName:b.name,vertexShader:te,fragmentShader:he,defines:b.defines,customVertexShaderID:be,customFragmentShaderID:Be,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:it,instancing:Je,instancingColor:Je&&j.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:ze===null?i.outputColorSpace:ze.isXRRenderTarget===!0?ze.texture.colorSpace:vi,map:Qe,matcap:wt,envMap:J,envMapMode:J&&se.mapping,envMapCubeUVHeight:$,aoMap:yn,lightMap:tt,bumpMap:ct,normalMap:ke,displacementMap:u&&Ft,emissiveMap:_t,normalMapObjectSpace:ke&&b.normalMapType===Md,normalMapTangentSpace:ke&&b.normalMapType===Wh,metalnessMap:A,roughnessMap:S,anisotropy:K,anisotropyMap:Ce,clearcoat:_e,clearcoatMap:Le,clearcoatNormalMap:Ne,clearcoatRoughnessMap:We,iridescence:me,iridescenceMap:le,iridescenceThicknessMap:It,sheen:ge,sheenColorMap:ut,sheenRoughnessMap:rt,specularMap:Oe,specularColorMap:De,specularIntensityMap:Ae,transmission:Ge,transmissionMap:qe,thicknessMap:dt,gradientMap:Xe,opaque:b.transparent===!1&&b.blending===Us,alphaMap:Se,alphaTest:B,alphaHash:Ee,combine:b.combine,mapUv:Qe&&v(b.map.channel),aoMapUv:yn&&v(b.aoMap.channel),lightMapUv:tt&&v(b.lightMap.channel),bumpMapUv:ct&&v(b.bumpMap.channel),normalMapUv:ke&&v(b.normalMap.channel),displacementMapUv:Ft&&v(b.displacementMap.channel),emissiveMapUv:_t&&v(b.emissiveMap.channel),metalnessMapUv:A&&v(b.metalnessMap.channel),roughnessMapUv:S&&v(b.roughnessMap.channel),anisotropyMapUv:Ce&&v(b.anisotropyMap.channel),clearcoatMapUv:Le&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:We&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:It&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:rt&&v(b.sheenRoughnessMap.channel),specularMapUv:Oe&&v(b.specularMap.channel),specularColorMapUv:De&&v(b.specularColorMap.channel),specularIntensityMapUv:Ae&&v(b.specularIntensityMap.channel),transmissionMapUv:qe&&v(b.transmissionMap.channel),thicknessMapUv:dt&&v(b.thicknessMap.channel),alphaMapUv:Se&&v(b.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(ke||K),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:Ye,vertexUv2s:$e,vertexUv3s:gt,pointsUvs:j.isPoints===!0&&!!G.attributes.uv&&(Qe||Se),fog:!!C,useFog:b.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:j.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:fe,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:st,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Qe&&b.map.isVideoTexture===!0&&Ot.getTransfer(b.map.colorSpace)===Vt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===cn,flipSided:b.side===Hn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:ve&&b.extensions.derivatives===!0,extensionFragDepth:ve&&b.extensions.fragDepth===!0,extensionDrawBuffers:ve&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:ve&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ve&&b.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){let w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(let D in b.defines)w.push(D),w.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(M(w,b),y(w,b),w.push(i.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function M(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.anisotropyMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.numLightProbes),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function y(b,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),b.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),b.push(o.mask)}function T(b){let w=x[b.type],D;if(w){let O=ui[w];D=qd.clone(O.uniforms)}else D=b.uniforms;return D}function U(b,w){let D;for(let O=0,j=c.length;O<j;O++){let C=c[O];if(C.cacheKey===w){D=C,++D.usedTimes;break}}return D===void 0&&(D=new n0(i,w,b,r),c.push(D)),D}function I(b){if(--b.usedTimes===0){let w=c.indexOf(b);c[w]=c[c.length-1],c.pop(),b.destroy()}}function L(b){l.remove(b)}function Y(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:T,acquireProgram:U,releaseProgram:I,releaseShaderCache:L,programs:c,dispose:Y}}function r0(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function a0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function _h(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function xh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f,u,d,x,v,m){let p=i[e];return p===void 0?(p={id:f.id,object:f,geometry:u,material:d,groupOrder:x,renderOrder:f.renderOrder,z:v,group:m},i[e]=p):(p.id=f.id,p.object=f,p.geometry=u,p.material=d,p.groupOrder=x,p.renderOrder=f.renderOrder,p.z=v,p.group=m),e++,p}function o(f,u,d,x,v,m){let p=a(f,u,d,x,v,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(f,u,d,x,v,m){let p=a(f,u,d,x,v,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(f,u){t.length>1&&t.sort(f||a0),n.length>1&&n.sort(u||_h),s.length>1&&s.sort(u||_h)}function h(){for(let f=e,u=i.length;f<u;f++){let d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function o0(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new xh,i.set(n,[a])):s>=r.length?(a=new xh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function l0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new bt};break;case"SpotLight":t={position:new F,direction:new F,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new bt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":t={color:new bt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function c0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var h0=0;function u0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function d0(i,e){let t=new l0,n=c0(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new F);let r=new F,a=new fn,o=new fn;function l(h,f){let u=0,d=0,x=0;for(let O=0;O<9;O++)s.probe[O].set(0,0,0);let v=0,m=0,p=0,M=0,y=0,T=0,U=0,I=0,L=0,Y=0,b=0;h.sort(u0);let w=f===!0?Math.PI:1;for(let O=0,j=h.length;O<j;O++){let C=h[O],G=C.color,N=C.intensity,se=C.distance,$=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=G.r*N*w,d+=G.g*N*w,x+=G.b*N*w;else if(C.isLightProbe){for(let Q=0;Q<9;Q++)s.probe[Q].addScaledVector(C.sh.coefficients[Q],N);b++}else if(C.isDirectionalLight){let Q=t.get(C);if(Q.color.copy(C.color).multiplyScalar(C.intensity*w),C.castShadow){let ne=C.shadow,ue=n.get(C);ue.shadowBias=ne.bias,ue.shadowNormalBias=ne.normalBias,ue.shadowRadius=ne.radius,ue.shadowMapSize=ne.mapSize,s.directionalShadow[v]=ue,s.directionalShadowMap[v]=$,s.directionalShadowMatrix[v]=C.shadow.matrix,T++}s.directional[v]=Q,v++}else if(C.isSpotLight){let Q=t.get(C);Q.position.setFromMatrixPosition(C.matrixWorld),Q.color.copy(G).multiplyScalar(N*w),Q.distance=se,Q.coneCos=Math.cos(C.angle),Q.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),Q.decay=C.decay,s.spot[p]=Q;let ne=C.shadow;if(C.map&&(s.spotLightMap[L]=C.map,L++,ne.updateMatrices(C),C.castShadow&&Y++),s.spotLightMatrix[p]=ne.matrix,C.castShadow){let ue=n.get(C);ue.shadowBias=ne.bias,ue.shadowNormalBias=ne.normalBias,ue.shadowRadius=ne.radius,ue.shadowMapSize=ne.mapSize,s.spotShadow[p]=ue,s.spotShadowMap[p]=$,I++}p++}else if(C.isRectAreaLight){let Q=t.get(C);Q.color.copy(G).multiplyScalar(N),Q.halfWidth.set(C.width*.5,0,0),Q.halfHeight.set(0,C.height*.5,0),s.rectArea[M]=Q,M++}else if(C.isPointLight){let Q=t.get(C);if(Q.color.copy(C.color).multiplyScalar(C.intensity*w),Q.distance=C.distance,Q.decay=C.decay,C.castShadow){let ne=C.shadow,ue=n.get(C);ue.shadowBias=ne.bias,ue.shadowNormalBias=ne.normalBias,ue.shadowRadius=ne.radius,ue.shadowMapSize=ne.mapSize,ue.shadowCameraNear=ne.camera.near,ue.shadowCameraFar=ne.camera.far,s.pointShadow[m]=ue,s.pointShadowMap[m]=$,s.pointShadowMatrix[m]=C.shadow.matrix,U++}s.point[m]=Q,m++}else if(C.isHemisphereLight){let Q=t.get(C);Q.skyColor.copy(C.color).multiplyScalar(N*w),Q.groundColor.copy(C.groundColor).multiplyScalar(N*w),s.hemi[y]=Q,y++}}M>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Te.LTC_FLOAT_1,s.rectAreaLTC2=Te.LTC_FLOAT_2):(s.rectAreaLTC1=Te.LTC_HALF_1,s.rectAreaLTC2=Te.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Te.LTC_FLOAT_1,s.rectAreaLTC2=Te.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Te.LTC_HALF_1,s.rectAreaLTC2=Te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=u,s.ambient[1]=d,s.ambient[2]=x;let D=s.hash;(D.directionalLength!==v||D.pointLength!==m||D.spotLength!==p||D.rectAreaLength!==M||D.hemiLength!==y||D.numDirectionalShadows!==T||D.numPointShadows!==U||D.numSpotShadows!==I||D.numSpotMaps!==L||D.numLightProbes!==b)&&(s.directional.length=v,s.spot.length=p,s.rectArea.length=M,s.point.length=m,s.hemi.length=y,s.directionalShadow.length=T,s.directionalShadowMap.length=T,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=I,s.spotShadowMap.length=I,s.directionalShadowMatrix.length=T,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=I+L-Y,s.spotLightMap.length=L,s.numSpotLightShadowsWithMaps=Y,s.numLightProbes=b,D.directionalLength=v,D.pointLength=m,D.spotLength=p,D.rectAreaLength=M,D.hemiLength=y,D.numDirectionalShadows=T,D.numPointShadows=U,D.numSpotShadows=I,D.numSpotMaps=L,D.numLightProbes=b,s.version=h0++)}function c(h,f){let u=0,d=0,x=0,v=0,m=0,p=f.matrixWorldInverse;for(let M=0,y=h.length;M<y;M++){let T=h[M];if(T.isDirectionalLight){let U=s.directional[u];U.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),U.direction.sub(r),U.direction.transformDirection(p),u++}else if(T.isSpotLight){let U=s.spot[x];U.position.setFromMatrixPosition(T.matrixWorld),U.position.applyMatrix4(p),U.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),U.direction.sub(r),U.direction.transformDirection(p),x++}else if(T.isRectAreaLight){let U=s.rectArea[v];U.position.setFromMatrixPosition(T.matrixWorld),U.position.applyMatrix4(p),o.identity(),a.copy(T.matrixWorld),a.premultiply(p),o.extractRotation(a),U.halfWidth.set(T.width*.5,0,0),U.halfHeight.set(0,T.height*.5,0),U.halfWidth.applyMatrix4(o),U.halfHeight.applyMatrix4(o),v++}else if(T.isPointLight){let U=s.point[d];U.position.setFromMatrixPosition(T.matrixWorld),U.position.applyMatrix4(p),d++}else if(T.isHemisphereLight){let U=s.hemi[m];U.direction.setFromMatrixPosition(T.matrixWorld),U.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:s}}function yh(i,e){let t=new d0(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(f){n.push(f)}function o(f){s.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function f0(i,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),l;return o===void 0?(l=new yh(i,e),t.set(r,[l])):a>=o.length?(l=new yh(i,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:n,dispose:s}}var al=class extends ki{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ol=class extends ki{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},p0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,m0=`uniform sampler2D shadow_pass;
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
}`;function g0(i,e,t){let n=new pr,s=new Fe,r=new Fe,a=new xn,o=new al({depthPacking:vd}),l=new ol,c={},h=t.maxTextureSize,f={[Bi]:Hn,[Hn]:Bi,[cn]:cn},u=new Si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:p0,fragmentShader:m0}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let x=new kn;x.setAttribute("position",new zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new lt(x,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dh;let p=this.type;this.render=function(I,L,Y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;let b=i.getRenderTarget(),w=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Ni),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let j=p!==xi&&this.type===xi,C=p===xi&&this.type!==xi;for(let G=0,N=I.length;G<N;G++){let se=I[G],$=se.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let Q=$.getFrameExtents();if(s.multiply(Q),r.copy($.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Q.x),s.x=r.x*Q.x,$.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Q.y),s.y=r.y*Q.y,$.mapSize.y=r.y)),$.map===null||j===!0||C===!0){let ue=this.type!==xi?{minFilter:Dn,magFilter:Dn}:{};$.map!==null&&$.map.dispose(),$.map=new Mi(s.x,s.y,ue),$.map.texture.name=se.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();let ne=$.getViewportCount();for(let ue=0;ue<ne;ue++){let fe=$.getViewport(ue);a.set(r.x*fe.x,r.y*fe.y,r.x*fe.z,r.y*fe.w),O.viewport(a),$.updateMatrices(se,ue),n=$.getFrustum(),T(L,Y,$.camera,se,this.type)}$.isPointLightShadow!==!0&&this.type===xi&&M($,Y),$.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,w,D)};function M(I,L){let Y=e.update(v);u.defines.VSM_SAMPLES!==I.blurSamples&&(u.defines.VSM_SAMPLES=I.blurSamples,d.defines.VSM_SAMPLES=I.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Mi(s.x,s.y)),u.uniforms.shadow_pass.value=I.map.texture,u.uniforms.resolution.value=I.mapSize,u.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(L,null,Y,u,v,null),d.uniforms.shadow_pass.value=I.mapPass.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(L,null,Y,d,v,null)}function y(I,L,Y,b){let w=null,D=Y.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(D!==void 0)w=D;else if(w=Y.isPointLight===!0?l:o,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){let O=w.uuid,j=L.uuid,C=c[O];C===void 0&&(C={},c[O]=C);let G=C[j];G===void 0&&(G=w.clone(),C[j]=G,L.addEventListener("dispose",U)),w=G}if(w.visible=L.visible,w.wireframe=L.wireframe,b===xi?w.side=L.shadowSide!==null?L.shadowSide:L.side:w.side=L.shadowSide!==null?L.shadowSide:f[L.side],w.alphaMap=L.alphaMap,w.alphaTest=L.alphaTest,w.map=L.map,w.clipShadows=L.clipShadows,w.clippingPlanes=L.clippingPlanes,w.clipIntersection=L.clipIntersection,w.displacementMap=L.displacementMap,w.displacementScale=L.displacementScale,w.displacementBias=L.displacementBias,w.wireframeLinewidth=L.wireframeLinewidth,w.linewidth=L.linewidth,Y.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let O=i.properties.get(w);O.light=Y}return w}function T(I,L,Y,b,w){if(I.visible===!1)return;if(I.layers.test(L.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&w===xi)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,I.matrixWorld);let j=e.update(I),C=I.material;if(Array.isArray(C)){let G=j.groups;for(let N=0,se=G.length;N<se;N++){let $=G[N],Q=C[$.materialIndex];if(Q&&Q.visible){let ne=y(I,Q,b,w);I.onBeforeShadow(i,I,L,Y,j,ne,$),i.renderBufferDirect(Y,null,j,ne,I,$),I.onAfterShadow(i,I,L,Y,j,ne,$)}}}else if(C.visible){let G=y(I,C,b,w);I.onBeforeShadow(i,I,L,Y,j,G,null),i.renderBufferDirect(Y,null,j,G,I,null),I.onAfterShadow(i,I,L,Y,j,G,null)}}let O=I.children;for(let j=0,C=O.length;j<C;j++)T(O[j],L,Y,b,w)}function U(I){I.target.removeEventListener("dispose",U);for(let Y in c){let b=c[Y],w=I.target.uuid;w in b&&(b[w].dispose(),delete b[w])}}}function _0(i,e,t){let n=t.isWebGL2;function s(){let B=!1,Ee=new xn,ve=null,Ye=new xn(0,0,0,0);return{setMask:function($e){ve!==$e&&!B&&(i.colorMask($e,$e,$e,$e),ve=$e)},setLocked:function($e){B=$e},setClear:function($e,gt,st,Ct,Gt){Gt===!0&&($e*=Ct,gt*=Ct,st*=Ct),Ee.set($e,gt,st,Ct),Ye.equals(Ee)===!1&&(i.clearColor($e,gt,st,Ct),Ye.copy(Ee))},reset:function(){B=!1,ve=null,Ye.set(-1,0,0,0)}}}function r(){let B=!1,Ee=null,ve=null,Ye=null;return{setTest:function($e){$e?it(i.DEPTH_TEST):Qe(i.DEPTH_TEST)},setMask:function($e){Ee!==$e&&!B&&(i.depthMask($e),Ee=$e)},setFunc:function($e){if(ve!==$e){switch($e){case Zu:i.depthFunc(i.NEVER);break;case Ku:i.depthFunc(i.ALWAYS);break;case Ju:i.depthFunc(i.LESS);break;case sa:i.depthFunc(i.LEQUAL);break;case ju:i.depthFunc(i.EQUAL);break;case Qu:i.depthFunc(i.GEQUAL);break;case ed:i.depthFunc(i.GREATER);break;case td:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ve=$e}},setLocked:function($e){B=$e},setClear:function($e){Ye!==$e&&(i.clearDepth($e),Ye=$e)},reset:function(){B=!1,Ee=null,ve=null,Ye=null}}}function a(){let B=!1,Ee=null,ve=null,Ye=null,$e=null,gt=null,st=null,Ct=null,Gt=null;return{setTest:function(St){B||(St?it(i.STENCIL_TEST):Qe(i.STENCIL_TEST))},setMask:function(St){Ee!==St&&!B&&(i.stencilMask(St),Ee=St)},setFunc:function(St,Nt,jt){(ve!==St||Ye!==Nt||$e!==jt)&&(i.stencilFunc(St,Nt,jt),ve=St,Ye=Nt,$e=jt)},setOp:function(St,Nt,jt){(gt!==St||st!==Nt||Ct!==jt)&&(i.stencilOp(St,Nt,jt),gt=St,st=Nt,Ct=jt)},setLocked:function(St){B=St},setClear:function(St){Gt!==St&&(i.clearStencil(St),Gt=St)},reset:function(){B=!1,Ee=null,ve=null,Ye=null,$e=null,gt=null,st=null,Ct=null,Gt=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,f=new WeakMap,u={},d={},x=new WeakMap,v=[],m=null,p=!1,M=null,y=null,T=null,U=null,I=null,L=null,Y=null,b=new bt(0,0,0),w=0,D=!1,O=null,j=null,C=null,G=null,N=null,se=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,Q=0,ne=i.getParameter(i.VERSION);ne.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(ne)[1]),$=Q>=1):ne.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),$=Q>=2);let ue=null,fe={},te=i.getParameter(i.SCISSOR_BOX),he=i.getParameter(i.VIEWPORT),be=new xn().fromArray(te),Be=new xn().fromArray(he);function ze(B,Ee,ve,Ye){let $e=new Uint8Array(4),gt=i.createTexture();i.bindTexture(B,gt),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let st=0;st<ve;st++)n&&(B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY)?i.texImage3D(Ee,0,i.RGBA,1,1,Ye,0,i.RGBA,i.UNSIGNED_BYTE,$e):i.texImage2D(Ee+st,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,$e);return gt}let Je={};Je[i.TEXTURE_2D]=ze(i.TEXTURE_2D,i.TEXTURE_2D,1),Je[i.TEXTURE_CUBE_MAP]=ze(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Je[i.TEXTURE_2D_ARRAY]=ze(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Je[i.TEXTURE_3D]=ze(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),it(i.DEPTH_TEST),l.setFunc(sa),_t(!1),A(jl),it(i.CULL_FACE),ke(Ni);function it(B){u[B]!==!0&&(i.enable(B),u[B]=!0)}function Qe(B){u[B]!==!1&&(i.disable(B),u[B]=!1)}function wt(B,Ee){return d[B]!==Ee?(i.bindFramebuffer(B,Ee),d[B]=Ee,n&&(B===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Ee),B===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Ee)),!0):!1}function J(B,Ee){let ve=v,Ye=!1;if(B)if(ve=x.get(Ee),ve===void 0&&(ve=[],x.set(Ee,ve)),B.isWebGLMultipleRenderTargets){let $e=B.texture;if(ve.length!==$e.length||ve[0]!==i.COLOR_ATTACHMENT0){for(let gt=0,st=$e.length;gt<st;gt++)ve[gt]=i.COLOR_ATTACHMENT0+gt;ve.length=$e.length,Ye=!0}}else ve[0]!==i.COLOR_ATTACHMENT0&&(ve[0]=i.COLOR_ATTACHMENT0,Ye=!0);else ve[0]!==i.BACK&&(ve[0]=i.BACK,Ye=!0);Ye&&(t.isWebGL2?i.drawBuffers(ve):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ve))}function yn(B){return m!==B?(i.useProgram(B),m=B,!0):!1}let tt={[ji]:i.FUNC_ADD,[Uu]:i.FUNC_SUBTRACT,[Nu]:i.FUNC_REVERSE_SUBTRACT};if(n)tt[nc]=i.MIN,tt[ic]=i.MAX;else{let B=e.get("EXT_blend_minmax");B!==null&&(tt[nc]=B.MIN_EXT,tt[ic]=B.MAX_EXT)}let ct={[Ou]:i.ZERO,[Fu]:i.ONE,[Bu]:i.SRC_COLOR,[Vo]:i.SRC_ALPHA,[Wu]:i.SRC_ALPHA_SATURATE,[Vu]:i.DST_COLOR,[zu]:i.DST_ALPHA,[Hu]:i.ONE_MINUS_SRC_COLOR,[Go]:i.ONE_MINUS_SRC_ALPHA,[Gu]:i.ONE_MINUS_DST_COLOR,[ku]:i.ONE_MINUS_DST_ALPHA,[Xu]:i.CONSTANT_COLOR,[qu]:i.ONE_MINUS_CONSTANT_COLOR,[Yu]:i.CONSTANT_ALPHA,[$u]:i.ONE_MINUS_CONSTANT_ALPHA};function ke(B,Ee,ve,Ye,$e,gt,st,Ct,Gt,St){if(B===Ni){p===!0&&(Qe(i.BLEND),p=!1);return}if(p===!1&&(it(i.BLEND),p=!0),B!==Du){if(B!==M||St!==D){if((y!==ji||I!==ji)&&(i.blendEquation(i.FUNC_ADD),y=ji,I=ji),St)switch(B){case Us:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ql:i.blendFunc(i.ONE,i.ONE);break;case ec:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case tc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Us:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ql:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ec:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case tc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}T=null,U=null,L=null,Y=null,b.set(0,0,0),w=0,M=B,D=St}return}$e=$e||Ee,gt=gt||ve,st=st||Ye,(Ee!==y||$e!==I)&&(i.blendEquationSeparate(tt[Ee],tt[$e]),y=Ee,I=$e),(ve!==T||Ye!==U||gt!==L||st!==Y)&&(i.blendFuncSeparate(ct[ve],ct[Ye],ct[gt],ct[st]),T=ve,U=Ye,L=gt,Y=st),(Ct.equals(b)===!1||Gt!==w)&&(i.blendColor(Ct.r,Ct.g,Ct.b,Gt),b.copy(Ct),w=Gt),M=B,D=!1}function Ft(B,Ee){B.side===cn?Qe(i.CULL_FACE):it(i.CULL_FACE);let ve=B.side===Hn;Ee&&(ve=!ve),_t(ve),B.blending===Us&&B.transparent===!1?ke(Ni):ke(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),l.setFunc(B.depthFunc),l.setTest(B.depthTest),l.setMask(B.depthWrite),o.setMask(B.colorWrite);let Ye=B.stencilWrite;c.setTest(Ye),Ye&&(c.setMask(B.stencilWriteMask),c.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),c.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),K(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?it(i.SAMPLE_ALPHA_TO_COVERAGE):Qe(i.SAMPLE_ALPHA_TO_COVERAGE)}function _t(B){O!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),O=B)}function A(B){B!==Iu?(it(i.CULL_FACE),B!==j&&(B===jl?i.cullFace(i.BACK):B===Lu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Qe(i.CULL_FACE),j=B}function S(B){B!==C&&($&&i.lineWidth(B),C=B)}function K(B,Ee,ve){B?(it(i.POLYGON_OFFSET_FILL),(G!==Ee||N!==ve)&&(i.polygonOffset(Ee,ve),G=Ee,N=ve)):Qe(i.POLYGON_OFFSET_FILL)}function _e(B){B?it(i.SCISSOR_TEST):Qe(i.SCISSOR_TEST)}function me(B){B===void 0&&(B=i.TEXTURE0+se-1),ue!==B&&(i.activeTexture(B),ue=B)}function ge(B,Ee,ve){ve===void 0&&(ue===null?ve=i.TEXTURE0+se-1:ve=ue);let Ye=fe[ve];Ye===void 0&&(Ye={type:void 0,texture:void 0},fe[ve]=Ye),(Ye.type!==B||Ye.texture!==Ee)&&(ue!==ve&&(i.activeTexture(ve),ue=ve),i.bindTexture(B,Ee||Je[B]),Ye.type=B,Ye.texture=Ee)}function Ge(){let B=fe[ue];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Ce(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Le(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ne(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function We(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function le(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function It(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ut(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function rt(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Oe(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function De(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ae(B){be.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),be.copy(B))}function qe(B){Be.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),Be.copy(B))}function dt(B,Ee){let ve=f.get(Ee);ve===void 0&&(ve=new WeakMap,f.set(Ee,ve));let Ye=ve.get(B);Ye===void 0&&(Ye=i.getUniformBlockIndex(Ee,B.name),ve.set(B,Ye))}function Xe(B,Ee){let Ye=f.get(Ee).get(B);h.get(Ee)!==Ye&&(i.uniformBlockBinding(Ee,Ye,B.__bindingPointIndex),h.set(Ee,Ye))}function Se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ue=null,fe={},d={},x=new WeakMap,v=[],m=null,p=!1,M=null,y=null,T=null,U=null,I=null,L=null,Y=null,b=new bt(0,0,0),w=0,D=!1,O=null,j=null,C=null,G=null,N=null,be.set(0,0,i.canvas.width,i.canvas.height),Be.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:it,disable:Qe,bindFramebuffer:wt,drawBuffers:J,useProgram:yn,setBlending:ke,setMaterial:Ft,setFlipSided:_t,setCullFace:A,setLineWidth:S,setPolygonOffset:K,setScissorTest:_e,activeTexture:me,bindTexture:ge,unbindTexture:Ge,compressedTexImage2D:Ce,compressedTexImage3D:Le,texImage2D:Oe,texImage3D:De,updateUBOMapping:dt,uniformBlockBinding:Xe,texStorage2D:ut,texStorage3D:rt,texSubImage2D:Ne,texSubImage3D:We,compressedTexSubImage2D:le,compressedTexSubImage3D:It,scissor:Ae,viewport:qe,reset:Se}}function x0(i,e,t,n,s,r,a){let o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,f,u=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(A,S){return d?new OffscreenCanvas(A,S):ua("canvas")}function v(A,S,K,_e){let me=1;if((A.width>_e||A.height>_e)&&(me=_e/Math.max(A.width,A.height)),me<1||S===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){let ge=S?Zo:Math.floor,Ge=ge(me*A.width),Ce=ge(me*A.height);f===void 0&&(f=x(Ge,Ce));let Le=K?x(Ge,Ce):f;return Le.width=Ge,Le.height=Ce,Le.getContext("2d").drawImage(A,0,0,Ge,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Ge+"x"+Ce+")."),Le}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return Oc(A.width)&&Oc(A.height)}function p(A){return o?!1:A.wrapS!==si||A.wrapT!==si||A.minFilter!==Dn&&A.minFilter!==$n}function M(A,S){return A.generateMipmaps&&S&&A.minFilter!==Dn&&A.minFilter!==$n}function y(A){i.generateMipmap(A)}function T(A,S,K,_e,me=!1){if(o===!1)return S;if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ge=S;if(S===i.RED&&(K===i.FLOAT&&(ge=i.R32F),K===i.HALF_FLOAT&&(ge=i.R16F),K===i.UNSIGNED_BYTE&&(ge=i.R8)),S===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(ge=i.R8UI),K===i.UNSIGNED_SHORT&&(ge=i.R16UI),K===i.UNSIGNED_INT&&(ge=i.R32UI),K===i.BYTE&&(ge=i.R8I),K===i.SHORT&&(ge=i.R16I),K===i.INT&&(ge=i.R32I)),S===i.RG&&(K===i.FLOAT&&(ge=i.RG32F),K===i.HALF_FLOAT&&(ge=i.RG16F),K===i.UNSIGNED_BYTE&&(ge=i.RG8)),S===i.RGBA){let Ge=me?oa:Ot.getTransfer(_e);K===i.FLOAT&&(ge=i.RGBA32F),K===i.HALF_FLOAT&&(ge=i.RGBA16F),K===i.UNSIGNED_BYTE&&(ge=Ge===Vt?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT_4_4_4_4&&(ge=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(ge=i.RGB5_A1)}return(ge===i.R16F||ge===i.R32F||ge===i.RG16F||ge===i.RG32F||ge===i.RGBA16F||ge===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function U(A,S,K){return M(A,K)===!0||A.isFramebufferTexture&&A.minFilter!==Dn&&A.minFilter!==$n?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function I(A){return A===Dn||A===sc||A===ro?i.NEAREST:i.LINEAR}function L(A){let S=A.target;S.removeEventListener("dispose",L),b(S),S.isVideoTexture&&h.delete(S)}function Y(A){let S=A.target;S.removeEventListener("dispose",Y),D(S)}function b(A){let S=n.get(A);if(S.__webglInit===void 0)return;let K=A.source,_e=u.get(K);if(_e){let me=_e[S.__cacheKey];me.usedTimes--,me.usedTimes===0&&w(A),Object.keys(_e).length===0&&u.delete(K)}n.remove(A)}function w(A){let S=n.get(A);i.deleteTexture(S.__webglTexture);let K=A.source,_e=u.get(K);delete _e[S.__cacheKey],a.memory.textures--}function D(A){let S=A.texture,K=n.get(A),_e=n.get(S);if(_e.__webglTexture!==void 0&&(i.deleteTexture(_e.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(K.__webglFramebuffer[me]))for(let ge=0;ge<K.__webglFramebuffer[me].length;ge++)i.deleteFramebuffer(K.__webglFramebuffer[me][ge]);else i.deleteFramebuffer(K.__webglFramebuffer[me]);K.__webglDepthbuffer&&i.deleteRenderbuffer(K.__webglDepthbuffer[me])}else{if(Array.isArray(K.__webglFramebuffer))for(let me=0;me<K.__webglFramebuffer.length;me++)i.deleteFramebuffer(K.__webglFramebuffer[me]);else i.deleteFramebuffer(K.__webglFramebuffer);if(K.__webglDepthbuffer&&i.deleteRenderbuffer(K.__webglDepthbuffer),K.__webglMultisampledFramebuffer&&i.deleteFramebuffer(K.__webglMultisampledFramebuffer),K.__webglColorRenderbuffer)for(let me=0;me<K.__webglColorRenderbuffer.length;me++)K.__webglColorRenderbuffer[me]&&i.deleteRenderbuffer(K.__webglColorRenderbuffer[me]);K.__webglDepthRenderbuffer&&i.deleteRenderbuffer(K.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let me=0,ge=S.length;me<ge;me++){let Ge=n.get(S[me]);Ge.__webglTexture&&(i.deleteTexture(Ge.__webglTexture),a.memory.textures--),n.remove(S[me])}n.remove(S),n.remove(A)}let O=0;function j(){O=0}function C(){let A=O;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),O+=1,A}function G(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function N(A,S){let K=n.get(A);if(A.isVideoTexture&&Ft(A),A.isRenderTargetTexture===!1&&A.version>0&&K.__version!==A.version){let _e=A.image;if(_e===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(K,A,S);return}}t.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+S)}function se(A,S){let K=n.get(A);if(A.version>0&&K.__version!==A.version){be(K,A,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+S)}function $(A,S){let K=n.get(A);if(A.version>0&&K.__version!==A.version){be(K,A,S);return}t.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+S)}function Q(A,S){let K=n.get(A);if(A.version>0&&K.__version!==A.version){Be(K,A,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+S)}let ne={[cr]:i.REPEAT,[si]:i.CLAMP_TO_EDGE,[qo]:i.MIRRORED_REPEAT},ue={[Dn]:i.NEAREST,[sc]:i.NEAREST_MIPMAP_NEAREST,[ro]:i.NEAREST_MIPMAP_LINEAR,[$n]:i.LINEAR,[hd]:i.LINEAR_MIPMAP_NEAREST,[hr]:i.LINEAR_MIPMAP_LINEAR},fe={[Sd]:i.NEVER,[Rd]:i.ALWAYS,[bd]:i.LESS,[Xh]:i.LEQUAL,[Ed]:i.EQUAL,[Ad]:i.GEQUAL,[Td]:i.GREATER,[wd]:i.NOTEQUAL};function te(A,S,K){if(K?(i.texParameteri(A,i.TEXTURE_WRAP_S,ne[S.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,ne[S.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,ne[S.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ue[S.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ue[S.minFilter])):(i.texParameteri(A,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(A,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(S.wrapS!==si||S.wrapT!==si)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(A,i.TEXTURE_MAG_FILTER,I(S.magFilter)),i.texParameteri(A,i.TEXTURE_MIN_FILTER,I(S.minFilter)),S.minFilter!==Dn&&S.minFilter!==$n&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,fe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let _e=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Dn||S.minFilter!==ro&&S.minFilter!==hr||S.type===Ui&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===ur&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(i.texParameterf(A,_e.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function he(A,S){let K=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",L));let _e=S.source,me=u.get(_e);me===void 0&&(me={},u.set(_e,me));let ge=G(S);if(ge!==A.__cacheKey){me[ge]===void 0&&(me[ge]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,K=!0),me[ge].usedTimes++;let Ge=me[A.__cacheKey];Ge!==void 0&&(me[A.__cacheKey].usedTimes--,Ge.usedTimes===0&&w(S)),A.__cacheKey=ge,A.__webglTexture=me[ge].texture}return K}function be(A,S,K){let _e=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(_e=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(_e=i.TEXTURE_3D);let me=he(A,S),ge=S.source;t.bindTexture(_e,A.__webglTexture,i.TEXTURE0+K);let Ge=n.get(ge);if(ge.version!==Ge.__version||me===!0){t.activeTexture(i.TEXTURE0+K);let Ce=Ot.getPrimaries(Ot.workingColorSpace),Le=S.colorSpace===Zn?null:Ot.getPrimaries(S.colorSpace),Ne=S.colorSpace===Zn||Ce===Le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let We=p(S)&&m(S.image)===!1,le=v(S.image,We,!1,s.maxTextureSize);le=_t(S,le);let It=m(le)||o,ut=r.convert(S.format,S.colorSpace),rt=r.convert(S.type),Oe=T(S.internalFormat,ut,rt,S.colorSpace,S.isVideoTexture);te(_e,S,It);let De,Ae=S.mipmaps,qe=o&&S.isVideoTexture!==!0&&Oe!==Vh,dt=Ge.__version===void 0||me===!0,Xe=U(S,le,It);if(S.isDepthTexture)Oe=i.DEPTH_COMPONENT,o?S.type===Ui?Oe=i.DEPTH_COMPONENT32F:S.type===Di?Oe=i.DEPTH_COMPONENT24:S.type===es?Oe=i.DEPTH24_STENCIL8:Oe=i.DEPTH_COMPONENT16:S.type===Ui&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===ts&&Oe===i.DEPTH_COMPONENT&&S.type!==Ol&&S.type!==Di&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Di,rt=r.convert(S.type)),S.format===Hs&&Oe===i.DEPTH_COMPONENT&&(Oe=i.DEPTH_STENCIL,S.type!==es&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=es,rt=r.convert(S.type))),dt&&(qe?t.texStorage2D(i.TEXTURE_2D,1,Oe,le.width,le.height):t.texImage2D(i.TEXTURE_2D,0,Oe,le.width,le.height,0,ut,rt,null));else if(S.isDataTexture)if(Ae.length>0&&It){qe&&dt&&t.texStorage2D(i.TEXTURE_2D,Xe,Oe,Ae[0].width,Ae[0].height);for(let Se=0,B=Ae.length;Se<B;Se++)De=Ae[Se],qe?t.texSubImage2D(i.TEXTURE_2D,Se,0,0,De.width,De.height,ut,rt,De.data):t.texImage2D(i.TEXTURE_2D,Se,Oe,De.width,De.height,0,ut,rt,De.data);S.generateMipmaps=!1}else qe?(dt&&t.texStorage2D(i.TEXTURE_2D,Xe,Oe,le.width,le.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,le.width,le.height,ut,rt,le.data)):t.texImage2D(i.TEXTURE_2D,0,Oe,le.width,le.height,0,ut,rt,le.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){qe&&dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Xe,Oe,Ae[0].width,Ae[0].height,le.depth);for(let Se=0,B=Ae.length;Se<B;Se++)De=Ae[Se],S.format!==ri?ut!==null?qe?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Se,0,0,0,De.width,De.height,le.depth,ut,De.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Se,Oe,De.width,De.height,le.depth,0,De.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage3D(i.TEXTURE_2D_ARRAY,Se,0,0,0,De.width,De.height,le.depth,ut,rt,De.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Se,Oe,De.width,De.height,le.depth,0,ut,rt,De.data)}else{qe&&dt&&t.texStorage2D(i.TEXTURE_2D,Xe,Oe,Ae[0].width,Ae[0].height);for(let Se=0,B=Ae.length;Se<B;Se++)De=Ae[Se],S.format!==ri?ut!==null?qe?t.compressedTexSubImage2D(i.TEXTURE_2D,Se,0,0,De.width,De.height,ut,De.data):t.compressedTexImage2D(i.TEXTURE_2D,Se,Oe,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage2D(i.TEXTURE_2D,Se,0,0,De.width,De.height,ut,rt,De.data):t.texImage2D(i.TEXTURE_2D,Se,Oe,De.width,De.height,0,ut,rt,De.data)}else if(S.isDataArrayTexture)qe?(dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Xe,Oe,le.width,le.height,le.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,ut,rt,le.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Oe,le.width,le.height,le.depth,0,ut,rt,le.data);else if(S.isData3DTexture)qe?(dt&&t.texStorage3D(i.TEXTURE_3D,Xe,Oe,le.width,le.height,le.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,ut,rt,le.data)):t.texImage3D(i.TEXTURE_3D,0,Oe,le.width,le.height,le.depth,0,ut,rt,le.data);else if(S.isFramebufferTexture){if(dt)if(qe)t.texStorage2D(i.TEXTURE_2D,Xe,Oe,le.width,le.height);else{let Se=le.width,B=le.height;for(let Ee=0;Ee<Xe;Ee++)t.texImage2D(i.TEXTURE_2D,Ee,Oe,Se,B,0,ut,rt,null),Se>>=1,B>>=1}}else if(Ae.length>0&&It){qe&&dt&&t.texStorage2D(i.TEXTURE_2D,Xe,Oe,Ae[0].width,Ae[0].height);for(let Se=0,B=Ae.length;Se<B;Se++)De=Ae[Se],qe?t.texSubImage2D(i.TEXTURE_2D,Se,0,0,ut,rt,De):t.texImage2D(i.TEXTURE_2D,Se,Oe,ut,rt,De);S.generateMipmaps=!1}else qe?(dt&&t.texStorage2D(i.TEXTURE_2D,Xe,Oe,le.width,le.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ut,rt,le)):t.texImage2D(i.TEXTURE_2D,0,Oe,ut,rt,le);M(S,It)&&y(_e),Ge.__version=ge.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Be(A,S,K){if(S.image.length!==6)return;let _e=he(A,S),me=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+K);let ge=n.get(me);if(me.version!==ge.__version||_e===!0){t.activeTexture(i.TEXTURE0+K);let Ge=Ot.getPrimaries(Ot.workingColorSpace),Ce=S.colorSpace===Zn?null:Ot.getPrimaries(S.colorSpace),Le=S.colorSpace===Zn||Ge===Ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let Ne=S.isCompressedTexture||S.image[0].isCompressedTexture,We=S.image[0]&&S.image[0].isDataTexture,le=[];for(let Se=0;Se<6;Se++)!Ne&&!We?le[Se]=v(S.image[Se],!1,!0,s.maxCubemapSize):le[Se]=We?S.image[Se].image:S.image[Se],le[Se]=_t(S,le[Se]);let It=le[0],ut=m(It)||o,rt=r.convert(S.format,S.colorSpace),Oe=r.convert(S.type),De=T(S.internalFormat,rt,Oe,S.colorSpace),Ae=o&&S.isVideoTexture!==!0,qe=ge.__version===void 0||_e===!0,dt=U(S,It,ut);te(i.TEXTURE_CUBE_MAP,S,ut);let Xe;if(Ne){Ae&&qe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,dt,De,It.width,It.height);for(let Se=0;Se<6;Se++){Xe=le[Se].mipmaps;for(let B=0;B<Xe.length;B++){let Ee=Xe[B];S.format!==ri?rt!==null?Ae?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,B,0,0,Ee.width,Ee.height,rt,Ee.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,B,De,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ae?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,B,0,0,Ee.width,Ee.height,rt,Oe,Ee.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,B,De,Ee.width,Ee.height,0,rt,Oe,Ee.data)}}}else{Xe=S.mipmaps,Ae&&qe&&(Xe.length>0&&dt++,t.texStorage2D(i.TEXTURE_CUBE_MAP,dt,De,le[0].width,le[0].height));for(let Se=0;Se<6;Se++)if(We){Ae?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,le[Se].width,le[Se].height,rt,Oe,le[Se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,De,le[Se].width,le[Se].height,0,rt,Oe,le[Se].data);for(let B=0;B<Xe.length;B++){let ve=Xe[B].image[Se].image;Ae?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,B+1,0,0,ve.width,ve.height,rt,Oe,ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,B+1,De,ve.width,ve.height,0,rt,Oe,ve.data)}}else{Ae?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,rt,Oe,le[Se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,De,rt,Oe,le[Se]);for(let B=0;B<Xe.length;B++){let Ee=Xe[B];Ae?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,B+1,0,0,rt,Oe,Ee.image[Se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,B+1,De,rt,Oe,Ee.image[Se])}}}M(S,ut)&&y(i.TEXTURE_CUBE_MAP),ge.__version=me.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ze(A,S,K,_e,me,ge){let Ge=r.convert(K.format,K.colorSpace),Ce=r.convert(K.type),Le=T(K.internalFormat,Ge,Ce,K.colorSpace);if(!n.get(S).__hasExternalTextures){let We=Math.max(1,S.width>>ge),le=Math.max(1,S.height>>ge);me===i.TEXTURE_3D||me===i.TEXTURE_2D_ARRAY?t.texImage3D(me,ge,Le,We,le,S.depth,0,Ge,Ce,null):t.texImage2D(me,ge,Le,We,le,0,Ge,Ce,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),ke(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_e,me,n.get(K).__webglTexture,0,ct(S)):(me===i.TEXTURE_2D||me>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,_e,me,n.get(K).__webglTexture,ge),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Je(A,S,K){if(i.bindRenderbuffer(i.RENDERBUFFER,A),S.depthBuffer&&!S.stencilBuffer){let _e=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(K||ke(S)){let me=S.depthTexture;me&&me.isDepthTexture&&(me.type===Ui?_e=i.DEPTH_COMPONENT32F:me.type===Di&&(_e=i.DEPTH_COMPONENT24));let ge=ct(S);ke(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge,_e,S.width,S.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,_e,S.width,S.height)}else i.renderbufferStorage(i.RENDERBUFFER,_e,S.width,S.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,A)}else if(S.depthBuffer&&S.stencilBuffer){let _e=ct(S);K&&ke(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,i.DEPTH24_STENCIL8,S.width,S.height):ke(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e,i.DEPTH24_STENCIL8,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,A)}else{let _e=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let me=0;me<_e.length;me++){let ge=_e[me],Ge=r.convert(ge.format,ge.colorSpace),Ce=r.convert(ge.type),Le=T(ge.internalFormat,Ge,Ce,ge.colorSpace),Ne=ct(S);K&&ke(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,Le,S.width,S.height):ke(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ne,Le,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Le,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function it(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),N(S.depthTexture,0);let _e=n.get(S.depthTexture).__webglTexture,me=ct(S);if(S.depthTexture.format===ts)ke(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,_e,0,me):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,_e,0);else if(S.depthTexture.format===Hs)ke(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,_e,0,me):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function Qe(A){let S=n.get(A),K=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");it(S.__webglFramebuffer,A)}else if(K){S.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[_e]),S.__webglDepthbuffer[_e]=i.createRenderbuffer(),Je(S.__webglDepthbuffer[_e],A,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),Je(S.__webglDepthbuffer,A,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function wt(A,S,K){let _e=n.get(A);S!==void 0&&ze(_e.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&Qe(A)}function J(A){let S=A.texture,K=n.get(A),_e=n.get(S);A.addEventListener("dispose",Y),A.isWebGLMultipleRenderTargets!==!0&&(_e.__webglTexture===void 0&&(_e.__webglTexture=i.createTexture()),_e.__version=S.version,a.memory.textures++);let me=A.isWebGLCubeRenderTarget===!0,ge=A.isWebGLMultipleRenderTargets===!0,Ge=m(A)||o;if(me){K.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(o&&S.mipmaps&&S.mipmaps.length>0){K.__webglFramebuffer[Ce]=[];for(let Le=0;Le<S.mipmaps.length;Le++)K.__webglFramebuffer[Ce][Le]=i.createFramebuffer()}else K.__webglFramebuffer[Ce]=i.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){K.__webglFramebuffer=[];for(let Ce=0;Ce<S.mipmaps.length;Ce++)K.__webglFramebuffer[Ce]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(ge)if(s.drawBuffers){let Ce=A.texture;for(let Le=0,Ne=Ce.length;Le<Ne;Le++){let We=n.get(Ce[Le]);We.__webglTexture===void 0&&(We.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&ke(A)===!1){let Ce=ge?S:[S];K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Le=0;Le<Ce.length;Le++){let Ne=Ce[Le];K.__webglColorRenderbuffer[Le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[Le]);let We=r.convert(Ne.format,Ne.colorSpace),le=r.convert(Ne.type),It=T(Ne.internalFormat,We,le,Ne.colorSpace,A.isXRRenderTarget===!0),ut=ct(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,It,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,K.__webglColorRenderbuffer[Le])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),Je(K.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(me){t.bindTexture(i.TEXTURE_CUBE_MAP,_e.__webglTexture),te(i.TEXTURE_CUBE_MAP,S,Ge);for(let Ce=0;Ce<6;Ce++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let Le=0;Le<S.mipmaps.length;Le++)ze(K.__webglFramebuffer[Ce][Le],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Le);else ze(K.__webglFramebuffer[Ce],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);M(S,Ge)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){let Ce=A.texture;for(let Le=0,Ne=Ce.length;Le<Ne;Le++){let We=Ce[Le],le=n.get(We);t.bindTexture(i.TEXTURE_2D,le.__webglTexture),te(i.TEXTURE_2D,We,Ge),ze(K.__webglFramebuffer,A,We,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,0),M(We,Ge)&&y(i.TEXTURE_2D)}t.unbindTexture()}else{let Ce=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?Ce=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ce,_e.__webglTexture),te(Ce,S,Ge),o&&S.mipmaps&&S.mipmaps.length>0)for(let Le=0;Le<S.mipmaps.length;Le++)ze(K.__webglFramebuffer[Le],A,S,i.COLOR_ATTACHMENT0,Ce,Le);else ze(K.__webglFramebuffer,A,S,i.COLOR_ATTACHMENT0,Ce,0);M(S,Ge)&&y(Ce),t.unbindTexture()}A.depthBuffer&&Qe(A)}function yn(A){let S=m(A)||o,K=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let _e=0,me=K.length;_e<me;_e++){let ge=K[_e];if(M(ge,S)){let Ge=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ce=n.get(ge).__webglTexture;t.bindTexture(Ge,Ce),y(Ge),t.unbindTexture()}}}function tt(A){if(o&&A.samples>0&&ke(A)===!1){let S=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],K=A.width,_e=A.height,me=i.COLOR_BUFFER_BIT,ge=[],Ge=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ce=n.get(A),Le=A.isWebGLMultipleRenderTargets===!0;if(Le)for(let Ne=0;Ne<S.length;Ne++)t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Ne=0;Ne<S.length;Ne++){ge.push(i.COLOR_ATTACHMENT0+Ne),A.depthBuffer&&ge.push(Ge);let We=Ce.__ignoreDepthValues!==void 0?Ce.__ignoreDepthValues:!1;if(We===!1&&(A.depthBuffer&&(me|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&(me|=i.STENCIL_BUFFER_BIT)),Le&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ne]),We===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ge]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ge])),Le){let le=n.get(S[Ne]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,le,0)}i.blitFramebuffer(0,0,K,_e,0,0,K,_e,me,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ge)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Le)for(let Ne=0;Ne<S.length;Ne++){t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ne]);let We=n.get(S[Ne]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,We,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}}function ct(A){return Math.min(s.maxSamples,A.samples)}function ke(A){let S=n.get(A);return o&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ft(A){let S=a.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function _t(A,S){let K=A.colorSpace,_e=A.format,me=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Yo||K!==vi&&K!==Zn&&(Ot.getTransfer(K)===Vt?o===!1?e.has("EXT_sRGB")===!0&&_e===ri?(A.format=Yo,A.minFilter=$n,A.generateMipmaps=!1):S=da.sRGBToLinear(S):(_e!==ri||me!==Fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),S}this.allocateTextureUnit=C,this.resetTextureUnits=j,this.setTexture2D=N,this.setTexture2DArray=se,this.setTexture3D=$,this.setTextureCube=Q,this.rebindTextures=wt,this.setupRenderTarget=J,this.updateRenderTargetMipmap=yn,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=ze,this.useMultisampledRTT=ke}function y0(i,e,t){let n=t.isWebGL2;function s(r,a=Zn){let o,l=Ot.getTransfer(a);if(r===Fi)return i.UNSIGNED_BYTE;if(r===Fh)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Bh)return i.UNSIGNED_SHORT_5_5_5_1;if(r===ud)return i.BYTE;if(r===dd)return i.SHORT;if(r===Ol)return i.UNSIGNED_SHORT;if(r===Oh)return i.INT;if(r===Di)return i.UNSIGNED_INT;if(r===Ui)return i.FLOAT;if(r===ur)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===fd)return i.ALPHA;if(r===ri)return i.RGBA;if(r===pd)return i.LUMINANCE;if(r===md)return i.LUMINANCE_ALPHA;if(r===ts)return i.DEPTH_COMPONENT;if(r===Hs)return i.DEPTH_STENCIL;if(r===Yo)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===gd)return i.RED;if(r===Hh)return i.RED_INTEGER;if(r===_d)return i.RG;if(r===zh)return i.RG_INTEGER;if(r===kh)return i.RGBA_INTEGER;if(r===ao||r===oo||r===lo||r===co)if(l===Vt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===ao)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===oo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===lo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===co)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===ao)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===oo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===lo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===co)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===rc||r===ac||r===oc||r===lc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===rc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ac)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===oc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===lc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Vh)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===cc||r===hc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===cc)return l===Vt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===hc)return l===Vt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===uc||r===dc||r===fc||r===pc||r===mc||r===gc||r===_c||r===xc||r===yc||r===vc||r===Mc||r===Sc||r===bc||r===Ec)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===uc)return l===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===dc)return l===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===fc)return l===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===pc)return l===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===mc)return l===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===gc)return l===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===_c)return l===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===xc)return l===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===yc)return l===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===vc)return l===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Mc)return l===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Sc)return l===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===bc)return l===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ec)return l===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ho||r===Tc||r===wc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===ho)return l===Vt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Tc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===wc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===xd||r===Ac||r===Rc||r===Cc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===ho)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Ac)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Rc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Cc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===es?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var ll=class extends Un{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Kn=class extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}},v0={type:"move"},rr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,x=.005;c.inputState.pinching&&u>d+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(v0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Kn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},cl=class extends Hi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,x=null,v=t.getContextAttributes(),m=null,p=null,M=[],y=[],T=new Fe,U=null,I=new Un;I.layers.enable(1),I.viewport=new xn;let L=new Un;L.layers.enable(2),L.viewport=new xn;let Y=[I,L],b=new ll;b.layers.enable(1),b.layers.enable(2);let w=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let he=M[te];return he===void 0&&(he=new rr,M[te]=he),he.getTargetRaySpace()},this.getControllerGrip=function(te){let he=M[te];return he===void 0&&(he=new rr,M[te]=he),he.getGripSpace()},this.getHand=function(te){let he=M[te];return he===void 0&&(he=new rr,M[te]=he),he.getHandSpace()};function O(te){let he=y.indexOf(te.inputSource);if(he===-1)return;let be=M[he];be!==void 0&&(be.update(te.inputSource,te.frame,c||a),be.dispatchEvent({type:te.type,data:te.inputSource}))}function j(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",C);for(let te=0;te<M.length;te++){let he=y[te];he!==null&&(y[te]=null,M[te].disconnect(he))}w=null,D=null,e.setRenderTarget(m),d=null,u=null,f=null,s=null,p=null,fe.stop(),n.isPresenting=!1,e.setPixelRatio(U),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",j),s.addEventListener("inputsourceschange",C),v.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(T),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let he={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,he),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new Mi(d.framebufferWidth,d.framebufferHeight,{format:ri,type:Fi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let he=null,be=null,Be=null;v.depth&&(Be=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=v.stencil?Hs:ts,be=v.stencil?es:Di);let ze={colorFormat:t.RGBA8,depthFormat:Be,scaleFactor:r};f=new XRWebGLBinding(s,t),u=f.createProjectionLayer(ze),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),p=new Mi(u.textureWidth,u.textureHeight,{format:ri,type:Fi,depthTexture:new Sa(u.textureWidth,u.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});let Je=e.properties.get(p);Je.__ignoreDepthValues=u.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),fe.setContext(s),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function C(te){for(let he=0;he<te.removed.length;he++){let be=te.removed[he],Be=y.indexOf(be);Be>=0&&(y[Be]=null,M[Be].disconnect(be))}for(let he=0;he<te.added.length;he++){let be=te.added[he],Be=y.indexOf(be);if(Be===-1){for(let Je=0;Je<M.length;Je++)if(Je>=y.length){y.push(be),Be=Je;break}else if(y[Je]===null){y[Je]=be,Be=Je;break}if(Be===-1)break}let ze=M[Be];ze&&ze.connect(be)}}let G=new F,N=new F;function se(te,he,be){G.setFromMatrixPosition(he.matrixWorld),N.setFromMatrixPosition(be.matrixWorld);let Be=G.distanceTo(N),ze=he.projectionMatrix.elements,Je=be.projectionMatrix.elements,it=ze[14]/(ze[10]-1),Qe=ze[14]/(ze[10]+1),wt=(ze[9]+1)/ze[5],J=(ze[9]-1)/ze[5],yn=(ze[8]-1)/ze[0],tt=(Je[8]+1)/Je[0],ct=it*yn,ke=it*tt,Ft=Be/(-yn+tt),_t=Ft*-yn;he.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(_t),te.translateZ(Ft),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert();let A=it+Ft,S=Qe+Ft,K=ct-_t,_e=ke+(Be-_t),me=wt*Qe/S*A,ge=J*Qe/S*A;te.projectionMatrix.makePerspective(K,_e,me,ge,A,S),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}function $(te,he){he===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(he.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;b.near=L.near=I.near=te.near,b.far=L.far=I.far=te.far,(w!==b.near||D!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),w=b.near,D=b.far);let he=te.parent,be=b.cameras;$(b,he);for(let Be=0;Be<be.length;Be++)$(be[Be],he);be.length===2?se(b,I,L):b.projectionMatrix.copy(I.projectionMatrix),Q(te,b,he)};function Q(te,he,be){be===null?te.matrix.copy(he.matrixWorld):(te.matrix.copy(be.matrixWorld),te.matrix.invert(),te.matrix.multiply(he.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(he.projectionMatrix),te.projectionMatrixInverse.copy(he.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=$o*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(te){l=te,u!==null&&(u.fixedFoveation=te),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=te)};let ne=null;function ue(te,he){if(h=he.getViewerPose(c||a),x=he,h!==null){let be=h.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let Be=!1;be.length!==b.cameras.length&&(b.cameras.length=0,Be=!0);for(let ze=0;ze<be.length;ze++){let Je=be[ze],it=null;if(d!==null)it=d.getViewport(Je);else{let wt=f.getViewSubImage(u,Je);it=wt.viewport,ze===0&&(e.setRenderTargetTextures(p,wt.colorTexture,u.ignoreDepthValues?void 0:wt.depthStencilTexture),e.setRenderTarget(p))}let Qe=Y[ze];Qe===void 0&&(Qe=new Un,Qe.layers.enable(ze),Qe.viewport=new xn,Y[ze]=Qe),Qe.matrix.fromArray(Je.transform.matrix),Qe.matrix.decompose(Qe.position,Qe.quaternion,Qe.scale),Qe.projectionMatrix.fromArray(Je.projectionMatrix),Qe.projectionMatrixInverse.copy(Qe.projectionMatrix).invert(),Qe.viewport.set(it.x,it.y,it.width,it.height),ze===0&&(b.matrix.copy(Qe.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Be===!0&&b.cameras.push(Qe)}}for(let be=0;be<M.length;be++){let Be=y[be],ze=M[be];Be!==null&&ze!==void 0&&ze.update(Be,he,c||a)}ne&&ne(te,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),x=null}let fe=new Zh;fe.setAnimationLoop(ue),this.setAnimationLoop=function(te){ne=te},this.dispose=function(){}}};function M0(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,$h(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,y,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,T)):p.isMeshMatcapMaterial?(r(m,p),x(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Hn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Hn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=e.get(p).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let y=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*y,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Hn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function S0(i,e,t,n){let s={},r={},a=[],o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,y){let T=y.program;n.uniformBlockBinding(M,T)}function c(M,y){let T=s[M.id];T===void 0&&(x(M),T=h(M),s[M.id]=T,M.addEventListener("dispose",m));let U=y.program;n.updateUBOMapping(M,U);let I=e.render.frame;r[M.id]!==I&&(u(M),r[M.id]=I)}function h(M){let y=f();M.__bindingPointIndex=y;let T=i.createBuffer(),U=M.__size,I=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,U,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,T),T}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){let y=s[M.id],T=M.uniforms,U=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let I=0,L=T.length;I<L;I++){let Y=Array.isArray(T[I])?T[I]:[T[I]];for(let b=0,w=Y.length;b<w;b++){let D=Y[b];if(d(D,I,b,U)===!0){let O=D.__offset,j=Array.isArray(D.value)?D.value:[D.value],C=0;for(let G=0;G<j.length;G++){let N=j[G],se=v(N);typeof N=="number"||typeof N=="boolean"?(D.__data[0]=N,i.bufferSubData(i.UNIFORM_BUFFER,O+C,D.__data)):N.isMatrix3?(D.__data[0]=N.elements[0],D.__data[1]=N.elements[1],D.__data[2]=N.elements[2],D.__data[3]=0,D.__data[4]=N.elements[3],D.__data[5]=N.elements[4],D.__data[6]=N.elements[5],D.__data[7]=0,D.__data[8]=N.elements[6],D.__data[9]=N.elements[7],D.__data[10]=N.elements[8],D.__data[11]=0):(N.toArray(D.__data,C),C+=se.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,y,T,U){let I=M.value,L=y+"_"+T;if(U[L]===void 0)return typeof I=="number"||typeof I=="boolean"?U[L]=I:U[L]=I.clone(),!0;{let Y=U[L];if(typeof I=="number"||typeof I=="boolean"){if(Y!==I)return U[L]=I,!0}else if(Y.equals(I)===!1)return Y.copy(I),!0}return!1}function x(M){let y=M.uniforms,T=0,U=16;for(let L=0,Y=y.length;L<Y;L++){let b=Array.isArray(y[L])?y[L]:[y[L]];for(let w=0,D=b.length;w<D;w++){let O=b[w],j=Array.isArray(O.value)?O.value:[O.value];for(let C=0,G=j.length;C<G;C++){let N=j[C],se=v(N),$=T%U;$!==0&&U-$<se.boundary&&(T+=U-$),O.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=T,T+=se.storage}}}let I=T%U;return I>0&&(T+=U-I),M.__size=T,M.__cache={},this}function v(M){let y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function m(M){let y=M.target;y.removeEventListener("dispose",m);let T=a.indexOf(y.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var mr=class{constructor(e={}){let{canvas:t=Pd(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=a;let d=new Uint32Array(4),x=new Int32Array(4),v=null,m=null,p=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Sn,this._useLegacyLights=!1,this.toneMapping=Oi,this.toneMappingExposure=1;let y=this,T=!1,U=0,I=0,L=null,Y=-1,b=null,w=new xn,D=new xn,O=null,j=new bt(0),C=0,G=t.width,N=t.height,se=1,$=null,Q=null,ne=new xn(0,0,G,N),ue=new xn(0,0,G,N),fe=!1,te=new pr,he=!1,be=!1,Be=null,ze=new fn,Je=new Fe,it=new F,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function wt(){return L===null?se:1}let J=n;function yn(E,W){for(let Z=0;Z<E.length;Z++){let ee=E[Z],X=t.getContext(ee,W);if(X!==null)return X}return null}try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ul}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",B,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),J===null){let W=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&W.shift(),J=yn(W,E),J===null)throw yn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&J instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),J.getShaderPrecisionFormat===void 0&&(J.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let tt,ct,ke,Ft,_t,A,S,K,_e,me,ge,Ge,Ce,Le,Ne,We,le,It,ut,rt,Oe,De,Ae,qe;function dt(){tt=new km(J),ct=new Nm(J,tt,e),tt.init(ct),De=new y0(J,tt,ct),ke=new _0(J,tt,ct),Ft=new Wm(J),_t=new r0,A=new x0(J,tt,ke,_t,ct,De,Ft),S=new Fm(y),K=new zm(y),_e=new Jd(J,ct),Ae=new Dm(J,tt,_e,ct),me=new Vm(J,_e,Ft,Ae),ge=new $m(J,me,_e,Ft),ut=new Ym(J,ct,A),We=new Om(_t),Ge=new s0(y,S,K,tt,ct,Ae,We),Ce=new M0(y,_t),Le=new o0,Ne=new f0(tt,ct),It=new Lm(y,S,K,ke,ge,u,l),le=new g0(y,ge,ct),qe=new S0(J,Ft,ct,ke),rt=new Um(J,tt,Ft,ct),Oe=new Gm(J,tt,Ft,ct),Ft.programs=Ge.programs,y.capabilities=ct,y.extensions=tt,y.properties=_t,y.renderLists=Le,y.shadowMap=le,y.state=ke,y.info=Ft}dt();let Xe=new cl(y,J);this.xr=Xe,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){let E=tt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=tt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(E){E!==void 0&&(se=E,this.setSize(G,N,!1))},this.getSize=function(E){return E.set(G,N)},this.setSize=function(E,W,Z=!0){if(Xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=E,N=W,t.width=Math.floor(E*se),t.height=Math.floor(W*se),Z===!0&&(t.style.width=E+"px",t.style.height=W+"px"),this.setViewport(0,0,E,W)},this.getDrawingBufferSize=function(E){return E.set(G*se,N*se).floor()},this.setDrawingBufferSize=function(E,W,Z){G=E,N=W,se=Z,t.width=Math.floor(E*Z),t.height=Math.floor(W*Z),this.setViewport(0,0,E,W)},this.getCurrentViewport=function(E){return E.copy(w)},this.getViewport=function(E){return E.copy(ne)},this.setViewport=function(E,W,Z,ee){E.isVector4?ne.set(E.x,E.y,E.z,E.w):ne.set(E,W,Z,ee),ke.viewport(w.copy(ne).multiplyScalar(se).floor())},this.getScissor=function(E){return E.copy(ue)},this.setScissor=function(E,W,Z,ee){E.isVector4?ue.set(E.x,E.y,E.z,E.w):ue.set(E,W,Z,ee),ke.scissor(D.copy(ue).multiplyScalar(se).floor())},this.getScissorTest=function(){return fe},this.setScissorTest=function(E){ke.setScissorTest(fe=E)},this.setOpaqueSort=function(E){$=E},this.setTransparentSort=function(E){Q=E},this.getClearColor=function(E){return E.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor.apply(It,arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha.apply(It,arguments)},this.clear=function(E=!0,W=!0,Z=!0){let ee=0;if(E){let X=!1;if(L!==null){let Ie=L.texture.format;X=Ie===kh||Ie===zh||Ie===Hh}if(X){let Ie=L.texture.type,Ke=Ie===Fi||Ie===Di||Ie===Ol||Ie===es||Ie===Fh||Ie===Bh,nt=It.getClearColor(),ot=It.getClearAlpha(),xt=nt.r,et=nt.g,ft=nt.b;Ke?(d[0]=xt,d[1]=et,d[2]=ft,d[3]=ot,J.clearBufferuiv(J.COLOR,0,d)):(x[0]=xt,x[1]=et,x[2]=ft,x[3]=ot,J.clearBufferiv(J.COLOR,0,x))}else ee|=J.COLOR_BUFFER_BIT}W&&(ee|=J.DEPTH_BUFFER_BIT),Z&&(ee|=J.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",B,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),Le.dispose(),Ne.dispose(),_t.dispose(),S.dispose(),K.dispose(),ge.dispose(),Ae.dispose(),qe.dispose(),Ge.dispose(),Xe.dispose(),Xe.removeEventListener("sessionstart",Gt),Xe.removeEventListener("sessionend",St),Be&&(Be.dispose(),Be=null),Nt.stop()};function Se(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function B(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let E=Ft.autoReset,W=le.enabled,Z=le.autoUpdate,ee=le.needsUpdate,X=le.type;dt(),Ft.autoReset=E,le.enabled=W,le.autoUpdate=Z,le.needsUpdate=ee,le.type=X}function Ee(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ve(E){let W=E.target;W.removeEventListener("dispose",ve),Ye(W)}function Ye(E){$e(E),_t.remove(E)}function $e(E){let W=_t.get(E).programs;W!==void 0&&(W.forEach(function(Z){Ge.releaseProgram(Z)}),E.isShaderMaterial&&Ge.releaseShaderCache(E))}this.renderBufferDirect=function(E,W,Z,ee,X,Ie){W===null&&(W=Qe);let Ke=X.isMesh&&X.matrixWorld.determinant()<0,nt=qa(E,W,Z,ee,X);ke.setMaterial(ee,Ke);let ot=Z.index,xt=1;if(ee.wireframe===!0){if(ot=me.getWireframeAttribute(Z),ot===void 0)return;xt=2}let et=Z.drawRange,ft=Z.attributes.position,Yt=et.start*xt,In=(et.start+et.count)*xt;Ie!==null&&(Yt=Math.max(Yt,Ie.start*xt),In=Math.min(In,(Ie.start+Ie.count)*xt)),ot!==null?(Yt=Math.max(Yt,0),In=Math.min(In,ot.count)):ft!=null&&(Yt=Math.max(Yt,0),In=Math.min(In,ft.count));let sn=In-Yt;if(sn<0||sn===1/0)return;Ae.setup(X,ee,nt,Z,ot);let hn,Bt=rt;if(ot!==null&&(hn=_e.get(ot),Bt=Oe,Bt.setIndex(hn)),X.isMesh)ee.wireframe===!0?(ke.setLineWidth(ee.wireframeLinewidth*wt()),Bt.setMode(J.LINES)):Bt.setMode(J.TRIANGLES);else if(X.isLine){let pt=ee.linewidth;pt===void 0&&(pt=1),ke.setLineWidth(pt*wt()),X.isLineSegments?Bt.setMode(J.LINES):X.isLineLoop?Bt.setMode(J.LINE_LOOP):Bt.setMode(J.LINE_STRIP)}else X.isPoints?Bt.setMode(J.POINTS):X.isSprite&&Bt.setMode(J.TRIANGLES);if(X.isBatchedMesh)Bt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)Bt.renderInstances(Yt,sn,X.count);else if(Z.isInstancedBufferGeometry){let pt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ys=Math.min(Z.instanceCount,pt);Bt.renderInstances(Yt,sn,Ys)}else Bt.render(Yt,sn)};function gt(E,W,Z){E.transparent===!0&&E.side===cn&&E.forceSinglePass===!1?(E.side=Hn,E.needsUpdate=!0,oi(E,W,Z),E.side=Bi,E.needsUpdate=!0,oi(E,W,Z),E.side=cn):oi(E,W,Z)}this.compile=function(E,W,Z=null){Z===null&&(Z=E),m=Ne.get(Z),m.init(),M.push(m),Z.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),E!==Z&&E.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),m.setupLights(y._useLegacyLights);let ee=new Set;return E.traverse(function(X){let Ie=X.material;if(Ie)if(Array.isArray(Ie))for(let Ke=0;Ke<Ie.length;Ke++){let nt=Ie[Ke];gt(nt,Z,X),ee.add(nt)}else gt(Ie,Z,X),ee.add(Ie)}),M.pop(),m=null,ee},this.compileAsync=function(E,W,Z=null){let ee=this.compile(E,W,Z);return new Promise(X=>{function Ie(){if(ee.forEach(function(Ke){_t.get(Ke).currentProgram.isReady()&&ee.delete(Ke)}),ee.size===0){X(E);return}setTimeout(Ie,10)}tt.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let st=null;function Ct(E){st&&st(E)}function Gt(){Nt.stop()}function St(){Nt.start()}let Nt=new Zh;Nt.setAnimationLoop(Ct),typeof self<"u"&&Nt.setContext(self),this.setAnimationLoop=function(E){st=E,Xe.setAnimationLoop(E),E===null?Nt.stop():Nt.start()},Xe.addEventListener("sessionstart",Gt),Xe.addEventListener("sessionend",St),this.render=function(E,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera(W),W=Xe.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,W,L),m=Ne.get(E,M.length),m.init(),M.push(m),ze.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),te.setFromProjectionMatrix(ze),be=this.localClippingEnabled,he=We.init(this.clippingPlanes,be),v=Le.get(E,p.length),v.init(),p.push(v),jt(E,W,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort($,Q),this.info.render.frame++,he===!0&&We.beginShadows();let Z=m.state.shadowsArray;if(le.render(Z,E,W),he===!0&&We.endShadows(),this.info.autoReset===!0&&this.info.reset(),It.render(v,E),m.setupLights(y._useLegacyLights),W.isArrayCamera){let ee=W.cameras;for(let X=0,Ie=ee.length;X<Ie;X++){let Ke=ee[X];qs(v,E,Ke,Ke.viewport)}}else qs(v,E,W);L!==null&&(A.updateMultisampleRenderTarget(L),A.updateRenderTargetMipmap(L)),E.isScene===!0&&E.onAfterRender(y,E,W),Ae.resetDefaultState(),Y=-1,b=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function jt(E,W,Z,ee){if(E.visible===!1)return;if(E.layers.test(W.layers)){if(E.isGroup)Z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(W);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||te.intersectsSprite(E)){ee&&it.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ze);let Ke=ge.update(E),nt=E.material;nt.visible&&v.push(E,Ke,nt,Z,it.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||te.intersectsObject(E))){let Ke=ge.update(E),nt=E.material;if(ee&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),it.copy(E.boundingSphere.center)):(Ke.boundingSphere===null&&Ke.computeBoundingSphere(),it.copy(Ke.boundingSphere.center)),it.applyMatrix4(E.matrixWorld).applyMatrix4(ze)),Array.isArray(nt)){let ot=Ke.groups;for(let xt=0,et=ot.length;xt<et;xt++){let ft=ot[xt],Yt=nt[ft.materialIndex];Yt&&Yt.visible&&v.push(E,Ke,Yt,Z,it.z,ft)}}else nt.visible&&v.push(E,Ke,nt,Z,it.z,null)}}let Ie=E.children;for(let Ke=0,nt=Ie.length;Ke<nt;Ke++)jt(Ie[Ke],W,Z,ee)}function qs(E,W,Z,ee){let X=E.opaque,Ie=E.transmissive,Ke=E.transparent;m.setupLightsView(Z),he===!0&&We.setGlobalState(y.clippingPlanes,Z),Ie.length>0&&cs(X,Ie,W,Z),ee&&ke.viewport(w.copy(ee)),X.length>0&&qi(X,W,Z),Ie.length>0&&qi(Ie,W,Z),Ke.length>0&&qi(Ke,W,Z),ke.buffers.depth.setTest(!0),ke.buffers.depth.setMask(!0),ke.buffers.color.setMask(!0),ke.setPolygonOffset(!1)}function cs(E,W,Z,ee){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;let Ie=ct.isWebGL2;Be===null&&(Be=new Mi(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")?ur:Fi,minFilter:hr,samples:Ie?4:0})),y.getDrawingBufferSize(Je),Ie?Be.setSize(Je.x,Je.y):Be.setSize(Zo(Je.x),Zo(Je.y));let Ke=y.getRenderTarget();y.setRenderTarget(Be),y.getClearColor(j),C=y.getClearAlpha(),C<1&&y.setClearColor(16777215,.5),y.clear();let nt=y.toneMapping;y.toneMapping=Oi,qi(E,Z,ee),A.updateMultisampleRenderTarget(Be),A.updateRenderTargetMipmap(Be);let ot=!1;for(let xt=0,et=W.length;xt<et;xt++){let ft=W[xt],Yt=ft.object,In=ft.geometry,sn=ft.material,hn=ft.group;if(sn.side===cn&&Yt.layers.test(ee.layers)){let Bt=sn.side;sn.side=Hn,sn.needsUpdate=!0,Wt(Yt,Z,ee,In,sn,hn),sn.side=Bt,sn.needsUpdate=!0,ot=!0}}ot===!0&&(A.updateMultisampleRenderTarget(Be),A.updateRenderTargetMipmap(Be)),y.setRenderTarget(Ke),y.setClearColor(j,C),y.toneMapping=nt}function qi(E,W,Z){let ee=W.isScene===!0?W.overrideMaterial:null;for(let X=0,Ie=E.length;X<Ie;X++){let Ke=E[X],nt=Ke.object,ot=Ke.geometry,xt=ee===null?Ke.material:ee,et=Ke.group;nt.layers.test(Z.layers)&&Wt(nt,W,Z,ot,xt,et)}}function Wt(E,W,Z,ee,X,Ie){E.onBeforeRender(y,W,Z,ee,X,Ie),E.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),X.onBeforeRender(y,W,Z,ee,E,Ie),X.transparent===!0&&X.side===cn&&X.forceSinglePass===!1?(X.side=Hn,X.needsUpdate=!0,y.renderBufferDirect(Z,W,ee,X,E,Ie),X.side=Bi,X.needsUpdate=!0,y.renderBufferDirect(Z,W,ee,X,E,Ie),X.side=cn):y.renderBufferDirect(Z,W,ee,X,E,Ie),E.onAfterRender(y,W,Z,ee,X,Ie)}function oi(E,W,Z){W.isScene!==!0&&(W=Qe);let ee=_t.get(E),X=m.state.lights,Ie=m.state.shadowsArray,Ke=X.state.version,nt=Ge.getParameters(E,X.state,Ie,W,Z),ot=Ge.getProgramCacheKey(nt),xt=ee.programs;ee.environment=E.isMeshStandardMaterial?W.environment:null,ee.fog=W.fog,ee.envMap=(E.isMeshStandardMaterial?K:S).get(E.envMap||ee.environment),xt===void 0&&(E.addEventListener("dispose",ve),xt=new Map,ee.programs=xt);let et=xt.get(ot);if(et!==void 0){if(ee.currentProgram===et&&ee.lightsStateVersion===Ke)return Tr(E,nt),et}else nt.uniforms=Ge.getUniforms(E),E.onBuild(Z,nt,y),E.onBeforeCompile(nt,y),et=Ge.acquireProgram(nt,ot),xt.set(ot,et),ee.uniforms=nt.uniforms;let ft=ee.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ft.clippingPlanes=We.uniform),Tr(E,nt),ee.needsLights=$a(E),ee.lightsStateVersion=Ke,ee.needsLights&&(ft.ambientLightColor.value=X.state.ambient,ft.lightProbe.value=X.state.probe,ft.directionalLights.value=X.state.directional,ft.directionalLightShadows.value=X.state.directionalShadow,ft.spotLights.value=X.state.spot,ft.spotLightShadows.value=X.state.spotShadow,ft.rectAreaLights.value=X.state.rectArea,ft.ltc_1.value=X.state.rectAreaLTC1,ft.ltc_2.value=X.state.rectAreaLTC2,ft.pointLights.value=X.state.point,ft.pointLightShadows.value=X.state.pointShadow,ft.hemisphereLights.value=X.state.hemi,ft.directionalShadowMap.value=X.state.directionalShadowMap,ft.directionalShadowMatrix.value=X.state.directionalShadowMatrix,ft.spotShadowMap.value=X.state.spotShadowMap,ft.spotLightMatrix.value=X.state.spotLightMatrix,ft.spotLightMap.value=X.state.spotLightMap,ft.pointShadowMap.value=X.state.pointShadowMap,ft.pointShadowMatrix.value=X.state.pointShadowMatrix),ee.currentProgram=et,ee.uniformsList=null,et}function hs(E){if(E.uniformsList===null){let W=E.currentProgram.getUniforms();E.uniformsList=Os.seqWithValue(W.seq,E.uniforms)}return E.uniformsList}function Tr(E,W){let Z=_t.get(E);Z.outputColorSpace=W.outputColorSpace,Z.batching=W.batching,Z.instancing=W.instancing,Z.instancingColor=W.instancingColor,Z.skinning=W.skinning,Z.morphTargets=W.morphTargets,Z.morphNormals=W.morphNormals,Z.morphColors=W.morphColors,Z.morphTargetsCount=W.morphTargetsCount,Z.numClippingPlanes=W.numClippingPlanes,Z.numIntersection=W.numClipIntersection,Z.vertexAlphas=W.vertexAlphas,Z.vertexTangents=W.vertexTangents,Z.toneMapping=W.toneMapping}function qa(E,W,Z,ee,X){W.isScene!==!0&&(W=Qe),A.resetTextureUnits();let Ie=W.fog,Ke=ee.isMeshStandardMaterial?W.environment:null,nt=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:vi,ot=(ee.isMeshStandardMaterial?K:S).get(ee.envMap||Ke),xt=ee.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,et=!!Z.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),ft=!!Z.morphAttributes.position,Yt=!!Z.morphAttributes.normal,In=!!Z.morphAttributes.color,sn=Oi;ee.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(sn=y.toneMapping);let hn=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Bt=hn!==void 0?hn.length:0,pt=_t.get(ee),Ys=m.state.lights;if(he===!0&&(be===!0||E!==b)){let bn=E===b&&ee.id===Y;We.setState(ee,E,bn)}let Ht=!1;ee.version===pt.__version?(pt.needsLights&&pt.lightsStateVersion!==Ys.state.version||pt.outputColorSpace!==nt||X.isBatchedMesh&&pt.batching===!1||!X.isBatchedMesh&&pt.batching===!0||X.isInstancedMesh&&pt.instancing===!1||!X.isInstancedMesh&&pt.instancing===!0||X.isSkinnedMesh&&pt.skinning===!1||!X.isSkinnedMesh&&pt.skinning===!0||X.isInstancedMesh&&pt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&pt.instancingColor===!1&&X.instanceColor!==null||pt.envMap!==ot||ee.fog===!0&&pt.fog!==Ie||pt.numClippingPlanes!==void 0&&(pt.numClippingPlanes!==We.numPlanes||pt.numIntersection!==We.numIntersection)||pt.vertexAlphas!==xt||pt.vertexTangents!==et||pt.morphTargets!==ft||pt.morphNormals!==Yt||pt.morphColors!==In||pt.toneMapping!==sn||ct.isWebGL2===!0&&pt.morphTargetsCount!==Bt)&&(Ht=!0):(Ht=!0,pt.__version=ee.version);let li=pt.currentProgram;Ht===!0&&(li=oi(ee,W,X));let $s=!1,Lt=!1,Xt=!1,rn=li.getUniforms(),ci=pt.uniforms;if(ke.useProgram(li.program)&&($s=!0,Lt=!0,Xt=!0),ee.id!==Y&&(Y=ee.id,Lt=!0),$s||b!==E){rn.setValue(J,"projectionMatrix",E.projectionMatrix),rn.setValue(J,"viewMatrix",E.matrixWorldInverse);let bn=rn.map.cameraPosition;bn!==void 0&&bn.setValue(J,it.setFromMatrixPosition(E.matrixWorld)),ct.logarithmicDepthBuffer&&rn.setValue(J,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&rn.setValue(J,"isOrthographic",E.isOrthographicCamera===!0),b!==E&&(b=E,Lt=!0,Xt=!0)}if(X.isSkinnedMesh){rn.setOptional(J,X,"bindMatrix"),rn.setOptional(J,X,"bindMatrixInverse");let bn=X.skeleton;bn&&(ct.floatVertexTextures?(bn.boneTexture===null&&bn.computeBoneTexture(),rn.setValue(J,"boneTexture",bn.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}X.isBatchedMesh&&(rn.setOptional(J,X,"batchingTexture"),rn.setValue(J,"batchingTexture",X._matricesTexture,A));let us=Z.morphAttributes;if((us.position!==void 0||us.normal!==void 0||us.color!==void 0&&ct.isWebGL2===!0)&&ut.update(X,Z,li),(Lt||pt.receiveShadow!==X.receiveShadow)&&(pt.receiveShadow=X.receiveShadow,rn.setValue(J,"receiveShadow",X.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(ci.envMap.value=ot,ci.flipEnvMap.value=ot.isCubeTexture&&ot.isRenderTargetTexture===!1?-1:1),Lt&&(rn.setValue(J,"toneMappingExposure",y.toneMappingExposure),pt.needsLights&&Ya(ci,Xt),Ie&&ee.fog===!0&&Ce.refreshFogUniforms(ci,Ie),Ce.refreshMaterialUniforms(ci,ee,se,N,Be),Os.upload(J,hs(pt),ci,A)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Os.upload(J,hs(pt),ci,A),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&rn.setValue(J,"center",X.center),rn.setValue(J,"modelViewMatrix",X.modelViewMatrix),rn.setValue(J,"normalMatrix",X.normalMatrix),rn.setValue(J,"modelMatrix",X.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){let bn=ee.uniformsGroups;for(let di=0,wr=bn.length;di<wr;di++)if(ct.isWebGL2){let Qn=bn[di];qe.update(Qn,li),qe.bind(Qn,li)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return li}function Ya(E,W){E.ambientLightColor.needsUpdate=W,E.lightProbe.needsUpdate=W,E.directionalLights.needsUpdate=W,E.directionalLightShadows.needsUpdate=W,E.pointLights.needsUpdate=W,E.pointLightShadows.needsUpdate=W,E.spotLights.needsUpdate=W,E.spotLightShadows.needsUpdate=W,E.rectAreaLights.needsUpdate=W,E.hemisphereLights.needsUpdate=W}function $a(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(E,W,Z){_t.get(E.texture).__webglTexture=W,_t.get(E.depthTexture).__webglTexture=Z;let ee=_t.get(E);ee.__hasExternalTextures=!0,ee.__hasExternalTextures&&(ee.__autoAllocateDepthBuffer=Z===void 0,ee.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,W){let Z=_t.get(E);Z.__webglFramebuffer=W,Z.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(E,W=0,Z=0){L=E,U=W,I=Z;let ee=!0,X=null,Ie=!1,Ke=!1;if(E){let ot=_t.get(E);ot.__useDefaultFramebuffer!==void 0?(ke.bindFramebuffer(J.FRAMEBUFFER,null),ee=!1):ot.__webglFramebuffer===void 0?A.setupRenderTarget(E):ot.__hasExternalTextures&&A.rebindTextures(E,_t.get(E.texture).__webglTexture,_t.get(E.depthTexture).__webglTexture);let xt=E.texture;(xt.isData3DTexture||xt.isDataArrayTexture||xt.isCompressedArrayTexture)&&(Ke=!0);let et=_t.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(et[W])?X=et[W][Z]:X=et[W],Ie=!0):ct.isWebGL2&&E.samples>0&&A.useMultisampledRTT(E)===!1?X=_t.get(E).__webglMultisampledFramebuffer:Array.isArray(et)?X=et[Z]:X=et,w.copy(E.viewport),D.copy(E.scissor),O=E.scissorTest}else w.copy(ne).multiplyScalar(se).floor(),D.copy(ue).multiplyScalar(se).floor(),O=fe;if(ke.bindFramebuffer(J.FRAMEBUFFER,X)&&ct.drawBuffers&&ee&&ke.drawBuffers(E,X),ke.viewport(w),ke.scissor(D),ke.setScissorTest(O),Ie){let ot=_t.get(E.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+W,ot.__webglTexture,Z)}else if(Ke){let ot=_t.get(E.texture),xt=W||0;J.framebufferTextureLayer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,ot.__webglTexture,Z||0,xt)}Y=-1},this.readRenderTargetPixels=function(E,W,Z,ee,X,Ie,Ke){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let nt=_t.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ke!==void 0&&(nt=nt[Ke]),nt){ke.bindFramebuffer(J.FRAMEBUFFER,nt);try{let ot=E.texture,xt=ot.format,et=ot.type;if(xt!==ri&&De.convert(xt)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let ft=et===ur&&(tt.has("EXT_color_buffer_half_float")||ct.isWebGL2&&tt.has("EXT_color_buffer_float"));if(et!==Fi&&De.convert(et)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&!(et===Ui&&(ct.isWebGL2||tt.has("OES_texture_float")||tt.has("WEBGL_color_buffer_float")))&&!ft){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=E.width-ee&&Z>=0&&Z<=E.height-X&&J.readPixels(W,Z,ee,X,De.convert(xt),De.convert(et),Ie)}finally{let ot=L!==null?_t.get(L).__webglFramebuffer:null;ke.bindFramebuffer(J.FRAMEBUFFER,ot)}}},this.copyFramebufferToTexture=function(E,W,Z=0){let ee=Math.pow(2,-Z),X=Math.floor(W.image.width*ee),Ie=Math.floor(W.image.height*ee);A.setTexture2D(W,0),J.copyTexSubImage2D(J.TEXTURE_2D,Z,0,0,E.x,E.y,X,Ie),ke.unbindTexture()},this.copyTextureToTexture=function(E,W,Z,ee=0){let X=W.image.width,Ie=W.image.height,Ke=De.convert(Z.format),nt=De.convert(Z.type);A.setTexture2D(Z,0),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,Z.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,Z.unpackAlignment),W.isDataTexture?J.texSubImage2D(J.TEXTURE_2D,ee,E.x,E.y,X,Ie,Ke,nt,W.image.data):W.isCompressedTexture?J.compressedTexSubImage2D(J.TEXTURE_2D,ee,E.x,E.y,W.mipmaps[0].width,W.mipmaps[0].height,Ke,W.mipmaps[0].data):J.texSubImage2D(J.TEXTURE_2D,ee,E.x,E.y,Ke,nt,W.image),ee===0&&Z.generateMipmaps&&J.generateMipmap(J.TEXTURE_2D),ke.unbindTexture()},this.copyTextureToTexture3D=function(E,W,Z,ee,X=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Ie=E.max.x-E.min.x+1,Ke=E.max.y-E.min.y+1,nt=E.max.z-E.min.z+1,ot=De.convert(ee.format),xt=De.convert(ee.type),et;if(ee.isData3DTexture)A.setTexture3D(ee,0),et=J.TEXTURE_3D;else if(ee.isDataArrayTexture||ee.isCompressedArrayTexture)A.setTexture2DArray(ee,0),et=J.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,ee.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,ee.unpackAlignment);let ft=J.getParameter(J.UNPACK_ROW_LENGTH),Yt=J.getParameter(J.UNPACK_IMAGE_HEIGHT),In=J.getParameter(J.UNPACK_SKIP_PIXELS),sn=J.getParameter(J.UNPACK_SKIP_ROWS),hn=J.getParameter(J.UNPACK_SKIP_IMAGES),Bt=Z.isCompressedTexture?Z.mipmaps[X]:Z.image;J.pixelStorei(J.UNPACK_ROW_LENGTH,Bt.width),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,Bt.height),J.pixelStorei(J.UNPACK_SKIP_PIXELS,E.min.x),J.pixelStorei(J.UNPACK_SKIP_ROWS,E.min.y),J.pixelStorei(J.UNPACK_SKIP_IMAGES,E.min.z),Z.isDataTexture||Z.isData3DTexture?J.texSubImage3D(et,X,W.x,W.y,W.z,Ie,Ke,nt,ot,xt,Bt.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),J.compressedTexSubImage3D(et,X,W.x,W.y,W.z,Ie,Ke,nt,ot,Bt.data)):J.texSubImage3D(et,X,W.x,W.y,W.z,Ie,Ke,nt,ot,xt,Bt),J.pixelStorei(J.UNPACK_ROW_LENGTH,ft),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,Yt),J.pixelStorei(J.UNPACK_SKIP_PIXELS,In),J.pixelStorei(J.UNPACK_SKIP_ROWS,sn),J.pixelStorei(J.UNPACK_SKIP_IMAGES,hn),X===0&&ee.generateMipmaps&&J.generateMipmap(et),ke.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),ke.unbindTexture()},this.resetState=function(){U=0,I=0,L=null,ke.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Fl?"display-p3":"srgb",t.unpackColorSpace=Ot.workingColorSpace===Ba?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Sn?ns:Gh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ns?Sn:vi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},hl=class extends mr{};hl.prototype.isWebGL1Renderer=!0;var ba=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new bt(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ea=class extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var gr=class extends ki{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},vh=new F,Mh=new F,Sh=new fn,Fo=new dr,Qr=new zs,ul=class extends Nn{constructor(e=new kn,t=new gr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)vh.fromBufferAttribute(t,s-1),Mh.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=vh.distanceTo(Mh);e.setAttribute("lineDistance",new Jt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere),Qr.applyMatrix4(s),Qr.radius+=r,e.ray.intersectsSphere(Qr)===!1)return;Sh.copy(s).invert(),Fo.copy(e.ray).applyMatrix4(Sh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new F,h=new F,f=new F,u=new F,d=this.isLineSegments?2:1,x=n.index,m=n.attributes.position;if(x!==null){let p=Math.max(0,a.start),M=Math.min(x.count,a.start+a.count);for(let y=p,T=M-1;y<T;y+=d){let U=x.getX(y),I=x.getX(y+1);if(c.fromBufferAttribute(m,U),h.fromBufferAttribute(m,I),Fo.distanceSqToSegment(c,h,u,f)>l)continue;u.applyMatrix4(this.matrixWorld);let Y=e.ray.origin.distanceTo(u);Y<e.near||Y>e.far||t.push({distance:Y,point:f.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,a.start),M=Math.min(m.count,a.start+a.count);for(let y=p,T=M-1;y<T;y+=d){if(c.fromBufferAttribute(m,y),h.fromBufferAttribute(m,y+1),Fo.distanceSqToSegment(c,h,u,f)>l)continue;u.applyMatrix4(this.matrixWorld);let I=e.ray.origin.distanceTo(u);I<e.near||I>e.far||t.push({distance:I,point:f.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},bh=new F,Eh=new F,Ta=class extends ul{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)bh.fromBufferAttribute(t,s),Eh.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+bh.distanceTo(Eh);e.setAttribute("lineDistance",new Jt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var wa=class extends Jn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},jn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,d=(a-h)/u;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Fe:new F);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new F,s=[],r=[],a=[],o=new F,l=new fn;for(let d=0;d<=e;d++){let x=d/e;s[d]=this.getTangentAt(x,new F)}r[0]=new F,a[0]=new F;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(Cn(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,x))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Cn(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let x=1;x<=e;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],d*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},_r=class extends jn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let n=t||new Fe,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},dl=class extends _r{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Hl(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,d*=h,s(a,o,u,d)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var ea=new F,Bo=new Hl,Ho=new Hl,zo=new Hl,fl=class extends jn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new F){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(ea.subVectors(s[0],s[1]).add(s[0]),c=ea);let f=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(ea.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ea),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(f),d),v=Math.pow(f.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(h),d);v<1e-4&&(v=1),x<1e-4&&(x=v),m<1e-4&&(m=v),Bo.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,x,v,m),Ho.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,x,v,m),zo.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,x,v,m)}else this.curveType==="catmullrom"&&(Bo.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),Ho.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),zo.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(Bo.calc(l),Ho.calc(l),zo.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new F().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Th(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function b0(i,e){let t=1-i;return t*t*e}function E0(i,e){return 2*(1-i)*i*e}function T0(i,e){return i*i*e}function ar(i,e,t,n){return b0(i,e)+E0(i,t)+T0(i,n)}function w0(i,e){let t=1-i;return t*t*t*e}function A0(i,e){let t=1-i;return 3*t*t*i*e}function R0(i,e){return 3*(1-i)*i*i*e}function C0(i,e){return i*i*i*e}function or(i,e,t,n,s){return w0(i,e)+A0(i,t)+R0(i,n)+C0(i,s)}var Aa=class extends jn{constructor(e=new Fe,t=new Fe,n=new Fe,s=new Fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Fe){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(or(e,s.x,r.x,a.x,o.x),or(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},pl=class extends jn{constructor(e=new F,t=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(or(e,s.x,r.x,a.x,o.x),or(e,s.y,r.y,a.y,o.y),or(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ra=class extends jn{constructor(e=new Fe,t=new Fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Fe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ml=class extends jn{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ca=class extends jn{constructor(e=new Fe,t=new Fe,n=new Fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Fe){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ar(e,s.x,r.x,a.x),ar(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},gl=class extends jn{constructor(e=new F,t=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ar(e,s.x,r.x,a.x),ar(e,s.y,r.y,a.y),ar(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Pa=class extends jn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Fe){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(Th(o,l.x,c.x,h.x,f.x),Th(o,l.y,c.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Fe().fromArray(s))}return this}},wh=Object.freeze({__proto__:null,ArcCurve:dl,CatmullRomCurve3:fl,CubicBezierCurve:Aa,CubicBezierCurve3:pl,EllipseCurve:_r,LineCurve:Ra,LineCurve3:ml,QuadraticBezierCurve:Ca,QuadraticBezierCurve3:gl,SplineCurve:Pa}),_l=class extends jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wh[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new wh[s.type]().fromJSON(s))}return this}},Vs=class extends _l{constructor(e){super(),this.type="Path",this.currentPoint=new Fe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ra(this.currentPoint.clone(),new Fe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Ca(this.currentPoint.clone(),new Fe(e,t),new Fe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Aa(this.currentPoint.clone(),new Fe(e,t),new Fe(n,s),new Fe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Pa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new _r(e,t,n,s,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var Vi=class i extends kn{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],x=0,v=[],m=n/2,p=0;M(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Jt(f,3)),this.setAttribute("normal",new Jt(u,3)),this.setAttribute("uv",new Jt(d,2));function M(){let T=new F,U=new F,I=0,L=(t-e)/n;for(let Y=0;Y<=r;Y++){let b=[],w=Y/r,D=w*(t-e)+e;for(let O=0;O<=s;O++){let j=O/s,C=j*l+o,G=Math.sin(C),N=Math.cos(C);U.x=D*G,U.y=-w*n+m,U.z=D*N,f.push(U.x,U.y,U.z),T.set(G,L,N).normalize(),u.push(T.x,T.y,T.z),d.push(j,1-w),b.push(x++)}v.push(b)}for(let Y=0;Y<s;Y++)for(let b=0;b<r;b++){let w=v[b][Y],D=v[b+1][Y],O=v[b+1][Y+1],j=v[b][Y+1];h.push(w,D,j),h.push(D,O,j),I+=6}c.addGroup(p,I,0),p+=I}function y(T){let U=x,I=new Fe,L=new F,Y=0,b=T===!0?e:t,w=T===!0?1:-1;for(let O=1;O<=s;O++)f.push(0,m*w,0),u.push(0,w,0),d.push(.5,.5),x++;let D=x;for(let O=0;O<=s;O++){let C=O/s*l+o,G=Math.cos(C),N=Math.sin(C);L.x=b*N,L.y=m*w,L.z=b*G,f.push(L.x,L.y,L.z),u.push(0,w,0),I.x=G*.5+.5,I.y=N*.5*w+.5,d.push(I.x,I.y),x++}for(let O=0;O<s;O++){let j=U+O,C=D+O;T===!0?h.push(C,C+1,j):h.push(C+1,C,j),Y+=3}c.addGroup(p,Y,T===!0?1:2),p+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Gi=class i extends Vi{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},xl=class i extends kn{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Jt(r,3)),this.setAttribute("normal",new Jt(r.slice(),3)),this.setAttribute("uv",new Jt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let y=new F,T=new F,U=new F;for(let I=0;I<t.length;I+=3)d(t[I+0],y),d(t[I+1],T),d(t[I+2],U),l(y,T,U,M)}function l(M,y,T,U){let I=U+1,L=[];for(let Y=0;Y<=I;Y++){L[Y]=[];let b=M.clone().lerp(T,Y/I),w=y.clone().lerp(T,Y/I),D=I-Y;for(let O=0;O<=D;O++)O===0&&Y===I?L[Y][O]=b:L[Y][O]=b.clone().lerp(w,O/D)}for(let Y=0;Y<I;Y++)for(let b=0;b<2*(I-Y)-1;b++){let w=Math.floor(b/2);b%2===0?(u(L[Y][w+1]),u(L[Y+1][w]),u(L[Y][w])):(u(L[Y][w+1]),u(L[Y+1][w+1]),u(L[Y+1][w]))}}function c(M){let y=new F;for(let T=0;T<r.length;T+=3)y.x=r[T+0],y.y=r[T+1],y.z=r[T+2],y.normalize().multiplyScalar(M),r[T+0]=y.x,r[T+1]=y.y,r[T+2]=y.z}function h(){let M=new F;for(let y=0;y<r.length;y+=3){M.x=r[y+0],M.y=r[y+1],M.z=r[y+2];let T=m(M)/2/Math.PI+.5,U=p(M)/Math.PI+.5;a.push(T,1-U)}x(),f()}function f(){for(let M=0;M<a.length;M+=6){let y=a[M+0],T=a[M+2],U=a[M+4],I=Math.max(y,T,U),L=Math.min(y,T,U);I>.9&&L<.1&&(y<.2&&(a[M+0]+=1),T<.2&&(a[M+2]+=1),U<.2&&(a[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function d(M,y){let T=M*3;y.x=e[T+0],y.y=e[T+1],y.z=e[T+2]}function x(){let M=new F,y=new F,T=new F,U=new F,I=new Fe,L=new Fe,Y=new Fe;for(let b=0,w=0;b<r.length;b+=9,w+=6){M.set(r[b+0],r[b+1],r[b+2]),y.set(r[b+3],r[b+4],r[b+5]),T.set(r[b+6],r[b+7],r[b+8]),I.set(a[w+0],a[w+1]),L.set(a[w+2],a[w+3]),Y.set(a[w+4],a[w+5]),U.copy(M).add(y).add(T).divideScalar(3);let D=m(U);v(I,w+0,M,D),v(L,w+2,y,D),v(Y,w+4,T,D)}}function v(M,y,T,U){U<0&&M.x===1&&(a[y]=M.x-1),T.x===0&&T.z===0&&(a[y]=U/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},Ia=class i extends xl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var xr=class extends Vs{constructor(e){super(e),this.uuid=Ws(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Vs().fromJSON(s))}return this}},P0={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=tu(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,f,u,d;if(n&&(r=N0(i,e,r,t)),i.length>80*t){o=c=i[0],l=h=i[1];for(let x=t;x<s;x+=t)f=i[x],u=i[x+1],f<o&&(o=f),u<l&&(l=u),f>c&&(c=f),u>h&&(h=u);d=Math.max(c-o,h-l),d=d!==0?32767/d:0}return yr(r,a,t,o,l,d,0),a}};function tu(i,e,t,n,s){let r,a;if(s===q0(i,e,t,n)>0)for(r=e;r<t;r+=n)a=Ah(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=Ah(r,i[r],i[r+1],a);return a&&za(a,a.next)&&(Mr(a),a=a.next),a}function ss(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(za(t,t.next)||Kt(t.prev,t,t.next)===0)){if(Mr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function yr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&z0(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?L0(i,n,s,r):I0(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Mr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=D0(ss(i),e,t),yr(i,e,t,n,s,r,2)):a===2&&U0(i,e,t,n,s,r):yr(ss(i),e,t,n,s,r,1);break}}}function I0(i){let e=i.prev,t=i,n=i.next;if(Kt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,f=o<l?o<c?o:c:l<c?l:c,u=s>r?s>a?s:a:r>a?r:a,d=o>l?o>c?o:c:l>c?l:c,x=n.next;for(;x!==e;){if(x.x>=h&&x.x<=u&&x.y>=f&&x.y<=d&&Ds(s,o,r,l,a,c,x.x,x.y)&&Kt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function L0(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Kt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,f=r.y,u=a.y,d=o<l?o<c?o:c:l<c?l:c,x=h<f?h<u?h:u:f<u?f:u,v=o>l?o>c?o:c:l>c?l:c,m=h>f?h>u?h:u:f>u?f:u,p=yl(d,x,e,t,n),M=yl(v,m,e,t,n),y=i.prevZ,T=i.nextZ;for(;y&&y.z>=p&&T&&T.z<=M;){if(y.x>=d&&y.x<=v&&y.y>=x&&y.y<=m&&y!==s&&y!==a&&Ds(o,h,l,f,c,u,y.x,y.y)&&Kt(y.prev,y,y.next)>=0||(y=y.prevZ,T.x>=d&&T.x<=v&&T.y>=x&&T.y<=m&&T!==s&&T!==a&&Ds(o,h,l,f,c,u,T.x,T.y)&&Kt(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=v&&y.y>=x&&y.y<=m&&y!==s&&y!==a&&Ds(o,h,l,f,c,u,y.x,y.y)&&Kt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;T&&T.z<=M;){if(T.x>=d&&T.x<=v&&T.y>=x&&T.y<=m&&T!==s&&T!==a&&Ds(o,h,l,f,c,u,T.x,T.y)&&Kt(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function D0(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!za(s,r)&&nu(s,n,n.next,r)&&vr(s,r)&&vr(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Mr(n),Mr(n.next),n=i=r),n=n.next}while(n!==i);return ss(n)}function U0(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&G0(a,o)){let l=iu(a,o);a=ss(a,a.next),l=ss(l,l.next),yr(a,e,t,n,s,r,0),yr(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function N0(i,e,t,n){let s=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=tu(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(V0(c));for(s.sort(O0),r=0;r<s.length;r++)t=F0(s[r],t);return t}function O0(i,e){return i.x-e.x}function F0(i,e){let t=B0(i,e);if(!t)return e;let n=iu(t,i);return ss(n,n.next),ss(t,t.next)}function B0(i,e){let t=e,n=-1/0,s,r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let u=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=r&&u>n&&(n=u,s=t.x<t.next.x?t:t.next,u===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,f;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Ds(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(f=Math.abs(a-t.y)/(r-t.x),vr(t,i)&&(f<h||f===h&&(t.x>s.x||t.x===s.x&&H0(s,t)))&&(s=t,h=f)),t=t.next;while(t!==o);return s}function H0(i,e){return Kt(i.prev,i,e.prev)<0&&Kt(e.next,i,i.next)<0}function z0(i,e,t,n){let s=i;do s.z===0&&(s.z=yl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,k0(s)}function k0(i){let e,t,n,s,r,a,o,l,c=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(a>1);return i}function yl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function V0(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ds(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function G0(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!W0(i,e)&&(vr(i,e)&&vr(e,i)&&X0(i,e)&&(Kt(i.prev,i,e.prev)||Kt(i,e.prev,e))||za(i,e)&&Kt(i.prev,i,i.next)>0&&Kt(e.prev,e,e.next)>0)}function Kt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function za(i,e){return i.x===e.x&&i.y===e.y}function nu(i,e,t,n){let s=na(Kt(i,e,t)),r=na(Kt(i,e,n)),a=na(Kt(t,n,i)),o=na(Kt(t,n,e));return!!(s!==r&&a!==o||s===0&&ta(i,t,e)||r===0&&ta(i,n,e)||a===0&&ta(t,i,n)||o===0&&ta(t,e,n))}function ta(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function na(i){return i>0?1:i<0?-1:0}function W0(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&nu(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function vr(i,e){return Kt(i.prev,i,i.next)<0?Kt(i,e,i.next)>=0&&Kt(i,i.prev,e)>=0:Kt(i,e,i.prev)<0||Kt(i,i.next,e)<0}function X0(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function iu(i,e){let t=new vl(i.i,i.x,i.y),n=new vl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Ah(i,e,t,n){let s=new vl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Mr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function vl(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function q0(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var lr=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Rh(e),Ch(n,e);let a=e.length;t.forEach(Rh);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Ch(n,t[l]);let o=P0.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Rh(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Ch(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var La=class i extends kn{constructor(e=new xr([new Fe(0,.5),new Fe(-.5,-.5),new Fe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Jt(s,3)),this.setAttribute("normal",new Jt(r,3)),this.setAttribute("uv",new Jt(a,2));function c(h){let f=s.length/3,u=h.extractPoints(t),d=u.shape,x=u.holes;lr.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=x.length;m<p;m++){let M=x[m];lr.isClockWise(M)===!0&&(x[m]=M.reverse())}let v=lr.triangulateShape(d,x);for(let m=0,p=x.length;m<p;m++){let M=x[m];d=d.concat(M)}for(let m=0,p=d.length;m<p;m++){let M=d[m];s.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let m=0,p=v.length;m<p;m++){let M=v[m],y=M[0]+f,T=M[1]+f,U=M[2]+f;n.push(y,T,U),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Y0(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function Y0(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Wi=class i extends kn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new F,u=new F,d=[],x=[],v=[],m=[];for(let p=0;p<=n;p++){let M=[],y=p/n,T=0;p===0&&a===0?T=.5/t:p===n&&l===Math.PI&&(T=-.5/t);for(let U=0;U<=t;U++){let I=U/t;f.x=-e*Math.cos(s+I*r)*Math.sin(a+y*o),f.y=e*Math.cos(a+y*o),f.z=e*Math.sin(s+I*r)*Math.sin(a+y*o),x.push(f.x,f.y,f.z),u.copy(f).normalize(),v.push(u.x,u.y,u.z),m.push(I+T,1-y),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){let y=h[p][M+1],T=h[p][M],U=h[p+1][M],I=h[p+1][M+1];(p!==0||a>0)&&d.push(y,T,I),(p!==n-1||l<Math.PI)&&d.push(T,U,I)}this.setIndex(d),this.setAttribute("position",new Jt(x,3)),this.setAttribute("normal",new Jt(v,3)),this.setAttribute("uv",new Jt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var On=class extends ki{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wh,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function ia(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function $0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Gs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ml=class extends Gs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pc,endingEnd:Pc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ic:r=e,o=2*t-n;break;case Lc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ic:a=e,l=2*n-t;break;case Lc:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,x=(n-t)/(s-t),v=x*x,m=v*x,p=-u*m+2*u*v-u*x,M=(1+u)*m+(-1.5-2*u)*v+(-.5+u)*x+1,y=(-1-d)*m+(1.5+d)*v+.5*x,T=d*m-d*v;for(let U=0;U!==o;++U)r[U]=p*a[h+U]+M*a[c+U]+y*a[l+U]+T*a[f+U];return r}},Sl=class extends Gs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),f=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*f+a[l+u]*h;return r}},bl=class extends Gs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ai=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ia(t,this.TimeBufferType),this.values=ia(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ia(e.times,Array),values:ia(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new bl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Sl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ml(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ra:t=this.InterpolantFactoryMethodDiscrete;break;case aa:t=this.InterpolantFactoryMethodLinear;break;case uo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ra;case this.InterpolantFactoryMethodLinear:return aa;case this.InterpolantFactoryMethodSmooth:return uo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&$0(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===uo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*n,u=f-n,d=f+n;for(let x=0;x!==n;++x){let v=t[f+x];if(v!==t[u+x]||v!==t[d+x]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[f+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};ai.prototype.TimeBufferType=Float32Array;ai.prototype.ValueBufferType=Float32Array;ai.prototype.DefaultInterpolation=aa;var rs=class extends ai{};rs.prototype.ValueTypeName="bool";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=ra;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;var El=class extends ai{};El.prototype.ValueTypeName="color";var Tl=class extends ai{};Tl.prototype.ValueTypeName="number";var wl=class extends Gs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)zi.slerpFlat(r,0,a,c-o,a,c,l);return r}},Sr=class extends ai{InterpolantFactoryMethodLinear(e){return new wl(this.times,this.values,this.getValueSize(),e)}};Sr.prototype.ValueTypeName="quaternion";Sr.prototype.DefaultInterpolation=aa;Sr.prototype.InterpolantFactoryMethodSmooth=void 0;var as=class extends ai{};as.prototype.ValueTypeName="string";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=ra;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;var Al=class extends ai{};Al.prototype.ValueTypeName="vector";var Rl=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],x=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return x}return null}}},Z0=new Rl,Cl=class{constructor(e){this.manager=e!==void 0?e:Z0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Cl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Da=class extends Nn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};var ko=new fn,Ph=new F,Ih=new F,Pl=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.map=null,this.mapPass=null,this.matrix=new fn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pr,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new xn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Ph.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ph),Ih.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ih),t.updateMatrixWorld(),ko.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ko),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ko)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Il=class extends Pl{constructor(){super(new va(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ua=class extends Da{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nn.DEFAULT_UP),this.updateMatrix(),this.target=new Nn,this.shadow=new Il}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Na=class extends Da{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var zl="\\[\\]\\.:\\/",K0=new RegExp("["+zl+"]","g"),kl="[^"+zl+"]",J0="[^"+zl.replace("\\.","")+"]",j0=/((?:WC+[\/:])*)/.source.replace("WC",kl),Q0=/(WCOD+)?/.source.replace("WCOD",J0),e_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kl),t_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kl),n_=new RegExp("^"+j0+Q0+e_+t_+"$"),i_=["material","materials","bones","map"],Ll=class{constructor(e,t,n){let s=n||qt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},qt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(K0,"")}static parseTrackName(e){let t=n_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);i_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};qt.Composite=Ll;qt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};qt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};qt.prototype.GetterByBindingType=[qt.prototype._getValue_direct,qt.prototype._getValue_array,qt.prototype._getValue_arrayElement,qt.prototype._getValue_toArray];qt.prototype.SetterByBindingTypeAndVersioning=[[qt.prototype._setValue_direct,qt.prototype._setValue_direct_setNeedsUpdate,qt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_array,qt.prototype._setValue_array_setNeedsUpdate,qt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_arrayElement,qt.prototype._setValue_arrayElement_setNeedsUpdate,qt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_fromArray,qt.prototype._setValue_fromArray_setNeedsUpdate,qt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var g_=new Float32Array(1);var Oa=class{constructor(e,t,n=0,s=1/0){this.ray=new dr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new fr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Dl(e,this,n,t),n.sort(Lh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Dl(e[s],this,n,t);return n.sort(Lh),n}};function Lh(i,e){return i.distance-e.distance}function Dl(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,a=s.length;r<a;r++)Dl(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ul}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ul);var r_=35,a_=25,vt=.95,Fn=.35,ka=6,os=130,su=240,ru=typeof window<"u"&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||window.location.search.includes("dev=1")),o_=[{value:"balanced",label:"Balanced (HP + even stats)"},{value:"tanky",label:"Tanky (HP + VIT)"},{value:"aggressive",label:"Aggressive (STR + AGI)"},{value:"scout",label:"Scout (high AGI)"},{value:"ranged",label:"Ranged (DEX + range)"},{value:"caster",label:"Caster (INT + MP)"},{value:"random",label:"Random"},{value:"custom",label:"Custom order"}],l_=["berserker","knight","lancer","werewolf","samurai","ninja","assassin","ghoul","monk","hunter","mage","witch"],je={PATH:0,GRASS:1,TREE:2,WATER:3,ROCK:4,BASE_TOP:5,BASE_BOTTOM:6,CENTER:7},Va=["knight","mage","monk","ghoul","lancer","hunter","assassin","berserker","witch","ninja","samurai","werewolf"];function c_(i){for(let e=i.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[i[e],i[t]]=[i[t],i[e]]}return i}var Ut={knight:{name:"Knight",gender:"male",hp:27,maxHp:27,mp:5,maxMp:5,str:13,agi:8,vit:14,dex:10,luk:4,int:7,range:1},mage:{name:"Mage",gender:"female",hp:17,maxHp:17,mp:22,maxMp:22,str:6,agi:4,vit:5,dex:4,luk:13,int:15,range:4},monk:{name:"Monk",gender:"male",hp:23,maxHp:23,mp:12,maxMp:12,str:10,agi:10,vit:12,dex:9,luk:11,int:10,range:1},ghoul:{name:"Ghoul",gender:"male",hp:21,maxHp:21,mp:6,maxMp:6,str:12,agi:9,vit:9,dex:11,luk:9,int:5,range:1},lancer:{name:"Lancer",gender:"female",hp:22,maxHp:22,mp:7,maxMp:7,str:13,agi:11,vit:10,dex:7,luk:5,int:8,range:2},hunter:{name:"Hunter",gender:"female",hp:18,maxHp:18,mp:9,maxMp:9,str:7,agi:5,vit:7,dex:15,luk:12,int:5,range:6},assassin:{name:"Assassin",gender:"female",hp:19,maxHp:19,mp:10,maxMp:10,str:9,agi:14,vit:6,dex:14,luk:10,int:4,range:1},berserker:{name:"Berserker",gender:"male",hp:30,maxHp:30,mp:3,maxMp:3,str:15,agi:7,vit:13,dex:8,luk:6,int:2,range:1},witch:{name:"Witch",gender:"female",hp:16,maxHp:16,mp:24,maxMp:24,str:5,agi:6,vit:4,dex:5,luk:14,int:14,range:3},ninja:{name:"Ninja",gender:"female",hp:20,maxHp:20,mp:12,maxMp:12,str:8,agi:15,vit:7,dex:12,luk:8,int:9,range:1},samurai:{name:"Samurai",gender:"male",hp:24,maxHp:24,mp:8,maxMp:8,str:11,agi:12,vit:8,dex:13,luk:7,int:6,range:1},werewolf:{name:"Werewolf",gender:"male",hp:25,maxHp:25,mp:4,maxMp:4,str:14,agi:13,vit:11,dex:6,luk:6,int:3,range:1}},Ga={knight:{primary:6908265,secondary:9127187,hair:12887172,cape:3355443},mage:{primary:16776656,secondary:3355443,hair:13353955,cape:4853326},monk:{primary:16777188,secondary:16119285,hair:2889744},ghoul:{primary:32896,secondary:6636321,hair:32896,skin:32896},lancer:{primary:3169502,secondary:16776656,hair:15854290,cape:14423100},hunter:{primary:8421376,secondary:9584654,hair:7898731,cape:16119285},assassin:{primary:986695,secondary:16119285,hair:2621751},berserker:{primary:657930,secondary:986695,hair:657930,cape:1118481},witch:{primary:16119285,secondary:8388640,hair:16777188,cape:2263842},ninja:{primary:267292,secondary:4744577,hair:4744577},samurai:{primary:13882323,secondary:3556687,hair:3556687},werewolf:{primary:11119017,secondary:14474460,hair:12632256}},br={knight:"https://creator.nightcafe.studio/jobs/OlIWpAye2LeM5gPkAGEI/OlIWpAye2LeM5gPkAGEI--1--xc223.jpg",mage:"https://media.craiyon.com/2025-08-13/bLqz0LbwSIynOcUHty4Maw.webp",monk:"https://cdnb.artstation.com/p/assets/images/images/028/576/499/large/ahruna-art-oct17.jpg?1594859688",ghoul:"https://i.pinimg.com/736x/d3/cc/41/d3cc41778d05dec0371a69e29659f792.jpg",lancer:"https://i.redd.it/zolf64gpoa0c1.jpg",hunter:"https://coolvibe.com/wp-content/uploads/2011/02/hunter.jpg",assassin:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk2-NBPpPOU7duYgN_k_9oFKZ5hJjU28qyoA&s",berserker:"https://entertainment.inquirer.net/files/2016/07/top_bg.jpg",witch:"https://w0.peakpx.com/wallpaper/382/134/HD-wallpaper-evil-witch-witch-female-dress-white-hair-evil-black-woman-girl-darkness-anime-dark-beauty-lady-long-hair.jpg",ninja:"https://i.pinimg.com/474x/02/88/60/0288609778e53701b7e64051d7164922.jpg",samurai:"https://files.idyllic.app/files/static/3120390?width=256&optimizer=image",werewolf:"https://i.pinimg.com/736x/1f/95/27/1f9527c6255465547d664f19dd11967c.jpg"},au={knight:[{name:"Shield Wall",description:"Gain +2 VIT for 2 turns.",cost:3,target:"self",range:0,level:2,effectKey:"shieldWall"},{name:"Dominate",description:"Steal 1 STR from an enemy.",cost:5,target:"enemy",range:1,level:3,effectKey:"dominate"}],mage:[{name:"Arcane Bolt",description:"Deal INT-based damage to one enemy.",cost:4,target:"enemy",range:6,level:1,effectKey:"arcaneBolt",type:"spell"},{name:"Freeze",description:"Reduce target's AGI by 10 for 1 turn.",cost:8,target:"enemy",range:6,level:2,effectKey:"freeze"}],monk:[{name:"Mantra Fist",description:"Deal STR+LUK-based damage to one enemy.",cost:3,hpCost:2,target:"enemy",range:1,level:2,effectKey:"mantraFist"},{name:"Chakra",description:"Heal HP for both ally and self.",cost:8,target:"ally",range:4,level:3,effectKey:"chakra"}],ghoul:[{name:"Weaken",description:"Steal 1 VIT from an enemy.",cost:4,target:"enemy",range:1,level:2,effectKey:"weaken"},{name:"Feast",description:"Deal STR-based damage to enemy and heal self.",cost:5,target:"enemy",range:1,level:3,effectKey:"feast"}],lancer:[{name:"Impale",description:"Reduce target's AGI by 2 for 3 turns.",cost:4,target:"enemy",range:2,level:2,effectKey:"impale"},{name:"Pierce",description:"Deal STR-based damage through the defense.",cost:6,target:"enemy",range:2,level:3,effectKey:"pierce"}],hunter:[{name:"Focus",description:"Gain +3 DEX for 2 turns.",cost:4,target:"self",range:0,level:2,effectKey:"focus"},{name:"Snipe",description:"Deal DEX-based damage to one enemy.",cost:6,target:"enemy",range:10,level:3,effectKey:"snipe"}],assassin:[{name:"Cripple",description:"Steal 1 AGI from an enemy.",cost:5,target:"enemy",range:1,level:2,effectKey:"cripple"},{name:"Execute",description:"Deal AGI-based damage to one enemy.",cost:7,target:"enemy",range:1,level:3,effectKey:"execute"}],berserker:[{name:"Berserk",description:"Deal STR-based damage for -3 HP.",cost:0,hpCost:3,target:"enemy",range:1,level:2,effectKey:"berserk"},{name:"Bloodlust",description:"Gain STR and VIT based on lost HP for 1 turn.",cost:5,target:"self",range:0,level:3,effectKey:"bloodlust"}],witch:[{name:"Hex",description:"Steal 1 INT from an enemy.",cost:5,target:"enemy",range:5,level:1,effectKey:"hex"},{name:"Drain",description:"Deal INT-based damage to enemy and heal self.",cost:6,target:"enemy",range:5,level:2,effectKey:"drain",type:"spell"}],ninja:[{name:"Shuriken",description:"Deal DEX-based ranged attack.",cost:5,target:"enemy",range:4,level:2,effectKey:"shuriken"},{name:"Blind",description:"Steal 2 DEX from an enemy.",cost:8,target:"enemy",range:1,level:3,effectKey:"blind"}],samurai:[{name:"Iaido",description:"Gain +1 STR and +1 DEX for 2 turns.",cost:5,target:"self",range:0,level:2,effectKey:"iaido"},{name:"Chokuto",description:"Deal STR+DEX-based damage to one enemy.",cost:7,target:"enemy",range:1,level:3,effectKey:"chokuto"}],werewolf:[{name:"Bite",description:"Deal STR+AGI-based damage to one enemy.",cost:5,target:"enemy",range:1,level:2,effectKey:"bite"},{name:"Howl",description:"Gain +2 STR and +2 AGI for 2 turns.",cost:6,target:"self",range:0,level:3,effectKey:"howl"}]};function Pe(i,e){let t=i[e]!=null?i[e]:0,n=i.tempBuff&&i.tempBuff[e]!=null?i.tempBuff[e]:0,s=i.tempDebuff&&i.tempDebuff[e]!=null?i.tempDebuff[e]:0;return t+n-s}function Wa(i,e,t,n){let s=e,r=t,o={shieldWall:"Shield Wall",dominate:"Dominate",arcaneBolt:"Arcane Bolt",freeze:"Freeze",mantra:"Mantra",chakra:"Chakra",weaken:"Weaken",feast:"Feast",impale:"Impale",pierce:"Pierce",focus:"Focus",snipe:"Snipe",execute:"Execute",cripple:"Cripple",berserk:"Berserk",bloodlust:"Bloodlust",hex:"Hex",drain:"Drain",shuriken:"Shuriken",blind:"Blind",iaido:"Iaido",chokuto:"Chokuto",bite:"Bite",howl:"Howl"}[i]||i.replace(/([A-Z])/g," $1").replace(/^./,d=>d.toUpperCase()).trim();n.showFloatingCombatText&&n.showFloatingCombatText(s.x,s.y,o,!1,"skill-name");let l=i.replace(/([A-Z])/g," $1").replace(/^./,d=>d.toUpperCase()).trim(),c=r?`${r.name} (${r.class}, P${r.player})`:"self",h=null,f=(d,x,v,m)=>{if(v)d.hp=Math.min(d.maxHp,d.hp+x),n.showFloatingCombatText&&n.showFloatingCombatText(d.x,d.y,`+${x}`,!1);else{let p=d===s,M=!0;if(!p&&!m){let y=Pe(d,"agi")*.7+Pe(d,"luk")*.3;M=Math.random()*Math.max(.001,y)<=Pe(s,"dex")}return M?(d.hp=Math.max(0,d.hp-x),d!==s&&(h=x),n.showFloatingCombatText&&n.showFloatingCombatText(d.x,d.y,String(x),!1),n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(d),d.hp<=0&&n.handleUnitDeath&&n.handleUnitDeath(d)):n.showFloatingCombatText&&n.showFloatingCombatText(d.x,d.y,"MISS",!0),M}},u=(d,x,v,m)=>{n.showFloatingCombatText&&n.showFloatingCombatText(d,x,v,!1,m?"buff":"debuff")};switch(i){case"shieldWall":s.tempBuff=s.tempBuff||{},s.tempBuff.vit=2,s.tempBuff.duration=3,u(s.x,s.y,"+2 VIT",!0);break;case"dominate":r&&(r.str=Math.max(1,(r.str||0)-1),s.str=(s.str||0)+1,u(r.x,r.y,"-1 STR",!1),u(s.x,s.y,"+1 STR",!0));break;case"arcaneBolt":{if(!r)break;let d=Math.max(1,Math.ceil(Pe(s,"int")-(Pe(r,"int")*.7+Pe(r,"luk")*.2)));f(r,d,!1,!0);break}case"freeze":r&&(r.tempDebuff=r.tempDebuff||{},r.tempDebuff.agi=10,r.tempDebuff.duration=1,u(r.x,r.y,"-10 AGI",!1));break;case"mantraFist":if(r){let d=Math.max(1,Math.floor(Pe(s,"str")*.8+Pe(s,"luk")*.4-(Pe(r,"vit")*.3+Pe(r,"luk")*.2)));f(r,d,!1),f(s,2,!1)}break;case"chakra":if(!r)break;f(s,Math.max(1,Math.floor(Pe(s,"int")*.4)),!0),f(r,Math.max(1,Math.floor(Pe(r,"int")*.4)),!0);break;case"weaken":r&&(r.vit=Math.max(1,(r.vit||0)-1),s.vit=(s.vit||0)+1,u(r.x,r.y,"-1 VIT",!1),u(s.x,s.y,"+1 VIT",!0));break;case"feast":{if(!r)break;let d=Math.max(1,Math.floor(Pe(s,"str")*.7-(Pe(r,"vit")*.3+Pe(r,"luk")*.2)));f(r,d,!1)&&f(s,d,!0);break}case"impale":r&&(r.tempDebuff=r.tempDebuff||{},r.tempDebuff.agi=2,r.tempDebuff.duration=4,u(r.x,r.y,"-2 AGI",!1));break;case"pierce":{if(!r)break;let d=Math.max(1,Math.floor(Pe(s,"str")*.6));f(r,d,!1);break}case"focus":s.tempBuff=s.tempBuff||{},s.tempBuff.dex=3,s.tempBuff.duration=3,u(s.x,s.y,"+2 DEX",!0);break;case"snipe":{if(!r)break;let d=Math.max(1,Math.floor(Pe(s,"dex")*.7-(Pe(r,"vit")*.3+Pe(r,"luk")*.2)));f(r,d,!1);break}case"execute":if(r){let d=Math.max(1,Math.floor(Pe(s,"agi")*.7-(Pe(r,"vit")*.3+Pe(r,"luk")*.2)));f(r,d,!1)}break;case"cripple":r&&(r.agi=Math.max(1,(r.agi||0)-1),s.agi=(s.agi||0)+1,u(r.x,r.y,"-1 AGI",!1),u(s.x,s.y,"+1 AGI",!0));break;case"berserk":if(r){f(r,Math.max(1,Math.floor(Pe(s,"str")*.8-Pe(r,"vit")*.3+Pe(r,"luk")*.2)),!1),f(s,3,!1);break}case"bloodlust":{let d=Math.max(1,Math.floor((s.maxHp-s.hp)*.2));s.tempBuff=s.tempBuff||{},s.tempBuff.str=d,s.tempBuff.vit=d,s.tempBuff.duration=2,u(s.x,s.y,`+${d} STR, +${d} VIT`,!0);break}case"hex":r&&(r.int=Math.max(1,(r.int||0)-1),s.int=(s.int||0)+1,u(r.x,r.y,"-1 INT",!1),u(s.x,s.y,"+1 INT",!0));break;case"drain":{if(!r)break;let d=Math.max(1,Math.ceil(Pe(s,"int")*.6-(Pe(r,"int")*.4+Pe(r,"luk")*.2)));f(r,d,!1,!0),f(s,d,!0);break}case"shuriken":{if(!r)break;let d=Math.max(1,Math.floor(Pe(s,"dex")*.5-(Pe(r,"vit")*.3+Pe(r,"luk")*.2)));f(r,d,!1);break}case"blind":r&&(r.dex=Math.max(1,(r.dex||0)-2),s.dex=(s.dex||0)+2,u(r.x,r.y,"-2 DEX",!1),u(s.x,s.y,"+2 DEX",!0));break;case"iaido":s.tempBuff=s.tempBuff||{},s.tempBuff.str=1,s.tempBuff.dex=1,s.tempBuff.duration=3,u(s.x,s.y,"+1 STR, +1 DEX",!0);break;case"chokuto":{if(!r)break;let d=Math.max(1,Math.floor((s.str||0)+(s.dex||0)*.3));f(r,d,!1);break}case"bite":{if(!r)break;let d=Math.max(1,Math.floor(Pe(s,"str")*.7+Pe(s,"agi")*.1-(Pe(r,"vit")*.3+Pe(r,"luk")*.2)));f(r,d,!1);break}case"howl":s.tempBuff=s.tempBuff||{},s.tempBuff.str=2,s.tempBuff.agi=2,s.tempBuff.duration=2,u(s.x,s.y,"+2 STR, +2 AGI",!0);break;default:break}console.log("[SKILL]",`${s.name} (${s.class}, P${s.player})`,"uses",l,"\u2192",c,`| MP ${s.mp}`,h!=null?`| ${h} dmg`:""),n.updateTurnUI&&n.updateTurnUI()}function h_(){let i=r_,e=a_,t=Array.from({length:e},()=>Array(i).fill(!1)),n=Array.from({length:e},()=>Array(i).fill(0)),s=Array.from({length:e},()=>Array(i).fill(je.GRASS)),r=Math.floor(i/2),a=Math.floor(i/2),o=0,l=e-1;for(let D=-1;D<=1;D++)for(let O=-2;O<=2;O++){let j=r+O,C=o+D;j>=0&&j<i&&C>=0&&C<e&&(t[C][j]=!0,s[C][j]=je.BASE_TOP,n[C][j]=1)}for(let D=-1;D<=1;D++)for(let O=-2;O<=2;O++){let j=a+O,C=l+D;j>=0&&j<i&&C>=0&&C<e&&(t[C][j]=!0,s[C][j]=je.BASE_BOTTOM,n[C][j]=1)}let c=Math.floor(i/2),h=Math.floor(e/2);for(let D=-1;D<=1;D++)for(let O=-2;O<=2;O++){let j=c+O,C=h+D;j>=0&&j<i&&C>=0&&C<e&&(t[C][j]=!0,s[C][j]=je.CENTER,n[C][j]=1)}let f=new Set,u=(D,O)=>Math.abs(D-c)<=2&&Math.abs(O-h)<=1,d=(D,O)=>{D<0||D>=i||O<0||O>=e||u(D,O)||f.add(O*i+D)},x=Math.floor(i/2),v=Math.floor(e/2),m=Math.min(i,e)*.29,p=Math.max(60,(e+i)*2);for(let D=0;D<2;D++){let O=D===0?x-m:x+m,j=D===0?Math.PI/2:-Math.PI/2,C=D===0?Math.PI*3/2:Math.PI/2;for(let G=0;G<=p;G++){let N=G/p,se=j+N*(C-j),$=O+m*Math.cos(se),Q=v+m*Math.sin(se),ne=Math.round($),ue=Math.round(Q);d(ne,ue),d(ne+1,ue),d(ne-1,ue),d(ne,ue+1),d(ne,ue-1)}}let M=[[0,1],[0,-1],[1,0],[-1,0]];for(let D=0;D<1;D++){let O=[];f.forEach(j=>{let C=j%i,G=j/i|0;for(let[N,se]of M){let $=C+N,Q=G+se;if($<0||$>=i||Q<0||Q>=e)continue;let ne=Q*i+$;f.has(ne)||O.push(ne)}}),O.forEach(j=>f.add(j))}f.forEach(D=>{let O=D%i,j=D/i|0;s[j][O]===je.BASE_TOP||s[j][O]===je.BASE_BOTTOM||s[j][O]===je.CENTER||(t[j][O]=!0,s[j][O]=je.PATH,n[j][O]=1)});let y=Math.round(x-m*1.6),T=Math.round(x+m*1.6),U=Math.round(x-m),I=Math.round(x+m),L=1;for(let D=h-L;D<=h+L;D++)if(!(D<0||D>=e))for(let O=y;O<=T;O++)O<0||O>=i||(t[D][O]=!0,s[D][O]!==je.CENTER&&s[D][O]!==je.BASE_TOP&&s[D][O]!==je.BASE_BOTTOM&&(s[D][O]=je.PATH),n[D][O]=Math.max(n[D][O],1));function Y(D,O,j,C){let G=Math.max(1,Math.min(D,O)),N=Math.min(e-2,Math.max(D,O)),se=Math.max(1,Math.min(j,C)),$=Math.min(i-2,Math.max(j,C));for(let Q=G;Q<=N;Q++)for(let ne=se;ne<=$;ne++)s[Q][ne]===je.BASE_TOP||s[Q][ne]===je.BASE_BOTTOM||s[Q][ne]===je.CENTER||(t[Q][ne]=!0,s[Q][ne]=je.PATH,n[Q][ne]=1)}let b=3,w=3;Y(o,o+b-1,U,r-1),Y(o,o+b-1,r+1,I),Y(l-w+1,l,U,a-1),Y(l-w+1,l,a+1,I);for(let D=-1;D<=2;D++)for(let O=-2;O<=2;O++){let j=r+O,C=o+D;j>=0&&j<i&&C>=0&&C<e&&(t[C][j]=!0,s[C][j]=je.BASE_TOP,n[C][j]=1)}for(let D=-2;D<=1;D++)for(let O=-2;O<=2;O++){let j=a+O,C=l+D;j>=0&&j<i&&C>=0&&C<e&&(t[C][j]=!0,s[C][j]=je.BASE_BOTTOM,n[C][j]=1)}for(let D=0;D<e;D++)for(let O=0;O<i;O++){if(t[D][O]||s[D][O]===je.BASE_TOP||s[D][O]===je.BASE_BOTTOM||s[D][O]===je.CENTER)continue;let j=Math.abs(O-r)<=4&&Math.abs(D-o)<=3,C=Math.abs(O-a)<=4&&Math.abs(D-l)<=3,G=j||C,N=Math.random();N<.55&&!G?(s[D][O]=je.TREE,n[D][O]=1+Math.floor(Math.random()*2)):N<.75||G&&N<.5?(s[D][O]=je.WATER,n[D][O]=0):(s[D][O]=je.ROCK,n[D][O]=1+Math.floor(Math.random()*2))}return{w:i,h:e,path:t,height:n,type:s,topBaseX:r,topBaseY:o,botBaseX:a,botBaseY:l}}function u_(i,e,t){let n=e===1?je.BASE_BOTTOM:je.BASE_TOP,s=[];for(let r=0;r<i.h;r++)for(let a=0;a<i.w;a++)i.type[r][a]===n&&(t&&t.has(r*i.w+a)||s.push({gx:a,gy:r}));return s}function d_(i){let e=[];for(let t=0;t<i.h;t++)for(let n=0;n<i.w;n++)i.type[t][n]===je.CENTER&&e.push({gx:n,gy:t});return e}function ou(i,e){let t=d_(i);if(t.length===0)return e;let n=s=>Math.min(...t.map(r=>Math.abs(s.gx-r.gx)+Math.abs(s.gy-r.gy)));return[...e].sort((s,r)=>n(s)-n(r))}function Er(i,e,t){if(e<0||e>=i.w||t<0||t>=i.h)return!1;let n=i.type[t][e];return!(n===je.TREE||n===je.WATER||n===je.ROCK)}function f_(i,e,t,n){let s=[],r=i,a=e,o=t,l=n,c=Math.abs(o-r),h=Math.abs(l-a),f=r<o?1:-1,u=a<l?1:-1,d=c-h;for(;s.push({x:r,y:a}),!(r===o&&a===l);){let x=2*d;x>-h&&(d-=h,r+=f),x<c&&(d+=c,a+=u)}return s}function ls(i,e,t,n,s){let r=f_(e,t,n,s);for(let a=1;a<r.length-1;a++){let o=r[a];if(!Er(i,o.x,o.y))return!1}return!0}function Xa(i,e,t,n,s,r){let a=(f,u)=>u*i.w+f,o=new Map;o.set(a(e,t),0);let l=[{x:e,y:t,d:0}],c=[[0,1],[0,-1],[1,0],[-1,0]],h=s!=null&&r!=null;for(;l.length;){let{x:f,y:u,d}=l.shift();if(!(d>=n))for(let[x,v]of c){let m=f+x,p=u+v;if(!Er(i,m,p))continue;if(h){let T=s.find(U=>U.hp>0&&U.x===m&&U.y===p);if(T&&T.player!==r.player)continue}let M=a(m,p);if(o.has(M))continue;let y=d+1;o.set(M,y),l.push({x:m,y:p,d:y})}}return o}function lu(i,e,t,n){let s=new Map;for(let r=0;r<i.h;r++)for(let a=0;a<i.w;a++){let o=Math.abs(a-e)+Math.abs(r-t);o>=1&&o<=n&&s.set(r*i.w+a,o)}return s}function Xi(i,e,t,n,s,r,a){if(e===n&&t===s)return[{x:e,y:t}];let o=(u,d)=>d*i.w+u,l=new Map,c=[{x:e,y:t}];l.set(o(e,t),null);let h=[[0,1],[0,-1],[1,0],[-1,0]];function f(u,d){if(!Er(i,u,d))return!1;let x=r.find(v=>v.hp>0&&v.x===u&&v.y===d);return x?x.id===a.id||x.player===a.player:!0}for(;c.length;){let{x:u,y:d}=c.shift();if(u===n&&d===s){let x=[],v={x:n,y:s};for(;v;)x.unshift(v),v=l.get(o(v.x,v.y));return x}for(let[x,v]of h){let m=u+x,p=d+v,M=o(m,p);l.has(M)||f(m,p)&&(l.set(M,{x:u,y:d}),c.push({x:m,y:p}))}}return null}var cu={[je.PATH]:2976557,[je.GRASS]:2968109,[je.TREE]:1719578,[je.WATER]:1989278,[je.ROCK]:4872778,[je.BASE_TOP]:8014410,[je.BASE_BOTTOM]:4872826,[je.CENTER]:13940810};function hu(i){return i.w*vt/2}function uu(i){return i.h*vt/2}function du(i){let e=document.createElement("canvas");e.width=i,e.height=i;let t=e.getContext("2d"),n=t.createImageData(i,i),s=n.data;for(let a=0;a<s.length;a+=4){let o=Math.floor(128+(Math.random()-.5)*80);s[a]=s[a+1]=s[a+2]=o,s[a+3]=255}t.putImageData(n,0,0);let r=new wa(e);return r.wrapS=r.wrapT=cr,r.repeat.set(4,4),r.needsUpdate=!0,r}function p_(i){let e=new Kn,t=hu(i),n=uu(i),s=new Pn(vt,Fn,vt),r=du(64),a=.88,o=.02,l=[];function c(u,d,x,v,m){let p=new On({color:3828266,roughness:.9});p.bumpMap=r,p.bumpScale=.12;for(let M=0;M<v;M++){let y=.08+Math.random()*m,T=.03+Math.random()*.03,U=new lt(new Vi(T*.5,T,y,6),p);U.position.set(u+(Math.random()-.5)*.5,x+y/2,d+(Math.random()-.5)*.5),U.rotation.x=(Math.random()-.5)*.2,U.rotation.z=(Math.random()-.5)*.2,U.castShadow=!0,e.add(U)}}let h=.12;function f(u,d,x,v){let m=x+.02,p=[[u-h,m,d-h],[u+h,m,d+h],[u-h,m,d+h],[u+h,m,d-h],[u-h+.06,m,d-h+.06],[u+h-.06,m,d+h-.06],[u-h+.06,m,d+h-.06],[u+h-.06,m,d-h+.06]],M=new Float32Array(p.length*3);p.forEach((I,L)=>{M[L*3]=I[0],M[L*3+1]=I[1],M[L*3+2]=I[2]});let y=new kn;y.setAttribute("position",new zn(M,3)),y.computeBoundingSphere();let T=new gr({color:855309,linewidth:1}),U=new Ta(y,T);v.add(U)}for(let u=0;u<i.h;u++)for(let d=0;d<i.w;d++){let x=i.type[u][d],v=i.height[u][d],m=cu[x],p=Fn+v*.35,M=p/2+Fn/2,y=new On({roughness:Math.max(.7,Math.min(1,a+(Math.random()-.5)*.18)),metalness:Math.max(0,Math.min(.1,o+(Math.random()-.5)*.04))}),T=(m>>16&255)/255,U=(m>>8&255)/255,I=(m&255)/255,L=T,Y=U,b=I;if(x===je.PATH||x===je.TREE||x===je.ROCK){let se=Math.random()*.45;L=T*(1-se)+.42*se,Y=U*(1-se)+.26*se,b=I*(1-se)+.14*se}(x===je.TREE||x===je.ROCK)&&(L*=.5,Y*=.5,b*=.5);let w=1+(Math.random()-.5)*.12;y.color.setRGB(Math.min(1,L*w),Math.min(1,Y*w),Math.min(1,b*w)),y.bumpMap=r,y.bumpScale=.12;let D=new lt(s,y);D.position.set(d*vt-t+vt/2,p/2,u*vt-n+vt/2),D.castShadow=!0,D.receiveShadow=!0,D.userData={gx:d,gy:u,type:x},e.add(D);let O=d*vt-t+vt/2,j=u*vt-n+vt/2;if(x===je.TREE&&f(O,j,M,e),x===je.TREE){let C=new Kn;C.position.set(O,M,j),C.userData.swayPhase=Math.random()*Math.PI*2,C.userData.sway=Math.random()<1/3;let G=d===0||d===i.w-1||u===0||u===i.h-1,N=G?.75+Math.random()*.35:.5+Math.random()*.2,se=new On({color:4007959,roughness:.95});se.bumpMap=r,se.bumpScale=.15;let $=new lt(new Vi(.12,.14,N,8),se);$.position.set(0,N/2,0),$.castShadow=!0,C.add($);let Q=r.clone();Q.repeat.set(3,3);let ne=new On({color:2972205,roughness:.9});if(ne.bumpMap=Q,ne.bumpScale=.22,Math.random()<.5){let fe=G?.52:.45,te=G?1.05:.9,he=.12,be=te*.5,Be=te*.45,ze=te*.4,Je=new lt(new Gi(fe,be,8),ne);Je.position.set(0,N+be/2,0),Je.castShadow=!0,C.add(Je);let it=new lt(new Gi(fe*.75,Be,8),ne);it.position.set(0,N+be-he+Be/2,0),it.castShadow=!0,C.add(it);let Qe=new lt(new Gi(fe*.5,ze,8),ne);Qe.position.set(0,N+be-he+Be-he+ze/2,0),Qe.castShadow=!0,C.add(Qe)}else{let fe=N-.25,te=6+Math.floor(Math.random()*3);for(let he=0;he<te;he++){let be=.14+Math.random()*.22,Be=(Math.random()-.5)*.5,ze=(Math.random()-.5)*.5,Je=Math.random()*.4,it=new lt(new Wi(be,8,6),ne);it.position.set(Be,fe+Je+be*.5,ze),it.castShadow=!0,C.add(it)}}e.add(C),l.push(C)}else if(x===je.WATER){let C=cu[je.WATER],G=(C>>16&255)/255,N=(C>>8&255)/255,se=(C&255)/255,$=1+(Math.random()-.5)*.12,Q=new On({color:new bt().setRGB(Math.min(1,G*$),Math.min(1,N*$),Math.min(1,se*$)),roughness:.08,metalness:.45,transparent:!0,opacity:.94,bumpMap:r,bumpScale:.03}),ne=new lt(new bi(vt,vt),Q);ne.rotation.x=-Math.PI/2,ne.position.set(O,M+.02,j),ne.receiveShadow=!0,e.add(ne)}else if(x===je.ROCK){let C=new On({color:6974058,roughness:.9});C.bumpMap=r,C.bumpScale=.2;let G=(Q,ne,ue)=>{let fe=new lt(new Ia(Q,0),C);fe.position.set(O+ne,M+Q-.2,j+ue),fe.rotation.set(Math.random(),Math.random(),Math.random()),fe.castShadow=!0,e.add(fe)},N=.32+Math.random()*.14,se=.2+Math.random()*.12,$=.12+Math.random()*.12;G(N,(Math.random()-.5)*.15,(Math.random()-.5)*.15),G(se,(Math.random()-.5)*.25,(Math.random()-.5)*.25),G($,(Math.random()-.5)*.28,(Math.random()-.5)*.28)}}return e.userData.treeGroups=l,e}function m_(){let i=document.querySelector("#mode-select-overlay .mode-select-instructions");i&&console.log(i.textContent.trim());let e=h_(),t=document.getElementById("canvas-wrap"),n=new Ea;n.background=new bt(1711652),n.fog=new ba(1711652,30,90);let s=e.w*vt/2,r=e.h*vt/2,a=new Un(50,t.clientWidth/t.clientHeight,.1,200),o=17,l=new F(12,38,16).normalize().multiplyScalar(o),c=new F,h=new F,f=new ii(new F(0,1,0),0),u=new F,d=new F,x=!1,v=!1,m=!1,p=null,M=5,y=.004,T=-Math.PI*.4,U=Math.PI*.4,I=new F,L={x:0,y:0},Y=1,b=40,w=.08,D=.15,O=null,j=new Na(16777215,.45);n.add(j);let C=new Ua(16774630,1.1);C.position.set(30,50,20),C.castShadow=!0,C.shadow.mapSize.width=2048,C.shadow.mapSize.height=2048,C.shadow.camera.near=1,C.shadow.camera.far=120,C.shadow.camera.left=-50,C.shadow.camera.right=50,C.shadow.camera.top=50,C.shadow.camera.bottom=-50,n.add(C);let G=p_(e);n.add(G);let N=[],se=1,$=new Map,Q=du(64),ne=hu(e),ue=uu(e);function fe(_,g){let R=(Fn+e.height[g][_]*.35)/2+Fn/2;return new F(_*vt-ne+vt/2,R,g*vt-ue+vt/2)}function te(_,g){let P=(_>>16&255)/255,R=(_>>8&255)/255,k=(_&255)/255,z=1+(Math.random()-.5)*g;return new bt(Math.min(1,P*z),Math.min(1,R*z),Math.min(1,k*z))}function he(_,g,P){let R=Ga[g]||Ga.knight,k=te(R.primary,.08),z=te(R.secondary,.08),V=Ut[g]&&Ut[g].gender||"male",H=P??4006676,q=te(R.skin!=null?R.skin:15250592,.06),ie=te(H,.08),de=()=>(Math.random()-.5)*.08,Re=()=>(Math.random()-.5)*.04,Ze=new On({color:k,metalness:Math.max(0,.25+Re()),roughness:Math.max(.3,Math.min(1,.5+de()))});Ze.bumpMap=Q,Ze.bumpScale=.1;let ae=new On({color:z,metalness:Math.max(0,.2+Re()),roughness:Math.max(.3,Math.min(1,.55+de()))});ae.bumpMap=Q,ae.bumpScale=.1;let He=new On({color:k,metalness:Math.max(0,.25+Re()),roughness:Math.max(.3,Math.min(1,.5+de()))});He.bumpMap=Q,He.bumpScale=.1;let At=new On({color:q,metalness:.1,roughness:Math.max(.5,Math.min(1,.7+de()))});At.bumpMap=Q,At.bumpScale=.05;let Pt=new Kn,Tt=.28,Zt=.08,Qt=.08,un=new lt(new Pn(Zt,Tt,Qt),ae);un.position.set(-.06,Tt/2,0),un.castShadow=!0,Pt.add(un);let ln=new lt(new Pn(Zt,Tt,Qt),ae);ln.position.set(.06,Tt/2,0),ln.castShadow=!0,Pt.add(ln);let zt=.28,Rt=.2,kt=.12,yt=new lt(new Pn(Rt,zt,kt),Ze);yt.position.set(0,Tt+zt/2,0),yt.castShadow=!0,Pt.add(yt);let en=.06,En=.22,Mn=.06,tn=new lt(new Pn(en,En,Mn),He);tn.position.set(-(Rt/2+en/2),Tt+zt-.08,0),tn.castShadow=!0,Pt.add(tn);let Vn=new lt(new Pn(en,En,Mn),He);if(Vn.position.set(Rt/2+en/2,Tt+zt-.08,0),Vn.castShadow=!0,Pt.add(Vn),R.cape!=null){let at=Rt*1.35,Ue=Tt+zt*.15,Ve=new bi(at,Ue),mt=new On({color:te(R.cape,.08),metalness:.15,roughness:Math.max(.5,Math.min(1,.8+de())),side:cn});mt.bumpMap=Q,mt.bumpScale=.12;let Tn=new lt(Ve,mt);Tn.position.set(0,Tt+Ue/2-.02,-kt/2-.02),Tn.rotation.y=Math.PI,Tn.castShadow=!0,Pt.add(Tn)}let re=.1,pe=new lt(new Wi(re,12,10),At);pe.position.set(0,Tt+zt+re,0),pe.castShadow=!0,Pt.add(pe);let Me=new nn({color:1710638}),oe=new lt(new Pn(.032,.004,.004),Me);oe.position.set(-.032,.028,re*.92),pe.add(oe);let ce=new lt(new Pn(.032,.004,.004),Me);ce.position.set(.032,.028,re*.92),pe.add(ce);let xe=new nn({color:2957087}),ye=new lt(new Pn(.045,.012,.008),xe);ye.position.set(0,-.028,re*.92),pe.add(ye);let we=new On({color:ie,metalness:.05,roughness:Math.max(.6,Math.min(1,.85+de()))});if(we.bumpMap=Q,we.bumpScale=.15,V==="female"){let at=new lt(new Wi(re*.85,10,8,0,Math.PI*2,0,Math.PI*.45),we);at.position.set(0,re*.35,-re*.2),at.castShadow=!0,pe.add(at);let Ue=new lt(new Pn(re*1.1,re*2.2,re*.5),we);Ue.position.set(0,-re*.6,-re*.95),Ue.castShadow=!0,pe.add(Ue)}else{let at=new lt(new Wi(re*.82,10,8,0,Math.PI*2,0,Math.PI*.35),we);at.position.set(0,re*.5,-re*.15),at.castShadow=!0,pe.add(at)}return Pt.userData.leftLeg=un,Pt.userData.rightLeg=ln,Pt.userData.leftArm=tn,Pt.userData.rightArm=Vn,Pt}function be(_,g){let P=_.userData;if(!P.leftLeg)return;let R=g*Math.PI*2,k=.35,z=.28;P.leftLeg.rotation.x=Math.sin(R)*k,P.rightLeg.rotation.x=Math.sin(R+Math.PI)*k,P.leftArm.rotation.y=Math.sin(R+Math.PI)*z,P.rightArm.rotation.y=Math.sin(R)*z}function Be(_){let g=_.userData;g.leftLeg&&(g.leftLeg.rotation.x=0,g.rightLeg.rotation.x=0,g.leftArm.rotation.y=0,g.rightArm.rotation.y=0)}function ze(_){let g=he(_.player,_.class,_.hairColor);g.position.copy(fe(_.x,_.y)),g.castShadow=!0,g.userData.unitId=_.id;let P=.28,R=.28,k=.12,z=.18,V=.04,H=new bi(z,V),q=new nn({color:6037528,side:cn,depthTest:!0,depthWrite:!1}),ie=new lt(H,q);ie.position.set(0,P+R/2,k/2+.02),ie.rotation.x=-Math.PI/2,ie.rotation.z=Math.PI/4,ie.visible=_.maxHp>0&&_.hp<_.maxHp&&_.hp>0,g.add(ie),g.userData.slashMark=ie,n.add(g),$.set(_.id,g),Qe(g,_.maxHp>0&&_.hp/_.maxHp<.35)}function Je(_){let g=$.get(_.id);!g||!g.userData.slashMark||(g.userData.slashMark.visible=_.maxHp>0&&_.hp<_.maxHp&&_.hp>0)}let it=.35;function Qe(_,g){if(_)if(g){_.rotation.x=.35,_.scale.setScalar(.96);let P=_.userData;P&&P.leftArm&&P.rightArm&&(P.leftArm.rotation.y=.2,P.rightArm.rotation.y=.2),_.traverse(R=>{R.isMesh&&R.material&&R.material.color&&(R.userData.originalColor||(R.userData.originalColor=R.material.color.clone()),R.material.color.copy(R.userData.originalColor).multiplyScalar(.82))})}else{_.rotation.x=0,_.scale.setScalar(1);let P=_.userData;P&&P.leftArm&&P.rightArm&&(P.leftArm.rotation.y=0,P.rightArm.rotation.y=0),_.traverse(R=>{R.isMesh&&R.material&&R.userData.originalColor&&R.material.color.copy(R.userData.originalColor)})}}function wt(_){if(_.level>=3)return;let g=_.maxHp>0?_.hp/_.maxHp:1;_.level+=1;let P=k=>Math.max(1,Math.ceil(k*1.1)),R=k=>Math.max(1,Math.ceil(k*1.1));_.maxHp=P(_.maxHp),_.maxMp=P(_.maxMp),_.hp=Math.max(1,Math.min(_.maxHp,Math.ceil(g*_.maxHp))),_.mp=Math.max(1,Math.min(_.maxMp,Math.ceil(g*_.maxMp))),_.str=R(_.str),_.agi=R(_.agi),_.vit=R(_.vit),_.dex=R(_.dex),_.luk=R(_.luk),_.int=R(_.int),_.range>2&&(_.range=R(_.range)),console.log("[LEVEL UP]",`${_.name} (${_.class}, P${_.player})`,`\u2192 Lv.${_.level}`,`| HP ${_.hp}/${_.maxHp} MP ${_.mp}/${_.maxMp} STR ${_.str} VIT ${_.vit}`),J(_)}function J(_){let g=$.get(_.id),P=_.level===3?"levelup level3":_.level===2?"levelup level2":"levelup";if(Cu(_,P),!g)return;let R=performance.now();function k(z){Wt();let V=z-R,H=Math.min(1,V/S),q=H<.5?1+.35*(H/.5):1+.35*(1-(H-.5)/.5);g.scale.setScalar(q),H<1?requestAnimationFrame(k):g.scale.setScalar(1)}requestAnimationFrame(k)}let yn=430,tt=280,ct=.45,ke=160,Ft=280,_t=350,A=500,S=600,K=!1,_e=new F,me=new F,ge=new F,Ge=new F;function Ce(_=!1){let g=null;if(We==="playing"&&Ae.length>0){let z=Ae[qe];g=N.find(V=>V.id===z&&V.hp>0)}if(g||(g=N.find(z=>z.player===Ne&&z.hp>0)),!g)return;let P=a.position.distanceTo(c);if(P<.1&&(P=o),h.copy(a.position).sub(c).normalize(),h.lengthSq()<.01&&h.copy(l).normalize(),ge.copy(fe(g.x,g.y)),Ge.copy(ge).add(h.clone().multiplyScalar(P)),_||K){c.copy(ge),a.position.copy(Ge),a.lookAt(c),Wt();return}K=!0,_e.copy(c),me.copy(a.position);let R=performance.now();function k(z){Wt();let V=Math.min(1,(z-R)/yn),H=V*(2-V);c.lerpVectors(_e,ge,H),a.position.lerpVectors(me,Ge,H),a.lookAt(c),V<1?requestAnimationFrame(k):K=!1}requestAnimationFrame(k)}let Le=0,Ne=1,We="draft",le="pvp",It="balanced",ut=new Set(Va),rt=0,Oe=null,De=new Set,Ae=[],qe=0,dt=null,Xe=new Map,Se=null;function B(_){if(!_||_.hp<=0)return;Se=_.id;let g=document.getElementById("unit-preview-card"),P=document.getElementById("unit-preview-image"),R=document.getElementById("unit-preview-name"),k=document.getElementById("unit-preview-meta"),z=document.getElementById("unit-preview-stats");g.classList.remove("player-1","player-2"),g.classList.add(_.player===1?"player-1":"player-2"),g.classList.toggle("level-2",_.level>=2&&_.level<3),g.classList.toggle("level-3",_.level>=3),P.src=br[_.class]||"",P.alt=_.name,R.textContent=_.name,k.textContent=`Lv.${_.level} ${_.class} \u2014 Player ${_.player}`,z.innerHTML=[["HP",`${_.hp}/${_.maxHp}`],["MP",`${_.mp}/${_.maxMp}`],["STR",Pe(_,"str")],["AGI",Pe(_,"agi")],["VIT",Pe(_,"vit")],["DEX",Pe(_,"dex")],["LUK",Pe(_,"luk")],["INT",Pe(_,"int")]].map(([H,q])=>`<span class="stat-label">${H}</span><span class="stat-val${H==="HP"?" stat-val-hp":""}">${q}</span>`).join("");let V=_.maxHp>0&&_.hp/_.maxHp<.3;g.classList.toggle("low-hp",V),g.style.display="block"}function Ee(){Se=null;let _=document.getElementById("unit-preview-card");_.classList.remove("low-hp","level-2","level-3"),_.style.display="none"}let ve=!1,Ye=!1,$e=!1,gt=null,st=!1,Ct=!1,Gt=!1,St=[],Nt=new Kn;n.add(Nt);let jt=[],qs=!0,cs=0,qi=0;function Wt(){qs=!0,cs=performance.now()}let oi=new Kn;n.add(oi);let hs=[],Tr=vt,qa=.02,Ya=3368703,$a=13382451;function E(_,g){let P=_/2,R=P-g,k=new xr;k.moveTo(-P,-P),k.lineTo(P,-P),k.lineTo(P,P),k.lineTo(-P,P),k.lineTo(-P,-P);let z=new Vs;return z.moveTo(-R,-R),z.lineTo(R,-R),z.lineTo(R,R),z.lineTo(-R,R),z.lineTo(-R,-R),k.holes.push(z),new La(k)}let W=E(Tr,qa);function Z(_=null){for(hs.forEach(g=>g.dispose()),hs.length=0;oi.children.length;){let g=oi.children[0];oi.remove(g)}N.filter(g=>g.hp>0&&g.id!==_).forEach(g=>{let P=g.x,R=g.y,z=(Fn+e.height[R][P]*.35)/2+Fn/2,V=P*vt-ne+vt/2,H=R*vt-ue+vt/2,q=z+.02,ie=g.player===1?Ya:$a,de=new nn({color:ie,side:cn}),Re=new lt(W,de);Re.rotation.x=-Math.PI/2,Re.position.set(V,q,H),oi.add(Re),hs.push(de)}),Wt()}let ee=1.15,X=(()=>{let _=new lt(new Gi(.1,.25,8),new nn({color:16768324}));return _.rotation.x=Math.PI,_.visible=!1,n.add(_),_})();function Ie(){if(We!=="playing"||Ae.length===0||Gt){X.visible=!1,X.removeFromParent(),n.add(X);return}let _=Ae[qe],g=N.find(R=>R.id===_);if(!g||g.hp<=0){X.visible=!1,X.removeFromParent(),n.add(X);return}let P=$.get(_);if(!P){X.visible=!1;return}X.removeFromParent(),P.add(X),X.position.set(0,ee,0),X.visible=!0}function Ke(_){let g=[[0,1],[0,-1],[1,0],[-1,0]],P=[];for(let[R,k]of g){let z=_.x+R,V=_.y+k;!Er(e,z,V)||N.some(q=>q.id!==_.id&&q.x===z&&q.y===V&&q.hp>0)||P.push(Math.atan2(R,k))}return P}function nt(_){if(St.length===0)return _;if(St.length===1)return St[0];let g=St[0],P=Math.abs(ot(_-g));for(let R=1;R<St.length;R++){let k=Math.abs(ot(_-St[R]));k<P&&(P=k,g=St[R])}return g}function ot(_){for(;_>Math.PI;)_-=2*Math.PI;for(;_<-Math.PI;)_+=2*Math.PI;return _}let xt=1.2,et=(()=>{let _=new lt(new Gi(.12,.35,8),new nn({color:4500223}));return _.rotation.x=-Math.PI/2,_.visible=!1,n.add(_),_})();function ft(_,g){if(!Gt||Ae.length===0||St.length===0)return;let P=Ae[qe],R=N.find(Re=>Re.id===P),k=$.get(P);if(!R||!k)return;Rr(_,g),Ei.setFromCamera(Ti,a);let z=Ei.intersectObjects(G.children,!0);if(z.length===0)return;let V=fe(R.x,R.y),H=z[0].point,q=H.x-V.x,ie=H.z-V.z;if(q*q+ie*ie<1e-6)return;let de=Math.atan2(q,ie);k.rotation.y=nt(de)}function Yt(){if(Ae.length===0)return;let _=Ae[qe],g=N.find(k=>k.id===_),P=$.get(_);if(!g||!P)return;St=[[0,1],[0,-1],[1,0],[-1,0]].map(([k,z])=>Math.atan2(k,z)),et.removeFromParent(),P.add(et),et.position.set(0,xt,0),et.rotation.x=-Math.PI/2,et.rotation.y=0,et.rotation.z=Math.PI,et.visible=!0,P.rotation.y=St[0]}function In(){et.visible=!1,et.removeFromParent(),n.add(et)}let sn=(()=>{let _=ka,g=[1];for(let P=0;P<Math.floor((_-1)/2);P++)g.push(2,2,1,1);return _%2===1?g.push(2):(g.push(2,2),g.push(1)),g})();function hn(){return sn[rt]}function Bt(){let _=hn(),g=0;for(let P=0;P<rt;P++)sn[P]===_&&g++;return g+1}function pt(){We="draft",rt=0,ut=new Set(Va),Oe=null,De.clear(),on(),Ht(),document.getElementById("turn-menu").style.display="none",document.getElementById("draft-panel").style.display="flex"}function Ys(){for(We="playing",Le=0,Ae=N.slice().sort((P,R)=>R.agi!==P.agi?R.agi-P.agi:R.dex-P.dex).map(P=>P.id),qe=0;qe<Ae.length&&N.find(P=>P.id===Ae[qe]).hp<=0;)qe++;qe>=Ae.length&&(qe=0);let _=N.find(P=>P.id===Ae[qe]);Ne=_?_.player:1,st=!1,Ct=!1,dt=Ae[qe],document.getElementById("draft-panel").style.display="none",document.getElementById("turn-menu").style.display="flex";let g=document.getElementById("draft-placement-card");g&&(g.style.display="none",g.innerHTML=""),on(),Z(),Lt(),Ie(),Ce(!0)}function Ht(){let _=document.getElementById("draft-panel"),g=document.getElementById("draft-title"),P=document.getElementById("draft-classes"),R=document.getElementById("draft-message"),k=document.getElementById("turn-player"),z=document.getElementById("draft-placement-card");if(Oe){_.style.display="none",k.textContent=`Draft: Player ${hn()} \u2014 place ${Ut[Oe].name}`;let H=hn();z.style.display="flex",z.classList.remove("player-1","player-2"),z.classList.add("player-"+H),z.style.left=H===1?"24px":"",z.style.right=H===2?"24px":"";let q=[...N.filter(Re=>Re.player===H).map(Re=>Re.class),Oe],ie=(Re,Ze)=>{let ae=Ut[Re];return`
        <div class="draft-class-card${Ze?" draft-class-card-current":""}">
          <img class="draft-class-card-image" src="${br[Re]||""}" alt="${ae.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="draft-class-card-body">
            <div class="draft-class-card-name">${ae.name}</div>
            <div class="draft-class-card-stats">
              <span class="draft-stat-label">HP</span><span class="draft-stat-value">${ae.hp}</span>
              <span class="draft-stat-label">MP</span><span class="draft-stat-value">${ae.mp}</span>
              <span class="draft-stat-label">STR</span><span class="draft-stat-value">${ae.str}</span>
              <span class="draft-stat-label">AGI</span><span class="draft-stat-value">${ae.agi}</span>
              <span class="draft-stat-label">VIT</span><span class="draft-stat-value">${ae.vit}</span>
              <span class="draft-stat-label">DEX</span><span class="draft-stat-value">${ae.dex}</span>
              <span class="draft-stat-label">LUK</span><span class="draft-stat-value">${ae.luk}</span>
              <span class="draft-stat-label">INT</span><span class="draft-stat-value">${ae.int}</span>
              <span class="draft-stat-label">Range</span><span class="draft-stat-value">${ae.range}</span>
            </div>
          </div>
        </div>
      `},de=3;if(q.length>de){z.classList.add("draft-placement-cols");let Re=[];for(let ae=0;ae<q.length;ae+=de)Re.push(q.slice(ae,ae+de));let Ze=q.length-1;z.innerHTML=Re.map((ae,He)=>{let At=He===Re.length-1,Pt=ae.map((Tt,Zt)=>{let un=He*de+Zt===Ze;return ie(Tt,un)}).join("");return`<div class="draft-placement-col${At?" draft-placement-col-current":""}">${Pt}</div>`}).join("")}else z.classList.remove("draft-placement-cols"),z.innerHTML=q.map((Re,Ze)=>{let ae=Ze===q.length-1;return ie(Re,ae)}).join("");le==="pvcpu"&&hn()===2&&setTimeout(Zs,500),le==="cvcpu"&&setTimeout(Zs,500);return}z.style.display="none",z.innerHTML="",We==="draft"&&(_.style.display="flex");let V=hn();g.textContent=`Player ${V}: Pick a class (${Bt()}/${ka})`,R.textContent="",P.innerHTML="",k.textContent=`Draft: Player ${V} \u2014 pick a class`,c_([...Va]).forEach(H=>{let q=ut.has(H),ie=Ut[H],de=document.createElement("button");de.type="button",de.className="draft-class-card"+(q?"":" draft-class-card-selected"),de.disabled=!q,de.innerHTML=`
          <img class="draft-class-card-image" src="${br[H]||""}" alt="${ie.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
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
        `,q&&de.addEventListener("click",()=>li(H)),P.appendChild(de)}),le==="pvcpu"&&hn()===2&&setTimeout(Zs,500),le==="cvcpu"&&setTimeout(Zs,500)}function li(_){if(!ut.has(_)||Oe)return;Oe=_;let g=hn(),P=new Set(N.map(z=>z.y*e.w+z.x)),R=u_(e,g,P),k=ou(e,R);De=new Set(k.map(z=>z.gy*e.w+z.gx)),vu(k),Ht()}function $s(_,g){if(!Oe)return;let P=hn(),R=g*e.w+_;if(!De.has(R))return;let k=Ut[Oe],z={id:se++,player:P,x:_,y:g,level:1,name:k.name,class:Oe,hairColor:(Ga[Oe]||Ga.knight).hair,hp:k.hp,maxHp:k.maxHp,mp:k.mp,maxMp:k.maxMp,str:k.str,agi:k.agi,vit:k.vit,dex:k.dex,luk:k.luk,int:k.int,range:k.range};N.push(z),ze(z);let V=$.get(z.id);V&&(V.rotation.y=z.player===1?Math.PI:0),ut.delete(Oe),Oe=null,De.clear(),on();let H=document.getElementById("draft-placement-card");if(H&&(H.style.display="none",H.innerHTML=""),rt++,rt>=2*ka){Ys();return}let q=hn(),ie=Bt(),de=document.getElementById("draft-panel"),Re=document.getElementById("draft-title"),Ze=document.getElementById("draft-message"),ae=document.getElementById("draft-classes"),He=document.getElementById("turn-player");de&&Re&&ae&&He&&(de.style.display="flex",Re.textContent=`Player ${q}: Pick a class (${ie}/${ka})`,Ze&&(Ze.textContent="Get ready\u2026"),ae.innerHTML="",He.textContent=`Draft: Player ${q} \u2014 pick a class`),setTimeout(Ht,1500)}function Lt(){let _=Lt._cache||(Lt._cache={}),g=_.turnEl||(_.turnEl=document.getElementById("turn-player")),P=_.menuLabel||(_.menuLabel=document.getElementById("menu-label")),R=_.turnMenu||(_.turnMenu=document.getElementById("turn-menu")),k=_.unitInfo||(_.unitInfo=document.getElementById("unit-info")),z=_.unitNameEl||(_.unitNameEl=document.getElementById("unit-name")),V=_.unitLevelClassEl||(_.unitLevelClassEl=document.getElementById("unit-level-class")),H=_.unitStatsEl||(_.unitStatsEl=document.getElementById("unit-stats")),q=_.unitClassImageEl||(_.unitClassImageEl=document.getElementById("unit-class-image"));if(We==="playing"&&N.forEach(ae=>{if(ae.hp<=0)return;let He=$.get(ae.id);He&&Qe(He,ae.maxHp>0&&ae.hp/ae.maxHp<it)}),R.classList.remove("player-1","player-2"),R.classList.add(Ne===1?"player-1":"player-2"),R.classList.toggle("level-2",!1),R.classList.toggle("level-3",!1),We==="playing"&&Ae.length>0){let ae=Ae[qe];N.find(At=>At.id===ae&&At.hp>0)&&(dt==null||!N.find(At=>At.id===dt&&At.hp>0))&&(dt=ae)}if(dt!=null){let ae=N.find(He=>He.id===dt);if(ae&&ae.hp>0){k.classList.remove("no-unit");let He=ae.maxHp>0&&ae.hp/ae.maxHp<.25;R.classList.toggle("low-hp",He),R.classList.toggle("level-2",ae.level>=2&&ae.level<3),R.classList.toggle("level-3",ae.level>=3),z.textContent=ae.name,V.textContent=`Lv.${ae.level} ${ae.class}`,q.src=br[ae.class]||"",q.alt=ae.name,H.innerHTML=[["HP",`${ae.hp}/${ae.maxHp}`],["MP",`${ae.mp}/${ae.maxMp}`],["STR",Pe(ae,"str")],["AGI",Pe(ae,"agi")],["VIT",Pe(ae,"vit")],["DEX",Pe(ae,"dex")],["LUK",Pe(ae,"luk")],["INT",Pe(ae,"int")]].map(([At,Pt])=>`<span>${At}</span><span class="stat-val${At==="HP"?" stat-val-hp":""}">${Pt}</span>`).join("")}else R.classList.remove("low-hp","level-2","level-3"),k.classList.add("no-unit"),z.textContent="\u2014 Select a unit \u2014",V.textContent="",H.textContent="",q.src="",q.alt=""}else R.classList.remove("low-hp","level-2","level-3"),k.classList.add("no-unit"),z.textContent="\u2014 Select a unit \u2014",V.textContent="",H.textContent="",q.src="",q.alt="";if(dt!=null)g.textContent=`Player ${Ne} \u2014 Unit ${z.innerHTML} active`;else{let ae=Ae.length?N.find(He=>He.id===Ae[qe]):null;g.textContent=ae?`${ae.name} (Player ${Ne})`:`Player ${Ne}`}P.textContent=`Player ${Ne}`;let ie=_.btnAttack||(_.btnAttack=document.getElementById("btn-attack")),de=_.btnSkill||(_.btnSkill=document.getElementById("btn-skill")),Re=_.btnSpell||(_.btnSpell=document.getElementById("btn-spell")),Ze=_.btnEnd||(_.btnEnd=document.getElementById("btn-end"));if(le==="cvcpu"&&We==="playing")ie.disabled=!0,de.disabled=!0,Re.disabled=!0,Ze&&(Ze.disabled=!0),g.textContent=`Player ${Ne} (CPU)`;else if(Gt)ie.disabled=!0,de.disabled=!0,Re.disabled=!0,g.textContent="Click on map to choose facing direction";else if(We==="playing"){ie.disabled=Ct;let ae=Ae.length?Ae[qe]:null,He=ae?N.find(Tt=>Tt.id===ae&&Tt.hp>0):null,At=le!=="cvcpu"&&(le!=="pvcpu"||Ne===1),Pt=At&&He&&!Ct?Ar(He):[];de.disabled=Ct||!At||Pt.length===0,Re.disabled=!1,Ze&&(Ze.disabled=!1)}if(We==="playing"){let ae=Math.min(Le+1,os);g.textContent=(g.textContent||"")+` \u2014 Turn ${ae}/${os}`;let He=_.turnsLeftEl||(_.turnsLeftEl=document.getElementById("turns-left")),At=_.turnsLeftValueEl||(_.turnsLeftValueEl=document.getElementById("turns-left-value"));if(He&&At){He.style.display="";let Pt=Math.max(0,os-Le);At.textContent=String(Pt),He.classList.toggle("turns-left-low",Pt<=10)}}else{let ae=_.turnsLeftEl||(_.turnsLeftEl=document.getElementById("turns-left"));ae&&(ae.style.display="none")}We==="playing"&&Ja(Ne)&&!ve&&setTimeout(an,700)}function Xt(){Wt(),Ee(),Ye=!1,$e=!1,gt=null,Gt=!1,St=[],In(),on();let _=Ae.length;if(_===0)return;let g=Ae[qe],P=N.find(V=>V.id===g);if(P&&P.tempDebuff&&P.tempDebuff.duration--,P&&P.tempDebuff&&P.tempDebuff.duration<=0&&(P.tempDebuff=void 0),P&&P.tempBuff&&P.tempBuff.duration--,P&&P.tempBuff&&P.tempBuff.duration<=0&&(P.tempBuff=void 0),P&&P.hp>0){let V=Math.ceil(Pe(P,"int")*.15);P.mp=Math.min(P.maxMp,P.mp+V)}if(P&&P.hp>0){let V=P.x,H=P.y;e.type[H][V]===je.CENTER&&P.level===1&&wt(P);let q=P.player===1?je.BASE_TOP:je.BASE_BOTTOM;e.type[H][V]===q&&P.level===2&&wt(P)}if(Le++,Le>=os){Pu();return}let R=(qe+1)%_,k=0;for(;k<_;){let V=Ae[R],H=N.find(q=>q.id===V);if(H&&H.hp>0)break;R=(R+1)%_,k++}qe=R;let z=N.find(V=>V.id===Ae[qe]);Ne=z?z.player:1,st=!1,Ct=!1,dt=Ae[qe],Lt(),Ie(),Ce()}document.getElementById("btn-attack").addEventListener("click",()=>{if(ve||Ct||We!=="playing"||Ae.length===0)return;Ee();let _=Ae[qe],g=N.find(k=>k.id===_);if(!g||g.hp<=0)return;let P=g.range!=null?g.range:1;dt=_,Ye=!0;let R=lu(e,g.x,g.y,P);Xe=new Map,R.forEach((k,z)=>{let V=z%e.w,H=Math.floor(z/e.w);ls(e,g.x,g.y,V,H)&&Xe.set(z,k)}),Mu(Xe),Lt()}),document.getElementById("btn-skill").addEventListener("click",_=>{if(_.preventDefault(),_.stopPropagation(),ve||Ct)return;let g=Ae[qe],P=g?N.find(H=>H.id===g&&H.hp>0):null;if(!P||P.player!==Ne)return;let R=document.getElementById("skill-list-overlay"),k=document.getElementById("btn-skill");if(!k)return;if(R&&R.style.display==="block"){R.style.display="none";return}let z=Ar(P),V=k.getBoundingClientRect();R||(R=document.createElement("div"),R.id="skill-list-overlay",R.className="skill-list-overlay",R.setAttribute("aria-hidden","true"),document.body.appendChild(R)),R.style.left=`${V.left}px`,R.style.top=`${V.top-4}px`,R.style.transform="translateY(-100%)",R.style.right="auto",R.style.bottom="auto",R.style.display="none",z.length===0?R.innerHTML='<div class="skill-option" style="cursor:default;color:#8b949e;">No skills available</div>':(R.innerHTML=z.map((H,q)=>`<button type="button" class="skill-option" data-skill-index="${q}" ${H.disabled?"disabled":""}>
          <span class="skill-name">${H.name}</span> <span class="skill-meta">${H.cost} MP \xB7 Lv.${H.level}</span><br/>
          <span class="skill-meta">${H.description}</span>
        </button>`).join(""),R.querySelectorAll(".skill-option").forEach((H,q)=>{H.addEventListener("click",ie=>{ie.preventDefault(),ie.stopPropagation();let de=z[q];if(gt=de,R.style.display="none",R.setAttribute("aria-hidden","true"),de.target==="self"){if(P.mp<de.cost)return;P.mp-=de.cost,Ct=!0,ja(P,P,de,{showFloatingCombatText:qn,handleUnitDeath:vn,updateUnitSlashVisibility:Je,updateTurnUI:Lt},()=>{on(),$e=!1,gt=null,Ks=new Set,st?Xt():Lt()}),Lt();return}$e=!0,Ye=!1,yu(P,de),Lt()})})),requestAnimationFrame(()=>{R.style.display="block",R.style.visibility="visible",R.setAttribute("aria-hidden","false")})}),document.addEventListener("click",_=>{let g=document.getElementById("skill-list-overlay"),P=document.getElementById("btn-skill"),R=document.querySelector(".skill-wrap");!g||g.style.display!=="block"||R&&R.contains(_.target)||g.contains(_.target)||(g.style.display="none",g.setAttribute("aria-hidden","true"))}),document.getElementById("btn-spell").addEventListener("click",()=>{}),document.getElementById("btn-end").addEventListener("click",()=>{if(ve||Gt||We!=="playing"||Ae.length===0)return;let _=Ae[qe],g=N.find(R=>R.id===_);if(!g||g.hp<=0)return;Gt=!0,dt=null,Ye=!1,Xe=new Map,on(),Yt(),Ie();let P=document.getElementById("turn-player");P.textContent="Click on map to choose facing direction",Lt()}),c.set(0,8,0),a.position.copy(c).add(l),a.lookAt(c);let rn=document.getElementById("mode-select-overlay"),ci=document.getElementById("mode-pvp"),us=document.getElementById("mode-pvcpu"),bn=document.getElementById("mode-cvcpu"),di=document.getElementById("ai-draft-preference"),wr=document.getElementById("mode-select-ai-draft");wr&&(wr.style.display=ru?"":"none"),di&&(o_.forEach(_=>{let g=document.createElement("option");g.value=_.value,g.textContent=_.label,di.appendChild(g)}),di.value=It,di.addEventListener("change",()=>{It=di.value}));let Qn=new Audio;Qn.loop=!0,Qn.volume=.3,Qn.preload="auto";let Za=window.location.href.replace(/[^/]*$/,""),Vl=typeof window.TACTICS_BGM_URL<"u"?window.TACTICS_BGM_URL:Za+(Za.includes("/src/")?"../assets/music/tavern.mp3":"assets/music/tavern.mp3");Qn.src=Vl,Qn.addEventListener("error",()=>{let _=Za+"assets/music/tavern.mp3";_!==Vl&&(Qn.src=_)});function Ka(){Qn.paused&&Qn.play().catch(()=>{})}rn&&ci&&us?(ci.addEventListener("click",()=>{Ka(),le="pvp",rn.classList.add("hidden"),pt()}),us.addEventListener("click",()=>{Ka(),le="pvcpu",rn.classList.add("hidden"),pt()}),bn&&(ru?bn.addEventListener("click",()=>{Ka(),le="cvcpu",rn.classList.add("hidden"),pt()}):bn.style.display="none")):pt();function Ja(_){return le==="pvcpu"&&_===2||le==="cvcpu"}function fu(){let _=Va.filter(z=>ut.has(z));if(_.length===0)return null;let g=It||"balanced";if(g==="random")return _[Math.floor(Math.random()*_.length)];if(g==="custom")return l_.filter(V=>ut.has(V))[0]??_[0]??null;let P=["hp","maxHp","mp","str","agi","vit","dex","luk","int"];function R(z){let V=Ut[z];if(!V)return 1/0;let H=P.map(ie=>V[ie]??0),q=H.reduce((ie,de)=>ie+de,0)/H.length;return H.reduce((ie,de)=>ie+(de-q)**2,0)/H.length}return g==="tanky"?[..._].sort((V,H)=>{let q=Ut[V]?.hp??0,ie=Ut[H]?.hp??0;return ie!==q?ie-q:(Ut[H]?.vit??0)-(Ut[V]?.vit??0)})[0]??null:g==="aggressive"?[..._].sort((V,H)=>{let q=Ut[V]?.str??0,ie=Ut[H]?.str??0;return ie!==q?ie-q:(Ut[H]?.agi??0)-(Ut[V]?.agi??0)})[0]??null:g==="scout"?[..._].sort((V,H)=>{let q=Ut[V]?.agi??0,ie=Ut[H]?.agi??0;return ie!==q?ie-q:(Ut[H]?.dex??0)-(Ut[V]?.dex??0)})[0]??null:g==="ranged"?[..._].sort((V,H)=>{let q=Ut[V]?.range??0,ie=Ut[H]?.range??0;return ie!==q?ie-q:(Ut[H]?.dex??0)-(Ut[V]?.dex??0)})[0]??null:g==="caster"?[..._].sort((V,H)=>{let q=Ut[V]?.int??0,ie=Ut[H]?.int??0;return ie!==q?ie-q:(Ut[H]?.mp??0)-(Ut[V]?.mp??0)})[0]??null:[..._].sort((z,V)=>{let H=Ut[z]?.hp??0,q=Ut[V]?.hp??0;return q!==H?q-H:R(z)-R(V)})[0]??null}function Zs(){if(We!=="draft"||!Ja(hn()))return;if(!Oe){let P=fu();P&&li(P),setTimeout(Zs,500);return}let _=Array.from(De).map(P=>({gx:P%e.w,gy:Math.floor(P/e.w)})),g=ou(e,_);if(g.length>0){let{gx:P,gy:R}=g[0];$s(P,R)}}function Gl(){let _=[];for(let g=0;g<e.h;g++)for(let P=0;P<e.w;P++)e.type[g][P]===je.CENTER&&_.push({gx:P,gy:g});return _}function pu(_){let g=[],P=_===1?je.BASE_TOP:je.BASE_BOTTOM;for(let R=0;R<e.h;R++)for(let k=0;k<e.w;k++)e.type[R][k]===P&&g.push({gx:k,gy:R});return g}function Xn(_,g,P,R){return Math.abs(_-P)+Math.abs(g-R)}function mu(_){let g=_.range!=null?_.range:1,P=[];for(let R of N){if(R.hp<=0||R.player===_.player)continue;let k=Xn(_.x,_.y,R.x,R.y);k<=g&&k>0&&ls(e,_.x,_.y,R.x,R.y)&&P.push({target:R,dist:k})}return P}function gu(_){let g=N.filter(P=>P.hp>0&&P.player===_.player&&P.id!==_.id);for(let P of g){let R=N.filter(k=>k.hp>0&&k.player!==_.player);for(let k of R){let z=k.range!=null?k.range:1,V=Xn(k.x,k.y,P.x,P.y);if(V<=z&&V>0&&ls(e,k.x,k.y,P.x,P.y))return!0}}return!1}function $t(_,g,P,R){let k=_.x,z=_.y,V=Xi(e,_.x,_.y,g,P,N,_);if(!V||V.length<=1){R&&R();return}dt=null,on(),ve=!0,Z(_.id),Wt();let H=$.get(_.id),q=1;function ie(){if(q>=V.length){_.x=V[V.length-1].x,_.y=V[V.length-1].y,ve=!1,Be(H),Z(),Xe=new Map,st=!0,R&&R();return}let de=V[q-1],Re=V[q],Ze=fe(de.x,de.y).clone(),ae=fe(Re.x,Re.y).clone(),He=ae.x-Ze.x,At=ae.z-Ze.z;He*He+At*At>1e-6&&(H.rotation.y=Math.atan2(He,At));let Pt=performance.now();function Tt(Zt){Wt();let Qt=Math.min(1,(Zt-Pt)/su),ln=(zt=>zt*zt*(3-2*zt))(Qt);H.position.lerpVectors(Ze,ae,ln),be(H,ln),Qt<1?requestAnimationFrame(Tt):(q++,ie())}requestAnimationFrame(Tt)}ie()}function Wl(_,g){let P=Pe(g,"agi")*.7+Pe(g,"luk")*.3,k=Math.random()*Math.max(.001,P)<=Pe(_,"dex"),z=0;if(k){let Rt=Pe(_,"str")*.7+Pe(_,"dex")*.2+Pe(_,"int")*.1-(Pe(g,"vit")*.3+Pe(g,"luk")*.2);z=Math.max(1,Math.floor(Rt))}Ct=!0,dt=null,Ye=!1,on(),console.log("[ATTACK]",`${_.name} (${_.class}, P${_.player})`,"\u2192",`${g.name} (${g.class}, P${g.player})`,k?`${z} dmg`:"MISS",`| ${g.name} HP ${g.hp} \u2192 ${Math.max(0,g.hp-z)}/${g.maxHp}`);let V=$.get(_.id);if(!V||!V.userData.rightArm){k?(g.hp=Math.max(0,g.hp-z),qn(g.x,g.y,String(z),!1),Je(g),g.hp<=0&&vn(g)):qn(g.x,g.y,"MISS",!0),setTimeout(st?()=>Xt():()=>Lt(),400);return}let H=fe(_.x,_.y).clone(),q=fe(g.x,g.y).clone(),ie=H.clone().lerp(q,.35),de=q.x-H.x,Re=q.z-H.z;if(de*de+Re*Re>1e-6&&(V.rotation.y=Math.atan2(de,Re)),(_.range!=null?_.range:1)>2){let xe=function(ye){Wt();let we=ye-ce,at=Math.min(1,we/Ft);if(yt.position.lerpVectors(Me,oe,at),!Vn&&at>=1&&(Vn=!0,n.remove(yt),Rt.dispose(),kt.dispose(),k?(g.hp=Math.max(0,g.hp-z),qn(g.x,g.y,String(z),!1),g.hp<=0&&(pe=!0),$.get(g.id)?re=ye:pe&&(vn(g),pe=!1),Je(g)):qn(g.x,g.y,"MISS",!0)),re!=null&&k){let Ue=$.get(g.id);if(Ue){let Ve=Math.min(1,(ye-re)/ke),mt=1-Ve;Ue.position.copy(En).add(Mn.clone().multiplyScalar(tn*mt)),Ve>=1&&(Ue.position.copy(En),re=null,pe&&(vn(g),pe=!1))}else re=null,pe&&(vn(g),pe=!1)}if(at<1)requestAnimationFrame(xe);else{let Ue=re==null;Ue&&pe&&(vn(g),pe=!1),Ue?setTimeout(st?()=>Xt():()=>Lt(),400):requestAnimationFrame(xe)}},Rt=new Vi(.035,.035,.4,6),kt=new nn({color:16763972}),yt=new lt(Rt,kt);yt.position.copy(H),yt.position.y+=.6;let en=q.clone().sub(H).normalize();yt.quaternion.setFromUnitVectors(new F(0,1,0),en),n.add(yt);let En=fe(g.x,g.y).clone(),Mn=q.clone().sub(H).normalize(),tn=.4,Vn=!1,re=null,pe=!1,Me=yt.position.clone(),oe=q.clone();oe.y+=.6;let ce=performance.now();requestAnimationFrame(xe);return}let He=!1,At=performance.now(),Pt=V.userData.rightArm,Tt=null,Zt=!1,Qt=fe(g.x,g.y).clone(),un=q.clone().sub(H).normalize(),ln=.4;function zt(Rt){Wt();let kt=Rt-At,yt=Math.min(1,kt/tt),en=yt<=.4?yt/.4:1,En=yt>.4?(yt-.4)/.6:0;yt<=.4?V.position.lerpVectors(H,ie,en):V.position.lerpVectors(ie,H,En);let Mn=yt<=.35?yt/.35:yt<=.7?(.7-yt)/.35:0;if(Pt.rotation.y=-Mn*1.1,!He&&yt>=ct&&(He=!0,k?(g.hp=Math.max(0,g.hp-z),qn(g.x,g.y,String(z),!1),g.hp<=0&&(Zt=!0),Je(g),$.get(g.id)?Tt=Rt:Zt&&(vn(g),Zt=!1)):qn(g.x,g.y,"MISS",!0)),Tt!=null&&k){let tn=$.get(g.id);if(tn){let Vn=Math.min(1,(Rt-Tt)/ke),re=1-Vn;tn.position.copy(Qt).add(un.clone().multiplyScalar(ln*re)),Vn>=1&&(tn.position.copy(Qt),Tt=null,Zt&&(vn(g),Zt=!1))}else Tt=null,Zt&&(vn(g),Zt=!1)}if(yt<1)requestAnimationFrame(zt);else{V.position.copy(H),Pt.rotation.y=0;let tn=Tt==null;tn&&Zt&&(vn(g),Zt=!1),tn?setTimeout(st?()=>Xt():()=>Lt(),400):requestAnimationFrame(zt)}}requestAnimationFrame(zt)}function _u(_,g){let P=fe(_,g);P.y+=.4;let R=new Wi(.1,12,12),k=new nn({color:8930559,transparent:!0,opacity:.9}),z=new lt(R,k);z.position.copy(P),n.add(z);let V=performance.now();function H(q){Wt();let ie=q-V,de=Math.min(1,ie/_t),Re=de*(2-de);z.scale.setScalar(Re*4.5),k.opacity=.9*(1-de),de<1?requestAnimationFrame(H):(n.remove(z),R.dispose(),k.dispose())}requestAnimationFrame(H)}function ja(_,g,P,R,k){if(P.target==="enemy"&&g==null){R.updateTurnUI&&R.updateTurnUI(),k&&k();return}let V=(P.range??0)>2&&g!=null&&(g.x!==_.x||g.y!==_.y),H=!V&&g!=null&&(g.x!==_.x||g.y!==_.y);if(!V&&!H){Wa(P.effectKey,_,g,R),R.updateTurnUI&&R.updateTurnUI(),k&&k();return}if(H){let ye=function(we){Wt();let at=we-xe,Ue=Math.min(1,at/tt),Ve=Ue<=.4?Ue/.4:1,mt=Ue>.4?(Ue-.4)/.6:0;Ue<=.4?Rt.position.lerpVectors(kt,en,Ve):Rt.position.lerpVectors(en,kt,mt);let Tn=Ue<=.35?Ue/.35:Ue<=.7?(.7-Ue)/.35:0;if(pe.rotation.y=-Tn*1.1,!Me&&Ue>=ct&&(Me=!0,Wa(P.effectKey,_,g,R),g.hp<=0&&(ce=!0),R.updateUnitSlashVisibility&&R.updateUnitSlashVisibility(g),$.get(g.id)?oe=we:ce&&(vn(g),ce=!1)),oe!=null){let ht=$.get(g.id);if(ht){let Dt=Math.min(1,(we-oe)/ke),gn=1-Dt;ht.position.copy(tn).add(Vn.clone().multiplyScalar(re*gn)),Dt>=1&&(ht.position.copy(tn),oe=null,ce&&(vn(g),ce=!1))}else oe=null,ce&&(vn(g),ce=!1)}Ue<1?requestAnimationFrame(ye):(Rt.position.copy(kt),pe.rotation.y=0,oe==null&&ce&&(vn(g),ce=!1),oe==null?(R.updateTurnUI&&R.updateTurnUI(),k&&k()):requestAnimationFrame(ye))},Rt=$.get(_.id);if(!Rt||!Rt.userData.rightArm){Wa(P.effectKey,_,g,R),R.updateUnitSlashVisibility&&R.updateUnitSlashVisibility(g),R.updateTurnUI&&R.updateTurnUI(),k&&k();return}let kt=fe(_.x,_.y).clone(),yt=fe(g.x,g.y).clone(),en=kt.clone().lerp(yt,.35),En=yt.x-kt.x,Mn=yt.z-kt.z;En*En+Mn*Mn>1e-6&&(Rt.rotation.y=Math.atan2(En,Mn));let tn=fe(g.x,g.y).clone(),Vn=yt.clone().sub(kt).normalize(),re=.4,pe=Rt.userData.rightArm,Me=!1,oe=null,ce=!1,xe=performance.now();requestAnimationFrame(ye);return}let q=fe(_.x,_.y).clone(),ie=fe(g.x,g.y).clone(),de=new Vi(.035,.035,.4,6),Re=new nn({color:16763972}),Ze=new lt(de,Re);Ze.position.copy(q),Ze.position.y+=.6;let ae=ie.clone().sub(q).normalize();Ze.quaternion.setFromUnitVectors(new F(0,1,0),ae),n.add(Ze);let He=Ze.position.clone(),At=ie.clone();At.y+=.6;let Pt=performance.now(),Tt=fe(g.x,g.y).clone(),Zt=ie.clone().sub(q).normalize(),Qt=.4,un=!1,ln=null;function zt(Rt){Wt();let kt=Rt-Pt,yt=Math.min(1,kt/Ft);if(Ze.position.lerpVectors(He,At,yt),!un&&yt>=1&&(un=!0,n.remove(Ze),de.dispose(),Re.dispose(),P.type==="spell"&&_u(g.x,g.y),Wa(P.effectKey,_,g,R),$.get(g.id)&&g.hp>0&&(ln=Rt),R.updateUnitSlashVisibility&&R.updateUnitSlashVisibility(g)),ln!=null){let en=$.get(g.id);if(en){let En=Math.min(1,(Rt-ln)/ke),Mn=1-En;en.position.copy(Tt).add(Zt.clone().multiplyScalar(Qt*Mn)),En>=1&&(en.position.copy(Tt),ln=null)}else ln=null}yt<1?requestAnimationFrame(zt):ln==null?(R.updateTurnUI&&R.updateTurnUI(),k&&k()):requestAnimationFrame(zt)}requestAnimationFrame(zt)}function an(){if(We!=="playing"||!Ja(Ne)||ve||Ae.length===0)return;let _=Ae[qe],g=N.find(re=>re.id===_);if(!g||g.hp<=0)return;let P=Xa(e,g.x,g.y,g.agi,N,g),R=[];P.forEach((re,pe)=>{if(re===0)return;let Me=pe%e.w,oe=Math.floor(pe/e.w);N.some(xe=>xe.id!==g.id&&xe.x===Me&&xe.y===oe&&xe.hp>0)||R.push({gx:Me,gy:oe,dist:re})});let k=mu(g),z=Gl(),V=pu(g.player),H=.25,q=.03,ie=g.maxHp>0&&g.hp/g.maxHp<H,de=g.maxHp>0&&g.hp/g.maxHp<q,Re=g.level===2,Ze=re=>N.some(pe=>pe.hp>0&&pe.x===re.gx&&pe.y===re.gy&&pe.id!==g.id),ae=z.filter(re=>!Ze(re)),He=V.filter(re=>!Ze(re)),At=Ar(g).filter(re=>!re.disabled&&g.mp>=re.cost&&re.target==="enemy"),Pt=At.length>0?Math.max(...At.map(re=>re.range||0)):0,Tt=Math.max(g.range!=null?g.range:1,Pt);function Zt(re,pe){if(pe.length===0)return null;let Me=null,oe=1/0;for(let ce of re){let xe=0;for(let ye of pe)xe+=Xn(ce.gx,ce.gy,ye.gx,ye.gy);xe<oe&&(oe=xe,Me=ce)}return Me}function Qt(re,pe){if(pe.length===0||re.length===0)return null;let Me=null,oe=1/0;for(let ce of re){let xe=Math.min(...pe.map(ye=>Xn(ce.gx,ce.gy,ye.gx,ye.gy)));xe<oe&&(oe=xe,Me=ce)}return Me}function un(re,pe){let Me=Tt,oe=[];for(let ce of N){if(ce.hp<=0||ce.player===g.player)continue;let xe=Xn(re,pe,ce.x,ce.y);xe<=Me&&xe>0&&ls(e,re,pe,ce.x,ce.y)&&oe.push({target:ce,dist:xe})}return oe}let ln=new Set(R.map(re=>re.gy*e.w+re.gx));function zt(re,pe){if(!re||re.length<=1)return null;let Me=Math.min(pe,re.length-1);for(let oe=Me;oe>=1;oe--){let ce=re[oe],xe=ce.y*e.w+ce.x;if(ln.has(xe))return{gx:ce.x,gy:ce.y}}return null}function Rt(re,pe){if(!re||re.length<=1)return null;let Me=Math.min(pe,re.length-1);for(let oe=Me;oe>=1;oe--){let ce=re[oe];if(!N.some(ye=>ye.id!==g.id&&ye.hp>0&&ye.x===ce.x&&ye.y===ce.y))return{gx:ce.x,gy:ce.y}}return null}function kt(re){let pe=null,Me=null,oe=1/0;for(let ce of re){let xe=Xi(e,g.x,g.y,ce.gx,ce.gy,N,g);xe&&xe.length>1&&xe.length<oe&&(oe=xe.length,pe=xe,Me=ce)}return pe&&Me?{path:pe,target:Me}:null}function yt(re){let pe=re??R;if(pe.length===0)return null;let Me=N.filter(xe=>xe.hp>0&&xe.player!==g.player);if(Me.length===0)return pe[0];let oe=null,ce=-1;for(let xe of pe){let ye=Math.min(...Me.map(we=>Xn(xe.gx,xe.gy,we.x,we.y)));ye>ce&&(ce=ye,oe=xe)}return oe}function en(re){let pe=re??R;if(pe.length===0)return null;let Me=N.filter(we=>we.hp>0&&we.player!==g.player),oe=N.filter(we=>we.hp>0&&we.player===g.player&&we.id!==g.id);if(Me.length===0)return pe[0];let ce=g.maxHp>0&&g.hp/g.maxHp>=.6,xe=null,ye=-1/0;for(let we of pe){let at=Math.min(...Me.map(mt=>Xn(we.gx,we.gy,mt.x,mt.y))),Ue=oe.length>0?Math.min(...oe.map(mt=>Xn(we.gx,we.gy,mt.x,mt.y))):999,Ve;ce?Ve=Ue<at?at-1e3:at:Ve=at-Ue,Ve>ye&&(ye=Ve,xe=we)}return xe}function En(){let re=Tt,pe=N.filter(ce=>ce.hp>0&&ce.player!==g.player);if(pe.length===0)return null;let Me=null,oe=-1;for(let ce of R){let xe=Math.min(...pe.map(we=>Xn(ce.gx,ce.gy,we.x,we.y)));pe.some(we=>Xn(ce.gx,ce.gy,we.x,we.y)<=re)&&xe>oe&&(oe=xe,Me=ce)}return Me}if(Ct){if(st){Xt();return}if(os-Le<=20&&z.length>0){let ye=z.some(we=>we.gx===g.x&&we.gy===g.y);if(ye&&R.length>0){let we=new Set(z.map(Ve=>Ve.gy*e.w+Ve.gx)),Ue=R.filter(Ve=>we.has(Ve.gy*e.w+Ve.gx)).filter(Ve=>Ve.gx!==g.x||Ve.gy!==g.y);if(Ue.length>0){let Ve=yt(Ue);if(Ve&&(Ve.gx!==g.x||Ve.gy!==g.y)){$t(g,Ve.gx,Ve.gy,()=>setTimeout(Xt,400));return}}Xt();return}if(ye){Xt();return}if(R.length>0){let we=ae.length>0?ae:z,at=kt(we),Ue=at?Rt(at.path,g.agi):null;if(Ue&&(Ue.gx!==g.x||Ue.gy!==g.y)){$t(g,Ue.gx,Ue.gy,()=>setTimeout(Xt,400));return}let Ve=Qt(R,we);if(Ve&&(Ve.gx!==g.x||Ve.gy!==g.y)){$t(g,Ve.gx,Ve.gy,()=>setTimeout(Xt,400));return}}Xt();return}let pe=new Set(z.map(ye=>ye.gy*e.w+ye.gx)),Me=z.length>0?R.filter(ye=>pe.has(ye.gy*e.w+ye.gx)):null,oe=Me!=null&&Me.length>0?Me:R,ce=N.filter(ye=>ye.hp>0&&ye.player===g.player&&ye.id!==g.id),xe=null;if(oe.length>0&&ce.length>0&&(xe=en(oe),xe)){let ye=Xi(e,g.x,g.y,xe.gx,xe.gy,N,g),we=ye?ye.length-1:1/0;(!ye||ye.length<=1||we>g.agi)&&(xe=yt(oe))}if(!xe&&oe.length>0&&(xe=yt(oe)),xe&&(xe.gx!==g.x||xe.gy!==g.y)){$t(g,xe.gx,xe.gy,()=>setTimeout(Xt,400));return}Xt();return}if(de&&os-Le>20&&!st&&R.length>0){let re=null,pe=1/0;for(let oe of R){let xe=un(oe.gx,oe.gy).filter(ye=>ye.target.maxHp>0&&ye.target.hp/ye.target.maxHp<H);if(xe.length>0){let ye=Math.min(...xe.map(we=>we.target.hp));ye<pe&&(pe=ye,re=oe)}}if(re){let oe=Xi(e,g.x,g.y,re.gx,re.gy,N,g),ce=oe?zt(oe,g.agi):null;if(ce&&(ce.gx!==g.x||ce.gy!==g.y)){$t(g,ce.gx,ce.gy,()=>setTimeout(an,600));return}}let Me=yt();if(Me&&(Me.gx!==g.x||Me.gy!==g.y)){$t(g,Me.gx,Me.gy,()=>setTimeout(an,600));return}Xt();return}if(!Ct){let at=function(ht){return Qa(g,ht,N).filter(gn=>gn.targetUnit!=null).map(gn=>gn.targetUnit)},re=Ar(g),pe=g.maxHp>0?g.hp/g.maxHp:1,Me=.35,oe=new Set(["arcaneBolt","feast","pierce","snipe","berserk","drain","shuriken","chokuto","bite","execute"]),ce=new Set(["chakra"]),xe=new Set(["shieldWall","focus","bloodlust","iaido","howl"]),ye=new Set(["freeze","impale"]),we=new Set(["dominate","mantra","weaken","cripple","hex","blind"]),Ue={showFloatingCombatText:qn,handleUnitDeath:vn,updateUnitSlashVisibility:Je,updateTurnUI:Lt},Ve=null,mt=null;for(let ht of re)if(!ht.disabled&&oe.has(ht.effectKey)){if(ht.effectKey==="berserk"&&g.hp<g.maxHp*.2||ht.effectKey==="shuriken"&&k.length>0)continue;let Dt=at(ht);if(Dt.length===0)continue;let gn=Dt.filter(Ai=>Ai.maxHp>0&&Ai.hp/Ai.maxHp<Me),wn=(Ai,Pr)=>Pe(Ai,"int")-Pe(Pr,"int")||Ai.hp-Pr.hp,fs=(Ai,Pr)=>Ai.hp-Pr.hp,so=gn.length>0?ht.type==="spell"?gn.sort(wn)[0]:gn.sort(fs)[0]:ht.type==="spell"?Dt.sort(wn)[0]:Dt.sort(fs)[0];Ve=ht,mt=so;break}if(!Ve&&pe<=.4){for(let ht of re)if(!ht.disabled&&ce.has(ht.effectKey)){let Dt=Qa(g,ht,N);if(Dt.length>0){Ve=ht,mt=ht.target==="self"?g:Dt[0].targetUnit||g;break}}}if(!Ve&&(k.length>0||R.some(Dt=>un(Dt.gx,Dt.gy).length>0))){for(let Dt of re)if(!Dt.disabled&&!(Dt.effectKey==="bloodlust"&&g.hp/g.maxHp>.8)&&xe.has(Dt.effectKey)&&Dt.target==="self"&&!(g.tempBuff&&g.tempBuff.duration>0)){Ve=Dt,mt=g;break}}let Tn=k.some(ht=>ht.target.maxHp>0&&ht.target.hp/ht.target.maxHp<H);if(!Ve&&!Tn){for(let ht of re)if(!ht.disabled&&we.has(ht.effectKey)){let gn=at(ht).sort((wn,fs)=>wn.hp-fs.hp)[0];Ve=ht,mt=gn;break}}if(!Ve&&!Tn){for(let ht of re)if(!ht.disabled&&ye.has(ht.effectKey)){let gn=at(ht).filter(wn=>!wn.tempDebuff||wn.tempDebuff.duration<=0);if(gn.length>0){let wn=gn.sort((fs,so)=>fs.hp-so.hp)[0];Ve=ht,mt=wn;break}}}if(Ve&&mt){g.mp-=Ve.cost,Ct=!0;let ht=Ve.target==="self"?g:mt;ja(g,ht,Ve,Ue,()=>setTimeout(an,600));return}}if(gu(g)&&k.length>0){k.sort((pe,Me)=>pe.target.hp-Me.target.hp||pe.dist-Me.dist);let re=k[0].target;Wl(g,re);return}if(k.length>0){k.sort((pe,Me)=>pe.target.hp-Me.target.hp||pe.dist-Me.dist);let re=k[0].target;Wl(g,re);return}let Mn=os-Le;if(Mn<=20&&z.length>0&&!st&&R.length>0&&!z.some(pe=>pe.gx===g.x&&pe.gy===g.y)){let pe=ae.length>0?ae:z,Me=kt(pe),oe=Me?Me.path:null,ce=(mt,Tn)=>Math.min(...z.map(ht=>Xn(mt,Tn,ht.gx,ht.gy))),xe=ce(g.x,g.y),ye=null,we=-1,at=H;for(let mt of R){if(ce(mt.gx,mt.gy)>xe||un(mt.gx,mt.gy).filter(wn=>wn.target.maxHp>0&&wn.target.hp/wn.target.maxHp<at).length===0)continue;let Dt=oe?oe.findIndex(wn=>wn.x===mt.gx&&wn.y===mt.gy):-1,gn=Dt>=0?Dt:0;gn>we&&(we=gn,ye=mt)}if(ye&&(ye.gx!==g.x||ye.gy!==g.y)){$t(g,ye.gx,ye.gy,()=>setTimeout(an,600));return}let Ue=Me?Rt(Me.path,g.agi):null;if(Ue&&(Ue.gx!==g.x||Ue.gy!==g.y)){$t(g,Ue.gx,Ue.gy,()=>setTimeout(an,600));return}let Ve=Qt(R,pe);if(Ve&&(Ve.gx!==g.x||Ve.gy!==g.y)){$t(g,Ve.gx,Ve.gy,()=>setTimeout(an,600));return}}if(ie&&R.length>0&&!st){let re=null,pe=1/0;for(let Me of R){let ce=un(Me.gx,Me.gy).filter(xe=>xe.target.maxHp>0&&xe.target.hp/xe.target.maxHp<H);if(ce.length>0){let xe=Math.min(...ce.map(ye=>ye.target.hp));xe<pe&&(pe=xe,re=Me)}}if(re){let Me=Xi(e,g.x,g.y,re.gx,re.gy,N,g),oe=Me?zt(Me,g.agi):null;if(oe&&(oe.gx!==g.x||oe.gy!==g.y)){$t(g,oe.gx,oe.gy,()=>setTimeout(an,600));return}}if(Mn>20&&Re&&V.length>0&&!V.some(oe=>oe.gx===g.x&&oe.gy===g.y)){let oe=He.length>0?He:V,ce=kt(oe);if(ce!=null&&ce.path.length<=5){let ye=Rt(ce.path,g.agi);if(ye&&(ye.gx!==g.x||ye.gy!==g.y)){$t(g,ye.gx,ye.gy,()=>setTimeout(an,600));return}let we=Qt(R,oe);if(we&&(we.gx!==g.x||we.gy!==g.y)){$t(g,we.gx,we.gy,()=>setTimeout(an,600));return}}}if(Mn>20){let Me=yt();if(Me&&Xn(g.x,g.y,Me.gx,Me.gy)>0){$t(g,Me.gx,Me.gy,()=>setTimeout(an,600));return}Xt();return}}if(Mn<=10&&z.length>0&&!st&&R.length>0&&!z.some(pe=>pe.gx===g.x&&pe.gy===g.y)){let pe=ae.length>0?ae:z,Me=kt(pe),oe=Me?Rt(Me.path,g.agi):null;if(oe&&(oe.gx!==g.x||oe.gy!==g.y)){$t(g,oe.gx,oe.gy,()=>setTimeout(an,600));return}let ce=Qt(R,pe);if(ce&&(ce.gx!==g.x||ce.gy!==g.y)){$t(g,ce.gx,ce.gy,()=>setTimeout(an,600));return}}if(g.level===1&&z.length>0&&!st&&!z.some(pe=>pe.gx===g.x&&pe.gy===g.y)&&R.length>0){let pe=ae.length>0?ae:z,Me=kt(pe),oe=Me?Rt(Me.path,g.agi):null;if(oe&&(oe.gx!==g.x||oe.gy!==g.y)){$t(g,oe.gx,oe.gy,()=>setTimeout(an,600));return}let ce=Qt(R,pe);if(ce&&(ce.gx!==g.x||ce.gy!==g.y)){$t(g,ce.gx,ce.gy,()=>setTimeout(an,600));return}}if(Re&&V.length>0&&!st&&!V.some(pe=>pe.gx===g.x&&pe.gy===g.y)&&R.length>0){let Me=N.filter(Ue=>Ue.hp>0&&Ue.player!==g.player).filter(Ue=>Ue.maxHp>0&&Ue.hp/Ue.maxHp<H),oe=null,ce=1/0;for(let Ue of R){let mt=un(Ue.gx,Ue.gy).find(Tn=>Me.some(ht=>ht.id===Tn.target.id));mt&&mt.target.hp<ce&&(ce=mt.target.hp,oe=Ue)}if(oe){let Ue=Xi(e,g.x,g.y,oe.gx,oe.gy,N,g),Ve=Ue?zt(Ue,g.agi):null;if(Ve&&(Ve.gx!==g.x||Ve.gy!==g.y)){$t(g,Ve.gx,Ve.gy,()=>setTimeout(an,600));return}}let xe=He.length>0?He:V,ye=kt(xe),we=ye?Rt(ye.path,g.agi):null;if(we&&(we.gx!==g.x||we.gy!==g.y)){$t(g,we.gx,we.gy,()=>setTimeout(an,600));return}let at=Qt(R,xe);if(at&&(at.gx!==g.x||at.gy!==g.y)){$t(g,at.gx,at.gy,()=>setTimeout(an,600));return}}let tn=N.filter(re=>re.hp>0&&re.player!==g.player);if(g.level>=2&&Tt>=2&&tn.length>0&&!st&&R.length>0){let re=En();if(re&&(re.gx!==g.x||re.gy!==g.y)){$t(g,re.gx,re.gy,()=>setTimeout(an,600));return}}if(tn.length>0&&!st&&R.length>0){let pe=function(oe,ce){let xe=null;for(let ye=-re;ye<=re;ye++)for(let we=-re;we<=re;we++){if(we===0&&ye===0||Math.abs(we)+Math.abs(ye)>re)continue;let at=oe.x+we,Ue=oe.y+ye;if(at<0||at>=e.w||Ue<0||Ue>=e.h||!Er(e,at,Ue)||!ls(e,at,Ue,oe.x,oe.y)||N.some(Dt=>Dt.hp>0&&Dt.x===at&&Dt.y===Ue))continue;let mt=Xi(e,g.x,g.y,at,Ue,N,g),Tn=mt?mt.length-1:1/0;mt&&mt.length>1&&(!ce||Tn<=g.agi)&&(!xe||mt.length<xe.length)&&(xe=mt)}return xe},re=Tt,Me=[];for(let oe of tn){let ce=pe(oe,!0);ce&&Me.push({enemy:oe,path:ce})}if(Me.length>0){let oe=Me.filter(we=>we.enemy.maxHp>0&&we.enemy.hp/we.enemy.maxHp<H),ce=oe.length>0?oe:Me;oe.length>0?ce.sort((we,at)=>we.enemy.hp-at.enemy.hp||we.path.length-at.path.length):ce.sort((we,at)=>we.path.length-at.path.length||we.enemy.hp-at.enemy.hp);let xe=ce[0],ye=zt(xe.path,g.agi);if(ye&&(ye.gx!==g.x||ye.gy!==g.y)){$t(g,ye.gx,ye.gy,()=>setTimeout(an,600));return}}if(Me.length===0){let oe=null,ce=1/0;for(let xe of tn){let ye=pe(xe,!1);ye&&ye.length<ce&&(ce=ye.length,oe=ye)}if(oe){let xe=zt(oe,g.agi);if(xe&&(xe.gx!==g.x||xe.gy!==g.y)){$t(g,xe.gx,xe.gy,()=>setTimeout(an,600));return}}}}Xt()}function on(){for(jt.length=0;Nt.children.length;){let _=Nt.children[0];Nt.remove(_),_.geometry!==Js&&_.geometry!==js&&_.geometry.dispose(),_.material.dispose()}Wt()}let Ks=new Set;function Ar(_){return!_||!_.class?[]:au[_.class]?au[_.class].map(g=>({...g,disabled:g.disabled===!0||_.level<g.level||g.hpCost&&_.hp<g.hpCost||g.cost&&_.mp<g.cost})):[]}function Qa(_,g,P){let R=[],k=(V,H,q,ie)=>Math.abs(V-q)+Math.abs(H-ie),z=g.range||0;if(g.target==="self")return R.push({gx:_.x,gy:_.y,targetUnit:null}),R;for(let V of P)V.hp<=0||k(_.x,_.y,V.x,V.y)>z||z>2&&!ls(e,_.x,_.y,V.x,V.y)||(g.target==="enemy"&&V.player!==_.player&&R.push({gx:V.x,gy:V.y,targetUnit:V}),g.target==="ally"&&V.player===_.player&&R.push({gx:V.x,gy:V.y,targetUnit:V}));return R}function xu(_,g){let P=g.range||0;if(g.target==="self")return[{gx:_.x,gy:_.y}];let R=lu(e,_.x,_.y,P),k=[];return R.forEach((z,V)=>{let H=V%e.w,q=V/e.w|0;P>2&&!ls(e,_.x,_.y,H,q)||k.push({gx:H,gy:q})}),k}function yu(_,g){let P=Qa(_,g,N);Ks=new Set(P.map(k=>`${k.gx},${k.gy}`));let R=g.target==="self"?P:xu(_,g);on(),R.forEach(({gx:k,gy:z})=>{let H=(Fn+e.height[z][k]*.35)/2+Fn/2,q=k*vt-ne+vt/2,ie=z*vt-ue+vt/2,de=H+.01,Re=new nn({color:8926122,transparent:!0,opacity:.4,side:cn}),Ze=new lt(Js,Re);Ze.rotation.x=-Math.PI/2,Ze.position.set(q,de,ie),Nt.add(Ze),jt.push(Re);let ae=new nn({color:11167436,transparent:!0,opacity:.7,side:cn}),He=new lt(js,ae);He.rotation.x=-Math.PI/2,He.position.set(q,de+.01,ie),He.userData.gx=k,He.userData.gy=z,Nt.add(He),jt.push(ae)})}let Xl=.82,ql=1.02,Js=new bi(ql,ql),js=new bi(Xl,Xl);function vu(_){on(),_.forEach(({gx:g,gy:P})=>{let k=(Fn+e.height[P][g]*.35)/2+Fn/2,z=g*vt-ne+vt/2,V=P*vt-ue+vt/2,H=k+.01,q=new nn({color:2271812,transparent:!0,opacity:.4,side:cn}),ie=new lt(Js,q);ie.rotation.x=-Math.PI/2,ie.position.set(z,H,V),Nt.add(ie),jt.push(q);let de=new nn({color:4508774,transparent:!0,opacity:.7,side:cn}),Re=new lt(js,de);Re.rotation.x=-Math.PI/2,Re.position.set(z,H+.01,V),Re.userData.gx=g,Re.userData.gy=P,Nt.add(Re),jt.push(de)}),Wt()}function eo(_){on(),_.forEach((g,P)=>{if(g===0)return;let R=P%e.w,k=P/e.w|0,V=(Fn+e.height[k][R]*.35)/2+Fn/2,H=R*vt-ne+vt/2,q=k*vt-ue+vt/2,ie=V+.01,de=new nn({color:3381759,transparent:!0,opacity:.35,side:cn}),Re=new lt(Js,de);Re.rotation.x=-Math.PI/2,Re.position.set(H,ie,q),Nt.add(Re),jt.push(de);let Ze=new nn({color:6730751,transparent:!0,opacity:.65,side:cn}),ae=new lt(js,Ze);ae.rotation.x=-Math.PI/2,ae.position.set(H,ie+.01,q),Nt.add(ae),jt.push(Ze)}),Wt()}function Mu(_){on(),_.forEach((g,P)=>{if(g===0)return;let R=P%e.w,k=P/e.w|0,V=(Fn+e.height[k][R]*.35)/2+Fn/2,H=R*vt-ne+vt/2,q=k*vt-ue+vt/2,ie=V+.01,de=new nn({color:10035746,transparent:!0,opacity:.4,side:cn}),Re=new lt(Js,de);Re.rotation.x=-Math.PI/2,Re.position.set(H,ie,q),Nt.add(Re),jt.push(de);let Ze=new nn({color:13386820,transparent:!0,opacity:.7,side:cn}),ae=new lt(js,Ze);ae.rotation.x=-Math.PI/2,ae.position.set(H,ie+.01,q),Nt.add(ae),jt.push(Ze)}),Wt()}let Ei=new Oa,Ti=new Fe;function Rr(_,g){let P=t.getBoundingClientRect();return Ti.x=(_-P.left)/P.width*2-1,Ti.y=-((g-P.top)/P.height)*2+1,{x:Ti.x,y:Ti.y}}function Su(_,g){if(ve)return;Ti.x=_,Ti.y=g,Ei.setFromCamera(Ti,a);let P=Ei.intersectObjects(G.children,!0);if(P.length===0)return;let R=P[0].object;for(;R&&(R.userData.gx==null||R.userData.gy==null);)R=R.parent;if(!R||R.userData.gx==null)return;let k=R.userData.gx,z=R.userData.gy;if(We==="draft"&&Oe){let H=z*e.w+k;De.has(H)&&$s(k,z);return}if(We!=="playing"||le==="cvcpu")return;if($e&&gt){let H=Ae[qe],q=N.find(ae=>ae.id===H&&ae.hp>0);if(q&&k===q.x&&z===q.y){$e=!1,gt=null,Ks=new Set,on(),st?Xe=new Map:(Xe=Xa(e,q.x,q.y,q.agi,N,q),eo(Xe)),Lt();return}let ie=`${k},${z}`;if(!Ks.has(ie))return;if(!q||q.mp<gt.cost){$e=!1,gt=null,on(),Lt();return}let de=N.find(ae=>ae.x===k&&ae.y===z&&ae.hp>0);if(gt.target==="enemy"&&(!de||de.player===q.player)||gt.target==="ally"&&de&&de.player!==q.player||gt.target==="self"&&(k!==q.x||z!==q.y)||gt.target==="enemy"&&!de)return;q.mp-=gt.cost,Ct=!0;let Re={showFloatingCombatText:qn,handleUnitDeath:vn,updateUnitSlashVisibility:Je,updateTurnUI:Lt},Ze=gt.target==="self"?q:de||null;ja(q,Ze,gt,Re,()=>{on(),$e=!1,gt=null,Ks=new Set,st?Xt():Lt()});return}if(Gt){let H=Ae[qe],q=N.find(de=>de.id===H),ie=$.get(H);if(q&&ie&&St.length>0){let de=fe(q.x,q.y),Re=fe(k,z),Ze=Re.x-de.x,ae=Re.z-de.z,He=Ze*Ze+ae*ae>1e-6?Math.atan2(Ze,ae):ie.rotation.y;ie.rotation.y=nt(He)}Xt();return}if(dt!=null&&Ye){let H=N.find(de=>de.id===dt);if(!H||H.player!==Ne)return;let q=z*e.w+k,ie=N.find(de=>de.x===k&&de.y===z&&de.hp>0);if(ie&&ie.id===Ae[qe]&&ie.player===Ne){Ye=!1,dt=ie.id,st?(on(),Xe=new Map):(Xe=Xa(e,ie.x,ie.y,ie.agi,N,ie),eo(Xe)),Lt();return}if(!Xe.has(q)||Xe.get(q)===0)return;if(ie&&ie.player!==Ne){let de=Pe(ie,"agi")*.7+Pe(ie,"luk")*.3;if(Math.random()*Math.max(.001,de)<=Pe(H,"dex")){let ae=Pe(H,"str")*.7+Pe(H,"dex")*.1+Pe(H,"int")*.07-(Pe(ie,"vit")*.3+Pe(ie,"luk")*.1),He=Math.max(1,Math.floor(ae));ie.hp=Math.max(0,ie.hp-He),qn(ie.x,ie.y,String(He),!1),ie.hp<=0&&vn(ie),Je(ie)}else qn(ie.x,ie.y,"MISS",!0);Ct=!0,dt=null,Ye=!1,on(),st?Xt():Lt()}return}let V=N.find(H=>H.x===k&&H.y===z&&H.hp>0);if(V){if(V.id===Ae[qe]&&V.player===Ne){Ee(),dt=V.id,Ye=!1,st?(on(),Xe=new Map):(Xe=Xa(e,k,z,V.agi,N,V),eo(Xe)),Lt();return}on(),Xe=new Map,Ye=!1,B(V),Lt();return}if(Ee(),dt!=null){let ae=function(){if(Ze>=de.length){H.x=de[de.length-1].x,H.y=de[de.length-1].y,ve=!1,Be(Re),Z(),Xe=new Map,st=!0,Ct?Xt():Lt();return}let He=de[Ze-1],At=de[Ze],Pt=fe(He.x,He.y).clone(),Tt=fe(At.x,At.y).clone(),Zt=Tt.x-Pt.x,Qt=Tt.z-Pt.z;Zt*Zt+Qt*Qt>1e-6&&(Re.rotation.y=Math.atan2(Zt,Qt));let un=performance.now();function ln(zt){Wt();let Rt=Math.min(1,(zt-un)/su),yt=(en=>en*en*(3-2*en))(Rt);Re.position.lerpVectors(Pt,Tt,yt),be(Re,yt),Rt<1?requestAnimationFrame(ln):(Ze++,ae())}requestAnimationFrame(ln)};if(Ye)return;let H=N.find(He=>He.id===dt);if(!H||H.player!==Ne)return;let q=z*e.w+k;if(!Xe.has(q)||Xe.get(q)===0||N.some(He=>He.id!==H.id&&He.x===k&&He.y===z&&He.hp>0)||ve||st)return;let de=Xi(e,H.x,H.y,k,z,N,H);if(!de||de.length<=1)return;dt=null,on(),ve=!0,Z(H.id);let Re=$.get(H.id),Ze=1;ae()}}function Yl(_){L.x=_.clientX,L.y=_.clientY,m=_.ctrlKey,p=Rr(_.clientX,_.clientY),t.style.cursor=(_.ctrlKey,"grabbing")}function to(_){return _.touches&&_.touches.length>0?{clientX:_.touches[0].clientX,clientY:_.touches[0].clientY}:_.changedTouches&&_.changedTouches.length>0?{clientX:_.changedTouches[0].clientX,clientY:_.changedTouches[0].clientY}:{clientX:_.clientX,clientY:_.clientY}}function $l(_){if(!_||_.length<2)return 0;let g=_[0],P=_[1];return Math.hypot(P.clientX-g.clientX,P.clientY-g.clientY)}function bu(_){if(_.touches.length===2){O=$l(_.touches),p=null;return}if(_.touches.length!==1)return;O=null;let g=to(_);Yl({clientX:g.clientX,clientY:g.clientY,ctrlKey:!1})}function Eu(_){if(_.touches.length===2){_.preventDefault();let P=$l(_.touches);if(O!=null&&O>0){let R=P-O,k=a.position.distanceTo(c),z=Math.max(Y,Math.min(b,k-R*D));d.copy(c).sub(a.position).normalize(),a.position.copy(c).sub(d.multiplyScalar(z)),a.lookAt(c)}O=P;return}if(O=null,_.touches.length!==1)return;_.preventDefault();let g=to(_);Zl({clientX:g.clientX,clientY:g.clientY,ctrlKey:!1})}function Tu(_){if(_.touches.length<2&&(O=null),_.touches.length===2||_.changedTouches.length===0)return;let g=to(_);no({clientX:g.clientX,clientY:g.clientY,ctrlKey:!1})}function Zl(_){if(Gt){ft(_.clientX,_.clientY);return}if(p==null)return;let g=_.clientX-L.x,P=_.clientY-L.y;if(!x&&!v&&(Math.abs(g)>M||Math.abs(P)>M)&&(_.ctrlKey||m?v=!0:x=!0),v){I.copy(a.position).sub(c);let R=I.length();if(R<.001)return;let k=Math.atan2(I.x,I.z),z=Math.asin(Math.max(-1,Math.min(1,I.y/R)));k-=g*y,z+=P*y,z=Math.max(T,Math.min(U,z)),I.x=R*Math.cos(z)*Math.sin(k),I.y=R*Math.sin(z),I.z=R*Math.cos(z)*Math.cos(k),a.position.copy(c).add(I),a.lookAt(c),L.x=_.clientX,L.y=_.clientY,Wt()}else if(x){let R=Rr(_.clientX,_.clientY);f.setFromNormalAndCoplanarPoint(new F(0,1,0),new F(0,c.y,0)),Ei.setFromCamera(new Fe(p.x,p.y),a),Ei.ray.intersectPlane(f,u);let k=u.clone();Ei.setFromCamera(new Fe(R.x,R.y),a),Ei.ray.intersectPlane(f,u);let z=k.sub(u);c.add(z),a.position.add(z),a.lookAt(c),p={x:R.x,y:R.y},Wt()}}function no(_){if(p!=null&&!x&&!v){let g=Rr(_.clientX,_.clientY);Su(g.x,g.y)}p=null,x=!1,v=!1,m=!1,t.style.cursor="grab"}function wu(_){_.preventDefault();let g=a.position.distanceTo(c),P=Math.max(Y,Math.min(b,g+_.deltaY*w));d.copy(c).sub(a.position).normalize(),a.position.copy(c).sub(d.multiplyScalar(P)),a.lookAt(c),Wt()}t.style.cursor="grab",t.addEventListener("mousedown",Yl),t.addEventListener("mousemove",Zl),t.addEventListener("mouseup",no),t.addEventListener("mouseleave",no),t.addEventListener("touchstart",bu,{passive:!0}),t.addEventListener("touchmove",Eu,{passive:!1}),t.addEventListener("touchend",Tu,{passive:!0}),t.addEventListener("wheel",wu,{passive:!1});function Kl(){let _=t.clientWidth,g=t.clientHeight;a.aspect=_/g,a.updateProjectionMatrix(),wi.setSize(_,g),wi.setPixelRatio(Math.min(window.devicePixelRatio,2))}window.addEventListener("resize",Kl);let wi=new mr({antialias:!0});wi.setSize(t.clientWidth,t.clientHeight),wi.setPixelRatio(Math.min(window.devicePixelRatio,2)),wi.shadowMap.enabled=!0,wi.shadowMap.type=Nl,t.appendChild(wi.domElement),Kl();let Cr=document.createElement("div");Cr.id="combat-text-layer",t.appendChild(Cr);let hi=new F,Au=1400;function qn(_,g,P,R,k){let z=document.createElement("div");z.className="combat-text-float "+(R?"miss":"damage")+(k?" "+k:""),z.textContent=P,z.style.position="absolute",Cr.appendChild(z);let V=k==="skill-name"?1.7:1.2,H=performance.now();function q(){hi.copy(fe(_,g)),hi.y+=V,hi.project(a);let Re=t.clientWidth,Ze=t.clientHeight;z.style.left=(hi.x*.5+.5)*Re+"px",z.style.top=(1-(hi.y*.5+.5))*Ze+"px"}let ie=0;function de(){ie%2===0&&q(),ie++,performance.now()-H<Au?requestAnimationFrame(de):z.remove()}requestAnimationFrame(de)}let Ru=1500;function Cu(_,g){let P=document.createElement("div");P.className="combat-text-float "+(g||"levelup"),P.textContent="LEVEL UP!",P.style.position="absolute",Cr.appendChild(P);let R=performance.now(),k=0;function z(){hi.copy(fe(_.x,_.y)),hi.y+=1.2,hi.project(a);let H=t.clientWidth,q=t.clientHeight;P.style.left=(hi.x*.5+.5)*H+"px",P.style.top=(1-(hi.y*.5+.5))*q+"px"}function V(){k%2===0&&z(),k++,performance.now()-R<Ru?requestAnimationFrame(V):P.remove()}requestAnimationFrame(V)}function vn(_){console.log("[DEATH]",`${_.name} (${_.class}, P${_.player})`,`at (${_.x},${_.y})`,`Lv.${_.level}`),qn(_.x,_.y,"DEAD",!1);let g=$.get(_.id);if(!g){Z(),Jl();return}let P=performance.now();function R(k){Wt();let z=k-P,V=Math.min(1,z/A),H=V*V;g.rotation.x=H*Math.PI*.5,V<1?requestAnimationFrame(R):(n.remove(g),$.delete(_.id),Z(),Jl())}requestAnimationFrame(R)}function Jl(){if(We!=="playing")return;let _=N.some(P=>P.player===1&&P.hp>0),g=N.some(P=>P.player===2&&P.hp>0);_?g||io(1):io(2)}function Pu(){let _=Gl(),g=new Set(_.map(V=>V.gy*e.w+V.gx)),P=N.filter(V=>V.hp>0&&V.player===1&&g.has(V.y*e.w+V.x)).length,R=N.filter(V=>V.hp>0&&V.player===2&&g.has(V.y*e.w+V.x)).length,k=null,z="";if(P>R)k=1,z=`Time's up! Player 1 wins! (${P} vs ${R} units on center base)`;else if(R>P)k=2,z=`Time's up! Player 2 wins! (${R} vs ${P} units on center base)`;else{let V=N.filter(q=>q.hp>0&&q.player===1).reduce((q,ie)=>q+ie.hp,0),H=N.filter(q=>q.hp>0&&q.player===2).reduce((q,ie)=>q+ie.hp,0);V>H?(k=1,z=`Time's up! Draw on center \u2014 Player 1 wins on total HP (${V} vs ${H})`):H>V?(k=2,z=`Time's up! Draw on center \u2014 Player 2 wins on total HP (${H} vs ${V})`):z=`Draw! (equal units on center: ${P}, equal HP)`}io(k,z)}function io(_,g){We="gameover",document.getElementById("turn-menu").style.display="none",Ee(),on();let P=document.getElementById("game-over-overlay"),R=document.getElementById("game-over-title"),k=document.getElementById("game-over-cards");R.textContent=g??`Player ${_} wins!`;let z=N.filter(V=>V.player===(_??1));k.innerHTML=z.map(V=>{let H=V,q=V.level>=3?" level-3":V.level>=2?" level-2":"",ie=H.maxHp>0&&H.hp/H.maxHp<.3?" low-hp":"";return`
        <div class="game-over-card${q}${ie}">
          <img class="game-over-card-image" src="${br[V.class]||""}" alt="${H.name}" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="game-over-card-body">
            <div class="game-over-card-name">${H.name}</div>
            <div class="game-over-card-meta">Lv.${H.level} ${H.class} \u2014 HP ${H.hp}/${H.maxHp}</div>
            <div class="game-over-card-stats">
              <span class="stat-label">HP</span><span class="stat-val stat-val-hp">${H.hp}/${H.maxHp}</span>
              <span class="stat-label">MP</span><span class="stat-val">${H.mp}/${H.maxMp}</span>
              <span class="stat-label">STR</span><span class="stat-val">${Pe(H,"str")}</span>
              <span class="stat-label">AGI</span><span class="stat-val">${Pe(H,"agi")}</span>
              <span class="stat-label">VIT</span><span class="stat-val">${Pe(H,"vit")}</span>
              <span class="stat-label">DEX</span><span class="stat-val">${Pe(H,"dex")}</span>
              <span class="stat-label">LUK</span><span class="stat-val">${Pe(H,"luk")}</span>
              <span class="stat-label">INT</span><span class="stat-val">${Pe(H,"int")}</span>
              <span class="stat-label">Range</span><span class="stat-val">${H.range}</span>
            </div>
          </div>
        </div>
      `}).join(""),P.classList.add("visible")}function ds(_=0){requestAnimationFrame(ds),cs===0&&(cs=_);let g=_-cs>1e3,P=0;typeof ds.frameCount=="number"&&(P=ds.frameCount),ds.frameCount=P+1;let R=()=>{let k=.6+.4*Math.sin(_*.004);for(let V=0;V<jt.length;V++){let H=V%2===0?.4:.7;jt[V].opacity=H*k}let z=G.userData.treeGroups;if(z&&z.length>0&&ds.frameCount%3===0)for(let V=0;V<z.length;V++){let H=z[V];if(!H.userData.sway)continue;let q=H.userData.swayPhase!=null?H.userData.swayPhase:0;H.rotation.x=Math.sin(_*9e-4+q)*.018,H.rotation.z=Math.sin(_*7e-4+q*1.4)*.018}wi.render(n,a),qs=!1};g?_-qi>=100&&(qi=_,R()):R()}ds()}m_();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
