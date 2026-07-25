var qr=class{constructor(){this._handlers=new Map,this._any=new Set}on(e,t){let n=this._handlers.get(e);return n||(n=new Set,this._handlers.set(e,n)),n.add(t),()=>n.delete(t)}once(e,t){let n=this.on(e,s=>{n(),t(s)});return n}onAny(e){return this._any.add(e),()=>this._any.delete(e)}emit(e,t){let n=this._handlers.get(e);if(n)for(let s of[...n])s(t);if(this._any.size)for(let s of[...this._any])s(e,t)}clear(){this._handlers.clear(),this._any.clear()}};var it={gridW:35,gridH:25,centerPlazaRadius:.29,maxTurns:200,draftPicksPerPlayer:7,moveDurationMs:300};var zs=typeof window<"u"&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||window.location.search.includes("dev=1"));function Gs(i={}){return{...it,...i}}var Kr=class{constructor(e=1){this._next=e}next(){return this._next++}reset(e=1){this._next=e}};function J0(i){let e=0;for(let t=0;t<i.length;t++)e=Math.imul(31,e)+i.charCodeAt(t),e=e>>>0;return e}function al(i){let e=typeof i=="string"?J0(i):i>>>0;return function(){e=e+1831565813>>>0;let n=Math.imul(e^e>>>15,e|1);return n=(n^n>>>7)>>>0,n/4294967296}}var Zr=class{constructor(e=Date.now()){this.reseed(e)}reseed(e){this.seed=e,this._next=al(e)}next(){return this._next()}range(e,t){return e+this._next()*(t-e)}int(e,t){return Math.floor(e+this._next()*(t-e+1))}pick(e){return e[Math.floor(this._next()*e.length)]}shuffle(e){for(let t=e.length-1;t>0;t--){let n=Math.floor(this._next()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}};var Jr=class{constructor({seed:e}={}){this.settings=Gs(),this.rng=new Zr(e??Date.now()),this.ids=new Kr(1),this.world=null,this.units=[],this.unitById=new Map,this.unitAtTileKey=new Map,this.phase="draft",this.gameMode="pvp",this.turnCount=0,this.currentPlayer=1,this.initiativeOrder=[],this.currentTurnIndex=0,this.hasMoved=!1,this.hasAttacked=!1,this.deadCorpseCount=0,this.deathOrderSeq=0,this.powerups=new Map,this.powerupSpawnedTurnsLeft={30:!1,20:!1,10:!1},this.draft=j0(),this.story=null,this.localPlayerNumber=1,this.playerNames={1:"Player 1",2:"Player 2"},this.aiDraftPreference="balanced"}get world_(){return this.world}tileKey(e,t){return t*this.world.w+e}addUnit(e){return this.units.push(e),this.unitById.set(e.id,e),e.hp>0&&this.unitAtTileKey.set(this.tileKey(e.x,e.y),e),e}getUnitById(e){return this.unitById.get(e)||null}getUnitAtTile(e,t){let n=this.unitAtTileKey.get(this.tileKey(e,t));return n&&n.hp>0?n:null}updateUnitTileIndex(e,t,n){if(t!=null&&n!=null){let s=this.tileKey(t,n);this.unitAtTileKey.get(s)===e&&this.unitAtTileKey.delete(s)}e.hp>0&&this.unitAtTileKey.set(this.tileKey(e.x,e.y),e)}removeUnitFromTileIndex(e){let t=this.tileKey(e.x,e.y);this.unitAtTileKey.get(t)===e&&this.unitAtTileKey.delete(t)}removeUnit(e){let t=this.units.indexOf(e);t>=0&&this.units.splice(t,1),this.unitById.delete(e.id),this.removeUnitFromTileIndex(e)}rebuildIndexes(){this.unitById.clear(),this.unitAtTileKey.clear();for(let e of this.units)this.unitById.set(e.id,e),e.hp>0&&this.unitAtTileKey.set(this.tileKey(e.x,e.y),e)}clearUnits(){this.units=[],this.unitById.clear(),this.unitAtTileKey.clear(),this.ids.reset(1),this.deadCorpseCount=0,this.deathOrderSeq=0}getLivingUnits(){return this.units.filter(e=>e.hp>0)}getLivingUnitsForPlayer(e){return this.units.filter(t=>t.hp>0&&t.player===e)}getCoreLivingUnits(e){return this.units.filter(t=>t.hp>0&&t.player===e&&t.summonedBy==null)}getActiveUnit(){if(!this.initiativeOrder.length)return null;let e=this.initiativeOrder[this.currentTurnIndex];return this.getUnitById(e)}isHumanTurn(){return!(this.gameMode==="cvcpu"||(this.gameMode==="pvcpu"||this.gameMode==="story")&&this.currentPlayer!==1||this.gameMode==="online"&&this.currentPlayer!==this.localPlayerNumber)}isCPUPlayer(e){return this.gameMode==="pvcpu"&&e===2||this.gameMode==="story"&&e===2||this.gameMode==="cvcpu"}};function j0(){return{order:[],totalPicks:0,pickIndex:0,pickCountByPlayer:{1:0,2:0},availableClasses:new Set,classOrder:[],pendingClassKey:null,selectedClassKey:null,placementTiles:[]}}var re={PATH:0,GRASS:1,TREE:2,WATER:3,ROCK:4,BASE_TOP:5,BASE_BOTTOM:6,CENTER:7},Vs={[re.PATH]:2976557,[re.GRASS]:2968109,[re.TREE]:1719578,[re.WATER]:1989278,[re.ROCK]:4872778,[re.BASE_TOP]:8014410,[re.BASE_BOTTOM]:4872826,[re.CENTER]:13940810};var Nt=(i,e,t)=>t*i.w+e;function xn(i,e,t){if(e<0||e>=i.w||t<0||t>=i.h)return!1;let n=i.type[t][e];return!(n===re.TREE||n===re.WATER||n===re.ROCK)}function hu(i,e,t,n,s){let r=n.x,a=n.y,o=n.x-t.x,l=n.y-t.y,c=Math.abs(o)>=Math.abs(l)?o>0?1:o<0?-1:0:0,h=Math.abs(l)>Math.abs(o)?l>0?1:l<0?-1:0:0;if(c===0&&h===0)return{newGx:r,newGy:a,collisionDamage:0};let u=0;for(let d=0;d<s;d++){let p=r+c,y=a+h,g=p<0||p>=i.w||y<0||y>=i.h,m=!xn(i,p,y),f=e.some(x=>x.hp>0&&x.id!==n.id&&x.x===p&&x.y===y);if(g||m||f){let x=Math.max(1,u*3+Math.ceil((t.str||0)*.3));return{newGx:r,newGy:a,collisionDamage:x}}r=p,a=y,u++}return{newGx:r,newGy:a,collisionDamage:0}}function Q0(i,e,t,n){let s=[],r=i,a=e,o=t,l=n,c=Math.abs(o-r),h=Math.abs(l-a),u=r<o?1:-1,d=a<l?1:-1,p=c-h;for(;s.push({x:r,y:a}),!(r===o&&a===l);){let y=2*p;y>-h&&(p-=h,r+=u),y<c&&(p+=c,a+=d)}return s}function Kt(i,e,t,n,s){let r=Q0(e,t,n,s);for(let a=1;a<r.length-1;a++){let o=r[a];if(!xn(i,o.x,o.y))return!1}return!0}function ll(i){if(!i||!i.tempDebuff)return!1;let e=i.tempDebuff;return!(e.agi==null||!(e.agi>0)||e.duration!=null&&e.duration<=0)}function jr(i,e,t,n,s,r){r&&ll(r)?n=Math.max(0,n):n=Math.max(4,n);let a=new Map;a.set(Nt(i,e,t),0);let o=[{x:e,y:t,d:0}],l=0,c=[[0,1],[0,-1],[1,0],[-1,0]],h=s!=null&&r!=null,u=h?new Set(s.filter(d=>d.hp>0&&d.player!==r.player).map(d=>Nt(i,d.x,d.y))):null;for(;l<o.length;){let{x:d,y:p,d:y}=o[l++];if(!(y>=n))for(let[g,m]of c){let f=d+g,x=p+m;if(!xn(i,f,x)||h&&u.has(Nt(i,f,x)))continue;let _=Nt(i,f,x);if(a.has(_))continue;let v=y+1;a.set(_,v),o.push({x:f,y:x,d:v})}}return a}function Qr(i,e,t,n){let s=new Map,r=Math.max(0,e-n),a=Math.min(i.w-1,e+n),o=Math.max(0,t-n),l=Math.min(i.h-1,t+n);for(let c=o;c<=l;c++)for(let h=r;h<=a;h++){let u=Math.abs(h-e)+Math.abs(c-t);u>=1&&u<=n&&s.set(Nt(i,h,c),u)}return s}function wi(i,e,t,n,s,r,a){if(e===n&&t===s)return[{x:e,y:t}];let o=new Set(r.filter(p=>p.hp>0&&p.player!==a.player).map(p=>Nt(i,p.x,p.y))),l=new Map,c=[{x:e,y:t}],h=0;l.set(Nt(i,e,t),null);let u=[[0,1],[0,-1],[1,0],[-1,0]],d=(p,y)=>xn(i,p,y)&&!o.has(Nt(i,p,y));for(;h<c.length;){let{x:p,y}=c[h++];if(p===n&&y===s){let g=[],m={x:n,y:s};for(;m;)g.unshift(m),m=l.get(Nt(i,m.x,m.y));return g}for(let[g,m]of u){let f=p+g,x=y+m,_=Nt(i,f,x);l.has(_)||d(f,x)&&(l.set(_,{x:p,y}),c.push({x:f,y:x}))}}return null}function uu(i,e,t,n,s,r){if(!n||n.length===0)return null;let a=Nt(i,e,t),o=new Set;for(let y=0;y<n.length;y++){let g=n[y];g&&g.gx!=null&&g.gy!=null&&o.add(Nt(i,g.gx,g.gy))}if(o.size===0)return null;if(o.has(a))return{path:[{x:e,y:t}],target:{gx:e,gy:t}};let l=new Set(s.filter(y=>y.hp>0&&y.player!==r.player).map(y=>Nt(i,y.x,y.y))),c=new Map,h=[{x:e,y:t}],u=0;c.set(a,null);let d=[[0,1],[0,-1],[1,0],[-1,0]],p=(y,g)=>xn(i,y,g)&&!l.has(Nt(i,y,g));for(;u<h.length;){let{x:y,y:g}=h[u++],m=Nt(i,y,g);if(o.has(m)){let f=[],x={x:y,y:g};for(;x;)f.unshift(x),x=c.get(Nt(i,x.x,x.y));return{path:f,target:{gx:y,gy:g}}}for(let f=0;f<d.length;f++){let x=y+d[f][0],_=g+d[f][1],v=Nt(i,x,_);c.has(v)||p(x,_)&&(c.set(v,{x:y,y:g}),h.push({x,y:_}))}}return null}function em(i){return{hw:i.w*.95/2,hh:i.h*.95/2}}function cl(i,e){let{hw:t,hh:n}=em(i),s=Math.floor((e.x+t)/.95),r=Math.floor((e.z+n)/.95);return s<0||s>=i.w||r<0||r>=i.h?null:{gx:s,gy:r}}var _t=["knight","mage","monk","ghoul","lancer","hunter","assassin","berserker","witch","ninja","samurai","werewolf","paladin","exorcist","bandit","ranger","blacksmith","alchemist","vampire","necromancer","barbarian","cannibal","shaman","oracle","amazon"],vt={knight:{name:"Knight",gender:"male",hp:27,maxHp:27,mp:5,maxMp:5,str:14,agi:8,vit:14,dex:10,luk:4,int:7,range:1},mage:{name:"Mage",gender:"female",hp:16,maxHp:16,mp:22,maxMp:22,str:3,agi:3,vit:5,dex:4,luk:13,int:17,range:1},monk:{name:"Monk",gender:"male",hp:24,maxHp:24,mp:13,maxMp:13,str:10,agi:10,vit:12,dex:9,luk:11,int:10,range:1},ghoul:{name:"Ghoul",gender:"male",hp:23,maxHp:23,mp:6,maxMp:6,str:12,agi:9,vit:9,dex:11,luk:9,int:5,range:1},lancer:{name:"Lancer",gender:"female",hp:22,maxHp:22,mp:7,maxMp:7,str:13,agi:11,vit:10,dex:7,luk:5,int:8,range:2},hunter:{name:"Hunter",gender:"female",hp:18,maxHp:18,mp:9,maxMp:9,str:7,agi:5,vit:7,dex:16,luk:12,int:5,range:8},assassin:{name:"Assassin",gender:"female",hp:20,maxHp:20,mp:10,maxMp:10,str:9,agi:14,vit:6,dex:14,luk:10,int:4,range:1},berserker:{name:"Berserker",gender:"male",hp:30,maxHp:30,mp:3,maxMp:3,str:15,agi:7,vit:13,dex:8,luk:6,int:1,range:1},witch:{name:"Witch",gender:"female",hp:16,maxHp:16,mp:24,maxMp:24,str:5,agi:6,vit:4,dex:5,luk:14,int:14,range:3},ninja:{name:"Ninja",gender:"female",hp:21,maxHp:21,mp:11,maxMp:11,str:8,agi:15,vit:7,dex:12,luk:8,int:9,range:1},samurai:{name:"Samurai",gender:"male",hp:24,maxHp:24,mp:8,maxMp:8,str:11,agi:12,vit:8,dex:13,luk:7,int:6,range:1},werewolf:{name:"Werewolf",gender:"male",hp:25,maxHp:25,mp:4,maxMp:4,str:14,agi:13,vit:11,dex:6,luk:6,int:3,range:1},paladin:{name:"Paladin",gender:"male",hp:26,maxHp:26,mp:12,maxMp:12,str:12,agi:8,vit:16,dex:8,luk:10,int:11,range:1},exorcist:{name:"Exorcist",gender:"male",hp:21,maxHp:21,mp:14,maxMp:14,str:7,agi:5,vit:9,dex:6,luk:15,int:13,range:1},bandit:{name:"Bandit",gender:"male",hp:20,maxHp:20,mp:6,maxMp:6,str:9,agi:14,vit:6,dex:14,luk:13,int:4,range:1},ranger:{name:"Ranger",gender:"female",hp:19,maxHp:19,mp:10,maxMp:10,str:8,agi:10,vit:8,dex:12,luk:7,int:6,range:5},blacksmith:{name:"Blacksmith",gender:"female",hp:25,maxHp:25,mp:8,maxMp:8,str:13,agi:8,vit:12,dex:11,luk:12,int:2,range:1},alchemist:{name:"Alchemist",gender:"female",hp:17,maxHp:17,mp:13,maxMp:13,str:6,agi:6,vit:10,dex:5,luk:8,int:11,range:5},vampire:{name:"Vampire",gender:"female",hp:18,maxHp:18,mp:16,maxMp:16,str:10,agi:12,vit:3,dex:4,luk:3,int:12,range:1},necromancer:{name:"Necromancer",gender:"male",hp:20,maxHp:20,mp:20,maxMp:20,str:4,agi:4,vit:7,dex:3,luk:11,int:15,range:1},barbarian:{name:"Barbarian",gender:"male",hp:40,maxHp:40,mp:4,maxMp:4,str:16,agi:4,vit:15,dex:6,luk:3,int:2,range:1},cannibal:{name:"Cannibal",gender:"male",hp:22,maxHp:22,mp:7,maxMp:7,str:6,agi:11,vit:2,dex:13,luk:9,int:7,range:4},shaman:{name:"Shaman",gender:"female",hp:17,maxHp:17,mp:21,maxMp:21,str:4,agi:3,vit:3,dex:3,luk:16,int:16,range:4},oracle:{name:"Oracle",gender:"female",hp:19,maxHp:19,mp:19,maxMp:19,str:5,agi:7,vit:4,dex:10,luk:14,int:10,range:3},amazon:{name:"Amazon",gender:"female",hp:23,maxHp:23,mp:5,maxMp:5,str:11,agi:9,vit:11,dex:7,luk:4,int:3,range:3}},tm=["hp","maxHp","mp","str","agi","vit","dex","luk","int"],du=(()=>{let i={};for(let e of _t){let t=vt[e];if(!t)continue;let n=tm.map(r=>t[r]??0),s=n.reduce((r,a)=>r+a,0)/n.length;i[e]=n.reduce((r,a)=>r+(a-s)**2,0)/n.length}return i})();var vn={knight:{primary:6908265,secondary:9127187,hair:11696641,cape:3355443,belt:9127187},mage:{primary:16776656,secondary:3355443,hair:13353955,cape:4853326},monk:{primary:16777188,secondary:16119285,hair:2889744,belt:657930},ghoul:{primary:32896,secondary:6636321,hair:32896,skin:32896},lancer:{primary:3169502,secondary:16776656,hair:15854290,cape:14423100},hunter:{primary:8421376,secondary:9584654,hair:7898731,cape:16119285},assassin:{primary:986695,secondary:16119285,hair:2621751,belt:8948621},berserker:{primary:657930,secondary:986695,hair:657930,cape:1118481},witch:{primary:16119285,secondary:8388640,hair:16777188,cape:2263842},ninja:{primary:267292,secondary:137541,hair:791074},samurai:{primary:13882323,secondary:3556687,hair:2039842},werewolf:{primary:4408907,secondary:2378091,hair:12632256,belt:466741},paladin:{primary:16445630,secondary:16774638,hair:12887172,cape:4286945,belt:4286945},exorcist:{primary:3881787,secondary:3881787,hair:16775930,cape:8488329},bandit:{primary:9125425,secondary:6045747,hair:14423100,cape:6710937},ranger:{primary:16775930,secondary:10913299,hair:16035328,cape:11402348,belt:10913299},blacksmith:{primary:13874819,secondary:9849600,hair:11696641,apron:9849600},alchemist:{primary:16738740,secondary:11154282,hair:16711807,cape:8900331},vampire:{primary:16704468,secondary:16704468,hair:1250066,cape:1250066,apron:1250066},necromancer:{primary:405028,secondary:405028,hair:7434350,cape:405028,belt:11372065},barbarian:{primary:11497041,secondary:6045747,hair:6045747,belt:11098894,skin:11497041},cannibal:{primary:11497041,secondary:8421504,hair:6045747,cape:16753920,belt:16753920,skin:11497041},shaman:{primary:3224389,secondary:4349324,hair:32896,cape:5152741,horns:16775930},oracle:{primary:16775930,secondary:16775930,hair:6045747,cape:16777215,belt:15712004,horns:15712004},amazon:{primary:11497041,secondary:11497041,hair:0,cape:331790,belt:0,horns:0,skin:11497041,apron:331790}},hn={knight:"https://creator.nightcafe.studio/jobs/OlIWpAye2LeM5gPkAGEI/OlIWpAye2LeM5gPkAGEI--1--xc223.jpg",mage:"https://media.craiyon.com/2025-08-13/bLqz0LbwSIynOcUHty4Maw.webp",monk:"https://cdnb.artstation.com/p/assets/images/images/028/576/499/large/ahruna-art-oct17.jpg?1594859688",ghoul:"https://i.pinimg.com/736x/d3/cc/41/d3cc41778d05dec0371a69e29659f792.jpg",lancer:"https://i.redd.it/zolf64gpoa0c1.jpg",hunter:"https://coolvibe.com/wp-content/uploads/2011/02/hunter.jpg",assassin:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk2-NBPpPOU7duYgN_k_9oFKZ5hJjU28qyoA&s",berserker:"https://entertainment.inquirer.net/files/2016/07/top_bg.jpg",witch:"https://w0.peakpx.com/wallpaper/382/134/HD-wallpaper-evil-witch-witch-female-dress-white-hair-evil-black-woman-girl-darkness-anime-dark-beauty-lady-long-hair.jpg",ninja:"https://i.pinimg.com/474x/02/88/60/0288609778e53701b7e64051d7164922.jpg",samurai:"https://files.idyllic.app/files/static/3120390?width=256&optimizer=image",werewolf:"https://i.pinimg.com/736x/1f/95/27/1f9527c6255465547d664f19dd11967c.jpg",paladin:"https://upload-os-bbs.hoyolab.com/upload/2023/12/01/84522063/a6a130d65b61025d979eda3750b0abd4_2602645990799609868.jpg?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_70",exorcist:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bdc0afb9-e917-4267-b7e6-2155f9c5c14c/detuach-b1b79b16-7fed-4175-b1a2-ca3d1bc6166b.jpg/v1/fill/w_1024,h_1449,q_75,strp/my_priest_by_domyzu_detuach-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi9iZGMwYWZiOS1lOTE3LTQyNjctYjdlNi0yMTU1ZjljNWMxNGMvZGV0dWFjaC1iMWI3OWIxNi03ZmVkLTQxNzUtYjFhMi1jYTNkMWJjNjE2NmIuanBnIiwiaGVpZ2h0IjoiPD0xNDQ5Iiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiL3dtL2JkYzBhZmI5LWU5MTctNDI2Ny1iN2U2LTIxNTVmOWM1YzE0Yy9kb215enUtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.5ueq8PhVPSB7hz65z6Cok8mX7IGeIrsQzCOaVFpt1pU",bandit:"https://i.pinimg.com/736x/6b/15/b0/6b15b06ae23f690e20968bc87c370831.jpg",ranger:"https://i.redd.it/2nfikbmqpwoa1.jpg",blacksmith:"https://images-ng.pixai.art/images/orig/489d970a-890e-4523-8f99-c0ba2d6bfeae",alchemist:"https://pics.craiyon.com/2023-07-11/ddbb35d3d2614541a9ad13181838257d.webp",vampire:"https://files.idyllic.app/files/static/2567599?width=256&optimizer=image",necromancer:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c77f367a-4886-467a-b509-a194cf9a6aca/dbq4hoj-c2811e28-2314-49ac-9c57-b2f7ab1ee170.jpg/v1/fill/w_1024,h_1434,q_75,strp/necromancer_by_johnathanchong_dbq4hoj-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQzNCIsInBhdGgiOiIvZi9jNzdmMzY3YS00ODg2LTQ2N2EtYjUwOS1hMTk0Y2Y5YTZhY2EvZGJxNGhvai1jMjgxMWUyOC0yMzE0LTQ5YWMtOWM1Ny1iMmY3YWIxZWUxNzAuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.vBO5eVep2-eoiZnpDxMvlWBsJ0_zfdGT_IAaPdqEv2k",barbarian:"https://image.lexica.art/full_jpg/dd171d51-f518-4ae9-949b-23f5d7a157be",cannibal:"https://i.pinimg.com/736x/de/57/d1/de57d1e7aa4dd2d8f052d48b06831cbd.jpg",shaman:"https://w0.peakpx.com/wallpaper/350/203/HD-wallpaper-guy-shaman-skull-horns-anime-art-green-thumbnail.jpg",oracle:"https://images.stockcake.com/public/a/3/d/a3d08448-237f-4c23-8660-43b615c9e3c9_large/desert-oracle-enchantress-stockcake.jpg",amazon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTnWAK4nkfgm8v-Ab35e3lkKOPOGTJzprr1w&s"};var ni={knight:[{name:"Brave",description:"Gain +1 STR and +1 VIT for 2 turns.",cost:3,target:"self",range:0,level:2,effectKey:"brave"},{name:"Dominate",description:"Steal 2 STR and 1 VIT from an enemy.",cost:6,target:"enemy",range:1,level:3,effectKey:"dominate"}],mage:[{name:"Arcane Bolt",description:"Deal INT-based damage to one enemy.",cost:6,target:"enemy",range:6,level:1,effectKey:"arcaneBolt",type:"spell"},{name:"Mana Drain",description:"Drain enemy MP based on INT.",cost:3,target:"enemy",range:6,level:2,effectKey:"manaDrain",type:"spell"}],monk:[{name:"Mantra",description:"Gain LUK based on INT for both ally and self for 2 turns.",cost:4,target:"ally",range:1,level:2,effectKey:"mantra"},{name:"Chakra",description:"Heal HP for both ally and self.",cost:8,target:"ally",range:4,level:3,effectKey:"chakra"}],ghoul:[{name:"Weaken",description:"Steal 1 VIT from an enemy.",cost:3,target:"enemy",range:1,level:2,effectKey:"weaken"},{name:"Feast",description:"Deal STR-based damage to enemy and heal self.",cost:4,target:"enemy",range:1,level:3,effectKey:"feast"}],lancer:[{name:"Impale",description:"Reduce target's AGI by 2 for 2 turns.",cost:4,target:"enemy",range:2,level:2,effectKey:"impale"},{name:"Pierce",description:"Deal STR-based damage through the defense.",cost:6,target:"enemy",range:2,level:3,effectKey:"pierce"}],hunter:[{name:"Focus",description:"Gain +3 DEX for 2 turns.",cost:3,target:"self",range:0,level:1,effectKey:"focus"},{name:"Snipe",description:"Deal long-ranged, DEX-based damage to one enemy.",cost:6,target:"enemy",range:12,level:2,effectKey:"snipe"}],assassin:[{name:"Cripple",description:"Steal 1 AGI from an enemy.",cost:4,target:"enemy",range:1,level:2,effectKey:"cripple"},{name:"Execute",description:"Deal AGI-based damage to one enemy.",cost:6,target:"enemy",range:1,level:3,effectKey:"execute"}],berserker:[{name:"Berserk",description:"Deal STR-based damage for -3 HP.",cost:0,hpCost:3,target:"enemy",range:1,level:2,effectKey:"berserk"},{name:"Bloodlust",description:"Gain STR and VIT based on lost HP for 1 turn.",cost:5,target:"self",range:0,level:3,effectKey:"bloodlust"}],witch:[{name:"Hex",description:"Steal 1 INT from an enemy.",cost:5,target:"enemy",range:4,level:1,effectKey:"hex",type:"spell"},{name:"Drain",description:"Deal INT-based damage to HP and MP and heal self.",cost:8,target:"enemy",range:4,level:2,effectKey:"drain",type:"spell"}],ninja:[{name:"Blind",description:"Steal 1 DEX from an enemy.",cost:4,target:"enemy",range:1,level:2,effectKey:"blind"},{name:"Shuriken",description:"Deal DEX-based ranged attack.",cost:6,target:"enemy",range:4,level:3,effectKey:"shuriken"}],samurai:[{name:"Iaido",description:"Gain +1 STR and +1 DEX for 2 turns.",cost:4,target:"self",range:0,level:2,effectKey:"iaido"},{name:"Chokuto",description:"Deal STR+DEX-based damage to one enemy.",cost:7,target:"enemy",range:1,level:3,effectKey:"chokuto"}],werewolf:[{name:"Bite",description:"Deal STR+AGI-based damage to one enemy.",cost:5,target:"enemy",range:1,level:2,effectKey:"bite"},{name:"Howl",description:"Gain +2 STR and +2 AGI for 2 turns.",cost:6,target:"self",range:0,level:3,effectKey:"howl"}],paladin:[{name:"Sacrifice",description:"Heal ally for -3 HP.",cost:1,hpCost:3,target:"ally",range:3,level:2,effectKey:"sacrifice"},{name:"Judgement",description:"Deal damage based on remaining HP.",cost:6,target:"enemy",range:1,level:3,effectKey:"judgement",type:"spell"}],exorcist:[{name:"Sanctuary",description:"Gain +1 ALL stats for both ally and self for 3 turns.",cost:4,target:"ally",range:4,level:1,effectKey:"sanctuary"},{name:"Exorcise",description:"Deal damage based on enemy lost HP.",cost:6,target:"enemy",range:3,level:2,effectKey:"exorcise",type:"spell"}],bandit:[{name:"Raid",description:"Steal 2 LUK from an enemy.",cost:3,target:"enemy",range:1,level:2,effectKey:"raid"},{name:"Ambush",description:"Deal LUK-based damage to one enemy.",cost:4,target:"enemy",range:1,level:3,effectKey:"ambush"}],ranger:[{name:"Wind walk",description:"Gain +3 AGI for 2 turns.",cost:5,target:"self",range:0,level:1,effectKey:"windWalk"},{name:"Power Shot",description:"Deal knockback damage to one enemy.",cost:7,target:"enemy",range:7,level:3,effectKey:"powerShot"}],blacksmith:[{name:"Forge",description:"Gain +2 STR for both ally and self for 2 turns.",cost:4,target:"ally",range:1,level:2,effectKey:"forge"},{name:"Fortify",description:"Gain +2 STR and +2 VIT for both ally and self for 2 turns.",cost:5,target:"ally",range:2,level:3,effectKey:"fortify"}],alchemist:[{name:"Poison",description:"Poison enemy for 2 turns.",cost:5,target:"enemy",range:5,level:1,effectKey:"poison"},{name:"Concoct",description:"Deal INT-based damage and add to 50% to LUK",cost:8,target:"enemy",range:7,level:2,effectKey:"concoct",type:"spell"}],vampire:[{name:"Gaze",description:"Steal AGI and VIT by 1 for 3 turns",cost:5,target:"enemy",range:4,level:1,effectKey:"gaze",type:"spell"},{name:"Blood Suck",description:"Absorb enemy HP based on your MP",cost:7,target:"enemy",range:1,level:3,effectKey:"bloodSuck"}],necromancer:[{name:"Debilitate",description:"Steal target's 3 HP and 3 VIT for 2 turns",cost:5,target:"enemy",range:5,level:1,effectKey:"debilitate",type:"spell"},{name:"Reanimate",description:"Resurrect dead unit to your control",cost:12,target:"self",range:0,level:2,effectKey:"reanimate"}],barbarian:[{name:"War Cry",description:"Gain VIT and LUK based on lost HP",cost:2,target:"self",range:0,level:1,effectKey:"warCry"},{name:"Bash",description:"Reduce target's AGI to 0 for 2 turns",cost:4,target:"enemy",range:1,level:2,effectKey:"bash"}],cannibal:[{name:"Gnaw",description:"Deal STR based damage to heal self",cost:3,target:"enemy",range:1,level:2,effectKey:"gnaw"},{name:"Infect",description:"Poison enemy for 3 turns",cost:4,target:"enemy",range:6,level:3,effectKey:"infect"}],shaman:[{name:"Vodoo",description:"Mirror damage for 2 turns",cost:4,target:"enemy",range:5,level:1,effectKey:"vodoo",type:"spell"},{name:"Malediction",description:"Deal INT+LUK-based damage to ALL stats for 2 turns",cost:6,target:"enemy",range:6,level:2,effectKey:"malediction",type:"spell"}],oracle:[{name:"Foresight",description:"Gain INT and DEX based on INT for 2 turns",cost:4,target:"ally",range:6,level:1,effectKey:"foresight"},{name:"Overheal",description:"Heal ally for 2 turns",cost:7,target:"ally",range:6,level:2,effectKey:"overheal"}],amazon:[{name:"Skewer",description:"Deal DEX-based damage to AGI for 2 turns ",cost:4,target:"enemy",range:3,level:2,effectKey:"skewer"},{name:"Rapid",description:"Double attack for 1 turn",cost:6,target:"self",range:0,level:3,effectKey:"rapid"}]},nm={brave:"Brave",dominate:"Dominate",arcaneBolt:"Arcane Bolt",manaDrain:"Mana Drain",mantra:"Mantra",chakra:"Chakra",weaken:"Weaken",feast:"Feast",impale:"Impale",pierce:"Pierce",focus:"Focus",snipe:"Snipe",execute:"Execute",cripple:"Cripple",berserk:"Berserk",bloodlust:"Bloodlust",hex:"Hex",drain:"Drain",shuriken:"Shuriken",blind:"Blind",iaido:"Iaido",chokuto:"Chokuto",bite:"Bite",howl:"Howl"},hl=new Map;function ea(i){let e=hl.get(i);if(e!==void 0)return e;for(let t of Object.values(ni)){let n=t.find(s=>s.effectKey===i);if(n)return e=n.name,hl.set(i,e),e}return e=nm[i]??i.replace(/([A-Z])/g," $1").replace(/^./,t=>t.toUpperCase()).trim(),hl.set(i,e),e}function ii(i){return i===1?{dx:0,dy:-1}:{dx:0,dy:1}}function Mn(i,e,t,n){let s=Math.sign(t-i),r=Math.sign(n-e);return s===0&&r===0?null:{dx:s,dy:r}}function Ei({id:i,player:e,classKey:t,x:n,y:s,level:r=1,tag:a=null}){let o=vt[t],l=vn[t]||vn.knight;return{id:i,player:e,x:n,y:s,level:r,tag:a||null,facing:ii(e),name:o.name,class:t,hairColor:l.hair,hp:o.hp,maxHp:o.maxHp,mp:o.mp,maxMp:o.maxMp,str:o.str,agi:o.agi,vit:o.vit,dex:o.dex,luk:o.luk,int:o.int,range:o.range}}function ze(i,e){let t=i[e]!=null?i[e]:0,n=i.tempBuff&&i.tempBuff[e]!=null?i.tempBuff[e]:0,s=i.tempDebuff&&i.tempDebuff[e]!=null?i.tempDebuff[e]:0;return t+n-s}function im(i,e){let t=i[e]!=null?i[e]:0,n=i.tempBuff&&i.tempBuff[e]!=null?i.tempBuff[e]:0,s=i.tempDebuff&&i.tempDebuff[e]!=null?i.tempDebuff[e]:0,r=String(t);return n>0&&(r+=` <span class="stat-val-buff">+${n}</span>`),s>0&&(r+=` <span class="stat-val-debuff">-${s}</span>`),r}function sm(i){return i&&i.hp>0&&i.hp<=i.maxHp*.25}var rm=["str","agi","vit","dex","luk","int"];function am(i){return i?{buffs:fu(i.tempBuff,"buff"),debuffs:fu(i.tempDebuff,"debuff")}:{buffs:[],debuffs:[]}}function fu(i,e){if(!i||typeof i!="object")return[];let t=[];if(i.effectKey){let n=ea(i.effectKey),s=om(i,e);return t.push({name:n,detail:s}),t}return e==="debuff"&&typeof i.poison=="number"&&i.poison>0&&t.push({name:"Poison",detail:`${i.poison} dmg/turn`}),typeof i.heal=="number"&&i.heal>0&&t.push({name:"Regen",detail:`${i.heal} HP/turn`}),e==="buff"&&i.doubleAttack===!0&&t.push({name:"Double Attack",detail:""}),e==="buff"&&i.vodoo!=null&&t.push({name:"Vodoo",detail:""}),t}function om(i,e){return e==="debuff"&&typeof i.poison=="number"&&i.poison>0?`${i.poison} dmg/turn`:typeof i.heal=="number"&&i.heal>0?`${i.heal} HP/turn`:""}function Ws(i){if(!i)return null;let e={};for(let s of rm)e[s]=im(i,s);let{buffs:t,debuffs:n}=am(i);return{id:i.id,player:i.player,name:i.name,class:i.class,level:i.level,hp:i.hp,maxHp:i.maxHp,mp:i.mp,maxMp:i.maxMp,range:i.range,lowHp:sm(i),poison:i.tempDebuff&&i.tempDebuff.poison?i.tempDebuff.poison:0,autoHeal:i.tempBuff&&i.tempBuff.heal?i.tempBuff.heal:0,buffs:t,debuffs:n,statsHtml:e}}var lm=.95,cm=1.03,hm=1.12;function Ti(i,e){let t=e&&e.facing;if(!i||!t||t.dx===0&&t.dy===0)return 1;let n=i.x-e.x,s=i.y-e.y;if(n===0&&s===0)return 1;let r=Math.hypot(n,s),a=Math.hypot(t.dx,t.dy),o=n/r*(t.dx/a)+s/r*(t.dy/a);return o>=.5?lm:o<=-.5?hm:cm}function pu(i,e,t){let n=ze(e,"agi")*.7+ze(e,"luk")*.3,r=t.next()*Math.max(.001,n)<=ze(i,"dex")*Ti(i,e),a=0;if(r){let o=ze(i,"str")*.7+ze(i,"dex")*.2+ze(i,"int")*.1-(ze(e,"vit")*.3+ze(e,"luk")*.2);a=Math.max(1,Math.floor(o))}return{isHit:r,damage:a}}function mu(i,e,t){let n=[pu(i,e,t)];return i.tempBuff&&i.tempBuff.doubleAttack===!0&&e.hp>0&&n.push(pu(i,e,t)),n}function um(i,e,t){if(!e||t<=0)return;let n=i.state.units,s=e.tempBuff;if(!s||s.vodoo==null||s.duration!=null&&s.duration<=0)return;let r=e.id;for(let a=0;a<n.length;a++){let o=n[a];if(!(!o||o.hp<=0||o.id===r)&&s.vodoo===o.id){o.hp=Math.max(0,o.hp-t),i.emit("floatingText",{gx:o.x,gy:o.y,text:String(t),kind:"vodoo"}),i.emit("unitStatsChanged",{unit:o}),o.hp<=0&&i.onDeath&&i.onDeath(o,e);break}}}function $s(i,e){let{attacker:t,victim:n}=e,s=e.amount;if(e.isHeal)return n.hp=Math.min(n.maxHp,n.hp+s),i.emit("floatingText",{gx:n.x,gy:n.y,text:`+${s}`,kind:"heal"}),i.emit("unitStatsChanged",{unit:n}),!0;let r=n===t,a=!0;if(e.preHit!==void 0)a=e.preHit;else if(!r&&!e.isSpell){let o=ze(n,"agi")*.7+ze(n,"luk")*.3;a=i.rng.next()*Math.max(.001,o)<=ze(t,"dex")*Ti(t,n)}return a?(!r&&!e.ignoreFacing&&(s=Math.max(1,Math.round(s*Ti(t,n)))),n.hp=Math.max(0,n.hp-s),i.emit("floatingText",{gx:n.x,gy:n.y,text:String(s),kind:"damage"}),i.emit("unitStatsChanged",{unit:n,selfCost:!!e.selfCost}),um(i,n,s),n.hp<=0&&i.onDeath&&i.onDeath(n,t)):i.emit("floatingText",{gx:n.x,gy:n.y,text:"MISS",kind:"miss"}),a}function gu(i,e,t,n){let{state:s}=i,r=hu(s.world,s.units,e,t,n),a=t.x,o=t.y;t.x=r.newGx,t.y=r.newGy,s.updateUnitTileIndex(t,a,o),i.emit("unitKnockback",{unit:t,from:{gx:a,gy:o},to:{gx:r.newGx,gy:r.newGy}}),r.collisionDamage>0?($s(i,{attacker:e,victim:t,amount:r.collisionDamage,ignoreFacing:!0}),t.hp>0&&i.emit("powerupCheck",{unit:t})):t.hp>0&&i.emit("powerupCheck",{unit:t})}var yu={brave(i){let{u:e}=i,t=1;e.tempBuff={str:t,vit:t,duration:3},i.statText(e.x,e.y,`+${t} STR, +${t} VIT`,!0)},dominate(i){let{u:e,t}=i;if(!t)return;let n=2,s=1;t.str=Math.max(1,(t.str||0)-n),e.str=(e.str||0)+n,t.vit=Math.max(1,(t.vit||0)-s),e.vit=(e.vit||0)+s,i.statText(t.x,t.y,`-${n} STR and -${s} VIT`,!1),i.statText(e.x,e.y,`+${n} STR and +${s} VIT`,!0)},mantra(i){let{u:e,t,getEff:n}=i;if(!t)return;let s=Math.max(1,Math.ceil(n(e,"int")*.3));e.tempBuff={int:s,duration:3},i.statText(e.x,e.y,`+${s} LUK`,!0),t.tempBuff={luk:s,duration:3},i.statText(t.x,t.y,`+${s} LUK`,!0)},weaken(i){let{u:e,t}=i;if(!t)return;let n=1;t.vit=Math.max(1,(t.vit||0)-n),e.vit=(e.vit||0)+n,i.statText(t.x,t.y,`-${n} VIT`,!1),i.statText(e.x,e.y,`+${n} VIT`,!0)},impale(i){let{t:e}=i;if(!e)return;let t=2;e.tempDebuff={agi:t,duration:3},i.statText(e.x,e.y,`-${t} AGI`,!1)},focus(i){let{u:e}=i,t=3;e.tempBuff={dex:t,duration:3},i.statText(e.x,e.y,`+${t} DEX`,!0)},cripple(i){let{u:e,t}=i;if(!t)return;let n=1;t.agi=Math.max(1,(t.agi||0)-n),e.agi=(e.agi||0)+n,i.statText(t.x,t.y,`-${n} AGI`,!1),i.statText(e.x,e.y,`+${n} AGI`,!0)},bloodlust(i){let{u:e}=i,t=Math.max(1,Math.floor((e.maxHp-e.hp)*.2));e.tempBuff={str:t,vit:t,duration:2},i.statText(e.x,e.y,`+${t} STR, +${t} VIT`,!0)},hex(i){let{u:e,t}=i;if(!t)return;let n=1;t.int=Math.max(1,(t.int||0)-n),e.int=(e.int||0)+n,i.statText(t.x,t.y,`-${n} INT`,!1),i.statText(e.x,e.y,`+${n} INT`,!0)},blind(i){let{u:e,t}=i;if(!t)return;let n=1;t.dex=Math.max(1,(t.dex||0)-n),e.dex=(e.dex||0)+n,i.statText(t.x,t.y,`-${n} DEX`,!1),i.statText(e.x,e.y,`+${n} DEX`,!0)},iaido(i){let{u:e}=i,t=1;e.tempBuff={str:t,dex:t,duration:3},i.statText(e.x,e.y,`+${t} STR, +${t} DEX`,!0)},howl(i){let{u:e}=i,t=2;e.tempBuff={str:t,agi:t,duration:3},i.statText(e.x,e.y,`+${t} STR, +${t} AGI`,!0)},sanctuary(i){let{u:e,t}=i,n=1;e.tempBuff={str:n,vit:n,dex:n,agi:n,int:n,luk:n,duration:4},t.tempBuff={str:n,vit:n,dex:n,agi:n,int:n,luk:n,duration:4},e.hp<e.maxHp&&(e.hp+=n),t.hp<t.maxHp&&(t.hp+=n),i.statText(e.x,e.y,`+${n} ALL STATS`,!0),i.statText(t.x,t.y,`+${n} ALL STATS`,!0)},raid(i){let{u:e,t}=i,n=2;t.luk=Math.max(1,(t.luk||0)-n),e.luk=(e.luk||0)+n,i.statText(t.x,t.y,`-${n} LUK`,!1),i.statText(e.x,e.y,`+${n} LUK`,!0)},windWalk(i){let{u:e}=i,t=3;e.tempBuff={agi:t,duration:3},i.statText(e.x,e.y,`+${t} AGI`,!0)},forge(i){let{u:e,t}=i,n=2;e.tempBuff={str:n,duration:3},t.tempBuff={str:n,duration:3},i.statText(e.x,e.y,`+${n} STR`,!0),i.statText(t.x,t.y,`+${n} STR`,!0)},fortify(i){let{u:e,t}=i,n=3;e.tempBuff={str:n,vit:n,duration:3},t.tempBuff={str:n,vit:n,duration:3},i.statText(e.x,e.y,`+${n} STR, +${n} VIT`,!0),i.statText(t.x,t.y,`+${n} STR, +${n} VIT`,!0)},gaze(i){let{u:e,t}=i;if(!t)return;let n=1;t.tempDebuff={agi:n,vit:n,duration:4},e.tempBuff={agi:n,vit:n,duration:4},i.statText(t.x,t.y,`-${n} AGI, -${n} VIT`,!1),i.statText(e.x,e.y,`+${n} AGI, +${n} VIT`,!0)},debilitate(i){let{u:e,t}=i;if(!t)return;let n=3;t.tempDebuff={hp:n,maxHp:n,vit:n,duration:3},e.tempBuff={hp:n,maxHp:n,vit:n,duration:3},i.statText(t.x,t.y,`-${n} HP, -${n} VIT`,!1),i.statText(e.x,e.y,`+${n} HP, +${n} VIT`,!0)},warCry(i){let{u:e}=i,t=Math.max(2,Math.ceil((e.maxHp-e.hp)*.3));e.tempBuff={vit:t,luk:t,duration:3},i.statText(e.x,e.y,`+${t} VIT, +${t} LUK`,!0)},bash(i){let{t:e}=i;if(!e)return;let t=e.agi;e.tempDebuff={agi:t,duration:3},i.statText(e.x,e.y,`-${t} AGI`,!1)},foresight(i){let{u:e,t,getEff:n}=i,s=Math.max(2,Math.floor(n(e,"int")*.2));e.tempBuff={int:s,dex:s,mp:s,maxMp:s,duration:3},i.statText(e.x,e.y,`+${s} INT, +${s} DEX, +${s} MP`,!0),t&&(t.tempBuff={int:s,dex:s,mp:s,maxMp:s,duration:3},i.statText(t.x,t.y,`+${s} INT, +${s} DEX, +${s} MP`,!0))},overheal(i){let{u:e,t,getEff:n}=i,s=Math.max(1,Math.floor(n(e,"int")*.3+n(e,"luk")*.2));e.tempBuff={heal:s,duration:3},i.statText(e.x,e.y,"Auto heal for 2 turns",!0),t&&(t.tempDebuff={heal:s,duration:3},i.statText(t.x,t.y,"Auto heal for 2 turns",!0))},rapid(i){let{u:e}=i;e.tempBuff={doubleAttack:!0,duration:2},i.statText(e.x,e.y,"Double attack for 1 turn",!0)}};var _u={arcaneBolt(i){let{u:e,t,getEff:n}=i;if(!t)return;let s=Math.max(1,Math.ceil(n(e,"int")*.9-(n(t,"int")*.4+n(t,"luk")*.3)));i.damage(t,s,{spell:!0})},pierce(i){let{u:e,t,getEff:n}=i;if(!t)return;let s=Math.max(1,Math.floor(n(e,"str")*.6));i.damage(t,s)},snipe(i){let{u:e,t,getEff:n}=i;if(!t)return;let s=Math.max(1,Math.floor(n(e,"dex")*.8-(n(t,"vit")*.3+n(t,"luk")*.2)));i.damage(t,s)},execute(i){let{u:e,t,getEff:n}=i;if(!t)return;let s=Math.max(1,Math.floor(n(e,"agi")*.8-(n(t,"vit")*.3+n(t,"luk")*.2)));i.damage(t,s)},berserk(i){let{u:e,t,getEff:n}=i;t&&(i.damage(t,Math.max(1,Math.floor(n(e,"str")*.8-n(t,"vit")*.3+n(t,"luk")*.2))),i.damage(e,3,{selfCost:!0}))},drain(i){let{u:e,t,getEff:n}=i;if(!t)return;let s=Math.max(1,Math.ceil(n(e,"int")*.6-(n(t,"int")*.4+n(t,"luk")*.3))),r=Math.max(1,Math.ceil(n(e,"int")*.3-(n(t,"int")*.4+n(t,"luk")*.3)));i.damage(t,s,{spell:!0}),i.damage(e,s+r,{heal:!0}),t.mp=Math.max(1,(t.mp||0)-r),i.statText(e.x,e.y,`+${s} HP and +${r} MP`,!0),i.statText(t.x,t.y,`-${s} HP and -${r} MP`,!1)},shuriken(i){let{u:e,t,getEff:n}=i;if(!t)return;let s=Math.max(1,Math.ceil(n(e,"dex")*.7-(n(t,"vit")*.3+n(t,"luk")*.2)));i.damage(t,s)},chokuto(i){let{u:e,t,getEff:n}=i;if(!t)return;let s=Math.max(1,Math.floor(n(e,"str")*.4+n(e,"dex")*.4-(n(t,"vit")*.3+n(t,"luk")*.2)));i.damage(t,s)},bite(i){let{u:e,t,getEff:n}=i;if(!t)return;let s=Math.max(1,Math.floor(n(e,"str")*.7+n(e,"agi")*.1-(n(t,"vit")*.3+n(t,"luk")*.2)));i.damage(t,s)},judgement(i){let{u:e,t,getEff:n}=i;if(!t)return;let s=Math.max(1,Math.floor(e.maxHp-e.hp-(n(t,"int")*.2+n(t,"luk")*.1)));i.damage(t,s,{spell:!0})},exorcise(i){let{t:e,getEff:t}=i;if(!e)return;let n=Math.max(1,Math.floor((e.maxHp-e.hp)*1.3-(t(e,"int")*.2+t(e,"luk")*.1)));i.damage(e,n,{spell:!0})},ambush(i){let{u:e,t,getEff:n}=i;if(!t)return;let s=Math.max(1,Math.floor(n(e,"luk")*.8-(n(t,"vit")*.3+n(t,"luk")*.2)));i.damage(t,s)},feast(i){let{u:e,t,getEff:n}=i;if(!t)return;let s=Math.max(1,Math.floor(n(e,"str")*.8-(n(t,"vit")*.3+n(t,"luk")*.2)));i.damage(t,s)&&i.damage(e,s,{heal:!0})},concoct(i){let{u:e,t,getEff:n}=i;if(!t)return;let s=Math.max(1,Math.floor(n(e,"int")*.8-(n(t,"int")*.4+n(t,"luk")*.2)));i.damage(t,s,{spell:!0});let r=Math.max(1,Math.floor(s*.5));e.luk=Math.max(1,(e.luk||0)+r),i.statText(e.x,e.y,`+${r} LUK`,!0)},bloodSuck(i){let{u:e,t,getEff:n}=i;if(!t)return;let s=Math.max(1,Math.floor(e.mp*.6+n(e,"int")*.6-(t.hp*.3+n(t,"luk")*.1)));i.damage(t,s,{spell:!0})&&i.damage(e,s,{heal:!0})},gnaw(i){let{u:e,t,getEff:n}=i;if(!t)return;let s=Math.max(1,Math.floor(n(e,"str")-(n(t,"vit")*.3+n(t,"luk")*.2)));i.damage(t,s,{spell:!0}),i.damage(e,s,{heal:!0})},malediction(i){let{u:e,t,getEff:n}=i;if(!t)return;let s=Math.max(1,Math.ceil(n(e,"int")*.4+n(e,"luk")*.3-(n(t,"int")*.3+n(t,"luk")*.2))),r=Math.max(1,Math.ceil(s*.3));t.tempDebuff={luk:r,int:r,str:r,vit:r,agi:r,dex:r,duration:3},i.damage(t,s,{spell:!0}),i.statText(t.x,t.y,`-${r} ALL STATS`,!1)},skewer(i){let{u:e,t,getEff:n}=i;if(!t)return;let s=Math.max(1,Math.ceil(n(e,"dex")*.8-(n(t,"vit")*.3+n(t,"luk")*.2)));t.tempDebuff={agi:s,duration:3},i.statText(t.x,t.y,`-${s} AGI`,!1)}};var xu={chakra(i){let{u:e,t,getEff:n}=i;i.damage(e,Math.max(1,Math.floor(n(e,"int")*.3+n(e,"luk")*.15)),{heal:!0}),t&&i.damage(t,Math.max(1,Math.floor(n(e,"int")*.3+n(t,"luk")*.15)),{heal:!0})},sacrifice(i){let{u:e,t,getEff:n}=i,s=Math.max(1,Math.floor(n(e,"int")*.5));i.damage(t,s,{heal:!0}),i.damage(e,3,{selfCost:!0})},manaDrain(i){let{u:e,t,getEff:n}=i;if(!t)return;let s=Math.max(1,Math.floor(n(t,"int")*.3));t.mp=Math.max(1,(t.mp||0)-s),e.mp=(e.mp||0)+s,i.statText(t.x,t.y,`-${s} MP`,!1),i.statText(e.x,e.y,`+${s} MP`,!0)}};var vu={poison(i){let{t:e,getEff:t}=i;if(!e)return;let n=Math.max(1,Math.floor(t(e,"luk")*.4-t(e,"luk")*.2));e.tempDebuff={poison:n,duration:3},i.statText(e.x,e.y,`${n} poison for 2 turns`,!1)},infect(i){let{u:e,t,getEff:n}=i;if(!t)return;let s=Math.max(1,Math.ceil(n(e,"luk")*.4-n(t,"luk")*.1));t.tempDebuff={poison:s,duration:4},i.statText(t.x,t.y,`${s} poison for 3 turns`,!1)},vodoo(i){let{u:e,t}=i;t&&(e.tempBuff={vodoo:t.id,duration:3},i.statText(t.x,t.y,"Vodoo for 2 turns",!1))},powerShot(i){let{u:e,t,getEff:n}=i;if(!t)return;let s=Math.max(1,Math.floor(n(e,"dex")*.6-(n(t,"vit")*.3+n(t,"luk")*.2)));if(i.damage(t,s)&&i.knockback){let a=Math.max(1,Math.floor(s*.2));i.knockback(e,t,a)}},reanimate(i){let{u:e,state:t}=i;if(!i.reanimate)return;let n=t.units,s=null,r=-1,a=null,o=-1,l=!1;for(let h=0;h<n.length;h++){let u=n[h];if(u.hp>0||u.isReanimated)continue;let d=u.deathOrder??0;d>=r&&(r=d,s=u),u.player===e.player&&(l=!0,d>=o&&(o=d,a=u))}let c=l?a:s;c&&i.reanimate(e,c)}};var dm={...yu,..._u,...xu,...vu};function Mu(i){return dm[i]||null}function bn(i,e){return e?(e.summonedSkills&&e.summonedSkills.length>0?e.summonedSkills:e.class&&ni[e.class]?ni[e.class]:[]).map(n=>({...n,disabled:n.disabled===!0||e.level<(n.level||1)||n.hpCost&&e.hp<n.hpCost||n.cost!=null&&e.mp<n.cost||n.effectKey==="reanimate"&&i.deadCorpseCount<=0})):[]}function Zi(i,e,t){let n=[],s=t.range||0,{world:r}=i,a=e.x,o=e.y;if(t.target==="self")return n.push({gx:a,gy:o,targetUnit:null}),n;for(let l of i.units)if(!(l.hp<=0||Math.abs(a-l.x)+Math.abs(o-l.y)>s)){if(t.target==="enemy"){if(l.player===e.player)continue}else if(t.target==="ally"&&l.player!==e.player)continue;s>=2&&!Kt(r,a,o,l.x,l.y)||n.push({gx:l.x,gy:l.y,targetUnit:l})}return n}function bu(i,e,t){let{world:n}=i,s=t.range||0,r=[];return t.target==="self"?(r.push({gx:e.x,gy:e.y}),r):(Qr(n,e.x,e.y,s).forEach((o,l)=>{let c=l%n.w,h=l/n.w|0;s>=2&&!Kt(n,e.x,e.y,c,h)||r.push({gx:c,gy:h})}),r)}function Su(i,e,t,n,s={}){let r=n.effectKey,a=Mu(r),o=ea(r);i.emit("floatingText",{gx:e.x,gy:e.y,text:o,kind:"skill-name"});let l={u:e,t,state:i.state,rng:i.rng,getEff:ze,damage:(c,h,u={})=>$s(i,{attacker:e,victim:c,amount:h,isHeal:u.heal,isSpell:u.spell,preHit:u.preHit,selfCost:u.selfCost}),statText:(c,h,u,d)=>i.emit("floatingText",{gx:c,gy:h,text:u,kind:d?"buff":"debuff"}),knockback:(c,h,u)=>gu(i,c,h,u),reanimate:s.reanimate};a&&a(l),ta(e.tempBuff,r),ta(e.tempDebuff,r),t&&(ta(t.tempBuff,r),ta(t.tempDebuff,r)),i.emit("unitStatsChanged",{unit:e}),t&&i.emit("unitStatsChanged",{unit:t}),i.emit("skillResolved",{unit:e,target:t,skill:n})}function ta(i,e){i&&typeof i=="object"&&i.duration!=null&&i.effectKey==null&&(i.effectKey=e)}function ul({w:i,h:e,centerPlazaRadius:t,seed:n}){let s=Array.from({length:e},()=>Array(i).fill(!1)),r=Array.from({length:e},()=>Array(i).fill(0)),a=Array.from({length:e},()=>Array(i).fill(re.GRASS)),o=n!=null?al(n):()=>Math.random(),l=Math.floor(i/2),c=Math.floor(e/2),h=l,u=0,d=l,p=e-1,y=2,g=3;function m(R,P,B,Z){for(let Q=P;Q<=B;Q++)if(!(Q<0||Q>=e))for(let V=-y;V<=y;V++){let K=Z+V;K<0||K>=i||(s[Q][K]=!0,a[Q][K]=R,r[Q][K]=1)}}m(re.BASE_TOP,u,u+g-1,h),m(re.BASE_BOTTOM,p-g+1,p,d),m(re.CENTER,c-1,c+1,l);let f=new Set,x=(R,P)=>Math.abs(R-l)<=2&&Math.abs(P-c)<=1,_=(R,P)=>{R<0||R>=i||P<0||P>=e||x(R,P)||f.add(P*i+R)},v=Math.floor(i/2),I=Math.floor(e/2),M=Math.min(i,e)*t,w=Math.max(60,(e+i)*2);for(let R=0;R<2;R++){let P=R===0?v-M:v+M,B=R===0?Math.PI/2:-Math.PI/2,Z=R===0?Math.PI*3/2:Math.PI/2;for(let Q=0;Q<=w;Q++){let V=Q/w,K=B+V*(Z-B),ae=P+M*Math.cos(K),de=I+M*Math.sin(K),he=Math.round(ae),ye=Math.round(de);_(he,ye),_(he+1,ye),_(he-1,ye),_(he,ye+1),_(he,ye-1)}}let N=[[0,1],[0,-1],[1,0],[-1,0]];for(let R=0;R<1;R++){let P=[];f.forEach(B=>{let Z=B%i,Q=B/i|0;for(let[V,K]of N){let ae=Z+V,de=Q+K;if(ae<0||ae>=i||de<0||de>=e)continue;let he=de*i+ae;f.has(he)||P.push(he)}}),P.forEach(B=>f.add(B))}f.forEach(R=>{let P=R%i,B=R/i|0;a[B][P]===re.BASE_TOP||a[B][P]===re.BASE_BOTTOM||a[B][P]===re.CENTER||(s[B][P]=!0,a[B][P]=re.PATH,r[B][P]=1)});let b=Math.round(v-M*1.6),E=Math.round(v+M*1.6),F=Math.round(v-M),Y=Math.round(v+M),J=1;for(let R=c-J;R<=c+J;R++)if(!(R<0||R>=e))for(let P=b;P<=E;P++)P<0||P>=i||(s[R][P]=!0,a[R][P]!==re.CENTER&&a[R][P]!==re.BASE_TOP&&a[R][P]!==re.BASE_BOTTOM&&(a[R][P]=re.PATH),r[R][P]=Math.max(r[R][P],1));function D(R,P,B,Z){let Q=Math.max(1,Math.min(R,P)),V=Math.min(e-2,Math.max(R,P)),K=Math.max(1,Math.min(B,Z)),ae=Math.min(i-2,Math.max(B,Z));for(let de=Q;de<=V;de++)for(let he=K;he<=ae;he++)a[de][he]===re.BASE_TOP||a[de][he]===re.BASE_BOTTOM||a[de][he]===re.CENTER||(s[de][he]=!0,a[de][he]=re.PATH,r[de][he]=1)}let H=3,$=3;D(u,u+H-1,F,h-1),D(u,u+H-1,h+1,Y),D(p-$+1,p,F,d-1),D(p-$+1,p,d+1,Y),m(re.BASE_TOP,u,u+g-1,h),m(re.BASE_BOTTOM,p-g+1,p,d),m(re.CENTER,c-1,c+1,l);for(let R=0;R<e;R++)for(let P=0;P<i;P++){if(s[R][P]||a[R][P]===re.BASE_TOP||a[R][P]===re.BASE_BOTTOM||a[R][P]===re.CENTER)continue;let B=Math.abs(P-h)<=4&&Math.abs(R-u)<=3,Z=Math.abs(P-d)<=4&&Math.abs(R-p)<=3,Q=B||Z,V=o();V<.55&&!Q?(a[R][P]=re.TREE,r[R][P]=1+Math.floor(o()*2)):V<.75||Q&&V<.5?(a[R][P]=re.WATER,r[R][P]=0):(a[R][P]=re.ROCK,r[R][P]=1+Math.floor(o()*2))}let C=[];for(let R=0;R<e;R++)for(let P=0;P<i;P++)a[R][P]===re.CENTER&&C.push({gx:P,gy:R});return{w:i,h:e,path:s,height:r,type:a,topBaseX:h,topBaseY:u,botBaseX:d,botBaseY:p,centerTiles:C}}function wu(i,e,t){let n=e===1?re.BASE_BOTTOM:re.BASE_TOP,s=[];for(let r=0;r<i.h;r++)for(let a=0;a<i.w;a++)i.type[r][a]===n&&(t&&t.has(r*i.w+a)||s.push({gx:a,gy:r}));return s}function Xs(i){if(i.centerTiles&&i.centerTiles.length>0)return i.centerTiles;let e=[];for(let t=0;t<i.h;t++)for(let n=0;n<i.w;n++)i.type[t][n]===re.CENTER&&e.push({gx:n,gy:t});return e}function na(i,e){let t=e===1?re.BASE_TOP:re.BASE_BOTTOM,n=[];for(let s=0;s<i.h;s++)for(let r=0;r<i.w;r++)i.type[s][r]===t&&n.push({gx:r,gy:s});return n}function Eu(i,e){let t=Xs(i);if(t.length===0)return e;let n=s=>Math.min(...t.map(r=>Math.abs(s.gx-r.gx)+Math.abs(s.gy-r.gy)));return[...e].sort((s,r)=>n(s)-n(r))}var Ln=_t.reduce((i,e)=>(i[e]={battles:0,kills:0,deaths:0,wins:0,losses:0},i),{});function Tu(){for(let i of _t){let e=Ln[i];e&&(e.battles=0,e.kills=0,e.deaths=0,e.wins=0,e.losses=0)}}function fm(i,e){if(!i||i.summonedBy==null||!Array.isArray(e))return i;let t=e.find(n=>n.id===i.summonedBy);return t??i}function Au(i,e,t){if(!zs)return;let s=fm(i,t)?.class;if(_t.includes(s)&&Ln[s]&&Ln[s].kills++,e?.summonedBy!=null)return;let r=e?.class;_t.includes(r)&&Ln[r]&&Ln[r].deaths++}function Ru(i,e){if(!zs)return null;for(let n of i)!n||!Ln[n.class]||(Ln[n.class].battles++,e!=null&&(n.player===e?Ln[n.class].wins++:Ln[n.class].losses++));let t=_t.map(n=>{let s=Ln[n],r=s.wins+s.losses||1;return{class:n,battles:s.battles,kills:s.kills,deaths:s.deaths,wins:s.wins,losses:s.losses,winRate:s.wins+s.losses>0?(s.wins/r*100).toFixed(1)+"%":"-",lossRate:s.wins+s.losses>0?(s.losses/r*100).toFixed(1)+"%":"-"}});return console.table(t),t}function Ys(i){return i.units.filter(e=>e.hp>0).sort((e,t)=>{let n=ze(e,"agi"),s=ze(t,"agi");return s!==n?s-n:ze(t,"dex")-ze(e,"dex")}).map(e=>e.id)}function pm(i,e,t){let{world:n}=i,s=new Set(i.units.filter(u=>u.hp>0).map(u=>u.y*n.w+u.x)),r=(u,d)=>u>=0&&u<n.w&&d>=0&&d<n.h,a=(u,d)=>r(u,d)&&xn(n,u,d)&&!s.has(d*n.w+u),o=t??(e.player===1?Math.PI:0),l=e.x-Math.round(Math.cos(o)),c=e.y+Math.round(Math.sin(o));if(a(l,c))return{gx:l,gy:c};let h=[[0,1],[0,-1],[1,0],[-1,0]];for(let[u,d]of h){let p=e.x+u,y=e.y+d;if(a(p,y))return{gx:p,gy:y}}return null}function mm(i,e,t,n,s={}){let{state:r}=i,a=s.position&&s.position.gx!=null&&s.position.gy!=null?{gx:s.position.gx,gy:s.position.gy}:pm(r,e,s.facingAngle);if(!a)return null;let o=t.class&&_t.includes(t.class)?t.class:"knight",l=t.hairColor!=null?t.hairColor:(vn[o]||vn.knight).hair,c=s.ownerPlayer!=null?s.ownerPlayer:e.player,h={id:r.ids.next(),player:c,x:a.gx,y:a.gy,level:t.level!=null?t.level:1,name:t.name!=null?t.name:"Summoned",class:o,hairColor:l,hp:t.hp!=null?t.hp:10,maxHp:t.maxHp!=null?t.maxHp:10,mp:t.mp!=null?t.mp:5,maxMp:t.maxMp!=null?t.maxMp:5,str:t.str!=null?t.str:5,agi:t.agi!=null?t.agi:5,vit:t.vit!=null?t.vit:5,dex:t.dex!=null?t.dex:5,luk:t.luk!=null?t.luk:5,int:t.int!=null?t.int:5,range:t.range!=null?t.range:1};s.omitSummonedBy||(h.summonedBy=e.id),Array.isArray(n)&&n.length>0&&(h.summonedSkills=n),r.addUnit(h);let u=r.phase==="playing"&&r.initiativeOrder.length>0&&r.currentTurnIndex>=0&&r.currentTurnIndex<r.initiativeOrder.length?r.initiativeOrder[r.currentTurnIndex]:null;if(r.initiativeOrder=Ys(r),u!=null){let d=r.initiativeOrder.indexOf(u);d>=0&&(r.currentTurnIndex=d)}return i.emit("unitSummoned",{unit:h,grayscale:!!s.useGrayscaleAppearance}),i.emit("initiativeChanged",{}),h}function Cu(i,e,t){let{state:n}=i;if(n.units.indexOf(t)===-1)return null;n.removeUnit(t),n.deadCorpseCount=Math.max(0,n.deadCorpseCount-1),i.emit("unitRemoved",{unit:t});let r=t.class&&_t.includes(t.class)?t.class:"knight",a=t.hairColor!=null?t.hairColor:(vn[r]||vn.knight).hair,o=m=>Math.max(1,Math.floor((m||0)*6/7)),l={name:"Reanimated "+t.name,class:r,hairColor:a,level:t.level,hp:o(t.maxHp),maxHp:o(t.maxHp),mp:o(t.maxMp),maxMp:o(t.maxMp),str:o(t.str),agi:o(t.agi),vit:o(t.vit),dex:o(t.dex),luk:o(t.luk),int:o(t.int),range:t.range},c=t.summonedSkills&&t.summonedSkills.length>0?t.summonedSkills.slice():(ni[r]||[]).slice(),h=new Set(n.units.filter(m=>m.hp>0).map(m=>m.y*n.world.w+m.x)),u=t.x,d=t.y,p=xn(n.world,u,d)&&!h.has(d*n.world.w+u),y={useGrayscaleAppearance:!0,ownerPlayer:e.player,omitSummonedBy:!0};p&&(y.position={gx:u,gy:d});let g=mm(i,e,l,c,y);return g&&(g.isReanimated=!0),g}function qs(i,e,t,n={}){let{state:s}=i;return s.removeUnitFromTileIndex(e),e.isReanimated||s.deadCorpseCount++,e.deathOrder=++s.deathOrderSeq,Au(t,e,s.units),i.emit("floatingText",{gx:e.x,gy:e.y,text:"DEAD",kind:"damage"}),i.emit("unitDied",{unit:e,killer:t}),s.units.filter(o=>o.summonedBy===e.id&&o.hp>0).map(o=>o.id).forEach(o=>{let l=s.getUnitById(o);l&&(l.hp=0,qs(i,l,null,{skipSync:!0}))}),s.phase==="playing"&&s.initiativeOrder.length>0&&e.id===s.initiativeOrder[s.currentTurnIndex]}function Iu(i,e){return i.units.some(t=>t.player===e&&t.hp>0&&!t.summonedBy)}function Ks(i,e){return e&&i.units.find(t=>t.tag===e)||null}function Pu(i,e){return!i||!e?.length?!1:e.some(t=>(t.x|0)===i.x&&(t.y|0)===i.y)}function gm(i,e){return e?.tiles?.length?e.tiles:e?.target==="enemyBase"&&i.world?na(i.world,1).map(t=>({x:t.gx,y:t.gy})):[]}function ym(i){return!Iu(i,2)}function _m(i,e){let t=Ks(i,e.tag||"boss");return!t||t.hp<=0}function xm(i,e){let t=Math.max(0,e.turns|0);return i.turnCount>=t}function vm(i,e){let t=gm(i,e);if(t.length===0)return!1;let n=e.by==="all"?"all":"any",s;if(e.unitTag){let r=Ks(i,e.unitTag);s=r&&r.hp>0&&r.player===1?[r]:[]}else s=i.units.filter(r=>r.player===1&&r.hp>0&&!r.summonedBy);return s.length===0?!1:n==="all"?s.every(r=>Pu(r,t)):s.some(r=>Pu(r,t))}function Lu(i,e){if(!e||!e.type)return!1;switch(e.type){case"eliminate":return ym(i);case"boss":return _m(i,e);case"survive":return xm(i,e);case"reach":return vm(i,e);default:return!1}}function Mm(i,e){let t=Ks(i,e.tag);return!t||t.hp<=0}function dl(i){let e=i.story;if(!e)return{outcome:null,title:null};let t=e.objectives||{win:[{type:"eliminate"}],lose:[]};if(!Iu(i,1))return{outcome:"lose",title:"Defeat \u2014 your army has fallen."};for(let s of t.lose||[])if(s.type==="protect"&&Mm(i,s))return{outcome:"lose",title:`Defeat \u2014 ${s.tag||"VIP"} was lost.`};return(t.win?.length?t.win:[{type:"eliminate"}]).every(s=>Lu(i,s))?{outcome:"win",title:"Victory!"}:{outcome:null,title:null}}function Du(i){let e=i.story;if(!e)return[];let t=e.objectives||{},n=[];for(let s of t.win||[])if(s.type==="eliminate"){let r=i.units.filter(a=>a.player===2&&a.hp>0&&!a.summonedBy).length;n.push({text:`Defeat all enemies (${r} remaining)`,done:r===0})}else if(s.type==="boss"){let r=Ks(i,s.tag||"boss"),a=!r||r.hp<=0;n.push({text:a?"Boss defeated":`Defeat boss: ${r?.name||s.tag}`,done:a})}else if(s.type==="survive"){let r=s.turns|0;n.push({text:`Survive ${r} turns (${Math.min(i.turnCount,r)}/${r})`,done:i.turnCount>=r})}else if(s.type==="reach"){let r=s.unitTag?`Escort ${s.unitTag} to the objective`:s.target==="enemyBase"?"Reach the enemy base":"Reach the objective";n.push({text:r,done:Lu(i,s)})}for(let s of t.lose||[])if(s.type==="protect"){let r=Ks(i,s.tag),a=r&&r.hp>0;n.push({text:a?`Protect ${r.name||s.tag}`:`${s.tag||"VIP"} fallen`,done:!a,danger:!0})}return n}var bm=["poison"];function Uu(i,e){if(e.level>=3)return;let t=e.maxHp>0?e.hp/e.maxHp:1;e.level+=1;let n=s=>Math.max(1,Math.ceil(s*1.1));e.maxHp=n(e.maxHp),e.maxMp=n(e.maxMp),e.hp=Math.max(1,Math.min(e.maxHp,Math.ceil(t*e.maxHp))),e.mp=Math.max(1,Math.min(e.maxMp,Math.ceil(t*e.maxMp))),e.str=n(e.str),e.agi=n(e.agi),e.vit=n(e.vit),e.dex=n(e.dex),e.luk=n(e.luk),e.int=n(e.int),e.range>3&&(e.range=n(e.range)),i.emit("levelUp",{unit:e,level:e.level}),i.emit("unitStatsChanged",{unit:e})}function Nu(i){let{state:e}=i,t=e.initiativeOrder.length;if(t===0)return;let n=e.getActiveUnit();if(n&&n.tempDebuff&&(n.tempDebuff.duration--,n.tempDebuff.duration<=0&&(n.tempDebuff=void 0)),n&&n.tempBuff&&(n.tempBuff.duration--,n.tempBuff.duration<=0&&(n.tempBuff=void 0)),n&&n.hp>0){let h=Math.ceil(ze(n,"int")*.15);n.mp=Math.min(n.maxMp,n.mp+h),i.emit("unitStatsChanged",{unit:n})}if(n&&n.hp>0){let h=n.x,u=n.y;e.world.type[u][h]===re.CENTER&&n.level===1&&Uu(i,n);let d=n.player===1?re.BASE_TOP:re.BASE_BOTTOM;e.world.type[u][h]===d&&n.level===2&&Uu(i,n)}if(e.turnCount++,e.turnCount>=e.settings.maxTurns){Sm(i);return}let s=e.currentTurnIndex,r=(s+1)%t,a=0;for(;a<t;){let h=e.getUnitById(e.initiativeOrder[r]);if(h&&h.hp>0)break;r=(r+1)%t,a++}let o=t>0&&r<=s;e.currentTurnIndex=r;let l=e.getActiveUnit();for(let h=0;h<t;h++){let u=e.getActiveUnit();if(!u||u.hp<=0)break;let d=u.tempDebuff||{},p=bm.find(g=>!isNaN(d[g])),y=d[p]||0;if(y<=0)break;if(u.hp=Math.max(0,u.hp-y),i.emit("floatingText",{gx:u.x,gy:u.y,text:String(y),kind:p}),i.emit("unitStatsChanged",{unit:u}),u.hp<=0){qs(i,u,null);let g=(e.currentTurnIndex+1)%t,m=0;for(;m<t;){let f=e.getUnitById(e.initiativeOrder[g]);if(f&&f.hp>0)break;g=(g+1)%t,m++}e.currentTurnIndex=g;continue}break}let c=e.getActiveUnit();if(c&&c.hp>0){let h=c.tempBuff,u=h&&h.heal!=null&&!isNaN(h.heal)?Number(h.heal):0;if(u>0){let d=c.hp;c.hp=Math.min(c.maxHp,c.hp+u);let p=c.hp-d;p>0&&(i.emit("floatingText",{gx:c.x,gy:c.y,text:`+${p}`,kind:"heal"}),i.emit("unitStatsChanged",{unit:c}))}}return e.currentPlayer=c&&c.hp>0?c.player:1,e.hasMoved=!1,e.hasAttacked=!1,o&&(e.initiativeOrder=Ys(e),e.currentTurnIndex=0),{unit:e.getActiveUnit(),currentPlayer:e.currentPlayer,turnCount:e.turnCount}}function Ou(i){let{state:e}=i;if(e.phase!=="playing")return;if(e.story){let s=dl(e);s.outcome==="win"?Ai(i,1,s.title,"win"):s.outcome==="lose"&&Ai(i,2,s.title,"lose");return}let t=e.units.some(s=>s.player===1&&s.hp>0&&!s.summonedBy),n=e.units.some(s=>s.player===2&&s.hp>0&&!s.summonedBy);t?n||Ai(i,1):Ai(i,2)}function Sm(i){let{state:e}=i;if(e.story){let u=dl(e);u.outcome==="win"?Ai(i,1,u.title||"Victory \u2014 you held out!","win"):Ai(i,2,"Defeat \u2014 time ran out.","lose");return}let t=e.world,n=Xs(t),s=new Set(n.map(u=>u.gy*t.w+u.gx)),r=u=>e.units.filter(d=>d.hp>0&&d.player===u&&!d.summonedBy&&s.has(d.y*t.w+d.x)).length,a=u=>e.units.filter(d=>d.hp>0&&d.player===u&&!d.summonedBy).reduce((d,p)=>d+p.hp,0),o=r(1),l=r(2),c=null,h="";if(o>l)c=1,h=`Time's up! ${Zs(e,1)} wins! (${o} vs ${l} units on center base)`;else if(l>o)c=2,h=`Time's up! ${Zs(e,2)} wins! (${l} vs ${o} units on center base)`;else{let u=a(1),d=a(2);u>d?(c=1,h=`Time's up! Draw on center \u2014 ${Zs(e,1)} wins on total HP (${u} vs ${d})`):d>u?(c=2,h=`Time's up! Draw on center \u2014 ${Zs(e,2)} wins on total HP (${d} vs ${u})`):h=`Draw! (equal units on center: ${o}, equal HP)`}Ai(i,c,h)}function Zs(i,e){return i.playerNames[e]||`Player ${e}`}function Ai(i,e,t,n){let{state:s}=i;if(s.phase==="gameover")return;s.phase="gameover";let r=Ru(s.units,e),a=n||null;a==null&&s.story&&(a=e===1?"win":"lose"),i.emit("gameOver",{winner:e,title:t??`${Zs(s,e)} wins!`,classRecord:r,outcome:a,stageId:s.story?.stageId||null})}var Fu=["red","yellow","purple","blue","green"],Bu={red:15022389,yellow:16635957,purple:9315498,blue:2001125,green:4431943};function wm(i){let{world:e}=i,t=Math.floor(e.h/2),n=[];for(let s=0;s<e.w;s++){let r=t;if(e.type[r][s]!==re.PATH||i.getUnitAtTile(s,r)!=null)continue;let a=i.tileKey(s,r);i.powerups.has(a)||n.push({gx:s,gy:r})}return n}function ku(i,e){let{state:t,rng:n}=i,s=wm(t);if(s.length===0)return;let r=s[Math.floor(n.next()*s.length)],a=Fu[Math.floor(n.next()*Fu.length)],o=t.tileKey(r.gx,r.gy);t.powerups.set(o,{type:a}),i.emit("powerupSpawned",{key:o,type:a,gx:r.gx,gy:r.gy,turnsLeft:e})}function fl(i,e){let{state:t}=i,n=t.tileKey(e.x,e.y),s=t.powerups.get(n);if(s){if(t.powerups.delete(n),i.emit("powerupCollected",{key:n,type:s.type,unit:e,gx:e.x,gy:e.y}),s.type==="green")e.hp=Math.min(e.maxHp,e.hp+6),i.emit("floatingText",{gx:e.x,gy:e.y,text:"+6 HP",kind:"buff"});else{let a="";s.type==="red"?(e.tempBuff={str:4,duration:3},a="STR"):s.type==="yellow"?(e.tempBuff={agi:4,duration:3},a="AGI"):s.type==="purple"?(e.tempBuff={int:4,duration:3},a="INT"):s.type==="blue"&&(e.tempBuff={dex:4,duration:3},a="DEX"),i.emit("floatingText",{gx:e.x,gy:e.y,text:`+4 ${a}`,kind:"buff"})}i.emit("unitStatsChanged",{unit:e}),i.emit("buffAnimation",{unit:e})}}function Em(i,e=[1,2]){let t=i;if(e.length===1)return Array(t).fill(e[0]);let n=[1];for(let s=0;s<Math.floor((t-1)/2);s++)n.push(2,2,1,1);return t%2===1?n.push(2):(n.push(2,2),n.push(1)),n}function un(i){return i.draft.order[i.draft.pickIndex]}function ia(i){let e=un(i);return i.draft.pickCountByPlayer[e]+1}function pl(i,e={}){let{state:t,rng:n}=i,s=e.picksPerPlayer!=null?e.picksPerPlayer:t.settings.draftPicksPerPlayer,r=e.players?.length?e.players:[1,2],a;e.classPool instanceof Set?a=[...e.classPool]:Array.isArray(e.classPool)?a=[...e.classPool]:a=[..._t],t.phase="draft",t.deathOrderSeq=0,t.deadCorpseCount=0,t.powerups.clear(),t.powerupSpawnedTurnsLeft={30:!1,20:!1,10:!1};let o=t.draft;o.order=Em(s,r),o.totalPicks=o.order.length,o.pickIndex=0,o.pickCountByPlayer={1:0,2:0},o.availableClasses=new Set(a),o.classOrder=n.shuffle([...a]),o.pendingClassKey=null,o.selectedClassKey=null,o.placementTiles=[],i.emit("draftStarted",{player:un(t),pickCount:ia(t),picksPerPlayer:s})}function Hu(i,e){let{state:t}=i,n=t.draft;if(!n.availableClasses.has(e)||n.pendingClassKey)return!1;n.pendingClassKey=e;let s=un(t),r=new Set(t.units.map(o=>t.tileKey(o.x,o.y))),a=wu(t.world,s,r);return n.placementTiles=Eu(t.world,a),i.emit("draftPickChosen",{player:s,classKey:e,placementTiles:n.placementTiles}),!0}function zu(i,e,t){let{state:n}=i,s=n.draft;if(!s.pendingClassKey)return!1;let r=un(n),a=n.tileKey(e,t);if(!s.placementTiles.some(h=>n.tileKey(h.gx,h.gy)===a))return!1;let o=s.pendingClassKey,l=Ei({id:n.ids.next(),player:r,classKey:o,x:e,y:t});n.addUnit(l),i.emit("unitPlaced",{unit:l}),s.availableClasses.delete(o),s.pendingClassKey=null,s.placementTiles=[],s.pickCountByPlayer[r]++,s.pickIndex++;let c=s.totalPicks!=null?s.totalPicks:2*n.settings.draftPicksPerPlayer;return s.pickIndex>=c?(i.emit("draftComplete",{}),!0):(i.emit("draftTurnChanged",{player:un(n),pickCount:ia(n),picksPerPlayer:n.settings.draftPicksPerPlayer}),!0)}var sa=class{constructor(e,t){this.state=e,this.events=t,this.animator=null,this._chain=Promise.resolve(),this._deathAnims=[],this.ctx={state:e,rng:e.rng,emit:(n,s)=>t.emit(n,s),onDeath:(n,s)=>this._onDeath(n,s)},t.on("unitDied",({unit:n})=>{this._deathAnims.push(this._anim("animateDeath",n))}),t.on("powerupCheck",({unit:n})=>{n&&n.hp>0&&fl(this.ctx,n)})}setAnimator(e){this.animator=e}_onDeath(e,t){qs(this.ctx,e,t)}async _anim(e,...t){if(this.animator&&typeof this.animator[e]=="function")try{await this.animator[e](...t)}catch(n){console.error(`[animator] ${e}`,n)}}async _awaitDeathAnims(){if(this._deathAnims.length===0)return;let e=this._deathAnims;this._deathAnims=[],await Promise.all(e)}async _resolveDeathsAndCheckGameOver(){await this._awaitDeathAnims(),Ou(this.ctx)}dispatch(e){let t=()=>this._apply(e);return this._chain=this._chain.then(t,t),this._chain}async _apply(e){switch(e.type){case"move":return this._move(e);case"attack":return this._attack(e);case"skill":return this._skill(e);case"endTurn":return this._endTurn(e);case"draftPick":return this._draftPick(e);case"draftPlace":return this._draftPlace(e);default:console.warn("[dispatch] unknown intent",e)}}async _move(e){let{state:t}=this,n=t.getUnitById(e.unitId);if(!n||n.hp<=0||t.hasMoved||n.id!==t.initiativeOrder[t.currentTurnIndex])return;let s=wi(t.world,n.x,n.y,e.toGx,e.toGy,t.units,n);if(!s||s.length<=1)return;let r=n.x,a=n.y;await this._anim("animateMove",n,s);let o=s[s.length-1],l=s[s.length-2];n.x=o.x,n.y=o.y,n.facing=Mn(l.x,l.y,o.x,o.y)||n.facing,t.updateUnitTileIndex(n,r,a),t.hasMoved=!0,fl(this.ctx,n),this.events.emit("unitMoved",{unit:n,from:{gx:r,gy:a},to:{gx:n.x,gy:n.y},path:s}),t.story&&await this._resolveDeathsAndCheckGameOver(),t.phase==="playing"&&this._finishAction(n)}async _attack(e){let{state:t}=this,n=t.getUnitById(e.unitId),s=t.getUnitById(e.targetId);if(!n||n.hp<=0||!s||s.hp<=0||t.hasAttacked||n.id!==t.initiativeOrder[t.currentTurnIndex])return;n.facing=Mn(n.x,n.y,s.x,s.y)||n.facing;let r=e.strikes||mu(n,s,t.rng);t.hasAttacked=!0,this.events.emit("unitAttack",{attacker:n,target:s,strikes:r}),await this._anim("animateAttack",n,s,r,a=>{if(s.hp<=0)return;let o=r[a];o&&$s(this.ctx,{attacker:n,victim:s,amount:o.damage,preHit:o.isHit})}),await this._resolveDeathsAndCheckGameOver(),await this._finishAction(n)}async _skill(e){let{state:t}=this,n=t.getUnitById(e.unitId);if(!n||n.hp<=0||t.hasAttacked||n.id!==t.initiativeOrder[t.currentTurnIndex])return;let r=bn(t,n)[e.skillIndex];if(!r||r.disabled)return;let a=e.targetId!=null?t.getUnitById(e.targetId):null;if(r.target==="enemy"&&(!a||a.hp<=0))return;a&&(a.x!==n.x||a.y!==n.y)&&(n.facing=Mn(n.x,n.y,a.x,a.y)||n.facing),n.mp=Math.max(0,n.mp-(r.cost||0)),t.hasAttacked=!0,this.events.emit("unitSkill",{unit:n,target:a,skill:r});let o=!1,l=()=>{o||(o=!0,Su(this.ctx,n,a,r,{reanimate:(c,h)=>Cu(this.ctx,c,h)}))};await this._anim("animateSkill",n,a,r,l),l(),await this._resolveDeathsAndCheckGameOver(),await this._finishAction(n)}async _endTurn(e){let{state:t}=this;if(t.phase!=="playing"||e&&e.unitId!=null&&e.unitId!==t.initiativeOrder[t.currentTurnIndex])return;let n=t.getActiveUnit();n&&e?.facing&&(n.facing=e.facing,this.events.emit("unitFacingChanged",{unit:n})),await this._doEndTurn()}async _doEndTurn(){let{state:e}=this,t=Nu(this.ctx);await this._resolveDeathsAndCheckGameOver(),e.phase==="playing"&&(this._maybeSpawnPowerups(),t&&this.events.emit("turnChanged",t),this.events.emit("afterEndTurn",{unit:e.getActiveUnit()}))}async _finishAction(e){let{state:t}=this;t.phase==="playing"&&(e.hp<=0?await this._doEndTurn():t.hasMoved&&t.hasAttacked?this.events.emit("turnEndRequested",{unit:e}):this.events.emit("actionResolved",{unit:e}))}_maybeSpawnPowerups(){let{state:e}=this,t=e.settings.maxTurns-e.turnCount;for(let n of[30,20,10])t<=n&&!e.powerupSpawnedTurnsLeft[n]&&(ku(this.ctx,t),e.powerupSpawnedTurnsLeft[n]=!0)}_draftPick(e){Hu(this.ctx,e.classKey)}_draftPlace(e){zu(this.ctx,e.gx,e.gy)}startPlaying(){let{state:e}=this;e.phase="playing",e.turnCount=0,e.initiativeOrder=Ys(e),e.currentTurnIndex=0,e.hasMoved=!1,e.hasAttacked=!1;let t=e.getActiveUnit();e.currentPlayer=t?t.player:1,this.events.emit("playingStarted",{unit:t,currentPlayer:e.currentPlayer}),this.events.emit("turnChanged",{unit:t,currentPlayer:e.currentPlayer,turnCount:0})}get currentDraftPlayer(){return un(this.state)}};var Tm=new Set(Object.values(re)),Am=new Set(_t),Rm=new Set([re.TREE,re.WATER,re.ROCK]),ml=5,gl=50;function ra(i){if(!i||typeof i!="object")return{ok:!1,error:"Map is not an object."};if(i.version!==1)return{ok:!1,error:`Unsupported map version: ${i.version}`};let e=i.w|0,t=i.h|0;if(e<ml||e>gl||t<ml||t>gl)return{ok:!1,error:`Map size must be ${ml}\u2013${gl} (got ${e}\xD7${t}).`};if(!Array.isArray(i.type)||i.type.length!==t)return{ok:!1,error:"type must be an array of h rows."};if(!Array.isArray(i.height)||i.height.length!==t)return{ok:!1,error:"height must be an array of h rows."};for(let n=0;n<t;n++){let s=i.type[n],r=i.height[n];if(!Array.isArray(s)||s.length!==e)return{ok:!1,error:`type row ${n} must have length ${e}.`};if(!Array.isArray(r)||r.length!==e)return{ok:!1,error:`height row ${n} must have length ${e}.`};for(let a=0;a<e;a++){let o=s[a],l=r[a];if(!Tm.has(o))return{ok:!1,error:`Invalid tile type at (${a},${n}): ${o}`};if(l!==0&&l!==1&&l!==2)return{ok:!1,error:`Invalid height at (${a},${n}): ${l}`}}}if(i.units!=null){if(!Array.isArray(i.units))return{ok:!1,error:"units must be an array."};for(let n=0;n<i.units.length;n++){let s=i.units[n];if(!s||typeof s!="object")return{ok:!1,error:`units[${n}] is invalid.`};if(s.player!==1&&s.player!==2)return{ok:!1,error:`units[${n}].player must be 1 or 2.`};if(!Am.has(s.class))return{ok:!1,error:`units[${n}].class is unknown: ${s.class}`};let r=s.level!=null?s.level|0:1;if(r<1||r>3)return{ok:!1,error:`units[${n}].level must be 1\u20133.`};let a=s.x|0,o=s.y|0;if(a<0||a>=e||o<0||o>=t)return{ok:!1,error:`units[${n}] position (${a},${o}) out of bounds.`};if(s.tag!=null&&typeof s.tag!="string")return{ok:!1,error:`units[${n}].tag must be a string.`}}}return{ok:!0}}function yl(i,e,t="Untitled"){let n=Array.from({length:e},()=>Array(i).fill(re.GRASS)),s=Array.from({length:e},()=>Array(i).fill(0));return{version:1,name:t,w:i,h:e,type:n,height:s,units:[]}}function _l(i,e=[],t="Untitled"){let n=i.type.map(a=>a.slice()),s=i.height.map(a=>a.slice()),r=e.map(a=>{let o={player:a.player,class:a.class,level:a.level!=null?a.level:1,x:a.x,y:a.y,facing:a.facing?{dx:a.facing.dx,dy:a.facing.dy}:ii(a.player)};return a.tag&&(o.tag=a.tag),o});return{version:1,name:t||"Untitled",w:i.w,h:i.h,type:n,height:s,units:r}}function Js(i){let e=ra(i);if(!e.ok)throw new Error(e.error);let{w:t,h:n}=i,s=i.type.map(x=>x.slice()),r=i.height.map(x=>x.slice()),a=Array.from({length:n},()=>Array(t).fill(!1)),o=[],l=0,c=0,h=0,u=0,d=0,p=0;for(let x=0;x<n;x++)for(let _=0;_<t;_++){let v=s[x][_];a[x][_]=!Rm.has(v),v===re.CENTER&&o.push({gx:_,gy:x}),v===re.BASE_TOP&&(l+=_,c+=x,h++),v===re.BASE_BOTTOM&&(u+=_,d+=x,p++)}let y=h>0?Math.round(l/h):Math.floor(t/2),g=h>0?Math.round(c/h):0,m=p>0?Math.round(u/p):Math.floor(t/2),f=p>0?Math.round(d/p):n-1;return{w:t,h:n,path:a,height:r,type:s,topBaseX:y,topBaseY:g,botBaseX:m,botBaseY:f,centerTiles:o}}function aa(i){let e=ra(i);if(!e.ok)throw new Error(e.error);return(i.units||[]).map(t=>{let n={player:t.player,class:t.class,level:t.level!=null?t.level|0:1,x:t.x|0,y:t.y|0,facing:t.facing&&(t.facing.dx!=null||t.facing.dy!=null)?{dx:t.facing.dx|0,dy:t.facing.dy|0}:ii(t.player)};return t.tag&&(n.tag=t.tag),n})}var la=i=>i<.5?2*i*i:1-(-2*i+2)**2/2;var xl=i=>i,oa=class{constructor(){this._tweens=new Set,this._running=!1,this._raf=null,this._lastTime=0,this.onFrame=null}get active(){return this._tweens.size>0}add({duration:e,onUpdate:t,onComplete:n,ease:s=la}){let r={elapsed:0,duration:Math.max(0,e),onUpdate:t,onComplete:n,ease:s,done:!1,cancel:()=>{this._tweens.delete(r)}};return this._tweens.add(r),this._ensureRunning(),r}during(e,t,n){return this.add({duration:e,onUpdate:t,onComplete:n,ease:xl})}_ensureRunning(){this._running||(this._running=!0,this._lastTime=performance.now(),this._raf=requestAnimationFrame(this._tick))}_tick=e=>{let t=e-this._lastTime;this._lastTime=e;for(let n of[...this._tweens]){n.elapsed+=t;let s=n.duration===0?1:Math.min(1,n.elapsed/n.duration),r=n.ease(s);try{n.onUpdate(r,s)}catch(a){console.error("[tween] onUpdate error",a)}if(s>=1&&(this._tweens.delete(n),n.onComplete))try{n.onComplete()}catch(a){console.error("[tween] onComplete error",a)}}this.onFrame&&this.onFrame(),this._tweens.size>0?this._raf=requestAnimationFrame(this._tick):(this._running=!1,this._raf=null)};clear(){this._tweens.clear(),this._raf&&cancelAnimationFrame(this._raf),this._running=!1,this._raf=null}};var Yc="160";var Cm=0,Gu=1,Pm=2;var po=1,Im=2,Gn=3,pi=0,Jt=1,Mt=2;var ui=0,_s=1,Vu=2,Wu=3,$u=4,Lm=5,Di=100,Dm=101,Um=102,Xu=103,Yu=104,Nm=200,Om=201,Fm=202,Bm=203,nc=204,ic=205,km=206,Hm=207,zm=208,Gm=209,Vm=210,Wm=211,$m=212,Xm=213,Ym=214,qm=0,Km=1,Zm=2,Fa=3,Jm=4,jm=5,Qm=6,eg=7,Tf=0,tg=1,ng=2,di=0,ig=1,sg=2,rg=3,qc=4,ag=5,og=6;var Af=300,Ms=301,bs=302,sc=303,rc=304,mo=306,hr=1e3,Tn=1001,ac=1002,Wt=1003,qu=1004;var vl=1005;var $t=1006,lg=1007;var ur=1008;var fi=1009,cg=1010,hg=1011,Kc=1012,Rf=1013,ci=1014,hi=1015,dr=1016,Cf=1017,Pf=1018,Ni=1020,ug=1021,An=1023,dg=1024,fg=1025,Oi=1026,Ss=1027,pg=1028,If=1029,mg=1030,Lf=1031,Df=1033,Ml=33776,bl=33777,Sl=33778,wl=33779,Ku=35840,Zu=35841,Ju=35842,ju=35843,Uf=36196,Qu=37492,ed=37496,td=37808,nd=37809,id=37810,sd=37811,rd=37812,ad=37813,od=37814,ld=37815,cd=37816,hd=37817,ud=37818,dd=37819,fd=37820,pd=37821,El=36492,md=36494,gd=36495,gg=36283,yd=36284,_d=36285,xd=36286;var Ba=2300,ka=2301,Tl=2302,vd=2400,Md=2401,bd=2402;var Nf=3e3,Fi=3001,yg=3200,_g=3201,Of=0,xg=1,fn="",Et="srgb",Wn="srgb-linear",Zc="display-p3",go="display-p3-linear",Ha="linear",ct="srgb",za="rec709",Ga="p3";var Ji=7680;var Sd=519,vg=512,Mg=513,bg=514,Ff=515,Sg=516,wg=517,Eg=518,Tg=519,wd=35044;var Ed="300 es",oc=1035,Vn=2e3,Va=2001,mi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Al=Math.PI/180,lc=180/Math.PI;function Is(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}function Ot(i,e,t){return Math.max(e,Math.min(t,i))}function Ag(i,e){return(i%e+e)%e}function Rl(i,e,t){return(1-t)*i+t*e}function Td(i){return(i&i-1)===0&&i!==0}function cc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function js(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Zt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ge=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ze=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],y=n[8],g=s[0],m=s[3],f=s[6],x=s[1],_=s[4],v=s[7],I=s[2],M=s[5],w=s[8];return r[0]=a*g+o*x+l*I,r[3]=a*m+o*_+l*M,r[6]=a*f+o*v+l*w,r[1]=c*g+h*x+u*I,r[4]=c*m+h*_+u*M,r[7]=c*f+h*v+u*w,r[2]=d*g+p*x+y*I,r[5]=d*m+p*_+y*M,r[8]=d*f+p*v+y*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,y=t*u+n*d+s*p;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/y;return e[0]=u*g,e[1]=(s*c-h*n)*g,e[2]=(o*n-s*a)*g,e[3]=d*g,e[4]=(h*t-s*l)*g,e[5]=(s*r-o*t)*g,e[6]=p*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Cl.makeScale(e,t)),this}rotate(e){return this.premultiply(Cl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Cl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Cl=new Ze;function Bf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Wa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Rg(){let i=Wa("canvas");return i.style.display="block",i}var Ad={};function rr(i){i in Ad||(Ad[i]=!0,console.warn(i))}var Rd=new Ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Cd=new Ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ca={[Wn]:{transfer:Ha,primaries:za,toReference:i=>i,fromReference:i=>i},[Et]:{transfer:ct,primaries:za,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[go]:{transfer:Ha,primaries:Ga,toReference:i=>i.applyMatrix3(Cd),fromReference:i=>i.applyMatrix3(Rd)},[Zc]:{transfer:ct,primaries:Ga,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Cd),fromReference:i=>i.applyMatrix3(Rd).convertLinearToSRGB()}},Cg=new Set([Wn,go]),nt={enabled:!0,_workingColorSpace:Wn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Cg.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=ca[e].toReference,s=ca[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return ca[i].primaries},getTransfer:function(i){return i===fn?Ha:ca[i].transfer}};function xs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Pl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ji,$a=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ji===void 0&&(ji=Wa("canvas")),ji.width=e.width,ji.height=e.height;let n=ji.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ji}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Wa("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=xs(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xs(t[n]/255)*255):t[n]=xs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Pg=0,Xa=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pg++}),this.uuid=Is(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Il(s[a].image)):r.push(Il(s[a]))}else r=Il(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Il(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?$a.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ig=0,pn=class i extends mi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Tn,s=Tn,r=$t,a=ur,o=An,l=fi,c=i.DEFAULT_ANISOTROPY,h=fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ig++}),this.uuid=Is(),this.name="",this.source=new Xa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(rr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Fi?Et:fn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Af)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hr:e.x=e.x-Math.floor(e.x);break;case Tn:e.x=e.x<0?0:1;break;case ac:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hr:e.y=e.y-Math.floor(e.y);break;case Tn:e.y=e.y<0?0:1;break;case ac:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return rr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Et?Fi:Nf}set encoding(e){rr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Fi?Et:fn}};pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=Af;pn.DEFAULT_ANISOTROPY=1;var Lt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],y=l[9],g=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(y-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(y+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,v=(p+1)/2,I=(f+1)/2,M=(h+d)/4,w=(u+g)/4,N=(y+m)/4;return _>v&&_>I?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=M/n,r=w/n):v>I?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=M/s,r=N/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=w/r,s=N/r),this.set(n,s,r,t),this}let x=Math.sqrt((m-y)*(m-y)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-y)/x,this.y=(u-g)/x,this.z=(d-h)/x,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},hc=class extends mi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(rr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Fi?Et:fn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new pn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Xa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},$n=class extends hc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ya=class extends pn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var uc=class extends pn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Un=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],p=r[a+1],y=r[a+2],g=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=y,e[t+3]=g;return}if(u!==g||l!==d||c!==p||h!==y){let m=1-o,f=l*d+c*p+h*y+u*g,x=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){let I=Math.sqrt(_),M=Math.atan2(I,f*x);m=Math.sin(m*M)/I,o=Math.sin(o*M)/I}let v=o*x;if(l=l*m+d*v,c=c*m+p*v,h=h*m+y*v,u=u*m+g*v,m===1-o){let I=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=I,c*=I,h*=I,u*=I}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],p=r[a+2],y=r[a+3];return e[t]=o*y+h*u+l*p-c*d,e[t+1]=l*y+h*d+c*u-o*p,e[t+2]=c*y+h*p+o*d-l*u,e[t+3]=h*y-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),p=l(s/2),y=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*y,this._y=c*p*u-d*h*y,this._z=c*h*y+d*p*u,this._w=c*h*u-d*p*y;break;case"YXZ":this._x=d*h*u+c*p*y,this._y=c*p*u-d*h*y,this._z=c*h*y-d*p*u,this._w=c*h*u+d*p*y;break;case"ZXY":this._x=d*h*u-c*p*y,this._y=c*p*u+d*h*y,this._z=c*h*y+d*p*u,this._w=c*h*u-d*p*y;break;case"ZYX":this._x=d*h*u-c*p*y,this._y=c*p*u+d*h*y,this._z=c*h*y-d*p*u,this._w=c*h*u+d*p*y;break;case"YZX":this._x=d*h*u+c*p*y,this._y=c*p*u+d*h*y,this._z=c*h*y-d*p*u,this._w=c*h*u-d*p*y;break;case"XZY":this._x=d*h*u-c*p*y,this._y=c*p*u-d*h*y,this._z=c*h*y+d*p*u,this._w=c*h*u+d*p*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ot(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ll.copy(this).projectOnVector(e),this.sub(Ll)}reflect(e){return this.sub(Ll.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ll=new L,Pd=new Un,Xn=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Sn):Sn.fromBufferAttribute(r,a),Sn.applyMatrix4(e.matrixWorld),this.expandByPoint(Sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ha.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ha.copy(n.boundingBox)),ha.applyMatrix4(e.matrixWorld),this.union(ha)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Sn),Sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qs),ua.subVectors(this.max,Qs),Qi.subVectors(e.a,Qs),es.subVectors(e.b,Qs),ts.subVectors(e.c,Qs),si.subVectors(es,Qi),ri.subVectors(ts,es),Ri.subVectors(Qi,ts);let t=[0,-si.z,si.y,0,-ri.z,ri.y,0,-Ri.z,Ri.y,si.z,0,-si.x,ri.z,0,-ri.x,Ri.z,0,-Ri.x,-si.y,si.x,0,-ri.y,ri.x,0,-Ri.y,Ri.x,0];return!Dl(t,Qi,es,ts,ua)||(t=[1,0,0,0,1,0,0,0,1],!Dl(t,Qi,es,ts,ua))?!1:(da.crossVectors(si,ri),t=[da.x,da.y,da.z],Dl(t,Qi,es,ts,ua))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Fn=[new L,new L,new L,new L,new L,new L,new L,new L],Sn=new L,ha=new Xn,Qi=new L,es=new L,ts=new L,si=new L,ri=new L,Ri=new L,Qs=new L,ua=new L,da=new L,Ci=new L;function Dl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ci.fromArray(i,r);let o=s.x*Math.abs(Ci.x)+s.y*Math.abs(Ci.y)+s.z*Math.abs(Ci.z),l=e.dot(Ci),c=t.dot(Ci),h=n.dot(Ci);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Lg=new Xn,er=new L,Ul=new L,gi=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Lg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;er.subVectors(e,this.center);let t=er.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(er,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ul.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(er.copy(e.center).add(Ul)),this.expandByPoint(er.copy(e.center).sub(Ul))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Bn=new L,Nl=new L,fa=new L,ai=new L,Ol=new L,pa=new L,Fl=new L,fr=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bn.copy(this.origin).addScaledVector(this.direction,t),Bn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Nl.copy(e).add(t).multiplyScalar(.5),fa.copy(t).sub(e).normalize(),ai.copy(this.origin).sub(Nl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(fa),o=ai.dot(this.direction),l=-ai.dot(fa),c=ai.lengthSq(),h=Math.abs(1-a*a),u,d,p,y;if(h>0)if(u=a*l-o,d=a*o-l,y=r*h,u>=0)if(d>=-y)if(d<=y){let g=1/h;u*=g,d*=g,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-y?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=y?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Nl).addScaledVector(fa,d),p}intersectSphere(e,t){Bn.subVectors(e.center,this.origin);let n=Bn.dot(this.direction),s=Bn.dot(Bn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Bn)!==null}intersectTriangle(e,t,n,s,r){Ol.subVectors(t,e),pa.subVectors(n,e),Fl.crossVectors(Ol,pa);let a=this.direction.dot(Fl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ai.subVectors(this.origin,e);let l=o*this.direction.dot(pa.crossVectors(ai,pa));if(l<0)return null;let c=o*this.direction.dot(Ol.cross(ai));if(c<0||l+c>a)return null;let h=-o*ai.dot(Fl);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ht=class i{constructor(e,t,n,s,r,a,o,l,c,h,u,d,p,y,g,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,p,y,g,m)}set(e,t,n,s,r,a,o,l,c,h,u,d,p,y,g,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=y,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/ns.setFromMatrixColumn(e,0).length(),r=1/ns.setFromMatrixColumn(e,1).length(),a=1/ns.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,p=a*u,y=o*h,g=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+y*c,t[5]=d-g*c,t[9]=-o*l,t[2]=g-d*c,t[6]=y+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,y=c*h,g=c*u;t[0]=d+g*o,t[4]=y*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-y,t[6]=g+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,y=c*h,g=c*u;t[0]=d-g*o,t[4]=-a*u,t[8]=y+p*o,t[1]=p+y*o,t[5]=a*h,t[9]=g-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*u,y=o*h,g=o*u;t[0]=l*h,t[4]=y*c-p,t[8]=d*c+g,t[1]=l*u,t[5]=g*c+d,t[9]=p*c-y,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,y=o*l,g=o*c;t[0]=l*h,t[4]=g-d*u,t[8]=y*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+y,t[10]=d-g*u}else if(e.order==="XZY"){let d=a*l,p=a*c,y=o*l,g=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+g,t[5]=a*h,t[9]=p*u-y,t[2]=y*u-p,t[6]=o*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dg,e,Ug)}lookAt(e,t,n){let s=this.elements;return sn.subVectors(e,t),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),oi.crossVectors(n,sn),oi.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),oi.crossVectors(n,sn)),oi.normalize(),ma.crossVectors(sn,oi),s[0]=oi.x,s[4]=ma.x,s[8]=sn.x,s[1]=oi.y,s[5]=ma.y,s[9]=sn.y,s[2]=oi.z,s[6]=ma.z,s[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],y=n[2],g=n[6],m=n[10],f=n[14],x=n[3],_=n[7],v=n[11],I=n[15],M=s[0],w=s[4],N=s[8],b=s[12],E=s[1],F=s[5],Y=s[9],J=s[13],D=s[2],H=s[6],$=s[10],C=s[14],R=s[3],P=s[7],B=s[11],Z=s[15];return r[0]=a*M+o*E+l*D+c*R,r[4]=a*w+o*F+l*H+c*P,r[8]=a*N+o*Y+l*$+c*B,r[12]=a*b+o*J+l*C+c*Z,r[1]=h*M+u*E+d*D+p*R,r[5]=h*w+u*F+d*H+p*P,r[9]=h*N+u*Y+d*$+p*B,r[13]=h*b+u*J+d*C+p*Z,r[2]=y*M+g*E+m*D+f*R,r[6]=y*w+g*F+m*H+f*P,r[10]=y*N+g*Y+m*$+f*B,r[14]=y*b+g*J+m*C+f*Z,r[3]=x*M+_*E+v*D+I*R,r[7]=x*w+_*F+v*H+I*P,r[11]=x*N+_*Y+v*$+I*B,r[15]=x*b+_*J+v*C+I*Z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],y=e[3],g=e[7],m=e[11],f=e[15];return y*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*p-n*l*p)+g*(+t*l*p-t*c*d+r*a*d-s*a*p+s*c*h-r*l*h)+m*(+t*c*u-t*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+f*(-s*o*h-t*l*u+t*o*d+s*a*u-n*a*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],y=e[12],g=e[13],m=e[14],f=e[15],x=u*m*c-g*d*c+g*l*p-o*m*p-u*l*f+o*d*f,_=y*d*c-h*m*c-y*l*p+a*m*p+h*l*f-a*d*f,v=h*g*c-y*u*c+y*o*p-a*g*p-h*o*f+a*u*f,I=y*u*l-h*g*l-y*o*d+a*g*d+h*o*m-a*u*m,M=t*x+n*_+s*v+r*I;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/M;return e[0]=x*w,e[1]=(g*d*r-u*m*r-g*s*p+n*m*p+u*s*f-n*d*f)*w,e[2]=(o*m*r-g*l*r+g*s*c-n*m*c-o*s*f+n*l*f)*w,e[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*p-n*l*p)*w,e[4]=_*w,e[5]=(h*m*r-y*d*r+y*s*p-t*m*p-h*s*f+t*d*f)*w,e[6]=(y*l*r-a*m*r-y*s*c+t*m*c+a*s*f-t*l*f)*w,e[7]=(a*d*r-h*l*r+h*s*c-t*d*c-a*s*p+t*l*p)*w,e[8]=v*w,e[9]=(y*u*r-h*g*r-y*n*p+t*g*p+h*n*f-t*u*f)*w,e[10]=(a*g*r-y*o*r+y*n*c-t*g*c-a*n*f+t*o*f)*w,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*p-t*o*p)*w,e[12]=I*w,e[13]=(h*g*s-y*u*s+y*n*d-t*g*d-h*n*m+t*u*m)*w,e[14]=(y*o*s-a*g*s-y*n*l+t*g*l+a*n*m-t*o*m)*w,e[15]=(a*u*s-h*o*s+h*n*l-t*u*l-a*n*d+t*o*d)*w,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,y=r*u,g=a*h,m=a*u,f=o*u,x=l*c,_=l*h,v=l*u,I=n.x,M=n.y,w=n.z;return s[0]=(1-(g+f))*I,s[1]=(p+v)*I,s[2]=(y-_)*I,s[3]=0,s[4]=(p-v)*M,s[5]=(1-(d+f))*M,s[6]=(m+x)*M,s[7]=0,s[8]=(y+_)*w,s[9]=(m-x)*w,s[10]=(1-(d+g))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=ns.set(s[0],s[1],s[2]).length(),a=ns.set(s[4],s[5],s[6]).length(),o=ns.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],wn.copy(this);let c=1/r,h=1/a,u=1/o;return wn.elements[0]*=c,wn.elements[1]*=c,wn.elements[2]*=c,wn.elements[4]*=h,wn.elements[5]*=h,wn.elements[6]*=h,wn.elements[8]*=u,wn.elements[9]*=u,wn.elements[10]*=u,t.setFromRotationMatrix(wn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Vn){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),p,y;if(o===Vn)p=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Va)p=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Vn){let l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(a-r),d=(t+e)*c,p=(n+s)*h,y,g;if(o===Vn)y=(a+r)*u,g=-2*u;else if(o===Va)y=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ns=new L,wn=new ht,Dg=new L(0,0,0),Ug=new L(1,1,1),oi=new L,ma=new L,sn=new L,Id=new ht,Ld=new Un,ws=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ot(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ot(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Id.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Id,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ld.setFromEuler(this),this.setFromQuaternion(Ld,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ws.DEFAULT_ORDER="XYZ";var pr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ng=0,Dd=new L,is=new Un,kn=new ht,ga=new L,tr=new L,Og=new L,Fg=new Un,Ud=new L(1,0,0),Nd=new L(0,1,0),Od=new L(0,0,1),Bg={type:"added"},kg={type:"removed"},Ut=class i extends mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ng++}),this.uuid=Is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new ws,n=new Un,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ht},normalMatrix:{value:new Ze}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.multiply(is),this}rotateOnWorldAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.premultiply(is),this}rotateX(e){return this.rotateOnAxis(Ud,e)}rotateY(e){return this.rotateOnAxis(Nd,e)}rotateZ(e){return this.rotateOnAxis(Od,e)}translateOnAxis(e,t){return Dd.copy(e).applyQuaternion(this.quaternion),this.position.add(Dd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ud,e)}translateY(e){return this.translateOnAxis(Nd,e)}translateZ(e){return this.translateOnAxis(Od,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ga.copy(e):ga.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(tr,ga,this.up):kn.lookAt(ga,tr,this.up),this.quaternion.setFromRotationMatrix(kn),s&&(kn.extractRotation(s.matrixWorld),is.setFromRotationMatrix(kn),this.quaternion.premultiply(is.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Bg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kg)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(kn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,e,Og),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,Fg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),y=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),y.length>0&&(n.nodes=y)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Ut.DEFAULT_UP=new L(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var En=new L,Hn=new L,Bl=new L,zn=new L,ss=new L,rs=new L,Fd=new L,kl=new L,Hl=new L,zl=new L,ya=!1,ps=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),En.subVectors(e,t),s.cross(En);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){En.subVectors(s,t),Hn.subVectors(n,t),Bl.subVectors(e,t);let a=En.dot(En),o=En.dot(Hn),l=En.dot(Bl),c=Hn.dot(Hn),h=Hn.dot(Bl),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,y=(a*h-o*l)*d;return r.set(1-p-y,y,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getUV(e,t,n,s,r,a,o,l){return ya===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ya=!0),this.getInterpolation(e,t,n,s,r,a,o,l)}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,zn.x),l.addScaledVector(a,zn.y),l.addScaledVector(o,zn.z),l)}static isFrontFacing(e,t,n,s){return En.subVectors(n,t),Hn.subVectors(e,t),En.cross(Hn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),En.cross(Hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return ya===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ya=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;ss.subVectors(s,n),rs.subVectors(r,n),kl.subVectors(e,n);let l=ss.dot(kl),c=rs.dot(kl);if(l<=0&&c<=0)return t.copy(n);Hl.subVectors(e,s);let h=ss.dot(Hl),u=rs.dot(Hl);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(ss,a);zl.subVectors(e,r);let p=ss.dot(zl),y=rs.dot(zl);if(y>=0&&p<=y)return t.copy(r);let g=p*c-l*y;if(g<=0&&c>=0&&y<=0)return o=c/(c-y),t.copy(n).addScaledVector(rs,o);let m=h*y-p*u;if(m<=0&&u-h>=0&&p-y>=0)return Fd.subVectors(r,s),o=(u-h)/(u-h+(p-y)),t.copy(s).addScaledVector(Fd,o);let f=1/(m+g+d);return a=g*f,o=d*f,t.copy(n).addScaledVector(ss,a).addScaledVector(rs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},kf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},_a={h:0,s:0,l:0};function Gl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var He=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=nt.workingColorSpace){if(e=Ag(e,1),t=Ot(t,0,1),n=Ot(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Gl(a,r,e+1/3),this.g=Gl(a,r,e),this.b=Gl(a,r,e-1/3)}return nt.toWorkingColorSpace(this,s),this}setStyle(e,t=Et){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){let n=kf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xs(e.r),this.g=xs(e.g),this.b=xs(e.b),this}copyLinearToSRGB(e){return this.r=Pl(e.r),this.g=Pl(e.g),this.b=Pl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return nt.fromWorkingColorSpace(kt.copy(this),e),Math.round(Ot(kt.r*255,0,255))*65536+Math.round(Ot(kt.g*255,0,255))*256+Math.round(Ot(kt.b*255,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(kt.copy(this),t);let n=kt.r,s=kt.g,r=kt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=Et){nt.fromWorkingColorSpace(kt.copy(this),e);let t=kt.r,n=kt.g,s=kt.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(li),this.setHSL(li.h+e,li.s+t,li.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(li),e.getHSL(_a);let n=Rl(li.h,_a.h,t),s=Rl(li.s,_a.s,t),r=Rl(li.l,_a.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},kt=new He;He.NAMES=kf;var Hg=0,yi=class extends mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hg++}),this.uuid=Is(),this.name="",this.type="Material",this.blending=_s,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nc,this.blendDst=ic,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=Fa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ji,this.stencilZFail=Ji,this.stencilZPass=Ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_s&&(n.blending=this.blending),this.side!==pi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==nc&&(n.blendSrc=this.blendSrc),this.blendDst!==ic&&(n.blendDst=this.blendDst),this.blendEquation!==Di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},lt=class extends yi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Tf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var St=new L,xa=new ge,Dt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=wd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xa.fromBufferAttribute(this,t),xa.applyMatrix3(e),this.setXY(t,xa.x,xa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=js(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=js(t,this.array)),t}setX(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=js(t,this.array)),t}setY(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=js(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=js(t,this.array)),t}setW(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),s=Zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),s=Zt(s,this.array),r=Zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wd&&(e.usage=this.usage),e}};var qa=class extends Dt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ka=class extends Dt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var je=class extends Dt{constructor(e,t,n){super(new Float32Array(e),t,n)}};var zg=0,dn=new ht,Vl=new Ut,as=new L,rn=new Xn,nr=new Xn,It=new L,Tt=class i extends mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zg++}),this.uuid=Is(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bf(e)?Ka:qa)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,t,n){return dn.makeTranslation(e,t,n),this.applyMatrix4(dn),this}scale(e,t,n){return dn.makeScale(e,t,n),this.applyMatrix4(dn),this}lookAt(e){return Vl.lookAt(e),Vl.updateMatrix(),this.applyMatrix4(Vl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new je(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];nr.setFromBufferAttribute(o),this.morphTargetsRelative?(It.addVectors(rn.min,nr.min),rn.expandByPoint(It),It.addVectors(rn.max,nr.max),rn.expandByPoint(It)):(rn.expandByPoint(nr.min),rn.expandByPoint(nr.max))}rn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)It.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(It));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)It.fromBufferAttribute(o,c),l&&(as.fromBufferAttribute(e,c),It.add(as)),s=Math.max(s,n.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dt(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let E=0;E<o;E++)c[E]=new L,h[E]=new L;let u=new L,d=new L,p=new L,y=new ge,g=new ge,m=new ge,f=new L,x=new L;function _(E,F,Y){u.fromArray(s,E*3),d.fromArray(s,F*3),p.fromArray(s,Y*3),y.fromArray(a,E*2),g.fromArray(a,F*2),m.fromArray(a,Y*2),d.sub(u),p.sub(u),g.sub(y),m.sub(y);let J=1/(g.x*m.y-m.x*g.y);isFinite(J)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(J),x.copy(p).multiplyScalar(g.x).addScaledVector(d,-m.x).multiplyScalar(J),c[E].add(f),c[F].add(f),c[Y].add(f),h[E].add(x),h[F].add(x),h[Y].add(x))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let E=0,F=v.length;E<F;++E){let Y=v[E],J=Y.start,D=Y.count;for(let H=J,$=J+D;H<$;H+=3)_(n[H+0],n[H+1],n[H+2])}let I=new L,M=new L,w=new L,N=new L;function b(E){w.fromArray(r,E*3),N.copy(w);let F=c[E];I.copy(F),I.sub(w.multiplyScalar(w.dot(F))).normalize(),M.crossVectors(N,F);let J=M.dot(h[E])<0?-1:1;l[E*4]=I.x,l[E*4+1]=I.y,l[E*4+2]=I.z,l[E*4+3]=J}for(let E=0,F=v.length;E<F;++E){let Y=v[E],J=Y.start,D=Y.count;for(let H=J,$=J+D;H<$;H+=3)b(n[H+0]),b(n[H+1]),b(n[H+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Dt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let d=0,p=e.count;d<p;d+=3){let y=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,y),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,y),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(y,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,y=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?p=l[g]*o.data.stride+o.offset:p=l[g]*h;for(let f=0;f<h;f++)d[y++]=c[p++]}return new Dt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bd=new ht,Pi=new fr,va=new gi,kd=new L,os=new L,ls=new L,cs=new L,Wl=new L,Ma=new L,ba=new ge,Sa=new ge,wa=new ge,Hd=new L,zd=new L,Gd=new L,Ea=new L,Ta=new L,be=class extends Ut{constructor(e=new Tt,t=new lt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ma.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Wl.fromBufferAttribute(u,e),a?Ma.addScaledVector(Wl,h):Ma.addScaledVector(Wl.sub(t),h))}t.add(Ma)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),va.copy(n.boundingSphere),va.applyMatrix4(r),Pi.copy(e.ray).recast(e.near),!(va.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(va,kd)===null||Pi.origin.distanceToSquared(kd)>(e.far-e.near)**2))&&(Bd.copy(r).invert(),Pi.copy(e.ray).applyMatrix4(Bd),!(n.boundingBox!==null&&Pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Pi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let y=0,g=d.length;y<g;y++){let m=d[y],f=a[m.materialIndex],x=Math.max(m.start,p.start),_=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=x,I=_;v<I;v+=3){let M=o.getX(v),w=o.getX(v+1),N=o.getX(v+2);s=Aa(this,f,e,n,c,h,u,M,w,N),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let y=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=y,f=g;m<f;m+=3){let x=o.getX(m),_=o.getX(m+1),v=o.getX(m+2);s=Aa(this,a,e,n,c,h,u,x,_,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let y=0,g=d.length;y<g;y++){let m=d[y],f=a[m.materialIndex],x=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=x,I=_;v<I;v+=3){let M=v,w=v+1,N=v+2;s=Aa(this,f,e,n,c,h,u,M,w,N),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let y=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=y,f=g;m<f;m+=3){let x=m,_=m+1,v=m+2;s=Aa(this,a,e,n,c,h,u,x,_,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Gg(i,e,t,n,s,r,a,o){let l;if(e.side===Jt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===pi,o),l===null)return null;Ta.copy(o),Ta.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ta);return c<t.near||c>t.far?null:{distance:c,point:Ta.clone(),object:i}}function Aa(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,os),i.getVertexPosition(l,ls),i.getVertexPosition(c,cs);let h=Gg(i,e,t,n,os,ls,cs,Ea);if(h){s&&(ba.fromBufferAttribute(s,o),Sa.fromBufferAttribute(s,l),wa.fromBufferAttribute(s,c),h.uv=ps.getInterpolation(Ea,os,ls,cs,ba,Sa,wa,new ge)),r&&(ba.fromBufferAttribute(r,o),Sa.fromBufferAttribute(r,l),wa.fromBufferAttribute(r,c),h.uv1=ps.getInterpolation(Ea,os,ls,cs,ba,Sa,wa,new ge),h.uv2=h.uv1),a&&(Hd.fromBufferAttribute(a,o),zd.fromBufferAttribute(a,l),Gd.fromBufferAttribute(a,c),h.normal=ps.getInterpolation(Ea,os,ls,cs,Hd,zd,Gd,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new L,materialIndex:0};ps.getNormal(os,ls,cs,u.normal),h.face=u}return h}var jt=class i extends Tt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;y("z","y","x",-1,-1,n,t,e,a,r,0),y("z","y","x",1,-1,n,t,-e,a,r,1),y("x","z","y",1,1,e,n,t,s,a,2),y("x","z","y",1,-1,e,n,-t,s,a,3),y("x","y","z",1,-1,e,t,n,s,r,4),y("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new je(c,3)),this.setAttribute("normal",new je(h,3)),this.setAttribute("uv",new je(u,2));function y(g,m,f,x,_,v,I,M,w,N,b){let E=v/w,F=I/N,Y=v/2,J=I/2,D=M/2,H=w+1,$=N+1,C=0,R=0,P=new L;for(let B=0;B<$;B++){let Z=B*F-J;for(let Q=0;Q<H;Q++){let V=Q*E-Y;P[g]=V*x,P[m]=Z*_,P[f]=D,c.push(P.x,P.y,P.z),P[g]=0,P[m]=0,P[f]=M>0?1:-1,h.push(P.x,P.y,P.z),u.push(Q/w),u.push(1-B/N),C+=1}}for(let B=0;B<N;B++)for(let Z=0;Z<w;Z++){let Q=d+Z+H*B,V=d+Z+H*(B+1),K=d+(Z+1)+H*(B+1),ae=d+(Z+1)+H*B;l.push(Q,V,ae),l.push(V,K,ae),R+=6}o.addGroup(p,R,b),p+=R,d+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Es(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Vt(i){let e={};for(let t=0;t<i.length;t++){let n=Es(i[t]);for(let s in n)e[s]=n[s]}return e}function Vg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Hf(i){return i.getRenderTarget()===null?i.outputColorSpace:nt.workingColorSpace}var Wg={clone:Es,merge:Vt},$g=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Yn=class extends yi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$g,this.fragmentShader=Xg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Es(e.uniforms),this.uniformsGroups=Vg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Za=class extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Vn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Xt=class extends Za{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=lc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Al*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lc*2*Math.atan(Math.tan(Al*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Al*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},hs=-90,us=1,dc=class extends Ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Xt(hs,us,e,t);s.layers=this.layers,this.add(s);let r=new Xt(hs,us,e,t);r.layers=this.layers,this.add(r);let a=new Xt(hs,us,e,t);a.layers=this.layers,this.add(a);let o=new Xt(hs,us,e,t);o.layers=this.layers,this.add(o);let l=new Xt(hs,us,e,t);l.layers=this.layers,this.add(l);let c=new Xt(hs,us,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Va)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}},Ja=class extends pn{constructor(e,t,n,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ms,super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},fc=class extends $n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(rr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Fi?Et:fn),this.texture=new Ja(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:$t}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new jt(5,5,5),r=new Yn({name:"CubemapFromEquirect",uniforms:Es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jt,blending:ui});r.uniforms.tEquirect.value=t;let a=new be(s,r),o=t.minFilter;return t.minFilter===ur&&(t.minFilter=$t),new dc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},$l=new L,Yg=new L,qg=new Ze,an=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=$l.subVectors(n,t).cross(Yg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta($l),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||qg.getNormalMatrix(e),s=this.coplanarPoint($l).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ii=new gi,Ra=new L,mr=class{constructor(e=new an,t=new an,n=new an,s=new an,r=new an,a=new an){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Vn){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],y=s[9],g=s[10],m=s[11],f=s[12],x=s[13],_=s[14],v=s[15];if(n[0].setComponents(l-r,d-c,m-p,v-f).normalize(),n[1].setComponents(l+r,d+c,m+p,v+f).normalize(),n[2].setComponents(l+a,d+h,m+y,v+x).normalize(),n[3].setComponents(l-a,d-h,m-y,v-x).normalize(),n[4].setComponents(l-o,d-u,m-g,v-_).normalize(),t===Vn)n[5].setComponents(l+o,d+u,m+g,v+_).normalize();else if(t===Va)n[5].setComponents(o,u,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(e){return Ii.center.set(0,0,0),Ii.radius=.7071067811865476,Ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ra.x=s.normal.x>0?e.max.x:e.min.x,Ra.y=s.normal.y>0?e.max.y:e.min.y,Ra.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ra)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function zf(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Kg(i,e){let t=e.isWebGL2,n=new WeakMap;function s(c,h){let u=c.array,d=c.usage,p=u.byteLength,y=i.createBuffer();i.bindBuffer(h,y),i.bufferData(h,u,d),c.onUploadCallback();let g;if(u instanceof Float32Array)g=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=i.SHORT;else if(u instanceof Uint32Array)g=i.UNSIGNED_INT;else if(u instanceof Int32Array)g=i.INT;else if(u instanceof Int8Array)g=i.BYTE;else if(u instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:y,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,h,u){let d=h.array,p=h._updateRange,y=h.updateRanges;if(i.bindBuffer(u,c),p.count===-1&&y.length===0&&i.bufferSubData(u,0,d),y.length!==0){for(let g=0,m=y.length;g<m;g++){let f=y[g];t?i.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):i.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(t?i.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):i.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}var Qt=class i extends Tt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,p=[],y=[],g=[],m=[];for(let f=0;f<h;f++){let x=f*d-a;for(let _=0;_<c;_++){let v=_*u-r;y.push(v,-x,0),g.push(0,0,1),m.push(_/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<o;x++){let _=x+c*f,v=x+c*(f+1),I=x+1+c*(f+1),M=x+1+c*f;p.push(_,v,M),p.push(v,I,M)}this.setIndex(p),this.setAttribute("position",new je(y,3)),this.setAttribute("normal",new je(g,3)),this.setAttribute("uv",new je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Zg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jg=`#ifdef USE_ALPHAHASH
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
#endif`,jg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ey=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ty=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ny=`#ifdef USE_AOMAP
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
#endif`,iy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sy=`#ifdef USE_BATCHING
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
#endif`,ry=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ay=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,oy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ly=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cy=`#ifdef USE_IRIDESCENCE
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
#endif`,hy=`#ifdef USE_BUMPMAP
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
#endif`,uy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,py=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,my=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,_y=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,xy=`#define PI 3.141592653589793
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
} // validated`,vy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,My=`vec3 transformedNormal = objectNormal;
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
#endif`,by=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ey=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ty="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ay=`
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
}`,Ry=`#ifdef USE_ENVMAP
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
#endif`,Cy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Py=`#ifdef USE_ENVMAP
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
#endif`,Iy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ly=`#ifdef USE_ENVMAP
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
#endif`,Dy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Uy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ny=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Oy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fy=`#ifdef USE_GRADIENTMAP
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
}`,By=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ky=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gy=`uniform bool receiveShadow;
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
#endif`,Vy=`#ifdef USE_ENVMAP
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
#endif`,Wy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$y=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qy=`PhysicalMaterial material;
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
#endif`,Ky=`struct PhysicalMaterial {
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
}`,Zy=`
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
#endif`,Jy=`#if defined( RE_IndirectDiffuse )
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
#endif`,jy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,e_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,n_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,i_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,s_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,r_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,a_=`#if defined( USE_POINTS_UV )
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
#endif`,o_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,l_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,c_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,h_=`#ifdef USE_MORPHNORMALS
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
#endif`,u_=`#ifdef USE_MORPHTARGETS
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
#endif`,d_=`#ifdef USE_MORPHTARGETS
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
#endif`,f_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,p_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,m_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,__=`#ifdef USE_NORMALMAP
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
#endif`,x_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,v_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,M_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,b_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,S_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,w_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,E_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,T_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,A_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,R_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,C_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,P_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,I_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,L_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,D_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,U_=`float getShadowMask() {
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
}`,N_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,O_=`#ifdef USE_SKINNING
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
#endif`,F_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,B_=`#ifdef USE_SKINNING
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
#endif`,k_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,H_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,z_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,G_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,V_=`#ifdef USE_TRANSMISSION
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
#endif`,W_=`#ifdef USE_TRANSMISSION
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
#endif`,$_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,K_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Z_=`uniform sampler2D t2D;
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
}`,J_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Q_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ex=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tx=`#include <common>
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
}`,nx=`#if DEPTH_PACKING == 3200
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
}`,ix=`#define DISTANCE
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
}`,sx=`#define DISTANCE
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
}`,rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ax=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ox=`uniform float scale;
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
}`,lx=`uniform vec3 diffuse;
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
}`,cx=`#include <common>
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
}`,hx=`uniform vec3 diffuse;
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
}`,ux=`#define LAMBERT
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
}`,dx=`#define LAMBERT
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
}`,fx=`#define MATCAP
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
}`,px=`#define MATCAP
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
}`,mx=`#define NORMAL
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
}`,gx=`#define NORMAL
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
}`,yx=`#define PHONG
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
}`,_x=`#define PHONG
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
}`,xx=`#define STANDARD
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
}`,vx=`#define STANDARD
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
}`,Mx=`#define TOON
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
}`,bx=`#define TOON
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
}`,Sx=`uniform float size;
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
}`,wx=`uniform vec3 diffuse;
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
}`,Ex=`#include <common>
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
}`,Tx=`uniform vec3 color;
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
}`,Ax=`uniform float rotation;
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
}`,Rx=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:Zg,alphahash_pars_fragment:Jg,alphamap_fragment:jg,alphamap_pars_fragment:Qg,alphatest_fragment:ey,alphatest_pars_fragment:ty,aomap_fragment:ny,aomap_pars_fragment:iy,batching_pars_vertex:sy,batching_vertex:ry,begin_vertex:ay,beginnormal_vertex:oy,bsdfs:ly,iridescence_fragment:cy,bumpmap_pars_fragment:hy,clipping_planes_fragment:uy,clipping_planes_pars_fragment:dy,clipping_planes_pars_vertex:fy,clipping_planes_vertex:py,color_fragment:my,color_pars_fragment:gy,color_pars_vertex:yy,color_vertex:_y,common:xy,cube_uv_reflection_fragment:vy,defaultnormal_vertex:My,displacementmap_pars_vertex:by,displacementmap_vertex:Sy,emissivemap_fragment:wy,emissivemap_pars_fragment:Ey,colorspace_fragment:Ty,colorspace_pars_fragment:Ay,envmap_fragment:Ry,envmap_common_pars_fragment:Cy,envmap_pars_fragment:Py,envmap_pars_vertex:Iy,envmap_physical_pars_fragment:Vy,envmap_vertex:Ly,fog_vertex:Dy,fog_pars_vertex:Uy,fog_fragment:Ny,fog_pars_fragment:Oy,gradientmap_pars_fragment:Fy,lightmap_fragment:By,lightmap_pars_fragment:ky,lights_lambert_fragment:Hy,lights_lambert_pars_fragment:zy,lights_pars_begin:Gy,lights_toon_fragment:Wy,lights_toon_pars_fragment:$y,lights_phong_fragment:Xy,lights_phong_pars_fragment:Yy,lights_physical_fragment:qy,lights_physical_pars_fragment:Ky,lights_fragment_begin:Zy,lights_fragment_maps:Jy,lights_fragment_end:jy,logdepthbuf_fragment:Qy,logdepthbuf_pars_fragment:e_,logdepthbuf_pars_vertex:t_,logdepthbuf_vertex:n_,map_fragment:i_,map_pars_fragment:s_,map_particle_fragment:r_,map_particle_pars_fragment:a_,metalnessmap_fragment:o_,metalnessmap_pars_fragment:l_,morphcolor_vertex:c_,morphnormal_vertex:h_,morphtarget_pars_vertex:u_,morphtarget_vertex:d_,normal_fragment_begin:f_,normal_fragment_maps:p_,normal_pars_fragment:m_,normal_pars_vertex:g_,normal_vertex:y_,normalmap_pars_fragment:__,clearcoat_normal_fragment_begin:x_,clearcoat_normal_fragment_maps:v_,clearcoat_pars_fragment:M_,iridescence_pars_fragment:b_,opaque_fragment:S_,packing:w_,premultiplied_alpha_fragment:E_,project_vertex:T_,dithering_fragment:A_,dithering_pars_fragment:R_,roughnessmap_fragment:C_,roughnessmap_pars_fragment:P_,shadowmap_pars_fragment:I_,shadowmap_pars_vertex:L_,shadowmap_vertex:D_,shadowmask_pars_fragment:U_,skinbase_vertex:N_,skinning_pars_vertex:O_,skinning_vertex:F_,skinnormal_vertex:B_,specularmap_fragment:k_,specularmap_pars_fragment:H_,tonemapping_fragment:z_,tonemapping_pars_fragment:G_,transmission_fragment:V_,transmission_pars_fragment:W_,uv_pars_fragment:$_,uv_pars_vertex:X_,uv_vertex:Y_,worldpos_vertex:q_,background_vert:K_,background_frag:Z_,backgroundCube_vert:J_,backgroundCube_frag:j_,cube_vert:Q_,cube_frag:ex,depth_vert:tx,depth_frag:nx,distanceRGBA_vert:ix,distanceRGBA_frag:sx,equirect_vert:rx,equirect_frag:ax,linedashed_vert:ox,linedashed_frag:lx,meshbasic_vert:cx,meshbasic_frag:hx,meshlambert_vert:ux,meshlambert_frag:dx,meshmatcap_vert:fx,meshmatcap_frag:px,meshnormal_vert:mx,meshnormal_frag:gx,meshphong_vert:yx,meshphong_frag:_x,meshphysical_vert:xx,meshphysical_frag:vx,meshtoon_vert:Mx,meshtoon_frag:bx,points_vert:Sx,points_frag:wx,shadow_vert:Ex,shadow_frag:Tx,sprite_vert:Ax,sprite_frag:Rx},me={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Dn={basic:{uniforms:Vt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Vt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new He(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Vt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Vt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Vt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new He(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Vt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Vt([me.points,me.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Vt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Vt([me.common,me.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Vt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Vt([me.sprite,me.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:Vt([me.common,me.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:Vt([me.lights,me.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Dn.physical={uniforms:Vt([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};var Ca={r:0,b:0,g:0};function Cx(i,e,t,n,s,r,a){let o=new He(0),l=r===!0?0:1,c,h,u=null,d=0,p=null;function y(m,f){let x=!1,_=f.isScene===!0?f.background:null;_&&_.isTexture&&(_=(f.backgroundBlurriness>0?t:e).get(_)),_===null?g(o,l):_&&_.isColor&&(g(_,1),x=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?n.buffers.color.setClear(0,0,0,1,a):v==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===mo)?(h===void 0&&(h=new be(new jt(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:Es(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,M,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=nt.getTransfer(_.colorSpace)!==ct,(u!==_||d!==_.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,p=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new be(new Qt(2,2),new Yn({name:"BackgroundMaterial",uniforms:Es(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=nt.getTransfer(_.colorSpace)!==ct,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,f){m.getRGB(Ca,Hf(i)),n.buffers.color.setClear(Ca.r,Ca.g,Ca.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),l=f,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(o,l)},render:y}}function Px(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null),c=l,h=!1;function u(D,H,$,C,R){let P=!1;if(a){let B=g(C,$,H);c!==B&&(c=B,p(c.object)),P=f(D,C,$,R),P&&x(D,C,$,R)}else{let B=H.wireframe===!0;(c.geometry!==C.id||c.program!==$.id||c.wireframe!==B)&&(c.geometry=C.id,c.program=$.id,c.wireframe=B,P=!0)}R!==null&&t.update(R,i.ELEMENT_ARRAY_BUFFER),(P||h)&&(h=!1,N(D,H,$,C),R!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(R).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(D){return n.isWebGL2?i.bindVertexArray(D):r.bindVertexArrayOES(D)}function y(D){return n.isWebGL2?i.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function g(D,H,$){let C=$.wireframe===!0,R=o[D.id];R===void 0&&(R={},o[D.id]=R);let P=R[H.id];P===void 0&&(P={},R[H.id]=P);let B=P[C];return B===void 0&&(B=m(d()),P[C]=B),B}function m(D){let H=[],$=[],C=[];for(let R=0;R<s;R++)H[R]=0,$[R]=0,C[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:$,attributeDivisors:C,object:D,attributes:{},index:null}}function f(D,H,$,C){let R=c.attributes,P=H.attributes,B=0,Z=$.getAttributes();for(let Q in Z)if(Z[Q].location>=0){let K=R[Q],ae=P[Q];if(ae===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(ae=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(ae=D.instanceColor)),K===void 0||K.attribute!==ae||ae&&K.data!==ae.data)return!0;B++}return c.attributesNum!==B||c.index!==C}function x(D,H,$,C){let R={},P=H.attributes,B=0,Z=$.getAttributes();for(let Q in Z)if(Z[Q].location>=0){let K=P[Q];K===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(K=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(K=D.instanceColor));let ae={};ae.attribute=K,K&&K.data&&(ae.data=K.data),R[Q]=ae,B++}c.attributes=R,c.attributesNum=B,c.index=C}function _(){let D=c.newAttributes;for(let H=0,$=D.length;H<$;H++)D[H]=0}function v(D){I(D,0)}function I(D,H){let $=c.newAttributes,C=c.enabledAttributes,R=c.attributeDivisors;$[D]=1,C[D]===0&&(i.enableVertexAttribArray(D),C[D]=1),R[D]!==H&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,H),R[D]=H)}function M(){let D=c.newAttributes,H=c.enabledAttributes;for(let $=0,C=H.length;$<C;$++)H[$]!==D[$]&&(i.disableVertexAttribArray($),H[$]=0)}function w(D,H,$,C,R,P,B){B===!0?i.vertexAttribIPointer(D,H,$,R,P):i.vertexAttribPointer(D,H,$,C,R,P)}function N(D,H,$,C){if(n.isWebGL2===!1&&(D.isInstancedMesh||C.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();let R=C.attributes,P=$.getAttributes(),B=H.defaultAttributeValues;for(let Z in P){let Q=P[Z];if(Q.location>=0){let V=R[Z];if(V===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(V=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(V=D.instanceColor)),V!==void 0){let K=V.normalized,ae=V.itemSize,de=t.get(V);if(de===void 0)continue;let he=de.buffer,ye=de.type,xe=de.bytesPerElement,Ae=n.isWebGL2===!0&&(ye===i.INT||ye===i.UNSIGNED_INT||V.gpuType===Rf);if(V.isInterleavedBufferAttribute){let De=V.data,z=De.stride,ut=V.offset;if(De.isInstancedInterleavedBuffer){for(let Re=0;Re<Q.locationSize;Re++)I(Q.location+Re,De.meshPerAttribute);D.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=De.meshPerAttribute*De.count)}else for(let Re=0;Re<Q.locationSize;Re++)v(Q.location+Re);i.bindBuffer(i.ARRAY_BUFFER,he);for(let Re=0;Re<Q.locationSize;Re++)w(Q.location+Re,ae/Q.locationSize,ye,K,z*xe,(ut+ae/Q.locationSize*Re)*xe,Ae)}else{if(V.isInstancedBufferAttribute){for(let De=0;De<Q.locationSize;De++)I(Q.location+De,V.meshPerAttribute);D.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let De=0;De<Q.locationSize;De++)v(Q.location+De);i.bindBuffer(i.ARRAY_BUFFER,he);for(let De=0;De<Q.locationSize;De++)w(Q.location+De,ae/Q.locationSize,ye,K,ae*xe,ae/Q.locationSize*De*xe,Ae)}}else if(B!==void 0){let K=B[Z];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(Q.location,K);break;case 3:i.vertexAttrib3fv(Q.location,K);break;case 4:i.vertexAttrib4fv(Q.location,K);break;default:i.vertexAttrib1fv(Q.location,K)}}}}M()}function b(){Y();for(let D in o){let H=o[D];for(let $ in H){let C=H[$];for(let R in C)y(C[R].object),delete C[R];delete H[$]}delete o[D]}}function E(D){if(o[D.id]===void 0)return;let H=o[D.id];for(let $ in H){let C=H[$];for(let R in C)y(C[R].object),delete C[R];delete H[$]}delete o[D.id]}function F(D){for(let H in o){let $=o[H];if($[D.id]===void 0)continue;let C=$[D.id];for(let R in C)y(C[R].object),delete C[R];delete $[D.id]}}function Y(){J(),h=!0,c!==l&&(c=l,p(c.object))}function J(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:Y,resetDefaultState:J,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfProgram:F,initAttributes:_,enableAttribute:v,disableUnusedAttributes:M}}function Ix(i,e,t,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,u){i.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,d){if(d===0)return;let p,y;if(s)p=i,y="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[y](r,h,u,d),t.update(u,r,d)}function c(h,u,d){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let y=0;y<d;y++)this.render(h[y],u[y]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,d);let y=0;for(let g=0;g<d;g++)y+=u[g];t.update(y,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Lx(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,v=a||e.has("OES_texture_float"),I=_&&v,M=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:x,vertexTextures:_,floatFragmentTextures:v,floatVertexTextures:I,maxSamples:M}}function Dx(i){let e=this,t=null,n=0,s=!1,r=!1,a=new an,o=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){let y=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||y===null||y.length===0||r&&!m)r?h(null):c();else{let x=r?0:n,_=x*4,v=f.clippingState||null;l.value=v,v=h(y,d,_,p);for(let I=0;I!==_;++I)v[I]=t[I];f.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,y){let g=u!==null?u.length:0,m=null;if(g!==0){if(m=l.value,y!==!0||m===null){let f=p+g*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,v=p;_!==g;++_,v+=4)a.copy(u[_]).applyMatrix4(x,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Ux(i){let e=new WeakMap;function t(a,o){return o===sc?a.mapping=Ms:o===rc&&(a.mapping=bs),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===sc||o===rc)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new fc(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var ja=class extends Za{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ms=4,Vd=[.125,.215,.35,.446,.526,.582],Ui=20,Xl=new ja,Wd=new He,Yl=null,ql=0,Kl=0,Li=(1+Math.sqrt(5))/2,ds=1/Li,$d=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Li,ds),new L(0,Li,-ds),new L(ds,0,Li),new L(-ds,0,Li),new L(Li,ds,0),new L(-Li,ds,0)],Ts=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Yl=this._renderer.getRenderTarget(),ql=this._renderer.getActiveCubeFace(),Kl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yl,ql,Kl),e.scissorTest=!1,Pa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ms||e.mapping===bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yl=this._renderer.getRenderTarget(),ql=this._renderer.getActiveCubeFace(),Kl=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:dr,format:An,colorSpace:Wn,depthBuffer:!1},s=Xd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xd(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Nx(r)),this._blurMaterial=Ox(r,e,t)}return s}_compileMaterial(e){let t=new be(this._lodPlanes[0],e);this._renderer.compile(t,Xl)}_sceneToCubeUV(e,t,n,s){let o=new Xt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Wd),h.toneMapping=di,h.autoClear=!1;let p=new lt({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),y=new be(new jt,p),g=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(Wd),g=!0);for(let f=0;f<6;f++){let x=f%3;x===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):x===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));let _=this._cubeSize;Pa(s,x*_,f>2?_:0,_,_),h.setRenderTarget(s),g&&h.render(y,o),h.render(e,o)}y.geometry.dispose(),y.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ms||e.mapping===bs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new be(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Pa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Xl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=$d[(s-1)%$d.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new be(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,y=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ui-1),g=r/y,m=isFinite(r)?1+Math.floor(h*g):Ui;m>Ui&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ui}`);let f=[],x=0;for(let w=0;w<Ui;++w){let N=w/g,b=Math.exp(-N*N/2);f.push(b),w===0?x+=b:w<m&&(x+=2*b)}for(let w=0;w<f.length;w++)f[w]=f[w]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:_}=this;d.dTheta.value=y,d.mipInt.value=_-n;let v=this._sizeLods[s],I=3*v*(s>_-ms?s-_+ms:0),M=4*(this._cubeSize-v);Pa(t,I,M,3*v,2*v),l.setRenderTarget(t),l.render(u,Xl)}};function Nx(i){let e=[],t=[],n=[],s=i,r=i-ms+1+Vd.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-ms?l=Vd[a-i+ms-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,y=6,g=3,m=2,f=1,x=new Float32Array(g*y*p),_=new Float32Array(m*y*p),v=new Float32Array(f*y*p);for(let M=0;M<p;M++){let w=M%3*2/3-1,N=M>2?0:-1,b=[w,N,0,w+2/3,N,0,w+2/3,N+1,0,w,N,0,w+2/3,N+1,0,w,N+1,0];x.set(b,g*y*M),_.set(d,m*y*M);let E=[M,M,M,M,M,M];v.set(E,f*y*M)}let I=new Tt;I.setAttribute("position",new Dt(x,g)),I.setAttribute("uv",new Dt(_,m)),I.setAttribute("faceIndex",new Dt(v,f)),e.push(I),s>ms&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Xd(i,e,t){let n=new $n(i,e,t);return n.texture.mapping=mo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Pa(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Ox(i,e,t){let n=new Float32Array(Ui),s=new L(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:Ui,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Jc(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Yd(){return new Yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jc(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function qd(){return new Yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Jc(){return`

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
	`}function Fx(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===sc||l===rc,h=l===Ms||l===bs;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new Ts(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{let u=o.image;if(c&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new Ts(i));let d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Bx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function kx(i,e,t,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let y in d.attributes)e.remove(d.attributes[y]);for(let y in d.morphAttributes){let g=d.morphAttributes[y];for(let m=0,f=g.length;m<f;m++)e.remove(g[m])}d.removeEventListener("dispose",a),delete s[d.id];let p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let y in d)e.update(d[y],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let y in p){let g=p[y];for(let m=0,f=g.length;m<f;m++)e.update(g[m],i.ARRAY_BUFFER)}}function c(u){let d=[],p=u.index,y=u.attributes.position,g=0;if(p!==null){let x=p.array;g=p.version;for(let _=0,v=x.length;_<v;_+=3){let I=x[_+0],M=x[_+1],w=x[_+2];d.push(I,M,M,w,w,I)}}else if(y!==void 0){let x=y.array;g=y.version;for(let _=0,v=x.length/3-1;_<v;_+=3){let I=_+0,M=_+1,w=_+2;d.push(I,M,M,w,w,I)}}else return;let m=new(Bf(d)?Ka:qa)(d,1);m.version=g;let f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Hx(i,e,t,n){let s=n.isWebGL2,r;function a(p){r=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function h(p,y){i.drawElements(r,y,o,p*l),t.update(y,r,1)}function u(p,y,g){if(g===0)return;let m,f;if(s)m=i,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,y,o,p*l,g),t.update(y,r,g)}function d(p,y,g){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<g;f++)this.render(p[f]/l,y[f]);else{m.multiDrawElementsWEBGL(r,y,0,o,p,0,g);let f=0;for(let x=0;x<g;x++)f+=y[x];t.update(f,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function zx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Gx(i,e){return i[0]-e[0]}function Vx(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Wx(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,a=new Lt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){let d=c.morphTargetInfluences;if(e.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,y=p!==void 0?p.length:0,g=r.get(h);if(g===void 0||g.count!==y){let D=function(){Y.dispose(),r.delete(h),h.removeEventListener("dispose",D)};g!==void 0&&g.texture.dispose();let x=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,v=h.morphAttributes.color!==void 0,I=h.morphAttributes.position||[],M=h.morphAttributes.normal||[],w=h.morphAttributes.color||[],N=0;x===!0&&(N=1),_===!0&&(N=2),v===!0&&(N=3);let b=h.attributes.position.count*N,E=1;b>e.maxTextureSize&&(E=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let F=new Float32Array(b*E*4*y),Y=new Ya(F,b,E,y);Y.type=hi,Y.needsUpdate=!0;let J=N*4;for(let H=0;H<y;H++){let $=I[H],C=M[H],R=w[H],P=b*E*4*H;for(let B=0;B<$.count;B++){let Z=B*J;x===!0&&(a.fromBufferAttribute($,B),F[P+Z+0]=a.x,F[P+Z+1]=a.y,F[P+Z+2]=a.z,F[P+Z+3]=0),_===!0&&(a.fromBufferAttribute(C,B),F[P+Z+4]=a.x,F[P+Z+5]=a.y,F[P+Z+6]=a.z,F[P+Z+7]=0),v===!0&&(a.fromBufferAttribute(R,B),F[P+Z+8]=a.x,F[P+Z+9]=a.y,F[P+Z+10]=a.z,F[P+Z+11]=R.itemSize===4?a.w:1)}}g={count:y,texture:Y,size:new ge(b,E)},r.set(h,g),h.addEventListener("dispose",D)}let m=0;for(let x=0;x<d.length;x++)m+=d[x];let f=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",f),u.getUniforms().setValue(i,"morphTargetInfluences",d),u.getUniforms().setValue(i,"morphTargetsTexture",g.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}else{let p=d===void 0?0:d.length,y=n[h.id];if(y===void 0||y.length!==p){y=[];for(let _=0;_<p;_++)y[_]=[_,0];n[h.id]=y}for(let _=0;_<p;_++){let v=y[_];v[0]=_,v[1]=d[_]}y.sort(Vx);for(let _=0;_<8;_++)_<p&&y[_][1]?(o[_][0]=y[_][0],o[_][1]=y[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(Gx);let g=h.morphAttributes.position,m=h.morphAttributes.normal,f=0;for(let _=0;_<8;_++){let v=o[_],I=v[0],M=v[1];I!==Number.MAX_SAFE_INTEGER&&M?(g&&h.getAttribute("morphTarget"+_)!==g[I]&&h.setAttribute("morphTarget"+_,g[I]),m&&h.getAttribute("morphNormal"+_)!==m[I]&&h.setAttribute("morphNormal"+_,m[I]),s[_]=M,f+=M):(g&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),m&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),s[_]=0)}let x=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(i,"morphTargetBaseInfluence",x),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function $x(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Qa=class extends pn{constructor(e,t,n,s,r,a,o,l,c,h){if(h=h!==void 0?h:Oi,h!==Oi&&h!==Ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Oi&&(n=ci),n===void 0&&h===Ss&&(n=Ni),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Wt,this.minFilter=l!==void 0?l:Wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Gf=new pn,Vf=new Qa(1,1);Vf.compareFunction=Ff;var Wf=new Ya,$f=new uc,Xf=new Ja,Kd=[],Zd=[],Jd=new Float32Array(16),jd=new Float32Array(9),Qd=new Float32Array(4);function Ls(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Kd[s];if(r===void 0&&(r=new Float32Array(s),Kd[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function At(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Rt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function yo(i,e){let t=Zd[e];t===void 0&&(t=new Int32Array(e),Zd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Xx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Yx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2fv(this.addr,e),Rt(t,e)}}function qx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;i.uniform3fv(this.addr,e),Rt(t,e)}}function Kx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4fv(this.addr,e),Rt(t,e)}}function Zx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,n))return;Qd.set(n),i.uniformMatrix2fv(this.addr,!1,Qd),Rt(t,n)}}function Jx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,n))return;jd.set(n),i.uniformMatrix3fv(this.addr,!1,jd),Rt(t,n)}}function jx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,n))return;Jd.set(n),i.uniformMatrix4fv(this.addr,!1,Jd),Rt(t,n)}}function Qx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function e1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2iv(this.addr,e),Rt(t,e)}}function t1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;i.uniform3iv(this.addr,e),Rt(t,e)}}function n1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4iv(this.addr,e),Rt(t,e)}}function i1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function s1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2uiv(this.addr,e),Rt(t,e)}}function r1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;i.uniform3uiv(this.addr,e),Rt(t,e)}}function a1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4uiv(this.addr,e),Rt(t,e)}}function o1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Vf:Gf;t.setTexture2D(e||r,s)}function l1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||$f,s)}function c1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Xf,s)}function h1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Wf,s)}function u1(i){switch(i){case 5126:return Xx;case 35664:return Yx;case 35665:return qx;case 35666:return Kx;case 35674:return Zx;case 35675:return Jx;case 35676:return jx;case 5124:case 35670:return Qx;case 35667:case 35671:return e1;case 35668:case 35672:return t1;case 35669:case 35673:return n1;case 5125:return i1;case 36294:return s1;case 36295:return r1;case 36296:return a1;case 35678:case 36198:case 36298:case 36306:case 35682:return o1;case 35679:case 36299:case 36307:return l1;case 35680:case 36300:case 36308:case 36293:return c1;case 36289:case 36303:case 36311:case 36292:return h1}}function d1(i,e){i.uniform1fv(this.addr,e)}function f1(i,e){let t=Ls(e,this.size,2);i.uniform2fv(this.addr,t)}function p1(i,e){let t=Ls(e,this.size,3);i.uniform3fv(this.addr,t)}function m1(i,e){let t=Ls(e,this.size,4);i.uniform4fv(this.addr,t)}function g1(i,e){let t=Ls(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function y1(i,e){let t=Ls(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function _1(i,e){let t=Ls(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function x1(i,e){i.uniform1iv(this.addr,e)}function v1(i,e){i.uniform2iv(this.addr,e)}function M1(i,e){i.uniform3iv(this.addr,e)}function b1(i,e){i.uniform4iv(this.addr,e)}function S1(i,e){i.uniform1uiv(this.addr,e)}function w1(i,e){i.uniform2uiv(this.addr,e)}function E1(i,e){i.uniform3uiv(this.addr,e)}function T1(i,e){i.uniform4uiv(this.addr,e)}function A1(i,e,t){let n=this.cache,s=e.length,r=yo(t,s);At(n,r)||(i.uniform1iv(this.addr,r),Rt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Gf,r[a])}function R1(i,e,t){let n=this.cache,s=e.length,r=yo(t,s);At(n,r)||(i.uniform1iv(this.addr,r),Rt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||$f,r[a])}function C1(i,e,t){let n=this.cache,s=e.length,r=yo(t,s);At(n,r)||(i.uniform1iv(this.addr,r),Rt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Xf,r[a])}function P1(i,e,t){let n=this.cache,s=e.length,r=yo(t,s);At(n,r)||(i.uniform1iv(this.addr,r),Rt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Wf,r[a])}function I1(i){switch(i){case 5126:return d1;case 35664:return f1;case 35665:return p1;case 35666:return m1;case 35674:return g1;case 35675:return y1;case 35676:return _1;case 5124:case 35670:return x1;case 35667:case 35671:return v1;case 35668:case 35672:return M1;case 35669:case 35673:return b1;case 5125:return S1;case 36294:return w1;case 36295:return E1;case 36296:return T1;case 35678:case 36198:case 36298:case 36306:case 35682:return A1;case 35679:case 36299:case 36307:return R1;case 35680:case 36300:case 36308:case 36293:return C1;case 36289:case 36303:case 36311:case 36292:return P1}}var pc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=u1(t.type)}},mc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=I1(t.type)}},gc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Zl=/(\w+)(\])?(\[|\.)?/g;function ef(i,e){i.seq.push(e),i.map[e.id]=e}function L1(i,e,t){let n=i.name,s=n.length;for(Zl.lastIndex=0;;){let r=Zl.exec(n),a=Zl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){ef(t,c===void 0?new pc(o,i,e):new mc(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new gc(o),ef(t,u)),t=u}}}var vs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);L1(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function tf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var D1=37297,U1=0;function N1(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function O1(i){let e=nt.getPrimaries(nt.workingColorSpace),t=nt.getPrimaries(i),n;switch(e===t?n="":e===Ga&&t===za?n="LinearDisplayP3ToLinearSRGB":e===za&&t===Ga&&(n="LinearSRGBToLinearDisplayP3"),i){case Wn:case go:return[n,"LinearTransferOETF"];case Et:case Zc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function nf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+N1(i.getShaderSource(e),a)}else return s}function F1(i,e){let t=O1(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function B1(i,e){let t;switch(e){case ig:t="Linear";break;case sg:t="Reinhard";break;case rg:t="OptimizedCineon";break;case qc:t="ACESFilmic";break;case og:t="AgX";break;case ag:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function k1(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(gs).join(`
`)}function H1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(gs).join(`
`)}function z1(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function G1(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function gs(i){return i!==""}function sf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var V1=/^[ \t]*#include +<([\w\d./]+)>/gm;function yc(i){return i.replace(V1,$1)}var W1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function $1(i,e){let t=Ye[e];if(t===void 0){let n=W1.get(e);if(n!==void 0)t=Ye[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return yc(t)}var X1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function af(i){return i.replace(X1,Y1)}function Y1(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function of(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function q1(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===po?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Im?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Gn&&(e="SHADOWMAP_TYPE_VSM"),e}function K1(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ms:case bs:e="ENVMAP_TYPE_CUBE";break;case mo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Z1(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case bs:e="ENVMAP_MODE_REFRACTION";break}return e}function J1(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Tf:e="ENVMAP_BLENDING_MULTIPLY";break;case tg:e="ENVMAP_BLENDING_MIX";break;case ng:e="ENVMAP_BLENDING_ADD";break}return e}function j1(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Q1(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=q1(t),c=K1(t),h=Z1(t),u=J1(t),d=j1(t),p=t.isWebGL2?"":k1(t),y=H1(t),g=z1(r),m=s.createProgram(),f,x,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(gs).join(`
`),f.length>0&&(f+=`
`),x=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(gs).join(`
`),x.length>0&&(x+=`
`)):(f=[of(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gs).join(`
`),x=[p,of(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==di?"#define TONE_MAPPING":"",t.toneMapping!==di?Ye.tonemapping_pars_fragment:"",t.toneMapping!==di?B1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,F1("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gs).join(`
`)),a=yc(a),a=sf(a,t),a=rf(a,t),o=yc(o),o=sf(o,t),o=rf(o,t),a=af(a),o=af(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,f=[y,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ed?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ed?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let v=_+f+a,I=_+x+o,M=tf(s,s.VERTEX_SHADER,v),w=tf(s,s.FRAGMENT_SHADER,I);s.attachShader(m,M),s.attachShader(m,w),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function N(Y){if(i.debug.checkShaderErrors){let J=s.getProgramInfoLog(m).trim(),D=s.getShaderInfoLog(M).trim(),H=s.getShaderInfoLog(w).trim(),$=!0,C=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,M,w);else{let R=nf(s,M,"vertex"),P=nf(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+J+`
`+R+`
`+P)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(D===""||H==="")&&(C=!1);C&&(Y.diagnostics={runnable:$,programLog:J,vertexShader:{log:D,prefix:f},fragmentShader:{log:H,prefix:x}})}s.deleteShader(M),s.deleteShader(w),b=new vs(s,m),E=G1(s,m)}let b;this.getUniforms=function(){return b===void 0&&N(this),b};let E;this.getAttributes=function(){return E===void 0&&N(this),E};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(m,D1)),F},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=U1++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=w,this}var ev=0,_c=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new xc(e),t.set(e,n)),n}},xc=class{constructor(e){this.id=ev++,this.code=e,this.usedTimes=0}};function tv(i,e,t,n,s,r,a){let o=new pr,l=new _c,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return b===0?"uv":`uv${b}`}function m(b,E,F,Y,J){let D=Y.fog,H=J.geometry,$=b.isMeshStandardMaterial?Y.environment:null,C=(b.isMeshStandardMaterial?t:e).get(b.envMap||$),R=C&&C.mapping===mo?C.image.height:null,P=y[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));let B=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Z=B!==void 0?B.length:0,Q=0;H.morphAttributes.position!==void 0&&(Q=1),H.morphAttributes.normal!==void 0&&(Q=2),H.morphAttributes.color!==void 0&&(Q=3);let V,K,ae,de;if(P){let zt=Dn[P];V=zt.vertexShader,K=zt.fragmentShader}else V=b.vertexShader,K=b.fragmentShader,l.update(b),ae=l.getVertexShaderID(b),de=l.getFragmentShaderID(b);let he=i.getRenderTarget(),ye=J.isInstancedMesh===!0,xe=J.isBatchedMesh===!0,Ae=!!b.map,De=!!b.matcap,z=!!C,ut=!!b.aoMap,Re=!!b.lightMap,Ie=!!b.bumpMap,Me=!!b.normalMap,Ve=!!b.displacementMap,Le=!!b.emissiveMap,A=!!b.metalnessMap,S=!!b.roughnessMap,G=b.anisotropy>0,ee=b.clearcoat>0,te=b.iridescence>0,ne=b.sheen>0,Te=b.transmission>0,ve=G&&!!b.anisotropyMap,we=ee&&!!b.clearcoatMap,Ue=ee&&!!b.clearcoatNormalMap,$e=ee&&!!b.clearcoatRoughnessMap,O=te&&!!b.iridescenceMap,ie=te&&!!b.iridescenceThicknessMap,le=ne&&!!b.sheenColorMap,ue=ne&&!!b.sheenRoughnessMap,fe=!!b.specularMap,se=!!b.specularColorMap,Ee=!!b.specularIntensityMap,Fe=Te&&!!b.transmissionMap,Je=Te&&!!b.thicknessMap,Pe=!!b.gradientMap,oe=!!b.alphaMap,U=b.alphaTest>0,ce=!!b.alphaHash,pe=!!b.extensions,Be=!!H.attributes.uv1,Ne=!!H.attributes.uv2,rt=!!H.attributes.uv3,at=di;return b.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(at=i.toneMapping),{isWebGL2:h,shaderID:P,shaderType:b.type,shaderName:b.name,vertexShader:V,fragmentShader:K,defines:b.defines,customVertexShaderID:ae,customFragmentShaderID:de,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:xe,instancing:ye,instancingColor:ye&&J.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:he===null?i.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Wn,map:Ae,matcap:De,envMap:z,envMapMode:z&&C.mapping,envMapCubeUVHeight:R,aoMap:ut,lightMap:Re,bumpMap:Ie,normalMap:Me,displacementMap:d&&Ve,emissiveMap:Le,normalMapObjectSpace:Me&&b.normalMapType===xg,normalMapTangentSpace:Me&&b.normalMapType===Of,metalnessMap:A,roughnessMap:S,anisotropy:G,anisotropyMap:ve,clearcoat:ee,clearcoatMap:we,clearcoatNormalMap:Ue,clearcoatRoughnessMap:$e,iridescence:te,iridescenceMap:O,iridescenceThicknessMap:ie,sheen:ne,sheenColorMap:le,sheenRoughnessMap:ue,specularMap:fe,specularColorMap:se,specularIntensityMap:Ee,transmission:Te,transmissionMap:Fe,thicknessMap:Je,gradientMap:Pe,opaque:b.transparent===!1&&b.blending===_s,alphaMap:oe,alphaTest:U,alphaHash:ce,combine:b.combine,mapUv:Ae&&g(b.map.channel),aoMapUv:ut&&g(b.aoMap.channel),lightMapUv:Re&&g(b.lightMap.channel),bumpMapUv:Ie&&g(b.bumpMap.channel),normalMapUv:Me&&g(b.normalMap.channel),displacementMapUv:Ve&&g(b.displacementMap.channel),emissiveMapUv:Le&&g(b.emissiveMap.channel),metalnessMapUv:A&&g(b.metalnessMap.channel),roughnessMapUv:S&&g(b.roughnessMap.channel),anisotropyMapUv:ve&&g(b.anisotropyMap.channel),clearcoatMapUv:we&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$e&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:O&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:le&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:ue&&g(b.sheenRoughnessMap.channel),specularMapUv:fe&&g(b.specularMap.channel),specularColorMapUv:se&&g(b.specularColorMap.channel),specularIntensityMapUv:Ee&&g(b.specularIntensityMap.channel),transmissionMapUv:Fe&&g(b.transmissionMap.channel),thicknessMapUv:Je&&g(b.thicknessMap.channel),alphaMapUv:oe&&g(b.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Me||G),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:Be,vertexUv2s:Ne,vertexUv3s:rt,pointsUvs:J.isPoints===!0&&!!H.attributes.uv&&(Ae||oe),fog:!!D,useFog:b.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:J.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:Q,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:at,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ae&&b.map.isVideoTexture===!0&&nt.getTransfer(b.map.colorSpace)===ct,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Mt,flipSided:b.side===Jt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:pe&&b.extensions.derivatives===!0,extensionFragDepth:pe&&b.extensions.fragDepth===!0,extensionDrawBuffers:pe&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:pe&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:pe&&b.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function f(b){let E=[];if(b.shaderID?E.push(b.shaderID):(E.push(b.customVertexShaderID),E.push(b.customFragmentShaderID)),b.defines!==void 0)for(let F in b.defines)E.push(F),E.push(b.defines[F]);return b.isRawShaderMaterial===!1&&(x(E,b),_(E,b),E.push(i.outputColorSpace)),E.push(b.customProgramCacheKey),E.join()}function x(b,E){b.push(E.precision),b.push(E.outputColorSpace),b.push(E.envMapMode),b.push(E.envMapCubeUVHeight),b.push(E.mapUv),b.push(E.alphaMapUv),b.push(E.lightMapUv),b.push(E.aoMapUv),b.push(E.bumpMapUv),b.push(E.normalMapUv),b.push(E.displacementMapUv),b.push(E.emissiveMapUv),b.push(E.metalnessMapUv),b.push(E.roughnessMapUv),b.push(E.anisotropyMapUv),b.push(E.clearcoatMapUv),b.push(E.clearcoatNormalMapUv),b.push(E.clearcoatRoughnessMapUv),b.push(E.iridescenceMapUv),b.push(E.iridescenceThicknessMapUv),b.push(E.sheenColorMapUv),b.push(E.sheenRoughnessMapUv),b.push(E.specularMapUv),b.push(E.specularColorMapUv),b.push(E.specularIntensityMapUv),b.push(E.transmissionMapUv),b.push(E.thicknessMapUv),b.push(E.combine),b.push(E.fogExp2),b.push(E.sizeAttenuation),b.push(E.morphTargetsCount),b.push(E.morphAttributeCount),b.push(E.numDirLights),b.push(E.numPointLights),b.push(E.numSpotLights),b.push(E.numSpotLightMaps),b.push(E.numHemiLights),b.push(E.numRectAreaLights),b.push(E.numDirLightShadows),b.push(E.numPointLightShadows),b.push(E.numSpotLightShadows),b.push(E.numSpotLightShadowsWithMaps),b.push(E.numLightProbes),b.push(E.shadowMapType),b.push(E.toneMapping),b.push(E.numClippingPlanes),b.push(E.numClipIntersection),b.push(E.depthPacking)}function _(b,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),b.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),b.push(o.mask)}function v(b){let E=y[b.type],F;if(E){let Y=Dn[E];F=Wg.clone(Y.uniforms)}else F=b.uniforms;return F}function I(b,E){let F;for(let Y=0,J=c.length;Y<J;Y++){let D=c[Y];if(D.cacheKey===E){F=D,++F.usedTimes;break}}return F===void 0&&(F=new Q1(i,E,b,r),c.push(F)),F}function M(b){if(--b.usedTimes===0){let E=c.indexOf(b);c[E]=c[c.length-1],c.pop(),b.destroy()}}function w(b){l.remove(b)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:I,releaseProgram:M,releaseShaderCache:w,programs:c,dispose:N}}function nv(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function iv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function lf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function cf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,d,p,y,g,m){let f=i[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:y,renderOrder:u.renderOrder,z:g,group:m},i[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=y,f.renderOrder=u.renderOrder,f.z=g,f.group=m),e++,f}function o(u,d,p,y,g,m){let f=a(u,d,p,y,g,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(u,d,p,y,g,m){let f=a(u,d,p,y,g,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||iv),n.length>1&&n.sort(d||lf),s.length>1&&s.sort(d||lf)}function h(){for(let u=e,d=i.length;u<d;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function sv(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new cf,i.set(n,[a])):s>=r.length?(a=new cf,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function rv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new He};break;case"SpotLight":t={position:new L,direction:new L,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function av(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var ov=0;function lv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function cv(i,e){let t=new rv,n=av(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new L);let r=new L,a=new ht,o=new ht;function l(h,u){let d=0,p=0,y=0;for(let Y=0;Y<9;Y++)s.probe[Y].set(0,0,0);let g=0,m=0,f=0,x=0,_=0,v=0,I=0,M=0,w=0,N=0,b=0;h.sort(lv);let E=u===!0?Math.PI:1;for(let Y=0,J=h.length;Y<J;Y++){let D=h[Y],H=D.color,$=D.intensity,C=D.distance,R=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=H.r*$*E,p+=H.g*$*E,y+=H.b*$*E;else if(D.isLightProbe){for(let P=0;P<9;P++)s.probe[P].addScaledVector(D.sh.coefficients[P],$);b++}else if(D.isDirectionalLight){let P=t.get(D);if(P.color.copy(D.color).multiplyScalar(D.intensity*E),D.castShadow){let B=D.shadow,Z=n.get(D);Z.shadowBias=B.bias,Z.shadowNormalBias=B.normalBias,Z.shadowRadius=B.radius,Z.shadowMapSize=B.mapSize,s.directionalShadow[g]=Z,s.directionalShadowMap[g]=R,s.directionalShadowMatrix[g]=D.shadow.matrix,v++}s.directional[g]=P,g++}else if(D.isSpotLight){let P=t.get(D);P.position.setFromMatrixPosition(D.matrixWorld),P.color.copy(H).multiplyScalar($*E),P.distance=C,P.coneCos=Math.cos(D.angle),P.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),P.decay=D.decay,s.spot[f]=P;let B=D.shadow;if(D.map&&(s.spotLightMap[w]=D.map,w++,B.updateMatrices(D),D.castShadow&&N++),s.spotLightMatrix[f]=B.matrix,D.castShadow){let Z=n.get(D);Z.shadowBias=B.bias,Z.shadowNormalBias=B.normalBias,Z.shadowRadius=B.radius,Z.shadowMapSize=B.mapSize,s.spotShadow[f]=Z,s.spotShadowMap[f]=R,M++}f++}else if(D.isRectAreaLight){let P=t.get(D);P.color.copy(H).multiplyScalar($),P.halfWidth.set(D.width*.5,0,0),P.halfHeight.set(0,D.height*.5,0),s.rectArea[x]=P,x++}else if(D.isPointLight){let P=t.get(D);if(P.color.copy(D.color).multiplyScalar(D.intensity*E),P.distance=D.distance,P.decay=D.decay,D.castShadow){let B=D.shadow,Z=n.get(D);Z.shadowBias=B.bias,Z.shadowNormalBias=B.normalBias,Z.shadowRadius=B.radius,Z.shadowMapSize=B.mapSize,Z.shadowCameraNear=B.camera.near,Z.shadowCameraFar=B.camera.far,s.pointShadow[m]=Z,s.pointShadowMap[m]=R,s.pointShadowMatrix[m]=D.shadow.matrix,I++}s.point[m]=P,m++}else if(D.isHemisphereLight){let P=t.get(D);P.skyColor.copy(D.color).multiplyScalar($*E),P.groundColor.copy(D.groundColor).multiplyScalar($*E),s.hemi[_]=P,_++}}x>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=me.LTC_FLOAT_1,s.rectAreaLTC2=me.LTC_FLOAT_2):(s.rectAreaLTC1=me.LTC_HALF_1,s.rectAreaLTC2=me.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=me.LTC_FLOAT_1,s.rectAreaLTC2=me.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=me.LTC_HALF_1,s.rectAreaLTC2=me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=p,s.ambient[2]=y;let F=s.hash;(F.directionalLength!==g||F.pointLength!==m||F.spotLength!==f||F.rectAreaLength!==x||F.hemiLength!==_||F.numDirectionalShadows!==v||F.numPointShadows!==I||F.numSpotShadows!==M||F.numSpotMaps!==w||F.numLightProbes!==b)&&(s.directional.length=g,s.spot.length=f,s.rectArea.length=x,s.point.length=m,s.hemi.length=_,s.directionalShadow.length=v,s.directionalShadowMap.length=v,s.pointShadow.length=I,s.pointShadowMap.length=I,s.spotShadow.length=M,s.spotShadowMap.length=M,s.directionalShadowMatrix.length=v,s.pointShadowMatrix.length=I,s.spotLightMatrix.length=M+w-N,s.spotLightMap.length=w,s.numSpotLightShadowsWithMaps=N,s.numLightProbes=b,F.directionalLength=g,F.pointLength=m,F.spotLength=f,F.rectAreaLength=x,F.hemiLength=_,F.numDirectionalShadows=v,F.numPointShadows=I,F.numSpotShadows=M,F.numSpotMaps=w,F.numLightProbes=b,s.version=ov++)}function c(h,u){let d=0,p=0,y=0,g=0,m=0,f=u.matrixWorldInverse;for(let x=0,_=h.length;x<_;x++){let v=h[x];if(v.isDirectionalLight){let I=s.directional[d];I.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(f),d++}else if(v.isSpotLight){let I=s.spot[y];I.position.setFromMatrixPosition(v.matrixWorld),I.position.applyMatrix4(f),I.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(f),y++}else if(v.isRectAreaLight){let I=s.rectArea[g];I.position.setFromMatrixPosition(v.matrixWorld),I.position.applyMatrix4(f),o.identity(),a.copy(v.matrixWorld),a.premultiply(f),o.extractRotation(a),I.halfWidth.set(v.width*.5,0,0),I.halfHeight.set(0,v.height*.5,0),I.halfWidth.applyMatrix4(o),I.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){let I=s.point[p];I.position.setFromMatrixPosition(v.matrixWorld),I.position.applyMatrix4(f),p++}else if(v.isHemisphereLight){let I=s.hemi[m];I.direction.setFromMatrixPosition(v.matrixWorld),I.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:s}}function hf(i,e){let t=new cv(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(u){n.push(u)}function o(u){s.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function hv(i,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),l;return o===void 0?(l=new hf(i,e),t.set(r,[l])):a>=o.length?(l=new hf(i,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:n,dispose:s}}var vc=class extends yi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Mc=class extends yi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},uv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dv=`uniform sampler2D shadow_pass;
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
}`;function fv(i,e,t){let n=new mr,s=new ge,r=new ge,a=new Lt,o=new vc({depthPacking:_g}),l=new Mc,c={},h=t.maxTextureSize,u={[pi]:Jt,[Jt]:pi,[Mt]:Mt},d=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:uv,fragmentShader:dv}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let y=new Tt;y.setAttribute("position",new Dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new be(y,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=po;let f=this.type;this.render=function(M,w,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;let b=i.getRenderTarget(),E=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(ui),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);let J=f!==Gn&&this.type===Gn,D=f===Gn&&this.type!==Gn;for(let H=0,$=M.length;H<$;H++){let C=M[H],R=C.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",C,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;s.copy(R.mapSize);let P=R.getFrameExtents();if(s.multiply(P),r.copy(R.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/P.x),s.x=r.x*P.x,R.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/P.y),s.y=r.y*P.y,R.mapSize.y=r.y)),R.map===null||J===!0||D===!0){let Z=this.type!==Gn?{minFilter:Wt,magFilter:Wt}:{};R.map!==null&&R.map.dispose(),R.map=new $n(s.x,s.y,Z),R.map.texture.name=C.name+".shadowMap",R.camera.updateProjectionMatrix()}i.setRenderTarget(R.map),i.clear();let B=R.getViewportCount();for(let Z=0;Z<B;Z++){let Q=R.getViewport(Z);a.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),Y.viewport(a),R.updateMatrices(C,Z),n=R.getFrustum(),v(w,N,R.camera,C,this.type)}R.isPointLightShadow!==!0&&this.type===Gn&&x(R,N),R.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(b,E,F)};function x(M,w){let N=e.update(g);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new $n(s.x,s.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(w,null,N,d,g,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(w,null,N,p,g,null)}function _(M,w,N,b){let E=null,F=N.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(F!==void 0)E=F;else if(E=N.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let Y=E.uuid,J=w.uuid,D=c[Y];D===void 0&&(D={},c[Y]=D);let H=D[J];H===void 0&&(H=E.clone(),D[J]=H,w.addEventListener("dispose",I)),E=H}if(E.visible=w.visible,E.wireframe=w.wireframe,b===Gn?E.side=w.shadowSide!==null?w.shadowSide:w.side:E.side=w.shadowSide!==null?w.shadowSide:u[w.side],E.alphaMap=w.alphaMap,E.alphaTest=w.alphaTest,E.map=w.map,E.clipShadows=w.clipShadows,E.clippingPlanes=w.clippingPlanes,E.clipIntersection=w.clipIntersection,E.displacementMap=w.displacementMap,E.displacementScale=w.displacementScale,E.displacementBias=w.displacementBias,E.wireframeLinewidth=w.wireframeLinewidth,E.linewidth=w.linewidth,N.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let Y=i.properties.get(E);Y.light=N}return E}function v(M,w,N,b,E){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&E===Gn)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,M.matrixWorld);let J=e.update(M),D=M.material;if(Array.isArray(D)){let H=J.groups;for(let $=0,C=H.length;$<C;$++){let R=H[$],P=D[R.materialIndex];if(P&&P.visible){let B=_(M,P,b,E);M.onBeforeShadow(i,M,w,N,J,B,R),i.renderBufferDirect(N,null,J,B,M,R),M.onAfterShadow(i,M,w,N,J,B,R)}}}else if(D.visible){let H=_(M,D,b,E);M.onBeforeShadow(i,M,w,N,J,H,null),i.renderBufferDirect(N,null,J,H,M,null),M.onAfterShadow(i,M,w,N,J,H,null)}}let Y=M.children;for(let J=0,D=Y.length;J<D;J++)v(Y[J],w,N,b,E)}function I(M){M.target.removeEventListener("dispose",I);for(let N in c){let b=c[N],E=M.target.uuid;E in b&&(b[E].dispose(),delete b[E])}}}function pv(i,e,t){let n=t.isWebGL2;function s(){let U=!1,ce=new Lt,pe=null,Be=new Lt(0,0,0,0);return{setMask:function(Ne){pe!==Ne&&!U&&(i.colorMask(Ne,Ne,Ne,Ne),pe=Ne)},setLocked:function(Ne){U=Ne},setClear:function(Ne,rt,at,Ct,zt){zt===!0&&(Ne*=Ct,rt*=Ct,at*=Ct),ce.set(Ne,rt,at,Ct),Be.equals(ce)===!1&&(i.clearColor(Ne,rt,at,Ct),Be.copy(ce))},reset:function(){U=!1,pe=null,Be.set(-1,0,0,0)}}}function r(){let U=!1,ce=null,pe=null,Be=null;return{setTest:function(Ne){Ne?xe(i.DEPTH_TEST):Ae(i.DEPTH_TEST)},setMask:function(Ne){ce!==Ne&&!U&&(i.depthMask(Ne),ce=Ne)},setFunc:function(Ne){if(pe!==Ne){switch(Ne){case qm:i.depthFunc(i.NEVER);break;case Km:i.depthFunc(i.ALWAYS);break;case Zm:i.depthFunc(i.LESS);break;case Fa:i.depthFunc(i.LEQUAL);break;case Jm:i.depthFunc(i.EQUAL);break;case jm:i.depthFunc(i.GEQUAL);break;case Qm:i.depthFunc(i.GREATER);break;case eg:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=Ne}},setLocked:function(Ne){U=Ne},setClear:function(Ne){Be!==Ne&&(i.clearDepth(Ne),Be=Ne)},reset:function(){U=!1,ce=null,pe=null,Be=null}}}function a(){let U=!1,ce=null,pe=null,Be=null,Ne=null,rt=null,at=null,Ct=null,zt=null;return{setTest:function(ot){U||(ot?xe(i.STENCIL_TEST):Ae(i.STENCIL_TEST))},setMask:function(ot){ce!==ot&&!U&&(i.stencilMask(ot),ce=ot)},setFunc:function(ot,Gt,In){(pe!==ot||Be!==Gt||Ne!==In)&&(i.stencilFunc(ot,Gt,In),pe=ot,Be=Gt,Ne=In)},setOp:function(ot,Gt,In){(rt!==ot||at!==Gt||Ct!==In)&&(i.stencilOp(ot,Gt,In),rt=ot,at=Gt,Ct=In)},setLocked:function(ot){U=ot},setClear:function(ot){zt!==ot&&(i.clearStencil(ot),zt=ot)},reset:function(){U=!1,ce=null,pe=null,Be=null,Ne=null,rt=null,at=null,Ct=null,zt=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,u=new WeakMap,d={},p={},y=new WeakMap,g=[],m=null,f=!1,x=null,_=null,v=null,I=null,M=null,w=null,N=null,b=new He(0,0,0),E=0,F=!1,Y=null,J=null,D=null,H=null,$=null,C=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),R=!1,P=0,B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(P=parseFloat(/^WebGL (\d)/.exec(B)[1]),R=P>=1):B.indexOf("OpenGL ES")!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),R=P>=2);let Z=null,Q={},V=i.getParameter(i.SCISSOR_BOX),K=i.getParameter(i.VIEWPORT),ae=new Lt().fromArray(V),de=new Lt().fromArray(K);function he(U,ce,pe,Be){let Ne=new Uint8Array(4),rt=i.createTexture();i.bindTexture(U,rt),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let at=0;at<pe;at++)n&&(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)?i.texImage3D(ce,0,i.RGBA,1,1,Be,0,i.RGBA,i.UNSIGNED_BYTE,Ne):i.texImage2D(ce+at,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ne);return rt}let ye={};ye[i.TEXTURE_2D]=he(i.TEXTURE_2D,i.TEXTURE_2D,1),ye[i.TEXTURE_CUBE_MAP]=he(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ye[i.TEXTURE_2D_ARRAY]=he(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ye[i.TEXTURE_3D]=he(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),xe(i.DEPTH_TEST),l.setFunc(Fa),Le(!1),A(Gu),xe(i.CULL_FACE),Me(ui);function xe(U){d[U]!==!0&&(i.enable(U),d[U]=!0)}function Ae(U){d[U]!==!1&&(i.disable(U),d[U]=!1)}function De(U,ce){return p[U]!==ce?(i.bindFramebuffer(U,ce),p[U]=ce,n&&(U===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=ce),U===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=ce)),!0):!1}function z(U,ce){let pe=g,Be=!1;if(U)if(pe=y.get(ce),pe===void 0&&(pe=[],y.set(ce,pe)),U.isWebGLMultipleRenderTargets){let Ne=U.texture;if(pe.length!==Ne.length||pe[0]!==i.COLOR_ATTACHMENT0){for(let rt=0,at=Ne.length;rt<at;rt++)pe[rt]=i.COLOR_ATTACHMENT0+rt;pe.length=Ne.length,Be=!0}}else pe[0]!==i.COLOR_ATTACHMENT0&&(pe[0]=i.COLOR_ATTACHMENT0,Be=!0);else pe[0]!==i.BACK&&(pe[0]=i.BACK,Be=!0);Be&&(t.isWebGL2?i.drawBuffers(pe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(pe))}function ut(U){return m!==U?(i.useProgram(U),m=U,!0):!1}let Re={[Di]:i.FUNC_ADD,[Dm]:i.FUNC_SUBTRACT,[Um]:i.FUNC_REVERSE_SUBTRACT};if(n)Re[Xu]=i.MIN,Re[Yu]=i.MAX;else{let U=e.get("EXT_blend_minmax");U!==null&&(Re[Xu]=U.MIN_EXT,Re[Yu]=U.MAX_EXT)}let Ie={[Nm]:i.ZERO,[Om]:i.ONE,[Fm]:i.SRC_COLOR,[nc]:i.SRC_ALPHA,[Vm]:i.SRC_ALPHA_SATURATE,[zm]:i.DST_COLOR,[km]:i.DST_ALPHA,[Bm]:i.ONE_MINUS_SRC_COLOR,[ic]:i.ONE_MINUS_SRC_ALPHA,[Gm]:i.ONE_MINUS_DST_COLOR,[Hm]:i.ONE_MINUS_DST_ALPHA,[Wm]:i.CONSTANT_COLOR,[$m]:i.ONE_MINUS_CONSTANT_COLOR,[Xm]:i.CONSTANT_ALPHA,[Ym]:i.ONE_MINUS_CONSTANT_ALPHA};function Me(U,ce,pe,Be,Ne,rt,at,Ct,zt,ot){if(U===ui){f===!0&&(Ae(i.BLEND),f=!1);return}if(f===!1&&(xe(i.BLEND),f=!0),U!==Lm){if(U!==x||ot!==F){if((_!==Di||M!==Di)&&(i.blendEquation(i.FUNC_ADD),_=Di,M=Di),ot)switch(U){case _s:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vu:i.blendFunc(i.ONE,i.ONE);break;case Wu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $u:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case _s:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vu:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Wu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $u:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}v=null,I=null,w=null,N=null,b.set(0,0,0),E=0,x=U,F=ot}return}Ne=Ne||ce,rt=rt||pe,at=at||Be,(ce!==_||Ne!==M)&&(i.blendEquationSeparate(Re[ce],Re[Ne]),_=ce,M=Ne),(pe!==v||Be!==I||rt!==w||at!==N)&&(i.blendFuncSeparate(Ie[pe],Ie[Be],Ie[rt],Ie[at]),v=pe,I=Be,w=rt,N=at),(Ct.equals(b)===!1||zt!==E)&&(i.blendColor(Ct.r,Ct.g,Ct.b,zt),b.copy(Ct),E=zt),x=U,F=!1}function Ve(U,ce){U.side===Mt?Ae(i.CULL_FACE):xe(i.CULL_FACE);let pe=U.side===Jt;ce&&(pe=!pe),Le(pe),U.blending===_s&&U.transparent===!1?Me(ui):Me(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),o.setMask(U.colorWrite);let Be=U.stencilWrite;c.setTest(Be),Be&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),G(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?xe(i.SAMPLE_ALPHA_TO_COVERAGE):Ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function Le(U){Y!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),Y=U)}function A(U){U!==Cm?(xe(i.CULL_FACE),U!==J&&(U===Gu?i.cullFace(i.BACK):U===Pm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ae(i.CULL_FACE),J=U}function S(U){U!==D&&(R&&i.lineWidth(U),D=U)}function G(U,ce,pe){U?(xe(i.POLYGON_OFFSET_FILL),(H!==ce||$!==pe)&&(i.polygonOffset(ce,pe),H=ce,$=pe)):Ae(i.POLYGON_OFFSET_FILL)}function ee(U){U?xe(i.SCISSOR_TEST):Ae(i.SCISSOR_TEST)}function te(U){U===void 0&&(U=i.TEXTURE0+C-1),Z!==U&&(i.activeTexture(U),Z=U)}function ne(U,ce,pe){pe===void 0&&(Z===null?pe=i.TEXTURE0+C-1:pe=Z);let Be=Q[pe];Be===void 0&&(Be={type:void 0,texture:void 0},Q[pe]=Be),(Be.type!==U||Be.texture!==ce)&&(Z!==pe&&(i.activeTexture(pe),Z=pe),i.bindTexture(U,ce||ye[U]),Be.type=U,Be.texture=ce)}function Te(){let U=Q[Z];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ve(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function we(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ue(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $e(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function O(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ue(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(U){ae.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),ae.copy(U))}function Fe(U){de.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),de.copy(U))}function Je(U,ce){let pe=u.get(ce);pe===void 0&&(pe=new WeakMap,u.set(ce,pe));let Be=pe.get(U);Be===void 0&&(Be=i.getUniformBlockIndex(ce,U.name),pe.set(U,Be))}function Pe(U,ce){let Be=u.get(ce).get(U);h.get(ce)!==Be&&(i.uniformBlockBinding(ce,Be,U.__bindingPointIndex),h.set(ce,Be))}function oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},Z=null,Q={},p={},y=new WeakMap,g=[],m=null,f=!1,x=null,_=null,v=null,I=null,M=null,w=null,N=null,b=new He(0,0,0),E=0,F=!1,Y=null,J=null,D=null,H=null,$=null,ae.set(0,0,i.canvas.width,i.canvas.height),de.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:xe,disable:Ae,bindFramebuffer:De,drawBuffers:z,useProgram:ut,setBlending:Me,setMaterial:Ve,setFlipSided:Le,setCullFace:A,setLineWidth:S,setPolygonOffset:G,setScissorTest:ee,activeTexture:te,bindTexture:ne,unbindTexture:Te,compressedTexImage2D:ve,compressedTexImage3D:we,texImage2D:fe,texImage3D:se,updateUBOMapping:Je,uniformBlockBinding:Pe,texStorage2D:le,texStorage3D:ue,texSubImage2D:Ue,texSubImage3D:$e,compressedTexSubImage2D:O,compressedTexSubImage3D:ie,scissor:Ee,viewport:Fe,reset:oe}}function mv(i,e,t,n,s,r,a){let o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,S){return p?new OffscreenCanvas(A,S):Wa("canvas")}function g(A,S,G,ee){let te=1;if((A.width>ee||A.height>ee)&&(te=ee/Math.max(A.width,A.height)),te<1||S===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){let ne=S?cc:Math.floor,Te=ne(te*A.width),ve=ne(te*A.height);u===void 0&&(u=y(Te,ve));let we=G?y(Te,ve):u;return we.width=Te,we.height=ve,we.getContext("2d").drawImage(A,0,0,Te,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Te+"x"+ve+")."),we}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return Td(A.width)&&Td(A.height)}function f(A){return o?!1:A.wrapS!==Tn||A.wrapT!==Tn||A.minFilter!==Wt&&A.minFilter!==$t}function x(A,S){return A.generateMipmaps&&S&&A.minFilter!==Wt&&A.minFilter!==$t}function _(A){i.generateMipmap(A)}function v(A,S,G,ee,te=!1){if(o===!1)return S;if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ne=S;if(S===i.RED&&(G===i.FLOAT&&(ne=i.R32F),G===i.HALF_FLOAT&&(ne=i.R16F),G===i.UNSIGNED_BYTE&&(ne=i.R8)),S===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(ne=i.R8UI),G===i.UNSIGNED_SHORT&&(ne=i.R16UI),G===i.UNSIGNED_INT&&(ne=i.R32UI),G===i.BYTE&&(ne=i.R8I),G===i.SHORT&&(ne=i.R16I),G===i.INT&&(ne=i.R32I)),S===i.RG&&(G===i.FLOAT&&(ne=i.RG32F),G===i.HALF_FLOAT&&(ne=i.RG16F),G===i.UNSIGNED_BYTE&&(ne=i.RG8)),S===i.RGBA){let Te=te?Ha:nt.getTransfer(ee);G===i.FLOAT&&(ne=i.RGBA32F),G===i.HALF_FLOAT&&(ne=i.RGBA16F),G===i.UNSIGNED_BYTE&&(ne=Te===ct?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function I(A,S,G){return x(A,G)===!0||A.isFramebufferTexture&&A.minFilter!==Wt&&A.minFilter!==$t?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function M(A){return A===Wt||A===qu||A===vl?i.NEAREST:i.LINEAR}function w(A){let S=A.target;S.removeEventListener("dispose",w),b(S),S.isVideoTexture&&h.delete(S)}function N(A){let S=A.target;S.removeEventListener("dispose",N),F(S)}function b(A){let S=n.get(A);if(S.__webglInit===void 0)return;let G=A.source,ee=d.get(G);if(ee){let te=ee[S.__cacheKey];te.usedTimes--,te.usedTimes===0&&E(A),Object.keys(ee).length===0&&d.delete(G)}n.remove(A)}function E(A){let S=n.get(A);i.deleteTexture(S.__webglTexture);let G=A.source,ee=d.get(G);delete ee[S.__cacheKey],a.memory.textures--}function F(A){let S=A.texture,G=n.get(A),ee=n.get(S);if(ee.__webglTexture!==void 0&&(i.deleteTexture(ee.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(G.__webglFramebuffer[te]))for(let ne=0;ne<G.__webglFramebuffer[te].length;ne++)i.deleteFramebuffer(G.__webglFramebuffer[te][ne]);else i.deleteFramebuffer(G.__webglFramebuffer[te]);G.__webglDepthbuffer&&i.deleteRenderbuffer(G.__webglDepthbuffer[te])}else{if(Array.isArray(G.__webglFramebuffer))for(let te=0;te<G.__webglFramebuffer.length;te++)i.deleteFramebuffer(G.__webglFramebuffer[te]);else i.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&i.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&i.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let te=0;te<G.__webglColorRenderbuffer.length;te++)G.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(G.__webglColorRenderbuffer[te]);G.__webglDepthRenderbuffer&&i.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let te=0,ne=S.length;te<ne;te++){let Te=n.get(S[te]);Te.__webglTexture&&(i.deleteTexture(Te.__webglTexture),a.memory.textures--),n.remove(S[te])}n.remove(S),n.remove(A)}let Y=0;function J(){Y=0}function D(){let A=Y;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),Y+=1,A}function H(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function $(A,S){let G=n.get(A);if(A.isVideoTexture&&Ve(A),A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){let ee=A.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(G,A,S);return}}t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+S)}function C(A,S){let G=n.get(A);if(A.version>0&&G.__version!==A.version){ae(G,A,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+S)}function R(A,S){let G=n.get(A);if(A.version>0&&G.__version!==A.version){ae(G,A,S);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+S)}function P(A,S){let G=n.get(A);if(A.version>0&&G.__version!==A.version){de(G,A,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+S)}let B={[hr]:i.REPEAT,[Tn]:i.CLAMP_TO_EDGE,[ac]:i.MIRRORED_REPEAT},Z={[Wt]:i.NEAREST,[qu]:i.NEAREST_MIPMAP_NEAREST,[vl]:i.NEAREST_MIPMAP_LINEAR,[$t]:i.LINEAR,[lg]:i.LINEAR_MIPMAP_NEAREST,[ur]:i.LINEAR_MIPMAP_LINEAR},Q={[vg]:i.NEVER,[Tg]:i.ALWAYS,[Mg]:i.LESS,[Ff]:i.LEQUAL,[bg]:i.EQUAL,[Eg]:i.GEQUAL,[Sg]:i.GREATER,[wg]:i.NOTEQUAL};function V(A,S,G){if(G?(i.texParameteri(A,i.TEXTURE_WRAP_S,B[S.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,B[S.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,B[S.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Z[S.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Z[S.minFilter])):(i.texParameteri(A,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(A,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(S.wrapS!==Tn||S.wrapT!==Tn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(A,i.TEXTURE_MAG_FILTER,M(S.magFilter)),i.texParameteri(A,i.TEXTURE_MIN_FILTER,M(S.minFilter)),S.minFilter!==Wt&&S.minFilter!==$t&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Q[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ee=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Wt||S.minFilter!==vl&&S.minFilter!==ur||S.type===hi&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===dr&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(i.texParameterf(A,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function K(A,S){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",w));let ee=S.source,te=d.get(ee);te===void 0&&(te={},d.set(ee,te));let ne=H(S);if(ne!==A.__cacheKey){te[ne]===void 0&&(te[ne]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),te[ne].usedTimes++;let Te=te[A.__cacheKey];Te!==void 0&&(te[A.__cacheKey].usedTimes--,Te.usedTimes===0&&E(S)),A.__cacheKey=ne,A.__webglTexture=te[ne].texture}return G}function ae(A,S,G){let ee=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ee=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ee=i.TEXTURE_3D);let te=K(A,S),ne=S.source;t.bindTexture(ee,A.__webglTexture,i.TEXTURE0+G);let Te=n.get(ne);if(ne.version!==Te.__version||te===!0){t.activeTexture(i.TEXTURE0+G);let ve=nt.getPrimaries(nt.workingColorSpace),we=S.colorSpace===fn?null:nt.getPrimaries(S.colorSpace),Ue=S.colorSpace===fn||ve===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let $e=f(S)&&m(S.image)===!1,O=g(S.image,$e,!1,s.maxTextureSize);O=Le(S,O);let ie=m(O)||o,le=r.convert(S.format,S.colorSpace),ue=r.convert(S.type),fe=v(S.internalFormat,le,ue,S.colorSpace,S.isVideoTexture);V(ee,S,ie);let se,Ee=S.mipmaps,Fe=o&&S.isVideoTexture!==!0&&fe!==Uf,Je=Te.__version===void 0||te===!0,Pe=I(S,O,ie);if(S.isDepthTexture)fe=i.DEPTH_COMPONENT,o?S.type===hi?fe=i.DEPTH_COMPONENT32F:S.type===ci?fe=i.DEPTH_COMPONENT24:S.type===Ni?fe=i.DEPTH24_STENCIL8:fe=i.DEPTH_COMPONENT16:S.type===hi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Oi&&fe===i.DEPTH_COMPONENT&&S.type!==Kc&&S.type!==ci&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=ci,ue=r.convert(S.type)),S.format===Ss&&fe===i.DEPTH_COMPONENT&&(fe=i.DEPTH_STENCIL,S.type!==Ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Ni,ue=r.convert(S.type))),Je&&(Fe?t.texStorage2D(i.TEXTURE_2D,1,fe,O.width,O.height):t.texImage2D(i.TEXTURE_2D,0,fe,O.width,O.height,0,le,ue,null));else if(S.isDataTexture)if(Ee.length>0&&ie){Fe&&Je&&t.texStorage2D(i.TEXTURE_2D,Pe,fe,Ee[0].width,Ee[0].height);for(let oe=0,U=Ee.length;oe<U;oe++)se=Ee[oe],Fe?t.texSubImage2D(i.TEXTURE_2D,oe,0,0,se.width,se.height,le,ue,se.data):t.texImage2D(i.TEXTURE_2D,oe,fe,se.width,se.height,0,le,ue,se.data);S.generateMipmaps=!1}else Fe?(Je&&t.texStorage2D(i.TEXTURE_2D,Pe,fe,O.width,O.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,O.width,O.height,le,ue,O.data)):t.texImage2D(i.TEXTURE_2D,0,fe,O.width,O.height,0,le,ue,O.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Fe&&Je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,fe,Ee[0].width,Ee[0].height,O.depth);for(let oe=0,U=Ee.length;oe<U;oe++)se=Ee[oe],S.format!==An?le!==null?Fe?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,se.width,se.height,O.depth,le,se.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,oe,fe,se.width,se.height,O.depth,0,se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?t.texSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,se.width,se.height,O.depth,le,ue,se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,oe,fe,se.width,se.height,O.depth,0,le,ue,se.data)}else{Fe&&Je&&t.texStorage2D(i.TEXTURE_2D,Pe,fe,Ee[0].width,Ee[0].height);for(let oe=0,U=Ee.length;oe<U;oe++)se=Ee[oe],S.format!==An?le!==null?Fe?t.compressedTexSubImage2D(i.TEXTURE_2D,oe,0,0,se.width,se.height,le,se.data):t.compressedTexImage2D(i.TEXTURE_2D,oe,fe,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?t.texSubImage2D(i.TEXTURE_2D,oe,0,0,se.width,se.height,le,ue,se.data):t.texImage2D(i.TEXTURE_2D,oe,fe,se.width,se.height,0,le,ue,se.data)}else if(S.isDataArrayTexture)Fe?(Je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,fe,O.width,O.height,O.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,O.width,O.height,O.depth,le,ue,O.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,fe,O.width,O.height,O.depth,0,le,ue,O.data);else if(S.isData3DTexture)Fe?(Je&&t.texStorage3D(i.TEXTURE_3D,Pe,fe,O.width,O.height,O.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,O.width,O.height,O.depth,le,ue,O.data)):t.texImage3D(i.TEXTURE_3D,0,fe,O.width,O.height,O.depth,0,le,ue,O.data);else if(S.isFramebufferTexture){if(Je)if(Fe)t.texStorage2D(i.TEXTURE_2D,Pe,fe,O.width,O.height);else{let oe=O.width,U=O.height;for(let ce=0;ce<Pe;ce++)t.texImage2D(i.TEXTURE_2D,ce,fe,oe,U,0,le,ue,null),oe>>=1,U>>=1}}else if(Ee.length>0&&ie){Fe&&Je&&t.texStorage2D(i.TEXTURE_2D,Pe,fe,Ee[0].width,Ee[0].height);for(let oe=0,U=Ee.length;oe<U;oe++)se=Ee[oe],Fe?t.texSubImage2D(i.TEXTURE_2D,oe,0,0,le,ue,se):t.texImage2D(i.TEXTURE_2D,oe,fe,le,ue,se);S.generateMipmaps=!1}else Fe?(Je&&t.texStorage2D(i.TEXTURE_2D,Pe,fe,O.width,O.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,le,ue,O)):t.texImage2D(i.TEXTURE_2D,0,fe,le,ue,O);x(S,ie)&&_(ee),Te.__version=ne.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function de(A,S,G){if(S.image.length!==6)return;let ee=K(A,S),te=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+G);let ne=n.get(te);if(te.version!==ne.__version||ee===!0){t.activeTexture(i.TEXTURE0+G);let Te=nt.getPrimaries(nt.workingColorSpace),ve=S.colorSpace===fn?null:nt.getPrimaries(S.colorSpace),we=S.colorSpace===fn||Te===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let Ue=S.isCompressedTexture||S.image[0].isCompressedTexture,$e=S.image[0]&&S.image[0].isDataTexture,O=[];for(let oe=0;oe<6;oe++)!Ue&&!$e?O[oe]=g(S.image[oe],!1,!0,s.maxCubemapSize):O[oe]=$e?S.image[oe].image:S.image[oe],O[oe]=Le(S,O[oe]);let ie=O[0],le=m(ie)||o,ue=r.convert(S.format,S.colorSpace),fe=r.convert(S.type),se=v(S.internalFormat,ue,fe,S.colorSpace),Ee=o&&S.isVideoTexture!==!0,Fe=ne.__version===void 0||ee===!0,Je=I(S,ie,le);V(i.TEXTURE_CUBE_MAP,S,le);let Pe;if(Ue){Ee&&Fe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Je,se,ie.width,ie.height);for(let oe=0;oe<6;oe++){Pe=O[oe].mipmaps;for(let U=0;U<Pe.length;U++){let ce=Pe[U];S.format!==An?ue!==null?Ee?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,U,0,0,ce.width,ce.height,ue,ce.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,U,se,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ee?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,U,0,0,ce.width,ce.height,ue,fe,ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,U,se,ce.width,ce.height,0,ue,fe,ce.data)}}}else{Pe=S.mipmaps,Ee&&Fe&&(Pe.length>0&&Je++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Je,se,O[0].width,O[0].height));for(let oe=0;oe<6;oe++)if($e){Ee?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,O[oe].width,O[oe].height,ue,fe,O[oe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,se,O[oe].width,O[oe].height,0,ue,fe,O[oe].data);for(let U=0;U<Pe.length;U++){let pe=Pe[U].image[oe].image;Ee?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,U+1,0,0,pe.width,pe.height,ue,fe,pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,U+1,se,pe.width,pe.height,0,ue,fe,pe.data)}}else{Ee?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,ue,fe,O[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,se,ue,fe,O[oe]);for(let U=0;U<Pe.length;U++){let ce=Pe[U];Ee?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,U+1,0,0,ue,fe,ce.image[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,U+1,se,ue,fe,ce.image[oe])}}}x(S,le)&&_(i.TEXTURE_CUBE_MAP),ne.__version=te.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function he(A,S,G,ee,te,ne){let Te=r.convert(G.format,G.colorSpace),ve=r.convert(G.type),we=v(G.internalFormat,Te,ve,G.colorSpace);if(!n.get(S).__hasExternalTextures){let $e=Math.max(1,S.width>>ne),O=Math.max(1,S.height>>ne);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,ne,we,$e,O,S.depth,0,Te,ve,null):t.texImage2D(te,ne,we,$e,O,0,Te,ve,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),Me(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,te,n.get(G).__webglTexture,0,Ie(S)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ee,te,n.get(G).__webglTexture,ne),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ye(A,S,G){if(i.bindRenderbuffer(i.RENDERBUFFER,A),S.depthBuffer&&!S.stencilBuffer){let ee=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(G||Me(S)){let te=S.depthTexture;te&&te.isDepthTexture&&(te.type===hi?ee=i.DEPTH_COMPONENT32F:te.type===ci&&(ee=i.DEPTH_COMPONENT24));let ne=Ie(S);Me(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,ee,S.width,S.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,ee,S.width,S.height)}else i.renderbufferStorage(i.RENDERBUFFER,ee,S.width,S.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,A)}else if(S.depthBuffer&&S.stencilBuffer){let ee=Ie(S);G&&Me(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,i.DEPTH24_STENCIL8,S.width,S.height):Me(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee,i.DEPTH24_STENCIL8,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,A)}else{let ee=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let te=0;te<ee.length;te++){let ne=ee[te],Te=r.convert(ne.format,ne.colorSpace),ve=r.convert(ne.type),we=v(ne.internalFormat,Te,ve,ne.colorSpace),Ue=Ie(S);G&&Me(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ue,we,S.width,S.height):Me(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ue,we,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,we,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function xe(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),$(S.depthTexture,0);let ee=n.get(S.depthTexture).__webglTexture,te=Ie(S);if(S.depthTexture.format===Oi)Me(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0);else if(S.depthTexture.format===Ss)Me(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Ae(A){let S=n.get(A),G=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");xe(S.__webglFramebuffer,A)}else if(G){S.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[ee]),S.__webglDepthbuffer[ee]=i.createRenderbuffer(),ye(S.__webglDepthbuffer[ee],A,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),ye(S.__webglDepthbuffer,A,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function De(A,S,G){let ee=n.get(A);S!==void 0&&he(ee.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Ae(A)}function z(A){let S=A.texture,G=n.get(A),ee=n.get(S);A.addEventListener("dispose",N),A.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture()),ee.__version=S.version,a.memory.textures++);let te=A.isWebGLCubeRenderTarget===!0,ne=A.isWebGLMultipleRenderTargets===!0,Te=m(A)||o;if(te){G.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(o&&S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[ve]=[];for(let we=0;we<S.mipmaps.length;we++)G.__webglFramebuffer[ve][we]=i.createFramebuffer()}else G.__webglFramebuffer[ve]=i.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let ve=0;ve<S.mipmaps.length;ve++)G.__webglFramebuffer[ve]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(ne)if(s.drawBuffers){let ve=A.texture;for(let we=0,Ue=ve.length;we<Ue;we++){let $e=n.get(ve[we]);$e.__webglTexture===void 0&&($e.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&Me(A)===!1){let ve=ne?S:[S];G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let we=0;we<ve.length;we++){let Ue=ve[we];G.__webglColorRenderbuffer[we]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[we]);let $e=r.convert(Ue.format,Ue.colorSpace),O=r.convert(Ue.type),ie=v(Ue.internalFormat,$e,O,Ue.colorSpace,A.isXRRenderTarget===!0),le=Ie(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,le,ie,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,G.__webglColorRenderbuffer[we])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),ye(G.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(te){t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),V(i.TEXTURE_CUBE_MAP,S,Te);for(let ve=0;ve<6;ve++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let we=0;we<S.mipmaps.length;we++)he(G.__webglFramebuffer[ve][we],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,we);else he(G.__webglFramebuffer[ve],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);x(S,Te)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ne){let ve=A.texture;for(let we=0,Ue=ve.length;we<Ue;we++){let $e=ve[we],O=n.get($e);t.bindTexture(i.TEXTURE_2D,O.__webglTexture),V(i.TEXTURE_2D,$e,Te),he(G.__webglFramebuffer,A,$e,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,0),x($e,Te)&&_(i.TEXTURE_2D)}t.unbindTexture()}else{let ve=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?ve=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ve,ee.__webglTexture),V(ve,S,Te),o&&S.mipmaps&&S.mipmaps.length>0)for(let we=0;we<S.mipmaps.length;we++)he(G.__webglFramebuffer[we],A,S,i.COLOR_ATTACHMENT0,ve,we);else he(G.__webglFramebuffer,A,S,i.COLOR_ATTACHMENT0,ve,0);x(S,Te)&&_(ve),t.unbindTexture()}A.depthBuffer&&Ae(A)}function ut(A){let S=m(A)||o,G=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ee=0,te=G.length;ee<te;ee++){let ne=G[ee];if(x(ne,S)){let Te=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ve=n.get(ne).__webglTexture;t.bindTexture(Te,ve),_(Te),t.unbindTexture()}}}function Re(A){if(o&&A.samples>0&&Me(A)===!1){let S=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],G=A.width,ee=A.height,te=i.COLOR_BUFFER_BIT,ne=[],Te=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=n.get(A),we=A.isWebGLMultipleRenderTargets===!0;if(we)for(let Ue=0;Ue<S.length;Ue++)t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Ue=0;Ue<S.length;Ue++){ne.push(i.COLOR_ATTACHMENT0+Ue),A.depthBuffer&&ne.push(Te);let $e=ve.__ignoreDepthValues!==void 0?ve.__ignoreDepthValues:!1;if($e===!1&&(A.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),we&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ve.__webglColorRenderbuffer[Ue]),$e===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Te]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Te])),we){let O=n.get(S[Ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,O,0)}i.blitFramebuffer(0,0,G,ee,0,0,G,ee,te,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ne)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),we)for(let Ue=0;Ue<S.length;Ue++){t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.RENDERBUFFER,ve.__webglColorRenderbuffer[Ue]);let $e=n.get(S[Ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.TEXTURE_2D,$e,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}}function Ie(A){return Math.min(s.maxSamples,A.samples)}function Me(A){let S=n.get(A);return o&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ve(A){let S=a.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function Le(A,S){let G=A.colorSpace,ee=A.format,te=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===oc||G!==Wn&&G!==fn&&(nt.getTransfer(G)===ct?o===!1?e.has("EXT_sRGB")===!0&&ee===An?(A.format=oc,A.minFilter=$t,A.generateMipmaps=!1):S=$a.sRGBToLinear(S):(ee!==An||te!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),S}this.allocateTextureUnit=D,this.resetTextureUnits=J,this.setTexture2D=$,this.setTexture2DArray=C,this.setTexture3D=R,this.setTextureCube=P,this.rebindTextures=De,this.setupRenderTarget=z,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=he,this.useMultisampledRTT=Me}function gv(i,e,t){let n=t.isWebGL2;function s(r,a=fn){let o,l=nt.getTransfer(a);if(r===fi)return i.UNSIGNED_BYTE;if(r===Cf)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Pf)return i.UNSIGNED_SHORT_5_5_5_1;if(r===cg)return i.BYTE;if(r===hg)return i.SHORT;if(r===Kc)return i.UNSIGNED_SHORT;if(r===Rf)return i.INT;if(r===ci)return i.UNSIGNED_INT;if(r===hi)return i.FLOAT;if(r===dr)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===ug)return i.ALPHA;if(r===An)return i.RGBA;if(r===dg)return i.LUMINANCE;if(r===fg)return i.LUMINANCE_ALPHA;if(r===Oi)return i.DEPTH_COMPONENT;if(r===Ss)return i.DEPTH_STENCIL;if(r===oc)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===pg)return i.RED;if(r===If)return i.RED_INTEGER;if(r===mg)return i.RG;if(r===Lf)return i.RG_INTEGER;if(r===Df)return i.RGBA_INTEGER;if(r===Ml||r===bl||r===Sl||r===wl)if(l===ct)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Ml)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===bl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Sl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===wl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Ml)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===bl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Sl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===wl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ku||r===Zu||r===Ju||r===ju)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Ku)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Zu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ju)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ju)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Uf)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Qu||r===ed)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Qu)return l===ct?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===ed)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===td||r===nd||r===id||r===sd||r===rd||r===ad||r===od||r===ld||r===cd||r===hd||r===ud||r===dd||r===fd||r===pd)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===td)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===nd)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===id)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===sd)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===rd)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ad)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===od)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ld)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===cd)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===hd)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ud)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===dd)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===fd)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===pd)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===El||r===md||r===gd)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===El)return l===ct?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===md)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===gd)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===gg||r===yd||r===_d||r===xd)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===El)return o.COMPRESSED_RED_RGTC1_EXT;if(r===yd)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===_d)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===xd)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ni?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var bc=class extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},wt=class extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}},yv={type:"move"},ar=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let g of e.hand.values()){let m=t.getJointPose(g,n),f=this._getHandJoint(c,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,y=.005;c.inputState.pinching&&d>p+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(yv)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new wt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Sc=class extends mi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,y=null,g=t.getContextAttributes(),m=null,f=null,x=[],_=[],v=new ge,I=null,M=new Xt;M.layers.enable(1),M.viewport=new Lt;let w=new Xt;w.layers.enable(2),w.viewport=new Lt;let N=[M,w],b=new bc;b.layers.enable(1),b.layers.enable(2);let E=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let K=x[V];return K===void 0&&(K=new ar,x[V]=K),K.getTargetRaySpace()},this.getControllerGrip=function(V){let K=x[V];return K===void 0&&(K=new ar,x[V]=K),K.getGripSpace()},this.getHand=function(V){let K=x[V];return K===void 0&&(K=new ar,x[V]=K),K.getHandSpace()};function Y(V){let K=_.indexOf(V.inputSource);if(K===-1)return;let ae=x[K];ae!==void 0&&(ae.update(V.inputSource,V.frame,c||a),ae.dispatchEvent({type:V.type,data:V.inputSource}))}function J(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",D);for(let V=0;V<x.length;V++){let K=_[V];K!==null&&(_[V]=null,x[V].disconnect(K))}E=null,F=null,e.setRenderTarget(m),p=null,d=null,u=null,s=null,f=null,Q.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(v.width,v.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",J),s.addEventListener("inputsourceschange",D),g.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(v),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let K={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,K),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new $n(p.framebufferWidth,p.framebufferHeight,{format:An,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let K=null,ae=null,de=null;g.depth&&(de=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=g.stencil?Ss:Oi,ae=g.stencil?Ni:ci);let he={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(he),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new $n(d.textureWidth,d.textureHeight,{format:An,type:fi,depthTexture:new Qa(d.textureWidth,d.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});let ye=e.properties.get(f);ye.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Q.setContext(s),Q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function D(V){for(let K=0;K<V.removed.length;K++){let ae=V.removed[K],de=_.indexOf(ae);de>=0&&(_[de]=null,x[de].disconnect(ae))}for(let K=0;K<V.added.length;K++){let ae=V.added[K],de=_.indexOf(ae);if(de===-1){for(let ye=0;ye<x.length;ye++)if(ye>=_.length){_.push(ae),de=ye;break}else if(_[ye]===null){_[ye]=ae,de=ye;break}if(de===-1)break}let he=x[de];he&&he.connect(ae)}}let H=new L,$=new L;function C(V,K,ae){H.setFromMatrixPosition(K.matrixWorld),$.setFromMatrixPosition(ae.matrixWorld);let de=H.distanceTo($),he=K.projectionMatrix.elements,ye=ae.projectionMatrix.elements,xe=he[14]/(he[10]-1),Ae=he[14]/(he[10]+1),De=(he[9]+1)/he[5],z=(he[9]-1)/he[5],ut=(he[8]-1)/he[0],Re=(ye[8]+1)/ye[0],Ie=xe*ut,Me=xe*Re,Ve=de/(-ut+Re),Le=Ve*-ut;K.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Le),V.translateZ(Ve),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();let A=xe+Ve,S=Ae+Ve,G=Ie-Le,ee=Me+(de-Le),te=De*Ae/S*A,ne=z*Ae/S*A;V.projectionMatrix.makePerspective(G,ee,te,ne,A,S),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function R(V,K){K===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(K.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;b.near=w.near=M.near=V.near,b.far=w.far=M.far=V.far,(E!==b.near||F!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),E=b.near,F=b.far);let K=V.parent,ae=b.cameras;R(b,K);for(let de=0;de<ae.length;de++)R(ae[de],K);ae.length===2?C(b,M,w):b.projectionMatrix.copy(M.projectionMatrix),P(V,b,K)};function P(V,K,ae){ae===null?V.matrix.copy(K.matrixWorld):(V.matrix.copy(ae.matrixWorld),V.matrix.invert(),V.matrix.multiply(K.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(K.projectionMatrix),V.projectionMatrixInverse.copy(K.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=lc*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)};let B=null;function Z(V,K){if(h=K.getViewerPose(c||a),y=K,h!==null){let ae=h.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let de=!1;ae.length!==b.cameras.length&&(b.cameras.length=0,de=!0);for(let he=0;he<ae.length;he++){let ye=ae[he],xe=null;if(p!==null)xe=p.getViewport(ye);else{let De=u.getViewSubImage(d,ye);xe=De.viewport,he===0&&(e.setRenderTargetTextures(f,De.colorTexture,d.ignoreDepthValues?void 0:De.depthStencilTexture),e.setRenderTarget(f))}let Ae=N[he];Ae===void 0&&(Ae=new Xt,Ae.layers.enable(he),Ae.viewport=new Lt,N[he]=Ae),Ae.matrix.fromArray(ye.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(ye.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(xe.x,xe.y,xe.width,xe.height),he===0&&(b.matrix.copy(Ae.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),de===!0&&b.cameras.push(Ae)}}for(let ae=0;ae<x.length;ae++){let de=_[ae],he=x[ae];de!==null&&he!==void 0&&he.update(de,K,c||a)}B&&B(V,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),y=null}let Q=new zf;Q.setAnimationLoop(Z),this.setAnimationLoop=function(V){B=V},this.dispose=function(){}}};function _v(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Hf(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,x,_,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(r(m,f),y(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),g(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,x,_):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Jt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Jt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let x=e.get(f).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;let _=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*_,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,x,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=_*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Jt&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function y(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){let x=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function xv(i,e,t,n){let s={},r={},a=[],o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,_){let v=_.program;n.uniformBlockBinding(x,v)}function c(x,_){let v=s[x.id];v===void 0&&(y(x),v=h(x),s[x.id]=v,x.addEventListener("dispose",m));let I=_.program;n.updateUBOMapping(x,I);let M=e.render.frame;r[x.id]!==M&&(d(x),r[x.id]=M)}function h(x){let _=u();x.__bindingPointIndex=_;let v=i.createBuffer(),I=x.__size,M=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,I,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,v),v}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){let _=s[x.id],v=x.uniforms,I=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let M=0,w=v.length;M<w;M++){let N=Array.isArray(v[M])?v[M]:[v[M]];for(let b=0,E=N.length;b<E;b++){let F=N[b];if(p(F,M,b,I)===!0){let Y=F.__offset,J=Array.isArray(F.value)?F.value:[F.value],D=0;for(let H=0;H<J.length;H++){let $=J[H],C=g($);typeof $=="number"||typeof $=="boolean"?(F.__data[0]=$,i.bufferSubData(i.UNIFORM_BUFFER,Y+D,F.__data)):$.isMatrix3?(F.__data[0]=$.elements[0],F.__data[1]=$.elements[1],F.__data[2]=$.elements[2],F.__data[3]=0,F.__data[4]=$.elements[3],F.__data[5]=$.elements[4],F.__data[6]=$.elements[5],F.__data[7]=0,F.__data[8]=$.elements[6],F.__data[9]=$.elements[7],F.__data[10]=$.elements[8],F.__data[11]=0):($.toArray(F.__data,D),D+=C.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Y,F.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(x,_,v,I){let M=x.value,w=_+"_"+v;if(I[w]===void 0)return typeof M=="number"||typeof M=="boolean"?I[w]=M:I[w]=M.clone(),!0;{let N=I[w];if(typeof M=="number"||typeof M=="boolean"){if(N!==M)return I[w]=M,!0}else if(N.equals(M)===!1)return N.copy(M),!0}return!1}function y(x){let _=x.uniforms,v=0,I=16;for(let w=0,N=_.length;w<N;w++){let b=Array.isArray(_[w])?_[w]:[_[w]];for(let E=0,F=b.length;E<F;E++){let Y=b[E],J=Array.isArray(Y.value)?Y.value:[Y.value];for(let D=0,H=J.length;D<H;D++){let $=J[D],C=g($),R=v%I;R!==0&&I-R<C.boundary&&(v+=I-R),Y.__data=new Float32Array(C.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=v,v+=C.storage}}}let M=v%I;return M>0&&(v+=I-M),x.__size=v,x.__cache={},this}function g(x){let _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function m(x){let _=x.target;_.removeEventListener("dispose",m);let v=a.indexOf(_.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function f(){for(let x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}var gr=class{constructor(e={}){let{canvas:t=Rg(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let p=new Uint32Array(4),y=new Int32Array(4),g=null,m=null,f=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Et,this._useLegacyLights=!1,this.toneMapping=di,this.toneMappingExposure=1;let _=this,v=!1,I=0,M=0,w=null,N=-1,b=null,E=new Lt,F=new Lt,Y=null,J=new He(0),D=0,H=t.width,$=t.height,C=1,R=null,P=null,B=new Lt(0,0,H,$),Z=new Lt(0,0,H,$),Q=!1,V=new mr,K=!1,ae=!1,de=null,he=new ht,ye=new ge,xe=new L,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function De(){return w===null?C:1}let z=n;function ut(T,k){for(let X=0;X<T.length;X++){let q=T[X],W=t.getContext(q,k);if(W!==null)return W}return null}try{let T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Yc}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",U,!1),t.addEventListener("webglcontextcreationerror",ce,!1),z===null){let k=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&k.shift(),z=ut(k,T),z===null)throw ut(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Re,Ie,Me,Ve,Le,A,S,G,ee,te,ne,Te,ve,we,Ue,$e,O,ie,le,ue,fe,se,Ee,Fe;function Je(){Re=new Bx(z),Ie=new Lx(z,Re,e),Re.init(Ie),se=new gv(z,Re,Ie),Me=new pv(z,Re,Ie),Ve=new zx(z),Le=new nv,A=new mv(z,Re,Me,Le,Ie,se,Ve),S=new Ux(_),G=new Fx(_),ee=new Kg(z,Ie),Ee=new Px(z,Re,ee,Ie),te=new kx(z,ee,Ve,Ee),ne=new $x(z,te,ee,Ve),le=new Wx(z,Ie,A),$e=new Dx(Le),Te=new tv(_,S,G,Re,Ie,Ee,$e),ve=new _v(_,Le),we=new sv,Ue=new hv(Re,Ie),ie=new Cx(_,S,G,Me,ne,d,l),O=new fv(_,ne,Ie),Fe=new xv(z,Ve,Ie,Me),ue=new Ix(z,Re,Ve,Ie),fe=new Hx(z,Re,Ve,Ie),Ve.programs=Te.programs,_.capabilities=Ie,_.extensions=Re,_.properties=Le,_.renderLists=we,_.shadowMap=O,_.state=Me,_.info=Ve}Je();let Pe=new Sc(_,z);this.xr=Pe,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let T=Re.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Re.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return C},this.setPixelRatio=function(T){T!==void 0&&(C=T,this.setSize(H,$,!1))},this.getSize=function(T){return T.set(H,$)},this.setSize=function(T,k,X=!0){if(Pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=T,$=k,t.width=Math.floor(T*C),t.height=Math.floor(k*C),X===!0&&(t.style.width=T+"px",t.style.height=k+"px"),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(H*C,$*C).floor()},this.setDrawingBufferSize=function(T,k,X){H=T,$=k,C=X,t.width=Math.floor(T*X),t.height=Math.floor(k*X),this.setViewport(0,0,T,k)},this.getCurrentViewport=function(T){return T.copy(E)},this.getViewport=function(T){return T.copy(B)},this.setViewport=function(T,k,X,q){T.isVector4?B.set(T.x,T.y,T.z,T.w):B.set(T,k,X,q),Me.viewport(E.copy(B).multiplyScalar(C).floor())},this.getScissor=function(T){return T.copy(Z)},this.setScissor=function(T,k,X,q){T.isVector4?Z.set(T.x,T.y,T.z,T.w):Z.set(T,k,X,q),Me.scissor(F.copy(Z).multiplyScalar(C).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(T){Me.setScissorTest(Q=T)},this.setOpaqueSort=function(T){R=T},this.setTransparentSort=function(T){P=T},this.getClearColor=function(T){return T.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor.apply(ie,arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha.apply(ie,arguments)},this.clear=function(T=!0,k=!0,X=!0){let q=0;if(T){let W=!1;if(w!==null){let Se=w.texture.format;W=Se===Df||Se===Lf||Se===If}if(W){let Se=w.texture.type,Ce=Se===fi||Se===ci||Se===Kc||Se===Ni||Se===Cf||Se===Pf,Oe=ie.getClearColor(),ke=ie.getClearAlpha(),qe=Oe.r,We=Oe.g,Xe=Oe.b;Ce?(p[0]=qe,p[1]=We,p[2]=Xe,p[3]=ke,z.clearBufferuiv(z.COLOR,0,p)):(y[0]=qe,y[1]=We,y[2]=Xe,y[3]=ke,z.clearBufferiv(z.COLOR,0,y))}else q|=z.COLOR_BUFFER_BIT}k&&(q|=z.DEPTH_BUFFER_BIT),X&&(q|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",U,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),we.dispose(),Ue.dispose(),Le.dispose(),S.dispose(),G.dispose(),ne.dispose(),Ee.dispose(),Fe.dispose(),Te.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",zt),Pe.removeEventListener("sessionend",ot),de&&(de.dispose(),de=null),Gt.stop()};function oe(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;let T=Ve.autoReset,k=O.enabled,X=O.autoUpdate,q=O.needsUpdate,W=O.type;Je(),Ve.autoReset=T,O.enabled=k,O.autoUpdate=X,O.needsUpdate=q,O.type=W}function ce(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function pe(T){let k=T.target;k.removeEventListener("dispose",pe),Be(k)}function Be(T){Ne(T),Le.remove(T)}function Ne(T){let k=Le.get(T).programs;k!==void 0&&(k.forEach(function(X){Te.releaseProgram(X)}),T.isShaderMaterial&&Te.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,X,q,W,Se){k===null&&(k=Ae);let Ce=W.isMesh&&W.matrixWorld.determinant()<0,Oe=Y0(T,k,X,q,W);Me.setMaterial(q,Ce);let ke=X.index,qe=1;if(q.wireframe===!0){if(ke=te.getWireframeAttribute(X),ke===void 0)return;qe=2}let We=X.drawRange,Xe=X.attributes.position,xt=We.start*qe,nn=(We.start+We.count)*qe;Se!==null&&(xt=Math.max(xt,Se.start*qe),nn=Math.min(nn,(Se.start+Se.count)*qe)),ke!==null?(xt=Math.max(xt,0),nn=Math.min(nn,ke.count)):Xe!=null&&(xt=Math.max(xt,0),nn=Math.min(nn,Xe.count));let Pt=nn-xt;if(Pt<0||Pt===1/0)return;Ee.setup(W,q,Oe,X,ke);let On,mt=ue;if(ke!==null&&(On=ee.get(ke),mt=fe,mt.setIndex(On)),W.isMesh)q.wireframe===!0?(Me.setLineWidth(q.wireframeLinewidth*De()),mt.setMode(z.LINES)):mt.setMode(z.TRIANGLES);else if(W.isLine){let Ke=q.linewidth;Ke===void 0&&(Ke=1),Me.setLineWidth(Ke*De()),W.isLineSegments?mt.setMode(z.LINES):W.isLineLoop?mt.setMode(z.LINE_LOOP):mt.setMode(z.LINE_STRIP)}else W.isPoints?mt.setMode(z.POINTS):W.isSprite&&mt.setMode(z.TRIANGLES);if(W.isBatchedMesh)mt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)mt.renderInstances(xt,Pt,W.count);else if(X.isInstancedBufferGeometry){let Ke=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,nl=Math.min(X.instanceCount,Ke);mt.renderInstances(xt,Pt,nl)}else mt.render(xt,Pt)};function rt(T,k,X){T.transparent===!0&&T.side===Mt&&T.forceSinglePass===!1?(T.side=Jt,T.needsUpdate=!0,Yr(T,k,X),T.side=pi,T.needsUpdate=!0,Yr(T,k,X),T.side=Mt):Yr(T,k,X)}this.compile=function(T,k,X=null){X===null&&(X=T),m=Ue.get(X),m.init(),x.push(m),X.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),T!==X&&T.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),m.setupLights(_._useLegacyLights);let q=new Set;return T.traverse(function(W){let Se=W.material;if(Se)if(Array.isArray(Se))for(let Ce=0;Ce<Se.length;Ce++){let Oe=Se[Ce];rt(Oe,X,W),q.add(Oe)}else rt(Se,X,W),q.add(Se)}),x.pop(),m=null,q},this.compileAsync=function(T,k,X=null){let q=this.compile(T,k,X);return new Promise(W=>{function Se(){if(q.forEach(function(Ce){Le.get(Ce).currentProgram.isReady()&&q.delete(Ce)}),q.size===0){W(T);return}setTimeout(Se,10)}Re.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let at=null;function Ct(T){at&&at(T)}function zt(){Gt.stop()}function ot(){Gt.start()}let Gt=new zf;Gt.setAnimationLoop(Ct),typeof self<"u"&&Gt.setContext(self),this.setAnimationLoop=function(T){at=T,Pe.setAnimationLoop(T),T===null?Gt.stop():Gt.start()},Pe.addEventListener("sessionstart",zt),Pe.addEventListener("sessionend",ot),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(k),k=Pe.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,k,w),m=Ue.get(T,x.length),m.init(),x.push(m),he.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),V.setFromProjectionMatrix(he),ae=this.localClippingEnabled,K=$e.init(this.clippingPlanes,ae),g=we.get(T,f.length),g.init(),f.push(g),In(T,k,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(R,P),this.info.render.frame++,K===!0&&$e.beginShadows();let X=m.state.shadowsArray;if(O.render(X,T,k),K===!0&&$e.endShadows(),this.info.autoReset===!0&&this.info.reset(),ie.render(g,T),m.setupLights(_._useLegacyLights),k.isArrayCamera){let q=k.cameras;for(let W=0,Se=q.length;W<Se;W++){let Ce=q[W];su(g,T,Ce,Ce.viewport)}}else su(g,T,k);w!==null&&(A.updateMultisampleRenderTarget(w),A.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(_,T,k),Ee.resetDefaultState(),N=-1,b=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,f.pop(),f.length>0?g=f[f.length-1]:g=null};function In(T,k,X,q){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||V.intersectsSprite(T)){q&&xe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(he);let Ce=ne.update(T),Oe=T.material;Oe.visible&&g.push(T,Ce,Oe,X,xe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||V.intersectsObject(T))){let Ce=ne.update(T),Oe=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),xe.copy(T.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),xe.copy(Ce.boundingSphere.center)),xe.applyMatrix4(T.matrixWorld).applyMatrix4(he)),Array.isArray(Oe)){let ke=Ce.groups;for(let qe=0,We=ke.length;qe<We;qe++){let Xe=ke[qe],xt=Oe[Xe.materialIndex];xt&&xt.visible&&g.push(T,Ce,xt,X,xe.z,Xe)}}else Oe.visible&&g.push(T,Ce,Oe,X,xe.z,null)}}let Se=T.children;for(let Ce=0,Oe=Se.length;Ce<Oe;Ce++)In(Se[Ce],k,X,q)}function su(T,k,X,q){let W=T.opaque,Se=T.transmissive,Ce=T.transparent;m.setupLightsView(X),K===!0&&$e.setGlobalState(_.clippingPlanes,X),Se.length>0&&X0(W,Se,k,X),q&&Me.viewport(E.copy(q)),W.length>0&&Xr(W,k,X),Se.length>0&&Xr(Se,k,X),Ce.length>0&&Xr(Ce,k,X),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function X0(T,k,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;let Se=Ie.isWebGL2;de===null&&(de=new $n(1,1,{generateMipmaps:!0,type:Re.has("EXT_color_buffer_half_float")?dr:fi,minFilter:ur,samples:Se?4:0})),_.getDrawingBufferSize(ye),Se?de.setSize(ye.x,ye.y):de.setSize(cc(ye.x),cc(ye.y));let Ce=_.getRenderTarget();_.setRenderTarget(de),_.getClearColor(J),D=_.getClearAlpha(),D<1&&_.setClearColor(16777215,.5),_.clear();let Oe=_.toneMapping;_.toneMapping=di,Xr(T,X,q),A.updateMultisampleRenderTarget(de),A.updateRenderTargetMipmap(de);let ke=!1;for(let qe=0,We=k.length;qe<We;qe++){let Xe=k[qe],xt=Xe.object,nn=Xe.geometry,Pt=Xe.material,On=Xe.group;if(Pt.side===Mt&&xt.layers.test(q.layers)){let mt=Pt.side;Pt.side=Jt,Pt.needsUpdate=!0,ru(xt,X,q,nn,Pt,On),Pt.side=mt,Pt.needsUpdate=!0,ke=!0}}ke===!0&&(A.updateMultisampleRenderTarget(de),A.updateRenderTargetMipmap(de)),_.setRenderTarget(Ce),_.setClearColor(J,D),_.toneMapping=Oe}function Xr(T,k,X){let q=k.isScene===!0?k.overrideMaterial:null;for(let W=0,Se=T.length;W<Se;W++){let Ce=T[W],Oe=Ce.object,ke=Ce.geometry,qe=q===null?Ce.material:q,We=Ce.group;Oe.layers.test(X.layers)&&ru(Oe,k,X,ke,qe,We)}}function ru(T,k,X,q,W,Se){T.onBeforeRender(_,k,X,q,W,Se),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),W.onBeforeRender(_,k,X,q,T,Se),W.transparent===!0&&W.side===Mt&&W.forceSinglePass===!1?(W.side=Jt,W.needsUpdate=!0,_.renderBufferDirect(X,k,q,W,T,Se),W.side=pi,W.needsUpdate=!0,_.renderBufferDirect(X,k,q,W,T,Se),W.side=Mt):_.renderBufferDirect(X,k,q,W,T,Se),T.onAfterRender(_,k,X,q,W,Se)}function Yr(T,k,X){k.isScene!==!0&&(k=Ae);let q=Le.get(T),W=m.state.lights,Se=m.state.shadowsArray,Ce=W.state.version,Oe=Te.getParameters(T,W.state,Se,k,X),ke=Te.getProgramCacheKey(Oe),qe=q.programs;q.environment=T.isMeshStandardMaterial?k.environment:null,q.fog=k.fog,q.envMap=(T.isMeshStandardMaterial?G:S).get(T.envMap||q.environment),qe===void 0&&(T.addEventListener("dispose",pe),qe=new Map,q.programs=qe);let We=qe.get(ke);if(We!==void 0){if(q.currentProgram===We&&q.lightsStateVersion===Ce)return ou(T,Oe),We}else Oe.uniforms=Te.getUniforms(T),T.onBuild(X,Oe,_),T.onBeforeCompile(Oe,_),We=Te.acquireProgram(Oe,ke),qe.set(ke,We),q.uniforms=Oe.uniforms;let Xe=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Xe.clippingPlanes=$e.uniform),ou(T,Oe),q.needsLights=K0(T),q.lightsStateVersion=Ce,q.needsLights&&(Xe.ambientLightColor.value=W.state.ambient,Xe.lightProbe.value=W.state.probe,Xe.directionalLights.value=W.state.directional,Xe.directionalLightShadows.value=W.state.directionalShadow,Xe.spotLights.value=W.state.spot,Xe.spotLightShadows.value=W.state.spotShadow,Xe.rectAreaLights.value=W.state.rectArea,Xe.ltc_1.value=W.state.rectAreaLTC1,Xe.ltc_2.value=W.state.rectAreaLTC2,Xe.pointLights.value=W.state.point,Xe.pointLightShadows.value=W.state.pointShadow,Xe.hemisphereLights.value=W.state.hemi,Xe.directionalShadowMap.value=W.state.directionalShadowMap,Xe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Xe.spotShadowMap.value=W.state.spotShadowMap,Xe.spotLightMatrix.value=W.state.spotLightMatrix,Xe.spotLightMap.value=W.state.spotLightMap,Xe.pointShadowMap.value=W.state.pointShadowMap,Xe.pointShadowMatrix.value=W.state.pointShadowMatrix),q.currentProgram=We,q.uniformsList=null,We}function au(T){if(T.uniformsList===null){let k=T.currentProgram.getUniforms();T.uniformsList=vs.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}function ou(T,k){let X=Le.get(T);X.outputColorSpace=k.outputColorSpace,X.batching=k.batching,X.instancing=k.instancing,X.instancingColor=k.instancingColor,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function Y0(T,k,X,q,W){k.isScene!==!0&&(k=Ae),A.resetTextureUnits();let Se=k.fog,Ce=q.isMeshStandardMaterial?k.environment:null,Oe=w===null?_.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Wn,ke=(q.isMeshStandardMaterial?G:S).get(q.envMap||Ce),qe=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,We=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Xe=!!X.morphAttributes.position,xt=!!X.morphAttributes.normal,nn=!!X.morphAttributes.color,Pt=di;q.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Pt=_.toneMapping);let On=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,mt=On!==void 0?On.length:0,Ke=Le.get(q),nl=m.state.lights;if(K===!0&&(ae===!0||T!==b)){let cn=T===b&&q.id===N;$e.setState(q,T,cn)}let yt=!1;q.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==nl.state.version||Ke.outputColorSpace!==Oe||W.isBatchedMesh&&Ke.batching===!1||!W.isBatchedMesh&&Ke.batching===!0||W.isInstancedMesh&&Ke.instancing===!1||!W.isInstancedMesh&&Ke.instancing===!0||W.isSkinnedMesh&&Ke.skinning===!1||!W.isSkinnedMesh&&Ke.skinning===!0||W.isInstancedMesh&&Ke.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ke.instancingColor===!1&&W.instanceColor!==null||Ke.envMap!==ke||q.fog===!0&&Ke.fog!==Se||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==$e.numPlanes||Ke.numIntersection!==$e.numIntersection)||Ke.vertexAlphas!==qe||Ke.vertexTangents!==We||Ke.morphTargets!==Xe||Ke.morphNormals!==xt||Ke.morphColors!==nn||Ke.toneMapping!==Pt||Ie.isWebGL2===!0&&Ke.morphTargetsCount!==mt)&&(yt=!0):(yt=!0,Ke.__version=q.version);let bi=Ke.currentProgram;yt===!0&&(bi=Yr(q,k,W));let lu=!1,Hs=!1,il=!1,Ft=bi.getUniforms(),Si=Ke.uniforms;if(Me.useProgram(bi.program)&&(lu=!0,Hs=!0,il=!0),q.id!==N&&(N=q.id,Hs=!0),lu||b!==T){Ft.setValue(z,"projectionMatrix",T.projectionMatrix),Ft.setValue(z,"viewMatrix",T.matrixWorldInverse);let cn=Ft.map.cameraPosition;cn!==void 0&&cn.setValue(z,xe.setFromMatrixPosition(T.matrixWorld)),Ie.logarithmicDepthBuffer&&Ft.setValue(z,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Ft.setValue(z,"isOrthographic",T.isOrthographicCamera===!0),b!==T&&(b=T,Hs=!0,il=!0)}if(W.isSkinnedMesh){Ft.setOptional(z,W,"bindMatrix"),Ft.setOptional(z,W,"bindMatrixInverse");let cn=W.skeleton;cn&&(Ie.floatVertexTextures?(cn.boneTexture===null&&cn.computeBoneTexture(),Ft.setValue(z,"boneTexture",cn.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}W.isBatchedMesh&&(Ft.setOptional(z,W,"batchingTexture"),Ft.setValue(z,"batchingTexture",W._matricesTexture,A));let sl=X.morphAttributes;if((sl.position!==void 0||sl.normal!==void 0||sl.color!==void 0&&Ie.isWebGL2===!0)&&le.update(W,X,bi),(Hs||Ke.receiveShadow!==W.receiveShadow)&&(Ke.receiveShadow=W.receiveShadow,Ft.setValue(z,"receiveShadow",W.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Si.envMap.value=ke,Si.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),Hs&&(Ft.setValue(z,"toneMappingExposure",_.toneMappingExposure),Ke.needsLights&&q0(Si,il),Se&&q.fog===!0&&ve.refreshFogUniforms(Si,Se),ve.refreshMaterialUniforms(Si,q,C,$,de),vs.upload(z,au(Ke),Si,A)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(vs.upload(z,au(Ke),Si,A),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Ft.setValue(z,"center",W.center),Ft.setValue(z,"modelViewMatrix",W.modelViewMatrix),Ft.setValue(z,"normalMatrix",W.normalMatrix),Ft.setValue(z,"modelMatrix",W.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let cn=q.uniformsGroups;for(let rl=0,Z0=cn.length;rl<Z0;rl++)if(Ie.isWebGL2){let cu=cn[rl];Fe.update(cu,bi),Fe.bind(cu,bi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return bi}function q0(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function K0(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,k,X){Le.get(T.texture).__webglTexture=k,Le.get(T.depthTexture).__webglTexture=X;let q=Le.get(T);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||Re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,k){let X=Le.get(T);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(T,k=0,X=0){w=T,I=k,M=X;let q=!0,W=null,Se=!1,Ce=!1;if(T){let ke=Le.get(T);ke.__useDefaultFramebuffer!==void 0?(Me.bindFramebuffer(z.FRAMEBUFFER,null),q=!1):ke.__webglFramebuffer===void 0?A.setupRenderTarget(T):ke.__hasExternalTextures&&A.rebindTextures(T,Le.get(T.texture).__webglTexture,Le.get(T.depthTexture).__webglTexture);let qe=T.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ce=!0);let We=Le.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(We[k])?W=We[k][X]:W=We[k],Se=!0):Ie.isWebGL2&&T.samples>0&&A.useMultisampledRTT(T)===!1?W=Le.get(T).__webglMultisampledFramebuffer:Array.isArray(We)?W=We[X]:W=We,E.copy(T.viewport),F.copy(T.scissor),Y=T.scissorTest}else E.copy(B).multiplyScalar(C).floor(),F.copy(Z).multiplyScalar(C).floor(),Y=Q;if(Me.bindFramebuffer(z.FRAMEBUFFER,W)&&Ie.drawBuffers&&q&&Me.drawBuffers(T,W),Me.viewport(E),Me.scissor(F),Me.setScissorTest(Y),Se){let ke=Le.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+k,ke.__webglTexture,X)}else if(Ce){let ke=Le.get(T.texture),qe=k||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,ke.__webglTexture,X||0,qe)}N=-1},this.readRenderTargetPixels=function(T,k,X,q,W,Se,Ce){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=Le.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ce!==void 0&&(Oe=Oe[Ce]),Oe){Me.bindFramebuffer(z.FRAMEBUFFER,Oe);try{let ke=T.texture,qe=ke.format,We=ke.type;if(qe!==An&&se.convert(qe)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Xe=We===dr&&(Re.has("EXT_color_buffer_half_float")||Ie.isWebGL2&&Re.has("EXT_color_buffer_float"));if(We!==fi&&se.convert(We)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(We===hi&&(Ie.isWebGL2||Re.has("OES_texture_float")||Re.has("WEBGL_color_buffer_float")))&&!Xe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-q&&X>=0&&X<=T.height-W&&z.readPixels(k,X,q,W,se.convert(qe),se.convert(We),Se)}finally{let ke=w!==null?Le.get(w).__webglFramebuffer:null;Me.bindFramebuffer(z.FRAMEBUFFER,ke)}}},this.copyFramebufferToTexture=function(T,k,X=0){let q=Math.pow(2,-X),W=Math.floor(k.image.width*q),Se=Math.floor(k.image.height*q);A.setTexture2D(k,0),z.copyTexSubImage2D(z.TEXTURE_2D,X,0,0,T.x,T.y,W,Se),Me.unbindTexture()},this.copyTextureToTexture=function(T,k,X,q=0){let W=k.image.width,Se=k.image.height,Ce=se.convert(X.format),Oe=se.convert(X.type);A.setTexture2D(X,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,X.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,X.unpackAlignment),k.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,q,T.x,T.y,W,Se,Ce,Oe,k.image.data):k.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,q,T.x,T.y,k.mipmaps[0].width,k.mipmaps[0].height,Ce,k.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,q,T.x,T.y,Ce,Oe,k.image),q===0&&X.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(T,k,X,q,W=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Se=T.max.x-T.min.x+1,Ce=T.max.y-T.min.y+1,Oe=T.max.z-T.min.z+1,ke=se.convert(q.format),qe=se.convert(q.type),We;if(q.isData3DTexture)A.setTexture3D(q,0),We=z.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)A.setTexture2DArray(q,0),We=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,q.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,q.unpackAlignment);let Xe=z.getParameter(z.UNPACK_ROW_LENGTH),xt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),nn=z.getParameter(z.UNPACK_SKIP_PIXELS),Pt=z.getParameter(z.UNPACK_SKIP_ROWS),On=z.getParameter(z.UNPACK_SKIP_IMAGES),mt=X.isCompressedTexture?X.mipmaps[W]:X.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,mt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,mt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,T.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,T.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,T.min.z),X.isDataTexture||X.isData3DTexture?z.texSubImage3D(We,W,k.x,k.y,k.z,Se,Ce,Oe,ke,qe,mt.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(We,W,k.x,k.y,k.z,Se,Ce,Oe,ke,mt.data)):z.texSubImage3D(We,W,k.x,k.y,k.z,Se,Ce,Oe,ke,qe,mt),z.pixelStorei(z.UNPACK_ROW_LENGTH,Xe),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,xt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,nn),z.pixelStorei(z.UNPACK_SKIP_ROWS,Pt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,On),W===0&&q.generateMipmaps&&z.generateMipmap(We),Me.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?A.setTextureCube(T,0):T.isData3DTexture?A.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?A.setTexture2DArray(T,0):A.setTexture2D(T,0),Me.unbindTexture()},this.resetState=function(){I=0,M=0,w=null,Me.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Zc?"display-p3":"srgb",t.unpackColorSpace=nt.workingColorSpace===go?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Et?Fi:Nf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Fi?Et:Wn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},wc=class extends gr{};wc.prototype.isWebGL1Renderer=!0;var eo=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new He(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},yr=class extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var _r=class extends Dt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},fs=new ht,uf=new ht,Ia=[],df=new Xn,vv=new ht,ir=new be,sr=new gi,to=class extends be{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new _r(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,vv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Xn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fs),df.copy(e.boundingBox).applyMatrix4(fs),this.boundingBox.union(df)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new gi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fs),sr.copy(e.boundingSphere).applyMatrix4(fs),this.boundingSphere.union(sr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,s=this.count;if(ir.geometry=this.geometry,ir.material=this.material,ir.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sr.copy(this.boundingSphere),sr.applyMatrix4(n),e.ray.intersectsSphere(sr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,fs),uf.multiplyMatrices(n,fs),ir.matrixWorld=uf,ir.raycast(e,Ia);for(let a=0,o=Ia.length;a<o;a++){let l=Ia[a];l.instanceId=r,l.object=this,t.push(l)}Ia.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new _r(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var xr=class extends yi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ff=new L,pf=new L,mf=new ht,Jl=new fr,La=new gi,Ec=class extends Ut{constructor(e=new Tt,t=new xr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ff.fromBufferAttribute(t,s-1),pf.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ff.distanceTo(pf);e.setAttribute("lineDistance",new je(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),La.copy(n.boundingSphere),La.applyMatrix4(s),La.radius+=r,e.ray.intersectsSphere(La)===!1)return;mf.copy(s).invert(),Jl.copy(e.ray).applyMatrix4(mf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new L,h=new L,u=new L,d=new L,p=this.isLineSegments?2:1,y=n.index,m=n.attributes.position;if(y!==null){let f=Math.max(0,a.start),x=Math.min(y.count,a.start+a.count);for(let _=f,v=x-1;_<v;_+=p){let I=y.getX(_),M=y.getX(_+1);if(c.fromBufferAttribute(m,I),h.fromBufferAttribute(m,M),Jl.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let N=e.ray.origin.distanceTo(d);N<e.near||N>e.far||t.push({distance:N,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{let f=Math.max(0,a.start),x=Math.min(m.count,a.start+a.count);for(let _=f,v=x-1;_<v;_+=p){if(c.fromBufferAttribute(m,_),h.fromBufferAttribute(m,_+1),Jl.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let M=e.ray.origin.distanceTo(d);M<e.near||M>e.far||t.push({distance:M,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},gf=new L,yf=new L,no=class extends Ec{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)gf.fromBufferAttribute(t,s),yf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+gf.distanceTo(yf);e.setAttribute("lineDistance",new je(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var As=class extends pn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,p=(a-h)/d;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ge:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new L,s=[],r=[],a=[],o=new L,l=new ht;for(let p=0;p<=e;p++){let y=p/e;s[p]=this.getTangentAt(y,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let y=Math.acos(Ot(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,y))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(Ot(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let y=1;y<=e;y++)r[y].applyMatrix4(l.makeRotationAxis(s[y],p*y)),a[y].crossVectors(s[y],r[y])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},vr=class extends mn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let n=t||new ge,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Tc=class extends vr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function jc(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,s(a,o,d,p)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Da=new L,jl=new jc,Ql=new jc,ec=new jc,Ac=class extends mn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Da.subVectors(s[0],s[1]).add(s[0]),c=Da);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Da.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Da),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,y=Math.pow(c.distanceToSquared(u),p),g=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);g<1e-4&&(g=1),y<1e-4&&(y=g),m<1e-4&&(m=g),jl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,y,g,m),Ql.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,y,g,m),ec.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,y,g,m)}else this.curveType==="catmullrom"&&(jl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ql.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),ec.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(jl.calc(l),Ql.calc(l),ec.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function _f(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Mv(i,e){let t=1-i;return t*t*e}function bv(i,e){return 2*(1-i)*i*e}function Sv(i,e){return i*i*e}function or(i,e,t,n){return Mv(i,e)+bv(i,t)+Sv(i,n)}function wv(i,e){let t=1-i;return t*t*t*e}function Ev(i,e){let t=1-i;return 3*t*t*i*e}function Tv(i,e){return 3*(1-i)*i*i*e}function Av(i,e){return i*i*i*e}function lr(i,e,t,n,s){return wv(i,e)+Ev(i,t)+Tv(i,n)+Av(i,s)}var io=class extends mn{constructor(e=new ge,t=new ge,n=new ge,s=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ge){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(lr(e,s.x,r.x,a.x,o.x),lr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Rc=class extends mn{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(lr(e,s.x,r.x,a.x,o.x),lr(e,s.y,r.y,a.y,o.y),lr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},so=class extends mn{constructor(e=new ge,t=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ge){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Cc=class extends mn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ro=class extends mn{constructor(e=new ge,t=new ge,n=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ge){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(or(e,s.x,r.x,a.x),or(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Pc=class extends mn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(or(e,s.x,r.x,a.x),or(e,s.y,r.y,a.y),or(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ao=class extends mn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ge){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(_f(o,l.x,c.x,h.x,u.x),_f(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ge().fromArray(s))}return this}},xf=Object.freeze({__proto__:null,ArcCurve:Tc,CatmullRomCurve3:Ac,CubicBezierCurve:io,CubicBezierCurve3:Rc,EllipseCurve:vr,LineCurve:so,LineCurve3:Cc,QuadraticBezierCurve:ro,QuadraticBezierCurve3:Pc,SplineCurve:ao}),Ic=class extends mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xf[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new xf[s.type]().fromJSON(s))}return this}},Bi=class extends Ic{constructor(e){super(),this.type="Path",this.currentPoint=new ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new so(this.currentPoint.clone(),new ge(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new ro(this.currentPoint.clone(),new ge(e,t),new ge(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new io(this.currentPoint.clone(),new ge(e,t),new ge(n,s),new ge(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ao(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new vr(e,t,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Mr=class i extends Tt{constructor(e=[new ge(0,-.5),new ge(.5,0),new ge(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Ot(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,u=new L,d=new ge,p=new L,y=new L,g=new L,m=0,f=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:m=e[x+1].x-e[x].x,f=e[x+1].y-e[x].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(g.x,g.y,g.z);break;default:m=e[x+1].x-e[x].x,f=e[x+1].y-e[x].y,p.x=f*1,p.y=-m,p.z=f*0,y.copy(p),p.x+=g.x,p.y+=g.y,p.z+=g.z,p.normalize(),l.push(p.x,p.y,p.z),g.copy(y)}for(let x=0;x<=t;x++){let _=n+x*h*s,v=Math.sin(_),I=Math.cos(_);for(let M=0;M<=e.length-1;M++){u.x=e[M].x*v,u.y=e[M].y,u.z=e[M].x*I,a.push(u.x,u.y,u.z),d.x=x/t,d.y=M/(e.length-1),o.push(d.x,d.y);let w=l[3*M+0]*v,N=l[3*M+1],b=l[3*M+0]*I;c.push(w,N,b)}}for(let x=0;x<t;x++)for(let _=0;_<e.length-1;_++){let v=_+x*e.length,I=v,M=v+e.length,w=v+e.length+1,N=v+1;r.push(I,M,N),r.push(w,N,M)}this.setIndex(r),this.setAttribute("position",new je(a,3)),this.setAttribute("uv",new je(o,2)),this.setAttribute("normal",new je(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},br=class i extends Mr{constructor(e=1,t=1,n=4,s=8){let r=new Bi;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new i(e.radius,e.length,e.capSegments,e.radialSegments)}},oo=class i extends Tt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new L,h=new ge;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=n+u/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new je(a,3)),this.setAttribute("normal",new je(o,3)),this.setAttribute("uv",new je(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},gn=class i extends Tt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],y=0,g=[],m=n/2,f=0;x(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new je(u,3)),this.setAttribute("normal",new je(d,3)),this.setAttribute("uv",new je(p,2));function x(){let v=new L,I=new L,M=0,w=(t-e)/n;for(let N=0;N<=r;N++){let b=[],E=N/r,F=E*(t-e)+e;for(let Y=0;Y<=s;Y++){let J=Y/s,D=J*l+o,H=Math.sin(D),$=Math.cos(D);I.x=F*H,I.y=-E*n+m,I.z=F*$,u.push(I.x,I.y,I.z),v.set(H,w,$).normalize(),d.push(v.x,v.y,v.z),p.push(J,1-E),b.push(y++)}g.push(b)}for(let N=0;N<s;N++)for(let b=0;b<r;b++){let E=g[b][N],F=g[b+1][N],Y=g[b+1][N+1],J=g[b][N+1];h.push(E,F,J),h.push(F,Y,J),M+=6}c.addGroup(f,M,0),f+=M}function _(v){let I=y,M=new ge,w=new L,N=0,b=v===!0?e:t,E=v===!0?1:-1;for(let Y=1;Y<=s;Y++)u.push(0,m*E,0),d.push(0,E,0),p.push(.5,.5),y++;let F=y;for(let Y=0;Y<=s;Y++){let D=Y/s*l+o,H=Math.cos(D),$=Math.sin(D);w.x=b*$,w.y=m*E,w.z=b*H,u.push(w.x,w.y,w.z),d.push(0,E,0),M.x=H*.5+.5,M.y=$*.5*E+.5,p.push(M.x,M.y),y++}for(let Y=0;Y<s;Y++){let J=I+Y,D=F+Y;v===!0?h.push(D,D+1,J):h.push(D+1,D,J),N+=3}c.addGroup(f,N,v===!0?1:2),f+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},yn=class i extends gn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},lo=class i extends Tt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new je(r,3)),this.setAttribute("normal",new je(r.slice(),3)),this.setAttribute("uv",new je(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){let _=new L,v=new L,I=new L;for(let M=0;M<t.length;M+=3)p(t[M+0],_),p(t[M+1],v),p(t[M+2],I),l(_,v,I,x)}function l(x,_,v,I){let M=I+1,w=[];for(let N=0;N<=M;N++){w[N]=[];let b=x.clone().lerp(v,N/M),E=_.clone().lerp(v,N/M),F=M-N;for(let Y=0;Y<=F;Y++)Y===0&&N===M?w[N][Y]=b:w[N][Y]=b.clone().lerp(E,Y/F)}for(let N=0;N<M;N++)for(let b=0;b<2*(M-N)-1;b++){let E=Math.floor(b/2);b%2===0?(d(w[N][E+1]),d(w[N+1][E]),d(w[N][E])):(d(w[N][E+1]),d(w[N+1][E+1]),d(w[N+1][E]))}}function c(x){let _=new L;for(let v=0;v<r.length;v+=3)_.x=r[v+0],_.y=r[v+1],_.z=r[v+2],_.normalize().multiplyScalar(x),r[v+0]=_.x,r[v+1]=_.y,r[v+2]=_.z}function h(){let x=new L;for(let _=0;_<r.length;_+=3){x.x=r[_+0],x.y=r[_+1],x.z=r[_+2];let v=m(x)/2/Math.PI+.5,I=f(x)/Math.PI+.5;a.push(v,1-I)}y(),u()}function u(){for(let x=0;x<a.length;x+=6){let _=a[x+0],v=a[x+2],I=a[x+4],M=Math.max(_,v,I),w=Math.min(_,v,I);M>.9&&w<.1&&(_<.2&&(a[x+0]+=1),v<.2&&(a[x+2]+=1),I<.2&&(a[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function p(x,_){let v=x*3;_.x=e[v+0],_.y=e[v+1],_.z=e[v+2]}function y(){let x=new L,_=new L,v=new L,I=new L,M=new ge,w=new ge,N=new ge;for(let b=0,E=0;b<r.length;b+=9,E+=6){x.set(r[b+0],r[b+1],r[b+2]),_.set(r[b+3],r[b+4],r[b+5]),v.set(r[b+6],r[b+7],r[b+8]),M.set(a[E+0],a[E+1]),w.set(a[E+2],a[E+3]),N.set(a[E+4],a[E+5]),I.copy(x).add(_).add(v).divideScalar(3);let F=m(I);g(M,E+0,x,F),g(w,E+2,_,F),g(N,E+4,v,F)}}function g(x,_,v,I){I<0&&x.x===1&&(a[_]=x.x-1),v.x===0&&v.z===0&&(a[_]=I/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function f(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},co=class i extends lo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var ki=class extends Bi{constructor(e){super(e),this.uuid=Is(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Bi().fromJSON(s))}return this}},Rv={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Yf(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,p;if(n&&(r=Dv(i,e,r,t)),i.length>80*t){o=c=i[0],l=h=i[1];for(let y=t;y<s;y+=t)u=i[y],d=i[y+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return Sr(r,a,t,o,l,p,0),a}};function Yf(i,e,t,n,s){let r,a;if(s===Wv(i,e,t,n)>0)for(r=e;r<t;r+=n)a=vf(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=vf(r,i[r],i[r+1],a);return a&&_o(a,a.next)&&(Er(a),a=a.next),a}function Hi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(_o(t,t.next)||gt(t.prev,t,t.next)===0)){if(Er(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Sr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Bv(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Pv(i,n,s,r):Cv(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Er(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Iv(Hi(i),e,t),Sr(i,e,t,n,s,r,2)):a===2&&Lv(i,e,t,n,s,r):Sr(Hi(i),e,t,n,s,r,1);break}}}function Cv(i){let e=i.prev,t=i,n=i.next;if(gt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,p=o>l?o>c?o:c:l>c?l:c,y=n.next;for(;y!==e;){if(y.x>=h&&y.x<=d&&y.y>=u&&y.y<=p&&ys(s,o,r,l,a,c,y.x,y.y)&&gt(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function Pv(i,e,t,n){let s=i.prev,r=i,a=i.next;if(gt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,p=o<l?o<c?o:c:l<c?l:c,y=h<u?h<d?h:d:u<d?u:d,g=o>l?o>c?o:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,f=Lc(p,y,e,t,n),x=Lc(g,m,e,t,n),_=i.prevZ,v=i.nextZ;for(;_&&_.z>=f&&v&&v.z<=x;){if(_.x>=p&&_.x<=g&&_.y>=y&&_.y<=m&&_!==s&&_!==a&&ys(o,h,l,u,c,d,_.x,_.y)&&gt(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=p&&v.x<=g&&v.y>=y&&v.y<=m&&v!==s&&v!==a&&ys(o,h,l,u,c,d,v.x,v.y)&&gt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=f;){if(_.x>=p&&_.x<=g&&_.y>=y&&_.y<=m&&_!==s&&_!==a&&ys(o,h,l,u,c,d,_.x,_.y)&&gt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=x;){if(v.x>=p&&v.x<=g&&v.y>=y&&v.y<=m&&v!==s&&v!==a&&ys(o,h,l,u,c,d,v.x,v.y)&&gt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Iv(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!_o(s,r)&&qf(s,n,n.next,r)&&wr(s,r)&&wr(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Er(n),Er(n.next),n=i=r),n=n.next}while(n!==i);return Hi(n)}function Lv(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&zv(a,o)){let l=Kf(a,o);a=Hi(a,a.next),l=Hi(l,l.next),Sr(a,e,t,n,s,r,0),Sr(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Dv(i,e,t,n){let s=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Yf(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Hv(c));for(s.sort(Uv),r=0;r<s.length;r++)t=Nv(s[r],t);return t}function Uv(i,e){return i.x-e.x}function Nv(i,e){let t=Ov(i,e);if(!t)return e;let n=Kf(t,i);return Hi(n,n.next),Hi(t,t.next)}function Ov(i,e){let t=e,n=-1/0,s,r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,u;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&ys(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),wr(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&Fv(s,t)))&&(s=t,h=u)),t=t.next;while(t!==o);return s}function Fv(i,e){return gt(i.prev,i,e.prev)<0&&gt(e.next,i,i.next)<0}function Bv(i,e,t,n){let s=i;do s.z===0&&(s.z=Lc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,kv(s)}function kv(i){let e,t,n,s,r,a,o,l,c=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(a>1);return i}function Lc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Hv(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function ys(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function zv(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Gv(i,e)&&(wr(i,e)&&wr(e,i)&&Vv(i,e)&&(gt(i.prev,i,e.prev)||gt(i,e.prev,e))||_o(i,e)&&gt(i.prev,i,i.next)>0&&gt(e.prev,e,e.next)>0)}function gt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function _o(i,e){return i.x===e.x&&i.y===e.y}function qf(i,e,t,n){let s=Na(gt(i,e,t)),r=Na(gt(i,e,n)),a=Na(gt(t,n,i)),o=Na(gt(t,n,e));return!!(s!==r&&a!==o||s===0&&Ua(i,t,e)||r===0&&Ua(i,n,e)||a===0&&Ua(t,i,n)||o===0&&Ua(t,e,n))}function Ua(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Na(i){return i>0?1:i<0?-1:0}function Gv(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&qf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function wr(i,e){return gt(i.prev,i,i.next)<0?gt(i,e,i.next)>=0&&gt(i,i.prev,e)>=0:gt(i,e,i.prev)<0||gt(i,i.next,e)<0}function Vv(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Kf(i,e){let t=new Dc(i.i,i.x,i.y),n=new Dc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function vf(i,e,t,n){let s=new Dc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Er(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Dc(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Wv(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var cr=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Mf(e),bf(n,e);let a=e.length;t.forEach(Mf);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,bf(n,t[l]);let o=Rv.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Mf(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function bf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var ho=class i extends lo{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Rs=class i extends Tt{constructor(e=new ki([new ge(0,.5),new ge(-.5,-.5),new ge(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new je(s,3)),this.setAttribute("normal",new je(r,3)),this.setAttribute("uv",new je(a,2));function c(h){let u=s.length/3,d=h.extractPoints(t),p=d.shape,y=d.holes;cr.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=y.length;m<f;m++){let x=y[m];cr.isClockWise(x)===!0&&(y[m]=x.reverse())}let g=cr.triangulateShape(p,y);for(let m=0,f=y.length;m<f;m++){let x=y[m];p=p.concat(x)}for(let m=0,f=p.length;m<f;m++){let x=p[m];s.push(x.x,x.y,0),r.push(0,0,1),a.push(x.x,x.y)}for(let m=0,f=g.length;m<f;m++){let x=g[m],_=x[0]+u,v=x[1]+u,I=x[2]+u;n.push(_,v,I),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return $v(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function $v(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var on=class i extends Tt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new L,d=new L,p=[],y=[],g=[],m=[];for(let f=0;f<=n;f++){let x=[],_=f/n,v=0;f===0&&a===0?v=.5/t:f===n&&l===Math.PI&&(v=-.5/t);for(let I=0;I<=t;I++){let M=I/t;u.x=-e*Math.cos(s+M*r)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(s+M*r)*Math.sin(a+_*o),y.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),m.push(M+v,1-_),x.push(c++)}h.push(x)}for(let f=0;f<n;f++)for(let x=0;x<t;x++){let _=h[f][x+1],v=h[f][x],I=h[f+1][x],M=h[f+1][x+1];(f!==0||a>0)&&p.push(_,v,M),(f!==n-1||l<Math.PI)&&p.push(v,I,M)}this.setIndex(p),this.setAttribute("position",new je(y,3)),this.setAttribute("normal",new je(g,3)),this.setAttribute("uv",new je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var uo=class i extends Tt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new L,u=new L,d=new L;for(let p=0;p<=n;p++)for(let y=0;y<=s;y++){let g=y/s*r,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(g),u.y=(e+t*Math.cos(m))*Math.sin(g),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(y/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let y=1;y<=s;y++){let g=(s+1)*p+y-1,m=(s+1)*(p-1)+y-1,f=(s+1)*(p-1)+y,x=(s+1)*p+y;a.push(g,m,x),a.push(m,f,x)}this.setIndex(a),this.setAttribute("position",new je(o,3)),this.setAttribute("normal",new je(l,3)),this.setAttribute("uv",new je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var ln=class extends yi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Of,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Oa(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Xv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Cs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Uc=class extends Cs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vd,endingEnd:vd}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Md:r=e,o=2*t-n;break;case bd:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Md:a=e,l=2*n-t;break;case bd:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,y=(n-t)/(s-t),g=y*y,m=g*y,f=-d*m+2*d*g-d*y,x=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*y+1,_=(-1-p)*m+(1.5+p)*g+.5*y,v=p*m-p*g;for(let I=0;I!==o;++I)r[I]=f*a[h+I]+x*a[c+I]+_*a[l+I]+v*a[u+I];return r}},Nc=class extends Cs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Oc=class extends Cs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Rn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Oa(t,this.TimeBufferType),this.values=Oa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Oa(e.times,Array),values:Oa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Oc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Nc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Uc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ba:t=this.InterpolantFactoryMethodDiscrete;break;case ka:t=this.InterpolantFactoryMethodLinear;break;case Tl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ba;case this.InterpolantFactoryMethodLinear:return ka;case this.InterpolantFactoryMethodSmooth:return Tl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Xv(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Tl,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,d=u-n,p=u+n;for(let y=0;y!==n;++y){let g=t[u+y];if(g!==t[d+y]||g!==t[p+y]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let p=0;p!==n;++p)t[d+p]=t[u+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=ka;var zi=class extends Rn{};zi.prototype.ValueTypeName="bool";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=Ba;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Fc=class extends Rn{};Fc.prototype.ValueTypeName="color";var Bc=class extends Rn{};Bc.prototype.ValueTypeName="number";var kc=class extends Cs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Un.slerpFlat(r,0,a,c-o,a,c,l);return r}},Tr=class extends Rn{InterpolantFactoryMethodLinear(e){return new kc(this.times,this.values,this.getValueSize(),e)}};Tr.prototype.ValueTypeName="quaternion";Tr.prototype.DefaultInterpolation=ka;Tr.prototype.InterpolantFactoryMethodSmooth=void 0;var Gi=class extends Rn{};Gi.prototype.ValueTypeName="string";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=Ba;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var Hc=class extends Rn{};Hc.prototype.ValueTypeName="vector";var zc=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],y=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return y}return null}}},Yv=new zc,Gc=class{constructor(e){this.manager=e!==void 0?e:Yv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Gc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ar=class extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Rr=class extends Ar{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},tc=new ht,Sf=new L,wf=new L,Vc=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mr,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Sf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Sf),wf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wf),t.updateMatrixWorld(),tc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(tc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Wc=class extends Vc{constructor(){super(new ja(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vi=class extends Ar{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new Wc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},fo=class extends Ar{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Qc="\\[\\]\\.:\\/",qv=new RegExp("["+Qc+"]","g"),eh="[^"+Qc+"]",Kv="[^"+Qc.replace("\\.","")+"]",Zv=/((?:WC+[\/:])*)/.source.replace("WC",eh),Jv=/(WCOD+)?/.source.replace("WCOD",Kv),jv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",eh),Qv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",eh),eM=new RegExp("^"+Zv+Jv+jv+Qv+"$"),tM=["material","materials","bones","map"],$c=class{constructor(e,t,n){let s=n||dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},dt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(qv,"")}static parseTrackName(e){let t=eM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);tM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};dt.Composite=$c;dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray];dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ew=new Float32Array(1);var Ps=class{constructor(e,t,n=0,s=1/0){this.ray=new fr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new pr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Xc(e,this,n,t),n.sort(Ef),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Xc(e[s],this,n,t);return n.sort(Ef),n}};function Ef(i,e){return i.distance-e.distance}function Xc(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,a=s.length;r<a;r++)Xc(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yc);function Cr(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Tt,c=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(u.morphAttributes[p])}if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0,u=[];for(let d=0;d<i.length;++d){let p=i[d].index;for(let y=0;y<p.count;++y)u.push(p.getX(y)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Zf(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let p=[];for(let g=0;g<a[h].length;++g)p.push(a[h][g][d]);let y=Zf(p);if(!y)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(y)}}return l}function Zf(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}let a=new e(r),o=0;for(let c=0;c<i.length;++c)a.set(i[c].array,o),o+=i[c].array.length;let l=new Dt(a,t,n);return s!==void 0&&(l.gpuType=s),l}function xo(i){return i.w*.95/2}function vo(i){return i.h*.95/2}function th(i){let e=document.createElement("canvas");e.width=i,e.height=i;let t=e.getContext("2d"),n=t.createImageData(i,i),s=n.data;for(let a=0;a<s.length;a+=4){let o=Math.floor(128+(Math.random()-.5)*80);s[a]=s[a+1]=s[a+2]=o,s[a+3]=255}t.putImageData(n,0,0);let r=new As(e);return r.wrapS=r.wrapT=hr,r.repeat.set(4,4),r.needsUpdate=!0,r}function Jf(i,e,t,n){let s=i.getAttribute("position");if(!s)return;let r=s.count,a=new Float32Array(r*3);for(let o=0;o<r;o++)a[o*3]=e,a[o*3+1]=t,a[o*3+2]=n;i.setAttribute("color",new Dt(a,3))}function nh(i){let e=new wt,t=xo(i),n=vo(i),s=new jt(.95,.35,.95),r=th(64),a=.88,o=.02,l=[];e.userData.swayingFoliage=[];let c=new ln({color:4007959,roughness:.9});c.bumpMap=r,c.bumpScale=.12;let h=new ln({color:2972205,roughness:.85});h.bumpMap=r,h.bumpScale=.18;let u=new gn(.12,.14,1,6),d=new yn(.45,.9,5),p=new yn(.34,.45,5),y=new yn(.23,.4,5),g=.12;function m(C,R,P){let B=P+.02,Z=[[C-g,B,R-g],[C+g,B,R+g],[C-g,B,R+g],[C+g,B,R-g],[C-g+.06,B,R-g+.06],[C+g-.06,B,R+g-.06],[C-g+.06,B,R+g-.06],[C+g-.06,B,R-g+.06]],Q=new Float32Array(Z.length*3);for(let K=0;K<Z.length;K++)Q[K*3]=Z[K][0],Q[K*3+1]=Z[K][1],Q[K*3+2]=Z[K][2];let V=new Tt;return V.setAttribute("position",new Dt(Q,3)),V}let f=0;for(let C=0;C<i.h;C++)for(let R=0;R<i.w;R++)i.path[C][R]&&f++;let x=new ln({color:16777215,roughness:a,metalness:o,bumpMap:r,bumpScale:.12}),_=new to(s,x,f);_.userData.tileGridGround=!0,_.userData.insideTileGx=new Uint16Array(f),_.userData.insideTileGy=new Uint16Array(f),_.castShadow=!1,_.receiveShadow=!0,_.frustumCulled=!1;let v=[],I=[],M=[],w=[],N=new Ut,b=new He,E=new ht,F=new Un,Y=new ws,J=new L,D=new L(1,1,1),H=0;for(let C=0;C<i.h;C++)for(let R=0;R<i.w;R++){let P=i.type[C][R],B=i.height[C][R],Z=Vs[P],Q=.35+B*.35,V=Q/2+.35/2,K=R*.95-t+.95/2,ae=C*.95-n+.95/2,de=(Z>>16&255)/255,he=(Z>>8&255)/255,ye=(Z&255)/255,xe=de,Ae=he,De=ye;if(P===re.PATH||P===re.TREE||P===re.ROCK){let A=Math.random()*.45;xe=de*(1-A)+.42*A,Ae=he*(1-A)+.26*A,De=ye*(1-A)+.14*A}(P===re.TREE||P===re.ROCK)&&(xe*=.5,Ae*=.5,De*=.5);let z=1+(Math.random()-.5)*.12,ut=Math.min(1,xe*z),Re=Math.min(1,Ae*z),Ie=Math.min(1,De*z);if(i.path[C][R])_.userData.insideTileGx[H]=R,_.userData.insideTileGy[H]=C,b.setRGB(ut,Re,Ie),_.setColorAt(H,b),N.position.set(K,Q/2,ae),N.updateMatrix(),_.setMatrixAt(H,N.matrix),H++;else{let Me=s.clone();if(N.position.set(K,Q/2,ae),N.updateMatrix(),Me.applyMatrix4(N.matrix),Jf(Me,ut,Re,Ie),v.push(Me),P===re.TREE)w.push(m(K,ae,V));else if(P===re.WATER){let Ve=Vs[re.WATER],Le=(Ve>>16&255)/255,A=(Ve>>8&255)/255,S=(Ve&255)/255,G=1+(Math.random()-.5)*.12,ee=new Qt(.95,.95);ee.rotateX(-Math.PI/2),N.position.set(K,V+.02,ae),N.rotation.set(0,0,0),N.scale.set(1,1,1),N.updateMatrix(),ee.applyMatrix4(N.matrix),Jf(ee,Math.min(1,Le*G),Math.min(1,A*G),Math.min(1,S*G)),I.push(ee)}else if(P===re.ROCK){let Ve=(Le,A,S)=>{let G=new co(Le,0);Y.set(Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2),F.setFromEuler(Y),J.set(K+A,V+Le-.2,ae+S),E.compose(J,F,D),G.applyMatrix4(E),M.push(G)};Ve(.32+Math.random()*.14,(Math.random()-.5)*.15,(Math.random()-.5)*.15),Ve(.2+Math.random()*.12,(Math.random()-.5)*.25,(Math.random()-.5)*.25),Ve(.12+Math.random()*.12,(Math.random()-.5)*.28,(Math.random()-.5)*.28)}}}_.instanceMatrix.needsUpdate=!0,_.instanceColor&&(_.instanceColor.needsUpdate=!0),e.add(_);let $=C=>{for(let R=0;R<C.length;R++)C[R].dispose()};if(v.length>0){let C=Cr(v);if($(v),C){let R=new ln({color:16777215,vertexColors:!0,roughness:a,metalness:o,bumpMap:r,bumpScale:.12}),P=new be(C,R);P.receiveShadow=!0,P.castShadow=!1,P.frustumCulled=!1,P.userData.mergedOutsidePick=!0,e.add(P)}}if(w.length>0){let C=Cr(w);if($(w),C){let R=new no(C,new xr({color:855309,linewidth:1}));R.frustumCulled=!1,R.raycast=function(){},e.add(R)}}if(M.length>0){let C=Cr(M);if($(M),C){let R=new ln({color:6974058,roughness:.9});R.bumpMap=r,R.bumpScale=.2;let P=new be(C,R);P.castShadow=!0,P.frustumCulled=!1,P.raycast=function(){},e.add(P)}}if(I.length>0){let C=Cr(I);if($(I),C){let R=new ln({color:16777215,vertexColors:!0,roughness:.08,metalness:.45,transparent:!0,opacity:.94,bumpMap:r,bumpScale:.03}),P=new be(C,R);P.receiveShadow=!0,P.frustumCulled=!1,P.raycast=function(){},e.add(P)}}for(let C=0;C<i.h;C++)for(let R=0;R<i.w;R++){if(i.path[C][R]||i.type[C][R]!==re.TREE)continue;let P=i.height[C][R],Z=(.35+P*.35)/2+.35/2,Q=R*.95-t+.95/2,V=C*.95-n+.95/2,K=new wt;K.userData={gx:R,gy:C},K.position.set(Q,Z,V);let ae=R===0||R===i.w-1||C===0||C===i.h-1,de=ae?.75+Math.random()*.35:.5+Math.random()*.2,he=new be(u,c);he.scale.y=de,he.position.set(0,de/2,0),he.castShadow=!0,he.raycast=function(){},K.add(he);let ye=ae?.52:.45,xe=ae?1.05:.9,Ae=.12,De=xe*.5,z=xe*.45,ut=xe*.4,Re=new wt;Re.position.set(0,de,0);let Ie=new be(d,h);Ie.scale.set(ye/.45,De/.9,ye/.45),Ie.position.set(0,De/2,0),Ie.castShadow=!0,Ie.raycast=function(){},Re.add(Ie);let Me=new be(p,h);Me.scale.set(ye*.75/.34,z/.45,ye*.75/.34),Me.position.set(0,De-Ae+z/2,0),Me.castShadow=!0,Me.raycast=function(){},Re.add(Me);let Ve=new be(y,h);Ve.scale.set(ye*.5/.23,ut/.4,ye*.5/.23),Ve.position.set(0,De-Ae+z-Ae+ut/2,0),Ve.castShadow=!0,Ve.raycast=function(){},Re.add(Ve),K.add(Re);let Le=(i.w-1)*.5,A=(i.h-1)*.5,S=Math.max(3.5,Math.min(i.w,i.h)*.24);(R-Le)**2+(C-A)**2<=S*S&&Math.random()<.35&&e.userData.swayingFoliage.push({group:Re,phase:Math.random()*Math.PI*2}),e.add(K),l.push(K)}return e.userData.treeGroups=l,e}function nM(){let i=document.createElement("canvas");i.width=4,i.height=512;let e=i.getContext("2d"),t=e.createLinearGradient(0,0,0,512);t.addColorStop(0,"#6a9fd4"),t.addColorStop(.48,"#9ec4e8"),t.addColorStop(.82,"#c8daf0"),t.addColorStop(1,"#dce8f4"),e.fillStyle=t,e.fillRect(0,0,4,512);let n=new As(i);return n.colorSpace=Et,n.magFilter=$t,n.minFilter=$t,n}function iM(){let i=new yr;i.add(new Rr(12114168,3817520,1));let e=new Vi(16775920,.72);e.position.set(.6,1.9,.5),i.add(e);let t=new Vi(10533080,.14);return t.position.set(-1.2,.8,-1),i.add(t),i}var Mo=class{constructor(e,t){this.container=e,this.world=t,this.hw=xo(t),this.hh=vo(t),this.scene=new yr;let n=12899556;this.scene.background=nM(),this.scene.fog=new eo(n,38,100),this.camera=new Xt(50,e.clientWidth/e.clientHeight,.1,200);let s=new fo(16054527,.24);this.scene.add(s);let r=new Rr(11587824,4016692,.36);this.scene.add(r);let a=new Vi(16775406,1.28);a.position.set(32,48,22),a.castShadow=!0,a.shadow.mapSize.width=1024,a.shadow.mapSize.height=1024,a.shadow.camera.near=1,a.shadow.camera.far=120,a.shadow.camera.left=-50,a.shadow.camera.right=50,a.shadow.camera.top=50,a.shadow.camera.bottom=-50,a.shadow.normalBias=.02,this.scene.add(a),this.sun=a;let o=new Vi(12636392,.14);o.position.set(-24,28,-18),this.scene.add(o),this.tilesGroup=nh(t),this.scene.add(this.tilesGroup),this._calmTerrainIBL(),this.renderer=new gr({antialias:!1,powerPreference:"high-performance"}),this.renderer.setSize(e.clientWidth,e.clientHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=po,this.renderer.shadowMap.autoUpdate=!1,this.renderer.shadowMap.needsUpdate=!0,this.renderer.toneMapping=qc,this.renderer.toneMappingExposure=1.1,e.appendChild(this.renderer.domElement);let l=new Ts(this.renderer);this.scene.environment=l.fromScene(iM(),.04).texture,l.dispose(),this.needsRender=!0,this.lastInteractionTime=0,this.lastIdleFrameTime=0,this._frameCount=0,this._loopActive=!1,this._cameraActive=!1,this._tweensActive=!1,this._damagedIdleActive=!1,this.pulseMaterials=[],this._resize=this._resize.bind(this),this._animate=this._animate.bind(this),window.addEventListener("resize",this._resize),this._resize()}worldPos(e,t,n){let s=this.world,a=(.35+s.height[t][e]*.35)/2+.35/2,o=n||new L;return o.set(e*.95-this.hw+.95/2,a,t*.95-this.hh+.95/2),o}surfaceY(e,t){return(.35+this.world.height[t][e]*.35)/2+.35/2}markDirty(){this.needsRender=!0,this._loopActive||this._animate()}setPresentationActive({camera:e=this._cameraActive,tweens:t=this._tweensActive}={}){this._cameraActive=e,this._tweensActive=t,(e||t)&&this.markDirty()}invalidateShadows(){this.renderer.shadowMap.needsUpdate=!0,this.markDirty()}requestRender(){this.needsRender=!0,this.lastInteractionTime=performance.now(),this._loopActive||this._animate()}setWorld(e){this.scene.remove(this.tilesGroup),this.tilesGroup.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(s=>s.dispose())}),this.world=e,this.hw=xo(e),this.hh=vo(e),this.tilesGroup=nh(e),this.scene.add(this.tilesGroup),this._calmTerrainIBL(),this.requestRender()}_calmTerrainIBL(){this.tilesGroup.traverse(e=>{if(!e.isMesh||!e.material)return;(Array.isArray(e.material)?e.material:[e.material]).forEach(n=>{"envMapIntensity"in n&&(n.envMapIntensity=.22)})})}_resize(){let e=this.container.clientWidth,t=this.container.clientHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.requestRender()}start(){this._loopActive=!0,this._animate()}_animate(e=0){let t=this.tilesGroup.userData&&this.tilesGroup.userData.swayingFoliage;this.lastInteractionTime===0&&(this.lastInteractionTime=e);let n=e-this.lastInteractionTime>500,s=this.pulseMaterials.length>0,r=t&&t.length>0&&!n,a=this._cameraActive||this._tweensActive;if(r){let h=e*.0017;for(let u=0;u<t.length;u++){let{group:d,phase:p}=t[u];d.rotation.z=Math.sin(h+p)*.14,d.rotation.x=Math.sin(h*.79+p*1.55)*.09,d.rotation.y=Math.sin(h*.62+p*.9)*.055}this.needsRender=!0}this.onFrame&&this.onFrame(e),this._frameCount++;let o=()=>{if(!this.needsRender)return;let h=.6+.4*Math.sin(e*.004),u=this.pulseMaterials;for(let d=0;d<u.length;d++){let p=d%2===0?.4:.7;u[d].opacity=p*h}this.renderer.render(this.scene,this.camera),this.renderer.shadowMap.needsUpdate=!1,this.needsRender=!1};!n&&!a&&this._frameCount%2===0&&(this.needsRender=!0);let l=a&&this._cameraActive&&!this._tweensActive&&this._frameCount%2!==0;if(n&&!a){let h=this._damagedIdleActive?0:100;(s||this.needsRender)&&e-this.lastIdleFrameTime>=h&&(this.lastIdleFrameTime=e,o())}else l||o();r||s||!n||a||this._damagedIdleActive?(this._loopActive=!0,requestAnimationFrame(this._animate)):this._loopActive=!1}};var bo=new Map,So=new Map;function st(i,e){return bo.has(i)||bo.set(i,e()),bo.get(i)}function Nn(i,e){if(!So.has(i)){let t=e();t.color&&(t.userData.baseColor=t.color.clone()),So.set(i,t)}return So.get(i)}function Ds(i){if(!i?.isMesh||!i.material?.color)return null;if(i.userData.ownsMaterial)return i.material;let e=i.material;if(dh(e)){let t=e.userData.baseColor;t&&e.color.copy(t),i.material=e.clone(),t&&(i.material.userData.baseColor=t.clone()),i.userData.ownsMaterial=!0}return i.material}function sM(i,e,t){return!e||!i||(i.bumpMap=e,i.bumpScale=t,"envMapIntensity"in i&&(i.envMapIntensity=.85)),i}function rM(i,e,t=.5,n=.2){let s=t*10|0,r=n*10|0;return`${i}:${e}:${s}:${r}`}function Cn(i,e,t,{roughness:n=.5,metalness:s=.2,bumpScale:r=.1}={}){let a=e instanceof He?e.getHex():e,o=rM(i,a,n,s),l=Nn(o,()=>new ln({color:a,metalness:s,roughness:n}));return sM(l,t,r)}var ih=Nn("eyeWhite",()=>new lt({color:16250363})),sh=Nn("pupil",()=>new lt({color:1314841})),wo=Nn("shine",()=>new lt({color:16777215})),rh=Nn("liner",()=>new lt({color:2365472})),ah=Nn("lip",()=>new lt({color:13593216})),oh=Nn("cheek",()=>new lt({color:16751531,transparent:!0,opacity:.42})),lh=Nn("mouth",()=>new lt({color:5913136})),ch=3,hh=6,Wi=10,$i=8,jf=10,uh=10;function Qf(i){for(let e of bo.values())if(e===i)return!0;return!1}function dh(i){for(let e of So.values())if(e===i)return!0;return i===ih||i===sh||i===wo||i===rh||i===ah||i===oh||i===lh}var aM=.62;function Kn(i,e=!0){i.castShadow=e,i.receiveShadow=!1}function _i(i,e){let t=(i>>16&255)/255,n=(i>>8&255)/255,s=(i&255)/255,r=1+(Math.random()-.5)*e;return new He(Math.min(1,t*r),Math.min(1,n*r),Math.min(1,s*r))}function Zn(i,e=aM){let t=i instanceof He?i:new He(i);return new He(Math.max(0,t.r*e),Math.max(0,t.g*e),Math.max(0,t.b*e))}function ep(i,e,t,n){let s=vn[e]||vn.knight,r=Zn(_i(s.primary,.08)),a=Zn(_i(s.secondary,.08)),o=vt[e]&&vt[e].gender||"male",l=o==="female",c=t??4006676,h=Zn(_i(s.skin!=null?s.skin:15250592,.06)),u=Zn(_i(c,.08)),d=Cn("torso",r.getHex(),n,{metalness:.3,roughness:.48,bumpScale:.1}),p=Cn("leg",a.getHex(),n,{metalness:.24,roughness:.55,bumpScale:.1}),y=d,g=Cn("skin",h.getHex(),n,{metalness:.05,roughness:.72,bumpScale:.05}),m=new wt,f=.28,x=.28,_=.12,v=.2,I=.06,M=.1,w=(O,ie)=>st(`cap:${O}:${ie}`,()=>new br(O,ie,ch,hh)),N=(O,ie,le,ue,fe)=>{let se=new wt;se.position.set(O,ie,0);let Ee=Math.max(.02,ue-le*2),Fe=new be(w(le,Ee),fe);return Fe.position.y=-ue/2,Kn(Fe),se.add(Fe),m.add(se),{pivot:se,mesh:Fe,length:ue}},b=f,E=l?.044:.05,F=N(-.06,f,E,b,p),Y=N(.06,f,E,b,p),J=Cn("foot",Zn(a,.8).getHex(),n,{metalness:.1,roughness:.8,bumpScale:.08}),D=st("foot",()=>new jt(.075,.045,.12)),H=O=>{let ie=new be(D,J);ie.position.set(0,-b/2+.022,.03),O.mesh.add(ie)};H(F),H(Y);let $=_/v,C;if(l){let O=new be(st("hips",()=>new on(.086,Wi,$i)),p);O.scale.set(1.3,.62,.95),O.position.set(0,f-.004,0),Kn(O),m.add(O)}else{let O=new be(w(.078,.04),p);O.rotation.z=Math.PI/2,O.scale.set(1,1.25,.75),O.position.set(0,f+.02,0),Kn(O),m.add(O)}if(l){C=.058;let O=[new ge(.06,0),new ge(.058,.03),new ge(.07,.09),new ge(.09,.15),new ge(.086,.2),new ge(.088,.28)],ie=new be(st("fTorso",()=>new Mr(O,jf)),d);if(ie.position.set(0,f,0),ie.scale.z=$+.06,Kn(ie),m.add(ie),s.apron==null){let se=f+.148,Ee=.042,Fe=st("bust",()=>new on(.048,Wi,$i));for(let Je of[-1,1]){let Pe=new be(Fe,d);Pe.position.set(Je*.033,se,Ee),Pe.scale.set(1,.86,.62),m.add(Pe)}}let le=st("fShoulder",()=>new on(.092,Wi,$i,0,Math.PI*2,0,Math.PI*.6)),ue=new be(le,d);ue.position.set(0,f+x-.02,0),ue.scale.set(1,.55,$+.1),Kn(ue),m.add(ue)}else{C=.072;let O=new be(st("mTorso",()=>new gn(.108,C,x,uh,1)),d);O.position.set(0,f+x/2,0),O.scale.z=$,Kn(O),m.add(O);let ie=st("mShoulder",()=>new on(.11,Wi,$i,0,Math.PI*2,0,Math.PI*.6)),le=new be(ie,d);le.position.set(0,f+x-.02,0),le.scale.set(1.05,.6,$+.08),Kn(le),m.add(le)}let R=.22,P=l?.03:.036,B=f+x-.02,Z=(l?.086:v/2)+P-.01,Q=N(-Z,B,P,R,y),V=N(Z,B,P,R,y),K=st("hand",()=>new on(.042,6,5)),ae=O=>{let ie=new be(K,g);ie.position.set(0,-R/2,0),O.mesh.add(ie)};if(ae(Q),ae(V),s.cape!=null){let O=v*1.95,ie=O*.6,le=f+x*.28,ue=new ki;ue.moveTo(-ie/2,le/2),ue.lineTo(ie/2,le/2),ue.lineTo(O/2,-le/2),ue.lineTo(-O/2,-le/2),ue.closePath();let fe=Zn(_i(s.cape,.08)).getHex(),se=Cn("cape",fe,n,{metalness:.15,roughness:.8,bumpScale:.12});se.side=Mt;let Ee=new be(new Rs(ue),se);Ee.position.set(0,f+x-le/2+.05,-_/2-.02),Ee.rotation.y=Math.PI,m.add(Ee);let Fe=.055,Je=f+x+.02,Pe=.02,oe=v/2+I*.5,U=st("capePad",()=>new on(Fe,8,6,0,Math.PI*2,0,Math.PI*.55)),ce=new be(U,se);ce.position.set(-oe,Je,Pe),ce.rotation.x=-Math.PI*.35,ce.rotation.z=Math.PI*.5,ce.scale.set(1.2,.85,1.1),m.add(ce);let pe=new be(U,se);pe.position.set(oe,Je,Pe),pe.rotation.x=-Math.PI*.35,pe.rotation.z=-Math.PI*.5,pe.scale.set(1.2,.85,1.1),m.add(pe)}if(s.belt!=null){let O=Cn("belt",Zn(_i(s.belt,.08)).getHex(),n,{metalness:.2,roughness:.6,bumpScale:.1}),ie=C+.014,le=new be(st("belt",()=>new gn(1,1,.03,uh)),O);le.scale.set(ie,1,ie*($+(l?.06:0))),le.position.set(0,f+(l?.05:.04),0),m.add(le)}if(s.apron!=null){let O=Cn("apron",Zn(_i(s.apron,.08)).getHex(),n,{metalness:.08,roughness:.75,bumpScale:.12});if(O.side=Mt,l){let ie=f+.235,le=f-.02,ue=ie-le,fe=Math.PI*.9,se=st("fApron",()=>new gn(.11,.118,1,16,1,!0,-fe/2,fe)),Ee=new be(se,O);Ee.scale.set(.84,ue,.7),Ee.position.set(0,(ie+le)/2,.008),m.add(Ee);let Fe=f+x+.02,Je=.05,Pe=Fe-ie+.02,oe=st("strap",()=>new jt(.02,1,.01));for(let U of[-1,1]){let ce=new be(oe,O);ce.scale.y=Pe,ce.position.set(U*Je,(ie+Fe)/2,.062),ce.rotation.x=-.12,m.add(ce)}}else{let ie=v*.95,le=f*.85,ue=f+.2,fe=new be(st("mApron",()=>new Qt(ie,le)),O);fe.position.set(0,ue-le/2,_/2+.02),m.add(fe);let se=f+x+.02,Ee=v/2+I*.2,Fe=se-ue,Je=st("mStrap",()=>new jt(.018,1,.008)),Pe=new be(Je,O);Pe.scale.y=Fe,Pe.position.set(-Ee,(ue+se)/2,_/2+.015),m.add(Pe);let oe=new be(Je,O);oe.scale.y=Fe,oe.position.set(Ee,(ue+se)/2,_/2+.015),m.add(oe)}}let de=new be(st("neck",()=>new gn(.032,.038,.06,8)),g);de.position.set(0,f+x+.02,0),Kn(de),m.add(de);let he=st("head",()=>new on(M,Wi,$i)),ye=new be(he,g);ye.position.set(0,f+x+M,0),ye.scale.set(.92,1.05,.96),Kn(ye),m.add(ye);let xe=M,Ae=(O,ie)=>Math.sqrt(Math.max(1e-4,xe*xe-O*O-ie*ie)),De=(O,ie,le=12)=>new be(st(`circle:${le}:${O}`,()=>new oo(O,le)),ie),z=l?[5935062,5223305,10120150,4633545,11891263,8215263]:[4863270,3747871,3099192,3820124,5913124],ut=z[Math.floor(Math.random()*z.length)],Re=Nn(`iris:${ut}`,()=>new lt({color:ut})),Ie=Cn("brow",u.getHex(),null,{metalness:0,roughness:.85,bumpScale:0}),Me=xe*.36,Ve=xe*.12,Le=xe*(l?.135:.1),A=l?1.02:1,S=l?1.35:.78;for(let O of[-1,1]){let ie=new wt;ie.position.set(O*Me,Ve,Ae(Me,Ve)+.002),ye.add(ie);let le=De(Le,ih);le.scale.set(A,S,1),ie.add(le);let ue=De(xe*(l?.095:.07),Re);ue.position.set(0,-xe*.012,.001),ue.scale.set(1,Math.min(1.2,S),1),ie.add(ue);let fe=De(xe*(l?.05:.038),sh);fe.position.set(0,-xe*.012,.002),fe.scale.set(1,Math.min(1.2,S),1),ie.add(fe);let se=De(xe*.028,wo);if(se.position.set(-O*xe*.03,xe*.035,.003),ie.add(se),l){let Pe=De(xe*.015,wo);Pe.position.set(O*xe*.025,-xe*.03,.003),ie.add(Pe)}let Ee=new be(new jt(Le*2*A*.98,xe*(l?.03:.022),.004),rh);Ee.position.set(0,Le*S*.82,.003),Ee.rotation.z=O*(l?-.03:0),ie.add(Ee);let Fe=Ve+xe*(l?.32:.3),Je=new be(new jt(xe*.26,xe*(l?.026:.05),.02),Ie);Je.position.set(O*Me,Fe,Ae(Me,Fe)+.002),Je.rotation.z=O*(l?-.14:-.05),ye.add(Je)}let G=-xe*.05,ee=st("nose",()=>new on(.045,6,5)),te=new be(ee,g);te.position.set(0,G,Ae(0,G)),te.scale.set(.85,.7,.55),ye.add(te);let ne=-xe*.3;if(l){let O=De(xe*.08,ah,14);O.position.set(0,ne,Ae(0,ne)+.002),O.scale.set(1.15,.5,1),ye.add(O);for(let ie of[-1,1]){let le=ie*xe*.42,ue=-xe*.1,fe=De(xe*.072,oh,10);fe.position.set(le,ue,Ae(le,ue)+.001),fe.scale.set(1,.75,1),ye.add(fe)}}else{let O=new be(st("mouthBox",()=>new jt(.4,.05,.02)),lh);O.scale.set(xe,xe,xe),O.position.set(0,ne,Ae(0,ne)+.002),ye.add(O)}let Te=Cn("hair",u.getHex(),n,{metalness:.05,roughness:.85,bumpScale:.15}),ve=st("bang",()=>new yn(.22,.32,5)),we=O=>{let ie=M*.32,le=M*.22,ue=new be(ve,Te);ue.scale.set(le*.9/.22,ie/.32,le*.9/.22),ue.position.set(-M*.25,M*.22,M*.72),ue.rotation.x=.35,ue.rotation.z=.12,O.add(ue);let fe=new be(ve,Te);fe.scale.set(le/.22,ie/.32,le/.22),fe.position.set(M*.28,M*.18,M*.68),fe.rotation.x=.28,fe.rotation.z=-.1,O.add(fe);let se=new be(ve,Te);se.scale.set(le*.7/.22,ie*.9/.32,le*.7/.22),se.position.set(0,M*.28,M*.78),se.rotation.x=.4,O.add(se)},Ue=st("hairTop",()=>new on(.92,Wi,$i,0,Math.PI*2,0,Math.PI*.52)),$e=st("hairLong",()=>new br(.55,1.5,ch,hh));if(o==="female"){let O=new be(Ue,Te);O.scale.setScalar(M),O.position.set(0,M*.28,-M*.18),O.rotation.y=.06,O.rotation.x=-.04,ye.add(O);let ie=new be($e,Te);ie.scale.set(M*1.05,M,M*.5),ie.position.set(0,-M*.6,-M*.95),ie.rotation.z=.03,ye.add(ie),we(ye)}else{let O=new be(Ue,Te);O.scale.setScalar(M*.9),O.position.set(0,M*.4,-M*.12),O.rotation.y=.08,O.rotation.x=-.05,O.rotation.z=.04,ye.add(O);let ie=new be(st("hairSides",()=>new on(.75,8,6,Math.PI*.2,Math.PI*.6,0,Math.PI*.4)),Te);ie.scale.setScalar(M),ie.position.set(0,M*.1,-M*.05),ie.rotation.y=.1,ye.add(ie),we(ye)}if(s.horns!=null){let O=Cn("horns",Zn(_i(s.horns,.08)).getHex(),n,{metalness:.12,roughness:.62,bumpScale:.1}),ie=new be(st("hornBand",()=>new uo(1.12,.22,6,16)),O);ie.scale.setScalar(M),ie.rotation.x=Math.PI/2,ie.position.y=M*.42,ye.add(ie);let le=M*.48,ue=M*2.55,fe=st("horn",()=>new yn(.48,2.55,6)),se=new be(fe,O);se.scale.set(le/.48,ue/2.55,le/.48),se.position.set(-M*1.02,M*.18,M*.02),se.rotation.set(-.42,-.32,.58),ye.add(se);let Ee=new be(fe,O);Ee.scale.set(le/.48,ue/2.55,le/.48),Ee.position.set(M*1.02,M*.18,M*.02),Ee.rotation.set(-.42,.32,-.58),ye.add(Ee)}return m.userData.leftLeg=F.pivot,m.userData.rightLeg=Y.pivot,m.userData.leftArm=Q.pivot,m.userData.rightArm=V.pivot,m.userData.head=ye,m.userData.woundedSeverity=0,m.userData.damageRatio=0,m.userData.facingYaw=0,m.userData.poseMode="idle",m.rotation.order="YXZ",m}function jn(i,e){i.userData.facingYaw=e,i.rotation.order="YXZ",i.rotation.y=e}function Jn(i,e,t=0){let n=i.userData.facingYaw??i.rotation.y;i.userData.facingYaw=n,i.rotation.order="YXZ",i.rotation.set(e,n,t)}function tp(i){i.userData.woundedSeverity=0,i.userData.damageRatio=0,Us(i),oM(i)}function ph(i){let e=i.userData;return Math.max(e.woundedSeverity||0,(e.damageRatio||0)*.25)}function mh(i){return ph(i)*.07}function gh(i,e=0){Us(i,e)}function Us(i,e=0){let t=i.userData,n=ph(i),s=t.baseY??i.position.y,r=t.damageRatio||0;if(n<=0&&r<=0){Jn(i,0,0),i.scale.setScalar(1),i.position.y=s,t.head&&t.head.rotation.set(0,0,0),t.leftArm&&t.leftArm.rotation.set(0,0,0),t.rightArm&&t.rightArm.rotation.set(0,0,0),t.leftLeg&&t.leftLeg.rotation.set(0,0,0),t.rightLeg&&t.rightLeg.rotation.set(0,0,0);return}let a=n*.24,o=n*.05;i.scale.setScalar(1-n*.045),i.position.y=s-n*.07,t.head&&(t.head.rotation.x=n*.28,t.head.rotation.z=-n*.06),t.leftArm&&(t.leftArm.rotation.x=n*.48,t.leftArm.rotation.z=n*.14,t.leftArm.rotation.y=n*.1),t.rightArm&&(t.rightArm.rotation.x=n*.62,t.rightArm.rotation.y=-n*.38,t.rightArm.rotation.z=-n*.08),t.leftLeg&&(t.leftLeg.rotation.x=-n*.16,t.leftLeg.rotation.z=n*.05),t.rightLeg&&(t.rightLeg.rotation.x=-n*.11,t.rightLeg.rotation.z=-n*.04),e&&r>0&&(a+=Math.sin(e)*.024*r,o+=Math.sin(e*.71+1.2)*.016*r,i.position.y-=Math.max(0,Math.sin(e*.88))*.014*Math.max(n,r*.5),t.head&&(t.head.rotation.x+=Math.sin(e*1.12)*.038*r),t.rightArm&&n>.15&&(t.rightArm.rotation.y+=Math.sin(e*1.35)*.045*n),t.leftLeg&&n>.25&&(t.leftLeg.rotation.x+=Math.sin(e*.85)*.028*n)),Jn(i,a,o)}function np(i,e,t=.5){Us(i);let n=Math.sin(e*Math.PI),s=t*n,r=i.userData.flinchSide||1,a=i.userData;Jn(i,i.rotation.x-s*.42,i.rotation.z+r*s*.2),i.position.y-=s*.065,a.head&&(a.head.rotation.x+=s*.58,a.head.rotation.z-=r*s*.16),a.leftArm&&(a.leftArm.rotation.x+=s*.28,a.leftArm.rotation.z+=r*s*.38),a.rightArm&&(a.rightArm.rotation.x-=s*.18,a.rightArm.rotation.z-=r*s*.22),a.leftLeg&&(a.leftLeg.rotation.x+=s*.14),a.rightLeg&&(a.rightLeg.rotation.x-=s*.1)}function ip(i,e){let t=Math.max(0,Math.min(1,e)),n=1-t*.2;i.traverse(s=>{let r=Ds(s);if(!r?.color)return;s.userData.originalColor||(s.userData.originalColor=(r.userData.baseColor||r.color).clone());let a=s.userData.originalColor;r.color.setRGB(Math.min(1,a.r*n+t*.05),a.g*n*(1-t*.1),a.b*n*(1-t*.12))})}function oM(i){i.traverse(e=>{if(!e.isMesh||!e.userData.originalColor)return;let t=Ds(e);t?.color&&t.color.copy(e.userData.originalColor)})}function Pr(i){let e=ph(i);i.userData.baseY=e>0?i.position.y+mh(i):i.position.y,e>0&&Us(i)}function sp(i,e){let t=i.userData;if(!t.leftLeg)return 0;let n=t.woundedSeverity||0,s=t.damageRatio||0,r=Math.max(n,s*.25),a=1-r*.55,o=e*Math.PI*4,l=Math.sin(o),c=Math.max(0,-l),h=Math.max(0,l),u=c*c,d=h*h,p=r?-r*.16:0,y=r?-r*.11:0,g=l*.52*a;t.leftLeg.rotation.x=p+g-u*.22*a,t.rightLeg.rotation.x=y-g-d*.22*a,r>0?(t.leftLeg.rotation.z=r*.05,t.rightLeg.rotation.z=-r*.04):(t.leftLeg.rotation.z=l*.025*a,t.rightLeg.rotation.z=-l*.025*a);let m=Math.sin(o+Math.PI)*.5*a,f=Math.sin(o)*.5*a;t.leftArm&&(t.leftArm.rotation.x=r*.48+m,t.leftArm.rotation.y=r*.1-m*.06,t.leftArm.rotation.z=r*.14+m*.04),t.rightArm&&(t.rightArm.rotation.x=r*.62+f,t.rightArm.rotation.y=-r*.38+f*.06,t.rightArm.rotation.z=-r*.08-f*.04);let x=.28*a;return Jn(i,r*.24+x,r*.05+Math.sin(o)*.016*a),t.head&&(t.head.rotation.x=r*.28-x*.35,t.head.rotation.z=r*-.06),l*l*.032*a}function rp(i){let e=i.userData;if(e.leftLeg){if((e.woundedSeverity||0)>0){Us(i);return}e.leftLeg.rotation.set(0,0,0),e.rightLeg.rotation.set(0,0,0),e.leftArm.rotation.set(0,0,0),e.rightArm.rotation.set(0,0,0),Jn(i,0,0),e.head&&e.head.rotation.set(0,0,0)}}function ap(i){if(i<=.22)return i/.22*.12;if(i<=.42){let t=(i-.22)/.2;return .12+t*t*(3-2*t)*.88}let e=(i-.42)/.58;return 1-e*e}function op(i,e,{style:t="slash"}={}){let n=i.userData;if(!n.leftArm)return;let s=n.woundedSeverity||0,r=1-s*.45,a=0,o=0;if(e<=.22)a=e/.22;else if(e<=.42)a=1,o=(e-.22)/.2,o=o*o*(3-2*o);else{let f=(e-.42)/.58,x=1-f*f;a=x,o=x}let l=s*.62,c=s*.48,h=s?-s*.16:0,u=s?-s*.11:0,d=s*.28,p=s*.24,y=s*.05;if(t==="thrust"){let x=(a*.25+o*.95)*1.05*r;n.rightArm&&(n.rightArm.rotation.x=l+x,n.rightArm.rotation.y=(s>0?-s*.38:0)-a*.12*r,n.rightArm.rotation.z=-a*.08*r),n.leftArm&&(n.leftArm.rotation.x=c+x*.82,n.leftArm.rotation.y=(s>0?s*.1:0)+a*.08*r),Jn(i,p+(o*.18-a*.06)*r,y),n.leftLeg&&(n.leftLeg.rotation.x=h-o*.22*r),n.rightLeg&&(n.rightLeg.rotation.x=u+o*.28*r),n.head&&(n.head.rotation.x=d-o*.1*r);return}let g=a*-1.15*r,m=o*1.65*r;n.rightArm&&(n.rightArm.rotation.x=l+g+m,n.rightArm.rotation.y=(s>0?-s*.38:0)-a*.42*r+o*.2*r,n.rightArm.rotation.z=-a*.32*r+o*.12*r),n.leftArm&&(n.leftArm.rotation.x=c+a*.42*r-o*.12*r,n.leftArm.rotation.y=(s>0?s*.1:0)+a*.22*r,n.leftArm.rotation.z=(s>0?s*.14:0)+a*.06*r),Jn(i,p+(-a*.1+o*.16)*r,y+(a*.08-o*.05)*r),n.leftLeg&&(n.leftLeg.rotation.x=h+a*.14*r-o*.2*r),n.rightLeg&&(n.rightLeg.rotation.x=u-a*.1*r+o*.24*r),n.head&&(n.head.rotation.x=d+a*.1*r-o*.06*r)}function lp(i){let e=i.userData;if(e.leftArm){if((e.woundedSeverity||0)>0){Us(i);return}e.leftArm.rotation.set(0,0,0),e.rightArm.rotation.set(0,0,0),e.leftLeg.rotation.set(0,0,0),e.rightLeg.rotation.set(0,0,0),e.head&&e.head.rotation.set(0,0,0),Jn(i,0,0)}}var fh=i=>i*i*(3-2*i);function cp(i,e){let t=i.userData;if(!t.leftLeg)return;let n=t.deathFallSide||1,s=t.deathBaseY??t.baseY??i.position.y,r=fh(Math.min(1,e/.14)),a=fh(Math.min(1,Math.max(0,(e-.1)/.42))),o=fh(Math.min(1,Math.max(0,(e-.45)/.55))),l=1-Math.min(1,a*1.5),c=r*l*-.3+a*.65+o*.1,h=n*(r*l*.26+a*.14+o*Math.PI*.47);Jn(i,c,h);let u=a*.2+o*.34;i.position.y=s-u,i.scale.setScalar(1-o*.07);let d=a*.62+o*.38;t.leftLeg.rotation.x=-d+n*o*.18,t.leftLeg.rotation.z=n*(a*.12+o*.05),t.rightLeg.rotation.x=-d*.92-n*o*.12,t.rightLeg.rotation.z=-n*(a*.1+o*.04),t.leftArm.rotation.x=a*.95+o*.55,t.leftArm.rotation.z=n*(a*.58+o*1.05),t.leftArm.rotation.y=a*.28,t.rightArm.rotation.x=a*.78+o*.68,t.rightArm.rotation.z=-n*(a*.42+o*.88),t.rightArm.rotation.y=-a*.2,t.head&&(t.head.rotation.x=r*l*.45+a*.55+o*.22,t.head.rotation.z=-n*(a*.08+o*.28))}function hp(i,e){let t=Math.max(0,Math.min(1,e)),n=1-t*.38;i.traverse(s=>{let r=Ds(s);if(!r?.color)return;s.userData.originalColor||(s.userData.originalColor=(r.userData.baseColor||r.color).clone());let a=s.userData.originalColor;r.color.setRGB(a.r*n,a.g*n*(1-t*.18),a.b*n*(1-t*.24))})}var lM=400;var cM=320,hM=280,uM=780,dM=400,fM=600,pM=3368703,mM=13382451,gM=.02,yh=.35,up={1:new lt({color:pM,side:Mt}),2:new lt({color:mM,side:Mt})},yM=new gn(.035,.035,.4,5);function _M(i){return i===1?Math.PI:0}function dp(i){let e=i.facing;return e&&(e.dx!==0||e.dy!==0)?Math.atan2(e.dx,e.dy):_M(i.player)}var Eo=class{constructor(e,t,n,s){this.view=e,this.state=t,this.bus=n,this.tween=s,this.meshes=new Map,this.bumpMap=th(64),this.cameraFollow=null,this.bordersGroup=new wt,this.view.scene.add(this.bordersGroup),this.borderGeo=this._makeBorderGeometry(.95,gM),this.turnPointer=this._makeTurnPointer(),this.view.scene.add(this.turnPointer),this.facingArrow=this._makeFacingArrow(),this.view.scene.add(this.facingArrow),this._facingMode=!1,this._lastHp=new Map,this.view.onFrame=r=>this._updateDamagedIdle(r),this._subscribe()}_subscribe(){let e=this.bus;e.on("unitPlaced",({unit:t})=>{this.addUnit(t),this.updateBorders(),this.view.invalidateShadows()}),e.on("unitSummoned",({unit:t,grayscale:n})=>{if(this.addUnit(t,n),t.summonedBy!=null){let s=this.meshes.get(t.summonedBy),r=this.meshes.get(t.id);s&&r&&jn(r,s.userData.facingYaw??s.rotation.y)}this.updateBorders(),this.updatePointer()}),e.on("unitRemoved",({unit:t})=>this.removeUnit(t)),e.on("unitStatsChanged",({unit:t,selfCost:n})=>{let s=this._lastHp.get(t.id),r=s!=null&&t.hp<s&&t.hp>0;if(this._lastHp.set(t.id,t.hp),this.updateSlash(t),this.updateLowHp(t),r&&!n){let a=(s-t.hp)/Math.max(1,t.maxHp);this.animateDamageFlinch(t,a)}}),e.on("unitKnockback",({unit:t,to:n})=>this.moveTo(t,n.gx,n.gy)),e.on("unitFacingChanged",({unit:t})=>this.syncFacing(t)),e.on("unitMoved",({unit:t})=>{this.updateBorders(),this.updatePointer(),this.view.invalidateShadows()}),e.on("buffAnimation",({unit:t})=>this.animatePulse(t)),e.on("levelUp",({unit:t})=>this.animateLevelUp(t)),e.on("turnChanged",()=>{this.updatePointer()}),e.on("playingStarted",()=>{this.updateBorders(),this.updatePointer()}),e.on("actionResolved",()=>this.updatePointer()),e.on("initiativeChanged",()=>this.updatePointer()),e.on("worldRebuilt",()=>this.clear())}addUnit(e,t=!1){this.meshes.has(e.id)&&this.removeUnit(e);let n=ep(e.player,e.class,e.hairColor,this.bumpMap);n.position.copy(this.view.worldPos(e.x,e.y)),n.userData.baseY=n.position.y,jn(n,dp(e)),n.castShadow=!0,n.userData.unitId=e.id,n.userData.poseMode="idle";let s=.28,r=.28,a=.12,o=new be(new Qt(.18,.04),new lt({color:6037528,side:Mt,depthTest:!0,depthWrite:!1}));o.position.set(0,s+r/2,a/2+.02),o.rotation.x=-Math.PI/2,o.rotation.z=Math.PI/4,o.visible=e.maxHp>0&&e.hp<e.maxHp&&e.hp>0,n.add(o),n.userData.slashMark=o,this.view.scene.add(n),this.meshes.set(e.id,n),this._lastHp.set(e.id,e.hp),t&&this._makeGrayscale(n),this.updateLowHp(e),this.view.requestRender()}removeUnit(e){let t=typeof e=="object"?e.id:e,n=this.meshes.get(t);n&&(this.view.scene.remove(n),n.traverse(s=>{s.geometry&&!Qf(s.geometry)&&s.geometry.dispose(),s.material&&(Array.isArray(s.material)?s.material:[s.material]).forEach(a=>{dh(a)||a.dispose()})}),this.meshes.delete(t),this._lastHp.delete(t),this.updateBorders(),this.view.requestRender())}clear(){for(let e of Array.from(this.meshes.keys()))this.removeUnit(e)}moveTo(e,t,n){let s=this.meshes.get(e.id);s&&(s.position.copy(this.view.worldPos(t,n)),Pr(s),this.updateBorders(),this.view.requestRender())}updateSlash(e){let t=this.meshes.get(e.id);!t||!t.userData.slashMark||(t.userData.slashMark.visible=e.maxHp>0&&e.hp<e.maxHp&&e.hp>0,this.view.requestRender())}updateLowHp(e){let t=this.meshes.get(e.id);if(!t)return;let n=e.maxHp>0?e.hp/e.maxHp:1,s=e.hp>0&&e.maxHp>0?1-n:0;if(t.userData.damageRatio=s,s<=0){tp(t),this.view.requestRender();return}let a=n<yh?Math.min(1,(yh-n)/yh):0;t.userData.woundedSeverity=a,t.userData.baseY=t.position.y+mh(t),gh(t),ip(t,Math.max(a,s*.35)),t.userData.slashMark&&(t.userData.slashMark.visible=!0),this.view.requestRender()}_updateDamagedIdle(e){let t=!1;for(let[n,s]of this.meshes){let r=this.state.getUnitById(n);!r||r.hp<=0||r.hp>=r.maxHp||s.userData.poseMode==="idle"&&(t=!0,gh(s,e*.003+n*.73))}this.view._damagedIdleActive=t,t&&this.view.markDirty()}animateDamageFlinch(e,t){let n=this.meshes.get(e.id);if(!n||n.userData.poseMode==="death")return;n.userData.poseMode="flinch",n.userData.flinchSide=Math.random()>.5?1:-1;let s=Math.min(1,.3+t*1.6);return this._run(cM,r=>{np(n,r,s),this.view.invalidateShadows()}).then(()=>{n.userData.poseMode="idle",this.updateLowHp(e)})}_makeGrayscale(e){e.traverse(n=>{let s=Ds(n);if(!s?.color)return;let r=s.userData.baseColor||s.color,a=.2126*r.r+.7152*r.g+.0722*r.b,o=Math.max(0,Math.min(1,a*.55));s.color.setRGB(o,o,o)})}setFacingMode(e){this._facingMode=!!e,this.updatePointer()}syncFacing(e){let t=this.meshes.get(e.id);t&&jn(t,dp(e)),this.view.requestRender()}showFacingArrow(e){let t=this.meshes.get(e);t&&(this.facingArrow.removeFromParent(),t.add(this.facingArrow),this.facingArrow.position.set(0,1.2,0),this.facingArrow.rotation.set(-Math.PI/2,0,Math.PI),this.facingArrow.visible=!0,this.view.requestRender())}setFacingPreview(e,t){let n=this.meshes.get(e);!n||!t||(jn(n,Math.atan2(t.dx,t.dy)),this.view.requestRender())}hideFacingArrow(){this.facingArrow.visible=!1,this.facingArrow.removeFromParent(),this.view.scene.add(this.facingArrow),this.view.requestRender()}_makeFacingArrow(){let e=new be(new yn(.12,.35,8),new lt({color:4500223}));return e.visible=!1,e}_makeBorderGeometry(e,t){let n=e/2,s=n-t,r=new ki;r.moveTo(-n,-n),r.lineTo(n,-n),r.lineTo(n,n),r.lineTo(-n,n),r.lineTo(-n,-n);let a=new Bi;return a.moveTo(-s,-s),a.lineTo(s,-s),a.lineTo(s,s),a.lineTo(-s,s),a.lineTo(-s,-s),r.holes.push(a),new Rs(r)}updateBorders(e=null){let t=this.state.units,n=t.filter(s=>s.hp>0&&s.id!==e).map(s=>`${s.id},${s.x},${s.y},${s.player}`).sort().join("|");if(!(this._borderSig===n&&this._borderExclude===e)){for(this._borderSig=n,this._borderExclude=e;this.bordersGroup.children.length;)this.bordersGroup.remove(this.bordersGroup.children[0]);t.filter(s=>s.hp>0&&s.id!==e).forEach(s=>{let r=this.view.worldPos(s.x,s.y),a=this.view.surfaceY(s.x,s.y)+.02,o=up[s.player]||up[1],l=new be(this.borderGeo,o);l.rotation.x=-Math.PI/2,l.position.set(r.x,a,r.z),this.bordersGroup.add(l)}),this.view.requestRender()}}_makeTurnPointer(){let e=new be(new yn(.1,.25,6),new lt({color:8102901}));return e.rotation.x=Math.PI,e.visible=!1,e}updatePointer(){let e=this.state,t={1:8102901,2:15628943},n=()=>{this.turnPointer.visible=!1,this.turnPointer.removeFromParent(),this.view.scene.add(this.turnPointer)};if(e.phase!=="playing"||e.initiativeOrder.length===0||this._facingMode)return n();let s=e.getActiveUnit();if(!s||s.hp<=0)return n();let r=this.meshes.get(s.id);if(!r){this.turnPointer.visible=!1;return}this.turnPointer.removeFromParent(),r.add(this.turnPointer),this.turnPointer.position.set(0,1.15,0),this.turnPointer.material&&this.turnPointer.material.color.setHex(t[s.player]??t[1]),this.turnPointer.visible=!0,this.view.requestRender()}_run(e,t,n=la){return new Promise(s=>{this.tween.add({duration:e,ease:n,onUpdate:r=>{t(r),this.view.requestRender()},onComplete:s})})}async animateMove(e,t){let n=this.meshes.get(e.id);if(!n||t.length<2)return;n.userData.poseMode="walk",this.updateBorders(e.id);let s=t.map(c=>this.view.worldPos(c.x,c.y).clone()),r=[],a=0;for(let c=1;c<s.length;c++){let h=s[c].distanceTo(s[c-1]);r.push({from:s[c-1],to:s[c],len:h,start:a}),a+=h}let l=(this.state.settings.moveDurationMs||300)*(t.length-1);await this._run(l,c=>{let h=c*a,u=r[r.length-1];for(let m=0;m<r.length;m++)if(h<=r[m].start+r[m].len){u=r[m];break}let d=u.len>1e-8?Math.min(1,(h-u.start)/u.len):1;n.position.lerpVectors(u.from,u.to,d);let p=u.to.x-u.from.x,y=u.to.z-u.from.z;p*p+y*y>1e-6&&jn(n,Math.atan2(p,y));let g=sp(n,h/.95);n.position.y+=g,this.view.invalidateShadows(),this.cameraFollow&&this.cameraFollow(n.position)},xl),n.position.copy(s[s.length-1]),rp(n),Pr(n),n.userData.poseMode="idle",this.updateBorders()}async animateAttack(e,t,n,s){let r=this.meshes.get(e.id);if(!r)return;r.userData.poseMode="attack";let a=this.view.worldPos(e.x,e.y).clone(),o=this.view.worldPos(t.x,t.y).clone(),l=o.x-a.x,c=o.z-a.z;l*l+c*c>1e-6&&jn(r,Math.atan2(l,c));let h=e.range!=null?e.range:1,u=Math.max(1,n&&n.length||1),d=h<=1?"slash":"thrust",p=Math.hypot(l,c),y=.95*(d==="slash"?.14:.22);for(let g=0;g<u;g++)if(h>2)await this._fireProjectile(a,o,16763972),s&&s(g);else{let m=a.y,f=a.clone();if(p>1e-6){let _=Math.max(0,p-y);f.add(new L(l/p,0,c/p).multiplyScalar(_))}let x=!1;await this._run(lM,_=>{op(r,_,{style:d});let v=ap(_);r.position.lerpVectors(a,f,v),r.position.y=m+Math.sin(_*Math.PI)*.035*(1-(r.userData.woundedSeverity||0)*.5),!x&&_>=.36&&s&&(x=!0,s(g)),this.view.invalidateShadows()}),lp(r),Pr(r)}r.position.copy(a),Pr(r),r.userData.poseMode="idle"}async animateSkill(e,t,n,s){if((n?.effectKey==="pierce"||n?.effectKey==="impale")&&t){await this.animateAttack(e,t,[{}],s?()=>s():void 0),this.updateLowHp(e);return}let r=this.meshes.get(e.id);if(!r){s&&s();return}if(r.userData.poseMode="attack",t&&(t.x!==e.x||t.y!==e.y)){let l=this.view.worldPos(e.x,e.y).clone(),c=this.view.worldPos(t.x,t.y).clone(),h=c.x-l.x,u=c.z-l.z;if(h*h+u*u>1e-6&&jn(r,Math.atan2(h,u)),(n&&n.range||1)>1){await this._fireProjectile(l,c,6737151),s&&s(),r.userData.poseMode="idle";return}}let a=r.position.y,o=!1;await this._run(220,l=>{r.position.y=a+Math.sin(l*Math.PI)*.18,!o&&l>=.45&&s&&(o=!0,s())}),!o&&s&&s(),r.position.y=a,r.userData.poseMode="idle",this.updateLowHp(e)}_fireProjectile(e,t,n){let s=new lt({color:n}),r=new be(yM,s),a=e.clone();a.y+=.6;let o=t.clone();return o.y+=.6,r.position.copy(a),r.quaternion.setFromUnitVectors(new L(0,1,0),o.clone().sub(a).normalize()),this.view.scene.add(r),this._run(hM,l=>r.position.lerpVectors(a,o,l),l=>l).then(()=>{this.view.scene.remove(r),s.dispose()})}animateDeath(e){let t=this.meshes.get(e.id);if(!t)return this.updateBorders(),this.updatePointer(),Promise.resolve();let n=this.state.getUnitById(e.id);return!n||n.hp>0?Promise.resolve():(t.userData.poseMode="death",t.userData.deathFallSide=Math.random()>.5?1:-1,t.userData.deathBaseY=t.position.y,this._run(uM,s=>{cp(t,s),hp(t,s),this.view.invalidateShadows()},la).then(()=>{this.view.invalidateShadows(),this.removeUnit(e),this.updatePointer()}))}animatePulse(e){let t=this.meshes.get(e.id);t&&(t.userData.poseMode="attack",this._run(dM,n=>{let s=1+Math.sin(n*Math.PI)*.18;t.scale.setScalar(s)}).then(()=>{t.userData.poseMode="idle",this.updateLowHp(e)}))}animateLevelUp(e){let t=this.meshes.get(e.id);if(!t)return;t.userData.poseMode="attack";let n=t.userData.facingYaw??t.rotation.y;this._run(fM,s=>{let r=1+Math.sin(s*Math.PI)*.25;t.scale.setScalar(r),t.rotation.y=n+s*Math.PI*2}).then(()=>{jn(t,n),t.userData.poseMode="idle",this.updateLowHp(e)})}};var fp=.82,pp=1.02,mp={move:{glow:3381759,glowOpacity:.35,square:6730751,squareOpacity:.65},attack:{glow:10035746,glowOpacity:.4,square:13386820,squareOpacity:.7},skill:{glow:8926122,glowOpacity:.4,square:11167436,squareOpacity:.7},placement:{glow:2271812,glowOpacity:.4,square:4508774,squareOpacity:.7},facing:{glow:2263244,glowOpacity:.35,square:4500223,squareOpacity:.65}},To=class{constructor(e){this.view=e,this.group=new wt,e.scene.add(this.group),this.materials=[],this.glowGeo=new Qt(pp,pp),this.squareGeo=new Qt(fp,fp)}clear(){for(;this.group.children.length;){let e=this.group.children[0];this.group.remove(e),e.geometry!==this.glowGeo&&e.geometry!==this.squareGeo&&e.geometry&&e.geometry.dispose()}this.materials.forEach(e=>e.dispose()),this.materials.length=0,this.view.pulseMaterials=[],this.view.requestRender()}show(e,t){this.clear();let n=mp[t]||mp.move;e.forEach(({gx:s,gy:r})=>{let a=this.view.surfaceY(s,r)+.01,o=this.view.worldPos(s,r),l=new lt({color:n.glow,transparent:!0,opacity:n.glowOpacity,side:Mt}),c=new be(this.glowGeo,l);c.rotation.x=-Math.PI/2,c.position.set(o.x,a,o.z),this.group.add(c),this.materials.push(l);let h=new lt({color:n.square,transparent:!0,opacity:n.squareOpacity,side:Mt}),u=new be(this.squareGeo,h);u.rotation.x=-Math.PI/2,u.position.set(o.x,a+.01,o.z),u.userData.gx=s,u.userData.gy=r,this.group.add(u),this.materials.push(h)}),this.view.pulseMaterials=this.materials,this.view.requestRender()}};var gp=.92,Ao=class{constructor(e,t){this.view=e,this.group=new wt,e.scene.add(this.group),this.byKey=new Map,t.on("powerupSpawned",({gx:n,gy:s,type:r})=>this.add(n,s,r)),t.on("powerupCollected",({gx:n,gy:s})=>this.remove(n,s)),t.on("worldRebuilt",()=>this.clear())}_key(e,t){return t*this.view.world.w+e}add(e,t,n){let s=Bu[n],r=new be(new ho(.22,0),new ln({color:s,metalness:.3,roughness:.4}));r.rotation.x=Math.PI/4,r.castShadow=!0,r.receiveShadow=!0;let a=this.view.worldPos(e,t);a.y+=.35,r.position.copy(a),this.group.add(r);let o=new be(new Qt(gp,gp),new lt({color:s,transparent:!0,opacity:.45,side:Mt}));o.rotation.x=-Math.PI/2;let l=this.view.worldPos(e,t);o.position.set(l.x,this.view.surfaceY(e,t)+.01,l.z),this.group.add(o),this.byKey.set(this._key(e,t),{gem:r,glow:o}),this.view.requestRender()}remove(e,t){let n=this._key(e,t),s=this.byKey.get(n);if(s){for(let r of[s.gem,s.glow])this.group.remove(r),r.geometry.dispose(),r.material&&r.material.dispose&&r.material.dispose();this.byKey.delete(n),this.view.requestRender()}}clear(){for(let e of Array.from(this.byKey.keys())){let t=e%this.view.world.w,n=e/this.view.world.w|0;this.remove(t,n)}}};var Ro=class{constructor(e){this.view=e,this.layer=document.createElement("div"),this.layer.id="combat-text-layer",e.container.appendChild(this.layer)}_spawn(e,t,n,s,r){let a=document.createElement("div");a.className=n,a.textContent=t,a.style.position="absolute",this.layer.appendChild(a);let o=this.view,l=performance.now(),c=0,h=o.worldPos(0,0).clone(),u=()=>{e(h),h.y+=s,h.project(o.camera);let p=o.container.clientWidth,y=o.container.clientHeight;a.style.left=(h.x*.5+.5)*p+"px",a.style.top=(1-(h.y*.5+.5))*y+"px"},d=()=>{c%2===0&&u(),c++,performance.now()-l<r?requestAnimationFrame(d):a.remove()};requestAnimationFrame(d)}showCombat(e,t,n,s,r){let a="combat-text-float "+(s?"miss":"damage")+(r?" "+r:""),o=r==="skill-name"?1.7:1.2;this._spawn(l=>this.view.worldPos(e,t,l),n,a,o,1400)}showLevelUp(e,t,n){let s="combat-text-float "+(n||"levelup");this._spawn(r=>this.view.worldPos(e,t,r),"LEVEL UP!",s,1.2,1500)}};function yp(i,e,t){let n=new Mo(i,e.world),s=new oa;s.onFrame=()=>n.setPresentationActive({camera:n._cameraActive,tweens:s.active});let r=new Eo(n,e,t,s),a=new To(n),o=new Ao(n,t),l=new Ro(n);return t.on("floatingText",({gx:c,gy:h,text:u,kind:d})=>{let p=d==="miss",y=d==="damage"||d==="miss"?void 0:d;l.showCombat(c,h,u,p,y)}),t.on("levelUp",({unit:c})=>{let h=c.level>=3?"levelup level3":c.level>=2?"levelup level2":"levelup";l.showLevelUp(c.x,c.y,h)}),n.start(),{view:n,tween:s,units:r,highlights:a,powerups:o,floatingText:l,animator:r}}var _h=17,xM=.003,vM=400,MM=1.8*1.8,bM=1,SM=40,wM=-Math.PI*.4,EM=Math.PI*.4,_p=.004,Co=class{constructor(e,t){this.view=e,this.tween=t,this.camera=e.camera,this.target=new L,this.offset=new L(12,38,16).normalize().multiplyScalar(_h),this.followEnabled=!0,this._cameraTween=null,this._zoomDir=new L,this._orbitOffset=new L,this._panPlane=new an(new L(0,1,0),0),this._panHit=new L,this._panPrev=new L,this._raycaster=new Ps,this._endTarget=new L,this._endPosition=new L,this._camScratch=new L,this._startTarget=new L,this._startPosition=new L,this._lastCenterKey=null;let n=e.world;this.target.copy(e.worldPos(n.w/2|0,n.h/2|0)),this.camera.position.copy(this.target).add(this.offset),this.camera.lookAt(this.target)}disableFollow(){this.followEnabled=!1}_setCameraActive(e){this.view.setPresentationActive({camera:e,tweens:this.tween.active})}_cancelCameraTween(){this._cameraTween&&(this._cameraTween.cancel(),this._cameraTween=null),this._setCameraActive(!1)}_orbitDir(e){return e.copy(this.camera.position).sub(this.target),e.lengthSq()<.01&&e.copy(this.offset),e.normalize()}zoom(e,t=.005){let n=this.camera.position.distanceTo(this.target),s=Math.max(bM,Math.min(SM,n+e*t));this._orbitDir(this._zoomDir),this.camera.position.copy(this.target).add(this._zoomDir.multiplyScalar(s)),this.camera.lookAt(this.target),this.view.requestRender()}rotate(e,t){this._orbitOffset.copy(this.camera.position).sub(this.target);let n=this._orbitOffset.length();if(n<.001)return;let s=Math.atan2(this._orbitOffset.x,this._orbitOffset.z),r=Math.asin(Math.max(-1,Math.min(1,this._orbitOffset.y/n)));s-=e*_p,r+=t*_p,r=Math.max(wM,Math.min(EM,r)),this._orbitOffset.x=n*Math.cos(r)*Math.sin(s),this._orbitOffset.y=n*Math.sin(r),this._orbitOffset.z=n*Math.cos(r)*Math.cos(s),this.camera.position.copy(this.target).add(this._orbitOffset),this.camera.lookAt(this.target),this.view.requestRender()}panFromNdc(e,t,n=1){this._panPlane.setFromNormalAndCoplanarPoint(new L(0,1,0),new L(0,this.target.y,0)),this._raycaster.setFromCamera(new ge(e.x,e.y),this.camera),this._raycaster.ray.intersectPlane(this._panPlane,this._panPrev),this._raycaster.setFromCamera(new ge(t.x,t.y),this.camera),this._raycaster.ray.intersectPlane(this._panPlane,this._panHit);let s=this._panPrev.sub(this._panHit).multiplyScalar(n);this.target.add(s),this.camera.position.add(s),this.camera.lookAt(this.target),this.view.requestRender()}follow(e){if(!this.followEnabled)return;let t=this.camera.position.distanceTo(this.target);t<.1&&(t=_h),this._orbitDir(this._zoomDir),this.target.lerp(e,xM),this._camScratch.copy(this._zoomDir).multiplyScalar(t),this.camera.position.copy(this.target).add(this._camScratch),this.camera.lookAt(this.target)}centerOn(e,t,n=!1){let s=`${e},${t}`;if(this.view.worldPos(e,t,this._endTarget),this.target.distanceToSquared(this._endTarget)<MM&&this._lastCenterKey===s&&!this._cameraTween)return;this._lastCenterKey=s,this.followEnabled=!0;let a=this.camera.position.distanceTo(this.target);if(a<.1&&(a=_h),this._orbitDir(this._zoomDir),this._endPosition.copy(this._endTarget).add(this._camScratch.copy(this._zoomDir).multiplyScalar(a)),n){this._cancelCameraTween(),this.target.copy(this._endTarget),this.camera.position.copy(this._endPosition),this.camera.lookAt(this.target),this.view.markDirty();return}this._cancelCameraTween(),this._startTarget.copy(this.target),this._startPosition.copy(this.camera.position),this._setCameraActive(!0),this.view.requestRender(),this._cameraTween=this.tween.add({duration:vM,ease:o=>o*(2-o),onUpdate:o=>{this.target.lerpVectors(this._startTarget,this._endTarget,o),this.camera.position.lerpVectors(this._startPosition,this._endPosition,o),this.camera.lookAt(this.target),this.view.markDirty()},onComplete:()=>{this._cameraTween=null,this._setCameraActive(!1),this.view.markDirty()}})}};function tn(i,e,t){let n=i.getBoundingClientRect();return{x:(e-n.left)/n.width*2-1,y:-((t-n.top)/n.height)*2+1}}function TM(i,e){let t=e.object;if(t.isInstancedMesh&&t.userData.tileGridGround){let n=e.instanceId;if(n==null||n<0)return null;let s=t.userData.insideTileGx,r=t.userData.insideTileGy;return s&&r&&n<s.length?{gx:s[n],gy:r[n]}:null}return t.userData.mergedOutsidePick?cl(i,e.point):null}var AM=(.35+.35*.35)/2+.35/2;function Po(i){let e=new Ps,t=new ge,n=new an(new L(0,1,0),-AM),s=new L;return function(a,o){if(t.set(a,o),e.setFromCamera(t,i.camera),e.ray.intersectPlane(n,s)){let h=cl(i.world,s);if(h)return h}let l=e.intersectObjects(i.tilesGroup.children,!0),c=null;for(let h of l){let u=TM(i.world,h);if(u){if(i.world.path[u.gy][u.gx])return u;c||(c=u)}}return c}}var RM=.25,CM=.03,xp=.5,vp=.35,PM=.8,Mp=new Set(["arcaneBolt","feast","pierce","snipe","berserk","drain","shuriken","chokuto","bite","execute","judgement","exorcise","ambush","powerShot","concoct","bloodSuck","gnaw","malediction","skewer"]),bp=new Set(["chakra","sacrifice"]),Sp=new Set(["brave","focus","bloodlust","iaido","howl","mantra","sanctuary","windWalk","forge","fortify","warCry","foresight","overheal","rapid","vodoo"]),wp=new Set(["impale","poison","gaze","debilitate","bash","infect"]),Ep=new Set(["dominate","manaDrain","weaken","cripple","hex","blind","raid"]),Tp=new Set(["reanimate"]);function Ht(i,e,t,n){return Math.abs(i-t)+Math.abs(e-n)}function Ap(i){return i.settings.maxTurns-i.turnCount}function _n(i){return i.maxHp>0?i.hp/i.maxHp:1}function xh(i){return i.maxHp>0&&_n(i)<CM}function Qn(i){return i.maxHp>0&&_n(i)<RM}function Rp(i,e){return i.units.filter(t=>t.hp>0&&t.player!==e.player)}function Cp(i,e){return i.units.filter(t=>t.hp>0&&t.player===e.player&&t.id!==e.id)}function vh(i,e=null){let t=new Set;for(let n of i.units)n.hp<=0||n.id===e||t.add(i.tileKey(n.x,n.y));return t}function Ir(i){let e=ze(i,"agi");return ll(i)?Math.max(0,e):Math.max(4,e)}function Pp(i,e){let{world:t}=i,n=Ir(e),s=jr(t,e.x,e.y,n,i.units,e),r=vh(i,e.id),a=[];return s.forEach((o,l)=>{o===0||r.has(l)||a.push({gx:l%t.w,gy:l/t.w|0,dist:o})}),a}function Ip(i,e,{skipSkills:t=!1}={}){let n=e.range!=null?e.range:1;if(t)return n;let s=bn(i,e).filter(a=>!a.disabled&&e.mp>=a.cost&&a.target==="enemy"),r=s.length?Math.max(...s.map(a=>a.range||0)):0;return Math.max(n,r)}function Lp(i,e,t){return t?!1:i.level>=2&&e>=2}function IM(i,e){let t=ze(i,"str")*.7+ze(i,"dex")*.2+ze(i,"int")*.1-(ze(e,"vit")*.3+ze(e,"luk")*.2);return Math.max(1,Math.floor(t))}function Lr(i,e){let t=ze(e,"agi")*.7+ze(e,"luk")*.3,n=ze(i,"dex");return Math.min(1,n/Math.max(.001,t))}function Io(i,e,t){return Ti({x:i,y:e},t)}function LM(i,e){let t=IM(i,e);return i.tempBuff?.doubleAttack===!0&&(t*=2),t*Ti(i,e)}function DM(i,e){return LM(i,e)>=e.hp}function Mh(i,e){return DM(i,e)&&Lr(i,e)>=PM}function bh(i,e,t,n,s){let r=[];for(let a of n){let o=Ht(e,t,a.x,a.y);o>0&&o<=s&&Kt(i,e,t,a.x,a.y)&&r.push({target:a,dist:o})}return r}function Dp(i,e,t,n){let s=new Map;for(let r of e){let a=r.gy*i.w+r.gx;s.set(a,bh(i,r.gx,r.gy,t,n))}return s}function Lo(i,e,t){if(!i||i.length<=1)return null;for(let n=i.length-1;n>=1;n--){let s=i[n];if(e.has(s.y*t.w+s.x))return{gx:s.x,gy:s.y}}return null}function Sh(i,e,t,n){if(!i||i.length<=1)return null;let s=Math.min(e,i.length-1);for(let r=s;r>=1;r--){let a=i[r];if(!t.has(a.y*n.w+a.x))return{gx:a.x,gy:a.y}}return null}function wh(i,e){if(!e.length||!i.length)return null;let t=null,n=1/0;for(let s of i){let r=1/0;for(let a of e)r=Math.min(r,Ht(s.gx,s.gy,a.gx,a.gy));r<n&&(n=r,t=s)}return t}function Do(i,e,t,n,s=null){let r=0;for(let a of n){let o=Ht(e,t,a.x,a.y);if(o===0)continue;let l=a.range!=null?a.range:1;if(o<=l&&Kt(i,e,t,a.x,a.y)){let h=s?Ti(a,{x:e,y:t,facing:s}):1;r+=2*h;continue}let c=l+Math.max(1,ze(a,"agi"));o<=c&&(r+=1)}return r}function Dr(i,e,t,n=null){if(!e.length)return null;if(!t.length)return e[0];let s=null,r=1/0,a=-1;for(let o of e){let l=n?Mn(n.x,n.y,o.gx,o.gy)||n.facing:null,c=Do(i,o.gx,o.gy,t,l),h=1/0;for(let u of t)h=Math.min(h,Ht(o.gx,o.gy,u.x,u.y));(c<r||c===r&&h>a)&&(r=c,a=h,s=o)}return s}function Up(i,e,t){let{world:n}=i,s=new Set;for(let r of e){let a=r.range!=null?r.range:1;for(let o of t){let l=Ht(r.x,r.y,o.x,o.y);if(l>0&&l<=a&&Kt(n,r.x,r.y,o.x,o.y)){s.add(r.id);break}}}return s}function Np(i,e,t,n){if(!i.length)return null;if(!t.length)return i[0];let s=_n(e)>=.6,r=null,a=-1/0;for(let o of i){let l=1/0;for(let u of t)l=Math.min(l,Ht(o.gx,o.gy,u.x,u.y));let c=n.length?1/0:999;for(let u of n)c=Math.min(c,Ht(o.gx,o.gy,u.x,u.y));let h=s?c<l?l-1e3:l:l-c;h>a&&(a=h,r=o)}return r}function Op(i,e,t,n){if(!e.length)return null;let s=null,r=-1;for(let a of i){let o=1/0;for(let c of e)o=Math.min(o,Ht(a.gx,a.gy,c.x,c.y));let l=!1;for(let c of e){let h=Ht(a.gx,a.gy,c.x,c.y);if(h>0&&h<=t&&Kt(n,a.gx,a.gy,c.x,c.y)){l=!0;break}}l&&o>r&&(r=o,s=a)}return s}function Fp(i){let e=[];return i.powerups.forEach((t,n)=>{e.push({gx:n%i.world.w,gy:n/i.world.w|0})}),e}function Bp(i,e,t,n){let{world:s}=i;for(let r of n)for(let a of t){let o=a.range!=null?a.range:1,l=Ht(a.x,a.y,r.x,r.y);if(l>0&&l<=o&&Kt(s,a.x,a.y,r.x,r.y))return!0}return!1}function Uo(i,e,t){let n=uu(i.world,e.x,e.y,t,i.units,e);return!n||n.path.length<=1?null:n}function Yt(i,e,t){return{type:"move",unitId:i.id,toGx:e,toGy:t}}var kp=[{dx:0,dy:1},{dx:0,dy:-1},{dx:1,dy:0},{dx:-1,dy:0}];function Eh(i,e){let{world:t}=i;return kp.filter(({dx:n,dy:s})=>{let r=e.x+n,a=e.y+s;return r>=0&&r<t.w&&a>=0&&a<t.h}).map(({dx:n,dy:s})=>({dx:n,dy:s}))}function Th(i,e){let{world:t}=i,n=[];for(let{dx:s,dy:r}of kp){let a=e.x+s,o=e.y+r;if(!(a<0||a>=t.w||o<0||o>=t.h)){if(i.getUnitAtTile(a,o)){n.push({gx:a,gy:o});continue}xn(t,a,o)&&n.push({gx:a,gy:o})}}return n}function UM(i,e){return Th(i,e).map(({gx:t,gy:n})=>({dx:t-e.x,dy:n-e.y,gx:t,gy:n}))}function NM(i,e,t){let{world:n}=i,s=null,r=1/0,a=3;for(let o of t){if(!o||o.hp<=0)continue;let l=Ht(e.x,e.y,o.x,o.y);if(l===0)continue;let c=o.range!=null?o.range:1,h=Kt(n,e.x,e.y,o.x,o.y),u=l<=c&&h?0:h?1:2;u>a||(u<a||l<r)&&(s=o,r=l,a=u)}return s}function OM(i,e,t){if(!t.length||!e)return i.facing;let n=Mn(i.x,i.y,e.x,e.y);if(n&&t.some(c=>c.dx===n.dx&&c.dy===n.dy))return n;let s=e.x-i.x,r=e.y-i.y,a=Math.hypot(s,r)||1,o=t[0],l=-1/0;for(let c of t){let h=s/a*c.dx+r/a*c.dy;h>l&&(l=h,o=c)}return o}function FM(i,e,t){let n=UM(i,e).map(({dx:r,dy:a})=>({dx:r,dy:a}));if(n.length||(n=Eh(i,e)),!n.length)return e.facing;let s=NM(i,e,t);return s?OM(e,s,n):e.facing}function BM(i,e=null){let t={type:"endTurn",unitId:i.id};return e&&(t.facing=e),t}function ei(i,e){let t=i.units.filter(n=>n.player!==e.player&&n.hp>0);return BM(e,FM(i,e,t))}function Ah(i,e){return{type:"attack",unitId:i.id,targetId:e.id}}function Hp(i,e,t){return{type:"skill",unitId:i.id,skillIndex:e,targetId:t?.id??i.id}}function xi(i,e,t,n,s){let{world:r}=i;if(!t.length||!n.length)return null;let a=Ir(e),o=Uo(i,e,t);if(o){let c=Sh(o.path,a,s,r);if(c&&(c.gx!==e.x||c.gy!==e.y))return Yt(e,c.gx,c.gy)}let l=wh(n,t);return l&&(l.gx!==e.x||l.gy!==e.y)?Yt(e,l.gx,l.gy):null}function zp(i,e,t){let{world:n}=i,s=Xs(n),r=na(n,e.player),a=new Set(s.map(c=>i.tileKey(c.gx,c.gy))),o=s.filter(c=>!t.has(i.tileKey(c.gx,c.gy))),l=r.filter(c=>!t.has(i.tileKey(c.gx,c.gy)));return{centerTiles:s,enemyBaseTiles:r,centerKeys:a,centerTargets:o.length?o:s,baseTargets:l.length?l:r}}function Rh(i,e,t,n,s){let{world:r}=i;if(!n.length||!s.length)return null;let a=Ir(e),o=new Set;for(let u of i.units)u.hp>0&&o.add(i.tileKey(u.x,u.y));let l=new Set(s.map(u=>i.tileKey(u.gx,u.gy)));function c(u,d){let p=null,y=t;for(let g=-y;g<=y;g++)for(let m=-y;m<=y;m++){if(m===0&&g===0||Math.abs(m)+Math.abs(g)>y)continue;let f=u.x+m,x=u.y+g;if(f<0||f>=r.w||x<0||x>=r.h||!xn(r,f,x)||!Kt(r,f,x,u.x,u.y)||o.has(i.tileKey(f,x)))continue;let _=wi(r,e.x,e.y,f,x,i.units,e),v=_?_.length-1:1/0;_&&_.length>1&&(!d||v<=a)&&(!p||_.length<p.length)&&(p=_)}return p}let h=[];for(let u of n){let d=c(u,!0);d&&h.push({enemy:u,path:d})}if(h.length){let u=h.filter(m=>Qn(m.enemy)),d=u.length?u:h;d.sort((m,f)=>u.length?m.enemy.hp-f.enemy.hp||m.path.length-f.path.length:m.path.length-f.path.length||m.enemy.hp-f.enemy.hp);let p=d[0].enemy,y=s.filter(m=>{let f=Ht(m.gx,m.gy,p.x,p.y);return f>0&&f<=t&&Kt(r,m.gx,m.gy,p.x,p.y)});if(y.length){y.sort((f,x)=>Io(x.gx,x.gy,p)-Io(f.gx,f.gy,p)||(f.dist||0)-(x.dist||0));let m=y[0];if(m.gx!==e.x||m.gy!==e.y)return Yt(e,m.gx,m.gy)}let g=Lo(d[0].path,l,r);if(g&&(g.gx!==e.x||g.gy!==e.y))return Yt(e,g.gx,g.gy)}return null}function Gp(i,e,t){if(!t.length)return null;let n=i.units.filter(a=>a.hp>0&&a.player===e);if(!n.length)return t[0];let s=t[0],r=-1;for(let a of t){let o=1/0;for(let l of n)o=Math.min(o,Ht(a.gx,a.gy,l.x,l.y));o>r&&(r=o,s=a)}return s}var Vp=5,kM=.004;function Wp(i){for(;i>Math.PI;)i-=2*Math.PI;for(;i<-Math.PI;)i+=2*Math.PI;return i}function $p(i,e,t,n){if(!n.length)return i.facing;let s=Mn(i.x,i.y,e,t);return s&&n.some(r=>r.dx===s.dx&&r.dy===s.dy)?s:HM(null,i,e,t,n)}function HM(i,e,t,n,s){if(!s.length)return e.facing;let r;if(i){let l=i.worldPos(e.x,e.y),c=i.worldPos(t,n),h=c.x-l.x,u=c.z-l.z;r=h*h+u*u>1e-6?Math.atan2(h,u):Math.atan2(e.facing.dx,e.facing.dy)}else{let l=t-e.x,c=n-e.y;r=l!==0||c!==0?Math.atan2(l,c):Math.atan2(e.facing.dx,e.facing.dy)}let a=s[0],o=Math.abs(Wp(r-Math.atan2(a.dx,a.dy)));for(let l=1;l<s.length;l++){let c=s[l],h=Math.abs(Wp(r-Math.atan2(c.dx,c.dy)));h<o&&(o=h,a=c)}return a}var No=class{constructor({view:e,state:t,controller:n,camera:s,highlights:r,bus:a,dispatch:o,units:l}){this.view=e,this.state=t,this.controller=n,this.dispatch=o||(c=>n.dispatch(c)),this.camera=s,this.highlights=r,this.units=l,this.bus=a,this.container=e.container,this.pickTile=Po(e),this.selectedUnitId=null,this.mode="move",this.skillIndex=-1,this.rangeKeys=new Set,this._allowedFacings=[],this.busy=!1,this.enabled=!0,this._isPanning=!1,this._isRotating=!1,this._ctrlOnDown=!1,this._prevNdc=null,this._downPixel={x:0,y:0},this._isTouch=!1,this._pinchDist=null,this._pinchAngle=null,this._bind(),this._subscribe()}_key(e,t){return t*this.state.world.w+e}_subscribe(){let e=()=>this.onTurnRefreshed();this.bus.on("turnChanged",()=>{this._exitFacingMode(),e()}),this.bus.on("playingStarted",e),this.bus.on("actionResolved",e),this.bus.on("turnEndRequested",()=>{this.state.phase!=="playing"||!this.state.isHumanTurn()||this.enterFacingMode()})}onTurnRefreshed(){if(this.mode==="facing")return;this.clearSelection();let e=this.state;if(e.phase!=="playing"||!e.isHumanTurn())return;let t=e.getActiveUnit();t&&t.hp>0&&this.selectUnitForMove(t)}selectUnitForMove(e){if(this.selectedUnitId=e.id,this.mode="move",this.skillIndex=-1,this.state.hasMoved)this.rangeKeys=new Set,this.highlights.clear();else{let t=jr(this.state.world,e.x,e.y,ze(e,"agi"),this.state.units,e),n=[];this.rangeKeys=new Set,t.forEach((s,r)=>{if(s===0)return;let a=r%this.state.world.w,o=r/this.state.world.w|0;n.push({gx:a,gy:o}),this.rangeKeys.add(r)}),this.highlights.show(n,"move")}this._emitSelection()}enterAttackMode(){let e=this._activeHumanUnit();if(!e||this.state.hasAttacked)return;this.selectedUnitId=e.id,this.mode="attack",this.skillIndex=-1;let t=e.range!=null?e.range:1,n=Qr(this.state.world,e.x,e.y,t),s=[];this.rangeKeys=new Set,n.forEach((r,a)=>{let o=a%this.state.world.w,l=a/this.state.world.w|0;Kt(this.state.world,e.x,e.y,o,l)&&(s.push({gx:o,gy:l}),this.rangeKeys.add(a))}),this.highlights.show(s,"attack"),this._emitSelection()}enterSkillMode(e){let t=this._activeHumanUnit();if(!t||this.state.hasAttacked)return;let s=bn(this.state,t)[e];if(!s||s.disabled)return;this.selectedUnitId=t.id,this.mode="skill",this.skillIndex=e;let r=bu(this.state,t,s),a=Zi(this.state,t,s);this.rangeKeys=new Set(a.map(o=>this._key(o.gx,o.gy))),this.highlights.show(r,"skill"),this._emitSelection()}enterFacingMode(){let e=this._activeHumanUnit();if(!e)return;this.selectedUnitId=e.id,this.mode="facing",this.skillIndex=-1,this._allowedFacings=Eh(this.state,e);let t=Th(this.state,e);if(this.rangeKeys=new Set(t.map(n=>this._key(n.gx,n.gy))),this.highlights.show(t,"facing"),this.units){this.units.setFacingMode(!0),this.units.showFacingArrow(e.id);let n=this._allowedFacings[0]||e.facing;this.units.setFacingPreview(e.id,n)}this._emitSelection()}_exitFacingMode(){this.mode==="facing"&&(this.units&&(this.units.hideFacingArrow(),this.units.setFacingMode(!1)),this._allowedFacings=[])}clearSelection(){this._exitFacingMode(),this.selectedUnitId=null,this.mode="move",this.skillIndex=-1,this.rangeKeys=new Set,this.highlights.clear(),this._emitSelection()}_activeHumanUnit(){let e=this.state;if(e.phase!=="playing"||!e.isHumanTurn())return null;let t=e.getActiveUnit();return t&&t.hp>0?t:null}_emitSelection(){let e=this.selectedUnitId!=null?this.state.getUnitById(this.selectedUnitId):null;this.bus.emit("selectionChanged",{unit:e,mode:this.mode,skillIndex:this.skillIndex})}_updateFacingFromPointer(e,t){let n=this._activeHumanUnit();if(!n||this.mode!=="facing"||!this._allowedFacings.length)return;let s=tn(this.container,e,t),r=this.pickTile(s.x,s.y);if(!r)return;let a=$p(n,r.gx,r.gy,this._allowedFacings);this.units&&this.units.setFacingPreview(n.id,a)}async _onTileClick(e,t){if(this.busy)return;let n=this.state;if(n.phase==="draft"){if(n.gameMode==="online"&&this.controller.currentDraftPlayer!==n.localPlayerNumber)return;let a=n.draft;a&&a.pendingClassKey&&a.placementTiles&&a.placementTiles.some(o=>o.gx===e&&o.gy===t)&&(this.busy=!0,await this.dispatch({type:"draftPlace",gx:e,gy:t}),this.busy=!1);return}if(n.phase!=="playing"||n.gameMode==="cvcpu")return;let s=this._activeHumanUnit();if(this.mode==="facing"&&s){let a=$p(s,e,t,this._allowedFacings);await this._confirmEndTurn(s,a);return}if(this.mode==="skill"&&s){let o=bn(n,s)[this.skillIndex];if(!o){this.clearSelection();return}if(o.target==="self"&&e===s.x&&t===s.y){await this._dispatch({type:"skill",unitId:s.id,targetId:null,skillIndex:this.skillIndex});return}if(!this.rangeKeys.has(this._key(e,t)))return;let l=n.getUnitAtTile(e,t),c=l?l.id:null;await this._dispatch({type:"skill",unitId:s.id,targetId:c,skillIndex:this.skillIndex});return}if(this.mode==="attack"&&s){let a=n.getUnitAtTile(e,t);if(!this.rangeKeys.has(this._key(e,t)))return;a&&a.player!==s.player&&await this._dispatch({type:"attack",unitId:s.id,targetId:a.id});return}let r=n.getUnitAtTile(e,t);if(r){r.id===(s&&s.id)&&s?this.selectUnitForMove(s):this.bus.emit("previewUnit",{unit:r});return}this.bus.emit("previewUnit",{unit:null}),s&&this.selectedUnitId===s.id&&!n.hasMoved&&this.rangeKeys.has(this._key(e,t))&&await this._dispatch({type:"move",unitId:s.id,toGx:e,toGy:t})}async _confirmEndTurn(e,t){this.busy=!0,this._exitFacingMode(),this.highlights.clear(),this.rangeKeys=new Set,this.mode="move";try{await this.dispatch({type:"endTurn",unitId:e.id,facing:t||e.facing})}finally{this.busy=!1}}async _dispatch(e){this.busy=!0,this.highlights.clear(),this.rangeKeys=new Set;try{await this.dispatch(e)}finally{this.busy=!1}}_bind(){let e=this.container;e.style.cursor="grab",this._onPointerDown=this._onPointerDown.bind(this),this._onPointerMove=this._onPointerMove.bind(this),this._onPointerUp=this._onPointerUp.bind(this),this._onWheel=this._onWheel.bind(this),this._onTouchStart=this._onTouchStart.bind(this),this._onTouchMove=this._onTouchMove.bind(this),this._onTouchEnd=this._onTouchEnd.bind(this),window.addEventListener("pointerdown",this._onPointerDown),window.addEventListener("pointermove",this._onPointerMove),window.addEventListener("pointerup",this._onPointerUp),window.addEventListener("wheel",this._onWheel,{passive:!1}),e.addEventListener("touchstart",this._onTouchStart,{passive:!1}),e.addEventListener("touchmove",this._onTouchMove,{passive:!1}),e.addEventListener("touchend",this._onTouchEnd,{passive:!1}),e.addEventListener("touchcancel",this._onTouchEnd,{passive:!1})}_isUiTarget(e){let t=e&&(e.nodeType===1?e:e.parentElement);return!!(t&&t.closest("app-root, #turn-menu, #turn-menu-stack, #unit-details-card, #draft-panel, #draft-placement-card, #mode-select-overlay:not(.hidden), #map-editor-panel, #game-over-overlay.visible, #online-connect-overlay, #rotate-overlay, button, input, select, textarea, a"))}_onPointerDown(e){this.enabled&&e.pointerType!=="touch"&&(this._isUiTarget(e.target)||(this._downPixel={x:e.clientX,y:e.clientY},this._isTouch=!1,this._ctrlOnDown=e.ctrlKey,this._prevNdc=tn(this.container,e.clientX,e.clientY),this.container.style.cursor="grabbing"))}_onPointerMove(e){if(this.enabled&&e.pointerType!=="touch"){if(this.mode==="facing"&&!this._isPanning&&!this._isRotating){this._updateFacingFromPointer(e.clientX,e.clientY);return}this._drag(e.clientX,e.clientY,e.ctrlKey)}}_drag(e,t,n){if(this._prevNdc==null)return;let s=e-this._downPixel.x,r=t-this._downPixel.y;if(!this._isPanning&&!this._isRotating&&(Math.abs(s)>Vp||Math.abs(r)>Vp)&&(n||this._ctrlOnDown?this._isRotating=!0:this._isPanning=!0,this.camera.disableFollow()),this._isRotating)this.camera.rotate(s,r),this._downPixel={x:e,y:t};else if(this._isPanning){let a=tn(this.container,e,t);this.camera.panFromNdc(this._prevNdc,a,(this._isTouch,1)),this._prevNdc=a}}_onPointerUp(e){this.enabled&&e.pointerType!=="touch"&&this._endDrag(e.clientX,e.clientY)}_endDrag(e,t){if(this._prevNdc!=null&&!this._isPanning&&!this._isRotating){let n=tn(this.container,e,t),s=this.pickTile(n.x,n.y);s&&this._onTileClick(s.gx,s.gy)}this._prevNdc=null,this._isPanning=!1,this._isRotating=!1,this._ctrlOnDown=!1,this.container.style.cursor="grab"}_onWheel(e){this.enabled&&(this._isUiTarget(e.target)||(e.preventDefault(),this.camera.disableFollow(),this.camera.zoom(e.deltaY)))}_touchCoords(e){return e.touches&&e.touches.length>0?{x:e.touches[0].clientX,y:e.touches[0].clientY}:e.changedTouches&&e.changedTouches.length>0?{x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY}:{x:0,y:0}}_touchDistance(e){return!e||e.length<2?0:Math.hypot(e[1].clientX-e[0].clientX,e[1].clientY-e[0].clientY)}_touchAngle(e){return Math.atan2(e[1].clientY-e[0].clientY,e[1].clientX-e[0].clientX)}_normalizeAngleDelta(e){for(;e>Math.PI;)e-=2*Math.PI;for(;e<-Math.PI;)e+=2*Math.PI;return e}_beginTwoFingerTouch(e){this._pinchDist=this._touchDistance(e),this._pinchAngle=this._touchAngle(e),this._prevNdc=null,this._isPanning=!1,this._isRotating=!1}_onTouchStart(e){if(!this.enabled||this._isUiTarget(e.target))return;if(e.touches.length===2){this._beginTwoFingerTouch(e.touches);return}if(e.touches.length!==1)return;this._pinchDist=null,this._pinchAngle=null;let t=this._touchCoords(e);this._downPixel={x:t.x,y:t.y},this._isTouch=!0,this._ctrlOnDown=!1,this._prevNdc=tn(this.container,t.x,t.y)}_onTouchMove(e){if(!this.enabled||this._isUiTarget(e.target))return;if(e.touches.length===2){if(e.preventDefault(),this._pinchDist==null){this._beginTwoFingerTouch(e.touches);return}let n=this._touchDistance(e.touches),s=this._touchAngle(e.touches);if(this._pinchDist!=null&&this._pinchDist>0&&(this.camera.disableFollow(),this.camera.zoom(-(n-this._pinchDist),.15)),this._pinchAngle!=null){let r=this._normalizeAngleDelta(s-this._pinchAngle);Math.abs(r)>.001&&(this.camera.disableFollow(),this.camera.rotate(-r/kM,0))}this._pinchDist=n,this._pinchAngle=s;return}if(e.touches.length!==1)return;e.preventDefault();let t=this._touchCoords(e);if(this.mode==="facing"&&!this._isPanning&&!this._isRotating){this._updateFacingFromPointer(t.x,t.y);return}this._drag(t.x,t.y,!1)}_onTouchEnd(e){if(!this.enabled)return;if(e.touches.length===1){this._pinchDist=null,this._pinchAngle=null;let n=e.touches[0];this._downPixel={x:n.clientX,y:n.clientY},this._isTouch=!0,this._prevNdc=tn(this.container,n.clientX,n.clientY);return}if(e.touches.length<2&&(this._pinchDist=null,this._pinchAngle=null),e.touches.length>=1)return;let t=this._touchCoords(e);this._isTouch=!1,this._endDrag(t.x,t.y)}};var zM=Symbol.for("preact-signals");function Ch(){if(Xi>1)Xi--;else{var i,e=!1;for(function(){var s=Fo;for(Fo=void 0;s!==void 0;)s.S.v===s.v&&(s.S.i=s.i),s=s.o}();Ur!==void 0;){var t=Ur;for(Ur=void 0,Oo++;t!==void 0;){var n=t.u;if(t.u=void 0,t.f&=-3,!(8&t.f)&&Zp(t))try{t.c()}catch(s){e||(i=s,e=!0)}t=n}}if(Oo=0,Xi--,e)throw i}}var ft=void 0;function ko(i){var e=ft;ft=void 0;try{return i()}finally{ft=e}}var Xp,Ur=void 0,Xi=0,Oo=0;var Yp=0,Fo=void 0,Bo=0;function qp(i){if(ft!==void 0){var e=i.n;if(e===void 0||e.t!==ft)return e={i:0,S:i,p:ft.s,n:void 0,t:ft,e:void 0,x:void 0,r:e},ft.s!==void 0&&(ft.s.n=e),ft.s=e,i.n=e,32&ft.f&&i.S(e),e;if(e.i===-1)return e.i=0,e.n!==void 0&&(e.n.p=e.p,e.p!==void 0&&(e.p.n=e.n),e.p=ft.s,e.n=void 0,ft.s.n=e,ft.s=e),e}}function qt(i,e){this.v=i,this.i=0,this.n=void 0,this.t=void 0,this.l=0,this.W=e?.watched,this.Z=e?.unwatched,this.name=e?.name}qt.prototype.brand=zM;qt.prototype.h=function(){return!0};qt.prototype.S=function(i){var e=this,t=this.t;t!==i&&i.e===void 0&&(i.x=t,this.t=i,t!==void 0?t.e=i:ko(function(){var n;(n=e.W)==null||n.call(e)}))};qt.prototype.U=function(i){var e=this;if(this.t!==void 0){var t=i.e,n=i.x;t!==void 0&&(t.x=n,i.e=void 0),n!==void 0&&(n.e=t,i.x=void 0),i===this.t&&(this.t=n,n===void 0&&ko(function(){var s;(s=e.Z)==null||s.call(e)}))}};qt.prototype.subscribe=function(i){var e=this;return Ih(function(){var t=e.value;ko(function(){return i(t)})},{name:"sub"})};qt.prototype.valueOf=function(){return this.value};qt.prototype.toString=function(){return this.value+""};qt.prototype.toJSON=function(){return this.value};qt.prototype.peek=function(){var i=this;return ko(function(){return i.value})};Object.defineProperty(qt.prototype,"value",{get:function(){var i=qp(this);return i!==void 0&&(i.i=this.i),this.v},set:function(i){if(i!==this.v){if(Oo>100)throw new Error("Cycle detected");(function(t){Xi!==0&&Oo===0&&t.l!==Yp&&(t.l=Yp,Fo={S:t,v:t.v,i:t.i,o:Fo})})(this),this.v=i,this.i++,Bo++,Xi++;try{for(var e=this.t;e!==void 0;e=e.x)e.t.N()}finally{Ch()}}}});function Kp(i,e){return new qt(i,e)}function Zp(i){for(var e=i.s;e!==void 0;e=e.n)if(e.S.i!==e.i||!e.S.h()||e.S.i!==e.i)return!0;return!1}function Jp(i){for(var e=i.s;e!==void 0;e=e.n){var t=e.S.n;if(t!==void 0&&(e.r=t),e.S.n=e,e.i=-1,e.n===void 0){i.s=e;break}}}function jp(i){for(var e=i.s,t=void 0;e!==void 0;){var n=e.p;e.i===-1?(e.S.U(e),n!==void 0&&(n.n=e.n),e.n!==void 0&&(e.n.p=n)):t=e,e.S.n=e.r,e.r!==void 0&&(e.r=void 0),e=n}i.s=t}function Ns(i,e){qt.call(this,void 0,e),this.x=i,this.s=void 0,this.g=Bo-1,this.f=4}Ns.prototype=new qt;Ns.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===Bo))return!0;if(this.g=Bo,this.f|=1,this.i>0&&!Zp(this))return this.f&=-2,!0;var i=ft;try{Jp(this),ft=this;var e=this.x();(16&this.f||this.v!==e||this.i===0)&&(this.v=e,this.f&=-17,this.i++)}catch(t){this.v=t,this.f|=16,this.i++}return ft=i,jp(this),this.f&=-2,!0};Ns.prototype.S=function(i){if(this.t===void 0){this.f|=36;for(var e=this.s;e!==void 0;e=e.n)e.S.S(e)}qt.prototype.S.call(this,i)};Ns.prototype.U=function(i){if(this.t!==void 0&&(qt.prototype.U.call(this,i),this.t===void 0)){this.f&=-33;for(var e=this.s;e!==void 0;e=e.n)e.S.U(e)}};Ns.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var i=this.t;i!==void 0;i=i.x)i.t.N()}};Object.defineProperty(Ns.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var i=qp(this);if(this.h(),i!==void 0&&(i.i=this.i),16&this.f)throw this.v;return this.v}});function Qp(i){var e=i.m;if(i.m=void 0,typeof e=="function"){Xi++;var t=ft;ft=void 0;try{e()}catch(n){throw i.f&=-2,i.f|=8,Ph(i),n}finally{ft=t,Ch()}}}function Ph(i){for(var e=i.s;e!==void 0;e=e.n)e.S.U(e);i.x=void 0,i.s=void 0,Qp(i)}function GM(i){if(ft!==this)throw new Error("Out-of-order effect");jp(this),ft=i,this.f&=-2,8&this.f&&Ph(this),Ch()}function Os(i,e){this.x=i,this.m=void 0,this.s=void 0,this.u=void 0,this.f=32,this.name=e?.name,Xp&&Xp.push(this)}Os.prototype.c=function(){var i=this.S();try{if(8&this.f||this.x===void 0)return;var e=this.x();typeof e=="function"&&(this.m=e)}finally{i()}};Os.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,Qp(this),Jp(this),Xi++;var i=ft;return ft=this,GM.bind(this,i)};Os.prototype.N=function(){2&this.f||(this.f|=2,this.u=Ur,Ur=this)};Os.prototype.d=function(){this.f|=8,1&this.f||Ph(this)};Os.prototype.dispose=function(){this.d()};function Ih(i,e){var t=new Os(i,e);try{t.c()}catch(s){throw t.d(),s}var n=t.d.bind(t);return n[Symbol.dispose]=n,n}var Ho=globalThis,Go=Ho.ShadowRoot&&(Ho.ShadyCSS===void 0||Ho.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,t0=Symbol(),e0=new WeakMap,zo=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==t0)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Go&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=e0.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&e0.set(t,e))}return e}toString(){return this.cssText}},n0=i=>new zo(typeof i=="string"?i:i+"",void 0,t0);var i0=(i,e)=>{if(Go)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),s=Ho.litNonce;s!==void 0&&n.setAttribute("nonce",s),n.textContent=t.cssText,i.appendChild(n)}},Lh=Go?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return n0(t)})(i):i;var{is:VM,defineProperty:WM,getOwnPropertyDescriptor:$M,getOwnPropertyNames:XM,getOwnPropertySymbols:YM,getPrototypeOf:qM}=Object,Vo=globalThis,s0=Vo.trustedTypes,KM=s0?s0.emptyScript:"",ZM=Vo.reactiveElementPolyfillSupport,Nr=(i,e)=>i,Dh={toAttribute(i,e){switch(e){case Boolean:i=i?KM:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},a0=(i,e)=>!VM(i,e),r0={attribute:!0,type:String,converter:Dh,reflect:!1,useDefault:!1,hasChanged:a0};Symbol.metadata??=Symbol("metadata"),Vo.litPropertyMetadata??=new WeakMap;var ti=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=r0){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),s=this.getPropertyDescriptor(e,n,t);s!==void 0&&WM(this.prototype,e,s)}}static getPropertyDescriptor(e,t,n){let{get:s,set:r}=$M(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get:s,set(a){let o=s?.call(this);r?.call(this,a),this.requestUpdate(e,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??r0}static _$Ei(){if(this.hasOwnProperty(Nr("elementProperties")))return;let e=qM(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Nr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Nr("properties"))){let t=this.properties,n=[...XM(t),...YM(t)];for(let s of n)this.createProperty(s,t[s])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,s]of t)this.elementProperties.set(n,s)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let s=this._$Eu(t,n);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let s of n)t.unshift(Lh(s))}else e!==void 0&&t.push(Lh(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return i0(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,n);if(s!==void 0&&n.reflect===!0){let r=(n.converter?.toAttribute!==void 0?n.converter:Dh).toAttribute(t,n.type);this._$Em=e,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(e,t){let n=this.constructor,s=n._$Eh.get(e);if(s!==void 0&&this._$Em!==s){let r=n.getPropertyOptions(s),a=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:Dh;this._$Em=s;let o=a.fromAttribute(t,r.type);this[s]=o??this._$Ej?.get(s)??o,this._$Em=null}}requestUpdate(e,t,n,s=!1,r){if(e!==void 0){let a=this.constructor;if(s===!1&&(r=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??a0)(r,t)||n.useDefault&&n.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:s,wrapped:r},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),r!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),s===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[s,r]of this._$Ep)this[s]=r;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[s,r]of n){let{wrapped:a}=r,o=this[s];a!==!0||this._$AL.has(s)||o===void 0||this.C(s,void 0,r,o)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};ti.elementStyles=[],ti.shadowRootOptions={mode:"open"},ti[Nr("elementProperties")]=new Map,ti[Nr("finalized")]=new Map,ZM?.({ReactiveElement:ti}),(Vo.reactiveElementVersions??=[]).push("2.1.2");var Hh=globalThis,o0=i=>i,Wo=Hh.trustedTypes,l0=Wo?Wo.createPolicy("lit-html",{createHTML:i=>i}):void 0,p0="$lit$",vi=`lit$${Math.random().toFixed(9).slice(2)}$`,m0="?"+vi,JM=`<${m0}>`,Ki=document,Fr=()=>Ki.createComment(""),Br=i=>i===null||typeof i!="object"&&typeof i!="function",zh=Array.isArray,jM=i=>zh(i)||typeof i?.[Symbol.iterator]=="function",Uh=`[ 	
\f\r]`,Or=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,c0=/-->/g,h0=/>/g,Yi=RegExp(`>|${Uh}(?:([^\\s"'>=/]+)(${Uh}*=${Uh}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),u0=/'/g,d0=/"/g,g0=/^(?:script|style|textarea|title)$/i,Gh=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),j=Gh(1),oE=Gh(2),lE=Gh(3),Pn=Symbol.for("lit-noChange"),bt=Symbol.for("lit-nothing"),f0=new WeakMap,qi=Ki.createTreeWalker(Ki,129);function y0(i,e){if(!zh(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return l0!==void 0?l0.createHTML(e):e}var QM=(i,e)=>{let t=i.length-1,n=[],s,r=e===2?"<svg>":e===3?"<math>":"",a=Or;for(let o=0;o<t;o++){let l=i[o],c,h,u=-1,d=0;for(;d<l.length&&(a.lastIndex=d,h=a.exec(l),h!==null);)d=a.lastIndex,a===Or?h[1]==="!--"?a=c0:h[1]!==void 0?a=h0:h[2]!==void 0?(g0.test(h[2])&&(s=RegExp("</"+h[2],"g")),a=Yi):h[3]!==void 0&&(a=Yi):a===Yi?h[0]===">"?(a=s??Or,u=-1):h[1]===void 0?u=-2:(u=a.lastIndex-h[2].length,c=h[1],a=h[3]===void 0?Yi:h[3]==='"'?d0:u0):a===d0||a===u0?a=Yi:a===c0||a===h0?a=Or:(a=Yi,s=void 0);let p=a===Yi&&i[o+1].startsWith("/>")?" ":"";r+=a===Or?l+JM:u>=0?(n.push(c),l.slice(0,u)+p0+l.slice(u)+vi+p):l+vi+(u===-2?o:p)}return[y0(i,r+(i[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},kr=class i{constructor({strings:e,_$litType$:t},n){let s;this.parts=[];let r=0,a=0,o=e.length-1,l=this.parts,[c,h]=QM(e,t);if(this.el=i.createElement(c,n),qi.currentNode=this.el.content,t===2||t===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(s=qi.nextNode())!==null&&l.length<o;){if(s.nodeType===1){if(s.hasAttributes())for(let u of s.getAttributeNames())if(u.endsWith(p0)){let d=h[a++],p=s.getAttribute(u).split(vi),y=/([.?@])?(.*)/.exec(d);l.push({type:1,index:r,name:y[2],strings:p,ctor:y[1]==="."?Oh:y[1]==="?"?Fh:y[1]==="@"?Bh:Bs}),s.removeAttribute(u)}else u.startsWith(vi)&&(l.push({type:6,index:r}),s.removeAttribute(u));if(g0.test(s.tagName)){let u=s.textContent.split(vi),d=u.length-1;if(d>0){s.textContent=Wo?Wo.emptyScript:"";for(let p=0;p<d;p++)s.append(u[p],Fr()),qi.nextNode(),l.push({type:2,index:++r});s.append(u[d],Fr())}}}else if(s.nodeType===8)if(s.data===m0)l.push({type:2,index:r});else{let u=-1;for(;(u=s.data.indexOf(vi,u+1))!==-1;)l.push({type:7,index:r}),u+=vi.length-1}r++}}static createElement(e,t){let n=Ki.createElement("template");return n.innerHTML=e,n}};function Fs(i,e,t=i,n){if(e===Pn)return e;let s=n!==void 0?t._$Co?.[n]:t._$Cl,r=Br(e)?void 0:e._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),r===void 0?s=void 0:(s=new r(i),s._$AT(i,t,n)),n!==void 0?(t._$Co??=[])[n]=s:t._$Cl=s),s!==void 0&&(e=Fs(i,s._$AS(i,e.values),s,n)),e}var Nh=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,s=(e?.creationScope??Ki).importNode(t,!0);qi.currentNode=s;let r=qi.nextNode(),a=0,o=0,l=n[0];for(;l!==void 0;){if(a===l.index){let c;l.type===2?c=new Hr(r,r.nextSibling,this,e):l.type===1?c=new l.ctor(r,l.name,l.strings,this,e):l.type===6&&(c=new kh(r,this,e)),this._$AV.push(c),l=n[++o]}a!==l?.index&&(r=qi.nextNode(),a++)}return qi.currentNode=Ki,s}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},Hr=class i{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,s){this.type=2,this._$AH=bt,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Fs(this,e,t),Br(e)?e===bt||e==null||e===""?(this._$AH!==bt&&this._$AR(),this._$AH=bt):e!==this._$AH&&e!==Pn&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):jM(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==bt&&Br(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ki.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,s=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=kr.createElement(y0(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===s)this._$AH.p(t);else{let r=new Nh(s,this),a=r.u(this.options);r.p(t),this.T(a),this._$AH=r}}_$AC(e){let t=f0.get(e.strings);return t===void 0&&f0.set(e.strings,t=new kr(e)),t}k(e){zh(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,s=0;for(let r of e)s===t.length?t.push(n=new i(this.O(Fr()),this.O(Fr()),this,this.options)):n=t[s],n._$AI(r),s++;s<t.length&&(this._$AR(n&&n._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=o0(e).nextSibling;o0(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Bs=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,s,r){this.type=1,this._$AH=bt,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=bt}_$AI(e,t=this,n,s){let r=this.strings,a=!1;if(r===void 0)e=Fs(this,e,t,0),a=!Br(e)||e!==this._$AH&&e!==Pn,a&&(this._$AH=e);else{let o=e,l,c;for(e=r[0],l=0;l<r.length-1;l++)c=Fs(this,o[n+l],t,l),c===Pn&&(c=this._$AH[l]),a||=!Br(c)||c!==this._$AH[l],c===bt?e=bt:e!==bt&&(e+=(c??"")+r[l+1]),this._$AH[l]=c}a&&!s&&this.j(e)}j(e){e===bt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Oh=class extends Bs{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===bt?void 0:e}},Fh=class extends Bs{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==bt)}},Bh=class extends Bs{constructor(e,t,n,s,r){super(e,t,n,s,r),this.type=5}_$AI(e,t=this){if((e=Fs(this,e,t,0)??bt)===Pn)return;let n=this._$AH,s=e===bt&&n!==bt||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,r=e!==bt&&(n===bt||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},kh=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Fs(this,e)}};var eb=Hh.litHtmlPolyfillSupport;eb?.(kr,Hr),(Hh.litHtmlVersions??=[]).push("3.3.3");var _0=(i,e,t)=>{let n=t?.renderBefore??e,s=n._$litPart$;if(s===void 0){let r=t?.renderBefore??null;n._$litPart$=s=new Hr(e.insertBefore(Fr(),r),r,void 0,t??{})}return s._$AI(i),s};var Vh=globalThis,et=class extends ti{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=_0(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Pn}};et._$litElement$=!0,et.finalized=!0,Vh.litElementHydrateSupport?.({LitElement:et});var tb=Vh.litElementPolyfillSupport;tb?.({LitElement:et});(Vh.litElementVersions??=[]).push("4.2.2");var Ge=Kp(nb());function nb(){return{screen:"mode-select",phase:"draft",gameMode:"pvp",unlockedStageIndex:0,currentPlayer:1,turnCount:0,maxTurns:200,turnsLeft:null,isHumanTurn:!0,selectedUnit:null,previewUnit:null,availableSkills:[],actionState:{attackMode:!1,skillMode:!1,choosingFacing:!1,hasMoved:!1,hasAttacked:!1},draft:null,battleStart:!1,gameOver:null,online:null,rotate:!1,editor:null,story:null,settings:null}}function Qe(i){Ge.value={...Ge.value,...i}}function pt(i=et){return class extends i{_disposeEffect=null;connectedCallback(){super.connectedCallback(),this._startEffect()}disconnectedCallback(){super.disconnectedCallback(),this._disposeEffect&&(this._disposeEffect(),this._disposeEffect=null)}_startEffect(){this._disposeEffect=Ih(()=>{Ge.value,this.requestUpdate()})}}}var x0={version:1,name:"Humble Beginnings",w:23,h:17,type:[[2,2,2,2,2,1,1,1,2,3,3,3,3,3,2,1,1,1,2,2,2,2,2],[2,2,2,2,1,1,1,1,2,3,3,3,3,3,2,1,1,1,1,2,2,2,2],[2,2,2,4,1,1,1,1,2,3,3,3,3,3,2,1,1,1,1,4,2,2,2],[2,2,2,1,1,4,4,1,1,2,7,7,7,2,1,1,4,4,1,1,2,2,2],[2,2,4,1,1,1,1,1,1,1,7,7,7,1,1,1,1,1,1,1,4,2,2],[2,4,1,1,1,1,1,1,1,4,7,7,7,2,1,1,1,1,1,1,1,4,2],[2,2,4,1,1,1,2,2,2,2,3,3,3,4,2,2,2,1,1,1,4,2,2],[2,4,4,1,1,4,1,1,2,4,3,3,3,2,2,1,1,4,1,1,4,4,2],[2,2,4,1,1,1,1,1,1,4,3,3,3,2,1,1,1,1,1,1,4,2,2],[2,4,4,1,1,1,1,1,1,2,3,3,3,4,1,1,1,1,1,1,4,4,2],[2,2,4,1,1,4,2,1,1,2,3,3,3,4,1,1,2,4,1,1,4,2,2],[2,2,2,1,1,2,4,1,1,4,3,3,3,2,1,1,4,2,1,1,2,2,2],[2,2,1,1,1,2,1,1,1,2,3,3,3,4,1,1,1,2,1,1,1,2,2],[2,1,1,1,2,2,1,1,1,4,3,3,3,2,1,1,1,2,2,1,1,1,2],[4,1,1,2,2,2,1,1,2,4,3,3,3,2,2,1,1,2,2,2,1,1,4],[2,2,1,5,5,5,5,1,2,2,3,3,3,4,2,1,6,6,6,6,1,2,2],[4,2,2,5,5,5,5,2,2,2,3,3,3,2,2,2,6,6,6,6,2,2,4]],height:[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],units:[{player:2,class:"bandit",level:1,x:4,y:15,facing:{dx:1,dy:0}},{player:2,class:"hunter",level:1,x:5,y:15,facing:{dx:1,dy:0}},{player:2,class:"ghoul",level:1,x:4,y:16,facing:{dx:1,dy:0}},{player:2,class:"assassin",level:1,x:5,y:16,facing:{dx:1,dy:0},tag:"boss"}]};var v0={version:1,name:"Marshland",w:23,h:17,type:[[2,2,2,4,1,1,1,1,1,1,1,2,4,3,0,3,3,1,1,4,2,2,2],[2,2,2,4,1,1,1,3,1,1,3,1,2,3,0,0,3,1,3,1,4,2,2],[2,2,4,1,1,3,3,1,1,3,1,3,3,1,3,0,0,0,0,1,1,4,2],[2,2,1,1,3,3,1,4,3,1,1,3,0,0,0,3,0,3,0,1,1,4,2],[4,4,1,3,3,1,1,3,0,0,0,0,0,3,0,0,0,3,0,3,1,1,4],[1,1,1,3,1,3,1,3,0,3,3,3,0,3,4,3,0,0,0,0,1,1,1],[1,1,1,0,0,0,0,0,0,3,3,3,0,0,3,3,1,1,0,0,0,1,1],[5,5,1,0,3,4,3,1,0,0,7,7,7,0,0,3,1,3,0,3,0,6,6],[5,5,3,0,3,3,1,3,1,0,7,7,7,3,3,4,3,1,0,0,3,6,6],[5,5,0,0,1,3,1,1,1,0,7,7,7,4,3,3,1,4,3,0,3,6,6],[5,5,0,3,3,3,3,1,3,0,0,3,0,3,4,3,3,3,0,0,3,6,6],[1,1,0,0,0,1,4,3,3,0,3,3,0,3,3,0,0,0,0,3,1,1,1],[1,1,1,3,0,0,3,1,1,0,0,3,0,3,0,0,3,3,0,1,3,1,4],[4,1,1,1,3,0,0,0,3,1,3,0,0,3,0,0,0,0,0,3,1,4,2],[2,4,1,1,1,3,0,0,4,3,1,3,0,0,0,1,3,4,3,3,1,4,2],[2,2,4,4,1,1,3,0,0,0,0,2,4,0,3,3,3,3,1,1,4,2,2],[2,2,2,4,1,1,1,1,1,0,3,3,2,2,3,1,1,1,1,4,2,2,2]],height:[[2,2,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,2,2],[2,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1],[2,2,0,1,0,0,0,0,0,1,2,2,2,1,0,0,0,0,0,0,1,2,2],[2,2,0,1,0,0,0,0,0,1,2,2,2,0,0,0,0,0,0,0,0,2,2],[2,2,1,1,0,0,0,0,0,1,2,2,2,0,0,0,0,0,0,0,0,2,2],[2,2,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,2,2],[1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1],[2,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,2,2]],units:[{player:2,class:"witch",level:1,x:0,y:7,facing:{dx:1,dy:0}},{player:2,class:"shaman",level:1,x:1,y:7,facing:{dx:1,dy:0}},{player:2,class:"necromancer",level:1,x:0,y:8,facing:{dx:1,dy:0}},{player:2,class:"cannibal",level:1,x:1,y:8,facing:{dx:1,dy:0}},{player:2,class:"vampire",level:1,x:0,y:9,facing:{dx:1,dy:0}}]};var M0={version:1,name:"Ashen Woods",w:21,h:15,type:[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,5,1,1,1,1,1,1,1,1,1,1],[1,2,1,2,1,1,5,4,1,1,2,1,1,1,1,1,1,1,2,1,2],[2,1,1,1,2,1,1,2,5,1,1,1,5,2,1,4,2,1,1,1,4],[2,1,1,1,5,1,1,1,2,1,1,2,1,1,1,1,5,1,2,1,1],[2,1,1,1,2,1,1,2,1,2,2,2,1,1,1,2,1,1,1,2,2],[2,2,2,2,2,2,1,1,1,7,7,7,2,1,1,2,2,2,2,2,2],[2,2,2,2,2,2,1,1,1,7,7,7,1,1,1,2,2,2,2,2,2],[2,4,2,4,2,2,1,1,1,1,1,2,1,2,1,2,2,2,2,2,2],[2,1,1,2,1,1,1,4,4,1,1,1,1,1,2,1,1,2,1,2,4],[1,1,2,1,2,2,4,1,1,1,1,1,1,2,1,1,1,1,2,2,1],[1,1,2,1,2,1,2,2,4,2,1,1,1,1,1,1,1,1,2,1,1],[1,1,1,2,1,2,2,2,1,1,2,1,1,1,1,2,1,1,1,1,1],[1,1,1,1,1,1,1,1,6,6,6,6,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,6,6,6,6,1,1,1,1,1,1,1,1,1]],height:[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],units:[{player:2,class:"hunter",level:1,x:4,y:4,facing:{dx:0,dy:1}},{player:2,class:"bandit",level:1,x:16,y:4,facing:{dx:0,dy:1}},{player:2,class:"knight",level:1,x:8,y:3,facing:{dx:0,dy:1}},{player:2,class:"knight",level:1,x:12,y:3,facing:{dx:0,dy:1}},{player:2,class:"mage",level:1,x:6,y:2,facing:{dx:0,dy:1}},{player:2,class:"berserker",level:3,x:10,y:1,facing:{dx:0,dy:1},tag:"boss"}]};var b0={version:1,name:"Broken Bridge",w:19,h:15,type:[[1,1,1,1,1,1,5,1,1,1,1,1,5,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,5,1,1,1,1,1,1,1,1,1],[1,1,1,5,1,1,1,1,1,1,1,1,1,1,1,5,1,1,1],[1,1,1,1,5,1,1,1,1,1,1,1,1,1,5,1,1,1,1],[3,3,3,3,0,3,3,3,3,3,3,3,3,3,0,3,3,3,3],[3,3,3,3,0,3,3,3,3,3,3,3,3,3,0,3,3,3,3],[1,1,1,1,1,1,1,1,7,7,7,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,7,7,7,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[2,2,2,1,1,1,1,2,2,1,2,2,1,1,4,2,4,4,1],[1,1,1,2,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1],[1,1,1,2,1,1,1,2,4,1,1,1,1,1,4,1,1,4,2],[1,1,1,1,4,1,4,1,2,2,1,2,1,1,1,1,2,1,1],[1,1,1,1,1,1,6,6,6,6,6,6,1,1,1,1,1,1,1],[1,1,1,1,1,1,6,6,6,6,6,6,1,1,1,1,1,1,1]],height:[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],units:[{player:2,class:"lancer",level:1,x:4,y:3,facing:{dx:0,dy:1}},{player:2,class:"lancer",level:1,x:14,y:3,facing:{dx:0,dy:1}},{player:2,class:"werewolf",level:1,x:3,y:2,facing:{dx:0,dy:1}},{player:2,class:"werewolf",level:1,x:15,y:2,facing:{dx:0,dy:1}},{player:2,class:"hunter",level:1,x:9,y:1,facing:{dx:0,dy:1}},{player:2,class:"hunter",level:1,x:6,y:0,facing:{dx:0,dy:1}},{player:2,class:"assassin",level:1,x:12,y:0,facing:{dx:0,dy:1}}]};var S0={version:1,name:"The Long March",w:25,h:17,type:[[1,1,1,1,1,1,1,1,1,1,5,5,5,5,5,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,5,5,5,5,5,1,1,1,1,1,1,1,1,1,1],[2,1,1,1,1,1,1,2,1,1,2,1,1,1,2,1,1,1,1,1,1,1,1,1,1],[1,2,1,1,1,1,4,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,2,2,1,1,4,1,1,1,1,1,1,2,1,1,2,1,1,2,1,1,1,1,2],[3,3,3,3,3,3,4,3,3,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1],[1,2,1,1,1,1,2,1,1,1,1,1,1,1,1,2,1,1,1,1,2,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,2,7,7,7,1,2,2,1,2,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,2,1,1,7,7,7,1,1,1,1,4,1,1,2,2,1,1],[1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,2,2,4,1,1,1,1,1,1],[1,1,1,2,1,1,1,1,3,3,3,3,3,3,3,3,3,3,4,3,3,3,3,3,3],[1,1,1,1,1,1,2,1,1,1,1,1,1,1,2,1,2,1,4,1,1,1,1,1,1],[1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1],[2,1,1,1,2,1,2,1,2,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1],[1,1,1,1,1,1,1,1,1,1,6,6,6,6,6,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,6,6,6,6,6,1,1,1,1,1,1,1,1,1,1]],height:[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],units:[{player:2,class:"ranger",level:1,x:5,y:3,facing:{dx:0,dy:1}},{player:2,class:"ranger",level:1,x:19,y:3,facing:{dx:0,dy:1}},{player:2,class:"knight",level:1,x:10,y:6,facing:{dx:0,dy:1}},{player:2,class:"knight",level:1,x:14,y:6,facing:{dx:0,dy:1}},{player:2,class:"paladin",level:1,x:12,y:2,facing:{dx:0,dy:1}},{player:2,class:"mage",level:1,x:8,y:2,facing:{dx:0,dy:1}},{player:2,class:"mage",level:1,x:16,y:2,facing:{dx:0,dy:1}}]};var w0={version:1,name:"Envoy's Road",w:23,h:15,type:[[1,1,1,1,1,1,1,1,1,5,5,5,5,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,5,5,5,5,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[2,2,2,2,2,1,1,2,1,2,1,1,1,1,1,1,1,2,2,2,2,2,2],[2,2,2,2,2,1,1,2,1,1,1,4,1,1,1,4,1,1,2,2,2,2,2],[2,2,2,2,2,1,1,1,1,1,2,2,4,1,1,1,1,1,2,2,2,2,2],[2,2,2,2,2,2,2,1,1,1,7,7,7,1,1,2,1,1,2,2,2,2,2],[2,2,2,2,2,2,1,1,4,1,7,7,7,2,1,1,1,2,2,2,2,2,2],[2,2,2,2,2,1,1,1,1,4,1,1,1,2,1,1,1,1,2,2,2,2,2],[2,2,2,2,2,2,1,1,1,2,1,1,2,1,1,1,1,4,2,2,2,2,2],[2,2,2,2,2,1,1,2,1,1,1,1,4,1,4,1,1,1,2,2,2,2,2],[2,2,2,2,2,1,1,2,1,2,1,1,1,1,1,1,1,1,2,2,2,2,2],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,6,6,6,6,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,6,6,6,6,1,1,1,1,1,1,1,1,1,1]],height:[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],units:[{player:1,class:"oracle",level:2,x:11,y:12,facing:{dx:0,dy:-1},tag:"envoy"},{player:2,class:"assassin",level:1,x:6,y:8,facing:{dx:0,dy:1}},{player:2,class:"assassin",level:1,x:16,y:8,facing:{dx:0,dy:1}},{player:2,class:"hunter",level:1,x:9,y:5,facing:{dx:0,dy:1}},{player:2,class:"hunter",level:1,x:13,y:5,facing:{dx:0,dy:1}},{player:2,class:"lancer",level:1,x:11,y:3,facing:{dx:0,dy:1}},{player:2,class:"ninja",level:1,x:8,y:2,facing:{dx:0,dy:1}}]};var E0={version:1,name:"Warlord's Gate",w:25,h:17,type:[[1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,0,4,0,4,0,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,0,0,0,0,5,4,0,4,0,0,0,0,1,1,1,1,1,1,1],[1,1,1,1,1,1,0,0,0,4,4,4,4,4,4,4,0,0,1,1,1,1,1,1,1],[1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1],[1,1,1,1,1,1,4,4,4,4,4,0,0,0,4,4,4,4,4,1,1,1,1,1,1],[1,2,1,1,1,1,4,1,1,5,2,0,0,0,1,5,1,1,4,1,2,1,1,1,1],[1,1,1,1,1,1,4,1,1,1,0,7,7,7,2,1,1,1,4,1,1,1,1,1,1],[1,2,2,1,2,2,4,1,1,1,0,7,7,7,1,1,1,1,4,1,1,1,1,1,1],[1,1,1,1,1,1,4,1,1,1,0,0,0,0,1,2,1,1,2,2,1,1,1,1,2],[1,1,1,1,1,1,1,1,2,1,2,0,0,2,1,1,1,1,1,1,1,1,1,1,2],[1,1,1,1,1,1,2,1,1,1,0,0,0,0,1,1,1,1,1,2,1,1,1,1,1],[1,1,1,1,1,2,1,1,1,1,0,0,0,0,2,1,1,1,1,2,1,1,1,1,1],[1,2,1,1,1,2,1,1,1,1,2,0,0,0,1,2,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,2,1,2,0,0,0,1,1,2,1,2,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,6,6,6,6,6,6,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,6,6,6,6,6,6,1,1,1,1,1,1,1,1,1,1]],height:[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,1,2,2,2,0,0,0,2,2,2,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],units:[{player:2,class:"knight",level:1,x:9,y:6,facing:{dx:0,dy:1}},{player:2,class:"knight",level:1,x:15,y:6,facing:{dx:0,dy:1}},{player:2,class:"lancer",level:1,x:12,y:6,facing:{dx:0,dy:1}},{player:2,class:"hunter",level:1,x:7,y:3,facing:{dx:0,dy:1}},{player:2,class:"mage",level:1,x:17,y:3,facing:{dx:0,dy:1}},{player:2,class:"samurai",level:1,x:10,y:2,facing:{dx:0,dy:1}},{player:2,class:"samurai",level:1,x:14,y:2,facing:{dx:0,dy:1}},{player:2,class:"barbarian",level:3,x:12,y:1,facing:{dx:0,dy:1},tag:"boss"}]};var T0={version:1,name:"Sunken Keep",w:23,h:17,type:[[1,1,1,1,1,1,1,1,1,7,7,7,7,7,1,1,1,1,1,2,2,4,1],[1,1,1,1,1,1,1,4,2,0,0,0,0,0,2,2,1,1,1,2,4,1,1],[1,2,1,1,1,1,1,4,4,2,2,2,2,2,4,4,1,2,1,1,1,1,1],[1,1,1,1,1,2,1,2,1,1,1,0,2,1,2,1,2,1,2,1,1,2,1],[2,1,2,4,1,1,2,1,1,2,1,0,1,1,1,1,1,1,1,1,2,1,1],[4,1,1,1,1,2,1,1,3,3,3,0,3,3,3,2,2,1,1,2,1,2,1],[1,2,1,2,1,1,1,2,3,2,1,0,1,2,3,2,2,2,1,1,1,2,1],[1,1,1,2,2,2,2,2,3,1,4,0,4,2,3,1,1,2,2,2,2,1,1],[4,1,2,1,1,1,1,1,0,0,0,0,0,0,0,2,1,1,1,1,2,1,1],[1,1,1,1,2,1,1,2,3,1,4,4,4,1,3,1,1,2,1,1,1,2,1],[1,4,2,4,1,4,1,2,3,2,2,0,1,1,3,2,1,2,2,2,1,1,1],[4,4,1,1,1,1,1,1,3,3,3,0,3,3,3,1,1,1,1,2,1,1,4],[2,2,1,2,4,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,2,2,2],[1,1,1,1,1,1,1,1,1,2,2,4,4,0,2,1,1,4,2,1,1,4,4],[1,1,1,1,1,1,2,1,1,0,0,0,0,0,1,4,2,1,1,1,1,1,4],[1,1,1,1,1,1,1,1,1,6,6,6,6,6,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,6,6,6,6,6,1,1,1,1,1,1,1,1,1]],height:[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],units:[{player:2,class:"paladin",level:1,x:11,y:8,facing:{dx:0,dy:1}},{player:2,class:"monk",level:1,x:10,y:8,facing:{dx:0,dy:1}},{player:2,class:"monk",level:1,x:12,y:8,facing:{dx:0,dy:1}},{player:2,class:"hunter",level:1,x:4,y:4,facing:{dx:0,dy:1}},{player:2,class:"hunter",level:1,x:18,y:4,facing:{dx:0,dy:1}},{player:2,class:"mage",level:1,x:11,y:3,facing:{dx:0,dy:1}},{player:2,class:"assassin",level:1,x:6,y:12,facing:{dx:0,dy:1}},{player:2,class:"assassin",level:1,x:16,y:12,facing:{dx:0,dy:1}}]};var A0={version:1,name:"Final Vigil",w:21,h:17,type:[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,2,1,2,1,5,1,1,1,1,2,1,2,1,1,2],[1,4,1,1,1,1,5,1,1,4,1,1,1,1,5,2,2,1,2,1,2],[1,1,5,1,1,4,1,4,1,1,1,1,2,1,4,1,1,1,5,1,1],[1,4,1,1,1,1,1,2,1,1,1,1,1,1,1,1,2,1,1,1,1],[1,1,2,1,1,1,1,1,1,1,5,1,1,1,2,1,1,2,1,1,1],[1,1,2,1,1,1,1,4,1,7,7,7,1,1,1,1,4,1,1,1,1],[2,1,1,5,1,2,1,2,4,7,7,7,2,2,1,1,1,5,2,1,1],[1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1],[1,4,1,1,1,2,2,1,1,0,0,0,1,4,1,1,1,1,1,2,2],[1,1,1,1,1,1,1,0,0,4,0,4,0,0,1,1,1,1,1,1,1],[1,1,1,1,1,4,4,0,4,0,0,0,4,0,4,4,1,1,1,1,1],[1,1,1,1,1,1,1,0,2,4,4,4,2,0,1,1,1,1,1,1,1],[1,1,1,4,4,3,3,0,0,0,0,0,0,0,3,3,4,4,1,1,1],[1,1,2,4,3,3,3,6,6,6,6,6,6,6,3,3,3,2,2,1,1],[1,2,2,3,3,3,3,6,6,6,6,6,6,6,3,3,3,3,2,2,1]],height:[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0],[0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0],[0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0],[0,0,1,0,0,0,0,2,2,2,2,2,2,2,0,0,0,0,1,0,0]],units:[{player:2,class:"werewolf",level:1,x:3,y:8,facing:{dx:0,dy:1}},{player:2,class:"werewolf",level:1,x:17,y:8,facing:{dx:0,dy:1}},{player:2,class:"berserker",level:1,x:10,y:6,facing:{dx:0,dy:1}},{player:2,class:"hunter",level:1,x:6,y:3,facing:{dx:0,dy:1}},{player:2,class:"hunter",level:1,x:14,y:3,facing:{dx:0,dy:1}},{player:2,class:"ranger",level:1,x:10,y:2,facing:{dx:0,dy:1}},{player:2,class:"assassin",level:1,x:2,y:4,facing:{dx:0,dy:1}},{player:2,class:"assassin",level:1,x:18,y:4,facing:{dx:0,dy:1}},{player:1,class:"shaman",level:2,x:10,y:12,facing:{dx:0,dy:-1},tag:"seer"}]};var R0={version:1,name:"The Iron Throne",w:27,h:19,type:[[1,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,1,1],[1,1,4,4,4,4,4,4,0,2,4,4,0,0,0,4,4,2,0,4,4,4,4,4,1,1,1],[1,1,1,1,4,4,4,4,0,0,4,4,0,0,0,4,4,0,0,4,4,4,1,1,1,1,1],[1,1,1,1,1,4,4,4,0,0,0,4,0,5,0,4,4,0,0,4,4,1,1,1,1,1,1],[1,1,1,1,1,1,5,4,0,0,0,2,4,4,4,2,0,0,0,4,5,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,4,1,0,4,0,0,4,0,0,4,0,0,4,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,4,1,0,4,0,0,4,0,0,5,0,0,4,2,2,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,0,0,0,0,7,7,7,0,4,0,5,2,2,2,1,1,1,1,1],[1,1,3,3,3,3,3,3,3,0,0,4,7,7,7,0,0,4,3,3,3,3,3,3,3,1,1],[1,1,1,1,1,1,1,1,2,4,4,4,0,0,0,0,0,0,1,1,1,2,1,1,1,1,2],[1,1,2,2,1,4,2,1,2,2,2,4,0,0,0,4,0,0,2,2,1,2,1,2,1,1,2],[1,4,2,1,1,1,1,1,2,2,2,2,0,4,2,2,0,2,2,1,1,2,1,1,1,1,2],[4,2,1,1,1,1,2,1,1,1,1,1,2,0,0,0,0,0,2,1,2,1,1,1,1,1,2],[2,2,2,1,4,1,2,2,1,1,2,1,0,0,0,0,0,0,1,1,1,2,1,1,1,1,1],[2,4,2,2,1,1,1,1,1,1,2,2,0,0,0,0,2,0,1,2,4,1,1,1,1,1,1],[4,4,4,4,2,2,1,2,1,1,1,1,0,0,0,0,0,0,2,4,1,1,1,1,1,2,2],[4,4,4,4,4,2,1,1,1,1,6,6,6,6,6,6,6,0,1,1,1,1,1,2,2,2,2],[4,4,4,4,2,1,1,1,1,1,6,6,6,6,6,6,6,0,1,1,1,1,1,2,2,2,2]],height:[[0,0,0,1,1,2,2,2,0,0,0,0,0,0,0,0,0,0,0,2,2,2,1,0,0,0,0],[0,0,0,0,1,2,2,2,0,0,2,2,0,0,0,2,2,0,0,2,2,1,0,0,0,0,0],[0,0,0,0,0,1,2,2,0,0,2,2,1,1,1,2,2,0,0,2,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,2,0,0,0,2,2,2,2,2,2,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[2,2,2,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,2],[2,2,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2]],units:[{player:2,class:"knight",level:1,x:8,y:8,facing:{dx:0,dy:1}},{player:2,class:"knight",level:1,x:18,y:8,facing:{dx:0,dy:1}},{player:2,class:"samurai",level:1,x:11,y:7,facing:{dx:0,dy:1}},{player:2,class:"samurai",level:1,x:15,y:7,facing:{dx:0,dy:1}},{player:2,class:"paladin",level:1,x:13,y:6,facing:{dx:0,dy:1}},{player:2,class:"mage",level:1,x:6,y:4,facing:{dx:0,dy:1}},{player:2,class:"mage",level:1,x:20,y:4,facing:{dx:0,dy:1}},{player:2,class:"ranger",level:1,x:9,y:2,facing:{dx:0,dy:1}},{player:2,class:"ranger",level:1,x:17,y:2,facing:{dx:0,dy:1}},{player:2,class:"necromancer",level:3,x:13,y:3,facing:{dx:0,dy:1},tag:"boss"}]};function $o(i){let e=[..._t];if(i?.allow?.length){let t=new Set(i.allow);e=e.filter(n=>t.has(n))}if(i?.ban?.length){let t=new Set(i.ban);e=e.filter(n=>!t.has(n))}return new Set(e)}function C0(i){return Mi.find(e=>e.id===i)||null}function Xo(i){return Mi.findIndex(e=>e.id===i)}function P0(i){let e=[];for(let t of i?.win||[])if(t.type==="eliminate")e.push("Defeat all enemies");else if(t.type==="boss")e.push(`Defeat the boss (${t.tag||"boss"})`);else if(t.type==="survive")e.push(`Survive ${t.turns} turns`);else if(t.type==="reach")if(t.unitTag)e.push(`Escort ${t.unitTag} to the objective`);else if(t.target==="enemyBase")e.push("Reach the enemy base");else{let n=(t.tiles||[]).length;e.push(`Reach the objective (${n} tile${n===1?"":"s"})`)}for(let t of i?.lose||[])t.type==="protect"&&e.push(`Keep ${t.tag||"VIP"} alive`);return e.length===0&&e.push("Defeat all enemies"),e}var Mi=[{id:"river-walk",name:"River Walk",description:"Draft a small squad and clear the bandits holding the western camp.",map:x0,maxPlayerUnits:4,classPool:{allow:["knight","mage","monk","hunter","lancer","assassin","ranger","paladin"]},maxTurns:80,objectives:{win:[{type:"eliminate"}],lose:[]}},{id:"marsh-land",name:"Marsh Land",description:"Push through the wetlands and seize the enemy base before your squad falls.",map:v0,maxPlayerUnits:3,classPool:{allow:["witch","shaman","necromancer","alchemist","ghoul","vampire","cannibal","berserker"]},maxTurns:80,objectives:{win:[{type:"reach",target:"enemyBase"}],lose:[]}},{id:"ashen-woods",name:"Ashen Woods",description:"A bandit warlord hides in the burnt forest. Cut through the trees and take his head.",map:M0,maxPlayerUnits:4,classPool:{allow:["knight","monk","lancer","hunter","assassin","samurai","werewolf","ranger"]},maxTurns:60,objectives:{win:[{type:"boss",tag:"boss"}],lose:[]}},{id:"broken-bridge",name:"Broken Bridge",description:"Two bridges are all that hold the river. Dig in and survive the assault for 8 turns.",map:b0,maxPlayerUnits:4,classPool:{allow:["knight","paladin","monk","blacksmith","mage","ranger","hunter","amazon"]},maxTurns:60,objectives:{win:[{type:"survive",turns:60}],lose:[]}},{id:"the-long-march",name:"The Long March",description:"Fight across the flooded lowlands and seize the enemy base at the far end.",map:S0,maxPlayerUnits:4,classPool:{ban:["barbarian","necromancer","vampire","cannibal","ghoul"]},maxTurns:60,objectives:{win:[{type:"reach",target:"enemyBase"}],lose:[]}},{id:"envoys-road",name:"Envoy's Road",description:"Guide the envoy up the ambushed road to the enemy base. If she falls, all is lost.",map:w0,maxPlayerUnits:3,classPool:{allow:["knight","paladin","monk","lancer","samurai","werewolf","berserker","amazon"]},maxTurns:50,objectives:{win:[{type:"reach",target:"enemyBase",unitTag:"envoy"}],lose:[{type:"protect",tag:"envoy"}]}},{id:"warlords-gate",name:"Warlord's Gate",description:"Storm the fortress gate. Slay the warlord and leave none of his guard standing.",map:E0,maxPlayerUnits:6,classPool:{allow:["knight","mage","monk","lancer","hunter","assassin","paladin","samurai","ranger","ninja"]},maxTurns:70,objectives:{win:[{type:"boss",tag:"boss"},{type:"eliminate"}],lose:[]}},{id:"sunken-keep",name:"Sunken Keep",description:"A moat rings the shrine. Break the garrison and hold the central dais.",map:T0,maxPlayerUnits:4,classPool:{allow:["mage","witch","shaman","oracle","exorcist","alchemist","ranger","hunter","assassin","ninja"]},maxTurns:60,objectives:{win:[{type:"reach",tiles:[{x:9,y:0},{x:10,y:0},{x:11,y:0},{x:12,y:0},{x:13,y:0}]}],lose:[]}},{id:"final-vigil",name:"Final Vigil",description:"The seer must complete her rite. Hold the redoubt for 12 turns and keep her alive.",map:A0,maxPlayerUnits:4,classPool:{allow:["knight","paladin","monk","blacksmith","berserker","barbarian","samurai","amazon","lancer"]},maxTurns:80,objectives:{win:[{type:"survive",turns:80}],lose:[{type:"protect",tag:"seer"}]}},{id:"iron-throne",name:"The Iron Throne",description:"The last army guards the necromancer king. Destroy them all and end his reign.",map:R0,maxPlayerUnits:7,classPool:{},maxTurns:100,objectives:{win:[{type:"eliminate"},{type:"boss",tag:"boss"}],lose:[]}}];var I0="tactics.story.unlocked";function zr(){try{let i=localStorage.getItem(I0),e=Number(i);return!Number.isFinite(e)||e<0?0:Math.floor(e)}catch{return 0}}function fb(i){let e=Math.max(0,Math.floor(Number(i)||0)),t=zr();if(e<=t)return t;try{localStorage.setItem(I0,String(e))}catch{}return e}function L0(i){return fb((i|0)+1)}function D0(i,e){let t=()=>i.phase==="playing"?i.getActiveUnit():null,n=o=>o?bn(i,o).map((l,c)=>({index:c,name:l.name,cost:l.cost||0,hpCost:l.hpCost||0,level:l.level||1,description:l.description||"",disabled:!!l.disabled,target:l.target})):[],s=()=>{let o=t(),l=i.story?{stageId:i.story.stageId,stageIndex:i.story.stageIndex,objectives:Du(i)}:null;Qe({phase:i.phase,gameMode:i.gameMode,currentPlayer:i.currentPlayer,turnCount:i.turnCount,maxTurns:i.settings.maxTurns,turnsLeft:i.phase==="playing"?i.settings.maxTurns-i.turnCount:null,isHumanTurn:i.phase==="playing"?i.isHumanTurn():!1,selectedUnit:Ws(o),availableSkills:n(o),story:l,actionState:{attackMode:!1,skillMode:!1,choosingFacing:!1,hasMoved:i.hasMoved,hasAttacked:i.hasAttacked}})},r=o=>!(i.gameMode==="cvcpu"||(i.gameMode==="pvcpu"||i.gameMode==="story")&&o!==1||i.gameMode==="online"&&o!==i.localPlayerNumber),a=()=>{let o=i.draft;if(!o){Qe({draft:null});return}let l=un(i);Qe({phase:"draft",gameMode:i.gameMode,currentPlayer:l,draft:{player:l,pickCount:ia(i),pendingClassKey:o.pendingClassKey||null,availableClasses:o.availableClasses?Array.from(o.availableClasses):[],pickedClasses:i.units.filter(c=>c.player===l).map(c=>c.class),picksPerPlayer:i.settings.draftPicksPerPlayer,isHumanTurn:r(l)}})};return e.on("playingStarted",s),e.on("turnChanged",s),e.on("afterEndTurn",s),e.on("actionResolved",s),e.on("initiativeChanged",s),e.on("unitStatsChanged",()=>{let o=t();Qe({selectedUnit:Ws(o),availableSkills:n(o)})}),e.on("selectionChanged",({unit:o,mode:l})=>{Qe({selectedUnit:Ws(o||t()),availableSkills:n(o||t()),actionState:{...Ge.value.actionState,attackMode:l==="attack",skillMode:l==="skill",choosingFacing:l==="facing"}})}),e.on("previewUnit",({unit:o})=>Qe({previewUnit:Ws(o)})),e.on("draftStarted",a),e.on("draftPickChosen",a),e.on("draftTurnChanged",a),e.on("unitPlaced",a),e.on("draftComplete",()=>Qe({draft:null})),e.on("gameOver",({winner:o,title:l,classRecord:c,outcome:h,stageId:u})=>{let d=o??1,p=i.units.filter(g=>g.player===d&&!g.summonedBy).map(g=>({id:g.id,name:g.name,class:g.class,level:g.level,hp:g.hp,maxHp:g.maxHp,mp:g.mp,maxMp:g.maxMp,lowHp:g.maxHp>0&&g.hp/g.maxHp<.3,stats:{str:ze(g,"str"),agi:ze(g,"agi"),vit:ze(g,"vit"),dex:ze(g,"dex"),luk:ze(g,"luk"),int:ze(g,"int")}})),y=null;if(h==="win"&&u){let g=Xo(u);g>=0&&(L0(g),y=g+1)}Qe({phase:"gameover",gameOver:{winner:o,title:l||(o?`Player ${o} wins!`:"Draw"),cards:p,classRecord:c||null,outcome:h||null,stageId:u||null,nextStageIndex:y}})}),e.on("unitMoved",()=>{i.story&&s()}),e.on("unitDied",()=>{i.story&&s()}),{syncHud:s,syncDraft:a,imageFor:o=>hn[o]}}var _e={startMatch:i=>{},toModeSelect:()=>{},openStorySelect:()=>{},startStage:i=>{},retryStage:()=>{},nextStage:()=>{},draftPick:i=>{},attack:()=>{},skill:i=>{},endTurn:()=>{},cancel:()=>{},onlineStart:i=>{},onlineHost:i=>{},onlineHostConnect:i=>{},onlineJoin:(i,e)=>{},onlineCancel:()=>{},openEditor:()=>{},closeEditor:()=>{},editorSetTool:i=>{},editorSetTileType:i=>{},editorSetHeight:i=>{},editorSetUnitPlayer:i=>{},editorSetUnitClass:i=>{},editorSetUnitLevel:i=>{},editorSetUnitFacing:i=>{},editorSetName:i=>{},editorResize:(i,e)=>{},editorNew:()=>{},editorSave:()=>{},editorLoad:i=>{},editorError:i=>{}};var U0=[{value:"balanced",label:"Balanced (lineup mix)"},{value:"tanky",label:"Tanky (HP + VIT)"},{value:"aggressive",label:"Aggressive (STR + AGI)"},{value:"scout",label:"Scout (high AGI)"},{value:"ranged",label:"Ranged (DEX + range)"},{value:"caster",label:"Caster (INT + MP)"},{value:"random",label:"Random"},{value:"custom",label:"Custom order"}],N0=[..._t],pb={tank:["knight","berserker","werewolf","ghoul","barbarian"],melee:["samurai","assassin","ninja","bandit","lancer"],support:["paladin","monk","blacksmith","exorcist","oracle"],ranged:["ranger","amazon","hunter","alchemist","cannibal"],caster:["mage","witch","vampire","necromancer","shaman"]},Gr={tank:2,melee:2,support:1,ranged:1,caster:1},Wh=(()=>{let i={};for(let[e,t]of Object.entries(pb))for(let n of t)i[n]=e;return i})();function O0(i){let e=Math.max(1,i),t=Object.keys(Gr),n=t.reduce((l,c)=>l+(Gr[c]??0),0),s={},r=0;for(let l of t){let c=Math.floor(e*(Gr[l]??0)/n);s[l]=c,r+=c}let a=e-r,o=[...t].sort((l,c)=>s[l]!==s[c]?s[l]-s[c]:(Gr[c]??0)-(Gr[l]??0));for(let l=0;a>0&&l<o.length;l++)s[o[l]]++,a--;return s}var $h=[{id:"story",title:"Story",short:"Story",desc:"Campaign stages with fixed maps and objectives."},{id:"pvp",title:"Player vs Player",short:"PvP",desc:"Two players on the same device."},{id:"pvcpu",title:"Player vs CPU",short:"PvCPU",desc:"You control your army; the CPU responds."},{id:"cvcpu",title:"CPU vs CPU",short:"Watch",desc:"Watch two AI armies fight."},{id:"online",title:"Online Match",short:"Online",desc:"Play a friend over the internet."}],mb={story:j`
    <svg class="mode-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M6 3.5h9.2c1.1 0 2 .9 2 2v14.2l-3.1-1.6-3.1 1.6-3.1-1.6-3.1 1.6V5.5c0-1.1.9-2 2-2Zm0 1.8v11.3l1.3-.7 3.1 1.6 3.1-1.6 1.3.7V5.3H6Z"/>
      <path fill="currentColor" d="M8.2 8.2h7.2v1.4H8.2zm0 3h5.4v1.4H8.2z"/>
    </svg>`,pvp:j`
    <svg class="mode-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M6.5 2.8 9.7 6l-1.4 1.4-2.4-2.4-1.4 1.4 2.4 2.4L5.5 10 2.3 6.8 3.7 5.4 6.1 7.8 7.5 6.4 4.3 3.2 5.7 1.8 6.5 2.8Zm11 0 1.4-1.4 3.2 3.2-1.4 1.4-2.4-2.4-1.4 1.4 2.4 2.4-1.4 1.4-3.2-3.2 1.4-1.4 2.4 2.4 1.4-1.4-2.4-2.4 1.4-1.4Z"/>
      <path fill="currentColor" d="M8.8 13.2 13.2 8.8l6 6-1.4 1.4-4.6-4.6-4.6 4.6-1.4-1.4 6-6Z"/>
    </svg>`,pvcpu:j`
    <svg class="mode-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M12 2 20 5v6.2c0 4.8-3.4 8.8-8 10.8-4.6-2-8-6-8-10.8V5l8-3Zm0 2.2L6 6.4V11c0 3.7 2.6 7 6 8.8 3.4-1.8 6-5.1 6-8.8V6.4l-6-2.2Z"/>
    </svg>`,cvcpu:j`
    <svg class="mode-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M12 5c-3.9 0-7 2.7-7 6.2 0 2.2 1.2 4.1 3 5.3-.3.9-.8 1.7-1.5 2.5 2-.5 3.6-1.5 4.8-2.8 1.5.4 3.1.4 4.7 0 1.2 1.3 2.8 2.3 4.8 2.8-.7-.8-1.2-1.6-1.5-2.5 1.8-1.2 3-3.1 3-5.3C19 7.7 15.9 5 12 5Zm0 2.2c2.6 0 4.6 1.7 4.6 4 0 2.3-2 4-4.6 4s-4.6-1.7-4.6-4c0-2.3 2-4 4.6-4Z"/>
    </svg>`,online:j`
    <svg class="mode-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="none" stroke="currentColor" stroke-width="1.8" d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z"/>
      <path fill="none" stroke="currentColor" stroke-width="1.8" d="M3 12h18M12 3c2.4 2.8 2.4 14.2 0 18M12 3c-2.4 2.8-2.4 14.2 0 18"/>
    </svg>`},Xh=class extends pt(et){createRenderRoot(){return this}constructor(){super(),this.mode="story",this.form={mapMode:"long",numUnits:it.draftPicksPerPlayer,aiDraftPreference:"balanced",numGames:1,moveDurationMs:it.moveDurationMs,gridW:it.gridW,gridH:it.gridH,centerPlazaRadius:it.centerPlazaRadius,maxTurns:it.maxTurns}}_setMode(e){this.mode=e,this.requestUpdate()}_upd(e,t){this.form={...this.form,[e]:t},this.requestUpdate()}_play(){if(this.mode==="story"){_e.openStorySelect();return}let e={mode:this.mode,...this.form};this.mode==="online"?_e.onlineStart(e):_e.startMatch(e)}_modeIcon(e,t){return j`<span class="${t} mode-icon mode-icon--${e}">${mb[e]}</span>`}_renderSettings(e){if(this.mode==="story")return j`<p class="mode-story-hint">Choose a stage, draft your squad, and complete the objectives.</p>`;let t=(s,r,a={})=>j`
      <div class="mode-field">
        <label for=${s}>${a.label}</label>
        <input id=${s} type="number" inputmode="numeric" .value=${String(e[r])}
          min=${a.min??1} max=${a.max??999} step=${a.step??1}
          @input=${o=>this._upd(r,Number(o.target.value))} />
      </div>`,n=(s,r,a,o)=>j`
      <div class="mode-field">
        <label for=${s}>${a}</label>
        <select id=${s} @change=${l=>this._upd(r,l.target.value)}>
          ${o.map(([l,c])=>j`<option value=${l} ?selected=${e[r]===l}>${c}</option>`)}
        </select>
      </div>`;return j`
      ${this.mode==="pvp"||this.mode==="online"?n("mode-map","mapMode","Map size",[["long","Normal"],["short","Short"]]):""}
      ${t("mode-units","numUnits",{label:"Units per player",min:1,max:20})}
      ${this.mode!=="pvp"&&this.mode!=="online"?n("mode-ai-draft","aiDraftPreference","AI draft style",U0.map(s=>[s.value,s.label])):""}
      ${this.mode==="cvcpu"?t("mode-games","numGames",{label:"Games to run",min:1,max:999}):""}
      ${t("mode-speed","moveDurationMs",{label:"Move speed (ms)",min:0,max:5e3,step:50})}
      ${zs?j`
        ${t("mode-grid-w","gridW",{label:"Grid width",min:5,max:50})}
        ${t("mode-grid-h","gridH",{label:"Grid height",min:5,max:50})}
        ${t("mode-plaza","centerPlazaRadius",{label:"Center plaza",min:.1,max:.9,step:.01})}
        ${t("mode-turns","maxTurns",{label:"Max turns",min:10,max:999})}
      `:""}
    `}render(){if(Ge.value.screen!=="mode-select")return j``;let e=this.form,t=$h.find(n=>n.id===this.mode);return j`
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
                  ${$h.map(n=>j`
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
                ${t?j`
                  <div class="mode-selected-card">
                    ${this._modeIcon(t.id,"mode-selected-icon")}
                    <div class="mode-selected-copy">
                      <div class="mode-selected-title">${t.title}</div>
                      <p class="mode-selected-desc">${t.desc}</p>
                    </div>
                  </div>
                `:""}

                <ul class="mode-list-desktop" aria-label="Game mode">
                  ${$h.map(n=>j`
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
                    <span class="mode-play-text">${this.mode==="online"?"Connect online":this.mode==="story"?"Choose stage":"Start game"}</span>
                  </button>
                  <button type="button" class="mode-editor-btn" @click=${()=>_e.openEditor()}>
                    Map Maker
                  </button>
                </div>
                <details class="mode-settings-details" open>
                  <summary class="mode-settings-summary">Match settings</summary>
                  <div class="mode-card mode-settings-card">
                    <div class="mode-settings-fields">
                      ${this._renderSettings(e)}
                    </div>
                  </div>
                </details>
              </aside>
            </div>
          </div>
        </div>
      </div>
    `}};customElements.define("mode-select-screen",Xh);var Yh=class extends pt(et){createRenderRoot(){return this}_objectives(e){let t=e.story?.objectives;return!t?.length||e.phase==="draft"?null:j`
      <ul class="hud-objectives" aria-label="Objectives">
        ${t.map(n=>j`
          <li class="${n.done?"done":""} ${n.danger?"danger":""}">${n.text}</li>
        `)}
      </ul>
    `}render(){let e=Ge.value;if(e.screen!=="game")return j``;let t=e.phase==="draft"?e.draft:null,n=t?t.player:e.currentPlayer,s=t?"Draft":"Turn",r=t?t.pendingClassKey?`P${t.player} \xB7 place ${vt[t.pendingClassKey]?.name||"unit"}`:`P${t.player} \xB7 pick class`:`Player ${e.currentPlayer}`,a=e.phase==="playing"&&e.turnsLeft!=null,o=a&&e.turnsLeft<=10,l=t?t.pendingClassKey?"Click a highlighted base tile to place your unit.":t.isHumanTurn?"Choose a class to draft.":"Waiting for opponent\u2026":e.actionState?.choosingFacing?"Click a tile or unit to choose facing direction.":"Select a unit, then click a highlighted tile to move";return j`
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
            <span id="turns-left-value">${e.turnsLeft}</span>
          </div>
        </div>
        ${this._objectives(e)}
        <p class="hud-instructions instructions">${l}</p>
      </div>
    `}};customElements.define("hud-bar",Yh);var Yo={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},qo=i=>(...e)=>({_$litDirective$:i,values:e}),ks=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var F0=qo(class extends ks{constructor(i){if(super(i),i.type!==Yo.ATTRIBUTE||i.name!=="class"||i.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(e=>i[e]).join(" ")+" "}update(i,[e]){if(this.st===void 0){this.st=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(let n in e)e[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(e)}let t=i.element.classList;for(let n of this.st)n in e||(t.remove(n),this.st.delete(n));for(let n in e){let s=!!e[n];s===this.st.has(n)||this.nt?.has(n)||(s?(t.add(n),this.st.add(n)):(t.remove(n),this.st.delete(n)))}return Pn}});var Vr=class extends ks{constructor(e){if(super(e),this.it=bt,e.type!==Yo.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===bt||e==null)return this._t=void 0,this.it=e;if(e===Pn)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Vr.directiveName="unsafeHTML",Vr.resultType=1;var Ko=qo(Vr);var gb=["str","agi","vit","dex","luk","int"],B0="tactics-turn-details",qh=class extends pt(et){createRenderRoot(){return this}constructor(){super(),this._skillsOpen=!1,this._showDetails=sessionStorage.getItem(B0)!=="0",this._onDocClick=null}connectedCallback(){super.connectedCallback(),this._onDocClick=e=>{if(!this._skillsOpen)return;let t=this.querySelector(".skill-wrap");t&&!t.contains(e.target)&&(this._skillsOpen=!1,this.requestUpdate())},document.addEventListener("click",this._onDocClick)}disconnectedCallback(){this._onDocClick&&document.removeEventListener("click",this._onDocClick),super.disconnectedCallback()}_toggleSkills(e){e?.stopPropagation(),this._skillsOpen=!this._skillsOpen,this.requestUpdate()}_toggleDetails(e){e?.stopPropagation(),this._showDetails=!this._showDetails,sessionStorage.setItem(B0,this._showDetails?"1":"0"),this.requestUpdate()}_pickSkill(e){this._skillsOpen=!1,_e.skill(e),this.requestUpdate()}_statRows(e){return j`
      <span>HP</span><span class="stat-val stat-val-hp">${e.hp}/${e.maxHp}</span>
      <span>MP</span><span class="stat-val">${e.mp}/${e.maxMp}</span>
      ${gb.map(t=>j`
        <span>${t.toUpperCase()}</span>
        <span class="stat-val">${Ko(e.statsHtml[t])}</span>
      `)}
    `}_effectRows(e,t){return!e||e.length===0?j`<li class="unit-effect-item unit-effect-empty">None</li>`:e.map(n=>j`
      <li class="unit-effect-item unit-effect-${t}">
        <span class="unit-effect-name">${n.name}</span>
        ${n.detail?j`<span class="unit-effect-meta">${n.detail}</span>`:""}
      </li>
    `)}_renderEffectsSection(e,t,n){return j`
      <div class="unit-effects-group unit-effects-${n}">
        <span class="unit-details-row-label">${e}</span>
        <ul class="unit-effects-list">${this._effectRows(t,n)}</ul>
      </div>
    `}_renderDetailsBody(e){return j`
      <div class="unit-details-body">
        <div class="unit-details-col unit-details-col-stats">
          <span class="unit-details-row-label">Stats</span>
          <div class="unit-details-stats">${this._statRows(e)}</div>
        </div>
        <div class="unit-details-col unit-details-col-effects">
          ${this._renderEffectsSection("Buffs",e.buffs??[],"buff")}
          ${this._renderEffectsSection("Debuffs",e.debuffs??[],"debuff")}
        </div>
      </div>
    `}render(){let e=Ge.value;if(e.screen!=="game"||e.phase!=="playing")return j``;let t=e.selectedUnit,n=!e.isHumanTurn,s=e.actionState?.choosingFacing,r=e.availableSkills||[],a=r.length===0,o=this._showDetails&&!!t;return j`
      <div id="turn-menu-stack" class=${F0({[`player-${e.currentPlayer}`]:!0,"details-open":o,"details-closed":!o,"low-hp":!!t?.lowHp,"level-2":!!t&&t.level>=2&&t.level<3,"level-3":!!t&&t.level>=3})}>
        ${t?j`
          <div id="unit-details-card" class="unit-details-card unit-details-card--mobile" aria-hidden=${!o}>
            <div class="unit-details-card-inner">
              ${this._renderDetailsBody(t)}
            </div>
          </div>
        `:""}

        <div id="turn-menu" style="display:flex">
          <div class="unit-info ${t?"":"no-unit"}" id="unit-info">
            <div class="unit-info-primary">
              <img class="unit-class-image" src="${t&&hn[t.class]||""}" alt="" referrerpolicy="no-referrer" />
              <div class="unit-info-meta">
                <div class="unit-info-text">
                  <div class="unit-name-row">
                    <span class="unit-name">${t?t.name:"\u2014 Select a unit \u2014"}</span>
                    <span class="unit-level-class">${t?`Lv.${t.level} ${vt[t.class]?.name||t.class}`:""}</span>
                  </div>
                  ${t?j`
                    <div class="unit-info-compact">HP ${t.hp}/${t.maxHp} · MP ${t.mp}/${t.maxMp}</div>
                  `:""}
                </div>
                ${t?j`
                  <div class="unit-info-stats unit-details-stats">${this._statRows(t)}</div>
                `:""}
              </div>
            </div>
            ${t?j`
              <div class="unit-info-effects">
                ${this._renderEffectsSection("Buffs",t.buffs??[],"buff")}
                ${this._renderEffectsSection("Debuffs",t.debuffs??[],"debuff")}
              </div>
            `:""}
          </div>
          <div class="menu-actions">
            <span class="menu-label">${s?"Choose facing":`Player ${e.currentPlayer}`}</span>
            <button type="button"
              class="details-toggle"
              ?disabled=${!t}
              aria-expanded=${o}
              aria-label=${o?"Hide unit details":"Show unit details"}
              @click=${l=>this._toggleDetails(l)}>
              Details
            </button>
            <button type="button" ?disabled=${n||s||e.actionState.hasAttacked} @click=${()=>_e.attack()}>Attack</button>
            <div class="skill-wrap">
              <button type="button" ?disabled=${n||s||e.actionState.hasAttacked||a} @click=${l=>this._toggleSkills(l)}>Skill</button>
              <div class="skill-list-overlay" style="display:${this._skillsOpen?"block":"none"}">
                ${r.length===0?j`<div class="skill-option" style="cursor:default;color:#8b949e;">No skills available</div>`:""}
                ${r.map(l=>j`
                  <button type="button" class="skill-option" ?disabled=${l.disabled} @click=${()=>this._pickSkill(l.index)}>
                    <span class="skill-name">${l.name}</span>
                    <span class="skill-meta">${l.cost} MP · Lv.${l.level}</span>
                    ${l.description?j`<br /><span class="skill-meta">${l.description}</span>`:""}
                  </button>
                `)}
              </div>
            </div>
            <button type="button" class="end" ?disabled=${n||s} @click=${()=>_e.endTurn()}>End</button>
          </div>
        </div>
      </div>
    `}};customElements.define("turn-menu",qh);var Wr=3,Kh=class extends pt(et){createRenderRoot(){return this}constructor(){super(),this._selected=null}_select(e){this._selected=e,this.requestUpdate()}_confirm(){this._selected&&(_e.draftPick(this._selected),this._selected=null,this.requestUpdate())}_statPairs(e){return[["HP",e.hp],["MP",e.mp],["STR",e.str],["AGI",e.agi],["VIT",e.vit],["DEX",e.dex],["LUK",e.luk],["INT",e.int],["RNG",e.range]]}_skillCostLabel(e){return e.hpCost?`${e.hpCost} HP`:`${e.cost} MP`}_renderSkills(e){let t=ni[e]||[];return t.length===0?j`<div class="draft-detail-skills"><div class="draft-detail-skill">No skills</div></div>`:j`
      <div class="draft-detail-skills">
        ${t.map(n=>j`
          <div class="draft-detail-skill">
            <span class="draft-detail-skill-name">${n.name}</span>
            <span class="draft-detail-skill-meta">${this._skillCostLabel(n)} · Lv.${n.level}</span>
            ${n.description?j`<span class="draft-detail-skill-desc">${n.description}</span>`:""}
          </div>
        `)}
      </div>
    `}_placementCard(e,t){let n=vt[e];return n?j`
      <div class="draft-class-card ${t?"draft-class-card-current":""}">
        <img class="draft-class-card-image" src="${hn[e]||""}" alt="" referrerpolicy="no-referrer" />
        <div class="draft-class-card-body">
          <div class="draft-class-card-name">${n.name}</div>
          <div class="draft-class-card-stats">
            ${this._statPairs(n).map(([s,r])=>j`
              <span class="draft-stat-label">${s}</span><span class="draft-stat-value">${r}</span>
            `)}
          </div>
        </div>
      </div>
    `:j``}_renderPlacement(e){let t=[...e.pickedClasses||[],e.pendingClassKey].filter(Boolean),n=t.length>Wr,s=n?Array.from({length:Math.ceil(t.length/Wr)},(r,a)=>t.slice(a*Wr,(a+1)*Wr)):[t];return j`
      <div id="draft-placement-card" class="player-${e.player} ${n?"draft-placement-cols":""}" style="display:flex">
        ${s.map((r,a)=>j`
          <div class="draft-placement-col">
            ${r.map((o,l)=>{let c=a*Wr+l;return this._placementCard(o,c===t.length-1)})}
          </div>
        `)}
      </div>
    `}_renderPicker(e){let t=e.availableClasses||[],n=this._selected?vt[this._selected]:null,s=e.isHumanTurn?`Player ${e.player}: Pick a class (${e.pickCount}/${e.picksPerPlayer})`:`Player ${e.player} is picking a class`;return j`
      <div id="draft-panel" style="display:flex">
        <div id="draft-header">
          <div id="draft-title">${s}</div>
          <div id="draft-message">${e.isHumanTurn?"Choose a class to draft.":"CPU is drafting\u2026"}</div>
        </div>
        <div id="draft-body">
          <div id="draft-detail">
            <div class="draft-detail-card">
              ${n?j`
                <img class="draft-detail-image" src="${hn[this._selected]||""}" alt="" referrerpolicy="no-referrer" />
                <div class="draft-detail-content">
                  <div class="draft-detail-name">${n.name}</div>
                  <div class="draft-detail-stats">
                    ${this._statPairs(n).map(([r,a])=>j`
                      <span class="draft-stat-label">${r}</span><span class="draft-stat-value">${a}</span>
                    `)}
                  </div>
                  ${this._renderSkills(this._selected)}
                </div>
                <button type="button" class="draft-select-btn" ?disabled=${!e.isHumanTurn} @click=${()=>this._confirm()}>Select</button>
              `:j`<div class="draft-detail-placeholder">Click a class to view details</div>`}
            </div>
          </div>
          <div id="draft-classes">
            ${t.map(r=>j`
              <button type="button" class="draft-class-card ${this._selected===r?"draft-class-card-selected":""}"
                ?disabled=${!e.isHumanTurn}
                @click=${()=>this._select(r)}>
                <img class="draft-class-card-image" src="${hn[r]||""}" alt="" referrerpolicy="no-referrer" />
                <div class="draft-class-card-body">
                  <div class="draft-class-card-name">${vt[r]?vt[r].name:r}</div>
                </div>
              </button>
            `)}
          </div>
        </div>
      </div>
    `}render(){let e=Ge.value;if(e.screen!=="game"||e.phase!=="draft"||!e.draft)return j``;let t=e.draft;return t.pendingClassKey?this._renderPlacement(t):this._renderPicker(t)}};customElements.define("draft-panel",Kh);var Zh=class extends pt(et){createRenderRoot(){return this}render(){let e=Ge.value.previewUnit;if(!e)return j``;let t=["str","agi","vit","dex","luk","int"];return j`
      <div id="unit-preview-card" class="player-${e.player}" style="display:flex">
        <img class="unit-preview-image" src="${hn[e.class]||""}" alt="" referrerpolicy="no-referrer" />
        <div class="unit-preview-body">
          <div class="unit-preview-name">${e.name} <small>Lv.${e.level}</small></div>
          <div class="unit-preview-meta">HP ${e.hp}/${e.maxHp} · MP ${e.mp}/${e.maxMp}</div>
          <div class="unit-preview-stats">
            ${t.map(n=>j`<span>${n.toUpperCase()} ${Ko(e.statsHtml[n])}</span>`)}
          </div>
        </div>
      </div>
    `}};customElements.define("unit-preview",Zh);var yb=["str","agi","vit","dex","luk","int"],Jh=class extends pt(et){createRenderRoot(){return this}_levelClass(e){return e>=3?"level-3":e>=2?"level-2":""}_renderCard(e){let t=this._levelClass(e.level);return j`
      <div class="game-over-card ${t} ${e.lowHp?"low-hp":""}">
        <img class="game-over-card-image" src="${hn[e.class]||""}" alt="" referrerpolicy="no-referrer" />
        <div class="game-over-card-body">
          <div class="game-over-card-name">${e.name}</div>
          <div class="game-over-card-meta">Lv.${e.level} ${e.class} — HP ${e.hp}/${e.maxHp}</div>
          <div class="game-over-card-stats">
            <span class="stat-label">HP</span><span class="stat-val stat-val-hp">${e.hp}/${e.maxHp}</span>
            <span class="stat-label">MP</span><span class="stat-val">${e.mp}/${e.maxMp}</span>
            ${yb.map(n=>j`
              <span class="stat-label">${n.toUpperCase()}</span>
              <span class="stat-val">${e.stats[n]}</span>
            `)}
          </div>
        </div>
      </div>
    `}_renderClassRecord(e){return j`
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
            ${e.map(t=>j`
              <tr>
                <td class="class-name">${t.class}</td>
                <td>${t.battles}</td>
                <td>${t.kills}</td>
                <td>${t.deaths}</td>
                <td>${t.wins}</td>
                <td>${t.losses}</td>
                <td>${t.winRate}</td>
                <td>${t.lossRate}</td>
              </tr>
            `)}
          </tbody>
        </table>
      </div>
    `}_storyButtons(e){let t=e.outcome==="win"&&e.nextStageIndex!=null&&Mi[e.nextStageIndex];return j`
      <div class="game-over-actions">
        <button type="button" class="mode-play-btn" @click=${()=>_e.retryStage()}>
          <span class="mode-play-text">Retry</span>
        </button>
        ${t?j`
          <button type="button" class="mode-play-btn" @click=${()=>_e.nextStage()}>
            <span class="mode-play-text">Next level</span>
          </button>
        `:""}
        <button type="button" class="mode-play-btn mode-play-btn-secondary" @click=${()=>_e.openStorySelect()}>
          <span class="mode-play-text">Level select</span>
        </button>
        <button type="button" class="mode-play-btn mode-play-btn-secondary" @click=${()=>_e.toModeSelect()}>
          <span class="mode-play-text">Main menu</span>
        </button>
      </div>
    `}render(){let e=Ge.value.gameOver;if(!e)return j``;let t=e.cards||[],n=!!e.outcome;return j`
      <div id="game-over-overlay" class="visible ${n?`story-${e.outcome}`:""}">
        <div class="game-over-title">${e.title}</div>
        <div class="game-over-cards">
          ${t.map(s=>this._renderCard(s))}
        </div>
        ${e.classRecord?this._renderClassRecord(e.classRecord):""}
        ${n?this._storyButtons(e):j`
            <button type="button" class="mode-play-btn" @click=${()=>_e.toModeSelect()}>
              <span class="mode-play-text">Main menu</span>
            </button>
          `}
      </div>
    `}};customElements.define("game-over-screen",Jh);var jh=class extends pt(et){createRenderRoot(){return this}render(){let e=Ge.value.battleStart;return j`
      <div id="battle-start-overlay" class="${e?"visible":""}" aria-hidden="${e?"false":"true"}">
        <div class="battle-start-content">
          <div class="battle-start-message">Battle Start</div>
          <div class="battle-start-sword-bar" role="progressbar">
            <div class="battle-start-sword-bar-fill"></div>
          </div>
        </div>
      </div>
    `}};customElements.define("battle-start",jh);var Qh=class extends pt(et){createRenderRoot(){return this}render(){return Ge.value.screen!=="game"?j``:j`
      <div id="rotate-overlay" aria-hidden="true">
        <div class="rotate-overlay-icon">↻</div>
        <p class="rotate-overlay-text">Rotate to landscape for the best experience.<br />The board needs horizontal space to play.</p>
      </div>
    `}};customElements.define("rotate-overlay",Qh);var eu=class extends pt(et){createRenderRoot(){return this}constructor(){super(),this._name="",this._reply="",this._offerIn=""}_upd(e,t){this[e]=t,this.requestUpdate()}async _copy(e){try{navigator.clipboard&&e&&await navigator.clipboard.writeText(e)}catch{}}render(){let e=Ge.value.online;if(!e)return j``;let t=e.view||"menu";return j`
      <div id="online-connect-overlay" class="online-connect-overlay">
        <div class="online-connect-inner">
          <h2 class="online-connect-title">Online Match</h2>
          ${e.error?j`<p class="online-error">${e.error}</p>`:""}
          ${this._renderView(e,t)}
        </div>
      </div>`}_renderView(e,t){return t==="hosting"?this._renderHosting(e):t==="joining"?this._renderJoining():t==="joined"?this._renderJoined(e):this._renderMenu()}_renderMenu(){return j`
      <label for="online-player-name">Your name</label>
      <input id="online-player-name" type="text" .value=${this._name}
        placeholder="Enter your name"
        @input=${e=>this._upd("_name",e.target.value)} />
      <div class="online-connect-actions">
        <button type="button" @click=${()=>_e.onlineHost(this._name)}>Host game</button>
        <button type="button" @click=${()=>this._goJoin()}>Join game</button>
        <button type="button" @click=${()=>_e.onlineCancel()}>Cancel</button>
      </div>`}_goJoin(){Ge.value={...Ge.value,online:{view:"joining",error:""}}}_renderHosting(e){return j`
      <div class="online-section">
        <p class="online-instruction">1. Send this invite code to your opponent.</p>
        <textarea readonly .value=${e.offer||""}></textarea>
        <button type="button" @click=${()=>this._copy(e.offer)}>Copy invite code</button>
      </div>
      <div class="online-section">
        <p class="online-instruction">2. Paste their reply code and connect.</p>
        <textarea placeholder="Paste reply code here" .value=${this._reply}
          @input=${t=>this._upd("_reply",t.target.value)}></textarea>
        <button type="button" @click=${()=>_e.onlineHostConnect(this._reply)}>Connect</button>
        ${e.waiting?j`<p class="online-waiting">Connecting…</p>`:""}
      </div>
      <div class="online-connect-actions">
        <button type="button" @click=${()=>_e.onlineCancel()}>Cancel</button>
      </div>`}_renderJoining(){return j`
      <div class="online-section">
        <p class="online-instruction">Paste the invite code from the host.</p>
        <textarea placeholder="Paste invite code here" .value=${this._offerIn}
          @input=${e=>this._upd("_offerIn",e.target.value)}></textarea>
        <button type="button" @click=${()=>_e.onlineJoin(this._offerIn,this._name)}>Generate reply code</button>
      </div>
      <div class="online-connect-actions">
        <button type="button" @click=${()=>_e.onlineCancel()}>Cancel</button>
      </div>`}_renderJoined(e){return j`
      <div class="online-section" id="online-join-answer-section">
        <p class="online-instruction">Send this reply code back to the host.</p>
        <textarea readonly .value=${e.answer||""}></textarea>
        <button type="button" @click=${()=>this._copy(e.answer)}>Copy reply code</button>
        <p class="online-waiting">Waiting for the host to connect…</p>
      </div>
      <div class="online-connect-actions">
        <button type="button" @click=${()=>_e.onlineCancel()}>Cancel</button>
      </div>`}};customElements.define("online-connect",eu);var _b=[{id:re.GRASS,label:"Grass"},{id:re.PATH,label:"Path"},{id:re.TREE,label:"Tree"},{id:re.WATER,label:"Water"},{id:re.ROCK,label:"Rock"},{id:re.BASE_BOTTOM,label:"Base P1"},{id:re.BASE_TOP,label:"Base P2"},{id:re.CENTER,label:"Center"}],xb=[{label:"North",glyph:"\u2191",facing:{dx:0,dy:-1}},{label:"East",glyph:"\u2192",facing:{dx:1,dy:0}},{label:"South",glyph:"\u2193",facing:{dx:0,dy:1}},{label:"West",glyph:"\u2190",facing:{dx:-1,dy:0}}];function vb(i){return`#${(i>>>0).toString(16).padStart(6,"0")}`}var tu=class extends pt(et){createRenderRoot(){return this}_ed(){return Ge.value.editor||{}}_download(){_e.editorSave()}_onFile(e){let t=e.target.files&&e.target.files[0];if(e.target.value="",!t)return;let n=new FileReader;n.onload=()=>{try{let s=JSON.parse(String(n.result));_e.editorLoad(s)}catch(s){_e.editorError(s.message||"Failed to load map.")}},n.readAsText(t)}render(){if(Ge.value.screen!=="editor")return j``;let e=this._ed(),t=e.tool||"terrain",n=e.tileType!=null?e.tileType:re.PATH,s=e.height!=null?e.height:1,r=e.unitPlayer||1,a=e.unitClass||"knight",o=e.unitLevel||1,l=e.unitFacing||(r===1?{dx:0,dy:-1}:{dx:0,dy:1}),c=e.w||35,h=e.h||25;return j`
      <aside id="map-editor-panel" aria-label="Map editor">
        <header class="me-header">
          <h2 class="me-title">Map Maker</h2>
          <button type="button" class="me-btn me-btn-ghost" @click=${()=>_e.closeEditor()}>Back</button>
        </header>

        <div class="me-field">
          <label for="me-name">Map name</label>
          <input id="me-name" type="text" .value=${e.mapName||"Untitled"}
            @input=${u=>_e.editorSetName(u.target.value)} />
        </div>

        <div class="me-row">
          <div class="me-field me-field-half">
            <label for="me-w">Width</label>
            <input id="me-w" type="number" min="5" max="50" .value=${String(c)}
              @change=${u=>_e.editorResize(Number(u.target.value),h)} />
          </div>
          <div class="me-field me-field-half">
            <label for="me-h">Height</label>
            <input id="me-h" type="number" min="5" max="50" .value=${String(h)}
              @change=${u=>_e.editorResize(c,Number(u.target.value))} />
          </div>
        </div>

        <section class="me-section">
          <h3 class="me-section-title">Terrain</h3>
          <div class="me-swatches" role="group" aria-label="Tile type">
            ${_b.map(u=>j`
              <button type="button"
                class="me-swatch ${t==="terrain"&&n===u.id?"selected":""}"
                title=${u.label}
                style="--swatch:${vb(Vs[u.id])}"
                @click=${()=>_e.editorSetTileType(u.id)}>
                <span class="me-swatch-chip"></span>
                <span class="me-swatch-label">${u.label}</span>
              </button>
            `)}
          </div>
          <div class="me-field">
            <label>Height</label>
            <div class="me-height-row" role="group" aria-label="Tile height">
              ${[0,1,2].map(u=>j`
                <button type="button"
                  class="me-btn me-height-btn ${s===u?"selected":""}"
                  @click=${()=>_e.editorSetHeight(u)}>${u}</button>
              `)}
            </div>
          </div>
        </section>

        <section class="me-section">
          <h3 class="me-section-title">Units</h3>
          <div class="me-team-row" role="group" aria-label="Team">
            <button type="button"
              class="me-btn me-team-btn ${t==="unit"&&r===1?"selected":""}"
              @click=${()=>_e.editorSetUnitPlayer(1)}>Player 1</button>
            <button type="button"
              class="me-btn me-team-btn p2 ${t==="unit"&&r===2?"selected":""}"
              @click=${()=>_e.editorSetUnitPlayer(2)}>Player 2</button>
          </div>
          <div class="me-field">
            <label for="me-class">Class</label>
            <select id="me-class"
              @change=${u=>_e.editorSetUnitClass(u.target.value)}>
              ${_t.map(u=>j`
                <option value=${u} ?selected=${a===u}>${vt[u].name}</option>
              `)}
            </select>
          </div>
          <div class="me-field">
            <label>Level</label>
            <div class="me-height-row" role="group" aria-label="Unit level">
              ${[1,2,3].map(u=>j`
                <button type="button"
                  class="me-btn me-height-btn ${t==="unit"&&o===u?"selected":""}"
                  @click=${()=>_e.editorSetUnitLevel(u)}>${u}</button>
              `)}
            </div>
          </div>
          <div class="me-field">
            <label>Facing</label>
            <div class="me-facing-grid" role="group" aria-label="Unit facing direction">
              ${xb.map(({label:u,glyph:d,facing:p})=>j`
                <button type="button"
                  class="me-btn me-facing-btn ${t==="unit"&&l.dx===p.dx&&l.dy===p.dy?"selected":""}"
                  title=${u}
                  aria-label=${u}
                  @click=${()=>_e.editorSetUnitFacing(p)}>${d}</button>
              `)}
            </div>
          </div>
          <button type="button"
            class="me-btn me-btn-block ${t==="erase"?"selected":""}"
            @click=${()=>_e.editorSetTool("erase")}>Erase unit</button>
          <p class="me-hint">${e.unitCount||0} unit(s) placed</p>
        </section>

        <section class="me-actions">
          <button type="button" class="me-btn me-btn-block" @click=${()=>_e.editorNew()}>New</button>
          <button type="button" class="me-btn me-btn-block me-btn-primary" @click=${()=>this._download()}>Save JSON</button>
          <label class="me-btn me-btn-block me-file-btn">
            Load JSON
            <input type="file" accept="application/json,.json" hidden @change=${u=>this._onFile(u)} />
          </label>
        </section>

        ${e.error?j`<p class="me-error">${e.error}</p>`:""}
        <p class="me-hint">Click to paint. Drag to pan. Shift+drag to brush. Ctrl+drag to rotate. Scroll to zoom.</p>
      </aside>
    `}};customElements.define("map-editor",tu);var nu=class extends pt(et){createRenderRoot(){return this}_unlocked(){return Ge.value.unlockedStageIndex!=null?Ge.value.unlockedStageIndex:zr()}_classNames(e){return[...$o(e.classPool)].map(n=>vt[n]?.name||n).join(", ")}render(){if(Ge.value.screen!=="story-select")return j``;let e=this._unlocked();return j`
      <div id="story-select-overlay">
        <div class="story-select-scroll">
          <div class="story-select-inner">
            <header class="story-select-header">
              <button type="button" class="story-back-btn" @click=${()=>_e.toModeSelect()}>← Main menu</button>
              <h1 class="story-select-title">Story</h1>
              <p class="story-select-tagline">Draft your squad and complete each stage’s objectives.</p>
            </header>

            <ul class="story-stage-list" aria-label="Story stages">
              ${Mi.map((t,n)=>{let s=n>e,r=P0(t.objectives);return j`
                  <li>
                    <article class="story-stage-card ${s?"locked":""}">
                      <div class="story-stage-num">${n+1}</div>
                      <div class="story-stage-body">
                        <h2 class="story-stage-name">${t.name}</h2>
                        <p class="story-stage-desc">${t.description}</p>
                        <ul class="story-stage-objectives">
                          ${r.map(a=>j`<li>${a}</li>`)}
                        </ul>
                        <p class="story-stage-meta">
                          ${t.maxPlayerUnits} unit${t.maxPlayerUnits===1?"":"s"}
                          · ${t.map.w}×${t.map.h}
                          ${t.maxTurns?j` · ${t.maxTurns} turns`:""}
                        </p>
                        <p class="story-stage-classes">Classes: ${this._classNames(t)}</p>
                      </div>
                      <div class="story-stage-actions">
                        ${s?j`<span class="story-locked-label">Locked</span>`:j`<button type="button" class="mode-play-btn story-play-btn"
                              @click=${()=>_e.startStage(t.id)}>
                              <span class="mode-play-text">Play</span>
                            </button>`}
                      </div>
                    </article>
                  </li>
                `})}
            </ul>
          </div>
        </div>
      </div>
    `}};customElements.define("story-select-screen",nu);var iu=class extends pt(et){createRenderRoot(){return this}render(){return j`
      <mode-select-screen></mode-select-screen>
      <story-select-screen></story-select-screen>
      <hud-bar></hud-bar>
      <draft-panel></draft-panel>
      <turn-menu></turn-menu>
      <unit-preview></unit-preview>
      <battle-start></battle-start>
      <game-over-screen></game-over-screen>
      <rotate-overlay></rotate-overlay>
      <online-connect></online-connect>
      <map-editor></map-editor>
    `}};customElements.define("app-root",iu);var Mb=[{urls:"stun:stun.l.google.com:19302"}];function k0(i){return btoa(JSON.stringify(i))}function H0(i){return JSON.parse(atob(i.trim()))}var $r=class{constructor(){this.pc=null,this.channel=null,this.onOpen=null,this.onMessage=null,this.onClose=null,this.onError=null}_newPc(){let e=new RTCPeerConnection({iceServers:Mb});return e.onconnectionstatechange=()=>{["disconnected","failed","closed"].includes(e.connectionState)&&this.onClose&&this.onClose()},this.pc=e,e}_wireChannel(e){this.channel=e,e.onopen=()=>this.onOpen&&this.onOpen(),e.onclose=()=>this.onClose&&this.onClose(),e.onmessage=t=>{if(this.onMessage)try{this.onMessage(JSON.parse(t.data))}catch(n){this.onError&&this.onError(n)}}}_waitIceComplete(e){return new Promise(t=>{if(e.iceGatheringState==="complete")return t();let n=()=>{e.iceGatheringState==="complete"&&(e.removeEventListener("icegatheringstatechange",n),t())};e.addEventListener("icegatheringstatechange",n),setTimeout(t,4e3)})}async createOffer(){let e=this._newPc();this._wireChannel(e.createDataChannel("game",{ordered:!0}));let t=await e.createOffer();return await e.setLocalDescription(t),await this._waitIceComplete(e),k0(e.localDescription)}async acceptAnswer(e){await this.pc.setRemoteDescription(H0(e))}async acceptOffer(e){let t=this._newPc();t.ondatachannel=s=>this._wireChannel(s.channel),await t.setRemoteDescription(H0(e));let n=await t.createAnswer();return await t.setLocalDescription(n),await this._waitIceComplete(t),k0(t.localDescription)}send(e){this.channel&&this.channel.readyState==="open"&&this.channel.send(JSON.stringify(e))}close(){if(this.channel)try{this.channel.close()}catch{}if(this.pc)try{this.pc.close()}catch{}this.channel=null,this.pc=null}};var Zo=class{constructor({transport:e,controller:t,localPlayerNumber:n}){this.transport=e,this.controller=t,this.localPlayerNumber=n,this._outSeq=0,this._seenRemote=new Set,this._queue=[],this._ready=!1,e.onMessage=s=>this._onMessage(s)}markReady(){this._ready=!0;for(let e of this._queue)this.controller.dispatch(e);this._queue.length=0}localDispatcher(){return{dispatch:e=>this.sendLocal(e)}}sendLocal(e){let t=++this._outSeq;return this.transport.send({kind:"intent",from:this.localPlayerNumber,seq:t,intent:e}),this.controller.dispatch(e)}_onMessage(e){if(!e||e.kind!=="intent")return;let t=`${e.from}:${e.seq}`;if(!this._seenRemote.has(t)){if(this._seenRemote.add(t),!this._ready){this._queue.push(e.intent);return}this.controller.dispatch(e.intent)}}};var Jo=class{constructor({state:e,controller:t,bus:n,isCPU:s}){this.state=e,this.controller=t,this.bus=n,this.isCPU=s,this._busy=!1;let r=()=>this._maybeAct();n.on("draftStarted",r),n.on("draftPickChosen",r),n.on("draftTurnChanged",r),n.on("unitPlaced",r)}_maybeAct(){let e=this.state;if(e.phase!=="draft"||this._busy||this._draftComplete())return;let t=un(e);t==null||!this.isCPU(t)||(this._busy=!0,setTimeout(()=>this._act(t),400))}_draftComplete(){let e=this.state.draft,t=e.totalPicks!=null?e.totalPicks:2*this.state.settings.draftPicksPerPlayer;return e.pickIndex>=t}async _act(e){let t=this.state;try{if(t.phase!=="draft"||this._draftComplete()||un(t)!==e)return;let n=t.draft;if(n.pendingClassKey){let s=Gp(this.state,e,n.placementTiles);s&&await this.controller.dispatch({type:"draftPlace",gx:s.gx,gy:s.gy})}else{let s=this._pickClass(e);s&&await this.controller.dispatch({type:"draftPick",classKey:s})}}finally{this._busy=!1,this._maybeAct()}}_pickClass(e){let t=this.state.draft.availableClasses,n=_t.filter(g=>t.has(g));if(n.length===0)return null;let s=this.state.aiDraftPreference||"balanced",r=g=>vt[g]||{};if(s==="random")return n[Math.floor(this.state.rng.next()*n.length)];if(s==="custom")return N0.find(g=>t.has(g))||n[0];let a=(g,m)=>{let f=n[0],x=g(f),_=m(f);for(let v=1;v<n.length;v++){let I=n[v],M=g(I),w=m(I);(M>x||M===x&&w>_)&&(f=I,x=M,_=w)}return f};if(s==="tanky")return a(g=>r(g).hp??0,g=>r(g).vit??0);if(s==="aggressive")return a(g=>r(g).str??0,g=>r(g).agi??0);if(s==="scout")return a(g=>r(g).agi??0,g=>r(g).dex??0);if(s==="ranged")return a(g=>r(g).range??0,g=>r(g).dex??0);if(s==="caster")return a(g=>r(g).int??0,g=>r(g).mp??0);let o=this.state.settings.draftPicksPerPlayer,l=O0(o),c={tank:0,melee:0,support:0,ranged:0,caster:0};for(let g of this.state.units){if(g.player!==e)continue;let m=Wh[g.class];m&&c[m]++}let h=g=>Math.max(0,(l[g]??0)-(c[g]??0)),u=g=>{let m=Wh[g];return{def:m!=null?h(m):0,hp:r(g).hp??0,negVar:-(du[g]??1/0)}},d=(g,m)=>g.def!==m.def?g.def>m.def:g.hp!==m.hp?g.hp>m.hp:g.negVar>m.negVar,p=n[0],y=u(p);for(let g=1;g<n.length;g++){let m=u(n[g]);d(m,y)&&(p=n[g],y=m)}return p}};function z0(i,e,t=null){if(!e.length)return null;let n=e;if(t&&t.size){let o=e.filter(l=>t.has(l.target.id));o.length&&(n=o)}let s=n.filter(o=>Mh(i,o.target));if(s.length)return s.sort((o,l)=>Lr(i,l.target)-Lr(i,o.target)||o.target.hp-l.target.hp||o.dist-l.dist),s[0].target;let r=o=>o.target.hp/(Io(i.x,i.y,o.target)*Math.max(.05,Lr(i,o.target)));return n.slice().sort((o,l)=>r(o)-r(l)||o.dist-l.dist)[0]?.target??null}function jo(i,e,t){return Zi(i,e,t).filter(n=>n.targetUnit).map(n=>n.targetUnit)}function bb(i,e,t){let{enemiesInRange:n,enemiesInRangeByTile:s,reachableTiles:r,hasLowHpEnemyInRange:a,hasLowHpEnemyReachable:o}=t,l=bn(i,e),c=a||!i.hasMoved&&o,h=null,u=null,d=-1,p=(g,m,f)=>{h=g,u=m,d=f};if(!c)for(let g=0;g<l.length;g++){let m=l[g];if(m.disabled||e.mp<m.cost||!bp.has(m.effectKey))continue;let f=Zi(i,e,m).filter(x=>x.targetUnit&&_n(x.targetUnit)<xp);if(f.length){let x=f.sort((_,v)=>_.targetUnit.hp-v.targetUnit.hp)[0].targetUnit;p(m,x,g);break}}if(!h&&!c){let g=i.units.filter(m=>m.hp<=0&&!m.isReanimated);for(let m=0;m<l.length;m++){let f=l[m];if(!(f.disabled||e.mp<f.cost)&&!(f.effectKey==="reanimate"&&!g.length)&&Tp.has(f.effectKey)){p(f,e,m);break}}}if(!h&&!c&&(n.length>0||r.some(m=>(s.get(i.tileKey(m.gx,m.gy))||[]).length>0))){let m=l.map((f,x)=>({skill:f,index:x})).filter(({skill:f})=>!f.disabled&&Sp.has(f.effectKey)).sort((f,x)=>(x.skill.level||1)-(f.skill.level||1));for(let{skill:f,index:x}of m){let _=e.tempBuff&&e.tempBuff.duration>0;if(f.target==="self"){if(f.effectKey==="bloodlust"&&_n(e)>.8)continue;if(!_){p(f,e,x);break}}if(f.target==="ally"){if(f.effectKey==="overheal"&&_n(e)>.7)continue;let v=Zi(i,e,f).filter(w=>w.targetUnit).map(w=>w.targetUnit);if(!v.length)continue;let I=v.filter(w=>!w.tempBuff||w.tempBuff.duration<=0),M=(I.length?I:v).sort((w,N)=>w.hp-N.hp)[0];if(M.tempBuff&&M.tempBuff.duration>0||f.effectKey==="overheal"&&_n(M)>.7)continue;p(f,M,x);break}if(f.target==="enemy"){let v=jo(i,e,f);if(f.effectKey==="vodoo"&&e.tempBuff?.vodoo&&(v=v.filter(I=>I.id!==e.tempBuff.vodoo)),v.length){p(f,v.sort((I,M)=>I.hp-M.hp)[0],x);break}}}}if(!h){let g=null;for(let m=0;m<l.length;m++){let f=l[m];if(f.disabled||e.mp<f.cost||!Mp.has(f.effectKey)||f.effectKey==="feast"&&_n(e)>.7||f.effectKey==="berserk"&&_n(e)<.25||f.effectKey==="shuriken"&&n.length>0||f.effectKey==="judgement"&&_n(e)>.7)continue;let x=jo(i,e,f);if(!x.length)continue;let _=x.filter(M=>_n(M)<vp),v=_.length?_:x,I=f.type==="spell"?v.reduce((M,w)=>{if(!M)return w;let N=ze(w,"int")-ze(M,"int");return N<0||N===0&&w.hp<M.hp?w:M},null):v.reduce((M,w)=>!M||w.hp<M.hp?w:M,null);I&&(!g||I.hp<g.target.hp||I.hp===g.target.hp&&(f.cost||0)<(g.skill.cost||0))&&(g={skill:f,index:m,target:I})}g&&p(g.skill,g.target,g.index)}if(!h&&!c)for(let g=0;g<l.length;g++){let m=l[g];if(m.disabled||e.mp<m.cost||!Ep.has(m.effectKey))continue;let f=jo(i,e,m);if(f.length){p(m,f.reduce((x,_)=>!x||_.hp<x.hp?_:x,null),g);break}}if(!h&&!c)for(let g=0;g<l.length;g++){let m=l[g];if(m.disabled||e.mp<m.cost||!wp.has(m.effectKey))continue;let x=jo(i,e,m).filter(_=>!_.tempDebuff||_.tempDebuff.duration<=0);if(x.length){p(m,x.reduce((_,v)=>!_||v.hp<_.hp?v:_,null),g);break}}if(!h||!u||d<0)return null;let y=h.target==="self"?e:u;return Hp(e,d,y)}function G0(i,e,t,n){let s=Fp(i);return!s.length||!t.length?null:xi(i,e,s,t,n)}function V0(i,e,t){let{reachableTiles:n,occupied:s,prioritizeEnemyBase:r,enemyBaseTiles:a,baseTargets:o,centerTargets:l}=t;if(!n.length)return null;if(r&&a.length&&!a.some(h=>h.gx===e.x&&h.gy===e.y)){let h=xi(i,e,o,n,s);if(h)return h}return xi(i,e,l,n,s)}function W0(i,e,t,n){if(!Qn(e)||!t.length)return null;let{world:s}=i,r=Do(s,e.x,e.y,n,e.facing);if(r<=0)return null;let a=Dr(s,t,n,e);if(!a||a.gx===e.x&&a.gy===e.y)return null;let o=Mn(e.x,e.y,a.gx,a.gy)||e.facing;return Do(s,a.gx,a.gy,n,o)<r?Yt(e,a.gx,a.gy):null}function Sb(i,e,t){let{enemies:n,allies:s,reachableTiles:r,occupied:a,effRange:o,isRangedAi:l,centerTiles:c,centerKeys:h,centerTargets:u,baseTargets:d,enemyBaseTiles:p,prioritizeEnemyBase:y,tl:g}=t,{world:m}=i,f=Ir(e),x=new Set(r.map(M=>i.tileKey(M.gx,M.gy)));if(l&&n.length&&i.powerups.size>0){let M=G0(i,e,r,a);if(M)return M}if(g<=20&&c.length){if(c.some(b=>b.gx===e.x&&b.gy===e.y)){let b=r.filter(F=>h.has(i.tileKey(F.gx,F.gy))&&(F.gx!==e.x||F.gy!==e.y)),E=Dr(m,b,n,e);return E?Yt(e,E.gx,E.gy):ei(i,e)}let w=Uo(i,e,u);if(w){let b=Sh(w.path,f,a,m);if(b)return Yt(e,b.gx,b.gy)}let N=wh(r,u);return N?Yt(e,N.gx,N.gy):ei(i,e)}let _=W0(i,e,r,n);if(_)return _;if(!Qn(e)&&r.length){let M=V0(i,e,t);if(M)return M}if(xh(e)&&g>20){let{enemiesInRangeByTile:M}=t,w=null,N=1/0;for(let E of r){let Y=(M.get(i.tileKey(E.gx,E.gy))||[]).filter(D=>Qn(D.target));if(!Y.length)continue;let J=Math.min(...Y.map(D=>D.target.hp));J<N&&(N=J,w=E)}if(w){let E=wi(m,e.x,e.y,w.gx,w.gy,i.units,e),F=E?Lo(E,x,m):null;if(F)return Yt(e,F.gx,F.gy)}let b=Dr(m,r,n,e);return b?Yt(e,b.gx,b.gy):ei(i,e)}let v=l?Op(r,n,o,m):null;if(v)return Yt(e,v.gx,v.gy);let I=Np(r,e,n,s);return I?Yt(e,I.gx,I.gy):ei(i,e)}function wb(i,e){let t=Rp(i,e),n=Cp(i,e),s=Pp(i,e),r=vh(i,e.id),a=e.tempBuff?.doubleAttack===!0,o=Ip(i,e,{skipSkills:a}),l=e.range!=null?e.range:1,c=Lp(e,o,a),h=Ap(i),u=e.level===2&&h>20,{centerTiles:d,enemyBaseTiles:p,centerKeys:y,centerTargets:g,baseTargets:m}=zp(i,e,r),f=bh(i.world,e.x,e.y,t,l),x=Dp(i.world,s,t,o),_=f.some(M=>Qn(M.target)),v=_||s.some(M=>(x.get(i.tileKey(M.gx,M.gy))||[]).some(N=>Qn(N.target))),I={enemies:t,allies:n,reachableTiles:s,occupied:r,effRange:o,attackRange:l,isRangedAi:c,centerTiles:d,centerKeys:y,centerTargets:g,baseTargets:m,enemyBaseTiles:p,prioritizeEnemyBase:u,tl:h,enemiesInRange:f,enemiesInRangeByTile:x,hasLowHpEnemyInRange:_,hasLowHpEnemyReachable:v};if(t.length===0){if(!i.hasMoved&&s.length){let w=xi(i,e,u?m:g,s,r);if(w)return w}return ei(i,e)}if(i.hasAttacked)return i.hasMoved?null:Sb(i,e,I);if(f.length){let M=f.filter(w=>Mh(e,w.target));if(M.length){let w=z0(e,M);if(w)return Ah(e,w)}}if(!a){let M=bb(i,e,I);if(M)return M}if(f.length){let M=Bp(i,e,t,n)?Up(i,t,n):null,w=z0(e,f,M);if(w)return Ah(e,w)}if(a){let M=Rh(i,e,l,t,s);if(M)return M}if(!i.hasMoved){if(!v){let w=W0(i,e,s,t);if(w)return w}if(!v&&i.powerups.size>0){let w=G0(i,e,s,r);if(w)return w}if(h<=20&&d.length&&!d.some(N=>N.gx===e.x&&N.gy===e.y)){let b=Uo(i,e,g)?.path??null,E=Math.min(...d.map(D=>Ht(e.x,e.y,D.gx,D.gy))),F=null,Y=-1;for(let D of s){let H=i.tileKey(D.gx,D.gy);if(Math.min(...d.map(P=>Ht(D.gx,D.gy,P.gx,P.gy)))>E||!(x.get(H)||[]).some(P=>Qn(P.target)))continue;let R=b?b.findIndex(P=>P.x===D.gx&&P.y===D.gy):0;R>Y&&(Y=R,F=D)}if(F){let D=wi(i.world,e.x,e.y,F.gx,F.gy,i.units,e),H=new Set(s.map(C=>i.tileKey(C.gx,C.gy))),$=D?Lo(D,H,i.world):null;if($)return Yt(e,$.gx,$.gy)}let J=xi(i,e,g,s,r);if(J)return J}if(h<=10&&d.length){let w=xi(i,e,g,s,r);if(w)return w}if(h>20&&u&&p.length&&!p.some(N=>N.gx===e.x&&N.gy===e.y)){let N=xi(i,e,m,s,r);if(N)return N}if(h>20&&xh(e)){let w=Dr(i.world,s,t,e);if(w)return Yt(e,w.gx,w.gy)}let M=Rh(i,e,o,t,s);if(M)return M;if(h>20&&!Qn(e)){let w=V0(i,e,I);if(w)return w}}return ei(i,e)}var Qo=class{constructor({state:e,controller:t,bus:n,isCPU:s}){this.state=e,this.controller=t,this.bus=n,this.isCPU=s,this._busy=!1;let r=()=>this._maybeAct(),a=()=>this._endWithFacing();n.on("playingStarted",r),n.on("turnChanged",r),n.on("actionResolved",r),n.on("initiativeChanged",r),n.on("turnEndRequested",a)}async _endWithFacing(){let e=this.state;if(e.phase!=="playing"||!this.isCPU(e.currentPlayer)||!e.hasMoved||!e.hasAttacked)return;let t=e.getActiveUnit();if(!t||t.hp<=0){await this.controller.dispatch({type:"endTurn"});return}await this.controller.dispatch(ei(e,t))}_maybeAct(){let e=this.state;e.phase!=="playing"||this._busy||this.isCPU(e.currentPlayer)&&(this._busy=!0,setTimeout(()=>this._act(),350))}async _act(){let e=this.state;try{if(e.phase!=="playing"||!this.isCPU(e.currentPlayer))return;let t=e.getActiveUnit();if(!t||t.hp<=0){await this.controller.dispatch({type:"endTurn"});return}let n=wb(e,t);await this.controller.dispatch(n||ei(e,t))}finally{this._busy=!1,e.hasMoved&&e.hasAttacked||this._maybeAct()}}};var $0=5,Eb=.004,el=new Set([re.TREE,re.WATER,re.ROCK]);function Tb(i){for(;i>Math.PI;)i-=2*Math.PI;for(;i<-Math.PI;)i+=2*Math.PI;return i}var tl=class{constructor({view:e,state:t,camera:n,units:s,bus:r}){this.view=e,this.state=t,this.camera=n,this.units=s,this.bus=r,this.container=e.container,this.pickTile=Po(e),this.enabled=!1,this.mapName="Untitled",this.tool="terrain",this.tileType=re.PATH,this.height=1,this.unitPlayer=1,this.unitClass="knight",this.unitLevel=1,this.unitFacing=ii(this.unitPlayer),this._painting=!1,this._wantPaint=!1,this._dirty=!1,this._lastPaintKey=-1,this._isPanning=!1,this._isRotating=!1,this._ctrlOnDown=!1,this._shiftOnDown=!1,this._prevNdc=null,this._downPixel={x:0,y:0},this._isTouch=!1,this._pinchDist=null,this._pinchAngle=null,this._bind()}setEnabled(e){this.enabled=!!e,e?this.container.style.cursor="grab":(this._painting=!1,this._wantPaint=!1,this._dirty=!1,this._prevNdc=null,this._isPanning=!1,this._isRotating=!1)}_syncUi(e={}){let t=Ge.value.editor||{};Qe({editor:{...t,mapName:this.mapName,tool:this.tool,tileType:this.tileType,height:this.height,unitPlayer:this.unitPlayer,unitClass:this.unitClass,unitLevel:this.unitLevel,unitFacing:{...this.unitFacing},w:this.state.world?.w??0,h:this.state.world?.h??0,unitCount:this.state.units.length,...e}})}setTool(e){this.tool=e,this._syncUi()}setTileType(e){this.tileType=e,this.tool="terrain",this._syncUi()}setHeight(e){this.height=Math.max(0,Math.min(2,e|0)),this.tool="terrain",this._syncUi()}setUnitPlayer(e){this.unitPlayer=e===2?2:1,this.unitFacing=ii(this.unitPlayer),this.tool="unit",this._syncUi()}setUnitClass(e){this.unitClass=e,this.tool="unit",this._syncUi()}setUnitLevel(e){this.unitLevel=Math.max(1,Math.min(3,e|0)),this.tool="unit",this._syncUi()}setUnitFacing(e){let t=Math.sign(e?.dx||0),n=Math.sign(e?.dy||0);Math.abs(t)+Math.abs(n)===1&&(this.unitFacing={dx:t,dy:n},this.tool="unit",this._syncUi())}setMapName(e){this.mapName=String(e||"Untitled"),this._syncUi()}open(e=it.gridW,t=it.gridH){let n=yl(e,t,"Untitled");this.load(n),this.setEnabled(!0)}load(e){let t=ra(e);if(!t.ok)throw new Error(t.error);this.mapName=e.name||"Untitled",this.state.clearUnits(),this.units.clear();let n=Js(e);this.state.world=n,this.view.setWorld(n),this.bus.emit("worldRebuilt",{});let s=aa(e);for(let r of s){if(el.has(n.type[r.y][r.x])||this.state.getUnitAtTile(r.x,r.y))continue;let a=Ei({id:this.state.ids.next(),player:r.player,classKey:r.class,x:r.x,y:r.y,level:r.level,tag:r.tag||null});r.facing&&(a.facing={dx:r.facing.dx,dy:r.facing.dy}),this.state.addUnit(a),this.units.addUnit(a)}this.units.updateBorders(),this.view.invalidateShadows(),this._syncUi({error:""})}serialize(){return _l(this.state.world,this.state.units,this.mapName)}newBlank(e,t){let n=yl(e||this.state.world.w,t||this.state.world.h,this.mapName);this.load(n)}resize(e,t){e=Math.max(5,Math.min(50,e|0)),t=Math.max(5,Math.min(50,t|0));let n=this.state.world;if(!n||n.w===e&&n.h===t){this._syncUi();return}let s=Array.from({length:t},(l,c)=>Array.from({length:e},(h,u)=>c<n.h&&u<n.w?n.type[c][u]:re.GRASS)),r=Array.from({length:t},(l,c)=>Array.from({length:e},(h,u)=>c<n.h&&u<n.w?n.height[c][u]:0)),a=this.state.units.filter(l=>l.x<e&&l.y<t),o={version:1,name:this.mapName,w:e,h:t,type:s,height:r,units:a.map(l=>{let c={player:l.player,class:l.class,level:l.level,x:l.x,y:l.y,facing:l.facing||ii(l.player)};return l.tag&&(c.tag=l.tag),c})};this.load(o)}_rebuildWorldMeta(){let e=this.state.world,t=_l(e,[],this.mapName),n=Js(t);e.path=n.path,e.centerTiles=n.centerTiles,e.topBaseX=n.topBaseX,e.topBaseY=n.topBaseY,e.botBaseX=n.botBaseX,e.botBaseY=n.botBaseY}_flushTerrain(){if(this._dirty){this._rebuildWorldMeta(),this.view.setWorld(this.state.world),this.bus.emit("worldRebuilt",{}),this.units.clear();for(let e of this.state.units)this.units.addUnit(e);this.units.updateBorders(),this.view.invalidateShadows(),this._dirty=!1,this._syncUi()}}applyTile(e,t){let n=this.state.world;if(!n||e<0||e>=n.w||t<0||t>=n.h)return;let s=t*n.w+e;if(s!==this._lastPaintKey){if(this._lastPaintKey=s,this.tool==="erase"){let r=this.state.getUnitAtTile(e,t);r&&(this.state.removeUnit(r),this.units.removeUnit(r),this._syncUi());return}if(this.tool==="unit"){if(el.has(n.type[t][e]))return;let r=this.state.getUnitAtTile(e,t);r&&(this.state.removeUnit(r),this.units.removeUnit(r));let a=Ei({id:this.state.ids.next(),player:this.unitPlayer,classKey:this.unitClass,x:e,y:t,level:this.unitLevel});a.facing={...this.unitFacing},this.state.addUnit(a),this.units.addUnit(a),this.units.updateBorders(),this.view.invalidateShadows(),this._syncUi();return}if(n.type[t][e]=this.tileType,n.height[t][e]=this.height,n.path[t][e]=!el.has(this.tileType),this._dirty=!0,el.has(this.tileType)){let r=this.state.getUnitAtTile(e,t);r&&(this.state.removeUnit(r),this.units.removeUnit(r))}}}_bind(){this._onPointerDown=this._onPointerDown.bind(this),this._onPointerMove=this._onPointerMove.bind(this),this._onPointerUp=this._onPointerUp.bind(this),this._onWheel=this._onWheel.bind(this),this._onContextMenu=e=>{this.enabled&&(this._isUiTarget(e.target)||e.preventDefault())},this._onTouchStart=this._onTouchStart.bind(this),this._onTouchMove=this._onTouchMove.bind(this),this._onTouchEnd=this._onTouchEnd.bind(this),window.addEventListener("pointerdown",this._onPointerDown),window.addEventListener("pointermove",this._onPointerMove),window.addEventListener("pointerup",this._onPointerUp),window.addEventListener("wheel",this._onWheel,{passive:!1}),window.addEventListener("contextmenu",this._onContextMenu),this.container.addEventListener("touchstart",this._onTouchStart,{passive:!1}),this.container.addEventListener("touchmove",this._onTouchMove,{passive:!1}),this.container.addEventListener("touchend",this._onTouchEnd,{passive:!1}),this.container.addEventListener("touchcancel",this._onTouchEnd,{passive:!1})}_isUiTarget(e){let t=e&&(e.nodeType===1?e:e.parentElement);return!!(t&&t.closest("app-root, #map-editor-panel, #mode-select-overlay:not(.hidden), button, input, select, textarea, a"))}_onPointerDown(e){if(!this.enabled||e.pointerType==="touch"||this._isUiTarget(e.target))return;let t=e.button===1||e.button===2;this._downPixel={x:e.clientX,y:e.clientY},this._isTouch=!1,this._ctrlOnDown=e.ctrlKey,this._shiftOnDown=e.shiftKey,this._prevNdc=tn(this.container,e.clientX,e.clientY),this._wantPaint=e.button===0&&!e.ctrlKey&&!t,this._painting=this._wantPaint&&e.shiftKey,this._lastPaintKey=-1,t&&e.preventDefault(),this.container.style.cursor=this._painting?"crosshair":"grab"}_onPointerMove(e){!this.enabled||e.pointerType==="touch"||this._drag(e.clientX,e.clientY,e.ctrlKey,e.shiftKey)}_drag(e,t,n,s=!1){if(this._prevNdc==null)return;let r=e-this._downPixel.x,a=t-this._downPixel.y;if(!this._isPanning&&!this._isRotating&&!this._painting&&(Math.abs(r)>$0||Math.abs(a)>$0)&&(n||this._ctrlOnDown?(this._isRotating=!0,this._wantPaint=!1):this._wantPaint&&(s||this._shiftOnDown||this._painting)?this._painting=!0:(this._isPanning=!0,this._wantPaint=!1),this.camera.disableFollow()),this._isRotating)this.camera.rotate(r,a),this._downPixel={x:e,y:t},this.container.style.cursor="grabbing";else if(this._isPanning){let o=tn(this.container,e,t);this.camera.panFromNdc(this._prevNdc,o,1),this._prevNdc=o,this.container.style.cursor="grabbing"}else if(this._painting){let o=tn(this.container,e,t),l=this.pickTile(o.x,o.y);l&&this.applyTile(l.gx,l.gy),this.container.style.cursor="crosshair"}}_onPointerUp(e){!this.enabled||e.pointerType==="touch"||this._endDrag(e.clientX,e.clientY)}_endDrag(e,t){if(this._prevNdc!=null&&!this._isPanning&&!this._isRotating&&this._wantPaint){let n=tn(this.container,e,t),s=this.pickTile(n.x,n.y);s&&this.applyTile(s.gx,s.gy)}this._flushTerrain(),this._prevNdc=null,this._isPanning=!1,this._isRotating=!1,this._ctrlOnDown=!1,this._shiftOnDown=!1,this._painting=!1,this._wantPaint=!1,this._lastPaintKey=-1,this.container.style.cursor=(this.enabled,"grab")}_onWheel(e){this.enabled&&(this._isUiTarget(e.target)||(e.preventDefault(),this.camera.disableFollow(),this.camera.zoom(e.deltaY)))}_touchCoords(e){return e.touches&&e.touches.length>0?{x:e.touches[0].clientX,y:e.touches[0].clientY}:e.changedTouches&&e.changedTouches.length>0?{x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY}:{x:0,y:0}}_touchDistance(e){return!e||e.length<2?0:Math.hypot(e[1].clientX-e[0].clientX,e[1].clientY-e[0].clientY)}_touchAngle(e){return Math.atan2(e[1].clientY-e[0].clientY,e[1].clientX-e[0].clientX)}_beginTwoFingerTouch(e){this._pinchDist=this._touchDistance(e),this._pinchAngle=this._touchAngle(e),this._prevNdc=null,this._isPanning=!1,this._isRotating=!1,this._painting=!1}_onTouchStart(e){if(!this.enabled||this._isUiTarget(e.target))return;if(e.touches.length===2){this._beginTwoFingerTouch(e.touches);return}if(e.touches.length!==1)return;this._pinchDist=null,this._pinchAngle=null;let t=this._touchCoords(e);this._downPixel={x:t.x,y:t.y},this._isTouch=!0,this._ctrlOnDown=!1,this._shiftOnDown=!1,this._prevNdc=tn(this.container,t.x,t.y),this._wantPaint=!0,this._painting=!1,this._lastPaintKey=-1}_onTouchMove(e){if(!this.enabled||this._isUiTarget(e.target))return;if(e.touches.length===2){if(e.preventDefault(),this._pinchDist==null){this._beginTwoFingerTouch(e.touches);return}let n=this._touchDistance(e.touches),s=this._touchAngle(e.touches);if(this._pinchDist!=null&&this._pinchDist>0&&(this.camera.disableFollow(),this.camera.zoom(-(n-this._pinchDist),.15)),this._pinchAngle!=null){let r=Tb(s-this._pinchAngle);Math.abs(r)>.001&&(this.camera.disableFollow(),this.camera.rotate(-r/Eb,0))}this._pinchDist=n,this._pinchAngle=s;return}if(e.touches.length!==1)return;e.preventDefault();let t=this._touchCoords(e);this._drag(t.x,t.y,!1,!1)}_onTouchEnd(e){if(!this.enabled)return;if(e.touches.length===1){this._pinchDist=null,this._pinchAngle=null;let n=e.touches[0];this._downPixel={x:n.clientX,y:n.clientY},this._isTouch=!0,this._prevNdc=tn(this.container,n.clientX,n.clientY),this._wantPaint=!0,this._painting=!1,this._lastPaintKey=-1;return}if(e.touches.length<2&&(this._pinchDist=null,this._pinchAngle=null),e.touches.length>=1)return;let t=this._touchCoords(e);this._isTouch=!1,this._endDrag(t.x,t.y)}};var Ab=new Set([re.TREE,re.WATER,re.ROCK]);function Rb(){let i=document.getElementById("canvas-wrap"),e=new qr,t=new Jr({seed:Date.now()});t.world=ul({w:it.gridW,h:it.gridH,centerPlazaRadius:it.centerPlazaRadius,seed:t.rng.next()*1e9});let n=new sa(t,e),s=yp(i,t,e);n.setAnimator(s.animator);let r=new Co(s.view,s.tween);s.units.cameraFollow=C=>r.follow(C);let a=C=>n.dispatch(C),o=C=>a(C),l=new No({view:s.view,state:t,controller:n,camera:r,highlights:s.highlights,bus:e,dispatch:o,units:s.units}),c=new tl({view:s.view,state:t,camera:r,units:s.units,bus:e});D0(t,e);let h=()=>s.highlights.clear();e.on("draftStarted",h),e.on("draftTurnChanged",()=>{t.draft.pendingClassKey||h()}),e.on("draftPickChosen",({placementTiles:C})=>{C?.length&&s.highlights.show(C,"placement")}),e.on("unitPlaced",h),e.on("draftComplete",h);let u=C=>t.isCPUPlayer(C);new Jo({state:t,controller:n,bus:e,isCPU:u}),new Qo({state:t,controller:n,bus:e,isCPU:u});let d=({unit:C}={})=>{C&&r.centerOn(C.x,C.y)};e.on("turnChanged",d),e.on("playingStarted",d),e.on("draftComplete",()=>{Qe({battleStart:!0,draft:null}),setTimeout(()=>{n.startPlaying(),Qe({battleStart:!1})},2500)});let p=null,y=1,g=0,m=null;function f(){m!=null&&(clearTimeout(m),m=null)}function x(C,{continueSeries:R=!1}={}){f(),c.setEnabled(!1),l.enabled=!0,t.gameMode=C.mode,t.story=null,t.aiDraftPreference=C.aiDraftPreference||"balanced";let P=C.seed!=null?C.seed:Date.now()>>>0;C.mode==="cvcpu"?R||(p={...C},delete p.seed,y=Math.max(1,Number(C.numGames)||1),g=0,Tu()):(p=null,y=1,g=0);let B=(C.mode==="pvp"||C.mode==="online")&&C.mapMode==="short";t.settings=Gs({gridW:B?27:C.gridW||it.gridW,gridH:B?15:C.gridH||it.gridH,centerPlazaRadius:B?.35:C.centerPlazaRadius||it.centerPlazaRadius,maxTurns:B?100:C.maxTurns||it.maxTurns,draftPicksPerPlayer:C.numUnits||it.draftPicksPerPlayer,moveDurationMs:C.moveDurationMs!=null?C.moveDurationMs:it.moveDurationMs}),t.rng.reseed(P),t.clearUnits(),t.world=ul({w:t.settings.gridW,h:t.settings.gridH,centerPlazaRadius:t.settings.centerPlazaRadius,seed:P}),s.view.setWorld(t.world),e.emit("worldRebuilt",{}),l.clearSelection(),Qe({screen:"game",phase:"draft",gameMode:C.mode,gameOver:null,battleStart:!1,previewUnit:null,story:null}),pl(n.ctx)}function _(C){let R=t.world,P=aa(C);for(let B of P){if(Ab.has(R.type[B.y][B.x])||t.getUnitAtTile(B.x,B.y))continue;let Z=Ei({id:t.ids.next(),player:B.player,classKey:B.class,x:B.x,y:B.y,level:B.level,tag:B.tag||null});B.facing&&(Z.facing={dx:B.facing.dx,dy:B.facing.dy}),t.addUnit(Z),s.units.addUnit(Z)}s.units.updateBorders()}function v(C){let R=C0(C);if(!R)return;f(),p=null,c.setEnabled(!1),l.enabled=!0,J();let P=Xo(R.id),B=Date.now()>>>0;t.gameMode="story",t.story={stageId:R.id,stageIndex:P,objectives:R.objectives||{win:[{type:"eliminate"}],lose:[]}},t.aiDraftPreference="balanced",t.playerNames={1:"You",2:"Enemy"},t.localPlayerNumber=1,t.settings=Gs({gridW:R.map.w,gridH:R.map.h,maxTurns:R.maxTurns||it.maxTurns,draftPicksPerPlayer:R.maxPlayerUnits||it.draftPicksPerPlayer,moveDurationMs:it.moveDurationMs}),t.rng.reseed(B),t.clearUnits(),s.units.clear(),t.world=Js(R.map),s.view.setWorld(t.world),e.emit("worldRebuilt",{}),_(R.map),l.clearSelection();let Z=$o(R.classPool);Qe({screen:"game",phase:"draft",gameMode:"story",gameOver:null,battleStart:!1,previewUnit:null,story:{stageId:R.id,stageIndex:P,objectives:[]}}),pl(n.ctx,{players:[1],picksPerPlayer:R.maxPlayerUnits,classPool:Z}),r.centerOn(Math.floor(t.world.w/2),Math.floor(t.world.h/2))}e.on("gameOver",()=>{if(t.gameMode!=="cvcpu"||!p)return;if(g++,g<y){let R=Ge.value.gameOver;R&&Qe({gameOver:{...R,classRecord:null}}),f(),m=setTimeout(()=>{m=null,x({...p},{continueSeries:!0})},2e3)}});function I(){f(),p=null,y=1,g=0,t.phase="draft",t.story=null,c.setEnabled(!1),l.enabled=!0,l.clearSelection(),s.units.clear(),t.clearUnits(),Qe({screen:"mode-select",gameOver:null,battleStart:!1,draft:null,previewUnit:null,selectedUnit:null,editor:null,story:null})}function M(C){let R=new Blob([JSON.stringify(C,null,2)],{type:"application/json"}),P=URL.createObjectURL(R),B=document.createElement("a"),Z=String(C.name||"map").replace(/[^\w\-]+/g,"_").slice(0,40);B.href=P,B.download=`${Z||"map"}.json`,B.click(),URL.revokeObjectURL(P)}let w=null,N=null,b=0,E="",F="Player 1",Y="Player 2";function J(){if(w&&w.transport)try{w.transport.close()}catch{}w=null,a=C=>n.dispatch(C)}function D(C,R){t.localPlayerNumber=C,t.playerNames={1:R[1]||"Player 1",2:R[2]||"Player 2"},a=P=>w.netplay.sendLocal(P),x({mode:"online",mapMode:N.mapMode,numUnits:N.numUnits,seed:b}),w.netplay.markReady(),Qe({online:null})}function H(C,R){w.netplay=new Zo({transport:w.transport,controller:n,localPlayerNumber:C}),D(C,R)}function $(){Ge.value.online&&Qe({online:{...Ge.value.online,error:"Connection lost."}})}_e.onlineStart=C=>{N=C,J(),Qe({online:{view:"menu",error:""}})},_e.onlineCancel=()=>{J(),Qe({online:null})},_e.onlineHost=async C=>{E=C||"Player 1",b=(Date.now()^Math.random()*4294967295)>>>0;let R=new $r;w={transport:R,netplay:null},R.onOpen=()=>H(1,{1:E,2:Y}),R.onClose=$;try{let P=await R.createOffer(),B=btoa(JSON.stringify({sdp:P,seed:b,cfg:N,name:E}));Qe({online:{view:"hosting",offer:B,error:""}})}catch(P){Qe({online:{view:"menu",error:P.message||"Failed to create offer."}})}},_e.onlineHostConnect=async C=>{if(!(!w||!w.transport))try{let{sdp:R,name:P}=JSON.parse(atob(String(C).trim()));Y=P||"Player 2";let B=Ge.value.online||{};Qe({online:{...B,error:"",waiting:!0}}),await w.transport.acceptAnswer(R)}catch(R){let P=Ge.value.online||{};Qe({online:{...P,waiting:!1,error:R.message||"Invalid reply code."}})}},_e.onlineJoin=async(C,R)=>{E=R||"Player 2";try{let P=JSON.parse(atob(String(C).trim()));b=P.seed,N=P.cfg||{mapMode:"long",numUnits:it.draftPicksPerPlayer},F=P.name||"Player 1";let B=new $r;w={transport:B,netplay:null},B.onOpen=()=>H(2,{1:F,2:E}),B.onClose=$;let Z=await B.acceptOffer(P.sdp),Q=btoa(JSON.stringify({sdp:Z,name:E}));Qe({online:{view:"joined",answer:Q,error:""}})}catch(P){Qe({online:{view:"joining",error:P.message||"Invalid host code."}})}},_e.startMatch=C=>x(C),_e.toModeSelect=()=>{J(),I()},_e.openStorySelect=()=>{J(),f(),p=null,c.setEnabled(!1),l.enabled=!0,l.clearSelection(),s.units.clear(),t.clearUnits(),t.story=null,Qe({screen:"story-select",gameOver:null,battleStart:!1,draft:null,previewUnit:null,selectedUnit:null,editor:null,story:null,unlockedStageIndex:zr()})},_e.startStage=C=>v(C),_e.retryStage=()=>{let C=t.story?.stageId||Ge.value.gameOver?.stageId;C&&v(C)},_e.nextStage=()=>{let C=Ge.value.gameOver,R=C?.nextStageIndex!=null?C.nextStageIndex:t.story?t.story.stageIndex+1:-1,P=Mi[R];P?v(P.id):_e.openStorySelect()},_e.draftPick=C=>{t.gameMode==="online"&&n.currentDraftPlayer!==t.localPlayerNumber||o({type:"draftPick",classKey:C})},_e.attack=()=>l.enterAttackMode(),_e.skill=C=>l.enterSkillMode(C),_e.endTurn=()=>{t.gameMode==="online"&&!t.isHumanTurn()||l.mode!=="facing"&&l.enterFacingMode()},_e.cancel=()=>l.clearSelection(),_e.openEditor=()=>{J(),f(),p=null,t.story=null,l.clearSelection(),l.enabled=!1,s.units.clear(),t.clearUnits(),Qe({screen:"editor",gameOver:null,battleStart:!1,draft:null,previewUnit:null,selectedUnit:null,editor:{},story:null}),c.open(it.gridW,it.gridH),r.centerOn(Math.floor(t.world.w/2),Math.floor(t.world.h/2))},_e.closeEditor=()=>{c.setEnabled(!1),I()},_e.editorSetTool=C=>c.setTool(C),_e.editorSetTileType=C=>c.setTileType(C),_e.editorSetHeight=C=>c.setHeight(C),_e.editorSetUnitPlayer=C=>c.setUnitPlayer(C),_e.editorSetUnitClass=C=>c.setUnitClass(C),_e.editorSetUnitLevel=C=>c.setUnitLevel(C),_e.editorSetUnitFacing=C=>c.setUnitFacing(C),_e.editorSetName=C=>c.setMapName(C),_e.editorResize=(C,R)=>c.resize(C,R),_e.editorNew=()=>c.newBlank(),_e.editorSave=()=>M(c.serialize()),_e.editorLoad=C=>{try{c.load(C)}catch(R){Qe({editor:{...Ge.value.editor||{},error:R.message||"Invalid map."}})}},_e.editorError=C=>{Qe({editor:{...Ge.value.editor||{},error:C||"Error."}})},Qe({screen:"mode-select"})}Rb();
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
