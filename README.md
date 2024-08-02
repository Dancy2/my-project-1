# portfolio
 This is the outline of my virtual CV
 
The HTML File
 •  Document Declaration and HTML Structure
<!DOCTYPE html>: Declares the document type.
<html lang="en">: Opens the HTML document with English language.
•  Head Section
<head>: Contains metadata and links to resources.
<meta charset="UTF-8">: Sets the character encoding.
<meta name="viewport" content="width=device-width, initial-scale=1.0">: Ensures responsive design.
<title>: Sets the title of the page.
<link rel="stylesheet" href="style.css">: Links to the primary stylesheet.
<link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet">: Links to Boxicons stylesheet.
<link href="mediaqueries.css" rel="stylesheet">: Links to additional styles for media queries.
•  Body Section
<body>: Contains the visible content of the page.
Header (This was separated into two for the desktop and mobile navigation bar)
<header class="desktop-nav" id="navbar">: Navigation for desktop view.
<div class="logo">: Logo section.
<ul class="nav-links">: Navigation links.
<nav class="mobile-nav" id="navbar">: Navigation for mobile view.
<div class="logo">: Logo section.
<div class="menu">: Menu container with a toggle button.
<div class="menu-links">: Mobile navigation links.
•	Home Section
<section class="home" id="home">: Introduction/profile section.
<div class="home-content">: Container for content.
<div class="home-img">: Container for the profile image.
<h1>: Main heading.
<h3>: Subheading.
<p>: Introductory paragraph.
<div class="btn-group">: Button group.
<div class="social-container">: Social media links.
•	About Me Section
<section class="about" id="about">: About me section.
<div class="about-details-container">: Container for details.
<div class="about-container">: Main container for about me content.
<div class="details-container">: Container for the details.
<div class="box-education1">: Education box 1.
<div class="box-education2">: Education box 2.
<button class="btn-download">: Button to download CV.
•	Skills Section
<section id="skills" class="skills">: Skills section.
<div class="container">: Container for skills.
<h2 class="container-box">: Skills heading.
<div class="grid">: Grid layout for skill cards.
Multiple <div class="skill-card">: Skill cards with title and description.
•	Contact Section
<section id="contact" class="contact-section">: Contact form section.
<div class="container">: Container for contact form.
<h2 class="contact-heading">: Contact section heading.
<div class="form-container">: Container for the form.
<form action="mailto:your.ktaueatsoala@outlook.com" method="post" enctype="text/plain" class="contact-form">: Contact form with fields for name, email, and message.
	<div class="button-container">: Container for submit button.
•	Script
<script src="script.js"></script>: Link to external JavaScript file (placed after </body> to ensure the DOM is fully loaded).

The CSS File
•  Font Import and General Reset
•	Imports the Poppins font from Google Fonts.
•	Resets margin and padding for all elements to zero.
•  Root Variables and Base Styles
•	Sets base colors and font-family for the body.
•	Includes a smooth scroll behavior for the HTML element.
•  Transitions
•	Adds transition effects for links and buttons.
•  Header Styles
•	.header: Fixed position header with shadow and padding.
•	.logo: Styling for the logo.
•	.navbar: Layout for the navigation bar.
•	.desktop-nav: Desktop navigation styles.
•	.mobile-nav: Mobile navigation styles including a hamburger menu.
•  Home Section Styles
•	.home: Flexbox layout for centering content, with gradient background.
•	.home-content: Styling for the content within the home section.
•	.home-img img: Styles for the profile image including border-radius and shadow.
•  About Section Styles
•	#about: Background color and border-radius for the About section.
•	.about-container and .about-details-container: Layout and styling for the About section content.
•	.box-education1 and .box-education2: Styling for education boxes.
•	.btn-download: Styling for the CV download button.
•  Skills Section Styles
•	#skills: Background gradient and border-radius for the Skills section.
•	.grid: Grid layout for skill cards.
•	.skill-card: Styling for each skill card including background color and shadow.
•	.skill-title: Title styling within skill cards.
•  Contact Section Styles
•	.contact-section: Background color, border-radius, and padding for the contact section.
•	.contact-form: Form styling including width, padding, and shadow.
•	.btn-submit: Styling for the submit button with transition effects.

JavaScript File 
toggleMenu Function
•	Selects the menu and mobile icon elements.
•	Toggles the show class on the menu to display or hide it.
•	Toggles the open class on the mobile icon to animate the menu-icon.



