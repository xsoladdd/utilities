const tailwindColorNumberArray = [
  50, 100, 200, 300, 400, 500, 600, 700, 800, 900,
];

export const convertColorArrayToTailwindObject = (
  colorArray: string[]
): string => {
  let jsonString = ``;
  for (let i = 1; colorArray.length >= i; i++) {
    // console.log(`${array[i - 1]} | ${tailwindColorNumberArray[i - 1]}`);
    // Remove that blank at the end
    // if(array[i - 1]){}
    jsonString += `"${tailwindColorNumberArray[i - 1]}":"#${
      colorArray[i - 1]
    }",`;
  }
  // console.log(`{${jsonString.slice(0, -1)}}`);
  return `{${jsonString.slice(0, -1)}}`;
};
