
   //this function makes sure that the contents of it will get run after the html contents are load to avoid load related errors.
    $(document).ready(function(){

      //function printCurrentDate() displays the current day 
     function printCurrentDate()
     {
        var NowMoment =moment().format("dddd, MMMM Do YYYY, h:mm:ss a"); 
        var displayMoment = document.getElementById('currentDay');
        displayMoment.innerHTML = NowMoment;
     }

     //this function createTimeBlocks creates the html code dynamically 
     function createTimeBlocks()
     {
     


   for(let i=9 ; i<18;i++){

      var rowDiv = $("<div>");
      rowDiv.attr("class","row mb-2");
      
      var rowId = `row${i}`;
      rowDiv.attr("id",rowId);

         var colDiv = $("<div>");
         colDiv.attr("class","col-12 text-block d-flex");

            var hourDiv = $("<div>");
            hourDiv.attr("class","hour text-right pr-2 pt-1");
            $(hourDiv).css({ width : "10%"});

            var time = (i>12) ? ((i-12)+"PM") : (i+"AM");
            if(i===12) time=i+"PM";  // for noon
            hourDiv.text(time);

            var textareaEl = $("<textarea>");
            textareaEl.css({width: "80%"});
            textareaEl.attr({class : "form-control p-0 pl-2 " , rows : "3"});

            var saveBtnEl = $("<button>");
            saveBtnEl.attr("class","saveBtn btn-lg h-100  fa fa-save");
            saveBtnEl.attr("title","Save");
            saveBtnEl.css({width:"10%","font-size":"24px"});

      colDiv.append(hourDiv,textareaEl,saveBtnEl);
      
      rowDiv.append(colDiv);
   $(".container").append(rowDiv);
      }
   }



    //function saveTheNote will be triggered on click of sava button in each timeblock
    function saveTheNote(event)
    {
        var note = $(this).prev().val();    //the value of the note enetered in text area for each row
        var hour = $(this).prev().prev().text();//the value of hour mentioned in the first part of each row/timeblock

        localStorage.setItem(hour , note); //storing hour and input text on save botton click
    }


    

    //function 
       function colorCodeTheTimeSlot_2(key, row_id) {

         var now = moment();
         var now_int = parseInt(now.format("H"));


          var toBeTestedDate = moment(key, "hA");
          var toBeTestedDate_int = parseInt(toBeTestedDate.format("H"));
          
          var diff_int = (now_int - toBeTestedDate_int);
          
          if (diff_int > 0) {
             //if the difference between now(current hour) and the selected hour is positive, then the selected hour is an old hour to current hour. 
             //So old hour row should be color coded in grey by using past class
            //  console.log(`"${key} is an old hour"`);

             $("#" + row_id).find("textarea").attr({ class: "past"}); // removed , disabled: true 

          }
          else if (diff_int < 0) {
            //  console.log(`"${key} is an future hour"`);
             $("#" + row_id).find("textarea").attr("class", "future");
          }
          else {

             $("#" + row_id).find("textarea").attr("class", "present");

                }
       }

    

    function displayStoredNotes()
    {

      var data;
      var key;

       for (let i = 9; i < 18; i++) {

          var row_id = "row" + i;

          key = (i < 12) ? `${i}AM` : `${i - 12}PM`;

          if (i === 12)
             key = `${i}PM`;  // for getting 12 pm

          colorCodeTheTimeSlot_2(key, row_id); //color codes the timeslots

          data = localStorage.getItem(key);
          $("#" + row_id).find("textarea").text(data);

       }



    }

   //function  printCurrentDate prints the current day at the top of the page in jumbotron (heading)
   printCurrentDate();

   createTimeBlocks();

   //function displayStoredNotes displays the already stored notes from the local storage on the page refresh.
     displayStoredNotes();

    $(".saveBtn").on("click",saveTheNote);

    //hover effects on Save buttons
       $(".saveBtn").hover(function () {
          $(this).css("background-color", "teal");
       },
          function () {
             $(this).css("background-color", "#06AED5");
          });



    });
    
