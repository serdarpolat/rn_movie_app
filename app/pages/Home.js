import React, { Component } from 'react'
import { SafeAreaView, View, Text, StyleSheet, ScrollView } from 'react-native'
import MovieItem from '../components/MovieItem';
import Movie from '../models/Movie';

class Home extends Component {
	_isMount = false;

	state = {
		isLoading: false,
		recentMovies: [],
		popularMovies: [],
	};

	componentDidMount() {
		this._isMount = true

		return fetch("https://api.themoviedb.org/3/movie/popular?api_key=1bb6d4935d683e27f590016db6031abe")
			.then((response) => response.json())
			.then((responseJson) => {
				const data = [];
				responseJson.results.forEach(movie => {
					data.push(new Movie({
						id: movie.id,
						overview: movie.overview,
						title: movie.title,
						backdrop_path: movie.backdrop_path,
						genre_ids: movie.genre_ids,
						popularity: movie.popularity,
						poster_path: movie.poster_path,
						release_date: movie.release_date,
						vote_average: movie.vote_average,
						vote_count: movie.vote_count,
					}))
				});
				this.setState({
					popularMovies: data
				})
			})
			.catch((error) => console.log(error));
	}

	componentWillUnmount() {
		this._isMount = false
	}

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
					<View style={{ flexDirection: "row", flex: 1 }}>
						{
							this.state.popularMovies.map((item) => {
								return <MovieItem key={item.id} item={item} />
							})
						}
					</View>
				</ScrollView>
			</SafeAreaView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	}
})

export default Home