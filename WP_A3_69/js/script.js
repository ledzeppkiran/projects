// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data/name.json", 
            function (res) {

              var temp =
                document.getElementById("name").value;

                if(temp === res.name1){
              var message = 
                 "Course is :  " + res.course1 + 
                  "attendance is: " + res.attendance1;
              
              }
              else if (temp === res.name2){
                message = "Course is :  " + res.course2 + 
                 "attendance is : " + res.attendance2;
                 message += "you are in defaulters"
              }
          

              document.querySelector("#content")
                .innerHTML = "<h2>" + message + "</h2>";
            };
      
  }


 
