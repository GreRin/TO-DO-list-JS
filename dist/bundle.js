!function(n){var r={};function l(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=n,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(n,r,function(e){return t[e]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l(l.s=0)}([function(e,t,n){"use strict";function o(){var e=new Date;return"".concat(e.getHours(),":").concat(e.getMinutes(),"   ").concat(e.getDate(),".").concat(e.getMonth(),".").concat(e.getFullYear())}function i(e,t,n,r,l){var a=Math.floor(16777215*Math.random()).toString(16),o=document.createElement("li");o.className="list-group-item d-flex w-100 mb-2",o.style.background=l;var d=document.createElement("div");d.className="w-100 mr-2";var c=document.createElement("div");c.className="d-flex w-100 justify-content-between";var i=document.createElement("h5");i.className="mb-1",i.innerText=e;var m=document.createElement("div"),u=document.createElement("small");u.className="mr-2",u.innerText=t;var s=document.createElement("small");s.innerText=n;var p=document.createElement("p");p.className="mb-1 w-100",p.innerText=r;var h=document.createElement("input");h.className="form-control",h.setAttribute("placeholder",r),h.classList.toggle("hidden"),h.id="inputText ".concat(a);var v=document.createElement("div");v.className="dropdown m-2 dropleft";var g=document.createElement("button");g.className="btn btn-secondary h-100",g.type="button",g.id="dropdownMenuItem1",g.setAttribute("data-toggle","dropdown"),g.setAttribute("aria-haspopup","true"),g.setAttribute("aria-expanded","false");var T=document.createElement("i");T.className="fas fa-ellipsis-v";var f=document.createElement("div");f.className="dropdown-menu p-2 flex-column",f.setAttribute("aria-labelledby","dropdownMenuItem1");var y=document.createElement("button");y.className="btn btn-success w-100 complete",y.setAttribute("type","button"),y.id="complete",y.innerText="Complete";var E=document.createElement("button");E.className="btn btn-info w-100 my-2 edit",E.setAttribute("type","button"),E.id="edit",E.innerText="Edit";var b=document.createElement("button");return b.className="btn btn-danger w-100 delete",b.setAttribute("type","button"),b.id="delete",b.innerText="Delete",g.appendChild(T),f.appendChild(y),f.appendChild(E),f.appendChild(b),v.appendChild(g),v.appendChild(f),m.appendChild(u),m.appendChild(s),c.appendChild(i),c.appendChild(m),d.appendChild(c),d.appendChild(p),d.appendChild(h),o.appendChild(d),o.appendChild(v),o}function u(e){var t=[],n=[],r=[],l=[],a=[];if(null!==e){for(var o=0;o<e.children.length;o++)n.push(e.children[o].getElementsByTagName("p")[0].innerText),t.push(e.children[o].getElementsByTagName("h5")[0].innerText),r.push(e.children[o].children[0].children[0].children[1].children[0].innerText),l.push(e.children[o].children[0].children[0].children[1].children[1].innerText),a.push(e.children[o].style.backgroundColor);localStorage.setItem("completed",JSON.stringify({completedTasksTitleArr:t,completedTasksArr:n,completedPriority:r,completedData:l,completedColor:a}))}}function s(e){var t=[],n=[],r=[],l=[],a=[];if(null!==e){for(var o=0;o<e.children.length;o++)n.push(e.children[o].getElementsByTagName("p")[0].innerText),t.push(e.children[o].getElementsByTagName("h5")[0].innerText),r.push(e.children[o].children[0].children[0].children[1].children[0].innerText),l.push(e.children[o].children[0].children[0].children[1].children[1].innerText),a.push(e.children[o].style.backgroundColor);localStorage.setItem("current",JSON.stringify({currentTasksTitleArr:t,currentTasksArr:n,currentPriority:r,currentData:l,currentColor:a}))}}function l(){var e=this.parentNode.parentNode.parentNode;e.parentNode.removeChild(e),u(document.getElementById("completedItem")),s(document.getElementById("currentTasks"));var t=document.getElementById("countToDo"),n=Number(t.innerHTML.slice(1,-1))-1;t.innerHTML="(".concat(n,")")}function a(){var e=this.parentNode.parentNode.parentNode,n=e.querySelector("p"),r=e.querySelector("input");e.firstElementChild.firstElementChild.lastElementChild.lastElementChild.innerText=o(),n.classList.add("hidden"),r.classList.remove("hidden"),r.addEventListener("keydown",function(e){if(13===e.keyCode){var t=r.value;r.classList.add("hidden"),n.innerText=t,n.classList.remove("hidden")}r.removeEventListener("keydown",e,!0)},!0),document.addEventListener("click",function(e){if("INPUT"!==e.target.tagName){var t=r.value;n.classList.remove("hidden"),n.textContent=t,r.classList.add("hidden")}document.removeEventListener("click",e,!0)},!0)}function d(){var e=this.parentNode.parentNode.parentNode,t=e.parentNode,n=this.parentNode.parentNode,r=n.firstChild,l=n.lastChild;n.removeChild(r),n.removeChild(l),t.removeChild(e);var a=document.createElement("button");a.className="btn btn-danger w-100 delete",a.setAttribute("type","button"),a.id="delete",a.innerText="Delete";var o=document.getElementById("completedTasks");o.appendChild(e),u(o),s(document.getElementById("currentTasks"));var d=document.getElementById("countToDo"),c=Number(d.innerHTML.slice(1,-1))-1;d.innerHTML="(".concat(c,")");var i=document.getElementById("countCompleted"),m=Number(i.innerHTML.slice(1,-1))+1;i.innerHTML="(".concat(m,")")}function m(e){var t=e.querySelector("button.complete"),n=e.querySelector("button.edit"),r=e.querySelector("button.delete");t.onclick=d,n.onclick=a,r.onclick=l}n.r(t);var c=document.getElementById("currentTasks"),p=document.getElementById("inputTitle"),h=document.getElementById("inputText");function r(){var e=o(),t="#".concat(Math.floor(16777215*Math.random()).toString(16)),n=document.getElementById("Low").checked?"Low priority":document.getElementById("Medium").checked?"Medium priority":"High priority";if(p.value&&h.value){var r=i(p.value,n,e,h.value,t);c.appendChild(r),m(r),p.value="",t=e=h.value="",s(c)}var l=document.getElementById("countToDo"),a=Number(l.innerHTML.slice(1,-1))+1;l.innerHTML="(".concat(a,")")}function v(){var e=this.parentNode.parentNode;e.parentNode.removeChild(e),u(document.getElementById("completedTasks"));var t=document.getElementById("countCompleted"),n=Number(t.innerHTML.slice(1,-1))-1;t.innerHTML="(".concat(n,")")}function g(e){e.querySelector("button.delete").onclick=v}function T(e,t,n,r,l){var a=document.createElement("li");a.className="list-group-item d-flex w-100 mb-2",a.style.background=l;var o=document.createElement("div");o.className="w-100 mr-2";var d=document.createElement("div");d.className="d-flex w-100 justify-content-between";var c=document.createElement("h5");c.className="mb-1",c.innerText=e;var i=document.createElement("div"),m=document.createElement("small");m.className="mr-2",m.innerText=t;var u=document.createElement("small");u.innerText=n;var s=document.createElement("p");s.className="mb-1 w-100",s.innerText=r;var p=document.createElement("input");p.className="form-control",p.setAttribute("placeholder",r),p.classList.toggle("hidden"),p.id="inputText";var h=document.createElement("div");h.className="dropdown m-2 dropleft";var v=document.createElement("button");return v.className="btn btn-danger w-100 delete",v.setAttribute("type","button"),v.id="delete",v.innerText="Delete",h.appendChild(v),i.appendChild(m),i.appendChild(u),d.appendChild(c),d.appendChild(i),o.appendChild(d),o.appendChild(s),o.appendChild(p),a.appendChild(o),a.appendChild(h),a}function f(e){var t=document.getElementById("bg-color"),n=e.target.value;t.style.backgroundColor=n,localStorage.setItem("colorTheme",JSON.stringify({colorThemePicker:n}))}!function(){localStorage.setItem("colorTheme",JSON.stringify({colorTheme:"#f6f8f8ff"})),document.getElementById("parent").addEventListener("change",f)}(),(localStorage.getItem("current")||localStorage.getItem("completed"))&&(function(){var e=JSON.parse(localStorage.getItem("colorTheme"));document.getElementById("bg-color").style.backgroundColor=e.colorThemePicker;var t=JSON.parse(localStorage.getItem("current"));document.getElementById("countToDo").innerText="(".concat(t.currentTasksTitleArr.length,")");for(var n=document.getElementById("currentTasks"),r=0;r<t.currentTasksTitleArr.length;r++){var l=t.currentTasksTitleArr[r],a=t.currentTasksArr[r],o=i(l,t.currentPriority[r],t.currentData[r],a,t.currentColor[r]);n.appendChild(o),m(o)}}(),function(){var e=JSON.parse(localStorage.getItem("completed"));document.getElementById("countCompleted").innerText="(".concat(e.completedTasksTitleArr.length,")");for(var t=document.getElementById("completedTasks"),n=0;n<e.completedTasksTitleArr.length;n++){var r=e.completedTasksTitleArr[n],l=e.completedTasksArr[n],a=T(r,e.completedPriority[n],e.completedData[n],l,e.completedColor[n]);t.appendChild(a),g(a)}}(),function(){var c=JSON.parse(localStorage.getItem("current"));document.getElementById("decrease").addEventListener("click",function(){for(var e=document.getElementById("currentTasks"),t=e.lastElementChild,n=0;n<e.length;n++){var r=e.firstElementChild;e.appendChild(r),e.remove(r)}for(;t;)e.removeChild(t),t=e.lastElementChild;for(var l=c.currentTasksTitleArr.length-1;0<l+1;l--){var a=c.currentTasksTitleArr[l],o=c.currentTasksArr[l],d=i(a,c.currentPriority[l],c.currentData[l],o,c.currentColor[l]);e.appendChild(d),m(d)}}),document.getElementById("increase").addEventListener("click",function(){for(var e=document.getElementById("currentTasks"),t=e.lastElementChild;t;)e.removeChild(t),t=e.lastElementChild;for(var n=0;n<c.currentTasksTitleArr.length;n++){var r=c.currentTasksTitleArr[n],l=c.currentTasksArr[n],a=i(r,c.currentPriority[n],c.currentData[n],l,c.currentColor[n]);e.appendChild(a),m(a)}})}()),function(){document.getElementById("addNewTask").onclick=r}()}]);