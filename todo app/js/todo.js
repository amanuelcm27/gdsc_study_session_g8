
    
let button = document.getElementById("btn");
button.addEventListener('click',function() {
    let input = document.querySelector('.form-input');
    let data = input.value;
    if (data) {
        let parent = document.getElementById("itemlist")
        // creating lists and buttons
        let listitem = document.createElement("li");
        let removebtn = document.createElement("button");
        removebtn.classList.add ("remove-btn")
        removebtn.textContent= "Remove";
        listitem.textContent = data;
        listitem.className = "text-item";
        // add listiem to ul and add button to list item 
        parent.appendChild(listitem);
        listitem.appendChild(removebtn);
        input.value = ""
        removebtn.addEventListener ("click", function() {
            listitem.remove();
        });
    }
   
});
