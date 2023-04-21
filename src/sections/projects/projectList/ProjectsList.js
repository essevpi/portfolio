import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import styles from './ProjectList.module.scss';

const imgLoader = ({ src }) => src;

const cardVariants = {
  hover: { scale: 1.02, transition: { duration: 0.2 } },
};

const ProjectCard = ({ card }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover='hover'
      className={styles['project-card__container']}
    >
      <Link href={card.href} className={styles['project-card__wrapper']}>
        <div className={styles['project-card-image__container']}>
          <Image loader={imgLoader} src={card.img} alt='preview' />
        </div>
        <div className={styles['project-card__body']}>
          <div className={styles['project-card__heading']}>
            <h4>{card.title}</h4>
          </div>
          <div className={styles['project-card__description']}>
            <p>{card.desc}</p>
          </div>
          <div className={styles['project-card__tags']}>
            {card.tags.map((tag, i) => (
              <div className={styles['project-card__tag']} key={i}>
                <div className={styles['project-card__tag-bullet']} />
                <span>{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const ProjectsList = ({ projectsData }) => {
  return (
    <div className={styles['project-list__container']}>
      {projectsData.map((card, i) => (
        <ProjectCard key={i} card={card} />
      ))}
    </div>
  );
};

export default ProjectsList;
