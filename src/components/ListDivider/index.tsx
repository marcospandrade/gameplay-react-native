import React from 'react';
import {
    View
} from 'react-native';

import { styles } from '../../components/ListDivider/styles';

type Props = {
    isCentered?: boolean;
}
export function ListDivider({ isCentered }: Props) {
    return (
        <View style={[
            styles.container,
            isCentered ? {
                marginVertical: 12
            } : {
                marginTop: 2,
                marginBottom: 31
            }
        ]} 
        />
    );
}