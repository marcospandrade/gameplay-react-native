import React from 'react';

import {
  View,
  Text
} from 'react-native';
import { Button } from '../../components/Button';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';

type Props = {
  handleCloseLogout: () => void;
};

export function Logout() {
  return (
    <View style={styles.container}>
      <Text style={styles.textHeading}>Deseja sair do <Text style={{ fontWeight: 'bold' }}>Game<Text style={{ color: theme.colors.primary }}>Play</Text>?</Text></Text>

      <View style={styles.buttonsView}>
        <Button
          title="Não"
          style={styles.buttonCancel}
        />
        <Button
          title="Sim"
          style={styles.buttonConfirm}
        />
      </View>
    </View>
  );
}