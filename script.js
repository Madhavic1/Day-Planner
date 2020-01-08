
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

    //function 
       function colorCodeTheTimeSlot(key, row_id) {
          var now = moment();

         // var now = moment("9AM", "hA");

          console.log("now is " + now.format("hA"));

          var toBeTestedDate = moment(key, "hA");
          var diff = now.diff(toBeTestedDate, "hours");
          if (diff > 0) {
             //if the difference between now(current hour) and the selected hour is positive, then the selected hour is an old hour to current hour. 
             //So old hour row should be color coded in grey by using past class
             console.log(`"${key} is an old hour"`);

             $("#" + row_id).find("textarea").attr({ class: "past", disabled: true });

          }
          else if (diff < 0) {
             console.log(`"${key} is an future hour"`);
             $("#" + row_id).find("textarea").attr("class", "future");
          }
          else {
             console.log(`"${key} is current hour"`);
             $("#" + row_id).find("textarea").attr("class", "present");

          }
       }

    function displayStoredNotes()
    {
      //  alert("loading data /... ");
      var data;
      
      var key;
     
      for(let i=9;i<=17;i++)
      {
         var row_id = "row"+i;
         console.log("row_id "+row_id);
         
        // key = i<12 ? `${i}AM` : `${i}PM`;
         if(i<12)
         {
            key = `${i}AM`;
            console.log("key for "+i+" is"+key);
            
         }
         else if(i===12)
         {
            key =  `${i}PM`;
         }
         else
         {
               key =  `${i-12}PM`
         }
        colorCodeTheTimeSlot(key,row_id);
         data = localStorage.getItem(key);
         // alert("data at "+key+"is = "+data);
         $("#"+row_id).find("textarea").text(data);

      }



    }

    //function displayStoredNotes displays the already stored notes from the local storage on the page refresh.
    displayStoredNotes();
    $(".saveBtn").on("click",saveTheNote);




    });
    
