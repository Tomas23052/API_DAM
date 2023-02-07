const { isValidObjectId } = require("mongoose");
const db = require("../models");
const QRCode = db.code;

exports.sendQr = (req, res) => {
    const code = new QRCode({
        messageQR: req.body.messageQR
    });

   code.save((err) => {
    if(err) {
        res.status(500).send({ message: err,
            error : true
        });
        return;
    }

    res.send({message: "QRCode guardado",
        error: false});



   });
};

exports.fetchAll = (req, res) => {
    
   QRCode.find({}).then(function (qrcodes){
    res.send(qrcodes);
   });

    
};

exports.fetchOne = async(req,res) => {
    const id = await QRCode.findById(req.params.id)
    res.send(id)
}

exports.UpdateOne = async (req, res) =>{


  try{
    const update = await QRCode.findByIdAndUpdate(req.params.id, {
     messageQR: req.body.messageQR   
    },
    {new:true}
    )

    res.send(update)
    }catch(error){
        res.status(500).send("ID não encontrado")
    }


}

exports.DeleteOne = async (req,res) =>{
    
    try{
    const deleted = await QRCode.findByIdAndDelete(req.params.id)

    res.send(deleted)
    }catch(error){
        res.status(500).send("Código apagado com sucesso")
    }


    
}
