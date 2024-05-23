$(document).ready(function () {
    $("#form").submit(function (event) {
        const name1Taken = $("#name1").val();
        const name2Taken = $("#name2").val();
        const schNameTaken = $("#sch-name").val();
        const intrestTaken = $("#intrest").val();
        const emailTakent = $("#email").val();
        const numberTaken = $("#number").val();

        $(".name1").html(name1Taken);
        $(".name2").html(name2Taken);
        $(".sch-name").html(schNameTaken);
        $(".intrest").html(intrestTaken);
        $(".email").html(emailTakent);
        $(".number").html(numberTaken);



        $("#mail").show();
        $("#form").hide();
        $("#main").show();
        $(".gen").show();

        event.preventDefault();
    });
    $("#sch").click(function () {
        $(".main-container").toggle();
    });

    $("#edit").click(function () {
        $("#main").hide();
        $("#form").show();
    });

    $("#new").click(function () {
        $("#name1").val('');
        $("#name2").val('');
        $("#sch-name").val('');
        $("#intrest").val('');
        $("#email").val('');
        $("#number").val('');

        $(".gen").hide();
        $("#main").hide();
        $("#mail").hide();
        $("#form").show();
    });


});

