import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import styles from './ProjectList.module.scss';

const imgLoader = ({ src }) => src;

const cardVariants = {
  hover: { scale: 1.05, transition: { duration: 0.25 } },
};

const ProjectCard = ({ title, desc, href, img }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover='hover'
      className={styles['project-card__container']}
    >
      <Link href={href}>
        <div className={styles['project-card-image__container']}>
          <Image
            loader={imgLoader}
            src={img}
            alt='preview'
            /* width={200}
            height={200} */
          />
        </div>
        <div className={styles['project-card__body']}>
          <div className={styles['project-card__heading']}>
            <h4>{title}</h4>
          </div>
          <div className={styles['project-card__description']}>
            <p>{desc}</p>
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
        <ProjectCard
          key={i}
          title={card.title}
          desc={card.desc}
          href={card.href}
          img={card.img}
        />
      ))}
    </div>
  );
};

export default ProjectsList;
