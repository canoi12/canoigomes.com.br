export default {
    data() {
        return {
            currentLang: 0,
            engines: [
                'Unity', 'Unreal', 'GameMaker', 'Godot',  'LÖVE', 'MonoGame'
            ],
            languages: [
                'C', 'C++', 'C#', 'Lua', 'Python', 'Rust'
            ],
            tools: [
                'SDL2', 'OpenGL', 'GLFW', 'ImGui'
            ],

            links: [
                {path: 'mailto:canoiaguiar@gmail.com', name: 'canoiaguiar@gmail.com'},
                {path: 'https://youtube.com/@canoidev', name: 'youtube'},
                {path: 'https://x.com/canoidev', name: 'twitter'},
                {path: 'https://github.com/canoi12', name: 'github'},
            ],

            content: [
                {
                    language: 'en-us',
                    data: `
                    <p>My name is Canoi Gomes de Aguiar, I'm a Brazilian Game Developer, actually working as a Game Porting Engineer at <a href='https://megacatstudios.com/' target='_blank'>Mega Cat Studios</a>.
                    I have a bachelor degree in IT from UFRN, and I'm current studying Philosophy in the same university.</p>
    
                    <p>I make some personal computer graphics and low level gaming stuff, like game frameworks, game development tools, scripting languages and libs.
                    Most of the projects use <code>C</code> and <code>Lua</code>, and I like to use OpenGL as the graphics library.</p>
                    
                    <p>However I also like to work with other game engines, tools and languages, such as:</p>
                    `
                },
                {
                    language: 'pt-br',
                    data: `
                    <p>Olá, me chamo Canoi Gomes de Aguiar, sou um desenvolvedor de jogos brasileiro, e atualmente estou trabalhando como Engenheiro de Porting na <a href='https://megacatstudios.com/' target='_blank'>Mega Cat Studios</a>.
                    Sou bacharel em TI pela UFRN, e atualmente estou estudando Filosofia na mesma universidade.</p>

                    <p>Gosto de estudar sobre computação gráfica e programação de baixo nível, então geralmente faço alguns projetos pessoais que irão tangenciar esses assuntos, gosto de desenvolver projetos de game engine/frameworks, ferramentas para desenvolvimento de jogos, linguagens de script, geração de áudio, emuladores.
                    Na maioria dos projetos utilizo <code>C</code> e <code>Lua</code> como linguagens principais, e gosto de utilizar OpenGL como biblioteca de gráficos.</p>

                    <p>Entretanto também gosto de trabalhar com outras game engines, ferramentas e linguagens, como:</p>
                    `
                }
            ]
        }
    },
    template: `
    <!-- <h1 class='title is-2'>about</h1> -->
    <div class='tabs is-boxed'>
        <ul>
            <li v-for='(cont,index) in content' :class='index == currentLang ? "is-active" : ""'><a @click="currentLang = index">{{ cont.language }}</a></li>
        </ul>
    </div>
    <div class='content'>
        <div v-html='content[currentLang].data'></div>

        <p><strong>Game Engines/Frameworks</strong></p>
        <span style='margin-right: 8px; margin-bottom: 8px;' class='tag is-dark' v-for='engine in engines'>{{ engine }}</span>

        <p><strong>Languages</strong></p>
        <span style='margin-right: 8px; margin-bottom: 8px;' class='tag is-dark' v-for='lang in languages'>{{ lang }}</span>

        <p><strong>Libs/Tools</strong></p>
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