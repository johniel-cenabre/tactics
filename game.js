var Dr=class{constructor(){this._handlers=new Map,this._any=new Set}on(t,e){let n=this._handlers.get(t);return n||(n=new Set,this._handlers.set(t,n)),n.add(e),()=>n.delete(e)}once(t,e){let n=this.on(t,s=>{n(),e(s)});return n}onAny(t){return this._any.add(t),()=>this._any.delete(t)}emit(t,e){let n=this._handlers.get(t);if(n)for(let s of[...n])s(e);if(this._any.size)for(let s of[...this._any])s(t,e)}clear(){this._handlers.clear(),this._any.clear()}};var Me={gridW:35,gridH:25,centerPlazaRadius:.29,maxTurns:200,draftPicksPerPlayer:7,moveDurationMs:300};var Ps=typeof window<"u"&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||window.location.search.includes("dev=1"));function Ur(i={}){return{...Me,...i}}var Nr=class{constructor(t=1){this._next=t}next(){return this._next++}reset(t=1){this._next=t}};function Wp(i){let t=0;for(let e=0;e<i.length;e++)t=Math.imul(31,t)+i.charCodeAt(e),t=t>>>0;return t}function No(i){let t=typeof i=="string"?Wp(i):i>>>0;return function(){t=t+1831565813>>>0;let n=Math.imul(t^t>>>15,t|1);return n=(n^n>>>7)>>>0,n/4294967296}}var Or=class{constructor(t=Date.now()){this.reseed(t)}reseed(t){this.seed=t,this._next=No(t)}next(){return this._next()}range(t,e){return t+this._next()*(e-t)}int(t,e){return Math.floor(t+this._next()*(e-t+1))}pick(t){return t[Math.floor(this._next()*t.length)]}shuffle(t){for(let e=t.length-1;e>0;e--){let n=Math.floor(this._next()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}};var Fr=class{constructor({seed:t}={}){this.settings=Ur(),this.rng=new Or(t??Date.now()),this.ids=new Nr(1),this.world=null,this.units=[],this.unitById=new Map,this.unitAtTileKey=new Map,this.phase="draft",this.gameMode="pvp",this.turnCount=0,this.currentPlayer=1,this.initiativeOrder=[],this.currentTurnIndex=0,this.hasMoved=!1,this.hasAttacked=!1,this.deadCorpseCount=0,this.deathOrderSeq=0,this.powerups=new Map,this.powerupSpawnedTurnsLeft={30:!1,20:!1,10:!1},this.draft=$p(),this.localPlayerNumber=1,this.playerNames={1:"Player 1",2:"Player 2"},this.aiDraftPreference="balanced"}get world_(){return this.world}tileKey(t,e){return e*this.world.w+t}addUnit(t){return this.units.push(t),this.unitById.set(t.id,t),t.hp>0&&this.unitAtTileKey.set(this.tileKey(t.x,t.y),t),t}getUnitById(t){return this.unitById.get(t)||null}getUnitAtTile(t,e){let n=this.unitAtTileKey.get(this.tileKey(t,e));return n&&n.hp>0?n:null}updateUnitTileIndex(t,e,n){if(e!=null&&n!=null){let s=this.tileKey(e,n);this.unitAtTileKey.get(s)===t&&this.unitAtTileKey.delete(s)}t.hp>0&&this.unitAtTileKey.set(this.tileKey(t.x,t.y),t)}removeUnitFromTileIndex(t){let e=this.tileKey(t.x,t.y);this.unitAtTileKey.get(e)===t&&this.unitAtTileKey.delete(e)}removeUnit(t){let e=this.units.indexOf(t);e>=0&&this.units.splice(e,1),this.unitById.delete(t.id),this.removeUnitFromTileIndex(t)}rebuildIndexes(){this.unitById.clear(),this.unitAtTileKey.clear();for(let t of this.units)this.unitById.set(t.id,t),t.hp>0&&this.unitAtTileKey.set(this.tileKey(t.x,t.y),t)}clearUnits(){this.units=[],this.unitById.clear(),this.unitAtTileKey.clear(),this.ids.reset(1),this.deadCorpseCount=0,this.deathOrderSeq=0}getLivingUnits(){return this.units.filter(t=>t.hp>0)}getLivingUnitsForPlayer(t){return this.units.filter(e=>e.hp>0&&e.player===t)}getCoreLivingUnits(t){return this.units.filter(e=>e.hp>0&&e.player===t&&e.summonedBy==null)}getActiveUnit(){if(!this.initiativeOrder.length)return null;let t=this.initiativeOrder[this.currentTurnIndex];return this.getUnitById(t)}isHumanTurn(){return!(this.gameMode==="cvcpu"||this.gameMode==="pvcpu"&&this.currentPlayer!==1||this.gameMode==="online"&&this.currentPlayer!==this.localPlayerNumber)}isCPUPlayer(t){return this.gameMode==="pvcpu"&&t===2||this.gameMode==="cvcpu"}};function $p(){return{order:[],pickIndex:0,pickCountByPlayer:{1:0,2:0},availableClasses:new Set,classOrder:[],pendingClassKey:null,selectedClassKey:null,placementTiles:[]}}var wt={PATH:0,GRASS:1,TREE:2,WATER:3,ROCK:4,BASE_TOP:5,BASE_BOTTOM:6,CENTER:7},Oo={[wt.PATH]:2976557,[wt.GRASS]:2968109,[wt.TREE]:1719578,[wt.WATER]:1989278,[wt.ROCK]:4872778,[wt.BASE_TOP]:8014410,[wt.BASE_BOTTOM]:4872826,[wt.CENTER]:13940810};var De=(i,t,e)=>e*i.w+t;function An(i,t,e){if(t<0||t>=i.w||e<0||e>=i.h)return!1;let n=i.type[e][t];return!(n===wt.TREE||n===wt.WATER||n===wt.ROCK)}function Eh(i,t,e,n,s){let r=n.x,a=n.y,o=n.x-e.x,l=n.y-e.y,c=Math.abs(o)>=Math.abs(l)?o>0?1:o<0?-1:0:0,h=Math.abs(l)>Math.abs(o)?l>0?1:l<0?-1:0:0;if(c===0&&h===0)return{newGx:r,newGy:a,collisionDamage:0};let u=0;for(let d=0;d<s;d++){let p=r+c,_=a+h,g=p<0||p>=i.w||_<0||_>=i.h,m=!An(i,p,_),f=t.some(y=>y.hp>0&&y.id!==n.id&&y.x===p&&y.y===_);if(g||m||f){let y=Math.max(1,u*3+Math.ceil((e.str||0)*.3));return{newGx:r,newGy:a,collisionDamage:y}}r=p,a=_,u++}return{newGx:r,newGy:a,collisionDamage:0}}function Xp(i,t,e,n){let s=[],r=i,a=t,o=e,l=n,c=Math.abs(o-r),h=Math.abs(l-a),u=r<o?1:-1,d=a<l?1:-1,p=c-h;for(;s.push({x:r,y:a}),!(r===o&&a===l);){let _=2*p;_>-h&&(p-=h,r+=u),_<c&&(p+=c,a+=d)}return s}function tn(i,t,e,n,s){let r=Xp(t,e,n,s);for(let a=1;a<r.length-1;a++){let o=r[a];if(!An(i,o.x,o.y))return!1}return!0}function Bo(i){if(!i||!i.tempDebuff)return!1;let t=i.tempDebuff;return!(t.agi==null||!(t.agi>0)||t.duration!=null&&t.duration<=0)}function Br(i,t,e,n,s,r){r&&Bo(r)?n=Math.max(0,n):n=Math.max(4,n);let a=new Map;a.set(De(i,t,e),0);let o=[{x:t,y:e,d:0}],l=0,c=[[0,1],[0,-1],[1,0],[-1,0]],h=s!=null&&r!=null,u=h?new Set(s.filter(d=>d.hp>0&&d.player!==r.player).map(d=>De(i,d.x,d.y))):null;for(;l<o.length;){let{x:d,y:p,d:_}=o[l++];if(!(_>=n))for(let[g,m]of c){let f=d+g,y=p+m;if(!An(i,f,y)||h&&u.has(De(i,f,y)))continue;let x=De(i,f,y);if(a.has(x))continue;let b=_+1;a.set(x,b),o.push({x:f,y,d:b})}}return a}function kr(i,t,e,n){let s=new Map,r=Math.max(0,t-n),a=Math.min(i.w-1,t+n),o=Math.max(0,e-n),l=Math.min(i.h-1,e+n);for(let c=o;c<=l;c++)for(let h=r;h<=a;h++){let u=Math.abs(h-t)+Math.abs(c-e);u>=1&&u<=n&&s.set(De(i,h,c),u)}return s}function xi(i,t,e,n,s,r,a){if(t===n&&e===s)return[{x:t,y:e}];let o=new Set(r.filter(p=>p.hp>0&&p.player!==a.player).map(p=>De(i,p.x,p.y))),l=new Map,c=[{x:t,y:e}],h=0;l.set(De(i,t,e),null);let u=[[0,1],[0,-1],[1,0],[-1,0]],d=(p,_)=>An(i,p,_)&&!o.has(De(i,p,_));for(;h<c.length;){let{x:p,y:_}=c[h++];if(p===n&&_===s){let g=[],m={x:n,y:s};for(;m;)g.unshift(m),m=l.get(De(i,m.x,m.y));return g}for(let[g,m]of u){let f=p+g,y=_+m,x=De(i,f,y);l.has(x)||d(f,y)&&(l.set(x,{x:p,y:_}),c.push({x:f,y}))}}return null}function Th(i,t,e,n,s,r){if(!n||n.length===0)return null;let a=De(i,t,e),o=new Set;for(let _=0;_<n.length;_++){let g=n[_];g&&g.gx!=null&&g.gy!=null&&o.add(De(i,g.gx,g.gy))}if(o.size===0)return null;if(o.has(a))return{path:[{x:t,y:e}],target:{gx:t,gy:e}};let l=new Set(s.filter(_=>_.hp>0&&_.player!==r.player).map(_=>De(i,_.x,_.y))),c=new Map,h=[{x:t,y:e}],u=0;c.set(a,null);let d=[[0,1],[0,-1],[1,0],[-1,0]],p=(_,g)=>An(i,_,g)&&!l.has(De(i,_,g));for(;u<h.length;){let{x:_,y:g}=h[u++],m=De(i,_,g);if(o.has(m)){let f=[],y={x:_,y:g};for(;y;)f.unshift(y),y=c.get(De(i,y.x,y.y));return{path:f,target:{gx:_,gy:g}}}for(let f=0;f<d.length;f++){let y=_+d[f][0],x=g+d[f][1],b=De(i,y,x);c.has(b)||p(y,x)&&(c.set(b,{x:_,y:g}),h.push({x:y,y:x}))}}return null}function qp(i){return{hw:i.w*.95/2,hh:i.h*.95/2}}function wh(i,t){let{hw:e,hh:n}=qp(i),s=Math.floor((t.x+e)/.95),r=Math.floor((t.z+n)/.95);return s<0||s>=i.w||r<0||r>=i.h?null:{gx:s,gy:r}}var Oe=["knight","mage","monk","ghoul","lancer","hunter","assassin","berserker","witch","ninja","samurai","werewolf","paladin","exorcist","bandit","ranger","blacksmith","alchemist","vampire","necromancer","barbarian","cannibal","shaman","oracle","amazon"],Ye={knight:{name:"Knight",gender:"male",hp:27,maxHp:27,mp:5,maxMp:5,str:14,agi:8,vit:14,dex:10,luk:4,int:7,range:1},mage:{name:"Mage",gender:"female",hp:16,maxHp:16,mp:22,maxMp:22,str:3,agi:3,vit:5,dex:4,luk:13,int:17,range:1},monk:{name:"Monk",gender:"male",hp:24,maxHp:24,mp:13,maxMp:13,str:10,agi:10,vit:12,dex:9,luk:11,int:10,range:1},ghoul:{name:"Ghoul",gender:"male",hp:23,maxHp:23,mp:6,maxMp:6,str:12,agi:9,vit:9,dex:11,luk:9,int:5,range:1},lancer:{name:"Lancer",gender:"female",hp:22,maxHp:22,mp:7,maxMp:7,str:13,agi:11,vit:10,dex:7,luk:5,int:8,range:2},hunter:{name:"Hunter",gender:"female",hp:18,maxHp:18,mp:9,maxMp:9,str:7,agi:5,vit:7,dex:16,luk:12,int:5,range:8},assassin:{name:"Assassin",gender:"female",hp:20,maxHp:20,mp:10,maxMp:10,str:9,agi:14,vit:6,dex:14,luk:10,int:4,range:1},berserker:{name:"Berserker",gender:"male",hp:30,maxHp:30,mp:3,maxMp:3,str:15,agi:7,vit:13,dex:8,luk:6,int:1,range:1},witch:{name:"Witch",gender:"female",hp:16,maxHp:16,mp:24,maxMp:24,str:5,agi:6,vit:4,dex:5,luk:14,int:14,range:3},ninja:{name:"Ninja",gender:"female",hp:21,maxHp:21,mp:11,maxMp:11,str:8,agi:15,vit:7,dex:12,luk:8,int:9,range:1},samurai:{name:"Samurai",gender:"male",hp:24,maxHp:24,mp:8,maxMp:8,str:11,agi:12,vit:8,dex:13,luk:7,int:6,range:1},werewolf:{name:"Werewolf",gender:"male",hp:25,maxHp:25,mp:4,maxMp:4,str:14,agi:13,vit:11,dex:6,luk:6,int:3,range:1},paladin:{name:"Paladin",gender:"male",hp:26,maxHp:26,mp:12,maxMp:12,str:12,agi:8,vit:16,dex:8,luk:10,int:11,range:1},exorcist:{name:"Exorcist",gender:"male",hp:21,maxHp:21,mp:14,maxMp:14,str:7,agi:5,vit:9,dex:6,luk:15,int:13,range:1},bandit:{name:"Bandit",gender:"male",hp:20,maxHp:20,mp:6,maxMp:6,str:9,agi:14,vit:6,dex:14,luk:13,int:4,range:1},ranger:{name:"Ranger",gender:"female",hp:19,maxHp:19,mp:10,maxMp:10,str:8,agi:10,vit:8,dex:12,luk:7,int:6,range:5},blacksmith:{name:"Blacksmith",gender:"female",hp:25,maxHp:25,mp:8,maxMp:8,str:13,agi:8,vit:12,dex:11,luk:12,int:2,range:1},alchemist:{name:"Alchemist",gender:"female",hp:17,maxHp:17,mp:13,maxMp:13,str:6,agi:6,vit:10,dex:5,luk:8,int:11,range:5},vampire:{name:"Vampire",gender:"female",hp:18,maxHp:18,mp:16,maxMp:16,str:10,agi:12,vit:3,dex:4,luk:3,int:12,range:1},necromancer:{name:"Necromancer",gender:"male",hp:20,maxHp:20,mp:20,maxMp:20,str:4,agi:4,vit:7,dex:3,luk:11,int:15,range:1},barbarian:{name:"Barbarian",gender:"male",hp:40,maxHp:40,mp:4,maxMp:4,str:16,agi:4,vit:15,dex:6,luk:3,int:2,range:1},cannibal:{name:"Cannibal",gender:"male",hp:22,maxHp:22,mp:7,maxMp:7,str:6,agi:11,vit:2,dex:13,luk:9,int:7,range:4},shaman:{name:"Shaman",gender:"female",hp:17,maxHp:17,mp:21,maxMp:21,str:4,agi:3,vit:3,dex:3,luk:16,int:16,range:4},oracle:{name:"Oracle",gender:"female",hp:19,maxHp:19,mp:19,maxMp:19,str:5,agi:7,vit:4,dex:10,luk:14,int:10,range:3},amazon:{name:"Amazon",gender:"female",hp:23,maxHp:23,mp:5,maxMp:5,str:11,agi:9,vit:11,dex:7,luk:4,int:3,range:3}},Yp=["hp","maxHp","mp","str","agi","vit","dex","luk","int"],Ah=(()=>{let i={};for(let t of Oe){let e=Ye[t];if(!e)continue;let n=Yp.map(r=>e[r]??0),s=n.reduce((r,a)=>r+a,0)/n.length;i[t]=n.reduce((r,a)=>r+(a-s)**2,0)/n.length}return i})();var fn={knight:{primary:6908265,secondary:9127187,hair:11696641,cape:3355443,belt:9127187},mage:{primary:16776656,secondary:3355443,hair:13353955,cape:4853326},monk:{primary:16777188,secondary:16119285,hair:2889744,belt:657930},ghoul:{primary:32896,secondary:6636321,hair:32896,skin:32896},lancer:{primary:3169502,secondary:16776656,hair:15854290,cape:14423100},hunter:{primary:8421376,secondary:9584654,hair:7898731,cape:16119285},assassin:{primary:986695,secondary:16119285,hair:2621751,belt:8948621},berserker:{primary:657930,secondary:986695,hair:657930,cape:1118481},witch:{primary:16119285,secondary:8388640,hair:16777188,cape:2263842},ninja:{primary:267292,secondary:137541,hair:791074},samurai:{primary:13882323,secondary:3556687,hair:2039842},werewolf:{primary:4408907,secondary:2378091,hair:12632256,belt:466741},paladin:{primary:16445630,secondary:16774638,hair:12887172,cape:4286945,belt:4286945},exorcist:{primary:3881787,secondary:3881787,hair:16775930,cape:8488329},bandit:{primary:9125425,secondary:6045747,hair:14423100,cape:6710937},ranger:{primary:16775930,secondary:10913299,hair:16035328,cape:11402348,belt:10913299},blacksmith:{primary:13874819,secondary:9849600,hair:11696641,apron:9849600},alchemist:{primary:16738740,secondary:11154282,hair:16711807,cape:8900331},vampire:{primary:16704468,secondary:16704468,hair:1250066,cape:1250066,apron:1250066},necromancer:{primary:405028,secondary:405028,hair:7434350,cape:405028,belt:11372065},barbarian:{primary:11497041,secondary:6045747,hair:6045747,belt:11098894,skin:11497041},cannibal:{primary:11497041,secondary:8421504,hair:6045747,cape:16753920,belt:16753920,skin:11497041},shaman:{primary:3224389,secondary:4349324,hair:32896,cape:5152741,horns:16775930},oracle:{primary:16775930,secondary:16775930,hair:6045747,cape:16777215,belt:15712004,horns:15712004},amazon:{primary:11497041,secondary:11497041,hair:0,cape:331790,belt:0,horns:0,skin:11497041,apron:331790}},pn={knight:"https://creator.nightcafe.studio/jobs/OlIWpAye2LeM5gPkAGEI/OlIWpAye2LeM5gPkAGEI--1--xc223.jpg",mage:"https://media.craiyon.com/2025-08-13/bLqz0LbwSIynOcUHty4Maw.webp",monk:"https://cdnb.artstation.com/p/assets/images/images/028/576/499/large/ahruna-art-oct17.jpg?1594859688",ghoul:"https://i.pinimg.com/736x/d3/cc/41/d3cc41778d05dec0371a69e29659f792.jpg",lancer:"https://i.redd.it/zolf64gpoa0c1.jpg",hunter:"https://coolvibe.com/wp-content/uploads/2011/02/hunter.jpg",assassin:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk2-NBPpPOU7duYgN_k_9oFKZ5hJjU28qyoA&s",berserker:"https://entertainment.inquirer.net/files/2016/07/top_bg.jpg",witch:"https://w0.peakpx.com/wallpaper/382/134/HD-wallpaper-evil-witch-witch-female-dress-white-hair-evil-black-woman-girl-darkness-anime-dark-beauty-lady-long-hair.jpg",ninja:"https://i.pinimg.com/474x/02/88/60/0288609778e53701b7e64051d7164922.jpg",samurai:"https://files.idyllic.app/files/static/3120390?width=256&optimizer=image",werewolf:"https://i.pinimg.com/736x/1f/95/27/1f9527c6255465547d664f19dd11967c.jpg",paladin:"https://upload-os-bbs.hoyolab.com/upload/2023/12/01/84522063/a6a130d65b61025d979eda3750b0abd4_2602645990799609868.jpg?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_70",exorcist:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bdc0afb9-e917-4267-b7e6-2155f9c5c14c/detuach-b1b79b16-7fed-4175-b1a2-ca3d1bc6166b.jpg/v1/fill/w_1024,h_1449,q_75,strp/my_priest_by_domyzu_detuach-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi9iZGMwYWZiOS1lOTE3LTQyNjctYjdlNi0yMTU1ZjljNWMxNGMvZGV0dWFjaC1iMWI3OWIxNi03ZmVkLTQxNzUtYjFhMi1jYTNkMWJjNjE2NmIuanBnIiwiaGVpZ2h0IjoiPD0xNDQ5Iiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiL3dtL2JkYzBhZmI5LWU5MTctNDI2Ny1iN2U2LTIxNTVmOWM1YzE0Yy9kb215enUtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.5ueq8PhVPSB7hz65z6Cok8mX7IGeIrsQzCOaVFpt1pU",bandit:"https://i.pinimg.com/736x/6b/15/b0/6b15b06ae23f690e20968bc87c370831.jpg",ranger:"https://i.redd.it/2nfikbmqpwoa1.jpg",blacksmith:"https://images-ng.pixai.art/images/orig/489d970a-890e-4523-8f99-c0ba2d6bfeae",alchemist:"https://pics.craiyon.com/2023-07-11/ddbb35d3d2614541a9ad13181838257d.webp",vampire:"https://files.idyllic.app/files/static/2567599?width=256&optimizer=image",necromancer:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c77f367a-4886-467a-b509-a194cf9a6aca/dbq4hoj-c2811e28-2314-49ac-9c57-b2f7ab1ee170.jpg/v1/fill/w_1024,h_1434,q_75,strp/necromancer_by_johnathanchong_dbq4hoj-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQzNCIsInBhdGgiOiIvZi9jNzdmMzY3YS00ODg2LTQ2N2EtYjUwOS1hMTk0Y2Y5YTZhY2EvZGJxNGhvai1jMjgxMWUyOC0yMzE0LTQ5YWMtOWM1Ny1iMmY3YWIxZWUxNzAuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.vBO5eVep2-eoiZnpDxMvlWBsJ0_zfdGT_IAaPdqEv2k",barbarian:"https://image.lexica.art/full_jpg/dd171d51-f518-4ae9-949b-23f5d7a157be",cannibal:"https://i.pinimg.com/736x/de/57/d1/de57d1e7aa4dd2d8f052d48b06831cbd.jpg",shaman:"https://w0.peakpx.com/wallpaper/350/203/HD-wallpaper-guy-shaman-skull-horns-anime-art-green-thumbnail.jpg",oracle:"https://images.stockcake.com/public/a/3/d/a3d08448-237f-4c23-8660-43b615c9e3c9_large/desert-oracle-enchantress-stockcake.jpg",amazon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTnWAK4nkfgm8v-Ab35e3lkKOPOGTJzprr1w&s"};function Kp(i){return i===1?{dx:0,dy:-1}:{dx:0,dy:1}}function jn(i,t,e,n){let s=Math.sign(e-i),r=Math.sign(n-t);return s===0&&r===0?null:{dx:s,dy:r}}function Rh({id:i,player:t,classKey:e,x:n,y:s,level:r=1}){let a=Ye[e],o=fn[e]||fn.knight;return{id:i,player:t,x:n,y:s,level:r,facing:Kp(t),name:a.name,class:e,hairColor:o.hair,hp:a.hp,maxHp:a.maxHp,mp:a.mp,maxMp:a.maxMp,str:a.str,agi:a.agi,vit:a.vit,dex:a.dex,luk:a.luk,int:a.int,range:a.range}}function Ht(i,t){let e=i[t]!=null?i[t]:0,n=i.tempBuff&&i.tempBuff[t]!=null?i.tempBuff[t]:0,s=i.tempDebuff&&i.tempDebuff[t]!=null?i.tempDebuff[t]:0;return e+n-s}function Zp(i,t){let e=i[t]!=null?i[t]:0,n=i.tempBuff&&i.tempBuff[t]!=null?i.tempBuff[t]:0,s=i.tempDebuff&&i.tempDebuff[t]!=null?i.tempDebuff[t]:0,r=String(e);return n>0&&(r+=` <span class="stat-val-buff">+${n}</span>`),s>0&&(r+=` <span class="stat-val-debuff">-${s}</span>`),r}function Jp(i){return i&&i.hp>0&&i.hp<=i.maxHp*.25}var jp=["str","agi","vit","dex","luk","int"];function Is(i){if(!i)return null;let t={};for(let e of jp)t[e]=Zp(i,e);return{id:i.id,player:i.player,name:i.name,class:i.class,level:i.level,hp:i.hp,maxHp:i.maxHp,mp:i.mp,maxMp:i.maxMp,range:i.range,lowHp:Jp(i),poison:i.tempDebuff&&i.tempDebuff.poison?i.tempDebuff.poison:0,autoHeal:i.tempBuff&&i.tempBuff.heal?i.tempBuff.heal:0,statsHtml:t}}var Qp=.95,tm=1.15,em=1.25;function Ls(i,t){let e=t&&t.facing;if(!i||!e||e.dx===0&&e.dy===0)return 1;let n=i.x-t.x,s=i.y-t.y;if(n===0&&s===0)return 1;let r=Math.hypot(n,s),a=Math.hypot(e.dx,e.dy),o=n/r*(e.dx/a)+s/r*(e.dy/a);return o>=.5?Qp:o<=-.5?em:tm}function Ch(i,t,e){let n=Ht(t,"agi")*.7+Ht(t,"luk")*.3,r=e.next()*Math.max(.001,n)<=Ht(i,"dex"),a=0;if(r){let o=Ht(i,"str")*.7+Ht(i,"dex")*.2+Ht(i,"int")*.1-(Ht(t,"vit")*.3+Ht(t,"luk")*.2);a=Math.max(1,Math.floor(o))}return{isHit:r,damage:a}}function Ph(i,t,e){let n=[Ch(i,t,e)];return i.tempBuff&&i.tempBuff.doubleAttack===!0&&t.hp>0&&n.push(Ch(i,t,e)),n}function nm(i,t,e){if(!t||e<=0)return;let n=i.state.units,s=t.tempBuff;if(!s||s.vodoo==null||s.duration!=null&&s.duration<=0)return;let r=t.id;for(let a=0;a<n.length;a++){let o=n[a];if(!(!o||o.hp<=0||o.id===r)&&s.vodoo===o.id){o.hp=Math.max(0,o.hp-e),i.emit("floatingText",{gx:o.x,gy:o.y,text:String(e),kind:"vodoo"}),i.emit("unitStatsChanged",{unit:o}),o.hp<=0&&i.onDeath&&i.onDeath(o,t);break}}}function Ds(i,t){let{attacker:e,victim:n}=t,s=t.amount;if(t.isHeal)return n.hp=Math.min(n.maxHp,n.hp+s),i.emit("floatingText",{gx:n.x,gy:n.y,text:`+${s}`,kind:"heal"}),i.emit("unitStatsChanged",{unit:n}),!0;let r=n===e,a=!0;if(t.preHit!==void 0)a=t.preHit;else if(!r&&!t.isSpell){let o=Ht(n,"agi")*.7+Ht(n,"luk")*.3;a=i.rng.next()*Math.max(.001,o)<=Ht(e,"dex")}return a?(!r&&!t.ignoreFacing&&(s=Math.max(1,Math.round(s*Ls(e,n)))),n.hp=Math.max(0,n.hp-s),i.emit("floatingText",{gx:n.x,gy:n.y,text:String(s),kind:"damage"}),i.emit("unitStatsChanged",{unit:n}),nm(i,n,s),n.hp<=0&&i.onDeath&&i.onDeath(n,e)):i.emit("floatingText",{gx:n.x,gy:n.y,text:"MISS",kind:"miss"}),a}function Ih(i,t,e,n){let{state:s}=i,r=Eh(s.world,s.units,t,e,n),a=e.x,o=e.y;e.x=r.newGx,e.y=r.newGy,s.updateUnitTileIndex(e,a,o),i.emit("unitKnockback",{unit:e,from:{gx:a,gy:o},to:{gx:r.newGx,gy:r.newGy}}),r.collisionDamage>0?(Ds(i,{attacker:t,victim:e,amount:r.collisionDamage,ignoreFacing:!0}),e.hp>0&&i.emit("powerupCheck",{unit:e})):e.hp>0&&i.emit("powerupCheck",{unit:e})}var Us={knight:[{name:"Brave",description:"Gain +1 STR and +1 VIT for 2 turns.",cost:3,target:"self",range:0,level:2,effectKey:"brave"},{name:"Dominate",description:"Steal 2 STR and 1 VIT from an enemy.",cost:6,target:"enemy",range:1,level:3,effectKey:"dominate"}],mage:[{name:"Arcane Bolt",description:"Deal INT-based damage to one enemy.",cost:6,target:"enemy",range:6,level:1,effectKey:"arcaneBolt",type:"spell"},{name:"Mana Drain",description:"Drain enemy MP based on INT.",cost:3,target:"enemy",range:6,level:2,effectKey:"manaDrain",type:"spell"}],monk:[{name:"Mantra",description:"Gain LUK based on INT for both ally and self for 2 turns.",cost:4,target:"ally",range:1,level:2,effectKey:"mantra"},{name:"Chakra",description:"Heal HP for both ally and self.",cost:8,target:"ally",range:4,level:3,effectKey:"chakra"}],ghoul:[{name:"Weaken",description:"Steal 1 VIT from an enemy.",cost:3,target:"enemy",range:1,level:2,effectKey:"weaken"},{name:"Feast",description:"Deal STR-based damage to enemy and heal self.",cost:4,target:"enemy",range:1,level:3,effectKey:"feast"}],lancer:[{name:"Impale",description:"Reduce target's AGI by 2 for 2 turns.",cost:4,target:"enemy",range:2,level:2,effectKey:"impale"},{name:"Pierce",description:"Deal STR-based damage through the defense.",cost:6,target:"enemy",range:2,level:3,effectKey:"pierce"}],hunter:[{name:"Focus",description:"Gain +3 DEX for 2 turns.",cost:3,target:"self",range:0,level:1,effectKey:"focus"},{name:"Snipe",description:"Deal long-ranged, DEX-based damage to one enemy.",cost:6,target:"enemy",range:12,level:2,effectKey:"snipe"}],assassin:[{name:"Cripple",description:"Steal 1 AGI from an enemy.",cost:4,target:"enemy",range:1,level:2,effectKey:"cripple"},{name:"Execute",description:"Deal AGI-based damage to one enemy.",cost:6,target:"enemy",range:1,level:3,effectKey:"execute"}],berserker:[{name:"Berserk",description:"Deal STR-based damage for -3 HP.",cost:0,hpCost:3,target:"enemy",range:1,level:2,effectKey:"berserk"},{name:"Bloodlust",description:"Gain STR and VIT based on lost HP for 1 turn.",cost:5,target:"self",range:0,level:3,effectKey:"bloodlust"}],witch:[{name:"Hex",description:"Steal 1 INT from an enemy.",cost:5,target:"enemy",range:4,level:1,effectKey:"hex",type:"spell"},{name:"Drain",description:"Deal INT-based damage to HP and MP and heal self.",cost:8,target:"enemy",range:4,level:2,effectKey:"drain",type:"spell"}],ninja:[{name:"Blind",description:"Steal 1 DEX from an enemy.",cost:4,target:"enemy",range:1,level:2,effectKey:"blind"},{name:"Shuriken",description:"Deal DEX-based ranged attack.",cost:6,target:"enemy",range:4,level:3,effectKey:"shuriken"}],samurai:[{name:"Iaido",description:"Gain +1 STR and +1 DEX for 2 turns.",cost:4,target:"self",range:0,level:2,effectKey:"iaido"},{name:"Chokuto",description:"Deal STR+DEX-based damage to one enemy.",cost:7,target:"enemy",range:1,level:3,effectKey:"chokuto"}],werewolf:[{name:"Bite",description:"Deal STR+AGI-based damage to one enemy.",cost:5,target:"enemy",range:1,level:2,effectKey:"bite"},{name:"Howl",description:"Gain +2 STR and +2 AGI for 2 turns.",cost:6,target:"self",range:0,level:3,effectKey:"howl"}],paladin:[{name:"Sacrifice",description:"Heal ally for -3 HP.",cost:1,hpCost:3,target:"ally",range:3,level:2,effectKey:"sacrifice"},{name:"Judgement",description:"Deal damage based on remaining HP.",cost:6,target:"enemy",range:1,level:3,effectKey:"judgement",type:"spell"}],exorcist:[{name:"Sanctuary",description:"Gain +1 ALL stats for both ally and self for 3 turns.",cost:4,target:"ally",range:4,level:1,effectKey:"sanctuary"},{name:"Exorcise",description:"Deal damage based on enemy lost HP.",cost:6,target:"enemy",range:3,level:2,effectKey:"exorcise",type:"spell"}],bandit:[{name:"Raid",description:"Steal 2 LUK from an enemy.",cost:3,target:"enemy",range:1,level:2,effectKey:"raid"},{name:"Ambush",description:"Deal LUK-based damage to one enemy.",cost:4,target:"enemy",range:1,level:3,effectKey:"ambush"}],ranger:[{name:"Wind walk",description:"Gain +3 AGI for 2 turns.",cost:5,target:"self",range:0,level:1,effectKey:"windWalk"},{name:"Power Shot",description:"Deal knockback damage to one enemy.",cost:7,target:"enemy",range:7,level:3,effectKey:"powerShot"}],blacksmith:[{name:"Forge",description:"Gain +2 STR for both ally and self for 2 turns.",cost:4,target:"ally",range:1,level:2,effectKey:"forge"},{name:"Fortify",description:"Gain +2 STR and +2 VIT for both ally and self for 2 turns.",cost:5,target:"ally",range:2,level:3,effectKey:"fortify"}],alchemist:[{name:"Poison",description:"Poison enemy for 2 turns.",cost:5,target:"enemy",range:5,level:1,effectKey:"poison"},{name:"Concoct",description:"Deal INT-based damage and add to 50% to LUK",cost:8,target:"enemy",range:7,level:2,effectKey:"concoct",type:"spell"}],vampire:[{name:"Gaze",description:"Steal AGI and VIT by 1 for 3 turns",cost:5,target:"enemy",range:4,level:1,effectKey:"gaze",type:"spell"},{name:"Blood Suck",description:"Absorb enemy HP based on your MP",cost:7,target:"enemy",range:1,level:3,effectKey:"bloodSuck"}],necromancer:[{name:"Debilitate",description:"Steal target's 3 HP and 3 VIT for 2 turns",cost:5,target:"enemy",range:5,level:1,effectKey:"debilitate",type:"spell"},{name:"Reanimate",description:"Resurrect dead unit to your control",cost:12,target:"self",range:0,level:2,effectKey:"reanimate"}],barbarian:[{name:"War Cry",description:"Gain VIT and LUK based on lost HP",cost:2,target:"self",range:0,level:1,effectKey:"warCry"},{name:"Bash",description:"Reduce target's AGI to 0 for 2 turns",cost:4,target:"enemy",range:1,level:2,effectKey:"bash"}],cannibal:[{name:"Gnaw",description:"Deal STR based damage to heal self",cost:3,target:"enemy",range:1,level:2,effectKey:"gnaw"},{name:"Infect",description:"Poison enemy for 3 turns",cost:4,target:"enemy",range:6,level:3,effectKey:"infect"}],shaman:[{name:"Vodoo",description:"Mirror damage for 2 turns",cost:4,target:"enemy",range:5,level:1,effectKey:"vodoo",type:"spell"},{name:"Malediction",description:"Deal INT+LUK-based damage to ALL stats for 2 turns",cost:6,target:"enemy",range:6,level:2,effectKey:"malediction",type:"spell"}],oracle:[{name:"Foresight",description:"Gain INT and DEX based on INT for 2 turns",cost:4,target:"ally",range:6,level:1,effectKey:"foresight"},{name:"Overheal",description:"Heal ally for 2 turns",cost:7,target:"ally",range:6,level:2,effectKey:"overheal"}],amazon:[{name:"Skewer",description:"Deal DEX-based damage to AGI for 2 turns ",cost:4,target:"enemy",range:3,level:2,effectKey:"skewer"},{name:"Rapid",description:"Double attack for 1 turn",cost:6,target:"self",range:0,level:3,effectKey:"rapid"}]},im={brave:"Brave",dominate:"Dominate",arcaneBolt:"Arcane Bolt",manaDrain:"Mana Drain",mantra:"Mantra",chakra:"Chakra",weaken:"Weaken",feast:"Feast",impale:"Impale",pierce:"Pierce",focus:"Focus",snipe:"Snipe",execute:"Execute",cripple:"Cripple",berserk:"Berserk",bloodlust:"Bloodlust",hex:"Hex",drain:"Drain",shuriken:"Shuriken",blind:"Blind",iaido:"Iaido",chokuto:"Chokuto",bite:"Bite",howl:"Howl"},Lh=new Map;function Dh(i){let t=Lh.get(i);return t!==void 0||(t=im[i]??i.replace(/([A-Z])/g," $1").replace(/^./,e=>e.toUpperCase()).trim(),Lh.set(i,t)),t}var Uh={brave(i){let{u:t}=i,e=1;t.tempBuff={str:e,vit:e,duration:3},i.statText(t.x,t.y,`+${e} STR, +${e} VIT`,!0)},dominate(i){let{u:t,t:e}=i;if(!e)return;let n=2,s=1;e.str=Math.max(1,(e.str||0)-n),t.str=(t.str||0)+n,e.vit=Math.max(1,(e.vit||0)-s),t.vit=(t.vit||0)+s,i.statText(e.x,e.y,`-${n} STR and -${s} VIT`,!1),i.statText(t.x,t.y,`+${n} STR and +${s} VIT`,!0)},mantra(i){let{u:t,t:e,getEff:n}=i;if(!e)return;let s=Math.max(1,Math.ceil(n(t,"int")*.3));t.tempBuff={int:s,duration:3},i.statText(t.x,t.y,`+${s} LUK`,!0),e.tempBuff={luk:s,duration:3},i.statText(e.x,e.y,`+${s} LUK`,!0)},weaken(i){let{u:t,t:e}=i;if(!e)return;let n=1;e.vit=Math.max(1,(e.vit||0)-n),t.vit=(t.vit||0)+n,i.statText(e.x,e.y,`-${n} VIT`,!1),i.statText(t.x,t.y,`+${n} VIT`,!0)},impale(i){let{t}=i;if(!t)return;let e=2;t.tempDebuff={agi:e,duration:3},i.statText(t.x,t.y,`-${e} AGI`,!1)},focus(i){let{u:t}=i,e=3;t.tempBuff={dex:e,duration:3},i.statText(t.x,t.y,`+${e} DEX`,!0)},cripple(i){let{u:t,t:e}=i;if(!e)return;let n=1;e.agi=Math.max(1,(e.agi||0)-n),t.agi=(t.agi||0)+n,i.statText(e.x,e.y,`-${n} AGI`,!1),i.statText(t.x,t.y,`+${n} AGI`,!0)},bloodlust(i){let{u:t}=i,e=Math.max(1,Math.floor((t.maxHp-t.hp)*.2));t.tempBuff={str:e,vit:e,duration:2},i.statText(t.x,t.y,`+${e} STR, +${e} VIT`,!0)},hex(i){let{u:t,t:e}=i;if(!e)return;let n=1;e.int=Math.max(1,(e.int||0)-n),t.int=(t.int||0)+n,i.statText(e.x,e.y,`-${n} INT`,!1),i.statText(t.x,t.y,`+${n} INT`,!0)},blind(i){let{u:t,t:e}=i;if(!e)return;let n=1;e.dex=Math.max(1,(e.dex||0)-n),t.dex=(t.dex||0)+n,i.statText(e.x,e.y,`-${n} DEX`,!1),i.statText(t.x,t.y,`+${n} DEX`,!0)},iaido(i){let{u:t}=i,e=1;t.tempBuff={str:e,dex:e,duration:3},i.statText(t.x,t.y,`+${e} STR, +${e} DEX`,!0)},howl(i){let{u:t}=i,e=2;t.tempBuff={str:e,agi:e,duration:3},i.statText(t.x,t.y,`+${e} STR, +${e} AGI`,!0)},sanctuary(i){let{u:t,t:e}=i,n=1;t.tempBuff={str:n,vit:n,dex:n,agi:n,int:n,luk:n,duration:4},e.tempBuff={str:n,vit:n,dex:n,agi:n,int:n,luk:n,duration:4},t.hp<t.maxHp&&(t.hp+=n),e.hp<e.maxHp&&(e.hp+=n),i.statText(t.x,t.y,`+${n} ALL STATS`,!0),i.statText(e.x,e.y,`+${n} ALL STATS`,!0)},raid(i){let{u:t,t:e}=i,n=2;e.luk=Math.max(1,(e.luk||0)-n),t.luk=(t.luk||0)+n,i.statText(e.x,e.y,`-${n} LUK`,!1),i.statText(t.x,t.y,`+${n} LUK`,!0)},windWalk(i){let{u:t}=i,e=3;t.tempBuff={agi:e,duration:3},i.statText(t.x,t.y,`+${e} AGI`,!0)},forge(i){let{u:t,t:e}=i,n=2;t.tempBuff={str:n,duration:3},e.tempBuff={str:n,duration:3},i.statText(t.x,t.y,`+${n} STR`,!0),i.statText(e.x,e.y,`+${n} STR`,!0)},fortify(i){let{u:t,t:e}=i,n=3;t.tempBuff={str:n,vit:n,duration:3},e.tempBuff={str:n,vit:n,duration:3},i.statText(t.x,t.y,`+${n} STR, +${n} VIT`,!0),i.statText(e.x,e.y,`+${n} STR, +${n} VIT`,!0)},gaze(i){let{u:t,t:e}=i;if(!e)return;let n=1;e.tempDebuff={agi:n,vit:n,duration:4},t.tempBuff={agi:n,vit:n,duration:4},i.statText(e.x,e.y,`-${n} AGI, -${n} VIT`,!1),i.statText(t.x,t.y,`+${n} AGI, +${n} VIT`,!0)},debilitate(i){let{u:t,t:e}=i;if(!e)return;let n=3;e.tempDebuff={hp:n,maxHp:n,vit:n,duration:3},t.tempBuff={hp:n,maxHp:n,vit:n,duration:3},i.statText(e.x,e.y,`-${n} HP, -${n} VIT`,!1),i.statText(t.x,t.y,`+${n} HP, +${n} VIT`,!0)},warCry(i){let{u:t}=i,e=Math.max(2,Math.ceil((t.maxHp-t.hp)*.1));t.tempBuff={vit:e,luk:e,duration:3},i.statText(t.x,t.y,`+${e} VIT, +${e} LUK`,!0)},bash(i){let{t}=i;if(!t)return;let e=t.agi;t.tempDebuff={agi:e,duration:3},i.statText(t.x,t.y,`-${e} AGI`,!1)},foresight(i){let{u:t,t:e,getEff:n}=i,s=Math.max(2,Math.floor(n(t,"int")*.2));t.tempBuff={int:s,dex:s,mp:s,maxMp:s,duration:3},i.statText(t.x,t.y,`+${s} INT, +${s} DEX, +${s} MP`,!0),e&&(e.tempBuff={int:s,dex:s,mp:s,maxMp:s,duration:3},i.statText(e.x,e.y,`+${s} INT, +${s} DEX, +${s} MP`,!0))},overheal(i){let{u:t,t:e,getEff:n}=i,s=Math.max(1,Math.floor(n(t,"int")*.3+n(t,"luk")*.2));t.tempBuff={heal:s,duration:3},i.statText(t.x,t.y,"Auto heal for 2 turns",!0),e&&(e.tempDebuff={heal:s,duration:3},i.statText(e.x,e.y,"Auto heal for 2 turns",!0))},rapid(i){let{u:t}=i;t.tempBuff={doubleAttack:!0,duration:2},i.statText(t.x,t.y,"Double attack for 1 turn",!0)}};var Nh={arcaneBolt(i){let{u:t,t:e,getEff:n}=i;if(!e)return;let s=Math.max(1,Math.ceil(n(t,"int")*.9-(n(e,"int")*.4+n(e,"luk")*.3)));i.damage(e,s,{spell:!0})},pierce(i){let{u:t,t:e,getEff:n}=i;if(!e)return;let s=Math.max(1,Math.floor(n(t,"str")*.6));i.damage(e,s)},snipe(i){let{u:t,t:e,getEff:n}=i;if(!e)return;let s=Math.max(1,Math.floor(n(t,"dex")*.8-(n(e,"vit")*.3+n(e,"luk")*.2)));i.damage(e,s)},execute(i){let{u:t,t:e,getEff:n}=i;if(!e)return;let s=Math.max(1,Math.floor(n(t,"agi")*.8-(n(e,"vit")*.3+n(e,"luk")*.2)));i.damage(e,s)},berserk(i){let{u:t,t:e,getEff:n}=i;e&&(i.damage(e,Math.max(1,Math.floor(n(t,"str")*.8-n(e,"vit")*.3+n(e,"luk")*.2))),i.damage(t,3))},drain(i){let{u:t,t:e,getEff:n}=i;if(!e)return;let s=Math.max(1,Math.ceil(n(t,"int")*.6-(n(e,"int")*.4+n(e,"luk")*.3))),r=Math.max(1,Math.ceil(n(t,"int")*.3-(n(e,"int")*.4+n(e,"luk")*.3)));i.damage(e,s,{spell:!0}),i.damage(t,s+r,{heal:!0}),e.mp=Math.max(1,(e.mp||0)-r),i.statText(t.x,t.y,`+${s} HP and +${r} MP`,!0),i.statText(e.x,e.y,`-${s} HP and -${r} MP`,!1)},shuriken(i){let{u:t,t:e,getEff:n}=i;if(!e)return;let s=Math.max(1,Math.ceil(n(t,"dex")*.7-(n(e,"vit")*.3+n(e,"luk")*.2)));i.damage(e,s)},chokuto(i){let{u:t,t:e,getEff:n}=i;if(!e)return;let s=Math.max(1,Math.floor(n(t,"str")*.4+n(t,"dex")*.4-(n(e,"vit")*.3+n(e,"luk")*.2)));i.damage(e,s)},bite(i){let{u:t,t:e,getEff:n}=i;if(!e)return;let s=Math.max(1,Math.floor(n(t,"str")*.7+n(t,"agi")*.1-(n(e,"vit")*.3+n(e,"luk")*.2)));i.damage(e,s)},judgement(i){let{u:t,t:e,getEff:n}=i;if(!e)return;let s=Math.max(1,Math.floor(t.maxHp-t.hp-(n(e,"int")*.2+n(e,"luk")*.1)));i.damage(e,s,{spell:!0})},exorcise(i){let{t,getEff:e}=i;if(!t)return;let n=Math.max(1,Math.floor((t.maxHp-t.hp)*1.3-(e(t,"int")*.2+e(t,"luk")*.1)));i.damage(t,n,{spell:!0})},ambush(i){let{u:t,t:e,getEff:n}=i;if(!e)return;let s=Math.max(1,Math.floor(n(t,"luk")*.8-(n(e,"vit")*.3+n(e,"luk")*.2)));i.damage(e,s)},feast(i){let{u:t,t:e,getEff:n}=i;if(!e)return;let s=Math.max(1,Math.floor(n(t,"str")*.8-(n(e,"vit")*.3+n(e,"luk")*.2)));i.damage(e,s)&&i.damage(t,s,{heal:!0})},concoct(i){let{u:t,t:e,getEff:n}=i;if(!e)return;let s=Math.max(1,Math.floor(n(t,"int")*.8-(n(e,"int")*.4+n(e,"luk")*.2)));i.damage(e,s,{spell:!0});let r=Math.max(1,Math.floor(s*.5));t.luk=Math.max(1,(t.luk||0)+r),i.statText(t.x,t.y,`+${r} LUK`,!0)},bloodSuck(i){let{u:t,t:e,getEff:n}=i;if(!e)return;let s=Math.max(1,Math.floor(t.mp*.6+n(t,"int")*.6-(e.hp*.3+n(e,"luk")*.1)));i.damage(e,s,{spell:!0})&&i.damage(t,s,{heal:!0})},gnaw(i){let{u:t,t:e,getEff:n}=i;if(!e)return;let s=Math.max(1,Math.floor(n(t,"str")-(n(e,"vit")*.3+n(e,"luk")*.2)));i.damage(e,s,{spell:!0}),i.damage(t,s,{heal:!0})},malediction(i){let{u:t,t:e,getEff:n}=i;if(!e)return;let s=Math.max(1,Math.ceil(n(t,"int")*.4+n(t,"luk")*.3-(n(e,"int")*.3+n(e,"luk")*.2))),r=Math.max(1,Math.ceil(s*.3));e.tempDebuff={luk:r,int:r,str:r,vit:r,agi:r,dex:r,duration:3},i.damage(e,s,{spell:!0}),i.statText(e.x,e.y,`-${r} ALL STATS`,!1)},skewer(i){let{u:t,t:e,getEff:n}=i;if(!e)return;let s=Math.max(1,Math.ceil(n(t,"dex")*.8-(n(e,"vit")*.3+n(e,"luk")*.2)));e.tempDebuff={agi:s,duration:3},i.statText(e.x,e.y,`-${s} AGI`,!1)}};var Oh={chakra(i){let{u:t,t:e,getEff:n}=i;i.damage(t,Math.max(1,Math.floor(n(t,"int")*.3+n(t,"luk")*.15)),{heal:!0}),e&&i.damage(e,Math.max(1,Math.floor(n(t,"int")*.3+n(e,"luk")*.15)),{heal:!0})},sacrifice(i){let{u:t,t:e,getEff:n}=i,s=Math.max(1,Math.floor(n(t,"int")*.5));i.damage(e,s,{heal:!0}),i.damage(t,3)},manaDrain(i){let{u:t,t:e,getEff:n}=i;if(!e)return;let s=Math.max(1,Math.floor(n(e,"int")*.3));e.mp=Math.max(1,(e.mp||0)-s),t.mp=(t.mp||0)+s,i.statText(e.x,e.y,`-${s} MP`,!1),i.statText(t.x,t.y,`+${s} MP`,!0)}};var Fh={poison(i){let{t,getEff:e}=i;if(!t)return;let n=Math.max(1,Math.floor(e(t,"luk")*.4-e(t,"luk")*.2));t.tempDebuff={poison:n,duration:3},i.statText(t.x,t.y,`${n} poison for 2 turns`,!1)},infect(i){let{u:t,t:e,getEff:n}=i;if(!e)return;let s=Math.max(1,Math.ceil(n(t,"luk")*.4-n(e,"luk")*.1));e.tempDebuff={poison:s,duration:4},i.statText(e.x,e.y,`${s} poison for 3 turns`,!1)},vodoo(i){let{u:t,t:e}=i;e&&(t.tempBuff={vodoo:e.id,duration:3},i.statText(e.x,e.y,"Vodoo for 2 turns",!1))},powerShot(i){let{u:t,t:e,getEff:n}=i;if(!e)return;let s=Math.max(1,Math.floor(n(t,"dex")*.6-(n(e,"vit")*.3+n(e,"luk")*.2)));if(i.damage(e,s)&&i.knockback){let a=Math.max(1,Math.floor(s*.2));i.knockback(t,e,a)}},reanimate(i){let{u:t,state:e}=i;if(!i.reanimate)return;let n=e.units,s=null,r=-1,a=null,o=-1,l=!1;for(let h=0;h<n.length;h++){let u=n[h];if(u.hp>0||u.isReanimated)continue;let d=u.deathOrder??0;d>=r&&(r=d,s=u),u.player===t.player&&(l=!0,d>=o&&(o=d,a=u))}let c=l?a:s;c&&i.reanimate(t,c)}};var sm={...Uh,...Nh,...Oh,...Fh};function Bh(i){return sm[i]||null}function mn(i,t){return t?(t.summonedSkills&&t.summonedSkills.length>0?t.summonedSkills:t.class&&Us[t.class]?Us[t.class]:[]).map(n=>({...n,disabled:n.disabled===!0||t.level<(n.level||1)||n.hpCost&&t.hp<n.hpCost||n.cost!=null&&t.mp<n.cost||n.effectKey==="reanimate"&&i.deadCorpseCount<=0})):[]}function zi(i,t,e){let n=[],s=e.range||0,{world:r}=i,a=t.x,o=t.y;if(e.target==="self")return n.push({gx:a,gy:o,targetUnit:null}),n;for(let l of i.units)if(!(l.hp<=0||Math.abs(a-l.x)+Math.abs(o-l.y)>s)){if(e.target==="enemy"){if(l.player===t.player)continue}else if(e.target==="ally"&&l.player!==t.player)continue;s>=2&&!tn(r,a,o,l.x,l.y)||n.push({gx:l.x,gy:l.y,targetUnit:l})}return n}function kh(i,t,e){let{world:n}=i,s=e.range||0,r=[];return e.target==="self"?(r.push({gx:t.x,gy:t.y}),r):(kr(n,t.x,t.y,s).forEach((o,l)=>{let c=l%n.w,h=l/n.w|0;s>=2&&!tn(n,t.x,t.y,c,h)||r.push({gx:c,gy:h})}),r)}function Hh(i,t,e,n,s={}){let r=n.effectKey,a=Bh(r),o=Dh(r);i.emit("floatingText",{gx:t.x,gy:t.y,text:o,kind:"skill-name"});let l={u:t,t:e,state:i.state,rng:i.rng,getEff:Ht,damage:(c,h,u={})=>Ds(i,{attacker:t,victim:c,amount:h,isHeal:u.heal,isSpell:u.spell,preHit:u.preHit}),statText:(c,h,u,d)=>i.emit("floatingText",{gx:c,gy:h,text:u,kind:d?"buff":"debuff"}),knockback:(c,h,u)=>Ih(i,c,h,u),reanimate:s.reanimate};a&&a(l),i.emit("unitStatsChanged",{unit:t}),e&&i.emit("unitStatsChanged",{unit:e}),i.emit("skillResolved",{unit:t,target:e,skill:n})}function ko({w:i,h:t,centerPlazaRadius:e,seed:n}){let s=Array.from({length:t},()=>Array(i).fill(!1)),r=Array.from({length:t},()=>Array(i).fill(0)),a=Array.from({length:t},()=>Array(i).fill(wt.GRASS)),o=n!=null?No(n):()=>Math.random(),l=Math.floor(i/2),c=Math.floor(t/2),h=l,u=0,d=l,p=t-1,_=2,g=3;function m(C,L,K,Z){for(let J=L;J<=K;J++)if(!(J<0||J>=t))for(let G=-_;G<=_;G++){let Y=Z+G;Y<0||Y>=i||(s[J][Y]=!0,a[J][Y]=C,r[J][Y]=1)}}m(wt.BASE_TOP,u,u+g-1,h),m(wt.BASE_BOTTOM,p-g+1,p,d),m(wt.CENTER,c-1,c+1,l);let f=new Set,y=(C,L)=>Math.abs(C-l)<=2&&Math.abs(L-c)<=1,x=(C,L)=>{C<0||C>=i||L<0||L>=t||y(C,L)||f.add(L*i+C)},b=Math.floor(i/2),R=Math.floor(t/2),M=Math.min(i,t)*e,S=Math.max(60,(t+i)*2);for(let C=0;C<2;C++){let L=C===0?b-M:b+M,K=C===0?Math.PI/2:-Math.PI/2,Z=C===0?Math.PI*3/2:Math.PI/2;for(let J=0;J<=S;J++){let G=J/S,Y=K+G*(Z-K),st=L+M*Math.cos(Y),ht=R+M*Math.sin(Y),lt=Math.round(st),mt=Math.round(ht);x(lt,mt),x(lt+1,mt),x(lt-1,mt),x(lt,mt+1),x(lt,mt-1)}}let D=[[0,1],[0,-1],[1,0],[-1,0]];for(let C=0;C<1;C++){let L=[];f.forEach(K=>{let Z=K%i,J=K/i|0;for(let[G,Y]of D){let st=Z+G,ht=J+Y;if(st<0||st>=i||ht<0||ht>=t)continue;let lt=ht*i+st;f.has(lt)||L.push(lt)}}),L.forEach(K=>f.add(K))}f.forEach(C=>{let L=C%i,K=C/i|0;a[K][L]===wt.BASE_TOP||a[K][L]===wt.BASE_BOTTOM||a[K][L]===wt.CENTER||(s[K][L]=!0,a[K][L]=wt.PATH,r[K][L]=1)});let v=Math.round(b-M*1.6),T=Math.round(b+M*1.6),O=Math.round(b-M),X=Math.round(b+M),j=1;for(let C=c-j;C<=c+j;C++)if(!(C<0||C>=t))for(let L=v;L<=T;L++)L<0||L>=i||(s[C][L]=!0,a[C][L]!==wt.CENTER&&a[C][L]!==wt.BASE_TOP&&a[C][L]!==wt.BASE_BOTTOM&&(a[C][L]=wt.PATH),r[C][L]=Math.max(r[C][L],1));function I(C,L,K,Z){let J=Math.max(1,Math.min(C,L)),G=Math.min(t-2,Math.max(C,L)),Y=Math.max(1,Math.min(K,Z)),st=Math.min(i-2,Math.max(K,Z));for(let ht=J;ht<=G;ht++)for(let lt=Y;lt<=st;lt++)a[ht][lt]===wt.BASE_TOP||a[ht][lt]===wt.BASE_BOTTOM||a[ht][lt]===wt.CENTER||(s[ht][lt]=!0,a[ht][lt]=wt.PATH,r[ht][lt]=1)}let B=3,$=3;I(u,u+B-1,O,h-1),I(u,u+B-1,h+1,X),I(p-$+1,p,O,d-1),I(p-$+1,p,d+1,X),m(wt.BASE_TOP,u,u+g-1,h),m(wt.BASE_BOTTOM,p-g+1,p,d),m(wt.CENTER,c-1,c+1,l);for(let C=0;C<t;C++)for(let L=0;L<i;L++){if(s[C][L]||a[C][L]===wt.BASE_TOP||a[C][L]===wt.BASE_BOTTOM||a[C][L]===wt.CENTER)continue;let K=Math.abs(L-h)<=4&&Math.abs(C-u)<=3,Z=Math.abs(L-d)<=4&&Math.abs(C-p)<=3,J=K||Z,G=o();G<.55&&!J?(a[C][L]=wt.TREE,r[C][L]=1+Math.floor(o()*2)):G<.75||J&&G<.5?(a[C][L]=wt.WATER,r[C][L]=0):(a[C][L]=wt.ROCK,r[C][L]=1+Math.floor(o()*2))}let k=[];for(let C=0;C<t;C++)for(let L=0;L<i;L++)a[C][L]===wt.CENTER&&k.push({gx:L,gy:C});return{w:i,h:t,path:s,height:r,type:a,topBaseX:h,topBaseY:u,botBaseX:d,botBaseY:p,centerTiles:k}}function zh(i,t,e){let n=t===1?wt.BASE_BOTTOM:wt.BASE_TOP,s=[];for(let r=0;r<i.h;r++)for(let a=0;a<i.w;a++)i.type[r][a]===n&&(e&&e.has(r*i.w+a)||s.push({gx:a,gy:r}));return s}function Ns(i){if(i.centerTiles&&i.centerTiles.length>0)return i.centerTiles;let t=[];for(let e=0;e<i.h;e++)for(let n=0;n<i.w;n++)i.type[e][n]===wt.CENTER&&t.push({gx:n,gy:e});return t}function Gh(i,t){let e=t===1?wt.BASE_TOP:wt.BASE_BOTTOM,n=[];for(let s=0;s<i.h;s++)for(let r=0;r<i.w;r++)i.type[s][r]===e&&n.push({gx:r,gy:s});return n}function Vh(i,t){let e=Ns(i);if(e.length===0)return t;let n=s=>Math.min(...e.map(r=>Math.abs(s.gx-r.gx)+Math.abs(s.gy-r.gy)));return[...t].sort((s,r)=>n(s)-n(r))}var Un=Oe.reduce((i,t)=>(i[t]={battles:0,kills:0,deaths:0,wins:0,losses:0},i),{});function rm(i,t){if(!i||i.summonedBy==null||!Array.isArray(t))return i;let e=t.find(n=>n.id===i.summonedBy);return e??i}function Wh(i,t,e){if(!Ps)return;let s=rm(i,e)?.class;if(Oe.includes(s)&&Un[s]&&Un[s].kills++,t?.summonedBy!=null)return;let r=t?.class;Oe.includes(r)&&Un[r]&&Un[r].deaths++}function $h(i,t){if(!Ps)return null;for(let n of i)!n||!Un[n.class]||(Un[n.class].battles++,t!=null&&(n.player===t?Un[n.class].wins++:Un[n.class].losses++));let e=Oe.map(n=>{let s=Un[n],r=s.wins+s.losses||1;return{class:n,battles:s.battles,kills:s.kills,deaths:s.deaths,wins:s.wins,losses:s.losses,winRate:s.wins+s.losses>0?(s.wins/r*100).toFixed(1)+"%":"-",lossRate:s.wins+s.losses>0?(s.losses/r*100).toFixed(1)+"%":"-"}});return console.table(e),e}function Os(i){return i.units.filter(t=>t.hp>0).sort((t,e)=>{let n=Ht(t,"agi"),s=Ht(e,"agi");return s!==n?s-n:Ht(e,"dex")-Ht(t,"dex")}).map(t=>t.id)}function am(i,t,e){let{world:n}=i,s=new Set(i.units.filter(u=>u.hp>0).map(u=>u.y*n.w+u.x)),r=(u,d)=>u>=0&&u<n.w&&d>=0&&d<n.h,a=(u,d)=>r(u,d)&&An(n,u,d)&&!s.has(d*n.w+u),o=e??(t.player===1?Math.PI:0),l=t.x-Math.round(Math.cos(o)),c=t.y+Math.round(Math.sin(o));if(a(l,c))return{gx:l,gy:c};let h=[[0,1],[0,-1],[1,0],[-1,0]];for(let[u,d]of h){let p=t.x+u,_=t.y+d;if(a(p,_))return{gx:p,gy:_}}return null}function om(i,t,e,n,s={}){let{state:r}=i,a=s.position&&s.position.gx!=null&&s.position.gy!=null?{gx:s.position.gx,gy:s.position.gy}:am(r,t,s.facingAngle);if(!a)return null;let o=e.class&&Oe.includes(e.class)?e.class:"knight",l=e.hairColor!=null?e.hairColor:(fn[o]||fn.knight).hair,c=s.ownerPlayer!=null?s.ownerPlayer:t.player,h={id:r.ids.next(),player:c,x:a.gx,y:a.gy,level:e.level!=null?e.level:1,name:e.name!=null?e.name:"Summoned",class:o,hairColor:l,hp:e.hp!=null?e.hp:10,maxHp:e.maxHp!=null?e.maxHp:10,mp:e.mp!=null?e.mp:5,maxMp:e.maxMp!=null?e.maxMp:5,str:e.str!=null?e.str:5,agi:e.agi!=null?e.agi:5,vit:e.vit!=null?e.vit:5,dex:e.dex!=null?e.dex:5,luk:e.luk!=null?e.luk:5,int:e.int!=null?e.int:5,range:e.range!=null?e.range:1};s.omitSummonedBy||(h.summonedBy=t.id),Array.isArray(n)&&n.length>0&&(h.summonedSkills=n),r.addUnit(h);let u=r.phase==="playing"&&r.initiativeOrder.length>0&&r.currentTurnIndex>=0&&r.currentTurnIndex<r.initiativeOrder.length?r.initiativeOrder[r.currentTurnIndex]:null;if(r.initiativeOrder=Os(r),u!=null){let d=r.initiativeOrder.indexOf(u);d>=0&&(r.currentTurnIndex=d)}return i.emit("unitSummoned",{unit:h,grayscale:!!s.useGrayscaleAppearance}),i.emit("initiativeChanged",{}),h}function Xh(i,t,e){let{state:n}=i;if(n.units.indexOf(e)===-1)return null;n.removeUnit(e),n.deadCorpseCount=Math.max(0,n.deadCorpseCount-1),i.emit("unitRemoved",{unit:e});let r=e.class&&Oe.includes(e.class)?e.class:"knight",a=e.hairColor!=null?e.hairColor:(fn[r]||fn.knight).hair,o=m=>Math.max(1,Math.floor((m||0)*6/7)),l={name:"Reanimated "+e.name,class:r,hairColor:a,level:e.level,hp:o(e.maxHp),maxHp:o(e.maxHp),mp:o(e.maxMp),maxMp:o(e.maxMp),str:o(e.str),agi:o(e.agi),vit:o(e.vit),dex:o(e.dex),luk:o(e.luk),int:o(e.int),range:e.range},c=e.summonedSkills&&e.summonedSkills.length>0?e.summonedSkills.slice():(Us[r]||[]).slice(),h=new Set(n.units.filter(m=>m.hp>0).map(m=>m.y*n.world.w+m.x)),u=e.x,d=e.y,p=An(n.world,u,d)&&!h.has(d*n.world.w+u),_={useGrayscaleAppearance:!0,ownerPlayer:t.player,omitSummonedBy:!0};p&&(_.position={gx:u,gy:d});let g=om(i,t,l,c,_);return g&&(g.isReanimated=!0),g}function Fs(i,t,e,n={}){let{state:s}=i;s.removeUnitFromTileIndex(t),t.isReanimated||s.deadCorpseCount++,t.deathOrder=++s.deathOrderSeq,Wh(e,t,s.units),i.emit("floatingText",{gx:t.x,gy:t.y,text:"DEAD",kind:"damage"}),i.emit("unitDied",{unit:t,killer:e}),s.units.filter(o=>o.summonedBy===t.id&&o.hp>0).map(o=>o.id).forEach(o=>{let l=s.getUnitById(o);l&&(l.hp=0,Fs(i,l,null,{skipSync:!0}))});let a=s.phase==="playing"&&s.initiativeOrder.length>0&&t.id===s.initiativeOrder[s.currentTurnIndex];return n.skipCheck||i.emit("checkGameOver",{}),a}var lm=["poison"];function qh(i,t){if(t.level>=3)return;let e=t.maxHp>0?t.hp/t.maxHp:1;t.level+=1;let n=s=>Math.max(1,Math.ceil(s*1.1));t.maxHp=n(t.maxHp),t.maxMp=n(t.maxMp),t.hp=Math.max(1,Math.min(t.maxHp,Math.ceil(e*t.maxHp))),t.mp=Math.max(1,Math.min(t.maxMp,Math.ceil(e*t.maxMp))),t.str=n(t.str),t.agi=n(t.agi),t.vit=n(t.vit),t.dex=n(t.dex),t.luk=n(t.luk),t.int=n(t.int),t.range>3&&(t.range=n(t.range)),i.emit("levelUp",{unit:t,level:t.level}),i.emit("unitStatsChanged",{unit:t})}function Yh(i){let{state:t}=i,e=t.initiativeOrder.length;if(e===0)return;let n=t.getActiveUnit();if(n&&n.tempDebuff&&(n.tempDebuff.duration--,n.tempDebuff.duration<=0&&(n.tempDebuff=void 0)),n&&n.tempBuff&&(n.tempBuff.duration--,n.tempBuff.duration<=0&&(n.tempBuff=void 0)),n&&n.hp>0){let h=Math.ceil(Ht(n,"int")*.15);n.mp=Math.min(n.maxMp,n.mp+h),i.emit("unitStatsChanged",{unit:n})}if(n&&n.hp>0){let h=n.x,u=n.y;t.world.type[u][h]===wt.CENTER&&n.level===1&&qh(i,n);let d=n.player===1?wt.BASE_TOP:wt.BASE_BOTTOM;t.world.type[u][h]===d&&n.level===2&&qh(i,n)}if(t.turnCount++,t.turnCount>=t.settings.maxTurns){cm(i);return}let s=t.currentTurnIndex,r=(s+1)%e,a=0;for(;a<e;){let h=t.getUnitById(t.initiativeOrder[r]);if(h&&h.hp>0)break;r=(r+1)%e,a++}let o=e>0&&r<=s;t.currentTurnIndex=r;let l=t.getActiveUnit();for(let h=0;h<e;h++){let u=t.getActiveUnit();if(!u||u.hp<=0)break;let d=u.tempDebuff||{},p=lm.find(g=>!isNaN(d[g])),_=d[p]||0;if(_<=0)break;if(u.hp=Math.max(0,u.hp-_),i.emit("floatingText",{gx:u.x,gy:u.y,text:String(_),kind:p}),i.emit("unitStatsChanged",{unit:u}),u.hp<=0){Fs(i,u,null);let g=(t.currentTurnIndex+1)%e,m=0;for(;m<e;){let f=t.getUnitById(t.initiativeOrder[g]);if(f&&f.hp>0)break;g=(g+1)%e,m++}t.currentTurnIndex=g;continue}break}let c=t.getActiveUnit();if(c&&c.hp>0){let h=c.tempBuff,u=h&&h.heal!=null&&!isNaN(h.heal)?Number(h.heal):0;if(u>0){let d=c.hp;c.hp=Math.min(c.maxHp,c.hp+u);let p=c.hp-d;p>0&&(i.emit("floatingText",{gx:c.x,gy:c.y,text:`+${p}`,kind:"heal"}),i.emit("unitStatsChanged",{unit:c}))}}t.currentPlayer=c&&c.hp>0?c.player:1,t.hasMoved=!1,t.hasAttacked=!1,o&&(t.initiativeOrder=Os(t),t.currentTurnIndex=0),i.emit("turnChanged",{unit:t.getActiveUnit(),currentPlayer:t.currentPlayer,turnCount:t.turnCount})}function Kh(i){let{state:t}=i;if(t.phase!=="playing")return;let e=t.units.some(s=>s.player===1&&s.hp>0&&!s.summonedBy),n=t.units.some(s=>s.player===2&&s.hp>0&&!s.summonedBy);e?n||Ho(i,1):Ho(i,2)}function cm(i){let{state:t}=i,e=t.world,n=Ns(e),s=new Set(n.map(u=>u.gy*e.w+u.gx)),r=u=>t.units.filter(d=>d.hp>0&&d.player===u&&!d.summonedBy&&s.has(d.y*e.w+d.x)).length,a=u=>t.units.filter(d=>d.hp>0&&d.player===u&&!d.summonedBy).reduce((d,p)=>d+p.hp,0),o=r(1),l=r(2),c=null,h="";if(o>l)c=1,h=`Time's up! ${Bs(t,1)} wins! (${o} vs ${l} units on center base)`;else if(l>o)c=2,h=`Time's up! ${Bs(t,2)} wins! (${l} vs ${o} units on center base)`;else{let u=a(1),d=a(2);u>d?(c=1,h=`Time's up! Draw on center \u2014 ${Bs(t,1)} wins on total HP (${u} vs ${d})`):d>u?(c=2,h=`Time's up! Draw on center \u2014 ${Bs(t,2)} wins on total HP (${d} vs ${u})`):h=`Draw! (equal units on center: ${o}, equal HP)`}Ho(i,c,h)}function Bs(i,t){return i.playerNames[t]||`Player ${t}`}function Ho(i,t,e){let{state:n}=i;if(n.phase==="gameover")return;n.phase="gameover";let s=$h(n.units,t);i.emit("gameOver",{winner:t,title:e??`${Bs(n,t)} wins!`,classRecord:s})}var Zh=["red","yellow","purple","blue","green"],Jh={red:15022389,yellow:16635957,purple:9315498,blue:2001125,green:4431943};function hm(i){let{world:t}=i,e=Math.floor(t.h/2),n=[];for(let s=0;s<t.w;s++){let r=e;if(t.type[r][s]!==wt.PATH||i.getUnitAtTile(s,r)!=null)continue;let a=i.tileKey(s,r);i.powerups.has(a)||n.push({gx:s,gy:r})}return n}function jh(i,t){let{state:e,rng:n}=i,s=hm(e);if(s.length===0)return;let r=s[Math.floor(n.next()*s.length)],a=Zh[Math.floor(n.next()*Zh.length)],o=e.tileKey(r.gx,r.gy);e.powerups.set(o,{type:a}),i.emit("powerupSpawned",{key:o,type:a,gx:r.gx,gy:r.gy,turnsLeft:t})}function zo(i,t){let{state:e}=i,n=e.tileKey(t.x,t.y),s=e.powerups.get(n);if(s){if(e.powerups.delete(n),i.emit("powerupCollected",{key:n,type:s.type,unit:t,gx:t.x,gy:t.y}),s.type==="green")t.hp=Math.min(t.maxHp,t.hp+6),i.emit("floatingText",{gx:t.x,gy:t.y,text:"+6 HP",kind:"buff"});else{let a="";s.type==="red"?(t.tempBuff={str:4,duration:3},a="STR"):s.type==="yellow"?(t.tempBuff={agi:4,duration:3},a="AGI"):s.type==="purple"?(t.tempBuff={int:4,duration:3},a="INT"):s.type==="blue"&&(t.tempBuff={dex:4,duration:3},a="DEX"),i.emit("floatingText",{gx:t.x,gy:t.y,text:`+4 ${a}`,kind:"buff"})}i.emit("unitStatsChanged",{unit:t}),i.emit("buffAnimation",{unit:t})}}function um(i){let t=i,e=[1];for(let n=0;n<Math.floor((t-1)/2);n++)e.push(2,2,1,1);return t%2===1?e.push(2):(e.push(2,2),e.push(1)),e}function Rn(i){return i.draft.order[i.draft.pickIndex]}function Qh(i){let t=Rn(i);return i.draft.pickCountByPlayer[t]+1}function tu(i){let{state:t,rng:e}=i,n=t.settings.draftPicksPerPlayer;t.phase="draft",t.deathOrderSeq=0,t.deadCorpseCount=0,t.powerups.clear(),t.powerupSpawnedTurnsLeft={30:!1,20:!1,10:!1};let s=t.draft;s.order=um(n),s.pickIndex=0,s.pickCountByPlayer={1:0,2:0},s.availableClasses=new Set(Oe),s.classOrder=e.shuffle([...Oe]),s.pendingClassKey=null,s.selectedClassKey=null,s.placementTiles=[],i.emit("draftStarted",{player:Rn(t),pickCount:Qh(t),picksPerPlayer:n})}function eu(i,t){let{state:e}=i,n=e.draft;if(!n.availableClasses.has(t)||n.pendingClassKey)return!1;n.pendingClassKey=t;let s=Rn(e),r=new Set(e.units.map(o=>e.tileKey(o.x,o.y))),a=zh(e.world,s,r);return n.placementTiles=Vh(e.world,a),i.emit("draftPickChosen",{player:s,classKey:t,placementTiles:n.placementTiles}),!0}function nu(i,t,e){let{state:n}=i,s=n.draft;if(!s.pendingClassKey)return!1;let r=Rn(n),a=n.tileKey(t,e);if(!s.placementTiles.some(h=>n.tileKey(h.gx,h.gy)===a))return!1;let o=s.pendingClassKey,l=Rh({id:n.ids.next(),player:r,classKey:o,x:t,y:e});n.addUnit(l),i.emit("unitPlaced",{unit:l}),s.availableClasses.delete(o),s.pendingClassKey=null,s.placementTiles=[],s.pickCountByPlayer[r]++,s.pickIndex++;let c=n.settings.draftPicksPerPlayer;return s.pickIndex>=2*c?(i.emit("draftComplete",{}),!0):(i.emit("draftTurnChanged",{player:Rn(n),pickCount:Qh(n),picksPerPlayer:c}),!0)}var Hr=class{constructor(t,e){this.state=t,this.events=e,this.animator=null,this._chain=Promise.resolve(),this.ctx={state:t,rng:t.rng,emit:(n,s)=>e.emit(n,s),onDeath:(n,s)=>this._onDeath(n,s)},e.on("checkGameOver",()=>Kh(this.ctx)),e.on("powerupCheck",({unit:n})=>{n&&n.hp>0&&zo(this.ctx,n)})}setAnimator(t){this.animator=t}_onDeath(t,e){Fs(this.ctx,t,e)}async _anim(t,...e){if(this.animator&&typeof this.animator[t]=="function")try{await this.animator[t](...e)}catch(n){console.error(`[animator] ${t}`,n)}}dispatch(t){let e=()=>this._apply(t);return this._chain=this._chain.then(e,e),this._chain}async _apply(t){switch(t.type){case"move":return this._move(t);case"attack":return this._attack(t);case"skill":return this._skill(t);case"endTurn":return this._endTurn(t);case"draftPick":return this._draftPick(t);case"draftPlace":return this._draftPlace(t);default:console.warn("[dispatch] unknown intent",t)}}async _move(t){let{state:e}=this,n=e.getUnitById(t.unitId);if(!n||n.hp<=0||e.hasMoved||n.id!==e.initiativeOrder[e.currentTurnIndex])return;let s=xi(e.world,n.x,n.y,t.toGx,t.toGy,e.units,n);if(!s||s.length<=1)return;let r=n.x,a=n.y;await this._anim("animateMove",n,s);let o=s[s.length-1],l=s[s.length-2];n.x=o.x,n.y=o.y,n.facing=jn(l.x,l.y,o.x,o.y)||n.facing,e.updateUnitTileIndex(n,r,a),e.hasMoved=!0,zo(this.ctx,n),this.events.emit("unitMoved",{unit:n,from:{gx:r,gy:a},to:{gx:n.x,gy:n.y},path:s}),this._finishAction(n)}async _attack(t){let{state:e}=this,n=e.getUnitById(t.unitId),s=e.getUnitById(t.targetId);if(!n||n.hp<=0||!s||s.hp<=0||e.hasAttacked||n.id!==e.initiativeOrder[e.currentTurnIndex])return;n.facing=jn(n.x,n.y,s.x,s.y)||n.facing;let r=t.strikes||Ph(n,s,e.rng);e.hasAttacked=!0,this.events.emit("unitAttack",{attacker:n,target:s,strikes:r}),await this._anim("animateAttack",n,s,r);for(let a of r){if(s.hp<=0)break;Ds(this.ctx,{attacker:n,victim:s,amount:a.damage,preHit:a.isHit})}this._finishAction(n)}async _skill(t){let{state:e}=this,n=e.getUnitById(t.unitId);if(!n||n.hp<=0||e.hasAttacked||n.id!==e.initiativeOrder[e.currentTurnIndex])return;let r=mn(e,n)[t.skillIndex];if(!r||r.disabled)return;let a=t.targetId!=null?e.getUnitById(t.targetId):null;r.target==="enemy"&&(!a||a.hp<=0)||(a&&(a.x!==n.x||a.y!==n.y)&&(n.facing=jn(n.x,n.y,a.x,a.y)||n.facing),n.mp=Math.max(0,n.mp-(r.cost||0)),e.hasAttacked=!0,this.events.emit("unitSkill",{unit:n,target:a,skill:r}),await this._anim("animateSkill",n,a,r),Hh(this.ctx,n,a,r,{reanimate:(o,l)=>Xh(this.ctx,o,l)}),this._finishAction(n))}_endTurn(t){let{state:e}=this;e.phase==="playing"&&(t&&t.unitId!=null&&t.unitId!==e.initiativeOrder[e.currentTurnIndex]||this._doEndTurn())}_doEndTurn(){let{state:t}=this;Yh(this.ctx),t.phase==="playing"&&(this._maybeSpawnPowerups(),this.events.emit("afterEndTurn",{unit:t.getActiveUnit()}))}_finishAction(t){let{state:e}=this;e.phase==="playing"&&(t.hp<=0||e.hasMoved&&e.hasAttacked?this._doEndTurn():this.events.emit("actionResolved",{unit:t}))}_maybeSpawnPowerups(){let{state:t}=this,e=t.settings.maxTurns-t.turnCount;for(let n of[30,20,10])e<=n&&!t.powerupSpawnedTurnsLeft[n]&&(jh(this.ctx,e),t.powerupSpawnedTurnsLeft[n]=!0)}_draftPick(t){eu(this.ctx,t.classKey)}_draftPlace(t){nu(this.ctx,t.gx,t.gy)}startPlaying(){let{state:t}=this;t.phase="playing",t.turnCount=0,t.initiativeOrder=Os(t),t.currentTurnIndex=0,t.hasMoved=!1,t.hasAttacked=!1;let e=t.getActiveUnit();t.currentPlayer=e?e.player:1,this.events.emit("playingStarted",{unit:e,currentPlayer:t.currentPlayer}),this.events.emit("turnChanged",{unit:e,currentPlayer:t.currentPlayer,turnCount:0})}get currentDraftPlayer(){return Rn(this.state)}};var Go=i=>i<.5?2*i*i:1-(-2*i+2)**2/2;var dm=i=>i,zr=class{constructor(){this._tweens=new Set,this._running=!1,this._raf=null,this._lastTime=0,this.onFrame=null}get active(){return this._tweens.size>0}add({duration:t,onUpdate:e,onComplete:n,ease:s=Go}){let r={elapsed:0,duration:Math.max(0,t),onUpdate:e,onComplete:n,ease:s,done:!1,cancel:()=>{this._tweens.delete(r)}};return this._tweens.add(r),this._ensureRunning(),r}during(t,e,n){return this.add({duration:t,onUpdate:e,onComplete:n,ease:dm})}_ensureRunning(){this._running||(this._running=!0,this._lastTime=performance.now(),this._raf=requestAnimationFrame(this._tick))}_tick=t=>{let e=t-this._lastTime;this._lastTime=t;for(let n of[...this._tweens]){n.elapsed+=e;let s=n.duration===0?1:Math.min(1,n.elapsed/n.duration),r=n.ease(s);try{n.onUpdate(r,s)}catch(a){console.error("[tween] onUpdate error",a)}if(s>=1&&(this._tweens.delete(n),n.onComplete))try{n.onComplete()}catch(a){console.error("[tween] onComplete error",a)}}this.onFrame&&this.onFrame(),this._tweens.size>0?this._raf=requestAnimationFrame(this._tick):(this._running=!1,this._raf=null)};clear(){this._tweens.clear(),this._raf&&cancelAnimationFrame(this._raf),this._running=!1,this._raf=null}};var gc="160";var fm=0,iu=1,pm=2;var Xa=1,mm=2,Hn=3,ci=0,Ze=1,_e=2;var ai=0,cs=1,su=2,ru=3,au=4,gm=5,Ei=100,_m=101,xm=102,ou=103,lu=104,ym=200,vm=201,Mm=202,Sm=203,Tl=204,wl=205,bm=206,Em=207,Tm=208,wm=209,Am=210,Rm=211,Cm=212,Pm=213,Im=214,Lm=0,Dm=1,Um=2,ga=3,Nm=4,Om=5,Fm=6,Bm=7,Hd=0,km=1,Hm=2,oi=0,zm=1,Gm=2,Vm=3,_c=4,Wm=5,$m=6;var zd=300,ds=301,fs=302,Al=303,Rl=304,qa=306,Js=1e3,vn=1001,Cl=1002,Ge=1003,cu=1004;var Vo=1005;var Ve=1006,Xm=1007;var js=1008;var li=1009,qm=1010,Ym=1011,xc=1012,Gd=1013,si=1014,ri=1015,Qs=1016,Vd=1017,Wd=1018,wi=1020,Km=1021,Mn=1023,Zm=1024,Jm=1025,Ai=1026,ps=1027,jm=1028,$d=1029,Qm=1030,Xd=1031,qd=1033,Wo=33776,$o=33777,Xo=33778,qo=33779,hu=35840,uu=35841,du=35842,fu=35843,Yd=36196,pu=37492,mu=37496,gu=37808,_u=37809,xu=37810,yu=37811,vu=37812,Mu=37813,Su=37814,bu=37815,Eu=37816,Tu=37817,wu=37818,Au=37819,Ru=37820,Cu=37821,Yo=36492,Pu=36494,Iu=36495,tg=36283,Lu=36284,Du=36285,Uu=36286;var _a=2300,xa=2301,Ko=2302,Nu=2400,Ou=2401,Fu=2402;var Kd=3e3,Ri=3001,eg=3200,ng=3201,Zd=0,ig=1,ln="",Se="srgb",Gn="srgb-linear",yc="display-p3",Ya="display-p3-linear",ya="linear",ae="srgb",va="rec709",Ma="p3";var Gi=7680;var Bu=519,sg=512,rg=513,ag=514,Jd=515,og=516,lg=517,cg=518,hg=519,ku=35044;var Hu="300 es",Pl=1035,zn=2e3,Sa=2001,hi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Zo=Math.PI/180,Il=180/Math.PI;function Ss(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Fe[i&255]+Fe[i>>8&255]+Fe[i>>16&255]+Fe[i>>24&255]+"-"+Fe[t&255]+Fe[t>>8&255]+"-"+Fe[t>>16&15|64]+Fe[t>>24&255]+"-"+Fe[e&63|128]+Fe[e>>8&255]+"-"+Fe[e>>16&255]+Fe[e>>24&255]+Fe[n&255]+Fe[n>>8&255]+Fe[n>>16&255]+Fe[n>>24&255]).toLowerCase()}function Ue(i,t,e){return Math.max(t,Math.min(e,i))}function ug(i,t){return(i%t+t)%t}function Jo(i,t,e){return(1-e)*i+e*t}function zu(i){return(i&i-1)===0&&i!==0}function Ll(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ks(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ke(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var pt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Yt=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],_=n[8],g=s[0],m=s[3],f=s[6],y=s[1],x=s[4],b=s[7],R=s[2],M=s[5],S=s[8];return r[0]=a*g+o*y+l*R,r[3]=a*m+o*x+l*M,r[6]=a*f+o*b+l*S,r[1]=c*g+h*y+u*R,r[4]=c*m+h*x+u*M,r[7]=c*f+h*b+u*S,r[2]=d*g+p*y+_*R,r[5]=d*m+p*x+_*M,r[8]=d*f+p*b+_*S,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,_=e*u+n*d+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return t[0]=u*g,t[1]=(s*c-h*n)*g,t[2]=(o*n-s*a)*g,t[3]=d*g,t[4]=(h*e-s*l)*g,t[5]=(s*r-o*e)*g,t[6]=p*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*r)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(jo.makeScale(t,e)),this}rotate(t){return this.premultiply(jo.makeRotation(-t)),this}translate(t,e){return this.premultiply(jo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},jo=new Yt;function jd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ba(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function dg(){let i=ba("canvas");return i.style.display="block",i}var Gu={};function Xs(i){i in Gu||(Gu[i]=!0,console.warn(i))}var Vu=new Yt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Wu=new Yt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Gr={[Gn]:{transfer:ya,primaries:va,toReference:i=>i,fromReference:i=>i},[Se]:{transfer:ae,primaries:va,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ya]:{transfer:ya,primaries:Ma,toReference:i=>i.applyMatrix3(Wu),fromReference:i=>i.applyMatrix3(Vu)},[yc]:{transfer:ae,primaries:Ma,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Wu),fromReference:i=>i.applyMatrix3(Vu).convertLinearToSRGB()}},fg=new Set([Gn,Ya]),jt={enabled:!0,_workingColorSpace:Gn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!fg.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=Gr[t].toReference,s=Gr[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Gr[i].primaries},getTransfer:function(i){return i===ln?ya:Gr[i].transfer}};function hs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Qo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Vi,Ea=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Vi===void 0&&(Vi=ba("canvas")),Vi.width=t.width,Vi.height=t.height;let n=Vi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Vi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ba("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=hs(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(hs(e[n]/255)*255):e[n]=hs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},pg=0,Ta=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pg++}),this.uuid=Ss(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(tl(s[a].image)):r.push(tl(s[a]))}else r=tl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function tl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ea.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var mg=0,cn=class i extends hi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=vn,s=vn,r=Ve,a=js,o=Mn,l=li,c=i.DEFAULT_ANISOTROPY,h=ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mg++}),this.uuid=Ss(),this.name="",this.source=new Ta(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Xs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ri?Se:ln),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Js:t.x=t.x-Math.floor(t.x);break;case vn:t.x=t.x<0?0:1;break;case Cl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Js:t.y=t.y-Math.floor(t.y);break;case vn:t.y=t.y<0?0:1;break;case Cl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Xs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Se?Ri:Kd}set encoding(t){Xs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Ri?Se:ln}};cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=zd;cn.DEFAULT_ANISOTROPY=1;var Ce=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],_=l[9],g=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(c+1)/2,b=(p+1)/2,R=(f+1)/2,M=(h+d)/4,S=(u+g)/4,D=(_+m)/4;return x>b&&x>R?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=M/n,r=S/n):b>R?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=M/s,r=D/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=S/r,s=D/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(u-g)/y,this.z=(d-h)/y,this.w=Math.acos((c+p+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Dl=class extends hi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ce(0,0,t,e),this.scissorTest=!1,this.viewport=new Ce(0,0,t,e);let s={width:t,height:e,depth:1};n.encoding!==void 0&&(Xs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ri?Se:ln),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ve,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new cn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ta(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vn=class extends Dl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},wa=class extends cn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ul=class extends cn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],p=r[a+1],_=r[a+2],g=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=_,t[e+3]=g;return}if(u!==g||l!==d||c!==p||h!==_){let m=1-o,f=l*d+c*p+h*_+u*g,y=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){let R=Math.sqrt(x),M=Math.atan2(R,f*y);m=Math.sin(m*M)/R,o=Math.sin(o*M)/R}let b=o*y;if(l=l*m+d*b,c=c*m+p*b,h=h*m+_*b,u=u*m+g*b,m===1-o){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],p=r[a+2],_=r[a+3];return t[e]=o*_+h*u+l*p-c*d,t[e+1]=l*_+h*d+c*u-o*p,t[e+2]=c*_+h*p+o*d-l*u,t[e+3]=h*_-o*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),p=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*_,this._y=c*p*u-d*h*_,this._z=c*h*_+d*p*u,this._w=c*h*u-d*p*_;break;case"YXZ":this._x=d*h*u+c*p*_,this._y=c*p*u-d*h*_,this._z=c*h*_-d*p*u,this._w=c*h*u+d*p*_;break;case"ZXY":this._x=d*h*u-c*p*_,this._y=c*p*u+d*h*_,this._z=c*h*_+d*p*u,this._w=c*h*u-d*p*_;break;case"ZYX":this._x=d*h*u-c*p*_,this._y=c*p*u+d*h*_,this._z=c*h*_-d*p*u,this._w=c*h*u+d*p*_;break;case"YZX":this._x=d*h*u+c*p*_,this._y=c*p*u+d*h*_,this._z=c*h*_-d*p*u,this._w=c*h*u-d*p*_;break;case"XZY":this._x=d*h*u-c*p*_,this._y=c*p*u-d*h*_,this._z=c*h*_+d*p*u,this._w=c*h*u+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ue(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion($u.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion($u.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return el.copy(this).projectOnVector(t),this.sub(el)}reflect(t){return this.sub(el.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},el=new P,$u=new Pn,Wn=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,gn):gn.fromBufferAttribute(r,a),gn.applyMatrix4(t.matrixWorld),this.expandByPoint(gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Vr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vr.copy(n.boundingBox)),Vr.applyMatrix4(t.matrixWorld),this.union(Vr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,gn),gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hs),Wr.subVectors(this.max,Hs),Wi.subVectors(t.a,Hs),$i.subVectors(t.b,Hs),Xi.subVectors(t.c,Hs),Qn.subVectors($i,Wi),ti.subVectors(Xi,$i),yi.subVectors(Wi,Xi);let e=[0,-Qn.z,Qn.y,0,-ti.z,ti.y,0,-yi.z,yi.y,Qn.z,0,-Qn.x,ti.z,0,-ti.x,yi.z,0,-yi.x,-Qn.y,Qn.x,0,-ti.y,ti.x,0,-yi.y,yi.x,0];return!nl(e,Wi,$i,Xi,Wr)||(e=[1,0,0,0,1,0,0,0,1],!nl(e,Wi,$i,Xi,Wr))?!1:($r.crossVectors(Qn,ti),e=[$r.x,$r.y,$r.z],nl(e,Wi,$i,Xi,Wr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Nn=[new P,new P,new P,new P,new P,new P,new P,new P],gn=new P,Vr=new Wn,Wi=new P,$i=new P,Xi=new P,Qn=new P,ti=new P,yi=new P,Hs=new P,Wr=new P,$r=new P,vi=new P;function nl(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){vi.fromArray(i,r);let o=s.x*Math.abs(vi.x)+s.y*Math.abs(vi.y)+s.z*Math.abs(vi.z),l=t.dot(vi),c=e.dot(vi),h=n.dot(vi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var gg=new Wn,zs=new P,il=new P,ui=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):gg.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zs.subVectors(t,this.center);let e=zs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(zs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(il.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zs.copy(t.center).add(il)),this.expandByPoint(zs.copy(t.center).sub(il))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},On=new P,sl=new P,Xr=new P,ei=new P,rl=new P,qr=new P,al=new P,tr=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,On)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=On.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(On.copy(this.origin).addScaledVector(this.direction,e),On.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){sl.copy(t).add(e).multiplyScalar(.5),Xr.copy(e).sub(t).normalize(),ei.copy(this.origin).sub(sl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Xr),o=ei.dot(this.direction),l=-ei.dot(Xr),c=ei.lengthSq(),h=Math.abs(1-a*a),u,d,p,_;if(h>0)if(u=a*l-o,d=a*o-l,_=r*h,u>=0)if(d>=-_)if(d<=_){let g=1/h;u*=g,d*=g,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(sl).addScaledVector(Xr,d),p}intersectSphere(t,e){On.subVectors(t.center,this.origin);let n=On.dot(this.direction),s=On.dot(On)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,On)!==null}intersectTriangle(t,e,n,s,r){rl.subVectors(e,t),qr.subVectors(n,t),al.crossVectors(rl,qr);let a=this.direction.dot(al),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ei.subVectors(this.origin,t);let l=o*this.direction.dot(qr.crossVectors(ei,qr));if(l<0)return null;let c=o*this.direction.dot(rl.cross(ei));if(c<0||l+c>a)return null;let h=-o*ei.dot(al);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},oe=class i{constructor(t,e,n,s,r,a,o,l,c,h,u,d,p,_,g,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,p,_,g,m)}set(t,e,n,s,r,a,o,l,c,h,u,d,p,_,g,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=_,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/qi.setFromMatrixColumn(t,0).length(),r=1/qi.setFromMatrixColumn(t,1).length(),a=1/qi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,p=a*u,_=o*h,g=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+_*c,e[5]=d-g*c,e[9]=-o*l,e[2]=g-d*c,e[6]=_+p*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,p=l*u,_=c*h,g=c*u;e[0]=d+g*o,e[4]=_*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-_,e[6]=g+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,p=l*u,_=c*h,g=c*u;e[0]=d-g*o,e[4]=-a*u,e[8]=_+p*o,e[1]=p+_*o,e[5]=a*h,e[9]=g-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,p=a*u,_=o*h,g=o*u;e[0]=l*h,e[4]=_*c-p,e[8]=d*c+g,e[1]=l*u,e[5]=g*c+d,e[9]=p*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,p=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=g-d*u,e[8]=_*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+_,e[10]=d-g*u}else if(t.order==="XZY"){let d=a*l,p=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+g,e[5]=a*h,e[9]=p*u-_,e[2]=_*u-p,e[6]=o*h,e[10]=g*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_g,t,xg)}lookAt(t,e,n){let s=this.elements;return en.subVectors(t,e),en.lengthSq()===0&&(en.z=1),en.normalize(),ni.crossVectors(n,en),ni.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),ni.crossVectors(n,en)),ni.normalize(),Yr.crossVectors(en,ni),s[0]=ni.x,s[4]=Yr.x,s[8]=en.x,s[1]=ni.y,s[5]=Yr.y,s[9]=en.y,s[2]=ni.z,s[6]=Yr.z,s[10]=en.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],_=n[2],g=n[6],m=n[10],f=n[14],y=n[3],x=n[7],b=n[11],R=n[15],M=s[0],S=s[4],D=s[8],v=s[12],T=s[1],O=s[5],X=s[9],j=s[13],I=s[2],B=s[6],$=s[10],k=s[14],C=s[3],L=s[7],K=s[11],Z=s[15];return r[0]=a*M+o*T+l*I+c*C,r[4]=a*S+o*O+l*B+c*L,r[8]=a*D+o*X+l*$+c*K,r[12]=a*v+o*j+l*k+c*Z,r[1]=h*M+u*T+d*I+p*C,r[5]=h*S+u*O+d*B+p*L,r[9]=h*D+u*X+d*$+p*K,r[13]=h*v+u*j+d*k+p*Z,r[2]=_*M+g*T+m*I+f*C,r[6]=_*S+g*O+m*B+f*L,r[10]=_*D+g*X+m*$+f*K,r[14]=_*v+g*j+m*k+f*Z,r[3]=y*M+x*T+b*I+R*C,r[7]=y*S+x*O+b*B+R*L,r[11]=y*D+x*X+b*$+R*K,r[15]=y*v+x*j+b*k+R*Z,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],_=t[3],g=t[7],m=t[11],f=t[15];return _*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*p-n*l*p)+g*(+e*l*p-e*c*d+r*a*d-s*a*p+s*c*h-r*l*h)+m*(+e*c*u-e*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+f*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],_=t[12],g=t[13],m=t[14],f=t[15],y=u*m*c-g*d*c+g*l*p-o*m*p-u*l*f+o*d*f,x=_*d*c-h*m*c-_*l*p+a*m*p+h*l*f-a*d*f,b=h*g*c-_*u*c+_*o*p-a*g*p-h*o*f+a*u*f,R=_*u*l-h*g*l-_*o*d+a*g*d+h*o*m-a*u*m,M=e*y+n*x+s*b+r*R;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/M;return t[0]=y*S,t[1]=(g*d*r-u*m*r-g*s*p+n*m*p+u*s*f-n*d*f)*S,t[2]=(o*m*r-g*l*r+g*s*c-n*m*c-o*s*f+n*l*f)*S,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*p-n*l*p)*S,t[4]=x*S,t[5]=(h*m*r-_*d*r+_*s*p-e*m*p-h*s*f+e*d*f)*S,t[6]=(_*l*r-a*m*r-_*s*c+e*m*c+a*s*f-e*l*f)*S,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*p+e*l*p)*S,t[8]=b*S,t[9]=(_*u*r-h*g*r-_*n*p+e*g*p+h*n*f-e*u*f)*S,t[10]=(a*g*r-_*o*r+_*n*c-e*g*c-a*n*f+e*o*f)*S,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*p-e*o*p)*S,t[12]=R*S,t[13]=(h*g*s-_*u*s+_*n*d-e*g*d-h*n*m+e*u*m)*S,t[14]=(_*o*s-a*g*s-_*n*l+e*g*l+a*n*m-e*o*m)*S,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*S,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,_=r*u,g=a*h,m=a*u,f=o*u,y=l*c,x=l*h,b=l*u,R=n.x,M=n.y,S=n.z;return s[0]=(1-(g+f))*R,s[1]=(p+b)*R,s[2]=(_-x)*R,s[3]=0,s[4]=(p-b)*M,s[5]=(1-(d+f))*M,s[6]=(m+y)*M,s[7]=0,s[8]=(_+x)*S,s[9]=(m-y)*S,s[10]=(1-(d+g))*S,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=qi.set(s[0],s[1],s[2]).length(),a=qi.set(s[4],s[5],s[6]).length(),o=qi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],_n.copy(this);let c=1/r,h=1/a,u=1/o;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=h,_n.elements[5]*=h,_n.elements[6]*=h,_n.elements[8]*=u,_n.elements[9]*=u,_n.elements[10]*=u,e.setFromRotationMatrix(_n),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=zn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),p,_;if(o===zn)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Sa)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=zn){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*c,p=(n+s)*h,_,g;if(o===zn)_=(a+r)*u,g=-2*u;else if(o===Sa)_=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},qi=new P,_n=new oe,_g=new P(0,0,0),xg=new P(1,1,1),ni=new P,Yr=new P,en=new P,Xu=new oe,qu=new Pn,ms=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ue(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ue(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Xu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Xu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return qu.setFromEuler(this),this.setFromQuaternion(qu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ms.DEFAULT_ORDER="XYZ";var er=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},yg=0,Yu=new P,Yi=new Pn,Fn=new oe,Kr=new P,Gs=new P,vg=new P,Mg=new Pn,Ku=new P(1,0,0),Zu=new P(0,1,0),Ju=new P(0,0,1),Sg={type:"added"},bg={type:"removed"},Ie=class i extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yg++}),this.uuid=Ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new P,e=new ms,n=new Pn,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new Yt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new er,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Yi.setFromAxisAngle(t,e),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(t,e){return Yi.setFromAxisAngle(t,e),this.quaternion.premultiply(Yi),this}rotateX(t){return this.rotateOnAxis(Ku,t)}rotateY(t){return this.rotateOnAxis(Zu,t)}rotateZ(t){return this.rotateOnAxis(Ju,t)}translateOnAxis(t,e){return Yu.copy(t).applyQuaternion(this.quaternion),this.position.add(Yu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ku,t)}translateY(t){return this.translateOnAxis(Zu,t)}translateZ(t){return this.translateOnAxis(Ju,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Kr.copy(t):Kr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(Gs,Kr,this.up):Fn.lookAt(Kr,Gs,this.up),this.quaternion.setFromRotationMatrix(Fn),s&&(Fn.extractRotation(s.matrixWorld),Yi.setFromRotationMatrix(Fn),this.quaternion.premultiply(Yi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Sg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(bg)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,t,vg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,Mg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ie.DEFAULT_UP=new P(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var xn=new P,Bn=new P,ol=new P,kn=new P,Ki=new P,Zi=new P,ju=new P,ll=new P,cl=new P,hl=new P,Zr=!1,rs=class i{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),xn.subVectors(t,e),s.cross(xn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){xn.subVectors(s,e),Bn.subVectors(n,e),ol.subVectors(t,e);let a=xn.dot(xn),o=xn.dot(Bn),l=xn.dot(ol),c=Bn.dot(Bn),h=Bn.dot(ol),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,_=(a*h-o*l)*d;return r.set(1-p-_,_,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getUV(t,e,n,s,r,a,o,l){return Zr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Zr=!0),this.getInterpolation(t,e,n,s,r,a,o,l)}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,kn.x),l.addScaledVector(a,kn.y),l.addScaledVector(o,kn.z),l)}static isFrontFacing(t,e,n,s){return xn.subVectors(n,e),Bn.subVectors(t,e),xn.cross(Bn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),xn.cross(Bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return Zr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Zr=!0),i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Ki.subVectors(s,n),Zi.subVectors(r,n),ll.subVectors(t,n);let l=Ki.dot(ll),c=Zi.dot(ll);if(l<=0&&c<=0)return e.copy(n);cl.subVectors(t,s);let h=Ki.dot(cl),u=Zi.dot(cl);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ki,a);hl.subVectors(t,r);let p=Ki.dot(hl),_=Zi.dot(hl);if(_>=0&&p<=_)return e.copy(r);let g=p*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(Zi,o);let m=h*_-p*u;if(m<=0&&u-h>=0&&p-_>=0)return ju.subVectors(r,s),o=(u-h)/(u-h+(p-_)),e.copy(s).addScaledVector(ju,o);let f=1/(m+g+d);return a=g*f,o=d*f,e.copy(n).addScaledVector(Ki,a).addScaledVector(Zi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Qd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},Jr={h:0,s:0,l:0};function ul(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var kt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Se){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=jt.workingColorSpace){if(t=ug(t,1),e=Ue(e,0,1),n=Ue(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ul(a,r,t+1/3),this.g=ul(a,r,t),this.b=ul(a,r,t-1/3)}return jt.toWorkingColorSpace(this,s),this}setStyle(t,e=Se){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Se){let n=Qd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=hs(t.r),this.g=hs(t.g),this.b=hs(t.b),this}copyLinearToSRGB(t){return this.r=Qo(t.r),this.g=Qo(t.g),this.b=Qo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Se){return jt.fromWorkingColorSpace(Be.copy(this),t),Math.round(Ue(Be.r*255,0,255))*65536+Math.round(Ue(Be.g*255,0,255))*256+Math.round(Ue(Be.b*255,0,255))}getHexString(t=Se){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.fromWorkingColorSpace(Be.copy(this),e);let n=Be.r,s=Be.g,r=Be.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=jt.workingColorSpace){return jt.fromWorkingColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=Se){jt.fromWorkingColorSpace(Be.copy(this),t);let e=Be.r,n=Be.g,s=Be.b;return t!==Se?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ii),this.setHSL(ii.h+t,ii.s+e,ii.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ii),t.getHSL(Jr);let n=Jo(ii.h,Jr.h,e),s=Jo(ii.s,Jr.s,e),r=Jo(ii.l,Jr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Be=new kt;kt.NAMES=Qd;var Eg=0,di=class extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Eg++}),this.uuid=Ss(),this.name="",this.type="Material",this.blending=cs,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tl,this.blendDst=wl,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=ga,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gi,this.stencilZFail=Gi,this.stencilZPass=Gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==cs&&(n.blending=this.blending),this.side!==ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Tl&&(n.blendSrc=this.blendSrc),this.blendDst!==wl&&(n.blendDst=this.blendDst),this.blendEquation!==Ei&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ga&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},le=class extends di{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Hd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ye=new P,jr=new pt,Pe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ku,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)jr.fromBufferAttribute(this,e),jr.applyMatrix3(t),this.setXY(e,jr.x,jr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ks(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ke(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ks(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ks(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ks(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ks(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ke(e,this.array),n=Ke(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ke(e,this.array),n=Ke(n,this.array),s=Ke(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ke(e,this.array),n=Ke(n,this.array),s=Ke(s,this.array),r=Ke(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ku&&(t.usage=this.usage),t}};var Aa=class extends Pe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ra=class extends Pe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Zt=class extends Pe{constructor(t,e,n){super(new Float32Array(t),e,n)}};var Tg=0,on=new oe,dl=new Ie,Ji=new P,nn=new Wn,Vs=new Wn,Re=new P,be=class i extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=Ss(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(jd(t)?Ra:Aa)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return on.makeRotationFromQuaternion(t),this.applyMatrix4(on),this}rotateX(t){return on.makeRotationX(t),this.applyMatrix4(on),this}rotateY(t){return on.makeRotationY(t),this.applyMatrix4(on),this}rotateZ(t){return on.makeRotationZ(t),this.applyMatrix4(on),this}translate(t,e,n){return on.makeTranslation(t,e,n),this.applyMatrix4(on),this}scale(t,e,n){return on.makeScale(t,e,n),this.applyMatrix4(on),this}lookAt(t){return dl.lookAt(t),dl.updateMatrix(),this.applyMatrix4(dl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ji).negate(),this.translate(Ji.x,Ji.y,Ji.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Zt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ui);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(nn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Vs.setFromBufferAttribute(o),this.morphTargetsRelative?(Re.addVectors(nn.min,Vs.min),nn.expandByPoint(Re),Re.addVectors(nn.max,Vs.max),nn.expandByPoint(Re)):(nn.expandByPoint(Vs.min),nn.expandByPoint(Vs.max))}nn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Re.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Re));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Re.fromBufferAttribute(o,c),l&&(Ji.fromBufferAttribute(t,c),Re.add(Ji)),s=Math.max(s,n.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,s=e.position.array,r=e.normal.array,a=e.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pe(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let T=0;T<o;T++)c[T]=new P,h[T]=new P;let u=new P,d=new P,p=new P,_=new pt,g=new pt,m=new pt,f=new P,y=new P;function x(T,O,X){u.fromArray(s,T*3),d.fromArray(s,O*3),p.fromArray(s,X*3),_.fromArray(a,T*2),g.fromArray(a,O*2),m.fromArray(a,X*2),d.sub(u),p.sub(u),g.sub(_),m.sub(_);let j=1/(g.x*m.y-m.x*g.y);isFinite(j)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(j),y.copy(p).multiplyScalar(g.x).addScaledVector(d,-m.x).multiplyScalar(j),c[T].add(f),c[O].add(f),c[X].add(f),h[T].add(y),h[O].add(y),h[X].add(y))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let T=0,O=b.length;T<O;++T){let X=b[T],j=X.start,I=X.count;for(let B=j,$=j+I;B<$;B+=3)x(n[B+0],n[B+1],n[B+2])}let R=new P,M=new P,S=new P,D=new P;function v(T){S.fromArray(r,T*3),D.copy(S);let O=c[T];R.copy(O),R.sub(S.multiplyScalar(S.dot(O))).normalize(),M.crossVectors(D,O);let j=M.dot(h[T])<0?-1:1;l[T*4]=R.x,l[T*4+1]=R.y,l[T*4+2]=R.z,l[T*4+3]=j}for(let T=0,O=b.length;T<O;++T){let X=b[T],j=X.start,I=X.count;for(let B=j,$=j+I;B<$;B+=3)v(n[B+0]),v(n[B+1]),v(n[B+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,u=new P;if(t)for(let d=0,p=t.count;d<p;d+=3){let _=t.getX(d+0),g=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?p=l[g]*o.data.stride+o.offset:p=l[g]*h;for(let f=0;f<h;f++)d[_++]=c[p++]}return new Pe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qu=new oe,Mi=new tr,Qr=new ui,td=new P,ji=new P,Qi=new P,ts=new P,fl=new P,ta=new P,ea=new pt,na=new pt,ia=new pt,ed=new P,nd=new P,id=new P,sa=new P,ra=new P,yt=class extends Ie{constructor(t=new be,e=new le){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){ta.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(fl.fromBufferAttribute(u,t),a?ta.addScaledVector(fl,h):ta.addScaledVector(fl.sub(e),h))}e.add(ta)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere),Qr.applyMatrix4(r),Mi.copy(t.ray).recast(t.near),!(Qr.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(Qr,td)===null||Mi.origin.distanceToSquared(td)>(t.far-t.near)**2))&&(Qu.copy(r).invert(),Mi.copy(t.ray).applyMatrix4(Qu),!(n.boundingBox!==null&&Mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Mi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){let m=d[_],f=a[m.materialIndex],y=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let b=y,R=x;b<R;b+=3){let M=o.getX(b),S=o.getX(b+1),D=o.getX(b+2);s=aa(this,f,t,n,c,h,u,M,S,D),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){let y=o.getX(m),x=o.getX(m+1),b=o.getX(m+2);s=aa(this,a,t,n,c,h,u,y,x,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){let m=d[_],f=a[m.materialIndex],y=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=y,R=x;b<R;b+=3){let M=b,S=b+1,D=b+2;s=aa(this,f,t,n,c,h,u,M,S,D),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){let y=m,x=m+1,b=m+2;s=aa(this,a,t,n,c,h,u,y,x,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function wg(i,t,e,n,s,r,a,o){let l;if(t.side===Ze?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===ci,o),l===null)return null;ra.copy(o),ra.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ra);return c<e.near||c>e.far?null:{distance:c,point:ra.clone(),object:i}}function aa(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,ji),i.getVertexPosition(l,Qi),i.getVertexPosition(c,ts);let h=wg(i,t,e,n,ji,Qi,ts,sa);if(h){s&&(ea.fromBufferAttribute(s,o),na.fromBufferAttribute(s,l),ia.fromBufferAttribute(s,c),h.uv=rs.getInterpolation(sa,ji,Qi,ts,ea,na,ia,new pt)),r&&(ea.fromBufferAttribute(r,o),na.fromBufferAttribute(r,l),ia.fromBufferAttribute(r,c),h.uv1=rs.getInterpolation(sa,ji,Qi,ts,ea,na,ia,new pt),h.uv2=h.uv1),a&&(ed.fromBufferAttribute(a,o),nd.fromBufferAttribute(a,l),id.fromBufferAttribute(a,c),h.normal=rs.getInterpolation(sa,ji,Qi,ts,ed,nd,id,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new P,materialIndex:0};rs.getNormal(ji,Qi,ts,u.normal),h.face=u}return h}var Je=class i extends be{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(u,2));function _(g,m,f,y,x,b,R,M,S,D,v){let T=b/S,O=R/D,X=b/2,j=R/2,I=M/2,B=S+1,$=D+1,k=0,C=0,L=new P;for(let K=0;K<$;K++){let Z=K*O-j;for(let J=0;J<B;J++){let G=J*T-X;L[g]=G*y,L[m]=Z*x,L[f]=I,c.push(L.x,L.y,L.z),L[g]=0,L[m]=0,L[f]=M>0?1:-1,h.push(L.x,L.y,L.z),u.push(J/S),u.push(1-K/D),k+=1}}for(let K=0;K<D;K++)for(let Z=0;Z<S;Z++){let J=d+Z+B*K,G=d+Z+B*(K+1),Y=d+(Z+1)+B*(K+1),st=d+(Z+1)+B*K;l.push(J,G,st),l.push(G,Y,st),C+=6}o.addGroup(p,C,v),p+=C,d+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function gs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ze(i){let t={};for(let e=0;e<i.length;e++){let n=gs(i[e]);for(let s in n)t[s]=n[s]}return t}function Ag(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function tf(i){return i.getRenderTarget()===null?i.outputColorSpace:jt.workingColorSpace}var Rg={clone:gs,merge:ze},Cg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$n=class extends di{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cg,this.fragmentShader=Pg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=gs(t.uniforms),this.uniformsGroups=Ag(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Ca=class extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=zn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},We=class extends Ca{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Il*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Zo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Il*2*Math.atan(Math.tan(Zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Zo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},es=-90,ns=1,Nl=class extends Ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new We(es,ns,t,e);s.layers=this.layers,this.add(s);let r=new We(es,ns,t,e);r.layers=this.layers,this.add(r);let a=new We(es,ns,t,e);a.layers=this.layers,this.add(a);let o=new We(es,ns,t,e);o.layers=this.layers,this.add(o);let l=new We(es,ns,t,e);l.layers=this.layers,this.add(l);let c=new We(es,ns,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===zn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Sa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Pa=class extends cn{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ds,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ol=class extends Vn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(Xs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Ri?Se:ln),this.texture=new Pa(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ve}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Je(5,5,5),r=new $n({name:"CubemapFromEquirect",uniforms:gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ze,blending:ai});r.uniforms.tEquirect.value=e;let a=new yt(s,r),o=e.minFilter;return e.minFilter===js&&(e.minFilter=Ve),new Nl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},pl=new P,Ig=new P,Lg=new Yt,yn=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=pl.subVectors(n,e).cross(Ig.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(pl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Lg.getNormalMatrix(t),s=this.coplanarPoint(pl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Si=new ui,oa=new P,nr=class{constructor(t=new yn,e=new yn,n=new yn,s=new yn,r=new yn,a=new yn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=zn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],_=s[9],g=s[10],m=s[11],f=s[12],y=s[13],x=s[14],b=s[15];if(n[0].setComponents(l-r,d-c,m-p,b-f).normalize(),n[1].setComponents(l+r,d+c,m+p,b+f).normalize(),n[2].setComponents(l+a,d+h,m+_,b+y).normalize(),n[3].setComponents(l-a,d-h,m-_,b-y).normalize(),n[4].setComponents(l-o,d-u,m-g,b-x).normalize(),e===zn)n[5].setComponents(l+o,d+u,m+g,b+x).normalize();else if(e===Sa)n[5].setComponents(o,u,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(t){return Si.center.set(0,0,0),Si.radius=.7071067811865476,Si.applyMatrix4(t.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(oa.x=s.normal.x>0?t.max.x:t.min.x,oa.y=s.normal.y>0?t.max.y:t.min.y,oa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(oa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ef(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Dg(i,t){let e=t.isWebGL2,n=new WeakMap;function s(c,h){let u=c.array,d=c.usage,p=u.byteLength,_=i.createBuffer();i.bindBuffer(h,_),i.bufferData(h,u,d),c.onUploadCallback();let g;if(u instanceof Float32Array)g=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=i.SHORT;else if(u instanceof Uint32Array)g=i.UNSIGNED_INT;else if(u instanceof Int32Array)g=i.INT;else if(u instanceof Int8Array)g=i.BYTE;else if(u instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:_,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,h,u){let d=h.array,p=h._updateRange,_=h.updateRanges;if(i.bindBuffer(u,c),p.count===-1&&_.length===0&&i.bufferSubData(u,0,d),_.length!==0){for(let g=0,m=_.length;g<m;g++){let f=_[g];e?i.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):i.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(e?i.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):i.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}var je=class i extends be{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,p=[],_=[],g=[],m=[];for(let f=0;f<h;f++){let y=f*d-a;for(let x=0;x<c;x++){let b=x*u-r;_.push(b,-y,0),g.push(0,0,1),m.push(x/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<o;y++){let x=y+c*f,b=y+c*(f+1),R=y+1+c*(f+1),M=y+1+c*f;p.push(x,b,M),p.push(b,R,M)}this.setIndex(p),this.setAttribute("position",new Zt(_,3)),this.setAttribute("normal",new Zt(g,3)),this.setAttribute("uv",new Zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Ug=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ng=`#ifdef USE_ALPHAHASH
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
#endif`,Og=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,kg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hg=`#ifdef USE_AOMAP
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
#endif`,zg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gg=`#ifdef USE_BATCHING
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
#endif`,Vg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Wg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$g=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qg=`#ifdef USE_IRIDESCENCE
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
#endif`,Yg=`#ifdef USE_BUMPMAP
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
#endif`,Kg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,t0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,e0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,n0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,i0=`#define PI 3.141592653589793
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
} // validated`,s0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,r0=`vec3 transformedNormal = objectNormal;
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
#endif`,a0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,o0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,l0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,c0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,h0="gl_FragColor = linearToOutputTexel( gl_FragColor );",u0=`
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
}`,d0=`#ifdef USE_ENVMAP
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
#endif`,f0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,p0=`#ifdef USE_ENVMAP
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
#endif`,m0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,g0=`#ifdef USE_ENVMAP
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
#endif`,_0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,x0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,y0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,v0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,M0=`#ifdef USE_GRADIENTMAP
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
}`,S0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,b0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,E0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,T0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,w0=`uniform bool receiveShadow;
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
#endif`,A0=`#ifdef USE_ENVMAP
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
#endif`,R0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,C0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,P0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,I0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,L0=`PhysicalMaterial material;
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
#endif`,D0=`struct PhysicalMaterial {
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
}`,U0=`
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
#endif`,N0=`#if defined( RE_IndirectDiffuse )
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
#endif`,O0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,F0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,B0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,k0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,H0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,z0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,G0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,V0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,W0=`#if defined( USE_POINTS_UV )
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
#endif`,$0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,X0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,q0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Y0=`#ifdef USE_MORPHNORMALS
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
#endif`,K0=`#ifdef USE_MORPHTARGETS
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
#endif`,Z0=`#ifdef USE_MORPHTARGETS
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
#endif`,J0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,j0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Q0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,n_=`#ifdef USE_NORMALMAP
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
#endif`,i_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,s_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,r_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,a_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,o_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,l_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,c_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,h_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,u_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,d_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,f_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,p_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,m_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,g_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,__=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,x_=`float getShadowMask() {
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
}`,y_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,v_=`#ifdef USE_SKINNING
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
#endif`,M_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,S_=`#ifdef USE_SKINNING
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
#endif`,b_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,E_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,T_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,w_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,A_=`#ifdef USE_TRANSMISSION
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
#endif`,R_=`#ifdef USE_TRANSMISSION
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
#endif`,C_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,P_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,D_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,U_=`uniform sampler2D t2D;
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
}`,N_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,F_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k_=`#include <common>
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
}`,H_=`#if DEPTH_PACKING == 3200
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
}`,z_=`#define DISTANCE
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
}`,G_=`#define DISTANCE
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
}`,V_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,W_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$_=`uniform float scale;
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
}`,X_=`uniform vec3 diffuse;
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
}`,q_=`#include <common>
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
}`,Y_=`uniform vec3 diffuse;
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
}`,K_=`#define LAMBERT
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
}`,Z_=`#define LAMBERT
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
}`,J_=`#define MATCAP
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
}`,j_=`#define MATCAP
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
}`,Q_=`#define NORMAL
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
}`,tx=`#define NORMAL
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
}`,ex=`#define PHONG
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
}`,nx=`#define PHONG
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
}`,ix=`#define STANDARD
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
}`,sx=`#define STANDARD
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
}`,rx=`#define TOON
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
}`,ax=`#define TOON
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
}`,ox=`uniform float size;
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
}`,lx=`uniform vec3 diffuse;
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
}`,cx=`#include <common>
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
}`,hx=`uniform vec3 color;
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
}`,ux=`uniform float rotation;
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
}`,dx=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:Ug,alphahash_pars_fragment:Ng,alphamap_fragment:Og,alphamap_pars_fragment:Fg,alphatest_fragment:Bg,alphatest_pars_fragment:kg,aomap_fragment:Hg,aomap_pars_fragment:zg,batching_pars_vertex:Gg,batching_vertex:Vg,begin_vertex:Wg,beginnormal_vertex:$g,bsdfs:Xg,iridescence_fragment:qg,bumpmap_pars_fragment:Yg,clipping_planes_fragment:Kg,clipping_planes_pars_fragment:Zg,clipping_planes_pars_vertex:Jg,clipping_planes_vertex:jg,color_fragment:Qg,color_pars_fragment:t0,color_pars_vertex:e0,color_vertex:n0,common:i0,cube_uv_reflection_fragment:s0,defaultnormal_vertex:r0,displacementmap_pars_vertex:a0,displacementmap_vertex:o0,emissivemap_fragment:l0,emissivemap_pars_fragment:c0,colorspace_fragment:h0,colorspace_pars_fragment:u0,envmap_fragment:d0,envmap_common_pars_fragment:f0,envmap_pars_fragment:p0,envmap_pars_vertex:m0,envmap_physical_pars_fragment:A0,envmap_vertex:g0,fog_vertex:_0,fog_pars_vertex:x0,fog_fragment:y0,fog_pars_fragment:v0,gradientmap_pars_fragment:M0,lightmap_fragment:S0,lightmap_pars_fragment:b0,lights_lambert_fragment:E0,lights_lambert_pars_fragment:T0,lights_pars_begin:w0,lights_toon_fragment:R0,lights_toon_pars_fragment:C0,lights_phong_fragment:P0,lights_phong_pars_fragment:I0,lights_physical_fragment:L0,lights_physical_pars_fragment:D0,lights_fragment_begin:U0,lights_fragment_maps:N0,lights_fragment_end:O0,logdepthbuf_fragment:F0,logdepthbuf_pars_fragment:B0,logdepthbuf_pars_vertex:k0,logdepthbuf_vertex:H0,map_fragment:z0,map_pars_fragment:G0,map_particle_fragment:V0,map_particle_pars_fragment:W0,metalnessmap_fragment:$0,metalnessmap_pars_fragment:X0,morphcolor_vertex:q0,morphnormal_vertex:Y0,morphtarget_pars_vertex:K0,morphtarget_vertex:Z0,normal_fragment_begin:J0,normal_fragment_maps:j0,normal_pars_fragment:Q0,normal_pars_vertex:t_,normal_vertex:e_,normalmap_pars_fragment:n_,clearcoat_normal_fragment_begin:i_,clearcoat_normal_fragment_maps:s_,clearcoat_pars_fragment:r_,iridescence_pars_fragment:a_,opaque_fragment:o_,packing:l_,premultiplied_alpha_fragment:c_,project_vertex:h_,dithering_fragment:u_,dithering_pars_fragment:d_,roughnessmap_fragment:f_,roughnessmap_pars_fragment:p_,shadowmap_pars_fragment:m_,shadowmap_pars_vertex:g_,shadowmap_vertex:__,shadowmask_pars_fragment:x_,skinbase_vertex:y_,skinning_pars_vertex:v_,skinning_vertex:M_,skinnormal_vertex:S_,specularmap_fragment:b_,specularmap_pars_fragment:E_,tonemapping_fragment:T_,tonemapping_pars_fragment:w_,transmission_fragment:A_,transmission_pars_fragment:R_,uv_pars_fragment:C_,uv_pars_vertex:P_,uv_vertex:I_,worldpos_vertex:L_,background_vert:D_,background_frag:U_,backgroundCube_vert:N_,backgroundCube_frag:O_,cube_vert:F_,cube_frag:B_,depth_vert:k_,depth_frag:H_,distanceRGBA_vert:z_,distanceRGBA_frag:G_,equirect_vert:V_,equirect_frag:W_,linedashed_vert:$_,linedashed_frag:X_,meshbasic_vert:q_,meshbasic_frag:Y_,meshlambert_vert:K_,meshlambert_frag:Z_,meshmatcap_vert:J_,meshmatcap_frag:j_,meshnormal_vert:Q_,meshnormal_frag:tx,meshphong_vert:ex,meshphong_frag:nx,meshphysical_vert:ix,meshphysical_frag:sx,meshtoon_vert:rx,meshtoon_frag:ax,points_vert:ox,points_frag:lx,shadow_vert:cx,shadow_frag:hx,sprite_vert:ux,sprite_frag:dx},ft={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},Cn={basic:{uniforms:ze([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:ze([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new kt(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:ze([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:ze([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:ze([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new kt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:ze([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:ze([ft.points,ft.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:ze([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:ze([ft.common,ft.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:ze([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:ze([ft.sprite,ft.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:ze([ft.common,ft.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:ze([ft.lights,ft.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};Cn.physical={uniforms:ze([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};var la={r:0,b:0,g:0};function fx(i,t,e,n,s,r,a){let o=new kt(0),l=r===!0?0:1,c,h,u=null,d=0,p=null;function _(m,f){let y=!1,x=f.isScene===!0?f.background:null;x&&x.isTexture&&(x=(f.backgroundBlurriness>0?e:t).get(x)),x===null?g(o,l):x&&x.isColor&&(g(x,1),y=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===qa)?(h===void 0&&(h=new yt(new Je(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:gs(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,M,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=jt.getTransfer(x.colorSpace)!==ae,(u!==x||d!==x.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,p=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new yt(new je(2,2),new $n({name:"BackgroundMaterial",uniforms:gs(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=jt.getTransfer(x.colorSpace)!==ae,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,f){m.getRGB(la,tf(i)),n.buffers.color.setClear(la.r,la.g,la.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),l=f,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(o,l)},render:_}}function px(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null),c=l,h=!1;function u(I,B,$,k,C){let L=!1;if(a){let K=g(k,$,B);c!==K&&(c=K,p(c.object)),L=f(I,k,$,C),L&&y(I,k,$,C)}else{let K=B.wireframe===!0;(c.geometry!==k.id||c.program!==$.id||c.wireframe!==K)&&(c.geometry=k.id,c.program=$.id,c.wireframe=K,L=!0)}C!==null&&e.update(C,i.ELEMENT_ARRAY_BUFFER),(L||h)&&(h=!1,D(I,B,$,k),C!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(C).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(I){return n.isWebGL2?i.bindVertexArray(I):r.bindVertexArrayOES(I)}function _(I){return n.isWebGL2?i.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function g(I,B,$){let k=$.wireframe===!0,C=o[I.id];C===void 0&&(C={},o[I.id]=C);let L=C[B.id];L===void 0&&(L={},C[B.id]=L);let K=L[k];return K===void 0&&(K=m(d()),L[k]=K),K}function m(I){let B=[],$=[],k=[];for(let C=0;C<s;C++)B[C]=0,$[C]=0,k[C]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:$,attributeDivisors:k,object:I,attributes:{},index:null}}function f(I,B,$,k){let C=c.attributes,L=B.attributes,K=0,Z=$.getAttributes();for(let J in Z)if(Z[J].location>=0){let Y=C[J],st=L[J];if(st===void 0&&(J==="instanceMatrix"&&I.instanceMatrix&&(st=I.instanceMatrix),J==="instanceColor"&&I.instanceColor&&(st=I.instanceColor)),Y===void 0||Y.attribute!==st||st&&Y.data!==st.data)return!0;K++}return c.attributesNum!==K||c.index!==k}function y(I,B,$,k){let C={},L=B.attributes,K=0,Z=$.getAttributes();for(let J in Z)if(Z[J].location>=0){let Y=L[J];Y===void 0&&(J==="instanceMatrix"&&I.instanceMatrix&&(Y=I.instanceMatrix),J==="instanceColor"&&I.instanceColor&&(Y=I.instanceColor));let st={};st.attribute=Y,Y&&Y.data&&(st.data=Y.data),C[J]=st,K++}c.attributes=C,c.attributesNum=K,c.index=k}function x(){let I=c.newAttributes;for(let B=0,$=I.length;B<$;B++)I[B]=0}function b(I){R(I,0)}function R(I,B){let $=c.newAttributes,k=c.enabledAttributes,C=c.attributeDivisors;$[I]=1,k[I]===0&&(i.enableVertexAttribArray(I),k[I]=1),C[I]!==B&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,B),C[I]=B)}function M(){let I=c.newAttributes,B=c.enabledAttributes;for(let $=0,k=B.length;$<k;$++)B[$]!==I[$]&&(i.disableVertexAttribArray($),B[$]=0)}function S(I,B,$,k,C,L,K){K===!0?i.vertexAttribIPointer(I,B,$,C,L):i.vertexAttribPointer(I,B,$,k,C,L)}function D(I,B,$,k){if(n.isWebGL2===!1&&(I.isInstancedMesh||k.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();let C=k.attributes,L=$.getAttributes(),K=B.defaultAttributeValues;for(let Z in L){let J=L[Z];if(J.location>=0){let G=C[Z];if(G===void 0&&(Z==="instanceMatrix"&&I.instanceMatrix&&(G=I.instanceMatrix),Z==="instanceColor"&&I.instanceColor&&(G=I.instanceColor)),G!==void 0){let Y=G.normalized,st=G.itemSize,ht=e.get(G);if(ht===void 0)continue;let lt=ht.buffer,mt=ht.type,gt=ht.bytesPerElement,Et=n.isWebGL2===!0&&(mt===i.INT||mt===i.UNSIGNED_INT||G.gpuType===Gd);if(G.isInterleavedBufferAttribute){let Lt=G.data,H=Lt.stride,he=G.offset;if(Lt.isInstancedInterleavedBuffer){for(let Tt=0;Tt<J.locationSize;Tt++)R(J.location+Tt,Lt.meshPerAttribute);I.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Lt.meshPerAttribute*Lt.count)}else for(let Tt=0;Tt<J.locationSize;Tt++)b(J.location+Tt);i.bindBuffer(i.ARRAY_BUFFER,lt);for(let Tt=0;Tt<J.locationSize;Tt++)S(J.location+Tt,st/J.locationSize,mt,Y,H*gt,(he+st/J.locationSize*Tt)*gt,Et)}else{if(G.isInstancedBufferAttribute){for(let Lt=0;Lt<J.locationSize;Lt++)R(J.location+Lt,G.meshPerAttribute);I.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let Lt=0;Lt<J.locationSize;Lt++)b(J.location+Lt);i.bindBuffer(i.ARRAY_BUFFER,lt);for(let Lt=0;Lt<J.locationSize;Lt++)S(J.location+Lt,st/J.locationSize,mt,Y,st*gt,st/J.locationSize*Lt*gt,Et)}}else if(K!==void 0){let Y=K[Z];if(Y!==void 0)switch(Y.length){case 2:i.vertexAttrib2fv(J.location,Y);break;case 3:i.vertexAttrib3fv(J.location,Y);break;case 4:i.vertexAttrib4fv(J.location,Y);break;default:i.vertexAttrib1fv(J.location,Y)}}}}M()}function v(){X();for(let I in o){let B=o[I];for(let $ in B){let k=B[$];for(let C in k)_(k[C].object),delete k[C];delete B[$]}delete o[I]}}function T(I){if(o[I.id]===void 0)return;let B=o[I.id];for(let $ in B){let k=B[$];for(let C in k)_(k[C].object),delete k[C];delete B[$]}delete o[I.id]}function O(I){for(let B in o){let $=o[B];if($[I.id]===void 0)continue;let k=$[I.id];for(let C in k)_(k[C].object),delete k[C];delete $[I.id]}}function X(){j(),h=!0,c!==l&&(c=l,p(c.object))}function j(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:X,resetDefaultState:j,dispose:v,releaseStatesOfGeometry:T,releaseStatesOfProgram:O,initAttributes:x,enableAttribute:b,disableUnusedAttributes:M}}function mx(i,t,e,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,u){i.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,d){if(d===0)return;let p,_;if(s)p=i,_="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[_](r,h,u,d),e.update(u,r,d)}function c(h,u,d){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<d;_++)this.render(h[_],u[_]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,d);let _=0;for(let g=0;g<d;g++)_+=u[g];e.update(_,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function gx(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let S=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,b=a||t.has("OES_texture_float"),R=x&&b,M=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:b,floatVertexTextures:R,maxSamples:M}}function _x(i){let t=this,e=null,n=0,s=!1,r=!1,a=new yn,o=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||_===null||_.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,x=y*4,b=f.clippingState||null;l.value=b,b=h(_,d,x,p);for(let R=0;R!==x;++R)b[R]=e[R];f.clippingState=b,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,_){let g=u!==null?u.length:0,m=null;if(g!==0){if(m=l.value,_!==!0||m===null){let f=p+g*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,b=p;x!==g;++x,b+=4)a.copy(u[x]).applyMatrix4(y,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function xx(i){let t=new WeakMap;function e(a,o){return o===Al?a.mapping=ds:o===Rl&&(a.mapping=fs),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Al||o===Rl)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Ol(l.height/2);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ia=class extends Ca{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},as=4,sd=[.125,.215,.35,.446,.526,.582],Ti=20,ml=new Ia,rd=new kt,gl=null,_l=0,xl=0,bi=(1+Math.sqrt(5))/2,is=1/bi,ad=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,bi,is),new P(0,bi,-is),new P(is,0,bi),new P(-is,0,bi),new P(bi,is,0),new P(-bi,is,0)],_s=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){gl=this._renderer.getRenderTarget(),_l=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ld(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(gl,_l,xl),t.scissorTest=!1,ca(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ds||t.mapping===fs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),gl=this._renderer.getRenderTarget(),_l=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ve,minFilter:Ve,generateMipmaps:!1,type:Qs,format:Mn,colorSpace:Gn,depthBuffer:!1},s=od(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=od(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yx(r)),this._blurMaterial=vx(r,t,e)}return s}_compileMaterial(t){let e=new yt(this._lodPlanes[0],t);this._renderer.compile(e,ml)}_sceneToCubeUV(t,e,n,s){let o=new We(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(rd),h.toneMapping=oi,h.autoClear=!1;let p=new le({name:"PMREM.Background",side:Ze,depthWrite:!1,depthTest:!1}),_=new yt(new Je,p),g=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,g=!0):(p.color.copy(rd),g=!0);for(let f=0;f<6;f++){let y=f%3;y===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):y===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));let x=this._cubeSize;ca(s,y*x,f>2?x:0,x,x),h.setRenderTarget(s),g&&h.render(_,o),h.render(t,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ds||t.mapping===fs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=cd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ld());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new yt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;ca(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ml)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=ad[(s-1)%ad.length];this._blur(t,s-1,s,r,a)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new yt(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ti-1),g=r/_,m=isFinite(r)?1+Math.floor(h*g):Ti;m>Ti&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ti}`);let f=[],y=0;for(let S=0;S<Ti;++S){let D=S/g,v=Math.exp(-D*D/2);f.push(v),S===0?y+=v:S<m&&(y+=2*v)}for(let S=0;S<f.length;S++)f[S]=f[S]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:x}=this;d.dTheta.value=_,d.mipInt.value=x-n;let b=this._sizeLods[s],R=3*b*(s>x-as?s-x+as:0),M=4*(this._cubeSize-b);ca(e,R,M,3*b,2*b),l.setRenderTarget(e),l.render(u,ml)}};function yx(i){let t=[],e=[],n=[],s=i,r=i-as+1+sd.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-as?l=sd[a-i+as-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,_=6,g=3,m=2,f=1,y=new Float32Array(g*_*p),x=new Float32Array(m*_*p),b=new Float32Array(f*_*p);for(let M=0;M<p;M++){let S=M%3*2/3-1,D=M>2?0:-1,v=[S,D,0,S+2/3,D,0,S+2/3,D+1,0,S,D,0,S+2/3,D+1,0,S,D+1,0];y.set(v,g*_*M),x.set(d,m*_*M);let T=[M,M,M,M,M,M];b.set(T,f*_*M)}let R=new be;R.setAttribute("position",new Pe(y,g)),R.setAttribute("uv",new Pe(x,m)),R.setAttribute("faceIndex",new Pe(b,f)),t.push(R),s>as&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function od(i,t,e){let n=new Vn(i,t,e);return n.texture.mapping=qa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ca(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function vx(i,t,e){let n=new Float32Array(Ti),s=new P(0,1,0);return new $n({name:"SphericalGaussianBlur",defines:{n:Ti,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:vc(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function ld(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vc(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function cd(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function vc(){return`

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
	`}function Mx(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Al||l===Rl,h=l===ds||l===fs;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new _s(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{let u=o.image;if(c&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new _s(i));let d=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Sx(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function bx(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let _ in d.attributes)t.remove(d.attributes[_]);for(let _ in d.morphAttributes){let g=d.morphAttributes[_];for(let m=0,f=g.length;m<f;m++)t.remove(g[m])}d.removeEventListener("dispose",a),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let _ in d)t.update(d[_],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let _ in p){let g=p[_];for(let m=0,f=g.length;m<f;m++)t.update(g[m],i.ARRAY_BUFFER)}}function c(u){let d=[],p=u.index,_=u.attributes.position,g=0;if(p!==null){let y=p.array;g=p.version;for(let x=0,b=y.length;x<b;x+=3){let R=y[x+0],M=y[x+1],S=y[x+2];d.push(R,M,M,S,S,R)}}else if(_!==void 0){let y=_.array;g=_.version;for(let x=0,b=y.length/3-1;x<b;x+=3){let R=x+0,M=x+1,S=x+2;d.push(R,M,M,S,S,R)}}else return;let m=new(jd(d)?Ra:Aa)(d,1);m.version=g;let f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Ex(i,t,e,n){let s=n.isWebGL2,r;function a(p){r=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function h(p,_){i.drawElements(r,_,o,p*l),e.update(_,r,1)}function u(p,_,g){if(g===0)return;let m,f;if(s)m=i,f="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,_,o,p*l,g),e.update(_,r,g)}function d(p,_,g){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<g;f++)this.render(p[f]/l,_[f]);else{m.multiDrawElementsWEBGL(r,_,0,o,p,0,g);let f=0;for(let y=0;y<g;y++)f+=_[y];e.update(f,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Tx(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function wx(i,t){return i[0]-t[0]}function Ax(i,t){return Math.abs(t[1])-Math.abs(i[1])}function Rx(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,a=new Ce,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){let d=c.morphTargetInfluences;if(t.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=p!==void 0?p.length:0,g=r.get(h);if(g===void 0||g.count!==_){let I=function(){X.dispose(),r.delete(h),h.removeEventListener("dispose",I)};g!==void 0&&g.texture.dispose();let y=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],M=h.morphAttributes.normal||[],S=h.morphAttributes.color||[],D=0;y===!0&&(D=1),x===!0&&(D=2),b===!0&&(D=3);let v=h.attributes.position.count*D,T=1;v>t.maxTextureSize&&(T=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let O=new Float32Array(v*T*4*_),X=new wa(O,v,T,_);X.type=ri,X.needsUpdate=!0;let j=D*4;for(let B=0;B<_;B++){let $=R[B],k=M[B],C=S[B],L=v*T*4*B;for(let K=0;K<$.count;K++){let Z=K*j;y===!0&&(a.fromBufferAttribute($,K),O[L+Z+0]=a.x,O[L+Z+1]=a.y,O[L+Z+2]=a.z,O[L+Z+3]=0),x===!0&&(a.fromBufferAttribute(k,K),O[L+Z+4]=a.x,O[L+Z+5]=a.y,O[L+Z+6]=a.z,O[L+Z+7]=0),b===!0&&(a.fromBufferAttribute(C,K),O[L+Z+8]=a.x,O[L+Z+9]=a.y,O[L+Z+10]=a.z,O[L+Z+11]=C.itemSize===4?a.w:1)}}g={count:_,texture:X,size:new pt(v,T)},r.set(h,g),h.addEventListener("dispose",I)}let m=0;for(let y=0;y<d.length;y++)m+=d[y];let f=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",f),u.getUniforms().setValue(i,"morphTargetInfluences",d),u.getUniforms().setValue(i,"morphTargetsTexture",g.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}else{let p=d===void 0?0:d.length,_=n[h.id];if(_===void 0||_.length!==p){_=[];for(let x=0;x<p;x++)_[x]=[x,0];n[h.id]=_}for(let x=0;x<p;x++){let b=_[x];b[0]=x,b[1]=d[x]}_.sort(Ax);for(let x=0;x<8;x++)x<p&&_[x][1]?(o[x][0]=_[x][0],o[x][1]=_[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(wx);let g=h.morphAttributes.position,m=h.morphAttributes.normal,f=0;for(let x=0;x<8;x++){let b=o[x],R=b[0],M=b[1];R!==Number.MAX_SAFE_INTEGER&&M?(g&&h.getAttribute("morphTarget"+x)!==g[R]&&h.setAttribute("morphTarget"+x,g[R]),m&&h.getAttribute("morphNormal"+x)!==m[R]&&h.setAttribute("morphNormal"+x,m[R]),s[x]=M,f+=M):(g&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),m&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),s[x]=0)}let y=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(i,"morphTargetBaseInfluence",y),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Cx(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var La=class extends cn{constructor(t,e,n,s,r,a,o,l,c,h){if(h=h!==void 0?h:Ai,h!==Ai&&h!==ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ai&&(n=si),n===void 0&&h===ps&&(n=wi),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ge,this.minFilter=l!==void 0?l:Ge,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},nf=new cn,sf=new La(1,1);sf.compareFunction=Jd;var rf=new wa,af=new Ul,of=new Pa,hd=[],ud=[],dd=new Float32Array(16),fd=new Float32Array(9),pd=new Float32Array(4);function bs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=hd[s];if(r===void 0&&(r=new Float32Array(s),hd[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ee(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Te(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ka(i,t){let e=ud[t];e===void 0&&(e=new Int32Array(t),ud[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Px(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ix(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2fv(this.addr,t),Te(e,t)}}function Lx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;i.uniform3fv(this.addr,t),Te(e,t)}}function Dx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4fv(this.addr,t),Te(e,t)}}function Ux(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;pd.set(n),i.uniformMatrix2fv(this.addr,!1,pd),Te(e,n)}}function Nx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;fd.set(n),i.uniformMatrix3fv(this.addr,!1,fd),Te(e,n)}}function Ox(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;dd.set(n),i.uniformMatrix4fv(this.addr,!1,dd),Te(e,n)}}function Fx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Bx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2iv(this.addr,t),Te(e,t)}}function kx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3iv(this.addr,t),Te(e,t)}}function Hx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4iv(this.addr,t),Te(e,t)}}function zx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Gx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2uiv(this.addr,t),Te(e,t)}}function Vx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3uiv(this.addr,t),Te(e,t)}}function Wx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4uiv(this.addr,t),Te(e,t)}}function $x(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?sf:nf;e.setTexture2D(t||r,s)}function Xx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||af,s)}function qx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||of,s)}function Yx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||rf,s)}function Kx(i){switch(i){case 5126:return Px;case 35664:return Ix;case 35665:return Lx;case 35666:return Dx;case 35674:return Ux;case 35675:return Nx;case 35676:return Ox;case 5124:case 35670:return Fx;case 35667:case 35671:return Bx;case 35668:case 35672:return kx;case 35669:case 35673:return Hx;case 5125:return zx;case 36294:return Gx;case 36295:return Vx;case 36296:return Wx;case 35678:case 36198:case 36298:case 36306:case 35682:return $x;case 35679:case 36299:case 36307:return Xx;case 35680:case 36300:case 36308:case 36293:return qx;case 36289:case 36303:case 36311:case 36292:return Yx}}function Zx(i,t){i.uniform1fv(this.addr,t)}function Jx(i,t){let e=bs(t,this.size,2);i.uniform2fv(this.addr,e)}function jx(i,t){let e=bs(t,this.size,3);i.uniform3fv(this.addr,e)}function Qx(i,t){let e=bs(t,this.size,4);i.uniform4fv(this.addr,e)}function ty(i,t){let e=bs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function ey(i,t){let e=bs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function ny(i,t){let e=bs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function iy(i,t){i.uniform1iv(this.addr,t)}function sy(i,t){i.uniform2iv(this.addr,t)}function ry(i,t){i.uniform3iv(this.addr,t)}function ay(i,t){i.uniform4iv(this.addr,t)}function oy(i,t){i.uniform1uiv(this.addr,t)}function ly(i,t){i.uniform2uiv(this.addr,t)}function cy(i,t){i.uniform3uiv(this.addr,t)}function hy(i,t){i.uniform4uiv(this.addr,t)}function uy(i,t,e){let n=this.cache,s=t.length,r=Ka(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||nf,r[a])}function dy(i,t,e){let n=this.cache,s=t.length,r=Ka(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||af,r[a])}function fy(i,t,e){let n=this.cache,s=t.length,r=Ka(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||of,r[a])}function py(i,t,e){let n=this.cache,s=t.length,r=Ka(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||rf,r[a])}function my(i){switch(i){case 5126:return Zx;case 35664:return Jx;case 35665:return jx;case 35666:return Qx;case 35674:return ty;case 35675:return ey;case 35676:return ny;case 5124:case 35670:return iy;case 35667:case 35671:return sy;case 35668:case 35672:return ry;case 35669:case 35673:return ay;case 5125:return oy;case 36294:return ly;case 36295:return cy;case 36296:return hy;case 35678:case 36198:case 36298:case 36306:case 35682:return uy;case 35679:case 36299:case 36307:return dy;case 35680:case 36300:case 36308:case 36293:return fy;case 36289:case 36303:case 36311:case 36292:return py}}var Fl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Kx(e.type)}},Bl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=my(e.type)}},kl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},yl=/(\w+)(\])?(\[|\.)?/g;function md(i,t){i.seq.push(t),i.map[t.id]=t}function gy(i,t,e){let n=i.name,s=n.length;for(yl.lastIndex=0;;){let r=yl.exec(n),a=yl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){md(e,c===void 0?new Fl(o,i,t):new Bl(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new kl(o),md(e,u)),e=u}}}var us=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);gy(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function gd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var _y=37297,xy=0;function yy(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function vy(i){let t=jt.getPrimaries(jt.workingColorSpace),e=jt.getPrimaries(i),n;switch(t===e?n="":t===Ma&&e===va?n="LinearDisplayP3ToLinearSRGB":t===va&&e===Ma&&(n="LinearSRGBToLinearDisplayP3"),i){case Gn:case Ya:return[n,"LinearTransferOETF"];case Se:case yc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function _d(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+yy(i.getShaderSource(t),a)}else return s}function My(i,t){let e=vy(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Sy(i,t){let e;switch(t){case zm:e="Linear";break;case Gm:e="Reinhard";break;case Vm:e="OptimizedCineon";break;case _c:e="ACESFilmic";break;case $m:e="AgX";break;case Wm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function by(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(os).join(`
`)}function Ey(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(os).join(`
`)}function Ty(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function wy(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function os(i){return i!==""}function xd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function yd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ay=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hl(i){return i.replace(Ay,Cy)}var Ry=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Cy(i,t){let e=$t[t];if(e===void 0){let n=Ry.get(t);if(n!==void 0)e=$t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Hl(e)}var Py=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vd(i){return i.replace(Py,Iy)}function Iy(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Md(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Ly(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Xa?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===mm?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Hn&&(t="SHADOWMAP_TYPE_VSM"),t}function Dy(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ds:case fs:t="ENVMAP_TYPE_CUBE";break;case qa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Uy(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case fs:t="ENVMAP_MODE_REFRACTION";break}return t}function Ny(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Hd:t="ENVMAP_BLENDING_MULTIPLY";break;case km:t="ENVMAP_BLENDING_MIX";break;case Hm:t="ENVMAP_BLENDING_ADD";break}return t}function Oy(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Fy(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Ly(e),c=Dy(e),h=Uy(e),u=Ny(e),d=Oy(e),p=e.isWebGL2?"":by(e),_=Ey(e),g=Ty(r),m=s.createProgram(),f,y,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(os).join(`
`),f.length>0&&(f+=`
`),y=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(os).join(`
`),y.length>0&&(y+=`
`)):(f=[Md(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(os).join(`
`),y=[p,Md(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==oi?"#define TONE_MAPPING":"",e.toneMapping!==oi?$t.tonemapping_pars_fragment:"",e.toneMapping!==oi?Sy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,My("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(os).join(`
`)),a=Hl(a),a=xd(a,e),a=yd(a,e),o=Hl(o),o=xd(o,e),o=yd(o,e),a=vd(a),o=vd(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Hu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Hu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let b=x+f+a,R=x+y+o,M=gd(s,s.VERTEX_SHADER,b),S=gd(s,s.FRAGMENT_SHADER,R);s.attachShader(m,M),s.attachShader(m,S),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function D(X){if(i.debug.checkShaderErrors){let j=s.getProgramInfoLog(m).trim(),I=s.getShaderInfoLog(M).trim(),B=s.getShaderInfoLog(S).trim(),$=!0,k=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,M,S);else{let C=_d(s,M,"vertex"),L=_d(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+j+`
`+C+`
`+L)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(I===""||B==="")&&(k=!1);k&&(X.diagnostics={runnable:$,programLog:j,vertexShader:{log:I,prefix:f},fragmentShader:{log:B,prefix:y}})}s.deleteShader(M),s.deleteShader(S),v=new us(s,m),T=wy(s,m)}let v;this.getUniforms=function(){return v===void 0&&D(this),v};let T;this.getAttributes=function(){return T===void 0&&D(this),T};let O=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(m,_y)),O},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=xy++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=S,this}var By=0,zl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Gl(t),e.set(t,n)),n}},Gl=class{constructor(t){this.id=By++,this.code=t,this.usedTimes=0}};function ky(i,t,e,n,s,r,a){let o=new er,l=new zl,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return v===0?"uv":`uv${v}`}function m(v,T,O,X,j){let I=X.fog,B=j.geometry,$=v.isMeshStandardMaterial?X.environment:null,k=(v.isMeshStandardMaterial?e:t).get(v.envMap||$),C=k&&k.mapping===qa?k.image.height:null,L=_[v.type];v.precision!==null&&(p=s.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));let K=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Z=K!==void 0?K.length:0,J=0;B.morphAttributes.position!==void 0&&(J=1),B.morphAttributes.normal!==void 0&&(J=2),B.morphAttributes.color!==void 0&&(J=3);let G,Y,st,ht;if(L){let ke=Cn[L];G=ke.vertexShader,Y=ke.fragmentShader}else G=v.vertexShader,Y=v.fragmentShader,l.update(v),st=l.getVertexShaderID(v),ht=l.getFragmentShaderID(v);let lt=i.getRenderTarget(),mt=j.isInstancedMesh===!0,gt=j.isBatchedMesh===!0,Et=!!v.map,Lt=!!v.matcap,H=!!k,he=!!v.aoMap,Tt=!!v.lightMap,Pt=!!v.bumpMap,xt=!!v.normalMap,zt=!!v.displacementMap,It=!!v.emissiveMap,A=!!v.metalnessMap,E=!!v.roughnessMap,z=v.anisotropy>0,Q=v.clearcoat>0,tt=v.iridescence>0,et=v.sheen>0,bt=v.transmission>0,_t=z&&!!v.anisotropyMap,Mt=Q&&!!v.clearcoatMap,Dt=Q&&!!v.clearcoatNormalMap,Vt=Q&&!!v.clearcoatRoughnessMap,N=tt&&!!v.iridescenceMap,nt=tt&&!!v.iridescenceThicknessMap,at=et&&!!v.sheenColorMap,ct=et&&!!v.sheenRoughnessMap,ut=!!v.specularMap,it=!!v.specularColorMap,St=!!v.specularIntensityMap,Ot=bt&&!!v.transmissionMap,Kt=bt&&!!v.thicknessMap,Ct=!!v.gradientMap,rt=!!v.alphaMap,U=v.alphaTest>0,ot=!!v.alphaHash,dt=!!v.extensions,Ft=!!B.attributes.uv1,Ut=!!B.attributes.uv2,ne=!!B.attributes.uv3,ie=oi;return v.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(ie=i.toneMapping),{isWebGL2:h,shaderID:L,shaderType:v.type,shaderName:v.name,vertexShader:G,fragmentShader:Y,defines:v.defines,customVertexShaderID:st,customFragmentShaderID:ht,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:gt,instancing:mt,instancingColor:mt&&j.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:lt===null?i.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Gn,map:Et,matcap:Lt,envMap:H,envMapMode:H&&k.mapping,envMapCubeUVHeight:C,aoMap:he,lightMap:Tt,bumpMap:Pt,normalMap:xt,displacementMap:d&&zt,emissiveMap:It,normalMapObjectSpace:xt&&v.normalMapType===ig,normalMapTangentSpace:xt&&v.normalMapType===Zd,metalnessMap:A,roughnessMap:E,anisotropy:z,anisotropyMap:_t,clearcoat:Q,clearcoatMap:Mt,clearcoatNormalMap:Dt,clearcoatRoughnessMap:Vt,iridescence:tt,iridescenceMap:N,iridescenceThicknessMap:nt,sheen:et,sheenColorMap:at,sheenRoughnessMap:ct,specularMap:ut,specularColorMap:it,specularIntensityMap:St,transmission:bt,transmissionMap:Ot,thicknessMap:Kt,gradientMap:Ct,opaque:v.transparent===!1&&v.blending===cs,alphaMap:rt,alphaTest:U,alphaHash:ot,combine:v.combine,mapUv:Et&&g(v.map.channel),aoMapUv:he&&g(v.aoMap.channel),lightMapUv:Tt&&g(v.lightMap.channel),bumpMapUv:Pt&&g(v.bumpMap.channel),normalMapUv:xt&&g(v.normalMap.channel),displacementMapUv:zt&&g(v.displacementMap.channel),emissiveMapUv:It&&g(v.emissiveMap.channel),metalnessMapUv:A&&g(v.metalnessMap.channel),roughnessMapUv:E&&g(v.roughnessMap.channel),anisotropyMapUv:_t&&g(v.anisotropyMap.channel),clearcoatMapUv:Mt&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Vt&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:N&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:at&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:ct&&g(v.sheenRoughnessMap.channel),specularMapUv:ut&&g(v.specularMap.channel),specularColorMapUv:it&&g(v.specularColorMap.channel),specularIntensityMapUv:St&&g(v.specularIntensityMap.channel),transmissionMapUv:Ot&&g(v.transmissionMap.channel),thicknessMapUv:Kt&&g(v.thicknessMap.channel),alphaMapUv:rt&&g(v.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(xt||z),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:Ft,vertexUv2s:Ut,vertexUv3s:ne,pointsUvs:j.isPoints===!0&&!!B.attributes.uv&&(Et||rt),fog:!!I,useFog:v.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:j.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:J,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:ie,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Et&&v.map.isVideoTexture===!0&&jt.getTransfer(v.map.colorSpace)===ae,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===_e,flipSided:v.side===Ze,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:dt&&v.extensions.derivatives===!0,extensionFragDepth:dt&&v.extensions.fragDepth===!0,extensionDrawBuffers:dt&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:dt&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:dt&&v.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function f(v){let T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(let O in v.defines)T.push(O),T.push(v.defines[O]);return v.isRawShaderMaterial===!1&&(y(T,v),x(T,v),T.push(i.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function y(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function x(v,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),v.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),v.push(o.mask)}function b(v){let T=_[v.type],O;if(T){let X=Cn[T];O=Rg.clone(X.uniforms)}else O=v.uniforms;return O}function R(v,T){let O;for(let X=0,j=c.length;X<j;X++){let I=c[X];if(I.cacheKey===T){O=I,++O.usedTimes;break}}return O===void 0&&(O=new Fy(i,T,v,r),c.push(O)),O}function M(v){if(--v.usedTimes===0){let T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),v.destroy()}}function S(v){l.remove(v)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:b,acquireProgram:R,releaseProgram:M,releaseShaderCache:S,programs:c,dispose:D}}function Hy(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function zy(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Sd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function bd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,p,_,g,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=_,f.renderOrder=u.renderOrder,f.z=g,f.group=m),t++,f}function o(u,d,p,_,g,m){let f=a(u,d,p,_,g,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(u,d,p,_,g,m){let f=a(u,d,p,_,g,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||zy),n.length>1&&n.sort(d||Sd),s.length>1&&s.sort(d||Sd)}function h(){for(let u=t,d=i.length;u<d;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Gy(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new bd,i.set(n,[a])):s>=r.length?(a=new bd,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Vy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new kt};break;case"SpotLight":e={position:new P,direction:new P,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function Wy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var $y=0;function Xy(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function qy(i,t){let e=new Vy,n=Wy(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new P);let r=new P,a=new oe,o=new oe;function l(h,u){let d=0,p=0,_=0;for(let X=0;X<9;X++)s.probe[X].set(0,0,0);let g=0,m=0,f=0,y=0,x=0,b=0,R=0,M=0,S=0,D=0,v=0;h.sort(Xy);let T=u===!0?Math.PI:1;for(let X=0,j=h.length;X<j;X++){let I=h[X],B=I.color,$=I.intensity,k=I.distance,C=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=B.r*$*T,p+=B.g*$*T,_+=B.b*$*T;else if(I.isLightProbe){for(let L=0;L<9;L++)s.probe[L].addScaledVector(I.sh.coefficients[L],$);v++}else if(I.isDirectionalLight){let L=e.get(I);if(L.color.copy(I.color).multiplyScalar(I.intensity*T),I.castShadow){let K=I.shadow,Z=n.get(I);Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,s.directionalShadow[g]=Z,s.directionalShadowMap[g]=C,s.directionalShadowMatrix[g]=I.shadow.matrix,b++}s.directional[g]=L,g++}else if(I.isSpotLight){let L=e.get(I);L.position.setFromMatrixPosition(I.matrixWorld),L.color.copy(B).multiplyScalar($*T),L.distance=k,L.coneCos=Math.cos(I.angle),L.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),L.decay=I.decay,s.spot[f]=L;let K=I.shadow;if(I.map&&(s.spotLightMap[S]=I.map,S++,K.updateMatrices(I),I.castShadow&&D++),s.spotLightMatrix[f]=K.matrix,I.castShadow){let Z=n.get(I);Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,s.spotShadow[f]=Z,s.spotShadowMap[f]=C,M++}f++}else if(I.isRectAreaLight){let L=e.get(I);L.color.copy(B).multiplyScalar($),L.halfWidth.set(I.width*.5,0,0),L.halfHeight.set(0,I.height*.5,0),s.rectArea[y]=L,y++}else if(I.isPointLight){let L=e.get(I);if(L.color.copy(I.color).multiplyScalar(I.intensity*T),L.distance=I.distance,L.decay=I.decay,I.castShadow){let K=I.shadow,Z=n.get(I);Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,Z.shadowCameraNear=K.camera.near,Z.shadowCameraFar=K.camera.far,s.pointShadow[m]=Z,s.pointShadowMap[m]=C,s.pointShadowMatrix[m]=I.shadow.matrix,R++}s.point[m]=L,m++}else if(I.isHemisphereLight){let L=e.get(I);L.skyColor.copy(I.color).multiplyScalar($*T),L.groundColor.copy(I.groundColor).multiplyScalar($*T),s.hemi[x]=L,x++}}y>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ft.LTC_FLOAT_1,s.rectAreaLTC2=ft.LTC_FLOAT_2):(s.rectAreaLTC1=ft.LTC_HALF_1,s.rectAreaLTC2=ft.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ft.LTC_FLOAT_1,s.rectAreaLTC2=ft.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ft.LTC_HALF_1,s.rectAreaLTC2=ft.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=p,s.ambient[2]=_;let O=s.hash;(O.directionalLength!==g||O.pointLength!==m||O.spotLength!==f||O.rectAreaLength!==y||O.hemiLength!==x||O.numDirectionalShadows!==b||O.numPointShadows!==R||O.numSpotShadows!==M||O.numSpotMaps!==S||O.numLightProbes!==v)&&(s.directional.length=g,s.spot.length=f,s.rectArea.length=y,s.point.length=m,s.hemi.length=x,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=M,s.spotShadowMap.length=M,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=M+S-D,s.spotLightMap.length=S,s.numSpotLightShadowsWithMaps=D,s.numLightProbes=v,O.directionalLength=g,O.pointLength=m,O.spotLength=f,O.rectAreaLength=y,O.hemiLength=x,O.numDirectionalShadows=b,O.numPointShadows=R,O.numSpotShadows=M,O.numSpotMaps=S,O.numLightProbes=v,s.version=$y++)}function c(h,u){let d=0,p=0,_=0,g=0,m=0,f=u.matrixWorldInverse;for(let y=0,x=h.length;y<x;y++){let b=h[y];if(b.isDirectionalLight){let R=s.directional[d];R.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(f),d++}else if(b.isSpotLight){let R=s.spot[_];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(f),R.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(f),_++}else if(b.isRectAreaLight){let R=s.rectArea[g];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(f),o.identity(),a.copy(b.matrixWorld),a.premultiply(f),o.extractRotation(a),R.halfWidth.set(b.width*.5,0,0),R.halfHeight.set(0,b.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){let R=s.point[p];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(f),p++}else if(b.isHemisphereLight){let R=s.hemi[m];R.direction.setFromMatrixPosition(b.matrixWorld),R.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:s}}function Ed(i,t){let e=new qy(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function a(u){n.push(u)}function o(u){s.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Yy(i,t){let e=new WeakMap;function n(r,a=0){let o=e.get(r),l;return o===void 0?(l=new Ed(i,t),e.set(r,[l])):a>=o.length?(l=new Ed(i,t),o.push(l)):l=o[a],l}function s(){e=new WeakMap}return{get:n,dispose:s}}var Vl=class extends di{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Wl=class extends di{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Ky=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zy=`uniform sampler2D shadow_pass;
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
}`;function Jy(i,t,e){let n=new nr,s=new pt,r=new pt,a=new Ce,o=new Vl({depthPacking:ng}),l=new Wl,c={},h=e.maxTextureSize,u={[ci]:Ze,[Ze]:ci,[_e]:_e},d=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:Ky,fragmentShader:Zy}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let _=new be;_.setAttribute("position",new Pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new yt(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xa;let f=this.type;this.render=function(M,S,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;let v=i.getRenderTarget(),T=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),X=i.state;X.setBlending(ai),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);let j=f!==Hn&&this.type===Hn,I=f===Hn&&this.type!==Hn;for(let B=0,$=M.length;B<$;B++){let k=M[B],C=k.shadow;if(C===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(C.autoUpdate===!1&&C.needsUpdate===!1)continue;s.copy(C.mapSize);let L=C.getFrameExtents();if(s.multiply(L),r.copy(C.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/L.x),s.x=r.x*L.x,C.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/L.y),s.y=r.y*L.y,C.mapSize.y=r.y)),C.map===null||j===!0||I===!0){let Z=this.type!==Hn?{minFilter:Ge,magFilter:Ge}:{};C.map!==null&&C.map.dispose(),C.map=new Vn(s.x,s.y,Z),C.map.texture.name=k.name+".shadowMap",C.camera.updateProjectionMatrix()}i.setRenderTarget(C.map),i.clear();let K=C.getViewportCount();for(let Z=0;Z<K;Z++){let J=C.getViewport(Z);a.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),X.viewport(a),C.updateMatrices(k,Z),n=C.getFrustum(),b(S,D,C.camera,k,this.type)}C.isPointLightShadow!==!0&&this.type===Hn&&y(C,D),C.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(v,T,O)};function y(M,S){let D=t.update(g);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Vn(s.x,s.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(S,null,D,d,g,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(S,null,D,p,g,null)}function x(M,S,D,v){let T=null,O=D.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(O!==void 0)T=O;else if(T=D.isPointLight===!0?l:o,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){let X=T.uuid,j=S.uuid,I=c[X];I===void 0&&(I={},c[X]=I);let B=I[j];B===void 0&&(B=T.clone(),I[j]=B,S.addEventListener("dispose",R)),T=B}if(T.visible=S.visible,T.wireframe=S.wireframe,v===Hn?T.side=S.shadowSide!==null?S.shadowSide:S.side:T.side=S.shadowSide!==null?S.shadowSide:u[S.side],T.alphaMap=S.alphaMap,T.alphaTest=S.alphaTest,T.map=S.map,T.clipShadows=S.clipShadows,T.clippingPlanes=S.clippingPlanes,T.clipIntersection=S.clipIntersection,T.displacementMap=S.displacementMap,T.displacementScale=S.displacementScale,T.displacementBias=S.displacementBias,T.wireframeLinewidth=S.wireframeLinewidth,T.linewidth=S.linewidth,D.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let X=i.properties.get(T);X.light=D}return T}function b(M,S,D,v,T){if(M.visible===!1)return;if(M.layers.test(S.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&T===Hn)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,M.matrixWorld);let j=t.update(M),I=M.material;if(Array.isArray(I)){let B=j.groups;for(let $=0,k=B.length;$<k;$++){let C=B[$],L=I[C.materialIndex];if(L&&L.visible){let K=x(M,L,v,T);M.onBeforeShadow(i,M,S,D,j,K,C),i.renderBufferDirect(D,null,j,K,M,C),M.onAfterShadow(i,M,S,D,j,K,C)}}}else if(I.visible){let B=x(M,I,v,T);M.onBeforeShadow(i,M,S,D,j,B,null),i.renderBufferDirect(D,null,j,B,M,null),M.onAfterShadow(i,M,S,D,j,B,null)}}let X=M.children;for(let j=0,I=X.length;j<I;j++)b(X[j],S,D,v,T)}function R(M){M.target.removeEventListener("dispose",R);for(let D in c){let v=c[D],T=M.target.uuid;T in v&&(v[T].dispose(),delete v[T])}}}function jy(i,t,e){let n=e.isWebGL2;function s(){let U=!1,ot=new Ce,dt=null,Ft=new Ce(0,0,0,0);return{setMask:function(Ut){dt!==Ut&&!U&&(i.colorMask(Ut,Ut,Ut,Ut),dt=Ut)},setLocked:function(Ut){U=Ut},setClear:function(Ut,ne,ie,we,ke){ke===!0&&(Ut*=we,ne*=we,ie*=we),ot.set(Ut,ne,ie,we),Ft.equals(ot)===!1&&(i.clearColor(Ut,ne,ie,we),Ft.copy(ot))},reset:function(){U=!1,dt=null,Ft.set(-1,0,0,0)}}}function r(){let U=!1,ot=null,dt=null,Ft=null;return{setTest:function(Ut){Ut?gt(i.DEPTH_TEST):Et(i.DEPTH_TEST)},setMask:function(Ut){ot!==Ut&&!U&&(i.depthMask(Ut),ot=Ut)},setFunc:function(Ut){if(dt!==Ut){switch(Ut){case Lm:i.depthFunc(i.NEVER);break;case Dm:i.depthFunc(i.ALWAYS);break;case Um:i.depthFunc(i.LESS);break;case ga:i.depthFunc(i.LEQUAL);break;case Nm:i.depthFunc(i.EQUAL);break;case Om:i.depthFunc(i.GEQUAL);break;case Fm:i.depthFunc(i.GREATER);break;case Bm:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}dt=Ut}},setLocked:function(Ut){U=Ut},setClear:function(Ut){Ft!==Ut&&(i.clearDepth(Ut),Ft=Ut)},reset:function(){U=!1,ot=null,dt=null,Ft=null}}}function a(){let U=!1,ot=null,dt=null,Ft=null,Ut=null,ne=null,ie=null,we=null,ke=null;return{setTest:function(se){U||(se?gt(i.STENCIL_TEST):Et(i.STENCIL_TEST))},setMask:function(se){ot!==se&&!U&&(i.stencilMask(se),ot=se)},setFunc:function(se,He,wn){(dt!==se||Ft!==He||Ut!==wn)&&(i.stencilFunc(se,He,wn),dt=se,Ft=He,Ut=wn)},setOp:function(se,He,wn){(ne!==se||ie!==He||we!==wn)&&(i.stencilOp(se,He,wn),ne=se,ie=He,we=wn)},setLocked:function(se){U=se},setClear:function(se){ke!==se&&(i.clearStencil(se),ke=se)},reset:function(){U=!1,ot=null,dt=null,Ft=null,Ut=null,ne=null,ie=null,we=null,ke=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,u=new WeakMap,d={},p={},_=new WeakMap,g=[],m=null,f=!1,y=null,x=null,b=null,R=null,M=null,S=null,D=null,v=new kt(0,0,0),T=0,O=!1,X=null,j=null,I=null,B=null,$=null,k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),C=!1,L=0,K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(K)[1]),C=L>=1):K.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),C=L>=2);let Z=null,J={},G=i.getParameter(i.SCISSOR_BOX),Y=i.getParameter(i.VIEWPORT),st=new Ce().fromArray(G),ht=new Ce().fromArray(Y);function lt(U,ot,dt,Ft){let Ut=new Uint8Array(4),ne=i.createTexture();i.bindTexture(U,ne),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ie=0;ie<dt;ie++)n&&(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)?i.texImage3D(ot,0,i.RGBA,1,1,Ft,0,i.RGBA,i.UNSIGNED_BYTE,Ut):i.texImage2D(ot+ie,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ut);return ne}let mt={};mt[i.TEXTURE_2D]=lt(i.TEXTURE_2D,i.TEXTURE_2D,1),mt[i.TEXTURE_CUBE_MAP]=lt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(mt[i.TEXTURE_2D_ARRAY]=lt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),mt[i.TEXTURE_3D]=lt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),gt(i.DEPTH_TEST),l.setFunc(ga),It(!1),A(iu),gt(i.CULL_FACE),xt(ai);function gt(U){d[U]!==!0&&(i.enable(U),d[U]=!0)}function Et(U){d[U]!==!1&&(i.disable(U),d[U]=!1)}function Lt(U,ot){return p[U]!==ot?(i.bindFramebuffer(U,ot),p[U]=ot,n&&(U===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=ot),U===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=ot)),!0):!1}function H(U,ot){let dt=g,Ft=!1;if(U)if(dt=_.get(ot),dt===void 0&&(dt=[],_.set(ot,dt)),U.isWebGLMultipleRenderTargets){let Ut=U.texture;if(dt.length!==Ut.length||dt[0]!==i.COLOR_ATTACHMENT0){for(let ne=0,ie=Ut.length;ne<ie;ne++)dt[ne]=i.COLOR_ATTACHMENT0+ne;dt.length=Ut.length,Ft=!0}}else dt[0]!==i.COLOR_ATTACHMENT0&&(dt[0]=i.COLOR_ATTACHMENT0,Ft=!0);else dt[0]!==i.BACK&&(dt[0]=i.BACK,Ft=!0);Ft&&(e.isWebGL2?i.drawBuffers(dt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(dt))}function he(U){return m!==U?(i.useProgram(U),m=U,!0):!1}let Tt={[Ei]:i.FUNC_ADD,[_m]:i.FUNC_SUBTRACT,[xm]:i.FUNC_REVERSE_SUBTRACT};if(n)Tt[ou]=i.MIN,Tt[lu]=i.MAX;else{let U=t.get("EXT_blend_minmax");U!==null&&(Tt[ou]=U.MIN_EXT,Tt[lu]=U.MAX_EXT)}let Pt={[ym]:i.ZERO,[vm]:i.ONE,[Mm]:i.SRC_COLOR,[Tl]:i.SRC_ALPHA,[Am]:i.SRC_ALPHA_SATURATE,[Tm]:i.DST_COLOR,[bm]:i.DST_ALPHA,[Sm]:i.ONE_MINUS_SRC_COLOR,[wl]:i.ONE_MINUS_SRC_ALPHA,[wm]:i.ONE_MINUS_DST_COLOR,[Em]:i.ONE_MINUS_DST_ALPHA,[Rm]:i.CONSTANT_COLOR,[Cm]:i.ONE_MINUS_CONSTANT_COLOR,[Pm]:i.CONSTANT_ALPHA,[Im]:i.ONE_MINUS_CONSTANT_ALPHA};function xt(U,ot,dt,Ft,Ut,ne,ie,we,ke,se){if(U===ai){f===!0&&(Et(i.BLEND),f=!1);return}if(f===!1&&(gt(i.BLEND),f=!0),U!==gm){if(U!==y||se!==O){if((x!==Ei||M!==Ei)&&(i.blendEquation(i.FUNC_ADD),x=Ei,M=Ei),se)switch(U){case cs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case su:i.blendFunc(i.ONE,i.ONE);break;case ru:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case au:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case cs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case su:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ru:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case au:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}b=null,R=null,S=null,D=null,v.set(0,0,0),T=0,y=U,O=se}return}Ut=Ut||ot,ne=ne||dt,ie=ie||Ft,(ot!==x||Ut!==M)&&(i.blendEquationSeparate(Tt[ot],Tt[Ut]),x=ot,M=Ut),(dt!==b||Ft!==R||ne!==S||ie!==D)&&(i.blendFuncSeparate(Pt[dt],Pt[Ft],Pt[ne],Pt[ie]),b=dt,R=Ft,S=ne,D=ie),(we.equals(v)===!1||ke!==T)&&(i.blendColor(we.r,we.g,we.b,ke),v.copy(we),T=ke),y=U,O=!1}function zt(U,ot){U.side===_e?Et(i.CULL_FACE):gt(i.CULL_FACE);let dt=U.side===Ze;ot&&(dt=!dt),It(dt),U.blending===cs&&U.transparent===!1?xt(ai):xt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),o.setMask(U.colorWrite);let Ft=U.stencilWrite;c.setTest(Ft),Ft&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),z(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?gt(i.SAMPLE_ALPHA_TO_COVERAGE):Et(i.SAMPLE_ALPHA_TO_COVERAGE)}function It(U){X!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),X=U)}function A(U){U!==fm?(gt(i.CULL_FACE),U!==j&&(U===iu?i.cullFace(i.BACK):U===pm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Et(i.CULL_FACE),j=U}function E(U){U!==I&&(C&&i.lineWidth(U),I=U)}function z(U,ot,dt){U?(gt(i.POLYGON_OFFSET_FILL),(B!==ot||$!==dt)&&(i.polygonOffset(ot,dt),B=ot,$=dt)):Et(i.POLYGON_OFFSET_FILL)}function Q(U){U?gt(i.SCISSOR_TEST):Et(i.SCISSOR_TEST)}function tt(U){U===void 0&&(U=i.TEXTURE0+k-1),Z!==U&&(i.activeTexture(U),Z=U)}function et(U,ot,dt){dt===void 0&&(Z===null?dt=i.TEXTURE0+k-1:dt=Z);let Ft=J[dt];Ft===void 0&&(Ft={type:void 0,texture:void 0},J[dt]=Ft),(Ft.type!==U||Ft.texture!==ot)&&(Z!==dt&&(i.activeTexture(dt),Z=dt),i.bindTexture(U,ot||mt[U]),Ft.type=U,Ft.texture=ot)}function bt(){let U=J[Z];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function _t(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Mt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Dt(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Vt(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function N(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function nt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function at(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ct(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ut(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function it(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function St(U){st.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),st.copy(U))}function Ot(U){ht.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),ht.copy(U))}function Kt(U,ot){let dt=u.get(ot);dt===void 0&&(dt=new WeakMap,u.set(ot,dt));let Ft=dt.get(U);Ft===void 0&&(Ft=i.getUniformBlockIndex(ot,U.name),dt.set(U,Ft))}function Ct(U,ot){let Ft=u.get(ot).get(U);h.get(ot)!==Ft&&(i.uniformBlockBinding(ot,Ft,U.__bindingPointIndex),h.set(ot,Ft))}function rt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},Z=null,J={},p={},_=new WeakMap,g=[],m=null,f=!1,y=null,x=null,b=null,R=null,M=null,S=null,D=null,v=new kt(0,0,0),T=0,O=!1,X=null,j=null,I=null,B=null,$=null,st.set(0,0,i.canvas.width,i.canvas.height),ht.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:gt,disable:Et,bindFramebuffer:Lt,drawBuffers:H,useProgram:he,setBlending:xt,setMaterial:zt,setFlipSided:It,setCullFace:A,setLineWidth:E,setPolygonOffset:z,setScissorTest:Q,activeTexture:tt,bindTexture:et,unbindTexture:bt,compressedTexImage2D:_t,compressedTexImage3D:Mt,texImage2D:ut,texImage3D:it,updateUBOMapping:Kt,uniformBlockBinding:Ct,texStorage2D:at,texStorage3D:ct,texSubImage2D:Dt,texSubImage3D:Vt,compressedTexSubImage2D:N,compressedTexSubImage3D:nt,scissor:St,viewport:Ot,reset:rt}}function Qy(i,t,e,n,s,r,a){let o=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,E){return p?new OffscreenCanvas(A,E):ba("canvas")}function g(A,E,z,Q){let tt=1;if((A.width>Q||A.height>Q)&&(tt=Q/Math.max(A.width,A.height)),tt<1||E===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){let et=E?Ll:Math.floor,bt=et(tt*A.width),_t=et(tt*A.height);u===void 0&&(u=_(bt,_t));let Mt=z?_(bt,_t):u;return Mt.width=bt,Mt.height=_t,Mt.getContext("2d").drawImage(A,0,0,bt,_t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+bt+"x"+_t+")."),Mt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return zu(A.width)&&zu(A.height)}function f(A){return o?!1:A.wrapS!==vn||A.wrapT!==vn||A.minFilter!==Ge&&A.minFilter!==Ve}function y(A,E){return A.generateMipmaps&&E&&A.minFilter!==Ge&&A.minFilter!==Ve}function x(A){i.generateMipmap(A)}function b(A,E,z,Q,tt=!1){if(o===!1)return E;if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let et=E;if(E===i.RED&&(z===i.FLOAT&&(et=i.R32F),z===i.HALF_FLOAT&&(et=i.R16F),z===i.UNSIGNED_BYTE&&(et=i.R8)),E===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(et=i.R8UI),z===i.UNSIGNED_SHORT&&(et=i.R16UI),z===i.UNSIGNED_INT&&(et=i.R32UI),z===i.BYTE&&(et=i.R8I),z===i.SHORT&&(et=i.R16I),z===i.INT&&(et=i.R32I)),E===i.RG&&(z===i.FLOAT&&(et=i.RG32F),z===i.HALF_FLOAT&&(et=i.RG16F),z===i.UNSIGNED_BYTE&&(et=i.RG8)),E===i.RGBA){let bt=tt?ya:jt.getTransfer(Q);z===i.FLOAT&&(et=i.RGBA32F),z===i.HALF_FLOAT&&(et=i.RGBA16F),z===i.UNSIGNED_BYTE&&(et=bt===ae?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function R(A,E,z){return y(A,z)===!0||A.isFramebufferTexture&&A.minFilter!==Ge&&A.minFilter!==Ve?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function M(A){return A===Ge||A===cu||A===Vo?i.NEAREST:i.LINEAR}function S(A){let E=A.target;E.removeEventListener("dispose",S),v(E),E.isVideoTexture&&h.delete(E)}function D(A){let E=A.target;E.removeEventListener("dispose",D),O(E)}function v(A){let E=n.get(A);if(E.__webglInit===void 0)return;let z=A.source,Q=d.get(z);if(Q){let tt=Q[E.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&T(A),Object.keys(Q).length===0&&d.delete(z)}n.remove(A)}function T(A){let E=n.get(A);i.deleteTexture(E.__webglTexture);let z=A.source,Q=d.get(z);delete Q[E.__cacheKey],a.memory.textures--}function O(A){let E=A.texture,z=n.get(A),Q=n.get(E);if(Q.__webglTexture!==void 0&&(i.deleteTexture(Q.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(z.__webglFramebuffer[tt]))for(let et=0;et<z.__webglFramebuffer[tt].length;et++)i.deleteFramebuffer(z.__webglFramebuffer[tt][et]);else i.deleteFramebuffer(z.__webglFramebuffer[tt]);z.__webglDepthbuffer&&i.deleteRenderbuffer(z.__webglDepthbuffer[tt])}else{if(Array.isArray(z.__webglFramebuffer))for(let tt=0;tt<z.__webglFramebuffer.length;tt++)i.deleteFramebuffer(z.__webglFramebuffer[tt]);else i.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&i.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&i.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let tt=0;tt<z.__webglColorRenderbuffer.length;tt++)z.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(z.__webglColorRenderbuffer[tt]);z.__webglDepthRenderbuffer&&i.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let tt=0,et=E.length;tt<et;tt++){let bt=n.get(E[tt]);bt.__webglTexture&&(i.deleteTexture(bt.__webglTexture),a.memory.textures--),n.remove(E[tt])}n.remove(E),n.remove(A)}let X=0;function j(){X=0}function I(){let A=X;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),X+=1,A}function B(A){let E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function $(A,E){let z=n.get(A);if(A.isVideoTexture&&zt(A),A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){let Q=A.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{st(z,A,E);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+E)}function k(A,E){let z=n.get(A);if(A.version>0&&z.__version!==A.version){st(z,A,E);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+E)}function C(A,E){let z=n.get(A);if(A.version>0&&z.__version!==A.version){st(z,A,E);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+E)}function L(A,E){let z=n.get(A);if(A.version>0&&z.__version!==A.version){ht(z,A,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+E)}let K={[Js]:i.REPEAT,[vn]:i.CLAMP_TO_EDGE,[Cl]:i.MIRRORED_REPEAT},Z={[Ge]:i.NEAREST,[cu]:i.NEAREST_MIPMAP_NEAREST,[Vo]:i.NEAREST_MIPMAP_LINEAR,[Ve]:i.LINEAR,[Xm]:i.LINEAR_MIPMAP_NEAREST,[js]:i.LINEAR_MIPMAP_LINEAR},J={[sg]:i.NEVER,[hg]:i.ALWAYS,[rg]:i.LESS,[Jd]:i.LEQUAL,[ag]:i.EQUAL,[cg]:i.GEQUAL,[og]:i.GREATER,[lg]:i.NOTEQUAL};function G(A,E,z){if(z?(i.texParameteri(A,i.TEXTURE_WRAP_S,K[E.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,K[E.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,K[E.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Z[E.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Z[E.minFilter])):(i.texParameteri(A,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(A,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(E.wrapS!==vn||E.wrapT!==vn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(A,i.TEXTURE_MAG_FILTER,M(E.magFilter)),i.texParameteri(A,i.TEXTURE_MIN_FILTER,M(E.minFilter)),E.minFilter!==Ge&&E.minFilter!==Ve&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,J[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let Q=t.get("EXT_texture_filter_anisotropic");if(E.magFilter===Ge||E.minFilter!==Vo&&E.minFilter!==js||E.type===ri&&t.has("OES_texture_float_linear")===!1||o===!1&&E.type===Qs&&t.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(i.texParameterf(A,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function Y(A,E){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",S));let Q=E.source,tt=d.get(Q);tt===void 0&&(tt={},d.set(Q,tt));let et=B(E);if(et!==A.__cacheKey){tt[et]===void 0&&(tt[et]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),tt[et].usedTimes++;let bt=tt[A.__cacheKey];bt!==void 0&&(tt[A.__cacheKey].usedTimes--,bt.usedTimes===0&&T(E)),A.__cacheKey=et,A.__webglTexture=tt[et].texture}return z}function st(A,E,z){let Q=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Q=i.TEXTURE_3D);let tt=Y(A,E),et=E.source;e.bindTexture(Q,A.__webglTexture,i.TEXTURE0+z);let bt=n.get(et);if(et.version!==bt.__version||tt===!0){e.activeTexture(i.TEXTURE0+z);let _t=jt.getPrimaries(jt.workingColorSpace),Mt=E.colorSpace===ln?null:jt.getPrimaries(E.colorSpace),Dt=E.colorSpace===ln||_t===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);let Vt=f(E)&&m(E.image)===!1,N=g(E.image,Vt,!1,s.maxTextureSize);N=It(E,N);let nt=m(N)||o,at=r.convert(E.format,E.colorSpace),ct=r.convert(E.type),ut=b(E.internalFormat,at,ct,E.colorSpace,E.isVideoTexture);G(Q,E,nt);let it,St=E.mipmaps,Ot=o&&E.isVideoTexture!==!0&&ut!==Yd,Kt=bt.__version===void 0||tt===!0,Ct=R(E,N,nt);if(E.isDepthTexture)ut=i.DEPTH_COMPONENT,o?E.type===ri?ut=i.DEPTH_COMPONENT32F:E.type===si?ut=i.DEPTH_COMPONENT24:E.type===wi?ut=i.DEPTH24_STENCIL8:ut=i.DEPTH_COMPONENT16:E.type===ri&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Ai&&ut===i.DEPTH_COMPONENT&&E.type!==xc&&E.type!==si&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=si,ct=r.convert(E.type)),E.format===ps&&ut===i.DEPTH_COMPONENT&&(ut=i.DEPTH_STENCIL,E.type!==wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=wi,ct=r.convert(E.type))),Kt&&(Ot?e.texStorage2D(i.TEXTURE_2D,1,ut,N.width,N.height):e.texImage2D(i.TEXTURE_2D,0,ut,N.width,N.height,0,at,ct,null));else if(E.isDataTexture)if(St.length>0&&nt){Ot&&Kt&&e.texStorage2D(i.TEXTURE_2D,Ct,ut,St[0].width,St[0].height);for(let rt=0,U=St.length;rt<U;rt++)it=St[rt],Ot?e.texSubImage2D(i.TEXTURE_2D,rt,0,0,it.width,it.height,at,ct,it.data):e.texImage2D(i.TEXTURE_2D,rt,ut,it.width,it.height,0,at,ct,it.data);E.generateMipmaps=!1}else Ot?(Kt&&e.texStorage2D(i.TEXTURE_2D,Ct,ut,N.width,N.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,N.width,N.height,at,ct,N.data)):e.texImage2D(i.TEXTURE_2D,0,ut,N.width,N.height,0,at,ct,N.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ot&&Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,ut,St[0].width,St[0].height,N.depth);for(let rt=0,U=St.length;rt<U;rt++)it=St[rt],E.format!==Mn?at!==null?Ot?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,it.width,it.height,N.depth,at,it.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,rt,ut,it.width,it.height,N.depth,0,it.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?e.texSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,it.width,it.height,N.depth,at,ct,it.data):e.texImage3D(i.TEXTURE_2D_ARRAY,rt,ut,it.width,it.height,N.depth,0,at,ct,it.data)}else{Ot&&Kt&&e.texStorage2D(i.TEXTURE_2D,Ct,ut,St[0].width,St[0].height);for(let rt=0,U=St.length;rt<U;rt++)it=St[rt],E.format!==Mn?at!==null?Ot?e.compressedTexSubImage2D(i.TEXTURE_2D,rt,0,0,it.width,it.height,at,it.data):e.compressedTexImage2D(i.TEXTURE_2D,rt,ut,it.width,it.height,0,it.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?e.texSubImage2D(i.TEXTURE_2D,rt,0,0,it.width,it.height,at,ct,it.data):e.texImage2D(i.TEXTURE_2D,rt,ut,it.width,it.height,0,at,ct,it.data)}else if(E.isDataArrayTexture)Ot?(Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,ut,N.width,N.height,N.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,N.width,N.height,N.depth,at,ct,N.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,ut,N.width,N.height,N.depth,0,at,ct,N.data);else if(E.isData3DTexture)Ot?(Kt&&e.texStorage3D(i.TEXTURE_3D,Ct,ut,N.width,N.height,N.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,N.width,N.height,N.depth,at,ct,N.data)):e.texImage3D(i.TEXTURE_3D,0,ut,N.width,N.height,N.depth,0,at,ct,N.data);else if(E.isFramebufferTexture){if(Kt)if(Ot)e.texStorage2D(i.TEXTURE_2D,Ct,ut,N.width,N.height);else{let rt=N.width,U=N.height;for(let ot=0;ot<Ct;ot++)e.texImage2D(i.TEXTURE_2D,ot,ut,rt,U,0,at,ct,null),rt>>=1,U>>=1}}else if(St.length>0&&nt){Ot&&Kt&&e.texStorage2D(i.TEXTURE_2D,Ct,ut,St[0].width,St[0].height);for(let rt=0,U=St.length;rt<U;rt++)it=St[rt],Ot?e.texSubImage2D(i.TEXTURE_2D,rt,0,0,at,ct,it):e.texImage2D(i.TEXTURE_2D,rt,ut,at,ct,it);E.generateMipmaps=!1}else Ot?(Kt&&e.texStorage2D(i.TEXTURE_2D,Ct,ut,N.width,N.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,at,ct,N)):e.texImage2D(i.TEXTURE_2D,0,ut,at,ct,N);y(E,nt)&&x(Q),bt.__version=et.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function ht(A,E,z){if(E.image.length!==6)return;let Q=Y(A,E),tt=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+z);let et=n.get(tt);if(tt.version!==et.__version||Q===!0){e.activeTexture(i.TEXTURE0+z);let bt=jt.getPrimaries(jt.workingColorSpace),_t=E.colorSpace===ln?null:jt.getPrimaries(E.colorSpace),Mt=E.colorSpace===ln||bt===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let Dt=E.isCompressedTexture||E.image[0].isCompressedTexture,Vt=E.image[0]&&E.image[0].isDataTexture,N=[];for(let rt=0;rt<6;rt++)!Dt&&!Vt?N[rt]=g(E.image[rt],!1,!0,s.maxCubemapSize):N[rt]=Vt?E.image[rt].image:E.image[rt],N[rt]=It(E,N[rt]);let nt=N[0],at=m(nt)||o,ct=r.convert(E.format,E.colorSpace),ut=r.convert(E.type),it=b(E.internalFormat,ct,ut,E.colorSpace),St=o&&E.isVideoTexture!==!0,Ot=et.__version===void 0||Q===!0,Kt=R(E,nt,at);G(i.TEXTURE_CUBE_MAP,E,at);let Ct;if(Dt){St&&Ot&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Kt,it,nt.width,nt.height);for(let rt=0;rt<6;rt++){Ct=N[rt].mipmaps;for(let U=0;U<Ct.length;U++){let ot=Ct[U];E.format!==Mn?ct!==null?St?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,U,0,0,ot.width,ot.height,ct,ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,U,it,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):St?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,U,0,0,ot.width,ot.height,ct,ut,ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,U,it,ot.width,ot.height,0,ct,ut,ot.data)}}}else{Ct=E.mipmaps,St&&Ot&&(Ct.length>0&&Kt++,e.texStorage2D(i.TEXTURE_CUBE_MAP,Kt,it,N[0].width,N[0].height));for(let rt=0;rt<6;rt++)if(Vt){St?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,N[rt].width,N[rt].height,ct,ut,N[rt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,it,N[rt].width,N[rt].height,0,ct,ut,N[rt].data);for(let U=0;U<Ct.length;U++){let dt=Ct[U].image[rt].image;St?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,U+1,0,0,dt.width,dt.height,ct,ut,dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,U+1,it,dt.width,dt.height,0,ct,ut,dt.data)}}else{St?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,ct,ut,N[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,it,ct,ut,N[rt]);for(let U=0;U<Ct.length;U++){let ot=Ct[U];St?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,U+1,0,0,ct,ut,ot.image[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,U+1,it,ct,ut,ot.image[rt])}}}y(E,at)&&x(i.TEXTURE_CUBE_MAP),et.__version=tt.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function lt(A,E,z,Q,tt,et){let bt=r.convert(z.format,z.colorSpace),_t=r.convert(z.type),Mt=b(z.internalFormat,bt,_t,z.colorSpace);if(!n.get(E).__hasExternalTextures){let Vt=Math.max(1,E.width>>et),N=Math.max(1,E.height>>et);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,et,Mt,Vt,N,E.depth,0,bt,_t,null):e.texImage2D(tt,et,Mt,Vt,N,0,bt,_t,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),xt(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,tt,n.get(z).__webglTexture,0,Pt(E)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,tt,n.get(z).__webglTexture,et),e.bindFramebuffer(i.FRAMEBUFFER,null)}function mt(A,E,z){if(i.bindRenderbuffer(i.RENDERBUFFER,A),E.depthBuffer&&!E.stencilBuffer){let Q=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(z||xt(E)){let tt=E.depthTexture;tt&&tt.isDepthTexture&&(tt.type===ri?Q=i.DEPTH_COMPONENT32F:tt.type===si&&(Q=i.DEPTH_COMPONENT24));let et=Pt(E);xt(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et,Q,E.width,E.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,et,Q,E.width,E.height)}else i.renderbufferStorage(i.RENDERBUFFER,Q,E.width,E.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,A)}else if(E.depthBuffer&&E.stencilBuffer){let Q=Pt(E);z&&xt(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,i.DEPTH24_STENCIL8,E.width,E.height):xt(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q,i.DEPTH24_STENCIL8,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,A)}else{let Q=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let tt=0;tt<Q.length;tt++){let et=Q[tt],bt=r.convert(et.format,et.colorSpace),_t=r.convert(et.type),Mt=b(et.internalFormat,bt,_t,et.colorSpace),Dt=Pt(E);z&&xt(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,Mt,E.width,E.height):xt(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Dt,Mt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Mt,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function gt(A,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),$(E.depthTexture,0);let Q=n.get(E.depthTexture).__webglTexture,tt=Pt(E);if(E.depthTexture.format===Ai)xt(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(E.depthTexture.format===ps)xt(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Et(A){let E=n.get(A),z=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!E.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");gt(E.__webglFramebuffer,A)}else if(z){E.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[Q]),E.__webglDepthbuffer[Q]=i.createRenderbuffer(),mt(E.__webglDepthbuffer[Q],A,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=i.createRenderbuffer(),mt(E.__webglDepthbuffer,A,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(A,E,z){let Q=n.get(A);E!==void 0&&lt(Q.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Et(A)}function H(A){let E=A.texture,z=n.get(A),Q=n.get(E);A.addEventListener("dispose",D),A.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=E.version,a.memory.textures++);let tt=A.isWebGLCubeRenderTarget===!0,et=A.isWebGLMultipleRenderTargets===!0,bt=m(A)||o;if(tt){z.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(o&&E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer[_t]=[];for(let Mt=0;Mt<E.mipmaps.length;Mt++)z.__webglFramebuffer[_t][Mt]=i.createFramebuffer()}else z.__webglFramebuffer[_t]=i.createFramebuffer()}else{if(o&&E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer=[];for(let _t=0;_t<E.mipmaps.length;_t++)z.__webglFramebuffer[_t]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(et)if(s.drawBuffers){let _t=A.texture;for(let Mt=0,Dt=_t.length;Mt<Dt;Mt++){let Vt=n.get(_t[Mt]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&xt(A)===!1){let _t=et?E:[E];z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Mt=0;Mt<_t.length;Mt++){let Dt=_t[Mt];z.__webglColorRenderbuffer[Mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[Mt]);let Vt=r.convert(Dt.format,Dt.colorSpace),N=r.convert(Dt.type),nt=b(Dt.internalFormat,Vt,N,Dt.colorSpace,A.isXRRenderTarget===!0),at=Pt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,at,nt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,z.__webglColorRenderbuffer[Mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),mt(z.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(tt){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),G(i.TEXTURE_CUBE_MAP,E,bt);for(let _t=0;_t<6;_t++)if(o&&E.mipmaps&&E.mipmaps.length>0)for(let Mt=0;Mt<E.mipmaps.length;Mt++)lt(z.__webglFramebuffer[_t][Mt],A,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Mt);else lt(z.__webglFramebuffer[_t],A,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);y(E,bt)&&x(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(et){let _t=A.texture;for(let Mt=0,Dt=_t.length;Mt<Dt;Mt++){let Vt=_t[Mt],N=n.get(Vt);e.bindTexture(i.TEXTURE_2D,N.__webglTexture),G(i.TEXTURE_2D,Vt,bt),lt(z.__webglFramebuffer,A,Vt,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,0),y(Vt,bt)&&x(i.TEXTURE_2D)}e.unbindTexture()}else{let _t=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?_t=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(_t,Q.__webglTexture),G(_t,E,bt),o&&E.mipmaps&&E.mipmaps.length>0)for(let Mt=0;Mt<E.mipmaps.length;Mt++)lt(z.__webglFramebuffer[Mt],A,E,i.COLOR_ATTACHMENT0,_t,Mt);else lt(z.__webglFramebuffer,A,E,i.COLOR_ATTACHMENT0,_t,0);y(E,bt)&&x(_t),e.unbindTexture()}A.depthBuffer&&Et(A)}function he(A){let E=m(A)||o,z=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let Q=0,tt=z.length;Q<tt;Q++){let et=z[Q];if(y(et,E)){let bt=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,_t=n.get(et).__webglTexture;e.bindTexture(bt,_t),x(bt),e.unbindTexture()}}}function Tt(A){if(o&&A.samples>0&&xt(A)===!1){let E=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],z=A.width,Q=A.height,tt=i.COLOR_BUFFER_BIT,et=[],bt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=n.get(A),Mt=A.isWebGLMultipleRenderTargets===!0;if(Mt)for(let Dt=0;Dt<E.length;Dt++)e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let Dt=0;Dt<E.length;Dt++){et.push(i.COLOR_ATTACHMENT0+Dt),A.depthBuffer&&et.push(bt);let Vt=_t.__ignoreDepthValues!==void 0?_t.__ignoreDepthValues:!1;if(Vt===!1&&(A.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),Mt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_t.__webglColorRenderbuffer[Dt]),Vt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[bt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[bt])),Mt){let N=n.get(E[Dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,N,0)}i.blitFramebuffer(0,0,z,Q,0,0,z,Q,tt,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,et)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Mt)for(let Dt=0;Dt<E.length;Dt++){e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,_t.__webglColorRenderbuffer[Dt]);let Vt=n.get(E[Dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,Vt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}}function Pt(A){return Math.min(s.maxSamples,A.samples)}function xt(A){let E=n.get(A);return o&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function zt(A){let E=a.render.frame;h.get(A)!==E&&(h.set(A,E),A.update())}function It(A,E){let z=A.colorSpace,Q=A.format,tt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Pl||z!==Gn&&z!==ln&&(jt.getTransfer(z)===ae?o===!1?t.has("EXT_sRGB")===!0&&Q===Mn?(A.format=Pl,A.minFilter=Ve,A.generateMipmaps=!1):E=Ea.sRGBToLinear(E):(Q!==Mn||tt!==li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),E}this.allocateTextureUnit=I,this.resetTextureUnits=j,this.setTexture2D=$,this.setTexture2DArray=k,this.setTexture3D=C,this.setTextureCube=L,this.rebindTextures=Lt,this.setupRenderTarget=H,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=xt}function tv(i,t,e){let n=e.isWebGL2;function s(r,a=ln){let o,l=jt.getTransfer(a);if(r===li)return i.UNSIGNED_BYTE;if(r===Vd)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Wd)return i.UNSIGNED_SHORT_5_5_5_1;if(r===qm)return i.BYTE;if(r===Ym)return i.SHORT;if(r===xc)return i.UNSIGNED_SHORT;if(r===Gd)return i.INT;if(r===si)return i.UNSIGNED_INT;if(r===ri)return i.FLOAT;if(r===Qs)return n?i.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Km)return i.ALPHA;if(r===Mn)return i.RGBA;if(r===Zm)return i.LUMINANCE;if(r===Jm)return i.LUMINANCE_ALPHA;if(r===Ai)return i.DEPTH_COMPONENT;if(r===ps)return i.DEPTH_STENCIL;if(r===Pl)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===jm)return i.RED;if(r===$d)return i.RED_INTEGER;if(r===Qm)return i.RG;if(r===Xd)return i.RG_INTEGER;if(r===qd)return i.RGBA_INTEGER;if(r===Wo||r===$o||r===Xo||r===qo)if(l===ae)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Wo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===$o)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Xo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===qo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Wo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===$o)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Xo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===qo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===hu||r===uu||r===du||r===fu)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===hu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===uu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===du)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===fu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Yd)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===pu||r===mu)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===pu)return l===ae?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===mu)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===gu||r===_u||r===xu||r===yu||r===vu||r===Mu||r===Su||r===bu||r===Eu||r===Tu||r===wu||r===Au||r===Ru||r===Cu)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===gu)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===_u)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===xu)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===yu)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===vu)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Mu)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Su)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===bu)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Eu)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Tu)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===wu)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Au)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ru)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Cu)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Yo||r===Pu||r===Iu)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===Yo)return l===ae?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Pu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Iu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===tg||r===Lu||r===Du||r===Uu)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===Yo)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Lu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Du)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Uu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===wi?n?i.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var $l=class extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ve=class extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}},ev={type:"move"},qs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let g of t.hand.values()){let m=e.getJointPose(g,n),f=this._getHandJoint(c,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ev)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ve;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Xl=class extends hi{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,_=null,g=e.getContextAttributes(),m=null,f=null,y=[],x=[],b=new pt,R=null,M=new We;M.layers.enable(1),M.viewport=new Ce;let S=new We;S.layers.enable(2),S.viewport=new Ce;let D=[M,S],v=new $l;v.layers.enable(1),v.layers.enable(2);let T=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Y=y[G];return Y===void 0&&(Y=new qs,y[G]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(G){let Y=y[G];return Y===void 0&&(Y=new qs,y[G]=Y),Y.getGripSpace()},this.getHand=function(G){let Y=y[G];return Y===void 0&&(Y=new qs,y[G]=Y),Y.getHandSpace()};function X(G){let Y=x.indexOf(G.inputSource);if(Y===-1)return;let st=y[Y];st!==void 0&&(st.update(G.inputSource,G.frame,c||a),st.dispatchEvent({type:G.type,data:G.inputSource}))}function j(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",I);for(let G=0;G<y.length;G++){let Y=x[G];Y!==null&&(x[G]=null,y[G].disconnect(Y))}T=null,O=null,t.setRenderTarget(m),p=null,d=null,u=null,s=null,f=null,J.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",j),s.addEventListener("inputsourceschange",I),g.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(b),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let Y={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,Y),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new Vn(p.framebufferWidth,p.framebufferHeight,{format:Mn,type:li,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let Y=null,st=null,ht=null;g.depth&&(ht=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Y=g.stencil?ps:Ai,st=g.stencil?wi:si);let lt={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(lt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),f=new Vn(d.textureWidth,d.textureHeight,{format:Mn,type:li,depthTexture:new La(d.textureWidth,d.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0});let mt=t.properties.get(f);mt.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),J.setContext(s),J.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function I(G){for(let Y=0;Y<G.removed.length;Y++){let st=G.removed[Y],ht=x.indexOf(st);ht>=0&&(x[ht]=null,y[ht].disconnect(st))}for(let Y=0;Y<G.added.length;Y++){let st=G.added[Y],ht=x.indexOf(st);if(ht===-1){for(let mt=0;mt<y.length;mt++)if(mt>=x.length){x.push(st),ht=mt;break}else if(x[mt]===null){x[mt]=st,ht=mt;break}if(ht===-1)break}let lt=y[ht];lt&&lt.connect(st)}}let B=new P,$=new P;function k(G,Y,st){B.setFromMatrixPosition(Y.matrixWorld),$.setFromMatrixPosition(st.matrixWorld);let ht=B.distanceTo($),lt=Y.projectionMatrix.elements,mt=st.projectionMatrix.elements,gt=lt[14]/(lt[10]-1),Et=lt[14]/(lt[10]+1),Lt=(lt[9]+1)/lt[5],H=(lt[9]-1)/lt[5],he=(lt[8]-1)/lt[0],Tt=(mt[8]+1)/mt[0],Pt=gt*he,xt=gt*Tt,zt=ht/(-he+Tt),It=zt*-he;Y.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(It),G.translateZ(zt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();let A=gt+zt,E=Et+zt,z=Pt-It,Q=xt+(ht-It),tt=Lt*Et/E*A,et=H*Et/E*A;G.projectionMatrix.makePerspective(z,Q,tt,et,A,E),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function C(G,Y){Y===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Y.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;v.near=S.near=M.near=G.near,v.far=S.far=M.far=G.far,(T!==v.near||O!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),T=v.near,O=v.far);let Y=G.parent,st=v.cameras;C(v,Y);for(let ht=0;ht<st.length;ht++)C(st[ht],Y);st.length===2?k(v,M,S):v.projectionMatrix.copy(M.projectionMatrix),L(G,v,Y)};function L(G,Y,st){st===null?G.matrix.copy(Y.matrixWorld):(G.matrix.copy(st.matrixWorld),G.matrix.invert(),G.matrix.multiply(Y.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(Y.projectionMatrix),G.projectionMatrixInverse.copy(Y.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Il*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)};let K=null;function Z(G,Y){if(h=Y.getViewerPose(c||a),_=Y,h!==null){let st=h.views;p!==null&&(t.setRenderTargetFramebuffer(f,p.framebuffer),t.setRenderTarget(f));let ht=!1;st.length!==v.cameras.length&&(v.cameras.length=0,ht=!0);for(let lt=0;lt<st.length;lt++){let mt=st[lt],gt=null;if(p!==null)gt=p.getViewport(mt);else{let Lt=u.getViewSubImage(d,mt);gt=Lt.viewport,lt===0&&(t.setRenderTargetTextures(f,Lt.colorTexture,d.ignoreDepthValues?void 0:Lt.depthStencilTexture),t.setRenderTarget(f))}let Et=D[lt];Et===void 0&&(Et=new We,Et.layers.enable(lt),Et.viewport=new Ce,D[lt]=Et),Et.matrix.fromArray(mt.transform.matrix),Et.matrix.decompose(Et.position,Et.quaternion,Et.scale),Et.projectionMatrix.fromArray(mt.projectionMatrix),Et.projectionMatrixInverse.copy(Et.projectionMatrix).invert(),Et.viewport.set(gt.x,gt.y,gt.width,gt.height),lt===0&&(v.matrix.copy(Et.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ht===!0&&v.cameras.push(Et)}}for(let st=0;st<y.length;st++){let ht=x[st],lt=y[st];ht!==null&&lt!==void 0&&lt.update(ht,Y,c||a)}K&&K(G,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),_=null}let J=new ef;J.setAnimationLoop(Z),this.setAnimationLoop=function(G){K=G},this.dispose=function(){}}};function nv(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,tf(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,y,x,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,b)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),g(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,y,x):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ze&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ze&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let y=t.get(f).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;let x=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*x,e(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,y,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=x*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),t.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ze&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){let y=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function iv(i,t,e,n){let s={},r={},a=[],o=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,x){let b=x.program;n.uniformBlockBinding(y,b)}function c(y,x){let b=s[y.id];b===void 0&&(_(y),b=h(y),s[y.id]=b,y.addEventListener("dispose",m));let R=x.program;n.updateUBOMapping(y,R);let M=t.render.frame;r[y.id]!==M&&(d(y),r[y.id]=M)}function h(y){let x=u();y.__bindingPointIndex=x;let b=i.createBuffer(),R=y.__size,M=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,R,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,b),b}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let x=s[y.id],b=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let M=0,S=b.length;M<S;M++){let D=Array.isArray(b[M])?b[M]:[b[M]];for(let v=0,T=D.length;v<T;v++){let O=D[v];if(p(O,M,v,R)===!0){let X=O.__offset,j=Array.isArray(O.value)?O.value:[O.value],I=0;for(let B=0;B<j.length;B++){let $=j[B],k=g($);typeof $=="number"||typeof $=="boolean"?(O.__data[0]=$,i.bufferSubData(i.UNIFORM_BUFFER,X+I,O.__data)):$.isMatrix3?(O.__data[0]=$.elements[0],O.__data[1]=$.elements[1],O.__data[2]=$.elements[2],O.__data[3]=0,O.__data[4]=$.elements[3],O.__data[5]=$.elements[4],O.__data[6]=$.elements[5],O.__data[7]=0,O.__data[8]=$.elements[6],O.__data[9]=$.elements[7],O.__data[10]=$.elements[8],O.__data[11]=0):($.toArray(O.__data,I),I+=k.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,O.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,x,b,R){let M=y.value,S=x+"_"+b;if(R[S]===void 0)return typeof M=="number"||typeof M=="boolean"?R[S]=M:R[S]=M.clone(),!0;{let D=R[S];if(typeof M=="number"||typeof M=="boolean"){if(D!==M)return R[S]=M,!0}else if(D.equals(M)===!1)return D.copy(M),!0}return!1}function _(y){let x=y.uniforms,b=0,R=16;for(let S=0,D=x.length;S<D;S++){let v=Array.isArray(x[S])?x[S]:[x[S]];for(let T=0,O=v.length;T<O;T++){let X=v[T],j=Array.isArray(X.value)?X.value:[X.value];for(let I=0,B=j.length;I<B;I++){let $=j[I],k=g($),C=b%R;C!==0&&R-C<k.boundary&&(b+=R-C),X.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=b,b+=k.storage}}}let M=b%R;return M>0&&(b+=R-M),y.__size=b,y.__cache={},this}function g(y){let x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){let x=y.target;x.removeEventListener("dispose",m);let b=a.indexOf(x.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function f(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}var ir=class{constructor(t={}){let{canvas:e=dg(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let p=new Uint32Array(4),_=new Int32Array(4),g=null,m=null,f=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Se,this._useLegacyLights=!1,this.toneMapping=oi,this.toneMappingExposure=1;let x=this,b=!1,R=0,M=0,S=null,D=-1,v=null,T=new Ce,O=new Ce,X=null,j=new kt(0),I=0,B=e.width,$=e.height,k=1,C=null,L=null,K=new Ce(0,0,B,$),Z=new Ce(0,0,B,$),J=!1,G=new nr,Y=!1,st=!1,ht=null,lt=new oe,mt=new pt,gt=new P,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Lt(){return S===null?k:1}let H=n;function he(w,F){for(let W=0;W<w.length;W++){let q=w[W],V=e.getContext(q,F);if(V!==null)return V}return null}try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${gc}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",U,!1),e.addEventListener("webglcontextcreationerror",ot,!1),H===null){let F=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&F.shift(),H=he(F,w),H===null)throw he(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Tt,Pt,xt,zt,It,A,E,z,Q,tt,et,bt,_t,Mt,Dt,Vt,N,nt,at,ct,ut,it,St,Ot;function Kt(){Tt=new Sx(H),Pt=new gx(H,Tt,t),Tt.init(Pt),it=new tv(H,Tt,Pt),xt=new jy(H,Tt,Pt),zt=new Tx(H),It=new Hy,A=new Qy(H,Tt,xt,It,Pt,it,zt),E=new xx(x),z=new Mx(x),Q=new Dg(H,Pt),St=new px(H,Tt,Q,Pt),tt=new bx(H,Q,zt,St),et=new Cx(H,tt,Q,zt),at=new Rx(H,Pt,A),Vt=new _x(It),bt=new ky(x,E,z,Tt,Pt,St,Vt),_t=new nv(x,It),Mt=new Gy,Dt=new Yy(Tt,Pt),nt=new fx(x,E,z,xt,et,d,l),N=new Jy(x,et,Pt),Ot=new iv(H,zt,Pt,xt),ct=new mx(H,Tt,zt,Pt),ut=new Ex(H,Tt,zt,Pt),zt.programs=bt.programs,x.capabilities=Pt,x.extensions=Tt,x.properties=It,x.renderLists=Mt,x.shadowMap=N,x.state=xt,x.info=zt}Kt();let Ct=new Xl(x,H);this.xr=Ct,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let w=Tt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Tt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(w){w!==void 0&&(k=w,this.setSize(B,$,!1))},this.getSize=function(w){return w.set(B,$)},this.setSize=function(w,F,W=!0){if(Ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=w,$=F,e.width=Math.floor(w*k),e.height=Math.floor(F*k),W===!0&&(e.style.width=w+"px",e.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(B*k,$*k).floor()},this.setDrawingBufferSize=function(w,F,W){B=w,$=F,k=W,e.width=Math.floor(w*W),e.height=Math.floor(F*W),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(T)},this.getViewport=function(w){return w.copy(K)},this.setViewport=function(w,F,W,q){w.isVector4?K.set(w.x,w.y,w.z,w.w):K.set(w,F,W,q),xt.viewport(T.copy(K).multiplyScalar(k).floor())},this.getScissor=function(w){return w.copy(Z)},this.setScissor=function(w,F,W,q){w.isVector4?Z.set(w.x,w.y,w.z,w.w):Z.set(w,F,W,q),xt.scissor(O.copy(Z).multiplyScalar(k).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(w){xt.setScissorTest(J=w)},this.setOpaqueSort=function(w){C=w},this.setTransparentSort=function(w){L=w},this.getClearColor=function(w){return w.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor.apply(nt,arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha.apply(nt,arguments)},this.clear=function(w=!0,F=!0,W=!0){let q=0;if(w){let V=!1;if(S!==null){let vt=S.texture.format;V=vt===qd||vt===Xd||vt===$d}if(V){let vt=S.texture.type,Rt=vt===li||vt===si||vt===xc||vt===wi||vt===Vd||vt===Wd,Nt=nt.getClearColor(),Bt=nt.getClearAlpha(),Xt=Nt.r,Gt=Nt.g,Wt=Nt.b;Rt?(p[0]=Xt,p[1]=Gt,p[2]=Wt,p[3]=Bt,H.clearBufferuiv(H.COLOR,0,p)):(_[0]=Xt,_[1]=Gt,_[2]=Wt,_[3]=Bt,H.clearBufferiv(H.COLOR,0,_))}else q|=H.COLOR_BUFFER_BIT}F&&(q|=H.DEPTH_BUFFER_BIT),W&&(q|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",U,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),Mt.dispose(),Dt.dispose(),It.dispose(),E.dispose(),z.dispose(),et.dispose(),St.dispose(),Ot.dispose(),bt.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",ke),Ct.removeEventListener("sessionend",se),ht&&(ht.dispose(),ht=null),He.stop()};function rt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let w=zt.autoReset,F=N.enabled,W=N.autoUpdate,q=N.needsUpdate,V=N.type;Kt(),zt.autoReset=w,N.enabled=F,N.autoUpdate=W,N.needsUpdate=q,N.type=V}function ot(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function dt(w){let F=w.target;F.removeEventListener("dispose",dt),Ft(F)}function Ft(w){Ut(w),It.remove(w)}function Ut(w){let F=It.get(w).programs;F!==void 0&&(F.forEach(function(W){bt.releaseProgram(W)}),w.isShaderMaterial&&bt.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,W,q,V,vt){F===null&&(F=Et);let Rt=V.isMesh&&V.matrixWorld.determinant()<0,Nt=Hp(w,F,W,q,V);xt.setMaterial(q,Rt);let Bt=W.index,Xt=1;if(q.wireframe===!0){if(Bt=tt.getWireframeAttribute(W),Bt===void 0)return;Xt=2}let Gt=W.drawRange,Wt=W.attributes.position,ge=Gt.start*Xt,Qe=(Gt.start+Gt.count)*Xt;vt!==null&&(ge=Math.max(ge,vt.start*Xt),Qe=Math.min(Qe,(vt.start+vt.count)*Xt)),Bt!==null?(ge=Math.max(ge,0),Qe=Math.min(Qe,Bt.count)):Wt!=null&&(ge=Math.max(ge,0),Qe=Math.min(Qe,Wt.count));let Ae=Qe-ge;if(Ae<0||Ae===1/0)return;St.setup(V,q,Nt,W,Bt);let Dn,fe=ct;if(Bt!==null&&(Dn=Q.get(Bt),fe=ut,fe.setIndex(Dn)),V.isMesh)q.wireframe===!0?(xt.setLineWidth(q.wireframeLinewidth*Lt()),fe.setMode(H.LINES)):fe.setMode(H.TRIANGLES);else if(V.isLine){let qt=q.linewidth;qt===void 0&&(qt=1),xt.setLineWidth(qt*Lt()),V.isLineSegments?fe.setMode(H.LINES):V.isLineLoop?fe.setMode(H.LINE_LOOP):fe.setMode(H.LINE_STRIP)}else V.isPoints?fe.setMode(H.POINTS):V.isSprite&&fe.setMode(H.TRIANGLES);if(V.isBatchedMesh)fe.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)fe.renderInstances(ge,Ae,V.count);else if(W.isInstancedBufferGeometry){let qt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Io=Math.min(W.instanceCount,qt);fe.renderInstances(ge,Ae,Io)}else fe.render(ge,Ae)};function ne(w,F,W){w.transparent===!0&&w.side===_e&&w.forceSinglePass===!1?(w.side=Ze,w.needsUpdate=!0,Lr(w,F,W),w.side=ci,w.needsUpdate=!0,Lr(w,F,W),w.side=_e):Lr(w,F,W)}this.compile=function(w,F,W=null){W===null&&(W=w),m=Dt.get(W),m.init(),y.push(m),W.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),w!==W&&w.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights(x._useLegacyLights);let q=new Set;return w.traverse(function(V){let vt=V.material;if(vt)if(Array.isArray(vt))for(let Rt=0;Rt<vt.length;Rt++){let Nt=vt[Rt];ne(Nt,W,V),q.add(Nt)}else ne(vt,W,V),q.add(vt)}),y.pop(),m=null,q},this.compileAsync=function(w,F,W=null){let q=this.compile(w,F,W);return new Promise(V=>{function vt(){if(q.forEach(function(Rt){It.get(Rt).currentProgram.isReady()&&q.delete(Rt)}),q.size===0){V(w);return}setTimeout(vt,10)}Tt.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let ie=null;function we(w){ie&&ie(w)}function ke(){He.stop()}function se(){He.start()}let He=new ef;He.setAnimationLoop(we),typeof self<"u"&&He.setContext(self),this.setAnimationLoop=function(w){ie=w,Ct.setAnimationLoop(w),w===null?He.stop():He.start()},Ct.addEventListener("sessionstart",ke),Ct.addEventListener("sessionend",se),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(F),F=Ct.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,F,S),m=Dt.get(w,y.length),m.init(),y.push(m),lt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),G.setFromProjectionMatrix(lt),st=this.localClippingEnabled,Y=Vt.init(this.clippingPlanes,st),g=Mt.get(w,f.length),g.init(),f.push(g),wn(w,F,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(C,L),this.info.render.frame++,Y===!0&&Vt.beginShadows();let W=m.state.shadowsArray;if(N.render(W,w,F),Y===!0&&Vt.endShadows(),this.info.autoReset===!0&&this.info.reset(),nt.render(g,w),m.setupLights(x._useLegacyLights),F.isArrayCamera){let q=F.cameras;for(let V=0,vt=q.length;V<vt;V++){let Rt=q[V];xh(g,w,Rt,Rt.viewport)}}else xh(g,w,F);S!==null&&(A.updateMultisampleRenderTarget(S),A.updateRenderTargetMipmap(S)),w.isScene===!0&&w.onAfterRender(x,w,F),St.resetDefaultState(),D=-1,v=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,f.pop(),f.length>0?g=f[f.length-1]:g=null};function wn(w,F,W,q){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||G.intersectsSprite(w)){q&&gt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(lt);let Rt=et.update(w),Nt=w.material;Nt.visible&&g.push(w,Rt,Nt,W,gt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||G.intersectsObject(w))){let Rt=et.update(w),Nt=w.material;if(q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),gt.copy(w.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),gt.copy(Rt.boundingSphere.center)),gt.applyMatrix4(w.matrixWorld).applyMatrix4(lt)),Array.isArray(Nt)){let Bt=Rt.groups;for(let Xt=0,Gt=Bt.length;Xt<Gt;Xt++){let Wt=Bt[Xt],ge=Nt[Wt.materialIndex];ge&&ge.visible&&g.push(w,Rt,ge,W,gt.z,Wt)}}else Nt.visible&&g.push(w,Rt,Nt,W,gt.z,null)}}let vt=w.children;for(let Rt=0,Nt=vt.length;Rt<Nt;Rt++)wn(vt[Rt],F,W,q)}function xh(w,F,W,q){let V=w.opaque,vt=w.transmissive,Rt=w.transparent;m.setupLightsView(W),Y===!0&&Vt.setGlobalState(x.clippingPlanes,W),vt.length>0&&kp(V,vt,F,W),q&&xt.viewport(T.copy(q)),V.length>0&&Ir(V,F,W),vt.length>0&&Ir(vt,F,W),Rt.length>0&&Ir(Rt,F,W),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function kp(w,F,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;let vt=Pt.isWebGL2;ht===null&&(ht=new Vn(1,1,{generateMipmaps:!0,type:Tt.has("EXT_color_buffer_half_float")?Qs:li,minFilter:js,samples:vt?4:0})),x.getDrawingBufferSize(mt),vt?ht.setSize(mt.x,mt.y):ht.setSize(Ll(mt.x),Ll(mt.y));let Rt=x.getRenderTarget();x.setRenderTarget(ht),x.getClearColor(j),I=x.getClearAlpha(),I<1&&x.setClearColor(16777215,.5),x.clear();let Nt=x.toneMapping;x.toneMapping=oi,Ir(w,W,q),A.updateMultisampleRenderTarget(ht),A.updateRenderTargetMipmap(ht);let Bt=!1;for(let Xt=0,Gt=F.length;Xt<Gt;Xt++){let Wt=F[Xt],ge=Wt.object,Qe=Wt.geometry,Ae=Wt.material,Dn=Wt.group;if(Ae.side===_e&&ge.layers.test(q.layers)){let fe=Ae.side;Ae.side=Ze,Ae.needsUpdate=!0,yh(ge,W,q,Qe,Ae,Dn),Ae.side=fe,Ae.needsUpdate=!0,Bt=!0}}Bt===!0&&(A.updateMultisampleRenderTarget(ht),A.updateRenderTargetMipmap(ht)),x.setRenderTarget(Rt),x.setClearColor(j,I),x.toneMapping=Nt}function Ir(w,F,W){let q=F.isScene===!0?F.overrideMaterial:null;for(let V=0,vt=w.length;V<vt;V++){let Rt=w[V],Nt=Rt.object,Bt=Rt.geometry,Xt=q===null?Rt.material:q,Gt=Rt.group;Nt.layers.test(W.layers)&&yh(Nt,F,W,Bt,Xt,Gt)}}function yh(w,F,W,q,V,vt){w.onBeforeRender(x,F,W,q,V,vt),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),V.onBeforeRender(x,F,W,q,w,vt),V.transparent===!0&&V.side===_e&&V.forceSinglePass===!1?(V.side=Ze,V.needsUpdate=!0,x.renderBufferDirect(W,F,q,V,w,vt),V.side=ci,V.needsUpdate=!0,x.renderBufferDirect(W,F,q,V,w,vt),V.side=_e):x.renderBufferDirect(W,F,q,V,w,vt),w.onAfterRender(x,F,W,q,V,vt)}function Lr(w,F,W){F.isScene!==!0&&(F=Et);let q=It.get(w),V=m.state.lights,vt=m.state.shadowsArray,Rt=V.state.version,Nt=bt.getParameters(w,V.state,vt,F,W),Bt=bt.getProgramCacheKey(Nt),Xt=q.programs;q.environment=w.isMeshStandardMaterial?F.environment:null,q.fog=F.fog,q.envMap=(w.isMeshStandardMaterial?z:E).get(w.envMap||q.environment),Xt===void 0&&(w.addEventListener("dispose",dt),Xt=new Map,q.programs=Xt);let Gt=Xt.get(Bt);if(Gt!==void 0){if(q.currentProgram===Gt&&q.lightsStateVersion===Rt)return Mh(w,Nt),Gt}else Nt.uniforms=bt.getUniforms(w),w.onBuild(W,Nt,x),w.onBeforeCompile(Nt,x),Gt=bt.acquireProgram(Nt,Bt),Xt.set(Bt,Gt),q.uniforms=Nt.uniforms;let Wt=q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Wt.clippingPlanes=Vt.uniform),Mh(w,Nt),q.needsLights=Gp(w),q.lightsStateVersion=Rt,q.needsLights&&(Wt.ambientLightColor.value=V.state.ambient,Wt.lightProbe.value=V.state.probe,Wt.directionalLights.value=V.state.directional,Wt.directionalLightShadows.value=V.state.directionalShadow,Wt.spotLights.value=V.state.spot,Wt.spotLightShadows.value=V.state.spotShadow,Wt.rectAreaLights.value=V.state.rectArea,Wt.ltc_1.value=V.state.rectAreaLTC1,Wt.ltc_2.value=V.state.rectAreaLTC2,Wt.pointLights.value=V.state.point,Wt.pointLightShadows.value=V.state.pointShadow,Wt.hemisphereLights.value=V.state.hemi,Wt.directionalShadowMap.value=V.state.directionalShadowMap,Wt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Wt.spotShadowMap.value=V.state.spotShadowMap,Wt.spotLightMatrix.value=V.state.spotLightMatrix,Wt.spotLightMap.value=V.state.spotLightMap,Wt.pointShadowMap.value=V.state.pointShadowMap,Wt.pointShadowMatrix.value=V.state.pointShadowMatrix),q.currentProgram=Gt,q.uniformsList=null,Gt}function vh(w){if(w.uniformsList===null){let F=w.currentProgram.getUniforms();w.uniformsList=us.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function Mh(w,F){let W=It.get(w);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function Hp(w,F,W,q,V){F.isScene!==!0&&(F=Et),A.resetTextureUnits();let vt=F.fog,Rt=q.isMeshStandardMaterial?F.environment:null,Nt=S===null?x.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Gn,Bt=(q.isMeshStandardMaterial?z:E).get(q.envMap||Rt),Xt=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Gt=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Wt=!!W.morphAttributes.position,ge=!!W.morphAttributes.normal,Qe=!!W.morphAttributes.color,Ae=oi;q.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(Ae=x.toneMapping);let Dn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,fe=Dn!==void 0?Dn.length:0,qt=It.get(q),Io=m.state.lights;if(Y===!0&&(st===!0||w!==v)){let an=w===v&&q.id===D;Vt.setState(q,w,an)}let me=!1;q.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==Io.state.version||qt.outputColorSpace!==Nt||V.isBatchedMesh&&qt.batching===!1||!V.isBatchedMesh&&qt.batching===!0||V.isInstancedMesh&&qt.instancing===!1||!V.isInstancedMesh&&qt.instancing===!0||V.isSkinnedMesh&&qt.skinning===!1||!V.isSkinnedMesh&&qt.skinning===!0||V.isInstancedMesh&&qt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&qt.instancingColor===!1&&V.instanceColor!==null||qt.envMap!==Bt||q.fog===!0&&qt.fog!==vt||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==Vt.numPlanes||qt.numIntersection!==Vt.numIntersection)||qt.vertexAlphas!==Xt||qt.vertexTangents!==Gt||qt.morphTargets!==Wt||qt.morphNormals!==ge||qt.morphColors!==Qe||qt.toneMapping!==Ae||Pt.isWebGL2===!0&&qt.morphTargetsCount!==fe)&&(me=!0):(me=!0,qt.__version=q.version);let gi=qt.currentProgram;me===!0&&(gi=Lr(q,F,V));let Sh=!1,Cs=!1,Lo=!1,Ne=gi.getUniforms(),_i=qt.uniforms;if(xt.useProgram(gi.program)&&(Sh=!0,Cs=!0,Lo=!0),q.id!==D&&(D=q.id,Cs=!0),Sh||v!==w){Ne.setValue(H,"projectionMatrix",w.projectionMatrix),Ne.setValue(H,"viewMatrix",w.matrixWorldInverse);let an=Ne.map.cameraPosition;an!==void 0&&an.setValue(H,gt.setFromMatrixPosition(w.matrixWorld)),Pt.logarithmicDepthBuffer&&Ne.setValue(H,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Ne.setValue(H,"isOrthographic",w.isOrthographicCamera===!0),v!==w&&(v=w,Cs=!0,Lo=!0)}if(V.isSkinnedMesh){Ne.setOptional(H,V,"bindMatrix"),Ne.setOptional(H,V,"bindMatrixInverse");let an=V.skeleton;an&&(Pt.floatVertexTextures?(an.boneTexture===null&&an.computeBoneTexture(),Ne.setValue(H,"boneTexture",an.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&(Ne.setOptional(H,V,"batchingTexture"),Ne.setValue(H,"batchingTexture",V._matricesTexture,A));let Do=W.morphAttributes;if((Do.position!==void 0||Do.normal!==void 0||Do.color!==void 0&&Pt.isWebGL2===!0)&&at.update(V,W,gi),(Cs||qt.receiveShadow!==V.receiveShadow)&&(qt.receiveShadow=V.receiveShadow,Ne.setValue(H,"receiveShadow",V.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(_i.envMap.value=Bt,_i.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),Cs&&(Ne.setValue(H,"toneMappingExposure",x.toneMappingExposure),qt.needsLights&&zp(_i,Lo),vt&&q.fog===!0&&_t.refreshFogUniforms(_i,vt),_t.refreshMaterialUniforms(_i,q,k,$,ht),us.upload(H,vh(qt),_i,A)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(us.upload(H,vh(qt),_i,A),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Ne.setValue(H,"center",V.center),Ne.setValue(H,"modelViewMatrix",V.modelViewMatrix),Ne.setValue(H,"normalMatrix",V.normalMatrix),Ne.setValue(H,"modelMatrix",V.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let an=q.uniformsGroups;for(let Uo=0,Vp=an.length;Uo<Vp;Uo++)if(Pt.isWebGL2){let bh=an[Uo];Ot.update(bh,gi),Ot.bind(bh,gi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return gi}function zp(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function Gp(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(w,F,W){It.get(w.texture).__webglTexture=F,It.get(w.depthTexture).__webglTexture=W;let q=It.get(w);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=W===void 0,q.__autoAllocateDepthBuffer||Tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,F){let W=It.get(w);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,W=0){S=w,R=F,M=W;let q=!0,V=null,vt=!1,Rt=!1;if(w){let Bt=It.get(w);Bt.__useDefaultFramebuffer!==void 0?(xt.bindFramebuffer(H.FRAMEBUFFER,null),q=!1):Bt.__webglFramebuffer===void 0?A.setupRenderTarget(w):Bt.__hasExternalTextures&&A.rebindTextures(w,It.get(w.texture).__webglTexture,It.get(w.depthTexture).__webglTexture);let Xt=w.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Rt=!0);let Gt=It.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Gt[F])?V=Gt[F][W]:V=Gt[F],vt=!0):Pt.isWebGL2&&w.samples>0&&A.useMultisampledRTT(w)===!1?V=It.get(w).__webglMultisampledFramebuffer:Array.isArray(Gt)?V=Gt[W]:V=Gt,T.copy(w.viewport),O.copy(w.scissor),X=w.scissorTest}else T.copy(K).multiplyScalar(k).floor(),O.copy(Z).multiplyScalar(k).floor(),X=J;if(xt.bindFramebuffer(H.FRAMEBUFFER,V)&&Pt.drawBuffers&&q&&xt.drawBuffers(w,V),xt.viewport(T),xt.scissor(O),xt.setScissorTest(X),vt){let Bt=It.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+F,Bt.__webglTexture,W)}else if(Rt){let Bt=It.get(w.texture),Xt=F||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Bt.__webglTexture,W||0,Xt)}D=-1},this.readRenderTargetPixels=function(w,F,W,q,V,vt,Rt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=It.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Rt!==void 0&&(Nt=Nt[Rt]),Nt){xt.bindFramebuffer(H.FRAMEBUFFER,Nt);try{let Bt=w.texture,Xt=Bt.format,Gt=Bt.type;if(Xt!==Mn&&it.convert(Xt)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Wt=Gt===Qs&&(Tt.has("EXT_color_buffer_half_float")||Pt.isWebGL2&&Tt.has("EXT_color_buffer_float"));if(Gt!==li&&it.convert(Gt)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Gt===ri&&(Pt.isWebGL2||Tt.has("OES_texture_float")||Tt.has("WEBGL_color_buffer_float")))&&!Wt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-q&&W>=0&&W<=w.height-V&&H.readPixels(F,W,q,V,it.convert(Xt),it.convert(Gt),vt)}finally{let Bt=S!==null?It.get(S).__webglFramebuffer:null;xt.bindFramebuffer(H.FRAMEBUFFER,Bt)}}},this.copyFramebufferToTexture=function(w,F,W=0){let q=Math.pow(2,-W),V=Math.floor(F.image.width*q),vt=Math.floor(F.image.height*q);A.setTexture2D(F,0),H.copyTexSubImage2D(H.TEXTURE_2D,W,0,0,w.x,w.y,V,vt),xt.unbindTexture()},this.copyTextureToTexture=function(w,F,W,q=0){let V=F.image.width,vt=F.image.height,Rt=it.convert(W.format),Nt=it.convert(W.type);A.setTexture2D(W,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,W.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,W.unpackAlignment),F.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,q,w.x,w.y,V,vt,Rt,Nt,F.image.data):F.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,q,w.x,w.y,F.mipmaps[0].width,F.mipmaps[0].height,Rt,F.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,q,w.x,w.y,Rt,Nt,F.image),q===0&&W.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),xt.unbindTexture()},this.copyTextureToTexture3D=function(w,F,W,q,V=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let vt=w.max.x-w.min.x+1,Rt=w.max.y-w.min.y+1,Nt=w.max.z-w.min.z+1,Bt=it.convert(q.format),Xt=it.convert(q.type),Gt;if(q.isData3DTexture)A.setTexture3D(q,0),Gt=H.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)A.setTexture2DArray(q,0),Gt=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,q.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,q.unpackAlignment);let Wt=H.getParameter(H.UNPACK_ROW_LENGTH),ge=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Qe=H.getParameter(H.UNPACK_SKIP_PIXELS),Ae=H.getParameter(H.UNPACK_SKIP_ROWS),Dn=H.getParameter(H.UNPACK_SKIP_IMAGES),fe=W.isCompressedTexture?W.mipmaps[V]:W.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,fe.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,fe.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,w.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,w.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,w.min.z),W.isDataTexture||W.isData3DTexture?H.texSubImage3D(Gt,V,F.x,F.y,F.z,vt,Rt,Nt,Bt,Xt,fe.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Gt,V,F.x,F.y,F.z,vt,Rt,Nt,Bt,fe.data)):H.texSubImage3D(Gt,V,F.x,F.y,F.z,vt,Rt,Nt,Bt,Xt,fe),H.pixelStorei(H.UNPACK_ROW_LENGTH,Wt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ge),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Qe),H.pixelStorei(H.UNPACK_SKIP_ROWS,Ae),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Dn),V===0&&q.generateMipmaps&&H.generateMipmap(Gt),xt.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),xt.unbindTexture()},this.resetState=function(){R=0,M=0,S=null,xt.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===yc?"display-p3":"srgb",e.unpackColorSpace=jt.workingColorSpace===Ya?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Se?Ri:Kd}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Ri?Se:Gn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},ql=class extends ir{};ql.prototype.isWebGL1Renderer=!0;var Da=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new kt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},sr=class extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var rr=class extends Pe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ss=new oe,Td=new oe,ha=[],wd=new Wn,sv=new oe,Ws=new yt,$s=new ui,Ua=class extends yt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new rr(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,sv)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Wn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ss),wd.copy(t.boundingBox).applyMatrix4(ss),this.boundingBox.union(wd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ui),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ss),$s.copy(t.boundingSphere).applyMatrix4(ss),this.boundingSphere.union($s)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Ws.geometry=this.geometry,Ws.material=this.material,Ws.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$s.copy(this.boundingSphere),$s.applyMatrix4(n),t.ray.intersectsSphere($s)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ss),Td.multiplyMatrices(n,ss),Ws.matrixWorld=Td,Ws.raycast(t,ha);for(let a=0,o=ha.length;a<o;a++){let l=ha[a];l.instanceId=r,l.object=this,e.push(l)}ha.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new rr(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var ar=class extends di{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ad=new P,Rd=new P,Cd=new oe,vl=new tr,ua=new ui,Yl=class extends Ie{constructor(t=new be,e=new ar){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ad.fromBufferAttribute(e,s-1),Rd.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ad.distanceTo(Rd);t.setAttribute("lineDistance",new Zt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ua.copy(n.boundingSphere),ua.applyMatrix4(s),ua.radius+=r,t.ray.intersectsSphere(ua)===!1)return;Cd.copy(s).invert(),vl.copy(t.ray).applyMatrix4(Cd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new P,h=new P,u=new P,d=new P,p=this.isLineSegments?2:1,_=n.index,m=n.attributes.position;if(_!==null){let f=Math.max(0,a.start),y=Math.min(_.count,a.start+a.count);for(let x=f,b=y-1;x<b;x+=p){let R=_.getX(x),M=_.getX(x+1);if(c.fromBufferAttribute(m,R),h.fromBufferAttribute(m,M),vl.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let D=t.ray.origin.distanceTo(d);D<t.near||D>t.far||e.push({distance:D,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{let f=Math.max(0,a.start),y=Math.min(m.count,a.start+a.count);for(let x=f,b=y-1;x<b;x+=p){if(c.fromBufferAttribute(m,x),h.fromBufferAttribute(m,x+1),vl.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let M=t.ray.origin.distanceTo(d);M<t.near||M>t.far||e.push({distance:M,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},Pd=new P,Id=new P,Na=class extends Yl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Pd.fromBufferAttribute(e,s),Id.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Pd.distanceTo(Id);t.setAttribute("lineDistance",new Zt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var xs=class extends cn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},hn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,p=(a-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new pt:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new P,s=[],r=[],a=[],o=new P,l=new oe;for(let p=0;p<=t;p++){let _=p/t;s[p]=this.getTangentAt(_,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let _=Math.acos(Ue(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,_))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Ue(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let _=1;_<=t;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],p*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},or=class extends hn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e){let n=e||new pt,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Kl=class extends or{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Mc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,s(a,o,d,p)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var da=new P,Ml=new Mc,Sl=new Mc,bl=new Mc,Zl=class extends hn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(da.subVectors(s[0],s[1]).add(s[0]),c=da);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(da.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=da),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,_=Math.pow(c.distanceToSquared(u),p),g=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);g<1e-4&&(g=1),_<1e-4&&(_=g),m<1e-4&&(m=g),Ml.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,_,g,m),Sl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,_,g,m),bl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,_,g,m)}else this.curveType==="catmullrom"&&(Ml.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Sl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),bl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Ml.calc(l),Sl.calc(l),bl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Ld(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function rv(i,t){let e=1-i;return e*e*t}function av(i,t){return 2*(1-i)*i*t}function ov(i,t){return i*i*t}function Ys(i,t,e,n){return rv(i,t)+av(i,e)+ov(i,n)}function lv(i,t){let e=1-i;return e*e*e*t}function cv(i,t){let e=1-i;return 3*e*e*i*t}function hv(i,t){return 3*(1-i)*i*i*t}function uv(i,t){return i*i*i*t}function Ks(i,t,e,n,s){return lv(i,t)+cv(i,e)+hv(i,n)+uv(i,s)}var Oa=class extends hn{constructor(t=new pt,e=new pt,n=new pt,s=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new pt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ks(t,s.x,r.x,a.x,o.x),Ks(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Jl=class extends hn{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ks(t,s.x,r.x,a.x,o.x),Ks(t,s.y,r.y,a.y,o.y),Ks(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Fa=class extends hn{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},jl=class extends hn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ba=class extends hn{constructor(t=new pt,e=new pt,n=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new pt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ys(t,s.x,r.x,a.x),Ys(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ql=class extends hn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ys(t,s.x,r.x,a.x),Ys(t,s.y,r.y,a.y),Ys(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ka=class extends hn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Ld(o,l.x,c.x,h.x,u.x),Ld(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new pt().fromArray(s))}return this}},Dd=Object.freeze({__proto__:null,ArcCurve:Kl,CatmullRomCurve3:Zl,CubicBezierCurve:Oa,CubicBezierCurve3:Jl,EllipseCurve:or,LineCurve:Fa,LineCurve3:jl,QuadraticBezierCurve:Ba,QuadraticBezierCurve3:Ql,SplineCurve:ka}),tc=class extends hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Dd[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Dd[s.type]().fromJSON(s))}return this}},Ci=class extends tc{constructor(t){super(),this.type="Path",this.currentPoint=new pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Fa(this.currentPoint.clone(),new pt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Ba(this.currentPoint.clone(),new pt(t,e),new pt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Oa(this.currentPoint.clone(),new pt(t,e),new pt(n,s),new pt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new ka(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new or(t,e,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},lr=class i extends be{constructor(t=[new pt(0,-.5),new pt(.5,0),new pt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ue(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,u=new P,d=new pt,p=new P,_=new P,g=new P,m=0,f=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,f=t[y+1].y-t[y].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(g.x,g.y,g.z);break;default:m=t[y+1].x-t[y].x,f=t[y+1].y-t[y].y,p.x=f*1,p.y=-m,p.z=f*0,_.copy(p),p.x+=g.x,p.y+=g.y,p.z+=g.z,p.normalize(),l.push(p.x,p.y,p.z),g.copy(_)}for(let y=0;y<=e;y++){let x=n+y*h*s,b=Math.sin(x),R=Math.cos(x);for(let M=0;M<=t.length-1;M++){u.x=t[M].x*b,u.y=t[M].y,u.z=t[M].x*R,a.push(u.x,u.y,u.z),d.x=y/e,d.y=M/(t.length-1),o.push(d.x,d.y);let S=l[3*M+0]*b,D=l[3*M+1],v=l[3*M+0]*R;c.push(S,D,v)}}for(let y=0;y<e;y++)for(let x=0;x<t.length-1;x++){let b=x+y*t.length,R=b,M=b+t.length,S=b+t.length+1,D=b+1;r.push(R,M,D),r.push(S,D,M)}this.setIndex(r),this.setAttribute("position",new Zt(a,3)),this.setAttribute("uv",new Zt(o,2)),this.setAttribute("normal",new Zt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},cr=class i extends lr{constructor(t=1,e=1,n=4,s=8){let r=new Ci;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},Ha=class i extends be{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new P,h=new pt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let p=n+u/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Zt(a,3)),this.setAttribute("normal",new Zt(o,3)),this.setAttribute("uv",new Zt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},un=class i extends be{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],_=0,g=[],m=n/2,f=0;y(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Zt(u,3)),this.setAttribute("normal",new Zt(d,3)),this.setAttribute("uv",new Zt(p,2));function y(){let b=new P,R=new P,M=0,S=(e-t)/n;for(let D=0;D<=r;D++){let v=[],T=D/r,O=T*(e-t)+t;for(let X=0;X<=s;X++){let j=X/s,I=j*l+o,B=Math.sin(I),$=Math.cos(I);R.x=O*B,R.y=-T*n+m,R.z=O*$,u.push(R.x,R.y,R.z),b.set(B,S,$).normalize(),d.push(b.x,b.y,b.z),p.push(j,1-T),v.push(_++)}g.push(v)}for(let D=0;D<s;D++)for(let v=0;v<r;v++){let T=g[v][D],O=g[v+1][D],X=g[v+1][D+1],j=g[v][D+1];h.push(T,O,j),h.push(O,X,j),M+=6}c.addGroup(f,M,0),f+=M}function x(b){let R=_,M=new pt,S=new P,D=0,v=b===!0?t:e,T=b===!0?1:-1;for(let X=1;X<=s;X++)u.push(0,m*T,0),d.push(0,T,0),p.push(.5,.5),_++;let O=_;for(let X=0;X<=s;X++){let I=X/s*l+o,B=Math.cos(I),$=Math.sin(I);S.x=v*$,S.y=m*T,S.z=v*B,u.push(S.x,S.y,S.z),d.push(0,T,0),M.x=B*.5+.5,M.y=$*.5*T+.5,p.push(M.x,M.y),_++}for(let X=0;X<s;X++){let j=R+X,I=O+X;b===!0?h.push(I,I+1,j):h.push(I+1,I,j),D+=3}c.addGroup(f,D,b===!0?1:2),f+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Sn=class i extends un{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},za=class i extends be{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Zt(r,3)),this.setAttribute("normal",new Zt(r.slice(),3)),this.setAttribute("uv",new Zt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let x=new P,b=new P,R=new P;for(let M=0;M<e.length;M+=3)p(e[M+0],x),p(e[M+1],b),p(e[M+2],R),l(x,b,R,y)}function l(y,x,b,R){let M=R+1,S=[];for(let D=0;D<=M;D++){S[D]=[];let v=y.clone().lerp(b,D/M),T=x.clone().lerp(b,D/M),O=M-D;for(let X=0;X<=O;X++)X===0&&D===M?S[D][X]=v:S[D][X]=v.clone().lerp(T,X/O)}for(let D=0;D<M;D++)for(let v=0;v<2*(M-D)-1;v++){let T=Math.floor(v/2);v%2===0?(d(S[D][T+1]),d(S[D+1][T]),d(S[D][T])):(d(S[D][T+1]),d(S[D+1][T+1]),d(S[D+1][T]))}}function c(y){let x=new P;for(let b=0;b<r.length;b+=3)x.x=r[b+0],x.y=r[b+1],x.z=r[b+2],x.normalize().multiplyScalar(y),r[b+0]=x.x,r[b+1]=x.y,r[b+2]=x.z}function h(){let y=new P;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];let b=m(y)/2/Math.PI+.5,R=f(y)/Math.PI+.5;a.push(b,1-R)}_(),u()}function u(){for(let y=0;y<a.length;y+=6){let x=a[y+0],b=a[y+2],R=a[y+4],M=Math.max(x,b,R),S=Math.min(x,b,R);M>.9&&S<.1&&(x<.2&&(a[y+0]+=1),b<.2&&(a[y+2]+=1),R<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function p(y,x){let b=y*3;x.x=t[b+0],x.y=t[b+1],x.z=t[b+2]}function _(){let y=new P,x=new P,b=new P,R=new P,M=new pt,S=new pt,D=new pt;for(let v=0,T=0;v<r.length;v+=9,T+=6){y.set(r[v+0],r[v+1],r[v+2]),x.set(r[v+3],r[v+4],r[v+5]),b.set(r[v+6],r[v+7],r[v+8]),M.set(a[T+0],a[T+1]),S.set(a[T+2],a[T+3]),D.set(a[T+4],a[T+5]),R.copy(y).add(x).add(b).divideScalar(3);let O=m(R);g(M,T+0,y,O),g(S,T+2,x,O),g(D,T+4,b,O)}}function g(y,x,b,R){R<0&&y.x===1&&(a[x]=y.x-1),b.x===0&&b.z===0&&(a[x]=R/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function f(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},Ga=class i extends za{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Pi=class extends Ci{constructor(t){super(t),this.uuid=Ss(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Ci().fromJSON(s))}return this}},dv={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=lf(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,p;if(n&&(r=_v(i,t,r,e)),i.length>80*e){o=c=i[0],l=h=i[1];for(let _=e;_<s;_+=e)u=i[_],d=i[_+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return hr(r,a,e,o,l,p,0),a}};function lf(i,t,e,n,s){let r,a;if(s===Rv(i,t,e,n)>0)for(r=t;r<e;r+=n)a=Ud(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=Ud(r,i[r],i[r+1],a);return a&&Za(a,a.next)&&(dr(a),a=a.next),a}function Ii(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Za(e,e.next)||pe(e.prev,e,e.next)===0)){if(dr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function hr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Sv(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?pv(i,n,s,r):fv(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),dr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=mv(Ii(i),t,e),hr(i,t,e,n,s,r,2)):a===2&&gv(i,t,e,n,s,r):hr(Ii(i),t,e,n,s,r,1);break}}}function fv(i){let t=i.prev,e=i,n=i.next;if(pe(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,p=o>l?o>c?o:c:l>c?l:c,_=n.next;for(;_!==t;){if(_.x>=h&&_.x<=d&&_.y>=u&&_.y<=p&&ls(s,o,r,l,a,c,_.x,_.y)&&pe(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function pv(i,t,e,n){let s=i.prev,r=i,a=i.next;if(pe(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,p=o<l?o<c?o:c:l<c?l:c,_=h<u?h<d?h:d:u<d?u:d,g=o>l?o>c?o:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,f=ec(p,_,t,e,n),y=ec(g,m,t,e,n),x=i.prevZ,b=i.nextZ;for(;x&&x.z>=f&&b&&b.z<=y;){if(x.x>=p&&x.x<=g&&x.y>=_&&x.y<=m&&x!==s&&x!==a&&ls(o,h,l,u,c,d,x.x,x.y)&&pe(x.prev,x,x.next)>=0||(x=x.prevZ,b.x>=p&&b.x<=g&&b.y>=_&&b.y<=m&&b!==s&&b!==a&&ls(o,h,l,u,c,d,b.x,b.y)&&pe(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;x&&x.z>=f;){if(x.x>=p&&x.x<=g&&x.y>=_&&x.y<=m&&x!==s&&x!==a&&ls(o,h,l,u,c,d,x.x,x.y)&&pe(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;b&&b.z<=y;){if(b.x>=p&&b.x<=g&&b.y>=_&&b.y<=m&&b!==s&&b!==a&&ls(o,h,l,u,c,d,b.x,b.y)&&pe(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function mv(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Za(s,r)&&cf(s,n,n.next,r)&&ur(s,r)&&ur(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),dr(n),dr(n.next),n=i=r),n=n.next}while(n!==i);return Ii(n)}function gv(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Tv(a,o)){let l=hf(a,o);a=Ii(a,a.next),l=Ii(l,l.next),hr(a,t,e,n,s,r,0),hr(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function _v(i,t,e,n){let s=[],r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=lf(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Ev(c));for(s.sort(xv),r=0;r<s.length;r++)e=yv(s[r],e);return e}function xv(i,t){return i.x-t.x}function yv(i,t){let e=vv(i,t);if(!e)return t;let n=hf(e,i);return Ii(n,n.next),Ii(e,e.next)}function vv(i,t){let e=t,n=-1/0,s,r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&ls(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),ur(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Mv(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function Mv(i,t){return pe(i.prev,i,t.prev)<0&&pe(t.next,i,i.next)<0}function Sv(i,t,e,n){let s=i;do s.z===0&&(s.z=ec(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,bv(s)}function bv(i){let t,e,n,s,r,a,o,l,c=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(a>1);return i}function ec(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Ev(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ls(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Tv(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!wv(i,t)&&(ur(i,t)&&ur(t,i)&&Av(i,t)&&(pe(i.prev,i,t.prev)||pe(i,t.prev,t))||Za(i,t)&&pe(i.prev,i,i.next)>0&&pe(t.prev,t,t.next)>0)}function pe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Za(i,t){return i.x===t.x&&i.y===t.y}function cf(i,t,e,n){let s=pa(pe(i,t,e)),r=pa(pe(i,t,n)),a=pa(pe(e,n,i)),o=pa(pe(e,n,t));return!!(s!==r&&a!==o||s===0&&fa(i,e,t)||r===0&&fa(i,n,t)||a===0&&fa(e,i,n)||o===0&&fa(e,t,n))}function fa(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function pa(i){return i>0?1:i<0?-1:0}function wv(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&cf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ur(i,t){return pe(i.prev,i,i.next)<0?pe(i,t,i.next)>=0&&pe(i,i.prev,t)>=0:pe(i,t,i.prev)<0||pe(i,i.next,t)<0}function Av(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function hf(i,t){let e=new nc(i.i,i.x,i.y),n=new nc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ud(i,t,e,n){let s=new nc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function dr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function nc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Rv(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Zs=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Nd(t),Od(n,t);let a=t.length;e.forEach(Nd);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Od(n,e[l]);let o=dv.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Nd(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Od(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Va=class i extends za{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var ys=class i extends be{constructor(t=new Pi([new pt(0,.5),new pt(-.5,-.5),new pt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Zt(s,3)),this.setAttribute("normal",new Zt(r,3)),this.setAttribute("uv",new Zt(a,2));function c(h){let u=s.length/3,d=h.extractPoints(e),p=d.shape,_=d.holes;Zs.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=_.length;m<f;m++){let y=_[m];Zs.isClockWise(y)===!0&&(_[m]=y.reverse())}let g=Zs.triangulateShape(p,_);for(let m=0,f=_.length;m<f;m++){let y=_[m];p=p.concat(y)}for(let m=0,f=p.length;m<f;m++){let y=p[m];s.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let m=0,f=g.length;m<f;m++){let y=g[m],x=y[0]+u,b=y[1]+u,R=y[2]+u;n.push(x,b,R),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Cv(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function Cv(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var sn=class i extends be{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new P,d=new P,p=[],_=[],g=[],m=[];for(let f=0;f<=n;f++){let y=[],x=f/n,b=0;f===0&&a===0?b=.5/e:f===n&&l===Math.PI&&(b=-.5/e);for(let R=0;R<=e;R++){let M=R/e;u.x=-t*Math.cos(s+M*r)*Math.sin(a+x*o),u.y=t*Math.cos(a+x*o),u.z=t*Math.sin(s+M*r)*Math.sin(a+x*o),_.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),m.push(M+b,1-x),y.push(c++)}h.push(y)}for(let f=0;f<n;f++)for(let y=0;y<e;y++){let x=h[f][y+1],b=h[f][y],R=h[f+1][y],M=h[f+1][y+1];(f!==0||a>0)&&p.push(x,b,M),(f!==n-1||l<Math.PI)&&p.push(b,R,M)}this.setIndex(p),this.setAttribute("position",new Zt(_,3)),this.setAttribute("normal",new Zt(g,3)),this.setAttribute("uv",new Zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Wa=class i extends be{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new P,u=new P,d=new P;for(let p=0;p<=n;p++)for(let _=0;_<=s;_++){let g=_/s*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(g),u.y=(t+e*Math.cos(m))*Math.sin(g),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(_/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let _=1;_<=s;_++){let g=(s+1)*p+_-1,m=(s+1)*(p-1)+_-1,f=(s+1)*(p-1)+_,y=(s+1)*p+_;a.push(g,m,y),a.push(m,f,y)}this.setIndex(a),this.setAttribute("position",new Zt(o,3)),this.setAttribute("normal",new Zt(l,3)),this.setAttribute("uv",new Zt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var rn=class extends di{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zd,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function ma(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Pv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var vs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ic=class extends vs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nu,endingEnd:Nu}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ou:r=t,o=2*e-n;break;case Fu:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ou:a=t,l=2*n-e;break;case Fu:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,_=(n-e)/(s-e),g=_*_,m=g*_,f=-d*m+2*d*g-d*_,y=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*_+1,x=(-1-p)*m+(1.5+p)*g+.5*_,b=p*m-p*g;for(let R=0;R!==o;++R)r[R]=f*a[h+R]+y*a[c+R]+x*a[l+R]+b*a[u+R];return r}},sc=class extends vs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},rc=class extends vs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},bn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ma(e,this.TimeBufferType),this.values=ma(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ma(t.times,Array),values:ma(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new rc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new sc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ic(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case _a:e=this.InterpolantFactoryMethodDiscrete;break;case xa:e=this.InterpolantFactoryMethodLinear;break;case Ko:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _a;case this.InterpolantFactoryMethodLinear:return xa;case this.InterpolantFactoryMethodSmooth:return Ko}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Pv(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ko,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,d=u-n,p=u+n;for(let _=0;_!==n;++_){let g=e[u+_];if(g!==e[d+_]||g!==e[p+_]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let p=0;p!==n;++p)e[d+p]=e[u+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};bn.prototype.TimeBufferType=Float32Array;bn.prototype.ValueBufferType=Float32Array;bn.prototype.DefaultInterpolation=xa;var Li=class extends bn{};Li.prototype.ValueTypeName="bool";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=_a;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var ac=class extends bn{};ac.prototype.ValueTypeName="color";var oc=class extends bn{};oc.prototype.ValueTypeName="number";var lc=class extends vs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Pn.slerpFlat(r,0,a,c-o,a,c,l);return r}},fr=class extends bn{InterpolantFactoryMethodLinear(t){return new lc(this.times,this.values,this.getValueSize(),t)}};fr.prototype.ValueTypeName="quaternion";fr.prototype.DefaultInterpolation=xa;fr.prototype.InterpolantFactoryMethodSmooth=void 0;var Di=class extends bn{};Di.prototype.ValueTypeName="string";Di.prototype.ValueBufferType=Array;Di.prototype.DefaultInterpolation=_a;Di.prototype.InterpolantFactoryMethodLinear=void 0;Di.prototype.InterpolantFactoryMethodSmooth=void 0;var cc=class extends bn{};cc.prototype.ValueTypeName="vector";var hc=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],_=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null}}},Iv=new hc,uc=class{constructor(t){this.manager=t!==void 0?t:Iv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};uc.DEFAULT_MATERIAL_NAME="__DEFAULT";var pr=class extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},mr=class extends pr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},El=new oe,Fd=new P,Bd=new P,dc=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nr,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new Ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Fd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Fd),Bd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Bd),e.updateMatrixWorld(),El.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(El),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(El)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var fc=class extends dc{constructor(){super(new Ia(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ui=class extends pr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new fc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},$a=class extends pr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Sc="\\[\\]\\.:\\/",Lv=new RegExp("["+Sc+"]","g"),bc="[^"+Sc+"]",Dv="[^"+Sc.replace("\\.","")+"]",Uv=/((?:WC+[\/:])*)/.source.replace("WC",bc),Nv=/(WCOD+)?/.source.replace("WCOD",Dv),Ov=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bc),Fv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bc),Bv=new RegExp("^"+Uv+Nv+Ov+Fv+"$"),kv=["material","materials","bones","map"],pc=class{constructor(t,e,n){let s=n||ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ue=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Lv,"")}static parseTrackName(t){let e=Bv.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);kv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ue.Composite=pc;ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ue.prototype.GetterByBindingType=[ue.prototype._getValue_direct,ue.prototype._getValue_array,ue.prototype._getValue_arrayElement,ue.prototype._getValue_toArray];ue.prototype.SetterByBindingTypeAndVersioning=[[ue.prototype._setValue_direct,ue.prototype._setValue_direct_setNeedsUpdate,ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_array,ue.prototype._setValue_array_setNeedsUpdate,ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_arrayElement,ue.prototype._setValue_arrayElement_setNeedsUpdate,ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_fromArray,ue.prototype._setValue_fromArray_setNeedsUpdate,ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var rb=new Float32Array(1);var Ms=class{constructor(t,e,n=0,s=1/0){this.ray=new tr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new er,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return mc(t,this,n,e),n.sort(kd),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)mc(t[s],this,n,e);return n.sort(kd),n}};function kd(i,t){return i.distance-t.distance}function mc(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){let s=i.children;for(let r=0,a=s.length;r<a;r++)mc(s[r],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gc);function gr(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new be,c=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(u.morphAttributes[p])}if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0,u=[];for(let d=0;d<i.length;++d){let p=i[d].index;for(let _=0;_<p.count;++_)u.push(p.getX(_)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=uf(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let p=[];for(let g=0;g<a[h].length;++g)p.push(a[h][g][d]);let _=uf(p);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(_)}}return l}function uf(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}let a=new t(r),o=0;for(let c=0;c<i.length;++c)a.set(i[c].array,o),o+=i[c].array.length;let l=new Pe(a,e,n);return s!==void 0&&(l.gpuType=s),l}function Ja(i){return i.w*.95/2}function ja(i){return i.h*.95/2}function Ec(i){let t=document.createElement("canvas");t.width=i,t.height=i;let e=t.getContext("2d"),n=e.createImageData(i,i),s=n.data;for(let a=0;a<s.length;a+=4){let o=Math.floor(128+(Math.random()-.5)*80);s[a]=s[a+1]=s[a+2]=o,s[a+3]=255}e.putImageData(n,0,0);let r=new xs(t);return r.wrapS=r.wrapT=Js,r.repeat.set(4,4),r.needsUpdate=!0,r}function df(i,t,e,n){let s=i.getAttribute("position");if(!s)return;let r=s.count,a=new Float32Array(r*3);for(let o=0;o<r;o++)a[o*3]=t,a[o*3+1]=e,a[o*3+2]=n;i.setAttribute("color",new Pe(a,3))}function Tc(i){let t=new ve,e=Ja(i),n=ja(i),s=new Je(.95,.35,.95),r=Ec(64),a=.88,o=.02,l=[];t.userData.swayingFoliage=[];let c=new rn({color:4007959,roughness:.9});c.bumpMap=r,c.bumpScale=.12;let h=new rn({color:2972205,roughness:.85});h.bumpMap=r,h.bumpScale=.18;let u=new un(.12,.14,1,6),d=new Sn(.45,.9,5),p=new Sn(.34,.45,5),_=new Sn(.23,.4,5),g=.12;function m(k,C,L){let K=L+.02,Z=[[k-g,K,C-g],[k+g,K,C+g],[k-g,K,C+g],[k+g,K,C-g],[k-g+.06,K,C-g+.06],[k+g-.06,K,C+g-.06],[k-g+.06,K,C+g-.06],[k+g-.06,K,C-g+.06]],J=new Float32Array(Z.length*3);for(let Y=0;Y<Z.length;Y++)J[Y*3]=Z[Y][0],J[Y*3+1]=Z[Y][1],J[Y*3+2]=Z[Y][2];let G=new be;return G.setAttribute("position",new Pe(J,3)),G}let f=0;for(let k=0;k<i.h;k++)for(let C=0;C<i.w;C++)i.path[k][C]&&f++;let y=new rn({color:16777215,roughness:a,metalness:o,bumpMap:r,bumpScale:.12}),x=new Ua(s,y,f);x.userData.tileGridGround=!0,x.userData.insideTileGx=new Uint16Array(f),x.userData.insideTileGy=new Uint16Array(f),x.castShadow=!1,x.receiveShadow=!0,x.frustumCulled=!1;let b=[],R=[],M=[],S=[],D=new Ie,v=new kt,T=new oe,O=new Pn,X=new ms,j=new P,I=new P(1,1,1),B=0;for(let k=0;k<i.h;k++)for(let C=0;C<i.w;C++){let L=i.type[k][C],K=i.height[k][C],Z=Oo[L],J=.35+K*.35,G=J/2+.35/2,Y=C*.95-e+.95/2,st=k*.95-n+.95/2,ht=(Z>>16&255)/255,lt=(Z>>8&255)/255,mt=(Z&255)/255,gt=ht,Et=lt,Lt=mt;if(L===wt.PATH||L===wt.TREE||L===wt.ROCK){let A=Math.random()*.45;gt=ht*(1-A)+.42*A,Et=lt*(1-A)+.26*A,Lt=mt*(1-A)+.14*A}(L===wt.TREE||L===wt.ROCK)&&(gt*=.5,Et*=.5,Lt*=.5);let H=1+(Math.random()-.5)*.12,he=Math.min(1,gt*H),Tt=Math.min(1,Et*H),Pt=Math.min(1,Lt*H);if(i.path[k][C])x.userData.insideTileGx[B]=C,x.userData.insideTileGy[B]=k,v.setRGB(he,Tt,Pt),x.setColorAt(B,v),D.position.set(Y,J/2,st),D.updateMatrix(),x.setMatrixAt(B,D.matrix),B++;else{let xt=s.clone();if(D.position.set(Y,J/2,st),D.updateMatrix(),xt.applyMatrix4(D.matrix),df(xt,he,Tt,Pt),b.push(xt),L===wt.TREE)S.push(m(Y,st,G));else if(L===wt.WATER){let zt=Oo[wt.WATER],It=(zt>>16&255)/255,A=(zt>>8&255)/255,E=(zt&255)/255,z=1+(Math.random()-.5)*.12,Q=new je(.95,.95);Q.rotateX(-Math.PI/2),D.position.set(Y,G+.02,st),D.rotation.set(0,0,0),D.scale.set(1,1,1),D.updateMatrix(),Q.applyMatrix4(D.matrix),df(Q,Math.min(1,It*z),Math.min(1,A*z),Math.min(1,E*z)),R.push(Q)}else if(L===wt.ROCK){let zt=(It,A,E)=>{let z=new Ga(It,0);X.set(Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2),O.setFromEuler(X),j.set(Y+A,G+It-.2,st+E),T.compose(j,O,I),z.applyMatrix4(T),M.push(z)};zt(.32+Math.random()*.14,(Math.random()-.5)*.15,(Math.random()-.5)*.15),zt(.2+Math.random()*.12,(Math.random()-.5)*.25,(Math.random()-.5)*.25),zt(.12+Math.random()*.12,(Math.random()-.5)*.28,(Math.random()-.5)*.28)}}}x.instanceMatrix.needsUpdate=!0,x.instanceColor&&(x.instanceColor.needsUpdate=!0),t.add(x);let $=k=>{for(let C=0;C<k.length;C++)k[C].dispose()};if(b.length>0){let k=gr(b);if($(b),k){let C=new rn({color:16777215,vertexColors:!0,roughness:a,metalness:o,bumpMap:r,bumpScale:.12}),L=new yt(k,C);L.receiveShadow=!0,L.castShadow=!1,L.frustumCulled=!1,L.userData.mergedOutsidePick=!0,t.add(L)}}if(S.length>0){let k=gr(S);if($(S),k){let C=new Na(k,new ar({color:855309,linewidth:1}));C.frustumCulled=!1,C.userData.mergedOutsidePick=!0,t.add(C)}}if(M.length>0){let k=gr(M);if($(M),k){let C=new rn({color:6974058,roughness:.9});C.bumpMap=r,C.bumpScale=.2;let L=new yt(k,C);L.castShadow=!0,L.frustumCulled=!1,L.userData.mergedOutsidePick=!0,t.add(L)}}if(R.length>0){let k=gr(R);if($(R),k){let C=new rn({color:16777215,vertexColors:!0,roughness:.08,metalness:.45,transparent:!0,opacity:.94,bumpMap:r,bumpScale:.03}),L=new yt(k,C);L.receiveShadow=!0,L.frustumCulled=!1,L.userData.mergedOutsidePick=!0,t.add(L)}}for(let k=0;k<i.h;k++)for(let C=0;C<i.w;C++){if(i.path[k][C]||i.type[k][C]!==wt.TREE)continue;let L=i.height[k][C],Z=(.35+L*.35)/2+.35/2,J=C*.95-e+.95/2,G=k*.95-n+.95/2,Y=new ve;Y.userData={gx:C,gy:k},Y.position.set(J,Z,G);let st=C===0||C===i.w-1||k===0||k===i.h-1,ht=st?.75+Math.random()*.35:.5+Math.random()*.2,lt=new yt(u,c);lt.scale.y=ht,lt.position.set(0,ht/2,0),lt.castShadow=!0,lt.raycast=function(){},Y.add(lt);let mt=st?.52:.45,gt=st?1.05:.9,Et=.12,Lt=gt*.5,H=gt*.45,he=gt*.4,Tt=new ve;Tt.position.set(0,ht,0);let Pt=new yt(d,h);Pt.scale.set(mt/.45,Lt/.9,mt/.45),Pt.position.set(0,Lt/2,0),Pt.castShadow=!0,Pt.raycast=function(){},Tt.add(Pt);let xt=new yt(p,h);xt.scale.set(mt*.75/.34,H/.45,mt*.75/.34),xt.position.set(0,Lt-Et+H/2,0),xt.castShadow=!0,xt.raycast=function(){},Tt.add(xt);let zt=new yt(_,h);zt.scale.set(mt*.5/.23,he/.4,mt*.5/.23),zt.position.set(0,Lt-Et+H-Et+he/2,0),zt.castShadow=!0,zt.raycast=function(){},Tt.add(zt),Y.add(Tt);let It=(i.w-1)*.5,A=(i.h-1)*.5,E=Math.max(3.5,Math.min(i.w,i.h)*.24);(C-It)**2+(k-A)**2<=E*E&&Math.random()<.35&&t.userData.swayingFoliage.push({group:Tt,phase:Math.random()*Math.PI*2}),t.add(Y),l.push(Y)}return t.userData.treeGroups=l,t}function Hv(){let i=document.createElement("canvas");i.width=4,i.height=512;let t=i.getContext("2d"),e=t.createLinearGradient(0,0,0,512);e.addColorStop(0,"#6a9fd4"),e.addColorStop(.48,"#9ec4e8"),e.addColorStop(.82,"#c8daf0"),e.addColorStop(1,"#dce8f4"),t.fillStyle=e,t.fillRect(0,0,4,512);let n=new xs(i);return n.colorSpace=Se,n.magFilter=Ve,n.minFilter=Ve,n}function zv(){let i=new sr;i.add(new mr(12114168,3817520,1));let t=new Ui(16775920,.72);t.position.set(.6,1.9,.5),i.add(t);let e=new Ui(10533080,.14);return e.position.set(-1.2,.8,-1),i.add(e),i}var Qa=class{constructor(t,e){this.container=t,this.world=e,this.hw=Ja(e),this.hh=ja(e),this.scene=new sr;let n=12899556;this.scene.background=Hv(),this.scene.fog=new Da(n,38,100),this.camera=new We(50,t.clientWidth/t.clientHeight,.1,200);let s=new $a(16054527,.24);this.scene.add(s);let r=new mr(11587824,4016692,.36);this.scene.add(r);let a=new Ui(16775406,1.28);a.position.set(32,48,22),a.castShadow=!0,a.shadow.mapSize.width=1024,a.shadow.mapSize.height=1024,a.shadow.camera.near=1,a.shadow.camera.far=120,a.shadow.camera.left=-50,a.shadow.camera.right=50,a.shadow.camera.top=50,a.shadow.camera.bottom=-50,a.shadow.normalBias=.02,this.scene.add(a),this.sun=a;let o=new Ui(12636392,.14);o.position.set(-24,28,-18),this.scene.add(o),this.tilesGroup=Tc(e),this.scene.add(this.tilesGroup),this._calmTerrainIBL(),this.renderer=new ir({antialias:!1,powerPreference:"high-performance"}),this.renderer.setSize(t.clientWidth,t.clientHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Xa,this.renderer.shadowMap.autoUpdate=!1,this.renderer.shadowMap.needsUpdate=!0,this.renderer.toneMapping=_c,this.renderer.toneMappingExposure=1.1,t.appendChild(this.renderer.domElement);let l=new _s(this.renderer);this.scene.environment=l.fromScene(zv(),.04).texture,l.dispose(),this.needsRender=!0,this.lastInteractionTime=0,this.lastIdleFrameTime=0,this._frameCount=0,this._loopActive=!1,this._cameraActive=!1,this._tweensActive=!1,this.pulseMaterials=[],this._resize=this._resize.bind(this),this._animate=this._animate.bind(this),window.addEventListener("resize",this._resize),this._resize()}worldPos(t,e,n){let s=this.world,a=(.35+s.height[e][t]*.35)/2+.35/2,o=n||new P;return o.set(t*.95-this.hw+.95/2,a,e*.95-this.hh+.95/2),o}surfaceY(t,e){return(.35+this.world.height[e][t]*.35)/2+.35/2}markDirty(){this.needsRender=!0,this._loopActive||this._animate()}setPresentationActive({camera:t=this._cameraActive,tweens:e=this._tweensActive}={}){this._cameraActive=t,this._tweensActive=e,(t||e)&&this.markDirty()}invalidateShadows(){this.renderer.shadowMap.needsUpdate=!0,this.markDirty()}requestRender(){this.needsRender=!0,this.lastInteractionTime=performance.now(),this._loopActive||this._animate()}setWorld(t){this.scene.remove(this.tilesGroup),this.tilesGroup.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(s=>s.dispose())}),this.world=t,this.hw=Ja(t),this.hh=ja(t),this.tilesGroup=Tc(t),this.scene.add(this.tilesGroup),this._calmTerrainIBL(),this.requestRender()}_calmTerrainIBL(){this.tilesGroup.traverse(t=>{if(!t.isMesh||!t.material)return;(Array.isArray(t.material)?t.material:[t.material]).forEach(n=>{"envMapIntensity"in n&&(n.envMapIntensity=.22)})})}_resize(){let t=this.container.clientWidth,e=this.container.clientHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.requestRender()}start(){this._loopActive=!0,this._animate()}_animate(t=0){let e=this.tilesGroup.userData&&this.tilesGroup.userData.swayingFoliage;this.lastInteractionTime===0&&(this.lastInteractionTime=t);let n=t-this.lastInteractionTime>500,s=this.pulseMaterials.length>0,r=e&&e.length>0&&!n,a=this._cameraActive||this._tweensActive;if(r){let h=t*.0017;for(let u=0;u<e.length;u++){let{group:d,phase:p}=e[u];d.rotation.z=Math.sin(h+p)*.14,d.rotation.x=Math.sin(h*.79+p*1.55)*.09,d.rotation.y=Math.sin(h*.62+p*.9)*.055}this.needsRender=!0}this.onFrame&&this.onFrame(t),this._frameCount++;let o=()=>{if(!this.needsRender)return;let h=.6+.4*Math.sin(t*.004),u=this.pulseMaterials;for(let d=0;d<u.length;d++){let p=d%2===0?.4:.7;u[d].opacity=p*h}this.renderer.render(this.scene,this.camera),this.renderer.shadowMap.needsUpdate=!1,this.needsRender=!1};!n&&!a&&this._frameCount%2===0&&(this.needsRender=!0);let l=a&&this._cameraActive&&!this._tweensActive&&this._frameCount%2!==0;n&&!a?(s||this.needsRender)&&t-this.lastIdleFrameTime>=100&&(this.lastIdleFrameTime=t,o()):l||o(),r||s||!n||a?(this._loopActive=!0,requestAnimationFrame(this._animate)):this._loopActive=!1}};var to=new Map,eo=new Map;function ee(i,t){return to.has(i)||to.set(i,t()),to.get(i)}function Ln(i,t){return eo.has(i)||eo.set(i,t()),eo.get(i)}function Gv(i,t,e){return!t||!i||(i.bumpMap=t,i.bumpScale=e,"envMapIntensity"in i&&(i.envMapIntensity=.85)),i}function Vv(i,t,e=.5,n=.2){let s=e*10|0,r=n*10|0;return`${i}:${t}:${s}:${r}`}function En(i,t,e,{roughness:n=.5,metalness:s=.2,bumpScale:r=.1}={}){let a=t instanceof kt?t.getHex():t,o=Vv(i,a,n,s),l=Ln(o,()=>new rn({color:a,metalness:s,roughness:n}));return Gv(l,e,r)}var wc=Ln("eyeWhite",()=>new le({color:16250363})),Ac=Ln("pupil",()=>new le({color:1314841})),no=Ln("shine",()=>new le({color:16777215})),Rc=Ln("liner",()=>new le({color:2365472})),Cc=Ln("lip",()=>new le({color:13593216})),Pc=Ln("cheek",()=>new le({color:16751531,transparent:!0,opacity:.42})),Ic=Ln("mouth",()=>new le({color:5913136})),Lc=3,Dc=6,Ni=10,Oi=8,ff=10,Uc=10;function pf(i){for(let t of to.values())if(t===i)return!0;return!1}function mf(i){for(let t of eo.values())if(t===i)return!0;return i===wc||i===Ac||i===no||i===Rc||i===Cc||i===Pc||i===Ic}var Wv=.62;function qn(i,t=!0){i.castShadow=t,i.receiveShadow=!1}function fi(i,t){let e=(i>>16&255)/255,n=(i>>8&255)/255,s=(i&255)/255,r=1+(Math.random()-.5)*t;return new kt(Math.min(1,e*r),Math.min(1,n*r),Math.min(1,s*r))}function Yn(i,t=Wv){let e=i instanceof kt?i:new kt(i);return new kt(Math.max(0,e.r*t),Math.max(0,e.g*t),Math.max(0,e.b*t))}function gf(i,t,e,n){let s=fn[t]||fn.knight,r=Yn(fi(s.primary,.08)),a=Yn(fi(s.secondary,.08)),o=Ye[t]&&Ye[t].gender||"male",l=o==="female",c=e??4006676,h=Yn(fi(s.skin!=null?s.skin:15250592,.06)),u=Yn(fi(c,.08)),d=En("torso",r.getHex(),n,{metalness:.3,roughness:.48,bumpScale:.1}),p=En("leg",a.getHex(),n,{metalness:.24,roughness:.55,bumpScale:.1}),_=d,g=En("skin",h.getHex(),n,{metalness:.05,roughness:.72,bumpScale:.05}),m=new ve,f=.28,y=.28,x=.12,b=.2,R=.06,M=.1,S=(N,nt)=>ee(`cap:${N}:${nt}`,()=>new cr(N,nt,Lc,Dc)),D=(N,nt,at,ct,ut)=>{let it=new ve;it.position.set(N,nt,0);let St=Math.max(.02,ct-at*2),Ot=new yt(S(at,St),ut);return Ot.position.y=-ct/2,qn(Ot),it.add(Ot),m.add(it),{pivot:it,mesh:Ot,length:ct}},v=f,T=l?.044:.05,O=D(-.06,f,T,v,p),X=D(.06,f,T,v,p),j=En("foot",Yn(a,.8).getHex(),n,{metalness:.1,roughness:.8,bumpScale:.08}),I=ee("foot",()=>new Je(.075,.045,.12)),B=N=>{let nt=new yt(I,j);nt.position.set(0,-v/2+.022,.03),N.mesh.add(nt)};B(O),B(X);let $=x/b,k;if(l){let N=new yt(ee("hips",()=>new sn(.086,Ni,Oi)),p);N.scale.set(1.3,.62,.95),N.position.set(0,f-.004,0),qn(N),m.add(N)}else{let N=new yt(S(.078,.04),p);N.rotation.z=Math.PI/2,N.scale.set(1,1.25,.75),N.position.set(0,f+.02,0),qn(N),m.add(N)}if(l){k=.058;let N=[new pt(.06,0),new pt(.058,.03),new pt(.07,.09),new pt(.09,.15),new pt(.086,.2),new pt(.088,.28)],nt=new yt(ee("fTorso",()=>new lr(N,ff)),d);if(nt.position.set(0,f,0),nt.scale.z=$+.06,qn(nt),m.add(nt),s.apron==null){let it=f+.148,St=.042,Ot=ee("bust",()=>new sn(.048,Ni,Oi));for(let Kt of[-1,1]){let Ct=new yt(Ot,d);Ct.position.set(Kt*.033,it,St),Ct.scale.set(1,.86,.62),m.add(Ct)}}let at=ee("fShoulder",()=>new sn(.092,Ni,Oi,0,Math.PI*2,0,Math.PI*.6)),ct=new yt(at,d);ct.position.set(0,f+y-.02,0),ct.scale.set(1,.55,$+.1),qn(ct),m.add(ct)}else{k=.072;let N=new yt(ee("mTorso",()=>new un(.108,k,y,Uc,1)),d);N.position.set(0,f+y/2,0),N.scale.z=$,qn(N),m.add(N);let nt=ee("mShoulder",()=>new sn(.11,Ni,Oi,0,Math.PI*2,0,Math.PI*.6)),at=new yt(nt,d);at.position.set(0,f+y-.02,0),at.scale.set(1.05,.6,$+.08),qn(at),m.add(at)}let C=.22,L=l?.03:.036,K=f+y-.02,Z=(l?.086:b/2)+L-.01,J=D(-Z,K,L,C,_),G=D(Z,K,L,C,_),Y=ee("hand",()=>new sn(.042,6,5)),st=N=>{let nt=new yt(Y,g);nt.position.set(0,-C/2,0),N.mesh.add(nt)};if(st(J),st(G),s.cape!=null){let N=b*1.95,nt=N*.6,at=f+y*.28,ct=new Pi;ct.moveTo(-nt/2,at/2),ct.lineTo(nt/2,at/2),ct.lineTo(N/2,-at/2),ct.lineTo(-N/2,-at/2),ct.closePath();let ut=Yn(fi(s.cape,.08)).getHex(),it=En("cape",ut,n,{metalness:.15,roughness:.8,bumpScale:.12});it.side=_e;let St=new yt(new ys(ct),it);St.position.set(0,f+y-at/2+.05,-x/2-.02),St.rotation.y=Math.PI,m.add(St);let Ot=.055,Kt=f+y+.02,Ct=.02,rt=b/2+R*.5,U=ee("capePad",()=>new sn(Ot,8,6,0,Math.PI*2,0,Math.PI*.55)),ot=new yt(U,it);ot.position.set(-rt,Kt,Ct),ot.rotation.x=-Math.PI*.35,ot.rotation.z=Math.PI*.5,ot.scale.set(1.2,.85,1.1),m.add(ot);let dt=new yt(U,it);dt.position.set(rt,Kt,Ct),dt.rotation.x=-Math.PI*.35,dt.rotation.z=-Math.PI*.5,dt.scale.set(1.2,.85,1.1),m.add(dt)}if(s.belt!=null){let N=En("belt",Yn(fi(s.belt,.08)).getHex(),n,{metalness:.2,roughness:.6,bumpScale:.1}),nt=k+.014,at=new yt(ee("belt",()=>new un(1,1,.03,Uc)),N);at.scale.set(nt,1,nt*($+(l?.06:0))),at.position.set(0,f+(l?.05:.04),0),m.add(at)}if(s.apron!=null){let N=En("apron",Yn(fi(s.apron,.08)).getHex(),n,{metalness:.08,roughness:.75,bumpScale:.12});if(N.side=_e,l){let nt=f+.235,at=f-.02,ct=nt-at,ut=Math.PI*.9,it=ee("fApron",()=>new un(.11,.118,1,16,1,!0,-ut/2,ut)),St=new yt(it,N);St.scale.set(.84,ct,.7),St.position.set(0,(nt+at)/2,.008),m.add(St);let Ot=f+y+.02,Kt=.05,Ct=Ot-nt+.02,rt=ee("strap",()=>new Je(.02,1,.01));for(let U of[-1,1]){let ot=new yt(rt,N);ot.scale.y=Ct,ot.position.set(U*Kt,(nt+Ot)/2,.062),ot.rotation.x=-.12,m.add(ot)}}else{let nt=b*.95,at=f*.85,ct=f+.2,ut=new yt(ee("mApron",()=>new je(nt,at)),N);ut.position.set(0,ct-at/2,x/2+.02),m.add(ut);let it=f+y+.02,St=b/2+R*.2,Ot=it-ct,Kt=ee("mStrap",()=>new Je(.018,1,.008)),Ct=new yt(Kt,N);Ct.scale.y=Ot,Ct.position.set(-St,(ct+it)/2,x/2+.015),m.add(Ct);let rt=new yt(Kt,N);rt.scale.y=Ot,rt.position.set(St,(ct+it)/2,x/2+.015),m.add(rt)}}let ht=new yt(ee("neck",()=>new un(.032,.038,.06,8)),g);ht.position.set(0,f+y+.02,0),qn(ht),m.add(ht);let lt=ee("head",()=>new sn(M,Ni,Oi)),mt=new yt(lt,g);mt.position.set(0,f+y+M,0),mt.scale.set(.92,1.05,.96),qn(mt),m.add(mt);let gt=M,Et=(N,nt)=>Math.sqrt(Math.max(1e-4,gt*gt-N*N-nt*nt)),Lt=(N,nt,at=12)=>new yt(ee(`circle:${at}:${N}`,()=>new Ha(N,at)),nt),H=l?[5935062,5223305,10120150,4633545,11891263,8215263]:[4863270,3747871,3099192,3820124,5913124],he=H[Math.floor(Math.random()*H.length)],Tt=Ln(`iris:${he}`,()=>new le({color:he})),Pt=En("brow",u.getHex(),null,{metalness:0,roughness:.85,bumpScale:0}),xt=gt*.36,zt=gt*.12,It=gt*(l?.135:.1),A=l?1.02:1,E=l?1.35:.78;for(let N of[-1,1]){let nt=new ve;nt.position.set(N*xt,zt,Et(xt,zt)+.002),mt.add(nt);let at=Lt(It,wc);at.scale.set(A,E,1),nt.add(at);let ct=Lt(gt*(l?.095:.07),Tt);ct.position.set(0,-gt*.012,.001),ct.scale.set(1,Math.min(1.2,E),1),nt.add(ct);let ut=Lt(gt*(l?.05:.038),Ac);ut.position.set(0,-gt*.012,.002),ut.scale.set(1,Math.min(1.2,E),1),nt.add(ut);let it=Lt(gt*.028,no);if(it.position.set(-N*gt*.03,gt*.035,.003),nt.add(it),l){let Ct=Lt(gt*.015,no);Ct.position.set(N*gt*.025,-gt*.03,.003),nt.add(Ct)}let St=new yt(new Je(It*2*A*.98,gt*(l?.03:.022),.004),Rc);St.position.set(0,It*E*.82,.003),St.rotation.z=N*(l?-.03:0),nt.add(St);let Ot=zt+gt*(l?.32:.3),Kt=new yt(new Je(gt*.26,gt*(l?.026:.05),.02),Pt);Kt.position.set(N*xt,Ot,Et(xt,Ot)+.002),Kt.rotation.z=N*(l?-.14:-.05),mt.add(Kt)}let z=-gt*.05,Q=ee("nose",()=>new sn(.045,6,5)),tt=new yt(Q,g);tt.position.set(0,z,Et(0,z)),tt.scale.set(.85,.7,.55),mt.add(tt);let et=-gt*.3;if(l){let N=Lt(gt*.08,Cc,14);N.position.set(0,et,Et(0,et)+.002),N.scale.set(1.15,.5,1),mt.add(N);for(let nt of[-1,1]){let at=nt*gt*.42,ct=-gt*.1,ut=Lt(gt*.072,Pc,10);ut.position.set(at,ct,Et(at,ct)+.001),ut.scale.set(1,.75,1),mt.add(ut)}}else{let N=new yt(ee("mouthBox",()=>new Je(.4,.05,.02)),Ic);N.scale.set(gt,gt,gt),N.position.set(0,et,Et(0,et)+.002),mt.add(N)}let bt=En("hair",u.getHex(),n,{metalness:.05,roughness:.85,bumpScale:.15}),_t=ee("bang",()=>new Sn(.22,.32,5)),Mt=N=>{let nt=M*.32,at=M*.22,ct=new yt(_t,bt);ct.scale.set(at*.9/.22,nt/.32,at*.9/.22),ct.position.set(-M*.25,M*.22,M*.72),ct.rotation.x=.35,ct.rotation.z=.12,N.add(ct);let ut=new yt(_t,bt);ut.scale.set(at/.22,nt/.32,at/.22),ut.position.set(M*.28,M*.18,M*.68),ut.rotation.x=.28,ut.rotation.z=-.1,N.add(ut);let it=new yt(_t,bt);it.scale.set(at*.7/.22,nt*.9/.32,at*.7/.22),it.position.set(0,M*.28,M*.78),it.rotation.x=.4,N.add(it)},Dt=ee("hairTop",()=>new sn(.92,Ni,Oi,0,Math.PI*2,0,Math.PI*.52)),Vt=ee("hairLong",()=>new cr(.55,1.5,Lc,Dc));if(o==="female"){let N=new yt(Dt,bt);N.scale.setScalar(M),N.position.set(0,M*.28,-M*.18),N.rotation.y=.06,N.rotation.x=-.04,mt.add(N);let nt=new yt(Vt,bt);nt.scale.set(M*1.05,M,M*.5),nt.position.set(0,-M*.6,-M*.95),nt.rotation.z=.03,mt.add(nt),Mt(mt)}else{let N=new yt(Dt,bt);N.scale.setScalar(M*.9),N.position.set(0,M*.4,-M*.12),N.rotation.y=.08,N.rotation.x=-.05,N.rotation.z=.04,mt.add(N);let nt=new yt(ee("hairSides",()=>new sn(.75,8,6,Math.PI*.2,Math.PI*.6,0,Math.PI*.4)),bt);nt.scale.setScalar(M),nt.position.set(0,M*.1,-M*.05),nt.rotation.y=.1,mt.add(nt),Mt(mt)}if(s.horns!=null){let N=En("horns",Yn(fi(s.horns,.08)).getHex(),n,{metalness:.12,roughness:.62,bumpScale:.1}),nt=new yt(ee("hornBand",()=>new Wa(1.12,.22,6,16)),N);nt.scale.setScalar(M),nt.rotation.x=Math.PI/2,nt.position.y=M*.42,mt.add(nt);let at=M*.48,ct=M*2.55,ut=ee("horn",()=>new Sn(.48,2.55,6)),it=new yt(ut,N);it.scale.set(at/.48,ct/2.55,at/.48),it.position.set(-M*1.02,M*.18,M*.02),it.rotation.set(-.42,-.32,.58),mt.add(it);let St=new yt(ut,N);St.scale.set(at/.48,ct/2.55,at/.48),St.position.set(M*1.02,M*.18,M*.02),St.rotation.set(-.42,.32,-.58),mt.add(St)}return m.userData.leftLeg=O.pivot,m.userData.rightLeg=X.pivot,m.userData.leftArm=J.pivot,m.userData.rightArm=G.pivot,m.userData.head=mt,m.userData.woundedSeverity=0,m.userData.baseY=0,m}function _f(i,t){i.userData.woundedSeverity=Math.max(0,Math.min(1,t)),io(i)}function xf(i){i.userData.woundedSeverity=0,io(i),$v(i)}function io(i){let t=i.userData.woundedSeverity||0,e=i.userData,n=e.baseY??i.position.y;if(t<=0){i.rotation.x=0,i.rotation.z=0,i.scale.setScalar(1),i.position.y=n,e.head&&e.head.rotation.set(0,0,0),e.leftArm&&e.leftArm.rotation.set(0,0,0),e.rightArm&&e.rightArm.rotation.set(0,0,0),e.leftLeg&&e.leftLeg.rotation.set(0,0,0),e.rightLeg&&e.rightLeg.rotation.set(0,0,0);return}i.rotation.x=t*.24,i.rotation.z=t*.05,i.scale.setScalar(1-t*.045),i.position.y=n-t*.07,e.head&&(e.head.rotation.x=t*.28,e.head.rotation.z=-t*.06),e.leftArm&&(e.leftArm.rotation.x=t*.48,e.leftArm.rotation.z=t*.14,e.leftArm.rotation.y=t*.1),e.rightArm&&(e.rightArm.rotation.x=t*.62,e.rightArm.rotation.y=-t*.38,e.rightArm.rotation.z=-t*.08),e.leftLeg&&(e.leftLeg.rotation.x=-t*.16,e.leftLeg.rotation.z=t*.05),e.rightLeg&&(e.rightLeg.rotation.x=-t*.11,e.rightLeg.rotation.z=-t*.04)}function yf(i,t){let e=Math.max(0,Math.min(1,t)),n=1-e*.2;i.traverse(s=>{if(!s.isMesh||!s.material?.color)return;s.userData.originalColor||(s.userData.originalColor=s.material.color.clone());let r=s.userData.originalColor;s.material.color.setRGB(Math.min(1,r.r*n+e*.05),r.g*n*(1-e*.1),r.b*n*(1-e*.12))})}function $v(i){i.traverse(t=>{t.isMesh&&t.material?.color&&t.userData.originalColor&&t.material.color.copy(t.userData.originalColor)})}function Nc(i){let t=i.userData.woundedSeverity||0;i.userData.baseY=t>0?i.position.y+t*.07:i.position.y,t>0&&io(i)}function vf(i,t){let e=i.userData;if(!e.leftLeg)return;let n=e.woundedSeverity||0,s=1-n*.6,r=t*Math.PI*2,a=Math.sin(r)*.5*s,o=Math.sin(r+Math.PI)*.5*s,l=n?-n*.16:0,c=n?-n*.11:0;e.leftLeg.rotation.x=l+a,e.rightLeg.rotation.x=c+o,n>0&&(e.leftLeg.rotation.z=n*.05,e.rightLeg.rotation.z=-n*.04);let h=Math.sin(r+Math.PI)*.4*s,u=Math.sin(r)*.4*s;e.leftArm&&(e.leftArm.rotation.x=n*.48+h*.25,n>0&&(e.leftArm.rotation.z=n*.14,e.leftArm.rotation.y=n*.1)),e.rightArm&&(e.rightArm.rotation.x=n*.62+u*.15,n>0&&(e.rightArm.rotation.y=-n*.38,e.rightArm.rotation.z=-n*.08))}function Mf(i){let t=i.userData;if(t.leftLeg){if((t.woundedSeverity||0)>0){io(i);return}t.leftLeg.rotation.set(0,0,0),t.rightLeg.rotation.set(0,0,0),t.leftArm.rotation.set(0,0,0),t.rightArm.rotation.set(0,0,0)}}var Sf=280,Xv=280,qv=500,Yv=400,Kv=600,Zv=3368703,Jv=13382451,jv=.02,Oc=.35,bf={1:new le({color:Zv,side:_e}),2:new le({color:Jv,side:_e})},Qv=new un(.035,.035,.4,5);function tM(i){return i===1?Math.PI:0}function eM(i){let t=i.facing;return t&&(t.dx!==0||t.dy!==0)?Math.atan2(t.dx,t.dy):tM(i.player)}var nM=i=>i*i*(3-2*i),so=class{constructor(t,e,n,s){this.view=t,this.state=e,this.bus=n,this.tween=s,this.meshes=new Map,this.bumpMap=Ec(64),this.cameraFollow=null,this.bordersGroup=new ve,this.view.scene.add(this.bordersGroup),this.borderGeo=this._makeBorderGeometry(.95,jv),this.turnPointer=this._makeTurnPointer(),this.view.scene.add(this.turnPointer),this._subscribe()}_subscribe(){let t=this.bus;t.on("unitPlaced",({unit:e})=>{this.addUnit(e),this.updateBorders(),this.view.invalidateShadows()}),t.on("unitSummoned",({unit:e,grayscale:n})=>{if(this.addUnit(e,n),e.summonedBy!=null){let s=this.meshes.get(e.summonedBy),r=this.meshes.get(e.id);s&&r&&(r.rotation.y=s.rotation.y)}this.updateBorders(),this.updatePointer()}),t.on("unitRemoved",({unit:e})=>this.removeUnit(e)),t.on("unitDied",({unit:e})=>this.animateDeath(e)),t.on("unitStatsChanged",({unit:e})=>{this.updateSlash(e),this.updateLowHp(e)}),t.on("unitKnockback",({unit:e,to:n})=>this.moveTo(e,n.gx,n.gy)),t.on("unitMoved",({unit:e})=>{this.updateBorders(),this.updatePointer(),this.view.invalidateShadows()}),t.on("buffAnimation",({unit:e})=>this.animatePulse(e)),t.on("levelUp",({unit:e})=>this.animateLevelUp(e)),t.on("turnChanged",()=>{this.updatePointer()}),t.on("playingStarted",()=>{this.updateBorders(),this.updatePointer()}),t.on("actionResolved",()=>this.updatePointer()),t.on("initiativeChanged",()=>this.updatePointer()),t.on("worldRebuilt",()=>this.clear())}addUnit(t,e=!1){this.meshes.has(t.id)&&this.removeUnit(t);let n=gf(t.player,t.class,t.hairColor,this.bumpMap);n.position.copy(this.view.worldPos(t.x,t.y)),n.userData.baseY=n.position.y,n.rotation.y=eM(t),n.castShadow=!0,n.userData.unitId=t.id;let s=.28,r=.28,a=.12,o=new yt(new je(.18,.04),new le({color:6037528,side:_e,depthTest:!0,depthWrite:!1}));o.position.set(0,s+r/2,a/2+.02),o.rotation.x=-Math.PI/2,o.rotation.z=Math.PI/4,o.visible=t.maxHp>0&&t.hp<t.maxHp&&t.hp>0,n.add(o),n.userData.slashMark=o,this.view.scene.add(n),this.meshes.set(t.id,n),e&&this._makeGrayscale(n),this.updateLowHp(t),this.view.requestRender()}removeUnit(t){let e=typeof t=="object"?t.id:t,n=this.meshes.get(e);n&&(this.view.scene.remove(n),n.traverse(s=>{s.geometry&&!pf(s.geometry)&&s.geometry.dispose(),s.material&&(Array.isArray(s.material)?s.material:[s.material]).forEach(a=>{mf(a)||a.dispose()})}),this.meshes.delete(e),this.updateBorders(),this.view.requestRender())}clear(){for(let t of Array.from(this.meshes.keys()))this.removeUnit(t)}moveTo(t,e,n){let s=this.meshes.get(t.id);s&&(s.position.copy(this.view.worldPos(e,n)),Nc(s),this.updateBorders(),this.view.requestRender())}updateSlash(t){let e=this.meshes.get(t.id);!e||!e.userData.slashMark||(e.userData.slashMark.visible=t.maxHp>0&&t.hp<t.maxHp&&t.hp>0,this.view.requestRender())}updateLowHp(t){let e=this.meshes.get(t.id);if(!e)return;let n=t.maxHp>0?t.hp/t.maxHp:1;if(n<Oc&&t.hp>0){let r=Math.min(1,(Oc-n)/Oc);e.userData.baseY=e.position.y+(e.userData.woundedSeverity||0)*.07,_f(e,r),yf(e,r),e.userData.slashMark&&(e.userData.slashMark.visible=!0)}else xf(e);this.view.requestRender()}_makeGrayscale(t){t.traverse(n=>{if(!n.isMesh||!n.material||!n.material.color)return;let s=n.material.color,r=.2126*s.r+.7152*s.g+.0722*s.b,a=Math.max(0,Math.min(1,r*.55));s.setRGB(a,a,a)})}_makeBorderGeometry(t,e){let n=t/2,s=n-e,r=new Pi;r.moveTo(-n,-n),r.lineTo(n,-n),r.lineTo(n,n),r.lineTo(-n,n),r.lineTo(-n,-n);let a=new Ci;return a.moveTo(-s,-s),a.lineTo(s,-s),a.lineTo(s,s),a.lineTo(-s,s),a.lineTo(-s,-s),r.holes.push(a),new ys(r)}updateBorders(t=null){let e=this.state.units,n=e.filter(s=>s.hp>0&&s.id!==t).map(s=>`${s.id},${s.x},${s.y},${s.player}`).sort().join("|");if(!(this._borderSig===n&&this._borderExclude===t)){for(this._borderSig=n,this._borderExclude=t;this.bordersGroup.children.length;)this.bordersGroup.remove(this.bordersGroup.children[0]);e.filter(s=>s.hp>0&&s.id!==t).forEach(s=>{let r=this.view.worldPos(s.x,s.y),a=this.view.surfaceY(s.x,s.y)+.02,o=bf[s.player]||bf[1],l=new yt(this.borderGeo,o);l.rotation.x=-Math.PI/2,l.position.set(r.x,a,r.z),this.bordersGroup.add(l)}),this.view.requestRender()}}_makeTurnPointer(){let t=new yt(new Sn(.1,.25,6),new le({color:8102901}));return t.rotation.x=Math.PI,t.visible=!1,t}updatePointer(){let t=this.state,e={1:8102901,2:15628943},n=()=>{this.turnPointer.visible=!1,this.turnPointer.removeFromParent(),this.view.scene.add(this.turnPointer)};if(t.phase!=="playing"||t.initiativeOrder.length===0)return n();let s=t.getActiveUnit();if(!s||s.hp<=0)return n();let r=this.meshes.get(s.id);if(!r){this.turnPointer.visible=!1;return}this.turnPointer.removeFromParent(),r.add(this.turnPointer),this.turnPointer.position.set(0,1.15,0),this.turnPointer.material&&this.turnPointer.material.color.setHex(e[s.player]??e[1]),this.turnPointer.visible=!0,this.view.requestRender()}_run(t,e,n=Go){return new Promise(s=>{this.tween.add({duration:t,ease:n,onUpdate:r=>{e(r),this.view.requestRender()},onComplete:s})})}async animateMove(t,e){let n=this.meshes.get(t.id);if(!n)return;this.updateBorders(t.id);let s=this.state.settings.moveDurationMs||300;for(let r=1;r<e.length;r++){let a=this.view.worldPos(e[r-1].x,e[r-1].y).clone(),o=this.view.worldPos(e[r].x,e[r].y).clone(),l=o.x-a.x,c=o.z-a.z;l*l+c*c>1e-6&&(n.rotation.y=Math.atan2(l,c)),await this._run(s,h=>{let u=nM(h);n.position.lerpVectors(a,o,u),vf(n,u),this.view.invalidateShadows(),this.cameraFollow&&this.cameraFollow(n.position)},h=>h)}Mf(n),Nc(n),this.updateBorders()}async animateAttack(t,e,n){let s=this.meshes.get(t.id);if(!s)return;let r=this.view.worldPos(t.x,t.y).clone(),a=this.view.worldPos(e.x,e.y).clone(),o=a.x-r.x,l=a.z-r.z;o*o+l*l>1e-6&&(s.rotation.y=Math.atan2(o,l));let c=t.range!=null?t.range:1,h=Math.max(1,n&&n.length||1);for(let u=0;u<h;u++)if(c>2)await this._fireProjectile(r,a,16763972);else{let d=r.clone().lerp(a,.35);await this._run(Sf/2,p=>s.position.lerpVectors(r,d,p)),await this._run(Sf/2,p=>s.position.lerpVectors(d,r,p))}s.position.copy(r)}async animateSkill(t,e,n){let s=this.meshes.get(t.id);if(!s)return;if(e&&(e.x!==t.x||e.y!==t.y)){let a=this.view.worldPos(t.x,t.y).clone(),o=this.view.worldPos(e.x,e.y).clone(),l=o.x-a.x,c=o.z-a.z;if(l*l+c*c>1e-6&&(s.rotation.y=Math.atan2(l,c)),(n&&n.range||1)>1){await this._fireProjectile(a,o,6737151);return}}let r=s.position.y;await this._run(220,a=>{s.position.y=r+Math.sin(a*Math.PI)*.18}),s.position.y=r}_fireProjectile(t,e,n){let s=new le({color:n}),r=new yt(Qv,s),a=t.clone();a.y+=.6;let o=e.clone();return o.y+=.6,r.position.copy(a),r.quaternion.setFromUnitVectors(new P(0,1,0),o.clone().sub(a).normalize()),this.view.scene.add(r),this._run(Xv,l=>r.position.lerpVectors(a,o,l),l=>l).then(()=>{this.view.scene.remove(r),s.dispose()})}animateDeath(t){let e=this.meshes.get(t.id);if(!e){this.updateBorders(),this.updatePointer();return}let n=e.position.y;this._run(qv,s=>{e.position.y=n-s*.4,e.rotation.z=s*Math.PI*.5,e.scale.setScalar(Math.max(.01,1-s))},s=>s).then(()=>{this.view.invalidateShadows(),this.removeUnit(t),this.updatePointer()})}animatePulse(t){let e=this.meshes.get(t.id);e&&this._run(Yv,n=>{let s=1+Math.sin(n*Math.PI)*.18;e.scale.setScalar(s)}).then(()=>{this.updateLowHp(t)})}animateLevelUp(t){let e=this.meshes.get(t.id);if(!e)return;let n=e.rotation.y;this._run(Kv,s=>{let r=1+Math.sin(s*Math.PI)*.25;e.scale.setScalar(r),e.rotation.y=n+s*Math.PI*2}).then(()=>{e.rotation.y=n,this.updateLowHp(t)})}};var Ef=.82,Tf=1.02,wf={move:{glow:3381759,glowOpacity:.35,square:6730751,squareOpacity:.65},attack:{glow:10035746,glowOpacity:.4,square:13386820,squareOpacity:.7},skill:{glow:8926122,glowOpacity:.4,square:11167436,squareOpacity:.7},placement:{glow:2271812,glowOpacity:.4,square:4508774,squareOpacity:.7}},ro=class{constructor(t){this.view=t,this.group=new ve,t.scene.add(this.group),this.materials=[],this.glowGeo=new je(Tf,Tf),this.squareGeo=new je(Ef,Ef)}clear(){for(;this.group.children.length;){let t=this.group.children[0];this.group.remove(t),t.geometry!==this.glowGeo&&t.geometry!==this.squareGeo&&t.geometry&&t.geometry.dispose()}this.materials.forEach(t=>t.dispose()),this.materials.length=0,this.view.pulseMaterials=[],this.view.requestRender()}show(t,e){this.clear();let n=wf[e]||wf.move;t.forEach(({gx:s,gy:r})=>{let a=this.view.surfaceY(s,r)+.01,o=this.view.worldPos(s,r),l=new le({color:n.glow,transparent:!0,opacity:n.glowOpacity,side:_e}),c=new yt(this.glowGeo,l);c.rotation.x=-Math.PI/2,c.position.set(o.x,a,o.z),this.group.add(c),this.materials.push(l);let h=new le({color:n.square,transparent:!0,opacity:n.squareOpacity,side:_e}),u=new yt(this.squareGeo,h);u.rotation.x=-Math.PI/2,u.position.set(o.x,a+.01,o.z),u.userData.gx=s,u.userData.gy=r,this.group.add(u),this.materials.push(h)}),this.view.pulseMaterials=this.materials,this.view.requestRender()}};var Af=.92,ao=class{constructor(t,e){this.view=t,this.group=new ve,t.scene.add(this.group),this.byKey=new Map,e.on("powerupSpawned",({gx:n,gy:s,type:r})=>this.add(n,s,r)),e.on("powerupCollected",({gx:n,gy:s})=>this.remove(n,s)),e.on("worldRebuilt",()=>this.clear())}_key(t,e){return e*this.view.world.w+t}add(t,e,n){let s=Jh[n],r=new yt(new Va(.22,0),new rn({color:s,metalness:.3,roughness:.4}));r.rotation.x=Math.PI/4,r.castShadow=!0,r.receiveShadow=!0;let a=this.view.worldPos(t,e);a.y+=.35,r.position.copy(a),this.group.add(r);let o=new yt(new je(Af,Af),new le({color:s,transparent:!0,opacity:.45,side:_e}));o.rotation.x=-Math.PI/2;let l=this.view.worldPos(t,e);o.position.set(l.x,this.view.surfaceY(t,e)+.01,l.z),this.group.add(o),this.byKey.set(this._key(t,e),{gem:r,glow:o}),this.view.requestRender()}remove(t,e){let n=this._key(t,e),s=this.byKey.get(n);if(s){for(let r of[s.gem,s.glow])this.group.remove(r),r.geometry.dispose(),r.material&&r.material.dispose&&r.material.dispose();this.byKey.delete(n),this.view.requestRender()}}clear(){for(let t of Array.from(this.byKey.keys())){let e=t%this.view.world.w,n=t/this.view.world.w|0;this.remove(e,n)}}};var oo=class{constructor(t){this.view=t,this.layer=document.createElement("div"),this.layer.id="combat-text-layer",t.container.appendChild(this.layer)}_spawn(t,e,n,s,r){let a=document.createElement("div");a.className=n,a.textContent=e,a.style.position="absolute",this.layer.appendChild(a);let o=this.view,l=performance.now(),c=0,h=o.worldPos(0,0).clone(),u=()=>{t(h),h.y+=s,h.project(o.camera);let p=o.container.clientWidth,_=o.container.clientHeight;a.style.left=(h.x*.5+.5)*p+"px",a.style.top=(1-(h.y*.5+.5))*_+"px"},d=()=>{c%2===0&&u(),c++,performance.now()-l<r?requestAnimationFrame(d):a.remove()};requestAnimationFrame(d)}showCombat(t,e,n,s,r){let a="combat-text-float "+(s?"miss":"damage")+(r?" "+r:""),o=r==="skill-name"?1.7:1.2;this._spawn(l=>this.view.worldPos(t,e,l),n,a,o,1400)}showLevelUp(t,e,n){let s="combat-text-float "+(n||"levelup");this._spawn(r=>this.view.worldPos(t,e,r),"LEVEL UP!",s,1.2,1500)}};function Rf(i,t,e){let n=new Qa(i,t.world),s=new zr;s.onFrame=()=>n.setPresentationActive({camera:n._cameraActive,tweens:s.active});let r=new so(n,t,e,s),a=new ro(n),o=new ao(n,e),l=new oo(n);return e.on("floatingText",({gx:c,gy:h,text:u,kind:d})=>{let p=d==="miss",_=d==="damage"||d==="miss"?void 0:d;l.showCombat(c,h,u,p,_)}),e.on("levelUp",({unit:c})=>{let h=c.level>=3?"levelup level3":c.level>=2?"levelup level2":"levelup";l.showLevelUp(c.x,c.y,h)}),n.start(),{view:n,tween:s,units:r,highlights:a,powerups:o,floatingText:l,animator:r}}var Fc=17,iM=.003,sM=400,rM=1.8*1.8,aM=1,oM=40,lM=-Math.PI*.4,cM=Math.PI*.4,Cf=.004,lo=class{constructor(t,e){this.view=t,this.tween=e,this.camera=t.camera,this.target=new P,this.offset=new P(12,38,16).normalize().multiplyScalar(Fc),this.followEnabled=!0,this._cameraTween=null,this._zoomDir=new P,this._orbitOffset=new P,this._panPlane=new yn(new P(0,1,0),0),this._panHit=new P,this._panPrev=new P,this._raycaster=new Ms,this._endTarget=new P,this._endPosition=new P,this._camScratch=new P,this._startTarget=new P,this._startPosition=new P,this._lastCenterKey=null;let n=t.world;this.target.copy(t.worldPos(n.w/2|0,n.h/2|0)),this.camera.position.copy(this.target).add(this.offset),this.camera.lookAt(this.target)}disableFollow(){this.followEnabled=!1}_setCameraActive(t){this.view.setPresentationActive({camera:t,tweens:this.tween.active})}_cancelCameraTween(){this._cameraTween&&(this._cameraTween.cancel(),this._cameraTween=null),this._setCameraActive(!1)}_orbitDir(t){return t.copy(this.camera.position).sub(this.target),t.lengthSq()<.01&&t.copy(this.offset),t.normalize()}zoom(t,e=.005){let n=this.camera.position.distanceTo(this.target),s=Math.max(aM,Math.min(oM,n+t*e));this._orbitDir(this._zoomDir),this.camera.position.copy(this.target).sub(this._zoomDir.multiplyScalar(s)),this.camera.lookAt(this.target),this.view.requestRender()}rotate(t,e){this._orbitOffset.copy(this.camera.position).sub(this.target);let n=this._orbitOffset.length();if(n<.001)return;let s=Math.atan2(this._orbitOffset.x,this._orbitOffset.z),r=Math.asin(Math.max(-1,Math.min(1,this._orbitOffset.y/n)));s-=t*Cf,r+=e*Cf,r=Math.max(lM,Math.min(cM,r)),this._orbitOffset.x=n*Math.cos(r)*Math.sin(s),this._orbitOffset.y=n*Math.sin(r),this._orbitOffset.z=n*Math.cos(r)*Math.cos(s),this.camera.position.copy(this.target).add(this._orbitOffset),this.camera.lookAt(this.target),this.view.requestRender()}panFromNdc(t,e,n=1){this._panPlane.setFromNormalAndCoplanarPoint(new P(0,1,0),new P(0,this.target.y,0)),this._raycaster.setFromCamera(new pt(t.x,t.y),this.camera),this._raycaster.ray.intersectPlane(this._panPlane,this._panPrev),this._raycaster.setFromCamera(new pt(e.x,e.y),this.camera),this._raycaster.ray.intersectPlane(this._panPlane,this._panHit);let s=this._panPrev.sub(this._panHit).multiplyScalar(n);this.target.add(s),this.camera.position.add(s),this.camera.lookAt(this.target),this.view.requestRender()}follow(t){if(!this.followEnabled)return;let e=this.camera.position.distanceTo(this.target);e<.1&&(e=Fc),this._orbitDir(this._zoomDir),this.target.lerp(t,iM),this._camScratch.copy(this._zoomDir).multiplyScalar(e),this.camera.position.copy(this.target).add(this._camScratch),this.camera.lookAt(this.target)}centerOn(t,e,n=!1){let s=`${t},${e}`;if(this.view.worldPos(t,e,this._endTarget),this.target.distanceToSquared(this._endTarget)<rM&&this._lastCenterKey===s&&!this._cameraTween)return;this._lastCenterKey=s,this.followEnabled=!0;let a=this.camera.position.distanceTo(this.target);if(a<.1&&(a=Fc),this._orbitDir(this._zoomDir),this._endPosition.copy(this._endTarget).add(this._camScratch.copy(this._zoomDir).multiplyScalar(a)),n){this._cancelCameraTween(),this.target.copy(this._endTarget),this.camera.position.copy(this._endPosition),this.camera.lookAt(this.target),this.view.markDirty();return}this._cancelCameraTween(),this._startTarget.copy(this.target),this._startPosition.copy(this.camera.position),this._setCameraActive(!0),this.view.requestRender(),this._cameraTween=this.tween.add({duration:sM,ease:o=>o*(2-o),onUpdate:o=>{this.target.lerpVectors(this._startTarget,this._endTarget,o),this.camera.position.lerpVectors(this._startPosition,this._endPosition,o),this.camera.lookAt(this.target),this.view.markDirty()},onComplete:()=>{this._cameraTween=null,this._setCameraActive(!1),this.view.markDirty()}})}};function _r(i,t,e){let n=i.getBoundingClientRect();return{x:(t-n.left)/n.width*2-1,y:-((e-n.top)/n.height)*2+1}}function hM(i,t){let e=t.object;if(e.isInstancedMesh&&e.userData.tileGridGround){let n=t.instanceId;if(n==null||n<0)return null;let s=e.userData.insideTileGx,r=e.userData.insideTileGy;return s&&r&&n<s.length?{gx:s[n],gy:r[n]}:null}return e.userData.mergedOutsidePick?wh(i,t.point):null}function Pf(i){let t=new Ms,e=new pt;return function(s,r){e.set(s,r),t.setFromCamera(e,i.camera);let a=t.intersectObjects(i.tilesGroup.children,!0);for(let o of a){let l=hM(i.world,o);if(l)return l}return null}}var If=5,co=class{constructor({view:t,state:e,controller:n,camera:s,highlights:r,bus:a,dispatch:o}){this.view=t,this.state=e,this.controller=n,this.dispatch=o||(l=>n.dispatch(l)),this.camera=s,this.highlights=r,this.bus=a,this.container=t.container,this.pickTile=Pf(t),this.selectedUnitId=null,this.mode="move",this.skillIndex=-1,this.rangeKeys=new Set,this.busy=!1,this._isPanning=!1,this._isRotating=!1,this._ctrlOnDown=!1,this._prevNdc=null,this._downPixel={x:0,y:0},this._isTouch=!1,this._pinchDist=null,this._bind(),this._subscribe()}_key(t,e){return e*this.state.world.w+t}_subscribe(){let t=()=>this.onTurnRefreshed();this.bus.on("turnChanged",t),this.bus.on("playingStarted",t),this.bus.on("actionResolved",t)}onTurnRefreshed(){this.clearSelection();let t=this.state;if(t.phase!=="playing"||!t.isHumanTurn())return;let e=t.getActiveUnit();e&&e.hp>0&&this.selectUnitForMove(e)}selectUnitForMove(t){if(this.selectedUnitId=t.id,this.mode="move",this.skillIndex=-1,this.state.hasMoved)this.rangeKeys=new Set,this.highlights.clear();else{let e=Br(this.state.world,t.x,t.y,Ht(t,"agi"),this.state.units,t),n=[];this.rangeKeys=new Set,e.forEach((s,r)=>{if(s===0)return;let a=r%this.state.world.w,o=r/this.state.world.w|0;n.push({gx:a,gy:o}),this.rangeKeys.add(r)}),this.highlights.show(n,"move")}this._emitSelection()}enterAttackMode(){let t=this._activeHumanUnit();if(!t||this.state.hasAttacked)return;this.selectedUnitId=t.id,this.mode="attack",this.skillIndex=-1;let e=t.range!=null?t.range:1,n=kr(this.state.world,t.x,t.y,e),s=[];this.rangeKeys=new Set,n.forEach((r,a)=>{let o=a%this.state.world.w,l=a/this.state.world.w|0;tn(this.state.world,t.x,t.y,o,l)&&(s.push({gx:o,gy:l}),this.rangeKeys.add(a))}),this.highlights.show(s,"attack"),this._emitSelection()}enterSkillMode(t){let e=this._activeHumanUnit();if(!e||this.state.hasAttacked)return;let s=mn(this.state,e)[t];if(!s||s.disabled)return;this.selectedUnitId=e.id,this.mode="skill",this.skillIndex=t;let r=kh(this.state,e,s),a=zi(this.state,e,s);this.rangeKeys=new Set(a.map(o=>this._key(o.gx,o.gy))),this.highlights.show(r,"skill"),this._emitSelection()}clearSelection(){this.selectedUnitId=null,this.mode="move",this.skillIndex=-1,this.rangeKeys=new Set,this.highlights.clear(),this._emitSelection()}_activeHumanUnit(){let t=this.state;if(t.phase!=="playing"||!t.isHumanTurn())return null;let e=t.getActiveUnit();return e&&e.hp>0?e:null}_emitSelection(){let t=this.selectedUnitId!=null?this.state.getUnitById(this.selectedUnitId):null;this.bus.emit("selectionChanged",{unit:t,mode:this.mode,skillIndex:this.skillIndex})}async _onTileClick(t,e){if(this.busy)return;let n=this.state;if(n.phase==="draft"){if(n.gameMode==="online"&&this.controller.currentDraftPlayer!==n.localPlayerNumber)return;let a=n.draft;a&&a.pendingClassKey&&a.placementTiles&&a.placementTiles.some(o=>o.gx===t&&o.gy===e)&&(this.busy=!0,await this.dispatch({type:"draftPlace",gx:t,gy:e}),this.busy=!1);return}if(n.phase!=="playing"||n.gameMode==="cvcpu")return;let s=this._activeHumanUnit();if(this.mode==="skill"&&s){let o=mn(n,s)[this.skillIndex];if(!o){this.clearSelection();return}if(o.target==="self"&&t===s.x&&e===s.y){await this._dispatch({type:"skill",unitId:s.id,targetId:null,skillIndex:this.skillIndex});return}if(!this.rangeKeys.has(this._key(t,e)))return;let l=n.getUnitAtTile(t,e),c=l?l.id:null;await this._dispatch({type:"skill",unitId:s.id,targetId:c,skillIndex:this.skillIndex});return}if(this.mode==="attack"&&s){let a=n.getUnitAtTile(t,e);if(!this.rangeKeys.has(this._key(t,e)))return;a&&a.player!==s.player&&await this._dispatch({type:"attack",unitId:s.id,targetId:a.id});return}let r=n.getUnitAtTile(t,e);if(r){r.id===(s&&s.id)&&s?this.selectUnitForMove(s):this.bus.emit("previewUnit",{unit:r});return}this.bus.emit("previewUnit",{unit:null}),s&&this.selectedUnitId===s.id&&!n.hasMoved&&this.rangeKeys.has(this._key(t,e))&&await this._dispatch({type:"move",unitId:s.id,toGx:t,toGy:e})}async _dispatch(t){this.busy=!0,this.highlights.clear(),this.rangeKeys=new Set;try{await this.dispatch(t)}finally{this.busy=!1}}_bind(){let t=this.container;t.style.cursor="grab",this._onPointerDown=this._onPointerDown.bind(this),this._onPointerMove=this._onPointerMove.bind(this),this._onPointerUp=this._onPointerUp.bind(this),this._onWheel=this._onWheel.bind(this),this._onTouchStart=this._onTouchStart.bind(this),this._onTouchMove=this._onTouchMove.bind(this),this._onTouchEnd=this._onTouchEnd.bind(this),t.addEventListener("pointerdown",this._onPointerDown),window.addEventListener("pointermove",this._onPointerMove),window.addEventListener("pointerup",this._onPointerUp),t.addEventListener("wheel",this._onWheel,{passive:!1}),t.addEventListener("touchstart",this._onTouchStart,{passive:!1}),t.addEventListener("touchmove",this._onTouchMove,{passive:!1}),t.addEventListener("touchend",this._onTouchEnd,{passive:!1})}_onPointerDown(t){t.pointerType!=="touch"&&(this._downPixel={x:t.clientX,y:t.clientY},this._isTouch=!1,this._ctrlOnDown=t.ctrlKey,this._prevNdc=_r(this.container,t.clientX,t.clientY),this.container.style.cursor="grabbing")}_onPointerMove(t){t.pointerType!=="touch"&&this._drag(t.clientX,t.clientY,t.ctrlKey)}_drag(t,e,n){if(this._prevNdc==null)return;let s=t-this._downPixel.x,r=e-this._downPixel.y;if(!this._isPanning&&!this._isRotating&&(Math.abs(s)>If||Math.abs(r)>If)&&(n||this._ctrlOnDown?this._isRotating=!0:this._isPanning=!0,this.camera.disableFollow()),this._isRotating)this.camera.rotate(s,r),this._downPixel={x:t,y:e};else if(this._isPanning){let a=_r(this.container,t,e);this.camera.panFromNdc(this._prevNdc,a,(this._isTouch,1)),this._prevNdc=a}}_onPointerUp(t){t.pointerType!=="touch"&&this._endDrag(t.clientX,t.clientY)}_endDrag(t,e){if(this._prevNdc!=null&&!this._isPanning&&!this._isRotating){let n=_r(this.container,t,e),s=this.pickTile(n.x,n.y);s&&this._onTileClick(s.gx,s.gy)}this._prevNdc=null,this._isPanning=!1,this._isRotating=!1,this._ctrlOnDown=!1,this.container.style.cursor="grab"}_onWheel(t){t.preventDefault(),this.camera.zoom(t.deltaY)}_touchCoords(t){return t.touches&&t.touches.length>0?{x:t.touches[0].clientX,y:t.touches[0].clientY}:t.changedTouches&&t.changedTouches.length>0?{x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}:{x:0,y:0}}_touchDistance(t){return!t||t.length<2?0:Math.hypot(t[1].clientX-t[0].clientX,t[1].clientY-t[0].clientY)}_onTouchStart(t){if(t.touches.length===2){this._pinchDist=this._touchDistance(t.touches),this._prevNdc=null;return}if(t.touches.length!==1)return;this._pinchDist=null;let e=this._touchCoords(t);this._downPixel={x:e.x,y:e.y},this._isTouch=!0,this._ctrlOnDown=!1,this._prevNdc=_r(this.container,e.x,e.y)}_onTouchMove(t){if(t.touches.length===2){t.preventDefault();let n=this._touchDistance(t.touches);this._pinchDist!=null&&this._pinchDist>0&&this.camera.zoom(-(n-this._pinchDist),.15),this._pinchDist=n;return}if(t.touches.length!==1)return;t.preventDefault();let e=this._touchCoords(t);this._drag(e.x,e.y,!1)}_onTouchEnd(t){if(t.touches.length<2&&(this._pinchDist=null),t.touches.length>=1)return;let e=this._touchCoords(t);this._isTouch=!1,this._endDrag(e.x,e.y)}};var uM=Symbol.for("preact-signals");function Bc(){if(Fi>1)Fi--;else{var i,t=!1;for(function(){var s=uo;for(uo=void 0;s!==void 0;)s.S.v===s.v&&(s.S.i=s.i),s=s.o}();xr!==void 0;){var e=xr;for(xr=void 0,ho++;e!==void 0;){var n=e.u;if(e.u=void 0,e.f&=-3,!(8&e.f)&&Of(e))try{e.c()}catch(s){t||(i=s,t=!0)}e=n}}if(ho=0,Fi--,t)throw i}}var de=void 0;function po(i){var t=de;de=void 0;try{return i()}finally{de=t}}var Lf,xr=void 0,Fi=0,ho=0;var Df=0,uo=void 0,fo=0;function Uf(i){if(de!==void 0){var t=i.n;if(t===void 0||t.t!==de)return t={i:0,S:i,p:de.s,n:void 0,t:de,e:void 0,x:void 0,r:t},de.s!==void 0&&(de.s.n=t),de.s=t,i.n=t,32&de.f&&i.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=de.s,t.n=void 0,de.s.n=t,de.s=t),t}}function $e(i,t){this.v=i,this.i=0,this.n=void 0,this.t=void 0,this.l=0,this.W=t?.watched,this.Z=t?.unwatched,this.name=t?.name}$e.prototype.brand=uM;$e.prototype.h=function(){return!0};$e.prototype.S=function(i){var t=this,e=this.t;e!==i&&i.e===void 0&&(i.x=e,this.t=i,e!==void 0?e.e=i:po(function(){var n;(n=t.W)==null||n.call(t)}))};$e.prototype.U=function(i){var t=this;if(this.t!==void 0){var e=i.e,n=i.x;e!==void 0&&(e.x=n,i.e=void 0),n!==void 0&&(n.e=e,i.x=void 0),i===this.t&&(this.t=n,n===void 0&&po(function(){var s;(s=t.Z)==null||s.call(t)}))}};$e.prototype.subscribe=function(i){var t=this;return Hc(function(){var e=t.value;po(function(){return i(e)})},{name:"sub"})};$e.prototype.valueOf=function(){return this.value};$e.prototype.toString=function(){return this.value+""};$e.prototype.toJSON=function(){return this.value};$e.prototype.peek=function(){var i=this;return po(function(){return i.value})};Object.defineProperty($e.prototype,"value",{get:function(){var i=Uf(this);return i!==void 0&&(i.i=this.i),this.v},set:function(i){if(i!==this.v){if(ho>100)throw new Error("Cycle detected");(function(e){Fi!==0&&ho===0&&e.l!==Df&&(e.l=Df,uo={S:e,v:e.v,i:e.i,o:uo})})(this),this.v=i,this.i++,fo++,Fi++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{Bc()}}}});function Nf(i,t){return new $e(i,t)}function Of(i){for(var t=i.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function Ff(i){for(var t=i.s;t!==void 0;t=t.n){var e=t.S.n;if(e!==void 0&&(t.r=e),t.S.n=t,t.i=-1,t.n===void 0){i.s=t;break}}}function Bf(i){for(var t=i.s,e=void 0;t!==void 0;){var n=t.p;t.i===-1?(t.S.U(t),n!==void 0&&(n.n=t.n),t.n!==void 0&&(t.n.p=n)):e=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=n}i.s=e}function Es(i,t){$e.call(this,void 0,t),this.x=i,this.s=void 0,this.g=fo-1,this.f=4}Es.prototype=new $e;Es.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===fo))return!0;if(this.g=fo,this.f|=1,this.i>0&&!Of(this))return this.f&=-2,!0;var i=de;try{Ff(this),de=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(e){this.v=e,this.f|=16,this.i++}return de=i,Bf(this),this.f&=-2,!0};Es.prototype.S=function(i){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}$e.prototype.S.call(this,i)};Es.prototype.U=function(i){if(this.t!==void 0&&($e.prototype.U.call(this,i),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};Es.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var i=this.t;i!==void 0;i=i.x)i.t.N()}};Object.defineProperty(Es.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var i=Uf(this);if(this.h(),i!==void 0&&(i.i=this.i),16&this.f)throw this.v;return this.v}});function kf(i){var t=i.m;if(i.m=void 0,typeof t=="function"){Fi++;var e=de;de=void 0;try{t()}catch(n){throw i.f&=-2,i.f|=8,kc(i),n}finally{de=e,Bc()}}}function kc(i){for(var t=i.s;t!==void 0;t=t.n)t.S.U(t);i.x=void 0,i.s=void 0,kf(i)}function dM(i){if(de!==this)throw new Error("Out-of-order effect");Bf(this),de=i,this.f&=-2,8&this.f&&kc(this),Bc()}function Ts(i,t){this.x=i,this.m=void 0,this.s=void 0,this.u=void 0,this.f=32,this.name=t?.name,Lf&&Lf.push(this)}Ts.prototype.c=function(){var i=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.m=t)}finally{i()}};Ts.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,kf(this),Ff(this),Fi++;var i=de;return de=this,dM.bind(this,i)};Ts.prototype.N=function(){2&this.f||(this.f|=2,this.u=xr,xr=this)};Ts.prototype.d=function(){this.f|=8,1&this.f||kc(this)};Ts.prototype.dispose=function(){this.d()};function Hc(i,t){var e=new Ts(i,t);try{e.c()}catch(s){throw e.d(),s}var n=e.d.bind(e);return n[Symbol.dispose]=n,n}var mo=globalThis,_o=mo.ShadowRoot&&(mo.ShadyCSS===void 0||mo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,zf=Symbol(),Hf=new WeakMap,go=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==zf)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(_o&&t===void 0){let n=e!==void 0&&e.length===1;n&&(t=Hf.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Hf.set(e,t))}return t}toString(){return this.cssText}},Gf=i=>new go(typeof i=="string"?i:i+"",void 0,zf);var Vf=(i,t)=>{if(_o)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let n=document.createElement("style"),s=mo.litNonce;s!==void 0&&n.setAttribute("nonce",s),n.textContent=e.cssText,i.appendChild(n)}},zc=_o?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(let n of t.cssRules)e+=n.cssText;return Gf(e)})(i):i;var{is:fM,defineProperty:pM,getOwnPropertyDescriptor:mM,getOwnPropertyNames:gM,getOwnPropertySymbols:_M,getPrototypeOf:xM}=Object,xo=globalThis,Wf=xo.trustedTypes,yM=Wf?Wf.emptyScript:"",vM=xo.reactiveElementPolyfillSupport,yr=(i,t)=>i,Gc={toAttribute(i,t){switch(t){case Boolean:i=i?yM:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},Xf=(i,t)=>!fM(i,t),$f={attribute:!0,type:String,converter:Gc,reflect:!1,useDefault:!1,hasChanged:Xf};Symbol.metadata??=Symbol("metadata"),xo.litPropertyMetadata??=new WeakMap;var Kn=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$f){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let n=Symbol(),s=this.getPropertyDescriptor(t,n,e);s!==void 0&&pM(this.prototype,t,s)}}static getPropertyDescriptor(t,e,n){let{get:s,set:r}=mM(this.prototype,t)??{get(){return this[e]},set(a){this[e]=a}};return{get:s,set(a){let o=s?.call(this);r?.call(this,a),this.requestUpdate(t,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$f}static _$Ei(){if(this.hasOwnProperty(yr("elementProperties")))return;let t=xM(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(yr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(yr("properties"))){let e=this.properties,n=[...gM(e),..._M(e)];for(let s of n)this.createProperty(s,e[s])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[n,s]of e)this.elementProperties.set(n,s)}this._$Eh=new Map;for(let[e,n]of this.elementProperties){let s=this._$Eu(e,n);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let n=new Set(t.flat(1/0).reverse());for(let s of n)e.unshift(zc(s))}else t!==void 0&&e.push(zc(t));return e}static _$Eu(t,e){let n=e.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Vf(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$ET(t,e){let n=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,n);if(s!==void 0&&n.reflect===!0){let r=(n.converter?.toAttribute!==void 0?n.converter:Gc).toAttribute(e,n.type);this._$Em=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){let n=this.constructor,s=n._$Eh.get(t);if(s!==void 0&&this._$Em!==s){let r=n.getPropertyOptions(s),a=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:Gc;this._$Em=s;let o=a.fromAttribute(e,r.type);this[s]=o??this._$Ej?.get(s)??o,this._$Em=null}}requestUpdate(t,e,n,s=!1,r){if(t!==void 0){let a=this.constructor;if(s===!1&&(r=this[t]),n??=a.getPropertyOptions(t),!((n.hasChanged??Xf)(r,e)||n.useDefault&&n.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,n))))return;this.C(t,e,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:n,reflect:s,wrapped:r},a){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??e??this[t]),r!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[s,r]of this._$Ep)this[s]=r;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[s,r]of n){let{wrapped:a}=r,o=this[s];a!==!0||this._$AL.has(s)||o===void 0||this.C(s,void 0,r,o)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(e)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};Kn.elementStyles=[],Kn.shadowRootOptions={mode:"open"},Kn[yr("elementProperties")]=new Map,Kn[yr("finalized")]=new Map,vM?.({ReactiveElement:Kn}),(xo.reactiveElementVersions??=[]).push("2.1.2");var Kc=globalThis,qf=i=>i,yo=Kc.trustedTypes,Yf=yo?yo.createPolicy("lit-html",{createHTML:i=>i}):void 0,tp="$lit$",pi=`lit$${Math.random().toFixed(9).slice(2)}$`,ep="?"+pi,MM=`<${ep}>`,Hi=document,Mr=()=>Hi.createComment(""),Sr=i=>i===null||typeof i!="object"&&typeof i!="function",Zc=Array.isArray,SM=i=>Zc(i)||typeof i?.[Symbol.iterator]=="function",Vc=`[ 	
\f\r]`,vr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Kf=/-->/g,Zf=/>/g,Bi=RegExp(`>|${Vc}(?:([^\\s"'>=/]+)(${Vc}*=${Vc}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Jf=/'/g,jf=/"/g,np=/^(?:script|style|textarea|title)$/i,Jc=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),At=Jc(1),nE=Jc(2),iE=Jc(3),Tn=Symbol.for("lit-noChange"),xe=Symbol.for("lit-nothing"),Qf=new WeakMap,ki=Hi.createTreeWalker(Hi,129);function ip(i,t){if(!Zc(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Yf!==void 0?Yf.createHTML(t):t}var bM=(i,t)=>{let e=i.length-1,n=[],s,r=t===2?"<svg>":t===3?"<math>":"",a=vr;for(let o=0;o<e;o++){let l=i[o],c,h,u=-1,d=0;for(;d<l.length&&(a.lastIndex=d,h=a.exec(l),h!==null);)d=a.lastIndex,a===vr?h[1]==="!--"?a=Kf:h[1]!==void 0?a=Zf:h[2]!==void 0?(np.test(h[2])&&(s=RegExp("</"+h[2],"g")),a=Bi):h[3]!==void 0&&(a=Bi):a===Bi?h[0]===">"?(a=s??vr,u=-1):h[1]===void 0?u=-2:(u=a.lastIndex-h[2].length,c=h[1],a=h[3]===void 0?Bi:h[3]==='"'?jf:Jf):a===jf||a===Jf?a=Bi:a===Kf||a===Zf?a=vr:(a=Bi,s=void 0);let p=a===Bi&&i[o+1].startsWith("/>")?" ":"";r+=a===vr?l+MM:u>=0?(n.push(c),l.slice(0,u)+tp+l.slice(u)+pi+p):l+pi+(u===-2?o:p)}return[ip(i,r+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]},br=class i{constructor({strings:t,_$litType$:e},n){let s;this.parts=[];let r=0,a=0,o=t.length-1,l=this.parts,[c,h]=bM(t,e);if(this.el=i.createElement(c,n),ki.currentNode=this.el.content,e===2||e===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(s=ki.nextNode())!==null&&l.length<o;){if(s.nodeType===1){if(s.hasAttributes())for(let u of s.getAttributeNames())if(u.endsWith(tp)){let d=h[a++],p=s.getAttribute(u).split(pi),_=/([.?@])?(.*)/.exec(d);l.push({type:1,index:r,name:_[2],strings:p,ctor:_[1]==="."?$c:_[1]==="?"?Xc:_[1]==="@"?qc:As}),s.removeAttribute(u)}else u.startsWith(pi)&&(l.push({type:6,index:r}),s.removeAttribute(u));if(np.test(s.tagName)){let u=s.textContent.split(pi),d=u.length-1;if(d>0){s.textContent=yo?yo.emptyScript:"";for(let p=0;p<d;p++)s.append(u[p],Mr()),ki.nextNode(),l.push({type:2,index:++r});s.append(u[d],Mr())}}}else if(s.nodeType===8)if(s.data===ep)l.push({type:2,index:r});else{let u=-1;for(;(u=s.data.indexOf(pi,u+1))!==-1;)l.push({type:7,index:r}),u+=pi.length-1}r++}}static createElement(t,e){let n=Hi.createElement("template");return n.innerHTML=t,n}};function ws(i,t,e=i,n){if(t===Tn)return t;let s=n!==void 0?e._$Co?.[n]:e._$Cl,r=Sr(t)?void 0:t._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),r===void 0?s=void 0:(s=new r(i),s._$AT(i,e,n)),n!==void 0?(e._$Co??=[])[n]=s:e._$Cl=s),s!==void 0&&(t=ws(i,s._$AS(i,t.values),s,n)),t}var Wc=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:n}=this._$AD,s=(t?.creationScope??Hi).importNode(e,!0);ki.currentNode=s;let r=ki.nextNode(),a=0,o=0,l=n[0];for(;l!==void 0;){if(a===l.index){let c;l.type===2?c=new Er(r,r.nextSibling,this,t):l.type===1?c=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(c=new Yc(r,this,t)),this._$AV.push(c),l=n[++o]}a!==l?.index&&(r=ki.nextNode(),a++)}return ki.currentNode=Hi,s}p(t){let e=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}},Er=class i{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,n,s){this.type=2,this._$AH=xe,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=ws(this,t,e),Sr(t)?t===xe||t==null||t===""?(this._$AH!==xe&&this._$AR(),this._$AH=xe):t!==this._$AH&&t!==Tn&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):SM(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==xe&&Sr(this._$AH)?this._$AA.nextSibling.data=t:this.T(Hi.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=br.createElement(ip(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===s)this._$AH.p(e);else{let r=new Wc(s,this),a=r.u(this.options);r.p(e),this.T(a),this._$AH=r}}_$AC(t){let e=Qf.get(t.strings);return e===void 0&&Qf.set(t.strings,e=new br(t)),e}k(t){Zc(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,n,s=0;for(let r of t)s===e.length?e.push(n=new i(this.O(Mr()),this.O(Mr()),this,this.options)):n=e[s],n._$AI(r),s++;s<e.length&&(this._$AR(n&&n._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let n=qf(t).nextSibling;qf(t).remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},As=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,s,r){this.type=1,this._$AH=xe,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=xe}_$AI(t,e=this,n,s){let r=this.strings,a=!1;if(r===void 0)t=ws(this,t,e,0),a=!Sr(t)||t!==this._$AH&&t!==Tn,a&&(this._$AH=t);else{let o=t,l,c;for(t=r[0],l=0;l<r.length-1;l++)c=ws(this,o[n+l],e,l),c===Tn&&(c=this._$AH[l]),a||=!Sr(c)||c!==this._$AH[l],c===xe?t=xe:t!==xe&&(t+=(c??"")+r[l+1]),this._$AH[l]=c}a&&!s&&this.j(t)}j(t){t===xe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},$c=class extends As{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===xe?void 0:t}},Xc=class extends As{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==xe)}},qc=class extends As{constructor(t,e,n,s,r){super(t,e,n,s,r),this.type=5}_$AI(t,e=this){if((t=ws(this,t,e,0)??xe)===Tn)return;let n=this._$AH,s=t===xe&&n!==xe||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==xe&&(n===xe||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Yc=class{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){ws(this,t)}};var EM=Kc.litHtmlPolyfillSupport;EM?.(br,Er),(Kc.litHtmlVersions??=[]).push("3.3.3");var sp=(i,t,e)=>{let n=e?.renderBefore??t,s=n._$litPart$;if(s===void 0){let r=e?.renderBefore??null;n._$litPart$=s=new Er(t.insertBefore(Mr(),r),r,void 0,e??{})}return s._$AI(i),s};var jc=globalThis,Qt=class extends Kn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=sp(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Tn}};Qt._$litElement$=!0,Qt.finalized=!0,jc.litElementHydrateSupport?.({LitElement:Qt});var TM=jc.litElementPolyfillSupport;TM?.({LitElement:Qt});(jc.litElementVersions??=[]).push("4.2.2");var te=Nf(wM());function wM(){return{screen:"mode-select",phase:"draft",gameMode:"pvp",currentPlayer:1,turnCount:0,maxTurns:200,turnsLeft:null,isHumanTurn:!0,selectedUnit:null,previewUnit:null,availableSkills:[],actionState:{attackMode:!1,skillMode:!1,choosingFacing:!1,hasMoved:!1,hasAttacked:!1},draft:null,battleStart:!1,gameOver:null,online:null,rotate:!1,settings:null}}function ce(i){te.value={...te.value,...i}}function Le(i=Qt){return class extends i{_disposeEffect=null;connectedCallback(){super.connectedCallback(),this._startEffect()}disconnectedCallback(){super.disconnectedCallback(),this._disposeEffect&&(this._disposeEffect(),this._disposeEffect=null)}_startEffect(){this._disposeEffect=Hc(()=>{te.value,this.requestUpdate()})}}}function rp(i,t){let e=()=>i.phase==="playing"?i.getActiveUnit():null,n=a=>a?mn(i,a).map((o,l)=>({index:l,name:o.name,cost:o.cost||0,hpCost:o.hpCost||0,level:o.level||1,description:o.description||"",disabled:!!o.disabled,target:o.target})):[],s=()=>{let a=e();ce({phase:i.phase,gameMode:i.gameMode,currentPlayer:i.currentPlayer,turnCount:i.turnCount,maxTurns:i.settings.maxTurns,turnsLeft:i.phase==="playing"?i.settings.maxTurns-i.turnCount:null,isHumanTurn:i.phase==="playing"?i.isHumanTurn():!1,selectedUnit:Is(a),availableSkills:n(a),actionState:{attackMode:!1,skillMode:!1,choosingFacing:!1,hasMoved:i.hasMoved,hasAttacked:i.hasAttacked}})},r=()=>{let a=i.draft;if(!a){ce({draft:null});return}let o=typeof a.currentPlayer=="function"?a.currentPlayer():a.currentPlayer;ce({phase:"draft",gameMode:i.gameMode,draft:{player:i.currentPlayer,pendingClassKey:a.pendingClassKey||null,availableClasses:a.availableClasses?Array.from(a.availableClasses):[],picksPerPlayer:i.settings.draftPicksPerPlayer,isHumanTurn:i.phase==="draft"?i.isHumanTurn():!0}})};return t.on("playingStarted",s),t.on("turnChanged",s),t.on("afterEndTurn",s),t.on("actionResolved",s),t.on("initiativeChanged",s),t.on("unitStatsChanged",()=>{let a=e();ce({selectedUnit:Is(a),availableSkills:n(a)})}),t.on("selectionChanged",({unit:a,mode:o})=>{ce({selectedUnit:Is(a||e()),availableSkills:n(a||e()),actionState:{...te.value.actionState,attackMode:o==="attack",skillMode:o==="skill"}})}),t.on("previewUnit",({unit:a})=>ce({previewUnit:Is(a)})),t.on("draftStarted",r),t.on("draftPickChosen",r),t.on("draftTurnChanged",r),t.on("unitPlaced",r),t.on("draftComplete",()=>ce({draft:null})),t.on("gameOver",({winner:a,title:o,classRecord:l})=>{let c=a??1,h=i.units.filter(u=>u.player===c&&!u.summonedBy).map(u=>({id:u.id,name:u.name,class:u.class,level:u.level,hp:u.hp,maxHp:u.maxHp,mp:u.mp,maxMp:u.maxMp,lowHp:u.maxHp>0&&u.hp/u.maxHp<.3,stats:{str:Ht(u,"str"),agi:Ht(u,"agi"),vit:Ht(u,"vit"),dex:Ht(u,"dex"),luk:Ht(u,"luk"),int:Ht(u,"int")}}));ce({phase:"gameover",gameOver:{winner:a,title:o||(a?`Player ${a} wins!`:"Draw"),cards:h,classRecord:l||null}})}),{syncHud:s,syncDraft:r,imageFor:a=>pn[a]}}var Jt={startMatch:i=>{},toModeSelect:()=>{},draftPick:i=>{},attack:()=>{},skill:i=>{},endTurn:()=>{},cancel:()=>{},onlineStart:i=>{},onlineHost:i=>{},onlineHostConnect:i=>{},onlineJoin:(i,t)=>{},onlineCancel:()=>{}};var ap=[{value:"balanced",label:"Balanced (lineup mix)"},{value:"tanky",label:"Tanky (HP + VIT)"},{value:"aggressive",label:"Aggressive (STR + AGI)"},{value:"scout",label:"Scout (high AGI)"},{value:"ranged",label:"Ranged (DEX + range)"},{value:"caster",label:"Caster (INT + MP)"},{value:"random",label:"Random"},{value:"custom",label:"Custom order"}],op=[...Oe],AM={tank:["knight","berserker","werewolf","ghoul","barbarian"],melee:["samurai","assassin","ninja","bandit","lancer"],support:["paladin","monk","blacksmith","exorcist","oracle"],ranged:["ranger","amazon","hunter","alchemist","cannibal"],caster:["mage","witch","vampire","necromancer","shaman"]},Tr={tank:2,melee:2,support:1,ranged:1,caster:1},Qc=(()=>{let i={};for(let[t,e]of Object.entries(AM))for(let n of e)i[n]=t;return i})();function lp(i){let t=Math.max(1,i),e=Object.keys(Tr),n=e.reduce((l,c)=>l+(Tr[c]??0),0),s={},r=0;for(let l of e){let c=Math.floor(t*(Tr[l]??0)/n);s[l]=c,r+=c}let a=t-r,o=[...e].sort((l,c)=>s[l]!==s[c]?s[l]-s[c]:(Tr[c]??0)-(Tr[l]??0));for(let l=0;a>0&&l<o.length;l++)s[o[l]]++,a--;return s}var RM=[{id:"pvp",title:"Player vs Player",desc:"Two players on the same device."},{id:"pvcpu",title:"Player vs CPU",desc:"You control your army; the CPU responds."},{id:"cvcpu",title:"CPU vs CPU",desc:"Watch two AI armies fight."},{id:"online",title:"Online Match",desc:"Play a friend over the internet."}],th=class extends Le(Qt){createRenderRoot(){return this}constructor(){super(),this.mode="pvp",this.form={mapMode:"long",numUnits:Me.draftPicksPerPlayer,aiDraftPreference:"balanced",numGames:1,moveDurationMs:Me.moveDurationMs,gridW:Me.gridW,gridH:Me.gridH,centerPlazaRadius:Me.centerPlazaRadius,maxTurns:Me.maxTurns}}_setMode(t){this.mode=t,this.requestUpdate()}_upd(t,e){this.form={...this.form,[t]:e},this.requestUpdate()}_play(){let t={mode:this.mode,...this.form};this.mode==="online"?Jt.onlineStart(t):Jt.startMatch(t)}render(){if(te.value.screen!=="mode-select")return At``;let t=this.form,e=(n,s={})=>At`<input type="number" .value=${String(t[n])}
      min=${s.min??1} max=${s.max??999} step=${s.step??1}
      @input=${r=>this._upd(n,Number(r.target.value))} />`;return At`
      <div id="mode-select-overlay" style="display:flex">
        <div class="mode-select-inner">
          <h1 class="mode-select-title">TACTICS</h1>
          <div class="mode-select-main">
            <div class="mode-select-carousel-col">
              ${RM.map(n=>At`
                <div class="mode-card mode-card-desc ${this.mode===n.id?"selected":""}"
                  style="cursor:pointer" @click=${()=>this._setMode(n.id)}>
                  <h2 class="mode-card-title">${n.title}</h2>
                  <p>${n.desc}</p>
                </div>
              `)}
            </div>
            <aside class="mode-select-settings-col">
              <div class="mode-card mode-settings-card">
                <h3 class="mode-settings-title">Settings</h3>
                ${this.mode==="pvp"||this.mode==="online"?At`
                  <div class="mode-select-ai-draft">
                    <label>Mode:</label>
                    <select @change=${n=>this._upd("mapMode",n.target.value)}>
                      <option value="long" ?selected=${t.mapMode==="long"}>Normal</option>
                      <option value="short" ?selected=${t.mapMode==="short"}>Short</option>
                    </select>
                  </div>`:""}
                <div class="mode-select-ai-draft">
                  <label>No of Units:</label>${e("numUnits",{min:1,max:20})}
                </div>
                ${this.mode!=="pvp"&&this.mode!=="online"?At`
                  <div class="mode-select-ai-draft">
                    <label>AI draft:</label>
                    <select @change=${n=>this._upd("aiDraftPreference",n.target.value)}>
                      ${ap.map(n=>At`<option value=${n.value} ?selected=${t.aiDraftPreference===n.value}>${n.label}</option>`)}
                    </select>
                  </div>`:""}
                ${this.mode==="cvcpu"?At`
                  <div class="mode-select-ai-draft"><label>No of Games:</label>${e("numGames",{min:1,max:999})}</div>`:""}
                <div class="mode-select-ai-draft"><label>Move speed:</label>${e("moveDurationMs",{min:0,max:5e3,step:50})}</div>
                ${Ps?At`
                  <div class="mode-select-ai-draft"><label>Grid W:</label>${e("gridW",{min:5,max:50})}</div>
                  <div class="mode-select-ai-draft"><label>Grid H:</label>${e("gridH",{min:5,max:50})}</div>
                  <div class="mode-select-ai-draft"><label>Center plaza:</label>${e("centerPlazaRadius",{min:.1,max:.9,step:.01})}</div>
                  <div class="mode-select-ai-draft"><label>Max turns:</label>${e("maxTurns",{min:10,max:999})}</div>
                `:""}
              </div>
              <div class="mode-play-wrap">
                <button type="button" class="mode-play-btn" @click=${()=>this._play()}>
                  <span class="mode-play-text">${this.mode==="online"?"Connect":"Play game"}</span>
                </button>
              </div>
            </aside>
          </div>
        </div>
      </div>
    `}};customElements.define("mode-select-screen",th);var eh=class extends Le(Qt){createRenderRoot(){return this}render(){let t=te.value;if(t.screen!=="game")return At``;let e=`Player ${t.currentPlayer}`,n=t.turnsLeft!=null,s=n&&t.turnsLeft<=10;return At`
      <div id="ui">
        <h1>TACTICS</h1>
        <div class="turn">Turn: <span id="turn-player">${e}</span></div>
        <div class="turns-left ${s?"turns-left-low":""}" id="turns-left" style="display:${n?"block":"none"}">
          Turns left: <span id="turns-left-value">${t.turnsLeft}</span>
        </div>
        <div class="instructions">Select a unit, then click a highlighted tile to move</div>
      </div>
    `}};customElements.define("hud-bar",eh);var vo={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Mo=i=>(...t)=>({_$litDirective$:i,values:t}),Rs=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this._$Ct=t,this._$AM=e,this._$Ci=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var cp=Mo(class extends Rs{constructor(i){if(super(i),i.type!==vo.ATTRIBUTE||i.name!=="class"||i.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(t=>i[t]).join(" ")+" "}update(i,[t]){if(this.st===void 0){this.st=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(let n in t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}let e=i.element.classList;for(let n of this.st)n in t||(e.remove(n),this.st.delete(n));for(let n in t){let s=!!t[n];s===this.st.has(n)||this.nt?.has(n)||(s?(e.add(n),this.st.add(n)):(e.remove(n),this.st.delete(n)))}return Tn}});var wr=class extends Rs{constructor(t){if(super(t),this.it=xe,t.type!==vo.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===xe||t==null)return this._t=void 0,this.it=t;if(t===Tn)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;let e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};wr.directiveName="unsafeHTML",wr.resultType=1;var So=Mo(wr);var CM=["str","agi","vit","dex","luk","int"],nh=class extends Le(Qt){createRenderRoot(){return this}constructor(){super(),this._skillsOpen=!1,this._onDocClick=null}connectedCallback(){super.connectedCallback(),this._onDocClick=t=>{if(!this._skillsOpen)return;let e=this.querySelector(".skill-wrap");e&&!e.contains(t.target)&&(this._skillsOpen=!1,this.requestUpdate())},document.addEventListener("click",this._onDocClick)}disconnectedCallback(){this._onDocClick&&document.removeEventListener("click",this._onDocClick),super.disconnectedCallback()}_toggleSkills(t){t?.stopPropagation(),this._skillsOpen=!this._skillsOpen,this.requestUpdate()}_pickSkill(t){this._skillsOpen=!1,Jt.skill(t),this.requestUpdate()}_statRows(t){return At`
      <span>HP</span><span class="stat-val stat-val-hp">${t.hp}/${t.maxHp}</span>
      <span>MP</span><span class="stat-val">${t.mp}/${t.maxMp}</span>
      ${CM.map(e=>At`
        <span>${e.toUpperCase()}</span>
        <span class="stat-val">${So(t.statsHtml[e])}</span>
      `)}
      ${t.poison?At`<span>Poison</span><span class="stat-val stat-val-poison">${t.poison} dmg/turn</span>`:""}
      ${t.autoHeal?At`<span>Regen</span><span class="stat-val stat-val-buff">${t.autoHeal} HP/turn</span>`:""}
    `}render(){let t=te.value;if(t.screen!=="game"||t.phase!=="playing")return At``;let e=t.selectedUnit,n=!t.isHumanTurn,s=t.availableSkills||[],r=s.length===0;return At`
      <div id="turn-menu" style="display:flex" class=${cp({[`player-${t.currentPlayer}`]:!0,"low-hp":!!e?.lowHp,"level-2":!!e&&e.level>=2&&e.level<3,"level-3":!!e&&e.level>=3})}>
        <div class="unit-info ${e?"":"no-unit"}" id="unit-info">
          <img class="unit-class-image" src="${e&&pn[e.class]||""}" alt="" referrerpolicy="no-referrer" />
          <div class="unit-info-text">
            <div class="unit-name-row">
              <span class="unit-name">${e?e.name:"\u2014 Select a unit \u2014"}</span>
              <span class="unit-level-class">${e?`Lv.${e.level} ${Ye[e.class]?.name||e.class}`:""}</span>
            </div>
            <div class="unit-stats">${e?this._statRows(e):""}</div>
          </div>
        </div>
        <div class="menu-actions">
          <span class="menu-label">Player ${t.currentPlayer}</span>
          <button type="button" ?disabled=${n||t.actionState.hasAttacked} @click=${()=>Jt.attack()}>Attack</button>
          <div class="skill-wrap">
            <button type="button" ?disabled=${n||t.actionState.hasAttacked||r} @click=${a=>this._toggleSkills(a)}>Skill</button>
            <div class="skill-list-overlay" style="display:${this._skillsOpen?"block":"none"}">
              ${s.length===0?At`<div class="skill-option" style="cursor:default;color:#8b949e;">No skills available</div>`:""}
              ${s.map(a=>At`
                <button type="button" class="skill-option" ?disabled=${a.disabled} @click=${()=>this._pickSkill(a.index)}>
                  <span class="skill-name">${a.name}</span>
                  <span class="skill-meta">${a.cost} MP · Lv.${a.level}</span>
                  ${a.description?At`<br /><span class="skill-meta">${a.description}</span>`:""}
                </button>
              `)}
            </div>
          </div>
          <button type="button" class="end" ?disabled=${n} @click=${()=>Jt.endTurn()}>End</button>
        </div>
      </div>
    `}};customElements.define("turn-menu",nh);var ih=class extends Le(Qt){createRenderRoot(){return this}constructor(){super(),this._selected=null}_select(t){this._selected=t,this.requestUpdate()}_confirm(){this._selected&&(Jt.draftPick(this._selected),this._selected=null,this.requestUpdate())}_statPairs(t){return[["HP",t.hp],["MP",t.mp],["STR",t.str],["AGI",t.agi],["VIT",t.vit],["DEX",t.dex],["LUK",t.luk],["INT",t.int],["RNG",t.range]]}render(){let t=te.value;if(t.screen!=="game"||t.phase!=="draft"||!t.draft)return At``;let e=t.draft,n=e.availableClasses||[],s=!!e.pendingClassKey,r=this._selected?Ye[this._selected]:null;return At`
      <div id="draft-panel" style="display:flex">
        <div id="draft-header">
          <div id="draft-title">Player ${e.player}: ${s?"Place your unit":"Pick a class"}</div>
          <div id="draft-message">${s?"Click a highlighted base tile to place your unit.":e.isHumanTurn?"Choose a class to draft.":"CPU is drafting\u2026"}</div>
        </div>
        <div id="draft-body">
          <div id="draft-detail">
            <div class="draft-detail-card">
              ${r?At`
                <img class="draft-detail-image" src="${pn[this._selected]||""}" alt="" referrerpolicy="no-referrer" />
                <div class="draft-detail-content">
                  <div class="draft-detail-name">${r.name}</div>
                  <div class="draft-detail-stats">
                    ${this._statPairs(r).map(([a,o])=>At`
                      <span class="draft-stat-label">${a}</span><span class="draft-stat-value">${o}</span>
                    `)}
                  </div>
                </div>
                <button type="button" class="draft-select-btn" @click=${()=>this._confirm()}>Select</button>
              `:At`<div class="draft-detail-placeholder">Click a class to view details</div>`}
            </div>
          </div>
          <div id="draft-classes">
            ${n.map(a=>At`
              <button type="button" class="draft-class-card ${this._selected===a?"draft-class-card-selected":""}"
                ?disabled=${s||!e.isHumanTurn}
                @click=${()=>this._select(a)}>
                <img class="draft-class-card-image" src="${pn[a]||""}" alt="" referrerpolicy="no-referrer" />
                <div class="draft-class-card-body">
                  <div class="draft-class-card-name">${Ye[a]?Ye[a].name:a}</div>
                </div>
              </button>
            `)}
          </div>
        </div>
      </div>
    `}};customElements.define("draft-panel",ih);var sh=class extends Le(Qt){createRenderRoot(){return this}render(){let t=te.value.previewUnit;if(!t)return At``;let e=["str","agi","vit","dex","luk","int"];return At`
      <div id="unit-preview-card" class="player-${t.player}" style="display:block">
        <img class="unit-preview-image" src="${pn[t.class]||""}" alt="" referrerpolicy="no-referrer" />
        <div class="unit-preview-name">${t.name} <small>Lv.${t.level}</small></div>
        <div class="unit-preview-meta">HP ${t.hp}/${t.maxHp} · MP ${t.mp}/${t.maxMp}</div>
        <div class="unit-preview-stats">
          ${e.map(n=>At`<span>${n.toUpperCase()} ${So(t.statsHtml[n])}</span>`)}
        </div>
      </div>
    `}};customElements.define("unit-preview",sh);var PM=["str","agi","vit","dex","luk","int"],rh=class extends Le(Qt){createRenderRoot(){return this}_levelClass(t){return t>=3?"level-3":t>=2?"level-2":""}_renderCard(t){let e=this._levelClass(t.level);return At`
      <div class="game-over-card ${e} ${t.lowHp?"low-hp":""}">
        <img class="game-over-card-image" src="${pn[t.class]||""}" alt="" referrerpolicy="no-referrer" />
        <div class="game-over-card-body">
          <div class="game-over-card-name">${t.name}</div>
          <div class="game-over-card-meta">Lv.${t.level} ${t.class} — HP ${t.hp}/${t.maxHp}</div>
          <div class="game-over-card-stats">
            <span class="stat-label">HP</span><span class="stat-val stat-val-hp">${t.hp}/${t.maxHp}</span>
            <span class="stat-label">MP</span><span class="stat-val">${t.mp}/${t.maxMp}</span>
            ${PM.map(n=>At`
              <span class="stat-label">${n.toUpperCase()}</span>
              <span class="stat-val">${t.stats[n]}</span>
            `)}
          </div>
        </div>
      </div>
    `}_renderClassRecord(t){return At`
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
            ${t.map(e=>At`
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
    `}render(){let t=te.value.gameOver;if(!t)return At``;let e=t.cards||[];return At`
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
    `}};customElements.define("game-over-screen",rh);var ah=class extends Le(Qt){createRenderRoot(){return this}render(){let t=te.value.battleStart;return At`
      <div id="battle-start-overlay" class="${t?"visible":""}" aria-hidden="${t?"false":"true"}">
        <div class="battle-start-content">
          <div class="battle-start-message">Battle Start</div>
          <div class="battle-start-sword-bar" role="progressbar">
            <div class="battle-start-sword-bar-fill"></div>
          </div>
        </div>
      </div>
    `}};customElements.define("battle-start",ah);var oh=class extends Qt{createRenderRoot(){return this}render(){return At`
      <div id="rotate-overlay" aria-hidden="true">
        <div class="rotate-overlay-icon">↻</div>
        <p class="rotate-overlay-text">Please rotate your device to landscape to play</p>
      </div>
    `}};customElements.define("rotate-overlay",oh);var lh=class extends Le(Qt){createRenderRoot(){return this}constructor(){super(),this._name="",this._reply="",this._offerIn=""}_upd(t,e){this[t]=e,this.requestUpdate()}async _copy(t){try{navigator.clipboard&&t&&await navigator.clipboard.writeText(t)}catch{}}render(){let t=te.value.online;if(!t)return At``;let e=t.view||"menu";return At`
      <div id="online-connect-overlay" class="online-connect-overlay">
        <div class="online-connect-inner">
          <h2 class="online-connect-title">Online Match</h2>
          ${t.error?At`<p class="online-error">${t.error}</p>`:""}
          ${this._renderView(t,e)}
        </div>
      </div>`}_renderView(t,e){return e==="hosting"?this._renderHosting(t):e==="joining"?this._renderJoining():e==="joined"?this._renderJoined(t):this._renderMenu()}_renderMenu(){return At`
      <label for="online-player-name">Your name</label>
      <input id="online-player-name" type="text" .value=${this._name}
        placeholder="Enter your name"
        @input=${t=>this._upd("_name",t.target.value)} />
      <div class="online-connect-actions">
        <button type="button" @click=${()=>Jt.onlineHost(this._name)}>Host game</button>
        <button type="button" @click=${()=>this._goJoin()}>Join game</button>
        <button type="button" @click=${()=>Jt.onlineCancel()}>Cancel</button>
      </div>`}_goJoin(){te.value={...te.value,online:{view:"joining",error:""}}}_renderHosting(t){return At`
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
        ${t.waiting?At`<p class="online-waiting">Connecting…</p>`:""}
      </div>
      <div class="online-connect-actions">
        <button type="button" @click=${()=>Jt.onlineCancel()}>Cancel</button>
      </div>`}_renderJoining(){return At`
      <div class="online-section">
        <p class="online-instruction">Paste the invite code from the host.</p>
        <textarea placeholder="Paste invite code here" .value=${this._offerIn}
          @input=${t=>this._upd("_offerIn",t.target.value)}></textarea>
        <button type="button" @click=${()=>Jt.onlineJoin(this._offerIn,this._name)}>Generate reply code</button>
      </div>
      <div class="online-connect-actions">
        <button type="button" @click=${()=>Jt.onlineCancel()}>Cancel</button>
      </div>`}_renderJoined(t){return At`
      <div class="online-section" id="online-join-answer-section">
        <p class="online-instruction">Send this reply code back to the host.</p>
        <textarea readonly .value=${t.answer||""}></textarea>
        <button type="button" @click=${()=>this._copy(t.answer)}>Copy reply code</button>
        <p class="online-waiting">Waiting for the host to connect…</p>
      </div>
      <div class="online-connect-actions">
        <button type="button" @click=${()=>Jt.onlineCancel()}>Cancel</button>
      </div>`}};customElements.define("online-connect",lh);var ch=class extends Le(Qt){createRenderRoot(){return this}render(){return At`
      <mode-select-screen></mode-select-screen>
      <hud-bar></hud-bar>
      <draft-panel></draft-panel>
      <turn-menu></turn-menu>
      <unit-preview></unit-preview>
      <battle-start></battle-start>
      <game-over-screen></game-over-screen>
      <rotate-overlay></rotate-overlay>
      <online-connect></online-connect>
    `}};customElements.define("app-root",ch);var IM=[{urls:"stun:stun.l.google.com:19302"}];function hp(i){return btoa(JSON.stringify(i))}function up(i){return JSON.parse(atob(i.trim()))}var Ar=class{constructor(){this.pc=null,this.channel=null,this.onOpen=null,this.onMessage=null,this.onClose=null,this.onError=null}_newPc(){let t=new RTCPeerConnection({iceServers:IM});return t.onconnectionstatechange=()=>{["disconnected","failed","closed"].includes(t.connectionState)&&this.onClose&&this.onClose()},this.pc=t,t}_wireChannel(t){this.channel=t,t.onopen=()=>this.onOpen&&this.onOpen(),t.onclose=()=>this.onClose&&this.onClose(),t.onmessage=e=>{if(this.onMessage)try{this.onMessage(JSON.parse(e.data))}catch(n){this.onError&&this.onError(n)}}}_waitIceComplete(t){return new Promise(e=>{if(t.iceGatheringState==="complete")return e();let n=()=>{t.iceGatheringState==="complete"&&(t.removeEventListener("icegatheringstatechange",n),e())};t.addEventListener("icegatheringstatechange",n),setTimeout(e,4e3)})}async createOffer(){let t=this._newPc();this._wireChannel(t.createDataChannel("game",{ordered:!0}));let e=await t.createOffer();return await t.setLocalDescription(e),await this._waitIceComplete(t),hp(t.localDescription)}async acceptAnswer(t){await this.pc.setRemoteDescription(up(t))}async acceptOffer(t){let e=this._newPc();e.ondatachannel=s=>this._wireChannel(s.channel),await e.setRemoteDescription(up(t));let n=await e.createAnswer();return await e.setLocalDescription(n),await this._waitIceComplete(e),hp(e.localDescription)}send(t){this.channel&&this.channel.readyState==="open"&&this.channel.send(JSON.stringify(t))}close(){if(this.channel)try{this.channel.close()}catch{}if(this.pc)try{this.pc.close()}catch{}this.channel=null,this.pc=null}};var bo=class{constructor({transport:t,controller:e,localPlayerNumber:n}){this.transport=t,this.controller=e,this.localPlayerNumber=n,this._outSeq=0,this._seenRemote=new Set,this._queue=[],this._ready=!1,t.onMessage=s=>this._onMessage(s)}markReady(){this._ready=!0;for(let t of this._queue)this.controller.dispatch(t);this._queue.length=0}localDispatcher(){return{dispatch:t=>this.sendLocal(t)}}sendLocal(t){let e=++this._outSeq;return this.transport.send({kind:"intent",from:this.localPlayerNumber,seq:e,intent:t}),this.controller.dispatch(t)}_onMessage(t){if(!t||t.kind!=="intent")return;let e=`${t.from}:${t.seq}`;if(!this._seenRemote.has(e)){if(this._seenRemote.add(e),!this._ready){this._queue.push(t.intent);return}this.controller.dispatch(t.intent)}}};var LM=.25,DM=.03,dp=.5,fp=.35,UM=.8,pp=new Set(["arcaneBolt","feast","pierce","snipe","berserk","drain","shuriken","chokuto","bite","execute","judgement","exorcise","ambush","powerShot","concoct","bloodSuck","gnaw","malediction","skewer"]),mp=new Set(["chakra","sacrifice"]),gp=new Set(["brave","focus","bloodlust","iaido","howl","mantra","sanctuary","windWalk","forge","fortify","warCry","foresight","overheal","rapid","vodoo"]),_p=new Set(["impale","poison","gaze","debilitate","bash","infect"]),xp=new Set(["dominate","manaDrain","weaken","cripple","hex","blind","raid"]),yp=new Set(["reanimate"]);function Xe(i,t,e,n){return Math.abs(i-e)+Math.abs(t-n)}function vp(i){return i.settings.maxTurns-i.turnCount}function dn(i){return i.maxHp>0?i.hp/i.maxHp:1}function hh(i){return i.maxHp>0&&dn(i)<DM}function Zn(i){return i.maxHp>0&&dn(i)<LM}function Mp(i,t){return i.units.filter(e=>e.hp>0&&e.player!==t.player)}function Sp(i,t){return i.units.filter(e=>e.hp>0&&e.player===t.player&&e.id!==t.id)}function uh(i,t=null){let e=new Set;for(let n of i.units)n.hp<=0||n.id===t||e.add(i.tileKey(n.x,n.y));return e}function Rr(i){let t=Ht(i,"agi");return Bo(i)?Math.max(0,t):Math.max(4,t)}function bp(i,t){let{world:e}=i,n=Rr(t),s=Br(e,t.x,t.y,n,i.units,t),r=uh(i,t.id),a=[];return s.forEach((o,l)=>{o===0||r.has(l)||a.push({gx:l%e.w,gy:l/e.w|0,dist:o})}),a}function Ep(i,t,{skipSkills:e=!1}={}){let n=t.range!=null?t.range:1;if(e)return n;let s=mn(i,t).filter(a=>!a.disabled&&t.mp>=a.cost&&a.target==="enemy"),r=s.length?Math.max(...s.map(a=>a.range||0)):0;return Math.max(n,r)}function Tp(i,t,e){return e?!1:i.level>=2&&t>=2}function NM(i,t){let e=Ht(i,"str")*.7+Ht(i,"dex")*.2+Ht(i,"int")*.1-(Ht(t,"vit")*.3+Ht(t,"luk")*.2);return Math.max(1,Math.floor(e))}function Cr(i,t){let e=Ht(t,"agi")*.7+Ht(t,"luk")*.3,n=Ht(i,"dex");return Math.min(1,n/Math.max(.001,e))}function Eo(i,t,e){return Ls({x:i,y:t},e)}function OM(i,t){let e=NM(i,t);return i.tempBuff?.doubleAttack===!0&&(e*=2),e*Ls(i,t)}function FM(i,t){return OM(i,t)>=t.hp}function dh(i,t){return FM(i,t)&&Cr(i,t)>=UM}function fh(i,t,e,n,s){let r=[];for(let a of n){let o=Xe(t,e,a.x,a.y);o>0&&o<=s&&tn(i,t,e,a.x,a.y)&&r.push({target:a,dist:o})}return r}function wp(i,t,e,n){let s=new Map;for(let r of t){let a=r.gy*i.w+r.gx;s.set(a,fh(i,r.gx,r.gy,e,n))}return s}function To(i,t,e){if(!i||i.length<=1)return null;for(let n=i.length-1;n>=1;n--){let s=i[n];if(t.has(s.y*e.w+s.x))return{gx:s.x,gy:s.y}}return null}function ph(i,t,e,n){if(!i||i.length<=1)return null;let s=Math.min(t,i.length-1);for(let r=s;r>=1;r--){let a=i[r];if(!e.has(a.y*n.w+a.x))return{gx:a.x,gy:a.y}}return null}function mh(i,t){if(!t.length||!i.length)return null;let e=null,n=1/0;for(let s of i){let r=1/0;for(let a of t)r=Math.min(r,Xe(s.gx,s.gy,a.gx,a.gy));r<n&&(n=r,e=s)}return e}function wo(i,t,e,n,s=null){let r=0;for(let a of n){let o=Xe(t,e,a.x,a.y);if(o===0)continue;let l=a.range!=null?a.range:1;if(o<=l&&tn(i,t,e,a.x,a.y)){let h=s?Ls(a,{x:t,y:e,facing:s}):1;r+=2*h;continue}let c=l+Math.max(1,Ht(a,"agi"));o<=c&&(r+=1)}return r}function Pr(i,t,e,n=null){if(!t.length)return null;if(!e.length)return t[0];let s=null,r=1/0,a=-1;for(let o of t){let l=n?jn(n.x,n.y,o.gx,o.gy)||n.facing:null,c=wo(i,o.gx,o.gy,e,l),h=1/0;for(let u of e)h=Math.min(h,Xe(o.gx,o.gy,u.x,u.y));(c<r||c===r&&h>a)&&(r=c,a=h,s=o)}return s}function Ap(i,t,e){let{world:n}=i,s=new Set;for(let r of t){let a=r.range!=null?r.range:1;for(let o of e){let l=Xe(r.x,r.y,o.x,o.y);if(l>0&&l<=a&&tn(n,r.x,r.y,o.x,o.y)){s.add(r.id);break}}}return s}function Rp(i,t,e,n){if(!i.length)return null;if(!e.length)return i[0];let s=dn(t)>=.6,r=null,a=-1/0;for(let o of i){let l=1/0;for(let u of e)l=Math.min(l,Xe(o.gx,o.gy,u.x,u.y));let c=n.length?1/0:999;for(let u of n)c=Math.min(c,Xe(o.gx,o.gy,u.x,u.y));let h=s?c<l?l-1e3:l:l-c;h>a&&(a=h,r=o)}return r}function Cp(i,t,e,n){if(!t.length)return null;let s=null,r=-1;for(let a of i){let o=1/0;for(let c of t)o=Math.min(o,Xe(a.gx,a.gy,c.x,c.y));let l=!1;for(let c of t){let h=Xe(a.gx,a.gy,c.x,c.y);if(h>0&&h<=e&&tn(n,a.gx,a.gy,c.x,c.y)){l=!0;break}}l&&o>r&&(r=o,s=a)}return s}function Pp(i){let t=[];return i.powerups.forEach((e,n)=>{t.push({gx:n%i.world.w,gy:n/i.world.w|0})}),t}function Ip(i,t,e,n){let{world:s}=i;for(let r of n)for(let a of e){let o=a.range!=null?a.range:1,l=Xe(a.x,a.y,r.x,r.y);if(l>0&&l<=o&&tn(s,a.x,a.y,r.x,r.y))return!0}return!1}function Ao(i,t,e){let n=Th(i.world,t.x,t.y,e,i.units,t);return!n||n.path.length<=1?null:n}function qe(i,t,e){return{type:"move",unitId:i.id,toGx:t,toGy:e}}function Jn(i){return{type:"endTurn",unitId:i.id}}function gh(i,t){return{type:"attack",unitId:i.id,targetId:t.id}}function Lp(i,t,e){return{type:"skill",unitId:i.id,skillIndex:t,targetId:e?.id??i.id}}function mi(i,t,e,n,s){let{world:r}=i;if(!e.length||!n.length)return null;let a=Rr(t),o=Ao(i,t,e);if(o){let c=ph(o.path,a,s,r);if(c&&(c.gx!==t.x||c.gy!==t.y))return qe(t,c.gx,c.gy)}let l=mh(n,e);return l&&(l.gx!==t.x||l.gy!==t.y)?qe(t,l.gx,l.gy):null}function Dp(i,t,e){let{world:n}=i,s=Ns(n),r=Gh(n,t.player),a=new Set(s.map(c=>i.tileKey(c.gx,c.gy))),o=s.filter(c=>!e.has(i.tileKey(c.gx,c.gy))),l=r.filter(c=>!e.has(i.tileKey(c.gx,c.gy)));return{centerTiles:s,enemyBaseTiles:r,centerKeys:a,centerTargets:o.length?o:s,baseTargets:l.length?l:r}}function _h(i,t,e,n,s){let{world:r}=i;if(!n.length||!s.length)return null;let a=Rr(t),o=new Set;for(let u of i.units)u.hp>0&&o.add(i.tileKey(u.x,u.y));let l=new Set(s.map(u=>i.tileKey(u.gx,u.gy)));function c(u,d){let p=null,_=e;for(let g=-_;g<=_;g++)for(let m=-_;m<=_;m++){if(m===0&&g===0||Math.abs(m)+Math.abs(g)>_)continue;let f=u.x+m,y=u.y+g;if(f<0||f>=r.w||y<0||y>=r.h||!An(r,f,y)||!tn(r,f,y,u.x,u.y)||o.has(i.tileKey(f,y)))continue;let x=xi(r,t.x,t.y,f,y,i.units,t),b=x?x.length-1:1/0;x&&x.length>1&&(!d||b<=a)&&(!p||x.length<p.length)&&(p=x)}return p}let h=[];for(let u of n){let d=c(u,!0);d&&h.push({enemy:u,path:d})}if(h.length){let u=h.filter(m=>Zn(m.enemy)),d=u.length?u:h;d.sort((m,f)=>u.length?m.enemy.hp-f.enemy.hp||m.path.length-f.path.length:m.path.length-f.path.length||m.enemy.hp-f.enemy.hp);let p=d[0].enemy,_=s.filter(m=>{let f=Xe(m.gx,m.gy,p.x,p.y);return f>0&&f<=e&&tn(r,m.gx,m.gy,p.x,p.y)});if(_.length){_.sort((f,y)=>Eo(y.gx,y.gy,p)-Eo(f.gx,f.gy,p)||(f.dist||0)-(y.dist||0));let m=_[0];if(m.gx!==t.x||m.gy!==t.y)return qe(t,m.gx,m.gy)}let g=To(d[0].path,l,r);if(g&&(g.gx!==t.x||g.gy!==t.y))return qe(t,g.gx,g.gy)}return null}function Up(i,t,e){if(!e.length)return null;let n=i.units.filter(a=>a.hp>0&&a.player===t);if(!n.length)return e[0];let s=e[0],r=-1;for(let a of e){let o=1/0;for(let l of n)o=Math.min(o,Xe(a.gx,a.gy,l.x,l.y));o>r&&(r=o,s=a)}return s}var Ro=class{constructor({state:t,controller:e,bus:n,isCPU:s}){this.state=t,this.controller=e,this.bus=n,this.isCPU=s,this._busy=!1;let r=()=>this._maybeAct();n.on("draftStarted",r),n.on("draftPickChosen",r),n.on("draftTurnChanged",r),n.on("unitPlaced",r)}_maybeAct(){let t=this.state;if(t.phase!=="draft"||this._busy||this._draftComplete())return;let e=Rn(t);e==null||!this.isCPU(e)||(this._busy=!0,setTimeout(()=>this._act(e),400))}_draftComplete(){return this.state.draft.pickIndex>=2*this.state.settings.draftPicksPerPlayer}async _act(t){let e=this.state;try{if(e.phase!=="draft"||this._draftComplete()||Rn(e)!==t)return;let n=e.draft;if(n.pendingClassKey){let s=Up(this.state,t,n.placementTiles);s&&await this.controller.dispatch({type:"draftPlace",gx:s.gx,gy:s.gy})}else{let s=this._pickClass(t);s&&await this.controller.dispatch({type:"draftPick",classKey:s})}}finally{this._busy=!1,this._maybeAct()}}_pickClass(t){let e=this.state.draft.availableClasses,n=Oe.filter(g=>e.has(g));if(n.length===0)return null;let s=this.state.aiDraftPreference||"balanced",r=g=>Ye[g]||{};if(s==="random")return n[Math.floor(this.state.rng.next()*n.length)];if(s==="custom")return op.find(g=>e.has(g))||n[0];let a=(g,m)=>{let f=n[0],y=g(f),x=m(f);for(let b=1;b<n.length;b++){let R=n[b],M=g(R),S=m(R);(M>y||M===y&&S>x)&&(f=R,y=M,x=S)}return f};if(s==="tanky")return a(g=>r(g).hp??0,g=>r(g).vit??0);if(s==="aggressive")return a(g=>r(g).str??0,g=>r(g).agi??0);if(s==="scout")return a(g=>r(g).agi??0,g=>r(g).dex??0);if(s==="ranged")return a(g=>r(g).range??0,g=>r(g).dex??0);if(s==="caster")return a(g=>r(g).int??0,g=>r(g).mp??0);let o=this.state.settings.draftPicksPerPlayer,l=lp(o),c={tank:0,melee:0,support:0,ranged:0,caster:0};for(let g of this.state.units){if(g.player!==t)continue;let m=Qc[g.class];m&&c[m]++}let h=g=>Math.max(0,(l[g]??0)-(c[g]??0)),u=g=>{let m=Qc[g];return{def:m!=null?h(m):0,hp:r(g).hp??0,negVar:-(Ah[g]??1/0)}},d=(g,m)=>g.def!==m.def?g.def>m.def:g.hp!==m.hp?g.hp>m.hp:g.negVar>m.negVar,p=n[0],_=u(p);for(let g=1;g<n.length;g++){let m=u(n[g]);d(m,_)&&(p=n[g],_=m)}return p}};function Np(i,t,e=null){if(!t.length)return null;let n=t;if(e&&e.size){let o=t.filter(l=>e.has(l.target.id));o.length&&(n=o)}let s=n.filter(o=>dh(i,o.target));if(s.length)return s.sort((o,l)=>Cr(i,l.target)-Cr(i,o.target)||o.target.hp-l.target.hp||o.dist-l.dist),s[0].target;let r=o=>o.target.hp/(Eo(i.x,i.y,o.target)*Math.max(.05,Cr(i,o.target)));return n.slice().sort((o,l)=>r(o)-r(l)||o.dist-l.dist)[0]?.target??null}function Co(i,t,e){return zi(i,t,e).filter(n=>n.targetUnit).map(n=>n.targetUnit)}function BM(i,t,e){let{enemiesInRange:n,enemiesInRangeByTile:s,reachableTiles:r,hasLowHpEnemyInRange:a,hasLowHpEnemyReachable:o}=e,l=mn(i,t),c=a||!i.hasMoved&&o,h=null,u=null,d=-1,p=(g,m,f)=>{h=g,u=m,d=f};if(!c)for(let g=0;g<l.length;g++){let m=l[g];if(m.disabled||t.mp<m.cost||!mp.has(m.effectKey))continue;let f=zi(i,t,m).filter(y=>y.targetUnit&&dn(y.targetUnit)<dp);if(f.length){let y=f.sort((x,b)=>x.targetUnit.hp-b.targetUnit.hp)[0].targetUnit;p(m,y,g);break}}if(!h&&!c){let g=i.units.filter(m=>m.hp<=0&&!m.isReanimated);for(let m=0;m<l.length;m++){let f=l[m];if(!(f.disabled||t.mp<f.cost)&&!(f.effectKey==="reanimate"&&!g.length)&&yp.has(f.effectKey)){p(f,t,m);break}}}if(!h&&!c&&(n.length>0||r.some(m=>(s.get(i.tileKey(m.gx,m.gy))||[]).length>0))){let m=l.map((f,y)=>({skill:f,index:y})).filter(({skill:f})=>!f.disabled&&gp.has(f.effectKey)).sort((f,y)=>(y.skill.level||1)-(f.skill.level||1));for(let{skill:f,index:y}of m){let x=t.tempBuff&&t.tempBuff.duration>0;if(f.target==="self"){if(f.effectKey==="bloodlust"&&dn(t)>.8)continue;if(!x){p(f,t,y);break}}if(f.target==="ally"){if(f.effectKey==="overheal"&&dn(t)>.7)continue;let b=zi(i,t,f).filter(S=>S.targetUnit).map(S=>S.targetUnit);if(!b.length)continue;let R=b.filter(S=>!S.tempBuff||S.tempBuff.duration<=0),M=(R.length?R:b).sort((S,D)=>S.hp-D.hp)[0];if(M.tempBuff&&M.tempBuff.duration>0||f.effectKey==="overheal"&&dn(M)>.7)continue;p(f,M,y);break}if(f.target==="enemy"){let b=Co(i,t,f);if(f.effectKey==="vodoo"&&t.tempBuff?.vodoo&&(b=b.filter(R=>R.id!==t.tempBuff.vodoo)),b.length){p(f,b.sort((R,M)=>R.hp-M.hp)[0],y);break}}}}if(!h){let g=null;for(let m=0;m<l.length;m++){let f=l[m];if(f.disabled||t.mp<f.cost||!pp.has(f.effectKey)||f.effectKey==="feast"&&dn(t)>.7||f.effectKey==="berserk"&&dn(t)<.25||f.effectKey==="shuriken"&&n.length>0||f.effectKey==="judgement"&&dn(t)>.7)continue;let y=Co(i,t,f);if(!y.length)continue;let x=y.filter(M=>dn(M)<fp),b=x.length?x:y,R=f.type==="spell"?b.reduce((M,S)=>{if(!M)return S;let D=Ht(S,"int")-Ht(M,"int");return D<0||D===0&&S.hp<M.hp?S:M},null):b.reduce((M,S)=>!M||S.hp<M.hp?S:M,null);R&&(!g||R.hp<g.target.hp||R.hp===g.target.hp&&(f.cost||0)<(g.skill.cost||0))&&(g={skill:f,index:m,target:R})}g&&p(g.skill,g.target,g.index)}if(!h&&!c)for(let g=0;g<l.length;g++){let m=l[g];if(m.disabled||t.mp<m.cost||!xp.has(m.effectKey))continue;let f=Co(i,t,m);if(f.length){p(m,f.reduce((y,x)=>!y||x.hp<y.hp?x:y,null),g);break}}if(!h&&!c)for(let g=0;g<l.length;g++){let m=l[g];if(m.disabled||t.mp<m.cost||!_p.has(m.effectKey))continue;let y=Co(i,t,m).filter(x=>!x.tempDebuff||x.tempDebuff.duration<=0);if(y.length){p(m,y.reduce((x,b)=>!x||b.hp<x.hp?b:x,null),g);break}}if(!h||!u||d<0)return null;let _=h.target==="self"?t:u;return Lp(t,d,_)}function Op(i,t,e,n){let s=Pp(i);return!s.length||!e.length?null:mi(i,t,s,e,n)}function Fp(i,t,e){let{reachableTiles:n,occupied:s,prioritizeEnemyBase:r,enemyBaseTiles:a,baseTargets:o,centerTargets:l}=e;if(!n.length)return null;if(r&&a.length&&!a.some(h=>h.gx===t.x&&h.gy===t.y)){let h=mi(i,t,o,n,s);if(h)return h}return mi(i,t,l,n,s)}function Bp(i,t,e,n){if(!Zn(t)||!e.length)return null;let{world:s}=i,r=wo(s,t.x,t.y,n,t.facing);if(r<=0)return null;let a=Pr(s,e,n,t);if(!a||a.gx===t.x&&a.gy===t.y)return null;let o=jn(t.x,t.y,a.gx,a.gy)||t.facing;return wo(s,a.gx,a.gy,n,o)<r?qe(t,a.gx,a.gy):null}function kM(i,t,e){let{enemies:n,allies:s,reachableTiles:r,occupied:a,effRange:o,isRangedAi:l,centerTiles:c,centerKeys:h,centerTargets:u,baseTargets:d,enemyBaseTiles:p,prioritizeEnemyBase:_,tl:g}=e,{world:m}=i,f=Rr(t),y=new Set(r.map(M=>i.tileKey(M.gx,M.gy)));if(l&&n.length&&i.powerups.size>0){let M=Op(i,t,r,a);if(M)return M}if(g<=20&&c.length){if(c.some(v=>v.gx===t.x&&v.gy===t.y)){let v=r.filter(O=>h.has(i.tileKey(O.gx,O.gy))&&(O.gx!==t.x||O.gy!==t.y)),T=Pr(m,v,n,t);return T?qe(t,T.gx,T.gy):Jn(t)}let S=Ao(i,t,u);if(S){let v=ph(S.path,f,a,m);if(v)return qe(t,v.gx,v.gy)}let D=mh(r,u);return D?qe(t,D.gx,D.gy):Jn(t)}let x=Bp(i,t,r,n);if(x)return x;if(!Zn(t)&&r.length){let M=Fp(i,t,e);if(M)return M}if(hh(t)&&g>20){let{enemiesInRangeByTile:M}=e,S=null,D=1/0;for(let T of r){let X=(M.get(i.tileKey(T.gx,T.gy))||[]).filter(I=>Zn(I.target));if(!X.length)continue;let j=Math.min(...X.map(I=>I.target.hp));j<D&&(D=j,S=T)}if(S){let T=xi(m,t.x,t.y,S.gx,S.gy,i.units,t),O=T?To(T,y,m):null;if(O)return qe(t,O.gx,O.gy)}let v=Pr(m,r,n,t);return v?qe(t,v.gx,v.gy):Jn(t)}let b=l?Cp(r,n,o,m):null;if(b)return qe(t,b.gx,b.gy);let R=Rp(r,t,n,s);return R?qe(t,R.gx,R.gy):Jn(t)}function HM(i,t){let e=Mp(i,t),n=Sp(i,t),s=bp(i,t),r=uh(i,t.id),a=t.tempBuff?.doubleAttack===!0,o=Ep(i,t,{skipSkills:a}),l=t.range!=null?t.range:1,c=Tp(t,o,a),h=vp(i),u=t.level===2&&h>20,{centerTiles:d,enemyBaseTiles:p,centerKeys:_,centerTargets:g,baseTargets:m}=Dp(i,t,r),f=fh(i.world,t.x,t.y,e,l),y=wp(i.world,s,e,o),x=f.some(M=>Zn(M.target)),b=x||s.some(M=>(y.get(i.tileKey(M.gx,M.gy))||[]).some(D=>Zn(D.target))),R={enemies:e,allies:n,reachableTiles:s,occupied:r,effRange:o,attackRange:l,isRangedAi:c,centerTiles:d,centerKeys:_,centerTargets:g,baseTargets:m,enemyBaseTiles:p,prioritizeEnemyBase:u,tl:h,enemiesInRange:f,enemiesInRangeByTile:y,hasLowHpEnemyInRange:x,hasLowHpEnemyReachable:b};if(e.length===0){if(!i.hasMoved&&s.length){let S=mi(i,t,u?m:g,s,r);if(S)return S}return Jn(t)}if(i.hasAttacked)return i.hasMoved?Jn(t):kM(i,t,R);if(f.length){let M=f.filter(S=>dh(t,S.target));if(M.length){let S=Np(t,M);if(S)return gh(t,S)}}if(!a){let M=BM(i,t,R);if(M)return M}if(f.length){let M=Ip(i,t,e,n)?Ap(i,e,n):null,S=Np(t,f,M);if(S)return gh(t,S)}if(a){let M=_h(i,t,l,e,s);if(M)return M}if(!i.hasMoved){if(!b){let S=Bp(i,t,s,e);if(S)return S}if(!b&&i.powerups.size>0){let S=Op(i,t,s,r);if(S)return S}if(h<=20&&d.length&&!d.some(D=>D.gx===t.x&&D.gy===t.y)){let v=Ao(i,t,g)?.path??null,T=Math.min(...d.map(I=>Xe(t.x,t.y,I.gx,I.gy))),O=null,X=-1;for(let I of s){let B=i.tileKey(I.gx,I.gy);if(Math.min(...d.map(L=>Xe(I.gx,I.gy,L.gx,L.gy)))>T||!(y.get(B)||[]).some(L=>Zn(L.target)))continue;let C=v?v.findIndex(L=>L.x===I.gx&&L.y===I.gy):0;C>X&&(X=C,O=I)}if(O){let I=xi(i.world,t.x,t.y,O.gx,O.gy,i.units,t),B=new Set(s.map(k=>i.tileKey(k.gx,k.gy))),$=I?To(I,B,i.world):null;if($)return qe(t,$.gx,$.gy)}let j=mi(i,t,g,s,r);if(j)return j}if(h<=10&&d.length){let S=mi(i,t,g,s,r);if(S)return S}if(h>20&&u&&p.length&&!p.some(D=>D.gx===t.x&&D.gy===t.y)){let D=mi(i,t,m,s,r);if(D)return D}if(h>20&&hh(t)){let S=Pr(i.world,s,e,t);if(S)return qe(t,S.gx,S.gy)}let M=_h(i,t,o,e,s);if(M)return M;if(h>20&&!Zn(t)){let S=Fp(i,t,R);if(S)return S}}return Jn(t)}var Po=class{constructor({state:t,controller:e,bus:n,isCPU:s}){this.state=t,this.controller=e,this.bus=n,this.isCPU=s,this._busy=!1;let r=()=>this._maybeAct();n.on("playingStarted",r),n.on("turnChanged",r),n.on("actionResolved",r),n.on("initiativeChanged",r)}_maybeAct(){let t=this.state;t.phase!=="playing"||this._busy||this.isCPU(t.currentPlayer)&&(this._busy=!0,setTimeout(()=>this._act(),350))}async _act(){let t=this.state;try{if(t.phase!=="playing"||!this.isCPU(t.currentPlayer))return;let e=t.getActiveUnit();if(!e||e.hp<=0){await this.controller.dispatch({type:"endTurn"});return}let n=HM(t,e);await this.controller.dispatch(n||Jn(e))}finally{this._busy=!1,this._maybeAct()}}};function zM(){let i=document.getElementById("canvas-wrap"),t=new Dr,e=new Fr({seed:Date.now()});e.world=ko({w:Me.gridW,h:Me.gridH,centerPlazaRadius:Me.centerPlazaRadius,seed:e.rng.next()*1e9});let n=new Hr(e,t),s=Rf(i,e,t);n.setAnimator(s.animator);let r=new lo(s.view,s.tween);s.units.cameraFollow=S=>r.follow(S);let a=S=>n.dispatch(S),o=S=>a(S),l=new co({view:s.view,state:e,controller:n,camera:r,highlights:s.highlights,bus:t,dispatch:o});rp(e,t);let c=S=>e.isCPUPlayer(S);new Ro({state:e,controller:n,bus:t,isCPU:c}),new Po({state:e,controller:n,bus:t,isCPU:c});let h=({unit:S}={})=>{S&&r.centerOn(S.x,S.y)};t.on("turnChanged",h),t.on("playingStarted",h),t.on("draftComplete",()=>{ce({battleStart:!0,draft:null}),setTimeout(()=>{n.startPlaying(),ce({battleStart:!1})},2500)});function u(S){e.gameMode=S.mode,e.aiDraftPreference=S.aiDraftPreference||"balanced";let D=S.seed!=null?S.seed:Date.now()>>>0,v=(S.mode==="pvp"||S.mode==="online")&&S.mapMode==="short";e.settings=Ur({gridW:v?27:S.gridW||Me.gridW,gridH:v?15:S.gridH||Me.gridH,centerPlazaRadius:v?.35:S.centerPlazaRadius||Me.centerPlazaRadius,maxTurns:v?100:S.maxTurns||Me.maxTurns,draftPicksPerPlayer:S.numUnits||Me.draftPicksPerPlayer,moveDurationMs:S.moveDurationMs!=null?S.moveDurationMs:Me.moveDurationMs}),e.rng.reseed(D),e.clearUnits(),e.world=ko({w:e.settings.gridW,h:e.settings.gridH,centerPlazaRadius:e.settings.centerPlazaRadius,seed:D}),s.view.setWorld(e.world),t.emit("worldRebuilt",{}),ce({screen:"game",phase:"draft",gameMode:S.mode,gameOver:null,previewUnit:null}),tu(n.ctx)}function d(){e.phase="draft",l.clearSelection(),ce({screen:"mode-select",gameOver:null,battleStart:!1,draft:null,previewUnit:null,selectedUnit:null})}let p=null,_=null,g=0,m="",f="Player 1",y="Player 2";function x(){if(p&&p.transport)try{p.transport.close()}catch{}p=null,a=S=>n.dispatch(S)}function b(S,D){e.localPlayerNumber=S,e.playerNames={1:D[1]||"Player 1",2:D[2]||"Player 2"},a=v=>p.netplay.sendLocal(v),u({mode:"online",mapMode:_.mapMode,numUnits:_.numUnits,seed:g}),p.netplay.markReady(),ce({online:null})}function R(S,D){p.netplay=new bo({transport:p.transport,controller:n,localPlayerNumber:S}),b(S,D)}function M(){te.value.online&&ce({online:{...te.value.online,error:"Connection lost."}})}Jt.onlineStart=S=>{_=S,x(),ce({online:{view:"menu",error:""}})},Jt.onlineCancel=()=>{x(),ce({online:null})},Jt.onlineHost=async S=>{m=S||"Player 1",g=(Date.now()^Math.random()*4294967295)>>>0;let D=new Ar;p={transport:D,netplay:null},D.onOpen=()=>R(1,{1:m,2:y}),D.onClose=M;try{let v=await D.createOffer(),T=btoa(JSON.stringify({sdp:v,seed:g,cfg:_,name:m}));ce({online:{view:"hosting",offer:T,error:""}})}catch(v){ce({online:{view:"menu",error:v.message||"Failed to create offer."}})}},Jt.onlineHostConnect=async S=>{if(!(!p||!p.transport))try{let{sdp:D,name:v}=JSON.parse(atob(String(S).trim()));y=v||"Player 2";let T=te.value.online||{};ce({online:{...T,error:"",waiting:!0}}),await p.transport.acceptAnswer(D)}catch(D){let v=te.value.online||{};ce({online:{...v,waiting:!1,error:D.message||"Invalid reply code."}})}},Jt.onlineJoin=async(S,D)=>{m=D||"Player 2";try{let v=JSON.parse(atob(String(S).trim()));g=v.seed,_=v.cfg||{mapMode:"long",numUnits:Me.draftPicksPerPlayer},f=v.name||"Player 1";let T=new Ar;p={transport:T,netplay:null},T.onOpen=()=>R(2,{1:f,2:m}),T.onClose=M;let O=await T.acceptOffer(v.sdp),X=btoa(JSON.stringify({sdp:O,name:m}));ce({online:{view:"joined",answer:X,error:""}})}catch(v){ce({online:{view:"joining",error:v.message||"Invalid host code."}})}},Jt.startMatch=S=>u(S),Jt.toModeSelect=()=>{x(),d()},Jt.draftPick=S=>{e.gameMode==="online"&&n.currentDraftPlayer!==e.localPlayerNumber||o({type:"draftPick",classKey:S})},Jt.attack=()=>l.enterAttackMode(),Jt.skill=S=>l.enterSkillMode(S),Jt.endTurn=()=>{if(e.gameMode==="online"&&!e.isHumanTurn())return;let S=e.getActiveUnit();o({type:"endTurn",unitId:S?S.id:void 0})},Jt.cancel=()=>l.clearSelection(),ce({screen:"mode-select"})}zM();
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
