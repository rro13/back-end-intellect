const express = require("express")
const router = express.Router()

const controllerExp = require("../controllers/expertsController")

router.get("/all",controllerExp.getAllExperts)
router.get("experts/:id",controllerExp.getExpert)
router.post("/create",controllerExp.createExpert)
router.patch("/update/:id",controllerExp.updateExpert)
router.delete("/delete",controllerExp.deleteExpert)

module.exports = router
