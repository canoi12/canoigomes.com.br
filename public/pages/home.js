export default {
    data() {
        return {
            repos: [
                {
                    user: 'cafe-engine',
                    name: 'cafe'
                },
                {
                    user: 'canoi12',
                    name: 'selene'
                },
                {
                    user: 'canoi12',
                    name: 'poti'
                },
                {
                    user: 'canoi12',
                    name: 'tinycoffee'
                },
            ],
            git_data: {},
        }
    },
    created() {
        fetch('https://api.github.com/users/canoi12')
            .then(res => res.json())
            .then(json => {
                this.git_data = json;
                // console.log(json)
            })

        this.repos.forEach((repo) => {
            // console.log('https://api.github.com/repos/' + repo.user + '/' + repo.name)
            fetch('https://api.github.com/repos/' + repo.user + '/' + repo.name)
                .then(res => res.json())
                .then(json => {
                    repo.stars = json.stargazers_count
                    repo.forks = json.forks
                    repo.language = json.language
                    repo.description = json.description
                    // console.log(json)
                })
        });
    },
    template: `
    
    <h1 class='title is-4'>REPOSITORIES</h1>
    <div class='columns is-multiline'>
        <div class='column is-half' v-for='repo in repos'>
            <div class='card'>
                <div class='card-content'>
                    <div class="media">
                        <div class="media-left">
                            <i class="fa-solid fa-book"></i>
                        </div>
                        <div class="media-content">
                            <p class="title is-4"><a :href='"https://github.com/" + repo.user + "/" + repo.name' target='_blank'>{{ repo.name }} <span v-if='repo.language' class='tag is-dark'>{{repo.language}}</a></p>
                            <p class="subtitle is-6">@{{git_data.login  }}</p>
                        </div>
                    </div>
                    <div class='content'>
                        <p>{{ repo.description }}</p>
                    </div>
                </div>
                <div class='card-footer'>
                    <a class='card-footer-item'><p><i class="fa-regular fa-star"></i> {{ ' ' + repo.stars }}</p></a>
                    <a class='card-footer-item'><p><i class="fa-solid fa-code-fork"></i> {{ ' ' + repo.forks }}</p></a>
                </div>
            </div>
        </div>
    </div>
    `
}