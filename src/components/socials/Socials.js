import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const socialsData = [
  {
    name: 'E-Mail',
    content: 'essevpi@gmail.com',
    iconPath: '/icons/email_white.svg',
    url: 'mailto:essevpi@gmail.com',
  },
  {
    name: 'Telegram',
    content: '@kappahz',
    iconPath: '/icons/telegram_white.svg',
    url: 'https://t.me/kappahz',
  },
  {
    name: 'GitHub',
    content: 'essevpi',
    iconPath: '/icons/github_white.svg',
    url: 'https://github.com/essevpi',
  },
  {
    name: 'LinkedIn',
    content: 'essevpi',
    iconPath: '/icons/linkedin_white.svg',
    url: 'https://linkedin.com/in/essevpi',
  },
];

const Socials = ({
  wrapperClassName,
  itemClassName,
  headingClassName,
  iconSize,
  headings,
}) => {
  return (
    <div className={wrapperClassName}>
      {socialsData.map((social, i) => (
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