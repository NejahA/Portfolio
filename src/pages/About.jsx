import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
    
      <div className={styles.aboutChild} />
      <main className={styles.content}>
        <section className={styles.introductionParent}>
          <div className={styles.introduction}>
            <h1 className={styles.hiImAchref}>Hi, I’m Achref Nejah</h1>
            <div className={styles.aPassionateFull}>
              A Passionate Full Stack Web Developer
            </div>
            <div className={styles.paragraph}>
              <p
                className={styles.welcomeToMy}
              >{`Welcome to my portfolio! I'm Achref Nejah, a Full Stack Web Developer with a unique background in civil engineering. `}</p>
              <p className={styles.blankLine}>&nbsp;</p>
              <p className={styles.myJourneyFrom}>
                My journey from engineering to web development has equipped me
                with a strong analytical mindset and the ability to tackle
                complex technical challenges.
              </p>
              <p className={styles.blankLine1}>&nbsp;</p>
              <p className={styles.iSpecializeIn}>
                I specialize in a variety of technologies, including Python,
                Django, React, and Java Spring Boot. My projects range from a
                tourist guide platform that connects visitors with local guides
                in Tunisia to an e-commerce site promoting the recycling of
                second-hand clothing. These experiences have allowed me to
                develop robust, user-friendly web applications that solve
                real-world problems.
              </p>
              <p className={styles.blankLine2}>&nbsp;</p>
              <p className={styles.feelFreeTo}>
                Feel free to explore my projects and get in touch if you'd like
                to collaborate or learn more about my work. I'm always open to
                new opportunities and excited to see where my web development
                journey will take me next.
              </p>
            </div>
          </div>
          <div className={styles.heroImageContainer}>
            <img
              className={styles.heroImageIcon}
              loading="lazy"
              alt=""
              src="/hero.avif"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
