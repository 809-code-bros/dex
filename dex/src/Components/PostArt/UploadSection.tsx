import React, {useState} from 'react'

const UploadSection = () => {
  const[postArt, setpostArt] = useState({ 
      title:"",
      image: { 
        data:Buffer,
        contentType:String,
      },
  })
  return (
    <div className='uploadComp'>
      
      <input 
      type="file"
      
      
      />

      
    </div>
  )
}

export default UploadSection