const { ref } = Vue;
import PdfViewer from '/components/PDFViewer.js'
export default {
    components: { PdfViewer },
    data() {
        return {
            info: {},
            date: new Date(),
            componentStyle: {
                sourceCode: {
                    marginTop: '20px'
                },
                title: {
                    margin: '20px 0',
                    background: '#ccc'
                }
            }
        }
    },
    created() {
        this.fetchPost()
    },
    methods: {
        fetchPost() {
            fetch('/content/' + this.$route.params.name + '.json')
            .then(res => res.json())
            .then(json => {
                this.info = json;
                this.date = new Date(json.date);
                // console.log(this.date);
                this.$nextTick(() => {
                    this.applyStyles();
                    // console.log(this.$el);
                });
            });
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
    <h1 class='title is-5'>{{info.title.toUpperCase()}}</h1>
    <p class='subtitle is-6'>Wrote by {{info.author}}</p>
    <p class='subtitle is-6'><i class="fa-regular fa-calendar"></i>{{ ' ' + this.getDate() }}</p>
    
    <div ref='content' :style='componentStyle' v-html="info.content"></div>
    `
}