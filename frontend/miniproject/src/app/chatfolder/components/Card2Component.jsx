import React from 'react'

function Card2Component({folder}) {
  return (
    <div>
      <div className="neo-box flex flex-col bg-white">
      <h1 className="text-[30px] text-black">{folder.name}</h1>
      </div>
    </div>
  )
}

export default Card2Component