/*
File: app.js
Author: Ye Haoze
Copyright: 2024.04.03., Ye Haoze
Group: I-2-N
Date: 2024.04.03.
Github: https://github.com/40022808/
*/


console.log("app.js, Ye Haoze, 2024.04.03. , I-2-N")
console.log("hexadecagon területét Számítása")


const oldal = document.getElementById("oldal");
const terulet = document.getElementById("terulet");
const button = document.getElementById("button");


button.addEventListener("click",()=>{
    szamolas()
})


function szamolas(){
    let szam = oldal.value
    szam = szam * 4
    szam = szam * szam
    let szam2 = oldal.value
    szam2 = 2*Math.sqrt(2);
    szam2 = szam2 + 4
    szam2 = Math.sqrt(szam2);
    szam2 = szam2 + 1 + Math.sqrt(2);
    terulet.value = szam * szam2
}