(this.webpackJsonphomepage=this.webpackJsonphomepage||[]).push([[0],{13:function(e,a,r){},14:function(e,a,r){},15:function(e,a,r){"use strict";r.r(a);var t=r(0),n=r.n(t),l=r(2),o=r.n(l),c=(r(13),r(3)),s=r(4),i=r(6),m=r(5),d=r(7),g=(r(14),function(e){function a(){var e,r;Object(c.a)(this,a);for(var t=arguments.length,n=new Array(t),l=0;l<t;l++)n[l]=arguments[l];return(r=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).renderWelcomeMsg=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,a=e.getHours(),r=12,t=17;return a>=r&&a<=t?"afternoon":a>=t?"evening":"morning"},r.state={date:new Date,dayPortion:r.renderWelcomeMsg()},r}return Object(d.a)(a,e),Object(s.a)(a,[{key:"clockUpdate",value:function(){var e=this;setInterval((function(){e.setState({date:new Date,dayPortion:e.renderWelcomeMsg()})}),1e3)}},{key:"render",value:function(){var e=this.state.date;return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"welcomeHeader"},n.a.createElement("div",{className:"welcomeTime"},"Good ",this.state.dayPortion,", Aniket."),n.a.createElement("div",{className:"dateLabel"},e.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit"})," - ",e.toDateString())),n.a.createElement("div",{className:"linksParentContainer"},n.a.createElement("div",{className:"work linkContainer"},n.a.createElement("div",{className:"groupHeader workHeader"},n.a.createElement("div",{className:"headerText orangeHeader"},"Work."),n.a.createElement("hr",{className:"orangeLine"})),n.a.createElement("ul",{className:"links"},n.a.createElement("li",null,n.a.createElement("a",{href:"https://classroom.google.com/",target:"_blank",rel:"noopener noreferrer"},"Google Classroom")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://sis-jeffersonco.chalkableinformationnow.com/InformationNow/Login.aspx?ReturnUrl=%2fInformationNow%2fParentPortal%2fSti.Home.UI.Web%2fStudent%2fGrades.aspx",target:"_blank",rel:"noopener noreferrer"},"iNow")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://rc.uab.edu/pun/sys/dashboard",target:"_blank",rel:"noopener noreferrer"},"Cheaha")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://calendar.google.com/calendar/r",target:"_blank",rel:"noopener noreferrer"},"Calendar")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"},"GitHub")))),n.a.createElement("div",{className:"collegeApps linkContainer"},n.a.createElement("div",{className:"groupHeader collegeAppsHeader"},n.a.createElement("div",{className:"headerText blueHeader"},"College Applications."),n.a.createElement("hr",{className:"blueLine"})),n.a.createElement("ul",{className:"links"},n.a.createElement("li",null,n.a.createElement("a",{href:"https://apply.commonapp.org/login",target:"_blank",rel:"noopener noreferrer"},"CommonApp")),n.a.createElement("li",null,n.a.createElement("a",{href:"http://mycoalition.org/",target:"_blank",rel:"noopener noreferrer"},"CoalitionApp")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.thesaurus.com/",target:"_blank",rel:"noopener noreferrer"},"Thesaurus")))),n.a.createElement("div",{className:"messaging linkContainer"},n.a.createElement("div",{className:"groupHeader messagingHeader"},n.a.createElement("div",{className:"headerText greenHeader"},"Messaging."),n.a.createElement("hr",{className:"greenLine"})),n.a.createElement("ul",{className:"links"},n.a.createElement("li",null,n.a.createElement("a",{href:"https://messages.android.com/",target:"_blank",rel:"noopener noreferrer"},"Messenger")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://duo.google.com/",target:"_blank",rel:"noopener noreferrer"},"Duo")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://forensx.slack.com/",target:"_blank",rel:"noopener noreferrer"},"ForensX Slack")))),n.a.createElement("div",{className:"socialMedia linkContainer"},n.a.createElement("div",{className:"groupHeader socialMediaHeader"},n.a.createElement("div",{className:"headerText redHeader"},"Social Media."),n.a.createElement("hr",{className:"redLine"})),n.a.createElement("ul",{className:"links"},n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.reddit.com/",target:"_blank",rel:"noopener noreferrer"},"Reddit")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.reddit.com/r/news/",target:"_blank",rel:"noopener noreferrer"},"r/News")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://medium.com/",target:"_blank",rel:"noopener noreferrer"},"Medium"))))),this.clockUpdate())}}]),a}(t.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,a,r){e.exports=r(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.f82c4713.chunk.js.map