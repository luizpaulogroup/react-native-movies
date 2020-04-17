import React from 'react';
import { SafeAreaView, StyleSheet, View, Image, Text, ImageBackground, ScrollView } from 'react-native';

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
                        <Text style={styles.title}>{item.title_long}</Text>
                        <Text style={styles.year}>{`Ano: ${item.year}`}</Text>
                        <Text style={{ ...styles.rating, color: item.rating > 6 ? 'white' : 'red' }}>{`Nota: ${item.rating}`}</Text>
                        <Text style={styles.stars}>{start()}</Text>
                    </View>
                </View>
                <View style={styles.contentMain}>
                    <ScrollView>
                        <View>
                            <Text style={styles.title_description_full}>Descrição</Text>
                            <Text style={styles.description_full}>{item.description_full}</Text>
                        </View>
                        <View>
                            <Text style={styles.title_description_full}>Gêneros</Text>
                            {item.genres.map(genre => (
                                <View key={genre}><Text style={styles.description_full}>{genre}</Text></View>
                            ))}
                        </View>
                    </ScrollView>
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
        flexDirection: 'column',
    },
    image: {
        width: 100,
        height: 100
    },
    info: {

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
    },
    contentMain: {
        flex: 1,
        padding: 10,
        flexDirection: 'row',
        backgroundColor: 'black'
    },
    title_description_full: {
        color: '#999',
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 5
    },
    description_full: {
        color: 'white',
        fontSize: 16,
        marginVertical: 5
    },
});