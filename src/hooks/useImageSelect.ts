import { useState } from "react";

const useImageSelect = () => {
  const [imageSelect, setImageSelect] = useState<number>(0);

  const changeImageSelect = (id: number) => () => setImageSelect(() => id);

  return {
    imageSelect,
    changeImageSelect,
  };
};

export default useImageSelect;
