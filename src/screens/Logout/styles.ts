import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textHeading: {
    marginTop: 14,
    marginBottom: 26,
    fontSize: 24,
    fontFamily: theme.fonts.title500,
    color: theme.colors.heading,
  },
  buttonsView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonConfirm: {
    width: 160,
    height: 56,
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    flexDirection: 'row',
    marginHorizontal: 12,
    marginBottom: 40,
    alignItems: 'center'
  },
  buttonCancel: {
    width: 160,
    height: 56,
    backgroundColor: theme.colors.secondary50,
    borderRadius: 8,
    flexDirection: 'row',
    marginHorizontal: 12,
    marginBottom: 40,
    alignItems: 'center'
  }

});