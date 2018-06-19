window.onload = function(){
    let userNameInput  = document.getElementById("username")
    let password = document.getElementById("password")
    let loginBtn = document.getElementById("login")
    let form = document.getElementById("form1")
    
    loginBtn.onclick = ()=>{

        const parentElement = login.parentElement
        if(parentElement.getElementsByClassName("res")[0]){
            parentElement.removeChild(parentElement.getElementsByClassName("res")[0])
        }

        if(formValidated()){
            login.insertAdjacentHTML('afterend','<span class="res">Success</span>')
        }
        
        
        
    }

    const formValidated = () =>{
        const u = userValidated(userNameInput)
        const p = passwordValidated(password)
        if(u && p){
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
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
const userValidated =(user)=>{
    const parentElement = user.parentElement
    if(parentElement.getElementsByClassName("err")[0]){
        parentElement.removeChild(parentElement.getElementsByClassName("err")[0])
    }
    
    if ( !stringHasValue(user.value) ){
        
            user.insertAdjacentHTML('afterend','<span class="err">User Required</span>')
            return false
        
    }
    else if(!validateEmail(user.value)){
        user.insertAdjacentHTML('afterend','<span class="err">Invalid E-Mail format</span>')
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
    else{
        return true
    }

}