import React, { useState } from 'react';
import { Card } from "./Card";
import { v4 as uuidv4 } from 'uuid';

export const App = () => {
    const [cardOne, setCardOne] = useState(0);
    const [cardTwo, setCardTwo] = useState(1);
    const [cardThree, setCardThree] = useState(2);
    //0 === blue border
    //1 === purple border
    //2 === gray border
    const arrData = [
        {
            id:uuidv4(),
            description:'Печень утки разварная с артишоками.',
            descriptionEnd:'Печалька, с фуа-гра закончился.',
            nyamushkaWith:'с фуа-гра',
            portions:10,
            toPresent:{mouses:'', twords: 'мышь', happyCustomer: ''},
            weightCount:'0,5',
            state: cardOne,
            func: handlerOne,
        },
        {
            id:uuidv4(),
            description:'Головы щучьи с чесноком да свежашая сёмгушка.',
            descriptionEnd:'Печалька, с рыбой закончился.',
            nyamushkaWith:'с рыбой',
            portions:40,
            toPresent:{mouses:2, twords:'мыши' , happyCustomer: ''},
            weightCount:'2',
            state: cardTwo,
            func: handlerTwo,
        },
        {
            id: uuidv4(),
            description:'Филе из цыплят с трюфелями в бульоне.',
            descriptionEnd:'Печалька, с курой закончился.',
            nyamushkaWith:'c курой',
            portions:100,
            toPresent:{mouses:5, twords:'мышей', happyCustomer: 'заказчик доволен'},
            weightCount:'5',
            state: cardThree,
            func: handlerThree,
        }
    ];

    function handlerOne() {
        cardOne < 2
            ? setCardOne(cardOne + 1)
            : setCardOne(0)
        // e.currentTarget.
        // e.target.style.color = 'pink'
        //kiss
    }
    function handlerTwo() {
        cardTwo < 2
            ? setCardTwo(cardTwo + 1)
            : setCardTwo(0)
    }
    function handlerThree() {
        cardThree < 2
            ? setCardThree(cardThree + 1)
            : setCardThree(0)
    }

    return (
        <>
            <div className="overlay">{}</div>
            <div className="container">
                <p className='title'>Ты сегодня покормил кота?</p>
                <div className="cards-wrapper">
                    {arrData.map(elem => <Card
                        key={elem.id}
                        state={elem.state}
                        funcHand={elem.func}
                        data={elem}
                    />)}
                </div>
            </div>
        </>
    );
}

