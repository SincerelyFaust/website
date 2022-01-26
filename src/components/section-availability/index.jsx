import React from 'react';

import Section from '../section';

const SectionAvailability = ({ availability }) => {
  return (
    <Section title="Availability">
      <div className="mb-6">
        <p>{availability}</p>
      </div>
    </Section>
  );
};

export default SectionAvailability;
