const jwt = require('jsonwebtoken')
const User = require("../Models/user.modal");

const { validMobileNumber, generateOtp, fast2smsFun } = require("../Utils/commonFunction");
const AppError = require('../Utils/AppError');


const accountSid = 'ACb2d4939a630b4f03db9780d9ecc58cf9';
const authToken = '9dff941d15655d6337138622cca3e942';
const verifySid = "VA69024330de0821095e4edfb01508dcca";
const client = require('twilio')(accountSid, authToken);

// const accountSid = "ACb2d4939a630b4f03db9780d9ecc58cf9";
// const authToken = "9dff941d15655d6337138622cca3e942";
// const client = require("twilio")(accountSid, authToken);
const createJSONWebToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRE
    })
};

const createSendToken = (user,statusCode,res) =>{
    const token = createJSONWebToken(user._id);
    console.log(token);
    const cookieOption = {
        expires: new Date(Date.now() + process.env.JWT_EXPIRE * 24 * 60 * 60 * 1000),
        // secure:true,
        httpOnly: true
    }

    res.cookie('jwt', token)

    res.status(statusCode).json({
        type:'success',
        token,
        data:user
    })
    // console.log()
}
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

        res.status(201).json({
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
       const verification = await client.verify.v2.services(verifySid).verifications.create({ 
            to: `+91${userCreated.phone}`, channel: "sms" 
        });
        console.log(verification.status);
        // .then((verification) => console.log(verification.status))
        // .then(() => {
//         const readline = require("readline").createInterface({
//                         input: process.stdin,
//                         output: process.stdout
//                     });

//   readline.question("Please enter the OTP:", (otpCode) => {
//     client.verify.v2
//       .services(verifySid)
//       .verificationChecks.create({ to: "+919709140588", code: otpCode })
//       .then((verification_check) => console.log(verification_check.status))
//       .then(() => readline.close());
//   });
//});
    } catch (error) {
        console.log(error);
    }

    


}

exports.verifyOtp = async(req,res,next)=>{
    try{
        const { phone,otp } = req.body;
        console.log(phone,typeof(otp));
        
        const response = await client.verify.v2.services(verifySid).verificationChecks.create({
            to:`+91${phone}`,
            code:otp
        });
        console.log(response,'verifyed');
        if(response.status !== 'aaproved' && !response.valid){
            next(new AppError(`Invalid Otp`), 400);
            return;
        }
        const user = await User.findOne({ phone });
        console.log(user);
        createSendToken(user,200,res);
    }catch(err){
        res.status(500).json({
            type:'error',
            message:err
        })
        console.log(err);
    }
}
exports.deleteUser= async(req, res, next)=>{
    try{
        const { phone } = req.body;
        const user = await User.findOneAndDelete({phone});

        if(!user){
            next(new AppError(`${phone} no longer exits`),400)
            return;
        };

        res.status(204).json({
            type:'Success',
            massege: 'Account deleted successfully',
            data: null
        });

    }catch(err){
        console.log(err);
    }
}