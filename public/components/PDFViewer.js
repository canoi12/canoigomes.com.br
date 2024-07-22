export default {
    props: ['path'],
    template: `
    <embed :src='path' style='width: 100%; height: 640px; border: none;' />
    `
}