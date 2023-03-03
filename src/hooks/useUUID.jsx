import { useMemo } from "react";

import { v4 as uuidv4 } from "uuid";

export const useUUID = (arrSize = 1) => {
  const ids = [];

  for (let i = 0; i < arrSize; i++) {
    ids.push(uuidv4());
  }

  return useMemo(() => ids, []);
};
