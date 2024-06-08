import PropTypes from "prop-types";
import styles from "./Footer.module.css";
import { useNavigate } from "react-router-dom";

const Footer = ({ className = "" }) => {
  const nav = useNavigate()
  return (
    <section className={[styles.footer, className].join(" ")}>
      <footer className={styles.footerContent}>
        <div className={styles.divider} />
        <div className={styles.creatorInfoWrapper}>
          <div className={styles.creatorInfo}>
            <h3 className={styles.achrefNejah}>Achref Nejah</h3>
            <div className={styles.social}>
              <div className={styles.icons}>
                <a href="https://github.com/NejahA" target="_blank">
                <img
                  className={styles.githubIcon}
                  loading="lazy"
                  alt=""
                  src="/Github.svg"
                  />
                  </a> 
                <a href="https://www.linkedin.com/in/achref-nejah-254b12210/" target="_blank">
                <img
                  className={styles.linkedinWhiteIcon}
                  loading="lazy"
                  alt=""
                  src="/LinkedIn.svg"
                  />
                  </a>
                <a href="mailto:achref.nejah@gmail.com" target="_blank">
                <img
                  className={styles.mailIcon}
                  loading="lazy"
                  alt=""
                  src="/Mail.svg"
                />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;