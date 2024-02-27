function getInputValue(){
    var inputVal = document.getElementById("myInput").value;
    //Displaying the Value on the page
    document.getElementById("display").innerHTML = "<br>" + "Welcome!" ;

var world = inputVal;

if (world === 'Hello Kitty') {
document.getElementById("worlds").innerHTML= "<img src='hellokitty.webp'>";

}else if(world === 'My Melody'){
document.getElementById("worlds").innerHTML= "<img src='melody.gif'>"; 
 } 
else if(world === 'Cinnamoroll'){
document.getElementById("worlds").innerHTML= "<img src='cinnWorld.gif'>";
 } 
else if(world === 'Kuromi'){
document.getElementById("worlds").innerHTML= "<img src='kuromi.gif'>";    
 } 
 else if(world === 'Keroppi'){
document.getElementById("worlds").innerHTML= "<img src='keroppi.gif'>";    
} 
else if(world === 'Pochacco'){
document.getElementById("worlds").innerHTML= "<img src='pochacco.gif'>";    
} 
else if(world === 'Little Twin Stars'){
document.getElementById("worlds").innerHTML= "<img src='littleTwin.webp'>";   
} 
else if(world === 'Pompompurin'){
document.getElementById("worlds").innerHTML= "<img src='pom.gif'>";     
}
else {
console.log('Invalid.');
document.getElementById("worlds").innerHTML= "invalid";
}
}