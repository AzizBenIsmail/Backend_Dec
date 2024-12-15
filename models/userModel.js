const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema(
  {
    username: String ,
    age: Number,
    image_user: { type: String, required: false, default: "client.png" },
    email: { type: String, require: true, unique: true },
    password: {type: String, require: true,     },
    role: { type: String, enum: ["admin", "client"] },
    isconnect : Boolean
  },
  { timestamps: true }
);

userSchema.pre('save', async function (next){
    try {
        const salt = await bcrypt.genSalt()
        const User = this 
        User.password = await bcrypt.hash(User.password, salt)
        User.isconnect = false;
        next()
    } catch (error) {
        next(error);
    }
})

const User = mongoose.model("User", userSchema);
module.exports = User;