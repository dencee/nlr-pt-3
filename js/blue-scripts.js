import { createFanPages } from './scripts.js'

const classInfo = [];

/*
 * Add fan pages below
 */
classInfo.push({ name: 'Hannah Schomaker', fanPageUrl: "https://schomakerh14.github.io/schomakerh14.github.io-marceline-fan-page/" });
classInfo.push({ name: 'Hannah Schomaker', fanPageUrl: "https://schomakerh14.github.io/Html-Notes/" });
classInfo.push({ name: 'Steven Diamantopoulos', fanPageUrl: "https://stavroz96.github.io/starcraft2-demo/" });
classInfo.push({ name: 'Aaron Callaway', fanPageUrl: "https://aaroncallaway31.github.io/HTML-Reference/" });
classInfo.push({ name: 'Christopher Ratsabout', fanPageUrl: "https://chrisratsabout.github.io/" });
classInfo.push({ name: 'Christopher Ratsabout', fanPageUrl: "https://chrisratsabout.github.io/html-css-js-reference/" });
classInfo.push({ name: 'Jansen Adkins', fanPageUrl: "https://jadkins160.github.io/USA-Hockey/" });
classInfo.push({ name: 'Clint Simmons', fanPageUrl: "https://simmca.github.io/" });
classInfo.push({ name: 'Clint Simmons', fanPageUrl: "https://simmca.github.io/hobby-site/" });
classInfo.push({ name: 'Clint Simmons', fanPageUrl: "https://simmca.github.io/html-css-reference/" });




window.addEventListener('DOMContentLoaded', event => {

    createFanPages(classInfo);

});
