import firebase from "firebase";

import { FirebaseImage } from "types/FirebaseImage";
import { UserImageStore } from "config/UserImageStore";

type UploadTask = firebase.storage.UploadTask;

class UploadProfileImage {
  private UploadState(reference: UploadTask) {
    return new Promise<void>((resolve, reject) => {
      reference.on(
        "state_changed",
        () => {},
        (error) => reject(error),
        () => resolve()
      );
    });
  }

  public async __invoke(image: File): Promise<FirebaseImage> {
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
