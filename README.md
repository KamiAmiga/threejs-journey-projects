# ThreeJS Journey projects

> A little showcase of the ThreeJS exercises made with the course [threejs-journey](https://threejs-journey.com/) by [Bruno Simon](https://bruno-simon.com/). It is made using [Astro](https://astro.build/) and [Typescript](https://www.typescriptlang.org/)

## 🚀 Project Structure

The project follows the default Astro structure :

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── *.astro
│   ├── layouts/
│   │   └── *.astro
│   └── pages/
│       └── index.astro
│       └── *.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where are put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Documentation

* [Astro documentation](https://docs.astro.build)
* [ThreeJS website](https://threejs.org/)
