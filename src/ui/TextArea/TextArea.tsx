import React from "react";

interface TextAreaProps extends React.HTMLProps<HTMLTextAreaElement> {
  label?: string;
}

const TextArea: React.FC<TextAreaProps> = ({ label, id, ...rest }) => {
  return (
    <>
      {" "}
      <div className="flex place-items-center gap-2">
        {label && (
          <label htmlFor={id} className="">
            {label}
          </label>
        )}
        <textarea
          id={id}
          className=" mt-2 py-2 px-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-primary-500 focus:outline-none"
          {...rest}
        />
      </div>
    </>
  );
};
export default TextArea;
