import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionExperience = ({ experience }) => {
  if (!experience.length) return null;

  return (
    <Section title="Experience">
      {experience.map((item) => (
        <SummaryItem
          key={item.name}
          name={item.name}
          position={item.position}
          description={item.description}
          duration={item.duration}
          link={item.link}
        />
      ))}
    </Section>
  );
};

export default SectionExperience;
