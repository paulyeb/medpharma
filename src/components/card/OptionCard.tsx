import { TouchableOpacity, View } from 'react-native';
import { Sizes, useColors } from '../../utils';
import { Txt } from '../text';
import Icon from '../icons/Icon';
import { IconName } from '../icons/types';

interface OptionCardProps {
  backgroundColor: string;
  borderColor: string;
  iconColor: string;
  isSelected: boolean;
  title: string;
  icon: IconName;
  onSelect: () => void;
}
export const OptionCard = ({
  backgroundColor,
  borderColor,
  iconColor,
  title,
  isSelected,
  onSelect,
  icon,
}: OptionCardProps) => {
  const c = useColors();
  return (
    <TouchableOpacity
      onPress={onSelect}
      style={{
        padding: Sizes.largepadding,
        borderWidth: 2,
        backgroundColor: isSelected ? backgroundColor : '#F8F9FA',
        borderColor: isSelected ? borderColor : 'transparent',
        alignItems: 'center',
        borderRadius: Sizes.radiusMedium,
        gap: 20,
        flex: 1,
      }}>
      {isSelected ? (
        <View style={{ position: 'absolute', right: 10, top: 10 }}>
          <Icon color={iconColor} icon={'IconChecked1'} />
        </View>
      ) : null}
      <Icon icon={icon} color={isSelected ? iconColor : c.gray} />
      <Txt color={isSelected ? c.color : c.gray} size={16}>
        {title}
      </Txt>
    </TouchableOpacity>
  );
};
