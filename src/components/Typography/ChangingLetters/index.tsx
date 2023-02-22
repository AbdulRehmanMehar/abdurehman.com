import { useSlider } from "@/helpers/hooks";
import React, {
  cloneElement,
  JSXElementConstructor,
  ReactElement,
  ReactNode,
} from "react";

interface ChaningLettersProps {
  children: ReactElement<any, string | JSXElementConstructor<any>>[];
  delay?: number;
  className?: string;
}

export default function ChaningLetters(props: ChaningLettersProps) {
  const { children, delay, className } = props;
  const maxLength = children.length - 1;
  const [activeIndex] = useSlider({ maxLength, delay });
  return (
    <>
      {React.Children.map(children, (child, index) =>
        index === activeIndex
          ? cloneElement(child, {
              ...child.props,
              className: (child.props.className || "") + ` ${className}`,
            })
          : null
      )}
    </>
  );
}
