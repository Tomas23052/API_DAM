const mongoose = require("mongoose");

const QrCode = mongoose.model(
    "QrCode",
    new mongoose.Schema({
        messageQR: String
    })
);

module.exports = QrCode;