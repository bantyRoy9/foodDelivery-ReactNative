const { mobileNumberPattern } = require('./regex');
const fast2sms = require('fast-two-sms')
exports.validMobileNumber = (number) =>{
    const cleanedNumber = number.replace(/[\s\-]/g, '');
    return mobileNumberPattern.test(cleanedNumber);
};

exports.generateOtp=(otpLength)=>{
    if(otpLength.length<0) return;
    const otpArr =[];
    for(let i=0 ; i<otpLength;i++){
        otpArr.push(Math.floor(Math.random() * 10))
    }
    return otpArr.join('')
}

exports.fast2smsFun = async({message,contactNumber},next) =>{
    console.log(message,contactNumber,next,process.env.FAST2SMS);
    try{
        const response = await fast2sms.sendMessage({
            authorization : process.env.FAST2SMS,
            message,
            numbers: [ contactNumber ]
        });
        console.log(response,'response');
    }catch(error){
        console.log(error);
    }
}