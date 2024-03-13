import React, {useState} from 'react';
import {Text, View, StyleSheet, Dimensions, FlatList} from 'react-native';
import ScreenContainer from './ScreenContainer';
import {Divider} from 'native-base';
import {colors} from '../theme/colors';
import GoBackHeader from '../components/GoBackHeader';
import {
  launchImageLibrary,
  ImageLibraryOptions,
  ImagePickerResponse,
  Asset,
} from 'react-native-image-picker';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Video from 'react-native-video';
import CustomButton from '../components/Button';
import {createAssetsAPI} from '../services/Asset';
import axios from 'axios';
import RNFetchBlob, {RNFetchBlobFile} from 'rn-fetch-blob';

interface UploadAssetScreenProps {
  route: {params?: {brief?: any}};
}

const UploadAssetScreen = ({route}: UploadAssetScreenProps) => {
  const [error, setError] = useState(false);
  const [assets, setAssets] = useState<any>([]);
  const brief = route?.params?.brief;

  const handleImagePicker = async () => {
    const options: ImageLibraryOptions = {
      mediaType: 'video',
      maxHeight: 2000,
      maxWidth: 2000,
      selectionLimit: 30,
    };

    await launchImageLibrary(options, (response: ImagePickerResponse) => {
      if (response.didCancel) {
        return;
      } else if (response.errorCode) {
        setError(true);
      } else {
        if (response?.assets) {
          setAssets(response?.assets);
        }
      }
    });
  };

  const api = async (file: any, url: any) => {
    console.log(file?.uri);
    // console.log(base64);

    // await axios({
    //   url: url,
    //   method: 'put',
    //   data: RNFetchBlob.wrap(file?.uri),
    //   headers: {
    //     'Content-Type': file.type,
    //     'Content-Encoding': 'base64',
    //   },
    //   onUploadProgress: function (progressEvent: any) {
    //     console.log(progressEvent);
    //   },
    //   validateStatus: function (status: any) {
    //     return status <= 300; // Resolve only if the status code is less than 500
    //   },
    // });
    await RNFetchBlob.fetch(
      'PUT',
      url,
      {
        'Content-Type': file.type,
        'Content-Encoding': 'base64',
      },
      RNFetchBlob.wrap(file?.uri),
    )
      .uploadProgress((written, total) => {
        console.log('uploaded', written / total);
      })
      .progress((received, total) => {
        console.log('progress', received / total);
      })
      .then(resp => {})
      .catch(err => {});
    return true;
  };

  const submit = async () => {
    let files: any = [];
    for (let i of assets) {
      files.push({name: i.fileName, type: i.type});
    }
    try {
      const res = await createAssetsAPI({
        files,
        briefId: brief?.id,
      });
      if (res?.data?.urls) {
        for (let i in res?.data?.urls) {
          try {
            const fileRes = await api(assets[i], res?.data?.urls[i]);
            console.log(fileRes);
          } catch (error) {
            console.log(error);
          }
        }
      }
    } catch (error) {
      setError(true);
    }
  };

  return (
    <ScreenContainer style={styles.container}>
      <GoBackHeader header="Submit Content" />
      <TouchableOpacity
        style={styles.uploadContainer}
        onPress={() => handleImagePicker()}>
        <Text style={styles.uploadTitle}>+ {'           '}Add Video</Text>
      </TouchableOpacity>
      <FlatList
        data={assets}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        renderItem={({item}) => (
          <View style={styles.video}>
            <Video
              style={{width: '100%', height: '100%', borderRadius: 20}}
              source={{uri: item?.uri}}
              resizeMode={'stretch'}
              seek={10}
              muted={true}
            />
          </View>
        )}
        // ListEmptyComponent={<EmptyCom text="No Briefs available" />}
      />
      <CustomButton placeholder="Submit" onPress={submit} />
    </ScreenContainer>
  );
};

export default UploadAssetScreen;

const styles = StyleSheet.create({
  container: {gap: 10},
  uploadContainer: {
    width: '100%',
    borderWidth: 1,
    marginTop: 10,
    borderStyle: 'dashed',
    borderColor: colors.palette.grey300,
    paddingVertical: 10,
    borderRadius: 10,
  },
  uploadTitle: {
    color: colors.palette.grey600,
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
  },
  video: {
    width: '48%',
    height: 180,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.palette.grey300,
    borderRadius: 20,
    marginBottom: 10,
  },
});
