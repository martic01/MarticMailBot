$(document).ready(function () {
    $("#form").submit(function (event) {
        const value1Taken = $("#name1").val();
        const value2Taken = $("#name2").val();
        const value3Taken = $("#sch-name").val();
        const value4Taken = $("#intrest").val();
        const value5Taken = $("#email").val();
        const value6Taken = $("#number").val();
        const value7Taken = $("#date").val();

        $(".name1").html(value1Taken);
        $(".name2").html(value2Taken);
        $(".sch-name").html(value3Taken);
        $(".intrest").html(value4Taken);
        $(".email").html(value5Taken);
        $(".number").html(value6Taken);
        $(".date").html(value7Taken)



        $("#mail").show();
        $("#form").hide();
        $("#main").show();
        $(".count").show();
        $("#cop1").show();
        $("#cop2").hide();
        $("#copying1").show();
        $("#h12").hide();
        $("#but").show();
        $("#fileinspan").toggle();
        $("#file-span").toggle();

        event.preventDefault();
    });

    $("#sch").click(function () {
        $("#mncont").show()
        $("#mncont1").hide();
        $("#mncont2").hide();
        $("#form").show();
        $("#form2").hide();
        $("#form3").hide();
        $("#mail").hide();
        $("#main").hide();
        $("#copying1").hide();
        $(".count").hide();
        $("#h12").hide();
        $("#but").show();
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
        $("#copying1").toggle();
        $("#cop1").show();
        $("#cop2").hide();
        $("#main").hide();



        $(".name1").html("[Principal's Name]");
        $(".name2").html("[Your Name]");
        $(".sch-name").html("[School Name]");
        $(".intrest").html('[mention any specific programs, facilities, or values that resonate with you]');
        $(".email").html(" [Your Email Address]");
        $(".number").html("[Your Phone Number]");
        $(".date").html("[Present Date]")

    });

    $("#copy1").click(function () {
        let textToCopy = $("#mail").text();
        let tempTextarea = $("<textarea>");
        tempTextarea.val(textToCopy);
        $("body").append(tempTextarea);
        tempTextarea.select();
        document.execCommand("copy");
        $(tempTextarea).remove();


        $("#cop1").hide();
        $("#cop2").show();
        // $("#mail2").addClass(".copying");

    });


    $("#edit").click(function () {
        $("#h12").show();
        $("#but").hide();
        $("#main").hide();
        $("#form").show();
        $(".count").show();
        $("#fileinspan").toggle();
        $("#file-span").toggle()
        $("#cop1").show();
        $("#cop2").hide();
    });

    $("#new").click(function () {
        $(".count").hide();
        $("#main").hide();
        $("#mail").hide();
        $("#form").show();
        $("#fileinspan").toggle();
        $("#file-span").toggle()
        $("#copying1").hide();
        $("#cop1").show();
        $("#cop2").hide();


        $("#name1").val('');
        $("#name2").val('');
        $("#sch-name").val('');
        $("#intrest").val('');
        $("#email").val('');
        $("#number").val('');
    });


    // SECOUND FORM

    $("#form2").submit(function (event) {
        const value1Taken = $("#manager-nm").val();
        const value2Taken = $("#yrname").val();
        const value3Taken = $("#company").val();
        const value4Taken = $("#yrposition").val();
        const value5Taken = $("#nw-date").val();

        $(".manager-nm").html(value1Taken);
        $(".yrname").html(value2Taken);
        $(".company").html(value3Taken);
        $(".yrposition").html(value4Taken);
        $(".nw-date").html(value5Taken);




        $("#mail2").show();
        $("#form2").hide();
        $("#main2").show();
        $(".count").show();
        $("#cop4").show();
        $("#cop5").hide();
        $("#copying2").show();
        $("#h13").hide();
        $("#but2").show();
        $("#fileinspan2").toggle();
        $("#file-span2").toggle();


        event.preventDefault();
    });

    $("#resign").click(function () {
        $("#mncont").hide();
        $("#mncont1").show();
        $("#mncont2").hide();
        $("#form2").show();
        $("#form3").hide();
        $("#form").hide();
        $("#mail2").hide();
        $(".count").hide();
        $("#h13").hide();
        $("#but2").show();
        $("#fileinspan2").show();
        $("#file-span2").hide();
        $("#copying2").hide();



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
        $("#main2").hide();
        $("#copying2").toggle();
        $("#cop4").show();
        $("#cop5").hide();

        $(".manager-nm").html("[Manager's Name]");
        $(".yrname").html("[Your Name]");
        $(".company").html("[Company Name]");
        $(".yrposition").html("[Your Position]");
        $(".nw-date").html("[Present Date]");


    });

    $("#copy2").click(function () {
        let textToCopy = $("#mail2").text();
        let tempTextarea = $("<textarea>");
        tempTextarea.val(textToCopy);
        $("body").append(tempTextarea);
        tempTextarea.select();
        document.execCommand("copy");
        $(tempTextarea).remove();


        $("#cop4").hide();
        $("#cop5").show();
        // $("#mail2").addClass(".copying");

    });


    $("#edit2").click(function () {
        $("#h13").show();
        $("#but2").hide();
        $("#main2").hide();
        $("#form2").show();
        $(".count").show();
        $("#cop4").show();
        $("#cop5").hide();
        $("#fileinspan2").toggle();
        $("#file-span2").toggle()
    });

    $("#new2").click(function () {
        $(".count").hide();
        $("#main2").hide();
        $("#mail2").hide();
        $("#form2").show();
        $("#copying2").hide();
        $("#cop4").show();
        $("#cop5").hide();
        $("#fileinspan2").toggle();
        $("#file-span2").toggle()

        $("#manager-nm").val("");
        $("#yrname").val("");
        $("#company").val("");
        $("#yrposition").val("");
    });


    // THEIRD FORM

    $("#form3").submit(function (event) {
        const value1Taken = $("#employ-name").val();
        const value2Taken = $("#yr-name").val();
        const value3Taken = $("#hr-manager").val();
        const value4Taken = $("#hr-email").val();
        const value5Taken = $("#hr-number").val();
        const value6Taken = $("#name-company").val();
        const value7Taken = $("#yr-position").val();
        const value8Taken = $("#reason").val();
        const value9Taken = $("#day").val();

        $(".employ-name").html(value1Taken);
        $(".yr-name").html(value2Taken);
        $(".hr-manager").html(value3Taken);
        $(".hr-email").html(value4Taken);
        $(".hr-number").html(value5Taken);
        $(".name-company").html(value6Taken);
        $(".yr-position").html(value7Taken)
        $(".reason").html(value8Taken);
        $(".day").html(value9Taken)



        $("#mail3").show();
        $("#form3").hide();
        $("#main3").show();
        $(".count").show();
        $("#cop6").show();
        $("#cop7").hide();
        $("#copying3").show();
        $("#h14").hide();
        $("#but3").show();
        $("#fileinspan3").toggle();
        $("#file-span3").toggle();

        event.preventDefault();
    });

    $("#sack").click(function () {
        $("#mncont").hide();
        $("#mncont1").hide();
        $("#mncont2").show();
        $("#form").hide();
        $("#form2").hide();
        $("#form3").show();
        $("#mail3").hide();
        $(".count").hide();
        $("#h14").hide();
        $("#but3").show();
        $("#fileinspan3").show();
        $("#file-span3").hide();
        $("#copying3").hide();



        $("#employ-name").val("");
        $("#yr-name").val("");
        $("#hr-manager").val("");
        $("#hr-email").val("");
        $("#hr-number").val("");
        $("#name-company").val("");
        $("#yr-position").val("");
        $("#reason").val("");
        $("#day").val("");

    });

    $("#but3").click(function () {
        $("#form3").toggle();
        $("#mail3").toggle();
        $("#fileinspan3").toggle();
        $("#file-span3").toggle();
        $(".count").toggle();
        $("#edit3").show();
        $("#main3").hide();
        $("#copying3").toggle();
        $("#cop6").show();
        $("#cop7").hide();



        $(".employ-name").html("[Employee's Name]");
        $(".yr-name").html("[Your Name]");
        $(".hr-manager").html("[HR Manager's Name]");
        $(".hr-email").html("[HR Manager's Email Address]");
        $(".hr-number").html(" [HR Manager's Phone Number]");
        $(".name-company").html("[Company Name]");
        $(".yr-position").html(" [Your Position]")
        $(".reason").html("[reason for termination, e.g., a review of performance issues, violation of company policy, etc.]");
        $(".day").html("[Present Date]")

    });

    $("#copy3").click(function () {
        let textToCopy = $("#mail3").text();
        let tempTextarea = $("<textarea>");
        tempTextarea.val(textToCopy);
        $("body").append(tempTextarea);
        tempTextarea.select();
        document.execCommand("copy");
        $(tempTextarea).remove();


        $("#cop6").hide();
        $("#cop7").show();
        // $("#mail2").addClass(".copying");

    });



    $("#edit3").click(function () {
        $("#h14").show();
        $("#but3").hide();
        $("#main3").hide();
        $("#form3").show();
        $(".count").show();
        $("#cop6").show();
        $("#cop7").hide();
        $("#fileinspan3").toggle();
        $("#file-span3").toggle()
    });

    $("#new3").click(function () {
        $(".count").hide();
        $("#main3").hide();
        $("#mail3").hide();
        $("#form3").show();
        $("#fileinspan3").toggle();
        $("#file-span3").toggle();
        $("#copying3").hide();
        $("#cop6").show();
        $("#cop7").hide();


        $("#employ-name").val("");
        $("#yr-name").val("");
        $("#hr-manager").val("");
        $("#hr-email").val("");
        $("#hr-number").val("");
        $("#name-company").val("");
        $("#yr-position").val("");
        $("#reason").val("");
    });

});

