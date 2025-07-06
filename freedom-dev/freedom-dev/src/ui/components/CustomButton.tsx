import React, { Children, ReactNode } from "react";
import { Button } from "@rneui/themed";

interface CustomButtonProps {
  title: string;
  onPress?: () => void;
  color: string;
  fontColor: string;
  children?: ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  color,
  fontColor,
  children,
}) => {
  return (
    <Button
      title={title}
      buttonStyle={{
        backgroundColor: color,
        borderRadius: 5,
        height: 50,
      }}
      titleStyle={{ color: fontColor, fontWeight: 400, fontSize: 18 }}
      containerStyle={{
        marginHorizontal: 10,
        height: 55,
        width: "auto",
        borderRadius: 5,
        marginVertical: 10,
      }}
      onPress={onPress}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
