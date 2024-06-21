import { Button } from "@sambad/ui";
import { HTMLAttributes, ReactNode } from "react";
import { useFirstFeatureOfFirstDomainTestButton } from "../hooks/useFirstFeatureOfFirstDomainTestButton";

interface FirstFeaturedOfSecondDomainTestButtonProps
  extends HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

export const FirstFeatureOfSecondDomainTestButton = ({
  children,
  ...rest
}: FirstFeaturedOfSecondDomainTestButtonProps) => {
  const { testText, handleChangeTestText } =
    useFirstFeatureOfFirstDomainTestButton();

  return (
    <Button appName="sambad" onClick={handleChangeTestText} {...rest}>
      {children}
      {testText}
    </Button>
  );
};
