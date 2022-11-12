# Portfolio

A portfolio template for which you need no coding skills.

**Features**:

- ⚛️ Built with Next.js.
- 💙 Written in TypeScript.
- 🎨 Styled with TailwindCSS.
- ⚙️ Configuration file.
- ✈️ Deployable in seconds.
- 💻 Responsive, modern design.
- 📱 Mobile-friendly.
- 🛠 Customizable.
- 🚀 Super fast.

**Demo** (deployed on Vercel):

- https://marinhedes.com

## How to use

- ### One-click deployment

#### Vercel (recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FSincerelyFaust%2Fportfolio&project-name=portoflio&repo-name=portfolio&demo-title=Portfolio&demo-description=A%20Next.js%20portfolio%20template%20by%20Marin%20He%C4%91e%C5%A1&demo-url=https%3A%2F%2Fmarinhedes.com&demo-image=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F44751736%3Fv%3D4)


#### Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/sincerelyfaust/portfolio)

- ### Clone

Clone this repository from GitHub:

```sh
git clone https://github.com/SincerelyFaust/portfolio
```

### Run locally

To develop and locally test this website:

#### Install development tools:

1. [Install Node.js and NPM](https://nodejs.org/en/download/package-manager/)
1. [Install PNPM](https://pnpm.io/installation) (recommended opposed to NPM/Yarn)
1. Code editor of your choice (I recommend [VSCode](https://code.visualstudio.com/))

#### Install dependencies:

Install node modules required to run the website by running:

```
pnpm i
```

#### Start the Next.js dev server:

```
pnpm dev
```

In a browser, load the page [localhost:3000](http://localhost:3000) and you should now be able to test the website while making your changes.
Next.js' dev server has hot reloading so no need to restart the instance when it's running!

#### Build:

After making your changes and verifying it all works in the dev server, furtherly test them out by building the website:

```
pnpm build
```

#### Start:

```
pnpm start
```

In a browser, load the page [localhost:3000](http://localhost:3000) and you should now be able to view the built website.

### Add your details

- Information

The [`config.ts`](config.ts) file contains all the information shown on the website, edit it with your details.

- Images

Images are located in the [`public/images/`](/public/images/) folder, it is imperative when upon replacing the existing ones with your own that you keep the same file names.

```
public
└── images
    ├── favicon
    └── profile
```

**Note:** for generating favicons located in [`public/images/favicon`](/public/images/) folder, you can use [this service](https://favicon.io/favicon-converter/).

- Short links

Short links are defined in [`next.config.js`](next.config.js).

### Deploy

Below are a few options I'd personally recommend, you can find more deployment options [here](https://nextjs.org/docs/deployment).

#### Vercel (recommended)

- https://vercel.com/guides/deploying-nextjs-with-vercel#deploy-next.js-to-vercel
- https://nextjs.org/learn/basics/deploying-nextjs-app/deploy

#### GitHub Pages

- https://dev.to/github/how-to-host-a-static-nextjs-site-on-github-pages-4pe0

#### Netlify

- https://www.netlify.com/blog/2020/11/30/how-to-deploy-next.js-sites-to-netlify/

#### Heroku

- https://elements.heroku.com/buildpacks/mars/heroku-nextjs

## License

Licensed under the [MIT license](LICENSE).