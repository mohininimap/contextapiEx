import React from 'react'

const Child = (props) => {
  return (
    <div sx={{marginTop:"200px"}}>
       <p> Hello Mohini {props.children}</p>
        </div>
  )
}

export default Child