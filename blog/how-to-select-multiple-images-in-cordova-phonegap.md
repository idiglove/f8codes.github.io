---
path: /blog/selecting-multiple-images-in-cordova
date: 2019-07-12T06:17:11.760Z
title: How to select multiple images in Cordova / Phonegap
thumbnail: /assets/multiple_image_picker.png
tags:
  - web development
  - cordova
  - mobile
---
My current job allows me to develop mobile apps -- using Cordova. 

I came to a blocker when I needed to allow users to select multiple images. This is how I did it:



\`\``

function onDeviceReady() {

						function hasReadPermission() {

							window.imagePicker.hasReadPermission(

								function(result) {

									if (result == false) {

										requestReadPermission();

									} else {

										window.imagePicker.getPictures(

											function(results) {

												for (var i = 0; i < results.length; i++) {

													Entries.uploadPhoto("data:image/jpeg;base64," + results\[i]);

												}

											}, function (error) {

												console.log('Error: ' + error);

											}, {

												outputType: 1, // 1 = base64 string output

												quality: 50,

												width: 600,

												height: 600,

											}

										);

									}

								}

							)

						}

						

						function requestReadPermission() {

							var permissions = cordova.plugins.permissions;

							permissions.requestPermission(permissions.READ_EXTERNAL_STORAGE, success, error); 

							function error() {

								console.warn('Camera permission is not turned on');

							}



							function success( status ) {

								if( !status.hasPermission ) {

									console.log('no permission')

								} else {

									hasReadPermission();

								}

							}

						}



						hasReadPermission();

					}

					

					document.addEventListener('deviceready', onDeviceReady);\
\`\``
