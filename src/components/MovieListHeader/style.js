import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 10,
    },
    titleWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        color: '#ffffff99',
        fontSize: 24,
        marginLeft: 20,
    },
    icon: {
        height: 20,
        width: 20,
        tintColor: '#ffffff'
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#808080',
        flex: 1,
        color: '#ffffff',
        marginBottom: 10,
        marginHorizontal: 5
    },
    mr5: {
        marginRight: 5
    }
})