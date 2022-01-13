import { memo } from "react";

type DefaultLayoutProps = { children: React.ReactNode };

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="m-auto flex flex-col h-full">
      {/* <div className="relative flex flex-wrap lg:flex-nowrap  p-3 bg-foundation-primary-1 text-white justify-center"> */}
      <div className="relative flex flex-wrap lg:flex-nowrap border-b p-3 justify-center">

        555
      </div>
      <div className="flex-grow overflow-hidden">{children}</div>
    </div>
  );
};

export default memo(DefaultLayout);
