import React from 'react'

export default function Header() {
  return (
    <>
    
    <div style={{textAlign: 'center', color: 'white', backgroundColor: '#f2f2f2'}}>
        <nav>  
            <button onClick={()=> navigate("/")}>Home</button>
            <button onClick={()=> navigate("/products")}>Products</button>
            <button onClick={()=> navigate("/contact")}>contacts</button>
            <button onClick={()=> navigate("/cart")}>Cart</button>
            
            
             </nav>
        
        </div>    
    
    </>
  )
}
