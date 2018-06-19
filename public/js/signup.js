window.onload = function(){

    let userNameInput  = document.getElementById("name")
    let password = document.getElementById("password")
    let email = document.getElementById("email")
    let form = document.getElementById("form")
    let signupBtn = document.getElementById("signup")

    signupBtn.onclick = function(){
        const parentElement = signupBtn.parentElement
        if(parentElement.getElementsByClassName("res")[0]){
            parentElement.removeChild(parentElement.getElementsByClassName("res")[0])
        }
        
        if(formValidated()){
            
            signupBtn.insertAdjacentHTML('afterend','<span class="res">Success</span>')
        }
         
    }

    const formValidated = () =>{
        const n = nameValidated(userNameInput)
        const p = passwordValidated(password)
        const e = emailValidated(email)

        if( n&&p&&e){
            return true
        }
        else{
            return false
        }
    }
  


   
        
    
}
const stringHasValue = (strValue)=>{  
    if(strValue.trim() != "" && strValue.trim() != null && strValue.trim() != undefined)  
        return true;  
    else  
        return false;  
 }; 
const validateEmail = (email)=> {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

const nameValidated = (name)=>{
    const parentElement = name.parentElement
    if(parentElement.getElementsByClassName("err")[0]){
        parentElement.removeChild(parentElement.getElementsByClassName("err")[0])
    }
    if( !stringHasValue(name.value) ){
        name.insertAdjacentHTML('afterend','<span class="err">Name Required</span>')
        return false
    }
    else if(name.value.length<1 || name.value.length>20){
        name.insertAdjacentHTML('afterend','<span class="err">Name should be between 1 t0 20 characters</span>')
        return false
    }
    else{
        return true
    }

}

const emailValidated = (email)=>{
    const parentElement = email.parentElement
    if(parentElement.getElementsByClassName("err")[0]){
        parentElement.removeChild(parentElement.getElementsByClassName("err")[0])
    }
    if(!stringHasValue(email.value)){
           
        email.insertAdjacentHTML('afterend','<span class="err">Email Required</span>')
        return false
    }
    else if( !validateEmail(email.value) ){
        email.insertAdjacentHTML('afterend','<span class="err">Invalid E-Mail format</span>')
        return false
    }
    else{
       return true
    }
}

const passwordValidated = (password)=>{
    const parentElement = password.parentElement
    if(parentElement.getElementsByClassName("err")[0]){
        parentElement.removeChild(parentElement.getElementsByClassName("err")[0])
    }
    if ( !stringHasValue(password.value) ){
        
        password.insertAdjacentHTML('afterend','<span class="err">Password Required</span>')
        return false
    
    }
    else if(password.value.length<6 || password.value.length>15){
        password.insertAdjacentHTML('afterend','<span class="err">Password should be beween 6 and 15 characters</span>')
        return false
    }
    else{
        return true
    }

}