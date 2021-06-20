import { ChangeEvent, FormEvent, useState } from "react";
import * as S from "./styles";

import Button from "components/atoms/Button";
import FormControl from "components/molecules/FormControl";

const LoginForm = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const changeToUsername = (ev: ChangeEvent<HTMLInputElement>) => {
    setUsername(() => ev.currentTarget.value);
  };

  const changeToPassword = (ev: ChangeEvent<HTMLInputElement>) => {
    setPassword(() => ev.currentTarget.value);
  };

  const onLogin = (ev: FormEvent) => {
    ev.preventDefault();

    console.log(username, password);
    setLoading(() => true);
  };

  return (
    <S.LoginContainer onSubmit={onLogin}>
      <S.FormControlsContainer>
        <FormControl
          id="email"
          type="email"
          labelText="Email"
          onChange={changeToUsername}
        />
        <FormControl
          id="password"
          type="password"
          labelText="Password"
          onChange={changeToPassword}
        />
      </S.FormControlsContainer>
      <Button buttonSubmit type="normal">
        Ingresar
      </Button>
      {loading && <span>Loading...</span>}
    </S.LoginContainer>
  );
};

export default LoginForm;
