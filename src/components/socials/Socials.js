import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SocialsData from './socials_data';

const Socials = ({
  wrapperClassName,
  itemClassName,
  headingClassName,
  iconSize,
  headings,
}) => {
  return (
    <div className={wrapperClassName}>
      {SocialsData.map((social, i) => (
        <div className={itemClassName} key={i}>
          <Link href={social.url} passHref legacyBehavior>
            <a>
              <Image
                src={social.iconPath}
                alt={social.name}
                height={iconSize}
                width={iconSize}
              />
            </a>
          </Link>
          {headings && (
            <div className={headingClassName}>
              <h3>{social.name}</h3>
              <Link href={social.url} passHref legacyBehavior>
                <a>{social.content}</a>
              </Link>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Socials;
