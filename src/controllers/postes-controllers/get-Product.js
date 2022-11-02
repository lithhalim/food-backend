const Post_Model=require("../../model/postes-model/post-model");
const Image_Model=require("../../model/postes-model/post_Images");
const Comment_Model=require("../../model/postes-model/post_comment");

module.exports=async(req,res)=>{
    const datause=await Post_Model.findAll({
        where:{id:req.params.data},
        include:[{model:Image_Model},{model:Comment_Model}]
        
    })
    res.json(datause)
}