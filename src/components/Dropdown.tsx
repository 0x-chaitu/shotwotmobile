import {StyleSheet} from 'react-native';
import React from 'react';
import DropDownPicker, {
  DropDownPickerProps,
} from 'react-native-dropdown-picker';
import {colors} from '../theme/colors';
import {View} from 'react-native';
import {ViewProps} from 'react-native';
import {Text} from 'react-native';

export type IDropDown = DropDownPickerProps<any> & {
  mainContainerStyle?: ViewProps['style'];
  errorMessage?: string;
  hasMore?: boolean;
  loadMore?: () => void;
};

export default function DropDown({
  mainContainerStyle,
  errorMessage = '',
  hasMore,
  loadMore,
  ...props
}: IDropDown) {
  return (
    <View style={[styles.mainViewContainer, mainContainerStyle]}>
      <DropDownPicker
        listMode="SCROLLVIEW"
        placeholderStyle={styles.placeholderStyle}
        style={[
          styles.dropDownContainer,
          errorMessage !== '' && styles.errorContainer,
        ]}
        textStyle={styles.badgeTextStyle}
        badgeDotStyle={styles.badgeDotStyle}
        badgeTextStyle={styles.badgeTextStyle}
        arrowIconContainerStyle={{
          borderColor: colors.palette.grey800,
          borderWidth: 1.2,
          borderRadius: 12,
        }}
        badgeStyle={styles.badgeStyle}
        autoScroll
        searchable
        badgeColors={[colors.palette.white]}
        badgeDotColors={[colors.palette.blue50]}
        showArrowIcon={true}
        searchContainerStyle={styles.searchContainerStyle}
        dropDownContainerStyle={styles.dropDownContainerStyle}
        scrollViewProps={{
          onScroll: ({
            nativeEvent: {layoutMeasurement, contentOffset, contentSize},
          }) => {
            const toEnd =
              layoutMeasurement.height + contentOffset.y >=
              contentSize.height - 50;
            if (toEnd && hasMore && loadMore) {
              loadMore();
            }
          },
          // scrollEventThrottle: 0,
        }}
        showBadgeDot={true}
        translation={{
          SEARCH_PLACEHOLDER: 'Search...',
        }}
        mode="BADGE"
        closeOnBackPressed={true}
        {...props}
      />
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  mainViewContainer: {
    display: 'flex',
    flexDirection: 'column',
    // flex: 1,
    zIndex: 2000,
  },
  dropDownContainer: {
    borderColor: colors.palette.grey100,
    borderRadius: 12,
    elevation: 2,
    // flex: 1,
    borderWidth: 1,
    backgroundColor: colors.palette.white,
  },
  errorContainer: {
    borderColor: 'red',
  },
  placeholderStyle: {
    color: colors.palette.grey600,
    paddingLeft: 4,
    fontFamily: 'Poppins-Regular',
  },
  badgeStyle: {
    backgroundColor: colors.palette.blue700, // Replace with your desired color
  },
  badgeTextStyle: {
    color: colors.palette.grey600,
    paddingLeft: 4,
    fontFamily: 'Poppins-Regular', // Replace with your desired color
  },
  badgeDotStyle: {
    backgroundColor: colors.palette.lightBlue700, // Replace with your desired color
    color: colors.palette.primaryBlue700, // Replace with your desired color
  },
  searchContainerStyle: {
    borderRadius: 12,
    borderColor: colors.palette.grey300,
  },
  dropDownContainerStyle: {
    borderRadius: 4,
    borderColor: colors.palette.grey300,
    elevation: 1,
  },
  errorMessage: {
    color: 'red',
    marginTop: 2,
  },
});
