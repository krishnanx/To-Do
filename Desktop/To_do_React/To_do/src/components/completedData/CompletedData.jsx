import React, { useContext } from 'react'
import { completedContext } from '../../App';
import CList from '../CList/CList'
import './CompletedData.css'
const CompletedData = (P) => {
    const [comp_value, setComp_value] = useContext(completedContext);
  return (
    <div className='task'>
        {comp_value.map((value, index) => {
        return <CList value={value} comp_value={comp_value} setComp_value={setComp_value} />;
        })}
    </div>
  )
}

export default CompletedData