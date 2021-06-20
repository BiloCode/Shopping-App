import Button from "components/atoms/Button";
import FormControl from "components/molecules/FormControl";
import NavigationBar from "components/organism/NavigationBar";
import PageConfiguration from "components/templates/PageConfiguration";

import userLoggedChecking from "hocs/userLoggedChecking";

const Register = () => (
  <PageConfiguration title="Registro">
    <NavigationBar />
    <div>
      <FormControl type="email" labelText="Correo electronico" />
      <FormControl type="password" labelText="Contraseña" />
      <FormControl type="text" labelText="Nombre Completo" />
      <Button>Registrarse</Button>
    </div>
  </PageConfiguration>
);

export default userLoggedChecking(Register);
