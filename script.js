
   //this function makes sure that the contents of it will get run after the html contents are load to avoid load related errors.
    $(document).ready(function(){
  
     function printCurrentDate()
     {
        var NowMoment =moment().format("dddd, MMMM Do YYYY, h:mm:ss a"); 
        var eDisplayMoment = document.getElementById('currentDay');
        eDisplayMoment.innerHTML = NowMoment;
     }

     function createTimeBlocks()
     {
         var newDiv = $("<div>");
         newDiv.html("9AM"+$("<input class='form-control' type='text' placeholder='Default input'>")+$("<button>Save</button>"));
         $(".container").append(newDiv);
     }

     printCurrentDate();
    //  createTimeBlocks();
     

    });
    
