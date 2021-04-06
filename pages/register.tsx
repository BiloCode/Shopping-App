import Button from "components/atoms/Button";
import AuthControl from "components/molecules/AuthControl";
import NavigationBar from "components/organism/NavigationBar";
import PageConfiguration from "components/templates/PageConfiguration";

import userLoggedChecking from "hocs/userLoggedChecking";

const Register = () => (
  <PageConfiguration title="Registro">
    <NavigationBar />
    <div>
      <AuthControl type="email" labelText="Correo electronico" />
      <AuthControl type="password" labelText="Contraseña" />
      <AuthControl type="text" labelText="Nombre Completo" />
      <Button>Registrarse</Button>
    </div>
  </PageConfiguration>
);

export default userLoggedChecking(Register);
