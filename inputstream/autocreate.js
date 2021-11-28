const Movie = require("../models/Movie");
const Ova = require("../models/OVA");
const Show = require("../models/Show");
const Special = require("../models/Special");

const movieJSON = require("./movies");
const showJSON = require("./shows");
const ovaJSON = require("./ovas");
const specialJSON = require("./specials");

const createMovies = (i) => {
    const newMovie = new Movie({
        anime_id: movieJSON[i].anime_id,
        title: movieJSON[i].title,
        image_url: movieJSON[i].image_url,
        source: movieJSON[i].source,
        status: movieJSON[i].status,
        airing: movieJSON[i].airing,
        aired: movieJSON[i].aired,
        duration: movieJSON[i].duration,
        rating: movieJSON[i].rating,
        score: movieJSON[i].score,
        scored_by: movieJSON[i].scored_by,
        rank: movieJSON[i].rank,
        popularity: movieJSON[i].popularity,
        related: movieJSON[i].related,
        producer: movieJSON[i].producer,
        licensor: movieJSON[i].licensor,
        studio: movieJSON[i].studio,
        genre: movieJSON[i].genre,
        opening_theme: movieJSON[i].opening_theme,
        ending_theme: movieJSON[i].ending_theme,
      });
      newMovie
      .save()
      .then((data) => {
          console.log("added movie "+(i+1)+"/5: "+data.title)
      })
      .catch((err) => {
          console.log("could not add movie "+(i+1)+"/5: "+err.message);
      });
};
const createOvas = (i) => {
    const newOVA = new Ova({
        anime_id: ovaJSON[i].anime_id,
        title: ovaJSON[i].title,
        image_url: ovaJSON[i].image_url,
        source: ovaJSON[i].source,
        episodes:ovaJSON[i].episodes,
        status: ovaJSON[i].status,
        airing: ovaJSON[i].airing,
        aired: ovaJSON[i].aired,
        duration: ovaJSON[i].duration,
        rating: ovaJSON[i].rating,
        score: ovaJSON[i].score,
        scored_by: ovaJSON[i].scored_by,
        rank: ovaJSON[i].rank,
        popularity: ovaJSON[i].popularity,
        related: ovaJSON[i].related,
        producer: ovaJSON[i].producer,
        licensor: ovaJSON[i].licensor,
        studio: ovaJSON[i].studio,
        genre: ovaJSON[i].genre,
        opening_theme: ovaJSON[i].opening_theme,
        ending_theme: ovaJSON[i].ending_theme,
      });
    
      newOVA
        .save()
        .then((data) => console.log("added ova "+(i+1)+"/5: "+data.title))
        .catch((err) => console.log("could not add ova "+(i+1)+"/5: "+err.message));
};
const createShows = (i) => {
    const newShow = new Show({
        anime_id: showJSON[i].anime_id,
        title: showJSON[i].title,
        image_url: showJSON[i].image_url,
        source: showJSON[i].source,
        episodes: showJSON[i].episodes,
        status: showJSON[i].status,
        airing: showJSON[i].airing,
        aired: showJSON[i].aired,
        duration: showJSON[i].duration,
        rating: showJSON[i].rating,
        score: showJSON[i].score,
        scored_by: showJSON[i].scored_by,
        rank: showJSON[i].rank,
        popularity: showJSON[i].popularity,
        premiered: showJSON[i].premiered,
        broadcast: showJSON[i].broadcast,
        related: showJSON[i].related,
        producer: showJSON[i].producer,
        licensor: showJSON[i].licensor,
        studio: showJSON[i].studio,
        genre: showJSON[i].genre,
        opening_theme: showJSON[i].opening_theme,
        ending_theme: showJSON[i].ending_theme,
      });
    
      newShow
        .save()
        .then((data) => console.log("added show "+(i+1)+"/5: "+data.title))
        .catch((err) => console.log("could not add show "+(i+1)+"/5: "+err.message));
};

const createSpecials = (i) => {
    const newSpecial = new Special({
		anime_id: specialJSON[i].anime_id,
		title: specialJSON[i].title,
		image_url: specialJSON[i].image_url,
		source: specialJSON[i].source,
		episodes: specialJSON[i].episodes,
		status: specialJSON[i].status,
		airing: specialJSON[i].airing,
		aired: specialJSON[i].aired,
		duration: specialJSON[i].duration,
		rating: specialJSON[i].rating,
		score: specialJSON[i].score,
		scored_by: specialJSON[i].scored_by,
		rank: specialJSON[i].rank,
		popularity: specialJSON[i].popularity,
		related: specialJSON[i].related,
		producer: specialJSON[i].producer,
		licensor: specialJSON[i].licensor,
		studio: specialJSON[i].studio,
		genre: specialJSON[i].genre,
		opening_theme: specialJSON[i].opening_theme,
		ending_theme: specialJSON[i].ending_theme
	});

	newSpecial.save()
    .then((data) => console.log("added special "+(i+1)+"/5: "+data.title))
    .catch((err) => console.log("could not add special "+(i+1)+"/5: "+err.message));
};
const autoCreate = (i) => {
    createMovies(i);
    createOvas(i);
    createShows(i);
    createSpecials(i);
};

module.exports = autoCreate;