(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{10:function(e,t,l){"use strict";l.r(t);var r=l(13);t.default=function(){let e=document.querySelector("main .container"),t=document.querySelector("header");fetch("https://server-for-okr.herokuapp.com/").then(e=>(console.log(e),e.json())).then(l=>{t.innerHTML=Object(r.a)("div",Object(r.a)("div",Object(r.a)("div",Object(r.a)("div",null,"wrapper_slides")+Object(r.a)("button","<","but",null,"left")+Object(r.a)("button",">","but",null,"right"),"carousel"),"sales"),"container"),l.sale.forEach(e=>{t.querySelector(".wrapper_slides").innerHTML+=Object(r.a)("div",Object(r.a)("a",Object(r.a)("img",null,null,{src:e.img})+Object(r.a)("h3",e.slider_title),null,{href:e.url}),"item_sales")}),e.innerHTML=Object(r.a)("h3","RECOMENDED")+Object(r.a)("div",Object(r.a)("div",Object(r.a)("div",null,"wrapper"),"carousel"),"catalog slides"),l.slides.forEach(t=>{e.querySelector(".wrapper").innerHTML+=Object(r.a)("div",Object(r.a)("a",Object(r.a)("img",null,null,{src:t.img,alt:t.model}),null,{href:t.url})+Object(r.a)("br")+Object(r.a)("h2",t.brand)+Object(r.a)("br")+Object(r.a)("h3",t.model)+Object(r.a)("br")+Object(r.a)("p",t.price),"item",null,"item_"+t.id)})})}},13:function(e,t,l){"use strict";t.a=function(e,t=null,l=null,r=null,n=null){let a=document.createElement(e);if(l){l.split(" ").forEach(e=>{a.classList.add(e)})}if(t&&(a.innerHTML=t),n&&(a.id=n),r)for(let e in r)a.setAttribute(e,r[e]);return a.outerHTML}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92aWV3cy9tYWluLnZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvY3JlYXRvci5qcyJdLCJuYW1lcyI6WyJtYWluIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaGVhZGVyIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwianNvbiIsImRhdGEiLCJpbm5lckhUTUwiLCJzYWxlIiwiZm9yRWFjaCIsImltZyIsInNsaWRlcl90aXRsZSIsInVybCIsInByb2R1Y3QiLCJ0YWciLCJjb250ZW50Iiwic2V0X2NsYXNzIiwic2V0X2F0dHIiLCJzZXRpZCIsImVsIiwiY3JlYXRlRWxlbWVudCIsInNwbGl0IiwiY2xhc3NuYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwiaWQiLCJrZXkiLCJzZXRBdHRyaWJ1dGUiLCJvdXRlckhUTUwiXSwibWFwcGluZ3MiOiJ5RkFBQSxtQkErRWUsVUEzRWYsV0FDSSxJQUFJQSxFQUFPQyxTQUFTQyxjQUFjLG1CQUM5QkMsRUFBU0YsU0FBU0MsY0FBYyxVQUNwQ0UsTUFBTSx5Q0FFREMsS0FBTUMsSUFDSEMsUUFBUUMsSUFBSUYsR0FDTEEsRUFBU0csU0FFbkJKLEtBQU1LLElBQ0hQLEVBQU9RLFVBQ0gsV0FEZSxDQUNKLE1BQ1AsWUFBVyxNQUNQLFlBQVcsTUFDUCxZQUFXLE1BQU8sS0FBTSxrQkFDeEIsWUFBVyxTQUFVLElBQUssTUFBTyxLQUFNLFFBQ3ZDLFlBQVcsU0FBVSxJQUFLLE1BQU8sS0FBTSxTQUN2QyxZQUNGLFNBQ04sYUFFUkQsRUFBS0UsS0FBS0MsUUFBU0QsSUFDZlQsRUFBT0QsY0FBYyxtQkFBbUJTLFdBQ3BDLFdBRGlELENBQ3RDLE1BQ1AsWUFBVyxJQUNQLFlBQVcsTUFBTyxLQUFNLEtBQU0sQ0FBQyxJQUFPQyxFQUFLRSxNQUN6QyxZQUFXLEtBQU1GLEVBQUtHLGNBQ3hCLEtBQU0sQ0FBQyxLQUFRSCxFQUFLSSxNQUN4QixnQkFHWmhCLEVBQUtXLFVBQ0QsWUFBVyxLQUFNLGNBQ2pCLFlBQVcsTUFDUCxZQUFXLE1BQ1AsWUFBVyxNQUFPLEtBQU0sV0FDdEIsWUFDTixrQkFHUkQsRUFBYSxPQUFFRyxRQUFTSSxJQUNwQmpCLEVBQUtFLGNBQWMsWUFBWVMsV0FDM0IsV0FEd0MsQ0FDN0IsTUFDUCxZQUFXLElBQUssWUFBVyxNQUFPLEtBQU0sS0FBTSxDQUMxQyxJQUFPTSxFQUFhLElBQ3BCLElBQU9BLEVBQWUsUUFDdEIsS0FBTSxDQUFDLEtBQVFBLEVBQWEsTUFDaEMsWUFBVyxNQUNYLFlBQVcsS0FBTUEsRUFBZSxPQUNoQyxZQUFXLE1BQ1gsWUFBVyxLQUFNQSxFQUFlLE9BQ2hDLFlBQVcsTUFDWCxZQUFXLElBQUtBLEVBQWUsT0FFN0IsT0FBUSxLQUFNLFFBQVVBLEVBQVksVSxnQ0NuQy9DLElBckJmLFNBQW9CQyxFQUFLQyxFQUFVLEtBQU1DLEVBQVksS0FBTUMsRUFBVyxLQUFNQyxFQUFRLE1BQ2hGLElBQUlDLEVBQUt0QixTQUFTdUIsY0FBY04sR0FDaEMsR0FBSUUsRUFBVyxDQUNBQSxFQUFVSyxNQUFNLEtBQ3RCWixRQUFTYSxJQUNWSCxFQUFHSSxVQUFVQyxJQUFJRixLQVN6QixHQU5JUCxJQUNBSSxFQUFHWixVQUFZUSxHQUVmRyxJQUNBQyxFQUFHTSxHQUFLUCxHQUVSRCxFQUNBLElBQUssSUFBSVMsS0FBT1QsRUFDWkUsRUFBR1EsYUFBYUQsRUFBS1QsRUFBU1MsSUFHdEMsT0FBT1AsRUFBR1MiLCJmaWxlIjoiNC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRE9NY3JlYXRvciBmcm9tICcuL2NyZWF0b3IuanMnO1xuLy8gaW1wb3J0IHNsaWRlcl9zdGFydGVyIGZyb20gXCIuLi9zbGlkZXJfY29uZmlnLmpzXCI7XG5cblxuZnVuY3Rpb24gdmlldygpIHtcbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4gLmNvbnRhaW5lcicpO1xuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcbiAgICBmZXRjaCgnaHR0cHM6Ly9zZXJ2ZXItZm9yLW9rci5oZXJva3VhcHAuY29tLycsKVxuICAgICAgICAvL2h0dHBzOi8vYXF1ZW91cy1zaGVsZi01NDg0OC5oZXJva3VhcHAuY29tL1xuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBoZWFkZXIuaW5uZXJIVE1MID0gKFxuICAgICAgICAgICAgICAgIERPTWNyZWF0b3IoJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIERPTWNyZWF0b3IoJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICBET01jcmVhdG9yKCdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERPTWNyZWF0b3IoJ2RpdicsIG51bGwsICd3cmFwcGVyX3NsaWRlcycpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBET01jcmVhdG9yKCdidXR0b24nLCAnPCcsICdidXQnLCBudWxsLCAnbGVmdCcpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBET01jcmVhdG9yKCdidXR0b24nLCAnPicsICdidXQnLCBudWxsLCAncmlnaHQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2Fyb3VzZWwnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLCAnc2FsZXMnKSxcbiAgICAgICAgICAgICAgICAgICAgJ2NvbnRhaW5lcicpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZGF0YS5zYWxlLmZvckVhY2goKHNhbGUpID0+IHtcbiAgICAgICAgICAgICAgICBoZWFkZXIucXVlcnlTZWxlY3RvcignLndyYXBwZXJfc2xpZGVzJykuaW5uZXJIVE1MICs9IChcbiAgICAgICAgICAgICAgICAgICAgRE9NY3JlYXRvcignZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIERPTWNyZWF0b3IoJ2EnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERPTWNyZWF0b3IoJ2ltZycsIG51bGwsIG51bGwsIHsnc3JjJzogc2FsZS5pbWd9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgRE9NY3JlYXRvcignaDMnLCBzYWxlLnNsaWRlcl90aXRsZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCwgeydocmVmJzogc2FsZS51cmx9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdpdGVtX3NhbGVzJywpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbWFpbi5pbm5lckhUTUwgPSAoXG4gICAgICAgICAgICAgICAgRE9NY3JlYXRvcignaDMnLCAnUkVDT01FTkRFRCcpICtcbiAgICAgICAgICAgICAgICBET01jcmVhdG9yKCdkaXYnLFxuICAgICAgICAgICAgICAgICAgICBET01jcmVhdG9yKCdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgRE9NY3JlYXRvcignZGl2JywgbnVsbCwgJ3dyYXBwZXInKVxuICAgICAgICAgICAgICAgICAgICAgICAgLCAnY2Fyb3VzZWwnKSxcbiAgICAgICAgICAgICAgICAgICAgJ2NhdGFsb2cgc2xpZGVzJylcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGRhdGFbJ3NsaWRlcyddLmZvckVhY2goKHByb2R1Y3QpID0+IHtcbiAgICAgICAgICAgICAgICBtYWluLnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJykuaW5uZXJIVE1MICs9IChcbiAgICAgICAgICAgICAgICAgICAgRE9NY3JlYXRvcignZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIERPTWNyZWF0b3IoJ2EnLCBET01jcmVhdG9yKCdpbWcnLCBudWxsLCBudWxsLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NyYyc6IHByb2R1Y3RbJ2ltZyddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhbHQnOiBwcm9kdWN0Wydtb2RlbCddXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSwgbnVsbCwgeydocmVmJzogcHJvZHVjdFsndXJsJ119KSArXG4gICAgICAgICAgICAgICAgICAgICAgICBET01jcmVhdG9yKCdicicpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIERPTWNyZWF0b3IoJ2gyJywgcHJvZHVjdFsnYnJhbmQnXSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgRE9NY3JlYXRvcignYnInKSArXG4gICAgICAgICAgICAgICAgICAgICAgICBET01jcmVhdG9yKCdoMycsIHByb2R1Y3RbJ21vZGVsJ10pICtcbiAgICAgICAgICAgICAgICAgICAgICAgIERPTWNyZWF0b3IoJ2JyJykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgRE9NY3JlYXRvcigncCcsIHByb2R1Y3RbJ3ByaWNlJ10pXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyArIERPTWNyZWF0b3IoJ2EnLCd2aWV3JywnaXRlbV9idXR0b24nLG51bGwsKVxuICAgICAgICAgICAgICAgICAgICAgICAgLCAnaXRlbScsIG51bGwsICdpdGVtXycgKyBwcm9kdWN0WydpZCddKVxuICAgICAgICAgICAgICAgICk7XG5cblxuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICB9KTtcblxufVxuXG4vLyBsZXQgZWw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jylcbi8vIGVsLnNldEF0dHJpYnV0ZSgnc3JjJyxcInNsaWRlcl9jb25maWcuanNcIilcbi8vIGVsLmlkPSdzbGlkZXJzdGFydGVyJ1xuLy8gaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2xpZGVyc3RhcnRlcicpKXtcbi8vICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGVsKX1cblxuXG4vLyAoKCkgPT4geyBzbGlkZXJfc3RhcnRlcigpIH0pKClcbi8vIGA8c2NyaXB0IHNyYz1cInNsaWRlcl9jb25maWcuanNcIiBkZWZlcj48L3NjcmlwdD5gXG5cbmV4cG9ydCBkZWZhdWx0IHZpZXc7XG4iLCIvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJykuYXBwZW5kQ2hpbGQocGFyc2VyLnBhcnNlRnJvbVN0cmluZyhET01jcmVhdG9yKCdkaXYnLCAnc210aCcsKSwgJ3RleHQvaHRtbCcpLnF1ZXJ5U2VsZWN0b3IoJ3RhZ19vZl9ET01fZWxlbWVudCcpKVxuXG5mdW5jdGlvbiBET01jcmVhdG9yKHRhZywgY29udGVudCA9IG51bGwsIHNldF9jbGFzcyA9IG51bGwsIHNldF9hdHRyID0gbnVsbCwgc2V0aWQgPSBudWxsKSB7XG4gICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIGlmIChzZXRfY2xhc3MpIHtcbiAgICAgICAgbGV0IHRlbXAgPSBzZXRfY2xhc3Muc3BsaXQoJyAnKTtcbiAgICAgICAgdGVtcC5mb3JFYWNoKChjbGFzc25hbWUpID0+IHtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NuYW1lKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChjb250ZW50KSB7XG4gICAgICAgIGVsLmlubmVySFRNTCA9IGNvbnRlbnQ7XG4gICAgfVxuICAgIGlmIChzZXRpZCkge1xuICAgICAgICBlbC5pZCA9IHNldGlkO1xuICAgIH1cbiAgICBpZiAoc2V0X2F0dHIpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHNldF9hdHRyKSB7XG4gICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoa2V5LCBzZXRfYXR0cltrZXldKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZWwub3V0ZXJIVE1MO1xufVxuZXhwb3J0IGRlZmF1bHQgRE9NY3JlYXRvcjtcbi8vIGxldCBidXR0b25uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdGFsb2cnKVxuLy9cbi8vIGJ1dHRvbm4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuLy8gICAgIGZldGNoKCdodHRwczovL2FxdWVvdXMtc2hlbGYtNTQ4NDguaGVyb2t1YXBwLmNvbS8nLClcbi8vICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4vLyAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuLy8gICAgICAgICB9KVxuLy8gICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4vLyAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbiAuY29udGFpbmVyIC5jYXRhbG9nLmp1c3RfZHJvcHBlZCcpID09IG51bGwpe1xuLy8gICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4gLmNvbnRhaW5lcicpXG4vLyAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChwYXJzZXIucGFyc2VGcm9tU3RyaW5nKFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgRE9NY3JlYXRvcignZGl2Jyxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBET01jcmVhdG9yKCdkaXYnLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBET01jcmVhdG9yKCdkaXYnLG51bGwsJ3dyYXBwZXInKVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsXCJjYXJvdXNlbFwiKSxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2F0YWxvZyBqdXN0X2Ryb3BwZWQnIClcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICwgJ3RleHQvaHRtbCcpLnF1ZXJ5U2VsZWN0b3IoJy5jYXRhbG9nJykpXG4vLyAgICAgICAgICAgICB9XG4vL1xuLy8gICAgICAgICAgICAgZGF0YVsnanVzdF9kcm9wcGVkJ10uZm9yRWFjaCgocHJvZHVjdCkgPT57XG4vLyAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKVxuLy8gICAgICAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQocGFyc2VyLnBhcnNlRnJvbVN0cmluZyggRE9NY3JlYXRvcignZGl2Jyxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIERPTWNyZWF0b3IoJ2ltZycsbnVsbCxudWxsLHsnc3JjJzpwcm9kdWN0WydpbWcnXSwnYWx0Jzpwcm9kdWN0Wydtb2RlbCddfSkrXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBET01jcmVhdG9yKCdicicpK1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgRE9NY3JlYXRvcignaDMnLHByb2R1Y3RbJ2JyYW5kJ10pK1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgRE9NY3JlYXRvcignYnInKStcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIERPTWNyZWF0b3IoJ2gyJyxwcm9kdWN0Wydtb2RlbCddKStcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIERPTWNyZWF0b3IoJ2JyJykrXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBET01jcmVhdG9yKCdwJyxwcm9kdWN0WydwcmljZSddKSwnaXRlbScsbnVsbCwnaXRlbV8nK3Byb2R1Y3RbJ2lkJ10pLCAndGV4dC9odG1sJylcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCdkaXYnKSlcbi8vICAgICAgICAgICAgIH0pXG4vLyAgICAgICAgIH0pXG4vLyApXG4vL1xuLyogL2dldCBpbmZvXFwgKi9cbi8vZmV0Y2goJy9nZXQnKS50aGVuKChyZXNwb25zZSk9Pntcbi8vICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4vLyAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKX0pLnRoZW4oKGRhdGEpPT57XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFbXCJqdXN0X2Ryb3BwZWRcIl0pfSlcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==