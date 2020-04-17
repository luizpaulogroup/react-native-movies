import React from 'react';
import { SafeAreaView, StyleSheet, View, Image, Text, ImageBackground } from 'react-native';

export default function Details({ route: { params: { item } } }) {

    const start = () => {
        var stars = "";
        return stars.padStart(item.rating, "★");
    }

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                style={{ flex: 1 }}
                imageStyle={{ opacity: 0.1 }}
                source={{ uri: item.large_cover_image }}>
                <View style={styles.contentHeader}>
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
                </View>
                <View style={styles.contentMain}>

                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    contentHeader: {
        padding: 10,
        flexDirection: 'row',
    },
    contentMain: {
        flex: 1,
        padding: 10,
        flexDirection: 'row',
        backgroundColor: 'black'
    },
    image: {
        width: 100,
        height: 100
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