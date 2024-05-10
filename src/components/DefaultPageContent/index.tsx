import { DefaultPageContainer } from './PageContent.style';
import React from 'react';

const DefaultPageContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <DefaultPageContainer>
        {children}
    </DefaultPageContainer>
  );
};

export default DefaultPageContent;