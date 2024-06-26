function Welcome({ item }) {


    return (
        <>
            <center>

                <div>
                    {
                        // <p>the total no of items{{itemcontext}}</p>
                        // console.log(`the no of items ${itemcontext.length}`)
                        item.length != 0 ? null : <h1>I CAN CHILL</h1>

                    }
                    {/* {/* {item.length > 0 && <h1>I have a lot of work</h1>}
                {(item.length) === 0 && <h1>I can chill</h1>} */}

                    {/* <h1>I can chill</h1>  */}
                </div>
            </center>
        </>
    )
}
export default Welcome;