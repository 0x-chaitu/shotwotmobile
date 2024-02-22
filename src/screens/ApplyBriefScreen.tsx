import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import ScreenContainer from './ScreenContainer';
import GoBackIcon from '../assets/icons/GoBackIcon';
import {colors} from '../theme/colors';
import InputField from '../components/InputField';
import {useFieldArray, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import FormProvider from '../forms/FormProvider';
import RHFInput from '../forms/RHFInput';
import {Divider} from 'native-base';
import CustomButton from '../components/Button';
import RHFTextBox from '../forms/RHFTextBox';
import {applyBriefAPI} from '../services/Brief';
import {customNavigation} from '../../App';

interface ApplyBriefScreenProps {
  route: {params?: {brief?: any}};
}

const briefSchema = Yup.object().shape({
  note: Yup.string().required('Please Enter treatment note!'),
  reel: Yup.array().of(
    Yup.string()
      .url('Must be a valid Url')
      .required('Please Enter a valid url link'),
  ),
  media: Yup.array().of(
    Yup.string()
      .url('Must be a valid Url')
      .required('Please Enter a valid url link'),
  ),
});

const ApplyBriefScreen = ({route}: ApplyBriefScreenProps) => {
  const brief = route?.params?.brief;

  const methods = useForm({
    resolver: yupResolver(briefSchema) as any,
    defaultValues: {},
  });

  const {
    handleSubmit,
    setValue,
    watch,
    control,
    formState: {errors},
  } = methods;

  const {
    fields: reelFields,
    append: reelAppend,
    remove: foodRemove,
  } = useFieldArray({
    control,
    // @ts-ignore
    name: 'reel',
  });

  const {
    fields: mediaFields,
    append: mediaAppend,
    remove: mediaRemove,
  } = useFieldArray({
    control,
    // @ts-ignore
    name: 'media',
  });

  React.useEffect(() => {
    console.log(reelFields);
  }, [reelFields]);

  const onSubmit = async (data: any) => {
    data = {
      briefId: brief?.id,
      media: data?.media,
      reel: data?.reel,
      note: data?.note,
    };
    try {
      const res = await applyBriefAPI(data);
      // @ts-ignore
      if (res?.success) {
        customNavigation('Brief');
      } else {
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormProvider methods={methods} style={styles.container}>
      <ScreenContainer>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            paddingBottom: 10,
          }}>
          <GoBackIcon
            onPress={() => console.log(1)}
            style={{marginBottom: 5}}
          />
          <Text
            style={{
              color: colors.palette.grey800,
              fontFamily: 'Poppins-Medium',
              fontSize: 22,
            }}>
            Apply
          </Text>
        </View>
        <Divider
          color={colors.palette.grey100}
          width={2 * Dimensions.get('screen').width}
          left={-50}
        />
        <Text style={styles.title}>Add your work links</Text>
        <Text
          style={{
            color: colors.palette.caption,
            fontFamily: 'Poppins-Regular',
            fontSize: 14,
          }}>
          Share your professional work with our Designer Curation Team by
          providing up to five links to your social media profiles
        </Text>
        {reelFields.map((item, index) => {
          return (
            <RHFInput
              placeholder="Showreel url"
              key={index.toString()}
              name={`reel.${index}`}
            />
          );
        })}
        <TouchableOpacity onPress={() => reelAppend('')}>
          <Text style={styles.addMore}>+{'  '}Add Link</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Social Media</Text>
        {mediaFields.map((item, index) => {
          return (
            <RHFInput
              placeholder="Showreel url"
              key={index.toString()}
              name={`media.${index}`}
            />
          );
        })}
        <TouchableOpacity onPress={() => mediaAppend('')}>
          <Text style={styles.addMore}>+{'  '}Add Link</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Add your treatment note</Text>
        <RHFTextBox
          name="note"
          placeholder="Write how your gonna shoot the task. Fill in information like "
        />
      </ScreenContainer>
      <CustomButton
        placeholder="Submit"
        style={{
          position: 'absolute',
          width: '90%',
          marginTop: Dimensions.get('screen').height - 137,
          marginHorizontal: 20,
        }}
        onPress={handleSubmit(onSubmit)}
        _pressed={{
          opacity: 80,
        }}
      />
    </FormProvider>
  );
};

export default ApplyBriefScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
  title: {
    color: colors.palette.grey800,
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
  },
  addMore: {
    color: colors.palette.blue600,
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
});
