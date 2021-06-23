import React from 'react';
import { Image } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { styles } from './styles';


export function GuildIcon() {
    const uri = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8lh5XYWv2a7he0qeDdiIX4u9GZ8dwhl67ONv0EyjtYY9eCGqbOIGNqd4iEzIdW788fmc&usqp=CAU"
    return (
            <Image 
                source={{ uri }}
                style={styles.image}
                resizeMode="cover"
            />
    )
}