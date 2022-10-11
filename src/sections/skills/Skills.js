import React, { useEffect, useState } from 'react';
import styles from './Skills.module.scss';
import { motion } from 'framer-motion';
import SkillList from '../../components/cardlist/SkillList';
import { knownSkills, plannedSkills } from './skills_data';

const Skills = () => {
  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    window.innerWidth < 900 ? setIsMobile(true) : setIsMobile(false);
  }, []);

  //Skills container animation
  const magicVariants = {
    offscreen: {
      y: '50%',
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.5,
        duration: 1.2,
      },
    },
  };

  return (
    <div
      className={`${styles['section__container']} app__flex app__fullscreen`}
      id='skills'
    >
      <div className='app__section'/* {styles.main__page} */>
        <motion.div
          className={styles['skills__container']}
          variants={magicVariants}
          initial='offscreen'
          whileInView='onscreen'
          viewport={{ once: true }}
        >
          <SkillList
            cards={knownSkills.items}
            title={knownSkills.heading.title}
            description={knownSkills.heading.description}
            iconSize={48}
          />
        </motion.div>
        <motion.div
          className={styles['skills__container']}
          variants={magicVariants}
          initial='offscreen'
          whileInView='onscreen'
          viewport={{ once: true }}
        >
          <SkillList
            cards={plannedSkills.items}
            title={plannedSkills.heading.title}
            description={plannedSkills.heading.description}
            iconSize={48}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
