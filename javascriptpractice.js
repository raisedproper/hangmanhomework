var NewItemCounter = 1;
var list = document.getElementById("list");
var button = document.getElementById("button");
var headline = document.getElementById("headline");
var listItems = document.getElementById("list").getElementsByTagName("li");
var button2 = document.getElementById("button2");
var list2 = document.getElementById("list2");

function newListItems() { 
    for (i = 0; i < listItems.length; i++) {
        listItems[i].addEventListener("click", activateItem); 
    }
}

newListItems();

function activateItem(){
    headline.innerHTML = this.innerHTML
}

button.addEventListener("click", createNewItem);



function createNewItem(){
    list.innerHTML += "<li>Something New " + NewItemCounter + "</li>";
    NewItemCounter++;
    newListItems()
}

button2.addEventListener("click", createNewItem);




