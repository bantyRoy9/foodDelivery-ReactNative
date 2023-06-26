const User = require("../Models/user.modal");
const { validMobileNumber, generateOtp, fast2smsFun } = require("../Utils/commonFunction");
const AppError = require('../Utils/AppError');

const accountSid = 'ACb2d4939a630b4f03db9780d9ecc58cf9';
const authToken = 'dc29ac36313880f0a3d7150ddec2cb76';
const client = require('twilio')(accountSid, authToken);

exports.signUp = async (req, res, next) => {
    try {
        const { name, phone } = req.body;
        if (!validMobileNumber(phone)) {
            next(new AppError(`${phone} is not valid number`, 400));
            return
        };
        const phoneExit = await User.findOne({ phone });

        if (phoneExit) {
            next(new AppError(`${phone} is already registered`, 400));
            return
        };

        const userCreated = await User.create(req.body);

        res.status(200).json({
            type: 'success',
            massege: 'Account created OTP sended to mobile number',
            data: {
                userId: userCreated._id
            }
        });

        const createdOTP = generateOtp(6);

        userCreated.phoneOTP = createdOTP;


        await userCreated.save();
        // console.log(userCreated);
       const response = await client.messages.create({
            body: `Your otp is ${createdOTP}`,
            from: 9709140588,
            to: 7053193635
         });

         console.log(response);
        //.then(message => console.log('Message sent. SID:', message.sid))
        //     .catch(error => console.error('Error sending message:', error));

        // await fast2smsFun({
        //     message: `Your otp is ${createdOTP}`,
        //     contactNumber: userCreated.phone
        // }, next);
    } catch (error) {
        console.log(error);
    }


}