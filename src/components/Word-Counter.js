import React, { useState } from 'react';
import "./Word-Counter.css"
function WordCounter() {
  const [text, setText] = useState('');
  const wordCount = text.split(/\s+/).filter(word => word !== '').length;

  const handleTextChange = (event) => {
    setText(event.target.value);
  };
 

  return (
    <div className='container'>
        <h1>Responsive Paragraph Word<br/>
          Counter</h1>
      <textarea
        rows="4"
        cols="50"
        value={text}
        onChange={handleTextChange}
        placeholder="Enter your text here..."
      />
    
      <p className='word-count'>Word Count: {wordCount}</p>
    </div>
  );
}

export default WordCounter;