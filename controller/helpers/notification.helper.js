exports.sendSMS = async(phone) => {
    let code = Math.random(10);
    console.log(`Sendong SMS with code ${code} to phone number ${phone}`);
};