$(document).ready(function(){

    $("#myform").on('submit',function(event){
  var text=     $("#mytext").val()
    event.preventDefault();
    $("#board").append(
        '<div class="note">'+
        '<div class="pin">  </div>'+
        '<p>'+text+'</p>'+
        '</div>'
        )
        $("#mytext").val('');
        $("#mytext").focus();
    });


    $('#board').on('click','.pin', function(event){
        event.stopPropagation();
        $(this).parent().fadeOut(900);
    });

    $('#board').on('click','.note', function(){
        $(this).toggleClass('strike');
    });
})

