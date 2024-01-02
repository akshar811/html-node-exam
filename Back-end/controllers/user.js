const products = require("../models/product.schema");
const user = require("../models/user.schema");
const Razorpay = require("razorpay");


const signup = async (req, res) => {
  const { email } = req.body;
  const users = await user.findOne({ email: email });
  if (users != null) {
    return res.json({ msg: "Email ID already exists" });
  }

  let data = await user.create(req.body);
  res.send(data);
};

const login = async (req, res) => {
  const { email, password } = req.body;
  let users = await user.findOne({ email: email });
  if (!users) {
    return res.send({ USER: "user not found" });
  } else if (users.password != password) {
    return res.send({ USER: "password not match" });
  }
};

const product = async (req, res) => {
    let { title, description, price, img } = req.body;
    const data = await products.create(req.body)
    res.send({ msg: "product added succesfully", data });
}

const all = async (req, res) => {
    let data = await products.find();
    res.send(data);
  };

  
//payment

let razorpay = new Razorpay({
    key_id: "rzp_test_Jmrh2JYyArBNwD",
    key_secret: "SHnEMqyBwBhLBKspDV7LOODK",
  });
  
  const payment = (req, res) => {
    let { amount } = req.body;
    let options = {
      amount: amount * 100,
    };
    razorpay.orders.create(options, (err, order) => {
      if (err) {
        console.log(err);
        res.send({ data: err.message });
      } else {
        res.send(order);
      }
    });
  };
  

module.exports = { signup, login , product , all , payment };
