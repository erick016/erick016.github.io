



var database = firebase.database();
var trainName = "";
var destName = "";
var firstTrainTime = "";
var timetableDelta = "";

$("#submit").on("click", function(event){
    event.preventDefault();
    trainName = $("#train-name").val().trim();
    destName = $("#destination").val().trim();
    firstTrainTime = $("#first-train-to-dest").val().trim();
    timetableDelta = $("#frequency").val().trim();
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
    

    var trainNameTd = $("#train-name").text(data.trainName || trainName);
    var destNameTd = $("#destination").text(data.destName || destName);
    var firstTrainTimeTd = $("#first-train-to-dest").text(data.firstTrainTime || firstTrainTime);
    var timetableDeltaTd = $("#frequency").text(data.timetableDelta || timetableDelta);

    var myDuration = moment.duration(parseInt(timetableDeltaTd), 'minutes');
    var firstTrainTimeS= moment.duration(parseInt(firstTrainTime).asSeconds());
    var firstTrainTimeMS = 1000 * firstTrainTimeS;
    var myDurationMS = myDuration * 60 * 1000;
    var numTrips = Math.ceil(firstTrainTime/myDurationMS);
    var leftoverMS = firstTrainTimeMS % myDurationMS;

    var arrivalTime24Hr = moment.duration(firstTrainTimeMS + myDurationMS).format("h:mm")
    var arrivalTime24HrStr = String(arrivalTime24Hr);

    var arrivalTimeTd = $("arrival-time").text(arrivalTime24HrStr);
   
    tRow.append(trainNameTd, destNameTd, firstTrainNameTd, timetableDeltaTd, arrivalTimeTd);
    
    tBody.append(tRow);
  };
database.ref().on("child_added", function(snapshot) {
    console.log(snapshot.val());
    createRow(snapshot.val());
  
  }, function(errorObject) {
    console.log("The read failed: " + errorObject.code);
  });


