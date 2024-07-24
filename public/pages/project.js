const { ref } = Vue;
export default {
    data() {
        return {
            info: {},
            date: new Date(),
            componentStyle: {
                marginTop: '32px'
            }
        }
    },
    created() {
        this.fetchPost()
    },
    methods: {
        fetchPost() {
            fetch('/_projects/' + this.$route.params.name + '.json')
            .then(res => res.json())
            .then(json => {
                this.info = json;
                console.log()
                this.$nextTick(() => {
                    this.applyStyles();
                    // console.log(this.$el);
                });
            });
        },
        getRoles() {
            if (!this.info.roles) return '';
            let roles = '';
            let len = this.info.roles.length
            for (let i = 0; i < len; i++) {
                roles += this.info.roles[i];
                if (i < len-1) roles += ', ';
                console.log(this.info.roles[i])
            }
            return roles
        },
        getDate() {
            let month = this.date.getMonth() + 1;
            if (month < 10) {
                month = '0' + month
            }
            let day = this.date.getDate();
            if (day < 10) {
                day = '0' + day
            }
            return month + '/'
                + day + '/'
                + this.date.getFullYear();
        },
        applyStyles() {
            this.$nextTick(() => {
                // console.log(this.$el);
                const contentDiv = this.$refs.content;
                // console.log(contentDiv);
                const ulElements = contentDiv.querySelectorAll('ul');
                ulElements.forEach(ul => {
                    ul.style.listStyleType = 'square';
                    ul.style.marginLeft = '20px';
                    ul.style.marginTop = '8px';
                    ul.style.marginBottom = '8px';
                });
            });
        }
    },
    mounted() {
        this.applyStyles();
    },
    watch: {
        '$route.params.name': 'fetchPost'
    },
    template: `
    <figure class='figure has-text-centered'>
        <img :src='info.image' />
    </figure>
    <h1 class='title is-5' v-if='info.title'>{{info.title.toUpperCase()}}</h1>
    <!-- <p class='subtitle is-6'>{{info.worked_as}}</p> -->

    <div class='subtitle'>
        <span v-for='plat in info.platforms' class='tag is-dark'>
            {{ plat }}
        </span>
    </div>
    
    <p><strong>Roles:</strong> {{ getRoles() }}</p>
    <p><strong>Developer:</strong> {{info.developer}}</p>
    <p v-if='info.publisher'><strong>Publisher:</strong> {{info.publisher}}</p>
    
    <div ref='content' :style='componentStyle' v-html="info.content"></div>
    `
}