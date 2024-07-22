import PostsList from "/components/PostsList.js";
export default {
    components: { PostsList },
    data() {
        return {
            searchQuery: '',
            posts: [],
            spanStyle: {
                margin: '4px 8px 12px 0',   
            }
        }
    },
    created() {
        this.getPosts()
    },
    methods: {
        getPosts() {
            this.posts = []
            this.searchQuery = this.$route.query.q;
            this.$postsMeta.forEach(meta => {
                if (meta.title.toLowerCase().includes(this.searchQuery) ||
                    meta.linkname[0].includes(this.searchQuery)) {
                    this.posts.push(meta)
                }
            })
        },
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
            return month + '/'
                + day + '/'
                + date.getFullYear();
        },
    },
    watch: {
        '$route.query.q': 'getPosts'
    },
    template: `
        <div class='container'>
            <h1 style='margin-bottom: 64px;' class='title is-6'>Searching: \'{{ this.searchQuery   }}\'</h1>
            <posts-list :posts-data='posts'></posts-list>
        </div>
    `
}