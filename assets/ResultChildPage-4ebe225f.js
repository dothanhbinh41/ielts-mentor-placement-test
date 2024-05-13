import{r as A}from"./result-test-store-94e749c1.js";import{u as f}from"./user-store-53e2eb7e.js";import{_ as F}from"./header_picture-bff426f8.js";import{_ as v,Y as b,r as w,o as l,c as o,a as t,t as n,F as p,d as u,s as C,g as h}from"./index-d2d56e9e.js";const S="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEPSURBVHgB7ZW/agJBEMa/nfPUJgFJkyJNqrzBGZ8mmCZVuhBNZRFCwEqfQEtL8QmsRGwFKxtLG1Gw8A/uONvo3emhd2oj/poZ7pjf7S3sfgp+Xr7vkKIHRCE5G6NZGps25n5OmdwHQxXA/AgohZDwLJmVUvWKna9nZpSlS4gUp0KbzopnRJjAmdiumHXc/YKBvJThgXnzb79SnoLFfsiqofU3wCFe82/7xBQ4MF8Ef/QIAoeVbfVlNYgK4ULcxDfxNYi9J495xIqy0MsuKMYIi7nod8SsVyKtoP3fwBnYboVNPbkC03B+osWSD29UOLlPCaR3KJqYfUFIWOsyOsX6rtiQLtzDmqag7fD55ArTNTqiQKrqIrdnAAAAAElFTkSuQmCC",E=b({name:"ResultChildPage",data(){return{testSchedule:{},commentAndConclusion:[],resultTests:[]}},mounted(){this.testSchedule=f.getTestSchedule(),this.getResult()},methods:{async getResult(){A.GET_POINT({id:this.testSchedule.id}).then(e=>{var i,c,a,r;this.resultTests=(c=(i=e==null?void 0:e.data)==null?void 0:i.data)==null?void 0:c.speaking.filter(d=>d.id!=null),this.commentAndConclusion=(r=(a=e==null?void 0:e.data)==null?void 0:a.data)==null?void 0:r.speaking.filter(d=>d.id==null)})}}}),k={class:"bg-[#FFD602] rounded-t-[18px] lg:bg-[#FFD602] lg:rounded-none lg:min-w-screen lg:h-max lg:min-h-screen lg:flex lg:justify-center lg:items-center lg:p-5"},y={class:"lg:w-[65vw] lg:h-auto lg:bg-[#FFFFFF] lg:rounded-[35px]"},B=C('<header class="pt-7 px-12 pb-8 text-center text-[#01518E] lg:bg-[#01518E] lg:rounded-[35px] lg:flex lg:justify-between lg:text-white"><div><h1 class="text-[22px] font-bold lg:text-[35px]">Placement – Student report</h1><p class="text-[15px] font-medium mt-2 lg:text-[20px] lg:text-left">Báo cáo kết quả bài kiểm tra đầu vào</p></div><div class="hidden lg:block"><img src="'+F+'" class="w-[380px] h-[180px]" alt=""></div></header>',1),N={class:"rounded-t-[35px] bg-[#FFFFFF] text-[#01518E] py-8 px-10 lg:text-center lg:rounded-b-[35px] lg:rounded-t-[0px]"},R={class:"text-[16px] font-semibold"},T=t("p",{class:"text-[16px] font-normal text-[#5C5C5C] mt-2"},"Cambridge Mentor xin gửi kết quả kiểm tra đầu vào của bạn như sau:",-1),U={class:"lg:flex"},K={class:"lg:text-left"},Q={class:"w-full rounded-t-[15px] bg-[#013878] text-[#FFFFFF] px-5 py-5 flex lg:justify-between"},V={class:"flex items-center"},Y=t("div",{class:"w-[34px] h-[34px] rounded-full bg-[#FFFFFF] flex justify-center items-center"},[t("img",{src:S,alt:"",class:"w-[22px] h-[22px]"})],-1),q={class:"ml-3 text-[16px] font-bold"},D={class:"hidden lg:block"},G=t("p",{class:"font-medium text-[16px] lg:text-[13px]"},"Evaluation (Đánh giá)",-1),I={class:"p-3"},J={class:"flex items-center lg:hidden"},L=t("p",{class:"font-medium text-[16px]"},"Evaluation (Đánh giá):",-1),P={class:"text-[#5C5C5C] text-[16px] mt-3 font-normal",style:{"white-space":"pre-wrap"}},X={class:"lg:ml-5"},j={class:"w-full rounded-t-[15px] bg-[#FFD602] text-[#FFFFFF] px-5 py-5"},Z={class:"text-[16px] font-bold"},O={class:"p-3 text-left"},M={class:"lg:min-w-[150px]"},W={class:"text-[#5C5C5C] text-[16px] mt-1 font-normal lg:mt-0"};function z(e,i,c,a,r,d){const x=w("el-rate");return l(),o("div",k,[t("div",y,[B,t("section",N,[t("h3",R,"Xin chào "+n(e.testSchedule.name)+",",1),T,t("div",U,[t("div",K,[(l(!0),o(p,null,u(e.resultTests,(s,m)=>(l(),o("div",{class:"h-auto w-full shadow-md rounded-[15px] mt-4",key:m},[t("div",Q,[t("div",V,[Y,t("h1",q,n(s.name),1)]),t("div",D,[G,h(x,{class:"ml-2","model-value":s.start,disabled:!0},null,8,["model-value"])])]),t("div",I,[t("div",J,[L,h(x,{class:"ml-2","model-value":s.start,disabled:!0},null,8,["model-value"])]),t("p",P,n(s.comment),1)])]))),128))]),t("div",X,[(l(!0),o(p,null,u(e.commentAndConclusion,(s,m)=>(l(),o("div",{class:"h-auto w-full shadow-md rounded-[15px] mt-4",key:m},[t("div",j,[t("h1",Z,n(s.name),1)]),t("div",O,[(l(!0),o(p,null,u(s.listComment,(g,_)=>(l(),o("div",{class:"lg:flex mb-3",key:_},[t("p",M,n(g.title)+":",1),t("p",W,n(g.comment),1)]))),128))])]))),128))])])])])])}const st=v(E,[["render",z]]);export{st as default};
