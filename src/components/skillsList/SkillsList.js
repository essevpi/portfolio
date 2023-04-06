import React from 'react';
import styles from './SkillList.module.scss';
import Image from 'next/image';
import { motion } from 'framer-motion';

const SkillCard = ({ name, iconPath, progress, iconSize }) => {
  const getProgressColor = (percentage) => {
    if (percentage > 0 && percentage < 35)
      return '#ea5545';
    else if (percentage >= 35 && percentage < 65)
      return '#ede15b';
    else if (percentage >= 65)
      return '#87bc45';
  };

  return (
    <motion.div
      whileHover={{
        scale: 1.25,
        transition: { duration: 0.25 },
      }}
      className={styles['skills__container-item']}
    >
      <Image src={iconPath} alt={name} height={iconSize} width={iconSize} />
      <p className={styles['skills__item-title']}>{name}</p>

      {progress > 0 && (
        <div className={styles['skills__item-progress-wrapper']}>
          <div
            className={styles['skills__item-progress']}
            style={{ width: `${progress}%`, background: `${getProgressColor(progress)}` }}
          />
        </div>
      )}
    </motion.div>
  );
};

const SkillsList = ({ cards, title, description, iconSize }) => {
  return (
    <div className={styles['skills__container']}>
      <div className={styles['skills__container-header']}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <div className={styles['skills__container-wrapper']}>
        {cards.map((card, i) => (
          <SkillCard
            name={card.name}
            iconPath={card.iconPath}
            progress={card.progress}
            iconSize={iconSize}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsList;
