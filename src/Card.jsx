import React from 'react'
import {useState} from 'react'
import useCollapse from '@gaearon/react-collapsed'
import './App.scss';
const Card = ({items}) => {
    const [isExpanded, setExpanded] = useState(false)
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })
  return (
    <>

<div className="card-item">
<div className='card-top'><img src={items.image} alt={items.cateory} width='90px' height='60px'/>
        <h6>{items.category}</h6>
        </div>
        <h5>{items.title.slice(0,4)}</h5>
        {isExpanded?<p {...getCollapseProps()}>{items.description.slice(0)}</p>:<p>{items.description.slice(0,150)}...</p>}
      <button
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
    </>
  )
}

export default Card