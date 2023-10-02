import React, { useCallback } from "react";

// components
import { Space, Typography } from "antd";
import { Link } from "react-router-dom";
import { Container } from "src/style-components/Container";
import LoginWithSocial from "src/features/Auth/components/LoginWithSocial";
import AuthForm from "src/features/Auth/components/AuthForm";

// types
import { IAuthenFormData } from "src/features/Auth/components/AuthForm/types";

// firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "src/configs/firebase";

// constants
import { SocialType } from "src/features/Auth/components/LoginWithSocial/constants";

interface SignInProps {}

const SignIn: React.FC<SignInProps> = () => {
  const handleSubmit = useCallback((data: IAuthenFormData) => {
    const signInEmailPassword = async () => {
      try {
        await signInWithEmailAndPassword(auth, data.username, data.password);
      } catch (error) {
        console.log(`There was an error: ${error}`);
      }
    };

    signInEmailPassword();
  }, []);

  return (
    <Container>
      <AuthForm
        title="Sign In"
        btnSubmit="Submit"
        onSubmit={handleSubmit}
        footer={
          <Space direction="vertical">
            <Space direction="vertical">
              <Space wrap>
                <LoginWithSocial />
                <LoginWithSocial type={SocialType.Github} />
              </Space>
            </Space>

            <Typography.Text type="warning">
              You Don't have account <Link to="/sign-up">Sign up</Link>
            </Typography.Text>
          </Space>
        }
      />
    </Container>
  );
};
export default SignIn;
