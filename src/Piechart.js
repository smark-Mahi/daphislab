import React, { useState } from 'react'
import {Pie} from 'react-chartjs-2'
import './App.scss';
import {ArcElement,Chart as ChartJs,Tooltip,Legend} from "chart.js"
ChartJs.register(ArcElement,Tooltip,Legend)
const Piechart = ({chartData,setopen}) => {

  return (
    <div className='Modal'>
     <span onClick={()=>{setopen(false)}} className='close'>x</span>
     <div className='modal-container'>
     <span onClick={()=>{setopen(false)}} className='close'>x</span>
     <div style={{width:'350px',height:'300px'}}>
      <Pie data={chartData}/>
      </div>
     </div>
    </div>
  )
}

export default Piechart