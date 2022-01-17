import React, { useState } from 'react';
import catImg from '../assets/media/koto.webp';
import classNames from "classnames";

export const Card = (props) => {
    const [hover, setHover] = useState(false)
    const {
        data,
        state,
        funcHand
    } = props

    const card = classNames({
        'card': true,
        "card _purple": state === 1,
        'card _gray': state === 2
    })
    const brandTitle = classNames({
        'brand-title': true,
        'brand-title _gray': state === 2
    })
    const withClassName = classNames({
        '': true,
        '_gray': state === 2
    })
    const weight = classNames({
        'weight': true,
        "weight _purple": state === 1,
        'weight _gray': state === 2,
    })
    const bottomLinks = classNames({
        'status-links': true,
        "status-links _yellow": state === 2,
    })

    return (
        <div className='card-layout' onClick={funcHand}>
            <div
                className={card}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <div className="inner-card">
                    {state === 2 && <div className="overlay">{}</div>}
                    <h4 className='brand-credo'
                        style={{color: state === 1 && hover ? '#D91667' : ''}}>
                        {state === 1 && hover ? 'Котэ не одобряет?' : 'Сказочное заморское явство'}
                    </h4>
                    <h1 className={brandTitle}>Нямушка</h1>
                    <h3 className={withClassName}>{data.nyamushkaWith}</h3>
                    <h4 className="portions"><b>{data.portions}</b> порций</h4>
                    <h4 className="present"><b>{data.toPresent.mouses} </b>{data.toPresent.twords} в подарок</h4>
                    {data.toPresent.happyCustomer && <h4> {data.toPresent.happyCustomer} </h4>}
                    <div className="image">
                        <img src={catImg} alt="cute-cat"/>
                    </div>
                    <div className={weight}>
                        <h6 className='weight-count'>{data.weightCount}</h6>
                        кг
                    </div>
                </div>
            </div>
            <p className={bottomLinks}>
                {state === 0
                    ? 'Чего сидишь? Порадуй котэ,'
                    : state === 1
                        ?data.description
                        :data.descriptionEnd
                }
                {state === 0 && <span><a href="/">купи</a></span>}
            </p>
        </div>
    )
}

