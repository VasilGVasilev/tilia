const url = 'https://tiliabg.com/'

export default async function sitemap() {
    const routes = ['', 'apartments', 'contacts', 'description', 'investor', 'apartments/floor/garage-2/', 'apartments/floor/garage-1/', 'apartments/floor/first-floor/', 'apartments/floor/second-floor/', 'apartments/floor/third-floor/', 'apartments/floor/fourth-floor/', 'apartments/floor/fifth-floor/', 'apartments/floor/sixth-floor/', 'apartments/floor/seventh-floor/', 'apartments/floor/eigth-floor/', 'apartments/floor/ninth-floor/', 'apartments/app/A1/', 'apartments/app/A2/', 'apartments/app/A4/', 'apartments/app/A5/', 'apartments/app/A8/', 'apartments/app/A9/', 'apartments/app/A12/', 'apartments/app/A13/', 'apartments/app/A16/', 'apartments/app/A17/', 'apartments/app/A20/', 'apartments/app/A21/', 'apartments/app/A24/', 'apartments/app/A25/', 'apartments/app/A28/', 'apartments/app/A29/', 'apartments/app/B3/', 'apartments/app/B6/', 'apartments/app/B7/', 'apartments/app/B10/', 'apartments/app/B11/', 'apartments/app/B14/', 'apartments/app/B15/', 'apartments/app/B18/', 'apartments/app/B19/', 'apartments/app/B22/', 'apartments/app/B23/', 'apartments/app/B26/', 'apartments/app/B27/', 'apartments/app/B30/', 'apartments/app/B31/'].map((route) => ({
        url:`${url}${route}`,
        lastModified: new Date().toISOString()
    }))
    return [...routes]
}