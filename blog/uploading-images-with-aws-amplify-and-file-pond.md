---
path: /blog/uploading-images-with-aws-amplify-and-file-pond
date: 2019-03-19T00:35:26.911Z
title: Uploading images with AWS Amplify and File Pond
thumbnail: /assets/filepond_aws_amplify.jpg
tags:
  - web development
  - aws
  - react
---

I love [AWS Amplify](https://aws-amplify.github.io/), it makes all things cloud based development easier. In this tutorial, I will teach you how to use Cognito (Amplify Auth) and S3 (Amplify Storage).

What I typically do is make two repos. One repo is for all backend, I install and configure all Amplify backend there. Another repo is for frontend, can be your application made in React, Angular or Vue. I choose React.

## Configuring your backend

Install Amplify CLI: [installation](https://github.com/aws-amplify/amplify-cli)

After installation, in your backend repo, run this command: `amplify add storage`

Go through the instructions and the steps, wait for the process and you're done with the backend!

## Setting up your frontend

On your React repo, [install FilePond](https://github.com/pqina/filepond).
Also `npm install filepond-plugin-file-validate-type`, we will use this for restricting file types.

Import these:

```javascript
import "filepond/dist/filepond.min.css"
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation"
import FilePondPluginImagePreview from "filepond-plugin-image-preview"
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type"
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css"
```

And add this above your class block:

`registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview, FilePondPluginFileValidateType);`

Inside render, your code could look something like this:

```javascript
<FilePond
  ref={(ref) => (this.pond = ref)}
  files={this.state.picture}
  allowMultiple={false}
  maxFiles={1}
  acceptedFileTypes={["image/jpg", "image/jpeg", "image/png", "image/gif"]}
  server={null}
  instantUpload={false}
  onupdatefiles={(fileItems) => {
    this.setState({
      picture: fileItems.map((fileItem) => fileItem.file),
    })
  }}
></FilePond>
```

It's important to put instantUpload to false and server to null, this is to disable automatic uploading after choosing the files/images.

## Using AWS Amplify Storage

In your index.js, you should configure your Amplify:

```javascript
Amplify.configure({
  Auth: {
    identityPoolId: process.env.REACT_APP_identityPoolId,
    region: process.env.REACT_APP_awsRegion,
    userPoolId: process.env.REACT_APP_userPoolId,
    userPoolWebClientId: process.env.REACT_APP_userPoolAppClientId,
  },
  Storage: {
    bucket: process.env.REACT_APP_bucketName,
    region: process.env.REACT_APP_awsRegion,
    identityPoolId: process.env.REACT_APP_identityPoolId,
  },
})
```

My credentials are saved in .env, prefixed with `REACT_APP_`

## Uploading with clicking a button

Make a submit button. Attach a handler in it and it could look something like this:

```javascript
async submitForm() {
        let picture = this.state.picture[0]

        try {
            await Storage.put(picture.name, picture, {
                contentType: picture.type
            })
        } catch (e) {
            console.error(e)
        }
}
```

And there you go! Check your uploaded image in your s3 bucket in AWS console.

Feel free to ask any questions on comments below.

Cheers,

FM
