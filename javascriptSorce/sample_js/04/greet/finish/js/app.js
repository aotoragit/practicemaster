var name = prompt('名前を入力して下さい');
greet(name);

function greet(name) {
  var message = 'こんにちは';
  alert(message + name);
  return;
}
