

// This is the main code as I wrote it.
/*var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

button.addEventListener("click", function() {
	if(input.value.length > 0) {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";
	} else {
		alert("Please enter a value");
	};
});

input.addEventListener("keypress", function(code) {
	if(input.value.length > 0 && code.keyCode === 13) {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";
	} 
	else if (input.value.length === 0 && event.keyCode === 13){
		alert("Please enter a value");
	};
});*/

//This is the refactored code. Do not Repeat Yourself.

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var myNodelist = document.getElementsByTagName("LI");
var close = document.getElementsByClassName("close");


function inputLength() {
	return input.value.length;
};
 



// Created a "close" button and append it to each list item
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u2716");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
for (var i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

//this add a checked stuff to the lists

 	ul.onclick = function(check) {
		if (check.target.tagName === 'LI') {
			check.target.classList.toggle('checked');
		}
	}
	

// ul.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);

//The create list function and it also add a symbol to the lists
function createListElement() {
	var li = document.createElement("li");
	li.innerText = (input.value);
	ul.appendChild(li);
	input.value = "";
	var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u2716"); //u00D7 unicode character for cancel
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
	//The below is ZTM method before. but you can use easy way.
	//You just set the classname to **bold** which is in the html file
	//Then you specify the innertext to input.value
	/*li.appendChild(document.createTextNode(input.value));*/
	
}
		 
var modalss = document.getElementById('mymodal');
var span = document.getElementsByClassName('close-button')[0];
var span2 = document.getElementsByClassName('close-button2')[0];
var modalss2 = document.getElementById('mymodal2');

// Below is the code for the no character popup
function popUp() {
	modalss.style.display = 'block';
	span.onclick = function() {
		modalss.style.display = "none";	
	}
// The below is if you want the modal to clear after you click anywhere
	// window.onclick = function(event) {
	// 	if (event.target == modalss) {
	// 		modalss.style.display= "none"
	// 	}
	// }
}; 
//Below is the code for the character limit popup
function popUp2() {
	modalss2.style.display = 'block';
	span2.onclick = function() {
		modalss2.style.display = "none";	
	}
// The below is if you want the modal to clear after you click anywhere
	// window.onclick = function(event) {
	// 	if (event.target == modalss) {
	// 		modalss.style.display= "none"
	// 	}
	// }
}; 

//The addlist function for clicking enter
function addListafterClick() {
	if(inputLength() > 64) {
		popUp2();
	} else if(inputLength() > 0) {
		createListElement();
	} else if(inputLength() === 0){
		popUp();
	}
}

//The addlist function for clicking enter on keyboard
function addListafterKeypress(code) {
	if(inputLength() > 64 && code.keyCode === 13) {
		popUp2();
	} else if(inputLength() > 0 && code.keyCode === 13) {
		createListElement();
	} 
	else if (inputLength() === 0 && event.keyCode === 13){
		popUp();
	}	
};


button.addEventListener("click", addListafterClick);
input.addEventListener("keypress", addListafterKeypress);