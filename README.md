# XDetalz Landing Page – Client Website
-------------------------------------------------------------------------------------
## 1. Project Overview
This project delivers a complete, responsive landing page built for a client.

*The design focuses on:*
- remium look and feel
- clarity and readability
- smooth user experience

The HTML structure follows BEM methodology, making the code predictable, maintainable, and scalable.

The UI is built in SCSS, using a modular structure divided into components and global files.
Animations rely mainly on transform and transition, without unnecessary keyframes.

The landing page includes informational sections, a slider, reviews, FAQ, and contact details.
-------------------------------------------------------------------------------------
## 2. Technologies Used
*Front-end*
- TML5
- SCSS (modular structure)
- JavaScript (ES6)

*Tools and Libraries*
- Swiper (installed via npm)
- BEM naming convention
- Responsive breakpoints
-------------------------------------------------------------------------------------
## 3. Key Features
- sticky navigation with mobile menu
- Swiper-based carousel/slider
- expandable FAQ accordion
- smooth UI animations
- fully responsive layout
- structured SCSS component system
- automatic current year in footer
- organized and maintainable file structure
-------------------------------------------------------------------------------------
## 4. SCSS Structure
*The stylesheet is divided into logical modules for clarity and scalability.*
scss/
  abstracts/
    _colors.scss
    _media.scss
    _globals.scss
  components/
    _nav.scss
    _hero.scss
    _about.scss
    _services.scss
    _projects.scss
    _reviews.scss
    _faq.scss
    _contact.scss
    _footer.scss
  main.scss

main.scss imports all sections and builds the final stylesheet.
-------------------------------------------------------------------------------------
## 5. HTML and BEM Structure to simplify maintaining and future development

*BEM naming convention:*
- block: section-name
- element: section-name__element
- modifier: section-name__element--modifier

-------------------------------------------------------------------------------------
## 6. Animations

*Animations are implemented mainly using:*
- transform
- transition
- shadows and gradients

This keeps interactions smooth and efficient while maintaining a premium visual style.
-------------------------------------------------------------------------------------
## 7. Project Status

The project is complete and ready for presentation to the client.
It fulfills its role as a landing page and can be extended further if needed.

-------------------------------------------------------------------------------------
## 8. Deployment

Coming soon
