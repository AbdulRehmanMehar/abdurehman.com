import { useSlider } from '@/helpers/hooks';
import React, { ReactNode } from 'react';

interface ChaningLettersProps {
  children: ReactNode[];
  delay?: number;
}

export default function ChaningLetters(props: ChaningLettersProps) {
  const { children, delay } = props;
  const maxLength = children.length - 1;
  const [activeIndex] = useSlider({ maxLength, delay });
  return <>{React.Children.map(children, (child, index) => (index === activeIndex ? child : null))}</>;
}
