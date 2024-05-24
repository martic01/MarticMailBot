$(document).ready(function () {
    $("#form").submit(function (event) {
        const name1Taken = $("#name1").val();
        const name2Taken = $("#name2").val();
        const schNameTaken = $("#sch-name").val();
        const intrestTaken = $("#intrest").val();
        const emailTaken = $("#email").val();
        const numberTaken = $("#number").val();
        const dateTaken = $("#date").val();

        $(".name1").html(name1Taken);
        $(".name2").html(name2Taken);
        $(".sch-name").html(schNameTaken);
        $(".intrest").html(intrestTaken);
        $(".email").html(emailTaken);
        $(".number").html(numberTaken);
        $(".date").html(dateTaken)



        $("#mail").show();
        $("#form").hide();
        $("#main").show();
        $(".count").show();
        $("#edit").show();
        $("#h12").hide();
        $("#but").show();
        $("#fileinspan").toggle();
        $("#file-span").toggle();

        event.preventDefault();
    });

    $("#sch").click(function () {
        $("#mncont").show();
        $("#form").show();
        $("#mncont1").hide();
        $("#form2").hide();
        $("#mail").hide();
        $(".count").hide();
        $("#fileinspan").show();
        $("#file-span").hide();



        $("#name1").val('');
        $("#name2").val('');
        $("#sch-name").val('');
        $("#intrest").val('');
        $("#email").val('');
        $("#number").val('');

    });

    $("#but").click(function () {
        $("#form").toggle();
        $("#mail").toggle();
        $("#fileinspan").toggle();
        $("#file-span").toggle();
        $(".count").toggle();
        $("#edit").show();
        $("#main").hide();



        $(".name1").html("[Principal's Name]");
        $(".name2").html("[Your Name]");
        $(".sch-name").html("[School Name]");
        $(".intrest").html('[mention any specific programs, facilities, or values that resonate with you]');
        $(".email").html(" [Your Email Address]");
        $(".number").html("[Your Phone Number]");
        $(".date").html("[Present Date]")

    });



    $("#edit").click(function () {
        $("#h12").show();
        $("#but").hide();
        $("#main").hide();
        $("#form").show();
        $(".count").toggle();
        $("#fileinspan").toggle();
        $("#file-span").toggle()
    });

    $("#new").click(function () {
        $(".count").hide();
        $("#main").show();
        $("#mail").hide();
        $("#form").show();
        $("#fileinspan").toggle();
        $("#file-span").toggle()


        $("#name1").val('');
        $("#name2").val('');
        $("#sch-name").val('');
        $("#intrest").val('');
        $("#email").val('');
        $("#number").val('');
    });



    $("#form2").submit(function (event) {
        const name1Taken = $("#manager-nm").val();
        const name2Taken = $("#yrname").val();
        const schNameTaken = $("#company").val();
        const intrestTaken = $("#yrposition").val();
        const emailTaken = $("#nw-date").val();

        $(".manager-nm").html(name1Taken);
        $(".yrname").html(name2Taken);
        $(".company").html(schNameTaken);
        $(".yrposition").html(intrestTaken);
        $(".nw-date").html(emailTaken);




        $("#mail2").show();
        $("#form2").hide();
        $("#main2").show();
        $(".count").show();
        $("#edit2").show();
        $("#h13").hide();
        $("#but2").show();
        $("#fileinspan2").toggle();
        $("#file-span2").toggle();


        event.preventDefault();
    });

    $("#resign").click(function () {
        $("#mncont1").show();
        $("#form2").show();
        $("#mncont").hide();
        $("#form").hide();
        $("#mail2").hide();
        $(".count").hide();
        $("#fileinspan2").show();
        $("#file-span2").hide();


        $("#manager-nm").val("");
        $("#yrname").val("");
        $("#company").val("");
        $("#yrposition").val("");
        $("#nw-date").val("");


    });

    $("#but2").click(function () {
        $("#form2").toggle();
        $("#mail2").toggle();
        $("#fileinspan2").toggle();
        $("#file-span2").toggle();
        $(".count").toggle();
        $("#edit2").show();
        $("#main2").hide();

        $(".manager-nm").html("[Manager's Name]");
        $(".yrname").html("[Your Name]");
        $(".company").html("[Company Name]");
        $(".yrposition").html("[Your Position]");
        $(".nw-date").html("[Present Date]");


    });


    $("#edit2").click(function () {
        $("#h13").show();
        $("#but2").hide();
        $("#main2").hide();
        $("#form2").show();
        $(".count").toggle();
        $("#fileinspan2").toggle();
        $("#file-span2").toggle()
    });

    $("#new2").click(function () {
        $(".count").hide();
        $("#main2").show();
        $("#mail2").hide();
        $("#form2").show();
        $("#fileinspan2").toggle();
        $("#file-span2").toggle()

        $("#manager-nm").val("");
        $("#yrname").val("");
        $("#company").val("");
        $("#yrposition").val("");
        $("#nw-date").val("");
    });


});

