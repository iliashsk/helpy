import React, { useState, useEffect } from 'react';

function Button() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    //document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p style={{color:'blue'}}>You Submitted {count} Times in This Session</p>
      <button type="submit" onClick={() => setCount(count + 1)}>
        Submit Details  
      </button>
    </div>
  );
};
export default Button;