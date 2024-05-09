import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";
import React, {useState} from "react";
import axios from 'axios';

const MyComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      // Make a POST request to your backend
      const response = await axios.post('http://localhost:3000/convert-legal-text', {
  document: inputValue,
});  
      // Handle the response as needed
      setOutput(response.data);
      setError(null);
      
      // Clear the input field after successful submission
      setInputValue('');
    } catch (error) {
      console.error('Error sending data to backend:', error);
      setError('Error sending data to backend. Please try again.');
    }
  };

  return (
    <div>
       <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Legal 
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
           AI Bot
        </span>
      </h1>
      </div>
      <br></br>
      <textarea
  rows={10}
  cols={90}
  value={inputValue}
  onChange={handleChange}
  placeholder="    Enter your text here"
  style={{ border: '1px solid #ccc', borderRadius: '5px' }}
/>

      <br />
      <br/>
      <button onClick={handleSubmit} style={{ backgroundColor: 'blue', borderRadius: '5px', color: 'white', padding: '10px', border: 'none', cursor: 'pointer' }}>Submit</button>
      <br />
      {output && <div>Output: {output}</div>}
      {error && <div>Error: {error}</div>}
    </div>
  );
};

export default MyComponent;