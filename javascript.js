const d = new Date();
document.getElementById("date").innerHTML = d;




//////////////////////////////////////////////


var inputval = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var icon = document.querySelector('#icon')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
var hum = document.querySelector('#humidity')

apik = "3045dd712ffe6e702e3245525ac7fa38"

//kelvin to celcious. 1 Kelvin is equal to -272.15 Celsius.

function convertion(val){
    return (val - 273).toFixed(2)
}
//Now we have to collect all the information with the help of fetch method

btn.addEventListener('click', function(){



         //////////////////////////////////////////////////
       ////////////////////fetching 7 days data ///////////////////////////////
       fetch('https://api.openweathermap.org/data/2.5/forecast?q='+inputval.value+'&appid=3045dd712ffe6e702e3245525ac7fa38')
       .then(res => res.json())
       .then(data => {
      
            //day 1
            $('#temp0').html(convertion(data.list[0].main.temp_max) + '-' + convertion(data.list[0].main.temp_min) + ' C');
            $('#h0').html( data.list[0].main.humidity + 'g.kg-1');
            $('#w0').html(data.list[0].wind.speed + 'km/h');
            $('#des0').html(data.list[0].weather[0].description);

             //day 2
             $('#temp1').html(convertion(data.list[1].main.temp_max) + '-' + convertion(data.list[1].main.temp_min) + ' C');
             $('#h1').html( data.list[1].main.humidity + 'g.kg-1');
             $('#w1').html(data.list[1].wind.speed + 'km/h');
             $('#des1').html(data.list[1].weather[0].description);


            //day 3
            $('#temp2').html(convertion(data.list[2].main.temp_max) + '-' + convertion(data.list[2].main.temp_min) + ' C');
            $('#h2').html( data.list[2].main.humidity + 'g.kg-1');
            $('#w2').html(data.list[2].wind.speed + 'km/h');
            $('#des2').html(data.list[2].weather[0].description);

        
          //day 4
          $('#temp3').html(convertion(data.list[3].main.temp_max) + '-' + convertion(data.list[3].main.temp_min) + ' C');
          $('#h3').html( data.list[3].main.humidity + 'g.kg-1');
          $('#w3').html(data.list[3].wind.speed + 'km/h');
          $('#des3').html(data.list[3].weather[0].description);

           //day 5
           $('#temp4').html(convertion(data.list[4].main.temp_max) + '-' + convertion(data.list[4].main.temp_min) + ' C');
           $('#h4').html( data.list[4].main.humidity + 'g.kg-1');
           $('#w4').html(data.list[4].wind.speed + 'km/h');
           $('#des4').html(data.list[4].weather[0].description);

           //day 6
           $('#temp5').html(convertion(data.list[5].main.temp_max) + '-' + convertion(data.list[5].main.temp_min) + ' C');
           $('#h5').html( data.list[5].main.humidity + 'g.kg-1');
           $('#w5').html(data.list[5].wind.speed + 'km/h');
           $('#des5').html(data.list[5].weather[0].description);

           
            //day 7
          $('#temp6').html(convertion(data.list[6].main.temp_max) + '-' + convertion(data.list[6].main.temp_min) + ' C');
          $('#h6').html( data.list[6].main.humidity + 'g.kg-1');
          $('#w6').html(data.list[6].wind.speed + 'km/h');
          $('#des6').html(data.list[6].weather[0].description);


     })


/////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

//This is the api link from where all the information will be collected
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
        .then(res => res.json())

         //then(data => console.log(data))

        .then(data => {

//Now you need to collect the necessary information with the API link. Now I will collect that information and store it in different constants.

            var nameval = data['name']
            var descrip = data['weather']['0']['description']
            var iconcode = data['weather']['0']['icon']
            var tempature = data['main']['temp']
            var wndspd = data['wind']['speed']
            var humdit = data['main']['humidity']

            //fetching weather icon url 
            var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
            $('#icon').attr('src', iconurl);

//Now with the help of innerHTML you have to make arrangements to display all the information in the webpage.
            city.innerHTML=` <span>${nameval}<span>`
            temp.innerHTML = ` <span>${ convertion(tempature)} C</span>`
            description.innerHTML = ` <span>${descrip}<span>`
            wind.innerHTML = ` <span>${wndspd} km/h<span>`
            hum.innerHTML = ` <span>${humdit} g.kg-1<span>`
            icon.innerHTML = ` <span>${icon} g.kg-1<span>`

        })

//Now the condition must be added that what if you do not input anything in the input box.
        .catch(err => alert('You entered Wrong city name'))
   
   
   
   
      })







    //////////////////////////////////////////////////////////////////////////
    ///////////////////// FETCHING YOUR LOCATION /////////////////////////////
var mylocation , apik ;

function mylocation(){
   
    // JQUERY  for fetching location of device.
   var location ;
   $(document).ready(function(){
     
     $.get("https://ipinfo.io?token=c1916d264ec2ba" , function(response){
          // console.log(response);
          $("#cityoutput").html(response.city);
          $("#cityinput").html(response.city);
         
           location = response.city;
          // console.log(location);
           mylocation = location.toLowerCase();
          // console.log(location.toLowerCase());

          
          var inputval = mylocation;
          var city = document.querySelector('#cityoutput')
          var icon = document.querySelector('#icon')
          var descrip = document.querySelector('#description')
          var temp = document.querySelector('#temp')
          var wind = document.querySelector('#wind')
          var hum = document.querySelector('#humidity')

          apik = "3045dd712ffe6e702e3245525ac7fa38"


         function convertion(val){
            return (val - 273).toFixed(2)
         }


       //////////////////////////////////////////////////
       ////////////////////fetching 7 days data ///////////////////////////////

       fetch('https://api.openweathermap.org/data/2.5/forecast?q='+inputval+'&appid=3045dd712ffe6e702e3245525ac7fa38')
            .then(res => res.json())
            .then(data => {
            // console.log(data);
           
                 //day 1
                 $('#temp0').html(convertion(data.list[0].main.temp_max) + '-' + convertion(data.list[0].main.temp_min) + ' C');
                 $('#h0').html( data.list[0].main.humidity + 'g.kg-1');
                 $('#w0').html(data.list[0].wind.speed + 'km/h');
                 $('#des0').html(data.list[0].weather[0].description);
 
                  //day 2
                  $('#temp1').html(convertion(data.list[1].main.temp_max) + '-' + convertion(data.list[1].main.temp_min) + ' C');
                  $('#h1').html( data.list[1].main.humidity + 'g.kg-1');
                  $('#w1').html(data.list[1].wind.speed + 'km/h');
                  $('#des1').html(data.list[1].weather[0].description);
 

                 //day 3
                 $('#temp2').html(convertion(data.list[2].main.temp_max) + '-' + convertion(data.list[2].main.temp_min) + ' C');
                 $('#h2').html( data.list[2].main.humidity + 'g.kg-1');
                 $('#w2').html(data.list[2].wind.speed + 'km/h');
                 $('#des2').html(data.list[2].weather[0].description);

             
               //day 4
               $('#temp3').html(convertion(data.list[3].main.temp_max) + '-' + convertion(data.list[3].main.temp_min) + ' C');
               $('#h3').html( data.list[3].main.humidity + 'g.kg-1');
               $('#w3').html(data.list[3].wind.speed + 'km/h');
               $('#des3').html(data.list[3].weather[0].description);

                //day 5
                $('#temp4').html(convertion(data.list[4].main.temp_max) + '-' + convertion(data.list[4].main.temp_min) + ' C');
                $('#h4').html( data.list[4].main.humidity + 'g.kg-1');
                $('#w4').html(data.list[4].wind.speed + 'km/h');
                $('#des4').html(data.list[4].weather[0].description);

                 //day 6
                 $('#temp5').html(convertion(data.list[5].main.temp_max) + '-' + convertion(data.list[5].main.temp_min) + ' C');
                 $('#h5').html( data.list[5].main.humidity + 'g.kg-1');
                 $('#w5').html(data.list[5].wind.speed + 'km/h');
                 $('#des5').html(data.list[5].weather[0].description);

                 
                  //day 7
                $('#temp6').html(convertion(data.list[6].main.temp_max) + '-' + convertion(data.list[6].main.temp_min) + ' C');
                $('#h6').html( data.list[6].main.humidity + 'g.kg-1');
                $('#w6').html(data.list[6].wind.speed + 'km/h');
                $('#des6').html(data.list[6].weather[0].description);


          })


/////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////


          fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval+'&appid='+apik)
            .then(res => res.json())

            .then(data => {


              var nameval = data['name']
              var descrip = data['weather']['0']['description']
              var iconcode = data['weather']['0']['icon']
              var tempature = data['main']['temp']
              var wndspd = data['wind']['speed']
              var humdit = data['main']['humidity']

              var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
              $('#icon').attr('src', iconurl);

              city.innerHTML=` <span>${nameval}<span>`
              temp.innerHTML = ` <span>${ convertion(tempature)} C</span>`
              description.innerHTML = ` <span>${descrip}<span>`
              wind.innerHTML = ` <span>${wndspd} km/h<span>`
              hum.innerHTML = ` <span>${humdit} g.kg-1<span>`
          })

          .catch(err => alert('You entered Wrong city name'))

     }, "jsonp");
  
  
    } );

   

}


