class GitHub {
    constructor() {
        this.client_id = 'd221f554d540653c0336'
        this.client_secret = '79dc6bc44b1edbcd9abe5cfd5c7841dd87b5c37b'
        this.repos_count = 7;
        this.repos_sort = 'created:asc '
    }

    async getUser(user) {

        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}$sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

        const profileData = await profileResponse.json()
        const repoData = await repoResponse.json()


        return {
            profileData,
            repoData
        }

    }
}