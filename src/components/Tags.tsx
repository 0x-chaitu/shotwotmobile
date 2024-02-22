import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {colors} from '../theme/colors';

interface TagsProps {
  tags: Array<any>;
}

const Tags = ({tags}: TagsProps) => {
  return (
    <View style={{flexDirection: 'row', gap: 10, flexWrap: 'wrap'}}>
      {tags?.map((tag: any, index: any) => {
        return (
          <View
            key={index.toString()}
            style={{
              borderWidth: 1,
              alignSelf: 'flex-start',
              paddingHorizontal: 7,
              borderRadius: 10,
              borderColor: colors.palette.grey300,
            }}>
            <Text
              style={{
                color: colors.palette.grey600,
                fontFamily: 'Poppins-Medium',
                fontSize: 14,
              }}>
              {tag}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default Tags;

const styles = StyleSheet.create({
  container: {},
});
