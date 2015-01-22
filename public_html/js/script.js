$('document').ready(function(){
$('.yeah').css('background-color','yellow');

$('#superhumans').accordion ({header: "h3"});

$('.2').css({'visibility': 'hidden', 'position':'absolute'});

$('div:last p:nth-child(3)').css ('background-color', 'pink');

$('div:last p:nth-child(3)').css('background-color', 'pink');

$("h1").bind('mouseover', mouseoverme).bind('mouseout', mouseoutme);

$('#replaceWtext').bind('click', replaceWtext);

$(".randpara").bind('click', addApara);

$('#removepara').bind('click', removeAPara);

$('#show').css('visibility', 'hidden');

$('#hide').bind('click', hidethepage);

});