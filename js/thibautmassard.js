// Thibaut Massard - JavaScript

(function($) {
  "use strict"; // Start of use strict

  // Initialization of tooltips
  $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
  });

  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
  });

  // Highlight the top nav as scrolling occurs
  $('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 51
  });

  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').click(function(){
    $('.navbar-toggle:visible').click();
  });

  // Offset for Main Navigation
  $('#mainNav').affix({
    offset: {
      top: 100
    }
  })

  // Images and charts revealing while scrolling - using scrollreveal.js
  window.sr = ScrollReveal();
  sr.reveal('.btnreveal', {delay:4700});
  sr.reveal('.image1', {delay:300});
  sr.reveal('.image2', {delay:300});
  sr.reveal('.image3', {delay:300});
  sr.reveal('.image4', {delay:300});
  sr.reveal('.image5', {delay:300});
  sr.reveal('.image6', {delay:300});
  sr.reveal('.java', {delay:1100});
  sr.reveal('.cpp', {delay:1300});
  sr.reveal('.javascript', {delay:1600});
  sr.reveal('.html', {delay:1800});
  sr.reveal('.lfr', {delay:300});
  sr.reveal('.len', {delay:500});
  sr.reveal('.lsp', {delay:700});
  sr.reveal('.mjava', {delay:300});
  sr.reveal('.mweb', {delay:500});
  sr.reveal('.mgame', {delay:700});

  // HTML/CSS Chart
  var chart1 = new Chartist.Pie('#chart1', {
    labels: ['60%'],
    series: [60]
  }, {
    donut: true,
    donutWidth: 15,
    startAngle: 270,
    total: 200,
  });
  // Javascript Chart
  var chart2 = new Chartist.Pie('#chart2', {
    labels: ['40%'],
    series: [40]
  }, {
    donut: true,
    donutWidth: 15,
    startAngle: 270,
    total: 200,
  });
  // C++ Chart
  var chart3 = new Chartist.Pie('#chart3', {
    labels: ['50%'],
    series: [50]
  }, {
    donut: true,
    donutWidth: 15,
    startAngle: 270,
    total: 200,
  });
  // Java Chart
  var chart4 = new Chartist.Pie('#chart4', {
    labels: ['50%'],
    series: [50]
  }, {
    donut: true,
    donutWidth: 15,
    startAngle: 270,
    total: 200,
  });
  // French Chart
  var chartfr = new Chartist.Pie('#chartfr', {
    labels: ['100%'],
    series: [100]
  }, {
    donut: true,
    donutWidth: 15,
    startAngle: 270,
    total: 200,
  });
  // English Chart
  var charten = new Chartist.Pie('#charten', {
    labels: ['100%'],
    series: [100]
  }, {
    donut: true,
    donutWidth: 15,
    startAngle: 270,
    total: 200,
  });
  // Spanish Chart
  var chartsp = new Chartist.Pie('#chartsp', {
    labels: ['50%'],
    series: [50]
  }, {
    donut: true,
    donutWidth: 15,
    startAngle: 270,
    total: 200,
  });

  // General function to draw the charts with an animation
  function drawChartTM (chart)
  {
	chart.on('draw', function(data) {
    if(data.type === 'slice') {
      // Get the total path length in order to use for dash array animation
      var pathLength = data.element._node.getTotalLength();
      // Set a dasharray that matches the path length as prerequisite to animate dashoffset
      data.element.attr({
        'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
      });
      // Create animation definition while also assigning an ID to the animation for later sync usage
      var animationDefinition = {
        'stroke-dashoffset': {
          id: 'anim' + data.index,
          dur: 2000,
          from: -pathLength + 'px',
          to:  '0px',
          easing: Chartist.Svg.Easing.easeOutQuint,
          // We need to use `fill: 'freeze'` otherwise our animation will fall back to initial (not visible)
          fill: 'freeze'
        }
      };
      // If this was not the first slice, we need to time the animation so that it uses the end sync event of the previous animation
      if(data.index !== 0) {
        animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
      }
      // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
      data.element.attr({
        'stroke-dashoffset': -pathLength + 'px'
      });
      // We can't use guided mode as the animations need to rely on setting begin manually
      // See http://gionkunz.github.io/chartist-js/api-documentation.html#chartistsvg-function-animate
      data.element.animate(animationDefinition, false);
	}
	});
  }

  // Draw all the charts
  drawChartTM(chart1);
  drawChartTM(chart2);
  drawChartTM(chart3);
  drawChartTM(chart4);
  drawChartTM(chartfr);
  drawChartTM(charten);
  drawChartTM(chartsp);

  // Border reveal throughout the page, depending on the window level in px
  window.onscroll = function() {borders()};
  function borders() {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
	  document.getElementById('ib1').className += " intro-border1-animation";
	  document.getElementById('ib2').className += " intro-border2-animation";
	  document.getElementById('ib3').className += " intro-border3-animation";
	  document.getElementById('ib4').className += " intro-border4-animation";
	  document.getElementById('ib5').className += " intro-border5-animation";
	  document.getElementById('ib6').className += " intro-border6-animation";
	  document.getElementById('ib7').className += " intro-border7-animation";
	  document.getElementById('ib8').className += " intro-border8-animation";
	  document.getElementById('ib9').className += " intro-border9-animation";
	  document.getElementById('ib10').className += " intro-border10-animation";
	  document.getElementById('ib11').className += " intro-border11-animation";
    }
    if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
	  document.getElementById('sb1').className += " story-border1-animation";
	  document.getElementById('sb2').className += " story-border2-animation";
	  document.getElementById('sb3').className += " story-border3-animation";
	  document.getElementById('sb4').className += " timeline-animation";
	  document.getElementById('sb5').className += " story-border5-animation";
    }
    if (document.body.scrollTop > 3600 || document.documentElement.scrollTop > 3600) {
	  document.getElementById('skb1').className += " skills-border1-animation";
    document.getElementById('skb2').className += " skills-border2-animation";
    document.getElementById('skb3').className += " skills-border3-animation";
    document.getElementById('skb4').className += " skills-border4-animation";
    document.getElementById('skb5').className += " skills-border5-animation";
    document.getElementById('skb6').className += " skills-border6-animation";
    document.getElementById('skb7').className += " skills-border7-animation";
    document.getElementById('skb8').className += " skills-border8-animation";
    document.getElementById('skb9').className += " skills-border9-animation";
    document.getElementById('skb10').className += " skills-border10-animation";
    document.getElementById('skb11').className += " skills-border11-animation";
    document.getElementById('skb12').className += " skills-border12-animation";
    document.getElementById('skb13').className += " skills-border13-animation";
    document.getElementById('skb14').className += " skills-border14-animation";
    document.getElementById('skb15').className += " skills-border15-animation";

    }
  }

  // Background scrolls speeds
  $("#parallax").each(function() {
    $scroll_speed = 5;
    $thisi = $(this);
    $(window).scroll(function() {
	  $bgScroll = -(($(window).scrollTop() - $thisi.offset().top) / $scroll_speed);
	  $bgPosition = 'center ' + $bgScroll + 'px';
	  $thisi.css({
	    backgroundPosition: $bgPosition
	  });
    });
  });

})(jQuery); // End of use strict
