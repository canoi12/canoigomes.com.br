export default {
    data() {
        return {
            searchStyle: {
                marginTop: '16px'
            },
            meta: [],
            tags: [],
            searchQuery: ''
        }
    },
    created() {
        this.meta = this.$postsMeta
        this.tags = this.$tags
    },
    
    methods: {
        getDate(str) {
            let date = new Date(str);
            let month = date.getMonth() + 1;
            if (month < 10) {
                month = '0' + month
            }
            let day = date.getDate();
            if (day < 10) {
                day = '0' + day
            }
            return month + '-'
                + day + '-'
                + date.getFullYear();
        },
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
    <aside class="column right-bar">
        <div :style='searchStyle' class='field has-addons'>
            <div class='control'>
                <input class="input" type="text" placeholder="Search" 
                @keydown="handleKeyPress"
                v-model='searchQuery'>
            </div>
            <div class="control">
                <button class="button is-dark" @click="performSearch">
                Search
                </button>
            </div>
        </div>
        <div class='categories'>
            <span class='tag is-dark' v-for='tag in tags'>
                <router-link :to="'/tag/' + tag">
                {{ tag }}
                </router-link>
            </span>
        </div>
        <nav class="menu">
            <p class="menu-label">Recent Posts</p>
            <ul class="tags-menu menu-list menu">
                <li v-for='n in 5'>
                    <router-link class='tag-link' :to='"/post/" + meta[n-1].linkname[0]'>
                    <h2 class='title is-6'>[{{ meta[n-1].category }}] - {{ meta[n-1].title }}</h2>
                    <p class='subtitle is-6' style='text-align: right;'><i class="fa-regular fa-calendar"></i> {{ this.getDate(meta[n-1].date) }}</p>
                    </router-link>
                </li>
            </ul>
        </nav>
    </aside>
    `
}