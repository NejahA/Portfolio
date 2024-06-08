import Footer from "./components/Footer";
// import styles from "./ContactUs.module.css";
// import Content from "./ContactUs";
import Navigation from "./components/Navigation";
import About from "./About";
import Projects from "./Projects";
// import Navigation4 from "./components 4/Navigation4";

const ContactUs = () => {
  return (
    // <div className={styles.contactUs}>
      // <div className={styles.navigation}>
      //   <div className={styles.an}>an.</div>
      //   <div className={styles.projectContactWrapper}>
      //     <nav className={styles.projectContact}>
      //       <div className={styles.about}>About</div>
      //       <div className={styles.projects}>Projects</div>
      //       <div className={styles.contact}>Contact</div>
      //     </nav>
      //   </div>
      // </div>
      <div 
      className={styles.contactUs}
      >
          <Navigation4/>
        {/* <Content/> */}
        {/* <About/> */}
        <Projects/>
      <Footer />
        </div>
  );
};

export default ContactUs;