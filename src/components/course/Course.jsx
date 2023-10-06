import React, { useState } from 'react'

const Course = () => {
    const [cn,setCn] = useState('');
    const [dur,setDur] = useState('');
    const [fee,setFee] = useState('');

    const readcoursename = (event) => {
        setCn(event.target.value);
        console.log(event.target.value);
    }
    const readduration = (event) => {
        setDur(event.target.value);
        console.log(event.target.value);
    }
    const readfeeamount = (event) => {
        setFee(event.target.value);
        console.log(event.target.value);
    }
  return (
    <div>
        <h1>Student Form</h1>
      <form>
        Course Name<input type='text' onChange={readcoursename}/><br/><br/>
        Duration<input type='number' onChange={readduration}/><br/><br/>
        Fee Amount<input type='number' onChange={readfeeamount}/><br/><br/>
        <button type='submit'>Save</button>
      </form>
    </div>
  )
}

export default Course
