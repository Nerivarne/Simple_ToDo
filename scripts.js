$("submit").text("Add todo");


$("#myForm").submit(function(e) {
    var val = $(this).find("#in").val();
    $("ul").append("<li>" + val + "</li>"); 
    e.preventDefault();
    })

    $(".list").click(function (h) {
        $(this).remove();
        h.preventDefault();  
    })
$("ul").sortable();


