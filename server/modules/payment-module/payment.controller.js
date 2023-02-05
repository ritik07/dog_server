const Razorpay = require("razorpay");

const razorpay = new Razorpay({
  key_id: "rzp_test_mI6RCty36XBHuT",
  key_secret: "x9avu8E5x3T18EaNfe88erlC",
});

exports.processPayment = async (req, res, next) => {
  try {
    const { amount, currency } = req.body.inititateOrderDetail;

    const payment_capture = 1;
    const options = { amount, currency, payment_capture };
    
    const response = await razorpay.orders.create(options);

    console.log("response", response);

    const { id } = response;

    res.json({ orderId: id });
  } catch (error) {
    console.log("error", error);
    res.send(500).json({
      message: "something went wrong!",
    });
  }
};
