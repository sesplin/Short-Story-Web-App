var subbutton = document.querySelector("#submit-button");
console.log("my button:" , subbutton);

var resbutton = document.querySelector("#reset-button");
console.log("my button:", resbutton)

var themebutton = document.querySelector("#change-theme");

var Personslist = [];
var Placelist = [];
var Thinglist = [];
var Verblist = [];
var Adjlist = [];
var Themes = [];

//var personslist = ["Hannah", "Kori", "Luke", "Mella", "Jayden"];
//var placelist = ["city", "lake", "theater" , "pool" , "car"];
//var thinglist = ["phone", "food", "heart", "house" , "hammer"];
//var verblist = ["eating", "enjoying", "having", "yelling", "bouncing", "talking", "cooking"];
//var adjlist = ["flowery", "careless", "blue", "beautiful", "adorable", "ugly"];
//var Themes = [{Headings: "cadetblue" , Background: "#fff6ba" , story: "coral"} , {Headings: "#00A5E3", Background: "#8DD7BF" , story: "#FF96C5"} , {Headings: "#FC6238" , Background: "#FFD872" , story: "#8B668B"} , {Headings: "#4eb8c3" , Background: "#312342" , story: "#cfe633"} , {Headings: "#f45d4c" , Background: "#a1dbb2" , story: "#f7a541"}];



//var reset = document.getElementById("story");
//var oldstory = reset.innerHTML;

subbutton.onclick = function () {
	//code goes here 
	var currentcolor = Themes[0].story;
	var person = Math.floor(Math.random() * Personslist.length);
	var place = Math.floor(Math.random() * Placelist.length);
	var adj = Math.floor(Math.random() * Adjlist.length);
	var verb = Math.floor(Math.random() * Verblist.length);
	var thing = Math.floor(Math.random() * Thinglist.length);
	var thing2 = Math.floor(Math.random() * Thinglist.length);

	var writtenstory = "The " + Placelist[place] + " was " + Adjlist[adj] + " and " + Personslist[person] + " was " + Verblist[verb] + " the " + Thinglist[thing] + ". " + Personslist[person] + " drove to the " + Placelist[place] + " in a taxi around 7:00 with a bag of " + Thinglist[thing2] + ". ";
	document.getElementById("story").style.color = currentcolor;
	document.getElementById("story").innerHTML = writtenstory;


	//create a new element
	//insert new element into DOM
	//1. query parent element
	var list = document.querySelector("#thelist");
	console.log("my_list:", list);
	//2. create the new child element
	var listItem = document.createElement("li");
	listItem.innerHTML = writtenstory;
	listItem.style.color = "#000000";
	listItem.style.fontSize = "20px";
	//3. append child element to parent element
	list.appendChild(listItem);
};

//resbutton.onclick = function(){
//	reset.innerHTML = oldstory;
//}

themebutton.onclick = function(){
	var theme = Math.floor(Math.random() * Themes.length);
	
//	document.getElementsById("heading").style.color = Themes[theme].Headings;

// element.classList.add();
//	document.getElementsByClassName("heading").classList.add();
	currentcolor = Themes[theme].story;
	document.getElementById("story").style.color = currentcolor;
	document.body.style.backgroundColor = Themes[theme].Background;
};
/*
fetch( "https://api.jsonbin.io/b/600f3fee3126bb747e9eeee3" ).then(function(response){
	response.json().then(function(data){
		data.array.forEach(function(data){
			if(key == "personlist"){
				Personslist = key;
			}
			else if( key == "placelist"){
				Placelist = key;
			}
			else if( key == "thinglist"){
				Thinglist = key;
			}
			else if( key == "verblist"){
				Verblist = key;
			}
			else if( key == "adjlist"){
				Adjlist = key;
			}
			else{
				Themes = key;
			}
		});
	});
});
*/

fetch( "https://api.jsonbin.io/b/601053083126bb747e9f57c6" ).then(function(response){
	response.json().then(function(data){
		Themes = data.themes;
		Adjlist = data.adjlist;
		Verblist = data.verblist;
		Thinglist = data.thinglist;
		Placelist = data.placelist;
		Personslist = data.personlist;
	});
});