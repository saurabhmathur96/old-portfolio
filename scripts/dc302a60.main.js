!function(){"use strict";console.log("'Allo 'Allo!"),$(document).ready(function(){$(document).scroll(function(){var a=$(document).scrollTop(),b=$(window).height(),c=1-a/b;c>0&&(console.log(c),$("#intro-overlay").css("opacity",c))}),$("#projects-title").click(function(){$("#projects-overlay").toggleClass("clear-background")}),$("#resume-title").click(function(){$("#resume-overlay").toggleClass("clear-background")})})}();