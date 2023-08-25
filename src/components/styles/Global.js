import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

 :root {

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    }
    
  
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role="list"],
ol[role="list"] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  
}

#root{
  padding: 2em 0 1em;
  display: grid;
  min-height: 100vh;
justify-items: center;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}



/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

#root > *{
  padding-inline:2em ;
}

  body {
   
    min-height: 100vh;
    width: 100vw;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    text-align: left;
    line-height: 1.5em;
  }

 
 
h1, 
h2, 
h3,
span, 
a {
  font-family: 'Teko', sans-serif;
}

a{
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
}

`;

export default GlobalStyles;
