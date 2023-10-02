import React, { useCallback } from "react";

// components
import { Typography } from "antd";
import { Container } from "src/style-components/Container";
import AuthForm from "src/features/Auth/components/AuthForm";
import { Link } from "react-router-dom";

// types
import { IAuthenFormData } from "src/features/Auth/components/AuthForm/types";

// firebase
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "src/configs/firebase";

interface SignUpProps {}

const SignUp: React.FC<SignUpProps> = () => {
  const handleSubmit = useCallback((data: IAuthenFormData) => {
    const SignUpEmailPassword = async () => {
      try {
        await createUserWithEmailAndPassword(
          auth,
          data.username,
          data.password
        );
      } catch (error) {
        console.log(`There was an error: ${error}`);
      }
    };

    SignUpEmailPassword();
  }, []);

  return (
    <Container>
      <AuthForm
        title="Sign Up"
        btnSubmit="Submit"
        onSubmit={handleSubmit}
        footer={
          <Typography.Text type="warning">
            You already have an account <Link to="/login">Login</Link>
          </Typography.Text>
        }
      />
    </Container>
  );
};
export default SignUp;
