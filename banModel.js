const mongoose = require('mongoose')
const con = mongoose.connect('mongodb+srv://admin:admin@cluster0.l1ualfd.mongodb.net/?retryWrites=true&w=majority')

module.exports.db = con

var banSchema = new mongoose.Schema({
  guildId: String,
  memberId: String,
  banDuration: String,
  reason: String,
  author: String
});




module.exports = mongoose.model("ban", banSchema);
