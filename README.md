# klara.digital™

Discovering my otherness & my discomfort with the inherit nature of blogs, I was thrilled to one day discover the concept of Digital Gardens. At that time I went down a rabbit hole, jumping from one page to the next with the starting point being [Maggie Appleton's 'A Brief History & Ethos of the Digital Garden](https://maggieappleton.com/garden-history)'. It's basically a little corner for you to carve out for yourself on the internet, sharing your personal knowledge in whatever depth that you wish on topics that interest you – always with the possibilty to grow, cultivate & collaborate.

Digital Garden Pattern Language:

- topography over timeline
- continuous growth
- imperfection & learning in public

This concept appealed to me so very much, that I couldn't forget about it in all these months. So here we are.

Be prepared for an eclectic mix of technical content around web development & a11y, personal discoveries about my neurodiversity, and random irl & digital craft & diy projects. 🌱

It's gonna be fun! 🤓

---

## Welcome to Remix + Vite

📖 See the [Remix docs](https://remix.run/docs) and the [Remix Vite docs](https://remix.run/docs/en/main/guides/vite) for details on supported features.

### Development

Run the Vite dev server:

```shellscript
npm run dev
```

### Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

#### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`

## Netlify Setup

1. Install the [Netlify CLI](https://docs.netlify.com/cli/get-started/):

```sh
npm i -g netlify-cli
```

If you have previously installed the Netlify CLI, you should update it to the latest version:

```sh
npm i -g netlify-cli@latest
```

2. Sign up and log in to Netlify:

```sh
netlify login
```

3. Create a new site:

```sh
netlify init
```

## Development

Ensure all packages are installed by running:

```sh
npm install
```

Run

```sh
netlify dev
```

Open up [http://localhost:8888](http://localhost:8888), and you're ready to go!

### Serve your site locally

To serve your site locally in a production-like environment, run

```sh
netlify serve
```

Your site will be available at [http://localhost:8888](http://localhost:8888). Note that it will not auto-reload when you make changes.

## Deployment

There are two ways to deploy your app to Netlify, you can either link your app to your git repo and have it auto deploy changes to Netlify, or you can deploy your app manually. If you've followed the setup instructions already, all you need to do is run this:

```sh
# preview deployment
netlify deploy --build

# production deployment
netlify deploy --build --prod
```
