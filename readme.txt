# Rating Web Application

![Project Preview](screenshot1.png, screenshot2.png)

This web project is a simple rating application that allows users to provide feedback and rate a service.
It consists of two main pages: a rating page and a thank you page. 
The rating page lets users select a rating from 1 to 5, and upon submission, they are redirected to the thank you page, where their rating is displayed.

## Table of Contents
- Getting Started
- Project Structure
- Styling
- Functionality
- Responsive Design
- Web Development Skills Showcased

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository to your local machine.
2. Open the `index.html` file in your web browser to access the rating page.
3. Rate the service and click the "SUBMIT" button to see the thank you page.

## Project Structure

The project is organized as follows:

- `index.html`: The main rating page.
- `thanks.html`: The thank you page.
- `styles.css`: The stylesheet for styling the pages.
- `script_index.js`: JavaScript code for the rating page.
- `script_thanks.js`: JavaScript code for the thank you page.
- `redirect.js`: JavaScript code for page redirection.

## Styling

The styling of the project is achieved through CSS. Key styling features include:

- Responsive design with a flexbox layout.
- Custom styling for radio buttons.
- Proper use of fonts and colors for an aesthetic appearance.
- Accessibility considerations, including contrasting text and background colors.

### Responsive Design

The project includes responsive design using media queries. Here are the media query breakpoints and their corresponding adjustments:

- @media screen and (max-width: 420px):
  - Increases the max-width of `#thanks_page #main-div` to 90%.

- @media screen and (max-width: 470px):
  - Increases the max-width of `#main-div` to 90%.

- @media screen and (max-width: 379px):
  - Adjusts styles for smaller screens, including padding, font sizes, and button dimensions.

- @media screen and (max-width: 349px):
  - Further adjusts font sizes and button padding for very small screens.

## Functionality

The project's functionality includes:

- Selecting a rating from 1 to 5.
- Capturing the selected rating and storing it in `localStorage`.
- Redirecting users to the thank you page with their selected rating displayed.
- A check for page refresh to prevent unwanted redirection.

## Web Development Skills Showcased

This project showcases several web development skills and best practices, including:

- HTML structure and semantics.
- CSS styling for responsive design.
- JavaScript event handling and DOM manipulation.
- Use of `localStorage` for data storage.
- Page redirection and URL manipulation.
- Accessibility considerations.
- Use of comments for code clarity.

Feel free to explore the code and learn from the project. If you have any questions or feedback, please don't hesitate to get in touch!

Challenge by [Frontend Mentor](https://www.frontendmentor.io).
Coded by [Fortune Oguibe](https://github.com/foguibe).

Happy coding!
