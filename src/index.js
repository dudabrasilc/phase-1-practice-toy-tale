let addToy = false;




document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});



document.addEventListener("DOMContentLoaded", () => {



fetch("http://localhost:3000/toys")
.then(response => response.json())
.then(toys => {
  // console.log(toys)
  renderToys(toys)
})


// render toys array from json server 
function renderToys(toys) {
  toys.forEach(toy => {
    renderToy(toy)
  })
}



  function renderToy(toy) {
    // console.log(toy)
    // get node of id toy-collection
    const toyCollectionDiv = document.getElementById("toy-collection");
    // create a div node of class="card"
    const cardDiv = document.createElement("div")
    // add class of 'card' to the card div created
    cardDiv.className = 'card';
    // create children nodes for div with class="card"
    const h2 = document.createElement("h2");
    h2.textContent = toy.name;
    // create img tag
    const img = document.createElement("img");
    img.setAttribute("src", toy.image);
    img.setAttribute("class", "toy-avatar")
    // create p tag that is going to have the like count
    const p = document.createElement("p");
    p.className = "likes-count";
    p.textContent = `${toy.likes} likes`;
    // create like button
    const button = document.createElement("button");
    button.setAttribute("class", "like-btn");
    button.setAttribute("id", toy.id);
    button.textContent = "Like ❤️";
    // button event listener
    button.addEventListener('click', () => {
      let count = 0;
      count = toy.likes++ +1
      // console.log(count);
      p.textContent = `${count} likes`;
      // updateLikes(toy, count);
    })
    const unlike = document.createElement("button");
    unlike.setAttribute("class", "like-btn");
    unlike.setAttribute("id", toy.id);
    unlike.textContent = "Unlike ❤️";
    unlike.addEventListener("click", () => {
      let count = toy.likes;
      count = toy.likes-- - 1;
      p.textContent = `${count} likes`;
      // updateLikes(toy, count)
    })
    // append created elements to the DOM
    cardDiv.appendChild(h2)
    cardDiv.appendChild(img)
    cardDiv.appendChild(p)
    cardDiv.appendChild(button)
    cardDiv.appendChild(unlike)
    toyCollectionDiv.appendChild(cardDiv)
    }


    // Create a post request to the json server, which is going to add a toy, given the info: name, image and likes. Remember the server automatically creates an id for the toy.

    // fetch("http://localhost:3000/toys", {
    //   method: "POST",
    //   headers: {
    //   "Content-Type": "application/json",
    //   Accept: "application/json"
    //   },
    //   body: JSON.stringify({
    //     "name": "Jessie",
    //     "image": "https://vignette.wikia.nocookie.net/p__/images/8/88/Jessie_Toy_Story_3.png/revision/latest?cb=20161023024601&path-prefix=protagonist",
    //     "likes": 0
    //   })
    // })
    // .then(response => response.json())
    // .then(data => renderToy(data))



  //   function updateLikes(toy, count, e) {
  //     console.log(e)
  //   fetch(`http://localhost:3000/toys/${toy.id}`, {
  //   method: "PATCH",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     "likes": count
  //   })
  //   })
  //   .then(response => response.json())
  //   .then(data => console.log(data))  
  // }



  })
