// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

let tabData = [];

/**
 * Takes an array of tab names and appends them to the DOM
 * @param {string[]} tabNames is an array of tab names from an API
 */
function makeTabs(tabNames) {
  tabNames.forEach((x) => {
    const element = make("div", ["tab"], x);
    get(".topics").appendChild(element);
  });
}

window.addEventListener("load", () => {
  axios
    .get("https://lambda-times-backend.herokuapp.com/topics")
    .then((res) => {
      tabData = res.data.topics;
      makeTabs(tabData);
    })
    .catch((err) => {
      get(".topics").innerHTML += "Unable to Load Topics";
    });
});
