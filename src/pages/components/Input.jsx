import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Input.module.css";

const Input = ({
  className = "",
  firstName,
  labelPlaceholder,
  propWidth,
  propMinWidth,
}) => {
  const inputStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const labelStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={[styles.input, className].join(" ")} style={inputStyle}>
      <div className={styles.firstName}>{firstName}</div>
      <div className={styles.field}>
        <input
          className={styles.label}
          placeholder={labelPlaceholder}
          type="text"
          style={labelStyle}
        />
      </div>
    </div>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  firstName: PropTypes.string,
  labelPlaceholder: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default Input;