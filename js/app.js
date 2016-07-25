var $nav = $('#main-nav').children('a').children('img');
var $iconBell = $('#icon-bell');
var $dot = $('#dot');
var $notificationPop = $('#notificationPopUp');
var $alert = $('#alert');
var $xIcon = $('#xIcon');
var $search = $('.search');
var $search2 = $('#search2');
var $traffic = $('#trafficData').children('li').children('a');
var $userMsg = $('#userMessage');
var $fakeSubmitBtn = $('#sendButton');


$nav.bind({
  mousedown: function() {
    $(this).removeClass('selected');
  },
  click: function() {
    $nav.removeClass('selected');
    $(this).addClass('selected');
  }
});

$(document).scroll(function() {
  if($(this).scrollTop() > 175) {
     $('#main-header').css({
       'position': 'fixed',  
       'width': '100vw',
       'z-index': '100',
       'opacity': '0.8'
     }),
     $('#main-nav').css({
        'position': 'fixed',
        'width': '100vw',
        'z-index': '0',
        'top': '69px',
        'opacity': '0.8'
     });
   } else {
        $('#main-header').css({
        	'position': 'relative',
        	'opacity': '1'
    	});
        $('#main-nav').css({
            'position': 'relative',
            'top': '0',
            'opacity': '1',
     });    
   }
});
$(document).ready(function() {
	var $img = $('#main-nav').children('a').children('img');
	$img.mouseover(function() {
		$(this).css('opacity', '1');
	})
	.mouseout(function() {
		$(this).css('opacity', '0.6');
	});
});

$(document).ready(function() {
   $notificationPop.hide()
});

$iconBell.click(function() {
   if($notificationPop.is(':visible')) {
      $notificationPop.hide();
      $dot.show();
  } else {
      $notificationPop.show();
      $dot.hide();
  }
});


$xIcon.click(function() {
  $alert.hide();
});

$search.autocomplete({
   source: [
        "Alfonso Breneman", 
        "Alisia Bingerman",
        "Hilda Armstrong",
        "Friedrich Nietzsche"
  ],
   autoFocus: true
});

$traffic.click(function() {
  $traffic.removeClass('click');
  $(this).addClass('click');
});

$($traffic).on("click", function () {
    $('#container-1').children("canvas").addClass("notDisplay");
    var i = $(this).parent().index();
    var $canvas = $("#container-1").children("canvas")[i - 1];
    $($canvas).removeClass("notDisplay");
});

$fakeSubmitBtn.click(function( event ) {
	  event.preventDefault();
	  if($search2.val() === "") {
	     $('.alertMsg').text("You have to select user to whom you'll write message.");
	  } else if($userMsg.val() === "") {
	     $('.alertMsg').text("You have to write some text into the textfield.");
	  } else {
	     $('.alertMsg').text("Your message has been successfully sent.");
	  }
});


 window.onload = function() {

        // If sessionStorage is storing default values (ex. name), exit the function and do not restore data
        if (sessionStorage.getItem('search') == "search") {
            return;
        } else if(sessionStorage.getItem('userMessage') == "userMessage") {
            return;   
        } else if(sessionStorage.getItem('timezone') == "timezone") {
            return;    
        }

        // If values are not blank, restore them to the fields
        var search = sessionStorage.getItem('search');
        if (search !== null) $('#search2').val(search);

        var userMessage = sessionStorage.getItem('userMessage');
        if (userMessage !== null) $('#userMessage').val(userMessage);

        var timezone = sessionStorage.getItem('timezone');
        if (timezone !== null) $('#timezone').val(timezone);
    }

    // Before refreshing the page, save the form data to sessionStorage
    window.onbeforeunload = function() {
        sessionStorage.setItem("search", $('#search2').val());
        sessionStorage.setItem("userMessage", $('#userMessage').val());
        sessionStorage.setItem("timezone", $('#timezone').val());
    }

    function pageload() {
    var isTrueEmail = (sessionStorage.email === 'true');
    $("#email").prop("checked", isTrueEmail);

    var isTruePublic = (sessionStorage.public === 'true');
    $("#public").prop("checked", isTruePublic);

	}

	function setStyles() {
	    sessionStorage.email = $("#email").prop("checked");
	    sessionStorage.public = $("#public").prop("checked");
	}

	function removeStyles() {
	    $("#email").prop("checked", false);
	    $("#public").prop("checked", false);
	    setStyles();

	}

	pageload();

	$("#saveButton").click(function () {
	    setStyles();
	});
	    