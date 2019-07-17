
$('#registro').on('show.bs.collapse', function (){
    $('#alta').collapse(
    'hide'
    );
});

$('#alta').on('show.bs.collapse', function (){
    $('#registro').collapse(
    'hide'
    );
});
