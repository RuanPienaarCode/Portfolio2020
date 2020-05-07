var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();

function myFunction(){
    document.getElementById("counter").innerHTML = add();
}

function Currency(){
		y = document.getElementById("converter").value;
		return y;
	}
  function euroConverter(){
  document.converter.dollar.value = document.converter.euro.value * 1.170
  document.converter.pound.value = document.converter.euro.value * 0.88
  document.converter.rand.value = document.converter.euro.value * 15.80
  }
  function dollarConverter(){
  document.converter.euro.value = document.converter.dollar.value * 0.860
  document.converter.pound.value = document.converter.dollar.value * 0.76
  document.converter.rand.value = document.converter.dollar.value * 13.55
  }
  function poundConverter(){
  document.converter.dollar.value = document.converter.pound.value * 1.32
  document.converter.euro.value = document.converter.pound.value * 1.14
  document.converter.rand.value = document.converter.pound.value * 17.96
  }

  function randConverter(){
  document.converter.dollar.value = document.converter.rand.value * 0.074
  document.converter.pound.value = document.converter.rand.value * 0.056
  document.converter.euro.value = document.converter.rand.value * 0.074
  }
  //-->

function closewindow() {
window.close()
}


lerp = function(a,b,u) {
    return (1-u) * a + u * b;
};

fade = function(element, property, start, end, duration) {
  var interval = 10;
  var steps = duration/interval;
  var step_u = 1.0/steps;
  var u = 0.0;
  var theInterval = setInterval(function(){
    if (u >= 1.0){ clearInterval(theInterval) }
    var r = parseInt(lerp(start.r, end.r, u));
    var g = parseInt(lerp(start.g, end.g, u));
    var b = parseInt(lerp(start.b, end.b, u));
    var colorname = 'rgb('+r+','+g+','+b+')';
    el.style.setProperty(property, colorname);
    u += step_u;
  }, interval);
};

// in action
el = document.getElementById('bgcolor'); // your element
property = 'background-color';       // fading property
startColor = {r:255, g:  0, b:  0};  // red
endColor   = {r:  0, g:128, b:128};  // dark turquoise
fade(el,'background-color',startColor,endColor,10000);

// fade back after 2 secs
setTimeout(function(){
  fade(el,'background-color',endColor,startColor,10000);
},40000);
