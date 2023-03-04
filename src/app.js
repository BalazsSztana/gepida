/*
* File: app.js
* Author: Sztana Balázs
* Copyright: 2023, Sztana Balázs
* Group: Szoft I-2-E
* Date: 2023-03-04
* Github: https://github.com/BalazsSztana/
* Licenc: GNU GPL
*/

const torzs = document.querySelector("#body");

var dolgList = [
    {name: "cassis", wheel: 28, use: "offroad", price: 557900},
    {name: "Albion 900", wheel: 28, use: "trekking", price: 519900},
    {name: "Asgard", wheel: 29, use: "technikás utak", price: 519900},
    {name: "Ruga", wheel: 29, use: "hegyi", price: 372900},
    {name: "Reptila", wheel: 28, use: "városi", price: 308900},
    {name: "Sirmium", wheel: 29, use: "hegyi", price: 264900}
    
];

function tablazatKeszites(){
    dolgList.forEach((dolg)=>{
        //console.log(emp.name)

        let sor = document.createElement("tr");

        let adatName = document.createElement("td");
        let adatWheel = document.createElement("td");
        let adatUse = document.createElement("td"); 
        let adatPrice = document.createElement("td") 
        
        adatName.textContent=dolg.name;
        adatWheel.textContent=dolg.wheel;
        adatUse.textContent=dolg.use;
        adatPrice.textContent=dolg.price;

        torzs.append(sor);

        sor.append(adatName);
        sor.append(adatWheel);
        sor.append(adatUse);
        sor.append(adatPrice);

    });
};

tablazatKeszites();