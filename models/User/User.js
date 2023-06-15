const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: { type: String, required: [true, "First name is required"] },
  lastName: { type: String, required: [true, "Last name is required"] },
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
