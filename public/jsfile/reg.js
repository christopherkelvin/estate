document.getElementById('checkbox').onclick=
function(){
    if(this.checked){
        document.getElementById('password').type ="text";
    }
    else {
        document.getElementById('password').type="password";
    }
};


