import { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const classes = cva(
  "h-12 rounded-full px-6 font-medium transition-all duration-300 border",
  {
    variants: {
      variant: {
        primary:
          "bg-pink-accent text-white border-pink-accent",
        secondary:
          "bg-transparent text-white border-white",
      },
      size: {
        sm: "h-10 px-4 text-sm",
      },
    },
  }
);

export default function Button(
  props: {
    variant: "primary" | "secondary";
    size?: "sm";
  } & ButtonHTMLAttributes<HTMLButtonElement>
) {
  const { variant, className, size, ...otherProps } = props;
  return (
    <button
      className={classes({
        variant,
        size,
        className,
      })}
      {...otherProps}
    />
  );
}