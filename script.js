var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-links");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-links")
    document.getElementById(tabname).classList.add("active-tab")
}

var sidemenu = document.getElementById("sidemenu");
// var menu = document.querySelector('nav ul a');
var menu = document.querySelector('nav ul a');

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}
function selectItem() {
    sidemenu.style.right = "-200px";    
}




function sendemail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "username",
        Password : "password",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}


// let loadmorebtn = document.getElementById("btn2");
// let currentitem = 3;

// loadmorebtn.onClick = ()=>{
//     let box = [...document.getElementsByClassName("certificate-card")];
//     for (var i = currentitem; i < currentitem + 3; i++){
//         box[i].style.display = 'inline-block';
//     }
//     currentitem += 3;
// }

let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 3;

loadMoreBtn.onclick = () =>{
   let boxes = [...document.querySelectorAll('.container .box-container .box')];
   for (var i = currentItem; i < currentItem + 3; i++){
      boxes[i].style.display = 'inline-block';
   }
   currentItem += 3;

   if(currentItem >= boxes.length){
      loadMoreBtn.style.display = 'none';
   }
}









// window.addEventListener("scroll", function(){
//     var h = this.document.querySelector("nav");
//     h.classList.toggle("sticky", this.window.scrollY>0);
// })
