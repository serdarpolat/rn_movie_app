import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

// POSTERURL : http://image.tmdb.org/t/p/w342/posterpath

export default function MovieItem(props) {
    return (
        <View style={styles.item}>
            <Image style={styles.poster} source={{ uri: "http://image.tmdb.org/t/p/w342/" + props.item.poster_path }} />
            <Text>{props.item.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: "column",
        flexWrap: "wrap",
    },
    poster: {
        width: 342,
        height: 513,
    }
})