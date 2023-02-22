import { useEffect, useState } from 'react';

interface SliderArgs {
  delay?: number;
  startIdx?: number;
  maxLength: number;
}

type PropType = SliderArgs | number;

const isOfTypeSliderArgs = (arg: PropType): arg is SliderArgs => {
  return (arg as SliderArgs).maxLength !== undefined;
};

export default function useSlider(props: PropType): [number, (index: number) => void] {
  const { delay, maxLength, startIdx } = isOfTypeSliderArgs(props)
    ? props
    : { startIdx: undefined, delay: undefined, maxLength: props };
  const [currentActiveIndex, setCurrenActiveIndex] = useState(startIdx || 0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrenActiveIndex(prevIndex => {
        let returnable = prevIndex + 1;
        if (returnable > maxLength) returnable = 0;
        return returnable;
      });
    }, delay || 5000);
    return () => {
      clearTimeout(timeoutId);
    };
  });

  return [currentActiveIndex, setCurrenActiveIndex];
}
