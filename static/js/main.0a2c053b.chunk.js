(this.webpackJsonphomepage=this.webpackJsonphomepage||[]).push([[0],{41:function(e,a,t){e.exports=t(98)},46:function(e,a,t){},48:function(e,a,t){},98:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(3),o=t.n(l),i=(t(46),t(4)),c=t(5),s=t(8),m=t(6),d=t(9),u=(t(47),t(48),t(30)),h=t.n(u),p=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={width:"0px",height:"0px"},t.updateWindowDimensions=function(){t.setState({width:"".concat(window.innerWidth,"px"),height:"".concat(window.innerHeight,"px")})},t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"render",value:function(){var e=this.state,a=e.width,t=e.height;return console.log(a,t),r.a.createElement(h.a,Object.assign({},this.state,{params:{particles:{number:{value:60,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"}},opacity:{value:.4,random:!0,anim:{enable:!0,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!0,speed:2,size_min:.1,sync:!1}},line_linked:{enable_auto:!0,distance:100,color:"#fff",opacity:1,width:1,condensed_mode:{enable:!1,rotateX:600,rotateY:600}},move:{enable:!0,speed:1.3,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0},onclick:{enable:!1},resize:!0}},retina_detect:!0}}))}}]),a}(n.Component),f=t(100).a.Search,g=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).textInput=r.a.createRef(),t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){}},{key:"handleKeyPress",value:function(e){e.preventDefault(),"s"===e.key&&console.log("U pressed s dude")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f,{placeholder:"Google Search",onSearch:function(e){return window.open("https://www.google.com/search?q=".concat(e),"_blank")},style:{position:"absolute",left:"35%",width:"30%",marginTop:"3.5%",textAlign:"center"},enterButton:!0,autoFocus:!0}))}}]),a}(n.Component),E={root:{fontFamily:"sans-serif",textAlign:"center",background:"#222",display:"flex",zIndex:"0",position:"absolute",width:"100vw",height:"100vh"}},v=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).renderWelcomeMsg=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,a=e.getHours(),t=12,n=17;return a>=t&&a<=n?"afternoon":a>=n?"evening":"morning"},t.state={date:new Date,dayPortion:t.renderWelcomeMsg()},t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"clockUpdate",value:function(){var e=this;setInterval((function(){e.setState({date:new Date,dayPortion:e.renderWelcomeMsg()})}),1e3)}},{key:"render",value:function(){var e=this.state.date;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{style:E.root},r.a.createElement(p,null)),r.a.createElement("div",{className:"welcomeHeader"},r.a.createElement("div",{className:"welcomeTime"},"Good ",this.state.dayPortion,", Aniket."),r.a.createElement("div",{className:"dateLabel"},e.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit"})," ","- ",e.toDateString())),r.a.createElement("div",{className:"linksParentContainer"},r.a.createElement("div",{className:"work linkContainer"},r.a.createElement("div",{className:"groupHeader workHeader"},r.a.createElement("div",{className:"headerText orangeHeader"},"Work."),r.a.createElement("hr",{className:"orangeLine"})),r.a.createElement("ul",{className:"links"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://todoist.com/app",target:"_blank",rel:"noopener noreferrer"},"Todoist")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://classroom.google.com/",target:"_blank",rel:"noopener noreferrer"},"Google Classroom")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://sis-jeffersonco.chalkableinformationnow.com/InformationNow/Login.aspx?ReturnUrl=%2fInformationNow%2fParentPortal%2fSti.Home.UI.Web%2fStudent%2fGrades.aspx",target:"_blank",rel:"noopener noreferrer"},"iNow")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://calendar.google.com/calendar/r",target:"_blank",rel:"noopener noreferrer"},"Calendar")))),r.a.createElement("div",{className:"collegeApps linkContainer"},r.a.createElement("div",{className:"groupHeader collegeAppsHeader"},r.a.createElement("div",{className:"headerText blueHeader"},"UAB."),r.a.createElement("hr",{className:"blueLine"})),r.a.createElement("ul",{className:"links"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://uab.instructure.com/",target:"_blank",rel:"noopener noreferrer"},"Canvas")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://rc.uab.edu/pun/sys/dashboard",target:"_blank",rel:"noopener noreferrer"},"Cheaha")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://mie-graphs.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"},"Mie Extinction")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://outlook.office365.com/owa/?realm=uab.edu&path=/mail/inbox",target:"_blank",rel:"noopener noreferrer"},"UAB Email")))),r.a.createElement("div",{className:"messaging linkContainer"},r.a.createElement("div",{className:"groupHeader messagingHeader"},r.a.createElement("div",{className:"headerText greenHeader"},"Messaging."),r.a.createElement("hr",{className:"greenLine"})),r.a.createElement("ul",{className:"links"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://messages.android.com/",target:"_blank",rel:"noopener noreferrer"},"Messenger")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://duo.google.com/",target:"_blank",rel:"noopener noreferrer"},"Duo")),r.a.createElement("li",null,r.a.createElement("a",{href:"slack://",target:"_blank",rel:"noopener noreferrer"},"ForensX Slack")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://gmail.com/",target:"_blank",rel:"noopener noreferrer"},"Gmail")))),r.a.createElement("div",{className:"socialMedia linkContainer"},r.a.createElement("div",{className:"groupHeader socialMediaHeader"},r.a.createElement("div",{className:"headerText redHeader"},"Social Media."),r.a.createElement("hr",{className:"redLine"})),r.a.createElement("ul",{className:"links"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.reddit.com/",target:"_blank",rel:"noopener noreferrer"},"Reddit")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.reddit.com/r/news/",target:"_blank",rel:"noopener noreferrer"},"r/News")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://medium.com/",target:"_blank",rel:"noopener noreferrer"},"Medium")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"},"GitHub")))),r.a.createElement("div",null,r.a.createElement(g,null))),this.clockUpdate())}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[41,1,2]]]);
//# sourceMappingURL=main.0a2c053b.chunk.js.map