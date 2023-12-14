import React from 'react';
import mycvv from "../../../src/assits/images/kabircv1dec.pdf"

function Homepage() {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = mycvv; // Use the imported file path
    link.download = 'kabir1dec.pdf'; // Set the desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='thisishomepage'>
      <h1>Welcome</h1>
      <p className='paramy'>
        I am a dedicated DevOps engineer and a passionate ML/AI enthusiast with
        a goal of contributing my technical skills and expertise in an
        organization that fosters both professional and personal growth.
      </p>
      <div className='btncenter'>

      <button onClick={handleDownloadCV}  className='cvmybtn'> Download CV</button>
      </div>
      
    </div>
  );
}

export default Homepage;
