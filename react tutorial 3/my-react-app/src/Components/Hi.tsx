import React from 'react';

interface HiProps {
  children: React.ReactNode 
}


const Hi: React.FC<HiProps> = ({ children }) => { // ⬅️ Check this line
  
  const handleAlertDismiss = () => {
    alert("You clicked the button! Dismissed successfully."); 
  };

  return (
    
    <div 
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      
      {children} {/* ⬅️ Ensure children is enclosed in curly braces {children} */}
      
      {/* Close button with Bootstrap classes and onClick handler [cite: 63-65] */}
      <button
        type="button" 
        className="btn-close" 
        data-bs-dismiss="alert"
        aria-label="Close" 
        onClick={handleAlertDismiss} 
      >
      </button>
    </div>
  );
};

export default Hi;