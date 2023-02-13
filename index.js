let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
//transform string to array
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

//if have leads on leadsFromLocalStorage, it keeps and show it
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}

inputBtn.addEventListener("click", function () {

    myLeads.push(inputEl.value)
    renderLeads()
    inputEl.value = ""
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li> 
                <a target = '_blank' href ='${myLeads[i]}'> 
                    ${myLeads[i]}
                </a> 
            </li>
    `

    }
    ulEl.innerHTML = listItems
}

//delete items on myLeads array

deleteBtn.addEventListener("click", function () {
    localStorage.clear()
    myLeads = []
    renderLeads()
})