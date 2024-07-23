import { StyleSheet } from 'react-native';
import { Sizes } from '../../utils';

const s = Sizes;
export const HomeScreenStyles = StyleSheet.create({
  header: {
    height: 200,
    paddingHorizontal: s.largepadding,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  quickActionsButtons: {
    padding: 20,
    borderRightWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    gap: 15,
  },
  quickActionsContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    top: -50,
    alignSelf: 'center',
    width: '100%',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
