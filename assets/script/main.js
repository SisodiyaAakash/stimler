function functionWrapper($) {
   var themeChild = {
      /**
       * Main entry point
       */
      init: function () {
         themeChild.registerEventHandlers();
         themeChild.customFunctions();
         themeChild.scrollFunctions();
         themeChild.sliderFunctions();
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
         // Function for contact cta button for the contact-section 
         $('.contact-cta-btn').hover(
            function () {
               $(this).closest('.contact-section-wrap').find('.contact-section').addClass('hovered');
            },
            function () {
               $(this).closest('.contact-section-wrap').find('.contact-section').removeClass('hovered');
            }
         );

         // Function to change the footer image on hover of corresponding footer menu item
         var imageElement = $('.footer .footer-image-wrapper .footer-img');
         const defaultImagePath = imageElement.attr('src');

         // Function to change the image on menu link hover
         $('.footer .content-area ul.footer-menu-list li.footer-menu-itm a.menu-link').hover(function () {
            // Get the target attribute value (image name)
            const target = $(this).attr('target');

            // Replace the image name in the default image path
            const newImagePath = defaultImagePath.replace('footer-default', 'footer-' + target);

            // Update the footer image source with a delay
            setTimeout(function () {
               imageElement.attr('src', newImagePath);
            }, 200);
         }, function () {
            // Change back to default image path with a transition
            imageElement.css('transition', 'opacity 0.5s ease');
            imageElement.css('opacity', '0');
            setTimeout(function () {
               imageElement.attr('src', defaultImagePath);
               imageElement.css('transition', 'opacity 0.5s ease');
               imageElement.css('opacity', '1');
            }, 200); // Adjust the delay time as needed (in milliseconds)
         });
      },

      /**
       * Slider Functions
       */
      sliderFunctions: function () {
         // Slick slider for the companies section
         var companiesSlider = $('section.companies-section-wrap .companies-section .companies-inner-wrapper');
         if (companiesSlider.length > 0) {
            companiesSlider.slick({
               slidesToShow: 7,
               slidesToScroll: 1,
               dots: false,
               arrows: false,
               infinite: true,
               autoplay: true,
               autoplaySpeed: 0,
               speed: 5000,
               cssEase: 'linear',
               pauseOnHover: true,
               responsive: [
                  {
                     breakpoint: 1200,
                     settings: {
                        slidesToShow: 6,
                        slidesToScroll: 1,
                     }
                  },
                  {
                     breakpoint: 992,
                     settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                     }
                  },
                  {
                     breakpoint: 768,
                     settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                     }
                  },
                  {
                     breakpoint: 544,
                     settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                     }
                  },
               ]
            });
         }
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

         // Parallax Effect for hero background image
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

         // Parallax Effect for about section
         const parallaxEffectAbout = function () {
            const imgLeft = $('section.about-section-wrap .about-img.img-left img');
            const imgRight = $('section.about-section-wrap .about-img.img-right img');

            $(window).on('scroll', function () {
               const scrollPos = $(window).scrollTop();
               imgLeft.css('object-position', 'center ' + scrollPos * (-0.05) + 'px');
               imgRight.css('object-position', 'center ' + scrollPos * (-0.09) + 'px');
            });
         };

         // Parallax Effect for the rounded banner section
         const parallaxEffectRoundedBanner = function () {
            const bannerSection = $('section.rounded-banner-section-wrap');
            const bannerImage = bannerSection.find('.rounded-banner');
            const options = {
               threshold: 0.2 // Trigger when 20% of the banner section is visible in viewport
            };

            const observer = new IntersectionObserver((entries, observer) => {
               entries.forEach(entry => {
                  if (entry.isIntersecting) {
                     // If the section is in the viewport, apply the parallax effect
                     $(window).on('scroll', adjustBannerRadius);
                  } else {
                     // If the section is not in the viewport, remove the border radius adjustment
                     bannerImage.css('border-radius', '0.5px'); // Reset border radius
                     $(window).off('scroll', adjustBannerRadius);
                  }
               });
            }, options);

            observer.observe(bannerSection[0]);

            function adjustBannerRadius() {
               const scrollPos = $(window).scrollTop();
               // Adjust border radius based on scroll position
               const borderRadius = 0.5 + (scrollPos * 0.5) + "px";
               bannerImage.css('border-radius', borderRadius);
            }
         };

         // Parallax Effect for fabrics banner section
         const parallaxEffectFabricsBanner = function () {
            const fabricsBannerSection = $('section.fabrics-banner-section-wrap');
            const fabricsBannerImage = fabricsBannerSection.find('.fabrics-banner-section');
            const options = {
               threshold: 0.5 // Trigger when 50% of the banner section is visible in viewport
            };

            const observer = new IntersectionObserver((entries, observer) => {
               entries.forEach(entry => {
                  if (entry.isIntersecting) {
                     // If the section is in the viewport, apply the parallax effect
                     $(window).on('scroll', adjustFabricsBanner);
                  } else {
                     // If the section is not in the viewport, remove the parallax effect
                     $(window).off('scroll', adjustFabricsBanner);
                  }
               });
            }, options);

            observer.observe(fabricsBannerSection[0]);

            function adjustFabricsBanner() {
               const scrollPos = $(window).scrollTop();
               // Adjust background position based on scroll position
               fabricsBannerImage.css('background-position-y', -scrollPos * 0.09 + 'px');
            }
         };

         parallaxEffectHero();
         parallaxEffectAbout();
         parallaxEffectRoundedBanner();
         parallaxEffectFabricsBanner();
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
