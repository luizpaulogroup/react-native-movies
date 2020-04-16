import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';

export default function Home() {
    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View>
                <Text>Home</Text>
            </View>
        </SafeAreaView>
    );
}