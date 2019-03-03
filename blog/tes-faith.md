---
path: /blog/how-to-create-free-cms-with-netlify-cms-and-gatsby
date: 2019-03-03T01:01:40.424Z
title: How to create a free cms with Netlify CMS and Gatsby
---
## Prerequisites:

1. You should have a Github Page. Follow the steps of creating a Gatsby/Github page from here: <https://faithmorante.netlify.com/blog/how-i-created-my-website-without-spending-a-dime>
2. Netlify account. Make an account in Netlify: app.netlify.com

## Steps:

Click **`New site from Git`**

![](/assets/netlify1.jpg)

Choose Github

NOTE: Your development files, not the built static files, should be in your **master** branch.

Your build deploy settings should be like this:

![](/assets/netlify2.jpg)

Run:
`npm install --save netlify-cms gatsby-plugin-netlify-cms`

In your gatsby-config.js, add this:

``` 
module.exports = {

   **plugins: \[\`gatsby-plugin-netlify-cms\`],**

 }
```

Create this file:
`static/admin/config.yml`

If you don't have a /static/admin folder yet, create it.

Add this:

```backend:
  name: github
  repo: your-username/your-repo-name

  media_folder: static/assets
  public_folder: assets

  collections:
   - name: blog
     label: Blog
     folder: blog
     create: true
     fields:
      - { name: path, label: Path }
      - { name: date, label: Date, widget: date }
      - { name: title, label: Title }
      - { name: body, label: Body, widget: markdown }
```

You can checkout the admin control panel by running `npm run develop` then go to `localhost:8000/admin/` The trailing slash is required and important.

## Blog Folder Structure

Your blog should be in `${__dirname}/blog`

Edit your gatsby-source-filesystem plugin in gatsby-config.js like this:

```
{
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `src`,
            path: `${__dirname}/blog/`,
        },
    },
```

## Deployment

Push your commits to master. Go to Deploys tab in app.netlify.com. You will see your build status there.


## Authorization

Follow this to authenticate your github account in the CMS: <https://www.netlify.com/docs/authentication-providers/#using-an-authentication-provider>

Once it is all set up, go to your site \`domain.netlify.com/admin/\` and blog away!


Cheers!
