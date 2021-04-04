import Title from "components/atoms/Title";
import ProfileTabMenu from "components/molecules/ProfileTabMenu";

const tabs = ["Todos", "Sin Confirmacion", "Confirmados"];

const UserProfileRightContent = () => (
  <div>
    <Title type="big">Mis Productos</Title>
    <ProfileTabMenu
      tabsMenu={tabs}
      renderTab={(tabActive) => {
        switch (tabActive) {
          case 0:
            return <p>Todos</p>;
          case 1:
            return <p>Sin confirmar</p>;
          case 2:
            return <p>Publicados</p>;
        }
      }}
    />
  </div>
);

export default UserProfileRightContent;
