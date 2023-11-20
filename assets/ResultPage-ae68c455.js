import{u as S}from"./user-store-72c8b47a.js";import{r as b}from"./result-test-store-2e6f080a.js";import{u as O,x as L,N as A,y as M,z as k,A as P,B as C,D as $,G as D,I as G,J as B,_ as I,o as u,c as a,a as s,j as f,t as o,r as g,n as U,g as E,K as w,F as R,d as N,L as Y,f as H,e as V,p as F,l as Q}from"./index-d4bffb44.js";function W(t,e=null,n=null,r=null,l=[]){this.type=t,this.correctQuestions=e,this.totalQuestions=n,this.nameType=X(t),this.totalPointAuto=T(r),this.icon=K(t),l.length&&(this.dataComments=z(l),this.totalPoint=j(this.dataComments))}function K(t){return O.get(t)}function X(t){return L.get(t)}function T(t){let e=Math.floor(t),n=t-e;return e+Math.floor(n*2)/2}function j(t){return T((t==null?void 0:t.map(e=>parseInt(e.point)??0).reduce((e,n)=>e+n))/4)}function z(t){return t==null?void 0:t.map(e=>new q(e==null?void 0:e.key,e==null?void 0:e.point,e==null?void 0:e.comment))}function q(t,e,n){this.nameCriteria=J(t),this.autoComment=Z(t,e),this.comment=n,this.point=e}function J(t){return A.get(t)}function Z(t,e){if(t==null||t==null)return"";switch(t){case"fluency_and_coherence":return B[e];case"lexical_resource":return G[e];case"grammatical_range_accuracy":return D[e];case"pronunciation":return $[e];case"task_achievement_writing":return C[e];case"lexical_resource_writing":return P[e];case"grammatical_range_accuracy_writing":return k[e];case"coherence_cohesion_writing":return M[e]}}const tt={name:"OveralResult",props:{pointOverall:{type:Number,default(){return 0}},testIELTS:{type:Boolean,default(){return!1}}},computed:{pointLadder(){return this.testIELTS?"9.0":"10"}}},et={class:"result__content w-full shadow-lg rounded-[16px] mb-[32px]"},st={class:"w-full bg-test-bg-header-intro rounded-t-[16px] flex justify-between py-[11px] px-[16px]"},nt=s("div",{class:"flex items-center"},[s("div",{class:"rounded-32 bg-707070 w-[37px] h-[37px] flex justify-center items-center text-fdb913 bg-test-bg-icon-result"},[s("i",{class:"fa-sharp fa-solid fa-message text-[22px]"})]),s("h2",{class:"text-[18px] font-bold text-white ml-[10px] xl:text-[20px]"},"Overall")],-1),lt={class:"text-right text-test-while"},ot=s("br",null,null,-1),rt={class:"font-bold text-test-text-result"},it=s("div",{class:"pt-[16px] px-[16px] pb-[28px]"},null,-1);function ct(t,e,n,r,l,_){return u(),a("div",et,[s("div",st,[nt,s("h2",lt,[f("Số điểm "),ot,s("span",rt,o(n.pointOverall.toLocaleString("en-US",{minimumFractionDigits:1}))+" /"+o(_.pointLadder),1)])]),it])}const ut=I(tt,[["render",ct]]),at={name:"ResultDetail",props:{resultTest:{type:Object,default(){return{}}},testIELTS:{type:Boolean,default(){return!1}}},computed:{handleCheckType(){switch(this.result.type){case 0:return"listening";case 1:return"Speaking";case 2:return"Reading";case 3:return"Writing";case 4:return"Overall"}},handleCheckTypeIcon(){switch(this.result.type){case 0:return"fa-sharp fa-solid fa-volume-high";case 1:return"fa-sharp fa-solid fa-message";case 2:return"fa-solid fa-book";case 3:return"fa-solid fa-pen";case 4:return"fa fa-envelope "}},totalPointTest(){var t,e,n,r;return this.testIELTS?((t=this.resultTest)==null?void 0:t.totalPoint)??((e=this.resultTest)==null?void 0:e.totalPointAuto):T(((n=this.resultTest)==null?void 0:n.totalPoint)??((r=this.resultTest)==null?void 0:r.totalPointAuto)*10/9)},pointLadder(){return this.testIELTS?"9.0":"10"}}},_t={class:"result__content w-full shadow-lg rounded-[16px] mb-[32px]"},ht={class:"w-full bg-test-bg-header-intro rounded-t-[16px] flex justify-between py-[11px] px-[16px]"},pt={class:"flex items-center"},dt={class:"rounded-32 bg-707070 w-[37px] h-[37px] flex justify-center items-center text-fdb913 bg-test-bg-icon-result"},xt={class:"text-[18px] font-bold text-white ml-[10px] xl:text-[20px]"},ft={class:"text-right text-test-while"},gt=s("br",null,null,-1),Tt={class:"font-bold text-test-text-result"},mt={class:"pt-[16px] px-[16px] pb-[28px]"},Et=s("h3",null,"Nhận xét:",-1),It={key:0,class:"mb-0"},vt={key:1},yt=s("p",{class:"mb-0"},"Học viên đọc phần nhận xét chi tiết để hiểu rõ những tiêu chí của kĩ năng này",-1),St={class:"text-center mt-2"},bt={class:"demo-collapse"},wt={style:{"font-weight":"bold"}},Rt={style:{"white-space":"pre-line"}},Nt=s("h4",null,"Chi tiết :",-1),Ot={style:{"white-space":"pre-line"}},Lt=s("hr",null,null,-1);function At(t,e,n,r,l,_){var h,p,d,x;const i=g("el-collapse-item"),c=g("el-collapse");return u(),a("div",_t,[s("div",ht,[s("div",pt,[s("div",dt,[s("i",{class:U([(h=n.resultTest)==null?void 0:h.icon,"fa-sharp fa-solid fa-volume-high text-[22px]"])},null,2)]),s("h2",xt,o((p=n.resultTest)==null?void 0:p.nameType),1)]),s("h2",ft,[f("Số điểm "),gt,s("span",Tt,o((((d=n.resultTest)==null?void 0:d.totalPoint)??((x=n.resultTest)==null?void 0:x.totalPointAuto)).toLocaleString("en-US",{minimumFractionDigits:1}))+" /"+o(_.pointLadder),1)])]),s("div",mt,[Et,n.resultTest.totalQuestions?(u(),a("p",It,"Học viên đúng "+o(n.resultTest.correctQuestions)+"/"+o(n.resultTest.totalQuestions)+" câu trong kỹ năng này",1)):(u(),a("div",vt,[yt,s("div",St,[s("div",bt,[E(c,null,{default:w(()=>[E(i,{title:"Xem Thêm",name:"1",class:"text-[15px]"},{default:w(()=>[(u(!0),a(R,null,N(n.resultTest.dataComments,(m,y)=>(u(),a("div",{key:y,class:"mb-5 text-left text-[15px]"},[s("h4",wt,"Tiêu chí "+o(y+1)+": "+o(m.nameCriteria),1),s("p",Rt,o(m.autoComment),1),Nt,s("p",Ot,o(m.comment),1),Lt]))),128))]),_:1})]),_:1})])])]))])])}const Mt=I(at,[["render",At]]);const kt={name:"ResultPage",components:{OveralResult:ut,ResultDetail:Mt},setup(){return{userStore:S,resultTestStore:b}},created(){},mounted(){this.getInformation(),this.getPoint()},data(){return{testSchedule:{},resultTests:[],testIELTS:!1,suggestedCourse:null}},methods:{getInformation(){this.testSchedule=S.getTestSchedule()},getPoint(){b.GET_POINT({id:this.testSchedule.id}).then(t=>{var e,n,r;if(!t.data.error){this.suggestedCourse=(n=(e=t==null?void 0:t.data)==null?void 0:e.data)==null?void 0:n.course_suggest;let l=["speaking","writing","listening","vocabulary","reading"];((r=t.data.data)==null?void 0:r.reading)!=null?(l=["speaking","writing","listening","reading"],this.testIELTS=!0):l=["speaking","vocabulary"];let _=l.map(i=>{var h,p,d,x;if(!((p=(h=t==null?void 0:t.data)==null?void 0:h.data)!=null&&p.hasOwnProperty(i))||((d=t==null?void 0:t.data)==null?void 0:d.data[i])==null)return null;let c=(x=t==null?void 0:t.data)==null?void 0:x.data[i];return new W(Y.get(i),c==null?void 0:c.right_answers,c.total_correct,c.avg_point,c)}).filter(i=>i!=null);this.resultTests=_,this.testIELTS&&this.resultTests.length<4&&this.$router.push({path:"/information"}),!this.testIELTS&&this.resultTests.length<2&&this.$router.push({path:"/information"})}})}},computed:{pointOverall(){return T(this.resultTests.map(t=>(t==null?void 0:t.totalPoint)??(t==null?void 0:t.totalPointAuto)??0).reduce((t,e)=>t+e)/this.resultTests.length)}}},v=t=>(F("data-v-37241c15"),t=t(),Q(),t),Pt={class:"result bg-white pt-[32px] px-[36px] rounded-t-[32px] pb-[48px] lg:rounded-32 lg:h-auto"},Ct={class:"flex flex-col lg:flex-row"},$t=v(()=>s("h3",{class:"text-[17px] text-test-text-page-result opacity-100 font-bold mr-2"},"Xin chào bạn",-1)),Dt={class:"text-[17px] text-test-text-page-result opacity-100 font-bold"},Gt=v(()=>s("p",null,[f("Chúc mừng bạn đã hoàn thành tất cả bài test! "),s("br"),f(" IELTS Mentor xin gửi kết quả kiểm tra đầu vào của bạn như sau:")],-1)),Bt={class:"result__tests mt-[22px]"},Ut={key:0},Yt=v(()=>s("h3",{class:"mb-5"},"Khóa học gợi ý ",-1)),Ht={class:"h-[73px] w-full flex items-center shadow-md border border-gray-100 rounded-[16px] py-[24px] pl-[28px]"};function Vt(t,e,n,r,l,_){const i=g("ResultDetail"),c=g("OveralResult");return u(),a("div",Pt,[s("div",Ct,[$t,s("h3",Dt,o(l.testSchedule.name)+" - "+o(l.testSchedule.phone),1)]),Gt,s("div",Bt,[(u(!0),a(R,null,N(l.resultTests,(h,p)=>(u(),V(i,{key:p,resultTest:h,testIELTS:l.testIELTS},null,8,["resultTest","testIELTS"]))),128)),E(c,{pointOverall:_.pointOverall,testIELTS:l.testIELTS},null,8,["pointOverall","testIELTS"])]),l.suggestedCourse?(u(),a("div",Ut,[Yt,s("div",Ht,[s("h3",null,o(l.suggestedCourse),1)])])):H("",!0)])}const Kt=I(kt,[["render",Vt],["__scopeId","data-v-37241c15"]]);export{Kt as default};
