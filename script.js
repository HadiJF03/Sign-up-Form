const submit = document.querySelector(".create");
const myForm = document.querySelector("form");
submit.addEventListener("click",(e)=>{
    const pass = document.querySelector("input[name=pass]");
    const confirmPass = document.querySelector("input[name=confirm-pass]");
    if(!(pass.value===confirmPass.value)){
        pass.classList.add("error");
        confirmPass.classList.add("error");
        alert("passwords must match")
    }
})
