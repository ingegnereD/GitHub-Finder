class UI {
    constructor() {
            this.profile = document.querySelector('.profile ');
            this.mainRepo = document.querySelector('.main-repo');

        }
        //display Initial User

    showInitUser(show) {
        this.profile.innerHTML = `

        <div class="user-info">
                <div class="user-img left">
                    <img src="${show.avatar_url}" alt="">
                    <div class="user-info-btn">
                        <a href="${show.html_url}" targer="_blank" class="btn #536dfe indigo accent-2 waves-effect waves-light" id="profile-badge">View Profile</a>
                    </div>
                </div>

                <div class="user-details right">
                    <div class="right-inLine-info">
                        <span class="badge #4dd0e1 cyan lighten-2"id=badges>${show.name}</span>
                        <span class="badge waves-effect waves-light #536dfe indigo accent-2" id="badges">Public Repos: ${show.public_repos}</span>
                        <span class="badge waves-effect waves-light #78909c blue-grey lighten-1" id="badges">Public Gist: ${show.public_gists}</span>
                        <span class="badge waves-effect waves-light #2e7d32 green darken-1" id="badges">Followers: ${show.followers}</span>
                        <span class="badge waves-effect waves-light #00acc1 cyan darken-1" id="badges">Following: ${show.following}</span>
                    </div>
                    <div class="under">
                        <ul>
                            <li>Company:${show.company} </li>
                            <li>Website/Blog:${show.blog}</li>
                            <li>Locatin:${show.location}</li>
                            <li>Member Since:${show.created_at}</li>
                        </ul>
                    </div>
                </div>
        </div>
                    `
    }

    //Display Initial User Repo

    showInitUserRepo(repo) {
            let output = ''
                // console.log(repo)
            repo.forEach(a => {
                //Inserting each category into a card
                // console.log(a)
                output += `
                 <div class="repo-list card">
                    <a href="${a.html_url}"><h5>${a.name}</h5></a>
                    <div class="repo-list-cont">
                        <span class="badge waves-effect waves-light #536dfe indigo accent-2 " id="repo-list-box">Stars:${a.stargazers_count}</span>
                        <span class="badge waves-effect waves-light #2e7d32 green darken-1 " id="repo-list-box">Watchers:${a.watchers}</span>
                        <span class="badge waves-effect waves-light #ffb300 amber darken-1 " id="repo-list-box">Forks:${a.forks_count}</span>
                    </div>
                </div>  
                `
            })
            this.mainRepo.innerHTML = output
        }
        // display profile
    showProfile(user) {
        document.querySelector('.bucket').style = 'margin-top:0rem'
        document.querySelector('.alert').style.display = 'none'
        this.profile.innerHTML = `
        <div class="user-info">
                        <div class="user-img left">
                            <img src="${user.avatar_url}" alt="">
                            <div class="user-info-btn">
                            <a href="${user.html_url}" targer="_blank" class="btn #536dfe indigo accent-2 waves-effect waves-light" id="profile-badge">View Profile</a>
                            </div>
                        </div>
                        <div class="user-details right">
                            <div class="right-inLine-info">
                                <span class="badge #4dd0e1 cyan lighten-2"id=badges>${user.name}</span>
                                <span class="badge waves-effect waves-light #536dfe indigo accent-2" id="badges">Public Repos: ${user.public_repos}</span>
                                <span class="badge waves-effect waves-light #78909c blue-grey lighten-1" id="badges">Public Gist: ${user.public_gists}</span>
                                <span class="badge waves-effect waves-light #2e7d32 green darken-1" id="badges">Followers: ${user.followers}</span>
                                <span class="badge waves-effect waves-light #00acc1 cyan darken-1" id="badges">Following: ${user.following}</span>
                            </div>
                            <div class="under">
                                <ul>
                                    <li>Company:${user.company} </li>
                                    <li>Website/Blog:${user.blog}</li>
                                    <li>Locatin:${user.location}</li>
                                    <li>Member Since:${user.created_at}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
        `
    }

    //Show user repos
    showRepo(repo) {
            let output = ''
                // console.log(repo)
            repo.forEach(a => {
                //Inserting each category into a card
                output += `
                 <div class="repo-list card">
                            <a href="${a.html_url}"><h5>${a.name}</h5></a>
                            <div class="repo-list-cont">
                                <span class="badge waves-effect waves-light #536dfe indigo accent-2 " id="repo-list-box">Stars:${a.stargazers_count}</span>
                                <span class="badge waves-effect waves-light #2e7d32 green darken-1 " id="repo-list-box">Watchers:${a.watchers}</span>
                                <span class="badge waves-effect waves-light #ffb300 amber darken-1 " id="repo-list-box">Forks:${a.forks_count}</span>
                            </div>
                        </div>  
                `
            })
            this.mainRepo.innerHTML = output
        }
        // Show Aert message
    showAlert() {
            document.querySelector('.bucket').style = 'margin-top:3rem'
            document.querySelector('.alert').style.display = 'block'
            setTimeout(() => {
                document.querySelector('.bucket').style = 'margin-top:0rem'
                document.querySelector('.alert').style.display = 'none'
            }, 1300)
        }
        // Clear profile
        // clearProfile() {
        //     this.profile.innerHTML = ''
        // }
}


// Editing the floating btn
// const repoList = document.querySelector('.main-repo')
// repoList.addEventListener('click', draw)

// function draw(e) {
//     console.log(e.target.parentElement)
//     console.log(e.target.previousElementSibling)
//     console.log(e.target.classList)
//     if (e.target.previousElementSibling.classList.contains('repo-list-cont')) {
//         console.log(e.target.previousElementSibling.style)
//         e.target.previousElementSibling.style = 'visibility:visible'
//     } else {
//         console.log('NO')
//     }
//     // if(e.target.classList.contains('f-a-b')){
//     //     e.
//     // }
//     e.preventDefault()
// }

document.querySelectorAll('.f-a-b').forEach(a => {

})