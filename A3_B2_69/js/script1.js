// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.getElementById("name")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("name1.json", 
            function (res) {
              var message = "";
              var input=
              document
                .getElementById("in")
                .value;
                console.log("input value "+input);
                var c=0;
              for(var i=0;i<3;i++)
              {
                if(res[i].sapid==input)
                {
                  message+=res[i].name+" ";
                  c++;
                }
                else if(res[i].email===input)
                {
                  message+=res[i].name+" ";
                  c++;
                }
                else if(res[i].contactno==input)
                {
                  message+=res[i].name+" ";
                  c++;
                }
                else if(res[i].cgpa==input)
                {
                  message+=res[i].name+" ";
                  c++;
                }
                else if(res[i].dob===input)
                {
                  message+=res[i].name+" ";
                  c++;
                }

              }
              if(c==0)
              {
                message+="data not found";
              }

              document.querySelector("#content")
                .innerHTML = "<h2>" + message + "</h2>";
            });
      });
  }
);