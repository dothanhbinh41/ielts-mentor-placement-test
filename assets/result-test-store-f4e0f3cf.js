import{i as n,j as o}from"./index-0c762828.js";const i="test-input/get-point",T=n({id:"resultTest",state:()=>({resultTests:[]}),getters:{},actions:{GET_POINT(e){return new Promise((s,r)=>{o.query(`/${i}/${e.id}`).then(t=>{s(t)}).catch(t=>{r(t)})})}}}),c=T();export{c as r};
