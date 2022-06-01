localStorage.setItem("ExecuteCheck","false");

$(document).ready(function() {

    // getUpdates();
         GetDataSensor4();
         GetDataSensor2();
         GetDataSensor3();
         GetData();

     // check for new updates
     setInterval('GetData()',30000);
     setInterval('GetDataSensor2()',30000);
     setInterval('GetDataSensor3()',30000);
     setInterval('GetDataSensor4()',30000);

 });

 /*function getUpdates() {

     // get the data with a webservice call
      
     $.getJSON('http://api.thingspeak.com/channels/1708546/feed/last.json?callback=?',function(data) {
         alert(data.field1);
     });

 }*/
 function GetData()
 {
     var url = 'https://api.thingspeak.com/channels/1708546/feed/last.json?callback=?';
     $.ajax
     ({
         url: url,
         type: 'GET',
         contentType: "application/json",
         //dataType: "json",
         //crossDomain: true,
         success: function (data, textStatus, xhr) {
         var inspect = parseFloat(data.field1);
         var inspectSecond = parseFloat(data.field2);
         if (localStorage.getItem("ExecuteCheck") == "true")
         {
         if(inspect >= 40){
             execute("Sensor 1 temperature is greater than 40");
         }
         else if (inspect < 0)
         {
             execute("Sensor 1 temperature is less than 0");
         }
         if(inspectSecond >= 40){
             execute("Sensor 1 humidity is greater than 40");
         }
         else if (inspectSecond < 0)
         {
             execute("Sensor 1 humidity is less than 0");
         }
         
         
         }
        }
     });
 }
 function GetDataSensor2()
 {
     var url = 'https://api.thingspeak.com/channels/1737929/feed/last.json?callback=?';
     $.ajax
     ({
         url: url,
         type: 'GET',
         contentType: "application/json",
         //dataType: "json",
         //crossDomain: true,
         success: function (data, textStatus, xhr) {
             var inspect = parseFloat(data.field1);
         var inspectSecond = parseFloat(data.field2);
         if (localStorage.getItem("ExecuteCheck") == "true")
         {
         if(inspect >= 40){
             execute("Sensor 2 temperature is greater than 40");
         }
         else if (inspect < 0)
         {
             execute("Sensor 2 temperature is less than 0");
         }
         if(inspectSecond >= 40){
             execute("Sensor 2 humidity is greater than 40");
         }
         else if (inspectSecond < 0)
         {
             execute("Sensor 2 humidity is less than 0");
         }
         
         
         }
        }
     });
 }
 function GetDataSensor3()
 {
     var url = 'https://api.thingspeak.com/channels/1738066/feed/last.json?callback=?';
     $.ajax
     ({
         url: url,
         type: 'GET',
         contentType: "application/json",
         //dataType: "json",
         //crossDomain: true,
         success: function (data, textStatus, xhr) {
             var inspect = parseFloat(data.field1);
         var inspectSecond = parseFloat(data.field2);
         if (localStorage.getItem("ExecuteCheck") == "true")
         {
         if(inspect >= 40){
             execute("Sensor 3 temperature is greater than 40");
         }
         else if (inspect < 0)
         {
             execute("Sensor 3 temperature is less than 0");
         }
         if(inspectSecond >= 40){
             execute("Sensor 3 humidity is greater than 40");
         }
         else if (inspectSecond < 0)
         {
             execute("Sensor 3 humidity is less than 0");
         }
         
         
         }
        }
         
     });
 }
 function GetDataSensor4()
 {
     var url = 'https://api.thingspeak.com/channels/1738082/feed/last.json?callback=?';
     $.ajax
     ({
         url: url,
         type: 'GET',
         contentType: "application/json",
         //dataType: "json",
         //crossDomain: true,
         success: function (data, textStatus, xhr) {
            if (localStorage.getItem("ExecuteCheck") == "true")
            {
         var inspect = parseFloat(data.field1);
         var inspectSecond = parseFloat(data.field2);
         if(inspect >= 40){
             execute("Sensor 4 temperature is greater than 40");
         }
         else if (inspect < 0)
         {
             execute("Sensor 4 temperature is less than 0");
         }
         if(inspectSecond >= 40){
             execute("Sensor 4 humidity is greater than 40");
         }
         else if (inspectSecond < 0)
         {
             execute("Sensor 4 humidity is less than 0");
         }
         
         
         }
        }
     });
 }

 function execute(message){
     newmessage = message.replaceAll(' ', '+');
 var request = new XMLHttpRequest()
 request.open('GET', 'https://api.telegram.org/bot5320091799:AAFce-Z2hWyczKEpNwDlw1THTt3GhLQDzz8/sendMessage?chat_id=-1001657741927&text='+newmessage, true)
 request.send()
 alert(message);
}
function enable(){
    localStorage.setItem("ExecuteCheck","true");
    execute("Notifications will be sent to the users cellphone");
}

function disable(){
    localStorage.setItem("ExecuteCheck","false");
    execute("No notifications will be sent to users cellphone number")
}