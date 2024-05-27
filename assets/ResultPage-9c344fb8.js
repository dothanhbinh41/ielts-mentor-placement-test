import{u as k}from"./user-store-0bb45765.js";import{r as I}from"./result-test-store-02870f28.js";import{t as O,R}from"./test-result-model-47ea41c5.js";import{_ as S,o,c as r,a as t,j as T,t as n,r as v,n as $,g as L,z as b,e as y,F as E,d as C,f as P,y as B,p as D,l as N}from"./index-4229a4d7.js";const A={name:"OveralResult",props:{pointOverall:{type:Number,default(){return 0}},testIELTS:{type:Boolean,default(){return!1}}},computed:{pointLadder(){return this.testIELTS?"9.0":"10"}}},F={class:"result__content w-full shadow-lg rounded-[16px] mb-[32px]"},V={class:"w-full bg-test-bg-header-intro rounded-t-[16px] flex justify-between py-[11px] px-[16px]"},j=t("div",{class:"flex items-center"},[t("div",{class:"rounded-32 bg-707070 w-[37px] h-[37px] flex justify-center items-center text-fdb913 bg-test-bg-icon-result"},[t("i",{class:"fa-sharp fa-solid fa-message text-[22px]"})]),t("h2",{class:"text-[18px] font-bold text-white ml-[10px] xl:text-[20px]"},"Overall")],-1),M={class:"text-right text-test-while"},Q=t("br",null,null,-1),X={class:"font-bold text-test-text-result"},Y=t("div",{class:"pt-[16px] px-[16px] pb-[28px]"},null,-1);function z(e,u,s,h,l,d){return o(),r("div",F,[t("div",V,[j,t("h2",M,[T("Số điểm "),Q,t("span",X,n(s.pointOverall.toLocaleString("en-US",{minimumFractionDigits:1}))+" /"+n(d.pointLadder),1)])]),Y])}const H=S(A,[["render",z]]),K={name:"ResultDetail",props:{resultTest:{type:Object,default(){return{}}},testIELTS:{type:Boolean,default(){return!1}}},computed:{handleCheckType(){switch(this.result.type){case 0:return"listening";case 1:return"Speaking";case 2:return"Reading";case 3:return"Writing";case 4:return"Overall"}},handleCheckTypeIcon(){switch(this.result.type){case 0:return"fa-sharp fa-solid fa-volume-high";case 1:return"fa-sharp fa-solid fa-message";case 2:return"fa-solid fa-book";case 3:return"fa-solid fa-pen";case 4:return"fa fa-envelope "}},totalPointTest(){var e,u,s,h;return this.testIELTS?((e=this.resultTest)==null?void 0:e.totalPoint)??((u=this.resultTest)==null?void 0:u.totalPointAuto):O(((s=this.resultTest)==null?void 0:s.totalPoint)??((h=this.resultTest)==null?void 0:h.totalPointAuto)*10/9)},pointLadder(){return this.testIELTS?"9.0":"10"},check0And1Point(){return[0,1].includes(+this.resultTest.dataComments[0].point)}}},U={class:"result__content w-full shadow-lg rounded-[16px] mb-[32px]"},q={class:"w-full bg-test-bg-header-intro rounded-t-[16px] flex justify-between py-[11px] px-[16px]"},G={class:"flex items-center"},W={class:"rounded-32 bg-707070 w-[37px] h-[37px] flex justify-center items-center text-fdb913 bg-test-bg-icon-result"},J={class:"text-[18px] font-bold text-white ml-[10px] xl:text-[20px]"},Z={class:"text-right text-test-while"},tt=t("br",null,null,-1),et={class:"font-bold text-test-text-result"},st={class:"pt-[16px] px-[16px] pb-[28px]"},nt=t("h3",null,"Nhận xét:",-1),lt={key:0,class:"mb-0"},ot={key:1},it=t("p",{class:"mb-0"},"Học viên đọc phần nhận xét chi tiết để hiểu rõ những tiêu chí của kĩ năng này",-1),rt={class:"text-center mt-2"},ct={class:"demo-collapse"},at={style:{"font-weight":"bold"}},ut={style:{"white-space":"pre-line"}},ht=t("h4",null,"Chi tiết :",-1),dt={style:{"white-space":"pre-line"}},_t=t("hr",null,null,-1),pt={class:"mb-5 text-left text-[15px]"},xt={style:{"white-space":"pre-line"}},mt={key:0},ft={style:{"white-space":"pre-line"}},gt=t("hr",null,null,-1);function Tt(e,u,s,h,l,d){var m,i,c,f;const p=v("el-collapse-item"),x=v("el-collapse");return o(),r("div",U,[t("div",q,[t("div",G,[t("div",W,[t("i",{class:$([(m=s.resultTest)==null?void 0:m.icon,"fa-sharp fa-solid fa-volume-high text-[22px]"])},null,2)]),t("h2",J,n((i=s.resultTest)==null?void 0:i.nameType),1)]),t("h2",Z,[T("Số điểm "),tt,t("span",et,n((((c=s.resultTest)==null?void 0:c.totalPoint)??((f=s.resultTest)==null?void 0:f.totalPointAuto)).toLocaleString("en-US",{minimumFractionDigits:1}))+" /"+n(d.pointLadder),1)])]),t("div",st,[nt,s.resultTest.totalQuestions?(o(),r("p",lt,"Học viên đúng "+n(s.resultTest.correctQuestions)+"/"+n(s.resultTest.totalQuestions)+" câu trong kỹ năng này",1)):(o(),r("div",ot,[it,t("div",rt,[t("div",ct,[L(x,null,{default:b(()=>[d.check0And1Point?(o(),y(p,{key:1,title:"Xem Thêm",name:"1",class:"text-[15px]"},{default:b(()=>{var a,_,g;return[t("div",pt,[t("p",xt,n((a=s.resultTest)==null?void 0:a.dataComments[0].autoComment),1),(_=s.resultTest)!=null&&_.dataComments[0].comment?(o(),r("h4",mt,"Chi tiết :")):P("",!0),t("p",ft,n((g=s.resultTest)==null?void 0:g.dataComments[0].comment),1),gt])]}),_:1})):(o(),y(p,{key:0,title:"Xem Thêm",name:"1",class:"text-[15px]"},{default:b(()=>[(o(!0),r(E,null,C(s.resultTest.dataComments,(a,_)=>(o(),r("div",{key:_,class:"mb-5 text-left text-[15px]"},[t("h4",at,"Tiêu chí "+n(_+1)+": "+n(a.nameCriteria),1),t("p",ut,n(a.autoComment),1),ht,t("p",dt,n(a.comment),1),_t]))),128))]),_:1}))]),_:1})])])]))])])}const vt=S(K,[["render",Tt]]);const bt={name:"ResultPage",components:{OveralResult:H,ResultDetail:vt},setup(){return{userStore:k,resultTestStore:I}},created(){},mounted(){this.getInformation(),this.getPoint()},data(){return{testSchedule:{},resultTests:[],testIELTS:!1,suggestedCourse:null,pointOverall:null}},methods:{getInformation(){this.testSchedule=k.getTestSchedule()},getPoint(){I.GET_POINT({id:this.testSchedule.id}).then(e=>{var u,s,h,l,d,p;if(!e.data.error){this.suggestedCourse=(s=(u=e==null?void 0:e.data)==null?void 0:u.data)==null?void 0:s.course_suggest;let x=["speaking","writing","listening","vocabulary","reading"];((l=(h=e==null?void 0:e.data.data)==null?void 0:h.vocabulary)==null?void 0:l.right_answers)>19?(x=["speaking","writing","listening","reading"],this.testIELTS=!0):x=["speaking","vocabulary"];let m=x.map(i=>{var f,a,_,g;if(!((a=(f=e==null?void 0:e.data)==null?void 0:f.data)!=null&&a.hasOwnProperty(i))||((_=e==null?void 0:e.data)==null?void 0:_.data[i])==null)return null;let c=(g=e==null?void 0:e.data)==null?void 0:g.data[i];return new R(B.get(i),c==null?void 0:c.right_answers,c.total_correct,c.avg_point,c)}).filter(i=>i!=null);this.resultTests=m,this.testIELTS&&this.resultTests.length<4&&this.$router.push({path:"/information"}),!this.testIELTS&&this.resultTests.length<2&&this.$router.push({path:"/information"}),this.pointOverall=(p=(d=e==null?void 0:e.data)==null?void 0:d.data)==null?void 0:p.overall}})}},computed:{}},w=e=>(D("data-v-1007ffca"),e=e(),N(),e),yt={class:"result bg-white pt-[32px] px-[36px] rounded-t-[32px] pb-[48px] lg:rounded-32 lg:h-auto"},St={class:"flex flex-col lg:flex-row"},wt=w(()=>t("h3",{class:"text-[17px] text-test-text-page-result opacity-100 font-bold mr-2"},"Xin chào bạn",-1)),kt={class:"text-[17px] text-test-text-page-result opacity-100 font-bold"},It=w(()=>t("p",null,[T("Chúc mừng bạn đã hoàn thành tất cả bài test! "),t("br"),T(" IELTS Mentor xin gửi kết quả kiểm tra đầu vào của bạn như sau: ")],-1)),Lt={class:"result__tests mt-[22px]"},Et={key:0},Ct=w(()=>t("h3",{class:"mb-5"},"Khóa học gợi ý ",-1)),Pt={class:"h-[73px] w-full flex items-center shadow-md border border-gray-100 rounded-[16px] py-[24px] pl-[28px]"};function Ot(e,u,s,h,l,d){const p=v("ResultDetail"),x=v("OveralResult");return o(),r("div",yt,[t("div",St,[wt,t("h3",kt,n(l.testSchedule.name)+" - "+n(l.testSchedule.phone),1)]),It,t("div",Lt,[(o(!0),r(E,null,C(l.resultTests,(m,i)=>(o(),y(p,{key:i,resultTest:m,testIELTS:l.testIELTS},null,8,["resultTest","testIELTS"]))),128)),L(x,{pointOverall:l.pointOverall,testIELTS:l.testIELTS},null,8,["pointOverall","testIELTS"])]),l.suggestedCourse?(o(),r("div",Et,[Ct,t("div",Pt,[t("h3",null,n(l.suggestedCourse),1)])])):P("",!0)])}const Nt=S(bt,[["render",Ot],["__scopeId","data-v-1007ffca"]]);export{Nt as default};
