import { Button } from "@sambad/ui";
import { PropsWithChildren } from "react";

interface FirstFeatureOfFirstDomainBoxProps {
  displayText: string;
  onClick?: () => void;
}

export const FirstFeatureOfFirstDomainBox = ({
  displayText,
  onClick,
  children,
}: PropsWithChildren<FirstFeatureOfFirstDomainBoxProps>) => {
  return (
    <div>
      <Button appName="Container Box Button" onClick={onClick}>
        FirstDomainTestBox
      </Button>
      {displayText}
      {children}
    </div>
  );
};
