var donate_pressed = true;
var sospeso_pressed = false;


//change image and navigate back to pick what to do page.
function nav_back(){

	console.log("go back to Homepage");
}

//set the table content into the things you've donated
function setDonateTable(){

	console.log("set donate table");
	document.getElementById("place-holder").style.height = "90px"
	var newHTML = new String();
	newHTML = newHTML.concat('<ul><li class="row"><div class="todo-icon"><img src="image/provided_img_book.png"></div><div class="todo-content"><h4 class="todo-name">Raised <strong>10</strong>  <strong> Sospeso !</strong></h4>Story books</div></li>');
    newHTML = newHTML.concat('<li class="row"><div class="todo-icon"><img src="image/provided_img_table.png"></div><div class="todo-content"><h4 class="todo-name">Raised<strong> 5 Sospeso !</strong></h4></div> A Table Donated</li>');
    newHTML = newHTML.concat('<li class="row"><div class="todo-icon"><img src="image/provided_img_baseball_bat.png"></div><div class="todo-content"><h4 class="todo-name">Raised <strong>15 Sospeso !</strong></h4> A Baseball Bat Donated</div></li>');
    newHTML = newHTML.concat('<li class="row"><div class="todo-icon"><img src="image/provided_img_pc.png"></div><div class="todo-content"><h4 class="todo-name">Raised<strong>20 Sospeso !</strong></h4>A PC Donated</div></li></ul>');
    document.getElementById("todo-table").innerHTML = newHTML;

}

//set the table content into the things you've exchanged from Sospeso
function setSospesoTable(){

	console.log("set sospeso table");
	document.getElementById("place-holder").style.height = "172px"
	var newHTML = new String();
	newHTML = newHTML.concat('<ul><li class="row"><div class="todo-icon"><img src="image/sospeso_img_books.png"></div><div class="todo-content"><h4 class="todo-name">Gave out <strong>10</strong>  <strong> Sospeso !</strong></h4>Won some books</div></li>');
    newHTML = newHTML.concat('<li class="row"><div class="todo-icon"><img src="image/sospeso_img_sofa.png"></div><div class="todo-content"><h4 class="todo-name">Gave out <strong>20 Sospeso !</strong></h4>Won a sofa</div></li>');
    newHTML = newHTML.concat('<li class="row"><div class="todo-icon"><img src="image/sospeso_img_dolls.png"></div><div class="todo-content"><h4 class="todo-name">Gave out <strong>5 Sospeso</strong></h4>Won some dolls</div></li>');
    document.getElementById("todo-table").innerHTML = newHTML;


}

function updateTableAndTab(){

	//currently showind donate table
	if(donate_pressed === true){
		//set tab icons
		document.getElementById('donate-bar').innerHTML="<img src='image/tab_donation_unselected_320.png'>";
		document.getElementById('sospeso-bar').innerHTML="<img src='image/tab_sospeso_selected_320.png'>";
		//set title
		document.getElementById("current-tab").innerHTML = "Sospeso Exchanged"
		setSospesoTable();
	}
	else{

		document.getElementById('donate-bar').innerHTML="<img src='image/tab_donation_selected_320.png'>";
		document.getElementById('sospeso-bar').innerHTML="<img src='image/tab_sospeso_unselected_320.png'>";
		//set title
		document.getElementById("current-tab").innerHTML = "Second-hand Goods Donated"
		setDonateTable();


	}

	//update boolean value
	donate_pressed = !donate_pressed;
	sospeso_pressed = !sospeso_pressed;

}