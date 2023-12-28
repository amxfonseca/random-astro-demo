



const Random = () => {
    const random = Math.floor(Math.random() * 1e12)

    return (
        <div className='flex space-x-2 items-center'>
            <div className='text-6xl'>🤖</div>
            <div>
                <p>Computing a guaranteed random number...</p>
                <p>The result is: {random}</p>
            </div>
        </div>
    )
}

export default Random