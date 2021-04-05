import firebase from "firebase";

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

  public async __invoke(image: File): Promise<string> {
    const storage = firebase.storage();
    const storeRef = storage.ref("images/user/" + image.name);
    const upload = storeRef.put(image);

    try {
      await this.UploadState(upload);

      const imageURL = await upload.snapshot.ref.getDownloadURL();
      return imageURL;
    } catch (error) {
      console.log(error);
      return "";
    }
  }
}

export default UploadProfileImage;
