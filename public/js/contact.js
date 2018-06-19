window.onload = function () {
    
    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let phone = document.getElementById("phone")
    let question = document.getElementById("question")
    let send = document.getElementById("send")
    let form = document.getElementById("contact")

    send.onclick = ()=>{
        const parentElement = form.parentElement
        if(parentElement.getElementsByClassName("res")[0]){
            parentElement.removeChild(parentElement.getElementsByClassName("res")[0])
        }
        
        if(formValidated()){
            
            sendApi(name,email,phone,question,form)
        }
        else{
            send.insertAdjacentHTML('afterend','<span class="err"></span>')
        }
    }
    const formValidated = ()=>{
        const n = nameValidated(name)
        const e = emailValidated(email)
        const p = phoneValidated(phone)
        const q = questionValidated(question)
        if( n&&e&&p&&q){
            return true
        }
        else{
            return false
        }
    }

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

const phoneValidated = (phone)=>{
    const parentElement = phone.parentElement
    if(parentElement.getElementsByClassName("err")[0]){
        parentElement.removeChild(parentElement.getElementsByClassName("err")[0])
    }
    if(!stringHasValue(phone.value)){
           
        phone.insertAdjacentHTML('afterend','<span class="err">Phone Required</span>')
        return false
    }
    else if(!telephoneCheck(phone.value) ){
        phone.insertAdjacentHTML('afterend','<span class="err">Invalid Phone Number</span>')
        return false
    }
    else{
        return true
    }

}

const questionValidated = (question)=>{
    const parentElement = question.parentElement
    if(parentElement.getElementsByClassName("err")[0]){
        parentElement.removeChild(parentElement.getElementsByClassName("err")[0])
    }
    if(!stringHasValue(question.value)){
           
        question.insertAdjacentHTML('afterend','<span class="err">Question Required</span>')
        return false
    }
    else if(question.value.length<1 || question.value.length>200){
        question.insertAdjacentHTML('afterend','<span class="err">Question can be of maximum 200 characters</span>')
        return false
    }
    else{
        return true
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

const telephoneCheck = (phone)=> {
    const re = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/
    return re.test(phone)
}

const sendApi = (name,email,phone,question,form)=>{
    const params = {
        name:name,
        email:email,
        phone:phone,
        question:question
    }
    const http = new XMLHttpRequest()
    http.open('POST','http://demo6835492.mockable.io/sendEmail')
    http.setRequestHeader('Content-type', 'application/json')
    http.send(JSON.stringify(params))
    http.onload = function() {
        
        form.insertAdjacentHTML('afterend','<span class="res">Response : '+http.responseText+'</span>')
    }
}