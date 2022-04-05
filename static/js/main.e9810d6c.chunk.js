(this.webpackJsonpsite=this.webpackJsonpsite||[]).push([[0],{33:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),a=n(12),s=n.n(a),r=(n(33),n(2)),o=n(3),j=n(5),d=n(4),b=n(8),l=n.n(b),h=n(7),u=(n(44),n(0)),p=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(e){return Object(u.jsxs)("div",{class:"about",children:[Object(u.jsx)("div",{class:"box",children:Object(u.jsx)(l.a,{children:"Hello, I'm Sarthak."})}),Object(u.jsx)("br",{}),Object(u.jsx)("div",{class:"content",children:Object(u.jsxs)(l.a,{children:[" ","I code websites, and I am exploring NLP.",Object(u.jsx)("br",{}),Object(u.jsx)("div",{class:"next",children:Object(u.jsx)(h.Link,{activeClass:"active",to:"experience",spy:!0,smooth:!0,duration:500,children:Object(u.jsx)("p",{children:"Go to Experience"})})})]})})]})}}]),n}(i.a.Component),O=p,x=(n(46),n(28));n(47);var v=function(e){var t=Object(c.useState)(!1),n=Object(x.a)(t,2),i=n[0],a=n[1],s=function(){a(!i)};return i?Object(u.jsxs)("div",{class:"info",children:[Object(u.jsx)("div",{class:"open",children:Object(u.jsx)("input",{type:"button",onClick:s,value:e.title+" @ "+e.location})}),Object(u.jsx)("p",{children:e.description}),Object(u.jsx)("h3",{children:e.date})]}):Object(u.jsxs)("div",{class:"info",children:[Object(u.jsx)("div",{class:"open",children:Object(u.jsx)("input",{type:"button",onClick:s,value:e.title+" @ "+e.location})}),Object(u.jsx)("h3",{children:e.date})]})},f=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{class:"experience",children:Object(u.jsxs)(l.a,{children:[Object(u.jsx)("h1",{children:"Experience"}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)(v,{title:"Software Developer Intern",location:"Codeucate",date:"July 2020 - January 2021",description:"At first, I helped develop the course material for the courses. Then, I moved into the website development team, where I worked on a django backend and also worked a chatbot for the site."}),Object(u.jsx)("br",{}),Object(u.jsx)(v,{title:"Project Lead",location:"Futurist Academy",description:"Worked on a lot of my fun projects in here. Made an attendance tracking site for clubs, a tiger graph solution for soccer match predictions, and learned a lot of web development skills.",date:"December 2020 - Present"}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("div",{class:"next",children:Object(u.jsx)(h.Link,{activeClass:"active",to:"education",spy:!0,smooth:!0,duration:500,children:Object(u.jsx)("p",{children:"Go to Education"})})})]})})}}]),n}(i.a.Component),m=f,g=[{name:"Attendance Tracker",description:"Built an attendance tracking site for clubs at my school. Being used by two clubs right with one of them having 30+ members.",image:"attender.png",link:"https://github.com/sarthyparty/attendance-tracker"},{name:"Soccer Match Predictions",description:"Used to TigerGraph to build a graph database trained with thousands of soccer matches. Then given a year, it is able to guess what the outcome of a match between two teams with a given year. This involved a lot of data processing in Jupyter Notebook using pandas as well.",image:"tg.png",link:"https://sarthavader.medium.com/predict-who-will-win-a-soccer-match-using-tigergraph-pandas-and-gsql-part-1-3-65c2fef665e"},{name:"Find My EP",description:"I formed and led a team to build a GPS app for my highschool. It is not yet available to download on the App Store. The path-finding algorithm is A star and I used SwiftUI and UIKit to create a visually-appealing UI.",image:"gps.png",link:"https://github.com/sarthyparty/Find-My-EP"}],y=(n(48),function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{class:"projects",children:[Object(u.jsx)("h1",{children:"Projects"}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),g.map((function(e){return Object(u.jsx)("div",{children:Object(u.jsx)(k,{project:e})})}))]})}}]),n}(i.a.Component));function k(e){return Object(u.jsx)("div",{class:"project",children:Object(u.jsxs)("a",{href:e.project.link,children:[Object(u.jsx)("div",{class:"image",children:Object(u.jsx)("img",{src:e.project.image,alt:e.project.name})}),Object(u.jsxs)("div",{class:"body",children:[Object(u.jsx)("h2",{children:e.project.name}),Object(u.jsx)("p",{children:e.project.description})]})]})})}var w=y;i.a.Component;n(49);var C=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{class:"education",children:[Object(u.jsx)("h1",{children:"Education"}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)(v,{title:"PSEO Student",location:"University of Minnesota",date:"Sept. 2021 - Present",description:"Took Computer Science, Math, and Economics courses as a highschool student."}),Object(u.jsx)("br",{}),Object(u.jsx)(v,{title:"Student",location:"Eden Prairie High School",date:"Sept. 2018 - Present",description:"Enjoyed AP Java, learned a lot of coding during COVID."}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("div",{class:"next",children:Object(u.jsx)(h.Link,{activeClass:"active",to:"projects",spy:!0,smooth:!0,duration:500,children:Object(u.jsx)("p",{children:"Go to Projects"})})})]})}}]),n}(i.a.Component),I=C,P=(n(50),n(27)),S=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(u.jsx)(P.a,{children:Object(u.jsxs)("div",{children:[Object(u.jsx)(O,{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)(m,{}),Object(u.jsx)(I,{}),Object(u.jsx)(w,{})]})})}}]),n}(i.a.Component),E=S,T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,58)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};s.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(E,{})}),document.getElementById("root")),T()}},[[56,1,2]]]);
//# sourceMappingURL=main.e9810d6c.chunk.js.map