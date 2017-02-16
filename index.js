function checkCookie() {
	    var firstname=getCookie("firstname");
	    if (firstname!="") {
	        document.getElementById("welcome").innerHTML = "Welcome " + firstname + "!";
	    }
	    var color = getCookie("color");
	    if(color != ""){
		    document.getElementById("qs").style.backgroundColor = color;
	    }
	}
	
	function getCookie(cname) {
	    var name = cname + "=";
	    var ca = document.cookie.split(';');
	    for(var i=0; i<ca.length; i++) {
	        var c = ca[i];
	        while (c.charAt(0)==' ') c = c.substring(1);
	        if (c.indexOf(name) == 0) {
	            return c.substring(name.length, c.length);
	        }
	    }
    	return "";
	}

$(document).ready(function(){
	

  $('#submit').on('click', function () {
    var first = $("#firstname").val();
    var last = $('#lastname').val();
    var email= $("#email").val();
    var colors = $('#colors input:radio:checked').val();
    var d = new Date();
    d.setTime(d.getTime() + (10*24*60*60*1000)); //expries in 10 days
    var expires = "expires="+d.toUTCString();
    var firstname = "firstname=" + first + "; " + "lastname=" + last + "; " + "email=" + 
    			email + "; " + "color=" + colors + "; " + expires
    document.cookie = firstname;
    var lastname = "lastname=" + last + "; "
    document.cookie = lastname;
    var color = "color=" + colors + "; "
    document.cookie = color;
    
    var theCookies = document.cookie.split('; ');
    var aString = '';
    for (var i = 1 ; i <= theCookies.length; i++) {
        aString += i + ' ' + theCookies[i-1] + "\n";
    }
    alert(aString);
  });
  

});