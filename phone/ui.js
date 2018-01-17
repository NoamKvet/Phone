
$(document).ready(function(){
    // On 'Esc' call close method
    document.onkeyup = function(data) {
        if (data.which == 27) {
            $.post('http://basic/phoneclose', JSON.stringify({}));
        }
    };
    
    // Listens for NUI messages from Lua 
    window.addEventListener( 'message', function( event ) {
        var item = event.data;
        
        // Show the menu 
        if ( item.showPlayerMenu == true ) {
            $(".playerMenuContainer").css("display", "block");
        } else if ( item.showPlayerMenu == false ) {// Hide the menu 
            $(".playerMenuContainer").css("display", "none");
        }
    } );

    $(".btnClose").click(function(){
        $.post('http://basic/phoneclose', JSON.stringify({}));
    });

    
	$(".btnContact").click(function(){
        $.post('http://basic/ContactLoad', JSON.stringify({}));
    });

	$(".btn911").click(function(){
        $.post('http://basic/911Load', JSON.stringify({}));
    });

	$(".btnTow").click(function(){
        $.post('http://basic/TowLoad', JSON.stringify({}));
    });

	$(".btntwitter").click(function(){
        $.post('http://basic/twitterLoad', JSON.stringify({}));
    });

	$(".btnuber").click(function(){
        $.post('http://basic/uberLoad', JSON.stringify({}));
    });

	$(".btnUnkown1").click(function(){
        $.post('http://basic/Unkown1Load', JSON.stringify({}));
    });

	$(".btnUnkown2").click(function(){
        $.post('http://basic/Unkown2Load', JSON.stringify({}));
    });

	$(".btnUnkown3").click(function(){
        $.post('http://basic/Unkown3Load', JSON.stringify({}));
    });

	$(".btnUnkown4").click(function(){
        $.post('http://basic/Unkown4Load', JSON.stringify({}));
    });

	$(".btnUnkown5").click(function(){
        $.post('http://basic/Unkown5Load', JSON.stringify({}));
    });

	$(".btnUnkown6").click(function(){
        $.post('http://basic/Unkown6Load', JSON.stringify({}));
    });

	$(".btnUnkown7").click(function(){
        $.post('http://basic/Unkown7Load', JSON.stringify({}));
    });

	$(".btnUnkown8").click(function(){
        $.post('http://basic/Unkown8Load', JSON.stringify({}));
    });

	$(".btnUnkown9").click(function(){
        $.post('http://basic/Unkown9Load', JSON.stringify({}));
    });

	$(".btnUnkown10").click(function(){
        $.post('http://basic/Unkown10Load', JSON.stringify({}));
    });

	$(".btnUnkown11").click(function(){
        $.post('http://basic/Unkown11Load', JSON.stringify({}));
    });

	$(".btnUnkown12").click(function(){
        $.post('http://basic/Unkown12Load', JSON.stringify({}));
    });

	$(".btnUnkown13").click(function(){
        $.post('http://basic/Unkown13Load', JSON.stringify({}));
    });

	$(".btnUnkown14").click(function(){
        $.post('http://basic/Unkown14Load', JSON.stringify({}));
    });

	$(".btnUnkown15").click(function(){
        $.post('http://basic/Unkown15Load', JSON.stringify({}));
    });

	$(".btnUnkown16").click(function(){
        $.post('http://basic/Unkown16Load', JSON.stringify({}));
    });

	$(".btnUnkown17").click(function(){
        $.post('http://basic/Unkown17Load', JSON.stringify({}));
    });

	$(".btnUnkown18").click(function(){
        $.post('http://basic/Unkown18Load', JSON.stringify({}));
    });

	$(".btnUnkown19").click(function(){
        $.post('http://basic/Unkown49Load', JSON.stringify({}));
    });


    });
})


