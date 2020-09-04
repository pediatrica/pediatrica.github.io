(this["webpackJsonppediatrica.github.io"]=this["webpackJsonppediatrica.github.io"]||[]).push([[0],{54:function(e,t,n){e.exports=n(65)},59:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(11),i=n.n(r),u=(n(59),n(45)),c=n(10),m=[{cat:"Induction",initOpen:!0,meds:[{med:"Propofol",routes:[{route:"IV",low:2,high:3,units:"mg",conc:10}]},{med:"Etomidate",routes:[{route:"IV",low:.3,units:"mg",conc:2}]},{med:"Ketamine",routes:[{route:"IV",low:2,high:3,units:"mg",conc:10}]}]},{cat:"Muscle Relaxants",initOpen:!0,meds:[{med:"Rocuronium",routes:[{route:"IV",low:.6,units:"mg",conc:10},{route:"IV (RSI)",low:1.2,units:"mg",conc:10}]},{med:"Vecuronium",routes:[{route:"IV",low:.1,units:"mg"}]},{med:"Cisatracurium",routes:[{route:"IV",low:.1,high:.2,units:"mg",conc:2}]},{med:"Succinylcholine",routes:[{route:"IV",customFormula:{str:"<1y: 2-3 mg/kg, >1y: 1-2 mg/kg",func:function(e,t){if(0===e||0===t||null===e||null===t)return"-";var n=s(e<1?2*t:t),o=s(e<1?3*t:2*t),a=s(n/20),r=s(o/20);return["".concat(n,"-").concat(o," mg"),"".concat(a,"-").concat(r,"cc"),"".concat(20," mg/mL")]}},conc:20},{route:"IM",low:4,high:5,units:"mg"}]}]},{cat:"Muscle Relaxant Reversal",initOpen:!0,meds:[{med:"Glycopyrrolate",routes:[{route:"IV",low:7,high:15,units:"mcg",conc:200}]},{med:"Neostigmine",routes:[{route:"IV",low:.035,high:.075,units:"mg",conc:1}]},{med:"Sugammadex",routes:[{route:"IV (TOF\u22652)",low:2,units:"mg",conc:100},{route:"IV (TOF<2)",low:4,units:"mg",conc:100},{route:"IV (immediate reversal)",low:16,units:"mg",conc:100}]}]},{cat:"Pain Medications",initOpen:!0,meds:[{med:"Tylenol",routes:[{route:"PO/PR",low:10,high:15,units:"mg",notes:"Max 40 mg/kg/day up to 3g/day"},{route:"IV (Q6)",customFormula:{str:"<1mo: 7.5 mg/kg, 1mo-2y: 10 mg/kg, >2y: 15 mg/kg",func:function(e,t){if(0===e||null===e||0===t||null===t)return"-";var n=s(e<1/12?7.5*t:e<=2?10*t:15*t),o=s(n/10);return["".concat(n," mg"),"".concat(o,"cc"),"".concat(10," mg/mL")]}},notes:"Max 75 mg/kg/day up to 3g/day"}]},{med:"Hydromorphone",routes:[{route:"IV",low:.005,high:.015,units:"mg"}]},{med:"Fentanyl",routes:[{route:"IV",low:.5,high:1,units:"mcg",conc:50},{route:"Nasal",low:2,units:"mcg"}]},{med:"Morphine",routes:[{route:"IV",low:.05,high:.1,units:"mg"}]},{med:"Toradol",routes:[{route:"IV",low:.5,max:30,units:"mg",conc:30}]},{med:"Ketamine",routes:[{route:"IV",low:.25,high:1,units:"mg",conc:10}]}]},{cat:"Antibiotics",initOpen:!0,meds:[{med:"Ampicillin (Q4)",routes:[{route:"IV",low:50,max:3e3,units:"mg",notes:"IVP"}]},{med:"Cefazolin (Q4)",routes:[{route:"IV",low:30,max:2e3,units:"mg",notes:"IVP"}]},{med:"Cefotaxime (Q3)",routes:[{route:"IV",low:50,max:1e3,units:"mg",notes:"IVP"}]},{med:"Cefoxitin (Q4)",routes:[{route:"IV",low:30,units:"mg",notes:"IVP"}]},{med:"Clindamycin (Q6)",routes:[{route:"IV",low:10,max:900,units:"mg",notes:"Slow IVP"}]},{med:"Gentamicin (Q8)",routes:[{route:"IV",low:2,units:"mg",notes:"Over 60 minutes"}]},{med:"Metronidazole (Q6)",routes:[{route:"IV",low:10,max:500,units:"mg"}]},{med:"Vancomycin (Q12)",routes:[{route:"IV",low:15,max:1500,units:"mg",notes:"Slow IVP"}]},{med:"Zosyn(Pip/Tazo)",routes:[{route:"IV",low:75,max:3375,units:"mg"}]}]},{cat:"Antiemetic",initOpen:!0,meds:[{med:"Dexamethasone",routes:[{route:"IV",low:.1,max:4,units:"mg",conc:4}]},{med:"Ondansetron",routes:[{route:"IV",low:.1,max:4,units:"mg",conc:2}]},{med:"Metoclopramide",routes:[{route:"IV/PO",low:.15,max:10,units:"mg",conc:5}]}]},{cat:"Premedication",meds:[{med:"Midazolam",routes:[{route:"IV/IM",low:.05,high:.1,units:"mg",conc:1,notes:"Use concentrated Midazolam for IM and Nasal"},{route:"PO",low:.5,units:"mg",max:20},{route:"Nasal",low:.2,high:.3,units:"mg",notes:"Use concentrated Midazolam for IM and Nasal"}]},{med:"Ketamine",routes:[{route:"IV/PO",low:.5,high:2,units:"mg",conc:10},{route:"IM",low:3,high:7,units:"mg",conc:100}]},{med:"Dexmedetomidine",routes:[{route:"IV",low:.3,high:2,units:"mcg",conc:4,notes:"Over 10 minutes"}]}]},{cat:"Infusions",meds:[{med:"Propofol",routes:[{route:"IV",low:75,high:300,units:"mcg/min"}]},{med:"Remifentanil",routes:[{route:"IV",low:.1,high:.5,units:"mcg/min"}]},{med:"Dexmedetomidine",routes:[{route:"IV",low:.2,high:1,units:"mcg/hr"}]},{med:"Ketamine",routes:[{route:"IV",low:5,high:30,units:"mcg/min"}]},{med:"Phenylephrine",routes:[{route:"IV",low:.1,high:1,units:"mcg/min"}]},{med:"Epinephrine",routes:[{route:"IV",low:.1,high:1,units:"mcg/min"}]},{med:"Dobutamine",routes:[{route:"IV",low:2,high:20,units:"mcg/min"}]},{med:"Dopamine",routes:[{route:"IV",low:1,high:20,units:"mcg/min"}]},{med:"Nitroprusside",routes:[{route:"IV",low:1,high:10,units:"mcg/min"}]},{med:"Nitroglycerin",routes:[{route:"IV",low:1,high:10,units:"mcg/min"}]}]},{cat:"Blood Products",meds:[{med:"pRBC",routes:[{route:"",low:10,high:15,units:"mL",notes:"Rise Hct 6-9/Hgb 2-3"}]},{med:"Cryoprecipitate",routes:[{route:"",low:1,high:2,units:"Units",notes:"Rise Fibrinogen 60-100 mg/dL"}]},{med:"FFP",routes:[{route:"",low:10,high:15,units:"mL",notes:"Rise Factors 15-20%"}]},{med:"Platelets",routes:[{route:"",low:5,high:10,units:"mL",notes:"Rise 50-100K"}]},{med:"DDAVP",routes:[{route:"",low:.1,high:.3,units:"mcg",notes:"(30 min prior to proc)"}]}]},{cat:"Resuscitation",meds:[{med:"Epinephrine",routes:[{route:"IV q3-5min (Hypotension)",low:1,units:"mcg"},{route:"IV q3-5min (Cardiac arrest)",low:10,units:"mcg"}]},{med:"Atropine",routes:[{route:"IV/IM",customFormula:{str:"0.02 mg/kg (<13y: max 1mg, \u226513y: max 2mg)",func:function(e,t){if(0===e||null===e||0===t||null===t)return"-";var n=.02*t;return n<=.1?"0.1 mg (min dose)":e<13&&n>=1?"1.0 mg (max dose)":e>=13&&n>=2?"2.0 mg (max dose)":"".concat(n," mg")}}}]},{med:"Adenosine",routes:[{route:"IV (1st dose)",low:.1,max:6,units:"mg",conc:3},{route:"IV (2nd dose)",low:.2,max:12,units:"mg",conc:3}]},{med:"Amiodarone",routes:[{route:"IV",low:5,max:300,units:"mg",conc:50}]},{med:"Caffeine",routes:[{route:"IV",low:10,units:"mg",conc:20}]},{med:"Calcium Chloride",routes:[{route:"IV",low:10,high:20,max:1e3,units:"mg",conc:100}]},{med:"Calcium Gluconate",routes:[{route:"IV",low:30,high:60,max:1e3,units:"mg",conc:100}]},{med:"Flumazenil ",routes:[{route:"IV",low:.01,units:"mg",conc:.1}]},{med:"Glucose",routes:[{route:"IV",low:.5,units:"g"}]},{med:"Intralipid 20%",routes:[{route:"IV",low:1.5,high:3,units:"mL"}]},{med:"Lidocaine",routes:[{route:"IV",low:1,units:"mg",notes:"Follow with 20-50 mcg/kg/min"}]},{med:"Magnesium",routes:[{route:"IV",low:20,high:50,max:2e3,units:"mg",conc:500}]},{med:"Naloxone (opioid intoxication)",routes:[{route:"IV",low:10,units:"mcg"}]},{med:"Sodium Bicarb",routes:[{route:"IV",low:1,high:2,units:"mEq"}]}]},{cat:"Anaphylaxis",meds:[{med:"Epinephrine",routes:[{route:"IV q3-5min",low:1,units:"mcg"}]},{med:"Fluid bolus",routes:[{route:"IV",low:20,units:"mL"}]},{med:"Diphenhydramine",routes:[{route:"IV",low:1,high:2,units:"mg",conc:50}]},{med:"Hydrocortisone",routes:[{route:"IV",low:1,high:5,units:"mg"}]},{med:"Ranitidine",routes:[{route:"IV",low:1.5,units:"mg",conc:25}]}]},{cat:"Malignant Hyperthermia",meds:[{med:"Dantrolene",routes:[{route:"IV",low:2.5,max:10,units:"mg",notes:"MH hotline: 1-800-644-9737"}]}]}],l=function(e,t){return e.toString()+","+t.toString()},s=function(e){return Math.round(100*e)/100},d=n(100),g=n(115),h=n(113),p=n(114),f=n(4),w=n(116),v=n(103),b=n(104),I=n(117),E=n(46),V=n(102),y=Object(d.a)({root:{display:"inline-block",marginRight:24,marginBottom:24,verticalAlign:"top"},padded:{padding:16},beige:{backgroundColor:"beige"}});function C(e){var t=e.className,n=void 0===t?"":t,o=e.pad,r=void 0!==o&&o,i=e.variant,u=Object(E.a)(e,["className","pad","variant"]),c=y(),m=n+" "+c.root;return void 0!==i&&(m+=" "+c[i]),r&&(m+=" "+c.padded),a.a.createElement(V.a,Object.assign({className:m},u),u.children)}var x=n(44),O=n.n(x),k=n(106),S=n(105),M=n(68),j=Object(f.a)({root:{backgroundColor:"#FFE387",fontWeight:"bold",minHeight:12,"&$expanded":{minHeight:12}},content:{"&$expanded":{margin:"12px 0"}},expanded:{}})(v.a),P=Object(d.a)({accordion:{backgroundColor:"beige"}});function F(e){var t=e.categories,n=e.onChange,o=P();return a.a.createElement("div",null,a.a.createElement(M.a,{gutterBottom:!0},"Show dosages for:"),t.map((function(e,t){var r=e.cat,i=e.initOpen,u=e.meds;return a.a.createElement(C,{key:t},a.a.createElement(w.a,{defaultExpanded:!0===i,className:o.accordion},a.a.createElement(j,{expandIcon:a.a.createElement(O.a,null)},r),a.a.createElement(b.a,null,a.a.createElement(S.a,null,u.map((function(e,o){var r=e.med;return a.a.createElement(k.a,{key:o,control:a.a.createElement(I.a,{name:r,onChange:function(e,a){return n(t,o,a)}}),label:r})}))))))})))}var N=n(109),R=n(112),A=n(111),L=n(108),B=n(110),T=n(107),z=Object(f.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(T.a),D=Object(d.a)({headCell:{padding:12},bodyCell:{padding:4,borderRight:"1px solid #CCCCCC","&:last-child":{borderRight:0}},pastelCyan:{backgroundColor:"#DCFFFB"},pastelRed:{backgroundColor:"#FFABAB"},pastelPink:{backgroundColor:"#FFDCF4"},pastelBlue:{backgroundColor:"#C7CEEA"}});function W(e){var t=e.title,n=e.rows,o=e.variant,r=void 0===o?"pastelBlue":o,i=D();return a.a.createElement(C,null,a.a.createElement(L.a,null,a.a.createElement(N.a,{"aria-label":"customized table"},a.a.createElement(B.a,null,a.a.createElement(T.a,null,a.a.createElement(A.a,{align:"center",colSpan:9,className:"".concat(i.headCell," ").concat(i[r])},t))),a.a.createElement(R.a,null,n.map((function(e,t){return a.a.createElement(z,{key:t},e.map((function(e,t){return a.a.createElement(A.a,{key:t,className:i.bodyCell},e)})))}))))))}var H=function(e,t){return void 0===t?null:s(e/t)},Q=function(e,t,n,o,a,r){if(0===e||null===e)return["-","-"];void 0===o&&(o=Number.MAX_SAFE_INTEGER);var i=function(e,t,n){var o=s(t*e);return o>=n?n:o}(e,t,o);if(void 0===n||i>=o){if(void 0!==r){var u=H(i,r);return["".concat(i," ").concat(a),"".concat(u,"cc")]}return["".concat(i," ").concat(a),null]}var c=function(e,t,n){var o=s(t*e);return o>=n?n:o}(e,n,o);if(void 0!==r){var m=H(i,r),l=H(c,r);return["".concat(i,"-").concat(c," ").concat(a),"".concat(m,"-").concat(l,"cc")]}return["".concat(i,"-").concat(c," ").concat(a),null]},G=Object(d.a)({dosage:{textAlign:"right",fontWeight:"bold"},concentration:{fontStyle:"italic"}}),q=function(e,t,n,o,r,i){var u=[];return n.map((function(n,m){var s=n.med,d=n.routes;return o.has(l(t,m))?d.forEach((function(t){var n,o,m,l,d=t.route,g=t.low,h=t.high,p=t.max,f=t.units,w=t.customFormula,v=t.conc,b=t.notes;if(void 0!==w){void 0===g&&void 0===h&&void 0===f&&void 0===p||console.log("Warning: custom formula provided but default keys provided as well"),n=w.str;var I=w.func(r,i),E=Object(c.a)(I,3);o=E[0],m=E[1],l=E[2]}else{n=function(e,t,n,o){var a=void 0!==t?"".concat(e,"-").concat(t," ").concat(o,"/kg"):"".concat(e," ").concat(o,"/kg");return void 0!==n?"".concat(a," (max ").concat(n," ").concat(o,")"):a}(g,h,p,f);var V=Q(i,g,h,p,f,v),y=Object(c.a)(V,2);o=y[0],m=y[1],l="".concat(v," ").concat(f,"/mL")}var C=[s,d,n,a.a.createElement("span",{className:e.dosage},o)];null!==m?C.push(a.a.createElement(a.a.Fragment,null,a.a.createElement("span",{className:e.dosage},m)," ","[",a.a.createElement("span",{className:e.concentration},l),"]")):C.push("-"),void 0!==b?C.push(b):C.push(""),u.push(C)})):null})),u};function K(e){var t=e.catCounts,n=e.categories,o=e.medIdSet,r=e.age,i=e.weight,u=G();return a.a.createElement(a.a.Fragment,null,n.map((function(e,n){var c=e.cat,m=e.meds;return void 0!==t[n]&&t[n]>0?a.a.createElement(W,{key:n,title:c,rows:q(u,n,m,o,r,i)}):null})))}var U=function(e){return Math.round(2*e)/2},Y=function(e){return 0===e||null===e?"-":e<.5?"Use uncuffed ETT (Newborn)":e<1?"3.0-3.5mm (6mo-1y)":e<2?"3.5mm (1-2y)":e<7?U(e/4+3.5).toString()+"mm":e<=9?"5.0-5.5mm":e<10?"5.5-6.0mm":e<=12?"6.0-6.5mm":e<13?"6.5mm":e<=15?"6.5-7.0mm":e<16?"7.0mm":"7.0-8.0mm"},$=function(e){return 0===e||null===e?"-":e<.5?"2.5-3.0mm (newborn-6mo)":e<1?"3.5-4.0mm (6mo-1y)":e<2?"4.0mm (1-2y)":e<7?U(e/4+4).toString()+"mm":e<=9?"5.5-6.0mm":"N/A (>9y)"},J=function(e){return 0===e||null===e?"-":e<.5?"7-10cm":e<1?"10-11cm":e<2?"12cm":e<4?U(e/2+12).toString()+"cm":e<=6?"15-16cm":e<7?"16cm":e<=9?"16-18cm":e<10?"18cm":e<=12?"18-19cm":e<13?"19cm":e<=15?"19-20cm":e<16?"20-21cm":"21-24cm"},_=function(e){return 0===e||null===e?"-":e<=1/12?"1":e<=1?"2":e<=5?"3":e<=12?"4":"5"},X=function(e,t){return 0===e||null===e?"-":e<=1/12&&t?"30 mm, Clear":e<=.5?"40 mm, Pink":e<=1?"50mm, Light Blue":e<=4?"60mm, Black":e<=6?"60-70mm, Black or White":e<=8?"70-80mm, White or Green":"80mm, Green"},Z=function(e,t,n){return 0===e||null===e||0===t||null===t?"-":e<=1/12?n?(100*t).toString()+"mL":(90*t).toString()+"mL":e<1?(80*t).toString()+"mL":e<=6?(75*t).toString()+"mL":(70*t).toString()+"mL"},ee=function(e){return 0===e||null===e?"-":U(e/20+1)},te=function(e){return 0===e||null===e?"-":e<.5?"Miller 0":e<1?"Miller 1":e<2?"Miller 1 or Wis-hip 1-1.5":e<=3?"Miller 1-2 or Wis-hip 1.5":e<=9?"Miller/Mac 2":"Miller 2 or Mac 3"},ne=function(e){return 0===e||null===e?"-":e<=10?(4*e).toString()+"mL/hr":e<=20?(20+2*e).toString()+"mL/hr":(40+e).toString()+"mL/hr"},oe=function(e,t){return 0===e||null===e?"-":e<=1/12&&t?"55-75":e<=4/12?"65-85":e<=.5?"70-90":e<=1?"80-100":e<=3?"90-105":e<=6?"95-110":e<=12?"100-120":"110-135"},ae=function(e,t){return 0===e||null===e?"-":e<=1/12&&t?"35-45":e<=.25?"45-55":e<=.5?"50-65":e<=1?"55-65":e<=3?"55-70":"60-75"},re=function(e,t){return 0===e||null===e?"-":e<=1/12&&t?"120-170":e<=.25?"100-150":e<=.5?"90-120":e<=1?"80-120":e<=3?"70-110":e<=6?"65-110":e<=12?"60-95":"55-85"},ie=function(e,t){return 0===e||null===e?"-":e<=1/12&&t?"50-60":e<=.25?"35-50":e<=1?"25-40":e<=6?"25-30":e<=12?"20-25":"14-20"},ue=Object(d.a)({root:{display:"inline-block",verticalAlign:"top"}});function ce(e){var t=e.age,n=e.weight,o=e.premature,r=ue();return a.a.createElement("div",{className:r.root},a.a.createElement(W,{title:"Airway",variant:"pastelCyan",rows:[["ETT Size Cuffed",Y(t)],["ETT Size Uncuffed",$(t)],["ETT Depth",J(t)],["Face Mask Size",_(t)],["Oral Airway Size",X(t,o)],["LMA Size",ee(n)],["Blade Size",te(t)]]}),a.a.createElement(W,{title:"Hemodynamic Parameters",variant:"pastelRed",rows:[["SBP",oe(t,o)],["DBP",ae(t,o)],["HR",re(t,o)],["RR",ie(t,o)]]}),a.a.createElement(W,{title:"Other",variant:"pastelPink",rows:[["EBV",Z(t,n,o)],["Maintenance IVF",ne(n)]]}))}var me=n(118),le=Object(d.a)({input:{backgroundColor:"white",borderRadius:8,marginRight:"0.3em",marginBottom:12,verticalAlign:"top",width:"3.5em"},units:{display:"inline-block",marginRight:"0.3em"}});function se(e){var t=e.ariaLabel,n=e.value,o=e.min,r=e.max,i=e.step,u=void 0===i?1:i,c=e.onChange,m=e.units,l=le();return a.a.createElement(a.a.Fragment,null,a.a.createElement(me.a,{className:l.input,value:null===n?"":n,margin:"dense",onChange:function(e){c(""===e.target.value?null:Number(e.target.value))},onBlur:function(){n<o?c(o):n>r&&c(r)},onFocus:function(e){return e.target.select()},inputProps:{min:o,max:r,step:u,type:"number","aria-label":t}}),a.a.createElement(M.a,{className:l.units},m))}function de(e){var t=e.years,n=e.onYearsChange,o=e.months,r=e.onMonthsChange;return a.a.createElement(a.a.Fragment,null,a.a.createElement(M.a,{gutterBottom:!0},"Age"),a.a.createElement(se,{ariaLabel:"Age in years",value:t,onChange:n,min:0,max:18,units:"years ="}),a.a.createElement(se,{ariaLabel:"Age in months",value:o,onChange:r,min:0,max:216,units:"months"}))}var ge=Object(d.a)({warning:{color:"red"}});function he(e){var t=e.weight,n=e.onChange,o=ge();return a.a.createElement("div",null,a.a.createElement(M.a,null,"Weight"),a.a.createElement(se,{ariaLabel:"Weight in kg",value:t,onChange:n,min:0,max:200,step:.1,units:"kg"}),t>50?a.a.createElement("span",{className:o.warning},"[>50kg: consider using adult dosing]"):null)}var pe=Object(d.a)({prematureInput:{backgroundColor:"white",borderRadius:12,marginLeft:0,paddingRight:8}});function fe(e){var t=e.years,n=e.onYearsChange,o=e.months,r=e.onMonthsChange,i=e.weight,u=e.onWeightChange,c=e.premature,m=e.onPrematureChange,l=pe();return a.a.createElement(C,{variant:"beige",pad:!0},a.a.createElement(de,{years:t,onYearsChange:n,months:o,onMonthsChange:r}),a.a.createElement(he,{weight:i,onChange:u}),a.a.createElement(k.a,{className:l.prematureInput,control:a.a.createElement(I.a,{checked:c,name:"Premature",onChange:function(e,t){return m(t)}}),label:"Premature"}))}var we=new Set,ve={},be=Object(d.a)({divider:{marginBottom:20},sticky:{backgroundColor:"lightgreen",bottom:12,height:60,margin:"0 auto",padding:12,position:"fixed",right:12,textAlign:"center",verticalAlign:"middle",width:240,zIndex:1},title:{paddingBottom:12,paddingTop:12}});function Ie(){var e=Object(o.useState)(!1),t=Object(c.a)(e,2),n=t[0],r=t[1],i=Object(o.useState)(null),s=Object(c.a)(i,2),d=s[0],f=s[1],w=Object(o.useRef)(null),v=Object(o.useRef)(null);Object(o.useEffect)((function(){var e=new IntersectionObserver((function(e){e[0].isIntersecting?r(!0):r(!1)}),{threshold:1,rootMargin:"48px"});w.current=e}),[]),Object(o.useEffect)((function(){var e=w.current;return d&&e.observe(d),function(){d&&e.unobserve(d)}}),[d]);var b=Object(o.useState)(1.5),I=Object(c.a)(b,2),E=I[0],V=I[1],y=Object(o.useState)(18),C=Object(c.a)(y,2),x=C[0],O=C[1],k=Object(o.useState)(6.9),S=Object(c.a)(k,2),j=S[0],P=S[1],N=Object(o.useState)(we),R=Object(c.a)(N,2),A=R[0],L=R[1],B=Object(o.useState)(ve),T=Object(c.a)(B,2),z=T[0],D=T[1],W=Object(o.useState)(!1),H=Object(c.a)(W,2),Q=H[0],G=H[1],q=be();return a.a.createElement(a.a.Fragment,null,a.a.createElement(h.a,{maxWidth:!1},a.a.createElement(M.a,{className:q.title,variant:"h6"},"Pediatrica"),a.a.createElement("div",null,a.a.createElement(fe,{years:E,onYearsChange:function(e){V(e),O(null===e?null:12*e)},months:x,onMonthsChange:function(e){O(e),V(null===e?null:e/12)},weight:j,onWeightChange:P,premature:Q,onPrematureChange:G}),a.a.createElement(ce,{age:E,weight:j,premature:Q})),a.a.createElement(p.a,{className:q.divider}),a.a.createElement(F,{categories:m,onChange:function(e,t,n){var o=new Set(A),a=Object(u.a)({},z);n?(o.add(l(e,t)),a.hasOwnProperty(e)?a[e]+=1:a[e]=1):(o.delete(l(e,t)),a[e]-=1),L(o),D(a)}}),a.a.createElement(p.a,{className:q.divider,ref:v}),a.a.createElement("div",{ref:f},a.a.createElement(M.a,{className:q.divider},"DISCLAIMER: All content on this site is for informational purposes only. It remains the clinician's responsibility to consider the appropriateness of interventions in the context of each patient's clinical circumstances. The creators of this website make no representations as to the accuracy or completeness of any information on this site. The information on this site is not guaranteed to be accurate or up-to-date. The creators will not be liable for any errors or omissions in this information nor for the availability of this information. The creators will not be liable for any losses, injuries, or damages from the display or use of this information. Any information on this site should NOT be used as a substitute for the advice of an appropriately qualified and licensed physician or other health care provider."),j>50?a.a.createElement("h2",null,"Weight ",">"," 50kg: consider using adult dosing instead of dosing displayed below"):null,a.a.createElement(K,{catCounts:z,categories:m,medIdSet:A,age:E,weight:j}))),!n&&A.size>0?a.a.createElement(g.a,{variant:"contained",className:q.sticky,onClick:function(){var e;e=v,window.scrollTo(0,e.current.offsetTop)}},"Show Dosages"):null)}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[54,1,2]]]);
//# sourceMappingURL=main.34c69ff6.chunk.js.map