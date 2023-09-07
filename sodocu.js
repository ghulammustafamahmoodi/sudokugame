var consNumber = [
    "300801002",
    "201030604",
    "000204000",
    "809000106",
    "060000050",
    "702000409",
    "000509000",
    "904080705",
    "600107003"
];

var answer = [
    "324851332",
    "251232654",
    "735264125",
    "819573146",
    "167584521",
    "752222675",
    "398569432",
    "934482785",
    "699127243"
];

var table = document.querySelector("table");

for (var i = 0; i < 9; i++) {
    var tr = document.createElement("tr");
    table.append(tr);
    for (var j = 0; j < 9; j++) {
        var td = document.createElement("td");
        tr.append(td);
        td.className = answer[i][j];
        if (consNumber[i][j] !== "0") {
            td.innerHTML = consNumber[i][j];
            td.style.background = "blue";
        }
    }
}

// call function
getNumber();
setNumber();
eraser();

var temp;

function getNumber() {
    var but = document.querySelectorAll(".btn");
    but.forEach(element => {
        element.addEventListener('click', () => {
            temp = element.innerHTML;
        });
    });
}

function setNumber() {
    var tds = document.querySelectorAll("td");
    for(let td of tds){
        td.addEventListener("click",()=>{
            if(td.style.background != "blue"){
                if(td.innerHTML == td.className){
                    td.style.background = "green"
                    td.innerHTML = temp
                }
                else{
                    td.style.background = "red"
                    td.innerHTML = temp
                }
               
            }
           
        })
    }
}

function eraser(){
    var eraser = document.querySelector(".eraser")
    eraser.addEventListener("click", ()=>{
        var tds = document.querySelectorAll("td");
        tds.forEach(element=>{
            element.addEventListener("click",()=>{
                temp=""
                element.style.background = "black"
                
                
            })
        })
    })
}