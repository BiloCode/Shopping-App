import Title from "components/atoms/Title";
import UserAvatar from "components/atoms/UserAvatar";
import { FC } from "react";

type UserProfileLeftContentProps = {
  fullName: string;
  profileImage: string;
};

const UserProfileLeftContent: FC<UserProfileLeftContentProps> = ({
  fullName,
  profileImage,
}) => (
  <div>
    <div>
      <UserAvatar image={profileImage} type="extra-big" />
    </div>
    <Title>{fullName}</Title>
  </div>
);

export default UserProfileLeftContent;
