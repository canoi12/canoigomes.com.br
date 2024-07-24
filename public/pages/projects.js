export default {
    data() { return { projects: [] }},
    created() {
        this.projects = this.$projectsMeta;
    },
    template: `
    <h1 style='border-bottom: 2px dashed var(--border-color);' class='title is-4' style='margin-bottom: 32px;'>PROJECTS</h1>

    <div class='columns is-multiline'>
        <div v-for='item in projects' class='column is-one-third'>
            <div class='card' style='border: var(--border-size) dashed var(--border-color);'>
                <div class="card-image">
                    <figure class="image is-4by3">
                    <img
                        :src="item.image ? item.image : 'https://bulma.io/assets/images/placeholders/1280x960.png'"
                        alt="Placeholder image"
                    />
                    </figure>
                </div>
                <div class='card-content'>
                    <div class='media'>
                        <div class='media-content'>
                            <router-link :to='"/project/" + item.linkname' class='title is-4'>{{item.title}}</router-link>
                            <p class='subtitle is-7'>{{item.developer}}</p>
                        </div>
                    </div>
                    <div class='content'>
                        <div>
                            <span class='tag is-dark' style='margin-left: 2px' v-for='plat in item.platforms'>
                                {{ plat }}
                            </span>
                        </div>
                        <!-- <br/>
                        <code style='padding-bottom: 2px;'>{{ item.developer }}</code>
                        <br/>
                        <code v-if='item.publisher'>{{ item.publisher }}</code> -->
                    </div>
                </div>
                <div class='card-footer'>
                    <div class='card-footer-item'>
                        <a class='title is-6    ' :href='item.store_link' target='_blank'>STORE</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
}