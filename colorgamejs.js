alert("pick a mode. BY default HARD");
var colors= generaterandomcolors(6); 
var numsq=6;
var one=document.querySelector("#h1span");
var messagedisplay=document.querySelector("#message");
var squares=document.querySelectorAll(".square");
var optcolor=pickcolor();
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");
hardbtn.classList.add("selected");


h1.style.background="steelblue"
easybtn.addEventListener("click",function() {
	numsq=3;
	easybtn.classList.add("selected");

hardbtn.classList.remove("selected");
colors= generaterandomcolors(numsq);
optcolor=pickcolor();
 one.textContent=optcolor;
for(var i=0;i<squares.length;i++) {
	if(colors[i]){
		squares[i].style.background=colors[i];
	}
else
			squares[i].style.display="none";

}
});

hardbtn.addEventListener("click",function() {
	numsq=6;
	hardbtn.classList.add("selected");
easybtn.classList.remove("selected");
colors= generaterandomcolors(numsq);
optcolor=pickcolor();
 one.textContent=optcolor;

for(var i=0;i<squares.length;i++) {
		squares[i].style.background=colors[i];
			squares[i].style.display="block";
}
});

reset.addEventListener("click",function() {
colors=generaterandomcolors(numsq);
optcolor=pickcolor();
one.textContent=optcolor;
for(var i=0;i<colors.length;i++) {
	squares[i].style.background=colors[i];
}
h1.style.background="steelblue";
reset.textContent="New Colors"
reset.style.background=steelblue;
});

for(var i=0;i<colors.length;i++) {
	squares[i].style.background=colors[i];

one.textContent=optcolor;

squares[i].addEventListener("click",function() {
var clickedvaraible=this.style.background;
console.log(clickedvaraible,optcolor);

if(clickedvaraible==optcolor) {
messagedisplay.textContent="Correct";
changecolors(clickedvaraible) 
h1.style.background=clickedvaraible;
reset.textContent="Wanna play Again bro?"
}
else {
this.style.background="#232323";
messagedisplay.textContent="Try Again Brother!!"
}
});
}


function changecolors(color) {
	for(var i=0;i<colors.length;i++) {
squares[i].style.background=color;
 }
}

function pickcolor() {
	var random=Math.floor((Math.random() * colors.length));
	return colors[random];
}

function generaterandomcolors(num) {
	var arr=[];
	for(var i=0;i<num;i++) {
arr.push(randomcolors()); 
	}
	return arr;
}

function randomcolors() {
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}