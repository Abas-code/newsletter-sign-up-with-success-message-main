# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![mobile view](./design/mobile-design.jpg)
![desktop view](./design/desktop-design.jpg)

### Links

- Solution URL: (https://github.com/Abas-code/newsletter-sign-up-with-success-message-main)
- Live Site URL: (https://newsletter-sign-up-with-success-message-main-orpin.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript

### What I learned

I learnt how to make sure of using the proper syntax for call classes in Javascript. Also to add the preventDefault() before validating a form in JavaScript.

```js
function validate(){
  event.preventDefault();

  if (!emailRegex.test(email.value)){
    error.style.opacity = 1;
    email.classList.add("warning");
  } else {
    modal.style.display = "flex";
    text.innerHTML = email.value;
  } 
};
```

### Continued development

I'm still learning how to use CSS Grid and JavaScript.

### Useful resources

- [W3Schools](https://www.w3schools.com)


## Author

- Frontend Mentor - [@Abascode](https://www.frontendmentor.io/profile/Abascode)


## Acknowledgments

I want to acknowledge those who have been of great help to me from the Frontend community.