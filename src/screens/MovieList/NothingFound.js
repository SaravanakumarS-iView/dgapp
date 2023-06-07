import { View, Text } from 'react-native'
import { styles } from './style'

const NothingFound = () => {
    return (
        <View style={styles.nothingWrapper}>
            <Text style={[styles.text, styles.title]} >Nothing found</Text>
            <Text style={styles.text}>Try searching for something else.</Text>
        </View>
    )
}

export default NothingFound