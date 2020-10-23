import React ,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'

const SlotBookingForm=(props)=>{
	const [slotnum,setSlotNum]=useState()
	useEffect(()=>{
		//console.log(props.match.params.slotNumber)
		const slotNumber=props.match.params.slotNumber;
		setSlotNum(slotNumber)
		

	},[])

	return(
		<form>
{slotnum}
		</form>
		)

}
export default SlotBookingForm