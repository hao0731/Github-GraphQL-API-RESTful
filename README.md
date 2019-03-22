# Github-GraphQL-API-RESTful
製作一個後端程式讓使用者透過RESTful的介面來呼叫Github的Graph API
設計的功能如下：
1.  可以取得某個organization的repositories
2.  可以更改repository的名稱

##Tools
使用Node.js作為後端工具，使用request套件來完成呼叫API的動作

##Start
可以透過`curl`或`Postman`來測試
並在header的部分添加`Authorization: bearer <TOKEN>`
1.  `GET  http://localhost:3000/api/orgs/:org/repos`可以取得該organization的repositories
2.  `PATCH http://localhost:3000/api/repos/:user/:oldName`並附帶`application/json`格式之資料`{"newName": <newReposName>}`，可以更改該repository之名稱

執行程式請使用指令`npm start`