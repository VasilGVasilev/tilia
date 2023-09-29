 tailwind does not work adequatly with dynamic template strings
```sh
export const LinkWrapper = ({ status, appLink, appCss }) => {
    if (status) {
        return (<Link href={`/apartments/app/${appLink}`}><div className={`absolute ${appCss} h-full w-full z-10 ${green}`} title='СВОБОДЕН'></div></Link>)
    } else {
        return (<div className={`absolute ${appCss} h-full w-full z-10 ${red}`} title='ПРОДАДЕН' ></div>)
    }
}
```