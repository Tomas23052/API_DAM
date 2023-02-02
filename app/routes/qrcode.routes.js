const controller = require("../controllers/qrcode.controller");
const db = require("../models");


module.exports = function(app){
    app.use(function(req,res,next){
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post("/api/qrcode/saved",
    controller.sendQr
    );

    app.get("/api/qrcode/all",
    controller.fetchAll
    );

    app.get("/api/qrcode/:id",
    controller.fetchOne)

    app.patch("/api/qrcode/change/:id",
    controller.UpdateOne
    )

    app.delete("/api/qrcode/:id",
    controller.DeleteOne)
}