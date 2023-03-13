document.getElementById('boton_ocultar').addEventListener('click', function(){
  document.getElementById('demo').style.display= 'none'; 
});

document.getElementById('boton_mostrar').addEventListener('click', function(){
  document.getElementById('demo').style.display= 'block'; 
});

document.getElementById('persona').addEventListener('mouseover', function () {
  document.getElementById('persona').style.color= '#ff4500';
});

document.getElementById('persona').addEventListener('mouseout', function () {
  document.getElementById('persona').style.color= '#0c7d97';
});

document.getElementById('persona2').addEventListener('mouseover', function () {
  document.getElementById('persona2').style.color= '#ff4500';
});

document.getElementById('persona2').addEventListener('mouseout', function () {
  document.getElementById('persona2').style.color= '#0c7d97';
});
