import React from "react";
interface DotBackgroundDemoProps {
  children: React.ReactNode;
}

export const DotBackgroundDemo: React.FC<DotBackgroundDemoProps> = ({
  children,
}) => {
  return (
    <div className="h-[50rem] -z-10 w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none z-10 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {children}
    </div>
  );
};
