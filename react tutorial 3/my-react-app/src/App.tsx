import React from 'react';
import Hi from './Components/Hi';

const App: React.FC = () => {
  return (
    
    <div style={{ padding: '20px' }}> 
      
      
      <Hi>
      
        <h3>Welcome to the React Tutorial , PS/2021/121</h3> 
        <p>This is a reusable component with custom HTML content passed as children!</p> 
      </Hi>
      
    </div>
  );
};

export default App; 