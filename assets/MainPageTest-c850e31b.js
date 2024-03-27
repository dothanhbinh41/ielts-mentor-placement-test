import{_ as p,o as l,c as d,a as n,t as u,w as D,v as X,b as R,r as c,F as f,d as b,e as g,f as m,g as T,n as E,h as L,i as I,E as k,j as Q,T as K,m as J}from"./index-e3a9eb2b.js";import{h as A}from"./moment-fbc5633a.js";import{u as _}from"./user-store-d9d18728.js";const z={name:"AnswerInputRadio",data(){return{}},props:{data:{type:Object,default:{}},id:{type:String},name:{type:String},userAnswer:{type:String}},computed:{answer(){var e;return((e=this.data)==null?void 0:e.content)??""}},methods:{change(){this.$emit("selectAnswer",this.answer)},checkAnswerSelected(){return this.userAnswer==this.answer}}},Z=["checked","id","name","value"],ee=["for"];function te(e,s,t,o,a,i){return l(),d("div",null,[n("input",{checked:i.checkAnswerSelected(),type:"radio",id:t.id,name:t.name,onChange:s[0]||(s[0]=(...r)=>i.change&&i.change(...r)),value:i.answer},null,40,Z),n("label",{for:t.id,class:"xl:text-[16px] text-test-color-text ml-[15px] xl:text-4 lg:text-[14px]"},u(this.answer),9,ee)])}const se=p(z,[["render",te]]),ne={name:"AnswerInputCheckBox",data(){return{selected:!1,disabled:!1}},props:{data:{type:Object,default:{}},id:"",name:"",userAnswers:{type:Object,default:[]}},mounted(){this.checkAnswerSelected()},watch:{userAnswers(){this.disabled=!this.selected&&this.userAnswers.length>=2}},computed:{answer(){var e;return((e=this.data)==null?void 0:e.content)??""}},methods:{change(){this.$emit("selectAnswer",this.answer,this.selected)},checkAnswerSelected(){this.selected=this.userAnswers.includes(this.answer)}}},ie=["id","name","disabled"],ae=["for"];function re(e,s,t,o,a,i){return l(),d("div",null,[D(n("input",{type:"checkbox",class:"pointer",id:t.id,name:t.name,onChange:s[0]||(s[0]=(...r)=>i.change&&i.change(...r)),"onUpdate:modelValue":s[1]||(s[1]=r=>a.selected=r),disabled:a.disabled},null,40,ie),[[X,a.selected]]),n("label",{for:t.id,class:"xl:text-[16px] text-test-color-text ml-[15px] xl:text-4 lg:text-[14px] pointer"},u(this.answer),9,ae)])}const le=p(ne,[["render",re]]);const oe={name:"AnswerInputText",data(){return{answer:""}},props:{userAnswer:{type:String}},mounted(){this.answer=this.userAnswer},methods:{change(){this.$emit("changeInputAnswer",this.answer.trim().replaceAll(" "," ").toLocaleLowerCase())}}};function de(e,s,t,o,a,i){return D((l(),d("input",{onInput:s[0]||(s[0]=(...r)=>i.change&&i.change(...r)),placeholder:"Enter your answer",class:"border-test-color-text border-b-[0.002px] pt-[20px] pl-5 w-[65%] h-[48px] focus:outline-none focus:border-[#3399FF] transition duration-300 bg-white","onUpdate:modelValue":s[1]||(s[1]=r=>a.answer=r)},null,544)),[[R,a.answer]])}const ue=p(oe,[["render",de],["__scopeId","data-v-0a4ebd40"]]),M=0,ce=1,he=2,N=0,$=2,B=3,xe=5,pe=4;var Y=(e=>(e[e.general=0]="general",e[e.speaking=1]="speaking",e[e.reading=2]="reading",e[e.writing=3]="writing",e[e.overall=4]="overall",e[e.listening=5]="listening",e))(Y||{});function me(e){if(e==null||e==null)return 5;switch(e){case 1:return 5;case 2:return 2;default:return 3}}const U=0,_e=1,ge=2,H=3;var O=(e=>(e[e.input=U]="input",e[e.checkbox=_e]="checkbox",e[e.radio=ge]="radio",e))(O||{});function G(e,s=null){var t;return{type:s??me(e.Skill),description:e.Description??"",script:e.Script,title:e.Title,groupQuestions:(t=e==null?void 0:e.GroupQuestions)==null?void 0:t.map(o=>fe(o))}}function fe(e){var s;return{description:e==null?void 0:e.Description,audio:(e==null?void 0:e.Audio)??"",title:(e==null?void 0:e.Title)??"",image:(e==null?void 0:e.Image)??"",id:e==null?void 0:e._id,questions:(s=e==null?void 0:e.Questions)==null?void 0:s.map(t=>we(t,e.Type))}}function we(e,s){var t;return{description:"",image:"",userAnswer:"",userAnswers:[],idQuestion:e._id,correctAnswer:e==null?void 0:e.Correct,correctAnswers:[],title:e==null?void 0:e.Body,answers:(t=e==null?void 0:e.Answers)==null?void 0:t.map(o=>Te(o)),is_answer:!1,type:be(s),order:e==null?void 0:e.Order}}function Te(e){return{content:e}}function be(e){switch(e){case 1:return U;case 2:return O.checkbox;case 4:return H;default:return O.radio}}const ye={name:"AnswerInputTextArea",data(){return{answer:""}},props:{userAnswer:{type:String}},mounted(){this.answer=this.userAnswer},methods:{change(){this.$emit("changeInputAnswer",this.answer.trim().replaceAll(" "," ").toLocaleLowerCase())}}};function Ae(e,s,t,o,a,i){return D((l(),d("textarea",{class:"w-full overflow-auto h-[347px] bg-[#F7F6F6] border-white rounded-[16px] p-4 xl:w-full xl:h-[617px] xl:p-[20px] xl:text-[16px] focus:outline-none","onUpdate:modelValue":s[0]||(s[0]=r=>a.answer=r),onInput:s[1]||(s[1]=(...r)=>i.change&&i.change(...r)),placeholder:"Nhập câu trả lời của bạn ở đây"},`\r
     `,544)),[[R,a.answer]])}const F=p(ye,[["render",Ae]]),ve={name:"questionTest",components:{AnswerInputTextArea:F,AnswerInputText:ue,AnswerInputCheckBox:le,AnswerInputRadio:se},data(){return{selectedAnswer:"",selectedAnswers:[],answer:"",QUESTION_TYPE_CHECKBOX:ce,QUESTION_TYPE_INPUT:M,QUESTION_TYPE_RADIO:he,QUESTION_TYPE_TEXT_AREA:H}},mounted(){this.question.type==M},props:{question:{type:Object,default(){return{answers:[],title:"",type:-1}}},indexQuestion:{type:Number,default:0},indexGroupQuestion:{type:Number,default:0}},methods:{generateAnswerId(e,s,t){return`${this.generateAnswerName(e,s)}-${t}`},generateAnswerName(e,s){return`${e}-${s}`},handleChangeSingleAnswer(e){this.question.userAnswer=e,this.question.answered=e!=""},handleChangeMultipleAnswers(e,s){this.changeMultipleSelectedAnswers(e,s),this.question.userAnswers=[...this.selectedAnswers],this.question.answered=this.selectedAnswers.length>0},changeMultipleSelectedAnswers(e,s){let t=this.selectedAnswers.findIndex(o=>o==s);if(!s){this.selectedAnswers.splice(t,1);return}t<0&&this.selectedAnswers.push(e)}}},Ee=["id"],Pe={class:"xl:text-[20px] text-test-color-question lg:text-[17px]"},Ie=["innerHTML"],Se={class:"flex flex-col mt-[20px] w-full"},ke={key:0},Ce={key:1},Ne={key:0},Qe={key:1};function Oe(e,s,t,o,a,i){const r=c("AnswerInputRadio"),h=c("AnswerInputCheckBox"),x=c("AnswerInputText"),w=c("AnswerInputTextArea");return l(),d("div",{class:"mt-5 h-fit",id:`${t.question.idQuestion}`},[n("h1",Pe,"Question "+u(t.question.order),1),n("h2",{class:"xl:text-[20px] text-[#4E4E4E] lg:text-[14px]",innerHTML:t.question.title},null,8,Ie),n("div",Se,[t.question.type==a.QUESTION_TYPE_RADIO?(l(),d("div",ke,[(l(!0),d(f,null,b(t.question.answers,(P,y)=>(l(),g(r,{data:P,id:i.generateAnswerId(t.indexGroupQuestion,t.indexQuestion,y),name:i.generateAnswerName(t.indexGroupQuestion,t.indexQuestion),onSelectAnswer:i.handleChangeSingleAnswer,key:y,userAnswer:t.question.userAnswer??""},null,8,["data","id","name","onSelectAnswer","userAnswer"]))),128))])):m("",!0),t.question.type==a.QUESTION_TYPE_CHECKBOX?(l(),d("div",Ce,[(l(!0),d(f,null,b(t.question.answers,(P,y)=>(l(),g(h,{data:P,id:i.generateAnswerId(t.indexGroupQuestion,t.indexQuestion,y),name:i.generateAnswerName(t.indexGroupQuestion,t.indexQuestion),onSelectAnswer:i.handleChangeMultipleAnswers,key:y,userAnswers:t.question.userAnswers??[]},null,8,["data","id","name","onSelectAnswer","userAnswers"]))),128))])):m("",!0)]),t.question.type==a.QUESTION_TYPE_INPUT?(l(),d("div",Ne,[T(x,{onChangeInputAnswer:i.handleChangeSingleAnswer,userAnswer:t.question.userAnswer??""},null,8,["onChangeInputAnswer","userAnswer"])])):m("",!0),t.question.type==a.QUESTION_TYPE_TEXT_AREA?(l(),d("div",Qe,[T(w,{onChangeInputAnswer:i.handleChangeSingleAnswer,userAnswer:t.question.userAnswer??""},null,8,["onChangeInputAnswer","userAnswer"])])):m("",!0)],8,Ee)}const De=p(ve,[["render",Oe]]),Me="/assets/CoAyCuaAnhAy-BaoAnh-9430793-a9911241.mp3",Ge={name:"audioTest",mounted(){this.initPlayer()},props:{id:{type:String},src:{type:String}},watch:{id(){var e;(e=this.vid)==null||e.load(),this.play=!1,this.currentTime="00:00"},src(){this.vid&&(this.vid.src=this.src)}},data(){return{play:!1,vid:"",currentTime:"00:00",duration:"00:00"}},methods:{async initPlayer(){this.vid=document.getElementById(this.id),this.vid.addEventListener("timeupdate",()=>this.onTimeUpdate()),this.vid.addEventListener("pause",()=>this.onStopped()),this.vid.addEventListener("error",()=>this.onStopped()),this.vid.addEventListener("ended",()=>this.onStopped()),this.vid.addEventListener("play",()=>this.onPlayed()),this.vid.addEventListener("loadedmetadata",()=>this.onDurationchange()),this.vid.src=this.src},onTimeUpdate(){var e;this.currentTime=A.utc((((e=this.vid)==null?void 0:e.currentTime)??0)*1e3).format("mm:ss")},onStopped(){this.play=!1},onPlayed(){this.play=!0},async onDurationchange(){var e,s;if(((e=this.vid)==null?void 0:e.duration)==1/0){await this.getDuration();return}this.duration=A().utcOffset(0).set({hour:0,minute:0,second:((s=this.vid)==null?void 0:s.duration)??0,millisecond:0}).format("mm:ss")},handlePlay(){if(this.play==!1){this.$emit("onAudioPlayed",this.id),this.vid.play();return}this.vid.pause()},async getDuration(){var e=new(window.AudioContext||window.webkitAudioContext);let t=await(await fetch(this.src)).arrayBuffer(),o=await e.decodeAudioData(t);this.duration=A().utcOffset(0).set({hour:0,minute:0,second:o.duration??0,millisecond:0}).format("mm:ss")}}},Re={class:"xl:flex xl: mt-[30px] xl:items-center xl: justify-items-start xl:justify-normal lg:flex lg: justify-between"},Le={class:"pl-4 w-full h-[53px] bg-[#EAE8E8] xl:w-[234px] xl:h-[60px] xl:order-1 xl:rounded-[16px] lg:w-1/3 text-[#01518E] text-4xl rounded-4xl flex items-center"},$e={class:"ml-4"},Be={class:"text-xl"},Ye=["id"],Ue=n("source",{src:Me,type:"audio/mp3",codecs:"mp3"},null,-1),He=[Ue],Fe=n("h4",null,"*You should only hear the audio once",-1);function Ve(e,s,t,o,a,i){return l(),d("div",Re,[n("div",Le,[n("h1",null,[n("button",{onClick:s[0]||(s[0]=(...r)=>i.handlePlay&&i.handlePlay(...r))},[n("i",{class:E({"fa-sharp fa-regular fa-circle-pause":a.play,"fa-regular fa-circle-play":!a.play})},null,2)])]),n("div",$e,[n("h1",Be,u(a.currentTime)+" / "+u(a.duration),1)]),n("audio",{id:t.id,preload:"auto"},He,8,Ye)]),Fe])}const je=p(Ge,[["render",Ve]]),qe={name:"group-question",components:{QuestionTest:De,AudioTest:je},data(){return{grid_cols_3:"lg:grid-cols-3",grid_cols_2:"lg:grid-cols-2",grid_cols_1:"lg:grid-cols-1",TYPE_READING:$,TYPE_WRITING:B}},props:{groupQuestionProp:{type:Object,default(){return{title:"",questions:[]}}},indexProp:{type:Number,default(){return 0}},typeTest:{type:Number,default(){return 0}},IdAudioIsRunning:{type:String,default(){return"0"}}},methods:{onAudioPlayed(e){this.$emit("onAudioPlayed",e)}}},We={class:"groupQuestion"},Xe={class:"flex xl:block lg:block"},Ke={class:"grow"},Je={class:""},ze={class:"text-left"},Ze=n("h1",{class:"xl:text-[24px] text-[#333399] lg:text-[17px]"},null,-1),et=["innerHTML"],tt=["innerHTML"],st=["src"];function nt(e,s,t,o,a,i){const r=c("audio-test"),h=c("QuestionTest");return l(),d("div",We,[t.groupQuestionProp.audio?(l(),g(r,{key:0,id:t.groupQuestionProp.id,src:t.groupQuestionProp.audio,onOnAudioPlayed:i.onAudioPlayed,IdAudioIsRunning:t.IdAudioIsRunning},null,8,["id","src","onOnAudioPlayed","IdAudioIsRunning"])):m("",!0),n("div",Xe,[n("div",Ke,[n("div",null,[n("div",Je,[n("div",ze,[Ze,n("h1",{innerHTML:t.groupQuestionProp.title,class:"mt-6 text:sm xl:text-lg lg:text-lg md:text-lg"},null,8,et),n("p",{class:"mt-6 text:sm xl:text-lg lg:text-lg md:text-lg",innerHTML:t.groupQuestionProp.description},null,8,tt),t.groupQuestionProp.image?(l(),d("img",{key:0,src:t.groupQuestionProp.image,class:"xl:w-[800px] w-full lg:w-[600px]"},null,8,st)):m("",!0)])]),n("div",{class:E(["xl:grid lg:grid gap-4",[t.typeTest==a.TYPE_READING?a.grid_cols_2:t.typeTest==a.TYPE_WRITING?a.grid_cols_1:a.grid_cols_3]])},[(l(!0),d(f,null,b(t.groupQuestionProp.questions,(x,w)=>(l(),g(h,{indexQuestion:w,question:x,indexGroupQuestion:t.indexProp,key:w},null,8,["indexQuestion","question","indexGroupQuestion"]))),128))],2)])])])])}const C=p(qe,[["render",nt]]),it={name:"VocabularyTest",components:{GroupQuestion:C},data(){return{}},props:{data:{type:Object,default:{groupQuestions:[]}}},methods:{}},at={class:"bg-white"},rt={class:"lg:px-[28px] lg:pl-[57px] pl-[40px] lg:bg-white"},lt={class:""};function ot(e,s,t,o,a,i){const r=c("GroupQuestion");return l(),d("div",at,[n("div",rt,[n("div",lt,[(l(!0),d(f,null,b(t.data.groupQuestions,(h,x)=>(l(),g(r,{groupQuestionProp:h,indexProp:x,key:x},null,8,["groupQuestionProp","indexProp"]))),128))])])])}const dt=p(it,[["render",ot]]),ut={name:"readingTest",components:{GroupQuestion:C},data(){return{}},created(){},props:{data:{type:Object,default:{groupQuestions:[]}}},methods:{}},ct={class:"bg-[#BBEEFF] lg:pt-0 lg:h-auto pt-0"},ht={class:"bg-white h-full xl:h-[100%]"},xt={class:"reading-item"},pt={class:"lg:flex"},mt={class:"lg:overflow-auto lg:absolute static left-0 right-0 bottom-0 top-[300px] lg:top-[174px] pt-5 px-7 xl:w-1/2 lg:w-1/2 pb-5"},_t={class:"text-[#01518E] text-xl font-bold mb-2"},gt=["innerHTML"],ft={class:"pb-5 lg:absolute static left-[50vw] right-0 bottom-0 top-[300px] lg:top-[174px] bg-[#F8F9FA] rounded-t-3xl text-lg mt-10 py-13 lg:pl-16 px-[10px] xl:w-1/2 lg:bg-white lg:p-0 xl:m-0 lg:overflow-auto xl:rounded-t-0 lg:w-1/2 lg:ml-1 scroll-smooth pl-[25px]"};function wt(e,s,t,o,a,i){const r=c("group-question");return l(),d("div",ct,[n("div",ht,[n("div",xt,[n("div",null,[n("div",pt,[n("div",mt,[n("h1",_t,u(t.data.title),1),n("h1",null,u(t.data.description),1),n("div",null,[n("p",{class:"overflow-auto text-lg lg:pr-10",innerHTML:t.data.script},null,8,gt)])]),n("div",ft,[(l(!0),d(f,null,b(t.data.groupQuestions,(h,x)=>(l(),d("div",{key:x},[T(r,{groupQuestionProp:h,indexProp:x,typeTest:t.data.type},null,8,["groupQuestionProp","indexProp","typeTest"])]))),128))])])])])])])}const Tt=p(ut,[["render",wt]]),bt={name:"ModalConfirmContinue",data(){return{}},props:{visible:{type:Boolean,default(){return!1}},page:{type:Number,default:-1},data:{type:Array,default(){return[]}}},methods:{handleCloseModal(){this.$emit("close")},confirmContinue(){this.$emit("continue")},checkSubmitTest(){return this.page==this.data.length-1}}},yt={class:"w-[318px] rounded-2xl md:min-h-fit bg-white xl:w-[674px] xl:h-[303px] pb-6"},At=n("div",{class:"w-full bg-[#01518E] h-[24px] rounded-t-2xl"},null,-1),vt={class:"mt-[5px]"},Et={class:"flex flex-row-reverse mr-[15px]"},Pt=n("i",{class:"fa fa-times"},null,-1),It=[Pt],St={class:"px-[28px] xl:px-[28px] h-1/2 xl:h-[130px]"},kt={class:"header text-[24px] text-[#01518E] font-bold xl:text-[40px]"},Ct={class:"content text-[14px] text-[#000000] xl:text-[16px] h-1/2"},Nt={class:"footer flex flex-row-reverse mr-[12px] mt-[32px]"};function Qt(e,s,t,o,a,i){return l(),d("div",{class:E([{hidden:!t.visible,"":t.visible},"fixed inset-0 bg-[#70707090] h-full flex justify-center items-center"])},[n("div",yt,[At,n("div",vt,[n("div",Et,[n("button",{class:"text-[24px] p-0",onClick:s[0]||(s[0]=r=>i.handleCloseModal())},It)]),n("div",St,[n("div",kt,"XÁC NHẬN "+u(i.checkSubmitTest()?"NỘP BÀI":"TIẾP TỤC"),1),n("div",Ct,"Bạn chưa hoàn thành hết câu hỏi, bạn có muốn "+u(i.checkSubmitTest()?"nộp bài":"tiếp tục"),1),n("div",Nt,[n("button",{class:"w-[130px] h-[41px] bg-[#01518E] rounded-[28px] text-white xl:text-[16px] xl:w-[148px] xl:h-[47px]",onClick:s[1]||(s[1]=(...r)=>i.confirmContinue&&i.confirmContinue(...r))},u(i.checkSubmitTest()?"NỘP BÀI":"TIẾP TỤC"),1)])])])])],2)}const V=p(bt,[["render",Qt]]),Ot={name:"listenTest",components:{GroupQuestion:C,ModalTest:V},data(){return{statusModal:!1,IdAudioIsRunning:"0",audioPlayingIds:[]}},props:{data:{type:Object,default(){return{groupQuestions:[]}}}},methods:{handleOpenModal(e){this.statusModal=e},handleCloseModal(e){this.statusModal=e},onAudioPlayed(e){this.audioPlayingIds&&(this.audioPlayingIds.forEach(s=>{s!==e&&this.turnOffAudio(s)}),this.audioPlayingIds=[]),this.audioPlayingIds.push(e)},turnOffAudio(e){var s;(s=document.getElementById(e))==null||s.pause()}}},Dt={class:"bg-[#BBEEFF] xl:pt-0 lg:h-auto"},Mt={class:"bg-white h-full xl:h-full"},Gt=n("div",{class:"hidden xl:block xl:px-7"},null,-1),Rt={class:"px-[28px] xl:pl-[57px] lg:bg-white"},Lt={class:"xl:block lg:block"};function $t(e,s,t,o,a,i){const r=c("group-question"),h=c("modal-test");return l(),d(f,null,[n("div",Dt,[n("div",Mt,[Gt,n("div",Rt,[n("div",Lt,[(l(!0),d(f,null,b(t.data.groupQuestions,(x,w)=>(l(),d("div",{key:w},[T(r,{onOnAudioPlayed:i.onAudioPlayed,IdAudioIsRunning:a.IdAudioIsRunning,groupQuestionProp:x,indexProp:w,typeTest:t.data.type},null,8,["onOnAudioPlayed","IdAudioIsRunning","groupQuestionProp","indexProp","typeTest"])]))),128))])])])]),(l(),g(h,{key:a.statusModal,statusModal:a.statusModal,onStatusModal:i.handleCloseModal},null,8,["statusModal","onStatusModal"]))],64)}const Bt=p(Ot,[["render",$t]]),Yt="/test-input/get-exam",Ut="/test-input/mark-auto",Ht="/test-input/pause-test",Ft="/test-input/get-pause-test",Vt=L({id:"examTest",state:()=>({status:11111}),getters:{},actions:{getExam(e){return I.query(`${Yt}`,e)},setGeneralTest(e){this.status=e.status},postExam(e){return I.post(`${Ut}`,e)},pauseTest(e){return I.post(`${Ht}`,e)},getPauseTest(e){return I.get(`${Ft}/${e}`)}}}),v=Vt(),j=L({id:"placementsTestStore",state:()=>({dataPlacementsTest:[],typePlacementTestNow:0}),getters:{},actions:{async setDataPlacementTestTest(){let e=await v.getExam({type:"ielts",step:0}).then(s=>s.data.data.map(o=>o.Sections.map(a=>G({...a,Skill:o.Skill},Y.general))).reduce((o,a)=>o.concat(a)));this.dataPlacementsTest=e},async setDataStep1Test(){let e=await v.getExam({type:"ielts",step:1}).then(s=>s.data.data.map(o=>o.Sections.map(a=>G({...a,Skill:o.Skill}))).reduce((o,a)=>o.concat(a)));this.dataPlacementsTest=e}}}),S=j(),jt={name:"HeaderContent",setup(){return{examTestStore:v,userStore:_}},data(){return{time:null,timeDoTest:"30",interval:null,statusTime:!0,testSchedule:{id:"",name:"",phone:""}}},props:{page:{type:Number,default:-1},data:{type:Array,default(){return[]}},timeTest:{type:Number,default(){return null}},isStepGeneral:{type:Boolean,default(){return!1}}},async mounted(){await this.getCurrentUser(),this.isStepGeneral?this.timeDoTest="30":this.timeDoTest="150",this.countdown()},watch:{data(){clearInterval(this.interval),this.countdown()},isStepGeneral(){this.isStepGeneral?this.timeDoTest="30":this.timeDoTest="120"}},computed:{minute(){return Math.floor(this.time/60)},second(){let e=Math.floor(this.time%60);return e<10?`0${e}`:e},isWarningTime(){return this.minute<5}},methods:{async getCurrentUser(){this.testSchedule=_.getTestSchedule()},nextPage(){this.$emit("nextPage")},backPage(){this.$emit("backPage")},countdown(){this.interval=setInterval(()=>{this.time=Math.round(this.timeTest-new Date().getTime()/1e3),this.time<=0&&(clearInterval(this.interval),this.$emit("timeOut"),this.time=0)},1e3)},async handlePausePlay(){var t;let e={test_input_schedule_id:((t=JSON.parse(localStorage.getItem("testSchedule")))==null?void 0:t.id)??-1,time_pause:A.utc(this.time*1e3).format("HH:mm:ss"),answers:this.data};await v.pauseTest(e),localStorage.setItem("page",`${this.page}`);const s=k.service({lock:!0,text:"Loading",background:"rgba(0, 0, 0, 0.7)"});setTimeout(()=>{s.close(),this.$router.push({path:"/information"})},900),clearInterval(this.interval)}},unmounted(){clearInterval(this.interval)},updated(){_.saveDataTimeInLocal(this.data,this.time,this.testSchedule.uuid)}},qt={class:"py-3 header lg:rounded lg:mx-auto lg:justify-between lg:px-14 lg:flex lg:items-center lg:bg-test-bg-header-test rounded-2xl bg-test-bg-header-test-mobile"},Wt={class:"lg:pt-0 pt-4 flex flex-col items-center lg:items-start"},Xt=n("h1",{class:"text-test-color-question xl:text-[32px] lg:text-[20px] text-[20px] font-bold"},"KIỂM TRA ĐẦU VÀO",-1),Kt={class:"text-test-text-header-content xl:text-[16px] lg:text-[14px] text-[14px] font-bold"},Jt={class:"xl:text-center flex justify-center items-center"},zt={class:"flex flex-col items-center"},Zt={class:"text-test-text-header-content xl:text-[16px] lg:text-[14px] text-[14px] font-bold"},es={class:"text-test-text-header-content xl:text-[16px] lg:text-[14px] text-[14px] font-bold"},ts={class:"flex justify-between px-7 lg:mt-0 mt-4"},ss={key:1,class:"xl:w-[132px] xl:h-[47px] text-white lg:w-[112px] lg:h-[41px] lg:text-[14px] w-[103px] h-[36px] lg:mr-[15px]"};function ns(e,s,t,o,a,i){return l(),d("div",qt,[n("div",Wt,[Xt,n("p",Kt,u(a.testSchedule.name)+" - "+u(a.testSchedule.phone),1)]),n("div",null,[n("div",Jt,[n("div",zt,[n("p",Zt,"Thời gian : "+u(a.timeDoTest)+" phút",1),n("p",es,[Q("Thời gian còn lại : "),a.time?(l(),d("span",{key:0,class:E(["xl:text-[24px] lg:text-[20px] text-[20px]",{"text-[#01518E]":!i.isWarningTime,"text-[#FF0000]":i.isWarningTime}])},u(`${i.minute}:${i.second}`),3)):m("",!0)])]),n("button",{onClick:s[0]||(s[0]=(...r)=>i.handlePausePlay&&i.handlePausePlay(...r)),class:"lg:block hidden bg-[#D64120] rounded-[28px] xl:w-[132px] xl:h-[47px] text-white lg:w-[112px] lg:h-[41px] lg:text-[14px] lg:ml-[20px] w-[103px] h-[36px] xl:mr-[15px] lg:mr-[30px]"},u(a.statusTime?"Tạm Dừng":"Tiếp Tục"),1)])]),n("div",ts,[n("button",{onClick:s[1]||(s[1]=(...r)=>i.handlePausePlay&&i.handlePausePlay(...r)),class:"lg:hidden bg-[#D64120] rounded-[28px] xl:w-[132px] xl:h-[47px] text-white lg:w-[112px] lg:h-[41px] lg:text-[14px] lg:ml-[20px] w-[103px] h-[36px] xl:mr-[15px] lg:mr-[30px]"},u(a.statusTime?"Tạm Dừng":"Tiếp Tục"),1),t.page>0?(l(),d("button",{key:0,onClick:s[2]||(s[2]=(...r)=>i.backPage&&i.backPage(...r)),class:"bg-[#01518E] rounded-[28px] xl:w-[132px] xl:h-[47px] text-white lg:w-[112px] lg:h-[41px] lg:text-[14px] w-[103px] h-[36px] lg:mr-[15px]"}," Phần Trước ")):(l(),d("button",ss)),n("button",{onClick:s[3]||(s[3]=(...r)=>i.nextPage&&i.nextPage(...r)),class:"bg-[#01518E] rounded-[28px] xl:w-[132px] xl:h-[47px] text-white xl:ml-[30px] lg:w-[112px] lg:h-[41px] lg:text-[14px] w-[103px] h-[36px]"},u(t.page==t.data.length-1?"Nộp Bài":"Tiếp Tục"),1)])])}const is=p(jt,[["render",ns]]),as={name:"buttonExam",props:{questions:{type:Object,default:[]}}},rs={class:"exam_button lg:pt-2 pt-0"},ls=["href"];function os(e,s,t,o,a,i){return l(!0),d(f,null,b(t.questions,(r,h)=>(l(),d("div",{key:h},[n("div",rs,[n("a",{href:`#${r.idQuestion}`},[n("button",{class:E([{"text-white bg-test-color-button-did-answer":r.answered,"bg-test-color-button-not-done-answer":!r.answered},"xl:min-w-8 xl:px-3 xl:h-8 rounded-32 mr-4 mb-1 px-2 h-6 w-max"])},u(r.order),3)],8,ls)])]))),128)}const ds=p(as,[["render",os]]),us={name:"ModalDisplayResults",data(){return{result:null}},props:{visible:{type:Boolean,default(){return!1}},correctAnswer:{type:Number,default(){return 0}},countQuestion:{type:Number,default(){return 0}}},mounted(){this.result()},methods:{handleCloseModal(){this.$emit("visible",!1)},nextPageBegin(){this.$router.push({path:"/information",replace:!0})}}},cs={class:"w-[318px] rounded-2xl h-[230px] bg-white xl:w-[674px] xl:h-[303px]"},hs=n("div",{class:"w-full bg-[#01518E] h-[24px] rounded-t-2xl"},null,-1),xs={class:"mt-[5px]"},ps=n("div",{class:"flex flex-row-reverse mr-[15px]"},null,-1),ms={class:"px-[28px] xl:px-[28px] h-1/2 xl:h-[130px]"},_s=n("div",{class:"header text-[24px] text-[#01518E] font-bold xl:text-[40px] xl:text-[40px]"},"HOÀN THÀNH",-1),gs={class:"content text-[14px] text-[#000000] xl:text-[16px] h-1/2"},fs=n("br",null,null,-1),ws={class:"footer flex flex-row-reverse mr-[12px] mt-[32px]"};function Ts(e,s,t,o,a,i){return l(),d("div",{class:E([{hidden:!t.visible,"":t.visible},"absolute inset-0 bg-[#70707090] h-full flex justify-center items-center"])},[n("div",cs,[hs,n("div",xs,[ps,n("div",ms,[_s,n("div",gs,[Q("Bạn đã hoàn thành phần thi Vocabulary & Grammar"),fs,Q(),n("span",null," Số câu trả lời đúng: "+u(t.correctAnswer)+"/"+u(t.countQuestion),1)]),n("div",ws,[n("button",{class:"w-[130px] h-[41px] bg-[#333399] rounded-[28px] text-white xl:text-[16px] xl:w-[148px] xl:h-[47px]",onClick:s[0]||(s[0]=(...r)=>i.nextPageBegin&&i.nextPageBegin(...r))},"Tiếp Tục")])])])])],2)}const bs=p(us,[["render",Ts]]),ys={name:"writeTest",components:{GroupQuestion:C,AnswerInputTextArea:F},props:{data:{type:Object,default(){return{groupQuestions:[]}}}},methods:{handleTextAreaAnswer(e){this.data.groupQuestions[0].questions[0].userAnswer=e}},computed:{userAnswer(){return this.data.groupQuestions[0].questions[0].userAnswer}}},As={class:"bg-white pt-0 h-auto xl:pt-0"},vs={class:"bg-white rounded-t-32 h-auto"},Es={class:"px-[28px] mt-[16px] xl:mt-[30px]"},Ps=["innerHTML"],Is=["innerHTML"];function Ss(e,s,t,o,a,i){const r=c("group-question");return l(),d("div",As,[n("div",vs,[n("div",Es,[n("h1",{class:"text-[12px] mb-[8px] xl:text-[20px] xl:mb-[14px] lg:text-[18px] md:text-[16px]",innerHTML:t.data.description},null,8,Ps),n("p",{class:"text-[14px] mb-[8px] xl:text-[16px] xl:mb-[26px]",innerHTML:t.data.script},null,8,Is),(l(!0),d(f,null,b(t.data.groupQuestions,(h,x)=>(l(),d("div",{key:x},[T(r,{groupQuestionProp:h,indexProp:x,typeTest:t.data.type},null,8,["groupQuestionProp","indexProp","typeTest"])]))),128))])])])}const ks=p(ys,[["render",Ss]]);const Cs={name:"GeneralTest",components:{WriteTest:ks,ModalDisplayResults:bs,ModalConfirmContinue:V,HeaderContent:is,ListenTest:Bt,ReadingTest:Tt,VocabularyTest:dt,ButtonExam:ds},data(){return{data:[],page:0,visibleConfirmContinue:!1,visibleDisplayResult:!1,correctAnswer:0,confirm:!1,scorePassTest:20,OVERALL:pe,TYPE_LISTENING:xe,TYPE_WRITING:B,TYPE_READING:$,TYPE_GENERAL:N,testSchedule:JSON.parse(localStorage.getItem("testSchedule")),timeTest:null,timeIelts:7200,notErrorMakeExam:!1,flagSubmitted:!1}},async mounted(){this.checkToken();const e=k.service({lock:!0,text:"Vui lòng đợi trong giây lát ...",background:"rgba(0, 0, 0, 0.7)"});if(this.timeTest=Math.round(new Date().getTime()/1e3+1800),await S.setDataPlacementTestTest(),e.close(),this.data=S.dataPlacementsTest??[],localStorage.getItem("statusGeneral")==K){await this.getDataPause(),this.page=localStorage.getItem("page")??0;return}let{uuid:s}=_.getTestSchedule(),{phone:t}=_.getTestSchedule(),{dataAnswer:o,time:a,latest_time_do_test:i}=_.getDataTimeInLocal(s)??_.getDataTimeInLocal(t);if(o!=null){this.data=o;let r=new Date().getTime()/1e3,h=r-i/1e3;this.timeTest=+a+r-h,this.timeTest<=0&&(this.timeTest=0)}},methods:{checkToken(){JSON.parse(localStorage.getItem("testSchedule"))||this.$router.push({name:"login"})},getConfirmQuestionsSection(){var e;this.visibleConfirmContinue=((e=this.allQuestions)==null?void 0:e.find(s=>!s.answered))!=null},getConfirmQuestionsTest(){var e;this.visibleConfirmContinue=((e=this.allQuestionTest)==null?void 0:e.find(s=>!s.answered))!=null},getConfirmQuestion(){this.page==this.data.length-1?this.getConfirmQuestionsTest():this.getConfirmQuestionsSection()},nextPage(){if(this.getConfirmQuestion(),!this.visibleConfirmContinue){if(this.page==this.data.length-1){this.handleFinished();return}this.page++}},backPage(){this.page!=0&&this.page--},confirmContinue(){if(this.visibleConfirmContinue=!1,this.page==this.data.length-1){this.handleFinished();return}this.page++},async handleFinishedTestGeneral(){const e=k.service({lock:!0,text:"Vui lòng đợi trong giây lát ...",background:"rgba(0, 0, 0, 0.7)"});if(await this.makeExam(0),await e.close(),!this.notErrorMakeExam){this.$notify.error({title:"Lỗi",message:"Bạn chưa nộp được bài vui lòng thử lại"});return}if(this.visibleDisplayResult=this.correctAnswer<this.scorePassTest,this.visibleDisplayResult){this.flagSubmitted=!0;let{uuid:s}=_.getTestSchedule();this.timeTest=0,setTimeout(()=>{_.deleteDataTimeInLocal(s)},2e3);return}await S.setDataStep1Test(),this.timeTest=new Date().getTime()/1e3+this.timeIelts,this.data=S.dataPlacementsTest??[],this.page=0},async handleFinishedTestIelts(){var t;const e=k.service({lock:!0,text:"Vui lòng đợi trong giây lát ...",background:"rgba(0, 0, 0, 0.7)"});let s=await this.makeExam(1);if(+((t=s==null?void 0:s.data)==null?void 0:t.error_code)!=1001&&await e.close(),this.notErrorMakeExam){this.flagSubmitted=!0;let{uuid:o}=_.getTestSchedule();this.timeTest=0,await this.$router.push({path:"/information",replace:!0}),_.deleteDataTimeInLocal(o);return}if(+s.data.error_code==1001){setTimeout(async()=>{await this.handleFinishedTestIelts()},3e3);return}this.$notify.error({title:"Lỗi",message:"Bạn chưa nộp được bài vui lòng thử lại"})},handleFinished(){this.currentSection.type==N?this.handleFinishedTestGeneral():this.handleFinishedTestIelts()},timeOut(){},makeExam(e){let s={type:"ielts",test_input_schedule_id:this.testSchedule.id,step:e,answers:this.studentIDAndAnswer};return this.notErrorMakeExam=!1,v.postExam(s).then(t=>{var o,a;t.error||(this.correctAnswer=(a=(o=t==null?void 0:t.data)==null?void 0:o.data)==null?void 0:a.right_answer,this.notErrorMakeExam=!0)}).catch(t=>t==null?void 0:t.response)},getDataPause(){return v.getPauseTest(this.testSchedule.id).then(e=>{this.data=e.data.data.answer_provisional,this.timeTest=new Date().getTime()/1e3+A(e.data.data.time_pause,"HH:mm:ss").diff(A().startOf("day"),"seconds"),localStorage.removeItem("statusGeneral")})}},computed:{...J(j,{dataPlacementsTest:"dataPlacementsTest"}),currentSection(){return this.data.length>this.page?this.data[this.page]:null},allQuestions(){return this.currentSection==null?[]:this.currentSection.groupQuestions.map(e=>e.questions).reduce((e,s)=>e.concat(s))},allQuestionTest(){var e;return(e=this.data.map(s=>{var t;return(t=s.groupQuestions)==null?void 0:t.map(o=>o.questions).reduce((o,a)=>o.concat(a))}))==null?void 0:e.reduce((s,t)=>s.concat(t))},studentIDAndAnswer(){return this.allQuestionTest.map(e=>({id:e.idQuestion,answers:e.userAnswer?[e.userAnswer]:e.userAnswers}))},isStepGeneral(){var e;return((e=this.data)==null?void 0:e.find(s=>s.type==N))!=null}}},Ns={class:"bg-white h-screen"},Qs={key:0,class:"flex mt-[20px] lg:[10px] px-5 w-screen overflow-x-auto h-fit"},Os={key:1,class:"bg-white absolute left-0 right-0 bottom-0 top-[256px] lg:top-[174px] overflow-auto pb-5"},Ds={key:0};function Ms(e,s,t,o,a,i){const r=c("HeaderContent"),h=c("ButtonExam"),x=c("VocabularyTest"),w=c("listen-test"),P=c("write-test"),y=c("reading-test"),q=c("modal-confirm-continue"),W=c("modal-display-results");return l(),d(f,null,[n("div",Ns,[T(r,{class:"h-[200px] lg:h-[100px]",onNextPage:i.nextPage,onBackPage:i.backPage,page:a.page,data:a.data,onTimeOut:i.timeOut,timeTest:a.timeTest,isStepGeneral:i.isStepGeneral},null,8,["onNextPage","onBackPage","page","data","onTimeOut","timeTest","isStepGeneral"]),i.currentSection.groupQuestions&&i.allQuestions?(l(),d("div",Qs,[T(h,{questions:i.allQuestions},null,8,["questions"])])):m("",!0),i.currentSection&&i.currentSection.type!==a.TYPE_READING?(l(),d("div",Os,[i.currentSection.type==a.TYPE_GENERAL?(l(),g(x,{key:0,data:i.currentSection},null,8,["data"])):m("",!0),i.currentSection.type==a.TYPE_LISTENING?(l(),g(w,{key:1,data:i.currentSection},null,8,["data"])):m("",!0),i.currentSection.type==a.TYPE_WRITING?(l(),g(P,{key:2,data:i.currentSection},null,8,["data"])):m("",!0)])):m("",!0),n("div",null,[i.currentSection.type==a.TYPE_READING?(l(),g(y,{key:0,data:i.currentSection},null,8,["data"])):m("",!0)])]),i.currentSection?(l(),d("div",Ds,[T(q,{visible:a.visibleConfirmContinue,onClose:s[0]||(s[0]=Gs=>a.visibleConfirmContinue=!1),page:a.page,data:a.data,onContinue:i.confirmContinue},null,8,["visible","page","data","onContinue"]),T(W,{visible:a.visibleDisplayResult,correctAnswer:a.correctAnswer,countQuestion:this.allQuestionTest.length},null,8,["visible","correctAnswer","countQuestion"])])):m("",!0)],64)}const Bs=p(Cs,[["render",Ms],["__scopeId","data-v-46474533"]]);export{Bs as default};
