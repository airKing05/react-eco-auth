import React, {useState, useEffect} from 'react'
import Card from '../components/Card'

export default function Home() {
  const [products, setProducts] = useState([]);
  function getData() {
    let url = 'https://fakestoreapi.com/products';
    fetch(url)
    .then(res=> res.json())
    .then(res => setProducts(res))
  }
  useEffect(()=>{
    getData()
  }, [])

  console.log("products", products)

  return (
    <div className='container px-2'>
       <div className='row my-5 d-flex justify-content-center'>
        {
          products && products.map((product) =>{
            return <Card key={product.id} {...product}/>
          })
        }
       
       </div>
    </div>
  )
}
