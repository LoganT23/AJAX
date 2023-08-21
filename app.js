console.log("Let's get this party started!");
const form = document.querySelector("#search-form");
const removeGifsButton = document.querySelector("#remove-gifs");
const gifsContainer = document.querySelector("#gifs");
      form.addEventListener("submit", async function (event) {
        event.preventDefault();
        const searchTerm = document.querySelector("#search-term").value;
        const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
            params: {
              q: searchTerm,
              api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"}});
        console.log(response.data);
        const gifUrl = response.data.data[0].images.original.url;
        const gifImg = document.createElement("img");
        gifImg.src = gifUrl;
        gifsContainer.appendChild(gifImg);
        
      });
      removeGifsButton.addEventListener("click", function () {
       gifsContainer.innerHTML = "";})