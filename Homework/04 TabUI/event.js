/*

toDo

* nav에 이벤트 할당
* click한 div에 "selectedTab" class 부여 / 기존의 div에서 class 삭제
* click시 div에 할당된 url에서 json 파일 받아오기
* json 파싱하여 html에 추가

process

1. nav 영역에 이벤트를 부여한다. (이벤트 위임)
2. 기존 선택된 div에서 class"selectedTab"를 삭제하고 click된 div에 부여한다.
3. click된 div에 할당된 url에서 json파일을 받는다.
4. json을 파싱한다.
5. "title"의 값을 .myName에 넣는다.
6. "body"의 값을 .myDesc에 넣는다.

*/

//object literal
(function(){
  var nav = document.querySelector("nav");
  var tabContents = document.querySelector("#tab-contents")
  var oReq = new XMLHttpRequest();

  var eventObj = {
    exchangeClass : function(event) {
      var tabActive = nav.querySelector(".selectedTab");
      tabActive.classList.remove("selectedTab");
      event.target.classList.add("selectedTab");
    },

    exchangeTemplate : function(data) {
      var template = document.querySelector("#template").innerText;
      var result = template.replace("{{title}}",data["title"])
                           .replace("{{body}}",data["body"]);
      tabContents.innerHTML = result;
    },

    callJson : function(url,func) {
      oReq.addEventListener("load",function() {
         var data = JSON.parse(oReq.responseText);
         func(data);
      });
      oReq.open("GET",url);
      oReq.send();
    },

    registerClick : function(event) {
      var urlList = {
        "position" : "http://jsonplaceholder.typicode.com/posts/1",
        "friend" : "http://jsonplaceholder.typicode.com/posts/2",
        "theme" : "http://jsonplaceholder.typicode.com/posts/3",
        "news" : "http://jsonplaceholder.typicode.com/posts/4"
      };

      if(event.target.className !== "tab") {
        return;
      }
      var id = event.target.id;
      eventObj.exchangeClass(event);
      eventObj.callJson(urlList[id],eventObj.exchangeTemplate);
    }
  }

  document.addEventListener("DOMContentLoaded",function(){
    nav.addEventListener("click",eventObj.registerClick);
  });
})();
