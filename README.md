# Next.js SSG website

This is a Next.js Static Site Generation freelance project developed via Tailwind, React and Framer Motion. It promotes the sales of aparments. The website has mobile responsiveness, animations for a more seamless UX and its main feature is the utilization of polygon shapes to mark the status of the apartments - available, reserved, sold.

## [Go to Website](https://ixorabg.com/)

[![alt text](https://github.com/VasilGVasilev/nextJS/blob/ixoraInter/ixora/welcome-img-ixora.png)](https://ixorabg.com/)

## What's in the stack

- React Framework [Next.js](https://nextjs.org/)
- Styling with [Taiwlind](https://tailwindcss.com/) and [Framer Motion](https://www.framer.com/motion/?utm_source=google&utm_medium=adwords&utm_campaign=TW-WW-All-GS-UA-Traffic-20190326-Brand.Bmm_&gad=1&gclid=Cj0KCQjw2qKmBhCfARIsAFy8buLuIhI1cN0gUMS9Yjkiv5BK1Q1_5OvM0V4AaU4Gb8JMv1HzsTiSAJIaAg_3EALw_wcB)
- Shared Server by [Hostinger](https://www.hostinger.com/)

## Development

First, install the dependencies:
```bash
npm i
# or
yarn i
# or
pnpm i
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Performance, Accessibility, Best Practices, SEO:

![alt text](https://github.com/VasilGVasilev/nextJS/blob/ixoraInter/ixora/lighthouse.png)

Main drawback is that Tailwind does not go well with conditional rendering. Explicitly, making a Link Wrapper is impossible, since Next.js does not disable conditionally Link, too. But on Link Wrapper - it does not render well if I have to feed the html attributes such as href, className dynamic data depending on whether it will be a clickable Link or a non-clickable div. So, when an appartment is sold, I will have to manually change Link to div.  