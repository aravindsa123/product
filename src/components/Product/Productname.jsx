import React, { useState } from 'react'
import './Product.css'
const Productname = () => {
    const [pid,setPid] = useState('');
    const [pn,setPn] = useState('');
    const [ca,setCa] = useState('');
    const [pr,setPr] = useState('');
    const [qu,setQu] = useState('');
    const [err,setErr] = useState(false);

    const readproductid = (event) => { 
        event.preventDefault();
       setPid(event.target.value);
       console.log(event.target.value);
    }
    const readproductname = (event) => {
        event.preventDefault();
        setPn(event.target.value);
        console.log(event.target.value);
     }
     const readcategory = (event) => { 
        event.preventDefault();
        setCa(event.target.value);
        console.log(event.target.value);
     }
     const readprice = (event) => {
        event.preventDefault();
        setPr(event.target.value);
        console.log(event.target.value);
     }
     const readquantity = (event) => {
        event.preventDefault();
        setQu(event.target.value);
        console.log(event.target.value);
     }
     const checkdata = (event) => { 
        event.preventDefault();
        if(pid.trim() ===''|| pn.trim() ===''||ca.trim() ===''||
        pr.trim() ===''||qu.trim() ==='') 
        {
         setErr(true);
         return;   
        }
        else
        {
            setErr(false);
        }
        const myobj={
            productid:pid,
            productname:pn,
            category:ca,
            price:pr,
            quantity:qu,
        }
        fetch("https://product-88ab6-default-rtdb.firebaseio.com/Productname.json",
        {
            method:"POST",
            body:JSON.stringify(myobj),
            headers:{"Content-Type":"application/json",
        }
        }
        );
        alert("Record Saved")
    }
  return (
    <div>
      <h1 className='h'>PRODUCT DETAILS</h1>
      <form className='pf'>
      Product ID<input type='text' onChange={readproductid}></input><br/><br/>
      Product Name<input type='text' onChange={readproductname}></input><br/><br/>
      Product Category<input type='text' onChange={readcategory}></input><br/><br/>
      Product Price<input type='number' onChange={readprice}></input><br/><br/>
      Product Quantity<input type='number' onChange={readquantity}></input><br/><br/>
      <button type='Submit' className='b' onClick={checkdata}>Submit</button>
      {err && 'Please fill the above columns'}
      </form>
    </div>
  )
}

export default Productname
