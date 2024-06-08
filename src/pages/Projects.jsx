import React from 'react'
import styles from "./Projects.module.css";
import ProjectCardsContainer from './components/ProjectCardsContainer';

const Projects = () => {
  return (
<div className={styles.portfolio}>
    
      <div className={styles.portfolioChild}>
        <div className={styles.myProjectsParent}>
          <h1 className={styles.myProjects}>My Projects</h1>
          <div className={styles.myWebDevelopment}>
            My Web Development Portfolio
          </div>
        </div>
      </div>
      <div className={styles.portfolioItem} />
      <main className={styles.projectCardsContainerParent}>
        <ProjectCardsContainer />
        
      </main>
    </div>
      )
}

export default Projects