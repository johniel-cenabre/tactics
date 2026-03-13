var sc="160";var Ad=0,Hc=1,Rd=2;var Mu=1,rc=2,Di=3,is=0,ei=1,_n=2;var es=0,tr=1,zc=2,Vc=3,Gc=4,Cd=5,xs=100,Pd=101,Id=102,Wc=103,Xc=104,Ld=200,Dd=201,Ud=202,Nd=203,dl=204,fl=205,Od=206,Fd=207,Bd=208,kd=209,Hd=210,zd=211,Vd=212,Gd=213,Wd=214,Xd=0,qd=1,Yd=2,Pa=3,$d=4,Zd=5,Kd=6,Jd=7,bu=0,jd=1,Qd=2,ts=0,ef=1,tf=2,nf=3,sf=4,rf=5,af=6;var Su=300,sr=301,rr=302,pl=303,ml=304,lo=306,Lr=1e3,_i=1001,gl=1002,Wn=1003,qc=1004;var Po=1005;var oi=1006,of=1007;var Dr=1008;var ns=1009,lf=1010,cf=1011,ac=1012,Eu=1013,ji=1014,Qi=1015,Ur=1016,Tu=1017,wu=1018,_s=1020,hf=1021,vi=1023,uf=1024,df=1025,vs=1026,ar=1027,ff=1028,Au=1029,pf=1030,Ru=1031,Cu=1033,Io=33776,Lo=33777,Do=33778,Uo=33779,Yc=35840,$c=35841,Zc=35842,Kc=35843,Pu=36196,Jc=37492,jc=37496,Qc=37808,eh=37809,th=37810,nh=37811,ih=37812,sh=37813,rh=37814,ah=37815,oh=37816,lh=37817,ch=37818,hh=37819,uh=37820,dh=37821,No=36492,fh=36494,ph=36495,mf=36283,mh=36284,gh=36285,xh=36286;var Ia=2300,La=2301,Oo=2302,yh=2400,_h=2401,vh=2402;var Iu=3e3,Ms=3001,gf=3200,xf=3201,Lu=0,yf=1,li="",Fn="srgb",Ni="srgb-linear",oc="display-p3",co="display-p3-linear",Da="linear",an="srgb",Ua="rec709",Na="p3";var Ns=7680;var Mh=519,_f=512,vf=513,Mf=514,Du=515,bf=516,Sf=517,Ef=518,Tf=519,bh=35044;var Sh="300 es",xl=1035,Ui=2e3,Oa=2001,ss=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Fo=Math.PI/180,yl=180/Math.PI;function dr(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(kn[i&255]+kn[i>>8&255]+kn[i>>16&255]+kn[i>>24&255]+"-"+kn[e&255]+kn[e>>8&255]+"-"+kn[e>>16&15|64]+kn[e>>24&255]+"-"+kn[t&63|128]+kn[t>>8&255]+"-"+kn[t>>16&255]+kn[t>>24&255]+kn[n&255]+kn[n>>8&255]+kn[n>>16&255]+kn[n>>24&255]).toLowerCase()}function zn(i,e,t){return Math.max(e,Math.min(t,i))}function wf(i,e){return(i%e+e)%e}function Bo(i,e,t){return(1-t)*i+t*e}function Eh(i){return(i&i-1)===0&&i!==0}function _l(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function br(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Qn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var He=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(zn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Pt=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],p=n[7],d=n[2],u=n[5],y=n[8],v=s[0],g=s[3],m=s[6],M=s[1],_=s[4],A=s[7],D=s[2],I=s[5],L=s[8];return r[0]=a*v+o*M+l*D,r[3]=a*g+o*_+l*I,r[6]=a*m+o*A+l*L,r[1]=c*v+h*M+p*D,r[4]=c*g+h*_+p*I,r[7]=c*m+h*A+p*L,r[2]=d*v+u*M+y*D,r[5]=d*g+u*_+y*I,r[8]=d*m+u*A+y*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],p=h*a-o*c,d=o*l-h*r,u=c*r-a*l,y=t*p+n*d+s*u;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/y;return e[0]=p*v,e[1]=(s*c-h*n)*v,e[2]=(o*n-s*a)*v,e[3]=d*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=u*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ko.makeScale(e,t)),this}rotate(e){return this.premultiply(ko.makeRotation(-e)),this}translate(e,t){return this.premultiply(ko.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ko=new Pt;function Uu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Fa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Af(){let i=Fa("canvas");return i.style.display="block",i}var Th={};function Ar(i){i in Th||(Th[i]=!0,console.warn(i))}var wh=new Pt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ah=new Pt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ia={[Ni]:{transfer:Da,primaries:Ua,toReference:i=>i,fromReference:i=>i},[Fn]:{transfer:an,primaries:Ua,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[co]:{transfer:Da,primaries:Na,toReference:i=>i.applyMatrix3(Ah),fromReference:i=>i.applyMatrix3(wh)},[oc]:{transfer:an,primaries:Na,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Ah),fromReference:i=>i.applyMatrix3(wh).convertLinearToSRGB()}},Rf=new Set([Ni,co]),Jt={enabled:!0,_workingColorSpace:Ni,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Rf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=ia[e].toReference,s=ia[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return ia[i].primaries},getTransfer:function(i){return i===li?Da:ia[i].transfer}};function nr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ho(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Os,Ba=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Os===void 0&&(Os=Fa("canvas")),Os.width=e.width,Os.height=e.height;let n=Os.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Os}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Fa("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=nr(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(nr(t[n]/255)*255):t[n]=nr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Cf=0,ka=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=dr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(zo(s[a].image)):r.push(zo(s[a]))}else r=zo(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function zo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ba.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Pf=0,hi=class i extends ss{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=_i,s=_i,r=oi,a=Dr,o=vi,l=ns,c=i.DEFAULT_ANISOTROPY,h=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=dr(),this.name="",this.source=new ka(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ar("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ms?Fn:li),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Su)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Lr:e.x=e.x-Math.floor(e.x);break;case _i:e.x=e.x<0?0:1;break;case gl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Lr:e.y=e.y-Math.floor(e.y);break;case _i:e.y=e.y<0?0:1;break;case gl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ar("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Fn?Ms:Iu}set encoding(e){Ar("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ms?Fn:li}};hi.DEFAULT_IMAGE=null;hi.DEFAULT_MAPPING=Su;hi.DEFAULT_ANISOTROPY=1;var Nn=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],p=l[8],d=l[1],u=l[5],y=l[9],v=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(p-v)<.01&&Math.abs(y-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(p+v)<.1&&Math.abs(y+g)<.1&&Math.abs(c+u+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,A=(u+1)/2,D=(m+1)/2,I=(h+d)/4,L=(p+v)/4,X=(y+g)/4;return _>A&&_>D?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=I/n,r=L/n):A>D?A<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),n=I/s,r=X/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=L/r,s=X/r),this.set(n,s,r,t),this}let M=Math.sqrt((g-y)*(g-y)+(p-v)*(p-v)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(g-y)/M,this.y=(p-v)/M,this.z=(d-h)/M,this.w=Math.acos((c+u+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},vl=class extends ss{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Nn(0,0,e,t),this.scissorTest=!1,this.viewport=new Nn(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(Ar("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ms?Fn:li),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:oi,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new hi(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ka(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Oi=class extends vl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ha=class extends hi{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ml=class extends hi{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var rs=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],p=n[s+3],d=r[a+0],u=r[a+1],y=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=p;return}if(o===1){e[t+0]=d,e[t+1]=u,e[t+2]=y,e[t+3]=v;return}if(p!==v||l!==d||c!==u||h!==y){let g=1-o,m=l*d+c*u+h*y+p*v,M=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){let D=Math.sqrt(_),I=Math.atan2(D,m*M);g=Math.sin(g*I)/D,o=Math.sin(o*I)/D}let A=o*M;if(l=l*g+d*A,c=c*g+u*A,h=h*g+y*A,p=p*g+v*A,g===1-o){let D=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=D,c*=D,h*=D,p*=D}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],p=r[a],d=r[a+1],u=r[a+2],y=r[a+3];return e[t]=o*y+h*p+l*u-c*d,e[t+1]=l*y+h*d+c*p-o*u,e[t+2]=c*y+h*u+o*d-l*p,e[t+3]=h*y-o*p-l*d-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),p=o(r/2),d=l(n/2),u=l(s/2),y=l(r/2);switch(a){case"XYZ":this._x=d*h*p+c*u*y,this._y=c*u*p-d*h*y,this._z=c*h*y+d*u*p,this._w=c*h*p-d*u*y;break;case"YXZ":this._x=d*h*p+c*u*y,this._y=c*u*p-d*h*y,this._z=c*h*y-d*u*p,this._w=c*h*p+d*u*y;break;case"ZXY":this._x=d*h*p-c*u*y,this._y=c*u*p+d*h*y,this._z=c*h*y+d*u*p,this._w=c*h*p-d*u*y;break;case"ZYX":this._x=d*h*p-c*u*y,this._y=c*u*p+d*h*y,this._z=c*h*y-d*u*p,this._w=c*h*p+d*u*y;break;case"YZX":this._x=d*h*p+c*u*y,this._y=c*u*p+d*h*y,this._z=c*h*y-d*u*p,this._w=c*h*p-d*u*y;break;case"XZY":this._x=d*h*p-c*u*y,this._y=c*u*p-d*h*y,this._z=c*h*y+d*u*p,this._w=c*h*p+d*u*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],p=t[10],d=n+o+p;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(a-s)*u}else if(n>o&&n>p){let u=2*Math.sqrt(1+n-o-p);this._w=(h-l)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+c)/u}else if(o>p){let u=2*Math.sqrt(1+o-n-p);this._w=(r-c)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+p-n-o);this._w=(a-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(zn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let u=1-t;return this._w=u*a+t*this._w,this._x=u*n+t*this._x,this._y=u*s+t*this._y,this._z=u*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),p=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*p+this._w*d,this._x=n*p+this._x*d,this._y=s*p+this._y*d,this._z=r*p+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),p=2*(r*n-a*t);return this.x=t+l*c+a*p-o*h,this.y=n+l*h+o*c-r*p,this.z=s+l*p+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Vo.copy(this).projectOnVector(e),this.sub(Vo)}reflect(e){return this.sub(Vo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(zn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Vo=new F,Rh=new rs,bs=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,mi):mi.fromBufferAttribute(r,a),mi.applyMatrix4(e.matrixWorld),this.expandByPoint(mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),sa.copy(n.boundingBox)),sa.applyMatrix4(e.matrixWorld),this.union(sa)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sr),ra.subVectors(this.max,Sr),Fs.subVectors(e.a,Sr),Bs.subVectors(e.b,Sr),ks.subVectors(e.c,Sr),Yi.subVectors(Bs,Fs),$i.subVectors(ks,Bs),ds.subVectors(Fs,ks);let t=[0,-Yi.z,Yi.y,0,-$i.z,$i.y,0,-ds.z,ds.y,Yi.z,0,-Yi.x,$i.z,0,-$i.x,ds.z,0,-ds.x,-Yi.y,Yi.x,0,-$i.y,$i.x,0,-ds.y,ds.x,0];return!Go(t,Fs,Bs,ks,ra)||(t=[1,0,0,0,1,0,0,0,1],!Go(t,Fs,Bs,ks,ra))?!1:(aa.crossVectors(Yi,$i),t=[aa.x,aa.y,aa.z],Go(t,Fs,Bs,ks,ra))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ri=[new F,new F,new F,new F,new F,new F,new F,new F],mi=new F,sa=new bs,Fs=new F,Bs=new F,ks=new F,Yi=new F,$i=new F,ds=new F,Sr=new F,ra=new F,aa=new F,fs=new F;function Go(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){fs.fromArray(i,r);let o=s.x*Math.abs(fs.x)+s.y*Math.abs(fs.y)+s.z*Math.abs(fs.z),l=e.dot(fs),c=t.dot(fs),h=n.dot(fs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var If=new bs,Er=new F,Wo=new F,or=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):If.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Er.subVectors(e,this.center);let t=Er.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Er,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Er.copy(e.center).add(Wo)),this.expandByPoint(Er.copy(e.center).sub(Wo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ci=new F,Xo=new F,oa=new F,Zi=new F,qo=new F,la=new F,Yo=new F,Nr=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,t),Ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Xo.copy(e).add(t).multiplyScalar(.5),oa.copy(t).sub(e).normalize(),Zi.copy(this.origin).sub(Xo);let r=e.distanceTo(t)*.5,a=-this.direction.dot(oa),o=Zi.dot(this.direction),l=-Zi.dot(oa),c=Zi.lengthSq(),h=Math.abs(1-a*a),p,d,u,y;if(h>0)if(p=a*l-o,d=a*o-l,y=r*h,p>=0)if(d>=-y)if(d<=y){let v=1/h;p*=v,d*=v,u=p*(p+a*d+2*o)+d*(a*p+d+2*l)+c}else d=r,p=Math.max(0,-(a*d+o)),u=-p*p+d*(d+2*l)+c;else d=-r,p=Math.max(0,-(a*d+o)),u=-p*p+d*(d+2*l)+c;else d<=-y?(p=Math.max(0,-(-a*r+o)),d=p>0?-r:Math.min(Math.max(-r,-l),r),u=-p*p+d*(d+2*l)+c):d<=y?(p=0,d=Math.min(Math.max(-r,-l),r),u=d*(d+2*l)+c):(p=Math.max(0,-(a*r+o)),d=p>0?r:Math.min(Math.max(-r,-l),r),u=-p*p+d*(d+2*l)+c);else d=a>0?-r:r,p=Math.max(0,-(a*d+o)),u=-p*p+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Xo).addScaledVector(oa,d),u}intersectSphere(e,t){Ci.subVectors(e.center,this.origin);let n=Ci.dot(this.direction),s=Ci.dot(Ci)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(e.min.z-d.z)*p,l=(e.max.z-d.z)*p):(o=(e.max.z-d.z)*p,l=(e.min.z-d.z)*p),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,t,n,s,r){qo.subVectors(t,e),la.subVectors(n,e),Yo.crossVectors(qo,la);let a=this.direction.dot(Yo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Zi.subVectors(this.origin,e);let l=o*this.direction.dot(la.crossVectors(Zi,la));if(l<0)return null;let c=o*this.direction.dot(qo.cross(Zi));if(c<0||l+c>a)return null;let h=-o*Zi.dot(Yo);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},En=class i{constructor(e,t,n,s,r,a,o,l,c,h,p,d,u,y,v,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,p,d,u,y,v,g)}set(e,t,n,s,r,a,o,l,c,h,p,d,u,y,v,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=p,m[14]=d,m[3]=u,m[7]=y,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Hs.setFromMatrixColumn(e,0).length(),r=1/Hs.setFromMatrixColumn(e,1).length(),a=1/Hs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){let d=a*h,u=a*p,y=o*h,v=o*p;t[0]=l*h,t[4]=-l*p,t[8]=c,t[1]=u+y*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=y+u*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,u=l*p,y=c*h,v=c*p;t[0]=d+v*o,t[4]=y*o-u,t[8]=a*c,t[1]=a*p,t[5]=a*h,t[9]=-o,t[2]=u*o-y,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,u=l*p,y=c*h,v=c*p;t[0]=d-v*o,t[4]=-a*p,t[8]=y+u*o,t[1]=u+y*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,u=a*p,y=o*h,v=o*p;t[0]=l*h,t[4]=y*c-u,t[8]=d*c+v,t[1]=l*p,t[5]=v*c+d,t[9]=u*c-y,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,u=a*c,y=o*l,v=o*c;t[0]=l*h,t[4]=v-d*p,t[8]=y*p+u,t[1]=p,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=u*p+y,t[10]=d-v*p}else if(e.order==="XZY"){let d=a*l,u=a*c,y=o*l,v=o*c;t[0]=l*h,t[4]=-p,t[8]=c*h,t[1]=d*p+v,t[5]=a*h,t[9]=u*p-y,t[2]=y*p-u,t[6]=o*h,t[10]=v*p+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lf,e,Df)}lookAt(e,t,n){let s=this.elements;return ii.subVectors(e,t),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Ki.crossVectors(n,ii),Ki.lengthSq()===0&&(Math.abs(n.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Ki.crossVectors(n,ii)),Ki.normalize(),ca.crossVectors(ii,Ki),s[0]=Ki.x,s[4]=ca.x,s[8]=ii.x,s[1]=Ki.y,s[5]=ca.y,s[9]=ii.y,s[2]=Ki.z,s[6]=ca.z,s[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],p=n[5],d=n[9],u=n[13],y=n[2],v=n[6],g=n[10],m=n[14],M=n[3],_=n[7],A=n[11],D=n[15],I=s[0],L=s[4],X=s[8],b=s[12],R=s[1],q=s[5],ae=s[9],be=s[13],P=s[2],N=s[6],G=s[10],re=s[14],ne=s[3],Q=s[7],B=s[11],de=s[15];return r[0]=a*I+o*R+l*P+c*ne,r[4]=a*L+o*q+l*N+c*Q,r[8]=a*X+o*ae+l*G+c*B,r[12]=a*b+o*be+l*re+c*de,r[1]=h*I+p*R+d*P+u*ne,r[5]=h*L+p*q+d*N+u*Q,r[9]=h*X+p*ae+d*G+u*B,r[13]=h*b+p*be+d*re+u*de,r[2]=y*I+v*R+g*P+m*ne,r[6]=y*L+v*q+g*N+m*Q,r[10]=y*X+v*ae+g*G+m*B,r[14]=y*b+v*be+g*re+m*de,r[3]=M*I+_*R+A*P+D*ne,r[7]=M*L+_*q+A*N+D*Q,r[11]=M*X+_*ae+A*G+D*B,r[15]=M*b+_*be+A*re+D*de,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],p=e[6],d=e[10],u=e[14],y=e[3],v=e[7],g=e[11],m=e[15];return y*(+r*l*p-s*c*p-r*o*d+n*c*d+s*o*u-n*l*u)+v*(+t*l*u-t*c*d+r*a*d-s*a*u+s*c*h-r*l*h)+g*(+t*c*p-t*o*u-r*a*p+n*a*u+r*o*h-n*c*h)+m*(-s*o*h-t*l*p+t*o*d+s*a*p-n*a*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],p=e[9],d=e[10],u=e[11],y=e[12],v=e[13],g=e[14],m=e[15],M=p*g*c-v*d*c+v*l*u-o*g*u-p*l*m+o*d*m,_=y*d*c-h*g*c-y*l*u+a*g*u+h*l*m-a*d*m,A=h*v*c-y*p*c+y*o*u-a*v*u-h*o*m+a*p*m,D=y*p*l-h*v*l-y*o*d+a*v*d+h*o*g-a*p*g,I=t*M+n*_+s*A+r*D;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/I;return e[0]=M*L,e[1]=(v*d*r-p*g*r-v*s*u+n*g*u+p*s*m-n*d*m)*L,e[2]=(o*g*r-v*l*r+v*s*c-n*g*c-o*s*m+n*l*m)*L,e[3]=(p*l*r-o*d*r-p*s*c+n*d*c+o*s*u-n*l*u)*L,e[4]=_*L,e[5]=(h*g*r-y*d*r+y*s*u-t*g*u-h*s*m+t*d*m)*L,e[6]=(y*l*r-a*g*r-y*s*c+t*g*c+a*s*m-t*l*m)*L,e[7]=(a*d*r-h*l*r+h*s*c-t*d*c-a*s*u+t*l*u)*L,e[8]=A*L,e[9]=(y*p*r-h*v*r-y*n*u+t*v*u+h*n*m-t*p*m)*L,e[10]=(a*v*r-y*o*r+y*n*c-t*v*c-a*n*m+t*o*m)*L,e[11]=(h*o*r-a*p*r-h*n*c+t*p*c+a*n*u-t*o*u)*L,e[12]=D*L,e[13]=(h*v*s-y*p*s+y*n*d-t*v*d-h*n*g+t*p*g)*L,e[14]=(y*o*s-a*v*s-y*n*l+t*v*l+a*n*g-t*o*g)*L,e[15]=(a*p*s-h*o*s+h*n*l-t*p*l-a*n*d+t*o*d)*L,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,p=o+o,d=r*c,u=r*h,y=r*p,v=a*h,g=a*p,m=o*p,M=l*c,_=l*h,A=l*p,D=n.x,I=n.y,L=n.z;return s[0]=(1-(v+m))*D,s[1]=(u+A)*D,s[2]=(y-_)*D,s[3]=0,s[4]=(u-A)*I,s[5]=(1-(d+m))*I,s[6]=(g+M)*I,s[7]=0,s[8]=(y+_)*L,s[9]=(g-M)*L,s[10]=(1-(d+v))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Hs.set(s[0],s[1],s[2]).length(),a=Hs.set(s[4],s[5],s[6]).length(),o=Hs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],gi.copy(this);let c=1/r,h=1/a,p=1/o;return gi.elements[0]*=c,gi.elements[1]*=c,gi.elements[2]*=c,gi.elements[4]*=h,gi.elements[5]*=h,gi.elements[6]*=h,gi.elements[8]*=p,gi.elements[9]*=p,gi.elements[10]*=p,t.setFromRotationMatrix(gi),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Ui){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),p=(t+e)/(t-e),d=(n+s)/(n-s),u,y;if(o===Ui)u=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Oa)u=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Ui){let l=this.elements,c=1/(t-e),h=1/(n-s),p=1/(a-r),d=(t+e)*c,u=(n+s)*h,y,v;if(o===Ui)y=(a+r)*p,v=-2*p;else if(o===Oa)y=r*p,v=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=v,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Hs=new F,gi=new En,Lf=new F(0,0,0),Df=new F(1,1,1),Ki=new F,ca=new F,ii=new F,Ch=new En,Ph=new rs,za=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],p=s[2],d=s[6],u=s[10];switch(t){case"XYZ":this._y=Math.asin(zn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-zn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(zn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,u),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-zn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(zn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-zn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ch.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ch,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ph.setFromEuler(this),this.setFromQuaternion(Ph,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};za.DEFAULT_ORDER="XYZ";var Or=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Uf=0,Ih=new F,zs=new rs,Pi=new En,ha=new F,Tr=new F,Nf=new F,Of=new rs,Lh=new F(1,0,0),Dh=new F(0,1,0),Uh=new F(0,0,1),Ff={type:"added"},Bf={type:"removed"},qn=class i extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=dr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new F,t=new za,n=new rs,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new En},normalMatrix:{value:new Pt}}),this.matrix=new En,this.matrixWorld=new En,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Or,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.multiply(zs),this}rotateOnWorldAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.premultiply(zs),this}rotateX(e){return this.rotateOnAxis(Lh,e)}rotateY(e){return this.rotateOnAxis(Dh,e)}rotateZ(e){return this.rotateOnAxis(Uh,e)}translateOnAxis(e,t){return Ih.copy(e).applyQuaternion(this.quaternion),this.position.add(Ih.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Lh,e)}translateY(e){return this.translateOnAxis(Dh,e)}translateZ(e){return this.translateOnAxis(Uh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ha.copy(e):ha.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(Tr,ha,this.up):Pi.lookAt(ha,Tr,this.up),this.quaternion.setFromRotationMatrix(Pi),s&&(Pi.extractRotation(s.matrixWorld),zs.setFromRotationMatrix(Pi),this.quaternion.premultiply(zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ff)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bf)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,e,Nf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,Of,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let p=l[c];r(e.shapes,p)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),p=a(e.shapes),d=a(e.skeletons),u=a(e.animations),y=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),y.length>0&&(n.nodes=y)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};qn.DEFAULT_UP=new F(0,1,0);qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var xi=new F,Ii=new F,$o=new F,Li=new F,Vs=new F,Gs=new F,Nh=new F,Zo=new F,Ko=new F,Jo=new F,ua=!1,Js=class i{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),xi.subVectors(e,t),s.cross(xi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){xi.subVectors(s,t),Ii.subVectors(n,t),$o.subVectors(e,t);let a=xi.dot(xi),o=xi.dot(Ii),l=xi.dot($o),c=Ii.dot(Ii),h=Ii.dot($o),p=a*c-o*o;if(p===0)return r.set(0,0,0),null;let d=1/p,u=(c*l-o*h)*d,y=(a*h-o*l)*d;return r.set(1-u-y,y,u)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getUV(e,t,n,s,r,a,o,l){return ua===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ua=!0),this.getInterpolation(e,t,n,s,r,a,o,l)}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Li.x),l.addScaledVector(a,Li.y),l.addScaledVector(o,Li.z),l)}static isFrontFacing(e,t,n,s){return xi.subVectors(n,t),Ii.subVectors(e,t),xi.cross(Ii).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),xi.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return ua===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ua=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Vs.subVectors(s,n),Gs.subVectors(r,n),Zo.subVectors(e,n);let l=Vs.dot(Zo),c=Gs.dot(Zo);if(l<=0&&c<=0)return t.copy(n);Ko.subVectors(e,s);let h=Vs.dot(Ko),p=Gs.dot(Ko);if(h>=0&&p<=h)return t.copy(s);let d=l*p-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Vs,a);Jo.subVectors(e,r);let u=Vs.dot(Jo),y=Gs.dot(Jo);if(y>=0&&u<=y)return t.copy(r);let v=u*c-l*y;if(v<=0&&c>=0&&y<=0)return o=c/(c-y),t.copy(n).addScaledVector(Gs,o);let g=h*y-u*p;if(g<=0&&p-h>=0&&u-y>=0)return Nh.subVectors(r,s),o=(p-h)/(p-h+(u-y)),t.copy(s).addScaledVector(Nh,o);let m=1/(g+v+d);return a=v*m,o=d*m,t.copy(n).addScaledVector(Vs,a).addScaledVector(Gs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Nu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},da={h:0,s:0,l:0};function jo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var xt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Jt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Jt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Jt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Jt.workingColorSpace){if(e=wf(e,1),t=zn(t,0,1),n=zn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=jo(a,r,e+1/3),this.g=jo(a,r,e),this.b=jo(a,r,e-1/3)}return Jt.toWorkingColorSpace(this,s),this}setStyle(e,t=Fn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Fn){let n=Nu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}copyLinearToSRGB(e){return this.r=Ho(e.r),this.g=Ho(e.g),this.b=Ho(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fn){return Jt.fromWorkingColorSpace(Hn.copy(this),e),Math.round(zn(Hn.r*255,0,255))*65536+Math.round(zn(Hn.g*255,0,255))*256+Math.round(zn(Hn.b*255,0,255))}getHexString(e=Fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Jt.workingColorSpace){Jt.fromWorkingColorSpace(Hn.copy(this),t);let n=Hn.r,s=Hn.g,r=Hn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let p=a-o;switch(c=h<=.5?p/(a+o):p/(2-a-o),a){case n:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-n)/p+2;break;case r:l=(n-s)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(Hn.copy(this),t),e.r=Hn.r,e.g=Hn.g,e.b=Hn.b,e}getStyle(e=Fn){Jt.fromWorkingColorSpace(Hn.copy(this),e);let t=Hn.r,n=Hn.g,s=Hn.b;return e!==Fn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ji),this.setHSL(Ji.h+e,Ji.s+t,Ji.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ji),e.getHSL(da);let n=Bo(Ji.h,da.h,t),s=Bo(Ji.s,da.s,t),r=Bo(Ji.l,da.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Hn=new xt;xt.NAMES=Nu;var kf=0,as=class extends ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=dr(),this.name="",this.type="Material",this.blending=tr,this.side=is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dl,this.blendDst=fl,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=Pa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ns,this.stencilZFail=Ns,this.stencilZPass=Ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==tr&&(n.blending=this.blending),this.side!==is&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==dl&&(n.blendSrc=this.blendSrc),this.blendDst!==fl&&(n.blendDst=this.blendDst),this.blendEquation!==xs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Pa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ns&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ns&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ns&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},vn=class extends as{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=bu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Sn=new F,fa=new He,ti=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=bh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fa.fromBufferAttribute(this,t),fa.applyMatrix3(e),this.setXY(t,fa.x,fa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.applyMatrix3(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.applyMatrix4(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.applyNormalMatrix(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.transformDirection(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=br(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=br(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=br(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=br(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=br(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Qn(t,this.array),n=Qn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Qn(t,this.array),n=Qn(n,this.array),s=Qn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Qn(t,this.array),n=Qn(n,this.array),s=Qn(s,this.array),r=Qn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bh&&(e.usage=this.usage),e}};var Va=class extends ti{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ga=class extends ti{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var gn=class extends ti{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Hf=0,ai=new En,Qo=new qn,Ws=new F,si=new bs,wr=new bs,Un=new F,ni=class i extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=dr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Uu(e)?Ga:Va)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Pt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ai.makeRotationFromQuaternion(e),this.applyMatrix4(ai),this}rotateX(e){return ai.makeRotationX(e),this.applyMatrix4(ai),this}rotateY(e){return ai.makeRotationY(e),this.applyMatrix4(ai),this}rotateZ(e){return ai.makeRotationZ(e),this.applyMatrix4(ai),this}translate(e,t,n){return ai.makeTranslation(e,t,n),this.applyMatrix4(ai),this}scale(e,t,n){return ai.makeScale(e,t,n),this.applyMatrix4(ai),this}lookAt(e){return Qo.lookAt(e),Qo.updateMatrix(),this.applyMatrix4(Qo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new gn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];si.setFromBufferAttribute(r),this.morphTargetsRelative?(Un.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(Un),Un.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(Un)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new or);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(si.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];wr.setFromBufferAttribute(o),this.morphTargetsRelative?(Un.addVectors(si.min,wr.min),si.expandByPoint(Un),Un.addVectors(si.max,wr.max),si.expandByPoint(Un)):(si.expandByPoint(wr.min),si.expandByPoint(wr.max))}si.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Un.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Un));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Un.fromBufferAttribute(o,c),l&&(Ws.fromBufferAttribute(e,c),Un.add(Ws)),s=Math.max(s,n.distanceToSquared(Un))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ti(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let R=0;R<o;R++)c[R]=new F,h[R]=new F;let p=new F,d=new F,u=new F,y=new He,v=new He,g=new He,m=new F,M=new F;function _(R,q,ae){p.fromArray(s,R*3),d.fromArray(s,q*3),u.fromArray(s,ae*3),y.fromArray(a,R*2),v.fromArray(a,q*2),g.fromArray(a,ae*2),d.sub(p),u.sub(p),v.sub(y),g.sub(y);let be=1/(v.x*g.y-g.x*v.y);isFinite(be)&&(m.copy(d).multiplyScalar(g.y).addScaledVector(u,-v.y).multiplyScalar(be),M.copy(u).multiplyScalar(v.x).addScaledVector(d,-g.x).multiplyScalar(be),c[R].add(m),c[q].add(m),c[ae].add(m),h[R].add(M),h[q].add(M),h[ae].add(M))}let A=this.groups;A.length===0&&(A=[{start:0,count:n.length}]);for(let R=0,q=A.length;R<q;++R){let ae=A[R],be=ae.start,P=ae.count;for(let N=be,G=be+P;N<G;N+=3)_(n[N+0],n[N+1],n[N+2])}let D=new F,I=new F,L=new F,X=new F;function b(R){L.fromArray(r,R*3),X.copy(L);let q=c[R];D.copy(q),D.sub(L.multiplyScalar(L.dot(q))).normalize(),I.crossVectors(X,q);let be=I.dot(h[R])<0?-1:1;l[R*4]=D.x,l[R*4+1]=D.y,l[R*4+2]=D.z,l[R*4+3]=be}for(let R=0,q=A.length;R<q;++R){let ae=A[R],be=ae.start,P=ae.count;for(let N=be,G=be+P;N<G;N+=3)b(n[N+0]),b(n[N+1]),b(n[N+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ti(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,h=new F,p=new F;if(e)for(let d=0,u=e.count;d<u;d+=3){let y=e.getX(d+0),v=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,y),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),o.fromBufferAttribute(n,y),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(y,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,u=t.count;d<u;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Un.fromBufferAttribute(e,t),Un.normalize(),e.setXYZ(t,Un.x,Un.y,Un.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,p=o.normalized,d=new c.constructor(l.length*h),u=0,y=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?u=l[v]*o.data.stride+o.offset:u=l[v]*h;for(let m=0;m<h;m++)d[y++]=c[u++]}return new ti(d,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,p=c.length;h<p;h++){let d=c[h],u=e(d,n);l.push(u)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let p=0,d=c.length;p<d;p++){let u=c[p];h.push(u.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],p=r[c];for(let d=0,u=p.length;d<u;d++)h.push(p[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Oh=new En,ps=new Nr,pa=new or,Fh=new F,Xs=new F,qs=new F,Ys=new F,el=new F,ma=new F,ga=new He,xa=new He,ya=new He,Bh=new F,kh=new F,Hh=new F,_a=new F,va=new F,Ze=class extends qn{constructor(e=new ni,t=new vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ma.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],p=r[l];h!==0&&(el.fromBufferAttribute(p,e),a?ma.addScaledVector(el,h):ma.addScaledVector(el.sub(t),h))}t.add(ma)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(r),ps.copy(e.ray).recast(e.near),!(pa.containsPoint(ps.origin)===!1&&(ps.intersectSphere(pa,Fh)===null||ps.origin.distanceToSquared(Fh)>(e.far-e.near)**2))&&(Oh.copy(r).invert(),ps.copy(e.ray).applyMatrix4(Oh),!(n.boundingBox!==null&&ps.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ps)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,d=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let y=0,v=d.length;y<v;y++){let g=d[y],m=a[g.materialIndex],M=Math.max(g.start,u.start),_=Math.min(o.count,Math.min(g.start+g.count,u.start+u.count));for(let A=M,D=_;A<D;A+=3){let I=o.getX(A),L=o.getX(A+1),X=o.getX(A+2);s=Ma(this,m,e,n,c,h,p,I,L,X),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let y=Math.max(0,u.start),v=Math.min(o.count,u.start+u.count);for(let g=y,m=v;g<m;g+=3){let M=o.getX(g),_=o.getX(g+1),A=o.getX(g+2);s=Ma(this,a,e,n,c,h,p,M,_,A),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let y=0,v=d.length;y<v;y++){let g=d[y],m=a[g.materialIndex],M=Math.max(g.start,u.start),_=Math.min(l.count,Math.min(g.start+g.count,u.start+u.count));for(let A=M,D=_;A<D;A+=3){let I=A,L=A+1,X=A+2;s=Ma(this,m,e,n,c,h,p,I,L,X),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let y=Math.max(0,u.start),v=Math.min(l.count,u.start+u.count);for(let g=y,m=v;g<m;g+=3){let M=g,_=g+1,A=g+2;s=Ma(this,a,e,n,c,h,p,M,_,A),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function zf(i,e,t,n,s,r,a,o){let l;if(e.side===ei?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===is,o),l===null)return null;va.copy(o),va.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(va);return c<t.near||c>t.far?null:{distance:c,point:va.clone(),object:i}}function Ma(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Xs),i.getVertexPosition(l,qs),i.getVertexPosition(c,Ys);let h=zf(i,e,t,n,Xs,qs,Ys,_a);if(h){s&&(ga.fromBufferAttribute(s,o),xa.fromBufferAttribute(s,l),ya.fromBufferAttribute(s,c),h.uv=Js.getInterpolation(_a,Xs,qs,Ys,ga,xa,ya,new He)),r&&(ga.fromBufferAttribute(r,o),xa.fromBufferAttribute(r,l),ya.fromBufferAttribute(r,c),h.uv1=Js.getInterpolation(_a,Xs,qs,Ys,ga,xa,ya,new He),h.uv2=h.uv1),a&&(Bh.fromBufferAttribute(a,o),kh.fromBufferAttribute(a,l),Hh.fromBufferAttribute(a,c),h.normal=Js.getInterpolation(_a,Xs,qs,Ys,Bh,kh,Hh,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let p={a:o,b:l,c,normal:new F,materialIndex:0};Js.getNormal(Xs,qs,Ys,p.normal),h.face=p}return h}var wn=class i extends ni{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],p=[],d=0,u=0;y("z","y","x",-1,-1,n,t,e,a,r,0),y("z","y","x",1,-1,n,t,-e,a,r,1),y("x","z","y",1,1,e,n,t,s,a,2),y("x","z","y",1,-1,e,n,-t,s,a,3),y("x","y","z",1,-1,e,t,n,s,r,4),y("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new gn(c,3)),this.setAttribute("normal",new gn(h,3)),this.setAttribute("uv",new gn(p,2));function y(v,g,m,M,_,A,D,I,L,X,b){let R=A/L,q=D/X,ae=A/2,be=D/2,P=I/2,N=L+1,G=X+1,re=0,ne=0,Q=new F;for(let B=0;B<G;B++){let de=B*q-be;for(let oe=0;oe<N;oe++){let W=oe*R-ae;Q[v]=W*M,Q[g]=de*_,Q[m]=P,c.push(Q.x,Q.y,Q.z),Q[v]=0,Q[g]=0,Q[m]=I>0?1:-1,h.push(Q.x,Q.y,Q.z),p.push(oe/L),p.push(1-B/X),re+=1}}for(let B=0;B<X;B++)for(let de=0;de<L;de++){let oe=d+de+N*B,W=d+de+N*(B+1),ue=d+(de+1)+N*(B+1),Le=d+(de+1)+N*B;l.push(oe,W,Le),l.push(W,ue,Le),ne+=6}o.addGroup(u,ne,b),u+=ne,d+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function lr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Gn(i){let e={};for(let t=0;t<i.length;t++){let n=lr(i[t]);for(let s in n)e[s]=n[s]}return e}function Vf(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ou(i){return i.getRenderTarget()===null?i.outputColorSpace:Jt.workingColorSpace}var Gf={clone:lr,merge:Gn},Wf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Fi=class extends as{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wf,this.fragmentShader=Xf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lr(e.uniforms),this.uniformsGroups=Vf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Wa=class extends qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new En,this.projectionMatrix=new En,this.projectionMatrixInverse=new En,this.coordinateSystem=Ui}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Xn=class extends Wa{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=yl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Fo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yl*2*Math.atan(Math.tan(Fo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Fo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},$s=-90,Zs=1,bl=class extends qn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Xn($s,Zs,e,t);s.layers=this.layers,this.add(s);let r=new Xn($s,Zs,e,t);r.layers=this.layers,this.add(r);let a=new Xn($s,Zs,e,t);a.layers=this.layers,this.add(a);let o=new Xn($s,Zs,e,t);o.layers=this.layers,this.add(o);let l=new Xn($s,Zs,e,t);l.layers=this.layers,this.add(l);let c=new Xn($s,Zs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Ui)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Oa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,p=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(p,d,u),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}},Xa=class extends hi{constructor(e,t,n,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:sr,super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Sl=class extends Oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Ar("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ms?Fn:li),this.texture=new Xa(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:oi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new wn(5,5,5),r=new Fi({name:"CubemapFromEquirect",uniforms:lr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ei,blending:es});r.uniforms.tEquirect.value=t;let a=new Ze(s,r),o=t.minFilter;return t.minFilter===Dr&&(t.minFilter=oi),new bl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},tl=new F,qf=new F,Yf=new Pt,yi=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=tl.subVectors(n,t).cross(qf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(tl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Yf.getNormalMatrix(e),s=this.coplanarPoint(tl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ms=new or,ba=new F,Fr=class{constructor(e=new yi,t=new yi,n=new yi,s=new yi,r=new yi,a=new yi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ui){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],p=s[6],d=s[7],u=s[8],y=s[9],v=s[10],g=s[11],m=s[12],M=s[13],_=s[14],A=s[15];if(n[0].setComponents(l-r,d-c,g-u,A-m).normalize(),n[1].setComponents(l+r,d+c,g+u,A+m).normalize(),n[2].setComponents(l+a,d+h,g+y,A+M).normalize(),n[3].setComponents(l-a,d-h,g-y,A-M).normalize(),n[4].setComponents(l-o,d-p,g-v,A-_).normalize(),t===Ui)n[5].setComponents(l+o,d+p,g+v,A+_).normalize();else if(t===Oa)n[5].setComponents(o,p,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(e){return ms.center.set(0,0,0),ms.radius=.7071067811865476,ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ba.x=s.normal.x>0?e.max.x:e.min.x,ba.y=s.normal.y>0?e.max.y:e.min.y,ba.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ba)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Fu(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function $f(i,e){let t=e.isWebGL2,n=new WeakMap;function s(c,h){let p=c.array,d=c.usage,u=p.byteLength,y=i.createBuffer();i.bindBuffer(h,y),i.bufferData(h,p,d),c.onUploadCallback();let v;if(p instanceof Float32Array)v=i.FLOAT;else if(p instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)v=i.SHORT;else if(p instanceof Uint32Array)v=i.UNSIGNED_INT;else if(p instanceof Int32Array)v=i.INT;else if(p instanceof Int8Array)v=i.BYTE;else if(p instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:v,bytesPerElement:p.BYTES_PER_ELEMENT,version:c.version,size:u}}function r(c,h,p){let d=h.array,u=h._updateRange,y=h.updateRanges;if(i.bindBuffer(p,c),u.count===-1&&y.length===0&&i.bufferSubData(p,0,d),y.length!==0){for(let v=0,g=y.length;v<g;v++){let m=y[v];t?i.bufferSubData(p,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count):i.bufferSubData(p,m.start*d.BYTES_PER_ELEMENT,d.subarray(m.start,m.start+m.count))}h.clearUpdateRanges()}u.count!==-1&&(t?i.bufferSubData(p,u.offset*d.BYTES_PER_ELEMENT,d,u.offset,u.count):i.bufferSubData(p,u.offset*d.BYTES_PER_ELEMENT,d.subarray(u.offset,u.offset+u.count)),u.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let p=n.get(c);if(p===void 0)n.set(c,s(c,h));else if(p.version<c.version){if(p.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,c,h),p.version=c.version}}return{get:a,remove:o,update:l}}var Bi=class i extends ni{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,p=e/o,d=t/l,u=[],y=[],v=[],g=[];for(let m=0;m<h;m++){let M=m*d-a;for(let _=0;_<c;_++){let A=_*p-r;y.push(A,-M,0),v.push(0,0,1),g.push(_/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){let _=M+c*m,A=M+c*(m+1),D=M+1+c*(m+1),I=M+1+c*m;u.push(_,A,I),u.push(A,D,I)}this.setIndex(u),this.setAttribute("position",new gn(y,3)),this.setAttribute("normal",new gn(v,3)),this.setAttribute("uv",new gn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Zf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kf=`#ifdef USE_ALPHAHASH
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
#endif`,Jf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ep=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tp=`#ifdef USE_AOMAP
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
#endif`,np=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ip=`#ifdef USE_BATCHING
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
#endif`,sp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,rp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ap=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,op=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lp=`#ifdef USE_IRIDESCENCE
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
#endif`,cp=`#ifdef USE_BUMPMAP
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
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,xp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,yp=`#define PI 3.141592653589793
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
} // validated`,_p=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vp=`vec3 transformedNormal = objectNormal;
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
#endif`,Mp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ep=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tp="gl_FragColor = linearToOutputTexel( gl_FragColor );",wp=`
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
}`,Ap=`#ifdef USE_ENVMAP
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
#endif`,Rp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cp=`#ifdef USE_ENVMAP
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
#endif`,Pp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ip=`#ifdef USE_ENVMAP
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
#endif`,Lp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Up=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Np=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Op=`#ifdef USE_GRADIENTMAP
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
}`,Fp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Bp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zp=`uniform bool receiveShadow;
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
#endif`,Vp=`#ifdef USE_ENVMAP
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
#endif`,Gp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yp=`PhysicalMaterial material;
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
#endif`,$p=`struct PhysicalMaterial {
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
}`,Zp=`
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
#endif`,Kp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,em=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,tm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,nm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,im=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rm=`#if defined( USE_POINTS_UV )
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
#endif`,am=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,om=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cm=`#ifdef USE_MORPHNORMALS
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
#endif`,hm=`#ifdef USE_MORPHTARGETS
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
#endif`,um=`#ifdef USE_MORPHTARGETS
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
#endif`,dm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,pm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xm=`#ifdef USE_NORMALMAP
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
#endif`,ym=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_m=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Em=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Am=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Im=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Dm=`float getShadowMask() {
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
}`,Um=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nm=`#ifdef USE_SKINNING
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
#endif`,Om=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fm=`#ifdef USE_SKINNING
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
#endif`,Bm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,km=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vm=`#ifdef USE_TRANSMISSION
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
#endif`,Gm=`#ifdef USE_TRANSMISSION
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
#endif`,Wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ym=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$m=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zm=`uniform sampler2D t2D;
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
}`,Km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eg=`#include <common>
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
}`,tg=`#if DEPTH_PACKING == 3200
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
}`,ng=`#define DISTANCE
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
}`,ig=`#define DISTANCE
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
}`,sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ag=`uniform float scale;
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
}`,og=`uniform vec3 diffuse;
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
}`,lg=`#include <common>
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
}`,cg=`uniform vec3 diffuse;
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
}`,hg=`#define LAMBERT
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
}`,ug=`#define LAMBERT
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
}`,dg=`#define MATCAP
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
}`,fg=`#define MATCAP
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
}`,pg=`#define NORMAL
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
}`,mg=`#define NORMAL
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
}`,gg=`#define PHONG
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
}`,xg=`#define PHONG
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
}`,yg=`#define STANDARD
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
}`,_g=`#define STANDARD
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
}`,vg=`#define TOON
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
}`,Mg=`#define TOON
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
}`,bg=`uniform float size;
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
}`,Sg=`uniform vec3 diffuse;
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
}`,Eg=`#include <common>
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
}`,Tg=`uniform vec3 color;
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
}`,wg=`uniform float rotation;
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
}`,Ag=`uniform vec3 diffuse;
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
}`,Ct={alphahash_fragment:Zf,alphahash_pars_fragment:Kf,alphamap_fragment:Jf,alphamap_pars_fragment:jf,alphatest_fragment:Qf,alphatest_pars_fragment:ep,aomap_fragment:tp,aomap_pars_fragment:np,batching_pars_vertex:ip,batching_vertex:sp,begin_vertex:rp,beginnormal_vertex:ap,bsdfs:op,iridescence_fragment:lp,bumpmap_pars_fragment:cp,clipping_planes_fragment:hp,clipping_planes_pars_fragment:up,clipping_planes_pars_vertex:dp,clipping_planes_vertex:fp,color_fragment:pp,color_pars_fragment:mp,color_pars_vertex:gp,color_vertex:xp,common:yp,cube_uv_reflection_fragment:_p,defaultnormal_vertex:vp,displacementmap_pars_vertex:Mp,displacementmap_vertex:bp,emissivemap_fragment:Sp,emissivemap_pars_fragment:Ep,colorspace_fragment:Tp,colorspace_pars_fragment:wp,envmap_fragment:Ap,envmap_common_pars_fragment:Rp,envmap_pars_fragment:Cp,envmap_pars_vertex:Pp,envmap_physical_pars_fragment:Vp,envmap_vertex:Ip,fog_vertex:Lp,fog_pars_vertex:Dp,fog_fragment:Up,fog_pars_fragment:Np,gradientmap_pars_fragment:Op,lightmap_fragment:Fp,lightmap_pars_fragment:Bp,lights_lambert_fragment:kp,lights_lambert_pars_fragment:Hp,lights_pars_begin:zp,lights_toon_fragment:Gp,lights_toon_pars_fragment:Wp,lights_phong_fragment:Xp,lights_phong_pars_fragment:qp,lights_physical_fragment:Yp,lights_physical_pars_fragment:$p,lights_fragment_begin:Zp,lights_fragment_maps:Kp,lights_fragment_end:Jp,logdepthbuf_fragment:jp,logdepthbuf_pars_fragment:Qp,logdepthbuf_pars_vertex:em,logdepthbuf_vertex:tm,map_fragment:nm,map_pars_fragment:im,map_particle_fragment:sm,map_particle_pars_fragment:rm,metalnessmap_fragment:am,metalnessmap_pars_fragment:om,morphcolor_vertex:lm,morphnormal_vertex:cm,morphtarget_pars_vertex:hm,morphtarget_vertex:um,normal_fragment_begin:dm,normal_fragment_maps:fm,normal_pars_fragment:pm,normal_pars_vertex:mm,normal_vertex:gm,normalmap_pars_fragment:xm,clearcoat_normal_fragment_begin:ym,clearcoat_normal_fragment_maps:_m,clearcoat_pars_fragment:vm,iridescence_pars_fragment:Mm,opaque_fragment:bm,packing:Sm,premultiplied_alpha_fragment:Em,project_vertex:Tm,dithering_fragment:wm,dithering_pars_fragment:Am,roughnessmap_fragment:Rm,roughnessmap_pars_fragment:Cm,shadowmap_pars_fragment:Pm,shadowmap_pars_vertex:Im,shadowmap_vertex:Lm,shadowmask_pars_fragment:Dm,skinbase_vertex:Um,skinning_pars_vertex:Nm,skinning_vertex:Om,skinnormal_vertex:Fm,specularmap_fragment:Bm,specularmap_pars_fragment:km,tonemapping_fragment:Hm,tonemapping_pars_fragment:zm,transmission_fragment:Vm,transmission_pars_fragment:Gm,uv_pars_fragment:Wm,uv_pars_vertex:Xm,uv_vertex:qm,worldpos_vertex:Ym,background_vert:$m,background_frag:Zm,backgroundCube_vert:Km,backgroundCube_frag:Jm,cube_vert:jm,cube_frag:Qm,depth_vert:eg,depth_frag:tg,distanceRGBA_vert:ng,distanceRGBA_frag:ig,equirect_vert:sg,equirect_frag:rg,linedashed_vert:ag,linedashed_frag:og,meshbasic_vert:lg,meshbasic_frag:cg,meshlambert_vert:hg,meshlambert_frag:ug,meshmatcap_vert:dg,meshmatcap_frag:fg,meshnormal_vert:pg,meshnormal_frag:mg,meshphong_vert:gg,meshphong_frag:xg,meshphysical_vert:yg,meshphysical_frag:_g,meshtoon_vert:vg,meshtoon_frag:Mg,points_vert:bg,points_frag:Sg,shadow_vert:Eg,shadow_frag:Tg,sprite_vert:wg,sprite_frag:Ag},Ie={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pt},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0},uvTransform:{value:new Pt}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}}},Ei={basic:{uniforms:Gn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:Ct.meshbasic_vert,fragmentShader:Ct.meshbasic_frag},lambert:{uniforms:Gn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new xt(0)}}]),vertexShader:Ct.meshlambert_vert,fragmentShader:Ct.meshlambert_frag},phong:{uniforms:Gn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:Ct.meshphong_vert,fragmentShader:Ct.meshphong_frag},standard:{uniforms:Gn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag},toon:{uniforms:Gn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new xt(0)}}]),vertexShader:Ct.meshtoon_vert,fragmentShader:Ct.meshtoon_frag},matcap:{uniforms:Gn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:Ct.meshmatcap_vert,fragmentShader:Ct.meshmatcap_frag},points:{uniforms:Gn([Ie.points,Ie.fog]),vertexShader:Ct.points_vert,fragmentShader:Ct.points_frag},dashed:{uniforms:Gn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ct.linedashed_vert,fragmentShader:Ct.linedashed_frag},depth:{uniforms:Gn([Ie.common,Ie.displacementmap]),vertexShader:Ct.depth_vert,fragmentShader:Ct.depth_frag},normal:{uniforms:Gn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:Ct.meshnormal_vert,fragmentShader:Ct.meshnormal_frag},sprite:{uniforms:Gn([Ie.sprite,Ie.fog]),vertexShader:Ct.sprite_vert,fragmentShader:Ct.sprite_frag},background:{uniforms:{uvTransform:{value:new Pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ct.background_vert,fragmentShader:Ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ct.backgroundCube_vert,fragmentShader:Ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ct.cube_vert,fragmentShader:Ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ct.equirect_vert,fragmentShader:Ct.equirect_frag},distanceRGBA:{uniforms:Gn([Ie.common,Ie.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ct.distanceRGBA_vert,fragmentShader:Ct.distanceRGBA_frag},shadow:{uniforms:Gn([Ie.lights,Ie.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:Ct.shadow_vert,fragmentShader:Ct.shadow_frag}};Ei.physical={uniforms:Gn([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pt},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pt},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pt},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pt},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pt},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pt}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag};var Sa={r:0,b:0,g:0};function Rg(i,e,t,n,s,r,a){let o=new xt(0),l=r===!0?0:1,c,h,p=null,d=0,u=null;function y(g,m){let M=!1,_=m.isScene===!0?m.background:null;_&&_.isTexture&&(_=(m.backgroundBlurriness>0?t:e).get(_)),_===null?v(o,l):_&&_.isColor&&(v(_,1),M=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===lo)?(h===void 0&&(h=new Ze(new wn(1,1,1),new Fi({name:"BackgroundCubeMaterial",uniforms:lr(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,I,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=Jt.getTransfer(_.colorSpace)!==an,(p!==_||d!==_.version||u!==i.toneMapping)&&(h.material.needsUpdate=!0,p=_,d=_.version,u=i.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Ze(new Bi(2,2),new Fi({name:"BackgroundMaterial",uniforms:lr(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:is,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=Jt.getTransfer(_.colorSpace)!==an,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(p!==_||d!==_.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,p=_,d=_.version,u=i.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function v(g,m){g.getRGB(Sa,Ou(i)),n.buffers.color.setClear(Sa.r,Sa.g,Sa.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(g,m=1){o.set(g),l=m,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,v(o,l)},render:y}}function Cg(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=g(null),c=l,h=!1;function p(P,N,G,re,ne){let Q=!1;if(a){let B=v(re,G,N);c!==B&&(c=B,u(c.object)),Q=m(P,re,G,ne),Q&&M(P,re,G,ne)}else{let B=N.wireframe===!0;(c.geometry!==re.id||c.program!==G.id||c.wireframe!==B)&&(c.geometry=re.id,c.program=G.id,c.wireframe=B,Q=!0)}ne!==null&&t.update(ne,i.ELEMENT_ARRAY_BUFFER),(Q||h)&&(h=!1,X(P,N,G,re),ne!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(ne).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function u(P){return n.isWebGL2?i.bindVertexArray(P):r.bindVertexArrayOES(P)}function y(P){return n.isWebGL2?i.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function v(P,N,G){let re=G.wireframe===!0,ne=o[P.id];ne===void 0&&(ne={},o[P.id]=ne);let Q=ne[N.id];Q===void 0&&(Q={},ne[N.id]=Q);let B=Q[re];return B===void 0&&(B=g(d()),Q[re]=B),B}function g(P){let N=[],G=[],re=[];for(let ne=0;ne<s;ne++)N[ne]=0,G[ne]=0,re[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:G,attributeDivisors:re,object:P,attributes:{},index:null}}function m(P,N,G,re){let ne=c.attributes,Q=N.attributes,B=0,de=G.getAttributes();for(let oe in de)if(de[oe].location>=0){let ue=ne[oe],Le=Q[oe];if(Le===void 0&&(oe==="instanceMatrix"&&P.instanceMatrix&&(Le=P.instanceMatrix),oe==="instanceColor"&&P.instanceColor&&(Le=P.instanceColor)),ue===void 0||ue.attribute!==Le||Le&&ue.data!==Le.data)return!0;B++}return c.attributesNum!==B||c.index!==re}function M(P,N,G,re){let ne={},Q=N.attributes,B=0,de=G.getAttributes();for(let oe in de)if(de[oe].location>=0){let ue=Q[oe];ue===void 0&&(oe==="instanceMatrix"&&P.instanceMatrix&&(ue=P.instanceMatrix),oe==="instanceColor"&&P.instanceColor&&(ue=P.instanceColor));let Le={};Le.attribute=ue,ue&&ue.data&&(Le.data=ue.data),ne[oe]=Le,B++}c.attributes=ne,c.attributesNum=B,c.index=re}function _(){let P=c.newAttributes;for(let N=0,G=P.length;N<G;N++)P[N]=0}function A(P){D(P,0)}function D(P,N){let G=c.newAttributes,re=c.enabledAttributes,ne=c.attributeDivisors;G[P]=1,re[P]===0&&(i.enableVertexAttribArray(P),re[P]=1),ne[P]!==N&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,N),ne[P]=N)}function I(){let P=c.newAttributes,N=c.enabledAttributes;for(let G=0,re=N.length;G<re;G++)N[G]!==P[G]&&(i.disableVertexAttribArray(G),N[G]=0)}function L(P,N,G,re,ne,Q,B){B===!0?i.vertexAttribIPointer(P,N,G,ne,Q):i.vertexAttribPointer(P,N,G,re,ne,Q)}function X(P,N,G,re){if(n.isWebGL2===!1&&(P.isInstancedMesh||re.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();let ne=re.attributes,Q=G.getAttributes(),B=N.defaultAttributeValues;for(let de in Q){let oe=Q[de];if(oe.location>=0){let W=ne[de];if(W===void 0&&(de==="instanceMatrix"&&P.instanceMatrix&&(W=P.instanceMatrix),de==="instanceColor"&&P.instanceColor&&(W=P.instanceColor)),W!==void 0){let ue=W.normalized,Le=W.itemSize,Re=t.get(W);if(Re===void 0)continue;let We=Re.buffer,pt=Re.type,tt=Re.bytesPerElement,je=n.isWebGL2===!0&&(pt===i.INT||pt===i.UNSIGNED_INT||W.gpuType===Eu);if(W.isInterleavedBufferAttribute){let mt=W.data,K=mt.stride,un=W.offset;if(mt.isInstancedInterleavedBuffer){for(let $e=0;$e<oe.locationSize;$e++)D(oe.location+$e,mt.meshPerAttribute);P.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let $e=0;$e<oe.locationSize;$e++)A(oe.location+$e);i.bindBuffer(i.ARRAY_BUFFER,We);for(let $e=0;$e<oe.locationSize;$e++)L(oe.location+$e,Le/oe.locationSize,pt,ue,K*tt,(un+Le/oe.locationSize*$e)*tt,je)}else{if(W.isInstancedBufferAttribute){for(let mt=0;mt<oe.locationSize;mt++)D(oe.location+mt,W.meshPerAttribute);P.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let mt=0;mt<oe.locationSize;mt++)A(oe.location+mt);i.bindBuffer(i.ARRAY_BUFFER,We);for(let mt=0;mt<oe.locationSize;mt++)L(oe.location+mt,Le/oe.locationSize,pt,ue,Le*tt,Le/oe.locationSize*mt*tt,je)}}else if(B!==void 0){let ue=B[de];if(ue!==void 0)switch(ue.length){case 2:i.vertexAttrib2fv(oe.location,ue);break;case 3:i.vertexAttrib3fv(oe.location,ue);break;case 4:i.vertexAttrib4fv(oe.location,ue);break;default:i.vertexAttrib1fv(oe.location,ue)}}}}I()}function b(){ae();for(let P in o){let N=o[P];for(let G in N){let re=N[G];for(let ne in re)y(re[ne].object),delete re[ne];delete N[G]}delete o[P]}}function R(P){if(o[P.id]===void 0)return;let N=o[P.id];for(let G in N){let re=N[G];for(let ne in re)y(re[ne].object),delete re[ne];delete N[G]}delete o[P.id]}function q(P){for(let N in o){let G=o[N];if(G[P.id]===void 0)continue;let re=G[P.id];for(let ne in re)y(re[ne].object),delete re[ne];delete G[P.id]}}function ae(){be(),h=!0,c!==l&&(c=l,u(c.object))}function be(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:ae,resetDefaultState:be,dispose:b,releaseStatesOfGeometry:R,releaseStatesOfProgram:q,initAttributes:_,enableAttribute:A,disableUnusedAttributes:I}}function Pg(i,e,t,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,p){i.drawArrays(r,h,p),t.update(p,r,1)}function l(h,p,d){if(d===0)return;let u,y;if(s)u=i,y="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[y](r,h,p,d),t.update(p,r,d)}function c(h,p,d){if(d===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let y=0;y<d;y++)this.render(h[y],p[y]);else{u.multiDrawArraysWEBGL(r,h,0,p,0,d);let y=0;for(let v=0;v<d;v++)y+=p[v];t.update(y,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Ig(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let L=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),m=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,A=a||e.has("OES_texture_float"),D=_&&A,I=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:p,maxVertexTextures:d,maxTextureSize:u,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:g,maxVaryings:m,maxFragmentUniforms:M,vertexTextures:_,floatFragmentTextures:A,floatVertexTextures:D,maxSamples:I}}function Lg(i){let e=this,t=null,n=0,s=!1,r=!1,a=new yi,o=new Pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){let u=p.length!==0||d||n!==0||s;return s=d,n=p.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,d){t=h(p,d,0)},this.setState=function(p,d,u){let y=p.clippingPlanes,v=p.clipIntersection,g=p.clipShadows,m=i.get(p);if(!s||y===null||y.length===0||r&&!g)r?h(null):c();else{let M=r?0:n,_=M*4,A=m.clippingState||null;l.value=A,A=h(y,d,_,u);for(let D=0;D!==_;++D)A[D]=t[D];m.clippingState=A,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(p,d,u,y){let v=p!==null?p.length:0,g=null;if(v!==0){if(g=l.value,y!==!0||g===null){let m=u+v*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let _=0,A=u;_!==v;++_,A+=4)a.copy(p[_]).applyMatrix4(M,o),a.normal.toArray(g,A),g[A+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function Dg(i){let e=new WeakMap;function t(a,o){return o===pl?a.mapping=sr:o===ml&&(a.mapping=rr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===pl||o===ml)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Sl(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var qa=class extends Wa{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},js=4,zh=[.125,.215,.35,.446,.526,.582],ys=20,nl=new qa,Vh=new xt,il=null,sl=0,rl=0,gs=(1+Math.sqrt(5))/2,Ks=1/gs,Gh=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,gs,Ks),new F(0,gs,-Ks),new F(Ks,0,gs),new F(-Ks,0,gs),new F(gs,Ks,0),new F(-gs,Ks,0)],Ya=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){il=this._renderer.getRenderTarget(),sl=this._renderer.getActiveCubeFace(),rl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(il,sl,rl),e.scissorTest=!1,Ea(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===sr||e.mapping===rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),il=this._renderer.getRenderTarget(),sl=this._renderer.getActiveCubeFace(),rl=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:oi,minFilter:oi,generateMipmaps:!1,type:Ur,format:vi,colorSpace:Ni,depthBuffer:!1},s=Wh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wh(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ug(r)),this._blurMaterial=Ng(r,e,t)}return s}_compileMaterial(e){let t=new Ze(this._lodPlanes[0],e);this._renderer.compile(t,nl)}_sceneToCubeUV(e,t,n,s){let o=new Xn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,d=h.toneMapping;h.getClearColor(Vh),h.toneMapping=ts,h.autoClear=!1;let u=new vn({name:"PMREM.Background",side:ei,depthWrite:!1,depthTest:!1}),y=new Ze(new wn,u),v=!1,g=e.background;g?g.isColor&&(u.color.copy(g),e.background=null,v=!0):(u.color.copy(Vh),v=!0);for(let m=0;m<6;m++){let M=m%3;M===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):M===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));let _=this._cubeSize;Ea(s,M*_,m>2?_:0,_,_),h.setRenderTarget(s),v&&h.render(y,o),h.render(e,o)}y.geometry.dispose(),y.material.dispose(),h.toneMapping=d,h.autoClear=p,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===sr||e.mapping===rr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ze(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Ea(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,nl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Gh[(s-1)%Gh.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,p=new Ze(this._lodPlanes[s],c),d=c.uniforms,u=this._sizeLods[n]-1,y=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*ys-1),v=r/y,g=isFinite(r)?1+Math.floor(h*v):ys;g>ys&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ys}`);let m=[],M=0;for(let L=0;L<ys;++L){let X=L/v,b=Math.exp(-X*X/2);m.push(b),L===0?M+=b:L<g&&(M+=2*b)}for(let L=0;L<m.length;L++)m[L]=m[L]/M;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:_}=this;d.dTheta.value=y,d.mipInt.value=_-n;let A=this._sizeLods[s],D=3*A*(s>_-js?s-_+js:0),I=4*(this._cubeSize-A);Ea(t,D,I,3*A,2*A),l.setRenderTarget(t),l.render(p,nl)}};function Ug(i){let e=[],t=[],n=[],s=i,r=i-js+1+zh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-js?l=zh[a-i+js-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,p=1+c,d=[h,h,p,h,p,p,h,h,p,p,h,p],u=6,y=6,v=3,g=2,m=1,M=new Float32Array(v*y*u),_=new Float32Array(g*y*u),A=new Float32Array(m*y*u);for(let I=0;I<u;I++){let L=I%3*2/3-1,X=I>2?0:-1,b=[L,X,0,L+2/3,X,0,L+2/3,X+1,0,L,X,0,L+2/3,X+1,0,L,X+1,0];M.set(b,v*y*I),_.set(d,g*y*I);let R=[I,I,I,I,I,I];A.set(R,m*y*I)}let D=new ni;D.setAttribute("position",new ti(M,v)),D.setAttribute("uv",new ti(_,g)),D.setAttribute("faceIndex",new ti(A,m)),e.push(D),s>js&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Wh(i,e,t){let n=new Oi(i,e,t);return n.texture.mapping=lo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ea(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Ng(i,e,t){let n=new Float32Array(ys),s=new F(0,1,0);return new Fi({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:lc(),fragmentShader:`

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
		`,blending:es,depthTest:!1,depthWrite:!1})}function Xh(){return new Fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lc(),fragmentShader:`

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
		`,blending:es,depthTest:!1,depthWrite:!1})}function qh(){return new Fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:es,depthTest:!1,depthWrite:!1})}function lc(){return`

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
	`}function Og(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===pl||l===ml,h=l===sr||l===rr;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let p=e.get(o);return t===null&&(t=new Ya(i)),p=c?t.fromEquirectangular(o,p):t.fromCubemap(o,p),e.set(o,p),p.texture}else{if(e.has(o))return e.get(o).texture;{let p=o.image;if(c&&p&&p.height>0||h&&p&&s(p)){t===null&&(t=new Ya(i));let d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Fg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Bg(i,e,t,n){let s={},r=new WeakMap;function a(p){let d=p.target;d.index!==null&&e.remove(d.index);for(let y in d.attributes)e.remove(d.attributes[y]);for(let y in d.morphAttributes){let v=d.morphAttributes[y];for(let g=0,m=v.length;g<m;g++)e.remove(v[g])}d.removeEventListener("dispose",a),delete s[d.id];let u=r.get(d);u&&(e.remove(u),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(p,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(p){let d=p.attributes;for(let y in d)e.update(d[y],i.ARRAY_BUFFER);let u=p.morphAttributes;for(let y in u){let v=u[y];for(let g=0,m=v.length;g<m;g++)e.update(v[g],i.ARRAY_BUFFER)}}function c(p){let d=[],u=p.index,y=p.attributes.position,v=0;if(u!==null){let M=u.array;v=u.version;for(let _=0,A=M.length;_<A;_+=3){let D=M[_+0],I=M[_+1],L=M[_+2];d.push(D,I,I,L,L,D)}}else if(y!==void 0){let M=y.array;v=y.version;for(let _=0,A=M.length/3-1;_<A;_+=3){let D=_+0,I=_+1,L=_+2;d.push(D,I,I,L,L,D)}}else return;let g=new(Uu(d)?Ga:Va)(d,1);g.version=v;let m=r.get(p);m&&e.remove(m),r.set(p,g)}function h(p){let d=r.get(p);if(d){let u=p.index;u!==null&&d.version<u.version&&c(p)}else c(p);return r.get(p)}return{get:o,update:l,getWireframeAttribute:h}}function kg(i,e,t,n){let s=n.isWebGL2,r;function a(u){r=u}let o,l;function c(u){o=u.type,l=u.bytesPerElement}function h(u,y){i.drawElements(r,y,o,u*l),t.update(y,r,1)}function p(u,y,v){if(v===0)return;let g,m;if(s)g=i,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](r,y,o,u*l,v),t.update(y,r,v)}function d(u,y,v){if(v===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<v;m++)this.render(u[m]/l,y[m]);else{g.multiDrawElementsWEBGL(r,y,0,o,u,0,v);let m=0;for(let M=0;M<v;M++)m+=y[M];t.update(m,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=p,this.renderMultiDraw=d}function Hg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function zg(i,e){return i[0]-e[0]}function Vg(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Gg(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,a=new Nn,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,p){let d=c.morphTargetInfluences;if(e.isWebGL2===!0){let u=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,y=u!==void 0?u.length:0,v=r.get(h);if(v===void 0||v.count!==y){let P=function(){ae.dispose(),r.delete(h),h.removeEventListener("dispose",P)};v!==void 0&&v.texture.dispose();let M=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,A=h.morphAttributes.color!==void 0,D=h.morphAttributes.position||[],I=h.morphAttributes.normal||[],L=h.morphAttributes.color||[],X=0;M===!0&&(X=1),_===!0&&(X=2),A===!0&&(X=3);let b=h.attributes.position.count*X,R=1;b>e.maxTextureSize&&(R=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let q=new Float32Array(b*R*4*y),ae=new Ha(q,b,R,y);ae.type=Qi,ae.needsUpdate=!0;let be=X*4;for(let N=0;N<y;N++){let G=D[N],re=I[N],ne=L[N],Q=b*R*4*N;for(let B=0;B<G.count;B++){let de=B*be;M===!0&&(a.fromBufferAttribute(G,B),q[Q+de+0]=a.x,q[Q+de+1]=a.y,q[Q+de+2]=a.z,q[Q+de+3]=0),_===!0&&(a.fromBufferAttribute(re,B),q[Q+de+4]=a.x,q[Q+de+5]=a.y,q[Q+de+6]=a.z,q[Q+de+7]=0),A===!0&&(a.fromBufferAttribute(ne,B),q[Q+de+8]=a.x,q[Q+de+9]=a.y,q[Q+de+10]=a.z,q[Q+de+11]=ne.itemSize===4?a.w:1)}}v={count:y,texture:ae,size:new He(b,R)},r.set(h,v),h.addEventListener("dispose",P)}let g=0;for(let M=0;M<d.length;M++)g+=d[M];let m=h.morphTargetsRelative?1:1-g;p.getUniforms().setValue(i,"morphTargetBaseInfluence",m),p.getUniforms().setValue(i,"morphTargetInfluences",d),p.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),p.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}else{let u=d===void 0?0:d.length,y=n[h.id];if(y===void 0||y.length!==u){y=[];for(let _=0;_<u;_++)y[_]=[_,0];n[h.id]=y}for(let _=0;_<u;_++){let A=y[_];A[0]=_,A[1]=d[_]}y.sort(Vg);for(let _=0;_<8;_++)_<u&&y[_][1]?(o[_][0]=y[_][0],o[_][1]=y[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(zg);let v=h.morphAttributes.position,g=h.morphAttributes.normal,m=0;for(let _=0;_<8;_++){let A=o[_],D=A[0],I=A[1];D!==Number.MAX_SAFE_INTEGER&&I?(v&&h.getAttribute("morphTarget"+_)!==v[D]&&h.setAttribute("morphTarget"+_,v[D]),g&&h.getAttribute("morphNormal"+_)!==g[D]&&h.setAttribute("morphNormal"+_,g[D]),s[_]=I,m+=I):(v&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),g&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),s[_]=0)}let M=h.morphTargetsRelative?1:1-m;p.getUniforms().setValue(i,"morphTargetBaseInfluence",M),p.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Wg(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,p=e.get(l,h);if(s.get(p)!==c&&(e.update(p),s.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return p}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var $a=class extends hi{constructor(e,t,n,s,r,a,o,l,c,h){if(h=h!==void 0?h:vs,h!==vs&&h!==ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===vs&&(n=ji),n===void 0&&h===ar&&(n=_s),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Wn,this.minFilter=l!==void 0?l:Wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Bu=new hi,ku=new $a(1,1);ku.compareFunction=Du;var Hu=new Ha,zu=new Ml,Vu=new Xa,Yh=[],$h=[],Zh=new Float32Array(16),Kh=new Float32Array(9),Jh=new Float32Array(4);function fr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Yh[s];if(r===void 0&&(r=new Float32Array(s),Yh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function An(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Rn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ho(i,e){let t=$h[e];t===void 0&&(t=new Int32Array(e),$h[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Xg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function qg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(An(t,e))return;i.uniform2fv(this.addr,e),Rn(t,e)}}function Yg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(An(t,e))return;i.uniform3fv(this.addr,e),Rn(t,e)}}function $g(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(An(t,e))return;i.uniform4fv(this.addr,e),Rn(t,e)}}function Zg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(An(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Rn(t,e)}else{if(An(t,n))return;Jh.set(n),i.uniformMatrix2fv(this.addr,!1,Jh),Rn(t,n)}}function Kg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(An(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Rn(t,e)}else{if(An(t,n))return;Kh.set(n),i.uniformMatrix3fv(this.addr,!1,Kh),Rn(t,n)}}function Jg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(An(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Rn(t,e)}else{if(An(t,n))return;Zh.set(n),i.uniformMatrix4fv(this.addr,!1,Zh),Rn(t,n)}}function jg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Qg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(An(t,e))return;i.uniform2iv(this.addr,e),Rn(t,e)}}function e0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(An(t,e))return;i.uniform3iv(this.addr,e),Rn(t,e)}}function t0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(An(t,e))return;i.uniform4iv(this.addr,e),Rn(t,e)}}function n0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function i0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(An(t,e))return;i.uniform2uiv(this.addr,e),Rn(t,e)}}function s0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(An(t,e))return;i.uniform3uiv(this.addr,e),Rn(t,e)}}function r0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(An(t,e))return;i.uniform4uiv(this.addr,e),Rn(t,e)}}function a0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?ku:Bu;t.setTexture2D(e||r,s)}function o0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||zu,s)}function l0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Vu,s)}function c0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Hu,s)}function h0(i){switch(i){case 5126:return Xg;case 35664:return qg;case 35665:return Yg;case 35666:return $g;case 35674:return Zg;case 35675:return Kg;case 35676:return Jg;case 5124:case 35670:return jg;case 35667:case 35671:return Qg;case 35668:case 35672:return e0;case 35669:case 35673:return t0;case 5125:return n0;case 36294:return i0;case 36295:return s0;case 36296:return r0;case 35678:case 36198:case 36298:case 36306:case 35682:return a0;case 35679:case 36299:case 36307:return o0;case 35680:case 36300:case 36308:case 36293:return l0;case 36289:case 36303:case 36311:case 36292:return c0}}function u0(i,e){i.uniform1fv(this.addr,e)}function d0(i,e){let t=fr(e,this.size,2);i.uniform2fv(this.addr,t)}function f0(i,e){let t=fr(e,this.size,3);i.uniform3fv(this.addr,t)}function p0(i,e){let t=fr(e,this.size,4);i.uniform4fv(this.addr,t)}function m0(i,e){let t=fr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function g0(i,e){let t=fr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function x0(i,e){let t=fr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function y0(i,e){i.uniform1iv(this.addr,e)}function _0(i,e){i.uniform2iv(this.addr,e)}function v0(i,e){i.uniform3iv(this.addr,e)}function M0(i,e){i.uniform4iv(this.addr,e)}function b0(i,e){i.uniform1uiv(this.addr,e)}function S0(i,e){i.uniform2uiv(this.addr,e)}function E0(i,e){i.uniform3uiv(this.addr,e)}function T0(i,e){i.uniform4uiv(this.addr,e)}function w0(i,e,t){let n=this.cache,s=e.length,r=ho(t,s);An(n,r)||(i.uniform1iv(this.addr,r),Rn(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Bu,r[a])}function A0(i,e,t){let n=this.cache,s=e.length,r=ho(t,s);An(n,r)||(i.uniform1iv(this.addr,r),Rn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||zu,r[a])}function R0(i,e,t){let n=this.cache,s=e.length,r=ho(t,s);An(n,r)||(i.uniform1iv(this.addr,r),Rn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Vu,r[a])}function C0(i,e,t){let n=this.cache,s=e.length,r=ho(t,s);An(n,r)||(i.uniform1iv(this.addr,r),Rn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Hu,r[a])}function P0(i){switch(i){case 5126:return u0;case 35664:return d0;case 35665:return f0;case 35666:return p0;case 35674:return m0;case 35675:return g0;case 35676:return x0;case 5124:case 35670:return y0;case 35667:case 35671:return _0;case 35668:case 35672:return v0;case 35669:case 35673:return M0;case 5125:return b0;case 36294:return S0;case 36295:return E0;case 36296:return T0;case 35678:case 36198:case 36298:case 36306:case 35682:return w0;case 35679:case 36299:case 36307:return A0;case 35680:case 36300:case 36308:case 36293:return R0;case 36289:case 36303:case 36311:case 36292:return C0}}var El=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=h0(t.type)}},Tl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=P0(t.type)}},wl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},al=/(\w+)(\])?(\[|\.)?/g;function jh(i,e){i.seq.push(e),i.map[e.id]=e}function I0(i,e,t){let n=i.name,s=n.length;for(al.lastIndex=0;;){let r=al.exec(n),a=al.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){jh(t,c===void 0?new El(o,i,e):new Tl(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new wl(o),jh(t,p)),t=p}}}var ir=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);I0(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Qh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var L0=37297,D0=0;function U0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function N0(i){let e=Jt.getPrimaries(Jt.workingColorSpace),t=Jt.getPrimaries(i),n;switch(e===t?n="":e===Na&&t===Ua?n="LinearDisplayP3ToLinearSRGB":e===Ua&&t===Na&&(n="LinearSRGBToLinearDisplayP3"),i){case Ni:case co:return[n,"LinearTransferOETF"];case Fn:case oc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function eu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+U0(i.getShaderSource(e),a)}else return s}function O0(i,e){let t=N0(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function F0(i,e){let t;switch(e){case ef:t="Linear";break;case tf:t="Reinhard";break;case nf:t="OptimizedCineon";break;case sf:t="ACESFilmic";break;case af:t="AgX";break;case rf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function B0(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Qs).join(`
`)}function k0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Qs).join(`
`)}function H0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function z0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Qs(i){return i!==""}function tu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var V0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Al(i){return i.replace(V0,W0)}var G0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function W0(i,e){let t=Ct[e];if(t===void 0){let n=G0.get(e);if(n!==void 0)t=Ct[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Al(t)}var X0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function iu(i){return i.replace(X0,q0)}function q0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function su(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Y0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Mu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===rc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Di&&(e="SHADOWMAP_TYPE_VSM"),e}function $0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case sr:case rr:e="ENVMAP_TYPE_CUBE";break;case lo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Z0(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case rr:e="ENVMAP_MODE_REFRACTION";break}return e}function K0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case bu:e="ENVMAP_BLENDING_MULTIPLY";break;case jd:e="ENVMAP_BLENDING_MIX";break;case Qd:e="ENVMAP_BLENDING_ADD";break}return e}function J0(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function j0(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Y0(t),c=$0(t),h=Z0(t),p=K0(t),d=J0(t),u=t.isWebGL2?"":B0(t),y=k0(t),v=H0(r),g=s.createProgram(),m,M,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Qs).join(`
`),m.length>0&&(m+=`
`),M=[u,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Qs).join(`
`),M.length>0&&(M+=`
`)):(m=[su(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),M=[u,su(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ts?"#define TONE_MAPPING":"",t.toneMapping!==ts?Ct.tonemapping_pars_fragment:"",t.toneMapping!==ts?F0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ct.colorspace_pars_fragment,O0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qs).join(`
`)),a=Al(a),a=tu(a,t),a=nu(a,t),o=Al(o),o=tu(o,t),o=nu(o,t),a=iu(a),o=iu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[y,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Sh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);let A=_+m+a,D=_+M+o,I=Qh(s,s.VERTEX_SHADER,A),L=Qh(s,s.FRAGMENT_SHADER,D);s.attachShader(g,I),s.attachShader(g,L),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function X(ae){if(i.debug.checkShaderErrors){let be=s.getProgramInfoLog(g).trim(),P=s.getShaderInfoLog(I).trim(),N=s.getShaderInfoLog(L).trim(),G=!0,re=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,I,L);else{let ne=eu(s,I,"vertex"),Q=eu(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Program Info Log: `+be+`
`+ne+`
`+Q)}else be!==""?console.warn("THREE.WebGLProgram: Program Info Log:",be):(P===""||N==="")&&(re=!1);re&&(ae.diagnostics={runnable:G,programLog:be,vertexShader:{log:P,prefix:m},fragmentShader:{log:N,prefix:M}})}s.deleteShader(I),s.deleteShader(L),b=new ir(s,g),R=z0(s,g)}let b;this.getUniforms=function(){return b===void 0&&X(this),b};let R;this.getAttributes=function(){return R===void 0&&X(this),R};let q=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=s.getProgramParameter(g,L0)),q},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=D0++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=I,this.fragmentShader=L,this}var Q0=0,Rl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Cl(e),t.set(e,n)),n}},Cl=class{constructor(e){this.id=Q0++,this.code=e,this.usedTimes=0}};function ex(i,e,t,n,s,r,a){let o=new Or,l=new Rl,c=[],h=s.isWebGL2,p=s.logarithmicDepthBuffer,d=s.vertexTextures,u=s.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return b===0?"uv":`uv${b}`}function g(b,R,q,ae,be){let P=ae.fog,N=be.geometry,G=b.isMeshStandardMaterial?ae.environment:null,re=(b.isMeshStandardMaterial?t:e).get(b.envMap||G),ne=re&&re.mapping===lo?re.image.height:null,Q=y[b.type];b.precision!==null&&(u=s.getMaxPrecision(b.precision),u!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",u,"instead."));let B=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,de=B!==void 0?B.length:0,oe=0;N.morphAttributes.position!==void 0&&(oe=1),N.morphAttributes.normal!==void 0&&(oe=2),N.morphAttributes.color!==void 0&&(oe=3);let W,ue,Le,Re;if(Q){let xn=Ei[Q];W=xn.vertexShader,ue=xn.fragmentShader}else W=b.vertexShader,ue=b.fragmentShader,l.update(b),Le=l.getVertexShaderID(b),Re=l.getFragmentShaderID(b);let We=i.getRenderTarget(),pt=be.isInstancedMesh===!0,tt=be.isBatchedMesh===!0,je=!!b.map,mt=!!b.matcap,K=!!re,un=!!b.aoMap,$e=!!b.lightMap,rt=!!b.bumpMap,Be=!!b.normalMap,sn=!!b.displacementMap,bt=!!b.emissiveMap,C=!!b.metalnessMap,S=!!b.roughnessMap,ee=b.anisotropy>0,Te=b.clearcoat>0,ve=b.iridescence>0,we=b.sheen>0,Xe=b.transmission>0,Ne=ee&&!!b.anisotropyMap,Ve=Te&&!!b.clearcoatMap,at=Te&&!!b.clearcoatNormalMap,St=Te&&!!b.clearcoatRoughnessMap,xe=ve&&!!b.iridescenceMap,Vt=ve&&!!b.iridescenceThicknessMap,Tt=we&&!!b.sheenColorMap,ct=we&&!!b.sheenRoughnessMap,Ke=!!b.specularMap,ze=!!b.specularColorMap,ot=!!b.specularIntensityMap,ht=Xe&&!!b.transmissionMap,yt=Xe&&!!b.thicknessMap,Qe=!!b.gradientMap,Ce=!!b.alphaMap,O=b.alphaTest>0,Pe=!!b.alphaHash,De=!!b.extensions,ut=!!N.attributes.uv1,et=!!N.attributes.uv2,Ft=!!N.attributes.uv3,Ht=ts;return b.toneMapped&&(We===null||We.isXRRenderTarget===!0)&&(Ht=i.toneMapping),{isWebGL2:h,shaderID:Q,shaderType:b.type,shaderName:b.name,vertexShader:W,fragmentShader:ue,defines:b.defines,customVertexShaderID:Le,customFragmentShaderID:Re,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:u,batching:tt,instancing:pt,instancingColor:pt&&be.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:We===null?i.outputColorSpace:We.isXRRenderTarget===!0?We.texture.colorSpace:Ni,map:je,matcap:mt,envMap:K,envMapMode:K&&re.mapping,envMapCubeUVHeight:ne,aoMap:un,lightMap:$e,bumpMap:rt,normalMap:Be,displacementMap:d&&sn,emissiveMap:bt,normalMapObjectSpace:Be&&b.normalMapType===yf,normalMapTangentSpace:Be&&b.normalMapType===Lu,metalnessMap:C,roughnessMap:S,anisotropy:ee,anisotropyMap:Ne,clearcoat:Te,clearcoatMap:Ve,clearcoatNormalMap:at,clearcoatRoughnessMap:St,iridescence:ve,iridescenceMap:xe,iridescenceThicknessMap:Vt,sheen:we,sheenColorMap:Tt,sheenRoughnessMap:ct,specularMap:Ke,specularColorMap:ze,specularIntensityMap:ot,transmission:Xe,transmissionMap:ht,thicknessMap:yt,gradientMap:Qe,opaque:b.transparent===!1&&b.blending===tr,alphaMap:Ce,alphaTest:O,alphaHash:Pe,combine:b.combine,mapUv:je&&v(b.map.channel),aoMapUv:un&&v(b.aoMap.channel),lightMapUv:$e&&v(b.lightMap.channel),bumpMapUv:rt&&v(b.bumpMap.channel),normalMapUv:Be&&v(b.normalMap.channel),displacementMapUv:sn&&v(b.displacementMap.channel),emissiveMapUv:bt&&v(b.emissiveMap.channel),metalnessMapUv:C&&v(b.metalnessMap.channel),roughnessMapUv:S&&v(b.roughnessMap.channel),anisotropyMapUv:Ne&&v(b.anisotropyMap.channel),clearcoatMapUv:Ve&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:at&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:Vt&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:ct&&v(b.sheenRoughnessMap.channel),specularMapUv:Ke&&v(b.specularMap.channel),specularColorMapUv:ze&&v(b.specularColorMap.channel),specularIntensityMapUv:ot&&v(b.specularIntensityMap.channel),transmissionMapUv:ht&&v(b.transmissionMap.channel),thicknessMapUv:yt&&v(b.thicknessMap.channel),alphaMapUv:Ce&&v(b.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Be||ee),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:ut,vertexUv2s:et,vertexUv3s:Ft,pointsUvs:be.isPoints===!0&&!!N.attributes.uv&&(je||Ce),fog:!!P,useFog:b.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:be.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:oe,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&q.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ht,useLegacyLights:i._useLegacyLights,decodeVideoTexture:je&&b.map.isVideoTexture===!0&&Jt.getTransfer(b.map.colorSpace)===an,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===_n,flipSided:b.side===ei,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:De&&b.extensions.derivatives===!0,extensionFragDepth:De&&b.extensions.fragDepth===!0,extensionDrawBuffers:De&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:De&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:De&&b.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function m(b){let R=[];if(b.shaderID?R.push(b.shaderID):(R.push(b.customVertexShaderID),R.push(b.customFragmentShaderID)),b.defines!==void 0)for(let q in b.defines)R.push(q),R.push(b.defines[q]);return b.isRawShaderMaterial===!1&&(M(R,b),_(R,b),R.push(i.outputColorSpace)),R.push(b.customProgramCacheKey),R.join()}function M(b,R){b.push(R.precision),b.push(R.outputColorSpace),b.push(R.envMapMode),b.push(R.envMapCubeUVHeight),b.push(R.mapUv),b.push(R.alphaMapUv),b.push(R.lightMapUv),b.push(R.aoMapUv),b.push(R.bumpMapUv),b.push(R.normalMapUv),b.push(R.displacementMapUv),b.push(R.emissiveMapUv),b.push(R.metalnessMapUv),b.push(R.roughnessMapUv),b.push(R.anisotropyMapUv),b.push(R.clearcoatMapUv),b.push(R.clearcoatNormalMapUv),b.push(R.clearcoatRoughnessMapUv),b.push(R.iridescenceMapUv),b.push(R.iridescenceThicknessMapUv),b.push(R.sheenColorMapUv),b.push(R.sheenRoughnessMapUv),b.push(R.specularMapUv),b.push(R.specularColorMapUv),b.push(R.specularIntensityMapUv),b.push(R.transmissionMapUv),b.push(R.thicknessMapUv),b.push(R.combine),b.push(R.fogExp2),b.push(R.sizeAttenuation),b.push(R.morphTargetsCount),b.push(R.morphAttributeCount),b.push(R.numDirLights),b.push(R.numPointLights),b.push(R.numSpotLights),b.push(R.numSpotLightMaps),b.push(R.numHemiLights),b.push(R.numRectAreaLights),b.push(R.numDirLightShadows),b.push(R.numPointLightShadows),b.push(R.numSpotLightShadows),b.push(R.numSpotLightShadowsWithMaps),b.push(R.numLightProbes),b.push(R.shadowMapType),b.push(R.toneMapping),b.push(R.numClippingPlanes),b.push(R.numClipIntersection),b.push(R.depthPacking)}function _(b,R){o.disableAll(),R.isWebGL2&&o.enable(0),R.supportsVertexTextures&&o.enable(1),R.instancing&&o.enable(2),R.instancingColor&&o.enable(3),R.matcap&&o.enable(4),R.envMap&&o.enable(5),R.normalMapObjectSpace&&o.enable(6),R.normalMapTangentSpace&&o.enable(7),R.clearcoat&&o.enable(8),R.iridescence&&o.enable(9),R.alphaTest&&o.enable(10),R.vertexColors&&o.enable(11),R.vertexAlphas&&o.enable(12),R.vertexUv1s&&o.enable(13),R.vertexUv2s&&o.enable(14),R.vertexUv3s&&o.enable(15),R.vertexTangents&&o.enable(16),R.anisotropy&&o.enable(17),R.alphaHash&&o.enable(18),R.batching&&o.enable(19),b.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.skinning&&o.enable(4),R.morphTargets&&o.enable(5),R.morphNormals&&o.enable(6),R.morphColors&&o.enable(7),R.premultipliedAlpha&&o.enable(8),R.shadowMapEnabled&&o.enable(9),R.useLegacyLights&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),b.push(o.mask)}function A(b){let R=y[b.type],q;if(R){let ae=Ei[R];q=Gf.clone(ae.uniforms)}else q=b.uniforms;return q}function D(b,R){let q;for(let ae=0,be=c.length;ae<be;ae++){let P=c[ae];if(P.cacheKey===R){q=P,++q.usedTimes;break}}return q===void 0&&(q=new j0(i,R,b,r),c.push(q)),q}function I(b){if(--b.usedTimes===0){let R=c.indexOf(b);c[R]=c[c.length-1],c.pop(),b.destroy()}}function L(b){l.remove(b)}function X(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:A,acquireProgram:D,releaseProgram:I,releaseShaderCache:L,programs:c,dispose:X}}function tx(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function nx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ru(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function au(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(p,d,u,y,v,g){let m=i[e];return m===void 0?(m={id:p.id,object:p,geometry:d,material:u,groupOrder:y,renderOrder:p.renderOrder,z:v,group:g},i[e]=m):(m.id=p.id,m.object=p,m.geometry=d,m.material=u,m.groupOrder=y,m.renderOrder=p.renderOrder,m.z=v,m.group=g),e++,m}function o(p,d,u,y,v,g){let m=a(p,d,u,y,v,g);u.transmission>0?n.push(m):u.transparent===!0?s.push(m):t.push(m)}function l(p,d,u,y,v,g){let m=a(p,d,u,y,v,g);u.transmission>0?n.unshift(m):u.transparent===!0?s.unshift(m):t.unshift(m)}function c(p,d){t.length>1&&t.sort(p||nx),n.length>1&&n.sort(d||ru),s.length>1&&s.sort(d||ru)}function h(){for(let p=e,d=i.length;p<d;p++){let u=i[p];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function ix(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new au,i.set(n,[a])):s>=r.length?(a=new au,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function sx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new xt};break;case"SpotLight":t={position:new F,direction:new F,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new xt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":t={color:new xt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function rx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var ax=0;function ox(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function lx(i,e){let t=new sx,n=rx(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new F);let r=new F,a=new En,o=new En;function l(h,p){let d=0,u=0,y=0;for(let ae=0;ae<9;ae++)s.probe[ae].set(0,0,0);let v=0,g=0,m=0,M=0,_=0,A=0,D=0,I=0,L=0,X=0,b=0;h.sort(ox);let R=p===!0?Math.PI:1;for(let ae=0,be=h.length;ae<be;ae++){let P=h[ae],N=P.color,G=P.intensity,re=P.distance,ne=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=N.r*G*R,u+=N.g*G*R,y+=N.b*G*R;else if(P.isLightProbe){for(let Q=0;Q<9;Q++)s.probe[Q].addScaledVector(P.sh.coefficients[Q],G);b++}else if(P.isDirectionalLight){let Q=t.get(P);if(Q.color.copy(P.color).multiplyScalar(P.intensity*R),P.castShadow){let B=P.shadow,de=n.get(P);de.shadowBias=B.bias,de.shadowNormalBias=B.normalBias,de.shadowRadius=B.radius,de.shadowMapSize=B.mapSize,s.directionalShadow[v]=de,s.directionalShadowMap[v]=ne,s.directionalShadowMatrix[v]=P.shadow.matrix,A++}s.directional[v]=Q,v++}else if(P.isSpotLight){let Q=t.get(P);Q.position.setFromMatrixPosition(P.matrixWorld),Q.color.copy(N).multiplyScalar(G*R),Q.distance=re,Q.coneCos=Math.cos(P.angle),Q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Q.decay=P.decay,s.spot[m]=Q;let B=P.shadow;if(P.map&&(s.spotLightMap[L]=P.map,L++,B.updateMatrices(P),P.castShadow&&X++),s.spotLightMatrix[m]=B.matrix,P.castShadow){let de=n.get(P);de.shadowBias=B.bias,de.shadowNormalBias=B.normalBias,de.shadowRadius=B.radius,de.shadowMapSize=B.mapSize,s.spotShadow[m]=de,s.spotShadowMap[m]=ne,I++}m++}else if(P.isRectAreaLight){let Q=t.get(P);Q.color.copy(N).multiplyScalar(G),Q.halfWidth.set(P.width*.5,0,0),Q.halfHeight.set(0,P.height*.5,0),s.rectArea[M]=Q,M++}else if(P.isPointLight){let Q=t.get(P);if(Q.color.copy(P.color).multiplyScalar(P.intensity*R),Q.distance=P.distance,Q.decay=P.decay,P.castShadow){let B=P.shadow,de=n.get(P);de.shadowBias=B.bias,de.shadowNormalBias=B.normalBias,de.shadowRadius=B.radius,de.shadowMapSize=B.mapSize,de.shadowCameraNear=B.camera.near,de.shadowCameraFar=B.camera.far,s.pointShadow[g]=de,s.pointShadowMap[g]=ne,s.pointShadowMatrix[g]=P.shadow.matrix,D++}s.point[g]=Q,g++}else if(P.isHemisphereLight){let Q=t.get(P);Q.skyColor.copy(P.color).multiplyScalar(G*R),Q.groundColor.copy(P.groundColor).multiplyScalar(G*R),s.hemi[_]=Q,_++}}M>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ie.LTC_FLOAT_1,s.rectAreaLTC2=Ie.LTC_FLOAT_2):(s.rectAreaLTC1=Ie.LTC_HALF_1,s.rectAreaLTC2=Ie.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ie.LTC_FLOAT_1,s.rectAreaLTC2=Ie.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Ie.LTC_HALF_1,s.rectAreaLTC2=Ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=u,s.ambient[2]=y;let q=s.hash;(q.directionalLength!==v||q.pointLength!==g||q.spotLength!==m||q.rectAreaLength!==M||q.hemiLength!==_||q.numDirectionalShadows!==A||q.numPointShadows!==D||q.numSpotShadows!==I||q.numSpotMaps!==L||q.numLightProbes!==b)&&(s.directional.length=v,s.spot.length=m,s.rectArea.length=M,s.point.length=g,s.hemi.length=_,s.directionalShadow.length=A,s.directionalShadowMap.length=A,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=I,s.spotShadowMap.length=I,s.directionalShadowMatrix.length=A,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=I+L-X,s.spotLightMap.length=L,s.numSpotLightShadowsWithMaps=X,s.numLightProbes=b,q.directionalLength=v,q.pointLength=g,q.spotLength=m,q.rectAreaLength=M,q.hemiLength=_,q.numDirectionalShadows=A,q.numPointShadows=D,q.numSpotShadows=I,q.numSpotMaps=L,q.numLightProbes=b,s.version=ax++)}function c(h,p){let d=0,u=0,y=0,v=0,g=0,m=p.matrixWorldInverse;for(let M=0,_=h.length;M<_;M++){let A=h[M];if(A.isDirectionalLight){let D=s.directional[d];D.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(m),d++}else if(A.isSpotLight){let D=s.spot[y];D.position.setFromMatrixPosition(A.matrixWorld),D.position.applyMatrix4(m),D.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(m),y++}else if(A.isRectAreaLight){let D=s.rectArea[v];D.position.setFromMatrixPosition(A.matrixWorld),D.position.applyMatrix4(m),o.identity(),a.copy(A.matrixWorld),a.premultiply(m),o.extractRotation(a),D.halfWidth.set(A.width*.5,0,0),D.halfHeight.set(0,A.height*.5,0),D.halfWidth.applyMatrix4(o),D.halfHeight.applyMatrix4(o),v++}else if(A.isPointLight){let D=s.point[u];D.position.setFromMatrixPosition(A.matrixWorld),D.position.applyMatrix4(m),u++}else if(A.isHemisphereLight){let D=s.hemi[g];D.direction.setFromMatrixPosition(A.matrixWorld),D.direction.transformDirection(m),g++}}}return{setup:l,setupView:c,state:s}}function ou(i,e){let t=new lx(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(p){n.push(p)}function o(p){s.push(p)}function l(p){t.setup(n,p)}function c(p){t.setupView(n,p)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function cx(i,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),l;return o===void 0?(l=new ou(i,e),t.set(r,[l])):a>=o.length?(l=new ou(i,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:n,dispose:s}}var Pl=class extends as{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Il=class extends as{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},hx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ux=`uniform sampler2D shadow_pass;
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
}`;function dx(i,e,t){let n=new Fr,s=new He,r=new He,a=new Nn,o=new Pl({depthPacking:xf}),l=new Il,c={},h=t.maxTextureSize,p={[is]:ei,[ei]:is,[_n]:_n},d=new Fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:hx,fragmentShader:ux}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let y=new ni;y.setAttribute("position",new ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Ze(y,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mu;let m=this.type;this.render=function(I,L,X){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||I.length===0)return;let b=i.getRenderTarget(),R=i.getActiveCubeFace(),q=i.getActiveMipmapLevel(),ae=i.state;ae.setBlending(es),ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);let be=m!==Di&&this.type===Di,P=m===Di&&this.type!==Di;for(let N=0,G=I.length;N<G;N++){let re=I[N],ne=re.shadow;if(ne===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(ne.autoUpdate===!1&&ne.needsUpdate===!1)continue;s.copy(ne.mapSize);let Q=ne.getFrameExtents();if(s.multiply(Q),r.copy(ne.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Q.x),s.x=r.x*Q.x,ne.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Q.y),s.y=r.y*Q.y,ne.mapSize.y=r.y)),ne.map===null||be===!0||P===!0){let de=this.type!==Di?{minFilter:Wn,magFilter:Wn}:{};ne.map!==null&&ne.map.dispose(),ne.map=new Oi(s.x,s.y,de),ne.map.texture.name=re.name+".shadowMap",ne.camera.updateProjectionMatrix()}i.setRenderTarget(ne.map),i.clear();let B=ne.getViewportCount();for(let de=0;de<B;de++){let oe=ne.getViewport(de);a.set(r.x*oe.x,r.y*oe.y,r.x*oe.z,r.y*oe.w),ae.viewport(a),ne.updateMatrices(re,de),n=ne.getFrustum(),A(L,X,ne.camera,re,this.type)}ne.isPointLightShadow!==!0&&this.type===Di&&M(ne,X),ne.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(b,R,q)};function M(I,L){let X=e.update(v);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,u.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Oi(s.x,s.y)),d.uniforms.shadow_pass.value=I.map.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(L,null,X,d,v,null),u.uniforms.shadow_pass.value=I.mapPass.texture,u.uniforms.resolution.value=I.mapSize,u.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(L,null,X,u,v,null)}function _(I,L,X,b){let R=null,q=X.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(q!==void 0)R=q;else if(R=X.isPointLight===!0?l:o,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){let ae=R.uuid,be=L.uuid,P=c[ae];P===void 0&&(P={},c[ae]=P);let N=P[be];N===void 0&&(N=R.clone(),P[be]=N,L.addEventListener("dispose",D)),R=N}if(R.visible=L.visible,R.wireframe=L.wireframe,b===Di?R.side=L.shadowSide!==null?L.shadowSide:L.side:R.side=L.shadowSide!==null?L.shadowSide:p[L.side],R.alphaMap=L.alphaMap,R.alphaTest=L.alphaTest,R.map=L.map,R.clipShadows=L.clipShadows,R.clippingPlanes=L.clippingPlanes,R.clipIntersection=L.clipIntersection,R.displacementMap=L.displacementMap,R.displacementScale=L.displacementScale,R.displacementBias=L.displacementBias,R.wireframeLinewidth=L.wireframeLinewidth,R.linewidth=L.linewidth,X.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let ae=i.properties.get(R);ae.light=X}return R}function A(I,L,X,b,R){if(I.visible===!1)return;if(I.layers.test(L.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&R===Di)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,I.matrixWorld);let be=e.update(I),P=I.material;if(Array.isArray(P)){let N=be.groups;for(let G=0,re=N.length;G<re;G++){let ne=N[G],Q=P[ne.materialIndex];if(Q&&Q.visible){let B=_(I,Q,b,R);I.onBeforeShadow(i,I,L,X,be,B,ne),i.renderBufferDirect(X,null,be,B,I,ne),I.onAfterShadow(i,I,L,X,be,B,ne)}}}else if(P.visible){let N=_(I,P,b,R);I.onBeforeShadow(i,I,L,X,be,N,null),i.renderBufferDirect(X,null,be,N,I,null),I.onAfterShadow(i,I,L,X,be,N,null)}}let ae=I.children;for(let be=0,P=ae.length;be<P;be++)A(ae[be],L,X,b,R)}function D(I){I.target.removeEventListener("dispose",D);for(let X in c){let b=c[X],R=I.target.uuid;R in b&&(b[R].dispose(),delete b[R])}}}function fx(i,e,t){let n=t.isWebGL2;function s(){let O=!1,Pe=new Nn,De=null,ut=new Nn(0,0,0,0);return{setMask:function(et){De!==et&&!O&&(i.colorMask(et,et,et,et),De=et)},setLocked:function(et){O=et},setClear:function(et,Ft,Ht,Bt,xn){xn===!0&&(et*=Bt,Ft*=Bt,Ht*=Bt),Pe.set(et,Ft,Ht,Bt),ut.equals(Pe)===!1&&(i.clearColor(et,Ft,Ht,Bt),ut.copy(Pe))},reset:function(){O=!1,De=null,ut.set(-1,0,0,0)}}}function r(){let O=!1,Pe=null,De=null,ut=null;return{setTest:function(et){et?tt(i.DEPTH_TEST):je(i.DEPTH_TEST)},setMask:function(et){Pe!==et&&!O&&(i.depthMask(et),Pe=et)},setFunc:function(et){if(De!==et){switch(et){case Xd:i.depthFunc(i.NEVER);break;case qd:i.depthFunc(i.ALWAYS);break;case Yd:i.depthFunc(i.LESS);break;case Pa:i.depthFunc(i.LEQUAL);break;case $d:i.depthFunc(i.EQUAL);break;case Zd:i.depthFunc(i.GEQUAL);break;case Kd:i.depthFunc(i.GREATER);break;case Jd:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}De=et}},setLocked:function(et){O=et},setClear:function(et){ut!==et&&(i.clearDepth(et),ut=et)},reset:function(){O=!1,Pe=null,De=null,ut=null}}}function a(){let O=!1,Pe=null,De=null,ut=null,et=null,Ft=null,Ht=null,Bt=null,xn=null;return{setTest:function(ke){O||(ke?tt(i.STENCIL_TEST):je(i.STENCIL_TEST))},setMask:function(ke){Pe!==ke&&!O&&(i.stencilMask(ke),Pe=ke)},setFunc:function(ke,dt,Gt){(De!==ke||ut!==dt||et!==Gt)&&(i.stencilFunc(ke,dt,Gt),De=ke,ut=dt,et=Gt)},setOp:function(ke,dt,Gt){(Ft!==ke||Ht!==dt||Bt!==Gt)&&(i.stencilOp(ke,dt,Gt),Ft=ke,Ht=dt,Bt=Gt)},setLocked:function(ke){O=ke},setClear:function(ke){xn!==ke&&(i.clearStencil(ke),xn=ke)},reset:function(){O=!1,Pe=null,De=null,ut=null,et=null,Ft=null,Ht=null,Bt=null,xn=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,p=new WeakMap,d={},u={},y=new WeakMap,v=[],g=null,m=!1,M=null,_=null,A=null,D=null,I=null,L=null,X=null,b=new xt(0,0,0),R=0,q=!1,ae=null,be=null,P=null,N=null,G=null,re=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ne=!1,Q=0,B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(B)[1]),ne=Q>=1):B.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),ne=Q>=2);let de=null,oe={},W=i.getParameter(i.SCISSOR_BOX),ue=i.getParameter(i.VIEWPORT),Le=new Nn().fromArray(W),Re=new Nn().fromArray(ue);function We(O,Pe,De,ut){let et=new Uint8Array(4),Ft=i.createTexture();i.bindTexture(O,Ft),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ht=0;Ht<De;Ht++)n&&(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)?i.texImage3D(Pe,0,i.RGBA,1,1,ut,0,i.RGBA,i.UNSIGNED_BYTE,et):i.texImage2D(Pe+Ht,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,et);return Ft}let pt={};pt[i.TEXTURE_2D]=We(i.TEXTURE_2D,i.TEXTURE_2D,1),pt[i.TEXTURE_CUBE_MAP]=We(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(pt[i.TEXTURE_2D_ARRAY]=We(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),pt[i.TEXTURE_3D]=We(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),tt(i.DEPTH_TEST),l.setFunc(Pa),bt(!1),C(Hc),tt(i.CULL_FACE),Be(es);function tt(O){d[O]!==!0&&(i.enable(O),d[O]=!0)}function je(O){d[O]!==!1&&(i.disable(O),d[O]=!1)}function mt(O,Pe){return u[O]!==Pe?(i.bindFramebuffer(O,Pe),u[O]=Pe,n&&(O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Pe),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Pe)),!0):!1}function K(O,Pe){let De=v,ut=!1;if(O)if(De=y.get(Pe),De===void 0&&(De=[],y.set(Pe,De)),O.isWebGLMultipleRenderTargets){let et=O.texture;if(De.length!==et.length||De[0]!==i.COLOR_ATTACHMENT0){for(let Ft=0,Ht=et.length;Ft<Ht;Ft++)De[Ft]=i.COLOR_ATTACHMENT0+Ft;De.length=et.length,ut=!0}}else De[0]!==i.COLOR_ATTACHMENT0&&(De[0]=i.COLOR_ATTACHMENT0,ut=!0);else De[0]!==i.BACK&&(De[0]=i.BACK,ut=!0);ut&&(t.isWebGL2?i.drawBuffers(De):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(De))}function un(O){return g!==O?(i.useProgram(O),g=O,!0):!1}let $e={[xs]:i.FUNC_ADD,[Pd]:i.FUNC_SUBTRACT,[Id]:i.FUNC_REVERSE_SUBTRACT};if(n)$e[Wc]=i.MIN,$e[Xc]=i.MAX;else{let O=e.get("EXT_blend_minmax");O!==null&&($e[Wc]=O.MIN_EXT,$e[Xc]=O.MAX_EXT)}let rt={[Ld]:i.ZERO,[Dd]:i.ONE,[Ud]:i.SRC_COLOR,[dl]:i.SRC_ALPHA,[Hd]:i.SRC_ALPHA_SATURATE,[Bd]:i.DST_COLOR,[Od]:i.DST_ALPHA,[Nd]:i.ONE_MINUS_SRC_COLOR,[fl]:i.ONE_MINUS_SRC_ALPHA,[kd]:i.ONE_MINUS_DST_COLOR,[Fd]:i.ONE_MINUS_DST_ALPHA,[zd]:i.CONSTANT_COLOR,[Vd]:i.ONE_MINUS_CONSTANT_COLOR,[Gd]:i.CONSTANT_ALPHA,[Wd]:i.ONE_MINUS_CONSTANT_ALPHA};function Be(O,Pe,De,ut,et,Ft,Ht,Bt,xn,ke){if(O===es){m===!0&&(je(i.BLEND),m=!1);return}if(m===!1&&(tt(i.BLEND),m=!0),O!==Cd){if(O!==M||ke!==q){if((_!==xs||I!==xs)&&(i.blendEquation(i.FUNC_ADD),_=xs,I=xs),ke)switch(O){case tr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zc:i.blendFunc(i.ONE,i.ONE);break;case Vc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case tr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Vc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}A=null,D=null,L=null,X=null,b.set(0,0,0),R=0,M=O,q=ke}return}et=et||Pe,Ft=Ft||De,Ht=Ht||ut,(Pe!==_||et!==I)&&(i.blendEquationSeparate($e[Pe],$e[et]),_=Pe,I=et),(De!==A||ut!==D||Ft!==L||Ht!==X)&&(i.blendFuncSeparate(rt[De],rt[ut],rt[Ft],rt[Ht]),A=De,D=ut,L=Ft,X=Ht),(Bt.equals(b)===!1||xn!==R)&&(i.blendColor(Bt.r,Bt.g,Bt.b,xn),b.copy(Bt),R=xn),M=O,q=!1}function sn(O,Pe){O.side===_n?je(i.CULL_FACE):tt(i.CULL_FACE);let De=O.side===ei;Pe&&(De=!De),bt(De),O.blending===tr&&O.transparent===!1?Be(es):Be(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),o.setMask(O.colorWrite);let ut=O.stencilWrite;c.setTest(ut),ut&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ee(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?tt(i.SAMPLE_ALPHA_TO_COVERAGE):je(i.SAMPLE_ALPHA_TO_COVERAGE)}function bt(O){ae!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),ae=O)}function C(O){O!==Ad?(tt(i.CULL_FACE),O!==be&&(O===Hc?i.cullFace(i.BACK):O===Rd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):je(i.CULL_FACE),be=O}function S(O){O!==P&&(ne&&i.lineWidth(O),P=O)}function ee(O,Pe,De){O?(tt(i.POLYGON_OFFSET_FILL),(N!==Pe||G!==De)&&(i.polygonOffset(Pe,De),N=Pe,G=De)):je(i.POLYGON_OFFSET_FILL)}function Te(O){O?tt(i.SCISSOR_TEST):je(i.SCISSOR_TEST)}function ve(O){O===void 0&&(O=i.TEXTURE0+re-1),de!==O&&(i.activeTexture(O),de=O)}function we(O,Pe,De){De===void 0&&(de===null?De=i.TEXTURE0+re-1:De=de);let ut=oe[De];ut===void 0&&(ut={type:void 0,texture:void 0},oe[De]=ut),(ut.type!==O||ut.texture!==Pe)&&(de!==De&&(i.activeTexture(De),de=De),i.bindTexture(O,Pe||pt[O]),ut.type=O,ut.texture=Pe)}function Xe(){let O=oe[de];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Ne(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ve(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function at(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function St(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Vt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Tt(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ct(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ke(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ze(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ot(O){Le.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Le.copy(O))}function ht(O){Re.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),Re.copy(O))}function yt(O,Pe){let De=p.get(Pe);De===void 0&&(De=new WeakMap,p.set(Pe,De));let ut=De.get(O);ut===void 0&&(ut=i.getUniformBlockIndex(Pe,O.name),De.set(O,ut))}function Qe(O,Pe){let ut=p.get(Pe).get(O);h.get(Pe)!==ut&&(i.uniformBlockBinding(Pe,ut,O.__bindingPointIndex),h.set(Pe,ut))}function Ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},de=null,oe={},u={},y=new WeakMap,v=[],g=null,m=!1,M=null,_=null,A=null,D=null,I=null,L=null,X=null,b=new xt(0,0,0),R=0,q=!1,ae=null,be=null,P=null,N=null,G=null,Le.set(0,0,i.canvas.width,i.canvas.height),Re.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:tt,disable:je,bindFramebuffer:mt,drawBuffers:K,useProgram:un,setBlending:Be,setMaterial:sn,setFlipSided:bt,setCullFace:C,setLineWidth:S,setPolygonOffset:ee,setScissorTest:Te,activeTexture:ve,bindTexture:we,unbindTexture:Xe,compressedTexImage2D:Ne,compressedTexImage3D:Ve,texImage2D:Ke,texImage3D:ze,updateUBOMapping:yt,uniformBlockBinding:Qe,texStorage2D:Tt,texStorage3D:ct,texSubImage2D:at,texSubImage3D:St,compressedTexSubImage2D:xe,compressedTexSubImage3D:Vt,scissor:ot,viewport:ht,reset:Ce}}function px(i,e,t,n,s,r,a){let o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,p,d=new WeakMap,u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(C,S){return u?new OffscreenCanvas(C,S):Fa("canvas")}function v(C,S,ee,Te){let ve=1;if((C.width>Te||C.height>Te)&&(ve=Te/Math.max(C.width,C.height)),ve<1||S===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){let we=S?_l:Math.floor,Xe=we(ve*C.width),Ne=we(ve*C.height);p===void 0&&(p=y(Xe,Ne));let Ve=ee?y(Xe,Ne):p;return Ve.width=Xe,Ve.height=Ne,Ve.getContext("2d").drawImage(C,0,0,Xe,Ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Xe+"x"+Ne+")."),Ve}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function g(C){return Eh(C.width)&&Eh(C.height)}function m(C){return o?!1:C.wrapS!==_i||C.wrapT!==_i||C.minFilter!==Wn&&C.minFilter!==oi}function M(C,S){return C.generateMipmaps&&S&&C.minFilter!==Wn&&C.minFilter!==oi}function _(C){i.generateMipmap(C)}function A(C,S,ee,Te,ve=!1){if(o===!1)return S;if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let we=S;if(S===i.RED&&(ee===i.FLOAT&&(we=i.R32F),ee===i.HALF_FLOAT&&(we=i.R16F),ee===i.UNSIGNED_BYTE&&(we=i.R8)),S===i.RED_INTEGER&&(ee===i.UNSIGNED_BYTE&&(we=i.R8UI),ee===i.UNSIGNED_SHORT&&(we=i.R16UI),ee===i.UNSIGNED_INT&&(we=i.R32UI),ee===i.BYTE&&(we=i.R8I),ee===i.SHORT&&(we=i.R16I),ee===i.INT&&(we=i.R32I)),S===i.RG&&(ee===i.FLOAT&&(we=i.RG32F),ee===i.HALF_FLOAT&&(we=i.RG16F),ee===i.UNSIGNED_BYTE&&(we=i.RG8)),S===i.RGBA){let Xe=ve?Da:Jt.getTransfer(Te);ee===i.FLOAT&&(we=i.RGBA32F),ee===i.HALF_FLOAT&&(we=i.RGBA16F),ee===i.UNSIGNED_BYTE&&(we=Xe===an?i.SRGB8_ALPHA8:i.RGBA8),ee===i.UNSIGNED_SHORT_4_4_4_4&&(we=i.RGBA4),ee===i.UNSIGNED_SHORT_5_5_5_1&&(we=i.RGB5_A1)}return(we===i.R16F||we===i.R32F||we===i.RG16F||we===i.RG32F||we===i.RGBA16F||we===i.RGBA32F)&&e.get("EXT_color_buffer_float"),we}function D(C,S,ee){return M(C,ee)===!0||C.isFramebufferTexture&&C.minFilter!==Wn&&C.minFilter!==oi?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function I(C){return C===Wn||C===qc||C===Po?i.NEAREST:i.LINEAR}function L(C){let S=C.target;S.removeEventListener("dispose",L),b(S),S.isVideoTexture&&h.delete(S)}function X(C){let S=C.target;S.removeEventListener("dispose",X),q(S)}function b(C){let S=n.get(C);if(S.__webglInit===void 0)return;let ee=C.source,Te=d.get(ee);if(Te){let ve=Te[S.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&R(C),Object.keys(Te).length===0&&d.delete(ee)}n.remove(C)}function R(C){let S=n.get(C);i.deleteTexture(S.__webglTexture);let ee=C.source,Te=d.get(ee);delete Te[S.__cacheKey],a.memory.textures--}function q(C){let S=C.texture,ee=n.get(C),Te=n.get(S);if(Te.__webglTexture!==void 0&&(i.deleteTexture(Te.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(ee.__webglFramebuffer[ve]))for(let we=0;we<ee.__webglFramebuffer[ve].length;we++)i.deleteFramebuffer(ee.__webglFramebuffer[ve][we]);else i.deleteFramebuffer(ee.__webglFramebuffer[ve]);ee.__webglDepthbuffer&&i.deleteRenderbuffer(ee.__webglDepthbuffer[ve])}else{if(Array.isArray(ee.__webglFramebuffer))for(let ve=0;ve<ee.__webglFramebuffer.length;ve++)i.deleteFramebuffer(ee.__webglFramebuffer[ve]);else i.deleteFramebuffer(ee.__webglFramebuffer);if(ee.__webglDepthbuffer&&i.deleteRenderbuffer(ee.__webglDepthbuffer),ee.__webglMultisampledFramebuffer&&i.deleteFramebuffer(ee.__webglMultisampledFramebuffer),ee.__webglColorRenderbuffer)for(let ve=0;ve<ee.__webglColorRenderbuffer.length;ve++)ee.__webglColorRenderbuffer[ve]&&i.deleteRenderbuffer(ee.__webglColorRenderbuffer[ve]);ee.__webglDepthRenderbuffer&&i.deleteRenderbuffer(ee.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ve=0,we=S.length;ve<we;ve++){let Xe=n.get(S[ve]);Xe.__webglTexture&&(i.deleteTexture(Xe.__webglTexture),a.memory.textures--),n.remove(S[ve])}n.remove(S),n.remove(C)}let ae=0;function be(){ae=0}function P(){let C=ae;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),ae+=1,C}function N(C){let S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function G(C,S){let ee=n.get(C);if(C.isVideoTexture&&sn(C),C.isRenderTargetTexture===!1&&C.version>0&&ee.__version!==C.version){let Te=C.image;if(Te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Le(ee,C,S);return}}t.bindTexture(i.TEXTURE_2D,ee.__webglTexture,i.TEXTURE0+S)}function re(C,S){let ee=n.get(C);if(C.version>0&&ee.__version!==C.version){Le(ee,C,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,ee.__webglTexture,i.TEXTURE0+S)}function ne(C,S){let ee=n.get(C);if(C.version>0&&ee.__version!==C.version){Le(ee,C,S);return}t.bindTexture(i.TEXTURE_3D,ee.__webglTexture,i.TEXTURE0+S)}function Q(C,S){let ee=n.get(C);if(C.version>0&&ee.__version!==C.version){Re(ee,C,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture,i.TEXTURE0+S)}let B={[Lr]:i.REPEAT,[_i]:i.CLAMP_TO_EDGE,[gl]:i.MIRRORED_REPEAT},de={[Wn]:i.NEAREST,[qc]:i.NEAREST_MIPMAP_NEAREST,[Po]:i.NEAREST_MIPMAP_LINEAR,[oi]:i.LINEAR,[of]:i.LINEAR_MIPMAP_NEAREST,[Dr]:i.LINEAR_MIPMAP_LINEAR},oe={[_f]:i.NEVER,[Tf]:i.ALWAYS,[vf]:i.LESS,[Du]:i.LEQUAL,[Mf]:i.EQUAL,[Ef]:i.GEQUAL,[bf]:i.GREATER,[Sf]:i.NOTEQUAL};function W(C,S,ee){if(ee?(i.texParameteri(C,i.TEXTURE_WRAP_S,B[S.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,B[S.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,B[S.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,de[S.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,de[S.minFilter])):(i.texParameteri(C,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(C,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(S.wrapS!==_i||S.wrapT!==_i)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(C,i.TEXTURE_MAG_FILTER,I(S.magFilter)),i.texParameteri(C,i.TEXTURE_MIN_FILTER,I(S.minFilter)),S.minFilter!==Wn&&S.minFilter!==oi&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,oe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let Te=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Wn||S.minFilter!==Po&&S.minFilter!==Dr||S.type===Qi&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===Ur&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(i.texParameterf(C,Te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function ue(C,S){let ee=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",L));let Te=S.source,ve=d.get(Te);ve===void 0&&(ve={},d.set(Te,ve));let we=N(S);if(we!==C.__cacheKey){ve[we]===void 0&&(ve[we]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,ee=!0),ve[we].usedTimes++;let Xe=ve[C.__cacheKey];Xe!==void 0&&(ve[C.__cacheKey].usedTimes--,Xe.usedTimes===0&&R(S)),C.__cacheKey=we,C.__webglTexture=ve[we].texture}return ee}function Le(C,S,ee){let Te=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Te=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Te=i.TEXTURE_3D);let ve=ue(C,S),we=S.source;t.bindTexture(Te,C.__webglTexture,i.TEXTURE0+ee);let Xe=n.get(we);if(we.version!==Xe.__version||ve===!0){t.activeTexture(i.TEXTURE0+ee);let Ne=Jt.getPrimaries(Jt.workingColorSpace),Ve=S.colorSpace===li?null:Jt.getPrimaries(S.colorSpace),at=S.colorSpace===li||Ne===Ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let St=m(S)&&g(S.image)===!1,xe=v(S.image,St,!1,s.maxTextureSize);xe=bt(S,xe);let Vt=g(xe)||o,Tt=r.convert(S.format,S.colorSpace),ct=r.convert(S.type),Ke=A(S.internalFormat,Tt,ct,S.colorSpace,S.isVideoTexture);W(Te,S,Vt);let ze,ot=S.mipmaps,ht=o&&S.isVideoTexture!==!0&&Ke!==Pu,yt=Xe.__version===void 0||ve===!0,Qe=D(S,xe,Vt);if(S.isDepthTexture)Ke=i.DEPTH_COMPONENT,o?S.type===Qi?Ke=i.DEPTH_COMPONENT32F:S.type===ji?Ke=i.DEPTH_COMPONENT24:S.type===_s?Ke=i.DEPTH24_STENCIL8:Ke=i.DEPTH_COMPONENT16:S.type===Qi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===vs&&Ke===i.DEPTH_COMPONENT&&S.type!==ac&&S.type!==ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=ji,ct=r.convert(S.type)),S.format===ar&&Ke===i.DEPTH_COMPONENT&&(Ke=i.DEPTH_STENCIL,S.type!==_s&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=_s,ct=r.convert(S.type))),yt&&(ht?t.texStorage2D(i.TEXTURE_2D,1,Ke,xe.width,xe.height):t.texImage2D(i.TEXTURE_2D,0,Ke,xe.width,xe.height,0,Tt,ct,null));else if(S.isDataTexture)if(ot.length>0&&Vt){ht&&yt&&t.texStorage2D(i.TEXTURE_2D,Qe,Ke,ot[0].width,ot[0].height);for(let Ce=0,O=ot.length;Ce<O;Ce++)ze=ot[Ce],ht?t.texSubImage2D(i.TEXTURE_2D,Ce,0,0,ze.width,ze.height,Tt,ct,ze.data):t.texImage2D(i.TEXTURE_2D,Ce,Ke,ze.width,ze.height,0,Tt,ct,ze.data);S.generateMipmaps=!1}else ht?(yt&&t.texStorage2D(i.TEXTURE_2D,Qe,Ke,xe.width,xe.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,xe.width,xe.height,Tt,ct,xe.data)):t.texImage2D(i.TEXTURE_2D,0,Ke,xe.width,xe.height,0,Tt,ct,xe.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ht&&yt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Qe,Ke,ot[0].width,ot[0].height,xe.depth);for(let Ce=0,O=ot.length;Ce<O;Ce++)ze=ot[Ce],S.format!==vi?Tt!==null?ht?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ce,0,0,0,ze.width,ze.height,xe.depth,Tt,ze.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Ce,Ke,ze.width,ze.height,xe.depth,0,ze.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?t.texSubImage3D(i.TEXTURE_2D_ARRAY,Ce,0,0,0,ze.width,ze.height,xe.depth,Tt,ct,ze.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Ce,Ke,ze.width,ze.height,xe.depth,0,Tt,ct,ze.data)}else{ht&&yt&&t.texStorage2D(i.TEXTURE_2D,Qe,Ke,ot[0].width,ot[0].height);for(let Ce=0,O=ot.length;Ce<O;Ce++)ze=ot[Ce],S.format!==vi?Tt!==null?ht?t.compressedTexSubImage2D(i.TEXTURE_2D,Ce,0,0,ze.width,ze.height,Tt,ze.data):t.compressedTexImage2D(i.TEXTURE_2D,Ce,Ke,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?t.texSubImage2D(i.TEXTURE_2D,Ce,0,0,ze.width,ze.height,Tt,ct,ze.data):t.texImage2D(i.TEXTURE_2D,Ce,Ke,ze.width,ze.height,0,Tt,ct,ze.data)}else if(S.isDataArrayTexture)ht?(yt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Qe,Ke,xe.width,xe.height,xe.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Tt,ct,xe.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ke,xe.width,xe.height,xe.depth,0,Tt,ct,xe.data);else if(S.isData3DTexture)ht?(yt&&t.texStorage3D(i.TEXTURE_3D,Qe,Ke,xe.width,xe.height,xe.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Tt,ct,xe.data)):t.texImage3D(i.TEXTURE_3D,0,Ke,xe.width,xe.height,xe.depth,0,Tt,ct,xe.data);else if(S.isFramebufferTexture){if(yt)if(ht)t.texStorage2D(i.TEXTURE_2D,Qe,Ke,xe.width,xe.height);else{let Ce=xe.width,O=xe.height;for(let Pe=0;Pe<Qe;Pe++)t.texImage2D(i.TEXTURE_2D,Pe,Ke,Ce,O,0,Tt,ct,null),Ce>>=1,O>>=1}}else if(ot.length>0&&Vt){ht&&yt&&t.texStorage2D(i.TEXTURE_2D,Qe,Ke,ot[0].width,ot[0].height);for(let Ce=0,O=ot.length;Ce<O;Ce++)ze=ot[Ce],ht?t.texSubImage2D(i.TEXTURE_2D,Ce,0,0,Tt,ct,ze):t.texImage2D(i.TEXTURE_2D,Ce,Ke,Tt,ct,ze);S.generateMipmaps=!1}else ht?(yt&&t.texStorage2D(i.TEXTURE_2D,Qe,Ke,xe.width,xe.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Tt,ct,xe)):t.texImage2D(i.TEXTURE_2D,0,Ke,Tt,ct,xe);M(S,Vt)&&_(Te),Xe.__version=we.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Re(C,S,ee){if(S.image.length!==6)return;let Te=ue(C,S),ve=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+ee);let we=n.get(ve);if(ve.version!==we.__version||Te===!0){t.activeTexture(i.TEXTURE0+ee);let Xe=Jt.getPrimaries(Jt.workingColorSpace),Ne=S.colorSpace===li?null:Jt.getPrimaries(S.colorSpace),Ve=S.colorSpace===li||Xe===Ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let at=S.isCompressedTexture||S.image[0].isCompressedTexture,St=S.image[0]&&S.image[0].isDataTexture,xe=[];for(let Ce=0;Ce<6;Ce++)!at&&!St?xe[Ce]=v(S.image[Ce],!1,!0,s.maxCubemapSize):xe[Ce]=St?S.image[Ce].image:S.image[Ce],xe[Ce]=bt(S,xe[Ce]);let Vt=xe[0],Tt=g(Vt)||o,ct=r.convert(S.format,S.colorSpace),Ke=r.convert(S.type),ze=A(S.internalFormat,ct,Ke,S.colorSpace),ot=o&&S.isVideoTexture!==!0,ht=we.__version===void 0||Te===!0,yt=D(S,Vt,Tt);W(i.TEXTURE_CUBE_MAP,S,Tt);let Qe;if(at){ot&&ht&&t.texStorage2D(i.TEXTURE_CUBE_MAP,yt,ze,Vt.width,Vt.height);for(let Ce=0;Ce<6;Ce++){Qe=xe[Ce].mipmaps;for(let O=0;O<Qe.length;O++){let Pe=Qe[O];S.format!==vi?ct!==null?ot?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,O,0,0,Pe.width,Pe.height,ct,Pe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,O,ze,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ot?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,O,0,0,Pe.width,Pe.height,ct,Ke,Pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,O,ze,Pe.width,Pe.height,0,ct,Ke,Pe.data)}}}else{Qe=S.mipmaps,ot&&ht&&(Qe.length>0&&yt++,t.texStorage2D(i.TEXTURE_CUBE_MAP,yt,ze,xe[0].width,xe[0].height));for(let Ce=0;Ce<6;Ce++)if(St){ot?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,0,0,xe[Ce].width,xe[Ce].height,ct,Ke,xe[Ce].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,ze,xe[Ce].width,xe[Ce].height,0,ct,Ke,xe[Ce].data);for(let O=0;O<Qe.length;O++){let De=Qe[O].image[Ce].image;ot?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,O+1,0,0,De.width,De.height,ct,Ke,De.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,O+1,ze,De.width,De.height,0,ct,Ke,De.data)}}else{ot?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,0,0,ct,Ke,xe[Ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,ze,ct,Ke,xe[Ce]);for(let O=0;O<Qe.length;O++){let Pe=Qe[O];ot?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,O+1,0,0,ct,Ke,Pe.image[Ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,O+1,ze,ct,Ke,Pe.image[Ce])}}}M(S,Tt)&&_(i.TEXTURE_CUBE_MAP),we.__version=ve.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function We(C,S,ee,Te,ve,we){let Xe=r.convert(ee.format,ee.colorSpace),Ne=r.convert(ee.type),Ve=A(ee.internalFormat,Xe,Ne,ee.colorSpace);if(!n.get(S).__hasExternalTextures){let St=Math.max(1,S.width>>we),xe=Math.max(1,S.height>>we);ve===i.TEXTURE_3D||ve===i.TEXTURE_2D_ARRAY?t.texImage3D(ve,we,Ve,St,xe,S.depth,0,Xe,Ne,null):t.texImage2D(ve,we,Ve,St,xe,0,Xe,Ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),Be(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Te,ve,n.get(ee).__webglTexture,0,rt(S)):(ve===i.TEXTURE_2D||ve>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Te,ve,n.get(ee).__webglTexture,we),t.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(C,S,ee){if(i.bindRenderbuffer(i.RENDERBUFFER,C),S.depthBuffer&&!S.stencilBuffer){let Te=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(ee||Be(S)){let ve=S.depthTexture;ve&&ve.isDepthTexture&&(ve.type===Qi?Te=i.DEPTH_COMPONENT32F:ve.type===ji&&(Te=i.DEPTH_COMPONENT24));let we=rt(S);Be(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,we,Te,S.width,S.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,we,Te,S.width,S.height)}else i.renderbufferStorage(i.RENDERBUFFER,Te,S.width,S.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,C)}else if(S.depthBuffer&&S.stencilBuffer){let Te=rt(S);ee&&Be(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,i.DEPTH24_STENCIL8,S.width,S.height):Be(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te,i.DEPTH24_STENCIL8,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,C)}else{let Te=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ve=0;ve<Te.length;ve++){let we=Te[ve],Xe=r.convert(we.format,we.colorSpace),Ne=r.convert(we.type),Ve=A(we.internalFormat,Xe,Ne,we.colorSpace),at=rt(S);ee&&Be(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,Ve,S.width,S.height):Be(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,Ve,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Ve,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function tt(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),G(S.depthTexture,0);let Te=n.get(S.depthTexture).__webglTexture,ve=rt(S);if(S.depthTexture.format===vs)Be(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Te,0,ve):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Te,0);else if(S.depthTexture.format===ar)Be(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Te,0,ve):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Te,0);else throw new Error("Unknown depthTexture format")}function je(C){let S=n.get(C),ee=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");tt(S.__webglFramebuffer,C)}else if(ee){S.__webglDepthbuffer=[];for(let Te=0;Te<6;Te++)t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[Te]),S.__webglDepthbuffer[Te]=i.createRenderbuffer(),pt(S.__webglDepthbuffer[Te],C,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),pt(S.__webglDepthbuffer,C,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function mt(C,S,ee){let Te=n.get(C);S!==void 0&&We(Te.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ee!==void 0&&je(C)}function K(C){let S=C.texture,ee=n.get(C),Te=n.get(S);C.addEventListener("dispose",X),C.isWebGLMultipleRenderTargets!==!0&&(Te.__webglTexture===void 0&&(Te.__webglTexture=i.createTexture()),Te.__version=S.version,a.memory.textures++);let ve=C.isWebGLCubeRenderTarget===!0,we=C.isWebGLMultipleRenderTargets===!0,Xe=g(C)||o;if(ve){ee.__webglFramebuffer=[];for(let Ne=0;Ne<6;Ne++)if(o&&S.mipmaps&&S.mipmaps.length>0){ee.__webglFramebuffer[Ne]=[];for(let Ve=0;Ve<S.mipmaps.length;Ve++)ee.__webglFramebuffer[Ne][Ve]=i.createFramebuffer()}else ee.__webglFramebuffer[Ne]=i.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){ee.__webglFramebuffer=[];for(let Ne=0;Ne<S.mipmaps.length;Ne++)ee.__webglFramebuffer[Ne]=i.createFramebuffer()}else ee.__webglFramebuffer=i.createFramebuffer();if(we)if(s.drawBuffers){let Ne=C.texture;for(let Ve=0,at=Ne.length;Ve<at;Ve++){let St=n.get(Ne[Ve]);St.__webglTexture===void 0&&(St.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&Be(C)===!1){let Ne=we?S:[S];ee.__webglMultisampledFramebuffer=i.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let Ve=0;Ve<Ne.length;Ve++){let at=Ne[Ve];ee.__webglColorRenderbuffer[Ve]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ee.__webglColorRenderbuffer[Ve]);let St=r.convert(at.format,at.colorSpace),xe=r.convert(at.type),Vt=A(at.internalFormat,St,xe,at.colorSpace,C.isXRRenderTarget===!0),Tt=rt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,Vt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.RENDERBUFFER,ee.__webglColorRenderbuffer[Ve])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(ee.__webglDepthRenderbuffer=i.createRenderbuffer(),pt(ee.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ve){t.bindTexture(i.TEXTURE_CUBE_MAP,Te.__webglTexture),W(i.TEXTURE_CUBE_MAP,S,Xe);for(let Ne=0;Ne<6;Ne++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let Ve=0;Ve<S.mipmaps.length;Ve++)We(ee.__webglFramebuffer[Ne][Ve],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Ve);else We(ee.__webglFramebuffer[Ne],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0);M(S,Xe)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){let Ne=C.texture;for(let Ve=0,at=Ne.length;Ve<at;Ve++){let St=Ne[Ve],xe=n.get(St);t.bindTexture(i.TEXTURE_2D,xe.__webglTexture),W(i.TEXTURE_2D,St,Xe),We(ee.__webglFramebuffer,C,St,i.COLOR_ATTACHMENT0+Ve,i.TEXTURE_2D,0),M(St,Xe)&&_(i.TEXTURE_2D)}t.unbindTexture()}else{let Ne=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?Ne=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ne,Te.__webglTexture),W(Ne,S,Xe),o&&S.mipmaps&&S.mipmaps.length>0)for(let Ve=0;Ve<S.mipmaps.length;Ve++)We(ee.__webglFramebuffer[Ve],C,S,i.COLOR_ATTACHMENT0,Ne,Ve);else We(ee.__webglFramebuffer,C,S,i.COLOR_ATTACHMENT0,Ne,0);M(S,Xe)&&_(Ne),t.unbindTexture()}C.depthBuffer&&je(C)}function un(C){let S=g(C)||o,ee=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let Te=0,ve=ee.length;Te<ve;Te++){let we=ee[Te];if(M(we,S)){let Xe=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ne=n.get(we).__webglTexture;t.bindTexture(Xe,Ne),_(Xe),t.unbindTexture()}}}function $e(C){if(o&&C.samples>0&&Be(C)===!1){let S=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],ee=C.width,Te=C.height,ve=i.COLOR_BUFFER_BIT,we=[],Xe=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ne=n.get(C),Ve=C.isWebGLMultipleRenderTargets===!0;if(Ve)for(let at=0;at<S.length;at++)t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let at=0;at<S.length;at++){we.push(i.COLOR_ATTACHMENT0+at),C.depthBuffer&&we.push(Xe);let St=Ne.__ignoreDepthValues!==void 0?Ne.__ignoreDepthValues:!1;if(St===!1&&(C.depthBuffer&&(ve|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&(ve|=i.STENCIL_BUFFER_BIT)),Ve&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ne.__webglColorRenderbuffer[at]),St===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Xe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Xe])),Ve){let xe=n.get(S[at]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,xe,0)}i.blitFramebuffer(0,0,ee,Te,0,0,ee,Te,ve,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,we)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ve)for(let at=0;at<S.length;at++){t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,Ne.__webglColorRenderbuffer[at]);let St=n.get(S[at]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,St,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}}function rt(C){return Math.min(s.maxSamples,C.samples)}function Be(C){let S=n.get(C);return o&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function sn(C){let S=a.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function bt(C,S){let ee=C.colorSpace,Te=C.format,ve=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===xl||ee!==Ni&&ee!==li&&(Jt.getTransfer(ee)===an?o===!1?e.has("EXT_sRGB")===!0&&Te===vi?(C.format=xl,C.minFilter=oi,C.generateMipmaps=!1):S=Ba.sRGBToLinear(S):(Te!==vi||ve!==ns)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),S}this.allocateTextureUnit=P,this.resetTextureUnits=be,this.setTexture2D=G,this.setTexture2DArray=re,this.setTexture3D=ne,this.setTextureCube=Q,this.rebindTextures=mt,this.setupRenderTarget=K,this.updateRenderTargetMipmap=un,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=We,this.useMultisampledRTT=Be}function mx(i,e,t){let n=t.isWebGL2;function s(r,a=li){let o,l=Jt.getTransfer(a);if(r===ns)return i.UNSIGNED_BYTE;if(r===Tu)return i.UNSIGNED_SHORT_4_4_4_4;if(r===wu)return i.UNSIGNED_SHORT_5_5_5_1;if(r===lf)return i.BYTE;if(r===cf)return i.SHORT;if(r===ac)return i.UNSIGNED_SHORT;if(r===Eu)return i.INT;if(r===ji)return i.UNSIGNED_INT;if(r===Qi)return i.FLOAT;if(r===Ur)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===hf)return i.ALPHA;if(r===vi)return i.RGBA;if(r===uf)return i.LUMINANCE;if(r===df)return i.LUMINANCE_ALPHA;if(r===vs)return i.DEPTH_COMPONENT;if(r===ar)return i.DEPTH_STENCIL;if(r===xl)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===ff)return i.RED;if(r===Au)return i.RED_INTEGER;if(r===pf)return i.RG;if(r===Ru)return i.RG_INTEGER;if(r===Cu)return i.RGBA_INTEGER;if(r===Io||r===Lo||r===Do||r===Uo)if(l===an)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Io)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Lo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Do)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Uo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Io)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Lo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Do)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Uo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Yc||r===$c||r===Zc||r===Kc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Yc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===$c)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Zc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Kc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Pu)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Jc||r===jc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Jc)return l===an?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===jc)return l===an?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Qc||r===eh||r===th||r===nh||r===ih||r===sh||r===rh||r===ah||r===oh||r===lh||r===ch||r===hh||r===uh||r===dh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Qc)return l===an?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===eh)return l===an?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===th)return l===an?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===nh)return l===an?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ih)return l===an?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===sh)return l===an?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===rh)return l===an?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ah)return l===an?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===oh)return l===an?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===lh)return l===an?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ch)return l===an?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===hh)return l===an?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===uh)return l===an?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===dh)return l===an?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===No||r===fh||r===ph)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===No)return l===an?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===fh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ph)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===mf||r===mh||r===gh||r===xh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===No)return o.COMPRESSED_RED_RGTC1_EXT;if(r===mh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===gh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===xh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===_s?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Ll=class extends Xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ci=class extends qn{constructor(){super(),this.isGroup=!0,this.type="Group"}},gx={type:"move"},Rr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ci,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ci,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ci,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,n),m=this._getHandJoint(c,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],d=h.position.distanceTo(p.position),u=.02,y=.005;c.inputState.pinching&&d>u+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=u-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(gx)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ci;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Dl=class extends ss{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,p=null,d=null,u=null,y=null,v=t.getContextAttributes(),g=null,m=null,M=[],_=[],A=new He,D=null,I=new Xn;I.layers.enable(1),I.viewport=new Nn;let L=new Xn;L.layers.enable(2),L.viewport=new Nn;let X=[I,L],b=new Ll;b.layers.enable(1),b.layers.enable(2);let R=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ue=M[W];return ue===void 0&&(ue=new Rr,M[W]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(W){let ue=M[W];return ue===void 0&&(ue=new Rr,M[W]=ue),ue.getGripSpace()},this.getHand=function(W){let ue=M[W];return ue===void 0&&(ue=new Rr,M[W]=ue),ue.getHandSpace()};function ae(W){let ue=_.indexOf(W.inputSource);if(ue===-1)return;let Le=M[ue];Le!==void 0&&(Le.update(W.inputSource,W.frame,c||a),Le.dispatchEvent({type:W.type,data:W.inputSource}))}function be(){s.removeEventListener("select",ae),s.removeEventListener("selectstart",ae),s.removeEventListener("selectend",ae),s.removeEventListener("squeeze",ae),s.removeEventListener("squeezestart",ae),s.removeEventListener("squeezeend",ae),s.removeEventListener("end",be),s.removeEventListener("inputsourceschange",P);for(let W=0;W<M.length;W++){let ue=_[W];ue!==null&&(_[W]=null,M[W].disconnect(ue))}R=null,q=null,e.setRenderTarget(g),u=null,d=null,p=null,s=null,m=null,oe.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return p},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",ae),s.addEventListener("selectstart",ae),s.addEventListener("selectend",ae),s.addEventListener("squeeze",ae),s.addEventListener("squeezestart",ae),s.addEventListener("squeezeend",ae),s.addEventListener("end",be),s.addEventListener("inputsourceschange",P),v.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(A),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let ue={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,ue),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),m=new Oi(u.framebufferWidth,u.framebufferHeight,{format:vi,type:ns,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let ue=null,Le=null,Re=null;v.depth&&(Re=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=v.stencil?ar:vs,Le=v.stencil?_s:ji);let We={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:r};p=new XRWebGLBinding(s,t),d=p.createProjectionLayer(We),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),m=new Oi(d.textureWidth,d.textureHeight,{format:vi,type:ns,depthTexture:new $a(d.textureWidth,d.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});let pt=e.properties.get(m);pt.__ignoreDepthValues=d.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),oe.setContext(s),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function P(W){for(let ue=0;ue<W.removed.length;ue++){let Le=W.removed[ue],Re=_.indexOf(Le);Re>=0&&(_[Re]=null,M[Re].disconnect(Le))}for(let ue=0;ue<W.added.length;ue++){let Le=W.added[ue],Re=_.indexOf(Le);if(Re===-1){for(let pt=0;pt<M.length;pt++)if(pt>=_.length){_.push(Le),Re=pt;break}else if(_[pt]===null){_[pt]=Le,Re=pt;break}if(Re===-1)break}let We=M[Re];We&&We.connect(Le)}}let N=new F,G=new F;function re(W,ue,Le){N.setFromMatrixPosition(ue.matrixWorld),G.setFromMatrixPosition(Le.matrixWorld);let Re=N.distanceTo(G),We=ue.projectionMatrix.elements,pt=Le.projectionMatrix.elements,tt=We[14]/(We[10]-1),je=We[14]/(We[10]+1),mt=(We[9]+1)/We[5],K=(We[9]-1)/We[5],un=(We[8]-1)/We[0],$e=(pt[8]+1)/pt[0],rt=tt*un,Be=tt*$e,sn=Re/(-un+$e),bt=sn*-un;ue.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(bt),W.translateZ(sn),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();let C=tt+sn,S=je+sn,ee=rt-bt,Te=Be+(Re-bt),ve=mt*je/S*C,we=K*je/S*C;W.projectionMatrix.makePerspective(ee,Te,ve,we,C,S),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function ne(W,ue){ue===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ue.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;b.near=L.near=I.near=W.near,b.far=L.far=I.far=W.far,(R!==b.near||q!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),R=b.near,q=b.far);let ue=W.parent,Le=b.cameras;ne(b,ue);for(let Re=0;Re<Le.length;Re++)ne(Le[Re],ue);Le.length===2?re(b,I,L):b.projectionMatrix.copy(I.projectionMatrix),Q(W,b,ue)};function Q(W,ue,Le){Le===null?W.matrix.copy(ue.matrixWorld):(W.matrix.copy(Le.matrixWorld),W.matrix.invert(),W.matrix.multiply(ue.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ue.projectionMatrix),W.projectionMatrixInverse.copy(ue.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=yl*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&u===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=W)};let B=null;function de(W,ue){if(h=ue.getViewerPose(c||a),y=ue,h!==null){let Le=h.views;u!==null&&(e.setRenderTargetFramebuffer(m,u.framebuffer),e.setRenderTarget(m));let Re=!1;Le.length!==b.cameras.length&&(b.cameras.length=0,Re=!0);for(let We=0;We<Le.length;We++){let pt=Le[We],tt=null;if(u!==null)tt=u.getViewport(pt);else{let mt=p.getViewSubImage(d,pt);tt=mt.viewport,We===0&&(e.setRenderTargetTextures(m,mt.colorTexture,d.ignoreDepthValues?void 0:mt.depthStencilTexture),e.setRenderTarget(m))}let je=X[We];je===void 0&&(je=new Xn,je.layers.enable(We),je.viewport=new Nn,X[We]=je),je.matrix.fromArray(pt.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(pt.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(tt.x,tt.y,tt.width,tt.height),We===0&&(b.matrix.copy(je.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Re===!0&&b.cameras.push(je)}}for(let Le=0;Le<M.length;Le++){let Re=_[Le],We=M[Le];Re!==null&&We!==void 0&&We.update(Re,ue,c||a)}B&&B(W,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),y=null}let oe=new Fu;oe.setAnimationLoop(de),this.setAnimationLoop=function(W){B=W},this.dispose=function(){}}};function xx(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Ou(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,M,_,A){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),p(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&u(g,m,A)):m.isMeshMatcapMaterial?(r(g,m),y(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),v(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,M,_):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===ei&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===ei&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let M=e.get(m).envMap;if(M&&(g.envMap.value=M,g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap){g.lightMap.value=m.lightMap;let _=i._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=m.lightMapIntensity*_,t(m.lightMap,g.lightMapTransform)}m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,M,_){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=_*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function p(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),e.get(m).envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function u(g,m,M){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ei&&g.clearcoatNormalScale.value.negate())),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function y(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){let M=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function yx(i,e,t,n){let s={},r={},a=[],o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,_){let A=_.program;n.uniformBlockBinding(M,A)}function c(M,_){let A=s[M.id];A===void 0&&(y(M),A=h(M),s[M.id]=A,M.addEventListener("dispose",g));let D=_.program;n.updateUBOMapping(M,D);let I=e.render.frame;r[M.id]!==I&&(d(M),r[M.id]=I)}function h(M){let _=p();M.__bindingPointIndex=_;let A=i.createBuffer(),D=M.__size,I=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,D,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,A),A}function p(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let _=s[M.id],A=M.uniforms,D=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let I=0,L=A.length;I<L;I++){let X=Array.isArray(A[I])?A[I]:[A[I]];for(let b=0,R=X.length;b<R;b++){let q=X[b];if(u(q,I,b,D)===!0){let ae=q.__offset,be=Array.isArray(q.value)?q.value:[q.value],P=0;for(let N=0;N<be.length;N++){let G=be[N],re=v(G);typeof G=="number"||typeof G=="boolean"?(q.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,ae+P,q.__data)):G.isMatrix3?(q.__data[0]=G.elements[0],q.__data[1]=G.elements[1],q.__data[2]=G.elements[2],q.__data[3]=0,q.__data[4]=G.elements[3],q.__data[5]=G.elements[4],q.__data[6]=G.elements[5],q.__data[7]=0,q.__data[8]=G.elements[6],q.__data[9]=G.elements[7],q.__data[10]=G.elements[8],q.__data[11]=0):(G.toArray(q.__data,P),P+=re.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,ae,q.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(M,_,A,D){let I=M.value,L=_+"_"+A;if(D[L]===void 0)return typeof I=="number"||typeof I=="boolean"?D[L]=I:D[L]=I.clone(),!0;{let X=D[L];if(typeof I=="number"||typeof I=="boolean"){if(X!==I)return D[L]=I,!0}else if(X.equals(I)===!1)return X.copy(I),!0}return!1}function y(M){let _=M.uniforms,A=0,D=16;for(let L=0,X=_.length;L<X;L++){let b=Array.isArray(_[L])?_[L]:[_[L]];for(let R=0,q=b.length;R<q;R++){let ae=b[R],be=Array.isArray(ae.value)?ae.value:[ae.value];for(let P=0,N=be.length;P<N;P++){let G=be[P],re=v(G),ne=A%D;ne!==0&&D-ne<re.boundary&&(A+=D-ne),ae.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=A,A+=re.storage}}}let I=A%D;return I>0&&(A+=D-I),M.__size=A,M.__cache={},this}function v(M){let _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function g(M){let _=M.target;_.removeEventListener("dispose",g);let A=a.indexOf(_.__bindingPointIndex);a.splice(A,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function m(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:m}}var Br=class{constructor(e={}){let{canvas:t=Af(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let u=new Uint32Array(4),y=new Int32Array(4),v=null,g=null,m=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fn,this._useLegacyLights=!1,this.toneMapping=ts,this.toneMappingExposure=1;let _=this,A=!1,D=0,I=0,L=null,X=-1,b=null,R=new Nn,q=new Nn,ae=null,be=new xt(0),P=0,N=t.width,G=t.height,re=1,ne=null,Q=null,B=new Nn(0,0,N,G),de=new Nn(0,0,N,G),oe=!1,W=new Fr,ue=!1,Le=!1,Re=null,We=new En,pt=new He,tt=new F,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function mt(){return L===null?re:1}let K=n;function un(w,z){for(let Y=0;Y<w.length;Y++){let J=w[Y],Z=t.getContext(J,z);if(Z!==null)return Z}return null}try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${sc}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",O,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),K===null){let z=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&z.shift(),K=un(z,w),K===null)throw un(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&K instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),K.getShaderPrecisionFormat===void 0&&(K.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let $e,rt,Be,sn,bt,C,S,ee,Te,ve,we,Xe,Ne,Ve,at,St,xe,Vt,Tt,ct,Ke,ze,ot,ht;function yt(){$e=new Fg(K),rt=new Ig(K,$e,e),$e.init(rt),ze=new mx(K,$e,rt),Be=new fx(K,$e,rt),sn=new Hg(K),bt=new tx,C=new px(K,$e,Be,bt,rt,ze,sn),S=new Dg(_),ee=new Og(_),Te=new $f(K,rt),ot=new Cg(K,$e,Te,rt),ve=new Bg(K,Te,sn,ot),we=new Wg(K,ve,Te,sn),Tt=new Gg(K,rt,C),St=new Lg(bt),Xe=new ex(_,S,ee,$e,rt,ot,St),Ne=new xx(_,bt),Ve=new ix,at=new cx($e,rt),Vt=new Rg(_,S,ee,Be,we,d,l),xe=new dx(_,we,rt),ht=new yx(K,sn,rt,Be),ct=new Pg(K,$e,sn,rt),Ke=new kg(K,$e,sn,rt),sn.programs=Xe.programs,_.capabilities=rt,_.extensions=$e,_.properties=bt,_.renderLists=Ve,_.shadowMap=xe,_.state=Be,_.info=sn}yt();let Qe=new Dl(_,K);this.xr=Qe,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){let w=$e.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=$e.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(w){w!==void 0&&(re=w,this.setSize(N,G,!1))},this.getSize=function(w){return w.set(N,G)},this.setSize=function(w,z,Y=!0){if(Qe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=w,G=z,t.width=Math.floor(w*re),t.height=Math.floor(z*re),Y===!0&&(t.style.width=w+"px",t.style.height=z+"px"),this.setViewport(0,0,w,z)},this.getDrawingBufferSize=function(w){return w.set(N*re,G*re).floor()},this.setDrawingBufferSize=function(w,z,Y){N=w,G=z,re=Y,t.width=Math.floor(w*Y),t.height=Math.floor(z*Y),this.setViewport(0,0,w,z)},this.getCurrentViewport=function(w){return w.copy(R)},this.getViewport=function(w){return w.copy(B)},this.setViewport=function(w,z,Y,J){w.isVector4?B.set(w.x,w.y,w.z,w.w):B.set(w,z,Y,J),Be.viewport(R.copy(B).multiplyScalar(re).floor())},this.getScissor=function(w){return w.copy(de)},this.setScissor=function(w,z,Y,J){w.isVector4?de.set(w.x,w.y,w.z,w.w):de.set(w,z,Y,J),Be.scissor(q.copy(de).multiplyScalar(re).floor())},this.getScissorTest=function(){return oe},this.setScissorTest=function(w){Be.setScissorTest(oe=w)},this.setOpaqueSort=function(w){ne=w},this.setTransparentSort=function(w){Q=w},this.getClearColor=function(w){return w.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor.apply(Vt,arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha.apply(Vt,arguments)},this.clear=function(w=!0,z=!0,Y=!0){let J=0;if(w){let Z=!1;if(L!==null){let Ue=L.texture.format;Z=Ue===Cu||Ue===Ru||Ue===Au}if(Z){let Ue=L.texture.type,qe=Ue===ns||Ue===ji||Ue===ac||Ue===_s||Ue===Tu||Ue===wu,Oe=Vt.getClearColor(),it=Vt.getClearAlpha(),_t=Oe.r,gt=Oe.g,vt=Oe.b;qe?(u[0]=_t,u[1]=gt,u[2]=vt,u[3]=it,K.clearBufferuiv(K.COLOR,0,u)):(y[0]=_t,y[1]=gt,y[2]=vt,y[3]=it,K.clearBufferiv(K.COLOR,0,y))}else J|=K.COLOR_BUFFER_BIT}z&&(J|=K.DEPTH_BUFFER_BIT),Y&&(J|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",O,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),Ve.dispose(),at.dispose(),bt.dispose(),S.dispose(),ee.dispose(),we.dispose(),ot.dispose(),ht.dispose(),Xe.dispose(),Qe.dispose(),Qe.removeEventListener("sessionstart",xn),Qe.removeEventListener("sessionend",ke),Re&&(Re.dispose(),Re=null),dt.stop()};function Ce(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let w=sn.autoReset,z=xe.enabled,Y=xe.autoUpdate,J=xe.needsUpdate,Z=xe.type;yt(),sn.autoReset=w,xe.enabled=z,xe.autoUpdate=Y,xe.needsUpdate=J,xe.type=Z}function Pe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function De(w){let z=w.target;z.removeEventListener("dispose",De),ut(z)}function ut(w){et(w),bt.remove(w)}function et(w){let z=bt.get(w).programs;z!==void 0&&(z.forEach(function(Y){Xe.releaseProgram(Y)}),w.isShaderMaterial&&Xe.releaseShaderCache(w))}this.renderBufferDirect=function(w,z,Y,J,Z,Ue){z===null&&(z=je);let qe=Z.isMesh&&Z.matrixWorld.determinant()<0,Oe=Cn(w,z,Y,J,Z);Be.setMaterial(J,qe);let it=Y.index,_t=1;if(J.wireframe===!0){if(it=ve.getWireframeAttribute(Y),it===void 0)return;_t=2}let gt=Y.drawRange,vt=Y.attributes.position,fn=gt.start*_t,Vn=(gt.start+gt.count)*_t;Ue!==null&&(fn=Math.max(fn,Ue.start*_t),Vn=Math.min(Vn,(Ue.start+Ue.count)*_t)),it!==null?(fn=Math.max(fn,0),Vn=Math.min(Vn,it.count)):vt!=null&&(fn=Math.max(fn,0),Vn=Math.min(Vn,vt.count));let bn=Vn-fn;if(bn<0||bn===1/0)return;ot.setup(Z,J,Oe,Y,it);let fi,Dt=ct;if(it!==null&&(fi=Te.get(it),Dt=Ke,Dt.setIndex(fi)),Z.isMesh)J.wireframe===!0?(Be.setLineWidth(J.wireframeLinewidth*mt()),Dt.setMode(K.LINES)):Dt.setMode(K.TRIANGLES);else if(Z.isLine){let wt=J.linewidth;wt===void 0&&(wt=1),Be.setLineWidth(wt*mt()),Z.isLineSegments?Dt.setMode(K.LINES):Z.isLineLoop?Dt.setMode(K.LINE_LOOP):Dt.setMode(K.LINE_STRIP)}else Z.isPoints?Dt.setMode(K.POINTS):Z.isSprite&&Dt.setMode(K.TRIANGLES);if(Z.isBatchedMesh)Dt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else if(Z.isInstancedMesh)Dt.renderInstances(fn,bn,Z.count);else if(Y.isInstancedBufferGeometry){let wt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,hs=Math.min(Y.instanceCount,wt);Dt.renderInstances(fn,bn,hs)}else Dt.render(fn,bn)};function Ft(w,z,Y){w.transparent===!0&&w.side===_n&&w.forceSinglePass===!1?(w.side=ei,w.needsUpdate=!0,Wt(w,z,Y),w.side=is,w.needsUpdate=!0,Wt(w,z,Y),w.side=_n):Wt(w,z,Y)}this.compile=function(w,z,Y=null){Y===null&&(Y=w),g=at.get(Y),g.init(),M.push(g),Y.traverseVisible(function(Z){Z.isLight&&Z.layers.test(z.layers)&&(g.pushLight(Z),Z.castShadow&&g.pushShadow(Z))}),w!==Y&&w.traverseVisible(function(Z){Z.isLight&&Z.layers.test(z.layers)&&(g.pushLight(Z),Z.castShadow&&g.pushShadow(Z))}),g.setupLights(_._useLegacyLights);let J=new Set;return w.traverse(function(Z){let Ue=Z.material;if(Ue)if(Array.isArray(Ue))for(let qe=0;qe<Ue.length;qe++){let Oe=Ue[qe];Ft(Oe,Y,Z),J.add(Oe)}else Ft(Ue,Y,Z),J.add(Ue)}),M.pop(),g=null,J},this.compileAsync=function(w,z,Y=null){let J=this.compile(w,z,Y);return new Promise(Z=>{function Ue(){if(J.forEach(function(qe){bt.get(qe).currentProgram.isReady()&&J.delete(qe)}),J.size===0){Z(w);return}setTimeout(Ue,10)}$e.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let Ht=null;function Bt(w){Ht&&Ht(w)}function xn(){dt.stop()}function ke(){dt.start()}let dt=new Fu;dt.setAnimationLoop(Bt),typeof self<"u"&&dt.setContext(self),this.setAnimationLoop=function(w){Ht=w,Qe.setAnimationLoop(w),w===null?dt.stop():dt.start()},Qe.addEventListener("sessionstart",xn),Qe.addEventListener("sessionend",ke),this.render=function(w,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Qe.enabled===!0&&Qe.isPresenting===!0&&(Qe.cameraAutoUpdate===!0&&Qe.updateCamera(z),z=Qe.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,z,L),g=at.get(w,M.length),g.init(),M.push(g),We.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),W.setFromProjectionMatrix(We),Le=this.localClippingEnabled,ue=St.init(this.clippingPlanes,Le),v=Ve.get(w,m.length),v.init(),m.push(v),Gt(w,z,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(ne,Q),this.info.render.frame++,ue===!0&&St.beginShadows();let Y=g.state.shadowsArray;if(xe.render(Y,w,z),ue===!0&&St.endShadows(),this.info.autoReset===!0&&this.info.reset(),Vt.render(v,w),g.setupLights(_._useLegacyLights),z.isArrayCamera){let J=z.cameras;for(let Z=0,Ue=J.length;Z<Ue;Z++){let qe=J[Z];dn(v,w,qe,qe.viewport)}}else dn(v,w,z);L!==null&&(C.updateMultisampleRenderTarget(L),C.updateRenderTargetMipmap(L)),w.isScene===!0&&w.onAfterRender(_,w,z),ot.resetDefaultState(),X=-1,b=null,M.pop(),M.length>0?g=M[M.length-1]:g=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function Gt(w,z,Y,J){if(w.visible===!1)return;if(w.layers.test(z.layers)){if(w.isGroup)Y=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(z);else if(w.isLight)g.pushLight(w),w.castShadow&&g.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||W.intersectsSprite(w)){J&&tt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(We);let qe=we.update(w),Oe=w.material;Oe.visible&&v.push(w,qe,Oe,Y,tt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||W.intersectsObject(w))){let qe=we.update(w),Oe=w.material;if(J&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),tt.copy(w.boundingSphere.center)):(qe.boundingSphere===null&&qe.computeBoundingSphere(),tt.copy(qe.boundingSphere.center)),tt.applyMatrix4(w.matrixWorld).applyMatrix4(We)),Array.isArray(Oe)){let it=qe.groups;for(let _t=0,gt=it.length;_t<gt;_t++){let vt=it[_t],fn=Oe[vt.materialIndex];fn&&fn.visible&&v.push(w,qe,fn,Y,tt.z,vt)}}else Oe.visible&&v.push(w,qe,Oe,Y,tt.z,null)}}let Ue=w.children;for(let qe=0,Oe=Ue.length;qe<Oe;qe++)Gt(Ue[qe],z,Y,J)}function dn(w,z,Y,J){let Z=w.opaque,Ue=w.transmissive,qe=w.transparent;g.setupLightsView(Y),ue===!0&&St.setGlobalState(_.clippingPlanes,Y),Ue.length>0&&Zr(Z,Ue,z,Y),J&&Be.viewport(R.copy(J)),Z.length>0&&Rs(Z,z,Y),Ue.length>0&&Rs(Ue,z,Y),qe.length>0&&Rs(qe,z,Y),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function Zr(w,z,Y,J){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;let Ue=rt.isWebGL2;Re===null&&(Re=new Oi(1,1,{generateMipmaps:!0,type:$e.has("EXT_color_buffer_half_float")?Ur:ns,minFilter:Dr,samples:Ue?4:0})),_.getDrawingBufferSize(pt),Ue?Re.setSize(pt.x,pt.y):Re.setSize(_l(pt.x),_l(pt.y));let qe=_.getRenderTarget();_.setRenderTarget(Re),_.getClearColor(be),P=_.getClearAlpha(),P<1&&_.setClearColor(16777215,.5),_.clear();let Oe=_.toneMapping;_.toneMapping=ts,Rs(w,Y,J),C.updateMultisampleRenderTarget(Re),C.updateRenderTargetMipmap(Re);let it=!1;for(let _t=0,gt=z.length;_t<gt;_t++){let vt=z[_t],fn=vt.object,Vn=vt.geometry,bn=vt.material,fi=vt.group;if(bn.side===_n&&fn.layers.test(J.layers)){let Dt=bn.side;bn.side=ei,bn.needsUpdate=!0,zi(fn,Y,J,Vn,bn,fi),bn.side=Dt,bn.needsUpdate=!0,it=!0}}it===!0&&(C.updateMultisampleRenderTarget(Re),C.updateRenderTargetMipmap(Re)),_.setRenderTarget(qe),_.setClearColor(be,P),_.toneMapping=Oe}function Rs(w,z,Y){let J=z.isScene===!0?z.overrideMaterial:null;for(let Z=0,Ue=w.length;Z<Ue;Z++){let qe=w[Z],Oe=qe.object,it=qe.geometry,_t=J===null?qe.material:J,gt=qe.group;Oe.layers.test(Y.layers)&&zi(Oe,z,Y,it,_t,gt)}}function zi(w,z,Y,J,Z,Ue){w.onBeforeRender(_,z,Y,J,Z,Ue),w.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Z.onBeforeRender(_,z,Y,J,w,Ue),Z.transparent===!0&&Z.side===_n&&Z.forceSinglePass===!1?(Z.side=ei,Z.needsUpdate=!0,_.renderBufferDirect(Y,z,J,Z,w,Ue),Z.side=is,Z.needsUpdate=!0,_.renderBufferDirect(Y,z,J,Z,w,Ue),Z.side=_n):_.renderBufferDirect(Y,z,J,Z,w,Ue),w.onAfterRender(_,z,Y,J,Z,Ue)}function Wt(w,z,Y){z.isScene!==!0&&(z=je);let J=bt.get(w),Z=g.state.lights,Ue=g.state.shadowsArray,qe=Z.state.version,Oe=Xe.getParameters(w,Z.state,Ue,z,Y),it=Xe.getProgramCacheKey(Oe),_t=J.programs;J.environment=w.isMeshStandardMaterial?z.environment:null,J.fog=z.fog,J.envMap=(w.isMeshStandardMaterial?ee:S).get(w.envMap||J.environment),_t===void 0&&(w.addEventListener("dispose",De),_t=new Map,J.programs=_t);let gt=_t.get(it);if(gt!==void 0){if(J.currentProgram===gt&&J.lightsStateVersion===qe)return di(w,Oe),gt}else Oe.uniforms=Xe.getUniforms(w),w.onBuild(Y,Oe,_),w.onBeforeCompile(Oe,_),gt=Xe.acquireProgram(Oe,it),_t.set(it,gt),J.uniforms=Oe.uniforms;let vt=J.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(vt.clippingPlanes=St.uniform),di(w,Oe),J.needsLights=Pn(w),J.lightsStateVersion=qe,J.needsLights&&(vt.ambientLightColor.value=Z.state.ambient,vt.lightProbe.value=Z.state.probe,vt.directionalLights.value=Z.state.directional,vt.directionalLightShadows.value=Z.state.directionalShadow,vt.spotLights.value=Z.state.spot,vt.spotLightShadows.value=Z.state.spotShadow,vt.rectAreaLights.value=Z.state.rectArea,vt.ltc_1.value=Z.state.rectAreaLTC1,vt.ltc_2.value=Z.state.rectAreaLTC2,vt.pointLights.value=Z.state.point,vt.pointLightShadows.value=Z.state.pointShadow,vt.hemisphereLights.value=Z.state.hemi,vt.directionalShadowMap.value=Z.state.directionalShadowMap,vt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,vt.spotShadowMap.value=Z.state.spotShadowMap,vt.spotLightMatrix.value=Z.state.spotLightMatrix,vt.spotLightMap.value=Z.state.spotLightMap,vt.pointShadowMap.value=Z.state.pointShadowMap,vt.pointShadowMatrix.value=Z.state.pointShadowMatrix),J.currentProgram=gt,J.uniformsList=null,gt}function $n(w){if(w.uniformsList===null){let z=w.currentProgram.getUniforms();w.uniformsList=ir.seqWithValue(z.seq,w.uniforms)}return w.uniformsList}function di(w,z){let Y=bt.get(w);Y.outputColorSpace=z.outputColorSpace,Y.batching=z.batching,Y.instancing=z.instancing,Y.instancingColor=z.instancingColor,Y.skinning=z.skinning,Y.morphTargets=z.morphTargets,Y.morphNormals=z.morphNormals,Y.morphColors=z.morphColors,Y.morphTargetsCount=z.morphTargetsCount,Y.numClippingPlanes=z.numClippingPlanes,Y.numIntersection=z.numClipIntersection,Y.vertexAlphas=z.vertexAlphas,Y.vertexTangents=z.vertexTangents,Y.toneMapping=z.toneMapping}function Cn(w,z,Y,J,Z){z.isScene!==!0&&(z=je),C.resetTextureUnits();let Ue=z.fog,qe=J.isMeshStandardMaterial?z.environment:null,Oe=L===null?_.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ni,it=(J.isMeshStandardMaterial?ee:S).get(J.envMap||qe),_t=J.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,gt=!!Y.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),vt=!!Y.morphAttributes.position,fn=!!Y.morphAttributes.normal,Vn=!!Y.morphAttributes.color,bn=ts;J.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(bn=_.toneMapping);let fi=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Dt=fi!==void 0?fi.length:0,wt=bt.get(J),hs=g.state.lights;if(ue===!0&&(Le===!0||w!==b)){let Zn=w===b&&J.id===X;St.setState(J,w,Zn)}let It=!1;J.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==hs.state.version||wt.outputColorSpace!==Oe||Z.isBatchedMesh&&wt.batching===!1||!Z.isBatchedMesh&&wt.batching===!0||Z.isInstancedMesh&&wt.instancing===!1||!Z.isInstancedMesh&&wt.instancing===!0||Z.isSkinnedMesh&&wt.skinning===!1||!Z.isSkinnedMesh&&wt.skinning===!0||Z.isInstancedMesh&&wt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&wt.instancingColor===!1&&Z.instanceColor!==null||wt.envMap!==it||J.fog===!0&&wt.fog!==Ue||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==St.numPlanes||wt.numIntersection!==St.numIntersection)||wt.vertexAlphas!==_t||wt.vertexTangents!==gt||wt.morphTargets!==vt||wt.morphNormals!==fn||wt.morphColors!==Vn||wt.toneMapping!==bn||rt.isWebGL2===!0&&wt.morphTargetsCount!==Dt)&&(It=!0):(It=!0,wt.__version=J.version);let pi=wt.currentProgram;It===!0&&(pi=Wt(J,z,Z));let xo=!1,Vi=!1,Cs=!1,In=pi.getUniforms(),Ln=wt.uniforms;if(Be.useProgram(pi.program)&&(xo=!0,Vi=!0,Cs=!0),J.id!==X&&(X=J.id,Vi=!0),xo||b!==w){In.setValue(K,"projectionMatrix",w.projectionMatrix),In.setValue(K,"viewMatrix",w.matrixWorldInverse);let Zn=In.map.cameraPosition;Zn!==void 0&&Zn.setValue(K,tt.setFromMatrixPosition(w.matrixWorld)),rt.logarithmicDepthBuffer&&In.setValue(K,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&In.setValue(K,"isOrthographic",w.isOrthographicCamera===!0),b!==w&&(b=w,Vi=!0,Cs=!0)}if(Z.isSkinnedMesh){In.setOptional(K,Z,"bindMatrix"),In.setOptional(K,Z,"bindMatrixInverse");let Zn=Z.skeleton;Zn&&(rt.floatVertexTextures?(Zn.boneTexture===null&&Zn.computeBoneTexture(),In.setValue(K,"boneTexture",Zn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Z.isBatchedMesh&&(In.setOptional(K,Z,"batchingTexture"),In.setValue(K,"batchingTexture",Z._matricesTexture,C));let mr=Y.morphAttributes;if((mr.position!==void 0||mr.normal!==void 0||mr.color!==void 0&&rt.isWebGL2===!0)&&Tt.update(Z,Y,pi),(Vi||wt.receiveShadow!==Z.receiveShadow)&&(wt.receiveShadow=Z.receiveShadow,In.setValue(K,"receiveShadow",Z.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Ln.envMap.value=it,Ln.flipEnvMap.value=it.isCubeTexture&&it.isRenderTargetTexture===!1?-1:1),Vi&&(In.setValue(K,"toneMappingExposure",_.toneMappingExposure),wt.needsLights&&tn(Ln,Cs),Ue&&J.fog===!0&&Ne.refreshFogUniforms(Ln,Ue),Ne.refreshMaterialUniforms(Ln,J,re,G,Re),ir.upload(K,$n(wt),Ln,C)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(ir.upload(K,$n(wt),Ln,C),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&In.setValue(K,"center",Z.center),In.setValue(K,"modelViewMatrix",Z.modelViewMatrix),In.setValue(K,"normalMatrix",Z.normalMatrix),In.setValue(K,"modelMatrix",Z.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let Zn=J.uniformsGroups;for(let gr=0,Ps=Zn.length;gr<Ps;gr++)if(rt.isWebGL2){let Kn=Zn[gr];ht.update(Kn,pi),ht.bind(Kn,pi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return pi}function tn(w,z){w.ambientLightColor.needsUpdate=z,w.lightProbe.needsUpdate=z,w.directionalLights.needsUpdate=z,w.directionalLightShadows.needsUpdate=z,w.pointLights.needsUpdate=z,w.pointLightShadows.needsUpdate=z,w.spotLights.needsUpdate=z,w.spotLightShadows.needsUpdate=z,w.rectAreaLights.needsUpdate=z,w.hemisphereLights.needsUpdate=z}function Pn(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(w,z,Y){bt.get(w.texture).__webglTexture=z,bt.get(w.depthTexture).__webglTexture=Y;let J=bt.get(w);J.__hasExternalTextures=!0,J.__hasExternalTextures&&(J.__autoAllocateDepthBuffer=Y===void 0,J.__autoAllocateDepthBuffer||$e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,z){let Y=bt.get(w);Y.__webglFramebuffer=z,Y.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(w,z=0,Y=0){L=w,D=z,I=Y;let J=!0,Z=null,Ue=!1,qe=!1;if(w){let it=bt.get(w);it.__useDefaultFramebuffer!==void 0?(Be.bindFramebuffer(K.FRAMEBUFFER,null),J=!1):it.__webglFramebuffer===void 0?C.setupRenderTarget(w):it.__hasExternalTextures&&C.rebindTextures(w,bt.get(w.texture).__webglTexture,bt.get(w.depthTexture).__webglTexture);let _t=w.texture;(_t.isData3DTexture||_t.isDataArrayTexture||_t.isCompressedArrayTexture)&&(qe=!0);let gt=bt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(gt[z])?Z=gt[z][Y]:Z=gt[z],Ue=!0):rt.isWebGL2&&w.samples>0&&C.useMultisampledRTT(w)===!1?Z=bt.get(w).__webglMultisampledFramebuffer:Array.isArray(gt)?Z=gt[Y]:Z=gt,R.copy(w.viewport),q.copy(w.scissor),ae=w.scissorTest}else R.copy(B).multiplyScalar(re).floor(),q.copy(de).multiplyScalar(re).floor(),ae=oe;if(Be.bindFramebuffer(K.FRAMEBUFFER,Z)&&rt.drawBuffers&&J&&Be.drawBuffers(w,Z),Be.viewport(R),Be.scissor(q),Be.setScissorTest(ae),Ue){let it=bt.get(w.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+z,it.__webglTexture,Y)}else if(qe){let it=bt.get(w.texture),_t=z||0;K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,it.__webglTexture,Y||0,_t)}X=-1},this.readRenderTargetPixels=function(w,z,Y,J,Z,Ue,qe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=bt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&qe!==void 0&&(Oe=Oe[qe]),Oe){Be.bindFramebuffer(K.FRAMEBUFFER,Oe);try{let it=w.texture,_t=it.format,gt=it.type;if(_t!==vi&&ze.convert(_t)!==K.getParameter(K.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let vt=gt===Ur&&($e.has("EXT_color_buffer_half_float")||rt.isWebGL2&&$e.has("EXT_color_buffer_float"));if(gt!==ns&&ze.convert(gt)!==K.getParameter(K.IMPLEMENTATION_COLOR_READ_TYPE)&&!(gt===Qi&&(rt.isWebGL2||$e.has("OES_texture_float")||$e.has("WEBGL_color_buffer_float")))&&!vt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=w.width-J&&Y>=0&&Y<=w.height-Z&&K.readPixels(z,Y,J,Z,ze.convert(_t),ze.convert(gt),Ue)}finally{let it=L!==null?bt.get(L).__webglFramebuffer:null;Be.bindFramebuffer(K.FRAMEBUFFER,it)}}},this.copyFramebufferToTexture=function(w,z,Y=0){let J=Math.pow(2,-Y),Z=Math.floor(z.image.width*J),Ue=Math.floor(z.image.height*J);C.setTexture2D(z,0),K.copyTexSubImage2D(K.TEXTURE_2D,Y,0,0,w.x,w.y,Z,Ue),Be.unbindTexture()},this.copyTextureToTexture=function(w,z,Y,J=0){let Z=z.image.width,Ue=z.image.height,qe=ze.convert(Y.format),Oe=ze.convert(Y.type);C.setTexture2D(Y,0),K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,Y.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,Y.unpackAlignment),z.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,J,w.x,w.y,Z,Ue,qe,Oe,z.image.data):z.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,J,w.x,w.y,z.mipmaps[0].width,z.mipmaps[0].height,qe,z.mipmaps[0].data):K.texSubImage2D(K.TEXTURE_2D,J,w.x,w.y,qe,Oe,z.image),J===0&&Y.generateMipmaps&&K.generateMipmap(K.TEXTURE_2D),Be.unbindTexture()},this.copyTextureToTexture3D=function(w,z,Y,J,Z=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Ue=w.max.x-w.min.x+1,qe=w.max.y-w.min.y+1,Oe=w.max.z-w.min.z+1,it=ze.convert(J.format),_t=ze.convert(J.type),gt;if(J.isData3DTexture)C.setTexture3D(J,0),gt=K.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)C.setTexture2DArray(J,0),gt=K.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,J.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,J.unpackAlignment);let vt=K.getParameter(K.UNPACK_ROW_LENGTH),fn=K.getParameter(K.UNPACK_IMAGE_HEIGHT),Vn=K.getParameter(K.UNPACK_SKIP_PIXELS),bn=K.getParameter(K.UNPACK_SKIP_ROWS),fi=K.getParameter(K.UNPACK_SKIP_IMAGES),Dt=Y.isCompressedTexture?Y.mipmaps[Z]:Y.image;K.pixelStorei(K.UNPACK_ROW_LENGTH,Dt.width),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Dt.height),K.pixelStorei(K.UNPACK_SKIP_PIXELS,w.min.x),K.pixelStorei(K.UNPACK_SKIP_ROWS,w.min.y),K.pixelStorei(K.UNPACK_SKIP_IMAGES,w.min.z),Y.isDataTexture||Y.isData3DTexture?K.texSubImage3D(gt,Z,z.x,z.y,z.z,Ue,qe,Oe,it,_t,Dt.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),K.compressedTexSubImage3D(gt,Z,z.x,z.y,z.z,Ue,qe,Oe,it,Dt.data)):K.texSubImage3D(gt,Z,z.x,z.y,z.z,Ue,qe,Oe,it,_t,Dt),K.pixelStorei(K.UNPACK_ROW_LENGTH,vt),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,fn),K.pixelStorei(K.UNPACK_SKIP_PIXELS,Vn),K.pixelStorei(K.UNPACK_SKIP_ROWS,bn),K.pixelStorei(K.UNPACK_SKIP_IMAGES,fi),Z===0&&J.generateMipmaps&&K.generateMipmap(gt),Be.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),Be.unbindTexture()},this.resetState=function(){D=0,I=0,L=null,Be.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===oc?"display-p3":"srgb",t.unpackColorSpace=Jt.workingColorSpace===co?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Fn?Ms:Iu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ms?Fn:Ni}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Ul=class extends Br{};Ul.prototype.isWebGL1Renderer=!0;var Za=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new xt(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ka=class extends qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var kr=class extends as{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},lu=new F,cu=new F,hu=new En,ol=new Nr,Ta=new or,Nl=class extends qn{constructor(e=new ni,t=new kr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)lu.fromBufferAttribute(t,s-1),cu.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=lu.distanceTo(cu);e.setAttribute("lineDistance",new gn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ta.copy(n.boundingSphere),Ta.applyMatrix4(s),Ta.radius+=r,e.ray.intersectsSphere(Ta)===!1)return;hu.copy(s).invert(),ol.copy(e.ray).applyMatrix4(hu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new F,h=new F,p=new F,d=new F,u=this.isLineSegments?2:1,y=n.index,g=n.attributes.position;if(y!==null){let m=Math.max(0,a.start),M=Math.min(y.count,a.start+a.count);for(let _=m,A=M-1;_<A;_+=u){let D=y.getX(_),I=y.getX(_+1);if(c.fromBufferAttribute(g,D),h.fromBufferAttribute(g,I),ol.distanceSqToSegment(c,h,d,p)>l)continue;d.applyMatrix4(this.matrixWorld);let X=e.ray.origin.distanceTo(d);X<e.near||X>e.far||t.push({distance:X,point:p.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{let m=Math.max(0,a.start),M=Math.min(g.count,a.start+a.count);for(let _=m,A=M-1;_<A;_+=u){if(c.fromBufferAttribute(g,_),h.fromBufferAttribute(g,_+1),ol.distanceSqToSegment(c,h,d,p)>l)continue;d.applyMatrix4(this.matrixWorld);let I=e.ray.origin.distanceTo(d);I<e.near||I>e.far||t.push({distance:I,point:p.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},uu=new F,du=new F,Ja=class extends Nl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)uu.fromBufferAttribute(t,s),du.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+uu.distanceTo(du);e.setAttribute("lineDistance",new gn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ja=class extends hi{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ui=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,u=(a-h)/d;return(s+u)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new He:new F);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new F,s=[],r=[],a=[],o=new F,l=new En;for(let u=0;u<=e;u++){let y=u/e;s[u]=this.getTangentAt(y,new F)}r[0]=new F,a[0]=new F;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),p=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),p<=c&&(c=p,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(s[u-1],s[u]),o.length()>Number.EPSILON){o.normalize();let y=Math.acos(zn(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(o,y))}a[u].crossVectors(s[u],r[u])}if(t===!0){let u=Math.acos(zn(r[0].dot(r[e]),-1,1));u/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(u=-u);for(let y=1;y<=e;y++)r[y].applyMatrix4(l.makeRotationAxis(s[y],u*y)),a[y].crossVectors(s[y],r[y])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Hr=class extends ui{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let n=t||new He,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),d=l-this.aX,u=c-this.aY;l=d*h-u*p+this.aX,c=d*p+u*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ol=class extends Hr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function cc(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,p){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,u=(o-a)/h-(l-a)/(h+p)+(l-o)/p;d*=h,u*=h,s(a,o,d,u)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var wa=new F,ll=new cc,cl=new cc,hl=new cc,Fl=class extends ui{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new F){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(wa.subVectors(s[0],s[1]).add(s[0]),c=wa);let p=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(wa.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=wa),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,y=Math.pow(c.distanceToSquared(p),u),v=Math.pow(p.distanceToSquared(d),u),g=Math.pow(d.distanceToSquared(h),u);v<1e-4&&(v=1),y<1e-4&&(y=v),g<1e-4&&(g=v),ll.initNonuniformCatmullRom(c.x,p.x,d.x,h.x,y,v,g),cl.initNonuniformCatmullRom(c.y,p.y,d.y,h.y,y,v,g),hl.initNonuniformCatmullRom(c.z,p.z,d.z,h.z,y,v,g)}else this.curveType==="catmullrom"&&(ll.initCatmullRom(c.x,p.x,d.x,h.x,this.tension),cl.initCatmullRom(c.y,p.y,d.y,h.y,this.tension),hl.initCatmullRom(c.z,p.z,d.z,h.z,this.tension));return n.set(ll.calc(l),cl.calc(l),hl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new F().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function fu(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function _x(i,e){let t=1-i;return t*t*e}function vx(i,e){return 2*(1-i)*i*e}function Mx(i,e){return i*i*e}function Cr(i,e,t,n){return _x(i,e)+vx(i,t)+Mx(i,n)}function bx(i,e){let t=1-i;return t*t*t*e}function Sx(i,e){let t=1-i;return 3*t*t*i*e}function Ex(i,e){return 3*(1-i)*i*i*e}function Tx(i,e){return i*i*i*e}function Pr(i,e,t,n,s){return bx(i,e)+Sx(i,t)+Ex(i,n)+Tx(i,s)}var Qa=class extends ui{constructor(e=new He,t=new He,n=new He,s=new He){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new He){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Pr(e,s.x,r.x,a.x,o.x),Pr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Bl=class extends ui{constructor(e=new F,t=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Pr(e,s.x,r.x,a.x,o.x),Pr(e,s.y,r.y,a.y,o.y),Pr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},eo=class extends ui{constructor(e=new He,t=new He){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new He){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new He){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},kl=class extends ui{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},to=class extends ui{constructor(e=new He,t=new He,n=new He){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new He){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Cr(e,s.x,r.x,a.x),Cr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Hl=class extends ui{constructor(e=new F,t=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Cr(e,s.x,r.x,a.x),Cr(e,s.y,r.y,a.y),Cr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},no=class extends ui{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new He){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],p=s[a>s.length-3?s.length-1:a+2];return n.set(fu(o,l.x,c.x,h.x,p.x),fu(o,l.y,c.y,h.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new He().fromArray(s))}return this}},pu=Object.freeze({__proto__:null,ArcCurve:Ol,CatmullRomCurve3:Fl,CubicBezierCurve:Qa,CubicBezierCurve3:Bl,EllipseCurve:Hr,LineCurve:eo,LineCurve3:kl,QuadraticBezierCurve:to,QuadraticBezierCurve3:Hl,SplineCurve:no}),zl=class extends ui{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new pu[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new pu[s.type]().fromJSON(s))}return this}},cr=class extends zl{constructor(e){super(),this.type="Path",this.currentPoint=new He,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new eo(this.currentPoint.clone(),new He(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new to(this.currentPoint.clone(),new He(e,t),new He(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Qa(this.currentPoint.clone(),new He(e,t),new He(n,s),new He(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new no(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Hr(e,t,n,s,r,a,o,l);if(this.curves.length>0){let p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var os=class i extends ni{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],p=[],d=[],u=[],y=0,v=[],g=n/2,m=0;M(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new gn(p,3)),this.setAttribute("normal",new gn(d,3)),this.setAttribute("uv",new gn(u,2));function M(){let A=new F,D=new F,I=0,L=(t-e)/n;for(let X=0;X<=r;X++){let b=[],R=X/r,q=R*(t-e)+e;for(let ae=0;ae<=s;ae++){let be=ae/s,P=be*l+o,N=Math.sin(P),G=Math.cos(P);D.x=q*N,D.y=-R*n+g,D.z=q*G,p.push(D.x,D.y,D.z),A.set(N,L,G).normalize(),d.push(A.x,A.y,A.z),u.push(be,1-R),b.push(y++)}v.push(b)}for(let X=0;X<s;X++)for(let b=0;b<r;b++){let R=v[b][X],q=v[b+1][X],ae=v[b+1][X+1],be=v[b][X+1];h.push(R,q,be),h.push(q,ae,be),I+=6}c.addGroup(m,I,0),m+=I}function _(A){let D=y,I=new He,L=new F,X=0,b=A===!0?e:t,R=A===!0?1:-1;for(let ae=1;ae<=s;ae++)p.push(0,g*R,0),d.push(0,R,0),u.push(.5,.5),y++;let q=y;for(let ae=0;ae<=s;ae++){let P=ae/s*l+o,N=Math.cos(P),G=Math.sin(P);L.x=b*G,L.y=g*R,L.z=b*N,p.push(L.x,L.y,L.z),d.push(0,R,0),I.x=N*.5+.5,I.y=G*.5*R+.5,u.push(I.x,I.y),y++}for(let ae=0;ae<s;ae++){let be=D+ae,P=q+ae;A===!0?h.push(P,P+1,be):h.push(P+1,P,be),X+=3}c.addGroup(m,X,A===!0?1:2),m+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Mi=class i extends os{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Vl=class i extends ni{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new gn(r,3)),this.setAttribute("normal",new gn(r.slice(),3)),this.setAttribute("uv",new gn(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let _=new F,A=new F,D=new F;for(let I=0;I<t.length;I+=3)u(t[I+0],_),u(t[I+1],A),u(t[I+2],D),l(_,A,D,M)}function l(M,_,A,D){let I=D+1,L=[];for(let X=0;X<=I;X++){L[X]=[];let b=M.clone().lerp(A,X/I),R=_.clone().lerp(A,X/I),q=I-X;for(let ae=0;ae<=q;ae++)ae===0&&X===I?L[X][ae]=b:L[X][ae]=b.clone().lerp(R,ae/q)}for(let X=0;X<I;X++)for(let b=0;b<2*(I-X)-1;b++){let R=Math.floor(b/2);b%2===0?(d(L[X][R+1]),d(L[X+1][R]),d(L[X][R])):(d(L[X][R+1]),d(L[X+1][R+1]),d(L[X+1][R]))}}function c(M){let _=new F;for(let A=0;A<r.length;A+=3)_.x=r[A+0],_.y=r[A+1],_.z=r[A+2],_.normalize().multiplyScalar(M),r[A+0]=_.x,r[A+1]=_.y,r[A+2]=_.z}function h(){let M=new F;for(let _=0;_<r.length;_+=3){M.x=r[_+0],M.y=r[_+1],M.z=r[_+2];let A=g(M)/2/Math.PI+.5,D=m(M)/Math.PI+.5;a.push(A,1-D)}y(),p()}function p(){for(let M=0;M<a.length;M+=6){let _=a[M+0],A=a[M+2],D=a[M+4],I=Math.max(_,A,D),L=Math.min(_,A,D);I>.9&&L<.1&&(_<.2&&(a[M+0]+=1),A<.2&&(a[M+2]+=1),D<.2&&(a[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function u(M,_){let A=M*3;_.x=e[A+0],_.y=e[A+1],_.z=e[A+2]}function y(){let M=new F,_=new F,A=new F,D=new F,I=new He,L=new He,X=new He;for(let b=0,R=0;b<r.length;b+=9,R+=6){M.set(r[b+0],r[b+1],r[b+2]),_.set(r[b+3],r[b+4],r[b+5]),A.set(r[b+6],r[b+7],r[b+8]),I.set(a[R+0],a[R+1]),L.set(a[R+2],a[R+3]),X.set(a[R+4],a[R+5]),D.copy(M).add(_).add(A).divideScalar(3);let q=g(D);v(I,R+0,M,q),v(L,R+2,_,q),v(X,R+4,A,q)}}function v(M,_,A,D){D<0&&M.x===1&&(a[_]=M.x-1),A.x===0&&A.z===0&&(a[_]=D/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},io=class i extends Vl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var hr=class extends cr{constructor(e){super(e),this.uuid=dr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new cr().fromJSON(s))}return this}},wx={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Gu(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,p,d,u;if(n&&(r=Ix(i,e,r,t)),i.length>80*t){o=c=i[0],l=h=i[1];for(let y=t;y<s;y+=t)p=i[y],d=i[y+1],p<o&&(o=p),d<l&&(l=d),p>c&&(c=p),d>h&&(h=d);u=Math.max(c-o,h-l),u=u!==0?32767/u:0}return zr(r,a,t,o,l,u,0),a}};function Gu(i,e,t,n,s){let r,a;if(s===Vx(i,e,t,n)>0)for(r=e;r<t;r+=n)a=mu(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=mu(r,i[r],i[r+1],a);return a&&uo(a,a.next)&&(Gr(a),a=a.next),a}function Ss(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(uo(t,t.next)||mn(t.prev,t,t.next)===0)){if(Gr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function zr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Ox(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Rx(i,n,s,r):Ax(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Gr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Cx(Ss(i),e,t),zr(i,e,t,n,s,r,2)):a===2&&Px(i,e,t,n,s,r):zr(Ss(i),e,t,n,s,r,1);break}}}function Ax(i){let e=i.prev,t=i,n=i.next;if(mn(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,p=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,u=o>l?o>c?o:c:l>c?l:c,y=n.next;for(;y!==e;){if(y.x>=h&&y.x<=d&&y.y>=p&&y.y<=u&&er(s,o,r,l,a,c,y.x,y.y)&&mn(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function Rx(i,e,t,n){let s=i.prev,r=i,a=i.next;if(mn(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,p=r.y,d=a.y,u=o<l?o<c?o:c:l<c?l:c,y=h<p?h<d?h:d:p<d?p:d,v=o>l?o>c?o:c:l>c?l:c,g=h>p?h>d?h:d:p>d?p:d,m=Gl(u,y,e,t,n),M=Gl(v,g,e,t,n),_=i.prevZ,A=i.nextZ;for(;_&&_.z>=m&&A&&A.z<=M;){if(_.x>=u&&_.x<=v&&_.y>=y&&_.y<=g&&_!==s&&_!==a&&er(o,h,l,p,c,d,_.x,_.y)&&mn(_.prev,_,_.next)>=0||(_=_.prevZ,A.x>=u&&A.x<=v&&A.y>=y&&A.y<=g&&A!==s&&A!==a&&er(o,h,l,p,c,d,A.x,A.y)&&mn(A.prev,A,A.next)>=0))return!1;A=A.nextZ}for(;_&&_.z>=m;){if(_.x>=u&&_.x<=v&&_.y>=y&&_.y<=g&&_!==s&&_!==a&&er(o,h,l,p,c,d,_.x,_.y)&&mn(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;A&&A.z<=M;){if(A.x>=u&&A.x<=v&&A.y>=y&&A.y<=g&&A!==s&&A!==a&&er(o,h,l,p,c,d,A.x,A.y)&&mn(A.prev,A,A.next)>=0)return!1;A=A.nextZ}return!0}function Cx(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!uo(s,r)&&Wu(s,n,n.next,r)&&Vr(s,r)&&Vr(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Gr(n),Gr(n.next),n=i=r),n=n.next}while(n!==i);return Ss(n)}function Px(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&kx(a,o)){let l=Xu(a,o);a=Ss(a,a.next),l=Ss(l,l.next),zr(a,e,t,n,s,r,0),zr(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Ix(i,e,t,n){let s=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Gu(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Bx(c));for(s.sort(Lx),r=0;r<s.length;r++)t=Dx(s[r],t);return t}function Lx(i,e){return i.x-e.x}function Dx(i,e){let t=Ux(i,e);if(!t)return e;let n=Xu(t,i);return Ss(n,n.next),Ss(t,t.next)}function Ux(i,e){let t=e,n=-1/0,s,r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,p;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&er(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(p=Math.abs(a-t.y)/(r-t.x),Vr(t,i)&&(p<h||p===h&&(t.x>s.x||t.x===s.x&&Nx(s,t)))&&(s=t,h=p)),t=t.next;while(t!==o);return s}function Nx(i,e){return mn(i.prev,i,e.prev)<0&&mn(e.next,i,i.next)<0}function Ox(i,e,t,n){let s=i;do s.z===0&&(s.z=Gl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Fx(s)}function Fx(i){let e,t,n,s,r,a,o,l,c=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(a>1);return i}function Gl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Bx(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function er(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function kx(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Hx(i,e)&&(Vr(i,e)&&Vr(e,i)&&zx(i,e)&&(mn(i.prev,i,e.prev)||mn(i,e.prev,e))||uo(i,e)&&mn(i.prev,i,i.next)>0&&mn(e.prev,e,e.next)>0)}function mn(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function uo(i,e){return i.x===e.x&&i.y===e.y}function Wu(i,e,t,n){let s=Ra(mn(i,e,t)),r=Ra(mn(i,e,n)),a=Ra(mn(t,n,i)),o=Ra(mn(t,n,e));return!!(s!==r&&a!==o||s===0&&Aa(i,t,e)||r===0&&Aa(i,n,e)||a===0&&Aa(t,i,n)||o===0&&Aa(t,e,n))}function Aa(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ra(i){return i>0?1:i<0?-1:0}function Hx(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Wu(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Vr(i,e){return mn(i.prev,i,i.next)<0?mn(i,e,i.next)>=0&&mn(i,i.prev,e)>=0:mn(i,e,i.prev)<0||mn(i,i.next,e)<0}function zx(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Xu(i,e){let t=new Wl(i.i,i.x,i.y),n=new Wl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function mu(i,e,t,n){let s=new Wl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Gr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Wl(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Vx(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Ir=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];gu(e),xu(n,e);let a=e.length;t.forEach(gu);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,xu(n,t[l]);let o=wx.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function gu(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function xu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Wr=class i extends ni{constructor(e=new hr([new He(0,.5),new He(-.5,-.5),new He(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new gn(s,3)),this.setAttribute("normal",new gn(r,3)),this.setAttribute("uv",new gn(a,2));function c(h){let p=s.length/3,d=h.extractPoints(t),u=d.shape,y=d.holes;Ir.isClockWise(u)===!1&&(u=u.reverse());for(let g=0,m=y.length;g<m;g++){let M=y[g];Ir.isClockWise(M)===!0&&(y[g]=M.reverse())}let v=Ir.triangulateShape(u,y);for(let g=0,m=y.length;g<m;g++){let M=y[g];u=u.concat(M)}for(let g=0,m=u.length;g<m;g++){let M=u[g];s.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let g=0,m=v.length;g<m;g++){let M=v[g],_=M[0]+p,A=M[1]+p,D=M[2]+p;n.push(_,A,D),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Gx(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function Gx(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Ti=class i extends ni{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],p=new F,d=new F,u=[],y=[],v=[],g=[];for(let m=0;m<=n;m++){let M=[],_=m/n,A=0;m===0&&a===0?A=.5/t:m===n&&l===Math.PI&&(A=-.5/t);for(let D=0;D<=t;D++){let I=D/t;p.x=-e*Math.cos(s+I*r)*Math.sin(a+_*o),p.y=e*Math.cos(a+_*o),p.z=e*Math.sin(s+I*r)*Math.sin(a+_*o),y.push(p.x,p.y,p.z),d.copy(p).normalize(),v.push(d.x,d.y,d.z),g.push(I+A,1-_),M.push(c++)}h.push(M)}for(let m=0;m<n;m++)for(let M=0;M<t;M++){let _=h[m][M+1],A=h[m][M],D=h[m+1][M],I=h[m+1][M+1];(m!==0||a>0)&&u.push(_,A,I),(m!==n-1||l<Math.PI)&&u.push(A,D,I)}this.setIndex(u),this.setAttribute("position",new gn(y,3)),this.setAttribute("normal",new gn(v,3)),this.setAttribute("uv",new gn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Bn=class extends as{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lu,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Ca(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Wx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ur=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Xl=class extends ur{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yh,endingEnd:yh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case _h:r=e,o=2*t-n;break;case vh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case _h:a=e,l=2*n-t;break;case vh:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,p=this._offsetNext,d=this._weightPrev,u=this._weightNext,y=(n-t)/(s-t),v=y*y,g=v*y,m=-d*g+2*d*v-d*y,M=(1+d)*g+(-1.5-2*d)*v+(-.5+d)*y+1,_=(-1-u)*g+(1.5+u)*v+.5*y,A=u*g-u*v;for(let D=0;D!==o;++D)r[D]=m*a[h+D]+M*a[c+D]+_*a[l+D]+A*a[p+D];return r}},ql=class extends ur{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),p=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*p+a[l+d]*h;return r}},Yl=class extends ur{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},bi=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ca(t,this.TimeBufferType),this.values=Ca(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ca(e.times,Array),values:Ca(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Yl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ql(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Xl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ia:t=this.InterpolantFactoryMethodDiscrete;break;case La:t=this.InterpolantFactoryMethodLinear;break;case Oo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ia;case this.InterpolantFactoryMethodLinear:return La;case this.InterpolantFactoryMethodSmooth:return Oo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Wx(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Oo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let p=o*n,d=p-n,u=p+n;for(let y=0;y!==n;++y){let v=t[p+y];if(v!==t[d+y]||v!==t[u+y]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let p=o*n,d=a*n;for(let u=0;u!==n;++u)t[d+u]=t[p+u]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};bi.prototype.TimeBufferType=Float32Array;bi.prototype.ValueBufferType=Float32Array;bi.prototype.DefaultInterpolation=La;var Es=class extends bi{};Es.prototype.ValueTypeName="bool";Es.prototype.ValueBufferType=Array;Es.prototype.DefaultInterpolation=Ia;Es.prototype.InterpolantFactoryMethodLinear=void 0;Es.prototype.InterpolantFactoryMethodSmooth=void 0;var $l=class extends bi{};$l.prototype.ValueTypeName="color";var Zl=class extends bi{};Zl.prototype.ValueTypeName="number";var Kl=class extends ur{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)rs.slerpFlat(r,0,a,c-o,a,c,l);return r}},Xr=class extends bi{InterpolantFactoryMethodLinear(e){return new Kl(this.times,this.values,this.getValueSize(),e)}};Xr.prototype.ValueTypeName="quaternion";Xr.prototype.DefaultInterpolation=La;Xr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ts=class extends bi{};Ts.prototype.ValueTypeName="string";Ts.prototype.ValueBufferType=Array;Ts.prototype.DefaultInterpolation=Ia;Ts.prototype.InterpolantFactoryMethodLinear=void 0;Ts.prototype.InterpolantFactoryMethodSmooth=void 0;var Jl=class extends bi{};Jl.prototype.ValueTypeName="vector";var jl=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){let p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,d=c.length;p<d;p+=2){let u=c[p],y=c[p+1];if(u.global&&(u.lastIndex=0),u.test(h))return y}return null}}},Xx=new jl,Ql=class{constructor(e){this.manager=e!==void 0?e:Xx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ql.DEFAULT_MATERIAL_NAME="__DEFAULT";var so=class extends qn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};var ul=new En,yu=new F,_u=new F,ec=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.map=null,this.mapPass=null,this.matrix=new En,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fr,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new Nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;yu.setFromMatrixPosition(e.matrixWorld),t.position.copy(yu),_u.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_u),t.updateMatrixWorld(),ul.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ul),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ul)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var tc=class extends ec{constructor(){super(new qa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ro=class extends so{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qn.DEFAULT_UP),this.updateMatrix(),this.target=new qn,this.shadow=new tc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},ao=class extends so{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var hc="\\[\\]\\.:\\/",qx=new RegExp("["+hc+"]","g"),uc="[^"+hc+"]",Yx="[^"+hc.replace("\\.","")+"]",$x=/((?:WC+[\/:])*)/.source.replace("WC",uc),Zx=/(WCOD+)?/.source.replace("WCOD",Yx),Kx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uc),Jx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uc),jx=new RegExp("^"+$x+Zx+Kx+Jx+"$"),Qx=["material","materials","bones","map"],nc=class{constructor(e,t,n){let s=n||hn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},hn=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(qx,"")}static parseTrackName(e){let t=jx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Qx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};hn.Composite=nc;hn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};hn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};hn.prototype.GetterByBindingType=[hn.prototype._getValue_direct,hn.prototype._getValue_array,hn.prototype._getValue_arrayElement,hn.prototype._getValue_toArray];hn.prototype.SetterByBindingTypeAndVersioning=[[hn.prototype._setValue_direct,hn.prototype._setValue_direct_setNeedsUpdate,hn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[hn.prototype._setValue_array,hn.prototype._setValue_array_setNeedsUpdate,hn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[hn.prototype._setValue_arrayElement,hn.prototype._setValue_arrayElement_setNeedsUpdate,hn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[hn.prototype._setValue_fromArray,hn.prototype._setValue_fromArray_setNeedsUpdate,hn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var dy=new Float32Array(1);var oo=class{constructor(e,t,n=0,s=1/0){this.ray=new Nr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Or,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return ic(e,this,n,t),n.sort(vu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)ic(e[s],this,n,t);return n.sort(vu),n}};function vu(i,e){return i.distance-e.distance}function ic(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,a=s.length;r<a;r++)ic(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sc);var ju=35,Qu=25,ed=.29,Et=.95,Yn=.35,ls=200,ki=7,ws=300,$r=typeof window<"u"&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||window.location.search.includes("dev=1")),ty=[{value:"balanced",label:"Balanced (lineup mix)"},{value:"tanky",label:"Tanky (HP + VIT)"},{value:"aggressive",label:"Aggressive (STR + AGI)"},{value:"scout",label:"Scout (high AGI)"},{value:"ranged",label:"Ranged (DEX + range)"},{value:"caster",label:"Caster (INT + MP)"},{value:"random",label:"Random"},{value:"custom",label:"Custom order"}],ny=["berserker","knight","lancer","werewolf","samurai","ninja","assassin","ghoul","monk","hunter","mage","witch","paladin","exorcist","bandit","ranger","blacksmith","alchemist"],fo={tank:["knight","berserker","werewolf","ghoul"],melee:["assassin","ninja","samurai","bandit","lancer"],support:["paladin","monk","blacksmith","exorcist"],ranged:["hunter","ranger","alchemist"],caster:["mage","witch"]},qr={tank:2,melee:2,support:1,ranged:1,caster:1};function iy(i){let e=Math.max(1,i),t=Object.keys(qr),n=t.reduce((l,c)=>l+(qr[c]??0),0),s={},r=0;for(let l of t){let c=Math.floor(e*(qr[l]??0)/n);s[l]=c,r+=c}let a=e-r,o=[...t].sort((l,c)=>s[l]!==s[c]?s[l]-s[c]:(qr[c]??0)-(qr[l]??0));for(let l=0;a>0&&l<o.length;l++)s[o[l]]++,a--;return s}var Je={PATH:0,GRASS:1,TREE:2,WATER:3,ROCK:4,BASE_TOP:5,BASE_BOTTOM:6,CENTER:7},Hi=["knight","mage","monk","ghoul","lancer","hunter","assassin","berserker","witch","ninja","samurai","werewolf","paladin","exorcist","bandit","ranger","blacksmith","alchemist"];function sy(i){for(let e=i.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[i[e],i[t]]=[i[t],i[e]]}return i}var Zt={knight:{name:"Knight",gender:"male",hp:27,maxHp:27,mp:5,maxMp:5,str:13,agi:8,vit:14,dex:10,luk:4,int:7,range:1},mage:{name:"Mage",gender:"female",hp:17,maxHp:17,mp:22,maxMp:22,str:5,agi:4,vit:5,dex:4,luk:13,int:17,range:1},monk:{name:"Monk",gender:"male",hp:23,maxHp:23,mp:13,maxMp:13,str:10,agi:10,vit:12,dex:9,luk:11,int:10,range:1},ghoul:{name:"Ghoul",gender:"male",hp:21,maxHp:21,mp:6,maxMp:6,str:12,agi:9,vit:9,dex:11,luk:9,int:5,range:1},lancer:{name:"Lancer",gender:"female",hp:22,maxHp:22,mp:7,maxMp:7,str:13,agi:11,vit:10,dex:7,luk:5,int:8,range:2},hunter:{name:"Hunter",gender:"female",hp:18,maxHp:18,mp:9,maxMp:9,str:7,agi:5,vit:7,dex:15,luk:12,int:5,range:7},assassin:{name:"Assassin",gender:"female",hp:19,maxHp:19,mp:10,maxMp:10,str:9,agi:14,vit:6,dex:14,luk:10,int:4,range:1},berserker:{name:"Berserker",gender:"male",hp:30,maxHp:30,mp:3,maxMp:3,str:15,agi:7,vit:13,dex:8,luk:6,int:2,range:1},witch:{name:"Witch",gender:"female",hp:16,maxHp:16,mp:24,maxMp:24,str:6,agi:6,vit:4,dex:5,luk:14,int:14,range:3},ninja:{name:"Ninja",gender:"female",hp:20,maxHp:20,mp:11,maxMp:11,str:8,agi:15,vit:7,dex:12,luk:8,int:9,range:1},samurai:{name:"Samurai",gender:"male",hp:24,maxHp:24,mp:8,maxMp:8,str:11,agi:12,vit:8,dex:13,luk:7,int:6,range:1},werewolf:{name:"Werewolf",gender:"male",hp:25,maxHp:25,mp:4,maxMp:4,str:14,agi:13,vit:11,dex:6,luk:6,int:3,range:1},paladin:{name:"Paladin",gender:"male",hp:26,maxHp:26,mp:12,maxMp:12,str:10,agi:8,vit:16,dex:7,luk:10,int:11,range:1},exorcist:{name:"Exorcist",gender:"male",hp:21,maxHp:21,mp:14,maxMp:14,str:7,agi:5,vit:9,dex:6,luk:15,int:13,range:1},bandit:{name:"Bandit",gender:"male",hp:20,maxHp:20,mp:5,maxMp:5,str:9,agi:14,vit:6,dex:14,luk:13,int:4,range:1},ranger:{name:"Ranger",gender:"female",hp:19,maxHp:19,mp:10,maxMp:10,str:8,agi:10,vit:8,dex:12,luk:7,int:4,range:5},blacksmith:{name:"Blacksmith",gender:"female",hp:22,maxHp:22,mp:6,maxMp:6,str:12,agi:7,vit:10,dex:11,luk:12,int:2,range:1},alchemist:{name:"Alchemist",gender:"female",hp:17,maxHp:17,mp:13,maxMp:13,str:6,agi:6,vit:11,dex:5,luk:8,int:12,range:5}},po={knight:{primary:6908265,secondary:9127187,hair:11696641,cape:3355443,belt:9127187},mage:{primary:16776656,secondary:3355443,hair:13353955,cape:4853326},monk:{primary:16777188,secondary:16119285,hair:2889744,belt:657930},ghoul:{primary:32896,secondary:6636321,hair:32896,skin:32896},lancer:{primary:3169502,secondary:16776656,hair:15854290,cape:14423100},hunter:{primary:8421376,secondary:9584654,hair:7898731,cape:16119285},assassin:{primary:986695,secondary:16119285,hair:2621751,belt:8948621},berserker:{primary:657930,secondary:986695,hair:657930,cape:1118481},witch:{primary:16119285,secondary:8388640,hair:16777188,cape:2263842},ninja:{primary:267292,secondary:137541,hair:791074},samurai:{primary:13882323,secondary:3556687,hair:2039842},werewolf:{primary:4408907,secondary:2378091,hair:12632256,belt:466741},paladin:{primary:16445630,secondary:16774638,hair:12887172,cape:4286945,belt:4286945},exorcist:{primary:3881787,secondary:3881787,hair:16775930,cape:8488329},bandit:{primary:9125425,secondary:6045747,hair:14423100,cape:6710937},ranger:{primary:16775930,secondary:10913299,hair:16035328,cape:11402348,belt:10913299},blacksmith:{primary:13874819,secondary:9849600,hair:11696641,apron:9849600},alchemist:{primary:16738740,secondary:11154282,hair:16711807,cape:8900331}},Yr={knight:"https://creator.nightcafe.studio/jobs/OlIWpAye2LeM5gPkAGEI/OlIWpAye2LeM5gPkAGEI--1--xc223.jpg",mage:"https://media.craiyon.com/2025-08-13/bLqz0LbwSIynOcUHty4Maw.webp",monk:"https://cdnb.artstation.com/p/assets/images/images/028/576/499/large/ahruna-art-oct17.jpg?1594859688",ghoul:"https://i.pinimg.com/736x/d3/cc/41/d3cc41778d05dec0371a69e29659f792.jpg",lancer:"https://i.redd.it/zolf64gpoa0c1.jpg",hunter:"https://coolvibe.com/wp-content/uploads/2011/02/hunter.jpg",assassin:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk2-NBPpPOU7duYgN_k_9oFKZ5hJjU28qyoA&s",berserker:"https://entertainment.inquirer.net/files/2016/07/top_bg.jpg",witch:"https://w0.peakpx.com/wallpaper/382/134/HD-wallpaper-evil-witch-witch-female-dress-white-hair-evil-black-woman-girl-darkness-anime-dark-beauty-lady-long-hair.jpg",ninja:"https://i.pinimg.com/474x/02/88/60/0288609778e53701b7e64051d7164922.jpg",samurai:"https://files.idyllic.app/files/static/3120390?width=256&optimizer=image",werewolf:"https://i.pinimg.com/736x/1f/95/27/1f9527c6255465547d664f19dd11967c.jpg",paladin:"https://upload-os-bbs.hoyolab.com/upload/2023/12/01/84522063/a6a130d65b61025d979eda3750b0abd4_2602645990799609868.jpg?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_70",exorcist:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bdc0afb9-e917-4267-b7e6-2155f9c5c14c/detuach-b1b79b16-7fed-4175-b1a2-ca3d1bc6166b.jpg/v1/fill/w_1024,h_1449,q_75,strp/my_priest_by_domyzu_detuach-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi9iZGMwYWZiOS1lOTE3LTQyNjctYjdlNi0yMTU1ZjljNWMxNGMvZGV0dWFjaC1iMWI3OWIxNi03ZmVkLTQxNzUtYjFhMi1jYTNkMWJjNjE2NmIuanBnIiwiaGVpZ2h0IjoiPD0xNDQ5Iiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiL3dtL2JkYzBhZmI5LWU5MTctNDI2Ny1iN2U2LTIxNTVmOWM1YzE0Yy9kb215enUtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.5ueq8PhVPSB7hz65z6Cok8mX7IGeIrsQzCOaVFpt1pU",bandit:"https://i.pinimg.com/736x/6b/15/b0/6b15b06ae23f690e20968bc87c370831.jpg",ranger:"https://i.redd.it/2nfikbmqpwoa1.jpg",blacksmith:"https://images-ng.pixai.art/images/orig/489d970a-890e-4523-8f99-c0ba2d6bfeae",alchemist:"https://pics.craiyon.com/2023-07-11/ddbb35d3d2614541a9ad13181838257d.webp"},wi=Hi.reduce((i,e)=>(i[e]={battles:0,kills:0,deaths:0,wins:0,losses:0},i),{});function ry(i,e){$r&&(Hi.includes(i)&&wi[i]&&wi[i].kills++,Hi.includes(e)&&wi[e]&&wi[e].deaths++)}function ay(i,e){if(!$r)return;for(let n of i)!n||!wi[n.class]||(wi[n.class].battles++,e!=null&&(n.player===e?wi[n.class].wins++:wi[n.class].losses++));let t=Hi.map(n=>{let s=wi[n],r=s.wins+s.losses||1;return{class:n,battles:s.battles,kills:s.kills,deaths:s.deaths,wins:s.wins,losses:s.losses,winRate:s.wins+s.losses>0?(s.wins/r*100).toFixed(1)+"%":"-",lossRate:s.wins+s.losses>0?(s.losses/r*100).toFixed(1)+"%":"-"}});console.table(t)}var qu={knight:[{name:"Brave",description:"Gain +3 VIT for 2 turns.",cost:3,target:"self",range:0,level:2,effectKey:"brave"},{name:"Dominate",description:"Steal 1 STR from an enemy.",cost:5,target:"enemy",range:1,level:3,effectKey:"dominate"}],mage:[{name:"Arcane Bolt",description:"Deal INT-based damage to one enemy.",cost:8,target:"enemy",range:6,level:1,effectKey:"arcaneBolt",type:"spell"},{name:"Mana Drain",description:"Drain enemy MP based on INT.",cost:1,target:"enemy",range:6,level:2,effectKey:"manaDrain"}],monk:[{name:"Mantra",description:"Gain LUK based on INT for both ally and self for 2 turns.",cost:4,target:"ally",range:1,level:2,effectKey:"mantra"},{name:"Chakra",description:"Heal HP for both ally and self.",cost:8,target:"ally",range:4,level:3,effectKey:"chakra"}],ghoul:[{name:"Weaken",description:"Steal 1 VIT from an enemy.",cost:2,target:"enemy",range:1,level:2,effectKey:"weaken"},{name:"Feast",description:"Deal STR-based damage to enemy and heal self.",cost:3,target:"enemy",range:1,level:3,effectKey:"feast"}],lancer:[{name:"Impale",description:"Reduce target's AGI by 2 for 2 turns.",cost:4,target:"enemy",range:2,level:2,effectKey:"impale"},{name:"Pierce",description:"Deal STR-based damage through the defense.",cost:6,target:"enemy",range:2,level:3,effectKey:"pierce"}],hunter:[{name:"Focus",description:"Gain +3 DEX for 2 turns.",cost:4,target:"self",range:0,level:1,effectKey:"focus"},{name:"Snipe",description:"Deal DEX-based damage to one enemy.",cost:6,target:"enemy",range:10,level:2,effectKey:"snipe"}],assassin:[{name:"Cripple",description:"Steal 1 AGI from an enemy.",cost:4,target:"enemy",range:1,level:2,effectKey:"cripple"},{name:"Execute",description:"Deal AGI-based damage to one enemy.",cost:6,target:"enemy",range:1,level:3,effectKey:"execute"}],berserker:[{name:"Berserk",description:"Deal STR-based damage for -3 HP.",cost:0,hpCost:3,target:"enemy",range:1,level:2,effectKey:"berserk"},{name:"Bloodlust",description:"Gain STR and VIT based on lost HP for 1 turn.",cost:5,target:"self",range:0,level:3,effectKey:"bloodlust"}],witch:[{name:"Hex",description:"Steal 1 INT from an enemy.",cost:5,target:"enemy",range:5,level:1,effectKey:"hex"},{name:"Drain",description:"Deal INT-based damage to enemy and heal self.",cost:6,target:"enemy",range:5,level:2,effectKey:"drain",type:"spell"}],ninja:[{name:"Blind",description:"Steal 1 DEX from an enemy.",cost:4,target:"enemy",range:1,level:2,effectKey:"blind"},{name:"Shuriken",description:"Deal DEX-based ranged attack.",cost:6,target:"enemy",range:4,level:3,effectKey:"shuriken"}],samurai:[{name:"Iaido",description:"Gain +1 STR and +1 DEX for 2 turns.",cost:5,target:"self",range:0,level:2,effectKey:"iaido"},{name:"Chokuto",description:"Deal STR+DEX-based damage to one enemy.",cost:7,target:"enemy",range:1,level:3,effectKey:"chokuto"}],werewolf:[{name:"Bite",description:"Deal STR+AGI-based damage to one enemy.",cost:5,target:"enemy",range:1,level:2,effectKey:"bite"},{name:"Howl",description:"Gain +2 STR and +2 AGI for 2 turns.",cost:6,target:"self",range:0,level:3,effectKey:"howl"}],paladin:[{name:"Sacrifice",description:"Heal ally for -3 HP.",cost:0,hpCost:3,target:"ally",range:3,level:3,effectKey:"sacrifice"},{name:"Judgement",description:"Deal damage based on remaining HP.",cost:6,target:"enemy",range:1,level:2,effectKey:"judgement"}],exorcist:[{name:"Sanctuary",description:"Gain +1 all stats for both ally and self for 2 turns.",cost:5,target:"ally",range:3,level:1,effectKey:"sanctuary"},{name:"Exorcise",description:"Deal damage based on enemy lost HP.",cost:6,target:"enemy",range:3,level:2,effectKey:"exorcise",type:"spell"}],bandit:[{name:"Raid",description:"Steal 2 LUK from an enemy.",cost:4,target:"enemy",range:1,level:2,effectKey:"raid"},{name:"Ambush",description:"Deal LUK-based damage to one enemy.",cost:6,target:"enemy",range:1,level:3,effectKey:"ambush"}],ranger:[{name:"Wind walk",description:"Gain +1 DEX and +3 AGI for 2 turns.",cost:4,target:"self",range:0,level:1,effectKey:"windWalk"},{name:"Power Shot",description:"Deal knockback damage to one enemy.",cost:6,target:"enemy",range:7,level:3,effectKey:"powerShot"}],blacksmith:[{name:"Forge",description:"Gain +2 STR for both ally and self for 2 turns.",cost:4,target:"ally",range:1,level:1,effectKey:"forge"},{name:"Fortify",description:"Gain +2 STR and +2 VIT for both ally and self for 2 turns.",cost:5,target:"ally",range:2,level:3,effectKey:"fortify"}],alchemist:[{name:"Poison",description:"Poison enemy for 2 turns.",cost:5,target:"enemy",range:5,level:1,effectKey:"poison"},{name:"Concoct",description:"Deal INT-based damage to one enemy and add to 50% to LUK",cost:8,target:"enemy",range:7,level:2,effectKey:"concoct",type:"spell"}]};function he(i,e){let t=i[e]!=null?i[e]:0,n=i.tempBuff&&i.tempBuff[e]!=null?i.tempBuff[e]:0,s=i.tempDebuff&&i.tempDebuff[e]!=null?i.tempDebuff[e]:0;return t+n-s}function mo(i,e,t,n){let s=e,r=t,o={brave:"Brave",dominate:"Dominate",arcaneBolt:"Arcane Bolt",manaDrain:"Mana Drain",mantra:"Mantra",chakra:"Chakra",weaken:"Weaken",feast:"Feast",impale:"Impale",pierce:"Pierce",focus:"Focus",snipe:"Snipe",execute:"Execute",cripple:"Cripple",berserk:"Berserk",bloodlust:"Bloodlust",hex:"Hex",drain:"Drain",shuriken:"Shuriken",blind:"Blind",iaido:"Iaido",chokuto:"Chokuto",bite:"Bite",howl:"Howl"}[i]||i.replace(/([A-Z])/g," $1").replace(/^./,u=>u.toUpperCase()).trim();n.showFloatingCombatText&&n.showFloatingCombatText(s.x,s.y,o,!1,"skill-name");let l=i.replace(/([A-Z])/g," $1").replace(/^./,u=>u.toUpperCase()).trim(),c=r?`${r.name} (${r.class}, P${r.player})`:"self",h=null,p=(u,y,v,g)=>{if(v)u.hp=Math.min(u.maxHp,u.hp+y),n.showFloatingCombatText&&n.showFloatingCombatText(u.x,u.y,`+${y}`,!1,"heal");else{let m=u===s,M=!0;if(!m&&!g){let _=he(u,"agi")*.7+he(u,"luk")*.3;M=Math.random()*Math.max(.001,_)<=he(s,"dex")}return M?(u.hp=Math.max(0,u.hp-y),u!==s&&(h=y),n.showFloatingCombatText&&n.showFloatingCombatText(u.x,u.y,String(y),!1),n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(u),u.hp<=0&&n.handleUnitDeath&&n.handleUnitDeath(u,s)):n.showFloatingCombatText&&n.showFloatingCombatText(u.x,u.y,"MISS",!0),M}},d=(u,y,v,g)=>{n.showFloatingCombatText&&n.showFloatingCombatText(u,y,v,!1,g?"buff":"debuff")};switch(i){case"brave":s.tempBuff=s.tempBuff||{},s.tempBuff.vit=3,s.tempBuff.duration=3,d(s.x,s.y,"+3 VIT",!0);break;case"dominate":{if(!r)break;let u=2;r.str=Math.max(1,(r.str||0)-u),s.str=(s.str||0)+u,d(r.x,r.y,`-${u} STR`,!1),d(s.x,s.y,`+${u} STR`,!0)}break;case"arcaneBolt":{if(!r)break;let u=Math.max(1,Math.ceil(he(s,"int")-(he(r,"int")*.7+he(r,"luk")*.2)));p(r,u,!1,!0)}break;case"manaDrain":if(r){let u=Math.max(1,Math.floor(he(r,"int")*.3));r.str=Math.max(1,(r.mp||0)-u),s.mp=(s.mp||0)+u,d(r.x,r.y,`-${u} MP`,!1),d(s.x,s.y,`+${u} MP`,!0)}break;case"mantra":if(r){let u=Math.max(1,Math.floor(he(s,"int")*.3));if(s.tempBuff=s.tempBuff||{},s.tempBuff.int=u,s.tempBuff.duration=3,d(s.x,s.y,`+${u} LUK`,!0),!r)break;r.tempBuff=r.tempBuff||{},r.tempBuff.luk=u,r.tempBuff.duration=3,d(r.x,r.y,`+${u} LUK`,!0)}break;case"chakra":{if(p(s,Math.max(1,Math.floor(he(s,"int")*.3+he(s,"luk")*.2)),!0),!r)break;p(r,Math.max(1,Math.floor(he(s,"int")*.3+he(r,"luk")*.2)),!0)}break;case"weaken":{if(!r)break;let u=1;r.vit=Math.max(1,(r.vit||0)-u),s.vit=(s.vit||0)+u,d(r.x,r.y,`-${u} VIT`,!1),d(s.x,s.y,`+${u} VIT`,!0)}break;case"feast":{if(!r)break;let u=Math.max(1,Math.floor(he(s,"str")*.7-(he(r,"vit")*.3+he(r,"luk")*.2)));p(r,u,!1)&&p(s,u,!0)}break;case"impale":{if(!r)break;let u=2;r.tempDebuff=r.tempDebuff||{},r.tempDebuff.agi=u,r.tempDebuff.duration=3,d(r.x,r.y,`-${u} AGI`,!1)}break;case"pierce":{if(!r)break;let u=Math.max(1,Math.floor(he(s,"str")*.6));p(r,u,!1)}break;case"focus":s.tempBuff=s.tempBuff||{},s.tempBuff.dex=3,s.tempBuff.duration=3,d(s.x,s.y,"+3 DEX",!0);break;case"snipe":{if(!r)break;let u=Math.max(1,Math.floor(he(s,"dex")*.7-(he(r,"vit")*.3+he(r,"luk")*.2)));p(r,u,!1)}break;case"cripple":{if(!r)break;let u=1;r.agi=Math.max(1,(r.agi||0)-u),s.agi=(s.agi||0)+u,d(r.x,r.y,`-${u} AGI`,!1),d(s.x,s.y,`+${u} AGI`,!0)}break;case"execute":if(r){let u=Math.max(1,Math.floor(he(s,"agi")*.8-(he(r,"vit")*.3+he(r,"luk")*.2)));p(r,u,!1)}break;case"berserk":r&&(p(r,Math.max(1,Math.floor(he(s,"str")*.8-he(r,"vit")*.3+he(r,"luk")*.2)),!1),p(s,3,!1));break;case"bloodlust":{let u=Math.max(1,Math.floor((s.maxHp-s.hp)*.2));s.tempBuff=s.tempBuff||{},s.tempBuff.str=u,s.tempBuff.vit=u,s.tempBuff.duration=2,d(s.x,s.y,`+${u} STR, +${u} VIT`,!0)}break;case"hex":{if(!r)break;let u=1;r.int=Math.max(1,(r.int||0)-u),s.int=(s.int||0)+u,d(r.x,r.y,`-${u} INT`,!1),d(s.x,s.y,`+${u} INT`,!0)}break;case"drain":{if(!r)break;let u=Math.max(1,Math.ceil(he(s,"int")*.6-(he(r,"int")*.4+he(r,"luk")*.2)));p(r,u,!1,!0),p(s,u,!0)}break;case"blind":{if(!r)break;let u=1;r.dex=Math.max(1,(r.dex||0)-u),s.dex=(s.dex||0)+u,d(r.x,r.y,`-${u} DEX`,!1),d(s.x,s.y,`+${u} DEX`,!0)}break;case"shuriken":{if(!r)break;let u=Math.max(1,Math.floor(he(s,"dex")*.7-(he(r,"vit")*.3+he(r,"luk")*.2)));p(r,u,!1)}break;case"iaido":s.tempBuff=s.tempBuff||{},s.tempBuff.str=1,s.tempBuff.dex=1,s.tempBuff.duration=3,d(s.x,s.y,"+1 STR, +1 DEX",!0);break;case"chokuto":{if(!r)break;let u=Math.max(1,Math.floor(he(s,"str")*.4+he(s,"dex")*.4-(he(r,"vit")*.3+he(r,"luk")*.2)));p(r,u,!1)}break;case"bite":{if(!r)break;let u=Math.max(1,Math.floor(he(s,"str")*.7+he(s,"agi")*.1-(he(r,"vit")*.3+he(r,"luk")*.2)));p(r,u,!1)}break;case"howl":s.tempBuff=s.tempBuff||{},s.tempBuff.str=2,s.tempBuff.agi=2,s.tempBuff.duration=3,d(s.x,s.y,"+2 STR, +2 AGI",!0);break;case"sacrifice":{let u=Math.max(1,Math.floor(he(s,"int")*.5));p(r,u,!0),p(s,3,!1)}break;case"judgement":{if(!r)break;let u=Math.max(1,Math.floor(s.maxHp-s.hp-(he(r,"int")*.2+he(r,"luk")*.1)));p(r,u,!1,!0)}break;case"sanctuary":s.tempBuff=s.tempBuff||{},s.tempBuff.str=1,s.tempBuff.vit=1,s.tempBuff.dex=1,s.tempBuff.agi=1,s.tempBuff.int=1,s.tempBuff.luk=1,s.tempBuff.duration=3,r.tempBuff=r.tempBuff||{},r.tempBuff.str=1,r.tempBuff.vit=1,r.tempBuff.dex=1,r.tempBuff.agi=1,r.tempBuff.int=1,r.tempBuff.luk=1,r.tempBuff.duration=3,d(s.x,s.y,"+1 ALL STATS",!0),d(r.x,r.y,"+1 ALL STATS",!0);break;case"exorcise":{if(!r)break;let u=Math.max(1,Math.floor(r.maxHp-r.hp-(he(r,"int")*.4+he(r,"luk")*.2)));p(r,u,!1,!0)}break;case"raid":r.luk=Math.max(1,(r.luk||0)-2),s.luk=(s.luk||0)+2,d(r.x,r.y,"-2 LUK",!1),d(s.x,s.y,"+2 LUK",!0);break;case"ambush":{if(!r)break;let u=Math.max(1,Math.floor(he(s,"luk")*.7-(he(r,"vit")*.3+he(r,"luk")*.2)));p(r,u,!1)}break;case"windWalk":s.tempBuff=s.tempBuff||{},s.tempBuff.dex=1,s.tempBuff.agi=3,s.tempBuff.duration=3,d(s.x,s.y,"+1 DEX, +3 AGI",!0);break;case"powerShot":{if(!r)break;let u=Math.max(1,Math.floor(he(s,"dex")*.6-(he(r,"vit")*.3+he(r,"luk")*.2)));if(p(r,u,!1)&&n.world&&n.units&&n.updateUnitPosition){let v=Math.max(1,Math.floor(u*.2)),g=cy(n.world,n.units,s,r,v),m=r.x,M=r.y;r.x=g.newGx,r.y=g.newGy,g.collisionDamage>0?(n.updateUnitPosition(r),n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(r),p(r,g.collisionDamage,!1)):n.animateKnockback?n.animateKnockback(r,m,M,g.newGx,g.newGy,()=>{n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(r)}):(n.updateUnitPosition(r),n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(r))}}break;case"forge":s.tempBuff=s.tempBuff||{},s.tempBuff.str=2,s.tempBuff.duration=3,r.tempBuff=r.tempBuff||{},r.tempBuff.str=2,r.tempBuff.duration=3,d(s.x,s.y,"+2 STR",!0),d(r.x,r.y,"+2 STR",!0);break;case"fortify":s.tempBuff=s.tempBuff||{},s.tempBuff.str=3,s.tempBuff.vit=3,s.tempBuff.duration=3,r.tempBuff=r.tempBuff||{},r.tempBuff.str=3,r.tempBuff.vit=3,r.tempBuff.duration=3,d(s.x,s.y,"+3 STR, +3 VIT",!0),d(r.x,r.y,"+3 STR, +3 VIT",!0);break;case"poison":{if(!r)break;let u=Math.max(1,Math.floor(he(r,"luk")*.3));r.tempDebuff=r.tempDebuff||{},r.tempDebuff.poison=u,r.tempDebuff.duration=3,d(r.x,r.y,"Poisoned for 2 turns",!1)}break;case"concoct":{if(!r)break;let u=Math.max(1,Math.floor(he(s,"int")*.8-(he(r,"int")*.4+he(r,"luk")*.2)));p(r,u,!1,!0);let y=Math.max(1,Math.floor(u*.5));s.luk=Math.max(1,(s.luk||0)+y),d(s.x,s.y,`+${y} LUK`,!0)}break;default:break}console.log("[SKILL]",`${s.name} (${s.class}, P${s.player})`,"uses",l,"\u2192",c,`| MP ${s.mp}`,h!=null?`| ${h} dmg`:""),n.updateTurnUI&&n.updateTurnUI()}function Yu(){let i=ju,e=Qu,t=Array.from({length:e},()=>Array(i).fill(!1)),n=Array.from({length:e},()=>Array(i).fill(0)),s=Array.from({length:e},()=>Array(i).fill(Je.GRASS)),r=Math.floor(i/2),a=Math.floor(e/2),o=r,l=0,c=r,h=e-1,p=2,d=3;function u(P,N,G,re){let ne=re;for(let Q=N;Q<=G;Q++)if(!(Q<0||Q>=e))for(let B=-p;B<=p;B++){let de=ne+B;de<0||de>=i||(t[Q][de]=!0,s[Q][de]=P,n[Q][de]=1)}}u(Je.BASE_TOP,l,l+d-1,o),u(Je.BASE_BOTTOM,h-d+1,h,c),u(Je.CENTER,a-1,a+1,r);let y=new Set,v=(P,N)=>Math.abs(P-r)<=2&&Math.abs(N-a)<=1,g=(P,N)=>{P<0||P>=i||N<0||N>=e||v(P,N)||y.add(N*i+P)},m=Math.floor(i/2),M=Math.floor(e/2),_=Math.min(i,e)*ed,A=Math.max(60,(e+i)*2);for(let P=0;P<2;P++){let N=P===0?m-_:m+_,G=P===0?Math.PI/2:-Math.PI/2,re=P===0?Math.PI*3/2:Math.PI/2;for(let ne=0;ne<=A;ne++){let Q=ne/A,B=G+Q*(re-G),de=N+_*Math.cos(B),oe=M+_*Math.sin(B),W=Math.round(de),ue=Math.round(oe);g(W,ue),g(W+1,ue),g(W-1,ue),g(W,ue+1),g(W,ue-1)}}let D=[[0,1],[0,-1],[1,0],[-1,0]];for(let P=0;P<1;P++){let N=[];y.forEach(G=>{let re=G%i,ne=G/i|0;for(let[Q,B]of D){let de=re+Q,oe=ne+B;if(de<0||de>=i||oe<0||oe>=e)continue;let W=oe*i+de;y.has(W)||N.push(W)}}),N.forEach(G=>y.add(G))}y.forEach(P=>{let N=P%i,G=P/i|0;s[G][N]===Je.BASE_TOP||s[G][N]===Je.BASE_BOTTOM||s[G][N]===Je.CENTER||(t[G][N]=!0,s[G][N]=Je.PATH,n[G][N]=1)});let I=Math.round(m-_*1.6),L=Math.round(m+_*1.6),X=Math.round(m-_),b=Math.round(m+_),R=1;for(let P=a-R;P<=a+R;P++)if(!(P<0||P>=e))for(let N=I;N<=L;N++)N<0||N>=i||(t[P][N]=!0,s[P][N]!==Je.CENTER&&s[P][N]!==Je.BASE_TOP&&s[P][N]!==Je.BASE_BOTTOM&&(s[P][N]=Je.PATH),n[P][N]=Math.max(n[P][N],1));function q(P,N,G,re){let ne=Math.max(1,Math.min(P,N)),Q=Math.min(e-2,Math.max(P,N)),B=Math.max(1,Math.min(G,re)),de=Math.min(i-2,Math.max(G,re));for(let oe=ne;oe<=Q;oe++)for(let W=B;W<=de;W++)s[oe][W]===Je.BASE_TOP||s[oe][W]===Je.BASE_BOTTOM||s[oe][W]===Je.CENTER||(t[oe][W]=!0,s[oe][W]=Je.PATH,n[oe][W]=1)}let ae=3,be=3;q(l,l+ae-1,X,o-1),q(l,l+ae-1,o+1,b),q(h-be+1,h,X,c-1),q(h-be+1,h,c+1,b),u(Je.BASE_TOP,l,l+d-1,o),u(Je.BASE_BOTTOM,h-d+1,h,c),u(Je.CENTER,a-1,a+1,r);for(let P=0;P<e;P++)for(let N=0;N<i;N++){if(t[P][N]||s[P][N]===Je.BASE_TOP||s[P][N]===Je.BASE_BOTTOM||s[P][N]===Je.CENTER)continue;let G=Math.abs(N-o)<=4&&Math.abs(P-l)<=3,re=Math.abs(N-c)<=4&&Math.abs(P-h)<=3,ne=G||re,Q=Math.random();Q<.55&&!ne?(s[P][N]=Je.TREE,n[P][N]=1+Math.floor(Math.random()*2)):Q<.75||ne&&Q<.5?(s[P][N]=Je.WATER,n[P][N]=0):(s[P][N]=Je.ROCK,n[P][N]=1+Math.floor(Math.random()*2))}return{w:i,h:e,path:t,height:n,type:s,topBaseX:o,topBaseY:l,botBaseX:c,botBaseY:h}}function oy(i,e,t){let n=e===1?Je.BASE_BOTTOM:Je.BASE_TOP,s=[];for(let r=0;r<i.h;r++)for(let a=0;a<i.w;a++)i.type[r][a]===n&&(t&&t.has(r*i.w+a)||s.push({gx:a,gy:r}));return s}function ly(i){let e=[];for(let t=0;t<i.h;t++)for(let n=0;n<i.w;n++)i.type[t][n]===Je.CENTER&&e.push({gx:n,gy:t});return e}function $u(i,e){let t=ly(i);if(t.length===0)return e;let n=s=>Math.min(...t.map(r=>Math.abs(s.gx-r.gx)+Math.abs(s.gy-r.gy)));return[...e].sort((s,r)=>n(s)-n(r))}function pr(i,e,t){if(e<0||e>=i.w||t<0||t>=i.h)return!1;let n=i.type[t][e];return!(n===Je.TREE||n===Je.WATER||n===Je.ROCK)}function cy(i,e,t,n,s){let r=n.x,a=n.y,o=n.x-t.x,l=n.y-t.y,c=Math.abs(o)>=Math.abs(l)?o>0?1:o<0?-1:0:0,h=Math.abs(l)>Math.abs(o)?l>0?1:l<0?-1:0:0;if(c===0&&h===0)return{newGx:r,newGy:a,collisionDamage:0};let p=0;for(let d=0;d<s;d++){let u=r+c,y=a+h,v=u<0||u>=i.w||y<0||y>=i.h,g=!pr(i,u,y),m=e.some(M=>M.hp>0&&M.id!==n.id&&M.x===u&&M.y===y);if(v||g||m){let M=Math.max(1,p*3+Math.floor((t.str||0)*.3));return{newGx:r,newGy:a,collisionDamage:M}}r=u,a=y,p++}return{newGx:r,newGy:a,collisionDamage:0}}function hy(i,e,t,n){let s=[],r=i,a=e,o=t,l=n,c=Math.abs(o-r),h=Math.abs(l-a),p=r<o?1:-1,d=a<l?1:-1,u=c-h;for(;s.push({x:r,y:a}),!(r===o&&a===l);){let y=2*u;y>-h&&(u-=h,r+=p),y<c&&(u+=c,a+=d)}return s}function As(i,e,t,n,s){let r=hy(e,t,n,s);for(let a=1;a<r.length-1;a++){let o=r[a];if(!pr(i,o.x,o.y))return!1}return!0}function go(i,e,t,n,s,r){let a=(p,d)=>d*i.w+p,o=new Map;o.set(a(e,t),0);let l=[{x:e,y:t,d:0}],c=[[0,1],[0,-1],[1,0],[-1,0]],h=s!=null&&r!=null;for(;l.length;){let{x:p,y:d,d:u}=l.shift();if(!(u>=n))for(let[y,v]of c){let g=p+y,m=d+v;if(!pr(i,g,m))continue;if(h){let A=s.find(D=>D.hp>0&&D.x===g&&D.y===m);if(A&&A.player!==r.player)continue}let M=a(g,m);if(o.has(M))continue;let _=u+1;o.set(M,_),l.push({x:g,y:m,d:_})}}return o}function Zu(i,e,t,n){let s=new Map;for(let r=0;r<i.h;r++)for(let a=0;a<i.w;a++){let o=Math.abs(a-e)+Math.abs(r-t);o>=1&&o<=n&&s.set(r*i.w+a,o)}return s}function cs(i,e,t,n,s,r,a){if(e===n&&t===s)return[{x:e,y:t}];let o=(d,u)=>u*i.w+d,l=new Map,c=[{x:e,y:t}];l.set(o(e,t),null);let h=[[0,1],[0,-1],[1,0],[-1,0]];function p(d,u){if(!pr(i,d,u))return!1;let y=r.find(v=>v.hp>0&&v.x===d&&v.y===u);return y?y.id===a.id||y.player===a.player:!0}for(;c.length;){let{x:d,y:u}=c.shift();if(d===n&&u===s){let y=[],v={x:n,y:s};for(;v;)y.unshift(v),v=l.get(o(v.x,v.y));return y}for(let[y,v]of h){let g=d+y,m=u+v,M=o(g,m);l.has(M)||p(g,m)&&(l.set(M,{x:d,y:u}),c.push({x:g,y:m}))}}return null}var Ku={[Je.PATH]:2976557,[Je.GRASS]:2968109,[Je.TREE]:1719578,[Je.WATER]:1989278,[Je.ROCK]:4872778,[Je.BASE_TOP]:8014410,[Je.BASE_BOTTOM]:4872826,[Je.CENTER]:13940810};function dc(i){return i.w*Et/2}function fc(i){return i.h*Et/2}function td(i){let e=document.createElement("canvas");e.width=i,e.height=i;let t=e.getContext("2d"),n=t.createImageData(i,i),s=n.data;for(let a=0;a<s.length;a+=4){let o=Math.floor(128+(Math.random()-.5)*80);s[a]=s[a+1]=s[a+2]=o,s[a+3]=255}t.putImageData(n,0,0);let r=new ja(e);return r.wrapS=r.wrapT=Lr,r.repeat.set(4,4),r.needsUpdate=!0,r}function Ju(i){let e=new ci,t=dc(i),n=fc(i),s=new wn(Et,Yn,Et),r=td(64),a=.88,o=.02,l=[];function c(d,u,y,v,g){let m=new Bn({color:3828266,roughness:.9});m.bumpMap=r,m.bumpScale=.12;for(let M=0;M<v;M++){let _=.08+Math.random()*g,A=.03+Math.random()*.03,D=new Ze(new os(A*.5,A,_,6),m);D.position.set(d+(Math.random()-.5)*.5,y+_/2,u+(Math.random()-.5)*.5),D.rotation.x=(Math.random()-.5)*.2,D.rotation.z=(Math.random()-.5)*.2,D.castShadow=!0,e.add(D)}}let h=.12;function p(d,u,y,v){let g=y+.02,m=[[d-h,g,u-h],[d+h,g,u+h],[d-h,g,u+h],[d+h,g,u-h],[d-h+.06,g,u-h+.06],[d+h-.06,g,u+h-.06],[d-h+.06,g,u+h-.06],[d+h-.06,g,u-h+.06]],M=new Float32Array(m.length*3);m.forEach((I,L)=>{M[L*3]=I[0],M[L*3+1]=I[1],M[L*3+2]=I[2]});let _=new ni;_.setAttribute("position",new ti(M,3)),_.computeBoundingSphere();let A=new kr({color:855309,linewidth:1}),D=new Ja(_,A);v.add(D)}for(let d=0;d<i.h;d++)for(let u=0;u<i.w;u++){let y=i.type[d][u],v=i.height[d][u],g=Ku[y],m=Yn+v*.35,M=m/2+Yn/2,_=new Bn({roughness:Math.max(.7,Math.min(1,a+(Math.random()-.5)*.18)),metalness:Math.max(0,Math.min(.1,o+(Math.random()-.5)*.04))}),A=(g>>16&255)/255,D=(g>>8&255)/255,I=(g&255)/255,L=A,X=D,b=I;if(y===Je.PATH||y===Je.TREE||y===Je.ROCK){let re=Math.random()*.45;L=A*(1-re)+.42*re,X=D*(1-re)+.26*re,b=I*(1-re)+.14*re}(y===Je.TREE||y===Je.ROCK)&&(L*=.5,X*=.5,b*=.5);let R=1+(Math.random()-.5)*.12;_.color.setRGB(Math.min(1,L*R),Math.min(1,X*R),Math.min(1,b*R)),_.bumpMap=r,_.bumpScale=.12;let q=new Ze(s,_);q.position.set(u*Et-t+Et/2,m/2,d*Et-n+Et/2),q.castShadow=!0,q.receiveShadow=!0,q.userData={gx:u,gy:d,type:y},e.add(q);let ae=u*Et-t+Et/2,be=d*Et-n+Et/2;if(y===Je.TREE&&p(ae,be,M,e),y===Je.TREE){let P=new ci;P.position.set(ae,M,be);let N=u===0||u===i.w-1||d===0||d===i.h-1,G=N?.75+Math.random()*.35:.5+Math.random()*.2,re=new xt(4007959),ne=()=>1+(Math.random()-.5)*.4;re.r=Math.min(1,Math.max(0,re.r*ne())),re.g=Math.min(1,Math.max(0,re.g*ne())),re.b=Math.min(1,Math.max(0,re.b*ne()));let Q=.85+Math.random()*.2,B=new Bn({color:re,roughness:Q});B.bumpMap=r,B.bumpScale=.1+Math.random()*.12;let de=new Ze(new os(.12,.14,G,8),B);de.position.set(0,G/2,0),de.castShadow=!0,de.raycast=function(){},P.add(de);let oe=r.clone();oe.repeat.set(3,3);let W=new xt(2972205),ue=()=>1+(Math.random()-.5)*.44;W.r=Math.min(1,Math.max(0,W.r*ue())),W.g=Math.min(1,Math.max(0,W.g*ue())),W.b=Math.min(1,Math.max(0,W.b*ue()));let Le=.78+Math.random()*.24,Re=new Bn({color:W,roughness:Le});Re.bumpMap=oe,Re.bumpScale=.16+Math.random()*.14;let We=N?.52:.45,pt=N?1.05:.9,tt=.12,je=pt*.5,mt=pt*.45,K=pt*.4,un=new Ze(new Mi(We,je,8),Re);un.position.set(0,G+je/2,0),un.castShadow=!0,un.raycast=function(){},P.add(un);let $e=new Ze(new Mi(We*.75,mt,8),Re);$e.position.set(0,G+je-tt+mt/2,0),$e.castShadow=!0,$e.raycast=function(){},P.add($e);let rt=new Ze(new Mi(We*.5,K,8),Re);rt.position.set(0,G+je-tt+mt-tt+K/2,0),rt.castShadow=!0,rt.raycast=function(){},P.add(rt),e.add(P),l.push(P)}else if(y===Je.WATER){let P=Ku[Je.WATER],N=(P>>16&255)/255,G=(P>>8&255)/255,re=(P&255)/255,ne=1+(Math.random()-.5)*.12,Q=new Bn({color:new xt().setRGB(Math.min(1,N*ne),Math.min(1,G*ne),Math.min(1,re*ne)),roughness:.08,metalness:.45,transparent:!0,opacity:.94,bumpMap:r,bumpScale:.03}),B=new Ze(new Bi(Et,Et),Q);B.rotation.x=-Math.PI/2,B.position.set(ae,M+.02,be),B.receiveShadow=!0,e.add(B)}else if(y===Je.ROCK){let P=new Bn({color:6974058,roughness:.9});P.bumpMap=r,P.bumpScale=.2;let N=(Q,B,de)=>{let oe=new Ze(new io(Q,0),P);oe.position.set(ae+B,M+Q-.2,be+de),oe.rotation.set(Math.random(),Math.random(),Math.random()),oe.castShadow=!0,e.add(oe)},G=.32+Math.random()*.14,re=.2+Math.random()*.12,ne=.12+Math.random()*.12;N(G,(Math.random()-.5)*.15,(Math.random()-.5)*.15),N(re,(Math.random()-.5)*.25,(Math.random()-.5)*.25),N(ne,(Math.random()-.5)*.28,(Math.random()-.5)*.28)}}return e.userData.treeGroups=l,e}function uy(){let i=document.querySelector("#mode-select-overlay .mode-select-instructions");i&&console.log(i.textContent.trim());let e=Yu(),t=document.getElementById("canvas-wrap"),n=new Ka;n.background=new xt(1711652),n.fog=new Za(1711652,30,90);let s=e.w*Et/2,r=e.h*Et/2,a=new Xn(50,t.clientWidth/t.clientHeight,.1,200),o=17,l=.003,c=new F(12,38,16).normalize().multiplyScalar(o),h=new F,p=new F,d=new yi(new F(0,1,0),0),u=new F,y=new F,v=!1,g=!1,m=!0,M=!1,_=null,A=5,D=.004,I=-Math.PI*.4,L=Math.PI*.4,X=new F,b={x:0,y:0},R=!1,q=1,ae=40,be=.005,P=.15,N=1,G=null,re=new ao(16777215,.45);n.add(re);let ne=new ro(16774630,1.1);ne.position.set(30,50,20),ne.castShadow=!0,ne.shadow.mapSize.width=2048,ne.shadow.mapSize.height=2048,ne.shadow.camera.near=1,ne.shadow.camera.far=120,ne.shadow.camera.left=-50,ne.shadow.camera.right=50,ne.shadow.camera.top=50,ne.shadow.camera.bottom=-50,n.add(ne);let Q=Ju(e);n.add(Q);let B=[],de=1,oe=new Map,W=td(64),ue=dc(e),Le=fc(e);function Re(x,f){let T=(Yn+e.height[f][x]*.35)/2+Yn/2;return new F(x*Et-ue+Et/2,T,f*Et-Le+Et/2)}function We(x){x==="short"&&(ju=27,Qu=15,ed=.35,ls=100),n.remove(Q),Q.traverse(f=>{f.geometry&&f.geometry.dispose(),f.material&&(Array.isArray(f.material)?f.material:[f.material]).forEach(T=>T.dispose())}),oe.forEach(f=>{n.remove(f),f.traverse(E=>{E.geometry&&E.geometry.dispose(),E.material&&(Array.isArray(E.material)?E.material:[E.material]).forEach(U=>U.dispose())})}),oe.clear(),B.length=0,de=1,e=Yu(),ue=dc(e),Le=fc(e),Q=Ju(e),n.add(Q)}function pt(){oe.forEach(x=>{n.remove(x),x.traverse(f=>{f.geometry&&f.geometry.dispose(),f.material&&(Array.isArray(f.material)?f.material:[f.material]).forEach(T=>T.dispose())})}),oe.clear(),B.length=0,de=1}function tt(x,f){let E=(x>>16&255)/255,T=(x>>8&255)/255,U=(x&255)/255,H=1+(Math.random()-.5)*f;return new xt(Math.min(1,E*H),Math.min(1,T*H),Math.min(1,U*H))}let je=.62;function mt(x,f){f=f??je;let E=x instanceof xt?x:new xt(x);return new xt(Math.max(0,E.r*f),Math.max(0,E.g*f),Math.max(0,E.b*f))}function K(x,f,E){let T=po[f]||po.knight,U=mt(tt(T.primary,.08)),H=mt(tt(T.secondary,.08)),j=Zt[f]&&Zt[f].gender||"male",V=E??4006676,k=mt(tt(T.skin!=null?T.skin:15250592,.06)),$=mt(tt(V,.08)),ce=()=>(Math.random()-.5)*.08,Ae=()=>(Math.random()-.5)*.04,te=new Bn({color:U,metalness:Math.max(0,.25+Ae()),roughness:Math.max(.3,Math.min(1,.5+ce()))});te.bumpMap=W,te.bumpScale=.1;let se=new Bn({color:H,metalness:Math.max(0,.2+Ae()),roughness:Math.max(.3,Math.min(1,.55+ce()))});se.bumpMap=W,se.bumpScale=.1;let ye=new Bn({color:U,metalness:Math.max(0,.25+Ae()),roughness:Math.max(.3,Math.min(1,.5+ce()))});ye.bumpMap=W,ye.bumpScale=.1;let nt=new Bn({color:k,metalness:.1,roughness:Math.max(.5,Math.min(1,.7+ce()))});nt.bumpMap=W,nt.bumpScale=.05;let Ge=new ci,ft=.28,zt=.08,Xt=.08,on=new Ze(new wn(zt,ft,Xt),se);on.position.set(-.06,ft/2,0),on.castShadow=!0,Ge.add(on);let On=new Ze(new wn(zt,ft,Xt),se);On.position.set(.06,ft/2,0),On.castShadow=!0,Ge.add(On);let Yt=.28,At=.2,Ut=.12,Qt=new Ze(new wn(At,Yt,Ut),te);Qt.position.set(0,ft+Yt/2,0),Qt.castShadow=!0,Ge.add(Qt);let Lt=.06,ln=.22,cn=.06,Nt=new Ze(new wn(Lt,ln,cn),ye);Nt.position.set(-(At/2+Lt/2),ft+Yt-.08,0),Nt.castShadow=!0,Ge.add(Nt);let Ot=new Ze(new wn(Lt,ln,cn),ye);if(Ot.position.set(At/2+Lt/2,ft+Yt-.08,0),Ot.castShadow=!0,Ge.add(Ot),T.cape!=null){let _e=At*1.95,ge=_e*.6,Ye=ft+Yt*.28,Mt=new hr;Mt.moveTo(-ge/2,Ye/2),Mt.lineTo(ge/2,Ye/2),Mt.lineTo(_e/2,-Ye/2),Mt.lineTo(-_e/2,-Ye/2),Mt.closePath();let Kt=new Wr(Mt),Fe=new Bn({color:mt(tt(T.cape,.08)),metalness:.15,roughness:Math.max(.5,Math.min(1,.8+ce())),side:_n});Fe.bumpMap=W,Fe.bumpScale=.12;let lt=new Ze(Kt,Fe);lt.position.set(0,ft+Yt-Ye/2+.05,-Ut/2-.02),lt.rotation.y=Math.PI,lt.castShadow=!0,Ge.add(lt);let Rt=.055,kt=ft+Yt+.02,en=.02,nn=At/2+Lt*.5,$t=new Ze(new Ti(Rt,10,8,0,Math.PI*2,0,Math.PI*.55),Fe.clone());$t.position.set(-nn,kt,en),$t.rotation.x=-Math.PI*.35,$t.rotation.z=Math.PI*.5,$t.scale.set(1.2,.85,1.1),$t.castShadow=!0,Ge.add($t);let pn=new Ze(new Ti(Rt,10,8,0,Math.PI*2,0,Math.PI*.55),Fe.clone());pn.position.set(nn,kt,en),pn.rotation.x=-Math.PI*.35,pn.rotation.z=-Math.PI*.5,pn.scale.set(1.2,.85,1.1),pn.castShadow=!0,Ge.add(pn)}if(T.belt!=null){let _e=new Bn({color:mt(tt(T.belt,.08)),metalness:.2,roughness:Math.max(.4,Math.min(1,.6+ce()))});_e.bumpMap=W,_e.bumpScale=.1;let ge=.022,Ye=.04,Mt=new Ze(new wn(At+.04,ge,Ut+Ye),_e);Mt.position.set(0,ft+.04,0),Mt.castShadow=!0,Ge.add(Mt)}if(T.apron!=null){let _e=new Bn({color:mt(tt(T.apron,.08)),metalness:.08,roughness:Math.max(.5,Math.min(1,.75+ce())),side:_n});_e.bumpMap=W,_e.bumpScale=.12;let ge=At*.95,Ye=ft*.85,Mt=new Ze(new Bi(ge,Ye),_e),Kt=ft+.2;Mt.position.set(0,Kt-Ye/2,Ut/2+.02),Mt.castShadow=!0,Ge.add(Mt);let Fe=ft+Yt+.02,lt=At/2+Lt*.2,Rt=.018,kt=.008,en=Fe-Kt,nn=new Ze(new wn(Rt,en,kt),_e.clone());nn.position.set(-lt,(Kt+Fe)/2,Ut/2+.015),nn.castShadow=!0,Ge.add(nn);let $t=new Ze(new wn(Rt,en,kt),_e.clone());$t.position.set(lt,(Kt+Fe)/2,Ut/2+.015),$t.castShadow=!0,Ge.add($t)}let ie=.1,fe=new Ze(new Ti(ie,12,10),nt);fe.position.set(0,ft+Yt+ie,0),fe.castShadow=!0,Ge.add(fe);let me=new vn({color:1710638}),le=new Ze(new wn(.032,.004,.004),me);le.position.set(-.032,.028,ie*.92),fe.add(le);let pe=new Ze(new wn(.032,.004,.004),me);pe.position.set(.032,.028,ie*.92),fe.add(pe);let Se=new vn({color:2957087}),Ee=new Ze(new wn(.045,.012,.008),Se);Ee.position.set(0,-.028,ie*.92),fe.add(Ee);let Me=new Bn({color:$,metalness:.05,roughness:Math.max(.6,Math.min(1,.85+ce()))});Me.bumpMap=W,Me.bumpScale=.15;let st=_e=>{let ge=ie*.32,Ye=ie*.22,Mt=new Ze(new Mi(Ye*.9,ge,5),Me);Mt.position.set(-ie*.25,ie*.22,ie*.72),Mt.rotation.x=.35,Mt.rotation.z=.12,Mt.castShadow=!0,_e.add(Mt);let Kt=new Ze(new Mi(Ye,ge,5),Me);Kt.position.set(ie*.28,ie*.18,ie*.68),Kt.rotation.x=.28,Kt.rotation.z=-.1,Kt.castShadow=!0,_e.add(Kt);let Fe=new Ze(new Mi(Ye*.7,ge*.9,5),Me);Fe.position.set(0,ie*.28,ie*.78),Fe.rotation.x=.4,Fe.castShadow=!0,_e.add(Fe)};if(j==="female"){let _e=new Ze(new Ti(ie*.92,12,10,0,Math.PI*2,0,Math.PI*.52),Me);_e.position.set(0,ie*.28,-ie*.18),_e.rotation.y=.06,_e.rotation.x=-.04,_e.castShadow=!0,fe.add(_e);let ge=new Ze(new wn(ie*1.15,ie*2.2,ie*.55),Me);ge.position.set(0,-ie*.6,-ie*.95),ge.rotation.z=.03,ge.castShadow=!0,fe.add(ge),st(fe)}else{let _e=new Ze(new Ti(ie*.9,12,10,0,Math.PI*2,0,Math.PI*.5),Me);_e.position.set(0,ie*.4,-ie*.12),_e.rotation.y=.08,_e.rotation.x=-.05,_e.rotation.z=.04,_e.castShadow=!0,fe.add(_e);let ge=new Ze(new Ti(ie*.75,10,8,Math.PI*.2,Math.PI*.6,0,Math.PI*.4),Me);ge.position.set(0,ie*.1,-ie*.05),ge.rotation.y=.1,ge.castShadow=!0,fe.add(ge),st(fe)}return Ge.userData.leftLeg=on,Ge.userData.rightLeg=On,Ge.userData.leftArm=Nt,Ge.userData.rightArm=Ot,Ge}function un(x,f){let E=x.userData;if(!E.leftLeg)return;let T=f*Math.PI*2,U=.35,H=.28;E.leftLeg.rotation.x=Math.sin(T)*U,E.rightLeg.rotation.x=Math.sin(T+Math.PI)*U,E.leftArm.rotation.y=Math.sin(T+Math.PI)*H,E.rightArm.rotation.y=Math.sin(T)*H}function $e(x){let f=x.userData;f.leftLeg&&(f.leftLeg.rotation.x=0,f.rightLeg.rotation.x=0,f.leftArm.rotation.y=0,f.rightArm.rotation.y=0)}function rt(x){let f=K(x.player,x.class,x.hairColor);f.position.copy(Re(x.x,x.y)),f.castShadow=!0,f.userData.unitId=x.id;let E=.28,T=.28,U=.12,H=.18,j=.04,V=new Bi(H,j),k=new vn({color:6037528,side:_n,depthTest:!0,depthWrite:!1}),$=new Ze(V,k);$.position.set(0,E+T/2,U/2+.02),$.rotation.x=-Math.PI/2,$.rotation.z=Math.PI/4,$.visible=x.maxHp>0&&x.hp<x.maxHp&&x.hp>0,f.add($),f.userData.slashMark=$,n.add(f),oe.set(x.id,f),bt(f,x.maxHp>0&&x.hp/x.maxHp<.35)}function Be(x){let f=oe.get(x.id);!f||!f.userData.slashMark||(f.userData.slashMark.visible=x.maxHp>0&&x.hp<x.maxHp&&x.hp>0)}let sn=.35;function bt(x,f){if(x)if(f){x.rotation.x=.35,x.scale.setScalar(.96);let E=x.userData;E&&E.leftArm&&E.rightArm&&(E.leftArm.rotation.y=.2,E.rightArm.rotation.y=.2),x.traverse(T=>{T.isMesh&&T.material&&T.material.color&&(T.userData.originalColor||(T.userData.originalColor=T.material.color.clone()),T.material.color.copy(T.userData.originalColor).multiplyScalar(.82))})}else{x.rotation.x=0,x.scale.setScalar(1);let E=x.userData;E&&E.leftArm&&E.rightArm&&(E.leftArm.rotation.y=0,E.rightArm.rotation.y=0),x.traverse(T=>{T.isMesh&&T.material&&T.userData.originalColor&&T.material.color.copy(T.userData.originalColor)})}}function C(x){if(x.level>=3)return;let f=x.maxHp>0?x.hp/x.maxHp:1;x.level+=1;let E=U=>Math.max(1,Math.ceil(U*1.1)),T=U=>Math.max(1,Math.ceil(U*1.1));x.maxHp=E(x.maxHp),x.maxMp=E(x.maxMp),x.hp=Math.max(1,Math.min(x.maxHp,Math.ceil(f*x.maxHp))),x.mp=Math.max(1,Math.min(x.maxMp,Math.ceil(f*x.maxMp))),x.str=T(x.str),x.agi=T(x.agi),x.vit=T(x.vit),x.dex=T(x.dex),x.luk=T(x.luk),x.int=T(x.int),x.range>2&&(x.range=T(x.range)),console.log("[LEVEL UP]",`${x.name} (${x.class}, P${x.player})`,`\u2192 Lv.${x.level}`,`| HP ${x.hp}/${x.maxHp} MP ${x.mp}/${x.maxMp} STR ${x.str} VIT ${x.vit}`),S(x)}function S(x){let f=oe.get(x.id),E=x.level===3?"levelup level3":x.level===2?"levelup level2":"levelup";if(Sd(x,E),!f)return;let T=performance.now(),U=0;function H(j){U++,U%2===0&&Oe();let V=j-T,k=Math.min(1,V/St),$=k<.5?1+.35*(k/.5):1+.35*(1-(k-.5)/.5);f.scale.setScalar($),k<1?requestAnimationFrame(H):f.scale.setScalar(1)}requestAnimationFrame(H)}function ee(x,f){let E=oe.get(x.id);if(!E){f&&f();return}let T=performance.now(),U=0;function H(j){U++,U%2===0&&Oe();let V=j-T,k=Math.min(1,V/St),$=k<.5?1+.35*(k/.5):1+.35*(1-(k-.5)/.5);E.scale.setScalar($),k<1?requestAnimationFrame(H):(E.scale.setScalar(1),f&&f())}requestAnimationFrame(H)}let Te=400,ve=280,we=.45,Xe=160,Ne=280,Ve=350,at=500,St=600,xe=!1,Vt=new F,Tt=new F,ct=new F,Ke=new F;function ze(x=!1){m=!0;let f=null;if(yt==="playing"&&ke.length>0){let j=ke[dt];f=B.find(V=>V.id===j&&V.hp>0)}if(f||(f=B.find(j=>j.player===ht&&j.hp>0)),!f)return;let E=a.position.distanceTo(h);if(E<.1&&(E=o),p.copy(a.position).sub(h).normalize(),p.lengthSq()<.01&&p.copy(c).normalize(),ct.copy(Re(f.x,f.y)),Ke.copy(ct).add(p.clone().multiplyScalar(E)),x||xe){h.copy(ct),a.position.copy(Ke),a.lookAt(h),Oe();return}xe=!0,Vt.copy(h),Tt.copy(a.position);let T=performance.now(),U=0;Dn.shadowMap.enabled=!1;function H(j){U++,U%2===0&&Oe();let V=Math.min(1,(j-T)/Te),k=V*(2-V);h.lerpVectors(Vt,ct,k),a.position.lerpVectors(Tt,Ke,k),a.lookAt(h),V<1?requestAnimationFrame(H):(Dn.shadowMap.enabled=!0,xe=!1)}requestAnimationFrame(H)}let ot=0,ht=1,yt="draft",Qe="pvp",Ce=1,O=0,Pe=null;async function De(){if(!(typeof navigator>"u"||!navigator.wakeLock))try{Pe=await navigator.wakeLock.request("screen"),Pe.addEventListener("release",()=>{Pe=null})}catch{Pe=null}}function ut(){Pe&&(Pe.release().catch(()=>{}),Pe=null)}document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&Qe==="cvcpu"&&yt==="playing"&&De()});let et="balanced",Ft=new Set(Hi),Ht=0,Bt=null,xn=new Set,ke=[],dt=0,Gt=null,dn=new Map,Zr=null;function Rs(x){if(!x||x.hp<=0)return;Zr=x.id;let f=document.getElementById("unit-preview-card"),E=document.getElementById("unit-preview-image"),T=document.getElementById("unit-preview-name"),U=document.getElementById("unit-preview-meta"),H=document.getElementById("unit-preview-stats");f.classList.remove("player-1","player-2"),f.classList.add(x.player===1?"player-1":"player-2"),f.classList.toggle("level-2",x.level>=2&&x.level<3),f.classList.toggle("level-3",x.level>=3),E.src=Yr[x.class]||"",E.alt=x.name,T.textContent=x.name,U.textContent=`Lv.${x.level} ${x.class} \u2014 Player ${x.player}`,H.innerHTML=[["HP",`${x.hp}/${x.maxHp}`],["MP",`${x.mp}/${x.maxMp}`],["STR",he(x,"str")],["AGI",he(x,"agi")],["VIT",he(x,"vit")],["DEX",he(x,"dex")],["LUK",he(x,"luk")],["INT",he(x,"int")]].map(([V,k])=>`<span class="stat-label">${V}</span><span class="stat-val${V==="HP"?" stat-val-hp":""}">${k}</span>`).join("");let j=x.maxHp>0&&x.hp/x.maxHp<.3;f.classList.toggle("low-hp",j),f.style.display="block"}function zi(){Zr=null;let x=document.getElementById("unit-preview-card");x.classList.remove("low-hp","level-2","level-3"),x.style.display="none"}let Wt=!1,$n=!1,di=!1,Cn=null,tn=!1,Pn=!1,w=!1,z=[],Y=new ci;n.add(Y);let J=[],Z=!0,Ue=0,qe=0;function Oe(){Z=!0,Ue=performance.now()}let it=new ci;n.add(it);let _t=[],gt=Et,vt=.02,fn=3368703,Vn=13382451;function bn(x,f){let E=x/2,T=E-f,U=new hr;U.moveTo(-E,-E),U.lineTo(E,-E),U.lineTo(E,E),U.lineTo(-E,E),U.lineTo(-E,-E);let H=new cr;return H.moveTo(-T,-T),H.lineTo(T,-T),H.lineTo(T,T),H.lineTo(-T,T),H.lineTo(-T,-T),U.holes.push(H),new Wr(U)}let fi=bn(gt,vt);function Dt(x=null){let f=B.filter(E=>E.hp>0&&E.id!==x).map(E=>`${E.id},${E.x},${E.y},${E.player}`).sort().join("|");if(!(Dt._lastSig===f&&Dt._lastExclude===x)){for(Dt._lastSig=f,Dt._lastExclude=x,_t.forEach(E=>E.dispose()),_t.length=0;it.children.length;){let E=it.children[0];it.remove(E)}B.filter(E=>E.hp>0&&E.id!==x).forEach(E=>{let T=E.x,U=E.y,j=(Yn+e.height[U][T]*.35)/2+Yn/2,V=T*Et-ue+Et/2,k=U*Et-Le+Et/2,$=j+.02,ce=E.player===1?fn:Vn,Ae=new vn({color:ce,side:_n}),te=new Ze(fi,Ae);te.rotation.x=-Math.PI/2,te.position.set(V,$,k),it.add(te),_t.push(Ae)}),Oe()}}let wt=1.15,hs={1:8102901,2:15628943},It=(()=>{let x=new vn({color:hs[1]}),f=new Ze(new Mi(.1,.25,8),x);return f.rotation.x=Math.PI,f.visible=!1,n.add(f),f})();function pi(){if(yt!=="playing"||ke.length===0||w){It.visible=!1,It.removeFromParent(),n.add(It);return}let x=ke[dt],f=B.find(T=>T.id===x);if(!f||f.hp<=0){It.visible=!1,It.removeFromParent(),n.add(It);return}let E=oe.get(x);if(!E){It.visible=!1;return}It.removeFromParent(),E.add(It),It.position.set(0,wt,0),It.material&&It.material.color.setHex(hs[f.player]??hs[1]),It.visible=!0}function xo(x){let f=[[0,1],[0,-1],[1,0],[-1,0]],E=[];for(let[T,U]of f){let H=x.x+T,j=x.y+U;!pr(e,H,j)||B.some(k=>k.id!==x.id&&k.x===H&&k.y===j&&k.hp>0)||E.push(Math.atan2(T,U))}return E}function Vi(x){if(z.length===0)return x;if(z.length===1)return z[0];let f=z[0],E=Math.abs(Cs(x-f));for(let T=1;T<z.length;T++){let U=Math.abs(Cs(x-z[T]));U<E&&(E=U,f=z[T])}return f}function Cs(x){for(;x>Math.PI;)x-=2*Math.PI;for(;x<-Math.PI;)x+=2*Math.PI;return x}let In=1.2,Ln=(()=>{let x=new Ze(new Mi(.12,.35,8),new vn({color:4500223}));return x.rotation.x=-Math.PI/2,x.visible=!1,n.add(x),x})();function mr(x,f){if(!w||ke.length===0||z.length===0)return;let E=ke[dt],T=B.find(Ae=>Ae.id===E),U=oe.get(E);if(!T||!U)return;ta(x,f),Wi.setFromCamera(Xi,a);let H=Wi.intersectObjects(Q.children,!0);if(H.length===0)return;let j=null;for(let Ae of H){let te=Ae.object;for(;te&&(te.userData.gx==null||te.userData.gy==null);)te=te.parent;if(te&&te.userData.gx!=null){j=Ae.point;break}}if(!j)return;let V=Re(T.x,T.y),k=j.x-V.x,$=j.z-V.z;if(k*k+$*$<1e-6)return;let ce=Math.atan2(k,$);U.rotation.y=Vi(ce)}function Zn(){if(ke.length===0)return;let x=ke[dt],f=B.find(U=>U.id===x),E=oe.get(x);if(!f||!E)return;z=[[0,1],[0,-1],[1,0],[-1,0]].map(([U,H])=>Math.atan2(U,H)),Ln.removeFromParent(),E.add(Ln),Ln.position.set(0,In,0),Ln.rotation.x=-Math.PI/2,Ln.rotation.y=0,Ln.rotation.z=Math.PI,Ln.visible=!0,E.rotation.y=z[0]}function gr(){Ln.visible=!1,Ln.removeFromParent(),n.add(Ln)}let Ps=[];(function(){let f=ki,E=[1];for(let T=0;T<Math.floor((f-1)/2);T++)E.push(2,2,1,1);f%2===1?E.push(2):(E.push(2,2),E.push(1)),Ps=E})();function Kn(){return Ps[Ht]}function pc(){let x=Kn(),f=0;for(let E=0;E<Ht;E++)Ps[E]===x&&f++;return f+1}function yo(){let x=ki,f=[1];for(let E=0;E<Math.floor((x-1)/2);E++)f.push(2,2,1,1);x%2===1?f.push(2):(f.push(2,2),f.push(1)),Ps=f,yt="draft",Ht=0,Ft=new Set(Hi),Bt=null,xn.clear(),yn(),_o(),document.getElementById("turn-menu").style.display="none",document.getElementById("draft-panel").style.display="flex"}function mc(){return B.filter(x=>x.hp>0).sort((x,f)=>{let E=he(x,"agi"),T=he(f,"agi");if(T!==E)return T-E;let U=he(x,"dex");return he(f,"dex")-U}).map(x=>x.id)}function nd(){document.getElementById("draft-panel").style.display="none";let x=document.getElementById("draft-placement-card");x&&(x.style.display="none",x.innerHTML=""),yn();let f=document.getElementById("battle-start-overlay");f&&(f.classList.add("visible"),f.setAttribute("aria-hidden","false")),document.getElementById("draft-panel").style.display="none";let E=document.getElementById("draft-placement-card");for(E&&(E.style.display="none",E.innerHTML=""),yt="playing",ot=0,ke=mc(),dt=0;dt<ke.length&&B.find(H=>H.id===ke[dt]).hp<=0;)dt++;dt>=ke.length&&(dt=0);let T=B.find(H=>H.id===ke[dt]);ht=T?T.player:1,tn=!1,Pn=!1,Gt=ke[dt],setTimeout(()=>{f&&(f.classList.remove("visible"),f.setAttribute("aria-hidden","true")),document.getElementById("turn-menu").style.display="flex",Dt(),qt(),pi(),ze(!0),Qe==="cvcpu"&&De()},4e3)}function _o(){let x=document.getElementById("draft-panel"),f=document.getElementById("draft-title"),E=document.getElementById("draft-classes"),T=document.getElementById("draft-message"),U=document.getElementById("turn-player"),H=document.getElementById("draft-placement-card");if(Bt){x.style.display="none",U.textContent=`Draft: Player ${Kn()} \u2014 place ${Zt[Bt].name}`;let V=Kn();H.style.display="flex",H.classList.remove("player-1","player-2"),H.classList.add("player-"+V),H.style.left=V===1?"24px":"",H.style.right=V===2?"24px":"";let k=[...B.filter(Ae=>Ae.player===V).map(Ae=>Ae.class),Bt],$=(Ae,te)=>{let se=Zt[Ae];return`
        <div class="draft-class-card${te?" draft-class-card-current":""}">
          <img class="draft-class-card-image" src="${Yr[Ae]||""}" alt="${se.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
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
        </div>
      `},ce=3;if(k.length>ce){H.classList.add("draft-placement-cols");let Ae=[];for(let se=0;se<k.length;se+=ce)Ae.push(k.slice(se,se+ce));let te=k.length-1;H.innerHTML=Ae.map((se,ye)=>{let nt=ye===Ae.length-1,Ge=se.map((ft,zt)=>{let on=ye*ce+zt===te;return $(ft,on)}).join("");return`<div class="draft-placement-col${nt?" draft-placement-col-current":""}">${Ge}</div>`}).join("")}else H.classList.remove("draft-placement-cols"),H.innerHTML=k.map((Ae,te)=>{let se=te===k.length-1;return $(Ae,se)}).join("");Qe==="pvcpu"&&Kn()===2&&setTimeout(yr,500),Qe==="cvcpu"&&setTimeout(yr,500);return}H.style.display="none",H.innerHTML="",yt==="draft"&&(x.style.display="flex");let j=Kn();f.textContent=`Player ${j}: Pick a class (${pc()}/${ki})`,T.textContent="",E.innerHTML="",U.textContent=`Draft: Player ${j} \u2014 pick a class`,sy([...Hi]).forEach(V=>{let k=Ft.has(V),$=Zt[V],ce=document.createElement("button");ce.type="button",ce.className="draft-class-card"+(k?"":" draft-class-card-selected"),ce.disabled=!k,ce.innerHTML=`
          <img class="draft-class-card-image" src="${Yr[V]||""}" alt="${$.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="draft-class-card-body">
            <div class="draft-class-card-name">${$.name}</div>
            <div class="draft-class-card-stats">
              <span class="draft-stat-label">HP</span><span class="draft-stat-value">${$.hp}</span>
              <span class="draft-stat-label">MP</span><span class="draft-stat-value">${$.mp}</span>
              <span class="draft-stat-label">STR</span><span class="draft-stat-value">${$.str}</span>
              <span class="draft-stat-label">AGI</span><span class="draft-stat-value">${$.agi}</span>
              <span class="draft-stat-label">VIT</span><span class="draft-stat-value">${$.vit}</span>
              <span class="draft-stat-label">DEX</span><span class="draft-stat-value">${$.dex}</span>
              <span class="draft-stat-label">LUK</span><span class="draft-stat-value">${$.luk}</span>
              <span class="draft-stat-label">INT</span><span class="draft-stat-value">${$.int}</span>
              <span class="draft-stat-label">Range</span><span class="draft-stat-value">${$.range}</span>
            </div>
          </div>
        `,k&&ce.addEventListener("click",()=>gc(V)),E.appendChild(ce)}),Qe==="pvcpu"&&Kn()===2&&setTimeout(yr,500),Qe==="cvcpu"&&setTimeout(yr,500)}function gc(x){if(!Ft.has(x)||Bt)return;Bt=x;let f=Kn(),E=new Set(B.map(H=>H.y*e.w+H.x)),T=oy(e,f,E),U=$u(e,T);xn=new Set(U.map(H=>H.gy*e.w+H.gx)),pd(U),_o()}function xc(x,f){if(!Bt)return;let E=Kn(),T=f*e.w+x;if(!xn.has(T))return;let U=Zt[Bt],H={id:de++,player:E,x,y:f,level:1,name:U.name,class:Bt,hairColor:(po[Bt]||po.knight).hair,hp:U.hp,maxHp:U.maxHp,mp:U.mp,maxMp:U.maxMp,str:U.str,agi:U.agi,vit:U.vit,dex:U.dex,luk:U.luk,int:U.int,range:U.range};B.push(H),rt(H);let j=oe.get(H.id);j&&(j.rotation.y=H.player===1?Math.PI:0),Ft.delete(Bt),Bt=null,xn.clear(),yn();let V=document.getElementById("draft-placement-card");if(V&&(V.style.display="none",V.innerHTML=""),Ht++,Ht>=2*ki){nd();return}let k=Kn(),$=pc(),ce=document.getElementById("draft-panel"),Ae=document.getElementById("draft-title"),te=document.getElementById("draft-message"),se=document.getElementById("draft-classes"),ye=document.getElementById("turn-player");ce&&Ae&&se&&ye&&(ce.style.display="flex",Ae.textContent=`Player ${k}: Pick a class (${$}/${ki})`,te&&(te.textContent="Get ready\u2026"),se.innerHTML="",ye.textContent=`Draft: Player ${k} \u2014 pick a class`),setTimeout(_o,1500)}function qt(){qt._pending||(qt._pending=!0,requestAnimationFrame(()=>{qt._pending=!1,id()}))}function id(){let x=qt._cache||(qt._cache={}),f=x.turnEl||(x.turnEl=document.getElementById("turn-player")),E=x.menuLabel||(x.menuLabel=document.getElementById("menu-label")),T=x.turnMenu||(x.turnMenu=document.getElementById("turn-menu")),U=x.unitInfo||(x.unitInfo=document.getElementById("unit-info")),H=x.unitNameEl||(x.unitNameEl=document.getElementById("unit-name")),j=x.unitLevelClassEl||(x.unitLevelClassEl=document.getElementById("unit-level-class")),V=x.unitStatsEl||(x.unitStatsEl=document.getElementById("unit-stats")),k=x.unitClassImageEl||(x.unitClassImageEl=document.getElementById("unit-class-image"));if(yt==="playing"&&B.forEach(te=>{if(te.hp<=0)return;let se=oe.get(te.id);se&&bt(se,te.maxHp>0&&te.hp/te.maxHp<sn)}),T.classList.remove("player-1","player-2"),T.classList.add(ht===1?"player-1":"player-2"),T.classList.toggle("level-2",!1),T.classList.toggle("level-3",!1),yt==="playing"&&ke.length>0){let te=ke[dt];B.find(ye=>ye.id===te&&ye.hp>0)&&(Gt==null||!B.find(ye=>ye.id===Gt&&ye.hp>0))&&(Gt=te)}if(Gt!=null){let te=B.find(se=>se.id===Gt);if(te&&te.hp>0){U.classList.remove("no-unit");let se=te.maxHp>0&&te.hp/te.maxHp<.25;T.classList.toggle("low-hp",se),T.classList.toggle("level-2",te.level>=2&&te.level<3),T.classList.toggle("level-3",te.level>=3),H.textContent=te.name,j.textContent=`Lv.${te.level} ${te.class}`,k.src=Yr[te.class]||"",k.alt=te.name,V.innerHTML=[["HP",`${te.hp}/${te.maxHp}`],["MP",`${te.mp}/${te.maxMp}`],["STR",he(te,"str")],["AGI",he(te,"agi")],["VIT",he(te,"vit")],["DEX",he(te,"dex")],["LUK",he(te,"luk")],["INT",he(te,"int")]].map(([ye,nt])=>`<span>${ye}</span><span class="stat-val${ye==="HP"?" stat-val-hp":""}">${nt}</span>`).join("")}else T.classList.remove("low-hp","level-2","level-3"),U.classList.add("no-unit"),H.textContent="\u2014 Select a unit \u2014",j.textContent="",V.textContent="",k.src="",k.alt=""}else T.classList.remove("low-hp","level-2","level-3"),U.classList.add("no-unit"),H.textContent="\u2014 Select a unit \u2014",j.textContent="",V.textContent="",k.src="",k.alt="";if(Gt!=null)f.textContent=`Player ${ht} \u2014 Unit ${H.innerHTML} active`;else{let te=ke.length?B.find(se=>se.id===ke[dt]):null;f.textContent=te?`${te.name} (Player ${ht})`:`Player ${ht}`}E.textContent=`Player ${ht}`;let $=x.btnAttack||(x.btnAttack=document.getElementById("btn-attack")),ce=x.btnSkill||(x.btnSkill=document.getElementById("btn-skill")),Ae=x.btnEnd||(x.btnEnd=document.getElementById("btn-end"));if(Qe==="cvcpu"&&yt==="playing")$.disabled=!0,ce.disabled=!0,Ae&&(Ae.disabled=!0),f.textContent=`Player ${ht} (CPU)`;else if(w)$.disabled=!0,ce.disabled=!0,f.textContent="Click on map to choose facing direction";else if(yt==="playing"){$.disabled=Pn;let te=ke.length?ke[dt]:null,se=te?B.find(Ge=>Ge.id===te&&Ge.hp>0):null,ye=Qe!=="cvcpu"&&(Qe!=="pvcpu"||ht===1),nt=ye&&se&&!Pn?ea(se):[];ce.disabled=Pn||!ye||nt.length===0,Ae&&(Ae.disabled=!1)}if(yt==="playing"){let te=Math.min(ot+1,ls);f.textContent=(f.textContent||"")+` \u2014 Turn ${te}/${ls}`;let se=x.turnsLeftEl||(x.turnsLeftEl=document.getElementById("turns-left")),ye=x.turnsLeftValueEl||(x.turnsLeftValueEl=document.getElementById("turns-left-value"));if(se&&ye){se.style.display="";let nt=Math.max(0,ls-ot);ye.textContent=String(nt),se.classList.toggle("turns-left-low",nt<=10)}}else{let te=x.turnsLeftEl||(x.turnsLeftEl=document.getElementById("turns-left"));te&&(te.style.display="none")}yt==="playing"&&So(ht)&&!Wt&&setTimeout(Mn,700)}function rn(){Oe(),zi(),$n=!1,di=!1,Cn=null,w=!1,z=[],gr(),yn();let x=ke.length;if(x===0)return;let f=ke[dt],E=B.find(V=>V.id===f);if(E&&E.tempDebuff&&E.tempDebuff.duration--,E&&E.tempDebuff&&E.tempDebuff.duration<=0&&(E.tempDebuff=void 0),E&&E.tempBuff&&E.tempBuff.duration--,E&&E.tempBuff&&E.tempBuff.duration<=0&&(E.tempBuff=void 0),E&&E.hp>0){let V=Math.ceil(he(E,"int")*.15);E.mp=Math.min(E.maxMp,E.mp+V)}if(E&&E.hp>0){let V=E.x,k=E.y;e.type[k][V]===Je.CENTER&&E.level===1&&C(E);let $=E.player===1?Je.BASE_TOP:Je.BASE_BOTTOM;e.type[k][V]===$&&E.level===2&&C(E)}if(ot++,ot>=ls){Ed();return}let T=(dt+1)%x,U=0;for(;U<x;){let V=ke[T],k=B.find($=>$.id===V);if(k&&k.hp>0)break;T=(T+1)%x,U++}let H=T===0;dt=T;for(let V=0;V<x;V++){let k=ke[dt],$=B.find(Ae=>Ae.id===k);if(!$||$.hp<=0)break;let ce=$.tempDebuff&&$.tempDebuff.poison!=null?$.tempDebuff.poison:0;if(ce<=0)break;if($.hp=Math.max(0,$.hp-ce),jn($.x,$.y,String(ce),!1,"poison"),Be($),$.hp<=0){Tn($),T=(dt+1)%x;let Ae=0;for(;Ae<x;){let te=ke[T],se=B.find(ye=>ye.id===te);if(se&&se.hp>0)break;T=(T+1)%x,Ae++}dt=T;continue}break}let j=B.find(V=>V.id===ke[dt]);ht=j?j.player:1,tn=!1,Pn=!1,Gt=ke[dt],H&&(ke=mc(),dt=0),qt(),pi(),ze()}document.getElementById("btn-attack").addEventListener("click",()=>{if(Wt||Pn||yt!=="playing"||ke.length===0)return;zi();let x=ke[dt],f=B.find(U=>U.id===x);if(!f||f.hp<=0)return;let E=f.range!=null?f.range:1;Gt=x,$n=!0;let T=Zu(e,f.x,f.y,E);dn=new Map,T.forEach((U,H)=>{let j=H%e.w,V=Math.floor(H/e.w);As(e,f.x,f.y,j,V)&&dn.set(H,U)}),md(dn),qt()}),document.getElementById("btn-skill").addEventListener("click",x=>{if(x.preventDefault(),x.stopPropagation(),Wt||Pn)return;let f=ke[dt],E=f?B.find(V=>V.id===f&&V.hp>0):null;if(!E||E.player!==ht)return;let T=document.getElementById("skill-list-overlay"),U=document.getElementById("btn-skill");if(!U)return;if(T&&T.style.display==="block"){T.style.display="none";return}let H=ea(E),j=U.getBoundingClientRect();T||(T=document.createElement("div"),T.id="skill-list-overlay",T.className="skill-list-overlay",T.setAttribute("aria-hidden","true"),document.body.appendChild(T)),T.style.left=`${j.left}px`,T.style.top=`${j.top-4}px`,T.style.transform="translateY(-100%)",T.style.right="auto",T.style.bottom="auto",T.style.display="none",H.length===0?T.innerHTML='<div class="skill-option" style="cursor:default;color:#8b949e;">No skills available</div>':(T.innerHTML=H.map((V,k)=>`<button type="button" class="skill-option" data-skill-index="${k}" ${V.disabled?"disabled":""}>
          <span class="skill-name">${V.name}</span> <span class="skill-meta">${V.cost} MP \xB7 Lv.${V.level}</span><br/>
          <span class="skill-meta">${V.description}</span>
        </button>`).join(""),T.querySelectorAll(".skill-option").forEach((V,k)=>{V.addEventListener("click",$=>{$.preventDefault(),$.stopPropagation();let ce=H[k];if(Cn=ce,T.style.display="none",T.setAttribute("aria-hidden","true"),ce.target==="self"){if(E.mp<ce.cost)return;E.mp-=ce.cost,Pn=!0,Qr(E,E,ce,{showFloatingCombatText:jn,handleUnitDeath:Tn,updateUnitSlashVisibility:Be,updateTurnUI:qt},()=>{yn(),di=!1,Cn=null,Ds=new Set,tn?rn():qt()}),qt();return}if(ce.target==="ally"&&_r(E,ce,B).filter(se=>se.targetUnit&&se.targetUnit.id!==E.id).length===0&&E.mp>=ce.cost){E.mp-=ce.cost,Pn=!0,Qr(E,E,ce,{showFloatingCombatText:jn,handleUnitDeath:Tn,updateUnitSlashVisibility:Be,updateTurnUI:qt},()=>{yn(),di=!1,Cn=null,Ds=new Set,tn?rn():qt()}),qt();return}di=!0,$n=!1,fd(E,ce),qt()})})),requestAnimationFrame(()=>{T.style.display="block",T.style.visibility="visible",T.setAttribute("aria-hidden","false")})}),document.addEventListener("click",x=>{let f=document.getElementById("skill-list-overlay"),E=document.getElementById("btn-skill"),T=document.querySelector(".skill-wrap");!f||f.style.display!=="block"||T&&T.contains(x.target)||f.contains(x.target)||(f.style.display="none",f.setAttribute("aria-hidden","true"))}),document.getElementById("btn-end").addEventListener("click",()=>{if(Wt||w||yt!=="playing"||ke.length===0)return;let x=ke[dt],f=B.find(T=>T.id===x);if(!f||f.hp<=0)return;w=!0,Gt=null,$n=!1,dn=new Map,yn(),Zn(),pi();let E=document.getElementById("turn-player");E.textContent="Click on map to choose facing direction",qt()}),h.set(0,8,0),a.position.copy(h).add(c),a.lookAt(h);let Kr=document.getElementById("mode-select-overlay"),yc=document.getElementById("mode-carousel-track"),_c=document.getElementById("mode-carousel-prev"),vc=document.getElementById("mode-carousel-next"),Jr=document.getElementById("mode-carousel-dots"),Ai=document.getElementById("mode-play-btn"),Mc=document.getElementById("mode-settings-pvp"),bc=document.getElementById("mode-settings-pvp-map"),Sc=document.getElementById("mode-settings-pvp-none"),Ec=document.getElementById("mode-settings-options"),Tc=document.getElementById("pvp-map-mode"),xr=document.getElementById("ai-draft-preference"),sd=document.getElementById("cvcpu-num-games"),Is=document.getElementById("move-speed"),Ls=document.getElementById("draft-picks-per-player"),wc=["pvp","pvcpu","cvcpu","story"],vo=3,Jn=0;function Mo(){return Jn===vo}function jr(x){Jn=Math.max(0,Math.min(x,vo)),yc&&(yc.style.transform=`translateX(-${Jn*100}%)`),Jr&&Jr.querySelectorAll(".mode-dot").forEach((E,T)=>{E.classList.toggle("active",T===Jn),E.setAttribute("aria-selected",T===Jn)}),Mc&&(Mc.style.display=Jn===0||Jn===1||Mo()?"":"none"),bc&&(bc.style.display=Jn===0||Jn===1?"":"none"),Sc&&(Sc.style.display=Mo()?"":"none"),Ec&&(Ec.style.display=$r&&Jn===2?"":"none");let f=Ai?.querySelector(".mode-play-text");Ai&&f&&(Mo()?(Ai.disabled=!0,f.textContent="Coming Soon"):(Ai.disabled=!1,f.textContent="Play game"))}if(Jr)for(let x=0;x<=vo;x++){let f=document.createElement("button");f.type="button",f.className="mode-dot"+(x===0?" active":""),f.setAttribute("role","tab"),f.setAttribute("aria-label",`Mode ${x+1}`),f.setAttribute("aria-selected",x===0),f.addEventListener("click",()=>jr(x)),Jr.appendChild(f)}if(_c&&_c.addEventListener("click",()=>jr(Jn-1)),vc&&vc.addEventListener("click",()=>jr(Jn+1)),Kr&&!$r){let x=Kr.querySelector('.mode-slide[data-mode="cvcpu"]');x&&(x.style.display="none")}jr(0),Is&&(Is.value=String(ws),Is.addEventListener("input",()=>{let x=parseInt(Is.value,10);!Number.isNaN(x)&&x>=0&&(ws=x)}),Is.addEventListener("change",()=>{let x=parseInt(Is.value,10);!Number.isNaN(x)&&x>=0&&(ws=x)})),Ls&&(Ls.value=String(ki),Ls.addEventListener("input",()=>{let x=parseInt(Ls.value,10);!Number.isNaN(x)&&x>=1&&(ki=x)}),Ls.addEventListener("change",()=>{let x=parseInt(Ls.value,10);!Number.isNaN(x)&&x>=1&&(ki=x)})),xr&&(ty.forEach(x=>{let f=document.createElement("option");f.value=x.value,f.textContent=x.label,xr.appendChild(f)}),xr.value=et,xr.addEventListener("change",()=>{et=xr.value}));let Gi=new Audio;Gi.loop=!0,Gi.volume=.3,Gi.preload="auto";let bo=window.location.href.replace(/[^/]*$/,""),Ac=typeof window.TACTICS_BGM_URL<"u"?window.TACTICS_BGM_URL:bo+(bo.includes("/src/")?"../assets/music/tavern.mp3":"assets/music/tavern.mp3");Gi.src=Ac,Gi.addEventListener("error",()=>{let x=bo+"assets/music/tavern.mp3";x!==Ac&&(Gi.src=x)});function rd(){Gi.paused&&Gi.play().catch(()=>{})}function ad(){if(wc[Jn]==="story")return;let x=wc[Jn];if(rd(),Qe=x,x==="pvp"||x==="pvcpu"){let f=Tc&&Tc.value||"long";We(f)}else x==="cvcpu"&&We("long");x==="cvcpu"&&(Ce=Math.max(1,parseInt(sd?.value,10)||1),O=0),Kr&&Kr.classList.add("hidden"),yo()}Ai?Ai.addEventListener("click",x=>{if(Ai.disabled)return;let f=Ai.querySelector(".mode-play-ripple");if(f){let E=Ai.getBoundingClientRect();f.style.left=x.clientX-E.left+"px",f.style.top=x.clientY-E.top+"px",f.style.width=f.style.height="20px",f.style.marginLeft=f.style.marginTop="-10px",f.classList.remove("ripple"),f.offsetHeight,f.classList.add("ripple"),setTimeout(()=>f.classList.remove("ripple"),500)}ad()}):yo();function So(x){return Qe==="pvcpu"&&x===2||Qe==="cvcpu"}function od(){let x=Hi.filter(te=>Ft.has(te));if(x.length===0)return null;let f=et||"balanced";if(f==="random")return x[Math.floor(Math.random()*x.length)];if(f==="custom")return ny.filter(se=>Ft.has(se))[0]??x[0]??null;let E=["hp","maxHp","mp","str","agi","vit","dex","luk","int"];function T(te){let se=Zt[te];if(!se)return 1/0;let ye=E.map(Ge=>se[Ge]??0),nt=ye.reduce((Ge,ft)=>Ge+ft,0)/ye.length;return ye.reduce((Ge,ft)=>Ge+(ft-nt)**2,0)/ye.length}if(f==="tanky")return[...x].sort((se,ye)=>{let nt=Zt[se]?.hp??0,Ge=Zt[ye]?.hp??0;return Ge!==nt?Ge-nt:(Zt[ye]?.vit??0)-(Zt[se]?.vit??0)})[0]??null;if(f==="aggressive")return[...x].sort((se,ye)=>{let nt=Zt[se]?.str??0,Ge=Zt[ye]?.str??0;return Ge!==nt?Ge-nt:(Zt[ye]?.agi??0)-(Zt[se]?.agi??0)})[0]??null;if(f==="scout")return[...x].sort((se,ye)=>{let nt=Zt[se]?.agi??0,Ge=Zt[ye]?.agi??0;return Ge!==nt?Ge-nt:(Zt[ye]?.dex??0)-(Zt[se]?.dex??0)})[0]??null;if(f==="ranged")return[...x].sort((se,ye)=>{let nt=Zt[se]?.range??0,Ge=Zt[ye]?.range??0;return Ge!==nt?Ge-nt:(Zt[ye]?.dex??0)-(Zt[se]?.dex??0)})[0]??null;if(f==="caster")return[...x].sort((se,ye)=>{let nt=Zt[se]?.int??0,Ge=Zt[ye]?.int??0;return Ge!==nt?Ge-nt:(Zt[ye]?.mp??0)-(Zt[se]?.mp??0)})[0]??null;let U=Kn(),j=iy(ki),V=B.filter(te=>te.player===U).map(te=>te.class),k={};for(let te of Object.keys(fo))k[te]=0;for(let te of V)for(let se of Object.keys(fo))if(fo[se].includes(te)){k[se]++;break}let $=te=>Math.max(0,(j[te]??0)-(k[te]??0)),ce=te=>{for(let[se,ye]of Object.entries(fo))if(ye.includes(te))return se;return null};return[...x].sort((te,se)=>{let ye=ce(te),nt=ce(se),Ge=ye!=null?$(ye):0,ft=nt!=null?$(nt):0;if(ft!==Ge)return ft-Ge;let zt=Zt[te]?.hp??0,Xt=Zt[se]?.hp??0;return Xt!==zt?Xt-zt:T(te)-T(se)})[0]??null}function yr(){if(yt!=="draft"||!So(Kn()))return;if(!Bt){let E=od();E&&gc(E),setTimeout(yr,500);return}let x=Array.from(xn).map(E=>({gx:E%e.w,gy:Math.floor(E/e.w)})),f=$u(e,x);if(f.length>0){let{gx:E,gy:T}=f[0];xc(E,T)}}function Rc(){let x=[];for(let f=0;f<e.h;f++)for(let E=0;E<e.w;E++)e.type[f][E]===Je.CENTER&&x.push({gx:E,gy:f});return x}function ld(x){let f=[],E=x===1?Je.BASE_TOP:Je.BASE_BOTTOM;for(let T=0;T<e.h;T++)for(let U=0;U<e.w;U++)e.type[T][U]===E&&f.push({gx:U,gy:T});return f}function ri(x,f,E,T){return Math.abs(x-E)+Math.abs(f-T)}function cd(x){let f=x.range!=null?x.range:1,E=[];for(let T of B){if(T.hp<=0||T.player===x.player)continue;let U=ri(x.x,x.y,T.x,T.y);U<=f&&U>0&&As(e,x.x,x.y,T.x,T.y)&&E.push({target:T,dist:U})}return E}function hd(x){let f=B.filter(E=>E.hp>0&&E.player===x.player&&E.id!==x.id);for(let E of f){let T=B.filter(U=>U.hp>0&&U.player!==x.player);for(let U of T){let H=U.range!=null?U.range:1,j=ri(U.x,U.y,E.x,E.y);if(j<=H&&j>0&&As(e,U.x,U.y,E.x,E.y))return!0}}return!1}function jt(x,f,E,T){let U=x.x,H=x.y,j=cs(e,x.x,x.y,f,E,B,x);if(!j||j.length<=1){T&&T();return}Gt=null,yn(),Wt=!0,m=!0,Dt(x.id),Oe();let V=oe.get(x.id),k=1;function $(){if(k>=j.length){x.x=j[j.length-1].x,x.y=j[j.length-1].y,Wt=!1,$e(V),Dt(),dn=new Map,tn=!0,T&&T();return}let ce=j[k-1],Ae=j[k],te=Re(ce.x,ce.y).clone(),se=Re(Ae.x,Ae.y).clone(),ye=se.x-te.x,nt=se.z-te.z;ye*ye+nt*nt>1e-6&&(V.rotation.y=Math.atan2(ye,nt));let Ge=performance.now(),ft=0;function zt(Xt){ft++,ft%2===0&&Oe();let on=Math.min(1,(Xt-Ge)/ws),Yt=(At=>At*At*(3-2*At))(on);if(V.position.lerpVectors(te,se,Yt),un(V,Yt),m){let At=a.position.distanceTo(h),Ut=At<.1?o:At;p.copy(a.position).sub(h).normalize(),p.lengthSq()<.01&&p.copy(c).normalize(),h.lerp(V.position,l),a.position.copy(h).add(p.clone().multiplyScalar(Ut)),a.lookAt(h)}on<1?requestAnimationFrame(zt):(k++,$())}requestAnimationFrame(zt)}$()}function Cc(x,f){let E=he(f,"agi")*.7+he(f,"luk")*.3,U=Math.random()*Math.max(.001,E)<=he(x,"dex"),H=0;if(U){let Ut=he(x,"str")*.7+he(x,"dex")*.2+he(x,"int")*.1-(he(f,"vit")*.3+he(f,"luk")*.2);H=Math.max(1,Math.floor(Ut))}Pn=!0,Gt=null,$n=!1,yn(),console.log("[ATTACK]",`${x.name} (${x.class}, P${x.player})`,"\u2192",`${f.name} (${f.class}, P${f.player})`,U?`${H} dmg`:"MISS",`| ${f.name} HP ${f.hp} \u2192 ${Math.max(0,f.hp-H)}/${f.maxHp}`);let j=oe.get(x.id);if(!j||!j.userData.rightArm){Wt=!0,U?(f.hp=Math.max(0,f.hp-H),jn(f.x,f.y,String(H),!1),Be(f),f.hp<=0&&Tn(f,x)):jn(f.x,f.y,"MISS",!0),setTimeout(()=>{Wt=!1,tn?rn():qt()},400);return}let V=Re(x.x,x.y).clone(),k=Re(f.x,f.y).clone(),$=V.clone().lerp(k,.35),ce=k.x-V.x,Ae=k.z-V.z;if(ce*ce+Ae*Ae>1e-6&&(j.rotation.y=Math.atan2(ce,Ae)),(x.range!=null?x.range:1)>2){let st=function(_e){Me++,Me%2===0&&Oe();let ge=_e-Ee,Ye=Math.min(1,ge/Ne);if(Lt.position.lerpVectors(pe,Se,Ye),cn){let Mt=Math.sin(Ye*Math.PI)*1.1;cn.rotation.y=-Mt}if(!fe&&Ye>=1&&(fe=!0,n.remove(Lt),Ut.dispose(),Qt.dispose(),U?(f.hp=Math.max(0,f.hp-H),jn(f.x,f.y,String(H),!1),f.hp<=0&&(le=!0),oe.get(f.id)?me=_e:le&&(Tn(f,x),le=!1),Be(f)):jn(f.x,f.y,"MISS",!0)),me!=null&&U){let Mt=oe.get(f.id);if(Mt){let Kt=Math.min(1,(_e-me)/Xe),Fe=1-Kt;qi.copy(Ot).multiplyScalar(ie*Fe),Mt.position.copy(Nt).add(qi),Kt>=1&&(Mt.position.copy(Nt),me=null,le&&(Tn(f,x),le=!1))}else me=null,le&&(Tn(f,x),le=!1)}if(Ye<1)requestAnimationFrame(st);else{cn&&(cn.rotation.y=0);let Mt=me==null;Mt&&le&&(Tn(f,x),le=!1),Mt?(Dn.shadowMap.enabled=!0,Wt=!1,setTimeout(tn?()=>rn():()=>qt(),400)):requestAnimationFrame(st)}},Ut=new os(.035,.035,.4,6),Qt=new vn({color:16763972}),Lt=new Ze(Ut,Qt);Lt.position.copy(V),Lt.position.y+=.6;let ln=k.clone().sub(V).normalize();Lt.quaternion.setFromUnitVectors(new F(0,1,0),ln),n.add(Lt),Wt=!0;let cn=j.userData.rightArm,Nt=Re(f.x,f.y).clone(),Ot=k.clone().sub(V).normalize(),ie=.4,fe=!1,me=null,le=!1,pe=Lt.position.clone(),Se=k.clone();Se.y+=.6;let Ee=performance.now(),Me=0;Dn.shadowMap.enabled=!1,requestAnimationFrame(st);return}let ye=!1,nt=performance.now(),Ge=j.userData.rightArm,ft=null,zt=!1,Xt=Re(f.x,f.y).clone(),on=k.clone().sub(V).normalize(),On=.4,Yt=0;function At(Ut){Yt++,Yt%2===0&&Oe();let Qt=Ut-nt,Lt=Math.min(1,Qt/ve),ln=Lt<=.4?Lt/.4:1,cn=Lt>.4?(Lt-.4)/.6:0;Lt<=.4?j.position.lerpVectors(V,$,ln):j.position.lerpVectors($,V,cn);let Nt=Lt<=.35?Lt/.35:Lt<=.7?(.7-Lt)/.35:0;if(Ge.rotation.y=-Nt*1.1,!ye&&Lt>=we&&(ye=!0,U?(f.hp=Math.max(0,f.hp-H),jn(f.x,f.y,String(H),!1),f.hp<=0&&(zt=!0),Be(f),oe.get(f.id)?ft=Ut:zt&&(Tn(f,x),zt=!1)):jn(f.x,f.y,"MISS",!0)),ft!=null&&U){let Ot=oe.get(f.id);if(Ot){let ie=Math.min(1,(Ut-ft)/Xe),fe=1-ie;qi.copy(on).multiplyScalar(On*fe),Ot.position.copy(Xt).add(qi),ie>=1&&(Ot.position.copy(Xt),ft=null,zt&&(Tn(f,x),zt=!1))}else ft=null,zt&&(Tn(f,x),zt=!1)}if(Lt<1)requestAnimationFrame(At);else{j.position.copy(V),Ge.rotation.y=0;let Ot=ft==null;Ot&&zt&&(Tn(f,x),zt=!1),Ot?(Dn.shadowMap.enabled=!0,Wt=!1,setTimeout(tn?()=>rn():()=>qt(),400)):requestAnimationFrame(At)}}Wt=!0,Dn.shadowMap.enabled=!1,requestAnimationFrame(At)}function ud(x,f){let E=Re(x,f);E.y+=.4;let T=new Ti(.1,12,12),U=new vn({color:8930559,transparent:!0,opacity:.9}),H=new Ze(T,U);H.position.copy(E),n.add(H);let j=performance.now(),V=0;function k($){V++,V%2===0&&Oe();let ce=$-j,Ae=Math.min(1,ce/Ve),te=Ae*(2-Ae);H.scale.setScalar(te*4.5),U.opacity=.9*(1-Ae),Ae<1?requestAnimationFrame(k):(n.remove(H),T.dispose(),U.dispose())}requestAnimationFrame(k)}function Qr(x,f,E,T,U){if(E.target==="enemy"&&f==null){setTimeout(()=>{T.updateTurnUI&&T.updateTurnUI(),U&&U()},400);return}let j=(E.range??0)>2&&f!=null&&(f.x!==x.x||f.y!==x.y),V=!j&&f!=null&&(f.x!==x.x||f.y!==x.y);if(!j&&!V){Wt=!0,mo(E.effectKey,x,f,T);let Nt=E.target==="self"||E.target==="ally",Ot=E.target==="self"?x:f;Nt&&Ot?ee(Ot,()=>{setTimeout(()=>{Wt=!1,T.updateTurnUI&&T.updateTurnUI(),U&&U()},400)}):setTimeout(()=>{Wt=!1,T.updateTurnUI&&T.updateTurnUI(),U&&U()},400);return}if(V){let Fe=function(lt){Kt++,Kt%2===0&&Oe();let Rt=lt-Mt,kt=Math.min(1,Rt/ve),en=kt<=.4?kt/.4:1,nn=kt>.4?(kt-.4)/.6:0;kt<=.4?Nt.position.lerpVectors(Ot,fe,en):Nt.position.lerpVectors(fe,Ot,nn);let $t=kt<=.35?kt/.35:kt<=.7?(.7-kt)/.35:0;if(Me.rotation.y=-$t*1.1,!st&&kt>=we&&(st=!0,mo(E.effectKey,x,f,Ye),f.hp<=0&&(ge=!0),T.updateUnitSlashVisibility&&T.updateUnitSlashVisibility(f),oe.get(f.id)&&E.target!=="ally"?_e=lt:ge&&(Tn(f,x),ge=!1)),_e!=null){let pn=oe.get(f.id);if(pn){let us=Math.min(1,(lt-_e)/Xe),Ro=1-us;qi.copy(Se).multiplyScalar(Ee*Ro),pn.position.copy(pe).add(qi),us>=1&&(pn.position.copy(pe),_e=null,ge&&(Tn(f,x),ge=!1))}else _e=null,ge&&(Tn(f,x),ge=!1)}kt<1?requestAnimationFrame(Fe):(Nt.position.copy(Ot),Me.rotation.y=0,_e==null&&ge&&(Tn(f,x),ge=!1),_e==null?(Dn.shadowMap.enabled=!0,Wt=!1,setTimeout(()=>{T.updateTurnUI&&T.updateTurnUI(),U&&U()},400)):requestAnimationFrame(Fe))},Nt=oe.get(x.id);if(!Nt||!Nt.userData.rightArm){Wt=!0,mo(E.effectKey,x,f,T),T.updateUnitSlashVisibility&&T.updateUnitSlashVisibility(f),setTimeout(()=>{Wt=!1,T.updateTurnUI&&T.updateTurnUI(),U&&U()},400);return}Wt=!0;let Ot=Re(x.x,x.y).clone(),ie=Re(f.x,f.y).clone(),fe=Ot.clone().lerp(ie,.35),me=ie.x-Ot.x,le=ie.z-Ot.z;me*me+le*le>1e-6&&(Nt.rotation.y=Math.atan2(me,le));let pe=Re(f.x,f.y).clone(),Se=ie.clone().sub(Ot).normalize(),Ee=.4,Me=Nt.userData.rightArm,st=!1,_e=null,ge=!1,Ye={...T,handleUnitDeath:void 0},Mt=performance.now(),Kt=0;Dn.shadowMap.enabled=!1,requestAnimationFrame(Fe);return}let k=Re(x.x,x.y).clone(),$=Re(f.x,f.y).clone(),ce=new os(.035,.035,.4,6),Ae=new vn({color:16763972}),te=new Ze(ce,Ae);te.position.copy(k),te.position.y+=.6;let se=$.clone().sub(k).normalize();te.quaternion.setFromUnitVectors(new F(0,1,0),se),n.add(te),Wt=!0;let ye=oe.get(x.id),nt=ye&&ye.userData.rightArm?ye.userData.rightArm:null;if(ye){let Nt=$.x-k.x,Ot=$.z-k.z;Nt*Nt+Ot*Ot>1e-6&&(ye.rotation.y=Math.atan2(Nt,Ot))}let Ge=te.position.clone(),ft=$.clone();ft.y+=.6;let zt=performance.now(),Xt=Re(f.x,f.y).clone(),on=$.clone().sub(k).normalize(),On=.4,Yt=!1,At=null,Ut=0,Qt=null,Lt=E.effectKey==="powerShot"?{...T,animateKnockback(Nt,Ot,ie,fe,me,le){Qt={targ:Nt,fromGx:Ot,fromGy:ie,toGx:fe,toGy:me,knockbackOnDone:le}}}:T;function ln(){Dn.shadowMap.enabled=!0,Wt=!1,setTimeout(()=>{T.updateTurnUI&&T.updateTurnUI(),U&&U()},400)}function cn(Nt){Ut++,Ut%2===0&&Oe();let Ot=Nt-zt,ie=Math.min(1,Ot/Ne);if(te.position.lerpVectors(Ge,ft,ie),nt){let fe=Math.sin(ie*Math.PI)*1.1;nt.rotation.y=-fe}if(!Yt&&ie>=1&&(Yt=!0,n.remove(te),ce.dispose(),Ae.dispose(),E.type==="spell"&&ud(f.x,f.y),mo(E.effectKey,x,f,Lt),oe.get(f.id)&&f.hp>0&&(At=Nt),T.updateUnitSlashVisibility&&T.updateUnitSlashVisibility(f)),At!=null){let fe=oe.get(f.id);if(fe){let me=Math.min(1,(Nt-At)/Xe),le=1-me;if(qi.copy(on).multiplyScalar(On*le),fe.position.copy(Xt).add(qi),me>=1&&(fe.position.copy(Xt),At=null,Qt)){let{targ:pe,fromGx:Se,fromGy:Ee,toGx:Me,toGy:st,knockbackOnDone:_e}=Qt;Qt=null,T.animateKnockback?T.animateKnockback(pe,Se,Ee,Me,st,()=>{_e&&_e(),T.updateUnitSlashVisibility&&T.updateUnitSlashVisibility(pe),ln()}):ln();return}}else if(At=null,Qt){Qt=null,ln();return}}if(ie<1)requestAnimationFrame(cn);else if(nt&&(nt.rotation.y=0),At==null)if(Qt){let{targ:fe,fromGx:me,fromGy:le,toGx:pe,toGy:Se,knockbackOnDone:Ee}=Qt;Qt=null,T.animateKnockback?T.animateKnockback(fe,me,le,pe,Se,()=>{Ee&&Ee(),T.updateUnitSlashVisibility&&T.updateUnitSlashVisibility(fe),ln()}):ln()}else ln();else requestAnimationFrame(cn)}Dn.shadowMap.enabled=!1,requestAnimationFrame(cn)}function Mn(){if(yt!=="playing"||!So(ht)||Wt||ke.length===0)return;let x=ke[dt],f=B.find(ie=>ie.id===x);if(!f||f.hp<=0)return;let E=go(e,f.x,f.y,he(f,"agi"),B,f),T=[];E.forEach((ie,fe)=>{if(ie===0)return;let me=fe%e.w,le=Math.floor(fe/e.w);B.some(Se=>Se.id!==f.id&&Se.x===me&&Se.y===le&&Se.hp>0)||T.push({gx:me,gy:le,dist:ie})});let U=cd(f),H=Rc(),j=ld(f.player),V=.25,k=.03,$=f.maxHp>0&&f.hp/f.maxHp<V,ce=f.maxHp>0&&f.hp/f.maxHp<k,Ae=f.level===2,te=ie=>B.some(fe=>fe.hp>0&&fe.x===ie.gx&&fe.y===ie.gy&&fe.id!==f.id),se=H.filter(ie=>!te(ie)),ye=j.filter(ie=>!te(ie)),nt=ea(f).filter(ie=>!ie.disabled&&f.mp>=ie.cost&&ie.target==="enemy"),Ge=nt.length>0?Math.max(...nt.map(ie=>ie.range||0)):0,ft=Math.max(f.range!=null?f.range:1,Ge);function zt(ie,fe){if(fe.length===0)return null;let me=null,le=1/0;for(let pe of ie){let Se=0;for(let Ee of fe)Se+=ri(pe.gx,pe.gy,Ee.gx,Ee.gy);Se<le&&(le=Se,me=pe)}return me}function Xt(ie,fe){if(fe.length===0||ie.length===0)return null;let me=null,le=1/0;for(let pe of ie){let Se=Math.min(...fe.map(Ee=>ri(pe.gx,pe.gy,Ee.gx,Ee.gy)));Se<le&&(le=Se,me=pe)}return me}function on(ie,fe){let me=ft,le=[];for(let pe of B){if(pe.hp<=0||pe.player===f.player)continue;let Se=ri(ie,fe,pe.x,pe.y);Se<=me&&Se>0&&As(e,ie,fe,pe.x,pe.y)&&le.push({target:pe,dist:Se})}return le}let On=new Set(T.map(ie=>ie.gy*e.w+ie.gx));function Yt(ie,fe){if(!ie||ie.length<=1)return null;let me=Math.min(fe,ie.length-1);for(let le=me;le>=1;le--){let pe=ie[le],Se=pe.y*e.w+pe.x;if(On.has(Se))return{gx:pe.x,gy:pe.y}}return null}function At(ie,fe){if(!ie||ie.length<=1)return null;let me=Math.min(fe,ie.length-1);for(let le=me;le>=1;le--){let pe=ie[le];if(!B.some(Ee=>Ee.id!==f.id&&Ee.hp>0&&Ee.x===pe.x&&Ee.y===pe.y))return{gx:pe.x,gy:pe.y}}return null}function Ut(ie){let fe=null,me=null,le=1/0;for(let pe of ie){let Se=cs(e,f.x,f.y,pe.gx,pe.gy,B,f);Se&&Se.length>1&&Se.length<le&&(le=Se.length,fe=Se,me=pe)}return fe&&me?{path:fe,target:me}:null}function Qt(ie){let fe=ie??T;if(fe.length===0)return null;let me=B.filter(Se=>Se.hp>0&&Se.player!==f.player);if(me.length===0)return fe[0];let le=null,pe=-1;for(let Se of fe){let Ee=Math.min(...me.map(Me=>ri(Se.gx,Se.gy,Me.x,Me.y)));Ee>pe&&(pe=Ee,le=Se)}return le}function Lt(ie){let fe=ie??T;if(fe.length===0)return null;let me=B.filter(Me=>Me.hp>0&&Me.player!==f.player),le=B.filter(Me=>Me.hp>0&&Me.player===f.player&&Me.id!==f.id);if(me.length===0)return fe[0];let pe=f.maxHp>0&&f.hp/f.maxHp>=.6,Se=null,Ee=-1/0;for(let Me of fe){let st=Math.min(...me.map(Ye=>ri(Me.gx,Me.gy,Ye.x,Ye.y))),_e=le.length>0?Math.min(...le.map(Ye=>ri(Me.gx,Me.gy,Ye.x,Ye.y))):999,ge;pe?ge=_e<st?st-1e3:st:ge=st-_e,ge>Ee&&(Ee=ge,Se=Me)}return Se}function ln(){let ie=ft,fe=B.filter(pe=>pe.hp>0&&pe.player!==f.player);if(fe.length===0)return null;let me=null,le=-1;for(let pe of T){let Se=Math.min(...fe.map(Me=>ri(pe.gx,pe.gy,Me.x,Me.y)));fe.some(Me=>ri(pe.gx,pe.gy,Me.x,Me.y)<=ie)&&Se>le&&(le=Se,me=pe)}return me}if(Pn){if(tn){setTimeout(()=>rn(),400);return}if(ls-ot<=20&&H.length>0){let Ee=H.some(Me=>Me.gx===f.x&&Me.gy===f.y);if(Ee&&T.length>0){let Me=new Set(H.map(ge=>ge.gy*e.w+ge.gx)),_e=T.filter(ge=>Me.has(ge.gy*e.w+ge.gx)).filter(ge=>ge.gx!==f.x||ge.gy!==f.y);if(_e.length>0){let ge=Qt(_e);if(ge&&(ge.gx!==f.x||ge.gy!==f.y)){jt(f,ge.gx,ge.gy,()=>setTimeout(rn,400));return}}setTimeout(()=>rn(),400);return}if(Ee){setTimeout(()=>rn(),400);return}if(T.length>0){let Me=se.length>0?se:H,st=Ut(Me),_e=st?At(st.path,he(f,"agi")):null;if(_e&&(_e.gx!==f.x||_e.gy!==f.y)){jt(f,_e.gx,_e.gy,()=>setTimeout(rn,400));return}let ge=Xt(T,Me);if(ge&&(ge.gx!==f.x||ge.gy!==f.y)){jt(f,ge.gx,ge.gy,()=>setTimeout(rn,400));return}}setTimeout(()=>rn(),400);return}if(!$&&T.length>0){if(H.length>0&&!H.some(Me=>Me.gx===f.x&&Me.gy===f.y)){let Me=se.length>0?se:H,st=Ut(Me),_e=st?At(st.path,he(f,"agi")):null;if(_e&&(_e.gx!==f.x||_e.gy!==f.y)){jt(f,_e.gx,_e.gy,()=>setTimeout(rn,400));return}let ge=Xt(T,Me);if(ge&&(ge.gx!==f.x||ge.gy!==f.y)){jt(f,ge.gx,ge.gy,()=>setTimeout(rn,400));return}}if(Ae&&j.length>0&&!j.some(Me=>Me.gx===f.x&&Me.gy===f.y)){let Me=ye.length>0?ye:j,st=Ut(Me),_e=st?At(st.path,he(f,"agi")):null;if(_e&&(_e.gx!==f.x||_e.gy!==f.y)){jt(f,_e.gx,_e.gy,()=>setTimeout(rn,400));return}let ge=Xt(T,Me);if(ge&&(ge.gx!==f.x||ge.gy!==f.y)){jt(f,ge.gx,ge.gy,()=>setTimeout(rn,400));return}}}let fe=new Set(H.map(Ee=>Ee.gy*e.w+Ee.gx)),me=H.length>0?T.filter(Ee=>fe.has(Ee.gy*e.w+Ee.gx)):null,le=me!=null&&me.length>0?me:T,pe=B.filter(Ee=>Ee.hp>0&&Ee.player===f.player&&Ee.id!==f.id),Se=null;if(le.length>0&&pe.length>0&&(Se=Lt(le),Se)){let Ee=cs(e,f.x,f.y,Se.gx,Se.gy,B,f),Me=Ee?Ee.length-1:1/0;(!Ee||Ee.length<=1||Me>he(f,"agi"))&&(Se=Qt(le))}if(!Se&&le.length>0&&(Se=Qt(le)),Se&&(Se.gx!==f.x||Se.gy!==f.y)){jt(f,Se.gx,Se.gy,()=>setTimeout(rn,400));return}setTimeout(()=>rn(),400);return}if(ce&&ls-ot>20&&!tn&&T.length>0){let ie=null,fe=1/0;for(let le of T){let Se=on(le.gx,le.gy).filter(Ee=>Ee.target.maxHp>0&&Ee.target.hp/Ee.target.maxHp<V);if(Se.length>0){let Ee=Math.min(...Se.map(Me=>Me.target.hp));Ee<fe&&(fe=Ee,ie=le)}}if(ie){let le=cs(e,f.x,f.y,ie.gx,ie.gy,B,f),pe=le?Yt(le,he(f,"agi")):null;if(pe&&(pe.gx!==f.x||pe.gy!==f.y)){jt(f,pe.gx,pe.gy,()=>setTimeout(Mn,600));return}}let me=Qt();if(me&&(me.gx!==f.x||me.gy!==f.y)){jt(f,me.gx,me.gy,()=>setTimeout(Mn,600));return}setTimeout(()=>rn(),400);return}if(!Pn){let st=function(Fe){return _r(f,Fe,B).filter(Rt=>Rt.targetUnit!=null).map(Rt=>Rt.targetUnit)},ie=ea(f),fe=f.maxHp>0?f.hp/f.maxHp:1,me=.35,le=new Set(["arcaneBolt","feast","pierce","snipe","berserk","drain","shuriken","chokuto","bite","execute","judgement","exorcise","ambush","powerShot","concoct"]),pe=new Set(["chakra","sacrifice"]),Se=new Set(["brave","focus","bloodlust","iaido","howl","mantra","sanctuary","windWalk","forge","fortify"]),Ee=new Set(["manaDrain","impale","poison"]),Me=new Set(["dominate","weaken","cripple","hex","blind","raid"]),_e={showFloatingCombatText:jn,handleUnitDeath:Tn,updateUnitSlashVisibility:Be,updateTurnUI:qt,world:e,units:B,updateUnitPosition(Fe){let lt=oe.get(Fe.id);lt&&lt.position.copy(Re(Fe.x,Fe.y))},animateKnockback(Fe,lt,Rt,kt,en,nn){let $t=oe.get(Fe.id);if(!$t){nn&&nn();return}let pn=Re(lt,Rt).clone(),us=Re(kt,en).clone(),Ro=performance.now(),Fc=0;function Bc(Td){Fc++,Fc%2===0&&Oe();let kc=Math.min(1,(Td-Ro)/ws),wd=Co=>Co*Co*(3-2*Co);$t.position.lerpVectors(pn,us,wd(kc)),kc<1?requestAnimationFrame(Bc):($t.position.copy(us),nn&&nn())}requestAnimationFrame(Bc)}},ge=null,Ye=null,Mt=U.some(Fe=>Fe.target.maxHp>0&&Fe.target.hp/Fe.target.maxHp<V),Kt=Mt||T.some(Fe=>on(Fe.gx,Fe.gy).some(Rt=>Rt.target.maxHp>0&&Rt.target.hp/Rt.target.maxHp<V));if(!Kt){for(let lt of ie)if(!lt.disabled&&pe.has(lt.effectKey)){let kt=_r(f,lt,B).filter(en=>en.targetUnit&&en.targetUnit.maxHp>0&&en.targetUnit.hp/en.targetUnit.maxHp<.5);if(kt.length>0){let en=kt.sort((nn,$t)=>nn.targetUnit.hp-$t.targetUnit.hp)[0].targetUnit;ge=lt,Ye=en;break}}}if(!ge&&!Kt&&(U.length>0||T.some(lt=>on(lt.gx,lt.gy).length>0)))for(let lt of ie){if(lt.disabled)continue;let Rt=f.tempBuff&&f.tempBuff.duration>0;if(Se.has(lt.effectKey)){if(lt.target==="self"){if(lt.effectKey==="bloodlust"&&f.hp/f.maxHp>.8)continue;if(!Rt){ge=lt,Ye=f;break}}if(lt.target==="ally"){if(lt.effectKey==="forge"&&Rt||lt.effectKey==="fortify"&&Rt||lt.effectKey==="mantra"&&Rt||lt.effectKey==="sanctuary"&&Rt)continue;let en=_r(f,lt,B).filter(nn=>nn.targetUnit!=null).map(nn=>nn.targetUnit);if(en.length>0){let nn=en.filter(pn=>!pn.tempBuff||pn.tempBuff.duration<=0),$t=(nn.length>0?nn:en).sort((pn,us)=>pn.hp-us.hp)[0];ge=lt,Ye=$t;break}}}}if(!ge){for(let Fe of ie)if(!Fe.disabled&&le.has(Fe.effectKey)){if(Fe.effectKey==="feast"&&f.hp/f.maxHp>.7||Fe.effectKey==="berserk"&&f.hp/f.maxHp<.25||Fe.effectKey==="shuriken"&&U.length>0||Fe.effectKey==="judgement"&&f.hp/f.maxHp>.7)continue;let lt=st(Fe);if(lt.length===0)continue;let Rt=lt.filter($t=>$t.maxHp>0&&$t.hp/$t.maxHp<me),kt=($t,pn)=>he($t,"int")-he(pn,"int")||$t.hp-pn.hp,en=($t,pn)=>$t.hp-pn.hp,nn=Rt.length>0?Fe.type==="spell"?Rt.sort(kt)[0]:Rt.sort(en)[0]:Fe.type==="spell"?lt.sort(kt)[0]:lt.sort(en)[0];ge=Fe,Ye=nn;break}}if(!ge&&!Mt){for(let Fe of ie)if(!Fe.disabled&&Me.has(Fe.effectKey)){let Rt=st(Fe).sort((kt,en)=>kt.hp-en.hp)[0];ge=Fe,Ye=Rt;break}}if(!ge&&!Mt){for(let Fe of ie)if(!Fe.disabled&&Ee.has(Fe.effectKey)){let Rt=st(Fe).filter(kt=>!kt.tempDebuff||kt.tempDebuff.duration<=0);if(Rt.length>0){let kt=Rt.sort((en,nn)=>en.hp-nn.hp)[0];ge=Fe,Ye=kt;break}}}if(ge&&Ye){f.mp-=ge.cost,Pn=!0;let Fe=ge.target==="self"?f:Ye;Qr(f,Fe,ge,_e,()=>setTimeout(Mn,600));return}}if(hd(f)&&U.length>0){U.sort((fe,me)=>fe.target.hp-me.target.hp||fe.dist-me.dist);let ie=U[0].target;Cc(f,ie);return}if(U.length>0){U.sort((fe,me)=>fe.target.hp-me.target.hp||fe.dist-me.dist);let ie=U[0].target;Cc(f,ie);return}let cn=ls-ot;if(cn<=20&&H.length>0&&!tn&&T.length>0&&!H.some(fe=>fe.gx===f.x&&fe.gy===f.y)){let fe=se.length>0?se:H,me=Ut(fe),le=me?me.path:null,pe=(Ye,Mt)=>Math.min(...H.map(Kt=>ri(Ye,Mt,Kt.gx,Kt.gy))),Se=pe(f.x,f.y),Ee=null,Me=-1,st=V;for(let Ye of T){if(pe(Ye.gx,Ye.gy)>Se||on(Ye.gx,Ye.gy).filter(Rt=>Rt.target.maxHp>0&&Rt.target.hp/Rt.target.maxHp<st).length===0)continue;let Fe=le?le.findIndex(Rt=>Rt.x===Ye.gx&&Rt.y===Ye.gy):-1,lt=Fe>=0?Fe:0;lt>Me&&(Me=lt,Ee=Ye)}if(Ee&&(Ee.gx!==f.x||Ee.gy!==f.y)){jt(f,Ee.gx,Ee.gy,()=>setTimeout(Mn,600));return}let _e=me?At(me.path,he(f,"agi")):null;if(_e&&(_e.gx!==f.x||_e.gy!==f.y)){jt(f,_e.gx,_e.gy,()=>setTimeout(Mn,600));return}let ge=Xt(T,fe);if(ge&&(ge.gx!==f.x||ge.gy!==f.y)){jt(f,ge.gx,ge.gy,()=>setTimeout(Mn,600));return}}if($&&T.length>0&&!tn){let ie=null,fe=1/0;for(let me of T){let pe=on(me.gx,me.gy).filter(Se=>Se.target.maxHp>0&&Se.target.hp/Se.target.maxHp<V);if(pe.length>0){let Se=Math.min(...pe.map(Ee=>Ee.target.hp));Se<fe&&(fe=Se,ie=me)}}if(ie){let me=cs(e,f.x,f.y,ie.gx,ie.gy,B,f),le=me?Yt(me,he(f,"agi")):null;if(le&&(le.gx!==f.x||le.gy!==f.y)){jt(f,le.gx,le.gy,()=>setTimeout(Mn,600));return}}if(cn>20&&Ae&&j.length>0&&!j.some(le=>le.gx===f.x&&le.gy===f.y)){let le=ye.length>0?ye:j,pe=Ut(le);if(pe!=null&&pe.path.length<=5){let Ee=At(pe.path,he(f,"agi"));if(Ee&&(Ee.gx!==f.x||Ee.gy!==f.y)){jt(f,Ee.gx,Ee.gy,()=>setTimeout(Mn,600));return}let Me=Xt(T,le);if(Me&&(Me.gx!==f.x||Me.gy!==f.y)){jt(f,Me.gx,Me.gy,()=>setTimeout(Mn,600));return}}}if(cn>20){let me=Qt();if(me&&ri(f.x,f.y,me.gx,me.gy)>0){jt(f,me.gx,me.gy,()=>setTimeout(Mn,600));return}setTimeout(()=>rn(),400);return}}if(cn<=10&&H.length>0&&!tn&&T.length>0&&!H.some(fe=>fe.gx===f.x&&fe.gy===f.y)){let fe=se.length>0?se:H,me=Ut(fe),le=me?At(me.path,he(f,"agi")):null;if(le&&(le.gx!==f.x||le.gy!==f.y)){jt(f,le.gx,le.gy,()=>setTimeout(Mn,600));return}let pe=Xt(T,fe);if(pe&&(pe.gx!==f.x||pe.gy!==f.y)){jt(f,pe.gx,pe.gy,()=>setTimeout(Mn,600));return}}if(f.level===1&&H.length>0&&!tn&&!H.some(fe=>fe.gx===f.x&&fe.gy===f.y)&&T.length>0){let fe=se.length>0?se:H,me=Ut(fe),le=me?At(me.path,he(f,"agi")):null;if(le&&(le.gx!==f.x||le.gy!==f.y)){jt(f,le.gx,le.gy,()=>setTimeout(Mn,600));return}let pe=Xt(T,fe);if(pe&&(pe.gx!==f.x||pe.gy!==f.y)){jt(f,pe.gx,pe.gy,()=>setTimeout(Mn,600));return}}if(Ae&&j.length>0&&!tn&&!j.some(fe=>fe.gx===f.x&&fe.gy===f.y)&&T.length>0){let me=B.filter(_e=>_e.hp>0&&_e.player!==f.player).filter(_e=>_e.maxHp>0&&_e.hp/_e.maxHp<V),le=null,pe=1/0;for(let _e of T){let Ye=on(_e.gx,_e.gy).find(Mt=>me.some(Kt=>Kt.id===Mt.target.id));Ye&&Ye.target.hp<pe&&(pe=Ye.target.hp,le=_e)}if(le){let _e=cs(e,f.x,f.y,le.gx,le.gy,B,f),ge=_e?Yt(_e,he(f,"agi")):null;if(ge&&(ge.gx!==f.x||ge.gy!==f.y)){jt(f,ge.gx,ge.gy,()=>setTimeout(Mn,600));return}}let Se=ye.length>0?ye:j,Ee=Ut(Se),Me=Ee?At(Ee.path,he(f,"agi")):null;if(Me&&(Me.gx!==f.x||Me.gy!==f.y)){jt(f,Me.gx,Me.gy,()=>setTimeout(Mn,600));return}let st=Xt(T,Se);if(st&&(st.gx!==f.x||st.gy!==f.y)){jt(f,st.gx,st.gy,()=>setTimeout(Mn,600));return}}let Nt=B.filter(ie=>ie.hp>0&&ie.player!==f.player);if(f.level>=2&&ft>=2&&Nt.length>0&&!tn&&T.length>0){let ie=ln();if(ie&&(ie.gx!==f.x||ie.gy!==f.y)){jt(f,ie.gx,ie.gy,()=>setTimeout(Mn,600));return}}if(Nt.length>0&&!tn&&T.length>0){let fe=function(le,pe){let Se=null;for(let Ee=-ie;Ee<=ie;Ee++)for(let Me=-ie;Me<=ie;Me++){if(Me===0&&Ee===0||Math.abs(Me)+Math.abs(Ee)>ie)continue;let st=le.x+Me,_e=le.y+Ee;if(st<0||st>=e.w||_e<0||_e>=e.h||!pr(e,st,_e)||!As(e,st,_e,le.x,le.y)||B.some(Fe=>Fe.hp>0&&Fe.x===st&&Fe.y===_e))continue;let Ye=cs(e,f.x,f.y,st,_e,B,f),Mt=Ye?Ye.length-1:1/0;Ye&&Ye.length>1&&(!pe||Mt<=he(f,"agi"))&&(!Se||Ye.length<Se.length)&&(Se=Ye)}return Se},ie=ft,me=[];for(let le of Nt){let pe=fe(le,!0);pe&&me.push({enemy:le,path:pe})}if(me.length>0){let le=me.filter(Me=>Me.enemy.maxHp>0&&Me.enemy.hp/Me.enemy.maxHp<V),pe=le.length>0?le:me;le.length>0?pe.sort((Me,st)=>Me.enemy.hp-st.enemy.hp||Me.path.length-st.path.length):pe.sort((Me,st)=>Me.path.length-st.path.length||Me.enemy.hp-st.enemy.hp);let Se=pe[0],Ee=Yt(Se.path,he(f,"agi"));if(Ee&&(Ee.gx!==f.x||Ee.gy!==f.y)){jt(f,Ee.gx,Ee.gy,()=>setTimeout(Mn,600));return}}if(me.length===0){let le=null,pe=1/0;for(let Se of Nt){let Ee=fe(Se,!1);Ee&&Ee.length<pe&&(pe=Ee.length,le=Ee)}if(le){let Se=Yt(le,he(f,"agi"));if(Se&&(Se.gx!==f.x||Se.gy!==f.y)){jt(f,Se.gx,Se.gy,()=>setTimeout(Mn,600));return}}}}setTimeout(()=>rn(),400)}function yn(){for(J.length=0;Y.children.length;){let x=Y.children[0];Y.remove(x),x.geometry!==vr&&x.geometry!==Mr&&x.geometry.dispose(),x.material.dispose()}Oe()}let Ds=new Set;function ea(x){return!x||!x.class?[]:qu[x.class]?qu[x.class].map(f=>({...f,disabled:f.disabled===!0||x.level<f.level||f.hpCost&&x.hp<f.hpCost||f.cost&&x.mp<f.cost})):[]}function _r(x,f,E){let T=[],U=(j,V,k,$)=>Math.abs(j-k)+Math.abs(V-$),H=f.range||0;if(f.target==="self")return T.push({gx:x.x,gy:x.y,targetUnit:null}),T;for(let j of E)j.hp<=0||U(x.x,x.y,j.x,j.y)>H||H>2&&!As(e,x.x,x.y,j.x,j.y)||(f.target==="enemy"&&j.player!==x.player&&T.push({gx:j.x,gy:j.y,targetUnit:j}),f.target==="ally"&&j.player===x.player&&T.push({gx:j.x,gy:j.y,targetUnit:j}));return T}function dd(x,f){let E=f.range||0;if(f.target==="self")return[{gx:x.x,gy:x.y}];let T=Zu(e,x.x,x.y,E),U=[];return T.forEach((H,j)=>{let V=j%e.w,k=j/e.w|0;E>2&&!As(e,x.x,x.y,V,k)||U.push({gx:V,gy:k})}),U}function fd(x,f){let E=_r(x,f,B);Ds=new Set(E.map(U=>`${U.gx},${U.gy}`));let T=f.target==="self"?E:dd(x,f);yn(),T.forEach(({gx:U,gy:H})=>{let V=(Yn+e.height[H][U]*.35)/2+Yn/2,k=U*Et-ue+Et/2,$=H*Et-Le+Et/2,ce=V+.01,Ae=new vn({color:8926122,transparent:!0,opacity:.4,side:_n}),te=new Ze(vr,Ae);te.rotation.x=-Math.PI/2,te.position.set(k,ce,$),Y.add(te),J.push(Ae);let se=new vn({color:11167436,transparent:!0,opacity:.7,side:_n}),ye=new Ze(Mr,se);ye.rotation.x=-Math.PI/2,ye.position.set(k,ce+.01,$),ye.userData.gx=U,ye.userData.gy=H,Y.add(ye),J.push(se)})}let Pc=.82,Ic=1.02,vr=new Bi(Ic,Ic),Mr=new Bi(Pc,Pc);function pd(x){yn(),x.forEach(({gx:f,gy:E})=>{let U=(Yn+e.height[E][f]*.35)/2+Yn/2,H=f*Et-ue+Et/2,j=E*Et-Le+Et/2,V=U+.01,k=new vn({color:2271812,transparent:!0,opacity:.4,side:_n}),$=new Ze(vr,k);$.rotation.x=-Math.PI/2,$.position.set(H,V,j),Y.add($),J.push(k);let ce=new vn({color:4508774,transparent:!0,opacity:.7,side:_n}),Ae=new Ze(Mr,ce);Ae.rotation.x=-Math.PI/2,Ae.position.set(H,V+.01,j),Ae.userData.gx=f,Ae.userData.gy=E,Y.add(Ae),J.push(ce)}),Oe()}function Eo(x){yn(),x.forEach((f,E)=>{if(f===0)return;let T=E%e.w,U=E/e.w|0,j=(Yn+e.height[U][T]*.35)/2+Yn/2,V=T*Et-ue+Et/2,k=U*Et-Le+Et/2,$=j+.01,ce=new vn({color:3381759,transparent:!0,opacity:.35,side:_n}),Ae=new Ze(vr,ce);Ae.rotation.x=-Math.PI/2,Ae.position.set(V,$,k),Y.add(Ae),J.push(ce);let te=new vn({color:6730751,transparent:!0,opacity:.65,side:_n}),se=new Ze(Mr,te);se.rotation.x=-Math.PI/2,se.position.set(V,$+.01,k),Y.add(se),J.push(te)}),Oe()}function md(x){yn(),x.forEach((f,E)=>{if(f===0)return;let T=E%e.w,U=E/e.w|0,j=(Yn+e.height[U][T]*.35)/2+Yn/2,V=T*Et-ue+Et/2,k=U*Et-Le+Et/2,$=j+.01,ce=new vn({color:10035746,transparent:!0,opacity:.4,side:_n}),Ae=new Ze(vr,ce);Ae.rotation.x=-Math.PI/2,Ae.position.set(V,$,k),Y.add(Ae),J.push(ce);let te=new vn({color:13386820,transparent:!0,opacity:.7,side:_n}),se=new Ze(Mr,te);se.rotation.x=-Math.PI/2,se.position.set(V,$+.01,k),Y.add(se),J.push(te)}),Oe()}let Wi=new oo,Xi=new He;function ta(x,f){let E=t.getBoundingClientRect();return Xi.x=(x-E.left)/E.width*2-1,Xi.y=-((f-E.top)/E.height)*2+1,{x:Xi.x,y:Xi.y}}function gd(x,f){if(Wt)return;Xi.x=x,Xi.y=f,Wi.setFromCamera(Xi,a);let E=Wi.intersectObjects(Q.children,!0);if(E.length===0)return;let T=null;for(let V of E){let k=V.object;for(;k&&(k.userData.gx==null||k.userData.gy==null);)k=k.parent;if(k&&k.userData.gx!=null){T=k;break}}if(!T||T.userData.gx==null)return;let U=T.userData.gx,H=T.userData.gy;if(yt==="draft"&&Bt){let V=H*e.w+U;xn.has(V)&&xc(U,H);return}if(yt!=="playing"||Qe==="cvcpu")return;if(di&&Cn){let V=ke[dt],k=B.find(se=>se.id===V&&se.hp>0);if(k&&U===k.x&&H===k.y){di=!1,Cn=null,Ds=new Set,yn(),tn?dn=new Map:(dn=go(e,k.x,k.y,he(k,"agi"),B,k),Eo(dn)),qt();return}let $=`${U},${H}`;if(!Ds.has($))return;if(!k||k.mp<Cn.cost){di=!1,Cn=null,yn(),qt();return}let ce=B.find(se=>se.x===U&&se.y===H&&se.hp>0);if(Cn.target==="enemy"&&(!ce||ce.player===k.player)||Cn.target==="ally"&&ce&&ce.player!==k.player||Cn.target==="self"&&(U!==k.x||H!==k.y)||Cn.target==="enemy"&&!ce)return;k.mp-=Cn.cost,Pn=!0;let Ae={showFloatingCombatText:jn,handleUnitDeath:Tn,updateUnitSlashVisibility:Be,updateTurnUI:qt,world:e,units:B,updateUnitPosition(se){let ye=oe.get(se.id);ye&&ye.position.copy(Re(se.x,se.y))},animateKnockback(se,ye,nt,Ge,ft,zt){let Xt=oe.get(se.id);if(!Xt){zt&&zt();return}let on=Re(ye,nt).clone(),On=Re(Ge,ft).clone(),Yt=performance.now(),At=0;function Ut(Qt){At++,At%2===0&&Oe();let Lt=Math.min(1,(Qt-Yt)/ws),ln=cn=>cn*cn*(3-2*cn);Xt.position.lerpVectors(on,On,ln(Lt)),Lt<1?requestAnimationFrame(Ut):(Xt.position.copy(On),zt&&zt())}requestAnimationFrame(Ut)}},te=Cn.target==="self"?k:ce||null;Qr(k,te,Cn,Ae,()=>{yn(),di=!1,Cn=null,Ds=new Set,tn?rn():qt()});return}if(w){let V=ke[dt],k=B.find(ce=>ce.id===V),$=oe.get(V);if(k&&$&&z.length>0){let ce=Re(k.x,k.y),Ae=Re(U,H),te=Ae.x-ce.x,se=Ae.z-ce.z,ye=te*te+se*se>1e-6?Math.atan2(te,se):$.rotation.y;$.rotation.y=Vi(ye)}setTimeout(()=>rn(),400);return}if(Gt!=null&&$n){let V=B.find(ce=>ce.id===Gt);if(!V||V.player!==ht)return;let k=H*e.w+U,$=B.find(ce=>ce.x===U&&ce.y===H&&ce.hp>0);if($&&$.id===ke[dt]&&$.player===ht){$n=!1,Gt=$.id,tn?(yn(),dn=new Map):(dn=go(e,$.x,$.y,he($,"agi"),B,$),Eo(dn)),qt();return}if(!dn.has(k)||dn.get(k)===0)return;if($&&$.player!==ht){let ce=he($,"agi")*.7+he($,"luk")*.3;if(Math.random()*Math.max(.001,ce)<=he(V,"dex")){let se=he(V,"str")*.7+he(V,"dex")*.1+he(V,"int")*.07-(he($,"vit")*.3+he($,"luk")*.1),ye=Math.max(1,Math.floor(se));$.hp=Math.max(0,$.hp-ye),jn($.x,$.y,String(ye),!1),$.hp<=0&&Tn($,V),Be($)}else jn($.x,$.y,"MISS",!0);Pn=!0,Gt=null,$n=!1,yn(),setTimeout(tn?()=>rn():()=>qt(),400)}return}let j=B.find(V=>V.x===U&&V.y===H&&V.hp>0);if(j){if(j.id===ke[dt]&&j.player===ht){zi(),Gt=j.id,$n=!1,tn?(yn(),dn=new Map):(dn=go(e,U,H,he(j,"agi"),B,j),Eo(dn)),qt();return}yn(),dn=new Map,$n=!1,Rs(j),qt();return}if(zi(),Gt!=null){let se=function(){if(te>=ce.length){V.x=ce[ce.length-1].x,V.y=ce[ce.length-1].y,Wt=!1,$e(Ae),Dt(),dn=new Map,tn=!0,setTimeout(Pn?()=>rn():()=>qt(),400);return}let ye=ce[te-1],nt=ce[te],Ge=Re(ye.x,ye.y).clone(),ft=Re(nt.x,nt.y).clone(),zt=ft.x-Ge.x,Xt=ft.z-Ge.z;zt*zt+Xt*Xt>1e-6&&(Ae.rotation.y=Math.atan2(zt,Xt));let on=performance.now(),On=0;function Yt(At){On++,On%2===0&&Oe();let Ut=Math.min(1,(At-on)/ws),Lt=(ln=>ln*ln*(3-2*ln))(Ut);if(Ae.position.lerpVectors(Ge,ft,Lt),un(Ae,Lt),m){let ln=a.position.distanceTo(h),cn=ln<.1?o:ln;p.copy(a.position).sub(h).normalize(),p.lengthSq()<.01&&p.copy(c).normalize(),h.lerp(Ae.position,l),a.position.copy(h).add(p.clone().multiplyScalar(cn)),a.lookAt(h)}Ut<1?requestAnimationFrame(Yt):(te++,se())}requestAnimationFrame(Yt)};if($n)return;let V=B.find(ye=>ye.id===Gt);if(!V||V.player!==ht)return;let k=H*e.w+U;if(!dn.has(k)||dn.get(k)===0||B.some(ye=>ye.id!==V.id&&ye.x===U&&ye.y===H&&ye.hp>0)||Wt||tn)return;let ce=cs(e,V.x,V.y,U,H,B,V);if(!ce||ce.length<=1)return;Gt=null,yn(),Wt=!0,m=!0,Dt(V.id);let Ae=oe.get(V.id),te=1;se()}}function Lc(x){b.x=x.clientX,b.y=x.clientY,R=x.isTouch===!0,M=x.ctrlKey,_=ta(x.clientX,x.clientY),t.style.cursor=(x.ctrlKey,"grabbing")}function To(x){return x.touches&&x.touches.length>0?{clientX:x.touches[0].clientX,clientY:x.touches[0].clientY}:x.changedTouches&&x.changedTouches.length>0?{clientX:x.changedTouches[0].clientX,clientY:x.changedTouches[0].clientY}:{clientX:x.clientX,clientY:x.clientY}}function Dc(x){if(!x||x.length<2)return 0;let f=x[0],E=x[1];return Math.hypot(E.clientX-f.clientX,E.clientY-f.clientY)}function xd(x){if(x.touches.length===2){G=Dc(x.touches),_=null;return}if(x.touches.length!==1)return;G=null;let f=To(x);Lc({clientX:f.clientX,clientY:f.clientY,ctrlKey:!1,isTouch:!0})}function yd(x){if(x.touches.length===2){x.preventDefault();let E=Dc(x.touches);if(G!=null&&G>0){let T=E-G,U=a.position.distanceTo(h),H=Math.max(q,Math.min(ae,U-T*P));y.copy(h).sub(a.position).normalize(),a.position.copy(h).sub(y.multiplyScalar(H)),a.lookAt(h),Ue=performance.now()}G=E;return}if(G=null,x.touches.length!==1)return;x.preventDefault();let f=To(x);Uc({clientX:f.clientX,clientY:f.clientY,ctrlKey:!1})}function _d(x){if(x.touches.length<2&&(G=null),x.touches.length===2||x.changedTouches.length===0)return;R=!1;let f=To(x);wo({clientX:f.clientX,clientY:f.clientY,ctrlKey:!1})}function Uc(x){if(w){mr(x.clientX,x.clientY);return}if(_==null)return;let f=x.clientX-b.x,E=x.clientY-b.y;if(!v&&!g&&(Math.abs(f)>A||Math.abs(E)>A)&&(x.ctrlKey||M?(g=!0,m=!1):(v=!0,m=!1)),g){X.copy(a.position).sub(h);let T=X.length();if(T<.001)return;let U=Math.atan2(X.x,X.z),H=Math.asin(Math.max(-1,Math.min(1,X.y/T)));U-=f*D,H+=E*D,H=Math.max(I,Math.min(L,H)),X.x=T*Math.cos(H)*Math.sin(U),X.y=T*Math.sin(H),X.z=T*Math.cos(H)*Math.cos(U),a.position.copy(h).add(X),a.lookAt(h),b.x=x.clientX,b.y=x.clientY,Ue=performance.now()}else if(v){let T=ta(x.clientX,x.clientY);d.setFromNormalAndCoplanarPoint(new F(0,1,0),new F(0,h.y,0)),Wi.setFromCamera(new He(_.x,_.y),a),Wi.ray.intersectPlane(d,u);let U=u.clone();Wi.setFromCamera(new He(T.x,T.y),a),Wi.ray.intersectPlane(d,u);let H=U.sub(u);R&&H.multiplyScalar(N),h.add(H),a.position.add(H),a.lookAt(h),_={x:T.x,y:T.y},Ue=performance.now()}}function wo(x){if(_!=null&&!v&&!g){let f=ta(x.clientX,x.clientY);gd(f.x,f.y)}_=null,v=!1,g=!1,M=!1,t.style.cursor="grab"}function vd(x){x.preventDefault();let f=a.position.distanceTo(h),E=Math.max(q,Math.min(ae,f+x.deltaY*be));y.copy(h).sub(a.position).normalize(),a.position.copy(h).sub(y.multiplyScalar(E)),a.lookAt(h),Ue=performance.now()}t.style.cursor="grab",t.addEventListener("mousedown",Lc),t.addEventListener("mousemove",Uc),t.addEventListener("mouseup",wo),t.addEventListener("mouseleave",wo),t.addEventListener("touchstart",xd,{passive:!0}),t.addEventListener("touchmove",yd,{passive:!1}),t.addEventListener("touchend",_d,{passive:!0}),t.addEventListener("wheel",vd,{passive:!1});function Nc(){let x=t.clientWidth,f=t.clientHeight;a.aspect=x/f,a.updateProjectionMatrix(),Dn.setSize(x,f),Dn.setPixelRatio(Math.min(window.devicePixelRatio,1.7))}window.addEventListener("resize",Nc);let Dn=new Br({antialias:!1});Dn.setSize(t.clientWidth,t.clientHeight),Dn.setPixelRatio(Math.min(window.devicePixelRatio,1.7)),Dn.shadowMap.enabled=!0,Dn.shadowMap.type=rc,t.appendChild(Dn.domElement),Nc();let na=document.createElement("div");na.id="combat-text-layer",t.appendChild(na);let Si=new F,qi=new F,Md=1400;function jn(x,f,E,T,U){let H=document.createElement("div");H.className="combat-text-float "+(T?"miss":"damage")+(U?" "+U:""),H.textContent=E,H.style.position="absolute",na.appendChild(H);let j=U==="skill-name"?1.7:1.2,V=performance.now();function k(){Si.copy(Re(x,f)),Si.y+=j,Si.project(a);let Ae=t.clientWidth,te=t.clientHeight;H.style.left=(Si.x*.5+.5)*Ae+"px",H.style.top=(1-(Si.y*.5+.5))*te+"px"}let $=0;function ce(){$%2===0&&k(),$++,performance.now()-V<Md?requestAnimationFrame(ce):H.remove()}requestAnimationFrame(ce)}let bd=1500;function Sd(x,f){let E=document.createElement("div");E.className="combat-text-float "+(f||"levelup"),E.textContent="LEVEL UP!",E.style.position="absolute",na.appendChild(E);let T=performance.now(),U=0;function H(){Si.copy(Re(x.x,x.y)),Si.y+=1.2,Si.project(a);let V=t.clientWidth,k=t.clientHeight;E.style.left=(Si.x*.5+.5)*V+"px",E.style.top=(1-(Si.y*.5+.5))*k+"px"}function j(){U%2===0&&H(),U++,performance.now()-T<bd?requestAnimationFrame(j):E.remove()}requestAnimationFrame(j)}function Tn(x,f){ry(f?.class,x.class),console.log("[DEATH]",`${x.name} (${x.class}, P${x.player})`,`at (${x.x},${x.y})`,`Lv.${x.level}`),jn(x.x,x.y,"DEAD",!1);let E=oe.get(x.id);if(!E){Dt(),Oc();return}let T=performance.now();function U(H){Oe();let j=H-T,V=Math.min(1,j/at),k=V*V;E.rotation.x=k*Math.PI*.5,V<1?requestAnimationFrame(U):(n.remove(E),oe.delete(x.id),Dt(),Oc())}requestAnimationFrame(U)}function Oc(){if(yt!=="playing")return;let x=B.some(E=>E.player===1&&E.hp>0),f=B.some(E=>E.player===2&&E.hp>0);x?f||Ao(1):Ao(2)}function Ed(){let x=Rc(),f=new Set(x.map(j=>j.gy*e.w+j.gx)),E=B.filter(j=>j.hp>0&&j.player===1&&f.has(j.y*e.w+j.x)).length,T=B.filter(j=>j.hp>0&&j.player===2&&f.has(j.y*e.w+j.x)).length,U=null,H="";if(E>T)U=1,H=`Time's up! Player 1 wins! (${E} vs ${T} units on center base)`;else if(T>E)U=2,H=`Time's up! Player 2 wins! (${T} vs ${E} units on center base)`;else{let j=B.filter(k=>k.hp>0&&k.player===1).reduce((k,$)=>k+$.hp,0),V=B.filter(k=>k.hp>0&&k.player===2).reduce((k,$)=>k+$.hp,0);j>V?(U=1,H=`Time's up! Draw on center \u2014 Player 1 wins on total HP (${j} vs ${V})`):V>j?(U=2,H=`Time's up! Draw on center \u2014 Player 2 wins on total HP (${V} vs ${j})`):H=`Draw! (equal units on center: ${E}, equal HP)`}Ao(U,H)}function Ao(x,f){ut(),ay(B,x),yt="gameover",document.getElementById("turn-menu").style.display="none",zi(),yn();let E=document.getElementById("game-over-overlay"),T=document.getElementById("game-over-title"),U=document.getElementById("game-over-cards"),H=document.getElementById("game-over-class-record");H&&(H.style.display="none",H.innerHTML=""),T.textContent=f??`Player ${x} wins!`;let j=B.filter(V=>V.player===(x??1));if(U.innerHTML=j.map(V=>{let k=V,$=V.level>=3?" level-3":V.level>=2?" level-2":"",ce=k.maxHp>0&&k.hp/k.maxHp<.3?" low-hp":"";return`
        <div class="game-over-card${$}${ce}">
          <img class="game-over-card-image" src="${Yr[V.class]||""}" alt="${k.name}" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="game-over-card-body">
            <div class="game-over-card-name">${k.name}</div>
            <div class="game-over-card-meta">Lv.${k.level} ${k.class} \u2014 HP ${k.hp}/${k.maxHp}</div>
            <div class="game-over-card-stats">
              <span class="stat-label">HP</span><span class="stat-val stat-val-hp">${k.hp}/${k.maxHp}</span>
              <span class="stat-label">MP</span><span class="stat-val">${k.mp}/${k.maxMp}</span>
              <span class="stat-label">STR</span><span class="stat-val">${he(k,"str")}</span>
              <span class="stat-label">AGI</span><span class="stat-val">${he(k,"agi")}</span>
              <span class="stat-label">VIT</span><span class="stat-val">${he(k,"vit")}</span>
              <span class="stat-label">DEX</span><span class="stat-val">${he(k,"dex")}</span>
              <span class="stat-label">LUK</span><span class="stat-val">${he(k,"luk")}</span>
              <span class="stat-label">INT</span><span class="stat-val">${he(k,"int")}</span>
              <span class="stat-label">Range</span><span class="stat-val">${k.range}</span>
            </div>
          </div>
        </div>
      `}).join(""),E.classList.add("visible"),Qe==="cvcpu"){if(O++,H&&$r&&O>=Ce){let V=Hi.map(k=>{let $=wi[k],ce=$.wins+$.losses||1,Ae=$.wins+$.losses>0?($.wins/ce*100).toFixed(1)+"%":"\u2014",te=$.wins+$.losses>0?($.losses/ce*100).toFixed(1)+"%":"\u2014";return{class:k,battles:$.battles,kills:$.kills,deaths:$.deaths,wins:$.wins,losses:$.losses,winRate:Ae,lossRate:te}});H.innerHTML=`
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
              ${V.map(k=>`
                <tr>
                  <td class="class-name">${k.class}</td>
                  <td>${k.battles}</td>
                  <td>${k.kills}</td>
                  <td>${k.deaths}</td>
                  <td>${k.wins}</td>
                  <td>${k.losses}</td>
                  <td>${k.winRate}</td>
                  <td>${k.lossRate}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        `,H.style.display="block"}O<Ce&&setTimeout(()=>{E.classList.remove("visible"),pt(),yo()},2e3)}}function Us(x=0){requestAnimationFrame(Us),Ue===0&&(Ue=x);let f=x-Ue>500;Us.frameCount=(typeof Us.frameCount=="number"?Us.frameCount:0)+1;let E=()=>{if(Z){let T=.6+.4*Math.sin(x*.004);for(let U=0;U<J.length;U++){let H=U%2===0?.4:.7;J[U].opacity=H*T}Dn.render(n,a),Z=!1}};f?x-qe>=100&&(qe=x,Z=!0,E()):(Us.frameCount%2===0&&(Z=!0),E())}Us()}uy();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
