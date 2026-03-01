import{al as f,e4 as i,e5 as a,r as c}from"./index-CjQERz5w.js";const y=({enabled:s})=>{const t=f(),o=i(),n=a(e=>e.setOffset),r=a(e=>e.getOffset),l=c.useMemo(()=>{if(o==="POP")return r(t.key)},[r,t.key,o]);return{handleOnScrollEnd:c.useCallback(e=>{s&&n(t.key,e)},[s,t.key,n]),scrollOffset:l}};export{y as u};
//# sourceMappingURL=use-item-list-scroll-persist-DArLyc8t.js.map
