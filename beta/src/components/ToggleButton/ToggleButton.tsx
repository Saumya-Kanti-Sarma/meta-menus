import React from 'react';
import styles from './ToggleButton.module.css';


interface ToggleProps {
  isOn: boolean;
  handleToggle: () => void;
  label?: string;
}

const ToggleBtn: React.FC<ToggleProps> = ({ isOn, handleToggle, label }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      {label && <span>{label}</span>}
      <label className={styles.switch}>
        <input
          type="checkbox"
          checked={isOn}
          onChange={handleToggle}
          aria-label={label || "Toggle switch"}
        />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
};

export default ToggleBtn;