import { GoogleSignin } from "@react-native-google-signin/google-signin";

export const GoogleSignOut = async () => {
    GoogleSignin.signOut().then(_ =>
        {GoogleSignin.revokeAccess().then(_ => {}).catch(err => console.log(err))}
      ).catch(err => console.log(err)
      );
    

    return null
}