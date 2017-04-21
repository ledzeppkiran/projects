// Event handling
document.addEventListener("DOMContentLoaded",function (event) {

    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {

        //Fetching name input from text-box

   var name = document.getElementById("name").value;

      

  if (name === 70011016063) {
        $ajaxUtils
          .sendGetRequest("data/name1.json", 
            function (res) {
              var message = res.firstName;
              message += "Jack";
              document.getElementById("content").innerHTML = message
            }); 
  
  else if (name === "Jack@gmail.com") {
        $ajaxUtils
          .sendGetRequest("data/name1.json", 
            function (res) {
              var message = res.firstName;
              message += "Jack";
              document.getElementById("content").innerHTML = message
            }); 
  }

   else if (name === 9840533140) {
        $ajaxUtils
          .sendGetRequest("data/name1.json", 
            function (res) {
              var message = res.firstName;
              message += "Jack";
              document.getElementById("content").innerHTML = message
            }); 
  }

   else if (name === 4.0) {
        $ajaxUtils
          .sendGetRequest("data/name1.json", 
            function (res) {
              var message = res.firstName;
              message += "Jack";
              document.getElementById("content").innerHTML = message
            }); 
  }

   else if (name === "25th September, 2015") {
        $ajaxUtils
          .sendGetRequest("data/name1.json", 
            function (res) {
              var message = res.firstName;
              message += "Jack";
              document.getElementById("content").innerHTML = message
            }); 
  }

   else if (name === 70011016043) {
        $ajaxUtils
          .sendGetRequest("data/name1.json", 
            function (res) {
              var message = res.secondName;
              message += "Jill";
              document.getElementById("content").innerHTML = message
            }); 
  }

   else if (name === 3.8) {
        $ajaxUtils
          .sendGetRequest("data/name1.json", 
            function (res) {
              var message = res.secondName;
              message + "Jill";
              document.getElementById("content").innerHTML = message
            }); 
  }

   else if (name === "jill@gmail.com") {
        $ajaxUtils
          .sendGetRequest("data/name1.json", 
            function (res) {
              var message = res.secondName;
              message += "Jill";
              document.getElementById("content").innerHTML = message
            }); 
  }

 else if (name === "4th July, 2013") {
        $ajaxUtils
          .sendGetRequest("data/name1.json", 
            function (res) {
              var message = res.secondName;
              message += "Jack";
              document.getElementById("content").innerHTML = message
            }); 
  }


  else if (name === "Jill") {
         
 
        $ajaxUtils
          .sendGetRequest("data/name1.json", 
            function (res) {
              var message = res.secondName;
              message += "Your attendance in";
              message += res.course2;
             
              message += " Total lectures conducted in theory are: ";
              message += res.totaltheory2;
              message += " Total lectures conducted in labs are:";
              message += res.totallab2;
              message += " Your attendance in theory is: ";
              message += res.atttheory2;
              message += " Your attendance in lab is: ";
              message += res.attlab2;
         
              if (res.default2) {
                message += " You in defaulters list ";
              }
              else {
                message += " You are not in defaulters list.";
              }
              document.getElementById("content").innerHTML = message;
          
          });
  }

  });
});