import { createFanPages } from './scripts.js'

const classInfo = [];

classInfo.push({ name: 'Angela Wang',       fanPageUrl: "https://angelaw1618.github.io/fan-page/" });
classInfo.push({ name: 'Benjamin Mayfield', fanPageUrl: "https://space-scout.github.io/fanpage/" });
classInfo.push({ name: 'Shawn Clarke',      fanPageUrl: "https://shawcla.github.io/fan-page/" });
classInfo.push({ name: 'Shahina Borhan',    fanPageUrl: "https://sbmajed.github.io/Fan-Page/" });
classInfo.push({ name: 'Reiczel Bael',      fanPageUrl: "https://zelbael.github.io/fan-page/" });
classInfo.push({ name: 'Michael Wilson',    fanPageUrl: "https://mikeez704.github.io/Fan-page/" });
classInfo.push({ name: 'Liz Rock',          fanPageUrl: "https://lizrockdevs.github.io/nyan-fan-page/" });
classInfo.push({ name: 'Jeff Arnett',       fanPageUrl: "https://jarnett9.github.io/fan-page/" });
classInfo.push({ name: 'James Richardson',  fanPageUrl: "https://jamesdrichardson.github.io/fan-page/" });
classInfo.push({ name: 'Eimile Davis',      fanPageUrl: "https://eimiled.github.io/fan-page/" });
classInfo.push({ name: 'Berenice Borbon',   fanPageUrl: "https://bborbon.github.io/fan-page/" });
classInfo.push({ name: 'Dalton Cavaness',   fanPageUrl: "https://dallyworld.github.io/fan-page/" });
classInfo.push({ name: 'Joseph Tayag',      fanPageUrl: "https://jtayag1216.github.io/fan-page/" });
classInfo.push({ name: 'Samuel Afewerki',   fanPageUrl: "https://samuelafewerki.github.io/fan-page/" });
classInfo.push({ name: 'Edgar Vargas',      fanPageUrl: "https://edgar-vargas.github.io/fanpage/" });
classInfo.push({ name: 'Kaitlyn Arick',     fanPageUrl: "https://arick-kaitlyn.github.io/TE-Fan-Page/" });

window.addEventListener('DOMContentLoaded', event => {
    createFanPages(classInfo);

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    }, {
        threshold: 0.5,
    });

    const fanSiteCards = document.querySelectorAll('.fan-page-cards .fan-site.card');

    fanSiteCards.forEach(card => {
        observer.observe(card);
    });
});
let foreground = document.getElementById('foreground');
let foreground2 = document.getElementById('foreground2')
let moon = document.getElementById('moon');
let scaryTree = document.getElementById('scary-tree');
let treeTwo = document.getElementById('scary-tree2');
let house = document.getElementById('house');
let stars = document.getElementById('stars');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    foreground.style.left = value * 0.08 + 'px';
    moon.style.top = value * 0.35 + 'px'
    scaryTree.style.left = value * 0.15 + 'px';
    treeTwo.style.left = value * 0.05 + 'px';
    foreground2.style.right = value * -0.25 + 'px';
    house.style.scale = value * 0.25 + 'px';
    stars.style.top = value * -0.15 + 'px';
});

