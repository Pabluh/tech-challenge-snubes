# tech-challenge-snubes

Application was developed using Next.js and two complementary libraries for animating images and the menu on the page.

The service used was the Geoapify API so it can return the user`s location based on their browser's latitude and longitude orientations.

Country information is in JSON format.

I used from the API creation feature inside the pages/api folders to simulate sending the email with the data filled through the form at http://localhost:3000/api/email.

Please, edit the [email.js] file inside `${pages/api}` and change the status from 200 to 404 to simulate the form submission error, block the URL in dev tools or simply change the path when making the post.

To start the application please clone this repo and run inside the folder 

```sh
yarn && yarn dev
```

Any questions or clarifications please let me know.
