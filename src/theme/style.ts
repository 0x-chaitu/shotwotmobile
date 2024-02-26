import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const customStyles = StyleSheet.create({
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