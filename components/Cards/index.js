// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

function makeCard({ headline, authorPhoto, authorName }) {
  const card = make("div", ["card"]);
  const hline = make("div", ["headline"], headline);
  const author = make("div", ["author"]);
  const imgCont = make("div", ["img-container"]);
  const image = make("img", []);
  image.src = authorPhoto;
  const name = make("span", [], `By ${authorName}`);

  card.appendChild(hline);
  card.appendChild(author);
  author.appendChild(imgCont);
  author.appendChild(name);
  imgCont.appendChild(image);

  get(".cards-container").appendChild(card);
}

window.addEventListener("load", () => {
  axios
    .get("https://lambda-times-backend.herokuapp.com/articles")
    .then((res) => {
      // Pull the articles out of the response and into loopable arrays
      const articles = Object.values(res.data.articles);

      // Requires two loops because of the array nesting from the response
      articles.forEach((z) => {
        z.forEach((x) => {
          // Create the cards and add to DOM
          makeCard(x);
        });
      });
    })
    .catch((err) => {
      get(".cards-container").textContent =
        "Unable to load any articles. Please try again later.";
    });
});
