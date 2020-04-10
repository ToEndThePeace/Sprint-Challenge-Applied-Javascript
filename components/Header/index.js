// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function makeHeader(date, title, temperature) {
  const headE = make("div", ["header"]);
  const dateE = make("span", ["date"], date);
  const titleE = make("h1", [], title);
  const tempE = make("span", ["temp"], temperature);

  headE.appendChild(dateE);
  headE.appendChild(titleE);
  headE.appendChild(tempE);

  return headE;
}

function addHeader(headerNode) {
  get(".header-container").appendChild(headerNode);
}

window.addEventListener("load", () => {
  addHeader(makeHeader("Date", "Title", "98&deg;"));
})