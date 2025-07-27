var resume = document.getElementById("resume_role");
// console.log(resume)
// console.log(resume.children)

var skills = [
    {
        label: "C",
        level: 3
    },
    {
        label: "Lua",
        level: 3
    },
    {
        label: "Graphics programming",
        level: 3
    },
    {
        label: "Engine programming",
        level: 3
    },
    {
        label: "SDL2",
        level: 4
    },
    {
        label: "Unity",
        level: 2
    },
    {
        label: "Unreal",
        level: 2
    }
]

if (resume)
    resume.innerHTML = resume_texts[lang].role


var about_me = document.getElementById("about_me");
// console.log(about_me)
// console.log(about_me.children)
if (about_me) {
    let title = about_me.children[0]
    let descr = about_me.children[1]

    title.innerHTML = resume_texts[lang].about_me.title
    descr.innerHTML = resume_texts[lang].about_me.description
}

var skill_list = document.getElementById('skill-list');
console.log(skill_list);
if (skill_list) {
    console.log(skills);
    for (i in skills) {
        let skill = skills[i];
        var div = document.createElement('div');
        div.className = 'skill';
        var label = document.createElement('label');
        label.innerText = skill.label;
        var progress = document.createElement('progress');
        progress.max = 5;
        progress.value = skill.level;
        
        div.appendChild(label);
        div.appendChild(progress);
        skill_list.appendChild(div);
    }
}