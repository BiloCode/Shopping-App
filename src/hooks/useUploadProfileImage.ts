import { ChangeEvent, useState } from "react";

import { useAuthContext } from "context/AuthContext/context";
import { useProfileContext } from "context/ProfileContext/context";

import { fetcher } from "core/CustomFetch";
import DeleteImage from "core/backend/DeleteImage";
import UploadProfileImage from "core/backend/UploadProfileImage";

const useUploadProfileImage = (image: string) => {
  const { updateUserImageStore } = useProfileContext();
  const { user, updateProfileImage, token } = useAuthContext();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [profileImageLocal, setProfileImageLocal] = useState<string>(image);

  const onSubmitFile = async (ev: ChangeEvent<HTMLInputElement>) => {
    const files = ev.currentTarget.files;
    if (files.length !== 1) return;

    const image = files[0];
    const imageType = image.type.split("/")[0];

    if (imageType !== "image") return;

    if (!token) return;

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

    const request = await fetcher(token, {
      url: "/user/image",
      method: "PUT",
      params: {
        profileImage,
        userId: user._id,
      },
    });

    if (request.error) {
      console.log(request.error);
      return;
    }

    if (!request.isUpdated) {
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
