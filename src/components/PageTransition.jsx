import React, { useEffect } from 'react';

const PageTransition = ({ children }) => {
  useEffect(() => {
    // Reset scroll position on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-fadeIn">
      {children}
    </div>
  );
};

export default PageTransition; 