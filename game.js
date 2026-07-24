var Br=class{constructor(){this._handlers=new Map,this._any=new Set}on(t,e){let n=this._handlers.get(t);return n||(n=new Set,this._handlers.set(t,n)),n.add(e),()=>n.delete(e)}once(t,e){let n=this.on(t,s=>{n(),e(s)});return n}onAny(t){return this._any.add(t),()=>this._any.delete(t)}emit(t,e){let n=this._handlers.get(t);if(n)for(let s of[...n])s(e);if(this._any.size)for(let s of[...this._any])s(t,e)}clear(){this._handlers.clear(),this._any.clear()}};var Se={gridW:35,gridH:25,centerPlazaRadius:.29,maxTurns:200,draftPicksPerPlayer:7,moveDurationMs:300};var Os=typeof window<"u"&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||window.location.search.includes("dev=1"));function kr(i={}){return{...Se,...i}}var Hr=class{constructor(t=1){this._next=t}next(){return this._next++}reset(t=1){this._next=t}};function fm(i){let t=0;for(let e=0;e<i.length;e++)t=Math.imul(31,t)+i.charCodeAt(e),t=t>>>0;return t}function Vo(i){let t=typeof i=="string"?fm(i):i>>>0;return function(){t=t+1831565813>>>0;let n=Math.imul(t^t>>>15,t|1);return n=(n^n>>>7)>>>0,n/4294967296}}var zr=class{constructor(t=Date.now()){this.reseed(t)}reseed(t){this.seed=t,this._next=Vo(t)}next(){return this._next()}range(t,e){return t+this._next()*(e-t)}int(t,e){return Math.floor(t+this._next()*(e-t+1))}pick(t){return t[Math.floor(this._next()*t.length)]}shuffle(t){for(let e=t.length-1;e>0;e--){let n=Math.floor(this._next()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}};var Gr=class{constructor({seed:t}={}){this.settings=kr(),this.rng=new zr(t??Date.now()),this.ids=new Hr(1),this.world=null,this.units=[],this.unitById=new Map,this.unitAtTileKey=new Map,this.phase="draft",this.gameMode="pvp",this.turnCount=0,this.currentPlayer=1,this.initiativeOrder=[],this.currentTurnIndex=0,this.hasMoved=!1,this.hasAttacked=!1,this.deadCorpseCount=0,this.deathOrderSeq=0,this.powerups=new Map,this.powerupSpawnedTurnsLeft={30:!1,20:!1,10:!1},this.draft=pm(),this.localPlayerNumber=1,this.playerNames={1:"Player 1",2:"Player 2"},this.aiDraftPreference="balanced"}get world_(){return this.world}tileKey(t,e){return e*this.world.w+t}addUnit(t){return this.units.push(t),this.unitById.set(t.id,t),t.hp>0&&this.unitAtTileKey.set(this.tileKey(t.x,t.y),t),t}getUnitById(t){return this.unitById.get(t)||null}getUnitAtTile(t,e){let n=this.unitAtTileKey.get(this.tileKey(t,e));return n&&n.hp>0?n:null}updateUnitTileIndex(t,e,n){if(e!=null&&n!=null){let s=this.tileKey(e,n);this.unitAtTileKey.get(s)===t&&this.unitAtTileKey.delete(s)}t.hp>0&&this.unitAtTileKey.set(this.tileKey(t.x,t.y),t)}removeUnitFromTileIndex(t){let e=this.tileKey(t.x,t.y);this.unitAtTileKey.get(e)===t&&this.unitAtTileKey.delete(e)}removeUnit(t){let e=this.units.indexOf(t);e>=0&&this.units.splice(e,1),this.unitById.delete(t.id),this.removeUnitFromTileIndex(t)}rebuildIndexes(){this.unitById.clear(),this.unitAtTileKey.clear();for(let t of this.units)this.unitById.set(t.id,t),t.hp>0&&this.unitAtTileKey.set(this.tileKey(t.x,t.y),t)}clearUnits(){this.units=[],this.unitById.clear(),this.unitAtTileKey.clear(),this.ids.reset(1),this.deadCorpseCount=0,this.deathOrderSeq=0}getLivingUnits(){return this.units.filter(t=>t.hp>0)}getLivingUnitsForPlayer(t){return this.units.filter(e=>e.hp>0&&e.player===t)}getCoreLivingUnits(t){return this.units.filter(e=>e.hp>0&&e.player===t&&e.summonedBy==null)}getActiveUnit(){if(!this.initiativeOrder.length)return null;let t=this.initiativeOrder[this.currentTurnIndex];return this.getUnitById(t)}isHumanTurn(){return!(this.gameMode==="cvcpu"||this.gameMode==="pvcpu"&&this.currentPlayer!==1||this.gameMode==="online"&&this.currentPlayer!==this.localPlayerNumber)}isCPUPlayer(t){return this.gameMode==="pvcpu"&&t===2||this.gameMode==="cvcpu"}};function pm(){return{order:[],pickIndex:0,pickCountByPlayer:{1:0,2:0},availableClasses:new Set,classOrder:[],pendingClassKey:null,selectedClassKey:null,placementTiles:[]}}var At={PATH:0,GRASS:1,TREE:2,WATER:3,ROCK:4,BASE_TOP:5,BASE_BOTTOM:6,CENTER:7},Wo={[At.PATH]:2976557,[At.GRASS]:2968109,[At.TREE]:1719578,[At.WATER]:1989278,[At.ROCK]:4872778,[At.BASE_TOP]:8014410,[At.BASE_BOTTOM]:4872826,[At.CENTER]:13940810};var De=(i,t,e)=>e*i.w+t;function xn(i,t,e){if(t<0||t>=i.w||e<0||e>=i.h)return!1;let n=i.type[e][t];return!(n===At.TREE||n===At.WATER||n===At.ROCK)}function Hh(i,t,e,n,s){let r=n.x,a=n.y,o=n.x-e.x,l=n.y-e.y,c=Math.abs(o)>=Math.abs(l)?o>0?1:o<0?-1:0:0,h=Math.abs(l)>Math.abs(o)?l>0?1:l<0?-1:0:0;if(c===0&&h===0)return{newGx:r,newGy:a,collisionDamage:0};let u=0;for(let d=0;d<s;d++){let m=r+c,_=a+h,g=m<0||m>=i.w||_<0||_>=i.h,p=!xn(i,m,_),f=t.some(y=>y.hp>0&&y.id!==n.id&&y.x===m&&y.y===_);if(g||p||f){let y=Math.max(1,u*3+Math.ceil((e.str||0)*.3));return{newGx:r,newGy:a,collisionDamage:y}}r=m,a=_,u++}return{newGx:r,newGy:a,collisionDamage:0}}function mm(i,t,e,n){let s=[],r=i,a=t,o=e,l=n,c=Math.abs(o-r),h=Math.abs(l-a),u=r<o?1:-1,d=a<l?1:-1,m=c-h;for(;s.push({x:r,y:a}),!(r===o&&a===l);){let _=2*m;_>-h&&(m-=h,r+=u),_<c&&(m+=c,a+=d)}return s}function Ke(i,t,e,n,s){let r=mm(t,e,n,s);for(let a=1;a<r.length-1;a++){let o=r[a];if(!xn(i,o.x,o.y))return!1}return!0}function Xo(i){if(!i||!i.tempDebuff)return!1;let t=i.tempDebuff;return!(t.agi==null||!(t.agi>0)||t.duration!=null&&t.duration<=0)}function Vr(i,t,e,n,s,r){r&&Xo(r)?n=Math.max(0,n):n=Math.max(4,n);let a=new Map;a.set(De(i,t,e),0);let o=[{x:t,y:e,d:0}],l=0,c=[[0,1],[0,-1],[1,0],[-1,0]],h=s!=null&&r!=null,u=h?new Set(s.filter(d=>d.hp>0&&d.player!==r.player).map(d=>De(i,d.x,d.y))):null;for(;l<o.length;){let{x:d,y:m,d:_}=o[l++];if(!(_>=n))for(let[g,p]of c){let f=d+g,y=m+p;if(!xn(i,f,y)||h&&u.has(De(i,f,y)))continue;let x=De(i,f,y);if(a.has(x))continue;let M=_+1;a.set(x,M),o.push({x:f,y,d:M})}}return a}function Wr(i,t,e,n){let s=new Map,r=Math.max(0,t-n),a=Math.min(i.w-1,t+n),o=Math.max(0,e-n),l=Math.min(i.h-1,e+n);for(let c=o;c<=l;c++)for(let h=r;h<=a;h++){let u=Math.abs(h-t)+Math.abs(c-e);u>=1&&u<=n&&s.set(De(i,h,c),u)}return s}function Mi(i,t,e,n,s,r,a){if(t===n&&e===s)return[{x:t,y:e}];let o=new Set(r.filter(m=>m.hp>0&&m.player!==a.player).map(m=>De(i,m.x,m.y))),l=new Map,c=[{x:t,y:e}],h=0;l.set(De(i,t,e),null);let u=[[0,1],[0,-1],[1,0],[-1,0]],d=(m,_)=>xn(i,m,_)&&!o.has(De(i,m,_));for(;h<c.length;){let{x:m,y:_}=c[h++];if(m===n&&_===s){let g=[],p={x:n,y:s};for(;p;)g.unshift(p),p=l.get(De(i,p.x,p.y));return g}for(let[g,p]of u){let f=m+g,y=_+p,x=De(i,f,y);l.has(x)||d(f,y)&&(l.set(x,{x:m,y:_}),c.push({x:f,y}))}}return null}function zh(i,t,e,n,s,r){if(!n||n.length===0)return null;let a=De(i,t,e),o=new Set;for(let _=0;_<n.length;_++){let g=n[_];g&&g.gx!=null&&g.gy!=null&&o.add(De(i,g.gx,g.gy))}if(o.size===0)return null;if(o.has(a))return{path:[{x:t,y:e}],target:{gx:t,gy:e}};let l=new Set(s.filter(_=>_.hp>0&&_.player!==r.player).map(_=>De(i,_.x,_.y))),c=new Map,h=[{x:t,y:e}],u=0;c.set(a,null);let d=[[0,1],[0,-1],[1,0],[-1,0]],m=(_,g)=>xn(i,_,g)&&!l.has(De(i,_,g));for(;u<h.length;){let{x:_,y:g}=h[u++],p=De(i,_,g);if(o.has(p)){let f=[],y={x:_,y:g};for(;y;)f.unshift(y),y=c.get(De(i,y.x,y.y));return{path:f,target:{gx:_,gy:g}}}for(let f=0;f<d.length;f++){let y=_+d[f][0],x=g+d[f][1],M=De(i,y,x);c.has(M)||m(y,x)&&(c.set(M,{x:_,y:g}),h.push({x:y,y:x}))}}return null}function gm(i){return{hw:i.w*.95/2,hh:i.h*.95/2}}function qo(i,t){let{hw:e,hh:n}=gm(i),s=Math.floor((t.x+e)/.95),r=Math.floor((t.z+n)/.95);return s<0||s>=i.w||r<0||r>=i.h?null:{gx:s,gy:r}}var Ue=["knight","mage","monk","ghoul","lancer","hunter","assassin","berserker","witch","ninja","samurai","werewolf","paladin","exorcist","bandit","ranger","blacksmith","alchemist","vampire","necromancer","barbarian","cannibal","shaman","oracle","amazon"],Ne={knight:{name:"Knight",gender:"male",hp:27,maxHp:27,mp:5,maxMp:5,str:14,agi:8,vit:14,dex:10,luk:4,int:7,range:1},mage:{name:"Mage",gender:"female",hp:16,maxHp:16,mp:22,maxMp:22,str:3,agi:3,vit:5,dex:4,luk:13,int:17,range:1},monk:{name:"Monk",gender:"male",hp:24,maxHp:24,mp:13,maxMp:13,str:10,agi:10,vit:12,dex:9,luk:11,int:10,range:1},ghoul:{name:"Ghoul",gender:"male",hp:23,maxHp:23,mp:6,maxMp:6,str:12,agi:9,vit:9,dex:11,luk:9,int:5,range:1},lancer:{name:"Lancer",gender:"female",hp:22,maxHp:22,mp:7,maxMp:7,str:13,agi:11,vit:10,dex:7,luk:5,int:8,range:2},hunter:{name:"Hunter",gender:"female",hp:18,maxHp:18,mp:9,maxMp:9,str:7,agi:5,vit:7,dex:16,luk:12,int:5,range:8},assassin:{name:"Assassin",gender:"female",hp:20,maxHp:20,mp:10,maxMp:10,str:9,agi:14,vit:6,dex:14,luk:10,int:4,range:1},berserker:{name:"Berserker",gender:"male",hp:30,maxHp:30,mp:3,maxMp:3,str:15,agi:7,vit:13,dex:8,luk:6,int:1,range:1},witch:{name:"Witch",gender:"female",hp:16,maxHp:16,mp:24,maxMp:24,str:5,agi:6,vit:4,dex:5,luk:14,int:14,range:3},ninja:{name:"Ninja",gender:"female",hp:21,maxHp:21,mp:11,maxMp:11,str:8,agi:15,vit:7,dex:12,luk:8,int:9,range:1},samurai:{name:"Samurai",gender:"male",hp:24,maxHp:24,mp:8,maxMp:8,str:11,agi:12,vit:8,dex:13,luk:7,int:6,range:1},werewolf:{name:"Werewolf",gender:"male",hp:25,maxHp:25,mp:4,maxMp:4,str:14,agi:13,vit:11,dex:6,luk:6,int:3,range:1},paladin:{name:"Paladin",gender:"male",hp:26,maxHp:26,mp:12,maxMp:12,str:12,agi:8,vit:16,dex:8,luk:10,int:11,range:1},exorcist:{name:"Exorcist",gender:"male",hp:21,maxHp:21,mp:14,maxMp:14,str:7,agi:5,vit:9,dex:6,luk:15,int:13,range:1},bandit:{name:"Bandit",gender:"male",hp:20,maxHp:20,mp:6,maxMp:6,str:9,agi:14,vit:6,dex:14,luk:13,int:4,range:1},ranger:{name:"Ranger",gender:"female",hp:19,maxHp:19,mp:10,maxMp:10,str:8,agi:10,vit:8,dex:12,luk:7,int:6,range:5},blacksmith:{name:"Blacksmith",gender:"female",hp:25,maxHp:25,mp:8,maxMp:8,str:13,agi:8,vit:12,dex:11,luk:12,int:2,range:1},alchemist:{name:"Alchemist",gender:"female",hp:17,maxHp:17,mp:13,maxMp:13,str:6,agi:6,vit:10,dex:5,luk:8,int:11,range:5},vampire:{name:"Vampire",gender:"female",hp:18,maxHp:18,mp:16,maxMp:16,str:10,agi:12,vit:3,dex:4,luk:3,int:12,range:1},necromancer:{name:"Necromancer",gender:"male",hp:20,maxHp:20,mp:20,maxMp:20,str:4,agi:4,vit:7,dex:3,luk:11,int:15,range:1},barbarian:{name:"Barbarian",gender:"male",hp:40,maxHp:40,mp:4,maxMp:4,str:16,agi:4,vit:15,dex:6,luk:3,int:2,range:1},cannibal:{name:"Cannibal",gender:"male",hp:22,maxHp:22,mp:7,maxMp:7,str:6,agi:11,vit:2,dex:13,luk:9,int:7,range:4},shaman:{name:"Shaman",gender:"female",hp:17,maxHp:17,mp:21,maxMp:21,str:4,agi:3,vit:3,dex:3,luk:16,int:16,range:4},oracle:{name:"Oracle",gender:"female",hp:19,maxHp:19,mp:19,maxMp:19,str:5,agi:7,vit:4,dex:10,luk:14,int:10,range:3},amazon:{name:"Amazon",gender:"female",hp:23,maxHp:23,mp:5,maxMp:5,str:11,agi:9,vit:11,dex:7,luk:4,int:3,range:3}},_m=["hp","maxHp","mp","str","agi","vit","dex","luk","int"],Gh=(()=>{let i={};for(let t of Ue){let e=Ne[t];if(!e)continue;let n=_m.map(r=>e[r]??0),s=n.reduce((r,a)=>r+a,0)/n.length;i[t]=n.reduce((r,a)=>r+(a-s)**2,0)/n.length}return i})();var yn={knight:{primary:6908265,secondary:9127187,hair:11696641,cape:3355443,belt:9127187},mage:{primary:16776656,secondary:3355443,hair:13353955,cape:4853326},monk:{primary:16777188,secondary:16119285,hair:2889744,belt:657930},ghoul:{primary:32896,secondary:6636321,hair:32896,skin:32896},lancer:{primary:3169502,secondary:16776656,hair:15854290,cape:14423100},hunter:{primary:8421376,secondary:9584654,hair:7898731,cape:16119285},assassin:{primary:986695,secondary:16119285,hair:2621751,belt:8948621},berserker:{primary:657930,secondary:986695,hair:657930,cape:1118481},witch:{primary:16119285,secondary:8388640,hair:16777188,cape:2263842},ninja:{primary:267292,secondary:137541,hair:791074},samurai:{primary:13882323,secondary:3556687,hair:2039842},werewolf:{primary:4408907,secondary:2378091,hair:12632256,belt:466741},paladin:{primary:16445630,secondary:16774638,hair:12887172,cape:4286945,belt:4286945},exorcist:{primary:3881787,secondary:3881787,hair:16775930,cape:8488329},bandit:{primary:9125425,secondary:6045747,hair:14423100,cape:6710937},ranger:{primary:16775930,secondary:10913299,hair:16035328,cape:11402348,belt:10913299},blacksmith:{primary:13874819,secondary:9849600,hair:11696641,apron:9849600},alchemist:{primary:16738740,secondary:11154282,hair:16711807,cape:8900331},vampire:{primary:16704468,secondary:16704468,hair:1250066,cape:1250066,apron:1250066},necromancer:{primary:405028,secondary:405028,hair:7434350,cape:405028,belt:11372065},barbarian:{primary:11497041,secondary:6045747,hair:6045747,belt:11098894,skin:11497041},cannibal:{primary:11497041,secondary:8421504,hair:6045747,cape:16753920,belt:16753920,skin:11497041},shaman:{primary:3224389,secondary:4349324,hair:32896,cape:5152741,horns:16775930},oracle:{primary:16775930,secondary:16775930,hair:6045747,cape:16777215,belt:15712004,horns:15712004},amazon:{primary:11497041,secondary:11497041,hair:0,cape:331790,belt:0,horns:0,skin:11497041,apron:331790}},cn={knight:"https://creator.nightcafe.studio/jobs/OlIWpAye2LeM5gPkAGEI/OlIWpAye2LeM5gPkAGEI--1--xc223.jpg",mage:"https://media.craiyon.com/2025-08-13/bLqz0LbwSIynOcUHty4Maw.webp",monk:"https://cdnb.artstation.com/p/assets/images/images/028/576/499/large/ahruna-art-oct17.jpg?1594859688",ghoul:"https://i.pinimg.com/736x/d3/cc/41/d3cc41778d05dec0371a69e29659f792.jpg",lancer:"https://i.redd.it/zolf64gpoa0c1.jpg",hunter:"https://coolvibe.com/wp-content/uploads/2011/02/hunter.jpg",assassin:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk2-NBPpPOU7duYgN_k_9oFKZ5hJjU28qyoA&s",berserker:"https://entertainment.inquirer.net/files/2016/07/top_bg.jpg",witch:"https://w0.peakpx.com/wallpaper/382/134/HD-wallpaper-evil-witch-witch-female-dress-white-hair-evil-black-woman-girl-darkness-anime-dark-beauty-lady-long-hair.jpg",ninja:"https://i.pinimg.com/474x/02/88/60/0288609778e53701b7e64051d7164922.jpg",samurai:"https://files.idyllic.app/files/static/3120390?width=256&optimizer=image",werewolf:"https://i.pinimg.com/736x/1f/95/27/1f9527c6255465547d664f19dd11967c.jpg",paladin:"https://upload-os-bbs.hoyolab.com/upload/2023/12/01/84522063/a6a130d65b61025d979eda3750b0abd4_2602645990799609868.jpg?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_70",exorcist:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bdc0afb9-e917-4267-b7e6-2155f9c5c14c/detuach-b1b79b16-7fed-4175-b1a2-ca3d1bc6166b.jpg/v1/fill/w_1024,h_1449,q_75,strp/my_priest_by_domyzu_detuach-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi9iZGMwYWZiOS1lOTE3LTQyNjctYjdlNi0yMTU1ZjljNWMxNGMvZGV0dWFjaC1iMWI3OWIxNi03ZmVkLTQxNzUtYjFhMi1jYTNkMWJjNjE2NmIuanBnIiwiaGVpZ2h0IjoiPD0xNDQ5Iiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiL3dtL2JkYzBhZmI5LWU5MTctNDI2Ny1iN2U2LTIxNTVmOWM1YzE0Yy9kb215enUtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.5ueq8PhVPSB7hz65z6Cok8mX7IGeIrsQzCOaVFpt1pU",bandit:"https://i.pinimg.com/736x/6b/15/b0/6b15b06ae23f690e20968bc87c370831.jpg",ranger:"https://i.redd.it/2nfikbmqpwoa1.jpg",blacksmith:"https://images-ng.pixai.art/images/orig/489d970a-890e-4523-8f99-c0ba2d6bfeae",alchemist:"https://pics.craiyon.com/2023-07-11/ddbb35d3d2614541a9ad13181838257d.webp",vampire:"https://files.idyllic.app/files/static/2567599?width=256&optimizer=image",necromancer:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c77f367a-4886-467a-b509-a194cf9a6aca/dbq4hoj-c2811e28-2314-49ac-9c57-b2f7ab1ee170.jpg/v1/fill/w_1024,h_1434,q_75,strp/necromancer_by_johnathanchong_dbq4hoj-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQzNCIsInBhdGgiOiIvZi9jNzdmMzY3YS00ODg2LTQ2N2EtYjUwOS1hMTk0Y2Y5YTZhY2EvZGJxNGhvai1jMjgxMWUyOC0yMzE0LTQ5YWMtOWM1Ny1iMmY3YWIxZWUxNzAuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.vBO5eVep2-eoiZnpDxMvlWBsJ0_zfdGT_IAaPdqEv2k",barbarian:"https://image.lexica.art/full_jpg/dd171d51-f518-4ae9-949b-23f5d7a157be",cannibal:"https://i.pinimg.com/736x/de/57/d1/de57d1e7aa4dd2d8f052d48b06831cbd.jpg",shaman:"https://w0.peakpx.com/wallpaper/350/203/HD-wallpaper-guy-shaman-skull-horns-anime-art-green-thumbnail.jpg",oracle:"https://images.stockcake.com/public/a/3/d/a3d08448-237f-4c23-8660-43b615c9e3c9_large/desert-oracle-enchantress-stockcake.jpg",amazon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTnWAK4nkfgm8v-Ab35e3lkKOPOGTJzprr1w&s"};var ei={knight:[{name:"Brave",description:"Gain +1 STR and +1 VIT for 2 turns.",cost:3,target:"self",range:0,level:2,effectKey:"brave"},{name:"Dominate",description:"Steal 2 STR and 1 VIT from an enemy.",cost:6,target:"enemy",range:1,level:3,effectKey:"dominate"}],mage:[{name:"Arcane Bolt",description:"Deal INT-based damage to one enemy.",cost:6,target:"enemy",range:6,level:1,effectKey:"arcaneBolt",type:"spell"},{name:"Mana Drain",description:"Drain enemy MP based on INT.",cost:3,target:"enemy",range:6,level:2,effectKey:"manaDrain",type:"spell"}],monk:[{name:"Mantra",description:"Gain LUK based on INT for both ally and self for 2 turns.",cost:4,target:"ally",range:1,level:2,effectKey:"mantra"},{name:"Chakra",description:"Heal HP for both ally and self.",cost:8,target:"ally",range:4,level:3,effectKey:"chakra"}],ghoul:[{name:"Weaken",description:"Steal 1 VIT from an enemy.",cost:3,target:"enemy",range:1,level:2,effectKey:"weaken"},{name:"Feast",description:"Deal STR-based damage to enemy and heal self.",cost:4,target:"enemy",range:1,level:3,effectKey:"feast"}],lancer:[{name:"Impale",description:"Reduce target's AGI by 2 for 2 turns.",cost:4,target:"enemy",range:2,level:2,effectKey:"impale"},{name:"Pierce",description:"Deal STR-based damage through the defense.",cost:6,target:"enemy",range:2,level:3,effectKey:"pierce"}],hunter:[{name:"Focus",description:"Gain +3 DEX for 2 turns.",cost:3,target:"self",range:0,level:1,effectKey:"focus"},{name:"Snipe",description:"Deal long-ranged, DEX-based damage to one enemy.",cost:6,target:"enemy",range:12,level:2,effectKey:"snipe"}],assassin:[{name:"Cripple",description:"Steal 1 AGI from an enemy.",cost:4,target:"enemy",range:1,level:2,effectKey:"cripple"},{name:"Execute",description:"Deal AGI-based damage to one enemy.",cost:6,target:"enemy",range:1,level:3,effectKey:"execute"}],berserker:[{name:"Berserk",description:"Deal STR-based damage for -3 HP.",cost:0,hpCost:3,target:"enemy",range:1,level:2,effectKey:"berserk"},{name:"Bloodlust",description:"Gain STR and VIT based on lost HP for 1 turn.",cost:5,target:"self",range:0,level:3,effectKey:"bloodlust"}],witch:[{name:"Hex",description:"Steal 1 INT from an enemy.",cost:5,target:"enemy",range:4,level:1,effectKey:"hex",type:"spell"},{name:"Drain",description:"Deal INT-based damage to HP and MP and heal self.",cost:8,target:"enemy",range:4,level:2,effectKey:"drain",type:"spell"}],ninja:[{name:"Blind",description:"Steal 1 DEX from an enemy.",cost:4,target:"enemy",range:1,level:2,effectKey:"blind"},{name:"Shuriken",description:"Deal DEX-based ranged attack.",cost:6,target:"enemy",range:4,level:3,effectKey:"shuriken"}],samurai:[{name:"Iaido",description:"Gain +1 STR and +1 DEX for 2 turns.",cost:4,target:"self",range:0,level:2,effectKey:"iaido"},{name:"Chokuto",description:"Deal STR+DEX-based damage to one enemy.",cost:7,target:"enemy",range:1,level:3,effectKey:"chokuto"}],werewolf:[{name:"Bite",description:"Deal STR+AGI-based damage to one enemy.",cost:5,target:"enemy",range:1,level:2,effectKey:"bite"},{name:"Howl",description:"Gain +2 STR and +2 AGI for 2 turns.",cost:6,target:"self",range:0,level:3,effectKey:"howl"}],paladin:[{name:"Sacrifice",description:"Heal ally for -3 HP.",cost:1,hpCost:3,target:"ally",range:3,level:2,effectKey:"sacrifice"},{name:"Judgement",description:"Deal damage based on remaining HP.",cost:6,target:"enemy",range:1,level:3,effectKey:"judgement",type:"spell"}],exorcist:[{name:"Sanctuary",description:"Gain +1 ALL stats for both ally and self for 3 turns.",cost:4,target:"ally",range:4,level:1,effectKey:"sanctuary"},{name:"Exorcise",description:"Deal damage based on enemy lost HP.",cost:6,target:"enemy",range:3,level:2,effectKey:"exorcise",type:"spell"}],bandit:[{name:"Raid",description:"Steal 2 LUK from an enemy.",cost:3,target:"enemy",range:1,level:2,effectKey:"raid"},{name:"Ambush",description:"Deal LUK-based damage to one enemy.",cost:4,target:"enemy",range:1,level:3,effectKey:"ambush"}],ranger:[{name:"Wind walk",description:"Gain +3 AGI for 2 turns.",cost:5,target:"self",range:0,level:1,effectKey:"windWalk"},{name:"Power Shot",description:"Deal knockback damage to one enemy.",cost:7,target:"enemy",range:7,level:3,effectKey:"powerShot"}],blacksmith:[{name:"Forge",description:"Gain +2 STR for both ally and self for 2 turns.",cost:4,target:"ally",range:1,level:2,effectKey:"forge"},{name:"Fortify",description:"Gain +2 STR and +2 VIT for both ally and self for 2 turns.",cost:5,target:"ally",range:2,level:3,effectKey:"fortify"}],alchemist:[{name:"Poison",description:"Poison enemy for 2 turns.",cost:5,target:"enemy",range:5,level:1,effectKey:"poison"},{name:"Concoct",description:"Deal INT-based damage and add to 50% to LUK",cost:8,target:"enemy",range:7,level:2,effectKey:"concoct",type:"spell"}],vampire:[{name:"Gaze",description:"Steal AGI and VIT by 1 for 3 turns",cost:5,target:"enemy",range:4,level:1,effectKey:"gaze",type:"spell"},{name:"Blood Suck",description:"Absorb enemy HP based on your MP",cost:7,target:"enemy",range:1,level:3,effectKey:"bloodSuck"}],necromancer:[{name:"Debilitate",description:"Steal target's 3 HP and 3 VIT for 2 turns",cost:5,target:"enemy",range:5,level:1,effectKey:"debilitate",type:"spell"},{name:"Reanimate",description:"Resurrect dead unit to your control",cost:12,target:"self",range:0,level:2,effectKey:"reanimate"}],barbarian:[{name:"War Cry",description:"Gain VIT and LUK based on lost HP",cost:2,target:"self",range:0,level:1,effectKey:"warCry"},{name:"Bash",description:"Reduce target's AGI to 0 for 2 turns",cost:4,target:"enemy",range:1,level:2,effectKey:"bash"}],cannibal:[{name:"Gnaw",description:"Deal STR based damage to heal self",cost:3,target:"enemy",range:1,level:2,effectKey:"gnaw"},{name:"Infect",description:"Poison enemy for 3 turns",cost:4,target:"enemy",range:6,level:3,effectKey:"infect"}],shaman:[{name:"Vodoo",description:"Mirror damage for 2 turns",cost:4,target:"enemy",range:5,level:1,effectKey:"vodoo",type:"spell"},{name:"Malediction",description:"Deal INT+LUK-based damage to ALL stats for 2 turns",cost:6,target:"enemy",range:6,level:2,effectKey:"malediction",type:"spell"}],oracle:[{name:"Foresight",description:"Gain INT and DEX based on INT for 2 turns",cost:4,target:"ally",range:6,level:1,effectKey:"foresight"},{name:"Overheal",description:"Heal ally for 2 turns",cost:7,target:"ally",range:6,level:2,effectKey:"overheal"}],amazon:[{name:"Skewer",description:"Deal DEX-based damage to AGI for 2 turns ",cost:4,target:"enemy",range:3,level:2,effectKey:"skewer"},{name:"Rapid",description:"Double attack for 1 turn",cost:6,target:"self",range:0,level:3,effectKey:"rapid"}]},xm={brave:"Brave",dominate:"Dominate",arcaneBolt:"Arcane Bolt",manaDrain:"Mana Drain",mantra:"Mantra",chakra:"Chakra",weaken:"Weaken",feast:"Feast",impale:"Impale",pierce:"Pierce",focus:"Focus",snipe:"Snipe",execute:"Execute",cripple:"Cripple",berserk:"Berserk",bloodlust:"Bloodlust",hex:"Hex",drain:"Drain",shuriken:"Shuriken",blind:"Blind",iaido:"Iaido",chokuto:"Chokuto",bite:"Bite",howl:"Howl"},Yo=new Map;function $r(i){let t=Yo.get(i);if(t!==void 0)return t;for(let e of Object.values(ei)){let n=e.find(s=>s.effectKey===i);if(n)return t=n.name,Yo.set(i,t),t}return t=xm[i]??i.replace(/([A-Z])/g," $1").replace(/^./,e=>e.toUpperCase()).trim(),Yo.set(i,t),t}function ym(i){return i===1?{dx:0,dy:-1}:{dx:0,dy:1}}function vn(i,t,e,n){let s=Math.sign(e-i),r=Math.sign(n-t);return s===0&&r===0?null:{dx:s,dy:r}}function Wh({id:i,player:t,classKey:e,x:n,y:s,level:r=1}){let a=Ne[e],o=yn[e]||yn.knight;return{id:i,player:t,x:n,y:s,level:r,facing:ym(t),name:a.name,class:e,hairColor:o.hair,hp:a.hp,maxHp:a.maxHp,mp:a.mp,maxMp:a.maxMp,str:a.str,agi:a.agi,vit:a.vit,dex:a.dex,luk:a.luk,int:a.int,range:a.range}}function Ht(i,t){let e=i[t]!=null?i[t]:0,n=i.tempBuff&&i.tempBuff[t]!=null?i.tempBuff[t]:0,s=i.tempDebuff&&i.tempDebuff[t]!=null?i.tempDebuff[t]:0;return e+n-s}function vm(i,t){let e=i[t]!=null?i[t]:0,n=i.tempBuff&&i.tempBuff[t]!=null?i.tempBuff[t]:0,s=i.tempDebuff&&i.tempDebuff[t]!=null?i.tempDebuff[t]:0,r=String(e);return n>0&&(r+=` <span class="stat-val-buff">+${n}</span>`),s>0&&(r+=` <span class="stat-val-debuff">-${s}</span>`),r}function Mm(i){return i&&i.hp>0&&i.hp<=i.maxHp*.25}var Sm=["str","agi","vit","dex","luk","int"];function bm(i){return i?{buffs:Vh(i.tempBuff,"buff"),debuffs:Vh(i.tempDebuff,"debuff")}:{buffs:[],debuffs:[]}}function Vh(i,t){if(!i||typeof i!="object")return[];let e=[];if(i.effectKey){let n=$r(i.effectKey),s=Em(i,t);return e.push({name:n,detail:s}),e}return t==="debuff"&&typeof i.poison=="number"&&i.poison>0&&e.push({name:"Poison",detail:`${i.poison} dmg/turn`}),typeof i.heal=="number"&&i.heal>0&&e.push({name:"Regen",detail:`${i.heal} HP/turn`}),t==="buff"&&i.doubleAttack===!0&&e.push({name:"Double Attack",detail:""}),t==="buff"&&i.vodoo!=null&&e.push({name:"Vodoo",detail:""}),e}function Em(i,t){return t==="debuff"&&typeof i.poison=="number"&&i.poison>0?`${i.poison} dmg/turn`:typeof i.heal=="number"&&i.heal>0?`${i.heal} HP/turn`:""}function Fs(i){if(!i)return null;let t={};for(let s of Sm)t[s]=vm(i,s);let{buffs:e,debuffs:n}=bm(i);return{id:i.id,player:i.player,name:i.name,class:i.class,level:i.level,hp:i.hp,maxHp:i.maxHp,mp:i.mp,maxMp:i.maxMp,range:i.range,lowHp:Mm(i),poison:i.tempDebuff&&i.tempDebuff.poison?i.tempDebuff.poison:0,autoHeal:i.tempBuff&&i.tempBuff.heal?i.tempBuff.heal:0,buffs:e,debuffs:n,statsHtml:t}}var wm=.95,Tm=1.03,Am=1.12;function Si(i,t){let e=t&&t.facing;if(!i||!e||e.dx===0&&e.dy===0)return 1;let n=i.x-t.x,s=i.y-t.y;if(n===0&&s===0)return 1;let r=Math.hypot(n,s),a=Math.hypot(e.dx,e.dy),o=n/r*(e.dx/a)+s/r*(e.dy/a);return o>=.5?wm:o<=-.5?Am:Tm}function $h(i,t,e){let n=Ht(t,"agi")*.7+Ht(t,"luk")*.3,r=e.next()*Math.max(.001,n)<=Ht(i,"dex")*Si(i,t),a=0;if(r){let o=Ht(i,"str")*.7+Ht(i,"dex")*.2+Ht(i,"int")*.1-(Ht(t,"vit")*.3+Ht(t,"luk")*.2);a=Math.max(1,Math.floor(o))}return{isHit:r,damage:a}}function Xh(i,t,e){let n=[$h(i,t,e)];return i.tempBuff&&i.tempBuff.doubleAttack===!0&&t.hp>0&&n.push($h(i,t,e)),n}function Rm(i,t,e){if(!t||e<=0)return;let n=i.state.units,s=t.tempBuff;if(!s||s.vodoo==null||s.duration!=null&&s.duration<=0)return;let r=t.id;for(let a=0;a<n.length;a++){let o=n[a];if(!(!o||o.hp<=0||o.id===r)&&s.vodoo===o.id){o.hp=Math.max(0,o.hp-e),i.emit("floatingText",{gx:o.x,gy:o.y,text:String(e),kind:"vodoo"}),i.emit("unitStatsChanged",{unit:o}),o.hp<=0&&i.onDeath&&i.onDeath(o,t);break}}}function Bs(i,t){let{attacker:e,victim:n}=t,s=t.amount;if(t.isHeal)return n.hp=Math.min(n.maxHp,n.hp+s),i.emit("floatingText",{gx:n.x,gy:n.y,text:`+${s}`,kind:"heal"}),i.emit("unitStatsChanged",{unit:n}),!0;let r=n===e,a=!0;if(t.preHit!==void 0)a=t.preHit;else if(!r&&!t.isSpell){let o=Ht(n,"agi")*.7+Ht(n,"luk")*.3;a=i.rng.next()*Math.max(.001,o)<=Ht(e,"dex")*Si(e,n)}return a?(!r&&!t.ignoreFacing&&(s=Math.max(1,Math.round(s*Si(e,n)))),n.hp=Math.max(0,n.hp-s),i.emit("floatingText",{gx:n.x,gy:n.y,text:String(s),kind:"damage"}),i.emit("unitStatsChanged",{unit:n,selfCost:!!t.selfCost}),Rm(i,n,s),n.hp<=0&&i.onDeath&&i.onDeath(n,e)):i.emit("floatingText",{gx:n.x,gy:n.y,text:"MISS",kind:"miss"}),a}function qh(i,t,e,n){let{state:s}=i,r=Hh(s.world,s.units,t,e,n),a=e.x,o=e.y;e.x=r.newGx,e.y=r.newGy,s.updateUnitTileIndex(e,a,o),i.emit("unitKnockback",{unit:e,from:{gx:a,gy:o},to:{gx:r.newGx,gy:r.newGy}}),r.collisionDamage>0?(Bs(i,{attacker:t,victim:e,amount:r.collisionDamage,ignoreFacing:!0}),e.hp>0&&i.emit("powerupCheck",{unit:e})):e.hp>0&&i.emit("powerupCheck",{unit:e})}var Yh={brave(i){let{u:t}=i,e=1;t.tempBuff={str:e,vit:e,duration:3},i.statText(t.x,t.y,`+${e} STR, +${e} VIT`,!0)},dominate(i){let{u:t,t:e}=i;if(!e)return;let n=2,s=1;e.str=Math.max(1,(e.str||0)-n),t.str=(t.str||0)+n,e.vit=Math.max(1,(e.vit||0)-s),t.vit=(t.vit||0)+s,i.statText(e.x,e.y,`-${n} STR and -${s} VIT`,!1),i.statText(t.x,t.y,`+${n} STR and +${s} VIT`,!0)},mantra(i){let{u:t,t:e,getEff:n}=i;if(!e)return;let s=Math.max(1,Math.ceil(n(t,"int")*.3));t.tempBuff={int:s,duration:3},i.statText(t.x,t.y,`+${s} LUK`,!0),e.tempBuff={luk:s,duration:3},i.statText(e.x,e.y,`+${s} LUK`,!0)},weaken(i){let{u:t,t:e}=i;if(!e)return;let n=1;e.vit=Math.max(1,(e.vit||0)-n),t.vit=(t.vit||0)+n,i.statText(e.x,e.y,`-${n} VIT`,!1),i.statText(t.x,t.y,`+${n} VIT`,!0)},impale(i){let{t}=i;if(!t)return;let e=2;t.tempDebuff={agi:e,duration:3},i.statText(t.x,t.y,`-${e} AGI`,!1)},focus(i){let{u:t}=i,e=3;t.tempBuff={dex:e,duration:3},i.statText(t.x,t.y,`+${e} DEX`,!0)},cripple(i){let{u:t,t:e}=i;if(!e)return;let n=1;e.agi=Math.max(1,(e.agi||0)-n),t.agi=(t.agi||0)+n,i.statText(e.x,e.y,`-${n} AGI`,!1),i.statText(t.x,t.y,`+${n} AGI`,!0)},bloodlust(i){let{u:t}=i,e=Math.max(1,Math.floor((t.maxHp-t.hp)*.2));t.tempBuff={str:e,vit:e,duration:2},i.statText(t.x,t.y,`+${e} STR, +${e} VIT`,!0)},hex(i){let{u:t,t:e}=i;if(!e)return;let n=1;e.int=Math.max(1,(e.int||0)-n),t.int=(t.int||0)+n,i.statText(e.x,e.y,`-${n} INT`,!1),i.statText(t.x,t.y,`+${n} INT`,!0)},blind(i){let{u:t,t:e}=i;if(!e)return;let n=1;e.dex=Math.max(1,(e.dex||0)-n),t.dex=(t.dex||0)+n,i.statText(e.x,e.y,`-${n} DEX`,!1),i.statText(t.x,t.y,`+${n} DEX`,!0)},iaido(i){let{u:t}=i,e=1;t.tempBuff={str:e,dex:e,duration:3},i.statText(t.x,t.y,`+${e} STR, +${e} DEX`,!0)},howl(i){let{u:t}=i,e=2;t.tempBuff={str:e,agi:e,duration:3},i.statText(t.x,t.y,`+${e} STR, +${e} AGI`,!0)},sanctuary(i){let{u:t,t:e}=i,n=1;t.tempBuff={str:n,vit:n,dex:n,agi:n,int:n,luk:n,duration:4},e.tempBuff={str:n,vit:n,dex:n,agi:n,int:n,luk:n,duration:4},t.hp<t.maxHp&&(t.hp+=n),e.hp<e.maxHp&&(e.hp+=n),i.statText(t.x,t.y,`+${n} ALL STATS`,!0),i.statText(e.x,e.y,`+${n} ALL STATS`,!0)},raid(i){let{u:t,t:e}=i,n=2;e.luk=Math.max(1,(e.luk||0)-n),t.luk=(t.luk||0)+n,i.statText(e.x,e.y,`-${n} LUK`,!1),i.statText(t.x,t.y,`+${n} LUK`,!0)},windWalk(i){let{u:t}=i,e=3;t.tempBuff={agi:e,duration:3},i.statText(t.x,t.y,`+${e} AGI`,!0)},forge(i){let{u:t,t:e}=i,n=2;t.tempBuff={str:n,duration:3},e.tempBuff={str:n,duration:3},i.statText(t.x,t.y,`+${n} STR`,!0),i.statText(e.x,e.y,`+${n} STR`,!0)},fortify(i){let{u:t,t:e}=i,n=3;t.tempBuff={str:n,vit:n,duration:3},e.tempBuff={str:n,vit:n,duration:3},i.statText(t.x,t.y,`+${n} STR, +${n} VIT`,!0),i.statText(e.x,e.y,`+${n} STR, +${n} VIT`,!0)},gaze(i){let{u:t,t:e}=i;if(!e)return;let n=1;e.tempDebuff={agi:n,vit:n,duration:4},t.tempBuff={agi:n,vit:n,duration:4},i.statText(e.x,e.y,`-${n} AGI, -${n} VIT`,!1),i.statText(t.x,t.y,`+${n} AGI, +${n} VIT`,!0)},debilitate(i){let{u:t,t:e}=i;if(!e)return;let n=3;e.tempDebuff={hp:n,maxHp:n,vit:n,duration:3},t.tempBuff={hp:n,maxHp:n,vit:n,duration:3},i.statText(e.x,e.y,`-${n} HP, -${n} VIT`,!1),i.statText(t.x,t.y,`+${n} HP, +${n} VIT`,!0)},warCry(i){let{u:t}=i,e=Math.max(2,Math.ceil((t.maxHp-t.hp)*.3));t.tempBuff={vit:e,luk:e,duration:3},i.statText(t.x,t.y,`+${e} VIT, +${e} LUK`,!0)},bash(i){let{t}=i;if(!t)return;let e=t.agi;t.tempDebuff={agi:e,duration:3},i.statText(t.x,t.y,`-${e} AGI`,!1)},foresight(i){let{u:t,t:e,getEff:n}=i,s=Math.max(2,Math.floor(n(t,"int")*.2));t.tempBuff={int:s,dex:s,mp:s,maxMp:s,duration:3},i.statText(t.x,t.y,`+${s} INT, +${s} DEX, +${s} MP`,!0),e&&(e.tempBuff={int:s,dex:s,mp:s,maxMp:s,duration:3},i.statText(e.x,e.y,`+${s} INT, +${s} DEX, +${s} MP`,!0))},overheal(i){let{u:t,t:e,getEff:n}=i,s=Math.max(1,Math.floor(n(t,"int")*.3+n(t,"luk")*.2));t.tempBuff={heal:s,duration:3},i.statText(t.x,t.y,"Auto heal for 2 turns",!0),e&&(e.tempDebuff={heal:s,duration:3},i.statText(e.x,e.y,"Auto heal for 2 turns",!0))},rapid(i){let{u:t}=i;t.tempBuff={doubleAttack:!0,duration:2},i.statText(t.x,t.y,"Double attack for 1 turn",!0)}};var Kh={arcaneBolt(i){let{u:t,t:e,getEff:n}=i;if(!e)return;let s=Math.max(1,Math.ceil(n(t,"int")*.9-(n(e,"int")*.4+n(e,"luk")*.3)));i.damage(e,s,{spell:!0})},pierce(i){let{u:t,t:e,getEff:n}=i;if(!e)return;let s=Math.max(1,Math.floor(n(t,"str")*.6));i.damage(e,s)},snipe(i){let{u:t,t:e,getEff:n}=i;if(!e)return;let s=Math.max(1,Math.floor(n(t,"dex")*.8-(n(e,"vit")*.3+n(e,"luk")*.2)));i.damage(e,s)},execute(i){let{u:t,t:e,getEff:n}=i;if(!e)return;let s=Math.max(1,Math.floor(n(t,"agi")*.8-(n(e,"vit")*.3+n(e,"luk")*.2)));i.damage(e,s)},berserk(i){let{u:t,t:e,getEff:n}=i;e&&(i.damage(e,Math.max(1,Math.floor(n(t,"str")*.8-n(e,"vit")*.3+n(e,"luk")*.2))),i.damage(t,3,{selfCost:!0}))},drain(i){let{u:t,t:e,getEff:n}=i;if(!e)return;let s=Math.max(1,Math.ceil(n(t,"int")*.6-(n(e,"int")*.4+n(e,"luk")*.3))),r=Math.max(1,Math.ceil(n(t,"int")*.3-(n(e,"int")*.4+n(e,"luk")*.3)));i.damage(e,s,{spell:!0}),i.damage(t,s+r,{heal:!0}),e.mp=Math.max(1,(e.mp||0)-r),i.statText(t.x,t.y,`+${s} HP and +${r} MP`,!0),i.statText(e.x,e.y,`-${s} HP and -${r} MP`,!1)},shuriken(i){let{u:t,t:e,getEff:n}=i;if(!e)return;let s=Math.max(1,Math.ceil(n(t,"dex")*.7-(n(e,"vit")*.3+n(e,"luk")*.2)));i.damage(e,s)},chokuto(i){let{u:t,t:e,getEff:n}=i;if(!e)return;let s=Math.max(1,Math.floor(n(t,"str")*.4+n(t,"dex")*.4-(n(e,"vit")*.3+n(e,"luk")*.2)));i.damage(e,s)},bite(i){let{u:t,t:e,getEff:n}=i;if(!e)return;let s=Math.max(1,Math.floor(n(t,"str")*.7+n(t,"agi")*.1-(n(e,"vit")*.3+n(e,"luk")*.2)));i.damage(e,s)},judgement(i){let{u:t,t:e,getEff:n}=i;if(!e)return;let s=Math.max(1,Math.floor(t.maxHp-t.hp-(n(e,"int")*.2+n(e,"luk")*.1)));i.damage(e,s,{spell:!0})},exorcise(i){let{t,getEff:e}=i;if(!t)return;let n=Math.max(1,Math.floor((t.maxHp-t.hp)*1.3-(e(t,"int")*.2+e(t,"luk")*.1)));i.damage(t,n,{spell:!0})},ambush(i){let{u:t,t:e,getEff:n}=i;if(!e)return;let s=Math.max(1,Math.floor(n(t,"luk")*.8-(n(e,"vit")*.3+n(e,"luk")*.2)));i.damage(e,s)},feast(i){let{u:t,t:e,getEff:n}=i;if(!e)return;let s=Math.max(1,Math.floor(n(t,"str")*.8-(n(e,"vit")*.3+n(e,"luk")*.2)));i.damage(e,s)&&i.damage(t,s,{heal:!0})},concoct(i){let{u:t,t:e,getEff:n}=i;if(!e)return;let s=Math.max(1,Math.floor(n(t,"int")*.8-(n(e,"int")*.4+n(e,"luk")*.2)));i.damage(e,s,{spell:!0});let r=Math.max(1,Math.floor(s*.5));t.luk=Math.max(1,(t.luk||0)+r),i.statText(t.x,t.y,`+${r} LUK`,!0)},bloodSuck(i){let{u:t,t:e,getEff:n}=i;if(!e)return;let s=Math.max(1,Math.floor(t.mp*.6+n(t,"int")*.6-(e.hp*.3+n(e,"luk")*.1)));i.damage(e,s,{spell:!0})&&i.damage(t,s,{heal:!0})},gnaw(i){let{u:t,t:e,getEff:n}=i;if(!e)return;let s=Math.max(1,Math.floor(n(t,"str")-(n(e,"vit")*.3+n(e,"luk")*.2)));i.damage(e,s,{spell:!0}),i.damage(t,s,{heal:!0})},malediction(i){let{u:t,t:e,getEff:n}=i;if(!e)return;let s=Math.max(1,Math.ceil(n(t,"int")*.4+n(t,"luk")*.3-(n(e,"int")*.3+n(e,"luk")*.2))),r=Math.max(1,Math.ceil(s*.3));e.tempDebuff={luk:r,int:r,str:r,vit:r,agi:r,dex:r,duration:3},i.damage(e,s,{spell:!0}),i.statText(e.x,e.y,`-${r} ALL STATS`,!1)},skewer(i){let{u:t,t:e,getEff:n}=i;if(!e)return;let s=Math.max(1,Math.ceil(n(t,"dex")*.8-(n(e,"vit")*.3+n(e,"luk")*.2)));e.tempDebuff={agi:s,duration:3},i.statText(e.x,e.y,`-${s} AGI`,!1)}};var Zh={chakra(i){let{u:t,t:e,getEff:n}=i;i.damage(t,Math.max(1,Math.floor(n(t,"int")*.3+n(t,"luk")*.15)),{heal:!0}),e&&i.damage(e,Math.max(1,Math.floor(n(t,"int")*.3+n(e,"luk")*.15)),{heal:!0})},sacrifice(i){let{u:t,t:e,getEff:n}=i,s=Math.max(1,Math.floor(n(t,"int")*.5));i.damage(e,s,{heal:!0}),i.damage(t,3,{selfCost:!0})},manaDrain(i){let{u:t,t:e,getEff:n}=i;if(!e)return;let s=Math.max(1,Math.floor(n(e,"int")*.3));e.mp=Math.max(1,(e.mp||0)-s),t.mp=(t.mp||0)+s,i.statText(e.x,e.y,`-${s} MP`,!1),i.statText(t.x,t.y,`+${s} MP`,!0)}};var Jh={poison(i){let{t,getEff:e}=i;if(!t)return;let n=Math.max(1,Math.floor(e(t,"luk")*.4-e(t,"luk")*.2));t.tempDebuff={poison:n,duration:3},i.statText(t.x,t.y,`${n} poison for 2 turns`,!1)},infect(i){let{u:t,t:e,getEff:n}=i;if(!e)return;let s=Math.max(1,Math.ceil(n(t,"luk")*.4-n(e,"luk")*.1));e.tempDebuff={poison:s,duration:4},i.statText(e.x,e.y,`${s} poison for 3 turns`,!1)},vodoo(i){let{u:t,t:e}=i;e&&(t.tempBuff={vodoo:e.id,duration:3},i.statText(e.x,e.y,"Vodoo for 2 turns",!1))},powerShot(i){let{u:t,t:e,getEff:n}=i;if(!e)return;let s=Math.max(1,Math.floor(n(t,"dex")*.6-(n(e,"vit")*.3+n(e,"luk")*.2)));if(i.damage(e,s)&&i.knockback){let a=Math.max(1,Math.floor(s*.2));i.knockback(t,e,a)}},reanimate(i){let{u:t,state:e}=i;if(!i.reanimate)return;let n=e.units,s=null,r=-1,a=null,o=-1,l=!1;for(let h=0;h<n.length;h++){let u=n[h];if(u.hp>0||u.isReanimated)continue;let d=u.deathOrder??0;d>=r&&(r=d,s=u),u.player===t.player&&(l=!0,d>=o&&(o=d,a=u))}let c=l?a:s;c&&i.reanimate(t,c)}};var Cm={...Yh,...Kh,...Zh,...Jh};function jh(i){return Cm[i]||null}function Mn(i,t){return t?(t.summonedSkills&&t.summonedSkills.length>0?t.summonedSkills:t.class&&ei[t.class]?ei[t.class]:[]).map(n=>({...n,disabled:n.disabled===!0||t.level<(n.level||1)||n.hpCost&&t.hp<n.hpCost||n.cost!=null&&t.mp<n.cost||n.effectKey==="reanimate"&&i.deadCorpseCount<=0})):[]}function Xi(i,t,e){let n=[],s=e.range||0,{world:r}=i,a=t.x,o=t.y;if(e.target==="self")return n.push({gx:a,gy:o,targetUnit:null}),n;for(let l of i.units)if(!(l.hp<=0||Math.abs(a-l.x)+Math.abs(o-l.y)>s)){if(e.target==="enemy"){if(l.player===t.player)continue}else if(e.target==="ally"&&l.player!==t.player)continue;s>=2&&!Ke(r,a,o,l.x,l.y)||n.push({gx:l.x,gy:l.y,targetUnit:l})}return n}function Qh(i,t,e){let{world:n}=i,s=e.range||0,r=[];return e.target==="self"?(r.push({gx:t.x,gy:t.y}),r):(Wr(n,t.x,t.y,s).forEach((o,l)=>{let c=l%n.w,h=l/n.w|0;s>=2&&!Ke(n,t.x,t.y,c,h)||r.push({gx:c,gy:h})}),r)}function tu(i,t,e,n,s={}){let r=n.effectKey,a=jh(r),o=$r(r);i.emit("floatingText",{gx:t.x,gy:t.y,text:o,kind:"skill-name"});let l={u:t,t:e,state:i.state,rng:i.rng,getEff:Ht,damage:(c,h,u={})=>Bs(i,{attacker:t,victim:c,amount:h,isHeal:u.heal,isSpell:u.spell,preHit:u.preHit,selfCost:u.selfCost}),statText:(c,h,u,d)=>i.emit("floatingText",{gx:c,gy:h,text:u,kind:d?"buff":"debuff"}),knockback:(c,h,u)=>qh(i,c,h,u),reanimate:s.reanimate};a&&a(l),Xr(t.tempBuff,r),Xr(t.tempDebuff,r),e&&(Xr(e.tempBuff,r),Xr(e.tempDebuff,r)),i.emit("unitStatsChanged",{unit:t}),e&&i.emit("unitStatsChanged",{unit:e}),i.emit("skillResolved",{unit:t,target:e,skill:n})}function Xr(i,t){i&&typeof i=="object"&&i.duration!=null&&i.effectKey==null&&(i.effectKey=t)}function Ko({w:i,h:t,centerPlazaRadius:e,seed:n}){let s=Array.from({length:t},()=>Array(i).fill(!1)),r=Array.from({length:t},()=>Array(i).fill(0)),a=Array.from({length:t},()=>Array(i).fill(At.GRASS)),o=n!=null?Vo(n):()=>Math.random(),l=Math.floor(i/2),c=Math.floor(t/2),h=l,u=0,d=l,m=t-1,_=2,g=3;function p(P,L,Z,J){for(let j=L;j<=Z;j++)if(!(j<0||j>=t))for(let W=-_;W<=_;W++){let K=J+W;K<0||K>=i||(s[j][K]=!0,a[j][K]=P,r[j][K]=1)}}p(At.BASE_TOP,u,u+g-1,h),p(At.BASE_BOTTOM,m-g+1,m,d),p(At.CENTER,c-1,c+1,l);let f=new Set,y=(P,L)=>Math.abs(P-l)<=2&&Math.abs(L-c)<=1,x=(P,L)=>{P<0||P>=i||L<0||L>=t||y(P,L)||f.add(L*i+P)},M=Math.floor(i/2),R=Math.floor(t/2),v=Math.min(i,t)*e,E=Math.max(60,(t+i)*2);for(let P=0;P<2;P++){let L=P===0?M-v:M+v,Z=P===0?Math.PI/2:-Math.PI/2,J=P===0?Math.PI*3/2:Math.PI/2;for(let j=0;j<=E;j++){let W=j/E,K=Z+W*(J-Z),st=L+v*Math.cos(K),ht=R+v*Math.sin(K),lt=Math.round(st),gt=Math.round(ht);x(lt,gt),x(lt+1,gt),x(lt-1,gt),x(lt,gt+1),x(lt,gt-1)}}let U=[[0,1],[0,-1],[1,0],[-1,0]];for(let P=0;P<1;P++){let L=[];f.forEach(Z=>{let J=Z%i,j=Z/i|0;for(let[W,K]of U){let st=J+W,ht=j+K;if(st<0||st>=i||ht<0||ht>=t)continue;let lt=ht*i+st;f.has(lt)||L.push(lt)}}),L.forEach(Z=>f.add(Z))}f.forEach(P=>{let L=P%i,Z=P/i|0;a[Z][L]===At.BASE_TOP||a[Z][L]===At.BASE_BOTTOM||a[Z][L]===At.CENTER||(s[Z][L]=!0,a[Z][L]=At.PATH,r[Z][L]=1)});let S=Math.round(M-v*1.6),w=Math.round(M+v*1.6),F=Math.round(M-v),q=Math.round(M+v),H=1;for(let P=c-H;P<=c+H;P++)if(!(P<0||P>=t))for(let L=S;L<=w;L++)L<0||L>=i||(s[P][L]=!0,a[P][L]!==At.CENTER&&a[P][L]!==At.BASE_TOP&&a[P][L]!==At.BASE_BOTTOM&&(a[P][L]=At.PATH),r[P][L]=Math.max(r[P][L],1));function C(P,L,Z,J){let j=Math.max(1,Math.min(P,L)),W=Math.min(t-2,Math.max(P,L)),K=Math.max(1,Math.min(Z,J)),st=Math.min(i-2,Math.max(Z,J));for(let ht=j;ht<=W;ht++)for(let lt=K;lt<=st;lt++)a[ht][lt]===At.BASE_TOP||a[ht][lt]===At.BASE_BOTTOM||a[ht][lt]===At.CENTER||(s[ht][lt]=!0,a[ht][lt]=At.PATH,r[ht][lt]=1)}let N=3,G=3;C(u,u+N-1,F,h-1),C(u,u+N-1,h+1,q),C(m-G+1,m,F,d-1),C(m-G+1,m,d+1,q),p(At.BASE_TOP,u,u+g-1,h),p(At.BASE_BOTTOM,m-g+1,m,d),p(At.CENTER,c-1,c+1,l);for(let P=0;P<t;P++)for(let L=0;L<i;L++){if(s[P][L]||a[P][L]===At.BASE_TOP||a[P][L]===At.BASE_BOTTOM||a[P][L]===At.CENTER)continue;let Z=Math.abs(L-h)<=4&&Math.abs(P-u)<=3,J=Math.abs(L-d)<=4&&Math.abs(P-m)<=3,j=Z||J,W=o();W<.55&&!j?(a[P][L]=At.TREE,r[P][L]=1+Math.floor(o()*2)):W<.75||j&&W<.5?(a[P][L]=At.WATER,r[P][L]=0):(a[P][L]=At.ROCK,r[P][L]=1+Math.floor(o()*2))}let k=[];for(let P=0;P<t;P++)for(let L=0;L<i;L++)a[P][L]===At.CENTER&&k.push({gx:L,gy:P});return{w:i,h:t,path:s,height:r,type:a,topBaseX:h,topBaseY:u,botBaseX:d,botBaseY:m,centerTiles:k}}function eu(i,t,e){let n=t===1?At.BASE_BOTTOM:At.BASE_TOP,s=[];for(let r=0;r<i.h;r++)for(let a=0;a<i.w;a++)i.type[r][a]===n&&(e&&e.has(r*i.w+a)||s.push({gx:a,gy:r}));return s}function ks(i){if(i.centerTiles&&i.centerTiles.length>0)return i.centerTiles;let t=[];for(let e=0;e<i.h;e++)for(let n=0;n<i.w;n++)i.type[e][n]===At.CENTER&&t.push({gx:n,gy:e});return t}function nu(i,t){let e=t===1?At.BASE_TOP:At.BASE_BOTTOM,n=[];for(let s=0;s<i.h;s++)for(let r=0;r<i.w;r++)i.type[s][r]===e&&n.push({gx:r,gy:s});return n}function iu(i,t){let e=ks(i);if(e.length===0)return t;let n=s=>Math.min(...e.map(r=>Math.abs(s.gx-r.gx)+Math.abs(s.gy-r.gy)));return[...t].sort((s,r)=>n(s)-n(r))}var In=Ue.reduce((i,t)=>(i[t]={battles:0,kills:0,deaths:0,wins:0,losses:0},i),{});function su(){for(let i of Ue){let t=In[i];t&&(t.battles=0,t.kills=0,t.deaths=0,t.wins=0,t.losses=0)}}function Pm(i,t){if(!i||i.summonedBy==null||!Array.isArray(t))return i;let e=t.find(n=>n.id===i.summonedBy);return e??i}function ru(i,t,e){if(!Os)return;let s=Pm(i,e)?.class;if(Ue.includes(s)&&In[s]&&In[s].kills++,t?.summonedBy!=null)return;let r=t?.class;Ue.includes(r)&&In[r]&&In[r].deaths++}function au(i,t){if(!Os)return null;for(let n of i)!n||!In[n.class]||(In[n.class].battles++,t!=null&&(n.player===t?In[n.class].wins++:In[n.class].losses++));let e=Ue.map(n=>{let s=In[n],r=s.wins+s.losses||1;return{class:n,battles:s.battles,kills:s.kills,deaths:s.deaths,wins:s.wins,losses:s.losses,winRate:s.wins+s.losses>0?(s.wins/r*100).toFixed(1)+"%":"-",lossRate:s.wins+s.losses>0?(s.losses/r*100).toFixed(1)+"%":"-"}});return console.table(e),e}function Hs(i){return i.units.filter(t=>t.hp>0).sort((t,e)=>{let n=Ht(t,"agi"),s=Ht(e,"agi");return s!==n?s-n:Ht(e,"dex")-Ht(t,"dex")}).map(t=>t.id)}function Im(i,t,e){let{world:n}=i,s=new Set(i.units.filter(u=>u.hp>0).map(u=>u.y*n.w+u.x)),r=(u,d)=>u>=0&&u<n.w&&d>=0&&d<n.h,a=(u,d)=>r(u,d)&&xn(n,u,d)&&!s.has(d*n.w+u),o=e??(t.player===1?Math.PI:0),l=t.x-Math.round(Math.cos(o)),c=t.y+Math.round(Math.sin(o));if(a(l,c))return{gx:l,gy:c};let h=[[0,1],[0,-1],[1,0],[-1,0]];for(let[u,d]of h){let m=t.x+u,_=t.y+d;if(a(m,_))return{gx:m,gy:_}}return null}function Lm(i,t,e,n,s={}){let{state:r}=i,a=s.position&&s.position.gx!=null&&s.position.gy!=null?{gx:s.position.gx,gy:s.position.gy}:Im(r,t,s.facingAngle);if(!a)return null;let o=e.class&&Ue.includes(e.class)?e.class:"knight",l=e.hairColor!=null?e.hairColor:(yn[o]||yn.knight).hair,c=s.ownerPlayer!=null?s.ownerPlayer:t.player,h={id:r.ids.next(),player:c,x:a.gx,y:a.gy,level:e.level!=null?e.level:1,name:e.name!=null?e.name:"Summoned",class:o,hairColor:l,hp:e.hp!=null?e.hp:10,maxHp:e.maxHp!=null?e.maxHp:10,mp:e.mp!=null?e.mp:5,maxMp:e.maxMp!=null?e.maxMp:5,str:e.str!=null?e.str:5,agi:e.agi!=null?e.agi:5,vit:e.vit!=null?e.vit:5,dex:e.dex!=null?e.dex:5,luk:e.luk!=null?e.luk:5,int:e.int!=null?e.int:5,range:e.range!=null?e.range:1};s.omitSummonedBy||(h.summonedBy=t.id),Array.isArray(n)&&n.length>0&&(h.summonedSkills=n),r.addUnit(h);let u=r.phase==="playing"&&r.initiativeOrder.length>0&&r.currentTurnIndex>=0&&r.currentTurnIndex<r.initiativeOrder.length?r.initiativeOrder[r.currentTurnIndex]:null;if(r.initiativeOrder=Hs(r),u!=null){let d=r.initiativeOrder.indexOf(u);d>=0&&(r.currentTurnIndex=d)}return i.emit("unitSummoned",{unit:h,grayscale:!!s.useGrayscaleAppearance}),i.emit("initiativeChanged",{}),h}function ou(i,t,e){let{state:n}=i;if(n.units.indexOf(e)===-1)return null;n.removeUnit(e),n.deadCorpseCount=Math.max(0,n.deadCorpseCount-1),i.emit("unitRemoved",{unit:e});let r=e.class&&Ue.includes(e.class)?e.class:"knight",a=e.hairColor!=null?e.hairColor:(yn[r]||yn.knight).hair,o=p=>Math.max(1,Math.floor((p||0)*6/7)),l={name:"Reanimated "+e.name,class:r,hairColor:a,level:e.level,hp:o(e.maxHp),maxHp:o(e.maxHp),mp:o(e.maxMp),maxMp:o(e.maxMp),str:o(e.str),agi:o(e.agi),vit:o(e.vit),dex:o(e.dex),luk:o(e.luk),int:o(e.int),range:e.range},c=e.summonedSkills&&e.summonedSkills.length>0?e.summonedSkills.slice():(ei[r]||[]).slice(),h=new Set(n.units.filter(p=>p.hp>0).map(p=>p.y*n.world.w+p.x)),u=e.x,d=e.y,m=xn(n.world,u,d)&&!h.has(d*n.world.w+u),_={useGrayscaleAppearance:!0,ownerPlayer:t.player,omitSummonedBy:!0};m&&(_.position={gx:u,gy:d});let g=Lm(i,t,l,c,_);return g&&(g.isReanimated=!0),g}function zs(i,t,e,n={}){let{state:s}=i;return s.removeUnitFromTileIndex(t),t.isReanimated||s.deadCorpseCount++,t.deathOrder=++s.deathOrderSeq,ru(e,t,s.units),i.emit("floatingText",{gx:t.x,gy:t.y,text:"DEAD",kind:"damage"}),i.emit("unitDied",{unit:t,killer:e}),s.units.filter(o=>o.summonedBy===t.id&&o.hp>0).map(o=>o.id).forEach(o=>{let l=s.getUnitById(o);l&&(l.hp=0,zs(i,l,null,{skipSync:!0}))}),s.phase==="playing"&&s.initiativeOrder.length>0&&t.id===s.initiativeOrder[s.currentTurnIndex]}var Dm=["poison"];function lu(i,t){if(t.level>=3)return;let e=t.maxHp>0?t.hp/t.maxHp:1;t.level+=1;let n=s=>Math.max(1,Math.ceil(s*1.1));t.maxHp=n(t.maxHp),t.maxMp=n(t.maxMp),t.hp=Math.max(1,Math.min(t.maxHp,Math.ceil(e*t.maxHp))),t.mp=Math.max(1,Math.min(t.maxMp,Math.ceil(e*t.maxMp))),t.str=n(t.str),t.agi=n(t.agi),t.vit=n(t.vit),t.dex=n(t.dex),t.luk=n(t.luk),t.int=n(t.int),t.range>3&&(t.range=n(t.range)),i.emit("levelUp",{unit:t,level:t.level}),i.emit("unitStatsChanged",{unit:t})}function cu(i){let{state:t}=i,e=t.initiativeOrder.length;if(e===0)return;let n=t.getActiveUnit();if(n&&n.tempDebuff&&(n.tempDebuff.duration--,n.tempDebuff.duration<=0&&(n.tempDebuff=void 0)),n&&n.tempBuff&&(n.tempBuff.duration--,n.tempBuff.duration<=0&&(n.tempBuff=void 0)),n&&n.hp>0){let h=Math.ceil(Ht(n,"int")*.15);n.mp=Math.min(n.maxMp,n.mp+h),i.emit("unitStatsChanged",{unit:n})}if(n&&n.hp>0){let h=n.x,u=n.y;t.world.type[u][h]===At.CENTER&&n.level===1&&lu(i,n);let d=n.player===1?At.BASE_TOP:At.BASE_BOTTOM;t.world.type[u][h]===d&&n.level===2&&lu(i,n)}if(t.turnCount++,t.turnCount>=t.settings.maxTurns){Um(i);return}let s=t.currentTurnIndex,r=(s+1)%e,a=0;for(;a<e;){let h=t.getUnitById(t.initiativeOrder[r]);if(h&&h.hp>0)break;r=(r+1)%e,a++}let o=e>0&&r<=s;t.currentTurnIndex=r;let l=t.getActiveUnit();for(let h=0;h<e;h++){let u=t.getActiveUnit();if(!u||u.hp<=0)break;let d=u.tempDebuff||{},m=Dm.find(g=>!isNaN(d[g])),_=d[m]||0;if(_<=0)break;if(u.hp=Math.max(0,u.hp-_),i.emit("floatingText",{gx:u.x,gy:u.y,text:String(_),kind:m}),i.emit("unitStatsChanged",{unit:u}),u.hp<=0){zs(i,u,null);let g=(t.currentTurnIndex+1)%e,p=0;for(;p<e;){let f=t.getUnitById(t.initiativeOrder[g]);if(f&&f.hp>0)break;g=(g+1)%e,p++}t.currentTurnIndex=g;continue}break}let c=t.getActiveUnit();if(c&&c.hp>0){let h=c.tempBuff,u=h&&h.heal!=null&&!isNaN(h.heal)?Number(h.heal):0;if(u>0){let d=c.hp;c.hp=Math.min(c.maxHp,c.hp+u);let m=c.hp-d;m>0&&(i.emit("floatingText",{gx:c.x,gy:c.y,text:`+${m}`,kind:"heal"}),i.emit("unitStatsChanged",{unit:c}))}}return t.currentPlayer=c&&c.hp>0?c.player:1,t.hasMoved=!1,t.hasAttacked=!1,o&&(t.initiativeOrder=Hs(t),t.currentTurnIndex=0),{unit:t.getActiveUnit(),currentPlayer:t.currentPlayer,turnCount:t.turnCount}}function hu(i){let{state:t}=i;if(t.phase!=="playing")return;let e=t.units.some(s=>s.player===1&&s.hp>0&&!s.summonedBy),n=t.units.some(s=>s.player===2&&s.hp>0&&!s.summonedBy);e?n||Zo(i,1):Zo(i,2)}function Um(i){let{state:t}=i,e=t.world,n=ks(e),s=new Set(n.map(u=>u.gy*e.w+u.gx)),r=u=>t.units.filter(d=>d.hp>0&&d.player===u&&!d.summonedBy&&s.has(d.y*e.w+d.x)).length,a=u=>t.units.filter(d=>d.hp>0&&d.player===u&&!d.summonedBy).reduce((d,m)=>d+m.hp,0),o=r(1),l=r(2),c=null,h="";if(o>l)c=1,h=`Time's up! ${Gs(t,1)} wins! (${o} vs ${l} units on center base)`;else if(l>o)c=2,h=`Time's up! ${Gs(t,2)} wins! (${l} vs ${o} units on center base)`;else{let u=a(1),d=a(2);u>d?(c=1,h=`Time's up! Draw on center \u2014 ${Gs(t,1)} wins on total HP (${u} vs ${d})`):d>u?(c=2,h=`Time's up! Draw on center \u2014 ${Gs(t,2)} wins on total HP (${d} vs ${u})`):h=`Draw! (equal units on center: ${o}, equal HP)`}Zo(i,c,h)}function Gs(i,t){return i.playerNames[t]||`Player ${t}`}function Zo(i,t,e){let{state:n}=i;if(n.phase==="gameover")return;n.phase="gameover";let s=au(n.units,t);i.emit("gameOver",{winner:t,title:e??`${Gs(n,t)} wins!`,classRecord:s})}var uu=["red","yellow","purple","blue","green"],du={red:15022389,yellow:16635957,purple:9315498,blue:2001125,green:4431943};function Nm(i){let{world:t}=i,e=Math.floor(t.h/2),n=[];for(let s=0;s<t.w;s++){let r=e;if(t.type[r][s]!==At.PATH||i.getUnitAtTile(s,r)!=null)continue;let a=i.tileKey(s,r);i.powerups.has(a)||n.push({gx:s,gy:r})}return n}function fu(i,t){let{state:e,rng:n}=i,s=Nm(e);if(s.length===0)return;let r=s[Math.floor(n.next()*s.length)],a=uu[Math.floor(n.next()*uu.length)],o=e.tileKey(r.gx,r.gy);e.powerups.set(o,{type:a}),i.emit("powerupSpawned",{key:o,type:a,gx:r.gx,gy:r.gy,turnsLeft:t})}function Jo(i,t){let{state:e}=i,n=e.tileKey(t.x,t.y),s=e.powerups.get(n);if(s){if(e.powerups.delete(n),i.emit("powerupCollected",{key:n,type:s.type,unit:t,gx:t.x,gy:t.y}),s.type==="green")t.hp=Math.min(t.maxHp,t.hp+6),i.emit("floatingText",{gx:t.x,gy:t.y,text:"+6 HP",kind:"buff"});else{let a="";s.type==="red"?(t.tempBuff={str:4,duration:3},a="STR"):s.type==="yellow"?(t.tempBuff={agi:4,duration:3},a="AGI"):s.type==="purple"?(t.tempBuff={int:4,duration:3},a="INT"):s.type==="blue"&&(t.tempBuff={dex:4,duration:3},a="DEX"),i.emit("floatingText",{gx:t.x,gy:t.y,text:`+4 ${a}`,kind:"buff"})}i.emit("unitStatsChanged",{unit:t}),i.emit("buffAnimation",{unit:t})}}function Om(i){let t=i,e=[1];for(let n=0;n<Math.floor((t-1)/2);n++)e.push(2,2,1,1);return t%2===1?e.push(2):(e.push(2,2),e.push(1)),e}function hn(i){return i.draft.order[i.draft.pickIndex]}function qr(i){let t=hn(i);return i.draft.pickCountByPlayer[t]+1}function pu(i){let{state:t,rng:e}=i,n=t.settings.draftPicksPerPlayer;t.phase="draft",t.deathOrderSeq=0,t.deadCorpseCount=0,t.powerups.clear(),t.powerupSpawnedTurnsLeft={30:!1,20:!1,10:!1};let s=t.draft;s.order=Om(n),s.pickIndex=0,s.pickCountByPlayer={1:0,2:0},s.availableClasses=new Set(Ue),s.classOrder=e.shuffle([...Ue]),s.pendingClassKey=null,s.selectedClassKey=null,s.placementTiles=[],i.emit("draftStarted",{player:hn(t),pickCount:qr(t),picksPerPlayer:n})}function mu(i,t){let{state:e}=i,n=e.draft;if(!n.availableClasses.has(t)||n.pendingClassKey)return!1;n.pendingClassKey=t;let s=hn(e),r=new Set(e.units.map(o=>e.tileKey(o.x,o.y))),a=eu(e.world,s,r);return n.placementTiles=iu(e.world,a),i.emit("draftPickChosen",{player:s,classKey:t,placementTiles:n.placementTiles}),!0}function gu(i,t,e){let{state:n}=i,s=n.draft;if(!s.pendingClassKey)return!1;let r=hn(n),a=n.tileKey(t,e);if(!s.placementTiles.some(h=>n.tileKey(h.gx,h.gy)===a))return!1;let o=s.pendingClassKey,l=Wh({id:n.ids.next(),player:r,classKey:o,x:t,y:e});n.addUnit(l),i.emit("unitPlaced",{unit:l}),s.availableClasses.delete(o),s.pendingClassKey=null,s.placementTiles=[],s.pickCountByPlayer[r]++,s.pickIndex++;let c=n.settings.draftPicksPerPlayer;return s.pickIndex>=2*c?(i.emit("draftComplete",{}),!0):(i.emit("draftTurnChanged",{player:hn(n),pickCount:qr(n),picksPerPlayer:c}),!0)}var Yr=class{constructor(t,e){this.state=t,this.events=e,this.animator=null,this._chain=Promise.resolve(),this._deathAnims=[],this.ctx={state:t,rng:t.rng,emit:(n,s)=>e.emit(n,s),onDeath:(n,s)=>this._onDeath(n,s)},e.on("unitDied",({unit:n})=>{this._deathAnims.push(this._anim("animateDeath",n))}),e.on("powerupCheck",({unit:n})=>{n&&n.hp>0&&Jo(this.ctx,n)})}setAnimator(t){this.animator=t}_onDeath(t,e){zs(this.ctx,t,e)}async _anim(t,...e){if(this.animator&&typeof this.animator[t]=="function")try{await this.animator[t](...e)}catch(n){console.error(`[animator] ${t}`,n)}}async _awaitDeathAnims(){if(this._deathAnims.length===0)return;let t=this._deathAnims;this._deathAnims=[],await Promise.all(t)}async _resolveDeathsAndCheckGameOver(){await this._awaitDeathAnims(),hu(this.ctx)}dispatch(t){let e=()=>this._apply(t);return this._chain=this._chain.then(e,e),this._chain}async _apply(t){switch(t.type){case"move":return this._move(t);case"attack":return this._attack(t);case"skill":return this._skill(t);case"endTurn":return this._endTurn(t);case"draftPick":return this._draftPick(t);case"draftPlace":return this._draftPlace(t);default:console.warn("[dispatch] unknown intent",t)}}async _move(t){let{state:e}=this,n=e.getUnitById(t.unitId);if(!n||n.hp<=0||e.hasMoved||n.id!==e.initiativeOrder[e.currentTurnIndex])return;let s=Mi(e.world,n.x,n.y,t.toGx,t.toGy,e.units,n);if(!s||s.length<=1)return;let r=n.x,a=n.y;await this._anim("animateMove",n,s);let o=s[s.length-1],l=s[s.length-2];n.x=o.x,n.y=o.y,n.facing=vn(l.x,l.y,o.x,o.y)||n.facing,e.updateUnitTileIndex(n,r,a),e.hasMoved=!0,Jo(this.ctx,n),this.events.emit("unitMoved",{unit:n,from:{gx:r,gy:a},to:{gx:n.x,gy:n.y},path:s}),this._finishAction(n)}async _attack(t){let{state:e}=this,n=e.getUnitById(t.unitId),s=e.getUnitById(t.targetId);if(!n||n.hp<=0||!s||s.hp<=0||e.hasAttacked||n.id!==e.initiativeOrder[e.currentTurnIndex])return;n.facing=vn(n.x,n.y,s.x,s.y)||n.facing;let r=t.strikes||Xh(n,s,e.rng);e.hasAttacked=!0,this.events.emit("unitAttack",{attacker:n,target:s,strikes:r}),await this._anim("animateAttack",n,s,r,a=>{if(s.hp<=0)return;let o=r[a];o&&Bs(this.ctx,{attacker:n,victim:s,amount:o.damage,preHit:o.isHit})}),await this._resolveDeathsAndCheckGameOver(),await this._finishAction(n)}async _skill(t){let{state:e}=this,n=e.getUnitById(t.unitId);if(!n||n.hp<=0||e.hasAttacked||n.id!==e.initiativeOrder[e.currentTurnIndex])return;let r=Mn(e,n)[t.skillIndex];if(!r||r.disabled)return;let a=t.targetId!=null?e.getUnitById(t.targetId):null;if(r.target==="enemy"&&(!a||a.hp<=0))return;a&&(a.x!==n.x||a.y!==n.y)&&(n.facing=vn(n.x,n.y,a.x,a.y)||n.facing),n.mp=Math.max(0,n.mp-(r.cost||0)),e.hasAttacked=!0,this.events.emit("unitSkill",{unit:n,target:a,skill:r});let o=!1,l=()=>{o||(o=!0,tu(this.ctx,n,a,r,{reanimate:(c,h)=>ou(this.ctx,c,h)}))};await this._anim("animateSkill",n,a,r,l),l(),await this._resolveDeathsAndCheckGameOver(),await this._finishAction(n)}async _endTurn(t){let{state:e}=this;if(e.phase!=="playing"||t&&t.unitId!=null&&t.unitId!==e.initiativeOrder[e.currentTurnIndex])return;let n=e.getActiveUnit();n&&t?.facing&&(n.facing=t.facing,this.events.emit("unitFacingChanged",{unit:n})),await this._doEndTurn()}async _doEndTurn(){let{state:t}=this,e=cu(this.ctx);await this._resolveDeathsAndCheckGameOver(),t.phase==="playing"&&(this._maybeSpawnPowerups(),e&&this.events.emit("turnChanged",e),this.events.emit("afterEndTurn",{unit:t.getActiveUnit()}))}async _finishAction(t){let{state:e}=this;e.phase==="playing"&&(t.hp<=0?await this._doEndTurn():e.hasMoved&&e.hasAttacked?this.events.emit("turnEndRequested",{unit:t}):this.events.emit("actionResolved",{unit:t}))}_maybeSpawnPowerups(){let{state:t}=this,e=t.settings.maxTurns-t.turnCount;for(let n of[30,20,10])e<=n&&!t.powerupSpawnedTurnsLeft[n]&&(fu(this.ctx,e),t.powerupSpawnedTurnsLeft[n]=!0)}_draftPick(t){mu(this.ctx,t.classKey)}_draftPlace(t){gu(this.ctx,t.gx,t.gy)}startPlaying(){let{state:t}=this;t.phase="playing",t.turnCount=0,t.initiativeOrder=Hs(t),t.currentTurnIndex=0,t.hasMoved=!1,t.hasAttacked=!1;let e=t.getActiveUnit();t.currentPlayer=e?e.player:1,this.events.emit("playingStarted",{unit:e,currentPlayer:t.currentPlayer}),this.events.emit("turnChanged",{unit:e,currentPlayer:t.currentPlayer,turnCount:0})}get currentDraftPlayer(){return hn(this.state)}};var Zr=i=>i<.5?2*i*i:1-(-2*i+2)**2/2;var jo=i=>i,Kr=class{constructor(){this._tweens=new Set,this._running=!1,this._raf=null,this._lastTime=0,this.onFrame=null}get active(){return this._tweens.size>0}add({duration:t,onUpdate:e,onComplete:n,ease:s=Zr}){let r={elapsed:0,duration:Math.max(0,t),onUpdate:e,onComplete:n,ease:s,done:!1,cancel:()=>{this._tweens.delete(r)}};return this._tweens.add(r),this._ensureRunning(),r}during(t,e,n){return this.add({duration:t,onUpdate:e,onComplete:n,ease:jo})}_ensureRunning(){this._running||(this._running=!0,this._lastTime=performance.now(),this._raf=requestAnimationFrame(this._tick))}_tick=t=>{let e=t-this._lastTime;this._lastTime=t;for(let n of[...this._tweens]){n.elapsed+=e;let s=n.duration===0?1:Math.min(1,n.elapsed/n.duration),r=n.ease(s);try{n.onUpdate(r,s)}catch(a){console.error("[tween] onUpdate error",a)}if(s>=1&&(this._tweens.delete(n),n.onComplete))try{n.onComplete()}catch(a){console.error("[tween] onComplete error",a)}}this.onFrame&&this.onFrame(),this._tweens.size>0?this._raf=requestAnimationFrame(this._tick):(this._running=!1,this._raf=null)};clear(){this._tweens.clear(),this._raf&&cancelAnimationFrame(this._raf),this._running=!1,this._raf=null}};var Tc="160";var Fm=0,_u=1,Bm=2;var eo=1,km=2,zn=3,di=0,Je=1,_e=2;var ci=0,ps=1,xu=2,yu=3,vu=4,Hm=5,Ri=100,zm=101,Gm=102,Mu=103,Su=104,Vm=200,Wm=201,$m=202,Xm=203,Nl=204,Ol=205,qm=206,Ym=207,Km=208,Zm=209,Jm=210,jm=211,Qm=212,tg=213,eg=214,ng=0,ig=1,sg=2,wa=3,rg=4,ag=5,og=6,lg=7,tf=0,cg=1,hg=2,hi=0,ug=1,dg=2,fg=3,Ac=4,pg=5,mg=6;var ef=300,_s=301,xs=302,Fl=303,Bl=304,no=306,er=1e3,wn=1001,kl=1002,We=1003,bu=1004;var Qo=1005;var $e=1006,gg=1007;var nr=1008;var ui=1009,_g=1010,xg=1011,Rc=1012,nf=1013,oi=1014,li=1015,ir=1016,sf=1017,rf=1018,Pi=1020,yg=1021,Tn=1023,vg=1024,Mg=1025,Ii=1026,ys=1027,Sg=1028,af=1029,bg=1030,of=1031,lf=1033,tl=33776,el=33777,nl=33778,il=33779,Eu=35840,wu=35841,Tu=35842,Au=35843,cf=36196,Ru=37492,Cu=37496,Pu=37808,Iu=37809,Lu=37810,Du=37811,Uu=37812,Nu=37813,Ou=37814,Fu=37815,Bu=37816,ku=37817,Hu=37818,zu=37819,Gu=37820,Vu=37821,sl=36492,Wu=36494,$u=36495,Eg=36283,Xu=36284,qu=36285,Yu=36286;var Ta=2300,Aa=2301,rl=2302,Ku=2400,Zu=2401,Ju=2402;var hf=3e3,Li=3001,wg=3200,Tg=3201,uf=0,Ag=1,dn="",be="srgb",Vn="srgb-linear",Cc="display-p3",io="display-p3-linear",Ra="linear",le="srgb",Ca="rec709",Pa="p3";var qi=7680;var ju=519,Rg=512,Cg=513,Pg=514,df=515,Ig=516,Lg=517,Dg=518,Ug=519,Qu=35044;var td="300 es",Hl=1035,Gn=2e3,Ia=2001,fi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var al=Math.PI/180,zl=180/Math.PI;function As(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Be[i&255]+Be[i>>8&255]+Be[i>>16&255]+Be[i>>24&255]+"-"+Be[t&255]+Be[t>>8&255]+"-"+Be[t>>16&15|64]+Be[t>>24&255]+"-"+Be[e&63|128]+Be[e>>8&255]+"-"+Be[e>>16&255]+Be[e>>24&255]+Be[n&255]+Be[n>>8&255]+Be[n>>16&255]+Be[n>>24&255]).toLowerCase()}function Oe(i,t,e){return Math.max(t,Math.min(e,i))}function Ng(i,t){return(i%t+t)%t}function ol(i,t,e){return(1-e)*i+e*t}function ed(i){return(i&i-1)===0&&i!==0}function Gl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Vs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ze(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var pt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Yt=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],m=n[5],_=n[8],g=s[0],p=s[3],f=s[6],y=s[1],x=s[4],M=s[7],R=s[2],v=s[5],E=s[8];return r[0]=a*g+o*y+l*R,r[3]=a*p+o*x+l*v,r[6]=a*f+o*M+l*E,r[1]=c*g+h*y+u*R,r[4]=c*p+h*x+u*v,r[7]=c*f+h*M+u*E,r[2]=d*g+m*y+_*R,r[5]=d*p+m*x+_*v,r[8]=d*f+m*M+_*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,m=c*r-a*l,_=e*u+n*d+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return t[0]=u*g,t[1]=(s*c-h*n)*g,t[2]=(o*n-s*a)*g,t[3]=d*g,t[4]=(h*e-s*l)*g,t[5]=(s*r-o*e)*g,t[6]=m*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*r)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ll.makeScale(t,e)),this}rotate(t){return this.premultiply(ll.makeRotation(-t)),this}translate(t,e){return this.premultiply(ll.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ll=new Yt;function ff(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function La(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Og(){let i=La("canvas");return i.style.display="block",i}var nd={};function Zs(i){i in nd||(nd[i]=!0,console.warn(i))}var id=new Yt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),sd=new Yt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Jr={[Vn]:{transfer:Ra,primaries:Ca,toReference:i=>i,fromReference:i=>i},[be]:{transfer:le,primaries:Ca,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[io]:{transfer:Ra,primaries:Pa,toReference:i=>i.applyMatrix3(sd),fromReference:i=>i.applyMatrix3(id)},[Cc]:{transfer:le,primaries:Pa,toReference:i=>i.convertSRGBToLinear().applyMatrix3(sd),fromReference:i=>i.applyMatrix3(id).convertLinearToSRGB()}},Fg=new Set([Vn,io]),te={enabled:!0,_workingColorSpace:Vn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Fg.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=Jr[t].toReference,s=Jr[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Jr[i].primaries},getTransfer:function(i){return i===dn?Ra:Jr[i].transfer}};function ms(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function cl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Yi,Da=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Yi===void 0&&(Yi=La("canvas")),Yi.width=t.width,Yi.height=t.height;let n=Yi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Yi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=La("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ms(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ms(e[n]/255)*255):e[n]=ms(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Bg=0,Ua=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bg++}),this.uuid=As(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(hl(s[a].image)):r.push(hl(s[a]))}else r=hl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function hl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Da.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var kg=0,fn=class i extends fi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=wn,s=wn,r=$e,a=nr,o=Tn,l=ui,c=i.DEFAULT_ANISOTROPY,h=dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kg++}),this.uuid=As(),this.name="",this.source=new Ua(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Li?be:dn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ef)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case er:t.x=t.x-Math.floor(t.x);break;case wn:t.x=t.x<0?0:1;break;case kl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case er:t.y=t.y-Math.floor(t.y);break;case wn:t.y=t.y<0?0:1;break;case kl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===be?Li:hf}set encoding(t){Zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Li?be:dn}};fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=ef;fn.DEFAULT_ANISOTROPY=1;var Pe=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],m=l[5],_=l[9],g=l[2],p=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(c+1)/2,M=(m+1)/2,R=(f+1)/2,v=(h+d)/4,E=(u+g)/4,U=(_+p)/4;return x>M&&x>R?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=v/n,r=E/n):M>R?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=v/s,r=U/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=E/r,s=U/r),this.set(n,s,r,e),this}let y=Math.sqrt((p-_)*(p-_)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(p-_)/y,this.y=(u-g)/y,this.z=(d-h)/y,this.w=Math.acos((c+m+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Vl=class extends fi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Pe(0,0,t,e),this.scissorTest=!1,this.viewport=new Pe(0,0,t,e);let s={width:t,height:e,depth:1};n.encoding!==void 0&&(Zs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Li?be:dn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$e,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new fn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ua(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wn=class extends Vl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Na=class extends fn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Wl=class extends fn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Dn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],m=r[a+1],_=r[a+2],g=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=m,t[e+2]=_,t[e+3]=g;return}if(u!==g||l!==d||c!==m||h!==_){let p=1-o,f=l*d+c*m+h*_+u*g,y=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){let R=Math.sqrt(x),v=Math.atan2(R,f*y);p=Math.sin(p*v)/R,o=Math.sin(o*v)/R}let M=o*y;if(l=l*p+d*M,c=c*p+m*M,h=h*p+_*M,u=u*p+g*M,p===1-o){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],m=r[a+2],_=r[a+3];return t[e]=o*_+h*u+l*m-c*d,t[e+1]=l*_+h*d+c*u-o*m,t[e+2]=c*_+h*m+o*d-l*u,t[e+3]=h*_-o*u-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),m=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*m*_,this._y=c*m*u-d*h*_,this._z=c*h*_+d*m*u,this._w=c*h*u-d*m*_;break;case"YXZ":this._x=d*h*u+c*m*_,this._y=c*m*u-d*h*_,this._z=c*h*_-d*m*u,this._w=c*h*u+d*m*_;break;case"ZXY":this._x=d*h*u-c*m*_,this._y=c*m*u+d*h*_,this._z=c*h*_+d*m*u,this._w=c*h*u-d*m*_;break;case"ZYX":this._x=d*h*u-c*m*_,this._y=c*m*u+d*h*_,this._z=c*h*_-d*m*u,this._w=c*h*u+d*m*_;break;case"YZX":this._x=d*h*u+c*m*_,this._y=c*m*u+d*h*_,this._z=c*h*_-d*m*u,this._w=c*h*u-d*m*_;break;case"XZY":this._x=d*h*u-c*m*_,this._y=c*m*u-d*h*_,this._z=c*h*_+d*m*u,this._w=c*h*u+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>u){let m=2*Math.sqrt(1+n-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>u){let m=2*Math.sqrt(1+o-n-u);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+u-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Oe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(rd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(rd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ul.copy(this).projectOnVector(t),this.sub(ul)}reflect(t){return this.sub(ul.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ul=new I,rd=new Dn,$n=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Sn):Sn.fromBufferAttribute(r,a),Sn.applyMatrix4(t.matrixWorld),this.expandByPoint(Sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),jr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),jr.copy(n.boundingBox)),jr.applyMatrix4(t.matrixWorld),this.union(jr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Sn),Sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ws),Qr.subVectors(this.max,Ws),Ki.subVectors(t.a,Ws),Zi.subVectors(t.b,Ws),Ji.subVectors(t.c,Ws),ni.subVectors(Zi,Ki),ii.subVectors(Ji,Zi),bi.subVectors(Ki,Ji);let e=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-bi.z,bi.y,ni.z,0,-ni.x,ii.z,0,-ii.x,bi.z,0,-bi.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-bi.y,bi.x,0];return!dl(e,Ki,Zi,Ji,Qr)||(e=[1,0,0,0,1,0,0,0,1],!dl(e,Ki,Zi,Ji,Qr))?!1:(ta.crossVectors(ni,ii),e=[ta.x,ta.y,ta.z],dl(e,Ki,Zi,Ji,Qr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(On),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},On=[new I,new I,new I,new I,new I,new I,new I,new I],Sn=new I,jr=new $n,Ki=new I,Zi=new I,Ji=new I,ni=new I,ii=new I,bi=new I,Ws=new I,Qr=new I,ta=new I,Ei=new I;function dl(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ei.fromArray(i,r);let o=s.x*Math.abs(Ei.x)+s.y*Math.abs(Ei.y)+s.z*Math.abs(Ei.z),l=t.dot(Ei),c=e.dot(Ei),h=n.dot(Ei);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Hg=new $n,$s=new I,fl=new I,pi=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Hg.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$s.subVectors(t,this.center);let e=$s.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector($s,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($s.copy(t.center).add(fl)),this.expandByPoint($s.copy(t.center).sub(fl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Fn=new I,pl=new I,ea=new I,si=new I,ml=new I,na=new I,gl=new I,sr=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fn.copy(this.origin).addScaledVector(this.direction,e),Fn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){pl.copy(t).add(e).multiplyScalar(.5),ea.copy(e).sub(t).normalize(),si.copy(this.origin).sub(pl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ea),o=si.dot(this.direction),l=-si.dot(ea),c=si.lengthSq(),h=Math.abs(1-a*a),u,d,m,_;if(h>0)if(u=a*l-o,d=a*o-l,_=r*h,u>=0)if(d>=-_)if(d<=_){let g=1/h;u*=g,d*=g,m=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(pl).addScaledVector(ea,d),m}intersectSphere(t,e){Fn.subVectors(t.center,this.origin);let n=Fn.dot(this.direction),s=Fn.dot(Fn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Fn)!==null}intersectTriangle(t,e,n,s,r){ml.subVectors(e,t),na.subVectors(n,t),gl.crossVectors(ml,na);let a=this.direction.dot(gl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;si.subVectors(this.origin,t);let l=o*this.direction.dot(na.crossVectors(si,na));if(l<0)return null;let c=o*this.direction.dot(ml.cross(si));if(c<0||l+c>a)return null;let h=-o*si.dot(gl);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ce=class i{constructor(t,e,n,s,r,a,o,l,c,h,u,d,m,_,g,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,m,_,g,p)}set(t,e,n,s,r,a,o,l,c,h,u,d,m,_,g,p){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=m,f[7]=_,f[11]=g,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/ji.setFromMatrixColumn(t,0).length(),r=1/ji.setFromMatrixColumn(t,1).length(),a=1/ji.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,m=a*u,_=o*h,g=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+_*c,e[5]=d-g*c,e[9]=-o*l,e[2]=g-d*c,e[6]=_+m*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,m=l*u,_=c*h,g=c*u;e[0]=d+g*o,e[4]=_*o-m,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=m*o-_,e[6]=g+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,m=l*u,_=c*h,g=c*u;e[0]=d-g*o,e[4]=-a*u,e[8]=_+m*o,e[1]=m+_*o,e[5]=a*h,e[9]=g-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,m=a*u,_=o*h,g=o*u;e[0]=l*h,e[4]=_*c-m,e[8]=d*c+g,e[1]=l*u,e[5]=g*c+d,e[9]=m*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,m=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=g-d*u,e[8]=_*u+m,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*u+_,e[10]=d-g*u}else if(t.order==="XZY"){let d=a*l,m=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+g,e[5]=a*h,e[9]=m*u-_,e[2]=_*u-m,e[6]=o*h,e[10]=g*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zg,t,Gg)}lookAt(t,e,n){let s=this.elements;return nn.subVectors(t,e),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),ri.crossVectors(n,nn),ri.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),ri.crossVectors(n,nn)),ri.normalize(),ia.crossVectors(nn,ri),s[0]=ri.x,s[4]=ia.x,s[8]=nn.x,s[1]=ri.y,s[5]=ia.y,s[9]=nn.y,s[2]=ri.z,s[6]=ia.z,s[10]=nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],m=n[13],_=n[2],g=n[6],p=n[10],f=n[14],y=n[3],x=n[7],M=n[11],R=n[15],v=s[0],E=s[4],U=s[8],S=s[12],w=s[1],F=s[5],q=s[9],H=s[13],C=s[2],N=s[6],G=s[10],k=s[14],P=s[3],L=s[7],Z=s[11],J=s[15];return r[0]=a*v+o*w+l*C+c*P,r[4]=a*E+o*F+l*N+c*L,r[8]=a*U+o*q+l*G+c*Z,r[12]=a*S+o*H+l*k+c*J,r[1]=h*v+u*w+d*C+m*P,r[5]=h*E+u*F+d*N+m*L,r[9]=h*U+u*q+d*G+m*Z,r[13]=h*S+u*H+d*k+m*J,r[2]=_*v+g*w+p*C+f*P,r[6]=_*E+g*F+p*N+f*L,r[10]=_*U+g*q+p*G+f*Z,r[14]=_*S+g*H+p*k+f*J,r[3]=y*v+x*w+M*C+R*P,r[7]=y*E+x*F+M*N+R*L,r[11]=y*U+x*q+M*G+R*Z,r[15]=y*S+x*H+M*k+R*J,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],m=t[14],_=t[3],g=t[7],p=t[11],f=t[15];return _*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*m-n*l*m)+g*(+e*l*m-e*c*d+r*a*d-s*a*m+s*c*h-r*l*h)+p*(+e*c*u-e*o*m-r*a*u+n*a*m+r*o*h-n*c*h)+f*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],m=t[11],_=t[12],g=t[13],p=t[14],f=t[15],y=u*p*c-g*d*c+g*l*m-o*p*m-u*l*f+o*d*f,x=_*d*c-h*p*c-_*l*m+a*p*m+h*l*f-a*d*f,M=h*g*c-_*u*c+_*o*m-a*g*m-h*o*f+a*u*f,R=_*u*l-h*g*l-_*o*d+a*g*d+h*o*p-a*u*p,v=e*y+n*x+s*M+r*R;if(v===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/v;return t[0]=y*E,t[1]=(g*d*r-u*p*r-g*s*m+n*p*m+u*s*f-n*d*f)*E,t[2]=(o*p*r-g*l*r+g*s*c-n*p*c-o*s*f+n*l*f)*E,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*m-n*l*m)*E,t[4]=x*E,t[5]=(h*p*r-_*d*r+_*s*m-e*p*m-h*s*f+e*d*f)*E,t[6]=(_*l*r-a*p*r-_*s*c+e*p*c+a*s*f-e*l*f)*E,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*m+e*l*m)*E,t[8]=M*E,t[9]=(_*u*r-h*g*r-_*n*m+e*g*m+h*n*f-e*u*f)*E,t[10]=(a*g*r-_*o*r+_*n*c-e*g*c-a*n*f+e*o*f)*E,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*m-e*o*m)*E,t[12]=R*E,t[13]=(h*g*s-_*u*s+_*n*d-e*g*d-h*n*p+e*u*p)*E,t[14]=(_*o*s-a*g*s-_*n*l+e*g*l+a*n*p-e*o*p)*E,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*E,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,m=r*h,_=r*u,g=a*h,p=a*u,f=o*u,y=l*c,x=l*h,M=l*u,R=n.x,v=n.y,E=n.z;return s[0]=(1-(g+f))*R,s[1]=(m+M)*R,s[2]=(_-x)*R,s[3]=0,s[4]=(m-M)*v,s[5]=(1-(d+f))*v,s[6]=(p+y)*v,s[7]=0,s[8]=(_+x)*E,s[9]=(p-y)*E,s[10]=(1-(d+g))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=ji.set(s[0],s[1],s[2]).length(),a=ji.set(s[4],s[5],s[6]).length(),o=ji.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],bn.copy(this);let c=1/r,h=1/a,u=1/o;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=h,bn.elements[5]*=h,bn.elements[6]*=h,bn.elements[8]*=u,bn.elements[9]*=u,bn.elements[10]*=u,e.setFromRotationMatrix(bn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Gn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),m,_;if(o===Gn)m=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Ia)m=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Gn){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*c,m=(n+s)*h,_,g;if(o===Gn)_=(a+r)*u,g=-2*u;else if(o===Ia)_=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ji=new I,bn=new ce,zg=new I(0,0,0),Gg=new I(1,1,1),ri=new I,ia=new I,nn=new I,ad=new ce,od=new Dn,vs=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Oe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ad.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ad,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return od.setFromEuler(this),this.setFromQuaternion(od,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vs.DEFAULT_ORDER="XYZ";var rr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Vg=0,ld=new I,Qi=new Dn,Bn=new ce,sa=new I,Xs=new I,Wg=new I,$g=new Dn,cd=new I(1,0,0),hd=new I(0,1,0),ud=new I(0,0,1),Xg={type:"added"},qg={type:"removed"},Le=class i extends fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vg++}),this.uuid=As(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new I,e=new vs,n=new Dn,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ce},normalMatrix:{value:new Yt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.premultiply(Qi),this}rotateX(t){return this.rotateOnAxis(cd,t)}rotateY(t){return this.rotateOnAxis(hd,t)}rotateZ(t){return this.rotateOnAxis(ud,t)}translateOnAxis(t,e){return ld.copy(t).applyQuaternion(this.quaternion),this.position.add(ld.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(cd,t)}translateY(t){return this.translateOnAxis(hd,t)}translateZ(t){return this.translateOnAxis(ud,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?sa.copy(t):sa.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(Xs,sa,this.up):Bn.lookAt(sa,Xs,this.up),this.quaternion.setFromRotationMatrix(Bn),s&&(Bn.extractRotation(s.matrixWorld),Qi.setFromRotationMatrix(Bn),this.quaternion.premultiply(Qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Xg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qg)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,t,Wg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,$g,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),m=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Le.DEFAULT_UP=new I(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var En=new I,kn=new I,_l=new I,Hn=new I,ts=new I,es=new I,dd=new I,xl=new I,yl=new I,vl=new I,ra=!1,hs=class i{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),En.subVectors(t,e),s.cross(En);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){En.subVectors(s,e),kn.subVectors(n,e),_l.subVectors(t,e);let a=En.dot(En),o=En.dot(kn),l=En.dot(_l),c=kn.dot(kn),h=kn.dot(_l),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,m=(c*l-o*h)*d,_=(a*h-o*l)*d;return r.set(1-m-_,_,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getUV(t,e,n,s,r,a,o,l){return ra===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ra=!0),this.getInterpolation(t,e,n,s,r,a,o,l)}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Hn.x),l.addScaledVector(a,Hn.y),l.addScaledVector(o,Hn.z),l)}static isFrontFacing(t,e,n,s){return En.subVectors(n,e),kn.subVectors(t,e),En.cross(kn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return En.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),En.cross(kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return ra===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ra=!0),i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;ts.subVectors(s,n),es.subVectors(r,n),xl.subVectors(t,n);let l=ts.dot(xl),c=es.dot(xl);if(l<=0&&c<=0)return e.copy(n);yl.subVectors(t,s);let h=ts.dot(yl),u=es.dot(yl);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(ts,a);vl.subVectors(t,r);let m=ts.dot(vl),_=es.dot(vl);if(_>=0&&m<=_)return e.copy(r);let g=m*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(es,o);let p=h*_-m*u;if(p<=0&&u-h>=0&&m-_>=0)return dd.subVectors(r,s),o=(u-h)/(u-h+(m-_)),e.copy(s).addScaledVector(dd,o);let f=1/(p+g+d);return a=g*f,o=d*f,e.copy(n).addScaledVector(ts,a).addScaledVector(es,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},pf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},aa={h:0,s:0,l:0};function Ml(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var kt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=te.workingColorSpace){if(t=Ng(t,1),e=Oe(e,0,1),n=Oe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ml(a,r,t+1/3),this.g=Ml(a,r,t),this.b=Ml(a,r,t-1/3)}return te.toWorkingColorSpace(this,s),this}setStyle(t,e=be){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=be){let n=pf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ms(t.r),this.g=ms(t.g),this.b=ms(t.b),this}copyLinearToSRGB(t){return this.r=cl(t.r),this.g=cl(t.g),this.b=cl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=be){return te.fromWorkingColorSpace(ke.copy(this),t),Math.round(Oe(ke.r*255,0,255))*65536+Math.round(Oe(ke.g*255,0,255))*256+Math.round(Oe(ke.b*255,0,255))}getHexString(t=be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(ke.copy(this),e);let n=ke.r,s=ke.g,r=ke.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=be){te.fromWorkingColorSpace(ke.copy(this),t);let e=ke.r,n=ke.g,s=ke.b;return t!==be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ai),this.setHSL(ai.h+t,ai.s+e,ai.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ai),t.getHSL(aa);let n=ol(ai.h,aa.h,e),s=ol(ai.s,aa.s,e),r=ol(ai.l,aa.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ke=new kt;kt.NAMES=pf;var Yg=0,mi=class extends fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yg++}),this.uuid=As(),this.name="",this.type="Material",this.blending=ps,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nl,this.blendDst=Ol,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=wa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ju,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ps&&(n.blending=this.blending),this.side!==di&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Nl&&(n.blendSrc=this.blendSrc),this.blendDst!==Ol&&(n.blendDst=this.blendDst),this.blendEquation!==Ri&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==wa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ju&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ae=class extends mi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=tf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ye=new I,oa=new pt,Ie=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Qu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)oa.fromBufferAttribute(this,e),oa.applyMatrix3(t),this.setXY(e,oa.x,oa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Vs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ze(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Vs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Vs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Vs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Vs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array),s=Ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array),s=Ze(s,this.array),r=Ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Qu&&(t.usage=this.usage),t}};var Oa=class extends Ie{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Fa=class extends Ie{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Zt=class extends Ie{constructor(t,e,n){super(new Float32Array(t),e,n)}};var Kg=0,un=new ce,Sl=new Le,ns=new I,sn=new $n,qs=new $n,Ce=new I,Ee=class i extends fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kg++}),this.uuid=As(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ff(t)?Fa:Oa)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return un.makeRotationFromQuaternion(t),this.applyMatrix4(un),this}rotateX(t){return un.makeRotationX(t),this.applyMatrix4(un),this}rotateY(t){return un.makeRotationY(t),this.applyMatrix4(un),this}rotateZ(t){return un.makeRotationZ(t),this.applyMatrix4(un),this}translate(t,e,n){return un.makeTranslation(t,e,n),this.applyMatrix4(un),this}scale(t,e,n){return un.makeScale(t,e,n),this.applyMatrix4(un),this}lookAt(t){return Sl.lookAt(t),Sl.updateMatrix(),this.applyMatrix4(Sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Zt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $n);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(sn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];qs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ce.addVectors(sn.min,qs.min),sn.expandByPoint(Ce),Ce.addVectors(sn.max,qs.max),sn.expandByPoint(Ce)):(sn.expandByPoint(qs.min),sn.expandByPoint(qs.max))}sn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ce.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ce));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ce.fromBufferAttribute(o,c),l&&(ns.fromBufferAttribute(t,c),Ce.add(ns)),s=Math.max(s,n.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,s=e.position.array,r=e.normal.array,a=e.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ie(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<o;w++)c[w]=new I,h[w]=new I;let u=new I,d=new I,m=new I,_=new pt,g=new pt,p=new pt,f=new I,y=new I;function x(w,F,q){u.fromArray(s,w*3),d.fromArray(s,F*3),m.fromArray(s,q*3),_.fromArray(a,w*2),g.fromArray(a,F*2),p.fromArray(a,q*2),d.sub(u),m.sub(u),g.sub(_),p.sub(_);let H=1/(g.x*p.y-p.x*g.y);isFinite(H)&&(f.copy(d).multiplyScalar(p.y).addScaledVector(m,-g.y).multiplyScalar(H),y.copy(m).multiplyScalar(g.x).addScaledVector(d,-p.x).multiplyScalar(H),c[w].add(f),c[F].add(f),c[q].add(f),h[w].add(y),h[F].add(y),h[q].add(y))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let w=0,F=M.length;w<F;++w){let q=M[w],H=q.start,C=q.count;for(let N=H,G=H+C;N<G;N+=3)x(n[N+0],n[N+1],n[N+2])}let R=new I,v=new I,E=new I,U=new I;function S(w){E.fromArray(r,w*3),U.copy(E);let F=c[w];R.copy(F),R.sub(E.multiplyScalar(E.dot(F))).normalize(),v.crossVectors(U,F);let H=v.dot(h[w])<0?-1:1;l[w*4]=R.x,l[w*4+1]=R.y,l[w*4+2]=R.z,l[w*4+3]=H}for(let w=0,F=M.length;w<F;++w){let q=M[w],H=q.start,C=q.count;for(let N=H,G=H+C;N<G;N+=3)S(n[N+0]),S(n[N+1]),S(n[N+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ie(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);let s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let d=0,m=t.count;d<m;d+=3){let _=t.getX(d+0),g=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ce.fromBufferAttribute(t,e),Ce.normalize(),t.setXYZ(e,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),m=0,_=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?m=l[g]*o.data.stride+o.offset:m=l[g]*h;for(let f=0;f<h;f++)d[_++]=c[m++]}return new Ie(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],m=t(d,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},fd=new ce,wi=new sr,la=new pi,pd=new I,is=new I,ss=new I,rs=new I,bl=new I,ca=new I,ha=new pt,ua=new pt,da=new pt,md=new I,gd=new I,_d=new I,fa=new I,pa=new I,vt=class extends Le{constructor(t=new Ee,e=new ae){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){ca.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(bl.fromBufferAttribute(u,t),a?ca.addScaledVector(bl,h):ca.addScaledVector(bl.sub(e),h))}e.add(ca)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),la.copy(n.boundingSphere),la.applyMatrix4(r),wi.copy(t.ray).recast(t.near),!(la.containsPoint(wi.origin)===!1&&(wi.intersectSphere(la,pd)===null||wi.origin.distanceToSquared(pd)>(t.far-t.near)**2))&&(fd.copy(r).invert(),wi.copy(t.ray).applyMatrix4(fd),!(n.boundingBox!==null&&wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,wi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){let p=d[_],f=a[p.materialIndex],y=Math.max(p.start,m.start),x=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let M=y,R=x;M<R;M+=3){let v=o.getX(M),E=o.getX(M+1),U=o.getX(M+2);s=ma(this,f,t,n,c,h,u,v,E,U),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let _=Math.max(0,m.start),g=Math.min(o.count,m.start+m.count);for(let p=_,f=g;p<f;p+=3){let y=o.getX(p),x=o.getX(p+1),M=o.getX(p+2);s=ma(this,a,t,n,c,h,u,y,x,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){let p=d[_],f=a[p.materialIndex],y=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=y,R=x;M<R;M+=3){let v=M,E=M+1,U=M+2;s=ma(this,f,t,n,c,h,u,v,E,U),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let _=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let p=_,f=g;p<f;p+=3){let y=p,x=p+1,M=p+2;s=ma(this,a,t,n,c,h,u,y,x,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Zg(i,t,e,n,s,r,a,o){let l;if(t.side===Je?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===di,o),l===null)return null;pa.copy(o),pa.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(pa);return c<e.near||c>e.far?null:{distance:c,point:pa.clone(),object:i}}function ma(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,is),i.getVertexPosition(l,ss),i.getVertexPosition(c,rs);let h=Zg(i,t,e,n,is,ss,rs,fa);if(h){s&&(ha.fromBufferAttribute(s,o),ua.fromBufferAttribute(s,l),da.fromBufferAttribute(s,c),h.uv=hs.getInterpolation(fa,is,ss,rs,ha,ua,da,new pt)),r&&(ha.fromBufferAttribute(r,o),ua.fromBufferAttribute(r,l),da.fromBufferAttribute(r,c),h.uv1=hs.getInterpolation(fa,is,ss,rs,ha,ua,da,new pt),h.uv2=h.uv1),a&&(md.fromBufferAttribute(a,o),gd.fromBufferAttribute(a,l),_d.fromBufferAttribute(a,c),h.normal=hs.getInterpolation(fa,is,ss,rs,md,gd,_d,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new I,materialIndex:0};hs.getNormal(is,ss,rs,u.normal),h.face=u}return h}var je=class i extends Ee{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,m=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(u,2));function _(g,p,f,y,x,M,R,v,E,U,S){let w=M/E,F=R/U,q=M/2,H=R/2,C=v/2,N=E+1,G=U+1,k=0,P=0,L=new I;for(let Z=0;Z<G;Z++){let J=Z*F-H;for(let j=0;j<N;j++){let W=j*w-q;L[g]=W*y,L[p]=J*x,L[f]=C,c.push(L.x,L.y,L.z),L[g]=0,L[p]=0,L[f]=v>0?1:-1,h.push(L.x,L.y,L.z),u.push(j/E),u.push(1-Z/U),k+=1}}for(let Z=0;Z<U;Z++)for(let J=0;J<E;J++){let j=d+J+N*Z,W=d+J+N*(Z+1),K=d+(J+1)+N*(Z+1),st=d+(J+1)+N*Z;l.push(j,W,st),l.push(W,K,st),P+=6}o.addGroup(m,P,S),m+=P,d+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ms(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ve(i){let t={};for(let e=0;e<i.length;e++){let n=Ms(i[e]);for(let s in n)t[s]=n[s]}return t}function Jg(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function mf(i){return i.getRenderTarget()===null?i.outputColorSpace:te.workingColorSpace}var jg={clone:Ms,merge:Ve},Qg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,t0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xn=class extends mi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qg,this.fragmentShader=t0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ms(t.uniforms),this.uniformsGroups=Jg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Ba=class extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=Gn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Xe=class extends Ba{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=zl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(al*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return zl*2*Math.atan(Math.tan(al*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(al*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},as=-90,os=1,$l=class extends Le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Xe(as,os,t,e);s.layers=this.layers,this.add(s);let r=new Xe(as,os,t,e);r.layers=this.layers,this.add(r);let a=new Xe(as,os,t,e);a.layers=this.layers,this.add(a);let o=new Xe(as,os,t,e);o.layers=this.layers,this.add(o);let l=new Xe(as,os,t,e);l.layers=this.layers,this.add(l);let c=new Xe(as,os,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Gn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ia)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,m),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},ka=class extends fn{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:_s,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Xl=class extends Wn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(Zs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Li?be:dn),this.texture=new ka(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:$e}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new je(5,5,5),r=new Xn({name:"CubemapFromEquirect",uniforms:Ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Je,blending:ci});r.uniforms.tEquirect.value=e;let a=new vt(s,r),o=e.minFilter;return e.minFilter===nr&&(e.minFilter=$e),new $l(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},El=new I,e0=new I,n0=new Yt,rn=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=El.subVectors(n,e).cross(e0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(El),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||n0.getNormalMatrix(t),s=this.coplanarPoint(El).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ti=new pi,ga=new I,ar=class{constructor(t=new rn,e=new rn,n=new rn,s=new rn,r=new rn,a=new rn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Gn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],m=s[8],_=s[9],g=s[10],p=s[11],f=s[12],y=s[13],x=s[14],M=s[15];if(n[0].setComponents(l-r,d-c,p-m,M-f).normalize(),n[1].setComponents(l+r,d+c,p+m,M+f).normalize(),n[2].setComponents(l+a,d+h,p+_,M+y).normalize(),n[3].setComponents(l-a,d-h,p-_,M-y).normalize(),n[4].setComponents(l-o,d-u,p-g,M-x).normalize(),e===Gn)n[5].setComponents(l+o,d+u,p+g,M+x).normalize();else if(e===Ia)n[5].setComponents(o,u,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(t){return Ti.center.set(0,0,0),Ti.radius=.7071067811865476,Ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ga.x=s.normal.x>0?t.max.x:t.min.x,ga.y=s.normal.y>0?t.max.y:t.min.y,ga.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ga)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function gf(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function i0(i,t){let e=t.isWebGL2,n=new WeakMap;function s(c,h){let u=c.array,d=c.usage,m=u.byteLength,_=i.createBuffer();i.bindBuffer(h,_),i.bufferData(h,u,d),c.onUploadCallback();let g;if(u instanceof Float32Array)g=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=i.SHORT;else if(u instanceof Uint32Array)g=i.UNSIGNED_INT;else if(u instanceof Int32Array)g=i.INT;else if(u instanceof Int8Array)g=i.BYTE;else if(u instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:_,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,u){let d=h.array,m=h._updateRange,_=h.updateRanges;if(i.bindBuffer(u,c),m.count===-1&&_.length===0&&i.bufferSubData(u,0,d),_.length!==0){for(let g=0,p=_.length;g<p;g++){let f=_[g];e?i.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):i.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}m.count!==-1&&(e?i.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):i.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}var Qe=class i extends Ee{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,m=[],_=[],g=[],p=[];for(let f=0;f<h;f++){let y=f*d-a;for(let x=0;x<c;x++){let M=x*u-r;_.push(M,-y,0),g.push(0,0,1),p.push(x/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<o;y++){let x=y+c*f,M=y+c*(f+1),R=y+1+c*(f+1),v=y+1+c*f;m.push(x,M,v),m.push(M,R,v)}this.setIndex(m),this.setAttribute("position",new Zt(_,3)),this.setAttribute("normal",new Zt(g,3)),this.setAttribute("uv",new Zt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},s0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,r0=`#ifdef USE_ALPHAHASH
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
#endif`,a0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,o0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,l0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,c0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,h0=`#ifdef USE_AOMAP
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
#endif`,u0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,d0=`#ifdef USE_BATCHING
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
#endif`,f0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,p0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,m0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,g0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_0=`#ifdef USE_IRIDESCENCE
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
#endif`,x0=`#ifdef USE_BUMPMAP
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
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,M0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,S0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,b0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,E0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,w0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,T0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,A0=`#define PI 3.141592653589793
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
} // validated`,R0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,C0=`vec3 transformedNormal = objectNormal;
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
#endif`,P0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,I0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,L0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,D0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,U0="gl_FragColor = linearToOutputTexel( gl_FragColor );",N0=`
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
}`,O0=`#ifdef USE_ENVMAP
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
#endif`,F0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,B0=`#ifdef USE_ENVMAP
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
#endif`,k0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,H0=`#ifdef USE_ENVMAP
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
#endif`,z0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,G0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,V0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,W0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$0=`#ifdef USE_GRADIENTMAP
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
}`,X0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,q0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Y0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,K0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Z0=`uniform bool receiveShadow;
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
#endif`,J0=`#ifdef USE_ENVMAP
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
#endif`,j0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Q0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,t_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,e_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,n_=`PhysicalMaterial material;
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
#endif`,i_=`struct PhysicalMaterial {
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
}`,s_=`
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
#endif`,r_=`#if defined( RE_IndirectDiffuse )
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
#endif`,a_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,o_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,l_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,c_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,h_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,u_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,d_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,f_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,p_=`#if defined( USE_POINTS_UV )
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
#endif`,m_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,g_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,__=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,x_=`#ifdef USE_MORPHNORMALS
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
#endif`,y_=`#ifdef USE_MORPHTARGETS
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
#endif`,v_=`#ifdef USE_MORPHTARGETS
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
#endif`,M_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,S_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,b_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,T_=`#ifdef USE_NORMALMAP
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
#endif`,A_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,R_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,C_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,P_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,I_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,L_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,D_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,U_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,N_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,O_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,F_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,B_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,k_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,H_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,z_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,G_=`float getShadowMask() {
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
}`,V_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,W_=`#ifdef USE_SKINNING
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
#endif`,$_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,X_=`#ifdef USE_SKINNING
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
#endif`,q_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Y_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,K_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Z_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,J_=`#ifdef USE_TRANSMISSION
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
#endif`,j_=`#ifdef USE_TRANSMISSION
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
#endif`,Q_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ix=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sx=`uniform sampler2D t2D;
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
}`,rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ax=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cx=`#include <common>
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
}`,hx=`#if DEPTH_PACKING == 3200
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
}`,ux=`#define DISTANCE
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
}`,dx=`#define DISTANCE
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
}`,fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,px=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mx=`uniform float scale;
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
}`,gx=`uniform vec3 diffuse;
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
}`,_x=`#include <common>
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
}`,xx=`uniform vec3 diffuse;
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
}`,yx=`#define LAMBERT
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
}`,vx=`#define LAMBERT
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
}`,Mx=`#define MATCAP
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
}`,Sx=`#define MATCAP
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
}`,bx=`#define NORMAL
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
}`,Ex=`#define NORMAL
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
}`,wx=`#define PHONG
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
}`,Tx=`#define PHONG
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
}`,Ax=`#define STANDARD
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
}`,Rx=`#define STANDARD
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
}`,Cx=`#define TOON
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
}`,Px=`#define TOON
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
}`,Ix=`uniform float size;
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
}`,Lx=`uniform vec3 diffuse;
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
}`,Dx=`#include <common>
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
}`,Ux=`uniform vec3 color;
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
}`,Nx=`uniform float rotation;
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
}`,Ox=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:s0,alphahash_pars_fragment:r0,alphamap_fragment:a0,alphamap_pars_fragment:o0,alphatest_fragment:l0,alphatest_pars_fragment:c0,aomap_fragment:h0,aomap_pars_fragment:u0,batching_pars_vertex:d0,batching_vertex:f0,begin_vertex:p0,beginnormal_vertex:m0,bsdfs:g0,iridescence_fragment:_0,bumpmap_pars_fragment:x0,clipping_planes_fragment:y0,clipping_planes_pars_fragment:v0,clipping_planes_pars_vertex:M0,clipping_planes_vertex:S0,color_fragment:b0,color_pars_fragment:E0,color_pars_vertex:w0,color_vertex:T0,common:A0,cube_uv_reflection_fragment:R0,defaultnormal_vertex:C0,displacementmap_pars_vertex:P0,displacementmap_vertex:I0,emissivemap_fragment:L0,emissivemap_pars_fragment:D0,colorspace_fragment:U0,colorspace_pars_fragment:N0,envmap_fragment:O0,envmap_common_pars_fragment:F0,envmap_pars_fragment:B0,envmap_pars_vertex:k0,envmap_physical_pars_fragment:J0,envmap_vertex:H0,fog_vertex:z0,fog_pars_vertex:G0,fog_fragment:V0,fog_pars_fragment:W0,gradientmap_pars_fragment:$0,lightmap_fragment:X0,lightmap_pars_fragment:q0,lights_lambert_fragment:Y0,lights_lambert_pars_fragment:K0,lights_pars_begin:Z0,lights_toon_fragment:j0,lights_toon_pars_fragment:Q0,lights_phong_fragment:t_,lights_phong_pars_fragment:e_,lights_physical_fragment:n_,lights_physical_pars_fragment:i_,lights_fragment_begin:s_,lights_fragment_maps:r_,lights_fragment_end:a_,logdepthbuf_fragment:o_,logdepthbuf_pars_fragment:l_,logdepthbuf_pars_vertex:c_,logdepthbuf_vertex:h_,map_fragment:u_,map_pars_fragment:d_,map_particle_fragment:f_,map_particle_pars_fragment:p_,metalnessmap_fragment:m_,metalnessmap_pars_fragment:g_,morphcolor_vertex:__,morphnormal_vertex:x_,morphtarget_pars_vertex:y_,morphtarget_vertex:v_,normal_fragment_begin:M_,normal_fragment_maps:S_,normal_pars_fragment:b_,normal_pars_vertex:E_,normal_vertex:w_,normalmap_pars_fragment:T_,clearcoat_normal_fragment_begin:A_,clearcoat_normal_fragment_maps:R_,clearcoat_pars_fragment:C_,iridescence_pars_fragment:P_,opaque_fragment:I_,packing:L_,premultiplied_alpha_fragment:D_,project_vertex:U_,dithering_fragment:N_,dithering_pars_fragment:O_,roughnessmap_fragment:F_,roughnessmap_pars_fragment:B_,shadowmap_pars_fragment:k_,shadowmap_pars_vertex:H_,shadowmap_vertex:z_,shadowmask_pars_fragment:G_,skinbase_vertex:V_,skinning_pars_vertex:W_,skinning_vertex:$_,skinnormal_vertex:X_,specularmap_fragment:q_,specularmap_pars_fragment:Y_,tonemapping_fragment:K_,tonemapping_pars_fragment:Z_,transmission_fragment:J_,transmission_pars_fragment:j_,uv_pars_fragment:Q_,uv_pars_vertex:tx,uv_vertex:ex,worldpos_vertex:nx,background_vert:ix,background_frag:sx,backgroundCube_vert:rx,backgroundCube_frag:ax,cube_vert:ox,cube_frag:lx,depth_vert:cx,depth_frag:hx,distanceRGBA_vert:ux,distanceRGBA_frag:dx,equirect_vert:fx,equirect_frag:px,linedashed_vert:mx,linedashed_frag:gx,meshbasic_vert:_x,meshbasic_frag:xx,meshlambert_vert:yx,meshlambert_frag:vx,meshmatcap_vert:Mx,meshmatcap_frag:Sx,meshnormal_vert:bx,meshnormal_frag:Ex,meshphong_vert:wx,meshphong_frag:Tx,meshphysical_vert:Ax,meshphysical_frag:Rx,meshtoon_vert:Cx,meshtoon_frag:Px,points_vert:Ix,points_frag:Lx,shadow_vert:Dx,shadow_frag:Ux,sprite_vert:Nx,sprite_frag:Ox},ft={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},Ln={basic:{uniforms:Ve([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Ve([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new kt(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Ve([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Ve([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Ve([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new kt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Ve([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Ve([ft.points,ft.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Ve([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Ve([ft.common,ft.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Ve([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Ve([ft.sprite,ft.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:Ve([ft.common,ft.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:Ve([ft.lights,ft.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};Ln.physical={uniforms:Ve([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};var _a={r:0,b:0,g:0};function Fx(i,t,e,n,s,r,a){let o=new kt(0),l=r===!0?0:1,c,h,u=null,d=0,m=null;function _(p,f){let y=!1,x=f.isScene===!0?f.background:null;x&&x.isTexture&&(x=(f.backgroundBlurriness>0?e:t).get(x)),x===null?g(o,l):x&&x.isColor&&(g(x,1),y=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===no)?(h===void 0&&(h=new vt(new je(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:Ms(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,v,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=te.getTransfer(x.colorSpace)!==le,(u!==x||d!==x.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,m=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new vt(new Qe(2,2),new Xn({name:"BackgroundMaterial",uniforms:Ms(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=te.getTransfer(x.colorSpace)!==le,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function g(p,f){p.getRGB(_a,mf(i)),n.buffers.color.setClear(_a.r,_a.g,_a.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(p,f=1){o.set(p),l=f,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,g(o,l)},render:_}}function Bx(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=p(null),c=l,h=!1;function u(C,N,G,k,P){let L=!1;if(a){let Z=g(k,G,N);c!==Z&&(c=Z,m(c.object)),L=f(C,k,G,P),L&&y(C,k,G,P)}else{let Z=N.wireframe===!0;(c.geometry!==k.id||c.program!==G.id||c.wireframe!==Z)&&(c.geometry=k.id,c.program=G.id,c.wireframe=Z,L=!0)}P!==null&&e.update(P,i.ELEMENT_ARRAY_BUFFER),(L||h)&&(h=!1,U(C,N,G,k),P!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(P).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(C){return n.isWebGL2?i.bindVertexArray(C):r.bindVertexArrayOES(C)}function _(C){return n.isWebGL2?i.deleteVertexArray(C):r.deleteVertexArrayOES(C)}function g(C,N,G){let k=G.wireframe===!0,P=o[C.id];P===void 0&&(P={},o[C.id]=P);let L=P[N.id];L===void 0&&(L={},P[N.id]=L);let Z=L[k];return Z===void 0&&(Z=p(d()),L[k]=Z),Z}function p(C){let N=[],G=[],k=[];for(let P=0;P<s;P++)N[P]=0,G[P]=0,k[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:G,attributeDivisors:k,object:C,attributes:{},index:null}}function f(C,N,G,k){let P=c.attributes,L=N.attributes,Z=0,J=G.getAttributes();for(let j in J)if(J[j].location>=0){let K=P[j],st=L[j];if(st===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(st=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(st=C.instanceColor)),K===void 0||K.attribute!==st||st&&K.data!==st.data)return!0;Z++}return c.attributesNum!==Z||c.index!==k}function y(C,N,G,k){let P={},L=N.attributes,Z=0,J=G.getAttributes();for(let j in J)if(J[j].location>=0){let K=L[j];K===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(K=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(K=C.instanceColor));let st={};st.attribute=K,K&&K.data&&(st.data=K.data),P[j]=st,Z++}c.attributes=P,c.attributesNum=Z,c.index=k}function x(){let C=c.newAttributes;for(let N=0,G=C.length;N<G;N++)C[N]=0}function M(C){R(C,0)}function R(C,N){let G=c.newAttributes,k=c.enabledAttributes,P=c.attributeDivisors;G[C]=1,k[C]===0&&(i.enableVertexAttribArray(C),k[C]=1),P[C]!==N&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,N),P[C]=N)}function v(){let C=c.newAttributes,N=c.enabledAttributes;for(let G=0,k=N.length;G<k;G++)N[G]!==C[G]&&(i.disableVertexAttribArray(G),N[G]=0)}function E(C,N,G,k,P,L,Z){Z===!0?i.vertexAttribIPointer(C,N,G,P,L):i.vertexAttribPointer(C,N,G,k,P,L)}function U(C,N,G,k){if(n.isWebGL2===!1&&(C.isInstancedMesh||k.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();let P=k.attributes,L=G.getAttributes(),Z=N.defaultAttributeValues;for(let J in L){let j=L[J];if(j.location>=0){let W=P[J];if(W===void 0&&(J==="instanceMatrix"&&C.instanceMatrix&&(W=C.instanceMatrix),J==="instanceColor"&&C.instanceColor&&(W=C.instanceColor)),W!==void 0){let K=W.normalized,st=W.itemSize,ht=e.get(W);if(ht===void 0)continue;let lt=ht.buffer,gt=ht.type,_t=ht.bytesPerElement,wt=n.isWebGL2===!0&&(gt===i.INT||gt===i.UNSIGNED_INT||W.gpuType===nf);if(W.isInterleavedBufferAttribute){let Lt=W.data,z=Lt.stride,he=W.offset;if(Lt.isInstancedInterleavedBuffer){for(let Tt=0;Tt<j.locationSize;Tt++)R(j.location+Tt,Lt.meshPerAttribute);C.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Lt.meshPerAttribute*Lt.count)}else for(let Tt=0;Tt<j.locationSize;Tt++)M(j.location+Tt);i.bindBuffer(i.ARRAY_BUFFER,lt);for(let Tt=0;Tt<j.locationSize;Tt++)E(j.location+Tt,st/j.locationSize,gt,K,z*_t,(he+st/j.locationSize*Tt)*_t,wt)}else{if(W.isInstancedBufferAttribute){for(let Lt=0;Lt<j.locationSize;Lt++)R(j.location+Lt,W.meshPerAttribute);C.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Lt=0;Lt<j.locationSize;Lt++)M(j.location+Lt);i.bindBuffer(i.ARRAY_BUFFER,lt);for(let Lt=0;Lt<j.locationSize;Lt++)E(j.location+Lt,st/j.locationSize,gt,K,st*_t,st/j.locationSize*Lt*_t,wt)}}else if(Z!==void 0){let K=Z[J];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(j.location,K);break;case 3:i.vertexAttrib3fv(j.location,K);break;case 4:i.vertexAttrib4fv(j.location,K);break;default:i.vertexAttrib1fv(j.location,K)}}}}v()}function S(){q();for(let C in o){let N=o[C];for(let G in N){let k=N[G];for(let P in k)_(k[P].object),delete k[P];delete N[G]}delete o[C]}}function w(C){if(o[C.id]===void 0)return;let N=o[C.id];for(let G in N){let k=N[G];for(let P in k)_(k[P].object),delete k[P];delete N[G]}delete o[C.id]}function F(C){for(let N in o){let G=o[N];if(G[C.id]===void 0)continue;let k=G[C.id];for(let P in k)_(k[P].object),delete k[P];delete G[C.id]}}function q(){H(),h=!0,c!==l&&(c=l,m(c.object))}function H(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:q,resetDefaultState:H,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfProgram:F,initAttributes:x,enableAttribute:M,disableUnusedAttributes:v}}function kx(i,t,e,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,u){i.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,d){if(d===0)return;let m,_;if(s)m=i,_="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](r,h,u,d),e.update(u,r,d)}function c(h,u,d){if(d===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<d;_++)this.render(h[_],u[_]);else{m.multiDrawArraysWEBGL(r,h,0,u,0,d);let _=0;for(let g=0;g<d;g++)_+=u[g];e.update(_,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Hx(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,M=a||t.has("OES_texture_float"),R=x&&M,v=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:R,maxSamples:v}}function zx(i){let t=this,e=null,n=0,s=!1,r=!1,a=new rn,o=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let m=u.length!==0||d||n!==0||s;return s=d,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,m){let _=u.clippingPlanes,g=u.clipIntersection,p=u.clipShadows,f=i.get(u);if(!s||_===null||_.length===0||r&&!p)r?h(null):c();else{let y=r?0:n,x=y*4,M=f.clippingState||null;l.value=M,M=h(_,d,x,m);for(let R=0;R!==x;++R)M[R]=e[R];f.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,m,_){let g=u!==null?u.length:0,p=null;if(g!==0){if(p=l.value,_!==!0||p===null){let f=m+g*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<f)&&(p=new Float32Array(f));for(let x=0,M=m;x!==g;++x,M+=4)a.copy(u[x]).applyMatrix4(y,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function Gx(i){let t=new WeakMap;function e(a,o){return o===Fl?a.mapping=_s:o===Bl&&(a.mapping=xs),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Fl||o===Bl)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Xl(l.height/2);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ha=class extends Ba{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},us=4,xd=[.125,.215,.35,.446,.526,.582],Ci=20,wl=new Ha,yd=new kt,Tl=null,Al=0,Rl=0,Ai=(1+Math.sqrt(5))/2,ls=1/Ai,vd=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Ai,ls),new I(0,Ai,-ls),new I(ls,0,Ai),new I(-ls,0,Ai),new I(Ai,ls,0),new I(-Ai,ls,0)],Ss=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Tl=this._renderer.getRenderTarget(),Al=this._renderer.getActiveCubeFace(),Rl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Tl,Al,Rl),t.scissorTest=!1,xa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_s||t.mapping===xs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Tl=this._renderer.getRenderTarget(),Al=this._renderer.getActiveCubeFace(),Rl=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:$e,minFilter:$e,generateMipmaps:!1,type:ir,format:Tn,colorSpace:Vn,depthBuffer:!1},s=Md(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Md(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vx(r)),this._blurMaterial=Wx(r,t,e)}return s}_compileMaterial(t){let e=new vt(this._lodPlanes[0],t);this._renderer.compile(e,wl)}_sceneToCubeUV(t,e,n,s){let o=new Xe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(yd),h.toneMapping=hi,h.autoClear=!1;let m=new ae({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1}),_=new vt(new je,m),g=!1,p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,g=!0):(m.color.copy(yd),g=!0);for(let f=0;f<6;f++){let y=f%3;y===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):y===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));let x=this._cubeSize;xa(s,y*x,f>2?x:0,x,x),h.setRenderTarget(s),g&&h.render(_,o),h.render(t,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===_s||t.mapping===xs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=bd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new vt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;xa(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,wl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=vd[(s-1)%vd.length];this._blur(t,s-1,s,r,a)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new vt(this._lodPlanes[s],c),d=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Ci-1),g=r/_,p=isFinite(r)?1+Math.floor(h*g):Ci;p>Ci&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ci}`);let f=[],y=0;for(let E=0;E<Ci;++E){let U=E/g,S=Math.exp(-U*U/2);f.push(S),E===0?y+=S:E<p&&(y+=2*S)}for(let E=0;E<f.length;E++)f[E]=f[E]/y;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:x}=this;d.dTheta.value=_,d.mipInt.value=x-n;let M=this._sizeLods[s],R=3*M*(s>x-us?s-x+us:0),v=4*(this._cubeSize-M);xa(e,R,v,3*M,2*M),l.setRenderTarget(e),l.render(u,wl)}};function Vx(i){let t=[],e=[],n=[],s=i,r=i-us+1+xd.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-us?l=xd[a-i+us-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,_=6,g=3,p=2,f=1,y=new Float32Array(g*_*m),x=new Float32Array(p*_*m),M=new Float32Array(f*_*m);for(let v=0;v<m;v++){let E=v%3*2/3-1,U=v>2?0:-1,S=[E,U,0,E+2/3,U,0,E+2/3,U+1,0,E,U,0,E+2/3,U+1,0,E,U+1,0];y.set(S,g*_*v),x.set(d,p*_*v);let w=[v,v,v,v,v,v];M.set(w,f*_*v)}let R=new Ee;R.setAttribute("position",new Ie(y,g)),R.setAttribute("uv",new Ie(x,p)),R.setAttribute("faceIndex",new Ie(M,f)),t.push(R),s>us&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Md(i,t,e){let n=new Wn(i,t,e);return n.texture.mapping=no,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xa(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Wx(i,t,e){let n=new Float32Array(Ci),s=new I(0,1,0);return new Xn({name:"SphericalGaussianBlur",defines:{n:Ci,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Sd(){return new Xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function bd(){return new Xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Pc(){return`

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
	`}function $x(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Fl||l===Bl,h=l===_s||l===xs;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new Ss(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{let u=o.image;if(c&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new Ss(i));let d=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Xx(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function qx(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let _ in d.attributes)t.remove(d.attributes[_]);for(let _ in d.morphAttributes){let g=d.morphAttributes[_];for(let p=0,f=g.length;p<f;p++)t.remove(g[p])}d.removeEventListener("dispose",a),delete s[d.id];let m=r.get(d);m&&(t.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let _ in d)t.update(d[_],i.ARRAY_BUFFER);let m=u.morphAttributes;for(let _ in m){let g=m[_];for(let p=0,f=g.length;p<f;p++)t.update(g[p],i.ARRAY_BUFFER)}}function c(u){let d=[],m=u.index,_=u.attributes.position,g=0;if(m!==null){let y=m.array;g=m.version;for(let x=0,M=y.length;x<M;x+=3){let R=y[x+0],v=y[x+1],E=y[x+2];d.push(R,v,v,E,E,R)}}else if(_!==void 0){let y=_.array;g=_.version;for(let x=0,M=y.length/3-1;x<M;x+=3){let R=x+0,v=x+1,E=x+2;d.push(R,v,v,E,E,R)}}else return;let p=new(ff(d)?Fa:Oa)(d,1);p.version=g;let f=r.get(u);f&&t.remove(f),r.set(u,p)}function h(u){let d=r.get(u);if(d){let m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Yx(i,t,e,n){let s=n.isWebGL2,r;function a(m){r=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function h(m,_){i.drawElements(r,_,o,m*l),e.update(_,r,1)}function u(m,_,g){if(g===0)return;let p,f;if(s)p=i,f="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](r,_,o,m*l,g),e.update(_,r,g)}function d(m,_,g){if(g===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<g;f++)this.render(m[f]/l,_[f]);else{p.multiDrawElementsWEBGL(r,_,0,o,m,0,g);let f=0;for(let y=0;y<g;y++)f+=_[y];e.update(f,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Kx(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Zx(i,t){return i[0]-t[0]}function Jx(i,t){return Math.abs(t[1])-Math.abs(i[1])}function jx(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,a=new Pe,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){let d=c.morphTargetInfluences;if(t.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=m!==void 0?m.length:0,g=r.get(h);if(g===void 0||g.count!==_){let C=function(){q.dispose(),r.delete(h),h.removeEventListener("dispose",C)};g!==void 0&&g.texture.dispose();let y=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],v=h.morphAttributes.normal||[],E=h.morphAttributes.color||[],U=0;y===!0&&(U=1),x===!0&&(U=2),M===!0&&(U=3);let S=h.attributes.position.count*U,w=1;S>t.maxTextureSize&&(w=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let F=new Float32Array(S*w*4*_),q=new Na(F,S,w,_);q.type=li,q.needsUpdate=!0;let H=U*4;for(let N=0;N<_;N++){let G=R[N],k=v[N],P=E[N],L=S*w*4*N;for(let Z=0;Z<G.count;Z++){let J=Z*H;y===!0&&(a.fromBufferAttribute(G,Z),F[L+J+0]=a.x,F[L+J+1]=a.y,F[L+J+2]=a.z,F[L+J+3]=0),x===!0&&(a.fromBufferAttribute(k,Z),F[L+J+4]=a.x,F[L+J+5]=a.y,F[L+J+6]=a.z,F[L+J+7]=0),M===!0&&(a.fromBufferAttribute(P,Z),F[L+J+8]=a.x,F[L+J+9]=a.y,F[L+J+10]=a.z,F[L+J+11]=P.itemSize===4?a.w:1)}}g={count:_,texture:q,size:new pt(S,w)},r.set(h,g),h.addEventListener("dispose",C)}let p=0;for(let y=0;y<d.length;y++)p+=d[y];let f=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",f),u.getUniforms().setValue(i,"morphTargetInfluences",d),u.getUniforms().setValue(i,"morphTargetsTexture",g.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}else{let m=d===void 0?0:d.length,_=n[h.id];if(_===void 0||_.length!==m){_=[];for(let x=0;x<m;x++)_[x]=[x,0];n[h.id]=_}for(let x=0;x<m;x++){let M=_[x];M[0]=x,M[1]=d[x]}_.sort(Jx);for(let x=0;x<8;x++)x<m&&_[x][1]?(o[x][0]=_[x][0],o[x][1]=_[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(Zx);let g=h.morphAttributes.position,p=h.morphAttributes.normal,f=0;for(let x=0;x<8;x++){let M=o[x],R=M[0],v=M[1];R!==Number.MAX_SAFE_INTEGER&&v?(g&&h.getAttribute("morphTarget"+x)!==g[R]&&h.setAttribute("morphTarget"+x,g[R]),p&&h.getAttribute("morphNormal"+x)!==p[R]&&h.setAttribute("morphNormal"+x,p[R]),s[x]=v,f+=v):(g&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),p&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),s[x]=0)}let y=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(i,"morphTargetBaseInfluence",y),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Qx(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var za=class extends fn{constructor(t,e,n,s,r,a,o,l,c,h){if(h=h!==void 0?h:Ii,h!==Ii&&h!==ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ii&&(n=oi),n===void 0&&h===ys&&(n=Pi),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:We,this.minFilter=l!==void 0?l:We,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},_f=new fn,xf=new za(1,1);xf.compareFunction=df;var yf=new Na,vf=new Wl,Mf=new ka,Ed=[],wd=[],Td=new Float32Array(16),Ad=new Float32Array(9),Rd=new Float32Array(4);function Rs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Ed[s];if(r===void 0&&(r=new Float32Array(s),Ed[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function we(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Te(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function so(i,t){let e=wd[t];e===void 0&&(e=new Int32Array(t),wd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ty(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function ey(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2fv(this.addr,t),Te(e,t)}}function ny(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(we(e,t))return;i.uniform3fv(this.addr,t),Te(e,t)}}function iy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4fv(this.addr,t),Te(e,t)}}function sy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(we(e,n))return;Rd.set(n),i.uniformMatrix2fv(this.addr,!1,Rd),Te(e,n)}}function ry(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(we(e,n))return;Ad.set(n),i.uniformMatrix3fv(this.addr,!1,Ad),Te(e,n)}}function ay(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(we(e,n))return;Td.set(n),i.uniformMatrix4fv(this.addr,!1,Td),Te(e,n)}}function oy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ly(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2iv(this.addr,t),Te(e,t)}}function cy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;i.uniform3iv(this.addr,t),Te(e,t)}}function hy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4iv(this.addr,t),Te(e,t)}}function uy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function dy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2uiv(this.addr,t),Te(e,t)}}function fy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;i.uniform3uiv(this.addr,t),Te(e,t)}}function py(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4uiv(this.addr,t),Te(e,t)}}function my(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?xf:_f;e.setTexture2D(t||r,s)}function gy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||vf,s)}function _y(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Mf,s)}function xy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||yf,s)}function yy(i){switch(i){case 5126:return ty;case 35664:return ey;case 35665:return ny;case 35666:return iy;case 35674:return sy;case 35675:return ry;case 35676:return ay;case 5124:case 35670:return oy;case 35667:case 35671:return ly;case 35668:case 35672:return cy;case 35669:case 35673:return hy;case 5125:return uy;case 36294:return dy;case 36295:return fy;case 36296:return py;case 35678:case 36198:case 36298:case 36306:case 35682:return my;case 35679:case 36299:case 36307:return gy;case 35680:case 36300:case 36308:case 36293:return _y;case 36289:case 36303:case 36311:case 36292:return xy}}function vy(i,t){i.uniform1fv(this.addr,t)}function My(i,t){let e=Rs(t,this.size,2);i.uniform2fv(this.addr,e)}function Sy(i,t){let e=Rs(t,this.size,3);i.uniform3fv(this.addr,e)}function by(i,t){let e=Rs(t,this.size,4);i.uniform4fv(this.addr,e)}function Ey(i,t){let e=Rs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function wy(i,t){let e=Rs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ty(i,t){let e=Rs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ay(i,t){i.uniform1iv(this.addr,t)}function Ry(i,t){i.uniform2iv(this.addr,t)}function Cy(i,t){i.uniform3iv(this.addr,t)}function Py(i,t){i.uniform4iv(this.addr,t)}function Iy(i,t){i.uniform1uiv(this.addr,t)}function Ly(i,t){i.uniform2uiv(this.addr,t)}function Dy(i,t){i.uniform3uiv(this.addr,t)}function Uy(i,t){i.uniform4uiv(this.addr,t)}function Ny(i,t,e){let n=this.cache,s=t.length,r=so(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||_f,r[a])}function Oy(i,t,e){let n=this.cache,s=t.length,r=so(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||vf,r[a])}function Fy(i,t,e){let n=this.cache,s=t.length,r=so(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Mf,r[a])}function By(i,t,e){let n=this.cache,s=t.length,r=so(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||yf,r[a])}function ky(i){switch(i){case 5126:return vy;case 35664:return My;case 35665:return Sy;case 35666:return by;case 35674:return Ey;case 35675:return wy;case 35676:return Ty;case 5124:case 35670:return Ay;case 35667:case 35671:return Ry;case 35668:case 35672:return Cy;case 35669:case 35673:return Py;case 5125:return Iy;case 36294:return Ly;case 36295:return Dy;case 36296:return Uy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ny;case 35679:case 36299:case 36307:return Oy;case 35680:case 36300:case 36308:case 36293:return Fy;case 36289:case 36303:case 36311:case 36292:return By}}var ql=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=yy(e.type)}},Yl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ky(e.type)}},Kl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Cl=/(\w+)(\])?(\[|\.)?/g;function Cd(i,t){i.seq.push(t),i.map[t.id]=t}function Hy(i,t,e){let n=i.name,s=n.length;for(Cl.lastIndex=0;;){let r=Cl.exec(n),a=Cl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Cd(e,c===void 0?new ql(o,i,t):new Yl(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Kl(o),Cd(e,u)),e=u}}}var gs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Hy(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Pd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var zy=37297,Gy=0;function Vy(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Wy(i){let t=te.getPrimaries(te.workingColorSpace),e=te.getPrimaries(i),n;switch(t===e?n="":t===Pa&&e===Ca?n="LinearDisplayP3ToLinearSRGB":t===Ca&&e===Pa&&(n="LinearSRGBToLinearDisplayP3"),i){case Vn:case io:return[n,"LinearTransferOETF"];case be:case Cc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Id(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Vy(i.getShaderSource(t),a)}else return s}function $y(i,t){let e=Wy(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Xy(i,t){let e;switch(t){case ug:e="Linear";break;case dg:e="Reinhard";break;case fg:e="OptimizedCineon";break;case Ac:e="ACESFilmic";break;case mg:e="AgX";break;case pg:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function qy(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ds).join(`
`)}function Yy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ds).join(`
`)}function Ky(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Zy(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ds(i){return i!==""}function Ld(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Dd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Jy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zl(i){return i.replace(Jy,Qy)}var jy=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Qy(i,t){let e=$t[t];if(e===void 0){let n=jy.get(t);if(n!==void 0)e=$t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Zl(e)}var tv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ud(i){return i.replace(tv,ev)}function ev(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Nd(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function nv(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===eo?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===km?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===zn&&(t="SHADOWMAP_TYPE_VSM"),t}function iv(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case _s:case xs:t="ENVMAP_TYPE_CUBE";break;case no:t="ENVMAP_TYPE_CUBE_UV";break}return t}function sv(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case xs:t="ENVMAP_MODE_REFRACTION";break}return t}function rv(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case tf:t="ENVMAP_BLENDING_MULTIPLY";break;case cg:t="ENVMAP_BLENDING_MIX";break;case hg:t="ENVMAP_BLENDING_ADD";break}return t}function av(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function ov(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=nv(e),c=iv(e),h=sv(e),u=rv(e),d=av(e),m=e.isWebGL2?"":qy(e),_=Yy(e),g=Ky(r),p=s.createProgram(),f,y,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ds).join(`
`),f.length>0&&(f+=`
`),y=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ds).join(`
`),y.length>0&&(y+=`
`)):(f=[Nd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ds).join(`
`),y=[m,Nd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hi?"#define TONE_MAPPING":"",e.toneMapping!==hi?$t.tonemapping_pars_fragment:"",e.toneMapping!==hi?Xy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,$y("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ds).join(`
`)),a=Zl(a),a=Ld(a,e),a=Dd(a,e),o=Zl(o),o=Ld(o,e),o=Dd(o,e),a=Ud(a),o=Ud(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===td?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===td?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let M=x+f+a,R=x+y+o,v=Pd(s,s.VERTEX_SHADER,M),E=Pd(s,s.FRAGMENT_SHADER,R);s.attachShader(p,v),s.attachShader(p,E),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function U(q){if(i.debug.checkShaderErrors){let H=s.getProgramInfoLog(p).trim(),C=s.getShaderInfoLog(v).trim(),N=s.getShaderInfoLog(E).trim(),G=!0,k=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,v,E);else{let P=Id(s,v,"vertex"),L=Id(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+H+`
`+P+`
`+L)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(C===""||N==="")&&(k=!1);k&&(q.diagnostics={runnable:G,programLog:H,vertexShader:{log:C,prefix:f},fragmentShader:{log:N,prefix:y}})}s.deleteShader(v),s.deleteShader(E),S=new gs(s,p),w=Zy(s,p)}let S;this.getUniforms=function(){return S===void 0&&U(this),S};let w;this.getAttributes=function(){return w===void 0&&U(this),w};let F=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(p,zy)),F},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Gy++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=v,this.fragmentShader=E,this}var lv=0,Jl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new jl(t),e.set(t,n)),n}},jl=class{constructor(t){this.id=lv++,this.code=t,this.usedTimes=0}};function cv(i,t,e,n,s,r,a){let o=new rr,l=new Jl,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,m=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return S===0?"uv":`uv${S}`}function p(S,w,F,q,H){let C=q.fog,N=H.geometry,G=S.isMeshStandardMaterial?q.environment:null,k=(S.isMeshStandardMaterial?e:t).get(S.envMap||G),P=k&&k.mapping===no?k.image.height:null,L=_[S.type];S.precision!==null&&(m=s.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));let Z=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,J=Z!==void 0?Z.length:0,j=0;N.morphAttributes.position!==void 0&&(j=1),N.morphAttributes.normal!==void 0&&(j=2),N.morphAttributes.color!==void 0&&(j=3);let W,K,st,ht;if(L){let ze=Ln[L];W=ze.vertexShader,K=ze.fragmentShader}else W=S.vertexShader,K=S.fragmentShader,l.update(S),st=l.getVertexShaderID(S),ht=l.getFragmentShaderID(S);let lt=i.getRenderTarget(),gt=H.isInstancedMesh===!0,_t=H.isBatchedMesh===!0,wt=!!S.map,Lt=!!S.matcap,z=!!k,he=!!S.aoMap,Tt=!!S.lightMap,Pt=!!S.bumpMap,yt=!!S.normalMap,zt=!!S.displacementMap,It=!!S.emissiveMap,A=!!S.metalnessMap,b=!!S.roughnessMap,V=S.anisotropy>0,Q=S.clearcoat>0,tt=S.iridescence>0,et=S.sheen>0,Et=S.transmission>0,xt=V&&!!S.anisotropyMap,St=Q&&!!S.clearcoatMap,Dt=Q&&!!S.clearcoatNormalMap,Vt=Q&&!!S.clearcoatRoughnessMap,O=tt&&!!S.iridescenceMap,nt=tt&&!!S.iridescenceThicknessMap,at=et&&!!S.sheenColorMap,ct=et&&!!S.sheenRoughnessMap,ut=!!S.specularMap,it=!!S.specularColorMap,bt=!!S.specularIntensityMap,Ot=Et&&!!S.transmissionMap,Kt=Et&&!!S.thicknessMap,Ct=!!S.gradientMap,rt=!!S.alphaMap,D=S.alphaTest>0,ot=!!S.alphaHash,dt=!!S.extensions,Ft=!!N.attributes.uv1,Ut=!!N.attributes.uv2,ie=!!N.attributes.uv3,se=hi;return S.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(se=i.toneMapping),{isWebGL2:h,shaderID:L,shaderType:S.type,shaderName:S.name,vertexShader:W,fragmentShader:K,defines:S.defines,customVertexShaderID:st,customFragmentShaderID:ht,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:_t,instancing:gt,instancingColor:gt&&H.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:lt===null?i.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Vn,map:wt,matcap:Lt,envMap:z,envMapMode:z&&k.mapping,envMapCubeUVHeight:P,aoMap:he,lightMap:Tt,bumpMap:Pt,normalMap:yt,displacementMap:d&&zt,emissiveMap:It,normalMapObjectSpace:yt&&S.normalMapType===Ag,normalMapTangentSpace:yt&&S.normalMapType===uf,metalnessMap:A,roughnessMap:b,anisotropy:V,anisotropyMap:xt,clearcoat:Q,clearcoatMap:St,clearcoatNormalMap:Dt,clearcoatRoughnessMap:Vt,iridescence:tt,iridescenceMap:O,iridescenceThicknessMap:nt,sheen:et,sheenColorMap:at,sheenRoughnessMap:ct,specularMap:ut,specularColorMap:it,specularIntensityMap:bt,transmission:Et,transmissionMap:Ot,thicknessMap:Kt,gradientMap:Ct,opaque:S.transparent===!1&&S.blending===ps,alphaMap:rt,alphaTest:D,alphaHash:ot,combine:S.combine,mapUv:wt&&g(S.map.channel),aoMapUv:he&&g(S.aoMap.channel),lightMapUv:Tt&&g(S.lightMap.channel),bumpMapUv:Pt&&g(S.bumpMap.channel),normalMapUv:yt&&g(S.normalMap.channel),displacementMapUv:zt&&g(S.displacementMap.channel),emissiveMapUv:It&&g(S.emissiveMap.channel),metalnessMapUv:A&&g(S.metalnessMap.channel),roughnessMapUv:b&&g(S.roughnessMap.channel),anisotropyMapUv:xt&&g(S.anisotropyMap.channel),clearcoatMapUv:St&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Vt&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:O&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:at&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:ct&&g(S.sheenRoughnessMap.channel),specularMapUv:ut&&g(S.specularMap.channel),specularColorMapUv:it&&g(S.specularColorMap.channel),specularIntensityMapUv:bt&&g(S.specularIntensityMap.channel),transmissionMapUv:Ot&&g(S.transmissionMap.channel),thicknessMapUv:Kt&&g(S.thicknessMap.channel),alphaMapUv:rt&&g(S.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(yt||V),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:Ft,vertexUv2s:Ut,vertexUv3s:ie,pointsUvs:H.isPoints===!0&&!!N.attributes.uv&&(wt||rt),fog:!!C,useFog:S.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:H.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:j,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:se,useLegacyLights:i._useLegacyLights,decodeVideoTexture:wt&&S.map.isVideoTexture===!0&&te.getTransfer(S.map.colorSpace)===le,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===_e,flipSided:S.side===Je,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:dt&&S.extensions.derivatives===!0,extensionFragDepth:dt&&S.extensions.fragDepth===!0,extensionDrawBuffers:dt&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:dt&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:dt&&S.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function f(S){let w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(let F in S.defines)w.push(F),w.push(S.defines[F]);return S.isRawShaderMaterial===!1&&(y(w,S),x(w,S),w.push(i.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function y(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function x(S,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),S.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),S.push(o.mask)}function M(S){let w=_[S.type],F;if(w){let q=Ln[w];F=jg.clone(q.uniforms)}else F=S.uniforms;return F}function R(S,w){let F;for(let q=0,H=c.length;q<H;q++){let C=c[q];if(C.cacheKey===w){F=C,++F.usedTimes;break}}return F===void 0&&(F=new ov(i,w,S,r),c.push(F)),F}function v(S){if(--S.usedTimes===0){let w=c.indexOf(S);c[w]=c[c.length-1],c.pop(),S.destroy()}}function E(S){l.remove(S)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:M,acquireProgram:R,releaseProgram:v,releaseShaderCache:E,programs:c,dispose:U}}function hv(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function uv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Od(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Fd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,m,_,g,p){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:m,groupOrder:_,renderOrder:u.renderOrder,z:g,group:p},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=m,f.groupOrder=_,f.renderOrder=u.renderOrder,f.z=g,f.group=p),t++,f}function o(u,d,m,_,g,p){let f=a(u,d,m,_,g,p);m.transmission>0?n.push(f):m.transparent===!0?s.push(f):e.push(f)}function l(u,d,m,_,g,p){let f=a(u,d,m,_,g,p);m.transmission>0?n.unshift(f):m.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||uv),n.length>1&&n.sort(d||Od),s.length>1&&s.sort(d||Od)}function h(){for(let u=t,d=i.length;u<d;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function dv(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Fd,i.set(n,[a])):s>=r.length?(a=new Fd,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function fv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new kt};break;case"SpotLight":e={position:new I,direction:new I,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function pv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var mv=0;function gv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function _v(i,t){let e=new fv,n=pv(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new I);let r=new I,a=new ce,o=new ce;function l(h,u){let d=0,m=0,_=0;for(let q=0;q<9;q++)s.probe[q].set(0,0,0);let g=0,p=0,f=0,y=0,x=0,M=0,R=0,v=0,E=0,U=0,S=0;h.sort(gv);let w=u===!0?Math.PI:1;for(let q=0,H=h.length;q<H;q++){let C=h[q],N=C.color,G=C.intensity,k=C.distance,P=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)d+=N.r*G*w,m+=N.g*G*w,_+=N.b*G*w;else if(C.isLightProbe){for(let L=0;L<9;L++)s.probe[L].addScaledVector(C.sh.coefficients[L],G);S++}else if(C.isDirectionalLight){let L=e.get(C);if(L.color.copy(C.color).multiplyScalar(C.intensity*w),C.castShadow){let Z=C.shadow,J=n.get(C);J.shadowBias=Z.bias,J.shadowNormalBias=Z.normalBias,J.shadowRadius=Z.radius,J.shadowMapSize=Z.mapSize,s.directionalShadow[g]=J,s.directionalShadowMap[g]=P,s.directionalShadowMatrix[g]=C.shadow.matrix,M++}s.directional[g]=L,g++}else if(C.isSpotLight){let L=e.get(C);L.position.setFromMatrixPosition(C.matrixWorld),L.color.copy(N).multiplyScalar(G*w),L.distance=k,L.coneCos=Math.cos(C.angle),L.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),L.decay=C.decay,s.spot[f]=L;let Z=C.shadow;if(C.map&&(s.spotLightMap[E]=C.map,E++,Z.updateMatrices(C),C.castShadow&&U++),s.spotLightMatrix[f]=Z.matrix,C.castShadow){let J=n.get(C);J.shadowBias=Z.bias,J.shadowNormalBias=Z.normalBias,J.shadowRadius=Z.radius,J.shadowMapSize=Z.mapSize,s.spotShadow[f]=J,s.spotShadowMap[f]=P,v++}f++}else if(C.isRectAreaLight){let L=e.get(C);L.color.copy(N).multiplyScalar(G),L.halfWidth.set(C.width*.5,0,0),L.halfHeight.set(0,C.height*.5,0),s.rectArea[y]=L,y++}else if(C.isPointLight){let L=e.get(C);if(L.color.copy(C.color).multiplyScalar(C.intensity*w),L.distance=C.distance,L.decay=C.decay,C.castShadow){let Z=C.shadow,J=n.get(C);J.shadowBias=Z.bias,J.shadowNormalBias=Z.normalBias,J.shadowRadius=Z.radius,J.shadowMapSize=Z.mapSize,J.shadowCameraNear=Z.camera.near,J.shadowCameraFar=Z.camera.far,s.pointShadow[p]=J,s.pointShadowMap[p]=P,s.pointShadowMatrix[p]=C.shadow.matrix,R++}s.point[p]=L,p++}else if(C.isHemisphereLight){let L=e.get(C);L.skyColor.copy(C.color).multiplyScalar(G*w),L.groundColor.copy(C.groundColor).multiplyScalar(G*w),s.hemi[x]=L,x++}}y>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ft.LTC_FLOAT_1,s.rectAreaLTC2=ft.LTC_FLOAT_2):(s.rectAreaLTC1=ft.LTC_HALF_1,s.rectAreaLTC2=ft.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ft.LTC_FLOAT_1,s.rectAreaLTC2=ft.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ft.LTC_HALF_1,s.rectAreaLTC2=ft.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=m,s.ambient[2]=_;let F=s.hash;(F.directionalLength!==g||F.pointLength!==p||F.spotLength!==f||F.rectAreaLength!==y||F.hemiLength!==x||F.numDirectionalShadows!==M||F.numPointShadows!==R||F.numSpotShadows!==v||F.numSpotMaps!==E||F.numLightProbes!==S)&&(s.directional.length=g,s.spot.length=f,s.rectArea.length=y,s.point.length=p,s.hemi.length=x,s.directionalShadow.length=M,s.directionalShadowMap.length=M,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=v,s.spotShadowMap.length=v,s.directionalShadowMatrix.length=M,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=v+E-U,s.spotLightMap.length=E,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=S,F.directionalLength=g,F.pointLength=p,F.spotLength=f,F.rectAreaLength=y,F.hemiLength=x,F.numDirectionalShadows=M,F.numPointShadows=R,F.numSpotShadows=v,F.numSpotMaps=E,F.numLightProbes=S,s.version=mv++)}function c(h,u){let d=0,m=0,_=0,g=0,p=0,f=u.matrixWorldInverse;for(let y=0,x=h.length;y<x;y++){let M=h[y];if(M.isDirectionalLight){let R=s.directional[d];R.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(f),d++}else if(M.isSpotLight){let R=s.spot[_];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(f),R.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(f),_++}else if(M.isRectAreaLight){let R=s.rectArea[g];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(f),o.identity(),a.copy(M.matrixWorld),a.premultiply(f),o.extractRotation(a),R.halfWidth.set(M.width*.5,0,0),R.halfHeight.set(0,M.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){let R=s.point[m];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(f),m++}else if(M.isHemisphereLight){let R=s.hemi[p];R.direction.setFromMatrixPosition(M.matrixWorld),R.direction.transformDirection(f),p++}}}return{setup:l,setupView:c,state:s}}function Bd(i,t){let e=new _v(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function a(u){n.push(u)}function o(u){s.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function xv(i,t){let e=new WeakMap;function n(r,a=0){let o=e.get(r),l;return o===void 0?(l=new Bd(i,t),e.set(r,[l])):a>=o.length?(l=new Bd(i,t),o.push(l)):l=o[a],l}function s(){e=new WeakMap}return{get:n,dispose:s}}var Ql=class extends mi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},tc=class extends mi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},yv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vv=`uniform sampler2D shadow_pass;
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
}`;function Mv(i,t,e){let n=new ar,s=new pt,r=new pt,a=new Pe,o=new Ql({depthPacking:Tg}),l=new tc,c={},h=e.maxTextureSize,u={[di]:Je,[Je]:di,[_e]:_e},d=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:yv,fragmentShader:vv}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let _=new Ee;_.setAttribute("position",new Ie(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new vt(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eo;let f=this.type;this.render=function(v,E,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||v.length===0)return;let S=i.getRenderTarget(),w=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),q=i.state;q.setBlending(ci),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let H=f!==zn&&this.type===zn,C=f===zn&&this.type!==zn;for(let N=0,G=v.length;N<G;N++){let k=v[N],P=k.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;s.copy(P.mapSize);let L=P.getFrameExtents();if(s.multiply(L),r.copy(P.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/L.x),s.x=r.x*L.x,P.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/L.y),s.y=r.y*L.y,P.mapSize.y=r.y)),P.map===null||H===!0||C===!0){let J=this.type!==zn?{minFilter:We,magFilter:We}:{};P.map!==null&&P.map.dispose(),P.map=new Wn(s.x,s.y,J),P.map.texture.name=k.name+".shadowMap",P.camera.updateProjectionMatrix()}i.setRenderTarget(P.map),i.clear();let Z=P.getViewportCount();for(let J=0;J<Z;J++){let j=P.getViewport(J);a.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),q.viewport(a),P.updateMatrices(k,J),n=P.getFrustum(),M(E,U,P.camera,k,this.type)}P.isPointLightShadow!==!0&&this.type===zn&&y(P,U),P.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(S,w,F)};function y(v,E){let U=t.update(g);d.defines.VSM_SAMPLES!==v.blurSamples&&(d.defines.VSM_SAMPLES=v.blurSamples,m.defines.VSM_SAMPLES=v.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new Wn(s.x,s.y)),d.uniforms.shadow_pass.value=v.map.texture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,i.setRenderTarget(v.mapPass),i.clear(),i.renderBufferDirect(E,null,U,d,g,null),m.uniforms.shadow_pass.value=v.mapPass.texture,m.uniforms.resolution.value=v.mapSize,m.uniforms.radius.value=v.radius,i.setRenderTarget(v.map),i.clear(),i.renderBufferDirect(E,null,U,m,g,null)}function x(v,E,U,S){let w=null,F=U.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(F!==void 0)w=F;else if(w=U.isPointLight===!0?l:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let q=w.uuid,H=E.uuid,C=c[q];C===void 0&&(C={},c[q]=C);let N=C[H];N===void 0&&(N=w.clone(),C[H]=N,E.addEventListener("dispose",R)),w=N}if(w.visible=E.visible,w.wireframe=E.wireframe,S===zn?w.side=E.shadowSide!==null?E.shadowSide:E.side:w.side=E.shadowSide!==null?E.shadowSide:u[E.side],w.alphaMap=E.alphaMap,w.alphaTest=E.alphaTest,w.map=E.map,w.clipShadows=E.clipShadows,w.clippingPlanes=E.clippingPlanes,w.clipIntersection=E.clipIntersection,w.displacementMap=E.displacementMap,w.displacementScale=E.displacementScale,w.displacementBias=E.displacementBias,w.wireframeLinewidth=E.wireframeLinewidth,w.linewidth=E.linewidth,U.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let q=i.properties.get(w);q.light=U}return w}function M(v,E,U,S,w){if(v.visible===!1)return;if(v.layers.test(E.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&w===zn)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,v.matrixWorld);let H=t.update(v),C=v.material;if(Array.isArray(C)){let N=H.groups;for(let G=0,k=N.length;G<k;G++){let P=N[G],L=C[P.materialIndex];if(L&&L.visible){let Z=x(v,L,S,w);v.onBeforeShadow(i,v,E,U,H,Z,P),i.renderBufferDirect(U,null,H,Z,v,P),v.onAfterShadow(i,v,E,U,H,Z,P)}}}else if(C.visible){let N=x(v,C,S,w);v.onBeforeShadow(i,v,E,U,H,N,null),i.renderBufferDirect(U,null,H,N,v,null),v.onAfterShadow(i,v,E,U,H,N,null)}}let q=v.children;for(let H=0,C=q.length;H<C;H++)M(q[H],E,U,S,w)}function R(v){v.target.removeEventListener("dispose",R);for(let U in c){let S=c[U],w=v.target.uuid;w in S&&(S[w].dispose(),delete S[w])}}}function Sv(i,t,e){let n=e.isWebGL2;function s(){let D=!1,ot=new Pe,dt=null,Ft=new Pe(0,0,0,0);return{setMask:function(Ut){dt!==Ut&&!D&&(i.colorMask(Ut,Ut,Ut,Ut),dt=Ut)},setLocked:function(Ut){D=Ut},setClear:function(Ut,ie,se,Ae,ze){ze===!0&&(Ut*=Ae,ie*=Ae,se*=Ae),ot.set(Ut,ie,se,Ae),Ft.equals(ot)===!1&&(i.clearColor(Ut,ie,se,Ae),Ft.copy(ot))},reset:function(){D=!1,dt=null,Ft.set(-1,0,0,0)}}}function r(){let D=!1,ot=null,dt=null,Ft=null;return{setTest:function(Ut){Ut?_t(i.DEPTH_TEST):wt(i.DEPTH_TEST)},setMask:function(Ut){ot!==Ut&&!D&&(i.depthMask(Ut),ot=Ut)},setFunc:function(Ut){if(dt!==Ut){switch(Ut){case ng:i.depthFunc(i.NEVER);break;case ig:i.depthFunc(i.ALWAYS);break;case sg:i.depthFunc(i.LESS);break;case wa:i.depthFunc(i.LEQUAL);break;case rg:i.depthFunc(i.EQUAL);break;case ag:i.depthFunc(i.GEQUAL);break;case og:i.depthFunc(i.GREATER);break;case lg:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}dt=Ut}},setLocked:function(Ut){D=Ut},setClear:function(Ut){Ft!==Ut&&(i.clearDepth(Ut),Ft=Ut)},reset:function(){D=!1,ot=null,dt=null,Ft=null}}}function a(){let D=!1,ot=null,dt=null,Ft=null,Ut=null,ie=null,se=null,Ae=null,ze=null;return{setTest:function(re){D||(re?_t(i.STENCIL_TEST):wt(i.STENCIL_TEST))},setMask:function(re){ot!==re&&!D&&(i.stencilMask(re),ot=re)},setFunc:function(re,Ge,Pn){(dt!==re||Ft!==Ge||Ut!==Pn)&&(i.stencilFunc(re,Ge,Pn),dt=re,Ft=Ge,Ut=Pn)},setOp:function(re,Ge,Pn){(ie!==re||se!==Ge||Ae!==Pn)&&(i.stencilOp(re,Ge,Pn),ie=re,se=Ge,Ae=Pn)},setLocked:function(re){D=re},setClear:function(re){ze!==re&&(i.clearStencil(re),ze=re)},reset:function(){D=!1,ot=null,dt=null,Ft=null,Ut=null,ie=null,se=null,Ae=null,ze=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,u=new WeakMap,d={},m={},_=new WeakMap,g=[],p=null,f=!1,y=null,x=null,M=null,R=null,v=null,E=null,U=null,S=new kt(0,0,0),w=0,F=!1,q=null,H=null,C=null,N=null,G=null,k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),P=!1,L=0,Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(Z)[1]),P=L>=1):Z.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),P=L>=2);let J=null,j={},W=i.getParameter(i.SCISSOR_BOX),K=i.getParameter(i.VIEWPORT),st=new Pe().fromArray(W),ht=new Pe().fromArray(K);function lt(D,ot,dt,Ft){let Ut=new Uint8Array(4),ie=i.createTexture();i.bindTexture(D,ie),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let se=0;se<dt;se++)n&&(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)?i.texImage3D(ot,0,i.RGBA,1,1,Ft,0,i.RGBA,i.UNSIGNED_BYTE,Ut):i.texImage2D(ot+se,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ut);return ie}let gt={};gt[i.TEXTURE_2D]=lt(i.TEXTURE_2D,i.TEXTURE_2D,1),gt[i.TEXTURE_CUBE_MAP]=lt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(gt[i.TEXTURE_2D_ARRAY]=lt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),gt[i.TEXTURE_3D]=lt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),_t(i.DEPTH_TEST),l.setFunc(wa),It(!1),A(_u),_t(i.CULL_FACE),yt(ci);function _t(D){d[D]!==!0&&(i.enable(D),d[D]=!0)}function wt(D){d[D]!==!1&&(i.disable(D),d[D]=!1)}function Lt(D,ot){return m[D]!==ot?(i.bindFramebuffer(D,ot),m[D]=ot,n&&(D===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=ot),D===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=ot)),!0):!1}function z(D,ot){let dt=g,Ft=!1;if(D)if(dt=_.get(ot),dt===void 0&&(dt=[],_.set(ot,dt)),D.isWebGLMultipleRenderTargets){let Ut=D.texture;if(dt.length!==Ut.length||dt[0]!==i.COLOR_ATTACHMENT0){for(let ie=0,se=Ut.length;ie<se;ie++)dt[ie]=i.COLOR_ATTACHMENT0+ie;dt.length=Ut.length,Ft=!0}}else dt[0]!==i.COLOR_ATTACHMENT0&&(dt[0]=i.COLOR_ATTACHMENT0,Ft=!0);else dt[0]!==i.BACK&&(dt[0]=i.BACK,Ft=!0);Ft&&(e.isWebGL2?i.drawBuffers(dt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(dt))}function he(D){return p!==D?(i.useProgram(D),p=D,!0):!1}let Tt={[Ri]:i.FUNC_ADD,[zm]:i.FUNC_SUBTRACT,[Gm]:i.FUNC_REVERSE_SUBTRACT};if(n)Tt[Mu]=i.MIN,Tt[Su]=i.MAX;else{let D=t.get("EXT_blend_minmax");D!==null&&(Tt[Mu]=D.MIN_EXT,Tt[Su]=D.MAX_EXT)}let Pt={[Vm]:i.ZERO,[Wm]:i.ONE,[$m]:i.SRC_COLOR,[Nl]:i.SRC_ALPHA,[Jm]:i.SRC_ALPHA_SATURATE,[Km]:i.DST_COLOR,[qm]:i.DST_ALPHA,[Xm]:i.ONE_MINUS_SRC_COLOR,[Ol]:i.ONE_MINUS_SRC_ALPHA,[Zm]:i.ONE_MINUS_DST_COLOR,[Ym]:i.ONE_MINUS_DST_ALPHA,[jm]:i.CONSTANT_COLOR,[Qm]:i.ONE_MINUS_CONSTANT_COLOR,[tg]:i.CONSTANT_ALPHA,[eg]:i.ONE_MINUS_CONSTANT_ALPHA};function yt(D,ot,dt,Ft,Ut,ie,se,Ae,ze,re){if(D===ci){f===!0&&(wt(i.BLEND),f=!1);return}if(f===!1&&(_t(i.BLEND),f=!0),D!==Hm){if(D!==y||re!==F){if((x!==Ri||v!==Ri)&&(i.blendEquation(i.FUNC_ADD),x=Ri,v=Ri),re)switch(D){case ps:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xu:i.blendFunc(i.ONE,i.ONE);break;case yu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ps:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xu:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case yu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}M=null,R=null,E=null,U=null,S.set(0,0,0),w=0,y=D,F=re}return}Ut=Ut||ot,ie=ie||dt,se=se||Ft,(ot!==x||Ut!==v)&&(i.blendEquationSeparate(Tt[ot],Tt[Ut]),x=ot,v=Ut),(dt!==M||Ft!==R||ie!==E||se!==U)&&(i.blendFuncSeparate(Pt[dt],Pt[Ft],Pt[ie],Pt[se]),M=dt,R=Ft,E=ie,U=se),(Ae.equals(S)===!1||ze!==w)&&(i.blendColor(Ae.r,Ae.g,Ae.b,ze),S.copy(Ae),w=ze),y=D,F=!1}function zt(D,ot){D.side===_e?wt(i.CULL_FACE):_t(i.CULL_FACE);let dt=D.side===Je;ot&&(dt=!dt),It(dt),D.blending===ps&&D.transparent===!1?yt(ci):yt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),o.setMask(D.colorWrite);let Ft=D.stencilWrite;c.setTest(Ft),Ft&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),V(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?_t(i.SAMPLE_ALPHA_TO_COVERAGE):wt(i.SAMPLE_ALPHA_TO_COVERAGE)}function It(D){q!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),q=D)}function A(D){D!==Fm?(_t(i.CULL_FACE),D!==H&&(D===_u?i.cullFace(i.BACK):D===Bm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):wt(i.CULL_FACE),H=D}function b(D){D!==C&&(P&&i.lineWidth(D),C=D)}function V(D,ot,dt){D?(_t(i.POLYGON_OFFSET_FILL),(N!==ot||G!==dt)&&(i.polygonOffset(ot,dt),N=ot,G=dt)):wt(i.POLYGON_OFFSET_FILL)}function Q(D){D?_t(i.SCISSOR_TEST):wt(i.SCISSOR_TEST)}function tt(D){D===void 0&&(D=i.TEXTURE0+k-1),J!==D&&(i.activeTexture(D),J=D)}function et(D,ot,dt){dt===void 0&&(J===null?dt=i.TEXTURE0+k-1:dt=J);let Ft=j[dt];Ft===void 0&&(Ft={type:void 0,texture:void 0},j[dt]=Ft),(Ft.type!==D||Ft.texture!==ot)&&(J!==dt&&(i.activeTexture(dt),J=dt),i.bindTexture(D,ot||gt[D]),Ft.type=D,Ft.texture=ot)}function Et(){let D=j[J];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function xt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function St(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Dt(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Vt(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function O(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function at(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ct(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ut(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function it(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function bt(D){st.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),st.copy(D))}function Ot(D){ht.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),ht.copy(D))}function Kt(D,ot){let dt=u.get(ot);dt===void 0&&(dt=new WeakMap,u.set(ot,dt));let Ft=dt.get(D);Ft===void 0&&(Ft=i.getUniformBlockIndex(ot,D.name),dt.set(D,Ft))}function Ct(D,ot){let Ft=u.get(ot).get(D);h.get(ot)!==Ft&&(i.uniformBlockBinding(ot,Ft,D.__bindingPointIndex),h.set(ot,Ft))}function rt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},J=null,j={},m={},_=new WeakMap,g=[],p=null,f=!1,y=null,x=null,M=null,R=null,v=null,E=null,U=null,S=new kt(0,0,0),w=0,F=!1,q=null,H=null,C=null,N=null,G=null,st.set(0,0,i.canvas.width,i.canvas.height),ht.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:_t,disable:wt,bindFramebuffer:Lt,drawBuffers:z,useProgram:he,setBlending:yt,setMaterial:zt,setFlipSided:It,setCullFace:A,setLineWidth:b,setPolygonOffset:V,setScissorTest:Q,activeTexture:tt,bindTexture:et,unbindTexture:Et,compressedTexImage2D:xt,compressedTexImage3D:St,texImage2D:ut,texImage3D:it,updateUBOMapping:Kt,uniformBlockBinding:Ct,texStorage2D:at,texStorage3D:ct,texSubImage2D:Dt,texSubImage3D:Vt,compressedTexSubImage2D:O,compressedTexSubImage3D:nt,scissor:bt,viewport:Ot,reset:rt}}function bv(i,t,e,n,s,r,a){let o=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,b){return m?new OffscreenCanvas(A,b):La("canvas")}function g(A,b,V,Q){let tt=1;if((A.width>Q||A.height>Q)&&(tt=Q/Math.max(A.width,A.height)),tt<1||b===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){let et=b?Gl:Math.floor,Et=et(tt*A.width),xt=et(tt*A.height);u===void 0&&(u=_(Et,xt));let St=V?_(Et,xt):u;return St.width=Et,St.height=xt,St.getContext("2d").drawImage(A,0,0,Et,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Et+"x"+xt+")."),St}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function p(A){return ed(A.width)&&ed(A.height)}function f(A){return o?!1:A.wrapS!==wn||A.wrapT!==wn||A.minFilter!==We&&A.minFilter!==$e}function y(A,b){return A.generateMipmaps&&b&&A.minFilter!==We&&A.minFilter!==$e}function x(A){i.generateMipmap(A)}function M(A,b,V,Q,tt=!1){if(o===!1)return b;if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let et=b;if(b===i.RED&&(V===i.FLOAT&&(et=i.R32F),V===i.HALF_FLOAT&&(et=i.R16F),V===i.UNSIGNED_BYTE&&(et=i.R8)),b===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(et=i.R8UI),V===i.UNSIGNED_SHORT&&(et=i.R16UI),V===i.UNSIGNED_INT&&(et=i.R32UI),V===i.BYTE&&(et=i.R8I),V===i.SHORT&&(et=i.R16I),V===i.INT&&(et=i.R32I)),b===i.RG&&(V===i.FLOAT&&(et=i.RG32F),V===i.HALF_FLOAT&&(et=i.RG16F),V===i.UNSIGNED_BYTE&&(et=i.RG8)),b===i.RGBA){let Et=tt?Ra:te.getTransfer(Q);V===i.FLOAT&&(et=i.RGBA32F),V===i.HALF_FLOAT&&(et=i.RGBA16F),V===i.UNSIGNED_BYTE&&(et=Et===le?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function R(A,b,V){return y(A,V)===!0||A.isFramebufferTexture&&A.minFilter!==We&&A.minFilter!==$e?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function v(A){return A===We||A===bu||A===Qo?i.NEAREST:i.LINEAR}function E(A){let b=A.target;b.removeEventListener("dispose",E),S(b),b.isVideoTexture&&h.delete(b)}function U(A){let b=A.target;b.removeEventListener("dispose",U),F(b)}function S(A){let b=n.get(A);if(b.__webglInit===void 0)return;let V=A.source,Q=d.get(V);if(Q){let tt=Q[b.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&w(A),Object.keys(Q).length===0&&d.delete(V)}n.remove(A)}function w(A){let b=n.get(A);i.deleteTexture(b.__webglTexture);let V=A.source,Q=d.get(V);delete Q[b.__cacheKey],a.memory.textures--}function F(A){let b=A.texture,V=n.get(A),Q=n.get(b);if(Q.__webglTexture!==void 0&&(i.deleteTexture(Q.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(V.__webglFramebuffer[tt]))for(let et=0;et<V.__webglFramebuffer[tt].length;et++)i.deleteFramebuffer(V.__webglFramebuffer[tt][et]);else i.deleteFramebuffer(V.__webglFramebuffer[tt]);V.__webglDepthbuffer&&i.deleteRenderbuffer(V.__webglDepthbuffer[tt])}else{if(Array.isArray(V.__webglFramebuffer))for(let tt=0;tt<V.__webglFramebuffer.length;tt++)i.deleteFramebuffer(V.__webglFramebuffer[tt]);else i.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&i.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&i.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let tt=0;tt<V.__webglColorRenderbuffer.length;tt++)V.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(V.__webglColorRenderbuffer[tt]);V.__webglDepthRenderbuffer&&i.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let tt=0,et=b.length;tt<et;tt++){let Et=n.get(b[tt]);Et.__webglTexture&&(i.deleteTexture(Et.__webglTexture),a.memory.textures--),n.remove(b[tt])}n.remove(b),n.remove(A)}let q=0;function H(){q=0}function C(){let A=q;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),q+=1,A}function N(A){let b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function G(A,b){let V=n.get(A);if(A.isVideoTexture&&zt(A),A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){let Q=A.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{st(V,A,b);return}}e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+b)}function k(A,b){let V=n.get(A);if(A.version>0&&V.__version!==A.version){st(V,A,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+b)}function P(A,b){let V=n.get(A);if(A.version>0&&V.__version!==A.version){st(V,A,b);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+b)}function L(A,b){let V=n.get(A);if(A.version>0&&V.__version!==A.version){ht(V,A,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+b)}let Z={[er]:i.REPEAT,[wn]:i.CLAMP_TO_EDGE,[kl]:i.MIRRORED_REPEAT},J={[We]:i.NEAREST,[bu]:i.NEAREST_MIPMAP_NEAREST,[Qo]:i.NEAREST_MIPMAP_LINEAR,[$e]:i.LINEAR,[gg]:i.LINEAR_MIPMAP_NEAREST,[nr]:i.LINEAR_MIPMAP_LINEAR},j={[Rg]:i.NEVER,[Ug]:i.ALWAYS,[Cg]:i.LESS,[df]:i.LEQUAL,[Pg]:i.EQUAL,[Dg]:i.GEQUAL,[Ig]:i.GREATER,[Lg]:i.NOTEQUAL};function W(A,b,V){if(V?(i.texParameteri(A,i.TEXTURE_WRAP_S,Z[b.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Z[b.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Z[b.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,J[b.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,J[b.minFilter])):(i.texParameteri(A,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(A,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(b.wrapS!==wn||b.wrapT!==wn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(A,i.TEXTURE_MAG_FILTER,v(b.magFilter)),i.texParameteri(A,i.TEXTURE_MIN_FILTER,v(b.minFilter)),b.minFilter!==We&&b.minFilter!==$e&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,j[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let Q=t.get("EXT_texture_filter_anisotropic");if(b.magFilter===We||b.minFilter!==Qo&&b.minFilter!==nr||b.type===li&&t.has("OES_texture_float_linear")===!1||o===!1&&b.type===ir&&t.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(i.texParameterf(A,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function K(A,b){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",E));let Q=b.source,tt=d.get(Q);tt===void 0&&(tt={},d.set(Q,tt));let et=N(b);if(et!==A.__cacheKey){tt[et]===void 0&&(tt[et]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),tt[et].usedTimes++;let Et=tt[A.__cacheKey];Et!==void 0&&(tt[A.__cacheKey].usedTimes--,Et.usedTimes===0&&w(b)),A.__cacheKey=et,A.__webglTexture=tt[et].texture}return V}function st(A,b,V){let Q=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Q=i.TEXTURE_3D);let tt=K(A,b),et=b.source;e.bindTexture(Q,A.__webglTexture,i.TEXTURE0+V);let Et=n.get(et);if(et.version!==Et.__version||tt===!0){e.activeTexture(i.TEXTURE0+V);let xt=te.getPrimaries(te.workingColorSpace),St=b.colorSpace===dn?null:te.getPrimaries(b.colorSpace),Dt=b.colorSpace===dn||xt===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);let Vt=f(b)&&p(b.image)===!1,O=g(b.image,Vt,!1,s.maxTextureSize);O=It(b,O);let nt=p(O)||o,at=r.convert(b.format,b.colorSpace),ct=r.convert(b.type),ut=M(b.internalFormat,at,ct,b.colorSpace,b.isVideoTexture);W(Q,b,nt);let it,bt=b.mipmaps,Ot=o&&b.isVideoTexture!==!0&&ut!==cf,Kt=Et.__version===void 0||tt===!0,Ct=R(b,O,nt);if(b.isDepthTexture)ut=i.DEPTH_COMPONENT,o?b.type===li?ut=i.DEPTH_COMPONENT32F:b.type===oi?ut=i.DEPTH_COMPONENT24:b.type===Pi?ut=i.DEPTH24_STENCIL8:ut=i.DEPTH_COMPONENT16:b.type===li&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Ii&&ut===i.DEPTH_COMPONENT&&b.type!==Rc&&b.type!==oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=oi,ct=r.convert(b.type)),b.format===ys&&ut===i.DEPTH_COMPONENT&&(ut=i.DEPTH_STENCIL,b.type!==Pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Pi,ct=r.convert(b.type))),Kt&&(Ot?e.texStorage2D(i.TEXTURE_2D,1,ut,O.width,O.height):e.texImage2D(i.TEXTURE_2D,0,ut,O.width,O.height,0,at,ct,null));else if(b.isDataTexture)if(bt.length>0&&nt){Ot&&Kt&&e.texStorage2D(i.TEXTURE_2D,Ct,ut,bt[0].width,bt[0].height);for(let rt=0,D=bt.length;rt<D;rt++)it=bt[rt],Ot?e.texSubImage2D(i.TEXTURE_2D,rt,0,0,it.width,it.height,at,ct,it.data):e.texImage2D(i.TEXTURE_2D,rt,ut,it.width,it.height,0,at,ct,it.data);b.generateMipmaps=!1}else Ot?(Kt&&e.texStorage2D(i.TEXTURE_2D,Ct,ut,O.width,O.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,O.width,O.height,at,ct,O.data)):e.texImage2D(i.TEXTURE_2D,0,ut,O.width,O.height,0,at,ct,O.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ot&&Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,ut,bt[0].width,bt[0].height,O.depth);for(let rt=0,D=bt.length;rt<D;rt++)it=bt[rt],b.format!==Tn?at!==null?Ot?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,it.width,it.height,O.depth,at,it.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,rt,ut,it.width,it.height,O.depth,0,it.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?e.texSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,it.width,it.height,O.depth,at,ct,it.data):e.texImage3D(i.TEXTURE_2D_ARRAY,rt,ut,it.width,it.height,O.depth,0,at,ct,it.data)}else{Ot&&Kt&&e.texStorage2D(i.TEXTURE_2D,Ct,ut,bt[0].width,bt[0].height);for(let rt=0,D=bt.length;rt<D;rt++)it=bt[rt],b.format!==Tn?at!==null?Ot?e.compressedTexSubImage2D(i.TEXTURE_2D,rt,0,0,it.width,it.height,at,it.data):e.compressedTexImage2D(i.TEXTURE_2D,rt,ut,it.width,it.height,0,it.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?e.texSubImage2D(i.TEXTURE_2D,rt,0,0,it.width,it.height,at,ct,it.data):e.texImage2D(i.TEXTURE_2D,rt,ut,it.width,it.height,0,at,ct,it.data)}else if(b.isDataArrayTexture)Ot?(Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,ut,O.width,O.height,O.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,O.width,O.height,O.depth,at,ct,O.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,ut,O.width,O.height,O.depth,0,at,ct,O.data);else if(b.isData3DTexture)Ot?(Kt&&e.texStorage3D(i.TEXTURE_3D,Ct,ut,O.width,O.height,O.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,O.width,O.height,O.depth,at,ct,O.data)):e.texImage3D(i.TEXTURE_3D,0,ut,O.width,O.height,O.depth,0,at,ct,O.data);else if(b.isFramebufferTexture){if(Kt)if(Ot)e.texStorage2D(i.TEXTURE_2D,Ct,ut,O.width,O.height);else{let rt=O.width,D=O.height;for(let ot=0;ot<Ct;ot++)e.texImage2D(i.TEXTURE_2D,ot,ut,rt,D,0,at,ct,null),rt>>=1,D>>=1}}else if(bt.length>0&&nt){Ot&&Kt&&e.texStorage2D(i.TEXTURE_2D,Ct,ut,bt[0].width,bt[0].height);for(let rt=0,D=bt.length;rt<D;rt++)it=bt[rt],Ot?e.texSubImage2D(i.TEXTURE_2D,rt,0,0,at,ct,it):e.texImage2D(i.TEXTURE_2D,rt,ut,at,ct,it);b.generateMipmaps=!1}else Ot?(Kt&&e.texStorage2D(i.TEXTURE_2D,Ct,ut,O.width,O.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,at,ct,O)):e.texImage2D(i.TEXTURE_2D,0,ut,at,ct,O);y(b,nt)&&x(Q),Et.__version=et.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function ht(A,b,V){if(b.image.length!==6)return;let Q=K(A,b),tt=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+V);let et=n.get(tt);if(tt.version!==et.__version||Q===!0){e.activeTexture(i.TEXTURE0+V);let Et=te.getPrimaries(te.workingColorSpace),xt=b.colorSpace===dn?null:te.getPrimaries(b.colorSpace),St=b.colorSpace===dn||Et===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let Dt=b.isCompressedTexture||b.image[0].isCompressedTexture,Vt=b.image[0]&&b.image[0].isDataTexture,O=[];for(let rt=0;rt<6;rt++)!Dt&&!Vt?O[rt]=g(b.image[rt],!1,!0,s.maxCubemapSize):O[rt]=Vt?b.image[rt].image:b.image[rt],O[rt]=It(b,O[rt]);let nt=O[0],at=p(nt)||o,ct=r.convert(b.format,b.colorSpace),ut=r.convert(b.type),it=M(b.internalFormat,ct,ut,b.colorSpace),bt=o&&b.isVideoTexture!==!0,Ot=et.__version===void 0||Q===!0,Kt=R(b,nt,at);W(i.TEXTURE_CUBE_MAP,b,at);let Ct;if(Dt){bt&&Ot&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Kt,it,nt.width,nt.height);for(let rt=0;rt<6;rt++){Ct=O[rt].mipmaps;for(let D=0;D<Ct.length;D++){let ot=Ct[D];b.format!==Tn?ct!==null?bt?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,D,0,0,ot.width,ot.height,ct,ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,D,it,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):bt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,D,0,0,ot.width,ot.height,ct,ut,ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,D,it,ot.width,ot.height,0,ct,ut,ot.data)}}}else{Ct=b.mipmaps,bt&&Ot&&(Ct.length>0&&Kt++,e.texStorage2D(i.TEXTURE_CUBE_MAP,Kt,it,O[0].width,O[0].height));for(let rt=0;rt<6;rt++)if(Vt){bt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,O[rt].width,O[rt].height,ct,ut,O[rt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,it,O[rt].width,O[rt].height,0,ct,ut,O[rt].data);for(let D=0;D<Ct.length;D++){let dt=Ct[D].image[rt].image;bt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,D+1,0,0,dt.width,dt.height,ct,ut,dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,D+1,it,dt.width,dt.height,0,ct,ut,dt.data)}}else{bt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,ct,ut,O[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,it,ct,ut,O[rt]);for(let D=0;D<Ct.length;D++){let ot=Ct[D];bt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,D+1,0,0,ct,ut,ot.image[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,D+1,it,ct,ut,ot.image[rt])}}}y(b,at)&&x(i.TEXTURE_CUBE_MAP),et.__version=tt.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function lt(A,b,V,Q,tt,et){let Et=r.convert(V.format,V.colorSpace),xt=r.convert(V.type),St=M(V.internalFormat,Et,xt,V.colorSpace);if(!n.get(b).__hasExternalTextures){let Vt=Math.max(1,b.width>>et),O=Math.max(1,b.height>>et);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,et,St,Vt,O,b.depth,0,Et,xt,null):e.texImage2D(tt,et,St,Vt,O,0,Et,xt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),yt(b)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,tt,n.get(V).__webglTexture,0,Pt(b)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,tt,n.get(V).__webglTexture,et),e.bindFramebuffer(i.FRAMEBUFFER,null)}function gt(A,b,V){if(i.bindRenderbuffer(i.RENDERBUFFER,A),b.depthBuffer&&!b.stencilBuffer){let Q=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(V||yt(b)){let tt=b.depthTexture;tt&&tt.isDepthTexture&&(tt.type===li?Q=i.DEPTH_COMPONENT32F:tt.type===oi&&(Q=i.DEPTH_COMPONENT24));let et=Pt(b);yt(b)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et,Q,b.width,b.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,et,Q,b.width,b.height)}else i.renderbufferStorage(i.RENDERBUFFER,Q,b.width,b.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,A)}else if(b.depthBuffer&&b.stencilBuffer){let Q=Pt(b);V&&yt(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,i.DEPTH24_STENCIL8,b.width,b.height):yt(b)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q,i.DEPTH24_STENCIL8,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,A)}else{let Q=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let tt=0;tt<Q.length;tt++){let et=Q[tt],Et=r.convert(et.format,et.colorSpace),xt=r.convert(et.type),St=M(et.internalFormat,Et,xt,et.colorSpace),Dt=Pt(b);V&&yt(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,St,b.width,b.height):yt(b)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Dt,St,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,St,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _t(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),G(b.depthTexture,0);let Q=n.get(b.depthTexture).__webglTexture,tt=Pt(b);if(b.depthTexture.format===Ii)yt(b)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(b.depthTexture.format===ys)yt(b)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function wt(A){let b=n.get(A),V=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");_t(b.__webglFramebuffer,A)}else if(V){b.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[Q]),b.__webglDepthbuffer[Q]=i.createRenderbuffer(),gt(b.__webglDepthbuffer[Q],A,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=i.createRenderbuffer(),gt(b.__webglDepthbuffer,A,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(A,b,V){let Q=n.get(A);b!==void 0&&lt(Q.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&wt(A)}function z(A){let b=A.texture,V=n.get(A),Q=n.get(b);A.addEventListener("dispose",U),A.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=b.version,a.memory.textures++);let tt=A.isWebGLCubeRenderTarget===!0,et=A.isWebGLMultipleRenderTargets===!0,Et=p(A)||o;if(tt){V.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(o&&b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer[xt]=[];for(let St=0;St<b.mipmaps.length;St++)V.__webglFramebuffer[xt][St]=i.createFramebuffer()}else V.__webglFramebuffer[xt]=i.createFramebuffer()}else{if(o&&b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer=[];for(let xt=0;xt<b.mipmaps.length;xt++)V.__webglFramebuffer[xt]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(et)if(s.drawBuffers){let xt=A.texture;for(let St=0,Dt=xt.length;St<Dt;St++){let Vt=n.get(xt[St]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&yt(A)===!1){let xt=et?b:[b];V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let St=0;St<xt.length;St++){let Dt=xt[St];V.__webglColorRenderbuffer[St]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[St]);let Vt=r.convert(Dt.format,Dt.colorSpace),O=r.convert(Dt.type),nt=M(Dt.internalFormat,Vt,O,Dt.colorSpace,A.isXRRenderTarget===!0),at=Pt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,at,nt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,V.__webglColorRenderbuffer[St])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),gt(V.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(tt){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),W(i.TEXTURE_CUBE_MAP,b,Et);for(let xt=0;xt<6;xt++)if(o&&b.mipmaps&&b.mipmaps.length>0)for(let St=0;St<b.mipmaps.length;St++)lt(V.__webglFramebuffer[xt][St],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,St);else lt(V.__webglFramebuffer[xt],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);y(b,Et)&&x(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(et){let xt=A.texture;for(let St=0,Dt=xt.length;St<Dt;St++){let Vt=xt[St],O=n.get(Vt);e.bindTexture(i.TEXTURE_2D,O.__webglTexture),W(i.TEXTURE_2D,Vt,Et),lt(V.__webglFramebuffer,A,Vt,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,0),y(Vt,Et)&&x(i.TEXTURE_2D)}e.unbindTexture()}else{let xt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?xt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(xt,Q.__webglTexture),W(xt,b,Et),o&&b.mipmaps&&b.mipmaps.length>0)for(let St=0;St<b.mipmaps.length;St++)lt(V.__webglFramebuffer[St],A,b,i.COLOR_ATTACHMENT0,xt,St);else lt(V.__webglFramebuffer,A,b,i.COLOR_ATTACHMENT0,xt,0);y(b,Et)&&x(xt),e.unbindTexture()}A.depthBuffer&&wt(A)}function he(A){let b=p(A)||o,V=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let Q=0,tt=V.length;Q<tt;Q++){let et=V[Q];if(y(et,b)){let Et=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,xt=n.get(et).__webglTexture;e.bindTexture(Et,xt),x(Et),e.unbindTexture()}}}function Tt(A){if(o&&A.samples>0&&yt(A)===!1){let b=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],V=A.width,Q=A.height,tt=i.COLOR_BUFFER_BIT,et=[],Et=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=n.get(A),St=A.isWebGLMultipleRenderTargets===!0;if(St)for(let Dt=0;Dt<b.length;Dt++)e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let Dt=0;Dt<b.length;Dt++){et.push(i.COLOR_ATTACHMENT0+Dt),A.depthBuffer&&et.push(Et);let Vt=xt.__ignoreDepthValues!==void 0?xt.__ignoreDepthValues:!1;if(Vt===!1&&(A.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),St&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xt.__webglColorRenderbuffer[Dt]),Vt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Et]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Et])),St){let O=n.get(b[Dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,O,0)}i.blitFramebuffer(0,0,V,Q,0,0,V,Q,tt,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,et)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),St)for(let Dt=0;Dt<b.length;Dt++){e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,xt.__webglColorRenderbuffer[Dt]);let Vt=n.get(b[Dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,Vt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}}function Pt(A){return Math.min(s.maxSamples,A.samples)}function yt(A){let b=n.get(A);return o&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function zt(A){let b=a.render.frame;h.get(A)!==b&&(h.set(A,b),A.update())}function It(A,b){let V=A.colorSpace,Q=A.format,tt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Hl||V!==Vn&&V!==dn&&(te.getTransfer(V)===le?o===!1?t.has("EXT_sRGB")===!0&&Q===Tn?(A.format=Hl,A.minFilter=$e,A.generateMipmaps=!1):b=Da.sRGBToLinear(b):(Q!==Tn||tt!==ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),b}this.allocateTextureUnit=C,this.resetTextureUnits=H,this.setTexture2D=G,this.setTexture2DArray=k,this.setTexture3D=P,this.setTextureCube=L,this.rebindTextures=Lt,this.setupRenderTarget=z,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=yt}function Ev(i,t,e){let n=e.isWebGL2;function s(r,a=dn){let o,l=te.getTransfer(a);if(r===ui)return i.UNSIGNED_BYTE;if(r===sf)return i.UNSIGNED_SHORT_4_4_4_4;if(r===rf)return i.UNSIGNED_SHORT_5_5_5_1;if(r===_g)return i.BYTE;if(r===xg)return i.SHORT;if(r===Rc)return i.UNSIGNED_SHORT;if(r===nf)return i.INT;if(r===oi)return i.UNSIGNED_INT;if(r===li)return i.FLOAT;if(r===ir)return n?i.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===yg)return i.ALPHA;if(r===Tn)return i.RGBA;if(r===vg)return i.LUMINANCE;if(r===Mg)return i.LUMINANCE_ALPHA;if(r===Ii)return i.DEPTH_COMPONENT;if(r===ys)return i.DEPTH_STENCIL;if(r===Hl)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Sg)return i.RED;if(r===af)return i.RED_INTEGER;if(r===bg)return i.RG;if(r===of)return i.RG_INTEGER;if(r===lf)return i.RGBA_INTEGER;if(r===tl||r===el||r===nl||r===il)if(l===le)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===tl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===el)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===nl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===il)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===tl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===el)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===nl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===il)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Eu||r===wu||r===Tu||r===Au)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Eu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===wu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Tu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Au)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===cf)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Ru||r===Cu)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Ru)return l===le?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Cu)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Pu||r===Iu||r===Lu||r===Du||r===Uu||r===Nu||r===Ou||r===Fu||r===Bu||r===ku||r===Hu||r===zu||r===Gu||r===Vu)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Pu)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Iu)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Lu)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Du)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Uu)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Nu)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ou)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Fu)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Bu)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ku)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Hu)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===zu)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Gu)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Vu)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===sl||r===Wu||r===$u)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===sl)return l===le?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Wu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===$u)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Eg||r===Xu||r===qu||r===Yu)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===sl)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Xu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===qu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Yu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Pi?n?i.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var ec=class extends Xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ve=class extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}},wv={type:"move"},Js=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let g of t.hand.values()){let p=e.getJointPose(g,n),f=this._getHandJoint(c,g);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,_=.005;c.inputState.pinching&&d>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(wv)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ve;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},nc=class extends fi{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,m=null,_=null,g=e.getContextAttributes(),p=null,f=null,y=[],x=[],M=new pt,R=null,v=new Xe;v.layers.enable(1),v.viewport=new Pe;let E=new Xe;E.layers.enable(2),E.viewport=new Pe;let U=[v,E],S=new ec;S.layers.enable(1),S.layers.enable(2);let w=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let K=y[W];return K===void 0&&(K=new Js,y[W]=K),K.getTargetRaySpace()},this.getControllerGrip=function(W){let K=y[W];return K===void 0&&(K=new Js,y[W]=K),K.getGripSpace()},this.getHand=function(W){let K=y[W];return K===void 0&&(K=new Js,y[W]=K),K.getHandSpace()};function q(W){let K=x.indexOf(W.inputSource);if(K===-1)return;let st=y[K];st!==void 0&&(st.update(W.inputSource,W.frame,c||a),st.dispatchEvent({type:W.type,data:W.inputSource}))}function H(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",C);for(let W=0;W<y.length;W++){let K=x[W];K!==null&&(x[W]=null,y[W].disconnect(K))}w=null,F=null,t.setRenderTarget(p),m=null,d=null,u=null,s=null,f=null,j.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",H),s.addEventListener("inputsourceschange",C),g.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(M),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let K={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,K),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),f=new Wn(m.framebufferWidth,m.framebufferHeight,{format:Tn,type:ui,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let K=null,st=null,ht=null;g.depth&&(ht=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=g.stencil?ys:Ii,st=g.stencil?Pi:oi);let lt={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(lt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),f=new Wn(d.textureWidth,d.textureHeight,{format:Tn,type:ui,depthTexture:new za(d.textureWidth,d.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0});let gt=t.properties.get(f);gt.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),j.setContext(s),j.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function C(W){for(let K=0;K<W.removed.length;K++){let st=W.removed[K],ht=x.indexOf(st);ht>=0&&(x[ht]=null,y[ht].disconnect(st))}for(let K=0;K<W.added.length;K++){let st=W.added[K],ht=x.indexOf(st);if(ht===-1){for(let gt=0;gt<y.length;gt++)if(gt>=x.length){x.push(st),ht=gt;break}else if(x[gt]===null){x[gt]=st,ht=gt;break}if(ht===-1)break}let lt=y[ht];lt&&lt.connect(st)}}let N=new I,G=new I;function k(W,K,st){N.setFromMatrixPosition(K.matrixWorld),G.setFromMatrixPosition(st.matrixWorld);let ht=N.distanceTo(G),lt=K.projectionMatrix.elements,gt=st.projectionMatrix.elements,_t=lt[14]/(lt[10]-1),wt=lt[14]/(lt[10]+1),Lt=(lt[9]+1)/lt[5],z=(lt[9]-1)/lt[5],he=(lt[8]-1)/lt[0],Tt=(gt[8]+1)/gt[0],Pt=_t*he,yt=_t*Tt,zt=ht/(-he+Tt),It=zt*-he;K.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(It),W.translateZ(zt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();let A=_t+zt,b=wt+zt,V=Pt-It,Q=yt+(ht-It),tt=Lt*wt/b*A,et=z*wt/b*A;W.projectionMatrix.makePerspective(V,Q,tt,et,A,b),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function P(W,K){K===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(K.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;S.near=E.near=v.near=W.near,S.far=E.far=v.far=W.far,(w!==S.near||F!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),w=S.near,F=S.far);let K=W.parent,st=S.cameras;P(S,K);for(let ht=0;ht<st.length;ht++)P(st[ht],K);st.length===2?k(S,v,E):S.projectionMatrix.copy(v.projectionMatrix),L(W,S,K)};function L(W,K,st){st===null?W.matrix.copy(K.matrixWorld):(W.matrix.copy(st.matrixWorld),W.matrix.invert(),W.matrix.multiply(K.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(K.projectionMatrix),W.projectionMatrixInverse.copy(K.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=zl*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)};let Z=null;function J(W,K){if(h=K.getViewerPose(c||a),_=K,h!==null){let st=h.views;m!==null&&(t.setRenderTargetFramebuffer(f,m.framebuffer),t.setRenderTarget(f));let ht=!1;st.length!==S.cameras.length&&(S.cameras.length=0,ht=!0);for(let lt=0;lt<st.length;lt++){let gt=st[lt],_t=null;if(m!==null)_t=m.getViewport(gt);else{let Lt=u.getViewSubImage(d,gt);_t=Lt.viewport,lt===0&&(t.setRenderTargetTextures(f,Lt.colorTexture,d.ignoreDepthValues?void 0:Lt.depthStencilTexture),t.setRenderTarget(f))}let wt=U[lt];wt===void 0&&(wt=new Xe,wt.layers.enable(lt),wt.viewport=new Pe,U[lt]=wt),wt.matrix.fromArray(gt.transform.matrix),wt.matrix.decompose(wt.position,wt.quaternion,wt.scale),wt.projectionMatrix.fromArray(gt.projectionMatrix),wt.projectionMatrixInverse.copy(wt.projectionMatrix).invert(),wt.viewport.set(_t.x,_t.y,_t.width,_t.height),lt===0&&(S.matrix.copy(wt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ht===!0&&S.cameras.push(wt)}}for(let st=0;st<y.length;st++){let ht=x[st],lt=y[st];ht!==null&&lt!==void 0&&lt.update(ht,K,c||a)}Z&&Z(W,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),_=null}let j=new gf;j.setAnimationLoop(J),this.setAnimationLoop=function(W){Z=W},this.dispose=function(){}}};function Tv(i,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,mf(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,y,x,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),u(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,M)):f.isMeshMatcapMaterial?(r(p,f),_(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),g(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,y,x):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Je&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Je&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let y=t.get(f).envMap;if(y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;let x=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*x,e(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,y,x){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*y,p.scale.value=x*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),t.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,y){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Je&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,f){f.matcap&&(p.matcap.value=f.matcap)}function g(p,f){let y=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Av(i,t,e,n){let s={},r={},a=[],o=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,x){let M=x.program;n.uniformBlockBinding(y,M)}function c(y,x){let M=s[y.id];M===void 0&&(_(y),M=h(y),s[y.id]=M,y.addEventListener("dispose",p));let R=x.program;n.updateUBOMapping(y,R);let v=t.render.frame;r[y.id]!==v&&(d(y),r[y.id]=v)}function h(y){let x=u();y.__bindingPointIndex=x;let M=i.createBuffer(),R=y.__size,v=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,R,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,M),M}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let x=s[y.id],M=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let v=0,E=M.length;v<E;v++){let U=Array.isArray(M[v])?M[v]:[M[v]];for(let S=0,w=U.length;S<w;S++){let F=U[S];if(m(F,v,S,R)===!0){let q=F.__offset,H=Array.isArray(F.value)?F.value:[F.value],C=0;for(let N=0;N<H.length;N++){let G=H[N],k=g(G);typeof G=="number"||typeof G=="boolean"?(F.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,q+C,F.__data)):G.isMatrix3?(F.__data[0]=G.elements[0],F.__data[1]=G.elements[1],F.__data[2]=G.elements[2],F.__data[3]=0,F.__data[4]=G.elements[3],F.__data[5]=G.elements[4],F.__data[6]=G.elements[5],F.__data[7]=0,F.__data[8]=G.elements[6],F.__data[9]=G.elements[7],F.__data[10]=G.elements[8],F.__data[11]=0):(G.toArray(F.__data,C),C+=k.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,q,F.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(y,x,M,R){let v=y.value,E=x+"_"+M;if(R[E]===void 0)return typeof v=="number"||typeof v=="boolean"?R[E]=v:R[E]=v.clone(),!0;{let U=R[E];if(typeof v=="number"||typeof v=="boolean"){if(U!==v)return R[E]=v,!0}else if(U.equals(v)===!1)return U.copy(v),!0}return!1}function _(y){let x=y.uniforms,M=0,R=16;for(let E=0,U=x.length;E<U;E++){let S=Array.isArray(x[E])?x[E]:[x[E]];for(let w=0,F=S.length;w<F;w++){let q=S[w],H=Array.isArray(q.value)?q.value:[q.value];for(let C=0,N=H.length;C<N;C++){let G=H[C],k=g(G),P=M%R;P!==0&&R-P<k.boundary&&(M+=R-P),q.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=M,M+=k.storage}}}let v=M%R;return v>0&&(M+=R-v),y.__size=M,y.__cache={},this}function g(y){let x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function p(y){let x=y.target;x.removeEventListener("dispose",p);let M=a.indexOf(x.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function f(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}var or=class{constructor(t={}){let{canvas:e=Og(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let m=new Uint32Array(4),_=new Int32Array(4),g=null,p=null,f=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=be,this._useLegacyLights=!1,this.toneMapping=hi,this.toneMappingExposure=1;let x=this,M=!1,R=0,v=0,E=null,U=-1,S=null,w=new Pe,F=new Pe,q=null,H=new kt(0),C=0,N=e.width,G=e.height,k=1,P=null,L=null,Z=new Pe(0,0,N,G),J=new Pe(0,0,N,G),j=!1,W=new ar,K=!1,st=!1,ht=null,lt=new ce,gt=new pt,_t=new I,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Lt(){return E===null?k:1}let z=n;function he(T,B){for(let X=0;X<T.length;X++){let Y=T[X],$=e.getContext(Y,B);if($!==null)return $}return null}try{let T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Tc}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",D,!1),e.addEventListener("webglcontextcreationerror",ot,!1),z===null){let B=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&B.shift(),z=he(B,T),z===null)throw he(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Tt,Pt,yt,zt,It,A,b,V,Q,tt,et,Et,xt,St,Dt,Vt,O,nt,at,ct,ut,it,bt,Ot;function Kt(){Tt=new Xx(z),Pt=new Hx(z,Tt,t),Tt.init(Pt),it=new Ev(z,Tt,Pt),yt=new Sv(z,Tt,Pt),zt=new Kx(z),It=new hv,A=new bv(z,Tt,yt,It,Pt,it,zt),b=new Gx(x),V=new $x(x),Q=new i0(z,Pt),bt=new Bx(z,Tt,Q,Pt),tt=new qx(z,Q,zt,bt),et=new Qx(z,tt,Q,zt),at=new jx(z,Pt,A),Vt=new zx(It),Et=new cv(x,b,V,Tt,Pt,bt,Vt),xt=new Tv(x,It),St=new dv,Dt=new xv(Tt,Pt),nt=new Fx(x,b,V,yt,et,d,l),O=new Mv(x,et,Pt),Ot=new Av(z,zt,Pt,yt),ct=new kx(z,Tt,zt,Pt),ut=new Yx(z,Tt,zt,Pt),zt.programs=Et.programs,x.capabilities=Pt,x.extensions=Tt,x.properties=It,x.renderLists=St,x.shadowMap=O,x.state=yt,x.info=zt}Kt();let Ct=new nc(x,z);this.xr=Ct,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let T=Tt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Tt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(T){T!==void 0&&(k=T,this.setSize(N,G,!1))},this.getSize=function(T){return T.set(N,G)},this.setSize=function(T,B,X=!0){if(Ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=T,G=B,e.width=Math.floor(T*k),e.height=Math.floor(B*k),X===!0&&(e.style.width=T+"px",e.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(N*k,G*k).floor()},this.setDrawingBufferSize=function(T,B,X){N=T,G=B,k=X,e.width=Math.floor(T*X),e.height=Math.floor(B*X),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(w)},this.getViewport=function(T){return T.copy(Z)},this.setViewport=function(T,B,X,Y){T.isVector4?Z.set(T.x,T.y,T.z,T.w):Z.set(T,B,X,Y),yt.viewport(w.copy(Z).multiplyScalar(k).floor())},this.getScissor=function(T){return T.copy(J)},this.setScissor=function(T,B,X,Y){T.isVector4?J.set(T.x,T.y,T.z,T.w):J.set(T,B,X,Y),yt.scissor(F.copy(J).multiplyScalar(k).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(T){yt.setScissorTest(j=T)},this.setOpaqueSort=function(T){P=T},this.setTransparentSort=function(T){L=T},this.getClearColor=function(T){return T.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor.apply(nt,arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha.apply(nt,arguments)},this.clear=function(T=!0,B=!0,X=!0){let Y=0;if(T){let $=!1;if(E!==null){let Mt=E.texture.format;$=Mt===lf||Mt===of||Mt===af}if($){let Mt=E.texture.type,Rt=Mt===ui||Mt===oi||Mt===Rc||Mt===Pi||Mt===sf||Mt===rf,Nt=nt.getClearColor(),Bt=nt.getClearAlpha(),Xt=Nt.r,Gt=Nt.g,Wt=Nt.b;Rt?(m[0]=Xt,m[1]=Gt,m[2]=Wt,m[3]=Bt,z.clearBufferuiv(z.COLOR,0,m)):(_[0]=Xt,_[1]=Gt,_[2]=Wt,_[3]=Bt,z.clearBufferiv(z.COLOR,0,_))}else Y|=z.COLOR_BUFFER_BIT}B&&(Y|=z.DEPTH_BUFFER_BIT),X&&(Y|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",D,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),St.dispose(),Dt.dispose(),It.dispose(),b.dispose(),V.dispose(),et.dispose(),bt.dispose(),Ot.dispose(),Et.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",ze),Ct.removeEventListener("sessionend",re),ht&&(ht.dispose(),ht=null),Ge.stop()};function rt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let T=zt.autoReset,B=O.enabled,X=O.autoUpdate,Y=O.needsUpdate,$=O.type;Kt(),zt.autoReset=T,O.enabled=B,O.autoUpdate=X,O.needsUpdate=Y,O.type=$}function ot(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function dt(T){let B=T.target;B.removeEventListener("dispose",dt),Ft(B)}function Ft(T){Ut(T),It.remove(T)}function Ut(T){let B=It.get(T).programs;B!==void 0&&(B.forEach(function(X){Et.releaseProgram(X)}),T.isShaderMaterial&&Et.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,X,Y,$,Mt){B===null&&(B=wt);let Rt=$.isMesh&&$.matrixWorld.determinant()<0,Nt=cm(T,B,X,Y,$);yt.setMaterial(Y,Rt);let Bt=X.index,Xt=1;if(Y.wireframe===!0){if(Bt=tt.getWireframeAttribute(X),Bt===void 0)return;Xt=2}let Gt=X.drawRange,Wt=X.attributes.position,ge=Gt.start*Xt,en=(Gt.start+Gt.count)*Xt;Mt!==null&&(ge=Math.max(ge,Mt.start*Xt),en=Math.min(en,(Mt.start+Mt.count)*Xt)),Bt!==null?(ge=Math.max(ge,0),en=Math.min(en,Bt.count)):Wt!=null&&(ge=Math.max(ge,0),en=Math.min(en,Wt.count));let Re=en-ge;if(Re<0||Re===1/0)return;bt.setup($,Y,Nt,X,Bt);let Nn,fe=ct;if(Bt!==null&&(Nn=Q.get(Bt),fe=ut,fe.setIndex(Nn)),$.isMesh)Y.wireframe===!0?(yt.setLineWidth(Y.wireframeLinewidth*Lt()),fe.setMode(z.LINES)):fe.setMode(z.TRIANGLES);else if($.isLine){let qt=Y.linewidth;qt===void 0&&(qt=1),yt.setLineWidth(qt*Lt()),$.isLineSegments?fe.setMode(z.LINES):$.isLineLoop?fe.setMode(z.LINE_LOOP):fe.setMode(z.LINE_STRIP)}else $.isPoints?fe.setMode(z.POINTS):$.isSprite&&fe.setMode(z.TRIANGLES);if($.isBatchedMesh)fe.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else if($.isInstancedMesh)fe.renderInstances(ge,Re,$.count);else if(X.isInstancedBufferGeometry){let qt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,ko=Math.min(X.instanceCount,qt);fe.renderInstances(ge,Re,ko)}else fe.render(ge,Re)};function ie(T,B,X){T.transparent===!0&&T.side===_e&&T.forceSinglePass===!1?(T.side=Je,T.needsUpdate=!0,Fr(T,B,X),T.side=di,T.needsUpdate=!0,Fr(T,B,X),T.side=_e):Fr(T,B,X)}this.compile=function(T,B,X=null){X===null&&(X=T),p=Dt.get(X),p.init(),y.push(p),X.traverseVisible(function($){$.isLight&&$.layers.test(B.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),T!==X&&T.traverseVisible(function($){$.isLight&&$.layers.test(B.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),p.setupLights(x._useLegacyLights);let Y=new Set;return T.traverse(function($){let Mt=$.material;if(Mt)if(Array.isArray(Mt))for(let Rt=0;Rt<Mt.length;Rt++){let Nt=Mt[Rt];ie(Nt,X,$),Y.add(Nt)}else ie(Mt,X,$),Y.add(Mt)}),y.pop(),p=null,Y},this.compileAsync=function(T,B,X=null){let Y=this.compile(T,B,X);return new Promise($=>{function Mt(){if(Y.forEach(function(Rt){It.get(Rt).currentProgram.isReady()&&Y.delete(Rt)}),Y.size===0){$(T);return}setTimeout(Mt,10)}Tt.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let se=null;function Ae(T){se&&se(T)}function ze(){Ge.stop()}function re(){Ge.start()}let Ge=new gf;Ge.setAnimationLoop(Ae),typeof self<"u"&&Ge.setContext(self),this.setAnimationLoop=function(T){se=T,Ct.setAnimationLoop(T),T===null?Ge.stop():Ge.start()},Ct.addEventListener("sessionstart",ze),Ct.addEventListener("sessionend",re),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(B),B=Ct.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,B,E),p=Dt.get(T,y.length),p.init(),y.push(p),lt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),W.setFromProjectionMatrix(lt),st=this.localClippingEnabled,K=Vt.init(this.clippingPlanes,st),g=St.get(T,f.length),g.init(),f.push(g),Pn(T,B,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(P,L),this.info.render.frame++,K===!0&&Vt.beginShadows();let X=p.state.shadowsArray;if(O.render(X,T,B),K===!0&&Vt.endShadows(),this.info.autoReset===!0&&this.info.reset(),nt.render(g,T),p.setupLights(x._useLegacyLights),B.isArrayCamera){let Y=B.cameras;for(let $=0,Mt=Y.length;$<Mt;$++){let Rt=Y[$];Uh(g,T,Rt,Rt.viewport)}}else Uh(g,T,B);E!==null&&(A.updateMultisampleRenderTarget(E),A.updateRenderTargetMipmap(E)),T.isScene===!0&&T.onAfterRender(x,T,B),bt.resetDefaultState(),U=-1,S=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,f.pop(),f.length>0?g=f[f.length-1]:g=null};function Pn(T,B,X,Y){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||W.intersectsSprite(T)){Y&&_t.setFromMatrixPosition(T.matrixWorld).applyMatrix4(lt);let Rt=et.update(T),Nt=T.material;Nt.visible&&g.push(T,Rt,Nt,X,_t.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||W.intersectsObject(T))){let Rt=et.update(T),Nt=T.material;if(Y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),_t.copy(T.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),_t.copy(Rt.boundingSphere.center)),_t.applyMatrix4(T.matrixWorld).applyMatrix4(lt)),Array.isArray(Nt)){let Bt=Rt.groups;for(let Xt=0,Gt=Bt.length;Xt<Gt;Xt++){let Wt=Bt[Xt],ge=Nt[Wt.materialIndex];ge&&ge.visible&&g.push(T,Rt,ge,X,_t.z,Wt)}}else Nt.visible&&g.push(T,Rt,Nt,X,_t.z,null)}}let Mt=T.children;for(let Rt=0,Nt=Mt.length;Rt<Nt;Rt++)Pn(Mt[Rt],B,X,Y)}function Uh(T,B,X,Y){let $=T.opaque,Mt=T.transmissive,Rt=T.transparent;p.setupLightsView(X),K===!0&&Vt.setGlobalState(x.clippingPlanes,X),Mt.length>0&&lm($,Mt,B,X),Y&&yt.viewport(w.copy(Y)),$.length>0&&Or($,B,X),Mt.length>0&&Or(Mt,B,X),Rt.length>0&&Or(Rt,B,X),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function lm(T,B,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;let Mt=Pt.isWebGL2;ht===null&&(ht=new Wn(1,1,{generateMipmaps:!0,type:Tt.has("EXT_color_buffer_half_float")?ir:ui,minFilter:nr,samples:Mt?4:0})),x.getDrawingBufferSize(gt),Mt?ht.setSize(gt.x,gt.y):ht.setSize(Gl(gt.x),Gl(gt.y));let Rt=x.getRenderTarget();x.setRenderTarget(ht),x.getClearColor(H),C=x.getClearAlpha(),C<1&&x.setClearColor(16777215,.5),x.clear();let Nt=x.toneMapping;x.toneMapping=hi,Or(T,X,Y),A.updateMultisampleRenderTarget(ht),A.updateRenderTargetMipmap(ht);let Bt=!1;for(let Xt=0,Gt=B.length;Xt<Gt;Xt++){let Wt=B[Xt],ge=Wt.object,en=Wt.geometry,Re=Wt.material,Nn=Wt.group;if(Re.side===_e&&ge.layers.test(Y.layers)){let fe=Re.side;Re.side=Je,Re.needsUpdate=!0,Nh(ge,X,Y,en,Re,Nn),Re.side=fe,Re.needsUpdate=!0,Bt=!0}}Bt===!0&&(A.updateMultisampleRenderTarget(ht),A.updateRenderTargetMipmap(ht)),x.setRenderTarget(Rt),x.setClearColor(H,C),x.toneMapping=Nt}function Or(T,B,X){let Y=B.isScene===!0?B.overrideMaterial:null;for(let $=0,Mt=T.length;$<Mt;$++){let Rt=T[$],Nt=Rt.object,Bt=Rt.geometry,Xt=Y===null?Rt.material:Y,Gt=Rt.group;Nt.layers.test(X.layers)&&Nh(Nt,B,X,Bt,Xt,Gt)}}function Nh(T,B,X,Y,$,Mt){T.onBeforeRender(x,B,X,Y,$,Mt),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),$.onBeforeRender(x,B,X,Y,T,Mt),$.transparent===!0&&$.side===_e&&$.forceSinglePass===!1?($.side=Je,$.needsUpdate=!0,x.renderBufferDirect(X,B,Y,$,T,Mt),$.side=di,$.needsUpdate=!0,x.renderBufferDirect(X,B,Y,$,T,Mt),$.side=_e):x.renderBufferDirect(X,B,Y,$,T,Mt),T.onAfterRender(x,B,X,Y,$,Mt)}function Fr(T,B,X){B.isScene!==!0&&(B=wt);let Y=It.get(T),$=p.state.lights,Mt=p.state.shadowsArray,Rt=$.state.version,Nt=Et.getParameters(T,$.state,Mt,B,X),Bt=Et.getProgramCacheKey(Nt),Xt=Y.programs;Y.environment=T.isMeshStandardMaterial?B.environment:null,Y.fog=B.fog,Y.envMap=(T.isMeshStandardMaterial?V:b).get(T.envMap||Y.environment),Xt===void 0&&(T.addEventListener("dispose",dt),Xt=new Map,Y.programs=Xt);let Gt=Xt.get(Bt);if(Gt!==void 0){if(Y.currentProgram===Gt&&Y.lightsStateVersion===Rt)return Fh(T,Nt),Gt}else Nt.uniforms=Et.getUniforms(T),T.onBuild(X,Nt,x),T.onBeforeCompile(Nt,x),Gt=Et.acquireProgram(Nt,Bt),Xt.set(Bt,Gt),Y.uniforms=Nt.uniforms;let Wt=Y.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Wt.clippingPlanes=Vt.uniform),Fh(T,Nt),Y.needsLights=um(T),Y.lightsStateVersion=Rt,Y.needsLights&&(Wt.ambientLightColor.value=$.state.ambient,Wt.lightProbe.value=$.state.probe,Wt.directionalLights.value=$.state.directional,Wt.directionalLightShadows.value=$.state.directionalShadow,Wt.spotLights.value=$.state.spot,Wt.spotLightShadows.value=$.state.spotShadow,Wt.rectAreaLights.value=$.state.rectArea,Wt.ltc_1.value=$.state.rectAreaLTC1,Wt.ltc_2.value=$.state.rectAreaLTC2,Wt.pointLights.value=$.state.point,Wt.pointLightShadows.value=$.state.pointShadow,Wt.hemisphereLights.value=$.state.hemi,Wt.directionalShadowMap.value=$.state.directionalShadowMap,Wt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Wt.spotShadowMap.value=$.state.spotShadowMap,Wt.spotLightMatrix.value=$.state.spotLightMatrix,Wt.spotLightMap.value=$.state.spotLightMap,Wt.pointShadowMap.value=$.state.pointShadowMap,Wt.pointShadowMatrix.value=$.state.pointShadowMatrix),Y.currentProgram=Gt,Y.uniformsList=null,Gt}function Oh(T){if(T.uniformsList===null){let B=T.currentProgram.getUniforms();T.uniformsList=gs.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function Fh(T,B){let X=It.get(T);X.outputColorSpace=B.outputColorSpace,X.batching=B.batching,X.instancing=B.instancing,X.instancingColor=B.instancingColor,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function cm(T,B,X,Y,$){B.isScene!==!0&&(B=wt),A.resetTextureUnits();let Mt=B.fog,Rt=Y.isMeshStandardMaterial?B.environment:null,Nt=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Vn,Bt=(Y.isMeshStandardMaterial?V:b).get(Y.envMap||Rt),Xt=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Gt=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Wt=!!X.morphAttributes.position,ge=!!X.morphAttributes.normal,en=!!X.morphAttributes.color,Re=hi;Y.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Re=x.toneMapping);let Nn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,fe=Nn!==void 0?Nn.length:0,qt=It.get(Y),ko=p.state.lights;if(K===!0&&(st===!0||T!==S)){let ln=T===S&&Y.id===U;Vt.setState(Y,T,ln)}let me=!1;Y.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==ko.state.version||qt.outputColorSpace!==Nt||$.isBatchedMesh&&qt.batching===!1||!$.isBatchedMesh&&qt.batching===!0||$.isInstancedMesh&&qt.instancing===!1||!$.isInstancedMesh&&qt.instancing===!0||$.isSkinnedMesh&&qt.skinning===!1||!$.isSkinnedMesh&&qt.skinning===!0||$.isInstancedMesh&&qt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&qt.instancingColor===!1&&$.instanceColor!==null||qt.envMap!==Bt||Y.fog===!0&&qt.fog!==Mt||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==Vt.numPlanes||qt.numIntersection!==Vt.numIntersection)||qt.vertexAlphas!==Xt||qt.vertexTangents!==Gt||qt.morphTargets!==Wt||qt.morphNormals!==ge||qt.morphColors!==en||qt.toneMapping!==Re||Pt.isWebGL2===!0&&qt.morphTargetsCount!==fe)&&(me=!0):(me=!0,qt.__version=Y.version);let yi=qt.currentProgram;me===!0&&(yi=Fr(Y,B,$));let Bh=!1,Ns=!1,Ho=!1,Fe=yi.getUniforms(),vi=qt.uniforms;if(yt.useProgram(yi.program)&&(Bh=!0,Ns=!0,Ho=!0),Y.id!==U&&(U=Y.id,Ns=!0),Bh||S!==T){Fe.setValue(z,"projectionMatrix",T.projectionMatrix),Fe.setValue(z,"viewMatrix",T.matrixWorldInverse);let ln=Fe.map.cameraPosition;ln!==void 0&&ln.setValue(z,_t.setFromMatrixPosition(T.matrixWorld)),Pt.logarithmicDepthBuffer&&Fe.setValue(z,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Fe.setValue(z,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,Ns=!0,Ho=!0)}if($.isSkinnedMesh){Fe.setOptional(z,$,"bindMatrix"),Fe.setOptional(z,$,"bindMatrixInverse");let ln=$.skeleton;ln&&(Pt.floatVertexTextures?(ln.boneTexture===null&&ln.computeBoneTexture(),Fe.setValue(z,"boneTexture",ln.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}$.isBatchedMesh&&(Fe.setOptional(z,$,"batchingTexture"),Fe.setValue(z,"batchingTexture",$._matricesTexture,A));let zo=X.morphAttributes;if((zo.position!==void 0||zo.normal!==void 0||zo.color!==void 0&&Pt.isWebGL2===!0)&&at.update($,X,yi),(Ns||qt.receiveShadow!==$.receiveShadow)&&(qt.receiveShadow=$.receiveShadow,Fe.setValue(z,"receiveShadow",$.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(vi.envMap.value=Bt,vi.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),Ns&&(Fe.setValue(z,"toneMappingExposure",x.toneMappingExposure),qt.needsLights&&hm(vi,Ho),Mt&&Y.fog===!0&&xt.refreshFogUniforms(vi,Mt),xt.refreshMaterialUniforms(vi,Y,k,G,ht),gs.upload(z,Oh(qt),vi,A)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(gs.upload(z,Oh(qt),vi,A),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Fe.setValue(z,"center",$.center),Fe.setValue(z,"modelViewMatrix",$.modelViewMatrix),Fe.setValue(z,"normalMatrix",$.normalMatrix),Fe.setValue(z,"modelMatrix",$.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let ln=Y.uniformsGroups;for(let Go=0,dm=ln.length;Go<dm;Go++)if(Pt.isWebGL2){let kh=ln[Go];Ot.update(kh,yi),Ot.bind(kh,yi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return yi}function hm(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function um(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(T,B,X){It.get(T.texture).__webglTexture=B,It.get(T.depthTexture).__webglTexture=X;let Y=It.get(T);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||Tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,B){let X=It.get(T);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,X=0){E=T,R=B,v=X;let Y=!0,$=null,Mt=!1,Rt=!1;if(T){let Bt=It.get(T);Bt.__useDefaultFramebuffer!==void 0?(yt.bindFramebuffer(z.FRAMEBUFFER,null),Y=!1):Bt.__webglFramebuffer===void 0?A.setupRenderTarget(T):Bt.__hasExternalTextures&&A.rebindTextures(T,It.get(T.texture).__webglTexture,It.get(T.depthTexture).__webglTexture);let Xt=T.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Rt=!0);let Gt=It.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Gt[B])?$=Gt[B][X]:$=Gt[B],Mt=!0):Pt.isWebGL2&&T.samples>0&&A.useMultisampledRTT(T)===!1?$=It.get(T).__webglMultisampledFramebuffer:Array.isArray(Gt)?$=Gt[X]:$=Gt,w.copy(T.viewport),F.copy(T.scissor),q=T.scissorTest}else w.copy(Z).multiplyScalar(k).floor(),F.copy(J).multiplyScalar(k).floor(),q=j;if(yt.bindFramebuffer(z.FRAMEBUFFER,$)&&Pt.drawBuffers&&Y&&yt.drawBuffers(T,$),yt.viewport(w),yt.scissor(F),yt.setScissorTest(q),Mt){let Bt=It.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+B,Bt.__webglTexture,X)}else if(Rt){let Bt=It.get(T.texture),Xt=B||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Bt.__webglTexture,X||0,Xt)}U=-1},this.readRenderTargetPixels=function(T,B,X,Y,$,Mt,Rt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=It.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Rt!==void 0&&(Nt=Nt[Rt]),Nt){yt.bindFramebuffer(z.FRAMEBUFFER,Nt);try{let Bt=T.texture,Xt=Bt.format,Gt=Bt.type;if(Xt!==Tn&&it.convert(Xt)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Wt=Gt===ir&&(Tt.has("EXT_color_buffer_half_float")||Pt.isWebGL2&&Tt.has("EXT_color_buffer_float"));if(Gt!==ui&&it.convert(Gt)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Gt===li&&(Pt.isWebGL2||Tt.has("OES_texture_float")||Tt.has("WEBGL_color_buffer_float")))&&!Wt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-Y&&X>=0&&X<=T.height-$&&z.readPixels(B,X,Y,$,it.convert(Xt),it.convert(Gt),Mt)}finally{let Bt=E!==null?It.get(E).__webglFramebuffer:null;yt.bindFramebuffer(z.FRAMEBUFFER,Bt)}}},this.copyFramebufferToTexture=function(T,B,X=0){let Y=Math.pow(2,-X),$=Math.floor(B.image.width*Y),Mt=Math.floor(B.image.height*Y);A.setTexture2D(B,0),z.copyTexSubImage2D(z.TEXTURE_2D,X,0,0,T.x,T.y,$,Mt),yt.unbindTexture()},this.copyTextureToTexture=function(T,B,X,Y=0){let $=B.image.width,Mt=B.image.height,Rt=it.convert(X.format),Nt=it.convert(X.type);A.setTexture2D(X,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,X.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,X.unpackAlignment),B.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Y,T.x,T.y,$,Mt,Rt,Nt,B.image.data):B.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Y,T.x,T.y,B.mipmaps[0].width,B.mipmaps[0].height,Rt,B.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,Y,T.x,T.y,Rt,Nt,B.image),Y===0&&X.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),yt.unbindTexture()},this.copyTextureToTexture3D=function(T,B,X,Y,$=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Mt=T.max.x-T.min.x+1,Rt=T.max.y-T.min.y+1,Nt=T.max.z-T.min.z+1,Bt=it.convert(Y.format),Xt=it.convert(Y.type),Gt;if(Y.isData3DTexture)A.setTexture3D(Y,0),Gt=z.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)A.setTexture2DArray(Y,0),Gt=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,Y.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,Y.unpackAlignment);let Wt=z.getParameter(z.UNPACK_ROW_LENGTH),ge=z.getParameter(z.UNPACK_IMAGE_HEIGHT),en=z.getParameter(z.UNPACK_SKIP_PIXELS),Re=z.getParameter(z.UNPACK_SKIP_ROWS),Nn=z.getParameter(z.UNPACK_SKIP_IMAGES),fe=X.isCompressedTexture?X.mipmaps[$]:X.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,fe.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,fe.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,T.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,T.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,T.min.z),X.isDataTexture||X.isData3DTexture?z.texSubImage3D(Gt,$,B.x,B.y,B.z,Mt,Rt,Nt,Bt,Xt,fe.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Gt,$,B.x,B.y,B.z,Mt,Rt,Nt,Bt,fe.data)):z.texSubImage3D(Gt,$,B.x,B.y,B.z,Mt,Rt,Nt,Bt,Xt,fe),z.pixelStorei(z.UNPACK_ROW_LENGTH,Wt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ge),z.pixelStorei(z.UNPACK_SKIP_PIXELS,en),z.pixelStorei(z.UNPACK_SKIP_ROWS,Re),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Nn),$===0&&Y.generateMipmaps&&z.generateMipmap(Gt),yt.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?A.setTextureCube(T,0):T.isData3DTexture?A.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?A.setTexture2DArray(T,0):A.setTexture2D(T,0),yt.unbindTexture()},this.resetState=function(){R=0,v=0,E=null,yt.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Cc?"display-p3":"srgb",e.unpackColorSpace=te.workingColorSpace===io?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===be?Li:hf}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Li?be:Vn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},ic=class extends or{};ic.prototype.isWebGL1Renderer=!0;var Ga=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new kt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},lr=class extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var cr=class extends Ie{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},cs=new ce,kd=new ce,ya=[],Hd=new $n,Rv=new ce,Ys=new vt,Ks=new pi,Va=class extends vt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new cr(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Rv)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new $n),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,cs),Hd.copy(t.boundingBox).applyMatrix4(cs),this.boundingBox.union(Hd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new pi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,cs),Ks.copy(t.boundingSphere).applyMatrix4(cs),this.boundingSphere.union(Ks)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Ys.geometry=this.geometry,Ys.material=this.material,Ys.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ks.copy(this.boundingSphere),Ks.applyMatrix4(n),t.ray.intersectsSphere(Ks)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,cs),kd.multiplyMatrices(n,cs),Ys.matrixWorld=kd,Ys.raycast(t,ya);for(let a=0,o=ya.length;a<o;a++){let l=ya[a];l.instanceId=r,l.object=this,e.push(l)}ya.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new cr(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var hr=class extends mi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},zd=new I,Gd=new I,Vd=new ce,Pl=new sr,va=new pi,sc=class extends Le{constructor(t=new Ee,e=new hr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)zd.fromBufferAttribute(e,s-1),Gd.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=zd.distanceTo(Gd);t.setAttribute("lineDistance",new Zt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),va.copy(n.boundingSphere),va.applyMatrix4(s),va.radius+=r,t.ray.intersectsSphere(va)===!1)return;Vd.copy(s).invert(),Pl.copy(t.ray).applyMatrix4(Vd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new I,h=new I,u=new I,d=new I,m=this.isLineSegments?2:1,_=n.index,p=n.attributes.position;if(_!==null){let f=Math.max(0,a.start),y=Math.min(_.count,a.start+a.count);for(let x=f,M=y-1;x<M;x+=m){let R=_.getX(x),v=_.getX(x+1);if(c.fromBufferAttribute(p,R),h.fromBufferAttribute(p,v),Pl.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let U=t.ray.origin.distanceTo(d);U<t.near||U>t.far||e.push({distance:U,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{let f=Math.max(0,a.start),y=Math.min(p.count,a.start+a.count);for(let x=f,M=y-1;x<M;x+=m){if(c.fromBufferAttribute(p,x),h.fromBufferAttribute(p,x+1),Pl.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let v=t.ray.origin.distanceTo(d);v<t.near||v>t.far||e.push({distance:v,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},Wd=new I,$d=new I,Wa=class extends sc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Wd.fromBufferAttribute(e,s),$d.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Wd.distanceTo($d);t.setAttribute("lineDistance",new Zt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var bs=class extends fn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},pn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,m=(a-h)/d;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new pt:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new I,s=[],r=[],a=[],o=new I,l=new ce;for(let m=0;m<=t;m++){let _=m/t;s[m]=this.getTangentAt(_,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();let _=Math.acos(Oe(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(o,_))}a[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(Oe(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(m=-m);for(let _=1;_<=t;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],m*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ur=class extends pn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e){let n=e||new pt,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,m=c-this.aY;l=d*h-m*u+this.aX,c=d*u+m*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},rc=class extends ur{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Ic(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,m=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,m*=h,s(a,o,d,m)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Ma=new I,Il=new Ic,Ll=new Ic,Dl=new Ic,ac=class extends pn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Ma.subVectors(s[0],s[1]).add(s[0]),c=Ma);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Ma.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ma),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,_=Math.pow(c.distanceToSquared(u),m),g=Math.pow(u.distanceToSquared(d),m),p=Math.pow(d.distanceToSquared(h),m);g<1e-4&&(g=1),_<1e-4&&(_=g),p<1e-4&&(p=g),Il.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,_,g,p),Ll.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,_,g,p),Dl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,_,g,p)}else this.curveType==="catmullrom"&&(Il.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ll.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Dl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Il.calc(l),Ll.calc(l),Dl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Xd(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Cv(i,t){let e=1-i;return e*e*t}function Pv(i,t){return 2*(1-i)*i*t}function Iv(i,t){return i*i*t}function js(i,t,e,n){return Cv(i,t)+Pv(i,e)+Iv(i,n)}function Lv(i,t){let e=1-i;return e*e*e*t}function Dv(i,t){let e=1-i;return 3*e*e*i*t}function Uv(i,t){return 3*(1-i)*i*i*t}function Nv(i,t){return i*i*i*t}function Qs(i,t,e,n,s){return Lv(i,t)+Dv(i,e)+Uv(i,n)+Nv(i,s)}var $a=class extends pn{constructor(t=new pt,e=new pt,n=new pt,s=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new pt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Qs(t,s.x,r.x,a.x,o.x),Qs(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},oc=class extends pn{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Qs(t,s.x,r.x,a.x,o.x),Qs(t,s.y,r.y,a.y,o.y),Qs(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Xa=class extends pn{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},lc=class extends pn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},qa=class extends pn{constructor(t=new pt,e=new pt,n=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new pt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(js(t,s.x,r.x,a.x),js(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},cc=class extends pn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(js(t,s.x,r.x,a.x),js(t,s.y,r.y,a.y),js(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ya=class extends pn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Xd(o,l.x,c.x,h.x,u.x),Xd(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new pt().fromArray(s))}return this}},qd=Object.freeze({__proto__:null,ArcCurve:rc,CatmullRomCurve3:ac,CubicBezierCurve:$a,CubicBezierCurve3:oc,EllipseCurve:ur,LineCurve:Xa,LineCurve3:lc,QuadraticBezierCurve:qa,QuadraticBezierCurve3:cc,SplineCurve:Ya}),hc=class extends pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new qd[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new qd[s.type]().fromJSON(s))}return this}},Di=class extends hc{constructor(t){super(),this.type="Path",this.currentPoint=new pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Xa(this.currentPoint.clone(),new pt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new qa(this.currentPoint.clone(),new pt(t,e),new pt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new $a(this.currentPoint.clone(),new pt(t,e),new pt(n,s),new pt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ya(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new ur(t,e,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},dr=class i extends Ee{constructor(t=[new pt(0,-.5),new pt(.5,0),new pt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Oe(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,u=new I,d=new pt,m=new I,_=new I,g=new I,p=0,f=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:p=t[y+1].x-t[y].x,f=t[y+1].y-t[y].y,m.x=f*1,m.y=-p,m.z=f*0,g.copy(m),m.normalize(),l.push(m.x,m.y,m.z);break;case t.length-1:l.push(g.x,g.y,g.z);break;default:p=t[y+1].x-t[y].x,f=t[y+1].y-t[y].y,m.x=f*1,m.y=-p,m.z=f*0,_.copy(m),m.x+=g.x,m.y+=g.y,m.z+=g.z,m.normalize(),l.push(m.x,m.y,m.z),g.copy(_)}for(let y=0;y<=e;y++){let x=n+y*h*s,M=Math.sin(x),R=Math.cos(x);for(let v=0;v<=t.length-1;v++){u.x=t[v].x*M,u.y=t[v].y,u.z=t[v].x*R,a.push(u.x,u.y,u.z),d.x=y/e,d.y=v/(t.length-1),o.push(d.x,d.y);let E=l[3*v+0]*M,U=l[3*v+1],S=l[3*v+0]*R;c.push(E,U,S)}}for(let y=0;y<e;y++)for(let x=0;x<t.length-1;x++){let M=x+y*t.length,R=M,v=M+t.length,E=M+t.length+1,U=M+1;r.push(R,v,U),r.push(E,U,v)}this.setIndex(r),this.setAttribute("position",new Zt(a,3)),this.setAttribute("uv",new Zt(o,2)),this.setAttribute("normal",new Zt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},fr=class i extends dr{constructor(t=1,e=1,n=4,s=8){let r=new Di;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},Ka=class i extends Ee{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new I,h=new pt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let m=n+u/e*s;c.x=t*Math.cos(m),c.y=t*Math.sin(m),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Zt(a,3)),this.setAttribute("normal",new Zt(o,3)),this.setAttribute("uv",new Zt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},mn=class i extends Ee{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],m=[],_=0,g=[],p=n/2,f=0;y(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Zt(u,3)),this.setAttribute("normal",new Zt(d,3)),this.setAttribute("uv",new Zt(m,2));function y(){let M=new I,R=new I,v=0,E=(e-t)/n;for(let U=0;U<=r;U++){let S=[],w=U/r,F=w*(e-t)+t;for(let q=0;q<=s;q++){let H=q/s,C=H*l+o,N=Math.sin(C),G=Math.cos(C);R.x=F*N,R.y=-w*n+p,R.z=F*G,u.push(R.x,R.y,R.z),M.set(N,E,G).normalize(),d.push(M.x,M.y,M.z),m.push(H,1-w),S.push(_++)}g.push(S)}for(let U=0;U<s;U++)for(let S=0;S<r;S++){let w=g[S][U],F=g[S+1][U],q=g[S+1][U+1],H=g[S][U+1];h.push(w,F,H),h.push(F,q,H),v+=6}c.addGroup(f,v,0),f+=v}function x(M){let R=_,v=new pt,E=new I,U=0,S=M===!0?t:e,w=M===!0?1:-1;for(let q=1;q<=s;q++)u.push(0,p*w,0),d.push(0,w,0),m.push(.5,.5),_++;let F=_;for(let q=0;q<=s;q++){let C=q/s*l+o,N=Math.cos(C),G=Math.sin(C);E.x=S*G,E.y=p*w,E.z=S*N,u.push(E.x,E.y,E.z),d.push(0,w,0),v.x=N*.5+.5,v.y=G*.5*w+.5,m.push(v.x,v.y),_++}for(let q=0;q<s;q++){let H=R+q,C=F+q;M===!0?h.push(C,C+1,H):h.push(C+1,C,H),U+=3}c.addGroup(f,U,M===!0?1:2),f+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},gn=class i extends mn{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Za=class i extends Ee{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Zt(r,3)),this.setAttribute("normal",new Zt(r.slice(),3)),this.setAttribute("uv",new Zt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let x=new I,M=new I,R=new I;for(let v=0;v<e.length;v+=3)m(e[v+0],x),m(e[v+1],M),m(e[v+2],R),l(x,M,R,y)}function l(y,x,M,R){let v=R+1,E=[];for(let U=0;U<=v;U++){E[U]=[];let S=y.clone().lerp(M,U/v),w=x.clone().lerp(M,U/v),F=v-U;for(let q=0;q<=F;q++)q===0&&U===v?E[U][q]=S:E[U][q]=S.clone().lerp(w,q/F)}for(let U=0;U<v;U++)for(let S=0;S<2*(v-U)-1;S++){let w=Math.floor(S/2);S%2===0?(d(E[U][w+1]),d(E[U+1][w]),d(E[U][w])):(d(E[U][w+1]),d(E[U+1][w+1]),d(E[U+1][w]))}}function c(y){let x=new I;for(let M=0;M<r.length;M+=3)x.x=r[M+0],x.y=r[M+1],x.z=r[M+2],x.normalize().multiplyScalar(y),r[M+0]=x.x,r[M+1]=x.y,r[M+2]=x.z}function h(){let y=new I;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];let M=p(y)/2/Math.PI+.5,R=f(y)/Math.PI+.5;a.push(M,1-R)}_(),u()}function u(){for(let y=0;y<a.length;y+=6){let x=a[y+0],M=a[y+2],R=a[y+4],v=Math.max(x,M,R),E=Math.min(x,M,R);v>.9&&E<.1&&(x<.2&&(a[y+0]+=1),M<.2&&(a[y+2]+=1),R<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function m(y,x){let M=y*3;x.x=t[M+0],x.y=t[M+1],x.z=t[M+2]}function _(){let y=new I,x=new I,M=new I,R=new I,v=new pt,E=new pt,U=new pt;for(let S=0,w=0;S<r.length;S+=9,w+=6){y.set(r[S+0],r[S+1],r[S+2]),x.set(r[S+3],r[S+4],r[S+5]),M.set(r[S+6],r[S+7],r[S+8]),v.set(a[w+0],a[w+1]),E.set(a[w+2],a[w+3]),U.set(a[w+4],a[w+5]),R.copy(y).add(x).add(M).divideScalar(3);let F=p(R);g(v,w+0,y,F),g(E,w+2,x,F),g(U,w+4,M,F)}}function g(y,x,M,R){R<0&&y.x===1&&(a[x]=y.x-1),M.x===0&&M.z===0&&(a[x]=R/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function f(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},Ja=class i extends Za{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Ui=class extends Di{constructor(t){super(t),this.uuid=As(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Di().fromJSON(s))}return this}},Ov={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Sf(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,m;if(n&&(r=zv(i,t,r,e)),i.length>80*e){o=c=i[0],l=h=i[1];for(let _=e;_<s;_+=e)u=i[_],d=i[_+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);m=Math.max(c-o,h-l),m=m!==0?32767/m:0}return pr(r,a,e,o,l,m,0),a}};function Sf(i,t,e,n,s){let r,a;if(s===jv(i,t,e,n)>0)for(r=t;r<e;r+=n)a=Yd(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=Yd(r,i[r],i[r+1],a);return a&&ro(a,a.next)&&(gr(a),a=a.next),a}function Ni(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ro(e,e.next)||pe(e.prev,e,e.next)===0)){if(gr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function pr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Xv(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Bv(i,n,s,r):Fv(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),gr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=kv(Ni(i),t,e),pr(i,t,e,n,s,r,2)):a===2&&Hv(i,t,e,n,s,r):pr(Ni(i),t,e,n,s,r,1);break}}}function Fv(i){let t=i.prev,e=i,n=i.next;if(pe(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,m=o>l?o>c?o:c:l>c?l:c,_=n.next;for(;_!==t;){if(_.x>=h&&_.x<=d&&_.y>=u&&_.y<=m&&fs(s,o,r,l,a,c,_.x,_.y)&&pe(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Bv(i,t,e,n){let s=i.prev,r=i,a=i.next;if(pe(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,m=o<l?o<c?o:c:l<c?l:c,_=h<u?h<d?h:d:u<d?u:d,g=o>l?o>c?o:c:l>c?l:c,p=h>u?h>d?h:d:u>d?u:d,f=uc(m,_,t,e,n),y=uc(g,p,t,e,n),x=i.prevZ,M=i.nextZ;for(;x&&x.z>=f&&M&&M.z<=y;){if(x.x>=m&&x.x<=g&&x.y>=_&&x.y<=p&&x!==s&&x!==a&&fs(o,h,l,u,c,d,x.x,x.y)&&pe(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=m&&M.x<=g&&M.y>=_&&M.y<=p&&M!==s&&M!==a&&fs(o,h,l,u,c,d,M.x,M.y)&&pe(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=f;){if(x.x>=m&&x.x<=g&&x.y>=_&&x.y<=p&&x!==s&&x!==a&&fs(o,h,l,u,c,d,x.x,x.y)&&pe(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=y;){if(M.x>=m&&M.x<=g&&M.y>=_&&M.y<=p&&M!==s&&M!==a&&fs(o,h,l,u,c,d,M.x,M.y)&&pe(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function kv(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!ro(s,r)&&bf(s,n,n.next,r)&&mr(s,r)&&mr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),gr(n),gr(n.next),n=i=r),n=n.next}while(n!==i);return Ni(n)}function Hv(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Kv(a,o)){let l=Ef(a,o);a=Ni(a,a.next),l=Ni(l,l.next),pr(a,t,e,n,s,r,0),pr(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function zv(i,t,e,n){let s=[],r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Sf(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Yv(c));for(s.sort(Gv),r=0;r<s.length;r++)e=Vv(s[r],e);return e}function Gv(i,t){return i.x-t.x}function Vv(i,t){let e=Wv(i,t);if(!e)return t;let n=Ef(e,i);return Ni(n,n.next),Ni(e,e.next)}function Wv(i,t){let e=t,n=-1/0,s,r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&fs(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),mr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&$v(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function $v(i,t){return pe(i.prev,i,t.prev)<0&&pe(t.next,i,i.next)<0}function Xv(i,t,e,n){let s=i;do s.z===0&&(s.z=uc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,qv(s)}function qv(i){let t,e,n,s,r,a,o,l,c=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(a>1);return i}function uc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Yv(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function fs(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Kv(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Zv(i,t)&&(mr(i,t)&&mr(t,i)&&Jv(i,t)&&(pe(i.prev,i,t.prev)||pe(i,t.prev,t))||ro(i,t)&&pe(i.prev,i,i.next)>0&&pe(t.prev,t,t.next)>0)}function pe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ro(i,t){return i.x===t.x&&i.y===t.y}function bf(i,t,e,n){let s=ba(pe(i,t,e)),r=ba(pe(i,t,n)),a=ba(pe(e,n,i)),o=ba(pe(e,n,t));return!!(s!==r&&a!==o||s===0&&Sa(i,e,t)||r===0&&Sa(i,n,t)||a===0&&Sa(e,i,n)||o===0&&Sa(e,t,n))}function Sa(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ba(i){return i>0?1:i<0?-1:0}function Zv(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&bf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function mr(i,t){return pe(i.prev,i,i.next)<0?pe(i,t,i.next)>=0&&pe(i,i.prev,t)>=0:pe(i,t,i.prev)<0||pe(i,i.next,t)<0}function Jv(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Ef(i,t){let e=new dc(i.i,i.x,i.y),n=new dc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Yd(i,t,e,n){let s=new dc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function gr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function dc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function jv(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var tr=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Kd(t),Zd(n,t);let a=t.length;e.forEach(Kd);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Zd(n,e[l]);let o=Ov.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Kd(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Zd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var ja=class i extends Za{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Es=class i extends Ee{constructor(t=new Ui([new pt(0,.5),new pt(-.5,-.5),new pt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Zt(s,3)),this.setAttribute("normal",new Zt(r,3)),this.setAttribute("uv",new Zt(a,2));function c(h){let u=s.length/3,d=h.extractPoints(e),m=d.shape,_=d.holes;tr.isClockWise(m)===!1&&(m=m.reverse());for(let p=0,f=_.length;p<f;p++){let y=_[p];tr.isClockWise(y)===!0&&(_[p]=y.reverse())}let g=tr.triangulateShape(m,_);for(let p=0,f=_.length;p<f;p++){let y=_[p];m=m.concat(y)}for(let p=0,f=m.length;p<f;p++){let y=m[p];s.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let p=0,f=g.length;p<f;p++){let y=g[p],x=y[0]+u,M=y[1]+u,R=y[2]+u;n.push(x,M,R),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Qv(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function Qv(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var an=class i extends Ee{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new I,d=new I,m=[],_=[],g=[],p=[];for(let f=0;f<=n;f++){let y=[],x=f/n,M=0;f===0&&a===0?M=.5/e:f===n&&l===Math.PI&&(M=-.5/e);for(let R=0;R<=e;R++){let v=R/e;u.x=-t*Math.cos(s+v*r)*Math.sin(a+x*o),u.y=t*Math.cos(a+x*o),u.z=t*Math.sin(s+v*r)*Math.sin(a+x*o),_.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),p.push(v+M,1-x),y.push(c++)}h.push(y)}for(let f=0;f<n;f++)for(let y=0;y<e;y++){let x=h[f][y+1],M=h[f][y],R=h[f+1][y],v=h[f+1][y+1];(f!==0||a>0)&&m.push(x,M,v),(f!==n-1||l<Math.PI)&&m.push(M,R,v)}this.setIndex(m),this.setAttribute("position",new Zt(_,3)),this.setAttribute("normal",new Zt(g,3)),this.setAttribute("uv",new Zt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Qa=class i extends Ee{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new I,u=new I,d=new I;for(let m=0;m<=n;m++)for(let _=0;_<=s;_++){let g=_/s*r,p=m/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(g),u.y=(t+e*Math.cos(p))*Math.sin(g),u.z=e*Math.sin(p),o.push(u.x,u.y,u.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(_/s),c.push(m/n)}for(let m=1;m<=n;m++)for(let _=1;_<=s;_++){let g=(s+1)*m+_-1,p=(s+1)*(m-1)+_-1,f=(s+1)*(m-1)+_,y=(s+1)*m+_;a.push(g,p,y),a.push(p,f,y)}this.setIndex(a),this.setAttribute("position",new Zt(o,3)),this.setAttribute("normal",new Zt(l,3)),this.setAttribute("uv",new Zt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var on=class extends mi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uf,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Ea(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function tM(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ws=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},fc=class extends ws{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ku,endingEnd:Ku}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Zu:r=t,o=2*e-n;break;case Ju:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Zu:a=t,l=2*n-e;break;case Ju:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,m=this._weightNext,_=(n-e)/(s-e),g=_*_,p=g*_,f=-d*p+2*d*g-d*_,y=(1+d)*p+(-1.5-2*d)*g+(-.5+d)*_+1,x=(-1-m)*p+(1.5+m)*g+.5*_,M=m*p-m*g;for(let R=0;R!==o;++R)r[R]=f*a[h+R]+y*a[c+R]+x*a[l+R]+M*a[u+R];return r}},pc=class extends ws{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},mc=class extends ws{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},An=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ea(e,this.TimeBufferType),this.values=Ea(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ea(t.times,Array),values:Ea(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new mc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new pc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new fc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ta:e=this.InterpolantFactoryMethodDiscrete;break;case Aa:e=this.InterpolantFactoryMethodLinear;break;case rl:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ta;case this.InterpolantFactoryMethodLinear:return Aa;case this.InterpolantFactoryMethodSmooth:return rl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&tM(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===rl,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,d=u-n,m=u+n;for(let _=0;_!==n;++_){let g=e[u+_];if(g!==e[d+_]||g!==e[m+_]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let m=0;m!==n;++m)e[d+m]=e[u+m]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};An.prototype.TimeBufferType=Float32Array;An.prototype.ValueBufferType=Float32Array;An.prototype.DefaultInterpolation=Aa;var Oi=class extends An{};Oi.prototype.ValueTypeName="bool";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=Ta;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var gc=class extends An{};gc.prototype.ValueTypeName="color";var _c=class extends An{};_c.prototype.ValueTypeName="number";var xc=class extends ws{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Dn.slerpFlat(r,0,a,c-o,a,c,l);return r}},_r=class extends An{InterpolantFactoryMethodLinear(t){return new xc(this.times,this.values,this.getValueSize(),t)}};_r.prototype.ValueTypeName="quaternion";_r.prototype.DefaultInterpolation=Aa;_r.prototype.InterpolantFactoryMethodSmooth=void 0;var Fi=class extends An{};Fi.prototype.ValueTypeName="string";Fi.prototype.ValueBufferType=Array;Fi.prototype.DefaultInterpolation=Ta;Fi.prototype.InterpolantFactoryMethodLinear=void 0;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var yc=class extends An{};yc.prototype.ValueTypeName="vector";var vc=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let m=c[u],_=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return _}return null}}},eM=new vc,Mc=class{constructor(t){this.manager=t!==void 0?t:eM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Mc.DEFAULT_MATERIAL_NAME="__DEFAULT";var xr=class extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},yr=class extends xr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ul=new ce,Jd=new I,jd=new I,Sc=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ar,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new Pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Jd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Jd),jd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(jd),e.updateMatrixWorld(),Ul.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ul),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ul)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var bc=class extends Sc{constructor(){super(new Ha(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Bi=class extends xr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new bc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},to=class extends xr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Lc="\\[\\]\\.:\\/",nM=new RegExp("["+Lc+"]","g"),Dc="[^"+Lc+"]",iM="[^"+Lc.replace("\\.","")+"]",sM=/((?:WC+[\/:])*)/.source.replace("WC",Dc),rM=/(WCOD+)?/.source.replace("WCOD",iM),aM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Dc),oM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Dc),lM=new RegExp("^"+sM+rM+aM+oM+"$"),cM=["material","materials","bones","map"],Ec=class{constructor(t,e,n){let s=n||ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ue=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(nM,"")}static parseTrackName(t){let e=lM.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);cM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ue.Composite=Ec;ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ue.prototype.GetterByBindingType=[ue.prototype._getValue_direct,ue.prototype._getValue_array,ue.prototype._getValue_arrayElement,ue.prototype._getValue_toArray];ue.prototype.SetterByBindingTypeAndVersioning=[[ue.prototype._setValue_direct,ue.prototype._setValue_direct_setNeedsUpdate,ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_array,ue.prototype._setValue_array_setNeedsUpdate,ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_arrayElement,ue.prototype._setValue_arrayElement_setNeedsUpdate,ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_fromArray,ue.prototype._setValue_fromArray_setNeedsUpdate,ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Bb=new Float32Array(1);var Ts=class{constructor(t,e,n=0,s=1/0){this.ray=new sr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new rr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return wc(t,this,n,e),n.sort(Qd),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)wc(t[s],this,n,e);return n.sort(Qd),n}};function Qd(i,t){return i.distance-t.distance}function wc(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){let s=i.children;for(let r=0,a=s.length;r<a;r++)wc(s[r],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tc);function vr(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Ee,c=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in u.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(u.attributes[m]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in u.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[m]===void 0&&(a[m]=[]),a[m].push(u.morphAttributes[m])}if(t){let m;if(e)m=u.index.count;else if(u.attributes.position!==void 0)m=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,h),c+=m}}if(e){let h=0,u=[];for(let d=0;d<i.length;++d){let m=i[d].index;for(let _=0;_<m.count;++_)u.push(m.getX(_)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=wf(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let m=[];for(let g=0;g<a[h].length;++g)m.push(a[h][g][d]);let _=wf(m);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(_)}}return l}function wf(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}let a=new t(r),o=0;for(let c=0;c<i.length;++c)a.set(i[c].array,o),o+=i[c].array.length;let l=new Ie(a,e,n);return s!==void 0&&(l.gpuType=s),l}function ao(i){return i.w*.95/2}function oo(i){return i.h*.95/2}function Uc(i){let t=document.createElement("canvas");t.width=i,t.height=i;let e=t.getContext("2d"),n=e.createImageData(i,i),s=n.data;for(let a=0;a<s.length;a+=4){let o=Math.floor(128+(Math.random()-.5)*80);s[a]=s[a+1]=s[a+2]=o,s[a+3]=255}e.putImageData(n,0,0);let r=new bs(t);return r.wrapS=r.wrapT=er,r.repeat.set(4,4),r.needsUpdate=!0,r}function Tf(i,t,e,n){let s=i.getAttribute("position");if(!s)return;let r=s.count,a=new Float32Array(r*3);for(let o=0;o<r;o++)a[o*3]=t,a[o*3+1]=e,a[o*3+2]=n;i.setAttribute("color",new Ie(a,3))}function Nc(i){let t=new ve,e=ao(i),n=oo(i),s=new je(.95,.35,.95),r=Uc(64),a=.88,o=.02,l=[];t.userData.swayingFoliage=[];let c=new on({color:4007959,roughness:.9});c.bumpMap=r,c.bumpScale=.12;let h=new on({color:2972205,roughness:.85});h.bumpMap=r,h.bumpScale=.18;let u=new mn(.12,.14,1,6),d=new gn(.45,.9,5),m=new gn(.34,.45,5),_=new gn(.23,.4,5),g=.12;function p(k,P,L){let Z=L+.02,J=[[k-g,Z,P-g],[k+g,Z,P+g],[k-g,Z,P+g],[k+g,Z,P-g],[k-g+.06,Z,P-g+.06],[k+g-.06,Z,P+g-.06],[k-g+.06,Z,P+g-.06],[k+g-.06,Z,P-g+.06]],j=new Float32Array(J.length*3);for(let K=0;K<J.length;K++)j[K*3]=J[K][0],j[K*3+1]=J[K][1],j[K*3+2]=J[K][2];let W=new Ee;return W.setAttribute("position",new Ie(j,3)),W}let f=0;for(let k=0;k<i.h;k++)for(let P=0;P<i.w;P++)i.path[k][P]&&f++;let y=new on({color:16777215,roughness:a,metalness:o,bumpMap:r,bumpScale:.12}),x=new Va(s,y,f);x.userData.tileGridGround=!0,x.userData.insideTileGx=new Uint16Array(f),x.userData.insideTileGy=new Uint16Array(f),x.castShadow=!1,x.receiveShadow=!0,x.frustumCulled=!1;let M=[],R=[],v=[],E=[],U=new Le,S=new kt,w=new ce,F=new Dn,q=new vs,H=new I,C=new I(1,1,1),N=0;for(let k=0;k<i.h;k++)for(let P=0;P<i.w;P++){let L=i.type[k][P],Z=i.height[k][P],J=Wo[L],j=.35+Z*.35,W=j/2+.35/2,K=P*.95-e+.95/2,st=k*.95-n+.95/2,ht=(J>>16&255)/255,lt=(J>>8&255)/255,gt=(J&255)/255,_t=ht,wt=lt,Lt=gt;if(L===At.PATH||L===At.TREE||L===At.ROCK){let A=Math.random()*.45;_t=ht*(1-A)+.42*A,wt=lt*(1-A)+.26*A,Lt=gt*(1-A)+.14*A}(L===At.TREE||L===At.ROCK)&&(_t*=.5,wt*=.5,Lt*=.5);let z=1+(Math.random()-.5)*.12,he=Math.min(1,_t*z),Tt=Math.min(1,wt*z),Pt=Math.min(1,Lt*z);if(i.path[k][P])x.userData.insideTileGx[N]=P,x.userData.insideTileGy[N]=k,S.setRGB(he,Tt,Pt),x.setColorAt(N,S),U.position.set(K,j/2,st),U.updateMatrix(),x.setMatrixAt(N,U.matrix),N++;else{let yt=s.clone();if(U.position.set(K,j/2,st),U.updateMatrix(),yt.applyMatrix4(U.matrix),Tf(yt,he,Tt,Pt),M.push(yt),L===At.TREE)E.push(p(K,st,W));else if(L===At.WATER){let zt=Wo[At.WATER],It=(zt>>16&255)/255,A=(zt>>8&255)/255,b=(zt&255)/255,V=1+(Math.random()-.5)*.12,Q=new Qe(.95,.95);Q.rotateX(-Math.PI/2),U.position.set(K,W+.02,st),U.rotation.set(0,0,0),U.scale.set(1,1,1),U.updateMatrix(),Q.applyMatrix4(U.matrix),Tf(Q,Math.min(1,It*V),Math.min(1,A*V),Math.min(1,b*V)),R.push(Q)}else if(L===At.ROCK){let zt=(It,A,b)=>{let V=new Ja(It,0);q.set(Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2),F.setFromEuler(q),H.set(K+A,W+It-.2,st+b),w.compose(H,F,C),V.applyMatrix4(w),v.push(V)};zt(.32+Math.random()*.14,(Math.random()-.5)*.15,(Math.random()-.5)*.15),zt(.2+Math.random()*.12,(Math.random()-.5)*.25,(Math.random()-.5)*.25),zt(.12+Math.random()*.12,(Math.random()-.5)*.28,(Math.random()-.5)*.28)}}}x.instanceMatrix.needsUpdate=!0,x.instanceColor&&(x.instanceColor.needsUpdate=!0),t.add(x);let G=k=>{for(let P=0;P<k.length;P++)k[P].dispose()};if(M.length>0){let k=vr(M);if(G(M),k){let P=new on({color:16777215,vertexColors:!0,roughness:a,metalness:o,bumpMap:r,bumpScale:.12}),L=new vt(k,P);L.receiveShadow=!0,L.castShadow=!1,L.frustumCulled=!1,L.userData.mergedOutsidePick=!0,t.add(L)}}if(E.length>0){let k=vr(E);if(G(E),k){let P=new Wa(k,new hr({color:855309,linewidth:1}));P.frustumCulled=!1,P.raycast=function(){},t.add(P)}}if(v.length>0){let k=vr(v);if(G(v),k){let P=new on({color:6974058,roughness:.9});P.bumpMap=r,P.bumpScale=.2;let L=new vt(k,P);L.castShadow=!0,L.frustumCulled=!1,L.raycast=function(){},t.add(L)}}if(R.length>0){let k=vr(R);if(G(R),k){let P=new on({color:16777215,vertexColors:!0,roughness:.08,metalness:.45,transparent:!0,opacity:.94,bumpMap:r,bumpScale:.03}),L=new vt(k,P);L.receiveShadow=!0,L.frustumCulled=!1,L.raycast=function(){},t.add(L)}}for(let k=0;k<i.h;k++)for(let P=0;P<i.w;P++){if(i.path[k][P]||i.type[k][P]!==At.TREE)continue;let L=i.height[k][P],J=(.35+L*.35)/2+.35/2,j=P*.95-e+.95/2,W=k*.95-n+.95/2,K=new ve;K.userData={gx:P,gy:k},K.position.set(j,J,W);let st=P===0||P===i.w-1||k===0||k===i.h-1,ht=st?.75+Math.random()*.35:.5+Math.random()*.2,lt=new vt(u,c);lt.scale.y=ht,lt.position.set(0,ht/2,0),lt.castShadow=!0,lt.raycast=function(){},K.add(lt);let gt=st?.52:.45,_t=st?1.05:.9,wt=.12,Lt=_t*.5,z=_t*.45,he=_t*.4,Tt=new ve;Tt.position.set(0,ht,0);let Pt=new vt(d,h);Pt.scale.set(gt/.45,Lt/.9,gt/.45),Pt.position.set(0,Lt/2,0),Pt.castShadow=!0,Pt.raycast=function(){},Tt.add(Pt);let yt=new vt(m,h);yt.scale.set(gt*.75/.34,z/.45,gt*.75/.34),yt.position.set(0,Lt-wt+z/2,0),yt.castShadow=!0,yt.raycast=function(){},Tt.add(yt);let zt=new vt(_,h);zt.scale.set(gt*.5/.23,he/.4,gt*.5/.23),zt.position.set(0,Lt-wt+z-wt+he/2,0),zt.castShadow=!0,zt.raycast=function(){},Tt.add(zt),K.add(Tt);let It=(i.w-1)*.5,A=(i.h-1)*.5,b=Math.max(3.5,Math.min(i.w,i.h)*.24);(P-It)**2+(k-A)**2<=b*b&&Math.random()<.35&&t.userData.swayingFoliage.push({group:Tt,phase:Math.random()*Math.PI*2}),t.add(K),l.push(K)}return t.userData.treeGroups=l,t}function hM(){let i=document.createElement("canvas");i.width=4,i.height=512;let t=i.getContext("2d"),e=t.createLinearGradient(0,0,0,512);e.addColorStop(0,"#6a9fd4"),e.addColorStop(.48,"#9ec4e8"),e.addColorStop(.82,"#c8daf0"),e.addColorStop(1,"#dce8f4"),t.fillStyle=e,t.fillRect(0,0,4,512);let n=new bs(i);return n.colorSpace=be,n.magFilter=$e,n.minFilter=$e,n}function uM(){let i=new lr;i.add(new yr(12114168,3817520,1));let t=new Bi(16775920,.72);t.position.set(.6,1.9,.5),i.add(t);let e=new Bi(10533080,.14);return e.position.set(-1.2,.8,-1),i.add(e),i}var lo=class{constructor(t,e){this.container=t,this.world=e,this.hw=ao(e),this.hh=oo(e),this.scene=new lr;let n=12899556;this.scene.background=hM(),this.scene.fog=new Ga(n,38,100),this.camera=new Xe(50,t.clientWidth/t.clientHeight,.1,200);let s=new to(16054527,.24);this.scene.add(s);let r=new yr(11587824,4016692,.36);this.scene.add(r);let a=new Bi(16775406,1.28);a.position.set(32,48,22),a.castShadow=!0,a.shadow.mapSize.width=1024,a.shadow.mapSize.height=1024,a.shadow.camera.near=1,a.shadow.camera.far=120,a.shadow.camera.left=-50,a.shadow.camera.right=50,a.shadow.camera.top=50,a.shadow.camera.bottom=-50,a.shadow.normalBias=.02,this.scene.add(a),this.sun=a;let o=new Bi(12636392,.14);o.position.set(-24,28,-18),this.scene.add(o),this.tilesGroup=Nc(e),this.scene.add(this.tilesGroup),this._calmTerrainIBL(),this.renderer=new or({antialias:!1,powerPreference:"high-performance"}),this.renderer.setSize(t.clientWidth,t.clientHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=eo,this.renderer.shadowMap.autoUpdate=!1,this.renderer.shadowMap.needsUpdate=!0,this.renderer.toneMapping=Ac,this.renderer.toneMappingExposure=1.1,t.appendChild(this.renderer.domElement);let l=new Ss(this.renderer);this.scene.environment=l.fromScene(uM(),.04).texture,l.dispose(),this.needsRender=!0,this.lastInteractionTime=0,this.lastIdleFrameTime=0,this._frameCount=0,this._loopActive=!1,this._cameraActive=!1,this._tweensActive=!1,this._damagedIdleActive=!1,this.pulseMaterials=[],this._resize=this._resize.bind(this),this._animate=this._animate.bind(this),window.addEventListener("resize",this._resize),this._resize()}worldPos(t,e,n){let s=this.world,a=(.35+s.height[e][t]*.35)/2+.35/2,o=n||new I;return o.set(t*.95-this.hw+.95/2,a,e*.95-this.hh+.95/2),o}surfaceY(t,e){return(.35+this.world.height[e][t]*.35)/2+.35/2}markDirty(){this.needsRender=!0,this._loopActive||this._animate()}setPresentationActive({camera:t=this._cameraActive,tweens:e=this._tweensActive}={}){this._cameraActive=t,this._tweensActive=e,(t||e)&&this.markDirty()}invalidateShadows(){this.renderer.shadowMap.needsUpdate=!0,this.markDirty()}requestRender(){this.needsRender=!0,this.lastInteractionTime=performance.now(),this._loopActive||this._animate()}setWorld(t){this.scene.remove(this.tilesGroup),this.tilesGroup.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(s=>s.dispose())}),this.world=t,this.hw=ao(t),this.hh=oo(t),this.tilesGroup=Nc(t),this.scene.add(this.tilesGroup),this._calmTerrainIBL(),this.requestRender()}_calmTerrainIBL(){this.tilesGroup.traverse(t=>{if(!t.isMesh||!t.material)return;(Array.isArray(t.material)?t.material:[t.material]).forEach(n=>{"envMapIntensity"in n&&(n.envMapIntensity=.22)})})}_resize(){let t=this.container.clientWidth,e=this.container.clientHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.requestRender()}start(){this._loopActive=!0,this._animate()}_animate(t=0){let e=this.tilesGroup.userData&&this.tilesGroup.userData.swayingFoliage;this.lastInteractionTime===0&&(this.lastInteractionTime=t);let n=t-this.lastInteractionTime>500,s=this.pulseMaterials.length>0,r=e&&e.length>0&&!n,a=this._cameraActive||this._tweensActive;if(r){let h=t*.0017;for(let u=0;u<e.length;u++){let{group:d,phase:m}=e[u];d.rotation.z=Math.sin(h+m)*.14,d.rotation.x=Math.sin(h*.79+m*1.55)*.09,d.rotation.y=Math.sin(h*.62+m*.9)*.055}this.needsRender=!0}this.onFrame&&this.onFrame(t),this._frameCount++;let o=()=>{if(!this.needsRender)return;let h=.6+.4*Math.sin(t*.004),u=this.pulseMaterials;for(let d=0;d<u.length;d++){let m=d%2===0?.4:.7;u[d].opacity=m*h}this.renderer.render(this.scene,this.camera),this.renderer.shadowMap.needsUpdate=!1,this.needsRender=!1};!n&&!a&&this._frameCount%2===0&&(this.needsRender=!0);let l=a&&this._cameraActive&&!this._tweensActive&&this._frameCount%2!==0;if(n&&!a){let h=this._damagedIdleActive?0:100;(s||this.needsRender)&&t-this.lastIdleFrameTime>=h&&(this.lastIdleFrameTime=t,o())}else l||o();r||s||!n||a||this._damagedIdleActive?(this._loopActive=!0,requestAnimationFrame(this._animate)):this._loopActive=!1}};var co=new Map,ho=new Map;function ne(i,t){return co.has(i)||co.set(i,t()),co.get(i)}function Un(i,t){return ho.has(i)||ho.set(i,t()),ho.get(i)}function dM(i,t,e){return!t||!i||(i.bumpMap=t,i.bumpScale=e,"envMapIntensity"in i&&(i.envMapIntensity=.85)),i}function fM(i,t,e=.5,n=.2){let s=e*10|0,r=n*10|0;return`${i}:${t}:${s}:${r}`}function Rn(i,t,e,{roughness:n=.5,metalness:s=.2,bumpScale:r=.1}={}){let a=t instanceof kt?t.getHex():t,o=fM(i,a,n,s),l=Un(o,()=>new on({color:a,metalness:s,roughness:n}));return dM(l,e,r)}var Oc=Un("eyeWhite",()=>new ae({color:16250363})),Fc=Un("pupil",()=>new ae({color:1314841})),uo=Un("shine",()=>new ae({color:16777215})),Bc=Un("liner",()=>new ae({color:2365472})),kc=Un("lip",()=>new ae({color:13593216})),Hc=Un("cheek",()=>new ae({color:16751531,transparent:!0,opacity:.42})),zc=Un("mouth",()=>new ae({color:5913136})),Gc=3,Vc=6,ki=10,Hi=8,Af=10,Wc=10;function Rf(i){for(let t of co.values())if(t===i)return!0;return!1}function Cf(i){for(let t of ho.values())if(t===i)return!0;return i===Oc||i===Fc||i===uo||i===Bc||i===kc||i===Hc||i===zc}var pM=.62;function Yn(i,t=!0){i.castShadow=t,i.receiveShadow=!1}function gi(i,t){let e=(i>>16&255)/255,n=(i>>8&255)/255,s=(i&255)/255,r=1+(Math.random()-.5)*t;return new kt(Math.min(1,e*r),Math.min(1,n*r),Math.min(1,s*r))}function Kn(i,t=pM){let e=i instanceof kt?i:new kt(i);return new kt(Math.max(0,e.r*t),Math.max(0,e.g*t),Math.max(0,e.b*t))}function Pf(i,t,e,n){let s=yn[t]||yn.knight,r=Kn(gi(s.primary,.08)),a=Kn(gi(s.secondary,.08)),o=Ne[t]&&Ne[t].gender||"male",l=o==="female",c=e??4006676,h=Kn(gi(s.skin!=null?s.skin:15250592,.06)),u=Kn(gi(c,.08)),d=Rn("torso",r.getHex(),n,{metalness:.3,roughness:.48,bumpScale:.1}),m=Rn("leg",a.getHex(),n,{metalness:.24,roughness:.55,bumpScale:.1}),_=d,g=Rn("skin",h.getHex(),n,{metalness:.05,roughness:.72,bumpScale:.05}),p=new ve,f=.28,y=.28,x=.12,M=.2,R=.06,v=.1,E=(O,nt)=>ne(`cap:${O}:${nt}`,()=>new fr(O,nt,Gc,Vc)),U=(O,nt,at,ct,ut)=>{let it=new ve;it.position.set(O,nt,0);let bt=Math.max(.02,ct-at*2),Ot=new vt(E(at,bt),ut);return Ot.position.y=-ct/2,Yn(Ot),it.add(Ot),p.add(it),{pivot:it,mesh:Ot,length:ct}},S=f,w=l?.044:.05,F=U(-.06,f,w,S,m),q=U(.06,f,w,S,m),H=Rn("foot",Kn(a,.8).getHex(),n,{metalness:.1,roughness:.8,bumpScale:.08}),C=ne("foot",()=>new je(.075,.045,.12)),N=O=>{let nt=new vt(C,H);nt.position.set(0,-S/2+.022,.03),O.mesh.add(nt)};N(F),N(q);let G=x/M,k;if(l){let O=new vt(ne("hips",()=>new an(.086,ki,Hi)),m);O.scale.set(1.3,.62,.95),O.position.set(0,f-.004,0),Yn(O),p.add(O)}else{let O=new vt(E(.078,.04),m);O.rotation.z=Math.PI/2,O.scale.set(1,1.25,.75),O.position.set(0,f+.02,0),Yn(O),p.add(O)}if(l){k=.058;let O=[new pt(.06,0),new pt(.058,.03),new pt(.07,.09),new pt(.09,.15),new pt(.086,.2),new pt(.088,.28)],nt=new vt(ne("fTorso",()=>new dr(O,Af)),d);if(nt.position.set(0,f,0),nt.scale.z=G+.06,Yn(nt),p.add(nt),s.apron==null){let it=f+.148,bt=.042,Ot=ne("bust",()=>new an(.048,ki,Hi));for(let Kt of[-1,1]){let Ct=new vt(Ot,d);Ct.position.set(Kt*.033,it,bt),Ct.scale.set(1,.86,.62),p.add(Ct)}}let at=ne("fShoulder",()=>new an(.092,ki,Hi,0,Math.PI*2,0,Math.PI*.6)),ct=new vt(at,d);ct.position.set(0,f+y-.02,0),ct.scale.set(1,.55,G+.1),Yn(ct),p.add(ct)}else{k=.072;let O=new vt(ne("mTorso",()=>new mn(.108,k,y,Wc,1)),d);O.position.set(0,f+y/2,0),O.scale.z=G,Yn(O),p.add(O);let nt=ne("mShoulder",()=>new an(.11,ki,Hi,0,Math.PI*2,0,Math.PI*.6)),at=new vt(nt,d);at.position.set(0,f+y-.02,0),at.scale.set(1.05,.6,G+.08),Yn(at),p.add(at)}let P=.22,L=l?.03:.036,Z=f+y-.02,J=(l?.086:M/2)+L-.01,j=U(-J,Z,L,P,_),W=U(J,Z,L,P,_),K=ne("hand",()=>new an(.042,6,5)),st=O=>{let nt=new vt(K,g);nt.position.set(0,-P/2,0),O.mesh.add(nt)};if(st(j),st(W),s.cape!=null){let O=M*1.95,nt=O*.6,at=f+y*.28,ct=new Ui;ct.moveTo(-nt/2,at/2),ct.lineTo(nt/2,at/2),ct.lineTo(O/2,-at/2),ct.lineTo(-O/2,-at/2),ct.closePath();let ut=Kn(gi(s.cape,.08)).getHex(),it=Rn("cape",ut,n,{metalness:.15,roughness:.8,bumpScale:.12});it.side=_e;let bt=new vt(new Es(ct),it);bt.position.set(0,f+y-at/2+.05,-x/2-.02),bt.rotation.y=Math.PI,p.add(bt);let Ot=.055,Kt=f+y+.02,Ct=.02,rt=M/2+R*.5,D=ne("capePad",()=>new an(Ot,8,6,0,Math.PI*2,0,Math.PI*.55)),ot=new vt(D,it);ot.position.set(-rt,Kt,Ct),ot.rotation.x=-Math.PI*.35,ot.rotation.z=Math.PI*.5,ot.scale.set(1.2,.85,1.1),p.add(ot);let dt=new vt(D,it);dt.position.set(rt,Kt,Ct),dt.rotation.x=-Math.PI*.35,dt.rotation.z=-Math.PI*.5,dt.scale.set(1.2,.85,1.1),p.add(dt)}if(s.belt!=null){let O=Rn("belt",Kn(gi(s.belt,.08)).getHex(),n,{metalness:.2,roughness:.6,bumpScale:.1}),nt=k+.014,at=new vt(ne("belt",()=>new mn(1,1,.03,Wc)),O);at.scale.set(nt,1,nt*(G+(l?.06:0))),at.position.set(0,f+(l?.05:.04),0),p.add(at)}if(s.apron!=null){let O=Rn("apron",Kn(gi(s.apron,.08)).getHex(),n,{metalness:.08,roughness:.75,bumpScale:.12});if(O.side=_e,l){let nt=f+.235,at=f-.02,ct=nt-at,ut=Math.PI*.9,it=ne("fApron",()=>new mn(.11,.118,1,16,1,!0,-ut/2,ut)),bt=new vt(it,O);bt.scale.set(.84,ct,.7),bt.position.set(0,(nt+at)/2,.008),p.add(bt);let Ot=f+y+.02,Kt=.05,Ct=Ot-nt+.02,rt=ne("strap",()=>new je(.02,1,.01));for(let D of[-1,1]){let ot=new vt(rt,O);ot.scale.y=Ct,ot.position.set(D*Kt,(nt+Ot)/2,.062),ot.rotation.x=-.12,p.add(ot)}}else{let nt=M*.95,at=f*.85,ct=f+.2,ut=new vt(ne("mApron",()=>new Qe(nt,at)),O);ut.position.set(0,ct-at/2,x/2+.02),p.add(ut);let it=f+y+.02,bt=M/2+R*.2,Ot=it-ct,Kt=ne("mStrap",()=>new je(.018,1,.008)),Ct=new vt(Kt,O);Ct.scale.y=Ot,Ct.position.set(-bt,(ct+it)/2,x/2+.015),p.add(Ct);let rt=new vt(Kt,O);rt.scale.y=Ot,rt.position.set(bt,(ct+it)/2,x/2+.015),p.add(rt)}}let ht=new vt(ne("neck",()=>new mn(.032,.038,.06,8)),g);ht.position.set(0,f+y+.02,0),Yn(ht),p.add(ht);let lt=ne("head",()=>new an(v,ki,Hi)),gt=new vt(lt,g);gt.position.set(0,f+y+v,0),gt.scale.set(.92,1.05,.96),Yn(gt),p.add(gt);let _t=v,wt=(O,nt)=>Math.sqrt(Math.max(1e-4,_t*_t-O*O-nt*nt)),Lt=(O,nt,at=12)=>new vt(ne(`circle:${at}:${O}`,()=>new Ka(O,at)),nt),z=l?[5935062,5223305,10120150,4633545,11891263,8215263]:[4863270,3747871,3099192,3820124,5913124],he=z[Math.floor(Math.random()*z.length)],Tt=Un(`iris:${he}`,()=>new ae({color:he})),Pt=Rn("brow",u.getHex(),null,{metalness:0,roughness:.85,bumpScale:0}),yt=_t*.36,zt=_t*.12,It=_t*(l?.135:.1),A=l?1.02:1,b=l?1.35:.78;for(let O of[-1,1]){let nt=new ve;nt.position.set(O*yt,zt,wt(yt,zt)+.002),gt.add(nt);let at=Lt(It,Oc);at.scale.set(A,b,1),nt.add(at);let ct=Lt(_t*(l?.095:.07),Tt);ct.position.set(0,-_t*.012,.001),ct.scale.set(1,Math.min(1.2,b),1),nt.add(ct);let ut=Lt(_t*(l?.05:.038),Fc);ut.position.set(0,-_t*.012,.002),ut.scale.set(1,Math.min(1.2,b),1),nt.add(ut);let it=Lt(_t*.028,uo);if(it.position.set(-O*_t*.03,_t*.035,.003),nt.add(it),l){let Ct=Lt(_t*.015,uo);Ct.position.set(O*_t*.025,-_t*.03,.003),nt.add(Ct)}let bt=new vt(new je(It*2*A*.98,_t*(l?.03:.022),.004),Bc);bt.position.set(0,It*b*.82,.003),bt.rotation.z=O*(l?-.03:0),nt.add(bt);let Ot=zt+_t*(l?.32:.3),Kt=new vt(new je(_t*.26,_t*(l?.026:.05),.02),Pt);Kt.position.set(O*yt,Ot,wt(yt,Ot)+.002),Kt.rotation.z=O*(l?-.14:-.05),gt.add(Kt)}let V=-_t*.05,Q=ne("nose",()=>new an(.045,6,5)),tt=new vt(Q,g);tt.position.set(0,V,wt(0,V)),tt.scale.set(.85,.7,.55),gt.add(tt);let et=-_t*.3;if(l){let O=Lt(_t*.08,kc,14);O.position.set(0,et,wt(0,et)+.002),O.scale.set(1.15,.5,1),gt.add(O);for(let nt of[-1,1]){let at=nt*_t*.42,ct=-_t*.1,ut=Lt(_t*.072,Hc,10);ut.position.set(at,ct,wt(at,ct)+.001),ut.scale.set(1,.75,1),gt.add(ut)}}else{let O=new vt(ne("mouthBox",()=>new je(.4,.05,.02)),zc);O.scale.set(_t,_t,_t),O.position.set(0,et,wt(0,et)+.002),gt.add(O)}let Et=Rn("hair",u.getHex(),n,{metalness:.05,roughness:.85,bumpScale:.15}),xt=ne("bang",()=>new gn(.22,.32,5)),St=O=>{let nt=v*.32,at=v*.22,ct=new vt(xt,Et);ct.scale.set(at*.9/.22,nt/.32,at*.9/.22),ct.position.set(-v*.25,v*.22,v*.72),ct.rotation.x=.35,ct.rotation.z=.12,O.add(ct);let ut=new vt(xt,Et);ut.scale.set(at/.22,nt/.32,at/.22),ut.position.set(v*.28,v*.18,v*.68),ut.rotation.x=.28,ut.rotation.z=-.1,O.add(ut);let it=new vt(xt,Et);it.scale.set(at*.7/.22,nt*.9/.32,at*.7/.22),it.position.set(0,v*.28,v*.78),it.rotation.x=.4,O.add(it)},Dt=ne("hairTop",()=>new an(.92,ki,Hi,0,Math.PI*2,0,Math.PI*.52)),Vt=ne("hairLong",()=>new fr(.55,1.5,Gc,Vc));if(o==="female"){let O=new vt(Dt,Et);O.scale.setScalar(v),O.position.set(0,v*.28,-v*.18),O.rotation.y=.06,O.rotation.x=-.04,gt.add(O);let nt=new vt(Vt,Et);nt.scale.set(v*1.05,v,v*.5),nt.position.set(0,-v*.6,-v*.95),nt.rotation.z=.03,gt.add(nt),St(gt)}else{let O=new vt(Dt,Et);O.scale.setScalar(v*.9),O.position.set(0,v*.4,-v*.12),O.rotation.y=.08,O.rotation.x=-.05,O.rotation.z=.04,gt.add(O);let nt=new vt(ne("hairSides",()=>new an(.75,8,6,Math.PI*.2,Math.PI*.6,0,Math.PI*.4)),Et);nt.scale.setScalar(v),nt.position.set(0,v*.1,-v*.05),nt.rotation.y=.1,gt.add(nt),St(gt)}if(s.horns!=null){let O=Rn("horns",Kn(gi(s.horns,.08)).getHex(),n,{metalness:.12,roughness:.62,bumpScale:.1}),nt=new vt(ne("hornBand",()=>new Qa(1.12,.22,6,16)),O);nt.scale.setScalar(v),nt.rotation.x=Math.PI/2,nt.position.y=v*.42,gt.add(nt);let at=v*.48,ct=v*2.55,ut=ne("horn",()=>new gn(.48,2.55,6)),it=new vt(ut,O);it.scale.set(at/.48,ct/2.55,at/.48),it.position.set(-v*1.02,v*.18,v*.02),it.rotation.set(-.42,-.32,.58),gt.add(it);let bt=new vt(ut,O);bt.scale.set(at/.48,ct/2.55,at/.48),bt.position.set(v*1.02,v*.18,v*.02),bt.rotation.set(-.42,.32,-.58),gt.add(bt)}return p.userData.leftLeg=F.pivot,p.userData.rightLeg=q.pivot,p.userData.leftArm=j.pivot,p.userData.rightArm=W.pivot,p.userData.head=gt,p.userData.woundedSeverity=0,p.userData.damageRatio=0,p.userData.facingYaw=0,p.userData.poseMode="idle",p.rotation.order="YXZ",p}function Jn(i,t){i.userData.facingYaw=t,i.rotation.order="YXZ",i.rotation.y=t}function Zn(i,t,e=0){let n=i.userData.facingYaw??i.rotation.y;i.userData.facingYaw=n,i.rotation.order="YXZ",i.rotation.set(t,n,e)}function If(i){i.userData.woundedSeverity=0,i.userData.damageRatio=0,Cs(i),mM(i)}function Xc(i){let t=i.userData;return Math.max(t.woundedSeverity||0,(t.damageRatio||0)*.25)}function qc(i){return Xc(i)*.07}function Yc(i,t=0){Cs(i,t)}function Cs(i,t=0){let e=i.userData,n=Xc(i),s=e.baseY??i.position.y,r=e.damageRatio||0;if(n<=0&&r<=0){Zn(i,0,0),i.scale.setScalar(1),i.position.y=s,e.head&&e.head.rotation.set(0,0,0),e.leftArm&&e.leftArm.rotation.set(0,0,0),e.rightArm&&e.rightArm.rotation.set(0,0,0),e.leftLeg&&e.leftLeg.rotation.set(0,0,0),e.rightLeg&&e.rightLeg.rotation.set(0,0,0);return}let a=n*.24,o=n*.05;i.scale.setScalar(1-n*.045),i.position.y=s-n*.07,e.head&&(e.head.rotation.x=n*.28,e.head.rotation.z=-n*.06),e.leftArm&&(e.leftArm.rotation.x=n*.48,e.leftArm.rotation.z=n*.14,e.leftArm.rotation.y=n*.1),e.rightArm&&(e.rightArm.rotation.x=n*.62,e.rightArm.rotation.y=-n*.38,e.rightArm.rotation.z=-n*.08),e.leftLeg&&(e.leftLeg.rotation.x=-n*.16,e.leftLeg.rotation.z=n*.05),e.rightLeg&&(e.rightLeg.rotation.x=-n*.11,e.rightLeg.rotation.z=-n*.04),t&&r>0&&(a+=Math.sin(t)*.024*r,o+=Math.sin(t*.71+1.2)*.016*r,i.position.y-=Math.max(0,Math.sin(t*.88))*.014*Math.max(n,r*.5),e.head&&(e.head.rotation.x+=Math.sin(t*1.12)*.038*r),e.rightArm&&n>.15&&(e.rightArm.rotation.y+=Math.sin(t*1.35)*.045*n),e.leftLeg&&n>.25&&(e.leftLeg.rotation.x+=Math.sin(t*.85)*.028*n)),Zn(i,a,o)}function Lf(i,t,e=.5){Cs(i);let n=Math.sin(t*Math.PI),s=e*n,r=i.userData.flinchSide||1,a=i.userData;Zn(i,i.rotation.x-s*.42,i.rotation.z+r*s*.2),i.position.y-=s*.065,a.head&&(a.head.rotation.x+=s*.58,a.head.rotation.z-=r*s*.16),a.leftArm&&(a.leftArm.rotation.x+=s*.28,a.leftArm.rotation.z+=r*s*.38),a.rightArm&&(a.rightArm.rotation.x-=s*.18,a.rightArm.rotation.z-=r*s*.22),a.leftLeg&&(a.leftLeg.rotation.x+=s*.14),a.rightLeg&&(a.rightLeg.rotation.x-=s*.1)}function Df(i,t){let e=Math.max(0,Math.min(1,t)),n=1-e*.2;i.traverse(s=>{if(!s.isMesh||!s.material?.color)return;s.userData.originalColor||(s.userData.originalColor=s.material.color.clone());let r=s.userData.originalColor;s.material.color.setRGB(Math.min(1,r.r*n+e*.05),r.g*n*(1-e*.1),r.b*n*(1-e*.12))})}function mM(i){i.traverse(t=>{t.isMesh&&t.material?.color&&t.userData.originalColor&&t.material.color.copy(t.userData.originalColor)})}function Mr(i){let t=Xc(i);i.userData.baseY=t>0?i.position.y+qc(i):i.position.y,t>0&&Cs(i)}function Uf(i,t){let e=i.userData;if(!e.leftLeg)return 0;let n=e.woundedSeverity||0,s=e.damageRatio||0,r=Math.max(n,s*.25),a=1-r*.55,o=t*Math.PI*4,l=Math.sin(o),c=Math.max(0,-l),h=Math.max(0,l),u=c*c,d=h*h,m=r?-r*.16:0,_=r?-r*.11:0,g=l*.52*a;e.leftLeg.rotation.x=m+g-u*.22*a,e.rightLeg.rotation.x=_-g-d*.22*a,r>0?(e.leftLeg.rotation.z=r*.05,e.rightLeg.rotation.z=-r*.04):(e.leftLeg.rotation.z=l*.025*a,e.rightLeg.rotation.z=-l*.025*a);let p=Math.sin(o+Math.PI)*.5*a,f=Math.sin(o)*.5*a;e.leftArm&&(e.leftArm.rotation.x=r*.48+p,e.leftArm.rotation.y=r*.1-p*.06,e.leftArm.rotation.z=r*.14+p*.04),e.rightArm&&(e.rightArm.rotation.x=r*.62+f,e.rightArm.rotation.y=-r*.38+f*.06,e.rightArm.rotation.z=-r*.08-f*.04);let y=.28*a;return Zn(i,r*.24+y,r*.05+Math.sin(o)*.016*a),e.head&&(e.head.rotation.x=r*.28-y*.35,e.head.rotation.z=r*-.06),l*l*.032*a}function Nf(i){let t=i.userData;if(t.leftLeg){if((t.woundedSeverity||0)>0){Cs(i);return}t.leftLeg.rotation.set(0,0,0),t.rightLeg.rotation.set(0,0,0),t.leftArm.rotation.set(0,0,0),t.rightArm.rotation.set(0,0,0),Zn(i,0,0),t.head&&t.head.rotation.set(0,0,0)}}function Of(i){if(i<=.22)return i/.22*.12;if(i<=.42){let e=(i-.22)/.2;return .12+e*e*(3-2*e)*.88}let t=(i-.42)/.58;return 1-t*t}function Ff(i,t,{style:e="slash"}={}){let n=i.userData;if(!n.leftArm)return;let s=n.woundedSeverity||0,r=1-s*.45,a=0,o=0;if(t<=.22)a=t/.22;else if(t<=.42)a=1,o=(t-.22)/.2,o=o*o*(3-2*o);else{let f=(t-.42)/.58,y=1-f*f;a=y,o=y}let l=s*.62,c=s*.48,h=s?-s*.16:0,u=s?-s*.11:0,d=s*.28,m=s*.24,_=s*.05;if(e==="thrust"){let y=(a*.25+o*.95)*1.05*r;n.rightArm&&(n.rightArm.rotation.x=l+y,n.rightArm.rotation.y=(s>0?-s*.38:0)-a*.12*r,n.rightArm.rotation.z=-a*.08*r),n.leftArm&&(n.leftArm.rotation.x=c+y*.82,n.leftArm.rotation.y=(s>0?s*.1:0)+a*.08*r),Zn(i,m+(o*.18-a*.06)*r,_),n.leftLeg&&(n.leftLeg.rotation.x=h-o*.22*r),n.rightLeg&&(n.rightLeg.rotation.x=u+o*.28*r),n.head&&(n.head.rotation.x=d-o*.1*r);return}let g=a*-1.15*r,p=o*1.65*r;n.rightArm&&(n.rightArm.rotation.x=l+g+p,n.rightArm.rotation.y=(s>0?-s*.38:0)-a*.42*r+o*.2*r,n.rightArm.rotation.z=-a*.32*r+o*.12*r),n.leftArm&&(n.leftArm.rotation.x=c+a*.42*r-o*.12*r,n.leftArm.rotation.y=(s>0?s*.1:0)+a*.22*r,n.leftArm.rotation.z=(s>0?s*.14:0)+a*.06*r),Zn(i,m+(-a*.1+o*.16)*r,_+(a*.08-o*.05)*r),n.leftLeg&&(n.leftLeg.rotation.x=h+a*.14*r-o*.2*r),n.rightLeg&&(n.rightLeg.rotation.x=u-a*.1*r+o*.24*r),n.head&&(n.head.rotation.x=d+a*.1*r-o*.06*r)}function Bf(i){let t=i.userData;if(t.leftArm){if((t.woundedSeverity||0)>0){Cs(i);return}t.leftArm.rotation.set(0,0,0),t.rightArm.rotation.set(0,0,0),t.leftLeg.rotation.set(0,0,0),t.rightLeg.rotation.set(0,0,0),t.head&&t.head.rotation.set(0,0,0),Zn(i,0,0)}}var $c=i=>i*i*(3-2*i);function kf(i,t){let e=i.userData;if(!e.leftLeg)return;let n=e.deathFallSide||1,s=e.deathBaseY??e.baseY??i.position.y,r=$c(Math.min(1,t/.14)),a=$c(Math.min(1,Math.max(0,(t-.1)/.42))),o=$c(Math.min(1,Math.max(0,(t-.45)/.55))),l=1-Math.min(1,a*1.5),c=r*l*-.3+a*.65+o*.1,h=n*(r*l*.26+a*.14+o*Math.PI*.47);Zn(i,c,h);let u=a*.2+o*.34;i.position.y=s-u,i.scale.setScalar(1-o*.07);let d=a*.62+o*.38;e.leftLeg.rotation.x=-d+n*o*.18,e.leftLeg.rotation.z=n*(a*.12+o*.05),e.rightLeg.rotation.x=-d*.92-n*o*.12,e.rightLeg.rotation.z=-n*(a*.1+o*.04),e.leftArm.rotation.x=a*.95+o*.55,e.leftArm.rotation.z=n*(a*.58+o*1.05),e.leftArm.rotation.y=a*.28,e.rightArm.rotation.x=a*.78+o*.68,e.rightArm.rotation.z=-n*(a*.42+o*.88),e.rightArm.rotation.y=-a*.2,e.head&&(e.head.rotation.x=r*l*.45+a*.55+o*.22,e.head.rotation.z=-n*(a*.08+o*.28))}function Hf(i,t){let e=Math.max(0,Math.min(1,t)),n=1-e*.38;i.traverse(s=>{if(!s.isMesh||!s.material?.color)return;s.userData.originalColor||(s.userData.originalColor=s.material.color.clone());let r=s.userData.originalColor;s.material.color.setRGB(r.r*n,r.g*n*(1-e*.18),r.b*n*(1-e*.24))})}var gM=400;var _M=320,xM=280,yM=780,vM=400,MM=600,SM=3368703,bM=13382451,EM=.02,Kc=.35,zf={1:new ae({color:SM,side:_e}),2:new ae({color:bM,side:_e})},wM=new mn(.035,.035,.4,5);function TM(i){return i===1?Math.PI:0}function Gf(i){let t=i.facing;return t&&(t.dx!==0||t.dy!==0)?Math.atan2(t.dx,t.dy):TM(i.player)}var fo=class{constructor(t,e,n,s){this.view=t,this.state=e,this.bus=n,this.tween=s,this.meshes=new Map,this.bumpMap=Uc(64),this.cameraFollow=null,this.bordersGroup=new ve,this.view.scene.add(this.bordersGroup),this.borderGeo=this._makeBorderGeometry(.95,EM),this.turnPointer=this._makeTurnPointer(),this.view.scene.add(this.turnPointer),this.facingArrow=this._makeFacingArrow(),this.view.scene.add(this.facingArrow),this._facingMode=!1,this._lastHp=new Map,this.view.onFrame=r=>this._updateDamagedIdle(r),this._subscribe()}_subscribe(){let t=this.bus;t.on("unitPlaced",({unit:e})=>{this.addUnit(e),this.updateBorders(),this.view.invalidateShadows()}),t.on("unitSummoned",({unit:e,grayscale:n})=>{if(this.addUnit(e,n),e.summonedBy!=null){let s=this.meshes.get(e.summonedBy),r=this.meshes.get(e.id);s&&r&&Jn(r,s.userData.facingYaw??s.rotation.y)}this.updateBorders(),this.updatePointer()}),t.on("unitRemoved",({unit:e})=>this.removeUnit(e)),t.on("unitStatsChanged",({unit:e,selfCost:n})=>{let s=this._lastHp.get(e.id),r=s!=null&&e.hp<s&&e.hp>0;if(this._lastHp.set(e.id,e.hp),this.updateSlash(e),this.updateLowHp(e),r&&!n){let a=(s-e.hp)/Math.max(1,e.maxHp);this.animateDamageFlinch(e,a)}}),t.on("unitKnockback",({unit:e,to:n})=>this.moveTo(e,n.gx,n.gy)),t.on("unitFacingChanged",({unit:e})=>this.syncFacing(e)),t.on("unitMoved",({unit:e})=>{this.updateBorders(),this.updatePointer(),this.view.invalidateShadows()}),t.on("buffAnimation",({unit:e})=>this.animatePulse(e)),t.on("levelUp",({unit:e})=>this.animateLevelUp(e)),t.on("turnChanged",()=>{this.updatePointer()}),t.on("playingStarted",()=>{this.updateBorders(),this.updatePointer()}),t.on("actionResolved",()=>this.updatePointer()),t.on("initiativeChanged",()=>this.updatePointer()),t.on("worldRebuilt",()=>this.clear())}addUnit(t,e=!1){this.meshes.has(t.id)&&this.removeUnit(t);let n=Pf(t.player,t.class,t.hairColor,this.bumpMap);n.position.copy(this.view.worldPos(t.x,t.y)),n.userData.baseY=n.position.y,Jn(n,Gf(t)),n.castShadow=!0,n.userData.unitId=t.id,n.userData.poseMode="idle";let s=.28,r=.28,a=.12,o=new vt(new Qe(.18,.04),new ae({color:6037528,side:_e,depthTest:!0,depthWrite:!1}));o.position.set(0,s+r/2,a/2+.02),o.rotation.x=-Math.PI/2,o.rotation.z=Math.PI/4,o.visible=t.maxHp>0&&t.hp<t.maxHp&&t.hp>0,n.add(o),n.userData.slashMark=o,this.view.scene.add(n),this.meshes.set(t.id,n),this._lastHp.set(t.id,t.hp),e&&this._makeGrayscale(n),this.updateLowHp(t),this.view.requestRender()}removeUnit(t){let e=typeof t=="object"?t.id:t,n=this.meshes.get(e);n&&(this.view.scene.remove(n),n.traverse(s=>{s.geometry&&!Rf(s.geometry)&&s.geometry.dispose(),s.material&&(Array.isArray(s.material)?s.material:[s.material]).forEach(a=>{Cf(a)||a.dispose()})}),this.meshes.delete(e),this._lastHp.delete(e),this.updateBorders(),this.view.requestRender())}clear(){for(let t of Array.from(this.meshes.keys()))this.removeUnit(t)}moveTo(t,e,n){let s=this.meshes.get(t.id);s&&(s.position.copy(this.view.worldPos(e,n)),Mr(s),this.updateBorders(),this.view.requestRender())}updateSlash(t){let e=this.meshes.get(t.id);!e||!e.userData.slashMark||(e.userData.slashMark.visible=t.maxHp>0&&t.hp<t.maxHp&&t.hp>0,this.view.requestRender())}updateLowHp(t){let e=this.meshes.get(t.id);if(!e)return;let n=t.maxHp>0?t.hp/t.maxHp:1,s=t.hp>0&&t.maxHp>0?1-n:0;if(e.userData.damageRatio=s,s<=0){If(e),this.view.requestRender();return}let a=n<Kc?Math.min(1,(Kc-n)/Kc):0;e.userData.woundedSeverity=a,e.userData.baseY=e.position.y+qc(e),Yc(e),Df(e,Math.max(a,s*.35)),e.userData.slashMark&&(e.userData.slashMark.visible=!0),this.view.requestRender()}_updateDamagedIdle(t){let e=!1;for(let[n,s]of this.meshes){let r=this.state.getUnitById(n);!r||r.hp<=0||r.hp>=r.maxHp||s.userData.poseMode==="idle"&&(e=!0,Yc(s,t*.003+n*.73))}this.view._damagedIdleActive=e,e&&this.view.markDirty()}animateDamageFlinch(t,e){let n=this.meshes.get(t.id);if(!n||n.userData.poseMode==="death")return;n.userData.poseMode="flinch",n.userData.flinchSide=Math.random()>.5?1:-1;let s=Math.min(1,.3+e*1.6);return this._run(_M,r=>{Lf(n,r,s),this.view.invalidateShadows()}).then(()=>{n.userData.poseMode="idle",this.updateLowHp(t)})}_makeGrayscale(t){t.traverse(n=>{if(!n.isMesh||!n.material||!n.material.color)return;let s=n.material.color,r=.2126*s.r+.7152*s.g+.0722*s.b,a=Math.max(0,Math.min(1,r*.55));s.setRGB(a,a,a)})}setFacingMode(t){this._facingMode=!!t,this.updatePointer()}syncFacing(t){let e=this.meshes.get(t.id);e&&Jn(e,Gf(t)),this.view.requestRender()}showFacingArrow(t){let e=this.meshes.get(t);e&&(this.facingArrow.removeFromParent(),e.add(this.facingArrow),this.facingArrow.position.set(0,1.2,0),this.facingArrow.rotation.set(-Math.PI/2,0,Math.PI),this.facingArrow.visible=!0,this.view.requestRender())}setFacingPreview(t,e){let n=this.meshes.get(t);!n||!e||(Jn(n,Math.atan2(e.dx,e.dy)),this.view.requestRender())}hideFacingArrow(){this.facingArrow.visible=!1,this.facingArrow.removeFromParent(),this.view.scene.add(this.facingArrow),this.view.requestRender()}_makeFacingArrow(){let t=new vt(new gn(.12,.35,8),new ae({color:4500223}));return t.visible=!1,t}_makeBorderGeometry(t,e){let n=t/2,s=n-e,r=new Ui;r.moveTo(-n,-n),r.lineTo(n,-n),r.lineTo(n,n),r.lineTo(-n,n),r.lineTo(-n,-n);let a=new Di;return a.moveTo(-s,-s),a.lineTo(s,-s),a.lineTo(s,s),a.lineTo(-s,s),a.lineTo(-s,-s),r.holes.push(a),new Es(r)}updateBorders(t=null){let e=this.state.units,n=e.filter(s=>s.hp>0&&s.id!==t).map(s=>`${s.id},${s.x},${s.y},${s.player}`).sort().join("|");if(!(this._borderSig===n&&this._borderExclude===t)){for(this._borderSig=n,this._borderExclude=t;this.bordersGroup.children.length;)this.bordersGroup.remove(this.bordersGroup.children[0]);e.filter(s=>s.hp>0&&s.id!==t).forEach(s=>{let r=this.view.worldPos(s.x,s.y),a=this.view.surfaceY(s.x,s.y)+.02,o=zf[s.player]||zf[1],l=new vt(this.borderGeo,o);l.rotation.x=-Math.PI/2,l.position.set(r.x,a,r.z),this.bordersGroup.add(l)}),this.view.requestRender()}}_makeTurnPointer(){let t=new vt(new gn(.1,.25,6),new ae({color:8102901}));return t.rotation.x=Math.PI,t.visible=!1,t}updatePointer(){let t=this.state,e={1:8102901,2:15628943},n=()=>{this.turnPointer.visible=!1,this.turnPointer.removeFromParent(),this.view.scene.add(this.turnPointer)};if(t.phase!=="playing"||t.initiativeOrder.length===0||this._facingMode)return n();let s=t.getActiveUnit();if(!s||s.hp<=0)return n();let r=this.meshes.get(s.id);if(!r){this.turnPointer.visible=!1;return}this.turnPointer.removeFromParent(),r.add(this.turnPointer),this.turnPointer.position.set(0,1.15,0),this.turnPointer.material&&this.turnPointer.material.color.setHex(e[s.player]??e[1]),this.turnPointer.visible=!0,this.view.requestRender()}_run(t,e,n=Zr){return new Promise(s=>{this.tween.add({duration:t,ease:n,onUpdate:r=>{e(r),this.view.requestRender()},onComplete:s})})}async animateMove(t,e){let n=this.meshes.get(t.id);if(!n||e.length<2)return;n.userData.poseMode="walk",this.updateBorders(t.id);let s=e.map(c=>this.view.worldPos(c.x,c.y).clone()),r=[],a=0;for(let c=1;c<s.length;c++){let h=s[c].distanceTo(s[c-1]);r.push({from:s[c-1],to:s[c],len:h,start:a}),a+=h}let l=(this.state.settings.moveDurationMs||300)*(e.length-1);await this._run(l,c=>{let h=c*a,u=r[r.length-1];for(let p=0;p<r.length;p++)if(h<=r[p].start+r[p].len){u=r[p];break}let d=u.len>1e-8?Math.min(1,(h-u.start)/u.len):1;n.position.lerpVectors(u.from,u.to,d);let m=u.to.x-u.from.x,_=u.to.z-u.from.z;m*m+_*_>1e-6&&Jn(n,Math.atan2(m,_));let g=Uf(n,h/.95);n.position.y+=g,this.view.invalidateShadows(),this.cameraFollow&&this.cameraFollow(n.position)},jo),n.position.copy(s[s.length-1]),Nf(n),Mr(n),n.userData.poseMode="idle",this.updateBorders()}async animateAttack(t,e,n,s){let r=this.meshes.get(t.id);if(!r)return;r.userData.poseMode="attack";let a=this.view.worldPos(t.x,t.y).clone(),o=this.view.worldPos(e.x,e.y).clone(),l=o.x-a.x,c=o.z-a.z;l*l+c*c>1e-6&&Jn(r,Math.atan2(l,c));let h=t.range!=null?t.range:1,u=Math.max(1,n&&n.length||1),d=h<=1?"slash":"thrust",m=Math.hypot(l,c),_=.95*(d==="slash"?.14:.22);for(let g=0;g<u;g++)if(h>2)await this._fireProjectile(a,o,16763972),s&&s(g);else{let p=a.y,f=a.clone();if(m>1e-6){let x=Math.max(0,m-_);f.add(new I(l/m,0,c/m).multiplyScalar(x))}let y=!1;await this._run(gM,x=>{Ff(r,x,{style:d});let M=Of(x);r.position.lerpVectors(a,f,M),r.position.y=p+Math.sin(x*Math.PI)*.035*(1-(r.userData.woundedSeverity||0)*.5),!y&&x>=.36&&s&&(y=!0,s(g)),this.view.invalidateShadows()}),Bf(r),Mr(r)}r.position.copy(a),Mr(r),r.userData.poseMode="idle"}async animateSkill(t,e,n,s){if((n?.effectKey==="pierce"||n?.effectKey==="impale")&&e){await this.animateAttack(t,e,[{}],s?()=>s():void 0),this.updateLowHp(t);return}let r=this.meshes.get(t.id);if(!r){s&&s();return}if(r.userData.poseMode="attack",e&&(e.x!==t.x||e.y!==t.y)){let l=this.view.worldPos(t.x,t.y).clone(),c=this.view.worldPos(e.x,e.y).clone(),h=c.x-l.x,u=c.z-l.z;if(h*h+u*u>1e-6&&Jn(r,Math.atan2(h,u)),(n&&n.range||1)>1){await this._fireProjectile(l,c,6737151),s&&s(),r.userData.poseMode="idle";return}}let a=r.position.y,o=!1;await this._run(220,l=>{r.position.y=a+Math.sin(l*Math.PI)*.18,!o&&l>=.45&&s&&(o=!0,s())}),!o&&s&&s(),r.position.y=a,r.userData.poseMode="idle",this.updateLowHp(t)}_fireProjectile(t,e,n){let s=new ae({color:n}),r=new vt(wM,s),a=t.clone();a.y+=.6;let o=e.clone();return o.y+=.6,r.position.copy(a),r.quaternion.setFromUnitVectors(new I(0,1,0),o.clone().sub(a).normalize()),this.view.scene.add(r),this._run(xM,l=>r.position.lerpVectors(a,o,l),l=>l).then(()=>{this.view.scene.remove(r),s.dispose()})}animateDeath(t){let e=this.meshes.get(t.id);if(!e)return this.updateBorders(),this.updatePointer(),Promise.resolve();let n=this.state.getUnitById(t.id);return!n||n.hp>0?Promise.resolve():(e.userData.poseMode="death",e.userData.deathFallSide=Math.random()>.5?1:-1,e.userData.deathBaseY=e.position.y,this._run(yM,s=>{kf(e,s),Hf(e,s),this.view.invalidateShadows()},Zr).then(()=>{this.view.invalidateShadows(),this.removeUnit(t),this.updatePointer()}))}animatePulse(t){let e=this.meshes.get(t.id);e&&(e.userData.poseMode="attack",this._run(vM,n=>{let s=1+Math.sin(n*Math.PI)*.18;e.scale.setScalar(s)}).then(()=>{e.userData.poseMode="idle",this.updateLowHp(t)}))}animateLevelUp(t){let e=this.meshes.get(t.id);if(!e)return;e.userData.poseMode="attack";let n=e.userData.facingYaw??e.rotation.y;this._run(MM,s=>{let r=1+Math.sin(s*Math.PI)*.25;e.scale.setScalar(r),e.rotation.y=n+s*Math.PI*2}).then(()=>{Jn(e,n),e.userData.poseMode="idle",this.updateLowHp(t)})}};var Vf=.82,Wf=1.02,$f={move:{glow:3381759,glowOpacity:.35,square:6730751,squareOpacity:.65},attack:{glow:10035746,glowOpacity:.4,square:13386820,squareOpacity:.7},skill:{glow:8926122,glowOpacity:.4,square:11167436,squareOpacity:.7},placement:{glow:2271812,glowOpacity:.4,square:4508774,squareOpacity:.7},facing:{glow:2263244,glowOpacity:.35,square:4500223,squareOpacity:.65}},po=class{constructor(t){this.view=t,this.group=new ve,t.scene.add(this.group),this.materials=[],this.glowGeo=new Qe(Wf,Wf),this.squareGeo=new Qe(Vf,Vf)}clear(){for(;this.group.children.length;){let t=this.group.children[0];this.group.remove(t),t.geometry!==this.glowGeo&&t.geometry!==this.squareGeo&&t.geometry&&t.geometry.dispose()}this.materials.forEach(t=>t.dispose()),this.materials.length=0,this.view.pulseMaterials=[],this.view.requestRender()}show(t,e){this.clear();let n=$f[e]||$f.move;t.forEach(({gx:s,gy:r})=>{let a=this.view.surfaceY(s,r)+.01,o=this.view.worldPos(s,r),l=new ae({color:n.glow,transparent:!0,opacity:n.glowOpacity,side:_e}),c=new vt(this.glowGeo,l);c.rotation.x=-Math.PI/2,c.position.set(o.x,a,o.z),this.group.add(c),this.materials.push(l);let h=new ae({color:n.square,transparent:!0,opacity:n.squareOpacity,side:_e}),u=new vt(this.squareGeo,h);u.rotation.x=-Math.PI/2,u.position.set(o.x,a+.01,o.z),u.userData.gx=s,u.userData.gy=r,this.group.add(u),this.materials.push(h)}),this.view.pulseMaterials=this.materials,this.view.requestRender()}};var Xf=.92,mo=class{constructor(t,e){this.view=t,this.group=new ve,t.scene.add(this.group),this.byKey=new Map,e.on("powerupSpawned",({gx:n,gy:s,type:r})=>this.add(n,s,r)),e.on("powerupCollected",({gx:n,gy:s})=>this.remove(n,s)),e.on("worldRebuilt",()=>this.clear())}_key(t,e){return e*this.view.world.w+t}add(t,e,n){let s=du[n],r=new vt(new ja(.22,0),new on({color:s,metalness:.3,roughness:.4}));r.rotation.x=Math.PI/4,r.castShadow=!0,r.receiveShadow=!0;let a=this.view.worldPos(t,e);a.y+=.35,r.position.copy(a),this.group.add(r);let o=new vt(new Qe(Xf,Xf),new ae({color:s,transparent:!0,opacity:.45,side:_e}));o.rotation.x=-Math.PI/2;let l=this.view.worldPos(t,e);o.position.set(l.x,this.view.surfaceY(t,e)+.01,l.z),this.group.add(o),this.byKey.set(this._key(t,e),{gem:r,glow:o}),this.view.requestRender()}remove(t,e){let n=this._key(t,e),s=this.byKey.get(n);if(s){for(let r of[s.gem,s.glow])this.group.remove(r),r.geometry.dispose(),r.material&&r.material.dispose&&r.material.dispose();this.byKey.delete(n),this.view.requestRender()}}clear(){for(let t of Array.from(this.byKey.keys())){let e=t%this.view.world.w,n=t/this.view.world.w|0;this.remove(e,n)}}};var go=class{constructor(t){this.view=t,this.layer=document.createElement("div"),this.layer.id="combat-text-layer",t.container.appendChild(this.layer)}_spawn(t,e,n,s,r){let a=document.createElement("div");a.className=n,a.textContent=e,a.style.position="absolute",this.layer.appendChild(a);let o=this.view,l=performance.now(),c=0,h=o.worldPos(0,0).clone(),u=()=>{t(h),h.y+=s,h.project(o.camera);let m=o.container.clientWidth,_=o.container.clientHeight;a.style.left=(h.x*.5+.5)*m+"px",a.style.top=(1-(h.y*.5+.5))*_+"px"},d=()=>{c%2===0&&u(),c++,performance.now()-l<r?requestAnimationFrame(d):a.remove()};requestAnimationFrame(d)}showCombat(t,e,n,s,r){let a="combat-text-float "+(s?"miss":"damage")+(r?" "+r:""),o=r==="skill-name"?1.7:1.2;this._spawn(l=>this.view.worldPos(t,e,l),n,a,o,1400)}showLevelUp(t,e,n){let s="combat-text-float "+(n||"levelup");this._spawn(r=>this.view.worldPos(t,e,r),"LEVEL UP!",s,1.2,1500)}};function qf(i,t,e){let n=new lo(i,t.world),s=new Kr;s.onFrame=()=>n.setPresentationActive({camera:n._cameraActive,tweens:s.active});let r=new fo(n,t,e,s),a=new po(n),o=new mo(n,e),l=new go(n);return e.on("floatingText",({gx:c,gy:h,text:u,kind:d})=>{let m=d==="miss",_=d==="damage"||d==="miss"?void 0:d;l.showCombat(c,h,u,m,_)}),e.on("levelUp",({unit:c})=>{let h=c.level>=3?"levelup level3":c.level>=2?"levelup level2":"levelup";l.showLevelUp(c.x,c.y,h)}),n.start(),{view:n,tween:s,units:r,highlights:a,powerups:o,floatingText:l,animator:r}}var Zc=17,AM=.003,RM=400,CM=1.8*1.8,PM=1,IM=40,LM=-Math.PI*.4,DM=Math.PI*.4,Yf=.004,_o=class{constructor(t,e){this.view=t,this.tween=e,this.camera=t.camera,this.target=new I,this.offset=new I(12,38,16).normalize().multiplyScalar(Zc),this.followEnabled=!0,this._cameraTween=null,this._zoomDir=new I,this._orbitOffset=new I,this._panPlane=new rn(new I(0,1,0),0),this._panHit=new I,this._panPrev=new I,this._raycaster=new Ts,this._endTarget=new I,this._endPosition=new I,this._camScratch=new I,this._startTarget=new I,this._startPosition=new I,this._lastCenterKey=null;let n=t.world;this.target.copy(t.worldPos(n.w/2|0,n.h/2|0)),this.camera.position.copy(this.target).add(this.offset),this.camera.lookAt(this.target)}disableFollow(){this.followEnabled=!1}_setCameraActive(t){this.view.setPresentationActive({camera:t,tweens:this.tween.active})}_cancelCameraTween(){this._cameraTween&&(this._cameraTween.cancel(),this._cameraTween=null),this._setCameraActive(!1)}_orbitDir(t){return t.copy(this.camera.position).sub(this.target),t.lengthSq()<.01&&t.copy(this.offset),t.normalize()}zoom(t,e=.005){let n=this.camera.position.distanceTo(this.target),s=Math.max(PM,Math.min(IM,n+t*e));this._orbitDir(this._zoomDir),this.camera.position.copy(this.target).add(this._zoomDir.multiplyScalar(s)),this.camera.lookAt(this.target),this.view.requestRender()}rotate(t,e){this._orbitOffset.copy(this.camera.position).sub(this.target);let n=this._orbitOffset.length();if(n<.001)return;let s=Math.atan2(this._orbitOffset.x,this._orbitOffset.z),r=Math.asin(Math.max(-1,Math.min(1,this._orbitOffset.y/n)));s-=t*Yf,r+=e*Yf,r=Math.max(LM,Math.min(DM,r)),this._orbitOffset.x=n*Math.cos(r)*Math.sin(s),this._orbitOffset.y=n*Math.sin(r),this._orbitOffset.z=n*Math.cos(r)*Math.cos(s),this.camera.position.copy(this.target).add(this._orbitOffset),this.camera.lookAt(this.target),this.view.requestRender()}panFromNdc(t,e,n=1){this._panPlane.setFromNormalAndCoplanarPoint(new I(0,1,0),new I(0,this.target.y,0)),this._raycaster.setFromCamera(new pt(t.x,t.y),this.camera),this._raycaster.ray.intersectPlane(this._panPlane,this._panPrev),this._raycaster.setFromCamera(new pt(e.x,e.y),this.camera),this._raycaster.ray.intersectPlane(this._panPlane,this._panHit);let s=this._panPrev.sub(this._panHit).multiplyScalar(n);this.target.add(s),this.camera.position.add(s),this.camera.lookAt(this.target),this.view.requestRender()}follow(t){if(!this.followEnabled)return;let e=this.camera.position.distanceTo(this.target);e<.1&&(e=Zc),this._orbitDir(this._zoomDir),this.target.lerp(t,AM),this._camScratch.copy(this._zoomDir).multiplyScalar(e),this.camera.position.copy(this.target).add(this._camScratch),this.camera.lookAt(this.target)}centerOn(t,e,n=!1){let s=`${t},${e}`;if(this.view.worldPos(t,e,this._endTarget),this.target.distanceToSquared(this._endTarget)<CM&&this._lastCenterKey===s&&!this._cameraTween)return;this._lastCenterKey=s,this.followEnabled=!0;let a=this.camera.position.distanceTo(this.target);if(a<.1&&(a=Zc),this._orbitDir(this._zoomDir),this._endPosition.copy(this._endTarget).add(this._camScratch.copy(this._zoomDir).multiplyScalar(a)),n){this._cancelCameraTween(),this.target.copy(this._endTarget),this.camera.position.copy(this._endPosition),this.camera.lookAt(this.target),this.view.markDirty();return}this._cancelCameraTween(),this._startTarget.copy(this.target),this._startPosition.copy(this.camera.position),this._setCameraActive(!0),this.view.requestRender(),this._cameraTween=this.tween.add({duration:RM,ease:o=>o*(2-o),onUpdate:o=>{this.target.lerpVectors(this._startTarget,this._endTarget,o),this.camera.position.lerpVectors(this._startPosition,this._endPosition,o),this.camera.lookAt(this.target),this.view.markDirty()},onComplete:()=>{this._cameraTween=null,this._setCameraActive(!1),this.view.markDirty()}})}};function zi(i,t,e){let n=i.getBoundingClientRect();return{x:(t-n.left)/n.width*2-1,y:-((e-n.top)/n.height)*2+1}}function UM(i,t){let e=t.object;if(e.isInstancedMesh&&e.userData.tileGridGround){let n=t.instanceId;if(n==null||n<0)return null;let s=e.userData.insideTileGx,r=e.userData.insideTileGy;return s&&r&&n<s.length?{gx:s[n],gy:r[n]}:null}return e.userData.mergedOutsidePick?qo(i,t.point):null}var NM=(.35+.35*.35)/2+.35/2;function Kf(i){let t=new Ts,e=new pt,n=new rn(new I(0,1,0),-NM),s=new I;return function(a,o){if(e.set(a,o),t.setFromCamera(e,i.camera),t.ray.intersectPlane(n,s)){let h=qo(i.world,s);if(h)return h}let l=t.intersectObjects(i.tilesGroup.children,!0),c=null;for(let h of l){let u=UM(i.world,h);if(u){if(i.world.path[u.gy][u.gx])return u;c||(c=u)}}return c}}var OM=.25,FM=.03,Zf=.5,Jf=.35,BM=.8,jf=new Set(["arcaneBolt","feast","pierce","snipe","berserk","drain","shuriken","chokuto","bite","execute","judgement","exorcise","ambush","powerShot","concoct","bloodSuck","gnaw","malediction","skewer"]),Qf=new Set(["chakra","sacrifice"]),tp=new Set(["brave","focus","bloodlust","iaido","howl","mantra","sanctuary","windWalk","forge","fortify","warCry","foresight","overheal","rapid","vodoo"]),ep=new Set(["impale","poison","gaze","debilitate","bash","infect"]),np=new Set(["dominate","manaDrain","weaken","cripple","hex","blind","raid"]),ip=new Set(["reanimate"]);function He(i,t,e,n){return Math.abs(i-e)+Math.abs(t-n)}function sp(i){return i.settings.maxTurns-i.turnCount}function _n(i){return i.maxHp>0?i.hp/i.maxHp:1}function Jc(i){return i.maxHp>0&&_n(i)<FM}function jn(i){return i.maxHp>0&&_n(i)<OM}function rp(i,t){return i.units.filter(e=>e.hp>0&&e.player!==t.player)}function ap(i,t){return i.units.filter(e=>e.hp>0&&e.player===t.player&&e.id!==t.id)}function jc(i,t=null){let e=new Set;for(let n of i.units)n.hp<=0||n.id===t||e.add(i.tileKey(n.x,n.y));return e}function Sr(i){let t=Ht(i,"agi");return Xo(i)?Math.max(0,t):Math.max(4,t)}function op(i,t){let{world:e}=i,n=Sr(t),s=Vr(e,t.x,t.y,n,i.units,t),r=jc(i,t.id),a=[];return s.forEach((o,l)=>{o===0||r.has(l)||a.push({gx:l%e.w,gy:l/e.w|0,dist:o})}),a}function lp(i,t,{skipSkills:e=!1}={}){let n=t.range!=null?t.range:1;if(e)return n;let s=Mn(i,t).filter(a=>!a.disabled&&t.mp>=a.cost&&a.target==="enemy"),r=s.length?Math.max(...s.map(a=>a.range||0)):0;return Math.max(n,r)}function cp(i,t,e){return e?!1:i.level>=2&&t>=2}function kM(i,t){let e=Ht(i,"str")*.7+Ht(i,"dex")*.2+Ht(i,"int")*.1-(Ht(t,"vit")*.3+Ht(t,"luk")*.2);return Math.max(1,Math.floor(e))}function br(i,t){let e=Ht(t,"agi")*.7+Ht(t,"luk")*.3,n=Ht(i,"dex");return Math.min(1,n/Math.max(.001,e))}function xo(i,t,e){return Si({x:i,y:t},e)}function HM(i,t){let e=kM(i,t);return i.tempBuff?.doubleAttack===!0&&(e*=2),e*Si(i,t)}function zM(i,t){return HM(i,t)>=t.hp}function Qc(i,t){return zM(i,t)&&br(i,t)>=BM}function th(i,t,e,n,s){let r=[];for(let a of n){let o=He(t,e,a.x,a.y);o>0&&o<=s&&Ke(i,t,e,a.x,a.y)&&r.push({target:a,dist:o})}return r}function hp(i,t,e,n){let s=new Map;for(let r of t){let a=r.gy*i.w+r.gx;s.set(a,th(i,r.gx,r.gy,e,n))}return s}function yo(i,t,e){if(!i||i.length<=1)return null;for(let n=i.length-1;n>=1;n--){let s=i[n];if(t.has(s.y*e.w+s.x))return{gx:s.x,gy:s.y}}return null}function eh(i,t,e,n){if(!i||i.length<=1)return null;let s=Math.min(t,i.length-1);for(let r=s;r>=1;r--){let a=i[r];if(!e.has(a.y*n.w+a.x))return{gx:a.x,gy:a.y}}return null}function nh(i,t){if(!t.length||!i.length)return null;let e=null,n=1/0;for(let s of i){let r=1/0;for(let a of t)r=Math.min(r,He(s.gx,s.gy,a.gx,a.gy));r<n&&(n=r,e=s)}return e}function vo(i,t,e,n,s=null){let r=0;for(let a of n){let o=He(t,e,a.x,a.y);if(o===0)continue;let l=a.range!=null?a.range:1;if(o<=l&&Ke(i,t,e,a.x,a.y)){let h=s?Si(a,{x:t,y:e,facing:s}):1;r+=2*h;continue}let c=l+Math.max(1,Ht(a,"agi"));o<=c&&(r+=1)}return r}function Er(i,t,e,n=null){if(!t.length)return null;if(!e.length)return t[0];let s=null,r=1/0,a=-1;for(let o of t){let l=n?vn(n.x,n.y,o.gx,o.gy)||n.facing:null,c=vo(i,o.gx,o.gy,e,l),h=1/0;for(let u of e)h=Math.min(h,He(o.gx,o.gy,u.x,u.y));(c<r||c===r&&h>a)&&(r=c,a=h,s=o)}return s}function up(i,t,e){let{world:n}=i,s=new Set;for(let r of t){let a=r.range!=null?r.range:1;for(let o of e){let l=He(r.x,r.y,o.x,o.y);if(l>0&&l<=a&&Ke(n,r.x,r.y,o.x,o.y)){s.add(r.id);break}}}return s}function dp(i,t,e,n){if(!i.length)return null;if(!e.length)return i[0];let s=_n(t)>=.6,r=null,a=-1/0;for(let o of i){let l=1/0;for(let u of e)l=Math.min(l,He(o.gx,o.gy,u.x,u.y));let c=n.length?1/0:999;for(let u of n)c=Math.min(c,He(o.gx,o.gy,u.x,u.y));let h=s?c<l?l-1e3:l:l-c;h>a&&(a=h,r=o)}return r}function fp(i,t,e,n){if(!t.length)return null;let s=null,r=-1;for(let a of i){let o=1/0;for(let c of t)o=Math.min(o,He(a.gx,a.gy,c.x,c.y));let l=!1;for(let c of t){let h=He(a.gx,a.gy,c.x,c.y);if(h>0&&h<=e&&Ke(n,a.gx,a.gy,c.x,c.y)){l=!0;break}}l&&o>r&&(r=o,s=a)}return s}function pp(i){let t=[];return i.powerups.forEach((e,n)=>{t.push({gx:n%i.world.w,gy:n/i.world.w|0})}),t}function mp(i,t,e,n){let{world:s}=i;for(let r of n)for(let a of e){let o=a.range!=null?a.range:1,l=He(a.x,a.y,r.x,r.y);if(l>0&&l<=o&&Ke(s,a.x,a.y,r.x,r.y))return!0}return!1}function Mo(i,t,e){let n=zh(i.world,t.x,t.y,e,i.units,t);return!n||n.path.length<=1?null:n}function qe(i,t,e){return{type:"move",unitId:i.id,toGx:t,toGy:e}}var gp=[{dx:0,dy:1},{dx:0,dy:-1},{dx:1,dy:0},{dx:-1,dy:0}];function ih(i,t){let{world:e}=i;return gp.filter(({dx:n,dy:s})=>{let r=t.x+n,a=t.y+s;return r>=0&&r<e.w&&a>=0&&a<e.h}).map(({dx:n,dy:s})=>({dx:n,dy:s}))}function sh(i,t){let{world:e}=i,n=[];for(let{dx:s,dy:r}of gp){let a=t.x+s,o=t.y+r;if(!(a<0||a>=e.w||o<0||o>=e.h)){if(i.getUnitAtTile(a,o)){n.push({gx:a,gy:o});continue}xn(e,a,o)&&n.push({gx:a,gy:o})}}return n}function GM(i,t){return sh(i,t).map(({gx:e,gy:n})=>({dx:e-t.x,dy:n-t.y,gx:e,gy:n}))}function VM(i,t,e){let{world:n}=i,s=null,r=1/0,a=3;for(let o of e){if(!o||o.hp<=0)continue;let l=He(t.x,t.y,o.x,o.y);if(l===0)continue;let c=o.range!=null?o.range:1,h=Ke(n,t.x,t.y,o.x,o.y),u=l<=c&&h?0:h?1:2;u>a||(u<a||l<r)&&(s=o,r=l,a=u)}return s}function WM(i,t,e){if(!e.length||!t)return i.facing;let n=vn(i.x,i.y,t.x,t.y);if(n&&e.some(c=>c.dx===n.dx&&c.dy===n.dy))return n;let s=t.x-i.x,r=t.y-i.y,a=Math.hypot(s,r)||1,o=e[0],l=-1/0;for(let c of e){let h=s/a*c.dx+r/a*c.dy;h>l&&(l=h,o=c)}return o}function $M(i,t,e){let n=GM(i,t).map(({dx:r,dy:a})=>({dx:r,dy:a}));if(n.length||(n=ih(i,t)),!n.length)return t.facing;let s=VM(i,t,e);return s?WM(t,s,n):t.facing}function XM(i,t=null){let e={type:"endTurn",unitId:i.id};return t&&(e.facing=t),e}function Qn(i,t){let e=i.units.filter(n=>n.player!==t.player&&n.hp>0);return XM(t,$M(i,t,e))}function rh(i,t){return{type:"attack",unitId:i.id,targetId:t.id}}function _p(i,t,e){return{type:"skill",unitId:i.id,skillIndex:t,targetId:e?.id??i.id}}function _i(i,t,e,n,s){let{world:r}=i;if(!e.length||!n.length)return null;let a=Sr(t),o=Mo(i,t,e);if(o){let c=eh(o.path,a,s,r);if(c&&(c.gx!==t.x||c.gy!==t.y))return qe(t,c.gx,c.gy)}let l=nh(n,e);return l&&(l.gx!==t.x||l.gy!==t.y)?qe(t,l.gx,l.gy):null}function xp(i,t,e){let{world:n}=i,s=ks(n),r=nu(n,t.player),a=new Set(s.map(c=>i.tileKey(c.gx,c.gy))),o=s.filter(c=>!e.has(i.tileKey(c.gx,c.gy))),l=r.filter(c=>!e.has(i.tileKey(c.gx,c.gy)));return{centerTiles:s,enemyBaseTiles:r,centerKeys:a,centerTargets:o.length?o:s,baseTargets:l.length?l:r}}function ah(i,t,e,n,s){let{world:r}=i;if(!n.length||!s.length)return null;let a=Sr(t),o=new Set;for(let u of i.units)u.hp>0&&o.add(i.tileKey(u.x,u.y));let l=new Set(s.map(u=>i.tileKey(u.gx,u.gy)));function c(u,d){let m=null,_=e;for(let g=-_;g<=_;g++)for(let p=-_;p<=_;p++){if(p===0&&g===0||Math.abs(p)+Math.abs(g)>_)continue;let f=u.x+p,y=u.y+g;if(f<0||f>=r.w||y<0||y>=r.h||!xn(r,f,y)||!Ke(r,f,y,u.x,u.y)||o.has(i.tileKey(f,y)))continue;let x=Mi(r,t.x,t.y,f,y,i.units,t),M=x?x.length-1:1/0;x&&x.length>1&&(!d||M<=a)&&(!m||x.length<m.length)&&(m=x)}return m}let h=[];for(let u of n){let d=c(u,!0);d&&h.push({enemy:u,path:d})}if(h.length){let u=h.filter(p=>jn(p.enemy)),d=u.length?u:h;d.sort((p,f)=>u.length?p.enemy.hp-f.enemy.hp||p.path.length-f.path.length:p.path.length-f.path.length||p.enemy.hp-f.enemy.hp);let m=d[0].enemy,_=s.filter(p=>{let f=He(p.gx,p.gy,m.x,m.y);return f>0&&f<=e&&Ke(r,p.gx,p.gy,m.x,m.y)});if(_.length){_.sort((f,y)=>xo(y.gx,y.gy,m)-xo(f.gx,f.gy,m)||(f.dist||0)-(y.dist||0));let p=_[0];if(p.gx!==t.x||p.gy!==t.y)return qe(t,p.gx,p.gy)}let g=yo(d[0].path,l,r);if(g&&(g.gx!==t.x||g.gy!==t.y))return qe(t,g.gx,g.gy)}return null}function yp(i,t,e){if(!e.length)return null;let n=i.units.filter(a=>a.hp>0&&a.player===t);if(!n.length)return e[0];let s=e[0],r=-1;for(let a of e){let o=1/0;for(let l of n)o=Math.min(o,He(a.gx,a.gy,l.x,l.y));o>r&&(r=o,s=a)}return s}var vp=5,qM=.004;function Mp(i){for(;i>Math.PI;)i-=2*Math.PI;for(;i<-Math.PI;)i+=2*Math.PI;return i}function Sp(i,t,e,n){if(!n.length)return i.facing;let s=vn(i.x,i.y,t,e);return s&&n.some(r=>r.dx===s.dx&&r.dy===s.dy)?s:YM(null,i,t,e,n)}function YM(i,t,e,n,s){if(!s.length)return t.facing;let r;if(i){let l=i.worldPos(t.x,t.y),c=i.worldPos(e,n),h=c.x-l.x,u=c.z-l.z;r=h*h+u*u>1e-6?Math.atan2(h,u):Math.atan2(t.facing.dx,t.facing.dy)}else{let l=e-t.x,c=n-t.y;r=l!==0||c!==0?Math.atan2(l,c):Math.atan2(t.facing.dx,t.facing.dy)}let a=s[0],o=Math.abs(Mp(r-Math.atan2(a.dx,a.dy)));for(let l=1;l<s.length;l++){let c=s[l],h=Math.abs(Mp(r-Math.atan2(c.dx,c.dy)));h<o&&(o=h,a=c)}return a}var So=class{constructor({view:t,state:e,controller:n,camera:s,highlights:r,bus:a,dispatch:o,units:l}){this.view=t,this.state=e,this.controller=n,this.dispatch=o||(c=>n.dispatch(c)),this.camera=s,this.highlights=r,this.units=l,this.bus=a,this.container=t.container,this.pickTile=Kf(t),this.selectedUnitId=null,this.mode="move",this.skillIndex=-1,this.rangeKeys=new Set,this._allowedFacings=[],this.busy=!1,this._isPanning=!1,this._isRotating=!1,this._ctrlOnDown=!1,this._prevNdc=null,this._downPixel={x:0,y:0},this._isTouch=!1,this._pinchDist=null,this._pinchAngle=null,this._bind(),this._subscribe()}_key(t,e){return e*this.state.world.w+t}_subscribe(){let t=()=>this.onTurnRefreshed();this.bus.on("turnChanged",()=>{this._exitFacingMode(),t()}),this.bus.on("playingStarted",t),this.bus.on("actionResolved",t),this.bus.on("turnEndRequested",()=>{this.state.phase!=="playing"||!this.state.isHumanTurn()||this.enterFacingMode()})}onTurnRefreshed(){if(this.mode==="facing")return;this.clearSelection();let t=this.state;if(t.phase!=="playing"||!t.isHumanTurn())return;let e=t.getActiveUnit();e&&e.hp>0&&this.selectUnitForMove(e)}selectUnitForMove(t){if(this.selectedUnitId=t.id,this.mode="move",this.skillIndex=-1,this.state.hasMoved)this.rangeKeys=new Set,this.highlights.clear();else{let e=Vr(this.state.world,t.x,t.y,Ht(t,"agi"),this.state.units,t),n=[];this.rangeKeys=new Set,e.forEach((s,r)=>{if(s===0)return;let a=r%this.state.world.w,o=r/this.state.world.w|0;n.push({gx:a,gy:o}),this.rangeKeys.add(r)}),this.highlights.show(n,"move")}this._emitSelection()}enterAttackMode(){let t=this._activeHumanUnit();if(!t||this.state.hasAttacked)return;this.selectedUnitId=t.id,this.mode="attack",this.skillIndex=-1;let e=t.range!=null?t.range:1,n=Wr(this.state.world,t.x,t.y,e),s=[];this.rangeKeys=new Set,n.forEach((r,a)=>{let o=a%this.state.world.w,l=a/this.state.world.w|0;Ke(this.state.world,t.x,t.y,o,l)&&(s.push({gx:o,gy:l}),this.rangeKeys.add(a))}),this.highlights.show(s,"attack"),this._emitSelection()}enterSkillMode(t){let e=this._activeHumanUnit();if(!e||this.state.hasAttacked)return;let s=Mn(this.state,e)[t];if(!s||s.disabled)return;this.selectedUnitId=e.id,this.mode="skill",this.skillIndex=t;let r=Qh(this.state,e,s),a=Xi(this.state,e,s);this.rangeKeys=new Set(a.map(o=>this._key(o.gx,o.gy))),this.highlights.show(r,"skill"),this._emitSelection()}enterFacingMode(){let t=this._activeHumanUnit();if(!t)return;this.selectedUnitId=t.id,this.mode="facing",this.skillIndex=-1,this._allowedFacings=ih(this.state,t);let e=sh(this.state,t);if(this.rangeKeys=new Set(e.map(n=>this._key(n.gx,n.gy))),this.highlights.show(e,"facing"),this.units){this.units.setFacingMode(!0),this.units.showFacingArrow(t.id);let n=this._allowedFacings[0]||t.facing;this.units.setFacingPreview(t.id,n)}this._emitSelection()}_exitFacingMode(){this.mode==="facing"&&(this.units&&(this.units.hideFacingArrow(),this.units.setFacingMode(!1)),this._allowedFacings=[])}clearSelection(){this._exitFacingMode(),this.selectedUnitId=null,this.mode="move",this.skillIndex=-1,this.rangeKeys=new Set,this.highlights.clear(),this._emitSelection()}_activeHumanUnit(){let t=this.state;if(t.phase!=="playing"||!t.isHumanTurn())return null;let e=t.getActiveUnit();return e&&e.hp>0?e:null}_emitSelection(){let t=this.selectedUnitId!=null?this.state.getUnitById(this.selectedUnitId):null;this.bus.emit("selectionChanged",{unit:t,mode:this.mode,skillIndex:this.skillIndex})}_updateFacingFromPointer(t,e){let n=this._activeHumanUnit();if(!n||this.mode!=="facing"||!this._allowedFacings.length)return;let s=zi(this.container,t,e),r=this.pickTile(s.x,s.y);if(!r)return;let a=Sp(n,r.gx,r.gy,this._allowedFacings);this.units&&this.units.setFacingPreview(n.id,a)}async _onTileClick(t,e){if(this.busy)return;let n=this.state;if(n.phase==="draft"){if(n.gameMode==="online"&&this.controller.currentDraftPlayer!==n.localPlayerNumber)return;let a=n.draft;a&&a.pendingClassKey&&a.placementTiles&&a.placementTiles.some(o=>o.gx===t&&o.gy===e)&&(this.busy=!0,await this.dispatch({type:"draftPlace",gx:t,gy:e}),this.busy=!1);return}if(n.phase!=="playing"||n.gameMode==="cvcpu")return;let s=this._activeHumanUnit();if(this.mode==="facing"&&s){let a=Sp(s,t,e,this._allowedFacings);await this._confirmEndTurn(s,a);return}if(this.mode==="skill"&&s){let o=Mn(n,s)[this.skillIndex];if(!o){this.clearSelection();return}if(o.target==="self"&&t===s.x&&e===s.y){await this._dispatch({type:"skill",unitId:s.id,targetId:null,skillIndex:this.skillIndex});return}if(!this.rangeKeys.has(this._key(t,e)))return;let l=n.getUnitAtTile(t,e),c=l?l.id:null;await this._dispatch({type:"skill",unitId:s.id,targetId:c,skillIndex:this.skillIndex});return}if(this.mode==="attack"&&s){let a=n.getUnitAtTile(t,e);if(!this.rangeKeys.has(this._key(t,e)))return;a&&a.player!==s.player&&await this._dispatch({type:"attack",unitId:s.id,targetId:a.id});return}let r=n.getUnitAtTile(t,e);if(r){r.id===(s&&s.id)&&s?this.selectUnitForMove(s):this.bus.emit("previewUnit",{unit:r});return}this.bus.emit("previewUnit",{unit:null}),s&&this.selectedUnitId===s.id&&!n.hasMoved&&this.rangeKeys.has(this._key(t,e))&&await this._dispatch({type:"move",unitId:s.id,toGx:t,toGy:e})}async _confirmEndTurn(t,e){this.busy=!0,this._exitFacingMode(),this.highlights.clear(),this.rangeKeys=new Set,this.mode="move";try{await this.dispatch({type:"endTurn",unitId:t.id,facing:e||t.facing})}finally{this.busy=!1}}async _dispatch(t){this.busy=!0,this.highlights.clear(),this.rangeKeys=new Set;try{await this.dispatch(t)}finally{this.busy=!1}}_bind(){let t=this.container;t.style.cursor="grab",this._onPointerDown=this._onPointerDown.bind(this),this._onPointerMove=this._onPointerMove.bind(this),this._onPointerUp=this._onPointerUp.bind(this),this._onWheel=this._onWheel.bind(this),this._onTouchStart=this._onTouchStart.bind(this),this._onTouchMove=this._onTouchMove.bind(this),this._onTouchEnd=this._onTouchEnd.bind(this),window.addEventListener("pointerdown",this._onPointerDown),window.addEventListener("pointermove",this._onPointerMove),window.addEventListener("pointerup",this._onPointerUp),window.addEventListener("wheel",this._onWheel,{passive:!1}),t.addEventListener("touchstart",this._onTouchStart,{passive:!1}),t.addEventListener("touchmove",this._onTouchMove,{passive:!1}),t.addEventListener("touchend",this._onTouchEnd,{passive:!1}),t.addEventListener("touchcancel",this._onTouchEnd,{passive:!1})}_isUiTarget(t){let e=t&&(t.nodeType===1?t:t.parentElement);return!!(e&&e.closest("app-root, #turn-menu, #turn-menu-stack, #unit-details-card, #draft-panel, #draft-placement-card, #mode-select-overlay:not(.hidden), #game-over-overlay.visible, #online-connect-overlay, #rotate-overlay, button, input, select, textarea, a"))}_onPointerDown(t){t.pointerType!=="touch"&&(this._isUiTarget(t.target)||(this._downPixel={x:t.clientX,y:t.clientY},this._isTouch=!1,this._ctrlOnDown=t.ctrlKey,this._prevNdc=zi(this.container,t.clientX,t.clientY),this.container.style.cursor="grabbing"))}_onPointerMove(t){if(t.pointerType!=="touch"){if(this.mode==="facing"&&!this._isPanning&&!this._isRotating){this._updateFacingFromPointer(t.clientX,t.clientY);return}this._drag(t.clientX,t.clientY,t.ctrlKey)}}_drag(t,e,n){if(this._prevNdc==null)return;let s=t-this._downPixel.x,r=e-this._downPixel.y;if(!this._isPanning&&!this._isRotating&&(Math.abs(s)>vp||Math.abs(r)>vp)&&(n||this._ctrlOnDown?this._isRotating=!0:this._isPanning=!0,this.camera.disableFollow()),this._isRotating)this.camera.rotate(s,r),this._downPixel={x:t,y:e};else if(this._isPanning){let a=zi(this.container,t,e);this.camera.panFromNdc(this._prevNdc,a,(this._isTouch,1)),this._prevNdc=a}}_onPointerUp(t){t.pointerType!=="touch"&&this._endDrag(t.clientX,t.clientY)}_endDrag(t,e){if(this._prevNdc!=null&&!this._isPanning&&!this._isRotating){let n=zi(this.container,t,e),s=this.pickTile(n.x,n.y);s&&this._onTileClick(s.gx,s.gy)}this._prevNdc=null,this._isPanning=!1,this._isRotating=!1,this._ctrlOnDown=!1,this.container.style.cursor="grab"}_onWheel(t){this._isUiTarget(t.target)||(t.preventDefault(),this.camera.disableFollow(),this.camera.zoom(t.deltaY))}_touchCoords(t){return t.touches&&t.touches.length>0?{x:t.touches[0].clientX,y:t.touches[0].clientY}:t.changedTouches&&t.changedTouches.length>0?{x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}:{x:0,y:0}}_touchDistance(t){return!t||t.length<2?0:Math.hypot(t[1].clientX-t[0].clientX,t[1].clientY-t[0].clientY)}_touchAngle(t){return Math.atan2(t[1].clientY-t[0].clientY,t[1].clientX-t[0].clientX)}_normalizeAngleDelta(t){for(;t>Math.PI;)t-=2*Math.PI;for(;t<-Math.PI;)t+=2*Math.PI;return t}_beginTwoFingerTouch(t){this._pinchDist=this._touchDistance(t),this._pinchAngle=this._touchAngle(t),this._prevNdc=null,this._isPanning=!1,this._isRotating=!1}_onTouchStart(t){if(this._isUiTarget(t.target))return;if(t.touches.length===2){this._beginTwoFingerTouch(t.touches);return}if(t.touches.length!==1)return;this._pinchDist=null,this._pinchAngle=null;let e=this._touchCoords(t);this._downPixel={x:e.x,y:e.y},this._isTouch=!0,this._ctrlOnDown=!1,this._prevNdc=zi(this.container,e.x,e.y)}_onTouchMove(t){if(this._isUiTarget(t.target))return;if(t.touches.length===2){if(t.preventDefault(),this._pinchDist==null){this._beginTwoFingerTouch(t.touches);return}let n=this._touchDistance(t.touches),s=this._touchAngle(t.touches);if(this._pinchDist!=null&&this._pinchDist>0&&(this.camera.disableFollow(),this.camera.zoom(-(n-this._pinchDist),.15)),this._pinchAngle!=null){let r=this._normalizeAngleDelta(s-this._pinchAngle);Math.abs(r)>.001&&(this.camera.disableFollow(),this.camera.rotate(-r/qM,0))}this._pinchDist=n,this._pinchAngle=s;return}if(t.touches.length!==1)return;t.preventDefault();let e=this._touchCoords(t);if(this.mode==="facing"&&!this._isPanning&&!this._isRotating){this._updateFacingFromPointer(e.x,e.y);return}this._drag(e.x,e.y,!1)}_onTouchEnd(t){if(t.touches.length===1){this._pinchDist=null,this._pinchAngle=null;let n=t.touches[0];this._downPixel={x:n.clientX,y:n.clientY},this._isTouch=!0,this._prevNdc=zi(this.container,n.clientX,n.clientY);return}if(t.touches.length<2&&(this._pinchDist=null,this._pinchAngle=null),t.touches.length>=1)return;let e=this._touchCoords(t);this._isTouch=!1,this._endDrag(e.x,e.y)}};var KM=Symbol.for("preact-signals");function oh(){if(Gi>1)Gi--;else{var i,t=!1;for(function(){var s=Eo;for(Eo=void 0;s!==void 0;)s.S.v===s.v&&(s.S.i=s.i),s=s.o}();wr!==void 0;){var e=wr;for(wr=void 0,bo++;e!==void 0;){var n=e.u;if(e.u=void 0,e.f&=-3,!(8&e.f)&&Ap(e))try{e.c()}catch(s){t||(i=s,t=!0)}e=n}}if(bo=0,Gi--,t)throw i}}var de=void 0;function To(i){var t=de;de=void 0;try{return i()}finally{de=t}}var bp,wr=void 0,Gi=0,bo=0;var Ep=0,Eo=void 0,wo=0;function wp(i){if(de!==void 0){var t=i.n;if(t===void 0||t.t!==de)return t={i:0,S:i,p:de.s,n:void 0,t:de,e:void 0,x:void 0,r:t},de.s!==void 0&&(de.s.n=t),de.s=t,i.n=t,32&de.f&&i.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=de.s,t.n=void 0,de.s.n=t,de.s=t),t}}function Ye(i,t){this.v=i,this.i=0,this.n=void 0,this.t=void 0,this.l=0,this.W=t?.watched,this.Z=t?.unwatched,this.name=t?.name}Ye.prototype.brand=KM;Ye.prototype.h=function(){return!0};Ye.prototype.S=function(i){var t=this,e=this.t;e!==i&&i.e===void 0&&(i.x=e,this.t=i,e!==void 0?e.e=i:To(function(){var n;(n=t.W)==null||n.call(t)}))};Ye.prototype.U=function(i){var t=this;if(this.t!==void 0){var e=i.e,n=i.x;e!==void 0&&(e.x=n,i.e=void 0),n!==void 0&&(n.e=e,i.x=void 0),i===this.t&&(this.t=n,n===void 0&&To(function(){var s;(s=t.Z)==null||s.call(t)}))}};Ye.prototype.subscribe=function(i){var t=this;return ch(function(){var e=t.value;To(function(){return i(e)})},{name:"sub"})};Ye.prototype.valueOf=function(){return this.value};Ye.prototype.toString=function(){return this.value+""};Ye.prototype.toJSON=function(){return this.value};Ye.prototype.peek=function(){var i=this;return To(function(){return i.value})};Object.defineProperty(Ye.prototype,"value",{get:function(){var i=wp(this);return i!==void 0&&(i.i=this.i),this.v},set:function(i){if(i!==this.v){if(bo>100)throw new Error("Cycle detected");(function(e){Gi!==0&&bo===0&&e.l!==Ep&&(e.l=Ep,Eo={S:e,v:e.v,i:e.i,o:Eo})})(this),this.v=i,this.i++,wo++,Gi++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{oh()}}}});function Tp(i,t){return new Ye(i,t)}function Ap(i){for(var t=i.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function Rp(i){for(var t=i.s;t!==void 0;t=t.n){var e=t.S.n;if(e!==void 0&&(t.r=e),t.S.n=t,t.i=-1,t.n===void 0){i.s=t;break}}}function Cp(i){for(var t=i.s,e=void 0;t!==void 0;){var n=t.p;t.i===-1?(t.S.U(t),n!==void 0&&(n.n=t.n),t.n!==void 0&&(t.n.p=n)):e=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=n}i.s=e}function Ps(i,t){Ye.call(this,void 0,t),this.x=i,this.s=void 0,this.g=wo-1,this.f=4}Ps.prototype=new Ye;Ps.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===wo))return!0;if(this.g=wo,this.f|=1,this.i>0&&!Ap(this))return this.f&=-2,!0;var i=de;try{Rp(this),de=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(e){this.v=e,this.f|=16,this.i++}return de=i,Cp(this),this.f&=-2,!0};Ps.prototype.S=function(i){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}Ye.prototype.S.call(this,i)};Ps.prototype.U=function(i){if(this.t!==void 0&&(Ye.prototype.U.call(this,i),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};Ps.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var i=this.t;i!==void 0;i=i.x)i.t.N()}};Object.defineProperty(Ps.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var i=wp(this);if(this.h(),i!==void 0&&(i.i=this.i),16&this.f)throw this.v;return this.v}});function Pp(i){var t=i.m;if(i.m=void 0,typeof t=="function"){Gi++;var e=de;de=void 0;try{t()}catch(n){throw i.f&=-2,i.f|=8,lh(i),n}finally{de=e,oh()}}}function lh(i){for(var t=i.s;t!==void 0;t=t.n)t.S.U(t);i.x=void 0,i.s=void 0,Pp(i)}function ZM(i){if(de!==this)throw new Error("Out-of-order effect");Cp(this),de=i,this.f&=-2,8&this.f&&lh(this),oh()}function Is(i,t){this.x=i,this.m=void 0,this.s=void 0,this.u=void 0,this.f=32,this.name=t?.name,bp&&bp.push(this)}Is.prototype.c=function(){var i=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.m=t)}finally{i()}};Is.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,Pp(this),Rp(this),Gi++;var i=de;return de=this,ZM.bind(this,i)};Is.prototype.N=function(){2&this.f||(this.f|=2,this.u=wr,wr=this)};Is.prototype.d=function(){this.f|=8,1&this.f||lh(this)};Is.prototype.dispose=function(){this.d()};function ch(i,t){var e=new Is(i,t);try{e.c()}catch(s){throw e.d(),s}var n=e.d.bind(e);return n[Symbol.dispose]=n,n}var Ao=globalThis,Co=Ao.ShadowRoot&&(Ao.ShadyCSS===void 0||Ao.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Lp=Symbol(),Ip=new WeakMap,Ro=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==Lp)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(Co&&t===void 0){let n=e!==void 0&&e.length===1;n&&(t=Ip.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Ip.set(e,t))}return t}toString(){return this.cssText}},Dp=i=>new Ro(typeof i=="string"?i:i+"",void 0,Lp);var Up=(i,t)=>{if(Co)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let n=document.createElement("style"),s=Ao.litNonce;s!==void 0&&n.setAttribute("nonce",s),n.textContent=e.cssText,i.appendChild(n)}},hh=Co?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(let n of t.cssRules)e+=n.cssText;return Dp(e)})(i):i;var{is:JM,defineProperty:jM,getOwnPropertyDescriptor:QM,getOwnPropertyNames:tS,getOwnPropertySymbols:eS,getPrototypeOf:nS}=Object,Po=globalThis,Np=Po.trustedTypes,iS=Np?Np.emptyScript:"",sS=Po.reactiveElementPolyfillSupport,Tr=(i,t)=>i,uh={toAttribute(i,t){switch(t){case Boolean:i=i?iS:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},Fp=(i,t)=>!JM(i,t),Op={attribute:!0,type:String,converter:uh,reflect:!1,useDefault:!1,hasChanged:Fp};Symbol.metadata??=Symbol("metadata"),Po.litPropertyMetadata??=new WeakMap;var ti=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Op){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let n=Symbol(),s=this.getPropertyDescriptor(t,n,e);s!==void 0&&jM(this.prototype,t,s)}}static getPropertyDescriptor(t,e,n){let{get:s,set:r}=QM(this.prototype,t)??{get(){return this[e]},set(a){this[e]=a}};return{get:s,set(a){let o=s?.call(this);r?.call(this,a),this.requestUpdate(t,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Op}static _$Ei(){if(this.hasOwnProperty(Tr("elementProperties")))return;let t=nS(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Tr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Tr("properties"))){let e=this.properties,n=[...tS(e),...eS(e)];for(let s of n)this.createProperty(s,e[s])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[n,s]of e)this.elementProperties.set(n,s)}this._$Eh=new Map;for(let[e,n]of this.elementProperties){let s=this._$Eu(e,n);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let n=new Set(t.flat(1/0).reverse());for(let s of n)e.unshift(hh(s))}else t!==void 0&&e.push(hh(t));return e}static _$Eu(t,e){let n=e.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Up(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$ET(t,e){let n=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,n);if(s!==void 0&&n.reflect===!0){let r=(n.converter?.toAttribute!==void 0?n.converter:uh).toAttribute(e,n.type);this._$Em=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){let n=this.constructor,s=n._$Eh.get(t);if(s!==void 0&&this._$Em!==s){let r=n.getPropertyOptions(s),a=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:uh;this._$Em=s;let o=a.fromAttribute(e,r.type);this[s]=o??this._$Ej?.get(s)??o,this._$Em=null}}requestUpdate(t,e,n,s=!1,r){if(t!==void 0){let a=this.constructor;if(s===!1&&(r=this[t]),n??=a.getPropertyOptions(t),!((n.hasChanged??Fp)(r,e)||n.useDefault&&n.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,n))))return;this.C(t,e,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:n,reflect:s,wrapped:r},a){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??e??this[t]),r!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[s,r]of this._$Ep)this[s]=r;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[s,r]of n){let{wrapped:a}=r,o=this[s];a!==!0||this._$AL.has(s)||o===void 0||this.C(s,void 0,r,o)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(e)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};ti.elementStyles=[],ti.shadowRootOptions={mode:"open"},ti[Tr("elementProperties")]=new Map,ti[Tr("finalized")]=new Map,sS?.({ReactiveElement:ti}),(Po.reactiveElementVersions??=[]).push("2.1.2");var xh=globalThis,Bp=i=>i,Io=xh.trustedTypes,kp=Io?Io.createPolicy("lit-html",{createHTML:i=>i}):void 0,$p="$lit$",xi=`lit$${Math.random().toFixed(9).slice(2)}$`,Xp="?"+xi,rS=`<${Xp}>`,$i=document,Rr=()=>$i.createComment(""),Cr=i=>i===null||typeof i!="object"&&typeof i!="function",yh=Array.isArray,aS=i=>yh(i)||typeof i?.[Symbol.iterator]=="function",dh=`[ 	
\f\r]`,Ar=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Hp=/-->/g,zp=/>/g,Vi=RegExp(`>|${dh}(?:([^\\s"'>=/]+)(${dh}*=${dh}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Gp=/'/g,Vp=/"/g,qp=/^(?:script|style|textarea|title)$/i,vh=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),mt=vh(1),$E=vh(2),XE=vh(3),Cn=Symbol.for("lit-noChange"),xe=Symbol.for("lit-nothing"),Wp=new WeakMap,Wi=$i.createTreeWalker($i,129);function Yp(i,t){if(!yh(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return kp!==void 0?kp.createHTML(t):t}var oS=(i,t)=>{let e=i.length-1,n=[],s,r=t===2?"<svg>":t===3?"<math>":"",a=Ar;for(let o=0;o<e;o++){let l=i[o],c,h,u=-1,d=0;for(;d<l.length&&(a.lastIndex=d,h=a.exec(l),h!==null);)d=a.lastIndex,a===Ar?h[1]==="!--"?a=Hp:h[1]!==void 0?a=zp:h[2]!==void 0?(qp.test(h[2])&&(s=RegExp("</"+h[2],"g")),a=Vi):h[3]!==void 0&&(a=Vi):a===Vi?h[0]===">"?(a=s??Ar,u=-1):h[1]===void 0?u=-2:(u=a.lastIndex-h[2].length,c=h[1],a=h[3]===void 0?Vi:h[3]==='"'?Vp:Gp):a===Vp||a===Gp?a=Vi:a===Hp||a===zp?a=Ar:(a=Vi,s=void 0);let m=a===Vi&&i[o+1].startsWith("/>")?" ":"";r+=a===Ar?l+rS:u>=0?(n.push(c),l.slice(0,u)+$p+l.slice(u)+xi+m):l+xi+(u===-2?o:m)}return[Yp(i,r+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]},Pr=class i{constructor({strings:t,_$litType$:e},n){let s;this.parts=[];let r=0,a=0,o=t.length-1,l=this.parts,[c,h]=oS(t,e);if(this.el=i.createElement(c,n),Wi.currentNode=this.el.content,e===2||e===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(s=Wi.nextNode())!==null&&l.length<o;){if(s.nodeType===1){if(s.hasAttributes())for(let u of s.getAttributeNames())if(u.endsWith($p)){let d=h[a++],m=s.getAttribute(u).split(xi),_=/([.?@])?(.*)/.exec(d);l.push({type:1,index:r,name:_[2],strings:m,ctor:_[1]==="."?ph:_[1]==="?"?mh:_[1]==="@"?gh:Ds}),s.removeAttribute(u)}else u.startsWith(xi)&&(l.push({type:6,index:r}),s.removeAttribute(u));if(qp.test(s.tagName)){let u=s.textContent.split(xi),d=u.length-1;if(d>0){s.textContent=Io?Io.emptyScript:"";for(let m=0;m<d;m++)s.append(u[m],Rr()),Wi.nextNode(),l.push({type:2,index:++r});s.append(u[d],Rr())}}}else if(s.nodeType===8)if(s.data===Xp)l.push({type:2,index:r});else{let u=-1;for(;(u=s.data.indexOf(xi,u+1))!==-1;)l.push({type:7,index:r}),u+=xi.length-1}r++}}static createElement(t,e){let n=$i.createElement("template");return n.innerHTML=t,n}};function Ls(i,t,e=i,n){if(t===Cn)return t;let s=n!==void 0?e._$Co?.[n]:e._$Cl,r=Cr(t)?void 0:t._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),r===void 0?s=void 0:(s=new r(i),s._$AT(i,e,n)),n!==void 0?(e._$Co??=[])[n]=s:e._$Cl=s),s!==void 0&&(t=Ls(i,s._$AS(i,t.values),s,n)),t}var fh=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:n}=this._$AD,s=(t?.creationScope??$i).importNode(e,!0);Wi.currentNode=s;let r=Wi.nextNode(),a=0,o=0,l=n[0];for(;l!==void 0;){if(a===l.index){let c;l.type===2?c=new Ir(r,r.nextSibling,this,t):l.type===1?c=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(c=new _h(r,this,t)),this._$AV.push(c),l=n[++o]}a!==l?.index&&(r=Wi.nextNode(),a++)}return Wi.currentNode=$i,s}p(t){let e=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}},Ir=class i{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,n,s){this.type=2,this._$AH=xe,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Ls(this,t,e),Cr(t)?t===xe||t==null||t===""?(this._$AH!==xe&&this._$AR(),this._$AH=xe):t!==this._$AH&&t!==Cn&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):aS(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==xe&&Cr(this._$AH)?this._$AA.nextSibling.data=t:this.T($i.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Pr.createElement(Yp(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===s)this._$AH.p(e);else{let r=new fh(s,this),a=r.u(this.options);r.p(e),this.T(a),this._$AH=r}}_$AC(t){let e=Wp.get(t.strings);return e===void 0&&Wp.set(t.strings,e=new Pr(t)),e}k(t){yh(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,n,s=0;for(let r of t)s===e.length?e.push(n=new i(this.O(Rr()),this.O(Rr()),this,this.options)):n=e[s],n._$AI(r),s++;s<e.length&&(this._$AR(n&&n._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let n=Bp(t).nextSibling;Bp(t).remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},Ds=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,s,r){this.type=1,this._$AH=xe,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=xe}_$AI(t,e=this,n,s){let r=this.strings,a=!1;if(r===void 0)t=Ls(this,t,e,0),a=!Cr(t)||t!==this._$AH&&t!==Cn,a&&(this._$AH=t);else{let o=t,l,c;for(t=r[0],l=0;l<r.length-1;l++)c=Ls(this,o[n+l],e,l),c===Cn&&(c=this._$AH[l]),a||=!Cr(c)||c!==this._$AH[l],c===xe?t=xe:t!==xe&&(t+=(c??"")+r[l+1]),this._$AH[l]=c}a&&!s&&this.j(t)}j(t){t===xe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},ph=class extends Ds{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===xe?void 0:t}},mh=class extends Ds{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==xe)}},gh=class extends Ds{constructor(t,e,n,s,r){super(t,e,n,s,r),this.type=5}_$AI(t,e=this){if((t=Ls(this,t,e,0)??xe)===Cn)return;let n=this._$AH,s=t===xe&&n!==xe||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==xe&&(n===xe||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},_h=class{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Ls(this,t)}};var lS=xh.litHtmlPolyfillSupport;lS?.(Pr,Ir),(xh.litHtmlVersions??=[]).push("3.3.3");var Kp=(i,t,e)=>{let n=e?.renderBefore??t,s=n._$litPart$;if(s===void 0){let r=e?.renderBefore??null;n._$litPart$=s=new Ir(t.insertBefore(Rr(),r),r,void 0,e??{})}return s._$AI(i),s};var Mh=globalThis,ee=class extends ti{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Kp(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Cn}};ee._$litElement$=!0,ee.finalized=!0,Mh.litElementHydrateSupport?.({LitElement:ee});var cS=Mh.litElementPolyfillSupport;cS?.({LitElement:ee});(Mh.litElementVersions??=[]).push("4.2.2");var jt=Tp(hS());function hS(){return{screen:"mode-select",phase:"draft",gameMode:"pvp",currentPlayer:1,turnCount:0,maxTurns:200,turnsLeft:null,isHumanTurn:!0,selectedUnit:null,previewUnit:null,availableSkills:[],actionState:{attackMode:!1,skillMode:!1,choosingFacing:!1,hasMoved:!1,hasAttacked:!1},draft:null,battleStart:!1,gameOver:null,online:null,rotate:!1,settings:null}}function oe(i){jt.value={...jt.value,...i}}function Me(i=ee){return class extends i{_disposeEffect=null;connectedCallback(){super.connectedCallback(),this._startEffect()}disconnectedCallback(){super.disconnectedCallback(),this._disposeEffect&&(this._disposeEffect(),this._disposeEffect=null)}_startEffect(){this._disposeEffect=ch(()=>{jt.value,this.requestUpdate()})}}}function Zp(i,t){let e=()=>i.phase==="playing"?i.getActiveUnit():null,n=o=>o?Mn(i,o).map((l,c)=>({index:c,name:l.name,cost:l.cost||0,hpCost:l.hpCost||0,level:l.level||1,description:l.description||"",disabled:!!l.disabled,target:l.target})):[],s=()=>{let o=e();oe({phase:i.phase,gameMode:i.gameMode,currentPlayer:i.currentPlayer,turnCount:i.turnCount,maxTurns:i.settings.maxTurns,turnsLeft:i.phase==="playing"?i.settings.maxTurns-i.turnCount:null,isHumanTurn:i.phase==="playing"?i.isHumanTurn():!1,selectedUnit:Fs(o),availableSkills:n(o),actionState:{attackMode:!1,skillMode:!1,choosingFacing:!1,hasMoved:i.hasMoved,hasAttacked:i.hasAttacked}})},r=o=>!(i.gameMode==="cvcpu"||i.gameMode==="pvcpu"&&o!==1||i.gameMode==="online"&&o!==i.localPlayerNumber),a=()=>{let o=i.draft;if(!o){oe({draft:null});return}let l=hn(i);oe({phase:"draft",gameMode:i.gameMode,currentPlayer:l,draft:{player:l,pickCount:qr(i),pendingClassKey:o.pendingClassKey||null,availableClasses:o.availableClasses?Array.from(o.availableClasses):[],pickedClasses:i.units.filter(c=>c.player===l).map(c=>c.class),picksPerPlayer:i.settings.draftPicksPerPlayer,isHumanTurn:r(l)}})};return t.on("playingStarted",s),t.on("turnChanged",s),t.on("afterEndTurn",s),t.on("actionResolved",s),t.on("initiativeChanged",s),t.on("unitStatsChanged",()=>{let o=e();oe({selectedUnit:Fs(o),availableSkills:n(o)})}),t.on("selectionChanged",({unit:o,mode:l})=>{oe({selectedUnit:Fs(o||e()),availableSkills:n(o||e()),actionState:{...jt.value.actionState,attackMode:l==="attack",skillMode:l==="skill",choosingFacing:l==="facing"}})}),t.on("previewUnit",({unit:o})=>oe({previewUnit:Fs(o)})),t.on("draftStarted",a),t.on("draftPickChosen",a),t.on("draftTurnChanged",a),t.on("unitPlaced",a),t.on("draftComplete",()=>oe({draft:null})),t.on("gameOver",({winner:o,title:l,classRecord:c})=>{let h=o??1,u=i.units.filter(d=>d.player===h&&!d.summonedBy).map(d=>({id:d.id,name:d.name,class:d.class,level:d.level,hp:d.hp,maxHp:d.maxHp,mp:d.mp,maxMp:d.maxMp,lowHp:d.maxHp>0&&d.hp/d.maxHp<.3,stats:{str:Ht(d,"str"),agi:Ht(d,"agi"),vit:Ht(d,"vit"),dex:Ht(d,"dex"),luk:Ht(d,"luk"),int:Ht(d,"int")}}));oe({phase:"gameover",gameOver:{winner:o,title:l||(o?`Player ${o} wins!`:"Draw"),cards:u,classRecord:c||null}})}),{syncHud:s,syncDraft:a,imageFor:o=>cn[o]}}var Jt={startMatch:i=>{},toModeSelect:()=>{},draftPick:i=>{},attack:()=>{},skill:i=>{},endTurn:()=>{},cancel:()=>{},onlineStart:i=>{},onlineHost:i=>{},onlineHostConnect:i=>{},onlineJoin:(i,t)=>{},onlineCancel:()=>{}};var Jp=[{value:"balanced",label:"Balanced (lineup mix)"},{value:"tanky",label:"Tanky (HP + VIT)"},{value:"aggressive",label:"Aggressive (STR + AGI)"},{value:"scout",label:"Scout (high AGI)"},{value:"ranged",label:"Ranged (DEX + range)"},{value:"caster",label:"Caster (INT + MP)"},{value:"random",label:"Random"},{value:"custom",label:"Custom order"}],jp=[...Ue],uS={tank:["knight","berserker","werewolf","ghoul","barbarian"],melee:["samurai","assassin","ninja","bandit","lancer"],support:["paladin","monk","blacksmith","exorcist","oracle"],ranged:["ranger","amazon","hunter","alchemist","cannibal"],caster:["mage","witch","vampire","necromancer","shaman"]},Lr={tank:2,melee:2,support:1,ranged:1,caster:1},Sh=(()=>{let i={};for(let[t,e]of Object.entries(uS))for(let n of e)i[n]=t;return i})();function Qp(i){let t=Math.max(1,i),e=Object.keys(Lr),n=e.reduce((l,c)=>l+(Lr[c]??0),0),s={},r=0;for(let l of e){let c=Math.floor(t*(Lr[l]??0)/n);s[l]=c,r+=c}let a=t-r,o=[...e].sort((l,c)=>s[l]!==s[c]?s[l]-s[c]:(Lr[c]??0)-(Lr[l]??0));for(let l=0;a>0&&l<o.length;l++)s[o[l]]++,a--;return s}var bh=[{id:"pvp",title:"Player vs Player",short:"PvP",desc:"Two players on the same device."},{id:"pvcpu",title:"Player vs CPU",short:"PvCPU",desc:"You control your army; the CPU responds."},{id:"cvcpu",title:"CPU vs CPU",short:"Watch",desc:"Watch two AI armies fight."},{id:"online",title:"Online Match",short:"Online",desc:"Play a friend over the internet."}],dS={pvp:mt`
    <svg class="mode-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M6.5 2.8 9.7 6l-1.4 1.4-2.4-2.4-1.4 1.4 2.4 2.4L5.5 10 2.3 6.8 3.7 5.4 6.1 7.8 7.5 6.4 4.3 3.2 5.7 1.8 6.5 2.8Zm11 0 1.4-1.4 3.2 3.2-1.4 1.4-2.4-2.4-1.4 1.4 2.4 2.4-1.4 1.4-3.2-3.2 1.4-1.4 2.4 2.4 1.4-1.4-2.4-2.4 1.4-1.4Z"/>
      <path fill="currentColor" d="M8.8 13.2 13.2 8.8l6 6-1.4 1.4-4.6-4.6-4.6 4.6-1.4-1.4 6-6Z"/>
    </svg>`,pvcpu:mt`
    <svg class="mode-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M12 2 20 5v6.2c0 4.8-3.4 8.8-8 10.8-4.6-2-8-6-8-10.8V5l8-3Zm0 2.2L6 6.4V11c0 3.7 2.6 7 6 8.8 3.4-1.8 6-5.1 6-8.8V6.4l-6-2.2Z"/>
    </svg>`,cvcpu:mt`
    <svg class="mode-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M12 5c-3.9 0-7 2.7-7 6.2 0 2.2 1.2 4.1 3 5.3-.3.9-.8 1.7-1.5 2.5 2-.5 3.6-1.5 4.8-2.8 1.5.4 3.1.4 4.7 0 1.2 1.3 2.8 2.3 4.8 2.8-.7-.8-1.2-1.6-1.5-2.5 1.8-1.2 3-3.1 3-5.3C19 7.7 15.9 5 12 5Zm0 2.2c2.6 0 4.6 1.7 4.6 4 0 2.3-2 4-4.6 4s-4.6-1.7-4.6-4c0-2.3 2-4 4.6-4Z"/>
    </svg>`,online:mt`
    <svg class="mode-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="none" stroke="currentColor" stroke-width="1.8" d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z"/>
      <path fill="none" stroke="currentColor" stroke-width="1.8" d="M3 12h18M12 3c2.4 2.8 2.4 14.2 0 18M12 3c-2.4 2.8-2.4 14.2 0 18"/>
    </svg>`},Eh=class extends Me(ee){createRenderRoot(){return this}constructor(){super(),this.mode="pvp",this.form={mapMode:"long",numUnits:Se.draftPicksPerPlayer,aiDraftPreference:"balanced",numGames:1,moveDurationMs:Se.moveDurationMs,gridW:Se.gridW,gridH:Se.gridH,centerPlazaRadius:Se.centerPlazaRadius,maxTurns:Se.maxTurns}}_setMode(t){this.mode=t,this.requestUpdate()}_upd(t,e){this.form={...this.form,[t]:e},this.requestUpdate()}_play(){let t={mode:this.mode,...this.form};this.mode==="online"?Jt.onlineStart(t):Jt.startMatch(t)}_modeIcon(t,e){return mt`<span class="${e} mode-icon mode-icon--${t}">${dS[t]}</span>`}_renderSettings(t){let e=(s,r,a={})=>mt`
      <div class="mode-field">
        <label for=${s}>${a.label}</label>
        <input id=${s} type="number" inputmode="numeric" .value=${String(t[r])}
          min=${a.min??1} max=${a.max??999} step=${a.step??1}
          @input=${o=>this._upd(r,Number(o.target.value))} />
      </div>`,n=(s,r,a,o)=>mt`
      <div class="mode-field">
        <label for=${s}>${a}</label>
        <select id=${s} @change=${l=>this._upd(r,l.target.value)}>
          ${o.map(([l,c])=>mt`<option value=${l} ?selected=${t[r]===l}>${c}</option>`)}
        </select>
      </div>`;return mt`
      ${this.mode==="pvp"||this.mode==="online"?n("mode-map","mapMode","Map size",[["long","Normal"],["short","Short"]]):""}
      ${e("mode-units","numUnits",{label:"Units per player",min:1,max:20})}
      ${this.mode!=="pvp"&&this.mode!=="online"?n("mode-ai-draft","aiDraftPreference","AI draft style",Jp.map(s=>[s.value,s.label])):""}
      ${this.mode==="cvcpu"?e("mode-games","numGames",{label:"Games to run",min:1,max:999}):""}
      ${e("mode-speed","moveDurationMs",{label:"Move speed (ms)",min:0,max:5e3,step:50})}
      ${Os?mt`
        ${e("mode-grid-w","gridW",{label:"Grid width",min:5,max:50})}
        ${e("mode-grid-h","gridH",{label:"Grid height",min:5,max:50})}
        ${e("mode-plaza","centerPlazaRadius",{label:"Center plaza",min:.1,max:.9,step:.01})}
        ${e("mode-turns","maxTurns",{label:"Max turns",min:10,max:999})}
      `:""}
    `}render(){if(jt.value.screen!=="mode-select")return mt``;let t=this.form,e=bh.find(n=>n.id===this.mode);return mt`
      <div id="mode-select-overlay">
        <div class="mode-select-scroll">
          <div class="mode-select-inner">
            <header class="mode-select-header">
              <div class="mode-select-brand">
                <h1 class="mode-select-title">TACTICS</h1>
                <p class="mode-select-tagline">Turn-based tactics on a living tile map</p>
              </div>
            </header>

            <div class="mode-select-main">
              <section class="mode-select-modes">
                <p class="mode-section-label">Choose a mode</p>
                <div class="mode-picker-grid" role="group" aria-label="Game mode">
                  ${bh.map(n=>mt`
                    <button type="button"
                      class="mode-tile ${this.mode===n.id?"selected":""}"
                      aria-pressed=${this.mode===n.id}
                      aria-label=${`${n.title}. ${n.desc}`}
                      @click=${()=>this._setMode(n.id)}>
                      ${this._modeIcon(n.id,"mode-tile-icon")}
                      <span class="mode-tile-body">
                        <span class="mode-tile-name mode-tile-name-short">${n.short}</span>
                        <span class="mode-tile-name mode-tile-name-full">${n.title}</span>
                        <span class="mode-tile-desc">${n.desc}</span>
                      </span>
                    </button>
                  `)}
                </div>
                ${e?mt`
                  <div class="mode-selected-card">
                    ${this._modeIcon(e.id,"mode-selected-icon")}
                    <div class="mode-selected-copy">
                      <div class="mode-selected-title">${e.title}</div>
                      <p class="mode-selected-desc">${e.desc}</p>
                    </div>
                  </div>
                `:""}

                <ul class="mode-list-desktop" aria-label="Game mode">
                  ${bh.map(n=>mt`
                    <li>
                      <button type="button"
                        class="mode-card mode-card-desc ${this.mode===n.id?"selected":""}"
                        aria-pressed=${this.mode===n.id}
                        aria-label=${n.title}
                        @click=${()=>this._setMode(n.id)}>
                        ${this._modeIcon(n.id,"mode-card-icon")}
                        <span class="mode-card-copy">
                          <h2 class="mode-card-title">${n.title}</h2>
                          <p class="mode-card-desc-text">${n.desc}</p>
                        </span>
                      </button>
                    </li>
                  `)}
                </ul>
              </section>

              <aside class="mode-select-settings-col">
                <div class="mode-play-wrap">
                  <button type="button" class="mode-play-btn" @click=${()=>this._play()}>
                    <span class="mode-play-text">${this.mode==="online"?"Connect online":"Start game"}</span>
                  </button>
                </div>
                <details class="mode-settings-details" open>
                  <summary class="mode-settings-summary">Match settings</summary>
                  <div class="mode-card mode-settings-card">
                    <div class="mode-settings-fields">
                      ${this._renderSettings(t)}
                    </div>
                  </div>
                </details>
              </aside>
            </div>
          </div>
        </div>
      </div>
    `}};customElements.define("mode-select-screen",Eh);var wh=class extends Me(ee){createRenderRoot(){return this}render(){let t=jt.value;if(t.screen!=="game")return mt``;let e=t.phase==="draft"?t.draft:null,n=e?e.player:t.currentPlayer,s=e?"Draft":"Turn",r=e?e.pendingClassKey?`P${e.player} \xB7 place ${Ne[e.pendingClassKey]?.name||"unit"}`:`P${e.player} \xB7 pick class`:`Player ${t.currentPlayer}`,a=t.phase==="playing"&&t.turnsLeft!=null,o=a&&t.turnsLeft<=10,l=e?e.pendingClassKey?"Click a highlighted base tile to place your unit.":e.isHumanTurn?"Choose a class to draft.":"Waiting for opponent\u2026":t.actionState?.choosingFacing?"Click a tile or unit to choose facing direction.":"Select a unit, then click a highlighted tile to move";return mt`
      <div id="ui" class="player-${n}">
        <div class="hud-brand">
          <h1>TACTICS</h1>
        </div>
        <div class="hud-status">
          <div class="hud-turn-pill turn">
            <span class="hud-turn-label">${s}</span>
            <span id="turn-player">${r}</span>
          </div>
          <div class="hud-turns-pill turns-left ${o?"turns-left-low":""}" id="turns-left" style="display:${a?"flex":"none"}">
            <span class="hud-turns-label">Left</span>
            <span id="turns-left-value">${t.turnsLeft}</span>
          </div>
        </div>
        <p class="hud-instructions instructions">${l}</p>
      </div>
    `}};customElements.define("hud-bar",wh);var Lo={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Do=i=>(...t)=>({_$litDirective$:i,values:t}),Us=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this._$Ct=t,this._$AM=e,this._$Ci=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var tm=Do(class extends Us{constructor(i){if(super(i),i.type!==Lo.ATTRIBUTE||i.name!=="class"||i.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(t=>i[t]).join(" ")+" "}update(i,[t]){if(this.st===void 0){this.st=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(let n in t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}let e=i.element.classList;for(let n of this.st)n in t||(e.remove(n),this.st.delete(n));for(let n in t){let s=!!t[n];s===this.st.has(n)||this.nt?.has(n)||(s?(e.add(n),this.st.add(n)):(e.remove(n),this.st.delete(n)))}return Cn}});var Dr=class extends Us{constructor(t){if(super(t),this.it=xe,t.type!==Lo.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===xe||t==null)return this._t=void 0,this.it=t;if(t===Cn)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;let e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};Dr.directiveName="unsafeHTML",Dr.resultType=1;var Uo=Do(Dr);var fS=["str","agi","vit","dex","luk","int"],em="tactics-turn-details",Th=class extends Me(ee){createRenderRoot(){return this}constructor(){super(),this._skillsOpen=!1,this._showDetails=sessionStorage.getItem(em)!=="0",this._onDocClick=null}connectedCallback(){super.connectedCallback(),this._onDocClick=t=>{if(!this._skillsOpen)return;let e=this.querySelector(".skill-wrap");e&&!e.contains(t.target)&&(this._skillsOpen=!1,this.requestUpdate())},document.addEventListener("click",this._onDocClick)}disconnectedCallback(){this._onDocClick&&document.removeEventListener("click",this._onDocClick),super.disconnectedCallback()}_toggleSkills(t){t?.stopPropagation(),this._skillsOpen=!this._skillsOpen,this.requestUpdate()}_toggleDetails(t){t?.stopPropagation(),this._showDetails=!this._showDetails,sessionStorage.setItem(em,this._showDetails?"1":"0"),this.requestUpdate()}_pickSkill(t){this._skillsOpen=!1,Jt.skill(t),this.requestUpdate()}_statRows(t){return mt`
      <span>HP</span><span class="stat-val stat-val-hp">${t.hp}/${t.maxHp}</span>
      <span>MP</span><span class="stat-val">${t.mp}/${t.maxMp}</span>
      ${fS.map(e=>mt`
        <span>${e.toUpperCase()}</span>
        <span class="stat-val">${Uo(t.statsHtml[e])}</span>
      `)}
    `}_effectRows(t,e){return!t||t.length===0?mt`<li class="unit-effect-item unit-effect-empty">None</li>`:t.map(n=>mt`
      <li class="unit-effect-item unit-effect-${e}">
        <span class="unit-effect-name">${n.name}</span>
        ${n.detail?mt`<span class="unit-effect-meta">${n.detail}</span>`:""}
      </li>
    `)}_renderEffectsSection(t,e,n){return mt`
      <div class="unit-effects-group unit-effects-${n}">
        <span class="unit-details-row-label">${t}</span>
        <ul class="unit-effects-list">${this._effectRows(e,n)}</ul>
      </div>
    `}_renderDetailsBody(t){return mt`
      <div class="unit-details-body">
        <div class="unit-details-col unit-details-col-stats">
          <span class="unit-details-row-label">Stats</span>
          <div class="unit-details-stats">${this._statRows(t)}</div>
        </div>
        <div class="unit-details-col unit-details-col-effects">
          ${this._renderEffectsSection("Buffs",t.buffs??[],"buff")}
          ${this._renderEffectsSection("Debuffs",t.debuffs??[],"debuff")}
        </div>
      </div>
    `}render(){let t=jt.value;if(t.screen!=="game"||t.phase!=="playing")return mt``;let e=t.selectedUnit,n=!t.isHumanTurn,s=t.actionState?.choosingFacing,r=t.availableSkills||[],a=r.length===0,o=this._showDetails&&!!e;return mt`
      <div id="turn-menu-stack" class=${tm({[`player-${t.currentPlayer}`]:!0,"details-open":o,"details-closed":!o,"low-hp":!!e?.lowHp,"level-2":!!e&&e.level>=2&&e.level<3,"level-3":!!e&&e.level>=3})}>
        ${e?mt`
          <div id="unit-details-card" class="unit-details-card unit-details-card--mobile" aria-hidden=${!o}>
            <div class="unit-details-card-inner">
              ${this._renderDetailsBody(e)}
            </div>
          </div>
        `:""}

        <div id="turn-menu" style="display:flex">
          <div class="unit-info ${e?"":"no-unit"}" id="unit-info">
            <div class="unit-info-primary">
              <img class="unit-class-image" src="${e&&cn[e.class]||""}" alt="" referrerpolicy="no-referrer" />
              <div class="unit-info-meta">
                <div class="unit-info-text">
                  <div class="unit-name-row">
                    <span class="unit-name">${e?e.name:"\u2014 Select a unit \u2014"}</span>
                    <span class="unit-level-class">${e?`Lv.${e.level} ${Ne[e.class]?.name||e.class}`:""}</span>
                  </div>
                  ${e?mt`
                    <div class="unit-info-compact">HP ${e.hp}/${e.maxHp} · MP ${e.mp}/${e.maxMp}</div>
                  `:""}
                </div>
                ${e?mt`
                  <div class="unit-info-stats unit-details-stats">${this._statRows(e)}</div>
                `:""}
              </div>
            </div>
            ${e?mt`
              <div class="unit-info-effects">
                ${this._renderEffectsSection("Buffs",e.buffs??[],"buff")}
                ${this._renderEffectsSection("Debuffs",e.debuffs??[],"debuff")}
              </div>
            `:""}
          </div>
          <div class="menu-actions">
            <span class="menu-label">${s?"Choose facing":`Player ${t.currentPlayer}`}</span>
            <button type="button"
              class="details-toggle"
              ?disabled=${!e}
              aria-expanded=${o}
              aria-label=${o?"Hide unit details":"Show unit details"}
              @click=${l=>this._toggleDetails(l)}>
              Details
            </button>
            <button type="button" ?disabled=${n||s||t.actionState.hasAttacked} @click=${()=>Jt.attack()}>Attack</button>
            <div class="skill-wrap">
              <button type="button" ?disabled=${n||s||t.actionState.hasAttacked||a} @click=${l=>this._toggleSkills(l)}>Skill</button>
              <div class="skill-list-overlay" style="display:${this._skillsOpen?"block":"none"}">
                ${r.length===0?mt`<div class="skill-option" style="cursor:default;color:#8b949e;">No skills available</div>`:""}
                ${r.map(l=>mt`
                  <button type="button" class="skill-option" ?disabled=${l.disabled} @click=${()=>this._pickSkill(l.index)}>
                    <span class="skill-name">${l.name}</span>
                    <span class="skill-meta">${l.cost} MP · Lv.${l.level}</span>
                    ${l.description?mt`<br /><span class="skill-meta">${l.description}</span>`:""}
                  </button>
                `)}
              </div>
            </div>
            <button type="button" class="end" ?disabled=${n||s} @click=${()=>Jt.endTurn()}>End</button>
          </div>
        </div>
      </div>
    `}};customElements.define("turn-menu",Th);var Ur=3,Ah=class extends Me(ee){createRenderRoot(){return this}constructor(){super(),this._selected=null}_select(t){this._selected=t,this.requestUpdate()}_confirm(){this._selected&&(Jt.draftPick(this._selected),this._selected=null,this.requestUpdate())}_statPairs(t){return[["HP",t.hp],["MP",t.mp],["STR",t.str],["AGI",t.agi],["VIT",t.vit],["DEX",t.dex],["LUK",t.luk],["INT",t.int],["RNG",t.range]]}_skillCostLabel(t){return t.hpCost?`${t.hpCost} HP`:`${t.cost} MP`}_renderSkills(t){let e=ei[t]||[];return e.length===0?mt`<div class="draft-detail-skills"><div class="draft-detail-skill">No skills</div></div>`:mt`
      <div class="draft-detail-skills">
        ${e.map(n=>mt`
          <div class="draft-detail-skill">
            <span class="draft-detail-skill-name">${n.name}</span>
            <span class="draft-detail-skill-meta">${this._skillCostLabel(n)} · Lv.${n.level}</span>
            ${n.description?mt`<span class="draft-detail-skill-desc">${n.description}</span>`:""}
          </div>
        `)}
      </div>
    `}_placementCard(t,e){let n=Ne[t];return n?mt`
      <div class="draft-class-card ${e?"draft-class-card-current":""}">
        <img class="draft-class-card-image" src="${cn[t]||""}" alt="" referrerpolicy="no-referrer" />
        <div class="draft-class-card-body">
          <div class="draft-class-card-name">${n.name}</div>
          <div class="draft-class-card-stats">
            ${this._statPairs(n).map(([s,r])=>mt`
              <span class="draft-stat-label">${s}</span><span class="draft-stat-value">${r}</span>
            `)}
          </div>
        </div>
      </div>
    `:mt``}_renderPlacement(t){let e=[...t.pickedClasses||[],t.pendingClassKey].filter(Boolean),n=e.length>Ur,s=n?Array.from({length:Math.ceil(e.length/Ur)},(r,a)=>e.slice(a*Ur,(a+1)*Ur)):[e];return mt`
      <div id="draft-placement-card" class="player-${t.player} ${n?"draft-placement-cols":""}" style="display:flex">
        ${s.map((r,a)=>mt`
          <div class="draft-placement-col">
            ${r.map((o,l)=>{let c=a*Ur+l;return this._placementCard(o,c===e.length-1)})}
          </div>
        `)}
      </div>
    `}_renderPicker(t){let e=t.availableClasses||[],n=this._selected?Ne[this._selected]:null,s=t.isHumanTurn?`Player ${t.player}: Pick a class (${t.pickCount}/${t.picksPerPlayer})`:`Player ${t.player} is picking a class`;return mt`
      <div id="draft-panel" style="display:flex">
        <div id="draft-header">
          <div id="draft-title">${s}</div>
          <div id="draft-message">${t.isHumanTurn?"Choose a class to draft.":"CPU is drafting\u2026"}</div>
        </div>
        <div id="draft-body">
          <div id="draft-detail">
            <div class="draft-detail-card">
              ${n?mt`
                <img class="draft-detail-image" src="${cn[this._selected]||""}" alt="" referrerpolicy="no-referrer" />
                <div class="draft-detail-content">
                  <div class="draft-detail-name">${n.name}</div>
                  <div class="draft-detail-stats">
                    ${this._statPairs(n).map(([r,a])=>mt`
                      <span class="draft-stat-label">${r}</span><span class="draft-stat-value">${a}</span>
                    `)}
                  </div>
                  ${this._renderSkills(this._selected)}
                </div>
                <button type="button" class="draft-select-btn" ?disabled=${!t.isHumanTurn} @click=${()=>this._confirm()}>Select</button>
              `:mt`<div class="draft-detail-placeholder">Click a class to view details</div>`}
            </div>
          </div>
          <div id="draft-classes">
            ${e.map(r=>mt`
              <button type="button" class="draft-class-card ${this._selected===r?"draft-class-card-selected":""}"
                ?disabled=${!t.isHumanTurn}
                @click=${()=>this._select(r)}>
                <img class="draft-class-card-image" src="${cn[r]||""}" alt="" referrerpolicy="no-referrer" />
                <div class="draft-class-card-body">
                  <div class="draft-class-card-name">${Ne[r]?Ne[r].name:r}</div>
                </div>
              </button>
            `)}
          </div>
        </div>
      </div>
    `}render(){let t=jt.value;if(t.screen!=="game"||t.phase!=="draft"||!t.draft)return mt``;let e=t.draft;return e.pendingClassKey?this._renderPlacement(e):this._renderPicker(e)}};customElements.define("draft-panel",Ah);var Rh=class extends Me(ee){createRenderRoot(){return this}render(){let t=jt.value.previewUnit;if(!t)return mt``;let e=["str","agi","vit","dex","luk","int"];return mt`
      <div id="unit-preview-card" class="player-${t.player}" style="display:flex">
        <img class="unit-preview-image" src="${cn[t.class]||""}" alt="" referrerpolicy="no-referrer" />
        <div class="unit-preview-body">
          <div class="unit-preview-name">${t.name} <small>Lv.${t.level}</small></div>
          <div class="unit-preview-meta">HP ${t.hp}/${t.maxHp} · MP ${t.mp}/${t.maxMp}</div>
          <div class="unit-preview-stats">
            ${e.map(n=>mt`<span>${n.toUpperCase()} ${Uo(t.statsHtml[n])}</span>`)}
          </div>
        </div>
      </div>
    `}};customElements.define("unit-preview",Rh);var pS=["str","agi","vit","dex","luk","int"],Ch=class extends Me(ee){createRenderRoot(){return this}_levelClass(t){return t>=3?"level-3":t>=2?"level-2":""}_renderCard(t){let e=this._levelClass(t.level);return mt`
      <div class="game-over-card ${e} ${t.lowHp?"low-hp":""}">
        <img class="game-over-card-image" src="${cn[t.class]||""}" alt="" referrerpolicy="no-referrer" />
        <div class="game-over-card-body">
          <div class="game-over-card-name">${t.name}</div>
          <div class="game-over-card-meta">Lv.${t.level} ${t.class} — HP ${t.hp}/${t.maxHp}</div>
          <div class="game-over-card-stats">
            <span class="stat-label">HP</span><span class="stat-val stat-val-hp">${t.hp}/${t.maxHp}</span>
            <span class="stat-label">MP</span><span class="stat-val">${t.mp}/${t.maxMp}</span>
            ${pS.map(n=>mt`
              <span class="stat-label">${n.toUpperCase()}</span>
              <span class="stat-val">${t.stats[n]}</span>
            `)}
          </div>
        </div>
      </div>
    `}_renderClassRecord(t){return mt`
      <div class="game-over-class-record">
        <table>
          <thead>
            <tr>
              <th>Class</th>
              <th>Battles</th>
              <th>Kills</th>
              <th>Deaths</th>
              <th>Wins</th>
              <th>Losses</th>
              <th>Win %</th>
              <th>Loss %</th>
            </tr>
          </thead>
          <tbody>
            ${t.map(e=>mt`
              <tr>
                <td class="class-name">${e.class}</td>
                <td>${e.battles}</td>
                <td>${e.kills}</td>
                <td>${e.deaths}</td>
                <td>${e.wins}</td>
                <td>${e.losses}</td>
                <td>${e.winRate}</td>
                <td>${e.lossRate}</td>
              </tr>
            `)}
          </tbody>
        </table>
      </div>
    `}render(){let t=jt.value.gameOver;if(!t)return mt``;let e=t.cards||[];return mt`
      <div id="game-over-overlay" class="visible">
        <div class="game-over-title">${t.title}</div>
        <div class="game-over-cards">
          ${e.map(n=>this._renderCard(n))}
        </div>
        ${t.classRecord?this._renderClassRecord(t.classRecord):""}
        <button type="button" class="mode-play-btn" @click=${()=>Jt.toModeSelect()}>
          <span class="mode-play-text">Main menu</span>
        </button>
      </div>
    `}};customElements.define("game-over-screen",Ch);var Ph=class extends Me(ee){createRenderRoot(){return this}render(){let t=jt.value.battleStart;return mt`
      <div id="battle-start-overlay" class="${t?"visible":""}" aria-hidden="${t?"false":"true"}">
        <div class="battle-start-content">
          <div class="battle-start-message">Battle Start</div>
          <div class="battle-start-sword-bar" role="progressbar">
            <div class="battle-start-sword-bar-fill"></div>
          </div>
        </div>
      </div>
    `}};customElements.define("battle-start",Ph);var Ih=class extends Me(ee){createRenderRoot(){return this}render(){return jt.value.screen!=="game"?mt``:mt`
      <div id="rotate-overlay" aria-hidden="true">
        <div class="rotate-overlay-icon">↻</div>
        <p class="rotate-overlay-text">Rotate to landscape for the best experience.<br />The board needs horizontal space to play.</p>
      </div>
    `}};customElements.define("rotate-overlay",Ih);var Lh=class extends Me(ee){createRenderRoot(){return this}constructor(){super(),this._name="",this._reply="",this._offerIn=""}_upd(t,e){this[t]=e,this.requestUpdate()}async _copy(t){try{navigator.clipboard&&t&&await navigator.clipboard.writeText(t)}catch{}}render(){let t=jt.value.online;if(!t)return mt``;let e=t.view||"menu";return mt`
      <div id="online-connect-overlay" class="online-connect-overlay">
        <div class="online-connect-inner">
          <h2 class="online-connect-title">Online Match</h2>
          ${t.error?mt`<p class="online-error">${t.error}</p>`:""}
          ${this._renderView(t,e)}
        </div>
      </div>`}_renderView(t,e){return e==="hosting"?this._renderHosting(t):e==="joining"?this._renderJoining():e==="joined"?this._renderJoined(t):this._renderMenu()}_renderMenu(){return mt`
      <label for="online-player-name">Your name</label>
      <input id="online-player-name" type="text" .value=${this._name}
        placeholder="Enter your name"
        @input=${t=>this._upd("_name",t.target.value)} />
      <div class="online-connect-actions">
        <button type="button" @click=${()=>Jt.onlineHost(this._name)}>Host game</button>
        <button type="button" @click=${()=>this._goJoin()}>Join game</button>
        <button type="button" @click=${()=>Jt.onlineCancel()}>Cancel</button>
      </div>`}_goJoin(){jt.value={...jt.value,online:{view:"joining",error:""}}}_renderHosting(t){return mt`
      <div class="online-section">
        <p class="online-instruction">1. Send this invite code to your opponent.</p>
        <textarea readonly .value=${t.offer||""}></textarea>
        <button type="button" @click=${()=>this._copy(t.offer)}>Copy invite code</button>
      </div>
      <div class="online-section">
        <p class="online-instruction">2. Paste their reply code and connect.</p>
        <textarea placeholder="Paste reply code here" .value=${this._reply}
          @input=${e=>this._upd("_reply",e.target.value)}></textarea>
        <button type="button" @click=${()=>Jt.onlineHostConnect(this._reply)}>Connect</button>
        ${t.waiting?mt`<p class="online-waiting">Connecting…</p>`:""}
      </div>
      <div class="online-connect-actions">
        <button type="button" @click=${()=>Jt.onlineCancel()}>Cancel</button>
      </div>`}_renderJoining(){return mt`
      <div class="online-section">
        <p class="online-instruction">Paste the invite code from the host.</p>
        <textarea placeholder="Paste invite code here" .value=${this._offerIn}
          @input=${t=>this._upd("_offerIn",t.target.value)}></textarea>
        <button type="button" @click=${()=>Jt.onlineJoin(this._offerIn,this._name)}>Generate reply code</button>
      </div>
      <div class="online-connect-actions">
        <button type="button" @click=${()=>Jt.onlineCancel()}>Cancel</button>
      </div>`}_renderJoined(t){return mt`
      <div class="online-section" id="online-join-answer-section">
        <p class="online-instruction">Send this reply code back to the host.</p>
        <textarea readonly .value=${t.answer||""}></textarea>
        <button type="button" @click=${()=>this._copy(t.answer)}>Copy reply code</button>
        <p class="online-waiting">Waiting for the host to connect…</p>
      </div>
      <div class="online-connect-actions">
        <button type="button" @click=${()=>Jt.onlineCancel()}>Cancel</button>
      </div>`}};customElements.define("online-connect",Lh);var Dh=class extends Me(ee){createRenderRoot(){return this}render(){return mt`
      <mode-select-screen></mode-select-screen>
      <hud-bar></hud-bar>
      <draft-panel></draft-panel>
      <turn-menu></turn-menu>
      <unit-preview></unit-preview>
      <battle-start></battle-start>
      <game-over-screen></game-over-screen>
      <rotate-overlay></rotate-overlay>
      <online-connect></online-connect>
    `}};customElements.define("app-root",Dh);var mS=[{urls:"stun:stun.l.google.com:19302"}];function nm(i){return btoa(JSON.stringify(i))}function im(i){return JSON.parse(atob(i.trim()))}var Nr=class{constructor(){this.pc=null,this.channel=null,this.onOpen=null,this.onMessage=null,this.onClose=null,this.onError=null}_newPc(){let t=new RTCPeerConnection({iceServers:mS});return t.onconnectionstatechange=()=>{["disconnected","failed","closed"].includes(t.connectionState)&&this.onClose&&this.onClose()},this.pc=t,t}_wireChannel(t){this.channel=t,t.onopen=()=>this.onOpen&&this.onOpen(),t.onclose=()=>this.onClose&&this.onClose(),t.onmessage=e=>{if(this.onMessage)try{this.onMessage(JSON.parse(e.data))}catch(n){this.onError&&this.onError(n)}}}_waitIceComplete(t){return new Promise(e=>{if(t.iceGatheringState==="complete")return e();let n=()=>{t.iceGatheringState==="complete"&&(t.removeEventListener("icegatheringstatechange",n),e())};t.addEventListener("icegatheringstatechange",n),setTimeout(e,4e3)})}async createOffer(){let t=this._newPc();this._wireChannel(t.createDataChannel("game",{ordered:!0}));let e=await t.createOffer();return await t.setLocalDescription(e),await this._waitIceComplete(t),nm(t.localDescription)}async acceptAnswer(t){await this.pc.setRemoteDescription(im(t))}async acceptOffer(t){let e=this._newPc();e.ondatachannel=s=>this._wireChannel(s.channel),await e.setRemoteDescription(im(t));let n=await e.createAnswer();return await e.setLocalDescription(n),await this._waitIceComplete(e),nm(e.localDescription)}send(t){this.channel&&this.channel.readyState==="open"&&this.channel.send(JSON.stringify(t))}close(){if(this.channel)try{this.channel.close()}catch{}if(this.pc)try{this.pc.close()}catch{}this.channel=null,this.pc=null}};var No=class{constructor({transport:t,controller:e,localPlayerNumber:n}){this.transport=t,this.controller=e,this.localPlayerNumber=n,this._outSeq=0,this._seenRemote=new Set,this._queue=[],this._ready=!1,t.onMessage=s=>this._onMessage(s)}markReady(){this._ready=!0;for(let t of this._queue)this.controller.dispatch(t);this._queue.length=0}localDispatcher(){return{dispatch:t=>this.sendLocal(t)}}sendLocal(t){let e=++this._outSeq;return this.transport.send({kind:"intent",from:this.localPlayerNumber,seq:e,intent:t}),this.controller.dispatch(t)}_onMessage(t){if(!t||t.kind!=="intent")return;let e=`${t.from}:${t.seq}`;if(!this._seenRemote.has(e)){if(this._seenRemote.add(e),!this._ready){this._queue.push(t.intent);return}this.controller.dispatch(t.intent)}}};var Oo=class{constructor({state:t,controller:e,bus:n,isCPU:s}){this.state=t,this.controller=e,this.bus=n,this.isCPU=s,this._busy=!1;let r=()=>this._maybeAct();n.on("draftStarted",r),n.on("draftPickChosen",r),n.on("draftTurnChanged",r),n.on("unitPlaced",r)}_maybeAct(){let t=this.state;if(t.phase!=="draft"||this._busy||this._draftComplete())return;let e=hn(t);e==null||!this.isCPU(e)||(this._busy=!0,setTimeout(()=>this._act(e),400))}_draftComplete(){return this.state.draft.pickIndex>=2*this.state.settings.draftPicksPerPlayer}async _act(t){let e=this.state;try{if(e.phase!=="draft"||this._draftComplete()||hn(e)!==t)return;let n=e.draft;if(n.pendingClassKey){let s=yp(this.state,t,n.placementTiles);s&&await this.controller.dispatch({type:"draftPlace",gx:s.gx,gy:s.gy})}else{let s=this._pickClass(t);s&&await this.controller.dispatch({type:"draftPick",classKey:s})}}finally{this._busy=!1,this._maybeAct()}}_pickClass(t){let e=this.state.draft.availableClasses,n=Ue.filter(g=>e.has(g));if(n.length===0)return null;let s=this.state.aiDraftPreference||"balanced",r=g=>Ne[g]||{};if(s==="random")return n[Math.floor(this.state.rng.next()*n.length)];if(s==="custom")return jp.find(g=>e.has(g))||n[0];let a=(g,p)=>{let f=n[0],y=g(f),x=p(f);for(let M=1;M<n.length;M++){let R=n[M],v=g(R),E=p(R);(v>y||v===y&&E>x)&&(f=R,y=v,x=E)}return f};if(s==="tanky")return a(g=>r(g).hp??0,g=>r(g).vit??0);if(s==="aggressive")return a(g=>r(g).str??0,g=>r(g).agi??0);if(s==="scout")return a(g=>r(g).agi??0,g=>r(g).dex??0);if(s==="ranged")return a(g=>r(g).range??0,g=>r(g).dex??0);if(s==="caster")return a(g=>r(g).int??0,g=>r(g).mp??0);let o=this.state.settings.draftPicksPerPlayer,l=Qp(o),c={tank:0,melee:0,support:0,ranged:0,caster:0};for(let g of this.state.units){if(g.player!==t)continue;let p=Sh[g.class];p&&c[p]++}let h=g=>Math.max(0,(l[g]??0)-(c[g]??0)),u=g=>{let p=Sh[g];return{def:p!=null?h(p):0,hp:r(g).hp??0,negVar:-(Gh[g]??1/0)}},d=(g,p)=>g.def!==p.def?g.def>p.def:g.hp!==p.hp?g.hp>p.hp:g.negVar>p.negVar,m=n[0],_=u(m);for(let g=1;g<n.length;g++){let p=u(n[g]);d(p,_)&&(m=n[g],_=p)}return m}};function sm(i,t,e=null){if(!t.length)return null;let n=t;if(e&&e.size){let o=t.filter(l=>e.has(l.target.id));o.length&&(n=o)}let s=n.filter(o=>Qc(i,o.target));if(s.length)return s.sort((o,l)=>br(i,l.target)-br(i,o.target)||o.target.hp-l.target.hp||o.dist-l.dist),s[0].target;let r=o=>o.target.hp/(xo(i.x,i.y,o.target)*Math.max(.05,br(i,o.target)));return n.slice().sort((o,l)=>r(o)-r(l)||o.dist-l.dist)[0]?.target??null}function Fo(i,t,e){return Xi(i,t,e).filter(n=>n.targetUnit).map(n=>n.targetUnit)}function gS(i,t,e){let{enemiesInRange:n,enemiesInRangeByTile:s,reachableTiles:r,hasLowHpEnemyInRange:a,hasLowHpEnemyReachable:o}=e,l=Mn(i,t),c=a||!i.hasMoved&&o,h=null,u=null,d=-1,m=(g,p,f)=>{h=g,u=p,d=f};if(!c)for(let g=0;g<l.length;g++){let p=l[g];if(p.disabled||t.mp<p.cost||!Qf.has(p.effectKey))continue;let f=Xi(i,t,p).filter(y=>y.targetUnit&&_n(y.targetUnit)<Zf);if(f.length){let y=f.sort((x,M)=>x.targetUnit.hp-M.targetUnit.hp)[0].targetUnit;m(p,y,g);break}}if(!h&&!c){let g=i.units.filter(p=>p.hp<=0&&!p.isReanimated);for(let p=0;p<l.length;p++){let f=l[p];if(!(f.disabled||t.mp<f.cost)&&!(f.effectKey==="reanimate"&&!g.length)&&ip.has(f.effectKey)){m(f,t,p);break}}}if(!h&&!c&&(n.length>0||r.some(p=>(s.get(i.tileKey(p.gx,p.gy))||[]).length>0))){let p=l.map((f,y)=>({skill:f,index:y})).filter(({skill:f})=>!f.disabled&&tp.has(f.effectKey)).sort((f,y)=>(y.skill.level||1)-(f.skill.level||1));for(let{skill:f,index:y}of p){let x=t.tempBuff&&t.tempBuff.duration>0;if(f.target==="self"){if(f.effectKey==="bloodlust"&&_n(t)>.8)continue;if(!x){m(f,t,y);break}}if(f.target==="ally"){if(f.effectKey==="overheal"&&_n(t)>.7)continue;let M=Xi(i,t,f).filter(E=>E.targetUnit).map(E=>E.targetUnit);if(!M.length)continue;let R=M.filter(E=>!E.tempBuff||E.tempBuff.duration<=0),v=(R.length?R:M).sort((E,U)=>E.hp-U.hp)[0];if(v.tempBuff&&v.tempBuff.duration>0||f.effectKey==="overheal"&&_n(v)>.7)continue;m(f,v,y);break}if(f.target==="enemy"){let M=Fo(i,t,f);if(f.effectKey==="vodoo"&&t.tempBuff?.vodoo&&(M=M.filter(R=>R.id!==t.tempBuff.vodoo)),M.length){m(f,M.sort((R,v)=>R.hp-v.hp)[0],y);break}}}}if(!h){let g=null;for(let p=0;p<l.length;p++){let f=l[p];if(f.disabled||t.mp<f.cost||!jf.has(f.effectKey)||f.effectKey==="feast"&&_n(t)>.7||f.effectKey==="berserk"&&_n(t)<.25||f.effectKey==="shuriken"&&n.length>0||f.effectKey==="judgement"&&_n(t)>.7)continue;let y=Fo(i,t,f);if(!y.length)continue;let x=y.filter(v=>_n(v)<Jf),M=x.length?x:y,R=f.type==="spell"?M.reduce((v,E)=>{if(!v)return E;let U=Ht(E,"int")-Ht(v,"int");return U<0||U===0&&E.hp<v.hp?E:v},null):M.reduce((v,E)=>!v||E.hp<v.hp?E:v,null);R&&(!g||R.hp<g.target.hp||R.hp===g.target.hp&&(f.cost||0)<(g.skill.cost||0))&&(g={skill:f,index:p,target:R})}g&&m(g.skill,g.target,g.index)}if(!h&&!c)for(let g=0;g<l.length;g++){let p=l[g];if(p.disabled||t.mp<p.cost||!np.has(p.effectKey))continue;let f=Fo(i,t,p);if(f.length){m(p,f.reduce((y,x)=>!y||x.hp<y.hp?x:y,null),g);break}}if(!h&&!c)for(let g=0;g<l.length;g++){let p=l[g];if(p.disabled||t.mp<p.cost||!ep.has(p.effectKey))continue;let y=Fo(i,t,p).filter(x=>!x.tempDebuff||x.tempDebuff.duration<=0);if(y.length){m(p,y.reduce((x,M)=>!x||M.hp<x.hp?M:x,null),g);break}}if(!h||!u||d<0)return null;let _=h.target==="self"?t:u;return _p(t,d,_)}function rm(i,t,e,n){let s=pp(i);return!s.length||!e.length?null:_i(i,t,s,e,n)}function am(i,t,e){let{reachableTiles:n,occupied:s,prioritizeEnemyBase:r,enemyBaseTiles:a,baseTargets:o,centerTargets:l}=e;if(!n.length)return null;if(r&&a.length&&!a.some(h=>h.gx===t.x&&h.gy===t.y)){let h=_i(i,t,o,n,s);if(h)return h}return _i(i,t,l,n,s)}function om(i,t,e,n){if(!jn(t)||!e.length)return null;let{world:s}=i,r=vo(s,t.x,t.y,n,t.facing);if(r<=0)return null;let a=Er(s,e,n,t);if(!a||a.gx===t.x&&a.gy===t.y)return null;let o=vn(t.x,t.y,a.gx,a.gy)||t.facing;return vo(s,a.gx,a.gy,n,o)<r?qe(t,a.gx,a.gy):null}function _S(i,t,e){let{enemies:n,allies:s,reachableTiles:r,occupied:a,effRange:o,isRangedAi:l,centerTiles:c,centerKeys:h,centerTargets:u,baseTargets:d,enemyBaseTiles:m,prioritizeEnemyBase:_,tl:g}=e,{world:p}=i,f=Sr(t),y=new Set(r.map(v=>i.tileKey(v.gx,v.gy)));if(l&&n.length&&i.powerups.size>0){let v=rm(i,t,r,a);if(v)return v}if(g<=20&&c.length){if(c.some(S=>S.gx===t.x&&S.gy===t.y)){let S=r.filter(F=>h.has(i.tileKey(F.gx,F.gy))&&(F.gx!==t.x||F.gy!==t.y)),w=Er(p,S,n,t);return w?qe(t,w.gx,w.gy):Qn(i,t)}let E=Mo(i,t,u);if(E){let S=eh(E.path,f,a,p);if(S)return qe(t,S.gx,S.gy)}let U=nh(r,u);return U?qe(t,U.gx,U.gy):Qn(i,t)}let x=om(i,t,r,n);if(x)return x;if(!jn(t)&&r.length){let v=am(i,t,e);if(v)return v}if(Jc(t)&&g>20){let{enemiesInRangeByTile:v}=e,E=null,U=1/0;for(let w of r){let q=(v.get(i.tileKey(w.gx,w.gy))||[]).filter(C=>jn(C.target));if(!q.length)continue;let H=Math.min(...q.map(C=>C.target.hp));H<U&&(U=H,E=w)}if(E){let w=Mi(p,t.x,t.y,E.gx,E.gy,i.units,t),F=w?yo(w,y,p):null;if(F)return qe(t,F.gx,F.gy)}let S=Er(p,r,n,t);return S?qe(t,S.gx,S.gy):Qn(i,t)}let M=l?fp(r,n,o,p):null;if(M)return qe(t,M.gx,M.gy);let R=dp(r,t,n,s);return R?qe(t,R.gx,R.gy):Qn(i,t)}function xS(i,t){let e=rp(i,t),n=ap(i,t),s=op(i,t),r=jc(i,t.id),a=t.tempBuff?.doubleAttack===!0,o=lp(i,t,{skipSkills:a}),l=t.range!=null?t.range:1,c=cp(t,o,a),h=sp(i),u=t.level===2&&h>20,{centerTiles:d,enemyBaseTiles:m,centerKeys:_,centerTargets:g,baseTargets:p}=xp(i,t,r),f=th(i.world,t.x,t.y,e,l),y=hp(i.world,s,e,o),x=f.some(v=>jn(v.target)),M=x||s.some(v=>(y.get(i.tileKey(v.gx,v.gy))||[]).some(U=>jn(U.target))),R={enemies:e,allies:n,reachableTiles:s,occupied:r,effRange:o,attackRange:l,isRangedAi:c,centerTiles:d,centerKeys:_,centerTargets:g,baseTargets:p,enemyBaseTiles:m,prioritizeEnemyBase:u,tl:h,enemiesInRange:f,enemiesInRangeByTile:y,hasLowHpEnemyInRange:x,hasLowHpEnemyReachable:M};if(e.length===0){if(!i.hasMoved&&s.length){let E=_i(i,t,u?p:g,s,r);if(E)return E}return Qn(i,t)}if(i.hasAttacked)return i.hasMoved?null:_S(i,t,R);if(f.length){let v=f.filter(E=>Qc(t,E.target));if(v.length){let E=sm(t,v);if(E)return rh(t,E)}}if(!a){let v=gS(i,t,R);if(v)return v}if(f.length){let v=mp(i,t,e,n)?up(i,e,n):null,E=sm(t,f,v);if(E)return rh(t,E)}if(a){let v=ah(i,t,l,e,s);if(v)return v}if(!i.hasMoved){if(!M){let E=om(i,t,s,e);if(E)return E}if(!M&&i.powerups.size>0){let E=rm(i,t,s,r);if(E)return E}if(h<=20&&d.length&&!d.some(U=>U.gx===t.x&&U.gy===t.y)){let S=Mo(i,t,g)?.path??null,w=Math.min(...d.map(C=>He(t.x,t.y,C.gx,C.gy))),F=null,q=-1;for(let C of s){let N=i.tileKey(C.gx,C.gy);if(Math.min(...d.map(L=>He(C.gx,C.gy,L.gx,L.gy)))>w||!(y.get(N)||[]).some(L=>jn(L.target)))continue;let P=S?S.findIndex(L=>L.x===C.gx&&L.y===C.gy):0;P>q&&(q=P,F=C)}if(F){let C=Mi(i.world,t.x,t.y,F.gx,F.gy,i.units,t),N=new Set(s.map(k=>i.tileKey(k.gx,k.gy))),G=C?yo(C,N,i.world):null;if(G)return qe(t,G.gx,G.gy)}let H=_i(i,t,g,s,r);if(H)return H}if(h<=10&&d.length){let E=_i(i,t,g,s,r);if(E)return E}if(h>20&&u&&m.length&&!m.some(U=>U.gx===t.x&&U.gy===t.y)){let U=_i(i,t,p,s,r);if(U)return U}if(h>20&&Jc(t)){let E=Er(i.world,s,e,t);if(E)return qe(t,E.gx,E.gy)}let v=ah(i,t,o,e,s);if(v)return v;if(h>20&&!jn(t)){let E=am(i,t,R);if(E)return E}}return Qn(i,t)}var Bo=class{constructor({state:t,controller:e,bus:n,isCPU:s}){this.state=t,this.controller=e,this.bus=n,this.isCPU=s,this._busy=!1;let r=()=>this._maybeAct(),a=()=>this._endWithFacing();n.on("playingStarted",r),n.on("turnChanged",r),n.on("actionResolved",r),n.on("initiativeChanged",r),n.on("turnEndRequested",a)}async _endWithFacing(){let t=this.state;if(t.phase!=="playing"||!this.isCPU(t.currentPlayer)||!t.hasMoved||!t.hasAttacked)return;let e=t.getActiveUnit();if(!e||e.hp<=0){await this.controller.dispatch({type:"endTurn"});return}await this.controller.dispatch(Qn(t,e))}_maybeAct(){let t=this.state;t.phase!=="playing"||this._busy||this.isCPU(t.currentPlayer)&&(this._busy=!0,setTimeout(()=>this._act(),350))}async _act(){let t=this.state;try{if(t.phase!=="playing"||!this.isCPU(t.currentPlayer))return;let e=t.getActiveUnit();if(!e||e.hp<=0){await this.controller.dispatch({type:"endTurn"});return}let n=xS(t,e);await this.controller.dispatch(n||Qn(t,e))}finally{this._busy=!1,t.hasMoved&&t.hasAttacked||this._maybeAct()}}};function yS(){let i=document.getElementById("canvas-wrap"),t=new Br,e=new Gr({seed:Date.now()});e.world=Ko({w:Se.gridW,h:Se.gridH,centerPlazaRadius:Se.centerPlazaRadius,seed:e.rng.next()*1e9});let n=new Yr(e,t),s=qf(i,e,t);n.setAnimator(s.animator);let r=new _o(s.view,s.tween);s.units.cameraFollow=H=>r.follow(H);let a=H=>n.dispatch(H),o=H=>a(H),l=new So({view:s.view,state:e,controller:n,camera:r,highlights:s.highlights,bus:t,dispatch:o,units:s.units});Zp(e,t);let c=()=>s.highlights.clear();t.on("draftStarted",c),t.on("draftTurnChanged",()=>{e.draft.pendingClassKey||c()}),t.on("draftPickChosen",({placementTiles:H})=>{H?.length&&s.highlights.show(H,"placement")}),t.on("unitPlaced",c),t.on("draftComplete",c);let h=H=>e.isCPUPlayer(H);new Oo({state:e,controller:n,bus:t,isCPU:h}),new Bo({state:e,controller:n,bus:t,isCPU:h});let u=({unit:H}={})=>{H&&r.centerOn(H.x,H.y)};t.on("turnChanged",u),t.on("playingStarted",u),t.on("draftComplete",()=>{oe({battleStart:!0,draft:null}),setTimeout(()=>{n.startPlaying(),oe({battleStart:!1})},2500)});let d=null,m=1,_=0,g=null;function p(){g!=null&&(clearTimeout(g),g=null)}function f(H,{continueSeries:C=!1}={}){p(),e.gameMode=H.mode,e.aiDraftPreference=H.aiDraftPreference||"balanced";let N=H.seed!=null?H.seed:Date.now()>>>0;H.mode==="cvcpu"?C||(d={...H},delete d.seed,m=Math.max(1,Number(H.numGames)||1),_=0,su()):(d=null,m=1,_=0);let G=(H.mode==="pvp"||H.mode==="online")&&H.mapMode==="short";e.settings=kr({gridW:G?27:H.gridW||Se.gridW,gridH:G?15:H.gridH||Se.gridH,centerPlazaRadius:G?.35:H.centerPlazaRadius||Se.centerPlazaRadius,maxTurns:G?100:H.maxTurns||Se.maxTurns,draftPicksPerPlayer:H.numUnits||Se.draftPicksPerPlayer,moveDurationMs:H.moveDurationMs!=null?H.moveDurationMs:Se.moveDurationMs}),e.rng.reseed(N),e.clearUnits(),e.world=Ko({w:e.settings.gridW,h:e.settings.gridH,centerPlazaRadius:e.settings.centerPlazaRadius,seed:N}),s.view.setWorld(e.world),t.emit("worldRebuilt",{}),l.clearSelection(),oe({screen:"game",phase:"draft",gameMode:H.mode,gameOver:null,battleStart:!1,previewUnit:null}),pu(n.ctx)}t.on("gameOver",()=>{if(e.gameMode!=="cvcpu"||!d)return;if(_++,_<m){let C=jt.value.gameOver;C&&oe({gameOver:{...C,classRecord:null}}),p(),g=setTimeout(()=>{g=null,f({...d},{continueSeries:!0})},2e3)}});function y(){p(),d=null,m=1,_=0,e.phase="draft",l.clearSelection(),oe({screen:"mode-select",gameOver:null,battleStart:!1,draft:null,previewUnit:null,selectedUnit:null})}let x=null,M=null,R=0,v="",E="Player 1",U="Player 2";function S(){if(x&&x.transport)try{x.transport.close()}catch{}x=null,a=H=>n.dispatch(H)}function w(H,C){e.localPlayerNumber=H,e.playerNames={1:C[1]||"Player 1",2:C[2]||"Player 2"},a=N=>x.netplay.sendLocal(N),f({mode:"online",mapMode:M.mapMode,numUnits:M.numUnits,seed:R}),x.netplay.markReady(),oe({online:null})}function F(H,C){x.netplay=new No({transport:x.transport,controller:n,localPlayerNumber:H}),w(H,C)}function q(){jt.value.online&&oe({online:{...jt.value.online,error:"Connection lost."}})}Jt.onlineStart=H=>{M=H,S(),oe({online:{view:"menu",error:""}})},Jt.onlineCancel=()=>{S(),oe({online:null})},Jt.onlineHost=async H=>{v=H||"Player 1",R=(Date.now()^Math.random()*4294967295)>>>0;let C=new Nr;x={transport:C,netplay:null},C.onOpen=()=>F(1,{1:v,2:U}),C.onClose=q;try{let N=await C.createOffer(),G=btoa(JSON.stringify({sdp:N,seed:R,cfg:M,name:v}));oe({online:{view:"hosting",offer:G,error:""}})}catch(N){oe({online:{view:"menu",error:N.message||"Failed to create offer."}})}},Jt.onlineHostConnect=async H=>{if(!(!x||!x.transport))try{let{sdp:C,name:N}=JSON.parse(atob(String(H).trim()));U=N||"Player 2";let G=jt.value.online||{};oe({online:{...G,error:"",waiting:!0}}),await x.transport.acceptAnswer(C)}catch(C){let N=jt.value.online||{};oe({online:{...N,waiting:!1,error:C.message||"Invalid reply code."}})}},Jt.onlineJoin=async(H,C)=>{v=C||"Player 2";try{let N=JSON.parse(atob(String(H).trim()));R=N.seed,M=N.cfg||{mapMode:"long",numUnits:Se.draftPicksPerPlayer},E=N.name||"Player 1";let G=new Nr;x={transport:G,netplay:null},G.onOpen=()=>F(2,{1:E,2:v}),G.onClose=q;let k=await G.acceptOffer(N.sdp),P=btoa(JSON.stringify({sdp:k,name:v}));oe({online:{view:"joined",answer:P,error:""}})}catch(N){oe({online:{view:"joining",error:N.message||"Invalid host code."}})}},Jt.startMatch=H=>f(H),Jt.toModeSelect=()=>{S(),y()},Jt.draftPick=H=>{e.gameMode==="online"&&n.currentDraftPlayer!==e.localPlayerNumber||o({type:"draftPick",classKey:H})},Jt.attack=()=>l.enterAttackMode(),Jt.skill=H=>l.enterSkillMode(H),Jt.endTurn=()=>{e.gameMode==="online"&&!e.isHumanTurn()||l.mode!=="facing"&&l.enterFacingMode()},Jt.cancel=()=>l.clearSelection(),oe({screen:"mode-select"})}yS();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/unsafe-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
