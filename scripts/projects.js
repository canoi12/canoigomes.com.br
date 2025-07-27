var title = document.getElementById('projects-title');
// console.log(title)

if (title) {
    title.innerHTML = projects_texts[lang].title
}


var portings = [
    {
        title: "Forgive Me Father",
        descr: "FPS horror game<br><br>Worked actively on the porting for Nintendo Switch and Sony PS4 and PS5.",
        img: 'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_1200/ncom/software/switch/70010000061250/cd729197dc361504511e63a5591bd50d13a7e56625b606134d9ee6d17bf647c6'
    },
    {
        title: "Ruff Ghanor",
        descr: "Deck builder roguelike game<br><br>Worked direcly on the porting of Microsoft Store and helped with Xbox porting",
        img: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2087460/capsule_616x353.jpg?t=1732235879',
    },
    {
        title: "Wrestle Quest*",
        descr: "Wrestle RPG game<br><br><b>*Worked only on bugfixes, not involved on the initial porting</b>",
        img: 'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_1200/ncom/software/switch/70010000050315/7da2e81e1c1d548ac22429548b719b7fd099785b69af2c64483faa487dc473a9',
    },
    {
        title: "Backyard Baseball '97",
        descr: "SCUMM baseball game<br><br>Worked directly on the porting of the Nintendo Switch platform, and actuate actively on the porting for Sony Playstation 5",
        img: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3170540/header.jpg',
    }
]

portings[0].descr = projects_texts[lang].fmf.description
portings[1].descr = projects_texts[lang].ruff.description
portings[2].descr = projects_texts[lang].wq.description
portings[3].descr = projects_texts[lang].byb97.description

var porting_div = document.getElementById('porting-projects');
if (porting_div) {
    for (let i in portings) {
        let proj = portings[i];
        var div = document.createElement('div');
        div.className = 'project';

        var figDiv = document.createElement('div');
        figDiv.className = 'project-thumb';
        figDiv.style.backgroundImage = "url('" + proj.img + "')";
        if (proj.offset) {
            // figDiv.style.backgroundPositionX = proj.offset[0] + 'px';
            // figDiv.style.backgroundPositionY = proj.offset[1] + 'px';
            figDiv.style.backgroundPosition = 'center';
        }


        var h1 = document.createElement('h1');
        h1.innerHTML = proj.title;
        h1.className = 'project-title';
        var par = document.createElement('p');
        par.className = 'project-description';
        par.innerHTML = proj.descr;

        div.appendChild(figDiv);
        div.appendChild(h1);
        div.appendChild(par);
        porting_div.appendChild(div);
    }
    
}

/* Games */
var games = [
    {
        title: "Railgunners*",
        descr: "Shmup game<br><br><b>*Worked on the initial stages of the game, not directly involved on the final product</b>",
        img: 'https://i.ytimg.com/vi/rowqXD40-a0/maxresdefault.jpg',
        offset: [0, -10]
    },
    {
        title: "Pharos",
        descr: "Deck builder roguelike game<br><br>Project I actuated while in my graduation. This is a math game with educational purposes.",
        img: 'https://gamelab.imd.ufrn.br/pharos/assets/images/main-logo.png',
        offset: [-8, 0]
    },
    {
        title: "Knightvania",
        descr: "365 indies game jam",
        img: 'https://canoigomes.com.br/media/knightvania.gif',
        offset: [-8, -16]
    },
    {
        title: "Zombies ate my neigh... wait",
        descr: "",
        img: 'https://canoigomes.com.br/media/zamnw.png',
        offset: [4, 0]
    }
]

games[0].descr = projects_texts[lang].rail.description
games[1].descr = projects_texts[lang].pharos.description
games[2].descr = projects_texts[lang].knight.description
games[3].descr = projects_texts[lang].zamnw.description

var game_div = document.getElementById('game-projects');
if (game_div) {
    for (let i in games) {
        let proj = games[i];
        var div = document.createElement('div');
        div.className = 'project';

        var figDiv = document.createElement('div');
        figDiv.className = 'project-thumb';
        figDiv.style.backgroundImage = "url('" + proj.img + "')";
        if (proj.offset) {
            figDiv.style.backgroundPosition = 'center 0px';
        }

        var fig = document.createElement('figure');
        // fig.style.height = '64px';
        fig.style.margin = 0;
        var img = document.createElement('img');
        img.src = proj.img;
        // img.style.height = '128px';
        img.style.width = '100%';
        fig.appendChild(img);

        var h1 = document.createElement('h1');
        h1.innerHTML = proj.title;
        h1.className = 'project-title';
        var par = document.createElement('p');
        par.className = 'project-description';
        par.innerHTML = proj.descr;

        var footerDiv = document.createElement('div');
        footerDiv.className = 'project-footer';
        footerDiv.innerHTML = '<a href="#">Link</a>';

        // div.appendChild(fig);
        div.appendChild(figDiv);
        div.appendChild(h1);
        div.appendChild(par);
        div.appendChild(footerDiv);
        game_div.appendChild(div);
    }
    
}

/* Tools */
var tools = [
    {
        title: "tinycoffee",
        descr: "Game framework escrita em C, utiliza OpenGL 3 para renderização"
    },
    {
        title: "selene",
        descr: "Lua game framework escrita em C. Possui um rendering moderno com suporte a multiplos drivers (OpenGL, Vulkan, DirectX, ...)."
    },
    {
        title: "cafe",
        descr: "Conjunto de bibliotecas em Rust para desenvolvimento de jogos. Cada lib possui um propósito específico (áudio, video, empacotamente, ...)."
    },
    {
        title: "",
        descr: ""
    }
]

var tool_div = document.getElementById('tool-projects');
if (tool_div) {
    for (let i in tools) {
        let proj = tools[i];
        var div = document.createElement('div');
        div.className = 'project';
        var h1 = document.createElement('h1');
        h1.innerHTML = proj.title;
        h1.className = 'project-title';
        var par = document.createElement('p');
        par.className = 'project-description';
        par.innerHTML = proj.descr;

        div.appendChild(h1);
        div.appendChild(par);
        tool_div.appendChild(div);
    }
    
}