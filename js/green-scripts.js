import { createFanPages } from './scripts.js'

const classInfo = [];

/*
 * Add fan pages below
 */
classInfo.push({ name: 'Steve Her', fanPageUrl: 'https://sth84478.github.io/fan-page/' });
classInfo.push({ name: 'Stephen Green', fanPageUrl: 'https://stevegreen4.github.io/fan-page/' });
classInfo.push({ name: 'Samantha Stinchcomb', fanPageUrl: 'https://thepudgypigeon.github.io/fan-page/' });
classInfo.push({ name: 'Josh Hurley', fanPageUrl: 'https://jrhurleycode.github.io/fan-page/' });
classInfo.push({ name: 'Joel Rennert', fanPageUrl: 'https://joelrennert.github.io/fan-page/' });
classInfo.push({ name: 'Jason Scott', fanPageUrl: 'https://jasondscott90.github.io/fan-page/' });
classInfo.push({ name: 'Heidi Jones', fanPageUrl: 'https://heid9107.github.io/fan-page/' });
classInfo.push({ name: 'Emmy Curry', fanPageUrl: 'https://emmycurry.github.io/fan-page/' });
classInfo.push({ name: 'Daniel Lopez', fanPageUrl: 'https://dubdayn.github.io/lucy-fanPage/' });
classInfo.push({ name: 'Stephanie Strano', fanPageUrl: 'https://stephnicoledev.github.io/fan-page/' });
classInfo.push({ name: 'Ash Sherlin', fanPageUrl: 'https://ashsherlin.github.io/eevee-hw/' });


window.addEventListener('DOMContentLoaded', event => {

    createFanPages(classInfo);

});