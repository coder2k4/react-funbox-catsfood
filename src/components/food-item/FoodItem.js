import React, {useState} from "react";
import {extraNumberWrapper} from "../../utils/utils";


const FoodItem = ({cartData}) => {

    const [status, setStatus] = useState(cartData.available ? 'default' : 'disable')

    const extraGenerations = cartData.extra.map((extra, i)=> {
        const {number, string} = extraNumberWrapper(extra)
        return (<li key={i}><strong>{number} </strong>{string}</li>)
    })


    const mouseClickHandler = () =>
    {
        if (status === 'active' || status === 'selected')
            setStatus('default')
        else if(status !== 'disable')
            setStatus('active')
    }
    const mouseOverHandler = () => status === 'active' && setStatus('selected')
    const mouseEnterHandler = () => status === 'selected' && setStatus('active')



    return (
        <div className={"product__cart " + status} onMouseLeave={ mouseOverHandler } onMouseEnter={mouseEnterHandler}>
            <div className="product__cart-wrap" onClick={mouseClickHandler}>
                <div className="product__cart-body">
                    <span>{cartData.description[status]}</span>
                    <h3>{cartData.productName}</h3>
                    <p>{cartData.option}</p>
                    <ul>
                        {extraGenerations}
                    </ul>
                    <div className="product__cart-body-circle">
                        <div className="weight">{cartData.weight}</div>
                        <div className="dimension">кг</div>
                    </div>
                </div>
            </div>
            <div className="product__cart-agitation">
                {status === 'default' ? <>Чего сидишь? Порадуй котэ, <a href="#" title="купи пжлста!" onClick={mouseClickHandler}>купи</a><span>.</span></>: cartData.footer[status]}
            </div>
        </div>
    )
}

export default FoodItem