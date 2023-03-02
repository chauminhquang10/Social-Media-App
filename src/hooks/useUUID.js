import { v4 as uuidv4 } from "uuid";

export const useUUID = (arr) => {
  if (!arr || !Array.isArray(arr)) return arr;

  const arrWithKeys = arr.map((item) => {
    return {
      uid: uuidv4(),
      ...item,
    };
  });
  return arrWithKeys;
};
