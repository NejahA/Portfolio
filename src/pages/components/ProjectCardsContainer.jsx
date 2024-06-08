import Card from "./Card";
import PropTypes from "prop-types";
import styles from "./ProjectCardsContainer.module.css";

const ProjectCardsContainer = ({ className = "" }) => {
  return (
    <section className={[styles.projectCardsContainer, className].join(" ")}>
      <div className={styles.projects}>
        {/* <Card
          tunisitLogo1="/tunisitlogo-1@2x.png"
          tunist="Tunist"
          aWebApplicationThatAimsTo="A web application that aims to link upcoming tourists in Tunisia with local guides, offering a unique and safe experience with the possibility of learning more about their destination through Blogs and renting suitable accommodation."
        /> */}
        <div className={styles.lcard}>
        <a href="https://github.com/DhiaBenHass1ne/Tunist" target="_blank" 
        >
        <img
            className={styles.logo1Icon1}
            loading="lazy"
            alt=""
            src="/tunist.png"
            />
            </a>
          <div className={styles.lcopy}>
          <a href="https://github.com/DhiaBenHass1ne/Tunist" target="_blank"
          style={{color:"black", textDecoration:"none"}}>

            <div className={styles.ltitle}>Tunist</div>
          </a>
            <div className={styles.ldesc}>
            A web application that aims to link upcoming tourists in Tunisia with local guides, offering a unique and safe experience with the possibility of learning more about their destination through Blogs and renting suitable accommodation.
            </div>
          </div>
   
        </div>




        <div className={styles.rcard}>
          <div className={styles.rcopy }>
          <a href="https://github.com/NejahA/Rewear" target="_blank"
          style={{color:"black", textDecoration:"none"}}>
          <div className={styles.rtitle }>Rewear</div>
            </a>
            <div className={styles.rdesc }>
              An e-commerce platform that fosters sustainability by enabling
              users to buy and sell second-hand clothing. It features image
              uploads, instant messaging for buyers and sellers, and a seamless
              user experience to encourage recycling and eco-friendly shopping.
            </div>
          </div>
          <a href="https://github.com/NejahA/Rewear" target="_blank">
          <img
            className={styles.logo1Icon1}
            loading="lazy"
            alt=""
            src="/rewear.png"
            />
            </a>
        </div>



        <div className={styles.lcard}>
        <a href="https://github.com/DhiaBenHass1ne/Fodni" target="_blank">
        <img
            className={styles.logo1Icon1}
            loading="lazy"
            alt=""
            src="/fodni.png"
            />
            </a>
          <div className={styles.lcopy}>
          <a href="https://github.com/DhiaBenHass1ne/Fodni" target="_blank"
          style={{color:"black", textDecoration:"none"}}>
            <div className={styles.ltitle}>Fodhni</div>
          </a>
            <div className={styles.ldesc}>
            A service marketplace that connects clients with service providers. It offers a streamlined platform for finding and offering services, ensuring quality and convenience with a user-friendly interface and efficient backend management.
            </div>
          </div>
         
        </div>




       
        {/* <Card
          tunisitLogo1="/fodni-2-1@2x.png"
          tunist="Fodhni"
          aWebApplicationThatAimsTo="A service marketplace that connects clients with service providers. It offers a streamlined platform for finding and offering services, ensuring quality and convenience with a user-friendly interface and efficient backend management."
          propPadding="1.875em 0em"
          propPadding1="0em 1.25em 1.875em"
        /> */}
        <footer className={styles.card1} />
      </div>
    </section>
  );
};

ProjectCardsContainer.propTypes = {
  className: PropTypes.string,
};

export default ProjectCardsContainer;
