import { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { images } from '../../assets/images'
import { styles } from './style'

const MovieListHeader = ({ title, onSearch }) => {
    const [isSearch, setIsSearch] = useState(false)

    const toggleSearch = () => {
        if (isSearch) {
            onSearch('')
        }
        setIsSearch((v) => !v)
    }

    return (
        <View style={styles.container}>
            {!isSearch ?
                <>
                    <View style={styles.titleWrapper}>
                        <TouchableOpacity onPress={() => { }}>
                            <Image style={styles.icon} source={images.back} />
                        </TouchableOpacity>
                        <Text style={styles.title}>
                            {title}
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.mr5} onPress={toggleSearch}>
                        <Image style={styles.icon} source={images.search} />
                    </TouchableOpacity>
                </>
                :
                <View style={[styles.titleWrapper, styles.mr5]}>
                    <TextInput
                        placeholderTextColor='#ffffff99'
                        placeholder='Search...'
                        style={styles.input}
                        onChangeText={onSearch}
                    />
                    <TouchableOpacity onPress={toggleSearch}>
                        <Image style={styles.icon} source={images.close} />
                    </TouchableOpacity>
                </View>
            }
        </View>
    )
}

export default MovieListHeader
