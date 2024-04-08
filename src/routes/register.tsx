import React from "react";
import { AuthPage } from "@refinedev/antd";
import { Title } from "@/components";

export const RegisterPage: React.FC = () => {
  return (
    <AuthPage
      type="register"
      title={<Title collapsed={false} />}
      providers={[
      ]}
    />
  );
};
