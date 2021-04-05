import { FC } from "react";
import styles from "./index.module.css";

import { GoCloudUpload } from "react-icons/go";

import useUploadProfileImage from "hooks/useUploadProfileImage";

import UploadIcon from "components/atoms/UploadIcon";
import UserAvatar from "components/atoms/UserAvatar";
import Spinner from "components/atoms/Spinner";

import { useAuthContext } from "context/AuthContext/context";
import { useUserProfileContext } from "context/UserProfileContext/context";

type ImageProfileAreaProps = {
  image: string;
};

const ImageProfileArea: FC<ImageProfileAreaProps> = ({ image }) => {
  const { user } = useAuthContext();
  const { userPageId } = useUserProfileContext();
  const { profileImageLocal, isLoading, onSubmitFile } = useUploadProfileImage(
    image
  );

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
