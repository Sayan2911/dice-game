function randomNumber1(){
    var n=Math.random()*6+1;
    
  // console.log(Math.floor(n));
  return Math.floor(n);
}   
x=randomNumber1()

document.querySelector(".img1").src=("images" +  "\\" + "dice" + x + ".png");


function randomNumber2(){
    var n=Math.random()*6+1;
    
  // console.log(Math.floor(n));
  return Math.floor(n);
}   
y=randomNumber2()

document.querySelector(".img2").src=("images" +  "\\" + "dice" + y + ".png");

function result(){
    if(x>y){
        winner="player 1 is winner  ";
    }
    if(x<y) 
    {
        winner="player 2 is winner"; 
    }
    if(x==y)
    {
        winner="the match is draw";
    }
    return winner;
}
document.querySelector("h1").innerHTML=result();

function renew(){
    document.querySelector(".img1").style.visibility="hidden";
    document.querySelector(".img2").style.visibility="hidden";
    document.querySelector("p").style.marginTop="8rem";

    document.querySelector("h1").innerHTML="Refresh Me";
    return h1;
}
