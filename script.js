const aside = document.getElementById("aside");
const main = document.getElementById("main");


function toggleAside() {
    if( aside.style.width = "270px" &&  aside.style.left != "-270px"){
        aside.style.left = "-270px";
        aside.style.width = "0px";
        main.style.paddingLeft = "0px";}    
    else{
        aside.style.left = "0px";
        aside.style.width = "270px";
        main.style.paddingLeft = "270px";          
    }
}