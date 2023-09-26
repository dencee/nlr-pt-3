/**
 * Expects an array of objects containing student info objects
 * with the following properties:
 *  - name
 *  - fanPageUrl
 * @param {Array<Object>} classInfo 
 */
export function createFanPages(classInfo){
    const cardsEl = document.querySelector('.fan-page-cards');
    const template = document.getElementById('card-template');

    for(const studentInfo of classInfo) {
        
        const clone = document.importNode(template.content, true);
        
        clone.querySelector('.card-header').innerText = studentInfo.name;
        clone.querySelector('iframe').src = studentInfo.fanPageUrl;
        clone.querySelector('.fan-site-button').addEventListener('click', openUrlInNewTab);
        cardsEl.appendChild(clone);
    }
}

function openUrlInNewTab(event){
    const iframeSite = event.target.previousElementSibling;
    const url = iframeSite.getAttribute('src');
    const w = window.open(url, "_blank");
}
