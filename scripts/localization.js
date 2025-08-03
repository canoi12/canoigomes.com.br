const sidebar_texts = {
    en_us: {
        home: "/home",
        resume: "/resume",
        projects: "/projects",
        decentralize: "/decentralize"
    },
    pt_br: {
        home: "/inicio",
        resume: "/currículo",
        projects: "/projetos",
        decentralize: "/descentralize"
    }
}

const home_texts = {
    en_us: {
        title: "Hello,",
        text: `
        <p>my name is Canoi Gomes de Aguiar, I'm a brazilian software developer.</p>
        <p>Trabalho com jogos há alguns anos, tanto como desenvolvedor independente, quanto profissionalmente.
        Meus projetos pessoais são voltados principalmente para desenvolvimento de motores de jogos e outras ferramentas relacionadas.</p>
        <p>Nos ultimos anos venho trabalhando como Engenheiro de Porting, principalmente com Consoles de jogos como Nintendo Switch, Playstation e Xbox.</p>
        `
    },
    pt_br: {
        title: "Olá,",
        text: `
        <p>me chamo Canoi Gomes de Aguiar, sou um desenvolvedor de software brasileiro.</p>
        <p>Trabalho com jogos há alguns anos, tanto como desenvolvedor independente, quanto profissionalmente.
        Meus projetos pessoais são voltados principalmente para desenvolvimento de motores de jogos e outras ferramentas relacionadas.</p>
        <p>Nos ultimos anos venho trabalhando como Engenheiro de Porting, principalmente com Consoles de jogos como Nintendo Switch, Playstation e Xbox.</p>
        `
    }
}

const resume_texts = {
    en_us: {
        role: "Brazilian Developer",
        about_me: {
            title: "About Me",
            description: "My name is Canoi Gomes de Aguiar, I'm a brazilian software developer, my especificity is with game developement and multiplatform tools."
        }
    },
    pt_br: {
        role: "Desenvolvedor Brasileiro",
        about_me: {
            title: "Sobre Mim",
            description: `
            Me chamo Canoi Gomes de Aguiar, sou um desenvolvedor de softwares brasileiro com especialidade em desenvolvimento de jogos e ferramentas multiplataforma.
            <br><br>
            Venho atuando como Engenheiro de Porting a alguns anos, trabalhando principalmente com ferramentas com Unity e Unreal para porting de jogos para Console.
            Porém por muitos anos desenvolvi pequenos projetos independentes ou dentro da faculdade.
            <br><br>
            Atualmente meus projetos pessoais giram mais em torno de sistemas baixo nível relacionados a game engines, como sistemas de renderização, processamento de áudio, integração com linguagens de script, por aí vai.
            `
        }
    }
}

const projects_texts = {
    en_us: {
        title: "Projects",
        fmf: {
            description: `
            Forgive me Father is a First Person Shooter, with the art on the better lovecraftian style.<br><br>
            I worked actively on the porting of the platforms Nintendo Switch e PS4/PS5.
            `
        },
        ruff: {
            description: `
            Ruff Ghanor é um jogo que mistura dinâmicas de deckbuilder com roguelike.<br><br>
            Trabalhei ativamente no porting the Microsoft Store e participei do porting de Xbox.
            `
        },
        wq: {
            description: `
            Wrestle Quest é um jogo de RPG sobre luta livre.<br><br>
            <b>*Esse foi um jogo que não trabalhei no porting inicial, somente em bufixes para plataformas de Xbox e Switch</b>
            `
        },
        byb97: {
            description: `
            O jogo faz parte da série Backyard Sports que contém outras modalidades de jogos.<br><br>
            Trabalhei como principal desenvolvedor no Nintendo Switch, também trabalhei ativamente no porting de PS5.
            `
        },
        rail: {
            description: `
            Railgunners é um shmup com diversas mecânicas de upgrade. Voe, colete pontos, melhore sua nave e tente novamente<br><br>
            <b>*Trabalhei no Railgunners no início do projeto, construí algumas das bases do jogo.
            Porém não participei ativamente do desenvolvimento do jogo</b>
            `
        },
        pharos: {
            description: `
            Pharos é um jogo de plataforma com objetivos educacionais no ensino de matemática.<br><br>
            O jogo foi um projeto da UFRN que atuei como bolsista, trabalhei ativamente no desenvolvimento do jogo criando algumas de suas mecânicas.
            `
        },
        knight: {
            description: `
            Knightvania é um jogo de metroidvania desenvolvido em 1 semana para a 365 indies game jam.<br><br>
            Trabalhei no jogo desenvolvendo todo o código e toda a parte gráfica.
            `
        },
        zamnw: {
            description: `
            Jogo desenvolvido para a LOWRESJAM 2016, o jogo consistem em um shooter com 20 fases, diferentes armas e upgrades.<br><br>
            Trabalhei desenvolvendo todo o código e toda a arte do jogo.
            `
        }
    },
    pt_br: {
        title: "Projetos",
        fmf: {
            author: "DX Gameworks",
            description: `
            Forgive me Father é um jogo de tiro em primeira pessoa com arte no melhor estilo lovecraftiano.<br><br>
            Trabalhei ativamente no porting das plataformas Nintendo Switch e PS4/PS5.
            `
        },
        ruff: {
            description: `
            Ruff Ghanor é um jogo que mistura dinâmicas de deckbuilder com roguelike.<br><br>
            Trabalhei ativamente no porting the Microsoft Store e participei do porting de Xbox.
            `
        },
        wq: {
            description: `
            Wrestle Quest é um jogo de RPG sobre luta livre.<br><br>
            <b>*Esse foi um jogo que não trabalhei no porting inicial, somente em bufixes para plataformas de Xbox e Switch</b>
            `
        },
        byb97: {
            description: `
            O jogo faz parte da série Backyard Sports que contém outras modalidades de jogos.<br><br>
            Trabalhei como principal desenvolvedor no Nintendo Switch, também trabalhei ativamente no porting de PS5.
            `
        },
        rail: {
            description: `
            Railgunners é um shmup com diversas mecânicas de upgrade. Voe, colete pontos, melhore sua nave e tente novamente<br><br>
            <b>*Trabalhei no Railgunners no início do projeto, construí algumas das bases do jogo.
            Porém não participei ativamente do desenvolvimento do jogo</b>
            `
        },
        pharos: {
            description: `
            Pharos é um jogo de plataforma com objetivos educacionais no ensino de matemática.<br><br>
            O jogo foi um projeto da UFRN que atuei como bolsista, trabalhei ativamente no desenvolvimento do jogo criando algumas de suas mecânicas.
            `
        },
        knight: {
            description: `
            Knightvania é um jogo de metroidvania desenvolvido em 1 semana para a 365 indies game jam.<br><br>
            Trabalhei no jogo desenvolvendo todo o código e toda a parte gráfica.
            `
        },
        zamnw: {
            description: `
            Jogo desenvolvido para a LOWRESJAM 2016, o jogo consistem em um shooter com 20 fases, diferentes armas e upgrades.<br><br>
            Trabalhei desenvolvendo todo o código e toda a arte do jogo.
            `
        }
    }
}