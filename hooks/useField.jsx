import { useState } from "react";

const useField = (type, initial = "", limit = 100) => {
  const [value, setValue] = useState(initial);
  const onChange = (e) => {
    setValue(e.target.value.slice(0, limit));
  };
  return {
    type,
    value,
    onChange,
    setValue,
  };
};

export default useField;
