import { useUserProfileContext } from "context/UserProfileContext/context";

const productCreateModalController = (Component) => () => {
  const { userCreateModal, toggleUserCreateModal } = useUserProfileContext();

  if (!userCreateModal) return null;

  return <Component onClose={toggleUserCreateModal} />;
};

export default productCreateModalController;
