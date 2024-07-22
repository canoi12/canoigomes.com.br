export default {
    props: ['postsData'],
    data() {
        return {
            posts: [],
            listStyle: {
                marginBottom: '8px'
            },
            spanStyle: {
                marginRight: '2px'
            }
        }
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
        }
    },
    template: `
        <ul>
            <li :style='listStyle' class='archive-post' v-for='item in postsData'>
                <router-link style="padding-bottom: 16px;" class='title is-4' :to='"/post/" + item.linkname[0]'>[{{ this.getDate(item.date) }}] - {{ item.title }}</router-link>
                <br/>
                <div class='tags'>
                    <span :style='spanStyle' class='tag is-dark' v-for='tag in item.tags'>
                    {{tag}}
                    </span>
                </div>
            </li>
        </ul>
    `
}