var langEl = document.getElementById("lang");

langEl.onclick = function makeVizibleLang() {
  if(document.getElementsByClassName("langClicked").length) {
    document.getElementById("lang").className = "";
    document.getElementById("iconAnglDown").className = "fa fa-angle-down";
  } else {
    document.getElementById("lang").className = "langClicked";
    document.getElementById("iconAnglDown").className = "fa fa-angle-up";
  }
}

/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/

$(document).ready(function() {
  
  // Controls the slide in/out functionality of the menu
  
  var mobileNav = $('.mobile-nav'); // CSS Class of Nav Menu
  var navToggle = $('.nav-toggle'); // CSS Class of Toggle Button
  var content = $('.container-fluid'); // Site Container
  
  var isOpen = 0; // Is the menu open or closed?
  var menuWidth = $('.mobile-nav').css('width');
  var menuWidthInverse = "-" + menuWidth;
  
  $(navToggle).click(function(){
    
    if ( isOpen == 0 ) {
      $(mobileNav).animate({'right' : '0px'}, 300);
      $(content).animate({'left' : menuWidthInverse}, 300);
      $(navToggle).removeClass('fa-bars');
      $(navToggle).addClass('fa-times');
      isOpen++;
    } else {
      $(mobileNav).animate({'right' : menuWidthInverse}, 300);
      $(content).animate({'left' : 0}, 300);
      $(navToggle).removeClass('fa-times');
      $(navToggle).addClass('fa-bars');
      isOpen--;
    }
    
  });
  
  // Controls the nested menu behaviour
  
  var primaryLink = $('.mobile-nav ul li a');
  var subMenu = $('.mobile-nav ul li .sub-menu');
  
  $(primaryLink).click(function(){
    $(this).next().slideToggle(300);
  });
  
});




/*currentTime currentTime currentTime currentTime currentTime currentTime currentTime currentTime */
if (document.getElementById("index")) {
  function showTime(){
          var date = new Date();
if (date.getHours() > 9 && date.getMinutes() > 9) {
  var time = date.getHours()+':'+date.getMinutes();
} else if (date.getHours() < 10 && date.getMinutes() > 9) {
  var time = '0'+date.getHours()+':'+date.getMinutes();
} else {
  var time = date.getHours()+':'+'0'+date.getMinutes();
}
          var divTime = document.getElementById('currentTime');
          divTime.innerHTML = time;
          window.setTimeout(arguments.callee, 60000);
      }
var offset = new Date().getTimezoneOffset();

if (offset == -360) {
  showTime();
}
}
  
  /*currentTime currentTime currentTime currentTime currentTime currentTime currentTime currentTime */




 /*chgMoreBtn() chgMoreBtn() chgMoreBtn() chgMoreBtn() chgMoreBtn() chgMoreBtn() chgMoreBtn() chgMoreBtn() */

  function chgMoreBtn() {
    var getContMoreBtn = document.getElementById("chgMoreSpan");
    if (getContMoreBtn.className == "upMoreBtn") {
      getContMoreBtn.innerHTML = "&nbsp;РАЗВЕРНУТЬ <i class='fa fa-angle-down'></i>&nbsp;";
      getContMoreBtn.className = "downMoreBtn";
    } else {
      getContMoreBtn.innerHTML = "&nbsp;СВЕРНУТЬ <i class='fa fa-angle-up'></i>&nbsp;";
      getContMoreBtn.className = "upMoreBtn";
    }
  }

/*  function chgMoreBtn() {
    document.getElementById("chgMoreSpan").innerHTML  = "&nbsp;РАЗВЕРНУТЬ <i class='fa fa-angle-down'></i>&nbsp;";
  }*/

 /*chgMoreBtn() chgMoreBtn() chgMoreBtn() chgMoreBtn() chgMoreBtn() chgMoreBtn() chgMoreBtn() chgMoreBtn() */


 /*bar choose   bar choose   bar choose   bar choose   bar choose   bar choose   bar choose   bar choose   */

  function showBar1() {
    var thisBar = document.getElementById("bar1cont");
    var othersBars1 = document.getElementById("bar2cont");
    var othersBars2 = document.getElementById("bar3cont");
    thisBar.style.height = 'auto';
    document.getElementById("bar1").className = 'actBar';
    document.getElementById("bar2").className = '';
    document.getElementById("bar3").className = '';
    othersBars1.style.height = '0';
    othersBars2.style.height = '0';
  }

  function showBar2() {
    var thisBar = document.getElementById("bar2cont");
    var othersBars1 = document.getElementById("bar1cont");
    var othersBars2 = document.getElementById("bar3cont");
    thisBar.style.height = 'auto';
    document.getElementById("bar1").className = '';
    document.getElementById("bar2").className = 'actBar';
    document.getElementById("bar3").className = '';
    othersBars1.style.height = '0';
    othersBars2.style.height = '0';
  }

  function showBar3() {
    var thisBar = document.getElementById("bar3cont");
    var othersBars1 = document.getElementById("bar2cont");
    var othersBars2 = document.getElementById("bar1cont");
    thisBar.style.height = 'auto';
    document.getElementById("bar1").className = '';
    document.getElementById("bar2").className = '';
    document.getElementById("bar3").className = 'actBar';
    othersBars1.style.height = '0';
    othersBars2.style.height = '0';
  }


 /*bar choose   bar choose   bar choose   bar choose   bar choose   bar choose   bar choose   bar choose   */


/*  showTable     showTable     showTable     showTable     showTable     showTable     showTable     showTable   */

  function showTable1() {
    var thisBar = document.getElementById("table1price");
    var othersBars1 = document.getElementById("table2price");
    thisBar.style.height = 'auto';
    document.getElementById("table1").className = 'actBar';
    document.getElementById("table2").className = '';
    othersBars1.style.height = '0';
  }

  function showTable2() {
    var thisBar = document.getElementById("table2price");
    var othersBars1 = document.getElementById("table1price");
    thisBar.style.height = 'auto';
    document.getElementById("table1").className = '';
    document.getElementById("table2").className = 'actBar';
    othersBars1.style.height = '0';
  }


/*  showTable     showTable     showTable     showTable     showTable     showTable     showTable     showTable   */


/* slider Camera  slider Camera  slider Camera  slider Camera  slider Camera  slider Camera  slider Camera */


    $(document).ready(function(){
      
      jQuery('#camera_wrap_1').camera({
        thumbnails: true,
      });

      jQuery('#camera_wrap_2').camera({
        thumbnails: true,
      });

      jQuery('#camera_wrap_3').camera({
        thumbnails: true,
      });
    });


/* slider Camera  slider Camera  slider Camera  slider Camera  slider Camera  slider Camera  slider Camera */