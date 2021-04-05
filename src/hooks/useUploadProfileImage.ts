import { ChangeEvent, useState } from "react";

import { useAuthContext } from "context/AuthContext/context";

import UploadProfileImage from "core/UploadProfileImage";
import UpdateUserProfileImage from "core/UpdateUserProfileImage";

const useUploadProfileImage = (image: string) => {
  const { user, updateProfileImage } = useAuthContext();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [profileImageLocal, setProfileImageLocal] = useState<string>(image);

  const onSubmitFile = async (ev: ChangeEvent<HTMLInputElement>) => {
    const files = ev.currentTarget.files;
    if (files.length !== 1) return;

    const image = files[0];
    const imageType = image.type.split("/");

    if (imageType[0] !== "image") return;

    setIsLoading(() => true);

    const uploadProfileImage = new UploadProfileImage();
    const imageURL = await uploadProfileImage.__invoke(image);

    if (!imageURL) {
      setIsLoading(() => false);
      return;
    }

    const updateUserImageProfile = new UpdateUserProfileImage();
    const isUpdated = await updateUserImageProfile.__invoke(user._id, imageURL);

    if (!isUpdated) {
      setIsLoading(() => false);
      return;
    }

    updateProfileImage(imageURL);
    setProfileImageLocal(() => imageURL);
    setIsLoading(() => false);
  };

  return {
    isLoading,
    profileImageLocal,
    onSubmitFile,
  };
};

export default useUploadProfileImage;
