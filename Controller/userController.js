const usersInfo = require("../Models/user.js")


async function fetchUsers(req, res){
    try{
        const data = await usersInfo.getAllUsers()
        res.json({
            data
        })
   } catch (err){
       res.statusCode = 200;
       res.json({
           message:err.message,
       });
    }
   }

   async function createUser(req,res){
    // validate the data 
    const {email,password,first_name,last_name} = req.body
    // console.log(task)
    if(!email && password && first_name && last_name){
        return res.status(400).json({
            message : "Enter body data please"
        })
    }
    try{
        const userPro = await usersInfo.createUser(email,password,first_name,last_name)
        console.log(userPro)
        res.status(201).json({
            data : userPro
            
        });

    }catch (err){
        res.status(400).json({
            message:err.message
        });
    }
}


async function deleteUser(req,res){
    const user_id = req.params.id;

    const data = await usersInfo.getSpecificUser(user_id)

    if(!data){
        res.status(400).json({
            message: `Could not find the user with the id ${user_id}`
        })
    }
    try{
        await usersInfo.delete(user_id);
        return res.sendStatus(204)
    }catch (err){
        res.status(404).json({
            message:err.message
        })
    }
}


async function getUserById(req,res){
    const user_id = req.params.id
    
    if(!user_id){
        res.status(400).json({
            message:"No "
        })
}
try{
    const data = await usersInfo.getSpecificUser(user_id)
    res.status(200).json({
        data
    })
}catch (err){
    res.status(400).json({
        message:err.message
    })
    }
}

async function updateUser(req,res){
    const user_id = req.params.id
    const {email,password,first_name,last_name} = req.body 
    
    if(!email || password ||first_name || last_name){
        res.status(404).json({
            messgae:`Pls enter data either email, password,first name or last name `
        })
    }
    try{
        const data = await usersInfo.updateUser(user_id,email,password,full_name,last_name)
        res.status(200).json({
            data
        })
    }catch(err){
        res.status(404).json({
            message:err.message
        })
    }
}





module.exports = {
    fetchUsers,
    createUser,
    deleteUser,
    getUserById,
    updateUser
}