(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{11:function(e,t,r){"use strict";r.r(t);var n=r(13);t.default=function(e){let t=document.querySelector("main .container");document.querySelector("header").innerHTML="",e?fetch("https://server-for-okr.herokuapp.com/orders/"+e).then(e=>e.json()).then(r=>{-1!=r.id?fetch("https://server-for-okr.herokuapp.com/").then(e=>(console.log(e),e.json())).then(a=>{t.innerHTML=Object(n.a)("h3","Order № "+e)+Object(n.a)("div",Object(n.a)("div",Object(n.a)("div",null,"wrapper"),"carousel"),"catalog "+e);for(let e in r.cart){console.log("print i "+e);for(let l in a)a[l].forEach(a=>{r.cart[e][0]===a.id&&(t.querySelector(".wrapper").innerHTML+=Object(n.a)("div",Object(n.a)("img",null,null,{src:a.img,alt:a.model})+Object(n.a)("br")+Object(n.a)("h2",a.brand)+Object(n.a)("br")+Object(n.a)("h3",a.model)+Object(n.a)("br")+Object(n.a)("p","$"+r.cart[e][1]),"item",null,"item_"+a.id))})}}):t.innerHTML="Order with №"+e+" does not exists"}):t.innerHTML=Object(n.a)("form",""+Object(n.a)("div",Object(n.a)("input",null,null,{type:"text",name:"name",placeholder:"Name*",required:"",pattern:"[А-Я][а-я]{1,20}"})+Object(n.a)("span","Incorrect name","form__error"),"form__field")+Object(n.a)("div",Object(n.a)("input",null,null,{type:"text",name:"surname",placeholder:"Surname*",required:"",pattern:"[А-Я][а-я]{1,30}"})+Object(n.a)("span","Incorrect surname","form__error"),"form__field")+Object(n.a)("div",Object(n.a)("input",null,null,{type:"tel",name:"phone",placeholder:"Phone number*",required:"",pattern:"[+][0-9]{12}"})+Object(n.a)("span","Format +380981234567","form__error"),"form__field")+Object(n.a)("div",Object(n.a)("input",null,null,{type:"text",name:"address",placeholder:"Address*",required:""}),"form__field")+Object(n.a)("span","* required fields",null,{style:"color:grey"})+Object(n.a)("button","Submit",null,{name:"subbutton",type:"submit"}),"form",{name:"exportform"})}},13:function(e,t,r){"use strict";t.a=function(e,t=null,r=null,n=null,a=null){let l=document.createElement(e);if(r){r.split(" ").forEach(e=>{l.classList.add(e)})}if(t&&(l.innerHTML=t),a&&(l.id=a),n)for(let e in n)l.setAttribute(e,n[e]);return l.outerHTML}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92aWV3cy9vcmRlci52aWV3LmpzIiwid2VicGFjazovLy8uL3ZpZXdzL2NyZWF0b3IuanMiXSwibmFtZXMiOlsiaWQiLCJtYWluIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJIVE1MIiwiZmV0Y2giLCJ0aGVuIiwib3JkZXIiLCJqc29uIiwib3JkZXJkYXRhIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImkiLCJjYXJ0Iiwia2V5IiwiZm9yRWFjaCIsInByb2R1Y3QiLCJ0YWciLCJjb250ZW50Iiwic2V0X2NsYXNzIiwic2V0X2F0dHIiLCJzZXRpZCIsImVsIiwiY3JlYXRlRWxlbWVudCIsInNwbGl0IiwiY2xhc3NuYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0QXR0cmlidXRlIiwib3V0ZXJIVE1MIl0sIm1hcHBpbmdzIjoieUZBQUEsbUJBd0hlLFVBckhmLFNBQWNBLEdBQ1YsSUFBSUMsRUFBT0MsU0FBU0MsY0FBYyxtQkFDckJELFNBQVNDLGNBQWMsVUFDN0JDLFVBQVksR0FDZEosRUFvRERLLE1BQU0sK0NBQWlETCxHQUNsRE0sS0FBTUMsR0FDSUEsRUFBTUMsUUFDZEYsS0FBTUcsS0FDYyxHQUFmQSxFQUFVVCxHQUNWSyxNQUFNLHlDQUNEQyxLQUNJSSxJQUNHQyxRQUFRQyxJQUFJRixHQUNMQSxFQUFTRixTQUV2QkYsS0FBTU8sSUFFSFosRUFBS0csVUFDRCxZQUFXLEtBQU0sV0FBYUosR0FDMUIsWUFBVyxNQUNQLFlBQVcsTUFDUCxZQUFXLE1BQU8sS0FBTSxXQUN0QixZQUNOLFdBQVdBLEdBR3ZCLElBQUssSUFBSWMsS0FBS0wsRUFBVU0sS0FBTSxDQUMxQkosUUFBUUMsSUFBSSxXQUFhRSxHQUN6QixJQUFLLElBQUlFLEtBQU9ILEVBQ1pBLEVBQUtHLEdBQUtDLFFBQVNDLElBQ1hULEVBQVVNLEtBQUtELEdBQUcsS0FBUUksRUFBYSxLQUN2Q2pCLEVBQUtFLGNBQWMsWUFBWUMsV0FDM0IsV0FEd0MsQ0FDN0IsTUFDUCxZQUFXLE1BQU8sS0FBTSxLQUFNLENBQzFCLElBQU9jLEVBQWEsSUFDcEIsSUFBT0EsRUFBZSxRQUV0QixZQUFXLE1BQ1gsWUFBVyxLQUFNQSxFQUFlLE9BQ2hDLFlBQVcsTUFDWCxZQUFXLEtBQU1BLEVBQWUsT0FDaEMsWUFBVyxNQUNYLFlBQVcsSUFBSyxJQUFJVCxFQUFVTSxLQUFLRCxHQUFHLElBRXhDLE9BQVEsS0FBTSxRQUFVSSxFQUFZLFVBYXRFakIsRUFBS0csVUFBWSxlQUFlSixFQUFHLHFCQXhHL0NDLEVBQUtHLFVBQ0QsV0FEYSxDQUNGLE9BQ1AsR0FDQSxZQUFXLE1BRVAsWUFBVyxRQUFTLEtBQU0sS0FBTSxDQUM1QixLQUFRLE9BQ1IsS0FBUSxPQUNSLFlBQWUsUUFDZixTQUFZLEdBQ1osUUFBVyxxQkFFZixZQUFXLE9BQVEsaUJBQWtCLGVBQ25DLGVBRU4sWUFBVyxNQUNQLFlBQVcsUUFBUyxLQUFNLEtBQU0sQ0FDNUIsS0FBUSxPQUNSLEtBQVEsVUFDUixZQUFlLFdBQ2YsU0FBWSxHQUNaLFFBQVcscUJBRWYsWUFBVyxPQUFRLG9CQUFxQixlQUN6QyxlQUVILFlBQVcsTUFDUCxZQUFXLFFBQVMsS0FBTSxLQUFNLENBQzVCLEtBQVEsTUFDUixLQUFRLFFBQ1IsWUFBZSxnQkFDZixTQUFZLEdBQ1osUUFBVyxpQkFFZixZQUFXLE9BQVEsdUJBQXdCLGVBQzVDLGVBRUgsWUFBVyxNQUNQLFdBRGMsQ0FDSCxRQUFTLEtBQU0sS0FBTSxDQUM1QixLQUFRLE9BQ1IsS0FBUSxVQUNSLFlBQWUsV0FDZixTQUFZLEtBRWpCLGVBRUgsWUFBVyxPQUFRLG9CQUFxQixLQUFNLENBQUMsTUFBUyxlQUN4RCxZQUFXLFNBQVUsU0FBVSxLQUFNLENBQUMsS0FBUSxZQUFhLEtBQVEsV0FDakUsT0FBUSxDQUFDLEtBQVEsaUIsZ0NDakNwQixJQXJCZixTQUFvQmUsRUFBS0MsRUFBVSxLQUFNQyxFQUFZLEtBQU1DLEVBQVcsS0FBTUMsRUFBUSxNQUNoRixJQUFJQyxFQUFLdEIsU0FBU3VCLGNBQWNOLEdBQ2hDLEdBQUlFLEVBQVcsQ0FDQUEsRUFBVUssTUFBTSxLQUN0QlQsUUFBU1UsSUFDVkgsRUFBR0ksVUFBVUMsSUFBSUYsS0FTekIsR0FOSVAsSUFDQUksRUFBR3BCLFVBQVlnQixHQUVmRyxJQUNBQyxFQUFHeEIsR0FBS3VCLEdBRVJELEVBQ0EsSUFBSyxJQUFJTixLQUFPTSxFQUNaRSxFQUFHTSxhQUFhZCxFQUFLTSxFQUFTTixJQUd0QyxPQUFPUSxFQUFHTyIsImZpbGUiOiI1LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBET01jcmVhdG9yIGZyb20gJy4vY3JlYXRvci5qcyc7XG5cblxuZnVuY3Rpb24gdmlldyhpZCkge1xuICAgIGxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbiAuY29udGFpbmVyJyk7XG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xuICAgIGhlYWRlci5pbm5lckhUTUwgPSAnJztcbiAgICBpZiAoIWlkKSB7XG4gICAgICAgIG1haW4uaW5uZXJIVE1MID0gKFxuICAgICAgICAgICAgRE9NY3JlYXRvcignZm9ybScsXG4gICAgICAgICAgICAgICAgJycgK1xuICAgICAgICAgICAgICAgIERPTWNyZWF0b3IoJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIC8vbmFtZVxuICAgICAgICAgICAgICAgICAgICBET01jcmVhdG9yKCdpbnB1dCcsIG51bGwsIG51bGwsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICd0eXBlJzogJ3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiAnbmFtZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAncGxhY2Vob2xkZXInOiAnTmFtZSonLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3JlcXVpcmVkJzogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAncGF0dGVybic6ICdb0JAt0K9dW9CwLdGPXXsxLDIwfSdcbiAgICAgICAgICAgICAgICAgICAgfSkgK1xuICAgICAgICAgICAgICAgICAgICBET01jcmVhdG9yKCdzcGFuJywgJ0luY29ycmVjdCBuYW1lJywgJ2Zvcm1fX2Vycm9yJylcbiAgICAgICAgICAgICAgICAgICAgLCAnZm9ybV9fZmllbGQnKSArXG4gICAgICAgICAgICAgICAgLy9zdXJuYW1lXG4gICAgICAgICAgICAgICAgRE9NY3JlYXRvcignZGl2JywgKFxuICAgICAgICAgICAgICAgICAgICBET01jcmVhdG9yKCdpbnB1dCcsIG51bGwsIG51bGwsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICd0eXBlJzogJ3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiAnc3VybmFtZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAncGxhY2Vob2xkZXInOiAnU3VybmFtZSonLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3JlcXVpcmVkJzogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAncGF0dGVybic6ICdb0JAt0K9dW9CwLdGPXXsxLDMwfSdcbiAgICAgICAgICAgICAgICAgICAgfSkgK1xuICAgICAgICAgICAgICAgICAgICBET01jcmVhdG9yKCdzcGFuJywgJ0luY29ycmVjdCBzdXJuYW1lJywgJ2Zvcm1fX2Vycm9yJylcbiAgICAgICAgICAgICAgICApLCAnZm9ybV9fZmllbGQnKSArXG4gICAgICAgICAgICAgICAgLy9QaG9uZVxuICAgICAgICAgICAgICAgIERPTWNyZWF0b3IoJ2RpdicsIChcbiAgICAgICAgICAgICAgICAgICAgRE9NY3JlYXRvcignaW5wdXQnLCBudWxsLCBudWxsLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICd0ZWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiAncGhvbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3BsYWNlaG9sZGVyJzogJ1Bob25lIG51bWJlcionLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3JlcXVpcmVkJzogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAncGF0dGVybic6ICdbK11bMC05XXsxMn0nXG4gICAgICAgICAgICAgICAgICAgIH0pICtcbiAgICAgICAgICAgICAgICAgICAgRE9NY3JlYXRvcignc3BhbicsICdGb3JtYXQgKzM4MDk4MTIzNDU2NycsICdmb3JtX19lcnJvcicpXG4gICAgICAgICAgICAgICAgKSwgJ2Zvcm1fX2ZpZWxkJykgK1xuICAgICAgICAgICAgICAgIC8vYWRkcmVzc1xuICAgICAgICAgICAgICAgIERPTWNyZWF0b3IoJ2RpdicsIChcbiAgICAgICAgICAgICAgICAgICAgRE9NY3JlYXRvcignaW5wdXQnLCBudWxsLCBudWxsLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICduYW1lJzogJ2FkZHJlc3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3BsYWNlaG9sZGVyJzogJ0FkZHJlc3MqJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdyZXF1aXJlZCc6ICcnXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKSwgJ2Zvcm1fX2ZpZWxkJykgK1xuXG4gICAgICAgICAgICAgICAgRE9NY3JlYXRvcignc3BhbicsICcqIHJlcXVpcmVkIGZpZWxkcycsIG51bGwsIHsnc3R5bGUnOiAnY29sb3I6Z3JleSd9KSArXG4gICAgICAgICAgICAgICAgRE9NY3JlYXRvcignYnV0dG9uJywgJ1N1Ym1pdCcsIG51bGwsIHsnbmFtZSc6ICdzdWJidXR0b24nLCAndHlwZSc6ICdzdWJtaXQnfSlcbiAgICAgICAgICAgICAgICAsICdmb3JtJywgeyduYW1lJzogJ2V4cG9ydGZvcm0nfSlcbiAgICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBmZXRjaCgnaHR0cHM6Ly9zZXJ2ZXItZm9yLW9rci5oZXJva3VhcHAuY29tL29yZGVycy8nICsgaWQpXG4gICAgICAgICAgICAudGhlbigob3JkZXIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3JkZXIuanNvbigpO1xuICAgICAgICAgICAgfSkudGhlbigob3JkZXJkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG9yZGVyZGF0YS5pZCE9LTEpe1xuICAgICAgICAgICAgICAgICAgICBmZXRjaCgnaHR0cHM6Ly9zZXJ2ZXItZm9yLW9rci5oZXJva3VhcHAuY29tLycpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpbi5pbm5lckhUTUwgPSAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERPTWNyZWF0b3IoJ2gzJywgJ09yZGVyIOKEliAnICsgaWQpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERPTWNyZWF0b3IoJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRE9NY3JlYXRvcignZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRE9NY3JlYXRvcignZGl2JywgbnVsbCwgJ3dyYXBwZXInKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsICdjYXJvdXNlbCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBjYXRhbG9nICR7aWR9YClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSBpbiBvcmRlcmRhdGEuY2FydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncHJpbnQgaSAnICsgaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhW2tleV0uZm9yRWFjaCgocHJvZHVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcmRlcmRhdGEuY2FydFtpXVswXSA9PT0gKHByb2R1Y3RbJ2lkJ10pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haW4ucXVlcnlTZWxlY3RvcignLndyYXBwZXInKS5pbm5lckhUTUwgKz0gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRE9NY3JlYXRvcignZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBET01jcmVhdG9yKCdpbWcnLCBudWxsLCBudWxsLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzcmMnOiBwcm9kdWN0WydpbWcnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FsdCc6IHByb2R1Y3RbJ21vZGVsJ11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERPTWNyZWF0b3IoJ2JyJykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBET01jcmVhdG9yKCdoMicsIHByb2R1Y3RbJ2JyYW5kJ10pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRE9NY3JlYXRvcignYnInKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERPTWNyZWF0b3IoJ2gzJywgcHJvZHVjdFsnbW9kZWwnXSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBET01jcmVhdG9yKCdicicpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRE9NY3JlYXRvcigncCcsICckJytvcmRlcmRhdGEuY2FydFtpXVsxXSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICwgJ2l0ZW0nLCBudWxsLCAnaXRlbV8nICsgcHJvZHVjdFsnaWQnXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1haW4uaW5uZXJIVE1MID0gJ09yZGVyIHdpdGgg4oSWJytpZCsnIGRvZXMgbm90IGV4aXN0cyc7XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdmlldzsiLCIvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJykuYXBwZW5kQ2hpbGQocGFyc2VyLnBhcnNlRnJvbVN0cmluZyhET01jcmVhdG9yKCdkaXYnLCAnc210aCcsKSwgJ3RleHQvaHRtbCcpLnF1ZXJ5U2VsZWN0b3IoJ3RhZ19vZl9ET01fZWxlbWVudCcpKVxuXG5mdW5jdGlvbiBET01jcmVhdG9yKHRhZywgY29udGVudCA9IG51bGwsIHNldF9jbGFzcyA9IG51bGwsIHNldF9hdHRyID0gbnVsbCwgc2V0aWQgPSBudWxsKSB7XG4gICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIGlmIChzZXRfY2xhc3MpIHtcbiAgICAgICAgbGV0IHRlbXAgPSBzZXRfY2xhc3Muc3BsaXQoJyAnKTtcbiAgICAgICAgdGVtcC5mb3JFYWNoKChjbGFzc25hbWUpID0+IHtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NuYW1lKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChjb250ZW50KSB7XG4gICAgICAgIGVsLmlubmVySFRNTCA9IGNvbnRlbnQ7XG4gICAgfVxuICAgIGlmIChzZXRpZCkge1xuICAgICAgICBlbC5pZCA9IHNldGlkO1xuICAgIH1cbiAgICBpZiAoc2V0X2F0dHIpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHNldF9hdHRyKSB7XG4gICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoa2V5LCBzZXRfYXR0cltrZXldKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZWwub3V0ZXJIVE1MO1xufVxuZXhwb3J0IGRlZmF1bHQgRE9NY3JlYXRvcjtcbi8vIGxldCBidXR0b25uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdGFsb2cnKVxuLy9cbi8vIGJ1dHRvbm4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuLy8gICAgIGZldGNoKCdodHRwczovL2FxdWVvdXMtc2hlbGYtNTQ4NDguaGVyb2t1YXBwLmNvbS8nLClcbi8vICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4vLyAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuLy8gICAgICAgICB9KVxuLy8gICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4vLyAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbiAuY29udGFpbmVyIC5jYXRhbG9nLmp1c3RfZHJvcHBlZCcpID09IG51bGwpe1xuLy8gICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4gLmNvbnRhaW5lcicpXG4vLyAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChwYXJzZXIucGFyc2VGcm9tU3RyaW5nKFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgRE9NY3JlYXRvcignZGl2Jyxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBET01jcmVhdG9yKCdkaXYnLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBET01jcmVhdG9yKCdkaXYnLG51bGwsJ3dyYXBwZXInKVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsXCJjYXJvdXNlbFwiKSxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2F0YWxvZyBqdXN0X2Ryb3BwZWQnIClcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICwgJ3RleHQvaHRtbCcpLnF1ZXJ5U2VsZWN0b3IoJy5jYXRhbG9nJykpXG4vLyAgICAgICAgICAgICB9XG4vL1xuLy8gICAgICAgICAgICAgZGF0YVsnanVzdF9kcm9wcGVkJ10uZm9yRWFjaCgocHJvZHVjdCkgPT57XG4vLyAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKVxuLy8gICAgICAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQocGFyc2VyLnBhcnNlRnJvbVN0cmluZyggRE9NY3JlYXRvcignZGl2Jyxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIERPTWNyZWF0b3IoJ2ltZycsbnVsbCxudWxsLHsnc3JjJzpwcm9kdWN0WydpbWcnXSwnYWx0Jzpwcm9kdWN0Wydtb2RlbCddfSkrXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBET01jcmVhdG9yKCdicicpK1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgRE9NY3JlYXRvcignaDMnLHByb2R1Y3RbJ2JyYW5kJ10pK1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgRE9NY3JlYXRvcignYnInKStcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIERPTWNyZWF0b3IoJ2gyJyxwcm9kdWN0Wydtb2RlbCddKStcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIERPTWNyZWF0b3IoJ2JyJykrXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBET01jcmVhdG9yKCdwJyxwcm9kdWN0WydwcmljZSddKSwnaXRlbScsbnVsbCwnaXRlbV8nK3Byb2R1Y3RbJ2lkJ10pLCAndGV4dC9odG1sJylcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCdkaXYnKSlcbi8vICAgICAgICAgICAgIH0pXG4vLyAgICAgICAgIH0pXG4vLyApXG4vL1xuLyogL2dldCBpbmZvXFwgKi9cbi8vZmV0Y2goJy9nZXQnKS50aGVuKChyZXNwb25zZSk9Pntcbi8vICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4vLyAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKX0pLnRoZW4oKGRhdGEpPT57XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFbXCJqdXN0X2Ryb3BwZWRcIl0pfSlcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==