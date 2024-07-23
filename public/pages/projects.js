export default {
    data() { return { projects: [] }},
    created() {
        this.projects = this.$projectsMeta;
    },
    template: `
    <h1 style='border-bottom: 2px dashed var(--border-color);' class='title is-4' style='margin-bottom: 32px;'>PROJECTS</h1>
    <ul>
        <li v-for='item in projects'>
        {{ item.title }}
        </li>
    </ul>
    `
}