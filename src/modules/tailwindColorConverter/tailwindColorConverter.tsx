import React, { useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Layout from "../../components/layout/Layout";
import Button from "../../ui/Buttons/NormalButton/Button";
import TextArea from "../../ui/TextArea/TextArea";
import { convertColorArrayToTailwindObject } from "./convertColorArrayToTailwindObject";
interface tailwindColorConverterProps {}

const tailwindColorConverter: React.FC<tailwindColorConverterProps> = ({}) => {
  const [arrayString, setArrayString] = useState(``);
  const [output, setOutput] = useState(``);

  const arrayError =
    "Conversion failed, Only converts array of string to colors";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    /*
    Converts String to JSON Object
    Checkes if Object is Array or not
    Error if input in String is not even Object.
    */
    try {
      const array = JSON.parse(arrayString);
      const isArray = Array.isArray(array);
      console.log(isArray);
      setOutput(
        isArray ? convertColorArrayToTailwindObject(array) : arrayError
      );
    } catch (error) {
      setOutput(arrayError);
    }
  };
  return (
    <Layout>
      <Breadcrumbs title="Tailwind Color Converter" />
      <div className="flex place-items-center place-content-center">
        <form onSubmit={handleSubmit}>
          <TextArea
            label={`Enter Array Object`}
            value={arrayString}
            onChange={(e) => setArrayString(e.currentTarget.value)}
            required
          />
          <Button type="submit">Convert</Button>

          <TextArea defaultValue={output} label="Output" />
        </form>
      </div>
      <div className="">
        <h3>Documentation</h3>
        <p>Converts Array of colors into object Example:</p>
        <p>Convert: </p>
        <p>{`["f1f9f4","e2f3e9","c5e7d3","8ecda6","70c28f","62bc84"....`}</p>
        <p>to:</p>
        <p>{`{"50":"#f1f9f4","100":"#e2f3e9","200":"#c5e7d3","300":"#8ecda6"....`}</p>
      </div>
    </Layout>
  );
};
export default tailwindColorConverter;
