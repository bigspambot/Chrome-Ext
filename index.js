let myNotes = []

const inputEl = document.querySelector("#input-el")
// let saveBtn = document.getElementById("save-btn")
const saveBtn = document.querySelector("#save-btn")
const tabBtn = document.querySelector("#tab-btn")
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
        // if (
        //     notes[note].startsWith("www.") ||
        //     notes[note].startsWith("http") ||
        //     notes[note].endsWith(".com") ||
        //     notes[note].endsWith(".co.uk"))
        // {
        //     listItems += `
        //         <li>
        //             <a href="${notes[note]}" target="blank">
        //                 ${notes[note]}
        //             </a>
        //         </li>
        //     `
        // } else {
        //     listItems += `
        //         <li>
        //             ${notes[note]}
        //         </li>
        //     `
        // }

        listItems += `
            <li>
                <a href="${notes[note]}" target="blank">
                    ${notes[note]}
                </a>
            </li>
        `
    }
    // NOTE - do the DOM manipulation outside of the loop for performance
    ulEl.innerHTML = listItems
}

saveBtn.addEventListener("click", function() {
    if (inputEl.value != "") {
        myNotes.push(inputEl.value)
        inputEl.value = ""
        localStorage.setItem("myNotes", JSON.stringify(myNotes))
        render(myNotes)
    } else {
        alert("No Input to Save")
    }
})

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myNotes.push(tabs[0].url)
        localStorage.setItem("myNotes", JSON.stringify(myNotes))
        render(myNotes)
    })
})

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myNotes = []
    render(myNotes)
})
