import React from "react";

// components
import { Space, Button, Input, Typography, Form } from "antd";
import Label from "src/components/Label";
import { AuthContainer } from "src/style-components/Container";

// custom hook
import { useForm, SubmitHandler, Controller } from "react-hook-form";

// validates
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// types
import { IAuthenFormData } from "./types";
import { formItemLayout } from "./constants";

const { Title } = Typography;

interface AuthFormProps {
  title: string;
  btnSubmit: string;
  footer?: React.ReactNode;
  onSubmit?: (value: IAuthenFormData) => void;
  onCancel?: () => void;
}

const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});
const AuthForm: React.FC<AuthFormProps> = ({
  title = "Login",
  footer,
  btnSubmit,
  onSubmit,
}) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<IAuthenFormData>({
    resolver: yupResolver(schema),
  });

  const submitForm: SubmitHandler<IAuthenFormData> = (data: any) => {
    onSubmit?.(data);
  };

  return (
    <AuthContainer>
      <Form
        {...formItemLayout}
        onFinish={handleSubmit(submitForm)}
        style={{ maxWidth: 600 }}
      >
        <Space direction="vertical" size="small" style={{ display: "flex" }}>
          <Title className="text-align-center text-white">{title}</Title>
          <Form.Item
            label={<Label className="text-white" text="Username" required />}
            validateStatus={errors.username ? "error" : ""}
            help={errors.username?.message}
          >
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <Input {...field} placeholder="uername..." />
              )}
            />
          </Form.Item>
          <Form.Item
            label={<Label className="text-white" text="Password" required />}
            validateStatus={errors.password ? "error" : ""}
            help={errors.password?.message}
          >
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input.Password {...field} placeholder="password" />
              )}
            />
          </Form.Item>

          <div className="text-align-right">
            <Space>
              <Button type="default" onClick={() => reset()}>
                Cancel
              </Button>
              <Button type="primary" htmlType="submit">
                {btnSubmit}
              </Button>
            </Space>
          </div>
          <div className="text-align-center">{footer}</div>
        </Space>
      </Form>
    </AuthContainer>
  );
};
export default AuthForm;
