document.getElementById('login-submit').addEventListener('click', function() {
    const userName = document.getElementById('username').value
    // console.log(userName.value)

    //  get user password
    const userPass = document.getElementById('userpassword').value
    // console.log(userPass.value)
    if(userName == "saif" && userPass==123){
     window.location.href="bank.html"
    }
    else{
        const error =document.getElementById('error')
        error.innerText="please enter right username & password !!!"
    }
})

