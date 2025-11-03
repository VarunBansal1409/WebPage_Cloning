let log = document.getElementById("log-in")
console.log(log);

let main = document.querySelector("main")

log.onclick = () => {
    let info = document.getElementById("login-info")
    console.log(info);
    
    let res = info.classList.toggle("demo")
    if(res){
        info.style.position = "absolute"
        info.style.top = "35px"
        info.style.left = "500px"
        main.style.filter = "brightness(50%)"
        }else{
        info.style.position = "absolute"
        info.style.top = "-1000px"
        main.style.filter = "brightness(100%)"
        }
}

let cut = document.getElementsByClassName("fa-solid")
console.log(cut[0]);

cut[0].onclick = () => {
    let info = document.getElementById("login-info")
    console.log(info);
    info.style.position = "absolute"
    info.style.top = "-1000px"
    main.style.filter = "brightness(100%)"
}

