// Thibaut Massard JavaScript

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

  // Reveal stuff while scrolling
  window.sr = ScrollReveal();
  sr.reveal('.btnreveal', {delay:4700});
  sr.reveal('.image1', {delay:300});
  sr.reveal('.image2', {delay:300});
  sr.reveal('.image3', {delay:300});
  sr.reveal('.image4', {delay:300});
  sr.reveal('.image5', {delay:300});
  sr.reveal('.image6', {delay:300});

  // Initialize a Line chart in the container with the ID chart1
  var chart1 = new Chartist.Pie('#chart1', {
    labels: ['60%'],
    series: [60]
  }, {
    donut: true,
    donutWidth: 20,
    startAngle: 270,
    total: 200,
  });

  // Initialize a Line chart in the container with the ID chart2
  var chart2 = new Chartist.Pie('#chart2', {
    labels: ['40%'],
    series: [40]
  }, {
    donut: true,
    donutWidth: 20,
    startAngle: 270,
    total: 200,
  });

  // Initialize a Line chart in the container with the ID chart3
  var chart3 = new Chartist.Pie('#chart3', {
    labels: ['50%'],
    series: [50]
  }, {
    donut: true,
    donutWidth: 20,
    startAngle: 270,
    total: 200,
  });

  // Initialize a Line chart in the container with the ID chart2
  var chart4 = new Chartist.Pie('#chart4', {
    labels: ['50%'],
    series: [50]
  }, {
    donut: true,
    donutWidth: 20,
    startAngle: 270,
    total: 200,
  });

  var chartfr = new Chartist.Pie('#chartfr', {
    labels: ['100%'],
    series: [100]
  }, {
    donut: true,
    donutWidth: 20,
    startAngle: 270,
    total: 200,
  });

  var charten = new Chartist.Pie('#charten', {
    labels: ['100%'],
    series: [100]
  }, {
    donut: true,
    donutWidth: 20,
    startAngle: 270,
    total: 200,
  });

  var chartsp = new Chartist.Pie('#chartsp', {
    labels: ['50%'],
    series: [50]
  }, {
    donut: true,
    donutWidth: 20,
    startAngle: 270,
    total: 200,
  });

  chart1.on('draw', function(data) {
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
  chart2.on('draw', function(data) {
    if(data.type === 'slice') {
      var pathLength = data.element._node.getTotalLength();
      data.element.attr({
        'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
      });
      var animationDefinition = {
        'stroke-dashoffset': {
          id: 'anim' + data.index,
          dur: 2000,
          from: -pathLength + 'px',
          to:  '0px',
          easing: Chartist.Svg.Easing.easeOutQuint,
          fill: 'freeze'
        }
      };
      if(data.index !== 0) {
        animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
      }
      data.element.attr({
        'stroke-dashoffset': -pathLength + 'px'
      });
      data.element.animate(animationDefinition, false);
    }
  });
  chart3.on('draw', function(data) {
    if(data.type === 'slice') {
      var pathLength = data.element._node.getTotalLength();
      data.element.attr({
        'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
      });
      var animationDefinition = {
        'stroke-dashoffset': {
          id: 'anim' + data.index,
          dur: 2000,
          from: -pathLength + 'px',
          to:  '0px',
          easing: Chartist.Svg.Easing.easeOutQuint,
          fill: 'freeze'
        }
      };
      if(data.index !== 0) {
        animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
      }
      data.element.attr({
        'stroke-dashoffset': -pathLength + 'px'
      });
      data.element.animate(animationDefinition, false);
    }
  });
  chart4.on('draw', function(data) {
    if(data.type === 'slice') {
      var pathLength = data.element._node.getTotalLength();
      data.element.attr({
        'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
      });
      var animationDefinition = {
        'stroke-dashoffset': {
          id: 'anim' + data.index,
          dur: 2000,
          from: -pathLength + 'px',
          to:  '0px',
          easing: Chartist.Svg.Easing.easeOutQuint,
          fill: 'freeze'
        }
      };
      if(data.index !== 0) {
        animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
      }
      data.element.attr({
        'stroke-dashoffset': -pathLength + 'px'
      });
      data.element.animate(animationDefinition, false);
    }
  });

  // Load the Visualization API and the corechart package.
  google.charts.load('current', {'packages':['corechart']});


  // Callback that creates and populates a data table,
  // instantiates the pie chart, passes in the data and
  // draws it.
  function drawChartProg() {
    // Create the data table.
    var data = new google.visualization.arrayToDataTable([
      ['Language', 'Percentage', { role: 'style' }, {role: 'annotation'}],
      ['HTML5/CSS3', 60, 'color:#f14a29; opacity:0.8;', '60%'],
      ['JavaScript', 40, 'color:#63a814; opacity:0.8;', '40%'],
      ['C++', 50, 'color:#0055a4; opacity:0.8;', '50%'],
      ['VB', 60, 'color:#683591; opacity:0.8;', '60%'],
    ]);

    // Set chart options
    var options = {backgroundColor: 'transparent',
    animation: {startup: true, duration: 1000, easing: 'out'},
    tooltip: {trigger: 'none'},
    annotations: {textStyle: {fontName: "Montserrat"}},
    hAxis: {
      gridlines: {color: 'none'},
      textStyle: {color: 'none'},
      minValue:0, maxValue: 100},
      vAxis: {
        textStyle: {color: 'white', fontName: "Montserrat"},
      },
      bar: {groupWidth: "40%"},
      legend: 'none',
      width:650,
      height:300};

      // Instantiate and draw our chart, passing in some options.
      var container = document.getElementById('chart_div');
      var chart = new google.visualization.BarChart(container);

      /*var colors = ['#f14a29', '#63a814', '#0055a4', '#683591'];

      google.visualization.events.addListener(chart, 'ready', changeBorderRadius);
      google.visualization.events.addListener(chart, 'select', changeBorderRadius);
      google.visualization.events.addListener(chart, 'onmouseover', changeBorderRadius);
      google.visualization.events.addListener(chart, 'onmouseout', changeBorderRadius);

      function changeBorderRadius() {
      var chartColumns = container.getElementsByTagName('rect');
      Array.prototype.forEach.call(chartColumns, function(column) {
      if ((colors.indexOf(column.getAttribute('fill')) > -1) ||
      (column.getAttribute('fill') === 'none') ||
      (column.getAttribute('stroke') === '#ffffff')) {
      column.setAttribute('rx', 15);
      column.setAttribute('ry', 15);
    }
  });
}*/

chart.draw(data, options);
}

function drawChartLanguages() {
  // Create the data table.
  var data = new google.visualization.arrayToDataTable([
    ['Language', 'P1', { role: 'style' }, 'P2', { role: 'style' }, 'P3', { role: 'style' }, {role: 'annotation'}],
    ['French',   100, 'color:#EF4135; opacity:0.8;', 100, 'color:#FFFFFF; opacity:0.8;', 100, 'color:#0055A4; opacity:0.8;', '100%'],
    ['English',  100, 'color:#002868; opacity:0.8;', 100, 'color:#002868; opacity:0.8;', 100, 'color:#002868; opacity:0.8;', '100%'],
    ['Spanish',   50, 'color:#AA151B; opacity:0.8;',  50, 'color:#F1BF00; opacity:0.8;',  50, 'color:#AA151B; opacity:0.8;',  '50%']
  ]);

  // Set chart options
  var options = {
    backgroundColor: 'transparent',
    animation: {startup: true, duration: 1000, easing: 'out'},
    annotations: {textStyle: {fontName: "Montserrat"}},
    tooltip: {trigger: 'none'},
    isStacked: true,
    hAxis: {
      gridlines: {color: 'none'},
      textStyle: {color: 'none'},
      direction: 1,
      minValue:0, maxValue: 100},
      vAxes: {
        0: {textPosition: 'right'},
        1: {},
      },
      vAxis: {textStyle: {color: 'white', fontName: "Montserrat"}},
      bar: {groupWidth: "40%"},
      legend: 'none',
      width:670,
      height:220};

      // Instantiate and draw our chart, passing in some options.
      var container = document.getElementById('chart_div2');
      var chart = new google.visualization.BarChart(container);

      chart.draw(data, options);
      //chart.draw(data, google.charts.Bar.convertOptions(options));
    }

    // Draw/animate the charts when the user reaches "Charts"
    $(document).bind('scroll', function(ev) {
      var scrollOffset = $(document).scrollTop();
      var containerOffset = $('#charts').offset().top - window.innerHeight;
      if (scrollOffset > containerOffset) {
        drawChartProg();
        drawChartLanguages();
        // unbind event not to load scrolls again
        $(document).unbind('scroll');
      }
    });

    /*// Text animations - Story section
    window.onscroll = function() {moveRightPrepaText2()};
    function moveRightPrepaText2() {
      if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
        document.getElementById('prepa').className = "slideRight";
        document.getElementById('prepa2').className = "slideRight";
      }
      if (document.body.scrollTop > 1300 || document.documentElement.scrollTop > 1300) {
        document.getElementById('am').className = "slideLeft";
        document.getElementById('am2').className = "slideLeft";
      }
      if (document.body.scrollTop > 1900 || document.documentElement.scrollTop > 1900) {
        document.getElementById('safran').className = "slideRight";
        document.getElementById('safran2').className = "slideRight";
      }
      if (document.body.scrollTop > 2300 || document.documentElement.scrollTop > 2300) {
        document.getElementById('iac').className = "slideLeft";
        document.getElementById('iac2').className = "slideLeft";
      }
      if (document.body.scrollTop > 2700 || document.documentElement.scrollTop > 2700) {
        document.getElementById('trexia').className = "slideRight";
        document.getElementById('trexia2').className = "slideRight";
      }
    }*/

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
