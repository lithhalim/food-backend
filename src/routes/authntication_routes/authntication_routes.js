const express = require('express')
const router = express.Router()

//BASIQ AUTH REQUIRE
const basic_auth=require("../../middelware/authintication/basic_auth")
const bearer_auth=require("../../middelware/authintication/barear_auth")



//ALL MEDILWARE FUNCTION ARE USE
const signin_controllers=require("../../controllers/authntication-controllers/signin-signout-signup/signin-controllers");
const signup_controllers=require("../../controllers/authntication-controllers/signin-signout-signup/signup-controllers");
const signout_controllers=require("../../controllers/authntication-controllers/signin-signout-signup/logout-controllers");
const Refresh__Token_Controllers=require("../../controllers/authntication-controllers/Refreash_Token");

//ALL ROUTES ARE USED
router.post("/signin",basic_auth,signin_controllers)
router.post("/signup",signup_controllers);
router.post("/logout/:data",signout_controllers);
router.post("/token",Refresh__Token_Controllers);




//-------------------------------------Forget Password Section ------------------------------------------//
const ForgetPassword_controllers=require("../../controllers/authntication-controllers/forget-password/forget-password");
const SingGrid_controllers=require("../../controllers/authntication-controllers/forget-password/sindGrid");
const UpdatePassword=require("../../controllers/authntication-controllers/forget-password/updatePass");
 

router.post("/forgetPassword",ForgetPassword_controllers)
router.post("/sindgrid",SingGrid_controllers )
router.post("/updatePass",UpdatePassword)





//---------------------------------- Get All Reguster User ----------------------------------------------//
const Get_User_Data=require("../../controllers/authntication-controllers/get_reguster_data");
router.get("/getDataReguster/:data",Get_User_Data)


module.exports=router
