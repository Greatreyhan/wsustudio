import React, { ReactNode } from 'react';
import { Footer, Navigation } from '../organisms';

interface LandingTemplateProps {
  children: ReactNode;
}

const LandingTemplate: React.FC<LandingTemplateProps> = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};

export default LandingTemplate;
