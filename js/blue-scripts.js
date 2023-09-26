import { createFanPages } from './scripts.js'

const classInfo = [];

/*
 * Add fan pages below
 */
classInfo.push({ name: 'A. Developer', fanPageUrl: "https://en.wikipedia.org/wiki/Blue" });

window.addEventListener('DOMContentLoaded', event => {

    createFanPages(classInfo);

});