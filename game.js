var Xl="160";var Ku=0,mc=1,Ju=2;var Kh=1,ql=2,Pi=3,Ki=0,Jn=1,mn=2;var Yi=0,Gs=1,gc=2,xc=3,yc=4,ju=5,ls=100,Qu=101,td=102,_c=103,vc=104,ed=200,nd=201,id=202,sd=203,Qo=204,tl=205,rd=206,ad=207,od=208,ld=209,cd=210,hd=211,ud=212,dd=213,fd=214,pd=0,md=1,gd=2,ya=3,xd=4,yd=5,_d=6,vd=7,Jh=0,Md=1,bd=2,$i=0,Sd=1,Ed=2,Td=3,wd=4,Ad=5,Rd=6;var jh=300,qs=301,Ys=302,el=303,nl=304,Ka=306,br=1e3,gi=1001,il=1002,Gn=1003,Mc=1004;var xo=1005;var si=1006,Cd=1007;var Sr=1008;var Zi=1009,Pd=1010,Id=1011,Yl=1012,Qh=1013,Xi=1014,qi=1015,Er=1016,tu=1017,eu=1018,hs=1020,Ld=1021,xi=1023,Dd=1024,Ud=1025,us=1026,$s=1027,Nd=1028,nu=1029,Od=1030,iu=1031,su=1033,yo=33776,_o=33777,vo=33778,Mo=33779,bc=35840,Sc=35841,Ec=35842,Tc=35843,ru=36196,wc=37492,Ac=37496,Rc=37808,Cc=37809,Pc=37810,Ic=37811,Lc=37812,Dc=37813,Uc=37814,Nc=37815,Oc=37816,Fc=37817,Bc=37818,kc=37819,Hc=37820,zc=37821,bo=36492,Vc=36494,Gc=36495,Fd=36283,Wc=36284,Xc=36285,qc=36286;var _a=2300,va=2301,So=2302,Yc=2400,$c=2401,Zc=2402;var au=3e3,ds=3001,Bd=3200,kd=3201,ou=0,Hd=1,ri="",Nn="srgb",Li="srgb-linear",$l="display-p3",Ja="display-p3-linear",Ma="linear",nn="srgb",ba="rec709",Sa="p3";var Ss=7680;var Kc=519,zd=512,Vd=513,Gd=514,lu=515,Wd=516,Xd=517,qd=518,Yd=519,Jc=35044;var jc="300 es",sl=1035,Ii=2e3,Ea=2001,Ji=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Eo=Math.PI/180,rl=180/Math.PI;function tr(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bn[i&255]+Bn[i>>8&255]+Bn[i>>16&255]+Bn[i>>24&255]+"-"+Bn[t&255]+Bn[t>>8&255]+"-"+Bn[t>>16&15|64]+Bn[t>>24&255]+"-"+Bn[e&63|128]+Bn[e>>8&255]+"-"+Bn[e>>16&255]+Bn[e>>24&255]+Bn[n&255]+Bn[n>>8&255]+Bn[n>>16&255]+Bn[n>>24&255]).toLowerCase()}function Hn(i,t,e){return Math.max(t,Math.min(e,i))}function $d(i,t){return(i%t+t)%t}function To(i,t,e){return(1-e)*i+e*t}function Qc(i){return(i&i-1)===0&&i!==0}function al(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function dr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Kn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Bt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Hn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ce=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],u=n[5],y=n[8],v=s[0],g=s[3],p=s[6],M=s[1],_=s[4],T=s[7],N=s[2],I=s[5],D=s[8];return r[0]=a*v+o*M+l*N,r[3]=a*g+o*_+l*I,r[6]=a*p+o*T+l*D,r[1]=c*v+h*M+f*N,r[4]=c*g+h*_+f*I,r[7]=c*p+h*T+f*D,r[2]=d*v+u*M+y*N,r[5]=d*g+u*_+y*I,r[8]=d*p+u*T+y*D,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,d=o*l-h*r,u=c*r-a*l,y=e*f+n*d+s*u;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/y;return t[0]=f*v,t[1]=(s*c-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=d*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=u*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(wo.makeScale(t,e)),this}rotate(t){return this.premultiply(wo.makeRotation(-t)),this}translate(t,e){return this.premultiply(wo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},wo=new Ce;function cu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ta(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Zd(){let i=Ta("canvas");return i.style.display="block",i}var th={};function xr(i){i in th||(th[i]=!0,console.warn(i))}var eh=new Ce().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),nh=new Ce().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Xr={[Li]:{transfer:Ma,primaries:ba,toReference:i=>i,fromReference:i=>i},[Nn]:{transfer:nn,primaries:ba,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ja]:{transfer:Ma,primaries:Sa,toReference:i=>i.applyMatrix3(nh),fromReference:i=>i.applyMatrix3(eh)},[$l]:{transfer:nn,primaries:Sa,toReference:i=>i.convertSRGBToLinear().applyMatrix3(nh),fromReference:i=>i.applyMatrix3(eh).convertLinearToSRGB()}},Kd=new Set([Li,Ja]),Ge={enabled:!0,_workingColorSpace:Li,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Kd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=Xr[t].toReference,s=Xr[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Xr[i].primaries},getTransfer:function(i){return i===ri?Ma:Xr[i].transfer}};function Ws(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ao(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Es,wa=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Es===void 0&&(Es=Ta("canvas")),Es.width=t.width,Es.height=t.height;let n=Es.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Es}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ta("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ws(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ws(e[n]/255)*255):e[n]=Ws(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Jd=0,Aa=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=tr(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ro(s[a].image)):r.push(Ro(s[a]))}else r=Ro(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ro(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?wa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var jd=0,oi=class i extends Ji{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=gi,s=gi,r=si,a=Sr,o=xi,l=Zi,c=i.DEFAULT_ANISOTROPY,h=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=tr(),this.name="",this.source=new Aa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(xr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ds?Nn:ri),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==jh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case br:t.x=t.x-Math.floor(t.x);break;case gi:t.x=t.x<0?0:1;break;case il:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case br:t.y=t.y-Math.floor(t.y);break;case gi:t.y=t.y<0?0:1;break;case il:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return xr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Nn?ds:au}set encoding(t){xr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===ds?Nn:ri}};oi.DEFAULT_IMAGE=null;oi.DEFAULT_MAPPING=jh;oi.DEFAULT_ANISOTROPY=1;var Dn=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],f=l[8],d=l[1],u=l[5],y=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-v)<.01&&Math.abs(y-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+v)<.1&&Math.abs(y+g)<.1&&Math.abs(c+u+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,T=(u+1)/2,N=(p+1)/2,I=(h+d)/4,D=(f+v)/4,W=(y+g)/4;return _>T&&_>N?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=I/n,r=D/n):T>N?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=I/s,r=W/s):N<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(N),n=D/r,s=W/r),this.set(n,s,r,e),this}let M=Math.sqrt((g-y)*(g-y)+(f-v)*(f-v)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(g-y)/M,this.y=(f-v)/M,this.z=(d-h)/M,this.w=Math.acos((c+u+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ol=class extends Ji{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Dn(0,0,t,e),this.scissorTest=!1,this.viewport=new Dn(0,0,t,e);let s={width:t,height:e,depth:1};n.encoding!==void 0&&(xr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ds?Nn:ri),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:si,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new oi(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Aa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Di=class extends ol{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ra=class extends oi{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ll=class extends oi{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ji=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],d=r[a+0],u=r[a+1],y=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(o===1){t[e+0]=d,t[e+1]=u,t[e+2]=y,t[e+3]=v;return}if(f!==v||l!==d||c!==u||h!==y){let g=1-o,p=l*d+c*u+h*y+f*v,M=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let N=Math.sqrt(_),I=Math.atan2(N,p*M);g=Math.sin(g*I)/N,o=Math.sin(o*I)/N}let T=o*M;if(l=l*g+d*T,c=c*g+u*T,h=h*g+y*T,f=f*g+v*T,g===1-o){let N=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=N,c*=N,h*=N,f*=N}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],d=r[a+1],u=r[a+2],y=r[a+3];return t[e]=o*y+h*f+l*u-c*d,t[e+1]=l*y+h*d+c*f-o*u,t[e+2]=c*y+h*u+o*d-l*f,t[e+3]=h*y-o*f-l*d-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),d=l(n/2),u=l(s/2),y=l(r/2);switch(a){case"XYZ":this._x=d*h*f+c*u*y,this._y=c*u*f-d*h*y,this._z=c*h*y+d*u*f,this._w=c*h*f-d*u*y;break;case"YXZ":this._x=d*h*f+c*u*y,this._y=c*u*f-d*h*y,this._z=c*h*y-d*u*f,this._w=c*h*f+d*u*y;break;case"ZXY":this._x=d*h*f-c*u*y,this._y=c*u*f+d*h*y,this._z=c*h*y+d*u*f,this._w=c*h*f-d*u*y;break;case"ZYX":this._x=d*h*f-c*u*y,this._y=c*u*f+d*h*y,this._z=c*h*y-d*u*f,this._w=c*h*f+d*u*y;break;case"YZX":this._x=d*h*f+c*u*y,this._y=c*u*f+d*h*y,this._z=c*h*y-d*u*f,this._w=c*h*f-d*u*y;break;case"XZY":this._x=d*h*f-c*u*y,this._y=c*u*f-d*h*y,this._z=c*h*y+d*u*f,this._w=c*h*f+d*u*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],d=n+o+f;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(a-s)*u}else if(n>o&&n>f){let u=2*Math.sqrt(1+n-o-f);this._w=(h-l)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+c)/u}else if(o>f){let u=2*Math.sqrt(1+o-n-f);this._w=(r-c)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+f-n-o);this._w=(a-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Hn(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let u=1-e;return this._w=u*a+e*this._w,this._x=u*n+e*this._x,this._y=u*s+e*this._y,this._z=u*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ih.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ih.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Co.copy(this).projectOnVector(t),this.sub(Co)}reflect(t){return this.sub(Co.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Hn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Co=new F,ih=new ji,fs=class{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(di.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(di.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=di.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,di):di.fromBufferAttribute(r,a),di.applyMatrix4(t.matrixWorld),this.expandByPoint(di);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qr.copy(n.boundingBox)),qr.applyMatrix4(t.matrixWorld),this.union(qr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,di),di.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fr),Yr.subVectors(this.max,fr),Ts.subVectors(t.a,fr),ws.subVectors(t.b,fr),As.subVectors(t.c,fr),Hi.subVectors(ws,Ts),zi.subVectors(As,ws),is.subVectors(Ts,As);let e=[0,-Hi.z,Hi.y,0,-zi.z,zi.y,0,-is.z,is.y,Hi.z,0,-Hi.x,zi.z,0,-zi.x,is.z,0,-is.x,-Hi.y,Hi.x,0,-zi.y,zi.x,0,-is.y,is.x,0];return!Po(e,Ts,ws,As,Yr)||(e=[1,0,0,0,1,0,0,0,1],!Po(e,Ts,ws,As,Yr))?!1:($r.crossVectors(Hi,zi),e=[$r.x,$r.y,$r.z],Po(e,Ts,ws,As,Yr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,di).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(di).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Ti=[new F,new F,new F,new F,new F,new F,new F,new F],di=new F,qr=new fs,Ts=new F,ws=new F,As=new F,Hi=new F,zi=new F,is=new F,fr=new F,Yr=new F,$r=new F,ss=new F;function Po(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ss.fromArray(i,r);let o=s.x*Math.abs(ss.x)+s.y*Math.abs(ss.y)+s.z*Math.abs(ss.z),l=t.dot(ss),c=e.dot(ss),h=n.dot(ss);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Qd=new fs,pr=new F,Io=new F,Zs=class{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Qd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;pr.subVectors(t,this.center);let e=pr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(pr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Io.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(pr.copy(t.center).add(Io)),this.expandByPoint(pr.copy(t.center).sub(Io))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},wi=new F,Lo=new F,Zr=new F,Vi=new F,Do=new F,Kr=new F,Uo=new F,Tr=class{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=wi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wi.copy(this.origin).addScaledVector(this.direction,e),wi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Lo.copy(t).add(e).multiplyScalar(.5),Zr.copy(e).sub(t).normalize(),Vi.copy(this.origin).sub(Lo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Zr),o=Vi.dot(this.direction),l=-Vi.dot(Zr),c=Vi.lengthSq(),h=Math.abs(1-a*a),f,d,u,y;if(h>0)if(f=a*l-o,d=a*o-l,y=r*h,f>=0)if(d>=-y)if(d<=y){let v=1/h;f*=v,d*=v,u=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*l)+c;else d<=-y?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c):d<=y?(f=0,d=Math.min(Math.max(-r,-l),r),u=d*(d+2*l)+c):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Lo).addScaledVector(Zr,d),u}intersectSphere(t,e){wi.subVectors(t.center,this.origin);let n=wi.dot(this.direction),s=wi.dot(wi)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,wi)!==null}intersectTriangle(t,e,n,s,r){Do.subVectors(e,t),Kr.subVectors(n,t),Uo.crossVectors(Do,Kr);let a=this.direction.dot(Uo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Vi.subVectors(this.origin,t);let l=o*this.direction.dot(Kr.crossVectors(Vi,Kr));if(l<0)return null;let c=o*this.direction.dot(Do.cross(Vi));if(c<0||l+c>a)return null;let h=-o*Vi.dot(Uo);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Mn=class i{constructor(t,e,n,s,r,a,o,l,c,h,f,d,u,y,v,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,f,d,u,y,v,g)}set(t,e,n,s,r,a,o,l,c,h,f,d,u,y,v,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=d,p[3]=u,p[7]=y,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Rs.setFromMatrixColumn(t,0).length(),r=1/Rs.setFromMatrixColumn(t,1).length(),a=1/Rs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let d=a*h,u=a*f,y=o*h,v=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=u+y*c,e[5]=d-v*c,e[9]=-o*l,e[2]=v-d*c,e[6]=y+u*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,u=l*f,y=c*h,v=c*f;e[0]=d+v*o,e[4]=y*o-u,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=u*o-y,e[6]=v+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,u=l*f,y=c*h,v=c*f;e[0]=d-v*o,e[4]=-a*f,e[8]=y+u*o,e[1]=u+y*o,e[5]=a*h,e[9]=v-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,u=a*f,y=o*h,v=o*f;e[0]=l*h,e[4]=y*c-u,e[8]=d*c+v,e[1]=l*f,e[5]=v*c+d,e[9]=u*c-y,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,u=a*c,y=o*l,v=o*c;e[0]=l*h,e[4]=v-d*f,e[8]=y*f+u,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=u*f+y,e[10]=d-v*f}else if(t.order==="XZY"){let d=a*l,u=a*c,y=o*l,v=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=d*f+v,e[5]=a*h,e[9]=u*f-y,e[2]=y*f-u,e[6]=o*h,e[10]=v*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tf,t,ef)}lookAt(t,e,n){let s=this.elements;return ti.subVectors(t,e),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Gi.crossVectors(n,ti),Gi.lengthSq()===0&&(Math.abs(n.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Gi.crossVectors(n,ti)),Gi.normalize(),Jr.crossVectors(ti,Gi),s[0]=Gi.x,s[4]=Jr.x,s[8]=ti.x,s[1]=Gi.y,s[5]=Jr.y,s[9]=ti.y,s[2]=Gi.z,s[6]=Jr.z,s[10]=ti.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],u=n[13],y=n[2],v=n[6],g=n[10],p=n[14],M=n[3],_=n[7],T=n[11],N=n[15],I=s[0],D=s[4],W=s[8],S=s[12],A=s[1],U=s[5],k=s[9],j=s[13],P=s[2],V=s[6],$=s[10],at=s[14],O=s[3],it=s[7],Z=s[11],ut=s[15];return r[0]=a*I+o*A+l*P+c*O,r[4]=a*D+o*U+l*V+c*it,r[8]=a*W+o*k+l*$+c*Z,r[12]=a*S+o*j+l*at+c*ut,r[1]=h*I+f*A+d*P+u*O,r[5]=h*D+f*U+d*V+u*it,r[9]=h*W+f*k+d*$+u*Z,r[13]=h*S+f*j+d*at+u*ut,r[2]=y*I+v*A+g*P+p*O,r[6]=y*D+v*U+g*V+p*it,r[10]=y*W+v*k+g*$+p*Z,r[14]=y*S+v*j+g*at+p*ut,r[3]=M*I+_*A+T*P+N*O,r[7]=M*D+_*U+T*V+N*it,r[11]=M*W+_*k+T*$+N*Z,r[15]=M*S+_*j+T*at+N*ut,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],d=t[10],u=t[14],y=t[3],v=t[7],g=t[11],p=t[15];return y*(+r*l*f-s*c*f-r*o*d+n*c*d+s*o*u-n*l*u)+v*(+e*l*u-e*c*d+r*a*d-s*a*u+s*c*h-r*l*h)+g*(+e*c*f-e*o*u-r*a*f+n*a*u+r*o*h-n*c*h)+p*(-s*o*h-e*l*f+e*o*d+s*a*f-n*a*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],d=t[10],u=t[11],y=t[12],v=t[13],g=t[14],p=t[15],M=f*g*c-v*d*c+v*l*u-o*g*u-f*l*p+o*d*p,_=y*d*c-h*g*c-y*l*u+a*g*u+h*l*p-a*d*p,T=h*v*c-y*f*c+y*o*u-a*v*u-h*o*p+a*f*p,N=y*f*l-h*v*l-y*o*d+a*v*d+h*o*g-a*f*g,I=e*M+n*_+s*T+r*N;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/I;return t[0]=M*D,t[1]=(v*d*r-f*g*r-v*s*u+n*g*u+f*s*p-n*d*p)*D,t[2]=(o*g*r-v*l*r+v*s*c-n*g*c-o*s*p+n*l*p)*D,t[3]=(f*l*r-o*d*r-f*s*c+n*d*c+o*s*u-n*l*u)*D,t[4]=_*D,t[5]=(h*g*r-y*d*r+y*s*u-e*g*u-h*s*p+e*d*p)*D,t[6]=(y*l*r-a*g*r-y*s*c+e*g*c+a*s*p-e*l*p)*D,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*u+e*l*u)*D,t[8]=T*D,t[9]=(y*f*r-h*v*r-y*n*u+e*v*u+h*n*p-e*f*p)*D,t[10]=(a*v*r-y*o*r+y*n*c-e*v*c-a*n*p+e*o*p)*D,t[11]=(h*o*r-a*f*r-h*n*c+e*f*c+a*n*u-e*o*u)*D,t[12]=N*D,t[13]=(h*v*s-y*f*s+y*n*d-e*v*d-h*n*g+e*f*g)*D,t[14]=(y*o*s-a*v*s-y*n*l+e*v*l+a*n*g-e*o*g)*D,t[15]=(a*f*s-h*o*s+h*n*l-e*f*l-a*n*d+e*o*d)*D,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,d=r*c,u=r*h,y=r*f,v=a*h,g=a*f,p=o*f,M=l*c,_=l*h,T=l*f,N=n.x,I=n.y,D=n.z;return s[0]=(1-(v+p))*N,s[1]=(u+T)*N,s[2]=(y-_)*N,s[3]=0,s[4]=(u-T)*I,s[5]=(1-(d+p))*I,s[6]=(g+M)*I,s[7]=0,s[8]=(y+_)*D,s[9]=(g-M)*D,s[10]=(1-(d+v))*D,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Rs.set(s[0],s[1],s[2]).length(),a=Rs.set(s[4],s[5],s[6]).length(),o=Rs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],fi.copy(this);let c=1/r,h=1/a,f=1/o;return fi.elements[0]*=c,fi.elements[1]*=c,fi.elements[2]*=c,fi.elements[4]*=h,fi.elements[5]*=h,fi.elements[6]*=h,fi.elements[8]*=f,fi.elements[9]*=f,fi.elements[10]*=f,e.setFromRotationMatrix(fi),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Ii){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s),u,y;if(o===Ii)u=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Ea)u=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Ii){let l=this.elements,c=1/(e-t),h=1/(n-s),f=1/(a-r),d=(e+t)*c,u=(n+s)*h,y,v;if(o===Ii)y=(a+r)*f,v=-2*f;else if(o===Ea)y=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=v,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Rs=new F,fi=new Mn,tf=new F(0,0,0),ef=new F(1,1,1),Gi=new F,Jr=new F,ti=new F,sh=new Mn,rh=new ji,Ca=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],d=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(Hn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Hn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Hn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Hn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Hn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-Hn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return sh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return rh.setFromEuler(this),this.setFromQuaternion(rh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ca.DEFAULT_ORDER="XYZ";var wr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},nf=0,ah=new F,Cs=new ji,Ai=new Mn,jr=new F,mr=new F,sf=new F,rf=new ji,oh=new F(1,0,0),lh=new F(0,1,0),ch=new F(0,0,1),af={type:"added"},of={type:"removed"},Xn=class i extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=tr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new F,e=new Ca,n=new ji,s=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Mn},normalMatrix:{value:new Ce}}),this.matrix=new Mn,this.matrixWorld=new Mn,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Cs.setFromAxisAngle(t,e),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(t,e){return Cs.setFromAxisAngle(t,e),this.quaternion.premultiply(Cs),this}rotateX(t){return this.rotateOnAxis(oh,t)}rotateY(t){return this.rotateOnAxis(lh,t)}rotateZ(t){return this.rotateOnAxis(ch,t)}translateOnAxis(t,e){return ah.copy(t).applyQuaternion(this.quaternion),this.position.add(ah.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(oh,t)}translateY(t){return this.translateOnAxis(lh,t)}translateZ(t){return this.translateOnAxis(ch,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?jr.copy(t):jr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(mr,jr,this.up):Ai.lookAt(jr,mr,this.up),this.quaternion.setFromRotationMatrix(Ai),s&&(Ai.extractRotation(s.matrixWorld),Cs.setFromRotationMatrix(Ai),this.quaternion.premultiply(Cs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(af)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(of)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ai.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ai),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,t,sf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,rf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),d=a(t.skeletons),u=a(t.animations),y=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),y.length>0&&(n.nodes=y)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Xn.DEFAULT_UP=new F(0,1,0);Xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var pi=new F,Ri=new F,No=new F,Ci=new F,Ps=new F,Is=new F,hh=new F,Oo=new F,Fo=new F,Bo=new F,Qr=!1,ks=class i{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),pi.subVectors(t,e),s.cross(pi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){pi.subVectors(s,e),Ri.subVectors(n,e),No.subVectors(t,e);let a=pi.dot(pi),o=pi.dot(Ri),l=pi.dot(No),c=Ri.dot(Ri),h=Ri.dot(No),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let d=1/f,u=(c*l-o*h)*d,y=(a*h-o*l)*d;return r.set(1-u-y,y,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getUV(t,e,n,s,r,a,o,l){return Qr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qr=!0),this.getInterpolation(t,e,n,s,r,a,o,l)}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ci.x),l.addScaledVector(a,Ci.y),l.addScaledVector(o,Ci.z),l)}static isFrontFacing(t,e,n,s){return pi.subVectors(n,e),Ri.subVectors(t,e),pi.cross(Ri).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pi.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),pi.cross(Ri).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return Qr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qr=!0),i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Ps.subVectors(s,n),Is.subVectors(r,n),Oo.subVectors(t,n);let l=Ps.dot(Oo),c=Is.dot(Oo);if(l<=0&&c<=0)return e.copy(n);Fo.subVectors(t,s);let h=Ps.dot(Fo),f=Is.dot(Fo);if(h>=0&&f<=h)return e.copy(s);let d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ps,a);Bo.subVectors(t,r);let u=Ps.dot(Bo),y=Is.dot(Bo);if(y>=0&&u<=y)return e.copy(r);let v=u*c-l*y;if(v<=0&&c>=0&&y<=0)return o=c/(c-y),e.copy(n).addScaledVector(Is,o);let g=h*y-u*f;if(g<=0&&f-h>=0&&u-y>=0)return hh.subVectors(r,s),o=(f-h)/(f-h+(u-y)),e.copy(s).addScaledVector(hh,o);let p=1/(g+v+d);return a=v*p,o=d*p,e.copy(n).addScaledVector(Ps,a).addScaledVector(Is,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},hu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},ta={h:0,s:0,l:0};function ko(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ge=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Nn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ge.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Ge.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ge.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Ge.workingColorSpace){if(t=$d(t,1),e=Hn(e,0,1),n=Hn(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ko(a,r,t+1/3),this.g=ko(a,r,t),this.b=ko(a,r,t-1/3)}return Ge.toWorkingColorSpace(this,s),this}setStyle(t,e=Nn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Nn){let n=hu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ws(t.r),this.g=Ws(t.g),this.b=Ws(t.b),this}copyLinearToSRGB(t){return this.r=Ao(t.r),this.g=Ao(t.g),this.b=Ao(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Nn){return Ge.fromWorkingColorSpace(kn.copy(this),t),Math.round(Hn(kn.r*255,0,255))*65536+Math.round(Hn(kn.g*255,0,255))*256+Math.round(Hn(kn.b*255,0,255))}getHexString(t=Nn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ge.workingColorSpace){Ge.fromWorkingColorSpace(kn.copy(this),e);let n=kn.r,s=kn.g,r=kn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Ge.workingColorSpace){return Ge.fromWorkingColorSpace(kn.copy(this),e),t.r=kn.r,t.g=kn.g,t.b=kn.b,t}getStyle(t=Nn){Ge.fromWorkingColorSpace(kn.copy(this),t);let e=kn.r,n=kn.g,s=kn.b;return t!==Nn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Wi),this.setHSL(Wi.h+t,Wi.s+e,Wi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Wi),t.getHSL(ta);let n=To(Wi.h,ta.h,e),s=To(Wi.s,ta.s,e),r=To(Wi.l,ta.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},kn=new ge;ge.NAMES=hu;var lf=0,Qi=class extends Ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=tr(),this.name="",this.type="Material",this.blending=Gs,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qo,this.blendDst=tl,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=ya,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(n.blending=this.blending),this.side!==Ki&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Qo&&(n.blendSrc=this.blendSrc),this.blendDst!==tl&&(n.blendDst=this.blendDst),this.blendEquation!==ls&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ya&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},gn=class extends Qi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Jh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var vn=new F,ea=new Bt,jn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Jc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=qi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ea.fromBufferAttribute(this,e),ea.applyMatrix3(t),this.setXY(e,ea.x,ea.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)vn.fromBufferAttribute(this,e),vn.applyMatrix3(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)vn.fromBufferAttribute(this,e),vn.applyMatrix4(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)vn.fromBufferAttribute(this,e),vn.applyNormalMatrix(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)vn.fromBufferAttribute(this,e),vn.transformDirection(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=dr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Kn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=dr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Kn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=dr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Kn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=dr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Kn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=dr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Kn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Kn(e,this.array),n=Kn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Kn(e,this.array),n=Kn(n,this.array),s=Kn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Kn(e,this.array),n=Kn(n,this.array),s=Kn(s,this.array),r=Kn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Jc&&(t.usage=this.usage),t}};var Pa=class extends jn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ia=class extends jn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var hn=class extends jn{constructor(t,e,n){super(new Float32Array(t),e,n)}};var cf=0,ii=new Mn,Ho=new Xn,Ls=new F,ei=new fs,gr=new fs,Ln=new F,Qn=class i extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=tr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(cu(t)?Ia:Pa)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ce().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ii.makeRotationFromQuaternion(t),this.applyMatrix4(ii),this}rotateX(t){return ii.makeRotationX(t),this.applyMatrix4(ii),this}rotateY(t){return ii.makeRotationY(t),this.applyMatrix4(ii),this}rotateZ(t){return ii.makeRotationZ(t),this.applyMatrix4(ii),this}translate(t,e,n){return ii.makeTranslation(t,e,n),this.applyMatrix4(ii),this}scale(t,e,n){return ii.makeScale(t,e,n),this.applyMatrix4(ii),this}lookAt(t){return Ho.lookAt(t),Ho.updateMatrix(),this.applyMatrix4(Ho.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ls).negate(),this.translate(Ls.x,Ls.y,Ls.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new hn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ei.setFromBufferAttribute(r),this.morphTargetsRelative?(Ln.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(Ln),Ln.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(Ln)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(t){let n=this.boundingSphere.center;if(ei.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];gr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ln.addVectors(ei.min,gr.min),ei.expandByPoint(Ln),Ln.addVectors(ei.max,gr.max),ei.expandByPoint(Ln)):(ei.expandByPoint(gr.min),ei.expandByPoint(gr.max))}ei.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ln.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ln));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ln.fromBufferAttribute(o,c),l&&(Ls.fromBufferAttribute(t,c),Ln.add(Ls)),s=Math.max(s,n.distanceToSquared(Ln))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,s=e.position.array,r=e.normal.array,a=e.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jn(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let A=0;A<o;A++)c[A]=new F,h[A]=new F;let f=new F,d=new F,u=new F,y=new Bt,v=new Bt,g=new Bt,p=new F,M=new F;function _(A,U,k){f.fromArray(s,A*3),d.fromArray(s,U*3),u.fromArray(s,k*3),y.fromArray(a,A*2),v.fromArray(a,U*2),g.fromArray(a,k*2),d.sub(f),u.sub(f),v.sub(y),g.sub(y);let j=1/(v.x*g.y-g.x*v.y);isFinite(j)&&(p.copy(d).multiplyScalar(g.y).addScaledVector(u,-v.y).multiplyScalar(j),M.copy(u).multiplyScalar(v.x).addScaledVector(d,-g.x).multiplyScalar(j),c[A].add(p),c[U].add(p),c[k].add(p),h[A].add(M),h[U].add(M),h[k].add(M))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let A=0,U=T.length;A<U;++A){let k=T[A],j=k.start,P=k.count;for(let V=j,$=j+P;V<$;V+=3)_(n[V+0],n[V+1],n[V+2])}let N=new F,I=new F,D=new F,W=new F;function S(A){D.fromArray(r,A*3),W.copy(D);let U=c[A];N.copy(U),N.sub(D.multiplyScalar(D.dot(U))).normalize(),I.crossVectors(W,U);let j=I.dot(h[A])<0?-1:1;l[A*4]=N.x,l[A*4+1]=N.y,l[A*4+2]=N.z,l[A*4+3]=j}for(let A=0,U=T.length;A<U;++A){let k=T[A],j=k.start,P=k.count;for(let V=j,$=j+P;V<$;V+=3)S(n[V+0]),S(n[V+1]),S(n[V+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new jn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,h=new F,f=new F;if(t)for(let d=0,u=t.count;d<u;d+=3){let y=t.getX(d+0),v=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,y),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,g),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,y),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(y,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,u=e.count;d<u;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ln.fromBufferAttribute(t,e),Ln.normalize(),t.setXYZ(e,Ln.x,Ln.y,Ln.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,f=o.normalized,d=new c.constructor(l.length*h),u=0,y=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?u=l[v]*o.data.stride+o.offset:u=l[v]*h;for(let p=0;p<h;p++)d[y++]=c[u++]}return new jn(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let d=c[h],u=t(d,n);l.push(u)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){let u=c[f];h.push(u.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},uh=new Mn,rs=new Tr,na=new Zs,dh=new F,Ds=new F,Us=new F,Ns=new F,zo=new F,ia=new F,sa=new Bt,ra=new Bt,aa=new Bt,fh=new F,ph=new F,mh=new F,oa=new F,la=new F,Zt=class extends Xn{constructor(t=new Qn,e=new gn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){ia.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(zo.fromBufferAttribute(f,t),a?ia.addScaledVector(zo,h):ia.addScaledVector(zo.sub(e),h))}e.add(ia)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),na.copy(n.boundingSphere),na.applyMatrix4(r),rs.copy(t.ray).recast(t.near),!(na.containsPoint(rs.origin)===!1&&(rs.intersectSphere(na,dh)===null||rs.origin.distanceToSquared(dh)>(t.far-t.near)**2))&&(uh.copy(r).invert(),rs.copy(t.ray).applyMatrix4(uh),!(n.boundingBox!==null&&rs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,rs)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let y=0,v=d.length;y<v;y++){let g=d[y],p=a[g.materialIndex],M=Math.max(g.start,u.start),_=Math.min(o.count,Math.min(g.start+g.count,u.start+u.count));for(let T=M,N=_;T<N;T+=3){let I=o.getX(T),D=o.getX(T+1),W=o.getX(T+2);s=ca(this,p,t,n,c,h,f,I,D,W),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let y=Math.max(0,u.start),v=Math.min(o.count,u.start+u.count);for(let g=y,p=v;g<p;g+=3){let M=o.getX(g),_=o.getX(g+1),T=o.getX(g+2);s=ca(this,a,t,n,c,h,f,M,_,T),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let y=0,v=d.length;y<v;y++){let g=d[y],p=a[g.materialIndex],M=Math.max(g.start,u.start),_=Math.min(l.count,Math.min(g.start+g.count,u.start+u.count));for(let T=M,N=_;T<N;T+=3){let I=T,D=T+1,W=T+2;s=ca(this,p,t,n,c,h,f,I,D,W),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let y=Math.max(0,u.start),v=Math.min(l.count,u.start+u.count);for(let g=y,p=v;g<p;g+=3){let M=g,_=g+1,T=g+2;s=ca(this,a,t,n,c,h,f,M,_,T),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function hf(i,t,e,n,s,r,a,o){let l;if(t.side===Jn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Ki,o),l===null)return null;la.copy(o),la.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(la);return c<e.near||c>e.far?null:{distance:c,point:la.clone(),object:i}}function ca(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Ds),i.getVertexPosition(l,Us),i.getVertexPosition(c,Ns);let h=hf(i,t,e,n,Ds,Us,Ns,oa);if(h){s&&(sa.fromBufferAttribute(s,o),ra.fromBufferAttribute(s,l),aa.fromBufferAttribute(s,c),h.uv=ks.getInterpolation(oa,Ds,Us,Ns,sa,ra,aa,new Bt)),r&&(sa.fromBufferAttribute(r,o),ra.fromBufferAttribute(r,l),aa.fromBufferAttribute(r,c),h.uv1=ks.getInterpolation(oa,Ds,Us,Ns,sa,ra,aa,new Bt),h.uv2=h.uv1),a&&(fh.fromBufferAttribute(a,o),ph.fromBufferAttribute(a,l),mh.fromBufferAttribute(a,c),h.normal=ks.getInterpolation(oa,Ds,Us,Ns,fh,ph,mh,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new F,materialIndex:0};ks.getNormal(Ds,Us,Ns,f.normal),h.face=f}return h}var Tn=class i extends Qn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],d=0,u=0;y("z","y","x",-1,-1,n,e,t,a,r,0),y("z","y","x",1,-1,n,e,-t,a,r,1),y("x","z","y",1,1,t,n,e,s,a,2),y("x","z","y",1,-1,t,n,-e,s,a,3),y("x","y","z",1,-1,t,e,n,s,r,4),y("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new hn(c,3)),this.setAttribute("normal",new hn(h,3)),this.setAttribute("uv",new hn(f,2));function y(v,g,p,M,_,T,N,I,D,W,S){let A=T/D,U=N/W,k=T/2,j=N/2,P=I/2,V=D+1,$=W+1,at=0,O=0,it=new F;for(let Z=0;Z<$;Z++){let ut=Z*U-j;for(let Pt=0;Pt<V;Pt++){let et=Pt*A-k;it[v]=et*M,it[g]=ut*_,it[p]=P,c.push(it.x,it.y,it.z),it[v]=0,it[g]=0,it[p]=I>0?1:-1,h.push(it.x,it.y,it.z),f.push(Pt/D),f.push(1-Z/W),at+=1}}for(let Z=0;Z<W;Z++)for(let ut=0;ut<D;ut++){let Pt=d+ut+V*Z,et=d+ut+V*(Z+1),ot=d+(ut+1)+V*(Z+1),Lt=d+(ut+1)+V*Z;l.push(Pt,et,Lt),l.push(et,ot,Lt),O+=6}o.addGroup(u,O,S),u+=O,d+=at}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ks(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Vn(i){let t={};for(let e=0;e<i.length;e++){let n=Ks(i[e]);for(let s in n)t[s]=n[s]}return t}function uf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function uu(i){return i.getRenderTarget()===null?i.outputColorSpace:Ge.workingColorSpace}var df={clone:Ks,merge:Vn},ff=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ui=class extends Qi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ff,this.fragmentShader=pf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ks(t.uniforms),this.uniformsGroups=uf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},La=class extends Xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mn,this.projectionMatrix=new Mn,this.projectionMatrixInverse=new Mn,this.coordinateSystem=Ii}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Wn=class extends La{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=rl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Eo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rl*2*Math.atan(Math.tan(Eo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Eo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Os=-90,Fs=1,cl=class extends Xn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Wn(Os,Fs,t,e);s.layers=this.layers,this.add(s);let r=new Wn(Os,Fs,t,e);r.layers=this.layers,this.add(r);let a=new Wn(Os,Fs,t,e);a.layers=this.layers,this.add(a);let o=new Wn(Os,Fs,t,e);o.layers=this.layers,this.add(o);let l=new Wn(Os,Fs,t,e);l.layers=this.layers,this.add(l);let c=new Wn(Os,Fs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Ii)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ea)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),y=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(f,d,u),t.xr.enabled=y,n.texture.needsPMREMUpdate=!0}},Da=class extends oi{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:qs,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},hl=class extends Di{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(xr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===ds?Nn:ri),this.texture=new Da(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:si}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Tn(5,5,5),r=new Ui({name:"CubemapFromEquirect",uniforms:Ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jn,blending:Yi});r.uniforms.tEquirect.value=e;let a=new Zt(s,r),o=e.minFilter;return e.minFilter===Sr&&(e.minFilter=si),new cl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Vo=new F,mf=new F,gf=new Ce,mi=class{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Vo.subVectors(n,e).cross(mf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Vo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||gf.getNormalMatrix(t),s=this.coplanarPoint(Vo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},as=new Zs,ha=new F,Ar=class{constructor(t=new mi,e=new mi,n=new mi,s=new mi,r=new mi,a=new mi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ii){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],f=s[6],d=s[7],u=s[8],y=s[9],v=s[10],g=s[11],p=s[12],M=s[13],_=s[14],T=s[15];if(n[0].setComponents(l-r,d-c,g-u,T-p).normalize(),n[1].setComponents(l+r,d+c,g+u,T+p).normalize(),n[2].setComponents(l+a,d+h,g+y,T+M).normalize(),n[3].setComponents(l-a,d-h,g-y,T-M).normalize(),n[4].setComponents(l-o,d-f,g-v,T-_).normalize(),e===Ii)n[5].setComponents(l+o,d+f,g+v,T+_).normalize();else if(e===Ea)n[5].setComponents(o,f,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(t){return as.center.set(0,0,0),as.radius=.7071067811865476,as.applyMatrix4(t.matrixWorld),this.intersectsSphere(as)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ha.x=s.normal.x>0?t.max.x:t.min.x,ha.y=s.normal.y>0?t.max.y:t.min.y,ha.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ha)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function du(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function xf(i,t){let e=t.isWebGL2,n=new WeakMap;function s(c,h){let f=c.array,d=c.usage,u=f.byteLength,y=i.createBuffer();i.bindBuffer(h,y),i.bufferData(h,f,d),c.onUploadCallback();let v;if(f instanceof Float32Array)v=i.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=i.SHORT;else if(f instanceof Uint32Array)v=i.UNSIGNED_INT;else if(f instanceof Int32Array)v=i.INT;else if(f instanceof Int8Array)v=i.BYTE;else if(f instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:y,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:u}}function r(c,h,f){let d=h.array,u=h._updateRange,y=h.updateRanges;if(i.bindBuffer(f,c),u.count===-1&&y.length===0&&i.bufferSubData(f,0,d),y.length!==0){for(let v=0,g=y.length;v<g;v++){let p=y[v];e?i.bufferSubData(f,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):i.bufferSubData(f,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}u.count!==-1&&(e?i.bufferSubData(f,u.offset*d.BYTES_PER_ELEMENT,d,u.offset,u.count):i.bufferSubData(f,u.offset*d.BYTES_PER_ELEMENT,d.subarray(u.offset,u.offset+u.count)),u.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let f=n.get(c);if(f===void 0)n.set(c,s(c,h));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,c,h),f.version=c.version}}return{get:a,remove:o,update:l}}var Ni=class i extends Qn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=t/o,d=e/l,u=[],y=[],v=[],g=[];for(let p=0;p<h;p++){let M=p*d-a;for(let _=0;_<c;_++){let T=_*f-r;y.push(T,-M,0),v.push(0,0,1),g.push(_/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){let _=M+c*p,T=M+c*(p+1),N=M+1+c*(p+1),I=M+1+c*p;u.push(_,T,I),u.push(T,N,I)}this.setIndex(u),this.setAttribute("position",new hn(y,3)),this.setAttribute("normal",new hn(v,3)),this.setAttribute("uv",new hn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},yf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_f=`#ifdef USE_ALPHAHASH
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
#endif`,vf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Sf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ef=`#ifdef USE_AOMAP
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
#endif`,Tf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wf=`#ifdef USE_BATCHING
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
#endif`,Af=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Rf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,If=`#ifdef USE_IRIDESCENCE
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
#endif`,Lf=`#ifdef USE_BUMPMAP
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
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Uf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Of=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ff=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Hf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,zf=`#define PI 3.141592653589793
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
} // validated`,Vf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gf=`vec3 transformedNormal = objectNormal;
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
#endif`,Wf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$f="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zf=`
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
}`,Kf=`#ifdef USE_ENVMAP
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
#endif`,Jf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jf=`#ifdef USE_ENVMAP
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
#endif`,Qf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tp=`#ifdef USE_ENVMAP
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
#endif`,ep=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,np=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ip=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rp=`#ifdef USE_GRADIENTMAP
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
}`,ap=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,op=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hp=`uniform bool receiveShadow;
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
#endif`,up=`#ifdef USE_ENVMAP
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
#endif`,dp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gp=`PhysicalMaterial material;
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
#endif`,xp=`struct PhysicalMaterial {
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
}`,yp=`
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
#endif`,_p=`#if defined( RE_IndirectDiffuse )
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
#endif`,vp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ep=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Tp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ap=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Rp=`#if defined( USE_POINTS_UV )
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
#endif`,Cp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ip=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lp=`#ifdef USE_MORPHNORMALS
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
#endif`,Dp=`#ifdef USE_MORPHTARGETS
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
#endif`,Up=`#ifdef USE_MORPHTARGETS
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
#endif`,Np=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Op=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hp=`#ifdef USE_NORMALMAP
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
#endif`,zp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Yp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$p=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,em=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nm=`float getShadowMask() {
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
}`,im=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sm=`#ifdef USE_SKINNING
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
#endif`,rm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,am=`#ifdef USE_SKINNING
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
#endif`,om=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,um=`#ifdef USE_TRANSMISSION
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
#endif`,dm=`#ifdef USE_TRANSMISSION
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
#endif`,fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,xm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ym=`uniform sampler2D t2D;
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
}`,_m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sm=`#include <common>
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
}`,Em=`#if DEPTH_PACKING == 3200
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
}`,Tm=`#define DISTANCE
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
}`,wm=`#define DISTANCE
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
}`,Am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cm=`uniform float scale;
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
}`,Pm=`uniform vec3 diffuse;
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
}`,Im=`#include <common>
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
}`,Lm=`uniform vec3 diffuse;
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
}`,Dm=`#define LAMBERT
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
}`,Um=`#define LAMBERT
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
}`,Nm=`#define MATCAP
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
}`,Om=`#define MATCAP
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
}`,Fm=`#define NORMAL
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
}`,Bm=`#define NORMAL
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
}`,km=`#define PHONG
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
}`,Hm=`#define PHONG
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
}`,zm=`#define STANDARD
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
}`,Vm=`#define STANDARD
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
}`,Gm=`#define TOON
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
}`,Wm=`#define TOON
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
}`,Xm=`uniform float size;
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
}`,qm=`uniform vec3 diffuse;
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
}`,Ym=`#include <common>
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
}`,$m=`uniform vec3 color;
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
}`,Zm=`uniform float rotation;
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
}`,Km=`uniform vec3 diffuse;
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
}`,we={alphahash_fragment:yf,alphahash_pars_fragment:_f,alphamap_fragment:vf,alphamap_pars_fragment:Mf,alphatest_fragment:bf,alphatest_pars_fragment:Sf,aomap_fragment:Ef,aomap_pars_fragment:Tf,batching_pars_vertex:wf,batching_vertex:Af,begin_vertex:Rf,beginnormal_vertex:Cf,bsdfs:Pf,iridescence_fragment:If,bumpmap_pars_fragment:Lf,clipping_planes_fragment:Df,clipping_planes_pars_fragment:Uf,clipping_planes_pars_vertex:Nf,clipping_planes_vertex:Of,color_fragment:Ff,color_pars_fragment:Bf,color_pars_vertex:kf,color_vertex:Hf,common:zf,cube_uv_reflection_fragment:Vf,defaultnormal_vertex:Gf,displacementmap_pars_vertex:Wf,displacementmap_vertex:Xf,emissivemap_fragment:qf,emissivemap_pars_fragment:Yf,colorspace_fragment:$f,colorspace_pars_fragment:Zf,envmap_fragment:Kf,envmap_common_pars_fragment:Jf,envmap_pars_fragment:jf,envmap_pars_vertex:Qf,envmap_physical_pars_fragment:up,envmap_vertex:tp,fog_vertex:ep,fog_pars_vertex:np,fog_fragment:ip,fog_pars_fragment:sp,gradientmap_pars_fragment:rp,lightmap_fragment:ap,lightmap_pars_fragment:op,lights_lambert_fragment:lp,lights_lambert_pars_fragment:cp,lights_pars_begin:hp,lights_toon_fragment:dp,lights_toon_pars_fragment:fp,lights_phong_fragment:pp,lights_phong_pars_fragment:mp,lights_physical_fragment:gp,lights_physical_pars_fragment:xp,lights_fragment_begin:yp,lights_fragment_maps:_p,lights_fragment_end:vp,logdepthbuf_fragment:Mp,logdepthbuf_pars_fragment:bp,logdepthbuf_pars_vertex:Sp,logdepthbuf_vertex:Ep,map_fragment:Tp,map_pars_fragment:wp,map_particle_fragment:Ap,map_particle_pars_fragment:Rp,metalnessmap_fragment:Cp,metalnessmap_pars_fragment:Pp,morphcolor_vertex:Ip,morphnormal_vertex:Lp,morphtarget_pars_vertex:Dp,morphtarget_vertex:Up,normal_fragment_begin:Np,normal_fragment_maps:Op,normal_pars_fragment:Fp,normal_pars_vertex:Bp,normal_vertex:kp,normalmap_pars_fragment:Hp,clearcoat_normal_fragment_begin:zp,clearcoat_normal_fragment_maps:Vp,clearcoat_pars_fragment:Gp,iridescence_pars_fragment:Wp,opaque_fragment:Xp,packing:qp,premultiplied_alpha_fragment:Yp,project_vertex:$p,dithering_fragment:Zp,dithering_pars_fragment:Kp,roughnessmap_fragment:Jp,roughnessmap_pars_fragment:jp,shadowmap_pars_fragment:Qp,shadowmap_pars_vertex:tm,shadowmap_vertex:em,shadowmask_pars_fragment:nm,skinbase_vertex:im,skinning_pars_vertex:sm,skinning_vertex:rm,skinnormal_vertex:am,specularmap_fragment:om,specularmap_pars_fragment:lm,tonemapping_fragment:cm,tonemapping_pars_fragment:hm,transmission_fragment:um,transmission_pars_fragment:dm,uv_pars_fragment:fm,uv_pars_vertex:pm,uv_vertex:mm,worldpos_vertex:gm,background_vert:xm,background_frag:ym,backgroundCube_vert:_m,backgroundCube_frag:vm,cube_vert:Mm,cube_frag:bm,depth_vert:Sm,depth_frag:Em,distanceRGBA_vert:Tm,distanceRGBA_frag:wm,equirect_vert:Am,equirect_frag:Rm,linedashed_vert:Cm,linedashed_frag:Pm,meshbasic_vert:Im,meshbasic_frag:Lm,meshlambert_vert:Dm,meshlambert_frag:Um,meshmatcap_vert:Nm,meshmatcap_frag:Om,meshnormal_vert:Fm,meshnormal_frag:Bm,meshphong_vert:km,meshphong_frag:Hm,meshphysical_vert:zm,meshphysical_frag:Vm,meshtoon_vert:Gm,meshtoon_frag:Wm,points_vert:Xm,points_frag:qm,shadow_vert:Ym,shadow_frag:$m,sprite_vert:Zm,sprite_frag:Km},It={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ce},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ce}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ce},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0},uvTransform:{value:new Ce}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ce},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0}}},Si={basic:{uniforms:Vn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:we.meshbasic_vert,fragmentShader:we.meshbasic_frag},lambert:{uniforms:Vn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new ge(0)}}]),vertexShader:we.meshlambert_vert,fragmentShader:we.meshlambert_frag},phong:{uniforms:Vn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30}}]),vertexShader:we.meshphong_vert,fragmentShader:we.meshphong_frag},standard:{uniforms:Vn([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag},toon:{uniforms:Vn([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new ge(0)}}]),vertexShader:we.meshtoon_vert,fragmentShader:we.meshtoon_frag},matcap:{uniforms:Vn([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:we.meshmatcap_vert,fragmentShader:we.meshmatcap_frag},points:{uniforms:Vn([It.points,It.fog]),vertexShader:we.points_vert,fragmentShader:we.points_frag},dashed:{uniforms:Vn([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:we.linedashed_vert,fragmentShader:we.linedashed_frag},depth:{uniforms:Vn([It.common,It.displacementmap]),vertexShader:we.depth_vert,fragmentShader:we.depth_frag},normal:{uniforms:Vn([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:we.meshnormal_vert,fragmentShader:we.meshnormal_frag},sprite:{uniforms:Vn([It.sprite,It.fog]),vertexShader:we.sprite_vert,fragmentShader:we.sprite_frag},background:{uniforms:{uvTransform:{value:new Ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:we.background_vert,fragmentShader:we.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:we.backgroundCube_vert,fragmentShader:we.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:we.cube_vert,fragmentShader:we.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:we.equirect_vert,fragmentShader:we.equirect_frag},distanceRGBA:{uniforms:Vn([It.common,It.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:we.distanceRGBA_vert,fragmentShader:we.distanceRGBA_frag},shadow:{uniforms:Vn([It.lights,It.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:we.shadow_vert,fragmentShader:we.shadow_frag}};Si.physical={uniforms:Vn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ce},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ce},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ce},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ce},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ce},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ce},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ce}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag};var ua={r:0,b:0,g:0};function Jm(i,t,e,n,s,r,a){let o=new ge(0),l=r===!0?0:1,c,h,f=null,d=0,u=null;function y(g,p){let M=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?e:t).get(_)),_===null?v(o,l):_&&_.isColor&&(v(_,1),M=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Ka)?(h===void 0&&(h=new Zt(new Tn(1,1,1),new Ui({name:"BackgroundCubeMaterial",uniforms:Ks(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,I,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=Ge.getTransfer(_.colorSpace)!==nn,(f!==_||d!==_.version||u!==i.toneMapping)&&(h.material.needsUpdate=!0,f=_,d=_.version,u=i.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Zt(new Ni(2,2),new Ui({name:"BackgroundMaterial",uniforms:Ks(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=Ge.getTransfer(_.colorSpace)!==nn,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||d!==_.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,f=_,d=_.version,u=i.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function v(g,p){g.getRGB(ua,uu(i)),n.buffers.color.setClear(ua.r,ua.g,ua.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(g,p=1){o.set(g),l=p,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,v(o,l)},render:y}}function jm(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=g(null),c=l,h=!1;function f(P,V,$,at,O){let it=!1;if(a){let Z=v(at,$,V);c!==Z&&(c=Z,u(c.object)),it=p(P,at,$,O),it&&M(P,at,$,O)}else{let Z=V.wireframe===!0;(c.geometry!==at.id||c.program!==$.id||c.wireframe!==Z)&&(c.geometry=at.id,c.program=$.id,c.wireframe=Z,it=!0)}O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(it||h)&&(h=!1,W(P,V,$,at),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function u(P){return n.isWebGL2?i.bindVertexArray(P):r.bindVertexArrayOES(P)}function y(P){return n.isWebGL2?i.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function v(P,V,$){let at=$.wireframe===!0,O=o[P.id];O===void 0&&(O={},o[P.id]=O);let it=O[V.id];it===void 0&&(it={},O[V.id]=it);let Z=it[at];return Z===void 0&&(Z=g(d()),it[at]=Z),Z}function g(P){let V=[],$=[],at=[];for(let O=0;O<s;O++)V[O]=0,$[O]=0,at[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:$,attributeDivisors:at,object:P,attributes:{},index:null}}function p(P,V,$,at){let O=c.attributes,it=V.attributes,Z=0,ut=$.getAttributes();for(let Pt in ut)if(ut[Pt].location>=0){let ot=O[Pt],Lt=it[Pt];if(Lt===void 0&&(Pt==="instanceMatrix"&&P.instanceMatrix&&(Lt=P.instanceMatrix),Pt==="instanceColor"&&P.instanceColor&&(Lt=P.instanceColor)),ot===void 0||ot.attribute!==Lt||Lt&&ot.data!==Lt.data)return!0;Z++}return c.attributesNum!==Z||c.index!==at}function M(P,V,$,at){let O={},it=V.attributes,Z=0,ut=$.getAttributes();for(let Pt in ut)if(ut[Pt].location>=0){let ot=it[Pt];ot===void 0&&(Pt==="instanceMatrix"&&P.instanceMatrix&&(ot=P.instanceMatrix),Pt==="instanceColor"&&P.instanceColor&&(ot=P.instanceColor));let Lt={};Lt.attribute=ot,ot&&ot.data&&(Lt.data=ot.data),O[Pt]=Lt,Z++}c.attributes=O,c.attributesNum=Z,c.index=at}function _(){let P=c.newAttributes;for(let V=0,$=P.length;V<$;V++)P[V]=0}function T(P){N(P,0)}function N(P,V){let $=c.newAttributes,at=c.enabledAttributes,O=c.attributeDivisors;$[P]=1,at[P]===0&&(i.enableVertexAttribArray(P),at[P]=1),O[P]!==V&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,V),O[P]=V)}function I(){let P=c.newAttributes,V=c.enabledAttributes;for(let $=0,at=V.length;$<at;$++)V[$]!==P[$]&&(i.disableVertexAttribArray($),V[$]=0)}function D(P,V,$,at,O,it,Z){Z===!0?i.vertexAttribIPointer(P,V,$,O,it):i.vertexAttribPointer(P,V,$,at,O,it)}function W(P,V,$,at){if(n.isWebGL2===!1&&(P.isInstancedMesh||at.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();let O=at.attributes,it=$.getAttributes(),Z=V.defaultAttributeValues;for(let ut in it){let Pt=it[ut];if(Pt.location>=0){let et=O[ut];if(et===void 0&&(ut==="instanceMatrix"&&P.instanceMatrix&&(et=P.instanceMatrix),ut==="instanceColor"&&P.instanceColor&&(et=P.instanceColor)),et!==void 0){let ot=et.normalized,Lt=et.itemSize,Xt=e.get(et);if(Xt===void 0)continue;let Ft=Xt.buffer,he=Xt.type,ue=Xt.bytesPerElement,Jt=n.isWebGL2===!0&&(he===i.INT||he===i.UNSIGNED_INT||et.gpuType===Qh);if(et.isInterleavedBufferAttribute){let Ae=et.data,X=Ae.stride,un=et.offset;if(Ae.isInstancedInterleavedBuffer){for(let $t=0;$t<Pt.locationSize;$t++)N(Pt.location+$t,Ae.meshPerAttribute);P.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let $t=0;$t<Pt.locationSize;$t++)T(Pt.location+$t);i.bindBuffer(i.ARRAY_BUFFER,Ft);for(let $t=0;$t<Pt.locationSize;$t++)D(Pt.location+$t,Lt/Pt.locationSize,he,ot,X*ue,(un+Lt/Pt.locationSize*$t)*ue,Jt)}else{if(et.isInstancedBufferAttribute){for(let Ae=0;Ae<Pt.locationSize;Ae++)N(Pt.location+Ae,et.meshPerAttribute);P.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Ae=0;Ae<Pt.locationSize;Ae++)T(Pt.location+Ae);i.bindBuffer(i.ARRAY_BUFFER,Ft);for(let Ae=0;Ae<Pt.locationSize;Ae++)D(Pt.location+Ae,Lt/Pt.locationSize,he,ot,Lt*ue,Lt/Pt.locationSize*Ae*ue,Jt)}}else if(Z!==void 0){let ot=Z[ut];if(ot!==void 0)switch(ot.length){case 2:i.vertexAttrib2fv(Pt.location,ot);break;case 3:i.vertexAttrib3fv(Pt.location,ot);break;case 4:i.vertexAttrib4fv(Pt.location,ot);break;default:i.vertexAttrib1fv(Pt.location,ot)}}}}I()}function S(){k();for(let P in o){let V=o[P];for(let $ in V){let at=V[$];for(let O in at)y(at[O].object),delete at[O];delete V[$]}delete o[P]}}function A(P){if(o[P.id]===void 0)return;let V=o[P.id];for(let $ in V){let at=V[$];for(let O in at)y(at[O].object),delete at[O];delete V[$]}delete o[P.id]}function U(P){for(let V in o){let $=o[V];if($[P.id]===void 0)continue;let at=$[P.id];for(let O in at)y(at[O].object),delete at[O];delete $[P.id]}}function k(){j(),h=!0,c!==l&&(c=l,u(c.object))}function j(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:k,resetDefaultState:j,dispose:S,releaseStatesOfGeometry:A,releaseStatesOfProgram:U,initAttributes:_,enableAttribute:T,disableUnusedAttributes:I}}function Qm(i,t,e,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,f){i.drawArrays(r,h,f),e.update(f,r,1)}function l(h,f,d){if(d===0)return;let u,y;if(s)u=i,y="drawArraysInstanced";else if(u=t.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[y](r,h,f,d),e.update(f,r,d)}function c(h,f,d){if(d===0)return;let u=t.get("WEBGL_multi_draw");if(u===null)for(let y=0;y<d;y++)this.render(h[y],f[y]);else{u.multiDrawArraysWEBGL(r,h,0,f,0,d);let y=0;for(let v=0;v<d;v++)y+=f[v];e.update(y,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function tg(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let D=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,T=a||t.has("OES_texture_float"),N=_&&T,I=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:d,maxTextureSize:u,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:M,vertexTextures:_,floatFragmentTextures:T,floatVertexTextures:N,maxSamples:I}}function eg(i){let t=this,e=null,n=0,s=!1,r=!1,a=new mi,o=new Ce,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let u=f.length!==0||d||n!==0||s;return s=d,n=f.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=h(f,d,0)},this.setState=function(f,d,u){let y=f.clippingPlanes,v=f.clipIntersection,g=f.clipShadows,p=i.get(f);if(!s||y===null||y.length===0||r&&!g)r?h(null):c();else{let M=r?0:n,_=M*4,T=p.clippingState||null;l.value=T,T=h(y,d,_,u);for(let N=0;N!==_;++N)T[N]=e[N];p.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,d,u,y){let v=f!==null?f.length:0,g=null;if(v!==0){if(g=l.value,y!==!0||g===null){let p=u+v*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,T=u;_!==v;++_,T+=4)a.copy(f[_]).applyMatrix4(M,o),a.normal.toArray(g,T),g[T+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}function ng(i){let t=new WeakMap;function e(a,o){return o===el?a.mapping=qs:o===nl&&(a.mapping=Ys),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===el||o===nl)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new hl(l.height/2);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ua=class extends La{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Hs=4,gh=[.125,.215,.35,.446,.526,.582],cs=20,Go=new Ua,xh=new ge,Wo=null,Xo=0,qo=0,os=(1+Math.sqrt(5))/2,Bs=1/os,yh=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,os,Bs),new F(0,os,-Bs),new F(Bs,0,os),new F(-Bs,0,os),new F(os,Bs,0),new F(-os,Bs,0)],Na=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Wo=this._renderer.getRenderTarget(),Xo=this._renderer.getActiveCubeFace(),qo=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Wo,Xo,qo),t.scissorTest=!1,da(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===qs||t.mapping===Ys?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Wo=this._renderer.getRenderTarget(),Xo=this._renderer.getActiveCubeFace(),qo=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:si,minFilter:si,generateMipmaps:!1,type:Er,format:xi,colorSpace:Li,depthBuffer:!1},s=_h(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_h(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ig(r)),this._blurMaterial=sg(r,t,e)}return s}_compileMaterial(t){let e=new Zt(this._lodPlanes[0],t);this._renderer.compile(e,Go)}_sceneToCubeUV(t,e,n,s){let o=new Wn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(xh),h.toneMapping=$i,h.autoClear=!1;let u=new gn({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1}),y=new Zt(new Tn,u),v=!1,g=t.background;g?g.isColor&&(u.color.copy(g),t.background=null,v=!0):(u.color.copy(xh),v=!0);for(let p=0;p<6;p++){let M=p%3;M===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):M===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let _=this._cubeSize;da(s,M*_,p>2?_:0,_,_),h.setRenderTarget(s),v&&h.render(y,o),h.render(t,o)}y.geometry.dispose(),y.material.dispose(),h.toneMapping=d,h.autoClear=f,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===qs||t.mapping===Ys;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Zt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;da(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Go)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=yh[(s-1)%yh.length];this._blur(t,s-1,s,r,a)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new Zt(this._lodPlanes[s],c),d=c.uniforms,u=this._sizeLods[n]-1,y=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*cs-1),v=r/y,g=isFinite(r)?1+Math.floor(h*v):cs;g>cs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${cs}`);let p=[],M=0;for(let D=0;D<cs;++D){let W=D/v,S=Math.exp(-W*W/2);p.push(S),D===0?M+=S:D<g&&(M+=2*S)}for(let D=0;D<p.length;D++)p[D]=p[D]/M;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:_}=this;d.dTheta.value=y,d.mipInt.value=_-n;let T=this._sizeLods[s],N=3*T*(s>_-Hs?s-_+Hs:0),I=4*(this._cubeSize-T);da(e,N,I,3*T,2*T),l.setRenderTarget(e),l.render(f,Go)}};function ig(i){let t=[],e=[],n=[],s=i,r=i-Hs+1+gh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Hs?l=gh[a-i+Hs-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],u=6,y=6,v=3,g=2,p=1,M=new Float32Array(v*y*u),_=new Float32Array(g*y*u),T=new Float32Array(p*y*u);for(let I=0;I<u;I++){let D=I%3*2/3-1,W=I>2?0:-1,S=[D,W,0,D+2/3,W,0,D+2/3,W+1,0,D,W,0,D+2/3,W+1,0,D,W+1,0];M.set(S,v*y*I),_.set(d,g*y*I);let A=[I,I,I,I,I,I];T.set(A,p*y*I)}let N=new Qn;N.setAttribute("position",new jn(M,v)),N.setAttribute("uv",new jn(_,g)),N.setAttribute("faceIndex",new jn(T,p)),t.push(N),s>Hs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function _h(i,t,e){let n=new Di(i,t,e);return n.texture.mapping=Ka,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function da(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function sg(i,t,e){let n=new Float32Array(cs),s=new F(0,1,0);return new Ui({name:"SphericalGaussianBlur",defines:{n:cs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Zl(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function vh(){return new Ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zl(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Mh(){return new Ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Zl(){return`

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
	`}function rg(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===el||l===nl,h=l===qs||l===Ys;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=t.get(o);return e===null&&(e=new Na(i)),f=c?e.fromEquirectangular(o,f):e.fromCubemap(o,f),t.set(o,f),f.texture}else{if(t.has(o))return t.get(o).texture;{let f=o.image;if(c&&f&&f.height>0||h&&f&&s(f)){e===null&&(e=new Na(i));let d=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function ag(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function og(i,t,e,n){let s={},r=new WeakMap;function a(f){let d=f.target;d.index!==null&&t.remove(d.index);for(let y in d.attributes)t.remove(d.attributes[y]);for(let y in d.morphAttributes){let v=d.morphAttributes[y];for(let g=0,p=v.length;g<p;g++)t.remove(v[g])}d.removeEventListener("dispose",a),delete s[d.id];let u=r.get(d);u&&(t.remove(u),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(f,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(f){let d=f.attributes;for(let y in d)t.update(d[y],i.ARRAY_BUFFER);let u=f.morphAttributes;for(let y in u){let v=u[y];for(let g=0,p=v.length;g<p;g++)t.update(v[g],i.ARRAY_BUFFER)}}function c(f){let d=[],u=f.index,y=f.attributes.position,v=0;if(u!==null){let M=u.array;v=u.version;for(let _=0,T=M.length;_<T;_+=3){let N=M[_+0],I=M[_+1],D=M[_+2];d.push(N,I,I,D,D,N)}}else if(y!==void 0){let M=y.array;v=y.version;for(let _=0,T=M.length/3-1;_<T;_+=3){let N=_+0,I=_+1,D=_+2;d.push(N,I,I,D,D,N)}}else return;let g=new(cu(d)?Ia:Pa)(d,1);g.version=v;let p=r.get(f);p&&t.remove(p),r.set(f,g)}function h(f){let d=r.get(f);if(d){let u=f.index;u!==null&&d.version<u.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function lg(i,t,e,n){let s=n.isWebGL2,r;function a(u){r=u}let o,l;function c(u){o=u.type,l=u.bytesPerElement}function h(u,y){i.drawElements(r,y,o,u*l),e.update(y,r,1)}function f(u,y,v){if(v===0)return;let g,p;if(s)g=i,p="drawElementsInstanced";else if(g=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[p](r,y,o,u*l,v),e.update(y,r,v)}function d(u,y,v){if(v===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<v;p++)this.render(u[p]/l,y[p]);else{g.multiDrawElementsWEBGL(r,y,0,o,u,0,v);let p=0;for(let M=0;M<v;M++)p+=y[M];e.update(p,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=f,this.renderMultiDraw=d}function cg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function hg(i,t){return i[0]-t[0]}function ug(i,t){return Math.abs(t[1])-Math.abs(i[1])}function dg(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,a=new Dn,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,f){let d=c.morphTargetInfluences;if(t.isWebGL2===!0){let u=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,y=u!==void 0?u.length:0,v=r.get(h);if(v===void 0||v.count!==y){let P=function(){k.dispose(),r.delete(h),h.removeEventListener("dispose",P)};v!==void 0&&v.texture.dispose();let M=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,N=h.morphAttributes.position||[],I=h.morphAttributes.normal||[],D=h.morphAttributes.color||[],W=0;M===!0&&(W=1),_===!0&&(W=2),T===!0&&(W=3);let S=h.attributes.position.count*W,A=1;S>t.maxTextureSize&&(A=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let U=new Float32Array(S*A*4*y),k=new Ra(U,S,A,y);k.type=qi,k.needsUpdate=!0;let j=W*4;for(let V=0;V<y;V++){let $=N[V],at=I[V],O=D[V],it=S*A*4*V;for(let Z=0;Z<$.count;Z++){let ut=Z*j;M===!0&&(a.fromBufferAttribute($,Z),U[it+ut+0]=a.x,U[it+ut+1]=a.y,U[it+ut+2]=a.z,U[it+ut+3]=0),_===!0&&(a.fromBufferAttribute(at,Z),U[it+ut+4]=a.x,U[it+ut+5]=a.y,U[it+ut+6]=a.z,U[it+ut+7]=0),T===!0&&(a.fromBufferAttribute(O,Z),U[it+ut+8]=a.x,U[it+ut+9]=a.y,U[it+ut+10]=a.z,U[it+ut+11]=O.itemSize===4?a.w:1)}}v={count:y,texture:k,size:new Bt(S,A)},r.set(h,v),h.addEventListener("dispose",P)}let g=0;for(let M=0;M<d.length;M++)g+=d[M];let p=h.morphTargetsRelative?1:1-g;f.getUniforms().setValue(i,"morphTargetBaseInfluence",p),f.getUniforms().setValue(i,"morphTargetInfluences",d),f.getUniforms().setValue(i,"morphTargetsTexture",v.texture,e),f.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}else{let u=d===void 0?0:d.length,y=n[h.id];if(y===void 0||y.length!==u){y=[];for(let _=0;_<u;_++)y[_]=[_,0];n[h.id]=y}for(let _=0;_<u;_++){let T=y[_];T[0]=_,T[1]=d[_]}y.sort(ug);for(let _=0;_<8;_++)_<u&&y[_][1]?(o[_][0]=y[_][0],o[_][1]=y[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(hg);let v=h.morphAttributes.position,g=h.morphAttributes.normal,p=0;for(let _=0;_<8;_++){let T=o[_],N=T[0],I=T[1];N!==Number.MAX_SAFE_INTEGER&&I?(v&&h.getAttribute("morphTarget"+_)!==v[N]&&h.setAttribute("morphTarget"+_,v[N]),g&&h.getAttribute("morphNormal"+_)!==g[N]&&h.setAttribute("morphNormal"+_,g[N]),s[_]=I,p+=I):(v&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),g&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),s[_]=0)}let M=h.morphTargetsRelative?1:1-p;f.getUniforms().setValue(i,"morphTargetBaseInfluence",M),f.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function fg(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,f=t.get(l,h);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Oa=class extends oi{constructor(t,e,n,s,r,a,o,l,c,h){if(h=h!==void 0?h:us,h!==us&&h!==$s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===us&&(n=Xi),n===void 0&&h===$s&&(n=hs),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Gn,this.minFilter=l!==void 0?l:Gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},fu=new oi,pu=new Oa(1,1);pu.compareFunction=lu;var mu=new Ra,gu=new ll,xu=new Da,bh=[],Sh=[],Eh=new Float32Array(16),Th=new Float32Array(9),wh=new Float32Array(4);function er(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=bh[s];if(r===void 0&&(r=new Float32Array(s),bh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function wn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function An(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ja(i,t){let e=Sh[t];e===void 0&&(e=new Int32Array(t),Sh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function pg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function mg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(wn(e,t))return;i.uniform2fv(this.addr,t),An(e,t)}}function gg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(wn(e,t))return;i.uniform3fv(this.addr,t),An(e,t)}}function xg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(wn(e,t))return;i.uniform4fv(this.addr,t),An(e,t)}}function yg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(wn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),An(e,t)}else{if(wn(e,n))return;wh.set(n),i.uniformMatrix2fv(this.addr,!1,wh),An(e,n)}}function _g(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(wn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),An(e,t)}else{if(wn(e,n))return;Th.set(n),i.uniformMatrix3fv(this.addr,!1,Th),An(e,n)}}function vg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(wn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),An(e,t)}else{if(wn(e,n))return;Eh.set(n),i.uniformMatrix4fv(this.addr,!1,Eh),An(e,n)}}function Mg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function bg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(wn(e,t))return;i.uniform2iv(this.addr,t),An(e,t)}}function Sg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(wn(e,t))return;i.uniform3iv(this.addr,t),An(e,t)}}function Eg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(wn(e,t))return;i.uniform4iv(this.addr,t),An(e,t)}}function Tg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function wg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(wn(e,t))return;i.uniform2uiv(this.addr,t),An(e,t)}}function Ag(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(wn(e,t))return;i.uniform3uiv(this.addr,t),An(e,t)}}function Rg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(wn(e,t))return;i.uniform4uiv(this.addr,t),An(e,t)}}function Cg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?pu:fu;e.setTexture2D(t||r,s)}function Pg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||gu,s)}function Ig(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||xu,s)}function Lg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||mu,s)}function Dg(i){switch(i){case 5126:return pg;case 35664:return mg;case 35665:return gg;case 35666:return xg;case 35674:return yg;case 35675:return _g;case 35676:return vg;case 5124:case 35670:return Mg;case 35667:case 35671:return bg;case 35668:case 35672:return Sg;case 35669:case 35673:return Eg;case 5125:return Tg;case 36294:return wg;case 36295:return Ag;case 36296:return Rg;case 35678:case 36198:case 36298:case 36306:case 35682:return Cg;case 35679:case 36299:case 36307:return Pg;case 35680:case 36300:case 36308:case 36293:return Ig;case 36289:case 36303:case 36311:case 36292:return Lg}}function Ug(i,t){i.uniform1fv(this.addr,t)}function Ng(i,t){let e=er(t,this.size,2);i.uniform2fv(this.addr,e)}function Og(i,t){let e=er(t,this.size,3);i.uniform3fv(this.addr,e)}function Fg(i,t){let e=er(t,this.size,4);i.uniform4fv(this.addr,e)}function Bg(i,t){let e=er(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function kg(i,t){let e=er(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Hg(i,t){let e=er(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function zg(i,t){i.uniform1iv(this.addr,t)}function Vg(i,t){i.uniform2iv(this.addr,t)}function Gg(i,t){i.uniform3iv(this.addr,t)}function Wg(i,t){i.uniform4iv(this.addr,t)}function Xg(i,t){i.uniform1uiv(this.addr,t)}function qg(i,t){i.uniform2uiv(this.addr,t)}function Yg(i,t){i.uniform3uiv(this.addr,t)}function $g(i,t){i.uniform4uiv(this.addr,t)}function Zg(i,t,e){let n=this.cache,s=t.length,r=ja(e,s);wn(n,r)||(i.uniform1iv(this.addr,r),An(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||fu,r[a])}function Kg(i,t,e){let n=this.cache,s=t.length,r=ja(e,s);wn(n,r)||(i.uniform1iv(this.addr,r),An(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||gu,r[a])}function Jg(i,t,e){let n=this.cache,s=t.length,r=ja(e,s);wn(n,r)||(i.uniform1iv(this.addr,r),An(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||xu,r[a])}function jg(i,t,e){let n=this.cache,s=t.length,r=ja(e,s);wn(n,r)||(i.uniform1iv(this.addr,r),An(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||mu,r[a])}function Qg(i){switch(i){case 5126:return Ug;case 35664:return Ng;case 35665:return Og;case 35666:return Fg;case 35674:return Bg;case 35675:return kg;case 35676:return Hg;case 5124:case 35670:return zg;case 35667:case 35671:return Vg;case 35668:case 35672:return Gg;case 35669:case 35673:return Wg;case 5125:return Xg;case 36294:return qg;case 36295:return Yg;case 36296:return $g;case 35678:case 36198:case 36298:case 36306:case 35682:return Zg;case 35679:case 36299:case 36307:return Kg;case 35680:case 36300:case 36308:case 36293:return Jg;case 36289:case 36303:case 36311:case 36292:return jg}}var ul=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Dg(e.type)}},dl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Qg(e.type)}},fl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Yo=/(\w+)(\])?(\[|\.)?/g;function Ah(i,t){i.seq.push(t),i.map[t.id]=t}function t0(i,t,e){let n=i.name,s=n.length;for(Yo.lastIndex=0;;){let r=Yo.exec(n),a=Yo.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ah(e,c===void 0?new ul(o,i,t):new dl(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new fl(o),Ah(e,f)),e=f}}}var Xs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);t0(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Rh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var e0=37297,n0=0;function i0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function s0(i){let t=Ge.getPrimaries(Ge.workingColorSpace),e=Ge.getPrimaries(i),n;switch(t===e?n="":t===Sa&&e===ba?n="LinearDisplayP3ToLinearSRGB":t===ba&&e===Sa&&(n="LinearSRGBToLinearDisplayP3"),i){case Li:case Ja:return[n,"LinearTransferOETF"];case Nn:case $l:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ch(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+i0(i.getShaderSource(t),a)}else return s}function r0(i,t){let e=s0(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function a0(i,t){let e;switch(t){case Sd:e="Linear";break;case Ed:e="Reinhard";break;case Td:e="OptimizedCineon";break;case wd:e="ACESFilmic";break;case Rd:e="AgX";break;case Ad:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function o0(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(zs).join(`
`)}function l0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(zs).join(`
`)}function c0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function h0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function zs(i){return i!==""}function Ph(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ih(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var u0=/^[ \t]*#include +<([\w\d./]+)>/gm;function pl(i){return i.replace(u0,f0)}var d0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function f0(i,t){let e=we[t];if(e===void 0){let n=d0.get(t);if(n!==void 0)e=we[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return pl(e)}var p0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lh(i){return i.replace(p0,m0)}function m0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Dh(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function g0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Kh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ql?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Pi&&(t="SHADOWMAP_TYPE_VSM"),t}function x0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case qs:case Ys:t="ENVMAP_TYPE_CUBE";break;case Ka:t="ENVMAP_TYPE_CUBE_UV";break}return t}function y0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ys:t="ENVMAP_MODE_REFRACTION";break}return t}function _0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Jh:t="ENVMAP_BLENDING_MULTIPLY";break;case Md:t="ENVMAP_BLENDING_MIX";break;case bd:t="ENVMAP_BLENDING_ADD";break}return t}function v0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function M0(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=g0(e),c=x0(e),h=y0(e),f=_0(e),d=v0(e),u=e.isWebGL2?"":o0(e),y=l0(e),v=c0(r),g=s.createProgram(),p,M,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(zs).join(`
`),p.length>0&&(p+=`
`),M=[u,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(zs).join(`
`),M.length>0&&(M+=`
`)):(p=[Dh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zs).join(`
`),M=[u,Dh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==$i?"#define TONE_MAPPING":"",e.toneMapping!==$i?we.tonemapping_pars_fragment:"",e.toneMapping!==$i?a0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",we.colorspace_pars_fragment,r0("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(zs).join(`
`)),a=pl(a),a=Ph(a,e),a=Ih(a,e),o=pl(o),o=Ph(o,e),o=Ih(o,e),a=Lh(a),o=Lh(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[y,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,M=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===jc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===jc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);let T=_+p+a,N=_+M+o,I=Rh(s,s.VERTEX_SHADER,T),D=Rh(s,s.FRAGMENT_SHADER,N);s.attachShader(g,I),s.attachShader(g,D),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function W(k){if(i.debug.checkShaderErrors){let j=s.getProgramInfoLog(g).trim(),P=s.getShaderInfoLog(I).trim(),V=s.getShaderInfoLog(D).trim(),$=!0,at=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,I,D);else{let O=Ch(s,I,"vertex"),it=Ch(s,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Program Info Log: `+j+`
`+O+`
`+it)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(P===""||V==="")&&(at=!1);at&&(k.diagnostics={runnable:$,programLog:j,vertexShader:{log:P,prefix:p},fragmentShader:{log:V,prefix:M}})}s.deleteShader(I),s.deleteShader(D),S=new Xs(s,g),A=h0(s,g)}let S;this.getUniforms=function(){return S===void 0&&W(this),S};let A;this.getAttributes=function(){return A===void 0&&W(this),A};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(g,e0)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=n0++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=I,this.fragmentShader=D,this}var b0=0,ml=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new gl(t),e.set(t,n)),n}},gl=class{constructor(t){this.id=b0++,this.code=t,this.usedTimes=0}};function S0(i,t,e,n,s,r,a){let o=new wr,l=new ml,c=[],h=s.isWebGL2,f=s.logarithmicDepthBuffer,d=s.vertexTextures,u=s.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return S===0?"uv":`uv${S}`}function g(S,A,U,k,j){let P=k.fog,V=j.geometry,$=S.isMeshStandardMaterial?k.environment:null,at=(S.isMeshStandardMaterial?e:t).get(S.envMap||$),O=at&&at.mapping===Ka?at.image.height:null,it=y[S.type];S.precision!==null&&(u=s.getMaxPrecision(S.precision),u!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",u,"instead."));let Z=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ut=Z!==void 0?Z.length:0,Pt=0;V.morphAttributes.position!==void 0&&(Pt=1),V.morphAttributes.normal!==void 0&&(Pt=2),V.morphAttributes.color!==void 0&&(Pt=3);let et,ot,Lt,Xt;if(it){let sn=Si[it];et=sn.vertexShader,ot=sn.fragmentShader}else et=S.vertexShader,ot=S.fragmentShader,l.update(S),Lt=l.getVertexShaderID(S),Xt=l.getFragmentShaderID(S);let Ft=i.getRenderTarget(),he=j.isInstancedMesh===!0,ue=j.isBatchedMesh===!0,Jt=!!S.map,Ae=!!S.matcap,X=!!at,un=!!S.aoMap,$t=!!S.lightMap,ne=!!S.bumpMap,Yt=!!S.normalMap,Ze=!!S.displacementMap,ve=!!S.emissiveMap,C=!!S.metalnessMap,b=!!S.roughnessMap,K=S.anisotropy>0,Tt=S.clearcoat>0,yt=S.iridescence>0,wt=S.sheen>0,qt=S.transmission>0,Dt=K&&!!S.anisotropyMap,zt=Tt&&!!S.clearcoatMap,te=Tt&&!!S.clearcoatNormalMap,xe=Tt&&!!S.clearcoatRoughnessMap,gt=yt&&!!S.iridescenceMap,Pe=yt&&!!S.iridescenceThicknessMap,Kt=wt&&!!S.sheenColorMap,Vt=wt&&!!S.sheenRoughnessMap,kt=!!S.specularMap,Ht=!!S.specularColorMap,de=!!S.specularIntensityMap,Ue=qt&&!!S.transmissionMap,Ie=qt&&!!S.thicknessMap,pe=!!S.gradientMap,ct=!!S.alphaMap,L=S.alphaTest>0,vt=!!S.alphaHash,Mt=!!S.extensions,oe=!!V.attributes.uv1,ee=!!V.attributes.uv2,Oe=!!V.attributes.uv3,Re=$i;return S.toneMapped&&(Ft===null||Ft.isXRRenderTarget===!0)&&(Re=i.toneMapping),{isWebGL2:h,shaderID:it,shaderType:S.type,shaderName:S.name,vertexShader:et,fragmentShader:ot,defines:S.defines,customVertexShaderID:Lt,customFragmentShaderID:Xt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:u,batching:ue,instancing:he,instancingColor:he&&j.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Ft===null?i.outputColorSpace:Ft.isXRRenderTarget===!0?Ft.texture.colorSpace:Li,map:Jt,matcap:Ae,envMap:X,envMapMode:X&&at.mapping,envMapCubeUVHeight:O,aoMap:un,lightMap:$t,bumpMap:ne,normalMap:Yt,displacementMap:d&&Ze,emissiveMap:ve,normalMapObjectSpace:Yt&&S.normalMapType===Hd,normalMapTangentSpace:Yt&&S.normalMapType===ou,metalnessMap:C,roughnessMap:b,anisotropy:K,anisotropyMap:Dt,clearcoat:Tt,clearcoatMap:zt,clearcoatNormalMap:te,clearcoatRoughnessMap:xe,iridescence:yt,iridescenceMap:gt,iridescenceThicknessMap:Pe,sheen:wt,sheenColorMap:Kt,sheenRoughnessMap:Vt,specularMap:kt,specularColorMap:Ht,specularIntensityMap:de,transmission:qt,transmissionMap:Ue,thicknessMap:Ie,gradientMap:pe,opaque:S.transparent===!1&&S.blending===Gs,alphaMap:ct,alphaTest:L,alphaHash:vt,combine:S.combine,mapUv:Jt&&v(S.map.channel),aoMapUv:un&&v(S.aoMap.channel),lightMapUv:$t&&v(S.lightMap.channel),bumpMapUv:ne&&v(S.bumpMap.channel),normalMapUv:Yt&&v(S.normalMap.channel),displacementMapUv:Ze&&v(S.displacementMap.channel),emissiveMapUv:ve&&v(S.emissiveMap.channel),metalnessMapUv:C&&v(S.metalnessMap.channel),roughnessMapUv:b&&v(S.roughnessMap.channel),anisotropyMapUv:Dt&&v(S.anisotropyMap.channel),clearcoatMapUv:zt&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:te&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Kt&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Vt&&v(S.sheenRoughnessMap.channel),specularMapUv:kt&&v(S.specularMap.channel),specularColorMapUv:Ht&&v(S.specularColorMap.channel),specularIntensityMapUv:de&&v(S.specularIntensityMap.channel),transmissionMapUv:Ue&&v(S.transmissionMap.channel),thicknessMapUv:Ie&&v(S.thicknessMap.channel),alphaMapUv:ct&&v(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Yt||K),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:oe,vertexUv2s:ee,vertexUv3s:Oe,pointsUvs:j.isPoints===!0&&!!V.attributes.uv&&(Jt||ct),fog:!!P,useFog:S.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:j.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:Pt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:Re,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Jt&&S.map.isVideoTexture===!0&&Ge.getTransfer(S.map.colorSpace)===nn,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===mn,flipSided:S.side===Jn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:Mt&&S.extensions.derivatives===!0,extensionFragDepth:Mt&&S.extensions.fragDepth===!0,extensionDrawBuffers:Mt&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:Mt&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Mt&&S.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){let A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(let U in S.defines)A.push(U),A.push(S.defines[U]);return S.isRawShaderMaterial===!1&&(M(A,S),_(A,S),A.push(i.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function M(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.numLightProbes),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function _(S,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),A.batching&&o.enable(19),S.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),S.push(o.mask)}function T(S){let A=y[S.type],U;if(A){let k=Si[A];U=df.clone(k.uniforms)}else U=S.uniforms;return U}function N(S,A){let U;for(let k=0,j=c.length;k<j;k++){let P=c[k];if(P.cacheKey===A){U=P,++U.usedTimes;break}}return U===void 0&&(U=new M0(i,A,S,r),c.push(U)),U}function I(S){if(--S.usedTimes===0){let A=c.indexOf(S);c[A]=c[c.length-1],c.pop(),S.destroy()}}function D(S){l.remove(S)}function W(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:T,acquireProgram:N,releaseProgram:I,releaseShaderCache:D,programs:c,dispose:W}}function E0(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function T0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Uh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Nh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f,d,u,y,v,g){let p=i[t];return p===void 0?(p={id:f.id,object:f,geometry:d,material:u,groupOrder:y,renderOrder:f.renderOrder,z:v,group:g},i[t]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=u,p.groupOrder=y,p.renderOrder=f.renderOrder,p.z=v,p.group=g),t++,p}function o(f,d,u,y,v,g){let p=a(f,d,u,y,v,g);u.transmission>0?n.push(p):u.transparent===!0?s.push(p):e.push(p)}function l(f,d,u,y,v,g){let p=a(f,d,u,y,v,g);u.transmission>0?n.unshift(p):u.transparent===!0?s.unshift(p):e.unshift(p)}function c(f,d){e.length>1&&e.sort(f||T0),n.length>1&&n.sort(d||Uh),s.length>1&&s.sort(d||Uh)}function h(){for(let f=t,d=i.length;f<d;f++){let u=i[f];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function w0(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Nh,i.set(n,[a])):s>=r.length?(a=new Nh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function A0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new ge};break;case"SpotLight":e={position:new F,direction:new F,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new ge,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":e={color:new ge,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function R0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var C0=0;function P0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function I0(i,t){let e=new A0,n=R0(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new F);let r=new F,a=new Mn,o=new Mn;function l(h,f){let d=0,u=0,y=0;for(let k=0;k<9;k++)s.probe[k].set(0,0,0);let v=0,g=0,p=0,M=0,_=0,T=0,N=0,I=0,D=0,W=0,S=0;h.sort(P0);let A=f===!0?Math.PI:1;for(let k=0,j=h.length;k<j;k++){let P=h[k],V=P.color,$=P.intensity,at=P.distance,O=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=V.r*$*A,u+=V.g*$*A,y+=V.b*$*A;else if(P.isLightProbe){for(let it=0;it<9;it++)s.probe[it].addScaledVector(P.sh.coefficients[it],$);S++}else if(P.isDirectionalLight){let it=e.get(P);if(it.color.copy(P.color).multiplyScalar(P.intensity*A),P.castShadow){let Z=P.shadow,ut=n.get(P);ut.shadowBias=Z.bias,ut.shadowNormalBias=Z.normalBias,ut.shadowRadius=Z.radius,ut.shadowMapSize=Z.mapSize,s.directionalShadow[v]=ut,s.directionalShadowMap[v]=O,s.directionalShadowMatrix[v]=P.shadow.matrix,T++}s.directional[v]=it,v++}else if(P.isSpotLight){let it=e.get(P);it.position.setFromMatrixPosition(P.matrixWorld),it.color.copy(V).multiplyScalar($*A),it.distance=at,it.coneCos=Math.cos(P.angle),it.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),it.decay=P.decay,s.spot[p]=it;let Z=P.shadow;if(P.map&&(s.spotLightMap[D]=P.map,D++,Z.updateMatrices(P),P.castShadow&&W++),s.spotLightMatrix[p]=Z.matrix,P.castShadow){let ut=n.get(P);ut.shadowBias=Z.bias,ut.shadowNormalBias=Z.normalBias,ut.shadowRadius=Z.radius,ut.shadowMapSize=Z.mapSize,s.spotShadow[p]=ut,s.spotShadowMap[p]=O,I++}p++}else if(P.isRectAreaLight){let it=e.get(P);it.color.copy(V).multiplyScalar($),it.halfWidth.set(P.width*.5,0,0),it.halfHeight.set(0,P.height*.5,0),s.rectArea[M]=it,M++}else if(P.isPointLight){let it=e.get(P);if(it.color.copy(P.color).multiplyScalar(P.intensity*A),it.distance=P.distance,it.decay=P.decay,P.castShadow){let Z=P.shadow,ut=n.get(P);ut.shadowBias=Z.bias,ut.shadowNormalBias=Z.normalBias,ut.shadowRadius=Z.radius,ut.shadowMapSize=Z.mapSize,ut.shadowCameraNear=Z.camera.near,ut.shadowCameraFar=Z.camera.far,s.pointShadow[g]=ut,s.pointShadowMap[g]=O,s.pointShadowMatrix[g]=P.shadow.matrix,N++}s.point[g]=it,g++}else if(P.isHemisphereLight){let it=e.get(P);it.skyColor.copy(P.color).multiplyScalar($*A),it.groundColor.copy(P.groundColor).multiplyScalar($*A),s.hemi[_]=it,_++}}M>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=It.LTC_FLOAT_1,s.rectAreaLTC2=It.LTC_FLOAT_2):(s.rectAreaLTC1=It.LTC_HALF_1,s.rectAreaLTC2=It.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=It.LTC_FLOAT_1,s.rectAreaLTC2=It.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=It.LTC_HALF_1,s.rectAreaLTC2=It.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=u,s.ambient[2]=y;let U=s.hash;(U.directionalLength!==v||U.pointLength!==g||U.spotLength!==p||U.rectAreaLength!==M||U.hemiLength!==_||U.numDirectionalShadows!==T||U.numPointShadows!==N||U.numSpotShadows!==I||U.numSpotMaps!==D||U.numLightProbes!==S)&&(s.directional.length=v,s.spot.length=p,s.rectArea.length=M,s.point.length=g,s.hemi.length=_,s.directionalShadow.length=T,s.directionalShadowMap.length=T,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=I,s.spotShadowMap.length=I,s.directionalShadowMatrix.length=T,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=I+D-W,s.spotLightMap.length=D,s.numSpotLightShadowsWithMaps=W,s.numLightProbes=S,U.directionalLength=v,U.pointLength=g,U.spotLength=p,U.rectAreaLength=M,U.hemiLength=_,U.numDirectionalShadows=T,U.numPointShadows=N,U.numSpotShadows=I,U.numSpotMaps=D,U.numLightProbes=S,s.version=C0++)}function c(h,f){let d=0,u=0,y=0,v=0,g=0,p=f.matrixWorldInverse;for(let M=0,_=h.length;M<_;M++){let T=h[M];if(T.isDirectionalLight){let N=s.directional[d];N.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),N.direction.sub(r),N.direction.transformDirection(p),d++}else if(T.isSpotLight){let N=s.spot[y];N.position.setFromMatrixPosition(T.matrixWorld),N.position.applyMatrix4(p),N.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),N.direction.sub(r),N.direction.transformDirection(p),y++}else if(T.isRectAreaLight){let N=s.rectArea[v];N.position.setFromMatrixPosition(T.matrixWorld),N.position.applyMatrix4(p),o.identity(),a.copy(T.matrixWorld),a.premultiply(p),o.extractRotation(a),N.halfWidth.set(T.width*.5,0,0),N.halfHeight.set(0,T.height*.5,0),N.halfWidth.applyMatrix4(o),N.halfHeight.applyMatrix4(o),v++}else if(T.isPointLight){let N=s.point[u];N.position.setFromMatrixPosition(T.matrixWorld),N.position.applyMatrix4(p),u++}else if(T.isHemisphereLight){let N=s.hemi[g];N.direction.setFromMatrixPosition(T.matrixWorld),N.direction.transformDirection(p),g++}}}return{setup:l,setupView:c,state:s}}function Oh(i,t){let e=new I0(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function a(f){n.push(f)}function o(f){s.push(f)}function l(f){e.setup(n,f)}function c(f){e.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function L0(i,t){let e=new WeakMap;function n(r,a=0){let o=e.get(r),l;return o===void 0?(l=new Oh(i,t),e.set(r,[l])):a>=o.length?(l=new Oh(i,t),o.push(l)):l=o[a],l}function s(){e=new WeakMap}return{get:n,dispose:s}}var xl=class extends Qi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},yl=class extends Qi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},D0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,U0=`uniform sampler2D shadow_pass;
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
}`;function N0(i,t,e){let n=new Ar,s=new Bt,r=new Bt,a=new Dn,o=new xl({depthPacking:kd}),l=new yl,c={},h=e.maxTextureSize,f={[Ki]:Jn,[Jn]:Ki,[mn]:mn},d=new Ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:D0,fragmentShader:U0}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let y=new Qn;y.setAttribute("position",new jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Zt(y,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kh;let p=this.type;this.render=function(I,D,W){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||I.length===0)return;let S=i.getRenderTarget(),A=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Yi),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let j=p!==Pi&&this.type===Pi,P=p===Pi&&this.type!==Pi;for(let V=0,$=I.length;V<$;V++){let at=I[V],O=at.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",at,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let it=O.getFrameExtents();if(s.multiply(it),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/it.x),s.x=r.x*it.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/it.y),s.y=r.y*it.y,O.mapSize.y=r.y)),O.map===null||j===!0||P===!0){let ut=this.type!==Pi?{minFilter:Gn,magFilter:Gn}:{};O.map!==null&&O.map.dispose(),O.map=new Di(s.x,s.y,ut),O.map.texture.name=at.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();let Z=O.getViewportCount();for(let ut=0;ut<Z;ut++){let Pt=O.getViewport(ut);a.set(r.x*Pt.x,r.y*Pt.y,r.x*Pt.z,r.y*Pt.w),k.viewport(a),O.updateMatrices(at,ut),n=O.getFrustum(),T(D,W,O.camera,at,this.type)}O.isPointLightShadow!==!0&&this.type===Pi&&M(O,W),O.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(S,A,U)};function M(I,D){let W=t.update(v);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,u.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Di(s.x,s.y)),d.uniforms.shadow_pass.value=I.map.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(D,null,W,d,v,null),u.uniforms.shadow_pass.value=I.mapPass.texture,u.uniforms.resolution.value=I.mapSize,u.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(D,null,W,u,v,null)}function _(I,D,W,S){let A=null,U=W.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(U!==void 0)A=U;else if(A=W.isPointLight===!0?l:o,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){let k=A.uuid,j=D.uuid,P=c[k];P===void 0&&(P={},c[k]=P);let V=P[j];V===void 0&&(V=A.clone(),P[j]=V,D.addEventListener("dispose",N)),A=V}if(A.visible=D.visible,A.wireframe=D.wireframe,S===Pi?A.side=D.shadowSide!==null?D.shadowSide:D.side:A.side=D.shadowSide!==null?D.shadowSide:f[D.side],A.alphaMap=D.alphaMap,A.alphaTest=D.alphaTest,A.map=D.map,A.clipShadows=D.clipShadows,A.clippingPlanes=D.clippingPlanes,A.clipIntersection=D.clipIntersection,A.displacementMap=D.displacementMap,A.displacementScale=D.displacementScale,A.displacementBias=D.displacementBias,A.wireframeLinewidth=D.wireframeLinewidth,A.linewidth=D.linewidth,W.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let k=i.properties.get(A);k.light=W}return A}function T(I,D,W,S,A){if(I.visible===!1)return;if(I.layers.test(D.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&A===Pi)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,I.matrixWorld);let j=t.update(I),P=I.material;if(Array.isArray(P)){let V=j.groups;for(let $=0,at=V.length;$<at;$++){let O=V[$],it=P[O.materialIndex];if(it&&it.visible){let Z=_(I,it,S,A);I.onBeforeShadow(i,I,D,W,j,Z,O),i.renderBufferDirect(W,null,j,Z,I,O),I.onAfterShadow(i,I,D,W,j,Z,O)}}}else if(P.visible){let V=_(I,P,S,A);I.onBeforeShadow(i,I,D,W,j,V,null),i.renderBufferDirect(W,null,j,V,I,null),I.onAfterShadow(i,I,D,W,j,V,null)}}let k=I.children;for(let j=0,P=k.length;j<P;j++)T(k[j],D,W,S,A)}function N(I){I.target.removeEventListener("dispose",N);for(let W in c){let S=c[W],A=I.target.uuid;A in S&&(S[A].dispose(),delete S[A])}}}function O0(i,t,e){let n=e.isWebGL2;function s(){let L=!1,vt=new Dn,Mt=null,oe=new Dn(0,0,0,0);return{setMask:function(ee){Mt!==ee&&!L&&(i.colorMask(ee,ee,ee,ee),Mt=ee)},setLocked:function(ee){L=ee},setClear:function(ee,Oe,Re,Be,sn){sn===!0&&(ee*=Be,Oe*=Be,Re*=Be),vt.set(ee,Oe,Re,Be),oe.equals(vt)===!1&&(i.clearColor(ee,Oe,Re,Be),oe.copy(vt))},reset:function(){L=!1,Mt=null,oe.set(-1,0,0,0)}}}function r(){let L=!1,vt=null,Mt=null,oe=null;return{setTest:function(ee){ee?ue(i.DEPTH_TEST):Jt(i.DEPTH_TEST)},setMask:function(ee){vt!==ee&&!L&&(i.depthMask(ee),vt=ee)},setFunc:function(ee){if(Mt!==ee){switch(ee){case pd:i.depthFunc(i.NEVER);break;case md:i.depthFunc(i.ALWAYS);break;case gd:i.depthFunc(i.LESS);break;case ya:i.depthFunc(i.LEQUAL);break;case xd:i.depthFunc(i.EQUAL);break;case yd:i.depthFunc(i.GEQUAL);break;case _d:i.depthFunc(i.GREATER);break;case vd:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Mt=ee}},setLocked:function(ee){L=ee},setClear:function(ee){oe!==ee&&(i.clearDepth(ee),oe=ee)},reset:function(){L=!1,vt=null,Mt=null,oe=null}}}function a(){let L=!1,vt=null,Mt=null,oe=null,ee=null,Oe=null,Re=null,Be=null,sn=null;return{setTest:function(ye){L||(ye?ue(i.STENCIL_TEST):Jt(i.STENCIL_TEST))},setMask:function(ye){vt!==ye&&!L&&(i.stencilMask(ye),vt=ye)},setFunc:function(ye,Ee,We){(Mt!==ye||oe!==Ee||ee!==We)&&(i.stencilFunc(ye,Ee,We),Mt=ye,oe=Ee,ee=We)},setOp:function(ye,Ee,We){(Oe!==ye||Re!==Ee||Be!==We)&&(i.stencilOp(ye,Ee,We),Oe=ye,Re=Ee,Be=We)},setLocked:function(ye){L=ye},setClear:function(ye){sn!==ye&&(i.clearStencil(ye),sn=ye)},reset:function(){L=!1,vt=null,Mt=null,oe=null,ee=null,Oe=null,Re=null,Be=null,sn=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,f=new WeakMap,d={},u={},y=new WeakMap,v=[],g=null,p=!1,M=null,_=null,T=null,N=null,I=null,D=null,W=null,S=new ge(0,0,0),A=0,U=!1,k=null,j=null,P=null,V=null,$=null,at=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,it=0,Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(Z)[1]),O=it>=1):Z.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),O=it>=2);let ut=null,Pt={},et=i.getParameter(i.SCISSOR_BOX),ot=i.getParameter(i.VIEWPORT),Lt=new Dn().fromArray(et),Xt=new Dn().fromArray(ot);function Ft(L,vt,Mt,oe){let ee=new Uint8Array(4),Oe=i.createTexture();i.bindTexture(L,Oe),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Re=0;Re<Mt;Re++)n&&(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)?i.texImage3D(vt,0,i.RGBA,1,1,oe,0,i.RGBA,i.UNSIGNED_BYTE,ee):i.texImage2D(vt+Re,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ee);return Oe}let he={};he[i.TEXTURE_2D]=Ft(i.TEXTURE_2D,i.TEXTURE_2D,1),he[i.TEXTURE_CUBE_MAP]=Ft(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(he[i.TEXTURE_2D_ARRAY]=Ft(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),he[i.TEXTURE_3D]=Ft(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ue(i.DEPTH_TEST),l.setFunc(ya),ve(!1),C(mc),ue(i.CULL_FACE),Yt(Yi);function ue(L){d[L]!==!0&&(i.enable(L),d[L]=!0)}function Jt(L){d[L]!==!1&&(i.disable(L),d[L]=!1)}function Ae(L,vt){return u[L]!==vt?(i.bindFramebuffer(L,vt),u[L]=vt,n&&(L===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=vt),L===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=vt)),!0):!1}function X(L,vt){let Mt=v,oe=!1;if(L)if(Mt=y.get(vt),Mt===void 0&&(Mt=[],y.set(vt,Mt)),L.isWebGLMultipleRenderTargets){let ee=L.texture;if(Mt.length!==ee.length||Mt[0]!==i.COLOR_ATTACHMENT0){for(let Oe=0,Re=ee.length;Oe<Re;Oe++)Mt[Oe]=i.COLOR_ATTACHMENT0+Oe;Mt.length=ee.length,oe=!0}}else Mt[0]!==i.COLOR_ATTACHMENT0&&(Mt[0]=i.COLOR_ATTACHMENT0,oe=!0);else Mt[0]!==i.BACK&&(Mt[0]=i.BACK,oe=!0);oe&&(e.isWebGL2?i.drawBuffers(Mt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Mt))}function un(L){return g!==L?(i.useProgram(L),g=L,!0):!1}let $t={[ls]:i.FUNC_ADD,[Qu]:i.FUNC_SUBTRACT,[td]:i.FUNC_REVERSE_SUBTRACT};if(n)$t[_c]=i.MIN,$t[vc]=i.MAX;else{let L=t.get("EXT_blend_minmax");L!==null&&($t[_c]=L.MIN_EXT,$t[vc]=L.MAX_EXT)}let ne={[ed]:i.ZERO,[nd]:i.ONE,[id]:i.SRC_COLOR,[Qo]:i.SRC_ALPHA,[cd]:i.SRC_ALPHA_SATURATE,[od]:i.DST_COLOR,[rd]:i.DST_ALPHA,[sd]:i.ONE_MINUS_SRC_COLOR,[tl]:i.ONE_MINUS_SRC_ALPHA,[ld]:i.ONE_MINUS_DST_COLOR,[ad]:i.ONE_MINUS_DST_ALPHA,[hd]:i.CONSTANT_COLOR,[ud]:i.ONE_MINUS_CONSTANT_COLOR,[dd]:i.CONSTANT_ALPHA,[fd]:i.ONE_MINUS_CONSTANT_ALPHA};function Yt(L,vt,Mt,oe,ee,Oe,Re,Be,sn,ye){if(L===Yi){p===!0&&(Jt(i.BLEND),p=!1);return}if(p===!1&&(ue(i.BLEND),p=!0),L!==ju){if(L!==M||ye!==U){if((_!==ls||I!==ls)&&(i.blendEquation(i.FUNC_ADD),_=ls,I=ls),ye)switch(L){case Gs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gc:i.blendFunc(i.ONE,i.ONE);break;case xc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Gs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case xc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}T=null,N=null,D=null,W=null,S.set(0,0,0),A=0,M=L,U=ye}return}ee=ee||vt,Oe=Oe||Mt,Re=Re||oe,(vt!==_||ee!==I)&&(i.blendEquationSeparate($t[vt],$t[ee]),_=vt,I=ee),(Mt!==T||oe!==N||Oe!==D||Re!==W)&&(i.blendFuncSeparate(ne[Mt],ne[oe],ne[Oe],ne[Re]),T=Mt,N=oe,D=Oe,W=Re),(Be.equals(S)===!1||sn!==A)&&(i.blendColor(Be.r,Be.g,Be.b,sn),S.copy(Be),A=sn),M=L,U=!1}function Ze(L,vt){L.side===mn?Jt(i.CULL_FACE):ue(i.CULL_FACE);let Mt=L.side===Jn;vt&&(Mt=!Mt),ve(Mt),L.blending===Gs&&L.transparent===!1?Yt(Yi):Yt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);let oe=L.stencilWrite;c.setTest(oe),oe&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),K(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ue(i.SAMPLE_ALPHA_TO_COVERAGE):Jt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ve(L){k!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),k=L)}function C(L){L!==Ku?(ue(i.CULL_FACE),L!==j&&(L===mc?i.cullFace(i.BACK):L===Ju?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Jt(i.CULL_FACE),j=L}function b(L){L!==P&&(O&&i.lineWidth(L),P=L)}function K(L,vt,Mt){L?(ue(i.POLYGON_OFFSET_FILL),(V!==vt||$!==Mt)&&(i.polygonOffset(vt,Mt),V=vt,$=Mt)):Jt(i.POLYGON_OFFSET_FILL)}function Tt(L){L?ue(i.SCISSOR_TEST):Jt(i.SCISSOR_TEST)}function yt(L){L===void 0&&(L=i.TEXTURE0+at-1),ut!==L&&(i.activeTexture(L),ut=L)}function wt(L,vt,Mt){Mt===void 0&&(ut===null?Mt=i.TEXTURE0+at-1:Mt=ut);let oe=Pt[Mt];oe===void 0&&(oe={type:void 0,texture:void 0},Pt[Mt]=oe),(oe.type!==L||oe.texture!==vt)&&(ut!==Mt&&(i.activeTexture(Mt),ut=Mt),i.bindTexture(L,vt||he[L]),oe.type=L,oe.texture=vt)}function qt(){let L=Pt[ut];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Dt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function zt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function gt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Pe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Kt(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Vt(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function kt(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ht(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(L){Lt.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Lt.copy(L))}function Ue(L){Xt.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Xt.copy(L))}function Ie(L,vt){let Mt=f.get(vt);Mt===void 0&&(Mt=new WeakMap,f.set(vt,Mt));let oe=Mt.get(L);oe===void 0&&(oe=i.getUniformBlockIndex(vt,L.name),Mt.set(L,oe))}function pe(L,vt){let oe=f.get(vt).get(L);h.get(vt)!==oe&&(i.uniformBlockBinding(vt,oe,L.__bindingPointIndex),h.set(vt,oe))}function ct(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},ut=null,Pt={},u={},y=new WeakMap,v=[],g=null,p=!1,M=null,_=null,T=null,N=null,I=null,D=null,W=null,S=new ge(0,0,0),A=0,U=!1,k=null,j=null,P=null,V=null,$=null,Lt.set(0,0,i.canvas.width,i.canvas.height),Xt.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:ue,disable:Jt,bindFramebuffer:Ae,drawBuffers:X,useProgram:un,setBlending:Yt,setMaterial:Ze,setFlipSided:ve,setCullFace:C,setLineWidth:b,setPolygonOffset:K,setScissorTest:Tt,activeTexture:yt,bindTexture:wt,unbindTexture:qt,compressedTexImage2D:Dt,compressedTexImage3D:zt,texImage2D:kt,texImage3D:Ht,updateUBOMapping:Ie,uniformBlockBinding:pe,texStorage2D:Kt,texStorage3D:Vt,texSubImage2D:te,texSubImage3D:xe,compressedTexSubImage2D:gt,compressedTexSubImage3D:Pe,scissor:de,viewport:Ue,reset:ct}}function F0(i,t,e,n,s,r,a){let o=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,f,d=new WeakMap,u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(C,b){return u?new OffscreenCanvas(C,b):Ta("canvas")}function v(C,b,K,Tt){let yt=1;if((C.width>Tt||C.height>Tt)&&(yt=Tt/Math.max(C.width,C.height)),yt<1||b===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){let wt=b?al:Math.floor,qt=wt(yt*C.width),Dt=wt(yt*C.height);f===void 0&&(f=y(qt,Dt));let zt=K?y(qt,Dt):f;return zt.width=qt,zt.height=Dt,zt.getContext("2d").drawImage(C,0,0,qt,Dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+qt+"x"+Dt+")."),zt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function g(C){return Qc(C.width)&&Qc(C.height)}function p(C){return o?!1:C.wrapS!==gi||C.wrapT!==gi||C.minFilter!==Gn&&C.minFilter!==si}function M(C,b){return C.generateMipmaps&&b&&C.minFilter!==Gn&&C.minFilter!==si}function _(C){i.generateMipmap(C)}function T(C,b,K,Tt,yt=!1){if(o===!1)return b;if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let wt=b;if(b===i.RED&&(K===i.FLOAT&&(wt=i.R32F),K===i.HALF_FLOAT&&(wt=i.R16F),K===i.UNSIGNED_BYTE&&(wt=i.R8)),b===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(wt=i.R8UI),K===i.UNSIGNED_SHORT&&(wt=i.R16UI),K===i.UNSIGNED_INT&&(wt=i.R32UI),K===i.BYTE&&(wt=i.R8I),K===i.SHORT&&(wt=i.R16I),K===i.INT&&(wt=i.R32I)),b===i.RG&&(K===i.FLOAT&&(wt=i.RG32F),K===i.HALF_FLOAT&&(wt=i.RG16F),K===i.UNSIGNED_BYTE&&(wt=i.RG8)),b===i.RGBA){let qt=yt?Ma:Ge.getTransfer(Tt);K===i.FLOAT&&(wt=i.RGBA32F),K===i.HALF_FLOAT&&(wt=i.RGBA16F),K===i.UNSIGNED_BYTE&&(wt=qt===nn?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT_4_4_4_4&&(wt=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(wt=i.RGB5_A1)}return(wt===i.R16F||wt===i.R32F||wt===i.RG16F||wt===i.RG32F||wt===i.RGBA16F||wt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),wt}function N(C,b,K){return M(C,K)===!0||C.isFramebufferTexture&&C.minFilter!==Gn&&C.minFilter!==si?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function I(C){return C===Gn||C===Mc||C===xo?i.NEAREST:i.LINEAR}function D(C){let b=C.target;b.removeEventListener("dispose",D),S(b),b.isVideoTexture&&h.delete(b)}function W(C){let b=C.target;b.removeEventListener("dispose",W),U(b)}function S(C){let b=n.get(C);if(b.__webglInit===void 0)return;let K=C.source,Tt=d.get(K);if(Tt){let yt=Tt[b.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&A(C),Object.keys(Tt).length===0&&d.delete(K)}n.remove(C)}function A(C){let b=n.get(C);i.deleteTexture(b.__webglTexture);let K=C.source,Tt=d.get(K);delete Tt[b.__cacheKey],a.memory.textures--}function U(C){let b=C.texture,K=n.get(C),Tt=n.get(b);if(Tt.__webglTexture!==void 0&&(i.deleteTexture(Tt.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let yt=0;yt<6;yt++){if(Array.isArray(K.__webglFramebuffer[yt]))for(let wt=0;wt<K.__webglFramebuffer[yt].length;wt++)i.deleteFramebuffer(K.__webglFramebuffer[yt][wt]);else i.deleteFramebuffer(K.__webglFramebuffer[yt]);K.__webglDepthbuffer&&i.deleteRenderbuffer(K.__webglDepthbuffer[yt])}else{if(Array.isArray(K.__webglFramebuffer))for(let yt=0;yt<K.__webglFramebuffer.length;yt++)i.deleteFramebuffer(K.__webglFramebuffer[yt]);else i.deleteFramebuffer(K.__webglFramebuffer);if(K.__webglDepthbuffer&&i.deleteRenderbuffer(K.__webglDepthbuffer),K.__webglMultisampledFramebuffer&&i.deleteFramebuffer(K.__webglMultisampledFramebuffer),K.__webglColorRenderbuffer)for(let yt=0;yt<K.__webglColorRenderbuffer.length;yt++)K.__webglColorRenderbuffer[yt]&&i.deleteRenderbuffer(K.__webglColorRenderbuffer[yt]);K.__webglDepthRenderbuffer&&i.deleteRenderbuffer(K.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let yt=0,wt=b.length;yt<wt;yt++){let qt=n.get(b[yt]);qt.__webglTexture&&(i.deleteTexture(qt.__webglTexture),a.memory.textures--),n.remove(b[yt])}n.remove(b),n.remove(C)}let k=0;function j(){k=0}function P(){let C=k;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),k+=1,C}function V(C){let b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function $(C,b){let K=n.get(C);if(C.isVideoTexture&&Ze(C),C.isRenderTargetTexture===!1&&C.version>0&&K.__version!==C.version){let Tt=C.image;if(Tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Lt(K,C,b);return}}e.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+b)}function at(C,b){let K=n.get(C);if(C.version>0&&K.__version!==C.version){Lt(K,C,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+b)}function O(C,b){let K=n.get(C);if(C.version>0&&K.__version!==C.version){Lt(K,C,b);return}e.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+b)}function it(C,b){let K=n.get(C);if(C.version>0&&K.__version!==C.version){Xt(K,C,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+b)}let Z={[br]:i.REPEAT,[gi]:i.CLAMP_TO_EDGE,[il]:i.MIRRORED_REPEAT},ut={[Gn]:i.NEAREST,[Mc]:i.NEAREST_MIPMAP_NEAREST,[xo]:i.NEAREST_MIPMAP_LINEAR,[si]:i.LINEAR,[Cd]:i.LINEAR_MIPMAP_NEAREST,[Sr]:i.LINEAR_MIPMAP_LINEAR},Pt={[zd]:i.NEVER,[Yd]:i.ALWAYS,[Vd]:i.LESS,[lu]:i.LEQUAL,[Gd]:i.EQUAL,[qd]:i.GEQUAL,[Wd]:i.GREATER,[Xd]:i.NOTEQUAL};function et(C,b,K){if(K?(i.texParameteri(C,i.TEXTURE_WRAP_S,Z[b.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Z[b.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Z[b.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,ut[b.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,ut[b.minFilter])):(i.texParameteri(C,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(C,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(b.wrapS!==gi||b.wrapT!==gi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(C,i.TEXTURE_MAG_FILTER,I(b.magFilter)),i.texParameteri(C,i.TEXTURE_MIN_FILTER,I(b.minFilter)),b.minFilter!==Gn&&b.minFilter!==si&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Pt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let Tt=t.get("EXT_texture_filter_anisotropic");if(b.magFilter===Gn||b.minFilter!==xo&&b.minFilter!==Sr||b.type===qi&&t.has("OES_texture_float_linear")===!1||o===!1&&b.type===Er&&t.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(i.texParameterf(C,Tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function ot(C,b){let K=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",D));let Tt=b.source,yt=d.get(Tt);yt===void 0&&(yt={},d.set(Tt,yt));let wt=V(b);if(wt!==C.__cacheKey){yt[wt]===void 0&&(yt[wt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,K=!0),yt[wt].usedTimes++;let qt=yt[C.__cacheKey];qt!==void 0&&(yt[C.__cacheKey].usedTimes--,qt.usedTimes===0&&A(b)),C.__cacheKey=wt,C.__webglTexture=yt[wt].texture}return K}function Lt(C,b,K){let Tt=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Tt=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Tt=i.TEXTURE_3D);let yt=ot(C,b),wt=b.source;e.bindTexture(Tt,C.__webglTexture,i.TEXTURE0+K);let qt=n.get(wt);if(wt.version!==qt.__version||yt===!0){e.activeTexture(i.TEXTURE0+K);let Dt=Ge.getPrimaries(Ge.workingColorSpace),zt=b.colorSpace===ri?null:Ge.getPrimaries(b.colorSpace),te=b.colorSpace===ri||Dt===zt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let xe=p(b)&&g(b.image)===!1,gt=v(b.image,xe,!1,s.maxTextureSize);gt=ve(b,gt);let Pe=g(gt)||o,Kt=r.convert(b.format,b.colorSpace),Vt=r.convert(b.type),kt=T(b.internalFormat,Kt,Vt,b.colorSpace,b.isVideoTexture);et(Tt,b,Pe);let Ht,de=b.mipmaps,Ue=o&&b.isVideoTexture!==!0&&kt!==ru,Ie=qt.__version===void 0||yt===!0,pe=N(b,gt,Pe);if(b.isDepthTexture)kt=i.DEPTH_COMPONENT,o?b.type===qi?kt=i.DEPTH_COMPONENT32F:b.type===Xi?kt=i.DEPTH_COMPONENT24:b.type===hs?kt=i.DEPTH24_STENCIL8:kt=i.DEPTH_COMPONENT16:b.type===qi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===us&&kt===i.DEPTH_COMPONENT&&b.type!==Yl&&b.type!==Xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Xi,Vt=r.convert(b.type)),b.format===$s&&kt===i.DEPTH_COMPONENT&&(kt=i.DEPTH_STENCIL,b.type!==hs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=hs,Vt=r.convert(b.type))),Ie&&(Ue?e.texStorage2D(i.TEXTURE_2D,1,kt,gt.width,gt.height):e.texImage2D(i.TEXTURE_2D,0,kt,gt.width,gt.height,0,Kt,Vt,null));else if(b.isDataTexture)if(de.length>0&&Pe){Ue&&Ie&&e.texStorage2D(i.TEXTURE_2D,pe,kt,de[0].width,de[0].height);for(let ct=0,L=de.length;ct<L;ct++)Ht=de[ct],Ue?e.texSubImage2D(i.TEXTURE_2D,ct,0,0,Ht.width,Ht.height,Kt,Vt,Ht.data):e.texImage2D(i.TEXTURE_2D,ct,kt,Ht.width,Ht.height,0,Kt,Vt,Ht.data);b.generateMipmaps=!1}else Ue?(Ie&&e.texStorage2D(i.TEXTURE_2D,pe,kt,gt.width,gt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt.width,gt.height,Kt,Vt,gt.data)):e.texImage2D(i.TEXTURE_2D,0,kt,gt.width,gt.height,0,Kt,Vt,gt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ue&&Ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pe,kt,de[0].width,de[0].height,gt.depth);for(let ct=0,L=de.length;ct<L;ct++)Ht=de[ct],b.format!==xi?Kt!==null?Ue?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,Ht.width,Ht.height,gt.depth,Kt,Ht.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ct,kt,Ht.width,Ht.height,gt.depth,0,Ht.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?e.texSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,Ht.width,Ht.height,gt.depth,Kt,Vt,Ht.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ct,kt,Ht.width,Ht.height,gt.depth,0,Kt,Vt,Ht.data)}else{Ue&&Ie&&e.texStorage2D(i.TEXTURE_2D,pe,kt,de[0].width,de[0].height);for(let ct=0,L=de.length;ct<L;ct++)Ht=de[ct],b.format!==xi?Kt!==null?Ue?e.compressedTexSubImage2D(i.TEXTURE_2D,ct,0,0,Ht.width,Ht.height,Kt,Ht.data):e.compressedTexImage2D(i.TEXTURE_2D,ct,kt,Ht.width,Ht.height,0,Ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?e.texSubImage2D(i.TEXTURE_2D,ct,0,0,Ht.width,Ht.height,Kt,Vt,Ht.data):e.texImage2D(i.TEXTURE_2D,ct,kt,Ht.width,Ht.height,0,Kt,Vt,Ht.data)}else if(b.isDataArrayTexture)Ue?(Ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pe,kt,gt.width,gt.height,gt.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,gt.width,gt.height,gt.depth,Kt,Vt,gt.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,kt,gt.width,gt.height,gt.depth,0,Kt,Vt,gt.data);else if(b.isData3DTexture)Ue?(Ie&&e.texStorage3D(i.TEXTURE_3D,pe,kt,gt.width,gt.height,gt.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,gt.width,gt.height,gt.depth,Kt,Vt,gt.data)):e.texImage3D(i.TEXTURE_3D,0,kt,gt.width,gt.height,gt.depth,0,Kt,Vt,gt.data);else if(b.isFramebufferTexture){if(Ie)if(Ue)e.texStorage2D(i.TEXTURE_2D,pe,kt,gt.width,gt.height);else{let ct=gt.width,L=gt.height;for(let vt=0;vt<pe;vt++)e.texImage2D(i.TEXTURE_2D,vt,kt,ct,L,0,Kt,Vt,null),ct>>=1,L>>=1}}else if(de.length>0&&Pe){Ue&&Ie&&e.texStorage2D(i.TEXTURE_2D,pe,kt,de[0].width,de[0].height);for(let ct=0,L=de.length;ct<L;ct++)Ht=de[ct],Ue?e.texSubImage2D(i.TEXTURE_2D,ct,0,0,Kt,Vt,Ht):e.texImage2D(i.TEXTURE_2D,ct,kt,Kt,Vt,Ht);b.generateMipmaps=!1}else Ue?(Ie&&e.texStorage2D(i.TEXTURE_2D,pe,kt,gt.width,gt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Kt,Vt,gt)):e.texImage2D(i.TEXTURE_2D,0,kt,Kt,Vt,gt);M(b,Pe)&&_(Tt),qt.__version=wt.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Xt(C,b,K){if(b.image.length!==6)return;let Tt=ot(C,b),yt=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+K);let wt=n.get(yt);if(yt.version!==wt.__version||Tt===!0){e.activeTexture(i.TEXTURE0+K);let qt=Ge.getPrimaries(Ge.workingColorSpace),Dt=b.colorSpace===ri?null:Ge.getPrimaries(b.colorSpace),zt=b.colorSpace===ri||qt===Dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);let te=b.isCompressedTexture||b.image[0].isCompressedTexture,xe=b.image[0]&&b.image[0].isDataTexture,gt=[];for(let ct=0;ct<6;ct++)!te&&!xe?gt[ct]=v(b.image[ct],!1,!0,s.maxCubemapSize):gt[ct]=xe?b.image[ct].image:b.image[ct],gt[ct]=ve(b,gt[ct]);let Pe=gt[0],Kt=g(Pe)||o,Vt=r.convert(b.format,b.colorSpace),kt=r.convert(b.type),Ht=T(b.internalFormat,Vt,kt,b.colorSpace),de=o&&b.isVideoTexture!==!0,Ue=wt.__version===void 0||Tt===!0,Ie=N(b,Pe,Kt);et(i.TEXTURE_CUBE_MAP,b,Kt);let pe;if(te){de&&Ue&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,Ht,Pe.width,Pe.height);for(let ct=0;ct<6;ct++){pe=gt[ct].mipmaps;for(let L=0;L<pe.length;L++){let vt=pe[L];b.format!==xi?Vt!==null?de?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L,0,0,vt.width,vt.height,Vt,vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L,Ht,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):de?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L,0,0,vt.width,vt.height,Vt,kt,vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L,Ht,vt.width,vt.height,0,Vt,kt,vt.data)}}}else{pe=b.mipmaps,de&&Ue&&(pe.length>0&&Ie++,e.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,Ht,gt[0].width,gt[0].height));for(let ct=0;ct<6;ct++)if(xe){de?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,gt[ct].width,gt[ct].height,Vt,kt,gt[ct].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Ht,gt[ct].width,gt[ct].height,0,Vt,kt,gt[ct].data);for(let L=0;L<pe.length;L++){let Mt=pe[L].image[ct].image;de?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L+1,0,0,Mt.width,Mt.height,Vt,kt,Mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L+1,Ht,Mt.width,Mt.height,0,Vt,kt,Mt.data)}}else{de?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Vt,kt,gt[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Ht,Vt,kt,gt[ct]);for(let L=0;L<pe.length;L++){let vt=pe[L];de?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L+1,0,0,Vt,kt,vt.image[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L+1,Ht,Vt,kt,vt.image[ct])}}}M(b,Kt)&&_(i.TEXTURE_CUBE_MAP),wt.__version=yt.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Ft(C,b,K,Tt,yt,wt){let qt=r.convert(K.format,K.colorSpace),Dt=r.convert(K.type),zt=T(K.internalFormat,qt,Dt,K.colorSpace);if(!n.get(b).__hasExternalTextures){let xe=Math.max(1,b.width>>wt),gt=Math.max(1,b.height>>wt);yt===i.TEXTURE_3D||yt===i.TEXTURE_2D_ARRAY?e.texImage3D(yt,wt,zt,xe,gt,b.depth,0,qt,Dt,null):e.texImage2D(yt,wt,zt,xe,gt,0,qt,Dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),Yt(b)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Tt,yt,n.get(K).__webglTexture,0,ne(b)):(yt===i.TEXTURE_2D||yt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Tt,yt,n.get(K).__webglTexture,wt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function he(C,b,K){if(i.bindRenderbuffer(i.RENDERBUFFER,C),b.depthBuffer&&!b.stencilBuffer){let Tt=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(K||Yt(b)){let yt=b.depthTexture;yt&&yt.isDepthTexture&&(yt.type===qi?Tt=i.DEPTH_COMPONENT32F:yt.type===Xi&&(Tt=i.DEPTH_COMPONENT24));let wt=ne(b);Yt(b)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,wt,Tt,b.width,b.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,wt,Tt,b.width,b.height)}else i.renderbufferStorage(i.RENDERBUFFER,Tt,b.width,b.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,C)}else if(b.depthBuffer&&b.stencilBuffer){let Tt=ne(b);K&&Yt(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,i.DEPTH24_STENCIL8,b.width,b.height):Yt(b)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt,i.DEPTH24_STENCIL8,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,C)}else{let Tt=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let yt=0;yt<Tt.length;yt++){let wt=Tt[yt],qt=r.convert(wt.format,wt.colorSpace),Dt=r.convert(wt.type),zt=T(wt.internalFormat,qt,Dt,wt.colorSpace),te=ne(b);K&&Yt(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,te,zt,b.width,b.height):Yt(b)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,zt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,zt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ue(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),$(b.depthTexture,0);let Tt=n.get(b.depthTexture).__webglTexture,yt=ne(b);if(b.depthTexture.format===us)Yt(b)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Tt,0,yt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Tt,0);else if(b.depthTexture.format===$s)Yt(b)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Tt,0,yt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Tt,0);else throw new Error("Unknown depthTexture format")}function Jt(C){let b=n.get(C),K=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");ue(b.__webglFramebuffer,C)}else if(K){b.__webglDepthbuffer=[];for(let Tt=0;Tt<6;Tt++)e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[Tt]),b.__webglDepthbuffer[Tt]=i.createRenderbuffer(),he(b.__webglDepthbuffer[Tt],C,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=i.createRenderbuffer(),he(b.__webglDepthbuffer,C,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(C,b,K){let Tt=n.get(C);b!==void 0&&Ft(Tt.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&Jt(C)}function X(C){let b=C.texture,K=n.get(C),Tt=n.get(b);C.addEventListener("dispose",W),C.isWebGLMultipleRenderTargets!==!0&&(Tt.__webglTexture===void 0&&(Tt.__webglTexture=i.createTexture()),Tt.__version=b.version,a.memory.textures++);let yt=C.isWebGLCubeRenderTarget===!0,wt=C.isWebGLMultipleRenderTargets===!0,qt=g(C)||o;if(yt){K.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(o&&b.mipmaps&&b.mipmaps.length>0){K.__webglFramebuffer[Dt]=[];for(let zt=0;zt<b.mipmaps.length;zt++)K.__webglFramebuffer[Dt][zt]=i.createFramebuffer()}else K.__webglFramebuffer[Dt]=i.createFramebuffer()}else{if(o&&b.mipmaps&&b.mipmaps.length>0){K.__webglFramebuffer=[];for(let Dt=0;Dt<b.mipmaps.length;Dt++)K.__webglFramebuffer[Dt]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(wt)if(s.drawBuffers){let Dt=C.texture;for(let zt=0,te=Dt.length;zt<te;zt++){let xe=n.get(Dt[zt]);xe.__webglTexture===void 0&&(xe.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&Yt(C)===!1){let Dt=wt?b:[b];K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let zt=0;zt<Dt.length;zt++){let te=Dt[zt];K.__webglColorRenderbuffer[zt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[zt]);let xe=r.convert(te.format,te.colorSpace),gt=r.convert(te.type),Pe=T(te.internalFormat,xe,gt,te.colorSpace,C.isXRRenderTarget===!0),Kt=ne(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Kt,Pe,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+zt,i.RENDERBUFFER,K.__webglColorRenderbuffer[zt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),he(K.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(yt){e.bindTexture(i.TEXTURE_CUBE_MAP,Tt.__webglTexture),et(i.TEXTURE_CUBE_MAP,b,qt);for(let Dt=0;Dt<6;Dt++)if(o&&b.mipmaps&&b.mipmaps.length>0)for(let zt=0;zt<b.mipmaps.length;zt++)Ft(K.__webglFramebuffer[Dt][zt],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,zt);else Ft(K.__webglFramebuffer[Dt],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);M(b,qt)&&_(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){let Dt=C.texture;for(let zt=0,te=Dt.length;zt<te;zt++){let xe=Dt[zt],gt=n.get(xe);e.bindTexture(i.TEXTURE_2D,gt.__webglTexture),et(i.TEXTURE_2D,xe,qt),Ft(K.__webglFramebuffer,C,xe,i.COLOR_ATTACHMENT0+zt,i.TEXTURE_2D,0),M(xe,qt)&&_(i.TEXTURE_2D)}e.unbindTexture()}else{let Dt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?Dt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(Dt,Tt.__webglTexture),et(Dt,b,qt),o&&b.mipmaps&&b.mipmaps.length>0)for(let zt=0;zt<b.mipmaps.length;zt++)Ft(K.__webglFramebuffer[zt],C,b,i.COLOR_ATTACHMENT0,Dt,zt);else Ft(K.__webglFramebuffer,C,b,i.COLOR_ATTACHMENT0,Dt,0);M(b,qt)&&_(Dt),e.unbindTexture()}C.depthBuffer&&Jt(C)}function un(C){let b=g(C)||o,K=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let Tt=0,yt=K.length;Tt<yt;Tt++){let wt=K[Tt];if(M(wt,b)){let qt=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Dt=n.get(wt).__webglTexture;e.bindTexture(qt,Dt),_(qt),e.unbindTexture()}}}function $t(C){if(o&&C.samples>0&&Yt(C)===!1){let b=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],K=C.width,Tt=C.height,yt=i.COLOR_BUFFER_BIT,wt=[],qt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Dt=n.get(C),zt=C.isWebGLMultipleRenderTargets===!0;if(zt)for(let te=0;te<b.length;te++)e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+te,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+te,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let te=0;te<b.length;te++){wt.push(i.COLOR_ATTACHMENT0+te),C.depthBuffer&&wt.push(qt);let xe=Dt.__ignoreDepthValues!==void 0?Dt.__ignoreDepthValues:!1;if(xe===!1&&(C.depthBuffer&&(yt|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&(yt|=i.STENCIL_BUFFER_BIT)),zt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Dt.__webglColorRenderbuffer[te]),xe===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[qt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[qt])),zt){let gt=n.get(b[te]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,gt,0)}i.blitFramebuffer(0,0,K,Tt,0,0,K,Tt,yt,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,wt)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),zt)for(let te=0;te<b.length;te++){e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+te,i.RENDERBUFFER,Dt.__webglColorRenderbuffer[te]);let xe=n.get(b[te]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+te,i.TEXTURE_2D,xe,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}}function ne(C){return Math.min(s.maxSamples,C.samples)}function Yt(C){let b=n.get(C);return o&&C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ze(C){let b=a.render.frame;h.get(C)!==b&&(h.set(C,b),C.update())}function ve(C,b){let K=C.colorSpace,Tt=C.format,yt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===sl||K!==Li&&K!==ri&&(Ge.getTransfer(K)===nn?o===!1?t.has("EXT_sRGB")===!0&&Tt===xi?(C.format=sl,C.minFilter=si,C.generateMipmaps=!1):b=wa.sRGBToLinear(b):(Tt!==xi||yt!==Zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),b}this.allocateTextureUnit=P,this.resetTextureUnits=j,this.setTexture2D=$,this.setTexture2DArray=at,this.setTexture3D=O,this.setTextureCube=it,this.rebindTextures=Ae,this.setupRenderTarget=X,this.updateRenderTargetMipmap=un,this.updateMultisampleRenderTarget=$t,this.setupDepthRenderbuffer=Jt,this.setupFrameBufferTexture=Ft,this.useMultisampledRTT=Yt}function B0(i,t,e){let n=e.isWebGL2;function s(r,a=ri){let o,l=Ge.getTransfer(a);if(r===Zi)return i.UNSIGNED_BYTE;if(r===tu)return i.UNSIGNED_SHORT_4_4_4_4;if(r===eu)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Pd)return i.BYTE;if(r===Id)return i.SHORT;if(r===Yl)return i.UNSIGNED_SHORT;if(r===Qh)return i.INT;if(r===Xi)return i.UNSIGNED_INT;if(r===qi)return i.FLOAT;if(r===Er)return n?i.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Ld)return i.ALPHA;if(r===xi)return i.RGBA;if(r===Dd)return i.LUMINANCE;if(r===Ud)return i.LUMINANCE_ALPHA;if(r===us)return i.DEPTH_COMPONENT;if(r===$s)return i.DEPTH_STENCIL;if(r===sl)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Nd)return i.RED;if(r===nu)return i.RED_INTEGER;if(r===Od)return i.RG;if(r===iu)return i.RG_INTEGER;if(r===su)return i.RGBA_INTEGER;if(r===yo||r===_o||r===vo||r===Mo)if(l===nn)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===yo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===_o)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===vo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Mo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===yo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===_o)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===vo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Mo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===bc||r===Sc||r===Ec||r===Tc)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===bc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Sc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ec)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Tc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ru)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===wc||r===Ac)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===wc)return l===nn?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Ac)return l===nn?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Rc||r===Cc||r===Pc||r===Ic||r===Lc||r===Dc||r===Uc||r===Nc||r===Oc||r===Fc||r===Bc||r===kc||r===Hc||r===zc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Rc)return l===nn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Cc)return l===nn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Pc)return l===nn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ic)return l===nn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Lc)return l===nn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Dc)return l===nn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Uc)return l===nn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Nc)return l===nn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Oc)return l===nn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Fc)return l===nn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Bc)return l===nn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===kc)return l===nn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Hc)return l===nn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===zc)return l===nn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===bo||r===Vc||r===Gc)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===bo)return l===nn?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Vc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Gc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Fd||r===Wc||r===Xc||r===qc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===bo)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Wc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Xc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===qc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===hs?n?i.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var _l=class extends Wn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ai=class extends Xn{constructor(){super(),this.isGroup=!0,this.type="Group"}},k0={type:"move"},yr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ai,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ai,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ai,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let v of t.hand.values()){let g=e.getJointPose(v,n),p=this._getHandJoint(c,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,y=.005;c.inputState.pinching&&d>u+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=u-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(k0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ai;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},vl=class extends Ji{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,d=null,u=null,y=null,v=e.getContextAttributes(),g=null,p=null,M=[],_=[],T=new Bt,N=null,I=new Wn;I.layers.enable(1),I.viewport=new Dn;let D=new Wn;D.layers.enable(2),D.viewport=new Dn;let W=[I,D],S=new _l;S.layers.enable(1),S.layers.enable(2);let A=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let ot=M[et];return ot===void 0&&(ot=new yr,M[et]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(et){let ot=M[et];return ot===void 0&&(ot=new yr,M[et]=ot),ot.getGripSpace()},this.getHand=function(et){let ot=M[et];return ot===void 0&&(ot=new yr,M[et]=ot),ot.getHandSpace()};function k(et){let ot=_.indexOf(et.inputSource);if(ot===-1)return;let Lt=M[ot];Lt!==void 0&&(Lt.update(et.inputSource,et.frame,c||a),Lt.dispatchEvent({type:et.type,data:et.inputSource}))}function j(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",P);for(let et=0;et<M.length;et++){let ot=_[et];ot!==null&&(_[et]=null,M[et].disconnect(ot))}A=null,U=null,t.setRenderTarget(g),u=null,d=null,f=null,s=null,p=null,Pt.stop(),n.isPresenting=!1,t.setPixelRatio(N),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){r=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){o=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(et){c=et},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(et){if(s=et,s!==null){if(g=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",j),s.addEventListener("inputsourceschange",P),v.xrCompatible!==!0&&await e.makeXRCompatible(),N=t.getPixelRatio(),t.getSize(T),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let ot={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),p=new Di(u.framebufferWidth,u.framebufferHeight,{format:xi,type:Zi,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil})}else{let ot=null,Lt=null,Xt=null;v.depth&&(Xt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=v.stencil?$s:us,Lt=v.stencil?hs:Xi);let Ft={colorFormat:e.RGBA8,depthFormat:Xt,scaleFactor:r};f=new XRWebGLBinding(s,e),d=f.createProjectionLayer(Ft),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),p=new Di(d.textureWidth,d.textureHeight,{format:xi,type:Zi,depthTexture:new Oa(d.textureWidth,d.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0});let he=t.properties.get(p);he.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Pt.setContext(s),Pt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function P(et){for(let ot=0;ot<et.removed.length;ot++){let Lt=et.removed[ot],Xt=_.indexOf(Lt);Xt>=0&&(_[Xt]=null,M[Xt].disconnect(Lt))}for(let ot=0;ot<et.added.length;ot++){let Lt=et.added[ot],Xt=_.indexOf(Lt);if(Xt===-1){for(let he=0;he<M.length;he++)if(he>=_.length){_.push(Lt),Xt=he;break}else if(_[he]===null){_[he]=Lt,Xt=he;break}if(Xt===-1)break}let Ft=M[Xt];Ft&&Ft.connect(Lt)}}let V=new F,$=new F;function at(et,ot,Lt){V.setFromMatrixPosition(ot.matrixWorld),$.setFromMatrixPosition(Lt.matrixWorld);let Xt=V.distanceTo($),Ft=ot.projectionMatrix.elements,he=Lt.projectionMatrix.elements,ue=Ft[14]/(Ft[10]-1),Jt=Ft[14]/(Ft[10]+1),Ae=(Ft[9]+1)/Ft[5],X=(Ft[9]-1)/Ft[5],un=(Ft[8]-1)/Ft[0],$t=(he[8]+1)/he[0],ne=ue*un,Yt=ue*$t,Ze=Xt/(-un+$t),ve=Ze*-un;ot.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(ve),et.translateZ(Ze),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert();let C=ue+Ze,b=Jt+Ze,K=ne-ve,Tt=Yt+(Xt-ve),yt=Ae*Jt/b*C,wt=X*Jt/b*C;et.projectionMatrix.makePerspective(K,Tt,yt,wt,C,b),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}function O(et,ot){ot===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(ot.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(s===null)return;S.near=D.near=I.near=et.near,S.far=D.far=I.far=et.far,(A!==S.near||U!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),A=S.near,U=S.far);let ot=et.parent,Lt=S.cameras;O(S,ot);for(let Xt=0;Xt<Lt.length;Xt++)O(Lt[Xt],ot);Lt.length===2?at(S,I,D):S.projectionMatrix.copy(I.projectionMatrix),it(et,S,ot)};function it(et,ot,Lt){Lt===null?et.matrix.copy(ot.matrixWorld):(et.matrix.copy(Lt.matrixWorld),et.matrix.invert(),et.matrix.multiply(ot.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(ot.projectionMatrix),et.projectionMatrixInverse.copy(ot.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=rl*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&u===null))return l},this.setFoveation=function(et){l=et,d!==null&&(d.fixedFoveation=et),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=et)};let Z=null;function ut(et,ot){if(h=ot.getViewerPose(c||a),y=ot,h!==null){let Lt=h.views;u!==null&&(t.setRenderTargetFramebuffer(p,u.framebuffer),t.setRenderTarget(p));let Xt=!1;Lt.length!==S.cameras.length&&(S.cameras.length=0,Xt=!0);for(let Ft=0;Ft<Lt.length;Ft++){let he=Lt[Ft],ue=null;if(u!==null)ue=u.getViewport(he);else{let Ae=f.getViewSubImage(d,he);ue=Ae.viewport,Ft===0&&(t.setRenderTargetTextures(p,Ae.colorTexture,d.ignoreDepthValues?void 0:Ae.depthStencilTexture),t.setRenderTarget(p))}let Jt=W[Ft];Jt===void 0&&(Jt=new Wn,Jt.layers.enable(Ft),Jt.viewport=new Dn,W[Ft]=Jt),Jt.matrix.fromArray(he.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(he.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(ue.x,ue.y,ue.width,ue.height),Ft===0&&(S.matrix.copy(Jt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Xt===!0&&S.cameras.push(Jt)}}for(let Lt=0;Lt<M.length;Lt++){let Xt=_[Lt],Ft=M[Lt];Xt!==null&&Ft!==void 0&&Ft.update(Xt,ot,c||a)}Z&&Z(et,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),y=null}let Pt=new du;Pt.setAnimationLoop(ut),this.setAnimationLoop=function(et){Z=et},this.dispose=function(){}}};function H0(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,uu(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,M,_,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),f(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&u(g,p,T)):p.isMeshMatcapMaterial?(r(g,p),y(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),v(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,M,_):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Jn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Jn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let M=t.get(p).envMap;if(M&&(g.envMap.value=M,g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;let _=i._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*_,e(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,M,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=_*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),t.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function u(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Jn&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function y(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){let M=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function z0(i,t,e,n){let s={},r={},a=[],o=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,_){let T=_.program;n.uniformBlockBinding(M,T)}function c(M,_){let T=s[M.id];T===void 0&&(y(M),T=h(M),s[M.id]=T,M.addEventListener("dispose",g));let N=_.program;n.updateUBOMapping(M,N);let I=t.render.frame;r[M.id]!==I&&(d(M),r[M.id]=I)}function h(M){let _=f();M.__bindingPointIndex=_;let T=i.createBuffer(),N=M.__size,I=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,N,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,T),T}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let _=s[M.id],T=M.uniforms,N=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let I=0,D=T.length;I<D;I++){let W=Array.isArray(T[I])?T[I]:[T[I]];for(let S=0,A=W.length;S<A;S++){let U=W[S];if(u(U,I,S,N)===!0){let k=U.__offset,j=Array.isArray(U.value)?U.value:[U.value],P=0;for(let V=0;V<j.length;V++){let $=j[V],at=v($);typeof $=="number"||typeof $=="boolean"?(U.__data[0]=$,i.bufferSubData(i.UNIFORM_BUFFER,k+P,U.__data)):$.isMatrix3?(U.__data[0]=$.elements[0],U.__data[1]=$.elements[1],U.__data[2]=$.elements[2],U.__data[3]=0,U.__data[4]=$.elements[3],U.__data[5]=$.elements[4],U.__data[6]=$.elements[5],U.__data[7]=0,U.__data[8]=$.elements[6],U.__data[9]=$.elements[7],U.__data[10]=$.elements[8],U.__data[11]=0):($.toArray(U.__data,P),P+=at.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(M,_,T,N){let I=M.value,D=_+"_"+T;if(N[D]===void 0)return typeof I=="number"||typeof I=="boolean"?N[D]=I:N[D]=I.clone(),!0;{let W=N[D];if(typeof I=="number"||typeof I=="boolean"){if(W!==I)return N[D]=I,!0}else if(W.equals(I)===!1)return W.copy(I),!0}return!1}function y(M){let _=M.uniforms,T=0,N=16;for(let D=0,W=_.length;D<W;D++){let S=Array.isArray(_[D])?_[D]:[_[D]];for(let A=0,U=S.length;A<U;A++){let k=S[A],j=Array.isArray(k.value)?k.value:[k.value];for(let P=0,V=j.length;P<V;P++){let $=j[P],at=v($),O=T%N;O!==0&&N-O<at.boundary&&(T+=N-O),k.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=T,T+=at.storage}}}let I=T%N;return I>0&&(T+=N-I),M.__size=T,M.__cache={},this}function v(M){let _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function g(M){let _=M.target;_.removeEventListener("dispose",g);let T=a.indexOf(_.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Rr=class{constructor(t={}){let{canvas:e=Zd(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let u=new Uint32Array(4),y=new Int32Array(4),v=null,g=null,p=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Nn,this._useLegacyLights=!1,this.toneMapping=$i,this.toneMappingExposure=1;let _=this,T=!1,N=0,I=0,D=null,W=-1,S=null,A=new Dn,U=new Dn,k=null,j=new ge(0),P=0,V=e.width,$=e.height,at=1,O=null,it=null,Z=new Dn(0,0,V,$),ut=new Dn(0,0,V,$),Pt=!1,et=new Ar,ot=!1,Lt=!1,Xt=null,Ft=new Mn,he=new Bt,ue=new F,Jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ae(){return D===null?at:1}let X=n;function un(E,G){for(let Q=0;Q<E.length;Q++){let nt=E[Q],J=e.getContext(nt,G);if(J!==null)return J}return null}try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Xl}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",L,!1),e.addEventListener("webglcontextcreationerror",vt,!1),X===null){let G=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&G.shift(),X=un(G,E),X===null)throw un(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&X instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let $t,ne,Yt,Ze,ve,C,b,K,Tt,yt,wt,qt,Dt,zt,te,xe,gt,Pe,Kt,Vt,kt,Ht,de,Ue;function Ie(){$t=new ag(X),ne=new tg(X,$t,t),$t.init(ne),Ht=new B0(X,$t,ne),Yt=new O0(X,$t,ne),Ze=new cg(X),ve=new E0,C=new F0(X,$t,Yt,ve,ne,Ht,Ze),b=new ng(_),K=new rg(_),Tt=new xf(X,ne),de=new jm(X,$t,Tt,ne),yt=new og(X,Tt,Ze,de),wt=new fg(X,yt,Tt,Ze),Kt=new dg(X,ne,C),xe=new eg(ve),qt=new S0(_,b,K,$t,ne,de,xe),Dt=new H0(_,ve),zt=new w0,te=new L0($t,ne),Pe=new Jm(_,b,K,Yt,wt,d,l),gt=new N0(_,wt,ne),Ue=new z0(X,Ze,ne,Yt),Vt=new Qm(X,$t,Ze,ne),kt=new lg(X,$t,Ze,ne),Ze.programs=qt.programs,_.capabilities=ne,_.extensions=$t,_.properties=ve,_.renderLists=zt,_.shadowMap=gt,_.state=Yt,_.info=Ze}Ie();let pe=new vl(_,X);this.xr=pe,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let E=$t.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=$t.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return at},this.setPixelRatio=function(E){E!==void 0&&(at=E,this.setSize(V,$,!1))},this.getSize=function(E){return E.set(V,$)},this.setSize=function(E,G,Q=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=E,$=G,e.width=Math.floor(E*at),e.height=Math.floor(G*at),Q===!0&&(e.style.width=E+"px",e.style.height=G+"px"),this.setViewport(0,0,E,G)},this.getDrawingBufferSize=function(E){return E.set(V*at,$*at).floor()},this.setDrawingBufferSize=function(E,G,Q){V=E,$=G,at=Q,e.width=Math.floor(E*Q),e.height=Math.floor(G*Q),this.setViewport(0,0,E,G)},this.getCurrentViewport=function(E){return E.copy(A)},this.getViewport=function(E){return E.copy(Z)},this.setViewport=function(E,G,Q,nt){E.isVector4?Z.set(E.x,E.y,E.z,E.w):Z.set(E,G,Q,nt),Yt.viewport(A.copy(Z).multiplyScalar(at).floor())},this.getScissor=function(E){return E.copy(ut)},this.setScissor=function(E,G,Q,nt){E.isVector4?ut.set(E.x,E.y,E.z,E.w):ut.set(E,G,Q,nt),Yt.scissor(U.copy(ut).multiplyScalar(at).floor())},this.getScissorTest=function(){return Pt},this.setScissorTest=function(E){Yt.setScissorTest(Pt=E)},this.setOpaqueSort=function(E){O=E},this.setTransparentSort=function(E){it=E},this.getClearColor=function(E){return E.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(E=!0,G=!0,Q=!0){let nt=0;if(E){let J=!1;if(D!==null){let Nt=D.texture.format;J=Nt===su||Nt===iu||Nt===nu}if(J){let Nt=D.texture.type,Ot=Nt===Zi||Nt===Xi||Nt===Yl||Nt===hs||Nt===tu||Nt===eu,ie=Pe.getClearColor(),le=Pe.getClearAlpha(),Qt=ie.r,fe=ie.g,Me=ie.b;Ot?(u[0]=Qt,u[1]=fe,u[2]=Me,u[3]=le,X.clearBufferuiv(X.COLOR,0,u)):(y[0]=Qt,y[1]=fe,y[2]=Me,y[3]=le,X.clearBufferiv(X.COLOR,0,y))}else nt|=X.COLOR_BUFFER_BIT}G&&(nt|=X.DEPTH_BUFFER_BIT),Q&&(nt|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",L,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),zt.dispose(),te.dispose(),ve.dispose(),b.dispose(),K.dispose(),wt.dispose(),de.dispose(),Ue.dispose(),qt.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",sn),pe.removeEventListener("sessionend",ye),Xt&&(Xt.dispose(),Xt=null),Ee.stop()};function ct(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let E=Ze.autoReset,G=gt.enabled,Q=gt.autoUpdate,nt=gt.needsUpdate,J=gt.type;Ie(),Ze.autoReset=E,gt.enabled=G,gt.autoUpdate=Q,gt.needsUpdate=nt,gt.type=J}function vt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Mt(E){let G=E.target;G.removeEventListener("dispose",Mt),oe(G)}function oe(E){ee(E),ve.remove(E)}function ee(E){let G=ve.get(E).programs;G!==void 0&&(G.forEach(function(Q){qt.releaseProgram(Q)}),E.isShaderMaterial&&qt.releaseShaderCache(E))}this.renderBufferDirect=function(E,G,Q,nt,J,Nt){G===null&&(G=Jt);let Ot=J.isMesh&&J.matrixWorld.determinant()<0,ie=dn(E,G,Q,nt,J);Yt.setMaterial(nt,Ot);let le=Q.index,Qt=1;if(nt.wireframe===!0){if(le=yt.getWireframeAttribute(Q),le===void 0)return;Qt=2}let fe=Q.drawRange,Me=Q.attributes.position,rn=fe.start*Qt,Fn=(fe.start+fe.count)*Qt;Nt!==null&&(rn=Math.max(rn,Nt.start*Qt),Fn=Math.min(Fn,(Nt.start+Nt.count)*Qt)),le!==null?(rn=Math.max(rn,0),Fn=Math.min(Fn,le.count)):Me!=null&&(rn=Math.max(rn,0),Fn=Math.min(Fn,Me.count));let yn=Fn-rn;if(yn<0||yn===1/0)return;de.setup(J,nt,ie,Q,le);let _n,Ke=Vt;if(le!==null&&(_n=Tt.get(le),Ke=kt,Ke.setIndex(_n)),J.isMesh)nt.wireframe===!0?(Yt.setLineWidth(nt.wireframeLinewidth*Ae()),Ke.setMode(X.LINES)):Ke.setMode(X.TRIANGLES);else if(J.isLine){let Te=nt.linewidth;Te===void 0&&(Te=1),Yt.setLineWidth(Te*Ae()),J.isLineSegments?Ke.setMode(X.LINES):J.isLineLoop?Ke.setMode(X.LINE_LOOP):Ke.setMode(X.LINE_STRIP)}else J.isPoints?Ke.setMode(X.POINTS):J.isSprite&&Ke.setMode(X.TRIANGLES);if(J.isBatchedMesh)Ke.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else if(J.isInstancedMesh)Ke.renderInstances(rn,yn,J.count);else if(Q.isInstancedBufferGeometry){let Te=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,rr=Math.min(Q.instanceCount,Te);Ke.renderInstances(rn,yn,rr)}else Ke.render(rn,yn)};function Oe(E,G,Q){E.transparent===!0&&E.side===mn&&E.forceSinglePass===!1?(E.side=Jn,E.needsUpdate=!0,vi(E,G,Q),E.side=Ki,E.needsUpdate=!0,vi(E,G,Q),E.side=mn):vi(E,G,Q)}this.compile=function(E,G,Q=null){Q===null&&(Q=E),g=te.get(Q),g.init(),M.push(g),Q.traverseVisible(function(J){J.isLight&&J.layers.test(G.layers)&&(g.pushLight(J),J.castShadow&&g.pushShadow(J))}),E!==Q&&E.traverseVisible(function(J){J.isLight&&J.layers.test(G.layers)&&(g.pushLight(J),J.castShadow&&g.pushShadow(J))}),g.setupLights(_._useLegacyLights);let nt=new Set;return E.traverse(function(J){let Nt=J.material;if(Nt)if(Array.isArray(Nt))for(let Ot=0;Ot<Nt.length;Ot++){let ie=Nt[Ot];Oe(ie,Q,J),nt.add(ie)}else Oe(Nt,Q,J),nt.add(Nt)}),M.pop(),g=null,nt},this.compileAsync=function(E,G,Q=null){let nt=this.compile(E,G,Q);return new Promise(J=>{function Nt(){if(nt.forEach(function(Ot){ve.get(Ot).currentProgram.isReady()&&nt.delete(Ot)}),nt.size===0){J(E);return}setTimeout(Nt,10)}$t.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let Re=null;function Be(E){Re&&Re(E)}function sn(){Ee.stop()}function ye(){Ee.start()}let Ee=new du;Ee.setAnimationLoop(Be),typeof self<"u"&&Ee.setContext(self),this.setAnimationLoop=function(E){Re=E,pe.setAnimationLoop(E),E===null?Ee.stop():Ee.start()},pe.addEventListener("sessionstart",sn),pe.addEventListener("sessionend",ye),this.render=function(E,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(G),G=pe.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,G,D),g=te.get(E,M.length),g.init(),M.push(g),Ft.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),et.setFromProjectionMatrix(Ft),Lt=this.localClippingEnabled,ot=xe.init(this.clippingPlanes,Lt),v=zt.get(E,p.length),v.init(),p.push(v),We(E,G,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(O,it),this.info.render.frame++,ot===!0&&xe.beginShadows();let Q=g.state.shadowsArray;if(gt.render(Q,E,G),ot===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Pe.render(v,E),g.setupLights(_._useLegacyLights),G.isArrayCamera){let nt=G.cameras;for(let J=0,Nt=nt.length;J<Nt;J++){let Ot=nt[J];ci(v,E,Ot,Ot.viewport)}}else ci(v,E,G);D!==null&&(C.updateMultisampleRenderTarget(D),C.updateRenderTargetMipmap(D)),E.isScene===!0&&E.onAfterRender(_,E,G),de.resetDefaultState(),W=-1,S=null,M.pop(),M.length>0?g=M[M.length-1]:g=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function We(E,G,Q,nt){if(E.visible===!1)return;if(E.layers.test(G.layers)){if(E.isGroup)Q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(G);else if(E.isLight)g.pushLight(E),E.castShadow&&g.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||et.intersectsSprite(E)){nt&&ue.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ft);let Ot=wt.update(E),ie=E.material;ie.visible&&v.push(E,Ot,ie,Q,ue.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||et.intersectsObject(E))){let Ot=wt.update(E),ie=E.material;if(nt&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ue.copy(E.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),ue.copy(Ot.boundingSphere.center)),ue.applyMatrix4(E.matrixWorld).applyMatrix4(Ft)),Array.isArray(ie)){let le=Ot.groups;for(let Qt=0,fe=le.length;Qt<fe;Qt++){let Me=le[Qt],rn=ie[Me.materialIndex];rn&&rn.visible&&v.push(E,Ot,rn,Q,ue.z,Me)}}else ie.visible&&v.push(E,Ot,ie,Q,ue.z,null)}}let Nt=E.children;for(let Ot=0,ie=Nt.length;Ot<ie;Ot++)We(Nt[Ot],G,Q,nt)}function ci(E,G,Q,nt){let J=E.opaque,Nt=E.transmissive,Ot=E.transparent;g.setupLightsView(Q),ot===!0&&xe.setGlobalState(_.clippingPlanes,Q),Nt.length>0&&Yn(J,Nt,G,Q),nt&&Yt.viewport(A.copy(nt)),J.length>0&&Un(J,G,Q),Nt.length>0&&Un(Nt,G,Q),Ot.length>0&&Un(Ot,G,Q),Yt.buffers.depth.setTest(!0),Yt.buffers.depth.setMask(!0),Yt.buffers.color.setMask(!0),Yt.setPolygonOffset(!1)}function Yn(E,G,Q,nt){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;let Nt=ne.isWebGL2;Xt===null&&(Xt=new Di(1,1,{generateMipmaps:!0,type:$t.has("EXT_color_buffer_half_float")?Er:Zi,minFilter:Sr,samples:Nt?4:0})),_.getDrawingBufferSize(he),Nt?Xt.setSize(he.x,he.y):Xt.setSize(al(he.x),al(he.y));let Ot=_.getRenderTarget();_.setRenderTarget(Xt),_.getClearColor(j),P=_.getClearAlpha(),P<1&&_.setClearColor(16777215,.5),_.clear();let ie=_.toneMapping;_.toneMapping=$i,Un(E,Q,nt),C.updateMultisampleRenderTarget(Xt),C.updateRenderTargetMipmap(Xt);let le=!1;for(let Qt=0,fe=G.length;Qt<fe;Qt++){let Me=G[Qt],rn=Me.object,Fn=Me.geometry,yn=Me.material,_n=Me.group;if(yn.side===mn&&rn.layers.test(nt.layers)){let Ke=yn.side;yn.side=Jn,yn.needsUpdate=!0,$n(rn,Q,nt,Fn,yn,_n),yn.side=Ke,yn.needsUpdate=!0,le=!0}}le===!0&&(C.updateMultisampleRenderTarget(Xt),C.updateRenderTargetMipmap(Xt)),_.setRenderTarget(Ot),_.setClearColor(j,P),_.toneMapping=ie}function Un(E,G,Q){let nt=G.isScene===!0?G.overrideMaterial:null;for(let J=0,Nt=E.length;J<Nt;J++){let Ot=E[J],ie=Ot.object,le=Ot.geometry,Qt=nt===null?Ot.material:nt,fe=Ot.group;ie.layers.test(Q.layers)&&$n(ie,G,Q,le,Qt,fe)}}function $n(E,G,Q,nt,J,Nt){E.onBeforeRender(_,G,Q,nt,J,Nt),E.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),J.onBeforeRender(_,G,Q,nt,E,Nt),J.transparent===!0&&J.side===mn&&J.forceSinglePass===!1?(J.side=Jn,J.needsUpdate=!0,_.renderBufferDirect(Q,G,nt,J,E,Nt),J.side=Ki,J.needsUpdate=!0,_.renderBufferDirect(Q,G,nt,J,E,Nt),J.side=mn):_.renderBufferDirect(Q,G,nt,J,E,Nt),E.onAfterRender(_,G,Q,nt,J,Nt)}function vi(E,G,Q){G.isScene!==!0&&(G=Jt);let nt=ve.get(E),J=g.state.lights,Nt=g.state.shadowsArray,Ot=J.state.version,ie=qt.getParameters(E,J.state,Nt,G,Q),le=qt.getProgramCacheKey(ie),Qt=nt.programs;nt.environment=E.isMeshStandardMaterial?G.environment:null,nt.fog=G.fog,nt.envMap=(E.isMeshStandardMaterial?K:b).get(E.envMap||nt.environment),Qt===void 0&&(E.addEventListener("dispose",Mt),Qt=new Map,nt.programs=Qt);let fe=Qt.get(le);if(fe!==void 0){if(nt.currentProgram===fe&&nt.lightsStateVersion===Ot)return ir(E,ie),fe}else ie.uniforms=qt.getUniforms(E),E.onBuild(Q,ie,_),E.onBeforeCompile(ie,_),fe=qt.acquireProgram(ie,le),Qt.set(le,fe),nt.uniforms=ie.uniforms;let Me=nt.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Me.clippingPlanes=xe.uniform),ir(E,ie),nt.needsLights=sr(E),nt.lightsStateVersion=Ot,nt.needsLights&&(Me.ambientLightColor.value=J.state.ambient,Me.lightProbe.value=J.state.probe,Me.directionalLights.value=J.state.directional,Me.directionalLightShadows.value=J.state.directionalShadow,Me.spotLights.value=J.state.spot,Me.spotLightShadows.value=J.state.spotShadow,Me.rectAreaLights.value=J.state.rectArea,Me.ltc_1.value=J.state.rectAreaLTC1,Me.ltc_2.value=J.state.rectAreaLTC2,Me.pointLights.value=J.state.point,Me.pointLightShadows.value=J.state.pointShadow,Me.hemisphereLights.value=J.state.hemi,Me.directionalShadowMap.value=J.state.directionalShadowMap,Me.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Me.spotShadowMap.value=J.state.spotShadowMap,Me.spotLightMatrix.value=J.state.spotLightMatrix,Me.spotLightMap.value=J.state.spotLightMap,Me.pointShadowMap.value=J.state.pointShadowMap,Me.pointShadowMatrix.value=J.state.pointShadowMatrix),nt.currentProgram=fe,nt.uniformsList=null,fe}function hi(E){if(E.uniformsList===null){let G=E.currentProgram.getUniforms();E.uniformsList=Xs.seqWithValue(G.seq,E.uniforms)}return E.uniformsList}function ir(E,G){let Q=ve.get(E);Q.outputColorSpace=G.outputColorSpace,Q.batching=G.batching,Q.instancing=G.instancing,Q.instancingColor=G.instancingColor,Q.skinning=G.skinning,Q.morphTargets=G.morphTargets,Q.morphNormals=G.morphNormals,Q.morphColors=G.morphColors,Q.morphTargetsCount=G.morphTargetsCount,Q.numClippingPlanes=G.numClippingPlanes,Q.numIntersection=G.numClipIntersection,Q.vertexAlphas=G.vertexAlphas,Q.vertexTangents=G.vertexTangents,Q.toneMapping=G.toneMapping}function dn(E,G,Q,nt,J){G.isScene!==!0&&(G=Jt),C.resetTextureUnits();let Nt=G.fog,Ot=nt.isMeshStandardMaterial?G.environment:null,ie=D===null?_.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Li,le=(nt.isMeshStandardMaterial?K:b).get(nt.envMap||Ot),Qt=nt.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,fe=!!Q.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Me=!!Q.morphAttributes.position,rn=!!Q.morphAttributes.normal,Fn=!!Q.morphAttributes.color,yn=$i;nt.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(yn=_.toneMapping);let _n=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Ke=_n!==void 0?_n.length:0,Te=ve.get(nt),rr=g.state.lights;if(ot===!0&&(Lt===!0||E!==S)){let zn=E===S&&nt.id===W;xe.setState(nt,E,zn)}let Je=!1;nt.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==rr.state.version||Te.outputColorSpace!==ie||J.isBatchedMesh&&Te.batching===!1||!J.isBatchedMesh&&Te.batching===!0||J.isInstancedMesh&&Te.instancing===!1||!J.isInstancedMesh&&Te.instancing===!0||J.isSkinnedMesh&&Te.skinning===!1||!J.isSkinnedMesh&&Te.skinning===!0||J.isInstancedMesh&&Te.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Te.instancingColor===!1&&J.instanceColor!==null||Te.envMap!==le||nt.fog===!0&&Te.fog!==Nt||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==xe.numPlanes||Te.numIntersection!==xe.numIntersection)||Te.vertexAlphas!==Qt||Te.vertexTangents!==fe||Te.morphTargets!==Me||Te.morphNormals!==rn||Te.morphColors!==Fn||Te.toneMapping!==yn||ne.isWebGL2===!0&&Te.morphTargetsCount!==Ke)&&(Je=!0):(Je=!0,Te.__version=nt.version);let bn=Te.currentProgram;Je===!0&&(bn=vi(nt,G,J));let ar=!1,Mi=!1,_s=!1,Rn=bn.getUniforms(),ui=Te.uniforms;if(Yt.useProgram(bn.program)&&(ar=!0,Mi=!0,_s=!0),nt.id!==W&&(W=nt.id,Mi=!0),ar||S!==E){Rn.setValue(X,"projectionMatrix",E.projectionMatrix),Rn.setValue(X,"viewMatrix",E.matrixWorldInverse);let zn=Rn.map.cameraPosition;zn!==void 0&&zn.setValue(X,ue.setFromMatrixPosition(E.matrixWorld)),ne.logarithmicDepthBuffer&&Rn.setValue(X,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&Rn.setValue(X,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,Mi=!0,_s=!0)}if(J.isSkinnedMesh){Rn.setOptional(X,J,"bindMatrix"),Rn.setOptional(X,J,"bindMatrixInverse");let zn=J.skeleton;zn&&(ne.floatVertexTextures?(zn.boneTexture===null&&zn.computeBoneTexture(),Rn.setValue(X,"boneTexture",zn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}J.isBatchedMesh&&(Rn.setOptional(X,J,"batchingTexture"),Rn.setValue(X,"batchingTexture",J._matricesTexture,C));let vs=Q.morphAttributes;if((vs.position!==void 0||vs.normal!==void 0||vs.color!==void 0&&ne.isWebGL2===!0)&&Kt.update(J,Q,bn),(Mi||Te.receiveShadow!==J.receiveShadow)&&(Te.receiveShadow=J.receiveShadow,Rn.setValue(X,"receiveShadow",J.receiveShadow)),nt.isMeshGouraudMaterial&&nt.envMap!==null&&(ui.envMap.value=le,ui.flipEnvMap.value=le.isCubeTexture&&le.isRenderTargetTexture===!1?-1:1),Mi&&(Rn.setValue(X,"toneMappingExposure",_.toneMappingExposure),Te.needsLights&&ns(ui,_s),Nt&&nt.fog===!0&&Dt.refreshFogUniforms(ui,Nt),Dt.refreshMaterialUniforms(ui,nt,at,$,Xt),Xs.upload(X,hi(Te),ui,C)),nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(Xs.upload(X,hi(Te),ui,C),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&Rn.setValue(X,"center",J.center),Rn.setValue(X,"modelViewMatrix",J.modelViewMatrix),Rn.setValue(X,"normalMatrix",J.normalMatrix),Rn.setValue(X,"modelMatrix",J.matrixWorld),nt.isShaderMaterial||nt.isRawShaderMaterial){let zn=nt.uniformsGroups;for(let Ne=0,ao=zn.length;Ne<ao;Ne++)if(ne.isWebGL2){let Ve=zn[Ne];Ue.update(Ve,bn),Ue.bind(Ve,bn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return bn}function ns(E,G){E.ambientLightColor.needsUpdate=G,E.lightProbe.needsUpdate=G,E.directionalLights.needsUpdate=G,E.directionalLightShadows.needsUpdate=G,E.pointLights.needsUpdate=G,E.pointLightShadows.needsUpdate=G,E.spotLights.needsUpdate=G,E.spotLightShadows.needsUpdate=G,E.rectAreaLights.needsUpdate=G,E.hemisphereLights.needsUpdate=G}function sr(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(E,G,Q){ve.get(E.texture).__webglTexture=G,ve.get(E.depthTexture).__webglTexture=Q;let nt=ve.get(E);nt.__hasExternalTextures=!0,nt.__hasExternalTextures&&(nt.__autoAllocateDepthBuffer=Q===void 0,nt.__autoAllocateDepthBuffer||$t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),nt.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,G){let Q=ve.get(E);Q.__webglFramebuffer=G,Q.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(E,G=0,Q=0){D=E,N=G,I=Q;let nt=!0,J=null,Nt=!1,Ot=!1;if(E){let le=ve.get(E);le.__useDefaultFramebuffer!==void 0?(Yt.bindFramebuffer(X.FRAMEBUFFER,null),nt=!1):le.__webglFramebuffer===void 0?C.setupRenderTarget(E):le.__hasExternalTextures&&C.rebindTextures(E,ve.get(E.texture).__webglTexture,ve.get(E.depthTexture).__webglTexture);let Qt=E.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(Ot=!0);let fe=ve.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(fe[G])?J=fe[G][Q]:J=fe[G],Nt=!0):ne.isWebGL2&&E.samples>0&&C.useMultisampledRTT(E)===!1?J=ve.get(E).__webglMultisampledFramebuffer:Array.isArray(fe)?J=fe[Q]:J=fe,A.copy(E.viewport),U.copy(E.scissor),k=E.scissorTest}else A.copy(Z).multiplyScalar(at).floor(),U.copy(ut).multiplyScalar(at).floor(),k=Pt;if(Yt.bindFramebuffer(X.FRAMEBUFFER,J)&&ne.drawBuffers&&nt&&Yt.drawBuffers(E,J),Yt.viewport(A),Yt.scissor(U),Yt.setScissorTest(k),Nt){let le=ve.get(E.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+G,le.__webglTexture,Q)}else if(Ot){let le=ve.get(E.texture),Qt=G||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,le.__webglTexture,Q||0,Qt)}W=-1},this.readRenderTargetPixels=function(E,G,Q,nt,J,Nt,Ot){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ie=ve.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ot!==void 0&&(ie=ie[Ot]),ie){Yt.bindFramebuffer(X.FRAMEBUFFER,ie);try{let le=E.texture,Qt=le.format,fe=le.type;if(Qt!==xi&&Ht.convert(Qt)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Me=fe===Er&&($t.has("EXT_color_buffer_half_float")||ne.isWebGL2&&$t.has("EXT_color_buffer_float"));if(fe!==Zi&&Ht.convert(fe)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_TYPE)&&!(fe===qi&&(ne.isWebGL2||$t.has("OES_texture_float")||$t.has("WEBGL_color_buffer_float")))&&!Me){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=E.width-nt&&Q>=0&&Q<=E.height-J&&X.readPixels(G,Q,nt,J,Ht.convert(Qt),Ht.convert(fe),Nt)}finally{let le=D!==null?ve.get(D).__webglFramebuffer:null;Yt.bindFramebuffer(X.FRAMEBUFFER,le)}}},this.copyFramebufferToTexture=function(E,G,Q=0){let nt=Math.pow(2,-Q),J=Math.floor(G.image.width*nt),Nt=Math.floor(G.image.height*nt);C.setTexture2D(G,0),X.copyTexSubImage2D(X.TEXTURE_2D,Q,0,0,E.x,E.y,J,Nt),Yt.unbindTexture()},this.copyTextureToTexture=function(E,G,Q,nt=0){let J=G.image.width,Nt=G.image.height,Ot=Ht.convert(Q.format),ie=Ht.convert(Q.type);C.setTexture2D(Q,0),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Q.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,Q.unpackAlignment),G.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,nt,E.x,E.y,J,Nt,Ot,ie,G.image.data):G.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,nt,E.x,E.y,G.mipmaps[0].width,G.mipmaps[0].height,Ot,G.mipmaps[0].data):X.texSubImage2D(X.TEXTURE_2D,nt,E.x,E.y,Ot,ie,G.image),nt===0&&Q.generateMipmaps&&X.generateMipmap(X.TEXTURE_2D),Yt.unbindTexture()},this.copyTextureToTexture3D=function(E,G,Q,nt,J=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Nt=E.max.x-E.min.x+1,Ot=E.max.y-E.min.y+1,ie=E.max.z-E.min.z+1,le=Ht.convert(nt.format),Qt=Ht.convert(nt.type),fe;if(nt.isData3DTexture)C.setTexture3D(nt,0),fe=X.TEXTURE_3D;else if(nt.isDataArrayTexture||nt.isCompressedArrayTexture)C.setTexture2DArray(nt,0),fe=X.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,nt.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,nt.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,nt.unpackAlignment);let Me=X.getParameter(X.UNPACK_ROW_LENGTH),rn=X.getParameter(X.UNPACK_IMAGE_HEIGHT),Fn=X.getParameter(X.UNPACK_SKIP_PIXELS),yn=X.getParameter(X.UNPACK_SKIP_ROWS),_n=X.getParameter(X.UNPACK_SKIP_IMAGES),Ke=Q.isCompressedTexture?Q.mipmaps[J]:Q.image;X.pixelStorei(X.UNPACK_ROW_LENGTH,Ke.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ke.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,E.min.x),X.pixelStorei(X.UNPACK_SKIP_ROWS,E.min.y),X.pixelStorei(X.UNPACK_SKIP_IMAGES,E.min.z),Q.isDataTexture||Q.isData3DTexture?X.texSubImage3D(fe,J,G.x,G.y,G.z,Nt,Ot,ie,le,Qt,Ke.data):Q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(fe,J,G.x,G.y,G.z,Nt,Ot,ie,le,Ke.data)):X.texSubImage3D(fe,J,G.x,G.y,G.z,Nt,Ot,ie,le,Qt,Ke),X.pixelStorei(X.UNPACK_ROW_LENGTH,Me),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,rn),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Fn),X.pixelStorei(X.UNPACK_SKIP_ROWS,yn),X.pixelStorei(X.UNPACK_SKIP_IMAGES,_n),J===0&&nt.generateMipmaps&&X.generateMipmap(fe),Yt.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?C.setTextureCube(E,0):E.isData3DTexture?C.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?C.setTexture2DArray(E,0):C.setTexture2D(E,0),Yt.unbindTexture()},this.resetState=function(){N=0,I=0,D=null,Yt.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===$l?"display-p3":"srgb",e.unpackColorSpace=Ge.workingColorSpace===Ja?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Nn?ds:au}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===ds?Nn:Li}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Ml=class extends Rr{};Ml.prototype.isWebGL1Renderer=!0;var Fa=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ge(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ba=class extends Xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var Cr=class extends Qi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Fh=new F,Bh=new F,kh=new Mn,$o=new Tr,fa=new Zs,bl=class extends Xn{constructor(t=new Qn,e=new Cr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Fh.fromBufferAttribute(e,s-1),Bh.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Fh.distanceTo(Bh);t.setAttribute("lineDistance",new hn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fa.copy(n.boundingSphere),fa.applyMatrix4(s),fa.radius+=r,t.ray.intersectsSphere(fa)===!1)return;kh.copy(s).invert(),$o.copy(t.ray).applyMatrix4(kh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new F,h=new F,f=new F,d=new F,u=this.isLineSegments?2:1,y=n.index,g=n.attributes.position;if(y!==null){let p=Math.max(0,a.start),M=Math.min(y.count,a.start+a.count);for(let _=p,T=M-1;_<T;_+=u){let N=y.getX(_),I=y.getX(_+1);if(c.fromBufferAttribute(g,N),h.fromBufferAttribute(g,I),$o.distanceSqToSegment(c,h,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);let W=t.ray.origin.distanceTo(d);W<t.near||W>t.far||e.push({distance:W,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,a.start),M=Math.min(g.count,a.start+a.count);for(let _=p,T=M-1;_<T;_+=u){if(c.fromBufferAttribute(g,_),h.fromBufferAttribute(g,_+1),$o.distanceSqToSegment(c,h,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);let I=t.ray.origin.distanceTo(d);I<t.near||I>t.far||e.push({distance:I,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},Hh=new F,zh=new F,ka=class extends bl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Hh.fromBufferAttribute(e,s),zh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Hh.distanceTo(zh);t.setAttribute("lineDistance",new hn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ha=class extends oi{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},li=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,u=(a-h)/d;return(s+u)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Bt:new F);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new F,s=[],r=[],a=[],o=new F,l=new Mn;for(let u=0;u<=t;u++){let y=u/t;s[u]=this.getTangentAt(y,new F)}r[0]=new F,a[0]=new F;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(s[u-1],s[u]),o.length()>Number.EPSILON){o.normalize();let y=Math.acos(Hn(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(o,y))}a[u].crossVectors(s[u],r[u])}if(e===!0){let u=Math.acos(Hn(r[0].dot(r[t]),-1,1));u/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(u=-u);for(let y=1;y<=t;y++)r[y].applyMatrix4(l.makeRotationAxis(s[y],u*y)),a[y].crossVectors(s[y],r[y])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Pr=class extends li{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e){let n=e||new Bt,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,u=c-this.aY;l=d*h-u*f+this.aX,c=d*f+u*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Sl=class extends Pr{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Kl(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,u=(o-a)/h-(l-a)/(h+f)+(l-o)/f;d*=h,u*=h,s(a,o,d,u)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var pa=new F,Zo=new Kl,Ko=new Kl,Jo=new Kl,El=class extends li{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new F){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(pa.subVectors(s[0],s[1]).add(s[0]),c=pa);let f=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(pa.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=pa),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,y=Math.pow(c.distanceToSquared(f),u),v=Math.pow(f.distanceToSquared(d),u),g=Math.pow(d.distanceToSquared(h),u);v<1e-4&&(v=1),y<1e-4&&(y=v),g<1e-4&&(g=v),Zo.initNonuniformCatmullRom(c.x,f.x,d.x,h.x,y,v,g),Ko.initNonuniformCatmullRom(c.y,f.y,d.y,h.y,y,v,g),Jo.initNonuniformCatmullRom(c.z,f.z,d.z,h.z,y,v,g)}else this.curveType==="catmullrom"&&(Zo.initCatmullRom(c.x,f.x,d.x,h.x,this.tension),Ko.initCatmullRom(c.y,f.y,d.y,h.y,this.tension),Jo.initCatmullRom(c.z,f.z,d.z,h.z,this.tension));return n.set(Zo.calc(l),Ko.calc(l),Jo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new F().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Vh(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function V0(i,t){let e=1-i;return e*e*t}function G0(i,t){return 2*(1-i)*i*t}function W0(i,t){return i*i*t}function _r(i,t,e,n){return V0(i,t)+G0(i,e)+W0(i,n)}function X0(i,t){let e=1-i;return e*e*e*t}function q0(i,t){let e=1-i;return 3*e*e*i*t}function Y0(i,t){return 3*(1-i)*i*i*t}function $0(i,t){return i*i*i*t}function vr(i,t,e,n,s){return X0(i,t)+q0(i,e)+Y0(i,n)+$0(i,s)}var za=class extends li{constructor(t=new Bt,e=new Bt,n=new Bt,s=new Bt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Bt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(vr(t,s.x,r.x,a.x,o.x),vr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Tl=class extends li{constructor(t=new F,e=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new F){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(vr(t,s.x,r.x,a.x,o.x),vr(t,s.y,r.y,a.y,o.y),vr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Va=class extends li{constructor(t=new Bt,e=new Bt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Bt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Bt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wl=class extends li{constructor(t=new F,e=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new F){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new F){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ga=class extends li{constructor(t=new Bt,e=new Bt,n=new Bt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Bt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(_r(t,s.x,r.x,a.x),_r(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Al=class extends li{constructor(t=new F,e=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new F){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(_r(t,s.x,r.x,a.x),_r(t,s.y,r.y,a.y),_r(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Wa=class extends li{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Bt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(Vh(o,l.x,c.x,h.x,f.x),Vh(o,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Bt().fromArray(s))}return this}},Gh=Object.freeze({__proto__:null,ArcCurve:Sl,CatmullRomCurve3:El,CubicBezierCurve:za,CubicBezierCurve3:Tl,EllipseCurve:Pr,LineCurve:Va,LineCurve3:wl,QuadraticBezierCurve:Ga,QuadraticBezierCurve3:Al,SplineCurve:Wa}),Rl=class extends li{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Gh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Gh[s.type]().fromJSON(s))}return this}},Js=class extends Rl{constructor(t){super(),this.type="Path",this.currentPoint=new Bt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Va(this.currentPoint.clone(),new Bt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Ga(this.currentPoint.clone(),new Bt(t,e),new Bt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new za(this.currentPoint.clone(),new Bt(t,e),new Bt(n,s),new Bt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Wa(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Pr(t,e,n,s,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var ts=class i extends Qn{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],d=[],u=[],y=0,v=[],g=n/2,p=0;M(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new hn(f,3)),this.setAttribute("normal",new hn(d,3)),this.setAttribute("uv",new hn(u,2));function M(){let T=new F,N=new F,I=0,D=(e-t)/n;for(let W=0;W<=r;W++){let S=[],A=W/r,U=A*(e-t)+t;for(let k=0;k<=s;k++){let j=k/s,P=j*l+o,V=Math.sin(P),$=Math.cos(P);N.x=U*V,N.y=-A*n+g,N.z=U*$,f.push(N.x,N.y,N.z),T.set(V,D,$).normalize(),d.push(T.x,T.y,T.z),u.push(j,1-A),S.push(y++)}v.push(S)}for(let W=0;W<s;W++)for(let S=0;S<r;S++){let A=v[S][W],U=v[S+1][W],k=v[S+1][W+1],j=v[S][W+1];h.push(A,U,j),h.push(U,k,j),I+=6}c.addGroup(p,I,0),p+=I}function _(T){let N=y,I=new Bt,D=new F,W=0,S=T===!0?t:e,A=T===!0?1:-1;for(let k=1;k<=s;k++)f.push(0,g*A,0),d.push(0,A,0),u.push(.5,.5),y++;let U=y;for(let k=0;k<=s;k++){let P=k/s*l+o,V=Math.cos(P),$=Math.sin(P);D.x=S*$,D.y=g*A,D.z=S*V,f.push(D.x,D.y,D.z),d.push(0,A,0),I.x=V*.5+.5,I.y=$*.5*A+.5,u.push(I.x,I.y),y++}for(let k=0;k<s;k++){let j=N+k,P=U+k;T===!0?h.push(P,P+1,j):h.push(P+1,P,j),W+=3}c.addGroup(p,W,T===!0?1:2),p+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},yi=class i extends ts{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Cl=class i extends Qn{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new hn(r,3)),this.setAttribute("normal",new hn(r.slice(),3)),this.setAttribute("uv",new hn(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let _=new F,T=new F,N=new F;for(let I=0;I<e.length;I+=3)u(e[I+0],_),u(e[I+1],T),u(e[I+2],N),l(_,T,N,M)}function l(M,_,T,N){let I=N+1,D=[];for(let W=0;W<=I;W++){D[W]=[];let S=M.clone().lerp(T,W/I),A=_.clone().lerp(T,W/I),U=I-W;for(let k=0;k<=U;k++)k===0&&W===I?D[W][k]=S:D[W][k]=S.clone().lerp(A,k/U)}for(let W=0;W<I;W++)for(let S=0;S<2*(I-W)-1;S++){let A=Math.floor(S/2);S%2===0?(d(D[W][A+1]),d(D[W+1][A]),d(D[W][A])):(d(D[W][A+1]),d(D[W+1][A+1]),d(D[W+1][A]))}}function c(M){let _=new F;for(let T=0;T<r.length;T+=3)_.x=r[T+0],_.y=r[T+1],_.z=r[T+2],_.normalize().multiplyScalar(M),r[T+0]=_.x,r[T+1]=_.y,r[T+2]=_.z}function h(){let M=new F;for(let _=0;_<r.length;_+=3){M.x=r[_+0],M.y=r[_+1],M.z=r[_+2];let T=g(M)/2/Math.PI+.5,N=p(M)/Math.PI+.5;a.push(T,1-N)}y(),f()}function f(){for(let M=0;M<a.length;M+=6){let _=a[M+0],T=a[M+2],N=a[M+4],I=Math.max(_,T,N),D=Math.min(_,T,N);I>.9&&D<.1&&(_<.2&&(a[M+0]+=1),T<.2&&(a[M+2]+=1),N<.2&&(a[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function u(M,_){let T=M*3;_.x=t[T+0],_.y=t[T+1],_.z=t[T+2]}function y(){let M=new F,_=new F,T=new F,N=new F,I=new Bt,D=new Bt,W=new Bt;for(let S=0,A=0;S<r.length;S+=9,A+=6){M.set(r[S+0],r[S+1],r[S+2]),_.set(r[S+3],r[S+4],r[S+5]),T.set(r[S+6],r[S+7],r[S+8]),I.set(a[A+0],a[A+1]),D.set(a[A+2],a[A+3]),W.set(a[A+4],a[A+5]),N.copy(M).add(_).add(T).divideScalar(3);let U=g(N);v(I,A+0,M,U),v(D,A+2,_,U),v(W,A+4,T,U)}}function v(M,_,T,N){N<0&&M.x===1&&(a[_]=M.x-1),T.x===0&&T.z===0&&(a[_]=N/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},Xa=class i extends Cl{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var js=class extends Js{constructor(t){super(t),this.uuid=tr(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Js().fromJSON(s))}return this}},Z0={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=yu(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,f,d,u;if(n&&(r=tx(i,t,r,e)),i.length>80*e){o=c=i[0],l=h=i[1];for(let y=e;y<s;y+=e)f=i[y],d=i[y+1],f<o&&(o=f),d<l&&(l=d),f>c&&(c=f),d>h&&(h=d);u=Math.max(c-o,h-l),u=u!==0?32767/u:0}return Ir(r,a,e,o,l,u,0),a}};function yu(i,t,e,n,s){let r,a;if(s===ux(i,t,e,n)>0)for(r=t;r<e;r+=n)a=Wh(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=Wh(r,i[r],i[r+1],a);return a&&Qa(a,a.next)&&(Dr(a),a=a.next),a}function ps(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Qa(e,e.next)||cn(e.prev,e,e.next)===0)){if(Dr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ir(i,t,e,n,s,r,a){if(!i)return;!a&&r&&rx(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?J0(i,n,s,r):K0(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Dr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=j0(ps(i),t,e),Ir(i,t,e,n,s,r,2)):a===2&&Q0(i,t,e,n,s,r):Ir(ps(i),t,e,n,s,r,1);break}}}function K0(i){let t=i.prev,e=i,n=i.next;if(cn(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,f=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,u=o>l?o>c?o:c:l>c?l:c,y=n.next;for(;y!==t;){if(y.x>=h&&y.x<=d&&y.y>=f&&y.y<=u&&Vs(s,o,r,l,a,c,y.x,y.y)&&cn(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function J0(i,t,e,n){let s=i.prev,r=i,a=i.next;if(cn(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,f=r.y,d=a.y,u=o<l?o<c?o:c:l<c?l:c,y=h<f?h<d?h:d:f<d?f:d,v=o>l?o>c?o:c:l>c?l:c,g=h>f?h>d?h:d:f>d?f:d,p=Pl(u,y,t,e,n),M=Pl(v,g,t,e,n),_=i.prevZ,T=i.nextZ;for(;_&&_.z>=p&&T&&T.z<=M;){if(_.x>=u&&_.x<=v&&_.y>=y&&_.y<=g&&_!==s&&_!==a&&Vs(o,h,l,f,c,d,_.x,_.y)&&cn(_.prev,_,_.next)>=0||(_=_.prevZ,T.x>=u&&T.x<=v&&T.y>=y&&T.y<=g&&T!==s&&T!==a&&Vs(o,h,l,f,c,d,T.x,T.y)&&cn(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;_&&_.z>=p;){if(_.x>=u&&_.x<=v&&_.y>=y&&_.y<=g&&_!==s&&_!==a&&Vs(o,h,l,f,c,d,_.x,_.y)&&cn(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;T&&T.z<=M;){if(T.x>=u&&T.x<=v&&T.y>=y&&T.y<=g&&T!==s&&T!==a&&Vs(o,h,l,f,c,d,T.x,T.y)&&cn(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function j0(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Qa(s,r)&&_u(s,n,n.next,r)&&Lr(s,r)&&Lr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Dr(n),Dr(n.next),n=i=r),n=n.next}while(n!==i);return ps(n)}function Q0(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&lx(a,o)){let l=vu(a,o);a=ps(a,a.next),l=ps(l,l.next),Ir(a,t,e,n,s,r,0),Ir(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function tx(i,t,e,n){let s=[],r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=yu(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(ox(c));for(s.sort(ex),r=0;r<s.length;r++)e=nx(s[r],e);return e}function ex(i,t){return i.x-t.x}function nx(i,t){let e=ix(i,t);if(!e)return t;let n=vu(e,i);return ps(n,n.next),ps(e,e.next)}function ix(i,t){let e=t,n=-1/0,s,r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,f;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Vs(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(f=Math.abs(a-e.y)/(r-e.x),Lr(e,i)&&(f<h||f===h&&(e.x>s.x||e.x===s.x&&sx(s,e)))&&(s=e,h=f)),e=e.next;while(e!==o);return s}function sx(i,t){return cn(i.prev,i,t.prev)<0&&cn(t.next,i,i.next)<0}function rx(i,t,e,n){let s=i;do s.z===0&&(s.z=Pl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,ax(s)}function ax(i){let t,e,n,s,r,a,o,l,c=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(a>1);return i}function Pl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function ox(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Vs(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function lx(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!cx(i,t)&&(Lr(i,t)&&Lr(t,i)&&hx(i,t)&&(cn(i.prev,i,t.prev)||cn(i,t.prev,t))||Qa(i,t)&&cn(i.prev,i,i.next)>0&&cn(t.prev,t,t.next)>0)}function cn(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Qa(i,t){return i.x===t.x&&i.y===t.y}function _u(i,t,e,n){let s=ga(cn(i,t,e)),r=ga(cn(i,t,n)),a=ga(cn(e,n,i)),o=ga(cn(e,n,t));return!!(s!==r&&a!==o||s===0&&ma(i,e,t)||r===0&&ma(i,n,t)||a===0&&ma(e,i,n)||o===0&&ma(e,t,n))}function ma(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ga(i){return i>0?1:i<0?-1:0}function cx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&_u(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Lr(i,t){return cn(i.prev,i,i.next)<0?cn(i,t,i.next)>=0&&cn(i,i.prev,t)>=0:cn(i,t,i.prev)<0||cn(i,i.next,t)<0}function hx(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function vu(i,t){let e=new Il(i.i,i.x,i.y),n=new Il(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Wh(i,t,e,n){let s=new Il(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Dr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Il(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ux(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Mr=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Xh(t),qh(n,t);let a=t.length;e.forEach(Xh);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,qh(n,e[l]);let o=Z0.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Xh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function qh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ur=class i extends Qn{constructor(t=new js([new Bt(0,.5),new Bt(-.5,-.5),new Bt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new hn(s,3)),this.setAttribute("normal",new hn(r,3)),this.setAttribute("uv",new hn(a,2));function c(h){let f=s.length/3,d=h.extractPoints(e),u=d.shape,y=d.holes;Mr.isClockWise(u)===!1&&(u=u.reverse());for(let g=0,p=y.length;g<p;g++){let M=y[g];Mr.isClockWise(M)===!0&&(y[g]=M.reverse())}let v=Mr.triangulateShape(u,y);for(let g=0,p=y.length;g<p;g++){let M=y[g];u=u.concat(M)}for(let g=0,p=u.length;g<p;g++){let M=u[g];s.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let g=0,p=v.length;g<p;g++){let M=v[g],_=M[0]+f,T=M[1]+f,N=M[2]+f;n.push(_,T,N),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return dx(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function dx(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Ei=class i extends Qn{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new F,d=new F,u=[],y=[],v=[],g=[];for(let p=0;p<=n;p++){let M=[],_=p/n,T=0;p===0&&a===0?T=.5/e:p===n&&l===Math.PI&&(T=-.5/e);for(let N=0;N<=e;N++){let I=N/e;f.x=-t*Math.cos(s+I*r)*Math.sin(a+_*o),f.y=t*Math.cos(a+_*o),f.z=t*Math.sin(s+I*r)*Math.sin(a+_*o),y.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),g.push(I+T,1-_),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){let _=h[p][M+1],T=h[p][M],N=h[p+1][M],I=h[p+1][M+1];(p!==0||a>0)&&u.push(_,T,I),(p!==n-1||l<Math.PI)&&u.push(T,N,I)}this.setIndex(u),this.setAttribute("position",new hn(y,3)),this.setAttribute("normal",new hn(v,3)),this.setAttribute("uv",new hn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var On=class extends Qi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ou,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function xa(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function fx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Qs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ll=class extends Qs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yc,endingEnd:Yc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case $c:r=t,o=2*e-n;break;case Zc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case $c:a=t,l=2*n-e;break;case Zc:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,u=this._weightNext,y=(n-e)/(s-e),v=y*y,g=v*y,p=-d*g+2*d*v-d*y,M=(1+d)*g+(-1.5-2*d)*v+(-.5+d)*y+1,_=(-1-u)*g+(1.5+u)*v+.5*y,T=u*g-u*v;for(let N=0;N!==o;++N)r[N]=p*a[h+N]+M*a[c+N]+_*a[l+N]+T*a[f+N];return r}},Dl=class extends Qs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),f=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*f+a[l+d]*h;return r}},Ul=class extends Qs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},_i=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=xa(e,this.TimeBufferType),this.values=xa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:xa(t.times,Array),values:xa(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ul(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Dl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ll(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case _a:e=this.InterpolantFactoryMethodDiscrete;break;case va:e=this.InterpolantFactoryMethodLinear;break;case So:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _a;case this.InterpolantFactoryMethodLinear:return va;case this.InterpolantFactoryMethodSmooth:return So}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&fx(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===So,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let f=o*n,d=f-n,u=f+n;for(let y=0;y!==n;++y){let v=e[f+y];if(v!==e[d+y]||v!==e[u+y]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let f=o*n,d=a*n;for(let u=0;u!==n;++u)e[d+u]=e[f+u]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};_i.prototype.TimeBufferType=Float32Array;_i.prototype.ValueBufferType=Float32Array;_i.prototype.DefaultInterpolation=va;var ms=class extends _i{};ms.prototype.ValueTypeName="bool";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=_a;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;var Nl=class extends _i{};Nl.prototype.ValueTypeName="color";var Ol=class extends _i{};Ol.prototype.ValueTypeName="number";var Fl=class extends Qs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)ji.slerpFlat(r,0,a,c-o,a,c,l);return r}},Nr=class extends _i{InterpolantFactoryMethodLinear(t){return new Fl(this.times,this.values,this.getValueSize(),t)}};Nr.prototype.ValueTypeName="quaternion";Nr.prototype.DefaultInterpolation=va;Nr.prototype.InterpolantFactoryMethodSmooth=void 0;var gs=class extends _i{};gs.prototype.ValueTypeName="string";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=_a;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;var Bl=class extends _i{};Bl.prototype.ValueTypeName="vector";var kl=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){let u=c[f],y=c[f+1];if(u.global&&(u.lastIndex=0),u.test(h))return y}return null}}},px=new kl,Hl=class{constructor(t){this.manager=t!==void 0?t:px,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Hl.DEFAULT_MATERIAL_NAME="__DEFAULT";var qa=class extends Xn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ge(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}};var jo=new Mn,Yh=new F,$h=new F,zl=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Bt(512,512),this.map=null,this.mapPass=null,this.matrix=new Mn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ar,this._frameExtents=new Bt(1,1),this._viewportCount=1,this._viewports=[new Dn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Yh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Yh),$h.setFromMatrixPosition(t.target.matrixWorld),e.lookAt($h),e.updateMatrixWorld(),jo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(jo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Vl=class extends zl{constructor(){super(new Ua(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ya=class extends qa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xn.DEFAULT_UP),this.updateMatrix(),this.target=new Xn,this.shadow=new Vl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},$a=class extends qa{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Jl="\\[\\]\\.:\\/",mx=new RegExp("["+Jl+"]","g"),jl="[^"+Jl+"]",gx="[^"+Jl.replace("\\.","")+"]",xx=/((?:WC+[\/:])*)/.source.replace("WC",jl),yx=/(WCOD+)?/.source.replace("WCOD",gx),_x=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",jl),vx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",jl),Mx=new RegExp("^"+xx+yx+_x+vx+"$"),bx=["material","materials","bones","map"],Gl=class{constructor(t,e,n){let s=n||on.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},on=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(mx,"")}static parseTrackName(t){let e=Mx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);bx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};on.Composite=Gl;on.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};on.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};on.prototype.GetterByBindingType=[on.prototype._getValue_direct,on.prototype._getValue_array,on.prototype._getValue_arrayElement,on.prototype._getValue_toArray];on.prototype.SetterByBindingTypeAndVersioning=[[on.prototype._setValue_direct,on.prototype._setValue_direct_setNeedsUpdate,on.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[on.prototype._setValue_array,on.prototype._setValue_array_setNeedsUpdate,on.prototype._setValue_array_setMatrixWorldNeedsUpdate],[on.prototype._setValue_arrayElement,on.prototype._setValue_arrayElement_setNeedsUpdate,on.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[on.prototype._setValue_fromArray,on.prototype._setValue_fromArray_setNeedsUpdate,on.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Fx=new Float32Array(1);var Za=class{constructor(t,e,n=0,s=1/0){this.ray=new Tr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new wr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Wl(t,this,n,e),n.sort(Zh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Wl(t[s],this,n,e);return n.sort(Zh),n}};function Zh(i,t){return i.distance-t.distance}function Wl(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){let s=i.children;for(let r=0,a=s.length;r<a;r++)Wl(s[r],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xl);var Ex=35,Tx=25,Se=.95,qn=.35,Or=7,xs=200,to=300,Mu=typeof window<"u"&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||window.location.search.includes("dev=1")),wx=[{value:"balanced",label:"Balanced (lineup mix)"},{value:"tanky",label:"Tanky (HP + VIT)"},{value:"aggressive",label:"Aggressive (STR + AGI)"},{value:"scout",label:"Scout (high AGI)"},{value:"ranged",label:"Ranged (DEX + range)"},{value:"caster",label:"Caster (INT + MP)"},{value:"random",label:"Random"},{value:"custom",label:"Custom order"}],Ax=["berserker","knight","lancer","werewolf","samurai","ninja","assassin","ghoul","monk","hunter","mage","witch","paladin","exorcist","bandit","ranger","blacksmith","alchemist"],eo={tank:["knight","berserker","werewolf","ghoul"],melee:["assassin","ninja","samurai","bandit","lancer"],support:["paladin","monk","blacksmith","exorcist"],ranged:["hunter","ranger","alchemist"],caster:["mage","witch"]},Fr={tank:2,melee:2,support:1,ranged:1,caster:1};function Rx(i){let t=Math.max(1,i),e=Object.keys(Fr),n=e.reduce((l,c)=>l+(Fr[c]??0),0),s={},r=0;for(let l of e){let c=Math.floor(t*(Fr[l]??0)/n);s[l]=c,r+=c}let a=t-r,o=[...e].sort((l,c)=>s[l]!==s[c]?s[l]-s[c]:(Fr[c]??0)-(Fr[l]??0));for(let l=0;a>0&&l<o.length;l++)s[o[l]]++,a--;return s}var jt={PATH:0,GRASS:1,TREE:2,WATER:3,ROCK:4,BASE_TOP:5,BASE_BOTTOM:6,CENTER:7},no=["knight","mage","monk","ghoul","lancer","hunter","assassin","berserker","witch","ninja","samurai","werewolf","paladin","exorcist","bandit","ranger","blacksmith","alchemist"];function Cx(i){for(let t=i.length-1;t>0;t--){let e=Math.floor(Math.random()*(t+1));[i[t],i[e]]=[i[e],i[t]]}return i}var ze={knight:{name:"Knight",gender:"male",hp:27,maxHp:27,mp:5,maxMp:5,str:13,agi:8,vit:14,dex:10,luk:4,int:7,range:1},mage:{name:"Mage",gender:"female",hp:17,maxHp:17,mp:22,maxMp:22,str:5,agi:4,vit:5,dex:4,luk:13,int:17,range:1},monk:{name:"Monk",gender:"male",hp:23,maxHp:23,mp:13,maxMp:13,str:10,agi:10,vit:12,dex:9,luk:11,int:10,range:1},ghoul:{name:"Ghoul",gender:"male",hp:21,maxHp:21,mp:6,maxMp:6,str:12,agi:9,vit:9,dex:11,luk:9,int:5,range:1},lancer:{name:"Lancer",gender:"female",hp:22,maxHp:22,mp:7,maxMp:7,str:13,agi:11,vit:10,dex:7,luk:5,int:8,range:2},hunter:{name:"Hunter",gender:"female",hp:18,maxHp:18,mp:9,maxMp:9,str:7,agi:5,vit:7,dex:15,luk:12,int:5,range:7},assassin:{name:"Assassin",gender:"female",hp:19,maxHp:19,mp:10,maxMp:10,str:9,agi:14,vit:6,dex:14,luk:10,int:4,range:1},berserker:{name:"Berserker",gender:"male",hp:30,maxHp:30,mp:3,maxMp:3,str:15,agi:7,vit:13,dex:8,luk:6,int:2,range:1},witch:{name:"Witch",gender:"female",hp:16,maxHp:16,mp:24,maxMp:24,str:6,agi:6,vit:4,dex:5,luk:14,int:14,range:3},ninja:{name:"Ninja",gender:"female",hp:20,maxHp:20,mp:11,maxMp:11,str:8,agi:15,vit:7,dex:12,luk:8,int:9,range:1},samurai:{name:"Samurai",gender:"male",hp:24,maxHp:24,mp:8,maxMp:8,str:11,agi:12,vit:8,dex:13,luk:7,int:6,range:1},werewolf:{name:"Werewolf",gender:"male",hp:25,maxHp:25,mp:4,maxMp:4,str:14,agi:13,vit:11,dex:6,luk:6,int:3,range:1},paladin:{name:"Paladin",gender:"male",hp:26,maxHp:26,mp:12,maxMp:12,str:10,agi:8,vit:16,dex:7,luk:10,int:11,range:1},exorcist:{name:"Exorcist",gender:"male",hp:21,maxHp:20,mp:14,maxMp:14,str:7,agi:5,vit:9,dex:6,luk:15,int:13,range:1},bandit:{name:"Bandit",gender:"male",hp:20,maxHp:20,mp:5,maxMp:5,str:9,agi:14,vit:6,dex:14,luk:13,int:4,range:1},ranger:{name:"Ranger",gender:"female",hp:19,maxHp:19,mp:10,maxMp:10,str:8,agi:10,vit:8,dex:12,luk:7,int:4,range:5},blacksmith:{name:"Blacksmith",gender:"female",hp:22,maxHp:22,mp:6,maxMp:6,str:12,agi:7,vit:10,dex:11,luk:12,int:2,range:1},alchemist:{name:"Alchemist",gender:"female",hp:17,maxHp:17,mp:13,maxMp:13,str:6,agi:6,vit:11,dex:5,luk:8,int:12,range:5}},io={knight:{primary:6908265,secondary:9127187,hair:11696641,cape:3355443,belt:9127187},mage:{primary:16776656,secondary:3355443,hair:13353955,cape:4853326},monk:{primary:16777188,secondary:16119285,hair:2889744,belt:657930},ghoul:{primary:32896,secondary:6636321,hair:32896,skin:32896},lancer:{primary:3169502,secondary:16776656,hair:15854290,cape:14423100},hunter:{primary:8421376,secondary:9584654,hair:7898731,cape:16119285},assassin:{primary:986695,secondary:16119285,hair:2621751,belt:8948621},berserker:{primary:657930,secondary:986695,hair:657930,cape:1118481},witch:{primary:16119285,secondary:8388640,hair:16777188,cape:2263842},ninja:{primary:267292,secondary:137541,hair:791074},samurai:{primary:13882323,secondary:3556687,hair:2039842},werewolf:{primary:4408907,secondary:2378091,hair:12632256,belt:466741},paladin:{primary:16445630,secondary:16774638,hair:12887172,cape:4286945,belt:4286945},exorcist:{primary:3881787,secondary:3881787,hair:16775930,cape:8488329},bandit:{primary:9125425,secondary:6045747,hair:14423100,cape:6710937},ranger:{primary:16775930,secondary:10913299,hair:16035328,cape:11402348,belt:10913299},blacksmith:{primary:13874819,secondary:9849600,hair:11696641,apron:9849600},alchemist:{primary:16738740,secondary:11154282,hair:16711807,cape:8900331}},Br={knight:"https://creator.nightcafe.studio/jobs/OlIWpAye2LeM5gPkAGEI/OlIWpAye2LeM5gPkAGEI--1--xc223.jpg",mage:"https://media.craiyon.com/2025-08-13/bLqz0LbwSIynOcUHty4Maw.webp",monk:"https://cdnb.artstation.com/p/assets/images/images/028/576/499/large/ahruna-art-oct17.jpg?1594859688",ghoul:"https://i.pinimg.com/736x/d3/cc/41/d3cc41778d05dec0371a69e29659f792.jpg",lancer:"https://i.redd.it/zolf64gpoa0c1.jpg",hunter:"https://coolvibe.com/wp-content/uploads/2011/02/hunter.jpg",assassin:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk2-NBPpPOU7duYgN_k_9oFKZ5hJjU28qyoA&s",berserker:"https://entertainment.inquirer.net/files/2016/07/top_bg.jpg",witch:"https://w0.peakpx.com/wallpaper/382/134/HD-wallpaper-evil-witch-witch-female-dress-white-hair-evil-black-woman-girl-darkness-anime-dark-beauty-lady-long-hair.jpg",ninja:"https://i.pinimg.com/474x/02/88/60/0288609778e53701b7e64051d7164922.jpg",samurai:"https://files.idyllic.app/files/static/3120390?width=256&optimizer=image",werewolf:"https://i.pinimg.com/736x/1f/95/27/1f9527c6255465547d664f19dd11967c.jpg",paladin:"https://upload-os-bbs.hoyolab.com/upload/2023/12/01/84522063/a6a130d65b61025d979eda3750b0abd4_2602645990799609868.jpg?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_70",exorcist:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bdc0afb9-e917-4267-b7e6-2155f9c5c14c/detuach-b1b79b16-7fed-4175-b1a2-ca3d1bc6166b.jpg/v1/fill/w_1024,h_1449,q_75,strp/my_priest_by_domyzu_detuach-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi9iZGMwYWZiOS1lOTE3LTQyNjctYjdlNi0yMTU1ZjljNWMxNGMvZGV0dWFjaC1iMWI3OWIxNi03ZmVkLTQxNzUtYjFhMi1jYTNkMWJjNjE2NmIuanBnIiwiaGVpZ2h0IjoiPD0xNDQ5Iiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiL3dtL2JkYzBhZmI5LWU5MTctNDI2Ny1iN2U2LTIxNTVmOWM1YzE0Yy9kb215enUtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.5ueq8PhVPSB7hz65z6Cok8mX7IGeIrsQzCOaVFpt1pU",bandit:"https://i.pinimg.com/736x/6b/15/b0/6b15b06ae23f690e20968bc87c370831.jpg",ranger:"https://i.redd.it/2nfikbmqpwoa1.jpg",blacksmith:"https://images-ng.pixai.art/images/orig/489d970a-890e-4523-8f99-c0ba2d6bfeae",alchemist:"https://pics.craiyon.com/2023-07-11/ddbb35d3d2614541a9ad13181838257d.webp"},bu={knight:[{name:"Brave",description:"Gain +3 VIT for 2 turns.",cost:3,target:"self",range:0,level:2,effectKey:"brave"},{name:"Dominate",description:"Steal 1 STR from an enemy.",cost:5,target:"enemy",range:1,level:3,effectKey:"dominate"}],mage:[{name:"Arcane Bolt",description:"Deal INT-based damage to one enemy.",cost:8,target:"enemy",range:6,level:1,effectKey:"arcaneBolt",type:"spell"},{name:"Mana Drain",description:"Drain enemy MP based on INT.",cost:1,target:"enemy",range:6,level:2,effectKey:"manaDrain"}],monk:[{name:"Mantra",description:"Gain LUK based on INT for both ally and self for 2 turns.",cost:4,target:"ally",range:1,level:2,effectKey:"mantra"},{name:"Chakra",description:"Heal HP for both ally and self.",cost:8,target:"ally",range:4,level:3,effectKey:"chakra"}],ghoul:[{name:"Weaken",description:"Steal 1 VIT from an enemy.",cost:3,target:"enemy",range:1,level:2,effectKey:"weaken"},{name:"Feast",description:"Deal STR-based damage to enemy and heal self.",cost:4,target:"enemy",range:1,level:3,effectKey:"feast"}],lancer:[{name:"Impale",description:"Reduce target's AGI by 2 for 3 turns.",cost:4,target:"enemy",range:2,level:2,effectKey:"impale"},{name:"Pierce",description:"Deal STR-based damage through the defense.",cost:6,target:"enemy",range:2,level:3,effectKey:"pierce"}],hunter:[{name:"Focus",description:"Gain +3 DEX for 2 turns.",cost:4,target:"self",range:0,level:1,effectKey:"focus"},{name:"Snipe",description:"Deal DEX-based damage to one enemy.",cost:6,target:"enemy",range:10,level:2,effectKey:"snipe"}],assassin:[{name:"Cripple",description:"Steal 1 AGI from an enemy.",cost:4,target:"enemy",range:1,level:2,effectKey:"cripple"},{name:"Execute",description:"Deal AGI-based damage to one enemy.",cost:6,target:"enemy",range:1,level:3,effectKey:"execute"}],berserker:[{name:"Berserk",description:"Deal STR-based damage for -3 HP.",cost:0,hpCost:3,target:"enemy",range:1,level:2,effectKey:"berserk"},{name:"Bloodlust",description:"Gain STR and VIT based on lost HP for 1 turn.",cost:5,target:"self",range:0,level:3,effectKey:"bloodlust"}],witch:[{name:"Hex",description:"Steal 1 INT from an enemy.",cost:5,target:"enemy",range:5,level:1,effectKey:"hex"},{name:"Drain",description:"Deal INT-based damage to enemy and heal self.",cost:6,target:"enemy",range:5,level:2,effectKey:"drain",type:"spell"}],ninja:[{name:"Blind",description:"Steal 1 DEX from an enemy.",cost:4,target:"enemy",range:1,level:2,effectKey:"blind"},{name:"Shuriken",description:"Deal DEX-based ranged attack.",cost:6,target:"enemy",range:4,level:3,effectKey:"shuriken"}],samurai:[{name:"Iaido",description:"Gain +1 STR and +1 DEX for 3 turns.",cost:5,target:"self",range:0,level:2,effectKey:"iaido"},{name:"Chokuto",description:"Deal STR+DEX-based damage to one enemy.",cost:7,target:"enemy",range:1,level:3,effectKey:"chokuto"}],werewolf:[{name:"Bite",description:"Deal STR+AGI-based damage to one enemy.",cost:5,target:"enemy",range:1,level:2,effectKey:"bite"},{name:"Howl",description:"Gain +2 STR and +2 AGI for 3 turns.",cost:6,target:"self",range:0,level:3,effectKey:"howl"}],paladin:[{name:"Sacrifice",description:"Heal ally for -3 HP.",cost:0,hpCost:3,target:"ally",range:3,level:3,effectKey:"sacrifice"},{name:"Judgement",description:"Deal damage based on remaining HP.",cost:7,target:"enemy",range:1,level:2,effectKey:"judgement"}],exorcist:[{name:"Sanctuary",description:"Gain +1 all stats for both ally and self for 2 turns.",cost:6,target:"ally",range:3,level:1,effectKey:"sanctuary"},{name:"Exorcise",description:"Deal damage based on enemy lost HP.",cost:7,target:"enemy",range:3,level:2,effectKey:"exorcise",type:"spell"}],bandit:[{name:"Raid",description:"Steal 2 LUK from an enemy.",cost:4,target:"enemy",range:1,level:2,effectKey:"raid"},{name:"Ambush",description:"Deal LUK-based damage to one enemy.",cost:6,target:"enemy",range:1,level:3,effectKey:"ambush"}],ranger:[{name:"Wind walk",description:"Gain +1 DEX and +3 AGI for 2 turns.",cost:4,target:"self",range:0,level:1,effectKey:"windWalk"},{name:"Power Shot",description:"Deal knockback damage to one enemy.",cost:6,target:"enemy",range:7,level:3,effectKey:"powerShot"}],blacksmith:[{name:"Forge",description:"Gain +2 STR for both ally and self for 2 turns.",cost:4,target:"ally",range:1,level:1,effectKey:"forge"},{name:"Fortify",description:"Gain +2 STR and +2 VIT for both ally and self for 2 turns.",cost:5,target:"ally",range:2,level:3,effectKey:"fortify"}],alchemist:[{name:"Poison",description:"Poison enemy for 2 turns.",cost:5,target:"enemy",range:5,level:1,effectKey:"poison"},{name:"Concoct",description:"Deal INT-based damage to one enemy and add to 50% to LUK",cost:8,target:"enemy",range:7,level:2,effectKey:"concoct",type:"spell"}]};function ht(i,t){let e=i[t]!=null?i[t]:0,n=i.tempBuff&&i.tempBuff[t]!=null?i.tempBuff[t]:0,s=i.tempDebuff&&i.tempDebuff[t]!=null?i.tempDebuff[t]:0;return e+n-s}function so(i,t,e,n){let s=t,r=e,o={brave:"Brave",dominate:"Dominate",arcaneBolt:"Arcane Bolt",manaDrain:"Mana Drain",mantra:"Mantra",chakra:"Chakra",weaken:"Weaken",feast:"Feast",impale:"Impale",pierce:"Pierce",focus:"Focus",snipe:"Snipe",execute:"Execute",cripple:"Cripple",berserk:"Berserk",bloodlust:"Bloodlust",hex:"Hex",drain:"Drain",shuriken:"Shuriken",blind:"Blind",iaido:"Iaido",chokuto:"Chokuto",bite:"Bite",howl:"Howl"}[i]||i.replace(/([A-Z])/g," $1").replace(/^./,u=>u.toUpperCase()).trim();n.showFloatingCombatText&&n.showFloatingCombatText(s.x,s.y,o,!1,"skill-name");let l=i.replace(/([A-Z])/g," $1").replace(/^./,u=>u.toUpperCase()).trim(),c=r?`${r.name} (${r.class}, P${r.player})`:"self",h=null,f=(u,y,v,g)=>{if(v)u.hp=Math.min(u.maxHp,u.hp+y),n.showFloatingCombatText&&n.showFloatingCombatText(u.x,u.y,`+${y}`,!1,"heal");else{let p=u===s,M=!0;if(!p&&!g){let _=ht(u,"agi")*.7+ht(u,"luk")*.3;M=Math.random()*Math.max(.001,_)<=ht(s,"dex")}return M?(u.hp=Math.max(0,u.hp-y),u!==s&&(h=y),n.showFloatingCombatText&&n.showFloatingCombatText(u.x,u.y,String(y),!1),n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(u),u.hp<=0&&n.handleUnitDeath&&n.handleUnitDeath(u)):n.showFloatingCombatText&&n.showFloatingCombatText(u.x,u.y,"MISS",!0),M}},d=(u,y,v,g)=>{n.showFloatingCombatText&&n.showFloatingCombatText(u,y,v,!1,g?"buff":"debuff")};switch(i){case"brave":s.tempBuff=s.tempBuff||{},s.tempBuff.vit=3,s.tempBuff.duration=3,d(s.x,s.y,"+3 VIT",!0);break;case"dominate":{if(!r)break;let u=2;r.str=Math.max(1,(r.str||0)-u),s.str=(s.str||0)+u,d(r.x,r.y,`-${u} STR`,!1),d(s.x,s.y,`+${u} STR`,!0)}break;case"arcaneBolt":{if(!r)break;let u=Math.max(1,Math.ceil(ht(s,"int")-(ht(r,"int")*.7+ht(r,"luk")*.2)));f(r,u,!1,!0)}break;case"manaDrain":if(r){let u=Math.max(1,Math.floor(ht(r,"int")*.3));r.str=Math.max(1,(r.mp||0)-u),s.mp=(s.mp||0)+u,d(r.x,r.y,`-${u} MP`,!1),d(s.x,s.y,`+${u} MP`,!0)}break;case"mantra":if(r){let u=Math.max(1,Math.floor(ht(s,"int")*.3));if(s.tempBuff=s.tempBuff||{},s.tempBuff.int=u,s.tempBuff.duration=3,d(s.x,s.y,`+${u} LUK`,!0),!r)break;r.tempBuff=r.tempBuff||{},r.tempBuff.luk=u,r.tempBuff.duration=3,d(r.x,r.y,`+${u} LUK`,!0)}break;case"chakra":{if(f(s,Math.max(1,Math.floor(ht(s,"int")*.3+ht(s,"luk")*.2)),!0),!r)break;f(r,Math.max(1,Math.floor(ht(s,"int")*.3+ht(r,"luk")*.2)),!0)}break;case"weaken":{if(!r)break;let u=1;r.vit=Math.max(1,(r.vit||0)-u),s.vit=(s.vit||0)+u,d(r.x,r.y,`-${u} VIT`,!1),d(s.x,s.y,`+${u} VIT`,!0)}break;case"feast":{if(!r)break;let u=Math.max(1,Math.floor(ht(s,"str")*.7-(ht(r,"vit")*.3+ht(r,"luk")*.2)));f(r,u,!1)&&f(s,u,!0)}break;case"impale":{if(!r)break;let u=2;r.tempDebuff=r.tempDebuff||{},r.tempDebuff.agi=u,r.tempDebuff.duration=4,d(r.x,r.y,`-${u} AGI`,!1)}break;case"pierce":{if(!r)break;let u=Math.max(1,Math.floor(ht(s,"str")*.6));f(r,u,!1)}break;case"focus":s.tempBuff=s.tempBuff||{},s.tempBuff.dex=3,s.tempBuff.duration=3,d(s.x,s.y,"+3 DEX",!0);break;case"snipe":{if(!r)break;let u=Math.max(1,Math.floor(ht(s,"dex")*.7-(ht(r,"vit")*.3+ht(r,"luk")*.2)));f(r,u,!1)}break;case"cripple":{if(!r)break;let u=1;r.agi=Math.max(1,(r.agi||0)-u),s.agi=(s.agi||0)+u,d(r.x,r.y,`-${u} AGI`,!1),d(s.x,s.y,`+${u} AGI`,!0)}break;case"execute":if(r){let u=Math.max(1,Math.floor(ht(s,"agi")*.8-(ht(r,"vit")*.3+ht(r,"luk")*.2)));f(r,u,!1)}break;case"berserk":r&&(f(r,Math.max(1,Math.floor(ht(s,"str")*.8-ht(r,"vit")*.3+ht(r,"luk")*.2)),!1),f(s,3,!1));break;case"bloodlust":{let u=Math.max(1,Math.floor((s.maxHp-s.hp)*.2));s.tempBuff=s.tempBuff||{},s.tempBuff.str=u,s.tempBuff.vit=u,s.tempBuff.duration=2,d(s.x,s.y,`+${u} STR, +${u} VIT`,!0)}break;case"hex":{if(!r)break;let u=1;r.int=Math.max(1,(r.int||0)-u),s.int=(s.int||0)+u,d(r.x,r.y,`-${u} INT`,!1),d(s.x,s.y,`+${u} INT`,!0)}break;case"drain":{if(!r)break;let u=Math.max(1,Math.ceil(ht(s,"int")*.6-(ht(r,"int")*.4+ht(r,"luk")*.2)));f(r,u,!1,!0),f(s,u,!0)}break;case"blind":{if(!r)break;let u=1;r.dex=Math.max(1,(r.dex||0)-u),s.dex=(s.dex||0)+u,d(r.x,r.y,`-${u} DEX`,!1),d(s.x,s.y,`+${u} DEX`,!0)}break;case"shuriken":{if(!r)break;let u=Math.max(1,Math.floor(ht(s,"dex")*.7-(ht(r,"vit")*.3+ht(r,"luk")*.2)));f(r,u,!1)}break;case"iaido":s.tempBuff=s.tempBuff||{},s.tempBuff.str=1,s.tempBuff.dex=1,s.tempBuff.duration=4,d(s.x,s.y,"+1 STR, +1 DEX",!0);break;case"chokuto":{if(!r)break;let u=Math.max(1,Math.floor(ht(s,"str")*.4+ht(s,"dex")*.4-(ht(r,"vit")*.3+ht(r,"luk")*.2)));f(r,u,!1)}break;case"bite":{if(!r)break;let u=Math.max(1,Math.floor(ht(s,"str")*.7+ht(s,"agi")*.1-(ht(r,"vit")*.3+ht(r,"luk")*.2)));f(r,u,!1)}break;case"howl":s.tempBuff=s.tempBuff||{},s.tempBuff.str=2,s.tempBuff.agi=2,s.tempBuff.duration=4,d(s.x,s.y,"+2 STR, +2 AGI",!0);break;case"sacrifice":{let u=Math.max(1,Math.floor(ht(s,"int")*.4));f(r,u,!0),f(s,3,!1)}break;case"judgement":{if(!r)break;let u=Math.max(1,Math.floor(s.maxHp-s.hp-(ht(r,"int")*.3+ht(r,"luk")*.2+ht(r,"vit")*.1)));f(r,u,!1,!0)}break;case"sanctuary":s.tempBuff=s.tempBuff||{},s.tempBuff.str=1,s.tempBuff.vit=1,s.tempBuff.dex=1,s.tempBuff.agi=1,s.tempBuff.int=1,s.tempBuff.luk=1,s.tempBuff.duration=3,r.tempBuff=r.tempBuff||{},r.tempBuff.str=1,r.tempBuff.vit=1,r.tempBuff.dex=1,r.tempBuff.agi=1,r.tempBuff.int=1,r.tempBuff.luk=1,r.tempBuff.duration=3,d(s.x,s.y,"+1 ALL STATS",!0),d(r.x,r.y,"+1 ALL STATS",!0);break;case"exorcise":{if(!r)break;let u=Math.max(1,Math.floor(r.maxHp-r.hp-(ht(r,"int")*.4+ht(r,"luk")*.2)));f(r,u,!1,!0)}break;case"raid":r.luk=Math.max(1,(r.luk||0)-2),s.luk=(s.luk||0)+2,d(r.x,r.y,"-2 LUK",!1),d(s.x,s.y,"+2 LUK",!0);break;case"ambush":{if(!r)break;let u=Math.max(1,Math.floor(ht(s,"luk")*.7-(ht(r,"vit")*.3+ht(r,"luk")*.2)));f(r,u,!1)}break;case"windWalk":s.tempBuff=s.tempBuff||{},s.tempBuff.dex=1,s.tempBuff.agi=3,s.tempBuff.duration=3,d(s.x,s.y,"+1 DEX, +3 AGI",!0);break;case"powerShot":{if(!r)break;let u=Math.max(1,Math.floor(ht(s,"dex")*.6-(ht(r,"vit")*.3+ht(r,"luk")*.2)));if(f(r,u,!1)&&n.world&&n.units&&n.updateUnitPosition){let v=Math.max(1,Math.floor(u*.2)),g=Dx(n.world,n.units,s,r,v),p=r.x,M=r.y;r.x=g.newGx,r.y=g.newGy,g.collisionDamage>0?(n.updateUnitPosition(r),n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(r),f(r,g.collisionDamage,!1)):n.animateKnockback?n.animateKnockback(r,p,M,g.newGx,g.newGy,()=>{n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(r)}):(n.updateUnitPosition(r),n.updateUnitSlashVisibility&&n.updateUnitSlashVisibility(r))}}break;case"forge":s.tempBuff=s.tempBuff||{},s.tempBuff.str=2,s.tempBuff.duration=3,r.tempBuff=r.tempBuff||{},r.tempBuff.str=2,r.tempBuff.duration=3,d(s.x,s.y,"+2 STR",!0),d(r.x,r.y,"+2 STR",!0);break;case"fortify":s.tempBuff=s.tempBuff||{},s.tempBuff.str=3,s.tempBuff.vit=3,s.tempBuff.duration=3,r.tempBuff=r.tempBuff||{},r.tempBuff.str=3,r.tempBuff.vit=3,r.tempBuff.duration=3,d(s.x,s.y,"+3 STR, +3 VIT",!0),d(r.x,r.y,"+3 STR, +3 VIT",!0);break;case"poison":{if(!r)break;let u=Math.max(1,Math.floor(ht(r,"luk")*.2));r.tempDebuff=r.tempDebuff||{},r.tempDebuff.poison=u,r.tempDebuff.duration=3,d(r.x,r.y,"Poisoned for 2 turns",!1)}break;case"concoct":{if(!r)break;let u=Math.max(1,Math.floor(ht(s,"int")*.8-(ht(r,"int")*.4+ht(r,"luk")*.2)));f(r,u,!1,!0);let y=Math.max(1,Math.floor(u*.5));s.luk=Math.max(1,(s.luk||0)+y),d(s.x,s.y,`+${y} LUK`,!0)}break;default:break}console.log("[SKILL]",`${s.name} (${s.class}, P${s.player})`,"uses",l,"\u2192",c,`| MP ${s.mp}`,h!=null?`| ${h} dmg`:""),n.updateTurnUI&&n.updateTurnUI()}function Px(){let i=Ex,t=Tx,e=Array.from({length:t},()=>Array(i).fill(!1)),n=Array.from({length:t},()=>Array(i).fill(0)),s=Array.from({length:t},()=>Array(i).fill(jt.GRASS)),r=Math.floor(i/2),a=Math.floor(i/2),o=0,l=t-1;for(let U=-1;U<=1;U++)for(let k=-2;k<=2;k++){let j=r+k,P=o+U;j>=0&&j<i&&P>=0&&P<t&&(e[P][j]=!0,s[P][j]=jt.BASE_TOP,n[P][j]=1)}for(let U=-1;U<=1;U++)for(let k=-2;k<=2;k++){let j=a+k,P=l+U;j>=0&&j<i&&P>=0&&P<t&&(e[P][j]=!0,s[P][j]=jt.BASE_BOTTOM,n[P][j]=1)}let c=Math.floor(i/2),h=Math.floor(t/2);for(let U=-1;U<=1;U++)for(let k=-2;k<=2;k++){let j=c+k,P=h+U;j>=0&&j<i&&P>=0&&P<t&&(e[P][j]=!0,s[P][j]=jt.CENTER,n[P][j]=1)}let f=new Set,d=(U,k)=>Math.abs(U-c)<=2&&Math.abs(k-h)<=1,u=(U,k)=>{U<0||U>=i||k<0||k>=t||d(U,k)||f.add(k*i+U)},y=Math.floor(i/2),v=Math.floor(t/2),g=Math.min(i,t)*.29,p=Math.max(60,(t+i)*2);for(let U=0;U<2;U++){let k=U===0?y-g:y+g,j=U===0?Math.PI/2:-Math.PI/2,P=U===0?Math.PI*3/2:Math.PI/2;for(let V=0;V<=p;V++){let $=V/p,at=j+$*(P-j),O=k+g*Math.cos(at),it=v+g*Math.sin(at),Z=Math.round(O),ut=Math.round(it);u(Z,ut),u(Z+1,ut),u(Z-1,ut),u(Z,ut+1),u(Z,ut-1)}}let M=[[0,1],[0,-1],[1,0],[-1,0]];for(let U=0;U<1;U++){let k=[];f.forEach(j=>{let P=j%i,V=j/i|0;for(let[$,at]of M){let O=P+$,it=V+at;if(O<0||O>=i||it<0||it>=t)continue;let Z=it*i+O;f.has(Z)||k.push(Z)}}),k.forEach(j=>f.add(j))}f.forEach(U=>{let k=U%i,j=U/i|0;s[j][k]===jt.BASE_TOP||s[j][k]===jt.BASE_BOTTOM||s[j][k]===jt.CENTER||(e[j][k]=!0,s[j][k]=jt.PATH,n[j][k]=1)});let _=Math.round(y-g*1.6),T=Math.round(y+g*1.6),N=Math.round(y-g),I=Math.round(y+g),D=1;for(let U=h-D;U<=h+D;U++)if(!(U<0||U>=t))for(let k=_;k<=T;k++)k<0||k>=i||(e[U][k]=!0,s[U][k]!==jt.CENTER&&s[U][k]!==jt.BASE_TOP&&s[U][k]!==jt.BASE_BOTTOM&&(s[U][k]=jt.PATH),n[U][k]=Math.max(n[U][k],1));function W(U,k,j,P){let V=Math.max(1,Math.min(U,k)),$=Math.min(t-2,Math.max(U,k)),at=Math.max(1,Math.min(j,P)),O=Math.min(i-2,Math.max(j,P));for(let it=V;it<=$;it++)for(let Z=at;Z<=O;Z++)s[it][Z]===jt.BASE_TOP||s[it][Z]===jt.BASE_BOTTOM||s[it][Z]===jt.CENTER||(e[it][Z]=!0,s[it][Z]=jt.PATH,n[it][Z]=1)}let S=3,A=3;W(o,o+S-1,N,r-1),W(o,o+S-1,r+1,I),W(l-A+1,l,N,a-1),W(l-A+1,l,a+1,I);for(let U=-1;U<=2;U++)for(let k=-2;k<=2;k++){let j=r+k,P=o+U;j>=0&&j<i&&P>=0&&P<t&&(e[P][j]=!0,s[P][j]=jt.BASE_TOP,n[P][j]=1)}for(let U=-2;U<=1;U++)for(let k=-2;k<=2;k++){let j=a+k,P=l+U;j>=0&&j<i&&P>=0&&P<t&&(e[P][j]=!0,s[P][j]=jt.BASE_BOTTOM,n[P][j]=1)}for(let U=0;U<t;U++)for(let k=0;k<i;k++){if(e[U][k]||s[U][k]===jt.BASE_TOP||s[U][k]===jt.BASE_BOTTOM||s[U][k]===jt.CENTER)continue;let j=Math.abs(k-r)<=4&&Math.abs(U-o)<=3,P=Math.abs(k-a)<=4&&Math.abs(U-l)<=3,V=j||P,$=Math.random();$<.55&&!V?(s[U][k]=jt.TREE,n[U][k]=1+Math.floor(Math.random()*2)):$<.75||V&&$<.5?(s[U][k]=jt.WATER,n[U][k]=0):(s[U][k]=jt.ROCK,n[U][k]=1+Math.floor(Math.random()*2))}return{w:i,h:t,path:e,height:n,type:s,topBaseX:r,topBaseY:o,botBaseX:a,botBaseY:l}}function Ix(i,t,e){let n=t===1?jt.BASE_BOTTOM:jt.BASE_TOP,s=[];for(let r=0;r<i.h;r++)for(let a=0;a<i.w;a++)i.type[r][a]===n&&(e&&e.has(r*i.w+a)||s.push({gx:a,gy:r}));return s}function Lx(i){let t=[];for(let e=0;e<i.h;e++)for(let n=0;n<i.w;n++)i.type[e][n]===jt.CENTER&&t.push({gx:n,gy:e});return t}function Su(i,t){let e=Lx(i);if(e.length===0)return t;let n=s=>Math.min(...e.map(r=>Math.abs(s.gx-r.gx)+Math.abs(s.gy-r.gy)));return[...t].sort((s,r)=>n(s)-n(r))}function nr(i,t,e){if(t<0||t>=i.w||e<0||e>=i.h)return!1;let n=i.type[e][t];return!(n===jt.TREE||n===jt.WATER||n===jt.ROCK)}function Dx(i,t,e,n,s){let r=n.x,a=n.y,o=n.x-e.x,l=n.y-e.y,c=Math.abs(o)>=Math.abs(l)?o>0?1:o<0?-1:0:0,h=Math.abs(l)>Math.abs(o)?l>0?1:l<0?-1:0:0;if(c===0&&h===0)return{newGx:r,newGy:a,collisionDamage:0};let f=0;for(let d=0;d<s;d++){let u=r+c,y=a+h,v=u<0||u>=i.w||y<0||y>=i.h,g=!nr(i,u,y),p=t.some(M=>M.hp>0&&M.id!==n.id&&M.x===u&&M.y===y);if(v||g||p){let M=Math.max(1,f*3+Math.floor((e.str||0)*.3));return{newGx:r,newGy:a,collisionDamage:M}}r=u,a=y,f++}return{newGx:r,newGy:a,collisionDamage:0}}function Ux(i,t,e,n){let s=[],r=i,a=t,o=e,l=n,c=Math.abs(o-r),h=Math.abs(l-a),f=r<o?1:-1,d=a<l?1:-1,u=c-h;for(;s.push({x:r,y:a}),!(r===o&&a===l);){let y=2*u;y>-h&&(u-=h,r+=f),y<c&&(u+=c,a+=d)}return s}function ys(i,t,e,n,s){let r=Ux(t,e,n,s);for(let a=1;a<r.length-1;a++){let o=r[a];if(!nr(i,o.x,o.y))return!1}return!0}function ro(i,t,e,n,s,r){let a=(f,d)=>d*i.w+f,o=new Map;o.set(a(t,e),0);let l=[{x:t,y:e,d:0}],c=[[0,1],[0,-1],[1,0],[-1,0]],h=s!=null&&r!=null;for(;l.length;){let{x:f,y:d,d:u}=l.shift();if(!(u>=n))for(let[y,v]of c){let g=f+y,p=d+v;if(!nr(i,g,p))continue;if(h){let T=s.find(N=>N.hp>0&&N.x===g&&N.y===p);if(T&&T.player!==r.player)continue}let M=a(g,p);if(o.has(M))continue;let _=u+1;o.set(M,_),l.push({x:g,y:p,d:_})}}return o}function Eu(i,t,e,n){let s=new Map;for(let r=0;r<i.h;r++)for(let a=0;a<i.w;a++){let o=Math.abs(a-t)+Math.abs(r-e);o>=1&&o<=n&&s.set(r*i.w+a,o)}return s}function es(i,t,e,n,s,r,a){if(t===n&&e===s)return[{x:t,y:e}];let o=(d,u)=>u*i.w+d,l=new Map,c=[{x:t,y:e}];l.set(o(t,e),null);let h=[[0,1],[0,-1],[1,0],[-1,0]];function f(d,u){if(!nr(i,d,u))return!1;let y=r.find(v=>v.hp>0&&v.x===d&&v.y===u);return y?y.id===a.id||y.player===a.player:!0}for(;c.length;){let{x:d,y:u}=c.shift();if(d===n&&u===s){let y=[],v={x:n,y:s};for(;v;)y.unshift(v),v=l.get(o(v.x,v.y));return y}for(let[y,v]of h){let g=d+y,p=u+v,M=o(g,p);l.has(M)||f(g,p)&&(l.set(M,{x:d,y:u}),c.push({x:g,y:p}))}}return null}var Tu={[jt.PATH]:2976557,[jt.GRASS]:2968109,[jt.TREE]:1719578,[jt.WATER]:1989278,[jt.ROCK]:4872778,[jt.BASE_TOP]:8014410,[jt.BASE_BOTTOM]:4872826,[jt.CENTER]:13940810};function wu(i){return i.w*Se/2}function Au(i){return i.h*Se/2}function Ru(i){let t=document.createElement("canvas");t.width=i,t.height=i;let e=t.getContext("2d"),n=e.createImageData(i,i),s=n.data;for(let a=0;a<s.length;a+=4){let o=Math.floor(128+(Math.random()-.5)*80);s[a]=s[a+1]=s[a+2]=o,s[a+3]=255}e.putImageData(n,0,0);let r=new Ha(t);return r.wrapS=r.wrapT=br,r.repeat.set(4,4),r.needsUpdate=!0,r}function Nx(i){let t=new ai,e=wu(i),n=Au(i),s=new Tn(Se,qn,Se),r=Ru(64),a=.88,o=.02,l=[];function c(d,u,y,v,g){let p=new On({color:3828266,roughness:.9});p.bumpMap=r,p.bumpScale=.12;for(let M=0;M<v;M++){let _=.08+Math.random()*g,T=.03+Math.random()*.03,N=new Zt(new ts(T*.5,T,_,6),p);N.position.set(d+(Math.random()-.5)*.5,y+_/2,u+(Math.random()-.5)*.5),N.rotation.x=(Math.random()-.5)*.2,N.rotation.z=(Math.random()-.5)*.2,N.castShadow=!0,t.add(N)}}let h=.12;function f(d,u,y,v){let g=y+.02,p=[[d-h,g,u-h],[d+h,g,u+h],[d-h,g,u+h],[d+h,g,u-h],[d-h+.06,g,u-h+.06],[d+h-.06,g,u+h-.06],[d-h+.06,g,u+h-.06],[d+h-.06,g,u-h+.06]],M=new Float32Array(p.length*3);p.forEach((I,D)=>{M[D*3]=I[0],M[D*3+1]=I[1],M[D*3+2]=I[2]});let _=new Qn;_.setAttribute("position",new jn(M,3)),_.computeBoundingSphere();let T=new Cr({color:855309,linewidth:1}),N=new ka(_,T);v.add(N)}for(let d=0;d<i.h;d++)for(let u=0;u<i.w;u++){let y=i.type[d][u],v=i.height[d][u],g=Tu[y],p=qn+v*.35,M=p/2+qn/2,_=new On({roughness:Math.max(.7,Math.min(1,a+(Math.random()-.5)*.18)),metalness:Math.max(0,Math.min(.1,o+(Math.random()-.5)*.04))}),T=(g>>16&255)/255,N=(g>>8&255)/255,I=(g&255)/255,D=T,W=N,S=I;if(y===jt.PATH||y===jt.TREE||y===jt.ROCK){let at=Math.random()*.45;D=T*(1-at)+.42*at,W=N*(1-at)+.26*at,S=I*(1-at)+.14*at}(y===jt.TREE||y===jt.ROCK)&&(D*=.5,W*=.5,S*=.5);let A=1+(Math.random()-.5)*.12;_.color.setRGB(Math.min(1,D*A),Math.min(1,W*A),Math.min(1,S*A)),_.bumpMap=r,_.bumpScale=.12;let U=new Zt(s,_);U.position.set(u*Se-e+Se/2,p/2,d*Se-n+Se/2),U.castShadow=!0,U.receiveShadow=!0,U.userData={gx:u,gy:d,type:y},t.add(U);let k=u*Se-e+Se/2,j=d*Se-n+Se/2;if(y===jt.TREE&&f(k,j,M,t),y===jt.TREE){let P=new ai;P.position.set(k,M,j);let V=u===0||u===i.w-1||d===0||d===i.h-1,$=V?.75+Math.random()*.35:.5+Math.random()*.2,at=new ge(4007959),O=()=>1+(Math.random()-.5)*.4;at.r=Math.min(1,Math.max(0,at.r*O())),at.g=Math.min(1,Math.max(0,at.g*O())),at.b=Math.min(1,Math.max(0,at.b*O()));let it=.85+Math.random()*.2,Z=new On({color:at,roughness:it});Z.bumpMap=r,Z.bumpScale=.1+Math.random()*.12;let ut=new Zt(new ts(.12,.14,$,8),Z);ut.position.set(0,$/2,0),ut.castShadow=!0,ut.raycast=function(){},P.add(ut);let Pt=r.clone();Pt.repeat.set(3,3);let et=new ge(2972205),ot=()=>1+(Math.random()-.5)*.44;et.r=Math.min(1,Math.max(0,et.r*ot())),et.g=Math.min(1,Math.max(0,et.g*ot())),et.b=Math.min(1,Math.max(0,et.b*ot()));let Lt=.78+Math.random()*.24,Xt=new On({color:et,roughness:Lt});Xt.bumpMap=Pt,Xt.bumpScale=.16+Math.random()*.14;let Ft=V?.52:.45,he=V?1.05:.9,ue=.12,Jt=he*.5,Ae=he*.45,X=he*.4,un=new Zt(new yi(Ft,Jt,8),Xt);un.position.set(0,$+Jt/2,0),un.castShadow=!0,un.raycast=function(){},P.add(un);let $t=new Zt(new yi(Ft*.75,Ae,8),Xt);$t.position.set(0,$+Jt-ue+Ae/2,0),$t.castShadow=!0,$t.raycast=function(){},P.add($t);let ne=new Zt(new yi(Ft*.5,X,8),Xt);ne.position.set(0,$+Jt-ue+Ae-ue+X/2,0),ne.castShadow=!0,ne.raycast=function(){},P.add(ne),t.add(P),l.push(P)}else if(y===jt.WATER){let P=Tu[jt.WATER],V=(P>>16&255)/255,$=(P>>8&255)/255,at=(P&255)/255,O=1+(Math.random()-.5)*.12,it=new On({color:new ge().setRGB(Math.min(1,V*O),Math.min(1,$*O),Math.min(1,at*O)),roughness:.08,metalness:.45,transparent:!0,opacity:.94,bumpMap:r,bumpScale:.03}),Z=new Zt(new Ni(Se,Se),it);Z.rotation.x=-Math.PI/2,Z.position.set(k,M+.02,j),Z.receiveShadow=!0,t.add(Z)}else if(y===jt.ROCK){let P=new On({color:6974058,roughness:.9});P.bumpMap=r,P.bumpScale=.2;let V=(it,Z,ut)=>{let Pt=new Zt(new Xa(it,0),P);Pt.position.set(k+Z,M+it-.2,j+ut),Pt.rotation.set(Math.random(),Math.random(),Math.random()),Pt.castShadow=!0,t.add(Pt)},$=.32+Math.random()*.14,at=.2+Math.random()*.12,O=.12+Math.random()*.12;V($,(Math.random()-.5)*.15,(Math.random()-.5)*.15),V(at,(Math.random()-.5)*.25,(Math.random()-.5)*.25),V(O,(Math.random()-.5)*.28,(Math.random()-.5)*.28)}}return t.userData.treeGroups=l,t}function Ox(){let i=document.querySelector("#mode-select-overlay .mode-select-instructions");i&&console.log(i.textContent.trim());let t=Px(),e=document.getElementById("canvas-wrap"),n=new Ba;n.background=new ge(1711652),n.fog=new Fa(1711652,30,90);let s=t.w*Se/2,r=t.h*Se/2,a=new Wn(50,e.clientWidth/e.clientHeight,.1,200),o=17,l=.003,c=new F(12,38,16).normalize().multiplyScalar(o),h=new F,f=new F,d=new mi(new F(0,1,0),0),u=new F,y=new F,v=!1,g=!1,p=!0,M=!1,_=null,T=5,N=.004,I=-Math.PI*.4,D=Math.PI*.4,W=new F,S={x:0,y:0},A=1,U=40,k=.005,j=.15,P=null,V=new $a(16777215,.45);n.add(V);let $=new Ya(16774630,1.1);$.position.set(30,50,20),$.castShadow=!0,$.shadow.mapSize.width=2048,$.shadow.mapSize.height=2048,$.shadow.camera.near=1,$.shadow.camera.far=120,$.shadow.camera.left=-50,$.shadow.camera.right=50,$.shadow.camera.top=50,$.shadow.camera.bottom=-50,n.add($);let at=Nx(t);n.add(at);let O=[],it=1,Z=new Map,ut=Ru(64),Pt=wu(t),et=Au(t);function ot(x,m){let w=(qn+t.height[m][x]*.35)/2+qn/2;return new F(x*Se-Pt+Se/2,w,m*Se-et+Se/2)}function Lt(x,m){let R=(x>>16&255)/255,w=(x>>8&255)/255,B=(x&255)/255,H=1+(Math.random()-.5)*m;return new ge(Math.min(1,R*H),Math.min(1,w*H),Math.min(1,B*H))}let Xt=.62;function Ft(x,m){m=m??Xt;let R=x instanceof ge?x:new ge(x);return new ge(Math.max(0,R.r*m),Math.max(0,R.g*m),Math.max(0,R.b*m))}function he(x,m,R){let w=io[m]||io.knight,B=Ft(Lt(w.primary,.08)),H=Ft(Lt(w.secondary,.08)),q=ze[m]&&ze[m].gender||"male",z=R??4006676,Y=Ft(Lt(w.skin!=null?w.skin:15250592,.06)),rt=Ft(Lt(z,.08)),dt=()=>(Math.random()-.5)*.08,At=()=>(Math.random()-.5)*.04,tt=new On({color:B,metalness:Math.max(0,.25+At()),roughness:Math.max(.3,Math.min(1,.5+dt()))});tt.bumpMap=ut,tt.bumpScale=.1;let st=new On({color:H,metalness:Math.max(0,.2+At()),roughness:Math.max(.3,Math.min(1,.55+dt()))});st.bumpMap=ut,st.bumpScale=.1;let bt=new On({color:B,metalness:Math.max(0,.25+At()),roughness:Math.max(.3,Math.min(1,.5+dt()))});bt.bumpMap=ut,bt.bumpScale=.1;let se=new On({color:Y,metalness:.1,roughness:Math.max(.5,Math.min(1,.7+dt()))});se.bumpMap=ut,se.bumpScale=.05;let Wt=new ai,ce=.28,Fe=.08,ke=.08,je=new Zt(new Tn(Fe,ce,ke),st);je.position.set(-.06,ce/2,0),je.castShadow=!0,Wt.add(je);let pn=new Zt(new Tn(Fe,ce,ke),st);pn.position.set(.06,ce/2,0),pn.castShadow=!0,Wt.add(pn);let He=.28,Le=.2,me=.12,qe=new Zt(new Tn(Le,He,me),tt);qe.position.set(0,ce+He/2,0),qe.castShadow=!0,Wt.add(qe);let _e=.06,Qe=.22,tn=.06,En=new Zt(new Tn(_e,Qe,tn),bt);En.position.set(-(Le/2+_e/2),ce+He-.08,0),En.castShadow=!0,Wt.add(En);let Pn=new Zt(new Tn(_e,Qe,tn),bt);if(Pn.position.set(Le/2+_e/2,ce+He-.08,0),Pn.castShadow=!0,Wt.add(Pn),w.cape!=null){let Ct=Le*1.95,Et=Ct*.6,Ut=ce+He*.28,De=new js;De.moveTo(-Et/2,Ut/2),De.lineTo(Et/2,Ut/2),De.lineTo(Ct/2,-Ut/2),De.lineTo(-Ct/2,-Ut/2),De.closePath();let $e=new Ur(De),Gt=new On({color:Ft(Lt(w.cape,.08)),metalness:.15,roughness:Math.max(.5,Math.min(1,.8+dt())),side:mn});Gt.bumpMap=ut,Gt.bumpScale=.12;let ae=new Zt($e,Gt);ae.position.set(0,ce+He-Ut/2+.05,-me/2-.02),ae.rotation.y=Math.PI,ae.castShadow=!0,Wt.add(ae);let be=.055,ln=ce+He+.02,en=.02,an=Le/2+_e*.5,Ye=new Zt(new Ei(be,10,8,0,Math.PI*2,0,Math.PI*.55),Gt.clone());Ye.position.set(-an,ln,en),Ye.rotation.x=-Math.PI*.35,Ye.rotation.z=Math.PI*.5,Ye.scale.set(1.2,.85,1.1),Ye.castShadow=!0,Wt.add(Ye);let In=new Zt(new Ei(be,10,8,0,Math.PI*2,0,Math.PI*.55),Gt.clone());In.position.set(an,ln,en),In.rotation.x=-Math.PI*.35,In.rotation.z=-Math.PI*.5,In.scale.set(1.2,.85,1.1),In.castShadow=!0,Wt.add(In)}if(w.belt!=null){let Ct=new On({color:Ft(Lt(w.belt,.08)),metalness:.2,roughness:Math.max(.4,Math.min(1,.6+dt()))});Ct.bumpMap=ut,Ct.bumpScale=.1;let Et=.022,Ut=.04,De=new Zt(new Tn(Le+.04,Et,me+Ut),Ct);De.position.set(0,ce+.04,0),De.castShadow=!0,Wt.add(De)}if(w.apron!=null){let Ct=new On({color:Ft(Lt(w.apron,.08)),metalness:.08,roughness:Math.max(.5,Math.min(1,.75+dt())),side:mn});Ct.bumpMap=ut,Ct.bumpScale=.12;let Et=Le*.95,Ut=ce*.85,De=new Zt(new Ni(Et,Ut),Ct),$e=ce+.2;De.position.set(0,$e-Ut/2,me/2+.02),De.castShadow=!0,Wt.add(De);let Gt=ce+He+.02,ae=Le/2+_e*.2,be=.018,ln=.008,en=Gt-$e,an=new Zt(new Tn(be,en,ln),Ct.clone());an.position.set(-ae,($e+Gt)/2,me/2+.015),an.castShadow=!0,Wt.add(an);let Ye=new Zt(new Tn(be,en,ln),Ct.clone());Ye.position.set(ae,($e+Gt)/2,me/2+.015),Ye.castShadow=!0,Wt.add(Ye)}let lt=.1,mt=new Zt(new Ei(lt,12,10),se);mt.position.set(0,ce+He+lt,0),mt.castShadow=!0,Wt.add(mt);let St=new gn({color:1710638}),pt=new Zt(new Tn(.032,.004,.004),St);pt.position.set(-.032,.028,lt*.92),mt.add(pt);let ft=new Zt(new Tn(.032,.004,.004),St);ft.position.set(.032,.028,lt*.92),mt.add(ft);let xt=new gn({color:2957087}),Rt=new Zt(new Tn(.045,.012,.008),xt);Rt.position.set(0,-.028,lt*.92),mt.add(Rt);let _t=new On({color:rt,metalness:.05,roughness:Math.max(.6,Math.min(1,.85+dt()))});_t.bumpMap=ut,_t.bumpScale=.15;let re=Ct=>{let Et=lt*.32,Ut=lt*.22,De=new Zt(new yi(Ut*.9,Et,5),_t);De.position.set(-lt*.25,lt*.22,lt*.72),De.rotation.x=.35,De.rotation.z=.12,De.castShadow=!0,Ct.add(De);let $e=new Zt(new yi(Ut,Et,5),_t);$e.position.set(lt*.28,lt*.18,lt*.68),$e.rotation.x=.28,$e.rotation.z=-.1,$e.castShadow=!0,Ct.add($e);let Gt=new Zt(new yi(Ut*.7,Et*.9,5),_t);Gt.position.set(0,lt*.28,lt*.78),Gt.rotation.x=.4,Gt.castShadow=!0,Ct.add(Gt)};if(q==="female"){let Ct=new Zt(new Ei(lt*.92,12,10,0,Math.PI*2,0,Math.PI*.52),_t);Ct.position.set(0,lt*.28,-lt*.18),Ct.rotation.y=.06,Ct.rotation.x=-.04,Ct.castShadow=!0,mt.add(Ct);let Et=new Zt(new Tn(lt*1.15,lt*2.2,lt*.55),_t);Et.position.set(0,-lt*.6,-lt*.95),Et.rotation.z=.03,Et.castShadow=!0,mt.add(Et),re(mt)}else{let Ct=new Zt(new Ei(lt*.9,12,10,0,Math.PI*2,0,Math.PI*.5),_t);Ct.position.set(0,lt*.4,-lt*.12),Ct.rotation.y=.08,Ct.rotation.x=-.05,Ct.rotation.z=.04,Ct.castShadow=!0,mt.add(Ct);let Et=new Zt(new Ei(lt*.75,10,8,Math.PI*.2,Math.PI*.6,0,Math.PI*.4),_t);Et.position.set(0,lt*.1,-lt*.05),Et.rotation.y=.1,Et.castShadow=!0,mt.add(Et),re(mt)}return Wt.userData.leftLeg=je,Wt.userData.rightLeg=pn,Wt.userData.leftArm=En,Wt.userData.rightArm=Pn,Wt}function ue(x,m){let R=x.userData;if(!R.leftLeg)return;let w=m*Math.PI*2,B=.35,H=.28;R.leftLeg.rotation.x=Math.sin(w)*B,R.rightLeg.rotation.x=Math.sin(w+Math.PI)*B,R.leftArm.rotation.y=Math.sin(w+Math.PI)*H,R.rightArm.rotation.y=Math.sin(w)*H}function Jt(x){let m=x.userData;m.leftLeg&&(m.leftLeg.rotation.x=0,m.rightLeg.rotation.x=0,m.leftArm.rotation.y=0,m.rightArm.rotation.y=0)}function Ae(x){let m=he(x.player,x.class,x.hairColor);m.position.copy(ot(x.x,x.y)),m.castShadow=!0,m.userData.unitId=x.id;let R=.28,w=.28,B=.12,H=.18,q=.04,z=new Ni(H,q),Y=new gn({color:6037528,side:mn,depthTest:!0,depthWrite:!1}),rt=new Zt(z,Y);rt.position.set(0,R+w/2,B/2+.02),rt.rotation.x=-Math.PI/2,rt.rotation.z=Math.PI/4,rt.visible=x.maxHp>0&&x.hp<x.maxHp&&x.hp>0,m.add(rt),m.userData.slashMark=rt,n.add(m),Z.set(x.id,m),$t(m,x.maxHp>0&&x.hp/x.maxHp<.35)}function X(x){let m=Z.get(x.id);!m||!m.userData.slashMark||(m.userData.slashMark.visible=x.maxHp>0&&x.hp<x.maxHp&&x.hp>0)}let un=.35;function $t(x,m){if(x)if(m){x.rotation.x=.35,x.scale.setScalar(.96);let R=x.userData;R&&R.leftArm&&R.rightArm&&(R.leftArm.rotation.y=.2,R.rightArm.rotation.y=.2),x.traverse(w=>{w.isMesh&&w.material&&w.material.color&&(w.userData.originalColor||(w.userData.originalColor=w.material.color.clone()),w.material.color.copy(w.userData.originalColor).multiplyScalar(.82))})}else{x.rotation.x=0,x.scale.setScalar(1);let R=x.userData;R&&R.leftArm&&R.rightArm&&(R.leftArm.rotation.y=0,R.rightArm.rotation.y=0),x.traverse(w=>{w.isMesh&&w.material&&w.userData.originalColor&&w.material.color.copy(w.userData.originalColor)})}}function ne(x){if(x.level>=3)return;let m=x.maxHp>0?x.hp/x.maxHp:1;x.level+=1;let R=B=>Math.max(1,Math.ceil(B*1.1)),w=B=>Math.max(1,Math.ceil(B*1.1));x.maxHp=R(x.maxHp),x.maxMp=R(x.maxMp),x.hp=Math.max(1,Math.min(x.maxHp,Math.ceil(m*x.maxHp))),x.mp=Math.max(1,Math.min(x.maxMp,Math.ceil(m*x.maxMp))),x.str=w(x.str),x.agi=w(x.agi),x.vit=w(x.vit),x.dex=w(x.dex),x.luk=w(x.luk),x.int=w(x.int),x.range>2&&(x.range=w(x.range)),console.log("[LEVEL UP]",`${x.name} (${x.class}, P${x.player})`,`\u2192 Lv.${x.level}`,`| HP ${x.hp}/${x.maxHp} MP ${x.mp}/${x.maxMp} STR ${x.str} VIT ${x.vit}`),Yt(x)}function Yt(x){let m=Z.get(x.id),R=x.level===3?"levelup level3":x.level===2?"levelup level2":"levelup";if(Xu(x,R),!m)return;let w=performance.now(),B=0;function H(q){B++,B%2===0&&dn();let z=q-w,Y=Math.min(1,z/wt),rt=Y<.5?1+.35*(Y/.5):1+.35*(1-(Y-.5)/.5);m.scale.setScalar(rt),Y<1?requestAnimationFrame(H):m.scale.setScalar(1)}requestAnimationFrame(H)}let Ze=400,ve=280,C=.45,b=160,K=280,Tt=350,yt=500,wt=600,qt=!1,Dt=new F,zt=new F,te=new F,xe=new F;function gt(x=!1){p=!0;let m=null;if(Vt==="playing"&&ct.length>0){let q=ct[L];m=O.find(z=>z.id===q&&z.hp>0)}if(m||(m=O.find(q=>q.player===Kt&&q.hp>0)),!m)return;let R=a.position.distanceTo(h);if(R<.1&&(R=o),f.copy(a.position).sub(h).normalize(),f.lengthSq()<.01&&f.copy(c).normalize(),te.copy(ot(m.x,m.y)),xe.copy(te).add(f.clone().multiplyScalar(R)),x||qt){h.copy(te),a.position.copy(xe),a.lookAt(h),dn();return}qt=!0,Dt.copy(h),zt.copy(a.position);let w=performance.now(),B=0;Cn.shadowMap.enabled=!1;function H(q){B++,B%2===0&&dn();let z=Math.min(1,(q-w)/Ze),Y=z*(2-z);h.lerpVectors(Dt,te,Y),a.position.lerpVectors(zt,xe,Y),a.lookAt(h),z<1?requestAnimationFrame(H):(Cn.shadowMap.enabled=!0,qt=!1)}requestAnimationFrame(H)}let Pe=0,Kt=1,Vt="draft",kt="pvp",Ht="balanced",de=new Set(no),Ue=0,Ie=null,pe=new Set,ct=[],L=0,vt=null,Mt=new Map,oe=null;function ee(x){if(!x||x.hp<=0)return;oe=x.id;let m=document.getElementById("unit-preview-card"),R=document.getElementById("unit-preview-image"),w=document.getElementById("unit-preview-name"),B=document.getElementById("unit-preview-meta"),H=document.getElementById("unit-preview-stats");m.classList.remove("player-1","player-2"),m.classList.add(x.player===1?"player-1":"player-2"),m.classList.toggle("level-2",x.level>=2&&x.level<3),m.classList.toggle("level-3",x.level>=3),R.src=Br[x.class]||"",R.alt=x.name,w.textContent=x.name,B.textContent=`Lv.${x.level} ${x.class} \u2014 Player ${x.player}`,H.innerHTML=[["HP",`${x.hp}/${x.maxHp}`],["MP",`${x.mp}/${x.maxMp}`],["STR",ht(x,"str")],["AGI",ht(x,"agi")],["VIT",ht(x,"vit")],["DEX",ht(x,"dex")],["LUK",ht(x,"luk")],["INT",ht(x,"int")]].map(([z,Y])=>`<span class="stat-label">${z}</span><span class="stat-val${z==="HP"?" stat-val-hp":""}">${Y}</span>`).join("");let q=x.maxHp>0&&x.hp/x.maxHp<.3;m.classList.toggle("low-hp",q),m.style.display="block"}function Oe(){oe=null;let x=document.getElementById("unit-preview-card");x.classList.remove("low-hp","level-2","level-3"),x.style.display="none"}let Re=!1,Be=!1,sn=!1,ye=null,Ee=!1,We=!1,ci=!1,Yn=[],Un=new ai;n.add(Un);let $n=[],vi=!0,hi=0,ir=0;function dn(){vi=!0,hi=performance.now()}let ns=new ai;n.add(ns);let sr=[],E=Se,G=.02,Q=3368703,nt=13382451;function J(x,m){let R=x/2,w=R-m,B=new js;B.moveTo(-R,-R),B.lineTo(R,-R),B.lineTo(R,R),B.lineTo(-R,R),B.lineTo(-R,-R);let H=new Js;return H.moveTo(-w,-w),H.lineTo(w,-w),H.lineTo(w,w),H.lineTo(-w,w),H.lineTo(-w,-w),B.holes.push(H),new Ur(B)}let Nt=J(E,G);function Ot(x=null){let m=O.filter(R=>R.hp>0&&R.id!==x).map(R=>`${R.id},${R.x},${R.y},${R.player}`).sort().join("|");if(!(Ot._lastSig===m&&Ot._lastExclude===x)){for(Ot._lastSig=m,Ot._lastExclude=x,sr.forEach(R=>R.dispose()),sr.length=0;ns.children.length;){let R=ns.children[0];ns.remove(R)}O.filter(R=>R.hp>0&&R.id!==x).forEach(R=>{let w=R.x,B=R.y,q=(qn+t.height[B][w]*.35)/2+qn/2,z=w*Se-Pt+Se/2,Y=B*Se-et+Se/2,rt=q+.02,dt=R.player===1?Q:nt,At=new gn({color:dt,side:mn}),tt=new Zt(Nt,At);tt.rotation.x=-Math.PI/2,tt.position.set(z,rt,Y),ns.add(tt),sr.push(At)}),dn()}}let ie=1.15,le={1:8102901,2:15628943},Qt=(()=>{let x=new gn({color:le[1]}),m=new Zt(new yi(.1,.25,8),x);return m.rotation.x=Math.PI,m.visible=!1,n.add(m),m})();function fe(){if(Vt!=="playing"||ct.length===0||ci){Qt.visible=!1,Qt.removeFromParent(),n.add(Qt);return}let x=ct[L],m=O.find(w=>w.id===x);if(!m||m.hp<=0){Qt.visible=!1,Qt.removeFromParent(),n.add(Qt);return}let R=Z.get(x);if(!R){Qt.visible=!1;return}Qt.removeFromParent(),R.add(Qt),Qt.position.set(0,ie,0),Qt.material&&Qt.material.color.setHex(le[m.player]??le[1]),Qt.visible=!0}function Me(x){let m=[[0,1],[0,-1],[1,0],[-1,0]],R=[];for(let[w,B]of m){let H=x.x+w,q=x.y+B;!nr(t,H,q)||O.some(Y=>Y.id!==x.id&&Y.x===H&&Y.y===q&&Y.hp>0)||R.push(Math.atan2(w,B))}return R}function rn(x){if(Yn.length===0)return x;if(Yn.length===1)return Yn[0];let m=Yn[0],R=Math.abs(Fn(x-m));for(let w=1;w<Yn.length;w++){let B=Math.abs(Fn(x-Yn[w]));B<R&&(R=B,m=Yn[w])}return m}function Fn(x){for(;x>Math.PI;)x-=2*Math.PI;for(;x<-Math.PI;)x+=2*Math.PI;return x}let yn=1.2,_n=(()=>{let x=new Zt(new yi(.12,.35,8),new gn({color:4500223}));return x.rotation.x=-Math.PI/2,x.visible=!1,n.add(x),x})();function Ke(x,m){if(!ci||ct.length===0||Yn.length===0)return;let R=ct[L],w=O.find(At=>At.id===R),B=Z.get(R);if(!w||!B)return;Vr(x,m),Fi.setFromCamera(Bi,a);let H=Fi.intersectObjects(at.children,!0);if(H.length===0)return;let q=null;for(let At of H){let tt=At.object;for(;tt&&(tt.userData.gx==null||tt.userData.gy==null);)tt=tt.parent;if(tt&&tt.userData.gx!=null){q=At.point;break}}if(!q)return;let z=ot(w.x,w.y),Y=q.x-z.x,rt=q.z-z.z;if(Y*Y+rt*rt<1e-6)return;let dt=Math.atan2(Y,rt);B.rotation.y=rn(dt)}function Te(){if(ct.length===0)return;let x=ct[L],m=O.find(B=>B.id===x),R=Z.get(x);if(!m||!R)return;Yn=[[0,1],[0,-1],[1,0],[-1,0]].map(([B,H])=>Math.atan2(B,H)),_n.removeFromParent(),R.add(_n),_n.position.set(0,yn,0),_n.rotation.x=-Math.PI/2,_n.rotation.y=0,_n.rotation.z=Math.PI,_n.visible=!0,R.rotation.y=Yn[0]}function rr(){_n.visible=!1,_n.removeFromParent(),n.add(_n)}let Je=(()=>{let x=Or,m=[1];for(let R=0;R<Math.floor((x-1)/2);R++)m.push(2,2,1,1);return x%2===1?m.push(2):(m.push(2,2),m.push(1)),m})();function bn(){return Je[Ue]}function ar(){let x=bn(),m=0;for(let R=0;R<Ue;R++)Je[R]===x&&m++;return m+1}function Mi(){Vt="draft",Ue=0,de=new Set(no),Ie=null,pe.clear(),fn(),ui(),document.getElementById("turn-menu").style.display="none",document.getElementById("draft-panel").style.display="flex"}function _s(){return O.filter(x=>x.hp>0).sort((x,m)=>{let R=ht(x,"agi"),w=ht(m,"agi");if(w!==R)return w-R;let B=ht(x,"dex");return ht(m,"dex")-B}).map(x=>x.id)}function Rn(){document.getElementById("draft-panel").style.display="none";let x=document.getElementById("draft-placement-card");x&&(x.style.display="none",x.innerHTML=""),fn();let m=document.getElementById("battle-start-overlay");m&&(m.classList.add("visible"),m.setAttribute("aria-hidden","false")),document.getElementById("draft-panel").style.display="none";let R=document.getElementById("draft-placement-card");for(R&&(R.style.display="none",R.innerHTML=""),Vt="playing",Pe=0,ct=_s(),L=0;L<ct.length&&O.find(H=>H.id===ct[L]).hp<=0;)L++;L>=ct.length&&(L=0);let w=O.find(H=>H.id===ct[L]);Kt=w?w.player:1,Ee=!1,We=!1,vt=ct[L],setTimeout(()=>{m&&(m.classList.remove("visible"),m.setAttribute("aria-hidden","true")),document.getElementById("turn-menu").style.display="flex",Ot(),Ne(),fe(),gt(!0)},4e3)}function ui(){let x=document.getElementById("draft-panel"),m=document.getElementById("draft-title"),R=document.getElementById("draft-classes"),w=document.getElementById("draft-message"),B=document.getElementById("turn-player"),H=document.getElementById("draft-placement-card");if(Ie){x.style.display="none",B.textContent=`Draft: Player ${bn()} \u2014 place ${ze[Ie].name}`;let z=bn();H.style.display="flex",H.classList.remove("player-1","player-2"),H.classList.add("player-"+z),H.style.left=z===1?"24px":"",H.style.right=z===2?"24px":"";let Y=[...O.filter(At=>At.player===z).map(At=>At.class),Ie],rt=(At,tt)=>{let st=ze[At];return`
        <div class="draft-class-card${tt?" draft-class-card-current":""}">
          <img class="draft-class-card-image" src="${Br[At]||""}" alt="${st.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="draft-class-card-body">
            <div class="draft-class-card-name">${st.name}</div>
            <div class="draft-class-card-stats">
              <span class="draft-stat-label">HP</span><span class="draft-stat-value">${st.hp}</span>
              <span class="draft-stat-label">MP</span><span class="draft-stat-value">${st.mp}</span>
              <span class="draft-stat-label">STR</span><span class="draft-stat-value">${st.str}</span>
              <span class="draft-stat-label">AGI</span><span class="draft-stat-value">${st.agi}</span>
              <span class="draft-stat-label">VIT</span><span class="draft-stat-value">${st.vit}</span>
              <span class="draft-stat-label">DEX</span><span class="draft-stat-value">${st.dex}</span>
              <span class="draft-stat-label">LUK</span><span class="draft-stat-value">${st.luk}</span>
              <span class="draft-stat-label">INT</span><span class="draft-stat-value">${st.int}</span>
              <span class="draft-stat-label">Range</span><span class="draft-stat-value">${st.range}</span>
            </div>
          </div>
        </div>
      `},dt=3;if(Y.length>dt){H.classList.add("draft-placement-cols");let At=[];for(let st=0;st<Y.length;st+=dt)At.push(Y.slice(st,st+dt));let tt=Y.length-1;H.innerHTML=At.map((st,bt)=>{let se=bt===At.length-1,Wt=st.map((ce,Fe)=>{let je=bt*dt+Fe===tt;return rt(ce,je)}).join("");return`<div class="draft-placement-col${se?" draft-placement-col-current":""}">${Wt}</div>`}).join("")}else H.classList.remove("draft-placement-cols"),H.innerHTML=Y.map((At,tt)=>{let st=tt===Y.length-1;return rt(At,st)}).join("");kt==="pvcpu"&&bn()===2&&setTimeout(lr,500),kt==="cvcpu"&&setTimeout(lr,500);return}H.style.display="none",H.innerHTML="",Vt==="draft"&&(x.style.display="flex");let q=bn();m.textContent=`Player ${q}: Pick a class (${ar()}/${Or})`,w.textContent="",R.innerHTML="",B.textContent=`Draft: Player ${q} \u2014 pick a class`,Cx([...no]).forEach(z=>{let Y=de.has(z),rt=ze[z],dt=document.createElement("button");dt.type="button",dt.className="draft-class-card"+(Y?"":" draft-class-card-selected"),dt.disabled=!Y,dt.innerHTML=`
          <img class="draft-class-card-image" src="${Br[z]||""}" alt="${rt.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
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
        `,Y&&dt.addEventListener("click",()=>vs(z)),R.appendChild(dt)}),kt==="pvcpu"&&bn()===2&&setTimeout(lr,500),kt==="cvcpu"&&setTimeout(lr,500)}function vs(x){if(!de.has(x)||Ie)return;Ie=x;let m=bn(),R=new Set(O.map(H=>H.y*t.w+H.x)),w=Ix(t,m,R),B=Su(t,w);pe=new Set(B.map(H=>H.gy*t.w+H.gx)),Ou(B),ui()}function zn(x,m){if(!Ie)return;let R=bn(),w=m*t.w+x;if(!pe.has(w))return;let B=ze[Ie],H={id:it++,player:R,x,y:m,level:1,name:B.name,class:Ie,hairColor:(io[Ie]||io.knight).hair,hp:B.hp,maxHp:B.maxHp,mp:B.mp,maxMp:B.maxMp,str:B.str,agi:B.agi,vit:B.vit,dex:B.dex,luk:B.luk,int:B.int,range:B.range};O.push(H),Ae(H);let q=Z.get(H.id);q&&(q.rotation.y=H.player===1?Math.PI:0),de.delete(Ie),Ie=null,pe.clear(),fn();let z=document.getElementById("draft-placement-card");if(z&&(z.style.display="none",z.innerHTML=""),Ue++,Ue>=2*Or){Rn();return}let Y=bn(),rt=ar(),dt=document.getElementById("draft-panel"),At=document.getElementById("draft-title"),tt=document.getElementById("draft-message"),st=document.getElementById("draft-classes"),bt=document.getElementById("turn-player");dt&&At&&st&&bt&&(dt.style.display="flex",At.textContent=`Player ${Y}: Pick a class (${rt}/${Or})`,tt&&(tt.textContent="Get ready\u2026"),st.innerHTML="",bt.textContent=`Draft: Player ${Y} \u2014 pick a class`),setTimeout(ui,1500)}function Ne(){Ne._pending||(Ne._pending=!0,requestAnimationFrame(()=>{Ne._pending=!1,ao()}))}function ao(){let x=Ne._cache||(Ne._cache={}),m=x.turnEl||(x.turnEl=document.getElementById("turn-player")),R=x.menuLabel||(x.menuLabel=document.getElementById("menu-label")),w=x.turnMenu||(x.turnMenu=document.getElementById("turn-menu")),B=x.unitInfo||(x.unitInfo=document.getElementById("unit-info")),H=x.unitNameEl||(x.unitNameEl=document.getElementById("unit-name")),q=x.unitLevelClassEl||(x.unitLevelClassEl=document.getElementById("unit-level-class")),z=x.unitStatsEl||(x.unitStatsEl=document.getElementById("unit-stats")),Y=x.unitClassImageEl||(x.unitClassImageEl=document.getElementById("unit-class-image"));if(Vt==="playing"&&O.forEach(tt=>{if(tt.hp<=0)return;let st=Z.get(tt.id);st&&$t(st,tt.maxHp>0&&tt.hp/tt.maxHp<un)}),w.classList.remove("player-1","player-2"),w.classList.add(Kt===1?"player-1":"player-2"),w.classList.toggle("level-2",!1),w.classList.toggle("level-3",!1),Vt==="playing"&&ct.length>0){let tt=ct[L];O.find(bt=>bt.id===tt&&bt.hp>0)&&(vt==null||!O.find(bt=>bt.id===vt&&bt.hp>0))&&(vt=tt)}if(vt!=null){let tt=O.find(st=>st.id===vt);if(tt&&tt.hp>0){B.classList.remove("no-unit");let st=tt.maxHp>0&&tt.hp/tt.maxHp<.25;w.classList.toggle("low-hp",st),w.classList.toggle("level-2",tt.level>=2&&tt.level<3),w.classList.toggle("level-3",tt.level>=3),H.textContent=tt.name,q.textContent=`Lv.${tt.level} ${tt.class}`,Y.src=Br[tt.class]||"",Y.alt=tt.name,z.innerHTML=[["HP",`${tt.hp}/${tt.maxHp}`],["MP",`${tt.mp}/${tt.maxMp}`],["STR",ht(tt,"str")],["AGI",ht(tt,"agi")],["VIT",ht(tt,"vit")],["DEX",ht(tt,"dex")],["LUK",ht(tt,"luk")],["INT",ht(tt,"int")]].map(([bt,se])=>`<span>${bt}</span><span class="stat-val${bt==="HP"?" stat-val-hp":""}">${se}</span>`).join("")}else w.classList.remove("low-hp","level-2","level-3"),B.classList.add("no-unit"),H.textContent="\u2014 Select a unit \u2014",q.textContent="",z.textContent="",Y.src="",Y.alt=""}else w.classList.remove("low-hp","level-2","level-3"),B.classList.add("no-unit"),H.textContent="\u2014 Select a unit \u2014",q.textContent="",z.textContent="",Y.src="",Y.alt="";if(vt!=null)m.textContent=`Player ${Kt} \u2014 Unit ${H.innerHTML} active`;else{let tt=ct.length?O.find(st=>st.id===ct[L]):null;m.textContent=tt?`${tt.name} (Player ${Kt})`:`Player ${Kt}`}R.textContent=`Player ${Kt}`;let rt=x.btnAttack||(x.btnAttack=document.getElementById("btn-attack")),dt=x.btnSkill||(x.btnSkill=document.getElementById("btn-skill")),At=x.btnEnd||(x.btnEnd=document.getElementById("btn-end"));if(kt==="cvcpu"&&Vt==="playing")rt.disabled=!0,dt.disabled=!0,At&&(At.disabled=!0),m.textContent=`Player ${Kt} (CPU)`;else if(ci)rt.disabled=!0,dt.disabled=!0,m.textContent="Click on map to choose facing direction";else if(Vt==="playing"){rt.disabled=We;let tt=ct.length?ct[L]:null,st=tt?O.find(Wt=>Wt.id===tt&&Wt.hp>0):null,bt=kt!=="cvcpu"&&(kt!=="pvcpu"||Kt===1),se=bt&&st&&!We?zr(st):[];dt.disabled=We||!bt||se.length===0,At&&(At.disabled=!1)}if(Vt==="playing"){let tt=Math.min(Pe+1,xs);m.textContent=(m.textContent||"")+` \u2014 Turn ${tt}/${xs}`;let st=x.turnsLeftEl||(x.turnsLeftEl=document.getElementById("turns-left")),bt=x.turnsLeftValueEl||(x.turnsLeftValueEl=document.getElementById("turns-left-value"));if(st&&bt){st.style.display="";let se=Math.max(0,xs-Pe);bt.textContent=String(se),st.classList.toggle("turns-left-low",se<=10)}}else{let tt=x.turnsLeftEl||(x.turnsLeftEl=document.getElementById("turns-left"));tt&&(tt.style.display="none")}Vt==="playing"&&ho(Kt)&&!Re&&setTimeout(xn,700)}function Ve(){dn(),Oe(),Be=!1,sn=!1,ye=null,ci=!1,Yn=[],rr(),fn();let x=ct.length;if(x===0)return;let m=ct[L],R=O.find(z=>z.id===m);if(R&&R.tempDebuff&&R.tempDebuff.duration--,R&&R.tempDebuff&&R.tempDebuff.duration<=0&&(R.tempDebuff=void 0),R&&R.tempBuff&&R.tempBuff.duration--,R&&R.tempBuff&&R.tempBuff.duration<=0&&(R.tempBuff=void 0),R&&R.hp>0){let z=Math.ceil(ht(R,"int")*.15);R.mp=Math.min(R.maxMp,R.mp+z)}if(R&&R.hp>0){let z=R.x,Y=R.y;t.type[Y][z]===jt.CENTER&&R.level===1&&ne(R);let rt=R.player===1?jt.BASE_TOP:jt.BASE_BOTTOM;t.type[Y][z]===rt&&R.level===2&&ne(R)}if(Pe++,Pe>=xs){qu();return}let w=(L+1)%x,B=0;for(;B<x;){let z=ct[w],Y=O.find(rt=>rt.id===z);if(Y&&Y.hp>0)break;w=(w+1)%x,B++}let H=w===0;L=w;for(let z=0;z<x;z++){let Y=ct[L],rt=O.find(At=>At.id===Y);if(!rt||rt.hp<=0)break;let dt=rt.tempDebuff&&rt.tempDebuff.poison!=null?rt.tempDebuff.poison:0;if(dt<=0)break;if(rt.hp=Math.max(0,rt.hp-dt),Zn(rt.x,rt.y,String(dt),!1,"poison"),X(rt),rt.hp<=0){Sn(rt),w=(L+1)%x;let At=0;for(;At<x;){let tt=ct[w],st=O.find(bt=>bt.id===tt);if(st&&st.hp>0)break;w=(w+1)%x,At++}L=w;continue}break}let q=O.find(z=>z.id===ct[L]);Kt=q?q.player:1,Ee=!1,We=!1,vt=ct[L],H&&(ct=_s(),L=0),Ne(),fe(),gt()}document.getElementById("btn-attack").addEventListener("click",()=>{if(Re||We||Vt!=="playing"||ct.length===0)return;Oe();let x=ct[L],m=O.find(B=>B.id===x);if(!m||m.hp<=0)return;let R=m.range!=null?m.range:1;vt=x,Be=!0;let w=Eu(t,m.x,m.y,R);Mt=new Map,w.forEach((B,H)=>{let q=H%t.w,z=Math.floor(H/t.w);ys(t,m.x,m.y,q,z)&&Mt.set(H,B)}),Fu(Mt),Ne()}),document.getElementById("btn-skill").addEventListener("click",x=>{if(x.preventDefault(),x.stopPropagation(),Re||We)return;let m=ct[L],R=m?O.find(z=>z.id===m&&z.hp>0):null;if(!R||R.player!==Kt)return;let w=document.getElementById("skill-list-overlay"),B=document.getElementById("btn-skill");if(!B)return;if(w&&w.style.display==="block"){w.style.display="none";return}let H=zr(R),q=B.getBoundingClientRect();w||(w=document.createElement("div"),w.id="skill-list-overlay",w.className="skill-list-overlay",w.setAttribute("aria-hidden","true"),document.body.appendChild(w)),w.style.left=`${q.left}px`,w.style.top=`${q.top-4}px`,w.style.transform="translateY(-100%)",w.style.right="auto",w.style.bottom="auto",w.style.display="none",H.length===0?w.innerHTML='<div class="skill-option" style="cursor:default;color:#8b949e;">No skills available</div>':(w.innerHTML=H.map((z,Y)=>`<button type="button" class="skill-option" data-skill-index="${Y}" ${z.disabled?"disabled":""}>
          <span class="skill-name">${z.name}</span> <span class="skill-meta">${z.cost} MP \xB7 Lv.${z.level}</span><br/>
          <span class="skill-meta">${z.description}</span>
        </button>`).join(""),w.querySelectorAll(".skill-option").forEach((z,Y)=>{z.addEventListener("click",rt=>{rt.preventDefault(),rt.stopPropagation();let dt=H[Y];if(ye=dt,w.style.display="none",w.setAttribute("aria-hidden","true"),dt.target==="self"){if(R.mp<dt.cost)return;R.mp-=dt.cost,We=!0,Hr(R,R,dt,{showFloatingCombatText:Zn,handleUnitDeath:Sn,updateUnitSlashVisibility:X,updateTurnUI:Ne},()=>{fn(),sn=!1,ye=null,Ms=new Set,Ee?Ve():Ne()}),Ne();return}if(dt.target==="ally"&&cr(R,dt,O).filter(st=>st.targetUnit&&st.targetUnit.id!==R.id).length===0&&R.mp>=dt.cost){R.mp-=dt.cost,We=!0,Hr(R,R,dt,{showFloatingCombatText:Zn,handleUnitDeath:Sn,updateUnitSlashVisibility:X,updateTurnUI:Ne},()=>{fn(),sn=!1,ye=null,Ms=new Set,Ee?Ve():Ne()}),Ne();return}sn=!0,Be=!1,Nu(R,dt),Ne()})})),requestAnimationFrame(()=>{w.style.display="block",w.style.visibility="visible",w.setAttribute("aria-hidden","false")})}),document.addEventListener("click",x=>{let m=document.getElementById("skill-list-overlay"),R=document.getElementById("btn-skill"),w=document.querySelector(".skill-wrap");!m||m.style.display!=="block"||w&&w.contains(x.target)||m.contains(x.target)||(m.style.display="none",m.setAttribute("aria-hidden","true"))}),document.getElementById("btn-end").addEventListener("click",()=>{if(Re||ci||Vt!=="playing"||ct.length===0)return;let x=ct[L],m=O.find(w=>w.id===x);if(!m||m.hp<=0)return;ci=!0,vt=null,Be=!1,Mt=new Map,fn(),Te(),fe();let R=document.getElementById("turn-player");R.textContent="Click on map to choose facing direction",Ne()}),h.set(0,8,0),a.position.copy(h).add(c),a.lookAt(h);let kr=document.getElementById("mode-select-overlay"),Ql=document.getElementById("mode-pvp"),tc=document.getElementById("mode-pvcpu"),oo=document.getElementById("mode-cvcpu"),or=document.getElementById("ai-draft-preference"),ec=document.getElementById("mode-select-ai-draft");ec&&(ec.style.display=Mu?"":"none"),or&&(wx.forEach(x=>{let m=document.createElement("option");m.value=x.value,m.textContent=x.label,or.appendChild(m)}),or.value=Ht,or.addEventListener("change",()=>{Ht=or.value}));let Oi=new Audio;Oi.loop=!0,Oi.volume=.3,Oi.preload="auto";let lo=window.location.href.replace(/[^/]*$/,""),nc=typeof window.TACTICS_BGM_URL<"u"?window.TACTICS_BGM_URL:lo+(lo.includes("/src/")?"../assets/music/tavern.mp3":"assets/music/tavern.mp3");Oi.src=nc,Oi.addEventListener("error",()=>{let x=lo+"assets/music/tavern.mp3";x!==nc&&(Oi.src=x)});function co(){Oi.paused&&Oi.play().catch(()=>{})}kr&&Ql&&tc?(Ql.addEventListener("click",()=>{co(),kt="pvp",kr.classList.add("hidden"),Mi()}),tc.addEventListener("click",()=>{co(),kt="pvcpu",kr.classList.add("hidden"),Mi()}),oo&&(Mu?oo.addEventListener("click",()=>{co(),kt="cvcpu",kr.classList.add("hidden"),Mi()}):oo.style.display="none")):Mi();function ho(x){return kt==="pvcpu"&&x===2||kt==="cvcpu"}function Cu(){let x=no.filter(tt=>de.has(tt));if(x.length===0)return null;let m=Ht||"balanced";if(m==="random")return x[Math.floor(Math.random()*x.length)];if(m==="custom")return Ax.filter(st=>de.has(st))[0]??x[0]??null;let R=["hp","maxHp","mp","str","agi","vit","dex","luk","int"];function w(tt){let st=ze[tt];if(!st)return 1/0;let bt=R.map(Wt=>st[Wt]??0),se=bt.reduce((Wt,ce)=>Wt+ce,0)/bt.length;return bt.reduce((Wt,ce)=>Wt+(ce-se)**2,0)/bt.length}if(m==="tanky")return[...x].sort((st,bt)=>{let se=ze[st]?.hp??0,Wt=ze[bt]?.hp??0;return Wt!==se?Wt-se:(ze[bt]?.vit??0)-(ze[st]?.vit??0)})[0]??null;if(m==="aggressive")return[...x].sort((st,bt)=>{let se=ze[st]?.str??0,Wt=ze[bt]?.str??0;return Wt!==se?Wt-se:(ze[bt]?.agi??0)-(ze[st]?.agi??0)})[0]??null;if(m==="scout")return[...x].sort((st,bt)=>{let se=ze[st]?.agi??0,Wt=ze[bt]?.agi??0;return Wt!==se?Wt-se:(ze[bt]?.dex??0)-(ze[st]?.dex??0)})[0]??null;if(m==="ranged")return[...x].sort((st,bt)=>{let se=ze[st]?.range??0,Wt=ze[bt]?.range??0;return Wt!==se?Wt-se:(ze[bt]?.dex??0)-(ze[st]?.dex??0)})[0]??null;if(m==="caster")return[...x].sort((st,bt)=>{let se=ze[st]?.int??0,Wt=ze[bt]?.int??0;return Wt!==se?Wt-se:(ze[bt]?.mp??0)-(ze[st]?.mp??0)})[0]??null;let B=bn(),q=Rx(Or),z=O.filter(tt=>tt.player===B).map(tt=>tt.class),Y={};for(let tt of Object.keys(eo))Y[tt]=0;for(let tt of z)for(let st of Object.keys(eo))if(eo[st].includes(tt)){Y[st]++;break}let rt=tt=>Math.max(0,(q[tt]??0)-(Y[tt]??0)),dt=tt=>{for(let[st,bt]of Object.entries(eo))if(bt.includes(tt))return st;return null};return[...x].sort((tt,st)=>{let bt=dt(tt),se=dt(st),Wt=bt!=null?rt(bt):0,ce=se!=null?rt(se):0;if(ce!==Wt)return ce-Wt;let Fe=ze[tt]?.hp??0,ke=ze[st]?.hp??0;return ke!==Fe?ke-Fe:w(tt)-w(st)})[0]??null}function lr(){if(Vt!=="draft"||!ho(bn()))return;if(!Ie){let R=Cu();R&&vs(R),setTimeout(lr,500);return}let x=Array.from(pe).map(R=>({gx:R%t.w,gy:Math.floor(R/t.w)})),m=Su(t,x);if(m.length>0){let{gx:R,gy:w}=m[0];zn(R,w)}}function ic(){let x=[];for(let m=0;m<t.h;m++)for(let R=0;R<t.w;R++)t.type[m][R]===jt.CENTER&&x.push({gx:R,gy:m});return x}function Pu(x){let m=[],R=x===1?jt.BASE_TOP:jt.BASE_BOTTOM;for(let w=0;w<t.h;w++)for(let B=0;B<t.w;B++)t.type[w][B]===R&&m.push({gx:B,gy:w});return m}function ni(x,m,R,w){return Math.abs(x-R)+Math.abs(m-w)}function Iu(x){let m=x.range!=null?x.range:1,R=[];for(let w of O){if(w.hp<=0||w.player===x.player)continue;let B=ni(x.x,x.y,w.x,w.y);B<=m&&B>0&&ys(t,x.x,x.y,w.x,w.y)&&R.push({target:w,dist:B})}return R}function Lu(x){let m=O.filter(R=>R.hp>0&&R.player===x.player&&R.id!==x.id);for(let R of m){let w=O.filter(B=>B.hp>0&&B.player!==x.player);for(let B of w){let H=B.range!=null?B.range:1,q=ni(B.x,B.y,R.x,R.y);if(q<=H&&q>0&&ys(t,B.x,B.y,R.x,R.y))return!0}}return!1}function Xe(x,m,R,w){let B=x.x,H=x.y,q=es(t,x.x,x.y,m,R,O,x);if(!q||q.length<=1){w&&w();return}vt=null,fn(),Re=!0,p=!0,Ot(x.id),dn();let z=Z.get(x.id),Y=1;function rt(){if(Y>=q.length){x.x=q[q.length-1].x,x.y=q[q.length-1].y,Re=!1,Jt(z),Ot(),Mt=new Map,Ee=!0,w&&w();return}let dt=q[Y-1],At=q[Y],tt=ot(dt.x,dt.y).clone(),st=ot(At.x,At.y).clone(),bt=st.x-tt.x,se=st.z-tt.z;bt*bt+se*se>1e-6&&(z.rotation.y=Math.atan2(bt,se));let Wt=performance.now(),ce=0;function Fe(ke){ce++,ce%2===0&&dn();let je=Math.min(1,(ke-Wt)/to),He=(Le=>Le*Le*(3-2*Le))(je);if(z.position.lerpVectors(tt,st,He),ue(z,He),p){let Le=a.position.distanceTo(h),me=Le<.1?o:Le;f.copy(a.position).sub(h).normalize(),f.lengthSq()<.01&&f.copy(c).normalize(),h.lerp(z.position,l),a.position.copy(h).add(f.clone().multiplyScalar(me)),a.lookAt(h)}je<1?requestAnimationFrame(Fe):(Y++,rt())}requestAnimationFrame(Fe)}rt()}function sc(x,m){let R=ht(m,"agi")*.7+ht(m,"luk")*.3,B=Math.random()*Math.max(.001,R)<=ht(x,"dex"),H=0;if(B){let me=ht(x,"str")*.7+ht(x,"dex")*.2+ht(x,"int")*.1-(ht(m,"vit")*.3+ht(m,"luk")*.2);H=Math.max(1,Math.floor(me))}We=!0,vt=null,Be=!1,fn(),console.log("[ATTACK]",`${x.name} (${x.class}, P${x.player})`,"\u2192",`${m.name} (${m.class}, P${m.player})`,B?`${H} dmg`:"MISS",`| ${m.name} HP ${m.hp} \u2192 ${Math.max(0,m.hp-H)}/${m.maxHp}`);let q=Z.get(x.id);if(!q||!q.userData.rightArm){B?(m.hp=Math.max(0,m.hp-H),Zn(m.x,m.y,String(H),!1),X(m),m.hp<=0&&Sn(m)):Zn(m.x,m.y,"MISS",!0),setTimeout(Ee?()=>Ve():()=>Ne(),400);return}let z=ot(x.x,x.y).clone(),Y=ot(m.x,m.y).clone(),rt=z.clone().lerp(Y,.35),dt=Y.x-z.x,At=Y.z-z.z;if(dt*dt+At*At>1e-6&&(q.rotation.y=Math.atan2(dt,At)),(x.range!=null?x.range:1)>2){let _t=function(re){Rt++,Rt%2===0&&dn();let Ct=re-xt,Et=Math.min(1,Ct/K);if(_e.position.lerpVectors(pt,ft,Et),!lt&&Et>=1&&(lt=!0,n.remove(_e),me.dispose(),qe.dispose(),B?(m.hp=Math.max(0,m.hp-H),Zn(m.x,m.y,String(H),!1),m.hp<=0&&(St=!0),Z.get(m.id)?mt=re:St&&(Sn(m),St=!1),X(m)):Zn(m.x,m.y,"MISS",!0)),mt!=null&&B){let Ut=Z.get(m.id);if(Ut){let De=Math.min(1,(re-mt)/b),$e=1-De;ki.copy(En).multiplyScalar(Pn*$e),Ut.position.copy(tn).add(ki),De>=1&&(Ut.position.copy(tn),mt=null,St&&(Sn(m),St=!1))}else mt=null,St&&(Sn(m),St=!1)}if(Et<1)requestAnimationFrame(_t);else{let Ut=mt==null;Ut&&St&&(Sn(m),St=!1),Ut?(Cn.shadowMap.enabled=!0,setTimeout(Ee?()=>Ve():()=>Ne(),400)):requestAnimationFrame(_t)}},me=new ts(.035,.035,.4,6),qe=new gn({color:16763972}),_e=new Zt(me,qe);_e.position.copy(z),_e.position.y+=.6;let Qe=Y.clone().sub(z).normalize();_e.quaternion.setFromUnitVectors(new F(0,1,0),Qe),n.add(_e);let tn=ot(m.x,m.y).clone(),En=Y.clone().sub(z).normalize(),Pn=.4,lt=!1,mt=null,St=!1,pt=_e.position.clone(),ft=Y.clone();ft.y+=.6;let xt=performance.now(),Rt=0;Cn.shadowMap.enabled=!1,requestAnimationFrame(_t);return}let bt=!1,se=performance.now(),Wt=q.userData.rightArm,ce=null,Fe=!1,ke=ot(m.x,m.y).clone(),je=Y.clone().sub(z).normalize(),pn=.4,He=0;function Le(me){He++,He%2===0&&dn();let qe=me-se,_e=Math.min(1,qe/ve),Qe=_e<=.4?_e/.4:1,tn=_e>.4?(_e-.4)/.6:0;_e<=.4?q.position.lerpVectors(z,rt,Qe):q.position.lerpVectors(rt,z,tn);let En=_e<=.35?_e/.35:_e<=.7?(.7-_e)/.35:0;if(Wt.rotation.y=-En*1.1,!bt&&_e>=C&&(bt=!0,B?(m.hp=Math.max(0,m.hp-H),Zn(m.x,m.y,String(H),!1),m.hp<=0&&(Fe=!0),X(m),Z.get(m.id)?ce=me:Fe&&(Sn(m),Fe=!1)):Zn(m.x,m.y,"MISS",!0)),ce!=null&&B){let Pn=Z.get(m.id);if(Pn){let lt=Math.min(1,(me-ce)/b),mt=1-lt;ki.copy(je).multiplyScalar(pn*mt),Pn.position.copy(ke).add(ki),lt>=1&&(Pn.position.copy(ke),ce=null,Fe&&(Sn(m),Fe=!1))}else ce=null,Fe&&(Sn(m),Fe=!1)}if(_e<1)requestAnimationFrame(Le);else{q.position.copy(z),Wt.rotation.y=0;let Pn=ce==null;Pn&&Fe&&(Sn(m),Fe=!1),Pn?(Cn.shadowMap.enabled=!0,setTimeout(Ee?()=>Ve():()=>Ne(),400)):requestAnimationFrame(Le)}}Cn.shadowMap.enabled=!1,requestAnimationFrame(Le)}function Du(x,m){let R=ot(x,m);R.y+=.4;let w=new Ei(.1,12,12),B=new gn({color:8930559,transparent:!0,opacity:.9}),H=new Zt(w,B);H.position.copy(R),n.add(H);let q=performance.now(),z=0;function Y(rt){z++,z%2===0&&dn();let dt=rt-q,At=Math.min(1,dt/Tt),tt=At*(2-At);H.scale.setScalar(tt*4.5),B.opacity=.9*(1-At),At<1?requestAnimationFrame(Y):(n.remove(H),w.dispose(),B.dispose())}requestAnimationFrame(Y)}function Hr(x,m,R,w,B){if(R.target==="enemy"&&m==null){w.updateTurnUI&&w.updateTurnUI(),B&&B();return}let q=(R.range??0)>2&&m!=null&&(m.x!==x.x||m.y!==x.y),z=!q&&m!=null&&(m.x!==x.x||m.y!==x.y);if(!q&&!z){so(R.effectKey,x,m,w),w.updateTurnUI&&w.updateTurnUI(),B&&B();return}if(z){let re=function(Ct){_t++,_t%2===0&&dn();let Et=Ct-Rt,Ut=Math.min(1,Et/ve),De=Ut<=.4?Ut/.4:1,$e=Ut>.4?(Ut-.4)/.6:0;Ut<=.4?me.position.lerpVectors(qe,Qe,De):me.position.lerpVectors(Qe,qe,$e);let Gt=Ut<=.35?Ut/.35:Ut<=.7?(.7-Ut)/.35:0;if(St.rotation.y=-Gt*1.1,!pt&&Ut>=C&&(pt=!0,so(R.effectKey,x,m,w),m.hp<=0&&(xt=!0),w.updateUnitSlashVisibility&&w.updateUnitSlashVisibility(m),Z.get(m.id)&&R.target!=="ally"?ft=Ct:xt&&(Sn(m),xt=!1)),ft!=null){let ae=Z.get(m.id);if(ae){let be=Math.min(1,(Ct-ft)/b),ln=1-be;ki.copy(lt).multiplyScalar(mt*ln),ae.position.copy(Pn).add(ki),be>=1&&(ae.position.copy(Pn),ft=null,xt&&(Sn(m),xt=!1))}else ft=null,xt&&(Sn(m),xt=!1)}Ut<1?requestAnimationFrame(re):(me.position.copy(qe),St.rotation.y=0,ft==null&&xt&&(Sn(m),xt=!1),ft==null?(Cn.shadowMap.enabled=!0,w.updateTurnUI&&w.updateTurnUI(),B&&B()):requestAnimationFrame(re))},me=Z.get(x.id);if(!me||!me.userData.rightArm){so(R.effectKey,x,m,w),w.updateUnitSlashVisibility&&w.updateUnitSlashVisibility(m),w.updateTurnUI&&w.updateTurnUI(),B&&B();return}let qe=ot(x.x,x.y).clone(),_e=ot(m.x,m.y).clone(),Qe=qe.clone().lerp(_e,.35),tn=_e.x-qe.x,En=_e.z-qe.z;tn*tn+En*En>1e-6&&(me.rotation.y=Math.atan2(tn,En));let Pn=ot(m.x,m.y).clone(),lt=_e.clone().sub(qe).normalize(),mt=.4,St=me.userData.rightArm,pt=!1,ft=null,xt=!1,Rt=performance.now(),_t=0;Cn.shadowMap.enabled=!1,requestAnimationFrame(re);return}let Y=ot(x.x,x.y).clone(),rt=ot(m.x,m.y).clone(),dt=new ts(.035,.035,.4,6),At=new gn({color:16763972}),tt=new Zt(dt,At);tt.position.copy(Y),tt.position.y+=.6;let st=rt.clone().sub(Y).normalize();tt.quaternion.setFromUnitVectors(new F(0,1,0),st),n.add(tt);let bt=tt.position.clone(),se=rt.clone();se.y+=.6;let Wt=performance.now(),ce=ot(m.x,m.y).clone(),Fe=rt.clone().sub(Y).normalize(),ke=.4,je=!1,pn=null,He=0;function Le(me){He++,He%2===0&&dn();let qe=me-Wt,_e=Math.min(1,qe/K);if(tt.position.lerpVectors(bt,se,_e),!je&&_e>=1&&(je=!0,n.remove(tt),dt.dispose(),At.dispose(),R.type==="spell"&&Du(m.x,m.y),so(R.effectKey,x,m,w),Z.get(m.id)&&m.hp>0&&(pn=me),w.updateUnitSlashVisibility&&w.updateUnitSlashVisibility(m)),pn!=null){let Qe=Z.get(m.id);if(Qe){let tn=Math.min(1,(me-pn)/b),En=1-tn;ki.copy(Fe).multiplyScalar(ke*En),Qe.position.copy(ce).add(ki),tn>=1&&(Qe.position.copy(ce),pn=null)}else pn=null}_e<1?requestAnimationFrame(Le):pn==null?(Cn.shadowMap.enabled=!0,w.updateTurnUI&&w.updateTurnUI(),B&&B()):requestAnimationFrame(Le)}Cn.shadowMap.enabled=!1,requestAnimationFrame(Le)}function xn(){if(Vt!=="playing"||!ho(Kt)||Re||ct.length===0)return;let x=ct[L],m=O.find(lt=>lt.id===x);if(!m||m.hp<=0)return;let R=ro(t,m.x,m.y,ht(m,"agi"),O,m),w=[];R.forEach((lt,mt)=>{if(lt===0)return;let St=mt%t.w,pt=Math.floor(mt/t.w);O.some(xt=>xt.id!==m.id&&xt.x===St&&xt.y===pt&&xt.hp>0)||w.push({gx:St,gy:pt,dist:lt})});let B=Iu(m),H=ic(),q=Pu(m.player),z=.25,Y=.03,rt=m.maxHp>0&&m.hp/m.maxHp<z,dt=m.maxHp>0&&m.hp/m.maxHp<Y,At=m.level===2,tt=lt=>O.some(mt=>mt.hp>0&&mt.x===lt.gx&&mt.y===lt.gy&&mt.id!==m.id),st=H.filter(lt=>!tt(lt)),bt=q.filter(lt=>!tt(lt)),se=zr(m).filter(lt=>!lt.disabled&&m.mp>=lt.cost&&lt.target==="enemy"),Wt=se.length>0?Math.max(...se.map(lt=>lt.range||0)):0,ce=Math.max(m.range!=null?m.range:1,Wt);function Fe(lt,mt){if(mt.length===0)return null;let St=null,pt=1/0;for(let ft of lt){let xt=0;for(let Rt of mt)xt+=ni(ft.gx,ft.gy,Rt.gx,Rt.gy);xt<pt&&(pt=xt,St=ft)}return St}function ke(lt,mt){if(mt.length===0||lt.length===0)return null;let St=null,pt=1/0;for(let ft of lt){let xt=Math.min(...mt.map(Rt=>ni(ft.gx,ft.gy,Rt.gx,Rt.gy)));xt<pt&&(pt=xt,St=ft)}return St}function je(lt,mt){let St=ce,pt=[];for(let ft of O){if(ft.hp<=0||ft.player===m.player)continue;let xt=ni(lt,mt,ft.x,ft.y);xt<=St&&xt>0&&ys(t,lt,mt,ft.x,ft.y)&&pt.push({target:ft,dist:xt})}return pt}let pn=new Set(w.map(lt=>lt.gy*t.w+lt.gx));function He(lt,mt){if(!lt||lt.length<=1)return null;let St=Math.min(mt,lt.length-1);for(let pt=St;pt>=1;pt--){let ft=lt[pt],xt=ft.y*t.w+ft.x;if(pn.has(xt))return{gx:ft.x,gy:ft.y}}return null}function Le(lt,mt){if(!lt||lt.length<=1)return null;let St=Math.min(mt,lt.length-1);for(let pt=St;pt>=1;pt--){let ft=lt[pt];if(!O.some(Rt=>Rt.id!==m.id&&Rt.hp>0&&Rt.x===ft.x&&Rt.y===ft.y))return{gx:ft.x,gy:ft.y}}return null}function me(lt){let mt=null,St=null,pt=1/0;for(let ft of lt){let xt=es(t,m.x,m.y,ft.gx,ft.gy,O,m);xt&&xt.length>1&&xt.length<pt&&(pt=xt.length,mt=xt,St=ft)}return mt&&St?{path:mt,target:St}:null}function qe(lt){let mt=lt??w;if(mt.length===0)return null;let St=O.filter(xt=>xt.hp>0&&xt.player!==m.player);if(St.length===0)return mt[0];let pt=null,ft=-1;for(let xt of mt){let Rt=Math.min(...St.map(_t=>ni(xt.gx,xt.gy,_t.x,_t.y)));Rt>ft&&(ft=Rt,pt=xt)}return pt}function _e(lt){let mt=lt??w;if(mt.length===0)return null;let St=O.filter(_t=>_t.hp>0&&_t.player!==m.player),pt=O.filter(_t=>_t.hp>0&&_t.player===m.player&&_t.id!==m.id);if(St.length===0)return mt[0];let ft=m.maxHp>0&&m.hp/m.maxHp>=.6,xt=null,Rt=-1/0;for(let _t of mt){let re=Math.min(...St.map(Ut=>ni(_t.gx,_t.gy,Ut.x,Ut.y))),Ct=pt.length>0?Math.min(...pt.map(Ut=>ni(_t.gx,_t.gy,Ut.x,Ut.y))):999,Et;ft?Et=Ct<re?re-1e3:re:Et=re-Ct,Et>Rt&&(Rt=Et,xt=_t)}return xt}function Qe(){let lt=ce,mt=O.filter(ft=>ft.hp>0&&ft.player!==m.player);if(mt.length===0)return null;let St=null,pt=-1;for(let ft of w){let xt=Math.min(...mt.map(_t=>ni(ft.gx,ft.gy,_t.x,_t.y)));mt.some(_t=>ni(ft.gx,ft.gy,_t.x,_t.y)<=lt)&&xt>pt&&(pt=xt,St=ft)}return St}if(We){if(Ee){Ve();return}if(xs-Pe<=20&&H.length>0){let Rt=H.some(_t=>_t.gx===m.x&&_t.gy===m.y);if(Rt&&w.length>0){let _t=new Set(H.map(Et=>Et.gy*t.w+Et.gx)),Ct=w.filter(Et=>_t.has(Et.gy*t.w+Et.gx)).filter(Et=>Et.gx!==m.x||Et.gy!==m.y);if(Ct.length>0){let Et=qe(Ct);if(Et&&(Et.gx!==m.x||Et.gy!==m.y)){Xe(m,Et.gx,Et.gy,()=>setTimeout(Ve,400));return}}Ve();return}if(Rt){Ve();return}if(w.length>0){let _t=st.length>0?st:H,re=me(_t),Ct=re?Le(re.path,ht(m,"agi")):null;if(Ct&&(Ct.gx!==m.x||Ct.gy!==m.y)){Xe(m,Ct.gx,Ct.gy,()=>setTimeout(Ve,400));return}let Et=ke(w,_t);if(Et&&(Et.gx!==m.x||Et.gy!==m.y)){Xe(m,Et.gx,Et.gy,()=>setTimeout(Ve,400));return}}Ve();return}if(!rt&&w.length>0){if(H.length>0&&!H.some(_t=>_t.gx===m.x&&_t.gy===m.y)){let _t=st.length>0?st:H,re=me(_t),Ct=re?Le(re.path,ht(m,"agi")):null;if(Ct&&(Ct.gx!==m.x||Ct.gy!==m.y)){Xe(m,Ct.gx,Ct.gy,()=>setTimeout(Ve,400));return}let Et=ke(w,_t);if(Et&&(Et.gx!==m.x||Et.gy!==m.y)){Xe(m,Et.gx,Et.gy,()=>setTimeout(Ve,400));return}}if(At&&q.length>0&&!q.some(_t=>_t.gx===m.x&&_t.gy===m.y)){let _t=bt.length>0?bt:q,re=me(_t),Ct=re?Le(re.path,ht(m,"agi")):null;if(Ct&&(Ct.gx!==m.x||Ct.gy!==m.y)){Xe(m,Ct.gx,Ct.gy,()=>setTimeout(Ve,400));return}let Et=ke(w,_t);if(Et&&(Et.gx!==m.x||Et.gy!==m.y)){Xe(m,Et.gx,Et.gy,()=>setTimeout(Ve,400));return}}}let mt=new Set(H.map(Rt=>Rt.gy*t.w+Rt.gx)),St=H.length>0?w.filter(Rt=>mt.has(Rt.gy*t.w+Rt.gx)):null,pt=St!=null&&St.length>0?St:w,ft=O.filter(Rt=>Rt.hp>0&&Rt.player===m.player&&Rt.id!==m.id),xt=null;if(pt.length>0&&ft.length>0&&(xt=_e(pt),xt)){let Rt=es(t,m.x,m.y,xt.gx,xt.gy,O,m),_t=Rt?Rt.length-1:1/0;(!Rt||Rt.length<=1||_t>ht(m,"agi"))&&(xt=qe(pt))}if(!xt&&pt.length>0&&(xt=qe(pt)),xt&&(xt.gx!==m.x||xt.gy!==m.y)){Xe(m,xt.gx,xt.gy,()=>setTimeout(Ve,400));return}Ve();return}if(dt&&xs-Pe>20&&!Ee&&w.length>0){let lt=null,mt=1/0;for(let pt of w){let xt=je(pt.gx,pt.gy).filter(Rt=>Rt.target.maxHp>0&&Rt.target.hp/Rt.target.maxHp<z);if(xt.length>0){let Rt=Math.min(...xt.map(_t=>_t.target.hp));Rt<mt&&(mt=Rt,lt=pt)}}if(lt){let pt=es(t,m.x,m.y,lt.gx,lt.gy,O,m),ft=pt?He(pt,ht(m,"agi")):null;if(ft&&(ft.gx!==m.x||ft.gy!==m.y)){Xe(m,ft.gx,ft.gy,()=>setTimeout(xn,600));return}}let St=qe();if(St&&(St.gx!==m.x||St.gy!==m.y)){Xe(m,St.gx,St.gy,()=>setTimeout(xn,600));return}Ve();return}if(!We){let re=function(Gt){return cr(m,Gt,O).filter(be=>be.targetUnit!=null).map(be=>be.targetUnit)},lt=zr(m),mt=m.maxHp>0?m.hp/m.maxHp:1,St=.35,pt=new Set(["arcaneBolt","feast","pierce","snipe","berserk","drain","shuriken","chokuto","bite","execute","judgement","exorcise","ambush","powerShot","concoct"]),ft=new Set(["chakra","sacrifice"]),xt=new Set(["brave","focus","bloodlust","iaido","howl","mantra","sanctuary","windWalk","forge","fortify"]),Rt=new Set(["manaDrain","impale","poison"]),_t=new Set(["dominate","weaken","cripple","hex","blind","raid"]),Ct={showFloatingCombatText:Zn,handleUnitDeath:Sn,updateUnitSlashVisibility:X,updateTurnUI:Ne,world:t,units:O,updateUnitPosition(Gt){let ae=Z.get(Gt.id);ae&&ae.position.copy(ot(Gt.x,Gt.y))},animateKnockback(Gt,ae,be,ln,en,an){let Ye=Z.get(Gt.id);if(!Ye){an&&an();return}let In=ot(ae,be).clone(),Wr=ot(ln,en).clone(),Yu=performance.now(),dc=0;function fc($u){dc++,dc%2===0&&dn();let pc=Math.min(1,($u-Yu)/to),Zu=go=>go*go*(3-2*go);Ye.position.lerpVectors(In,Wr,Zu(pc)),pc<1?requestAnimationFrame(fc):(Ye.position.copy(Wr),an&&an())}requestAnimationFrame(fc)}},Et=null,Ut=null,De=B.some(Gt=>Gt.target.maxHp>0&&Gt.target.hp/Gt.target.maxHp<z),$e=De||w.some(Gt=>je(Gt.gx,Gt.gy).some(be=>be.target.maxHp>0&&be.target.hp/be.target.maxHp<z));if(!$e){for(let ae of lt)if(!ae.disabled&&ft.has(ae.effectKey)){let ln=cr(m,ae,O).filter(en=>en.targetUnit&&en.targetUnit.maxHp>0&&en.targetUnit.hp/en.targetUnit.maxHp<.5);if(ln.length>0){let en=ln.sort((an,Ye)=>an.targetUnit.hp-Ye.targetUnit.hp)[0].targetUnit;Et=ae,Ut=en;break}}}if(!Et&&!$e&&(B.length>0||w.some(ae=>je(ae.gx,ae.gy).length>0)))for(let ae of lt){if(ae.disabled)continue;let be=m.tempBuff&&m.tempBuff.duration>0;if(xt.has(ae.effectKey)){if(ae.target==="self"){if(ae.effectKey==="bloodlust"&&m.hp/m.maxHp>.8)continue;if(!be){Et=ae,Ut=m;break}}if(ae.target==="ally"){if(ae.effectKey==="forge"&&be||ae.effectKey==="fortify"&&be||ae.effectKey==="mantra"&&be||ae.effectKey==="sanctuary"&&be)continue;let en=cr(m,ae,O).filter(an=>an.targetUnit!=null).map(an=>an.targetUnit);if(en.length>0){let an=en.filter(In=>!In.tempBuff||In.tempBuff.duration<=0),Ye=(an.length>0?an:en).sort((In,Wr)=>In.hp-Wr.hp)[0];Et=ae,Ut=Ye;break}}}}if(!Et){for(let Gt of lt)if(!Gt.disabled&&pt.has(Gt.effectKey)){if(Gt.effectKey==="feast"&&m.hp/m.maxHp>.7||Gt.effectKey==="berserk"&&m.hp/m.maxHp<.25||Gt.effectKey==="shuriken"&&B.length>0||Gt.effectKey==="judgement"&&m.hp/m.maxHp>.7)continue;let ae=re(Gt);if(ae.length===0)continue;let be=ae.filter(Ye=>Ye.maxHp>0&&Ye.hp/Ye.maxHp<St),ln=(Ye,In)=>ht(Ye,"int")-ht(In,"int")||Ye.hp-In.hp,en=(Ye,In)=>Ye.hp-In.hp,an=be.length>0?Gt.type==="spell"?be.sort(ln)[0]:be.sort(en)[0]:Gt.type==="spell"?ae.sort(ln)[0]:ae.sort(en)[0];Et=Gt,Ut=an;break}}if(!Et&&!De){for(let Gt of lt)if(!Gt.disabled&&_t.has(Gt.effectKey)){let be=re(Gt).sort((ln,en)=>ln.hp-en.hp)[0];Et=Gt,Ut=be;break}}if(!Et&&!De){for(let Gt of lt)if(!Gt.disabled&&Rt.has(Gt.effectKey)){let be=re(Gt).filter(ln=>!ln.tempDebuff||ln.tempDebuff.duration<=0);if(be.length>0){let ln=be.sort((en,an)=>en.hp-an.hp)[0];Et=Gt,Ut=ln;break}}}if(Et&&Ut){m.mp-=Et.cost,We=!0;let Gt=Et.target==="self"?m:Ut;Hr(m,Gt,Et,Ct,()=>setTimeout(xn,600));return}}if(Lu(m)&&B.length>0){B.sort((mt,St)=>mt.target.hp-St.target.hp||mt.dist-St.dist);let lt=B[0].target;sc(m,lt);return}if(B.length>0){B.sort((mt,St)=>mt.target.hp-St.target.hp||mt.dist-St.dist);let lt=B[0].target;sc(m,lt);return}let tn=xs-Pe;if(tn<=20&&H.length>0&&!Ee&&w.length>0&&!H.some(mt=>mt.gx===m.x&&mt.gy===m.y)){let mt=st.length>0?st:H,St=me(mt),pt=St?St.path:null,ft=(Ut,De)=>Math.min(...H.map($e=>ni(Ut,De,$e.gx,$e.gy))),xt=ft(m.x,m.y),Rt=null,_t=-1,re=z;for(let Ut of w){if(ft(Ut.gx,Ut.gy)>xt||je(Ut.gx,Ut.gy).filter(be=>be.target.maxHp>0&&be.target.hp/be.target.maxHp<re).length===0)continue;let Gt=pt?pt.findIndex(be=>be.x===Ut.gx&&be.y===Ut.gy):-1,ae=Gt>=0?Gt:0;ae>_t&&(_t=ae,Rt=Ut)}if(Rt&&(Rt.gx!==m.x||Rt.gy!==m.y)){Xe(m,Rt.gx,Rt.gy,()=>setTimeout(xn,600));return}let Ct=St?Le(St.path,ht(m,"agi")):null;if(Ct&&(Ct.gx!==m.x||Ct.gy!==m.y)){Xe(m,Ct.gx,Ct.gy,()=>setTimeout(xn,600));return}let Et=ke(w,mt);if(Et&&(Et.gx!==m.x||Et.gy!==m.y)){Xe(m,Et.gx,Et.gy,()=>setTimeout(xn,600));return}}if(rt&&w.length>0&&!Ee){let lt=null,mt=1/0;for(let St of w){let ft=je(St.gx,St.gy).filter(xt=>xt.target.maxHp>0&&xt.target.hp/xt.target.maxHp<z);if(ft.length>0){let xt=Math.min(...ft.map(Rt=>Rt.target.hp));xt<mt&&(mt=xt,lt=St)}}if(lt){let St=es(t,m.x,m.y,lt.gx,lt.gy,O,m),pt=St?He(St,ht(m,"agi")):null;if(pt&&(pt.gx!==m.x||pt.gy!==m.y)){Xe(m,pt.gx,pt.gy,()=>setTimeout(xn,600));return}}if(tn>20&&At&&q.length>0&&!q.some(pt=>pt.gx===m.x&&pt.gy===m.y)){let pt=bt.length>0?bt:q,ft=me(pt);if(ft!=null&&ft.path.length<=5){let Rt=Le(ft.path,ht(m,"agi"));if(Rt&&(Rt.gx!==m.x||Rt.gy!==m.y)){Xe(m,Rt.gx,Rt.gy,()=>setTimeout(xn,600));return}let _t=ke(w,pt);if(_t&&(_t.gx!==m.x||_t.gy!==m.y)){Xe(m,_t.gx,_t.gy,()=>setTimeout(xn,600));return}}}if(tn>20){let St=qe();if(St&&ni(m.x,m.y,St.gx,St.gy)>0){Xe(m,St.gx,St.gy,()=>setTimeout(xn,600));return}Ve();return}}if(tn<=10&&H.length>0&&!Ee&&w.length>0&&!H.some(mt=>mt.gx===m.x&&mt.gy===m.y)){let mt=st.length>0?st:H,St=me(mt),pt=St?Le(St.path,ht(m,"agi")):null;if(pt&&(pt.gx!==m.x||pt.gy!==m.y)){Xe(m,pt.gx,pt.gy,()=>setTimeout(xn,600));return}let ft=ke(w,mt);if(ft&&(ft.gx!==m.x||ft.gy!==m.y)){Xe(m,ft.gx,ft.gy,()=>setTimeout(xn,600));return}}if(m.level===1&&H.length>0&&!Ee&&!H.some(mt=>mt.gx===m.x&&mt.gy===m.y)&&w.length>0){let mt=st.length>0?st:H,St=me(mt),pt=St?Le(St.path,ht(m,"agi")):null;if(pt&&(pt.gx!==m.x||pt.gy!==m.y)){Xe(m,pt.gx,pt.gy,()=>setTimeout(xn,600));return}let ft=ke(w,mt);if(ft&&(ft.gx!==m.x||ft.gy!==m.y)){Xe(m,ft.gx,ft.gy,()=>setTimeout(xn,600));return}}if(At&&q.length>0&&!Ee&&!q.some(mt=>mt.gx===m.x&&mt.gy===m.y)&&w.length>0){let St=O.filter(Ct=>Ct.hp>0&&Ct.player!==m.player).filter(Ct=>Ct.maxHp>0&&Ct.hp/Ct.maxHp<z),pt=null,ft=1/0;for(let Ct of w){let Ut=je(Ct.gx,Ct.gy).find(De=>St.some($e=>$e.id===De.target.id));Ut&&Ut.target.hp<ft&&(ft=Ut.target.hp,pt=Ct)}if(pt){let Ct=es(t,m.x,m.y,pt.gx,pt.gy,O,m),Et=Ct?He(Ct,ht(m,"agi")):null;if(Et&&(Et.gx!==m.x||Et.gy!==m.y)){Xe(m,Et.gx,Et.gy,()=>setTimeout(xn,600));return}}let xt=bt.length>0?bt:q,Rt=me(xt),_t=Rt?Le(Rt.path,ht(m,"agi")):null;if(_t&&(_t.gx!==m.x||_t.gy!==m.y)){Xe(m,_t.gx,_t.gy,()=>setTimeout(xn,600));return}let re=ke(w,xt);if(re&&(re.gx!==m.x||re.gy!==m.y)){Xe(m,re.gx,re.gy,()=>setTimeout(xn,600));return}}let En=O.filter(lt=>lt.hp>0&&lt.player!==m.player);if(m.level>=2&&ce>=2&&En.length>0&&!Ee&&w.length>0){let lt=Qe();if(lt&&(lt.gx!==m.x||lt.gy!==m.y)){Xe(m,lt.gx,lt.gy,()=>setTimeout(xn,600));return}}if(En.length>0&&!Ee&&w.length>0){let mt=function(pt,ft){let xt=null;for(let Rt=-lt;Rt<=lt;Rt++)for(let _t=-lt;_t<=lt;_t++){if(_t===0&&Rt===0||Math.abs(_t)+Math.abs(Rt)>lt)continue;let re=pt.x+_t,Ct=pt.y+Rt;if(re<0||re>=t.w||Ct<0||Ct>=t.h||!nr(t,re,Ct)||!ys(t,re,Ct,pt.x,pt.y)||O.some(Gt=>Gt.hp>0&&Gt.x===re&&Gt.y===Ct))continue;let Ut=es(t,m.x,m.y,re,Ct,O,m),De=Ut?Ut.length-1:1/0;Ut&&Ut.length>1&&(!ft||De<=ht(m,"agi"))&&(!xt||Ut.length<xt.length)&&(xt=Ut)}return xt},lt=ce,St=[];for(let pt of En){let ft=mt(pt,!0);ft&&St.push({enemy:pt,path:ft})}if(St.length>0){let pt=St.filter(_t=>_t.enemy.maxHp>0&&_t.enemy.hp/_t.enemy.maxHp<z),ft=pt.length>0?pt:St;pt.length>0?ft.sort((_t,re)=>_t.enemy.hp-re.enemy.hp||_t.path.length-re.path.length):ft.sort((_t,re)=>_t.path.length-re.path.length||_t.enemy.hp-re.enemy.hp);let xt=ft[0],Rt=He(xt.path,ht(m,"agi"));if(Rt&&(Rt.gx!==m.x||Rt.gy!==m.y)){Xe(m,Rt.gx,Rt.gy,()=>setTimeout(xn,600));return}}if(St.length===0){let pt=null,ft=1/0;for(let xt of En){let Rt=mt(xt,!1);Rt&&Rt.length<ft&&(ft=Rt.length,pt=Rt)}if(pt){let xt=He(pt,ht(m,"agi"));if(xt&&(xt.gx!==m.x||xt.gy!==m.y)){Xe(m,xt.gx,xt.gy,()=>setTimeout(xn,600));return}}}}Ve()}function fn(){for($n.length=0;Un.children.length;){let x=Un.children[0];Un.remove(x),x.geometry!==hr&&x.geometry!==ur&&x.geometry.dispose(),x.material.dispose()}dn()}let Ms=new Set;function zr(x){return!x||!x.class?[]:bu[x.class]?bu[x.class].map(m=>({...m,disabled:m.disabled===!0||x.level<m.level||m.hpCost&&x.hp<m.hpCost||m.cost&&x.mp<m.cost})):[]}function cr(x,m,R){let w=[],B=(q,z,Y,rt)=>Math.abs(q-Y)+Math.abs(z-rt),H=m.range||0;if(m.target==="self")return w.push({gx:x.x,gy:x.y,targetUnit:null}),w;for(let q of R)q.hp<=0||B(x.x,x.y,q.x,q.y)>H||H>2&&!ys(t,x.x,x.y,q.x,q.y)||(m.target==="enemy"&&q.player!==x.player&&w.push({gx:q.x,gy:q.y,targetUnit:q}),m.target==="ally"&&q.player===x.player&&w.push({gx:q.x,gy:q.y,targetUnit:q}));return w}function Uu(x,m){let R=m.range||0;if(m.target==="self")return[{gx:x.x,gy:x.y}];let w=Eu(t,x.x,x.y,R),B=[];return w.forEach((H,q)=>{let z=q%t.w,Y=q/t.w|0;R>2&&!ys(t,x.x,x.y,z,Y)||B.push({gx:z,gy:Y})}),B}function Nu(x,m){let R=cr(x,m,O);Ms=new Set(R.map(B=>`${B.gx},${B.gy}`));let w=m.target==="self"?R:Uu(x,m);fn(),w.forEach(({gx:B,gy:H})=>{let z=(qn+t.height[H][B]*.35)/2+qn/2,Y=B*Se-Pt+Se/2,rt=H*Se-et+Se/2,dt=z+.01,At=new gn({color:8926122,transparent:!0,opacity:.4,side:mn}),tt=new Zt(hr,At);tt.rotation.x=-Math.PI/2,tt.position.set(Y,dt,rt),Un.add(tt),$n.push(At);let st=new gn({color:11167436,transparent:!0,opacity:.7,side:mn}),bt=new Zt(ur,st);bt.rotation.x=-Math.PI/2,bt.position.set(Y,dt+.01,rt),bt.userData.gx=B,bt.userData.gy=H,Un.add(bt),$n.push(st)})}let rc=.82,ac=1.02,hr=new Ni(ac,ac),ur=new Ni(rc,rc);function Ou(x){fn(),x.forEach(({gx:m,gy:R})=>{let B=(qn+t.height[R][m]*.35)/2+qn/2,H=m*Se-Pt+Se/2,q=R*Se-et+Se/2,z=B+.01,Y=new gn({color:2271812,transparent:!0,opacity:.4,side:mn}),rt=new Zt(hr,Y);rt.rotation.x=-Math.PI/2,rt.position.set(H,z,q),Un.add(rt),$n.push(Y);let dt=new gn({color:4508774,transparent:!0,opacity:.7,side:mn}),At=new Zt(ur,dt);At.rotation.x=-Math.PI/2,At.position.set(H,z+.01,q),At.userData.gx=m,At.userData.gy=R,Un.add(At),$n.push(dt)}),dn()}function uo(x){fn(),x.forEach((m,R)=>{if(m===0)return;let w=R%t.w,B=R/t.w|0,q=(qn+t.height[B][w]*.35)/2+qn/2,z=w*Se-Pt+Se/2,Y=B*Se-et+Se/2,rt=q+.01,dt=new gn({color:3381759,transparent:!0,opacity:.35,side:mn}),At=new Zt(hr,dt);At.rotation.x=-Math.PI/2,At.position.set(z,rt,Y),Un.add(At),$n.push(dt);let tt=new gn({color:6730751,transparent:!0,opacity:.65,side:mn}),st=new Zt(ur,tt);st.rotation.x=-Math.PI/2,st.position.set(z,rt+.01,Y),Un.add(st),$n.push(tt)}),dn()}function Fu(x){fn(),x.forEach((m,R)=>{if(m===0)return;let w=R%t.w,B=R/t.w|0,q=(qn+t.height[B][w]*.35)/2+qn/2,z=w*Se-Pt+Se/2,Y=B*Se-et+Se/2,rt=q+.01,dt=new gn({color:10035746,transparent:!0,opacity:.4,side:mn}),At=new Zt(hr,dt);At.rotation.x=-Math.PI/2,At.position.set(z,rt,Y),Un.add(At),$n.push(dt);let tt=new gn({color:13386820,transparent:!0,opacity:.7,side:mn}),st=new Zt(ur,tt);st.rotation.x=-Math.PI/2,st.position.set(z,rt+.01,Y),Un.add(st),$n.push(tt)}),dn()}let Fi=new Za,Bi=new Bt;function Vr(x,m){let R=e.getBoundingClientRect();return Bi.x=(x-R.left)/R.width*2-1,Bi.y=-((m-R.top)/R.height)*2+1,{x:Bi.x,y:Bi.y}}function Bu(x,m){if(Re)return;Bi.x=x,Bi.y=m,Fi.setFromCamera(Bi,a);let R=Fi.intersectObjects(at.children,!0);if(R.length===0)return;let w=null;for(let z of R){let Y=z.object;for(;Y&&(Y.userData.gx==null||Y.userData.gy==null);)Y=Y.parent;if(Y&&Y.userData.gx!=null){w=Y;break}}if(!w||w.userData.gx==null)return;let B=w.userData.gx,H=w.userData.gy;if(Vt==="draft"&&Ie){let z=H*t.w+B;pe.has(z)&&zn(B,H);return}if(Vt!=="playing"||kt==="cvcpu")return;if(sn&&ye){let z=ct[L],Y=O.find(st=>st.id===z&&st.hp>0);if(Y&&B===Y.x&&H===Y.y){sn=!1,ye=null,Ms=new Set,fn(),Ee?Mt=new Map:(Mt=ro(t,Y.x,Y.y,ht(Y,"agi"),O,Y),uo(Mt)),Ne();return}let rt=`${B},${H}`;if(!Ms.has(rt))return;if(!Y||Y.mp<ye.cost){sn=!1,ye=null,fn(),Ne();return}let dt=O.find(st=>st.x===B&&st.y===H&&st.hp>0);if(ye.target==="enemy"&&(!dt||dt.player===Y.player)||ye.target==="ally"&&dt&&dt.player!==Y.player||ye.target==="self"&&(B!==Y.x||H!==Y.y)||ye.target==="enemy"&&!dt)return;Y.mp-=ye.cost,We=!0;let At={showFloatingCombatText:Zn,handleUnitDeath:Sn,updateUnitSlashVisibility:X,updateTurnUI:Ne,world:t,units:O,updateUnitPosition(st){let bt=Z.get(st.id);bt&&bt.position.copy(ot(st.x,st.y))},animateKnockback(st,bt,se,Wt,ce,Fe){let ke=Z.get(st.id);if(!ke){Fe&&Fe();return}let je=ot(bt,se).clone(),pn=ot(Wt,ce).clone(),He=performance.now(),Le=0;function me(qe){Le++,Le%2===0&&dn();let _e=Math.min(1,(qe-He)/to),Qe=tn=>tn*tn*(3-2*tn);ke.position.lerpVectors(je,pn,Qe(_e)),_e<1?requestAnimationFrame(me):(ke.position.copy(pn),Fe&&Fe())}requestAnimationFrame(me)}},tt=ye.target==="self"?Y:dt||null;Hr(Y,tt,ye,At,()=>{fn(),sn=!1,ye=null,Ms=new Set,Ee?Ve():Ne()});return}if(ci){let z=ct[L],Y=O.find(dt=>dt.id===z),rt=Z.get(z);if(Y&&rt&&Yn.length>0){let dt=ot(Y.x,Y.y),At=ot(B,H),tt=At.x-dt.x,st=At.z-dt.z,bt=tt*tt+st*st>1e-6?Math.atan2(tt,st):rt.rotation.y;rt.rotation.y=rn(bt)}Ve();return}if(vt!=null&&Be){let z=O.find(dt=>dt.id===vt);if(!z||z.player!==Kt)return;let Y=H*t.w+B,rt=O.find(dt=>dt.x===B&&dt.y===H&&dt.hp>0);if(rt&&rt.id===ct[L]&&rt.player===Kt){Be=!1,vt=rt.id,Ee?(fn(),Mt=new Map):(Mt=ro(t,rt.x,rt.y,ht(rt,"agi"),O,rt),uo(Mt)),Ne();return}if(!Mt.has(Y)||Mt.get(Y)===0)return;if(rt&&rt.player!==Kt){let dt=ht(rt,"agi")*.7+ht(rt,"luk")*.3;if(Math.random()*Math.max(.001,dt)<=ht(z,"dex")){let st=ht(z,"str")*.7+ht(z,"dex")*.1+ht(z,"int")*.07-(ht(rt,"vit")*.3+ht(rt,"luk")*.1),bt=Math.max(1,Math.floor(st));rt.hp=Math.max(0,rt.hp-bt),Zn(rt.x,rt.y,String(bt),!1),rt.hp<=0&&Sn(rt),X(rt)}else Zn(rt.x,rt.y,"MISS",!0);We=!0,vt=null,Be=!1,fn(),Ee?Ve():Ne()}return}let q=O.find(z=>z.x===B&&z.y===H&&z.hp>0);if(q){if(q.id===ct[L]&&q.player===Kt){Oe(),vt=q.id,Be=!1,Ee?(fn(),Mt=new Map):(Mt=ro(t,B,H,ht(q,"agi"),O,q),uo(Mt)),Ne();return}fn(),Mt=new Map,Be=!1,ee(q),Ne();return}if(Oe(),vt!=null){let st=function(){if(tt>=dt.length){z.x=dt[dt.length-1].x,z.y=dt[dt.length-1].y,Re=!1,Jt(At),Ot(),Mt=new Map,Ee=!0,We?Ve():Ne();return}let bt=dt[tt-1],se=dt[tt],Wt=ot(bt.x,bt.y).clone(),ce=ot(se.x,se.y).clone(),Fe=ce.x-Wt.x,ke=ce.z-Wt.z;Fe*Fe+ke*ke>1e-6&&(At.rotation.y=Math.atan2(Fe,ke));let je=performance.now(),pn=0;function He(Le){pn++,pn%2===0&&dn();let me=Math.min(1,(Le-je)/to),_e=(Qe=>Qe*Qe*(3-2*Qe))(me);if(At.position.lerpVectors(Wt,ce,_e),ue(At,_e),p){let Qe=a.position.distanceTo(h),tn=Qe<.1?o:Qe;f.copy(a.position).sub(h).normalize(),f.lengthSq()<.01&&f.copy(c).normalize(),h.lerp(At.position,l),a.position.copy(h).add(f.clone().multiplyScalar(tn)),a.lookAt(h)}me<1?requestAnimationFrame(He):(tt++,st())}requestAnimationFrame(He)};if(Be)return;let z=O.find(bt=>bt.id===vt);if(!z||z.player!==Kt)return;let Y=H*t.w+B;if(!Mt.has(Y)||Mt.get(Y)===0||O.some(bt=>bt.id!==z.id&&bt.x===B&&bt.y===H&&bt.hp>0)||Re||Ee)return;let dt=es(t,z.x,z.y,B,H,O,z);if(!dt||dt.length<=1)return;vt=null,fn(),Re=!0,p=!0,Ot(z.id);let At=Z.get(z.id),tt=1;st()}}function oc(x){S.x=x.clientX,S.y=x.clientY,M=x.ctrlKey,_=Vr(x.clientX,x.clientY),e.style.cursor=(x.ctrlKey,"grabbing")}function fo(x){return x.touches&&x.touches.length>0?{clientX:x.touches[0].clientX,clientY:x.touches[0].clientY}:x.changedTouches&&x.changedTouches.length>0?{clientX:x.changedTouches[0].clientX,clientY:x.changedTouches[0].clientY}:{clientX:x.clientX,clientY:x.clientY}}function lc(x){if(!x||x.length<2)return 0;let m=x[0],R=x[1];return Math.hypot(R.clientX-m.clientX,R.clientY-m.clientY)}function ku(x){if(x.touches.length===2){P=lc(x.touches),_=null;return}if(x.touches.length!==1)return;P=null;let m=fo(x);oc({clientX:m.clientX,clientY:m.clientY,ctrlKey:!1})}function Hu(x){if(x.touches.length===2){x.preventDefault();let R=lc(x.touches);if(P!=null&&P>0){let w=R-P,B=a.position.distanceTo(h),H=Math.max(A,Math.min(U,B-w*j));y.copy(h).sub(a.position).normalize(),a.position.copy(h).sub(y.multiplyScalar(H)),a.lookAt(h),hi=performance.now()}P=R;return}if(P=null,x.touches.length!==1)return;x.preventDefault();let m=fo(x);cc({clientX:m.clientX,clientY:m.clientY,ctrlKey:!1})}function zu(x){if(x.touches.length<2&&(P=null),x.touches.length===2||x.changedTouches.length===0)return;let m=fo(x);po({clientX:m.clientX,clientY:m.clientY,ctrlKey:!1})}function cc(x){if(ci){Ke(x.clientX,x.clientY);return}if(_==null)return;let m=x.clientX-S.x,R=x.clientY-S.y;if(!v&&!g&&(Math.abs(m)>T||Math.abs(R)>T)&&(x.ctrlKey||M?(g=!0,p=!1):(v=!0,p=!1)),g){W.copy(a.position).sub(h);let w=W.length();if(w<.001)return;let B=Math.atan2(W.x,W.z),H=Math.asin(Math.max(-1,Math.min(1,W.y/w)));B-=m*N,H+=R*N,H=Math.max(I,Math.min(D,H)),W.x=w*Math.cos(H)*Math.sin(B),W.y=w*Math.sin(H),W.z=w*Math.cos(H)*Math.cos(B),a.position.copy(h).add(W),a.lookAt(h),S.x=x.clientX,S.y=x.clientY,hi=performance.now()}else if(v){let w=Vr(x.clientX,x.clientY);d.setFromNormalAndCoplanarPoint(new F(0,1,0),new F(0,h.y,0)),Fi.setFromCamera(new Bt(_.x,_.y),a),Fi.ray.intersectPlane(d,u);let B=u.clone();Fi.setFromCamera(new Bt(w.x,w.y),a),Fi.ray.intersectPlane(d,u);let H=B.sub(u);h.add(H),a.position.add(H),a.lookAt(h),_={x:w.x,y:w.y},hi=performance.now()}}function po(x){if(_!=null&&!v&&!g){let m=Vr(x.clientX,x.clientY);Bu(m.x,m.y)}_=null,v=!1,g=!1,M=!1,e.style.cursor="grab"}function Vu(x){x.preventDefault();let m=a.position.distanceTo(h),R=Math.max(A,Math.min(U,m+x.deltaY*k));y.copy(h).sub(a.position).normalize(),a.position.copy(h).sub(y.multiplyScalar(R)),a.lookAt(h),hi=performance.now()}e.style.cursor="grab",e.addEventListener("mousedown",oc),e.addEventListener("mousemove",cc),e.addEventListener("mouseup",po),e.addEventListener("mouseleave",po),e.addEventListener("touchstart",ku,{passive:!0}),e.addEventListener("touchmove",Hu,{passive:!1}),e.addEventListener("touchend",zu,{passive:!0}),e.addEventListener("wheel",Vu,{passive:!1});function hc(){let x=e.clientWidth,m=e.clientHeight;a.aspect=x/m,a.updateProjectionMatrix(),Cn.setSize(x,m),Cn.setPixelRatio(Math.min(window.devicePixelRatio,1.7))}window.addEventListener("resize",hc);let Cn=new Rr({antialias:!1});Cn.setSize(e.clientWidth,e.clientHeight),Cn.setPixelRatio(Math.min(window.devicePixelRatio,1.7)),Cn.shadowMap.enabled=!0,Cn.shadowMap.type=ql,e.appendChild(Cn.domElement),hc();let Gr=document.createElement("div");Gr.id="combat-text-layer",e.appendChild(Gr);let bi=new F,ki=new F,Gu=1400;function Zn(x,m,R,w,B){let H=document.createElement("div");H.className="combat-text-float "+(w?"miss":"damage")+(B?" "+B:""),H.textContent=R,H.style.position="absolute",Gr.appendChild(H);let q=B==="skill-name"?1.7:1.2,z=performance.now();function Y(){bi.copy(ot(x,m)),bi.y+=q,bi.project(a);let At=e.clientWidth,tt=e.clientHeight;H.style.left=(bi.x*.5+.5)*At+"px",H.style.top=(1-(bi.y*.5+.5))*tt+"px"}let rt=0;function dt(){rt%2===0&&Y(),rt++,performance.now()-z<Gu?requestAnimationFrame(dt):H.remove()}requestAnimationFrame(dt)}let Wu=1500;function Xu(x,m){let R=document.createElement("div");R.className="combat-text-float "+(m||"levelup"),R.textContent="LEVEL UP!",R.style.position="absolute",Gr.appendChild(R);let w=performance.now(),B=0;function H(){bi.copy(ot(x.x,x.y)),bi.y+=1.2,bi.project(a);let z=e.clientWidth,Y=e.clientHeight;R.style.left=(bi.x*.5+.5)*z+"px",R.style.top=(1-(bi.y*.5+.5))*Y+"px"}function q(){B%2===0&&H(),B++,performance.now()-w<Wu?requestAnimationFrame(q):R.remove()}requestAnimationFrame(q)}function Sn(x){console.log("[DEATH]",`${x.name} (${x.class}, P${x.player})`,`at (${x.x},${x.y})`,`Lv.${x.level}`),Zn(x.x,x.y,"DEAD",!1);let m=Z.get(x.id);if(!m){Ot(),uc();return}let R=performance.now();function w(B){dn();let H=B-R,q=Math.min(1,H/yt),z=q*q;m.rotation.x=z*Math.PI*.5,q<1?requestAnimationFrame(w):(n.remove(m),Z.delete(x.id),Ot(),uc())}requestAnimationFrame(w)}function uc(){if(Vt!=="playing")return;let x=O.some(R=>R.player===1&&R.hp>0),m=O.some(R=>R.player===2&&R.hp>0);x?m||mo(1):mo(2)}function qu(){let x=ic(),m=new Set(x.map(q=>q.gy*t.w+q.gx)),R=O.filter(q=>q.hp>0&&q.player===1&&m.has(q.y*t.w+q.x)).length,w=O.filter(q=>q.hp>0&&q.player===2&&m.has(q.y*t.w+q.x)).length,B=null,H="";if(R>w)B=1,H=`Time's up! Player 1 wins! (${R} vs ${w} units on center base)`;else if(w>R)B=2,H=`Time's up! Player 2 wins! (${w} vs ${R} units on center base)`;else{let q=O.filter(Y=>Y.hp>0&&Y.player===1).reduce((Y,rt)=>Y+rt.hp,0),z=O.filter(Y=>Y.hp>0&&Y.player===2).reduce((Y,rt)=>Y+rt.hp,0);q>z?(B=1,H=`Time's up! Draw on center \u2014 Player 1 wins on total HP (${q} vs ${z})`):z>q?(B=2,H=`Time's up! Draw on center \u2014 Player 2 wins on total HP (${z} vs ${q})`):H=`Draw! (equal units on center: ${R}, equal HP)`}mo(B,H)}function mo(x,m){Vt="gameover",document.getElementById("turn-menu").style.display="none",Oe(),fn();let R=document.getElementById("game-over-overlay"),w=document.getElementById("game-over-title"),B=document.getElementById("game-over-cards");w.textContent=m??`Player ${x} wins!`;let H=O.filter(q=>q.player===(x??1));B.innerHTML=H.map(q=>{let z=q,Y=q.level>=3?" level-3":q.level>=2?" level-2":"",rt=z.maxHp>0&&z.hp/z.maxHp<.3?" low-hp":"";return`
        <div class="game-over-card${Y}${rt}">
          <img class="game-over-card-image" src="${Br[q.class]||""}" alt="${z.name}" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="game-over-card-body">
            <div class="game-over-card-name">${z.name}</div>
            <div class="game-over-card-meta">Lv.${z.level} ${z.class} \u2014 HP ${z.hp}/${z.maxHp}</div>
            <div class="game-over-card-stats">
              <span class="stat-label">HP</span><span class="stat-val stat-val-hp">${z.hp}/${z.maxHp}</span>
              <span class="stat-label">MP</span><span class="stat-val">${z.mp}/${z.maxMp}</span>
              <span class="stat-label">STR</span><span class="stat-val">${ht(z,"str")}</span>
              <span class="stat-label">AGI</span><span class="stat-val">${ht(z,"agi")}</span>
              <span class="stat-label">VIT</span><span class="stat-val">${ht(z,"vit")}</span>
              <span class="stat-label">DEX</span><span class="stat-val">${ht(z,"dex")}</span>
              <span class="stat-label">LUK</span><span class="stat-val">${ht(z,"luk")}</span>
              <span class="stat-label">INT</span><span class="stat-val">${ht(z,"int")}</span>
              <span class="stat-label">Range</span><span class="stat-val">${z.range}</span>
            </div>
          </div>
        </div>
      `}).join(""),R.classList.add("visible")}function bs(x=0){requestAnimationFrame(bs),hi===0&&(hi=x);let m=x-hi>500,R=0;typeof bs.frameCount=="number"&&(R=bs.frameCount),bs.frameCount=R+1;let w=()=>{if(vi){let B=.6+.4*Math.sin(x*.004);for(let H=0;H<$n.length;H++){let q=H%2===0?.4:.7;$n[H].opacity=q*B}Cn.render(n,a),vi=!1}};m?x-ir>=100&&(ir=x,vi=!0,w()):(bs.frameCount%2===0&&(vi=!0),w())}bs()}Ox();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
