# klara.digital™

Discovering my otherness & my discomfort with the inherit nature of blogs, I was thrilled to one day discover the concept of Digital Gardens. At that time I went down a rabbit hole, jumping from one page to the next with the starting point being [Maggie Appleton's 'A Brief History & Ethos of the Digital Garden](https://maggieappleton.com/garden-history)'. It's basically a little corner for you to carve out for yourself on the internet, sharing your personal knowledge in whatever depth that you wish on topics that interest you – always with the possibilty to grow, cultivate & collaborate.

Digital Garden Pattern Language:

- topography over timeline
- continuous  growth
- imperfection & learning in public

This concept appealed to me so very much, that I couldn't forget about it in all these months. So here we are.

Be prepared for an eclectic mix of technical content around web development & a11y, personal discoveries about my neurodiversity, and random irl & digital craft & diy projects. 🌱

It's gonna be fun! 🤓

---

## Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

### Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

### Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

#### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`

#### Using a Template

When you ran `npx create-remix@latest` there were a few choices for hosting. You can run that again to create a new project, then copy over your `app/` folder to the new project that's pre-configured for your target server.

```sh
cd ..
# create a new project, and pick a pre-configured host
npx create-remix@latest
cd my-new-remix-app
# remove the new project's app (not the old one!)
rm -rf app
# copy your app over
cp -R ../my-old-remix-app/app app
```
