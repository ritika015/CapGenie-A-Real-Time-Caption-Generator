import React, { useState } from 'react';

function App() {
  const [captions, setCaptions] = useState([]);

  const handleUpload = () => {
    alert("Upload functionality coming soon!");
    setCaptions(["Sample Caption 1", "Sample Caption 2"]);
  };

  return (
    <div>
      <h1>CAPGenerator UI Mockup</h1>
      <button onClick={handleUpload}>Upload Video</button>
      <div>
        {captions.map((c, i) => <p key={i}>{c}</p>)}
      </div>
    </div>
  );
}

export default App;
