import React, { useEffect, useState } from 'react';
import styles from './Skills.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import SkillList from '../../components/skill-list/SkillList';
import { knownSkills, plannedSkills } from './skills_data';

//Known skills animation variants
const knownSkillsVariants = {
  offscreen: {
    x: '-100%',
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'easeOut',
      bounce: 0.5,
      duration: 0.75,
    },
  },
};

//Planned skills animation variants
const plannedSkillsVariants = {
  ...knownSkillsVariants,
  offscreen: {
    ...knownSkillsVariants.offscreen,
    x: '100%',
  },
  onscreen: {
    x: 0,
    ...knownSkillsVariants.onscreen,
  },
};

const Skills = () => {
  return (
    <div
      className={`${styles['section__container']} app__flex app__fullscreen`}
      id='skills'
    >
      <div className='app__section'>
        {/* KNOWN SKILLS */}
        <motion.div
          variants={knownSkillsVariants}
          initial='offscreen'
          whileInView='onscreen'
          viewport={{ once: false }}
        >
          <SkillList
            cards={knownSkills.items}
            title={knownSkills.heading.title}
            description={knownSkills.heading.description}
            iconSize={48}
          />
        </motion.div>
        {/* PLANNED SKILLS */}
        <motion.div
          variants={plannedSkillsVariants}
          initial='offscreen'
          whileInView='onscreen'
          viewport={{ once: false }}
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
