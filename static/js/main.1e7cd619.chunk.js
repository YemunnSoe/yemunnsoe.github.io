(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),l=a(19),r=a.n(l),s=a(28),c=a(3),o=a(57),m=a(11),d=a(37),u=a(71),p=a(10),g=a(38),f=(a(43),a(23)),h={sidebarData:[{id:"menu-0",title:"Home",path:"/",icon:i.a.createElement(p.d,{size:35}),className:"nav-text"},{id:"menu-1",title:"Projects",path:"/projects",icon:i.a.createElement(p.e,{size:35}),className:"nav-text"},{id:"menu-2",title:"Blogs",path:"/blogs",icon:i.a.createElement(f.b,{size:35}),className:"nav-text"},{id:"menu-3",title:"Skills",path:"/skills",icon:i.a.createElement(p.a,{size:35}),className:"nav-text"}]},E=function(e){return i.a.createElement(g.a,null,h.sidebarData.map(function(t){return i.a.createElement(g.a.Item,{key:t.id},i.a.createElement(g.a.Link,{as:s.b,to:t.path,onClick:e.onSelection},t.icon,i.a.createElement("span",null,t.title)))}))},b=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],l=t[1];return i.a.createElement(d.a,{className:"navbar",expand:"sm",expanded:a},i.a.createElement(u.a,{fluid:!0},i.a.createElement(d.a.Toggle,{"aria-controls":"responsive-navbar-nav",onClick:function(){return l(!a&&"expanded")}},i.a.createElement(p.f,{className:"toggle-icon"})),i.a.createElement(d.a.Collapse,{id:"responsive-navbar-nav"},i.a.createElement(E,{onSelection:function(){l(!1)}}))))},k=a(102),y=a(103),v=a(73),N=a.n(v),w=function(e){return i.a.createElement(N.a,{options:{strings:e.titles,autoStart:!0,loop:!0,deleteSpeed:80}})},x=function(e){var t=e.about.start,a=e.about.exit;return i.a.createElement("section",{id:"about"},i.a.createElement("div",{className:"about-card",style:{backgroundColor:"#263238"}},i.a.createElement("div",{className:"card-header"},i.a.createElement("span",{className:"iconify","data-icon":"emojione:red-circle","data-inline":"false"})," ","\xa0"," ",i.a.createElement("span",{className:"iconify","data-icon":"twemoji:yellow-circle","data-inline":"false"})," ","\xa0"," ",i.a.createElement("span",{className:"iconify","data-icon":"twemoji:green-circle","data-inline":"false"})),i.a.createElement("div",{className:"card-body font-trebuchet text-justify ml-3 mr-3",style:{height:"auto",fontSize:"132%",lineHeight:"150%",backgroundColor:"#F6F6F6",color:"#8e8d8a",padding:"2rem"}},t,i.a.createElement("br",null),a)))},_=a(72),S=(a(78),a(48)),z=(a(80),function(e){return i.a.createElement("div",{className:"tags"},e.tags.map(function(t,a){return i.a.createElement(S.a,{pill:!0,className:"tag mr-2 mb-2",key:e.id+a,bg:"secondary"},t)}))}),A=(a(82),function(e){return i.a.createElement(_.VerticalTimeline,null,e.items.map(function(e){return i.a.createElement(_.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:e.date,icon:e.icon,key:e.id},i.a.createElement("h2",{className:"vertical-timeline-element-title"},i.a.createElement("strong",null,e.title)),i.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},e.company),i.a.createElement("p",{className:"vertical-timeline-element-description"},e.description),i.a.createElement(z,{id:e.id,tags:e.tags}))}))}),j=a(49),P=a(74),I=a(26),B={greeting:i.a.createElement("h1",{className:"heading"},"Hi! I'm ",i.a.createElement("strong",{className:"main-name"}," Ye Munn Soe")),titles:["Business Intelligence Specialist","Analytics Manager","Data Architect","Instructor & Coach","Burmese"],about:{start:"A seasoned Business Intelligence (BI) Specialist and a leader with 8 years of experience in analytics,strategy consulting and data ecosystems. Harness data and technical skills, combined with strongbusiness knowledge, to drive informed business strategies. ",exit:"Demonstrate a proven ability to foster a data-driven culture within the organization by successfullypromoting a community of practice. Proactively lead efforts to enhance the organization's data literacyand promote a data-driven culture through various capacity-building programs. Mastered in presentingcomplex data insights in a clear, compelling manner to various audiences."},workTimeline:[{id:"work-4",title:"Analytics Business Partner",company:"Proximity Designs [2020-present]",description:"Developed cutting-edge solutions by leveraging data-driven insights in close collaborationwith teams from Digital Marketing, Contact Center, Product & Service Design, Agronomy, andDigital Initiative. This collaborative effort resulted in enhancing the accessibility ofproduct and market knowledge for 2 million subscribers.",date:"2020-present",icon:i.a.createElement(j.a,null),tags:["powerbi","snowflake","python","knime","s3","sap","manychat"]},{id:"work-3",title:"Analytics Manager",company:"Proximity Designs [2019-2020]",description:"Automated data processing, analysis and visualization using various technologies \u2013 Power BI,SAP (ERP), MySQL, Snowflake (Cloud Data Warehouse), KNIME (ETL/ELT), and Python, resulting in 4 majordashboards and BI ecosystems for digital channels. Worked on data management, data governance, datademocratization projects and maintained an enterprise data architecture roadmap for accelerating Digital Transformation.",icon:i.a.createElement(I.c,null),tags:["powerbi","snowflake","python","knime","s3","sap","manychat"]},{id:"work-2",title:"Research Associate",company:"Thura Swiss [2018 - 2019]",description:"Led market and consumer research, designed a brand performance insights service and provided insights to clients in multiple industries. Led a team of data analysts to meet deadlines. Spearheaded the creation of a monthly subscription-based industry and brand insight service, contributing to $80,000 in company revenue in the first year of launch.",icon:i.a.createElement(P.a,null),tags:["Project Management","Business Intelligence","Business Strategy","Data Modeling","Quantitative Analytics","Market Research"]},{id:"work-1",title:"Data Architect & Business Intelligence",company:"Hello Cab [2016 - 2018]",description:"Engaged with stakeholders to identify key data points, analyzed operational data to extract insights for a data-led business strategy, and designed and maintained the information management system for the app-based transportation service. Contributed to economic progress by enabling 200,000 monthly job opportunities for drivers and ensuring a safe and comfortable transportation experience for 8,000 passengers daily.",date:"2016-2018",icon:i.a.createElement(f.a,null),tags:["etl ","mssql","Data Architecture","Data Ecosystem","Data Modeling","Data Analysis"]},{id:"work-0",title:"Strategic Planning Associate",company:"Irrawaddy Green Towers [2013 - 2016]",description:"Collected land and legal documents, developed cost analysis for government tenders under guidance, managed budgets, organized site acquisition projects, prioritized and developed SOPs, and excelled in managing teams to meet deadlines.",date:"2013-2016",icon:i.a.createElement(f.a,null),tags:["Strategic Planning","Business Strategy","Business Analysis","Business Planning"]}]},D=(a(84),function(){return i.a.createElement("section",null,i.a.createElement(u.a,{fluid:!0,className:"home-content",id:"home"},i.a.createElement(k.a,null,i.a.createElement(y.a,{className:"home-header"},i.a.createElement("div",null,B.greeting),i.a.createElement("div",{style:{textAlign:"center"}},i.a.createElement(w,{titles:B.titles})),i.a.createElement("div",null,i.a.createElement(x,{about:B.about}))))),i.a.createElement(u.a,{fluid:!0,className:"resume-content",id:"resume"},i.a.createElement("div",{className:"col-md-8 mx-auto"},i.a.createElement(A,{items:B.workTimeline}))))}),M=(a(30),function(e){return i.a.createElement("ul",{className:"card__footer"},e.item.links.map(function(t){return i.a.createElement("li",{key:e.item.id+t.name,title:t.name},i.a.createElement("a",{className:"card__btn",href:t.url,target:e.item.target,rel:"noopener noreferrer"},t.icon))}))}),C=function(e){return i.a.createElement("div",{className:"card",key:e.item.id},i.a.createElement("a",{style:{display:"flex"},href:e.item.links[0].url,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("div",{style:{backgroundImage:"url('"+e.item.image+"')"},className:"card__img",alt:e.item.title})),i.a.createElement("div",{className:"card__body"},i.a.createElement("h2",{className:"card__title"},i.a.createElement("strong",null,e.item.title)),i.a.createElement("p",{className:"card__description"},e.item.description),i.a.createElement("hr",{className:"card__line"}),i.a.createElement(M,{item:e.item})))},T=a(24),L=a(29),G=a(41),O=a.n(G),R=a(50),Y=a.n(R),U=a(51),W=a.n(U),J=a(52),Z=a.n(J),H=a(53),K=a.n(H),Q=a(54),V=a.n(Q),F=[{id:"project-5",title:"Sklearn Genetic Opt",links:[{name:"repo",url:"https://github.com/rodrigo-arenas/Sklearn-genetic-opt",icon:i.a.createElement(p.c,null)},{name:"fork",url:"https://github.com/rodrigo-arenas/Sklearn-genetic-opt/fork",icon:i.a.createElement(T.a,null)},{name:"subscription",url:"https://github.com/rodrigo-arenas/Sklearn-genetic-opt/subscription",icon:i.a.createElement(p.b,null)},{name:"docs",url:"https://sklearn-genetic-opt.readthedocs.io/en/stable/",icon:i.a.createElement(L.a,null)}],image:O.a,description:"scikit-learn models hyperparameters tuning and feature selection, using evolutionary algorithms.",target:"_blank"},{id:"project-4",title:"Graphs Embeddings",links:[{name:"repo",url:"https://github.com/rodrigo-arenas/Graph-Embeddings",icon:i.a.createElement(p.c,null)},{name:"fork",url:"https://github.com/rodrigo-arenas/Graph-Embeddings/fork",icon:i.a.createElement(T.a,null)},{name:"subscription",url:"https://github.com/rodrigo-arenas/Graph-Embeddings/subscription",icon:i.a.createElement(p.b,null)},{name:"docs",url:"https://graph-embeddings.readthedocs.io/",icon:i.a.createElement(L.a,null)}],image:Y.a,description:"Graph embeddings for downstream tasks.",target:"_blank"},{id:"project-3",title:"Kafkaml Anomalies",links:[{name:"repo",url:"https://github.com/rodrigo-arenas/kafkaml-anomaly-detection",icon:i.a.createElement(p.c,null)},{name:"fork",url:"https://github.com/rodrigo-arenas/kafkaml-anomaly-detection/fork",icon:i.a.createElement(T.a,null)},{name:"subscription",url:"https://github.com/rodrigo-arenas/kafkaml-anomaly-detection/subscription",icon:i.a.createElement(p.b,null)}],image:W.a,description:"Project for real-time anomaly detection using kafka and python.",target:"_blank"},{id:"project-2",title:"Myanmar agriculture landscape",links:[{name:"repo",url:"https://github.com/YemunnSoe/Data_Perspective_on_Myanmar_Agriculture",icon:i.a.createElement(p.c,null)},{name:"fork",url:"https://github.com/YemunnSoe/Data_Perspective_on_Myanmar_Agriculture/fork",icon:i.a.createElement(T.a,null)},{name:"subscription",url:"https://github.com/YemunnSoe/Data_Perspective_on_Myanmar_Agriculture/subscription",icon:i.a.createElement(p.b,null)},{name:"docs",url:"https://pyworkforce.readthedocs.io/en/stable/",icon:i.a.createElement(L.b,null)}],image:V.a,description:"Data Perspective on Myanmar Agriculture.",target:"_blank"},{id:"project-1",title:"Agronomy Bot",links:[{name:"repo",url:"https://github.com/YemunnSoe/AgronomyBot",icon:i.a.createElement(p.c,null)},{name:"fork",url:"https://github.com/YemunnSoe/AgronomyBot/fork",icon:i.a.createElement(T.a,null)},{name:"subscription",url:"https://github.com/YemunnSoe/AgronomyBot/subscription",icon:i.a.createElement(p.b,null)},{name:"docs",url:"https://app.powerbi.com/view?r=eyJrIjoiM2YyYTNhNjYtMzA1OC00YmZiLWJlNDAtOTE2NWM5NGIwZDI3IiwidCI6IjU3ZjM5OThiLTM5ZTUtNDI0ZC1iNzBkLWQwZDBkMjA2MGMzOCIsImMiOjEwfQ%3D%3D",icon:i.a.createElement(L.b,null)}],image:K.a,description:"Timely and cost-effective farming advice directly to farmers\u2019 smartphones.",target:"_blank"},{id:"project-0",title:"Customer Experience Center",links:[{name:"repo",url:"https://github.com/YemunnSoe/customer-experience-center",icon:i.a.createElement(p.c,null)},{name:"fork",url:"https://github.com/YemunnSoe/customer-experience-center/fork",icon:i.a.createElement(T.a,null)},{name:"subscription",url:"https://github.com/YemunnSoe/customer-experience-center/subscription",icon:i.a.createElement(p.b,null)}],image:Z.a,description:"A guide for creating a data ecosystem for CEC",target:"_blank"}],q=function(){return i.a.createElement("div",{className:"wrapper"},F.map(function(e){return i.a.createElement(C,{item:e})}))},X=a(42),$=(a(44),function(e){return i.a.createElement("ul",{className:"skill-icons"},e.config.map(function(e,t){return i.a.createElement("li",{className:e.className,key:e.id},e.icon,i.a.createElement("p",{className:e.className+"-text"},e.text))}))}),ee=a(9),te=a(55),ae={mainSkills:[{id:"skills-0",className:"skill-icon",icon:i.a.createElement(ee.m,{size:50}),text:"Python"},{id:"skills-1",className:"skill-icon",icon:i.a.createElement(ee.k,{size:50}),text:"Postgres"},{id:"skills-2",className:"skill-icon",icon:i.a.createElement(ee.i,{size:50}),text:"MSSQL"},{id:"skills-3",className:"skill-icon",icon:i.a.createElement(ee.d,{size:50}),text:"Docker"},{id:"skills-4",className:"skill-icon",icon:i.a.createElement(ee.a,{size:50}),text:"AWS"},{id:"skills-5",className:"skill-icon",icon:i.a.createElement(I.a,{size:50}),text:"Git"},{id:"skills-5",className:"skill-icon",icon:i.a.createElement(ee.c,{size:50}),text:"Asana"},{id:"skills-5",className:"skill-icon",icon:i.a.createElement(ee.j,{size:50}),text:"Miro"}],complementarySkills:[{id:"skills-5",className:"skill-icon",icon:i.a.createElement(te.a,{size:50}),text:"MySQL"},{id:"skills-6",className:"skill-icon",icon:i.a.createElement(ee.o,{size:50}),text:"Tableau"},{id:"skills-7",className:"skill-icon",icon:i.a.createElement(ee.p,{size:50}),text:"Bash"},{id:"skills-8",className:"skill-icon",icon:i.a.createElement(ee.n,{size:50}),text:"Snowflake"},{id:"skills-9",className:"skill-icon",icon:i.a.createElement(ee.b,{size:50}),text:"Airflow"},{id:"skills-10",className:"skill-icon",icon:i.a.createElement(ee.f,{size:50}),text:"Json"},{id:"skills-14",className:"skill-icon",icon:i.a.createElement(ee.g,{size:50}),text:"Jupyter"},{id:"skills-15",className:"skill-icon",icon:i.a.createElement(ee.l,{size:50}),text:"Power BI"},{id:"skills-16",className:"skill-icon",icon:i.a.createElement(ee.e,{size:50}),text:"Google Analytics"}]},ne=function(){return i.a.createElement("section",{id:"skills"},i.a.createElement("div",null,i.a.createElement("div",{className:"skills-div"},i.a.createElement("h1",{className:"main-skills-h1"},i.a.createElement("span",{className:"main-skills"},i.a.createElement("strong",null,"Main Skills & Tools"))),i.a.createElement(X.a,{effect:"bounce"},i.a.createElement("div",{className:"main-skills"},i.a.createElement($,{config:ae.mainSkills}))),i.a.createElement(X.a,{effect:"bounce"},i.a.createElement("div",{className:"complementary-skills"},i.a.createElement($,{config:ae.complementarySkills}))))))},ie=(a(91),[{id:"blog-8",title:"Exploring the Nexus of Business Intelligence and Data Science (3)",links:[{name:"article",url:"https://medium.com/geekculture/exploring-the-nexus-of-business-intelligence-and-data-science-3-54df66f0e18a",icon:i.a.createElement(ee.h,null)}],image:"https://miro.medium.com/v2/resize:fit:1400/0*Oc-dt_t1Yfq7HQYX",description:"Use linear programming to minimize the difference between required and scheduled resources.",target:"_blank"},{id:"blog-7",title:"Exploring the Nexus of Business Intelligence and Data Science (2)",links:[{name:"article",url:"https://medium.com/geekculture/exploring-the-nexus-of-business-intelligence-and-data-science-2-34e6d240104f",icon:i.a.createElement(ee.h,null)}],image:"https://miro.medium.com/v2/resize:fit:4800/format:webp/1*s0nuyDmOVTg5XbzjBBdMsg.png",description:"Let's explore some methods to adapt your parameters over time.",target:"_blank"},{id:"blog-6",title:"Exploring the Nexus of Business Intelligence and Data Science (1)",links:[{name:"article",url:"https://medium.com/geekculture/exploring-the-nexus-of-business-intelligence-and-data-science-1-f063c3f0853a",icon:i.a.createElement(ee.h,null)}],image:"https://miro.medium.com/v2/resize:fit:4800/0*1H9DeTLC-JH9PT4F",description:"Learn how to make feature selection for machine learning algorithms using evolutionary models.",target:"_blank"},{id:"blog-5",title:"[My BI Path | Part-3] Unlocking the World of Business Intelligence: A Guide to a Rewarding Career",links:[{name:"article",url:"https://medium.com/geekculture/my-bi-path-part-3-unlocking-the-world-of-business-intelligence-a-guide-to-a-rewarding-career-2bcfd5aa6f26",icon:i.a.createElement(ee.h,null)},{name:"repo",url:"https://github.com/rodrigo-arenas/kafkaml-anomaly-detection",icon:i.a.createElement(p.c,null)}],image:"https://miro.medium.com/v2/resize:fit:4800/0*b7FA3snOsRlG-27V",description:"Learn how to make predictions over streaming data coming from Kafka using Python.",target:"_blank"},{id:"blog-4",title:"[My BI Path | Part-2] Unlocking the World of Business Intelligence: A Guide to a Rewarding Career",links:[{name:"article",url:"https://medium.com/geekculture/my-bi-path-part-2-unlocking-the-world-of-business-intelligence-a-guide-to-a-rewarding-career-af032a1ca5d0",icon:i.a.createElement(ee.h,null)}],image:"https://miro.medium.com/v2/resize:fit:4800/format:webp/1*UhLRZJvuUZu7tK-dfZSvHg.jpeg",description:"Get your model machine learning model to production as a containerized API.",target:"_blank"},{id:"blog-3",title:"[My BI Path | Part-1] Unlocking the World of Business Intelligence: A Guide to a Rewarding Career",links:[{name:"article",url:"https://medium.com/geekculture/unlocking-the-world-of-business-intelligence-a-guide-to-a-rewarding-career-edbece0fef07",icon:i.a.createElement(ee.h,null)}],image:"https://miro.medium.com/v2/resize:fit:4800/format:webp/1*RZmm9EtxWjRR7vbLvlAmjw.jpeg",description:"Let's discuss the ideas behind how to search in a smart fashion the hyperparameters for your machine learning models.",target:"_blank"},{id:"blog-2",title:"Reading Note 1 | Measure What Matters",links:[{name:"article",url:"https://medium.com/@yemunnsoe/reading-note-1-measure-what-matters-78ab109ef1b9",icon:i.a.createElement(ee.h,null)}],image:"https://miro.medium.com/v2/resize:fit:4800/format:webp/1*93njGKWNKPI0Ri7fff9s9w.jpeg",description:"Scikit-learn hyperparameters tuning with evolutionary algorithms and cross-validation.",target:"_blank"},{id:"blog-1",title:"End-to-End BI Project: Strategy, Steps, Processes, and Tools [Part-02]",links:[{name:"article",url:"https://yemunnsoe.medium.com/end-to-end-bi-project-strategy-steps-processes-and-tools-part-02-7c132c93a163",icon:i.a.createElement(ee.h,null)}],image:"https://miro.medium.com/v2/resize:fit:4800/format:webp/0*_gaOpJcftOG55s3_.jpg",description:"Enable collaboration across data scientists; gain control over different models versions, multiple experiments within the same problem, and models management and deployment.",target:"_blank"},{id:"blog-0",title:"End-to-End BI Project: Strategy, Steps, Processes, and Tools [Part-01]",links:[{name:"article",url:"https://medium.com/geekculture/end-to-end-bi-project-strategy-steps-processes-and-tools-part-1-1f8c3f8cb00c",icon:i.a.createElement(ee.h,null)}],image:"https://miro.medium.com/v2/resize:fit:4800/format:webp/1*UJXKJTClQrSirgS3nGR-3A.png",description:"Learn how to ....",target:"_blank"}]),le=function(){return i.a.createElement("div",{className:"wrapper"},ie.map(function(e){return i.a.createElement(C,{item:e})}))};var re=function(){var e=Object(c.e)().pathname;return Object(n.useEffect)(function(){window.scrollTo(0,0)},[e]),null},se={icons:[{id:"footer-0",url:"https://github.com/YemunnSoe",className:"social-icon",target:"_blank",icon:i.a.createElement(p.c,{size:50})},{id:"footer-1",url:"https://www.linkedin.com/in/yemunn-soe-bi-specialist/",className:"social-icon",target:"_blank",icon:i.a.createElement(I.b,{size:50})},{id:"footer-2",url:"https://yemunnsoe.medium.com/",className:"social-icon",target:"_blank",icon:i.a.createElement(f.b,{size:50})}]},ce=(a(46),function(){return i.a.createElement("div",{className:"social-icons"},se.icons.map(function(e){return i.a.createElement("a",{href:e.url,className:e.className,key:e.id,style:{color:"#f5f5f5"},target:e.target,rel:"noopener noreferrer"},e.icon)}))}),oe=function(){return i.a.createElement(u.a,{fluid:!0,className:"footer"},i.a.createElement(k.a,null,i.a.createElement(y.a,{className:"footer-body"},i.a.createElement(ce,null))))};a(93),a(95);"undefined"!==typeof Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_TRACKING_ID&&o.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_TRACKING_ID);var me=function(){return i.a.createElement(s.a,null,i.a.createElement("div",{className:"App"},i.a.createElement(b,null),i.a.createElement(re,null),i.a.createElement(c.c,null,i.a.createElement(c.a,{path:"/",exact:!0,element:i.a.createElement(D,null)}),i.a.createElement(c.a,{path:"/projects",exact:!0,element:i.a.createElement(q,null)}),i.a.createElement(c.a,{path:"/blogs",exact:!0,element:i.a.createElement(le,null)}),i.a.createElement(c.a,{path:"/skills",exact:!0,element:i.a.createElement(ne,null)})),i.a.createElement(oe,null)))};a(97);r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(me,null)),document.getElementById("root"))},30:function(e,t,a){},41:function(e,t,a){e.exports=a.p+"static/media/sklearn_genetic_opt.23273bc8.png"},43:function(e,t,a){},44:function(e,t,a){},46:function(e,t,a){},50:function(e,t,a){e.exports=a.p+"static/media/graph_embeddings.fed0850a.png"},51:function(e,t,a){e.exports=a.p+"static/media/kafkaml.9c0f9867.png"},52:function(e,t,a){e.exports=a.p+"static/media/cec.0dabac43.jpg"},53:function(e,t,a){e.exports=a.p+"static/media/AgronomyBot.f000160c.jpeg"},54:function(e,t,a){e.exports=a.p+"static/media/data-Perspective.87de58f8.jpeg"},59:function(e,t,a){e.exports=a(100)},80:function(e,t,a){},82:function(e,t,a){},84:function(e,t,a){},91:function(e,t,a){e.exports=a.p+"static/media/fastapi_sklearn.f7d742fc.png"},93:function(e,t,a){},97:function(e,t,a){}},[[59,2,1]]]);
//# sourceMappingURL=main.1e7cd619.chunk.js.map