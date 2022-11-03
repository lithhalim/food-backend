const express = require('express')
const router = express.Router()



//------------------------------------ Create Section ----------------------------------------//
const creat_post=require("../../controllers/postes-controllers/Create_Post/Create-post");
const create_Image=require("../../controllers/postes-controllers/Create_Post/create-image");

router.post("/createpost",creat_post)
router.post("/createImage",create_Image);


//-------------------------------------get section -------------------------------------------//

const Get_all_post=require("../../controllers/postes-controllers/Get_Post/get-allpostes");
const Get_Catagory=require("../../controllers/postes-controllers/Get_Post/get-catagory");
const get_page_product=require("../../controllers/postes-controllers/Get_Post/get-Product");

router.get("/getpostes/:data",Get_all_post)
router.get("/getpostesCatagory/:data",Get_Catagory)
router.get("/getproductpage/:data",get_page_product)


//--------------------------------------delete section --------------------------------------------//

const DeleteItem=require("../../controllers/postes-controllers/Delete_Post/delete-item");
router.post("/DeleteItem",DeleteItem)


//--------------------------------------like data ------------------------------------------------//
const create_like_controllers=require("../../controllers/postes-controllers/like-comment/like/create-like")
router.post("/createlike",create_like_controllers)



//-----------------------------------comment data -------------------------------------------------//
const create_comment_controllers =require("../../controllers/postes-controllers/like-comment/comment/create-comment");
router.post("/createComment",create_comment_controllers)




module.exports=router
