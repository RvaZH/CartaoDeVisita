function toggleMode(){
    const body = document.body
    const img = document.querySelector("#profile img")

    if(body.classList.contains("light")){
        body.classList.remove("light")
    } else{
        body.classList.add("light")
    }

    if(body.classList.contains("light")){
        img.setAttribute('src', '././vscode/Mobile/Avatar2.png')
    }
    else{
        img.setAttribute('src', '././vscode/Mobile/avatar.png')
    }
}