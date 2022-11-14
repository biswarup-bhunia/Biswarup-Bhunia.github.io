let details=document.getElementsByClassName("skill-ed");
let content=document.getElementsByClassName("contents");

window.addEventListener("scroll",function(){
    let nav=this.document.querySelector("nav");
    nav.classList.toggle("sticky",window.scrollY > 0);
})

opentab=(name)=>{
    for(detail of details){
        detail.classList.remove("active");
    }
    for(con of content){
        con.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active");
    document.getElementById(name).classList.add("active-tab");
}


let sidemenu=document.getElementById("sidemenu");

openmenu=()=>{
sidemenu.style.right="0";
}

closemenu=()=>{
    sidemenu.style.right="-200px";
}
// Message sending script
const scriptURL = 'https://script.google.com/macros/s/AKfycbzSRLhYpIkgrJDtYqvXX3iNXSY2ny0dDjliYc4t4_B2wpFzXMM706RnuQhrjyf2vtNn/exec'
const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById("msg");
form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
    msg.innerHTML="Message Sent Successfully";
    setTimeout(()=>{
        msg.innerHTML="";
    },5000);
    form.reset();
})
    .catch(error => console.error('Error!', error.message))
})
