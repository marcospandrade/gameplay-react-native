// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
    Text,
    View,
    Image,
    StatusBar
} from 'react-native';

import { ButtonIcon } from '../../components/ButtonIcon';
import IllustrationImg from '../../assets/illustration.png';
import { styles } from './styles'

export function SignIn() {
    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            <Image
                source={IllustrationImg}
                style={styles.image}
                resizeMode="stretch"
            />

            <View style={styles.content}>
                <Text style={styles.title}>
                    Organize {`\n`}
                    Suas jogatinas{`\n`}
                    facilmente
                </Text>

                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games{`\n`}
                    favoritos com amigos
                </Text>

                <ButtonIcon title="Entrar com Discord" activeOpacity={0.7}/>
            </View>
        </View>
    );
}
