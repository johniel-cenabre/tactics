var El="160";var hu=0,zl=1,uu=2;var mh=1,Tl=2,_i=3,zi=0,Nn=1,nn=2;var Oi=0,Ns=1,Hl=2,kl=3,Vl=4,du=5,Qi=100,fu=101,pu=102,Gl=103,Wl=104,mu=200,gu=201,_u=202,xu=203,Do=204,Uo=205,yu=206,vu=207,Mu=208,Su=209,bu=210,Eu=211,Tu=212,wu=213,Au=214,Ru=0,Cu=1,Pu=2,ea=3,Iu=4,Lu=5,Du=6,Uu=7,gh=0,Nu=1,Ou=2,Fi=0,Fu=1,Bu=2,zu=3,Hu=4,ku=5,Vu=6;var _h=300,Bs=301,zs=302,No=303,Oo=304,Da=306,ar=1e3,ni=1001,Fo=1002,Cn=1003,Xl=1004;var Ja=1005;var qn=1006,Gu=1007;var or=1008;var Bi=1009,Wu=1010,Xu=1011,wl=1012,xh=1013,Ui=1014,Ni=1015,lr=1016,yh=1017,vh=1018,ts=1020,qu=1021,ii=1023,Yu=1024,$u=1025,ns=1026,Hs=1027,Zu=1028,Mh=1029,Ku=1030,Sh=1031,bh=1033,ja=33776,Qa=33777,eo=33778,to=33779,ql=35840,Yl=35841,$l=35842,Zl=35843,Eh=36196,Kl=37492,Jl=37496,jl=37808,Ql=37809,ec=37810,tc=37811,nc=37812,ic=37813,sc=37814,rc=37815,ac=37816,oc=37817,lc=37818,cc=37819,hc=37820,uc=37821,no=36492,dc=36494,fc=36495,Ju=36283,pc=36284,mc=36285,gc=36286;var ta=2300,na=2301,io=2302,_c=2400,xc=2401,yc=2402;var Th=3e3,is=3001,ju=3200,Qu=3201,wh=0,ed=1,Yn="",_n="srgb",yi="srgb-linear",Al="display-p3",Ua="display-p3-linear",ia="linear",kt="srgb",sa="rec709",ra="p3";var ms=7680;var vc=519,td=512,nd=513,id=514,Ah=515,sd=516,rd=517,ad=518,od=519,Mc=35044;var Sc="300 es",Bo=1035,xi=2e3,aa=2001,Hi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var so=Math.PI/180,zo=180/Math.PI;function Ws(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bn[i&255]+bn[i>>8&255]+bn[i>>16&255]+bn[i>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[t&63|128]+bn[t>>8&255]+"-"+bn[t>>16&255]+bn[t>>24&255]+bn[n&255]+bn[n>>8&255]+bn[n>>16&255]+bn[n>>24&255]).toLowerCase()}function Tn(i,e,t){return Math.max(e,Math.min(t,i))}function ld(i,e){return(i%e+e)%e}function ro(i,e,t){return(1-t)*i+t*e}function bc(i){return(i&i-1)===0&&i!==0}function Ho(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ks(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Un(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Fe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Tn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Et=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],_=n[8],v=s[0],m=s[3],f=s[6],b=s[1],y=s[4],w=s[7],F=s[2],I=s[5],L=s[8];return r[0]=a*v+o*b+l*F,r[3]=a*m+o*y+l*I,r[6]=a*f+o*w+l*L,r[1]=c*v+h*b+u*F,r[4]=c*m+h*y+u*I,r[7]=c*f+h*w+u*L,r[2]=d*v+p*b+_*F,r[5]=d*m+p*y+_*I,r[8]=d*f+p*w+_*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,_=t*u+n*d+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/_;return e[0]=u*v,e[1]=(s*c-h*n)*v,e[2]=(o*n-s*a)*v,e[3]=d*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ao.makeScale(e,t)),this}rotate(e){return this.premultiply(ao.makeRotation(-e)),this}translate(e,t){return this.premultiply(ao.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ao=new Et;function Rh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function oa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function cd(){let i=oa("canvas");return i.style.display="block",i}var Ec={};function tr(i){i in Ec||(Ec[i]=!0,console.warn(i))}var Tc=new Et().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),wc=new Et().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Rr={[yi]:{transfer:ia,primaries:sa,toReference:i=>i,fromReference:i=>i},[_n]:{transfer:kt,primaries:sa,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ua]:{transfer:ia,primaries:ra,toReference:i=>i.applyMatrix3(wc),fromReference:i=>i.applyMatrix3(Tc)},[Al]:{transfer:kt,primaries:ra,toReference:i=>i.convertSRGBToLinear().applyMatrix3(wc),fromReference:i=>i.applyMatrix3(Tc).convertLinearToSRGB()}},hd=new Set([yi,Ua]),Lt={enabled:!0,_workingColorSpace:yi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!hd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Rr[e].toReference,s=Rr[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Rr[i].primaries},getTransfer:function(i){return i===Yn?ia:Rr[i].transfer}};function Os(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function oo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var gs,la=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{gs===void 0&&(gs=oa("canvas")),gs.width=e.width,gs.height=e.height;let n=gs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=gs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=oa("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Os(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Os(t[n]/255)*255):t[n]=Os(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ud=0,ca=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=Ws(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(lo(s[a].image)):r.push(lo(s[a]))}else r=lo(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function lo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?la.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var dd=0,Kn=class i extends Hi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ni,s=ni,r=qn,a=or,o=ii,l=Bi,c=i.DEFAULT_ANISOTROPY,h=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=Ws(),this.name="",this.source=new ca(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(tr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===is?_n:Yn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_h)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ar:e.x=e.x-Math.floor(e.x);break;case ni:e.x=e.x<0?0:1;break;case Fo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ar:e.y=e.y-Math.floor(e.y);break;case ni:e.y=e.y<0?0:1;break;case Fo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return tr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===_n?is:Th}set encoding(e){tr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===is?_n:Yn}};Kn.DEFAULT_IMAGE=null;Kn.DEFAULT_MAPPING=_h;Kn.DEFAULT_ANISOTROPY=1;var dn=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],_=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,w=(p+1)/2,F=(f+1)/2,I=(h+d)/4,L=(u+v)/4,Y=(_+m)/4;return y>w&&y>F?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=I/n,r=L/n):w>F?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=I/s,r=Y/s):F<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(F),n=L/r,s=Y/r),this.set(n,s,r,t),this}let b=Math.sqrt((m-_)*(m-_)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(u-v)/b,this.z=(d-h)/b,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ko=class extends Hi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dn(0,0,e,t),this.scissorTest=!1,this.viewport=new dn(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(tr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===is?_n:Yn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Kn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ca(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},vi=class extends ko{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ha=class extends Kn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vo=class extends Kn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ki=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],p=r[a+1],_=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=v;return}if(u!==v||l!==d||c!==p||h!==_){let m=1-o,f=l*d+c*p+h*_+u*v,b=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){let F=Math.sqrt(y),I=Math.atan2(F,f*b);m=Math.sin(m*I)/F,o=Math.sin(o*I)/F}let w=o*b;if(l=l*m+d*w,c=c*m+p*w,h=h*m+_*w,u=u*m+v*w,m===1-o){let F=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=F,c*=F,h*=F,u*=F}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],p=r[a+2],_=r[a+3];return e[t]=o*_+h*u+l*p-c*d,e[t+1]=l*_+h*d+c*u-o*p,e[t+2]=c*_+h*p+o*d-l*u,e[t+3]=h*_-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),p=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*_,this._y=c*p*u-d*h*_,this._z=c*h*_+d*p*u,this._w=c*h*u-d*p*_;break;case"YXZ":this._x=d*h*u+c*p*_,this._y=c*p*u-d*h*_,this._z=c*h*_-d*p*u,this._w=c*h*u+d*p*_;break;case"ZXY":this._x=d*h*u-c*p*_,this._y=c*p*u+d*h*_,this._z=c*h*_+d*p*u,this._w=c*h*u-d*p*_;break;case"ZYX":this._x=d*h*u-c*p*_,this._y=c*p*u+d*h*_,this._z=c*h*_-d*p*u,this._w=c*h*u+d*p*_;break;case"YZX":this._x=d*h*u+c*p*_,this._y=c*p*u+d*h*_,this._z=c*h*_-d*p*u,this._w=c*h*u-d*p*_;break;case"XZY":this._x=d*h*u-c*p*_,this._y=c*p*u-d*h*_,this._z=c*h*_+d*p*u,this._w=c*h*u+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ac.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ac.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return co.copy(this).projectOnVector(e),this.sub(co)}reflect(e){return this.sub(co.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Tn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},co=new z,Ac=new ki,ss=class{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,jn):jn.fromBufferAttribute(r,a),jn.applyMatrix4(e.matrixWorld),this.expandByPoint(jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cr.copy(n.boundingBox)),Cr.applyMatrix4(e.matrixWorld),this.union(Cr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Js),Pr.subVectors(this.max,Js),_s.subVectors(e.a,Js),xs.subVectors(e.b,Js),ys.subVectors(e.c,Js),Ci.subVectors(xs,_s),Pi.subVectors(ys,xs),$i.subVectors(_s,ys);let t=[0,-Ci.z,Ci.y,0,-Pi.z,Pi.y,0,-$i.z,$i.y,Ci.z,0,-Ci.x,Pi.z,0,-Pi.x,$i.z,0,-$i.x,-Ci.y,Ci.x,0,-Pi.y,Pi.x,0,-$i.y,$i.x,0];return!ho(t,_s,xs,ys,Pr)||(t=[1,0,0,0,1,0,0,0,1],!ho(t,_s,xs,ys,Pr))?!1:(Ir.crossVectors(Ci,Pi),t=[Ir.x,Ir.y,Ir.z],ho(t,_s,xs,ys,Pr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},di=[new z,new z,new z,new z,new z,new z,new z,new z],jn=new z,Cr=new ss,_s=new z,xs=new z,ys=new z,Ci=new z,Pi=new z,$i=new z,Js=new z,Pr=new z,Ir=new z,Zi=new z;function ho(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Zi.fromArray(i,r);let o=s.x*Math.abs(Zi.x)+s.y*Math.abs(Zi.y)+s.z*Math.abs(Zi.z),l=e.dot(Zi),c=t.dot(Zi),h=n.dot(Zi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var fd=new ss,js=new z,uo=new z,cr=class{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):fd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;js.subVectors(e,this.center);let t=js.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(js,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(js.copy(e.center).add(uo)),this.expandByPoint(js.copy(e.center).sub(uo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},fi=new z,fo=new z,Lr=new z,Ii=new z,po=new z,Dr=new z,mo=new z,ua=class{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,t),fi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){fo.copy(e).add(t).multiplyScalar(.5),Lr.copy(t).sub(e).normalize(),Ii.copy(this.origin).sub(fo);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Lr),o=Ii.dot(this.direction),l=-Ii.dot(Lr),c=Ii.lengthSq(),h=Math.abs(1-a*a),u,d,p,_;if(h>0)if(u=a*l-o,d=a*o-l,_=r*h,u>=0)if(d>=-_)if(d<=_){let v=1/h;u*=v,d*=v,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(fo).addScaledVector(Lr,d),p}intersectSphere(e,t){fi.subVectors(e.center,this.origin);let n=fi.dot(this.direction),s=fi.dot(fi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,t,n,s,r){po.subVectors(t,e),Dr.subVectors(n,e),mo.crossVectors(po,Dr);let a=this.direction.dot(mo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ii.subVectors(this.origin,e);let l=o*this.direction.dot(Dr.crossVectors(Ii,Dr));if(l<0)return null;let c=o*this.direction.dot(po.cross(Ii));if(c<0||l+c>a)return null;let h=-o*Ii.dot(mo);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ln=class i{constructor(e,t,n,s,r,a,o,l,c,h,u,d,p,_,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,p,_,v,m)}set(e,t,n,s,r,a,o,l,c,h,u,d,p,_,v,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=_,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/vs.setFromMatrixColumn(e,0).length(),r=1/vs.setFromMatrixColumn(e,1).length(),a=1/vs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,p=a*u,_=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+_*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=_+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,_=c*h,v=c*u;t[0]=d+v*o,t[4]=_*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-_,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,_=c*h,v=c*u;t[0]=d-v*o,t[4]=-a*u,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*u,_=o*h,v=o*u;t[0]=l*h,t[4]=_*c-p,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=p*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,_=o*l,v=o*c;t[0]=l*h,t[4]=v-d*u,t[8]=_*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+_,t[10]=d-v*u}else if(e.order==="XZY"){let d=a*l,p=a*c,_=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=a*h,t[9]=p*u-_,t[2]=_*u-p,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pd,e,md)}lookAt(e,t,n){let s=this.elements;return zn.subVectors(e,t),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),Li.crossVectors(n,zn),Li.lengthSq()===0&&(Math.abs(n.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),Li.crossVectors(n,zn)),Li.normalize(),Ur.crossVectors(zn,Li),s[0]=Li.x,s[4]=Ur.x,s[8]=zn.x,s[1]=Li.y,s[5]=Ur.y,s[9]=zn.y,s[2]=Li.z,s[6]=Ur.z,s[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],_=n[2],v=n[6],m=n[10],f=n[14],b=n[3],y=n[7],w=n[11],F=n[15],I=s[0],L=s[4],Y=s[8],S=s[12],T=s[1],D=s[5],U=s[9],q=s[13],P=s[2],V=s[6],N=s[10],ie=s[14],X=s[3],ee=s[7],te=s[11],ce=s[15];return r[0]=a*I+o*T+l*P+c*X,r[4]=a*L+o*D+l*V+c*ee,r[8]=a*Y+o*U+l*N+c*te,r[12]=a*S+o*q+l*ie+c*ce,r[1]=h*I+u*T+d*P+p*X,r[5]=h*L+u*D+d*V+p*ee,r[9]=h*Y+u*U+d*N+p*te,r[13]=h*S+u*q+d*ie+p*ce,r[2]=_*I+v*T+m*P+f*X,r[6]=_*L+v*D+m*V+f*ee,r[10]=_*Y+v*U+m*N+f*te,r[14]=_*S+v*q+m*ie+f*ce,r[3]=b*I+y*T+w*P+F*X,r[7]=b*L+y*D+w*V+F*ee,r[11]=b*Y+y*U+w*N+F*te,r[15]=b*S+y*q+w*ie+F*ce,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],_=e[3],v=e[7],m=e[11],f=e[15];return _*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*p-n*l*p)+v*(+t*l*p-t*c*d+r*a*d-s*a*p+s*c*h-r*l*h)+m*(+t*c*u-t*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+f*(-s*o*h-t*l*u+t*o*d+s*a*u-n*a*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],_=e[12],v=e[13],m=e[14],f=e[15],b=u*m*c-v*d*c+v*l*p-o*m*p-u*l*f+o*d*f,y=_*d*c-h*m*c-_*l*p+a*m*p+h*l*f-a*d*f,w=h*v*c-_*u*c+_*o*p-a*v*p-h*o*f+a*u*f,F=_*u*l-h*v*l-_*o*d+a*v*d+h*o*m-a*u*m,I=t*b+n*y+s*w+r*F;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/I;return e[0]=b*L,e[1]=(v*d*r-u*m*r-v*s*p+n*m*p+u*s*f-n*d*f)*L,e[2]=(o*m*r-v*l*r+v*s*c-n*m*c-o*s*f+n*l*f)*L,e[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*p-n*l*p)*L,e[4]=y*L,e[5]=(h*m*r-_*d*r+_*s*p-t*m*p-h*s*f+t*d*f)*L,e[6]=(_*l*r-a*m*r-_*s*c+t*m*c+a*s*f-t*l*f)*L,e[7]=(a*d*r-h*l*r+h*s*c-t*d*c-a*s*p+t*l*p)*L,e[8]=w*L,e[9]=(_*u*r-h*v*r-_*n*p+t*v*p+h*n*f-t*u*f)*L,e[10]=(a*v*r-_*o*r+_*n*c-t*v*c-a*n*f+t*o*f)*L,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*p-t*o*p)*L,e[12]=F*L,e[13]=(h*v*s-_*u*s+_*n*d-t*v*d-h*n*m+t*u*m)*L,e[14]=(_*o*s-a*v*s-_*n*l+t*v*l+a*n*m-t*o*m)*L,e[15]=(a*u*s-h*o*s+h*n*l-t*u*l-a*n*d+t*o*d)*L,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,_=r*u,v=a*h,m=a*u,f=o*u,b=l*c,y=l*h,w=l*u,F=n.x,I=n.y,L=n.z;return s[0]=(1-(v+f))*F,s[1]=(p+w)*F,s[2]=(_-y)*F,s[3]=0,s[4]=(p-w)*I,s[5]=(1-(d+f))*I,s[6]=(m+b)*I,s[7]=0,s[8]=(_+y)*L,s[9]=(m-b)*L,s[10]=(1-(d+v))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=vs.set(s[0],s[1],s[2]).length(),a=vs.set(s[4],s[5],s[6]).length(),o=vs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Qn.copy(this);let c=1/r,h=1/a,u=1/o;return Qn.elements[0]*=c,Qn.elements[1]*=c,Qn.elements[2]*=c,Qn.elements[4]*=h,Qn.elements[5]*=h,Qn.elements[6]*=h,Qn.elements[8]*=u,Qn.elements[9]*=u,Qn.elements[10]*=u,t.setFromRotationMatrix(Qn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=xi){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),p,_;if(o===xi)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===aa)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=xi){let l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(a-r),d=(t+e)*c,p=(n+s)*h,_,v;if(o===xi)_=(a+r)*u,v=-2*u;else if(o===aa)_=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},vs=new z,Qn=new ln,pd=new z(0,0,0),md=new z(1,1,1),Li=new z,Ur=new z,zn=new z,Rc=new ln,Cc=new ki,da=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Tn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Tn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Tn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Rc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Cc.setFromEuler(this),this.setFromQuaternion(Cc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};da.DEFAULT_ORDER="XYZ";var hr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},gd=0,Pc=new z,Ms=new ki,pi=new ln,Nr=new z,Qs=new z,_d=new z,xd=new ki,Ic=new z(1,0,0),Lc=new z(0,1,0),Dc=new z(0,0,1),yd={type:"added"},vd={type:"removed"},On=class i extends Hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=Ws(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new z,t=new da,n=new ki,s=new z(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ln},normalMatrix:{value:new Et}}),this.matrix=new ln,this.matrixWorld=new ln,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ms.setFromAxisAngle(e,t),this.quaternion.multiply(Ms),this}rotateOnWorldAxis(e,t){return Ms.setFromAxisAngle(e,t),this.quaternion.premultiply(Ms),this}rotateX(e){return this.rotateOnAxis(Ic,e)}rotateY(e){return this.rotateOnAxis(Lc,e)}rotateZ(e){return this.rotateOnAxis(Dc,e)}translateOnAxis(e,t){return Pc.copy(e).applyQuaternion(this.quaternion),this.position.add(Pc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ic,e)}translateY(e){return this.translateOnAxis(Lc,e)}translateZ(e){return this.translateOnAxis(Dc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Nr.copy(e):Nr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(Qs,Nr,this.up):pi.lookAt(Nr,Qs,this.up),this.quaternion.setFromRotationMatrix(pi),s&&(pi.extractRotation(s.matrixWorld),Ms.setFromRotationMatrix(pi),this.quaternion.premultiply(Ms.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(yd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vd)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,e,_d),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,xd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};On.DEFAULT_UP=new z(0,1,0);On.DEFAULT_MATRIX_AUTO_UPDATE=!0;On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ei=new z,mi=new z,go=new z,gi=new z,Ss=new z,bs=new z,Uc=new z,_o=new z,xo=new z,yo=new z,Or=!1,Is=class i{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ei.subVectors(e,t),s.cross(ei);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ei.subVectors(s,t),mi.subVectors(n,t),go.subVectors(e,t);let a=ei.dot(ei),o=ei.dot(mi),l=ei.dot(go),c=mi.dot(mi),h=mi.dot(go),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,_=(a*h-o*l)*d;return r.set(1-p-_,_,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getUV(e,t,n,s,r,a,o,l){return Or===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Or=!0),this.getInterpolation(e,t,n,s,r,a,o,l)}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,gi.x),l.addScaledVector(a,gi.y),l.addScaledVector(o,gi.z),l)}static isFrontFacing(e,t,n,s){return ei.subVectors(n,t),mi.subVectors(e,t),ei.cross(mi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),ei.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Or===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Or=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ss.subVectors(s,n),bs.subVectors(r,n),_o.subVectors(e,n);let l=Ss.dot(_o),c=bs.dot(_o);if(l<=0&&c<=0)return t.copy(n);xo.subVectors(e,s);let h=Ss.dot(xo),u=bs.dot(xo);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Ss,a);yo.subVectors(e,r);let p=Ss.dot(yo),_=bs.dot(yo);if(_>=0&&p<=_)return t.copy(r);let v=p*c-l*_;if(v<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(bs,o);let m=h*_-p*u;if(m<=0&&u-h>=0&&p-_>=0)return Uc.subVectors(r,s),o=(u-h)/(u-h+(p-_)),t.copy(s).addScaledVector(Uc,o);let f=1/(m+v+d);return a=v*f,o=d*f,t.copy(n).addScaledVector(Ss,a).addScaledVector(bs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ch={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},Fr={h:0,s:0,l:0};function vo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Tt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Lt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Lt.workingColorSpace){if(e=ld(e,1),t=Tn(t,0,1),n=Tn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=vo(a,r,e+1/3),this.g=vo(a,r,e),this.b=vo(a,r,e-1/3)}return Lt.toWorkingColorSpace(this,s),this}setStyle(e,t=_n){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_n){let n=Ch[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}copyLinearToSRGB(e){return this.r=oo(e.r),this.g=oo(e.g),this.b=oo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_n){return Lt.fromWorkingColorSpace(En.copy(this),e),Math.round(Tn(En.r*255,0,255))*65536+Math.round(Tn(En.g*255,0,255))*256+Math.round(Tn(En.b*255,0,255))}getHexString(e=_n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Lt.workingColorSpace){Lt.fromWorkingColorSpace(En.copy(this),t);let n=En.r,s=En.g,r=En.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Lt.workingColorSpace){return Lt.fromWorkingColorSpace(En.copy(this),t),e.r=En.r,e.g=En.g,e.b=En.b,e}getStyle(e=_n){Lt.fromWorkingColorSpace(En.copy(this),e);let t=En.r,n=En.g,s=En.b;return e!==_n?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+t,Di.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Di),e.getHSL(Fr);let n=ro(Di.h,Fr.h,t),s=ro(Di.s,Fr.s,t),r=ro(Di.l,Fr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},En=new Tt;Tt.NAMES=Ch;var Md=0,rs=class extends Hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=Ws(),this.name="",this.type="Material",this.blending=Ns,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Do,this.blendDst=Uo,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=ea,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(n.blending=this.blending),this.side!==zi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Do&&(n.blendSrc=this.blendSrc),this.blendDst!==Uo&&(n.blendDst=this.blendDst),this.blendEquation!==Qi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ea&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Jt=class extends rs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=gh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var an=new z,Br=new Fe,Zn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Mc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Br.fromBufferAttribute(this,t),Br.applyMatrix3(e),this.setXY(t,Br.x,Br.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyMatrix3(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ks(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Un(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ks(t,this.array)),t}setX(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ks(t,this.array)),t}setY(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ks(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ks(t,this.array)),t}setW(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),n=Un(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),n=Un(n,this.array),s=Un(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),n=Un(n,this.array),s=Un(s,this.array),r=Un(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mc&&(e.usage=this.usage),e}};var fa=class extends Zn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var pa=class extends Zn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var sn=class extends Zn{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Sd=0,Xn=new ln,Mo=new On,Es=new z,Hn=new ss,er=new ss,un=new z,si=class i extends Hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=Ws(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rh(e)?pa:fa)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Et().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xn.makeRotationFromQuaternion(e),this.applyMatrix4(Xn),this}rotateX(e){return Xn.makeRotationX(e),this.applyMatrix4(Xn),this}rotateY(e){return Xn.makeRotationY(e),this.applyMatrix4(Xn),this}rotateZ(e){return Xn.makeRotationZ(e),this.applyMatrix4(Xn),this}translate(e,t,n){return Xn.makeTranslation(e,t,n),this.applyMatrix4(Xn),this}scale(e,t,n){return Xn.makeScale(e,t,n),this.applyMatrix4(Xn),this}lookAt(e){return Mo.lookAt(e),Mo.updateMatrix(),this.applyMatrix4(Mo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new sn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ss);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Hn.setFromBufferAttribute(r),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){let n=this.boundingSphere.center;if(Hn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];er.setFromBufferAttribute(o),this.morphTargetsRelative?(un.addVectors(Hn.min,er.min),Hn.expandByPoint(un),un.addVectors(Hn.max,er.max),Hn.expandByPoint(un)):(Hn.expandByPoint(er.min),Hn.expandByPoint(er.max))}Hn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)un.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(un));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)un.fromBufferAttribute(o,c),l&&(Es.fromBufferAttribute(e,c),un.add(Es)),s=Math.max(s,n.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zn(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let T=0;T<o;T++)c[T]=new z,h[T]=new z;let u=new z,d=new z,p=new z,_=new Fe,v=new Fe,m=new Fe,f=new z,b=new z;function y(T,D,U){u.fromArray(s,T*3),d.fromArray(s,D*3),p.fromArray(s,U*3),_.fromArray(a,T*2),v.fromArray(a,D*2),m.fromArray(a,U*2),d.sub(u),p.sub(u),v.sub(_),m.sub(_);let q=1/(v.x*m.y-m.x*v.y);isFinite(q)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(q),b.copy(p).multiplyScalar(v.x).addScaledVector(d,-m.x).multiplyScalar(q),c[T].add(f),c[D].add(f),c[U].add(f),h[T].add(b),h[D].add(b),h[U].add(b))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let T=0,D=w.length;T<D;++T){let U=w[T],q=U.start,P=U.count;for(let V=q,N=q+P;V<N;V+=3)y(n[V+0],n[V+1],n[V+2])}let F=new z,I=new z,L=new z,Y=new z;function S(T){L.fromArray(r,T*3),Y.copy(L);let D=c[T];F.copy(D),F.sub(L.multiplyScalar(L.dot(D))).normalize(),I.crossVectors(Y,D);let q=I.dot(h[T])<0?-1:1;l[T*4]=F.x,l[T*4+1]=F.y,l[T*4+2]=F.z,l[T*4+3]=q}for(let T=0,D=w.length;T<D;++T){let U=w[T],q=U.start,P=U.count;for(let V=q,N=q+P;V<N;V+=3)S(n[V+0]),S(n[V+1]),S(n[V+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Zn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new z,r=new z,a=new z,o=new z,l=new z,c=new z,h=new z,u=new z;if(e)for(let d=0,p=e.count;d<p;d+=3){let _=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)un.fromBufferAttribute(e,t),un.normalize(),e.setXYZ(t,un.x,un.y,un.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,_=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*h;for(let f=0;f<h;f++)d[_++]=c[p++]}return new Zn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nc=new ln,Ki=new ua,zr=new cr,Oc=new z,Ts=new z,ws=new z,As=new z,So=new z,Hr=new z,kr=new Fe,Vr=new Fe,Gr=new Fe,Fc=new z,Bc=new z,zc=new z,Wr=new z,Xr=new z,ot=class extends On{constructor(e=new si,t=new Jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Hr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(So.fromBufferAttribute(u,e),a?Hr.addScaledVector(So,h):Hr.addScaledVector(So.sub(t),h))}t.add(Hr)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere),zr.applyMatrix4(r),Ki.copy(e.ray).recast(e.near),!(zr.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(zr,Oc)===null||Ki.origin.distanceToSquared(Oc)>(e.far-e.near)**2))&&(Nc.copy(r).invert(),Ki.copy(e.ray).applyMatrix4(Nc),!(n.boundingBox!==null&&Ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ki)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=d.length;_<v;_++){let m=d[_],f=a[m.materialIndex],b=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let w=b,F=y;w<F;w+=3){let I=o.getX(w),L=o.getX(w+1),Y=o.getX(w+2);s=qr(this,f,e,n,c,h,u,I,L,Y),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let _=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=_,f=v;m<f;m+=3){let b=o.getX(m),y=o.getX(m+1),w=o.getX(m+2);s=qr(this,a,e,n,c,h,u,b,y,w),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,v=d.length;_<v;_++){let m=d[_],f=a[m.materialIndex],b=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let w=b,F=y;w<F;w+=3){let I=w,L=w+1,Y=w+2;s=qr(this,f,e,n,c,h,u,I,L,Y),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=_,f=v;m<f;m+=3){let b=m,y=m+1,w=m+2;s=qr(this,a,e,n,c,h,u,b,y,w),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function bd(i,e,t,n,s,r,a,o){let l;if(e.side===Nn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===zi,o),l===null)return null;Xr.copy(o),Xr.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Xr);return c<t.near||c>t.far?null:{distance:c,point:Xr.clone(),object:i}}function qr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Ts),i.getVertexPosition(l,ws),i.getVertexPosition(c,As);let h=bd(i,e,t,n,Ts,ws,As,Wr);if(h){s&&(kr.fromBufferAttribute(s,o),Vr.fromBufferAttribute(s,l),Gr.fromBufferAttribute(s,c),h.uv=Is.getInterpolation(Wr,Ts,ws,As,kr,Vr,Gr,new Fe)),r&&(kr.fromBufferAttribute(r,o),Vr.fromBufferAttribute(r,l),Gr.fromBufferAttribute(r,c),h.uv1=Is.getInterpolation(Wr,Ts,ws,As,kr,Vr,Gr,new Fe),h.uv2=h.uv1),a&&(Fc.fromBufferAttribute(a,o),Bc.fromBufferAttribute(a,l),zc.fromBufferAttribute(a,c),h.normal=Is.getInterpolation(Wr,Ts,ws,As,Fc,Bc,zc,new z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new z,materialIndex:0};Is.getNormal(Ts,ws,As,u.normal),h.face=u}return h}var wn=class i extends si{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new sn(c,3)),this.setAttribute("normal",new sn(h,3)),this.setAttribute("uv",new sn(u,2));function _(v,m,f,b,y,w,F,I,L,Y,S){let T=w/L,D=F/Y,U=w/2,q=F/2,P=I/2,V=L+1,N=Y+1,ie=0,X=0,ee=new z;for(let te=0;te<N;te++){let ce=te*D-q;for(let me=0;me<V;me++){let j=me*T-U;ee[v]=j*b,ee[m]=ce*y,ee[f]=P,c.push(ee.x,ee.y,ee.z),ee[v]=0,ee[m]=0,ee[f]=I>0?1:-1,h.push(ee.x,ee.y,ee.z),u.push(me/L),u.push(1-te/Y),ie+=1}}for(let te=0;te<Y;te++)for(let ce=0;ce<L;ce++){let me=d+ce+V*te,j=d+ce+V*(te+1),he=d+(ce+1)+V*(te+1),Ce=d+(ce+1)+V*te;l.push(me,j,Ce),l.push(j,he,Ce),X+=6}o.addGroup(p,X,S),p+=X,d+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ks(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Rn(i){let e={};for(let t=0;t<i.length;t++){let n=ks(i[t]);for(let s in n)e[s]=n[s]}return e}function Ed(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ph(i){return i.getRenderTarget()===null?i.outputColorSpace:Lt.workingColorSpace}var Td={clone:ks,merge:Rn},wd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ad=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Mi=class extends rs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wd,this.fragmentShader=Ad,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ks(e.uniforms),this.uniformsGroups=Ed(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ma=class extends On{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ln,this.projectionMatrix=new ln,this.projectionMatrixInverse=new ln,this.coordinateSystem=xi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Pn=class extends ma{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=zo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(so*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zo*2*Math.atan(Math.tan(so*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(so*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Rs=-90,Cs=1,Go=class extends On{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Pn(Rs,Cs,e,t);s.layers=this.layers,this.add(s);let r=new Pn(Rs,Cs,e,t);r.layers=this.layers,this.add(r);let a=new Pn(Rs,Cs,e,t);a.layers=this.layers,this.add(a);let o=new Pn(Rs,Cs,e,t);o.layers=this.layers,this.add(o);let l=new Pn(Rs,Cs,e,t);l.layers=this.layers,this.add(l);let c=new Pn(Rs,Cs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===xi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===aa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},ga=class extends Kn{constructor(e,t,n,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Bs,super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Wo=class extends vi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(tr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===is?_n:Yn),this.texture=new ga(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new wn(5,5,5),r=new Mi({name:"CubemapFromEquirect",uniforms:ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nn,blending:Oi});r.uniforms.tEquirect.value=t;let a=new ot(s,r),o=t.minFilter;return t.minFilter===or&&(t.minFilter=qn),new Go(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},bo=new z,Rd=new z,Cd=new Et,ti=class{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=bo.subVectors(n,t).cross(Rd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(bo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Cd.getNormalMatrix(e),s=this.coplanarPoint(bo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ji=new cr,Yr=new z,ur=class{constructor(e=new ti,t=new ti,n=new ti,s=new ti,r=new ti,a=new ti){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=xi){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],_=s[9],v=s[10],m=s[11],f=s[12],b=s[13],y=s[14],w=s[15];if(n[0].setComponents(l-r,d-c,m-p,w-f).normalize(),n[1].setComponents(l+r,d+c,m+p,w+f).normalize(),n[2].setComponents(l+a,d+h,m+_,w+b).normalize(),n[3].setComponents(l-a,d-h,m-_,w-b).normalize(),n[4].setComponents(l-o,d-u,m-v,w-y).normalize(),t===xi)n[5].setComponents(l+o,d+u,m+v,w+y).normalize();else if(t===aa)n[5].setComponents(o,u,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(e){return Ji.center.set(0,0,0),Ji.radius=.7071067811865476,Ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Yr.x=s.normal.x>0?e.max.x:e.min.x,Yr.y=s.normal.y>0?e.max.y:e.min.y,Yr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Yr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ih(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Pd(i,e){let t=e.isWebGL2,n=new WeakMap;function s(c,h){let u=c.array,d=c.usage,p=u.byteLength,_=i.createBuffer();i.bindBuffer(h,_),i.bufferData(h,u,d),c.onUploadCallback();let v;if(u instanceof Float32Array)v=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=i.SHORT;else if(u instanceof Uint32Array)v=i.UNSIGNED_INT;else if(u instanceof Int32Array)v=i.INT;else if(u instanceof Int8Array)v=i.BYTE;else if(u instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:_,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,h,u){let d=h.array,p=h._updateRange,_=h.updateRanges;if(i.bindBuffer(u,c),p.count===-1&&_.length===0&&i.bufferSubData(u,0,d),_.length!==0){for(let v=0,m=_.length;v<m;v++){let f=_[v];t?i.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):i.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(t?i.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):i.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}var In=class i extends si{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,p=[],_=[],v=[],m=[];for(let f=0;f<h;f++){let b=f*d-a;for(let y=0;y<c;y++){let w=y*u-r;_.push(w,-b,0),v.push(0,0,1),m.push(y/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let b=0;b<o;b++){let y=b+c*f,w=b+c*(f+1),F=b+1+c*(f+1),I=b+1+c*f;p.push(y,w,I),p.push(w,F,I)}this.setIndex(p),this.setAttribute("position",new sn(_,3)),this.setAttribute("normal",new sn(v,3)),this.setAttribute("uv",new sn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Id=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ld=`#ifdef USE_ALPHAHASH
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
#endif`,Dd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ud=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Od=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fd=`#ifdef USE_AOMAP
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
#endif`,Bd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zd=`#ifdef USE_BATCHING
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
#endif`,Hd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,kd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wd=`#ifdef USE_IRIDESCENCE
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
#endif`,Xd=`#ifdef USE_BUMPMAP
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
#endif`,qd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Qd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ef=`#define PI 3.141592653589793
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
} // validated`,tf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,nf=`vec3 transformedNormal = objectNormal;
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
#endif`,sf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,af=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,of=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lf="gl_FragColor = linearToOutputTexel( gl_FragColor );",cf=`
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
}`,hf=`#ifdef USE_ENVMAP
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
#endif`,uf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,df=`#ifdef USE_ENVMAP
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
#endif`,ff=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pf=`#ifdef USE_ENVMAP
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
#endif`,mf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_f=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yf=`#ifdef USE_GRADIENTMAP
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
}`,vf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Mf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ef=`uniform bool receiveShadow;
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
#endif`,Tf=`#ifdef USE_ENVMAP
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
#endif`,wf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Af=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pf=`PhysicalMaterial material;
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
#endif`,If=`struct PhysicalMaterial {
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
}`,Lf=`
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
#endif`,Df=`#if defined( RE_IndirectDiffuse )
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
#endif`,Uf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Of=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ff=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Bf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,zf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vf=`#if defined( USE_POINTS_UV )
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
#endif`,Gf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qf=`#ifdef USE_MORPHNORMALS
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
#endif`,Yf=`#ifdef USE_MORPHTARGETS
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
#endif`,$f=`#ifdef USE_MORPHTARGETS
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
#endif`,Zf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Kf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ep=`#ifdef USE_NORMALMAP
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
#endif`,tp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,np=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ip=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ap=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,op=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,up=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gp=`float getShadowMask() {
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
}`,_p=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xp=`#ifdef USE_SKINNING
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
#endif`,yp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vp=`#ifdef USE_SKINNING
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
#endif`,Mp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ep=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tp=`#ifdef USE_TRANSMISSION
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
#endif`,wp=`#ifdef USE_TRANSMISSION
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
#endif`,Ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ip=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lp=`uniform sampler2D t2D;
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
}`,Dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Up=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Op=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fp=`#include <common>
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
}`,Bp=`#if DEPTH_PACKING == 3200
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
}`,zp=`#define DISTANCE
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
}`,Hp=`#define DISTANCE
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
}`,kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gp=`uniform float scale;
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
}`,Wp=`uniform vec3 diffuse;
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
}`,Xp=`#include <common>
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
}`,qp=`uniform vec3 diffuse;
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
}`,Yp=`#define LAMBERT
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
}`,$p=`#define LAMBERT
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
}`,Zp=`#define MATCAP
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
}`,Kp=`#define MATCAP
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
}`,Jp=`#define NORMAL
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
}`,jp=`#define NORMAL
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
}`,Qp=`#define PHONG
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
}`,em=`#define PHONG
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
}`,tm=`#define STANDARD
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
}`,nm=`#define STANDARD
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
}`,im=`#define TOON
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
}`,sm=`#define TOON
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
}`,rm=`uniform float size;
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
}`,am=`uniform vec3 diffuse;
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
}`,om=`#include <common>
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
}`,lm=`uniform vec3 color;
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
}`,cm=`uniform float rotation;
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
}`,hm=`uniform vec3 diffuse;
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
}`,Mt={alphahash_fragment:Id,alphahash_pars_fragment:Ld,alphamap_fragment:Dd,alphamap_pars_fragment:Ud,alphatest_fragment:Nd,alphatest_pars_fragment:Od,aomap_fragment:Fd,aomap_pars_fragment:Bd,batching_pars_vertex:zd,batching_vertex:Hd,begin_vertex:kd,beginnormal_vertex:Vd,bsdfs:Gd,iridescence_fragment:Wd,bumpmap_pars_fragment:Xd,clipping_planes_fragment:qd,clipping_planes_pars_fragment:Yd,clipping_planes_pars_vertex:$d,clipping_planes_vertex:Zd,color_fragment:Kd,color_pars_fragment:Jd,color_pars_vertex:jd,color_vertex:Qd,common:ef,cube_uv_reflection_fragment:tf,defaultnormal_vertex:nf,displacementmap_pars_vertex:sf,displacementmap_vertex:rf,emissivemap_fragment:af,emissivemap_pars_fragment:of,colorspace_fragment:lf,colorspace_pars_fragment:cf,envmap_fragment:hf,envmap_common_pars_fragment:uf,envmap_pars_fragment:df,envmap_pars_vertex:ff,envmap_physical_pars_fragment:Tf,envmap_vertex:pf,fog_vertex:mf,fog_pars_vertex:gf,fog_fragment:_f,fog_pars_fragment:xf,gradientmap_pars_fragment:yf,lightmap_fragment:vf,lightmap_pars_fragment:Mf,lights_lambert_fragment:Sf,lights_lambert_pars_fragment:bf,lights_pars_begin:Ef,lights_toon_fragment:wf,lights_toon_pars_fragment:Af,lights_phong_fragment:Rf,lights_phong_pars_fragment:Cf,lights_physical_fragment:Pf,lights_physical_pars_fragment:If,lights_fragment_begin:Lf,lights_fragment_maps:Df,lights_fragment_end:Uf,logdepthbuf_fragment:Nf,logdepthbuf_pars_fragment:Of,logdepthbuf_pars_vertex:Ff,logdepthbuf_vertex:Bf,map_fragment:zf,map_pars_fragment:Hf,map_particle_fragment:kf,map_particle_pars_fragment:Vf,metalnessmap_fragment:Gf,metalnessmap_pars_fragment:Wf,morphcolor_vertex:Xf,morphnormal_vertex:qf,morphtarget_pars_vertex:Yf,morphtarget_vertex:$f,normal_fragment_begin:Zf,normal_fragment_maps:Kf,normal_pars_fragment:Jf,normal_pars_vertex:jf,normal_vertex:Qf,normalmap_pars_fragment:ep,clearcoat_normal_fragment_begin:tp,clearcoat_normal_fragment_maps:np,clearcoat_pars_fragment:ip,iridescence_pars_fragment:sp,opaque_fragment:rp,packing:ap,premultiplied_alpha_fragment:op,project_vertex:lp,dithering_fragment:cp,dithering_pars_fragment:hp,roughnessmap_fragment:up,roughnessmap_pars_fragment:dp,shadowmap_pars_fragment:fp,shadowmap_pars_vertex:pp,shadowmap_vertex:mp,shadowmask_pars_fragment:gp,skinbase_vertex:_p,skinning_pars_vertex:xp,skinning_vertex:yp,skinnormal_vertex:vp,specularmap_fragment:Mp,specularmap_pars_fragment:Sp,tonemapping_fragment:bp,tonemapping_pars_fragment:Ep,transmission_fragment:Tp,transmission_pars_fragment:wp,uv_pars_fragment:Ap,uv_pars_vertex:Rp,uv_vertex:Cp,worldpos_vertex:Pp,background_vert:Ip,background_frag:Lp,backgroundCube_vert:Dp,backgroundCube_frag:Up,cube_vert:Np,cube_frag:Op,depth_vert:Fp,depth_frag:Bp,distanceRGBA_vert:zp,distanceRGBA_frag:Hp,equirect_vert:kp,equirect_frag:Vp,linedashed_vert:Gp,linedashed_frag:Wp,meshbasic_vert:Xp,meshbasic_frag:qp,meshlambert_vert:Yp,meshlambert_frag:$p,meshmatcap_vert:Zp,meshmatcap_frag:Kp,meshnormal_vert:Jp,meshnormal_frag:jp,meshphong_vert:Qp,meshphong_frag:em,meshphysical_vert:tm,meshphysical_frag:nm,meshtoon_vert:im,meshtoon_frag:sm,points_vert:rm,points_frag:am,shadow_vert:om,shadow_frag:lm,sprite_vert:cm,sprite_frag:hm},we={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Et}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Et},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0},uvTransform:{value:new Et}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}}},ci={basic:{uniforms:Rn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:Mt.meshbasic_vert,fragmentShader:Mt.meshbasic_frag},lambert:{uniforms:Rn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Mt.meshlambert_vert,fragmentShader:Mt.meshlambert_frag},phong:{uniforms:Rn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:Mt.meshphong_vert,fragmentShader:Mt.meshphong_frag},standard:{uniforms:Rn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag},toon:{uniforms:Rn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Mt.meshtoon_vert,fragmentShader:Mt.meshtoon_frag},matcap:{uniforms:Rn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:Mt.meshmatcap_vert,fragmentShader:Mt.meshmatcap_frag},points:{uniforms:Rn([we.points,we.fog]),vertexShader:Mt.points_vert,fragmentShader:Mt.points_frag},dashed:{uniforms:Rn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Mt.linedashed_vert,fragmentShader:Mt.linedashed_frag},depth:{uniforms:Rn([we.common,we.displacementmap]),vertexShader:Mt.depth_vert,fragmentShader:Mt.depth_frag},normal:{uniforms:Rn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:Mt.meshnormal_vert,fragmentShader:Mt.meshnormal_frag},sprite:{uniforms:Rn([we.sprite,we.fog]),vertexShader:Mt.sprite_vert,fragmentShader:Mt.sprite_frag},background:{uniforms:{uvTransform:{value:new Et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Mt.background_vert,fragmentShader:Mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Mt.backgroundCube_vert,fragmentShader:Mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Mt.cube_vert,fragmentShader:Mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Mt.equirect_vert,fragmentShader:Mt.equirect_frag},distanceRGBA:{uniforms:Rn([we.common,we.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Mt.distanceRGBA_vert,fragmentShader:Mt.distanceRGBA_frag},shadow:{uniforms:Rn([we.lights,we.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:Mt.shadow_vert,fragmentShader:Mt.shadow_frag}};ci.physical={uniforms:Rn([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Et},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Et},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Et},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Et},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Et},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Et},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Et}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag};var $r={r:0,b:0,g:0};function um(i,e,t,n,s,r,a){let o=new Tt(0),l=r===!0?0:1,c,h,u=null,d=0,p=null;function _(m,f){let b=!1,y=f.isScene===!0?f.background:null;y&&y.isTexture&&(y=(f.backgroundBlurriness>0?t:e).get(y)),y===null?v(o,l):y&&y.isColor&&(v(y,1),b=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Da)?(h===void 0&&(h=new ot(new wn(1,1,1),new Mi({name:"BackgroundCubeMaterial",uniforms:ks(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(F,I,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=Lt.getTransfer(y.colorSpace)!==kt,(u!==y||d!==y.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,p=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new ot(new In(2,2),new Mi({name:"BackgroundMaterial",uniforms:ks(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=Lt.getTransfer(y.colorSpace)!==kt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,f){m.getRGB($r,Ph(i)),n.buffers.color.setClear($r.r,$r.g,$r.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),l=f,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(o,l)},render:_}}function dm(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null),c=l,h=!1;function u(P,V,N,ie,X){let ee=!1;if(a){let te=v(ie,N,V);c!==te&&(c=te,p(c.object)),ee=f(P,ie,N,X),ee&&b(P,ie,N,X)}else{let te=V.wireframe===!0;(c.geometry!==ie.id||c.program!==N.id||c.wireframe!==te)&&(c.geometry=ie.id,c.program=N.id,c.wireframe=te,ee=!0)}X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(ee||h)&&(h=!1,Y(P,V,N,ie),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(P){return n.isWebGL2?i.bindVertexArray(P):r.bindVertexArrayOES(P)}function _(P){return n.isWebGL2?i.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function v(P,V,N){let ie=N.wireframe===!0,X=o[P.id];X===void 0&&(X={},o[P.id]=X);let ee=X[V.id];ee===void 0&&(ee={},X[V.id]=ee);let te=ee[ie];return te===void 0&&(te=m(d()),ee[ie]=te),te}function m(P){let V=[],N=[],ie=[];for(let X=0;X<s;X++)V[X]=0,N[X]=0,ie[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:N,attributeDivisors:ie,object:P,attributes:{},index:null}}function f(P,V,N,ie){let X=c.attributes,ee=V.attributes,te=0,ce=N.getAttributes();for(let me in ce)if(ce[me].location>=0){let he=X[me],Ce=ee[me];if(Ce===void 0&&(me==="instanceMatrix"&&P.instanceMatrix&&(Ce=P.instanceMatrix),me==="instanceColor"&&P.instanceColor&&(Ce=P.instanceColor)),he===void 0||he.attribute!==Ce||Ce&&he.data!==Ce.data)return!0;te++}return c.attributesNum!==te||c.index!==ie}function b(P,V,N,ie){let X={},ee=V.attributes,te=0,ce=N.getAttributes();for(let me in ce)if(ce[me].location>=0){let he=ee[me];he===void 0&&(me==="instanceMatrix"&&P.instanceMatrix&&(he=P.instanceMatrix),me==="instanceColor"&&P.instanceColor&&(he=P.instanceColor));let Ce={};Ce.attribute=he,he&&he.data&&(Ce.data=he.data),X[me]=Ce,te++}c.attributes=X,c.attributesNum=te,c.index=ie}function y(){let P=c.newAttributes;for(let V=0,N=P.length;V<N;V++)P[V]=0}function w(P){F(P,0)}function F(P,V){let N=c.newAttributes,ie=c.enabledAttributes,X=c.attributeDivisors;N[P]=1,ie[P]===0&&(i.enableVertexAttribArray(P),ie[P]=1),X[P]!==V&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,V),X[P]=V)}function I(){let P=c.newAttributes,V=c.enabledAttributes;for(let N=0,ie=V.length;N<ie;N++)V[N]!==P[N]&&(i.disableVertexAttribArray(N),V[N]=0)}function L(P,V,N,ie,X,ee,te){te===!0?i.vertexAttribIPointer(P,V,N,X,ee):i.vertexAttribPointer(P,V,N,ie,X,ee)}function Y(P,V,N,ie){if(n.isWebGL2===!1&&(P.isInstancedMesh||ie.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();let X=ie.attributes,ee=N.getAttributes(),te=V.defaultAttributeValues;for(let ce in ee){let me=ee[ce];if(me.location>=0){let j=X[ce];if(j===void 0&&(ce==="instanceMatrix"&&P.instanceMatrix&&(j=P.instanceMatrix),ce==="instanceColor"&&P.instanceColor&&(j=P.instanceColor)),j!==void 0){let he=j.normalized,Ce=j.itemSize,He=t.get(j);if(He===void 0)continue;let ze=He.buffer,Je=He.type,pt=He.bytesPerElement,st=n.isWebGL2===!0&&(Je===i.INT||Je===i.UNSIGNED_INT||j.gpuType===xh);if(j.isInterleavedBufferAttribute){let wt=j.data,Z=wt.stride,fn=j.offset;if(wt.isInstancedInterleavedBuffer){for(let Qe=0;Qe<me.locationSize;Qe++)F(me.location+Qe,wt.meshPerAttribute);P.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=wt.meshPerAttribute*wt.count)}else for(let Qe=0;Qe<me.locationSize;Qe++)w(me.location+Qe);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let Qe=0;Qe<me.locationSize;Qe++)L(me.location+Qe,Ce/me.locationSize,Je,he,Z*pt,(fn+Ce/me.locationSize*Qe)*pt,st)}else{if(j.isInstancedBufferAttribute){for(let wt=0;wt<me.locationSize;wt++)F(me.location+wt,j.meshPerAttribute);P.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let wt=0;wt<me.locationSize;wt++)w(me.location+wt);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let wt=0;wt<me.locationSize;wt++)L(me.location+wt,Ce/me.locationSize,Je,he,Ce*pt,Ce/me.locationSize*wt*pt,st)}}else if(te!==void 0){let he=te[ce];if(he!==void 0)switch(he.length){case 2:i.vertexAttrib2fv(me.location,he);break;case 3:i.vertexAttrib3fv(me.location,he);break;case 4:i.vertexAttrib4fv(me.location,he);break;default:i.vertexAttrib1fv(me.location,he)}}}}I()}function S(){U();for(let P in o){let V=o[P];for(let N in V){let ie=V[N];for(let X in ie)_(ie[X].object),delete ie[X];delete V[N]}delete o[P]}}function T(P){if(o[P.id]===void 0)return;let V=o[P.id];for(let N in V){let ie=V[N];for(let X in ie)_(ie[X].object),delete ie[X];delete V[N]}delete o[P.id]}function D(P){for(let V in o){let N=o[V];if(N[P.id]===void 0)continue;let ie=N[P.id];for(let X in ie)_(ie[X].object),delete ie[X];delete N[P.id]}}function U(){q(),h=!0,c!==l&&(c=l,p(c.object))}function q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:U,resetDefaultState:q,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfProgram:D,initAttributes:y,enableAttribute:w,disableUnusedAttributes:I}}function fm(i,e,t,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,u){i.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,d){if(d===0)return;let p,_;if(s)p=i,_="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[_](r,h,u,d),t.update(u,r,d)}function c(h,u,d){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<d;_++)this.render(h[_],u[_]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,d);let _=0;for(let v=0;v<d;v++)_+=u[v];t.update(_,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function pm(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let L=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,w=a||e.has("OES_texture_float"),F=y&&w,I=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:b,vertexTextures:y,floatFragmentTextures:w,floatVertexTextures:F,maxSamples:I}}function mm(i){let e=this,t=null,n=0,s=!1,r=!1,a=new ti,o=new Et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){let _=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||_===null||_.length===0||r&&!m)r?h(null):c();else{let b=r?0:n,y=b*4,w=f.clippingState||null;l.value=w,w=h(_,d,y,p);for(let F=0;F!==y;++F)w[F]=t[F];f.clippingState=w,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,_){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=l.value,_!==!0||m===null){let f=p+v*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,w=p;y!==v;++y,w+=4)a.copy(u[y]).applyMatrix4(b,o),a.normal.toArray(m,w),m[w+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function gm(i){let e=new WeakMap;function t(a,o){return o===No?a.mapping=Bs:o===Oo&&(a.mapping=zs),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===No||o===Oo)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Wo(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var _a=class extends ma{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ls=4,Hc=[.125,.215,.35,.446,.526,.582],es=20,Eo=new _a,kc=new Tt,To=null,wo=0,Ao=0,ji=(1+Math.sqrt(5))/2,Ps=1/ji,Vc=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,ji,Ps),new z(0,ji,-Ps),new z(Ps,0,ji),new z(-Ps,0,ji),new z(ji,Ps,0),new z(-ji,Ps,0)],xa=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){To=this._renderer.getRenderTarget(),wo=this._renderer.getActiveCubeFace(),Ao=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(To,wo,Ao),e.scissorTest=!1,Zr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bs||e.mapping===zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),To=this._renderer.getRenderTarget(),wo=this._renderer.getActiveCubeFace(),Ao=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:qn,minFilter:qn,generateMipmaps:!1,type:lr,format:ii,colorSpace:yi,depthBuffer:!1},s=Gc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gc(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_m(r)),this._blurMaterial=xm(r,e,t)}return s}_compileMaterial(e){let t=new ot(this._lodPlanes[0],e);this._renderer.compile(t,Eo)}_sceneToCubeUV(e,t,n,s){let o=new Pn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(kc),h.toneMapping=Fi,h.autoClear=!1;let p=new Jt({name:"PMREM.Background",side:Nn,depthWrite:!1,depthTest:!1}),_=new ot(new wn,p),v=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(kc),v=!0);for(let f=0;f<6;f++){let b=f%3;b===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):b===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));let y=this._cubeSize;Zr(s,b*y,f>2?y:0,y,y),h.setRenderTarget(s),v&&h.render(_,o),h.render(e,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Bs||e.mapping===zs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wc());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new ot(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Zr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Eo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Vc[(s-1)%Vc.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ot(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*es-1),v=r/_,m=isFinite(r)?1+Math.floor(h*v):es;m>es&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${es}`);let f=[],b=0;for(let L=0;L<es;++L){let Y=L/v,S=Math.exp(-Y*Y/2);f.push(S),L===0?b+=S:L<m&&(b+=2*S)}for(let L=0;L<f.length;L++)f[L]=f[L]/b;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:y}=this;d.dTheta.value=_,d.mipInt.value=y-n;let w=this._sizeLods[s],F=3*w*(s>y-Ls?s-y+Ls:0),I=4*(this._cubeSize-w);Zr(t,F,I,3*w,2*w),l.setRenderTarget(t),l.render(u,Eo)}};function _m(i){let e=[],t=[],n=[],s=i,r=i-Ls+1+Hc.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Ls?l=Hc[a-i+Ls-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,_=6,v=3,m=2,f=1,b=new Float32Array(v*_*p),y=new Float32Array(m*_*p),w=new Float32Array(f*_*p);for(let I=0;I<p;I++){let L=I%3*2/3-1,Y=I>2?0:-1,S=[L,Y,0,L+2/3,Y,0,L+2/3,Y+1,0,L,Y,0,L+2/3,Y+1,0,L,Y+1,0];b.set(S,v*_*I),y.set(d,m*_*I);let T=[I,I,I,I,I,I];w.set(T,f*_*I)}let F=new si;F.setAttribute("position",new Zn(b,v)),F.setAttribute("uv",new Zn(y,m)),F.setAttribute("faceIndex",new Zn(w,f)),e.push(F),s>Ls&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Gc(i,e,t){let n=new vi(i,e,t);return n.texture.mapping=Da,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function xm(i,e,t){let n=new Float32Array(es),s=new z(0,1,0);return new Mi({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Rl(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Wc(){return new Mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rl(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Xc(){return new Mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Rl(){return`

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
	`}function ym(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===No||l===Oo,h=l===Bs||l===zs;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new xa(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{let u=o.image;if(c&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new xa(i));let d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function vm(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Mm(i,e,t,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let _ in d.attributes)e.remove(d.attributes[_]);for(let _ in d.morphAttributes){let v=d.morphAttributes[_];for(let m=0,f=v.length;m<f;m++)e.remove(v[m])}d.removeEventListener("dispose",a),delete s[d.id];let p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let _ in d)e.update(d[_],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let _ in p){let v=p[_];for(let m=0,f=v.length;m<f;m++)e.update(v[m],i.ARRAY_BUFFER)}}function c(u){let d=[],p=u.index,_=u.attributes.position,v=0;if(p!==null){let b=p.array;v=p.version;for(let y=0,w=b.length;y<w;y+=3){let F=b[y+0],I=b[y+1],L=b[y+2];d.push(F,I,I,L,L,F)}}else if(_!==void 0){let b=_.array;v=_.version;for(let y=0,w=b.length/3-1;y<w;y+=3){let F=y+0,I=y+1,L=y+2;d.push(F,I,I,L,L,F)}}else return;let m=new(Rh(d)?pa:fa)(d,1);m.version=v;let f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Sm(i,e,t,n){let s=n.isWebGL2,r;function a(p){r=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function h(p,_){i.drawElements(r,_,o,p*l),t.update(_,r,1)}function u(p,_,v){if(v===0)return;let m,f;if(s)m=i,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,_,o,p*l,v),t.update(_,r,v)}function d(p,_,v){if(v===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<v;f++)this.render(p[f]/l,_[f]);else{m.multiDrawElementsWEBGL(r,_,0,o,p,0,v);let f=0;for(let b=0;b<v;b++)f+=_[b];t.update(f,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function bm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Em(i,e){return i[0]-e[0]}function Tm(i,e){return Math.abs(e[1])-Math.abs(i[1])}function wm(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,a=new dn,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){let d=c.morphTargetInfluences;if(e.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=p!==void 0?p.length:0,v=r.get(h);if(v===void 0||v.count!==_){let P=function(){U.dispose(),r.delete(h),h.removeEventListener("dispose",P)};v!==void 0&&v.texture.dispose();let b=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,F=h.morphAttributes.position||[],I=h.morphAttributes.normal||[],L=h.morphAttributes.color||[],Y=0;b===!0&&(Y=1),y===!0&&(Y=2),w===!0&&(Y=3);let S=h.attributes.position.count*Y,T=1;S>e.maxTextureSize&&(T=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let D=new Float32Array(S*T*4*_),U=new ha(D,S,T,_);U.type=Ni,U.needsUpdate=!0;let q=Y*4;for(let V=0;V<_;V++){let N=F[V],ie=I[V],X=L[V],ee=S*T*4*V;for(let te=0;te<N.count;te++){let ce=te*q;b===!0&&(a.fromBufferAttribute(N,te),D[ee+ce+0]=a.x,D[ee+ce+1]=a.y,D[ee+ce+2]=a.z,D[ee+ce+3]=0),y===!0&&(a.fromBufferAttribute(ie,te),D[ee+ce+4]=a.x,D[ee+ce+5]=a.y,D[ee+ce+6]=a.z,D[ee+ce+7]=0),w===!0&&(a.fromBufferAttribute(X,te),D[ee+ce+8]=a.x,D[ee+ce+9]=a.y,D[ee+ce+10]=a.z,D[ee+ce+11]=X.itemSize===4?a.w:1)}}v={count:_,texture:U,size:new Fe(S,T)},r.set(h,v),h.addEventListener("dispose",P)}let m=0;for(let b=0;b<d.length;b++)m+=d[b];let f=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",f),u.getUniforms().setValue(i,"morphTargetInfluences",d),u.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}else{let p=d===void 0?0:d.length,_=n[h.id];if(_===void 0||_.length!==p){_=[];for(let y=0;y<p;y++)_[y]=[y,0];n[h.id]=_}for(let y=0;y<p;y++){let w=_[y];w[0]=y,w[1]=d[y]}_.sort(Tm);for(let y=0;y<8;y++)y<p&&_[y][1]?(o[y][0]=_[y][0],o[y][1]=_[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(Em);let v=h.morphAttributes.position,m=h.morphAttributes.normal,f=0;for(let y=0;y<8;y++){let w=o[y],F=w[0],I=w[1];F!==Number.MAX_SAFE_INTEGER&&I?(v&&h.getAttribute("morphTarget"+y)!==v[F]&&h.setAttribute("morphTarget"+y,v[F]),m&&h.getAttribute("morphNormal"+y)!==m[F]&&h.setAttribute("morphNormal"+y,m[F]),s[y]=I,f+=I):(v&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),m&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),s[y]=0)}let b=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(i,"morphTargetBaseInfluence",b),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Am(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var ya=class extends Kn{constructor(e,t,n,s,r,a,o,l,c,h){if(h=h!==void 0?h:ns,h!==ns&&h!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ns&&(n=Ui),n===void 0&&h===Hs&&(n=ts),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Cn,this.minFilter=l!==void 0?l:Cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Lh=new Kn,Dh=new ya(1,1);Dh.compareFunction=Ah;var Uh=new ha,Nh=new Vo,Oh=new ga,qc=[],Yc=[],$c=new Float32Array(16),Zc=new Float32Array(9),Kc=new Float32Array(4);function Xs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=qc[s];if(r===void 0&&(r=new Float32Array(s),qc[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function cn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function hn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Na(i,e){let t=Yc[e];t===void 0&&(t=new Int32Array(e),Yc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Rm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Cm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;i.uniform2fv(this.addr,e),hn(t,e)}}function Pm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(cn(t,e))return;i.uniform3fv(this.addr,e),hn(t,e)}}function Im(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;i.uniform4fv(this.addr,e),hn(t,e)}}function Lm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),hn(t,e)}else{if(cn(t,n))return;Kc.set(n),i.uniformMatrix2fv(this.addr,!1,Kc),hn(t,n)}}function Dm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),hn(t,e)}else{if(cn(t,n))return;Zc.set(n),i.uniformMatrix3fv(this.addr,!1,Zc),hn(t,n)}}function Um(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),hn(t,e)}else{if(cn(t,n))return;$c.set(n),i.uniformMatrix4fv(this.addr,!1,$c),hn(t,n)}}function Nm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Om(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;i.uniform2iv(this.addr,e),hn(t,e)}}function Fm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;i.uniform3iv(this.addr,e),hn(t,e)}}function Bm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;i.uniform4iv(this.addr,e),hn(t,e)}}function zm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Hm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;i.uniform2uiv(this.addr,e),hn(t,e)}}function km(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;i.uniform3uiv(this.addr,e),hn(t,e)}}function Vm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;i.uniform4uiv(this.addr,e),hn(t,e)}}function Gm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Dh:Lh;t.setTexture2D(e||r,s)}function Wm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Nh,s)}function Xm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Oh,s)}function qm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Uh,s)}function Ym(i){switch(i){case 5126:return Rm;case 35664:return Cm;case 35665:return Pm;case 35666:return Im;case 35674:return Lm;case 35675:return Dm;case 35676:return Um;case 5124:case 35670:return Nm;case 35667:case 35671:return Om;case 35668:case 35672:return Fm;case 35669:case 35673:return Bm;case 5125:return zm;case 36294:return Hm;case 36295:return km;case 36296:return Vm;case 35678:case 36198:case 36298:case 36306:case 35682:return Gm;case 35679:case 36299:case 36307:return Wm;case 35680:case 36300:case 36308:case 36293:return Xm;case 36289:case 36303:case 36311:case 36292:return qm}}function $m(i,e){i.uniform1fv(this.addr,e)}function Zm(i,e){let t=Xs(e,this.size,2);i.uniform2fv(this.addr,t)}function Km(i,e){let t=Xs(e,this.size,3);i.uniform3fv(this.addr,t)}function Jm(i,e){let t=Xs(e,this.size,4);i.uniform4fv(this.addr,t)}function jm(i,e){let t=Xs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Qm(i,e){let t=Xs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function eg(i,e){let t=Xs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function tg(i,e){i.uniform1iv(this.addr,e)}function ng(i,e){i.uniform2iv(this.addr,e)}function ig(i,e){i.uniform3iv(this.addr,e)}function sg(i,e){i.uniform4iv(this.addr,e)}function rg(i,e){i.uniform1uiv(this.addr,e)}function ag(i,e){i.uniform2uiv(this.addr,e)}function og(i,e){i.uniform3uiv(this.addr,e)}function lg(i,e){i.uniform4uiv(this.addr,e)}function cg(i,e,t){let n=this.cache,s=e.length,r=Na(t,s);cn(n,r)||(i.uniform1iv(this.addr,r),hn(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Lh,r[a])}function hg(i,e,t){let n=this.cache,s=e.length,r=Na(t,s);cn(n,r)||(i.uniform1iv(this.addr,r),hn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Nh,r[a])}function ug(i,e,t){let n=this.cache,s=e.length,r=Na(t,s);cn(n,r)||(i.uniform1iv(this.addr,r),hn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Oh,r[a])}function dg(i,e,t){let n=this.cache,s=e.length,r=Na(t,s);cn(n,r)||(i.uniform1iv(this.addr,r),hn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Uh,r[a])}function fg(i){switch(i){case 5126:return $m;case 35664:return Zm;case 35665:return Km;case 35666:return Jm;case 35674:return jm;case 35675:return Qm;case 35676:return eg;case 5124:case 35670:return tg;case 35667:case 35671:return ng;case 35668:case 35672:return ig;case 35669:case 35673:return sg;case 5125:return rg;case 36294:return ag;case 36295:return og;case 36296:return lg;case 35678:case 36198:case 36298:case 36306:case 35682:return cg;case 35679:case 36299:case 36307:return hg;case 35680:case 36300:case 36308:case 36293:return ug;case 36289:case 36303:case 36311:case 36292:return dg}}var Xo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ym(t.type)}},qo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=fg(t.type)}},Yo=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Ro=/(\w+)(\])?(\[|\.)?/g;function Jc(i,e){i.seq.push(e),i.map[e.id]=e}function pg(i,e,t){let n=i.name,s=n.length;for(Ro.lastIndex=0;;){let r=Ro.exec(n),a=Ro.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Jc(t,c===void 0?new Xo(o,i,e):new qo(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Yo(o),Jc(t,u)),t=u}}}var Fs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);pg(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function jc(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var mg=37297,gg=0;function _g(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function xg(i){let e=Lt.getPrimaries(Lt.workingColorSpace),t=Lt.getPrimaries(i),n;switch(e===t?n="":e===ra&&t===sa?n="LinearDisplayP3ToLinearSRGB":e===sa&&t===ra&&(n="LinearSRGBToLinearDisplayP3"),i){case yi:case Ua:return[n,"LinearTransferOETF"];case _n:case Al:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Qc(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+_g(i.getShaderSource(e),a)}else return s}function yg(i,e){let t=xg(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function vg(i,e){let t;switch(e){case Fu:t="Linear";break;case Bu:t="Reinhard";break;case zu:t="OptimizedCineon";break;case Hu:t="ACESFilmic";break;case Vu:t="AgX";break;case ku:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Mg(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ds).join(`
`)}function Sg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ds).join(`
`)}function bg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Eg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ds(i){return i!==""}function eh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function th(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Tg=/^[ \t]*#include +<([\w\d./]+)>/gm;function $o(i){return i.replace(Tg,Ag)}var wg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Ag(i,e){let t=Mt[e];if(t===void 0){let n=wg.get(e);if(n!==void 0)t=Mt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return $o(t)}var Rg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nh(i){return i.replace(Rg,Cg)}function Cg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ih(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Pg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===mh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Tl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===_i&&(e="SHADOWMAP_TYPE_VSM"),e}function Ig(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Bs:case zs:e="ENVMAP_TYPE_CUBE";break;case Da:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Lg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case zs:e="ENVMAP_MODE_REFRACTION";break}return e}function Dg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case gh:e="ENVMAP_BLENDING_MULTIPLY";break;case Nu:e="ENVMAP_BLENDING_MIX";break;case Ou:e="ENVMAP_BLENDING_ADD";break}return e}function Ug(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Ng(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Pg(t),c=Ig(t),h=Lg(t),u=Dg(t),d=Ug(t),p=t.isWebGL2?"":Mg(t),_=Sg(t),v=bg(r),m=s.createProgram(),f,b,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ds).join(`
`),f.length>0&&(f+=`
`),b=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ds).join(`
`),b.length>0&&(b+=`
`)):(f=[ih(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ds).join(`
`),b=[p,ih(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fi?"#define TONE_MAPPING":"",t.toneMapping!==Fi?Mt.tonemapping_pars_fragment:"",t.toneMapping!==Fi?vg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Mt.colorspace_pars_fragment,yg("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ds).join(`
`)),a=$o(a),a=eh(a,t),a=th(a,t),o=$o(o),o=eh(o,t),o=th(o,t),a=nh(a),o=nh(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,f=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,b=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Sc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);let w=y+f+a,F=y+b+o,I=jc(s,s.VERTEX_SHADER,w),L=jc(s,s.FRAGMENT_SHADER,F);s.attachShader(m,I),s.attachShader(m,L),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function Y(U){if(i.debug.checkShaderErrors){let q=s.getProgramInfoLog(m).trim(),P=s.getShaderInfoLog(I).trim(),V=s.getShaderInfoLog(L).trim(),N=!0,ie=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(N=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,I,L);else{let X=Qc(s,I,"vertex"),ee=Qc(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+q+`
`+X+`
`+ee)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(P===""||V==="")&&(ie=!1);ie&&(U.diagnostics={runnable:N,programLog:q,vertexShader:{log:P,prefix:f},fragmentShader:{log:V,prefix:b}})}s.deleteShader(I),s.deleteShader(L),S=new Fs(s,m),T=Eg(s,m)}let S;this.getUniforms=function(){return S===void 0&&Y(this),S};let T;this.getAttributes=function(){return T===void 0&&Y(this),T};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(m,mg)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gg++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=I,this.fragmentShader=L,this}var Og=0,Zo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ko(e),t.set(e,n)),n}},Ko=class{constructor(e){this.id=Og++,this.code=e,this.usedTimes=0}};function Fg(i,e,t,n,s,r,a){let o=new hr,l=new Zo,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return S===0?"uv":`uv${S}`}function m(S,T,D,U,q){let P=U.fog,V=q.geometry,N=S.isMeshStandardMaterial?U.environment:null,ie=(S.isMeshStandardMaterial?t:e).get(S.envMap||N),X=ie&&ie.mapping===Da?ie.image.height:null,ee=_[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let te=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ce=te!==void 0?te.length:0,me=0;V.morphAttributes.position!==void 0&&(me=1),V.morphAttributes.normal!==void 0&&(me=2),V.morphAttributes.color!==void 0&&(me=3);let j,he,Ce,He;if(ee){let It=ci[ee];j=It.vertexShader,he=It.fragmentShader}else j=S.vertexShader,he=S.fragmentShader,l.update(S),Ce=l.getVertexShaderID(S),He=l.getFragmentShaderID(S);let ze=i.getRenderTarget(),Je=q.isInstancedMesh===!0,pt=q.isBatchedMesh===!0,st=!!S.map,wt=!!S.matcap,Z=!!ie,fn=!!S.aoMap,Qe=!!S.lightMap,ct=!!S.bumpMap,Ve=!!S.normalMap,Ot=!!S.displacementMap,_t=!!S.emissiveMap,A=!!S.metalnessMap,M=!!S.roughnessMap,$=S.anisotropy>0,xe=S.clearcoat>0,ge=S.iridescence>0,_e=S.sheen>0,Xe=S.transmission>0,Pe=$&&!!S.anisotropyMap,Le=xe&&!!S.clearcoatMap,Oe=xe&&!!S.clearcoatNormalMap,qe=xe&&!!S.clearcoatRoughnessMap,oe=ge&&!!S.iridescenceMap,Ct=ge&&!!S.iridescenceThicknessMap,ut=_e&&!!S.sheenColorMap,Ye=_e&&!!S.sheenRoughnessMap,$e=!!S.specularMap,de=!!S.specularColorMap,De=!!S.specularIntensityMap,tt=Xe&&!!S.transmissionMap,dt=Xe&&!!S.thicknessMap,xt=!!S.gradientMap,Te=!!S.alphaMap,O=S.alphaTest>0,Se=!!S.alphaHash,Ee=!!S.extensions,Ke=!!V.attributes.uv1,Be=!!V.attributes.uv2,nt=!!V.attributes.uv3,mt=Fi;return S.toneMapped&&(ze===null||ze.isXRRenderTarget===!0)&&(mt=i.toneMapping),{isWebGL2:h,shaderID:ee,shaderType:S.type,shaderName:S.name,vertexShader:j,fragmentShader:he,defines:S.defines,customVertexShaderID:Ce,customFragmentShaderID:He,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:pt,instancing:Je,instancingColor:Je&&q.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ze===null?i.outputColorSpace:ze.isXRRenderTarget===!0?ze.texture.colorSpace:yi,map:st,matcap:wt,envMap:Z,envMapMode:Z&&ie.mapping,envMapCubeUVHeight:X,aoMap:fn,lightMap:Qe,bumpMap:ct,normalMap:Ve,displacementMap:d&&Ot,emissiveMap:_t,normalMapObjectSpace:Ve&&S.normalMapType===ed,normalMapTangentSpace:Ve&&S.normalMapType===wh,metalnessMap:A,roughnessMap:M,anisotropy:$,anisotropyMap:Pe,clearcoat:xe,clearcoatMap:Le,clearcoatNormalMap:Oe,clearcoatRoughnessMap:qe,iridescence:ge,iridescenceMap:oe,iridescenceThicknessMap:Ct,sheen:_e,sheenColorMap:ut,sheenRoughnessMap:Ye,specularMap:$e,specularColorMap:de,specularIntensityMap:De,transmission:Xe,transmissionMap:tt,thicknessMap:dt,gradientMap:xt,opaque:S.transparent===!1&&S.blending===Ns,alphaMap:Te,alphaTest:O,alphaHash:Se,combine:S.combine,mapUv:st&&v(S.map.channel),aoMapUv:fn&&v(S.aoMap.channel),lightMapUv:Qe&&v(S.lightMap.channel),bumpMapUv:ct&&v(S.bumpMap.channel),normalMapUv:Ve&&v(S.normalMap.channel),displacementMapUv:Ot&&v(S.displacementMap.channel),emissiveMapUv:_t&&v(S.emissiveMap.channel),metalnessMapUv:A&&v(S.metalnessMap.channel),roughnessMapUv:M&&v(S.roughnessMap.channel),anisotropyMapUv:Pe&&v(S.anisotropyMap.channel),clearcoatMapUv:Le&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Oe&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:qe&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&v(S.sheenRoughnessMap.channel),specularMapUv:$e&&v(S.specularMap.channel),specularColorMapUv:de&&v(S.specularColorMap.channel),specularIntensityMapUv:De&&v(S.specularIntensityMap.channel),transmissionMapUv:tt&&v(S.transmissionMap.channel),thicknessMapUv:dt&&v(S.thicknessMap.channel),alphaMapUv:Te&&v(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Ve||$),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:Ke,vertexUv2s:Be,vertexUv3s:nt,pointsUvs:q.isPoints===!0&&!!V.attributes.uv&&(st||Te),fog:!!P,useFog:S.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:q.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:me,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:mt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:st&&S.map.isVideoTexture===!0&&Lt.getTransfer(S.map.colorSpace)===kt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===nn,flipSided:S.side===Nn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:Ee&&S.extensions.derivatives===!0,extensionFragDepth:Ee&&S.extensions.fragDepth===!0,extensionDrawBuffers:Ee&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ee&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ee&&S.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function f(S){let T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(let D in S.defines)T.push(D),T.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(b(T,S),y(T,S),T.push(i.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function b(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.numLightProbes),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function y(S,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),S.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),S.push(o.mask)}function w(S){let T=_[S.type],D;if(T){let U=ci[T];D=Td.clone(U.uniforms)}else D=S.uniforms;return D}function F(S,T){let D;for(let U=0,q=c.length;U<q;U++){let P=c[U];if(P.cacheKey===T){D=P,++D.usedTimes;break}}return D===void 0&&(D=new Ng(i,T,S,r),c.push(D)),D}function I(S){if(--S.usedTimes===0){let T=c.indexOf(S);c[T]=c[c.length-1],c.pop(),S.destroy()}}function L(S){l.remove(S)}function Y(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:w,acquireProgram:F,releaseProgram:I,releaseShaderCache:L,programs:c,dispose:Y}}function Bg(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function zg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function sh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function rh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,d,p,_,v,m){let f=i[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:_,renderOrder:u.renderOrder,z:v,group:m},i[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=_,f.renderOrder=u.renderOrder,f.z=v,f.group=m),e++,f}function o(u,d,p,_,v,m){let f=a(u,d,p,_,v,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(u,d,p,_,v,m){let f=a(u,d,p,_,v,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||zg),n.length>1&&n.sort(d||sh),s.length>1&&s.sort(d||sh)}function h(){for(let u=e,d=i.length;u<d;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Hg(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new rh,i.set(n,[a])):s>=r.length?(a=new rh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function kg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Tt};break;case"SpotLight":t={position:new z,direction:new z,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":t={color:new Tt,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function Vg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Gg=0;function Wg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Xg(i,e){let t=new kg,n=Vg(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new z);let r=new z,a=new ln,o=new ln;function l(h,u){let d=0,p=0,_=0;for(let U=0;U<9;U++)s.probe[U].set(0,0,0);let v=0,m=0,f=0,b=0,y=0,w=0,F=0,I=0,L=0,Y=0,S=0;h.sort(Wg);let T=u===!0?Math.PI:1;for(let U=0,q=h.length;U<q;U++){let P=h[U],V=P.color,N=P.intensity,ie=P.distance,X=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=V.r*N*T,p+=V.g*N*T,_+=V.b*N*T;else if(P.isLightProbe){for(let ee=0;ee<9;ee++)s.probe[ee].addScaledVector(P.sh.coefficients[ee],N);S++}else if(P.isDirectionalLight){let ee=t.get(P);if(ee.color.copy(P.color).multiplyScalar(P.intensity*T),P.castShadow){let te=P.shadow,ce=n.get(P);ce.shadowBias=te.bias,ce.shadowNormalBias=te.normalBias,ce.shadowRadius=te.radius,ce.shadowMapSize=te.mapSize,s.directionalShadow[v]=ce,s.directionalShadowMap[v]=X,s.directionalShadowMatrix[v]=P.shadow.matrix,w++}s.directional[v]=ee,v++}else if(P.isSpotLight){let ee=t.get(P);ee.position.setFromMatrixPosition(P.matrixWorld),ee.color.copy(V).multiplyScalar(N*T),ee.distance=ie,ee.coneCos=Math.cos(P.angle),ee.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),ee.decay=P.decay,s.spot[f]=ee;let te=P.shadow;if(P.map&&(s.spotLightMap[L]=P.map,L++,te.updateMatrices(P),P.castShadow&&Y++),s.spotLightMatrix[f]=te.matrix,P.castShadow){let ce=n.get(P);ce.shadowBias=te.bias,ce.shadowNormalBias=te.normalBias,ce.shadowRadius=te.radius,ce.shadowMapSize=te.mapSize,s.spotShadow[f]=ce,s.spotShadowMap[f]=X,I++}f++}else if(P.isRectAreaLight){let ee=t.get(P);ee.color.copy(V).multiplyScalar(N),ee.halfWidth.set(P.width*.5,0,0),ee.halfHeight.set(0,P.height*.5,0),s.rectArea[b]=ee,b++}else if(P.isPointLight){let ee=t.get(P);if(ee.color.copy(P.color).multiplyScalar(P.intensity*T),ee.distance=P.distance,ee.decay=P.decay,P.castShadow){let te=P.shadow,ce=n.get(P);ce.shadowBias=te.bias,ce.shadowNormalBias=te.normalBias,ce.shadowRadius=te.radius,ce.shadowMapSize=te.mapSize,ce.shadowCameraNear=te.camera.near,ce.shadowCameraFar=te.camera.far,s.pointShadow[m]=ce,s.pointShadowMap[m]=X,s.pointShadowMatrix[m]=P.shadow.matrix,F++}s.point[m]=ee,m++}else if(P.isHemisphereLight){let ee=t.get(P);ee.skyColor.copy(P.color).multiplyScalar(N*T),ee.groundColor.copy(P.groundColor).multiplyScalar(N*T),s.hemi[y]=ee,y++}}b>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=we.LTC_FLOAT_1,s.rectAreaLTC2=we.LTC_FLOAT_2):(s.rectAreaLTC1=we.LTC_HALF_1,s.rectAreaLTC2=we.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=we.LTC_FLOAT_1,s.rectAreaLTC2=we.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=we.LTC_HALF_1,s.rectAreaLTC2=we.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=p,s.ambient[2]=_;let D=s.hash;(D.directionalLength!==v||D.pointLength!==m||D.spotLength!==f||D.rectAreaLength!==b||D.hemiLength!==y||D.numDirectionalShadows!==w||D.numPointShadows!==F||D.numSpotShadows!==I||D.numSpotMaps!==L||D.numLightProbes!==S)&&(s.directional.length=v,s.spot.length=f,s.rectArea.length=b,s.point.length=m,s.hemi.length=y,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=F,s.pointShadowMap.length=F,s.spotShadow.length=I,s.spotShadowMap.length=I,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=F,s.spotLightMatrix.length=I+L-Y,s.spotLightMap.length=L,s.numSpotLightShadowsWithMaps=Y,s.numLightProbes=S,D.directionalLength=v,D.pointLength=m,D.spotLength=f,D.rectAreaLength=b,D.hemiLength=y,D.numDirectionalShadows=w,D.numPointShadows=F,D.numSpotShadows=I,D.numSpotMaps=L,D.numLightProbes=S,s.version=Gg++)}function c(h,u){let d=0,p=0,_=0,v=0,m=0,f=u.matrixWorldInverse;for(let b=0,y=h.length;b<y;b++){let w=h[b];if(w.isDirectionalLight){let F=s.directional[d];F.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),F.direction.sub(r),F.direction.transformDirection(f),d++}else if(w.isSpotLight){let F=s.spot[_];F.position.setFromMatrixPosition(w.matrixWorld),F.position.applyMatrix4(f),F.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),F.direction.sub(r),F.direction.transformDirection(f),_++}else if(w.isRectAreaLight){let F=s.rectArea[v];F.position.setFromMatrixPosition(w.matrixWorld),F.position.applyMatrix4(f),o.identity(),a.copy(w.matrixWorld),a.premultiply(f),o.extractRotation(a),F.halfWidth.set(w.width*.5,0,0),F.halfHeight.set(0,w.height*.5,0),F.halfWidth.applyMatrix4(o),F.halfHeight.applyMatrix4(o),v++}else if(w.isPointLight){let F=s.point[p];F.position.setFromMatrixPosition(w.matrixWorld),F.position.applyMatrix4(f),p++}else if(w.isHemisphereLight){let F=s.hemi[m];F.direction.setFromMatrixPosition(w.matrixWorld),F.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:s}}function ah(i,e){let t=new Xg(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(u){n.push(u)}function o(u){s.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function qg(i,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),l;return o===void 0?(l=new ah(i,e),t.set(r,[l])):a>=o.length?(l=new ah(i,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:n,dispose:s}}var Jo=class extends rs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ju,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},jo=class extends rs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Yg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$g=`uniform sampler2D shadow_pass;
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
}`;function Zg(i,e,t){let n=new ur,s=new Fe,r=new Fe,a=new dn,o=new Jo({depthPacking:Qu}),l=new jo,c={},h=t.maxTextureSize,u={[zi]:Nn,[Nn]:zi,[nn]:nn},d=new Mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:Yg,fragmentShader:$g}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let _=new si;_.setAttribute("position",new Zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new ot(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mh;let f=this.type;this.render=function(I,L,Y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;let S=i.getRenderTarget(),T=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Oi),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let q=f!==_i&&this.type===_i,P=f===_i&&this.type!==_i;for(let V=0,N=I.length;V<N;V++){let ie=I[V],X=ie.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let ee=X.getFrameExtents();if(s.multiply(ee),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ee.x),s.x=r.x*ee.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ee.y),s.y=r.y*ee.y,X.mapSize.y=r.y)),X.map===null||q===!0||P===!0){let ce=this.type!==_i?{minFilter:Cn,magFilter:Cn}:{};X.map!==null&&X.map.dispose(),X.map=new vi(s.x,s.y,ce),X.map.texture.name=ie.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();let te=X.getViewportCount();for(let ce=0;ce<te;ce++){let me=X.getViewport(ce);a.set(r.x*me.x,r.y*me.y,r.x*me.z,r.y*me.w),U.viewport(a),X.updateMatrices(ie,ce),n=X.getFrustum(),w(L,Y,X.camera,ie,this.type)}X.isPointLightShadow!==!0&&this.type===_i&&b(X,Y),X.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(S,T,D)};function b(I,L){let Y=e.update(v);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,p.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new vi(s.x,s.y)),d.uniforms.shadow_pass.value=I.map.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(L,null,Y,d,v,null),p.uniforms.shadow_pass.value=I.mapPass.texture,p.uniforms.resolution.value=I.mapSize,p.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(L,null,Y,p,v,null)}function y(I,L,Y,S){let T=null,D=Y.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(D!==void 0)T=D;else if(T=Y.isPointLight===!0?l:o,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){let U=T.uuid,q=L.uuid,P=c[U];P===void 0&&(P={},c[U]=P);let V=P[q];V===void 0&&(V=T.clone(),P[q]=V,L.addEventListener("dispose",F)),T=V}if(T.visible=L.visible,T.wireframe=L.wireframe,S===_i?T.side=L.shadowSide!==null?L.shadowSide:L.side:T.side=L.shadowSide!==null?L.shadowSide:u[L.side],T.alphaMap=L.alphaMap,T.alphaTest=L.alphaTest,T.map=L.map,T.clipShadows=L.clipShadows,T.clippingPlanes=L.clippingPlanes,T.clipIntersection=L.clipIntersection,T.displacementMap=L.displacementMap,T.displacementScale=L.displacementScale,T.displacementBias=L.displacementBias,T.wireframeLinewidth=L.wireframeLinewidth,T.linewidth=L.linewidth,Y.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let U=i.properties.get(T);U.light=Y}return T}function w(I,L,Y,S,T){if(I.visible===!1)return;if(I.layers.test(L.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&T===_i)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,I.matrixWorld);let q=e.update(I),P=I.material;if(Array.isArray(P)){let V=q.groups;for(let N=0,ie=V.length;N<ie;N++){let X=V[N],ee=P[X.materialIndex];if(ee&&ee.visible){let te=y(I,ee,S,T);I.onBeforeShadow(i,I,L,Y,q,te,X),i.renderBufferDirect(Y,null,q,te,I,X),I.onAfterShadow(i,I,L,Y,q,te,X)}}}else if(P.visible){let V=y(I,P,S,T);I.onBeforeShadow(i,I,L,Y,q,V,null),i.renderBufferDirect(Y,null,q,V,I,null),I.onAfterShadow(i,I,L,Y,q,V,null)}}let U=I.children;for(let q=0,P=U.length;q<P;q++)w(U[q],L,Y,S,T)}function F(I){I.target.removeEventListener("dispose",F);for(let Y in c){let S=c[Y],T=I.target.uuid;T in S&&(S[T].dispose(),delete S[T])}}}function Kg(i,e,t){let n=t.isWebGL2;function s(){let O=!1,Se=new dn,Ee=null,Ke=new dn(0,0,0,0);return{setMask:function(Be){Ee!==Be&&!O&&(i.colorMask(Be,Be,Be,Be),Ee=Be)},setLocked:function(Be){O=Be},setClear:function(Be,nt,mt,Dt,It){It===!0&&(Be*=Dt,nt*=Dt,mt*=Dt),Se.set(Be,nt,mt,Dt),Ke.equals(Se)===!1&&(i.clearColor(Be,nt,mt,Dt),Ke.copy(Se))},reset:function(){O=!1,Ee=null,Ke.set(-1,0,0,0)}}}function r(){let O=!1,Se=null,Ee=null,Ke=null;return{setTest:function(Be){Be?pt(i.DEPTH_TEST):st(i.DEPTH_TEST)},setMask:function(Be){Se!==Be&&!O&&(i.depthMask(Be),Se=Be)},setFunc:function(Be){if(Ee!==Be){switch(Be){case Ru:i.depthFunc(i.NEVER);break;case Cu:i.depthFunc(i.ALWAYS);break;case Pu:i.depthFunc(i.LESS);break;case ea:i.depthFunc(i.LEQUAL);break;case Iu:i.depthFunc(i.EQUAL);break;case Lu:i.depthFunc(i.GEQUAL);break;case Du:i.depthFunc(i.GREATER);break;case Uu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ee=Be}},setLocked:function(Be){O=Be},setClear:function(Be){Ke!==Be&&(i.clearDepth(Be),Ke=Be)},reset:function(){O=!1,Se=null,Ee=null,Ke=null}}}function a(){let O=!1,Se=null,Ee=null,Ke=null,Be=null,nt=null,mt=null,Dt=null,It=null;return{setTest:function(St){O||(St?pt(i.STENCIL_TEST):st(i.STENCIL_TEST))},setMask:function(St){Se!==St&&!O&&(i.stencilMask(St),Se=St)},setFunc:function(St,Ut,xn){(Ee!==St||Ke!==Ut||Be!==xn)&&(i.stencilFunc(St,Ut,xn),Ee=St,Ke=Ut,Be=xn)},setOp:function(St,Ut,xn){(nt!==St||mt!==Ut||Dt!==xn)&&(i.stencilOp(St,Ut,xn),nt=St,mt=Ut,Dt=xn)},setLocked:function(St){O=St},setClear:function(St){It!==St&&(i.clearStencil(St),It=St)},reset:function(){O=!1,Se=null,Ee=null,Ke=null,Be=null,nt=null,mt=null,Dt=null,It=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,u=new WeakMap,d={},p={},_=new WeakMap,v=[],m=null,f=!1,b=null,y=null,w=null,F=null,I=null,L=null,Y=null,S=new Tt(0,0,0),T=0,D=!1,U=null,q=null,P=null,V=null,N=null,ie=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,ee=0,te=i.getParameter(i.VERSION);te.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(te)[1]),X=ee>=1):te.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),X=ee>=2);let ce=null,me={},j=i.getParameter(i.SCISSOR_BOX),he=i.getParameter(i.VIEWPORT),Ce=new dn().fromArray(j),He=new dn().fromArray(he);function ze(O,Se,Ee,Ke){let Be=new Uint8Array(4),nt=i.createTexture();i.bindTexture(O,nt),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let mt=0;mt<Ee;mt++)n&&(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)?i.texImage3D(Se,0,i.RGBA,1,1,Ke,0,i.RGBA,i.UNSIGNED_BYTE,Be):i.texImage2D(Se+mt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Be);return nt}let Je={};Je[i.TEXTURE_2D]=ze(i.TEXTURE_2D,i.TEXTURE_2D,1),Je[i.TEXTURE_CUBE_MAP]=ze(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Je[i.TEXTURE_2D_ARRAY]=ze(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Je[i.TEXTURE_3D]=ze(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),pt(i.DEPTH_TEST),l.setFunc(ea),_t(!1),A(zl),pt(i.CULL_FACE),Ve(Oi);function pt(O){d[O]!==!0&&(i.enable(O),d[O]=!0)}function st(O){d[O]!==!1&&(i.disable(O),d[O]=!1)}function wt(O,Se){return p[O]!==Se?(i.bindFramebuffer(O,Se),p[O]=Se,n&&(O===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=Se),O===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=Se)),!0):!1}function Z(O,Se){let Ee=v,Ke=!1;if(O)if(Ee=_.get(Se),Ee===void 0&&(Ee=[],_.set(Se,Ee)),O.isWebGLMultipleRenderTargets){let Be=O.texture;if(Ee.length!==Be.length||Ee[0]!==i.COLOR_ATTACHMENT0){for(let nt=0,mt=Be.length;nt<mt;nt++)Ee[nt]=i.COLOR_ATTACHMENT0+nt;Ee.length=Be.length,Ke=!0}}else Ee[0]!==i.COLOR_ATTACHMENT0&&(Ee[0]=i.COLOR_ATTACHMENT0,Ke=!0);else Ee[0]!==i.BACK&&(Ee[0]=i.BACK,Ke=!0);Ke&&(t.isWebGL2?i.drawBuffers(Ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ee))}function fn(O){return m!==O?(i.useProgram(O),m=O,!0):!1}let Qe={[Qi]:i.FUNC_ADD,[fu]:i.FUNC_SUBTRACT,[pu]:i.FUNC_REVERSE_SUBTRACT};if(n)Qe[Gl]=i.MIN,Qe[Wl]=i.MAX;else{let O=e.get("EXT_blend_minmax");O!==null&&(Qe[Gl]=O.MIN_EXT,Qe[Wl]=O.MAX_EXT)}let ct={[mu]:i.ZERO,[gu]:i.ONE,[_u]:i.SRC_COLOR,[Do]:i.SRC_ALPHA,[bu]:i.SRC_ALPHA_SATURATE,[Mu]:i.DST_COLOR,[yu]:i.DST_ALPHA,[xu]:i.ONE_MINUS_SRC_COLOR,[Uo]:i.ONE_MINUS_SRC_ALPHA,[Su]:i.ONE_MINUS_DST_COLOR,[vu]:i.ONE_MINUS_DST_ALPHA,[Eu]:i.CONSTANT_COLOR,[Tu]:i.ONE_MINUS_CONSTANT_COLOR,[wu]:i.CONSTANT_ALPHA,[Au]:i.ONE_MINUS_CONSTANT_ALPHA};function Ve(O,Se,Ee,Ke,Be,nt,mt,Dt,It,St){if(O===Oi){f===!0&&(st(i.BLEND),f=!1);return}if(f===!1&&(pt(i.BLEND),f=!0),O!==du){if(O!==b||St!==D){if((y!==Qi||I!==Qi)&&(i.blendEquation(i.FUNC_ADD),y=Qi,I=Qi),St)switch(O){case Ns:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hl:i.blendFunc(i.ONE,i.ONE);break;case kl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ns:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case kl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}w=null,F=null,L=null,Y=null,S.set(0,0,0),T=0,b=O,D=St}return}Be=Be||Se,nt=nt||Ee,mt=mt||Ke,(Se!==y||Be!==I)&&(i.blendEquationSeparate(Qe[Se],Qe[Be]),y=Se,I=Be),(Ee!==w||Ke!==F||nt!==L||mt!==Y)&&(i.blendFuncSeparate(ct[Ee],ct[Ke],ct[nt],ct[mt]),w=Ee,F=Ke,L=nt,Y=mt),(Dt.equals(S)===!1||It!==T)&&(i.blendColor(Dt.r,Dt.g,Dt.b,It),S.copy(Dt),T=It),b=O,D=!1}function Ot(O,Se){O.side===nn?st(i.CULL_FACE):pt(i.CULL_FACE);let Ee=O.side===Nn;Se&&(Ee=!Ee),_t(Ee),O.blending===Ns&&O.transparent===!1?Ve(Oi):Ve(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),o.setMask(O.colorWrite);let Ke=O.stencilWrite;c.setTest(Ke),Ke&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),$(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?pt(i.SAMPLE_ALPHA_TO_COVERAGE):st(i.SAMPLE_ALPHA_TO_COVERAGE)}function _t(O){U!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),U=O)}function A(O){O!==hu?(pt(i.CULL_FACE),O!==q&&(O===zl?i.cullFace(i.BACK):O===uu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):st(i.CULL_FACE),q=O}function M(O){O!==P&&(X&&i.lineWidth(O),P=O)}function $(O,Se,Ee){O?(pt(i.POLYGON_OFFSET_FILL),(V!==Se||N!==Ee)&&(i.polygonOffset(Se,Ee),V=Se,N=Ee)):st(i.POLYGON_OFFSET_FILL)}function xe(O){O?pt(i.SCISSOR_TEST):st(i.SCISSOR_TEST)}function ge(O){O===void 0&&(O=i.TEXTURE0+ie-1),ce!==O&&(i.activeTexture(O),ce=O)}function _e(O,Se,Ee){Ee===void 0&&(ce===null?Ee=i.TEXTURE0+ie-1:Ee=ce);let Ke=me[Ee];Ke===void 0&&(Ke={type:void 0,texture:void 0},me[Ee]=Ke),(Ke.type!==O||Ke.texture!==Se)&&(ce!==Ee&&(i.activeTexture(Ee),ce=Ee),i.bindTexture(O,Se||Je[O]),Ke.type=O,Ke.texture=Se)}function Xe(){let O=me[ce];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Pe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Le(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Oe(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function qe(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function oe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ct(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ut(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ye(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $e(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function de(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function De(O){Ce.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Ce.copy(O))}function tt(O){He.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),He.copy(O))}function dt(O,Se){let Ee=u.get(Se);Ee===void 0&&(Ee=new WeakMap,u.set(Se,Ee));let Ke=Ee.get(O);Ke===void 0&&(Ke=i.getUniformBlockIndex(Se,O.name),Ee.set(O,Ke))}function xt(O,Se){let Ke=u.get(Se).get(O);h.get(Se)!==Ke&&(i.uniformBlockBinding(Se,Ke,O.__bindingPointIndex),h.set(Se,Ke))}function Te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},ce=null,me={},p={},_=new WeakMap,v=[],m=null,f=!1,b=null,y=null,w=null,F=null,I=null,L=null,Y=null,S=new Tt(0,0,0),T=0,D=!1,U=null,q=null,P=null,V=null,N=null,Ce.set(0,0,i.canvas.width,i.canvas.height),He.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:pt,disable:st,bindFramebuffer:wt,drawBuffers:Z,useProgram:fn,setBlending:Ve,setMaterial:Ot,setFlipSided:_t,setCullFace:A,setLineWidth:M,setPolygonOffset:$,setScissorTest:xe,activeTexture:ge,bindTexture:_e,unbindTexture:Xe,compressedTexImage2D:Pe,compressedTexImage3D:Le,texImage2D:$e,texImage3D:de,updateUBOMapping:dt,uniformBlockBinding:xt,texStorage2D:ut,texStorage3D:Ye,texSubImage2D:Oe,texSubImage3D:qe,compressedTexSubImage2D:oe,compressedTexSubImage3D:Ct,scissor:De,viewport:tt,reset:Te}}function Jg(i,e,t,n,s,r,a){let o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,M){return p?new OffscreenCanvas(A,M):oa("canvas")}function v(A,M,$,xe){let ge=1;if((A.width>xe||A.height>xe)&&(ge=xe/Math.max(A.width,A.height)),ge<1||M===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){let _e=M?Ho:Math.floor,Xe=_e(ge*A.width),Pe=_e(ge*A.height);u===void 0&&(u=_(Xe,Pe));let Le=$?_(Xe,Pe):u;return Le.width=Xe,Le.height=Pe,Le.getContext("2d").drawImage(A,0,0,Xe,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Xe+"x"+Pe+")."),Le}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return bc(A.width)&&bc(A.height)}function f(A){return o?!1:A.wrapS!==ni||A.wrapT!==ni||A.minFilter!==Cn&&A.minFilter!==qn}function b(A,M){return A.generateMipmaps&&M&&A.minFilter!==Cn&&A.minFilter!==qn}function y(A){i.generateMipmap(A)}function w(A,M,$,xe,ge=!1){if(o===!1)return M;if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let _e=M;if(M===i.RED&&($===i.FLOAT&&(_e=i.R32F),$===i.HALF_FLOAT&&(_e=i.R16F),$===i.UNSIGNED_BYTE&&(_e=i.R8)),M===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(_e=i.R8UI),$===i.UNSIGNED_SHORT&&(_e=i.R16UI),$===i.UNSIGNED_INT&&(_e=i.R32UI),$===i.BYTE&&(_e=i.R8I),$===i.SHORT&&(_e=i.R16I),$===i.INT&&(_e=i.R32I)),M===i.RG&&($===i.FLOAT&&(_e=i.RG32F),$===i.HALF_FLOAT&&(_e=i.RG16F),$===i.UNSIGNED_BYTE&&(_e=i.RG8)),M===i.RGBA){let Xe=ge?ia:Lt.getTransfer(xe);$===i.FLOAT&&(_e=i.RGBA32F),$===i.HALF_FLOAT&&(_e=i.RGBA16F),$===i.UNSIGNED_BYTE&&(_e=Xe===kt?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT_4_4_4_4&&(_e=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(_e=i.RGB5_A1)}return(_e===i.R16F||_e===i.R32F||_e===i.RG16F||_e===i.RG32F||_e===i.RGBA16F||_e===i.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function F(A,M,$){return b(A,$)===!0||A.isFramebufferTexture&&A.minFilter!==Cn&&A.minFilter!==qn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function I(A){return A===Cn||A===Xl||A===Ja?i.NEAREST:i.LINEAR}function L(A){let M=A.target;M.removeEventListener("dispose",L),S(M),M.isVideoTexture&&h.delete(M)}function Y(A){let M=A.target;M.removeEventListener("dispose",Y),D(M)}function S(A){let M=n.get(A);if(M.__webglInit===void 0)return;let $=A.source,xe=d.get($);if(xe){let ge=xe[M.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&T(A),Object.keys(xe).length===0&&d.delete($)}n.remove(A)}function T(A){let M=n.get(A);i.deleteTexture(M.__webglTexture);let $=A.source,xe=d.get($);delete xe[M.__cacheKey],a.memory.textures--}function D(A){let M=A.texture,$=n.get(A),xe=n.get(M);if(xe.__webglTexture!==void 0&&(i.deleteTexture(xe.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray($.__webglFramebuffer[ge]))for(let _e=0;_e<$.__webglFramebuffer[ge].length;_e++)i.deleteFramebuffer($.__webglFramebuffer[ge][_e]);else i.deleteFramebuffer($.__webglFramebuffer[ge]);$.__webglDepthbuffer&&i.deleteRenderbuffer($.__webglDepthbuffer[ge])}else{if(Array.isArray($.__webglFramebuffer))for(let ge=0;ge<$.__webglFramebuffer.length;ge++)i.deleteFramebuffer($.__webglFramebuffer[ge]);else i.deleteFramebuffer($.__webglFramebuffer);if($.__webglDepthbuffer&&i.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&i.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let ge=0;ge<$.__webglColorRenderbuffer.length;ge++)$.__webglColorRenderbuffer[ge]&&i.deleteRenderbuffer($.__webglColorRenderbuffer[ge]);$.__webglDepthRenderbuffer&&i.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ge=0,_e=M.length;ge<_e;ge++){let Xe=n.get(M[ge]);Xe.__webglTexture&&(i.deleteTexture(Xe.__webglTexture),a.memory.textures--),n.remove(M[ge])}n.remove(M),n.remove(A)}let U=0;function q(){U=0}function P(){let A=U;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),U+=1,A}function V(A){let M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function N(A,M){let $=n.get(A);if(A.isVideoTexture&&Ot(A),A.isRenderTargetTexture===!1&&A.version>0&&$.__version!==A.version){let xe=A.image;if(xe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ce($,A,M);return}}t.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+M)}function ie(A,M){let $=n.get(A);if(A.version>0&&$.__version!==A.version){Ce($,A,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+M)}function X(A,M){let $=n.get(A);if(A.version>0&&$.__version!==A.version){Ce($,A,M);return}t.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+M)}function ee(A,M){let $=n.get(A);if(A.version>0&&$.__version!==A.version){He($,A,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+M)}let te={[ar]:i.REPEAT,[ni]:i.CLAMP_TO_EDGE,[Fo]:i.MIRRORED_REPEAT},ce={[Cn]:i.NEAREST,[Xl]:i.NEAREST_MIPMAP_NEAREST,[Ja]:i.NEAREST_MIPMAP_LINEAR,[qn]:i.LINEAR,[Gu]:i.LINEAR_MIPMAP_NEAREST,[or]:i.LINEAR_MIPMAP_LINEAR},me={[td]:i.NEVER,[od]:i.ALWAYS,[nd]:i.LESS,[Ah]:i.LEQUAL,[id]:i.EQUAL,[ad]:i.GEQUAL,[sd]:i.GREATER,[rd]:i.NOTEQUAL};function j(A,M,$){if($?(i.texParameteri(A,i.TEXTURE_WRAP_S,te[M.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,te[M.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,te[M.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ce[M.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ce[M.minFilter])):(i.texParameteri(A,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(A,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(M.wrapS!==ni||M.wrapT!==ni)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(A,i.TEXTURE_MAG_FILTER,I(M.magFilter)),i.texParameteri(A,i.TEXTURE_MIN_FILTER,I(M.minFilter)),M.minFilter!==Cn&&M.minFilter!==qn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,me[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let xe=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Cn||M.minFilter!==Ja&&M.minFilter!==or||M.type===Ni&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===lr&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(A,xe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function he(A,M){let $=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",L));let xe=M.source,ge=d.get(xe);ge===void 0&&(ge={},d.set(xe,ge));let _e=V(M);if(_e!==A.__cacheKey){ge[_e]===void 0&&(ge[_e]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,$=!0),ge[_e].usedTimes++;let Xe=ge[A.__cacheKey];Xe!==void 0&&(ge[A.__cacheKey].usedTimes--,Xe.usedTimes===0&&T(M)),A.__cacheKey=_e,A.__webglTexture=ge[_e].texture}return $}function Ce(A,M,$){let xe=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(xe=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(xe=i.TEXTURE_3D);let ge=he(A,M),_e=M.source;t.bindTexture(xe,A.__webglTexture,i.TEXTURE0+$);let Xe=n.get(_e);if(_e.version!==Xe.__version||ge===!0){t.activeTexture(i.TEXTURE0+$);let Pe=Lt.getPrimaries(Lt.workingColorSpace),Le=M.colorSpace===Yn?null:Lt.getPrimaries(M.colorSpace),Oe=M.colorSpace===Yn||Pe===Le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let qe=f(M)&&m(M.image)===!1,oe=v(M.image,qe,!1,s.maxTextureSize);oe=_t(M,oe);let Ct=m(oe)||o,ut=r.convert(M.format,M.colorSpace),Ye=r.convert(M.type),$e=w(M.internalFormat,ut,Ye,M.colorSpace,M.isVideoTexture);j(xe,M,Ct);let de,De=M.mipmaps,tt=o&&M.isVideoTexture!==!0&&$e!==Eh,dt=Xe.__version===void 0||ge===!0,xt=F(M,oe,Ct);if(M.isDepthTexture)$e=i.DEPTH_COMPONENT,o?M.type===Ni?$e=i.DEPTH_COMPONENT32F:M.type===Ui?$e=i.DEPTH_COMPONENT24:M.type===ts?$e=i.DEPTH24_STENCIL8:$e=i.DEPTH_COMPONENT16:M.type===Ni&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===ns&&$e===i.DEPTH_COMPONENT&&M.type!==wl&&M.type!==Ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Ui,Ye=r.convert(M.type)),M.format===Hs&&$e===i.DEPTH_COMPONENT&&($e=i.DEPTH_STENCIL,M.type!==ts&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=ts,Ye=r.convert(M.type))),dt&&(tt?t.texStorage2D(i.TEXTURE_2D,1,$e,oe.width,oe.height):t.texImage2D(i.TEXTURE_2D,0,$e,oe.width,oe.height,0,ut,Ye,null));else if(M.isDataTexture)if(De.length>0&&Ct){tt&&dt&&t.texStorage2D(i.TEXTURE_2D,xt,$e,De[0].width,De[0].height);for(let Te=0,O=De.length;Te<O;Te++)de=De[Te],tt?t.texSubImage2D(i.TEXTURE_2D,Te,0,0,de.width,de.height,ut,Ye,de.data):t.texImage2D(i.TEXTURE_2D,Te,$e,de.width,de.height,0,ut,Ye,de.data);M.generateMipmaps=!1}else tt?(dt&&t.texStorage2D(i.TEXTURE_2D,xt,$e,oe.width,oe.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe.width,oe.height,ut,Ye,oe.data)):t.texImage2D(i.TEXTURE_2D,0,$e,oe.width,oe.height,0,ut,Ye,oe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){tt&&dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xt,$e,De[0].width,De[0].height,oe.depth);for(let Te=0,O=De.length;Te<O;Te++)de=De[Te],M.format!==ii?ut!==null?tt?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Te,0,0,0,de.width,de.height,oe.depth,ut,de.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Te,$e,de.width,de.height,oe.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?t.texSubImage3D(i.TEXTURE_2D_ARRAY,Te,0,0,0,de.width,de.height,oe.depth,ut,Ye,de.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Te,$e,de.width,de.height,oe.depth,0,ut,Ye,de.data)}else{tt&&dt&&t.texStorage2D(i.TEXTURE_2D,xt,$e,De[0].width,De[0].height);for(let Te=0,O=De.length;Te<O;Te++)de=De[Te],M.format!==ii?ut!==null?tt?t.compressedTexSubImage2D(i.TEXTURE_2D,Te,0,0,de.width,de.height,ut,de.data):t.compressedTexImage2D(i.TEXTURE_2D,Te,$e,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?t.texSubImage2D(i.TEXTURE_2D,Te,0,0,de.width,de.height,ut,Ye,de.data):t.texImage2D(i.TEXTURE_2D,Te,$e,de.width,de.height,0,ut,Ye,de.data)}else if(M.isDataArrayTexture)tt?(dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xt,$e,oe.width,oe.height,oe.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,ut,Ye,oe.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,$e,oe.width,oe.height,oe.depth,0,ut,Ye,oe.data);else if(M.isData3DTexture)tt?(dt&&t.texStorage3D(i.TEXTURE_3D,xt,$e,oe.width,oe.height,oe.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,ut,Ye,oe.data)):t.texImage3D(i.TEXTURE_3D,0,$e,oe.width,oe.height,oe.depth,0,ut,Ye,oe.data);else if(M.isFramebufferTexture){if(dt)if(tt)t.texStorage2D(i.TEXTURE_2D,xt,$e,oe.width,oe.height);else{let Te=oe.width,O=oe.height;for(let Se=0;Se<xt;Se++)t.texImage2D(i.TEXTURE_2D,Se,$e,Te,O,0,ut,Ye,null),Te>>=1,O>>=1}}else if(De.length>0&&Ct){tt&&dt&&t.texStorage2D(i.TEXTURE_2D,xt,$e,De[0].width,De[0].height);for(let Te=0,O=De.length;Te<O;Te++)de=De[Te],tt?t.texSubImage2D(i.TEXTURE_2D,Te,0,0,ut,Ye,de):t.texImage2D(i.TEXTURE_2D,Te,$e,ut,Ye,de);M.generateMipmaps=!1}else tt?(dt&&t.texStorage2D(i.TEXTURE_2D,xt,$e,oe.width,oe.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ut,Ye,oe)):t.texImage2D(i.TEXTURE_2D,0,$e,ut,Ye,oe);b(M,Ct)&&y(xe),Xe.__version=_e.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function He(A,M,$){if(M.image.length!==6)return;let xe=he(A,M),ge=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+$);let _e=n.get(ge);if(ge.version!==_e.__version||xe===!0){t.activeTexture(i.TEXTURE0+$);let Xe=Lt.getPrimaries(Lt.workingColorSpace),Pe=M.colorSpace===Yn?null:Lt.getPrimaries(M.colorSpace),Le=M.colorSpace===Yn||Xe===Pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let Oe=M.isCompressedTexture||M.image[0].isCompressedTexture,qe=M.image[0]&&M.image[0].isDataTexture,oe=[];for(let Te=0;Te<6;Te++)!Oe&&!qe?oe[Te]=v(M.image[Te],!1,!0,s.maxCubemapSize):oe[Te]=qe?M.image[Te].image:M.image[Te],oe[Te]=_t(M,oe[Te]);let Ct=oe[0],ut=m(Ct)||o,Ye=r.convert(M.format,M.colorSpace),$e=r.convert(M.type),de=w(M.internalFormat,Ye,$e,M.colorSpace),De=o&&M.isVideoTexture!==!0,tt=_e.__version===void 0||xe===!0,dt=F(M,Ct,ut);j(i.TEXTURE_CUBE_MAP,M,ut);let xt;if(Oe){De&&tt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,dt,de,Ct.width,Ct.height);for(let Te=0;Te<6;Te++){xt=oe[Te].mipmaps;for(let O=0;O<xt.length;O++){let Se=xt[O];M.format!==ii?Ye!==null?De?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,O,0,0,Se.width,Se.height,Ye,Se.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,O,de,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,O,0,0,Se.width,Se.height,Ye,$e,Se.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,O,de,Se.width,Se.height,0,Ye,$e,Se.data)}}}else{xt=M.mipmaps,De&&tt&&(xt.length>0&&dt++,t.texStorage2D(i.TEXTURE_CUBE_MAP,dt,de,oe[0].width,oe[0].height));for(let Te=0;Te<6;Te++)if(qe){De?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,oe[Te].width,oe[Te].height,Ye,$e,oe[Te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,de,oe[Te].width,oe[Te].height,0,Ye,$e,oe[Te].data);for(let O=0;O<xt.length;O++){let Ee=xt[O].image[Te].image;De?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,O+1,0,0,Ee.width,Ee.height,Ye,$e,Ee.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,O+1,de,Ee.width,Ee.height,0,Ye,$e,Ee.data)}}else{De?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,Ye,$e,oe[Te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,de,Ye,$e,oe[Te]);for(let O=0;O<xt.length;O++){let Se=xt[O];De?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,O+1,0,0,Ye,$e,Se.image[Te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,O+1,de,Ye,$e,Se.image[Te])}}}b(M,ut)&&y(i.TEXTURE_CUBE_MAP),_e.__version=ge.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function ze(A,M,$,xe,ge,_e){let Xe=r.convert($.format,$.colorSpace),Pe=r.convert($.type),Le=w($.internalFormat,Xe,Pe,$.colorSpace);if(!n.get(M).__hasExternalTextures){let qe=Math.max(1,M.width>>_e),oe=Math.max(1,M.height>>_e);ge===i.TEXTURE_3D||ge===i.TEXTURE_2D_ARRAY?t.texImage3D(ge,_e,Le,qe,oe,M.depth,0,Xe,Pe,null):t.texImage2D(ge,_e,Le,qe,oe,0,Xe,Pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),Ve(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xe,ge,n.get($).__webglTexture,0,ct(M)):(ge===i.TEXTURE_2D||ge>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,xe,ge,n.get($).__webglTexture,_e),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Je(A,M,$){if(i.bindRenderbuffer(i.RENDERBUFFER,A),M.depthBuffer&&!M.stencilBuffer){let xe=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if($||Ve(M)){let ge=M.depthTexture;ge&&ge.isDepthTexture&&(ge.type===Ni?xe=i.DEPTH_COMPONENT32F:ge.type===Ui&&(xe=i.DEPTH_COMPONENT24));let _e=ct(M);Ve(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e,xe,M.width,M.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,xe,M.width,M.height)}else i.renderbufferStorage(i.RENDERBUFFER,xe,M.width,M.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,A)}else if(M.depthBuffer&&M.stencilBuffer){let xe=ct(M);$&&Ve(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,i.DEPTH24_STENCIL8,M.width,M.height):Ve(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe,i.DEPTH24_STENCIL8,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,A)}else{let xe=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ge=0;ge<xe.length;ge++){let _e=xe[ge],Xe=r.convert(_e.format,_e.colorSpace),Pe=r.convert(_e.type),Le=w(_e.internalFormat,Xe,Pe,_e.colorSpace),Oe=ct(M);$&&Ve(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe,Le,M.width,M.height):Ve(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Oe,Le,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Le,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pt(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),N(M.depthTexture,0);let xe=n.get(M.depthTexture).__webglTexture,ge=ct(M);if(M.depthTexture.format===ns)Ve(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,xe,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,xe,0);else if(M.depthTexture.format===Hs)Ve(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,xe,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function st(A){let M=n.get(A),$=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");pt(M.__webglFramebuffer,A)}else if($){M.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[xe]),M.__webglDepthbuffer[xe]=i.createRenderbuffer(),Je(M.__webglDepthbuffer[xe],A,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),Je(M.__webglDepthbuffer,A,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function wt(A,M,$){let xe=n.get(A);M!==void 0&&ze(xe.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&st(A)}function Z(A){let M=A.texture,$=n.get(A),xe=n.get(M);A.addEventListener("dispose",Y),A.isWebGLMultipleRenderTargets!==!0&&(xe.__webglTexture===void 0&&(xe.__webglTexture=i.createTexture()),xe.__version=M.version,a.memory.textures++);let ge=A.isWebGLCubeRenderTarget===!0,_e=A.isWebGLMultipleRenderTargets===!0,Xe=m(A)||o;if(ge){$.__webglFramebuffer=[];for(let Pe=0;Pe<6;Pe++)if(o&&M.mipmaps&&M.mipmaps.length>0){$.__webglFramebuffer[Pe]=[];for(let Le=0;Le<M.mipmaps.length;Le++)$.__webglFramebuffer[Pe][Le]=i.createFramebuffer()}else $.__webglFramebuffer[Pe]=i.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){$.__webglFramebuffer=[];for(let Pe=0;Pe<M.mipmaps.length;Pe++)$.__webglFramebuffer[Pe]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(_e)if(s.drawBuffers){let Pe=A.texture;for(let Le=0,Oe=Pe.length;Le<Oe;Le++){let qe=n.get(Pe[Le]);qe.__webglTexture===void 0&&(qe.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&Ve(A)===!1){let Pe=_e?M:[M];$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Le=0;Le<Pe.length;Le++){let Oe=Pe[Le];$.__webglColorRenderbuffer[Le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[Le]);let qe=r.convert(Oe.format,Oe.colorSpace),oe=r.convert(Oe.type),Ct=w(Oe.internalFormat,qe,oe,Oe.colorSpace,A.isXRRenderTarget===!0),ut=ct(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,Ct,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,$.__webglColorRenderbuffer[Le])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),Je($.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ge){t.bindTexture(i.TEXTURE_CUBE_MAP,xe.__webglTexture),j(i.TEXTURE_CUBE_MAP,M,Xe);for(let Pe=0;Pe<6;Pe++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let Le=0;Le<M.mipmaps.length;Le++)ze($.__webglFramebuffer[Pe][Le],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Le);else ze($.__webglFramebuffer[Pe],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0);b(M,Xe)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){let Pe=A.texture;for(let Le=0,Oe=Pe.length;Le<Oe;Le++){let qe=Pe[Le],oe=n.get(qe);t.bindTexture(i.TEXTURE_2D,oe.__webglTexture),j(i.TEXTURE_2D,qe,Xe),ze($.__webglFramebuffer,A,qe,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,0),b(qe,Xe)&&y(i.TEXTURE_2D)}t.unbindTexture()}else{let Pe=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?Pe=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Pe,xe.__webglTexture),j(Pe,M,Xe),o&&M.mipmaps&&M.mipmaps.length>0)for(let Le=0;Le<M.mipmaps.length;Le++)ze($.__webglFramebuffer[Le],A,M,i.COLOR_ATTACHMENT0,Pe,Le);else ze($.__webglFramebuffer,A,M,i.COLOR_ATTACHMENT0,Pe,0);b(M,Xe)&&y(Pe),t.unbindTexture()}A.depthBuffer&&st(A)}function fn(A){let M=m(A)||o,$=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let xe=0,ge=$.length;xe<ge;xe++){let _e=$[xe];if(b(_e,M)){let Xe=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Pe=n.get(_e).__webglTexture;t.bindTexture(Xe,Pe),y(Xe),t.unbindTexture()}}}function Qe(A){if(o&&A.samples>0&&Ve(A)===!1){let M=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],$=A.width,xe=A.height,ge=i.COLOR_BUFFER_BIT,_e=[],Xe=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=n.get(A),Le=A.isWebGLMultipleRenderTargets===!0;if(Le)for(let Oe=0;Oe<M.length;Oe++)t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Oe=0;Oe<M.length;Oe++){_e.push(i.COLOR_ATTACHMENT0+Oe),A.depthBuffer&&_e.push(Xe);let qe=Pe.__ignoreDepthValues!==void 0?Pe.__ignoreDepthValues:!1;if(qe===!1&&(A.depthBuffer&&(ge|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&(ge|=i.STENCIL_BUFFER_BIT)),Le&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Oe]),qe===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Xe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Xe])),Le){let oe=n.get(M[Oe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,oe,0)}i.blitFramebuffer(0,0,$,xe,0,0,$,xe,ge,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_e)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Le)for(let Oe=0;Oe<M.length;Oe++){t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Oe]);let qe=n.get(M[Oe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.TEXTURE_2D,qe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}}function ct(A){return Math.min(s.maxSamples,A.samples)}function Ve(A){let M=n.get(A);return o&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ot(A){let M=a.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function _t(A,M){let $=A.colorSpace,xe=A.format,ge=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Bo||$!==yi&&$!==Yn&&(Lt.getTransfer($)===kt?o===!1?e.has("EXT_sRGB")===!0&&xe===ii?(A.format=Bo,A.minFilter=qn,A.generateMipmaps=!1):M=la.sRGBToLinear(M):(xe!==ii||ge!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),M}this.allocateTextureUnit=P,this.resetTextureUnits=q,this.setTexture2D=N,this.setTexture2DArray=ie,this.setTexture3D=X,this.setTextureCube=ee,this.rebindTextures=wt,this.setupRenderTarget=Z,this.updateRenderTargetMipmap=fn,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=ze,this.useMultisampledRTT=Ve}function jg(i,e,t){let n=t.isWebGL2;function s(r,a=Yn){let o,l=Lt.getTransfer(a);if(r===Bi)return i.UNSIGNED_BYTE;if(r===yh)return i.UNSIGNED_SHORT_4_4_4_4;if(r===vh)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Wu)return i.BYTE;if(r===Xu)return i.SHORT;if(r===wl)return i.UNSIGNED_SHORT;if(r===xh)return i.INT;if(r===Ui)return i.UNSIGNED_INT;if(r===Ni)return i.FLOAT;if(r===lr)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===qu)return i.ALPHA;if(r===ii)return i.RGBA;if(r===Yu)return i.LUMINANCE;if(r===$u)return i.LUMINANCE_ALPHA;if(r===ns)return i.DEPTH_COMPONENT;if(r===Hs)return i.DEPTH_STENCIL;if(r===Bo)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Zu)return i.RED;if(r===Mh)return i.RED_INTEGER;if(r===Ku)return i.RG;if(r===Sh)return i.RG_INTEGER;if(r===bh)return i.RGBA_INTEGER;if(r===ja||r===Qa||r===eo||r===to)if(l===kt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===ja)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Qa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===eo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===to)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===ja)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Qa)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===eo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===to)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ql||r===Yl||r===$l||r===Zl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===ql)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Yl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===$l)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Zl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Eh)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Kl||r===Jl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Kl)return l===kt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Jl)return l===kt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===jl||r===Ql||r===ec||r===tc||r===nc||r===ic||r===sc||r===rc||r===ac||r===oc||r===lc||r===cc||r===hc||r===uc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===jl)return l===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ql)return l===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ec)return l===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===tc)return l===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===nc)return l===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ic)return l===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===sc)return l===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===rc)return l===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ac)return l===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===oc)return l===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===lc)return l===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===cc)return l===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===hc)return l===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===uc)return l===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===no||r===dc||r===fc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===no)return l===kt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===dc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===fc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ju||r===pc||r===mc||r===gc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===no)return o.COMPRESSED_RED_RGTC1_EXT;if(r===pc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===mc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===gc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ts?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Qo=class extends Pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},$n=class extends On{constructor(){super(),this.isGroup=!0,this.type="Group"}},Qg={type:"move"},nr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $n,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $n,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $n,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Qg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new $n;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},el=class extends Hi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,_=null,v=t.getContextAttributes(),m=null,f=null,b=[],y=[],w=new Fe,F=null,I=new Pn;I.layers.enable(1),I.viewport=new dn;let L=new Pn;L.layers.enable(2),L.viewport=new dn;let Y=[I,L],S=new Qo;S.layers.enable(1),S.layers.enable(2);let T=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let he=b[j];return he===void 0&&(he=new nr,b[j]=he),he.getTargetRaySpace()},this.getControllerGrip=function(j){let he=b[j];return he===void 0&&(he=new nr,b[j]=he),he.getGripSpace()},this.getHand=function(j){let he=b[j];return he===void 0&&(he=new nr,b[j]=he),he.getHandSpace()};function U(j){let he=y.indexOf(j.inputSource);if(he===-1)return;let Ce=b[he];Ce!==void 0&&(Ce.update(j.inputSource,j.frame,c||a),Ce.dispatchEvent({type:j.type,data:j.inputSource}))}function q(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",P);for(let j=0;j<b.length;j++){let he=y[j];he!==null&&(y[j]=null,b[j].disconnect(he))}T=null,D=null,e.setRenderTarget(m),p=null,d=null,u=null,s=null,f=null,me.stop(),n.isPresenting=!1,e.setPixelRatio(F),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",q),s.addEventListener("inputsourceschange",P),v.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(w),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let he={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,he),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new vi(p.framebufferWidth,p.framebufferHeight,{format:ii,type:Bi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let he=null,Ce=null,He=null;v.depth&&(He=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=v.stencil?Hs:ns,Ce=v.stencil?ts:Ui);let ze={colorFormat:t.RGBA8,depthFormat:He,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(ze),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new vi(d.textureWidth,d.textureHeight,{format:ii,type:Bi,depthTexture:new ya(d.textureWidth,d.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});let Je=e.properties.get(f);Je.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),me.setContext(s),me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function P(j){for(let he=0;he<j.removed.length;he++){let Ce=j.removed[he],He=y.indexOf(Ce);He>=0&&(y[He]=null,b[He].disconnect(Ce))}for(let he=0;he<j.added.length;he++){let Ce=j.added[he],He=y.indexOf(Ce);if(He===-1){for(let Je=0;Je<b.length;Je++)if(Je>=y.length){y.push(Ce),He=Je;break}else if(y[Je]===null){y[Je]=Ce,He=Je;break}if(He===-1)break}let ze=b[He];ze&&ze.connect(Ce)}}let V=new z,N=new z;function ie(j,he,Ce){V.setFromMatrixPosition(he.matrixWorld),N.setFromMatrixPosition(Ce.matrixWorld);let He=V.distanceTo(N),ze=he.projectionMatrix.elements,Je=Ce.projectionMatrix.elements,pt=ze[14]/(ze[10]-1),st=ze[14]/(ze[10]+1),wt=(ze[9]+1)/ze[5],Z=(ze[9]-1)/ze[5],fn=(ze[8]-1)/ze[0],Qe=(Je[8]+1)/Je[0],ct=pt*fn,Ve=pt*Qe,Ot=He/(-fn+Qe),_t=Ot*-fn;he.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(_t),j.translateZ(Ot),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();let A=pt+Ot,M=st+Ot,$=ct-_t,xe=Ve+(He-_t),ge=wt*st/M*A,_e=Z*st/M*A;j.projectionMatrix.makePerspective($,xe,ge,_e,A,M),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function X(j,he){he===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(he.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;S.near=L.near=I.near=j.near,S.far=L.far=I.far=j.far,(T!==S.near||D!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),T=S.near,D=S.far);let he=j.parent,Ce=S.cameras;X(S,he);for(let He=0;He<Ce.length;He++)X(Ce[He],he);Ce.length===2?ie(S,I,L):S.projectionMatrix.copy(I.projectionMatrix),ee(j,S,he)};function ee(j,he,Ce){Ce===null?j.matrix.copy(he.matrixWorld):(j.matrix.copy(Ce.matrixWorld),j.matrix.invert(),j.matrix.multiply(he.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(he.projectionMatrix),j.projectionMatrixInverse.copy(he.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=zo*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)};let te=null;function ce(j,he){if(h=he.getViewerPose(c||a),_=he,h!==null){let Ce=h.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let He=!1;Ce.length!==S.cameras.length&&(S.cameras.length=0,He=!0);for(let ze=0;ze<Ce.length;ze++){let Je=Ce[ze],pt=null;if(p!==null)pt=p.getViewport(Je);else{let wt=u.getViewSubImage(d,Je);pt=wt.viewport,ze===0&&(e.setRenderTargetTextures(f,wt.colorTexture,d.ignoreDepthValues?void 0:wt.depthStencilTexture),e.setRenderTarget(f))}let st=Y[ze];st===void 0&&(st=new Pn,st.layers.enable(ze),st.viewport=new dn,Y[ze]=st),st.matrix.fromArray(Je.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(Je.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(pt.x,pt.y,pt.width,pt.height),ze===0&&(S.matrix.copy(st.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),He===!0&&S.cameras.push(st)}}for(let Ce=0;Ce<b.length;Ce++){let He=y[Ce],ze=b[Ce];He!==null&&ze!==void 0&&ze.update(He,he,c||a)}te&&te(j,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),_=null}let me=new Ih;me.setAnimationLoop(ce),this.setAnimationLoop=function(j){te=j},this.dispose=function(){}}};function e0(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Ph(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,b,y,w){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,w)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,b,y):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Nn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Nn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let b=e.get(f).envMap;if(b&&(m.envMap.value=b,m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;let y=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*y,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,b,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*b,m.scale.value=y*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,b){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Nn&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){let b=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function t0(i,e,t,n){let s={},r={},a=[],o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(b,y){let w=y.program;n.uniformBlockBinding(b,w)}function c(b,y){let w=s[b.id];w===void 0&&(_(b),w=h(b),s[b.id]=w,b.addEventListener("dispose",m));let F=y.program;n.updateUBOMapping(b,F);let I=e.render.frame;r[b.id]!==I&&(d(b),r[b.id]=I)}function h(b){let y=u();b.__bindingPointIndex=y;let w=i.createBuffer(),F=b.__size,I=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,F,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,w),w}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let y=s[b.id],w=b.uniforms,F=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let I=0,L=w.length;I<L;I++){let Y=Array.isArray(w[I])?w[I]:[w[I]];for(let S=0,T=Y.length;S<T;S++){let D=Y[S];if(p(D,I,S,F)===!0){let U=D.__offset,q=Array.isArray(D.value)?D.value:[D.value],P=0;for(let V=0;V<q.length;V++){let N=q[V],ie=v(N);typeof N=="number"||typeof N=="boolean"?(D.__data[0]=N,i.bufferSubData(i.UNIFORM_BUFFER,U+P,D.__data)):N.isMatrix3?(D.__data[0]=N.elements[0],D.__data[1]=N.elements[1],D.__data[2]=N.elements[2],D.__data[3]=0,D.__data[4]=N.elements[3],D.__data[5]=N.elements[4],D.__data[6]=N.elements[5],D.__data[7]=0,D.__data[8]=N.elements[6],D.__data[9]=N.elements[7],D.__data[10]=N.elements[8],D.__data[11]=0):(N.toArray(D.__data,P),P+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(b,y,w,F){let I=b.value,L=y+"_"+w;if(F[L]===void 0)return typeof I=="number"||typeof I=="boolean"?F[L]=I:F[L]=I.clone(),!0;{let Y=F[L];if(typeof I=="number"||typeof I=="boolean"){if(Y!==I)return F[L]=I,!0}else if(Y.equals(I)===!1)return Y.copy(I),!0}return!1}function _(b){let y=b.uniforms,w=0,F=16;for(let L=0,Y=y.length;L<Y;L++){let S=Array.isArray(y[L])?y[L]:[y[L]];for(let T=0,D=S.length;T<D;T++){let U=S[T],q=Array.isArray(U.value)?U.value:[U.value];for(let P=0,V=q.length;P<V;P++){let N=q[P],ie=v(N),X=w%F;X!==0&&F-X<ie.boundary&&(w+=F-X),U.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=w,w+=ie.storage}}}let I=w%F;return I>0&&(w+=F-I),b.__size=w,b.__cache={},this}function v(b){let y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function m(b){let y=b.target;y.removeEventListener("dispose",m);let w=a.indexOf(y.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function f(){for(let b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}var dr=class{constructor(e={}){let{canvas:t=cd(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let p=new Uint32Array(4),_=new Int32Array(4),v=null,m=null,f=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_n,this._useLegacyLights=!1,this.toneMapping=Fi,this.toneMappingExposure=1;let y=this,w=!1,F=0,I=0,L=null,Y=-1,S=null,T=new dn,D=new dn,U=null,q=new Tt(0),P=0,V=t.width,N=t.height,ie=1,X=null,ee=null,te=new dn(0,0,V,N),ce=new dn(0,0,V,N),me=!1,j=new ur,he=!1,Ce=!1,He=null,ze=new ln,Je=new Fe,pt=new z,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function wt(){return L===null?ie:1}let Z=n;function fn(E,G){for(let J=0;J<E.length;J++){let Q=E[J],K=t.getContext(Q,G);if(K!==null)return K}return null}try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${El}`),t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",O,!1),t.addEventListener("webglcontextcreationerror",Se,!1),Z===null){let G=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&G.shift(),Z=fn(G,E),Z===null)throw fn(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Z.getShaderPrecisionFormat===void 0&&(Z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Qe,ct,Ve,Ot,_t,A,M,$,xe,ge,_e,Xe,Pe,Le,Oe,qe,oe,Ct,ut,Ye,$e,de,De,tt;function dt(){Qe=new vm(Z),ct=new pm(Z,Qe,e),Qe.init(ct),de=new jg(Z,Qe,ct),Ve=new Kg(Z,Qe,ct),Ot=new bm(Z),_t=new Bg,A=new Jg(Z,Qe,Ve,_t,ct,de,Ot),M=new gm(y),$=new ym(y),xe=new Pd(Z,ct),De=new dm(Z,Qe,xe,ct),ge=new Mm(Z,xe,Ot,De),_e=new Am(Z,ge,xe,Ot),ut=new wm(Z,ct,A),qe=new mm(_t),Xe=new Fg(y,M,$,Qe,ct,De,qe),Pe=new e0(y,_t),Le=new Hg,Oe=new qg(Qe,ct),Ct=new um(y,M,$,Ve,_e,d,l),oe=new Zg(y,_e,ct),tt=new t0(Z,Ot,ct,Ve),Ye=new fm(Z,Qe,Ot,ct),$e=new Sm(Z,Qe,Ot,ct),Ot.programs=Xe.programs,y.capabilities=ct,y.extensions=Qe,y.properties=_t,y.renderLists=Le,y.shadowMap=oe,y.state=Ve,y.info=Ot}dt();let xt=new el(y,Z);this.xr=xt,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){let E=Qe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Qe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(E){E!==void 0&&(ie=E,this.setSize(V,N,!1))},this.getSize=function(E){return E.set(V,N)},this.setSize=function(E,G,J=!0){if(xt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=E,N=G,t.width=Math.floor(E*ie),t.height=Math.floor(G*ie),J===!0&&(t.style.width=E+"px",t.style.height=G+"px"),this.setViewport(0,0,E,G)},this.getDrawingBufferSize=function(E){return E.set(V*ie,N*ie).floor()},this.setDrawingBufferSize=function(E,G,J){V=E,N=G,ie=J,t.width=Math.floor(E*J),t.height=Math.floor(G*J),this.setViewport(0,0,E,G)},this.getCurrentViewport=function(E){return E.copy(T)},this.getViewport=function(E){return E.copy(te)},this.setViewport=function(E,G,J,Q){E.isVector4?te.set(E.x,E.y,E.z,E.w):te.set(E,G,J,Q),Ve.viewport(T.copy(te).multiplyScalar(ie).floor())},this.getScissor=function(E){return E.copy(ce)},this.setScissor=function(E,G,J,Q){E.isVector4?ce.set(E.x,E.y,E.z,E.w):ce.set(E,G,J,Q),Ve.scissor(D.copy(ce).multiplyScalar(ie).floor())},this.getScissorTest=function(){return me},this.setScissorTest=function(E){Ve.setScissorTest(me=E)},this.setOpaqueSort=function(E){X=E},this.setTransparentSort=function(E){ee=E},this.getClearColor=function(E){return E.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(E=!0,G=!0,J=!0){let Q=0;if(E){let K=!1;if(L!==null){let Ae=L.texture.format;K=Ae===bh||Ae===Sh||Ae===Mh}if(K){let Ae=L.texture.type,Ze=Ae===Bi||Ae===Ui||Ae===wl||Ae===ts||Ae===yh||Ae===vh,it=Ct.getClearColor(),lt=Ct.getClearAlpha(),gt=it.r,je=it.g,ht=it.b;Ze?(p[0]=gt,p[1]=je,p[2]=ht,p[3]=lt,Z.clearBufferuiv(Z.COLOR,0,p)):(_[0]=gt,_[1]=je,_[2]=ht,_[3]=lt,Z.clearBufferiv(Z.COLOR,0,_))}else Q|=Z.COLOR_BUFFER_BIT}G&&(Q|=Z.DEPTH_BUFFER_BIT),J&&(Q|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",O,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),Le.dispose(),Oe.dispose(),_t.dispose(),M.dispose(),$.dispose(),_e.dispose(),De.dispose(),tt.dispose(),Xe.dispose(),xt.dispose(),xt.removeEventListener("sessionstart",It),xt.removeEventListener("sessionend",St),He&&(He.dispose(),He=null),Ut.stop()};function Te(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let E=Ot.autoReset,G=oe.enabled,J=oe.autoUpdate,Q=oe.needsUpdate,K=oe.type;dt(),Ot.autoReset=E,oe.enabled=G,oe.autoUpdate=J,oe.needsUpdate=Q,oe.type=K}function Se(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ee(E){let G=E.target;G.removeEventListener("dispose",Ee),Ke(G)}function Ke(E){Be(E),_t.remove(E)}function Be(E){let G=_t.get(E).programs;G!==void 0&&(G.forEach(function(J){Xe.releaseProgram(J)}),E.isShaderMaterial&&Xe.releaseShaderCache(E))}this.renderBufferDirect=function(E,G,J,Q,K,Ae){G===null&&(G=st);let Ze=K.isMesh&&K.matrixWorld.determinant()<0,it=hi(E,G,J,Q,K);Ve.setMaterial(Q,Ze);let lt=J.index,gt=1;if(Q.wireframe===!0){if(lt=ge.getWireframeAttribute(J),lt===void 0)return;gt=2}let je=J.drawRange,ht=J.attributes.position,Ft=je.start*gt,An=(je.start+je.count)*gt;Ae!==null&&(Ft=Math.max(Ft,Ae.start*gt),An=Math.min(An,(Ae.start+Ae.count)*gt)),lt!==null?(Ft=Math.max(Ft,0),An=Math.min(An,lt.count)):ht!=null&&(Ft=Math.max(Ft,0),An=Math.min(An,ht.count));let Yt=An-Ft;if(Yt<0||Yt===1/0)return;De.setup(K,Q,it,J,lt);let kn,Bt=Ye;if(lt!==null&&(kn=xe.get(lt),Bt=$e,Bt.setIndex(kn)),K.isMesh)Q.wireframe===!0?(Ve.setLineWidth(Q.wireframeLinewidth*wt()),Bt.setMode(Z.LINES)):Bt.setMode(Z.TRIANGLES);else if(K.isLine){let Ge=Q.linewidth;Ge===void 0&&(Ge=1),Ve.setLineWidth(Ge*wt()),K.isLineSegments?Bt.setMode(Z.LINES):K.isLineLoop?Bt.setMode(Z.LINE_LOOP):Bt.setMode(Z.LINE_STRIP)}else K.isPoints?Bt.setMode(Z.POINTS):K.isSprite&&Bt.setMode(Z.TRIANGLES);if(K.isBatchedMesh)Bt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else if(K.isInstancedMesh)Bt.renderInstances(Ft,Yt,K.count);else if(J.isInstancedBufferGeometry){let Ge=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Vt=Math.min(J.instanceCount,Ge);Bt.renderInstances(Ft,Yt,Vt)}else Bt.render(Ft,Yt)};function nt(E,G,J){E.transparent===!0&&E.side===nn&&E.forceSinglePass===!1?(E.side=Nn,E.needsUpdate=!0,fs(E,G,J),E.side=zi,E.needsUpdate=!0,fs(E,G,J),E.side=nn):fs(E,G,J)}this.compile=function(E,G,J=null){J===null&&(J=E),m=Oe.get(J),m.init(),b.push(m),J.traverseVisible(function(K){K.isLight&&K.layers.test(G.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),E!==J&&E.traverseVisible(function(K){K.isLight&&K.layers.test(G.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),m.setupLights(y._useLegacyLights);let Q=new Set;return E.traverse(function(K){let Ae=K.material;if(Ae)if(Array.isArray(Ae))for(let Ze=0;Ze<Ae.length;Ze++){let it=Ae[Ze];nt(it,J,K),Q.add(it)}else nt(Ae,J,K),Q.add(Ae)}),b.pop(),m=null,Q},this.compileAsync=function(E,G,J=null){let Q=this.compile(E,G,J);return new Promise(K=>{function Ae(){if(Q.forEach(function(Ze){_t.get(Ze).currentProgram.isReady()&&Q.delete(Ze)}),Q.size===0){K(E);return}setTimeout(Ae,10)}Qe.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let mt=null;function Dt(E){mt&&mt(E)}function It(){Ut.stop()}function St(){Ut.start()}let Ut=new Ih;Ut.setAnimationLoop(Dt),typeof self<"u"&&Ut.setContext(self),this.setAnimationLoop=function(E){mt=E,xt.setAnimationLoop(E),E===null?Ut.stop():Ut.start()},xt.addEventListener("sessionstart",It),xt.addEventListener("sessionend",St),this.render=function(E,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),xt.enabled===!0&&xt.isPresenting===!0&&(xt.cameraAutoUpdate===!0&&xt.updateCamera(G),G=xt.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,G,L),m=Oe.get(E,b.length),m.init(),b.push(m),ze.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),j.setFromProjectionMatrix(ze),Ce=this.localClippingEnabled,he=qe.init(this.clippingPlanes,Ce),v=Le.get(E,f.length),v.init(),f.push(v),xn(E,G,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(X,ee),this.info.render.frame++,he===!0&&qe.beginShadows();let J=m.state.shadowsArray;if(oe.render(J,E,G),he===!0&&qe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ct.render(v,E),m.setupLights(y._useLegacyLights),G.isArrayCamera){let Q=G.cameras;for(let K=0,Ae=Q.length;K<Ae;K++){let Ze=Q[K];us(v,E,Ze,Ze.viewport)}}else us(v,E,G);L!==null&&(A.updateMultisampleRenderTarget(L),A.updateRenderTargetMipmap(L)),E.isScene===!0&&E.onAfterRender(y,E,G),De.resetDefaultState(),Y=-1,S=null,b.pop(),b.length>0?m=b[b.length-1]:m=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function xn(E,G,J,Q){if(E.visible===!1)return;if(E.layers.test(G.layers)){if(E.isGroup)J=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(G);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||j.intersectsSprite(E)){Q&&pt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ze);let Ze=_e.update(E),it=E.material;it.visible&&v.push(E,Ze,it,J,pt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||j.intersectsObject(E))){let Ze=_e.update(E),it=E.material;if(Q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),pt.copy(E.boundingSphere.center)):(Ze.boundingSphere===null&&Ze.computeBoundingSphere(),pt.copy(Ze.boundingSphere.center)),pt.applyMatrix4(E.matrixWorld).applyMatrix4(ze)),Array.isArray(it)){let lt=Ze.groups;for(let gt=0,je=lt.length;gt<je;gt++){let ht=lt[gt],Ft=it[ht.materialIndex];Ft&&Ft.visible&&v.push(E,Ze,Ft,J,pt.z,ht)}}else it.visible&&v.push(E,Ze,it,J,pt.z,null)}}let Ae=E.children;for(let Ze=0,it=Ae.length;Ze<it;Ze++)xn(Ae[Ze],G,J,Q)}function us(E,G,J,Q){let K=E.opaque,Ae=E.transmissive,Ze=E.transparent;m.setupLightsView(J),he===!0&&qe.setGlobalState(y.clippingPlanes,J),Ae.length>0&&Va(K,Ae,G,J),Q&&Ve.viewport(T.copy(Q)),K.length>0&&ds(K,G,J),Ae.length>0&&ds(Ae,G,J),Ze.length>0&&ds(Ze,G,J),Ve.buffers.depth.setTest(!0),Ve.buffers.depth.setMask(!0),Ve.buffers.color.setMask(!0),Ve.setPolygonOffset(!1)}function Va(E,G,J,Q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;let Ae=ct.isWebGL2;He===null&&(He=new vi(1,1,{generateMipmaps:!0,type:Qe.has("EXT_color_buffer_half_float")?lr:Bi,minFilter:or,samples:Ae?4:0})),y.getDrawingBufferSize(Je),Ae?He.setSize(Je.x,Je.y):He.setSize(Ho(Je.x),Ho(Je.y));let Ze=y.getRenderTarget();y.setRenderTarget(He),y.getClearColor(q),P=y.getClearAlpha(),P<1&&y.setClearColor(16777215,.5),y.clear();let it=y.toneMapping;y.toneMapping=Fi,ds(E,J,Q),A.updateMultisampleRenderTarget(He),A.updateRenderTargetMipmap(He);let lt=!1;for(let gt=0,je=G.length;gt<je;gt++){let ht=G[gt],Ft=ht.object,An=ht.geometry,Yt=ht.material,kn=ht.group;if(Yt.side===nn&&Ft.layers.test(Q.layers)){let Bt=Yt.side;Yt.side=Nn,Yt.needsUpdate=!0,Mr(Ft,J,Q,An,Yt,kn),Yt.side=Bt,Yt.needsUpdate=!0,lt=!0}}lt===!0&&(A.updateMultisampleRenderTarget(He),A.updateRenderTargetMipmap(He)),y.setRenderTarget(Ze),y.setClearColor(q,P),y.toneMapping=it}function ds(E,G,J){let Q=G.isScene===!0?G.overrideMaterial:null;for(let K=0,Ae=E.length;K<Ae;K++){let Ze=E[K],it=Ze.object,lt=Ze.geometry,gt=Q===null?Ze.material:Q,je=Ze.group;it.layers.test(J.layers)&&Mr(it,G,J,lt,gt,je)}}function Mr(E,G,J,Q,K,Ae){E.onBeforeRender(y,G,J,Q,K,Ae),E.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),K.onBeforeRender(y,G,J,Q,E,Ae),K.transparent===!0&&K.side===nn&&K.forceSinglePass===!1?(K.side=Nn,K.needsUpdate=!0,y.renderBufferDirect(J,G,Q,K,E,Ae),K.side=zi,K.needsUpdate=!0,y.renderBufferDirect(J,G,Q,K,E,Ae),K.side=nn):y.renderBufferDirect(J,G,Q,K,E,Ae),E.onAfterRender(y,G,J,Q,K,Ae)}function fs(E,G,J){G.isScene!==!0&&(G=st);let Q=_t.get(E),K=m.state.lights,Ae=m.state.shadowsArray,Ze=K.state.version,it=Xe.getParameters(E,K.state,Ae,G,J),lt=Xe.getProgramCacheKey(it),gt=Q.programs;Q.environment=E.isMeshStandardMaterial?G.environment:null,Q.fog=G.fog,Q.envMap=(E.isMeshStandardMaterial?$:M).get(E.envMap||Q.environment),gt===void 0&&(E.addEventListener("dispose",Ee),gt=new Map,Q.programs=gt);let je=gt.get(lt);if(je!==void 0){if(Q.currentProgram===je&&Q.lightsStateVersion===Ze)return br(E,it),je}else it.uniforms=Xe.getUniforms(E),E.onBuild(J,it,y),E.onBeforeCompile(it,y),je=Xe.acquireProgram(it,lt),gt.set(lt,je),Q.uniforms=it.uniforms;let ht=Q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ht.clippingPlanes=qe.uniform),br(E,it),Q.needsLights=Fn(E),Q.lightsStateVersion=Ze,Q.needsLights&&(ht.ambientLightColor.value=K.state.ambient,ht.lightProbe.value=K.state.probe,ht.directionalLights.value=K.state.directional,ht.directionalLightShadows.value=K.state.directionalShadow,ht.spotLights.value=K.state.spot,ht.spotLightShadows.value=K.state.spotShadow,ht.rectAreaLights.value=K.state.rectArea,ht.ltc_1.value=K.state.rectAreaLTC1,ht.ltc_2.value=K.state.rectAreaLTC2,ht.pointLights.value=K.state.point,ht.pointLightShadows.value=K.state.pointShadow,ht.hemisphereLights.value=K.state.hemi,ht.directionalShadowMap.value=K.state.directionalShadowMap,ht.directionalShadowMatrix.value=K.state.directionalShadowMatrix,ht.spotShadowMap.value=K.state.spotShadowMap,ht.spotLightMatrix.value=K.state.spotLightMatrix,ht.spotLightMap.value=K.state.spotLightMap,ht.pointShadowMap.value=K.state.pointShadowMap,ht.pointShadowMatrix.value=K.state.pointShadowMatrix),Q.currentProgram=je,Q.uniformsList=null,je}function Sr(E){if(E.uniformsList===null){let G=E.currentProgram.getUniforms();E.uniformsList=Fs.seqWithValue(G.seq,E.uniforms)}return E.uniformsList}function br(E,G){let J=_t.get(E);J.outputColorSpace=G.outputColorSpace,J.batching=G.batching,J.instancing=G.instancing,J.instancingColor=G.instancingColor,J.skinning=G.skinning,J.morphTargets=G.morphTargets,J.morphNormals=G.morphNormals,J.morphColors=G.morphColors,J.morphTargetsCount=G.morphTargetsCount,J.numClippingPlanes=G.numClippingPlanes,J.numIntersection=G.numClipIntersection,J.vertexAlphas=G.vertexAlphas,J.vertexTangents=G.vertexTangents,J.toneMapping=G.toneMapping}function hi(E,G,J,Q,K){G.isScene!==!0&&(G=st),A.resetTextureUnits();let Ae=G.fog,Ze=Q.isMeshStandardMaterial?G.environment:null,it=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:yi,lt=(Q.isMeshStandardMaterial?$:M).get(Q.envMap||Ze),gt=Q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,je=!!J.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),ht=!!J.morphAttributes.position,Ft=!!J.morphAttributes.normal,An=!!J.morphAttributes.color,Yt=Fi;Q.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Yt=y.toneMapping);let kn=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Bt=kn!==void 0?kn.length:0,Ge=_t.get(Q),Vt=m.state.lights;if(he===!0&&(Ce===!0||E!==S)){let yn=E===S&&Q.id===Y;qe.setState(Q,E,yn)}let Nt=!1;Q.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Vt.state.version||Ge.outputColorSpace!==it||K.isBatchedMesh&&Ge.batching===!1||!K.isBatchedMesh&&Ge.batching===!0||K.isInstancedMesh&&Ge.instancing===!1||!K.isInstancedMesh&&Ge.instancing===!0||K.isSkinnedMesh&&Ge.skinning===!1||!K.isSkinnedMesh&&Ge.skinning===!0||K.isInstancedMesh&&Ge.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Ge.instancingColor===!1&&K.instanceColor!==null||Ge.envMap!==lt||Q.fog===!0&&Ge.fog!==Ae||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==qe.numPlanes||Ge.numIntersection!==qe.numIntersection)||Ge.vertexAlphas!==gt||Ge.vertexTangents!==je||Ge.morphTargets!==ht||Ge.morphNormals!==Ft||Ge.morphColors!==An||Ge.toneMapping!==Yt||ct.isWebGL2===!0&&Ge.morphTargetsCount!==Bt)&&(Nt=!0):(Nt=!0,Ge.__version=Q.version);let ai=Ge.currentProgram;Nt===!0&&(ai=fs(Q,G,K));let qs=!1,ui=!1,Vn=!1,rn=ai.getUniforms(),oi=Ge.uniforms;if(Ve.useProgram(ai.program)&&(qs=!0,ui=!0,Vn=!0),Q.id!==Y&&(Y=Q.id,ui=!0),qs||S!==E){rn.setValue(Z,"projectionMatrix",E.projectionMatrix),rn.setValue(Z,"viewMatrix",E.matrixWorldInverse);let yn=rn.map.cameraPosition;yn!==void 0&&yn.setValue(Z,pt.setFromMatrixPosition(E.matrixWorld)),ct.logarithmicDepthBuffer&&rn.setValue(Z,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&rn.setValue(Z,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,ui=!0,Vn=!0)}if(K.isSkinnedMesh){rn.setOptional(Z,K,"bindMatrix"),rn.setOptional(Z,K,"bindMatrixInverse");let yn=K.skeleton;yn&&(ct.floatVertexTextures?(yn.boneTexture===null&&yn.computeBoneTexture(),rn.setValue(Z,"boneTexture",yn.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}K.isBatchedMesh&&(rn.setOptional(Z,K,"batchingTexture"),rn.setValue(Z,"batchingTexture",K._matricesTexture,A));let qi=J.morphAttributes;if((qi.position!==void 0||qi.normal!==void 0||qi.color!==void 0&&ct.isWebGL2===!0)&&ut.update(K,J,ai),(ui||Ge.receiveShadow!==K.receiveShadow)&&(Ge.receiveShadow=K.receiveShadow,rn.setValue(Z,"receiveShadow",K.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(oi.envMap.value=lt,oi.flipEnvMap.value=lt.isCubeTexture&&lt.isRenderTargetTexture===!1?-1:1),ui&&(rn.setValue(Z,"toneMappingExposure",y.toneMappingExposure),Ge.needsLights&&Ga(oi,Vn),Ae&&Q.fog===!0&&Pe.refreshFogUniforms(oi,Ae),Pe.refreshMaterialUniforms(oi,Q,ie,N,He),Fs.upload(Z,Sr(Ge),oi,A)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Fs.upload(Z,Sr(Ge),oi,A),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&rn.setValue(Z,"center",K.center),rn.setValue(Z,"modelViewMatrix",K.modelViewMatrix),rn.setValue(Z,"normalMatrix",K.normalMatrix),rn.setValue(Z,"modelMatrix",K.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){let yn=Q.uniformsGroups;for(let Ys=0,Yi=yn.length;Ys<Yi;Ys++)if(ct.isWebGL2){let $s=yn[Ys];tt.update($s,ai),tt.bind($s,ai)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ai}function Ga(E,G){E.ambientLightColor.needsUpdate=G,E.lightProbe.needsUpdate=G,E.directionalLights.needsUpdate=G,E.directionalLightShadows.needsUpdate=G,E.pointLights.needsUpdate=G,E.pointLightShadows.needsUpdate=G,E.spotLights.needsUpdate=G,E.spotLightShadows.needsUpdate=G,E.rectAreaLights.needsUpdate=G,E.hemisphereLights.needsUpdate=G}function Fn(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(E,G,J){_t.get(E.texture).__webglTexture=G,_t.get(E.depthTexture).__webglTexture=J;let Q=_t.get(E);Q.__hasExternalTextures=!0,Q.__hasExternalTextures&&(Q.__autoAllocateDepthBuffer=J===void 0,Q.__autoAllocateDepthBuffer||Qe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,G){let J=_t.get(E);J.__webglFramebuffer=G,J.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(E,G=0,J=0){L=E,F=G,I=J;let Q=!0,K=null,Ae=!1,Ze=!1;if(E){let lt=_t.get(E);lt.__useDefaultFramebuffer!==void 0?(Ve.bindFramebuffer(Z.FRAMEBUFFER,null),Q=!1):lt.__webglFramebuffer===void 0?A.setupRenderTarget(E):lt.__hasExternalTextures&&A.rebindTextures(E,_t.get(E.texture).__webglTexture,_t.get(E.depthTexture).__webglTexture);let gt=E.texture;(gt.isData3DTexture||gt.isDataArrayTexture||gt.isCompressedArrayTexture)&&(Ze=!0);let je=_t.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(je[G])?K=je[G][J]:K=je[G],Ae=!0):ct.isWebGL2&&E.samples>0&&A.useMultisampledRTT(E)===!1?K=_t.get(E).__webglMultisampledFramebuffer:Array.isArray(je)?K=je[J]:K=je,T.copy(E.viewport),D.copy(E.scissor),U=E.scissorTest}else T.copy(te).multiplyScalar(ie).floor(),D.copy(ce).multiplyScalar(ie).floor(),U=me;if(Ve.bindFramebuffer(Z.FRAMEBUFFER,K)&&ct.drawBuffers&&Q&&Ve.drawBuffers(E,K),Ve.viewport(T),Ve.scissor(D),Ve.setScissorTest(U),Ae){let lt=_t.get(E.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+G,lt.__webglTexture,J)}else if(Ze){let lt=_t.get(E.texture),gt=G||0;Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,lt.__webglTexture,J||0,gt)}Y=-1},this.readRenderTargetPixels=function(E,G,J,Q,K,Ae,Ze){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let it=_t.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ze!==void 0&&(it=it[Ze]),it){Ve.bindFramebuffer(Z.FRAMEBUFFER,it);try{let lt=E.texture,gt=lt.format,je=lt.type;if(gt!==ii&&de.convert(gt)!==Z.getParameter(Z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let ht=je===lr&&(Qe.has("EXT_color_buffer_half_float")||ct.isWebGL2&&Qe.has("EXT_color_buffer_float"));if(je!==Bi&&de.convert(je)!==Z.getParameter(Z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(je===Ni&&(ct.isWebGL2||Qe.has("OES_texture_float")||Qe.has("WEBGL_color_buffer_float")))&&!ht){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=E.width-Q&&J>=0&&J<=E.height-K&&Z.readPixels(G,J,Q,K,de.convert(gt),de.convert(je),Ae)}finally{let lt=L!==null?_t.get(L).__webglFramebuffer:null;Ve.bindFramebuffer(Z.FRAMEBUFFER,lt)}}},this.copyFramebufferToTexture=function(E,G,J=0){let Q=Math.pow(2,-J),K=Math.floor(G.image.width*Q),Ae=Math.floor(G.image.height*Q);A.setTexture2D(G,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,J,0,0,E.x,E.y,K,Ae),Ve.unbindTexture()},this.copyTextureToTexture=function(E,G,J,Q=0){let K=G.image.width,Ae=G.image.height,Ze=de.convert(J.format),it=de.convert(J.type);A.setTexture2D(J,0),Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,J.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,J.unpackAlignment),G.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,Q,E.x,E.y,K,Ae,Ze,it,G.image.data):G.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,Q,E.x,E.y,G.mipmaps[0].width,G.mipmaps[0].height,Ze,G.mipmaps[0].data):Z.texSubImage2D(Z.TEXTURE_2D,Q,E.x,E.y,Ze,it,G.image),Q===0&&J.generateMipmaps&&Z.generateMipmap(Z.TEXTURE_2D),Ve.unbindTexture()},this.copyTextureToTexture3D=function(E,G,J,Q,K=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Ae=E.max.x-E.min.x+1,Ze=E.max.y-E.min.y+1,it=E.max.z-E.min.z+1,lt=de.convert(Q.format),gt=de.convert(Q.type),je;if(Q.isData3DTexture)A.setTexture3D(Q,0),je=Z.TEXTURE_3D;else if(Q.isDataArrayTexture||Q.isCompressedArrayTexture)A.setTexture2DArray(Q,0),je=Z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,Q.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,Q.unpackAlignment);let ht=Z.getParameter(Z.UNPACK_ROW_LENGTH),Ft=Z.getParameter(Z.UNPACK_IMAGE_HEIGHT),An=Z.getParameter(Z.UNPACK_SKIP_PIXELS),Yt=Z.getParameter(Z.UNPACK_SKIP_ROWS),kn=Z.getParameter(Z.UNPACK_SKIP_IMAGES),Bt=J.isCompressedTexture?J.mipmaps[K]:J.image;Z.pixelStorei(Z.UNPACK_ROW_LENGTH,Bt.width),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Bt.height),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,E.min.x),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,E.min.y),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,E.min.z),J.isDataTexture||J.isData3DTexture?Z.texSubImage3D(je,K,G.x,G.y,G.z,Ae,Ze,it,lt,gt,Bt.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Z.compressedTexSubImage3D(je,K,G.x,G.y,G.z,Ae,Ze,it,lt,Bt.data)):Z.texSubImage3D(je,K,G.x,G.y,G.z,Ae,Ze,it,lt,gt,Bt),Z.pixelStorei(Z.UNPACK_ROW_LENGTH,ht),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Ft),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,An),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,Yt),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,kn),K===0&&Q.generateMipmaps&&Z.generateMipmap(je),Ve.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),Ve.unbindTexture()},this.resetState=function(){F=0,I=0,L=null,Ve.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Al?"display-p3":"srgb",t.unpackColorSpace=Lt.workingColorSpace===Ua?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===_n?is:Th}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===is?_n:yi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},tl=class extends dr{};tl.prototype.isWebGL1Renderer=!0;var va=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Tt(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ma=class extends On{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var Sa=class extends Kn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Jn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,p=(a-h)/d;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Fe:new z);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new z,s=[],r=[],a=[],o=new z,l=new ln;for(let p=0;p<=e;p++){let _=p/e;s[p]=this.getTangentAt(_,new z)}r[0]=new z,a[0]=new z;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let _=Math.acos(Tn(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,_))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(Tn(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],p*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},fr=class extends Jn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let n=t||new Fe,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},nl=class extends fr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Cl(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,s(a,o,d,p)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Kr=new z,Co=new Cl,Po=new Cl,Io=new Cl,il=class extends Jn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new z){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Kr.subVectors(s[0],s[1]).add(s[0]),c=Kr);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Kr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Kr),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,_=Math.pow(c.distanceToSquared(u),p),v=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);v<1e-4&&(v=1),_<1e-4&&(_=v),m<1e-4&&(m=v),Co.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,_,v,m),Po.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,_,v,m),Io.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,_,v,m)}else this.curveType==="catmullrom"&&(Co.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Po.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Io.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Co.calc(l),Po.calc(l),Io.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new z().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function oh(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function n0(i,e){let t=1-i;return t*t*e}function i0(i,e){return 2*(1-i)*i*e}function s0(i,e){return i*i*e}function ir(i,e,t,n){return n0(i,e)+i0(i,t)+s0(i,n)}function r0(i,e){let t=1-i;return t*t*t*e}function a0(i,e){let t=1-i;return 3*t*t*i*e}function o0(i,e){return 3*(1-i)*i*i*e}function l0(i,e){return i*i*i*e}function sr(i,e,t,n,s){return r0(i,e)+a0(i,t)+o0(i,n)+l0(i,s)}var ba=class extends Jn{constructor(e=new Fe,t=new Fe,n=new Fe,s=new Fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Fe){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(sr(e,s.x,r.x,a.x,o.x),sr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},sl=class extends Jn{constructor(e=new z,t=new z,n=new z,s=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new z){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(sr(e,s.x,r.x,a.x,o.x),sr(e,s.y,r.y,a.y,o.y),sr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ea=class extends Jn{constructor(e=new Fe,t=new Fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Fe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},rl=class extends Jn{constructor(e=new z,t=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new z){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ta=class extends Jn{constructor(e=new Fe,t=new Fe,n=new Fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Fe){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ir(e,s.x,r.x,a.x),ir(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},al=class extends Jn{constructor(e=new z,t=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new z){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ir(e,s.x,r.x,a.x),ir(e,s.y,r.y,a.y),ir(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wa=class extends Jn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Fe){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(oh(o,l.x,c.x,h.x,u.x),oh(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Fe().fromArray(s))}return this}},lh=Object.freeze({__proto__:null,ArcCurve:nl,CatmullRomCurve3:il,CubicBezierCurve:ba,CubicBezierCurve3:sl,EllipseCurve:fr,LineCurve:Ea,LineCurve3:rl,QuadraticBezierCurve:Ta,QuadraticBezierCurve3:al,SplineCurve:wa}),ol=class extends Jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new lh[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new lh[s.type]().fromJSON(s))}return this}},Vs=class extends ol{constructor(e){super(),this.type="Path",this.currentPoint=new Fe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ea(this.currentPoint.clone(),new Fe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Ta(this.currentPoint.clone(),new Fe(e,t),new Fe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new ba(this.currentPoint.clone(),new Fe(e,t),new Fe(n,s),new Fe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new wa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new fr(e,t,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var Vi=class i extends si{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],_=0,v=[],m=n/2,f=0;b(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new sn(u,3)),this.setAttribute("normal",new sn(d,3)),this.setAttribute("uv",new sn(p,2));function b(){let w=new z,F=new z,I=0,L=(t-e)/n;for(let Y=0;Y<=r;Y++){let S=[],T=Y/r,D=T*(t-e)+e;for(let U=0;U<=s;U++){let q=U/s,P=q*l+o,V=Math.sin(P),N=Math.cos(P);F.x=D*V,F.y=-T*n+m,F.z=D*N,u.push(F.x,F.y,F.z),w.set(V,L,N).normalize(),d.push(w.x,w.y,w.z),p.push(q,1-T),S.push(_++)}v.push(S)}for(let Y=0;Y<s;Y++)for(let S=0;S<r;S++){let T=v[S][Y],D=v[S+1][Y],U=v[S+1][Y+1],q=v[S][Y+1];h.push(T,D,q),h.push(D,U,q),I+=6}c.addGroup(f,I,0),f+=I}function y(w){let F=_,I=new Fe,L=new z,Y=0,S=w===!0?e:t,T=w===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,m*T,0),d.push(0,T,0),p.push(.5,.5),_++;let D=_;for(let U=0;U<=s;U++){let P=U/s*l+o,V=Math.cos(P),N=Math.sin(P);L.x=S*N,L.y=m*T,L.z=S*V,u.push(L.x,L.y,L.z),d.push(0,T,0),I.x=V*.5+.5,I.y=N*.5*T+.5,p.push(I.x,I.y),_++}for(let U=0;U<s;U++){let q=F+U,P=D+U;w===!0?h.push(P,P+1,q):h.push(P+1,P,q),Y+=3}c.addGroup(f,Y,w===!0?1:2),f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Gi=class i extends Vi{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ll=class i extends si{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new sn(r,3)),this.setAttribute("normal",new sn(r.slice(),3)),this.setAttribute("uv",new sn(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){let y=new z,w=new z,F=new z;for(let I=0;I<t.length;I+=3)p(t[I+0],y),p(t[I+1],w),p(t[I+2],F),l(y,w,F,b)}function l(b,y,w,F){let I=F+1,L=[];for(let Y=0;Y<=I;Y++){L[Y]=[];let S=b.clone().lerp(w,Y/I),T=y.clone().lerp(w,Y/I),D=I-Y;for(let U=0;U<=D;U++)U===0&&Y===I?L[Y][U]=S:L[Y][U]=S.clone().lerp(T,U/D)}for(let Y=0;Y<I;Y++)for(let S=0;S<2*(I-Y)-1;S++){let T=Math.floor(S/2);S%2===0?(d(L[Y][T+1]),d(L[Y+1][T]),d(L[Y][T])):(d(L[Y][T+1]),d(L[Y+1][T+1]),d(L[Y+1][T]))}}function c(b){let y=new z;for(let w=0;w<r.length;w+=3)y.x=r[w+0],y.y=r[w+1],y.z=r[w+2],y.normalize().multiplyScalar(b),r[w+0]=y.x,r[w+1]=y.y,r[w+2]=y.z}function h(){let b=new z;for(let y=0;y<r.length;y+=3){b.x=r[y+0],b.y=r[y+1],b.z=r[y+2];let w=m(b)/2/Math.PI+.5,F=f(b)/Math.PI+.5;a.push(w,1-F)}_(),u()}function u(){for(let b=0;b<a.length;b+=6){let y=a[b+0],w=a[b+2],F=a[b+4],I=Math.max(y,w,F),L=Math.min(y,w,F);I>.9&&L<.1&&(y<.2&&(a[b+0]+=1),w<.2&&(a[b+2]+=1),F<.2&&(a[b+4]+=1))}}function d(b){r.push(b.x,b.y,b.z)}function p(b,y){let w=b*3;y.x=e[w+0],y.y=e[w+1],y.z=e[w+2]}function _(){let b=new z,y=new z,w=new z,F=new z,I=new Fe,L=new Fe,Y=new Fe;for(let S=0,T=0;S<r.length;S+=9,T+=6){b.set(r[S+0],r[S+1],r[S+2]),y.set(r[S+3],r[S+4],r[S+5]),w.set(r[S+6],r[S+7],r[S+8]),I.set(a[T+0],a[T+1]),L.set(a[T+2],a[T+3]),Y.set(a[T+4],a[T+5]),F.copy(b).add(y).add(w).divideScalar(3);let D=m(F);v(I,T+0,b,D),v(L,T+2,y,D),v(Y,T+4,w,D)}}function v(b,y,w,F){F<0&&b.x===1&&(a[y]=b.x-1),w.x===0&&w.z===0&&(a[y]=F/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function f(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},Aa=class i extends ll{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var pr=class extends Vs{constructor(e){super(e),this.uuid=Ws(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Vs().fromJSON(s))}return this}},c0={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Fh(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,p;if(n&&(r=p0(i,e,r,t)),i.length>80*t){o=c=i[0],l=h=i[1];for(let _=t;_<s;_+=t)u=i[_],d=i[_+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return mr(r,a,t,o,l,p,0),a}};function Fh(i,e,t,n,s){let r,a;if(s===T0(i,e,t,n)>0)for(r=e;r<t;r+=n)a=ch(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=ch(r,i[r],i[r+1],a);return a&&Oa(a,a.next)&&(_r(a),a=a.next),a}function as(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Oa(t,t.next)||qt(t.prev,t,t.next)===0)){if(_r(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function mr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&y0(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?u0(i,n,s,r):h0(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),_r(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=d0(as(i),e,t),mr(i,e,t,n,s,r,2)):a===2&&f0(i,e,t,n,s,r):mr(as(i),e,t,n,s,r,1);break}}}function h0(i){let e=i.prev,t=i,n=i.next;if(qt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,p=o>l?o>c?o:c:l>c?l:c,_=n.next;for(;_!==e;){if(_.x>=h&&_.x<=d&&_.y>=u&&_.y<=p&&Us(s,o,r,l,a,c,_.x,_.y)&&qt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function u0(i,e,t,n){let s=i.prev,r=i,a=i.next;if(qt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,p=o<l?o<c?o:c:l<c?l:c,_=h<u?h<d?h:d:u<d?u:d,v=o>l?o>c?o:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,f=cl(p,_,e,t,n),b=cl(v,m,e,t,n),y=i.prevZ,w=i.nextZ;for(;y&&y.z>=f&&w&&w.z<=b;){if(y.x>=p&&y.x<=v&&y.y>=_&&y.y<=m&&y!==s&&y!==a&&Us(o,h,l,u,c,d,y.x,y.y)&&qt(y.prev,y,y.next)>=0||(y=y.prevZ,w.x>=p&&w.x<=v&&w.y>=_&&w.y<=m&&w!==s&&w!==a&&Us(o,h,l,u,c,d,w.x,w.y)&&qt(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;y&&y.z>=f;){if(y.x>=p&&y.x<=v&&y.y>=_&&y.y<=m&&y!==s&&y!==a&&Us(o,h,l,u,c,d,y.x,y.y)&&qt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;w&&w.z<=b;){if(w.x>=p&&w.x<=v&&w.y>=_&&w.y<=m&&w!==s&&w!==a&&Us(o,h,l,u,c,d,w.x,w.y)&&qt(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function d0(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!Oa(s,r)&&Bh(s,n,n.next,r)&&gr(s,r)&&gr(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),_r(n),_r(n.next),n=i=r),n=n.next}while(n!==i);return as(n)}function f0(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&S0(a,o)){let l=zh(a,o);a=as(a,a.next),l=as(l,l.next),mr(a,e,t,n,s,r,0),mr(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function p0(i,e,t,n){let s=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Fh(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(M0(c));for(s.sort(m0),r=0;r<s.length;r++)t=g0(s[r],t);return t}function m0(i,e){return i.x-e.x}function g0(i,e){let t=_0(i,e);if(!t)return e;let n=zh(t,i);return as(n,n.next),as(t,t.next)}function _0(i,e){let t=e,n=-1/0,s,r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,u;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Us(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),gr(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&x0(s,t)))&&(s=t,h=u)),t=t.next;while(t!==o);return s}function x0(i,e){return qt(i.prev,i,e.prev)<0&&qt(e.next,i,i.next)<0}function y0(i,e,t,n){let s=i;do s.z===0&&(s.z=cl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,v0(s)}function v0(i){let e,t,n,s,r,a,o,l,c=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(a>1);return i}function cl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function M0(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Us(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function S0(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!b0(i,e)&&(gr(i,e)&&gr(e,i)&&E0(i,e)&&(qt(i.prev,i,e.prev)||qt(i,e.prev,e))||Oa(i,e)&&qt(i.prev,i,i.next)>0&&qt(e.prev,e,e.next)>0)}function qt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Oa(i,e){return i.x===e.x&&i.y===e.y}function Bh(i,e,t,n){let s=jr(qt(i,e,t)),r=jr(qt(i,e,n)),a=jr(qt(t,n,i)),o=jr(qt(t,n,e));return!!(s!==r&&a!==o||s===0&&Jr(i,t,e)||r===0&&Jr(i,n,e)||a===0&&Jr(t,i,n)||o===0&&Jr(t,e,n))}function Jr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function jr(i){return i>0?1:i<0?-1:0}function b0(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Bh(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function gr(i,e){return qt(i.prev,i,i.next)<0?qt(i,e,i.next)>=0&&qt(i,i.prev,e)>=0:qt(i,e,i.prev)<0||qt(i,i.next,e)<0}function E0(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function zh(i,e){let t=new hl(i.i,i.x,i.y),n=new hl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function ch(i,e,t,n){let s=new hl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function _r(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function hl(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function T0(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var rr=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];hh(e),uh(n,e);let a=e.length;t.forEach(hh);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,uh(n,t[l]);let o=c0.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function hh(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function uh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Ra=class i extends si{constructor(e=new pr([new Fe(0,.5),new Fe(-.5,-.5),new Fe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new sn(s,3)),this.setAttribute("normal",new sn(r,3)),this.setAttribute("uv",new sn(a,2));function c(h){let u=s.length/3,d=h.extractPoints(t),p=d.shape,_=d.holes;rr.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=_.length;m<f;m++){let b=_[m];rr.isClockWise(b)===!0&&(_[m]=b.reverse())}let v=rr.triangulateShape(p,_);for(let m=0,f=_.length;m<f;m++){let b=_[m];p=p.concat(b)}for(let m=0,f=p.length;m<f;m++){let b=p[m];s.push(b.x,b.y,0),r.push(0,0,1),a.push(b.x,b.y)}for(let m=0,f=v.length;m<f;m++){let b=v[m],y=b[0]+u,w=b[1]+u,F=b[2]+u;n.push(y,w,F),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return w0(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function w0(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Wi=class i extends si{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new z,d=new z,p=[],_=[],v=[],m=[];for(let f=0;f<=n;f++){let b=[],y=f/n,w=0;f===0&&a===0?w=.5/t:f===n&&l===Math.PI&&(w=-.5/t);for(let F=0;F<=t;F++){let I=F/t;u.x=-e*Math.cos(s+I*r)*Math.sin(a+y*o),u.y=e*Math.cos(a+y*o),u.z=e*Math.sin(s+I*r)*Math.sin(a+y*o),_.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(I+w,1-y),b.push(c++)}h.push(b)}for(let f=0;f<n;f++)for(let b=0;b<t;b++){let y=h[f][b+1],w=h[f][b],F=h[f+1][b],I=h[f+1][b+1];(f!==0||a>0)&&p.push(y,w,I),(f!==n-1||l<Math.PI)&&p.push(w,F,I)}this.setIndex(p),this.setAttribute("position",new sn(_,3)),this.setAttribute("normal",new sn(v,3)),this.setAttribute("uv",new sn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ln=class extends rs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wh,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Qr(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function A0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Gs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ul=class extends Gs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_c,endingEnd:_c}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case xc:r=e,o=2*t-n;break;case yc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case xc:a=e,l=2*n-t;break;case yc:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,_=(n-t)/(s-t),v=_*_,m=v*_,f=-d*m+2*d*v-d*_,b=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*_+1,y=(-1-p)*m+(1.5+p)*v+.5*_,w=p*m-p*v;for(let F=0;F!==o;++F)r[F]=f*a[h+F]+b*a[c+F]+y*a[l+F]+w*a[u+F];return r}},dl=class extends Gs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},fl=class extends Gs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ri=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qr(t,this.TimeBufferType),this.values=Qr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Qr(e.times,Array),values:Qr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new fl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new dl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ul(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ta:t=this.InterpolantFactoryMethodDiscrete;break;case na:t=this.InterpolantFactoryMethodLinear;break;case io:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ta;case this.InterpolantFactoryMethodLinear:return na;case this.InterpolantFactoryMethodSmooth:return io}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&A0(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===io,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,d=u-n,p=u+n;for(let _=0;_!==n;++_){let v=t[u+_];if(v!==t[d+_]||v!==t[p+_]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let p=0;p!==n;++p)t[d+p]=t[u+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};ri.prototype.TimeBufferType=Float32Array;ri.prototype.ValueBufferType=Float32Array;ri.prototype.DefaultInterpolation=na;var os=class extends ri{};os.prototype.ValueTypeName="bool";os.prototype.ValueBufferType=Array;os.prototype.DefaultInterpolation=ta;os.prototype.InterpolantFactoryMethodLinear=void 0;os.prototype.InterpolantFactoryMethodSmooth=void 0;var pl=class extends ri{};pl.prototype.ValueTypeName="color";var ml=class extends ri{};ml.prototype.ValueTypeName="number";var gl=class extends Gs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)ki.slerpFlat(r,0,a,c-o,a,c,l);return r}},xr=class extends ri{InterpolantFactoryMethodLinear(e){return new gl(this.times,this.values,this.getValueSize(),e)}};xr.prototype.ValueTypeName="quaternion";xr.prototype.DefaultInterpolation=na;xr.prototype.InterpolantFactoryMethodSmooth=void 0;var ls=class extends ri{};ls.prototype.ValueTypeName="string";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=ta;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;var _l=class extends ri{};_l.prototype.ValueTypeName="vector";var xl=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],_=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null}}},R0=new xl,yl=class{constructor(e){this.manager=e!==void 0?e:R0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};yl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ca=class extends On{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};var Lo=new ln,dh=new z,fh=new z,vl=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.map=null,this.mapPass=null,this.matrix=new ln,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ur,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new dn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;dh.setFromMatrixPosition(e.matrixWorld),t.position.copy(dh),fh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fh),t.updateMatrixWorld(),Lo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Lo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Ml=class extends vl{constructor(){super(new _a(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Pa=class extends Ca{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(On.DEFAULT_UP),this.updateMatrix(),this.target=new On,this.shadow=new Ml}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ia=class extends Ca{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Pl="\\[\\]\\.:\\/",C0=new RegExp("["+Pl+"]","g"),Il="[^"+Pl+"]",P0="[^"+Pl.replace("\\.","")+"]",I0=/((?:WC+[\/:])*)/.source.replace("WC",Il),L0=/(WCOD+)?/.source.replace("WCOD",P0),D0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Il),U0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Il),N0=new RegExp("^"+I0+L0+D0+U0+"$"),O0=["material","materials","bones","map"],Sl=class{constructor(e,t,n){let s=n||Gt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Gt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(C0,"")}static parseTrackName(e){let t=N0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);O0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Gt.Composite=Sl;Gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Gt.prototype.GetterByBindingType=[Gt.prototype._getValue_direct,Gt.prototype._getValue_array,Gt.prototype._getValue_arrayElement,Gt.prototype._getValue_toArray];Gt.prototype.SetterByBindingTypeAndVersioning=[[Gt.prototype._setValue_direct,Gt.prototype._setValue_direct_setNeedsUpdate,Gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_array,Gt.prototype._setValue_array_setNeedsUpdate,Gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_arrayElement,Gt.prototype._setValue_arrayElement_setNeedsUpdate,Gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_fromArray,Gt.prototype._setValue_fromArray_setNeedsUpdate,Gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Z0=new Float32Array(1);var La=class{constructor(e,t,n=0,s=1/0){this.ray=new ua(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new hr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return bl(e,this,n,t),n.sort(ph),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)bl(e[s],this,n,t);return n.sort(ph),n}};function ph(i,e){return i.distance-e.distance}function bl(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,a=s.length;r<a;r++)bl(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:El}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=El);var B0=35,z0=25,vt=.95,Dn=.35,Fa=6,cs=130,Hh=240,H0=typeof window<"u"&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||window.location.search.includes("dev=1")),et={PATH:0,GRASS:1,TREE:2,WATER:3,ROCK:4,BASE_TOP:5,BASE_BOTTOM:6,CENTER:7},Ba=["knight","mage","monk","ghoul","lancer","hunter","assassin","berserker","witch","ninja","samurai","werewolf"];function k0(i){for(let e=i.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[i[e],i[t]]=[i[t],i[e]]}return i}var Si={knight:{name:"Knight",gender:"male",hp:27,maxHp:27,mp:5,maxMp:5,str:13,agi:8,vit:14,dex:10,luk:4,int:7,range:1},mage:{name:"Mage",gender:"female",hp:17,maxHp:17,mp:22,maxMp:22,str:6,agi:4,vit:5,dex:4,luk:13,int:15,range:4},monk:{name:"Monk",gender:"male",hp:23,maxHp:23,mp:12,maxMp:12,str:10,agi:10,vit:12,dex:9,luk:11,int:10,range:1},ghoul:{name:"Ghoul",gender:"male",hp:21,maxHp:21,mp:6,maxMp:6,str:12,agi:9,vit:9,dex:11,luk:9,int:5,range:1},lancer:{name:"Lancer",gender:"female",hp:22,maxHp:22,mp:7,maxMp:7,str:13,agi:11,vit:10,dex:7,luk:5,int:8,range:2},hunter:{name:"Hunter",gender:"female",hp:18,maxHp:18,mp:9,maxMp:9,str:7,agi:5,vit:7,dex:15,luk:12,int:5,range:6},assassin:{name:"Assassin",gender:"female",hp:19,maxHp:19,mp:10,maxMp:10,str:9,agi:14,vit:6,dex:14,luk:10,int:4,range:1},berserker:{name:"Berserker",gender:"male",hp:30,maxHp:30,mp:3,maxMp:3,str:15,agi:7,vit:13,dex:8,luk:6,int:2,range:1},witch:{name:"Witch",gender:"female",hp:16,maxHp:16,mp:24,maxMp:24,str:5,agi:6,vit:4,dex:5,luk:14,int:14,range:3},ninja:{name:"Ninja",gender:"female",hp:20,maxHp:20,mp:12,maxMp:12,str:8,agi:15,vit:7,dex:12,luk:8,int:9,range:1},samurai:{name:"Samurai",gender:"male",hp:24,maxHp:24,mp:8,maxMp:8,str:11,agi:12,vit:8,dex:13,luk:7,int:6,range:1},werewolf:{name:"Werewolf",gender:"male",hp:25,maxHp:25,mp:4,maxMp:4,str:14,agi:13,vit:11,dex:6,luk:6,int:3,range:1}},za={knight:{primary:6908265,secondary:9127187,hair:12887172,cape:3355443},mage:{primary:16776656,secondary:3355443,hair:13353955,cape:4853326},monk:{primary:16777188,secondary:16119285,hair:2889744},ghoul:{primary:32896,secondary:6636321,hair:32896,skin:32896},lancer:{primary:3169502,secondary:16776656,hair:15854290,cape:14423100},hunter:{primary:8421376,secondary:9584654,hair:7898731,cape:16119285},assassin:{primary:986695,secondary:16119285,hair:2621751},berserker:{primary:657930,secondary:986695,hair:657930,cape:1118481},witch:{primary:16119285,secondary:8388640,hair:16777188,cape:2263842},ninja:{primary:267292,secondary:4744577,hair:4744577},samurai:{primary:13882323,secondary:3556687,hair:3556687},werewolf:{primary:11119017,secondary:14474460,hair:12632256}},yr={knight:"https://creator.nightcafe.studio/jobs/OlIWpAye2LeM5gPkAGEI/OlIWpAye2LeM5gPkAGEI--1--xc223.jpg",mage:"https://media.craiyon.com/2025-08-13/bLqz0LbwSIynOcUHty4Maw.webp",monk:"https://cdnb.artstation.com/p/assets/images/images/028/576/499/large/ahruna-art-oct17.jpg?1594859688",ghoul:"https://i.pinimg.com/736x/d3/cc/41/d3cc41778d05dec0371a69e29659f792.jpg",lancer:"https://i.redd.it/zolf64gpoa0c1.jpg",hunter:"https://coolvibe.com/wp-content/uploads/2011/02/hunter.jpg",assassin:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk2-NBPpPOU7duYgN_k_9oFKZ5hJjU28qyoA&s",berserker:"https://entertainment.inquirer.net/files/2016/07/top_bg.jpg",witch:"https://w0.peakpx.com/wallpaper/382/134/HD-wallpaper-evil-witch-witch-female-dress-white-hair-evil-black-woman-girl-darkness-anime-dark-beauty-lady-long-hair.jpg",ninja:"https://i.pinimg.com/474x/02/88/60/0288609778e53701b7e64051d7164922.jpg",samurai:"https://files.idyllic.app/files/static/3120390?width=256&optimizer=image",werewolf:"https://i.pinimg.com/736x/1f/95/27/1f9527c6255465547d664f19dd11967c.jpg"},V0={knight:[{name:"Shield Wall",description:"Gain +2 VIT for 2 turns.",cost:3,target:"self",range:0,level:2,effectKey:"shieldWall"},{name:"Dominate",description:"Steal 1 STR from an enemy.",cost:5,target:"enemy",range:1,level:3,effectKey:"dominate"}],mage:[{name:"Arcane Bolt",description:"Deal INT-based damage to one enemy.",cost:4,target:"enemy",range:4,level:1,effectKey:"arcaneBolt",type:"spell"},{name:"Freeze",description:"Reduce target's AGI by 10 for 1 turn.",cost:8,target:"enemy",range:4,level:2,effectKey:"freeze"}],monk:[{name:"Mantra Fist",description:"Deal STR+LUK-based damage to one enemy.",cost:3,hpCost:2,target:"enemy",range:1,level:2,effectKey:"mantraFist"},{name:"Chakra",description:"Heal HP for both ally and self.",cost:8,target:"ally",range:4,level:3,effectKey:"chakra"}],ghoul:[{name:"Weaken",description:"Steal 1 VIT from an enemy.",cost:4,target:"enemy",range:1,level:2,effectKey:"weaken"},{name:"Feast",description:"Deal STR-based damage to enemy and heal self.",cost:5,target:"enemy",range:1,level:3,effectKey:"feast"}],lancer:[{name:"Impale",description:"Reduce target's AGI by 2 for 3 turns.",cost:4,target:"enemy",range:2,level:2,effectKey:"impale"},{name:"Pierce",description:"Deal STR-based damage through the defense.",cost:6,target:"enemy",range:2,level:3,effectKey:"pierce"}],hunter:[{name:"Focus",description:"Gain +3 DEX for 2 turns.",cost:4,target:"self",range:0,level:2,effectKey:"focus"},{name:"Snipe",description:"Deal DEX-based damage to one enemy.",cost:6,target:"enemy",range:10,level:3,effectKey:"snipe"}],assassin:[{name:"Cripple",description:"Steal 1 AGI from an enemy.",cost:5,target:"enemy",range:1,level:2,effectKey:"cripple"},{name:"Execute",description:"Deal AGI-based damage to one enemy.",cost:7,target:"enemy",range:1,level:3,effectKey:"execute"}],berserker:[{name:"Berserk",description:"Deal STR-based damage for -3 HP.",cost:0,hpCost:3,target:"enemy",range:1,level:2,effectKey:"berserk"},{name:"Bloodlust",description:"Gain STR and VIT based on lost HP for 1 turn.",cost:5,target:"self",range:0,level:3,effectKey:"bloodlust"}],witch:[{name:"Hex",description:"Steal 1 INT from an enemy.",cost:5,target:"enemy",range:3,level:1,effectKey:"hex"},{name:"Drain",description:"Deal INT-based damage to enemy and heal self.",cost:6,target:"enemy",range:3,level:2,effectKey:"drain",type:"spell"}],ninja:[{name:"Shuriken",description:"Deal DEX-based ranged attack.",cost:5,target:"enemy",range:4,level:2,effectKey:"shuriken"},{name:"Blind",description:"Steal 2 DEX from an enemy.",cost:8,target:"enemy",range:1,level:3,effectKey:"blind"}],samurai:[{name:"Iaido",description:"Gain +1 STR and +1 DEX for 2 turns.",cost:5,target:"self",range:0,level:2,effectKey:"iaido"},{name:"Chokuto",description:"Deal STR+DEX-based damage to one enemy.",cost:7,target:"enemy",range:1,level:3,effectKey:"chokuto"}],werewolf:[{name:"Bite",description:"Deal STR+AGI-based damage to one enemy.",cost:5,target:"enemy",range:1,level:2,effectKey:"bite"},{name:"Howl",description:"Gain +2 STR and +2 AGI for 2 turns.",cost:6,target:"self",range:0,level:3,effectKey:"howl"}]};function Ie(i,e){let t=i[e]!=null?i[e]:0,n=i.tempBuff&&i.tempBuff[e]!=null?i.tempBuff[e]:0,s=i.tempDebuff&&i.tempDebuff[e]!=null?i.tempDebuff[e]:0;return t+n-s}function Ha(i,e,t,n){let s=e,r=t,o={shieldWall:"Shield Wall",dominate:"Dominate",arcaneBolt:"Arcane Bolt",freeze:"Freeze",mantra:"Mantra",chakra:"Chakra",weaken:"Weaken",feast:"Feast",impale:"Impale",pierce:"Pierce",focus:"Focus",snipe:"Snipe",execute:"Execute",cripple:"Cripple",berserk:"Berserk",bloodlust:"Bloodlust",hex:"Hex",drain:"Drain",shuriken:"Shuriken",blind:"Blind",iaido:"Iaido",chokuto:"Chokuto",bite:"Bite",howl:"Howl"}[i]||i.replace(/([A-Z])/g," $1").replace(/^./,p=>p.toUpperCase()).trim();n.showFloatingCombatText&&n.showFloatingCombatText(s.x,s.y,o,!1,"skill-name");let l=i.replace(/([A-Z])/g," $1").replace(/^./,p=>p.toUpperCase()).trim(),c=r?`${r.name} (${r.class}, P${r.player})`:"self",h=null,u=(p,_,v,m)=>{if(v)p.hp=Math.min(p.maxHp,p.hp+_),n.showFloatingCombatText&&n.showFloatingCombatText(p.x,p.y,`+${_}`,!1);else{let f=p===s,b=!0;if(!f&&!m){let y=Ie(p,"agi")*.7+Ie(p,"luk")*.3;b=Math.random()*Math.max(.001,y)<=Ie(s,"dex")}return b?(p.hp=Math.max(0,p.hp-_),p!==s&&(h=_),n.showFloatingCombatText&&n.showFloatingCombatText(p.x,p.y,String(_),!1),n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(p),p.hp<=0&&n.handleUnitDeath&&n.handleUnitDeath(p)):n.showFloatingCombatText&&n.showFloatingCombatText(p.x,p.y,"MISS",!0),b}},d=(p,_,v,m)=>{n.showFloatingCombatText&&n.showFloatingCombatText(p,_,v,!1,m?"buff":"debuff")};switch(i){case"shieldWall":s.tempBuff=s.tempBuff||{},s.tempBuff.vit=2,s.tempBuff.duration=3,d(s.x,s.y,"+2 VIT",!0);break;case"dominate":r&&(r.str=Math.max(1,(r.str||0)-1),s.str=(s.str||0)+1,d(r.x,r.y,"-1 STR",!1),d(s.x,s.y,"+1 STR",!0));break;case"arcaneBolt":{if(!r)break;let p=Math.max(1,Math.ceil(Ie(s,"int")-(Ie(r,"int")*.7+Ie(r,"luk")*.2)));u(r,p,!1,!0);break}case"freeze":r&&(r.tempDebuff=r.tempDebuff||{},r.tempDebuff.agi=10,r.tempDebuff.duration=1,d(r.x,r.y,"-10 AGI",!1));break;case"mantraFist":if(r){let p=Math.max(1,Math.floor(Ie(s,"str")*.8+Ie(s,"luk")*.4-(Ie(r,"vit")*.3+Ie(r,"luk")*.2)));u(r,p,!1),u(s,2,!1)}break;case"chakra":if(!r)break;u(s,Math.max(1,Math.floor(Ie(s,"int")*.4)),!0),u(r,Math.max(1,Math.floor(Ie(r,"int")*.4)),!0);break;case"weaken":r&&(r.vit=Math.max(1,(r.vit||0)-1),s.vit=(s.vit||0)+1,d(r.x,r.y,"-1 VIT",!1),d(s.x,s.y,"+1 VIT",!0));break;case"feast":{if(!r)break;let p=Math.max(1,Math.floor(Ie(s,"str")*.6-(Ie(r,"vit")*.3+Ie(r,"luk")*.2)));u(r,p,!1)&&u(s,p,!0);break}case"impale":r&&(r.tempDebuff=r.tempDebuff||{},r.tempDebuff.agi=2,r.tempDebuff.duration=4,d(r.x,r.y,"-2 AGI",!1));break;case"pierce":{if(!r)break;let p=Math.max(1,Math.floor(Ie(s,"str")*.6));u(r,p,!1);break}case"focus":s.tempBuff=s.tempBuff||{},s.tempBuff.dex=3,s.tempBuff.duration=3,d(s.x,s.y,"+2 DEX",!0);break;case"snipe":{if(!r)break;let p=Math.max(1,Math.floor(Ie(s,"dex")*.7-(Ie(r,"vit")*.3+Ie(r,"luk")*.2)));u(r,p,!1);break}case"execute":if(r){let p=Math.max(1,Math.floor(Ie(s,"agi")*.7-(Ie(r,"vit")*.3+Ie(r,"luk")*.2)));u(r,p,!1)}break;case"cripple":r&&(r.agi=Math.max(1,(r.agi||0)-1),s.agi=(s.agi||0)+1,d(r.x,r.y,"-1 AGI",!1),d(s.x,s.y,"+1 AGI",!0));break;case"berserk":if(r){u(r,Math.max(1,Math.floor(Ie(s,"str")*.8-Ie(r,"vit")*.3+Ie(r,"luk")*.2)),!1),u(s,3,!1);break}case"bloodlust":{let p=Math.max(1,Math.floor((s.maxHp-s.hp)*.5));s.tempBuff=s.tempBuff||{},s.tempBuff.str=p,s.tempBuff.vit=p,s.tempBuff.duration=2,d(s.x,s.y,`+${p} STR, +${p} VIT`,!0);break}case"hex":r&&(r.int=Math.max(1,(r.int||0)-1),s.int=(s.int||0)+1,d(r.x,r.y,"-1 INT",!1),d(s.x,s.y,"+1 INT",!0));break;case"drain":{if(!r)break;let p=Math.max(1,Math.ceil(Ie(s,"int")*.6-(Ie(r,"int")*.4+Ie(r,"luk")*.2)));u(r,p,!1,!0),u(s,p,!0);break}case"shuriken":{if(!r)break;let p=Math.max(1,Math.floor(Ie(s,"dex")*.5-(Ie(r,"vit")*.3+Ie(r,"luk")*.2)));u(r,p,!1);break}case"blind":r&&(r.dex=Math.max(1,(r.dex||0)-2),s.dex=(s.dex||0)+2,d(r.x,r.y,"-2 DEX",!1),d(s.x,s.y,"+2 DEX",!0));break;case"iaido":s.tempBuff=s.tempBuff||{},s.tempBuff.str=1,s.tempBuff.dex=1,s.tempBuff.duration=3,d(s.x,s.y,"+1 STR, +1 DEX",!0);break;case"chokuto":{if(!r)break;let p=Math.max(1,Math.floor((s.str||0)+(s.dex||0)*.3));u(r,p,!1);break}case"bite":{if(!r)break;let p=Math.max(1,Math.floor(Ie(s,"str")*.7+Ie(s,"agi")*.1-(Ie(r,"vit")*.3+Ie(r,"luk")*.2)));u(r,p,!1);break}case"howl":s.tempBuff=s.tempBuff||{},s.tempBuff.str=2,s.tempBuff.agi=2,s.tempBuff.duration=2,d(s.x,s.y,"+2 STR, +2 AGI",!0);break;default:break}console.log("[SKILL]",`${s.name} (${s.class}, P${s.player})`,"uses",l,"\u2192",c,`| MP ${s.mp}`,h!=null?`| ${h} dmg`:""),n.updateTurnUI&&n.updateTurnUI()}function G0(){let i=B0,e=z0,t=Array.from({length:e},()=>Array(i).fill(!1)),n=Array.from({length:e},()=>Array(i).fill(0)),s=Array.from({length:e},()=>Array(i).fill(et.GRASS)),r=Math.floor(i/2),a=Math.floor(i/2),o=0,l=e-1;for(let D=-1;D<=1;D++)for(let U=-2;U<=2;U++){let q=r+U,P=o+D;q>=0&&q<i&&P>=0&&P<e&&(t[P][q]=!0,s[P][q]=et.BASE_TOP,n[P][q]=1)}for(let D=-1;D<=1;D++)for(let U=-2;U<=2;U++){let q=a+U,P=l+D;q>=0&&q<i&&P>=0&&P<e&&(t[P][q]=!0,s[P][q]=et.BASE_BOTTOM,n[P][q]=1)}let c=Math.floor(i/2),h=Math.floor(e/2);for(let D=-1;D<=1;D++)for(let U=-2;U<=2;U++){let q=c+U,P=h+D;q>=0&&q<i&&P>=0&&P<e&&(t[P][q]=!0,s[P][q]=et.CENTER,n[P][q]=1)}let u=new Set,d=(D,U)=>Math.abs(D-c)<=2&&Math.abs(U-h)<=1,p=(D,U)=>{D<0||D>=i||U<0||U>=e||d(D,U)||u.add(U*i+D)},_=Math.floor(i/2),v=Math.floor(e/2),m=Math.min(i,e)*.29,f=Math.max(60,(e+i)*2);for(let D=0;D<2;D++){let U=D===0?_-m:_+m,q=D===0?Math.PI/2:-Math.PI/2,P=D===0?Math.PI*3/2:Math.PI/2;for(let V=0;V<=f;V++){let N=V/f,ie=q+N*(P-q),X=U+m*Math.cos(ie),ee=v+m*Math.sin(ie),te=Math.round(X),ce=Math.round(ee);p(te,ce),p(te+1,ce),p(te-1,ce),p(te,ce+1),p(te,ce-1)}}let b=[[0,1],[0,-1],[1,0],[-1,0]];for(let D=0;D<1;D++){let U=[];u.forEach(q=>{let P=q%i,V=q/i|0;for(let[N,ie]of b){let X=P+N,ee=V+ie;if(X<0||X>=i||ee<0||ee>=e)continue;let te=ee*i+X;u.has(te)||U.push(te)}}),U.forEach(q=>u.add(q))}u.forEach(D=>{let U=D%i,q=D/i|0;s[q][U]===et.BASE_TOP||s[q][U]===et.BASE_BOTTOM||s[q][U]===et.CENTER||(t[q][U]=!0,s[q][U]=et.PATH,n[q][U]=1)});let y=Math.round(_-m*1.6),w=Math.round(_+m*1.6),F=Math.round(_-m),I=Math.round(_+m),L=1;for(let D=h-L;D<=h+L;D++)if(!(D<0||D>=e))for(let U=y;U<=w;U++)U<0||U>=i||(t[D][U]=!0,s[D][U]!==et.CENTER&&s[D][U]!==et.BASE_TOP&&s[D][U]!==et.BASE_BOTTOM&&(s[D][U]=et.PATH),n[D][U]=Math.max(n[D][U],1));function Y(D,U,q,P){let V=Math.max(1,Math.min(D,U)),N=Math.min(e-2,Math.max(D,U)),ie=Math.max(1,Math.min(q,P)),X=Math.min(i-2,Math.max(q,P));for(let ee=V;ee<=N;ee++)for(let te=ie;te<=X;te++)s[ee][te]===et.BASE_TOP||s[ee][te]===et.BASE_BOTTOM||s[ee][te]===et.CENTER||(t[ee][te]=!0,s[ee][te]=et.PATH,n[ee][te]=1)}let S=3,T=3;Y(o,o+S-1,F,r-1),Y(o,o+S-1,r+1,I),Y(l-T+1,l,F,a-1),Y(l-T+1,l,a+1,I);for(let D=-1;D<=2;D++)for(let U=-2;U<=2;U++){let q=r+U,P=o+D;q>=0&&q<i&&P>=0&&P<e&&(t[P][q]=!0,s[P][q]=et.BASE_TOP,n[P][q]=1)}for(let D=-2;D<=1;D++)for(let U=-2;U<=2;U++){let q=a+U,P=l+D;q>=0&&q<i&&P>=0&&P<e&&(t[P][q]=!0,s[P][q]=et.BASE_BOTTOM,n[P][q]=1)}for(let D=0;D<e;D++)for(let U=0;U<i;U++){if(t[D][U]||s[D][U]===et.BASE_TOP||s[D][U]===et.BASE_BOTTOM||s[D][U]===et.CENTER)continue;let q=Math.abs(U-r)<=4&&Math.abs(D-o)<=3,P=Math.abs(U-a)<=4&&Math.abs(D-l)<=3,V=q||P,N=Math.random();N<.55&&!V?(s[D][U]=et.TREE,n[D][U]=1+Math.floor(Math.random()*2)):N<.75||V&&N<.5?(s[D][U]=et.WATER,n[D][U]=0):(s[D][U]=et.ROCK,n[D][U]=1+Math.floor(Math.random()*2))}return{w:i,h:e,path:t,height:n,type:s,topBaseX:r,topBaseY:o,botBaseX:a,botBaseY:l}}function W0(i,e,t){let n=e===1?et.BASE_BOTTOM:et.BASE_TOP,s=[];for(let r=0;r<i.h;r++)for(let a=0;a<i.w;a++)i.type[r][a]===n&&(t&&t.has(r*i.w+a)||s.push({gx:a,gy:r}));return s}function X0(i){let e=[];for(let t=0;t<i.h;t++)for(let n=0;n<i.w;n++)i.type[t][n]===et.CENTER&&e.push({gx:n,gy:t});return e}function kh(i,e){let t=X0(i);if(t.length===0)return e;let n=s=>Math.min(...t.map(r=>Math.abs(s.gx-r.gx)+Math.abs(s.gy-r.gy)));return[...e].sort((s,r)=>n(s)-n(r))}function vr(i,e,t){if(e<0||e>=i.w||t<0||t>=i.h)return!1;let n=i.type[t][e];return!(n===et.TREE||n===et.WATER||n===et.ROCK)}function q0(i,e,t,n){let s=[],r=i,a=e,o=t,l=n,c=Math.abs(o-r),h=Math.abs(l-a),u=r<o?1:-1,d=a<l?1:-1,p=c-h;for(;s.push({x:r,y:a}),!(r===o&&a===l);){let _=2*p;_>-h&&(p-=h,r+=u),_<c&&(p+=c,a+=d)}return s}function hs(i,e,t,n,s){let r=q0(e,t,n,s);for(let a=1;a<r.length-1;a++){let o=r[a];if(!vr(i,o.x,o.y))return!1}return!0}function ka(i,e,t,n,s,r){let a=(u,d)=>d*i.w+u,o=new Map;o.set(a(e,t),0);let l=[{x:e,y:t,d:0}],c=[[0,1],[0,-1],[1,0],[-1,0]],h=s!=null&&r!=null;for(;l.length;){let{x:u,y:d,d:p}=l.shift();if(!(p>=n))for(let[_,v]of c){let m=u+_,f=d+v;if(!vr(i,m,f))continue;if(h){let w=s.find(F=>F.hp>0&&F.x===m&&F.y===f);if(w&&w.player!==r.player)continue}let b=a(m,f);if(o.has(b))continue;let y=p+1;o.set(b,y),l.push({x:m,y:f,d:y})}}return o}function Vh(i,e,t,n){let s=new Map;for(let r=0;r<i.h;r++)for(let a=0;a<i.w;a++){let o=Math.abs(a-e)+Math.abs(r-t);o>=1&&o<=n&&s.set(r*i.w+a,o)}return s}function Xi(i,e,t,n,s,r,a){if(e===n&&t===s)return[{x:e,y:t}];let o=(d,p)=>p*i.w+d,l=new Map,c=[{x:e,y:t}];l.set(o(e,t),null);let h=[[0,1],[0,-1],[1,0],[-1,0]];function u(d,p){if(!vr(i,d,p))return!1;let _=r.find(v=>v.hp>0&&v.x===d&&v.y===p);return _?_.id===a.id||_.player===a.player:!0}for(;c.length;){let{x:d,y:p}=c.shift();if(d===n&&p===s){let _=[],v={x:n,y:s};for(;v;)_.unshift(v),v=l.get(o(v.x,v.y));return _}for(let[_,v]of h){let m=d+_,f=p+v,b=o(m,f);l.has(b)||u(m,f)&&(l.set(b,{x:d,y:p}),c.push({x:m,y:f}))}}return null}var Gh={[et.PATH]:2976557,[et.GRASS]:2968109,[et.TREE]:1719578,[et.WATER]:1722986,[et.ROCK]:4872778,[et.BASE_TOP]:8014410,[et.BASE_BOTTOM]:4872826,[et.CENTER]:13940810};function Wh(i){return i.w*vt/2}function Xh(i){return i.h*vt/2}function qh(i){let e=document.createElement("canvas");e.width=i,e.height=i;let t=e.getContext("2d"),n=t.createImageData(i,i),s=n.data;for(let a=0;a<s.length;a+=4){let o=Math.floor(128+(Math.random()-.5)*80);s[a]=s[a+1]=s[a+2]=o,s[a+3]=255}t.putImageData(n,0,0);let r=new Sa(e);return r.wrapS=r.wrapT=ar,r.repeat.set(4,4),r.needsUpdate=!0,r}function Y0(i){let e=new $n,t=Wh(i),n=Xh(i),s=new wn(vt,Dn,vt),r=qh(64),a=.88,o=.02,l=[];function c(h,u,d,p,_){let v=new Ln({color:3828266,roughness:.9});v.bumpMap=r,v.bumpScale=.12;for(let m=0;m<p;m++){let f=.08+Math.random()*_,b=.03+Math.random()*.03,y=new ot(new Vi(b*.5,b,f,6),v);y.position.set(h+(Math.random()-.5)*.5,d+f/2,u+(Math.random()-.5)*.5),y.rotation.x=(Math.random()-.5)*.2,y.rotation.z=(Math.random()-.5)*.2,y.castShadow=!0,e.add(y)}}for(let h=0;h<i.h;h++)for(let u=0;u<i.w;u++){let d=i.type[h][u],p=i.height[h][u],_=Gh[d],v=Dn+p*.35,m=v/2+Dn/2,f=new Ln({roughness:Math.max(.7,Math.min(1,a+(Math.random()-.5)*.18)),metalness:Math.max(0,Math.min(.1,o+(Math.random()-.5)*.04))}),b=(_>>16&255)/255,y=(_>>8&255)/255,w=(_&255)/255,F=b,I=y,L=w;if(d===et.PATH||d===et.TREE||d===et.ROCK){let V=Math.random()*.45;F=b*(1-V)+.42*V,I=y*(1-V)+.26*V,L=w*(1-V)+.14*V}let Y=1+(Math.random()-.5)*.12;f.color.setRGB(Math.min(1,F*Y),Math.min(1,I*Y),Math.min(1,L*Y)),f.bumpMap=r,f.bumpScale=.12;let S=new ot(s,f);S.position.set(u*vt-t+vt/2,v/2,h*vt-n+vt/2),S.castShadow=!0,S.receiveShadow=!0,S.userData={gx:u,gy:h,type:d},e.add(S);let T=u*vt-t+vt/2,D=h*vt-n+vt/2;if(d===et.TREE){let U=new $n;U.position.set(T,m,D),U.userData.swayPhase=Math.random()*Math.PI*2;let q=u===0||u===i.w-1||h===0||h===i.h-1,P=q?.75+Math.random()*.35:.5+Math.random()*.2,V=new Ln({color:4007959,roughness:.95});V.bumpMap=r,V.bumpScale=.15;let N=new ot(new Vi(.12,.14,P,8),V);N.position.set(0,P/2,0),N.castShadow=!0,U.add(N);let ie=r.clone();ie.repeat.set(3,3);let X=new Ln({color:2972205,roughness:.9});if(X.bumpMap=ie,X.bumpScale=.22,Math.random()<.5){let te=q?.52:.45,ce=q?1.05:.9,me=.12,j=ce*.5,he=ce*.45,Ce=ce*.4,He=new ot(new Gi(te,j,8),X);He.position.set(0,P+j/2,0),He.castShadow=!0,U.add(He);let ze=new ot(new Gi(te*.75,he,8),X);ze.position.set(0,P+j-me+he/2,0),ze.castShadow=!0,U.add(ze);let Je=new ot(new Gi(te*.5,Ce,8),X);Je.position.set(0,P+j-me+he-me+Ce/2,0),Je.castShadow=!0,U.add(Je)}else{let te=P-.25,ce=6+Math.floor(Math.random()*3);for(let me=0;me<ce;me++){let j=.14+Math.random()*.22,he=(Math.random()-.5)*.5,Ce=(Math.random()-.5)*.5,He=Math.random()*.4,ze=new ot(new Wi(j,8,6),X);ze.position.set(he,te+He+j*.5,Ce),ze.castShadow=!0,U.add(ze)}}e.add(U),l.push(U),c(T,D,m,4,.14)}else if(d===et.WATER){let U=Gh[et.WATER],q=(U>>16&255)/255,P=(U>>8&255)/255,V=(U&255)/255,N=1+(Math.random()-.5)*.18,ie=new Ln({color:new Tt().setRGB(Math.min(1,q*N),Math.min(1,P*N),Math.min(1,V*N)),roughness:.2,metalness:.3,transparent:!0,opacity:.92,bumpMap:r,bumpScale:.06}),X=new ot(new In(vt,vt),ie);X.rotation.x=-Math.PI/2,X.position.set(T,m+.02,D),X.receiveShadow=!0,e.add(X)}else if(d===et.ROCK){let U=new Ln({color:6974058,roughness:.9});U.bumpMap=r,U.bumpScale=.2;let q=(ie,X,ee)=>{let te=new ot(new Aa(ie,0),U);te.position.set(T+X,m+ie-.2,D+ee),te.rotation.set(Math.random(),Math.random(),Math.random()),te.castShadow=!0,e.add(te)},P=.32+Math.random()*.14,V=.2+Math.random()*.12,N=.12+Math.random()*.12;q(P,(Math.random()-.5)*.15,(Math.random()-.5)*.15),q(V,(Math.random()-.5)*.25,(Math.random()-.5)*.25),q(N,(Math.random()-.5)*.28,(Math.random()-.5)*.28),c(T,D,m,4,.14)}}return e.userData.treeGroups=l,e}function $0(){let i=document.querySelector("#mode-select-overlay .mode-select-instructions");i&&console.log(i.textContent.trim());let e=G0(),t=document.getElementById("canvas-wrap"),n=new Ma;n.background=new Tt(1711652),n.fog=new va(1711652,30,90);let s=e.w*vt/2,r=e.h*vt/2,a=new Pn(50,t.clientWidth/t.clientHeight,.1,200),o=20,l=new z(12,38,16).normalize().multiplyScalar(o),c=new z,h=new z,u=new ti(new z(0,1,0),0),d=new z,p=new z,_=!1,v=!1,m=!1,f=null,b=5,y=.004,w=-Math.PI*.4,F=Math.PI*.4,I=new z,L={x:0,y:0},Y=1,S=40,T=.08,D=.15,U=null,q=new Ia(16777215,.45);n.add(q);let P=new Pa(16774630,1.1);P.position.set(30,50,20),P.castShadow=!0,P.shadow.mapSize.width=2048,P.shadow.mapSize.height=2048,P.shadow.camera.near=1,P.shadow.camera.far=120,P.shadow.camera.left=-50,P.shadow.camera.right=50,P.shadow.camera.top=50,P.shadow.camera.bottom=-50,n.add(P);let V=Y0(e);n.add(V);let N=[],ie=1,X=new Map,ee=qh(64),te=Wh(e),ce=Xh(e);function me(x,g){let R=(Dn+e.height[g][x]*.35)/2+Dn/2;return new z(x*vt-te+vt/2,R,g*vt-ce+vt/2)}function j(x,g){let C=(x>>16&255)/255,R=(x>>8&255)/255,B=(x&255)/255,H=1+(Math.random()-.5)*g;return new Tt(Math.min(1,C*H),Math.min(1,R*H),Math.min(1,B*H))}function he(x,g,C){let R=za[g]||za.knight,B=j(R.primary,.08),H=j(R.secondary,.08),W=Si[g]&&Si[g].gender||"male",k=C??4006676,ne=j(R.skin!=null?R.skin:15250592,.06),re=j(k,.08),pe=()=>(Math.random()-.5)*.08,Ue=()=>(Math.random()-.5)*.04,fe=new Ln({color:B,metalness:Math.max(0,.25+Ue()),roughness:Math.max(.3,Math.min(1,.5+pe()))});fe.bumpMap=ee,fe.bumpScale=.1;let ye=new Ln({color:H,metalness:Math.max(0,.2+Ue()),roughness:Math.max(.3,Math.min(1,.55+pe()))});ye.bumpMap=ee,ye.bumpScale=.1;let ke=new Ln({color:B,metalness:Math.max(0,.25+Ue()),roughness:Math.max(.3,Math.min(1,.5+pe()))});ke.bumpMap=ee,ke.bumpScale=.1;let bt=new Ln({color:ne,metalness:.1,roughness:Math.max(.5,Math.min(1,.7+pe()))});bt.bumpMap=ee,bt.bumpScale=.05;let At=new $n,Pt=.28,Xt=.08,$t=.08,on=new ot(new wn(Xt,Pt,$t),ye);on.position.set(-.06,Pt/2,0),on.castShadow=!0,At.add(on);let en=new ot(new wn(Xt,Pt,$t),ye);en.position.set(.06,Pt/2,0),en.castShadow=!0,At.add(en);let zt=.28,Rt=.2,Ht=.12,yt=new ot(new wn(Rt,zt,Ht),fe);yt.position.set(0,Pt+zt/2,0),yt.castShadow=!0,At.add(yt);let Zt=.06,vn=.22,mn=.06,Kt=new ot(new wn(Zt,vn,mn),ke);Kt.position.set(-(Rt/2+Zt/2),Pt+zt-.08,0),Kt.castShadow=!0,At.add(Kt);let Bn=new ot(new wn(Zt,vn,mn),ke);if(Bn.position.set(Rt/2+Zt/2,Pt+zt-.08,0),Bn.castShadow=!0,At.add(Bn),R.cape!=null){let rt=Rt*1.35,Ne=Pt+zt*.15,We=new In(rt,Ne),ft=new Ln({color:j(R.cape,.08),metalness:.15,roughness:Math.max(.5,Math.min(1,.8+pe())),side:nn});ft.bumpMap=ee,ft.bumpScale=.12;let Mn=new ot(We,ft);Mn.position.set(0,Pt+Ne/2-.02,-Ht/2-.02),Mn.rotation.y=Math.PI,Mn.castShadow=!0,At.add(Mn)}let se=.1,ue=new ot(new Wi(se,12,10),bt);ue.position.set(0,Pt+zt+se,0),ue.castShadow=!0,At.add(ue);let be=new Jt({color:1710638}),ae=new ot(new wn(.032,.004,.004),be);ae.position.set(-.032,.028,se*.92),ue.add(ae);let le=new ot(new wn(.032,.004,.004),be);le.position.set(.032,.028,se*.92),ue.add(le);let ve=new Jt({color:2957087}),Me=new ot(new wn(.045,.012,.008),ve);Me.position.set(0,-.028,se*.92),ue.add(Me);let Re=new Ln({color:re,metalness:.05,roughness:Math.max(.6,Math.min(1,.85+pe()))});if(Re.bumpMap=ee,Re.bumpScale=.15,W==="female"){let rt=new ot(new Wi(se*.85,10,8,0,Math.PI*2,0,Math.PI*.45),Re);rt.position.set(0,se*.35,-se*.2),rt.castShadow=!0,ue.add(rt);let Ne=new ot(new wn(se*1.1,se*2.2,se*.5),Re);Ne.position.set(0,-se*.6,-se*.95),Ne.castShadow=!0,ue.add(Ne)}else{let rt=new ot(new Wi(se*.82,10,8,0,Math.PI*2,0,Math.PI*.35),Re);rt.position.set(0,se*.5,-se*.15),rt.castShadow=!0,ue.add(rt)}return At.userData.leftLeg=on,At.userData.rightLeg=en,At.userData.leftArm=Kt,At.userData.rightArm=Bn,At}function Ce(x,g){let C=x.userData;if(!C.leftLeg)return;let R=g*Math.PI*2,B=.35,H=.28;C.leftLeg.rotation.x=Math.sin(R)*B,C.rightLeg.rotation.x=Math.sin(R+Math.PI)*B,C.leftArm.rotation.y=Math.sin(R+Math.PI)*H,C.rightArm.rotation.y=Math.sin(R)*H}function He(x){let g=x.userData;g.leftLeg&&(g.leftLeg.rotation.x=0,g.rightLeg.rotation.x=0,g.leftArm.rotation.y=0,g.rightArm.rotation.y=0)}function ze(x){let g=he(x.player,x.class,x.hairColor);g.position.copy(me(x.x,x.y)),g.castShadow=!0,g.userData.unitId=x.id;let C=.28,R=.28,B=.12,H=.18,W=.04,k=new In(H,W),ne=new Jt({color:6037528,side:nn,depthTest:!0,depthWrite:!1}),re=new ot(k,ne);re.position.set(0,C+R/2,B/2+.02),re.rotation.x=-Math.PI/2,re.rotation.z=Math.PI/4,re.visible=x.maxHp>0&&x.hp<x.maxHp&&x.hp>0,g.add(re),g.userData.slashMark=re,n.add(g),X.set(x.id,g),st(g,x.maxHp>0&&x.hp/x.maxHp<.35)}function Je(x){let g=X.get(x.id);!g||!g.userData.slashMark||(g.userData.slashMark.visible=x.maxHp>0&&x.hp<x.maxHp&&x.hp>0)}let pt=.35;function st(x,g){if(x)if(g){x.rotation.x=.35,x.scale.setScalar(.96);let C=x.userData;C&&C.leftArm&&C.rightArm&&(C.leftArm.rotation.y=.2,C.rightArm.rotation.y=.2),x.traverse(R=>{R.isMesh&&R.material&&R.material.color&&(R.userData.originalColor||(R.userData.originalColor=R.material.color.clone()),R.material.color.copy(R.userData.originalColor).multiplyScalar(.82))})}else{x.rotation.x=0,x.scale.setScalar(1);let C=x.userData;C&&C.leftArm&&C.rightArm&&(C.leftArm.rotation.y=0,C.rightArm.rotation.y=0),x.traverse(R=>{R.isMesh&&R.material&&R.userData.originalColor&&R.material.color.copy(R.userData.originalColor)})}}function wt(x){if(x.level>=3)return;let g=x.maxHp>0?x.hp/x.maxHp:1;x.level+=1;let C=B=>Math.max(1,Math.ceil(B*1.1)),R=B=>Math.max(1,Math.ceil(B*1.1));x.maxHp=C(x.maxHp),x.maxMp=C(x.maxMp),x.hp=Math.max(1,Math.min(x.maxHp,Math.ceil(g*x.maxHp))),x.mp=Math.max(1,Math.min(x.maxMp,Math.ceil(g*x.maxMp))),x.str=R(x.str),x.agi=R(x.agi),x.vit=R(x.vit),x.dex=R(x.dex),x.luk=R(x.luk),x.int=R(x.int),x.range>2&&(x.range=R(x.range)),console.log("[LEVEL UP]",`${x.name} (${x.class}, P${x.player})`,`\u2192 Lv.${x.level}`,`| HP ${x.hp}/${x.maxHp} MP ${x.mp}/${x.maxMp} STR ${x.str} VIT ${x.vit}`),Z(x)}function Z(x){let g=X.get(x.id),C=x.level===3?"levelup level3":x.level===2?"levelup level2":"levelup";if(lu(x,C),!g)return;let R=performance.now();function B(H){let W=H-R,k=Math.min(1,W/M),ne=k<.5?1+.35*(k/.5):1+.35*(1-(k-.5)/.5);g.scale.setScalar(ne),k<1?requestAnimationFrame(B):g.scale.setScalar(1)}requestAnimationFrame(B)}let fn=430,Qe=280,ct=.45,Ve=160,Ot=280,_t=350,A=500,M=600,$=!1,xe=new z,ge=new z,_e=new z,Xe=new z;function Pe(x=!1){let g=null;if(qe==="playing"&&de.length>0){let H=de[De];g=N.find(W=>W.id===H&&W.hp>0)}if(g||(g=N.find(H=>H.player===Oe&&H.hp>0)),!g)return;let C=a.position.distanceTo(c);if(C<.1&&(C=o),h.copy(a.position).sub(c).normalize(),h.lengthSq()<.01&&h.copy(l).normalize(),_e.copy(me(g.x,g.y)),Xe.copy(_e).add(h.clone().multiplyScalar(C)),x||$){c.copy(_e),a.position.copy(Xe),a.lookAt(c);return}$=!0,xe.copy(c),ge.copy(a.position);let R=performance.now();function B(H){let W=Math.min(1,(H-R)/fn),k=W*(2-W);c.lerpVectors(xe,_e,k),a.position.lerpVectors(ge,Xe,k),a.lookAt(c),W<1?requestAnimationFrame(B):$=!1}requestAnimationFrame(B)}let Le=0,Oe=1,qe="draft",oe="pvp",Ct=new Set(Ba),ut=0,Ye=null,$e=new Set,de=[],De=0,tt=null,dt=new Map,xt=null;function Te(x){if(!x||x.hp<=0)return;xt=x.id;let g=document.getElementById("unit-preview-card"),C=document.getElementById("unit-preview-image"),R=document.getElementById("unit-preview-name"),B=document.getElementById("unit-preview-meta"),H=document.getElementById("unit-preview-stats");g.classList.remove("player-1","player-2"),g.classList.add(x.player===1?"player-1":"player-2"),g.classList.toggle("level-2",x.level>=2&&x.level<3),g.classList.toggle("level-3",x.level>=3),C.src=yr[x.class]||"",C.alt=x.name,R.textContent=x.name,B.textContent=`Lv.${x.level} ${x.class} \u2014 Player ${x.player}`,H.innerHTML=[["HP",`${x.hp}/${x.maxHp}`],["MP",`${x.mp}/${x.maxMp}`],["STR",Ie(x,"str")],["AGI",Ie(x,"agi")],["VIT",Ie(x,"vit")],["DEX",Ie(x,"dex")],["LUK",Ie(x,"luk")],["INT",Ie(x,"int")]].map(([k,ne])=>`<span class="stat-label">${k}</span><span class="stat-val${k==="HP"?" stat-val-hp":""}">${ne}</span>`).join("");let W=x.maxHp>0&&x.hp/x.maxHp<.3;g.classList.toggle("low-hp",W),g.style.display="block"}function O(){xt=null;let x=document.getElementById("unit-preview-card");x.classList.remove("low-hp","level-2","level-3"),x.style.display="none"}let Se=!1,Ee=!1,Ke=!1,Be=null,nt=!1,mt=!1,Dt=!1,It=[],St=new $n;n.add(St);let Ut=[],xn=new $n;n.add(xn);let us=[],Va=vt,ds=.02,Mr=3368703,fs=13382451;function Sr(x,g){let C=x/2,R=C-g,B=new pr;B.moveTo(-C,-C),B.lineTo(C,-C),B.lineTo(C,C),B.lineTo(-C,C),B.lineTo(-C,-C);let H=new Vs;return H.moveTo(-R,-R),H.lineTo(R,-R),H.lineTo(R,R),H.lineTo(-R,R),H.lineTo(-R,-R),B.holes.push(H),new Ra(B)}let br=Sr(Va,ds);function hi(x=null){for(us.forEach(g=>g.dispose()),us.length=0;xn.children.length;){let g=xn.children[0];xn.remove(g)}N.filter(g=>g.hp>0&&g.id!==x).forEach(g=>{let C=g.x,R=g.y,H=(Dn+e.height[R][C]*.35)/2+Dn/2,W=C*vt-te+vt/2,k=R*vt-ce+vt/2,ne=H+.02,re=g.player===1?Mr:fs,pe=new Jt({color:re,side:nn}),Ue=new ot(br,pe);Ue.rotation.x=-Math.PI/2,Ue.position.set(W,ne,k),xn.add(Ue),us.push(pe)})}let Ga=1.15,Fn=(()=>{let x=new ot(new Gi(.1,.25,8),new Jt({color:16768324}));return x.rotation.x=Math.PI,x.visible=!1,n.add(x),x})();function E(){if(qe!=="playing"||de.length===0||Dt){Fn.visible=!1,Fn.removeFromParent(),n.add(Fn);return}let x=de[De],g=N.find(R=>R.id===x);if(!g||g.hp<=0){Fn.visible=!1,Fn.removeFromParent(),n.add(Fn);return}let C=X.get(x);if(!C){Fn.visible=!1;return}Fn.removeFromParent(),C.add(Fn),Fn.position.set(0,Ga,0),Fn.visible=!0}function G(x){let g=[[0,1],[0,-1],[1,0],[-1,0]],C=[];for(let[R,B]of g){let H=x.x+R,W=x.y+B;!vr(e,H,W)||N.some(ne=>ne.id!==x.id&&ne.x===H&&ne.y===W&&ne.hp>0)||C.push(Math.atan2(R,B))}return C}function J(x){if(It.length===0)return x;if(It.length===1)return It[0];let g=It[0],C=Math.abs(Q(x-g));for(let R=1;R<It.length;R++){let B=Math.abs(Q(x-It[R]));B<C&&(C=B,g=It[R])}return g}function Q(x){for(;x>Math.PI;)x-=2*Math.PI;for(;x<-Math.PI;)x+=2*Math.PI;return x}let K=1.2,Ae=(()=>{let x=new ot(new Gi(.12,.35,8),new Jt({color:4500223}));return x.rotation.x=-Math.PI/2,x.visible=!1,n.add(x),x})();function Ze(x,g){if(!Dt||de.length===0||It.length===0)return;let C=de[De],R=N.find(Ue=>Ue.id===C),B=X.get(C);if(!R||!B)return;Tr(x,g),Ti.setFromCamera(wi,a);let H=Ti.intersectObjects(V.children,!0);if(H.length===0)return;let W=me(R.x,R.y),k=H[0].point,ne=k.x-W.x,re=k.z-W.z;if(ne*ne+re*re<1e-6)return;let pe=Math.atan2(ne,re);B.rotation.y=J(pe)}function it(){if(de.length===0)return;let x=de[De],g=N.find(B=>B.id===x),C=X.get(x);if(!g||!C)return;It=[[0,1],[0,-1],[1,0],[-1,0]].map(([B,H])=>Math.atan2(B,H)),Ae.removeFromParent(),C.add(Ae),Ae.position.set(0,K,0),Ae.rotation.x=-Math.PI/2,Ae.rotation.y=0,Ae.rotation.z=Math.PI,Ae.visible=!0,C.rotation.y=It[0]}function lt(){Ae.visible=!1,Ae.removeFromParent(),n.add(Ae)}let gt=(()=>{let x=Fa,g=[1];for(let C=0;C<Math.floor((x-1)/2);C++)g.push(2,2,1,1);return x%2===1?g.push(2):(g.push(2,2),g.push(1)),g})();function je(){return gt[ut]}function ht(){let x=je(),g=0;for(let C=0;C<ut;C++)gt[C]===x&&g++;return g+1}function Ft(){qe="draft",ut=0,Ct=new Set(Ba),Ye=null,$e.clear(),Qt(),Yt(),document.getElementById("turn-menu").style.display="none",document.getElementById("draft-panel").style.display="flex"}function An(){for(qe="playing",Le=0,de=N.slice().sort((C,R)=>R.agi!==C.agi?R.agi-C.agi:R.dex-C.dex).map(C=>C.id),De=0;De<de.length&&N.find(C=>C.id===de[De]).hp<=0;)De++;De>=de.length&&(De=0);let x=N.find(C=>C.id===de[De]);Oe=x?x.player:1,nt=!1,mt=!1,tt=de[De],document.getElementById("draft-panel").style.display="none",document.getElementById("turn-menu").style.display="flex";let g=document.getElementById("draft-placement-card");g&&(g.style.display="none",g.innerHTML=""),Qt(),hi(),Ge(),E(),Pe(!0)}function Yt(){let x=document.getElementById("draft-panel"),g=document.getElementById("draft-title"),C=document.getElementById("draft-classes"),R=document.getElementById("draft-message"),B=document.getElementById("turn-player"),H=document.getElementById("draft-placement-card");if(Ye){x.style.display="none",B.textContent=`Draft: Player ${je()} \u2014 place ${Si[Ye].name}`;let k=je();H.style.display="flex",H.classList.remove("player-1","player-2"),H.classList.add("player-"+k),H.style.left=k===1?"24px":"",H.style.right=k===2?"24px":"";let ne=[...N.filter(Ue=>Ue.player===k).map(Ue=>Ue.class),Ye],re=(Ue,fe)=>{let ye=Si[Ue];return`
        <div class="draft-class-card${fe?" draft-class-card-current":""}">
          <img class="draft-class-card-image" src="${yr[Ue]||""}" alt="${ye.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="draft-class-card-body">
            <div class="draft-class-card-name">${ye.name}</div>
            <div class="draft-class-card-stats">
              <span class="draft-stat-label">HP</span><span class="draft-stat-value">${ye.hp}</span>
              <span class="draft-stat-label">MP</span><span class="draft-stat-value">${ye.mp}</span>
              <span class="draft-stat-label">STR</span><span class="draft-stat-value">${ye.str}</span>
              <span class="draft-stat-label">AGI</span><span class="draft-stat-value">${ye.agi}</span>
              <span class="draft-stat-label">VIT</span><span class="draft-stat-value">${ye.vit}</span>
              <span class="draft-stat-label">DEX</span><span class="draft-stat-value">${ye.dex}</span>
              <span class="draft-stat-label">LUK</span><span class="draft-stat-value">${ye.luk}</span>
              <span class="draft-stat-label">INT</span><span class="draft-stat-value">${ye.int}</span>
              <span class="draft-stat-label">Range</span><span class="draft-stat-value">${ye.range}</span>
            </div>
          </div>
        </div>
      `},pe=3;if(ne.length>pe){H.classList.add("draft-placement-cols");let Ue=[];for(let ye=0;ye<ne.length;ye+=pe)Ue.push(ne.slice(ye,ye+pe));let fe=ne.length-1;H.innerHTML=Ue.map((ye,ke)=>{let bt=ke===Ue.length-1,At=ye.map((Pt,Xt)=>{let on=ke*pe+Xt===fe;return re(Pt,on)}).join("");return`<div class="draft-placement-col${bt?" draft-placement-col-current":""}">${At}</div>`}).join("")}else H.classList.remove("draft-placement-cols"),H.innerHTML=ne.map((Ue,fe)=>{let ye=fe===ne.length-1;return re(Ue,ye)}).join("");oe==="pvcpu"&&je()===2&&setTimeout(Yi,500),oe==="cvcpu"&&setTimeout(Yi,500);return}H.style.display="none",H.innerHTML="",qe==="draft"&&(x.style.display="flex");let W=je();g.textContent=`Player ${W}: Pick a class (${ht()}/${Fa})`,R.textContent="",C.innerHTML="",B.textContent=`Draft: Player ${W} \u2014 pick a class`,k0([...Ba]).forEach(k=>{let ne=Ct.has(k),re=Si[k],pe=document.createElement("button");pe.type="button",pe.className="draft-class-card"+(ne?"":" draft-class-card-selected"),pe.disabled=!ne,pe.innerHTML=`
          <img class="draft-class-card-image" src="${yr[k]||""}" alt="${re.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
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
        `,ne&&pe.addEventListener("click",()=>kn(k)),C.appendChild(pe)}),oe==="pvcpu"&&je()===2&&setTimeout(Yi,500),oe==="cvcpu"&&setTimeout(Yi,500)}function kn(x){if(!Ct.has(x)||Ye)return;Ye=x;let g=je(),C=new Set(N.map(H=>H.y*e.w+H.x)),R=W0(e,g,C),B=kh(e,R);$e=new Set(B.map(H=>H.gy*e.w+H.gx)),Qh(B),Yt()}function Bt(x,g){if(!Ye)return;let C=je(),R=g*e.w+x;if(!$e.has(R))return;let B=Si[Ye],H={id:ie++,player:C,x,y:g,level:1,name:B.name,class:Ye,hairColor:(za[Ye]||za.knight).hair,hp:B.hp,maxHp:B.maxHp,mp:B.mp,maxMp:B.maxMp,str:B.str,agi:B.agi,vit:B.vit,dex:B.dex,luk:B.luk,int:B.int,range:B.range};N.push(H),ze(H);let W=X.get(H.id);W&&(W.rotation.y=H.player===1?Math.PI:0),Ct.delete(Ye),Ye=null,$e.clear(),Qt();let k=document.getElementById("draft-placement-card");if(k&&(k.style.display="none",k.innerHTML=""),ut++,ut>=2*Fa){An();return}let ne=je(),re=ht(),pe=document.getElementById("draft-panel"),Ue=document.getElementById("draft-title"),fe=document.getElementById("draft-message"),ye=document.getElementById("draft-classes"),ke=document.getElementById("turn-player");pe&&Ue&&ye&&ke&&(pe.style.display="flex",Ue.textContent=`Player ${ne}: Pick a class (${re}/${Fa})`,fe&&(fe.textContent="Get ready\u2026"),ye.innerHTML="",ke.textContent=`Draft: Player ${ne} \u2014 pick a class`),setTimeout(Yt,1500)}function Ge(){qe==="playing"&&N.forEach(fe=>{if(fe.hp<=0)return;let ye=X.get(fe.id);ye&&st(ye,fe.maxHp>0&&fe.hp/fe.maxHp<pt)});let x=document.getElementById("turn-player"),g=document.getElementById("menu-label"),C=document.getElementById("turn-menu"),R=document.getElementById("unit-info"),B=document.getElementById("unit-name"),H=document.getElementById("unit-level-class"),W=document.getElementById("unit-stats"),k=document.getElementById("unit-class-image");if(C.classList.remove("player-1","player-2"),C.classList.add(Oe===1?"player-1":"player-2"),C.classList.toggle("level-2",!1),C.classList.toggle("level-3",!1),qe==="playing"&&de.length>0){let fe=de[De];N.find(ke=>ke.id===fe&&ke.hp>0)&&(tt==null||!N.find(ke=>ke.id===tt&&ke.hp>0))&&(tt=fe)}if(tt!=null){let fe=N.find(ye=>ye.id===tt);if(fe&&fe.hp>0){R.classList.remove("no-unit");let ye=fe.maxHp>0&&fe.hp/fe.maxHp<.25;C.classList.toggle("low-hp",ye),C.classList.toggle("level-2",fe.level>=2&&fe.level<3),C.classList.toggle("level-3",fe.level>=3),B.textContent=fe.name,H.textContent=`Lv.${fe.level} ${fe.class}`,k.src=yr[fe.class]||"",k.alt=fe.name,W.innerHTML=[["HP",`${fe.hp}/${fe.maxHp}`],["MP",`${fe.mp}/${fe.maxMp}`],["STR",Ie(fe,"str")],["AGI",Ie(fe,"agi")],["VIT",Ie(fe,"vit")],["DEX",Ie(fe,"dex")],["LUK",Ie(fe,"luk")],["INT",Ie(fe,"int")]].map(([ke,bt])=>`<span>${ke}</span><span class="stat-val${ke==="HP"?" stat-val-hp":""}">${bt}</span>`).join("")}else C.classList.remove("low-hp","level-2","level-3"),R.classList.add("no-unit"),B.textContent="\u2014 Select a unit \u2014",H.textContent="",W.textContent="",k.src="",k.alt=""}else C.classList.remove("low-hp","level-2","level-3"),R.classList.add("no-unit"),B.textContent="\u2014 Select a unit \u2014",H.textContent="",W.textContent="",k.src="",k.alt="";if(tt!=null)x.textContent=`Player ${Oe} \u2014 Unit ${B.innerHTML} active`;else{let fe=de.length?N.find(ye=>ye.id===de[De]):null;x.textContent=fe?`${fe.name} (Player ${Oe})`:`Player ${Oe}`}g.textContent=`Player ${Oe}`;let ne=document.getElementById("btn-attack"),re=document.getElementById("btn-skill"),pe=document.getElementById("btn-spell"),Ue=document.getElementById("btn-end");if(oe==="cvcpu"&&qe==="playing")ne.disabled=!0,re.disabled=!0,pe.disabled=!0,Ue&&(Ue.disabled=!0),x.textContent=`Player ${Oe} (CPU)`;else if(Dt)ne.disabled=!0,re.disabled=!0,pe.disabled=!0,x.textContent="Click on map to choose facing direction";else if(qe==="playing"){ne.disabled=mt;let fe=de.length?de[De]:null,ye=fe?N.find(At=>At.id===fe&&At.hp>0):null,ke=oe!=="cvcpu"&&(oe!=="pvcpu"||Oe===1),bt=ke&&ye&&!mt?Er(ye):[];re.disabled=mt||!ke||bt.length===0,pe.disabled=!1,Ue&&(Ue.disabled=!1)}if(qe==="playing"){let fe=Math.min(Le+1,cs);x.textContent=(x.textContent||"")+` \u2014 Turn ${fe}/${cs}`;let ye=document.getElementById("turns-left"),ke=document.getElementById("turns-left-value");if(ye&&ke){ye.style.display="";let bt=Math.max(0,cs-Le);ke.textContent=String(bt),ye.classList.toggle("turns-left-low",bt<=10)}}else{let fe=document.getElementById("turns-left");fe&&(fe.style.display="none")}qe==="playing"&&yn(Oe)&&!Se&&setTimeout(jt,700)}function Vt(){O(),Ee=!1,Ke=!1,Be=null,Dt=!1,It=[],lt(),Qt();let x=de.length;if(x===0)return;let g=de[De],C=N.find(W=>W.id===g);if(C&&C.tempDebuff&&C.tempDebuff.duration--,C&&C.tempDebuff&&C.tempDebuff.duration<=0&&(C.tempDebuff=void 0),C&&C.tempBuff&&C.tempBuff.duration--,C&&C.tempBuff&&C.tempBuff.duration<=0&&(C.tempBuff=void 0),C&&C.hp>0){let W=Math.ceil(Ie(C,"int")*.15);C.mp=Math.min(C.maxMp,C.mp+W)}if(C&&C.hp>0){let W=C.x,k=C.y;e.type[k][W]===et.CENTER&&C.level===1&&wt(C);let ne=C.player===1?et.BASE_TOP:et.BASE_BOTTOM;e.type[k][W]===ne&&C.level===2&&wt(C)}if(Le++,Le>=cs){cu();return}let R=(De+1)%x,B=0;for(;B<x;){let W=de[R],k=N.find(ne=>ne.id===W);if(k&&k.hp>0)break;R=(R+1)%x,B++}De=R;let H=N.find(W=>W.id===de[De]);Oe=H?H.player:1,nt=!1,mt=!1,tt=de[De],Ge(),E(),Pe()}document.getElementById("btn-attack").addEventListener("click",()=>{if(Se||mt||qe!=="playing"||de.length===0)return;O();let x=de[De],g=N.find(B=>B.id===x);if(!g||g.hp<=0)return;let C=g.range!=null?g.range:1;tt=x,Ee=!0;let R=Vh(e,g.x,g.y,C);dt=new Map,R.forEach((B,H)=>{let W=H%e.w,k=Math.floor(H/e.w);hs(e,g.x,g.y,W,k)&&dt.set(H,B)}),eu(dt),Ge()}),document.getElementById("btn-skill").addEventListener("click",x=>{if(x.preventDefault(),x.stopPropagation(),Se||mt)return;let g=de[De],C=g?N.find(k=>k.id===g&&k.hp>0):null;if(!C||C.player!==Oe)return;let R=document.getElementById("skill-list-overlay"),B=document.getElementById("btn-skill");if(!B)return;if(R&&R.style.display==="block"){R.style.display="none";return}let H=Er(C),W=B.getBoundingClientRect();R||(R=document.createElement("div"),R.id="skill-list-overlay",R.className="skill-list-overlay",R.setAttribute("aria-hidden","true"),document.body.appendChild(R)),R.style.left=`${W.left}px`,R.style.top=`${W.top-4}px`,R.style.transform="translateY(-100%)",R.style.right="auto",R.style.bottom="auto",R.style.display="none",H.length===0?R.innerHTML='<div class="skill-option" style="cursor:default;color:#8b949e;">No skills available</div>':(R.innerHTML=H.map((k,ne)=>(console.log({skill:k}),`<button type="button" class="skill-option" data-skill-index="${ne}" ${C.mp<k.cost||C.hp<k.hpCost||C.level<k.level?"disabled":""}>
          <span class="skill-name">${k.name}</span> <span class="skill-meta">${k.cost} MP \xB7 Lv.${k.level}</span><br/>
          <span class="skill-meta">${k.description}</span>
        </button>`)).join(""),R.querySelectorAll(".skill-option").forEach((k,ne)=>{k.addEventListener("click",re=>{re.preventDefault(),re.stopPropagation();let pe=H[ne];if(Be=pe,R.style.display="none",R.setAttribute("aria-hidden","true"),pe.target==="self"){if(C.mp<pe.cost)return;C.mp-=pe.cost,mt=!0,Wa(C,C,pe,{showFloatingCombatText:Wn,handleUnitDeath:pn,updateUnitSlashVisibility:Je,updateTurnUI:Ge},()=>{Qt(),Ke=!1,Be=null,Zs=new Set,nt?Vt():Ge()}),Ge();return}Ke=!0,Ee=!1,jh(C,pe),Ge()})})),requestAnimationFrame(()=>{R.style.display="block",R.style.visibility="visible",R.setAttribute("aria-hidden","false")})}),document.addEventListener("click",x=>{let g=document.getElementById("skill-list-overlay"),C=document.getElementById("btn-skill"),R=document.querySelector(".skill-wrap");!g||g.style.display!=="block"||R&&R.contains(x.target)||g.contains(x.target)||(g.style.display="none",g.setAttribute("aria-hidden","true"))}),document.getElementById("btn-spell").addEventListener("click",()=>{}),document.getElementById("btn-end").addEventListener("click",()=>{if(Se||Dt||qe!=="playing"||de.length===0)return;let x=de[De],g=N.find(R=>R.id===x);if(!g||g.hp<=0)return;Dt=!0,tt=null,Ee=!1,dt=new Map,Qt(),it(),E();let C=document.getElementById("turn-player");C.textContent="Click on map to choose facing direction",Ge()}),c.set(0,8,0),a.position.copy(c).add(l),a.lookAt(c);let Nt=document.getElementById("mode-select-overlay"),ai=document.getElementById("mode-pvp"),qs=document.getElementById("mode-pvcpu"),ui=document.getElementById("mode-cvcpu"),Vn=new Audio;Vn.loop=!0,Vn.volume=.3,Vn.preload="auto";let rn=window.location.href.replace(/[^/]*$/,""),oi=typeof window.TACTICS_BGM_URL<"u"?window.TACTICS_BGM_URL:rn+(rn.includes("/src/")?"../assets/music/tavern.mp3":"assets/music/tavern.mp3");Vn.src=oi,Vn.addEventListener("error",()=>{let x=rn+"assets/music/tavern.mp3";x!==oi&&(Vn.src=x)});function qi(){Vn.paused&&Vn.play().catch(()=>{})}Nt&&ai&&qs?(ai.addEventListener("click",()=>{qi(),oe="pvp",Nt.classList.add("hidden"),Ft()}),qs.addEventListener("click",()=>{qi(),oe="pvcpu",Nt.classList.add("hidden"),Ft()}),ui&&(H0?ui.addEventListener("click",()=>{qi(),oe="cvcpu",Nt.classList.add("hidden"),Ft()}):ui.style.display="none")):Ft();function yn(x){return oe==="pvcpu"&&x===2||oe==="cvcpu"}function Ys(){let x=Ba.filter(B=>Ct.has(B));if(x.length===0)return null;let g=["hp","maxHp","mp","str","agi","vit","dex","luk","int"];function C(B){let H=Si[B];if(!H)return 1/0;let W=g.map(ne=>H[ne]??0),k=W.reduce((ne,re)=>ne+re,0)/W.length;return W.reduce((ne,re)=>ne+(re-k)**2,0)/W.length}return[...x].sort((B,H)=>{let W=Si[B]?.hp??0,k=Si[H]?.hp??0;return k!==W?k-W:C(B)-C(H)})[0]??null}function Yi(){if(qe!=="draft"||!yn(je()))return;if(!Ye){let C=Ys();C&&kn(C),setTimeout(Yi,500);return}let x=Array.from($e).map(C=>({gx:C%e.w,gy:Math.floor(C/e.w)})),g=kh(e,x);if(g.length>0){let{gx:C,gy:R}=g[0];Bt(C,R)}}function $s(){let x=[];for(let g=0;g<e.h;g++)for(let C=0;C<e.w;C++)e.type[g][C]===et.CENTER&&x.push({gx:C,gy:g});return x}function Yh(x){let g=[],C=x===1?et.BASE_TOP:et.BASE_BOTTOM;for(let R=0;R<e.h;R++)for(let B=0;B<e.w;B++)e.type[R][B]===C&&g.push({gx:B,gy:R});return g}function Gn(x,g,C,R){return Math.abs(x-C)+Math.abs(g-R)}function $h(x){let g=x.range!=null?x.range:1,C=[];for(let R of N){if(R.hp<=0||R.player===x.player)continue;let B=Gn(x.x,x.y,R.x,R.y);B<=g&&B>0&&hs(e,x.x,x.y,R.x,R.y)&&C.push({target:R,dist:B})}return C}function Zh(x){let g=N.filter(C=>C.hp>0&&C.player===x.player&&C.id!==x.id);for(let C of g){let R=N.filter(B=>B.hp>0&&B.player!==x.player);for(let B of R){let H=B.range!=null?B.range:1,W=Gn(B.x,B.y,C.x,C.y);if(W<=H&&W>0&&hs(e,B.x,B.y,C.x,C.y))return!0}}return!1}function Wt(x,g,C,R){let B=x.x,H=x.y,W=Xi(e,x.x,x.y,g,C,N,x);if(!W||W.length<=1){R&&R();return}tt=null,Qt(),Se=!0,hi(x.id);let k=X.get(x.id),ne=1;function re(){if(ne>=W.length){x.x=W[W.length-1].x,x.y=W[W.length-1].y,Se=!1,He(k),hi(),dt=new Map,nt=!0,R&&R();return}let pe=W[ne-1],Ue=W[ne],fe=me(pe.x,pe.y).clone(),ye=me(Ue.x,Ue.y).clone(),ke=ye.x-fe.x,bt=ye.z-fe.z;ke*ke+bt*bt>1e-6&&(k.rotation.y=Math.atan2(ke,bt));let At=performance.now();function Pt(Xt){let $t=Math.min(1,(Xt-At)/Hh),en=(zt=>zt*zt*(3-2*zt))($t);k.position.lerpVectors(fe,ye,en),Ce(k,en),$t<1?requestAnimationFrame(Pt):(ne++,re())}requestAnimationFrame(Pt)}re()}function Ll(x,g){let C=Ie(g,"agi")*.7+Ie(g,"luk")*.3,B=Math.random()*Math.max(.001,C)<=Ie(x,"dex"),H=0;if(B){let Rt=Ie(x,"str")*.7+Ie(x,"dex")*.2+Ie(x,"int")*.1-(Ie(g,"vit")*.3+Ie(g,"luk")*.2);H=Math.max(1,Math.floor(Rt))}mt=!0,tt=null,Ee=!1,Qt(),console.log("[ATTACK]",`${x.name} (${x.class}, P${x.player})`,"\u2192",`${g.name} (${g.class}, P${g.player})`,B?`${H} dmg`:"MISS",`| ${g.name} HP ${g.hp} \u2192 ${Math.max(0,g.hp-H)}/${g.maxHp}`);let W=X.get(x.id);if(!W||!W.userData.rightArm){B?(g.hp=Math.max(0,g.hp-H),Wn(g.x,g.y,String(H),!1),Je(g),g.hp<=0&&pn(g)):Wn(g.x,g.y,"MISS",!0),setTimeout(nt?()=>Vt():()=>Ge(),400);return}let k=me(x.x,x.y).clone(),ne=me(g.x,g.y).clone(),re=k.clone().lerp(ne,.35),pe=ne.x-k.x,Ue=ne.z-k.z;if(pe*pe+Ue*Ue>1e-6&&(W.rotation.y=Math.atan2(pe,Ue)),(x.range!=null?x.range:1)>2){let ve=function(Me){let Re=Me-le,rt=Math.min(1,Re/Ot);if(yt.position.lerpVectors(be,ae,rt),!Bn&&rt>=1&&(Bn=!0,n.remove(yt),Rt.dispose(),Ht.dispose(),B?(g.hp=Math.max(0,g.hp-H),Wn(g.x,g.y,String(H),!1),g.hp<=0&&(ue=!0),X.get(g.id)?se=Me:ue&&(pn(g),ue=!1),Je(g)):Wn(g.x,g.y,"MISS",!0)),se!=null&&B){let Ne=X.get(g.id);if(Ne){let We=Math.min(1,(Me-se)/Ve),ft=1-We;Ne.position.copy(vn).add(mn.clone().multiplyScalar(Kt*ft)),We>=1&&(Ne.position.copy(vn),se=null,ue&&(pn(g),ue=!1))}else se=null,ue&&(pn(g),ue=!1)}if(rt<1)requestAnimationFrame(ve);else{let Ne=se==null;Ne&&ue&&(pn(g),ue=!1),Ne?setTimeout(nt?()=>Vt():()=>Ge(),400):requestAnimationFrame(ve)}},Rt=new Vi(.035,.035,.4,6),Ht=new Jt({color:16763972}),yt=new ot(Rt,Ht);yt.position.copy(k),yt.position.y+=.6;let Zt=ne.clone().sub(k).normalize();yt.quaternion.setFromUnitVectors(new z(0,1,0),Zt),n.add(yt);let vn=me(g.x,g.y).clone(),mn=ne.clone().sub(k).normalize(),Kt=.4,Bn=!1,se=null,ue=!1,be=yt.position.clone(),ae=ne.clone();ae.y+=.6;let le=performance.now();requestAnimationFrame(ve);return}let ke=!1,bt=performance.now(),At=W.userData.rightArm,Pt=null,Xt=!1,$t=me(g.x,g.y).clone(),on=ne.clone().sub(k).normalize(),en=.4;function zt(Rt){let Ht=Rt-bt,yt=Math.min(1,Ht/Qe),Zt=yt<=.4?yt/.4:1,vn=yt>.4?(yt-.4)/.6:0;yt<=.4?W.position.lerpVectors(k,re,Zt):W.position.lerpVectors(re,k,vn);let mn=yt<=.35?yt/.35:yt<=.7?(.7-yt)/.35:0;if(At.rotation.y=-mn*1.1,!ke&&yt>=ct&&(ke=!0,B?(g.hp=Math.max(0,g.hp-H),Wn(g.x,g.y,String(H),!1),g.hp<=0&&(Xt=!0),Je(g),X.get(g.id)?Pt=Rt:Xt&&(pn(g),Xt=!1)):Wn(g.x,g.y,"MISS",!0)),Pt!=null&&B){let Kt=X.get(g.id);if(Kt){let Bn=Math.min(1,(Rt-Pt)/Ve),se=1-Bn;Kt.position.copy($t).add(on.clone().multiplyScalar(en*se)),Bn>=1&&(Kt.position.copy($t),Pt=null,Xt&&(pn(g),Xt=!1))}else Pt=null,Xt&&(pn(g),Xt=!1)}if(yt<1)requestAnimationFrame(zt);else{W.position.copy(k),At.rotation.y=0;let Kt=Pt==null;Kt&&Xt&&(pn(g),Xt=!1),Kt?setTimeout(nt?()=>Vt():()=>Ge(),400):requestAnimationFrame(zt)}}requestAnimationFrame(zt)}function Kh(x,g){let C=me(x,g);C.y+=.4;let R=new Wi(.1,12,12),B=new Jt({color:8930559,transparent:!0,opacity:.9}),H=new ot(R,B);H.position.copy(C),n.add(H);let W=performance.now();function k(ne){let re=ne-W,pe=Math.min(1,re/_t),Ue=pe*(2-pe);H.scale.setScalar(Ue*4.5),B.opacity=.9*(1-pe),pe<1?requestAnimationFrame(k):(n.remove(H),R.dispose(),B.dispose())}requestAnimationFrame(k)}function Wa(x,g,C,R,B){if(C.target==="enemy"&&g==null){R.updateTurnUI&&R.updateTurnUI(),B&&B();return}let W=(C.range??0)>2&&g!=null&&(g.x!==x.x||g.y!==x.y),k=!W&&g!=null&&(g.x!==x.x||g.y!==x.y);if(!W&&!k){Ha(C.effectKey,x,g,R),R.updateTurnUI&&R.updateTurnUI(),B&&B();return}if(k){let Me=function(Re){let rt=Re-ve,Ne=Math.min(1,rt/Qe),We=Ne<=.4?Ne/.4:1,ft=Ne>.4?(Ne-.4)/.6:0;Ne<=.4?Rt.position.lerpVectors(Ht,Zt,We):Rt.position.lerpVectors(Zt,Ht,ft);let Mn=Ne<=.35?Ne/.35:Ne<=.7?(.7-Ne)/.35:0;if(ue.rotation.y=-Mn*1.1,!be&&Ne>=ct&&(be=!0,Ha(C.effectKey,x,g,R),g.hp<=0&&(le=!0),R.updateUnitSlashVisibility&&R.updateUnitSlashVisibility(g),X.get(g.id)?ae=Re:le&&(pn(g),le=!1)),ae!=null){let at=X.get(g.id);if(at){let tn=Math.min(1,(Re-ae)/Ve),gn=1-tn;at.position.copy(Kt).add(Bn.clone().multiplyScalar(se*gn)),tn>=1&&(at.position.copy(Kt),ae=null,le&&(pn(g),le=!1))}else ae=null,le&&(pn(g),le=!1)}Ne<1?requestAnimationFrame(Me):(Rt.position.copy(Ht),ue.rotation.y=0,ae==null&&le&&(pn(g),le=!1),ae==null?(R.updateTurnUI&&R.updateTurnUI(),B&&B()):requestAnimationFrame(Me))},Rt=X.get(x.id);if(!Rt||!Rt.userData.rightArm){Ha(C.effectKey,x,g,R),R.updateUnitSlashVisibility&&R.updateUnitSlashVisibility(g),R.updateTurnUI&&R.updateTurnUI(),B&&B();return}let Ht=me(x.x,x.y).clone(),yt=me(g.x,g.y).clone(),Zt=Ht.clone().lerp(yt,.35),vn=yt.x-Ht.x,mn=yt.z-Ht.z;vn*vn+mn*mn>1e-6&&(Rt.rotation.y=Math.atan2(vn,mn));let Kt=me(g.x,g.y).clone(),Bn=yt.clone().sub(Ht).normalize(),se=.4,ue=Rt.userData.rightArm,be=!1,ae=null,le=!1,ve=performance.now();requestAnimationFrame(Me);return}let ne=me(x.x,x.y).clone(),re=me(g.x,g.y).clone(),pe=new Vi(.035,.035,.4,6),Ue=new Jt({color:16763972}),fe=new ot(pe,Ue);fe.position.copy(ne),fe.position.y+=.6;let ye=re.clone().sub(ne).normalize();fe.quaternion.setFromUnitVectors(new z(0,1,0),ye),n.add(fe);let ke=fe.position.clone(),bt=re.clone();bt.y+=.6;let At=performance.now(),Pt=me(g.x,g.y).clone(),Xt=re.clone().sub(ne).normalize(),$t=.4,on=!1,en=null;function zt(Rt){let Ht=Rt-At,yt=Math.min(1,Ht/Ot);if(fe.position.lerpVectors(ke,bt,yt),!on&&yt>=1&&(on=!0,n.remove(fe),pe.dispose(),Ue.dispose(),C.type==="spell"&&Kh(g.x,g.y),Ha(C.effectKey,x,g,R),X.get(g.id)&&g.hp>0&&(en=Rt),R.updateUnitSlashVisibility&&R.updateUnitSlashVisibility(g)),en!=null){let Zt=X.get(g.id);if(Zt){let vn=Math.min(1,(Rt-en)/Ve),mn=1-vn;Zt.position.copy(Pt).add(Xt.clone().multiplyScalar($t*mn)),vn>=1&&(Zt.position.copy(Pt),en=null)}else en=null}yt<1?requestAnimationFrame(zt):en==null?(R.updateTurnUI&&R.updateTurnUI(),B&&B()):requestAnimationFrame(zt)}requestAnimationFrame(zt)}function jt(){if(qe!=="playing"||!yn(Oe)||Se||de.length===0)return;let x=de[De],g=N.find(se=>se.id===x);if(!g||g.hp<=0)return;let C=ka(e,g.x,g.y,g.agi,N,g),R=[];C.forEach((se,ue)=>{if(se===0)return;let be=ue%e.w,ae=Math.floor(ue/e.w);N.some(ve=>ve.id!==g.id&&ve.x===be&&ve.y===ae&&ve.hp>0)||R.push({gx:be,gy:ae,dist:se})});let B=$h(g),H=$s(),W=Yh(g.player),k=.25,ne=.03,re=g.maxHp>0&&g.hp/g.maxHp<k,pe=g.maxHp>0&&g.hp/g.maxHp<ne,Ue=g.level===2,fe=se=>N.some(ue=>ue.hp>0&&ue.x===se.gx&&ue.y===se.gy&&ue.id!==g.id),ye=H.filter(se=>!fe(se)),ke=W.filter(se=>!fe(se)),bt=Er(g).filter(se=>g.mp>=se.cost&&se.target==="enemy"),At=bt.length>0?Math.max(...bt.map(se=>se.range||0)):0,Pt=Math.max(g.range!=null?g.range:1,At);function Xt(se,ue){if(ue.length===0)return null;let be=null,ae=1/0;for(let le of se){let ve=0;for(let Me of ue)ve+=Gn(le.gx,le.gy,Me.gx,Me.gy);ve<ae&&(ae=ve,be=le)}return be}function $t(se,ue){if(ue.length===0||se.length===0)return null;let be=null,ae=1/0;for(let le of se){let ve=Math.min(...ue.map(Me=>Gn(le.gx,le.gy,Me.gx,Me.gy)));ve<ae&&(ae=ve,be=le)}return be}function on(se,ue){let be=Pt,ae=[];for(let le of N){if(le.hp<=0||le.player===g.player)continue;let ve=Gn(se,ue,le.x,le.y);ve<=be&&ve>0&&hs(e,se,ue,le.x,le.y)&&ae.push({target:le,dist:ve})}return ae}let en=new Set(R.map(se=>se.gy*e.w+se.gx));function zt(se,ue){if(!se||se.length<=1)return null;let be=Math.min(ue,se.length-1);for(let ae=be;ae>=1;ae--){let le=se[ae],ve=le.y*e.w+le.x;if(en.has(ve))return{gx:le.x,gy:le.y}}return null}function Rt(se,ue){if(!se||se.length<=1)return null;let be=Math.min(ue,se.length-1);for(let ae=be;ae>=1;ae--){let le=se[ae];if(!N.some(Me=>Me.id!==g.id&&Me.hp>0&&Me.x===le.x&&Me.y===le.y))return{gx:le.x,gy:le.y}}return null}function Ht(se){let ue=null,be=null,ae=1/0;for(let le of se){let ve=Xi(e,g.x,g.y,le.gx,le.gy,N,g);ve&&ve.length>1&&ve.length<ae&&(ae=ve.length,ue=ve,be=le)}return ue&&be?{path:ue,target:be}:null}function yt(se){let ue=se??R;if(ue.length===0)return null;let be=N.filter(ve=>ve.hp>0&&ve.player!==g.player);if(be.length===0)return ue[0];let ae=null,le=-1;for(let ve of ue){let Me=Math.min(...be.map(Re=>Gn(ve.gx,ve.gy,Re.x,Re.y)));Me>le&&(le=Me,ae=ve)}return ae}function Zt(se){let ue=se??R;if(ue.length===0)return null;let be=N.filter(Re=>Re.hp>0&&Re.player!==g.player),ae=N.filter(Re=>Re.hp>0&&Re.player===g.player&&Re.id!==g.id);if(be.length===0)return ue[0];let le=g.maxHp>0&&g.hp/g.maxHp>=.6,ve=null,Me=-1/0;for(let Re of ue){let rt=Math.min(...be.map(ft=>Gn(Re.gx,Re.gy,ft.x,ft.y))),Ne=ae.length>0?Math.min(...ae.map(ft=>Gn(Re.gx,Re.gy,ft.x,ft.y))):999,We;le?We=Ne<rt?rt-1e3:rt:We=rt-Ne,We>Me&&(Me=We,ve=Re)}return ve}function vn(){let se=Pt,ue=N.filter(le=>le.hp>0&&le.player!==g.player);if(ue.length===0)return null;let be=null,ae=-1;for(let le of R){let ve=Math.min(...ue.map(Re=>Gn(le.gx,le.gy,Re.x,Re.y)));ue.some(Re=>Gn(le.gx,le.gy,Re.x,Re.y)<=se)&&ve>ae&&(ae=ve,be=le)}return be}if(mt){if(nt){Vt();return}if(cs-Le<=20&&H.length>0){let Me=H.some(Re=>Re.gx===g.x&&Re.gy===g.y);if(Me&&R.length>0){let Re=new Set(H.map(We=>We.gy*e.w+We.gx)),Ne=R.filter(We=>Re.has(We.gy*e.w+We.gx)).filter(We=>We.gx!==g.x||We.gy!==g.y);if(Ne.length>0){let We=yt(Ne);if(We&&(We.gx!==g.x||We.gy!==g.y)){Wt(g,We.gx,We.gy,()=>setTimeout(Vt,400));return}}Vt();return}if(Me){Vt();return}if(R.length>0){let Re=ye.length>0?ye:H,rt=Ht(Re),Ne=rt?Rt(rt.path,g.agi):null;if(Ne&&(Ne.gx!==g.x||Ne.gy!==g.y)){Wt(g,Ne.gx,Ne.gy,()=>setTimeout(Vt,400));return}let We=$t(R,Re);if(We&&(We.gx!==g.x||We.gy!==g.y)){Wt(g,We.gx,We.gy,()=>setTimeout(Vt,400));return}}Vt();return}let ue=new Set(H.map(Me=>Me.gy*e.w+Me.gx)),be=H.length>0?R.filter(Me=>ue.has(Me.gy*e.w+Me.gx)):null,ae=be!=null&&be.length>0?be:R,le=N.filter(Me=>Me.hp>0&&Me.player===g.player&&Me.id!==g.id),ve=null;if(ae.length>0&&le.length>0&&(ve=Zt(ae),ve)){let Me=Xi(e,g.x,g.y,ve.gx,ve.gy,N,g),Re=Me?Me.length-1:1/0;(!Me||Me.length<=1||Re>g.agi)&&(ve=yt(ae))}if(!ve&&ae.length>0&&(ve=yt(ae)),ve&&(ve.gx!==g.x||ve.gy!==g.y)){Wt(g,ve.gx,ve.gy,()=>setTimeout(Vt,400));return}Vt();return}if(pe&&cs-Le>20&&!nt&&R.length>0){let se=null,ue=1/0;for(let ae of R){let ve=on(ae.gx,ae.gy).filter(Me=>Me.target.maxHp>0&&Me.target.hp/Me.target.maxHp<k);if(ve.length>0){let Me=Math.min(...ve.map(Re=>Re.target.hp));Me<ue&&(ue=Me,se=ae)}}if(se){let ae=Xi(e,g.x,g.y,se.gx,se.gy,N,g),le=ae?zt(ae,g.agi):null;if(le&&(le.gx!==g.x||le.gy!==g.y)){Wt(g,le.gx,le.gy,()=>setTimeout(jt,600));return}}let be=yt();if(be&&(be.gx!==g.x||be.gy!==g.y)){Wt(g,be.gx,be.gy,()=>setTimeout(jt,600));return}Vt();return}if(!mt){let rt=function(at){return Xa(g,at,N).filter(gn=>gn.targetUnit!=null).map(gn=>gn.targetUnit)},se=Er(g),ue=g.maxHp>0?g.hp/g.maxHp:1,be=.35,ae=new Set(["arcaneBolt","feast","pierce","snipe","berserk","drain","shuriken","chokuto","bite","execute"]),le=new Set(["chakra"]),ve=new Set(["shieldWall","focus","bloodlust","iaido","howl"]),Me=new Set(["freeze","impale"]),Re=new Set(["dominate","mantra","weaken","cripple","hex","blind"]),Ne={showFloatingCombatText:Wn,handleUnitDeath:pn,updateUnitSlashVisibility:Je,updateTurnUI:Ge},We=null,ft=null;for(let at of se)if(ae.has(at.effectKey)){if(g.mp<at.cost||at.effectKey==="berserk"&&g.hp<g.maxHp*.2||at.effectKey==="shuriken"&&B.length>0)continue;let tn=rt(at);if(tn.length===0)continue;let gn=tn.filter(Ri=>Ri.maxHp>0&&Ri.hp/Ri.maxHp<be),Sn=(Ri,Ar)=>Ie(Ri,"int")-Ie(Ar,"int")||Ri.hp-Ar.hp,ps=(Ri,Ar)=>Ri.hp-Ar.hp,Ka=gn.length>0?at.type==="spell"?gn.sort(Sn)[0]:gn.sort(ps)[0]:at.type==="spell"?tn.sort(Sn)[0]:tn.sort(ps)[0];We=at,ft=Ka;break}if(!We&&ue<=.5){for(let at of se)if(!(g.mp<at.cost)&&le.has(at.effectKey)){let tn=Xa(g,at,N);if(tn.length>0){We=at,ft=at.target==="self"?g:tn[0].targetUnit||g;break}}}if(!We){for(let at of se)if(!(g.mp<at.cost)&&ve.has(at.effectKey)&&at.target==="self"&&!(g.tempBuff&&g.tempBuff.duration>0)){We=at,ft=g;break}}let Mn=B.some(at=>at.target.maxHp>0&&at.target.hp/at.target.maxHp<k);if(!We&&!Mn){for(let at of se)if(!(g.mp<at.cost)&&Re.has(at.effectKey)){let gn=rt(at).sort((Sn,ps)=>Sn.hp-ps.hp)[0];We=at,ft=gn;break}}if(!We&&!Mn){for(let at of se)if(!(g.mp<at.cost)&&Me.has(at.effectKey)){let gn=rt(at).filter(Sn=>!Sn.tempDebuff||Sn.tempDebuff.duration<=0);if(gn.length>0){let Sn=gn.sort((ps,Ka)=>ps.hp-Ka.hp)[0];We=at,ft=Sn;break}}}if(We&&ft){g.mp-=We.cost,mt=!0;let at=We.target==="self"?g:ft;Wa(g,at,We,Ne,()=>setTimeout(jt,600));return}}if(Zh(g)&&B.length>0){B.sort((ue,be)=>ue.target.hp-be.target.hp||ue.dist-be.dist);let se=B[0].target;Ll(g,se);return}if(B.length>0){B.sort((ue,be)=>ue.target.hp-be.target.hp||ue.dist-be.dist);let se=B[0].target;Ll(g,se);return}let mn=cs-Le;if(mn<=20&&H.length>0&&!nt&&R.length>0&&!H.some(ue=>ue.gx===g.x&&ue.gy===g.y)){let ue=ye.length>0?ye:H,be=Ht(ue),ae=be?be.path:null,le=(ft,Mn)=>Math.min(...H.map(at=>Gn(ft,Mn,at.gx,at.gy))),ve=le(g.x,g.y),Me=null,Re=-1,rt=k;for(let ft of R){if(le(ft.gx,ft.gy)>ve||on(ft.gx,ft.gy).filter(Sn=>Sn.target.maxHp>0&&Sn.target.hp/Sn.target.maxHp<rt).length===0)continue;let tn=ae?ae.findIndex(Sn=>Sn.x===ft.gx&&Sn.y===ft.gy):-1,gn=tn>=0?tn:0;gn>Re&&(Re=gn,Me=ft)}if(Me&&(Me.gx!==g.x||Me.gy!==g.y)){Wt(g,Me.gx,Me.gy,()=>setTimeout(jt,600));return}let Ne=be?Rt(be.path,g.agi):null;if(Ne&&(Ne.gx!==g.x||Ne.gy!==g.y)){Wt(g,Ne.gx,Ne.gy,()=>setTimeout(jt,600));return}let We=$t(R,ue);if(We&&(We.gx!==g.x||We.gy!==g.y)){Wt(g,We.gx,We.gy,()=>setTimeout(jt,600));return}}if(re&&R.length>0&&!nt){let se=null,ue=1/0;for(let be of R){let le=on(be.gx,be.gy).filter(ve=>ve.target.maxHp>0&&ve.target.hp/ve.target.maxHp<k);if(le.length>0){let ve=Math.min(...le.map(Me=>Me.target.hp));ve<ue&&(ue=ve,se=be)}}if(se){let be=Xi(e,g.x,g.y,se.gx,se.gy,N,g),ae=be?zt(be,g.agi):null;if(ae&&(ae.gx!==g.x||ae.gy!==g.y)){Wt(g,ae.gx,ae.gy,()=>setTimeout(jt,600));return}}if(mn>20&&Ue&&W.length>0&&!W.some(ae=>ae.gx===g.x&&ae.gy===g.y)){let ae=ke.length>0?ke:W,le=Ht(ae);if(le!=null&&le.path.length<=5){let Me=Rt(le.path,g.agi);if(Me&&(Me.gx!==g.x||Me.gy!==g.y)){Wt(g,Me.gx,Me.gy,()=>setTimeout(jt,600));return}let Re=$t(R,ae);if(Re&&(Re.gx!==g.x||Re.gy!==g.y)){Wt(g,Re.gx,Re.gy,()=>setTimeout(jt,600));return}}}if(mn>20){let be=yt();if(be&&Gn(g.x,g.y,be.gx,be.gy)>0){Wt(g,be.gx,be.gy,()=>setTimeout(jt,600));return}Vt();return}}if(mn<=10&&H.length>0&&!nt&&R.length>0&&!H.some(ue=>ue.gx===g.x&&ue.gy===g.y)){let ue=ye.length>0?ye:H,be=Ht(ue),ae=be?Rt(be.path,g.agi):null;if(ae&&(ae.gx!==g.x||ae.gy!==g.y)){Wt(g,ae.gx,ae.gy,()=>setTimeout(jt,600));return}let le=$t(R,ue);if(le&&(le.gx!==g.x||le.gy!==g.y)){Wt(g,le.gx,le.gy,()=>setTimeout(jt,600));return}}if(g.level===1&&H.length>0&&!nt&&!H.some(ue=>ue.gx===g.x&&ue.gy===g.y)&&R.length>0){let ue=ye.length>0?ye:H,be=Ht(ue),ae=be?Rt(be.path,g.agi):null;if(ae&&(ae.gx!==g.x||ae.gy!==g.y)){Wt(g,ae.gx,ae.gy,()=>setTimeout(jt,600));return}let le=$t(R,ue);if(le&&(le.gx!==g.x||le.gy!==g.y)){Wt(g,le.gx,le.gy,()=>setTimeout(jt,600));return}}if(Ue&&W.length>0&&!nt&&!W.some(ue=>ue.gx===g.x&&ue.gy===g.y)&&R.length>0){let be=N.filter(Ne=>Ne.hp>0&&Ne.player!==g.player).filter(Ne=>Ne.maxHp>0&&Ne.hp/Ne.maxHp<k),ae=null,le=1/0;for(let Ne of R){let ft=on(Ne.gx,Ne.gy).find(Mn=>be.some(at=>at.id===Mn.target.id));ft&&ft.target.hp<le&&(le=ft.target.hp,ae=Ne)}if(ae){let Ne=Xi(e,g.x,g.y,ae.gx,ae.gy,N,g),We=Ne?zt(Ne,g.agi):null;if(We&&(We.gx!==g.x||We.gy!==g.y)){Wt(g,We.gx,We.gy,()=>setTimeout(jt,600));return}}let ve=ke.length>0?ke:W,Me=Ht(ve),Re=Me?Rt(Me.path,g.agi):null;if(Re&&(Re.gx!==g.x||Re.gy!==g.y)){Wt(g,Re.gx,Re.gy,()=>setTimeout(jt,600));return}let rt=$t(R,ve);if(rt&&(rt.gx!==g.x||rt.gy!==g.y)){Wt(g,rt.gx,rt.gy,()=>setTimeout(jt,600));return}}let Kt=N.filter(se=>se.hp>0&&se.player!==g.player);if(g.level>=2&&Pt>=2&&Kt.length>0&&!nt&&R.length>0){let se=vn();if(se&&(se.gx!==g.x||se.gy!==g.y)){Wt(g,se.gx,se.gy,()=>setTimeout(jt,600));return}}if(Kt.length>0&&!nt&&R.length>0){let ue=function(ae,le){let ve=null;for(let Me=-se;Me<=se;Me++)for(let Re=-se;Re<=se;Re++){if(Re===0&&Me===0||Math.abs(Re)+Math.abs(Me)>se)continue;let rt=ae.x+Re,Ne=ae.y+Me;if(rt<0||rt>=e.w||Ne<0||Ne>=e.h||!vr(e,rt,Ne)||!hs(e,rt,Ne,ae.x,ae.y)||N.some(tn=>tn.hp>0&&tn.x===rt&&tn.y===Ne))continue;let ft=Xi(e,g.x,g.y,rt,Ne,N,g),Mn=ft?ft.length-1:1/0;ft&&ft.length>1&&(!le||Mn<=g.agi)&&(!ve||ft.length<ve.length)&&(ve=ft)}return ve},se=Pt,be=[];for(let ae of Kt){let le=ue(ae,!0);le&&be.push({enemy:ae,path:le})}if(be.length>0){let ae=be.filter(Re=>Re.enemy.maxHp>0&&Re.enemy.hp/Re.enemy.maxHp<k),le=ae.length>0?ae:be;ae.length>0?le.sort((Re,rt)=>Re.enemy.hp-rt.enemy.hp||Re.path.length-rt.path.length):le.sort((Re,rt)=>Re.path.length-rt.path.length||Re.enemy.hp-rt.enemy.hp);let ve=le[0],Me=zt(ve.path,g.agi);if(Me&&(Me.gx!==g.x||Me.gy!==g.y)){Wt(g,Me.gx,Me.gy,()=>setTimeout(jt,600));return}}if(be.length===0){let ae=null,le=1/0;for(let ve of Kt){let Me=ue(ve,!1);Me&&Me.length<le&&(le=Me.length,ae=Me)}if(ae){let ve=zt(ae,g.agi);if(ve&&(ve.gx!==g.x||ve.gy!==g.y)){Wt(g,ve.gx,ve.gy,()=>setTimeout(jt,600));return}}}}Vt()}function Qt(){for(Ut.length=0;St.children.length;){let x=St.children[0];St.remove(x),x.geometry.dispose(),x.material.dispose()}}let Zs=new Set;function Er(x){return!x||!x.class?[]:V0[x.class]||[]}function Xa(x,g,C){let R=[],B=(W,k,ne,re)=>Math.abs(W-ne)+Math.abs(k-re),H=g.range||0;if(g.target==="self")return R.push({gx:x.x,gy:x.y,targetUnit:null}),R;for(let W of C)W.hp<=0||B(x.x,x.y,W.x,W.y)>H||H>2&&!hs(e,x.x,x.y,W.x,W.y)||(g.target==="enemy"&&W.player!==x.player&&R.push({gx:W.x,gy:W.y,targetUnit:W}),g.target==="ally"&&W.player===x.player&&R.push({gx:W.x,gy:W.y,targetUnit:W}));return R}function Jh(x,g){let C=g.range||0;if(g.target==="self")return[{gx:x.x,gy:x.y}];let R=Vh(e,x.x,x.y,C),B=[];return R.forEach((H,W)=>{let k=W%e.w,ne=W/e.w|0;C>2&&!hs(e,x.x,x.y,k,ne)||B.push({gx:k,gy:ne})}),B}function jh(x,g){let C=Xa(x,g,N);Zs=new Set(C.map(B=>`${B.gx},${B.gy}`));let R=g.target==="self"?C:Jh(x,g);Qt(),R.forEach(({gx:B,gy:H})=>{let k=(Dn+e.height[H][B]*.35)/2+Dn/2,ne=B*vt-te+vt/2,re=H*vt-ce+vt/2,pe=k+.01,Ue=new In(Ei,Ei),fe=new Jt({color:8926122,transparent:!0,opacity:.4,side:nn}),ye=new ot(Ue,fe);ye.rotation.x=-Math.PI/2,ye.position.set(ne,pe,re),St.add(ye),Ut.push(fe);let ke=new In(bi,bi),bt=new Jt({color:11167436,transparent:!0,opacity:.7,side:nn}),At=new ot(ke,bt);At.rotation.x=-Math.PI/2,At.position.set(ne,pe+.01,re),At.userData.gx=B,At.userData.gy=H,St.add(At),Ut.push(bt)})}let bi=.82,Ei=1.02;function Qh(x){Qt(),x.forEach(({gx:g,gy:C})=>{let B=(Dn+e.height[C][g]*.35)/2+Dn/2,H=g*vt-te+vt/2,W=C*vt-ce+vt/2,k=B+.01,ne=new In(Ei,Ei),re=new Jt({color:2271812,transparent:!0,opacity:.4,side:nn}),pe=new ot(ne,re);pe.rotation.x=-Math.PI/2,pe.position.set(H,k,W),St.add(pe),Ut.push(re);let Ue=new In(bi,bi),fe=new Jt({color:4508774,transparent:!0,opacity:.7,side:nn}),ye=new ot(Ue,fe);ye.rotation.x=-Math.PI/2,ye.position.set(H,k+.01,W),ye.userData.gx=g,ye.userData.gy=C,St.add(ye),Ut.push(fe)})}function qa(x){Qt(),x.forEach((g,C)=>{if(g===0)return;let R=C%e.w,B=C/e.w|0,W=(Dn+e.height[B][R]*.35)/2+Dn/2,k=R*vt-te+vt/2,ne=B*vt-ce+vt/2,re=W+.01,pe=new In(Ei,Ei),Ue=new Jt({color:3381759,transparent:!0,opacity:.35,side:nn}),fe=new ot(pe,Ue);fe.rotation.x=-Math.PI/2,fe.position.set(k,re,ne),St.add(fe),Ut.push(Ue);let ye=new In(bi,bi),ke=new Jt({color:6730751,transparent:!0,opacity:.65,side:nn}),bt=new ot(ye,ke);bt.rotation.x=-Math.PI/2,bt.position.set(k,re+.01,ne),St.add(bt),Ut.push(ke)})}function eu(x){Qt(),x.forEach((g,C)=>{if(g===0)return;let R=C%e.w,B=C/e.w|0,W=(Dn+e.height[B][R]*.35)/2+Dn/2,k=R*vt-te+vt/2,ne=B*vt-ce+vt/2,re=W+.01,pe=new In(Ei,Ei),Ue=new Jt({color:10035746,transparent:!0,opacity:.4,side:nn}),fe=new ot(pe,Ue);fe.rotation.x=-Math.PI/2,fe.position.set(k,re,ne),St.add(fe),Ut.push(Ue);let ye=new In(bi,bi),ke=new Jt({color:13386820,transparent:!0,opacity:.7,side:nn}),bt=new ot(ye,ke);bt.rotation.x=-Math.PI/2,bt.position.set(k,re+.01,ne),St.add(bt),Ut.push(ke)})}let Ti=new La,wi=new Fe;function Tr(x,g){let C=t.getBoundingClientRect();return wi.x=(x-C.left)/C.width*2-1,wi.y=-((g-C.top)/C.height)*2+1,{x:wi.x,y:wi.y}}function tu(x,g){if(Se)return;wi.x=x,wi.y=g,Ti.setFromCamera(wi,a);let C=Ti.intersectObjects(V.children,!0);if(C.length===0)return;let R=C[0].object;for(;R&&(R.userData.gx==null||R.userData.gy==null);)R=R.parent;if(!R||R.userData.gx==null)return;let B=R.userData.gx,H=R.userData.gy;if(qe==="draft"&&Ye){let k=H*e.w+B;$e.has(k)&&Bt(B,H);return}if(qe!=="playing"||oe==="cvcpu")return;if(Ke&&Be){let k=de[De],ne=N.find(ye=>ye.id===k&&ye.hp>0);if(ne&&B===ne.x&&H===ne.y){Ke=!1,Be=null,Zs=new Set,Qt(),nt?dt=new Map:(dt=ka(e,ne.x,ne.y,ne.agi,N,ne),qa(dt)),Ge();return}let re=`${B},${H}`;if(!Zs.has(re))return;if(!ne||ne.mp<Be.cost){Ke=!1,Be=null,Qt(),Ge();return}let pe=N.find(ye=>ye.x===B&&ye.y===H&&ye.hp>0);if(Be.target==="enemy"&&(!pe||pe.player===ne.player)||Be.target==="ally"&&pe&&pe.player!==ne.player||Be.target==="self"&&(B!==ne.x||H!==ne.y)||Be.target==="enemy"&&!pe)return;ne.mp-=Be.cost,mt=!0;let Ue={showFloatingCombatText:Wn,handleUnitDeath:pn,updateUnitSlashVisibility:Je,updateTurnUI:Ge},fe=Be.target==="self"?ne:pe||null;Wa(ne,fe,Be,Ue,()=>{Qt(),Ke=!1,Be=null,Zs=new Set,nt?Vt():Ge()});return}if(Dt){let k=de[De],ne=N.find(pe=>pe.id===k),re=X.get(k);if(ne&&re&&It.length>0){let pe=me(ne.x,ne.y),Ue=me(B,H),fe=Ue.x-pe.x,ye=Ue.z-pe.z,ke=fe*fe+ye*ye>1e-6?Math.atan2(fe,ye):re.rotation.y;re.rotation.y=J(ke)}Vt();return}if(tt!=null&&Ee){let k=N.find(pe=>pe.id===tt);if(!k||k.player!==Oe)return;let ne=H*e.w+B,re=N.find(pe=>pe.x===B&&pe.y===H&&pe.hp>0);if(re&&re.id===de[De]&&re.player===Oe){Ee=!1,tt=re.id,nt?(Qt(),dt=new Map):(dt=ka(e,re.x,re.y,re.agi,N,re),qa(dt)),Ge();return}if(!dt.has(ne)||dt.get(ne)===0)return;if(re&&re.player!==Oe){let pe=Ie(re,"agi")*.7+Ie(re,"luk")*.3;if(Math.random()*Math.max(.001,pe)<=Ie(k,"dex")){let ye=Ie(k,"str")*.7+Ie(k,"dex")*.1+Ie(k,"int")*.07-(Ie(re,"vit")*.3+Ie(re,"luk")*.1),ke=Math.max(1,Math.floor(ye));re.hp=Math.max(0,re.hp-ke),Wn(re.x,re.y,String(ke),!1),re.hp<=0&&pn(re),Je(re)}else Wn(re.x,re.y,"MISS",!0);mt=!0,tt=null,Ee=!1,Qt(),nt?Vt():Ge()}return}let W=N.find(k=>k.x===B&&k.y===H&&k.hp>0);if(W){if(W.id===de[De]&&W.player===Oe){O(),tt=W.id,Ee=!1,nt?(Qt(),dt=new Map):(dt=ka(e,B,H,W.agi,N,W),qa(dt)),Ge();return}Qt(),dt=new Map,Ee=!1,Te(W),Ge();return}if(O(),tt!=null){let ye=function(){if(fe>=pe.length){k.x=pe[pe.length-1].x,k.y=pe[pe.length-1].y,Se=!1,He(Ue),hi(),dt=new Map,nt=!0,mt?Vt():Ge();return}let ke=pe[fe-1],bt=pe[fe],At=me(ke.x,ke.y).clone(),Pt=me(bt.x,bt.y).clone(),Xt=Pt.x-At.x,$t=Pt.z-At.z;Xt*Xt+$t*$t>1e-6&&(Ue.rotation.y=Math.atan2(Xt,$t));let on=performance.now();function en(zt){let Rt=Math.min(1,(zt-on)/Hh),yt=(Zt=>Zt*Zt*(3-2*Zt))(Rt);Ue.position.lerpVectors(At,Pt,yt),Ce(Ue,yt),Rt<1?requestAnimationFrame(en):(fe++,ye())}requestAnimationFrame(en)};if(Ee)return;let k=N.find(ke=>ke.id===tt);if(!k||k.player!==Oe)return;let ne=H*e.w+B;if(!dt.has(ne)||dt.get(ne)===0||N.some(ke=>ke.id!==k.id&&ke.x===B&&ke.y===H&&ke.hp>0)||Se||nt)return;let pe=Xi(e,k.x,k.y,B,H,N,k);if(!pe||pe.length<=1)return;tt=null,Qt(),Se=!0,hi(k.id);let Ue=X.get(k.id),fe=1;ye()}}function Dl(x){L.x=x.clientX,L.y=x.clientY,m=x.ctrlKey,f=Tr(x.clientX,x.clientY),t.style.cursor=(x.ctrlKey,"grabbing")}function Ya(x){return x.touches&&x.touches.length>0?{clientX:x.touches[0].clientX,clientY:x.touches[0].clientY}:x.changedTouches&&x.changedTouches.length>0?{clientX:x.changedTouches[0].clientX,clientY:x.changedTouches[0].clientY}:{clientX:x.clientX,clientY:x.clientY}}function Ul(x){if(!x||x.length<2)return 0;let g=x[0],C=x[1];return Math.hypot(C.clientX-g.clientX,C.clientY-g.clientY)}function nu(x){if(x.touches.length===2){U=Ul(x.touches),f=null;return}if(x.touches.length!==1)return;U=null;let g=Ya(x);Dl({clientX:g.clientX,clientY:g.clientY,ctrlKey:!1})}function iu(x){if(x.touches.length===2){x.preventDefault();let C=Ul(x.touches);if(U!=null&&U>0){let R=C-U,B=a.position.distanceTo(c),H=Math.max(Y,Math.min(S,B-R*D));p.copy(c).sub(a.position).normalize(),a.position.copy(c).sub(p.multiplyScalar(H)),a.lookAt(c)}U=C;return}if(U=null,x.touches.length!==1)return;x.preventDefault();let g=Ya(x);Nl({clientX:g.clientX,clientY:g.clientY,ctrlKey:!1})}function su(x){if(x.touches.length<2&&(U=null),x.touches.length===2||x.changedTouches.length===0)return;let g=Ya(x);$a({clientX:g.clientX,clientY:g.clientY,ctrlKey:!1})}function Nl(x){if(Dt){Ze(x.clientX,x.clientY);return}if(f==null)return;let g=x.clientX-L.x,C=x.clientY-L.y;if(!_&&!v&&(Math.abs(g)>b||Math.abs(C)>b)&&(x.ctrlKey||m?v=!0:_=!0),v){I.copy(a.position).sub(c);let R=I.length();if(R<.001)return;let B=Math.atan2(I.x,I.z),H=Math.asin(Math.max(-1,Math.min(1,I.y/R)));B-=g*y,H+=C*y,H=Math.max(w,Math.min(F,H)),I.x=R*Math.cos(H)*Math.sin(B),I.y=R*Math.sin(H),I.z=R*Math.cos(H)*Math.cos(B),a.position.copy(c).add(I),a.lookAt(c),L.x=x.clientX,L.y=x.clientY}else if(_){let R=Tr(x.clientX,x.clientY);u.setFromNormalAndCoplanarPoint(new z(0,1,0),new z(0,c.y,0)),Ti.setFromCamera(new Fe(f.x,f.y),a),Ti.ray.intersectPlane(u,d);let B=d.clone();Ti.setFromCamera(new Fe(R.x,R.y),a),Ti.ray.intersectPlane(u,d);let H=B.sub(d);c.add(H),a.position.add(H),a.lookAt(c),f={x:R.x,y:R.y}}}function $a(x){if(f!=null&&!_&&!v){let g=Tr(x.clientX,x.clientY);tu(g.x,g.y)}f=null,_=!1,v=!1,m=!1,t.style.cursor="grab"}function ru(x){x.preventDefault();let g=a.position.distanceTo(c),C=Math.max(Y,Math.min(S,g+x.deltaY*T));p.copy(c).sub(a.position).normalize(),a.position.copy(c).sub(p.multiplyScalar(C)),a.lookAt(c)}t.style.cursor="grab",t.addEventListener("mousedown",Dl),t.addEventListener("mousemove",Nl),t.addEventListener("mouseup",$a),t.addEventListener("mouseleave",$a),t.addEventListener("touchstart",nu,{passive:!0}),t.addEventListener("touchmove",iu,{passive:!1}),t.addEventListener("touchend",su,{passive:!0}),t.addEventListener("wheel",ru,{passive:!1});function Ol(){let x=t.clientWidth,g=t.clientHeight;a.aspect=x/g,a.updateProjectionMatrix(),Ai.setSize(x,g),Ai.setPixelRatio(Math.min(window.devicePixelRatio,2))}window.addEventListener("resize",Ol);let Ai=new dr({antialias:!0});Ai.setSize(t.clientWidth,t.clientHeight),Ai.setPixelRatio(Math.min(window.devicePixelRatio,2)),Ai.shadowMap.enabled=!0,Ai.shadowMap.type=Tl,t.appendChild(Ai.domElement),Ol();let wr=document.createElement("div");wr.id="combat-text-layer",t.appendChild(wr);let li=new z,au=1400;function Wn(x,g,C,R,B){let H=document.createElement("div");H.className="combat-text-float "+(R?"miss":"damage")+(B?" "+B:""),H.textContent=C,H.style.position="absolute",wr.appendChild(H);let W=B==="skill-name"?1.7:1.2,k=performance.now();function ne(){li.copy(me(x,g)),li.y+=W,li.project(a);let pe=t.clientWidth,Ue=t.clientHeight;H.style.left=(li.x*.5+.5)*pe+"px",H.style.top=(1-(li.y*.5+.5))*Ue+"px"}function re(){ne(),performance.now()-k<au?requestAnimationFrame(re):H.remove()}requestAnimationFrame(re)}let ou=1500;function lu(x,g){let C=document.createElement("div");C.className="combat-text-float "+(g||"levelup"),C.textContent="LEVEL UP!",C.style.position="absolute",wr.appendChild(C);let R=performance.now();function B(){li.copy(me(x.x,x.y)),li.y+=1.2,li.project(a);let W=t.clientWidth,k=t.clientHeight;C.style.left=(li.x*.5+.5)*W+"px",C.style.top=(1-(li.y*.5+.5))*k+"px"}function H(){B(),performance.now()-R<ou?requestAnimationFrame(H):C.remove()}requestAnimationFrame(H)}function pn(x){console.log("[DEATH]",`${x.name} (${x.class}, P${x.player})`,`at (${x.x},${x.y})`,`Lv.${x.level}`),Wn(x.x,x.y,"DEAD",!1);let g=X.get(x.id);if(!g){hi(),Fl();return}let C=performance.now();function R(B){let H=B-C,W=Math.min(1,H/A),k=W*W;g.rotation.x=k*Math.PI*.5,W<1?requestAnimationFrame(R):(n.remove(g),X.delete(x.id),hi(),Fl())}requestAnimationFrame(R)}function Fl(){if(qe!=="playing")return;let x=N.some(C=>C.player===1&&C.hp>0),g=N.some(C=>C.player===2&&C.hp>0);x?g||Za(1):Za(2)}function cu(){let x=$s(),g=new Set(x.map(W=>W.gy*e.w+W.gx)),C=N.filter(W=>W.hp>0&&W.player===1&&g.has(W.y*e.w+W.x)).length,R=N.filter(W=>W.hp>0&&W.player===2&&g.has(W.y*e.w+W.x)).length,B=null,H="";if(C>R)B=1,H=`Time's up! Player 1 wins! (${C} vs ${R} units on center base)`;else if(R>C)B=2,H=`Time's up! Player 2 wins! (${R} vs ${C} units on center base)`;else{let W=N.filter(ne=>ne.hp>0&&ne.player===1).reduce((ne,re)=>ne+re.hp,0),k=N.filter(ne=>ne.hp>0&&ne.player===2).reduce((ne,re)=>ne+re.hp,0);W>k?(B=1,H=`Time's up! Draw on center \u2014 Player 1 wins on total HP (${W} vs ${k})`):k>W?(B=2,H=`Time's up! Draw on center \u2014 Player 2 wins on total HP (${k} vs ${W})`):H=`Draw! (equal units on center: ${C}, equal HP)`}Za(B,H)}function Za(x,g){qe="gameover",document.getElementById("turn-menu").style.display="none",O(),Qt();let C=document.getElementById("game-over-overlay"),R=document.getElementById("game-over-title"),B=document.getElementById("game-over-cards");R.textContent=g??`Player ${x} wins!`;let H=N.filter(W=>W.player===(x??1));B.innerHTML=H.map(W=>{let k=W,ne=W.level>=3?" level-3":W.level>=2?" level-2":"",re=k.maxHp>0&&k.hp/k.maxHp<.3?" low-hp":"";return`
        <div class="game-over-card${ne}${re}">
          <img class="game-over-card-image" src="${yr[W.class]||""}" alt="${k.name}" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="game-over-card-body">
            <div class="game-over-card-name">${k.name}</div>
            <div class="game-over-card-meta">Lv.${k.level} ${k.class} \u2014 HP ${k.hp}/${k.maxHp}</div>
            <div class="game-over-card-stats">
              <span class="stat-label">HP</span><span class="stat-val stat-val-hp">${k.hp}/${k.maxHp}</span>
              <span class="stat-label">MP</span><span class="stat-val">${k.mp}/${k.maxMp}</span>
              <span class="stat-label">STR</span><span class="stat-val">${Ie(k,"str")}</span>
              <span class="stat-label">AGI</span><span class="stat-val">${Ie(k,"agi")}</span>
              <span class="stat-label">VIT</span><span class="stat-val">${Ie(k,"vit")}</span>
              <span class="stat-label">DEX</span><span class="stat-val">${Ie(k,"dex")}</span>
              <span class="stat-label">LUK</span><span class="stat-val">${Ie(k,"luk")}</span>
              <span class="stat-label">INT</span><span class="stat-val">${Ie(k,"int")}</span>
              <span class="stat-label">Range</span><span class="stat-val">${k.range}</span>
            </div>
          </div>
        </div>
      `}).join(""),C.classList.add("visible")}function Bl(x=0){requestAnimationFrame(Bl);let g=.6+.4*Math.sin(x*.004);for(let R=0;R<Ut.length;R++){let B=R%2===0?.4:.7;Ut[R].opacity=B*g}let C=V.userData.treeGroups;if(C&&C.length>0)for(let R=0;R<C.length;R++){let B=C[R],H=B.userData.swayPhase!=null?B.userData.swayPhase:0;B.rotation.x=Math.sin(x*9e-4+H)*.018,B.rotation.z=Math.sin(x*7e-4+H*1.4)*.018}Ai.render(n,a)}Bl()}$0();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
