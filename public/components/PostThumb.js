export default {
    props: ['postMeta', 'isFirst'],
    data() {
        return {
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
        <div class="box">
            <RouterLink :to="'/post/' + postMeta.linkname">
            <div class="post-thumb-header">
                <h2 :class="'title ' + (isFirst ? 'is-2' : 'is-4')">{{postMeta.title}}</h2>
                <p :class="'subtitle ' + (isFirst ? 'is-5' : 'is-6')"><i class="fa-regular fa-calendar"></i> {{ this.getDate(postMeta.date) }}  |  <i class="fa-solid fa-user"></i> {{postMeta.author}}</p>
            </div>
            </RouterLink>
            <br/>
            <div class='tags'>
                <router-link class="tag is-info" :to="'/tag/' + tag" v-for="tag in postMeta.tags">
                    <!-- <span :style='spanStyle'> -->
                    {{ tag }}
                    <!-- </span> -->
                </router-link>
            </div>
        </div>
    `
}