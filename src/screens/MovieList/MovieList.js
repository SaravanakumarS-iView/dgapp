import { useState, useMemo } from 'react'
import { FlatList, View } from 'react-native'
import MovieTile from '../../components/MovieTile/MovieTile'
import MovieListHeader from '../../components/MovieListHeader/MovieListHeader'
import NothingFound from './NothingFound'
import { styles } from './style'

const MovieList = ({ title, movies, fetchMovies }) => {
    const [searchText, setSearchText] = useState('')

    const filteredMovies = useMemo(() => {
        return movies.filter(({ name }) =>
            name.toLowerCase().includes(searchText.toLowerCase()))
    }, [movies, searchText])

    return (
        <View style={styles.container}>
            <MovieListHeader
                title={title}
                onBackClick={() => { }}
                onSearch={setSearchText}
            />
            <FlatList
                data={filteredMovies}
                renderItem={({ item }) => <MovieTile {...item} />}
                keyExtractor={(item, i) => i.toString()}
                numColumns={3}
                onEndReached={fetchMovies}
                onEndReachedThreshold={0.5}
                ListEmptyComponent={<NothingFound />}
                style={{ backgroundColor: '#050505', marginHorizontal: 6 }}
                columnWrapperStyle={styles.columnWrapperStyle}
                contentContainerStyle={styles.contentContainerStyle}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default MovieList