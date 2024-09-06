export default {
    data() {
        return {
            title: 'Canoi Gomes',
            subtitle: 'Brazilian Developer',
            social: [
                {icon: 'fa-brands fa-github', path: 'https://github.com/canoi12/'},
                {icon: 'fa-brands fa-twitter', path: 'https://x.com/canoidev/'},
                {icon: 'fa-brands fa-youtube', path: 'https://www.youtube.com/@canoidev'},
                {icon: 'fa-brands fa-itch-io', path: 'https://canoigomes.itch.io'},
                {icon: 'fa-brands fa-linkedin', path: 'https://www.linkedin.com/in/canoi-gomes-de-aguiar/'},
            ]
        }
    },
    methods: {
        performSearch() {
            this.$router.push({ path: '/search', query: { q: this.searchQuery }})
        },
        handleKeyPress(event) {
            if (event.key === 'Enter') {
              this.performSearch();
            }
        },
    },
    template: `
    <aside class="left-bar column is-3">
        <div class="has-text-centered" style="width: 100%;">
            <div class="site-header">
                <figure class="is-centered image is-64x64 is-inline-block">
                    <img class="is-rounded image-border" src="/lizard.png" alt="Profile Picture">
                </figure>
                <h2 class='title is-5'>{{ title }}</h2>
                <p class="subtitle is-6">{{ subtitle }}</p>

                <div :style='searchStyle' class='field has-addons'>
                    <div class='control'>
                        <input class="input is-black" type="text" placeholder="Search" 
                        @keydown="handleKeyPress"
                        v-model='searchQuery'>
                    </div>
                    <div class="control">
                        <button class="button is-black" @click="performSearch">
                        Search
                        </button>
                    </div>
                </div>
            </div>

            <nav id='menu' class='menu is-info'>
                <ul class='menu-list'>
                    <li><router-link to="/">/home</router-link></li>
                    <li><router-link to="/about">/about</router-link></li>
                    <li><router-link to="/blog">/blog</router-link></li>
                    <li><router-link to="/projects">/projects</router-link></li>
                </ul>
            </nav>
            <div class='social-icons columns is-multiline'>
                <div class='column social-icon' v-for='link in social'>
                    <a :href='link.path' target='_blank' class='icon'><i :class='link.icon'></i></a>
                </div>
            </div>
        </div>
    </aside>
    `
}