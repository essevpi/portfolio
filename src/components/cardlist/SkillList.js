import React from 'react';
import styles from './SkillList.module.scss';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Card = ({ name, iconPath, iconSize }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.25,
        transition: { duration: 0.25, ease: 'easeInOut' }
      }}
      className={styles['skills__container-item']}
    >
      <Image src={iconPath} alt={name} height={iconSize} width={iconSize} />
      <span className={styles['skills__item-title']}>{name}</span>
    </motion.div>
  );
};

const CardList = ({ cards, title, description, iconSize }) => {
  return (
    <div className={styles['skills__container']}>
      <div className={styles['skills__container-header']}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <div className={styles['skills__container-wrapper']}>
        {cards.map((card, i) => (
          <Card
            name={card.name}
            iconPath={card.iconPath}
            iconSize={iconSize}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
