class Movie {
	constructor({
		id,
		overview,
		title,
		backdrop_path,
		genre_ids,
		popularity,
		poster_path,
		release_date,
		vote_average,
		vote_count,
	}) {
		this.id = id;
		this.overview = overview;
		this.title = title;
		this.backdrop_path = backdrop_path;
		this.genre_ids = genre_ids;
		this.popularity = popularity;
		this.poster_path = poster_path;
		this.release_date = release_date;
		this.vote_average = vote_average;
		this.vote_count = vote_count;
	}
}

export default Movie