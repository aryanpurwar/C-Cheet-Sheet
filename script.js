let cpp= document.querySelector(".cpp");
let text1= document.querySelector(".text1");
let toCopy1= text1.textContent;
cpp.addEventListener("click", function(){
    navigator.clipboard.writeText(toCopy1);
    cpp.textContent="Copied";
    setTimeout(()=>{cpp.textContent="Copy";},800);                   
});

let add= document.querySelector(".add");
let text2 = document.querySelector(".text2");
let toCopy2 = text2.textContent;
add.addEventListener("click", function(){
    navigator.clipboard.writeText(toCopy2);
    add.textContent="Copied";
    setTimeout(()=>{add.textContent="Copy";},800);
})

let swap= document.querySelector(".swap");
let text3 = document.querySelector(".text3");
let toCopy3 = text3.textContent;
swap.addEventListener("click", function(){
    navigator.clipboard.writeText(toCopy3);
    swap.textContent="Copied";
    setTimeout(()=>{swap.textContent="Copy";},800);
})  

let interest = document.querySelector(".interest");
let text4 = document.querySelector(".text4");
let toCopy4 = text4.textContent;
interest.addEventListener("click",function(){
    navigator.clipboard.writeText(toCopy4);
    interest.textContent="Copied";
    setTimeout(()=>{interest.textContent="Copy";},800);
})

let fact = document.querySelector(".fact");
let text5 = document.querySelector(".text5");
let toCopy5 = text5.textContent;
fact.addEventListener("click",function(){
    navigator.clipboard.writeText(toCopy5);
    fact.textContent="Copied";
    setTimeout(()=>{fact.textContent="Copy";},800);
})

let evenOdd = document.querySelector(".evenOdd");
let text6 = document.querySelector(".text6");
let toCopy6 = text6.textContent;
evenOdd.addEventListener("click",function(){
    navigator.clipboard.writeText(toCopy6);
    evenOdd.textContent="Copied";
    setTimeout(()=>{evenOdd.textContent="Copy";},800);
})

let maximum = document.querySelector(".maximum");
let text7 = document.querySelector(".text7");
let toCopy7 = text7.textContent;
maximum.addEventListener("click",function(){
    navigator.clipboard.writeText(toCopy7);
    maximum.textContent="Copied";
    setTimeout(()=>{maximum.textContent="Copy";},800);
})

let arrayInput = document.querySelector(".arrayInput");
let text8 = document.querySelector(".text8");
let toCopy8 = text8.textContent;
arrayInput.addEventListener("click",function(){
    navigator.clipboard.writeText(toCopy8);
    arrayInput.textContent="Copied";
    setTimeout(()=>{arrayInput.textContent="Copy";},800);
})

let arrayMax = document.querySelector(".arrayMax");
let text9 = document.querySelector(".text9");
let toCopy9 = text9.textContent;
arrayMax.addEventListener("click",function(){
    navigator.clipboard.writeText(toCopy9);
    arrayMax.textContent="Copied";
    setTimeout(()=>{arrayMax.textContent="Copy";},800);
})
let arraySum = document.querySelector(".arraySum");
let text10 = document.querySelector(".text10");
let toCopy10 = text10.textContent;
arraySum.addEventListener("click",function(){
    navigator.clipboard.writeText(toCopy10);
    arraySum.textContent="Copied";
    setTimeout(()=>{arraySum.textContent="Copy";},800);
})

