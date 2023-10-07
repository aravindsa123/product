import React, { useState } from 'react'
import './Book.css'
const Book = () => {
    const [bon,setBon] = useState('');
    const [au,setAu] = useState('');
    const [pu,setPu] = useState('');
    const [er,setEr] = useState(false);

    const readbookname = (event) => { 
        event.preventDefault();
       setBon(event.target.value);
       console.log(event.target.value);
    }
    const readauthor = (event) => { 
        event.preventDefault();
        setAu(event.target.value);
        console.log(event.target.value);
     }
     const readpublisher = (event) => { 
        event.preventDefault();
        setPu(event.target.value);
        console.log(event.target.value);
     }
     const checkfilleddata = (event) => { 
        event.preventDefault();
        if(bon.trim() ===''|| au.trim() ===''||pu.trim() ==='') 
        {
         setEr(true);
         return;   
        }
        else
        {
            setEr(false);
        }
        const myobj={
            bookname:bon,
            author:au,
            publisher:pu
        }
        fetch("https://project01-32f37-default-rtdb.firebaseio.com/Project01.json",
        {
            method:"POST",
            body:JSON.stringify(myobj),
            headers:{"Content-Type":"application/json",
        }
        }
        );
    }
   
  return (
    <div>
        <h1 className='aa'>BOOK DETAILS</h1>
      <form className='f'>
        Book Name<input type="text" onChange={readbookname}/><br/><br/>
        Author<input type="text" onChange={readauthor}/><br/><br/>
        Publisher<input type="text" onChange={readpublisher}/><br/><br/>
        <button type="submit" onClick={checkfilleddata} className='b'>Save</button>
        {er && 'Please Fill the above columns'}
      </form>
    </div>
  )
}

export default Book
