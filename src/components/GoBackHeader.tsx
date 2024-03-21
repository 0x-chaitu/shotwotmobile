import GoBackIcon from '../assets/icons/GoBackIcon';
import {Divider} from 'native-base';
import * as React from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import {colors} from '../theme/colors';
import {useNavigation} from '@react-navigation/native';

interface GoBackHeaderProps {
  header: string;
}

const GoBackHeader = ({header}: GoBackHeaderProps) => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <GoBackIcon
          onPress={() => navigation.goBack()}
          style={{marginBottom: 5}}
        />
        <Text style={styles.header}>{header}</Text>
      </View>
      <Divider
        color={colors.palette.grey100}
        width={2 * Dimensions.get('screen').width}
        left={-50}
      />
    </>
  );
};

export default GoBackHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  header: {
    color: colors.palette.grey800,
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
  },
});
