//loading
function loadPage(){
    setTimeout(showPage, 3000);
}  
function showPage(){
    document.getElementById("loader").style.display = "none";
    document.getElementById("allPage").style.opacity = "0.8";
    document.getElementById('allPage').style.transition = "all 2s";
}

//language button
document.getElementById("en").style.opacity = "0";
document.getElementById('en').style.transition = '250ms opacity ease';
document.getElementById("ru").style.opacity = "0";
document.getElementById('ru').style.transition = '250ms opacity ease';
document.getElementById("de").style.opacity = "0";
document.getElementById('de').style.transition = '250ms opacity ease';

function displayONLang(){
    document.getElementById("en").style.opacity = "0.8";
    document.getElementById("en").style.transition = "all 2s";
    document.getElementById('ru').style.opacity = "0.8";
    document.getElementById("ru").style.transition = "all 2s";
    document.getElementById('de').style.opacity = "0.8";
    document.getElementById('de').style.transition = "all 2s";
}
function displayOFFLang(){
    document.getElementById("en").style.opacity = "0";
    document.getElementById('ru').style.opacity = "0";
    document.getElementById('de').style.opacity = "0";
}

document.getElementById("butStyle").addEventListener("mouseover",displayONLang); 
document.getElementById("butStyle").addEventListener("mouseout",displayOFFLang); 
