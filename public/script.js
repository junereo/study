const body = document.querySelector("body");

const create = () =>{
    const headerDiv = document.createElement("div");
    const headerDivText = document.createElement("div");

    headerDiv.setAttribute("class","header");
    headerDivText.setAttribute("class","header-text");

    body.append(headerDiv);
    headerDiv.append(headerDivText);


    const header = document.querySelector(".header");
    const headerText = document.querySelector(".header-text");

    headerText.textContent = "재미 있는 git 시간"
}



console.log("환영 합니다");

create();