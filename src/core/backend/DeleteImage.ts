import firebase from "firebase";

import { UserImageStore } from "config/UserImageStore";

class DeleteImage {
  public async __invoke(imageName: string) {
    const storage = firebase.storage();
    const storeRef = storage.ref(UserImageStore + imageName);

    await storeRef.delete().catch(console.log);
  }
}

export default DeleteImage;
