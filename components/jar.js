const JarComponent={
    init({button,msg,next,data,done})
    {let a=[],used=[];function load(){a=data();used=[]}button.onclick=()=>{if(!a.length)return;
        let q=a.map((_,i)=>i).filter(i=>!used.includes(i));if(!q.length){used=[];
            q=a.map((_,i)=>i)}let i=q[Math.floor(Math.random()*q.length)];used.push(i);msg.textContent='"'+a[i]+'"'};
            next.onclick=done;return{load}}};
