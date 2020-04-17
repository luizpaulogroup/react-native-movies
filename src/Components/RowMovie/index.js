import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

const RowMoview = ({ navigation, item }) => {

    const start = () => {
        var stars = "";
        return stars.padStart(item.rating, "★");
    }

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('Details', { item })}
            style={styles.content}>
            <Image
                style={styles.image}
                source={{ uri: item.medium_cover_image }}
                resizeMode="cover" />
            <View style={styles.info}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.year}>{`Ano: ${item.year}`}</Text>
                <Text style={{ ...styles.rating, color: item.rating > 6 ? 'white' : 'red' }}>{`Nota: ${item.rating}`}</Text>
                <Text style={styles.stars}>{start()}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    content: {
        height: 120,
        alignSelf: 'stretch',
        marginHorizontal: 5,
        marginVertical: 5,
        flexDirection: 'row',
    },
    image: {
        width: 100,
        height: '100%'
    },
    info: {
        paddingLeft: 5,
    },
    title: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    year: {
        color: '#999',
        fontSize: 14,
        marginVertical: 2,
    },
    rating: {
        marginVertical: 2,
    },
    stars: {
        color: 'yellow',
        marginVertical: 2,
    }
});

export default RowMoview;