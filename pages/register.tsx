import PageConfiguration from "components/templates/PageConfiguration";
import userLoggedChecking from "hocs/userLoggedChecking";

const Register = () => (
  <PageConfiguration title="Register">
    <span>Register</span>
  </PageConfiguration>
);

export default userLoggedChecking(Register);
