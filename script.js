const aside = document.getElementById("aside");
const main = document.getElementById("main");
const nav_toggler = document.getElementById("nav_toggler")

function toggleAside() {
    if( aside.style.width = "270px" &&  aside.style.left != "-270px"){
        aside.style.left = "-270px";
        aside.style.width = "0px";
        main.style.paddingLeft = "0px"
        nav_toggler.style.left = "30px";}    
    else{
        aside.style.left = "0px";
        aside.style.width = "270px";
        main.style.paddingLeft = "270px"; 
        nav_toggler.style.left = "300px"         
    }
}
