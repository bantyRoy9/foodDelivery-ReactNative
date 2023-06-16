const mobileRegex = /^\d{10}$/;

export const validMobileNumber = (number) =>{
    console.log(number)
    let msg = {status : true,msg:''}
    if(!mobileRegex.test(number)){
        msg.status = false;
        msg.msg = 'Enter Valid Mobile No. (10 digit)' 
        return msg
    }
    return msg
}