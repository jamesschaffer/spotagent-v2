$(function(){var e=function(){$(".loading").addClass("show");setTimeout(function(){$(".loading").removeClass("show")},2e3);setTimeout(function(){$(".pin-wrap .pin:first-child").addClass("main");$(".pin-wrap .pin:last-child").addClass("pulse")},2200)},t=function(){setTimeout(function(){$(".parking-result").removeClass("hide")},3e3)},n=function(){for(var e=0;e<=47;e++){var t=Math.ceil(Math.random()*100),n=$(".chart").append("<li></li>").children().last();n.css("height",t+"px")}$(".chart li").each(function(){$(this).height()<33?$(this).addClass("low"):$(this).height()>66?$(this).addClass("med"):$(this).addClass("high")})};n();$(".btn.search").click(function(){$(this).toggleClass("active");$(".search-container").toggleClass("show");$(".search-query").focus();$(".parking-result").addClass("hide")});$(".btn.my-location").click(function(){$(this).toggleClass("active");t();e();$(".address").text("267 W 31st St")});$(".icon-remove").click(function(){$(".search-query").val(" ")});$(".form-search").submit(function(n){n.preventDefault();$(".search-query").blur();$(".search-container").toggleClass("show");$(".address").text($(".search-query").val());t();e()});$(".history-btn").click(function(){$(".parking-result").toggleClass("show-chart")});$("history-contain").html(function(){})});