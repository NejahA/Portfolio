import React from 'react'
import styles from "./Navigation.module.css";
import { useNavigate } from 'react-router-dom';
import { IoMdDownload,IoMdMenu  } from "react-icons/io";
import { slide as Menu } from 'react-burger-menu'

const Navigation = () => {
  const nav =  useNavigate()
  return (
<div className={styles.navigation}>
        <div className={styles.an}>an.</div>
        <div className={styles.projectContactWrapper}>

          <nav className={styles.projectContact}>
            <div className={styles.about} onClick={()=>nav("/about")}>About</div>
            <div className={styles.projects} onClick={()=>nav("/projects")}>Projects</div>
            <div className={styles.contact} onClick={()=>nav("/contact")}>Contact</div>
            <a className={styles.resume}
             href='/Achref-Nejah-Resume.pdf' target="_blank"
             download="Achref-Nejah-Resume.pdf">
            <IoMdDownload className={styles.download}/>
              Resume
            </a>
            
          </nav>

          <Menu 
          // right
            // className={styles.burger}
           customBurgerIcon={<IoMdMenu />}
            // customCrossIcon={<IoMdDownload />}
            burgerButtonClassName={styles.burgerButton}
            
            >
            <div className={styles.about} onClick={()=>nav("/about")}>About</div>
            <div className={styles.projects} onClick={()=>nav("/projects")}>Projects</div>
            <div className={styles.contact} onClick={()=>nav("/contact")}>Contact</div>
            <a className={styles.mobileResume}
             href='/Achref-Nejah-Resume.pdf' target="_blank"
             download="Achref-Nejah-Resume.pdf">
              Resume
            </a>
            </Menu>
            </div>

      </div>  )
}

export default Navigation