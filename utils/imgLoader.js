export const imageLoader = ({ src, width, quality }) => {
    return `https://ixorabg.com${src}?w=${width}&q=${quality || 75}`;
};


// Crucial for Image Component loading, which as a property 'loader' is not very explicit in the Next.js docs, used Phind AI for instructions
// Image loader is necessary to faciliate loading images that are hosted on a remote server:
// https://nextjs.org/docs/app/building-your-application/optimizing/images#loaders
// Basically, you either provide full url in src={} or you import manually every image /import profilePic from './me.png' -> src={profilePic}/