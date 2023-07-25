import { useState } from "react";

const Home = () => {
    const [counter, setCounter] = useState(0);

    const handleDecreament =() => {
        setCounter(counter - 1)
    }

    const handleIncreament =() => {
        setCounter(counter + 1)
    }

    const [isShow, setIsShow] = useState(true);
    const handleToggle =() => {
        setIsShow(!isShow)
    }

    const limit = 10;
    const text = "Lorem u mjhbghvfrtcr"

    const isSmall = text.length < limit;
    const [isLess, setIsLess] = useState(isSmall)
    const handleTextLength =() => {
        setIsLess(!isLess)
    }

    return (
        <>
            <div>
                <button onClick={handleDecreament}>-</button>
                    <span>Count: {counter} </span>
                <button onClick={handleIncreament}>+</button>
            </div>
            <>
               {isShow && (
                    <div>
                        Just div
                    </div>
                ) }
                <button onClick={handleToggle}>
                    {isShow ? 'Hide' : 'Show'}
                </button>
            </>
            <>
                <p>
                  {
                    (isLess || isSmall) ?  text  : `${text.slice(0,limit)}...`
                    }  
                </p>
                <button onClick={handleTextLength}>
                    {(isLess || isSmall) ? 'See less'  :  'See more'}
                </button>
            </>
        </>
    )
}

export default Home