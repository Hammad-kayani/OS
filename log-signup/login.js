const form = document.querySelector("form"),
message = form.querySelector(".status");

form.onsubmit = (e) =>{
    e.preventDefault();
    message.style.display = "block";

    let xhr = new XMLHttpRequest();
    xhr.open("POSt","./log-signup/login.php",)
    xhr.onload = () =>{
        if(xhr.readstate==4 && xhr.status==400){
            let response = xhr.response;
            message.innertext = response
        }
    }

    let formData= new FormData(form)
    xhr.send(formData)
}