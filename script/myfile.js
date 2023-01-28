  const body = document.querySelector("body");
  

var language =
{
	eng : {
	welcome:"Welcome to Nizar2Draw",
	test:"hi every body"
	},
	ar :{
	welcome:"أهلا وسهلا بكم في nizar2draw",
	test:"اهلا وسهلا بالجميع hello"
	}

};
function jm (){
var a =document.getElementById("jm");
a.style.top="120px";
var b =document.getElementById("jm2");
b.style.top="290px";
}

var myDiv=document.getElementsByClassName("tt");
myDivList=Array.from(myDiv);

myDivList.forEach(function(a){
	a.addEventListener("click",function(){
		
		document.getElementsByClassName("overlay")[0].style.display="block";
		document.getElementsByClassName("hh")[0].src=this.getAttribute("data-id");
		document.getElementsByClassName("par")[0].innerHTML=this.getAttribute("data-x");
		 body.style.overflow = "hidden";
	})

});

var close=document.getElementById("close");
function yy(){
	document.getElementsByClassName("overlay")[0].style.display="none";
	 body.style.overflow = "auto";
}


