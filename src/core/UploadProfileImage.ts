import firebase from "firebase";

import { UserImageStore } from "config/UserImageStore";
import { UserImageProfileData } from "types/UserDataType";

type UploadTask = firebase.storage.UploadTask;

class UploadProfileImage {
  private UploadState(reference: UploadTask) {
    return new Promise((resolve, reject) => {
      reference.on(
        "state_changed",
        () => {},
        (error) => reject(error),
        () => resolve(null)
      );
    });
  }

  public async __invoke(image: File): Promise<UserImageProfileData> {
    const storage = firebase.storage();
    const storeRef = storage.ref(UserImageStore + image.name);
    const upload = storeRef.put(image);

    try {
      await this.UploadState(upload);

      const imageURL = await upload.snapshot.ref.getDownloadURL();
      const reference = upload.snapshot.ref.storage.refFromURL(imageURL);

      return {
        url: imageURL,
        name: reference.name,
      };
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

export default UploadProfileImage;
