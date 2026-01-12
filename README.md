# Static Site Tilia with Next.js 13: React, Tailwind, Framer Motion

This is a Next.js Static Site Generation freelance project developed via Tailwind, React and Framer Motion. It promotes the sales of aparments.

## [Go to Website](https://tiliabg.com/)

[![alt text](https://github.com/VasilGVasilev/tilia/blob/main/NB/welcome-img-tilia.png)](https://tiliabg.com/)

---

[![alt text](https://github.com/VasilGVasilev/tilia/blob/main/NB/second-img.png)](https://tiliabg.com/)


## What's in the stack

- React Framework [Next.js](https://nextjs.org/)
- Styling with [Taiwlind](https://tailwindcss.com/) and [Framer Motion](https://www.framer.com/motion/?utm_source=google&utm_medium=adwords&utm_campaign=TW-WW-All-GS-UA-Traffic-20190326-Brand.Bmm_&gad=1&gclid=Cj0KCQjw2qKmBhCfARIsAFy8buLuIhI1cN0gUMS9Yjkiv5BK1Q1_5OvM0V4AaU4Gb8JMv1HzsTiSAJIaAg_3EALw_wcB)
- Shared Server by [Hostinger](https://www.hostinger.com/)

The website has mobile responsiveness, animations for a more seamless UX and its main feature is the utilization of polygon shapes to mark the status of the apartments - available, reserved, sold.

Features:

- Full responsiveness
- Animations 

## Learning achievements:
- **Creating my own Python meta program to crop apartments out of floor plans based on the polygon coordinates I gathered for on hover availability status reveal for each apartment**
- Deep dive into Framer Motion
- Understanding the difference between flex and grid
- Improved abstraction of components in relation to [Ixora](https://github.com/VasilGVasilev/nextJS)


## Performance, Accessibility, Best Practices, SEO:

![alt text](https://github.com/VasilGVasilev/tilia/blob/main/NB/lighthouse.png) 


## Other dependencies:

- react-icons
- cv2
- numpy


### Main drawback
Tailwind does not go well with conditional rendering. Explicitly, making a Link Wrapper is impossible, since Next.js does not disable conditionally Link, too. But on Link Wrapper - it does not render well if I have to feed the html attributes such as href, className dynamic data depending on whether it will be a clickable Link or a non-clickable div. So, when an appartment is sold, I will have to manually change Link to div, since I cannot disable link's clickability of Link by Next.js.
