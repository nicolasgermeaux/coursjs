function check(){
    let age = document.querySelector(".age").value
    
    if(age<=20){
        console.log("Tu es un petit bébé");
    }
    else{
        console.log("Tu es déjà grand !")
    }
}

let btn = document.querySelector(".btn")
btn.addEventListener("click", check)