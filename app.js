



var database = firebase.database();
var trainName = "";
var destName = "";
var firstTrainTime = "";
var timetableDelta = "";

$("#submit").on("click", function(event){
    event.preventDefault();
    trainName = $("#train-name-input").val().trim();
    destName = $("#destination-input").val().trim();
    firstTrainTime = $("#first-train-to-dest-input").val().trim();
    timetableDelta = $("#frequency-input").val().trim();
    database.ref().push({
        trainNameDB: trainName,
        destNameDB: destName,
        firstTrainNameDB: firstTrainTime,
        timetableDeltaDB: timetableDelta,
        arrivalTime24HrStrDB:  firstTrainTime + " " + timetableDelta
    });
    
    createRow();
});
var createRow = function(data) {
    var tBody = $("#tBodyID");
    var tRow = $("<tr>");
    

    var trainNameTd = $("#train-name-input").text(data.trainNameDB || trainName);
    var destNameTd = $("#destination-input").text(data.destNameDB || destName);
    var firstTrainTimeTd = $("#first-train-to-dest-input").text(data.firstTrainTimeDB || firstTrainTime);
    var timetableDeltaTd = $("#frequency-input").text(data.timetableDeltaDB || timetableDelta);

    var myDuration = moment.duration(parseInt(timetableDeltaTd), 'minutes');
    var firstTrainTimeS= moment.duration(parseInt(firstTrainTime).asSeconds());
    var firstTrainTimeMS = 1000 * firstTrainTimeS;
    var myDurationMS = myDuration * 60 * 1000;
    var numTrips = Math.ceil(firstTrainTime/myDurationMS);
    var leftoverMS = firstTrainTimeMS % myDurationMS;

    var arrivalTime24Hr = moment.duration(firstTrainTimeMS + myDurationMS).format("h:mm")
    var arrivalTime24HrStr = String(arrivalTime24Hr);

    var arrivalTimeTd = $("arrival-time").text(arrivalTime24HrStr);
   
    tRow.append(trainNameTd, destNameTd, firstTrainTimeTd, timetableDeltaTd, arrivalTimeTd);
    
    tBody.append(tRow);
  };
database.ref().on("child_added", function(snapshot) {
    console.log(snapshot.val());
    createRow(snapshot.val());
  
  }, function(errorObject) {
    console.log("The read failed: " + errorObject.code);
  });


