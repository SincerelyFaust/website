import { Link } from 'gatsby';
import React from 'react';

const classes = {
  wrapper: 'mb-6',
  name: 'font-semibold text-gray-900 dark:text-white pb-1',
  description: 'text-md text-gray-600 dark:text-gray-200 font-light',
  position: 'text-md text-gray-600 dark:text-gray-200 font-light',
  duration: 'text-md text-gray-600 dark:text-gray-200 font-light',
};

const SummaryItem = ({ name, position, description, duration, technology, link = false, internal = false }) => {
  let linkContent;
  if (internal) {
    linkContent = <Link to={link}>{name}</Link>;
  } else {
    linkContent = <a href={link}>{name}</a>;
  }

  return (
    <div className={classes.wrapper}>
      <h3
        className={`${classes.name} ${
          link ? 'hover:underline hover:text-black dark:hover:text-blue-400' : ''
        }`}
      >
        {link ? linkContent : name}
      </h3>
      <p className={classes.position}>{position}</p>
      <p className={classes.description}>{description}</p>
      <p className={classes.duration}>{duration}</p>
      <p className={classes.technology}>{technology}</p>
    </div>
  );
};

export default SummaryItem;
