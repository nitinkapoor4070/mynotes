 
console.log("Welcome to notes app.");
showNotes();

// If user adds a note, add it to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) {
  let addTxt = document.getElementById("addTxt");
 let addTxtTitle=document.getElementById("addTxtTitle");
  let notes = localStorage.getItem("notes");
  let notes2 = localStorage.getItem("notes2");
  if (notes == null) {
    notesObj = [];
 notesObj2 = [];
  } else {
    notesObj = JSON.parse(notes);
     notesObj2 = JSON.parse(notes2);
  }
if (notes2 == null) {
    notesObj = [];
 notesObj2 = [];
  } else {
    notesObj = JSON.parse(notes);
     notesObj2 = JSON.parse(notes2);
  }

  notesObj.push(addTxt.value);
  notesObj2.push(addTxtTitle.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  localStorage.setItem("notes2", JSON.stringify(notesObj2));
  addTxt.value = "";
  addTxtTitle.value = "";
//   console.log(notesObj);
// console.log(notesObj2);

  showNotes();
});

// Function to show elements from localStorage
function showNotes() {
  let notes = localStorage.getItem("notes");
   let notes2 = localStorage.getItem("notes2");
  if (notes == null) {
    notesObj = [];
    notesObj2 = [];
  } else {
    notesObj = JSON.parse(notes);
    notesObj2 = JSON.parse(notes2);
  }
  let html = "";
  notesObj.forEach(function(element, index) {
    html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${notesObj2[index]}</h5>
                        <p class="card-text"> ${element}</p>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                    </div>
                </div>`;
  });
  let notesElm = document.getElementById("notes");
  let notesElm2 = document.getElementById("notes2");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
    // notesElm2.innerHTML = html;

  } else {
    notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }
}

// Function to delete a note
function deleteNote(index) {
//   console.log("I am deleting", index);

  let notes = localStorage.getItem("notes");
   let notes2 = localStorage.getItem("notes2");
  if (notes == null) {
    notesObj = [];
    notesObj2 = [];
  } else {
    notesObj = JSON.parse(notes);
    notesObj2 = JSON.parse(notes2);
  }
if (notes2 == null) {
    notesObj = [];
    notesObj2 = [];
  } else {
    notesObj = JSON.parse(notes);
    notesObj2 = JSON.parse(notes2);
  }



  notesObj.splice(index, 1);
  notesObj2.splice(index, 1);

  localStorage.setItem("notes", JSON.stringify(notesObj));
  localStorage.setItem("notes2", JSON.stringify(notesObj2));
  showNotes();
}


let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})

/*
Further Features:
1. Add Title
2. Mark a note as Important
3. Separate notes by user
4. Sync and host to web server 
*/ 
