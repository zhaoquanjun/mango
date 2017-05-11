
~function (desW) {
    var winW = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = winW / desW * 100 + "px";
}(640);

$('#features_list').on('click',function(e){

	if(e.target.nodeName.toUpperCase() === 'SPAN' && e.target.className.toUpperCase() === 'FIR'){
		$('.line_point b:first').animate({
			height:'+=0.6rem'
		},500);
		$('#features_list').click(function(){
			$('.line_point b:first').stop();
		})
		setTimeout(function () {
            $('.list li:first').fadeIn(2000);
        },500)

	}else if(e.target.nodeName.toUpperCase() === 'SPAN' && e.target.className.toUpperCase() === 'THR'){
        $('.line_point b:eq(2)').animate({
            height:'+=2rem'
        },600);
        $('#features_list').click(function(){
			$('.line_point b:eq(2)').stop();
		})
        setTimeout(function () {
             $('.list li:eq(2)').fadeIn(1000);
        },600)
       
	}else if(e.target.nodeName.toUpperCase() === 'SPAN' && e.target.className.toUpperCase() === 'FOR'){
        $('.line_point b:eq(1)').animate({
            height:'+=0.8rem'
        },800);
        $('#features_list').click(function(){
			$('.line_point b:eq(1)	').stop();
		})
        setTimeout(function () {
            $('.list li:eq(1)').fadeIn(1000);
        },800)      
    }
});


