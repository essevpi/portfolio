import Image from 'next/image';
import TopDivider from '../../../public/images/projects_divider-top.svg';
import ProjectsList from './projectList/ProjectsList';
import projectsData from './projectsData';

import styles from './Projects.module.scss';

const Projects = () => {
  return (
    <div
      className={`${styles['section__container']} app__flex app__fullscreen`}
      id='projects'
    >
      <div className={styles['section__divider-top']}>
        <Image src={TopDivider} alt='projects-divider-top' fill />
      </div>

      <div className='app__section'>
        <div className={styles['projects-container']}>
          <div className={styles['projects__heading-wrapper']}>
            <h2>Projects</h2>
            <p>
              Projects that I developed{' '}
              <span className='secondary-text'>
                <i>(more on the way...)</i>
              </span>
            </p>
          </div>
          <ProjectsList projectsData={projectsData} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
