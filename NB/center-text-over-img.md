just apply top 50% left 50% but also translate(-50%, -50%):

```sh

<div className="relative">
    <img />
    <div className="absolute top-0 left-1/2 translate-x-[-50%] translate-y-[-50%]"> text</div> 
</div>

```

You might need to put Image in a div with relative positioning 
```sh

<div className="relative">
    <div className='relative'>
        <img />
    </div>
    <div className="absolute top-0 left-1/2 translate-x-[-50%] translate-y-[-50%]"> text</div> 
</div>

```