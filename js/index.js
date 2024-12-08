     const loginEmailInput = document.getElementById("loginEmailInput");
     const loginPassInput = document.getElementById("loginPassInput");
     const signIn = document.getElementById("signIn");
     const alert = document.getElementById("alert");
     const regName = document.getElementById("regName");
     const regEmail = document.getElementById("regEmail");
     const regPsw = document.getElementById("regPsw");
     const signUp = document.getElementById("signUp");
     console.log(regEmail);
     console.log("hello world");

     
     var emailsArray = ["t"];
     var pswArray = ["t"];

     
     signIn.addEventListener("click", checkInputs);

     function checkInputs() {
         
         if (emailsArray.includes(loginEmailInput.value) && pswArray.includes(loginPassInput.value)) {
             console.log("true");
             
            alert.classList.add("d-none") 
            alert.classList.remove("d-block")
         } else {
             console.log("false"); 
             alert.classList.add("d-block")
             alert.classList.remove("d-none")
         }
     }


     signUp.addEventListener("click",saveData)


     function saveData() {
        if(regName.value == "" || regEmail.value == "" || regPsw.value == "" ){
            console.log("empty");
        } else {    
            console.log("not empty");
        }
            

     } 


     