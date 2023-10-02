import React from "react";

import { Typography } from "antd";
const { Text } = Typography;

interface LabelProps {
  text: string;
  required?: boolean;
  className?: string;
}

const Label: React.FC<LabelProps> = ({ text, required, className }) => {
  return (
    <Text className={className} strong>
      {text} {required && <Text type="danger">*</Text>}
    </Text>
  );
};
export default Label;
