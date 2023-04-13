import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import { sendMail } from "../utils/sendMail.js";


export const contactUs = catchAsyncError(async (req, res, next) => {
    const { name, email, message,phone } = req.body;

    if (!name || !email || !message || !phone)
        return next(new ErrorHandler("Please provide all the inputs !", 400));

    const msg = `Hi my name is ${name} my email is ${email} and my contact number ${phone} Here is my message  ${message}`;
    const subject = "Contact Us";
    const sendTo = process.env.MY_MAIL;
    await sendMail(sendTo, subject, msg);

    res.status(201).json({
        success: true,
        message: "Your message has been sent to the admin !"
    })
})

