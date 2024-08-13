export default {
    data() {
        return {
            engines: [
                'Unity', 'Unreal', 'GameMaker', 'Godot'
            ],
            languages: [
                'C', 'C++', 'C#', 'Lua', 'Python', 'Rust'
            ],
            tools: [
                'SDL2', 'GLFW', 'LÖVE', 'MonoGame'
            ],

            links: [
                {path: 'mailto:canoiaguiar@gmail.com', name: 'canoiaguiar@gmail.com'},
                {path: 'https://youtube.com/@canoidev', name: 'youtube'},
                {path: 'https://x.com/canoidev', name: 'twitter'},
                {path: 'https://github.com/canoi12', name: 'github'},
            ]
        }
    },
    template: `
    <!-- <h1 class='title is-2'>about</h1> -->
    <div class='content'>
        <p>My name is Canoi Gomes de Aguiar, I'm a Brazilian Game Developer, actually working as a Game Porting Engineer at <a href='https://megacatstudios.com/' target='_blank'>Mega Cat Studios</a>. I have a bachelor's degree in IT from UFRN, and I'm current studying Philosophy at the same university.</p>

        <p>I make some personal computer graphics and low level gaming stuff, like game frameworks, game development tools, scripting languages and libs. Most of the projects use <code>C</code> and <code>Lua</code>, and I like to use OpenGL as the graphics library.</p>
        
        <p>However I also like to work with other game engines, tools and languages, such as:</p>
        
        <p><strong>Game Engines</strong></p>
        <span style='margin-right: 8px; margin-bottom: 8px;' class='tag is-dark' v-for='engine in engines'>{{ engine }}</span>

        <p><strong>Languages</strong></p>
        <span style='margin-right: 8px; margin-bottom: 8px;' class='tag is-dark' v-for='lang in languages'>{{ lang }}</span>

        <p><strong>Tools/Frameworks</strong></p>
        <span style='margin-right: 8px; margin-bottom: 16px;' class='tag is-dark' v-for='tool in tools'>{{ tool }}</span>

        <p><strong>Links</strong></p>
        <ul style='list-style: square;'>
            <li v-for='link in links'>
                <a :href='link.path' target='__blank'>{{ link.name }}</a>
            </li>
        </ul>
    </div>
    `
}