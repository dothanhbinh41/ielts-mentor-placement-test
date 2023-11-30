import{u as y}from"./user-store-5838b107.js";import{r as S}from"./result-test-store-9ad5e92b.js";import{u as N,x as L,N as M,y as A,z as k,A as P,B as C,D as $,G as D,I as G,J as B,_ as E,o as u,c as _,a as s,j as g,t as l,r as T,n as U,g as m,K as w,F as R,d as O,L as Y,f as F,e as H,p as V,l as Q}from"./index-784a1019.js";function W(t,e=null,n=null,i=null,o=[]){this.type=t,this.correctQuestions=e,this.totalQuestions=n,this.nameType=X(t),this.totalPointAuto=v(i),this.icon=K(t),o.length&&(this.dataComments=q(o),this.totalPoint=z(this.dataComments))}function K(t){return N.get(t)}function X(t){return L.get(t)}function v(t){let e=Math.floor(t),n=t-e;return e+Math.floor(n*2)/2}function j(t){let e=Math.floor(t),n=t-e;return e+Math.round(n*2)/2}function z(t){return v((t==null?void 0:t.map(e=>parseFloat(e.point)??0).reduce((e,n)=>e+n))/4)}function q(t){return t==null?void 0:t.map(e=>new J(e==null?void 0:e.key,e==null?void 0:e.point,e==null?void 0:e.comment))}function J(t,e,n){this.nameCriteria=Z(t),this.autoComment=tt(t,e),this.comment=n,this.point=e}function Z(t){return M.get(t)}function tt(t,e){if(t==null||t==null)return"";switch(t){case"fluency_and_coherence":return B[e];case"lexical_resource":return G[e];case"grammatical_range_accuracy":return D[e];case"pronunciation":return $[e];case"task_achievement_writing":return C[e];case"lexical_resource_writing":return P[e];case"grammatical_range_accuracy_writing":return k[e];case"coherence_cohesion_writing":return A[e]}}const et={name:"OveralResult",props:{pointOverall:{type:Number,default(){return 0}},testIELTS:{type:Boolean,default(){return!1}}},computed:{pointLadder(){return this.testIELTS?"9.0":"10"}}},st={class:"result__content w-full shadow-lg rounded-[16px] mb-[32px]"},nt={class:"w-full bg-test-bg-header-intro rounded-t-[16px] flex justify-between py-[11px] px-[16px]"},ot=s("div",{class:"flex items-center"},[s("div",{class:"rounded-32 bg-707070 w-[37px] h-[37px] flex justify-center items-center text-fdb913 bg-test-bg-icon-result"},[s("i",{class:"fa-sharp fa-solid fa-message text-[22px]"})]),s("h2",{class:"text-[18px] font-bold text-white ml-[10px] xl:text-[20px]"},"Overall")],-1),lt={class:"text-right text-test-while"},rt=s("br",null,null,-1),it={class:"font-bold text-test-text-result"},ct=s("div",{class:"pt-[16px] px-[16px] pb-[28px]"},null,-1);function ut(t,e,n,i,o,a){return u(),_("div",st,[s("div",nt,[ot,s("h2",lt,[g("Số điểm "),rt,s("span",it,l(n.pointOverall.toLocaleString("en-US",{minimumFractionDigits:1}))+" /"+l(a.pointLadder),1)])]),ct])}const at=E(et,[["render",ut]]),_t={name:"ResultDetail",props:{resultTest:{type:Object,default(){return{}}},testIELTS:{type:Boolean,default(){return!1}}},computed:{handleCheckType(){switch(this.result.type){case 0:return"listening";case 1:return"Speaking";case 2:return"Reading";case 3:return"Writing";case 4:return"Overall"}},handleCheckTypeIcon(){switch(this.result.type){case 0:return"fa-sharp fa-solid fa-volume-high";case 1:return"fa-sharp fa-solid fa-message";case 2:return"fa-solid fa-book";case 3:return"fa-solid fa-pen";case 4:return"fa fa-envelope "}},totalPointTest(){var t,e,n,i;return this.testIELTS?((t=this.resultTest)==null?void 0:t.totalPoint)??((e=this.resultTest)==null?void 0:e.totalPointAuto):v(((n=this.resultTest)==null?void 0:n.totalPoint)??((i=this.resultTest)==null?void 0:i.totalPointAuto)*10/9)},pointLadder(){return this.testIELTS?"9.0":"10"}}},ht={class:"result__content w-full shadow-lg rounded-[16px] mb-[32px]"},pt={class:"w-full bg-test-bg-header-intro rounded-t-[16px] flex justify-between py-[11px] px-[16px]"},dt={class:"flex items-center"},ft={class:"rounded-32 bg-707070 w-[37px] h-[37px] flex justify-center items-center text-fdb913 bg-test-bg-icon-result"},xt={class:"text-[18px] font-bold text-white ml-[10px] xl:text-[20px]"},gt={class:"text-right text-test-while"},Tt=s("br",null,null,-1),mt={class:"font-bold text-test-text-result"},Et={class:"pt-[16px] px-[16px] pb-[28px]"},vt=s("h3",null,"Nhận xét:",-1),It={key:0,class:"mb-0"},bt={key:1},yt=s("p",{class:"mb-0"},"Học viên đọc phần nhận xét chi tiết để hiểu rõ những tiêu chí của kĩ năng này",-1),St={class:"text-center mt-2"},wt={class:"demo-collapse"},Rt={style:{"font-weight":"bold"}},Ot={style:{"white-space":"pre-line"}},Nt=s("h4",null,"Chi tiết :",-1),Lt={style:{"white-space":"pre-line"}},Mt=s("hr",null,null,-1);function At(t,e,n,i,o,a){var r,h,f,x;const d=T("el-collapse-item"),c=T("el-collapse");return u(),_("div",ht,[s("div",pt,[s("div",dt,[s("div",ft,[s("i",{class:U([(r=n.resultTest)==null?void 0:r.icon,"fa-sharp fa-solid fa-volume-high text-[22px]"])},null,2)]),s("h2",xt,l((h=n.resultTest)==null?void 0:h.nameType),1)]),s("h2",gt,[g("Số điểm "),Tt,s("span",mt,l((((f=n.resultTest)==null?void 0:f.totalPoint)??((x=n.resultTest)==null?void 0:x.totalPointAuto)).toLocaleString("en-US",{minimumFractionDigits:1}))+" /"+l(a.pointLadder),1)])]),s("div",Et,[vt,n.resultTest.totalQuestions?(u(),_("p",It,"Học viên đúng "+l(n.resultTest.correctQuestions)+"/"+l(n.resultTest.totalQuestions)+" câu trong kỹ năng này",1)):(u(),_("div",bt,[yt,s("div",St,[s("div",wt,[m(c,null,{default:w(()=>[m(d,{title:"Xem Thêm",name:"1",class:"text-[15px]"},{default:w(()=>[(u(!0),_(R,null,O(n.resultTest.dataComments,(p,b)=>(u(),_("div",{key:b,class:"mb-5 text-left text-[15px]"},[s("h4",Rt,"Tiêu chí "+l(b+1)+": "+l(p.nameCriteria),1),s("p",Ot,l(p.autoComment),1),Nt,s("p",Lt,l(p.comment),1),Mt]))),128))]),_:1})]),_:1})])])]))])])}const kt=E(_t,[["render",At]]);const Pt={name:"ResultPage",components:{OveralResult:at,ResultDetail:kt},setup(){return{userStore:y,resultTestStore:S}},created(){},mounted(){this.getInformation(),this.getPoint()},data(){return{testSchedule:{},resultTests:[],testIELTS:!1,suggestedCourse:null}},methods:{getInformation(){this.testSchedule=y.getTestSchedule()},getPoint(){S.GET_POINT({id:this.testSchedule.id}).then(t=>{var e,n,i,o;if(!t.data.error){this.suggestedCourse=(n=(e=t==null?void 0:t.data)==null?void 0:e.data)==null?void 0:n.course_suggest;let a=["speaking","writing","listening","vocabulary","reading"];((o=(i=t==null?void 0:t.data.data)==null?void 0:i.vocabulary)==null?void 0:o.right_answers)>19?(a=["speaking","writing","listening","reading"],this.testIELTS=!0):a=["speaking","vocabulary"];let d=a.map(c=>{var h,f,x,p;if(!((f=(h=t==null?void 0:t.data)==null?void 0:h.data)!=null&&f.hasOwnProperty(c))||((x=t==null?void 0:t.data)==null?void 0:x.data[c])==null)return null;let r=(p=t==null?void 0:t.data)==null?void 0:p.data[c];return new W(Y.get(c),r==null?void 0:r.right_answers,r.total_correct,r.avg_point,r)}).filter(c=>c!=null);this.resultTests=d,this.testIELTS&&this.resultTests.length<4&&this.$router.push({path:"/information"}),!this.testIELTS&&this.resultTests.length<2&&this.$router.push({path:"/information"})}})}},computed:{pointOverall(){return j(this.resultTests.map(t=>(t==null?void 0:t.totalPoint)??(t==null?void 0:t.totalPointAuto)??0).reduce((t,e)=>t+e)/this.resultTests.length)}}},I=t=>(V("data-v-29cdfb3c"),t=t(),Q(),t),Ct={class:"result bg-white pt-[32px] px-[36px] rounded-t-[32px] pb-[48px] lg:rounded-32 lg:h-auto"},$t={class:"flex flex-col lg:flex-row"},Dt=I(()=>s("h3",{class:"text-[17px] text-test-text-page-result opacity-100 font-bold mr-2"},"Xin chào bạn",-1)),Gt={class:"text-[17px] text-test-text-page-result opacity-100 font-bold"},Bt=I(()=>s("p",null,[g("Chúc mừng bạn đã hoàn thành tất cả bài test! "),s("br"),g(" IELTS Mentor xin gửi kết quả kiểm tra đầu vào của bạn như sau:")],-1)),Ut={class:"result__tests mt-[22px]"},Yt={key:0},Ft=I(()=>s("h3",{class:"mb-5"},"Khóa học gợi ý ",-1)),Ht={class:"h-[73px] w-full flex items-center shadow-md border border-gray-100 rounded-[16px] py-[24px] pl-[28px]"};function Vt(t,e,n,i,o,a){const d=T("ResultDetail"),c=T("OveralResult");return u(),_("div",Ct,[s("div",$t,[Dt,s("h3",Gt,l(o.testSchedule.name)+" - "+l(o.testSchedule.phone),1)]),Bt,s("div",Ut,[(u(!0),_(R,null,O(o.resultTests,(r,h)=>(u(),H(d,{key:h,resultTest:r,testIELTS:o.testIELTS},null,8,["resultTest","testIELTS"]))),128)),m(c,{pointOverall:a.pointOverall,testIELTS:o.testIELTS},null,8,["pointOverall","testIELTS"])]),o.suggestedCourse?(u(),_("div",Yt,[Ft,s("div",Ht,[s("h3",null,l(o.suggestedCourse),1)])])):F("",!0)])}const Xt=E(Pt,[["render",Vt],["__scopeId","data-v-29cdfb3c"]]);export{Xt as default};
