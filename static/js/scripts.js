$("#mouseClick").click(function () {
  alert('Evento click');
});

$("#mousedbClick").dblclick(function () {
  alert('Evento doble click');
});

$("#eventoonmousedown").mousedown(function () {
  alert('Evento on mouse down');
});

$("#eventoeventoonmouseenter").mouseenter(function () {
  alert('Evento mouseenter');
});

$("#eventomouseleave").mouseleave(function () {
  alert('Evento mouseleave');
});

$("#eventomousemove").mousemove(function () {
  alert('Evento mousemove');
});
$("#eventomouseover").mouseover(function () {
  alert('Evento mouseover');
});
$("#eventomouseout").mouseout(function () {
  alert('Evento mouseout');
});
$("#eventomouseup").mouseup(function () {
  alert('Evento mouseup');
});

$("#mouseScrolldown").click(function () {
  var n = $(document).height();
  $('html, body').animate({ scrollTop: n }, 50);
});

$("#mouseScrollUp").click(function () {
  $('html, body').animate({ scrollTop: 0 }, 50);
});

$("#mouseBTN").click(function () {

  elemento = document.getElementById('botonesScroll')
  if (botonesScroll.hidden == false) {
    botonesScroll.hidden = true;

  } else {
    botonesScroll.hidden = false;


  }
});