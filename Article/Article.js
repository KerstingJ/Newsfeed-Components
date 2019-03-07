// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector(".expandButton");
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = "Expand";
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener("click", this.expandArticle.bind(this));

    // the order is important, this is to get rid of the lag when minimizing an article. 
    this.height = parseInt(window.getComputedStyle(this.domElement).height.split("p")[0]);
    this.height += 50; // this guy gives us a little extra room at the bottom... maybe needs to be dynamic depending on amount of content?
    this.domElement.style.maxHeight = '50px'; // setting the articles to start at the collapsed height

    this.domElement.style.transition = "2s"; // setting this here to prevent the wonk when the page first loads
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle("article-open");
    this.domElement.style.maxHeight = this.domElement.classList.contains("article-open") ? `${this.height}px` : '50px';
  }

  static fromObj(obj){
    const h2 = document.createElement("h2");
    h2.textContent = obj.heading;

    const time = document.createElement("p");
    time.classList.add("date");
    time.textContent = obj.date || new Date().toDateString();

    // to make this work for multiple p's maybe have the paragraphs in an array then hit em with that forEach.
    const content = document.createElement("p");
    content.textContent = obj.content;

    const expand = document.createElement("span");
    expand.classList.add("expandButton");
    expand.textContent = "expand";

    const article = document.createElement("div");
    article.classList.add("article");

    article.append(h2, time, content, expand); // so apparently this works

    return article;
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

const articleObj = {
  heading: "My Super Awesome Heading",
  content: "lorem ipsum and alluh that. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscin elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscingelit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscingelit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscingelit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscingelit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscingelit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consecteturadipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolorsit amet, consectetur adipiscing elit. Nidoking Lorem ipsum",
};

const articleContainer = document.querySelector(".articles");
articleContainer.appendChild(Article.fromObj(articleObj));

let articles = document.querySelectorAll(".article");
articles.forEach(function(article){return new Article(article)});