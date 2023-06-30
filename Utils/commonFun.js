const mobileRegex = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/;;

export const validMobileNumber = (number) =>{
    let msg = {status : true,msg:''}
    if(!mobileRegex.test(number)){
        msg.status = false;
        msg.msg = 'Enter Valid Mobile No. (10 digit)' 
        return msg
    }
    console.log(number,msg)
    return msg
}