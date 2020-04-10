/**
 * Takes some input and returns an HTML node
 * @param {string} htmlElement contains the name of a valid element
 * @param {string[]} className contains an array of classes to add
 * @param {string} content is the content to be put in an element
 * @returns a finished HTML node
 */
function make(htmlElement, className, content) {
  const elem = document.createElement(htmlElement);
  className.forEach((x) => {
    elem.classList.add(x);
  });
  if (content) elem.innerHTML = content;
  return elem;
}

function get(selector) {
  return document.querySelector(selector);
}
function getAll(selector) {
  return document.querySelectorAll(selector);
}