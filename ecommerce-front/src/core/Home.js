import React,{useState,useEffect} from 'react'
import Layout from './Layout'
import {Link} from 'react-router-dom'
import {getProducts,BookSlot} from  './apiCore'
import Card from  './card'
import Search from './Search'
import {isAuthenticated} from '../auth'
//{JSON.stringify(slots)}


const Home=()=>{
	const [slots,setSlots]=useState(0)
	const [error,setError]=useState(false)
	const [succes,setSuccess]=useState(false)
	const {user,token}=isAuthenticated()
	
	const loadSlots=()=>
	{
		getProducts()
		.then(data=>{
			if(!data)
			{
				setError("error in Home")
			}
			else
			{
				setSlots(data[0].slots)
				//console.log(data[0].slots,slots)
			}
		})
	}
	const createSlot=(slotNumber)=>
		{
			
			console.log(slotNumber)

			/*BookSlot(user._id,token,slotNumber,user.contact,user.name)
			.then((data,err)=>
			{
				if(err)
				{
					setError(true)
				}
				else
				{
				setSuccess(true)
				const result=JSON.stringify(data)
				console.log(result,data)
				window.alert("slot booked for "+result)
			//	window.location.reload(false)
				}

			})*/
		}


		const showSlots=()=>
		{
			var rows = [];
			//console.log(slots)
		for (var i = 0; i < slots; i++) {
   	 		rows.push(<Link className="btn btn-success" to={`bookslot/${i}`} value={i} style={{"margin":"5px 5px 5px 5px"}}>SLOT {i}</Link>);
		}

		return (
			rows
		)
		}





		useEffect(()=>{
				loadSlots()
			},[slots])


	return (
		<Layout className="container" title="A parking website" description="The road to succes is dotted  with ,any tempting parking space" >
			<center><h2 className="mb-4" style={{"color":"lime"}}>Book Slot Now </h2></center>
			<div className="row">
				{showSlots()}
			</div>
		</Layout>
		)

}

export default Home














