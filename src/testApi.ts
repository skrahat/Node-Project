//import fetch from "node-fetch";

export const handler = (firstDigit: number, secondDigit: number) => {
  return (firstDigit + secondDigit) as number;
};
export const apiTest = async (name: string) => {
  const response = await fetch(`https://api.agify.io/?name=${name}`, {
    method: "GET",
    body: "",
  });
  const data = await response.json();
  return data;
};
