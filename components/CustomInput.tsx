import React, { ChangeEvent } from "react";
import styles from "../styles/Buttons.module.css";
import { HiChevronDown } from "react-icons/hi";

interface CustomInputProps {
  type?: string;
  placeholder?: string;
  name?: string;
  value?: string;
  onChange?: (e: ChangeEvent<any>) => void;
}
export const CustomInput: React.FC<CustomInputProps> = ({
  type,
  placeholder,
  name,
  value,
  onChange,
}: CustomInputProps) => {
  return (
    <div className={styles.input_group}>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className={styles.input_text}
      />
    </div>
  );
};

interface OptionProps {
  label: string;
  value: string;
}

interface CustomSelectProps {
  options: OptionProps[];
  name?: string;
  value?: string;
  onChange?: (e: ChangeEvent<any>) => void;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  name,
  value,
  onChange,
}: CustomSelectProps) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className={styles.input_group}>
      <select
        className={` ${styles.input_text} appearance-none `}
        name={name}
        value={value}
        onChange={handleChange}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="text-grey-800 bg-white hover:bg-gray-100 "
          >
            {option.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <HiChevronDown />
      </div>
    </div>
  );
};
