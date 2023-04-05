//jshint esversion:6
module.exports.getDate=getDate;
function getDate(){
    var date=new Date();
    var options={
        weekday:"long",
        day:"numeric",
        month:"long",
    }
   
    var today=date.toLocaleDateString("en-US",options);
    return today

}
module.exports.getDay=getDay;
function getDay(){
    var date=new Date();
    var options={
        weekday:"long",
    }
   
    var today=date.toLocaleDateString("en-US",options);
    return today

}
console.log(module.exports)


