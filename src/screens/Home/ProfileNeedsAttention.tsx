import EmptyComp from '../../components/EmptyComp';
import * as React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {colors} from '../../theme/colors';
import CustomText from '../../components/CustomText';
import HumanIcon from '../../assets/icons/HumanIcon';
import {customStyles} from '../../theme/style';
import TouchableButton from '../../components/TouchableButton';

interface ProfileNeedsAttentionProps {
  renderProp: () => React.ReactNode;
}

const ProfileNeedsAttention = ({renderProp}: ProfileNeedsAttentionProps) => {
  const renderItem = ({item}: any) => {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.logoContainer}>
          <item.icon />
        </View>
        <View style={{gap: 4}}>
          <CustomText
            textStyle={{...customStyles.heading8, fontFamily: 'Lato-Bold'}}>
            {item.heading}
          </CustomText>
          <CustomText textStyle={{...customStyles.bodyHelper}}>
            Complete your profile to help us serve your better.
          </CustomText>
        </View>
        {item.button()}
      </View>
    );
  };

  return (
    <View style={{}}>
      {renderProp()}
      <FlatList
        contentContainerStyle={{gap: 12}}
        data={[
          {
            icon: HumanIcon,
            heading: 'Profile Info',
            body: 'Complete your profile to help us serve your better.',
            button: () => (
              <TouchableButton
                placeHolder="Setup Profile"
                onPress={() => {}}
                textStyle={styles.buttonText}
                isLoading={false}
              />
            ),
          },
          {
            icon: HumanIcon,
            heading: 'KYC verification',
            body: 'Complete your KYC verification to start earning.',
            button: () => (
              <TouchableButton
                placeHolder="Complete KYC"
                onPress={() => {}}
                textStyle={styles.buttonText}
                isLoading={false}
              />
            ),
          },
          {
            icon: HumanIcon,
            heading: 'Your first brief',
            body: 'View and apply to your first brief to get yourself started.',
            button: () => (
              <TouchableButton
                placeHolder="Start Applying"
                onPress={() => {}}
                textStyle={styles.buttonText}
                isLoading={false}
              />
            ),
          },
          {
            icon: HumanIcon,
            heading: '30 day free plan',
            body: 'Get access to our free 30 day free premium plan.',
            button: () => (
              <TouchableButton
                placeHolder="Try Premium"
                onPress={() => {}}
                textStyle={styles.buttonText}
                isLoading={false}
              />
            ),
          },
        ]}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={<EmptyComp text="No Briefs available" />}
      />
    </View>
  );
};

export default ProfileNeedsAttention;

const styles = StyleSheet.create({
  container: {},
  cardContainer: {
    width: 151,
    height: 187,
    borderRadius: 6,
    backgroundColor: colors.palette.white,
    padding: 12,
    gap: 12,
  },
  logoContainer: {
    backgroundColor: colors.palette.theme6,
    height: 24,
    width: 24,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 12,
    fontFamily: 'Lato-Bold',
    color: colors.palette.theme,
  },
});
