const {Router } = require("express");
const { signup, login, product, all, payment } = require("../controllers/user");

const router = Router()

router.post("/signup",signup);

router.post("/login",login);

router.post("/create",product);

router.get("/find",all);

router.post("/paymnet",payment);

module.exports = {router}