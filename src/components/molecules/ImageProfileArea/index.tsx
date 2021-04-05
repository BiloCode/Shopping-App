import { ChangeEvent, FC, useState } from "react";
import styles from "./index.module.css";

import { GoCloudUpload } from "react-icons/go";

import UploadIcon from "components/atoms/UploadIcon";
import UserAvatar from "components/atoms/UserAvatar";
import Spinner from "components/atoms/Spinner";
import UploadProfileImage from "core/UploadProfileImage";
import UpdateUserProfileImage from "core/UpdateUserProfileImage";

import { useAuthContext } from "context/AuthContext/context";
import { useUserProfileContext } from "context/UserProfileContext/context";

type ImageProfileAreaProps = {
  image: string;
};

const ImageProfileArea: FC<ImageProfileAreaProps> = ({ image }) => {
  const { userPageId } = useUserProfileContext();
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

  const isMyProfile = user?._id === userPageId;

  return (
    <div className={styles.image_profile}>
      <div className={styles.image_profile__image}>
        <UserAvatar image={profileImageLocal} type="extra-big" />
        {isLoading && (
          <div className={styles.image_profile__spinner}>
            <Spinner white />
          </div>
        )}
      </div>
      <div className={styles.image_profile__upload_icon}>
        {!isLoading && isMyProfile && (
          <UploadIcon Icon={GoCloudUpload} onChange={onSubmitFile} />
        )}
      </div>
    </div>
  );
};

export default ImageProfileArea;
