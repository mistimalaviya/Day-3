

// /1

function mishti(){
let a=document.getElementById("number").value;
if(a>0)
{
    console.log("postive number")
}
else if (a==0)
{
    console.log("equal to")


}
else{
    console.log("negative number")
}



}
//2
function misri(){
let b=document.getElementById("number1").value;

if(b >= 90){
    console.log("a is greather")
}
else if( b <= 89 && b >= 80)
{
    console.log("b is greather")
}

else if(b <= 79 && b >= 70 )
{
        console.log("c is greather")
}

else if(b <= 69 && b >=60)
{
    console.log("d is greather")
}
else{

    console.log("f is faiLd")
}



}

// 4

function piyu()
{
    let c=document.getElementById("number2").value;

if(c <= 0 && c >=90){
    console.log("First Quadrants")
}
else if( c <= 90 && c >= 180)
{
    console.log("Second Quadrants")
}

else if(c <= 180 && c >= 270 )
{
        console.log("Third Quadrants")
}

else if(c <= 270 && c >=360)
{
    console.log("Fourth quadrants")
}
else{

    console.log("dobbu")
}


}
// 3

function jatin()
{
    let c=document.getElementById("number3").value;

if(leap % 4 ==0 && leap % 100 == 0){
    console.log("leap year");

}else{
    console.log("Not a leap year");
}
    
}

// 5

function disha()
{
    let a = document.getElementById("number4").value;
  let b = document.getElementById("number4").value;
  let c = document.getElementById("number4").value;

  if (a == b && b == c && a == c) {
   
    console.log(`Equilateral triagle`);
  } else if (a != b && b != c && c != a) {
   
    console.log(`Scalene triagle`);
  } else {
  
    console.log(`lsosceles triagle`);
  }
}