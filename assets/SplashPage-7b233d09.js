import{u as i}from"./user-store-a8bf2cb9.js";import{r as a}from"./result-test-store-f669d60e.js";import{_ as u,E as c,o as h,c as l}from"./index-b0045dec.js";const p={name:"SplashPage",components:{},setup(){return{userStore:i,resultTestStore:a}},mounted(){this.loadData()},methods:{getUserByToken(t){return i.getProfileByToken({token:t}).then(o=>o).catch(o=>"")},async getResult(t){return a.GET_POINT({id:t})},async loadData(){const t=c.service({lock:!0,text:"Vui lòng đợi trong giây lát ...",background:"rgba(0, 0, 0, 0.7)"});let o=this.userStore.getToken();if(!o){t.close(),this.$router.push({path:"/login"});return}let r=await this.getUserByToken(o);if(t.close(),!r){this.$router.push({path:"/login"});return}this.getResult(r.id).then(e=>{var s,n;if(console.log((s=e==null?void 0:e.data)==null?void 0:s.data),(n=e==null?void 0:e.data)!=null&&n.data){this.$router.push({path:"/result"});return}this.$router.push({path:"/information"})}).catch(()=>{this.$router.push({path:"/information"})})}}},g={class:"bg-white h-screen"};function f(t,o,r,e,s,n){return h(),l("div",g)}const k=u(p,[["render",f]]);export{k as default};
