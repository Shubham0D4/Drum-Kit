document.querySelector(".w").addEventListener("click", function(){
    var audio = new Audio("sounds/tom-1.mp3"); 
    audio.play();
    blink("w");
 });
 document.querySelector(".a").addEventListener("click", function(){
    var audio = new Audio("sounds/tom-2.mp3"); 
    audio.play();
    blink("a");
 });
 document.querySelector(".s").addEventListener("click", function(){
    var audio = new Audio("sounds/tom-3.mp3"); 
    audio.play();
    blink("s");
 });
 document.querySelector(".d").addEventListener("click", function(){
    var audio = new Audio("sounds/tom-4.mp3"); 
    audio.play();
    blink("d");
 });
 document.querySelector(".j").addEventListener("click", function(){
    var audio = new Audio("sounds/crash.mp3"); 
    audio.play();
    blink("j")
 });
 document.querySelector(".k").addEventListener("click", function(){
    var audio = new Audio("sounds/kick-bass.mp3"); 
    audio.play();
    blink("k");
 });
 document.querySelector(".l").addEventListener("click", function(){
    var audio = new Audio("sounds/snare.mp3"); 
    audio.play();
    blink("l");
 });

 document.addEventListener("keypress", function(event){
    
    if(event.key == 'w'){
        var audio = new Audio("sounds/tom-1.mp3"); 
        audio.play();
        blink(event.key);
    } else if(event.key == 'a'){
        var audio = new Audio("sounds/tom-2.mp3"); 
        audio.play();
        blink(event.key);
    } else if(event.key == 's'){
        var audio = new Audio("sounds/tom-3.mp3"); 
        audio.play();
        blink(event.key);
    } else if(event.key == 'd'){
        var audio = new Audio("sounds/tom-4.mp3"); 
        audio.play();
        blink(event.key);
    } else if(event.key == 'j'){
        var audio = new Audio("sounds/crash.mp3"); 
        audio.play();
        blink(event.key);
    } else if(event.key == 'k'){
        var audio = new Audio("sounds/kick-bass.mp3"); 
        audio.play();
        blink(event.key);
    } else if(event.key == 'l'){
        var audio = new Audio("sounds/snare.mp3"); 
        audio.play();
        blink(event.key);
    }
 });
 
 function blink(k){
    var list = document.querySelector("." + k);
    list.classList.add("pressed");

    setTimeout(function(){
        list.classList.remove("pressed");
    }, 100);  //o.1sec
 }




 //object creation using constructor function and assigning a function to obeject
 var houseKeeper1 = new HouseKeeper("jimmy", 38, [english, marathi]);
 function HouseKeeper(name, age, languages){
     this.hisname = name,
     this.age = age,
     this.nativelang = languages,
     this.moveobj = function(){
        console.log("moving..");
        Pick();
        move();
     }
 }
 console.log(houseKeeper1);

 