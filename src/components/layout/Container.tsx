import { ReactNode } from "react";
import cn from "classnames";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1600px] px-5 md:px-[clamp(24px,4vw,64px)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
