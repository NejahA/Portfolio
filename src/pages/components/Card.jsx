import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Card.module.css";

const Card = ({
  className = "",
  tunisitLogo1,
  tunist,
  aWebApplicationThatAimsTo,
  propPadding,
  propPadding1,
}) => {
  const cardStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const copyStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div className={[styles.card, className].join(" ")} style={cardStyle}>
      <img
        className={styles.tunisitLogo1Icon}
        loading="lazy"
        alt=""
        src={tunisitLogo1}
      />
      <div className={styles.copy} style={copyStyle}>
        <div className={styles.tunist}>{tunist}</div>
        <div className={styles.aWebApplication}>
          {aWebApplicationThatAimsTo}
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  tunisitLogo1: PropTypes.string,
  tunist: PropTypes.string,
  aWebApplicationThatAimsTo: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propPadding1: PropTypes.any,
};

export default Card;
