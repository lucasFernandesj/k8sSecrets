import React from 'react';

function App() {
  const env1 = process.env.REACT_APP_ENV1;
  const env2 = process.env.REACT_APP_ENV2;

  return (
    <div>
      <h1>Environment Variables</h1>
      <p>ENV1: {env1}</p>
      <p>ENV2: {env2}</p>
    </div>
  );
}

export default App;
