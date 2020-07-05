# What is gatsby used for?
## Unlike the SPAs that make API requests as you run the app, Gatsby does all the data fetching, including data sourcing from local files, during build time. All this data is then used to generate static HTML, JavaScript, and CSS files. This static rendering is what makes things work faster.

### After the browser is finished loading the page, it silently looks for links with prefetch attributes to download them.
### Then, when a user clicks on a link, the files requested for the page will have high chances to be already in cache.

### This kind of tool is popular amongst news websites and other sites that need new content regularly from the database, but that content isn’t interactable. It’s presented content only.

<img src='https://cdn-media-1.freecodecamp.org/images/1*8JLlG_T6onoeW2mVjVT_Gw.png' />



# Tips 


### layout.js - renders children() => no routes, just add a new page to 'pages' folder

## Gatsby-congig.js - plugins => gatsby-plugin-sass
### npm i gatsby-plugin-sass
### Sass -> nesting

### gatsby-link => 'Link' from 'gatsby

### http://localhost:8000/___graphql => queries

# OK, but when do i use it?

## GatsbyJS is very useful for stuff like blogs or newspapers, or anything static.