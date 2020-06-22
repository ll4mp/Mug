$(function() {
    $(".following-button").hover(function(){
        $(this).text("Deixar de seguir");
    },
    function(){
       $(this).text("Seguindo");
    });
});



// // Get the modal
// var modal = document.getElementById('profile1');
function show(){
    document.getElementById('profile1').style.display='block'
}
$(document).mouseup(function(e) 
{
    var container = $("#profile1");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        container.hide();
    }

});

/*Dynamic placeholder*/
$('#placeholderID').attr("placeholder", "O que você está pensando?");

const input = document.getElementById('placeholderID');

input.addEventListener('input', updateValue);

    const placeholder = document.getElementById('placeholder');
  function updateValue(e) {
    let tam = e.target.textContent.length
    //If e.target.textContent.length is higher than 9 > Empty placeholder text
    if(tam > 0){
       $('#placeholderID').attr("placeholder", "");
    //Else if e.target.textContent.length is smaller than 1 > Fill placeholder with text
    } else if(tam < 1){
        $('#placeholderID').attr("placeholder", "O que você está pensando?");  
    }
 
 
}
