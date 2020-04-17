import React, { useState, useEffect } from 'react';
import { SafeAreaView, FlatList } from 'react-native';

import RowMoview from '../../Components/RowMovie';

import api from '../../services/api';

export default function Home({ navigation }) {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        get();
    });

    const get = async () => {

        try {

            const response = await api.get();

            setMovies(response.data.data.movies);

        } catch (error) {
            console.log(error);
        }

    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                data={movies}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => <RowMoview navigation={navigation} item={item} />} />
        </SafeAreaView>
    );
}