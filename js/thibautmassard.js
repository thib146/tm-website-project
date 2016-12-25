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
  var chart1options1 = {
    labels: ['60%'],
    series: [60]
  };
  var chart1options2 = {
    donut: true,
    donutWidth: 15,
    startAngle: 270,
    total: 200,
  };
  var chart1 = new Chartist.Pie('#chart1', chart1options1, chart1options2);
  var chart1mob = new Chartist.Pie('#chart1mob', chart1options1, chart1options2);
  // Javascript Chart
  var chart2options1 = {
    labels: ['40%'],
    series: [40]
  };
  var chart2options2 = {
    donut: true,
    donutWidth: 15,
    startAngle: 270,
    total: 200
  };
  var chart2 = new Chartist.Pie('#chart2', chart2options1, chart2options2);
  var chart2mob = new Chartist.Pie('#chart2mob', chart2options1, chart2options2);
  // C++ Chart
  var chart3options1 = {
    labels: ['50%'],
    series: [50]
  };
  var chart3options2 = {
    donut: true,
    donutWidth: 15,
    startAngle: 270,
    total: 200
  };
  var chart3 = new Chartist.Pie('#chart3', chart3options1, chart3options2);
  var chart3mob = new Chartist.Pie('#chart3mob', chart3options1, chart3options2);
  // Java Chart
  var chart4options1 = {
    labels: ['50%'],
    series: [50]
  };
  var chart4options2 = {
    donut: true,
    donutWidth: 15,
    startAngle: 270,
    total: 200
  };
  var chart4 = new Chartist.Pie('#chart4', chart4options1, chart4options2);
  var chart4mob = new Chartist.Pie('#chart4mob', chart4options1, chart4options2);
  // French Chart
  var chartfroptions1 = {
    labels: ['100%'],
    series: [100]
  };
  var chartfroptions2 = {
    donut: true,
    donutWidth: 15,
    startAngle: 270,
    total: 200
  };
  var chartfr = new Chartist.Pie('#chartfr', chartfroptions1, chartfroptions2);
  var chartfrmob = new Chartist.Pie('#chartfrmob', chartfroptions1, chartfroptions2);
  // English Chart
  var chartenoptions1 = {
    labels: ['100%'],
    series: [100]
  };
  var chartenoptions2 = {
    donut: true,
    donutWidth: 15,
    startAngle: 270,
    total: 200
  };
  var charten = new Chartist.Pie('#charten', chartenoptions1, chartenoptions2);
  var chartenmob = new Chartist.Pie('#chartenmob', chartenoptions1, chartenoptions2);
  // Spanish Chart
  var chartspoptions1 = {
    labels: ['50%'],
    series: [50]
  };
  var chartspoptions2 = {
    donut: true,
    donutWidth: 15,
    startAngle: 270,
    total: 200
  };
  var chartsp = new Chartist.Pie('#chartsp', chartspoptions1, chartspoptions2);
  var chartspmob = new Chartist.Pie('#chartspmob', chartspoptions1, chartspoptions2);

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

  // Draw all the charts Desktop version + Mobile version
  drawChartTM(chart1);
  drawChartTM(chart2);
  drawChartTM(chart3);
  drawChartTM(chart4);
  drawChartTM(chartfr);
  drawChartTM(charten);
  drawChartTM(chartsp);

  drawChartTM(chart1mob);
  drawChartTM(chart2mob);
  drawChartTM(chart3mob);
  drawChartTM(chart4mob);
  drawChartTM(chartfrmob);
  drawChartTM(chartenmob);
  drawChartTM(chartspmob);

  // Border reveal throughout the page, depending on the window level in px
  window.onscroll = function() {bordersall()};
  function bordersall() {
    // ************ DESKTOP ANIMATIONS ************** //
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
      borders1();
    }
    if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
      borders2();
    }
    if (document.body.scrollTop > 3600 || document.documentElement.scrollTop > 3600) {
      borders3();
    }
    // ************ MOBILE ANIMATIONS ************** //
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
      borders4();
    }
    if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
      borders5();
    }
    if (document.body.scrollTop > 4200 || document.documentElement.scrollTop > 4200) {
      borders6();
    }
  }

  var borders1 = _.once(function borders1a() {
    document.getElementById('ib1desk').className += " intro-border1-animation";
    document.getElementById('ib2desk').className += " intro-border2-animation";
    document.getElementById('ib3desk').className += " intro-border3-animation";
    document.getElementById('ib4desk').className += " intro-border4-animation";
    document.getElementById('ib5desk').className += " intro-border5-animation";
    document.getElementById('ib6desk').className += " intro-border6-animation";
    document.getElementById('ib7desk').className += " intro-border7-animation";
    document.getElementById('ib8desk').className += " intro-border8-animation";
    document.getElementById('ib9desk').className += " intro-border9-animation";
    document.getElementById('ib10desk').className += " intro-border10-animation";
    document.getElementById('ib11desk').className += " intro-border11-animation";
  });
  var borders2 = _.once(function borders2a() {
    document.getElementById('sb1desk').className += " story-border1-animation";
    document.getElementById('sb2desk').className += " story-border2-animation";
    document.getElementById('sb3desk').className += " story-border3-animation";
    document.getElementById('sb4desk').className += " timeline-animation";
    document.getElementById('sb5desk').className += " story-border5-animation";
  });
  var borders3 = _.once(function borders3a() {
    document.getElementById('skb1desk').className += " skills-border1-animation";
    document.getElementById('skb2desk').className += " skills-border2-animation";
    document.getElementById('skb3desk').className += " skills-border3-animation";
    document.getElementById('skb4desk').className += " skills-border4-animation";
    document.getElementById('skb5desk').className += " skills-border5-animation";
    document.getElementById('skb6desk').className += " skills-border6-animation";
    document.getElementById('skb7desk').className += " skills-border7-animation";
    document.getElementById('skb8desk').className += " skills-border8-animation";
    document.getElementById('skb9desk').className += " skills-border9-animation";
    document.getElementById('skb10desk').className += " skills-border10-animation";
    document.getElementById('skb11desk').className += " skills-border11-animation";
    document.getElementById('skb12desk').className += " skills-border12-animation";
    document.getElementById('skb13desk').className += " skills-border13-animation";
    document.getElementById('skb14desk').className += " skills-border14-animation";
    document.getElementById('skb15desk').className += " skills-border15-animation";
  });
  var borders4 = _.once(function borders4a() {
    document.getElementById('ib1mob').className += " intro-border1-animation";
    document.getElementById('ib2mob').className += " intro-border2-animation";
    document.getElementById('ib3mob').className += " intro-border3-animation";
    document.getElementById('ib5mob').className += " intro-border5-animation";
    document.getElementById('ib6mob').className += " intro-border6-animation";
    document.getElementById('ib9mob').className += " intro-border9-animation";
    document.getElementById('ib11mob').className += " intro-border11-animation";
  });
  var borders5 = _.once(function borders5a() {
    document.getElementById('sb1mob').className += " story-border1-animation";
    document.getElementById('sb2mob').className += " story-border2-animation";
    document.getElementById('sb3mob').className += " story-border3-animation";
    document.getElementById('sb4desk').className += " timeline-animation";
    document.getElementById('sb5mob').className += " story-border5-animation";
  });
  var borders6 = _.once(function borders6a() {
    document.getElementById('skb1mob').className += " skills-border1-animation";
    document.getElementById('skb2mob').className += " skills-border2-animation";
    document.getElementById('skb3mob').className += " skills-border3-animation";
    document.getElementById('skb5mob').className += " skills-border5-animation";
    document.getElementById('skb7mob').className += " skills-border7-animation";
    document.getElementById('skb7-1').className += " skills-border7-1-animation";
    document.getElementById('skb7-2').className += " skills-border7-animation";
    document.getElementById('skb7-3').className += " skills-border7-animation";
    document.getElementById('skb7-4').className += " skills-border7-animation";
    document.getElementById('skb8mob').className += " skills-border8-animation";
    document.getElementById('skb9mob').className += " skills-border9-animation";
    document.getElementById('skb10mob').className += " skills-border10-animation";
    document.getElementById('skb11mob').className += " skills-border11-animation";
    document.getElementById('skb12mob').className += " skills-border12-animation";
    document.getElementById('skb13mob').className += " skills-border13-animation";
    document.getElementById('skb14mob').className += " skills-border14-animation";
    document.getElementById('skb15mob').className += " skills-border15-animation";
  });

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
