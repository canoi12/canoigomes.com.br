import PostsList from "/components/PostsList.js";
export default {
    components: { PostsList },
    data() { return { meta: [], name: '', spanStyle: {
        margin: '4px 8px 12px 0',   
    } }},
    created() {
        this.name = this.$route.params.name
        this.getPosts();
    },
    methods: {
        getPosts() {
            this.meta = []
            this.name = this.$route.params.name;
            this.$postsMeta.forEach(meta => {
                if (meta.tags.includes(this.name)) {
                    this.meta.push(meta)
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
        '$route.params.name': 'getPosts'
    },
    template: `
        <div class='container'>
            <h1 style='margin-bottom: 64px; border-bottom: 2px dashed var(--border-color); padding-bottom: 2px;' class='title is-6'>Posts with tag: {{ this.name }}</h1>
            <posts-list :posts-data='meta'></posts-list>
        </div>
    `
}