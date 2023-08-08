let element=document.getElementById("myBTN");


let love=Math.floor(Math.random() * 101);



element.addEventListener("click", function(){
    document.getElementById("head").innerHTML="Your Love Score is "+love+" %❤️";
});

