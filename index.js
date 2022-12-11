// https://gogoanime.consumet.org/search?keyw=death-note
const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const animeTitleValue = document.getElementById("anime-title").value;

  fetch(`https://gogoanime.consumet.org/search?keyw=${animeTitleValue}`)
    .then((response) => response.json())
    .then((data) => render(data));


    document.querySelector('form').reset()
});

function render(data) {
  const animeListArray = data;
  let html = ``;

  const getAnimeCardHtml = animeListArray.map(function (anime) {
    const {animeTitle, animeImg, status} = anime

    return html += `
        <div class="card">
            <img src="${animeImg}" />
            <div class="card-body">
                <h3 class="anime-title">${animeTitle}</h3>
                <p class="release-date">${status}</p>
            </div>
        </div>
    `
  }).join(' ');
  console.log(html)
  console.log(data)
  document.getElementById('card-wrapper').innerHTML = getAnimeCardHtml
}

// {animeId: 'death-note', animeTitle: 'Death Note', animeUrl: 'https://gogoanime.film///category/death-note', animeImg: 'https://gogocdn.net/cover/death-note.png', status: 'Released: 2006'}