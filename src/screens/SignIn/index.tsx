import React from 'react';
import {
    Text,
    View,
    Image,
    Alert,
    ActivityIndicator
} from 'react-native';

import { useAuth } from '../../hooks/auth';
import { styles } from './styles'

import IllustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';
import { theme } from '../../global/styles/theme';


export function SignIn() {
    const { loading, signIn } = useAuth();

    async function handleSignIn() {
        try {
            await signIn();
        } catch (error) {
            Alert.alert(error);
        }
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

                    {
                        loading 
                        ? <ActivityIndicator color={theme.colors.primary}/> 
                        :
                        <ButtonIcon
                            title="Entrar com Discord"
                            activeOpacity={0.7}
                            onPress={handleSignIn}
                        />
                    }
                </View>
            </View>
        </Background>
    );
}
