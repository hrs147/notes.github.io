shownotes();

let addbtn = document.getElementById("addBtn")
addbtn.addEventListener("click",function(e){
    let addtxt = document.getElementById("addTxt");
    let addTitle = document.getElementById("addTitle")
    let notes = localStorage.getItem("notes")
    if(notes == null)
    {
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    let myObj = {
        title: addTitle.value,
        text: addtxt.value
    }
    notesObj.push(myObj)
    localStorage.setItem("notes",JSON.stringify(notesObj))
    addtxt.value = "";
    addTitle.value = "";
    console.log(notesObj)
    shownotes()
})

// display notes functions

function shownotes() {
    let notes = localStorage.getItem("notes")
    if(notes == null)
    {
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element,index) {
        
    html+= `<div class="card_no" id="">
    <div class="card-info">
        <h3>${index + 1}.  ${element.title}</h3>
        <p>${element.text}</p>
        <button id="${index}" onclick="deletenotes(this.id)">delete</button>
        
    </div>
</div>`;
        
    });
    let notesElm = document.getElementById("notes")
    if(notesObj.length !=0)
    {
        notesElm .innerHTML =  html;
    }
    else{
        notesElm.innerHTML = `nothing to show please "add a notes ".`;
        notesElm.style.textTransform = "capitalize";
        notesElm.style.margin="10px";

        

    }
};

function deletenotes(index) {
    console.log("i am deleting",index)
    let notes = localStorage.getItem("notes")
    if(notes == null)
    {
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1)
    localStorage.setItem("notes",JSON.stringify(notesObj));
    shownotes()
}
function booknotes(index,element) {
    
    
}