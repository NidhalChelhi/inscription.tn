import React from "react";
import styles from "../styles/Buttons.module.css";

interface CustomInputProps {
  type?: string;
  placeholder?: string;
}
export const CustomInput = ({ type, placeholder }: CustomInputProps) => {
  return (
    <div className={styles.input_group}>
      <input
        type={type}
        placeholder={placeholder}
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
}

export const CustomSelect = ({ options }: CustomSelectProps) => {
  return (
    <div className={styles.input_group}>
      <select className={styles.input_text}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};
