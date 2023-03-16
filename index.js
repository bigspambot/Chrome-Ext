let myNotes = []
const inputEl = document.querySelector("#input-el")
const saveBtn = document.querySelector("#save-btn")
// let saveBtn = document.getElementById("save-btn")
const ulEl = document.querySelector("#ul-el")


saveBtn.addEventListener("click", function() {
    if (inputEl.value != "") {
        myNotes.push(inputEl.value)
        renderNotes()
        inputEl.value = ""
    }
})

function renderNotes() {
    //ulEl.innerHTML = ""
    let listItems = ""
    for (let note in myNotes) {
        //ulEl.innerHTML += `<li>${myNotes[note]}</li>`
        // or...
        // create element
        //const li = document.createElement("li")
        // set text content
        //li.textContent = myNotes[note]
        // append to ul
        //ulEl.append(li)
        if (myNotes[note].startsWith("www.") && myNotes[note].endsWith(".com") || myNotes[note].endsWith(".co.uk")) {
            listItems += `
                <li>
                    <a href="https://${myNotes[note]}" target="blank">
                        ${myNotes[note]}
                    </a>
                </li>
            `
        } else {
            listItems += `
                <li>
                    ${myNotes[note]}
                </li>
            `
        }
    }
    // NOTE - do the DOM manipulation outside of the loop for performance
    ulEl.innerHTML = listItems
}

console.log(listItems)
