const express=require("express");
const router=express.Router();

const {create}=require('../controllers/BookSlot');

const {requireSignin,isAuth,isAdmin}=require('../controllers/user');
const {userById}=require('../controllers/user1');
router.post("/slot/create/:userId",create)
/*router.get('/category/:categoryId',read)
router.get('/categories',list)
//auth


/*
router.get("/",(req,res)=>
{
	res.send("users");
})
*/
router.param("userId",userById)
//router.param("categoryId",categoryById)

module.exports=router;