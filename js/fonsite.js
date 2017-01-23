// куки
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') {
        options = options || {};
        if (value === null) {
            value = '';
            options = $.extend({}, options);
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString();
        }
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    }
  else {
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};

// 
var ChangefonEnable = true;
$(function(){
	var ChangefonDisableCook = $.cookie("fon_cound");
	if(ChangefonDisableCook > "0"){
		window.ChangefonEnable = false;
		$(".img_fon_site" + ChangefonDisableCook + "").addClass('fon-on');       
	}
	else {
		$("#bgfon").addClass('bgfon01');
	}
	if( ChangefonDisableCook == "01") {$("#bgfon").addClass('bgfon01');}
	if( ChangefonDisableCook == "02") {$("#bgfon").addClass('bgfon02');}
	if( ChangefonDisableCook == "03") {$("#bgfon").addClass('bgfon03');}
	if( ChangefonDisableCook == "04") {$("#bgfon").addClass('bgfon04');}
	if( ChangefonDisableCook == "05") {$("#bgfon").addClass('bgfon05');}
	if( ChangefonDisableCook == "06") {$("#bgfon").addClass('bgfon06');}
	if( ChangefonDisableCook == "07") {$("#bgfon").addClass('bgfon07');}
	if( ChangefonDisableCook == "08") {$("#bgfon").addClass('bgfon08');}
	if( ChangefonDisableCook == "09") {$("#bgfon").addClass('bgfon09');}
	if( ChangefonDisableCook == "10") {$("#bgfon").addClass('bgfon10');}
	if( ChangefonDisableCook == "11") {$("#bgfon").addClass('bgfon11');}
	if( ChangefonDisableCook == "12") {$("#bgfon").addClass('bgfon12');}
});

function ClickFon(idfon) {
	$.cookie("fon_cound", "" + idfon + "", {expires: 7, path: "/"});
	window.ChangefonEnable = false;
	$("#bgfon").removeClass();
	$(".img_fon_site01").removeClass('fon-on');
	$(".img_fon_site02").removeClass('fon-on');
	$(".img_fon_site03").removeClass('fon-on');
	$(".img_fon_site04").removeClass('fon-on');
	$(".img_fon_site05").removeClass('fon-on');
	$(".img_fon_site06").removeClass('fon-on');
	$(".img_fon_site07").removeClass('fon-on');
	$(".img_fon_site08").removeClass('fon-on');
	$(".img_fon_site09").removeClass('fon-on');
	$(".img_fon_site10").removeClass('fon-on');
	$(".img_fon_site11").removeClass('fon-on');
	$(".img_fon_site12").removeClass('fon-on');
	$(".img_fon_site" + idfon + "").addClass('fon-on');
	$("#bgfon").addClass("bgfon" + idfon + "");
}

function ShowHintDialog(data, object, showClose) {
  $("body").unbind("click");
  if(! showClose) {var showClose = false;}
  var closeBtn = "";
  if(showClose) {closeBtn = '<a href="#" onclick="HideHintDiaog(); return false;" style="display:block; font-size:0px; position:absolute; top:3px; right:3px; z-index:1000;"><img src="/images/fonsite/close_popup.png" alt="X" /></a>';}
  $(".popupHintOut").remove();
  $("body").append('<div class="popupHintOut" style="position:absolute; z-index:1000; top:0px; min-width:230px; left:0px; display:none;">'+closeBtn+'<div class="popupHintArrow"></div><div class="popupHintIn">'+data+'</div></div>');
  var hintWidth = $(".popupHintOut").width();
  var hintHeight = $(".popupHintOut").height();
  var scrollTop = $(window).scrollTop();
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();
  var objPosLeft = $(object).offset().left;
  var objPosTop = $(object).offset().top;
  var arrowWidth = 48;
  var arrowHeight = 10;
  if((hintHeight + arrowHeight+50) < (objPosTop - scrollTop)) {
    $(".popupHintOut .popupHintArrow").addClass('arrowBottom').css({left: "4px"});
    var positionTop = objPosTop - hintHeight - arrowHeight - 14;
  }
  else {
    $(".popupHintOut .popupHintArrow").addClass('arrowTop').css({left: "4px"});
    var positionTop = objPosTop + arrowHeight + $(object).height();
  }
  if((objPosLeft + hintWidth + 100) < windowWidth) {
    var positionLeft = Math.round(objPosLeft - ((arrowWidth - $(object).width()) / 2) - 2); 
  }
  else {
    var positionLeft = Math.round(objPosLeft - hintWidth + arrowWidth - ((arrowWidth - $(object).width()) / 2) - 2);
    $(".popupHintOut .popupHintArrow").css({left: "auto", right: "4px"});
  }
  $(".popupHintOut").css({top: positionTop+"px", left: positionLeft+"px"}).fadeIn('normal');
  setTimeout(function(){
    $("body").unbind("click").bind("click", function(e){
      e=e||window.event;
      var target=e.target||e.srcElement;
      while(target){
        if(target==$(".popupHintOut").get(0)) return;
        target=target.parentNode;
      }
      $(".popupHintOut").fadeOut('normal', function(){$(this).remove();});
      $("body").unbind("click");
    });
  }, 100);
}

function HideHintDiaog() {
	$(".popupHintOut").stop(true, true).fadeOut('normal',function() {$(this).remove();});
	$("body").unbind("click");
}
