/* Pure match-3 rules, also used by the smoke tests. */
(function(root){
const N=8,random=()=>({c:Math.floor(Math.random()*4),p:null});
function matches(b){let runs=[];for(let axis=0;axis<2;axis++)for(let a=0;a<N;a++){let run=[];for(let k=0;k<=N;k++){const i=axis?k*N+a:a*N+k;if(k<N&&b[i]&&(!run.length||b[i].c===b[run[0]].c))run.push(i);else{if(run.length>=3)runs.push(run);run=k<N&&b[i]?[i]:[];}}}return runs;}
function adjacent(a,b){return Math.abs(a-b)===8||(Math.floor(a/8)===Math.floor(b/8)&&Math.abs(a-b)===1)}
function swap(b,a,c){[b[a],b[c]]=[b[c],b[a]]}
function legal(b){for(let a=0;a<64;a++)for(const c of [a+1,a+8])if(c<64&&adjacent(a,c)){if(b[a].p||b[c].p)return[a,c];swap(b,a,c);const good=matches(b).length;swap(b,a,c);if(good)return[a,c]}return null}
function fresh(){let b;do{b=Array.from({length:64},()=>random());for(let i=0;i<64;i++)while((i%8>=2&&b[i].c===b[i-1].c&&b[i].c===b[i-2].c)||(i>=16&&b[i].c===b[i-8].c&&b[i].c===b[i-16].c))b[i]=random();}while(!legal(b));return b}
function fall(b){for(let col=0;col<N;col++){let cells=[];for(let r=7;r>=0;r--)if(b[r*8+col])cells.push(b[r*8+col]);for(let r=7;r>=0;r--)b[r*8+col]=cells[7-r]||random()}}
function blast(b,index,color){const t=b[index];if(!t?.p)return[index];if(t.p==='compass')return b.map((x,i)=>x&&(x.c===(color??t.c)||i===index)?i:-1).filter(i=>i>=0);let ids=[];for(let i=0;i<64;i++){const dr=Math.abs(Math.floor(i/8)-Math.floor(index/8)),dc=Math.abs(i%8-index%8);if(t.p==='cannon'?(dr===0||dc===0):(dr<=1&&dc<=1))ids.push(i)}return ids}
function creations(runs,preferred){const out=new Map(),used=new Set();for(const run of runs){if(run.some(i=>used.has(i)))continue;let connected=runs.filter(r=>r.some(i=>run.includes(i))),all=[...new Set(connected.flat())];let p=run.length>=5?'compass':connected.length>1?'powder':run.length===4?'cannon':null;if(!p)continue;let index=all.includes(preferred)?preferred:all[Math.floor(all.length/2)];out.set(index,p);all.forEach(i=>used.add(i));}return out}
const api={matches,adjacent,swap,legal,fresh,fall,blast,creations};if(typeof module!=='undefined')module.exports=api;else root.PirateEngine=api;
})(globalThis);
