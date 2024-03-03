function fetchPerso(persoName) {
    return fetch('https://hp-api.lainocs.fr/characters/' + persoName) 
    .then((response) =>  response.json())
}

async function displayPerso(perso) {
    const data = await fetchPerso(perso)
    if (data.house === "Gryffindor") {
        return (`
        <div class="houseGryffindor">
            <img onclick="giveInfo()" class="images" id="gryffindor" src="${data.image}" alt="${data.name}" />
            <p class="nomPerso">${data.name}</p>
            <p class="nomPerso">${data.house}</p>
            <p class="nomPerso">${data.role}</p>
        </div>
    `)
    } else if (data.house == "Slytherin"){
        return (`
        <div class="houseSlytherin">
            <img onclick="giveInfo()" class="images" id="slytherin" src="${data.image}" alt="${data.name}" />
            <p class="nomPerso">${data.name}</p>
            <p class="nomPerso">${data.house}</p>
            <p class="nomPerso">${data.role}</p>
        </div>
    `)
    } else if (data.house == "Hufflepuff"){
        return (`
        <div class="houseHufflepuff">
            <img onclick="giveInfo()" class="images" id="hufflepuff" src="${data.image}" alt="${data.name}" />
            <p class="nomPerso">${data.name}</p>
            <p class="nomPerso">${data.house}</p>
            <p class="nomPerso">${data.role}</p>
        </div>
    `)
    } else {
        return (`
        <div class="houseRavenclaw">
            <img onclick="giveInfo()" class="images" id="ravenclaw" src="${data.image}" alt="${data.name}" />
            <p class="nomPerso">${data.name}</p>
            <p class="nomPerso">${data.house}</p>
            <p class="nomPerso">${data.role}</p>
        </div>
    `)
    }  
    
}

async function displayCard(namePerso){
    var result = ""
    for (let i = 0; i < namePerso.length; i++){
        const data = await displayPerso(namePerso[i], i)
        result = result + String(data)
    }
    document.getElementById("card1").innerHTML = result
    document.getElementById("card2").innerHTML = result
    document.getElementById("card3").innerHTML = result
    document.getElementById("card4").innerHTML = result
    document.getElementById("card5").innerHTML = result

}

let persoName = ["harry-potter", "ron-weasley", "draco-malfoy", "hermione-granger", "minerva-mcgonagall", "severus-snape",
                "albus-dumbledore", "lord-voldemort", "sirius-black", "gilderoy-lockhart", "vincent-crabbe", "gregory-goyle",
                "cedric-diggory", "neville-longbottom", "bellatrix-lestrange", "luna-lovegood", "cho-chang", "lucius-malfoy",
                "doloress-umbridge", "alastor-moody", "nymphadora-tonks", "remus-lupin", "fred-weasley", "george-weasley",
                "ginny-weasley", "quirinus-quirrel", "rubeus-hagrid", "peter-pettigrew", "viktor-krum", "fleur-delacour"]
 
displayCard(persoName)

function openTab(x){
    let contents = document.querySelectorAll(".tab-content")
    let btns = document.querySelectorAll("button")
    let gryffindor = document.querySelectorAll(".houseGryffindor")
    let slytherin = document.querySelectorAll(".houseSlytherin")
    let hufflepuff = document.querySelectorAll(".houseHufflepuff")
    let raven = document.querySelectorAll(".houseRavenclaw")
    for(let i =0; i < contents.length; i++){
        contents[i].style.display = "none";
        btns[i].classList.remove("active");
    }
    for(let i =0; i < gryffindor.length; i++){ 
        gryffindor[i].style.display = "none";
    }
    for(let i =0; i < slytherin.length; i++){ 
        slytherin[i].style.display = "none";
    }
    for(let i =0; i < hufflepuff.length; i++){ 
        hufflepuff[i].style.display = "none";
    }
    for(let i =0; i < raven.length; i++){ 
        raven[i].style.display = "none";
    }
    //tous les contents ont display none
    contents[x].style.display = "block";
    btns[x].classList.add("active");
    if (x == 0 ){
        for(let i =0; i < gryffindor.length; i++){ 
            gryffindor[i].style.display = "block";
        }
        for(let i =0; i < slytherin.length; i++){ 
            slytherin[i].style.display = "block";
        }
        for(let i =0; i < hufflepuff.length; i++){ 
            hufflepuff[i].style.display = "block";
        }
        for(let i =0; i < raven.length; i++){ 
            raven[i].style.display = "block";
        }
    } else if (x == 1 ){
        for(let i =0; i < gryffindor.length; i++){ 
            gryffindor[i].style.display = "block";
        }
    } else if (x == 2){
        for(let i =0; i < slytherin.length; i++){ 
            slytherin[i].style.display = "block";
        }
    } else if (x == 3){
        for(let i =0; i < hufflepuff.length; i++){ 
            hufflepuff[i].style.display = "block";
        }
    } else {
        for(let i =0; i < raven.length; i++){ 
            raven[i].style.display = "block";
        }}
}

function openNav(){
    let navi = document.querySelector("nav")
    navi.classList.toggle("active")
}

function giveInfo(){
    console.log("boo");
}