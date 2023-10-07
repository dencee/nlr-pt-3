import { createFanPages } from './scripts.js'

const classInfo = [];

/*
 * Add fan pages below
 */
classInfo.push({ name: 'Hannah Schomaker', fanPageUrl: "https://schomakerh14.github.io/schomakerh14.github.io-marceline-fan-page/" });
classInfo.push({ name: 'Steven Diamantopoulos', fanPageUrl: "https://stavroz96.github.io/starcraft2-demo/" });
classInfo.push({ name: 'Chris Ratsabout', fanPageUrl: "https://chrisratsabout.github.io/te-html-fan-page/" });


window.addEventListener('DOMContentLoaded', event => {

    createFanPages(classInfo);

});
