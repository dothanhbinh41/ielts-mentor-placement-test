import{u as a}from"./user-store-afe50a40.js";import{r as i}from"./result-test-store-4df63ebb.js";import{_ as l,E as c,$ as p,o as T,c as _}from"./index-4724dfe2.js";import{C as d}from"./centerOption-3ef55ebc.js";const m={name:"SplashPage",components:{},setup(){return{userStore:a,resultTestStore:i}},async mounted(){const t=c.service({lock:!0,text:"Vui lòng đợi trong giây lát ...",background:"rgba(0, 0, 0, 0.7)"});await this.loadData().finally(()=>{t.close()})},methods:{getUserByToken(t){return a.getProfileByToken({token:t}).then(e=>e).catch(e=>"")},async getResult(t){return i.GET_POINT({id:t})},async getRemakeTest(t){return i.GET_REMAKE_TEST({test_input_schedule_id:t})},getStatusTestInputSchedule(t){return i.GET_STATUS_TEST_INPUT_SCHEDULE({token:t})},async loadData(){let t=this.userStore.getToken();if(!t){this.$router.push({path:"/login"});return}let e=await this.getUserByToken(t);if(!e){this.$router.push({path:"/login"});return}let n=-1;await this.getStatusTestInputSchedule(t).then(s=>{var r;n=(r=s==null?void 0:s.data)==null?void 0:r.data}),await this.getRemakeTest(e.id).then(s=>{var r,o;if((o=(r=s==null?void 0:s.data)==null?void 0:r.data)!=null&&o.is_remake&&n!=p){this.isChildTest?this.$router.push({path:"/information"}):this.$router.push({path:"/information"});return}return this.getResult(e.id).then(h=>{var u;if((u=h==null?void 0:h.data)!=null&&u.data){this.isChildTest?this.$router.push({path:"/result-child"}):this.$router.push({path:"/result"});return}this.isChildTest?this.$router.push({path:"/information-child"}):this.$router.push({path:"/information"})}).catch(()=>{this.isChildTest?this.$router.push({path:"/information-child"}):this.$router.push({path:"/information"})}).finally(()=>{})})}},computed:{isChildTest(){var e;return+((e=JSON.parse(localStorage.getItem("testSchedule")))==null?void 0:e.center_id)===d}}},g={class:"bg-white h-screen"};function f(t,e,n,s,r,o){return T(),_("div",g)}const y=l(m,[["render",f]]);export{y as default};
