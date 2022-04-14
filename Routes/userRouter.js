const router = require('express').Router()
const {fetchUsers,getUserById,createUser,updateUser,deleteUser} = require("../Controller/userController")

router.get("/users", fetchUsers);

router.get("/users/:id", getUserById);

router.post("/users", createUser);

router.patch('/users/:id', updateUser);

router.delete('/users/:id', deleteUser)

module.exports = router