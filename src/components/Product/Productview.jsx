import React, { useState } from 'react'

const Productview = () => {
    const [view,setViewdata] = useState([]);
    const readproductdata=(event)=>{

 
    fetch("https://product-88ab6-default-rtdb.firebaseio.com/Productname.json")
    .then((response) => {
        return response.json()
    }).then((data) => {
        // console.log(data);
        console.log(snapshotToArray(data));
        setViewdata(snapshotToArray(data));
    })
} 

function snapshotToArray(snapshot) {
    const array = []; 

    Object.keys(snapshot).forEach((key) => {
    array.push(snapshot[key]);
    });
    return array;
}

  return (
    <div>
      <button type='submit' onClick={readproductdata}>View</button><br/>
    <br/>
    <table border="1">
        <tr>
        <th>Product ID</th>
        <th>Product Name</th>
        <th>Product Category</th>
        <th>Product Price</th>
        <th>Product Quantity</th>
        </tr>
        {view.map((value,index)=>{
            return(
                <tr key={index}>
                 <td>{value.productid}</td> 
                 <td>{value.productname}</td> 
                 <td>{value.category}</td>
                 <td>{value.price}</td>
                 <td>{value.quantity}</td>   
                </tr>
            )
        })}
    </table>
    </div>
  )
}

export default Productview
