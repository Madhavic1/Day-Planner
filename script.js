
   //this function makes sure that the contents of it will get run after the html contents are load to avoid load related errors.
    $(document).ready(function(){
  
     function printCurrentDate()
     {
        var NowMoment =moment().format("dddd, MMMM Do YYYY, h:mm:ss a"); 
        var eDisplayMoment = document.getElementById('currentDay');
        eDisplayMoment.innerHTML = NowMoment;
     }

     //this function createTimeBlocks creates the html code dynamically 
     function createTimeBlocks()
     {
        var rowDiv = $("<div>");
        rowDiv.css("class","row mb-2");
            var colDiv = $("<div>");
            colDiv.css("class","col-12 text-block d-flex");
            
                var hourDiv = $("<div>");
                $(hourDiv).attr({ width : "10%" , class : "hour"});
                hourDiv.text("9AM");

               // var textareaDiv = $("<div>");

            colDiv.appendChild(hourDiv);
            rowDiv.appendChild(colDiv);
            $(".container").appendChild(rowDiv);

     }

     //function  printCurrentDate prints the current day at the top of the page in jumbotron (heading)
     printCurrentDate();
    //  createTimeBlocks();
    

    //function saveTheNote will be triggered on click of sava button in each timeblock
    function saveTheNote(event)
    {

        //var parent_id = $(this).parent().parent().attr("id"); //gives row1
             

        var note = $(this).prev().val();    //the value of the note enetered in text area for each row
        var hour = $(this).prev().prev().text();//the value of hour mentioned in the first part of each row/timeblock

        alert("note "+note);
        alert(" time "+hour)

        localStorage.setItem(hour , note); //storing hour and input text on save botton click


    }

    $(".saveBtn").on("click",saveTheNote);

    });
    
