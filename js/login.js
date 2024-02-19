function loginpage(){

    uname = document.getElementById("username").value
    upass = document.getElementById("password").value

      if(uname == ("njb") && upass == ("123")){
        
        window.open("hello.html")

      }
      else{

        alert("wrong");

      }
}