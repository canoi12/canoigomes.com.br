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
    template: `
    <aside class="left-bar column is-2">
        <div class="has-text-centered">
            <figure class="is-centered image is-64x64 is-inline-block">
                <img class="is-rounded" src="/lizard.png" alt="Profile Picture">
            </figure>
            <div class="site-header">
                <h2 class='title is-5'>{{ title }}</h2>
                <p class="subtitle is-6">{{ subtitle }}</p>
            </div>
            <nav id='menu' class='menu'>
                <ul class='menu-list'>
                    <li><router-link to="/">/home</router-link></li>
                    <li><router-link to="/about">/about</router-link></li>
                    <li><router-link to="/archive">/archive</router-link></li>
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