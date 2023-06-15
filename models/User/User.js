const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: { type: String, required: [true, "First name is required"] },
  lastName: {},
  profilePhoto: {},
  email: {},
  bio: {},
  hashedPassword: {},
  postCount: {},
  isBlocked: {},
  isAdmin: {
    type: Boolean,
    default: false,
  },
  role: {},
  views: {},
});
