(self.webpackChunk_5=self.webpackChunk_5||[]).push([[590],{617:(e,l,r)=>{"use strict";r.d(l,{Z:()=>n});const n=function(e,l=null,r=null,n=null,t=null){let i=document.createElement(e);if(r&&r.split(" ").forEach((e=>{i.classList.add(e)})),l&&(i.innerHTML=l),t&&(i.id=t),n)for(let e in n)i.setAttribute(e,n[e]);return i.outerHTML}},590:(e,l,r)=>{"use strict";r.r(l),r.d(l,{default:()=>t});var n=r(617);const t=function(){let e=document.querySelector("main .container"),l=document.querySelector("header");fetch("https://server-for-okr.herokuapp.com/").then((e=>(console.log(e),e.json()))).then((r=>{l.innerHTML=(0,n.Z)("div",(0,n.Z)("div",(0,n.Z)("div",(0,n.Z)("div",null,"wrapper_slides")+(0,n.Z)("button","<","but",null,"left")+(0,n.Z)("button",">","but",null,"right"),"carousel"),"sales"),"container"),r.sale.forEach((e=>{l.querySelector(".wrapper_slides").innerHTML+=(0,n.Z)("div",(0,n.Z)("a",(0,n.Z)("img",null,null,{src:e.img})+(0,n.Z)("h3",e.slider_title),null,{href:e.url}),"item_sales")})),e.innerHTML=(0,n.Z)("h3","RECOMENDED")+(0,n.Z)("div",(0,n.Z)("div",(0,n.Z)("div",null,"wrapper"),"carousel"),"catalog slides"),r.slides.forEach((l=>{e.querySelector(".wrapper").innerHTML+=(0,n.Z)("div",(0,n.Z)("a",(0,n.Z)("img",null,null,{src:l.img,alt:l.model}),null,{href:l.url})+(0,n.Z)("br")+(0,n.Z)("h2",l.brand)+(0,n.Z)("br")+(0,n.Z)("h3",l.model)+(0,n.Z)("br")+(0,n.Z)("p",l.price),"item",null,"item_"+l.id)}))}))}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly81Ly4vdmlld3MvY3JlYXRvci5qcyIsIndlYnBhY2s6Ly81Ly4vdmlld3MvbWFpbi52aWV3LmpzIl0sIm5hbWVzIjpbInRhZyIsImNvbnRlbnQiLCJzZXRfY2xhc3MiLCJzZXRfYXR0ciIsInNldGlkIiwiZWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcGxpdCIsImZvckVhY2giLCJjbGFzc25hbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbm5lckhUTUwiLCJpZCIsImtleSIsInNldEF0dHJpYnV0ZSIsIm91dGVySFRNTCIsIm1haW4iLCJxdWVyeVNlbGVjdG9yIiwiaGVhZGVyIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwianNvbiIsImRhdGEiLCJzYWxlIiwiaW1nIiwic2xpZGVyX3RpdGxlIiwidXJsIiwicHJvZHVjdCJdLCJtYXBwaW5ncyI6InVHQXVCQSxRQXJCQSxTQUFvQkEsRUFBS0MsRUFBVSxLQUFNQyxFQUFZLEtBQU1DLEVBQVcsS0FBTUMsRUFBUSxNQUNoRixJQUFJQyxFQUFLQyxTQUFTQyxjQUFjUCxHQWFoQyxHQVpJRSxHQUNXQSxFQUFVTSxNQUFNLEtBQ3RCQyxTQUFTQyxJQUNWTCxFQUFHTSxVQUFVQyxJQUFJRixNQUdyQlQsSUFDQUksRUFBR1EsVUFBWVosR0FFZkcsSUFDQUMsRUFBR1MsR0FBS1YsR0FFUkQsRUFDQSxJQUFLLElBQUlZLEtBQU9aLEVBQ1pFLEVBQUdXLGFBQWFELEVBQUtaLEVBQVNZLElBR3RDLE9BQU9WLEVBQUdZLFksc0VDMERkLFFBM0VBLFdBQ0ksSUFBSUMsRUFBT1osU0FBU2EsY0FBYyxtQkFDOUJDLEVBQVNkLFNBQVNhLGNBQWMsVUFDcENFLE1BQU0seUNBRURDLE1BQU1DLElBQ0hDLFFBQVFDLElBQUlGLEdBQ0xBLEVBQVNHLFVBRW5CSixNQUFNSyxJQUNIUCxFQUFPUCxXQUNILE9BQVcsT0FDUCxPQUFXLE9BQ1AsT0FBVyxPQUNQLE9BQVcsTUFBTyxLQUFNLG1CQUN4QixPQUFXLFNBQVUsSUFBSyxNQUFPLEtBQU0sU0FDdkMsT0FBVyxTQUFVLElBQUssTUFBTyxLQUFNLFNBQ3ZDLFlBQ0YsU0FDTixhQUVSYyxFQUFLQyxLQUFLbkIsU0FBU21CLElBQ2ZSLEVBQU9ELGNBQWMsbUJBQW1CTixZQUNwQyxPQUFXLE9BQ1AsT0FBVyxLQUNQLE9BQVcsTUFBTyxLQUFNLEtBQU0sQ0FBQyxJQUFPZSxFQUFLQyxPQUN6QyxPQUFXLEtBQU1ELEVBQUtFLGNBQ3hCLEtBQU0sQ0FBQyxLQUFRRixFQUFLRyxNQUN4QixpQkFHWmIsRUFBS0wsV0FDRCxPQUFXLEtBQU0sZUFDakIsT0FBVyxPQUNQLE9BQVcsT0FDUCxPQUFXLE1BQU8sS0FBTSxXQUN0QixZQUNOLGtCQUdSYyxFQUFhLE9BQUVsQixTQUFTdUIsSUFDcEJkLEVBQUtDLGNBQWMsWUFBWU4sWUFDM0IsT0FBVyxPQUNQLE9BQVcsS0FBSyxPQUFXLE1BQU8sS0FBTSxLQUFNLENBQzFDLElBQU9tQixFQUFhLElBQ3BCLElBQU9BLEVBQWUsUUFDdEIsS0FBTSxDQUFDLEtBQVFBLEVBQWEsT0FDaEMsT0FBVyxPQUNYLE9BQVcsS0FBTUEsRUFBZSxRQUNoQyxPQUFXLE9BQ1gsT0FBVyxLQUFNQSxFQUFlLFFBQ2hDLE9BQVcsT0FDWCxPQUFXLElBQUtBLEVBQWUsT0FFN0IsT0FBUSxLQUFNLFFBQVVBLEVBQVkiLCJmaWxlIjoiNTkwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKS5hcHBlbmRDaGlsZChwYXJzZXIucGFyc2VGcm9tU3RyaW5nKERPTWNyZWF0b3IoJ2RpdicsICdzbXRoJywpLCAndGV4dC9odG1sJykucXVlcnlTZWxlY3RvcigndGFnX29mX0RPTV9lbGVtZW50JykpXG5cbmZ1bmN0aW9uIERPTWNyZWF0b3IodGFnLCBjb250ZW50ID0gbnVsbCwgc2V0X2NsYXNzID0gbnVsbCwgc2V0X2F0dHIgPSBudWxsLCBzZXRpZCA9IG51bGwpIHtcbiAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgaWYgKHNldF9jbGFzcykge1xuICAgICAgICBsZXQgdGVtcCA9IHNldF9jbGFzcy5zcGxpdCgnICcpO1xuICAgICAgICB0ZW1wLmZvckVhY2goKGNsYXNzbmFtZSkgPT4ge1xuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChjbGFzc25hbWUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gY29udGVudDtcbiAgICB9XG4gICAgaWYgKHNldGlkKSB7XG4gICAgICAgIGVsLmlkID0gc2V0aWQ7XG4gICAgfVxuICAgIGlmIChzZXRfYXR0cikge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gc2V0X2F0dHIpIHtcbiAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShrZXksIHNldF9hdHRyW2tleV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlbC5vdXRlckhUTUw7XG59XG5leHBvcnQgZGVmYXVsdCBET01jcmVhdG9yO1xuLy8gbGV0IGJ1dHRvbm4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0YWxvZycpXG4vL1xuLy8gYnV0dG9ubi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4vLyAgICAgZmV0Y2goJ2h0dHBzOi8vYXF1ZW91cy1zaGVsZi01NDg0OC5oZXJva3VhcHAuY29tLycsKVxuLy8gICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbi8vICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4vLyAgICAgICAgIH0pXG4vLyAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbi8vICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluIC5jb250YWluZXIgLmNhdGFsb2cuanVzdF9kcm9wcGVkJykgPT0gbnVsbCl7XG4vLyAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbiAuY29udGFpbmVyJylcbi8vICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHBhcnNlci5wYXJzZUZyb21TdHJpbmcoXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBET01jcmVhdG9yKCdkaXYnLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIERPTWNyZWF0b3IoJ2RpdicsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERPTWNyZWF0b3IoJ2RpdicsbnVsbCwnd3JhcHBlcicpXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICxcImNhcm91c2VsXCIpLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXRhbG9nIGp1c3RfZHJvcHBlZCcgKVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgLCAndGV4dC9odG1sJykucXVlcnlTZWxlY3RvcignLmNhdGFsb2cnKSlcbi8vICAgICAgICAgICAgIH1cbi8vXG4vLyAgICAgICAgICAgICBkYXRhWydqdXN0X2Ryb3BwZWQnXS5mb3JFYWNoKChwcm9kdWN0KSA9Pntcbi8vICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcHBlcicpXG4vLyAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChwYXJzZXIucGFyc2VGcm9tU3RyaW5nKCBET01jcmVhdG9yKCdkaXYnLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgRE9NY3JlYXRvcignaW1nJyxudWxsLG51bGwseydzcmMnOnByb2R1Y3RbJ2ltZyddLCdhbHQnOnByb2R1Y3RbJ21vZGVsJ119KStcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIERPTWNyZWF0b3IoJ2JyJykrXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBET01jcmVhdG9yKCdoMycscHJvZHVjdFsnYnJhbmQnXSkrXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBET01jcmVhdG9yKCdicicpK1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgRE9NY3JlYXRvcignaDInLHByb2R1Y3RbJ21vZGVsJ10pK1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgRE9NY3JlYXRvcignYnInKStcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIERPTWNyZWF0b3IoJ3AnLHByb2R1Y3RbJ3ByaWNlJ10pLCdpdGVtJyxudWxsLCdpdGVtXycrcHJvZHVjdFsnaWQnXSksICd0ZXh0L2h0bWwnKVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ2RpdicpKVxuLy8gICAgICAgICAgICAgfSlcbi8vICAgICAgICAgfSlcbi8vIClcbi8vXG4vKiAvZ2V0IGluZm9cXCAqL1xuLy9mZXRjaCgnL2dldCcpLnRoZW4oKHJlc3BvbnNlKT0+e1xuLy8gICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbi8vICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpfSkudGhlbigoZGF0YSk9Pntcbi8vICAgICAgICAgY29uc29sZS5sb2coZGF0YVtcImp1c3RfZHJvcHBlZFwiXSl9KVxuXG4iLCJpbXBvcnQgRE9NY3JlYXRvciBmcm9tICcuL2NyZWF0b3IuanMnO1xuLy8gaW1wb3J0IHNsaWRlcl9zdGFydGVyIGZyb20gXCIuLi9zbGlkZXJfY29uZmlnLmpzXCI7XG5cblxuZnVuY3Rpb24gdmlldygpIHtcbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4gLmNvbnRhaW5lcicpO1xuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcbiAgICBmZXRjaCgnaHR0cHM6Ly9zZXJ2ZXItZm9yLW9rci5oZXJva3VhcHAuY29tLycsKVxuICAgICAgICAvL2h0dHBzOi8vYXF1ZW91cy1zaGVsZi01NDg0OC5oZXJva3VhcHAuY29tL1xuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBoZWFkZXIuaW5uZXJIVE1MID0gKFxuICAgICAgICAgICAgICAgIERPTWNyZWF0b3IoJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIERPTWNyZWF0b3IoJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICBET01jcmVhdG9yKCdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERPTWNyZWF0b3IoJ2RpdicsIG51bGwsICd3cmFwcGVyX3NsaWRlcycpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBET01jcmVhdG9yKCdidXR0b24nLCAnPCcsICdidXQnLCBudWxsLCAnbGVmdCcpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBET01jcmVhdG9yKCdidXR0b24nLCAnPicsICdidXQnLCBudWxsLCAncmlnaHQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2Fyb3VzZWwnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLCAnc2FsZXMnKSxcbiAgICAgICAgICAgICAgICAgICAgJ2NvbnRhaW5lcicpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZGF0YS5zYWxlLmZvckVhY2goKHNhbGUpID0+IHtcbiAgICAgICAgICAgICAgICBoZWFkZXIucXVlcnlTZWxlY3RvcignLndyYXBwZXJfc2xpZGVzJykuaW5uZXJIVE1MICs9IChcbiAgICAgICAgICAgICAgICAgICAgRE9NY3JlYXRvcignZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIERPTWNyZWF0b3IoJ2EnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERPTWNyZWF0b3IoJ2ltZycsIG51bGwsIG51bGwsIHsnc3JjJzogc2FsZS5pbWd9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgRE9NY3JlYXRvcignaDMnLCBzYWxlLnNsaWRlcl90aXRsZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCwgeydocmVmJzogc2FsZS51cmx9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdpdGVtX3NhbGVzJywpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbWFpbi5pbm5lckhUTUwgPSAoXG4gICAgICAgICAgICAgICAgRE9NY3JlYXRvcignaDMnLCAnUkVDT01FTkRFRCcpICtcbiAgICAgICAgICAgICAgICBET01jcmVhdG9yKCdkaXYnLFxuICAgICAgICAgICAgICAgICAgICBET01jcmVhdG9yKCdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgRE9NY3JlYXRvcignZGl2JywgbnVsbCwgJ3dyYXBwZXInKVxuICAgICAgICAgICAgICAgICAgICAgICAgLCAnY2Fyb3VzZWwnKSxcbiAgICAgICAgICAgICAgICAgICAgJ2NhdGFsb2cgc2xpZGVzJylcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGRhdGFbJ3NsaWRlcyddLmZvckVhY2goKHByb2R1Y3QpID0+IHtcbiAgICAgICAgICAgICAgICBtYWluLnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJykuaW5uZXJIVE1MICs9IChcbiAgICAgICAgICAgICAgICAgICAgRE9NY3JlYXRvcignZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIERPTWNyZWF0b3IoJ2EnLCBET01jcmVhdG9yKCdpbWcnLCBudWxsLCBudWxsLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NyYyc6IHByb2R1Y3RbJ2ltZyddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhbHQnOiBwcm9kdWN0Wydtb2RlbCddXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSwgbnVsbCwgeydocmVmJzogcHJvZHVjdFsndXJsJ119KSArXG4gICAgICAgICAgICAgICAgICAgICAgICBET01jcmVhdG9yKCdicicpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIERPTWNyZWF0b3IoJ2gyJywgcHJvZHVjdFsnYnJhbmQnXSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgRE9NY3JlYXRvcignYnInKSArXG4gICAgICAgICAgICAgICAgICAgICAgICBET01jcmVhdG9yKCdoMycsIHByb2R1Y3RbJ21vZGVsJ10pICtcbiAgICAgICAgICAgICAgICAgICAgICAgIERPTWNyZWF0b3IoJ2JyJykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgRE9NY3JlYXRvcigncCcsIHByb2R1Y3RbJ3ByaWNlJ10pXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyArIERPTWNyZWF0b3IoJ2EnLCd2aWV3JywnaXRlbV9idXR0b24nLG51bGwsKVxuICAgICAgICAgICAgICAgICAgICAgICAgLCAnaXRlbScsIG51bGwsICdpdGVtXycgKyBwcm9kdWN0WydpZCddKVxuICAgICAgICAgICAgICAgICk7XG5cblxuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICB9KTtcblxufVxuXG4vLyBsZXQgZWw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jylcbi8vIGVsLnNldEF0dHJpYnV0ZSgnc3JjJyxcInNsaWRlcl9jb25maWcuanNcIilcbi8vIGVsLmlkPSdzbGlkZXJzdGFydGVyJ1xuLy8gaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2xpZGVyc3RhcnRlcicpKXtcbi8vICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGVsKX1cblxuXG4vLyAoKCkgPT4geyBzbGlkZXJfc3RhcnRlcigpIH0pKClcbi8vIGA8c2NyaXB0IHNyYz1cInNsaWRlcl9jb25maWcuanNcIiBkZWZlcj48L3NjcmlwdD5gXG5cbmV4cG9ydCBkZWZhdWx0IHZpZXc7XG4iXSwic291cmNlUm9vdCI6IiJ9