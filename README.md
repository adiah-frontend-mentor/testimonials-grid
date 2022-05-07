# Frontend Mentor - Testimonials grid section solution

This is a solution to the [Testimonials grid section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size


### Screenshot

![Screenshot](./screenshot.png)


### Links

- Solution URL: [github.com/nathanieladiah/testimonials-grid](https://github.com/nathanieladiah/testimonials-grid)
- Live Site URL: [nathanieladiah.github.io/testimonials-grid](https://nathanieladiah.github.io/testimonials-grid)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- React
- SCSS
- Flexbox
- CSS Grid
- Mobile-first workflow

Used `npx create-react-app` to make the boilerplate for the react app. Then cleaned up the unused files.

Added rules to deploy to gh-pages.

Then I started working on the html markup. Thinking about the reusable components in this project, each of the testimonial cards
has the same basic structure, with different, background colors, word colors and then the actual information.

I'm thinking to create a card component and pass as props 
* theme
  * background-color
  * text colors
* data
* position

That way I can use the data to populate the card and use the theme as a class to have the stylings bundled in.

The position can also be added as a class, for the grid layout to set the grid areas.

Created custom component for a testimonial card since it's the only component I left it in the `src` folder.

created a file to hold the data to be imported to the cards.

### What I learned

### Continued development

I've heard about Vite instead of CRA to launch React apps as being much faster.

When setting up the card text colors that are just different values of transparency, check on using some sass function to create it.

### Useful resources

- [CSS-Tricks: A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) - 
This is a great resource for seeing all the CSS grid properties and options visually.



## Author

- Website - [Nathaniel Adiah](https://nathanieladiah.github.io)
- Frontend Mentor - [@nathanieladiah](https://www.frontendmentor.io/profile/nathanieladiah)
- Twitter - [@nathanieladiah](https://www.twitter.com/nathanieladiah)
