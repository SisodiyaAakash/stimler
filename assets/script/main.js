function functionWrapper($) {
   var themeChild = {
      /**
       * Main entry point
       */
      init: function () {
         themeChild.registerEventHandlers();
         themeChild.customFunctions();
         themeChild.sliderFunctions();
         themeChild.scrollFunctions();
      },

      /**
       * Registers event handlers
       */
      registerEventHandlers: function () {
         // I'm providing example here
         $(document).on('click', 'selector', themeChild.functionName);
      },

      /**
       * Custom Functions
       */
      customFunctions: function () {
         //Custom function will be here
      },

      /**
       * Slider Functions
       */
      sliderFunctions: function () {
         //Slider functions will be here
      },

      /**
       * Scroll Functions 
       */
      scrollFunctions: function () {
         // Header variation on scroll
         // Adding colored Header class after scroll down
         $(window).scroll(function () {
            if ($(this).scrollTop() > 60) {
               $('header#header').addClass('colored-header');
            } else {
               $('header#header').removeClass('colored-header');
            }
         });

         // Parallax Effect for hero background image and about section images
         const parallaxEffectHero = function () {
            const backgroundImage = $('section.hero-section-wrap .hero-section');

            $(window).on('scroll', function () {
               const scrollPos = $(window).scrollTop();

               if ($(window).width() > 991) {
                  backgroundImage.css('background-size', 'calc(100% + ' + scrollPos * 0.8 + 'px)');
               }
               else if ($(window).width() > 768) {
                  backgroundImage.css('background-size', 'calc(150% + ' + scrollPos * 0.6 + 'px)');
               }
               else if ($(window).width() > 544) {
                  backgroundImage.css('background-size', 'calc(200% + ' + scrollPos * 0.6 + 'px)');
               }
               else if ($(window).width() > 351) {
                  backgroundImage.css('background-size', 'calc(250% + ' + scrollPos * 0.6 + 'px)');
               }
            });
         };
         const parallaxEffectAbout = function () {
            const imgLeft = $('section.about-section-wrap .about-img.img-left img');
            const imgRight = $('section.about-section-wrap .about-img.img-right img');

            $(window).on('scroll', function () {
               const scrollPos = $(window).scrollTop();
               imgLeft.css('object-position', 'center ' + scrollPos * (-0.05) + 'px');
               imgRight.css('object-position', 'center ' + scrollPos * (-0.09) + 'px');
            });
         };
         parallaxEffectHero();
         parallaxEffectAbout();
      },

      /**
       * Functions for event handlers
       */
      functionName: function () {
         // So much code here
      },

   }; // end themeChild

   $(document).ready(themeChild.init);

} // end themeChildWrapper()

functionWrapper(jQuery);
