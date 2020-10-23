const BookSlot=require('../models/BookSlot')
exports.create=(req,res)=>
{
	//console.log(req.body.slotNumber.slotNumber)
	//console.log("slot")
	console.log(req.body)
	const bookslot=new BookSlot(req.body)
		bookslot.save((err,data)=>
			{
		if(err)
		{
			return res.status(400).json({
				error:'slot can not booked'
			});

		}
		res.json({data:data})
	})
}
		
		

	
	
