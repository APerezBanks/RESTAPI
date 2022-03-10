const jwt = require("jsonwebtoken");
const User = require("./userModel");

//CRUD

exports.addUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    const token = await jwt.sign({ _id: newUser._id }, process.env.SECRET); 
    res.status(200).send({ user: newUser.username, token });
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    res.status(200).send({ user: req.user.username });
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};

exports.updatePassword = async (req, res) => {
    try {
      const updatedUser  = await User.updateOne(
        { username: req.user.username},
        {password: req.body.password}
        );
        if (updatedUser.modifiedCount > 0) {
          res.status(200).send({ msg: "Successfully updated User" })
        }
      
    } catch (error) {
      console.log(error);
      res.status(500).send({ err: error.message });
    
    }
};
exports.deleteUser = async (req, res) => {
    try {
        let result;
        if (req.user.username === req.params.username) {
          result = await User.deleteOne({ username: req.user.username });
        }
        if ( result.deletedCount > 0) {
          res.status(200).send({ msg: "User deleted"});
        }else{
          throw new Error("Nothing deleted");
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ err: error.message });
    }
};
