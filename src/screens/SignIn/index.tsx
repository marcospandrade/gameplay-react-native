import React from 'react';
import {
    Text,
    View,
    Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles'

import IllustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';


export function SignIn() {
    const navigation = useNavigation();

    function handleSignIn() {
        navigation.navigate('Home');
    }

    return (
        <Background>

            <View style={styles.container}>
                <Image
                    source={IllustrationImg}
                    style={styles.image}
                    resizeMode="stretch"
                />

                <View style={styles.content}>
                    <Text style={styles.title}>
                        Conecte-se {`\n`}
                        e organize suas{`\n`}
                        jogatinas
                    </Text>

                    <Text style={styles.subtitle}>
                        Crie grupos para jogar seus games{`\n`}
                        favoritos com amigos
                    </Text>

                    <ButtonIcon
                        title="Entrar com Discord"
                        activeOpacity={0.7}
                        onPress={handleSignIn}
                    />
                </View>
            </View>
        </Background>
    );
}
