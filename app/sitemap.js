const url = 'https://ixorabg.com'

export default async function sitemap() {
    const routes = ['', '/apartments', '/contacts', 'description', 'investor', '/apartments/firstFloor', '/apartments/secondFloor', '/apartments/thirdFloor', '/apartments/penthouse', '/apartments/parking'].map((route) => ({
        url:`${url}${route}`,
        lastModified: new Date().toISOString()
    }))
    return [...routes]
}