(this["webpackJsonpto-do-app"]=this["webpackJsonpto-do-app"]||[]).push([[0],[,,,,,,,,function(t,n,e){t.exports={Main:"App_Main__HQkvd",List:"App_List__3E8wO"}},,function(t,n,e){t.exports={Together:"NewTask_Together__3r58j"}},function(t,n,e){t.exports={Input:"Input_Input__1BUHP"}},function(t,n,e){t.exports={Button:"Button_Button__exxO6"}},function(t,n,e){t.exports={Note:"Task_Note__36S89"}},,,,,function(t,n,e){},,function(t,n,e){"use strict";e.r(n);var s=e(1),a=e.n(s),o=e(9),i=e.n(o),c=(e(18),e(2)),u=e(3),r=e(4),d=e(6),k=e(5),l=e(8),p=e.n(l),j=e(10),h=e.n(j),f=e(11),b=e.n(f),O=e(0),T=function(t){var n=t.onInputFunction;return Object(O.jsx)("input",{type:"text",onChange:n,className:b.a.Input,placeholder:"Your new task..."})},v=e(12),x=e.n(v),g=function(t){var n=t.onClickFunction;return Object(O.jsx)("button",{onClick:n,className:x.a.Button,type:"submit",children:"Add"})},m=function(t){var n=t.onInputChange,e=t.onAddTask;return Object(O.jsxs)("div",{className:h.a.Together,children:[Object(O.jsx)(T,{onInputFunction:n}),Object(O.jsx)(g,{onClickFunction:e})]})},_=e(13),C=e.n(_),I=function(t){Object(d.a)(e,t);var n=Object(k.a)(e);function e(t){var s;return Object(u.a)(this,e),(s=n.call(this,t)).onEditTask=function(t){s.setState((function(n){return n.noteEdited===t?{noteEdited:null}:{noteEdited:t}}))},s.state={noteEdited:null,noteDone:null},s}return Object(r.a)(e,[{key:"render",value:function(){var t,n=this,e=this.props,s=e.id,a=e.task,o=e.editTask,i=e.deleteTask,c=e.doneTask;return t=this.state.noteEdited===s?Object(O.jsx)("input",{type:"text",value:a,onChange:function(t){return o(t,s)}}):Object(O.jsx)("span",{children:a}),Object(O.jsxs)("li",{className:C.a.Note,children:[Object(O.jsx)("input",{type:"checkbox",name:a,id:a,onClick:function(){return c(s)}}),t,Object(O.jsx)("button",{onClick:function(){return n.onEditTask(s)},children:this.state.noteEdited===s?"Done":"Edit"}),Object(O.jsx)("button",{onClick:function(){return i(s)},children:"X"})]})}}]),e}(s.Component),S=function(t){Object(d.a)(e,t);var n=Object(k.a)(e);function e(t){var s;return Object(u.a)(this,e),(s=n.call(this,t)).onInputChange=function(t){s.setState({inputTask:t.target.value})},s.onAddTask=function(){var t=s.state.inputTask;s.setState((function(n){return{tasks:[].concat(Object(c.a)(n.tasks),[t])}}))},s.onDeleteTask=function(t){var n=Object(c.a)(s.state.tasks).filter((function(n,e){return e!==t}));s.setState({tasks:n})},s.onEditTask=function(t,n){var e=Object(c.a)(s.state.tasks);e[n]=t.target.value,s.setState({tasks:e})},s.onDoneTask=function(t){var n=Object(c.a)(s.state.tasks),e=n[t],a=n.filter((function(n,e){return e!==t}));a.push(e),s.setState({tasks:a})},s.state={inputTask:"",tasks:[]},s}return Object(r.a)(e,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("savedTasks");t&&this.setState({tasks:JSON.parse(t)})}},{key:"componentDidUpdate",value:function(t){if(t.tasks!==this.state.tasks){var n=JSON.stringify(this.state.tasks);localStorage.setItem("savedTasks",n)}}},{key:"render",value:function(){var t,n=this;return t=this.state.tasks!==[]?this.state.tasks.map((function(t,e){return Object(O.jsx)(I,{id:e,task:t,editTask:n.onEditTask,deleteTask:n.onDeleteTask,doneTask:n.onDoneTask},e)})):Object(O.jsx)("div",{}),console.log(this.state.tasks),Object(O.jsxs)("main",{className:p.a.Main,children:[Object(O.jsx)(m,{onInputChange:this.onInputChange,onAddTask:this.onAddTask}),Object(O.jsx)("ul",{className:p.a.List,children:t})]})}}]),e}(a.a.Component),E=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,21)).then((function(n){var e=n.getCLS,s=n.getFID,a=n.getFCP,o=n.getLCP,i=n.getTTFB;e(t),s(t),a(t),o(t),i(t)}))};i.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(S,{})}),document.getElementById("root")),E()}],[[20,1,2]]]);
//# sourceMappingURL=main.d9436a8b.chunk.js.map