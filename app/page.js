import React from 'react'

const page = () => {
  const marks  = 80
  const clicked = ()=>{
    console.log(marks); 
    marks = 33
    
  }
  return (
    <>
    <div>
      this is page
    </div>
    </>
  )
}

export default page
