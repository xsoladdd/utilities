import React from "react";
import Button from "../../ui/Buttons/NormalButton/Button";
import { useRouter } from "next/router";

interface BreadcrumbsProps {
  title?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ title = "" }) => {
  const { back } = useRouter();
  return (
    <>
      <div className="py-3 flex justify-between place-items-center">
        <Button onClick={() => back()} variant="info">
          Back
        </Button>
        <h2 className="font-semibold text-2xl">{title}</h2>
        <div className="">...</div>
      </div>
    </>
  );
};
export default Breadcrumbs;
