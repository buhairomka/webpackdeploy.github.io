(self.webpackChunk_5=self.webpackChunk_5||[]).push([[87],{87:(e,l,r)=>{"use strict";r.r(l),r.d(l,{default:()=>t});var n=r(617);const t=function(e){let l=document.querySelector("main .container");document.querySelector("header").innerHTML="",fetch("https://server-for-okr.herokuapp.com/").then((e=>(console.log(e),e.json()))).then((r=>{if(e&&-1!==["sneakers","athletic","slides"].indexOf(e))l.innerHTML=(0,n.Z)("h3",e.toUpperCase())+(0,n.Z)("div",(0,n.Z)("div",(0,n.Z)("div",null,"wrapper"),"carousel"),`catalog ${e}`),r[e].forEach((e=>{l.querySelector(".wrapper").innerHTML+=(0,n.Z)("div",(0,n.Z)("a",(0,n.Z)("img",null,null,{src:e.img,alt:e.model}),null,{href:e.url})+(0,n.Z)("br")+(0,n.Z)("h2",e.brand)+(0,n.Z)("br")+(0,n.Z)("h3",e.model)+(0,n.Z)("br")+(0,n.Z)("p",e.price),"item",null,"item_"+e.id)}));else{console.log(r),l.innerHTML=(0,n.Z)("a",(0,n.Z)("h2","SNEAKERS"),null,{href:"#catalog/sneakers"})+(0,n.Z)("div",(0,n.Z)("div",(0,n.Z)("div",null,"wrapper"),"carousel"),"catalog sneakers")+(0,n.Z)("a",(0,n.Z)("h2","ATHLETIC"),null,{href:"#catalog/athletic"})+(0,n.Z)("div",(0,n.Z)("div",(0,n.Z)("div",null,"wrapper"),"carousel"),"catalog athletic")+(0,n.Z)("a",(0,n.Z)("h2","SLIDES"),null,{href:"#catalog/slides"})+(0,n.Z)("div",(0,n.Z)("div",(0,n.Z)("div",null,"wrapper"),"carousel"),"catalog slides");for(let e in r)r[e].forEach((r=>{"sneakers"!==e&&"athletic"!==e&&"slides"!==e||(l.querySelector("."+e+" .wrapper").innerHTML+=(0,n.Z)("div",(0,n.Z)("a",(0,n.Z)("img",null,null,{src:r.img,alt:r.model}),null,{href:r.url})+(0,n.Z)("br")+(0,n.Z)("h2",r.brand)+(0,n.Z)("br")+(0,n.Z)("h3",r.model)+(0,n.Z)("br")+(0,n.Z)("p",r.price),"item",null,"item_"+r.id))}))}return l}))}},617:(e,l,r)=>{"use strict";r.d(l,{Z:()=>n});const n=function(e,l=null,r=null,n=null,t=null){let a=document.createElement(e);if(r&&r.split(" ").forEach((e=>{a.classList.add(e)})),l&&(a.innerHTML=l),t&&(a.id=t),n)for(let e in n)a.setAttribute(e,n[e]);return a.outerHTML}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly81Ly4vdmlld3MvY2F0YWxvZy52aWV3LmpzIiwid2VicGFjazovLzUvLi92aWV3cy9jcmVhdG9yLmpzIl0sIm5hbWVzIjpbInZpZXdOYW1lIiwibWFpbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImpzb24iLCJkYXRhIiwiaW5kZXhPZiIsInRvVXBwZXJDYXNlIiwiZm9yRWFjaCIsInByb2R1Y3QiLCJkYXRhS2V5IiwidGFnIiwiY29udGVudCIsInNldF9jbGFzcyIsInNldF9hdHRyIiwic2V0aWQiLCJlbCIsImNyZWF0ZUVsZW1lbnQiLCJzcGxpdCIsImNsYXNzbmFtZSIsImNsYXNzTGlzdCIsImFkZCIsImlkIiwia2V5Iiwic2V0QXR0cmlidXRlIiwib3V0ZXJIVE1MIl0sIm1hcHBpbmdzIjoiK0hBMEdBLFFBdkdBLFNBQWNBLEdBQ1YsSUFBSUMsRUFBT0MsU0FBU0MsY0FBYyxtQkFDbENELFNBQVNDLGNBQWMsVUFBVUMsVUFBWSxHQUc3Q0MsTUFBTSx5Q0FFREMsTUFBTUMsSUFDSEMsUUFBUUMsSUFBSUYsR0FDTEEsRUFBU0csVUFFbkJKLE1BQU1LLElBRUgsR0FBS1gsSUFBdUUsSUFBM0QsQ0FBQyxXQUFZLFdBQVksVUFBVVksUUFBUVosR0FtRHhEQyxFQUFLRyxXQUNELE9BQVcsS0FBTUosRUFBU2EsZ0JBQ3RCLE9BQVcsT0FDUCxPQUFXLE9BQ1AsT0FBVyxNQUFPLEtBQU0sV0FDdEIsWUFDTixXQUFXYixLQUd2QlcsRUFBS1gsR0FBVWMsU0FBU0MsSUFDcEJkLEVBQUtFLGNBQWMsWUFBWUMsWUFDM0IsT0FBVyxPQUNQLE9BQVcsS0FBSyxPQUFXLE1BQU8sS0FBTSxLQUFNLENBQzFDLElBQU9XLEVBQWEsSUFDcEIsSUFBT0EsRUFBZSxRQUN0QixLQUFNLENBQUMsS0FBUUEsRUFBYSxPQUM1QixPQUFXLE9BQ1gsT0FBVyxLQUFNQSxFQUFlLFFBQ2hDLE9BQVcsT0FDWCxPQUFXLEtBQU1BLEVBQWUsUUFDaEMsT0FBVyxPQUNYLE9BQVcsSUFBS0EsRUFBZSxPQUVqQyxPQUFRLEtBQU0sUUFBVUEsRUFBWSxXQTFFMEIsQ0FDNUVQLFFBQVFDLElBQUlFLEdBQ1pWLEVBQUtHLFdBQ0QsT0FBVyxLQUFJLE9BQVcsS0FBTSxZQUFZLEtBQUssQ0FBQyxLQUFPLHVCQUN6RCxPQUFXLE9BQ1AsT0FBVyxPQUNQLE9BQVcsTUFBTyxLQUFNLFdBQ3RCLFlBQ04scUJBQ0osT0FBVyxLQUFJLE9BQVcsS0FBTSxZQUFZLEtBQUssQ0FBQyxLQUFPLHVCQUN6RCxPQUFXLE9BQ1AsT0FBVyxPQUNQLE9BQVcsTUFBTyxLQUFNLFdBQ3RCLFlBQ04scUJBQ0osT0FBVyxLQUFJLE9BQVcsS0FBTSxVQUFVLEtBQUssQ0FBQyxLQUFPLHFCQUN2RCxPQUFXLE9BQ1AsT0FBVyxPQUNQLE9BQVcsTUFBTyxLQUFNLFdBQ3RCLFlBQ04sa0JBR1IsSUFBSyxJQUFJWSxLQUFXTCxFQUVoQkEsRUFBS0ssR0FBU0YsU0FBU0MsSUFDSCxhQUFaQyxHQUFzQyxhQUFaQSxHQUFzQyxXQUFaQSxJQUNwRGYsRUFBS0UsY0FBYyxJQUFNYSxFQUFVLGFBQWFaLFlBQzVDLE9BQVcsT0FDUCxPQUFXLEtBQUssT0FBVyxNQUFPLEtBQU0sS0FBTSxDQUMxQyxJQUFPVyxFQUFhLElBQ3BCLElBQU9BLEVBQWUsUUFDdEIsS0FBTSxDQUFDLEtBQVFBLEVBQWEsT0FDaEMsT0FBVyxPQUNYLE9BQVcsS0FBTUEsRUFBZSxRQUNoQyxPQUFXLE9BQ1gsT0FBVyxLQUFNQSxFQUFlLFFBQ2hDLE9BQVcsT0FDWCxPQUFXLElBQUtBLEVBQWUsT0FFN0IsT0FBUSxLQUFNLFFBQVVBLEVBQVksUUE0QzlELE9BQU9kLE8sNENDN0VuQixRQXJCQSxTQUFvQmdCLEVBQUtDLEVBQVUsS0FBTUMsRUFBWSxLQUFNQyxFQUFXLEtBQU1DLEVBQVEsTUFDaEYsSUFBSUMsRUFBS3BCLFNBQVNxQixjQUFjTixHQWFoQyxHQVpJRSxHQUNXQSxFQUFVSyxNQUFNLEtBQ3RCVixTQUFTVyxJQUNWSCxFQUFHSSxVQUFVQyxJQUFJRixNQUdyQlAsSUFDQUksRUFBR2xCLFVBQVljLEdBRWZHLElBQ0FDLEVBQUdNLEdBQUtQLEdBRVJELEVBQ0EsSUFBSyxJQUFJUyxLQUFPVCxFQUNaRSxFQUFHUSxhQUFhRCxFQUFLVCxFQUFTUyxJQUd0QyxPQUFPUCxFQUFHUyIsImZpbGUiOiI4Ny5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRE9NY3JlYXRvciBmcm9tICcuL2NyZWF0b3IuanMnO1xuXG5cbmZ1bmN0aW9uIHZpZXcodmlld05hbWUpIHtcbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4gLmNvbnRhaW5lcicpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpLmlubmVySFRNTCA9ICcnO1xuXG5cbiAgICBmZXRjaCgnaHR0cHM6Ly9zZXJ2ZXItZm9yLW9rci5oZXJva3VhcHAuY29tLycsKVxuICAgICAgICAvL2h0dHBzOi8vYXF1ZW91cy1zaGVsZi01NDg0OC5oZXJva3VhcHAuY29tL1xuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG5cbiAgICAgICAgICAgIGlmICghdmlld05hbWUgfHwgWydzbmVha2VycycsICdhdGhsZXRpYycsICdzbGlkZXMnXS5pbmRleE9mKHZpZXdOYW1lKSA9PT0gKC0xKSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgIG1haW4uaW5uZXJIVE1MID0gKFxuICAgICAgICAgICAgICAgICAgICBET01jcmVhdG9yKCdhJyxET01jcmVhdG9yKCdoMicsICdTTkVBS0VSUycpLG51bGwseydocmVmJzonI2NhdGFsb2cvc25lYWtlcnMnfSkgK1xuICAgICAgICAgICAgICAgICAgICBET01jcmVhdG9yKCdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgRE9NY3JlYXRvcignZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBET01jcmVhdG9yKCdkaXYnLCBudWxsLCAnd3JhcHBlcicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLCAnY2Fyb3VzZWwnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdjYXRhbG9nIHNuZWFrZXJzJykgK1xuICAgICAgICAgICAgICAgICAgICBET01jcmVhdG9yKCdhJyxET01jcmVhdG9yKCdoMicsICdBVEhMRVRJQycpLG51bGwseydocmVmJzonI2NhdGFsb2cvYXRobGV0aWMnfSkgK1xuICAgICAgICAgICAgICAgICAgICBET01jcmVhdG9yKCdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgRE9NY3JlYXRvcignZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBET01jcmVhdG9yKCdkaXYnLCBudWxsLCAnd3JhcHBlcicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLCAnY2Fyb3VzZWwnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdjYXRhbG9nIGF0aGxldGljJykgK1xuICAgICAgICAgICAgICAgICAgICBET01jcmVhdG9yKCdhJyxET01jcmVhdG9yKCdoMicsICdTTElERVMnKSxudWxsLHsnaHJlZic6JyNjYXRhbG9nL3NsaWRlcyd9KSArXG4gICAgICAgICAgICAgICAgICAgIERPTWNyZWF0b3IoJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICBET01jcmVhdG9yKCdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERPTWNyZWF0b3IoJ2RpdicsIG51bGwsICd3cmFwcGVyJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAsICdjYXJvdXNlbCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2NhdGFsb2cgc2xpZGVzJylcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgZGF0YUtleSBpbiBkYXRhKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgZGF0YVtkYXRhS2V5XS5mb3JFYWNoKChwcm9kdWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YUtleSA9PT0gJ3NuZWFrZXJzJyB8fCBkYXRhS2V5ID09PSAnYXRobGV0aWMnIHx8IGRhdGFLZXkgPT09ICdzbGlkZXMnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpbi5xdWVyeVNlbGVjdG9yKCcuJyArIGRhdGFLZXkgKyAnIC53cmFwcGVyJykuaW5uZXJIVE1MICs9IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRE9NY3JlYXRvcignZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERPTWNyZWF0b3IoJ2EnLCBET01jcmVhdG9yKCdpbWcnLCBudWxsLCBudWxsLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NyYyc6IHByb2R1Y3RbJ2ltZyddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhbHQnOiBwcm9kdWN0Wydtb2RlbCddXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgbnVsbCwgeydocmVmJzogcHJvZHVjdFsndXJsJ119KSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBET01jcmVhdG9yKCdicicpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERPTWNyZWF0b3IoJ2gyJywgcHJvZHVjdFsnYnJhbmQnXSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRE9NY3JlYXRvcignYnInKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBET01jcmVhdG9yKCdoMycsIHByb2R1Y3RbJ21vZGVsJ10pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERPTWNyZWF0b3IoJ2JyJykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRE9NY3JlYXRvcigncCcsIHByb2R1Y3RbJ3ByaWNlJ10pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyArIERPTWNyZWF0b3IoJ2EnLCd2aWV3JywnaXRlbV9idXR0b24nLG51bGwsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLCAnaXRlbScsIG51bGwsICdpdGVtXycgKyBwcm9kdWN0WydpZCddKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIG1haW4uaW5uZXJIVE1MID0gKFxuICAgICAgICAgICAgICAgICAgICBET01jcmVhdG9yKCdoMycsIHZpZXdOYW1lLnRvVXBwZXJDYXNlKCkpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIERPTWNyZWF0b3IoJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRE9NY3JlYXRvcignZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRE9NY3JlYXRvcignZGl2JywgbnVsbCwgJ3dyYXBwZXInKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsICdjYXJvdXNlbCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBjYXRhbG9nICR7dmlld05hbWV9YClcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgZGF0YVt2aWV3TmFtZV0uZm9yRWFjaCgocHJvZHVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBtYWluLnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJykuaW5uZXJIVE1MICs9IChcbiAgICAgICAgICAgICAgICAgICAgICAgIERPTWNyZWF0b3IoJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRE9NY3JlYXRvcignYScsIERPTWNyZWF0b3IoJ2ltZycsIG51bGwsIG51bGwsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NyYyc6IHByb2R1Y3RbJ2ltZyddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYWx0JzogcHJvZHVjdFsnbW9kZWwnXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBudWxsLCB7J2hyZWYnOiBwcm9kdWN0Wyd1cmwnXX0pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRE9NY3JlYXRvcignYnInKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERPTWNyZWF0b3IoJ2gyJywgcHJvZHVjdFsnYnJhbmQnXSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBET01jcmVhdG9yKCdicicpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRE9NY3JlYXRvcignaDMnLCBwcm9kdWN0Wydtb2RlbCddKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERPTWNyZWF0b3IoJ2JyJykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBET01jcmVhdG9yKCdwJywgcHJvZHVjdFsncHJpY2UnXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gKyBET01jcmVhdG9yKCdhJywndmlldycsJ2l0ZW1fYnV0dG9uJyxudWxsLClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAsICdpdGVtJywgbnVsbCwgJ2l0ZW1fJyArIHByb2R1Y3RbJ2lkJ10pXG4gICAgICAgICAgICAgICAgICAgICk7XG5cblxuICAgICAgICAgICAgICAgIH0pO1xuXG5cblxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbWFpbjtcbiAgICAgICAgfSk7XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCB2aWV3O1xuIiwiLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpLmFwcGVuZENoaWxkKHBhcnNlci5wYXJzZUZyb21TdHJpbmcoRE9NY3JlYXRvcignZGl2JywgJ3NtdGgnLCksICd0ZXh0L2h0bWwnKS5xdWVyeVNlbGVjdG9yKCd0YWdfb2ZfRE9NX2VsZW1lbnQnKSlcblxuZnVuY3Rpb24gRE9NY3JlYXRvcih0YWcsIGNvbnRlbnQgPSBudWxsLCBzZXRfY2xhc3MgPSBudWxsLCBzZXRfYXR0ciA9IG51bGwsIHNldGlkID0gbnVsbCkge1xuICAgIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICBpZiAoc2V0X2NsYXNzKSB7XG4gICAgICAgIGxldCB0ZW1wID0gc2V0X2NsYXNzLnNwbGl0KCcgJyk7XG4gICAgICAgIHRlbXAuZm9yRWFjaCgoY2xhc3NuYW1lKSA9PiB7XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKGNsYXNzbmFtZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoY29udGVudCkge1xuICAgICAgICBlbC5pbm5lckhUTUwgPSBjb250ZW50O1xuICAgIH1cbiAgICBpZiAoc2V0aWQpIHtcbiAgICAgICAgZWwuaWQgPSBzZXRpZDtcbiAgICB9XG4gICAgaWYgKHNldF9hdHRyKSB7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBzZXRfYXR0cikge1xuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKGtleSwgc2V0X2F0dHJba2V5XSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVsLm91dGVySFRNTDtcbn1cbmV4cG9ydCBkZWZhdWx0IERPTWNyZWF0b3I7XG4vLyBsZXQgYnV0dG9ubiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXRhbG9nJylcbi8vXG4vLyBidXR0b25uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbi8vICAgICBmZXRjaCgnaHR0cHM6Ly9hcXVlb3VzLXNoZWxmLTU0ODQ4Lmhlcm9rdWFwcC5jb20vJywpXG4vLyAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuLy8gICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuLy8gICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbi8vICAgICAgICAgfSlcbi8vICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuLy8gICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4gLmNvbnRhaW5lciAuY2F0YWxvZy5qdXN0X2Ryb3BwZWQnKSA9PSBudWxsKXtcbi8vICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluIC5jb250YWluZXInKVxuLy8gICAgICAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQocGFyc2VyLnBhcnNlRnJvbVN0cmluZyhcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIERPTWNyZWF0b3IoJ2RpdicsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRE9NY3JlYXRvcignZGl2Jyxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRE9NY3JlYXRvcignZGl2JyxudWxsLCd3cmFwcGVyJylcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLFwiY2Fyb3VzZWxcIiksXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhdGFsb2cganVzdF9kcm9wcGVkJyApXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAsICd0ZXh0L2h0bWwnKS5xdWVyeVNlbGVjdG9yKCcuY2F0YWxvZycpKVxuLy8gICAgICAgICAgICAgfVxuLy9cbi8vICAgICAgICAgICAgIGRhdGFbJ2p1c3RfZHJvcHBlZCddLmZvckVhY2goKHByb2R1Y3QpID0+e1xuLy8gICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJylcbi8vICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHBhcnNlci5wYXJzZUZyb21TdHJpbmcoIERPTWNyZWF0b3IoJ2RpdicsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBET01jcmVhdG9yKCdpbWcnLG51bGwsbnVsbCx7J3NyYyc6cHJvZHVjdFsnaW1nJ10sJ2FsdCc6cHJvZHVjdFsnbW9kZWwnXX0pK1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgRE9NY3JlYXRvcignYnInKStcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIERPTWNyZWF0b3IoJ2gzJyxwcm9kdWN0WydicmFuZCddKStcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIERPTWNyZWF0b3IoJ2JyJykrXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBET01jcmVhdG9yKCdoMicscHJvZHVjdFsnbW9kZWwnXSkrXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBET01jcmVhdG9yKCdicicpK1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgRE9NY3JlYXRvcigncCcscHJvZHVjdFsncHJpY2UnXSksJ2l0ZW0nLG51bGwsJ2l0ZW1fJytwcm9kdWN0WydpZCddKSwgJ3RleHQvaHRtbCcpXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignZGl2JykpXG4vLyAgICAgICAgICAgICB9KVxuLy8gICAgICAgICB9KVxuLy8gKVxuLy9cbi8qIC9nZXQgaW5mb1xcICovXG4vL2ZldGNoKCcvZ2V0JykudGhlbigocmVzcG9uc2UpPT57XG4vLyAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuLy8gICAgIHJldHVybiByZXNwb25zZS5qc29uKCl9KS50aGVuKChkYXRhKT0+e1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhkYXRhW1wianVzdF9kcm9wcGVkXCJdKX0pXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=