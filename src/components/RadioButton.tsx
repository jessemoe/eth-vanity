import { useState } from "react";

type RadioProps = {
  options: { label: string; value: any }[];
  selectedValue?: any;
  onChange: (value: any) => void;
};

const RadioButton = ({ options, selectedValue, onChange }: RadioProps) => {
  const [value, setValue] = useState(selectedValue);

  const handleOptionChange = (optionValue: any) => {
    setValue(optionValue);
    onChange(optionValue);
  };

  return (
    <div className="flex flex-row">
      {options.map((option) => (
        <label key={option.value} className="flex items-center p-5">
          <input
            type="radio"
            value={option.value}
            checked={value === option.value}
            onChange={() => handleOptionChange(option.value)}
            className="h-4 w-4 text-blue-600"
          />
          <span className="ml-2 text-gray-700">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioButton;