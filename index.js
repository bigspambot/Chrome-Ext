let myNotes = []

const inputEl = document.querySelector("#input-el")
// let saveBtn = document.getElementById("save-btn")
const saveBtn = document.querySelector("#save-btn")
const deleteBtn = document.querySelector("#delete-btn")

const ulEl = document.querySelector("#ul-el")

const notesFromLocalStorage = JSON.parse(localStorage.getItem("myNotes"))

if (notesFromLocalStorage) {
    myNotes = notesFromLocalStorage
    render(myNotes)
}

function render(notes) {
    //ulEl.innerHTML = ""
    let listItems = ""

    for (let note in notes) {
        if (notes[note].startsWith("www.") && notes[note].endsWith(".com") || notes[note].endsWith(".co.uk")) {
            listItems += `
                <li>
                    <a href="https://${notes[note]}" target="blank">
                        ${notes[note]}
                    </a>
                </li>
            `
        } else {
            listItems += `
                <li>
                    ${notes[note]}
                </li>
            `
        }
    }
    // NOTE - do the DOM manipulation outside of the loop for performance
    ulEl.innerHTML = listItems
}

saveBtn.addEventListener("click", function() {
    if (inputEl.value != "") {
        myNotes.push(inputEl.value)
        render(myNotes)
        inputEl.value = ""

        localStorage.setItem("myNotes", JSON.stringify(myNotes))
    } else {
        alert("No Input to Save")
    }
})

deleteBtn.addEventListener("dblclick", function() {
        localStorage.clear()
        myNotes = []
        // dom clear
        render(myNotes)
        console.log("double clicked!")
})

