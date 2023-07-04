import{s as et,n as q,o as nt,k as st,b as ot}from"../chunks/scheduler.ea8f964b.js";import{S as at,i as it,g as I,s as B,h as T,x as J,c as R,j as V,f as M,k as C,a as L,y as H}from"../chunks/index.168cc205.js";function ct(A){let u,E="My name is Radik Khamatdinov",a,m,b,l,y,P=`<p class="mb">Front-end developer based in Batumi, Georgia with 3+ years of experience
      in building websites and web applications. I specialize in <b>JavaScript/TypeScript</b> and
      have professional experience working with <b>React and Vue.</b> Also i have
      experience with <b>Canvas API and WebGL</b>.</p> <p>I&#39;m interested in gamedev, art/design, motion design and music. Lead two music projects
      <b>DTTE</b> and <b>Bireflector</b>. Have some experience in <b>Unity/C# and GLSL</b>.</p>`,k,f,h;return{c(){u=I("h1"),u.textContent=E,a=B(),m=I("div"),b=B(),l=I("div"),y=I("div"),y.innerHTML=P,k=B(),f=I("div"),h=I("canvas"),this.h()},l(i){u=T(i,"H1",{["data-svelte-h"]:!0}),J(u)!=="svelte-1gjn7pa"&&(u.textContent=E),a=R(i),m=T(i,"DIV",{class:!0}),V(m).forEach(M),b=R(i),l=T(i,"DIV",{class:!0});var r=V(l);y=T(r,"DIV",{["data-svelte-h"]:!0}),J(y)!=="svelte-16bai6y"&&(y.innerHTML=P),k=R(r),f=T(r,"DIV",{class:!0});var D=V(f);h=T(D,"CANVAS",{class:!0,width:!0,height:!0}),V(h).forEach(M),D.forEach(M),r.forEach(M),this.h()},h(){C(m,"class","stripe-line stripe-line--tiny stripe-line--mgb"),C(h,"class","about__canvas"),C(h,"width","400"),C(h,"height","400"),C(f,"class","about__art"),C(l,"class","grid")},m(i,r){L(i,u,r),L(i,a,r),L(i,m,r),L(i,b,r),L(i,l,r),H(l,y),H(l,k),H(l,f),H(f,h),A[1](h)},p:q,i:q,o:q,d(i){i&&(M(u),M(a),M(m),M(b),M(l)),A[1](null)}}}const W=500;function rt(A,u,E){let a;const m=[],b=[0,0,-W],l=(t,e)=>[t[0]+e[0],t[1]+e[1],t[2]+e[2]],y=(t,e)=>[t[0]*e,t[1]*e,t[2]*e],P=(t,e)=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2],k=t=>Math.sqrt(P(t,t)),f=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],h=t=>{const e=k(t);return[t[0]/e,t[1]/e,t[2]/e]},i=(t,e)=>[P(t,[e[0][0],e[1][0],e[2][0]]),P(t,[e[0][1],e[1][1],e[2][1]]),P(t,[e[0][2],e[1][2],e[2][2]])],r=t=>[t[0]/t[2]*W,t[1]/t[2]*W],D=(t,e)=>l(t,e),G=(t,e)=>i(t,[[Math.cos(e),0,Math.sin(e)],[0,1,0],[-Math.sin(e),0,Math.cos(e)]]),Y=t=>{const e=t[0],n=t[1],s=t[2],o=f(n,e),c=f(s,e);return h([o[1]*c[2]-o[2]*c[1],o[2]*c[0]-o[0]*c[2],o[0]*c[1]-o[1]*c[0]])},K=(t,e,n)=>{const s=[],o=[],c=e,g=e;for(let v=0;v<=c;v++){const _=v*Math.PI/c,d=Math.sin(_),x=Math.cos(_);for(let w=0;w<=g;w++){const p=w*2*Math.PI/g,S=Math.sin(p),$=Math.cos(p)*d,j=x,tt=S*d;s.push([t*$,t*j,t*tt])}}for(let v=0;v<c;v++)for(let _=0;_<g;_++){const d=v*(g+1)+_,x=d+g+1,w=s[d],p=s[d+1],S=s[x],N=s[x+1],$=Y([w,p,S]),j=Y([p,N,S]);o.push([w,p,S,$,n],[p,N,S,j,n])}return o},z=t=>{const[e,n,s]=t;return(e[2]+n[2]+s[2])/3},U=t=>{const[e,n,s]=t;return[(e[0]+n[0]+s[0])/3,(e[1]+n[1]+s[1])/3,(e[2]+n[2]+s[2])/3]},X=t=>{const[e,n,s]=t;return e[2]<0||n[2]<0||s[2]<0},Z=t=>t**16,O=t=>{const e=performance.now()/1e3;m.map((n,s)=>{const o=s/2>>0,[,,,c]=n,[g,v,_]=n.slice(0,3).map(d=>D(G(d,e*.5),l([0,0,30],G(y(c,Math.sin(e+o/50)),e*.5))));return[g,v,_,c]}).sort((n,s)=>z(s)-z(n)).filter(n=>!X(n)).forEach((n,s)=>{const[o,c,g,v,_]=n,d=r(o),x=r(c),w=r(g);t.beginPath(),t.moveTo(d[0],d[1]),t.lineTo(x[0],x[1]),t.lineTo(w[0],w[1]),t.closePath(),h(U(n));const p=Z(Math.acos(P(G(v,e*.5+Math.PI),h(b)))/Math.PI);p<.001||(t.fillStyle=`rgba(0, 0, 0, ${p})`,t.strokeStyle=`rgba(0, 0, 0, ${p*.125})`,t.fill(),t.stroke())})};m.push(...K(10,20));let F=!1;nt(()=>{const t=a.getContext("2d");t.translate(a.width/2,a.height/2),window.addEventListener("mousemove",n=>{let{clientX:s,clientY:o}=n;s-=t.canvas.parentNode.offsetLeft+t.canvas.offsetWidth/2,o-=t.canvas.parentNode.offsetTop+t.canvas.offsetHeight/2,o+=window.scrollY,console.log(s,o),b[0]=s,b[1]=-o});const e=()=>{F||(t.fillStyle="black",t.clearRect(-a.width/2,-a.height/2,a.width,a.height),O(t),requestAnimationFrame(e))};window.innerWidth<=820||e()}),st(()=>{F=!0});function Q(t){ot[t?"unshift":"push"](()=>{a=t,E(0,a)})}return[a,Q]}class vt extends at{constructor(u){super(),it(this,u,rt,ct,et,{})}}export{vt as component};
