var Ol="160";var Uu=0,ec=1,Nu=2;var Oh=1,Fl=2,_i=3,zi=0,Bn=1,ln=2;var Fi=0,zs=1,nc=2,ic=3,sc=4,Ou=5,es=100,Fu=101,Bu=102,rc=103,ac=104,Hu=200,zu=201,ku=202,Vu=203,Wo=204,Xo=205,Gu=206,Wu=207,Xu=208,qu=209,Yu=210,$u=211,Zu=212,Ku=213,Ju=214,ju=0,Qu=1,td=2,ca=3,ed=4,nd=5,id=6,sd=7,Fh=0,rd=1,ad=2,Bi=0,od=1,ld=2,cd=3,hd=4,ud=5,dd=6;var Bh=300,Gs=301,Ws=302,qo=303,Yo=304,Va=306,fr=1e3,si=1001,$o=1002,Dn=1003,oc=1004;var oo=1005;var $n=1006,fd=1007;var pr=1008;var Hi=1009,pd=1010,md=1011,Bl=1012,Hh=1013,Ni=1014,Oi=1015,mr=1016,zh=1017,kh=1018,is=1020,gd=1021,ri=1023,_d=1024,xd=1025,ss=1026,Xs=1027,yd=1028,Vh=1029,vd=1030,Gh=1031,Wh=1033,lo=33776,co=33777,ho=33778,uo=33779,lc=35840,cc=35841,hc=35842,uc=35843,Xh=36196,dc=37492,fc=37496,pc=37808,mc=37809,gc=37810,_c=37811,xc=37812,yc=37813,vc=37814,Mc=37815,Sc=37816,bc=37817,Ec=37818,Tc=37819,wc=37820,Ac=37821,fo=36492,Rc=36494,Cc=36495,Md=36283,Pc=36284,Ic=36285,Lc=36286;var ha=2300,ua=2301,po=2302,Dc=2400,Uc=2401,Nc=2402;var qh=3e3,rs=3001,Sd=3200,bd=3201,Yh=0,Ed=1,Zn="",Mn="srgb",yi="srgb-linear",Hl="display-p3",Ga="display-p3-linear",da="linear",Xe="srgb",fa="rec709",pa="p3";var vs=7680;var Oc=519,Td=512,wd=513,Ad=514,$h=515,Rd=516,Cd=517,Pd=518,Id=519,Fc=35044;var Bc="300 es",Zo=1035,xi=2e3,ma=2001,ki=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var mo=Math.PI/180,Ko=180/Math.PI;function Ks(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wn[i&255]+wn[i>>8&255]+wn[i>>16&255]+wn[i>>24&255]+"-"+wn[t&255]+wn[t>>8&255]+"-"+wn[t>>16&15|64]+wn[t>>24&255]+"-"+wn[e&63|128]+wn[e>>8&255]+"-"+wn[e>>16&255]+wn[e>>24&255]+wn[n&255]+wn[n>>8&255]+wn[n>>16&255]+wn[n>>24&255]).toLowerCase()}function Rn(i,t,e){return Math.max(t,Math.min(e,i))}function Ld(i,t){return(i%t+t)%t}function go(i,t,e){return(1-e)*i+e*t}function Hc(i){return(i&i-1)===0&&i!==0}function Jo(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ir(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Fn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Bt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Rn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},we=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],x=n[8],v=s[0],m=s[3],p=s[6],M=s[1],y=s[4],T=s[7],O=s[2],I=s[5],L=s[8];return r[0]=a*v+o*M+l*O,r[3]=a*m+o*y+l*I,r[6]=a*p+o*T+l*L,r[1]=c*v+h*M+f*O,r[4]=c*m+h*y+f*I,r[7]=c*p+h*T+f*L,r[2]=u*v+d*M+x*O,r[5]=u*m+d*y+x*I,r[8]=u*p+d*T+x*L,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,x=e*f+n*u+s*d;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/x;return t[0]=f*v,t[1]=(s*c-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=u*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=d*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(_o.makeScale(t,e)),this}rotate(t){return this.premultiply(_o.makeRotation(-t)),this}translate(t,e){return this.premultiply(_o.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},_o=new we;function Zh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ga(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Dd(){let i=ga("canvas");return i.style.display="block",i}var zc={};function lr(i){i in zc||(zc[i]=!0,console.warn(i))}var kc=new we().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Vc=new we().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Or={[yi]:{transfer:da,primaries:fa,toReference:i=>i,fromReference:i=>i},[Mn]:{transfer:Xe,primaries:fa,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ga]:{transfer:da,primaries:pa,toReference:i=>i.applyMatrix3(Vc),fromReference:i=>i.applyMatrix3(kc)},[Hl]:{transfer:Xe,primaries:pa,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Vc),fromReference:i=>i.applyMatrix3(kc).convertLinearToSRGB()}},Ud=new Set([yi,Ga]),Be={enabled:!0,_workingColorSpace:yi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Ud.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=Or[t].toReference,s=Or[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Or[i].primaries},getTransfer:function(i){return i===Zn?da:Or[i].transfer}};function ks(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ms,_a=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ms===void 0&&(Ms=ga("canvas")),Ms.width=t.width,Ms.height=t.height;let n=Ms.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ms}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ga("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ks(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ks(e[n]/255)*255):e[n]=ks(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Nd=0,xa=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=Ks(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(yo(s[a].image)):r.push(yo(s[a]))}else r=yo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function yo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?_a.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Od=0,Jn=class i extends ki{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=si,s=si,r=$n,a=pr,o=ri,l=Hi,c=i.DEFAULT_ANISOTROPY,h=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=Ks(),this.name="",this.source=new xa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new we,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(lr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===rs?Mn:Zn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Bh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fr:t.x=t.x-Math.floor(t.x);break;case si:t.x=t.x<0?0:1;break;case $o:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fr:t.y=t.y-Math.floor(t.y);break;case si:t.y=t.y<0?0:1;break;case $o:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return lr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Mn?rs:qh}set encoding(t){lr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===rs?Mn:Zn}};Jn.DEFAULT_IMAGE=null;Jn.DEFAULT_MAPPING=Bh;Jn.DEFAULT_ANISOTROPY=1;var xn=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],x=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-v)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+v)<.1&&Math.abs(x+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,T=(d+1)/2,O=(p+1)/2,I=(h+u)/4,L=(f+v)/4,$=(x+m)/4;return y>T&&y>O?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=I/n,r=L/n):T>O?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=I/s,r=$/s):O<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),n=L/r,s=$/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-x)*(m-x)+(f-v)*(f-v)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-x)/M,this.y=(f-v)/M,this.z=(u-h)/M,this.w=Math.acos((c+d+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},jo=class extends ki{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new xn(0,0,t,e),this.scissorTest=!1,this.viewport=new xn(0,0,t,e);let s={width:t,height:e,depth:1};n.encoding!==void 0&&(lr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===rs?Mn:Zn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Jn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new xa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},vi=class extends jo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ya=class extends Jn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qo=class extends Jn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vi=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=r[a+0],d=r[a+1],x=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(o===1){t[e+0]=u,t[e+1]=d,t[e+2]=x,t[e+3]=v;return}if(f!==v||l!==u||c!==d||h!==x){let m=1-o,p=l*u+c*d+h*x+f*v,M=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let O=Math.sqrt(y),I=Math.atan2(O,p*M);m=Math.sin(m*I)/O,o=Math.sin(o*I)/O}let T=o*M;if(l=l*m+u*T,c=c*m+d*T,h=h*m+x*T,f=f*m+v*T,m===1-o){let O=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=O,c*=O,h*=O,f*=O}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],u=r[a+1],d=r[a+2],x=r[a+3];return t[e]=o*x+h*f+l*d-c*u,t[e+1]=l*x+h*u+c*f-o*d,t[e+2]=c*x+h*d+o*u-l*f,t[e+3]=h*x-o*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),u=l(n/2),d=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*x,this._y=c*d*f-u*h*x,this._z=c*h*x+u*d*f,this._w=c*h*f-u*d*x;break;case"YXZ":this._x=u*h*f+c*d*x,this._y=c*d*f-u*h*x,this._z=c*h*x-u*d*f,this._w=c*h*f+u*d*x;break;case"ZXY":this._x=u*h*f-c*d*x,this._y=c*d*f+u*h*x,this._z=c*h*x+u*d*f,this._w=c*h*f-u*d*x;break;case"ZYX":this._x=u*h*f-c*d*x,this._y=c*d*f+u*h*x,this._z=c*h*x-u*d*f,this._w=c*h*f+u*d*x;break;case"YZX":this._x=u*h*f+c*d*x,this._y=c*d*f+u*h*x,this._z=c*h*x-u*d*f,this._w=c*h*f-u*d*x;break;case"XZY":this._x=u*h*f-c*d*x,this._y=c*d*f-u*h*x,this._z=c*h*x+u*d*f,this._w=c*h*f+u*d*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+o+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>f){let d=2*Math.sqrt(1+n-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){let d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Rn(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=a*f+this._w*u,this._x=n*f+this._x*u,this._y=s*f+this._y*u,this._z=r*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Gc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Gc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return vo.copy(this).projectOnVector(t),this.sub(vo)}reflect(t){return this.sub(vo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Rn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},vo=new B,Gc=new Vi,as=class{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ti.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ti.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ti.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ti):ti.fromBufferAttribute(r,a),ti.applyMatrix4(t.matrixWorld),this.expandByPoint(ti);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fr.copy(n.boundingBox)),Fr.applyMatrix4(t.matrixWorld),this.union(Fr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,ti),ti.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(sr),Br.subVectors(this.max,sr),Ss.subVectors(t.a,sr),bs.subVectors(t.b,sr),Es.subVectors(t.c,sr),Pi.subVectors(bs,Ss),Ii.subVectors(Es,bs),Ki.subVectors(Ss,Es);let e=[0,-Pi.z,Pi.y,0,-Ii.z,Ii.y,0,-Ki.z,Ki.y,Pi.z,0,-Pi.x,Ii.z,0,-Ii.x,Ki.z,0,-Ki.x,-Pi.y,Pi.x,0,-Ii.y,Ii.x,0,-Ki.y,Ki.x,0];return!Mo(e,Ss,bs,Es,Br)||(e=[1,0,0,0,1,0,0,0,1],!Mo(e,Ss,bs,Es,Br))?!1:(Hr.crossVectors(Pi,Ii),e=[Hr.x,Hr.y,Hr.z],Mo(e,Ss,bs,Es,Br))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ti).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ti).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(di),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},di=[new B,new B,new B,new B,new B,new B,new B,new B],ti=new B,Fr=new as,Ss=new B,bs=new B,Es=new B,Pi=new B,Ii=new B,Ki=new B,sr=new B,Br=new B,Hr=new B,Ji=new B;function Mo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ji.fromArray(i,r);let o=s.x*Math.abs(Ji.x)+s.y*Math.abs(Ji.y)+s.z*Math.abs(Ji.z),l=t.dot(Ji),c=e.dot(Ji),h=n.dot(Ji);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Fd=new as,rr=new B,So=new B,qs=class{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Fd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;rr.subVectors(t,this.center);let e=rr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(rr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(So.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(rr.copy(t.center).add(So)),this.expandByPoint(rr.copy(t.center).sub(So))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},fi=new B,bo=new B,zr=new B,Li=new B,Eo=new B,kr=new B,To=new B,gr=class{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=fi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(fi.copy(this.origin).addScaledVector(this.direction,e),fi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){bo.copy(t).add(e).multiplyScalar(.5),zr.copy(e).sub(t).normalize(),Li.copy(this.origin).sub(bo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(zr),o=Li.dot(this.direction),l=-Li.dot(zr),c=Li.lengthSq(),h=Math.abs(1-a*a),f,u,d,x;if(h>0)if(f=a*l-o,u=a*o-l,x=r*h,f>=0)if(u>=-x)if(u<=x){let v=1/h;f*=v,u*=v,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-x?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=x?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(bo).addScaledVector(zr,u),d}intersectSphere(t,e){fi.subVectors(t.center,this.origin);let n=fi.dot(this.direction),s=fi.dot(fi)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,fi)!==null}intersectTriangle(t,e,n,s,r){Eo.subVectors(e,t),kr.subVectors(n,t),To.crossVectors(Eo,kr);let a=this.direction.dot(To),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Li.subVectors(this.origin,t);let l=o*this.direction.dot(kr.crossVectors(Li,kr));if(l<0)return null;let c=o*this.direction.dot(Eo.cross(Li));if(c<0||l+c>a)return null;let h=-o*Li.dot(To);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},dn=class i{constructor(t,e,n,s,r,a,o,l,c,h,f,u,d,x,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,f,u,d,x,v,m)}set(t,e,n,s,r,a,o,l,c,h,f,u,d,x,v,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=x,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Ts.setFromMatrixColumn(t,0).length(),r=1/Ts.setFromMatrixColumn(t,1).length(),a=1/Ts.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=a*h,d=a*f,x=o*h,v=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+x*c,e[5]=u-v*c,e[9]=-o*l,e[2]=v-u*c,e[6]=x+d*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,d=l*f,x=c*h,v=c*f;e[0]=u+v*o,e[4]=x*o-d,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=d*o-x,e[6]=v+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,d=l*f,x=c*h,v=c*f;e[0]=u-v*o,e[4]=-a*f,e[8]=x+d*o,e[1]=d+x*o,e[5]=a*h,e[9]=v-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,d=a*f,x=o*h,v=o*f;e[0]=l*h,e[4]=x*c-d,e[8]=u*c+v,e[1]=l*f,e[5]=v*c+u,e[9]=d*c-x,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,d=a*c,x=o*l,v=o*c;e[0]=l*h,e[4]=v-u*f,e[8]=x*f+d,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*f+x,e[10]=u-v*f}else if(t.order==="XZY"){let u=a*l,d=a*c,x=o*l,v=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+v,e[5]=a*h,e[9]=d*f-x,e[2]=x*f-d,e[6]=o*h,e[10]=v*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Bd,t,Hd)}lookAt(t,e,n){let s=this.elements;return Wn.subVectors(t,e),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),Di.crossVectors(n,Wn),Di.lengthSq()===0&&(Math.abs(n.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),Di.crossVectors(n,Wn)),Di.normalize(),Vr.crossVectors(Wn,Di),s[0]=Di.x,s[4]=Vr.x,s[8]=Wn.x,s[1]=Di.y,s[5]=Vr.y,s[9]=Wn.y,s[2]=Di.z,s[6]=Vr.z,s[10]=Wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],x=n[2],v=n[6],m=n[10],p=n[14],M=n[3],y=n[7],T=n[11],O=n[15],I=s[0],L=s[4],$=s[8],b=s[12],A=s[1],U=s[5],F=s[9],J=s[13],P=s[2],G=s[6],N=s[10],st=s[14],Z=s[3],Q=s[7],nt=s[11],ct=s[15];return r[0]=a*I+o*A+l*P+c*Z,r[4]=a*L+o*U+l*G+c*Q,r[8]=a*$+o*F+l*N+c*nt,r[12]=a*b+o*J+l*st+c*ct,r[1]=h*I+f*A+u*P+d*Z,r[5]=h*L+f*U+u*G+d*Q,r[9]=h*$+f*F+u*N+d*nt,r[13]=h*b+f*J+u*st+d*ct,r[2]=x*I+v*A+m*P+p*Z,r[6]=x*L+v*U+m*G+p*Q,r[10]=x*$+v*F+m*N+p*nt,r[14]=x*b+v*J+m*st+p*ct,r[3]=M*I+y*A+T*P+O*Z,r[7]=M*L+y*U+T*G+O*Q,r[11]=M*$+y*F+T*N+O*nt,r[15]=M*b+y*J+T*st+O*ct,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],x=t[3],v=t[7],m=t[11],p=t[15];return x*(+r*l*f-s*c*f-r*o*u+n*c*u+s*o*d-n*l*d)+v*(+e*l*d-e*c*u+r*a*u-s*a*d+s*c*h-r*l*h)+m*(+e*c*f-e*o*d-r*a*f+n*a*d+r*o*h-n*c*h)+p*(-s*o*h-e*l*f+e*o*u+s*a*f-n*a*u+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],x=t[12],v=t[13],m=t[14],p=t[15],M=f*m*c-v*u*c+v*l*d-o*m*d-f*l*p+o*u*p,y=x*u*c-h*m*c-x*l*d+a*m*d+h*l*p-a*u*p,T=h*v*c-x*f*c+x*o*d-a*v*d-h*o*p+a*f*p,O=x*f*l-h*v*l-x*o*u+a*v*u+h*o*m-a*f*m,I=e*M+n*y+s*T+r*O;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/I;return t[0]=M*L,t[1]=(v*u*r-f*m*r-v*s*d+n*m*d+f*s*p-n*u*p)*L,t[2]=(o*m*r-v*l*r+v*s*c-n*m*c-o*s*p+n*l*p)*L,t[3]=(f*l*r-o*u*r-f*s*c+n*u*c+o*s*d-n*l*d)*L,t[4]=y*L,t[5]=(h*m*r-x*u*r+x*s*d-e*m*d-h*s*p+e*u*p)*L,t[6]=(x*l*r-a*m*r-x*s*c+e*m*c+a*s*p-e*l*p)*L,t[7]=(a*u*r-h*l*r+h*s*c-e*u*c-a*s*d+e*l*d)*L,t[8]=T*L,t[9]=(x*f*r-h*v*r-x*n*d+e*v*d+h*n*p-e*f*p)*L,t[10]=(a*v*r-x*o*r+x*n*c-e*v*c-a*n*p+e*o*p)*L,t[11]=(h*o*r-a*f*r-h*n*c+e*f*c+a*n*d-e*o*d)*L,t[12]=O*L,t[13]=(h*v*s-x*f*s+x*n*u-e*v*u-h*n*m+e*f*m)*L,t[14]=(x*o*s-a*v*s-x*n*l+e*v*l+a*n*m-e*o*m)*L,t[15]=(a*f*s-h*o*s+h*n*l-e*f*l-a*n*u+e*o*u)*L,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,x=r*f,v=a*h,m=a*f,p=o*f,M=l*c,y=l*h,T=l*f,O=n.x,I=n.y,L=n.z;return s[0]=(1-(v+p))*O,s[1]=(d+T)*O,s[2]=(x-y)*O,s[3]=0,s[4]=(d-T)*I,s[5]=(1-(u+p))*I,s[6]=(m+M)*I,s[7]=0,s[8]=(x+y)*L,s[9]=(m-M)*L,s[10]=(1-(u+v))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Ts.set(s[0],s[1],s[2]).length(),a=Ts.set(s[4],s[5],s[6]).length(),o=Ts.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],ei.copy(this);let c=1/r,h=1/a,f=1/o;return ei.elements[0]*=c,ei.elements[1]*=c,ei.elements[2]*=c,ei.elements[4]*=h,ei.elements[5]*=h,ei.elements[6]*=h,ei.elements[8]*=f,ei.elements[9]*=f,ei.elements[10]*=f,e.setFromRotationMatrix(ei),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=xi){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),f=(e+t)/(e-t),u=(n+s)/(n-s),d,x;if(o===xi)d=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===ma)d=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=xi){let l=this.elements,c=1/(e-t),h=1/(n-s),f=1/(a-r),u=(e+t)*c,d=(n+s)*h,x,v;if(o===xi)x=(a+r)*f,v=-2*f;else if(o===ma)x=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ts=new B,ei=new dn,Bd=new B(0,0,0),Hd=new B(1,1,1),Di=new B,Vr=new B,Wn=new B,Wc=new dn,Xc=new Vi,va=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Rn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Rn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Wc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xc.setFromEuler(this),this.setFromQuaternion(Xc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};va.DEFAULT_ORDER="XYZ";var _r=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},zd=0,qc=new B,ws=new Vi,pi=new dn,Gr=new B,ar=new B,kd=new B,Vd=new Vi,Yc=new B(1,0,0),$c=new B(0,1,0),Zc=new B(0,0,1),Gd={type:"added"},Wd={type:"removed"},Nn=class i extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=Ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new B,e=new va,n=new Vi,s=new B(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new dn},normalMatrix:{value:new we}}),this.matrix=new dn,this.matrixWorld=new dn,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _r,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ws.setFromAxisAngle(t,e),this.quaternion.multiply(ws),this}rotateOnWorldAxis(t,e){return ws.setFromAxisAngle(t,e),this.quaternion.premultiply(ws),this}rotateX(t){return this.rotateOnAxis(Yc,t)}rotateY(t){return this.rotateOnAxis($c,t)}rotateZ(t){return this.rotateOnAxis(Zc,t)}translateOnAxis(t,e){return qc.copy(t).applyQuaternion(this.quaternion),this.position.add(qc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yc,t)}translateY(t){return this.translateOnAxis($c,t)}translateZ(t){return this.translateOnAxis(Zc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Gr.copy(t):Gr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(ar,Gr,this.up):pi.lookAt(Gr,ar,this.up),this.quaternion.setFromRotationMatrix(pi),s&&(pi.extractRotation(s.matrixWorld),ws.setFromRotationMatrix(pi),this.quaternion.premultiply(ws.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Gd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Wd)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pi.multiply(t.parent.matrixWorld)),t.applyMatrix4(pi),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,t,kd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,Vd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),d=a(t.animations),x=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Nn.DEFAULT_UP=new B(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ni=new B,mi=new B,wo=new B,gi=new B,As=new B,Rs=new B,Kc=new B,Ao=new B,Ro=new B,Co=new B,Wr=!1,Os=class i{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ni.subVectors(t,e),s.cross(ni);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ni.subVectors(s,e),mi.subVectors(n,e),wo.subVectors(t,e);let a=ni.dot(ni),o=ni.dot(mi),l=ni.dot(wo),c=mi.dot(mi),h=mi.dot(wo),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-o*h)*u,x=(a*h-o*l)*u;return r.set(1-d-x,x,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getUV(t,e,n,s,r,a,o,l){return Wr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Wr=!0),this.getInterpolation(t,e,n,s,r,a,o,l)}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,gi.x),l.addScaledVector(a,gi.y),l.addScaledVector(o,gi.z),l)}static isFrontFacing(t,e,n,s){return ni.subVectors(n,e),mi.subVectors(t,e),ni.cross(mi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ni.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),ni.cross(mi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return Wr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Wr=!0),i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;As.subVectors(s,n),Rs.subVectors(r,n),Ao.subVectors(t,n);let l=As.dot(Ao),c=Rs.dot(Ao);if(l<=0&&c<=0)return e.copy(n);Ro.subVectors(t,s);let h=As.dot(Ro),f=Rs.dot(Ro);if(h>=0&&f<=h)return e.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(As,a);Co.subVectors(t,r);let d=As.dot(Co),x=Rs.dot(Co);if(x>=0&&d<=x)return e.copy(r);let v=d*c-l*x;if(v<=0&&c>=0&&x<=0)return o=c/(c-x),e.copy(n).addScaledVector(Rs,o);let m=h*x-d*f;if(m<=0&&f-h>=0&&d-x>=0)return Kc.subVectors(r,s),o=(f-h)/(f-h+(d-x)),e.copy(s).addScaledVector(Kc,o);let p=1/(m+v+u);return a=v*p,o=u*p,e.copy(n).addScaledVector(As,a).addScaledVector(Rs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Kh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},Xr={h:0,s:0,l:0};function Po(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ge=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Mn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Be.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Be.workingColorSpace){return this.r=t,this.g=e,this.b=n,Be.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Be.workingColorSpace){if(t=Ld(t,1),e=Rn(e,0,1),n=Rn(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Po(a,r,t+1/3),this.g=Po(a,r,t),this.b=Po(a,r,t-1/3)}return Be.toWorkingColorSpace(this,s),this}setStyle(t,e=Mn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Mn){let n=Kh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ks(t.r),this.g=ks(t.g),this.b=ks(t.b),this}copyLinearToSRGB(t){return this.r=xo(t.r),this.g=xo(t.g),this.b=xo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Mn){return Be.fromWorkingColorSpace(An.copy(this),t),Math.round(Rn(An.r*255,0,255))*65536+Math.round(Rn(An.g*255,0,255))*256+Math.round(Rn(An.b*255,0,255))}getHexString(t=Mn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Be.workingColorSpace){Be.fromWorkingColorSpace(An.copy(this),e);let n=An.r,s=An.g,r=An.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Be.workingColorSpace){return Be.fromWorkingColorSpace(An.copy(this),e),t.r=An.r,t.g=An.g,t.b=An.b,t}getStyle(t=Mn){Be.fromWorkingColorSpace(An.copy(this),t);let e=An.r,n=An.g,s=An.b;return t!==Mn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ui),this.setHSL(Ui.h+t,Ui.s+e,Ui.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ui),t.getHSL(Xr);let n=go(Ui.h,Xr.h,e),s=go(Ui.s,Xr.s,e),r=go(Ui.l,Xr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},An=new ge;ge.NAMES=Kh;var Xd=0,Gi=class extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=Ks(),this.name="",this.type="Material",this.blending=zs,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wo,this.blendDst=Xo,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=ca,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Oc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vs,this.stencilZFail=vs,this.stencilZPass=vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(n.blending=this.blending),this.side!==zi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wo&&(n.blendSrc=this.blendSrc),this.blendDst!==Xo&&(n.blendDst=this.blendDst),this.blendEquation!==es&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ca&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Oc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==vs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==vs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},rn=class extends Gi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Fh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var un=new B,qr=new Bt,Hn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Fc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Oi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)qr.fromBufferAttribute(this,e),qr.applyMatrix3(t),this.setXY(e,qr.x,qr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyMatrix3(t),this.setXYZ(e,un.x,un.y,un.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyMatrix4(t),this.setXYZ(e,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyNormalMatrix(t),this.setXYZ(e,un.x,un.y,un.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.transformDirection(t),this.setXYZ(e,un.x,un.y,un.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ir(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Fn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ir(e,this.array)),e}setX(t,e){return this.normalized&&(e=Fn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ir(e,this.array)),e}setY(t,e){return this.normalized&&(e=Fn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ir(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Fn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ir(e,this.array)),e}setW(t,e){return this.normalized&&(e=Fn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Fn(e,this.array),n=Fn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Fn(e,this.array),n=Fn(n,this.array),s=Fn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Fn(e,this.array),n=Fn(n,this.array),s=Fn(s,this.array),r=Fn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Fc&&(t.usage=this.usage),t}};var Ma=class extends Hn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Sa=class extends Hn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Qe=class extends Hn{constructor(t,e,n){super(new Float32Array(t),e,n)}};var qd=0,Yn=new dn,Io=new Nn,Cs=new B,Xn=new as,or=new as,_n=new B,zn=class i extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=Ks(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Zh(t)?Sa:Ma)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new we().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Yn.makeRotationFromQuaternion(t),this.applyMatrix4(Yn),this}rotateX(t){return Yn.makeRotationX(t),this.applyMatrix4(Yn),this}rotateY(t){return Yn.makeRotationY(t),this.applyMatrix4(Yn),this}rotateZ(t){return Yn.makeRotationZ(t),this.applyMatrix4(Yn),this}translate(t,e,n){return Yn.makeTranslation(t,e,n),this.applyMatrix4(Yn),this}scale(t,e,n){return Yn.makeScale(t,e,n),this.applyMatrix4(Yn),this}lookAt(t){return Io.lookAt(t),Io.updateMatrix(),this.applyMatrix4(Io.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Qe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new as);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Xn.setFromBufferAttribute(r),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(t){let n=this.boundingSphere.center;if(Xn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];or.setFromBufferAttribute(o),this.morphTargetsRelative?(_n.addVectors(Xn.min,or.min),Xn.expandByPoint(_n),_n.addVectors(Xn.max,or.max),Xn.expandByPoint(_n)):(Xn.expandByPoint(or.min),Xn.expandByPoint(or.max))}Xn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)_n.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(_n));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)_n.fromBufferAttribute(o,c),l&&(Cs.fromBufferAttribute(t,c),_n.add(Cs)),s=Math.max(s,n.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,s=e.position.array,r=e.normal.array,a=e.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hn(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let A=0;A<o;A++)c[A]=new B,h[A]=new B;let f=new B,u=new B,d=new B,x=new Bt,v=new Bt,m=new Bt,p=new B,M=new B;function y(A,U,F){f.fromArray(s,A*3),u.fromArray(s,U*3),d.fromArray(s,F*3),x.fromArray(a,A*2),v.fromArray(a,U*2),m.fromArray(a,F*2),u.sub(f),d.sub(f),v.sub(x),m.sub(x);let J=1/(v.x*m.y-m.x*v.y);isFinite(J)&&(p.copy(u).multiplyScalar(m.y).addScaledVector(d,-v.y).multiplyScalar(J),M.copy(d).multiplyScalar(v.x).addScaledVector(u,-m.x).multiplyScalar(J),c[A].add(p),c[U].add(p),c[F].add(p),h[A].add(M),h[U].add(M),h[F].add(M))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let A=0,U=T.length;A<U;++A){let F=T[A],J=F.start,P=F.count;for(let G=J,N=J+P;G<N;G+=3)y(n[G+0],n[G+1],n[G+2])}let O=new B,I=new B,L=new B,$=new B;function b(A){L.fromArray(r,A*3),$.copy(L);let U=c[A];O.copy(U),O.sub(L.multiplyScalar(L.dot(U))).normalize(),I.crossVectors($,U);let J=I.dot(h[A])<0?-1:1;l[A*4]=O.x,l[A*4+1]=O.y,l[A*4+2]=O.z,l[A*4+3]=J}for(let A=0,U=T.length;A<U;++A){let F=T[A],J=F.start,P=F.count;for(let G=J,N=J+P;G<N;G+=3)b(n[G+0]),b(n[G+1]),b(n[G+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Hn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let s=new B,r=new B,a=new B,o=new B,l=new B,c=new B,h=new B,f=new B;if(t)for(let u=0,d=t.count;u<d;u+=3){let x=t.getX(u+0),v=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)_n.fromBufferAttribute(t,e),_n.normalize(),t.setXYZ(e,_n.x,_n.y,_n.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h),d=0,x=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*h;for(let p=0;p<h;p++)u[x++]=c[d++]}return new Hn(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=t(u,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jc=new dn,ji=new gr,Yr=new qs,jc=new B,Ps=new B,Is=new B,Ls=new B,Lo=new B,$r=new B,Zr=new Bt,Kr=new Bt,Jr=new Bt,Qc=new B,th=new B,eh=new B,jr=new B,Qr=new B,ce=class extends Nn{constructor(t=new zn,e=new rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){$r.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(Lo.fromBufferAttribute(f,t),a?$r.addScaledVector(Lo,h):$r.addScaledVector(Lo.sub(e),h))}e.add($r)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(r),ji.copy(t.ray).recast(t.near),!(Yr.containsPoint(ji.origin)===!1&&(ji.intersectSphere(Yr,jc)===null||ji.origin.distanceToSquared(jc)>(t.far-t.near)**2))&&(Jc.copy(r).invert(),ji.copy(t.ray).applyMatrix4(Jc),!(n.boundingBox!==null&&ji.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ji)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,v=u.length;x<v;x++){let m=u[x],p=a[m.materialIndex],M=Math.max(m.start,d.start),y=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let T=M,O=y;T<O;T+=3){let I=o.getX(T),L=o.getX(T+1),$=o.getX(T+2);s=ta(this,p,t,n,c,h,f,I,L,$),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let x=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=x,p=v;m<p;m+=3){let M=o.getX(m),y=o.getX(m+1),T=o.getX(m+2);s=ta(this,a,t,n,c,h,f,M,y,T),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,v=u.length;x<v;x++){let m=u[x],p=a[m.materialIndex],M=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let T=M,O=y;T<O;T+=3){let I=T,L=T+1,$=T+2;s=ta(this,p,t,n,c,h,f,I,L,$),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let x=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=x,p=v;m<p;m+=3){let M=m,y=m+1,T=m+2;s=ta(this,a,t,n,c,h,f,M,y,T),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Yd(i,t,e,n,s,r,a,o){let l;if(t.side===Bn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===zi,o),l===null)return null;Qr.copy(o),Qr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Qr);return c<e.near||c>e.far?null:{distance:c,point:Qr.clone(),object:i}}function ta(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Ps),i.getVertexPosition(l,Is),i.getVertexPosition(c,Ls);let h=Yd(i,t,e,n,Ps,Is,Ls,jr);if(h){s&&(Zr.fromBufferAttribute(s,o),Kr.fromBufferAttribute(s,l),Jr.fromBufferAttribute(s,c),h.uv=Os.getInterpolation(jr,Ps,Is,Ls,Zr,Kr,Jr,new Bt)),r&&(Zr.fromBufferAttribute(r,o),Kr.fromBufferAttribute(r,l),Jr.fromBufferAttribute(r,c),h.uv1=Os.getInterpolation(jr,Ps,Is,Ls,Zr,Kr,Jr,new Bt),h.uv2=h.uv1),a&&(Qc.fromBufferAttribute(a,o),th.fromBufferAttribute(a,l),eh.fromBufferAttribute(a,c),h.normal=Os.getInterpolation(jr,Ps,Is,Ls,Qc,th,eh,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new B,materialIndex:0};Os.getNormal(Ps,Is,Ls,f.normal),h.face=f}return h}var Cn=class i extends zn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],u=0,d=0;x("z","y","x",-1,-1,n,e,t,a,r,0),x("z","y","x",1,-1,n,e,-t,a,r,1),x("x","z","y",1,1,t,n,e,s,a,2),x("x","z","y",1,-1,t,n,-e,s,a,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Qe(c,3)),this.setAttribute("normal",new Qe(h,3)),this.setAttribute("uv",new Qe(f,2));function x(v,m,p,M,y,T,O,I,L,$,b){let A=T/L,U=O/$,F=T/2,J=O/2,P=I/2,G=L+1,N=$+1,st=0,Z=0,Q=new B;for(let nt=0;nt<N;nt++){let ct=nt*U-J;for(let mt=0;mt<G;mt++){let tt=mt*A-F;Q[v]=tt*M,Q[m]=ct*y,Q[p]=P,c.push(Q.x,Q.y,Q.z),Q[v]=0,Q[m]=0,Q[p]=I>0?1:-1,h.push(Q.x,Q.y,Q.z),f.push(mt/L),f.push(1-nt/$),st+=1}}for(let nt=0;nt<$;nt++)for(let ct=0;ct<L;ct++){let mt=u+ct+G*nt,tt=u+ct+G*(nt+1),dt=u+(ct+1)+G*(nt+1),Et=u+(ct+1)+G*nt;l.push(mt,tt,Et),l.push(tt,dt,Et),Z+=6}o.addGroup(d,Z,b),d+=Z,u+=st}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ys(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ln(i){let t={};for(let e=0;e<i.length;e++){let n=Ys(i[e]);for(let s in n)t[s]=n[s]}return t}function $d(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Jh(i){return i.getRenderTarget()===null?i.outputColorSpace:Be.workingColorSpace}var Zd={clone:Ys,merge:Ln},Kd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Mi=class extends Gi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kd,this.fragmentShader=Jd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ys(t.uniforms),this.uniformsGroups=$d(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},ba=class extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dn,this.projectionMatrix=new dn,this.projectionMatrixInverse=new dn,this.coordinateSystem=xi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Un=class extends ba{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ko*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(mo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ko*2*Math.atan(Math.tan(mo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(mo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ds=-90,Us=1,tl=class extends Nn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Un(Ds,Us,t,e);s.layers=this.layers,this.add(s);let r=new Un(Ds,Us,t,e);r.layers=this.layers,this.add(r);let a=new Un(Ds,Us,t,e);a.layers=this.layers,this.add(a);let o=new Un(Ds,Us,t,e);o.layers=this.layers,this.add(o);let l=new Un(Ds,Us,t,e);l.layers=this.layers,this.add(l);let c=new Un(Ds,Us,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===xi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ma)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Ea=class extends Jn{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Gs,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},el=class extends vi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(lr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===rs?Mn:Zn),this.texture=new Ea(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:$n}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Cn(5,5,5),r=new Mi({name:"CubemapFromEquirect",uniforms:Ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bn,blending:Fi});r.uniforms.tEquirect.value=e;let a=new ce(s,r),o=e.minFilter;return e.minFilter===pr&&(e.minFilter=$n),new tl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Do=new B,jd=new B,Qd=new we,ii=class{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Do.subVectors(n,e).cross(jd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Do),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Qd.getNormalMatrix(t),s=this.coplanarPoint(Do).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Qi=new qs,ea=new B,xr=class{constructor(t=new ii,e=new ii,n=new ii,s=new ii,r=new ii,a=new ii){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=xi){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],f=s[6],u=s[7],d=s[8],x=s[9],v=s[10],m=s[11],p=s[12],M=s[13],y=s[14],T=s[15];if(n[0].setComponents(l-r,u-c,m-d,T-p).normalize(),n[1].setComponents(l+r,u+c,m+d,T+p).normalize(),n[2].setComponents(l+a,u+h,m+x,T+M).normalize(),n[3].setComponents(l-a,u-h,m-x,T-M).normalize(),n[4].setComponents(l-o,u-f,m-v,T-y).normalize(),e===xi)n[5].setComponents(l+o,u+f,m+v,T+y).normalize();else if(e===ma)n[5].setComponents(o,f,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Qi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(t){return Qi.center.set(0,0,0),Qi.radius=.7071067811865476,Qi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ea.x=s.normal.x>0?t.max.x:t.min.x,ea.y=s.normal.y>0?t.max.y:t.min.y,ea.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ea)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function jh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function tf(i,t){let e=t.isWebGL2,n=new WeakMap;function s(c,h){let f=c.array,u=c.usage,d=f.byteLength,x=i.createBuffer();i.bindBuffer(h,x),i.bufferData(h,f,u),c.onUploadCallback();let v;if(f instanceof Float32Array)v=i.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=i.SHORT;else if(f instanceof Uint32Array)v=i.UNSIGNED_INT;else if(f instanceof Int32Array)v=i.INT;else if(f instanceof Int8Array)v=i.BYTE;else if(f instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:x,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:d}}function r(c,h,f){let u=h.array,d=h._updateRange,x=h.updateRanges;if(i.bindBuffer(f,c),d.count===-1&&x.length===0&&i.bufferSubData(f,0,u),x.length!==0){for(let v=0,m=x.length;v<m;v++){let p=x[v];e?i.bufferSubData(f,p.start*u.BYTES_PER_ELEMENT,u,p.start,p.count):i.bufferSubData(f,p.start*u.BYTES_PER_ELEMENT,u.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}d.count!==-1&&(e?i.bufferSubData(f,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count):i.bufferSubData(f,d.offset*u.BYTES_PER_ELEMENT,u.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let f=n.get(c);if(f===void 0)n.set(c,s(c,h));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,c,h),f.version=c.version}}return{get:a,remove:o,update:l}}var Si=class i extends zn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=t/o,u=e/l,d=[],x=[],v=[],m=[];for(let p=0;p<h;p++){let M=p*u-a;for(let y=0;y<c;y++){let T=y*f-r;x.push(T,-M,0),v.push(0,0,1),m.push(y/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){let y=M+c*p,T=M+c*(p+1),O=M+1+c*(p+1),I=M+1+c*p;d.push(y,T,I),d.push(T,O,I)}this.setIndex(d),this.setAttribute("position",new Qe(x,3)),this.setAttribute("normal",new Qe(v,3)),this.setAttribute("uv",new Qe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},ef=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nf=`#ifdef USE_ALPHAHASH
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
#endif`,sf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,af=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,of=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lf=`#ifdef USE_AOMAP
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
#endif`,cf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hf=`#ifdef USE_BATCHING
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
#endif`,uf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,df=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ff=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mf=`#ifdef USE_IRIDESCENCE
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
#endif`,gf=`#ifdef USE_BUMPMAP
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
#endif`,_f=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ef=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Tf=`#define PI 3.141592653589793
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
} // validated`,wf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Af=`vec3 transformedNormal = objectNormal;
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
#endif`,Rf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,If=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Df=`
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
}`,Uf=`#ifdef USE_ENVMAP
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
#endif`,Nf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Of=`#ifdef USE_ENVMAP
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
#endif`,Ff=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bf=`#ifdef USE_ENVMAP
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
#endif`,Hf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gf=`#ifdef USE_GRADIENTMAP
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
}`,Wf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Xf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$f=`uniform bool receiveShadow;
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
#endif`,Zf=`#ifdef USE_ENVMAP
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
#endif`,Kf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qf=`varying vec3 vViewPosition;
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
#endif`,ep=`struct PhysicalMaterial {
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
}`,np=`
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
#endif`,ip=`#if defined( RE_IndirectDiffuse )
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
#endif`,sp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ap=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,op=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,lp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,cp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,up=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dp=`#if defined( USE_POINTS_UV )
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
#endif`,fp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gp=`#ifdef USE_MORPHNORMALS
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
#endif`,_p=`#ifdef USE_MORPHTARGETS
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
#endif`,xp=`#ifdef USE_MORPHTARGETS
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
#endif`,yp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Mp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ep=`#ifdef USE_NORMALMAP
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
#endif`,Tp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ap=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ip=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Up=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Np=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Op=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
}`,kp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vp=`#ifdef USE_SKINNING
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
#endif`,Gp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wp=`#ifdef USE_SKINNING
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
#endif`,Xp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$p=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zp=`#ifdef USE_TRANSMISSION
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
#endif`,Kp=`#ifdef USE_TRANSMISSION
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
#endif`,Jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,em=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nm=`uniform sampler2D t2D;
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
}`,im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,am=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,om=`#include <common>
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
}`,lm=`#if DEPTH_PACKING == 3200
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
}`,cm=`#define DISTANCE
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
}`,hm=`#define DISTANCE
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
}`,um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fm=`uniform float scale;
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
}`,pm=`uniform vec3 diffuse;
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
}`,mm=`#include <common>
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
}`,gm=`uniform vec3 diffuse;
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
}`,_m=`#define LAMBERT
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
}`,xm=`#define LAMBERT
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
}`,ym=`#define MATCAP
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
}`,vm=`#define MATCAP
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
}`,Mm=`#define NORMAL
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
}`,Sm=`#define NORMAL
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
}`,bm=`#define PHONG
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
}`,Em=`#define PHONG
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
}`,Tm=`#define STANDARD
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
}`,wm=`#define STANDARD
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
}`,Am=`#define TOON
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
}`,Rm=`#define TOON
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
}`,Cm=`uniform float size;
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
}`,Pm=`uniform vec3 diffuse;
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
}`,Im=`#include <common>
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
}`,Lm=`uniform vec3 color;
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
}`,Dm=`uniform float rotation;
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
}`,Um=`uniform vec3 diffuse;
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
}`,Ee={alphahash_fragment:ef,alphahash_pars_fragment:nf,alphamap_fragment:sf,alphamap_pars_fragment:rf,alphatest_fragment:af,alphatest_pars_fragment:of,aomap_fragment:lf,aomap_pars_fragment:cf,batching_pars_vertex:hf,batching_vertex:uf,begin_vertex:df,beginnormal_vertex:ff,bsdfs:pf,iridescence_fragment:mf,bumpmap_pars_fragment:gf,clipping_planes_fragment:_f,clipping_planes_pars_fragment:xf,clipping_planes_pars_vertex:yf,clipping_planes_vertex:vf,color_fragment:Mf,color_pars_fragment:Sf,color_pars_vertex:bf,color_vertex:Ef,common:Tf,cube_uv_reflection_fragment:wf,defaultnormal_vertex:Af,displacementmap_pars_vertex:Rf,displacementmap_vertex:Cf,emissivemap_fragment:Pf,emissivemap_pars_fragment:If,colorspace_fragment:Lf,colorspace_pars_fragment:Df,envmap_fragment:Uf,envmap_common_pars_fragment:Nf,envmap_pars_fragment:Of,envmap_pars_vertex:Ff,envmap_physical_pars_fragment:Zf,envmap_vertex:Bf,fog_vertex:Hf,fog_pars_vertex:zf,fog_fragment:kf,fog_pars_fragment:Vf,gradientmap_pars_fragment:Gf,lightmap_fragment:Wf,lightmap_pars_fragment:Xf,lights_lambert_fragment:qf,lights_lambert_pars_fragment:Yf,lights_pars_begin:$f,lights_toon_fragment:Kf,lights_toon_pars_fragment:Jf,lights_phong_fragment:jf,lights_phong_pars_fragment:Qf,lights_physical_fragment:tp,lights_physical_pars_fragment:ep,lights_fragment_begin:np,lights_fragment_maps:ip,lights_fragment_end:sp,logdepthbuf_fragment:rp,logdepthbuf_pars_fragment:ap,logdepthbuf_pars_vertex:op,logdepthbuf_vertex:lp,map_fragment:cp,map_pars_fragment:hp,map_particle_fragment:up,map_particle_pars_fragment:dp,metalnessmap_fragment:fp,metalnessmap_pars_fragment:pp,morphcolor_vertex:mp,morphnormal_vertex:gp,morphtarget_pars_vertex:_p,morphtarget_vertex:xp,normal_fragment_begin:yp,normal_fragment_maps:vp,normal_pars_fragment:Mp,normal_pars_vertex:Sp,normal_vertex:bp,normalmap_pars_fragment:Ep,clearcoat_normal_fragment_begin:Tp,clearcoat_normal_fragment_maps:wp,clearcoat_pars_fragment:Ap,iridescence_pars_fragment:Rp,opaque_fragment:Cp,packing:Pp,premultiplied_alpha_fragment:Ip,project_vertex:Lp,dithering_fragment:Dp,dithering_pars_fragment:Up,roughnessmap_fragment:Np,roughnessmap_pars_fragment:Op,shadowmap_pars_fragment:Fp,shadowmap_pars_vertex:Bp,shadowmap_vertex:Hp,shadowmask_pars_fragment:zp,skinbase_vertex:kp,skinning_pars_vertex:Vp,skinning_vertex:Gp,skinnormal_vertex:Wp,specularmap_fragment:Xp,specularmap_pars_fragment:qp,tonemapping_fragment:Yp,tonemapping_pars_fragment:$p,transmission_fragment:Zp,transmission_pars_fragment:Kp,uv_pars_fragment:Jp,uv_pars_vertex:jp,uv_vertex:Qp,worldpos_vertex:tm,background_vert:em,background_frag:nm,backgroundCube_vert:im,backgroundCube_frag:sm,cube_vert:rm,cube_frag:am,depth_vert:om,depth_frag:lm,distanceRGBA_vert:cm,distanceRGBA_frag:hm,equirect_vert:um,equirect_frag:dm,linedashed_vert:fm,linedashed_frag:pm,meshbasic_vert:mm,meshbasic_frag:gm,meshlambert_vert:_m,meshlambert_frag:xm,meshmatcap_vert:ym,meshmatcap_frag:vm,meshnormal_vert:Mm,meshnormal_frag:Sm,meshphong_vert:bm,meshphong_frag:Em,meshphysical_vert:Tm,meshphysical_frag:wm,meshtoon_vert:Am,meshtoon_frag:Rm,points_vert:Cm,points_frag:Pm,shadow_vert:Im,shadow_frag:Lm,sprite_vert:Dm,sprite_frag:Um},bt={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new we},alphaMap:{value:null},alphaMapTransform:{value:new we},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new we}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new we}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new we}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new we},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new we},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new we},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new we}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new we}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new we}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new we},alphaTest:{value:0},uvTransform:{value:new we}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new we},alphaMap:{value:null},alphaMapTransform:{value:new we},alphaTest:{value:0}}},ci={basic:{uniforms:Ln([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:Ee.meshbasic_vert,fragmentShader:Ee.meshbasic_frag},lambert:{uniforms:Ln([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new ge(0)}}]),vertexShader:Ee.meshlambert_vert,fragmentShader:Ee.meshlambert_frag},phong:{uniforms:Ln([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30}}]),vertexShader:Ee.meshphong_vert,fragmentShader:Ee.meshphong_frag},standard:{uniforms:Ln([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag},toon:{uniforms:Ln([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new ge(0)}}]),vertexShader:Ee.meshtoon_vert,fragmentShader:Ee.meshtoon_frag},matcap:{uniforms:Ln([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:Ee.meshmatcap_vert,fragmentShader:Ee.meshmatcap_frag},points:{uniforms:Ln([bt.points,bt.fog]),vertexShader:Ee.points_vert,fragmentShader:Ee.points_frag},dashed:{uniforms:Ln([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ee.linedashed_vert,fragmentShader:Ee.linedashed_frag},depth:{uniforms:Ln([bt.common,bt.displacementmap]),vertexShader:Ee.depth_vert,fragmentShader:Ee.depth_frag},normal:{uniforms:Ln([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:Ee.meshnormal_vert,fragmentShader:Ee.meshnormal_frag},sprite:{uniforms:Ln([bt.sprite,bt.fog]),vertexShader:Ee.sprite_vert,fragmentShader:Ee.sprite_frag},background:{uniforms:{uvTransform:{value:new we},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ee.background_vert,fragmentShader:Ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ee.backgroundCube_vert,fragmentShader:Ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ee.cube_vert,fragmentShader:Ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ee.equirect_vert,fragmentShader:Ee.equirect_frag},distanceRGBA:{uniforms:Ln([bt.common,bt.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ee.distanceRGBA_vert,fragmentShader:Ee.distanceRGBA_frag},shadow:{uniforms:Ln([bt.lights,bt.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:Ee.shadow_vert,fragmentShader:Ee.shadow_frag}};ci.physical={uniforms:Ln([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new we},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new we},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new we},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new we},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new we},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new we},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new we},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new we},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new we},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new we},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new we},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new we}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag};var na={r:0,b:0,g:0};function Nm(i,t,e,n,s,r,a){let o=new ge(0),l=r===!0?0:1,c,h,f=null,u=0,d=null;function x(m,p){let M=!1,y=p.isScene===!0?p.background:null;y&&y.isTexture&&(y=(p.backgroundBlurriness>0?e:t).get(y)),y===null?v(o,l):y&&y.isColor&&(v(y,1),M=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Va)?(h===void 0&&(h=new ce(new Cn(1,1,1),new Mi({name:"BackgroundCubeMaterial",uniforms:Ys(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,I,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=Be.getTransfer(y.colorSpace)!==Xe,(f!==y||u!==y.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,f=y,u=y.version,d=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new ce(new Si(2,2),new Mi({name:"BackgroundMaterial",uniforms:Ys(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=Be.getTransfer(y.colorSpace)!==Xe,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||u!==y.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,f=y,u=y.version,d=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,p){m.getRGB(na,Jh(i)),n.buffers.color.setClear(na.r,na.g,na.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(o,l)},render:x}}function Om(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null),c=l,h=!1;function f(P,G,N,st,Z){let Q=!1;if(a){let nt=v(st,N,G);c!==nt&&(c=nt,d(c.object)),Q=p(P,st,N,Z),Q&&M(P,st,N,Z)}else{let nt=G.wireframe===!0;(c.geometry!==st.id||c.program!==N.id||c.wireframe!==nt)&&(c.geometry=st.id,c.program=N.id,c.wireframe=nt,Q=!0)}Z!==null&&e.update(Z,i.ELEMENT_ARRAY_BUFFER),(Q||h)&&(h=!1,$(P,G,N,st),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function u(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function d(P){return n.isWebGL2?i.bindVertexArray(P):r.bindVertexArrayOES(P)}function x(P){return n.isWebGL2?i.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function v(P,G,N){let st=N.wireframe===!0,Z=o[P.id];Z===void 0&&(Z={},o[P.id]=Z);let Q=Z[G.id];Q===void 0&&(Q={},Z[G.id]=Q);let nt=Q[st];return nt===void 0&&(nt=m(u()),Q[st]=nt),nt}function m(P){let G=[],N=[],st=[];for(let Z=0;Z<s;Z++)G[Z]=0,N[Z]=0,st[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:N,attributeDivisors:st,object:P,attributes:{},index:null}}function p(P,G,N,st){let Z=c.attributes,Q=G.attributes,nt=0,ct=N.getAttributes();for(let mt in ct)if(ct[mt].location>=0){let dt=Z[mt],Et=Q[mt];if(Et===void 0&&(mt==="instanceMatrix"&&P.instanceMatrix&&(Et=P.instanceMatrix),mt==="instanceColor"&&P.instanceColor&&(Et=P.instanceColor)),dt===void 0||dt.attribute!==Et||Et&&dt.data!==Et.data)return!0;nt++}return c.attributesNum!==nt||c.index!==st}function M(P,G,N,st){let Z={},Q=G.attributes,nt=0,ct=N.getAttributes();for(let mt in ct)if(ct[mt].location>=0){let dt=Q[mt];dt===void 0&&(mt==="instanceMatrix"&&P.instanceMatrix&&(dt=P.instanceMatrix),mt==="instanceColor"&&P.instanceColor&&(dt=P.instanceColor));let Et={};Et.attribute=dt,dt&&dt.data&&(Et.data=dt.data),Z[mt]=Et,nt++}c.attributes=Z,c.attributesNum=nt,c.index=st}function y(){let P=c.newAttributes;for(let G=0,N=P.length;G<N;G++)P[G]=0}function T(P){O(P,0)}function O(P,G){let N=c.newAttributes,st=c.enabledAttributes,Z=c.attributeDivisors;N[P]=1,st[P]===0&&(i.enableVertexAttribArray(P),st[P]=1),Z[P]!==G&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,G),Z[P]=G)}function I(){let P=c.newAttributes,G=c.enabledAttributes;for(let N=0,st=G.length;N<st;N++)G[N]!==P[N]&&(i.disableVertexAttribArray(N),G[N]=0)}function L(P,G,N,st,Z,Q,nt){nt===!0?i.vertexAttribIPointer(P,G,N,Z,Q):i.vertexAttribPointer(P,G,N,st,Z,Q)}function $(P,G,N,st){if(n.isWebGL2===!1&&(P.isInstancedMesh||st.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();let Z=st.attributes,Q=N.getAttributes(),nt=G.defaultAttributeValues;for(let ct in Q){let mt=Q[ct];if(mt.location>=0){let tt=Z[ct];if(tt===void 0&&(ct==="instanceMatrix"&&P.instanceMatrix&&(tt=P.instanceMatrix),ct==="instanceColor"&&P.instanceColor&&(tt=P.instanceColor)),tt!==void 0){let dt=tt.normalized,Et=tt.itemSize,zt=e.get(tt);if(zt===void 0)continue;let Xt=zt.buffer,ne=zt.type,Jt=zt.bytesPerElement,Lt=n.isWebGL2===!0&&(ne===i.INT||ne===i.UNSIGNED_INT||tt.gpuType===Hh);if(tt.isInterleavedBufferAttribute){let ae=tt.data,Y=ae.stride,Ve=tt.offset;if(ae.isInstancedInterleavedBuffer){for(let qt=0;qt<mt.locationSize;qt++)O(mt.location+qt,ae.meshPerAttribute);P.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let qt=0;qt<mt.locationSize;qt++)T(mt.location+qt);i.bindBuffer(i.ARRAY_BUFFER,Xt);for(let qt=0;qt<mt.locationSize;qt++)L(mt.location+qt,Et/mt.locationSize,ne,dt,Y*Jt,(Ve+Et/mt.locationSize*qt)*Jt,Lt)}else{if(tt.isInstancedBufferAttribute){for(let ae=0;ae<mt.locationSize;ae++)O(mt.location+ae,tt.meshPerAttribute);P.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let ae=0;ae<mt.locationSize;ae++)T(mt.location+ae);i.bindBuffer(i.ARRAY_BUFFER,Xt);for(let ae=0;ae<mt.locationSize;ae++)L(mt.location+ae,Et/mt.locationSize,ne,dt,Et*Jt,Et/mt.locationSize*ae*Jt,Lt)}}else if(nt!==void 0){let dt=nt[ct];if(dt!==void 0)switch(dt.length){case 2:i.vertexAttrib2fv(mt.location,dt);break;case 3:i.vertexAttrib3fv(mt.location,dt);break;case 4:i.vertexAttrib4fv(mt.location,dt);break;default:i.vertexAttrib1fv(mt.location,dt)}}}}I()}function b(){F();for(let P in o){let G=o[P];for(let N in G){let st=G[N];for(let Z in st)x(st[Z].object),delete st[Z];delete G[N]}delete o[P]}}function A(P){if(o[P.id]===void 0)return;let G=o[P.id];for(let N in G){let st=G[N];for(let Z in st)x(st[Z].object),delete st[Z];delete G[N]}delete o[P.id]}function U(P){for(let G in o){let N=o[G];if(N[P.id]===void 0)continue;let st=N[P.id];for(let Z in st)x(st[Z].object),delete st[Z];delete N[P.id]}}function F(){J(),h=!0,c!==l&&(c=l,d(c.object))}function J(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:F,resetDefaultState:J,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfProgram:U,initAttributes:y,enableAttribute:T,disableUnusedAttributes:I}}function Fm(i,t,e,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,f){i.drawArrays(r,h,f),e.update(f,r,1)}function l(h,f,u){if(u===0)return;let d,x;if(s)d=i,x="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[x](r,h,f,u),e.update(f,r,u)}function c(h,f,u){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let x=0;x<u;x++)this.render(h[x],f[x]);else{d.multiDrawArraysWEBGL(r,h,0,f,0,u);let x=0;for(let v=0;v<u;v++)x+=f[v];e.update(x,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Bm(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let L=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=u>0,T=a||t.has("OES_texture_float"),O=y&&T,I=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:M,vertexTextures:y,floatFragmentTextures:T,floatVertexTextures:O,maxSamples:I}}function Hm(i){let t=this,e=null,n=0,s=!1,r=!1,a=new ii,o=new we,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let x=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||x===null||x.length===0||r&&!m)r?h(null):c();else{let M=r?0:n,y=M*4,T=p.clippingState||null;l.value=T,T=h(x,u,y,d);for(let O=0;O!==y;++O)T[O]=e[O];p.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,x){let v=f!==null?f.length:0,m=null;if(v!==0){if(m=l.value,x!==!0||m===null){let p=d+v*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,T=d;y!==v;++y,T+=4)a.copy(f[y]).applyMatrix4(M,o),a.normal.toArray(m,T),m[T+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function zm(i){let t=new WeakMap;function e(a,o){return o===qo?a.mapping=Gs:o===Yo&&(a.mapping=Ws),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===qo||o===Yo)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new el(l.height/2);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ta=class extends ba{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Fs=4,nh=[.125,.215,.35,.446,.526,.582],ns=20,Uo=new Ta,ih=new ge,No=null,Oo=0,Fo=0,ts=(1+Math.sqrt(5))/2,Ns=1/ts,sh=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,ts,Ns),new B(0,ts,-Ns),new B(Ns,0,ts),new B(-Ns,0,ts),new B(ts,Ns,0),new B(-ts,Ns,0)],wa=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){No=this._renderer.getRenderTarget(),Oo=this._renderer.getActiveCubeFace(),Fo=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=oh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ah(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(No,Oo,Fo),t.scissorTest=!1,ia(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Gs||t.mapping===Ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),No=this._renderer.getRenderTarget(),Oo=this._renderer.getActiveCubeFace(),Fo=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:mr,format:ri,colorSpace:yi,depthBuffer:!1},s=rh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=km(r)),this._blurMaterial=Vm(r,t,e)}return s}_compileMaterial(t){let e=new ce(this._lodPlanes[0],t);this._renderer.compile(e,Uo)}_sceneToCubeUV(t,e,n,s){let o=new Un(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(ih),h.toneMapping=Bi,h.autoClear=!1;let d=new rn({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),x=new ce(new Cn,d),v=!1,m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,v=!0):(d.color.copy(ih),v=!0);for(let p=0;p<6;p++){let M=p%3;M===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):M===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let y=this._cubeSize;ia(s,M*y,p>2?y:0,y,y),h.setRenderTarget(s),v&&h.render(x,o),h.render(t,o)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=u,h.autoClear=f,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Gs||t.mapping===Ws;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=oh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ah());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new ce(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;ia(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Uo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=sh[(s-1)%sh.length];this._blur(t,s-1,s,r,a)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new ce(this._lodPlanes[s],c),u=c.uniforms,d=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ns-1),v=r/x,m=isFinite(r)?1+Math.floor(h*v):ns;m>ns&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ns}`);let p=[],M=0;for(let L=0;L<ns;++L){let $=L/v,b=Math.exp(-$*$/2);p.push(b),L===0?M+=b:L<m&&(M+=2*b)}for(let L=0;L<p.length;L++)p[L]=p[L]/M;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:y}=this;u.dTheta.value=x,u.mipInt.value=y-n;let T=this._sizeLods[s],O=3*T*(s>y-Fs?s-y+Fs:0),I=4*(this._cubeSize-T);ia(e,O,I,3*T,2*T),l.setRenderTarget(e),l.render(f,Uo)}};function km(i){let t=[],e=[],n=[],s=i,r=i-Fs+1+nh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Fs?l=nh[a-i+Fs-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,x=6,v=3,m=2,p=1,M=new Float32Array(v*x*d),y=new Float32Array(m*x*d),T=new Float32Array(p*x*d);for(let I=0;I<d;I++){let L=I%3*2/3-1,$=I>2?0:-1,b=[L,$,0,L+2/3,$,0,L+2/3,$+1,0,L,$,0,L+2/3,$+1,0,L,$+1,0];M.set(b,v*x*I),y.set(u,m*x*I);let A=[I,I,I,I,I,I];T.set(A,p*x*I)}let O=new zn;O.setAttribute("position",new Hn(M,v)),O.setAttribute("uv",new Hn(y,m)),O.setAttribute("faceIndex",new Hn(T,p)),t.push(O),s>Fs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function rh(i,t,e){let n=new vi(i,t,e);return n.texture.mapping=Va,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ia(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Vm(i,t,e){let n=new Float32Array(ns),s=new B(0,1,0);return new Mi({name:"SphericalGaussianBlur",defines:{n:ns,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:zl(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function ah(){return new Mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zl(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function oh(){return new Mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function zl(){return`

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
	`}function Gm(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===qo||l===Yo,h=l===Gs||l===Ws;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=t.get(o);return e===null&&(e=new wa(i)),f=c?e.fromEquirectangular(o,f):e.fromCubemap(o,f),t.set(o,f),f.texture}else{if(t.has(o))return t.get(o).texture;{let f=o.image;if(c&&f&&f.height>0||h&&f&&s(f)){e===null&&(e=new wa(i));let u=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,u),o.addEventListener("dispose",r),u.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Wm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Xm(i,t,e,n){let s={},r=new WeakMap;function a(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let x in u.attributes)t.remove(u.attributes[x]);for(let x in u.morphAttributes){let v=u.morphAttributes[x];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}u.removeEventListener("dispose",a),delete s[u.id];let d=r.get(u);d&&(t.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(f){let u=f.attributes;for(let x in u)t.update(u[x],i.ARRAY_BUFFER);let d=f.morphAttributes;for(let x in d){let v=d[x];for(let m=0,p=v.length;m<p;m++)t.update(v[m],i.ARRAY_BUFFER)}}function c(f){let u=[],d=f.index,x=f.attributes.position,v=0;if(d!==null){let M=d.array;v=d.version;for(let y=0,T=M.length;y<T;y+=3){let O=M[y+0],I=M[y+1],L=M[y+2];u.push(O,I,I,L,L,O)}}else if(x!==void 0){let M=x.array;v=x.version;for(let y=0,T=M.length/3-1;y<T;y+=3){let O=y+0,I=y+1,L=y+2;u.push(O,I,I,L,L,O)}}else return;let m=new(Zh(u)?Sa:Ma)(u,1);m.version=v;let p=r.get(f);p&&t.remove(p),r.set(f,m)}function h(f){let u=r.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function qm(i,t,e,n){let s=n.isWebGL2,r;function a(d){r=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function h(d,x){i.drawElements(r,x,o,d*l),e.update(x,r,1)}function f(d,x,v){if(v===0)return;let m,p;if(s)m=i,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,x,o,d*l,v),e.update(x,r,v)}function u(d,x,v){if(v===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<v;p++)this.render(d[p]/l,x[p]);else{m.multiDrawElementsWEBGL(r,x,0,o,d,0,v);let p=0;for(let M=0;M<v;M++)p+=x[M];e.update(p,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=f,this.renderMultiDraw=u}function Ym(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function $m(i,t){return i[0]-t[0]}function Zm(i,t){return Math.abs(t[1])-Math.abs(i[1])}function Km(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,a=new xn,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,f){let u=c.morphTargetInfluences;if(t.isWebGL2===!0){let d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=d!==void 0?d.length:0,v=r.get(h);if(v===void 0||v.count!==x){let P=function(){F.dispose(),r.delete(h),h.removeEventListener("dispose",P)};v!==void 0&&v.texture.dispose();let M=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,O=h.morphAttributes.position||[],I=h.morphAttributes.normal||[],L=h.morphAttributes.color||[],$=0;M===!0&&($=1),y===!0&&($=2),T===!0&&($=3);let b=h.attributes.position.count*$,A=1;b>t.maxTextureSize&&(A=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let U=new Float32Array(b*A*4*x),F=new ya(U,b,A,x);F.type=Oi,F.needsUpdate=!0;let J=$*4;for(let G=0;G<x;G++){let N=O[G],st=I[G],Z=L[G],Q=b*A*4*G;for(let nt=0;nt<N.count;nt++){let ct=nt*J;M===!0&&(a.fromBufferAttribute(N,nt),U[Q+ct+0]=a.x,U[Q+ct+1]=a.y,U[Q+ct+2]=a.z,U[Q+ct+3]=0),y===!0&&(a.fromBufferAttribute(st,nt),U[Q+ct+4]=a.x,U[Q+ct+5]=a.y,U[Q+ct+6]=a.z,U[Q+ct+7]=0),T===!0&&(a.fromBufferAttribute(Z,nt),U[Q+ct+8]=a.x,U[Q+ct+9]=a.y,U[Q+ct+10]=a.z,U[Q+ct+11]=Z.itemSize===4?a.w:1)}}v={count:x,texture:F,size:new Bt(b,A)},r.set(h,v),h.addEventListener("dispose",P)}let m=0;for(let M=0;M<u.length;M++)m+=u[M];let p=h.morphTargetsRelative?1:1-m;f.getUniforms().setValue(i,"morphTargetBaseInfluence",p),f.getUniforms().setValue(i,"morphTargetInfluences",u),f.getUniforms().setValue(i,"morphTargetsTexture",v.texture,e),f.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}else{let d=u===void 0?0:u.length,x=n[h.id];if(x===void 0||x.length!==d){x=[];for(let y=0;y<d;y++)x[y]=[y,0];n[h.id]=x}for(let y=0;y<d;y++){let T=x[y];T[0]=y,T[1]=u[y]}x.sort(Zm);for(let y=0;y<8;y++)y<d&&x[y][1]?(o[y][0]=x[y][0],o[y][1]=x[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort($m);let v=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let y=0;y<8;y++){let T=o[y],O=T[0],I=T[1];O!==Number.MAX_SAFE_INTEGER&&I?(v&&h.getAttribute("morphTarget"+y)!==v[O]&&h.setAttribute("morphTarget"+y,v[O]),m&&h.getAttribute("morphNormal"+y)!==m[O]&&h.setAttribute("morphNormal"+y,m[O]),s[y]=I,p+=I):(v&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),m&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),s[y]=0)}let M=h.morphTargetsRelative?1:1-p;f.getUniforms().setValue(i,"morphTargetBaseInfluence",M),f.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Jm(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,f=t.get(l,h);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return f}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Aa=class extends Jn{constructor(t,e,n,s,r,a,o,l,c,h){if(h=h!==void 0?h:ss,h!==ss&&h!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ss&&(n=Ni),n===void 0&&h===Xs&&(n=is),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Dn,this.minFilter=l!==void 0?l:Dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Qh=new Jn,tu=new Aa(1,1);tu.compareFunction=$h;var eu=new ya,nu=new Qo,iu=new Ea,lh=[],ch=[],hh=new Float32Array(16),uh=new Float32Array(9),dh=new Float32Array(4);function Js(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=lh[s];if(r===void 0&&(r=new Float32Array(s),lh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function fn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function pn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Wa(i,t){let e=ch[t];e===void 0&&(e=new Int32Array(t),ch[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function jm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Qm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fn(e,t))return;i.uniform2fv(this.addr,t),pn(e,t)}}function tg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(fn(e,t))return;i.uniform3fv(this.addr,t),pn(e,t)}}function eg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fn(e,t))return;i.uniform4fv(this.addr,t),pn(e,t)}}function ng(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(fn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),pn(e,t)}else{if(fn(e,n))return;dh.set(n),i.uniformMatrix2fv(this.addr,!1,dh),pn(e,n)}}function ig(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(fn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),pn(e,t)}else{if(fn(e,n))return;uh.set(n),i.uniformMatrix3fv(this.addr,!1,uh),pn(e,n)}}function sg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(fn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),pn(e,t)}else{if(fn(e,n))return;hh.set(n),i.uniformMatrix4fv(this.addr,!1,hh),pn(e,n)}}function rg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ag(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fn(e,t))return;i.uniform2iv(this.addr,t),pn(e,t)}}function og(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fn(e,t))return;i.uniform3iv(this.addr,t),pn(e,t)}}function lg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fn(e,t))return;i.uniform4iv(this.addr,t),pn(e,t)}}function cg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function hg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fn(e,t))return;i.uniform2uiv(this.addr,t),pn(e,t)}}function ug(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fn(e,t))return;i.uniform3uiv(this.addr,t),pn(e,t)}}function dg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fn(e,t))return;i.uniform4uiv(this.addr,t),pn(e,t)}}function fg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?tu:Qh;e.setTexture2D(t||r,s)}function pg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||nu,s)}function mg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||iu,s)}function gg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||eu,s)}function _g(i){switch(i){case 5126:return jm;case 35664:return Qm;case 35665:return tg;case 35666:return eg;case 35674:return ng;case 35675:return ig;case 35676:return sg;case 5124:case 35670:return rg;case 35667:case 35671:return ag;case 35668:case 35672:return og;case 35669:case 35673:return lg;case 5125:return cg;case 36294:return hg;case 36295:return ug;case 36296:return dg;case 35678:case 36198:case 36298:case 36306:case 35682:return fg;case 35679:case 36299:case 36307:return pg;case 35680:case 36300:case 36308:case 36293:return mg;case 36289:case 36303:case 36311:case 36292:return gg}}function xg(i,t){i.uniform1fv(this.addr,t)}function yg(i,t){let e=Js(t,this.size,2);i.uniform2fv(this.addr,e)}function vg(i,t){let e=Js(t,this.size,3);i.uniform3fv(this.addr,e)}function Mg(i,t){let e=Js(t,this.size,4);i.uniform4fv(this.addr,e)}function Sg(i,t){let e=Js(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function bg(i,t){let e=Js(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Eg(i,t){let e=Js(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Tg(i,t){i.uniform1iv(this.addr,t)}function wg(i,t){i.uniform2iv(this.addr,t)}function Ag(i,t){i.uniform3iv(this.addr,t)}function Rg(i,t){i.uniform4iv(this.addr,t)}function Cg(i,t){i.uniform1uiv(this.addr,t)}function Pg(i,t){i.uniform2uiv(this.addr,t)}function Ig(i,t){i.uniform3uiv(this.addr,t)}function Lg(i,t){i.uniform4uiv(this.addr,t)}function Dg(i,t,e){let n=this.cache,s=t.length,r=Wa(e,s);fn(n,r)||(i.uniform1iv(this.addr,r),pn(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Qh,r[a])}function Ug(i,t,e){let n=this.cache,s=t.length,r=Wa(e,s);fn(n,r)||(i.uniform1iv(this.addr,r),pn(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||nu,r[a])}function Ng(i,t,e){let n=this.cache,s=t.length,r=Wa(e,s);fn(n,r)||(i.uniform1iv(this.addr,r),pn(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||iu,r[a])}function Og(i,t,e){let n=this.cache,s=t.length,r=Wa(e,s);fn(n,r)||(i.uniform1iv(this.addr,r),pn(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||eu,r[a])}function Fg(i){switch(i){case 5126:return xg;case 35664:return yg;case 35665:return vg;case 35666:return Mg;case 35674:return Sg;case 35675:return bg;case 35676:return Eg;case 5124:case 35670:return Tg;case 35667:case 35671:return wg;case 35668:case 35672:return Ag;case 35669:case 35673:return Rg;case 5125:return Cg;case 36294:return Pg;case 36295:return Ig;case 36296:return Lg;case 35678:case 36198:case 36298:case 36306:case 35682:return Dg;case 35679:case 36299:case 36307:return Ug;case 35680:case 36300:case 36308:case 36293:return Ng;case 36289:case 36303:case 36311:case 36292:return Og}}var nl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=_g(e.type)}},il=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Fg(e.type)}},sl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Bo=/(\w+)(\])?(\[|\.)?/g;function fh(i,t){i.seq.push(t),i.map[t.id]=t}function Bg(i,t,e){let n=i.name,s=n.length;for(Bo.lastIndex=0;;){let r=Bo.exec(n),a=Bo.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){fh(e,c===void 0?new nl(o,i,t):new il(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new sl(o),fh(e,f)),e=f}}}var Vs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Bg(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function ph(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Hg=37297,zg=0;function kg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Vg(i){let t=Be.getPrimaries(Be.workingColorSpace),e=Be.getPrimaries(i),n;switch(t===e?n="":t===pa&&e===fa?n="LinearDisplayP3ToLinearSRGB":t===fa&&e===pa&&(n="LinearSRGBToLinearDisplayP3"),i){case yi:case Ga:return[n,"LinearTransferOETF"];case Mn:case Hl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function mh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+kg(i.getShaderSource(t),a)}else return s}function Gg(i,t){let e=Vg(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Wg(i,t){let e;switch(t){case od:e="Linear";break;case ld:e="Reinhard";break;case cd:e="OptimizedCineon";break;case hd:e="ACESFilmic";break;case dd:e="AgX";break;case ud:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Xg(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Bs).join(`
`)}function qg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Bs).join(`
`)}function Yg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function $g(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Bs(i){return i!==""}function gh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function _h(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Zg=/^[ \t]*#include +<([\w\d./]+)>/gm;function rl(i){return i.replace(Zg,Jg)}var Kg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Jg(i,t){let e=Ee[t];if(e===void 0){let n=Kg.get(t);if(n!==void 0)e=Ee[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return rl(e)}var jg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xh(i){return i.replace(jg,Qg)}function Qg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function yh(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function t0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Oh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Fl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===_i&&(t="SHADOWMAP_TYPE_VSM"),t}function e0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Gs:case Ws:t="ENVMAP_TYPE_CUBE";break;case Va:t="ENVMAP_TYPE_CUBE_UV";break}return t}function n0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ws:t="ENVMAP_MODE_REFRACTION";break}return t}function i0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Fh:t="ENVMAP_BLENDING_MULTIPLY";break;case rd:t="ENVMAP_BLENDING_MIX";break;case ad:t="ENVMAP_BLENDING_ADD";break}return t}function s0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function r0(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=t0(e),c=e0(e),h=n0(e),f=i0(e),u=s0(e),d=e.isWebGL2?"":Xg(e),x=qg(e),v=Yg(r),m=s.createProgram(),p,M,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Bs).join(`
`),p.length>0&&(p+=`
`),M=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Bs).join(`
`),M.length>0&&(M+=`
`)):(p=[yh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bs).join(`
`),M=[d,yh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bi?"#define TONE_MAPPING":"",e.toneMapping!==Bi?Ee.tonemapping_pars_fragment:"",e.toneMapping!==Bi?Wg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ee.colorspace_pars_fragment,Gg("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Bs).join(`
`)),a=rl(a),a=gh(a,e),a=_h(a,e),o=rl(o),o=gh(o,e),o=_h(o,e),a=xh(a),o=xh(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,M=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Bc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);let T=y+p+a,O=y+M+o,I=ph(s,s.VERTEX_SHADER,T),L=ph(s,s.FRAGMENT_SHADER,O);s.attachShader(m,I),s.attachShader(m,L),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function $(F){if(i.debug.checkShaderErrors){let J=s.getProgramInfoLog(m).trim(),P=s.getShaderInfoLog(I).trim(),G=s.getShaderInfoLog(L).trim(),N=!0,st=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(N=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,I,L);else{let Z=mh(s,I,"vertex"),Q=mh(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+J+`
`+Z+`
`+Q)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(P===""||G==="")&&(st=!1);st&&(F.diagnostics={runnable:N,programLog:J,vertexShader:{log:P,prefix:p},fragmentShader:{log:G,prefix:M}})}s.deleteShader(I),s.deleteShader(L),b=new Vs(s,m),A=$g(s,m)}let b;this.getUniforms=function(){return b===void 0&&$(this),b};let A;this.getAttributes=function(){return A===void 0&&$(this),A};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(m,Hg)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=zg++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=I,this.fragmentShader=L,this}var a0=0,al=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ol(t),e.set(t,n)),n}},ol=class{constructor(t){this.id=a0++,this.code=t,this.usedTimes=0}};function o0(i,t,e,n,s,r,a){let o=new _r,l=new al,c=[],h=s.isWebGL2,f=s.logarithmicDepthBuffer,u=s.vertexTextures,d=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return b===0?"uv":`uv${b}`}function m(b,A,U,F,J){let P=F.fog,G=J.geometry,N=b.isMeshStandardMaterial?F.environment:null,st=(b.isMeshStandardMaterial?e:t).get(b.envMap||N),Z=st&&st.mapping===Va?st.image.height:null,Q=x[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));let nt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ct=nt!==void 0?nt.length:0,mt=0;G.morphAttributes.position!==void 0&&(mt=1),G.morphAttributes.normal!==void 0&&(mt=2),G.morphAttributes.color!==void 0&&(mt=3);let tt,dt,Et,zt;if(Q){let be=ci[Q];tt=be.vertexShader,dt=be.fragmentShader}else tt=b.vertexShader,dt=b.fragmentShader,l.update(b),Et=l.getVertexShaderID(b),zt=l.getFragmentShaderID(b);let Xt=i.getRenderTarget(),ne=J.isInstancedMesh===!0,Jt=J.isBatchedMesh===!0,Lt=!!b.map,ae=!!b.matcap,Y=!!st,Ve=!!b.aoMap,qt=!!b.lightMap,jt=!!b.bumpMap,Dt=!!b.normalMap,Fe=!!b.displacementMap,ue=!!b.emissiveMap,R=!!b.metalnessMap,S=!!b.roughnessMap,K=b.anisotropy>0,_t=b.clearcoat>0,gt=b.iridescence>0,xt=b.sheen>0,Yt=b.transmission>0,At=K&&!!b.anisotropyMap,Ht=_t&&!!b.clearcoatMap,ie=_t&&!!b.clearcoatNormalMap,oe=_t&&!!b.clearcoatRoughnessMap,ot=gt&&!!b.iridescenceMap,le=gt&&!!b.iridescenceThicknessMap,ee=xt&&!!b.sheenColorMap,he=xt&&!!b.sheenRoughnessMap,$t=!!b.specularMap,Ut=!!b.specularColorMap,Zt=!!b.specularIntensityMap,Re=Yt&&!!b.transmissionMap,Wt=Yt&&!!b.thicknessMap,Nt=!!b.gradientMap,ft=!!b.alphaMap,D=b.alphaTest>0,Rt=!!b.alphaHash,Ct=!!b.extensions,Qt=!!G.attributes.uv1,kt=!!G.attributes.uv2,Te=!!G.attributes.uv3,Pe=Bi;return b.toneMapped&&(Xt===null||Xt.isXRRenderTarget===!0)&&(Pe=i.toneMapping),{isWebGL2:h,shaderID:Q,shaderType:b.type,shaderName:b.name,vertexShader:tt,fragmentShader:dt,defines:b.defines,customVertexShaderID:Et,customFragmentShaderID:zt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:Jt,instancing:ne,instancingColor:ne&&J.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:Xt===null?i.outputColorSpace:Xt.isXRRenderTarget===!0?Xt.texture.colorSpace:yi,map:Lt,matcap:ae,envMap:Y,envMapMode:Y&&st.mapping,envMapCubeUVHeight:Z,aoMap:Ve,lightMap:qt,bumpMap:jt,normalMap:Dt,displacementMap:u&&Fe,emissiveMap:ue,normalMapObjectSpace:Dt&&b.normalMapType===Ed,normalMapTangentSpace:Dt&&b.normalMapType===Yh,metalnessMap:R,roughnessMap:S,anisotropy:K,anisotropyMap:At,clearcoat:_t,clearcoatMap:Ht,clearcoatNormalMap:ie,clearcoatRoughnessMap:oe,iridescence:gt,iridescenceMap:ot,iridescenceThicknessMap:le,sheen:xt,sheenColorMap:ee,sheenRoughnessMap:he,specularMap:$t,specularColorMap:Ut,specularIntensityMap:Zt,transmission:Yt,transmissionMap:Re,thicknessMap:Wt,gradientMap:Nt,opaque:b.transparent===!1&&b.blending===zs,alphaMap:ft,alphaTest:D,alphaHash:Rt,combine:b.combine,mapUv:Lt&&v(b.map.channel),aoMapUv:Ve&&v(b.aoMap.channel),lightMapUv:qt&&v(b.lightMap.channel),bumpMapUv:jt&&v(b.bumpMap.channel),normalMapUv:Dt&&v(b.normalMap.channel),displacementMapUv:Fe&&v(b.displacementMap.channel),emissiveMapUv:ue&&v(b.emissiveMap.channel),metalnessMapUv:R&&v(b.metalnessMap.channel),roughnessMapUv:S&&v(b.roughnessMap.channel),anisotropyMapUv:At&&v(b.anisotropyMap.channel),clearcoatMapUv:Ht&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:ie&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ot&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:le&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:ee&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:he&&v(b.sheenRoughnessMap.channel),specularMapUv:$t&&v(b.specularMap.channel),specularColorMapUv:Ut&&v(b.specularColorMap.channel),specularIntensityMapUv:Zt&&v(b.specularIntensityMap.channel),transmissionMapUv:Re&&v(b.transmissionMap.channel),thicknessMapUv:Wt&&v(b.thicknessMap.channel),alphaMapUv:ft&&v(b.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Dt||K),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:Qt,vertexUv2s:kt,vertexUv3s:Te,pointsUvs:J.isPoints===!0&&!!G.attributes.uv&&(Lt||ft),fog:!!P,useFog:b.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:J.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:mt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:Pe,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Lt&&b.map.isVideoTexture===!0&&Be.getTransfer(b.map.colorSpace)===Xe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ln,flipSided:b.side===Bn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:Ct&&b.extensions.derivatives===!0,extensionFragDepth:Ct&&b.extensions.fragDepth===!0,extensionDrawBuffers:Ct&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ct&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ct&&b.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){let A=[];if(b.shaderID?A.push(b.shaderID):(A.push(b.customVertexShaderID),A.push(b.customFragmentShaderID)),b.defines!==void 0)for(let U in b.defines)A.push(U),A.push(b.defines[U]);return b.isRawShaderMaterial===!1&&(M(A,b),y(A,b),A.push(i.outputColorSpace)),A.push(b.customProgramCacheKey),A.join()}function M(b,A){b.push(A.precision),b.push(A.outputColorSpace),b.push(A.envMapMode),b.push(A.envMapCubeUVHeight),b.push(A.mapUv),b.push(A.alphaMapUv),b.push(A.lightMapUv),b.push(A.aoMapUv),b.push(A.bumpMapUv),b.push(A.normalMapUv),b.push(A.displacementMapUv),b.push(A.emissiveMapUv),b.push(A.metalnessMapUv),b.push(A.roughnessMapUv),b.push(A.anisotropyMapUv),b.push(A.clearcoatMapUv),b.push(A.clearcoatNormalMapUv),b.push(A.clearcoatRoughnessMapUv),b.push(A.iridescenceMapUv),b.push(A.iridescenceThicknessMapUv),b.push(A.sheenColorMapUv),b.push(A.sheenRoughnessMapUv),b.push(A.specularMapUv),b.push(A.specularColorMapUv),b.push(A.specularIntensityMapUv),b.push(A.transmissionMapUv),b.push(A.thicknessMapUv),b.push(A.combine),b.push(A.fogExp2),b.push(A.sizeAttenuation),b.push(A.morphTargetsCount),b.push(A.morphAttributeCount),b.push(A.numDirLights),b.push(A.numPointLights),b.push(A.numSpotLights),b.push(A.numSpotLightMaps),b.push(A.numHemiLights),b.push(A.numRectAreaLights),b.push(A.numDirLightShadows),b.push(A.numPointLightShadows),b.push(A.numSpotLightShadows),b.push(A.numSpotLightShadowsWithMaps),b.push(A.numLightProbes),b.push(A.shadowMapType),b.push(A.toneMapping),b.push(A.numClippingPlanes),b.push(A.numClipIntersection),b.push(A.depthPacking)}function y(b,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),A.batching&&o.enable(19),b.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),b.push(o.mask)}function T(b){let A=x[b.type],U;if(A){let F=ci[A];U=Zd.clone(F.uniforms)}else U=b.uniforms;return U}function O(b,A){let U;for(let F=0,J=c.length;F<J;F++){let P=c[F];if(P.cacheKey===A){U=P,++U.usedTimes;break}}return U===void 0&&(U=new r0(i,A,b,r),c.push(U)),U}function I(b){if(--b.usedTimes===0){let A=c.indexOf(b);c[A]=c[c.length-1],c.pop(),b.destroy()}}function L(b){l.remove(b)}function $(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:T,acquireProgram:O,releaseProgram:I,releaseShaderCache:L,programs:c,dispose:$}}function l0(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function c0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function vh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Mh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f,u,d,x,v,m){let p=i[t];return p===void 0?(p={id:f.id,object:f,geometry:u,material:d,groupOrder:x,renderOrder:f.renderOrder,z:v,group:m},i[t]=p):(p.id=f.id,p.object=f,p.geometry=u,p.material=d,p.groupOrder=x,p.renderOrder=f.renderOrder,p.z=v,p.group=m),t++,p}function o(f,u,d,x,v,m){let p=a(f,u,d,x,v,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(f,u,d,x,v,m){let p=a(f,u,d,x,v,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(f,u){e.length>1&&e.sort(f||c0),n.length>1&&n.sort(u||vh),s.length>1&&s.sort(u||vh)}function h(){for(let f=t,u=i.length;f<u;f++){let d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function h0(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Mh,i.set(n,[a])):s>=r.length?(a=new Mh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function u0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new ge};break;case"SpotLight":e={position:new B,direction:new B,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new ge,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":e={color:new ge,position:new B,halfWidth:new B,halfHeight:new B};break}return i[t.id]=e,e}}}function d0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var f0=0;function p0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function m0(i,t){let e=new u0,n=d0(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new B);let r=new B,a=new dn,o=new dn;function l(h,f){let u=0,d=0,x=0;for(let F=0;F<9;F++)s.probe[F].set(0,0,0);let v=0,m=0,p=0,M=0,y=0,T=0,O=0,I=0,L=0,$=0,b=0;h.sort(p0);let A=f===!0?Math.PI:1;for(let F=0,J=h.length;F<J;F++){let P=h[F],G=P.color,N=P.intensity,st=P.distance,Z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=G.r*N*A,d+=G.g*N*A,x+=G.b*N*A;else if(P.isLightProbe){for(let Q=0;Q<9;Q++)s.probe[Q].addScaledVector(P.sh.coefficients[Q],N);b++}else if(P.isDirectionalLight){let Q=e.get(P);if(Q.color.copy(P.color).multiplyScalar(P.intensity*A),P.castShadow){let nt=P.shadow,ct=n.get(P);ct.shadowBias=nt.bias,ct.shadowNormalBias=nt.normalBias,ct.shadowRadius=nt.radius,ct.shadowMapSize=nt.mapSize,s.directionalShadow[v]=ct,s.directionalShadowMap[v]=Z,s.directionalShadowMatrix[v]=P.shadow.matrix,T++}s.directional[v]=Q,v++}else if(P.isSpotLight){let Q=e.get(P);Q.position.setFromMatrixPosition(P.matrixWorld),Q.color.copy(G).multiplyScalar(N*A),Q.distance=st,Q.coneCos=Math.cos(P.angle),Q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Q.decay=P.decay,s.spot[p]=Q;let nt=P.shadow;if(P.map&&(s.spotLightMap[L]=P.map,L++,nt.updateMatrices(P),P.castShadow&&$++),s.spotLightMatrix[p]=nt.matrix,P.castShadow){let ct=n.get(P);ct.shadowBias=nt.bias,ct.shadowNormalBias=nt.normalBias,ct.shadowRadius=nt.radius,ct.shadowMapSize=nt.mapSize,s.spotShadow[p]=ct,s.spotShadowMap[p]=Z,I++}p++}else if(P.isRectAreaLight){let Q=e.get(P);Q.color.copy(G).multiplyScalar(N),Q.halfWidth.set(P.width*.5,0,0),Q.halfHeight.set(0,P.height*.5,0),s.rectArea[M]=Q,M++}else if(P.isPointLight){let Q=e.get(P);if(Q.color.copy(P.color).multiplyScalar(P.intensity*A),Q.distance=P.distance,Q.decay=P.decay,P.castShadow){let nt=P.shadow,ct=n.get(P);ct.shadowBias=nt.bias,ct.shadowNormalBias=nt.normalBias,ct.shadowRadius=nt.radius,ct.shadowMapSize=nt.mapSize,ct.shadowCameraNear=nt.camera.near,ct.shadowCameraFar=nt.camera.far,s.pointShadow[m]=ct,s.pointShadowMap[m]=Z,s.pointShadowMatrix[m]=P.shadow.matrix,O++}s.point[m]=Q,m++}else if(P.isHemisphereLight){let Q=e.get(P);Q.skyColor.copy(P.color).multiplyScalar(N*A),Q.groundColor.copy(P.groundColor).multiplyScalar(N*A),s.hemi[y]=Q,y++}}M>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=bt.LTC_FLOAT_1,s.rectAreaLTC2=bt.LTC_FLOAT_2):(s.rectAreaLTC1=bt.LTC_HALF_1,s.rectAreaLTC2=bt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=bt.LTC_FLOAT_1,s.rectAreaLTC2=bt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=bt.LTC_HALF_1,s.rectAreaLTC2=bt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=u,s.ambient[1]=d,s.ambient[2]=x;let U=s.hash;(U.directionalLength!==v||U.pointLength!==m||U.spotLength!==p||U.rectAreaLength!==M||U.hemiLength!==y||U.numDirectionalShadows!==T||U.numPointShadows!==O||U.numSpotShadows!==I||U.numSpotMaps!==L||U.numLightProbes!==b)&&(s.directional.length=v,s.spot.length=p,s.rectArea.length=M,s.point.length=m,s.hemi.length=y,s.directionalShadow.length=T,s.directionalShadowMap.length=T,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=I,s.spotShadowMap.length=I,s.directionalShadowMatrix.length=T,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=I+L-$,s.spotLightMap.length=L,s.numSpotLightShadowsWithMaps=$,s.numLightProbes=b,U.directionalLength=v,U.pointLength=m,U.spotLength=p,U.rectAreaLength=M,U.hemiLength=y,U.numDirectionalShadows=T,U.numPointShadows=O,U.numSpotShadows=I,U.numSpotMaps=L,U.numLightProbes=b,s.version=f0++)}function c(h,f){let u=0,d=0,x=0,v=0,m=0,p=f.matrixWorldInverse;for(let M=0,y=h.length;M<y;M++){let T=h[M];if(T.isDirectionalLight){let O=s.directional[u];O.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),O.direction.sub(r),O.direction.transformDirection(p),u++}else if(T.isSpotLight){let O=s.spot[x];O.position.setFromMatrixPosition(T.matrixWorld),O.position.applyMatrix4(p),O.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),O.direction.sub(r),O.direction.transformDirection(p),x++}else if(T.isRectAreaLight){let O=s.rectArea[v];O.position.setFromMatrixPosition(T.matrixWorld),O.position.applyMatrix4(p),o.identity(),a.copy(T.matrixWorld),a.premultiply(p),o.extractRotation(a),O.halfWidth.set(T.width*.5,0,0),O.halfHeight.set(0,T.height*.5,0),O.halfWidth.applyMatrix4(o),O.halfHeight.applyMatrix4(o),v++}else if(T.isPointLight){let O=s.point[d];O.position.setFromMatrixPosition(T.matrixWorld),O.position.applyMatrix4(p),d++}else if(T.isHemisphereLight){let O=s.hemi[m];O.direction.setFromMatrixPosition(T.matrixWorld),O.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:s}}function Sh(i,t){let e=new m0(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function a(f){n.push(f)}function o(f){s.push(f)}function l(f){e.setup(n,f)}function c(f){e.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function g0(i,t){let e=new WeakMap;function n(r,a=0){let o=e.get(r),l;return o===void 0?(l=new Sh(i,t),e.set(r,[l])):a>=o.length?(l=new Sh(i,t),o.push(l)):l=o[a],l}function s(){e=new WeakMap}return{get:n,dispose:s}}var ll=class extends Gi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},cl=class extends Gi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},_0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,x0=`uniform sampler2D shadow_pass;
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
}`;function y0(i,t,e){let n=new xr,s=new Bt,r=new Bt,a=new xn,o=new ll({depthPacking:bd}),l=new cl,c={},h=e.maxTextureSize,f={[zi]:Bn,[Bn]:zi,[ln]:ln},u=new Mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:_0,fragmentShader:x0}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let x=new zn;x.setAttribute("position",new Hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new ce(x,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oh;let p=this.type;this.render=function(I,L,$){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;let b=i.getRenderTarget(),A=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Fi),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let J=p!==_i&&this.type===_i,P=p===_i&&this.type!==_i;for(let G=0,N=I.length;G<N;G++){let st=I[G],Z=st.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let Q=Z.getFrameExtents();if(s.multiply(Q),r.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Q.x),s.x=r.x*Q.x,Z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Q.y),s.y=r.y*Q.y,Z.mapSize.y=r.y)),Z.map===null||J===!0||P===!0){let ct=this.type!==_i?{minFilter:Dn,magFilter:Dn}:{};Z.map!==null&&Z.map.dispose(),Z.map=new vi(s.x,s.y,ct),Z.map.texture.name=st.name+".shadowMap",Z.camera.updateProjectionMatrix()}i.setRenderTarget(Z.map),i.clear();let nt=Z.getViewportCount();for(let ct=0;ct<nt;ct++){let mt=Z.getViewport(ct);a.set(r.x*mt.x,r.y*mt.y,r.x*mt.z,r.y*mt.w),F.viewport(a),Z.updateMatrices(st,ct),n=Z.getFrustum(),T(L,$,Z.camera,st,this.type)}Z.isPointLightShadow!==!0&&this.type===_i&&M(Z,$),Z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,A,U)};function M(I,L){let $=t.update(v);u.defines.VSM_SAMPLES!==I.blurSamples&&(u.defines.VSM_SAMPLES=I.blurSamples,d.defines.VSM_SAMPLES=I.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new vi(s.x,s.y)),u.uniforms.shadow_pass.value=I.map.texture,u.uniforms.resolution.value=I.mapSize,u.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(L,null,$,u,v,null),d.uniforms.shadow_pass.value=I.mapPass.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(L,null,$,d,v,null)}function y(I,L,$,b){let A=null,U=$.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(U!==void 0)A=U;else if(A=$.isPointLight===!0?l:o,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){let F=A.uuid,J=L.uuid,P=c[F];P===void 0&&(P={},c[F]=P);let G=P[J];G===void 0&&(G=A.clone(),P[J]=G,L.addEventListener("dispose",O)),A=G}if(A.visible=L.visible,A.wireframe=L.wireframe,b===_i?A.side=L.shadowSide!==null?L.shadowSide:L.side:A.side=L.shadowSide!==null?L.shadowSide:f[L.side],A.alphaMap=L.alphaMap,A.alphaTest=L.alphaTest,A.map=L.map,A.clipShadows=L.clipShadows,A.clippingPlanes=L.clippingPlanes,A.clipIntersection=L.clipIntersection,A.displacementMap=L.displacementMap,A.displacementScale=L.displacementScale,A.displacementBias=L.displacementBias,A.wireframeLinewidth=L.wireframeLinewidth,A.linewidth=L.linewidth,$.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let F=i.properties.get(A);F.light=$}return A}function T(I,L,$,b,A){if(I.visible===!1)return;if(I.layers.test(L.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&A===_i)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,I.matrixWorld);let J=t.update(I),P=I.material;if(Array.isArray(P)){let G=J.groups;for(let N=0,st=G.length;N<st;N++){let Z=G[N],Q=P[Z.materialIndex];if(Q&&Q.visible){let nt=y(I,Q,b,A);I.onBeforeShadow(i,I,L,$,J,nt,Z),i.renderBufferDirect($,null,J,nt,I,Z),I.onAfterShadow(i,I,L,$,J,nt,Z)}}}else if(P.visible){let G=y(I,P,b,A);I.onBeforeShadow(i,I,L,$,J,G,null),i.renderBufferDirect($,null,J,G,I,null),I.onAfterShadow(i,I,L,$,J,G,null)}}let F=I.children;for(let J=0,P=F.length;J<P;J++)T(F[J],L,$,b,A)}function O(I){I.target.removeEventListener("dispose",O);for(let $ in c){let b=c[$],A=I.target.uuid;A in b&&(b[A].dispose(),delete b[A])}}}function v0(i,t,e){let n=e.isWebGL2;function s(){let D=!1,Rt=new xn,Ct=null,Qt=new xn(0,0,0,0);return{setMask:function(kt){Ct!==kt&&!D&&(i.colorMask(kt,kt,kt,kt),Ct=kt)},setLocked:function(kt){D=kt},setClear:function(kt,Te,Pe,Ie,be){be===!0&&(kt*=Ie,Te*=Ie,Pe*=Ie),Rt.set(kt,Te,Pe,Ie),Qt.equals(Rt)===!1&&(i.clearColor(kt,Te,Pe,Ie),Qt.copy(Rt))},reset:function(){D=!1,Ct=null,Qt.set(-1,0,0,0)}}}function r(){let D=!1,Rt=null,Ct=null,Qt=null;return{setTest:function(kt){kt?Jt(i.DEPTH_TEST):Lt(i.DEPTH_TEST)},setMask:function(kt){Rt!==kt&&!D&&(i.depthMask(kt),Rt=kt)},setFunc:function(kt){if(Ct!==kt){switch(kt){case ju:i.depthFunc(i.NEVER);break;case Qu:i.depthFunc(i.ALWAYS);break;case td:i.depthFunc(i.LESS);break;case ca:i.depthFunc(i.LEQUAL);break;case ed:i.depthFunc(i.EQUAL);break;case nd:i.depthFunc(i.GEQUAL);break;case id:i.depthFunc(i.GREATER);break;case sd:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ct=kt}},setLocked:function(kt){D=kt},setClear:function(kt){Qt!==kt&&(i.clearDepth(kt),Qt=kt)},reset:function(){D=!1,Rt=null,Ct=null,Qt=null}}}function a(){let D=!1,Rt=null,Ct=null,Qt=null,kt=null,Te=null,Pe=null,Ie=null,be=null;return{setTest:function(_e){D||(_e?Jt(i.STENCIL_TEST):Lt(i.STENCIL_TEST))},setMask:function(_e){Rt!==_e&&!D&&(i.stencilMask(_e),Rt=_e)},setFunc:function(_e,qe,Ze){(Ct!==_e||Qt!==qe||kt!==Ze)&&(i.stencilFunc(_e,qe,Ze),Ct=_e,Qt=qe,kt=Ze)},setOp:function(_e,qe,Ze){(Te!==_e||Pe!==qe||Ie!==Ze)&&(i.stencilOp(_e,qe,Ze),Te=_e,Pe=qe,Ie=Ze)},setLocked:function(_e){D=_e},setClear:function(_e){be!==_e&&(i.clearStencil(_e),be=_e)},reset:function(){D=!1,Rt=null,Ct=null,Qt=null,kt=null,Te=null,Pe=null,Ie=null,be=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,f=new WeakMap,u={},d={},x=new WeakMap,v=[],m=null,p=!1,M=null,y=null,T=null,O=null,I=null,L=null,$=null,b=new ge(0,0,0),A=0,U=!1,F=null,J=null,P=null,G=null,N=null,st=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,Q=0,nt=i.getParameter(i.VERSION);nt.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(nt)[1]),Z=Q>=1):nt.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),Z=Q>=2);let ct=null,mt={},tt=i.getParameter(i.SCISSOR_BOX),dt=i.getParameter(i.VIEWPORT),Et=new xn().fromArray(tt),zt=new xn().fromArray(dt);function Xt(D,Rt,Ct,Qt){let kt=new Uint8Array(4),Te=i.createTexture();i.bindTexture(D,Te),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pe=0;Pe<Ct;Pe++)n&&(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)?i.texImage3D(Rt,0,i.RGBA,1,1,Qt,0,i.RGBA,i.UNSIGNED_BYTE,kt):i.texImage2D(Rt+Pe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,kt);return Te}let ne={};ne[i.TEXTURE_2D]=Xt(i.TEXTURE_2D,i.TEXTURE_2D,1),ne[i.TEXTURE_CUBE_MAP]=Xt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ne[i.TEXTURE_2D_ARRAY]=Xt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ne[i.TEXTURE_3D]=Xt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Jt(i.DEPTH_TEST),l.setFunc(ca),ue(!1),R(ec),Jt(i.CULL_FACE),Dt(Fi);function Jt(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function Lt(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function ae(D,Rt){return d[D]!==Rt?(i.bindFramebuffer(D,Rt),d[D]=Rt,n&&(D===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Rt),D===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Rt)),!0):!1}function Y(D,Rt){let Ct=v,Qt=!1;if(D)if(Ct=x.get(Rt),Ct===void 0&&(Ct=[],x.set(Rt,Ct)),D.isWebGLMultipleRenderTargets){let kt=D.texture;if(Ct.length!==kt.length||Ct[0]!==i.COLOR_ATTACHMENT0){for(let Te=0,Pe=kt.length;Te<Pe;Te++)Ct[Te]=i.COLOR_ATTACHMENT0+Te;Ct.length=kt.length,Qt=!0}}else Ct[0]!==i.COLOR_ATTACHMENT0&&(Ct[0]=i.COLOR_ATTACHMENT0,Qt=!0);else Ct[0]!==i.BACK&&(Ct[0]=i.BACK,Qt=!0);Qt&&(e.isWebGL2?i.drawBuffers(Ct):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ct))}function Ve(D){return m!==D?(i.useProgram(D),m=D,!0):!1}let qt={[es]:i.FUNC_ADD,[Fu]:i.FUNC_SUBTRACT,[Bu]:i.FUNC_REVERSE_SUBTRACT};if(n)qt[rc]=i.MIN,qt[ac]=i.MAX;else{let D=t.get("EXT_blend_minmax");D!==null&&(qt[rc]=D.MIN_EXT,qt[ac]=D.MAX_EXT)}let jt={[Hu]:i.ZERO,[zu]:i.ONE,[ku]:i.SRC_COLOR,[Wo]:i.SRC_ALPHA,[Yu]:i.SRC_ALPHA_SATURATE,[Xu]:i.DST_COLOR,[Gu]:i.DST_ALPHA,[Vu]:i.ONE_MINUS_SRC_COLOR,[Xo]:i.ONE_MINUS_SRC_ALPHA,[qu]:i.ONE_MINUS_DST_COLOR,[Wu]:i.ONE_MINUS_DST_ALPHA,[$u]:i.CONSTANT_COLOR,[Zu]:i.ONE_MINUS_CONSTANT_COLOR,[Ku]:i.CONSTANT_ALPHA,[Ju]:i.ONE_MINUS_CONSTANT_ALPHA};function Dt(D,Rt,Ct,Qt,kt,Te,Pe,Ie,be,_e){if(D===Fi){p===!0&&(Lt(i.BLEND),p=!1);return}if(p===!1&&(Jt(i.BLEND),p=!0),D!==Ou){if(D!==M||_e!==U){if((y!==es||I!==es)&&(i.blendEquation(i.FUNC_ADD),y=es,I=es),_e)switch(D){case zs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nc:i.blendFunc(i.ONE,i.ONE);break;case ic:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case zs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ic:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}T=null,O=null,L=null,$=null,b.set(0,0,0),A=0,M=D,U=_e}return}kt=kt||Rt,Te=Te||Ct,Pe=Pe||Qt,(Rt!==y||kt!==I)&&(i.blendEquationSeparate(qt[Rt],qt[kt]),y=Rt,I=kt),(Ct!==T||Qt!==O||Te!==L||Pe!==$)&&(i.blendFuncSeparate(jt[Ct],jt[Qt],jt[Te],jt[Pe]),T=Ct,O=Qt,L=Te,$=Pe),(Ie.equals(b)===!1||be!==A)&&(i.blendColor(Ie.r,Ie.g,Ie.b,be),b.copy(Ie),A=be),M=D,U=!1}function Fe(D,Rt){D.side===ln?Lt(i.CULL_FACE):Jt(i.CULL_FACE);let Ct=D.side===Bn;Rt&&(Ct=!Ct),ue(Ct),D.blending===zs&&D.transparent===!1?Dt(Fi):Dt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),o.setMask(D.colorWrite);let Qt=D.stencilWrite;c.setTest(Qt),Qt&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),K(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Jt(i.SAMPLE_ALPHA_TO_COVERAGE):Lt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ue(D){F!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),F=D)}function R(D){D!==Uu?(Jt(i.CULL_FACE),D!==J&&(D===ec?i.cullFace(i.BACK):D===Nu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Lt(i.CULL_FACE),J=D}function S(D){D!==P&&(Z&&i.lineWidth(D),P=D)}function K(D,Rt,Ct){D?(Jt(i.POLYGON_OFFSET_FILL),(G!==Rt||N!==Ct)&&(i.polygonOffset(Rt,Ct),G=Rt,N=Ct)):Lt(i.POLYGON_OFFSET_FILL)}function _t(D){D?Jt(i.SCISSOR_TEST):Lt(i.SCISSOR_TEST)}function gt(D){D===void 0&&(D=i.TEXTURE0+st-1),ct!==D&&(i.activeTexture(D),ct=D)}function xt(D,Rt,Ct){Ct===void 0&&(ct===null?Ct=i.TEXTURE0+st-1:Ct=ct);let Qt=mt[Ct];Qt===void 0&&(Qt={type:void 0,texture:void 0},mt[Ct]=Qt),(Qt.type!==D||Qt.texture!==Rt)&&(ct!==Ct&&(i.activeTexture(Ct),ct=Ct),i.bindTexture(D,Rt||ne[D]),Qt.type=D,Qt.texture=Rt)}function Yt(){let D=mt[ct];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function At(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ht(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ot(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $t(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ut(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Zt(D){Et.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Et.copy(D))}function Re(D){zt.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),zt.copy(D))}function Wt(D,Rt){let Ct=f.get(Rt);Ct===void 0&&(Ct=new WeakMap,f.set(Rt,Ct));let Qt=Ct.get(D);Qt===void 0&&(Qt=i.getUniformBlockIndex(Rt,D.name),Ct.set(D,Qt))}function Nt(D,Rt){let Qt=f.get(Rt).get(D);h.get(Rt)!==Qt&&(i.uniformBlockBinding(Rt,Qt,D.__bindingPointIndex),h.set(Rt,Qt))}function ft(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ct=null,mt={},d={},x=new WeakMap,v=[],m=null,p=!1,M=null,y=null,T=null,O=null,I=null,L=null,$=null,b=new ge(0,0,0),A=0,U=!1,F=null,J=null,P=null,G=null,N=null,Et.set(0,0,i.canvas.width,i.canvas.height),zt.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Jt,disable:Lt,bindFramebuffer:ae,drawBuffers:Y,useProgram:Ve,setBlending:Dt,setMaterial:Fe,setFlipSided:ue,setCullFace:R,setLineWidth:S,setPolygonOffset:K,setScissorTest:_t,activeTexture:gt,bindTexture:xt,unbindTexture:Yt,compressedTexImage2D:At,compressedTexImage3D:Ht,texImage2D:$t,texImage3D:Ut,updateUBOMapping:Wt,uniformBlockBinding:Nt,texStorage2D:ee,texStorage3D:he,texSubImage2D:ie,texSubImage3D:oe,compressedTexSubImage2D:ot,compressedTexSubImage3D:le,scissor:Zt,viewport:Re,reset:ft}}function M0(i,t,e,n,s,r,a){let o=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,f,u=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,S){return d?new OffscreenCanvas(R,S):ga("canvas")}function v(R,S,K,_t){let gt=1;if((R.width>_t||R.height>_t)&&(gt=_t/Math.max(R.width,R.height)),gt<1||S===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){let xt=S?Jo:Math.floor,Yt=xt(gt*R.width),At=xt(gt*R.height);f===void 0&&(f=x(Yt,At));let Ht=K?x(Yt,At):f;return Ht.width=Yt,Ht.height=At,Ht.getContext("2d").drawImage(R,0,0,Yt,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Yt+"x"+At+")."),Ht}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function m(R){return Hc(R.width)&&Hc(R.height)}function p(R){return o?!1:R.wrapS!==si||R.wrapT!==si||R.minFilter!==Dn&&R.minFilter!==$n}function M(R,S){return R.generateMipmaps&&S&&R.minFilter!==Dn&&R.minFilter!==$n}function y(R){i.generateMipmap(R)}function T(R,S,K,_t,gt=!1){if(o===!1)return S;if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let xt=S;if(S===i.RED&&(K===i.FLOAT&&(xt=i.R32F),K===i.HALF_FLOAT&&(xt=i.R16F),K===i.UNSIGNED_BYTE&&(xt=i.R8)),S===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(xt=i.R8UI),K===i.UNSIGNED_SHORT&&(xt=i.R16UI),K===i.UNSIGNED_INT&&(xt=i.R32UI),K===i.BYTE&&(xt=i.R8I),K===i.SHORT&&(xt=i.R16I),K===i.INT&&(xt=i.R32I)),S===i.RG&&(K===i.FLOAT&&(xt=i.RG32F),K===i.HALF_FLOAT&&(xt=i.RG16F),K===i.UNSIGNED_BYTE&&(xt=i.RG8)),S===i.RGBA){let Yt=gt?da:Be.getTransfer(_t);K===i.FLOAT&&(xt=i.RGBA32F),K===i.HALF_FLOAT&&(xt=i.RGBA16F),K===i.UNSIGNED_BYTE&&(xt=Yt===Xe?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT_4_4_4_4&&(xt=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(xt=i.RGB5_A1)}return(xt===i.R16F||xt===i.R32F||xt===i.RG16F||xt===i.RG32F||xt===i.RGBA16F||xt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),xt}function O(R,S,K){return M(R,K)===!0||R.isFramebufferTexture&&R.minFilter!==Dn&&R.minFilter!==$n?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function I(R){return R===Dn||R===oc||R===oo?i.NEAREST:i.LINEAR}function L(R){let S=R.target;S.removeEventListener("dispose",L),b(S),S.isVideoTexture&&h.delete(S)}function $(R){let S=R.target;S.removeEventListener("dispose",$),U(S)}function b(R){let S=n.get(R);if(S.__webglInit===void 0)return;let K=R.source,_t=u.get(K);if(_t){let gt=_t[S.__cacheKey];gt.usedTimes--,gt.usedTimes===0&&A(R),Object.keys(_t).length===0&&u.delete(K)}n.remove(R)}function A(R){let S=n.get(R);i.deleteTexture(S.__webglTexture);let K=R.source,_t=u.get(K);delete _t[S.__cacheKey],a.memory.textures--}function U(R){let S=R.texture,K=n.get(R),_t=n.get(S);if(_t.__webglTexture!==void 0&&(i.deleteTexture(_t.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let gt=0;gt<6;gt++){if(Array.isArray(K.__webglFramebuffer[gt]))for(let xt=0;xt<K.__webglFramebuffer[gt].length;xt++)i.deleteFramebuffer(K.__webglFramebuffer[gt][xt]);else i.deleteFramebuffer(K.__webglFramebuffer[gt]);K.__webglDepthbuffer&&i.deleteRenderbuffer(K.__webglDepthbuffer[gt])}else{if(Array.isArray(K.__webglFramebuffer))for(let gt=0;gt<K.__webglFramebuffer.length;gt++)i.deleteFramebuffer(K.__webglFramebuffer[gt]);else i.deleteFramebuffer(K.__webglFramebuffer);if(K.__webglDepthbuffer&&i.deleteRenderbuffer(K.__webglDepthbuffer),K.__webglMultisampledFramebuffer&&i.deleteFramebuffer(K.__webglMultisampledFramebuffer),K.__webglColorRenderbuffer)for(let gt=0;gt<K.__webglColorRenderbuffer.length;gt++)K.__webglColorRenderbuffer[gt]&&i.deleteRenderbuffer(K.__webglColorRenderbuffer[gt]);K.__webglDepthRenderbuffer&&i.deleteRenderbuffer(K.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let gt=0,xt=S.length;gt<xt;gt++){let Yt=n.get(S[gt]);Yt.__webglTexture&&(i.deleteTexture(Yt.__webglTexture),a.memory.textures--),n.remove(S[gt])}n.remove(S),n.remove(R)}let F=0;function J(){F=0}function P(){let R=F;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),F+=1,R}function G(R){let S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function N(R,S){let K=n.get(R);if(R.isVideoTexture&&Fe(R),R.isRenderTargetTexture===!1&&R.version>0&&K.__version!==R.version){let _t=R.image;if(_t===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Et(K,R,S);return}}e.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+S)}function st(R,S){let K=n.get(R);if(R.version>0&&K.__version!==R.version){Et(K,R,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+S)}function Z(R,S){let K=n.get(R);if(R.version>0&&K.__version!==R.version){Et(K,R,S);return}e.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+S)}function Q(R,S){let K=n.get(R);if(R.version>0&&K.__version!==R.version){zt(K,R,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+S)}let nt={[fr]:i.REPEAT,[si]:i.CLAMP_TO_EDGE,[$o]:i.MIRRORED_REPEAT},ct={[Dn]:i.NEAREST,[oc]:i.NEAREST_MIPMAP_NEAREST,[oo]:i.NEAREST_MIPMAP_LINEAR,[$n]:i.LINEAR,[fd]:i.LINEAR_MIPMAP_NEAREST,[pr]:i.LINEAR_MIPMAP_LINEAR},mt={[Td]:i.NEVER,[Id]:i.ALWAYS,[wd]:i.LESS,[$h]:i.LEQUAL,[Ad]:i.EQUAL,[Pd]:i.GEQUAL,[Rd]:i.GREATER,[Cd]:i.NOTEQUAL};function tt(R,S,K){if(K?(i.texParameteri(R,i.TEXTURE_WRAP_S,nt[S.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,nt[S.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,nt[S.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,ct[S.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,ct[S.minFilter])):(i.texParameteri(R,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(R,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(S.wrapS!==si||S.wrapT!==si)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(R,i.TEXTURE_MAG_FILTER,I(S.magFilter)),i.texParameteri(R,i.TEXTURE_MIN_FILTER,I(S.minFilter)),S.minFilter!==Dn&&S.minFilter!==$n&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,mt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let _t=t.get("EXT_texture_filter_anisotropic");if(S.magFilter===Dn||S.minFilter!==oo&&S.minFilter!==pr||S.type===Oi&&t.has("OES_texture_float_linear")===!1||o===!1&&S.type===mr&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(i.texParameterf(R,_t.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function dt(R,S){let K=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",L));let _t=S.source,gt=u.get(_t);gt===void 0&&(gt={},u.set(_t,gt));let xt=G(S);if(xt!==R.__cacheKey){gt[xt]===void 0&&(gt[xt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,K=!0),gt[xt].usedTimes++;let Yt=gt[R.__cacheKey];Yt!==void 0&&(gt[R.__cacheKey].usedTimes--,Yt.usedTimes===0&&A(S)),R.__cacheKey=xt,R.__webglTexture=gt[xt].texture}return K}function Et(R,S,K){let _t=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(_t=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(_t=i.TEXTURE_3D);let gt=dt(R,S),xt=S.source;e.bindTexture(_t,R.__webglTexture,i.TEXTURE0+K);let Yt=n.get(xt);if(xt.version!==Yt.__version||gt===!0){e.activeTexture(i.TEXTURE0+K);let At=Be.getPrimaries(Be.workingColorSpace),Ht=S.colorSpace===Zn?null:Be.getPrimaries(S.colorSpace),ie=S.colorSpace===Zn||At===Ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let oe=p(S)&&m(S.image)===!1,ot=v(S.image,oe,!1,s.maxTextureSize);ot=ue(S,ot);let le=m(ot)||o,ee=r.convert(S.format,S.colorSpace),he=r.convert(S.type),$t=T(S.internalFormat,ee,he,S.colorSpace,S.isVideoTexture);tt(_t,S,le);let Ut,Zt=S.mipmaps,Re=o&&S.isVideoTexture!==!0&&$t!==Xh,Wt=Yt.__version===void 0||gt===!0,Nt=O(S,ot,le);if(S.isDepthTexture)$t=i.DEPTH_COMPONENT,o?S.type===Oi?$t=i.DEPTH_COMPONENT32F:S.type===Ni?$t=i.DEPTH_COMPONENT24:S.type===is?$t=i.DEPTH24_STENCIL8:$t=i.DEPTH_COMPONENT16:S.type===Oi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===ss&&$t===i.DEPTH_COMPONENT&&S.type!==Bl&&S.type!==Ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Ni,he=r.convert(S.type)),S.format===Xs&&$t===i.DEPTH_COMPONENT&&($t=i.DEPTH_STENCIL,S.type!==is&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=is,he=r.convert(S.type))),Wt&&(Re?e.texStorage2D(i.TEXTURE_2D,1,$t,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,$t,ot.width,ot.height,0,ee,he,null));else if(S.isDataTexture)if(Zt.length>0&&le){Re&&Wt&&e.texStorage2D(i.TEXTURE_2D,Nt,$t,Zt[0].width,Zt[0].height);for(let ft=0,D=Zt.length;ft<D;ft++)Ut=Zt[ft],Re?e.texSubImage2D(i.TEXTURE_2D,ft,0,0,Ut.width,Ut.height,ee,he,Ut.data):e.texImage2D(i.TEXTURE_2D,ft,$t,Ut.width,Ut.height,0,ee,he,Ut.data);S.generateMipmaps=!1}else Re?(Wt&&e.texStorage2D(i.TEXTURE_2D,Nt,$t,ot.width,ot.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,ot.width,ot.height,ee,he,ot.data)):e.texImage2D(i.TEXTURE_2D,0,$t,ot.width,ot.height,0,ee,he,ot.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Re&&Wt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Nt,$t,Zt[0].width,Zt[0].height,ot.depth);for(let ft=0,D=Zt.length;ft<D;ft++)Ut=Zt[ft],S.format!==ri?ee!==null?Re?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,Ut.width,Ut.height,ot.depth,ee,Ut.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ft,$t,Ut.width,Ut.height,ot.depth,0,Ut.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?e.texSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,Ut.width,Ut.height,ot.depth,ee,he,Ut.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ft,$t,Ut.width,Ut.height,ot.depth,0,ee,he,Ut.data)}else{Re&&Wt&&e.texStorage2D(i.TEXTURE_2D,Nt,$t,Zt[0].width,Zt[0].height);for(let ft=0,D=Zt.length;ft<D;ft++)Ut=Zt[ft],S.format!==ri?ee!==null?Re?e.compressedTexSubImage2D(i.TEXTURE_2D,ft,0,0,Ut.width,Ut.height,ee,Ut.data):e.compressedTexImage2D(i.TEXTURE_2D,ft,$t,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?e.texSubImage2D(i.TEXTURE_2D,ft,0,0,Ut.width,Ut.height,ee,he,Ut.data):e.texImage2D(i.TEXTURE_2D,ft,$t,Ut.width,Ut.height,0,ee,he,Ut.data)}else if(S.isDataArrayTexture)Re?(Wt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Nt,$t,ot.width,ot.height,ot.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,ee,he,ot.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,$t,ot.width,ot.height,ot.depth,0,ee,he,ot.data);else if(S.isData3DTexture)Re?(Wt&&e.texStorage3D(i.TEXTURE_3D,Nt,$t,ot.width,ot.height,ot.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,ee,he,ot.data)):e.texImage3D(i.TEXTURE_3D,0,$t,ot.width,ot.height,ot.depth,0,ee,he,ot.data);else if(S.isFramebufferTexture){if(Wt)if(Re)e.texStorage2D(i.TEXTURE_2D,Nt,$t,ot.width,ot.height);else{let ft=ot.width,D=ot.height;for(let Rt=0;Rt<Nt;Rt++)e.texImage2D(i.TEXTURE_2D,Rt,$t,ft,D,0,ee,he,null),ft>>=1,D>>=1}}else if(Zt.length>0&&le){Re&&Wt&&e.texStorage2D(i.TEXTURE_2D,Nt,$t,Zt[0].width,Zt[0].height);for(let ft=0,D=Zt.length;ft<D;ft++)Ut=Zt[ft],Re?e.texSubImage2D(i.TEXTURE_2D,ft,0,0,ee,he,Ut):e.texImage2D(i.TEXTURE_2D,ft,$t,ee,he,Ut);S.generateMipmaps=!1}else Re?(Wt&&e.texStorage2D(i.TEXTURE_2D,Nt,$t,ot.width,ot.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,ee,he,ot)):e.texImage2D(i.TEXTURE_2D,0,$t,ee,he,ot);M(S,le)&&y(_t),Yt.__version=xt.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function zt(R,S,K){if(S.image.length!==6)return;let _t=dt(R,S),gt=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+K);let xt=n.get(gt);if(gt.version!==xt.__version||_t===!0){e.activeTexture(i.TEXTURE0+K);let Yt=Be.getPrimaries(Be.workingColorSpace),At=S.colorSpace===Zn?null:Be.getPrimaries(S.colorSpace),Ht=S.colorSpace===Zn||Yt===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);let ie=S.isCompressedTexture||S.image[0].isCompressedTexture,oe=S.image[0]&&S.image[0].isDataTexture,ot=[];for(let ft=0;ft<6;ft++)!ie&&!oe?ot[ft]=v(S.image[ft],!1,!0,s.maxCubemapSize):ot[ft]=oe?S.image[ft].image:S.image[ft],ot[ft]=ue(S,ot[ft]);let le=ot[0],ee=m(le)||o,he=r.convert(S.format,S.colorSpace),$t=r.convert(S.type),Ut=T(S.internalFormat,he,$t,S.colorSpace),Zt=o&&S.isVideoTexture!==!0,Re=xt.__version===void 0||_t===!0,Wt=O(S,le,ee);tt(i.TEXTURE_CUBE_MAP,S,ee);let Nt;if(ie){Zt&&Re&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Wt,Ut,le.width,le.height);for(let ft=0;ft<6;ft++){Nt=ot[ft].mipmaps;for(let D=0;D<Nt.length;D++){let Rt=Nt[D];S.format!==ri?he!==null?Zt?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,D,0,0,Rt.width,Rt.height,he,Rt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,D,Ut,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,D,0,0,Rt.width,Rt.height,he,$t,Rt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,D,Ut,Rt.width,Rt.height,0,he,$t,Rt.data)}}}else{Nt=S.mipmaps,Zt&&Re&&(Nt.length>0&&Wt++,e.texStorage2D(i.TEXTURE_CUBE_MAP,Wt,Ut,ot[0].width,ot[0].height));for(let ft=0;ft<6;ft++)if(oe){Zt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,ot[ft].width,ot[ft].height,he,$t,ot[ft].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,Ut,ot[ft].width,ot[ft].height,0,he,$t,ot[ft].data);for(let D=0;D<Nt.length;D++){let Ct=Nt[D].image[ft].image;Zt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,D+1,0,0,Ct.width,Ct.height,he,$t,Ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,D+1,Ut,Ct.width,Ct.height,0,he,$t,Ct.data)}}else{Zt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,he,$t,ot[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,Ut,he,$t,ot[ft]);for(let D=0;D<Nt.length;D++){let Rt=Nt[D];Zt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,D+1,0,0,he,$t,Rt.image[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,D+1,Ut,he,$t,Rt.image[ft])}}}M(S,ee)&&y(i.TEXTURE_CUBE_MAP),xt.__version=gt.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Xt(R,S,K,_t,gt,xt){let Yt=r.convert(K.format,K.colorSpace),At=r.convert(K.type),Ht=T(K.internalFormat,Yt,At,K.colorSpace);if(!n.get(S).__hasExternalTextures){let oe=Math.max(1,S.width>>xt),ot=Math.max(1,S.height>>xt);gt===i.TEXTURE_3D||gt===i.TEXTURE_2D_ARRAY?e.texImage3D(gt,xt,Ht,oe,ot,S.depth,0,Yt,At,null):e.texImage2D(gt,xt,Ht,oe,ot,0,Yt,At,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Dt(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_t,gt,n.get(K).__webglTexture,0,jt(S)):(gt===i.TEXTURE_2D||gt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&gt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,_t,gt,n.get(K).__webglTexture,xt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ne(R,S,K){if(i.bindRenderbuffer(i.RENDERBUFFER,R),S.depthBuffer&&!S.stencilBuffer){let _t=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(K||Dt(S)){let gt=S.depthTexture;gt&&gt.isDepthTexture&&(gt.type===Oi?_t=i.DEPTH_COMPONENT32F:gt.type===Ni&&(_t=i.DEPTH_COMPONENT24));let xt=jt(S);Dt(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xt,_t,S.width,S.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,_t,S.width,S.height)}else i.renderbufferStorage(i.RENDERBUFFER,_t,S.width,S.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,R)}else if(S.depthBuffer&&S.stencilBuffer){let _t=jt(S);K&&Dt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,i.DEPTH24_STENCIL8,S.width,S.height):Dt(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t,i.DEPTH24_STENCIL8,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,R)}else{let _t=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let gt=0;gt<_t.length;gt++){let xt=_t[gt],Yt=r.convert(xt.format,xt.colorSpace),At=r.convert(xt.type),Ht=T(xt.internalFormat,Yt,At,xt.colorSpace),ie=jt(S);K&&Dt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,Ht,S.width,S.height):Dt(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,Ht,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Ht,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Jt(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),N(S.depthTexture,0);let _t=n.get(S.depthTexture).__webglTexture,gt=jt(S);if(S.depthTexture.format===ss)Dt(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,_t,0,gt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,_t,0);else if(S.depthTexture.format===Xs)Dt(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,_t,0,gt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,_t,0);else throw new Error("Unknown depthTexture format")}function Lt(R){let S=n.get(R),K=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");Jt(S.__webglFramebuffer,R)}else if(K){S.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[_t]),S.__webglDepthbuffer[_t]=i.createRenderbuffer(),ne(S.__webglDepthbuffer[_t],R,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),ne(S.__webglDepthbuffer,R,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(R,S,K){let _t=n.get(R);S!==void 0&&Xt(_t.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&Lt(R)}function Y(R){let S=R.texture,K=n.get(R),_t=n.get(S);R.addEventListener("dispose",$),R.isWebGLMultipleRenderTargets!==!0&&(_t.__webglTexture===void 0&&(_t.__webglTexture=i.createTexture()),_t.__version=S.version,a.memory.textures++);let gt=R.isWebGLCubeRenderTarget===!0,xt=R.isWebGLMultipleRenderTargets===!0,Yt=m(R)||o;if(gt){K.__webglFramebuffer=[];for(let At=0;At<6;At++)if(o&&S.mipmaps&&S.mipmaps.length>0){K.__webglFramebuffer[At]=[];for(let Ht=0;Ht<S.mipmaps.length;Ht++)K.__webglFramebuffer[At][Ht]=i.createFramebuffer()}else K.__webglFramebuffer[At]=i.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){K.__webglFramebuffer=[];for(let At=0;At<S.mipmaps.length;At++)K.__webglFramebuffer[At]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(xt)if(s.drawBuffers){let At=R.texture;for(let Ht=0,ie=At.length;Ht<ie;Ht++){let oe=n.get(At[Ht]);oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&Dt(R)===!1){let At=xt?S:[S];K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Ht=0;Ht<At.length;Ht++){let ie=At[Ht];K.__webglColorRenderbuffer[Ht]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[Ht]);let oe=r.convert(ie.format,ie.colorSpace),ot=r.convert(ie.type),le=T(ie.internalFormat,oe,ot,ie.colorSpace,R.isXRRenderTarget===!0),ee=jt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,le,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ht,i.RENDERBUFFER,K.__webglColorRenderbuffer[Ht])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),ne(K.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(gt){e.bindTexture(i.TEXTURE_CUBE_MAP,_t.__webglTexture),tt(i.TEXTURE_CUBE_MAP,S,Yt);for(let At=0;At<6;At++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let Ht=0;Ht<S.mipmaps.length;Ht++)Xt(K.__webglFramebuffer[At][Ht],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+At,Ht);else Xt(K.__webglFramebuffer[At],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);M(S,Yt)&&y(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){let At=R.texture;for(let Ht=0,ie=At.length;Ht<ie;Ht++){let oe=At[Ht],ot=n.get(oe);e.bindTexture(i.TEXTURE_2D,ot.__webglTexture),tt(i.TEXTURE_2D,oe,Yt),Xt(K.__webglFramebuffer,R,oe,i.COLOR_ATTACHMENT0+Ht,i.TEXTURE_2D,0),M(oe,Yt)&&y(i.TEXTURE_2D)}e.unbindTexture()}else{let At=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?At=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(At,_t.__webglTexture),tt(At,S,Yt),o&&S.mipmaps&&S.mipmaps.length>0)for(let Ht=0;Ht<S.mipmaps.length;Ht++)Xt(K.__webglFramebuffer[Ht],R,S,i.COLOR_ATTACHMENT0,At,Ht);else Xt(K.__webglFramebuffer,R,S,i.COLOR_ATTACHMENT0,At,0);M(S,Yt)&&y(At),e.unbindTexture()}R.depthBuffer&&Lt(R)}function Ve(R){let S=m(R)||o,K=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let _t=0,gt=K.length;_t<gt;_t++){let xt=K[_t];if(M(xt,S)){let Yt=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,At=n.get(xt).__webglTexture;e.bindTexture(Yt,At),y(Yt),e.unbindTexture()}}}function qt(R){if(o&&R.samples>0&&Dt(R)===!1){let S=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],K=R.width,_t=R.height,gt=i.COLOR_BUFFER_BIT,xt=[],Yt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=n.get(R),Ht=R.isWebGLMultipleRenderTargets===!0;if(Ht)for(let ie=0;ie<S.length;ie++)e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let ie=0;ie<S.length;ie++){xt.push(i.COLOR_ATTACHMENT0+ie),R.depthBuffer&&xt.push(Yt);let oe=At.__ignoreDepthValues!==void 0?At.__ignoreDepthValues:!1;if(oe===!1&&(R.depthBuffer&&(gt|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&(gt|=i.STENCIL_BUFFER_BIT)),Ht&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,At.__webglColorRenderbuffer[ie]),oe===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Yt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Yt])),Ht){let ot=n.get(S[ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ot,0)}i.blitFramebuffer(0,0,K,_t,0,0,K,_t,gt,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xt)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ht)for(let ie=0;ie<S.length;ie++){e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,At.__webglColorRenderbuffer[ie]);let oe=n.get(S[ie]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.TEXTURE_2D,oe,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}}function jt(R){return Math.min(s.maxSamples,R.samples)}function Dt(R){let S=n.get(R);return o&&R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Fe(R){let S=a.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function ue(R,S){let K=R.colorSpace,_t=R.format,gt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Zo||K!==yi&&K!==Zn&&(Be.getTransfer(K)===Xe?o===!1?t.has("EXT_sRGB")===!0&&_t===ri?(R.format=Zo,R.minFilter=$n,R.generateMipmaps=!1):S=_a.sRGBToLinear(S):(_t!==ri||gt!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),S}this.allocateTextureUnit=P,this.resetTextureUnits=J,this.setTexture2D=N,this.setTexture2DArray=st,this.setTexture3D=Z,this.setTextureCube=Q,this.rebindTextures=ae,this.setupRenderTarget=Y,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=qt,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=Xt,this.useMultisampledRTT=Dt}function S0(i,t,e){let n=e.isWebGL2;function s(r,a=Zn){let o,l=Be.getTransfer(a);if(r===Hi)return i.UNSIGNED_BYTE;if(r===zh)return i.UNSIGNED_SHORT_4_4_4_4;if(r===kh)return i.UNSIGNED_SHORT_5_5_5_1;if(r===pd)return i.BYTE;if(r===md)return i.SHORT;if(r===Bl)return i.UNSIGNED_SHORT;if(r===Hh)return i.INT;if(r===Ni)return i.UNSIGNED_INT;if(r===Oi)return i.FLOAT;if(r===mr)return n?i.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===gd)return i.ALPHA;if(r===ri)return i.RGBA;if(r===_d)return i.LUMINANCE;if(r===xd)return i.LUMINANCE_ALPHA;if(r===ss)return i.DEPTH_COMPONENT;if(r===Xs)return i.DEPTH_STENCIL;if(r===Zo)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===yd)return i.RED;if(r===Vh)return i.RED_INTEGER;if(r===vd)return i.RG;if(r===Gh)return i.RG_INTEGER;if(r===Wh)return i.RGBA_INTEGER;if(r===lo||r===co||r===ho||r===uo)if(l===Xe)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===lo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===co)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ho)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===uo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===lo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===co)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ho)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===uo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===lc||r===cc||r===hc||r===uc)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===lc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===cc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===hc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===uc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Xh)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===dc||r===fc)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===dc)return l===Xe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===fc)return l===Xe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===pc||r===mc||r===gc||r===_c||r===xc||r===yc||r===vc||r===Mc||r===Sc||r===bc||r===Ec||r===Tc||r===wc||r===Ac)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===pc)return l===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===mc)return l===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===gc)return l===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===_c)return l===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===xc)return l===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===yc)return l===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===vc)return l===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Mc)return l===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Sc)return l===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===bc)return l===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ec)return l===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Tc)return l===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===wc)return l===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ac)return l===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===fo||r===Rc||r===Cc)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===fo)return l===Xe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Rc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Cc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Md||r===Pc||r===Ic||r===Lc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===fo)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Pc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ic)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Lc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===is?n?i.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var hl=class extends Un{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Kn=class extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}},b0={type:"move"},cr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,x=.005;c.inputState.pinching&&u>d+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(b0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Kn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},ul=class extends ki{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,x=null,v=e.getContextAttributes(),m=null,p=null,M=[],y=[],T=new Bt,O=null,I=new Un;I.layers.enable(1),I.viewport=new xn;let L=new Un;L.layers.enable(2),L.viewport=new xn;let $=[I,L],b=new hl;b.layers.enable(1),b.layers.enable(2);let A=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let dt=M[tt];return dt===void 0&&(dt=new cr,M[tt]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(tt){let dt=M[tt];return dt===void 0&&(dt=new cr,M[tt]=dt),dt.getGripSpace()},this.getHand=function(tt){let dt=M[tt];return dt===void 0&&(dt=new cr,M[tt]=dt),dt.getHandSpace()};function F(tt){let dt=y.indexOf(tt.inputSource);if(dt===-1)return;let Et=M[dt];Et!==void 0&&(Et.update(tt.inputSource,tt.frame,c||a),Et.dispatchEvent({type:tt.type,data:tt.inputSource}))}function J(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",P);for(let tt=0;tt<M.length;tt++){let dt=y[tt];dt!==null&&(y[tt]=null,M[tt].disconnect(dt))}A=null,U=null,t.setRenderTarget(m),d=null,u=null,f=null,s=null,p=null,mt.stop(),n.isPresenting=!1,t.setPixelRatio(O),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){r=tt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){o=tt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(tt){c=tt},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(tt){if(s=tt,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",J),s.addEventListener("inputsourceschange",P),v.xrCompatible!==!0&&await e.makeXRCompatible(),O=t.getPixelRatio(),t.getSize(T),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let dt={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,dt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new vi(d.framebufferWidth,d.framebufferHeight,{format:ri,type:Hi,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil})}else{let dt=null,Et=null,zt=null;v.depth&&(zt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=v.stencil?Xs:ss,Et=v.stencil?is:Ni);let Xt={colorFormat:e.RGBA8,depthFormat:zt,scaleFactor:r};f=new XRWebGLBinding(s,e),u=f.createProjectionLayer(Xt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),p=new vi(u.textureWidth,u.textureHeight,{format:ri,type:Hi,depthTexture:new Aa(u.textureWidth,u.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0});let ne=t.properties.get(p);ne.__ignoreDepthValues=u.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),mt.setContext(s),mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function P(tt){for(let dt=0;dt<tt.removed.length;dt++){let Et=tt.removed[dt],zt=y.indexOf(Et);zt>=0&&(y[zt]=null,M[zt].disconnect(Et))}for(let dt=0;dt<tt.added.length;dt++){let Et=tt.added[dt],zt=y.indexOf(Et);if(zt===-1){for(let ne=0;ne<M.length;ne++)if(ne>=y.length){y.push(Et),zt=ne;break}else if(y[ne]===null){y[ne]=Et,zt=ne;break}if(zt===-1)break}let Xt=M[zt];Xt&&Xt.connect(Et)}}let G=new B,N=new B;function st(tt,dt,Et){G.setFromMatrixPosition(dt.matrixWorld),N.setFromMatrixPosition(Et.matrixWorld);let zt=G.distanceTo(N),Xt=dt.projectionMatrix.elements,ne=Et.projectionMatrix.elements,Jt=Xt[14]/(Xt[10]-1),Lt=Xt[14]/(Xt[10]+1),ae=(Xt[9]+1)/Xt[5],Y=(Xt[9]-1)/Xt[5],Ve=(Xt[8]-1)/Xt[0],qt=(ne[8]+1)/ne[0],jt=Jt*Ve,Dt=Jt*qt,Fe=zt/(-Ve+qt),ue=Fe*-Ve;dt.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(ue),tt.translateZ(Fe),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert();let R=Jt+Fe,S=Lt+Fe,K=jt-ue,_t=Dt+(zt-ue),gt=ae*Lt/S*R,xt=Y*Lt/S*R;tt.projectionMatrix.makePerspective(K,_t,gt,xt,R,S),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}function Z(tt,dt){dt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(dt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(s===null)return;b.near=L.near=I.near=tt.near,b.far=L.far=I.far=tt.far,(A!==b.near||U!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),A=b.near,U=b.far);let dt=tt.parent,Et=b.cameras;Z(b,dt);for(let zt=0;zt<Et.length;zt++)Z(Et[zt],dt);Et.length===2?st(b,I,L):b.projectionMatrix.copy(I.projectionMatrix),Q(tt,b,dt)};function Q(tt,dt,Et){Et===null?tt.matrix.copy(dt.matrixWorld):(tt.matrix.copy(Et.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(dt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(dt.projectionMatrix),tt.projectionMatrixInverse.copy(dt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=Ko*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(tt){l=tt,u!==null&&(u.fixedFoveation=tt),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=tt)};let nt=null;function ct(tt,dt){if(h=dt.getViewerPose(c||a),x=dt,h!==null){let Et=h.views;d!==null&&(t.setRenderTargetFramebuffer(p,d.framebuffer),t.setRenderTarget(p));let zt=!1;Et.length!==b.cameras.length&&(b.cameras.length=0,zt=!0);for(let Xt=0;Xt<Et.length;Xt++){let ne=Et[Xt],Jt=null;if(d!==null)Jt=d.getViewport(ne);else{let ae=f.getViewSubImage(u,ne);Jt=ae.viewport,Xt===0&&(t.setRenderTargetTextures(p,ae.colorTexture,u.ignoreDepthValues?void 0:ae.depthStencilTexture),t.setRenderTarget(p))}let Lt=$[Xt];Lt===void 0&&(Lt=new Un,Lt.layers.enable(Xt),Lt.viewport=new xn,$[Xt]=Lt),Lt.matrix.fromArray(ne.transform.matrix),Lt.matrix.decompose(Lt.position,Lt.quaternion,Lt.scale),Lt.projectionMatrix.fromArray(ne.projectionMatrix),Lt.projectionMatrixInverse.copy(Lt.projectionMatrix).invert(),Lt.viewport.set(Jt.x,Jt.y,Jt.width,Jt.height),Xt===0&&(b.matrix.copy(Lt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),zt===!0&&b.cameras.push(Lt)}}for(let Et=0;Et<M.length;Et++){let zt=y[Et],Xt=M[Et];zt!==null&&Xt!==void 0&&Xt.update(zt,dt,c||a)}nt&&nt(tt,dt),dt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:dt}),x=null}let mt=new jh;mt.setAnimationLoop(ct),this.setAnimationLoop=function(tt){nt=tt},this.dispose=function(){}}};function E0(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Jh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,y,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,T)):p.isMeshMatcapMaterial?(r(m,p),x(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Bn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Bn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=t.get(p).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let y=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*y,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Bn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function T0(i,t,e,n){let s={},r={},a=[],o=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,y){let T=y.program;n.uniformBlockBinding(M,T)}function c(M,y){let T=s[M.id];T===void 0&&(x(M),T=h(M),s[M.id]=T,M.addEventListener("dispose",m));let O=y.program;n.updateUBOMapping(M,O);let I=t.render.frame;r[M.id]!==I&&(u(M),r[M.id]=I)}function h(M){let y=f();M.__bindingPointIndex=y;let T=i.createBuffer(),O=M.__size,I=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,O,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,T),T}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){let y=s[M.id],T=M.uniforms,O=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let I=0,L=T.length;I<L;I++){let $=Array.isArray(T[I])?T[I]:[T[I]];for(let b=0,A=$.length;b<A;b++){let U=$[b];if(d(U,I,b,O)===!0){let F=U.__offset,J=Array.isArray(U.value)?U.value:[U.value],P=0;for(let G=0;G<J.length;G++){let N=J[G],st=v(N);typeof N=="number"||typeof N=="boolean"?(U.__data[0]=N,i.bufferSubData(i.UNIFORM_BUFFER,F+P,U.__data)):N.isMatrix3?(U.__data[0]=N.elements[0],U.__data[1]=N.elements[1],U.__data[2]=N.elements[2],U.__data[3]=0,U.__data[4]=N.elements[3],U.__data[5]=N.elements[4],U.__data[6]=N.elements[5],U.__data[7]=0,U.__data[8]=N.elements[6],U.__data[9]=N.elements[7],U.__data[10]=N.elements[8],U.__data[11]=0):(N.toArray(U.__data,P),P+=st.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,y,T,O){let I=M.value,L=y+"_"+T;if(O[L]===void 0)return typeof I=="number"||typeof I=="boolean"?O[L]=I:O[L]=I.clone(),!0;{let $=O[L];if(typeof I=="number"||typeof I=="boolean"){if($!==I)return O[L]=I,!0}else if($.equals(I)===!1)return $.copy(I),!0}return!1}function x(M){let y=M.uniforms,T=0,O=16;for(let L=0,$=y.length;L<$;L++){let b=Array.isArray(y[L])?y[L]:[y[L]];for(let A=0,U=b.length;A<U;A++){let F=b[A],J=Array.isArray(F.value)?F.value:[F.value];for(let P=0,G=J.length;P<G;P++){let N=J[P],st=v(N),Z=T%O;Z!==0&&O-Z<st.boundary&&(T+=O-Z),F.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=T,T+=st.storage}}}let I=T%O;return I>0&&(T+=O-I),M.__size=T,M.__cache={},this}function v(M){let y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function m(M){let y=M.target;y.removeEventListener("dispose",m);let T=a.indexOf(y.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var yr=class{constructor(t={}){let{canvas:e=Dd(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=a;let d=new Uint32Array(4),x=new Int32Array(4),v=null,m=null,p=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mn,this._useLegacyLights=!1,this.toneMapping=Bi,this.toneMappingExposure=1;let y=this,T=!1,O=0,I=0,L=null,$=-1,b=null,A=new xn,U=new xn,F=null,J=new ge(0),P=0,G=e.width,N=e.height,st=1,Z=null,Q=null,nt=new xn(0,0,G,N),ct=new xn(0,0,G,N),mt=!1,tt=new xr,dt=!1,Et=!1,zt=null,Xt=new dn,ne=new Bt,Jt=new B,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ae(){return L===null?st:1}let Y=n;function Ve(E,W){for(let j=0;j<E.length;j++){let et=E[j],q=e.getContext(et,W);if(q!==null)return q}return null}try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ol}`),e.addEventListener("webglcontextlost",ft,!1),e.addEventListener("webglcontextrestored",D,!1),e.addEventListener("webglcontextcreationerror",Rt,!1),Y===null){let W=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&W.shift(),Y=Ve(W,E),Y===null)throw Ve(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Y instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Y.getShaderPrecisionFormat===void 0&&(Y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let qt,jt,Dt,Fe,ue,R,S,K,_t,gt,xt,Yt,At,Ht,ie,oe,ot,le,ee,he,$t,Ut,Zt,Re;function Wt(){qt=new Wm(Y),jt=new Bm(Y,qt,t),qt.init(jt),Ut=new S0(Y,qt,jt),Dt=new v0(Y,qt,jt),Fe=new Ym(Y),ue=new l0,R=new M0(Y,qt,Dt,ue,jt,Ut,Fe),S=new zm(y),K=new Gm(y),_t=new tf(Y,jt),Zt=new Om(Y,qt,_t,jt),gt=new Xm(Y,_t,Fe,Zt),xt=new Jm(Y,gt,_t,Fe),ee=new Km(Y,jt,R),oe=new Hm(ue),Yt=new o0(y,S,K,qt,jt,Zt,oe),At=new E0(y,ue),Ht=new h0,ie=new g0(qt,jt),le=new Nm(y,S,K,Dt,xt,u,l),ot=new y0(y,xt,jt),Re=new T0(Y,Fe,jt,Dt),he=new Fm(Y,qt,Fe,jt),$t=new qm(Y,qt,Fe,jt),Fe.programs=Yt.programs,y.capabilities=jt,y.extensions=qt,y.properties=ue,y.renderLists=Ht,y.shadowMap=ot,y.state=Dt,y.info=Fe}Wt();let Nt=new ul(y,Y);this.xr=Nt,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){let E=qt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=qt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return st},this.setPixelRatio=function(E){E!==void 0&&(st=E,this.setSize(G,N,!1))},this.getSize=function(E){return E.set(G,N)},this.setSize=function(E,W,j=!0){if(Nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=E,N=W,e.width=Math.floor(E*st),e.height=Math.floor(W*st),j===!0&&(e.style.width=E+"px",e.style.height=W+"px"),this.setViewport(0,0,E,W)},this.getDrawingBufferSize=function(E){return E.set(G*st,N*st).floor()},this.setDrawingBufferSize=function(E,W,j){G=E,N=W,st=j,e.width=Math.floor(E*j),e.height=Math.floor(W*j),this.setViewport(0,0,E,W)},this.getCurrentViewport=function(E){return E.copy(A)},this.getViewport=function(E){return E.copy(nt)},this.setViewport=function(E,W,j,et){E.isVector4?nt.set(E.x,E.y,E.z,E.w):nt.set(E,W,j,et),Dt.viewport(A.copy(nt).multiplyScalar(st).floor())},this.getScissor=function(E){return E.copy(ct)},this.setScissor=function(E,W,j,et){E.isVector4?ct.set(E.x,E.y,E.z,E.w):ct.set(E,W,j,et),Dt.scissor(U.copy(ct).multiplyScalar(st).floor())},this.getScissorTest=function(){return mt},this.setScissorTest=function(E){Dt.setScissorTest(mt=E)},this.setOpaqueSort=function(E){Z=E},this.setTransparentSort=function(E){Q=E},this.getClearColor=function(E){return E.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor.apply(le,arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha.apply(le,arguments)},this.clear=function(E=!0,W=!0,j=!0){let et=0;if(E){let q=!1;if(L!==null){let It=L.texture.format;q=It===Wh||It===Gh||It===Vh}if(q){let It=L.texture.type,Ot=It===Hi||It===Ni||It===Bl||It===is||It===zh||It===kh,te=le.getClearColor(),de=le.getClearAlpha(),ve=te.r,me=te.g,xe=te.b;Ot?(d[0]=ve,d[1]=me,d[2]=xe,d[3]=de,Y.clearBufferuiv(Y.COLOR,0,d)):(x[0]=ve,x[1]=me,x[2]=xe,x[3]=de,Y.clearBufferiv(Y.COLOR,0,x))}else et|=Y.COLOR_BUFFER_BIT}W&&(et|=Y.DEPTH_BUFFER_BIT),j&&(et|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",D,!1),e.removeEventListener("webglcontextcreationerror",Rt,!1),Ht.dispose(),ie.dispose(),ue.dispose(),S.dispose(),K.dispose(),xt.dispose(),Zt.dispose(),Re.dispose(),Yt.dispose(),Nt.dispose(),Nt.removeEventListener("sessionstart",be),Nt.removeEventListener("sessionend",_e),zt&&(zt.dispose(),zt=null),qe.stop()};function ft(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let E=Fe.autoReset,W=ot.enabled,j=ot.autoUpdate,et=ot.needsUpdate,q=ot.type;Wt(),Fe.autoReset=E,ot.enabled=W,ot.autoUpdate=j,ot.needsUpdate=et,ot.type=q}function Rt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ct(E){let W=E.target;W.removeEventListener("dispose",Ct),Qt(W)}function Qt(E){kt(E),ue.remove(E)}function kt(E){let W=ue.get(E).programs;W!==void 0&&(W.forEach(function(j){Yt.releaseProgram(j)}),E.isShaderMaterial&&Yt.releaseShaderCache(E))}this.renderBufferDirect=function(E,W,j,et,q,It){W===null&&(W=Lt);let Ot=q.isMesh&&q.matrixWorld.determinant()<0,te=js(E,W,j,et,q);Dt.setMaterial(et,Ot);let de=j.index,ve=1;if(et.wireframe===!0){if(de=gt.getWireframeAttribute(j),de===void 0)return;ve=2}let me=j.drawRange,xe=j.attributes.position,Ue=me.start*ve,In=(me.start+me.count)*ve;It!==null&&(Ue=Math.max(Ue,It.start*ve),In=Math.min(In,(It.start+It.count)*ve)),de!==null?(Ue=Math.max(Ue,0),In=Math.min(In,de.count)):xe!=null&&(Ue=Math.max(Ue,0),In=Math.min(In,xe.count));let cn=In-Ue;if(cn<0||cn===1/0)return;Zt.setup(q,et,te,j,de);let Qn,ze=he;if(de!==null&&(Qn=_t.get(de),ze=$t,ze.setIndex(Qn)),q.isMesh)et.wireframe===!0?(Dt.setLineWidth(et.wireframeLinewidth*ae()),ze.setMode(Y.LINES)):ze.setMode(Y.TRIANGLES);else if(q.isLine){let se=et.linewidth;se===void 0&&(se=1),Dt.setLineWidth(se*ae()),q.isLineSegments?ze.setMode(Y.LINES):q.isLineLoop?ze.setMode(Y.LINE_LOOP):ze.setMode(Y.LINE_STRIP)}else q.isPoints?ze.setMode(Y.POINTS):q.isSprite&&ze.setMode(Y.TRIANGLES);if(q.isBatchedMesh)ze.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else if(q.isInstancedMesh)ze.renderInstances(Ue,cn,q.count);else if(j.isInstancedBufferGeometry){let se=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,ds=Math.min(j.instanceCount,se);ze.renderInstances(Ue,cn,ds)}else ze.render(Ue,cn)};function Te(E,W,j){E.transparent===!0&&E.side===ln&&E.forceSinglePass===!1?(E.side=Bn,E.needsUpdate=!0,Zi(E,W,j),E.side=zi,E.needsUpdate=!0,Zi(E,W,j),E.side=ln):Zi(E,W,j)}this.compile=function(E,W,j=null){j===null&&(j=E),m=ie.get(j),m.init(),M.push(m),j.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),E!==j&&E.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),m.setupLights(y._useLegacyLights);let et=new Set;return E.traverse(function(q){let It=q.material;if(It)if(Array.isArray(It))for(let Ot=0;Ot<It.length;Ot++){let te=It[Ot];Te(te,j,q),et.add(te)}else Te(It,j,q),et.add(It)}),M.pop(),m=null,et},this.compileAsync=function(E,W,j=null){let et=this.compile(E,W,j);return new Promise(q=>{function It(){if(et.forEach(function(Ot){ue.get(Ot).currentProgram.isReady()&&et.delete(Ot)}),et.size===0){q(E);return}setTimeout(It,10)}qt.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let Pe=null;function Ie(E){Pe&&Pe(E)}function be(){qe.stop()}function _e(){qe.start()}let qe=new jh;qe.setAnimationLoop(Ie),typeof self<"u"&&qe.setContext(self),this.setAnimationLoop=function(E){Pe=E,Nt.setAnimationLoop(E),E===null?qe.stop():qe.start()},Nt.addEventListener("sessionstart",be),Nt.addEventListener("sessionend",_e),this.render=function(E,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Nt.enabled===!0&&Nt.isPresenting===!0&&(Nt.cameraAutoUpdate===!0&&Nt.updateCamera(W),W=Nt.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,W,L),m=ie.get(E,M.length),m.init(),M.push(m),Xt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),tt.setFromProjectionMatrix(Xt),Et=this.localClippingEnabled,dt=oe.init(this.clippingPlanes,Et),v=Ht.get(E,p.length),v.init(),p.push(v),Ze(E,W,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(Z,Q),this.info.render.frame++,dt===!0&&oe.beginShadows();let j=m.state.shadowsArray;if(ot.render(j,E,W),dt===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),le.render(v,E),m.setupLights(y._useLegacyLights),W.isArrayCamera){let et=W.cameras;for(let q=0,It=et.length;q<It;q++){let Ot=et[q];Pn(v,E,Ot,Ot.viewport)}}else Pn(v,E,W);L!==null&&(R.updateMultisampleRenderTarget(L),R.updateRenderTargetMipmap(L)),E.isScene===!0&&E.onAfterRender(y,E,W),Zt.resetDefaultState(),$=-1,b=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function Ze(E,W,j,et){if(E.visible===!1)return;if(E.layers.test(W.layers)){if(E.isGroup)j=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(W);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||tt.intersectsSprite(E)){et&&Jt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Xt);let Ot=xt.update(E),te=E.material;te.visible&&v.push(E,Ot,te,j,Jt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||tt.intersectsObject(E))){let Ot=xt.update(E),te=E.material;if(et&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Jt.copy(E.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),Jt.copy(Ot.boundingSphere.center)),Jt.applyMatrix4(E.matrixWorld).applyMatrix4(Xt)),Array.isArray(te)){let de=Ot.groups;for(let ve=0,me=de.length;ve<me;ve++){let xe=de[ve],Ue=te[xe.materialIndex];Ue&&Ue.visible&&v.push(E,Ot,Ue,j,Jt.z,xe)}}else te.visible&&v.push(E,Ot,te,j,Jt.z,null)}}let It=E.children;for(let Ot=0,te=It.length;Ot<te;Ot++)Ze(It[Ot],W,j,et)}function Pn(E,W,j,et){let q=E.opaque,It=E.transmissive,Ot=E.transparent;m.setupLightsView(j),dt===!0&&oe.setGlobalState(y.clippingPlanes,j),It.length>0&&kn(q,It,W,j),et&&Dt.viewport(A.copy(et)),q.length>0&&oi(q,W,j),It.length>0&&oi(It,W,j),Ot.length>0&&oi(Ot,W,j),Dt.buffers.depth.setTest(!0),Dt.buffers.depth.setMask(!0),Dt.buffers.color.setMask(!0),Dt.setPolygonOffset(!1)}function kn(E,W,j,et){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;let It=jt.isWebGL2;zt===null&&(zt=new vi(1,1,{generateMipmaps:!0,type:qt.has("EXT_color_buffer_half_float")?mr:Hi,minFilter:pr,samples:It?4:0})),y.getDrawingBufferSize(ne),It?zt.setSize(ne.x,ne.y):zt.setSize(Jo(ne.x),Jo(ne.y));let Ot=y.getRenderTarget();y.setRenderTarget(zt),y.getClearColor(J),P=y.getClearAlpha(),P<1&&y.setClearColor(16777215,.5),y.clear();let te=y.toneMapping;y.toneMapping=Bi,oi(E,j,et),R.updateMultisampleRenderTarget(zt),R.updateRenderTargetMipmap(zt);let de=!1;for(let ve=0,me=W.length;ve<me;ve++){let xe=W[ve],Ue=xe.object,In=xe.geometry,cn=xe.material,Qn=xe.group;if(cn.side===ln&&Ue.layers.test(et.layers)){let ze=cn.side;cn.side=Bn,cn.needsUpdate=!0,$i(Ue,j,et,In,cn,Qn),cn.side=ze,cn.needsUpdate=!0,de=!0}}de===!0&&(R.updateMultisampleRenderTarget(zt),R.updateRenderTargetMipmap(zt)),y.setRenderTarget(Ot),y.setClearColor(J,P),y.toneMapping=te}function oi(E,W,j){let et=W.isScene===!0?W.overrideMaterial:null;for(let q=0,It=E.length;q<It;q++){let Ot=E[q],te=Ot.object,de=Ot.geometry,ve=et===null?Ot.material:et,me=Ot.group;te.layers.test(j.layers)&&$i(te,W,j,de,ve,me)}}function $i(E,W,j,et,q,It){E.onBeforeRender(y,W,j,et,q,It),E.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),q.onBeforeRender(y,W,j,et,E,It),q.transparent===!0&&q.side===ln&&q.forceSinglePass===!1?(q.side=Bn,q.needsUpdate=!0,y.renderBufferDirect(j,W,et,q,E,It),q.side=zi,q.needsUpdate=!0,y.renderBufferDirect(j,W,et,q,E,It),q.side=ln):y.renderBufferDirect(j,W,et,q,E,It),E.onAfterRender(y,W,j,et,q,It)}function Zi(E,W,j){W.isScene!==!0&&(W=Lt);let et=ue.get(E),q=m.state.lights,It=m.state.shadowsArray,Ot=q.state.version,te=Yt.getParameters(E,q.state,It,W,j),de=Yt.getProgramCacheKey(te),ve=et.programs;et.environment=E.isMeshStandardMaterial?W.environment:null,et.fog=W.fog,et.envMap=(E.isMeshStandardMaterial?K:S).get(E.envMap||et.environment),ve===void 0&&(E.addEventListener("dispose",Ct),ve=new Map,et.programs=ve);let me=ve.get(de);if(me!==void 0){if(et.currentProgram===me&&et.lightsStateVersion===Ot)return bi(E,te),me}else te.uniforms=Yt.getUniforms(E),E.onBuild(j,te,y),E.onBeforeCompile(te,y),me=Yt.acquireProgram(te,de),ve.set(de,me),et.uniforms=te.uniforms;let xe=et.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(xe.clippingPlanes=oe.uniform),bi(E,te),et.needsLights=ja(E),et.lightsStateVersion=Ot,et.needsLights&&(xe.ambientLightColor.value=q.state.ambient,xe.lightProbe.value=q.state.probe,xe.directionalLights.value=q.state.directional,xe.directionalLightShadows.value=q.state.directionalShadow,xe.spotLights.value=q.state.spot,xe.spotLightShadows.value=q.state.spotShadow,xe.rectAreaLights.value=q.state.rectArea,xe.ltc_1.value=q.state.rectAreaLTC1,xe.ltc_2.value=q.state.rectAreaLTC2,xe.pointLights.value=q.state.point,xe.pointLightShadows.value=q.state.pointShadow,xe.hemisphereLights.value=q.state.hemi,xe.directionalShadowMap.value=q.state.directionalShadowMap,xe.directionalShadowMatrix.value=q.state.directionalShadowMatrix,xe.spotShadowMap.value=q.state.spotShadowMap,xe.spotLightMatrix.value=q.state.spotLightMatrix,xe.spotLightMap.value=q.state.spotLightMap,xe.pointShadowMap.value=q.state.pointShadowMap,xe.pointShadowMatrix.value=q.state.pointShadowMatrix),et.currentProgram=me,et.uniformsList=null,me}function Ye(E){if(E.uniformsList===null){let W=E.currentProgram.getUniforms();E.uniformsList=Vs.seqWithValue(W.seq,E.uniforms)}return E.uniformsList}function bi(E,W){let j=ue.get(E);j.outputColorSpace=W.outputColorSpace,j.batching=W.batching,j.instancing=W.instancing,j.instancingColor=W.instancingColor,j.skinning=W.skinning,j.morphTargets=W.morphTargets,j.morphNormals=W.morphNormals,j.morphColors=W.morphColors,j.morphTargetsCount=W.morphTargetsCount,j.numClippingPlanes=W.numClippingPlanes,j.numIntersection=W.numClipIntersection,j.vertexAlphas=W.vertexAlphas,j.vertexTangents=W.vertexTangents,j.toneMapping=W.toneMapping}function js(E,W,j,et,q){W.isScene!==!0&&(W=Lt),R.resetTextureUnits();let It=W.fog,Ot=et.isMeshStandardMaterial?W.environment:null,te=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:yi,de=(et.isMeshStandardMaterial?K:S).get(et.envMap||Ot),ve=et.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,me=!!j.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),xe=!!j.morphAttributes.position,Ue=!!j.morphAttributes.normal,In=!!j.morphAttributes.color,cn=Bi;et.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(cn=y.toneMapping);let Qn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ze=Qn!==void 0?Qn.length:0,se=ue.get(et),ds=m.state.lights;if(dt===!0&&(Et===!0||E!==b)){let yn=E===b&&et.id===$;oe.setState(et,E,yn)}let He=!1;et.version===se.__version?(se.needsLights&&se.lightsStateVersion!==ds.state.version||se.outputColorSpace!==te||q.isBatchedMesh&&se.batching===!1||!q.isBatchedMesh&&se.batching===!0||q.isInstancedMesh&&se.instancing===!1||!q.isInstancedMesh&&se.instancing===!0||q.isSkinnedMesh&&se.skinning===!1||!q.isSkinnedMesh&&se.skinning===!0||q.isInstancedMesh&&se.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&se.instancingColor===!1&&q.instanceColor!==null||se.envMap!==de||et.fog===!0&&se.fog!==It||se.numClippingPlanes!==void 0&&(se.numClippingPlanes!==oe.numPlanes||se.numIntersection!==oe.numIntersection)||se.vertexAlphas!==ve||se.vertexTangents!==me||se.morphTargets!==xe||se.morphNormals!==Ue||se.morphColors!==In||se.toneMapping!==cn||jt.isWebGL2===!0&&se.morphTargetsCount!==ze)&&(He=!0):(He=!0,se.__version=et.version);let hi=se.currentProgram;He===!0&&(hi=Zi(et,W,q));let fs=!1,Ei=!1,ps=!1,fe=hi.getUniforms(),ui=se.uniforms;if(Dt.useProgram(hi.program)&&(fs=!0,Ei=!0,ps=!0),et.id!==$&&($=et.id,Ei=!0),fs||b!==E){fe.setValue(Y,"projectionMatrix",E.projectionMatrix),fe.setValue(Y,"viewMatrix",E.matrixWorldInverse);let yn=fe.map.cameraPosition;yn!==void 0&&yn.setValue(Y,Jt.setFromMatrixPosition(E.matrixWorld)),jt.logarithmicDepthBuffer&&fe.setValue(Y,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&fe.setValue(Y,"isOrthographic",E.isOrthographicCamera===!0),b!==E&&(b=E,Ei=!0,ps=!0)}if(q.isSkinnedMesh){fe.setOptional(Y,q,"bindMatrix"),fe.setOptional(Y,q,"bindMatrixInverse");let yn=q.skeleton;yn&&(jt.floatVertexTextures?(yn.boneTexture===null&&yn.computeBoneTexture(),fe.setValue(Y,"boneTexture",yn.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}q.isBatchedMesh&&(fe.setOptional(Y,q,"batchingTexture"),fe.setValue(Y,"batchingTexture",q._matricesTexture,R));let Ge=j.morphAttributes;if((Ge.position!==void 0||Ge.normal!==void 0||Ge.color!==void 0&&jt.isWebGL2===!0)&&ee.update(q,j,hi),(Ei||se.receiveShadow!==q.receiveShadow)&&(se.receiveShadow=q.receiveShadow,fe.setValue(Y,"receiveShadow",q.receiveShadow)),et.isMeshGouraudMaterial&&et.envMap!==null&&(ui.envMap.value=de,ui.flipEnvMap.value=de.isCubeTexture&&de.isRenderTargetTexture===!1?-1:1),Ei&&(fe.setValue(Y,"toneMappingExposure",y.toneMappingExposure),se.needsLights&&Ja(ui,ps),It&&et.fog===!0&&At.refreshFogUniforms(ui,It),At.refreshMaterialUniforms(ui,et,st,N,zt),Vs.upload(Y,Ye(se),ui,R)),et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(Vs.upload(Y,Ye(se),ui,R),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&fe.setValue(Y,"center",q.center),fe.setValue(Y,"modelViewMatrix",q.modelViewMatrix),fe.setValue(Y,"normalMatrix",q.normalMatrix),fe.setValue(Y,"modelMatrix",q.matrixWorld),et.isShaderMaterial||et.isRawShaderMaterial){let yn=et.uniformsGroups;for(let ms=0,Cr=yn.length;ms<Cr;ms++)if(jt.isWebGL2){let gs=yn[ms];Re.update(gs,hi),Re.bind(gs,hi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return hi}function Ja(E,W){E.ambientLightColor.needsUpdate=W,E.lightProbe.needsUpdate=W,E.directionalLights.needsUpdate=W,E.directionalLightShadows.needsUpdate=W,E.pointLights.needsUpdate=W,E.pointLightShadows.needsUpdate=W,E.spotLights.needsUpdate=W,E.spotLightShadows.needsUpdate=W,E.rectAreaLights.needsUpdate=W,E.hemisphereLights.needsUpdate=W}function ja(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(E,W,j){ue.get(E.texture).__webglTexture=W,ue.get(E.depthTexture).__webglTexture=j;let et=ue.get(E);et.__hasExternalTextures=!0,et.__hasExternalTextures&&(et.__autoAllocateDepthBuffer=j===void 0,et.__autoAllocateDepthBuffer||qt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),et.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,W){let j=ue.get(E);j.__webglFramebuffer=W,j.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(E,W=0,j=0){L=E,O=W,I=j;let et=!0,q=null,It=!1,Ot=!1;if(E){let de=ue.get(E);de.__useDefaultFramebuffer!==void 0?(Dt.bindFramebuffer(Y.FRAMEBUFFER,null),et=!1):de.__webglFramebuffer===void 0?R.setupRenderTarget(E):de.__hasExternalTextures&&R.rebindTextures(E,ue.get(E.texture).__webglTexture,ue.get(E.depthTexture).__webglTexture);let ve=E.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&(Ot=!0);let me=ue.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(me[W])?q=me[W][j]:q=me[W],It=!0):jt.isWebGL2&&E.samples>0&&R.useMultisampledRTT(E)===!1?q=ue.get(E).__webglMultisampledFramebuffer:Array.isArray(me)?q=me[j]:q=me,A.copy(E.viewport),U.copy(E.scissor),F=E.scissorTest}else A.copy(nt).multiplyScalar(st).floor(),U.copy(ct).multiplyScalar(st).floor(),F=mt;if(Dt.bindFramebuffer(Y.FRAMEBUFFER,q)&&jt.drawBuffers&&et&&Dt.drawBuffers(E,q),Dt.viewport(A),Dt.scissor(U),Dt.setScissorTest(F),It){let de=ue.get(E.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+W,de.__webglTexture,j)}else if(Ot){let de=ue.get(E.texture),ve=W||0;Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,de.__webglTexture,j||0,ve)}$=-1},this.readRenderTargetPixels=function(E,W,j,et,q,It,Ot){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let te=ue.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ot!==void 0&&(te=te[Ot]),te){Dt.bindFramebuffer(Y.FRAMEBUFFER,te);try{let de=E.texture,ve=de.format,me=de.type;if(ve!==ri&&Ut.convert(ve)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let xe=me===mr&&(qt.has("EXT_color_buffer_half_float")||jt.isWebGL2&&qt.has("EXT_color_buffer_float"));if(me!==Hi&&Ut.convert(me)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_TYPE)&&!(me===Oi&&(jt.isWebGL2||qt.has("OES_texture_float")||qt.has("WEBGL_color_buffer_float")))&&!xe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=E.width-et&&j>=0&&j<=E.height-q&&Y.readPixels(W,j,et,q,Ut.convert(ve),Ut.convert(me),It)}finally{let de=L!==null?ue.get(L).__webglFramebuffer:null;Dt.bindFramebuffer(Y.FRAMEBUFFER,de)}}},this.copyFramebufferToTexture=function(E,W,j=0){let et=Math.pow(2,-j),q=Math.floor(W.image.width*et),It=Math.floor(W.image.height*et);R.setTexture2D(W,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,j,0,0,E.x,E.y,q,It),Dt.unbindTexture()},this.copyTextureToTexture=function(E,W,j,et=0){let q=W.image.width,It=W.image.height,Ot=Ut.convert(j.format),te=Ut.convert(j.type);R.setTexture2D(j,0),Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,j.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,j.unpackAlignment),W.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,et,E.x,E.y,q,It,Ot,te,W.image.data):W.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,et,E.x,E.y,W.mipmaps[0].width,W.mipmaps[0].height,Ot,W.mipmaps[0].data):Y.texSubImage2D(Y.TEXTURE_2D,et,E.x,E.y,Ot,te,W.image),et===0&&j.generateMipmaps&&Y.generateMipmap(Y.TEXTURE_2D),Dt.unbindTexture()},this.copyTextureToTexture3D=function(E,W,j,et,q=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let It=E.max.x-E.min.x+1,Ot=E.max.y-E.min.y+1,te=E.max.z-E.min.z+1,de=Ut.convert(et.format),ve=Ut.convert(et.type),me;if(et.isData3DTexture)R.setTexture3D(et,0),me=Y.TEXTURE_3D;else if(et.isDataArrayTexture||et.isCompressedArrayTexture)R.setTexture2DArray(et,0),me=Y.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,et.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,et.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,et.unpackAlignment);let xe=Y.getParameter(Y.UNPACK_ROW_LENGTH),Ue=Y.getParameter(Y.UNPACK_IMAGE_HEIGHT),In=Y.getParameter(Y.UNPACK_SKIP_PIXELS),cn=Y.getParameter(Y.UNPACK_SKIP_ROWS),Qn=Y.getParameter(Y.UNPACK_SKIP_IMAGES),ze=j.isCompressedTexture?j.mipmaps[q]:j.image;Y.pixelStorei(Y.UNPACK_ROW_LENGTH,ze.width),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,ze.height),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,E.min.x),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,E.min.y),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,E.min.z),j.isDataTexture||j.isData3DTexture?Y.texSubImage3D(me,q,W.x,W.y,W.z,It,Ot,te,de,ve,ze.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Y.compressedTexSubImage3D(me,q,W.x,W.y,W.z,It,Ot,te,de,ze.data)):Y.texSubImage3D(me,q,W.x,W.y,W.z,It,Ot,te,de,ve,ze),Y.pixelStorei(Y.UNPACK_ROW_LENGTH,xe),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Ue),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,In),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,cn),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,Qn),q===0&&et.generateMipmaps&&Y.generateMipmap(me),Dt.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?R.setTextureCube(E,0):E.isData3DTexture?R.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?R.setTexture2DArray(E,0):R.setTexture2D(E,0),Dt.unbindTexture()},this.resetState=function(){O=0,I=0,L=null,Dt.reset(),Zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Hl?"display-p3":"srgb",e.unpackColorSpace=Be.workingColorSpace===Ga?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Mn?rs:qh}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===rs?Mn:yi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},dl=class extends yr{};dl.prototype.isWebGL1Renderer=!0;var Ra=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ge(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ca=class extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var vr=class extends Gi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},bh=new B,Eh=new B,Th=new dn,Ho=new gr,sa=new qs,fl=class extends Nn{constructor(t=new zn,e=new vr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)bh.fromBufferAttribute(e,s-1),Eh.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=bh.distanceTo(Eh);t.setAttribute("lineDistance",new Qe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sa.copy(n.boundingSphere),sa.applyMatrix4(s),sa.radius+=r,t.ray.intersectsSphere(sa)===!1)return;Th.copy(s).invert(),Ho.copy(t.ray).applyMatrix4(Th);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new B,h=new B,f=new B,u=new B,d=this.isLineSegments?2:1,x=n.index,m=n.attributes.position;if(x!==null){let p=Math.max(0,a.start),M=Math.min(x.count,a.start+a.count);for(let y=p,T=M-1;y<T;y+=d){let O=x.getX(y),I=x.getX(y+1);if(c.fromBufferAttribute(m,O),h.fromBufferAttribute(m,I),Ho.distanceSqToSegment(c,h,u,f)>l)continue;u.applyMatrix4(this.matrixWorld);let $=t.ray.origin.distanceTo(u);$<t.near||$>t.far||e.push({distance:$,point:f.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,a.start),M=Math.min(m.count,a.start+a.count);for(let y=p,T=M-1;y<T;y+=d){if(c.fromBufferAttribute(m,y),h.fromBufferAttribute(m,y+1),Ho.distanceSqToSegment(c,h,u,f)>l)continue;u.applyMatrix4(this.matrixWorld);let I=t.ray.origin.distanceTo(u);I<t.near||I>t.far||e.push({distance:I,point:f.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},wh=new B,Ah=new B,Pa=class extends fl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)wh.fromBufferAttribute(e,s),Ah.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+wh.distanceTo(Ah);t.setAttribute("lineDistance",new Qe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ia=class extends Jn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},jn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,d=(a-h)/u;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Bt:new B);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new B,s=[],r=[],a=[],o=new B,l=new dn;for(let d=0;d<=t;d++){let x=d/t;s[d]=this.getTangentAt(x,new B)}r[0]=new B,a[0]=new B;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(Rn(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,x))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Rn(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let x=1;x<=t;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],d*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Mr=class extends jn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e){let n=e||new Bt,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},pl=class extends Mr{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function kl(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,d*=h,s(a,o,u,d)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var ra=new B,zo=new kl,ko=new kl,Vo=new kl,ml=class extends jn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new B){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(ra.subVectors(s[0],s[1]).add(s[0]),c=ra);let f=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(ra.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ra),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(f),d),v=Math.pow(f.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(h),d);v<1e-4&&(v=1),x<1e-4&&(x=v),m<1e-4&&(m=v),zo.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,x,v,m),ko.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,x,v,m),Vo.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,x,v,m)}else this.curveType==="catmullrom"&&(zo.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),ko.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),Vo.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(zo.calc(l),ko.calc(l),Vo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new B().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Rh(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function w0(i,t){let e=1-i;return e*e*t}function A0(i,t){return 2*(1-i)*i*t}function R0(i,t){return i*i*t}function hr(i,t,e,n){return w0(i,t)+A0(i,e)+R0(i,n)}function C0(i,t){let e=1-i;return e*e*e*t}function P0(i,t){let e=1-i;return 3*e*e*i*t}function I0(i,t){return 3*(1-i)*i*i*t}function L0(i,t){return i*i*i*t}function ur(i,t,e,n,s){return C0(i,t)+P0(i,e)+I0(i,n)+L0(i,s)}var La=class extends jn{constructor(t=new Bt,e=new Bt,n=new Bt,s=new Bt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Bt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ur(t,s.x,r.x,a.x,o.x),ur(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},gl=class extends jn{constructor(t=new B,e=new B,n=new B,s=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new B){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ur(t,s.x,r.x,a.x,o.x),ur(t,s.y,r.y,a.y,o.y),ur(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Da=class extends jn{constructor(t=new Bt,e=new Bt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Bt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Bt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_l=class extends jn{constructor(t=new B,e=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new B){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new B){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ua=class extends jn{constructor(t=new Bt,e=new Bt,n=new Bt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Bt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(hr(t,s.x,r.x,a.x),hr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},xl=class extends jn{constructor(t=new B,e=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new B){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(hr(t,s.x,r.x,a.x),hr(t,s.y,r.y,a.y),hr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Na=class extends jn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Bt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(Rh(o,l.x,c.x,h.x,f.x),Rh(o,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Bt().fromArray(s))}return this}},Ch=Object.freeze({__proto__:null,ArcCurve:pl,CatmullRomCurve3:ml,CubicBezierCurve:La,CubicBezierCurve3:gl,EllipseCurve:Mr,LineCurve:Da,LineCurve3:_l,QuadraticBezierCurve:Ua,QuadraticBezierCurve3:xl,SplineCurve:Na}),yl=class extends jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ch[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Ch[s.type]().fromJSON(s))}return this}},$s=class extends yl{constructor(t){super(),this.type="Path",this.currentPoint=new Bt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Da(this.currentPoint.clone(),new Bt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Ua(this.currentPoint.clone(),new Bt(t,e),new Bt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new La(this.currentPoint.clone(),new Bt(t,e),new Bt(n,s),new Bt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Na(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Mr(t,e,n,s,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var Wi=class i extends zn{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],x=0,v=[],m=n/2,p=0;M(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Qe(f,3)),this.setAttribute("normal",new Qe(u,3)),this.setAttribute("uv",new Qe(d,2));function M(){let T=new B,O=new B,I=0,L=(e-t)/n;for(let $=0;$<=r;$++){let b=[],A=$/r,U=A*(e-t)+t;for(let F=0;F<=s;F++){let J=F/s,P=J*l+o,G=Math.sin(P),N=Math.cos(P);O.x=U*G,O.y=-A*n+m,O.z=U*N,f.push(O.x,O.y,O.z),T.set(G,L,N).normalize(),u.push(T.x,T.y,T.z),d.push(J,1-A),b.push(x++)}v.push(b)}for(let $=0;$<s;$++)for(let b=0;b<r;b++){let A=v[b][$],U=v[b+1][$],F=v[b+1][$+1],J=v[b][$+1];h.push(A,U,J),h.push(U,F,J),I+=6}c.addGroup(p,I,0),p+=I}function y(T){let O=x,I=new Bt,L=new B,$=0,b=T===!0?t:e,A=T===!0?1:-1;for(let F=1;F<=s;F++)f.push(0,m*A,0),u.push(0,A,0),d.push(.5,.5),x++;let U=x;for(let F=0;F<=s;F++){let P=F/s*l+o,G=Math.cos(P),N=Math.sin(P);L.x=b*N,L.y=m*A,L.z=b*G,f.push(L.x,L.y,L.z),u.push(0,A,0),I.x=G*.5+.5,I.y=N*.5*A+.5,d.push(I.x,I.y),x++}for(let F=0;F<s;F++){let J=O+F,P=U+F;T===!0?h.push(P,P+1,J):h.push(P+1,P,J),$+=3}c.addGroup(p,$,T===!0?1:2),p+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Xi=class i extends Wi{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},vl=class i extends zn{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Qe(r,3)),this.setAttribute("normal",new Qe(r.slice(),3)),this.setAttribute("uv",new Qe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let y=new B,T=new B,O=new B;for(let I=0;I<e.length;I+=3)d(e[I+0],y),d(e[I+1],T),d(e[I+2],O),l(y,T,O,M)}function l(M,y,T,O){let I=O+1,L=[];for(let $=0;$<=I;$++){L[$]=[];let b=M.clone().lerp(T,$/I),A=y.clone().lerp(T,$/I),U=I-$;for(let F=0;F<=U;F++)F===0&&$===I?L[$][F]=b:L[$][F]=b.clone().lerp(A,F/U)}for(let $=0;$<I;$++)for(let b=0;b<2*(I-$)-1;b++){let A=Math.floor(b/2);b%2===0?(u(L[$][A+1]),u(L[$+1][A]),u(L[$][A])):(u(L[$][A+1]),u(L[$+1][A+1]),u(L[$+1][A]))}}function c(M){let y=new B;for(let T=0;T<r.length;T+=3)y.x=r[T+0],y.y=r[T+1],y.z=r[T+2],y.normalize().multiplyScalar(M),r[T+0]=y.x,r[T+1]=y.y,r[T+2]=y.z}function h(){let M=new B;for(let y=0;y<r.length;y+=3){M.x=r[y+0],M.y=r[y+1],M.z=r[y+2];let T=m(M)/2/Math.PI+.5,O=p(M)/Math.PI+.5;a.push(T,1-O)}x(),f()}function f(){for(let M=0;M<a.length;M+=6){let y=a[M+0],T=a[M+2],O=a[M+4],I=Math.max(y,T,O),L=Math.min(y,T,O);I>.9&&L<.1&&(y<.2&&(a[M+0]+=1),T<.2&&(a[M+2]+=1),O<.2&&(a[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function d(M,y){let T=M*3;y.x=t[T+0],y.y=t[T+1],y.z=t[T+2]}function x(){let M=new B,y=new B,T=new B,O=new B,I=new Bt,L=new Bt,$=new Bt;for(let b=0,A=0;b<r.length;b+=9,A+=6){M.set(r[b+0],r[b+1],r[b+2]),y.set(r[b+3],r[b+4],r[b+5]),T.set(r[b+6],r[b+7],r[b+8]),I.set(a[A+0],a[A+1]),L.set(a[A+2],a[A+3]),$.set(a[A+4],a[A+5]),O.copy(M).add(y).add(T).divideScalar(3);let U=m(O);v(I,A+0,M,U),v(L,A+2,y,U),v($,A+4,T,U)}}function v(M,y,T,O){O<0&&M.x===1&&(a[y]=M.x-1),T.x===0&&T.z===0&&(a[y]=O/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},Oa=class i extends vl{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Sr=class extends $s{constructor(t){super(t),this.uuid=Ks(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new $s().fromJSON(s))}return this}},D0={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=su(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,f,u,d;if(n&&(r=B0(i,t,r,e)),i.length>80*e){o=c=i[0],l=h=i[1];for(let x=e;x<s;x+=e)f=i[x],u=i[x+1],f<o&&(o=f),u<l&&(l=u),f>c&&(c=f),u>h&&(h=u);d=Math.max(c-o,h-l),d=d!==0?32767/d:0}return br(r,a,e,o,l,d,0),a}};function su(i,t,e,n,s){let r,a;if(s===Z0(i,t,e,n)>0)for(r=t;r<e;r+=n)a=Ph(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=Ph(r,i[r],i[r+1],a);return a&&Xa(a,a.next)&&(Tr(a),a=a.next),a}function os(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Xa(e,e.next)||je(e.prev,e,e.next)===0)){if(Tr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function br(i,t,e,n,s,r,a){if(!i)return;!a&&r&&G0(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?N0(i,n,s,r):U0(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Tr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=O0(os(i),t,e),br(i,t,e,n,s,r,2)):a===2&&F0(i,t,e,n,s,r):br(os(i),t,e,n,s,r,1);break}}}function U0(i){let t=i.prev,e=i,n=i.next;if(je(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,f=o<l?o<c?o:c:l<c?l:c,u=s>r?s>a?s:a:r>a?r:a,d=o>l?o>c?o:c:l>c?l:c,x=n.next;for(;x!==t;){if(x.x>=h&&x.x<=u&&x.y>=f&&x.y<=d&&Hs(s,o,r,l,a,c,x.x,x.y)&&je(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function N0(i,t,e,n){let s=i.prev,r=i,a=i.next;if(je(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,f=r.y,u=a.y,d=o<l?o<c?o:c:l<c?l:c,x=h<f?h<u?h:u:f<u?f:u,v=o>l?o>c?o:c:l>c?l:c,m=h>f?h>u?h:u:f>u?f:u,p=Ml(d,x,t,e,n),M=Ml(v,m,t,e,n),y=i.prevZ,T=i.nextZ;for(;y&&y.z>=p&&T&&T.z<=M;){if(y.x>=d&&y.x<=v&&y.y>=x&&y.y<=m&&y!==s&&y!==a&&Hs(o,h,l,f,c,u,y.x,y.y)&&je(y.prev,y,y.next)>=0||(y=y.prevZ,T.x>=d&&T.x<=v&&T.y>=x&&T.y<=m&&T!==s&&T!==a&&Hs(o,h,l,f,c,u,T.x,T.y)&&je(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=v&&y.y>=x&&y.y<=m&&y!==s&&y!==a&&Hs(o,h,l,f,c,u,y.x,y.y)&&je(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;T&&T.z<=M;){if(T.x>=d&&T.x<=v&&T.y>=x&&T.y<=m&&T!==s&&T!==a&&Hs(o,h,l,f,c,u,T.x,T.y)&&je(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function O0(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Xa(s,r)&&ru(s,n,n.next,r)&&Er(s,r)&&Er(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Tr(n),Tr(n.next),n=i=r),n=n.next}while(n!==i);return os(n)}function F0(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&q0(a,o)){let l=au(a,o);a=os(a,a.next),l=os(l,l.next),br(a,t,e,n,s,r,0),br(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function B0(i,t,e,n){let s=[],r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=su(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(X0(c));for(s.sort(H0),r=0;r<s.length;r++)e=z0(s[r],e);return e}function H0(i,t){return i.x-t.x}function z0(i,t){let e=k0(i,t);if(!e)return t;let n=au(e,i);return os(n,n.next),os(e,e.next)}function k0(i,t){let e=t,n=-1/0,s,r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let u=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=r&&u>n&&(n=u,s=e.x<e.next.x?e:e.next,u===r))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,f;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Hs(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(f=Math.abs(a-e.y)/(r-e.x),Er(e,i)&&(f<h||f===h&&(e.x>s.x||e.x===s.x&&V0(s,e)))&&(s=e,h=f)),e=e.next;while(e!==o);return s}function V0(i,t){return je(i.prev,i,t.prev)<0&&je(t.next,i,i.next)<0}function G0(i,t,e,n){let s=i;do s.z===0&&(s.z=Ml(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,W0(s)}function W0(i){let t,e,n,s,r,a,o,l,c=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(a>1);return i}function Ml(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function X0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Hs(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function q0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Y0(i,t)&&(Er(i,t)&&Er(t,i)&&$0(i,t)&&(je(i.prev,i,t.prev)||je(i,t.prev,t))||Xa(i,t)&&je(i.prev,i,i.next)>0&&je(t.prev,t,t.next)>0)}function je(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Xa(i,t){return i.x===t.x&&i.y===t.y}function ru(i,t,e,n){let s=oa(je(i,t,e)),r=oa(je(i,t,n)),a=oa(je(e,n,i)),o=oa(je(e,n,t));return!!(s!==r&&a!==o||s===0&&aa(i,e,t)||r===0&&aa(i,n,t)||a===0&&aa(e,i,n)||o===0&&aa(e,t,n))}function aa(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function oa(i){return i>0?1:i<0?-1:0}function Y0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&ru(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Er(i,t){return je(i.prev,i,i.next)<0?je(i,t,i.next)>=0&&je(i,i.prev,t)>=0:je(i,t,i.prev)<0||je(i,i.next,t)<0}function $0(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function au(i,t){let e=new Sl(i.i,i.x,i.y),n=new Sl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ph(i,t,e,n){let s=new Sl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Tr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Sl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Z0(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var dr=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Ih(t),Lh(n,t);let a=t.length;e.forEach(Ih);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Lh(n,e[l]);let o=D0.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Ih(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Lh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Fa=class i extends zn{constructor(t=new Sr([new Bt(0,.5),new Bt(-.5,-.5),new Bt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Qe(s,3)),this.setAttribute("normal",new Qe(r,3)),this.setAttribute("uv",new Qe(a,2));function c(h){let f=s.length/3,u=h.extractPoints(e),d=u.shape,x=u.holes;dr.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=x.length;m<p;m++){let M=x[m];dr.isClockWise(M)===!0&&(x[m]=M.reverse())}let v=dr.triangulateShape(d,x);for(let m=0,p=x.length;m<p;m++){let M=x[m];d=d.concat(M)}for(let m=0,p=d.length;m<p;m++){let M=d[m];s.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let m=0,p=v.length;m<p;m++){let M=v[m],y=M[0]+f,T=M[1]+f,O=M[2]+f;n.push(y,T,O),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return K0(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function K0(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var qi=class i extends zn{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new B,u=new B,d=[],x=[],v=[],m=[];for(let p=0;p<=n;p++){let M=[],y=p/n,T=0;p===0&&a===0?T=.5/e:p===n&&l===Math.PI&&(T=-.5/e);for(let O=0;O<=e;O++){let I=O/e;f.x=-t*Math.cos(s+I*r)*Math.sin(a+y*o),f.y=t*Math.cos(a+y*o),f.z=t*Math.sin(s+I*r)*Math.sin(a+y*o),x.push(f.x,f.y,f.z),u.copy(f).normalize(),v.push(u.x,u.y,u.z),m.push(I+T,1-y),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){let y=h[p][M+1],T=h[p][M],O=h[p+1][M],I=h[p+1][M+1];(p!==0||a>0)&&d.push(y,T,I),(p!==n-1||l<Math.PI)&&d.push(T,O,I)}this.setIndex(d),this.setAttribute("position",new Qe(x,3)),this.setAttribute("normal",new Qe(v,3)),this.setAttribute("uv",new Qe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Sn=class extends Gi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yh,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function la(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function J0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Zs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},bl=class extends Zs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Dc,endingEnd:Dc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Uc:r=t,o=2*e-n;break;case Nc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Uc:a=t,l=2*n-e;break;case Nc:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,x=(n-e)/(s-e),v=x*x,m=v*x,p=-u*m+2*u*v-u*x,M=(1+u)*m+(-1.5-2*u)*v+(-.5+u)*x+1,y=(-1-d)*m+(1.5+d)*v+.5*x,T=d*m-d*v;for(let O=0;O!==o;++O)r[O]=p*a[h+O]+M*a[c+O]+y*a[l+O]+T*a[f+O];return r}},El=class extends Zs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),f=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*f+a[l+u]*h;return r}},Tl=class extends Zs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ai=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=la(e,this.TimeBufferType),this.values=la(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:la(t.times,Array),values:la(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Tl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new El(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new bl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ha:e=this.InterpolantFactoryMethodDiscrete;break;case ua:e=this.InterpolantFactoryMethodLinear;break;case po:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ha;case this.InterpolantFactoryMethodLinear:return ua;case this.InterpolantFactoryMethodSmooth:return po}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&J0(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===po,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let f=o*n,u=f-n,d=f+n;for(let x=0;x!==n;++x){let v=e[f+x];if(v!==e[u+x]||v!==e[d+x]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let f=o*n,u=a*n;for(let d=0;d!==n;++d)e[u+d]=e[f+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};ai.prototype.TimeBufferType=Float32Array;ai.prototype.ValueBufferType=Float32Array;ai.prototype.DefaultInterpolation=ua;var ls=class extends ai{};ls.prototype.ValueTypeName="bool";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=ha;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;var wl=class extends ai{};wl.prototype.ValueTypeName="color";var Al=class extends ai{};Al.prototype.ValueTypeName="number";var Rl=class extends Zs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Vi.slerpFlat(r,0,a,c-o,a,c,l);return r}},wr=class extends ai{InterpolantFactoryMethodLinear(t){return new Rl(this.times,this.values,this.getValueSize(),t)}};wr.prototype.ValueTypeName="quaternion";wr.prototype.DefaultInterpolation=ua;wr.prototype.InterpolantFactoryMethodSmooth=void 0;var cs=class extends ai{};cs.prototype.ValueTypeName="string";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=ha;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;var Cl=class extends ai{};Cl.prototype.ValueTypeName="vector";var Pl=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],x=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return x}return null}}},j0=new Pl,Il=class{constructor(t){this.manager=t!==void 0?t:j0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Il.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ba=class extends Nn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ge(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}};var Go=new dn,Dh=new B,Uh=new B,Ll=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Bt(512,512),this.map=null,this.mapPass=null,this.matrix=new dn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xr,this._frameExtents=new Bt(1,1),this._viewportCount=1,this._viewports=[new xn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Dh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Dh),Uh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Uh),e.updateMatrixWorld(),Go.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Go),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Go)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Dl=class extends Ll{constructor(){super(new Ta(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ha=class extends Ba{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nn.DEFAULT_UP),this.updateMatrix(),this.target=new Nn,this.shadow=new Dl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},za=class extends Ba{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Vl="\\[\\]\\.:\\/",Q0=new RegExp("["+Vl+"]","g"),Gl="[^"+Vl+"]",t_="[^"+Vl.replace("\\.","")+"]",e_=/((?:WC+[\/:])*)/.source.replace("WC",Gl),n_=/(WCOD+)?/.source.replace("WCOD",t_),i_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gl),s_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gl),r_=new RegExp("^"+e_+n_+i_+s_+"$"),a_=["material","materials","bones","map"],Ul=class{constructor(t,e,n){let s=n||$e.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},$e=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Q0,"")}static parseTrackName(t){let e=r_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);a_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};$e.Composite=Ul;$e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};$e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};$e.prototype.GetterByBindingType=[$e.prototype._getValue_direct,$e.prototype._getValue_array,$e.prototype._getValue_arrayElement,$e.prototype._getValue_toArray];$e.prototype.SetterByBindingTypeAndVersioning=[[$e.prototype._setValue_direct,$e.prototype._setValue_direct_setNeedsUpdate,$e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_array,$e.prototype._setValue_array_setNeedsUpdate,$e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_arrayElement,$e.prototype._setValue_arrayElement_setNeedsUpdate,$e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_fromArray,$e.prototype._setValue_fromArray_setNeedsUpdate,$e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var y_=new Float32Array(1);var ka=class{constructor(t,e,n=0,s=1/0){this.ray=new gr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new _r,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Nl(t,this,n,e),n.sort(Nh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Nl(t[s],this,n,e);return n.sort(Nh),n}};function Nh(i,t){return i.distance-t.distance}function Nl(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){let s=i.children;for(let r=0,a=s.length;r<a;r++)Nl(s[r],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ol}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ol);var l_=35,c_=25,Se=.95,On=.35,qa=6,hs=130,ou=240,lu=typeof window<"u"&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||window.location.search.includes("dev=1")),h_=[{value:"balanced",label:"Balanced (HP + even stats)"},{value:"tanky",label:"Tanky (HP + VIT)"},{value:"aggressive",label:"Aggressive (STR + AGI)"},{value:"scout",label:"Scout (high AGI)"},{value:"ranged",label:"Ranged (DEX + range)"},{value:"caster",label:"Caster (INT + MP)"},{value:"random",label:"Random"},{value:"custom",label:"Custom order"}],u_=["berserker","knight","lancer","werewolf","samurai","ninja","assassin","ghoul","monk","hunter","mage","witch"],Kt={PATH:0,GRASS:1,TREE:2,WATER:3,ROCK:4,BASE_TOP:5,BASE_BOTTOM:6,CENTER:7},Ya=["knight","mage","monk","ghoul","lancer","hunter","assassin","berserker","witch","ninja","samurai","werewolf"];function d_(i){for(let t=i.length-1;t>0;t--){let e=Math.floor(Math.random()*(t+1));[i[t],i[e]]=[i[e],i[t]]}return i}var Oe={knight:{name:"Knight",gender:"male",hp:27,maxHp:27,mp:5,maxMp:5,str:13,agi:8,vit:14,dex:10,luk:4,int:7,range:1},mage:{name:"Mage",gender:"female",hp:17,maxHp:17,mp:22,maxMp:22,str:6,agi:4,vit:5,dex:4,luk:13,int:15,range:4},monk:{name:"Monk",gender:"male",hp:23,maxHp:23,mp:12,maxMp:12,str:10,agi:10,vit:12,dex:9,luk:11,int:10,range:1},ghoul:{name:"Ghoul",gender:"male",hp:21,maxHp:21,mp:6,maxMp:6,str:12,agi:9,vit:9,dex:11,luk:9,int:5,range:1},lancer:{name:"Lancer",gender:"female",hp:22,maxHp:22,mp:7,maxMp:7,str:13,agi:11,vit:10,dex:7,luk:5,int:8,range:2},hunter:{name:"Hunter",gender:"female",hp:18,maxHp:18,mp:9,maxMp:9,str:7,agi:5,vit:7,dex:15,luk:12,int:5,range:6},assassin:{name:"Assassin",gender:"female",hp:19,maxHp:19,mp:10,maxMp:10,str:9,agi:14,vit:6,dex:14,luk:10,int:4,range:1},berserker:{name:"Berserker",gender:"male",hp:30,maxHp:30,mp:3,maxMp:3,str:15,agi:7,vit:13,dex:8,luk:6,int:2,range:1},witch:{name:"Witch",gender:"female",hp:16,maxHp:16,mp:24,maxMp:24,str:5,agi:6,vit:4,dex:5,luk:14,int:14,range:3},ninja:{name:"Ninja",gender:"female",hp:20,maxHp:20,mp:12,maxMp:12,str:8,agi:15,vit:7,dex:12,luk:8,int:9,range:1},samurai:{name:"Samurai",gender:"male",hp:24,maxHp:24,mp:8,maxMp:8,str:11,agi:12,vit:8,dex:13,luk:7,int:6,range:1},werewolf:{name:"Werewolf",gender:"male",hp:25,maxHp:25,mp:4,maxMp:4,str:14,agi:13,vit:11,dex:6,luk:6,int:3,range:1}},$a={knight:{primary:6908265,secondary:9127187,hair:12887172,cape:3355443},mage:{primary:16776656,secondary:3355443,hair:13353955,cape:4853326},monk:{primary:16777188,secondary:16119285,hair:2889744},ghoul:{primary:32896,secondary:6636321,hair:32896,skin:32896},lancer:{primary:3169502,secondary:16776656,hair:15854290,cape:14423100},hunter:{primary:8421376,secondary:9584654,hair:7898731,cape:16119285},assassin:{primary:986695,secondary:16119285,hair:2621751},berserker:{primary:657930,secondary:986695,hair:657930,cape:1118481},witch:{primary:16119285,secondary:8388640,hair:16777188,cape:2263842},ninja:{primary:267292,secondary:4744577,hair:4744577},samurai:{primary:13882323,secondary:3556687,hair:3556687},werewolf:{primary:11119017,secondary:14474460,hair:12632256}},Ar={knight:"https://creator.nightcafe.studio/jobs/OlIWpAye2LeM5gPkAGEI/OlIWpAye2LeM5gPkAGEI--1--xc223.jpg",mage:"https://media.craiyon.com/2025-08-13/bLqz0LbwSIynOcUHty4Maw.webp",monk:"https://cdnb.artstation.com/p/assets/images/images/028/576/499/large/ahruna-art-oct17.jpg?1594859688",ghoul:"https://i.pinimg.com/736x/d3/cc/41/d3cc41778d05dec0371a69e29659f792.jpg",lancer:"https://i.redd.it/zolf64gpoa0c1.jpg",hunter:"https://coolvibe.com/wp-content/uploads/2011/02/hunter.jpg",assassin:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk2-NBPpPOU7duYgN_k_9oFKZ5hJjU28qyoA&s",berserker:"https://entertainment.inquirer.net/files/2016/07/top_bg.jpg",witch:"https://w0.peakpx.com/wallpaper/382/134/HD-wallpaper-evil-witch-witch-female-dress-white-hair-evil-black-woman-girl-darkness-anime-dark-beauty-lady-long-hair.jpg",ninja:"https://i.pinimg.com/474x/02/88/60/0288609778e53701b7e64051d7164922.jpg",samurai:"https://files.idyllic.app/files/static/3120390?width=256&optimizer=image",werewolf:"https://i.pinimg.com/736x/1f/95/27/1f9527c6255465547d664f19dd11967c.jpg"},cu={knight:[{name:"Shield Wall",description:"Gain +2 VIT for 2 turns.",cost:3,target:"self",range:0,level:2,effectKey:"shieldWall"},{name:"Dominate",description:"Steal 1 STR from an enemy.",cost:5,target:"enemy",range:1,level:3,effectKey:"dominate"}],mage:[{name:"Arcane Bolt",description:"Deal INT-based damage to one enemy.",cost:4,target:"enemy",range:6,level:1,effectKey:"arcaneBolt",type:"spell"},{name:"Freeze",description:"Reduce target's AGI by 10 for 1 turn.",cost:8,target:"enemy",range:6,level:2,effectKey:"freeze"}],monk:[{name:"Mantra",description:"Gain LUK based on INT for both ally and self for 2 turns.",cost:3,hpCost:2,target:"ally",range:4,level:2,effectKey:"mantra"},{name:"Chakra",description:"Heal HP for both ally and self.",cost:8,target:"ally",range:4,level:3,effectKey:"chakra"}],ghoul:[{name:"Weaken",description:"Steal 1 VIT from an enemy.",cost:3,target:"enemy",range:1,level:2,effectKey:"weaken"},{name:"Feast",description:"Deal STR-based damage to enemy and heal self.",cost:4,target:"enemy",range:1,level:3,effectKey:"feast"}],lancer:[{name:"Impale",description:"Reduce target's AGI by 2 for 3 turns.",cost:4,target:"enemy",range:2,level:2,effectKey:"impale"},{name:"Pierce",description:"Deal STR-based damage through the defense.",cost:6,target:"enemy",range:2,level:3,effectKey:"pierce"}],hunter:[{name:"Focus",description:"Gain +3 DEX for 2 turns.",cost:4,target:"self",range:0,level:2,effectKey:"focus"},{name:"Snipe",description:"Deal DEX-based damage to one enemy.",cost:6,target:"enemy",range:10,level:3,effectKey:"snipe"}],assassin:[{name:"Cripple",description:"Steal 1 AGI from an enemy.",cost:5,target:"enemy",range:1,level:2,effectKey:"cripple"},{name:"Execute",description:"Deal AGI-based damage to one enemy.",cost:7,target:"enemy",range:1,level:3,effectKey:"execute"}],berserker:[{name:"Berserk",description:"Deal STR-based damage for -3 HP.",cost:0,hpCost:3,target:"enemy",range:1,level:2,effectKey:"berserk"},{name:"Bloodlust",description:"Gain STR and VIT based on lost HP for 1 turn.",cost:5,target:"self",range:0,level:3,effectKey:"bloodlust"}],witch:[{name:"Hex",description:"Steal 1 INT from an enemy.",cost:5,target:"enemy",range:5,level:1,effectKey:"hex"},{name:"Drain",description:"Deal INT-based damage to enemy and heal self.",cost:6,target:"enemy",range:5,level:2,effectKey:"drain",type:"spell"}],ninja:[{name:"Shuriken",description:"Deal DEX-based ranged attack.",cost:5,target:"enemy",range:4,level:2,effectKey:"shuriken"},{name:"Blind",description:"Steal 2 DEX from an enemy.",cost:8,target:"enemy",range:1,level:3,effectKey:"blind"}],samurai:[{name:"Iaido",description:"Gain +1 STR and +1 DEX for 2 turns.",cost:5,target:"self",range:0,level:2,effectKey:"iaido"},{name:"Chokuto",description:"Deal STR+DEX-based damage to one enemy.",cost:7,target:"enemy",range:1,level:3,effectKey:"chokuto"}],werewolf:[{name:"Bite",description:"Deal STR+AGI-based damage to one enemy.",cost:5,target:"enemy",range:1,level:2,effectKey:"bite"},{name:"Howl",description:"Gain +2 STR and +2 AGI for 2 turns.",cost:6,target:"self",range:0,level:3,effectKey:"howl"}]};function Mt(i,t){let e=i[t]!=null?i[t]:0,n=i.tempBuff&&i.tempBuff[t]!=null?i.tempBuff[t]:0,s=i.tempDebuff&&i.tempDebuff[t]!=null?i.tempDebuff[t]:0;return e+n-s}function Za(i,t,e,n){let s=t,r=e,o={shieldWall:"Shield Wall",dominate:"Dominate",arcaneBolt:"Arcane Bolt",freeze:"Freeze",mantra:"Mantra",chakra:"Chakra",weaken:"Weaken",feast:"Feast",impale:"Impale",pierce:"Pierce",focus:"Focus",snipe:"Snipe",execute:"Execute",cripple:"Cripple",berserk:"Berserk",bloodlust:"Bloodlust",hex:"Hex",drain:"Drain",shuriken:"Shuriken",blind:"Blind",iaido:"Iaido",chokuto:"Chokuto",bite:"Bite",howl:"Howl"}[i]||i.replace(/([A-Z])/g," $1").replace(/^./,d=>d.toUpperCase()).trim();n.showFloatingCombatText&&n.showFloatingCombatText(s.x,s.y,o,!1,"skill-name");let l=i.replace(/([A-Z])/g," $1").replace(/^./,d=>d.toUpperCase()).trim(),c=r?`${r.name} (${r.class}, P${r.player})`:"self",h=null,f=(d,x,v,m)=>{if(v)d.hp=Math.min(d.maxHp,d.hp+x),n.showFloatingCombatText&&n.showFloatingCombatText(d.x,d.y,`+${x}`,!1,"heal");else{let p=d===s,M=!0;if(!p&&!m){let y=Mt(d,"agi")*.7+Mt(d,"luk")*.3;M=Math.random()*Math.max(.001,y)<=Mt(s,"dex")}return M?(d.hp=Math.max(0,d.hp-x),d!==s&&(h=x),n.showFloatingCombatText&&n.showFloatingCombatText(d.x,d.y,String(x),!1),n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(d),d.hp<=0&&n.handleUnitDeath&&n.handleUnitDeath(d)):n.showFloatingCombatText&&n.showFloatingCombatText(d.x,d.y,"MISS",!0),M}},u=(d,x,v,m)=>{n.showFloatingCombatText&&n.showFloatingCombatText(d,x,v,!1,m?"buff":"debuff")};switch(i){case"shieldWall":s.tempBuff=s.tempBuff||{},s.tempBuff.vit=2,s.tempBuff.duration=3,u(s.x,s.y,"+2 VIT",!0);break;case"dominate":r&&(r.str=Math.max(1,(r.str||0)-1),s.str=(s.str||0)+1,u(r.x,r.y,"-1 STR",!1),u(s.x,s.y,"+1 STR",!0));break;case"arcaneBolt":{if(!r)break;let d=Math.max(1,Math.ceil(Mt(s,"int")-(Mt(r,"int")*.7+Mt(r,"luk")*.2)));f(r,d,!1,!0);break}case"freeze":r&&(r.tempDebuff=r.tempDebuff||{},r.tempDebuff.agi=10,r.tempDebuff.duration=1,u(r.x,r.y,"-10 AGI",!1));break;case"mantra":if(r){let d=Math.max(1,Math.floor(Mt(s,"int")*.3));if(s.tempBuff=s.tempBuff||{},s.tempBuff.int=d,s.tempBuff.duration=3,u(s.x,s.y,`+${d} LUK`,!0),!r)break;r.tempBuff=r.tempBuff||{},r.tempBuff.luk=d,r.tempBuff.duration=3,u(r.x,r.y,`+${d} LUK`,!0)}break;case"chakra":if(f(s,Math.max(1,Math.floor(Mt(s,"int")*.3)+Mt(s,"luk")*.2),!0),!r)break;f(r,Math.max(1,Math.floor(Mt(s,"int")*.3)+Mt(r,"luk")*.2),!0);break;case"weaken":r&&(r.vit=Math.max(1,(r.vit||0)-1),s.vit=(s.vit||0)+1,u(r.x,r.y,"-1 VIT",!1),u(s.x,s.y,"+1 VIT",!0));break;case"feast":{if(!r)break;let d=Math.max(1,Math.floor(Mt(s,"str")*.7-(Mt(r,"vit")*.3+Mt(r,"luk")*.2)));f(r,d,!1)&&f(s,d,!0);break}case"impale":r&&(r.tempDebuff=r.tempDebuff||{},r.tempDebuff.agi=2,r.tempDebuff.duration=4,u(r.x,r.y,"-2 AGI",!1));break;case"pierce":{if(!r)break;let d=Math.max(1,Math.floor(Mt(s,"str")*.6));f(r,d,!1);break}case"focus":s.tempBuff=s.tempBuff||{},s.tempBuff.dex=3,s.tempBuff.duration=3,u(s.x,s.y,"+2 DEX",!0);break;case"snipe":{if(!r)break;let d=Math.max(1,Math.floor(Mt(s,"dex")*.7-(Mt(r,"vit")*.3+Mt(r,"luk")*.2)));f(r,d,!1);break}case"execute":if(r){let d=Math.max(1,Math.floor(Mt(s,"agi")*.7-(Mt(r,"vit")*.3+Mt(r,"luk")*.2)));f(r,d,!1)}break;case"cripple":r&&(r.agi=Math.max(1,(r.agi||0)-1),s.agi=(s.agi||0)+1,u(r.x,r.y,"-1 AGI",!1),u(s.x,s.y,"+1 AGI",!0));break;case"berserk":if(r){f(r,Math.max(1,Math.floor(Mt(s,"str")*.8-Mt(r,"vit")*.3+Mt(r,"luk")*.2)),!1),f(s,3,!1);break}case"bloodlust":{let d=Math.max(1,Math.floor((s.maxHp-s.hp)*.2));s.tempBuff=s.tempBuff||{},s.tempBuff.str=d,s.tempBuff.vit=d,s.tempBuff.duration=2,u(s.x,s.y,`+${d} STR, +${d} VIT`,!0);break}case"hex":r&&(r.int=Math.max(1,(r.int||0)-1),s.int=(s.int||0)+1,u(r.x,r.y,"-1 INT",!1),u(s.x,s.y,"+1 INT",!0));break;case"drain":{if(!r)break;let d=Math.max(1,Math.ceil(Mt(s,"int")*.7-(Mt(r,"int")*.4+Mt(r,"luk")*.2)));f(r,d,!1,!0),f(s,d,!0);break}case"shuriken":{if(!r)break;let d=Math.max(1,Math.floor(Mt(s,"dex")*.7-(Mt(r,"vit")*.3+Mt(r,"luk")*.2)));f(r,d,!1);break}case"blind":r&&(r.dex=Math.max(1,(r.dex||0)-2),s.dex=(s.dex||0)+2,u(r.x,r.y,"-2 DEX",!1),u(s.x,s.y,"+2 DEX",!0));break;case"iaido":s.tempBuff=s.tempBuff||{},s.tempBuff.str=1,s.tempBuff.dex=1,s.tempBuff.duration=3,u(s.x,s.y,"+1 STR, +1 DEX",!0);break;case"chokuto":{if(!r)break;let d=Math.max(1,Math.floor((s.str||0)+(s.dex||0)*.3));f(r,d,!1);break}case"bite":{if(!r)break;let d=Math.max(1,Math.floor(Mt(s,"str")*.7+Mt(s,"agi")*.1-(Mt(r,"vit")*.3+Mt(r,"luk")*.2)));f(r,d,!1);break}case"howl":s.tempBuff=s.tempBuff||{},s.tempBuff.str=2,s.tempBuff.agi=2,s.tempBuff.duration=2,u(s.x,s.y,"+2 STR, +2 AGI",!0);break;default:break}console.log("[SKILL]",`${s.name} (${s.class}, P${s.player})`,"uses",l,"\u2192",c,`| MP ${s.mp}`,h!=null?`| ${h} dmg`:""),n.updateTurnUI&&n.updateTurnUI()}function f_(){let i=l_,t=c_,e=Array.from({length:t},()=>Array(i).fill(!1)),n=Array.from({length:t},()=>Array(i).fill(0)),s=Array.from({length:t},()=>Array(i).fill(Kt.GRASS)),r=Math.floor(i/2),a=Math.floor(i/2),o=0,l=t-1;for(let U=-1;U<=1;U++)for(let F=-2;F<=2;F++){let J=r+F,P=o+U;J>=0&&J<i&&P>=0&&P<t&&(e[P][J]=!0,s[P][J]=Kt.BASE_TOP,n[P][J]=1)}for(let U=-1;U<=1;U++)for(let F=-2;F<=2;F++){let J=a+F,P=l+U;J>=0&&J<i&&P>=0&&P<t&&(e[P][J]=!0,s[P][J]=Kt.BASE_BOTTOM,n[P][J]=1)}let c=Math.floor(i/2),h=Math.floor(t/2);for(let U=-1;U<=1;U++)for(let F=-2;F<=2;F++){let J=c+F,P=h+U;J>=0&&J<i&&P>=0&&P<t&&(e[P][J]=!0,s[P][J]=Kt.CENTER,n[P][J]=1)}let f=new Set,u=(U,F)=>Math.abs(U-c)<=2&&Math.abs(F-h)<=1,d=(U,F)=>{U<0||U>=i||F<0||F>=t||u(U,F)||f.add(F*i+U)},x=Math.floor(i/2),v=Math.floor(t/2),m=Math.min(i,t)*.29,p=Math.max(60,(t+i)*2);for(let U=0;U<2;U++){let F=U===0?x-m:x+m,J=U===0?Math.PI/2:-Math.PI/2,P=U===0?Math.PI*3/2:Math.PI/2;for(let G=0;G<=p;G++){let N=G/p,st=J+N*(P-J),Z=F+m*Math.cos(st),Q=v+m*Math.sin(st),nt=Math.round(Z),ct=Math.round(Q);d(nt,ct),d(nt+1,ct),d(nt-1,ct),d(nt,ct+1),d(nt,ct-1)}}let M=[[0,1],[0,-1],[1,0],[-1,0]];for(let U=0;U<1;U++){let F=[];f.forEach(J=>{let P=J%i,G=J/i|0;for(let[N,st]of M){let Z=P+N,Q=G+st;if(Z<0||Z>=i||Q<0||Q>=t)continue;let nt=Q*i+Z;f.has(nt)||F.push(nt)}}),F.forEach(J=>f.add(J))}f.forEach(U=>{let F=U%i,J=U/i|0;s[J][F]===Kt.BASE_TOP||s[J][F]===Kt.BASE_BOTTOM||s[J][F]===Kt.CENTER||(e[J][F]=!0,s[J][F]=Kt.PATH,n[J][F]=1)});let y=Math.round(x-m*1.6),T=Math.round(x+m*1.6),O=Math.round(x-m),I=Math.round(x+m),L=1;for(let U=h-L;U<=h+L;U++)if(!(U<0||U>=t))for(let F=y;F<=T;F++)F<0||F>=i||(e[U][F]=!0,s[U][F]!==Kt.CENTER&&s[U][F]!==Kt.BASE_TOP&&s[U][F]!==Kt.BASE_BOTTOM&&(s[U][F]=Kt.PATH),n[U][F]=Math.max(n[U][F],1));function $(U,F,J,P){let G=Math.max(1,Math.min(U,F)),N=Math.min(t-2,Math.max(U,F)),st=Math.max(1,Math.min(J,P)),Z=Math.min(i-2,Math.max(J,P));for(let Q=G;Q<=N;Q++)for(let nt=st;nt<=Z;nt++)s[Q][nt]===Kt.BASE_TOP||s[Q][nt]===Kt.BASE_BOTTOM||s[Q][nt]===Kt.CENTER||(e[Q][nt]=!0,s[Q][nt]=Kt.PATH,n[Q][nt]=1)}let b=3,A=3;$(o,o+b-1,O,r-1),$(o,o+b-1,r+1,I),$(l-A+1,l,O,a-1),$(l-A+1,l,a+1,I);for(let U=-1;U<=2;U++)for(let F=-2;F<=2;F++){let J=r+F,P=o+U;J>=0&&J<i&&P>=0&&P<t&&(e[P][J]=!0,s[P][J]=Kt.BASE_TOP,n[P][J]=1)}for(let U=-2;U<=1;U++)for(let F=-2;F<=2;F++){let J=a+F,P=l+U;J>=0&&J<i&&P>=0&&P<t&&(e[P][J]=!0,s[P][J]=Kt.BASE_BOTTOM,n[P][J]=1)}for(let U=0;U<t;U++)for(let F=0;F<i;F++){if(e[U][F]||s[U][F]===Kt.BASE_TOP||s[U][F]===Kt.BASE_BOTTOM||s[U][F]===Kt.CENTER)continue;let J=Math.abs(F-r)<=4&&Math.abs(U-o)<=3,P=Math.abs(F-a)<=4&&Math.abs(U-l)<=3,G=J||P,N=Math.random();N<.55&&!G?(s[U][F]=Kt.TREE,n[U][F]=1+Math.floor(Math.random()*2)):N<.75||G&&N<.5?(s[U][F]=Kt.WATER,n[U][F]=0):(s[U][F]=Kt.ROCK,n[U][F]=1+Math.floor(Math.random()*2))}return{w:i,h:t,path:e,height:n,type:s,topBaseX:r,topBaseY:o,botBaseX:a,botBaseY:l}}function p_(i,t,e){let n=t===1?Kt.BASE_BOTTOM:Kt.BASE_TOP,s=[];for(let r=0;r<i.h;r++)for(let a=0;a<i.w;a++)i.type[r][a]===n&&(e&&e.has(r*i.w+a)||s.push({gx:a,gy:r}));return s}function m_(i){let t=[];for(let e=0;e<i.h;e++)for(let n=0;n<i.w;n++)i.type[e][n]===Kt.CENTER&&t.push({gx:n,gy:e});return t}function hu(i,t){let e=m_(i);if(e.length===0)return t;let n=s=>Math.min(...e.map(r=>Math.abs(s.gx-r.gx)+Math.abs(s.gy-r.gy)));return[...t].sort((s,r)=>n(s)-n(r))}function Rr(i,t,e){if(t<0||t>=i.w||e<0||e>=i.h)return!1;let n=i.type[e][t];return!(n===Kt.TREE||n===Kt.WATER||n===Kt.ROCK)}function g_(i,t,e,n){let s=[],r=i,a=t,o=e,l=n,c=Math.abs(o-r),h=Math.abs(l-a),f=r<o?1:-1,u=a<l?1:-1,d=c-h;for(;s.push({x:r,y:a}),!(r===o&&a===l);){let x=2*d;x>-h&&(d-=h,r+=f),x<c&&(d+=c,a+=u)}return s}function us(i,t,e,n,s){let r=g_(t,e,n,s);for(let a=1;a<r.length-1;a++){let o=r[a];if(!Rr(i,o.x,o.y))return!1}return!0}function Ka(i,t,e,n,s,r){let a=(f,u)=>u*i.w+f,o=new Map;o.set(a(t,e),0);let l=[{x:t,y:e,d:0}],c=[[0,1],[0,-1],[1,0],[-1,0]],h=s!=null&&r!=null;for(;l.length;){let{x:f,y:u,d}=l.shift();if(!(d>=n))for(let[x,v]of c){let m=f+x,p=u+v;if(!Rr(i,m,p))continue;if(h){let T=s.find(O=>O.hp>0&&O.x===m&&O.y===p);if(T&&T.player!==r.player)continue}let M=a(m,p);if(o.has(M))continue;let y=d+1;o.set(M,y),l.push({x:m,y:p,d:y})}}return o}function uu(i,t,e,n){let s=new Map;for(let r=0;r<i.h;r++)for(let a=0;a<i.w;a++){let o=Math.abs(a-t)+Math.abs(r-e);o>=1&&o<=n&&s.set(r*i.w+a,o)}return s}function Yi(i,t,e,n,s,r,a){if(t===n&&e===s)return[{x:t,y:e}];let o=(u,d)=>d*i.w+u,l=new Map,c=[{x:t,y:e}];l.set(o(t,e),null);let h=[[0,1],[0,-1],[1,0],[-1,0]];function f(u,d){if(!Rr(i,u,d))return!1;let x=r.find(v=>v.hp>0&&v.x===u&&v.y===d);return x?x.id===a.id||x.player===a.player:!0}for(;c.length;){let{x:u,y:d}=c.shift();if(u===n&&d===s){let x=[],v={x:n,y:s};for(;v;)x.unshift(v),v=l.get(o(v.x,v.y));return x}for(let[x,v]of h){let m=u+x,p=d+v,M=o(m,p);l.has(M)||f(m,p)&&(l.set(M,{x:u,y:d}),c.push({x:m,y:p}))}}return null}var du={[Kt.PATH]:2976557,[Kt.GRASS]:2968109,[Kt.TREE]:1719578,[Kt.WATER]:1989278,[Kt.ROCK]:4872778,[Kt.BASE_TOP]:8014410,[Kt.BASE_BOTTOM]:4872826,[Kt.CENTER]:13940810};function fu(i){return i.w*Se/2}function pu(i){return i.h*Se/2}function mu(i){let t=document.createElement("canvas");t.width=i,t.height=i;let e=t.getContext("2d"),n=e.createImageData(i,i),s=n.data;for(let a=0;a<s.length;a+=4){let o=Math.floor(128+(Math.random()-.5)*80);s[a]=s[a+1]=s[a+2]=o,s[a+3]=255}e.putImageData(n,0,0);let r=new Ia(t);return r.wrapS=r.wrapT=fr,r.repeat.set(4,4),r.needsUpdate=!0,r}function __(i){let t=new Kn,e=fu(i),n=pu(i),s=new Cn(Se,On,Se),r=mu(64),a=.88,o=.02,l=[];function c(u,d,x,v,m){let p=new Sn({color:3828266,roughness:.9});p.bumpMap=r,p.bumpScale=.12;for(let M=0;M<v;M++){let y=.08+Math.random()*m,T=.03+Math.random()*.03,O=new ce(new Wi(T*.5,T,y,6),p);O.position.set(u+(Math.random()-.5)*.5,x+y/2,d+(Math.random()-.5)*.5),O.rotation.x=(Math.random()-.5)*.2,O.rotation.z=(Math.random()-.5)*.2,O.castShadow=!0,t.add(O)}}let h=.12;function f(u,d,x,v){let m=x+.02,p=[[u-h,m,d-h],[u+h,m,d+h],[u-h,m,d+h],[u+h,m,d-h],[u-h+.06,m,d-h+.06],[u+h-.06,m,d+h-.06],[u-h+.06,m,d+h-.06],[u+h-.06,m,d-h+.06]],M=new Float32Array(p.length*3);p.forEach((I,L)=>{M[L*3]=I[0],M[L*3+1]=I[1],M[L*3+2]=I[2]});let y=new zn;y.setAttribute("position",new Hn(M,3)),y.computeBoundingSphere();let T=new vr({color:855309,linewidth:1}),O=new Pa(y,T);v.add(O)}for(let u=0;u<i.h;u++)for(let d=0;d<i.w;d++){let x=i.type[u][d],v=i.height[u][d],m=du[x],p=On+v*.35,M=p/2+On/2,y=new Sn({roughness:Math.max(.7,Math.min(1,a+(Math.random()-.5)*.18)),metalness:Math.max(0,Math.min(.1,o+(Math.random()-.5)*.04))}),T=(m>>16&255)/255,O=(m>>8&255)/255,I=(m&255)/255,L=T,$=O,b=I;if(x===Kt.PATH||x===Kt.TREE||x===Kt.ROCK){let st=Math.random()*.45;L=T*(1-st)+.42*st,$=O*(1-st)+.26*st,b=I*(1-st)+.14*st}(x===Kt.TREE||x===Kt.ROCK)&&(L*=.5,$*=.5,b*=.5);let A=1+(Math.random()-.5)*.12;y.color.setRGB(Math.min(1,L*A),Math.min(1,$*A),Math.min(1,b*A)),y.bumpMap=r,y.bumpScale=.12;let U=new ce(s,y);U.position.set(d*Se-e+Se/2,p/2,u*Se-n+Se/2),U.castShadow=!0,U.receiveShadow=!0,U.userData={gx:d,gy:u,type:x},t.add(U);let F=d*Se-e+Se/2,J=u*Se-n+Se/2;if(x===Kt.TREE&&f(F,J,M,t),x===Kt.TREE){let P=new Kn;P.position.set(F,M,J);let G=d===0||d===i.w-1||u===0||u===i.h-1,N=G?.75+Math.random()*.35:.5+Math.random()*.2,st=new ge(4007959),Z=()=>1+(Math.random()-.5)*.4;st.r=Math.min(1,Math.max(0,st.r*Z())),st.g=Math.min(1,Math.max(0,st.g*Z())),st.b=Math.min(1,Math.max(0,st.b*Z()));let Q=.85+Math.random()*.2,nt=new Sn({color:st,roughness:Q});nt.bumpMap=r,nt.bumpScale=.1+Math.random()*.12;let ct=new ce(new Wi(.12,.14,N,8),nt);ct.position.set(0,N/2,0),ct.castShadow=!0,ct.raycast=function(){},P.add(ct);let mt=r.clone();mt.repeat.set(3,3);let tt=new ge(2972205),dt=()=>1+(Math.random()-.5)*.44;tt.r=Math.min(1,Math.max(0,tt.r*dt())),tt.g=Math.min(1,Math.max(0,tt.g*dt())),tt.b=Math.min(1,Math.max(0,tt.b*dt()));let Et=.78+Math.random()*.24,zt=new Sn({color:tt,roughness:Et});if(zt.bumpMap=mt,zt.bumpScale=.16+Math.random()*.14,Math.random()<.5){let ne=G?.52:.45,Jt=G?1.05:.9,Lt=.12,ae=Jt*.5,Y=Jt*.45,Ve=Jt*.4,qt=new ce(new Xi(ne,ae,8),zt);qt.position.set(0,N+ae/2,0),qt.castShadow=!0,qt.raycast=function(){},P.add(qt);let jt=new ce(new Xi(ne*.75,Y,8),zt);jt.position.set(0,N+ae-Lt+Y/2,0),jt.castShadow=!0,jt.raycast=function(){},P.add(jt);let Dt=new ce(new Xi(ne*.5,Ve,8),zt);Dt.position.set(0,N+ae-Lt+Y-Lt+Ve/2,0),Dt.castShadow=!0,Dt.raycast=function(){},P.add(Dt)}else{let ne=N-.25,Jt=()=>1+(Math.random()-.5)*.32,Lt=tt.clone();Lt.r=Math.min(1,Math.max(0,Lt.r*Jt())),Lt.g=Math.min(1,Math.max(0,Lt.g*Jt())),Lt.b=Math.min(1,Math.max(0,Lt.b*Jt()));let ae=tt.clone();ae.r=Math.min(1,Math.max(0,ae.r*Jt())),ae.g=Math.min(1,Math.max(0,ae.g*Jt())),ae.b=Math.min(1,Math.max(0,ae.b*Jt()));let Y=new Sn({color:Lt,roughness:Et+(Math.random()-.5)*.12});Y.bumpMap=mt,Y.bumpScale=zt.bumpScale;let Ve=new Sn({color:ae,roughness:Et+(Math.random()-.5)*.12});Ve.bumpMap=mt,Ve.bumpScale=zt.bumpScale;let qt=6+Math.floor(Math.random()*3);for(let jt=0;jt<qt;jt++){let Dt=.14+Math.random()*.22,Fe=(Math.random()-.5)*.5,ue=(Math.random()-.5)*.5,R=Math.random()*.4,S=jt%2===0?Y:Ve,K=new ce(new qi(Dt,8,6),S);K.position.set(Fe,ne+R+Dt*.5,ue),K.castShadow=!0,K.raycast=function(){},P.add(K)}}t.add(P),l.push(P)}else if(x===Kt.WATER){let P=du[Kt.WATER],G=(P>>16&255)/255,N=(P>>8&255)/255,st=(P&255)/255,Z=1+(Math.random()-.5)*.12,Q=new Sn({color:new ge().setRGB(Math.min(1,G*Z),Math.min(1,N*Z),Math.min(1,st*Z)),roughness:.08,metalness:.45,transparent:!0,opacity:.94,bumpMap:r,bumpScale:.03}),nt=new ce(new Si(Se,Se),Q);nt.rotation.x=-Math.PI/2,nt.position.set(F,M+.02,J),nt.receiveShadow=!0,t.add(nt)}else if(x===Kt.ROCK){let P=new Sn({color:6974058,roughness:.9});P.bumpMap=r,P.bumpScale=.2;let G=(Q,nt,ct)=>{let mt=new ce(new Oa(Q,0),P);mt.position.set(F+nt,M+Q-.2,J+ct),mt.rotation.set(Math.random(),Math.random(),Math.random()),mt.castShadow=!0,t.add(mt)},N=.32+Math.random()*.14,st=.2+Math.random()*.12,Z=.12+Math.random()*.12;G(N,(Math.random()-.5)*.15,(Math.random()-.5)*.15),G(st,(Math.random()-.5)*.25,(Math.random()-.5)*.25),G(Z,(Math.random()-.5)*.28,(Math.random()-.5)*.28)}}return t.userData.treeGroups=l,t}function x_(){let i=document.querySelector("#mode-select-overlay .mode-select-instructions");i&&console.log(i.textContent.trim());let t=f_(),e=document.getElementById("canvas-wrap"),n=new Ca;n.background=new ge(1711652),n.fog=new Ra(1711652,30,90);let s=t.w*Se/2,r=t.h*Se/2,a=new Un(50,e.clientWidth/e.clientHeight,.1,200),o=17,l=new B(12,38,16).normalize().multiplyScalar(o),c=new B,h=new B,f=new ii(new B(0,1,0),0),u=new B,d=new B,x=!1,v=!1,m=!1,p=null,M=5,y=.004,T=-Math.PI*.4,O=Math.PI*.4,I=new B,L={x:0,y:0},$=1,b=40,A=.08,U=.15,F=null,J=new za(16777215,.45);n.add(J);let P=new Ha(16774630,1.1);P.position.set(30,50,20),P.castShadow=!0,P.shadow.mapSize.width=2048,P.shadow.mapSize.height=2048,P.shadow.camera.near=1,P.shadow.camera.far=120,P.shadow.camera.left=-50,P.shadow.camera.right=50,P.shadow.camera.top=50,P.shadow.camera.bottom=-50,n.add(P);let G=__(t);n.add(G);let N=[],st=1,Z=new Map,Q=mu(64),nt=fu(t),ct=pu(t);function mt(_,g){let C=(On+t.height[g][_]*.35)/2+On/2;return new B(_*Se-nt+Se/2,C,g*Se-ct+Se/2)}function tt(_,g){let w=(_>>16&255)/255,C=(_>>8&255)/255,H=(_&255)/255,z=1+(Math.random()-.5)*g;return new ge(Math.min(1,w*z),Math.min(1,C*z),Math.min(1,H*z))}let dt=.62;function Et(_,g){g=g??dt;let w=_ instanceof ge?_:new ge(_);return new ge(Math.max(0,w.r*g),Math.max(0,w.g*g),Math.max(0,w.b*g))}function zt(_,g,w){let C=$a[g]||$a.knight,H=Et(tt(C.primary,.08)),z=Et(tt(C.secondary,.08)),V=Oe[g]&&Oe[g].gender||"male",k=w??4006676,X=Et(tt(C.skin!=null?C.skin:15250592,.06)),it=Et(tt(k,.08)),ht=()=>(Math.random()-.5)*.08,Tt=()=>(Math.random()-.5)*.04,Pt=new Sn({color:H,metalness:Math.max(0,.25+Tt()),roughness:Math.max(.3,Math.min(1,.5+ht()))});Pt.bumpMap=Q,Pt.bumpScale=.1;let rt=new Sn({color:z,metalness:Math.max(0,.2+Tt()),roughness:Math.max(.3,Math.min(1,.55+ht()))});rt.bumpMap=Q,rt.bumpScale=.1;let Vt=new Sn({color:H,metalness:Math.max(0,.25+Tt()),roughness:Math.max(.3,Math.min(1,.5+ht()))});Vt.bumpMap=Q,Vt.bumpScale=.1;let Ce=new Sn({color:X,metalness:.1,roughness:Math.max(.5,Math.min(1,.7+ht()))});Ce.bumpMap=Q,Ce.bumpScale=.05;let De=new Kn,Ae=.28,Je=.08,en=.08,hn=new ce(new Cn(Je,Ae,en),rt);hn.position.set(-.06,Ae/2,0),hn.castShadow=!0,De.add(hn);let on=new ce(new Cn(Je,Ae,en),rt);on.position.set(.06,Ae/2,0),on.castShadow=!0,De.add(on);let ke=.28,Le=.2,We=.12,Me=new ce(new Cn(Le,ke,We),Pt);Me.position.set(0,Ae+ke/2,0),Me.castShadow=!0,De.add(Me);let nn=.06,bn=.22,vn=.06,sn=new ce(new Cn(nn,bn,vn),Vt);sn.position.set(-(Le/2+nn/2),Ae+ke-.08,0),sn.castShadow=!0,De.add(sn);let Gn=new ce(new Cn(nn,bn,vn),Vt);if(Gn.position.set(Le/2+nn/2,Ae+ke-.08,0),Gn.castShadow=!0,De.add(Gn),C.cape!=null){let re=Le*1.35,Ft=Ae+ke*.15,Gt=new Si(re,Ft),ye=new Sn({color:Et(tt(C.cape,.08)),metalness:.15,roughness:Math.max(.5,Math.min(1,.8+ht())),side:ln});ye.bumpMap=Q,ye.bumpScale=.12;let En=new ce(Gt,ye);En.position.set(0,Ae+Ft/2-.02,-We/2-.02),En.rotation.y=Math.PI,En.castShadow=!0,De.add(En)}let at=.1,pt=new ce(new qi(at,12,10),Ce);pt.position.set(0,Ae+ke+at,0),pt.castShadow=!0,De.add(pt);let St=new rn({color:1710638}),lt=new ce(new Cn(.032,.004,.004),St);lt.position.set(-.032,.028,at*.92),pt.add(lt);let ut=new ce(new Cn(.032,.004,.004),St);ut.position.set(.032,.028,at*.92),pt.add(ut);let yt=new rn({color:2957087}),vt=new ce(new Cn(.045,.012,.008),yt);vt.position.set(0,-.028,at*.92),pt.add(vt);let wt=new Sn({color:it,metalness:.05,roughness:Math.max(.6,Math.min(1,.85+ht()))});if(wt.bumpMap=Q,wt.bumpScale=.15,V==="female"){let re=new ce(new qi(at*.85,10,8,0,Math.PI*2,0,Math.PI*.45),wt);re.position.set(0,at*.35,-at*.2),re.castShadow=!0,pt.add(re);let Ft=new ce(new Cn(at*1.1,at*2.2,at*.5),wt);Ft.position.set(0,-at*.6,-at*.95),Ft.castShadow=!0,pt.add(Ft)}else{let re=new ce(new qi(at*.82,10,8,0,Math.PI*2,0,Math.PI*.35),wt);re.position.set(0,at*.5,-at*.15),re.castShadow=!0,pt.add(re)}return De.userData.leftLeg=hn,De.userData.rightLeg=on,De.userData.leftArm=sn,De.userData.rightArm=Gn,De}function Xt(_,g){let w=_.userData;if(!w.leftLeg)return;let C=g*Math.PI*2,H=.35,z=.28;w.leftLeg.rotation.x=Math.sin(C)*H,w.rightLeg.rotation.x=Math.sin(C+Math.PI)*H,w.leftArm.rotation.y=Math.sin(C+Math.PI)*z,w.rightArm.rotation.y=Math.sin(C)*z}function ne(_){let g=_.userData;g.leftLeg&&(g.leftLeg.rotation.x=0,g.rightLeg.rotation.x=0,g.leftArm.rotation.y=0,g.rightArm.rotation.y=0)}function Jt(_){let g=zt(_.player,_.class,_.hairColor);g.position.copy(mt(_.x,_.y)),g.castShadow=!0,g.userData.unitId=_.id;let w=.28,C=.28,H=.12,z=.18,V=.04,k=new Si(z,V),X=new rn({color:6037528,side:ln,depthTest:!0,depthWrite:!1}),it=new ce(k,X);it.position.set(0,w+C/2,H/2+.02),it.rotation.x=-Math.PI/2,it.rotation.z=Math.PI/4,it.visible=_.maxHp>0&&_.hp<_.maxHp&&_.hp>0,g.add(it),g.userData.slashMark=it,n.add(g),Z.set(_.id,g),Y(g,_.maxHp>0&&_.hp/_.maxHp<.35)}function Lt(_){let g=Z.get(_.id);!g||!g.userData.slashMark||(g.userData.slashMark.visible=_.maxHp>0&&_.hp<_.maxHp&&_.hp>0)}let ae=.35;function Y(_,g){if(_)if(g){_.rotation.x=.35,_.scale.setScalar(.96);let w=_.userData;w&&w.leftArm&&w.rightArm&&(w.leftArm.rotation.y=.2,w.rightArm.rotation.y=.2),_.traverse(C=>{C.isMesh&&C.material&&C.material.color&&(C.userData.originalColor||(C.userData.originalColor=C.material.color.clone()),C.material.color.copy(C.userData.originalColor).multiplyScalar(.82))})}else{_.rotation.x=0,_.scale.setScalar(1);let w=_.userData;w&&w.leftArm&&w.rightArm&&(w.leftArm.rotation.y=0,w.rightArm.rotation.y=0),_.traverse(C=>{C.isMesh&&C.material&&C.userData.originalColor&&C.material.color.copy(C.userData.originalColor)})}}function Ve(_){if(_.level>=3)return;let g=_.maxHp>0?_.hp/_.maxHp:1;_.level+=1;let w=H=>Math.max(1,Math.ceil(H*1.1)),C=H=>Math.max(1,Math.ceil(H*1.1));_.maxHp=w(_.maxHp),_.maxMp=w(_.maxMp),_.hp=Math.max(1,Math.min(_.maxHp,Math.ceil(g*_.maxHp))),_.mp=Math.max(1,Math.min(_.maxMp,Math.ceil(g*_.maxMp))),_.str=C(_.str),_.agi=C(_.agi),_.vit=C(_.vit),_.dex=C(_.dex),_.luk=C(_.luk),_.int=C(_.int),_.range>2&&(_.range=C(_.range)),console.log("[LEVEL UP]",`${_.name} (${_.class}, P${_.player})`,`\u2192 Lv.${_.level}`,`| HP ${_.hp}/${_.maxHp} MP ${_.mp}/${_.maxMp} STR ${_.str} VIT ${_.vit}`),qt(_)}function qt(_){let g=Z.get(_.id),w=_.level===3?"levelup level3":_.level===2?"levelup level2":"levelup";if(Lu(_,w),!g)return;let C=performance.now();function H(z){Ye();let V=z-C,k=Math.min(1,V/_t),X=k<.5?1+.35*(k/.5):1+.35*(1-(k-.5)/.5);g.scale.setScalar(X),k<1?requestAnimationFrame(H):g.scale.setScalar(1)}requestAnimationFrame(H)}let jt=300,Dt=280,Fe=.45,ue=160,R=280,S=350,K=500,_t=600,gt=!1,xt=new B,Yt=new B,At=new B,Ht=new B;function ie(_=!1){let g=null;if(le==="playing"&&Wt.length>0){let z=Wt[Nt];g=N.find(V=>V.id===z&&V.hp>0)}if(g||(g=N.find(z=>z.player===ot&&z.hp>0)),!g)return;let w=a.position.distanceTo(c);if(w<.1&&(w=o),h.copy(a.position).sub(c).normalize(),h.lengthSq()<.01&&h.copy(l).normalize(),At.copy(mt(g.x,g.y)),Ht.copy(At).add(h.clone().multiplyScalar(w)),_||gt){c.copy(At),a.position.copy(Ht),a.lookAt(c),Ye();return}gt=!0,xt.copy(c),Yt.copy(a.position);let C=performance.now();function H(z){Ye();let V=Math.min(1,(z-C)/jt),k=V*(2-V);c.lerpVectors(xt,At,k),a.position.lerpVectors(Yt,Ht,k),a.lookAt(c),V<1?requestAnimationFrame(H):gt=!1}requestAnimationFrame(H)}let oe=0,ot=1,le="draft",ee="pvp",he="balanced",$t=new Set(Ya),Ut=0,Zt=null,Re=new Set,Wt=[],Nt=0,ft=null,D=new Map,Rt=null;function Ct(_){if(!_||_.hp<=0)return;Rt=_.id;let g=document.getElementById("unit-preview-card"),w=document.getElementById("unit-preview-image"),C=document.getElementById("unit-preview-name"),H=document.getElementById("unit-preview-meta"),z=document.getElementById("unit-preview-stats");g.classList.remove("player-1","player-2"),g.classList.add(_.player===1?"player-1":"player-2"),g.classList.toggle("level-2",_.level>=2&&_.level<3),g.classList.toggle("level-3",_.level>=3),w.src=Ar[_.class]||"",w.alt=_.name,C.textContent=_.name,H.textContent=`Lv.${_.level} ${_.class} \u2014 Player ${_.player}`,z.innerHTML=[["HP",`${_.hp}/${_.maxHp}`],["MP",`${_.mp}/${_.maxMp}`],["STR",Mt(_,"str")],["AGI",Mt(_,"agi")],["VIT",Mt(_,"vit")],["DEX",Mt(_,"dex")],["LUK",Mt(_,"luk")],["INT",Mt(_,"int")]].map(([k,X])=>`<span class="stat-label">${k}</span><span class="stat-val${k==="HP"?" stat-val-hp":""}">${X}</span>`).join("");let V=_.maxHp>0&&_.hp/_.maxHp<.3;g.classList.toggle("low-hp",V),g.style.display="block"}function Qt(){Rt=null;let _=document.getElementById("unit-preview-card");_.classList.remove("low-hp","level-2","level-3"),_.style.display="none"}let kt=!1,Te=!1,Pe=!1,Ie=null,be=!1,_e=!1,qe=!1,Ze=[],Pn=new Kn;n.add(Pn);let kn=[],oi=!0,$i=0,Zi=0;function Ye(){oi=!0,$i=performance.now()}let bi=new Kn;n.add(bi);let js=[],Ja=Se,ja=.02,E=3368703,W=13382451;function j(_,g){let w=_/2,C=w-g,H=new Sr;H.moveTo(-w,-w),H.lineTo(w,-w),H.lineTo(w,w),H.lineTo(-w,w),H.lineTo(-w,-w);let z=new $s;return z.moveTo(-C,-C),z.lineTo(C,-C),z.lineTo(C,C),z.lineTo(-C,C),z.lineTo(-C,-C),H.holes.push(z),new Fa(H)}let et=j(Ja,ja);function q(_=null){let g=N.filter(w=>w.hp>0&&w.id!==_).map(w=>`${w.id},${w.x},${w.y},${w.player}`).sort().join("|");if(!(q._lastSig===g&&q._lastExclude===_)){for(q._lastSig=g,q._lastExclude=_,js.forEach(w=>w.dispose()),js.length=0;bi.children.length;){let w=bi.children[0];bi.remove(w)}N.filter(w=>w.hp>0&&w.id!==_).forEach(w=>{let C=w.x,H=w.y,V=(On+t.height[H][C]*.35)/2+On/2,k=C*Se-nt+Se/2,X=H*Se-ct+Se/2,it=V+.02,ht=w.player===1?E:W,Tt=new rn({color:ht,side:ln}),Pt=new ce(et,Tt);Pt.rotation.x=-Math.PI/2,Pt.position.set(k,it,X),bi.add(Pt),js.push(Tt)}),Ye()}}let It=1.15,Ot=(()=>{let _=new ce(new Xi(.1,.25,8),new rn({color:16768324}));return _.rotation.x=Math.PI,_.visible=!1,n.add(_),_})();function te(){if(le!=="playing"||Wt.length===0||qe){Ot.visible=!1,Ot.removeFromParent(),n.add(Ot);return}let _=Wt[Nt],g=N.find(C=>C.id===_);if(!g||g.hp<=0){Ot.visible=!1,Ot.removeFromParent(),n.add(Ot);return}let w=Z.get(_);if(!w){Ot.visible=!1;return}Ot.removeFromParent(),w.add(Ot),Ot.position.set(0,It,0),Ot.visible=!0}function de(_){let g=[[0,1],[0,-1],[1,0],[-1,0]],w=[];for(let[C,H]of g){let z=_.x+C,V=_.y+H;!Rr(t,z,V)||N.some(X=>X.id!==_.id&&X.x===z&&X.y===V&&X.hp>0)||w.push(Math.atan2(C,H))}return w}function ve(_){if(Ze.length===0)return _;if(Ze.length===1)return Ze[0];let g=Ze[0],w=Math.abs(me(_-g));for(let C=1;C<Ze.length;C++){let H=Math.abs(me(_-Ze[C]));H<w&&(w=H,g=Ze[C])}return g}function me(_){for(;_>Math.PI;)_-=2*Math.PI;for(;_<-Math.PI;)_+=2*Math.PI;return _}let xe=1.2,Ue=(()=>{let _=new ce(new Xi(.12,.35,8),new rn({color:4500223}));return _.rotation.x=-Math.PI/2,_.visible=!1,n.add(_),_})();function In(_,g){if(!qe||Wt.length===0||Ze.length===0)return;let w=Wt[Nt],C=N.find(Tt=>Tt.id===w),H=Z.get(w);if(!C||!H)return;Dr(_,g),wi.setFromCamera(Ai,a);let z=wi.intersectObjects(G.children,!0);if(z.length===0)return;let V=null;for(let Tt of z){let Pt=Tt.object;for(;Pt&&(Pt.userData.gx==null||Pt.userData.gy==null);)Pt=Pt.parent;if(Pt&&Pt.userData.gx!=null){V=Tt.point;break}}if(!V)return;let k=mt(C.x,C.y),X=V.x-k.x,it=V.z-k.z;if(X*X+it*it<1e-6)return;let ht=Math.atan2(X,it);H.rotation.y=ve(ht)}function cn(){if(Wt.length===0)return;let _=Wt[Nt],g=N.find(H=>H.id===_),w=Z.get(_);if(!g||!w)return;Ze=[[0,1],[0,-1],[1,0],[-1,0]].map(([H,z])=>Math.atan2(H,z)),Ue.removeFromParent(),w.add(Ue),Ue.position.set(0,xe,0),Ue.rotation.x=-Math.PI/2,Ue.rotation.y=0,Ue.rotation.z=Math.PI,Ue.visible=!0,w.rotation.y=Ze[0]}function Qn(){Ue.visible=!1,Ue.removeFromParent(),n.add(Ue)}let ze=(()=>{let _=qa,g=[1];for(let w=0;w<Math.floor((_-1)/2);w++)g.push(2,2,1,1);return _%2===1?g.push(2):(g.push(2,2),g.push(1)),g})();function se(){return ze[Ut]}function ds(){let _=se(),g=0;for(let w=0;w<Ut;w++)ze[w]===_&&g++;return g+1}function He(){le="draft",Ut=0,$t=new Set(Ya),Zt=null,Re.clear(),tn(),fs(),document.getElementById("turn-menu").style.display="none",document.getElementById("draft-panel").style.display="flex"}function hi(){for(le="playing",oe=0,Wt=N.slice().sort((w,C)=>C.agi!==w.agi?C.agi-w.agi:C.dex-w.dex).map(w=>w.id),Nt=0;Nt<Wt.length&&N.find(w=>w.id===Wt[Nt]).hp<=0;)Nt++;Nt>=Wt.length&&(Nt=0);let _=N.find(w=>w.id===Wt[Nt]);ot=_?_.player:1,be=!1,_e=!1,ft=Wt[Nt],document.getElementById("draft-panel").style.display="none",document.getElementById("turn-menu").style.display="flex";let g=document.getElementById("draft-placement-card");g&&(g.style.display="none",g.innerHTML=""),tn(),q(),fe(),te(),ie(!0)}function fs(){let _=document.getElementById("draft-panel"),g=document.getElementById("draft-title"),w=document.getElementById("draft-classes"),C=document.getElementById("draft-message"),H=document.getElementById("turn-player"),z=document.getElementById("draft-placement-card");if(Zt){_.style.display="none",H.textContent=`Draft: Player ${se()} \u2014 place ${Oe[Zt].name}`;let k=se();z.style.display="flex",z.classList.remove("player-1","player-2"),z.classList.add("player-"+k),z.style.left=k===1?"24px":"",z.style.right=k===2?"24px":"";let X=[...N.filter(Tt=>Tt.player===k).map(Tt=>Tt.class),Zt],it=(Tt,Pt)=>{let rt=Oe[Tt];return`
        <div class="draft-class-card${Pt?" draft-class-card-current":""}">
          <img class="draft-class-card-image" src="${Ar[Tt]||""}" alt="${rt.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="draft-class-card-body">
            <div class="draft-class-card-name">${rt.name}</div>
            <div class="draft-class-card-stats">
              <span class="draft-stat-label">HP</span><span class="draft-stat-value">${rt.hp}</span>
              <span class="draft-stat-label">MP</span><span class="draft-stat-value">${rt.mp}</span>
              <span class="draft-stat-label">STR</span><span class="draft-stat-value">${rt.str}</span>
              <span class="draft-stat-label">AGI</span><span class="draft-stat-value">${rt.agi}</span>
              <span class="draft-stat-label">VIT</span><span class="draft-stat-value">${rt.vit}</span>
              <span class="draft-stat-label">DEX</span><span class="draft-stat-value">${rt.dex}</span>
              <span class="draft-stat-label">LUK</span><span class="draft-stat-value">${rt.luk}</span>
              <span class="draft-stat-label">INT</span><span class="draft-stat-value">${rt.int}</span>
              <span class="draft-stat-label">Range</span><span class="draft-stat-value">${rt.range}</span>
            </div>
          </div>
        </div>
      `},ht=3;if(X.length>ht){z.classList.add("draft-placement-cols");let Tt=[];for(let rt=0;rt<X.length;rt+=ht)Tt.push(X.slice(rt,rt+ht));let Pt=X.length-1;z.innerHTML=Tt.map((rt,Vt)=>{let Ce=Vt===Tt.length-1,De=rt.map((Ae,Je)=>{let hn=Vt*ht+Je===Pt;return it(Ae,hn)}).join("");return`<div class="draft-placement-col${Ce?" draft-placement-col-current":""}">${De}</div>`}).join("")}else z.classList.remove("draft-placement-cols"),z.innerHTML=X.map((Tt,Pt)=>{let rt=Pt===X.length-1;return it(Tt,rt)}).join("");ee==="pvcpu"&&se()===2&&setTimeout(tr,500),ee==="cvcpu"&&setTimeout(tr,500);return}z.style.display="none",z.innerHTML="",le==="draft"&&(_.style.display="flex");let V=se();g.textContent=`Player ${V}: Pick a class (${ds()}/${qa})`,C.textContent="",w.innerHTML="",H.textContent=`Draft: Player ${V} \u2014 pick a class`,d_([...Ya]).forEach(k=>{let X=$t.has(k),it=Oe[k],ht=document.createElement("button");ht.type="button",ht.className="draft-class-card"+(X?"":" draft-class-card-selected"),ht.disabled=!X,ht.innerHTML=`
          <img class="draft-class-card-image" src="${Ar[k]||""}" alt="${it.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="draft-class-card-body">
            <div class="draft-class-card-name">${it.name}</div>
            <div class="draft-class-card-stats">
              <span class="draft-stat-label">HP</span><span class="draft-stat-value">${it.hp}</span>
              <span class="draft-stat-label">MP</span><span class="draft-stat-value">${it.mp}</span>
              <span class="draft-stat-label">STR</span><span class="draft-stat-value">${it.str}</span>
              <span class="draft-stat-label">AGI</span><span class="draft-stat-value">${it.agi}</span>
              <span class="draft-stat-label">VIT</span><span class="draft-stat-value">${it.vit}</span>
              <span class="draft-stat-label">DEX</span><span class="draft-stat-value">${it.dex}</span>
              <span class="draft-stat-label">LUK</span><span class="draft-stat-value">${it.luk}</span>
              <span class="draft-stat-label">INT</span><span class="draft-stat-value">${it.int}</span>
              <span class="draft-stat-label">Range</span><span class="draft-stat-value">${it.range}</span>
            </div>
          </div>
        `,X&&ht.addEventListener("click",()=>Ei(k)),w.appendChild(ht)}),ee==="pvcpu"&&se()===2&&setTimeout(tr,500),ee==="cvcpu"&&setTimeout(tr,500)}function Ei(_){if(!$t.has(_)||Zt)return;Zt=_;let g=se(),w=new Set(N.map(z=>z.y*t.w+z.x)),C=p_(t,g,w),H=hu(t,C);Re=new Set(H.map(z=>z.gy*t.w+z.gx)),bu(H),fs()}function ps(_,g){if(!Zt)return;let w=se(),C=g*t.w+_;if(!Re.has(C))return;let H=Oe[Zt],z={id:st++,player:w,x:_,y:g,level:1,name:H.name,class:Zt,hairColor:($a[Zt]||$a.knight).hair,hp:H.hp,maxHp:H.maxHp,mp:H.mp,maxMp:H.maxMp,str:H.str,agi:H.agi,vit:H.vit,dex:H.dex,luk:H.luk,int:H.int,range:H.range};N.push(z),Jt(z);let V=Z.get(z.id);V&&(V.rotation.y=z.player===1?Math.PI:0),$t.delete(Zt),Zt=null,Re.clear(),tn();let k=document.getElementById("draft-placement-card");if(k&&(k.style.display="none",k.innerHTML=""),Ut++,Ut>=2*qa){hi();return}let X=se(),it=ds(),ht=document.getElementById("draft-panel"),Tt=document.getElementById("draft-title"),Pt=document.getElementById("draft-message"),rt=document.getElementById("draft-classes"),Vt=document.getElementById("turn-player");ht&&Tt&&rt&&Vt&&(ht.style.display="flex",Tt.textContent=`Player ${X}: Pick a class (${it}/${qa})`,Pt&&(Pt.textContent="Get ready\u2026"),rt.innerHTML="",Vt.textContent=`Draft: Player ${X} \u2014 pick a class`),setTimeout(fs,1500)}function fe(){fe._pending||(fe._pending=!0,requestAnimationFrame(()=>{fe._pending=!1,ui()}))}function ui(){let _=fe._cache||(fe._cache={}),g=_.turnEl||(_.turnEl=document.getElementById("turn-player")),w=_.menuLabel||(_.menuLabel=document.getElementById("menu-label")),C=_.turnMenu||(_.turnMenu=document.getElementById("turn-menu")),H=_.unitInfo||(_.unitInfo=document.getElementById("unit-info")),z=_.unitNameEl||(_.unitNameEl=document.getElementById("unit-name")),V=_.unitLevelClassEl||(_.unitLevelClassEl=document.getElementById("unit-level-class")),k=_.unitStatsEl||(_.unitStatsEl=document.getElementById("unit-stats")),X=_.unitClassImageEl||(_.unitClassImageEl=document.getElementById("unit-class-image"));if(le==="playing"&&N.forEach(rt=>{if(rt.hp<=0)return;let Vt=Z.get(rt.id);Vt&&Y(Vt,rt.maxHp>0&&rt.hp/rt.maxHp<ae)}),C.classList.remove("player-1","player-2"),C.classList.add(ot===1?"player-1":"player-2"),C.classList.toggle("level-2",!1),C.classList.toggle("level-3",!1),le==="playing"&&Wt.length>0){let rt=Wt[Nt];N.find(Ce=>Ce.id===rt&&Ce.hp>0)&&(ft==null||!N.find(Ce=>Ce.id===ft&&Ce.hp>0))&&(ft=rt)}if(ft!=null){let rt=N.find(Vt=>Vt.id===ft);if(rt&&rt.hp>0){H.classList.remove("no-unit");let Vt=rt.maxHp>0&&rt.hp/rt.maxHp<.25;C.classList.toggle("low-hp",Vt),C.classList.toggle("level-2",rt.level>=2&&rt.level<3),C.classList.toggle("level-3",rt.level>=3),z.textContent=rt.name,V.textContent=`Lv.${rt.level} ${rt.class}`,X.src=Ar[rt.class]||"",X.alt=rt.name,k.innerHTML=[["HP",`${rt.hp}/${rt.maxHp}`],["MP",`${rt.mp}/${rt.maxMp}`],["STR",Mt(rt,"str")],["AGI",Mt(rt,"agi")],["VIT",Mt(rt,"vit")],["DEX",Mt(rt,"dex")],["LUK",Mt(rt,"luk")],["INT",Mt(rt,"int")]].map(([Ce,De])=>`<span>${Ce}</span><span class="stat-val${Ce==="HP"?" stat-val-hp":""}">${De}</span>`).join("")}else C.classList.remove("low-hp","level-2","level-3"),H.classList.add("no-unit"),z.textContent="\u2014 Select a unit \u2014",V.textContent="",k.textContent="",X.src="",X.alt=""}else C.classList.remove("low-hp","level-2","level-3"),H.classList.add("no-unit"),z.textContent="\u2014 Select a unit \u2014",V.textContent="",k.textContent="",X.src="",X.alt="";if(ft!=null)g.textContent=`Player ${ot} \u2014 Unit ${z.innerHTML} active`;else{let rt=Wt.length?N.find(Vt=>Vt.id===Wt[Nt]):null;g.textContent=rt?`${rt.name} (Player ${ot})`:`Player ${ot}`}w.textContent=`Player ${ot}`;let it=_.btnAttack||(_.btnAttack=document.getElementById("btn-attack")),ht=_.btnSkill||(_.btnSkill=document.getElementById("btn-skill")),Tt=_.btnSpell||(_.btnSpell=document.getElementById("btn-spell")),Pt=_.btnEnd||(_.btnEnd=document.getElementById("btn-end"));if(ee==="cvcpu"&&le==="playing")it.disabled=!0,ht.disabled=!0,Tt.disabled=!0,Pt&&(Pt.disabled=!0),g.textContent=`Player ${ot} (CPU)`;else if(qe)it.disabled=!0,ht.disabled=!0,Tt.disabled=!0,g.textContent="Click on map to choose facing direction";else if(le==="playing"){it.disabled=_e;let rt=Wt.length?Wt[Nt]:null,Vt=rt?N.find(Ae=>Ae.id===rt&&Ae.hp>0):null,Ce=ee!=="cvcpu"&&(ee!=="pvcpu"||ot===1),De=Ce&&Vt&&!_e?Ir(Vt):[];ht.disabled=_e||!Ce||De.length===0,Tt.disabled=!1,Pt&&(Pt.disabled=!1)}if(le==="playing"){let rt=Math.min(oe+1,hs);g.textContent=(g.textContent||"")+` \u2014 Turn ${rt}/${hs}`;let Vt=_.turnsLeftEl||(_.turnsLeftEl=document.getElementById("turns-left")),Ce=_.turnsLeftValueEl||(_.turnsLeftValueEl=document.getElementById("turns-left-value"));if(Vt&&Ce){Vt.style.display="";let De=Math.max(0,hs-oe);Ce.textContent=String(De),Vt.classList.toggle("turns-left-low",De<=10)}}else{let rt=_.turnsLeftEl||(_.turnsLeftEl=document.getElementById("turns-left"));rt&&(rt.style.display="none")}le==="playing"&&eo(ot)&&!kt&&setTimeout(an,700)}function Ge(){Ye(),Qt(),Te=!1,Pe=!1,Ie=null,qe=!1,Ze=[],Qn(),tn();let _=Wt.length;if(_===0)return;let g=Wt[Nt],w=N.find(V=>V.id===g);if(w&&w.tempDebuff&&w.tempDebuff.duration--,w&&w.tempDebuff&&w.tempDebuff.duration<=0&&(w.tempDebuff=void 0),w&&w.tempBuff&&w.tempBuff.duration--,w&&w.tempBuff&&w.tempBuff.duration<=0&&(w.tempBuff=void 0),w&&w.hp>0){let V=Math.ceil(Mt(w,"int")*.15);w.mp=Math.min(w.maxMp,w.mp+V)}if(w&&w.hp>0){let V=w.x,k=w.y;t.type[k][V]===Kt.CENTER&&w.level===1&&Ve(w);let X=w.player===1?Kt.BASE_TOP:Kt.BASE_BOTTOM;t.type[k][V]===X&&w.level===2&&Ve(w)}if(oe++,oe>=hs){Du();return}let C=(Nt+1)%_,H=0;for(;H<_;){let V=Wt[C],k=N.find(X=>X.id===V);if(k&&k.hp>0)break;C=(C+1)%_,H++}Nt=C;let z=N.find(V=>V.id===Wt[Nt]);ot=z?z.player:1,be=!1,_e=!1,ft=Wt[Nt],fe(),te(),ie()}document.getElementById("btn-attack").addEventListener("click",()=>{if(kt||_e||le!=="playing"||Wt.length===0)return;Qt();let _=Wt[Nt],g=N.find(H=>H.id===_);if(!g||g.hp<=0)return;let w=g.range!=null?g.range:1;ft=_,Te=!0;let C=uu(t,g.x,g.y,w);D=new Map,C.forEach((H,z)=>{let V=z%t.w,k=Math.floor(z/t.w);us(t,g.x,g.y,V,k)&&D.set(z,H)}),Eu(D),fe()}),document.getElementById("btn-skill").addEventListener("click",_=>{if(_.preventDefault(),_.stopPropagation(),kt||_e)return;let g=Wt[Nt],w=g?N.find(k=>k.id===g&&k.hp>0):null;if(!w||w.player!==ot)return;let C=document.getElementById("skill-list-overlay"),H=document.getElementById("btn-skill");if(!H)return;if(C&&C.style.display==="block"){C.style.display="none";return}let z=Ir(w),V=H.getBoundingClientRect();C||(C=document.createElement("div"),C.id="skill-list-overlay",C.className="skill-list-overlay",C.setAttribute("aria-hidden","true"),document.body.appendChild(C)),C.style.left=`${V.left}px`,C.style.top=`${V.top-4}px`,C.style.transform="translateY(-100%)",C.style.right="auto",C.style.bottom="auto",C.style.display="none",z.length===0?C.innerHTML='<div class="skill-option" style="cursor:default;color:#8b949e;">No skills available</div>':(C.innerHTML=z.map((k,X)=>`<button type="button" class="skill-option" data-skill-index="${X}" ${k.disabled?"disabled":""}>
          <span class="skill-name">${k.name}</span> <span class="skill-meta">${k.cost} MP \xB7 Lv.${k.level}</span><br/>
          <span class="skill-meta">${k.description}</span>
        </button>`).join(""),C.querySelectorAll(".skill-option").forEach((k,X)=>{k.addEventListener("click",it=>{it.preventDefault(),it.stopPropagation();let ht=z[X];if(Ie=ht,C.style.display="none",C.setAttribute("aria-hidden","true"),ht.target==="self"){if(w.mp<ht.cost)return;w.mp-=ht.cost,_e=!0,Pr(w,w,ht,{showFloatingCombatText:Vn,handleUnitDeath:mn,updateUnitSlashVisibility:Lt,updateTurnUI:fe},()=>{tn(),Pe=!1,Ie=null,_s=new Set,be?Ge():fe()}),fe();return}if(ht.target==="ally"&&Lr(w,ht,N).filter(rt=>rt.targetUnit&&rt.targetUnit.id!==w.id).length===0&&w.mp>=ht.cost){w.mp-=ht.cost,_e=!0,Pr(w,w,ht,{showFloatingCombatText:Vn,handleUnitDeath:mn,updateUnitSlashVisibility:Lt,updateTurnUI:fe},()=>{tn(),Pe=!1,Ie=null,_s=new Set,be?Ge():fe()}),fe();return}Pe=!0,Te=!1,Su(w,ht),fe()})})),requestAnimationFrame(()=>{C.style.display="block",C.style.visibility="visible",C.setAttribute("aria-hidden","false")})}),document.addEventListener("click",_=>{let g=document.getElementById("skill-list-overlay"),w=document.getElementById("btn-skill"),C=document.querySelector(".skill-wrap");!g||g.style.display!=="block"||C&&C.contains(_.target)||g.contains(_.target)||(g.style.display="none",g.setAttribute("aria-hidden","true"))}),document.getElementById("btn-spell").addEventListener("click",()=>{}),document.getElementById("btn-end").addEventListener("click",()=>{if(kt||qe||le!=="playing"||Wt.length===0)return;let _=Wt[Nt],g=N.find(C=>C.id===_);if(!g||g.hp<=0)return;qe=!0,ft=null,Te=!1,D=new Map,tn(),cn(),te();let w=document.getElementById("turn-player");w.textContent="Click on map to choose facing direction",fe()}),c.set(0,8,0),a.position.copy(c).add(l),a.lookAt(c);let yn=document.getElementById("mode-select-overlay"),ms=document.getElementById("mode-pvp"),Cr=document.getElementById("mode-pvcpu"),gs=document.getElementById("mode-cvcpu"),Qs=document.getElementById("ai-draft-preference"),Wl=document.getElementById("mode-select-ai-draft");Wl&&(Wl.style.display=lu?"":"none"),Qs&&(h_.forEach(_=>{let g=document.createElement("option");g.value=_.value,g.textContent=_.label,Qs.appendChild(g)}),Qs.value=he,Qs.addEventListener("change",()=>{he=Qs.value}));let Ti=new Audio;Ti.loop=!0,Ti.volume=.3,Ti.preload="auto";let Qa=window.location.href.replace(/[^/]*$/,""),Xl=typeof window.TACTICS_BGM_URL<"u"?window.TACTICS_BGM_URL:Qa+(Qa.includes("/src/")?"../assets/music/tavern.mp3":"assets/music/tavern.mp3");Ti.src=Xl,Ti.addEventListener("error",()=>{let _=Qa+"assets/music/tavern.mp3";_!==Xl&&(Ti.src=_)});function to(){Ti.paused&&Ti.play().catch(()=>{})}yn&&ms&&Cr?(ms.addEventListener("click",()=>{to(),ee="pvp",yn.classList.add("hidden"),He()}),Cr.addEventListener("click",()=>{to(),ee="pvcpu",yn.classList.add("hidden"),He()}),gs&&(lu?gs.addEventListener("click",()=>{to(),ee="cvcpu",yn.classList.add("hidden"),He()}):gs.style.display="none")):He();function eo(_){return ee==="pvcpu"&&_===2||ee==="cvcpu"}function gu(){let _=Ya.filter(z=>$t.has(z));if(_.length===0)return null;let g=he||"balanced";if(g==="random")return _[Math.floor(Math.random()*_.length)];if(g==="custom")return u_.filter(V=>$t.has(V))[0]??_[0]??null;let w=["hp","maxHp","mp","str","agi","vit","dex","luk","int"];function C(z){let V=Oe[z];if(!V)return 1/0;let k=w.map(it=>V[it]??0),X=k.reduce((it,ht)=>it+ht,0)/k.length;return k.reduce((it,ht)=>it+(ht-X)**2,0)/k.length}return g==="tanky"?[..._].sort((V,k)=>{let X=Oe[V]?.hp??0,it=Oe[k]?.hp??0;return it!==X?it-X:(Oe[k]?.vit??0)-(Oe[V]?.vit??0)})[0]??null:g==="aggressive"?[..._].sort((V,k)=>{let X=Oe[V]?.str??0,it=Oe[k]?.str??0;return it!==X?it-X:(Oe[k]?.agi??0)-(Oe[V]?.agi??0)})[0]??null:g==="scout"?[..._].sort((V,k)=>{let X=Oe[V]?.agi??0,it=Oe[k]?.agi??0;return it!==X?it-X:(Oe[k]?.dex??0)-(Oe[V]?.dex??0)})[0]??null:g==="ranged"?[..._].sort((V,k)=>{let X=Oe[V]?.range??0,it=Oe[k]?.range??0;return it!==X?it-X:(Oe[k]?.dex??0)-(Oe[V]?.dex??0)})[0]??null:g==="caster"?[..._].sort((V,k)=>{let X=Oe[V]?.int??0,it=Oe[k]?.int??0;return it!==X?it-X:(Oe[k]?.mp??0)-(Oe[V]?.mp??0)})[0]??null:[..._].sort((z,V)=>{let k=Oe[z]?.hp??0,X=Oe[V]?.hp??0;return X!==k?X-k:C(z)-C(V)})[0]??null}function tr(){if(le!=="draft"||!eo(se()))return;if(!Zt){let w=gu();w&&Ei(w),setTimeout(tr,500);return}let _=Array.from(Re).map(w=>({gx:w%t.w,gy:Math.floor(w/t.w)})),g=hu(t,_);if(g.length>0){let{gx:w,gy:C}=g[0];ps(w,C)}}function ql(){let _=[];for(let g=0;g<t.h;g++)for(let w=0;w<t.w;w++)t.type[g][w]===Kt.CENTER&&_.push({gx:w,gy:g});return _}function _u(_){let g=[],w=_===1?Kt.BASE_TOP:Kt.BASE_BOTTOM;for(let C=0;C<t.h;C++)for(let H=0;H<t.w;H++)t.type[C][H]===w&&g.push({gx:H,gy:C});return g}function qn(_,g,w,C){return Math.abs(_-w)+Math.abs(g-C)}function xu(_){let g=_.range!=null?_.range:1,w=[];for(let C of N){if(C.hp<=0||C.player===_.player)continue;let H=qn(_.x,_.y,C.x,C.y);H<=g&&H>0&&us(t,_.x,_.y,C.x,C.y)&&w.push({target:C,dist:H})}return w}function yu(_){let g=N.filter(w=>w.hp>0&&w.player===_.player&&w.id!==_.id);for(let w of g){let C=N.filter(H=>H.hp>0&&H.player!==_.player);for(let H of C){let z=H.range!=null?H.range:1,V=qn(H.x,H.y,w.x,w.y);if(V<=z&&V>0&&us(t,H.x,H.y,w.x,w.y))return!0}}return!1}function Ke(_,g,w,C){let H=_.x,z=_.y,V=Yi(t,_.x,_.y,g,w,N,_);if(!V||V.length<=1){C&&C();return}ft=null,tn(),kt=!0,q(_.id),Ye();let k=Z.get(_.id),X=1;function it(){if(X>=V.length){_.x=V[V.length-1].x,_.y=V[V.length-1].y,kt=!1,ne(k),q(),D=new Map,be=!0,C&&C();return}let ht=V[X-1],Tt=V[X],Pt=mt(ht.x,ht.y).clone(),rt=mt(Tt.x,Tt.y).clone(),Vt=rt.x-Pt.x,Ce=rt.z-Pt.z;Vt*Vt+Ce*Ce>1e-6&&(k.rotation.y=Math.atan2(Vt,Ce));let De=performance.now();function Ae(Je){Ye();let en=Math.min(1,(Je-De)/ou),on=(ke=>ke*ke*(3-2*ke))(en);k.position.lerpVectors(Pt,rt,on),Xt(k,on),en<1?requestAnimationFrame(Ae):(X++,it())}requestAnimationFrame(Ae)}it()}function Yl(_,g){let w=Mt(g,"agi")*.7+Mt(g,"luk")*.3,H=Math.random()*Math.max(.001,w)<=Mt(_,"dex"),z=0;if(H){let Le=Mt(_,"str")*.7+Mt(_,"dex")*.2+Mt(_,"int")*.1-(Mt(g,"vit")*.3+Mt(g,"luk")*.2);z=Math.max(1,Math.floor(Le))}_e=!0,ft=null,Te=!1,tn(),console.log("[ATTACK]",`${_.name} (${_.class}, P${_.player})`,"\u2192",`${g.name} (${g.class}, P${g.player})`,H?`${z} dmg`:"MISS",`| ${g.name} HP ${g.hp} \u2192 ${Math.max(0,g.hp-z)}/${g.maxHp}`);let V=Z.get(_.id);if(!V||!V.userData.rightArm){H?(g.hp=Math.max(0,g.hp-z),Vn(g.x,g.y,String(z),!1),Lt(g),g.hp<=0&&mn(g)):Vn(g.x,g.y,"MISS",!0),setTimeout(be?()=>Ge():()=>fe(),400);return}let k=mt(_.x,_.y).clone(),X=mt(g.x,g.y).clone(),it=k.clone().lerp(X,.35),ht=X.x-k.x,Tt=X.z-k.z;if(ht*ht+Tt*Tt>1e-6&&(V.rotation.y=Math.atan2(ht,Tt)),(_.range!=null?_.range:1)>2){let yt=function(vt){Ye();let wt=vt-ut,re=Math.min(1,wt/R);if(Me.position.lerpVectors(St,lt,re),!Gn&&re>=1&&(Gn=!0,n.remove(Me),Le.dispose(),We.dispose(),H?(g.hp=Math.max(0,g.hp-z),Vn(g.x,g.y,String(z),!1),g.hp<=0&&(pt=!0),Z.get(g.id)?at=vt:pt&&(mn(g),pt=!1),Lt(g)):Vn(g.x,g.y,"MISS",!0)),at!=null&&H){let Ft=Z.get(g.id);if(Ft){let Gt=Math.min(1,(vt-at)/ue),ye=1-Gt;Ft.position.copy(bn).add(vn.clone().multiplyScalar(sn*ye)),Gt>=1&&(Ft.position.copy(bn),at=null,pt&&(mn(g),pt=!1))}else at=null,pt&&(mn(g),pt=!1)}if(re<1)requestAnimationFrame(yt);else{let Ft=at==null;Ft&&pt&&(mn(g),pt=!1),Ft?setTimeout(be?()=>Ge():()=>fe(),400):requestAnimationFrame(yt)}},Le=new Wi(.035,.035,.4,6),We=new rn({color:16763972}),Me=new ce(Le,We);Me.position.copy(k),Me.position.y+=.6;let nn=X.clone().sub(k).normalize();Me.quaternion.setFromUnitVectors(new B(0,1,0),nn),n.add(Me);let bn=mt(g.x,g.y).clone(),vn=X.clone().sub(k).normalize(),sn=.4,Gn=!1,at=null,pt=!1,St=Me.position.clone(),lt=X.clone();lt.y+=.6;let ut=performance.now();requestAnimationFrame(yt);return}let Vt=!1,Ce=performance.now(),De=V.userData.rightArm,Ae=null,Je=!1,en=mt(g.x,g.y).clone(),hn=X.clone().sub(k).normalize(),on=.4;function ke(Le){Ye();let We=Le-Ce,Me=Math.min(1,We/Dt),nn=Me<=.4?Me/.4:1,bn=Me>.4?(Me-.4)/.6:0;Me<=.4?V.position.lerpVectors(k,it,nn):V.position.lerpVectors(it,k,bn);let vn=Me<=.35?Me/.35:Me<=.7?(.7-Me)/.35:0;if(De.rotation.y=-vn*1.1,!Vt&&Me>=Fe&&(Vt=!0,H?(g.hp=Math.max(0,g.hp-z),Vn(g.x,g.y,String(z),!1),g.hp<=0&&(Je=!0),Lt(g),Z.get(g.id)?Ae=Le:Je&&(mn(g),Je=!1)):Vn(g.x,g.y,"MISS",!0)),Ae!=null&&H){let sn=Z.get(g.id);if(sn){let Gn=Math.min(1,(Le-Ae)/ue),at=1-Gn;sn.position.copy(en).add(hn.clone().multiplyScalar(on*at)),Gn>=1&&(sn.position.copy(en),Ae=null,Je&&(mn(g),Je=!1))}else Ae=null,Je&&(mn(g),Je=!1)}if(Me<1)requestAnimationFrame(ke);else{V.position.copy(k),De.rotation.y=0;let sn=Ae==null;sn&&Je&&(mn(g),Je=!1),sn?setTimeout(be?()=>Ge():()=>fe(),400):requestAnimationFrame(ke)}}requestAnimationFrame(ke)}function vu(_,g){let w=mt(_,g);w.y+=.4;let C=new qi(.1,12,12),H=new rn({color:8930559,transparent:!0,opacity:.9}),z=new ce(C,H);z.position.copy(w),n.add(z);let V=performance.now();function k(X){Ye();let it=X-V,ht=Math.min(1,it/S),Tt=ht*(2-ht);z.scale.setScalar(Tt*4.5),H.opacity=.9*(1-ht),ht<1?requestAnimationFrame(k):(n.remove(z),C.dispose(),H.dispose())}requestAnimationFrame(k)}function Pr(_,g,w,C,H){if(w.target==="enemy"&&g==null){C.updateTurnUI&&C.updateTurnUI(),H&&H();return}let V=(w.range??0)>2&&g!=null&&(g.x!==_.x||g.y!==_.y),k=!V&&g!=null&&(g.x!==_.x||g.y!==_.y);if(!V&&!k){Za(w.effectKey,_,g,C),C.updateTurnUI&&C.updateTurnUI(),H&&H();return}if(k){let vt=function(wt){Ye();let re=wt-yt,Ft=Math.min(1,re/Dt),Gt=Ft<=.4?Ft/.4:1,ye=Ft>.4?(Ft-.4)/.6:0;Ft<=.4?Le.position.lerpVectors(We,nn,Gt):Le.position.lerpVectors(nn,We,ye);let En=Ft<=.35?Ft/.35:Ft<=.7?(.7-Ft)/.35:0;if(pt.rotation.y=-En*1.1,!St&&Ft>=Fe&&(St=!0,Za(w.effectKey,_,g,C),g.hp<=0&&(ut=!0),C.updateUnitSlashVisibility&&C.updateUnitSlashVisibility(g),Z.get(g.id)?lt=wt:ut&&(mn(g),ut=!1)),lt!=null){let pe=Z.get(g.id);if(pe){let Ne=Math.min(1,(wt-lt)/ue),gn=1-Ne;pe.position.copy(sn).add(Gn.clone().multiplyScalar(at*gn)),Ne>=1&&(pe.position.copy(sn),lt=null,ut&&(mn(g),ut=!1))}else lt=null,ut&&(mn(g),ut=!1)}Ft<1?requestAnimationFrame(vt):(Le.position.copy(We),pt.rotation.y=0,lt==null&&ut&&(mn(g),ut=!1),lt==null?(C.updateTurnUI&&C.updateTurnUI(),H&&H()):requestAnimationFrame(vt))},Le=Z.get(_.id);if(!Le||!Le.userData.rightArm){Za(w.effectKey,_,g,C),C.updateUnitSlashVisibility&&C.updateUnitSlashVisibility(g),C.updateTurnUI&&C.updateTurnUI(),H&&H();return}let We=mt(_.x,_.y).clone(),Me=mt(g.x,g.y).clone(),nn=We.clone().lerp(Me,.35),bn=Me.x-We.x,vn=Me.z-We.z;bn*bn+vn*vn>1e-6&&(Le.rotation.y=Math.atan2(bn,vn));let sn=mt(g.x,g.y).clone(),Gn=Me.clone().sub(We).normalize(),at=.4,pt=Le.userData.rightArm,St=!1,lt=null,ut=!1,yt=performance.now();requestAnimationFrame(vt);return}let X=mt(_.x,_.y).clone(),it=mt(g.x,g.y).clone(),ht=new Wi(.035,.035,.4,6),Tt=new rn({color:16763972}),Pt=new ce(ht,Tt);Pt.position.copy(X),Pt.position.y+=.6;let rt=it.clone().sub(X).normalize();Pt.quaternion.setFromUnitVectors(new B(0,1,0),rt),n.add(Pt);let Vt=Pt.position.clone(),Ce=it.clone();Ce.y+=.6;let De=performance.now(),Ae=mt(g.x,g.y).clone(),Je=it.clone().sub(X).normalize(),en=.4,hn=!1,on=null;function ke(Le){Ye();let We=Le-De,Me=Math.min(1,We/R);if(Pt.position.lerpVectors(Vt,Ce,Me),!hn&&Me>=1&&(hn=!0,n.remove(Pt),ht.dispose(),Tt.dispose(),w.type==="spell"&&vu(g.x,g.y),Za(w.effectKey,_,g,C),Z.get(g.id)&&g.hp>0&&(on=Le),C.updateUnitSlashVisibility&&C.updateUnitSlashVisibility(g)),on!=null){let nn=Z.get(g.id);if(nn){let bn=Math.min(1,(Le-on)/ue),vn=1-bn;nn.position.copy(Ae).add(Je.clone().multiplyScalar(en*vn)),bn>=1&&(nn.position.copy(Ae),on=null)}else on=null}Me<1?requestAnimationFrame(ke):on==null?(C.updateTurnUI&&C.updateTurnUI(),H&&H()):requestAnimationFrame(ke)}requestAnimationFrame(ke)}function an(){if(le!=="playing"||!eo(ot)||kt||Wt.length===0)return;let _=Wt[Nt],g=N.find(at=>at.id===_);if(!g||g.hp<=0)return;let w=Ka(t,g.x,g.y,Mt(g,"agi"),N,g),C=[];w.forEach((at,pt)=>{if(at===0)return;let St=pt%t.w,lt=Math.floor(pt/t.w);N.some(yt=>yt.id!==g.id&&yt.x===St&&yt.y===lt&&yt.hp>0)||C.push({gx:St,gy:lt,dist:at})});let H=xu(g),z=ql(),V=_u(g.player),k=.25,X=.03,it=g.maxHp>0&&g.hp/g.maxHp<k,ht=g.maxHp>0&&g.hp/g.maxHp<X,Tt=g.level===2,Pt=at=>N.some(pt=>pt.hp>0&&pt.x===at.gx&&pt.y===at.gy&&pt.id!==g.id),rt=z.filter(at=>!Pt(at)),Vt=V.filter(at=>!Pt(at)),Ce=Ir(g).filter(at=>!at.disabled&&g.mp>=at.cost&&at.target==="enemy"),De=Ce.length>0?Math.max(...Ce.map(at=>at.range||0)):0,Ae=Math.max(g.range!=null?g.range:1,De);function Je(at,pt){if(pt.length===0)return null;let St=null,lt=1/0;for(let ut of at){let yt=0;for(let vt of pt)yt+=qn(ut.gx,ut.gy,vt.gx,vt.gy);yt<lt&&(lt=yt,St=ut)}return St}function en(at,pt){if(pt.length===0||at.length===0)return null;let St=null,lt=1/0;for(let ut of at){let yt=Math.min(...pt.map(vt=>qn(ut.gx,ut.gy,vt.gx,vt.gy)));yt<lt&&(lt=yt,St=ut)}return St}function hn(at,pt){let St=Ae,lt=[];for(let ut of N){if(ut.hp<=0||ut.player===g.player)continue;let yt=qn(at,pt,ut.x,ut.y);yt<=St&&yt>0&&us(t,at,pt,ut.x,ut.y)&&lt.push({target:ut,dist:yt})}return lt}let on=new Set(C.map(at=>at.gy*t.w+at.gx));function ke(at,pt){if(!at||at.length<=1)return null;let St=Math.min(pt,at.length-1);for(let lt=St;lt>=1;lt--){let ut=at[lt],yt=ut.y*t.w+ut.x;if(on.has(yt))return{gx:ut.x,gy:ut.y}}return null}function Le(at,pt){if(!at||at.length<=1)return null;let St=Math.min(pt,at.length-1);for(let lt=St;lt>=1;lt--){let ut=at[lt];if(!N.some(vt=>vt.id!==g.id&&vt.hp>0&&vt.x===ut.x&&vt.y===ut.y))return{gx:ut.x,gy:ut.y}}return null}function We(at){let pt=null,St=null,lt=1/0;for(let ut of at){let yt=Yi(t,g.x,g.y,ut.gx,ut.gy,N,g);yt&&yt.length>1&&yt.length<lt&&(lt=yt.length,pt=yt,St=ut)}return pt&&St?{path:pt,target:St}:null}function Me(at){let pt=at??C;if(pt.length===0)return null;let St=N.filter(yt=>yt.hp>0&&yt.player!==g.player);if(St.length===0)return pt[0];let lt=null,ut=-1;for(let yt of pt){let vt=Math.min(...St.map(wt=>qn(yt.gx,yt.gy,wt.x,wt.y)));vt>ut&&(ut=vt,lt=yt)}return lt}function nn(at){let pt=at??C;if(pt.length===0)return null;let St=N.filter(wt=>wt.hp>0&&wt.player!==g.player),lt=N.filter(wt=>wt.hp>0&&wt.player===g.player&&wt.id!==g.id);if(St.length===0)return pt[0];let ut=g.maxHp>0&&g.hp/g.maxHp>=.6,yt=null,vt=-1/0;for(let wt of pt){let re=Math.min(...St.map(ye=>qn(wt.gx,wt.gy,ye.x,ye.y))),Ft=lt.length>0?Math.min(...lt.map(ye=>qn(wt.gx,wt.gy,ye.x,ye.y))):999,Gt;ut?Gt=Ft<re?re-1e3:re:Gt=re-Ft,Gt>vt&&(vt=Gt,yt=wt)}return yt}function bn(){let at=Ae,pt=N.filter(ut=>ut.hp>0&&ut.player!==g.player);if(pt.length===0)return null;let St=null,lt=-1;for(let ut of C){let yt=Math.min(...pt.map(wt=>qn(ut.gx,ut.gy,wt.x,wt.y)));pt.some(wt=>qn(ut.gx,ut.gy,wt.x,wt.y)<=at)&&yt>lt&&(lt=yt,St=ut)}return St}if(_e){if(be){Ge();return}if(hs-oe<=20&&z.length>0){let vt=z.some(wt=>wt.gx===g.x&&wt.gy===g.y);if(vt&&C.length>0){let wt=new Set(z.map(Gt=>Gt.gy*t.w+Gt.gx)),Ft=C.filter(Gt=>wt.has(Gt.gy*t.w+Gt.gx)).filter(Gt=>Gt.gx!==g.x||Gt.gy!==g.y);if(Ft.length>0){let Gt=Me(Ft);if(Gt&&(Gt.gx!==g.x||Gt.gy!==g.y)){Ke(g,Gt.gx,Gt.gy,()=>setTimeout(Ge,400));return}}Ge();return}if(vt){Ge();return}if(C.length>0){let wt=rt.length>0?rt:z,re=We(wt),Ft=re?Le(re.path,Mt(g,"agi")):null;if(Ft&&(Ft.gx!==g.x||Ft.gy!==g.y)){Ke(g,Ft.gx,Ft.gy,()=>setTimeout(Ge,400));return}let Gt=en(C,wt);if(Gt&&(Gt.gx!==g.x||Gt.gy!==g.y)){Ke(g,Gt.gx,Gt.gy,()=>setTimeout(Ge,400));return}}Ge();return}let pt=new Set(z.map(vt=>vt.gy*t.w+vt.gx)),St=z.length>0?C.filter(vt=>pt.has(vt.gy*t.w+vt.gx)):null,lt=St!=null&&St.length>0?St:C,ut=N.filter(vt=>vt.hp>0&&vt.player===g.player&&vt.id!==g.id),yt=null;if(lt.length>0&&ut.length>0&&(yt=nn(lt),yt)){let vt=Yi(t,g.x,g.y,yt.gx,yt.gy,N,g),wt=vt?vt.length-1:1/0;(!vt||vt.length<=1||wt>Mt(g,"agi"))&&(yt=Me(lt))}if(!yt&&lt.length>0&&(yt=Me(lt)),yt&&(yt.gx!==g.x||yt.gy!==g.y)){Ke(g,yt.gx,yt.gy,()=>setTimeout(Ge,400));return}Ge();return}if(ht&&hs-oe>20&&!be&&C.length>0){let at=null,pt=1/0;for(let lt of C){let yt=hn(lt.gx,lt.gy).filter(vt=>vt.target.maxHp>0&&vt.target.hp/vt.target.maxHp<k);if(yt.length>0){let vt=Math.min(...yt.map(wt=>wt.target.hp));vt<pt&&(pt=vt,at=lt)}}if(at){let lt=Yi(t,g.x,g.y,at.gx,at.gy,N,g),ut=lt?ke(lt,Mt(g,"agi")):null;if(ut&&(ut.gx!==g.x||ut.gy!==g.y)){Ke(g,ut.gx,ut.gy,()=>setTimeout(an,600));return}}let St=Me();if(St&&(St.gx!==g.x||St.gy!==g.y)){Ke(g,St.gx,St.gy,()=>setTimeout(an,600));return}Ge();return}if(!_e){let re=function(pe){return Lr(g,pe,N).filter(gn=>gn.targetUnit!=null).map(gn=>gn.targetUnit)},at=Ir(g),pt=g.maxHp>0?g.hp/g.maxHp:1,St=.35,lt=new Set(["arcaneBolt","feast","pierce","snipe","berserk","drain","shuriken","chokuto","bite","execute"]),ut=new Set(["chakra"]),yt=new Set(["shieldWall","focus","bloodlust","iaido","howl","mantra"]),vt=new Set(["freeze","impale"]),wt=new Set(["dominate","weaken","cripple","hex","blind"]),Ft={showFloatingCombatText:Vn,handleUnitDeath:mn,updateUnitSlashVisibility:Lt,updateTurnUI:fe},Gt=null,ye=null;for(let pe of at)if(!pe.disabled&&lt.has(pe.effectKey)){if(pe.effectKey==="feast"&&g.hp/g.maxHp>.7||pe.effectKey==="berserk"&&g.hp/g.maxHp<.25||pe.effectKey==="shuriken"&&H.length>0)continue;let Ne=re(pe);if(Ne.length===0)continue;let gn=Ne.filter(Ci=>Ci.maxHp>0&&Ci.hp/Ci.maxHp<St),Tn=(Ci,Nr)=>Mt(Ci,"int")-Mt(Nr,"int")||Ci.hp-Nr.hp,ys=(Ci,Nr)=>Ci.hp-Nr.hp,ao=gn.length>0?pe.type==="spell"?gn.sort(Tn)[0]:gn.sort(ys)[0]:pe.type==="spell"?Ne.sort(Tn)[0]:Ne.sort(ys)[0];Gt=pe,ye=ao;break}if(!Gt&&pt<=.4){for(let pe of at)if(!pe.disabled&&ut.has(pe.effectKey)){let Ne=Lr(g,pe,N);if(Ne.length>0){Gt=pe,ye=pe.target==="self"?g:Ne[0].targetUnit||g;break}}}if(!Gt&&(H.length>0||C.some(Ne=>hn(Ne.gx,Ne.gy).length>0))){for(let Ne of at)if(!Ne.disabled&&!(Ne.effectKey==="bloodlust"&&g.hp/g.maxHp>.8)&&yt.has(Ne.effectKey)&&Ne.target==="self"&&!(g.tempBuff&&g.tempBuff.duration>0)){Gt=Ne,ye=g;break}}let En=H.some(pe=>pe.target.maxHp>0&&pe.target.hp/pe.target.maxHp<k);if(!Gt&&!En){for(let pe of at)if(!pe.disabled&&wt.has(pe.effectKey)){let gn=re(pe).sort((Tn,ys)=>Tn.hp-ys.hp)[0];Gt=pe,ye=gn;break}}if(!Gt&&!En){for(let pe of at)if(!pe.disabled&&vt.has(pe.effectKey)){let gn=re(pe).filter(Tn=>!Tn.tempDebuff||Tn.tempDebuff.duration<=0);if(gn.length>0){let Tn=gn.sort((ys,ao)=>ys.hp-ao.hp)[0];Gt=pe,ye=Tn;break}}}if(Gt&&ye){g.mp-=Gt.cost,_e=!0;let pe=Gt.target==="self"?g:ye;Pr(g,pe,Gt,Ft,()=>setTimeout(an,600));return}}if(yu(g)&&H.length>0){H.sort((pt,St)=>pt.target.hp-St.target.hp||pt.dist-St.dist);let at=H[0].target;Yl(g,at);return}if(H.length>0){H.sort((pt,St)=>pt.target.hp-St.target.hp||pt.dist-St.dist);let at=H[0].target;Yl(g,at);return}let vn=hs-oe;if(vn<=20&&z.length>0&&!be&&C.length>0&&!z.some(pt=>pt.gx===g.x&&pt.gy===g.y)){let pt=rt.length>0?rt:z,St=We(pt),lt=St?St.path:null,ut=(ye,En)=>Math.min(...z.map(pe=>qn(ye,En,pe.gx,pe.gy))),yt=ut(g.x,g.y),vt=null,wt=-1,re=k;for(let ye of C){if(ut(ye.gx,ye.gy)>yt||hn(ye.gx,ye.gy).filter(Tn=>Tn.target.maxHp>0&&Tn.target.hp/Tn.target.maxHp<re).length===0)continue;let Ne=lt?lt.findIndex(Tn=>Tn.x===ye.gx&&Tn.y===ye.gy):-1,gn=Ne>=0?Ne:0;gn>wt&&(wt=gn,vt=ye)}if(vt&&(vt.gx!==g.x||vt.gy!==g.y)){Ke(g,vt.gx,vt.gy,()=>setTimeout(an,600));return}let Ft=St?Le(St.path,Mt(g,"agi")):null;if(Ft&&(Ft.gx!==g.x||Ft.gy!==g.y)){Ke(g,Ft.gx,Ft.gy,()=>setTimeout(an,600));return}let Gt=en(C,pt);if(Gt&&(Gt.gx!==g.x||Gt.gy!==g.y)){Ke(g,Gt.gx,Gt.gy,()=>setTimeout(an,600));return}}if(it&&C.length>0&&!be){let at=null,pt=1/0;for(let St of C){let ut=hn(St.gx,St.gy).filter(yt=>yt.target.maxHp>0&&yt.target.hp/yt.target.maxHp<k);if(ut.length>0){let yt=Math.min(...ut.map(vt=>vt.target.hp));yt<pt&&(pt=yt,at=St)}}if(at){let St=Yi(t,g.x,g.y,at.gx,at.gy,N,g),lt=St?ke(St,Mt(g,"agi")):null;if(lt&&(lt.gx!==g.x||lt.gy!==g.y)){Ke(g,lt.gx,lt.gy,()=>setTimeout(an,600));return}}if(vn>20&&Tt&&V.length>0&&!V.some(lt=>lt.gx===g.x&&lt.gy===g.y)){let lt=Vt.length>0?Vt:V,ut=We(lt);if(ut!=null&&ut.path.length<=5){let vt=Le(ut.path,Mt(g,"agi"));if(vt&&(vt.gx!==g.x||vt.gy!==g.y)){Ke(g,vt.gx,vt.gy,()=>setTimeout(an,600));return}let wt=en(C,lt);if(wt&&(wt.gx!==g.x||wt.gy!==g.y)){Ke(g,wt.gx,wt.gy,()=>setTimeout(an,600));return}}}if(vn>20){let St=Me();if(St&&qn(g.x,g.y,St.gx,St.gy)>0){Ke(g,St.gx,St.gy,()=>setTimeout(an,600));return}Ge();return}}if(vn<=10&&z.length>0&&!be&&C.length>0&&!z.some(pt=>pt.gx===g.x&&pt.gy===g.y)){let pt=rt.length>0?rt:z,St=We(pt),lt=St?Le(St.path,Mt(g,"agi")):null;if(lt&&(lt.gx!==g.x||lt.gy!==g.y)){Ke(g,lt.gx,lt.gy,()=>setTimeout(an,600));return}let ut=en(C,pt);if(ut&&(ut.gx!==g.x||ut.gy!==g.y)){Ke(g,ut.gx,ut.gy,()=>setTimeout(an,600));return}}if(g.level===1&&z.length>0&&!be&&!z.some(pt=>pt.gx===g.x&&pt.gy===g.y)&&C.length>0){let pt=rt.length>0?rt:z,St=We(pt),lt=St?Le(St.path,Mt(g,"agi")):null;if(lt&&(lt.gx!==g.x||lt.gy!==g.y)){Ke(g,lt.gx,lt.gy,()=>setTimeout(an,600));return}let ut=en(C,pt);if(ut&&(ut.gx!==g.x||ut.gy!==g.y)){Ke(g,ut.gx,ut.gy,()=>setTimeout(an,600));return}}if(Tt&&V.length>0&&!be&&!V.some(pt=>pt.gx===g.x&&pt.gy===g.y)&&C.length>0){let St=N.filter(Ft=>Ft.hp>0&&Ft.player!==g.player).filter(Ft=>Ft.maxHp>0&&Ft.hp/Ft.maxHp<k),lt=null,ut=1/0;for(let Ft of C){let ye=hn(Ft.gx,Ft.gy).find(En=>St.some(pe=>pe.id===En.target.id));ye&&ye.target.hp<ut&&(ut=ye.target.hp,lt=Ft)}if(lt){let Ft=Yi(t,g.x,g.y,lt.gx,lt.gy,N,g),Gt=Ft?ke(Ft,Mt(g,"agi")):null;if(Gt&&(Gt.gx!==g.x||Gt.gy!==g.y)){Ke(g,Gt.gx,Gt.gy,()=>setTimeout(an,600));return}}let yt=Vt.length>0?Vt:V,vt=We(yt),wt=vt?Le(vt.path,Mt(g,"agi")):null;if(wt&&(wt.gx!==g.x||wt.gy!==g.y)){Ke(g,wt.gx,wt.gy,()=>setTimeout(an,600));return}let re=en(C,yt);if(re&&(re.gx!==g.x||re.gy!==g.y)){Ke(g,re.gx,re.gy,()=>setTimeout(an,600));return}}let sn=N.filter(at=>at.hp>0&&at.player!==g.player);if(g.level>=2&&Ae>=2&&sn.length>0&&!be&&C.length>0){let at=bn();if(at&&(at.gx!==g.x||at.gy!==g.y)){Ke(g,at.gx,at.gy,()=>setTimeout(an,600));return}}if(sn.length>0&&!be&&C.length>0){let pt=function(lt,ut){let yt=null;for(let vt=-at;vt<=at;vt++)for(let wt=-at;wt<=at;wt++){if(wt===0&&vt===0||Math.abs(wt)+Math.abs(vt)>at)continue;let re=lt.x+wt,Ft=lt.y+vt;if(re<0||re>=t.w||Ft<0||Ft>=t.h||!Rr(t,re,Ft)||!us(t,re,Ft,lt.x,lt.y)||N.some(Ne=>Ne.hp>0&&Ne.x===re&&Ne.y===Ft))continue;let ye=Yi(t,g.x,g.y,re,Ft,N,g),En=ye?ye.length-1:1/0;ye&&ye.length>1&&(!ut||En<=Mt(g,"agi"))&&(!yt||ye.length<yt.length)&&(yt=ye)}return yt},at=Ae,St=[];for(let lt of sn){let ut=pt(lt,!0);ut&&St.push({enemy:lt,path:ut})}if(St.length>0){let lt=St.filter(wt=>wt.enemy.maxHp>0&&wt.enemy.hp/wt.enemy.maxHp<k),ut=lt.length>0?lt:St;lt.length>0?ut.sort((wt,re)=>wt.enemy.hp-re.enemy.hp||wt.path.length-re.path.length):ut.sort((wt,re)=>wt.path.length-re.path.length||wt.enemy.hp-re.enemy.hp);let yt=ut[0],vt=ke(yt.path,Mt(g,"agi"));if(vt&&(vt.gx!==g.x||vt.gy!==g.y)){Ke(g,vt.gx,vt.gy,()=>setTimeout(an,600));return}}if(St.length===0){let lt=null,ut=1/0;for(let yt of sn){let vt=pt(yt,!1);vt&&vt.length<ut&&(ut=vt.length,lt=vt)}if(lt){let yt=ke(lt,Mt(g,"agi"));if(yt&&(yt.gx!==g.x||yt.gy!==g.y)){Ke(g,yt.gx,yt.gy,()=>setTimeout(an,600));return}}}}Ge()}function tn(){for(kn.length=0;Pn.children.length;){let _=Pn.children[0];Pn.remove(_),_.geometry!==er&&_.geometry!==nr&&_.geometry.dispose(),_.material.dispose()}Ye()}let _s=new Set;function Ir(_){return!_||!_.class?[]:cu[_.class]?cu[_.class].map(g=>({...g,disabled:g.disabled===!0||_.level<g.level||g.hpCost&&_.hp<g.hpCost||g.cost&&_.mp<g.cost})):[]}function Lr(_,g,w){let C=[],H=(V,k,X,it)=>Math.abs(V-X)+Math.abs(k-it),z=g.range||0;if(g.target==="self")return C.push({gx:_.x,gy:_.y,targetUnit:null}),C;for(let V of w)V.hp<=0||H(_.x,_.y,V.x,V.y)>z||z>2&&!us(t,_.x,_.y,V.x,V.y)||(g.target==="enemy"&&V.player!==_.player&&C.push({gx:V.x,gy:V.y,targetUnit:V}),g.target==="ally"&&V.player===_.player&&C.push({gx:V.x,gy:V.y,targetUnit:V}));return C}function Mu(_,g){let w=g.range||0;if(g.target==="self")return[{gx:_.x,gy:_.y}];let C=uu(t,_.x,_.y,w),H=[];return C.forEach((z,V)=>{let k=V%t.w,X=V/t.w|0;w>2&&!us(t,_.x,_.y,k,X)||H.push({gx:k,gy:X})}),H}function Su(_,g){let w=Lr(_,g,N);_s=new Set(w.map(H=>`${H.gx},${H.gy}`));let C=g.target==="self"?w:Mu(_,g);tn(),C.forEach(({gx:H,gy:z})=>{let k=(On+t.height[z][H]*.35)/2+On/2,X=H*Se-nt+Se/2,it=z*Se-ct+Se/2,ht=k+.01,Tt=new rn({color:8926122,transparent:!0,opacity:.4,side:ln}),Pt=new ce(er,Tt);Pt.rotation.x=-Math.PI/2,Pt.position.set(X,ht,it),Pn.add(Pt),kn.push(Tt);let rt=new rn({color:11167436,transparent:!0,opacity:.7,side:ln}),Vt=new ce(nr,rt);Vt.rotation.x=-Math.PI/2,Vt.position.set(X,ht+.01,it),Vt.userData.gx=H,Vt.userData.gy=z,Pn.add(Vt),kn.push(rt)})}let $l=.82,Zl=1.02,er=new Si(Zl,Zl),nr=new Si($l,$l);function bu(_){tn(),_.forEach(({gx:g,gy:w})=>{let H=(On+t.height[w][g]*.35)/2+On/2,z=g*Se-nt+Se/2,V=w*Se-ct+Se/2,k=H+.01,X=new rn({color:2271812,transparent:!0,opacity:.4,side:ln}),it=new ce(er,X);it.rotation.x=-Math.PI/2,it.position.set(z,k,V),Pn.add(it),kn.push(X);let ht=new rn({color:4508774,transparent:!0,opacity:.7,side:ln}),Tt=new ce(nr,ht);Tt.rotation.x=-Math.PI/2,Tt.position.set(z,k+.01,V),Tt.userData.gx=g,Tt.userData.gy=w,Pn.add(Tt),kn.push(ht)}),Ye()}function no(_){tn(),_.forEach((g,w)=>{if(g===0)return;let C=w%t.w,H=w/t.w|0,V=(On+t.height[H][C]*.35)/2+On/2,k=C*Se-nt+Se/2,X=H*Se-ct+Se/2,it=V+.01,ht=new rn({color:3381759,transparent:!0,opacity:.35,side:ln}),Tt=new ce(er,ht);Tt.rotation.x=-Math.PI/2,Tt.position.set(k,it,X),Pn.add(Tt),kn.push(ht);let Pt=new rn({color:6730751,transparent:!0,opacity:.65,side:ln}),rt=new ce(nr,Pt);rt.rotation.x=-Math.PI/2,rt.position.set(k,it+.01,X),Pn.add(rt),kn.push(Pt)}),Ye()}function Eu(_){tn(),_.forEach((g,w)=>{if(g===0)return;let C=w%t.w,H=w/t.w|0,V=(On+t.height[H][C]*.35)/2+On/2,k=C*Se-nt+Se/2,X=H*Se-ct+Se/2,it=V+.01,ht=new rn({color:10035746,transparent:!0,opacity:.4,side:ln}),Tt=new ce(er,ht);Tt.rotation.x=-Math.PI/2,Tt.position.set(k,it,X),Pn.add(Tt),kn.push(ht);let Pt=new rn({color:13386820,transparent:!0,opacity:.7,side:ln}),rt=new ce(nr,Pt);rt.rotation.x=-Math.PI/2,rt.position.set(k,it+.01,X),Pn.add(rt),kn.push(Pt)}),Ye()}let wi=new ka,Ai=new Bt;function Dr(_,g){let w=e.getBoundingClientRect();return Ai.x=(_-w.left)/w.width*2-1,Ai.y=-((g-w.top)/w.height)*2+1,{x:Ai.x,y:Ai.y}}function Tu(_,g){if(kt)return;Ai.x=_,Ai.y=g,wi.setFromCamera(Ai,a);let w=wi.intersectObjects(G.children,!0);if(w.length===0)return;let C=null;for(let k of w){let X=k.object;for(;X&&(X.userData.gx==null||X.userData.gy==null);)X=X.parent;if(X&&X.userData.gx!=null){C=X;break}}if(!C||C.userData.gx==null)return;let H=C.userData.gx,z=C.userData.gy;if(le==="draft"&&Zt){let k=z*t.w+H;Re.has(k)&&ps(H,z);return}if(le!=="playing"||ee==="cvcpu")return;if(Pe&&Ie){let k=Wt[Nt],X=N.find(rt=>rt.id===k&&rt.hp>0);if(X&&H===X.x&&z===X.y){Pe=!1,Ie=null,_s=new Set,tn(),be?D=new Map:(D=Ka(t,X.x,X.y,Mt(X,"agi"),N,X),no(D)),fe();return}let it=`${H},${z}`;if(!_s.has(it))return;if(!X||X.mp<Ie.cost){Pe=!1,Ie=null,tn(),fe();return}let ht=N.find(rt=>rt.x===H&&rt.y===z&&rt.hp>0);if(Ie.target==="enemy"&&(!ht||ht.player===X.player)||Ie.target==="ally"&&ht&&ht.player!==X.player||Ie.target==="self"&&(H!==X.x||z!==X.y)||Ie.target==="enemy"&&!ht)return;X.mp-=Ie.cost,_e=!0;let Tt={showFloatingCombatText:Vn,handleUnitDeath:mn,updateUnitSlashVisibility:Lt,updateTurnUI:fe},Pt=Ie.target==="self"?X:ht||null;Pr(X,Pt,Ie,Tt,()=>{tn(),Pe=!1,Ie=null,_s=new Set,be?Ge():fe()});return}if(qe){let k=Wt[Nt],X=N.find(ht=>ht.id===k),it=Z.get(k);if(X&&it&&Ze.length>0){let ht=mt(X.x,X.y),Tt=mt(H,z),Pt=Tt.x-ht.x,rt=Tt.z-ht.z,Vt=Pt*Pt+rt*rt>1e-6?Math.atan2(Pt,rt):it.rotation.y;it.rotation.y=ve(Vt)}Ge();return}if(ft!=null&&Te){let k=N.find(ht=>ht.id===ft);if(!k||k.player!==ot)return;let X=z*t.w+H,it=N.find(ht=>ht.x===H&&ht.y===z&&ht.hp>0);if(it&&it.id===Wt[Nt]&&it.player===ot){Te=!1,ft=it.id,be?(tn(),D=new Map):(D=Ka(t,it.x,it.y,Mt(it,"agi"),N,it),no(D)),fe();return}if(!D.has(X)||D.get(X)===0)return;if(it&&it.player!==ot){let ht=Mt(it,"agi")*.7+Mt(it,"luk")*.3;if(Math.random()*Math.max(.001,ht)<=Mt(k,"dex")){let rt=Mt(k,"str")*.7+Mt(k,"dex")*.1+Mt(k,"int")*.07-(Mt(it,"vit")*.3+Mt(it,"luk")*.1),Vt=Math.max(1,Math.floor(rt));it.hp=Math.max(0,it.hp-Vt),Vn(it.x,it.y,String(Vt),!1),it.hp<=0&&mn(it),Lt(it)}else Vn(it.x,it.y,"MISS",!0);_e=!0,ft=null,Te=!1,tn(),be?Ge():fe()}return}let V=N.find(k=>k.x===H&&k.y===z&&k.hp>0);if(V){if(V.id===Wt[Nt]&&V.player===ot){Qt(),ft=V.id,Te=!1,be?(tn(),D=new Map):(D=Ka(t,H,z,Mt(V,"agi"),N,V),no(D)),fe();return}tn(),D=new Map,Te=!1,Ct(V),fe();return}if(Qt(),ft!=null){let rt=function(){if(Pt>=ht.length){k.x=ht[ht.length-1].x,k.y=ht[ht.length-1].y,kt=!1,ne(Tt),q(),D=new Map,be=!0,_e?Ge():fe();return}let Vt=ht[Pt-1],Ce=ht[Pt],De=mt(Vt.x,Vt.y).clone(),Ae=mt(Ce.x,Ce.y).clone(),Je=Ae.x-De.x,en=Ae.z-De.z;Je*Je+en*en>1e-6&&(Tt.rotation.y=Math.atan2(Je,en));let hn=performance.now();function on(ke){Ye();let Le=Math.min(1,(ke-hn)/ou),Me=(nn=>nn*nn*(3-2*nn))(Le);Tt.position.lerpVectors(De,Ae,Me),Xt(Tt,Me),Le<1?requestAnimationFrame(on):(Pt++,rt())}requestAnimationFrame(on)};if(Te)return;let k=N.find(Vt=>Vt.id===ft);if(!k||k.player!==ot)return;let X=z*t.w+H;if(!D.has(X)||D.get(X)===0||N.some(Vt=>Vt.id!==k.id&&Vt.x===H&&Vt.y===z&&Vt.hp>0)||kt||be)return;let ht=Yi(t,k.x,k.y,H,z,N,k);if(!ht||ht.length<=1)return;ft=null,tn(),kt=!0,q(k.id);let Tt=Z.get(k.id),Pt=1;rt()}}function Kl(_){L.x=_.clientX,L.y=_.clientY,m=_.ctrlKey,p=Dr(_.clientX,_.clientY),e.style.cursor=(_.ctrlKey,"grabbing")}function io(_){return _.touches&&_.touches.length>0?{clientX:_.touches[0].clientX,clientY:_.touches[0].clientY}:_.changedTouches&&_.changedTouches.length>0?{clientX:_.changedTouches[0].clientX,clientY:_.changedTouches[0].clientY}:{clientX:_.clientX,clientY:_.clientY}}function Jl(_){if(!_||_.length<2)return 0;let g=_[0],w=_[1];return Math.hypot(w.clientX-g.clientX,w.clientY-g.clientY)}function wu(_){if(_.touches.length===2){F=Jl(_.touches),p=null;return}if(_.touches.length!==1)return;F=null;let g=io(_);Kl({clientX:g.clientX,clientY:g.clientY,ctrlKey:!1})}function Au(_){if(_.touches.length===2){_.preventDefault();let w=Jl(_.touches);if(F!=null&&F>0){let C=w-F,H=a.position.distanceTo(c),z=Math.max($,Math.min(b,H-C*U));d.copy(c).sub(a.position).normalize(),a.position.copy(c).sub(d.multiplyScalar(z)),a.lookAt(c)}F=w;return}if(F=null,_.touches.length!==1)return;_.preventDefault();let g=io(_);jl({clientX:g.clientX,clientY:g.clientY,ctrlKey:!1})}function Ru(_){if(_.touches.length<2&&(F=null),_.touches.length===2||_.changedTouches.length===0)return;let g=io(_);so({clientX:g.clientX,clientY:g.clientY,ctrlKey:!1})}function jl(_){if(qe){In(_.clientX,_.clientY);return}if(p==null)return;let g=_.clientX-L.x,w=_.clientY-L.y;if(!x&&!v&&(Math.abs(g)>M||Math.abs(w)>M)&&(_.ctrlKey||m?v=!0:x=!0),v){I.copy(a.position).sub(c);let C=I.length();if(C<.001)return;let H=Math.atan2(I.x,I.z),z=Math.asin(Math.max(-1,Math.min(1,I.y/C)));H-=g*y,z+=w*y,z=Math.max(T,Math.min(O,z)),I.x=C*Math.cos(z)*Math.sin(H),I.y=C*Math.sin(z),I.z=C*Math.cos(z)*Math.cos(H),a.position.copy(c).add(I),a.lookAt(c),L.x=_.clientX,L.y=_.clientY,Ye()}else if(x){let C=Dr(_.clientX,_.clientY);f.setFromNormalAndCoplanarPoint(new B(0,1,0),new B(0,c.y,0)),wi.setFromCamera(new Bt(p.x,p.y),a),wi.ray.intersectPlane(f,u);let H=u.clone();wi.setFromCamera(new Bt(C.x,C.y),a),wi.ray.intersectPlane(f,u);let z=H.sub(u);c.add(z),a.position.add(z),a.lookAt(c),p={x:C.x,y:C.y},Ye()}}function so(_){if(p!=null&&!x&&!v){let g=Dr(_.clientX,_.clientY);Tu(g.x,g.y)}p=null,x=!1,v=!1,m=!1,e.style.cursor="grab"}function Cu(_){_.preventDefault();let g=a.position.distanceTo(c),w=Math.max($,Math.min(b,g+_.deltaY*A));d.copy(c).sub(a.position).normalize(),a.position.copy(c).sub(d.multiplyScalar(w)),a.lookAt(c),Ye()}e.style.cursor="grab",e.addEventListener("mousedown",Kl),e.addEventListener("mousemove",jl),e.addEventListener("mouseup",so),e.addEventListener("mouseleave",so),e.addEventListener("touchstart",wu,{passive:!0}),e.addEventListener("touchmove",Au,{passive:!1}),e.addEventListener("touchend",Ru,{passive:!0}),e.addEventListener("wheel",Cu,{passive:!1});function Ql(){let _=e.clientWidth,g=e.clientHeight;a.aspect=_/g,a.updateProjectionMatrix(),Ri.setSize(_,g),Ri.setPixelRatio(Math.min(window.devicePixelRatio,1.7))}window.addEventListener("resize",Ql);let Ri=new yr({antialias:!1});Ri.setSize(e.clientWidth,e.clientHeight),Ri.setPixelRatio(Math.min(window.devicePixelRatio,1.7)),Ri.shadowMap.enabled=!0,Ri.shadowMap.type=Fl,e.appendChild(Ri.domElement),Ql();let Ur=document.createElement("div");Ur.id="combat-text-layer",e.appendChild(Ur);let li=new B,Pu=1400;function Vn(_,g,w,C,H){let z=document.createElement("div");z.className="combat-text-float "+(C?"miss":"damage")+(H?" "+H:""),z.textContent=w,z.style.position="absolute",Ur.appendChild(z);let V=H==="skill-name"?1.7:1.2,k=performance.now();function X(){li.copy(mt(_,g)),li.y+=V,li.project(a);let Tt=e.clientWidth,Pt=e.clientHeight;z.style.left=(li.x*.5+.5)*Tt+"px",z.style.top=(1-(li.y*.5+.5))*Pt+"px"}let it=0;function ht(){it%2===0&&X(),it++,performance.now()-k<Pu?requestAnimationFrame(ht):z.remove()}requestAnimationFrame(ht)}let Iu=1500;function Lu(_,g){let w=document.createElement("div");w.className="combat-text-float "+(g||"levelup"),w.textContent="LEVEL UP!",w.style.position="absolute",Ur.appendChild(w);let C=performance.now(),H=0;function z(){li.copy(mt(_.x,_.y)),li.y+=1.2,li.project(a);let k=e.clientWidth,X=e.clientHeight;w.style.left=(li.x*.5+.5)*k+"px",w.style.top=(1-(li.y*.5+.5))*X+"px"}function V(){H%2===0&&z(),H++,performance.now()-C<Iu?requestAnimationFrame(V):w.remove()}requestAnimationFrame(V)}function mn(_){console.log("[DEATH]",`${_.name} (${_.class}, P${_.player})`,`at (${_.x},${_.y})`,`Lv.${_.level}`),Vn(_.x,_.y,"DEAD",!1);let g=Z.get(_.id);if(!g){q(),tc();return}let w=performance.now();function C(H){Ye();let z=H-w,V=Math.min(1,z/K),k=V*V;g.rotation.x=k*Math.PI*.5,V<1?requestAnimationFrame(C):(n.remove(g),Z.delete(_.id),q(),tc())}requestAnimationFrame(C)}function tc(){if(le!=="playing")return;let _=N.some(w=>w.player===1&&w.hp>0),g=N.some(w=>w.player===2&&w.hp>0);_?g||ro(1):ro(2)}function Du(){let _=ql(),g=new Set(_.map(V=>V.gy*t.w+V.gx)),w=N.filter(V=>V.hp>0&&V.player===1&&g.has(V.y*t.w+V.x)).length,C=N.filter(V=>V.hp>0&&V.player===2&&g.has(V.y*t.w+V.x)).length,H=null,z="";if(w>C)H=1,z=`Time's up! Player 1 wins! (${w} vs ${C} units on center base)`;else if(C>w)H=2,z=`Time's up! Player 2 wins! (${C} vs ${w} units on center base)`;else{let V=N.filter(X=>X.hp>0&&X.player===1).reduce((X,it)=>X+it.hp,0),k=N.filter(X=>X.hp>0&&X.player===2).reduce((X,it)=>X+it.hp,0);V>k?(H=1,z=`Time's up! Draw on center \u2014 Player 1 wins on total HP (${V} vs ${k})`):k>V?(H=2,z=`Time's up! Draw on center \u2014 Player 2 wins on total HP (${k} vs ${V})`):z=`Draw! (equal units on center: ${w}, equal HP)`}ro(H,z)}function ro(_,g){le="gameover",document.getElementById("turn-menu").style.display="none",Qt(),tn();let w=document.getElementById("game-over-overlay"),C=document.getElementById("game-over-title"),H=document.getElementById("game-over-cards");C.textContent=g??`Player ${_} wins!`;let z=N.filter(V=>V.player===(_??1));H.innerHTML=z.map(V=>{let k=V,X=V.level>=3?" level-3":V.level>=2?" level-2":"",it=k.maxHp>0&&k.hp/k.maxHp<.3?" low-hp":"";return`
        <div class="game-over-card${X}${it}">
          <img class="game-over-card-image" src="${Ar[V.class]||""}" alt="${k.name}" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="game-over-card-body">
            <div class="game-over-card-name">${k.name}</div>
            <div class="game-over-card-meta">Lv.${k.level} ${k.class} \u2014 HP ${k.hp}/${k.maxHp}</div>
            <div class="game-over-card-stats">
              <span class="stat-label">HP</span><span class="stat-val stat-val-hp">${k.hp}/${k.maxHp}</span>
              <span class="stat-label">MP</span><span class="stat-val">${k.mp}/${k.maxMp}</span>
              <span class="stat-label">STR</span><span class="stat-val">${Mt(k,"str")}</span>
              <span class="stat-label">AGI</span><span class="stat-val">${Mt(k,"agi")}</span>
              <span class="stat-label">VIT</span><span class="stat-val">${Mt(k,"vit")}</span>
              <span class="stat-label">DEX</span><span class="stat-val">${Mt(k,"dex")}</span>
              <span class="stat-label">LUK</span><span class="stat-val">${Mt(k,"luk")}</span>
              <span class="stat-label">INT</span><span class="stat-val">${Mt(k,"int")}</span>
              <span class="stat-label">Range</span><span class="stat-val">${k.range}</span>
            </div>
          </div>
        </div>
      `}).join(""),w.classList.add("visible")}function xs(_=0){requestAnimationFrame(xs),$i===0&&($i=_);let g=_-$i>500,w=0;typeof xs.frameCount=="number"&&(w=xs.frameCount),xs.frameCount=w+1;let C=()=>{if(oi){let H=.6+.4*Math.sin(_*.004);for(let z=0;z<kn.length;z++){let V=z%2===0?.4:.7;kn[z].opacity=V*H}Ri.render(n,a),oi=!1}};g?_-Zi>=100&&(Zi=_,oi=!0,C()):(xs.frameCount%2===0&&(oi=!0),C())}xs()}x_();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
