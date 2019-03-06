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
    
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle("article-open");
  }

  static fromObj(obj){
    const h2 = document.createElement("h2");
    h2.textContent = obj.heading;

    const time = document.createElement("p");
    time.classList.add("date");
    time.textContent = obj.date || new Date().toDateString();

    const content = document.createElement("p");
    content.textContent = obj.content;

    const expand = document.createElement("span");
    expand.classList.add("expandButton");
    expand.textContent = "expand";

    const article = document.createElement("div");
    article.classList.add("article");

    article.append(h2, time, content, expand); // so apparently this works but its not as nice as appendChild... 

    return article;
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

const articleObj = {
  heading: "My Super Awesome Heading",
  content: "lorem ipsum and alluh that",
};

const articleContainer = document.querySelector(".articles");
articleContainer.appendChild(Article.fromObj(articleObj));

let articles = document.querySelectorAll(".article");
articles.forEach(function(article){return new Article(article)});