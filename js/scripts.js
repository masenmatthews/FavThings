$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var favThing1 = $("input#favThing1").val();
    var favThing2 = $("input#favThing2").val();
    var favThing3 = $("input#favThing3").val();
    var favThing4 = $("input#favThing4").val();
    var favThing5 = $("input#favThing5").val();

    var favThingsArray = [favThing1, favThing2, favThing3, favThing4, favThing5];

    $(".favThing1").text(favThingsArray[0]);
    $(".favThing2").text(favThingsArray[1]);
    $(".favThing3").text(favThingsArray[2]);
    $(".favThing4").text(favThingsArray[3]);
    $(".favThing5").text(favThingsArray[4]);

    $("#favThingsList").show();

    event.preventDefault();
  });
});
