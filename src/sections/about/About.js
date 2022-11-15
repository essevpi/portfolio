import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.scss';

const magicVariants = {
  offscreen: {
    x: '100%',
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

const About = () => {
  return (
    <div
      className={`${styles['section__container']} app__flex app__fullscreen`}
      id='about'
    >
      <motion.div
        variants={magicVariants}
        initial='offscreen'
        whileInView='onscreen'
        viewport={{ once: false }}
        className={`${styles['about__container']} app__section`}
      >
        <div className={styles['about__heading-wrapper']}>
          <h2>Something about me</h2>
        </div>
        <div className={styles['about__content-wrapper']}>
          <p>
            Lorem ipsum dolor sit amet. Est reiciendis obcaecati ex voluptatibus
            ipsam cum quaerat consequuntur a consequatur fugiat nihil
            voluptatem. Et exercitationem quaerat est accusantium laborum ea
            optio adipisci non inventore illum aut inventore nisi a deserunt
            beatae et vero dicta. Aut quia nisi ab veniam eveniet hic inventore
            voluptatem. Qui laudantium illum eum laboriosam mollitia et ipsam
            adipisci est doloremque numquam eum illo tempora aut molestias eaque
            et rerum voluptates. Qui ducimus veritatis sed veniam odit est
            corporis tempore ea velit harum. Id nemo illum qui exercitationem
            deleniti qui repellendus similique est sint voluptas qui autem
            possimus et velit voluptatem.
          </p>
        </div>
        <div className={styles['about__heading-wrapper']}>
          <h2>...and some more</h2>
        </div>
        <div className={styles['about__content-wrapper']}>
          <p>
            Non omnis beatae non molestiae dolorem sed fuga sequi et quia illo
            ut reprehenderit quam ut galisum vitae! Et voluptatum repellat in
            nesciunt consectetur sed reprehenderit ratione eos quia dolorem. Id
            perferendis consequatur ad voluptate repudiandae non velit magnam
            est ipsum rerum sed omnis dignissimos sed consectetur cupiditate cum
            molestiae iusto. In labore aspernatur eum tenetur impedit ab
            exercitationem ratione et amet galisum et nesciunt voluptatum aut
            velit consectetur aut omnis ullam.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;