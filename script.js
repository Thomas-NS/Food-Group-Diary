var n1 = 0; var n2 = 0; var n3 = 0; var n4 = 0; var n5 = 0; var n6 = 0;
document.getElementById("number1").innerHTML = n1;
document.getElementById("number2").innerHTML = n2;
document.getElementById("number3").innerHTML = n3;
document.getElementById("number4").innerHTML = n4;
document.getElementById("number5").innerHTML = n5;
document.getElementById("number6").innerHTML = n6;

//button counter functions
function minus1(){
    if(n1 > 0){
		n1--;
		document.getElementById("number1").innerHTML = n1;
}
changeColor(n1,n2,n3,n4,n5,n6);
}
function plus1(){
	n1++;
	document.getElementById("number1").innerHTML = n1;
	changeColor(n1,n2,n3,n4,n5,n6);
}

function minus2(){
    if(n2 > 0){
		n2--;
		document.getElementById("number2").innerHTML = n2;
	}
	changeColor(n1,n2,n3,n4,n5,n6);
}
function plus2(){
	n2++;
	document.getElementById("number2").innerHTML = n2;
	changeColor(n1,n2,n3,n4,n5,n6);
}

function minus3(){
    if(n3 > 0){
		n3--;
		document.getElementById("number3").innerHTML = n3;
}
changeColor(n1,n2,n3,n4,n5,n6);
}
function plus3(){
	n3++;
	document.getElementById("number3").innerHTML = n3;
	changeColor(n1,n2,n3,n4,n5,n6);
}

function minus4(){
    if(n4 > 0){
		n4--;
		document.getElementById("number4").innerHTML = n4;
}
changeColor(n1,n2,n3,n4,n5,n6);
}
function plus4(){
	n4++;
	document.getElementById("number4").innerHTML = n4;
    	changeColor(n1,n2,n3,n4,n5,n6);
}

function minus5(){
    if(n5 > 0){
		n5--;
		document.getElementById("number5").innerHTML = n5;
	}

changeColor(n1,n2,n3,n4,n5,n6);
}
function plus5(){
	n5++;
	document.getElementById("number5").innerHTML = n5;
	changeColor(n1,n2,n3,n4,n5,n6);
}

function minus6(){
    if(n6 > 0){
		n6--;
		document.getElementById("number6").innerHTML = n6;
	}
changeColor(n1,n2,n3,n4,n5,n6);
}
function plus6(){
	n6++;
	document.getElementById("number6").innerHTML = n6;
	changeColor(n1,n2,n3,n4,n5,n6);
}
var u4 = false;
var o4 = false;
var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
//colours of buttons if age is under four
function underfour(){
	b1.style.backgroundColor = "rgb(186, 37, 37,0.4)";
	b2.style.backgroundColor = "rgb(186, 37, 37,0.8)";
	u4 = true;
	o4 = false;
	changeColor(n1,n2,n3,n4,n5,n6)
}
//colours of buttons if age is above four
function overfour(){
	b1.style.backgroundColor = "rgb(186, 37, 37,0.8)";
	b2.style.backgroundColor = "rgb(186, 37, 37,0.4)";
	u4 = false;
	o4 = true;
	changeColor(n1,n2,n3,n4,n5,n6)
}
//change colour of buttons
function changeColor(n1,n2,n3,n4,n5,n6){
if(o4){
	if(n6 < 5){
		number6.style.backgroundColor = "orange";
	}
    else if(n6 >= 5 & n6 <= 7){
		number6.style.backgroundColor = "green";
	}
	else{
    	number6.style.backgroundColor = "rgb(128, 28, 20)";
	}

	if(n5 < 4){
		number5.style.backgroundColor = "orange";
	}
	else if(n5 >= 4 & n5 <= 5){
		number5.style.backgroundColor = "green";
	}
	else{
		number5.style.backgroundColor = "rgb(128, 28, 20)";
	}

	if(n4 < 3){
		number4.style.backgroundColor = "orange";
	}
    else if(n4 == 3){
         number4.style.backgroundColor = "green";
	}
	else{
         number4.style.backgroundColor = "rgb(128, 28, 20)";
	}

	if(n3 < 2){
		 number3.style.backgroundColor = "orange";
	}
    else if(n3 == 2){
         number3.style.backgroundColor = "green";
	}
	else{
		 number3.style.backgroundColor = "rgb(128, 28, 20)";
	}

    if(n2 < 1){
		 number2.style.backgroundColor = "orange";
	}
	else if(n2 == 1 | n2 == 2){
		number2.style.backgroundColor = "green";
	}
	else{
        number2.style.backgroundColor = "rgb(128, 28, 20)";
	}

	if(n1 <= 1){
		number1.style.backgroundColor = "green";
	}
	else{
        number1.style.backgroundColor = "rgb(128, 28, 20)";
	}
}
else if(u4){
		if(n6 < 3){
		number6.style.backgroundColor = "orange";
	}
    else if(n6 >= 3 & n6 <= 5){
		number6.style.backgroundColor = "green";
	}
	else{
    	number6.style.backgroundColor = "rgb(128, 28, 20)";
	}

	if(n5 < 3){
		number5.style.backgroundColor = "orange";
	}
	else if(n5 >= 3 & n5 <= 5){
		number5.style.backgroundColor = "green";
	}
	else{
		number5.style.backgroundColor = "rgb(128, 28, 20)";
	}

	if(n4 < 3){
		number4.style.backgroundColor = "orange";
	}
    else if(n4 == 3){
         number4.style.backgroundColor = "green";
	}
	else{
         number4.style.backgroundColor = "rgb(128, 28, 20)";
	}

	if(n3 < 2){
		 number3.style.backgroundColor = "orange";
	}
    else if(n3 == 2){
         number3.style.backgroundColor = "green";
	}
	else{
		 number3.style.backgroundColor = "rgb(128, 28, 20)";
	}

    if(n2 < 1){
		 number2.style.backgroundColor = "orange";
	}
	else if(n2 == 1){
		number2.style.backgroundColor = "green";
	}
	else{
        number2.style.backgroundColor = "rgb(128, 28, 20)";
	}

	if(n1 == 0){
		number1.style.backgroundColor = "green";
	}
	else{
        number1.style.backgroundColor = "rgb(128, 28, 20)";
	}
  }
}
//check date is not in the past
function validateDate(){
	let x = new Date();
	let y = x.getFullYear();
	let m = x.getMonth()+1;
	let d = x.getDate();
	let today = y+"-"+m+"-"+d;

	if(m < 10){
		today = y+"-0"+m+"-"+d;
	}
	let input = document.getElementById("date");
	let date = input.value;
	let error = document.getElementById("error");
	let datetext = document.getElementById("datetext")

	if(date < today){
		error.innerHTML = "Please enter a date that is not in the past!";
		error.style.display = "block";
		datetext.style.display = "none";
	}
	else{
		datetext.innerHTML = date;
	    error.style.display = "none";
		datetext.style.display = "block";
	}
}

