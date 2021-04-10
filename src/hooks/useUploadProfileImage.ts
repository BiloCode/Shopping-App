import { ChangeEvent, useState } from "react";

import { useAuthContext } from "context/AuthContext/context";
import { useProfileContext } from "context/ProfileContext/context";

import UploadProfileImage from "core/backend/UploadProfileImage";
import UpdateUserProfileImage from "core/backend/UpdateUserProfileImage";
import DeleteImage from "core/backend/DeleteImage";

const useUploadProfileImage = (image: string) => {
  const { updateUserImageStore } = useProfileContext();
  const { user, updateProfileImage } = useAuthContext();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [profileImageLocal, setProfileImageLocal] = useState<string>(image);

  const onSubmitFile = async (ev: ChangeEvent<HTMLInputElement>) => {
    const files = ev.currentTarget.files;
    if (files.length !== 1) return;

    const image = files[0];
    const imageType = image.type.split("/")[0];

    if (imageType !== "image") return;

    setIsLoading(() => true);

    const uploadProfileImage = new UploadProfileImage();
    const profileImage = await uploadProfileImage.__invoke(image);

    if (!profileImage) {
      setIsLoading(() => false);
      return;
    }

    if (user.profileImage.name) {
      const removeOldImage = new DeleteImage();
      await removeOldImage.__invoke(user.profileImage.name);
    }

    const updateUserImageProfile = new UpdateUserProfileImage();
    const isUpdated = await updateUserImageProfile.__invoke(
      user._id,
      profileImage
    );

    if (!isUpdated) {
      setIsLoading(() => false);
      return;
    }

    updateProfileImage(profileImage);
    setProfileImageLocal(() => profileImage.url);
    updateUserImageStore(user._id, profileImage);
    setIsLoading(() => false);
  };

  return {
    isLoading,
    profileImageLocal,
    onSubmitFile,
  };
};

export default useUploadProfileImage;
