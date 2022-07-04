$(function(){
    console.log("This is my quiz");
    $(".lorem").hover(loadText);
    $("#img3").mouseover(fade);
    
})

function loadText()
{
    $.ajax({
        url:"Student.txt",
        method: "GET",
        success: function(response)
        {
            console.log(response);
            var para = $(".lorem");
            para.empty();
            para.append(response);

        }
    })
}

function fade()
{
    $(this).fadeOut();
    $(this).fadeIn();
}