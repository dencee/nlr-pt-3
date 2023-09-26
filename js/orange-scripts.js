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

window.addEventListener('DOMContentLoaded', event => {

    createFanPages(classInfo);

});