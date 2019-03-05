---
path: /blog/how-to-style-netlify-cms-preview-pane
date: 2019-03-05T07:25:30.848Z
title: How to style Netlify CMS Preview Pane
thumbnail: /assets/previewpane-thumb.jpg
---
If you have installed and setup GatsbyJS and NetlifyCMS, then keep reading.

If not, you can checkout my blog in setting it up here: 
[Create Free CMS with NetlifyCMS and GatsbyJS](https://faithmorante.netlify.com/blog/how-to-create-free-cms-with-netlify-cms-and-gatsby)

If you go to yoursite.netlify.com/admin/ and add a blog, you will see that the right side pane doesn't have the styling you have setup for your blog post. 

It's easy to see your preview pane with styles with these steps:

1. `npm install --save netlify-cms gatsby-plugin-netlify-cms`
2. Add these: 


```
`gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        /**
         * One convention is to place your Netlify CMS customization code in a
         * `src/cms` directory.
         */
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
```

in your plugins in gatsby-config.js

3. Make a file exactly where you specified in modulePath which is `${__dirname}/src/cms/cms.js`
4. Inside the `cms.js` file, add this:


```
import CMS from "netlify-cms"

import '../fonts/fonts.css'; //if you have custom fonts
import "../css/style.css";
```

5. This is a big NOTE, run `npm run build` before `gatsby develop`

And there you have it, a preview pane with styling!

![](/assets/previewpane.png)

Rock on!
