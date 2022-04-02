
const baseURL = "http://www.boredapi.com/api/activity"
const randomType = "?type="
const participantsNeeded = "?participants="
const baseCard = document.getElementById('emptyCard')

// Type of Activity Card
const typeButton = document.getElementById('type-button')
const typeSelect = document.getElementById('activity-type')
typeButton.addEventListener('click', typeButtonClicked)

function typeButtonClicked() {
    fetch(baseURL + randomType + `${typeSelect.value}`)
    .then(resp => resp.json())
    .then(obj => {
            if (typeSelect.value === "") {
                alert('Please pick a type of activity!')
                return
            } 
            const container = document.getElementById('type-container')
            let i = "0", j = "0"
            renderCard(container, obj, i, j)
            }
        )
    .catch(error => {
        alert("There was a problem getting the data!")
        console.log(error.message);
            }
        )
    }

// Random Activity Card
const defaultBtn = document.getElementById('default-button')
defaultBtn.addEventListener('click', defaultBtnClicked)

function defaultBtnClicked() {
    fetch(baseURL)
    .then(resp => resp.json())
    .then(obj => {
            const container = document.getElementById('default-container')
            let i = "1", j = "1"
            renderCard(container, obj, i, j)
            }
        )
    .catch(error => {
        alert("There was a problem getting the data!")
        console.log(error.message);
        }
    )
}         

// Participant Card 
const numberBtn = document.getElementById('people-button')
const selectParticipants = document.getElementById('number-of-people')
numberBtn.addEventListener('click', numberButtonClicked)

function numberButtonClicked() {
    fetch(baseURL + participantsNeeded + `${selectParticipants.value}`)
    .then(resp => resp.json())
    .then(obj => {
            if (selectParticipants.value === "") {
                alert('Please pick an amount of people for the activity!')
                return
            }
            const container = document.getElementById('participants-container')
            let i = "2", j = "2"
            renderCard(container, obj, i, j)
            }
        )
    .catch(error => {
        alert("There was a problem getting the data!")
        console.log(error.message);
            }
        )
}

// Card Rendering
function renderCard(container, obj, i, j) {
    baseCard.remove() 
    container.innerHTML = ""
    const {activity, accessibility, type, participants, price} = obj
    const newDiv = document.createElement('div')
    newDiv.innerHTML = 
        `<h3>${activity}</h3>
        <p>Accessibility: ${accessibility} </p>
        <p>Type: ${type} </p>
        <p>Participants: ${participants} </p>
        <p>Price: ${price}</p>`
    const pTag = document.createElement('p')
    const span = document.createElement('span')

    
    i++
    j++
    newDiv.setAttribute('id', `card${i}`)
    span.setAttribute('id', `like-glyph${j}`)

    container.appendChild(newDiv)
    newDiv.appendChild(pTag)
    pTag.appendChild(span)


}

