// init Github class
const github = new GitHub;
const firsthub = new GitHub;
//Init the ui class
const ui = new UI

const enterText = document.querySelector('#search')


function showFirstUser() {
    let searchInput = enterText.value
    if (searchInput === '') {
        firsthub.getUser('mojombo')
            .then(res => {
                // console.log(res)
                ui.showInitUser(res.profileData)
            })
    }
}

function showFirstUserRepo() {
    let searchInput = enterText.value
    if (searchInput === '') {
        firsthub.getUser('mojombo')
            .then(res => {
                // console.log(res)
                ui.showInitUserRepo(res.repoData)
            })
    }
}

showFirstUserRepo()
showFirstUser()
enterText.addEventListener('keyup', find)

function find(e) {
    // console.log(e.target.value)
    let eText = e.target.value
    if (eText !== '') {
        //Make http call 
        github.getUser(eText)
            .then(data => {
                // console.log(data)
                if (data.profileData.message === 'Not Found') {
                    // show alert
                    ui.showAlert()
                } else {
                    // show profile
                    ui.showProfile(data.profileData);
                    //show repos
                    ui.showRepo(data.repoData)
                }
            })
    } else {
        // Clear profie
        // ui.clearProfile()
        showFirstUser()
        showFirstUserRepo()
    }
    e.preventDefault()
}