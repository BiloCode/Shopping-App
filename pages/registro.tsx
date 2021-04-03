import NavigationBar from "components/organism/NavigationBar";
import PageConfiguration from "components/templates/PageConfiguration";

import userLoggedChecking from "hocs/userLoggedChecking";

const Register = () => (
  <PageConfiguration title="Registro">
    <NavigationBar />
  </PageConfiguration>
);

export default userLoggedChecking(Register);
