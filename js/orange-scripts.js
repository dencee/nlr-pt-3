import { createFanPages } from './scripts.js'
import { createPortfolioPages } from './scripts.js'
import { createSideProjectPages } from './scripts.js'

const classInfo = [];

classInfo.push({ name: 'Angela Wang',       fanPageUrl: "https://angelaw1618.github.io/fan-page/", portfolioUrl: "https://angelaw1618.github.io/fan-page/" , sideProjectUrl: ""});
classInfo.push({ name: 'Benjamin Mayfield', fanPageUrl: "https://space-scout.github.io/fanpage/", portfolioUrl: "https://space-scout.github.io/fanpage/", sideProjectUrl: ""});
classInfo.push({ name: 'Shawn Clarke',      fanPageUrl: "https://shawcla.github.io/fan-page/", portfolioUrl: "https://shawcla.github.io/fan-page/", sideProjectUrl: ""});
classInfo.push({ name: 'Shahina Borhan',    fanPageUrl: "https://sbmajed.github.io/Fan-Page/", portfolioUrl: "https://sbmajed.github.io/Fan-Page/", sideProjectUrl: ""});
classInfo.push({ name: 'Reiczel Bael',      fanPageUrl: "https://zelbael.github.io/fan-page/", portfolioUrl: "https://zelbael.github.io/fan-page/", sideProjectUrl: ""});
classInfo.push({ name: 'Michael Wilson',    fanPageUrl: "https://mikeez704.github.io/Fan-page/", portfolioUrl: "https://mikeez704.github.io/Fan-page/", sideProjectUrl: ""});
classInfo.push({ name: 'Liz Rock',          fanPageUrl: "https://lizrockdevs.github.io/nyan-fan-page/", portfolioUrl: "https://lizrockdevs.github.io/nyan-fan-page/", sideProjectUrl: "google.com"});
classInfo.push({ name: 'Jeff Arnett',       fanPageUrl: "https://jarnett9.github.io/fan-page/", portfolioUrl: "https://jarnett9.github.io/fan-page/", sideProjectUrl: ""});
classInfo.push({ name: 'James Richardson',  fanPageUrl: "https://jamesdrichardson.github.io/fan-page/", portfolioUrl: "https://jamesdrichardson.github.io/PortfolioWebsite/", sideProjectUrl: "https://projects.jamesdrichardson.dev"});
classInfo.push({ name: 'Eimile Davis',      fanPageUrl: "https://eimiled.github.io/fan-page/", portfolioUrl: "https://eimiled.github.io/fan-page/", sideProjectUrl: ""});
classInfo.push({ name: 'Berenice Borbon',   fanPageUrl: "https://bborbon.github.io/fan-page/", portfolioUrl: "https://bborbon.github.io/fan-page/", sideProjectUrl: ""});
classInfo.push({ name: 'Dalton Cavaness',   fanPageUrl: "https://dallyworld.github.io/fan-page/", portfolioUrl: "https://dallyworld.github.io/fan-page/", sideProjectUrl: ""});
classInfo.push({ name: 'Joseph Tayag',      fanPageUrl: "https://jtayag1216.github.io/fan-page/", portfolioUrl: "https://jtayag1216.github.io/fan-page/", sideProjectUrl: ""});
classInfo.push({ name: 'Samuel Afewerki',   fanPageUrl: "https://samuelafewerki.github.io/fan-page/", portfolioUrl: "https://samuelafewerki.github.io/fan-page/", sideProjectUrl: ""});
classInfo.push({ name: 'Edgar Vargas',      fanPageUrl: "https://edgar-vargas.github.io/fanpage/", portfolioUrl: "https://edgar-vargas.github.io/fanpage/", sideProjectUrl: ""});
classInfo.push({ name: 'Kaitlyn Arick',     fanPageUrl: "https://arick-kaitlyn.github.io/TE-Fan-Page/", portfolioUrl: "https://arick-kaitlyn.github.io/", sideProjectUrl: ""});

window.addEventListener('DOMContentLoaded', event => {

    createFanPages(classInfo);

});

window.addEventListener('DOMContentLoaded', event => {

    createPortfolioPages(classInfo);

});


window.addEventListener('DOMContentLoaded', event => {

    createSideProjectPages(classInfo);

});