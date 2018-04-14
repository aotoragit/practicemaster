var button = document.getElementById('button');
var form = document.getElementById('form');
var textarea_flg = -1;
var textarea = document.getElementById('textarea');
var maxTextNum = textarea.getAttribute('maxlength');
var remainingtimenum = 10;


var textmessage = document.createElement('div');
var parent = textarea.parentElement;
parent.insertBefore(textmessage, textarea);


var timeMessage = document.createElement('div');
parent.insertBefore(timeMessage, null);


button.addEventListener('click', function() {
    remainingtimenum = 10 ;

    var timerId = setInterval(function(){
      timeMessage.innerHTML = '<p>' + remainingtimenum +'second</p>';

      if(remainingtimenum <= 0 ){
        alert('time up'+remainingtimenum);
        clearInterval(timerId);
      }
      remainingtimenum--;

    },1000);

    textarea_flg = textarea_flg * -1;
    if(textarea_flg < 0){
      form.style.display = '';
      crearInterval(timerId);
      remainingtimenum = 10 ;
    }else{
      form.style.display = 'block';
    };

});

textarea.addEventListener('keyup', function() {
  var currentTextNum = textarea.value.length;
  textmessage.innerHTML = '<p>@'+(maxTextNum - currentTextNum)+'/'+maxTextNum+'</p>';
});

 