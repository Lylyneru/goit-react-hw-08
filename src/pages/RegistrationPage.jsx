import { Helmet } from "react-helmet";
import { RegistrationForm } from "../components/RegistrationForm/RegistrationForm";

export const RegistrationPage = () => {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegistrationForm />
    </div>
  );
};
