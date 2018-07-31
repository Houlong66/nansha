/**
 * 南沙企业智能服务平台
 */


$(function(){
	
//tab切换
	$('.tab_head li').click(function(){
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
		var num=$(this).index();
		$(this).parent().next().children().eq(num).addClass('dis_b');
		$(this).parent().next().children().eq(num).siblings().removeClass('dis_b');
	});
	
//用户登录弹窗
 $('#denglu').click(function(){
	 $('.login_box').fadeIn();
	  $(".zhezhao").css('opacity','0.8');
	  $(".zhezhao").fadeIn();
	 });
$('#login_btn,.zhezhao').click( function(){
	 $('.login_box').fadeOut();
	  $(".zhezhao").fadeOut();
	});	

//自动提示
	$("#zsbh").change(function(){
			$('.user_list').fadeIn();
			});
		$("#zsbh").click(function(){
			$('.user_list').fadeIn();
			});	
		$(".user_list li").click(function(){
			$('#zsbh').val($(this).text());
			$(this).parent().fadeOut();
			});
			
	$("#login_btn").click(function(){
		var a=$('#zsbh').val();
			$(this).prop("href","user_center.html");
		});
	//客服弹窗
		
$(function(){
	$('#zxkf').click(
	function(){
		$('.mywindow').fadeIn();
		})
	});	
			
$(function(){
	$('.win_close').click(
	function(){
		$(this).parent('.mywindow').fadeOut();
		})
	});	
$(function(){
	$('.in_btn').click(
	function(){
		$(this).parents('.mywindow').fadeOut();
		})
	});		
			
});

	

	
	
	
	
	
	
	
	