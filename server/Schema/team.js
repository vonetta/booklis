const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema(
  {
    teamName: {
      type: String,
      required: true,
      unique: true
    },
    members: [
      {
        playerName: {
          type: String
        },
        email: {
          type: String
        }
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("team", teamSchema);
