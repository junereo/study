const body = document.querySelector("body");

const create = () =>{
    const headerDiv = document.createElement("div");
    const headerDivText = document.createElement("div");
    const button = document.createElement("button");

    headerDiv.setAttribute("class","header");
    headerDivText.setAttribute("class","header-text");
    button.setAttribute("class", "btn");
    button.textContent = "버튼";
    button.style.width = "100px";
    button.style.height = "30px";

    body.append(headerDiv);
    headerDiv.append(headerDivText);
    headerDiv.append(button);


    const header = document.querySelector(".header");
    const headerText = document.querySelector(".header-text");

    headerText.textContent = "재미 있는 git 시간"
    headerText.style.color = "red";
}

const alram = (e) =>{
    if(e.target.className === "btn"){
        alert("환영 합니다.")
    }
}


body.addEventListener("click", alram);
console.log("환영 합니다");

create();