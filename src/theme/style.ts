import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const customStyles = StyleSheet.create({
  heading1: {
    fontSize: 56,
    fontFamily: 'Lato-Bold',
    color: colors.palette.heading,
  },
  heading2: {
    fontFamily: 'Lato-Bold',
    color: colors.palette.heading,
    fontSize: 48
  },heading3: {
    fontFamily: 'Lato-Bold',
    color: colors.palette.heading,
    fontSize: 32
  },heading4: {
    fontFamily: 'Lato-Bold',
    color: colors.palette.heading,
    fontSize: 28
  },heading5: {
    fontFamily: 'Lato-Bold',
    color: colors.palette.heading,
    fontSize: 24
  },heading6: {
    fontFamily: 'Lato-Bold',
    color: colors.palette.heading,
    fontSize: 18
  },heading7: {
    color: colors.palette.heading,
    fontSize: 16
  },
  heading8: {
    fontFamily: 'Lato-Bold',
    color: colors.palette.heading,
    fontSize: 14
  },

  bodyRegular:{
    color: colors.palette.body,
    fontSize: 16,
    fontFamily: 'Lato-Regular',
  },
  bodyMid:{
    color: colors.palette.body,
    fontFamily: 'Lato-Regular',
    fontSize: 14,
  },
  bodySmall:{
    color: colors.palette.body,
    fontFamily: 'Lato-Regular',
    fontSize: 12,
  },
  bodyLarge:{
    color: colors.palette.body,
    fontFamily: 'Lato-Regular',
    fontSize: 18,
  },
  bodyExtraLarge:{
    color: colors.palette.body,
    fontFamily: 'Lato-Regular',
    fontSize: 22,
  },
  bodyHelper:{
    color: colors.palette.helper,
    fontFamily: 'Lato-Regular',
    fontSize: 13,
  },
  bodyLabel:{
    color: colors.palette.body,
    fontFamily: 'Lato-Regular',
    fontSize: 13,
  },

  ctaSmall: {
    fontFamily: 'Lato-Regular',
    fontSize: 12
  },  
  ctaRegular: {
    fontFamily: 'Lato-Regular',
    fontSize: 14
  },
  ctaLarge: {
    fontFamily: 'Lato-Regular',
    fontSize: 16
  },

  
    semiBoldtitle: {
        color: colors.palette.grey800,
        fontFamily: 'Poppins-SemiBold',
        fontSize: 14,
      },
      mediumTitle: {
        fontFamily: 'Poppins-Medium',
        fontSize: 12,
        color: colors.palette.gray500,
      }
})