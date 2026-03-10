var Fl="160";var Nu=0,nc=1,Ou=2;var Fh=1,Bl=2,Mi=3,Gi=0,zn=1,cn=2;var ki=0,zs=1,ic=2,sc=3,rc=4,Fu=5,ns=100,Bu=101,Hu=102,ac=103,oc=104,ku=200,zu=201,Vu=202,Gu=203,Xo=204,qo=205,Wu=206,Xu=207,qu=208,Yu=209,$u=210,Zu=211,Ku=212,Ju=213,ju=214,Qu=0,ed=1,td=2,ua=3,nd=4,id=5,sd=6,rd=7,Bh=0,ad=1,od=2,zi=0,ld=1,cd=2,hd=3,ud=4,dd=5,fd=6;var Hh=300,Ws=301,Xs=302,Yo=303,$o=304,Wa=306,mr=1e3,oi=1001,Zo=1002,Nn=1003,lc=1004;var lo=1005;var Kn=1006,pd=1007;var gr=1008;var Vi=1009,md=1010,gd=1011,Hl=1012,kh=1013,Bi=1014,Hi=1015,_r=1016,zh=1017,Vh=1018,ss=1020,_d=1021,li=1023,xd=1024,yd=1025,rs=1026,qs=1027,vd=1028,Gh=1029,Md=1030,Wh=1031,Xh=1033,co=33776,ho=33777,uo=33778,fo=33779,cc=35840,hc=35841,uc=35842,dc=35843,qh=36196,fc=37492,pc=37496,mc=37808,gc=37809,_c=37810,xc=37811,yc=37812,vc=37813,Mc=37814,Sc=37815,bc=37816,Ec=37817,Tc=37818,wc=37819,Ac=37820,Rc=37821,po=36492,Cc=36494,Pc=36495,Sd=36283,Ic=36284,Lc=36285,Dc=36286;var da=2300,fa=2301,mo=2302,Uc=2400,Nc=2401,Oc=2402;var Yh=3e3,as=3001,bd=3200,Ed=3201,$h=0,Td=1,Jn="",wn="srgb",bi="srgb-linear",kl="display-p3",Xa="display-p3-linear",pa="linear",Wt="srgb",ma="rec709",ga="p3";var Ms=7680;var Fc=519,wd=512,Ad=513,Rd=514,Zh=515,Cd=516,Pd=517,Id=518,Ld=519,Bc=35044;var Hc="300 es",Ko=1035,Si=2e3,_a=2001,Wi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var go=Math.PI/180,Jo=180/Math.PI;function Js(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(An[i&255]+An[i>>8&255]+An[i>>16&255]+An[i>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[t&63|128]+An[t>>8&255]+"-"+An[t>>16&255]+An[t>>24&255]+An[n&255]+An[n>>8&255]+An[n>>16&255]+An[n>>24&255]).toLowerCase()}function Cn(i,e,t){return Math.max(e,Math.min(t,i))}function Dd(i,e){return(i%e+e)%e}function _o(i,e,t){return(1-t)*i+t*e}function kc(i){return(i&i-1)===0&&i!==0}function jo(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function rr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function kn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ne=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Cn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},wt=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],x=n[8],v=s[0],m=s[3],p=s[6],M=s[1],y=s[4],T=s[7],N=s[2],I=s[5],L=s[8];return r[0]=a*v+o*M+l*N,r[3]=a*m+o*y+l*I,r[6]=a*p+o*T+l*L,r[1]=c*v+h*M+f*N,r[4]=c*m+h*y+f*I,r[7]=c*p+h*T+f*L,r[2]=u*v+d*M+x*N,r[5]=u*m+d*y+x*I,r[8]=u*p+d*T+x*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,x=t*f+n*u+s*d;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/x;return e[0]=f*v,e[1]=(s*c-h*n)*v,e[2]=(o*n-s*a)*v,e[3]=u*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=d*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(xo.makeScale(e,t)),this}rotate(e){return this.premultiply(xo.makeRotation(-e)),this}translate(e,t){return this.premultiply(xo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},xo=new wt;function Kh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function xa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ud(){let i=xa("canvas");return i.style.display="block",i}var zc={};function hr(i){i in zc||(zc[i]=!0,console.warn(i))}var Vc=new wt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Gc=new wt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Br={[bi]:{transfer:pa,primaries:ma,toReference:i=>i,fromReference:i=>i},[wn]:{transfer:Wt,primaries:ma,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Xa]:{transfer:pa,primaries:ga,toReference:i=>i.applyMatrix3(Gc),fromReference:i=>i.applyMatrix3(Vc)},[kl]:{transfer:Wt,primaries:ga,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Gc),fromReference:i=>i.applyMatrix3(Vc).convertLinearToSRGB()}},Nd=new Set([bi,Xa]),Ft={enabled:!0,_workingColorSpace:bi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Nd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Br[e].toReference,s=Br[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Br[i].primaries},getTransfer:function(i){return i===Jn?pa:Br[i].transfer}};function Vs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function yo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ss,ya=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ss===void 0&&(Ss=xa("canvas")),Ss.width=e.width,Ss.height=e.height;let n=Ss.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ss}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=xa("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Vs(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Vs(t[n]/255)*255):t[n]=Vs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Od=0,va=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=Js(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(vo(s[a].image)):r.push(vo(s[a]))}else r=vo(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function vo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ya.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Fd=0,Qn=class i extends Wi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=oi,s=oi,r=Kn,a=gr,o=li,l=Vi,c=i.DEFAULT_ANISOTROPY,h=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=Js(),this.name="",this.source=new va(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(hr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===as?wn:Jn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mr:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case Zo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mr:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case Zo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return hr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===wn?as:Yh}set encoding(e){hr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===as?wn:Jn}};Qn.DEFAULT_IMAGE=null;Qn.DEFAULT_MAPPING=Hh;Qn.DEFAULT_ANISOTROPY=1;var En=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],x=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-v)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+v)<.1&&Math.abs(x+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,T=(d+1)/2,N=(p+1)/2,I=(h+u)/4,L=(f+v)/4,Y=(x+m)/4;return y>T&&y>N?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=I/n,r=L/n):T>N?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=I/s,r=Y/s):N<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(N),n=L/r,s=Y/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-x)*(m-x)+(f-v)*(f-v)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-x)/M,this.y=(f-v)/M,this.z=(u-h)/M,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Qo=class extends Wi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new En(0,0,e,t),this.scissorTest=!1,this.viewport=new En(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(hr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===as?wn:Jn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Qn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new va(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ei=class extends Qo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ma=class extends Qn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var el=class extends Qn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xi=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=r[a+0],d=r[a+1],x=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(o===1){e[t+0]=u,e[t+1]=d,e[t+2]=x,e[t+3]=v;return}if(f!==v||l!==u||c!==d||h!==x){let m=1-o,p=l*u+c*d+h*x+f*v,M=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let N=Math.sqrt(y),I=Math.atan2(N,p*M);m=Math.sin(m*I)/N,o=Math.sin(o*I)/N}let T=o*M;if(l=l*m+u*T,c=c*m+d*T,h=h*m+x*T,f=f*m+v*T,m===1-o){let N=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=N,c*=N,h*=N,f*=N}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],u=r[a+1],d=r[a+2],x=r[a+3];return e[t]=o*x+h*f+l*d-c*u,e[t+1]=l*x+h*u+c*f-o*d,e[t+2]=c*x+h*d+o*u-l*f,e[t+3]=h*x-o*f-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),u=l(n/2),d=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*x,this._y=c*d*f-u*h*x,this._z=c*h*x+u*d*f,this._w=c*h*f-u*d*x;break;case"YXZ":this._x=u*h*f+c*d*x,this._y=c*d*f-u*h*x,this._z=c*h*x-u*d*f,this._w=c*h*f+u*d*x;break;case"ZXY":this._x=u*h*f-c*d*x,this._y=c*d*f+u*h*x,this._z=c*h*x+u*d*f,this._w=c*h*f-u*d*x;break;case"ZYX":this._x=u*h*f-c*d*x,this._y=c*d*f+u*h*x,this._z=c*h*x-u*d*f,this._w=c*h*f+u*d*x;break;case"YZX":this._x=u*h*f+c*d*x,this._y=c*d*f+u*h*x,this._z=c*h*x-u*d*f,this._w=c*h*f-u*d*x;break;case"XZY":this._x=u*h*f-c*d*x,this._y=c*d*f-u*h*x,this._z=c*h*x+u*d*f,this._w=c*h*f+u*d*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=n+o+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>f){let d=2*Math.sqrt(1+n-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){let d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Cn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*f+this._w*u,this._x=n*f+this._x*u,this._y=s*f+this._y*u,this._z=r*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Mo.copy(this).projectOnVector(e),this.sub(Mo)}reflect(e){return this.sub(Mo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Cn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Mo=new F,Wc=new Xi,os=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ii.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ii.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ii):ii.fromBufferAttribute(r,a),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hr.copy(n.boundingBox)),Hr.applyMatrix4(e.matrixWorld),this.union(Hr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ar),kr.subVectors(this.max,ar),bs.subVectors(e.a,ar),Es.subVectors(e.b,ar),Ts.subVectors(e.c,ar),Di.subVectors(Es,bs),Ui.subVectors(Ts,Es),Ji.subVectors(bs,Ts);let t=[0,-Di.z,Di.y,0,-Ui.z,Ui.y,0,-Ji.z,Ji.y,Di.z,0,-Di.x,Ui.z,0,-Ui.x,Ji.z,0,-Ji.x,-Di.y,Di.x,0,-Ui.y,Ui.x,0,-Ji.y,Ji.x,0];return!So(t,bs,Es,Ts,kr)||(t=[1,0,0,0,1,0,0,0,1],!So(t,bs,Es,Ts,kr))?!1:(zr.crossVectors(Di,Ui),t=[zr.x,zr.y,zr.z],So(t,bs,Es,Ts,kr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},gi=[new F,new F,new F,new F,new F,new F,new F,new F],ii=new F,Hr=new os,bs=new F,Es=new F,Ts=new F,Di=new F,Ui=new F,Ji=new F,ar=new F,kr=new F,zr=new F,ji=new F;function So(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ji.fromArray(i,r);let o=s.x*Math.abs(ji.x)+s.y*Math.abs(ji.y)+s.z*Math.abs(ji.z),l=e.dot(ji),c=t.dot(ji),h=n.dot(ji);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Bd=new os,or=new F,bo=new F,Ys=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Bd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;or.subVectors(e,this.center);let t=or.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(or,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(or.copy(e.center).add(bo)),this.expandByPoint(or.copy(e.center).sub(bo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},_i=new F,Eo=new F,Vr=new F,Ni=new F,To=new F,Gr=new F,wo=new F,xr=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=_i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_i.copy(this.origin).addScaledVector(this.direction,t),_i.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Eo.copy(e).add(t).multiplyScalar(.5),Vr.copy(t).sub(e).normalize(),Ni.copy(this.origin).sub(Eo);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Vr),o=Ni.dot(this.direction),l=-Ni.dot(Vr),c=Ni.lengthSq(),h=Math.abs(1-a*a),f,u,d,x;if(h>0)if(f=a*l-o,u=a*o-l,x=r*h,f>=0)if(u>=-x)if(u<=x){let v=1/h;f*=v,u*=v,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-x?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=x?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Eo).addScaledVector(Vr,u),d}intersectSphere(e,t){_i.subVectors(e.center,this.origin);let n=_i.dot(this.direction),s=_i.dot(_i)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,_i)!==null}intersectTriangle(e,t,n,s,r){To.subVectors(t,e),Gr.subVectors(n,e),wo.crossVectors(To,Gr);let a=this.direction.dot(wo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ni.subVectors(this.origin,e);let l=o*this.direction.dot(Gr.crossVectors(Ni,Gr));if(l<0)return null;let c=o*this.direction.dot(To.cross(Ni));if(c<0||l+c>a)return null;let h=-o*Ni.dot(wo);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},fn=class i{constructor(e,t,n,s,r,a,o,l,c,h,f,u,d,x,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,f,u,d,x,v,m)}set(e,t,n,s,r,a,o,l,c,h,f,u,d,x,v,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=x,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/ws.setFromMatrixColumn(e,0).length(),r=1/ws.setFromMatrixColumn(e,1).length(),a=1/ws.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let u=a*h,d=a*f,x=o*h,v=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=d+x*c,t[5]=u-v*c,t[9]=-o*l,t[2]=v-u*c,t[6]=x+d*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,d=l*f,x=c*h,v=c*f;t[0]=u+v*o,t[4]=x*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=d*o-x,t[6]=v+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,d=l*f,x=c*h,v=c*f;t[0]=u-v*o,t[4]=-a*f,t[8]=x+d*o,t[1]=d+x*o,t[5]=a*h,t[9]=v-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,d=a*f,x=o*h,v=o*f;t[0]=l*h,t[4]=x*c-d,t[8]=u*c+v,t[1]=l*f,t[5]=v*c+u,t[9]=d*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,d=a*c,x=o*l,v=o*c;t[0]=l*h,t[4]=v-u*f,t[8]=x*f+d,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*f+x,t[10]=u-v*f}else if(e.order==="XZY"){let u=a*l,d=a*c,x=o*l,v=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+v,t[5]=a*h,t[9]=d*f-x,t[2]=x*f-d,t[6]=o*h,t[10]=v*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hd,e,kd)}lookAt(e,t,n){let s=this.elements;return qn.subVectors(e,t),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),Oi.crossVectors(n,qn),Oi.lengthSq()===0&&(Math.abs(n.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),Oi.crossVectors(n,qn)),Oi.normalize(),Wr.crossVectors(qn,Oi),s[0]=Oi.x,s[4]=Wr.x,s[8]=qn.x,s[1]=Oi.y,s[5]=Wr.y,s[9]=qn.y,s[2]=Oi.z,s[6]=Wr.z,s[10]=qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],x=n[2],v=n[6],m=n[10],p=n[14],M=n[3],y=n[7],T=n[11],N=n[15],I=s[0],L=s[4],Y=s[8],b=s[12],w=s[1],U=s[5],B=s[9],J=s[13],P=s[2],G=s[6],O=s[10],se=s[14],$=s[3],Q=s[7],ie=s[11],le=s[15];return r[0]=a*I+o*w+l*P+c*$,r[4]=a*L+o*U+l*G+c*Q,r[8]=a*Y+o*B+l*O+c*ie,r[12]=a*b+o*J+l*se+c*le,r[1]=h*I+f*w+u*P+d*$,r[5]=h*L+f*U+u*G+d*Q,r[9]=h*Y+f*B+u*O+d*ie,r[13]=h*b+f*J+u*se+d*le,r[2]=x*I+v*w+m*P+p*$,r[6]=x*L+v*U+m*G+p*Q,r[10]=x*Y+v*B+m*O+p*ie,r[14]=x*b+v*J+m*se+p*le,r[3]=M*I+y*w+T*P+N*$,r[7]=M*L+y*U+T*G+N*Q,r[11]=M*Y+y*B+T*O+N*ie,r[15]=M*b+y*J+T*se+N*le,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],d=e[14],x=e[3],v=e[7],m=e[11],p=e[15];return x*(+r*l*f-s*c*f-r*o*u+n*c*u+s*o*d-n*l*d)+v*(+t*l*d-t*c*u+r*a*u-s*a*d+s*c*h-r*l*h)+m*(+t*c*f-t*o*d-r*a*f+n*a*d+r*o*h-n*c*h)+p*(-s*o*h-t*l*f+t*o*u+s*a*f-n*a*u+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],d=e[11],x=e[12],v=e[13],m=e[14],p=e[15],M=f*m*c-v*u*c+v*l*d-o*m*d-f*l*p+o*u*p,y=x*u*c-h*m*c-x*l*d+a*m*d+h*l*p-a*u*p,T=h*v*c-x*f*c+x*o*d-a*v*d-h*o*p+a*f*p,N=x*f*l-h*v*l-x*o*u+a*v*u+h*o*m-a*f*m,I=t*M+n*y+s*T+r*N;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/I;return e[0]=M*L,e[1]=(v*u*r-f*m*r-v*s*d+n*m*d+f*s*p-n*u*p)*L,e[2]=(o*m*r-v*l*r+v*s*c-n*m*c-o*s*p+n*l*p)*L,e[3]=(f*l*r-o*u*r-f*s*c+n*u*c+o*s*d-n*l*d)*L,e[4]=y*L,e[5]=(h*m*r-x*u*r+x*s*d-t*m*d-h*s*p+t*u*p)*L,e[6]=(x*l*r-a*m*r-x*s*c+t*m*c+a*s*p-t*l*p)*L,e[7]=(a*u*r-h*l*r+h*s*c-t*u*c-a*s*d+t*l*d)*L,e[8]=T*L,e[9]=(x*f*r-h*v*r-x*n*d+t*v*d+h*n*p-t*f*p)*L,e[10]=(a*v*r-x*o*r+x*n*c-t*v*c-a*n*p+t*o*p)*L,e[11]=(h*o*r-a*f*r-h*n*c+t*f*c+a*n*d-t*o*d)*L,e[12]=N*L,e[13]=(h*v*s-x*f*s+x*n*u-t*v*u-h*n*m+t*f*m)*L,e[14]=(x*o*s-a*v*s-x*n*l+t*v*l+a*n*m-t*o*m)*L,e[15]=(a*f*s-h*o*s+h*n*l-t*f*l-a*n*u+t*o*u)*L,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,x=r*f,v=a*h,m=a*f,p=o*f,M=l*c,y=l*h,T=l*f,N=n.x,I=n.y,L=n.z;return s[0]=(1-(v+p))*N,s[1]=(d+T)*N,s[2]=(x-y)*N,s[3]=0,s[4]=(d-T)*I,s[5]=(1-(u+p))*I,s[6]=(m+M)*I,s[7]=0,s[8]=(x+y)*L,s[9]=(m-M)*L,s[10]=(1-(u+v))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=ws.set(s[0],s[1],s[2]).length(),a=ws.set(s[4],s[5],s[6]).length(),o=ws.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],si.copy(this);let c=1/r,h=1/a,f=1/o;return si.elements[0]*=c,si.elements[1]*=c,si.elements[2]*=c,si.elements[4]*=h,si.elements[5]*=h,si.elements[6]*=h,si.elements[8]*=f,si.elements[9]*=f,si.elements[10]*=f,t.setFromRotationMatrix(si),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Si){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),f=(t+e)/(t-e),u=(n+s)/(n-s),d,x;if(o===Si)d=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===_a)d=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Si){let l=this.elements,c=1/(t-e),h=1/(n-s),f=1/(a-r),u=(t+e)*c,d=(n+s)*h,x,v;if(o===Si)x=(a+r)*f,v=-2*f;else if(o===_a)x=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ws=new F,si=new fn,Hd=new F(0,0,0),kd=new F(1,1,1),Oi=new F,Wr=new F,qn=new F,Xc=new fn,qc=new Xi,Sa=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Cn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Cn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Cn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Cn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Cn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Cn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Xc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qc.setFromEuler(this),this.setFromQuaternion(qc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Sa.DEFAULT_ORDER="XYZ";var yr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},zd=0,Yc=new F,As=new Xi,xi=new fn,Xr=new F,lr=new F,Vd=new F,Gd=new Xi,$c=new F(1,0,0),Zc=new F(0,1,0),Kc=new F(0,0,1),Wd={type:"added"},Xd={type:"removed"},Fn=class i extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=Js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new F,t=new Sa,n=new Xi,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new fn},normalMatrix:{value:new wt}}),this.matrix=new fn,this.matrixWorld=new fn,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return As.setFromAxisAngle(e,t),this.quaternion.multiply(As),this}rotateOnWorldAxis(e,t){return As.setFromAxisAngle(e,t),this.quaternion.premultiply(As),this}rotateX(e){return this.rotateOnAxis($c,e)}rotateY(e){return this.rotateOnAxis(Zc,e)}rotateZ(e){return this.rotateOnAxis(Kc,e)}translateOnAxis(e,t){return Yc.copy(e).applyQuaternion(this.quaternion),this.position.add(Yc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($c,e)}translateY(e){return this.translateOnAxis(Zc,e)}translateZ(e){return this.translateOnAxis(Kc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xr.copy(e):Xr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(lr,Xr,this.up):xi.lookAt(Xr,lr,this.up),this.quaternion.setFromRotationMatrix(xi),s&&(xi.extractRotation(s.matrixWorld),As.setFromRotationMatrix(xi),this.quaternion.premultiply(As.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Wd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xd)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,e,Vd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,Gd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),d=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Fn.DEFAULT_UP=new F(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ri=new F,yi=new F,Ao=new F,vi=new F,Rs=new F,Cs=new F,Jc=new F,Ro=new F,Co=new F,Po=new F,qr=!1,Fs=class i{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ri.subVectors(e,t),s.cross(ri);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ri.subVectors(s,t),yi.subVectors(n,t),Ao.subVectors(e,t);let a=ri.dot(ri),o=ri.dot(yi),l=ri.dot(Ao),c=yi.dot(yi),h=yi.dot(Ao),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-o*h)*u,x=(a*h-o*l)*u;return r.set(1-d-x,x,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getUV(e,t,n,s,r,a,o,l){return qr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),qr=!0),this.getInterpolation(e,t,n,s,r,a,o,l)}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vi.x),l.addScaledVector(a,vi.y),l.addScaledVector(o,vi.z),l)}static isFrontFacing(e,t,n,s){return ri.subVectors(n,t),yi.subVectors(e,t),ri.cross(yi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ri.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),ri.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return qr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),qr=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Rs.subVectors(s,n),Cs.subVectors(r,n),Ro.subVectors(e,n);let l=Rs.dot(Ro),c=Cs.dot(Ro);if(l<=0&&c<=0)return t.copy(n);Co.subVectors(e,s);let h=Rs.dot(Co),f=Cs.dot(Co);if(h>=0&&f<=h)return t.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Rs,a);Po.subVectors(e,r);let d=Rs.dot(Po),x=Cs.dot(Po);if(x>=0&&d<=x)return t.copy(r);let v=d*c-l*x;if(v<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(n).addScaledVector(Cs,o);let m=h*x-d*f;if(m<=0&&f-h>=0&&d-x>=0)return Jc.subVectors(r,s),o=(f-h)/(f-h+(d-x)),t.copy(s).addScaledVector(Jc,o);let p=1/(m+v+u);return a=v*p,o=u*p,t.copy(n).addScaledVector(Rs,a).addScaledVector(Cs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Jh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},Yr={h:0,s:0,l:0};function Io(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var mt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ft.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ft.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ft.workingColorSpace){if(e=Dd(e,1),t=Cn(t,0,1),n=Cn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Io(a,r,e+1/3),this.g=Io(a,r,e),this.b=Io(a,r,e-1/3)}return Ft.toWorkingColorSpace(this,s),this}setStyle(e,t=wn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wn){let n=Jh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vs(e.r),this.g=Vs(e.g),this.b=Vs(e.b),this}copyLinearToSRGB(e){return this.r=yo(e.r),this.g=yo(e.g),this.b=yo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wn){return Ft.fromWorkingColorSpace(Rn.copy(this),e),Math.round(Cn(Rn.r*255,0,255))*65536+Math.round(Cn(Rn.g*255,0,255))*256+Math.round(Cn(Rn.b*255,0,255))}getHexString(e=wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ft.workingColorSpace){Ft.fromWorkingColorSpace(Rn.copy(this),t);let n=Rn.r,s=Rn.g,r=Rn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ft.workingColorSpace){return Ft.fromWorkingColorSpace(Rn.copy(this),t),e.r=Rn.r,e.g=Rn.g,e.b=Rn.b,e}getStyle(e=wn){Ft.fromWorkingColorSpace(Rn.copy(this),e);let t=Rn.r,n=Rn.g,s=Rn.b;return e!==wn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Fi),this.setHSL(Fi.h+e,Fi.s+t,Fi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Fi),e.getHSL(Yr);let n=_o(Fi.h,Yr.h,t),s=_o(Fi.s,Yr.s,t),r=_o(Fi.l,Yr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Rn=new mt;mt.NAMES=Jh;var qd=0,qi=class extends Wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=Js(),this.name="",this.type="Material",this.blending=zs,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xo,this.blendDst=qo,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=ua,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ms,this.stencilZFail=Ms,this.stencilZPass=Ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(n.blending=this.blending),this.side!==Gi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xo&&(n.blendSrc=this.blendSrc),this.blendDst!==qo&&(n.blendDst=this.blendDst),this.blendEquation!==ns&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ua&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ms&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ms&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ms&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},rn=class extends qi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Bh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var dn=new F,$r=new Ne,Vn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Bc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$r.fromBufferAttribute(this,t),$r.applyMatrix3(e),this.setXY(t,$r.x,$r.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix3(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=rr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=kn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=rr(t,this.array)),t}setX(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=rr(t,this.array)),t}setY(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=rr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=rr(t,this.array)),t}setW(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),n=kn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),n=kn(n,this.array),s=kn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),n=kn(n,this.array),s=kn(s,this.array),r=kn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bc&&(e.usage=this.usage),e}};var ba=class extends Vn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ea=class extends Vn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Qt=class extends Vn{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Yd=0,Zn=new fn,Lo=new Fn,Ps=new F,Yn=new os,cr=new os,bn=new F,Gn=class i extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=Js(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kh(e)?Ea:ba)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new wt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,t,n){return Zn.makeTranslation(e,t,n),this.applyMatrix4(Zn),this}scale(e,t,n){return Zn.makeScale(e,t,n),this.applyMatrix4(Zn),this}lookAt(e){return Lo.lookAt(e),Lo.updateMatrix(),this.applyMatrix4(Lo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Qt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new os);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Yn.setFromBufferAttribute(r),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ys);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(Yn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];cr.setFromBufferAttribute(o),this.morphTargetsRelative?(bn.addVectors(Yn.min,cr.min),Yn.expandByPoint(bn),bn.addVectors(Yn.max,cr.max),Yn.expandByPoint(bn)):(Yn.expandByPoint(cr.min),Yn.expandByPoint(cr.max))}Yn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)bn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(bn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)bn.fromBufferAttribute(o,c),l&&(Ps.fromBufferAttribute(e,c),bn.add(Ps)),s=Math.max(s,n.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vn(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<o;w++)c[w]=new F,h[w]=new F;let f=new F,u=new F,d=new F,x=new Ne,v=new Ne,m=new Ne,p=new F,M=new F;function y(w,U,B){f.fromArray(s,w*3),u.fromArray(s,U*3),d.fromArray(s,B*3),x.fromArray(a,w*2),v.fromArray(a,U*2),m.fromArray(a,B*2),u.sub(f),d.sub(f),v.sub(x),m.sub(x);let J=1/(v.x*m.y-m.x*v.y);isFinite(J)&&(p.copy(u).multiplyScalar(m.y).addScaledVector(d,-v.y).multiplyScalar(J),M.copy(d).multiplyScalar(v.x).addScaledVector(u,-m.x).multiplyScalar(J),c[w].add(p),c[U].add(p),c[B].add(p),h[w].add(M),h[U].add(M),h[B].add(M))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let w=0,U=T.length;w<U;++w){let B=T[w],J=B.start,P=B.count;for(let G=J,O=J+P;G<O;G+=3)y(n[G+0],n[G+1],n[G+2])}let N=new F,I=new F,L=new F,Y=new F;function b(w){L.fromArray(r,w*3),Y.copy(L);let U=c[w];N.copy(U),N.sub(L.multiplyScalar(L.dot(U))).normalize(),I.crossVectors(Y,U);let J=I.dot(h[w])<0?-1:1;l[w*4]=N.x,l[w*4+1]=N.y,l[w*4+2]=N.z,l[w*4+3]=J}for(let w=0,U=T.length;w<U;++w){let B=T[w],J=B.start,P=B.count;for(let G=J,O=J+P;G<O;G+=3)b(n[G+0]),b(n[G+1]),b(n[G+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Vn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,h=new F,f=new F;if(e)for(let u=0,d=e.count;u<d;u+=3){let x=e.getX(u+0),v=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bn.fromBufferAttribute(e,t),bn.normalize(),e.setXYZ(t,bn.x,bn.y,bn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h),d=0,x=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*h;for(let p=0;p<h;p++)u[x++]=c[d++]}return new Vn(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=e(u,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},jc=new fn,Qi=new xr,Zr=new Ys,Qc=new F,Is=new F,Ls=new F,Ds=new F,Do=new F,Kr=new F,Jr=new Ne,jr=new Ne,Qr=new Ne,eh=new F,th=new F,nh=new F,ea=new F,ta=new F,ct=class extends Fn{constructor(e=new Gn,t=new rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Kr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(Do.fromBufferAttribute(f,e),a?Kr.addScaledVector(Do,h):Kr.addScaledVector(Do.sub(t),h))}t.add(Kr)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(r),Qi.copy(e.ray).recast(e.near),!(Zr.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(Zr,Qc)===null||Qi.origin.distanceToSquared(Qc)>(e.far-e.near)**2))&&(jc.copy(r).invert(),Qi.copy(e.ray).applyMatrix4(jc),!(n.boundingBox!==null&&Qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Qi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,v=u.length;x<v;x++){let m=u[x],p=a[m.materialIndex],M=Math.max(m.start,d.start),y=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let T=M,N=y;T<N;T+=3){let I=o.getX(T),L=o.getX(T+1),Y=o.getX(T+2);s=na(this,p,e,n,c,h,f,I,L,Y),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let x=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=x,p=v;m<p;m+=3){let M=o.getX(m),y=o.getX(m+1),T=o.getX(m+2);s=na(this,a,e,n,c,h,f,M,y,T),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,v=u.length;x<v;x++){let m=u[x],p=a[m.materialIndex],M=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let T=M,N=y;T<N;T+=3){let I=T,L=T+1,Y=T+2;s=na(this,p,e,n,c,h,f,I,L,Y),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let x=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=x,p=v;m<p;m+=3){let M=m,y=m+1,T=m+2;s=na(this,a,e,n,c,h,f,M,y,T),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function $d(i,e,t,n,s,r,a,o){let l;if(e.side===zn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Gi,o),l===null)return null;ta.copy(o),ta.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ta);return c<t.near||c>t.far?null:{distance:c,point:ta.clone(),object:i}}function na(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Is),i.getVertexPosition(l,Ls),i.getVertexPosition(c,Ds);let h=$d(i,e,t,n,Is,Ls,Ds,ea);if(h){s&&(Jr.fromBufferAttribute(s,o),jr.fromBufferAttribute(s,l),Qr.fromBufferAttribute(s,c),h.uv=Fs.getInterpolation(ea,Is,Ls,Ds,Jr,jr,Qr,new Ne)),r&&(Jr.fromBufferAttribute(r,o),jr.fromBufferAttribute(r,l),Qr.fromBufferAttribute(r,c),h.uv1=Fs.getInterpolation(ea,Is,Ls,Ds,Jr,jr,Qr,new Ne),h.uv2=h.uv1),a&&(eh.fromBufferAttribute(a,o),th.fromBufferAttribute(a,l),nh.fromBufferAttribute(a,c),h.normal=Fs.getInterpolation(ea,Is,Ls,Ds,eh,th,nh,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new F,materialIndex:0};Fs.getNormal(Is,Ls,Ds,f.normal),h.face=f}return h}var Pn=class i extends Gn{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],u=0,d=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,s,a,2),x("x","z","y",1,-1,e,n,-t,s,a,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(f,2));function x(v,m,p,M,y,T,N,I,L,Y,b){let w=T/L,U=N/Y,B=T/2,J=N/2,P=I/2,G=L+1,O=Y+1,se=0,$=0,Q=new F;for(let ie=0;ie<O;ie++){let le=ie*U-J;for(let pe=0;pe<G;pe++){let ee=pe*w-B;Q[v]=ee*M,Q[m]=le*y,Q[p]=P,c.push(Q.x,Q.y,Q.z),Q[v]=0,Q[m]=0,Q[p]=I>0?1:-1,h.push(Q.x,Q.y,Q.z),f.push(pe/L),f.push(1-ie/Y),se+=1}}for(let ie=0;ie<Y;ie++)for(let le=0;le<L;le++){let pe=u+le+G*ie,ee=u+le+G*(ie+1),de=u+(le+1)+G*(ie+1),we=u+(le+1)+G*ie;l.push(pe,ee,we),l.push(ee,de,we),$+=6}o.addGroup(d,$,b),d+=$,u+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function $s(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Un(i){let e={};for(let t=0;t<i.length;t++){let n=$s(i[t]);for(let s in n)e[s]=n[s]}return e}function Zd(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function jh(i){return i.getRenderTarget()===null?i.outputColorSpace:Ft.workingColorSpace}var Kd={clone:$s,merge:Un},Jd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ti=class extends qi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jd,this.fragmentShader=jd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$s(e.uniforms),this.uniformsGroups=Zd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ta=class extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fn,this.projectionMatrix=new fn,this.projectionMatrixInverse=new fn,this.coordinateSystem=Si}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},On=class extends Ta{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Jo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(go*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jo*2*Math.atan(Math.tan(go*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(go*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Us=-90,Ns=1,tl=class extends Fn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new On(Us,Ns,e,t);s.layers=this.layers,this.add(s);let r=new On(Us,Ns,e,t);r.layers=this.layers,this.add(r);let a=new On(Us,Ns,e,t);a.layers=this.layers,this.add(a);let o=new On(Us,Ns,e,t);o.layers=this.layers,this.add(o);let l=new On(Us,Ns,e,t);l.layers=this.layers,this.add(l);let c=new On(Us,Ns,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Si)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_a)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(f,u,d),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},wa=class extends Qn{constructor(e,t,n,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ws,super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},nl=class extends Ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(hr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===as?wn:Jn),this.texture=new wa(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Kn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Pn(5,5,5),r=new Ti({name:"CubemapFromEquirect",uniforms:$s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zn,blending:ki});r.uniforms.tEquirect.value=t;let a=new ct(s,r),o=t.minFilter;return t.minFilter===gr&&(t.minFilter=Kn),new tl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Uo=new F,Qd=new F,ef=new wt,ai=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Uo.subVectors(n,t).cross(Qd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Uo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ef.getNormalMatrix(e),s=this.coplanarPoint(Uo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},es=new Ys,ia=new F,vr=class{constructor(e=new ai,t=new ai,n=new ai,s=new ai,r=new ai,a=new ai){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Si){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],f=s[6],u=s[7],d=s[8],x=s[9],v=s[10],m=s[11],p=s[12],M=s[13],y=s[14],T=s[15];if(n[0].setComponents(l-r,u-c,m-d,T-p).normalize(),n[1].setComponents(l+r,u+c,m+d,T+p).normalize(),n[2].setComponents(l+a,u+h,m+x,T+M).normalize(),n[3].setComponents(l-a,u-h,m-x,T-M).normalize(),n[4].setComponents(l-o,u-f,m-v,T-y).normalize(),t===Si)n[5].setComponents(l+o,u+f,m+v,T+y).normalize();else if(t===_a)n[5].setComponents(o,f,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(e){return es.center.set(0,0,0),es.radius=.7071067811865476,es.applyMatrix4(e.matrixWorld),this.intersectsSphere(es)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ia.x=s.normal.x>0?e.max.x:e.min.x,ia.y=s.normal.y>0?e.max.y:e.min.y,ia.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ia)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Qh(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function tf(i,e){let t=e.isWebGL2,n=new WeakMap;function s(c,h){let f=c.array,u=c.usage,d=f.byteLength,x=i.createBuffer();i.bindBuffer(h,x),i.bufferData(h,f,u),c.onUploadCallback();let v;if(f instanceof Float32Array)v=i.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=i.SHORT;else if(f instanceof Uint32Array)v=i.UNSIGNED_INT;else if(f instanceof Int32Array)v=i.INT;else if(f instanceof Int8Array)v=i.BYTE;else if(f instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:x,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:d}}function r(c,h,f){let u=h.array,d=h._updateRange,x=h.updateRanges;if(i.bindBuffer(f,c),d.count===-1&&x.length===0&&i.bufferSubData(f,0,u),x.length!==0){for(let v=0,m=x.length;v<m;v++){let p=x[v];t?i.bufferSubData(f,p.start*u.BYTES_PER_ELEMENT,u,p.start,p.count):i.bufferSubData(f,p.start*u.BYTES_PER_ELEMENT,u.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}d.count!==-1&&(t?i.bufferSubData(f,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count):i.bufferSubData(f,d.offset*u.BYTES_PER_ELEMENT,u.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let f=n.get(c);if(f===void 0)n.set(c,s(c,h));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,c,h),f.version=c.version}}return{get:a,remove:o,update:l}}var wi=class i extends Gn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=e/o,u=t/l,d=[],x=[],v=[],m=[];for(let p=0;p<h;p++){let M=p*u-a;for(let y=0;y<c;y++){let T=y*f-r;x.push(T,-M,0),v.push(0,0,1),m.push(y/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){let y=M+c*p,T=M+c*(p+1),N=M+1+c*(p+1),I=M+1+c*p;d.push(y,T,I),d.push(T,N,I)}this.setIndex(d),this.setAttribute("position",new Qt(x,3)),this.setAttribute("normal",new Qt(v,3)),this.setAttribute("uv",new Qt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},nf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sf=`#ifdef USE_ALPHAHASH
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
#endif`,rf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,af=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,of=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,lf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cf=`#ifdef USE_AOMAP
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
#endif`,hf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uf=`#ifdef USE_BATCHING
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
#endif`,df=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ff=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gf=`#ifdef USE_IRIDESCENCE
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
#endif`,_f=`#ifdef USE_BUMPMAP
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
#endif`,xf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ef=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Tf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,wf=`#define PI 3.141592653589793
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
} // validated`,Af=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Rf=`vec3 transformedNormal = objectNormal;
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
#endif`,Cf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,If=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Df="gl_FragColor = linearToOutputTexel( gl_FragColor );",Uf=`
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
}`,Nf=`#ifdef USE_ENVMAP
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
#endif`,Of=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ff=`#ifdef USE_ENVMAP
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
#endif`,Bf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hf=`#ifdef USE_ENVMAP
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
#endif`,kf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wf=`#ifdef USE_GRADIENTMAP
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
}`,Xf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,qf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$f=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zf=`uniform bool receiveShadow;
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
#endif`,Kf=`#ifdef USE_ENVMAP
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
#endif`,Jf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ep=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tp=`PhysicalMaterial material;
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
#endif`,np=`struct PhysicalMaterial {
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
}`,ip=`
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
#endif`,sp=`#if defined( RE_IndirectDiffuse )
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
#endif`,rp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ap=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,op=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,cp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,hp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,up=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fp=`#if defined( USE_POINTS_UV )
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
#endif`,pp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_p=`#ifdef USE_MORPHNORMALS
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
#endif`,xp=`#ifdef USE_MORPHTARGETS
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
#endif`,yp=`#ifdef USE_MORPHTARGETS
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
#endif`,vp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Mp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ep=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tp=`#ifdef USE_NORMALMAP
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
#endif`,wp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ap=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ip=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Lp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Up=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Np=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Op=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zp=`float getShadowMask() {
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
}`,Vp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gp=`#ifdef USE_SKINNING
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
#endif`,Wp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xp=`#ifdef USE_SKINNING
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
#endif`,qp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$p=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kp=`#ifdef USE_TRANSMISSION
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
#endif`,Jp=`#ifdef USE_TRANSMISSION
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
#endif`,jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,nm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,im=`uniform sampler2D t2D;
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
}`,sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,om=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lm=`#include <common>
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
}`,cm=`#if DEPTH_PACKING == 3200
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
}`,hm=`#define DISTANCE
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
}`,um=`#define DISTANCE
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
}`,dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pm=`uniform float scale;
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
}`,mm=`uniform vec3 diffuse;
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
}`,gm=`#include <common>
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
}`,_m=`uniform vec3 diffuse;
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
}`,xm=`#define LAMBERT
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
}`,ym=`#define LAMBERT
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
}`,vm=`#define MATCAP
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
}`,Mm=`#define MATCAP
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
}`,Sm=`#define NORMAL
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
}`,bm=`#define NORMAL
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
}`,Em=`#define PHONG
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
}`,Tm=`#define PHONG
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
}`,wm=`#define STANDARD
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
}`,Am=`#define STANDARD
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
}`,Rm=`#define TOON
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
}`,Cm=`#define TOON
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
}`,Pm=`uniform float size;
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
}`,Im=`uniform vec3 diffuse;
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
}`,Lm=`#include <common>
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
}`,Dm=`uniform vec3 color;
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
}`,Um=`uniform float rotation;
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
}`,Nm=`uniform vec3 diffuse;
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
}`,St={alphahash_fragment:nf,alphahash_pars_fragment:sf,alphamap_fragment:rf,alphamap_pars_fragment:af,alphatest_fragment:of,alphatest_pars_fragment:lf,aomap_fragment:cf,aomap_pars_fragment:hf,batching_pars_vertex:uf,batching_vertex:df,begin_vertex:ff,beginnormal_vertex:pf,bsdfs:mf,iridescence_fragment:gf,bumpmap_pars_fragment:_f,clipping_planes_fragment:xf,clipping_planes_pars_fragment:yf,clipping_planes_pars_vertex:vf,clipping_planes_vertex:Mf,color_fragment:Sf,color_pars_fragment:bf,color_pars_vertex:Ef,color_vertex:Tf,common:wf,cube_uv_reflection_fragment:Af,defaultnormal_vertex:Rf,displacementmap_pars_vertex:Cf,displacementmap_vertex:Pf,emissivemap_fragment:If,emissivemap_pars_fragment:Lf,colorspace_fragment:Df,colorspace_pars_fragment:Uf,envmap_fragment:Nf,envmap_common_pars_fragment:Of,envmap_pars_fragment:Ff,envmap_pars_vertex:Bf,envmap_physical_pars_fragment:Kf,envmap_vertex:Hf,fog_vertex:kf,fog_pars_vertex:zf,fog_fragment:Vf,fog_pars_fragment:Gf,gradientmap_pars_fragment:Wf,lightmap_fragment:Xf,lightmap_pars_fragment:qf,lights_lambert_fragment:Yf,lights_lambert_pars_fragment:$f,lights_pars_begin:Zf,lights_toon_fragment:Jf,lights_toon_pars_fragment:jf,lights_phong_fragment:Qf,lights_phong_pars_fragment:ep,lights_physical_fragment:tp,lights_physical_pars_fragment:np,lights_fragment_begin:ip,lights_fragment_maps:sp,lights_fragment_end:rp,logdepthbuf_fragment:ap,logdepthbuf_pars_fragment:op,logdepthbuf_pars_vertex:lp,logdepthbuf_vertex:cp,map_fragment:hp,map_pars_fragment:up,map_particle_fragment:dp,map_particle_pars_fragment:fp,metalnessmap_fragment:pp,metalnessmap_pars_fragment:mp,morphcolor_vertex:gp,morphnormal_vertex:_p,morphtarget_pars_vertex:xp,morphtarget_vertex:yp,normal_fragment_begin:vp,normal_fragment_maps:Mp,normal_pars_fragment:Sp,normal_pars_vertex:bp,normal_vertex:Ep,normalmap_pars_fragment:Tp,clearcoat_normal_fragment_begin:wp,clearcoat_normal_fragment_maps:Ap,clearcoat_pars_fragment:Rp,iridescence_pars_fragment:Cp,opaque_fragment:Pp,packing:Ip,premultiplied_alpha_fragment:Lp,project_vertex:Dp,dithering_fragment:Up,dithering_pars_fragment:Np,roughnessmap_fragment:Op,roughnessmap_pars_fragment:Fp,shadowmap_pars_fragment:Bp,shadowmap_pars_vertex:Hp,shadowmap_vertex:kp,shadowmask_pars_fragment:zp,skinbase_vertex:Vp,skinning_pars_vertex:Gp,skinning_vertex:Wp,skinnormal_vertex:Xp,specularmap_fragment:qp,specularmap_pars_fragment:Yp,tonemapping_fragment:$p,tonemapping_pars_fragment:Zp,transmission_fragment:Kp,transmission_pars_fragment:Jp,uv_pars_fragment:jp,uv_pars_vertex:Qp,uv_vertex:em,worldpos_vertex:tm,background_vert:nm,background_frag:im,backgroundCube_vert:sm,backgroundCube_frag:rm,cube_vert:am,cube_frag:om,depth_vert:lm,depth_frag:cm,distanceRGBA_vert:hm,distanceRGBA_frag:um,equirect_vert:dm,equirect_frag:fm,linedashed_vert:pm,linedashed_frag:mm,meshbasic_vert:gm,meshbasic_frag:_m,meshlambert_vert:xm,meshlambert_frag:ym,meshmatcap_vert:vm,meshmatcap_frag:Mm,meshnormal_vert:Sm,meshnormal_frag:bm,meshphong_vert:Em,meshphong_frag:Tm,meshphysical_vert:wm,meshphysical_frag:Am,meshtoon_vert:Rm,meshtoon_frag:Cm,points_vert:Pm,points_frag:Im,shadow_vert:Lm,shadow_frag:Dm,sprite_vert:Um,sprite_frag:Nm},Te={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new wt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new wt},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0},uvTransform:{value:new wt}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}}},fi={basic:{uniforms:Un([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:St.meshbasic_vert,fragmentShader:St.meshbasic_frag},lambert:{uniforms:Un([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new mt(0)}}]),vertexShader:St.meshlambert_vert,fragmentShader:St.meshlambert_frag},phong:{uniforms:Un([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30}}]),vertexShader:St.meshphong_vert,fragmentShader:St.meshphong_frag},standard:{uniforms:Un([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag},toon:{uniforms:Un([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new mt(0)}}]),vertexShader:St.meshtoon_vert,fragmentShader:St.meshtoon_frag},matcap:{uniforms:Un([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:St.meshmatcap_vert,fragmentShader:St.meshmatcap_frag},points:{uniforms:Un([Te.points,Te.fog]),vertexShader:St.points_vert,fragmentShader:St.points_frag},dashed:{uniforms:Un([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:St.linedashed_vert,fragmentShader:St.linedashed_frag},depth:{uniforms:Un([Te.common,Te.displacementmap]),vertexShader:St.depth_vert,fragmentShader:St.depth_frag},normal:{uniforms:Un([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:St.meshnormal_vert,fragmentShader:St.meshnormal_frag},sprite:{uniforms:Un([Te.sprite,Te.fog]),vertexShader:St.sprite_vert,fragmentShader:St.sprite_frag},background:{uniforms:{uvTransform:{value:new wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:St.background_vert,fragmentShader:St.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:St.backgroundCube_vert,fragmentShader:St.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:St.cube_vert,fragmentShader:St.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:St.equirect_vert,fragmentShader:St.equirect_frag},distanceRGBA:{uniforms:Un([Te.common,Te.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:St.distanceRGBA_vert,fragmentShader:St.distanceRGBA_frag},shadow:{uniforms:Un([Te.lights,Te.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:St.shadow_vert,fragmentShader:St.shadow_frag}};fi.physical={uniforms:Un([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new wt},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new wt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new wt},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new wt},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new wt},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new wt},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new wt}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag};var sa={r:0,b:0,g:0};function Om(i,e,t,n,s,r,a){let o=new mt(0),l=r===!0?0:1,c,h,f=null,u=0,d=null;function x(m,p){let M=!1,y=p.isScene===!0?p.background:null;y&&y.isTexture&&(y=(p.backgroundBlurriness>0?t:e).get(y)),y===null?v(o,l):y&&y.isColor&&(v(y,1),M=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Wa)?(h===void 0&&(h=new ct(new Pn(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:$s(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,I,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=Ft.getTransfer(y.colorSpace)!==Wt,(f!==y||u!==y.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,f=y,u=y.version,d=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new ct(new wi(2,2),new Ti({name:"BackgroundMaterial",uniforms:$s(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=Ft.getTransfer(y.colorSpace)!==Wt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||u!==y.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,f=y,u=y.version,d=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,p){m.getRGB(sa,jh(i)),n.buffers.color.setClear(sa.r,sa.g,sa.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(o,l)},render:x}}function Fm(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null),c=l,h=!1;function f(P,G,O,se,$){let Q=!1;if(a){let ie=v(se,O,G);c!==ie&&(c=ie,d(c.object)),Q=p(P,se,O,$),Q&&M(P,se,O,$)}else{let ie=G.wireframe===!0;(c.geometry!==se.id||c.program!==O.id||c.wireframe!==ie)&&(c.geometry=se.id,c.program=O.id,c.wireframe=ie,Q=!0)}$!==null&&t.update($,i.ELEMENT_ARRAY_BUFFER),(Q||h)&&(h=!1,Y(P,G,O,se),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function u(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function d(P){return n.isWebGL2?i.bindVertexArray(P):r.bindVertexArrayOES(P)}function x(P){return n.isWebGL2?i.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function v(P,G,O){let se=O.wireframe===!0,$=o[P.id];$===void 0&&($={},o[P.id]=$);let Q=$[G.id];Q===void 0&&(Q={},$[G.id]=Q);let ie=Q[se];return ie===void 0&&(ie=m(u()),Q[se]=ie),ie}function m(P){let G=[],O=[],se=[];for(let $=0;$<s;$++)G[$]=0,O[$]=0,se[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:O,attributeDivisors:se,object:P,attributes:{},index:null}}function p(P,G,O,se){let $=c.attributes,Q=G.attributes,ie=0,le=O.getAttributes();for(let pe in le)if(le[pe].location>=0){let de=$[pe],we=Q[pe];if(we===void 0&&(pe==="instanceMatrix"&&P.instanceMatrix&&(we=P.instanceMatrix),pe==="instanceColor"&&P.instanceColor&&(we=P.instanceColor)),de===void 0||de.attribute!==we||we&&de.data!==we.data)return!0;ie++}return c.attributesNum!==ie||c.index!==se}function M(P,G,O,se){let $={},Q=G.attributes,ie=0,le=O.getAttributes();for(let pe in le)if(le[pe].location>=0){let de=Q[pe];de===void 0&&(pe==="instanceMatrix"&&P.instanceMatrix&&(de=P.instanceMatrix),pe==="instanceColor"&&P.instanceColor&&(de=P.instanceColor));let we={};we.attribute=de,de&&de.data&&(we.data=de.data),$[pe]=we,ie++}c.attributes=$,c.attributesNum=ie,c.index=se}function y(){let P=c.newAttributes;for(let G=0,O=P.length;G<O;G++)P[G]=0}function T(P){N(P,0)}function N(P,G){let O=c.newAttributes,se=c.enabledAttributes,$=c.attributeDivisors;O[P]=1,se[P]===0&&(i.enableVertexAttribArray(P),se[P]=1),$[P]!==G&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,G),$[P]=G)}function I(){let P=c.newAttributes,G=c.enabledAttributes;for(let O=0,se=G.length;O<se;O++)G[O]!==P[O]&&(i.disableVertexAttribArray(O),G[O]=0)}function L(P,G,O,se,$,Q,ie){ie===!0?i.vertexAttribIPointer(P,G,O,$,Q):i.vertexAttribPointer(P,G,O,se,$,Q)}function Y(P,G,O,se){if(n.isWebGL2===!1&&(P.isInstancedMesh||se.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();let $=se.attributes,Q=O.getAttributes(),ie=G.defaultAttributeValues;for(let le in Q){let pe=Q[le];if(pe.location>=0){let ee=$[le];if(ee===void 0&&(le==="instanceMatrix"&&P.instanceMatrix&&(ee=P.instanceMatrix),le==="instanceColor"&&P.instanceColor&&(ee=P.instanceColor)),ee!==void 0){let de=ee.normalized,we=ee.itemSize,He=t.get(ee);if(He===void 0)continue;let ke=He.buffer,rt=He.type,ht=He.bytesPerElement,Ve=n.isWebGL2===!0&&(rt===i.INT||rt===i.UNSIGNED_INT||ee.gpuType===kh);if(ee.isInterleavedBufferAttribute){let bt=ee.data,Z=bt.stride,Zt=ee.offset;if(bt.isInstancedInterleavedBuffer){for(let $e=0;$e<pe.locationSize;$e++)N(pe.location+$e,bt.meshPerAttribute);P.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let $e=0;$e<pe.locationSize;$e++)T(pe.location+$e);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let $e=0;$e<pe.locationSize;$e++)L(pe.location+$e,we/pe.locationSize,rt,de,Z*ht,(Zt+we/pe.locationSize*$e)*ht,Ve)}else{if(ee.isInstancedBufferAttribute){for(let bt=0;bt<pe.locationSize;bt++)N(pe.location+bt,ee.meshPerAttribute);P.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let bt=0;bt<pe.locationSize;bt++)T(pe.location+bt);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let bt=0;bt<pe.locationSize;bt++)L(pe.location+bt,we/pe.locationSize,rt,de,we*ht,we/pe.locationSize*bt*ht,Ve)}}else if(ie!==void 0){let de=ie[le];if(de!==void 0)switch(de.length){case 2:i.vertexAttrib2fv(pe.location,de);break;case 3:i.vertexAttrib3fv(pe.location,de);break;case 4:i.vertexAttrib4fv(pe.location,de);break;default:i.vertexAttrib1fv(pe.location,de)}}}}I()}function b(){B();for(let P in o){let G=o[P];for(let O in G){let se=G[O];for(let $ in se)x(se[$].object),delete se[$];delete G[O]}delete o[P]}}function w(P){if(o[P.id]===void 0)return;let G=o[P.id];for(let O in G){let se=G[O];for(let $ in se)x(se[$].object),delete se[$];delete G[O]}delete o[P.id]}function U(P){for(let G in o){let O=o[G];if(O[P.id]===void 0)continue;let se=O[P.id];for(let $ in se)x(se[$].object),delete se[$];delete O[P.id]}}function B(){J(),h=!0,c!==l&&(c=l,d(c.object))}function J(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:B,resetDefaultState:J,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfProgram:U,initAttributes:y,enableAttribute:T,disableUnusedAttributes:I}}function Bm(i,e,t,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,f){i.drawArrays(r,h,f),t.update(f,r,1)}function l(h,f,u){if(u===0)return;let d,x;if(s)d=i,x="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[x](r,h,f,u),t.update(f,r,u)}function c(h,f,u){if(u===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let x=0;x<u;x++)this.render(h[x],f[x]);else{d.multiDrawArraysWEBGL(r,h,0,f,0,u);let x=0;for(let v=0;v<u;v++)x+=f[v];t.update(x,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Hm(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let L=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=u>0,T=a||e.has("OES_texture_float"),N=y&&T,I=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:M,vertexTextures:y,floatFragmentTextures:T,floatVertexTextures:N,maxSamples:I}}function km(i){let e=this,t=null,n=0,s=!1,r=!1,a=new ai,o=new wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){let x=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||x===null||x.length===0||r&&!m)r?h(null):c();else{let M=r?0:n,y=M*4,T=p.clippingState||null;l.value=T,T=h(x,u,y,d);for(let N=0;N!==y;++N)T[N]=t[N];p.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,d,x){let v=f!==null?f.length:0,m=null;if(v!==0){if(m=l.value,x!==!0||m===null){let p=d+v*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,T=d;y!==v;++y,T+=4)a.copy(f[y]).applyMatrix4(M,o),a.normal.toArray(m,T),m[T+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function zm(i){let e=new WeakMap;function t(a,o){return o===Yo?a.mapping=Ws:o===$o&&(a.mapping=Xs),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Yo||o===$o)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new nl(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Aa=class extends Ta{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Bs=4,ih=[.125,.215,.35,.446,.526,.582],is=20,No=new Aa,sh=new mt,Oo=null,Fo=0,Bo=0,ts=(1+Math.sqrt(5))/2,Os=1/ts,rh=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,ts,Os),new F(0,ts,-Os),new F(Os,0,ts),new F(-Os,0,ts),new F(ts,Os,0),new F(-ts,Os,0)],Ra=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Oo=this._renderer.getRenderTarget(),Fo=this._renderer.getActiveCubeFace(),Bo=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=oh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Oo,Fo,Bo),e.scissorTest=!1,ra(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ws||e.mapping===Xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oo=this._renderer.getRenderTarget(),Fo=this._renderer.getActiveCubeFace(),Bo=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Kn,minFilter:Kn,generateMipmaps:!1,type:_r,format:li,colorSpace:bi,depthBuffer:!1},s=ah(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ah(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vm(r)),this._blurMaterial=Gm(r,e,t)}return s}_compileMaterial(e){let t=new ct(this._lodPlanes[0],e);this._renderer.compile(t,No)}_sceneToCubeUV(e,t,n,s){let o=new On(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(sh),h.toneMapping=zi,h.autoClear=!1;let d=new rn({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),x=new ct(new Pn,d),v=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,v=!0):(d.color.copy(sh),v=!0);for(let p=0;p<6;p++){let M=p%3;M===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):M===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let y=this._cubeSize;ra(s,M*y,p>2?y:0,y,y),h.setRenderTarget(s),v&&h.render(x,o),h.render(e,o)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=u,h.autoClear=f,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ws||e.mapping===Xs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=lh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=oh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new ct(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;ra(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,No)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=rh[(s-1)%rh.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new ct(this._lodPlanes[s],c),u=c.uniforms,d=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*is-1),v=r/x,m=isFinite(r)?1+Math.floor(h*v):is;m>is&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${is}`);let p=[],M=0;for(let L=0;L<is;++L){let Y=L/v,b=Math.exp(-Y*Y/2);p.push(b),L===0?M+=b:L<m&&(M+=2*b)}for(let L=0;L<p.length;L++)p[L]=p[L]/M;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:y}=this;u.dTheta.value=x,u.mipInt.value=y-n;let T=this._sizeLods[s],N=3*T*(s>y-Bs?s-y+Bs:0),I=4*(this._cubeSize-T);ra(t,N,I,3*T,2*T),l.setRenderTarget(t),l.render(f,No)}};function Vm(i){let e=[],t=[],n=[],s=i,r=i-Bs+1+ih.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Bs?l=ih[a-i+Bs-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,x=6,v=3,m=2,p=1,M=new Float32Array(v*x*d),y=new Float32Array(m*x*d),T=new Float32Array(p*x*d);for(let I=0;I<d;I++){let L=I%3*2/3-1,Y=I>2?0:-1,b=[L,Y,0,L+2/3,Y,0,L+2/3,Y+1,0,L,Y,0,L+2/3,Y+1,0,L,Y+1,0];M.set(b,v*x*I),y.set(u,m*x*I);let w=[I,I,I,I,I,I];T.set(w,p*x*I)}let N=new Gn;N.setAttribute("position",new Vn(M,v)),N.setAttribute("uv",new Vn(y,m)),N.setAttribute("faceIndex",new Vn(T,p)),e.push(N),s>Bs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ah(i,e,t){let n=new Ei(i,e,t);return n.texture.mapping=Wa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ra(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Gm(i,e,t){let n=new Float32Array(is),s=new F(0,1,0);return new Ti({name:"SphericalGaussianBlur",defines:{n:is,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:zl(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function oh(){return new Ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zl(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function lh(){return new Ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function zl(){return`

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
	`}function Wm(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Yo||l===$o,h=l===Ws||l===Xs;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new Ra(i)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{let f=o.image;if(c&&f&&f.height>0||h&&f&&s(f)){t===null&&(t=new Ra(i));let u=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,u),o.addEventListener("dispose",r),u.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Xm(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function qm(i,e,t,n){let s={},r=new WeakMap;function a(f){let u=f.target;u.index!==null&&e.remove(u.index);for(let x in u.attributes)e.remove(u.attributes[x]);for(let x in u.morphAttributes){let v=u.morphAttributes[x];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}u.removeEventListener("dispose",a),delete s[u.id];let d=r.get(u);d&&(e.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(f){let u=f.attributes;for(let x in u)e.update(u[x],i.ARRAY_BUFFER);let d=f.morphAttributes;for(let x in d){let v=d[x];for(let m=0,p=v.length;m<p;m++)e.update(v[m],i.ARRAY_BUFFER)}}function c(f){let u=[],d=f.index,x=f.attributes.position,v=0;if(d!==null){let M=d.array;v=d.version;for(let y=0,T=M.length;y<T;y+=3){let N=M[y+0],I=M[y+1],L=M[y+2];u.push(N,I,I,L,L,N)}}else if(x!==void 0){let M=x.array;v=x.version;for(let y=0,T=M.length/3-1;y<T;y+=3){let N=y+0,I=y+1,L=y+2;u.push(N,I,I,L,L,N)}}else return;let m=new(Kh(u)?Ea:ba)(u,1);m.version=v;let p=r.get(f);p&&e.remove(p),r.set(f,m)}function h(f){let u=r.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function Ym(i,e,t,n){let s=n.isWebGL2,r;function a(d){r=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function h(d,x){i.drawElements(r,x,o,d*l),t.update(x,r,1)}function f(d,x,v){if(v===0)return;let m,p;if(s)m=i,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,x,o,d*l,v),t.update(x,r,v)}function u(d,x,v){if(v===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<v;p++)this.render(d[p]/l,x[p]);else{m.multiDrawElementsWEBGL(r,x,0,o,d,0,v);let p=0;for(let M=0;M<v;M++)p+=x[M];t.update(p,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=f,this.renderMultiDraw=u}function $m(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Zm(i,e){return i[0]-e[0]}function Km(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Jm(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,a=new En,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,f){let u=c.morphTargetInfluences;if(e.isWebGL2===!0){let d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=d!==void 0?d.length:0,v=r.get(h);if(v===void 0||v.count!==x){let P=function(){B.dispose(),r.delete(h),h.removeEventListener("dispose",P)};v!==void 0&&v.texture.dispose();let M=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,N=h.morphAttributes.position||[],I=h.morphAttributes.normal||[],L=h.morphAttributes.color||[],Y=0;M===!0&&(Y=1),y===!0&&(Y=2),T===!0&&(Y=3);let b=h.attributes.position.count*Y,w=1;b>e.maxTextureSize&&(w=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let U=new Float32Array(b*w*4*x),B=new Ma(U,b,w,x);B.type=Hi,B.needsUpdate=!0;let J=Y*4;for(let G=0;G<x;G++){let O=N[G],se=I[G],$=L[G],Q=b*w*4*G;for(let ie=0;ie<O.count;ie++){let le=ie*J;M===!0&&(a.fromBufferAttribute(O,ie),U[Q+le+0]=a.x,U[Q+le+1]=a.y,U[Q+le+2]=a.z,U[Q+le+3]=0),y===!0&&(a.fromBufferAttribute(se,ie),U[Q+le+4]=a.x,U[Q+le+5]=a.y,U[Q+le+6]=a.z,U[Q+le+7]=0),T===!0&&(a.fromBufferAttribute($,ie),U[Q+le+8]=a.x,U[Q+le+9]=a.y,U[Q+le+10]=a.z,U[Q+le+11]=$.itemSize===4?a.w:1)}}v={count:x,texture:B,size:new Ne(b,w)},r.set(h,v),h.addEventListener("dispose",P)}let m=0;for(let M=0;M<u.length;M++)m+=u[M];let p=h.morphTargetsRelative?1:1-m;f.getUniforms().setValue(i,"morphTargetBaseInfluence",p),f.getUniforms().setValue(i,"morphTargetInfluences",u),f.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}else{let d=u===void 0?0:u.length,x=n[h.id];if(x===void 0||x.length!==d){x=[];for(let y=0;y<d;y++)x[y]=[y,0];n[h.id]=x}for(let y=0;y<d;y++){let T=x[y];T[0]=y,T[1]=u[y]}x.sort(Km);for(let y=0;y<8;y++)y<d&&x[y][1]?(o[y][0]=x[y][0],o[y][1]=x[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(Zm);let v=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let y=0;y<8;y++){let T=o[y],N=T[0],I=T[1];N!==Number.MAX_SAFE_INTEGER&&I?(v&&h.getAttribute("morphTarget"+y)!==v[N]&&h.setAttribute("morphTarget"+y,v[N]),m&&h.getAttribute("morphNormal"+y)!==m[N]&&h.setAttribute("morphNormal"+y,m[N]),s[y]=I,p+=I):(v&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),m&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),s[y]=0)}let M=h.morphTargetsRelative?1:1-p;f.getUniforms().setValue(i,"morphTargetBaseInfluence",M),f.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function jm(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,f=e.get(l,h);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return f}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Ca=class extends Qn{constructor(e,t,n,s,r,a,o,l,c,h){if(h=h!==void 0?h:rs,h!==rs&&h!==qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===rs&&(n=Bi),n===void 0&&h===qs&&(n=ss),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Nn,this.minFilter=l!==void 0?l:Nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},eu=new Qn,tu=new Ca(1,1);tu.compareFunction=Zh;var nu=new Ma,iu=new el,su=new wa,ch=[],hh=[],uh=new Float32Array(16),dh=new Float32Array(9),fh=new Float32Array(4);function js(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=ch[s];if(r===void 0&&(r=new Float32Array(s),ch[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function xn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function yn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function qa(i,e){let t=hh[e];t===void 0&&(t=new Int32Array(e),hh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Qm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function eg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;i.uniform2fv(this.addr,e),yn(t,e)}}function tg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xn(t,e))return;i.uniform3fv(this.addr,e),yn(t,e)}}function ng(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;i.uniform4fv(this.addr,e),yn(t,e)}}function ig(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(xn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),yn(t,e)}else{if(xn(t,n))return;fh.set(n),i.uniformMatrix2fv(this.addr,!1,fh),yn(t,n)}}function sg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(xn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),yn(t,e)}else{if(xn(t,n))return;dh.set(n),i.uniformMatrix3fv(this.addr,!1,dh),yn(t,n)}}function rg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(xn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),yn(t,e)}else{if(xn(t,n))return;uh.set(n),i.uniformMatrix4fv(this.addr,!1,uh),yn(t,n)}}function ag(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function og(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;i.uniform2iv(this.addr,e),yn(t,e)}}function lg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;i.uniform3iv(this.addr,e),yn(t,e)}}function cg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;i.uniform4iv(this.addr,e),yn(t,e)}}function hg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ug(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;i.uniform2uiv(this.addr,e),yn(t,e)}}function dg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;i.uniform3uiv(this.addr,e),yn(t,e)}}function fg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;i.uniform4uiv(this.addr,e),yn(t,e)}}function pg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?tu:eu;t.setTexture2D(e||r,s)}function mg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||iu,s)}function gg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||su,s)}function _g(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||nu,s)}function xg(i){switch(i){case 5126:return Qm;case 35664:return eg;case 35665:return tg;case 35666:return ng;case 35674:return ig;case 35675:return sg;case 35676:return rg;case 5124:case 35670:return ag;case 35667:case 35671:return og;case 35668:case 35672:return lg;case 35669:case 35673:return cg;case 5125:return hg;case 36294:return ug;case 36295:return dg;case 36296:return fg;case 35678:case 36198:case 36298:case 36306:case 35682:return pg;case 35679:case 36299:case 36307:return mg;case 35680:case 36300:case 36308:case 36293:return gg;case 36289:case 36303:case 36311:case 36292:return _g}}function yg(i,e){i.uniform1fv(this.addr,e)}function vg(i,e){let t=js(e,this.size,2);i.uniform2fv(this.addr,t)}function Mg(i,e){let t=js(e,this.size,3);i.uniform3fv(this.addr,t)}function Sg(i,e){let t=js(e,this.size,4);i.uniform4fv(this.addr,t)}function bg(i,e){let t=js(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Eg(i,e){let t=js(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Tg(i,e){let t=js(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function wg(i,e){i.uniform1iv(this.addr,e)}function Ag(i,e){i.uniform2iv(this.addr,e)}function Rg(i,e){i.uniform3iv(this.addr,e)}function Cg(i,e){i.uniform4iv(this.addr,e)}function Pg(i,e){i.uniform1uiv(this.addr,e)}function Ig(i,e){i.uniform2uiv(this.addr,e)}function Lg(i,e){i.uniform3uiv(this.addr,e)}function Dg(i,e){i.uniform4uiv(this.addr,e)}function Ug(i,e,t){let n=this.cache,s=e.length,r=qa(t,s);xn(n,r)||(i.uniform1iv(this.addr,r),yn(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||eu,r[a])}function Ng(i,e,t){let n=this.cache,s=e.length,r=qa(t,s);xn(n,r)||(i.uniform1iv(this.addr,r),yn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||iu,r[a])}function Og(i,e,t){let n=this.cache,s=e.length,r=qa(t,s);xn(n,r)||(i.uniform1iv(this.addr,r),yn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||su,r[a])}function Fg(i,e,t){let n=this.cache,s=e.length,r=qa(t,s);xn(n,r)||(i.uniform1iv(this.addr,r),yn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||nu,r[a])}function Bg(i){switch(i){case 5126:return yg;case 35664:return vg;case 35665:return Mg;case 35666:return Sg;case 35674:return bg;case 35675:return Eg;case 35676:return Tg;case 5124:case 35670:return wg;case 35667:case 35671:return Ag;case 35668:case 35672:return Rg;case 35669:case 35673:return Cg;case 5125:return Pg;case 36294:return Ig;case 36295:return Lg;case 36296:return Dg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ug;case 35679:case 36299:case 36307:return Ng;case 35680:case 36300:case 36308:case 36293:return Og;case 36289:case 36303:case 36311:case 36292:return Fg}}var il=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=xg(t.type)}},sl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Bg(t.type)}},rl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Ho=/(\w+)(\])?(\[|\.)?/g;function ph(i,e){i.seq.push(e),i.map[e.id]=e}function Hg(i,e,t){let n=i.name,s=n.length;for(Ho.lastIndex=0;;){let r=Ho.exec(n),a=Ho.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){ph(t,c===void 0?new il(o,i,e):new sl(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new rl(o),ph(t,f)),t=f}}}var Gs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Hg(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function mh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var kg=37297,zg=0;function Vg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Gg(i){let e=Ft.getPrimaries(Ft.workingColorSpace),t=Ft.getPrimaries(i),n;switch(e===t?n="":e===ga&&t===ma?n="LinearDisplayP3ToLinearSRGB":e===ma&&t===ga&&(n="LinearSRGBToLinearDisplayP3"),i){case bi:case Xa:return[n,"LinearTransferOETF"];case wn:case kl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function gh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Vg(i.getShaderSource(e),a)}else return s}function Wg(i,e){let t=Gg(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Xg(i,e){let t;switch(e){case ld:t="Linear";break;case cd:t="Reinhard";break;case hd:t="OptimizedCineon";break;case ud:t="ACESFilmic";break;case fd:t="AgX";break;case dd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function qg(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Hs).join(`
`)}function Yg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Hs).join(`
`)}function $g(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Zg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Hs(i){return i!==""}function _h(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Kg=/^[ \t]*#include +<([\w\d./]+)>/gm;function al(i){return i.replace(Kg,jg)}var Jg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function jg(i,e){let t=St[e];if(t===void 0){let n=Jg.get(e);if(n!==void 0)t=St[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return al(t)}var Qg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yh(i){return i.replace(Qg,e0)}function e0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vh(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function t0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Fh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Bl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Mi&&(e="SHADOWMAP_TYPE_VSM"),e}function n0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ws:case Xs:e="ENVMAP_TYPE_CUBE";break;case Wa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function i0(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Xs:e="ENVMAP_MODE_REFRACTION";break}return e}function s0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Bh:e="ENVMAP_BLENDING_MULTIPLY";break;case ad:e="ENVMAP_BLENDING_MIX";break;case od:e="ENVMAP_BLENDING_ADD";break}return e}function r0(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function a0(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=t0(t),c=n0(t),h=i0(t),f=s0(t),u=r0(t),d=t.isWebGL2?"":qg(t),x=Yg(t),v=$g(r),m=s.createProgram(),p,M,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Hs).join(`
`),p.length>0&&(p+=`
`),M=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Hs).join(`
`),M.length>0&&(M+=`
`)):(p=[vh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hs).join(`
`),M=[d,vh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zi?"#define TONE_MAPPING":"",t.toneMapping!==zi?St.tonemapping_pars_fragment:"",t.toneMapping!==zi?Xg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",St.colorspace_pars_fragment,Wg("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hs).join(`
`)),a=al(a),a=_h(a,t),a=xh(a,t),o=al(o),o=_h(o,t),o=xh(o,t),a=yh(a),o=yh(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Hc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);let T=y+p+a,N=y+M+o,I=mh(s,s.VERTEX_SHADER,T),L=mh(s,s.FRAGMENT_SHADER,N);s.attachShader(m,I),s.attachShader(m,L),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function Y(B){if(i.debug.checkShaderErrors){let J=s.getProgramInfoLog(m).trim(),P=s.getShaderInfoLog(I).trim(),G=s.getShaderInfoLog(L).trim(),O=!0,se=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,I,L);else{let $=gh(s,I,"vertex"),Q=gh(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+J+`
`+$+`
`+Q)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(P===""||G==="")&&(se=!1);se&&(B.diagnostics={runnable:O,programLog:J,vertexShader:{log:P,prefix:p},fragmentShader:{log:G,prefix:M}})}s.deleteShader(I),s.deleteShader(L),b=new Gs(s,m),w=Zg(s,m)}let b;this.getUniforms=function(){return b===void 0&&Y(this),b};let w;this.getAttributes=function(){return w===void 0&&Y(this),w};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(m,kg)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zg++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=I,this.fragmentShader=L,this}var o0=0,ol=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ll(e),t.set(e,n)),n}},ll=class{constructor(e){this.id=o0++,this.code=e,this.usedTimes=0}};function l0(i,e,t,n,s,r,a){let o=new yr,l=new ol,c=[],h=s.isWebGL2,f=s.logarithmicDepthBuffer,u=s.vertexTextures,d=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return b===0?"uv":`uv${b}`}function m(b,w,U,B,J){let P=B.fog,G=J.geometry,O=b.isMeshStandardMaterial?B.environment:null,se=(b.isMeshStandardMaterial?t:e).get(b.envMap||O),$=se&&se.mapping===Wa?se.image.height:null,Q=x[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));let ie=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,le=ie!==void 0?ie.length:0,pe=0;G.morphAttributes.position!==void 0&&(pe=1),G.morphAttributes.normal!==void 0&&(pe=2),G.morphAttributes.color!==void 0&&(pe=3);let ee,de,we,He;if(Q){let vt=fi[Q];ee=vt.vertexShader,de=vt.fragmentShader}else ee=b.vertexShader,de=b.fragmentShader,l.update(b),we=l.getVertexShaderID(b),He=l.getFragmentShaderID(b);let ke=i.getRenderTarget(),rt=J.isInstancedMesh===!0,ht=J.isBatchedMesh===!0,Ve=!!b.map,bt=!!b.matcap,Z=!!se,Zt=!!b.aoMap,$e=!!b.lightMap,it=!!b.bumpMap,Ge=!!b.normalMap,Ht=!!b.displacementMap,pt=!!b.emissiveMap,A=!!b.metalnessMap,S=!!b.roughnessMap,K=b.anisotropy>0,ye=b.clearcoat>0,me=b.iridescence>0,ve=b.sheen>0,qe=b.transmission>0,Ae=K&&!!b.anisotropyMap,Oe=ye&&!!b.clearcoatMap,nt=ye&&!!b.clearcoatNormalMap,at=ye&&!!b.clearcoatRoughnessMap,ae=me&&!!b.iridescenceMap,ot=me&&!!b.iridescenceThicknessMap,et=ve&&!!b.sheenColorMap,lt=ve&&!!b.sheenRoughnessMap,Ye=!!b.specularMap,Le=!!b.specularColorMap,Ze=!!b.specularIntensityMap,Rt=qe&&!!b.transmissionMap,We=qe&&!!b.thicknessMap,De=!!b.gradientMap,fe=!!b.alphaMap,D=b.alphaTest>0,Re=!!b.alphaHash,Ce=!!b.extensions,je=!!G.attributes.uv1,Fe=!!G.attributes.uv2,Et=!!G.attributes.uv3,Pt=zi;return b.toneMapped&&(ke===null||ke.isXRRenderTarget===!0)&&(Pt=i.toneMapping),{isWebGL2:h,shaderID:Q,shaderType:b.type,shaderName:b.name,vertexShader:ee,fragmentShader:de,defines:b.defines,customVertexShaderID:we,customFragmentShaderID:He,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:ht,instancing:rt,instancingColor:rt&&J.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:ke===null?i.outputColorSpace:ke.isXRRenderTarget===!0?ke.texture.colorSpace:bi,map:Ve,matcap:bt,envMap:Z,envMapMode:Z&&se.mapping,envMapCubeUVHeight:$,aoMap:Zt,lightMap:$e,bumpMap:it,normalMap:Ge,displacementMap:u&&Ht,emissiveMap:pt,normalMapObjectSpace:Ge&&b.normalMapType===Td,normalMapTangentSpace:Ge&&b.normalMapType===$h,metalnessMap:A,roughnessMap:S,anisotropy:K,anisotropyMap:Ae,clearcoat:ye,clearcoatMap:Oe,clearcoatNormalMap:nt,clearcoatRoughnessMap:at,iridescence:me,iridescenceMap:ae,iridescenceThicknessMap:ot,sheen:ve,sheenColorMap:et,sheenRoughnessMap:lt,specularMap:Ye,specularColorMap:Le,specularIntensityMap:Ze,transmission:qe,transmissionMap:Rt,thicknessMap:We,gradientMap:De,opaque:b.transparent===!1&&b.blending===zs,alphaMap:fe,alphaTest:D,alphaHash:Re,combine:b.combine,mapUv:Ve&&v(b.map.channel),aoMapUv:Zt&&v(b.aoMap.channel),lightMapUv:$e&&v(b.lightMap.channel),bumpMapUv:it&&v(b.bumpMap.channel),normalMapUv:Ge&&v(b.normalMap.channel),displacementMapUv:Ht&&v(b.displacementMap.channel),emissiveMapUv:pt&&v(b.emissiveMap.channel),metalnessMapUv:A&&v(b.metalnessMap.channel),roughnessMapUv:S&&v(b.roughnessMap.channel),anisotropyMapUv:Ae&&v(b.anisotropyMap.channel),clearcoatMapUv:Oe&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:nt&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:et&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:lt&&v(b.sheenRoughnessMap.channel),specularMapUv:Ye&&v(b.specularMap.channel),specularColorMapUv:Le&&v(b.specularColorMap.channel),specularIntensityMapUv:Ze&&v(b.specularIntensityMap.channel),transmissionMapUv:Rt&&v(b.transmissionMap.channel),thicknessMapUv:We&&v(b.thicknessMap.channel),alphaMapUv:fe&&v(b.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Ge||K),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:je,vertexUv2s:Fe,vertexUv3s:Et,pointsUvs:J.isPoints===!0&&!!G.attributes.uv&&(Ve||fe),fog:!!P,useFog:b.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:J.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:pe,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:Pt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ve&&b.map.isVideoTexture===!0&&Ft.getTransfer(b.map.colorSpace)===Wt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===cn,flipSided:b.side===zn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:Ce&&b.extensions.derivatives===!0,extensionFragDepth:Ce&&b.extensions.fragDepth===!0,extensionDrawBuffers:Ce&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ce&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ce&&b.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){let w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(let U in b.defines)w.push(U),w.push(b.defines[U]);return b.isRawShaderMaterial===!1&&(M(w,b),y(w,b),w.push(i.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function M(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.anisotropyMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.numLightProbes),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function y(b,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),b.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),b.push(o.mask)}function T(b){let w=x[b.type],U;if(w){let B=fi[w];U=Kd.clone(B.uniforms)}else U=b.uniforms;return U}function N(b,w){let U;for(let B=0,J=c.length;B<J;B++){let P=c[B];if(P.cacheKey===w){U=P,++U.usedTimes;break}}return U===void 0&&(U=new a0(i,w,b,r),c.push(U)),U}function I(b){if(--b.usedTimes===0){let w=c.indexOf(b);c[w]=c[c.length-1],c.pop(),b.destroy()}}function L(b){l.remove(b)}function Y(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:T,acquireProgram:N,releaseProgram:I,releaseShaderCache:L,programs:c,dispose:Y}}function c0(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function h0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Mh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Sh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f,u,d,x,v,m){let p=i[e];return p===void 0?(p={id:f.id,object:f,geometry:u,material:d,groupOrder:x,renderOrder:f.renderOrder,z:v,group:m},i[e]=p):(p.id=f.id,p.object=f,p.geometry=u,p.material=d,p.groupOrder=x,p.renderOrder=f.renderOrder,p.z=v,p.group=m),e++,p}function o(f,u,d,x,v,m){let p=a(f,u,d,x,v,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(f,u,d,x,v,m){let p=a(f,u,d,x,v,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(f,u){t.length>1&&t.sort(f||h0),n.length>1&&n.sort(u||Mh),s.length>1&&s.sort(u||Mh)}function h(){for(let f=e,u=i.length;f<u;f++){let d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function u0(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Sh,i.set(n,[a])):s>=r.length?(a=new Sh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function d0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new mt};break;case"SpotLight":t={position:new F,direction:new F,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":t={color:new mt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function f0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var p0=0;function m0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function g0(i,e){let t=new d0,n=f0(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new F);let r=new F,a=new fn,o=new fn;function l(h,f){let u=0,d=0,x=0;for(let B=0;B<9;B++)s.probe[B].set(0,0,0);let v=0,m=0,p=0,M=0,y=0,T=0,N=0,I=0,L=0,Y=0,b=0;h.sort(m0);let w=f===!0?Math.PI:1;for(let B=0,J=h.length;B<J;B++){let P=h[B],G=P.color,O=P.intensity,se=P.distance,$=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=G.r*O*w,d+=G.g*O*w,x+=G.b*O*w;else if(P.isLightProbe){for(let Q=0;Q<9;Q++)s.probe[Q].addScaledVector(P.sh.coefficients[Q],O);b++}else if(P.isDirectionalLight){let Q=t.get(P);if(Q.color.copy(P.color).multiplyScalar(P.intensity*w),P.castShadow){let ie=P.shadow,le=n.get(P);le.shadowBias=ie.bias,le.shadowNormalBias=ie.normalBias,le.shadowRadius=ie.radius,le.shadowMapSize=ie.mapSize,s.directionalShadow[v]=le,s.directionalShadowMap[v]=$,s.directionalShadowMatrix[v]=P.shadow.matrix,T++}s.directional[v]=Q,v++}else if(P.isSpotLight){let Q=t.get(P);Q.position.setFromMatrixPosition(P.matrixWorld),Q.color.copy(G).multiplyScalar(O*w),Q.distance=se,Q.coneCos=Math.cos(P.angle),Q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Q.decay=P.decay,s.spot[p]=Q;let ie=P.shadow;if(P.map&&(s.spotLightMap[L]=P.map,L++,ie.updateMatrices(P),P.castShadow&&Y++),s.spotLightMatrix[p]=ie.matrix,P.castShadow){let le=n.get(P);le.shadowBias=ie.bias,le.shadowNormalBias=ie.normalBias,le.shadowRadius=ie.radius,le.shadowMapSize=ie.mapSize,s.spotShadow[p]=le,s.spotShadowMap[p]=$,I++}p++}else if(P.isRectAreaLight){let Q=t.get(P);Q.color.copy(G).multiplyScalar(O),Q.halfWidth.set(P.width*.5,0,0),Q.halfHeight.set(0,P.height*.5,0),s.rectArea[M]=Q,M++}else if(P.isPointLight){let Q=t.get(P);if(Q.color.copy(P.color).multiplyScalar(P.intensity*w),Q.distance=P.distance,Q.decay=P.decay,P.castShadow){let ie=P.shadow,le=n.get(P);le.shadowBias=ie.bias,le.shadowNormalBias=ie.normalBias,le.shadowRadius=ie.radius,le.shadowMapSize=ie.mapSize,le.shadowCameraNear=ie.camera.near,le.shadowCameraFar=ie.camera.far,s.pointShadow[m]=le,s.pointShadowMap[m]=$,s.pointShadowMatrix[m]=P.shadow.matrix,N++}s.point[m]=Q,m++}else if(P.isHemisphereLight){let Q=t.get(P);Q.skyColor.copy(P.color).multiplyScalar(O*w),Q.groundColor.copy(P.groundColor).multiplyScalar(O*w),s.hemi[y]=Q,y++}}M>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Te.LTC_FLOAT_1,s.rectAreaLTC2=Te.LTC_FLOAT_2):(s.rectAreaLTC1=Te.LTC_HALF_1,s.rectAreaLTC2=Te.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Te.LTC_FLOAT_1,s.rectAreaLTC2=Te.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Te.LTC_HALF_1,s.rectAreaLTC2=Te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=u,s.ambient[1]=d,s.ambient[2]=x;let U=s.hash;(U.directionalLength!==v||U.pointLength!==m||U.spotLength!==p||U.rectAreaLength!==M||U.hemiLength!==y||U.numDirectionalShadows!==T||U.numPointShadows!==N||U.numSpotShadows!==I||U.numSpotMaps!==L||U.numLightProbes!==b)&&(s.directional.length=v,s.spot.length=p,s.rectArea.length=M,s.point.length=m,s.hemi.length=y,s.directionalShadow.length=T,s.directionalShadowMap.length=T,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=I,s.spotShadowMap.length=I,s.directionalShadowMatrix.length=T,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=I+L-Y,s.spotLightMap.length=L,s.numSpotLightShadowsWithMaps=Y,s.numLightProbes=b,U.directionalLength=v,U.pointLength=m,U.spotLength=p,U.rectAreaLength=M,U.hemiLength=y,U.numDirectionalShadows=T,U.numPointShadows=N,U.numSpotShadows=I,U.numSpotMaps=L,U.numLightProbes=b,s.version=p0++)}function c(h,f){let u=0,d=0,x=0,v=0,m=0,p=f.matrixWorldInverse;for(let M=0,y=h.length;M<y;M++){let T=h[M];if(T.isDirectionalLight){let N=s.directional[u];N.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),N.direction.sub(r),N.direction.transformDirection(p),u++}else if(T.isSpotLight){let N=s.spot[x];N.position.setFromMatrixPosition(T.matrixWorld),N.position.applyMatrix4(p),N.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),N.direction.sub(r),N.direction.transformDirection(p),x++}else if(T.isRectAreaLight){let N=s.rectArea[v];N.position.setFromMatrixPosition(T.matrixWorld),N.position.applyMatrix4(p),o.identity(),a.copy(T.matrixWorld),a.premultiply(p),o.extractRotation(a),N.halfWidth.set(T.width*.5,0,0),N.halfHeight.set(0,T.height*.5,0),N.halfWidth.applyMatrix4(o),N.halfHeight.applyMatrix4(o),v++}else if(T.isPointLight){let N=s.point[d];N.position.setFromMatrixPosition(T.matrixWorld),N.position.applyMatrix4(p),d++}else if(T.isHemisphereLight){let N=s.hemi[m];N.direction.setFromMatrixPosition(T.matrixWorld),N.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:s}}function bh(i,e){let t=new g0(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(f){n.push(f)}function o(f){s.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function _0(i,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),l;return o===void 0?(l=new bh(i,e),t.set(r,[l])):a>=o.length?(l=new bh(i,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:n,dispose:s}}var cl=class extends qi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},hl=class extends qi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},x0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,y0=`uniform sampler2D shadow_pass;
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
}`;function v0(i,e,t){let n=new vr,s=new Ne,r=new Ne,a=new En,o=new cl({depthPacking:Ed}),l=new hl,c={},h=t.maxTextureSize,f={[Gi]:zn,[zn]:Gi,[cn]:cn},u=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:x0,fragmentShader:y0}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let x=new Gn;x.setAttribute("position",new Vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new ct(x,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fh;let p=this.type;this.render=function(I,L,Y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;let b=i.getRenderTarget(),w=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),B=i.state;B.setBlending(ki),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let J=p!==Mi&&this.type===Mi,P=p===Mi&&this.type!==Mi;for(let G=0,O=I.length;G<O;G++){let se=I[G],$=se.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let Q=$.getFrameExtents();if(s.multiply(Q),r.copy($.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Q.x),s.x=r.x*Q.x,$.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Q.y),s.y=r.y*Q.y,$.mapSize.y=r.y)),$.map===null||J===!0||P===!0){let le=this.type!==Mi?{minFilter:Nn,magFilter:Nn}:{};$.map!==null&&$.map.dispose(),$.map=new Ei(s.x,s.y,le),$.map.texture.name=se.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();let ie=$.getViewportCount();for(let le=0;le<ie;le++){let pe=$.getViewport(le);a.set(r.x*pe.x,r.y*pe.y,r.x*pe.z,r.y*pe.w),B.viewport(a),$.updateMatrices(se,le),n=$.getFrustum(),T(L,Y,$.camera,se,this.type)}$.isPointLightShadow!==!0&&this.type===Mi&&M($,Y),$.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,w,U)};function M(I,L){let Y=e.update(v);u.defines.VSM_SAMPLES!==I.blurSamples&&(u.defines.VSM_SAMPLES=I.blurSamples,d.defines.VSM_SAMPLES=I.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Ei(s.x,s.y)),u.uniforms.shadow_pass.value=I.map.texture,u.uniforms.resolution.value=I.mapSize,u.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(L,null,Y,u,v,null),d.uniforms.shadow_pass.value=I.mapPass.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(L,null,Y,d,v,null)}function y(I,L,Y,b){let w=null,U=Y.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(U!==void 0)w=U;else if(w=Y.isPointLight===!0?l:o,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){let B=w.uuid,J=L.uuid,P=c[B];P===void 0&&(P={},c[B]=P);let G=P[J];G===void 0&&(G=w.clone(),P[J]=G,L.addEventListener("dispose",N)),w=G}if(w.visible=L.visible,w.wireframe=L.wireframe,b===Mi?w.side=L.shadowSide!==null?L.shadowSide:L.side:w.side=L.shadowSide!==null?L.shadowSide:f[L.side],w.alphaMap=L.alphaMap,w.alphaTest=L.alphaTest,w.map=L.map,w.clipShadows=L.clipShadows,w.clippingPlanes=L.clippingPlanes,w.clipIntersection=L.clipIntersection,w.displacementMap=L.displacementMap,w.displacementScale=L.displacementScale,w.displacementBias=L.displacementBias,w.wireframeLinewidth=L.wireframeLinewidth,w.linewidth=L.linewidth,Y.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let B=i.properties.get(w);B.light=Y}return w}function T(I,L,Y,b,w){if(I.visible===!1)return;if(I.layers.test(L.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&w===Mi)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,I.matrixWorld);let J=e.update(I),P=I.material;if(Array.isArray(P)){let G=J.groups;for(let O=0,se=G.length;O<se;O++){let $=G[O],Q=P[$.materialIndex];if(Q&&Q.visible){let ie=y(I,Q,b,w);I.onBeforeShadow(i,I,L,Y,J,ie,$),i.renderBufferDirect(Y,null,J,ie,I,$),I.onAfterShadow(i,I,L,Y,J,ie,$)}}}else if(P.visible){let G=y(I,P,b,w);I.onBeforeShadow(i,I,L,Y,J,G,null),i.renderBufferDirect(Y,null,J,G,I,null),I.onAfterShadow(i,I,L,Y,J,G,null)}}let B=I.children;for(let J=0,P=B.length;J<P;J++)T(B[J],L,Y,b,w)}function N(I){I.target.removeEventListener("dispose",N);for(let Y in c){let b=c[Y],w=I.target.uuid;w in b&&(b[w].dispose(),delete b[w])}}}function M0(i,e,t){let n=t.isWebGL2;function s(){let D=!1,Re=new En,Ce=null,je=new En(0,0,0,0);return{setMask:function(Fe){Ce!==Fe&&!D&&(i.colorMask(Fe,Fe,Fe,Fe),Ce=Fe)},setLocked:function(Fe){D=Fe},setClear:function(Fe,Et,Pt,It,vt){vt===!0&&(Fe*=It,Et*=It,Pt*=It),Re.set(Fe,Et,Pt,It),je.equals(Re)===!1&&(i.clearColor(Fe,Et,Pt,It),je.copy(Re))},reset:function(){D=!1,Ce=null,je.set(-1,0,0,0)}}}function r(){let D=!1,Re=null,Ce=null,je=null;return{setTest:function(Fe){Fe?ht(i.DEPTH_TEST):Ve(i.DEPTH_TEST)},setMask:function(Fe){Re!==Fe&&!D&&(i.depthMask(Fe),Re=Fe)},setFunc:function(Fe){if(Ce!==Fe){switch(Fe){case Qu:i.depthFunc(i.NEVER);break;case ed:i.depthFunc(i.ALWAYS);break;case td:i.depthFunc(i.LESS);break;case ua:i.depthFunc(i.LEQUAL);break;case nd:i.depthFunc(i.EQUAL);break;case id:i.depthFunc(i.GEQUAL);break;case sd:i.depthFunc(i.GREATER);break;case rd:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ce=Fe}},setLocked:function(Fe){D=Fe},setClear:function(Fe){je!==Fe&&(i.clearDepth(Fe),je=Fe)},reset:function(){D=!1,Re=null,Ce=null,je=null}}}function a(){let D=!1,Re=null,Ce=null,je=null,Fe=null,Et=null,Pt=null,It=null,vt=null;return{setTest:function(gt){D||(gt?ht(i.STENCIL_TEST):Ve(i.STENCIL_TEST))},setMask:function(gt){Re!==gt&&!D&&(i.stencilMask(gt),Re=gt)},setFunc:function(gt,Xt,Kt){(Ce!==gt||je!==Xt||Fe!==Kt)&&(i.stencilFunc(gt,Xt,Kt),Ce=gt,je=Xt,Fe=Kt)},setOp:function(gt,Xt,Kt){(Et!==gt||Pt!==Xt||It!==Kt)&&(i.stencilOp(gt,Xt,Kt),Et=gt,Pt=Xt,It=Kt)},setLocked:function(gt){D=gt},setClear:function(gt){vt!==gt&&(i.clearStencil(gt),vt=gt)},reset:function(){D=!1,Re=null,Ce=null,je=null,Fe=null,Et=null,Pt=null,It=null,vt=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,f=new WeakMap,u={},d={},x=new WeakMap,v=[],m=null,p=!1,M=null,y=null,T=null,N=null,I=null,L=null,Y=null,b=new mt(0,0,0),w=0,U=!1,B=null,J=null,P=null,G=null,O=null,se=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,Q=0,ie=i.getParameter(i.VERSION);ie.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(ie)[1]),$=Q>=1):ie.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),$=Q>=2);let le=null,pe={},ee=i.getParameter(i.SCISSOR_BOX),de=i.getParameter(i.VIEWPORT),we=new En().fromArray(ee),He=new En().fromArray(de);function ke(D,Re,Ce,je){let Fe=new Uint8Array(4),Et=i.createTexture();i.bindTexture(D,Et),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pt=0;Pt<Ce;Pt++)n&&(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)?i.texImage3D(Re,0,i.RGBA,1,1,je,0,i.RGBA,i.UNSIGNED_BYTE,Fe):i.texImage2D(Re+Pt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Fe);return Et}let rt={};rt[i.TEXTURE_2D]=ke(i.TEXTURE_2D,i.TEXTURE_2D,1),rt[i.TEXTURE_CUBE_MAP]=ke(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(rt[i.TEXTURE_2D_ARRAY]=ke(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),rt[i.TEXTURE_3D]=ke(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ht(i.DEPTH_TEST),l.setFunc(ua),pt(!1),A(nc),ht(i.CULL_FACE),Ge(ki);function ht(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function Ve(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function bt(D,Re){return d[D]!==Re?(i.bindFramebuffer(D,Re),d[D]=Re,n&&(D===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Re),D===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Re)),!0):!1}function Z(D,Re){let Ce=v,je=!1;if(D)if(Ce=x.get(Re),Ce===void 0&&(Ce=[],x.set(Re,Ce)),D.isWebGLMultipleRenderTargets){let Fe=D.texture;if(Ce.length!==Fe.length||Ce[0]!==i.COLOR_ATTACHMENT0){for(let Et=0,Pt=Fe.length;Et<Pt;Et++)Ce[Et]=i.COLOR_ATTACHMENT0+Et;Ce.length=Fe.length,je=!0}}else Ce[0]!==i.COLOR_ATTACHMENT0&&(Ce[0]=i.COLOR_ATTACHMENT0,je=!0);else Ce[0]!==i.BACK&&(Ce[0]=i.BACK,je=!0);je&&(t.isWebGL2?i.drawBuffers(Ce):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ce))}function Zt(D){return m!==D?(i.useProgram(D),m=D,!0):!1}let $e={[ns]:i.FUNC_ADD,[Bu]:i.FUNC_SUBTRACT,[Hu]:i.FUNC_REVERSE_SUBTRACT};if(n)$e[ac]=i.MIN,$e[oc]=i.MAX;else{let D=e.get("EXT_blend_minmax");D!==null&&($e[ac]=D.MIN_EXT,$e[oc]=D.MAX_EXT)}let it={[ku]:i.ZERO,[zu]:i.ONE,[Vu]:i.SRC_COLOR,[Xo]:i.SRC_ALPHA,[$u]:i.SRC_ALPHA_SATURATE,[qu]:i.DST_COLOR,[Wu]:i.DST_ALPHA,[Gu]:i.ONE_MINUS_SRC_COLOR,[qo]:i.ONE_MINUS_SRC_ALPHA,[Yu]:i.ONE_MINUS_DST_COLOR,[Xu]:i.ONE_MINUS_DST_ALPHA,[Zu]:i.CONSTANT_COLOR,[Ku]:i.ONE_MINUS_CONSTANT_COLOR,[Ju]:i.CONSTANT_ALPHA,[ju]:i.ONE_MINUS_CONSTANT_ALPHA};function Ge(D,Re,Ce,je,Fe,Et,Pt,It,vt,gt){if(D===ki){p===!0&&(Ve(i.BLEND),p=!1);return}if(p===!1&&(ht(i.BLEND),p=!0),D!==Fu){if(D!==M||gt!==U){if((y!==ns||I!==ns)&&(i.blendEquation(i.FUNC_ADD),y=ns,I=ns),gt)switch(D){case zs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ic:i.blendFunc(i.ONE,i.ONE);break;case sc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case zs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ic:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case sc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}T=null,N=null,L=null,Y=null,b.set(0,0,0),w=0,M=D,U=gt}return}Fe=Fe||Re,Et=Et||Ce,Pt=Pt||je,(Re!==y||Fe!==I)&&(i.blendEquationSeparate($e[Re],$e[Fe]),y=Re,I=Fe),(Ce!==T||je!==N||Et!==L||Pt!==Y)&&(i.blendFuncSeparate(it[Ce],it[je],it[Et],it[Pt]),T=Ce,N=je,L=Et,Y=Pt),(It.equals(b)===!1||vt!==w)&&(i.blendColor(It.r,It.g,It.b,vt),b.copy(It),w=vt),M=D,U=!1}function Ht(D,Re){D.side===cn?Ve(i.CULL_FACE):ht(i.CULL_FACE);let Ce=D.side===zn;Re&&(Ce=!Ce),pt(Ce),D.blending===zs&&D.transparent===!1?Ge(ki):Ge(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),o.setMask(D.colorWrite);let je=D.stencilWrite;c.setTest(je),je&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),K(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ht(i.SAMPLE_ALPHA_TO_COVERAGE):Ve(i.SAMPLE_ALPHA_TO_COVERAGE)}function pt(D){B!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),B=D)}function A(D){D!==Nu?(ht(i.CULL_FACE),D!==J&&(D===nc?i.cullFace(i.BACK):D===Ou?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ve(i.CULL_FACE),J=D}function S(D){D!==P&&($&&i.lineWidth(D),P=D)}function K(D,Re,Ce){D?(ht(i.POLYGON_OFFSET_FILL),(G!==Re||O!==Ce)&&(i.polygonOffset(Re,Ce),G=Re,O=Ce)):Ve(i.POLYGON_OFFSET_FILL)}function ye(D){D?ht(i.SCISSOR_TEST):Ve(i.SCISSOR_TEST)}function me(D){D===void 0&&(D=i.TEXTURE0+se-1),le!==D&&(i.activeTexture(D),le=D)}function ve(D,Re,Ce){Ce===void 0&&(le===null?Ce=i.TEXTURE0+se-1:Ce=le);let je=pe[Ce];je===void 0&&(je={type:void 0,texture:void 0},pe[Ce]=je),(je.type!==D||je.texture!==Re)&&(le!==Ce&&(i.activeTexture(Ce),le=Ce),i.bindTexture(D,Re||rt[D]),je.type=D,je.texture=Re)}function qe(){let D=pe[le];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Ae(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Oe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function at(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ot(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function et(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function lt(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ye(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Le(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ze(D){we.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),we.copy(D))}function Rt(D){He.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),He.copy(D))}function We(D,Re){let Ce=f.get(Re);Ce===void 0&&(Ce=new WeakMap,f.set(Re,Ce));let je=Ce.get(D);je===void 0&&(je=i.getUniformBlockIndex(Re,D.name),Ce.set(D,je))}function De(D,Re){let je=f.get(Re).get(D);h.get(Re)!==je&&(i.uniformBlockBinding(Re,je,D.__bindingPointIndex),h.set(Re,je))}function fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},le=null,pe={},d={},x=new WeakMap,v=[],m=null,p=!1,M=null,y=null,T=null,N=null,I=null,L=null,Y=null,b=new mt(0,0,0),w=0,U=!1,B=null,J=null,P=null,G=null,O=null,we.set(0,0,i.canvas.width,i.canvas.height),He.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:ht,disable:Ve,bindFramebuffer:bt,drawBuffers:Z,useProgram:Zt,setBlending:Ge,setMaterial:Ht,setFlipSided:pt,setCullFace:A,setLineWidth:S,setPolygonOffset:K,setScissorTest:ye,activeTexture:me,bindTexture:ve,unbindTexture:qe,compressedTexImage2D:Ae,compressedTexImage3D:Oe,texImage2D:Ye,texImage3D:Le,updateUBOMapping:We,uniformBlockBinding:De,texStorage2D:et,texStorage3D:lt,texSubImage2D:nt,texSubImage3D:at,compressedTexSubImage2D:ae,compressedTexSubImage3D:ot,scissor:Ze,viewport:Rt,reset:fe}}function S0(i,e,t,n,s,r,a){let o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,f,u=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(A,S){return d?new OffscreenCanvas(A,S):xa("canvas")}function v(A,S,K,ye){let me=1;if((A.width>ye||A.height>ye)&&(me=ye/Math.max(A.width,A.height)),me<1||S===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){let ve=S?jo:Math.floor,qe=ve(me*A.width),Ae=ve(me*A.height);f===void 0&&(f=x(qe,Ae));let Oe=K?x(qe,Ae):f;return Oe.width=qe,Oe.height=Ae,Oe.getContext("2d").drawImage(A,0,0,qe,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+qe+"x"+Ae+")."),Oe}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return kc(A.width)&&kc(A.height)}function p(A){return o?!1:A.wrapS!==oi||A.wrapT!==oi||A.minFilter!==Nn&&A.minFilter!==Kn}function M(A,S){return A.generateMipmaps&&S&&A.minFilter!==Nn&&A.minFilter!==Kn}function y(A){i.generateMipmap(A)}function T(A,S,K,ye,me=!1){if(o===!1)return S;if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ve=S;if(S===i.RED&&(K===i.FLOAT&&(ve=i.R32F),K===i.HALF_FLOAT&&(ve=i.R16F),K===i.UNSIGNED_BYTE&&(ve=i.R8)),S===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(ve=i.R8UI),K===i.UNSIGNED_SHORT&&(ve=i.R16UI),K===i.UNSIGNED_INT&&(ve=i.R32UI),K===i.BYTE&&(ve=i.R8I),K===i.SHORT&&(ve=i.R16I),K===i.INT&&(ve=i.R32I)),S===i.RG&&(K===i.FLOAT&&(ve=i.RG32F),K===i.HALF_FLOAT&&(ve=i.RG16F),K===i.UNSIGNED_BYTE&&(ve=i.RG8)),S===i.RGBA){let qe=me?pa:Ft.getTransfer(ye);K===i.FLOAT&&(ve=i.RGBA32F),K===i.HALF_FLOAT&&(ve=i.RGBA16F),K===i.UNSIGNED_BYTE&&(ve=qe===Wt?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT_4_4_4_4&&(ve=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(ve=i.RGB5_A1)}return(ve===i.R16F||ve===i.R32F||ve===i.RG16F||ve===i.RG32F||ve===i.RGBA16F||ve===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ve}function N(A,S,K){return M(A,K)===!0||A.isFramebufferTexture&&A.minFilter!==Nn&&A.minFilter!==Kn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function I(A){return A===Nn||A===lc||A===lo?i.NEAREST:i.LINEAR}function L(A){let S=A.target;S.removeEventListener("dispose",L),b(S),S.isVideoTexture&&h.delete(S)}function Y(A){let S=A.target;S.removeEventListener("dispose",Y),U(S)}function b(A){let S=n.get(A);if(S.__webglInit===void 0)return;let K=A.source,ye=u.get(K);if(ye){let me=ye[S.__cacheKey];me.usedTimes--,me.usedTimes===0&&w(A),Object.keys(ye).length===0&&u.delete(K)}n.remove(A)}function w(A){let S=n.get(A);i.deleteTexture(S.__webglTexture);let K=A.source,ye=u.get(K);delete ye[S.__cacheKey],a.memory.textures--}function U(A){let S=A.texture,K=n.get(A),ye=n.get(S);if(ye.__webglTexture!==void 0&&(i.deleteTexture(ye.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(K.__webglFramebuffer[me]))for(let ve=0;ve<K.__webglFramebuffer[me].length;ve++)i.deleteFramebuffer(K.__webglFramebuffer[me][ve]);else i.deleteFramebuffer(K.__webglFramebuffer[me]);K.__webglDepthbuffer&&i.deleteRenderbuffer(K.__webglDepthbuffer[me])}else{if(Array.isArray(K.__webglFramebuffer))for(let me=0;me<K.__webglFramebuffer.length;me++)i.deleteFramebuffer(K.__webglFramebuffer[me]);else i.deleteFramebuffer(K.__webglFramebuffer);if(K.__webglDepthbuffer&&i.deleteRenderbuffer(K.__webglDepthbuffer),K.__webglMultisampledFramebuffer&&i.deleteFramebuffer(K.__webglMultisampledFramebuffer),K.__webglColorRenderbuffer)for(let me=0;me<K.__webglColorRenderbuffer.length;me++)K.__webglColorRenderbuffer[me]&&i.deleteRenderbuffer(K.__webglColorRenderbuffer[me]);K.__webglDepthRenderbuffer&&i.deleteRenderbuffer(K.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let me=0,ve=S.length;me<ve;me++){let qe=n.get(S[me]);qe.__webglTexture&&(i.deleteTexture(qe.__webglTexture),a.memory.textures--),n.remove(S[me])}n.remove(S),n.remove(A)}let B=0;function J(){B=0}function P(){let A=B;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),B+=1,A}function G(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function O(A,S){let K=n.get(A);if(A.isVideoTexture&&Ht(A),A.isRenderTargetTexture===!1&&A.version>0&&K.__version!==A.version){let ye=A.image;if(ye===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ye.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(K,A,S);return}}t.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+S)}function se(A,S){let K=n.get(A);if(A.version>0&&K.__version!==A.version){we(K,A,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+S)}function $(A,S){let K=n.get(A);if(A.version>0&&K.__version!==A.version){we(K,A,S);return}t.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+S)}function Q(A,S){let K=n.get(A);if(A.version>0&&K.__version!==A.version){He(K,A,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+S)}let ie={[mr]:i.REPEAT,[oi]:i.CLAMP_TO_EDGE,[Zo]:i.MIRRORED_REPEAT},le={[Nn]:i.NEAREST,[lc]:i.NEAREST_MIPMAP_NEAREST,[lo]:i.NEAREST_MIPMAP_LINEAR,[Kn]:i.LINEAR,[pd]:i.LINEAR_MIPMAP_NEAREST,[gr]:i.LINEAR_MIPMAP_LINEAR},pe={[wd]:i.NEVER,[Ld]:i.ALWAYS,[Ad]:i.LESS,[Zh]:i.LEQUAL,[Rd]:i.EQUAL,[Id]:i.GEQUAL,[Cd]:i.GREATER,[Pd]:i.NOTEQUAL};function ee(A,S,K){if(K?(i.texParameteri(A,i.TEXTURE_WRAP_S,ie[S.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,ie[S.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,ie[S.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,le[S.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,le[S.minFilter])):(i.texParameteri(A,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(A,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(S.wrapS!==oi||S.wrapT!==oi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(A,i.TEXTURE_MAG_FILTER,I(S.magFilter)),i.texParameteri(A,i.TEXTURE_MIN_FILTER,I(S.minFilter)),S.minFilter!==Nn&&S.minFilter!==Kn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,pe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ye=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Nn||S.minFilter!==lo&&S.minFilter!==gr||S.type===Hi&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===_r&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(i.texParameterf(A,ye.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function de(A,S){let K=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",L));let ye=S.source,me=u.get(ye);me===void 0&&(me={},u.set(ye,me));let ve=G(S);if(ve!==A.__cacheKey){me[ve]===void 0&&(me[ve]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,K=!0),me[ve].usedTimes++;let qe=me[A.__cacheKey];qe!==void 0&&(me[A.__cacheKey].usedTimes--,qe.usedTimes===0&&w(S)),A.__cacheKey=ve,A.__webglTexture=me[ve].texture}return K}function we(A,S,K){let ye=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ye=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ye=i.TEXTURE_3D);let me=de(A,S),ve=S.source;t.bindTexture(ye,A.__webglTexture,i.TEXTURE0+K);let qe=n.get(ve);if(ve.version!==qe.__version||me===!0){t.activeTexture(i.TEXTURE0+K);let Ae=Ft.getPrimaries(Ft.workingColorSpace),Oe=S.colorSpace===Jn?null:Ft.getPrimaries(S.colorSpace),nt=S.colorSpace===Jn||Ae===Oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let at=p(S)&&m(S.image)===!1,ae=v(S.image,at,!1,s.maxTextureSize);ae=pt(S,ae);let ot=m(ae)||o,et=r.convert(S.format,S.colorSpace),lt=r.convert(S.type),Ye=T(S.internalFormat,et,lt,S.colorSpace,S.isVideoTexture);ee(ye,S,ot);let Le,Ze=S.mipmaps,Rt=o&&S.isVideoTexture!==!0&&Ye!==qh,We=qe.__version===void 0||me===!0,De=N(S,ae,ot);if(S.isDepthTexture)Ye=i.DEPTH_COMPONENT,o?S.type===Hi?Ye=i.DEPTH_COMPONENT32F:S.type===Bi?Ye=i.DEPTH_COMPONENT24:S.type===ss?Ye=i.DEPTH24_STENCIL8:Ye=i.DEPTH_COMPONENT16:S.type===Hi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===rs&&Ye===i.DEPTH_COMPONENT&&S.type!==Hl&&S.type!==Bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Bi,lt=r.convert(S.type)),S.format===qs&&Ye===i.DEPTH_COMPONENT&&(Ye=i.DEPTH_STENCIL,S.type!==ss&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=ss,lt=r.convert(S.type))),We&&(Rt?t.texStorage2D(i.TEXTURE_2D,1,Ye,ae.width,ae.height):t.texImage2D(i.TEXTURE_2D,0,Ye,ae.width,ae.height,0,et,lt,null));else if(S.isDataTexture)if(Ze.length>0&&ot){Rt&&We&&t.texStorage2D(i.TEXTURE_2D,De,Ye,Ze[0].width,Ze[0].height);for(let fe=0,D=Ze.length;fe<D;fe++)Le=Ze[fe],Rt?t.texSubImage2D(i.TEXTURE_2D,fe,0,0,Le.width,Le.height,et,lt,Le.data):t.texImage2D(i.TEXTURE_2D,fe,Ye,Le.width,Le.height,0,et,lt,Le.data);S.generateMipmaps=!1}else Rt?(We&&t.texStorage2D(i.TEXTURE_2D,De,Ye,ae.width,ae.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae.width,ae.height,et,lt,ae.data)):t.texImage2D(i.TEXTURE_2D,0,Ye,ae.width,ae.height,0,et,lt,ae.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Rt&&We&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,Ye,Ze[0].width,Ze[0].height,ae.depth);for(let fe=0,D=Ze.length;fe<D;fe++)Le=Ze[fe],S.format!==li?et!==null?Rt?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,Le.width,Le.height,ae.depth,et,Le.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,fe,Ye,Le.width,Le.height,ae.depth,0,Le.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Rt?t.texSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,Le.width,Le.height,ae.depth,et,lt,Le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,fe,Ye,Le.width,Le.height,ae.depth,0,et,lt,Le.data)}else{Rt&&We&&t.texStorage2D(i.TEXTURE_2D,De,Ye,Ze[0].width,Ze[0].height);for(let fe=0,D=Ze.length;fe<D;fe++)Le=Ze[fe],S.format!==li?et!==null?Rt?t.compressedTexSubImage2D(i.TEXTURE_2D,fe,0,0,Le.width,Le.height,et,Le.data):t.compressedTexImage2D(i.TEXTURE_2D,fe,Ye,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Rt?t.texSubImage2D(i.TEXTURE_2D,fe,0,0,Le.width,Le.height,et,lt,Le.data):t.texImage2D(i.TEXTURE_2D,fe,Ye,Le.width,Le.height,0,et,lt,Le.data)}else if(S.isDataArrayTexture)Rt?(We&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,Ye,ae.width,ae.height,ae.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,et,lt,ae.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ye,ae.width,ae.height,ae.depth,0,et,lt,ae.data);else if(S.isData3DTexture)Rt?(We&&t.texStorage3D(i.TEXTURE_3D,De,Ye,ae.width,ae.height,ae.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,et,lt,ae.data)):t.texImage3D(i.TEXTURE_3D,0,Ye,ae.width,ae.height,ae.depth,0,et,lt,ae.data);else if(S.isFramebufferTexture){if(We)if(Rt)t.texStorage2D(i.TEXTURE_2D,De,Ye,ae.width,ae.height);else{let fe=ae.width,D=ae.height;for(let Re=0;Re<De;Re++)t.texImage2D(i.TEXTURE_2D,Re,Ye,fe,D,0,et,lt,null),fe>>=1,D>>=1}}else if(Ze.length>0&&ot){Rt&&We&&t.texStorage2D(i.TEXTURE_2D,De,Ye,Ze[0].width,Ze[0].height);for(let fe=0,D=Ze.length;fe<D;fe++)Le=Ze[fe],Rt?t.texSubImage2D(i.TEXTURE_2D,fe,0,0,et,lt,Le):t.texImage2D(i.TEXTURE_2D,fe,Ye,et,lt,Le);S.generateMipmaps=!1}else Rt?(We&&t.texStorage2D(i.TEXTURE_2D,De,Ye,ae.width,ae.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,et,lt,ae)):t.texImage2D(i.TEXTURE_2D,0,Ye,et,lt,ae);M(S,ot)&&y(ye),qe.__version=ve.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function He(A,S,K){if(S.image.length!==6)return;let ye=de(A,S),me=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+K);let ve=n.get(me);if(me.version!==ve.__version||ye===!0){t.activeTexture(i.TEXTURE0+K);let qe=Ft.getPrimaries(Ft.workingColorSpace),Ae=S.colorSpace===Jn?null:Ft.getPrimaries(S.colorSpace),Oe=S.colorSpace===Jn||qe===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let nt=S.isCompressedTexture||S.image[0].isCompressedTexture,at=S.image[0]&&S.image[0].isDataTexture,ae=[];for(let fe=0;fe<6;fe++)!nt&&!at?ae[fe]=v(S.image[fe],!1,!0,s.maxCubemapSize):ae[fe]=at?S.image[fe].image:S.image[fe],ae[fe]=pt(S,ae[fe]);let ot=ae[0],et=m(ot)||o,lt=r.convert(S.format,S.colorSpace),Ye=r.convert(S.type),Le=T(S.internalFormat,lt,Ye,S.colorSpace),Ze=o&&S.isVideoTexture!==!0,Rt=ve.__version===void 0||ye===!0,We=N(S,ot,et);ee(i.TEXTURE_CUBE_MAP,S,et);let De;if(nt){Ze&&Rt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,We,Le,ot.width,ot.height);for(let fe=0;fe<6;fe++){De=ae[fe].mipmaps;for(let D=0;D<De.length;D++){let Re=De[D];S.format!==li?lt!==null?Ze?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,D,0,0,Re.width,Re.height,lt,Re.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,D,Le,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,D,0,0,Re.width,Re.height,lt,Ye,Re.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,D,Le,Re.width,Re.height,0,lt,Ye,Re.data)}}}else{De=S.mipmaps,Ze&&Rt&&(De.length>0&&We++,t.texStorage2D(i.TEXTURE_CUBE_MAP,We,Le,ae[0].width,ae[0].height));for(let fe=0;fe<6;fe++)if(at){Ze?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,ae[fe].width,ae[fe].height,lt,Ye,ae[fe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Le,ae[fe].width,ae[fe].height,0,lt,Ye,ae[fe].data);for(let D=0;D<De.length;D++){let Ce=De[D].image[fe].image;Ze?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,D+1,0,0,Ce.width,Ce.height,lt,Ye,Ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,D+1,Le,Ce.width,Ce.height,0,lt,Ye,Ce.data)}}else{Ze?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,lt,Ye,ae[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Le,lt,Ye,ae[fe]);for(let D=0;D<De.length;D++){let Re=De[D];Ze?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,D+1,0,0,lt,Ye,Re.image[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,D+1,Le,lt,Ye,Re.image[fe])}}}M(S,et)&&y(i.TEXTURE_CUBE_MAP),ve.__version=me.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ke(A,S,K,ye,me,ve){let qe=r.convert(K.format,K.colorSpace),Ae=r.convert(K.type),Oe=T(K.internalFormat,qe,Ae,K.colorSpace);if(!n.get(S).__hasExternalTextures){let at=Math.max(1,S.width>>ve),ae=Math.max(1,S.height>>ve);me===i.TEXTURE_3D||me===i.TEXTURE_2D_ARRAY?t.texImage3D(me,ve,Oe,at,ae,S.depth,0,qe,Ae,null):t.texImage2D(me,ve,Oe,at,ae,0,qe,Ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),Ge(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ye,me,n.get(K).__webglTexture,0,it(S)):(me===i.TEXTURE_2D||me>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ye,me,n.get(K).__webglTexture,ve),t.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(A,S,K){if(i.bindRenderbuffer(i.RENDERBUFFER,A),S.depthBuffer&&!S.stencilBuffer){let ye=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(K||Ge(S)){let me=S.depthTexture;me&&me.isDepthTexture&&(me.type===Hi?ye=i.DEPTH_COMPONENT32F:me.type===Bi&&(ye=i.DEPTH_COMPONENT24));let ve=it(S);Ge(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve,ye,S.width,S.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,ye,S.width,S.height)}else i.renderbufferStorage(i.RENDERBUFFER,ye,S.width,S.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,A)}else if(S.depthBuffer&&S.stencilBuffer){let ye=it(S);K&&Ge(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,i.DEPTH24_STENCIL8,S.width,S.height):Ge(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye,i.DEPTH24_STENCIL8,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,A)}else{let ye=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let me=0;me<ye.length;me++){let ve=ye[me],qe=r.convert(ve.format,ve.colorSpace),Ae=r.convert(ve.type),Oe=T(ve.internalFormat,qe,Ae,ve.colorSpace),nt=it(S);K&&Ge(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,Oe,S.width,S.height):Ge(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt,Oe,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Oe,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ht(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),O(S.depthTexture,0);let ye=n.get(S.depthTexture).__webglTexture,me=it(S);if(S.depthTexture.format===rs)Ge(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ye,0,me):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ye,0);else if(S.depthTexture.format===qs)Ge(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ye,0,me):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ye,0);else throw new Error("Unknown depthTexture format")}function Ve(A){let S=n.get(A),K=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");ht(S.__webglFramebuffer,A)}else if(K){S.__webglDepthbuffer=[];for(let ye=0;ye<6;ye++)t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[ye]),S.__webglDepthbuffer[ye]=i.createRenderbuffer(),rt(S.__webglDepthbuffer[ye],A,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),rt(S.__webglDepthbuffer,A,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function bt(A,S,K){let ye=n.get(A);S!==void 0&&ke(ye.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&Ve(A)}function Z(A){let S=A.texture,K=n.get(A),ye=n.get(S);A.addEventListener("dispose",Y),A.isWebGLMultipleRenderTargets!==!0&&(ye.__webglTexture===void 0&&(ye.__webglTexture=i.createTexture()),ye.__version=S.version,a.memory.textures++);let me=A.isWebGLCubeRenderTarget===!0,ve=A.isWebGLMultipleRenderTargets===!0,qe=m(A)||o;if(me){K.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(o&&S.mipmaps&&S.mipmaps.length>0){K.__webglFramebuffer[Ae]=[];for(let Oe=0;Oe<S.mipmaps.length;Oe++)K.__webglFramebuffer[Ae][Oe]=i.createFramebuffer()}else K.__webglFramebuffer[Ae]=i.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){K.__webglFramebuffer=[];for(let Ae=0;Ae<S.mipmaps.length;Ae++)K.__webglFramebuffer[Ae]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(ve)if(s.drawBuffers){let Ae=A.texture;for(let Oe=0,nt=Ae.length;Oe<nt;Oe++){let at=n.get(Ae[Oe]);at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&Ge(A)===!1){let Ae=ve?S:[S];K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Oe=0;Oe<Ae.length;Oe++){let nt=Ae[Oe];K.__webglColorRenderbuffer[Oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[Oe]);let at=r.convert(nt.format,nt.colorSpace),ae=r.convert(nt.type),ot=T(nt.internalFormat,at,ae,nt.colorSpace,A.isXRRenderTarget===!0),et=it(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,et,ot,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.RENDERBUFFER,K.__webglColorRenderbuffer[Oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(K.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(me){t.bindTexture(i.TEXTURE_CUBE_MAP,ye.__webglTexture),ee(i.TEXTURE_CUBE_MAP,S,qe);for(let Ae=0;Ae<6;Ae++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let Oe=0;Oe<S.mipmaps.length;Oe++)ke(K.__webglFramebuffer[Ae][Oe],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Oe);else ke(K.__webglFramebuffer[Ae],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);M(S,qe)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){let Ae=A.texture;for(let Oe=0,nt=Ae.length;Oe<nt;Oe++){let at=Ae[Oe],ae=n.get(at);t.bindTexture(i.TEXTURE_2D,ae.__webglTexture),ee(i.TEXTURE_2D,at,qe),ke(K.__webglFramebuffer,A,at,i.COLOR_ATTACHMENT0+Oe,i.TEXTURE_2D,0),M(at,qe)&&y(i.TEXTURE_2D)}t.unbindTexture()}else{let Ae=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?Ae=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ae,ye.__webglTexture),ee(Ae,S,qe),o&&S.mipmaps&&S.mipmaps.length>0)for(let Oe=0;Oe<S.mipmaps.length;Oe++)ke(K.__webglFramebuffer[Oe],A,S,i.COLOR_ATTACHMENT0,Ae,Oe);else ke(K.__webglFramebuffer,A,S,i.COLOR_ATTACHMENT0,Ae,0);M(S,qe)&&y(Ae),t.unbindTexture()}A.depthBuffer&&Ve(A)}function Zt(A){let S=m(A)||o,K=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ye=0,me=K.length;ye<me;ye++){let ve=K[ye];if(M(ve,S)){let qe=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ae=n.get(ve).__webglTexture;t.bindTexture(qe,Ae),y(qe),t.unbindTexture()}}}function $e(A){if(o&&A.samples>0&&Ge(A)===!1){let S=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],K=A.width,ye=A.height,me=i.COLOR_BUFFER_BIT,ve=[],qe=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=n.get(A),Oe=A.isWebGLMultipleRenderTargets===!0;if(Oe)for(let nt=0;nt<S.length;nt++)t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let nt=0;nt<S.length;nt++){ve.push(i.COLOR_ATTACHMENT0+nt),A.depthBuffer&&ve.push(qe);let at=Ae.__ignoreDepthValues!==void 0?Ae.__ignoreDepthValues:!1;if(at===!1&&(A.depthBuffer&&(me|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&(me|=i.STENCIL_BUFFER_BIT)),Oe&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[nt]),at===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[qe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[qe])),Oe){let ae=n.get(S[nt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ae,0)}i.blitFramebuffer(0,0,K,ye,0,0,K,ye,me,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ve)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Oe)for(let nt=0;nt<S.length;nt++){t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[nt]);let at=n.get(S[nt]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.TEXTURE_2D,at,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}}function it(A){return Math.min(s.maxSamples,A.samples)}function Ge(A){let S=n.get(A);return o&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ht(A){let S=a.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function pt(A,S){let K=A.colorSpace,ye=A.format,me=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Ko||K!==bi&&K!==Jn&&(Ft.getTransfer(K)===Wt?o===!1?e.has("EXT_sRGB")===!0&&ye===li?(A.format=Ko,A.minFilter=Kn,A.generateMipmaps=!1):S=ya.sRGBToLinear(S):(ye!==li||me!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),S}this.allocateTextureUnit=P,this.resetTextureUnits=J,this.setTexture2D=O,this.setTexture2DArray=se,this.setTexture3D=$,this.setTextureCube=Q,this.rebindTextures=bt,this.setupRenderTarget=Z,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=ke,this.useMultisampledRTT=Ge}function b0(i,e,t){let n=t.isWebGL2;function s(r,a=Jn){let o,l=Ft.getTransfer(a);if(r===Vi)return i.UNSIGNED_BYTE;if(r===zh)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Vh)return i.UNSIGNED_SHORT_5_5_5_1;if(r===md)return i.BYTE;if(r===gd)return i.SHORT;if(r===Hl)return i.UNSIGNED_SHORT;if(r===kh)return i.INT;if(r===Bi)return i.UNSIGNED_INT;if(r===Hi)return i.FLOAT;if(r===_r)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===_d)return i.ALPHA;if(r===li)return i.RGBA;if(r===xd)return i.LUMINANCE;if(r===yd)return i.LUMINANCE_ALPHA;if(r===rs)return i.DEPTH_COMPONENT;if(r===qs)return i.DEPTH_STENCIL;if(r===Ko)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===vd)return i.RED;if(r===Gh)return i.RED_INTEGER;if(r===Md)return i.RG;if(r===Wh)return i.RG_INTEGER;if(r===Xh)return i.RGBA_INTEGER;if(r===co||r===ho||r===uo||r===fo)if(l===Wt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===co)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ho)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===uo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===fo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===co)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ho)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===uo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===fo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===cc||r===hc||r===uc||r===dc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===cc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===hc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===uc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===dc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===qh)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===fc||r===pc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===fc)return l===Wt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===pc)return l===Wt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===mc||r===gc||r===_c||r===xc||r===yc||r===vc||r===Mc||r===Sc||r===bc||r===Ec||r===Tc||r===wc||r===Ac||r===Rc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===mc)return l===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===gc)return l===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===_c)return l===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===xc)return l===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===yc)return l===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===vc)return l===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Mc)return l===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Sc)return l===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===bc)return l===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ec)return l===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Tc)return l===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===wc)return l===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ac)return l===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Rc)return l===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===po||r===Cc||r===Pc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===po)return l===Wt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Cc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Pc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Sd||r===Ic||r===Lc||r===Dc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===po)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Ic)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Lc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Dc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ss?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var ul=class extends On{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},jn=class extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}},E0={type:"move"},ur=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,x=.005;c.inputState.pinching&&u>d+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(E0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new jn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},dl=class extends Wi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,x=null,v=t.getContextAttributes(),m=null,p=null,M=[],y=[],T=new Ne,N=null,I=new On;I.layers.enable(1),I.viewport=new En;let L=new On;L.layers.enable(2),L.viewport=new En;let Y=[I,L],b=new ul;b.layers.enable(1),b.layers.enable(2);let w=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let de=M[ee];return de===void 0&&(de=new ur,M[ee]=de),de.getTargetRaySpace()},this.getControllerGrip=function(ee){let de=M[ee];return de===void 0&&(de=new ur,M[ee]=de),de.getGripSpace()},this.getHand=function(ee){let de=M[ee];return de===void 0&&(de=new ur,M[ee]=de),de.getHandSpace()};function B(ee){let de=y.indexOf(ee.inputSource);if(de===-1)return;let we=M[de];we!==void 0&&(we.update(ee.inputSource,ee.frame,c||a),we.dispatchEvent({type:ee.type,data:ee.inputSource}))}function J(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",P);for(let ee=0;ee<M.length;ee++){let de=y[ee];de!==null&&(y[ee]=null,M[ee].disconnect(de))}w=null,U=null,e.setRenderTarget(m),d=null,u=null,f=null,s=null,p=null,pe.stop(),n.isPresenting=!1,e.setPixelRatio(N),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",J),s.addEventListener("inputsourceschange",P),v.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(T),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let de={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new Ei(d.framebufferWidth,d.framebufferHeight,{format:li,type:Vi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let de=null,we=null,He=null;v.depth&&(He=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=v.stencil?qs:rs,we=v.stencil?ss:Bi);let ke={colorFormat:t.RGBA8,depthFormat:He,scaleFactor:r};f=new XRWebGLBinding(s,t),u=f.createProjectionLayer(ke),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),p=new Ei(u.textureWidth,u.textureHeight,{format:li,type:Vi,depthTexture:new Ca(u.textureWidth,u.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});let rt=e.properties.get(p);rt.__ignoreDepthValues=u.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),pe.setContext(s),pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function P(ee){for(let de=0;de<ee.removed.length;de++){let we=ee.removed[de],He=y.indexOf(we);He>=0&&(y[He]=null,M[He].disconnect(we))}for(let de=0;de<ee.added.length;de++){let we=ee.added[de],He=y.indexOf(we);if(He===-1){for(let rt=0;rt<M.length;rt++)if(rt>=y.length){y.push(we),He=rt;break}else if(y[rt]===null){y[rt]=we,He=rt;break}if(He===-1)break}let ke=M[He];ke&&ke.connect(we)}}let G=new F,O=new F;function se(ee,de,we){G.setFromMatrixPosition(de.matrixWorld),O.setFromMatrixPosition(we.matrixWorld);let He=G.distanceTo(O),ke=de.projectionMatrix.elements,rt=we.projectionMatrix.elements,ht=ke[14]/(ke[10]-1),Ve=ke[14]/(ke[10]+1),bt=(ke[9]+1)/ke[5],Z=(ke[9]-1)/ke[5],Zt=(ke[8]-1)/ke[0],$e=(rt[8]+1)/rt[0],it=ht*Zt,Ge=ht*$e,Ht=He/(-Zt+$e),pt=Ht*-Zt;de.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(pt),ee.translateZ(Ht),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert();let A=ht+Ht,S=Ve+Ht,K=it-pt,ye=Ge+(He-pt),me=bt*Ve/S*A,ve=Z*Ve/S*A;ee.projectionMatrix.makePerspective(K,ye,me,ve,A,S),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}function $(ee,de){de===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(de.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;b.near=L.near=I.near=ee.near,b.far=L.far=I.far=ee.far,(w!==b.near||U!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),w=b.near,U=b.far);let de=ee.parent,we=b.cameras;$(b,de);for(let He=0;He<we.length;He++)$(we[He],de);we.length===2?se(b,I,L):b.projectionMatrix.copy(I.projectionMatrix),Q(ee,b,de)};function Q(ee,de,we){we===null?ee.matrix.copy(de.matrixWorld):(ee.matrix.copy(we.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(de.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(de.projectionMatrix),ee.projectionMatrixInverse.copy(de.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Jo*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(ee){l=ee,u!==null&&(u.fixedFoveation=ee),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ee)};let ie=null;function le(ee,de){if(h=de.getViewerPose(c||a),x=de,h!==null){let we=h.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let He=!1;we.length!==b.cameras.length&&(b.cameras.length=0,He=!0);for(let ke=0;ke<we.length;ke++){let rt=we[ke],ht=null;if(d!==null)ht=d.getViewport(rt);else{let bt=f.getViewSubImage(u,rt);ht=bt.viewport,ke===0&&(e.setRenderTargetTextures(p,bt.colorTexture,u.ignoreDepthValues?void 0:bt.depthStencilTexture),e.setRenderTarget(p))}let Ve=Y[ke];Ve===void 0&&(Ve=new On,Ve.layers.enable(ke),Ve.viewport=new En,Y[ke]=Ve),Ve.matrix.fromArray(rt.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(rt.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(ht.x,ht.y,ht.width,ht.height),ke===0&&(b.matrix.copy(Ve.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),He===!0&&b.cameras.push(Ve)}}for(let we=0;we<M.length;we++){let He=y[we],ke=M[we];He!==null&&ke!==void 0&&ke.update(He,de,c||a)}ie&&ie(ee,de),de.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:de}),x=null}let pe=new Qh;pe.setAnimationLoop(le),this.setAnimationLoop=function(ee){ie=ee},this.dispose=function(){}}};function T0(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,jh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,y,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,T)):p.isMeshMatcapMaterial?(r(m,p),x(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===zn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===zn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=e.get(p).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let y=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*y,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===zn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function w0(i,e,t,n){let s={},r={},a=[],o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,y){let T=y.program;n.uniformBlockBinding(M,T)}function c(M,y){let T=s[M.id];T===void 0&&(x(M),T=h(M),s[M.id]=T,M.addEventListener("dispose",m));let N=y.program;n.updateUBOMapping(M,N);let I=e.render.frame;r[M.id]!==I&&(u(M),r[M.id]=I)}function h(M){let y=f();M.__bindingPointIndex=y;let T=i.createBuffer(),N=M.__size,I=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,N,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,T),T}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){let y=s[M.id],T=M.uniforms,N=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let I=0,L=T.length;I<L;I++){let Y=Array.isArray(T[I])?T[I]:[T[I]];for(let b=0,w=Y.length;b<w;b++){let U=Y[b];if(d(U,I,b,N)===!0){let B=U.__offset,J=Array.isArray(U.value)?U.value:[U.value],P=0;for(let G=0;G<J.length;G++){let O=J[G],se=v(O);typeof O=="number"||typeof O=="boolean"?(U.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,B+P,U.__data)):O.isMatrix3?(U.__data[0]=O.elements[0],U.__data[1]=O.elements[1],U.__data[2]=O.elements[2],U.__data[3]=0,U.__data[4]=O.elements[3],U.__data[5]=O.elements[4],U.__data[6]=O.elements[5],U.__data[7]=0,U.__data[8]=O.elements[6],U.__data[9]=O.elements[7],U.__data[10]=O.elements[8],U.__data[11]=0):(O.toArray(U.__data,P),P+=se.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,y,T,N){let I=M.value,L=y+"_"+T;if(N[L]===void 0)return typeof I=="number"||typeof I=="boolean"?N[L]=I:N[L]=I.clone(),!0;{let Y=N[L];if(typeof I=="number"||typeof I=="boolean"){if(Y!==I)return N[L]=I,!0}else if(Y.equals(I)===!1)return Y.copy(I),!0}return!1}function x(M){let y=M.uniforms,T=0,N=16;for(let L=0,Y=y.length;L<Y;L++){let b=Array.isArray(y[L])?y[L]:[y[L]];for(let w=0,U=b.length;w<U;w++){let B=b[w],J=Array.isArray(B.value)?B.value:[B.value];for(let P=0,G=J.length;P<G;P++){let O=J[P],se=v(O),$=T%N;$!==0&&N-$<se.boundary&&(T+=N-$),B.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=T,T+=se.storage}}}let I=T%N;return I>0&&(T+=N-I),M.__size=T,M.__cache={},this}function v(M){let y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function m(M){let y=M.target;y.removeEventListener("dispose",m);let T=a.indexOf(y.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Mr=class{constructor(e={}){let{canvas:t=Ud(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=a;let d=new Uint32Array(4),x=new Int32Array(4),v=null,m=null,p=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=wn,this._useLegacyLights=!1,this.toneMapping=zi,this.toneMappingExposure=1;let y=this,T=!1,N=0,I=0,L=null,Y=-1,b=null,w=new En,U=new En,B=null,J=new mt(0),P=0,G=t.width,O=t.height,se=1,$=null,Q=null,ie=new En(0,0,G,O),le=new En(0,0,G,O),pe=!1,ee=new vr,de=!1,we=!1,He=null,ke=new fn,rt=new Ne,ht=new F,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function bt(){return L===null?se:1}let Z=n;function Zt(E,X){for(let j=0;j<E.length;j++){let te=E[j],q=t.getContext(te,X);if(q!==null)return q}return null}try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Fl}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",Re,!1),Z===null){let X=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&X.shift(),Z=Zt(X,E),Z===null)throw Zt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Z.getShaderPrecisionFormat===void 0&&(Z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let $e,it,Ge,Ht,pt,A,S,K,ye,me,ve,qe,Ae,Oe,nt,at,ae,ot,et,lt,Ye,Le,Ze,Rt;function We(){$e=new Xm(Z),it=new Hm(Z,$e,e),$e.init(it),Le=new b0(Z,$e,it),Ge=new M0(Z,$e,it),Ht=new $m(Z),pt=new c0,A=new S0(Z,$e,Ge,pt,it,Le,Ht),S=new zm(y),K=new Wm(y),ye=new tf(Z,it),Ze=new Fm(Z,$e,ye,it),me=new qm(Z,ye,Ht,Ze),ve=new jm(Z,me,ye,Ht),et=new Jm(Z,it,A),at=new km(pt),qe=new l0(y,S,K,$e,it,Ze,at),Ae=new T0(y,pt),Oe=new u0,nt=new _0($e,it),ot=new Om(y,S,K,Ge,ve,u,l),ae=new v0(y,ve,it),Rt=new w0(Z,Ht,it,Ge),lt=new Bm(Z,$e,Ht,it),Ye=new Ym(Z,$e,Ht,it),Ht.programs=qe.programs,y.capabilities=it,y.extensions=$e,y.properties=pt,y.renderLists=Oe,y.shadowMap=ae,y.state=Ge,y.info=Ht}We();let De=new dl(y,Z);this.xr=De,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){let E=$e.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=$e.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(E){E!==void 0&&(se=E,this.setSize(G,O,!1))},this.getSize=function(E){return E.set(G,O)},this.setSize=function(E,X,j=!0){if(De.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=E,O=X,t.width=Math.floor(E*se),t.height=Math.floor(X*se),j===!0&&(t.style.width=E+"px",t.style.height=X+"px"),this.setViewport(0,0,E,X)},this.getDrawingBufferSize=function(E){return E.set(G*se,O*se).floor()},this.setDrawingBufferSize=function(E,X,j){G=E,O=X,se=j,t.width=Math.floor(E*j),t.height=Math.floor(X*j),this.setViewport(0,0,E,X)},this.getCurrentViewport=function(E){return E.copy(w)},this.getViewport=function(E){return E.copy(ie)},this.setViewport=function(E,X,j,te){E.isVector4?ie.set(E.x,E.y,E.z,E.w):ie.set(E,X,j,te),Ge.viewport(w.copy(ie).multiplyScalar(se).floor())},this.getScissor=function(E){return E.copy(le)},this.setScissor=function(E,X,j,te){E.isVector4?le.set(E.x,E.y,E.z,E.w):le.set(E,X,j,te),Ge.scissor(U.copy(le).multiplyScalar(se).floor())},this.getScissorTest=function(){return pe},this.setScissorTest=function(E){Ge.setScissorTest(pe=E)},this.setOpaqueSort=function(E){$=E},this.setTransparentSort=function(E){Q=E},this.getClearColor=function(E){return E.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor.apply(ot,arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha.apply(ot,arguments)},this.clear=function(E=!0,X=!0,j=!0){let te=0;if(E){let q=!1;if(L!==null){let Ie=L.texture.format;q=Ie===Xh||Ie===Wh||Ie===Gh}if(q){let Ie=L.texture.type,Ue=Ie===Vi||Ie===Bi||Ie===Hl||Ie===ss||Ie===zh||Ie===Vh,Qe=ot.getClearColor(),ut=ot.getClearAlpha(),xt=Qe.r,ft=Qe.g,_t=Qe.b;Ue?(d[0]=xt,d[1]=ft,d[2]=_t,d[3]=ut,Z.clearBufferuiv(Z.COLOR,0,d)):(x[0]=xt,x[1]=ft,x[2]=_t,x[3]=ut,Z.clearBufferiv(Z.COLOR,0,x))}else te|=Z.COLOR_BUFFER_BIT}X&&(te|=Z.DEPTH_BUFFER_BIT),j&&(te|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),Oe.dispose(),nt.dispose(),pt.dispose(),S.dispose(),K.dispose(),ve.dispose(),Ze.dispose(),Rt.dispose(),qe.dispose(),De.dispose(),De.removeEventListener("sessionstart",vt),De.removeEventListener("sessionend",gt),He&&(He.dispose(),He=null),Xt.stop()};function fe(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let E=Ht.autoReset,X=ae.enabled,j=ae.autoUpdate,te=ae.needsUpdate,q=ae.type;We(),Ht.autoReset=E,ae.enabled=X,ae.autoUpdate=j,ae.needsUpdate=te,ae.type=q}function Re(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ce(E){let X=E.target;X.removeEventListener("dispose",Ce),je(X)}function je(E){Fe(E),pt.remove(E)}function Fe(E){let X=pt.get(E).programs;X!==void 0&&(X.forEach(function(j){qe.releaseProgram(j)}),E.isShaderMaterial&&qe.releaseShaderCache(E))}this.renderBufferDirect=function(E,X,j,te,q,Ie){X===null&&(X=Ve);let Ue=q.isMesh&&q.matrixWorld.determinant()<0,Qe=Qs(E,X,j,te,q);Ge.setMaterial(te,Ue);let ut=j.index,xt=1;if(te.wireframe===!0){if(ut=me.getWireframeAttribute(j),ut===void 0)return;xt=2}let ft=j.drawRange,_t=j.attributes.position,Ut=ft.start*xt,Ln=(ft.start+ft.count)*xt;Ie!==null&&(Ut=Math.max(Ut,Ie.start*xt),Ln=Math.min(Ln,(Ie.start+Ie.count)*xt)),ut!==null?(Ut=Math.max(Ut,0),Ln=Math.min(Ln,ut.count)):_t!=null&&(Ut=Math.max(Ut,0),Ln=Math.min(Ln,_t.count));let hn=Ln-Ut;if(hn<0||hn===1/0)return;Ze.setup(q,te,Qe,j,ut);let ni,kt=lt;if(ut!==null&&(ni=ye.get(ut),kt=Ye,kt.setIndex(ni)),q.isMesh)te.wireframe===!0?(Ge.setLineWidth(te.wireframeLinewidth*bt()),kt.setMode(Z.LINES)):kt.setMode(Z.TRIANGLES);else if(q.isLine){let st=te.linewidth;st===void 0&&(st=1),Ge.setLineWidth(st*bt()),q.isLineSegments?kt.setMode(Z.LINES):q.isLineLoop?kt.setMode(Z.LINE_LOOP):kt.setMode(Z.LINE_STRIP)}else q.isPoints?kt.setMode(Z.POINTS):q.isSprite&&kt.setMode(Z.TRIANGLES);if(q.isBatchedMesh)kt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else if(q.isInstancedMesh)kt.renderInstances(Ut,hn,q.count);else if(j.isInstancedBufferGeometry){let st=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,ps=Math.min(j.instanceCount,st);kt.renderInstances(Ut,hn,ps)}else kt.render(Ut,hn)};function Et(E,X,j){E.transparent===!0&&E.side===cn&&E.forceSinglePass===!1?(E.side=zn,E.needsUpdate=!0,Ki(E,X,j),E.side=Gi,E.needsUpdate=!0,Ki(E,X,j),E.side=cn):Ki(E,X,j)}this.compile=function(E,X,j=null){j===null&&(j=E),m=nt.get(j),m.init(),M.push(m),j.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),E!==j&&E.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),m.setupLights(y._useLegacyLights);let te=new Set;return E.traverse(function(q){let Ie=q.material;if(Ie)if(Array.isArray(Ie))for(let Ue=0;Ue<Ie.length;Ue++){let Qe=Ie[Ue];Et(Qe,j,q),te.add(Qe)}else Et(Ie,j,q),te.add(Ie)}),M.pop(),m=null,te},this.compileAsync=function(E,X,j=null){let te=this.compile(E,X,j);return new Promise(q=>{function Ie(){if(te.forEach(function(Ue){pt.get(Ue).currentProgram.isReady()&&te.delete(Ue)}),te.size===0){q(E);return}setTimeout(Ie,10)}$e.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let Pt=null;function It(E){Pt&&Pt(E)}function vt(){Xt.stop()}function gt(){Xt.start()}let Xt=new Qh;Xt.setAnimationLoop(It),typeof self<"u"&&Xt.setContext(self),this.setAnimationLoop=function(E){Pt=E,De.setAnimationLoop(E),E===null?Xt.stop():Xt.start()},De.addEventListener("sessionstart",vt),De.addEventListener("sessionend",gt),this.render=function(E,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(De.cameraAutoUpdate===!0&&De.updateCamera(X),X=De.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,X,L),m=nt.get(E,M.length),m.init(),M.push(m),ke.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),ee.setFromProjectionMatrix(ke),we=this.localClippingEnabled,de=at.init(this.clippingPlanes,we),v=Oe.get(E,p.length),v.init(),p.push(v),Kt(E,X,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort($,Q),this.info.render.frame++,de===!0&&at.beginShadows();let j=m.state.shadowsArray;if(ae.render(j,E,X),de===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset(),ot.render(v,E),m.setupLights(y._useLegacyLights),X.isArrayCamera){let te=X.cameras;for(let q=0,Ie=te.length;q<Ie;q++){let Ue=te[q];In(v,E,Ue,Ue.viewport)}}else In(v,E,X);L!==null&&(A.updateMultisampleRenderTarget(L),A.updateRenderTargetMipmap(L)),E.isScene===!0&&E.onAfterRender(y,E,X),Ze.resetDefaultState(),Y=-1,b=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function Kt(E,X,j,te){if(E.visible===!1)return;if(E.layers.test(X.layers)){if(E.isGroup)j=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(X);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ee.intersectsSprite(E)){te&&ht.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ke);let Ue=ve.update(E),Qe=E.material;Qe.visible&&v.push(E,Ue,Qe,j,ht.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ee.intersectsObject(E))){let Ue=ve.update(E),Qe=E.material;if(te&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ht.copy(E.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),ht.copy(Ue.boundingSphere.center)),ht.applyMatrix4(E.matrixWorld).applyMatrix4(ke)),Array.isArray(Qe)){let ut=Ue.groups;for(let xt=0,ft=ut.length;xt<ft;xt++){let _t=ut[xt],Ut=Qe[_t.materialIndex];Ut&&Ut.visible&&v.push(E,Ue,Ut,j,ht.z,_t)}}else Qe.visible&&v.push(E,Ue,Qe,j,ht.z,null)}}let Ie=E.children;for(let Ue=0,Qe=Ie.length;Ue<Qe;Ue++)Kt(Ie[Ue],X,j,te)}function In(E,X,j,te){let q=E.opaque,Ie=E.transmissive,Ue=E.transparent;m.setupLightsView(j),de===!0&&at.setGlobalState(y.clippingPlanes,j),Ie.length>0&&Wn(q,Ie,X,j),te&&Ge.viewport(w.copy(te)),q.length>0&&hi(q,X,j),Ie.length>0&&hi(Ie,X,j),Ue.length>0&&hi(Ue,X,j),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function Wn(E,X,j,te){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;let Ie=it.isWebGL2;He===null&&(He=new Ei(1,1,{generateMipmaps:!0,type:$e.has("EXT_color_buffer_half_float")?_r:Vi,minFilter:gr,samples:Ie?4:0})),y.getDrawingBufferSize(rt),Ie?He.setSize(rt.x,rt.y):He.setSize(jo(rt.x),jo(rt.y));let Ue=y.getRenderTarget();y.setRenderTarget(He),y.getClearColor(J),P=y.getClearAlpha(),P<1&&y.setClearColor(16777215,.5),y.clear();let Qe=y.toneMapping;y.toneMapping=zi,hi(E,j,te),A.updateMultisampleRenderTarget(He),A.updateRenderTargetMipmap(He);let ut=!1;for(let xt=0,ft=X.length;xt<ft;xt++){let _t=X[xt],Ut=_t.object,Ln=_t.geometry,hn=_t.material,ni=_t.group;if(hn.side===cn&&Ut.layers.test(te.layers)){let kt=hn.side;hn.side=zn,hn.needsUpdate=!0,ti(Ut,j,te,Ln,hn,ni),hn.side=kt,hn.needsUpdate=!0,ut=!0}}ut===!0&&(A.updateMultisampleRenderTarget(He),A.updateRenderTargetMipmap(He)),y.setRenderTarget(Ue),y.setClearColor(J,P),y.toneMapping=Qe}function hi(E,X,j){let te=X.isScene===!0?X.overrideMaterial:null;for(let q=0,Ie=E.length;q<Ie;q++){let Ue=E[q],Qe=Ue.object,ut=Ue.geometry,xt=te===null?Ue.material:te,ft=Ue.group;Qe.layers.test(j.layers)&&ti(Qe,X,j,ut,xt,ft)}}function ti(E,X,j,te,q,Ie){E.onBeforeRender(y,X,j,te,q,Ie),E.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),q.onBeforeRender(y,X,j,te,E,Ie),q.transparent===!0&&q.side===cn&&q.forceSinglePass===!1?(q.side=zn,q.needsUpdate=!0,y.renderBufferDirect(j,X,te,q,E,Ie),q.side=Gi,q.needsUpdate=!0,y.renderBufferDirect(j,X,te,q,E,Ie),q.side=cn):y.renderBufferDirect(j,X,te,q,E,Ie),E.onAfterRender(y,X,j,te,q,Ie)}function Ki(E,X,j){X.isScene!==!0&&(X=Ve);let te=pt.get(E),q=m.state.lights,Ie=m.state.shadowsArray,Ue=q.state.version,Qe=qe.getParameters(E,q.state,Ie,X,j),ut=qe.getProgramCacheKey(Qe),xt=te.programs;te.environment=E.isMeshStandardMaterial?X.environment:null,te.fog=X.fog,te.envMap=(E.isMeshStandardMaterial?K:S).get(E.envMap||te.environment),xt===void 0&&(E.addEventListener("dispose",Ce),xt=new Map,te.programs=xt);let ft=xt.get(ut);if(ft!==void 0){if(te.currentProgram===ft&&te.lightsStateVersion===Ue)return Ai(E,Qe),ft}else Qe.uniforms=qe.getUniforms(E),E.onBuild(j,Qe,y),E.onBeforeCompile(Qe,y),ft=qe.acquireProgram(Qe,ut),xt.set(ut,ft),te.uniforms=Qe.uniforms;let _t=te.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(_t.clippingPlanes=at.uniform),Ai(E,Qe),te.needsLights=eo(E),te.lightsStateVersion=Ue,te.needsLights&&(_t.ambientLightColor.value=q.state.ambient,_t.lightProbe.value=q.state.probe,_t.directionalLights.value=q.state.directional,_t.directionalLightShadows.value=q.state.directionalShadow,_t.spotLights.value=q.state.spot,_t.spotLightShadows.value=q.state.spotShadow,_t.rectAreaLights.value=q.state.rectArea,_t.ltc_1.value=q.state.rectAreaLTC1,_t.ltc_2.value=q.state.rectAreaLTC2,_t.pointLights.value=q.state.point,_t.pointLightShadows.value=q.state.pointShadow,_t.hemisphereLights.value=q.state.hemi,_t.directionalShadowMap.value=q.state.directionalShadowMap,_t.directionalShadowMatrix.value=q.state.directionalShadowMatrix,_t.spotShadowMap.value=q.state.spotShadowMap,_t.spotLightMatrix.value=q.state.spotLightMatrix,_t.spotLightMap.value=q.state.spotLightMap,_t.pointShadowMap.value=q.state.pointShadowMap,_t.pointShadowMatrix.value=q.state.pointShadowMatrix),te.currentProgram=ft,te.uniformsList=null,ft}function an(E){if(E.uniformsList===null){let X=E.currentProgram.getUniforms();E.uniformsList=Gs.seqWithValue(X.seq,E.uniforms)}return E.uniformsList}function Ai(E,X){let j=pt.get(E);j.outputColorSpace=X.outputColorSpace,j.batching=X.batching,j.instancing=X.instancing,j.instancingColor=X.instancingColor,j.skinning=X.skinning,j.morphTargets=X.morphTargets,j.morphNormals=X.morphNormals,j.morphColors=X.morphColors,j.morphTargetsCount=X.morphTargetsCount,j.numClippingPlanes=X.numClippingPlanes,j.numIntersection=X.numClipIntersection,j.vertexAlphas=X.vertexAlphas,j.vertexTangents=X.vertexTangents,j.toneMapping=X.toneMapping}function Qs(E,X,j,te,q){X.isScene!==!0&&(X=Ve),A.resetTextureUnits();let Ie=X.fog,Ue=te.isMeshStandardMaterial?X.environment:null,Qe=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:bi,ut=(te.isMeshStandardMaterial?K:S).get(te.envMap||Ue),xt=te.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,ft=!!j.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),_t=!!j.morphAttributes.position,Ut=!!j.morphAttributes.normal,Ln=!!j.morphAttributes.color,hn=zi;te.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(hn=y.toneMapping);let ni=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,kt=ni!==void 0?ni.length:0,st=pt.get(te),ps=m.state.lights;if(de===!0&&(we===!0||E!==b)){let Tn=E===b&&te.id===Y;at.setState(te,E,Tn)}let Bt=!1;te.version===st.__version?(st.needsLights&&st.lightsStateVersion!==ps.state.version||st.outputColorSpace!==Qe||q.isBatchedMesh&&st.batching===!1||!q.isBatchedMesh&&st.batching===!0||q.isInstancedMesh&&st.instancing===!1||!q.isInstancedMesh&&st.instancing===!0||q.isSkinnedMesh&&st.skinning===!1||!q.isSkinnedMesh&&st.skinning===!0||q.isInstancedMesh&&st.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&st.instancingColor===!1&&q.instanceColor!==null||st.envMap!==ut||te.fog===!0&&st.fog!==Ie||st.numClippingPlanes!==void 0&&(st.numClippingPlanes!==at.numPlanes||st.numIntersection!==at.numIntersection)||st.vertexAlphas!==xt||st.vertexTangents!==ft||st.morphTargets!==_t||st.morphNormals!==Ut||st.morphColors!==Ln||st.toneMapping!==hn||it.isWebGL2===!0&&st.morphTargetsCount!==kt)&&(Bt=!0):(Bt=!0,st.__version=te.version);let pi=st.currentProgram;Bt===!0&&(pi=Ki(te,X,q));let ms=!1,Ri=!1,gs=!1,dt=pi.getUniforms(),mi=st.uniforms;if(Ge.useProgram(pi.program)&&(ms=!0,Ri=!0,gs=!0),te.id!==Y&&(Y=te.id,Ri=!0),ms||b!==E){dt.setValue(Z,"projectionMatrix",E.projectionMatrix),dt.setValue(Z,"viewMatrix",E.matrixWorldInverse);let Tn=dt.map.cameraPosition;Tn!==void 0&&Tn.setValue(Z,ht.setFromMatrixPosition(E.matrixWorld)),it.logarithmicDepthBuffer&&dt.setValue(Z,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&dt.setValue(Z,"isOrthographic",E.isOrthographicCamera===!0),b!==E&&(b=E,Ri=!0,gs=!0)}if(q.isSkinnedMesh){dt.setOptional(Z,q,"bindMatrix"),dt.setOptional(Z,q,"bindMatrixInverse");let Tn=q.skeleton;Tn&&(it.floatVertexTextures?(Tn.boneTexture===null&&Tn.computeBoneTexture(),dt.setValue(Z,"boneTexture",Tn.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}q.isBatchedMesh&&(dt.setOptional(Z,q,"batchingTexture"),dt.setValue(Z,"batchingTexture",q._matricesTexture,A));let zt=j.morphAttributes;if((zt.position!==void 0||zt.normal!==void 0||zt.color!==void 0&&it.isWebGL2===!0)&&et.update(q,j,pi),(Ri||st.receiveShadow!==q.receiveShadow)&&(st.receiveShadow=q.receiveShadow,dt.setValue(Z,"receiveShadow",q.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(mi.envMap.value=ut,mi.flipEnvMap.value=ut.isCubeTexture&&ut.isRenderTargetTexture===!1?-1:1),Ri&&(dt.setValue(Z,"toneMappingExposure",y.toneMappingExposure),st.needsLights&&Qa(mi,gs),Ie&&te.fog===!0&&Ae.refreshFogUniforms(mi,Ie),Ae.refreshMaterialUniforms(mi,te,se,O,He),Gs.upload(Z,an(st),mi,A)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Gs.upload(Z,an(st),mi,A),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&dt.setValue(Z,"center",q.center),dt.setValue(Z,"modelViewMatrix",q.modelViewMatrix),dt.setValue(Z,"normalMatrix",q.normalMatrix),dt.setValue(Z,"modelMatrix",q.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){let Tn=te.uniformsGroups;for(let _s=0,Ir=Tn.length;_s<Ir;_s++)if(it.isWebGL2){let xs=Tn[_s];Rt.update(xs,pi),Rt.bind(xs,pi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return pi}function Qa(E,X){E.ambientLightColor.needsUpdate=X,E.lightProbe.needsUpdate=X,E.directionalLights.needsUpdate=X,E.directionalLightShadows.needsUpdate=X,E.pointLights.needsUpdate=X,E.pointLightShadows.needsUpdate=X,E.spotLights.needsUpdate=X,E.spotLightShadows.needsUpdate=X,E.rectAreaLights.needsUpdate=X,E.hemisphereLights.needsUpdate=X}function eo(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(E,X,j){pt.get(E.texture).__webglTexture=X,pt.get(E.depthTexture).__webglTexture=j;let te=pt.get(E);te.__hasExternalTextures=!0,te.__hasExternalTextures&&(te.__autoAllocateDepthBuffer=j===void 0,te.__autoAllocateDepthBuffer||$e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,X){let j=pt.get(E);j.__webglFramebuffer=X,j.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(E,X=0,j=0){L=E,N=X,I=j;let te=!0,q=null,Ie=!1,Ue=!1;if(E){let ut=pt.get(E);ut.__useDefaultFramebuffer!==void 0?(Ge.bindFramebuffer(Z.FRAMEBUFFER,null),te=!1):ut.__webglFramebuffer===void 0?A.setupRenderTarget(E):ut.__hasExternalTextures&&A.rebindTextures(E,pt.get(E.texture).__webglTexture,pt.get(E.depthTexture).__webglTexture);let xt=E.texture;(xt.isData3DTexture||xt.isDataArrayTexture||xt.isCompressedArrayTexture)&&(Ue=!0);let ft=pt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ft[X])?q=ft[X][j]:q=ft[X],Ie=!0):it.isWebGL2&&E.samples>0&&A.useMultisampledRTT(E)===!1?q=pt.get(E).__webglMultisampledFramebuffer:Array.isArray(ft)?q=ft[j]:q=ft,w.copy(E.viewport),U.copy(E.scissor),B=E.scissorTest}else w.copy(ie).multiplyScalar(se).floor(),U.copy(le).multiplyScalar(se).floor(),B=pe;if(Ge.bindFramebuffer(Z.FRAMEBUFFER,q)&&it.drawBuffers&&te&&Ge.drawBuffers(E,q),Ge.viewport(w),Ge.scissor(U),Ge.setScissorTest(B),Ie){let ut=pt.get(E.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+X,ut.__webglTexture,j)}else if(Ue){let ut=pt.get(E.texture),xt=X||0;Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,ut.__webglTexture,j||0,xt)}Y=-1},this.readRenderTargetPixels=function(E,X,j,te,q,Ie,Ue){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qe=pt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ue!==void 0&&(Qe=Qe[Ue]),Qe){Ge.bindFramebuffer(Z.FRAMEBUFFER,Qe);try{let ut=E.texture,xt=ut.format,ft=ut.type;if(xt!==li&&Le.convert(xt)!==Z.getParameter(Z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let _t=ft===_r&&($e.has("EXT_color_buffer_half_float")||it.isWebGL2&&$e.has("EXT_color_buffer_float"));if(ft!==Vi&&Le.convert(ft)!==Z.getParameter(Z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ft===Hi&&(it.isWebGL2||$e.has("OES_texture_float")||$e.has("WEBGL_color_buffer_float")))&&!_t){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=E.width-te&&j>=0&&j<=E.height-q&&Z.readPixels(X,j,te,q,Le.convert(xt),Le.convert(ft),Ie)}finally{let ut=L!==null?pt.get(L).__webglFramebuffer:null;Ge.bindFramebuffer(Z.FRAMEBUFFER,ut)}}},this.copyFramebufferToTexture=function(E,X,j=0){let te=Math.pow(2,-j),q=Math.floor(X.image.width*te),Ie=Math.floor(X.image.height*te);A.setTexture2D(X,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,j,0,0,E.x,E.y,q,Ie),Ge.unbindTexture()},this.copyTextureToTexture=function(E,X,j,te=0){let q=X.image.width,Ie=X.image.height,Ue=Le.convert(j.format),Qe=Le.convert(j.type);A.setTexture2D(j,0),Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,j.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,j.unpackAlignment),X.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,te,E.x,E.y,q,Ie,Ue,Qe,X.image.data):X.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,te,E.x,E.y,X.mipmaps[0].width,X.mipmaps[0].height,Ue,X.mipmaps[0].data):Z.texSubImage2D(Z.TEXTURE_2D,te,E.x,E.y,Ue,Qe,X.image),te===0&&j.generateMipmaps&&Z.generateMipmap(Z.TEXTURE_2D),Ge.unbindTexture()},this.copyTextureToTexture3D=function(E,X,j,te,q=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Ie=E.max.x-E.min.x+1,Ue=E.max.y-E.min.y+1,Qe=E.max.z-E.min.z+1,ut=Le.convert(te.format),xt=Le.convert(te.type),ft;if(te.isData3DTexture)A.setTexture3D(te,0),ft=Z.TEXTURE_3D;else if(te.isDataArrayTexture||te.isCompressedArrayTexture)A.setTexture2DArray(te,0),ft=Z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,te.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,te.unpackAlignment);let _t=Z.getParameter(Z.UNPACK_ROW_LENGTH),Ut=Z.getParameter(Z.UNPACK_IMAGE_HEIGHT),Ln=Z.getParameter(Z.UNPACK_SKIP_PIXELS),hn=Z.getParameter(Z.UNPACK_SKIP_ROWS),ni=Z.getParameter(Z.UNPACK_SKIP_IMAGES),kt=j.isCompressedTexture?j.mipmaps[q]:j.image;Z.pixelStorei(Z.UNPACK_ROW_LENGTH,kt.width),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,kt.height),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,E.min.x),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,E.min.y),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,E.min.z),j.isDataTexture||j.isData3DTexture?Z.texSubImage3D(ft,q,X.x,X.y,X.z,Ie,Ue,Qe,ut,xt,kt.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Z.compressedTexSubImage3D(ft,q,X.x,X.y,X.z,Ie,Ue,Qe,ut,kt.data)):Z.texSubImage3D(ft,q,X.x,X.y,X.z,Ie,Ue,Qe,ut,xt,kt),Z.pixelStorei(Z.UNPACK_ROW_LENGTH,_t),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Ut),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,Ln),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,hn),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,ni),q===0&&te.generateMipmaps&&Z.generateMipmap(ft),Ge.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),Ge.unbindTexture()},this.resetState=function(){N=0,I=0,L=null,Ge.reset(),Ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===kl?"display-p3":"srgb",t.unpackColorSpace=Ft.workingColorSpace===Xa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===wn?as:Yh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===as?wn:bi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},fl=class extends Mr{};fl.prototype.isWebGL1Renderer=!0;var Pa=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new mt(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ia=class extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var Sr=class extends qi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Eh=new F,Th=new F,wh=new fn,ko=new xr,aa=new Ys,pl=class extends Fn{constructor(e=new Gn,t=new Sr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Eh.fromBufferAttribute(t,s-1),Th.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Eh.distanceTo(Th);e.setAttribute("lineDistance",new Qt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),aa.copy(n.boundingSphere),aa.applyMatrix4(s),aa.radius+=r,e.ray.intersectsSphere(aa)===!1)return;wh.copy(s).invert(),ko.copy(e.ray).applyMatrix4(wh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new F,h=new F,f=new F,u=new F,d=this.isLineSegments?2:1,x=n.index,m=n.attributes.position;if(x!==null){let p=Math.max(0,a.start),M=Math.min(x.count,a.start+a.count);for(let y=p,T=M-1;y<T;y+=d){let N=x.getX(y),I=x.getX(y+1);if(c.fromBufferAttribute(m,N),h.fromBufferAttribute(m,I),ko.distanceSqToSegment(c,h,u,f)>l)continue;u.applyMatrix4(this.matrixWorld);let Y=e.ray.origin.distanceTo(u);Y<e.near||Y>e.far||t.push({distance:Y,point:f.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,a.start),M=Math.min(m.count,a.start+a.count);for(let y=p,T=M-1;y<T;y+=d){if(c.fromBufferAttribute(m,y),h.fromBufferAttribute(m,y+1),ko.distanceSqToSegment(c,h,u,f)>l)continue;u.applyMatrix4(this.matrixWorld);let I=e.ray.origin.distanceTo(u);I<e.near||I>e.far||t.push({distance:I,point:f.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},Ah=new F,Rh=new F,La=class extends pl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Ah.fromBufferAttribute(t,s),Rh.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ah.distanceTo(Rh);e.setAttribute("lineDistance",new Qt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Da=class extends Qn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ei=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,d=(a-h)/u;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Ne:new F);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new F,s=[],r=[],a=[],o=new F,l=new fn;for(let d=0;d<=e;d++){let x=d/e;s[d]=this.getTangentAt(x,new F)}r[0]=new F,a[0]=new F;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(Cn(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,x))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Cn(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let x=1;x<=e;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],d*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},br=class extends ei{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let n=t||new Ne,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ml=class extends br{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Vl(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,d*=h,s(a,o,u,d)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var oa=new F,zo=new Vl,Vo=new Vl,Go=new Vl,gl=class extends ei{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new F){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(oa.subVectors(s[0],s[1]).add(s[0]),c=oa);let f=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(oa.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=oa),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(f),d),v=Math.pow(f.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(h),d);v<1e-4&&(v=1),x<1e-4&&(x=v),m<1e-4&&(m=v),zo.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,x,v,m),Vo.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,x,v,m),Go.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,x,v,m)}else this.curveType==="catmullrom"&&(zo.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),Vo.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),Go.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(zo.calc(l),Vo.calc(l),Go.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new F().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ch(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function A0(i,e){let t=1-i;return t*t*e}function R0(i,e){return 2*(1-i)*i*e}function C0(i,e){return i*i*e}function dr(i,e,t,n){return A0(i,e)+R0(i,t)+C0(i,n)}function P0(i,e){let t=1-i;return t*t*t*e}function I0(i,e){let t=1-i;return 3*t*t*i*e}function L0(i,e){return 3*(1-i)*i*i*e}function D0(i,e){return i*i*i*e}function fr(i,e,t,n,s){return P0(i,e)+I0(i,t)+L0(i,n)+D0(i,s)}var Ua=class extends ei{constructor(e=new Ne,t=new Ne,n=new Ne,s=new Ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Ne){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(fr(e,s.x,r.x,a.x,o.x),fr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},_l=class extends ei{constructor(e=new F,t=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(fr(e,s.x,r.x,a.x,o.x),fr(e,s.y,r.y,a.y,o.y),fr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Na=class extends ei{constructor(e=new Ne,t=new Ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ne){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xl=class extends ei{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Oa=class extends ei{constructor(e=new Ne,t=new Ne,n=new Ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ne){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(dr(e,s.x,r.x,a.x),dr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},yl=class extends ei{constructor(e=new F,t=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(dr(e,s.x,r.x,a.x),dr(e,s.y,r.y,a.y),dr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fa=class extends ei{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ne){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(Ch(o,l.x,c.x,h.x,f.x),Ch(o,l.y,c.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Ne().fromArray(s))}return this}},Ph=Object.freeze({__proto__:null,ArcCurve:ml,CatmullRomCurve3:gl,CubicBezierCurve:Ua,CubicBezierCurve3:_l,EllipseCurve:br,LineCurve:Na,LineCurve3:xl,QuadraticBezierCurve:Oa,QuadraticBezierCurve3:yl,SplineCurve:Fa}),vl=class extends ei{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ph[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Ph[s.type]().fromJSON(s))}return this}},Zs=class extends vl{constructor(e){super(),this.type="Path",this.currentPoint=new Ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Na(this.currentPoint.clone(),new Ne(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Oa(this.currentPoint.clone(),new Ne(e,t),new Ne(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Ua(this.currentPoint.clone(),new Ne(e,t),new Ne(n,s),new Ne(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Fa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new br(e,t,n,s,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var Yi=class i extends Gn{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],x=0,v=[],m=n/2,p=0;M(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Qt(f,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(d,2));function M(){let T=new F,N=new F,I=0,L=(t-e)/n;for(let Y=0;Y<=r;Y++){let b=[],w=Y/r,U=w*(t-e)+e;for(let B=0;B<=s;B++){let J=B/s,P=J*l+o,G=Math.sin(P),O=Math.cos(P);N.x=U*G,N.y=-w*n+m,N.z=U*O,f.push(N.x,N.y,N.z),T.set(G,L,O).normalize(),u.push(T.x,T.y,T.z),d.push(J,1-w),b.push(x++)}v.push(b)}for(let Y=0;Y<s;Y++)for(let b=0;b<r;b++){let w=v[b][Y],U=v[b+1][Y],B=v[b+1][Y+1],J=v[b][Y+1];h.push(w,U,J),h.push(U,B,J),I+=6}c.addGroup(p,I,0),p+=I}function y(T){let N=x,I=new Ne,L=new F,Y=0,b=T===!0?e:t,w=T===!0?1:-1;for(let B=1;B<=s;B++)f.push(0,m*w,0),u.push(0,w,0),d.push(.5,.5),x++;let U=x;for(let B=0;B<=s;B++){let P=B/s*l+o,G=Math.cos(P),O=Math.sin(P);L.x=b*O,L.y=m*w,L.z=b*G,f.push(L.x,L.y,L.z),u.push(0,w,0),I.x=G*.5+.5,I.y=O*.5*w+.5,d.push(I.x,I.y),x++}for(let B=0;B<s;B++){let J=N+B,P=U+B;T===!0?h.push(P,P+1,J):h.push(P+1,P,J),Y+=3}c.addGroup(p,Y,T===!0?1:2),p+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},$i=class i extends Yi{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ml=class i extends Gn{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Qt(r,3)),this.setAttribute("normal",new Qt(r.slice(),3)),this.setAttribute("uv",new Qt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let y=new F,T=new F,N=new F;for(let I=0;I<t.length;I+=3)d(t[I+0],y),d(t[I+1],T),d(t[I+2],N),l(y,T,N,M)}function l(M,y,T,N){let I=N+1,L=[];for(let Y=0;Y<=I;Y++){L[Y]=[];let b=M.clone().lerp(T,Y/I),w=y.clone().lerp(T,Y/I),U=I-Y;for(let B=0;B<=U;B++)B===0&&Y===I?L[Y][B]=b:L[Y][B]=b.clone().lerp(w,B/U)}for(let Y=0;Y<I;Y++)for(let b=0;b<2*(I-Y)-1;b++){let w=Math.floor(b/2);b%2===0?(u(L[Y][w+1]),u(L[Y+1][w]),u(L[Y][w])):(u(L[Y][w+1]),u(L[Y+1][w+1]),u(L[Y+1][w]))}}function c(M){let y=new F;for(let T=0;T<r.length;T+=3)y.x=r[T+0],y.y=r[T+1],y.z=r[T+2],y.normalize().multiplyScalar(M),r[T+0]=y.x,r[T+1]=y.y,r[T+2]=y.z}function h(){let M=new F;for(let y=0;y<r.length;y+=3){M.x=r[y+0],M.y=r[y+1],M.z=r[y+2];let T=m(M)/2/Math.PI+.5,N=p(M)/Math.PI+.5;a.push(T,1-N)}x(),f()}function f(){for(let M=0;M<a.length;M+=6){let y=a[M+0],T=a[M+2],N=a[M+4],I=Math.max(y,T,N),L=Math.min(y,T,N);I>.9&&L<.1&&(y<.2&&(a[M+0]+=1),T<.2&&(a[M+2]+=1),N<.2&&(a[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function d(M,y){let T=M*3;y.x=e[T+0],y.y=e[T+1],y.z=e[T+2]}function x(){let M=new F,y=new F,T=new F,N=new F,I=new Ne,L=new Ne,Y=new Ne;for(let b=0,w=0;b<r.length;b+=9,w+=6){M.set(r[b+0],r[b+1],r[b+2]),y.set(r[b+3],r[b+4],r[b+5]),T.set(r[b+6],r[b+7],r[b+8]),I.set(a[w+0],a[w+1]),L.set(a[w+2],a[w+3]),Y.set(a[w+4],a[w+5]),N.copy(M).add(y).add(T).divideScalar(3);let U=m(N);v(I,w+0,M,U),v(L,w+2,y,U),v(Y,w+4,T,U)}}function v(M,y,T,N){N<0&&M.x===1&&(a[y]=M.x-1),T.x===0&&T.z===0&&(a[y]=N/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},Ba=class i extends Ml{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Er=class extends Zs{constructor(e){super(e),this.uuid=Js(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Zs().fromJSON(s))}return this}},U0={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=ru(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,f,u,d;if(n&&(r=H0(i,e,r,t)),i.length>80*t){o=c=i[0],l=h=i[1];for(let x=t;x<s;x+=t)f=i[x],u=i[x+1],f<o&&(o=f),u<l&&(l=u),f>c&&(c=f),u>h&&(h=u);d=Math.max(c-o,h-l),d=d!==0?32767/d:0}return Tr(r,a,t,o,l,d,0),a}};function ru(i,e,t,n,s){let r,a;if(s===K0(i,e,t,n)>0)for(r=e;r<t;r+=n)a=Ih(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=Ih(r,i[r],i[r+1],a);return a&&Ya(a,a.next)&&(Ar(a),a=a.next),a}function ls(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ya(t,t.next)||jt(t.prev,t,t.next)===0)){if(Ar(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Tr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&W0(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?O0(i,n,s,r):N0(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Ar(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=F0(ls(i),e,t),Tr(i,e,t,n,s,r,2)):a===2&&B0(i,e,t,n,s,r):Tr(ls(i),e,t,n,s,r,1);break}}}function N0(i){let e=i.prev,t=i,n=i.next;if(jt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,f=o<l?o<c?o:c:l<c?l:c,u=s>r?s>a?s:a:r>a?r:a,d=o>l?o>c?o:c:l>c?l:c,x=n.next;for(;x!==e;){if(x.x>=h&&x.x<=u&&x.y>=f&&x.y<=d&&ks(s,o,r,l,a,c,x.x,x.y)&&jt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function O0(i,e,t,n){let s=i.prev,r=i,a=i.next;if(jt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,f=r.y,u=a.y,d=o<l?o<c?o:c:l<c?l:c,x=h<f?h<u?h:u:f<u?f:u,v=o>l?o>c?o:c:l>c?l:c,m=h>f?h>u?h:u:f>u?f:u,p=Sl(d,x,e,t,n),M=Sl(v,m,e,t,n),y=i.prevZ,T=i.nextZ;for(;y&&y.z>=p&&T&&T.z<=M;){if(y.x>=d&&y.x<=v&&y.y>=x&&y.y<=m&&y!==s&&y!==a&&ks(o,h,l,f,c,u,y.x,y.y)&&jt(y.prev,y,y.next)>=0||(y=y.prevZ,T.x>=d&&T.x<=v&&T.y>=x&&T.y<=m&&T!==s&&T!==a&&ks(o,h,l,f,c,u,T.x,T.y)&&jt(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=v&&y.y>=x&&y.y<=m&&y!==s&&y!==a&&ks(o,h,l,f,c,u,y.x,y.y)&&jt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;T&&T.z<=M;){if(T.x>=d&&T.x<=v&&T.y>=x&&T.y<=m&&T!==s&&T!==a&&ks(o,h,l,f,c,u,T.x,T.y)&&jt(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function F0(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!Ya(s,r)&&au(s,n,n.next,r)&&wr(s,r)&&wr(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Ar(n),Ar(n.next),n=i=r),n=n.next}while(n!==i);return ls(n)}function B0(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Y0(a,o)){let l=ou(a,o);a=ls(a,a.next),l=ls(l,l.next),Tr(a,e,t,n,s,r,0),Tr(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function H0(i,e,t,n){let s=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=ru(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(q0(c));for(s.sort(k0),r=0;r<s.length;r++)t=z0(s[r],t);return t}function k0(i,e){return i.x-e.x}function z0(i,e){let t=V0(i,e);if(!t)return e;let n=ou(t,i);return ls(n,n.next),ls(t,t.next)}function V0(i,e){let t=e,n=-1/0,s,r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let u=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=r&&u>n&&(n=u,s=t.x<t.next.x?t:t.next,u===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,f;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&ks(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(f=Math.abs(a-t.y)/(r-t.x),wr(t,i)&&(f<h||f===h&&(t.x>s.x||t.x===s.x&&G0(s,t)))&&(s=t,h=f)),t=t.next;while(t!==o);return s}function G0(i,e){return jt(i.prev,i,e.prev)<0&&jt(e.next,i,i.next)<0}function W0(i,e,t,n){let s=i;do s.z===0&&(s.z=Sl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,X0(s)}function X0(i){let e,t,n,s,r,a,o,l,c=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(a>1);return i}function Sl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function q0(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function ks(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Y0(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!$0(i,e)&&(wr(i,e)&&wr(e,i)&&Z0(i,e)&&(jt(i.prev,i,e.prev)||jt(i,e.prev,e))||Ya(i,e)&&jt(i.prev,i,i.next)>0&&jt(e.prev,e,e.next)>0)}function jt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ya(i,e){return i.x===e.x&&i.y===e.y}function au(i,e,t,n){let s=ca(jt(i,e,t)),r=ca(jt(i,e,n)),a=ca(jt(t,n,i)),o=ca(jt(t,n,e));return!!(s!==r&&a!==o||s===0&&la(i,t,e)||r===0&&la(i,n,e)||a===0&&la(t,i,n)||o===0&&la(t,e,n))}function la(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ca(i){return i>0?1:i<0?-1:0}function $0(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&au(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function wr(i,e){return jt(i.prev,i,i.next)<0?jt(i,e,i.next)>=0&&jt(i,i.prev,e)>=0:jt(i,e,i.prev)<0||jt(i,i.next,e)<0}function Z0(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function ou(i,e){let t=new bl(i.i,i.x,i.y),n=new bl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Ih(i,e,t,n){let s=new bl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ar(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function bl(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function K0(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var pr=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Lh(e),Dh(n,e);let a=e.length;t.forEach(Lh);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Dh(n,t[l]);let o=U0.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Lh(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Dh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Ha=class i extends Gn{constructor(e=new Er([new Ne(0,.5),new Ne(-.5,-.5),new Ne(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Qt(s,3)),this.setAttribute("normal",new Qt(r,3)),this.setAttribute("uv",new Qt(a,2));function c(h){let f=s.length/3,u=h.extractPoints(t),d=u.shape,x=u.holes;pr.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=x.length;m<p;m++){let M=x[m];pr.isClockWise(M)===!0&&(x[m]=M.reverse())}let v=pr.triangulateShape(d,x);for(let m=0,p=x.length;m<p;m++){let M=x[m];d=d.concat(M)}for(let m=0,p=d.length;m<p;m++){let M=d[m];s.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let m=0,p=v.length;m<p;m++){let M=v[m],y=M[0]+f,T=M[1]+f,N=M[2]+f;n.push(y,T,N),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return J0(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function J0(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var cs=class i extends Gn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new F,u=new F,d=[],x=[],v=[],m=[];for(let p=0;p<=n;p++){let M=[],y=p/n,T=0;p===0&&a===0?T=.5/t:p===n&&l===Math.PI&&(T=-.5/t);for(let N=0;N<=t;N++){let I=N/t;f.x=-e*Math.cos(s+I*r)*Math.sin(a+y*o),f.y=e*Math.cos(a+y*o),f.z=e*Math.sin(s+I*r)*Math.sin(a+y*o),x.push(f.x,f.y,f.z),u.copy(f).normalize(),v.push(u.x,u.y,u.z),m.push(I+T,1-y),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){let y=h[p][M+1],T=h[p][M],N=h[p+1][M],I=h[p+1][M+1];(p!==0||a>0)&&d.push(y,T,I),(p!==n-1||l<Math.PI)&&d.push(T,N,I)}this.setIndex(d),this.setAttribute("position",new Qt(x,3)),this.setAttribute("normal",new Qt(v,3)),this.setAttribute("uv",new Qt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Bn=class extends qi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$h,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function ha(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function j0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ks=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},El=class extends Ks{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Uc,endingEnd:Uc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Nc:r=e,o=2*t-n;break;case Oc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Nc:a=e,l=2*n-t;break;case Oc:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,x=(n-t)/(s-t),v=x*x,m=v*x,p=-u*m+2*u*v-u*x,M=(1+u)*m+(-1.5-2*u)*v+(-.5+u)*x+1,y=(-1-d)*m+(1.5+d)*v+.5*x,T=d*m-d*v;for(let N=0;N!==o;++N)r[N]=p*a[h+N]+M*a[c+N]+y*a[l+N]+T*a[f+N];return r}},Tl=class extends Ks{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),f=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*f+a[l+u]*h;return r}},wl=class extends Ks{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ci=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ha(t,this.TimeBufferType),this.values=ha(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ha(e.times,Array),values:ha(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new wl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Tl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new El(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case da:t=this.InterpolantFactoryMethodDiscrete;break;case fa:t=this.InterpolantFactoryMethodLinear;break;case mo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return da;case this.InterpolantFactoryMethodLinear:return fa;case this.InterpolantFactoryMethodSmooth:return mo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&j0(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===mo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*n,u=f-n,d=f+n;for(let x=0;x!==n;++x){let v=t[f+x];if(v!==t[u+x]||v!==t[d+x]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[f+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};ci.prototype.TimeBufferType=Float32Array;ci.prototype.ValueBufferType=Float32Array;ci.prototype.DefaultInterpolation=fa;var hs=class extends ci{};hs.prototype.ValueTypeName="bool";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=da;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;var Al=class extends ci{};Al.prototype.ValueTypeName="color";var Rl=class extends ci{};Rl.prototype.ValueTypeName="number";var Cl=class extends Ks{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Xi.slerpFlat(r,0,a,c-o,a,c,l);return r}},Rr=class extends ci{InterpolantFactoryMethodLinear(e){return new Cl(this.times,this.values,this.getValueSize(),e)}};Rr.prototype.ValueTypeName="quaternion";Rr.prototype.DefaultInterpolation=fa;Rr.prototype.InterpolantFactoryMethodSmooth=void 0;var us=class extends ci{};us.prototype.ValueTypeName="string";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=da;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;var Pl=class extends ci{};Pl.prototype.ValueTypeName="vector";var Il=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],x=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return x}return null}}},Q0=new Il,Ll=class{constructor(e){this.manager=e!==void 0?e:Q0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ll.DEFAULT_MATERIAL_NAME="__DEFAULT";var ka=class extends Fn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new mt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};var Wo=new fn,Uh=new F,Nh=new F,Dl=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new fn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vr,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new En(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Uh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Uh),Nh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nh),t.updateMatrixWorld(),Wo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Wo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Ul=class extends Dl{constructor(){super(new Aa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},za=class extends ka{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fn.DEFAULT_UP),this.updateMatrix(),this.target=new Fn,this.shadow=new Ul}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Va=class extends ka{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Gl="\\[\\]\\.:\\/",e_=new RegExp("["+Gl+"]","g"),Wl="[^"+Gl+"]",t_="[^"+Gl.replace("\\.","")+"]",n_=/((?:WC+[\/:])*)/.source.replace("WC",Wl),i_=/(WCOD+)?/.source.replace("WCOD",t_),s_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wl),r_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wl),a_=new RegExp("^"+n_+i_+s_+r_+"$"),o_=["material","materials","bones","map"],Nl=class{constructor(e,t,n){let s=n||$t.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},$t=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(e_,"")}static parseTrackName(e){let t=a_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);o_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};$t.Composite=Nl;$t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};$t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};$t.prototype.GetterByBindingType=[$t.prototype._getValue_direct,$t.prototype._getValue_array,$t.prototype._getValue_arrayElement,$t.prototype._getValue_toArray];$t.prototype.SetterByBindingTypeAndVersioning=[[$t.prototype._setValue_direct,$t.prototype._setValue_direct_setNeedsUpdate,$t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$t.prototype._setValue_array,$t.prototype._setValue_array_setNeedsUpdate,$t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$t.prototype._setValue_arrayElement,$t.prototype._setValue_arrayElement_setNeedsUpdate,$t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$t.prototype._setValue_fromArray,$t.prototype._setValue_fromArray_setNeedsUpdate,$t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var v_=new Float32Array(1);var Ga=class{constructor(e,t,n=0,s=1/0){this.ray=new xr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new yr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Ol(e,this,n,t),n.sort(Oh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Ol(e[s],this,n,t);return n.sort(Oh),n}};function Oh(i,e){return i.distance-e.distance}function Ol(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,a=s.length;r<a;r++)Ol(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fl);var c_=35,h_=25,yt=.95,Hn=.35,$a=6,ds=130,lu=240,cu=typeof window<"u"&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||window.location.search.includes("dev=1")),u_=[{value:"balanced",label:"Balanced (HP + even stats)"},{value:"tanky",label:"Tanky (HP + VIT)"},{value:"aggressive",label:"Aggressive (STR + AGI)"},{value:"scout",label:"Scout (high AGI)"},{value:"ranged",label:"Ranged (DEX + range)"},{value:"caster",label:"Caster (INT + MP)"},{value:"random",label:"Random"},{value:"custom",label:"Custom order"}],d_=["berserker","knight","lancer","werewolf","samurai","ninja","assassin","ghoul","monk","hunter","mage","witch"],Ke={PATH:0,GRASS:1,TREE:2,WATER:3,ROCK:4,BASE_TOP:5,BASE_BOTTOM:6,CENTER:7},Za=["knight","mage","monk","ghoul","lancer","hunter","assassin","berserker","witch","ninja","samurai","werewolf"];function f_(i){for(let e=i.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[i[e],i[t]]=[i[t],i[e]]}return i}var Ot={knight:{name:"Knight",gender:"male",hp:27,maxHp:27,mp:5,maxMp:5,str:13,agi:8,vit:14,dex:10,luk:4,int:7,range:1},mage:{name:"Mage",gender:"female",hp:17,maxHp:17,mp:22,maxMp:22,str:6,agi:4,vit:5,dex:4,luk:13,int:15,range:4},monk:{name:"Monk",gender:"male",hp:23,maxHp:23,mp:12,maxMp:12,str:10,agi:10,vit:12,dex:9,luk:11,int:10,range:1},ghoul:{name:"Ghoul",gender:"male",hp:21,maxHp:21,mp:6,maxMp:6,str:12,agi:9,vit:9,dex:11,luk:9,int:5,range:1},lancer:{name:"Lancer",gender:"female",hp:22,maxHp:22,mp:7,maxMp:7,str:13,agi:11,vit:10,dex:7,luk:5,int:8,range:2},hunter:{name:"Hunter",gender:"female",hp:18,maxHp:18,mp:9,maxMp:9,str:7,agi:5,vit:7,dex:15,luk:12,int:5,range:6},assassin:{name:"Assassin",gender:"female",hp:19,maxHp:19,mp:10,maxMp:10,str:9,agi:14,vit:6,dex:14,luk:10,int:4,range:1},berserker:{name:"Berserker",gender:"male",hp:30,maxHp:30,mp:3,maxMp:3,str:15,agi:7,vit:13,dex:8,luk:6,int:2,range:1},witch:{name:"Witch",gender:"female",hp:16,maxHp:16,mp:24,maxMp:24,str:5,agi:6,vit:4,dex:5,luk:14,int:14,range:3},ninja:{name:"Ninja",gender:"female",hp:20,maxHp:20,mp:12,maxMp:12,str:8,agi:15,vit:7,dex:12,luk:8,int:9,range:1},samurai:{name:"Samurai",gender:"male",hp:24,maxHp:24,mp:8,maxMp:8,str:11,agi:12,vit:8,dex:13,luk:7,int:6,range:1},werewolf:{name:"Werewolf",gender:"male",hp:25,maxHp:25,mp:4,maxMp:4,str:14,agi:13,vit:11,dex:6,luk:6,int:3,range:1}},Ka={knight:{primary:6908265,secondary:9127187,hair:12887172,cape:3355443},mage:{primary:16776656,secondary:3355443,hair:13353955,cape:4853326},monk:{primary:16777188,secondary:16119285,hair:2889744},ghoul:{primary:32896,secondary:6636321,hair:32896,skin:32896},lancer:{primary:3169502,secondary:16776656,hair:15854290,cape:14423100},hunter:{primary:8421376,secondary:9584654,hair:7898731,cape:16119285},assassin:{primary:986695,secondary:16119285,hair:2621751},berserker:{primary:657930,secondary:986695,hair:657930,cape:1118481},witch:{primary:16119285,secondary:8388640,hair:16777188,cape:2263842},ninja:{primary:267292,secondary:4744577,hair:4744577},samurai:{primary:13882323,secondary:3556687,hair:3556687},werewolf:{primary:11119017,secondary:14474460,hair:12632256}},Cr={knight:"https://creator.nightcafe.studio/jobs/OlIWpAye2LeM5gPkAGEI/OlIWpAye2LeM5gPkAGEI--1--xc223.jpg",mage:"https://media.craiyon.com/2025-08-13/bLqz0LbwSIynOcUHty4Maw.webp",monk:"https://cdnb.artstation.com/p/assets/images/images/028/576/499/large/ahruna-art-oct17.jpg?1594859688",ghoul:"https://i.pinimg.com/736x/d3/cc/41/d3cc41778d05dec0371a69e29659f792.jpg",lancer:"https://i.redd.it/zolf64gpoa0c1.jpg",hunter:"https://coolvibe.com/wp-content/uploads/2011/02/hunter.jpg",assassin:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk2-NBPpPOU7duYgN_k_9oFKZ5hJjU28qyoA&s",berserker:"https://entertainment.inquirer.net/files/2016/07/top_bg.jpg",witch:"https://w0.peakpx.com/wallpaper/382/134/HD-wallpaper-evil-witch-witch-female-dress-white-hair-evil-black-woman-girl-darkness-anime-dark-beauty-lady-long-hair.jpg",ninja:"https://i.pinimg.com/474x/02/88/60/0288609778e53701b7e64051d7164922.jpg",samurai:"https://files.idyllic.app/files/static/3120390?width=256&optimizer=image",werewolf:"https://i.pinimg.com/736x/1f/95/27/1f9527c6255465547d664f19dd11967c.jpg"},hu={knight:[{name:"Shield Wall",description:"Gain +2 VIT for 2 turns.",cost:3,target:"self",range:0,level:2,effectKey:"shieldWall"},{name:"Dominate",description:"Steal 1 STR from an enemy.",cost:5,target:"enemy",range:1,level:3,effectKey:"dominate"}],mage:[{name:"Arcane Bolt",description:"Deal INT-based damage to one enemy.",cost:4,target:"enemy",range:6,level:1,effectKey:"arcaneBolt",type:"spell"},{name:"Freeze",description:"Reduce target's AGI by 10 for 1 turn.",cost:8,target:"enemy",range:6,level:2,effectKey:"freeze"}],monk:[{name:"Mantra",description:"Gain LUK based on INT for both ally and self for 2 turns.",cost:3,hpCost:2,target:"ally",range:4,level:2,effectKey:"mantra"},{name:"Chakra",description:"Heal HP for both ally and self.",cost:8,target:"ally",range:4,level:3,effectKey:"chakra"}],ghoul:[{name:"Weaken",description:"Steal 1 VIT from an enemy.",cost:3,target:"enemy",range:1,level:2,effectKey:"weaken"},{name:"Feast",description:"Deal STR-based damage to enemy and heal self.",cost:4,target:"enemy",range:1,level:3,effectKey:"feast"}],lancer:[{name:"Impale",description:"Reduce target's AGI by 2 for 3 turns.",cost:4,target:"enemy",range:2,level:2,effectKey:"impale"},{name:"Pierce",description:"Deal STR-based damage through the defense.",cost:6,target:"enemy",range:2,level:3,effectKey:"pierce"}],hunter:[{name:"Focus",description:"Gain +3 DEX for 2 turns.",cost:4,target:"self",range:0,level:2,effectKey:"focus"},{name:"Snipe",description:"Deal DEX-based damage to one enemy.",cost:6,target:"enemy",range:10,level:3,effectKey:"snipe"}],assassin:[{name:"Cripple",description:"Steal 1 AGI from an enemy.",cost:5,target:"enemy",range:1,level:2,effectKey:"cripple"},{name:"Execute",description:"Deal AGI-based damage to one enemy.",cost:7,target:"enemy",range:1,level:3,effectKey:"execute"}],berserker:[{name:"Berserk",description:"Deal STR-based damage for -3 HP.",cost:0,hpCost:3,target:"enemy",range:1,level:2,effectKey:"berserk"},{name:"Bloodlust",description:"Gain STR and VIT based on lost HP for 1 turn.",cost:5,target:"self",range:0,level:3,effectKey:"bloodlust"}],witch:[{name:"Hex",description:"Steal 1 INT from an enemy.",cost:5,target:"enemy",range:5,level:1,effectKey:"hex"},{name:"Drain",description:"Deal INT-based damage to enemy and heal self.",cost:6,target:"enemy",range:5,level:2,effectKey:"drain",type:"spell"}],ninja:[{name:"Shuriken",description:"Deal DEX-based ranged attack.",cost:5,target:"enemy",range:4,level:2,effectKey:"shuriken"},{name:"Blind",description:"Steal 2 DEX from an enemy.",cost:8,target:"enemy",range:1,level:3,effectKey:"blind"}],samurai:[{name:"Iaido",description:"Gain +1 STR and +1 DEX for 2 turns.",cost:5,target:"self",range:0,level:2,effectKey:"iaido"},{name:"Chokuto",description:"Deal STR+DEX-based damage to one enemy.",cost:7,target:"enemy",range:1,level:3,effectKey:"chokuto"}],werewolf:[{name:"Bite",description:"Deal STR+AGI-based damage to one enemy.",cost:5,target:"enemy",range:1,level:2,effectKey:"bite"},{name:"Howl",description:"Gain +2 STR and +2 AGI for 2 turns.",cost:6,target:"self",range:0,level:3,effectKey:"howl"}]};function Me(i,e){let t=i[e]!=null?i[e]:0,n=i.tempBuff&&i.tempBuff[e]!=null?i.tempBuff[e]:0,s=i.tempDebuff&&i.tempDebuff[e]!=null?i.tempDebuff[e]:0;return t+n-s}function Ja(i,e,t,n){let s=e,r=t,o={shieldWall:"Shield Wall",dominate:"Dominate",arcaneBolt:"Arcane Bolt",freeze:"Freeze",mantra:"Mantra",chakra:"Chakra",weaken:"Weaken",feast:"Feast",impale:"Impale",pierce:"Pierce",focus:"Focus",snipe:"Snipe",execute:"Execute",cripple:"Cripple",berserk:"Berserk",bloodlust:"Bloodlust",hex:"Hex",drain:"Drain",shuriken:"Shuriken",blind:"Blind",iaido:"Iaido",chokuto:"Chokuto",bite:"Bite",howl:"Howl"}[i]||i.replace(/([A-Z])/g," $1").replace(/^./,d=>d.toUpperCase()).trim();n.showFloatingCombatText&&n.showFloatingCombatText(s.x,s.y,o,!1,"skill-name");let l=i.replace(/([A-Z])/g," $1").replace(/^./,d=>d.toUpperCase()).trim(),c=r?`${r.name} (${r.class}, P${r.player})`:"self",h=null,f=(d,x,v,m)=>{if(v)d.hp=Math.min(d.maxHp,d.hp+x),n.showFloatingCombatText&&n.showFloatingCombatText(d.x,d.y,`+${x}`,!1,"heal");else{let p=d===s,M=!0;if(!p&&!m){let y=Me(d,"agi")*.7+Me(d,"luk")*.3;M=Math.random()*Math.max(.001,y)<=Me(s,"dex")}return M?(d.hp=Math.max(0,d.hp-x),d!==s&&(h=x),n.showFloatingCombatText&&n.showFloatingCombatText(d.x,d.y,String(x),!1),n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(d),d.hp<=0&&n.handleUnitDeath&&n.handleUnitDeath(d)):n.showFloatingCombatText&&n.showFloatingCombatText(d.x,d.y,"MISS",!0),M}},u=(d,x,v,m)=>{n.showFloatingCombatText&&n.showFloatingCombatText(d,x,v,!1,m?"buff":"debuff")};switch(i){case"shieldWall":s.tempBuff=s.tempBuff||{},s.tempBuff.vit=2,s.tempBuff.duration=3,u(s.x,s.y,"+2 VIT",!0);break;case"dominate":r&&(r.str=Math.max(1,(r.str||0)-1),s.str=(s.str||0)+1,u(r.x,r.y,"-1 STR",!1),u(s.x,s.y,"+1 STR",!0));break;case"arcaneBolt":{if(!r)break;let d=Math.max(1,Math.ceil(Me(s,"int")-(Me(r,"int")*.7+Me(r,"luk")*.2)));f(r,d,!1,!0);break}case"freeze":r&&(r.tempDebuff=r.tempDebuff||{},r.tempDebuff.agi=10,r.tempDebuff.duration=1,u(r.x,r.y,"-10 AGI",!1));break;case"mantra":if(r){let d=Math.max(1,Math.floor(Me(s,"int")*.3));if(s.tempBuff=s.tempBuff||{},s.tempBuff.int=d,s.tempBuff.duration=3,u(s.x,s.y,`+${d} LUK`,!0),!r)break;r.tempBuff=r.tempBuff||{},r.tempBuff.luk=d,r.tempBuff.duration=3,u(r.x,r.y,`+${d} LUK`,!0)}break;case"chakra":if(f(s,Math.max(1,Math.floor(Me(s,"int")*.3)+Me(s,"luk")*.2),!0),!r)break;f(r,Math.max(1,Math.floor(Me(s,"int")*.3)+Me(r,"luk")*.2),!0);break;case"weaken":r&&(r.vit=Math.max(1,(r.vit||0)-1),s.vit=(s.vit||0)+1,u(r.x,r.y,"-1 VIT",!1),u(s.x,s.y,"+1 VIT",!0));break;case"feast":{if(!r)break;let d=Math.max(1,Math.floor(Me(s,"str")*.7-(Me(r,"vit")*.3+Me(r,"luk")*.2)));f(r,d,!1)&&f(s,d,!0);break}case"impale":r&&(r.tempDebuff=r.tempDebuff||{},r.tempDebuff.agi=2,r.tempDebuff.duration=4,u(r.x,r.y,"-2 AGI",!1));break;case"pierce":{if(!r)break;let d=Math.max(1,Math.floor(Me(s,"str")*.6));f(r,d,!1);break}case"focus":s.tempBuff=s.tempBuff||{},s.tempBuff.dex=3,s.tempBuff.duration=3,u(s.x,s.y,"+2 DEX",!0);break;case"snipe":{if(!r)break;let d=Math.max(1,Math.floor(Me(s,"dex")*.7-(Me(r,"vit")*.3+Me(r,"luk")*.2)));f(r,d,!1);break}case"execute":if(r){let d=Math.max(1,Math.floor(Me(s,"agi")*.7-(Me(r,"vit")*.3+Me(r,"luk")*.2)));f(r,d,!1)}break;case"cripple":r&&(r.agi=Math.max(1,(r.agi||0)-1),s.agi=(s.agi||0)+1,u(r.x,r.y,"-1 AGI",!1),u(s.x,s.y,"+1 AGI",!0));break;case"berserk":if(r){f(r,Math.max(1,Math.floor(Me(s,"str")*.8-Me(r,"vit")*.3+Me(r,"luk")*.2)),!1),f(s,3,!1);break}case"bloodlust":{let d=Math.max(1,Math.floor((s.maxHp-s.hp)*.2));s.tempBuff=s.tempBuff||{},s.tempBuff.str=d,s.tempBuff.vit=d,s.tempBuff.duration=2,u(s.x,s.y,`+${d} STR, +${d} VIT`,!0);break}case"hex":r&&(r.int=Math.max(1,(r.int||0)-1),s.int=(s.int||0)+1,u(r.x,r.y,"-1 INT",!1),u(s.x,s.y,"+1 INT",!0));break;case"drain":{if(!r)break;let d=Math.max(1,Math.ceil(Me(s,"int")*.7-(Me(r,"int")*.4+Me(r,"luk")*.2)));f(r,d,!1,!0),f(s,d,!0);break}case"shuriken":{if(!r)break;let d=Math.max(1,Math.floor(Me(s,"dex")*.7-(Me(r,"vit")*.3+Me(r,"luk")*.2)));f(r,d,!1);break}case"blind":r&&(r.dex=Math.max(1,(r.dex||0)-2),s.dex=(s.dex||0)+2,u(r.x,r.y,"-2 DEX",!1),u(s.x,s.y,"+2 DEX",!0));break;case"iaido":s.tempBuff=s.tempBuff||{},s.tempBuff.str=1,s.tempBuff.dex=1,s.tempBuff.duration=3,u(s.x,s.y,"+1 STR, +1 DEX",!0);break;case"chokuto":{if(!r)break;let d=Math.max(1,Math.floor((s.str||0)+(s.dex||0)*.3));f(r,d,!1);break}case"bite":{if(!r)break;let d=Math.max(1,Math.floor(Me(s,"str")*.7+Me(s,"agi")*.1-(Me(r,"vit")*.3+Me(r,"luk")*.2)));f(r,d,!1);break}case"howl":s.tempBuff=s.tempBuff||{},s.tempBuff.str=2,s.tempBuff.agi=2,s.tempBuff.duration=2,u(s.x,s.y,"+2 STR, +2 AGI",!0);break;default:break}console.log("[SKILL]",`${s.name} (${s.class}, P${s.player})`,"uses",l,"\u2192",c,`| MP ${s.mp}`,h!=null?`| ${h} dmg`:""),n.updateTurnUI&&n.updateTurnUI()}function p_(){let i=c_,e=h_,t=Array.from({length:e},()=>Array(i).fill(!1)),n=Array.from({length:e},()=>Array(i).fill(0)),s=Array.from({length:e},()=>Array(i).fill(Ke.GRASS)),r=Math.floor(i/2),a=Math.floor(i/2),o=0,l=e-1;for(let U=-1;U<=1;U++)for(let B=-2;B<=2;B++){let J=r+B,P=o+U;J>=0&&J<i&&P>=0&&P<e&&(t[P][J]=!0,s[P][J]=Ke.BASE_TOP,n[P][J]=1)}for(let U=-1;U<=1;U++)for(let B=-2;B<=2;B++){let J=a+B,P=l+U;J>=0&&J<i&&P>=0&&P<e&&(t[P][J]=!0,s[P][J]=Ke.BASE_BOTTOM,n[P][J]=1)}let c=Math.floor(i/2),h=Math.floor(e/2);for(let U=-1;U<=1;U++)for(let B=-2;B<=2;B++){let J=c+B,P=h+U;J>=0&&J<i&&P>=0&&P<e&&(t[P][J]=!0,s[P][J]=Ke.CENTER,n[P][J]=1)}let f=new Set,u=(U,B)=>Math.abs(U-c)<=2&&Math.abs(B-h)<=1,d=(U,B)=>{U<0||U>=i||B<0||B>=e||u(U,B)||f.add(B*i+U)},x=Math.floor(i/2),v=Math.floor(e/2),m=Math.min(i,e)*.29,p=Math.max(60,(e+i)*2);for(let U=0;U<2;U++){let B=U===0?x-m:x+m,J=U===0?Math.PI/2:-Math.PI/2,P=U===0?Math.PI*3/2:Math.PI/2;for(let G=0;G<=p;G++){let O=G/p,se=J+O*(P-J),$=B+m*Math.cos(se),Q=v+m*Math.sin(se),ie=Math.round($),le=Math.round(Q);d(ie,le),d(ie+1,le),d(ie-1,le),d(ie,le+1),d(ie,le-1)}}let M=[[0,1],[0,-1],[1,0],[-1,0]];for(let U=0;U<1;U++){let B=[];f.forEach(J=>{let P=J%i,G=J/i|0;for(let[O,se]of M){let $=P+O,Q=G+se;if($<0||$>=i||Q<0||Q>=e)continue;let ie=Q*i+$;f.has(ie)||B.push(ie)}}),B.forEach(J=>f.add(J))}f.forEach(U=>{let B=U%i,J=U/i|0;s[J][B]===Ke.BASE_TOP||s[J][B]===Ke.BASE_BOTTOM||s[J][B]===Ke.CENTER||(t[J][B]=!0,s[J][B]=Ke.PATH,n[J][B]=1)});let y=Math.round(x-m*1.6),T=Math.round(x+m*1.6),N=Math.round(x-m),I=Math.round(x+m),L=1;for(let U=h-L;U<=h+L;U++)if(!(U<0||U>=e))for(let B=y;B<=T;B++)B<0||B>=i||(t[U][B]=!0,s[U][B]!==Ke.CENTER&&s[U][B]!==Ke.BASE_TOP&&s[U][B]!==Ke.BASE_BOTTOM&&(s[U][B]=Ke.PATH),n[U][B]=Math.max(n[U][B],1));function Y(U,B,J,P){let G=Math.max(1,Math.min(U,B)),O=Math.min(e-2,Math.max(U,B)),se=Math.max(1,Math.min(J,P)),$=Math.min(i-2,Math.max(J,P));for(let Q=G;Q<=O;Q++)for(let ie=se;ie<=$;ie++)s[Q][ie]===Ke.BASE_TOP||s[Q][ie]===Ke.BASE_BOTTOM||s[Q][ie]===Ke.CENTER||(t[Q][ie]=!0,s[Q][ie]=Ke.PATH,n[Q][ie]=1)}let b=3,w=3;Y(o,o+b-1,N,r-1),Y(o,o+b-1,r+1,I),Y(l-w+1,l,N,a-1),Y(l-w+1,l,a+1,I);for(let U=-1;U<=2;U++)for(let B=-2;B<=2;B++){let J=r+B,P=o+U;J>=0&&J<i&&P>=0&&P<e&&(t[P][J]=!0,s[P][J]=Ke.BASE_TOP,n[P][J]=1)}for(let U=-2;U<=1;U++)for(let B=-2;B<=2;B++){let J=a+B,P=l+U;J>=0&&J<i&&P>=0&&P<e&&(t[P][J]=!0,s[P][J]=Ke.BASE_BOTTOM,n[P][J]=1)}for(let U=0;U<e;U++)for(let B=0;B<i;B++){if(t[U][B]||s[U][B]===Ke.BASE_TOP||s[U][B]===Ke.BASE_BOTTOM||s[U][B]===Ke.CENTER)continue;let J=Math.abs(B-r)<=4&&Math.abs(U-o)<=3,P=Math.abs(B-a)<=4&&Math.abs(U-l)<=3,G=J||P,O=Math.random();O<.55&&!G?(s[U][B]=Ke.TREE,n[U][B]=1+Math.floor(Math.random()*2)):O<.75||G&&O<.5?(s[U][B]=Ke.WATER,n[U][B]=0):(s[U][B]=Ke.ROCK,n[U][B]=1+Math.floor(Math.random()*2))}return{w:i,h:e,path:t,height:n,type:s,topBaseX:r,topBaseY:o,botBaseX:a,botBaseY:l}}function m_(i,e,t){let n=e===1?Ke.BASE_BOTTOM:Ke.BASE_TOP,s=[];for(let r=0;r<i.h;r++)for(let a=0;a<i.w;a++)i.type[r][a]===n&&(t&&t.has(r*i.w+a)||s.push({gx:a,gy:r}));return s}function g_(i){let e=[];for(let t=0;t<i.h;t++)for(let n=0;n<i.w;n++)i.type[t][n]===Ke.CENTER&&e.push({gx:n,gy:t});return e}function uu(i,e){let t=g_(i);if(t.length===0)return e;let n=s=>Math.min(...t.map(r=>Math.abs(s.gx-r.gx)+Math.abs(s.gy-r.gy)));return[...e].sort((s,r)=>n(s)-n(r))}function Pr(i,e,t){if(e<0||e>=i.w||t<0||t>=i.h)return!1;let n=i.type[t][e];return!(n===Ke.TREE||n===Ke.WATER||n===Ke.ROCK)}function __(i,e,t,n){let s=[],r=i,a=e,o=t,l=n,c=Math.abs(o-r),h=Math.abs(l-a),f=r<o?1:-1,u=a<l?1:-1,d=c-h;for(;s.push({x:r,y:a}),!(r===o&&a===l);){let x=2*d;x>-h&&(d-=h,r+=f),x<c&&(d+=c,a+=u)}return s}function fs(i,e,t,n,s){let r=__(e,t,n,s);for(let a=1;a<r.length-1;a++){let o=r[a];if(!Pr(i,o.x,o.y))return!1}return!0}function ja(i,e,t,n,s,r){let a=(f,u)=>u*i.w+f,o=new Map;o.set(a(e,t),0);let l=[{x:e,y:t,d:0}],c=[[0,1],[0,-1],[1,0],[-1,0]],h=s!=null&&r!=null;for(;l.length;){let{x:f,y:u,d}=l.shift();if(!(d>=n))for(let[x,v]of c){let m=f+x,p=u+v;if(!Pr(i,m,p))continue;if(h){let T=s.find(N=>N.hp>0&&N.x===m&&N.y===p);if(T&&T.player!==r.player)continue}let M=a(m,p);if(o.has(M))continue;let y=d+1;o.set(M,y),l.push({x:m,y:p,d:y})}}return o}function du(i,e,t,n){let s=new Map;for(let r=0;r<i.h;r++)for(let a=0;a<i.w;a++){let o=Math.abs(a-e)+Math.abs(r-t);o>=1&&o<=n&&s.set(r*i.w+a,o)}return s}function Zi(i,e,t,n,s,r,a){if(e===n&&t===s)return[{x:e,y:t}];let o=(u,d)=>d*i.w+u,l=new Map,c=[{x:e,y:t}];l.set(o(e,t),null);let h=[[0,1],[0,-1],[1,0],[-1,0]];function f(u,d){if(!Pr(i,u,d))return!1;let x=r.find(v=>v.hp>0&&v.x===u&&v.y===d);return x?x.id===a.id||x.player===a.player:!0}for(;c.length;){let{x:u,y:d}=c.shift();if(u===n&&d===s){let x=[],v={x:n,y:s};for(;v;)x.unshift(v),v=l.get(o(v.x,v.y));return x}for(let[x,v]of h){let m=u+x,p=d+v,M=o(m,p);l.has(M)||f(m,p)&&(l.set(M,{x:u,y:d}),c.push({x:m,y:p}))}}return null}var fu={[Ke.PATH]:2976557,[Ke.GRASS]:2968109,[Ke.TREE]:1719578,[Ke.WATER]:1989278,[Ke.ROCK]:4872778,[Ke.BASE_TOP]:8014410,[Ke.BASE_BOTTOM]:4872826,[Ke.CENTER]:13940810};function pu(i){return i.w*yt/2}function mu(i){return i.h*yt/2}function gu(i){let e=document.createElement("canvas");e.width=i,e.height=i;let t=e.getContext("2d"),n=t.createImageData(i,i),s=n.data;for(let a=0;a<s.length;a+=4){let o=Math.floor(128+(Math.random()-.5)*80);s[a]=s[a+1]=s[a+2]=o,s[a+3]=255}t.putImageData(n,0,0);let r=new Da(e);return r.wrapS=r.wrapT=mr,r.repeat.set(4,4),r.needsUpdate=!0,r}function x_(i){let e=new jn,t=pu(i),n=mu(i),s=new Pn(yt,Hn,yt),r=gu(64),a=.88,o=.02,l=[];function c(u,d,x,v,m){let p=new Bn({color:3828266,roughness:.9});p.bumpMap=r,p.bumpScale=.12;for(let M=0;M<v;M++){let y=.08+Math.random()*m,T=.03+Math.random()*.03,N=new ct(new Yi(T*.5,T,y,6),p);N.position.set(u+(Math.random()-.5)*.5,x+y/2,d+(Math.random()-.5)*.5),N.rotation.x=(Math.random()-.5)*.2,N.rotation.z=(Math.random()-.5)*.2,N.castShadow=!0,e.add(N)}}let h=.12;function f(u,d,x,v){let m=x+.02,p=[[u-h,m,d-h],[u+h,m,d+h],[u-h,m,d+h],[u+h,m,d-h],[u-h+.06,m,d-h+.06],[u+h-.06,m,d+h-.06],[u-h+.06,m,d+h-.06],[u+h-.06,m,d-h+.06]],M=new Float32Array(p.length*3);p.forEach((I,L)=>{M[L*3]=I[0],M[L*3+1]=I[1],M[L*3+2]=I[2]});let y=new Gn;y.setAttribute("position",new Vn(M,3)),y.computeBoundingSphere();let T=new Sr({color:855309,linewidth:1}),N=new La(y,T);v.add(N)}for(let u=0;u<i.h;u++)for(let d=0;d<i.w;d++){let x=i.type[u][d],v=i.height[u][d],m=fu[x],p=Hn+v*.35,M=p/2+Hn/2,y=new Bn({roughness:Math.max(.7,Math.min(1,a+(Math.random()-.5)*.18)),metalness:Math.max(0,Math.min(.1,o+(Math.random()-.5)*.04))}),T=(m>>16&255)/255,N=(m>>8&255)/255,I=(m&255)/255,L=T,Y=N,b=I;if(x===Ke.PATH||x===Ke.TREE||x===Ke.ROCK){let se=Math.random()*.45;L=T*(1-se)+.42*se,Y=N*(1-se)+.26*se,b=I*(1-se)+.14*se}(x===Ke.TREE||x===Ke.ROCK)&&(L*=.5,Y*=.5,b*=.5);let w=1+(Math.random()-.5)*.12;y.color.setRGB(Math.min(1,L*w),Math.min(1,Y*w),Math.min(1,b*w)),y.bumpMap=r,y.bumpScale=.12;let U=new ct(s,y);U.position.set(d*yt-t+yt/2,p/2,u*yt-n+yt/2),U.castShadow=!0,U.receiveShadow=!0,U.userData={gx:d,gy:u,type:x},e.add(U);let B=d*yt-t+yt/2,J=u*yt-n+yt/2;if(x===Ke.TREE&&f(B,J,M,e),x===Ke.TREE){let P=new jn;P.position.set(B,M,J);let G=d===0||d===i.w-1||u===0||u===i.h-1,O=G?.75+Math.random()*.35:.5+Math.random()*.2,se=new mt(4007959),$=()=>1+(Math.random()-.5)*.4;se.r=Math.min(1,Math.max(0,se.r*$())),se.g=Math.min(1,Math.max(0,se.g*$())),se.b=Math.min(1,Math.max(0,se.b*$()));let Q=.85+Math.random()*.2,ie=new Bn({color:se,roughness:Q});ie.bumpMap=r,ie.bumpScale=.1+Math.random()*.12;let le=new ct(new Yi(.12,.14,O,8),ie);le.position.set(0,O/2,0),le.castShadow=!0,le.raycast=function(){},P.add(le);let pe=r.clone();pe.repeat.set(3,3);let ee=new mt(2972205),de=()=>1+(Math.random()-.5)*.44;ee.r=Math.min(1,Math.max(0,ee.r*de())),ee.g=Math.min(1,Math.max(0,ee.g*de())),ee.b=Math.min(1,Math.max(0,ee.b*de()));let we=.78+Math.random()*.24,He=new Bn({color:ee,roughness:we});He.bumpMap=pe,He.bumpScale=.16+Math.random()*.14;let ke=G?.52:.45,rt=G?1.05:.9,ht=.12,Ve=rt*.5,bt=rt*.45,Z=rt*.4,Zt=new ct(new $i(ke,Ve,8),He);Zt.position.set(0,O+Ve/2,0),Zt.castShadow=!0,Zt.raycast=function(){},P.add(Zt);let $e=new ct(new $i(ke*.75,bt,8),He);$e.position.set(0,O+Ve-ht+bt/2,0),$e.castShadow=!0,$e.raycast=function(){},P.add($e);let it=new ct(new $i(ke*.5,Z,8),He);it.position.set(0,O+Ve-ht+bt-ht+Z/2,0),it.castShadow=!0,it.raycast=function(){},P.add(it),e.add(P),l.push(P)}else if(x===Ke.WATER){let P=fu[Ke.WATER],G=(P>>16&255)/255,O=(P>>8&255)/255,se=(P&255)/255,$=1+(Math.random()-.5)*.12,Q=new Bn({color:new mt().setRGB(Math.min(1,G*$),Math.min(1,O*$),Math.min(1,se*$)),roughness:.08,metalness:.45,transparent:!0,opacity:.94,bumpMap:r,bumpScale:.03}),ie=new ct(new wi(yt,yt),Q);ie.rotation.x=-Math.PI/2,ie.position.set(B,M+.02,J),ie.receiveShadow=!0,e.add(ie)}else if(x===Ke.ROCK){let P=new Bn({color:6974058,roughness:.9});P.bumpMap=r,P.bumpScale=.2;let G=(Q,ie,le)=>{let pe=new ct(new Ba(Q,0),P);pe.position.set(B+ie,M+Q-.2,J+le),pe.rotation.set(Math.random(),Math.random(),Math.random()),pe.castShadow=!0,e.add(pe)},O=.32+Math.random()*.14,se=.2+Math.random()*.12,$=.12+Math.random()*.12;G(O,(Math.random()-.5)*.15,(Math.random()-.5)*.15),G(se,(Math.random()-.5)*.25,(Math.random()-.5)*.25),G($,(Math.random()-.5)*.28,(Math.random()-.5)*.28)}}return e.userData.treeGroups=l,e}function y_(){let i=document.querySelector("#mode-select-overlay .mode-select-instructions");i&&console.log(i.textContent.trim());let e=p_(),t=document.getElementById("canvas-wrap"),n=new Ia;n.background=new mt(1711652),n.fog=new Pa(1711652,30,90);let s=e.w*yt/2,r=e.h*yt/2,a=new On(50,t.clientWidth/t.clientHeight,.1,200),o=17,l=new F(12,38,16).normalize().multiplyScalar(o),c=new F,h=new F,f=new ai(new F(0,1,0),0),u=new F,d=new F,x=!1,v=!1,m=!1,p=null,M=5,y=.004,T=-Math.PI*.4,N=Math.PI*.4,I=new F,L={x:0,y:0},Y=1,b=40,w=.08,U=.15,B=null,J=new Va(16777215,.45);n.add(J);let P=new za(16774630,1.1);P.position.set(30,50,20),P.castShadow=!0,P.shadow.mapSize.width=2048,P.shadow.mapSize.height=2048,P.shadow.camera.near=1,P.shadow.camera.far=120,P.shadow.camera.left=-50,P.shadow.camera.right=50,P.shadow.camera.top=50,P.shadow.camera.bottom=-50,n.add(P);let G=x_(e);n.add(G);let O=[],se=1,$=new Map,Q=gu(64),ie=pu(e),le=mu(e);function pe(_,g){let C=(Hn+e.height[g][_]*.35)/2+Hn/2;return new F(_*yt-ie+yt/2,C,g*yt-le+yt/2)}function ee(_,g){let R=(_>>16&255)/255,C=(_>>8&255)/255,k=(_&255)/255,H=1+(Math.random()-.5)*g;return new mt(Math.min(1,R*H),Math.min(1,C*H),Math.min(1,k*H))}let de=.62;function we(_,g){g=g??de;let R=_ instanceof mt?_:new mt(_);return new mt(Math.max(0,R.r*g),Math.max(0,R.g*g),Math.max(0,R.b*g))}function He(_,g,R){let C=Ka[g]||Ka.knight,k=we(ee(C.primary,.08)),H=we(ee(C.secondary,.08)),V=Ot[g]&&Ot[g].gender||"male",z=R??4006676,W=we(ee(C.skin!=null?C.skin:15250592,.06)),ne=we(ee(z,.08)),he=()=>(Math.random()-.5)*.08,be=()=>(Math.random()-.5)*.04,Pe=new Bn({color:k,metalness:Math.max(0,.25+be()),roughness:Math.max(.3,Math.min(1,.5+he()))});Pe.bumpMap=Q,Pe.bumpScale=.1;let re=new Bn({color:H,metalness:Math.max(0,.2+be()),roughness:Math.max(.3,Math.min(1,.55+he()))});re.bumpMap=Q,re.bumpScale=.1;let Be=new Bn({color:k,metalness:Math.max(0,.25+be()),roughness:Math.max(.3,Math.min(1,.5+he()))});Be.bumpMap=Q,Be.bumpScale=.1;let Ct=new Bn({color:W,metalness:.1,roughness:Math.max(.5,Math.min(1,.7+he()))});Ct.bumpMap=Q,Ct.bumpScale=.05;let Lt=new jn,At=.28,qt=.08,ln=.08,tn=new ct(new Pn(qt,At,ln),re);tn.position.set(-.06,At/2,0),tn.castShadow=!0,Lt.add(tn);let pn=new ct(new Pn(qt,At,ln),re);pn.position.set(.06,At/2,0),pn.castShadow=!0,Lt.add(pn);let Yt=.28,Vt=.2,Dt=.12,Gt=new ct(new Pn(Vt,Yt,Dt),Pe);Gt.position.set(0,At+Yt/2,0),Gt.castShadow=!0,Lt.add(Gt);let Tt=.06,un=.22,mn=.06,gn=new ct(new Pn(Tt,un,mn),Be);gn.position.set(-(Vt/2+Tt/2),At+Yt-.08,0),gn.castShadow=!0,Lt.add(gn);let Sn=new ct(new Pn(Tt,un,mn),Be);if(Sn.position.set(Vt/2+Tt/2,At+Yt-.08,0),Sn.castShadow=!0,Lt.add(Sn),C.cape!=null){let tt=Vt*1.35,Je=At+Yt*.15,ze=new wi(tt,Je),Xe=new Bn({color:we(ee(C.cape,.08)),metalness:.15,roughness:Math.max(.5,Math.min(1,.8+he())),side:cn});Xe.bumpMap=Q,Xe.bumpScale=.12;let _n=new ct(ze,Xe);_n.position.set(0,At+Je/2-.02,-Dt/2-.02),_n.rotation.y=Math.PI,_n.castShadow=!0,Lt.add(_n)}let oe=.1,ge=new ct(new cs(oe,12,10),Ct);ge.position.set(0,At+Yt+oe,0),ge.castShadow=!0,Lt.add(ge);let xe=new rn({color:1710638}),ue=new ct(new Pn(.032,.004,.004),xe);ue.position.set(-.032,.028,oe*.92),ge.add(ue);let ce=new ct(new Pn(.032,.004,.004),xe);ce.position.set(.032,.028,oe*.92),ge.add(ce);let _e=new rn({color:2957087}),Se=new ct(new Pn(.045,.012,.008),_e);Se.position.set(0,-.028,oe*.92),ge.add(Se);let Ee=new Bn({color:ne,metalness:.05,roughness:Math.max(.6,Math.min(1,.85+he()))});if(Ee.bumpMap=Q,Ee.bumpScale=.15,V==="female"){let tt=new ct(new cs(oe*.85,10,8,0,Math.PI*2,0,Math.PI*.45),Ee);tt.position.set(0,oe*.35,-oe*.2),tt.castShadow=!0,ge.add(tt);let Je=new ct(new Pn(oe*1.1,oe*2.2,oe*.5),Ee);Je.position.set(0,-oe*.6,-oe*.95),Je.castShadow=!0,ge.add(Je)}else{let tt=new ct(new cs(oe*.82,10,8,0,Math.PI*2,0,Math.PI*.35),Ee);tt.position.set(0,oe*.5,-oe*.15),tt.castShadow=!0,ge.add(tt)}return Lt.userData.leftLeg=tn,Lt.userData.rightLeg=pn,Lt.userData.leftArm=gn,Lt.userData.rightArm=Sn,Lt}function ke(_,g){let R=_.userData;if(!R.leftLeg)return;let C=g*Math.PI*2,k=.35,H=.28;R.leftLeg.rotation.x=Math.sin(C)*k,R.rightLeg.rotation.x=Math.sin(C+Math.PI)*k,R.leftArm.rotation.y=Math.sin(C+Math.PI)*H,R.rightArm.rotation.y=Math.sin(C)*H}function rt(_){let g=_.userData;g.leftLeg&&(g.leftLeg.rotation.x=0,g.rightLeg.rotation.x=0,g.leftArm.rotation.y=0,g.rightArm.rotation.y=0)}function ht(_){let g=He(_.player,_.class,_.hairColor);g.position.copy(pe(_.x,_.y)),g.castShadow=!0,g.userData.unitId=_.id;let R=.28,C=.28,k=.12,H=.18,V=.04,z=new wi(H,V),W=new rn({color:6037528,side:cn,depthTest:!0,depthWrite:!1}),ne=new ct(z,W);ne.position.set(0,R+C/2,k/2+.02),ne.rotation.x=-Math.PI/2,ne.rotation.z=Math.PI/4,ne.visible=_.maxHp>0&&_.hp<_.maxHp&&_.hp>0,g.add(ne),g.userData.slashMark=ne,n.add(g),$.set(_.id,g),Z(g,_.maxHp>0&&_.hp/_.maxHp<.35)}function Ve(_){let g=$.get(_.id);!g||!g.userData.slashMark||(g.userData.slashMark.visible=_.maxHp>0&&_.hp<_.maxHp&&_.hp>0)}let bt=.35;function Z(_,g){if(_)if(g){_.rotation.x=.35,_.scale.setScalar(.96);let R=_.userData;R&&R.leftArm&&R.rightArm&&(R.leftArm.rotation.y=.2,R.rightArm.rotation.y=.2),_.traverse(C=>{C.isMesh&&C.material&&C.material.color&&(C.userData.originalColor||(C.userData.originalColor=C.material.color.clone()),C.material.color.copy(C.userData.originalColor).multiplyScalar(.82))})}else{_.rotation.x=0,_.scale.setScalar(1);let R=_.userData;R&&R.leftArm&&R.rightArm&&(R.leftArm.rotation.y=0,R.rightArm.rotation.y=0),_.traverse(C=>{C.isMesh&&C.material&&C.userData.originalColor&&C.material.color.copy(C.userData.originalColor)})}}function Zt(_){if(_.level>=3)return;let g=_.maxHp>0?_.hp/_.maxHp:1;_.level+=1;let R=k=>Math.max(1,Math.ceil(k*1.1)),C=k=>Math.max(1,Math.ceil(k*1.1));_.maxHp=R(_.maxHp),_.maxMp=R(_.maxMp),_.hp=Math.max(1,Math.min(_.maxHp,Math.ceil(g*_.maxHp))),_.mp=Math.max(1,Math.min(_.maxMp,Math.ceil(g*_.maxMp))),_.str=C(_.str),_.agi=C(_.agi),_.vit=C(_.vit),_.dex=C(_.dex),_.luk=C(_.luk),_.int=C(_.int),_.range>2&&(_.range=C(_.range)),console.log("[LEVEL UP]",`${_.name} (${_.class}, P${_.player})`,`\u2192 Lv.${_.level}`,`| HP ${_.hp}/${_.maxHp} MP ${_.mp}/${_.maxMp} STR ${_.str} VIT ${_.vit}`),$e(_)}function $e(_){let g=$.get(_.id),R=_.level===3?"levelup level3":_.level===2?"levelup level2":"levelup";if(Du(_,R),!g)return;let C=performance.now(),k=0;function H(V){k++,k%2===0&&an();let z=V-C,W=Math.min(1,z/ye),ne=W<.5?1+.35*(W/.5):1+.35*(1-(W-.5)/.5);g.scale.setScalar(ne),W<1?requestAnimationFrame(H):g.scale.setScalar(1)}requestAnimationFrame(H)}let it=400,Ge=280,Ht=.45,pt=160,A=280,S=350,K=500,ye=600,me=!1,ve=new F,qe=new F,Ae=new F,Oe=new F;function nt(_=!1){let g=null;if(ot==="playing"&&We.length>0){let V=We[De];g=O.find(z=>z.id===V&&z.hp>0)}if(g||(g=O.find(V=>V.player===ae&&V.hp>0)),!g)return;let R=a.position.distanceTo(c);if(R<.1&&(R=o),h.copy(a.position).sub(c).normalize(),h.lengthSq()<.01&&h.copy(l).normalize(),Ae.copy(pe(g.x,g.y)),Oe.copy(Ae).add(h.clone().multiplyScalar(R)),_||me){c.copy(Ae),a.position.copy(Oe),a.lookAt(c),an();return}me=!0,ve.copy(c),qe.copy(a.position);let C=performance.now(),k=0;vn.shadowMap.enabled=!1;function H(V){k++,k%2===0&&an();let z=Math.min(1,(V-C)/it),W=z*(2-z);c.lerpVectors(ve,Ae,W),a.position.lerpVectors(qe,Oe,W),a.lookAt(c),z<1?requestAnimationFrame(H):(vn.shadowMap.enabled=!0,me=!1)}requestAnimationFrame(H)}let at=0,ae=1,ot="draft",et="pvp",lt="balanced",Ye=new Set(Za),Le=0,Ze=null,Rt=new Set,We=[],De=0,fe=null,D=new Map,Re=null;function Ce(_){if(!_||_.hp<=0)return;Re=_.id;let g=document.getElementById("unit-preview-card"),R=document.getElementById("unit-preview-image"),C=document.getElementById("unit-preview-name"),k=document.getElementById("unit-preview-meta"),H=document.getElementById("unit-preview-stats");g.classList.remove("player-1","player-2"),g.classList.add(_.player===1?"player-1":"player-2"),g.classList.toggle("level-2",_.level>=2&&_.level<3),g.classList.toggle("level-3",_.level>=3),R.src=Cr[_.class]||"",R.alt=_.name,C.textContent=_.name,k.textContent=`Lv.${_.level} ${_.class} \u2014 Player ${_.player}`,H.innerHTML=[["HP",`${_.hp}/${_.maxHp}`],["MP",`${_.mp}/${_.maxMp}`],["STR",Me(_,"str")],["AGI",Me(_,"agi")],["VIT",Me(_,"vit")],["DEX",Me(_,"dex")],["LUK",Me(_,"luk")],["INT",Me(_,"int")]].map(([z,W])=>`<span class="stat-label">${z}</span><span class="stat-val${z==="HP"?" stat-val-hp":""}">${W}</span>`).join("");let V=_.maxHp>0&&_.hp/_.maxHp<.3;g.classList.toggle("low-hp",V),g.style.display="block"}function je(){Re=null;let _=document.getElementById("unit-preview-card");_.classList.remove("low-hp","level-2","level-3"),_.style.display="none"}let Fe=!1,Et=!1,Pt=!1,It=null,vt=!1,gt=!1,Xt=!1,Kt=[],In=new jn;n.add(In);let Wn=[],hi=!0,ti=0,Ki=0;function an(){hi=!0,ti=performance.now()}let Ai=new jn;n.add(Ai);let Qs=[],Qa=yt,eo=.02,E=3368703,X=13382451;function j(_,g){let R=_/2,C=R-g,k=new Er;k.moveTo(-R,-R),k.lineTo(R,-R),k.lineTo(R,R),k.lineTo(-R,R),k.lineTo(-R,-R);let H=new Zs;return H.moveTo(-C,-C),H.lineTo(C,-C),H.lineTo(C,C),H.lineTo(-C,C),H.lineTo(-C,-C),k.holes.push(H),new Ha(k)}let te=j(Qa,eo);function q(_=null){let g=O.filter(R=>R.hp>0&&R.id!==_).map(R=>`${R.id},${R.x},${R.y},${R.player}`).sort().join("|");if(!(q._lastSig===g&&q._lastExclude===_)){for(q._lastSig=g,q._lastExclude=_,Qs.forEach(R=>R.dispose()),Qs.length=0;Ai.children.length;){let R=Ai.children[0];Ai.remove(R)}O.filter(R=>R.hp>0&&R.id!==_).forEach(R=>{let C=R.x,k=R.y,V=(Hn+e.height[k][C]*.35)/2+Hn/2,z=C*yt-ie+yt/2,W=k*yt-le+yt/2,ne=V+.02,he=R.player===1?E:X,be=new rn({color:he,side:cn}),Pe=new ct(te,be);Pe.rotation.x=-Math.PI/2,Pe.position.set(z,ne,W),Ai.add(Pe),Qs.push(be)}),an()}}let Ie=1.15,Ue=(()=>{let _=new ct(new $i(.1,.25,8),new rn({color:16768324}));return _.rotation.x=Math.PI,_.visible=!1,n.add(_),_})();function Qe(){if(ot!=="playing"||We.length===0||Xt){Ue.visible=!1,Ue.removeFromParent(),n.add(Ue);return}let _=We[De],g=O.find(C=>C.id===_);if(!g||g.hp<=0){Ue.visible=!1,Ue.removeFromParent(),n.add(Ue);return}let R=$.get(_);if(!R){Ue.visible=!1;return}Ue.removeFromParent(),R.add(Ue),Ue.position.set(0,Ie,0),Ue.visible=!0}function ut(_){let g=[[0,1],[0,-1],[1,0],[-1,0]],R=[];for(let[C,k]of g){let H=_.x+C,V=_.y+k;!Pr(e,H,V)||O.some(W=>W.id!==_.id&&W.x===H&&W.y===V&&W.hp>0)||R.push(Math.atan2(C,k))}return R}function xt(_){if(Kt.length===0)return _;if(Kt.length===1)return Kt[0];let g=Kt[0],R=Math.abs(ft(_-g));for(let C=1;C<Kt.length;C++){let k=Math.abs(ft(_-Kt[C]));k<R&&(R=k,g=Kt[C])}return g}function ft(_){for(;_>Math.PI;)_-=2*Math.PI;for(;_<-Math.PI;)_+=2*Math.PI;return _}let _t=1.2,Ut=(()=>{let _=new ct(new $i(.12,.35,8),new rn({color:4500223}));return _.rotation.x=-Math.PI/2,_.visible=!1,n.add(_),_})();function Ln(_,g){if(!Xt||We.length===0||Kt.length===0)return;let R=We[De],C=O.find(be=>be.id===R),k=$.get(R);if(!C||!k)return;Nr(_,g),Pi.setFromCamera(Ii,a);let H=Pi.intersectObjects(G.children,!0);if(H.length===0)return;let V=null;for(let be of H){let Pe=be.object;for(;Pe&&(Pe.userData.gx==null||Pe.userData.gy==null);)Pe=Pe.parent;if(Pe&&Pe.userData.gx!=null){V=be.point;break}}if(!V)return;let z=pe(C.x,C.y),W=V.x-z.x,ne=V.z-z.z;if(W*W+ne*ne<1e-6)return;let he=Math.atan2(W,ne);k.rotation.y=xt(he)}function hn(){if(We.length===0)return;let _=We[De],g=O.find(k=>k.id===_),R=$.get(_);if(!g||!R)return;Kt=[[0,1],[0,-1],[1,0],[-1,0]].map(([k,H])=>Math.atan2(k,H)),Ut.removeFromParent(),R.add(Ut),Ut.position.set(0,_t,0),Ut.rotation.x=-Math.PI/2,Ut.rotation.y=0,Ut.rotation.z=Math.PI,Ut.visible=!0,R.rotation.y=Kt[0]}function ni(){Ut.visible=!1,Ut.removeFromParent(),n.add(Ut)}let kt=(()=>{let _=$a,g=[1];for(let R=0;R<Math.floor((_-1)/2);R++)g.push(2,2,1,1);return _%2===1?g.push(2):(g.push(2,2),g.push(1)),g})();function st(){return kt[Le]}function ps(){let _=st(),g=0;for(let R=0;R<Le;R++)kt[R]===_&&g++;return g+1}function Bt(){ot="draft",Le=0,Ye=new Set(Za),Ze=null,Rt.clear(),en(),ms(),document.getElementById("turn-menu").style.display="none",document.getElementById("draft-panel").style.display="flex"}function pi(){document.getElementById("draft-panel").style.display="none";let _=document.getElementById("draft-placement-card");_&&(_.style.display="none",_.innerHTML=""),en();let g=document.getElementById("battle-start-overlay");g&&(g.classList.add("visible"),g.setAttribute("aria-hidden","false")),document.getElementById("draft-panel").style.display="none";let R=document.getElementById("draft-placement-card");for(R&&(R.style.display="none",R.innerHTML=""),ot="playing",at=0,We=O.slice().sort((H,V)=>V.agi!==H.agi?V.agi-H.agi:V.dex-H.dex).map(H=>H.id),De=0;De<We.length&&O.find(H=>H.id===We[De]).hp<=0;)De++;De>=We.length&&(De=0);let C=O.find(H=>H.id===We[De]);ae=C?C.player:1,vt=!1,gt=!1,fe=We[De],setTimeout(()=>{g&&(g.classList.remove("visible"),g.setAttribute("aria-hidden","true")),document.getElementById("turn-menu").style.display="flex",q(),dt(),Qe(),nt(!0)},4e3)}function ms(){let _=document.getElementById("draft-panel"),g=document.getElementById("draft-title"),R=document.getElementById("draft-classes"),C=document.getElementById("draft-message"),k=document.getElementById("turn-player"),H=document.getElementById("draft-placement-card");if(Ze){_.style.display="none",k.textContent=`Draft: Player ${st()} \u2014 place ${Ot[Ze].name}`;let z=st();H.style.display="flex",H.classList.remove("player-1","player-2"),H.classList.add("player-"+z),H.style.left=z===1?"24px":"",H.style.right=z===2?"24px":"";let W=[...O.filter(be=>be.player===z).map(be=>be.class),Ze],ne=(be,Pe)=>{let re=Ot[be];return`
        <div class="draft-class-card${Pe?" draft-class-card-current":""}">
          <img class="draft-class-card-image" src="${Cr[be]||""}" alt="${re.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="draft-class-card-body">
            <div class="draft-class-card-name">${re.name}</div>
            <div class="draft-class-card-stats">
              <span class="draft-stat-label">HP</span><span class="draft-stat-value">${re.hp}</span>
              <span class="draft-stat-label">MP</span><span class="draft-stat-value">${re.mp}</span>
              <span class="draft-stat-label">STR</span><span class="draft-stat-value">${re.str}</span>
              <span class="draft-stat-label">AGI</span><span class="draft-stat-value">${re.agi}</span>
              <span class="draft-stat-label">VIT</span><span class="draft-stat-value">${re.vit}</span>
              <span class="draft-stat-label">DEX</span><span class="draft-stat-value">${re.dex}</span>
              <span class="draft-stat-label">LUK</span><span class="draft-stat-value">${re.luk}</span>
              <span class="draft-stat-label">INT</span><span class="draft-stat-value">${re.int}</span>
              <span class="draft-stat-label">Range</span><span class="draft-stat-value">${re.range}</span>
            </div>
          </div>
        </div>
      `},he=3;if(W.length>he){H.classList.add("draft-placement-cols");let be=[];for(let re=0;re<W.length;re+=he)be.push(W.slice(re,re+he));let Pe=W.length-1;H.innerHTML=be.map((re,Be)=>{let Ct=Be===be.length-1,Lt=re.map((At,qt)=>{let tn=Be*he+qt===Pe;return ne(At,tn)}).join("");return`<div class="draft-placement-col${Ct?" draft-placement-col-current":""}">${Lt}</div>`}).join("")}else H.classList.remove("draft-placement-cols"),H.innerHTML=W.map((be,Pe)=>{let re=Pe===W.length-1;return ne(be,re)}).join("");et==="pvcpu"&&st()===2&&setTimeout(tr,500),et==="cvcpu"&&setTimeout(tr,500);return}H.style.display="none",H.innerHTML="",ot==="draft"&&(_.style.display="flex");let V=st();g.textContent=`Player ${V}: Pick a class (${ps()}/${$a})`,C.textContent="",R.innerHTML="",k.textContent=`Draft: Player ${V} \u2014 pick a class`,f_([...Za]).forEach(z=>{let W=Ye.has(z),ne=Ot[z],he=document.createElement("button");he.type="button",he.className="draft-class-card"+(W?"":" draft-class-card-selected"),he.disabled=!W,he.innerHTML=`
          <img class="draft-class-card-image" src="${Cr[z]||""}" alt="${ne.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="draft-class-card-body">
            <div class="draft-class-card-name">${ne.name}</div>
            <div class="draft-class-card-stats">
              <span class="draft-stat-label">HP</span><span class="draft-stat-value">${ne.hp}</span>
              <span class="draft-stat-label">MP</span><span class="draft-stat-value">${ne.mp}</span>
              <span class="draft-stat-label">STR</span><span class="draft-stat-value">${ne.str}</span>
              <span class="draft-stat-label">AGI</span><span class="draft-stat-value">${ne.agi}</span>
              <span class="draft-stat-label">VIT</span><span class="draft-stat-value">${ne.vit}</span>
              <span class="draft-stat-label">DEX</span><span class="draft-stat-value">${ne.dex}</span>
              <span class="draft-stat-label">LUK</span><span class="draft-stat-value">${ne.luk}</span>
              <span class="draft-stat-label">INT</span><span class="draft-stat-value">${ne.int}</span>
              <span class="draft-stat-label">Range</span><span class="draft-stat-value">${ne.range}</span>
            </div>
          </div>
        `,W&&he.addEventListener("click",()=>Ri(z)),R.appendChild(he)}),et==="pvcpu"&&st()===2&&setTimeout(tr,500),et==="cvcpu"&&setTimeout(tr,500)}function Ri(_){if(!Ye.has(_)||Ze)return;Ze=_;let g=st(),R=new Set(O.map(H=>H.y*e.w+H.x)),C=m_(e,g,R),k=uu(e,C);Rt=new Set(k.map(H=>H.gy*e.w+H.gx)),Eu(k),ms()}function gs(_,g){if(!Ze)return;let R=st(),C=g*e.w+_;if(!Rt.has(C))return;let k=Ot[Ze],H={id:se++,player:R,x:_,y:g,level:1,name:k.name,class:Ze,hairColor:(Ka[Ze]||Ka.knight).hair,hp:k.hp,maxHp:k.maxHp,mp:k.mp,maxMp:k.maxMp,str:k.str,agi:k.agi,vit:k.vit,dex:k.dex,luk:k.luk,int:k.int,range:k.range};O.push(H),ht(H);let V=$.get(H.id);V&&(V.rotation.y=H.player===1?Math.PI:0),Ye.delete(Ze),Ze=null,Rt.clear(),en();let z=document.getElementById("draft-placement-card");if(z&&(z.style.display="none",z.innerHTML=""),Le++,Le>=2*$a){pi();return}let W=st(),ne=ps(),he=document.getElementById("draft-panel"),be=document.getElementById("draft-title"),Pe=document.getElementById("draft-message"),re=document.getElementById("draft-classes"),Be=document.getElementById("turn-player");he&&be&&re&&Be&&(he.style.display="flex",be.textContent=`Player ${W}: Pick a class (${ne}/${$a})`,Pe&&(Pe.textContent="Get ready\u2026"),re.innerHTML="",Be.textContent=`Draft: Player ${W} \u2014 pick a class`),setTimeout(ms,1500)}function dt(){dt._pending||(dt._pending=!0,requestAnimationFrame(()=>{dt._pending=!1,mi()}))}function mi(){let _=dt._cache||(dt._cache={}),g=_.turnEl||(_.turnEl=document.getElementById("turn-player")),R=_.menuLabel||(_.menuLabel=document.getElementById("menu-label")),C=_.turnMenu||(_.turnMenu=document.getElementById("turn-menu")),k=_.unitInfo||(_.unitInfo=document.getElementById("unit-info")),H=_.unitNameEl||(_.unitNameEl=document.getElementById("unit-name")),V=_.unitLevelClassEl||(_.unitLevelClassEl=document.getElementById("unit-level-class")),z=_.unitStatsEl||(_.unitStatsEl=document.getElementById("unit-stats")),W=_.unitClassImageEl||(_.unitClassImageEl=document.getElementById("unit-class-image"));if(ot==="playing"&&O.forEach(re=>{if(re.hp<=0)return;let Be=$.get(re.id);Be&&Z(Be,re.maxHp>0&&re.hp/re.maxHp<bt)}),C.classList.remove("player-1","player-2"),C.classList.add(ae===1?"player-1":"player-2"),C.classList.toggle("level-2",!1),C.classList.toggle("level-3",!1),ot==="playing"&&We.length>0){let re=We[De];O.find(Ct=>Ct.id===re&&Ct.hp>0)&&(fe==null||!O.find(Ct=>Ct.id===fe&&Ct.hp>0))&&(fe=re)}if(fe!=null){let re=O.find(Be=>Be.id===fe);if(re&&re.hp>0){k.classList.remove("no-unit");let Be=re.maxHp>0&&re.hp/re.maxHp<.25;C.classList.toggle("low-hp",Be),C.classList.toggle("level-2",re.level>=2&&re.level<3),C.classList.toggle("level-3",re.level>=3),H.textContent=re.name,V.textContent=`Lv.${re.level} ${re.class}`,W.src=Cr[re.class]||"",W.alt=re.name,z.innerHTML=[["HP",`${re.hp}/${re.maxHp}`],["MP",`${re.mp}/${re.maxMp}`],["STR",Me(re,"str")],["AGI",Me(re,"agi")],["VIT",Me(re,"vit")],["DEX",Me(re,"dex")],["LUK",Me(re,"luk")],["INT",Me(re,"int")]].map(([Ct,Lt])=>`<span>${Ct}</span><span class="stat-val${Ct==="HP"?" stat-val-hp":""}">${Lt}</span>`).join("")}else C.classList.remove("low-hp","level-2","level-3"),k.classList.add("no-unit"),H.textContent="\u2014 Select a unit \u2014",V.textContent="",z.textContent="",W.src="",W.alt=""}else C.classList.remove("low-hp","level-2","level-3"),k.classList.add("no-unit"),H.textContent="\u2014 Select a unit \u2014",V.textContent="",z.textContent="",W.src="",W.alt="";if(fe!=null)g.textContent=`Player ${ae} \u2014 Unit ${H.innerHTML} active`;else{let re=We.length?O.find(Be=>Be.id===We[De]):null;g.textContent=re?`${re.name} (Player ${ae})`:`Player ${ae}`}R.textContent=`Player ${ae}`;let ne=_.btnAttack||(_.btnAttack=document.getElementById("btn-attack")),he=_.btnSkill||(_.btnSkill=document.getElementById("btn-skill")),be=_.btnSpell||(_.btnSpell=document.getElementById("btn-spell")),Pe=_.btnEnd||(_.btnEnd=document.getElementById("btn-end"));if(et==="cvcpu"&&ot==="playing")ne.disabled=!0,he.disabled=!0,be.disabled=!0,Pe&&(Pe.disabled=!0),g.textContent=`Player ${ae} (CPU)`;else if(Xt)ne.disabled=!0,he.disabled=!0,be.disabled=!0,g.textContent="Click on map to choose facing direction";else if(ot==="playing"){ne.disabled=gt;let re=We.length?We[De]:null,Be=re?O.find(At=>At.id===re&&At.hp>0):null,Ct=et!=="cvcpu"&&(et!=="pvcpu"||ae===1),Lt=Ct&&Be&&!gt?Dr(Be):[];he.disabled=gt||!Ct||Lt.length===0,be.disabled=!1,Pe&&(Pe.disabled=!1)}if(ot==="playing"){let re=Math.min(at+1,ds);g.textContent=(g.textContent||"")+` \u2014 Turn ${re}/${ds}`;let Be=_.turnsLeftEl||(_.turnsLeftEl=document.getElementById("turns-left")),Ct=_.turnsLeftValueEl||(_.turnsLeftValueEl=document.getElementById("turns-left-value"));if(Be&&Ct){Be.style.display="";let Lt=Math.max(0,ds-at);Ct.textContent=String(Lt),Be.classList.toggle("turns-left-low",Lt<=10)}}else{let re=_.turnsLeftEl||(_.turnsLeftEl=document.getElementById("turns-left"));re&&(re.style.display="none")}ot==="playing"&&io(ae)&&!Fe&&setTimeout(on,700)}function zt(){an(),je(),Et=!1,Pt=!1,It=null,Xt=!1,Kt=[],ni(),en();let _=We.length;if(_===0)return;let g=We[De],R=O.find(V=>V.id===g);if(R&&R.tempDebuff&&R.tempDebuff.duration--,R&&R.tempDebuff&&R.tempDebuff.duration<=0&&(R.tempDebuff=void 0),R&&R.tempBuff&&R.tempBuff.duration--,R&&R.tempBuff&&R.tempBuff.duration<=0&&(R.tempBuff=void 0),R&&R.hp>0){let V=Math.ceil(Me(R,"int")*.15);R.mp=Math.min(R.maxMp,R.mp+V)}if(R&&R.hp>0){let V=R.x,z=R.y;e.type[z][V]===Ke.CENTER&&R.level===1&&Zt(R);let W=R.player===1?Ke.BASE_TOP:Ke.BASE_BOTTOM;e.type[z][V]===W&&R.level===2&&Zt(R)}if(at++,at>=ds){Uu();return}let C=(De+1)%_,k=0;for(;k<_;){let V=We[C],z=O.find(W=>W.id===V);if(z&&z.hp>0)break;C=(C+1)%_,k++}De=C;let H=O.find(V=>V.id===We[De]);ae=H?H.player:1,vt=!1,gt=!1,fe=We[De],dt(),Qe(),nt()}document.getElementById("btn-attack").addEventListener("click",()=>{if(Fe||gt||ot!=="playing"||We.length===0)return;je();let _=We[De],g=O.find(k=>k.id===_);if(!g||g.hp<=0)return;let R=g.range!=null?g.range:1;fe=_,Et=!0;let C=du(e,g.x,g.y,R);D=new Map,C.forEach((k,H)=>{let V=H%e.w,z=Math.floor(H/e.w);fs(e,g.x,g.y,V,z)&&D.set(H,k)}),Tu(D),dt()}),document.getElementById("btn-skill").addEventListener("click",_=>{if(_.preventDefault(),_.stopPropagation(),Fe||gt)return;let g=We[De],R=g?O.find(z=>z.id===g&&z.hp>0):null;if(!R||R.player!==ae)return;let C=document.getElementById("skill-list-overlay"),k=document.getElementById("btn-skill");if(!k)return;if(C&&C.style.display==="block"){C.style.display="none";return}let H=Dr(R),V=k.getBoundingClientRect();C||(C=document.createElement("div"),C.id="skill-list-overlay",C.className="skill-list-overlay",C.setAttribute("aria-hidden","true"),document.body.appendChild(C)),C.style.left=`${V.left}px`,C.style.top=`${V.top-4}px`,C.style.transform="translateY(-100%)",C.style.right="auto",C.style.bottom="auto",C.style.display="none",H.length===0?C.innerHTML='<div class="skill-option" style="cursor:default;color:#8b949e;">No skills available</div>':(C.innerHTML=H.map((z,W)=>`<button type="button" class="skill-option" data-skill-index="${W}" ${z.disabled?"disabled":""}>
          <span class="skill-name">${z.name}</span> <span class="skill-meta">${z.cost} MP \xB7 Lv.${z.level}</span><br/>
          <span class="skill-meta">${z.description}</span>
        </button>`).join(""),C.querySelectorAll(".skill-option").forEach((z,W)=>{z.addEventListener("click",ne=>{ne.preventDefault(),ne.stopPropagation();let he=H[W];if(It=he,C.style.display="none",C.setAttribute("aria-hidden","true"),he.target==="self"){if(R.mp<he.cost)return;R.mp-=he.cost,gt=!0,Lr(R,R,he,{showFloatingCombatText:Xn,handleUnitDeath:Mn,updateUnitSlashVisibility:Ve,updateTurnUI:dt},()=>{en(),Pt=!1,It=null,ys=new Set,vt?zt():dt()}),dt();return}if(he.target==="ally"&&Ur(R,he,O).filter(re=>re.targetUnit&&re.targetUnit.id!==R.id).length===0&&R.mp>=he.cost){R.mp-=he.cost,gt=!0,Lr(R,R,he,{showFloatingCombatText:Xn,handleUnitDeath:Mn,updateUnitSlashVisibility:Ve,updateTurnUI:dt},()=>{en(),Pt=!1,It=null,ys=new Set,vt?zt():dt()}),dt();return}Pt=!0,Et=!1,bu(R,he),dt()})})),requestAnimationFrame(()=>{C.style.display="block",C.style.visibility="visible",C.setAttribute("aria-hidden","false")})}),document.addEventListener("click",_=>{let g=document.getElementById("skill-list-overlay"),R=document.getElementById("btn-skill"),C=document.querySelector(".skill-wrap");!g||g.style.display!=="block"||C&&C.contains(_.target)||g.contains(_.target)||(g.style.display="none",g.setAttribute("aria-hidden","true"))}),document.getElementById("btn-spell").addEventListener("click",()=>{}),document.getElementById("btn-end").addEventListener("click",()=>{if(Fe||Xt||ot!=="playing"||We.length===0)return;let _=We[De],g=O.find(C=>C.id===_);if(!g||g.hp<=0)return;Xt=!0,fe=null,Et=!1,D=new Map,en(),hn(),Qe();let R=document.getElementById("turn-player");R.textContent="Click on map to choose facing direction",dt()}),c.set(0,8,0),a.position.copy(c).add(l),a.lookAt(c);let Tn=document.getElementById("mode-select-overlay"),_s=document.getElementById("mode-pvp"),Ir=document.getElementById("mode-pvcpu"),xs=document.getElementById("mode-cvcpu"),er=document.getElementById("ai-draft-preference"),Xl=document.getElementById("mode-select-ai-draft");Xl&&(Xl.style.display=cu?"":"none"),er&&(u_.forEach(_=>{let g=document.createElement("option");g.value=_.value,g.textContent=_.label,er.appendChild(g)}),er.value=lt,er.addEventListener("change",()=>{lt=er.value}));let Ci=new Audio;Ci.loop=!0,Ci.volume=.3,Ci.preload="auto";let to=window.location.href.replace(/[^/]*$/,""),ql=typeof window.TACTICS_BGM_URL<"u"?window.TACTICS_BGM_URL:to+(to.includes("/src/")?"../assets/music/tavern.mp3":"assets/music/tavern.mp3");Ci.src=ql,Ci.addEventListener("error",()=>{let _=to+"assets/music/tavern.mp3";_!==ql&&(Ci.src=_)});function no(){Ci.paused&&Ci.play().catch(()=>{})}Tn&&_s&&Ir?(_s.addEventListener("click",()=>{no(),et="pvp",Tn.classList.add("hidden"),Bt()}),Ir.addEventListener("click",()=>{no(),et="pvcpu",Tn.classList.add("hidden"),Bt()}),xs&&(cu?xs.addEventListener("click",()=>{no(),et="cvcpu",Tn.classList.add("hidden"),Bt()}):xs.style.display="none")):Bt();function io(_){return et==="pvcpu"&&_===2||et==="cvcpu"}function _u(){let _=Za.filter(H=>Ye.has(H));if(_.length===0)return null;let g=lt||"balanced";if(g==="random")return _[Math.floor(Math.random()*_.length)];if(g==="custom")return d_.filter(V=>Ye.has(V))[0]??_[0]??null;let R=["hp","maxHp","mp","str","agi","vit","dex","luk","int"];function C(H){let V=Ot[H];if(!V)return 1/0;let z=R.map(ne=>V[ne]??0),W=z.reduce((ne,he)=>ne+he,0)/z.length;return z.reduce((ne,he)=>ne+(he-W)**2,0)/z.length}return g==="tanky"?[..._].sort((V,z)=>{let W=Ot[V]?.hp??0,ne=Ot[z]?.hp??0;return ne!==W?ne-W:(Ot[z]?.vit??0)-(Ot[V]?.vit??0)})[0]??null:g==="aggressive"?[..._].sort((V,z)=>{let W=Ot[V]?.str??0,ne=Ot[z]?.str??0;return ne!==W?ne-W:(Ot[z]?.agi??0)-(Ot[V]?.agi??0)})[0]??null:g==="scout"?[..._].sort((V,z)=>{let W=Ot[V]?.agi??0,ne=Ot[z]?.agi??0;return ne!==W?ne-W:(Ot[z]?.dex??0)-(Ot[V]?.dex??0)})[0]??null:g==="ranged"?[..._].sort((V,z)=>{let W=Ot[V]?.range??0,ne=Ot[z]?.range??0;return ne!==W?ne-W:(Ot[z]?.dex??0)-(Ot[V]?.dex??0)})[0]??null:g==="caster"?[..._].sort((V,z)=>{let W=Ot[V]?.int??0,ne=Ot[z]?.int??0;return ne!==W?ne-W:(Ot[z]?.mp??0)-(Ot[V]?.mp??0)})[0]??null:[..._].sort((H,V)=>{let z=Ot[H]?.hp??0,W=Ot[V]?.hp??0;return W!==z?W-z:C(H)-C(V)})[0]??null}function tr(){if(ot!=="draft"||!io(st()))return;if(!Ze){let R=_u();R&&Ri(R),setTimeout(tr,500);return}let _=Array.from(Rt).map(R=>({gx:R%e.w,gy:Math.floor(R/e.w)})),g=uu(e,_);if(g.length>0){let{gx:R,gy:C}=g[0];gs(R,C)}}function Yl(){let _=[];for(let g=0;g<e.h;g++)for(let R=0;R<e.w;R++)e.type[g][R]===Ke.CENTER&&_.push({gx:R,gy:g});return _}function xu(_){let g=[],R=_===1?Ke.BASE_TOP:Ke.BASE_BOTTOM;for(let C=0;C<e.h;C++)for(let k=0;k<e.w;k++)e.type[C][k]===R&&g.push({gx:k,gy:C});return g}function $n(_,g,R,C){return Math.abs(_-R)+Math.abs(g-C)}function yu(_){let g=_.range!=null?_.range:1,R=[];for(let C of O){if(C.hp<=0||C.player===_.player)continue;let k=$n(_.x,_.y,C.x,C.y);k<=g&&k>0&&fs(e,_.x,_.y,C.x,C.y)&&R.push({target:C,dist:k})}return R}function vu(_){let g=O.filter(R=>R.hp>0&&R.player===_.player&&R.id!==_.id);for(let R of g){let C=O.filter(k=>k.hp>0&&k.player!==_.player);for(let k of C){let H=k.range!=null?k.range:1,V=$n(k.x,k.y,R.x,R.y);if(V<=H&&V>0&&fs(e,k.x,k.y,R.x,R.y))return!0}}return!1}function Jt(_,g,R,C){let k=_.x,H=_.y,V=Zi(e,_.x,_.y,g,R,O,_);if(!V||V.length<=1){C&&C();return}fe=null,en(),Fe=!0,q(_.id),an();let z=$.get(_.id),W=1;function ne(){if(W>=V.length){_.x=V[V.length-1].x,_.y=V[V.length-1].y,Fe=!1,rt(z),q(),D=new Map,vt=!0,C&&C();return}let he=V[W-1],be=V[W],Pe=pe(he.x,he.y).clone(),re=pe(be.x,be.y).clone(),Be=re.x-Pe.x,Ct=re.z-Pe.z;Be*Be+Ct*Ct>1e-6&&(z.rotation.y=Math.atan2(Be,Ct));let Lt=performance.now(),At=0;function qt(ln){At++,At%2===0&&an();let tn=Math.min(1,(ln-Lt)/lu),Yt=(Vt=>Vt*Vt*(3-2*Vt))(tn);z.position.lerpVectors(Pe,re,Yt),ke(z,Yt),tn<1?requestAnimationFrame(qt):(W++,ne())}requestAnimationFrame(qt)}ne()}function $l(_,g){let R=Me(g,"agi")*.7+Me(g,"luk")*.3,k=Math.random()*Math.max(.001,R)<=Me(_,"dex"),H=0;if(k){let Dt=Me(_,"str")*.7+Me(_,"dex")*.2+Me(_,"int")*.1-(Me(g,"vit")*.3+Me(g,"luk")*.2);H=Math.max(1,Math.floor(Dt))}gt=!0,fe=null,Et=!1,en(),console.log("[ATTACK]",`${_.name} (${_.class}, P${_.player})`,"\u2192",`${g.name} (${g.class}, P${g.player})`,k?`${H} dmg`:"MISS",`| ${g.name} HP ${g.hp} \u2192 ${Math.max(0,g.hp-H)}/${g.maxHp}`);let V=$.get(_.id);if(!V||!V.userData.rightArm){k?(g.hp=Math.max(0,g.hp-H),Xn(g.x,g.y,String(H),!1),Ve(g),g.hp<=0&&Mn(g)):Xn(g.x,g.y,"MISS",!0),setTimeout(vt?()=>zt():()=>dt(),400);return}let z=pe(_.x,_.y).clone(),W=pe(g.x,g.y).clone(),ne=z.clone().lerp(W,.35),he=W.x-z.x,be=W.z-z.z;if(he*he+be*be>1e-6&&(V.rotation.y=Math.atan2(he,be)),(_.range!=null?_.range:1)>2){let Ee=function(tt){Se++,Se%2===0&&an();let Je=tt-_e,ze=Math.min(1,Je/A);if(Tt.position.lerpVectors(ue,ce,ze),!oe&&ze>=1&&(oe=!0,n.remove(Tt),Dt.dispose(),Gt.dispose(),k?(g.hp=Math.max(0,g.hp-H),Xn(g.x,g.y,String(H),!1),g.hp<=0&&(xe=!0),$.get(g.id)?ge=tt:xe&&(Mn(g),xe=!1),Ve(g)):Xn(g.x,g.y,"MISS",!0)),ge!=null&&k){let Xe=$.get(g.id);if(Xe){let _n=Math.min(1,(tt-ge)/pt),Mt=1-_n;Li.copy(gn).multiplyScalar(Sn*Mt),Xe.position.copy(mn).add(Li),_n>=1&&(Xe.position.copy(mn),ge=null,xe&&(Mn(g),xe=!1))}else ge=null,xe&&(Mn(g),xe=!1)}if(ze<1)requestAnimationFrame(Ee);else{let Xe=ge==null;Xe&&xe&&(Mn(g),xe=!1),Xe?(vn.shadowMap.enabled=!0,setTimeout(vt?()=>zt():()=>dt(),400)):requestAnimationFrame(Ee)}},Dt=new Yi(.035,.035,.4,6),Gt=new rn({color:16763972}),Tt=new ct(Dt,Gt);Tt.position.copy(z),Tt.position.y+=.6;let un=W.clone().sub(z).normalize();Tt.quaternion.setFromUnitVectors(new F(0,1,0),un),n.add(Tt);let mn=pe(g.x,g.y).clone(),gn=W.clone().sub(z).normalize(),Sn=.4,oe=!1,ge=null,xe=!1,ue=Tt.position.clone(),ce=W.clone();ce.y+=.6;let _e=performance.now(),Se=0;vn.shadowMap.enabled=!1,requestAnimationFrame(Ee);return}let Be=!1,Ct=performance.now(),Lt=V.userData.rightArm,At=null,qt=!1,ln=pe(g.x,g.y).clone(),tn=W.clone().sub(z).normalize(),pn=.4,Yt=0;function Vt(Dt){Yt++,Yt%2===0&&an();let Gt=Dt-Ct,Tt=Math.min(1,Gt/Ge),un=Tt<=.4?Tt/.4:1,mn=Tt>.4?(Tt-.4)/.6:0;Tt<=.4?V.position.lerpVectors(z,ne,un):V.position.lerpVectors(ne,z,mn);let gn=Tt<=.35?Tt/.35:Tt<=.7?(.7-Tt)/.35:0;if(Lt.rotation.y=-gn*1.1,!Be&&Tt>=Ht&&(Be=!0,k?(g.hp=Math.max(0,g.hp-H),Xn(g.x,g.y,String(H),!1),g.hp<=0&&(qt=!0),Ve(g),$.get(g.id)?At=Dt:qt&&(Mn(g),qt=!1)):Xn(g.x,g.y,"MISS",!0)),At!=null&&k){let Sn=$.get(g.id);if(Sn){let oe=Math.min(1,(Dt-At)/pt),ge=1-oe;Li.copy(tn).multiplyScalar(pn*ge),Sn.position.copy(ln).add(Li),oe>=1&&(Sn.position.copy(ln),At=null,qt&&(Mn(g),qt=!1))}else At=null,qt&&(Mn(g),qt=!1)}if(Tt<1)requestAnimationFrame(Vt);else{V.position.copy(z),Lt.rotation.y=0;let Sn=At==null;Sn&&qt&&(Mn(g),qt=!1),Sn?(vn.shadowMap.enabled=!0,setTimeout(vt?()=>zt():()=>dt(),400)):requestAnimationFrame(Vt)}}vn.shadowMap.enabled=!1,requestAnimationFrame(Vt)}function Mu(_,g){let R=pe(_,g);R.y+=.4;let C=new cs(.1,12,12),k=new rn({color:8930559,transparent:!0,opacity:.9}),H=new ct(C,k);H.position.copy(R),n.add(H);let V=performance.now(),z=0;function W(ne){z++,z%2===0&&an();let he=ne-V,be=Math.min(1,he/S),Pe=be*(2-be);H.scale.setScalar(Pe*4.5),k.opacity=.9*(1-be),be<1?requestAnimationFrame(W):(n.remove(H),C.dispose(),k.dispose())}requestAnimationFrame(W)}function Lr(_,g,R,C,k){if(R.target==="enemy"&&g==null){C.updateTurnUI&&C.updateTurnUI(),k&&k();return}let V=(R.range??0)>2&&g!=null&&(g.x!==_.x||g.y!==_.y),z=!V&&g!=null&&(g.x!==_.x||g.y!==_.y);if(!V&&!z){Ja(R.effectKey,_,g,C),C.updateTurnUI&&C.updateTurnUI(),k&&k();return}if(z){let tt=function(Je){Ee++,Ee%2===0&&an();let ze=Je-Se,Xe=Math.min(1,ze/Ge),_n=Xe<=.4?Xe/.4:1,Mt=Xe>.4?(Xe-.4)/.6:0;Xe<=.4?Dt.position.lerpVectors(Gt,un,_n):Dt.position.lerpVectors(un,Gt,Mt);let Nt=Xe<=.35?Xe/.35:Xe<=.7?(.7-Xe)/.35:0;if(xe.rotation.y=-Nt*1.1,!ue&&Xe>=Ht&&(ue=!0,Ja(R.effectKey,_,g,C),g.hp<=0&&(_e=!0),C.updateUnitSlashVisibility&&C.updateUnitSlashVisibility(g),$.get(g.id)?ce=Je:_e&&(Mn(g),_e=!1)),ce!=null){let nn=$.get(g.id);if(nn){let sn=Math.min(1,(Je-ce)/pt),Dn=1-sn;Li.copy(oe).multiplyScalar(ge*Dn),nn.position.copy(Sn).add(Li),sn>=1&&(nn.position.copy(Sn),ce=null,_e&&(Mn(g),_e=!1))}else ce=null,_e&&(Mn(g),_e=!1)}Xe<1?requestAnimationFrame(tt):(Dt.position.copy(Gt),xe.rotation.y=0,ce==null&&_e&&(Mn(g),_e=!1),ce==null?(vn.shadowMap.enabled=!0,C.updateTurnUI&&C.updateTurnUI(),k&&k()):requestAnimationFrame(tt))},Dt=$.get(_.id);if(!Dt||!Dt.userData.rightArm){Ja(R.effectKey,_,g,C),C.updateUnitSlashVisibility&&C.updateUnitSlashVisibility(g),C.updateTurnUI&&C.updateTurnUI(),k&&k();return}let Gt=pe(_.x,_.y).clone(),Tt=pe(g.x,g.y).clone(),un=Gt.clone().lerp(Tt,.35),mn=Tt.x-Gt.x,gn=Tt.z-Gt.z;mn*mn+gn*gn>1e-6&&(Dt.rotation.y=Math.atan2(mn,gn));let Sn=pe(g.x,g.y).clone(),oe=Tt.clone().sub(Gt).normalize(),ge=.4,xe=Dt.userData.rightArm,ue=!1,ce=null,_e=!1,Se=performance.now(),Ee=0;vn.shadowMap.enabled=!1,requestAnimationFrame(tt);return}let W=pe(_.x,_.y).clone(),ne=pe(g.x,g.y).clone(),he=new Yi(.035,.035,.4,6),be=new rn({color:16763972}),Pe=new ct(he,be);Pe.position.copy(W),Pe.position.y+=.6;let re=ne.clone().sub(W).normalize();Pe.quaternion.setFromUnitVectors(new F(0,1,0),re),n.add(Pe);let Be=Pe.position.clone(),Ct=ne.clone();Ct.y+=.6;let Lt=performance.now(),At=pe(g.x,g.y).clone(),qt=ne.clone().sub(W).normalize(),ln=.4,tn=!1,pn=null,Yt=0;function Vt(Dt){Yt++,Yt%2===0&&an();let Gt=Dt-Lt,Tt=Math.min(1,Gt/A);if(Pe.position.lerpVectors(Be,Ct,Tt),!tn&&Tt>=1&&(tn=!0,n.remove(Pe),he.dispose(),be.dispose(),R.type==="spell"&&Mu(g.x,g.y),Ja(R.effectKey,_,g,C),$.get(g.id)&&g.hp>0&&(pn=Dt),C.updateUnitSlashVisibility&&C.updateUnitSlashVisibility(g)),pn!=null){let un=$.get(g.id);if(un){let mn=Math.min(1,(Dt-pn)/pt),gn=1-mn;Li.copy(qt).multiplyScalar(ln*gn),un.position.copy(At).add(Li),mn>=1&&(un.position.copy(At),pn=null)}else pn=null}Tt<1?requestAnimationFrame(Vt):pn==null?(vn.shadowMap.enabled=!0,C.updateTurnUI&&C.updateTurnUI(),k&&k()):requestAnimationFrame(Vt)}vn.shadowMap.enabled=!1,requestAnimationFrame(Vt)}function on(){if(ot!=="playing"||!io(ae)||Fe||We.length===0)return;let _=We[De],g=O.find(oe=>oe.id===_);if(!g||g.hp<=0)return;let R=ja(e,g.x,g.y,Me(g,"agi"),O,g),C=[];R.forEach((oe,ge)=>{if(oe===0)return;let xe=ge%e.w,ue=Math.floor(ge/e.w);O.some(_e=>_e.id!==g.id&&_e.x===xe&&_e.y===ue&&_e.hp>0)||C.push({gx:xe,gy:ue,dist:oe})});let k=yu(g),H=Yl(),V=xu(g.player),z=.25,W=.03,ne=g.maxHp>0&&g.hp/g.maxHp<z,he=g.maxHp>0&&g.hp/g.maxHp<W,be=g.level===2,Pe=oe=>O.some(ge=>ge.hp>0&&ge.x===oe.gx&&ge.y===oe.gy&&ge.id!==g.id),re=H.filter(oe=>!Pe(oe)),Be=V.filter(oe=>!Pe(oe)),Ct=Dr(g).filter(oe=>!oe.disabled&&g.mp>=oe.cost&&oe.target==="enemy"),Lt=Ct.length>0?Math.max(...Ct.map(oe=>oe.range||0)):0,At=Math.max(g.range!=null?g.range:1,Lt);function qt(oe,ge){if(ge.length===0)return null;let xe=null,ue=1/0;for(let ce of oe){let _e=0;for(let Se of ge)_e+=$n(ce.gx,ce.gy,Se.gx,Se.gy);_e<ue&&(ue=_e,xe=ce)}return xe}function ln(oe,ge){if(ge.length===0||oe.length===0)return null;let xe=null,ue=1/0;for(let ce of oe){let _e=Math.min(...ge.map(Se=>$n(ce.gx,ce.gy,Se.gx,Se.gy)));_e<ue&&(ue=_e,xe=ce)}return xe}function tn(oe,ge){let xe=At,ue=[];for(let ce of O){if(ce.hp<=0||ce.player===g.player)continue;let _e=$n(oe,ge,ce.x,ce.y);_e<=xe&&_e>0&&fs(e,oe,ge,ce.x,ce.y)&&ue.push({target:ce,dist:_e})}return ue}let pn=new Set(C.map(oe=>oe.gy*e.w+oe.gx));function Yt(oe,ge){if(!oe||oe.length<=1)return null;let xe=Math.min(ge,oe.length-1);for(let ue=xe;ue>=1;ue--){let ce=oe[ue],_e=ce.y*e.w+ce.x;if(pn.has(_e))return{gx:ce.x,gy:ce.y}}return null}function Vt(oe,ge){if(!oe||oe.length<=1)return null;let xe=Math.min(ge,oe.length-1);for(let ue=xe;ue>=1;ue--){let ce=oe[ue];if(!O.some(Se=>Se.id!==g.id&&Se.hp>0&&Se.x===ce.x&&Se.y===ce.y))return{gx:ce.x,gy:ce.y}}return null}function Dt(oe){let ge=null,xe=null,ue=1/0;for(let ce of oe){let _e=Zi(e,g.x,g.y,ce.gx,ce.gy,O,g);_e&&_e.length>1&&_e.length<ue&&(ue=_e.length,ge=_e,xe=ce)}return ge&&xe?{path:ge,target:xe}:null}function Gt(oe){let ge=oe??C;if(ge.length===0)return null;let xe=O.filter(_e=>_e.hp>0&&_e.player!==g.player);if(xe.length===0)return ge[0];let ue=null,ce=-1;for(let _e of ge){let Se=Math.min(...xe.map(Ee=>$n(_e.gx,_e.gy,Ee.x,Ee.y)));Se>ce&&(ce=Se,ue=_e)}return ue}function Tt(oe){let ge=oe??C;if(ge.length===0)return null;let xe=O.filter(Ee=>Ee.hp>0&&Ee.player!==g.player),ue=O.filter(Ee=>Ee.hp>0&&Ee.player===g.player&&Ee.id!==g.id);if(xe.length===0)return ge[0];let ce=g.maxHp>0&&g.hp/g.maxHp>=.6,_e=null,Se=-1/0;for(let Ee of ge){let tt=Math.min(...xe.map(Xe=>$n(Ee.gx,Ee.gy,Xe.x,Xe.y))),Je=ue.length>0?Math.min(...ue.map(Xe=>$n(Ee.gx,Ee.gy,Xe.x,Xe.y))):999,ze;ce?ze=Je<tt?tt-1e3:tt:ze=tt-Je,ze>Se&&(Se=ze,_e=Ee)}return _e}function un(){let oe=At,ge=O.filter(ce=>ce.hp>0&&ce.player!==g.player);if(ge.length===0)return null;let xe=null,ue=-1;for(let ce of C){let _e=Math.min(...ge.map(Ee=>$n(ce.gx,ce.gy,Ee.x,Ee.y)));ge.some(Ee=>$n(ce.gx,ce.gy,Ee.x,Ee.y)<=oe)&&_e>ue&&(ue=_e,xe=ce)}return xe}if(gt){if(vt){zt();return}if(ds-at<=20&&H.length>0){let Se=H.some(Ee=>Ee.gx===g.x&&Ee.gy===g.y);if(Se&&C.length>0){let Ee=new Set(H.map(ze=>ze.gy*e.w+ze.gx)),Je=C.filter(ze=>Ee.has(ze.gy*e.w+ze.gx)).filter(ze=>ze.gx!==g.x||ze.gy!==g.y);if(Je.length>0){let ze=Gt(Je);if(ze&&(ze.gx!==g.x||ze.gy!==g.y)){Jt(g,ze.gx,ze.gy,()=>setTimeout(zt,400));return}}zt();return}if(Se){zt();return}if(C.length>0){let Ee=re.length>0?re:H,tt=Dt(Ee),Je=tt?Vt(tt.path,Me(g,"agi")):null;if(Je&&(Je.gx!==g.x||Je.gy!==g.y)){Jt(g,Je.gx,Je.gy,()=>setTimeout(zt,400));return}let ze=ln(C,Ee);if(ze&&(ze.gx!==g.x||ze.gy!==g.y)){Jt(g,ze.gx,ze.gy,()=>setTimeout(zt,400));return}}zt();return}let ge=new Set(H.map(Se=>Se.gy*e.w+Se.gx)),xe=H.length>0?C.filter(Se=>ge.has(Se.gy*e.w+Se.gx)):null,ue=xe!=null&&xe.length>0?xe:C,ce=O.filter(Se=>Se.hp>0&&Se.player===g.player&&Se.id!==g.id),_e=null;if(ue.length>0&&ce.length>0&&(_e=Tt(ue),_e)){let Se=Zi(e,g.x,g.y,_e.gx,_e.gy,O,g),Ee=Se?Se.length-1:1/0;(!Se||Se.length<=1||Ee>Me(g,"agi"))&&(_e=Gt(ue))}if(!_e&&ue.length>0&&(_e=Gt(ue)),_e&&(_e.gx!==g.x||_e.gy!==g.y)){Jt(g,_e.gx,_e.gy,()=>setTimeout(zt,400));return}zt();return}if(he&&ds-at>20&&!vt&&C.length>0){let oe=null,ge=1/0;for(let ue of C){let _e=tn(ue.gx,ue.gy).filter(Se=>Se.target.maxHp>0&&Se.target.hp/Se.target.maxHp<z);if(_e.length>0){let Se=Math.min(..._e.map(Ee=>Ee.target.hp));Se<ge&&(ge=Se,oe=ue)}}if(oe){let ue=Zi(e,g.x,g.y,oe.gx,oe.gy,O,g),ce=ue?Yt(ue,Me(g,"agi")):null;if(ce&&(ce.gx!==g.x||ce.gy!==g.y)){Jt(g,ce.gx,ce.gy,()=>setTimeout(on,600));return}}let xe=Gt();if(xe&&(xe.gx!==g.x||xe.gy!==g.y)){Jt(g,xe.gx,xe.gy,()=>setTimeout(on,600));return}zt();return}if(!gt){let tt=function(Mt){return Ur(g,Mt,O).filter(nn=>nn.targetUnit!=null).map(nn=>nn.targetUnit)},oe=Dr(g),ge=g.maxHp>0?g.hp/g.maxHp:1,xe=.35,ue=new Set(["arcaneBolt","feast","pierce","snipe","berserk","drain","shuriken","chokuto","bite","execute"]),ce=new Set(["chakra"]),_e=new Set(["shieldWall","focus","bloodlust","iaido","howl","mantra"]),Se=new Set(["freeze","impale"]),Ee=new Set(["dominate","weaken","cripple","hex","blind"]),Je={showFloatingCombatText:Xn,handleUnitDeath:Mn,updateUnitSlashVisibility:Ve,updateTurnUI:dt},ze=null,Xe=null;for(let Mt of oe)if(!Mt.disabled&&ue.has(Mt.effectKey)){if(Mt.effectKey==="feast"&&g.hp/g.maxHp>.7||Mt.effectKey==="berserk"&&g.hp/g.maxHp<.25||Mt.effectKey==="shuriken"&&k.length>0)continue;let Nt=tt(Mt);if(Nt.length===0)continue;let nn=Nt.filter(di=>di.maxHp>0&&di.hp/di.maxHp<xe),sn=(di,Fr)=>Me(di,"int")-Me(Fr,"int")||di.hp-Fr.hp,Dn=(di,Fr)=>di.hp-Fr.hp,sr=nn.length>0?Mt.type==="spell"?nn.sort(sn)[0]:nn.sort(Dn)[0]:Mt.type==="spell"?Nt.sort(sn)[0]:Nt.sort(Dn)[0];ze=Mt,Xe=sr;break}if(!ze){for(let Nt of oe)if(!Nt.disabled&&ce.has(Nt.effectKey)){let sn=Ur(g,Nt,O).filter(Dn=>Dn.targetUnit&&Dn.targetUnit.maxHp>0&&Dn.targetUnit.hp/Dn.targetUnit.maxHp<.5);if(sn.length>0){let Dn=sn.sort((sr,di)=>sr.targetUnit.hp-di.targetUnit.hp)[0].targetUnit;ze=Nt,Xe=Dn;break}}}if(!ze&&(k.length>0||C.some(Nt=>tn(Nt.gx,Nt.gy).length>0))){for(let Nt of oe)if(!Nt.disabled&&!(Nt.effectKey==="bloodlust"&&g.hp/g.maxHp>.8)&&_e.has(Nt.effectKey)&&!(g.tempBuff&&g.tempBuff.duration>0)){ze=Nt,Xe=g;break}}let _n=k.some(Mt=>Mt.target.maxHp>0&&Mt.target.hp/Mt.target.maxHp<z);if(!ze&&!_n){for(let Mt of oe)if(!Mt.disabled&&Ee.has(Mt.effectKey)){let nn=tt(Mt).sort((sn,Dn)=>sn.hp-Dn.hp)[0];ze=Mt,Xe=nn;break}}if(!ze&&!_n){for(let Mt of oe)if(!Mt.disabled&&Se.has(Mt.effectKey)){let nn=tt(Mt).filter(sn=>!sn.tempDebuff||sn.tempDebuff.duration<=0);if(nn.length>0){let sn=nn.sort((Dn,sr)=>Dn.hp-sr.hp)[0];ze=Mt,Xe=sn;break}}}if(ze&&Xe){g.mp-=ze.cost,gt=!0;let Mt=ze.target==="self"?g:Xe;Lr(g,Mt,ze,Je,()=>setTimeout(on,600));return}}if(vu(g)&&k.length>0){k.sort((ge,xe)=>ge.target.hp-xe.target.hp||ge.dist-xe.dist);let oe=k[0].target;$l(g,oe);return}if(k.length>0){k.sort((ge,xe)=>ge.target.hp-xe.target.hp||ge.dist-xe.dist);let oe=k[0].target;$l(g,oe);return}let mn=ds-at;if(mn<=20&&H.length>0&&!vt&&C.length>0&&!H.some(ge=>ge.gx===g.x&&ge.gy===g.y)){let ge=re.length>0?re:H,xe=Dt(ge),ue=xe?xe.path:null,ce=(Xe,_n)=>Math.min(...H.map(Mt=>$n(Xe,_n,Mt.gx,Mt.gy))),_e=ce(g.x,g.y),Se=null,Ee=-1,tt=z;for(let Xe of C){if(ce(Xe.gx,Xe.gy)>_e||tn(Xe.gx,Xe.gy).filter(sn=>sn.target.maxHp>0&&sn.target.hp/sn.target.maxHp<tt).length===0)continue;let Nt=ue?ue.findIndex(sn=>sn.x===Xe.gx&&sn.y===Xe.gy):-1,nn=Nt>=0?Nt:0;nn>Ee&&(Ee=nn,Se=Xe)}if(Se&&(Se.gx!==g.x||Se.gy!==g.y)){Jt(g,Se.gx,Se.gy,()=>setTimeout(on,600));return}let Je=xe?Vt(xe.path,Me(g,"agi")):null;if(Je&&(Je.gx!==g.x||Je.gy!==g.y)){Jt(g,Je.gx,Je.gy,()=>setTimeout(on,600));return}let ze=ln(C,ge);if(ze&&(ze.gx!==g.x||ze.gy!==g.y)){Jt(g,ze.gx,ze.gy,()=>setTimeout(on,600));return}}if(ne&&C.length>0&&!vt){let oe=null,ge=1/0;for(let xe of C){let ce=tn(xe.gx,xe.gy).filter(_e=>_e.target.maxHp>0&&_e.target.hp/_e.target.maxHp<z);if(ce.length>0){let _e=Math.min(...ce.map(Se=>Se.target.hp));_e<ge&&(ge=_e,oe=xe)}}if(oe){let xe=Zi(e,g.x,g.y,oe.gx,oe.gy,O,g),ue=xe?Yt(xe,Me(g,"agi")):null;if(ue&&(ue.gx!==g.x||ue.gy!==g.y)){Jt(g,ue.gx,ue.gy,()=>setTimeout(on,600));return}}if(mn>20&&be&&V.length>0&&!V.some(ue=>ue.gx===g.x&&ue.gy===g.y)){let ue=Be.length>0?Be:V,ce=Dt(ue);if(ce!=null&&ce.path.length<=5){let Se=Vt(ce.path,Me(g,"agi"));if(Se&&(Se.gx!==g.x||Se.gy!==g.y)){Jt(g,Se.gx,Se.gy,()=>setTimeout(on,600));return}let Ee=ln(C,ue);if(Ee&&(Ee.gx!==g.x||Ee.gy!==g.y)){Jt(g,Ee.gx,Ee.gy,()=>setTimeout(on,600));return}}}if(mn>20){let xe=Gt();if(xe&&$n(g.x,g.y,xe.gx,xe.gy)>0){Jt(g,xe.gx,xe.gy,()=>setTimeout(on,600));return}zt();return}}if(mn<=10&&H.length>0&&!vt&&C.length>0&&!H.some(ge=>ge.gx===g.x&&ge.gy===g.y)){let ge=re.length>0?re:H,xe=Dt(ge),ue=xe?Vt(xe.path,Me(g,"agi")):null;if(ue&&(ue.gx!==g.x||ue.gy!==g.y)){Jt(g,ue.gx,ue.gy,()=>setTimeout(on,600));return}let ce=ln(C,ge);if(ce&&(ce.gx!==g.x||ce.gy!==g.y)){Jt(g,ce.gx,ce.gy,()=>setTimeout(on,600));return}}if(g.level===1&&H.length>0&&!vt&&!H.some(ge=>ge.gx===g.x&&ge.gy===g.y)&&C.length>0){let ge=re.length>0?re:H,xe=Dt(ge),ue=xe?Vt(xe.path,Me(g,"agi")):null;if(ue&&(ue.gx!==g.x||ue.gy!==g.y)){Jt(g,ue.gx,ue.gy,()=>setTimeout(on,600));return}let ce=ln(C,ge);if(ce&&(ce.gx!==g.x||ce.gy!==g.y)){Jt(g,ce.gx,ce.gy,()=>setTimeout(on,600));return}}if(be&&V.length>0&&!vt&&!V.some(ge=>ge.gx===g.x&&ge.gy===g.y)&&C.length>0){let xe=O.filter(Je=>Je.hp>0&&Je.player!==g.player).filter(Je=>Je.maxHp>0&&Je.hp/Je.maxHp<z),ue=null,ce=1/0;for(let Je of C){let Xe=tn(Je.gx,Je.gy).find(_n=>xe.some(Mt=>Mt.id===_n.target.id));Xe&&Xe.target.hp<ce&&(ce=Xe.target.hp,ue=Je)}if(ue){let Je=Zi(e,g.x,g.y,ue.gx,ue.gy,O,g),ze=Je?Yt(Je,Me(g,"agi")):null;if(ze&&(ze.gx!==g.x||ze.gy!==g.y)){Jt(g,ze.gx,ze.gy,()=>setTimeout(on,600));return}}let _e=Be.length>0?Be:V,Se=Dt(_e),Ee=Se?Vt(Se.path,Me(g,"agi")):null;if(Ee&&(Ee.gx!==g.x||Ee.gy!==g.y)){Jt(g,Ee.gx,Ee.gy,()=>setTimeout(on,600));return}let tt=ln(C,_e);if(tt&&(tt.gx!==g.x||tt.gy!==g.y)){Jt(g,tt.gx,tt.gy,()=>setTimeout(on,600));return}}let gn=O.filter(oe=>oe.hp>0&&oe.player!==g.player);if(g.level>=2&&At>=2&&gn.length>0&&!vt&&C.length>0){let oe=un();if(oe&&(oe.gx!==g.x||oe.gy!==g.y)){Jt(g,oe.gx,oe.gy,()=>setTimeout(on,600));return}}if(gn.length>0&&!vt&&C.length>0){let ge=function(ue,ce){let _e=null;for(let Se=-oe;Se<=oe;Se++)for(let Ee=-oe;Ee<=oe;Ee++){if(Ee===0&&Se===0||Math.abs(Ee)+Math.abs(Se)>oe)continue;let tt=ue.x+Ee,Je=ue.y+Se;if(tt<0||tt>=e.w||Je<0||Je>=e.h||!Pr(e,tt,Je)||!fs(e,tt,Je,ue.x,ue.y)||O.some(Nt=>Nt.hp>0&&Nt.x===tt&&Nt.y===Je))continue;let Xe=Zi(e,g.x,g.y,tt,Je,O,g),_n=Xe?Xe.length-1:1/0;Xe&&Xe.length>1&&(!ce||_n<=Me(g,"agi"))&&(!_e||Xe.length<_e.length)&&(_e=Xe)}return _e},oe=At,xe=[];for(let ue of gn){let ce=ge(ue,!0);ce&&xe.push({enemy:ue,path:ce})}if(xe.length>0){let ue=xe.filter(Ee=>Ee.enemy.maxHp>0&&Ee.enemy.hp/Ee.enemy.maxHp<z),ce=ue.length>0?ue:xe;ue.length>0?ce.sort((Ee,tt)=>Ee.enemy.hp-tt.enemy.hp||Ee.path.length-tt.path.length):ce.sort((Ee,tt)=>Ee.path.length-tt.path.length||Ee.enemy.hp-tt.enemy.hp);let _e=ce[0],Se=Yt(_e.path,Me(g,"agi"));if(Se&&(Se.gx!==g.x||Se.gy!==g.y)){Jt(g,Se.gx,Se.gy,()=>setTimeout(on,600));return}}if(xe.length===0){let ue=null,ce=1/0;for(let _e of gn){let Se=ge(_e,!1);Se&&Se.length<ce&&(ce=Se.length,ue=Se)}if(ue){let _e=Yt(ue,Me(g,"agi"));if(_e&&(_e.gx!==g.x||_e.gy!==g.y)){Jt(g,_e.gx,_e.gy,()=>setTimeout(on,600));return}}}}zt()}function en(){for(Wn.length=0;In.children.length;){let _=In.children[0];In.remove(_),_.geometry!==nr&&_.geometry!==ir&&_.geometry.dispose(),_.material.dispose()}an()}let ys=new Set;function Dr(_){return!_||!_.class?[]:hu[_.class]?hu[_.class].map(g=>({...g,disabled:g.disabled===!0||_.level<g.level||g.hpCost&&_.hp<g.hpCost||g.cost&&_.mp<g.cost})):[]}function Ur(_,g,R){let C=[],k=(V,z,W,ne)=>Math.abs(V-W)+Math.abs(z-ne),H=g.range||0;if(g.target==="self")return C.push({gx:_.x,gy:_.y,targetUnit:null}),C;for(let V of R)V.hp<=0||k(_.x,_.y,V.x,V.y)>H||H>2&&!fs(e,_.x,_.y,V.x,V.y)||(g.target==="enemy"&&V.player!==_.player&&C.push({gx:V.x,gy:V.y,targetUnit:V}),g.target==="ally"&&V.player===_.player&&C.push({gx:V.x,gy:V.y,targetUnit:V}));return C}function Su(_,g){let R=g.range||0;if(g.target==="self")return[{gx:_.x,gy:_.y}];let C=du(e,_.x,_.y,R),k=[];return C.forEach((H,V)=>{let z=V%e.w,W=V/e.w|0;R>2&&!fs(e,_.x,_.y,z,W)||k.push({gx:z,gy:W})}),k}function bu(_,g){let R=Ur(_,g,O);ys=new Set(R.map(k=>`${k.gx},${k.gy}`));let C=g.target==="self"?R:Su(_,g);en(),C.forEach(({gx:k,gy:H})=>{let z=(Hn+e.height[H][k]*.35)/2+Hn/2,W=k*yt-ie+yt/2,ne=H*yt-le+yt/2,he=z+.01,be=new rn({color:8926122,transparent:!0,opacity:.4,side:cn}),Pe=new ct(nr,be);Pe.rotation.x=-Math.PI/2,Pe.position.set(W,he,ne),In.add(Pe),Wn.push(be);let re=new rn({color:11167436,transparent:!0,opacity:.7,side:cn}),Be=new ct(ir,re);Be.rotation.x=-Math.PI/2,Be.position.set(W,he+.01,ne),Be.userData.gx=k,Be.userData.gy=H,In.add(Be),Wn.push(re)})}let Zl=.82,Kl=1.02,nr=new wi(Kl,Kl),ir=new wi(Zl,Zl);function Eu(_){en(),_.forEach(({gx:g,gy:R})=>{let k=(Hn+e.height[R][g]*.35)/2+Hn/2,H=g*yt-ie+yt/2,V=R*yt-le+yt/2,z=k+.01,W=new rn({color:2271812,transparent:!0,opacity:.4,side:cn}),ne=new ct(nr,W);ne.rotation.x=-Math.PI/2,ne.position.set(H,z,V),In.add(ne),Wn.push(W);let he=new rn({color:4508774,transparent:!0,opacity:.7,side:cn}),be=new ct(ir,he);be.rotation.x=-Math.PI/2,be.position.set(H,z+.01,V),be.userData.gx=g,be.userData.gy=R,In.add(be),Wn.push(he)}),an()}function so(_){en(),_.forEach((g,R)=>{if(g===0)return;let C=R%e.w,k=R/e.w|0,V=(Hn+e.height[k][C]*.35)/2+Hn/2,z=C*yt-ie+yt/2,W=k*yt-le+yt/2,ne=V+.01,he=new rn({color:3381759,transparent:!0,opacity:.35,side:cn}),be=new ct(nr,he);be.rotation.x=-Math.PI/2,be.position.set(z,ne,W),In.add(be),Wn.push(he);let Pe=new rn({color:6730751,transparent:!0,opacity:.65,side:cn}),re=new ct(ir,Pe);re.rotation.x=-Math.PI/2,re.position.set(z,ne+.01,W),In.add(re),Wn.push(Pe)}),an()}function Tu(_){en(),_.forEach((g,R)=>{if(g===0)return;let C=R%e.w,k=R/e.w|0,V=(Hn+e.height[k][C]*.35)/2+Hn/2,z=C*yt-ie+yt/2,W=k*yt-le+yt/2,ne=V+.01,he=new rn({color:10035746,transparent:!0,opacity:.4,side:cn}),be=new ct(nr,he);be.rotation.x=-Math.PI/2,be.position.set(z,ne,W),In.add(be),Wn.push(he);let Pe=new rn({color:13386820,transparent:!0,opacity:.7,side:cn}),re=new ct(ir,Pe);re.rotation.x=-Math.PI/2,re.position.set(z,ne+.01,W),In.add(re),Wn.push(Pe)}),an()}let Pi=new Ga,Ii=new Ne;function Nr(_,g){let R=t.getBoundingClientRect();return Ii.x=(_-R.left)/R.width*2-1,Ii.y=-((g-R.top)/R.height)*2+1,{x:Ii.x,y:Ii.y}}function wu(_,g){if(Fe)return;Ii.x=_,Ii.y=g,Pi.setFromCamera(Ii,a);let R=Pi.intersectObjects(G.children,!0);if(R.length===0)return;let C=null;for(let z of R){let W=z.object;for(;W&&(W.userData.gx==null||W.userData.gy==null);)W=W.parent;if(W&&W.userData.gx!=null){C=W;break}}if(!C||C.userData.gx==null)return;let k=C.userData.gx,H=C.userData.gy;if(ot==="draft"&&Ze){let z=H*e.w+k;Rt.has(z)&&gs(k,H);return}if(ot!=="playing"||et==="cvcpu")return;if(Pt&&It){let z=We[De],W=O.find(re=>re.id===z&&re.hp>0);if(W&&k===W.x&&H===W.y){Pt=!1,It=null,ys=new Set,en(),vt?D=new Map:(D=ja(e,W.x,W.y,Me(W,"agi"),O,W),so(D)),dt();return}let ne=`${k},${H}`;if(!ys.has(ne))return;if(!W||W.mp<It.cost){Pt=!1,It=null,en(),dt();return}let he=O.find(re=>re.x===k&&re.y===H&&re.hp>0);if(It.target==="enemy"&&(!he||he.player===W.player)||It.target==="ally"&&he&&he.player!==W.player||It.target==="self"&&(k!==W.x||H!==W.y)||It.target==="enemy"&&!he)return;W.mp-=It.cost,gt=!0;let be={showFloatingCombatText:Xn,handleUnitDeath:Mn,updateUnitSlashVisibility:Ve,updateTurnUI:dt},Pe=It.target==="self"?W:he||null;Lr(W,Pe,It,be,()=>{en(),Pt=!1,It=null,ys=new Set,vt?zt():dt()});return}if(Xt){let z=We[De],W=O.find(he=>he.id===z),ne=$.get(z);if(W&&ne&&Kt.length>0){let he=pe(W.x,W.y),be=pe(k,H),Pe=be.x-he.x,re=be.z-he.z,Be=Pe*Pe+re*re>1e-6?Math.atan2(Pe,re):ne.rotation.y;ne.rotation.y=xt(Be)}zt();return}if(fe!=null&&Et){let z=O.find(he=>he.id===fe);if(!z||z.player!==ae)return;let W=H*e.w+k,ne=O.find(he=>he.x===k&&he.y===H&&he.hp>0);if(ne&&ne.id===We[De]&&ne.player===ae){Et=!1,fe=ne.id,vt?(en(),D=new Map):(D=ja(e,ne.x,ne.y,Me(ne,"agi"),O,ne),so(D)),dt();return}if(!D.has(W)||D.get(W)===0)return;if(ne&&ne.player!==ae){let he=Me(ne,"agi")*.7+Me(ne,"luk")*.3;if(Math.random()*Math.max(.001,he)<=Me(z,"dex")){let re=Me(z,"str")*.7+Me(z,"dex")*.1+Me(z,"int")*.07-(Me(ne,"vit")*.3+Me(ne,"luk")*.1),Be=Math.max(1,Math.floor(re));ne.hp=Math.max(0,ne.hp-Be),Xn(ne.x,ne.y,String(Be),!1),ne.hp<=0&&Mn(ne),Ve(ne)}else Xn(ne.x,ne.y,"MISS",!0);gt=!0,fe=null,Et=!1,en(),vt?zt():dt()}return}let V=O.find(z=>z.x===k&&z.y===H&&z.hp>0);if(V){if(V.id===We[De]&&V.player===ae){je(),fe=V.id,Et=!1,vt?(en(),D=new Map):(D=ja(e,k,H,Me(V,"agi"),O,V),so(D)),dt();return}en(),D=new Map,Et=!1,Ce(V),dt();return}if(je(),fe!=null){let re=function(){if(Pe>=he.length){z.x=he[he.length-1].x,z.y=he[he.length-1].y,Fe=!1,rt(be),q(),D=new Map,vt=!0,gt?zt():dt();return}let Be=he[Pe-1],Ct=he[Pe],Lt=pe(Be.x,Be.y).clone(),At=pe(Ct.x,Ct.y).clone(),qt=At.x-Lt.x,ln=At.z-Lt.z;qt*qt+ln*ln>1e-6&&(be.rotation.y=Math.atan2(qt,ln));let tn=performance.now(),pn=0;function Yt(Vt){pn++,pn%2===0&&an();let Dt=Math.min(1,(Vt-tn)/lu),Tt=(un=>un*un*(3-2*un))(Dt);be.position.lerpVectors(Lt,At,Tt),ke(be,Tt),Dt<1?requestAnimationFrame(Yt):(Pe++,re())}requestAnimationFrame(Yt)};if(Et)return;let z=O.find(Be=>Be.id===fe);if(!z||z.player!==ae)return;let W=H*e.w+k;if(!D.has(W)||D.get(W)===0||O.some(Be=>Be.id!==z.id&&Be.x===k&&Be.y===H&&Be.hp>0)||Fe||vt)return;let he=Zi(e,z.x,z.y,k,H,O,z);if(!he||he.length<=1)return;fe=null,en(),Fe=!0,q(z.id);let be=$.get(z.id),Pe=1;re()}}function Jl(_){L.x=_.clientX,L.y=_.clientY,m=_.ctrlKey,p=Nr(_.clientX,_.clientY),t.style.cursor=(_.ctrlKey,"grabbing")}function ro(_){return _.touches&&_.touches.length>0?{clientX:_.touches[0].clientX,clientY:_.touches[0].clientY}:_.changedTouches&&_.changedTouches.length>0?{clientX:_.changedTouches[0].clientX,clientY:_.changedTouches[0].clientY}:{clientX:_.clientX,clientY:_.clientY}}function jl(_){if(!_||_.length<2)return 0;let g=_[0],R=_[1];return Math.hypot(R.clientX-g.clientX,R.clientY-g.clientY)}function Au(_){if(_.touches.length===2){B=jl(_.touches),p=null;return}if(_.touches.length!==1)return;B=null;let g=ro(_);Jl({clientX:g.clientX,clientY:g.clientY,ctrlKey:!1})}function Ru(_){if(_.touches.length===2){_.preventDefault();let R=jl(_.touches);if(B!=null&&B>0){let C=R-B,k=a.position.distanceTo(c),H=Math.max(Y,Math.min(b,k-C*U));d.copy(c).sub(a.position).normalize(),a.position.copy(c).sub(d.multiplyScalar(H)),a.lookAt(c),ti=performance.now()}B=R;return}if(B=null,_.touches.length!==1)return;_.preventDefault();let g=ro(_);Ql({clientX:g.clientX,clientY:g.clientY,ctrlKey:!1})}function Cu(_){if(_.touches.length<2&&(B=null),_.touches.length===2||_.changedTouches.length===0)return;let g=ro(_);ao({clientX:g.clientX,clientY:g.clientY,ctrlKey:!1})}function Ql(_){if(Xt){Ln(_.clientX,_.clientY);return}if(p==null)return;let g=_.clientX-L.x,R=_.clientY-L.y;if(!x&&!v&&(Math.abs(g)>M||Math.abs(R)>M)&&(_.ctrlKey||m?v=!0:x=!0),v){I.copy(a.position).sub(c);let C=I.length();if(C<.001)return;let k=Math.atan2(I.x,I.z),H=Math.asin(Math.max(-1,Math.min(1,I.y/C)));k-=g*y,H+=R*y,H=Math.max(T,Math.min(N,H)),I.x=C*Math.cos(H)*Math.sin(k),I.y=C*Math.sin(H),I.z=C*Math.cos(H)*Math.cos(k),a.position.copy(c).add(I),a.lookAt(c),L.x=_.clientX,L.y=_.clientY,ti=performance.now()}else if(x){let C=Nr(_.clientX,_.clientY);f.setFromNormalAndCoplanarPoint(new F(0,1,0),new F(0,c.y,0)),Pi.setFromCamera(new Ne(p.x,p.y),a),Pi.ray.intersectPlane(f,u);let k=u.clone();Pi.setFromCamera(new Ne(C.x,C.y),a),Pi.ray.intersectPlane(f,u);let H=k.sub(u);c.add(H),a.position.add(H),a.lookAt(c),p={x:C.x,y:C.y},ti=performance.now()}}function ao(_){if(p!=null&&!x&&!v){let g=Nr(_.clientX,_.clientY);wu(g.x,g.y)}p=null,x=!1,v=!1,m=!1,t.style.cursor="grab"}function Pu(_){_.preventDefault();let g=a.position.distanceTo(c),R=Math.max(Y,Math.min(b,g+_.deltaY*w));d.copy(c).sub(a.position).normalize(),a.position.copy(c).sub(d.multiplyScalar(R)),a.lookAt(c),ti=performance.now()}t.style.cursor="grab",t.addEventListener("mousedown",Jl),t.addEventListener("mousemove",Ql),t.addEventListener("mouseup",ao),t.addEventListener("mouseleave",ao),t.addEventListener("touchstart",Au,{passive:!0}),t.addEventListener("touchmove",Ru,{passive:!1}),t.addEventListener("touchend",Cu,{passive:!0}),t.addEventListener("wheel",Pu,{passive:!1});function ec(){let _=t.clientWidth,g=t.clientHeight;a.aspect=_/g,a.updateProjectionMatrix(),vn.setSize(_,g),vn.setPixelRatio(Math.min(window.devicePixelRatio,1.7))}window.addEventListener("resize",ec);let vn=new Mr({antialias:!1});vn.setSize(t.clientWidth,t.clientHeight),vn.setPixelRatio(Math.min(window.devicePixelRatio,1.7)),vn.shadowMap.enabled=!0,vn.shadowMap.type=Bl,t.appendChild(vn.domElement),ec();let Or=document.createElement("div");Or.id="combat-text-layer",t.appendChild(Or);let ui=new F,Li=new F,Iu=1400;function Xn(_,g,R,C,k){let H=document.createElement("div");H.className="combat-text-float "+(C?"miss":"damage")+(k?" "+k:""),H.textContent=R,H.style.position="absolute",Or.appendChild(H);let V=k==="skill-name"?1.7:1.2,z=performance.now();function W(){ui.copy(pe(_,g)),ui.y+=V,ui.project(a);let be=t.clientWidth,Pe=t.clientHeight;H.style.left=(ui.x*.5+.5)*be+"px",H.style.top=(1-(ui.y*.5+.5))*Pe+"px"}let ne=0;function he(){ne%2===0&&W(),ne++,performance.now()-z<Iu?requestAnimationFrame(he):H.remove()}requestAnimationFrame(he)}let Lu=1500;function Du(_,g){let R=document.createElement("div");R.className="combat-text-float "+(g||"levelup"),R.textContent="LEVEL UP!",R.style.position="absolute",Or.appendChild(R);let C=performance.now(),k=0;function H(){ui.copy(pe(_.x,_.y)),ui.y+=1.2,ui.project(a);let z=t.clientWidth,W=t.clientHeight;R.style.left=(ui.x*.5+.5)*z+"px",R.style.top=(1-(ui.y*.5+.5))*W+"px"}function V(){k%2===0&&H(),k++,performance.now()-C<Lu?requestAnimationFrame(V):R.remove()}requestAnimationFrame(V)}function Mn(_){console.log("[DEATH]",`${_.name} (${_.class}, P${_.player})`,`at (${_.x},${_.y})`,`Lv.${_.level}`),Xn(_.x,_.y,"DEAD",!1);let g=$.get(_.id);if(!g){q(),tc();return}let R=performance.now();function C(k){an();let H=k-R,V=Math.min(1,H/K),z=V*V;g.rotation.x=z*Math.PI*.5,V<1?requestAnimationFrame(C):(n.remove(g),$.delete(_.id),q(),tc())}requestAnimationFrame(C)}function tc(){if(ot!=="playing")return;let _=O.some(R=>R.player===1&&R.hp>0),g=O.some(R=>R.player===2&&R.hp>0);_?g||oo(1):oo(2)}function Uu(){let _=Yl(),g=new Set(_.map(V=>V.gy*e.w+V.gx)),R=O.filter(V=>V.hp>0&&V.player===1&&g.has(V.y*e.w+V.x)).length,C=O.filter(V=>V.hp>0&&V.player===2&&g.has(V.y*e.w+V.x)).length,k=null,H="";if(R>C)k=1,H=`Time's up! Player 1 wins! (${R} vs ${C} units on center base)`;else if(C>R)k=2,H=`Time's up! Player 2 wins! (${C} vs ${R} units on center base)`;else{let V=O.filter(W=>W.hp>0&&W.player===1).reduce((W,ne)=>W+ne.hp,0),z=O.filter(W=>W.hp>0&&W.player===2).reduce((W,ne)=>W+ne.hp,0);V>z?(k=1,H=`Time's up! Draw on center \u2014 Player 1 wins on total HP (${V} vs ${z})`):z>V?(k=2,H=`Time's up! Draw on center \u2014 Player 2 wins on total HP (${z} vs ${V})`):H=`Draw! (equal units on center: ${R}, equal HP)`}oo(k,H)}function oo(_,g){ot="gameover",document.getElementById("turn-menu").style.display="none",je(),en();let R=document.getElementById("game-over-overlay"),C=document.getElementById("game-over-title"),k=document.getElementById("game-over-cards");C.textContent=g??`Player ${_} wins!`;let H=O.filter(V=>V.player===(_??1));k.innerHTML=H.map(V=>{let z=V,W=V.level>=3?" level-3":V.level>=2?" level-2":"",ne=z.maxHp>0&&z.hp/z.maxHp<.3?" low-hp":"";return`
        <div class="game-over-card${W}${ne}">
          <img class="game-over-card-image" src="${Cr[V.class]||""}" alt="${z.name}" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="game-over-card-body">
            <div class="game-over-card-name">${z.name}</div>
            <div class="game-over-card-meta">Lv.${z.level} ${z.class} \u2014 HP ${z.hp}/${z.maxHp}</div>
            <div class="game-over-card-stats">
              <span class="stat-label">HP</span><span class="stat-val stat-val-hp">${z.hp}/${z.maxHp}</span>
              <span class="stat-label">MP</span><span class="stat-val">${z.mp}/${z.maxMp}</span>
              <span class="stat-label">STR</span><span class="stat-val">${Me(z,"str")}</span>
              <span class="stat-label">AGI</span><span class="stat-val">${Me(z,"agi")}</span>
              <span class="stat-label">VIT</span><span class="stat-val">${Me(z,"vit")}</span>
              <span class="stat-label">DEX</span><span class="stat-val">${Me(z,"dex")}</span>
              <span class="stat-label">LUK</span><span class="stat-val">${Me(z,"luk")}</span>
              <span class="stat-label">INT</span><span class="stat-val">${Me(z,"int")}</span>
              <span class="stat-label">Range</span><span class="stat-val">${z.range}</span>
            </div>
          </div>
        </div>
      `}).join(""),R.classList.add("visible")}function vs(_=0){requestAnimationFrame(vs),ti===0&&(ti=_);let g=_-ti>500,R=0;typeof vs.frameCount=="number"&&(R=vs.frameCount),vs.frameCount=R+1;let C=()=>{if(hi){let k=.6+.4*Math.sin(_*.004);for(let H=0;H<Wn.length;H++){let V=H%2===0?.4:.7;Wn[H].opacity=V*k}vn.render(n,a),hi=!1}};g?_-Ki>=100&&(Ki=_,hi=!0,C()):(vs.frameCount%2===0&&(hi=!0),C())}vs()}y_();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
