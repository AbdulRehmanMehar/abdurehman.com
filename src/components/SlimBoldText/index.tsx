import { NextFont } from '@next/font';

export interface SlimBoldTextProps {
  children: string;
  fontFamily?: NextFont;
  slimClassName?: string;
  boldClassName?: string;
}

export default function SlimBoldText(props: SlimBoldTextProps) {
  const { children, fontFamily, slimClassName, boldClassName } = props;
  const textArray = children.split(' ');
  const slimWord = textArray[0];
  const boldWords = textArray.slice(1).join(' ');
  return (
    <>
      <span className={`font-light opacity-80 ${slimClassName} ${fontFamily?.className}`}>{slimWord}</span>
      <>&nbsp;</>
      <b className={`!font-semibold ${boldClassName} ${fontFamily?.className}`}>{boldWords}</b>
    </>
  );
}
