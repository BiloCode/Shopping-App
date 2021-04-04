import { useState } from "react";

const useNumberSelect = () => {
  const [numberSelect, setNumberSelect] = useState<number>(0);

  const changeNumberSelect = (id: number) => () => setNumberSelect(() => id);

  return {
    numberSelect,
    changeNumberSelect,
  };
};

export default useNumberSelect;
