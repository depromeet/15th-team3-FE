import { Button } from "@sambad/ui";
import { HTMLAttributes, ReactNode } from "react";
import { useFirstFeatureOfFirstDomainTestButton } from "../hooks/useFirstFeatureOfFirstDomainTestButton";

interface FirstFeaturedOfFirstDomainTestButtonProps
  extends HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

export const FirstFeatureOfFirstDomainTestButton = ({
  children,
  ...rest
}: FirstFeaturedOfFirstDomainTestButtonProps) => {
  const { testText, handleChangeTestText } =
    useFirstFeatureOfFirstDomainTestButton();

  return (
    <Button appName="sambad" onClick={handleChangeTestText} {...rest}>
      {children}
      {testText}
    </Button>
  );
};
