import React,{useState,useEffect} from 'react'
import Layout from './Layout'
import {getProducts} from  './apiCore'
import Card from  './card'
import Search from './Search'

const Home=()=>{
	const [productsBysell,setProductsBysell]=useState([])
	const [error,setError]=useState(false)

	const loadproductsBysell=()=>
	{
		getProducts('sold')
		.then(data=>{
			if(!data)
			{
				setError("error in Home")
			}
			else
			{
				setProductsBysell(data)
				//console.log(productsBysell)
			}
		})
	}

		useEffect(()=>{
				loadproductsBysell()
			},[])


	return (
		<Layout className="container" title="A parking website" description="The road to succes is dotted  with ,any tempting parking space" >
			<center><h2 className="mb-4" style={{"color":"lime"}}>Book Slot Now </h2></center>
			<div className="row">
			{productsBysell.map((product,i)=>(<div key={i} className="col-md-4 mb-3">
			<Card  product={product} />
				</div>
				))}
			</div>
		</Layout>
		)

}

export default Home














