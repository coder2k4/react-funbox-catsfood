import React from "react";
import FoodItem from "../food-item/FoodItem";

const FoodList = () => {


    const data = [
        {
            available : true,
            description: {
                default: 'Сказочное заморское яство',
                active: 'Сказочное заморское яство',
                selected: 'Котэ не одобряет?',
                disabled: 'Сказочное заморское яство'
            },
            productName : 'Нямушка',
            option: 'с фуа-гра',
            extra: ['10 порций', 'мышь в подарок'],
            weight: 0.5,
            footer: {
                default: 'Чего сидишь? Порадуй котэ, купи.',
                active: 'Печень утки разварная с артишоками.',
                selected: 'Печень утки разварная с артишоками.',
                disabled: 'Печалька, с фуа-гра закончился.'
            }
        },
        // 2
        {
            available : true,
            description: {
                default: 'Сказочное заморское яство',
                active: 'Сказочное заморское яство',
                selected: 'Котэ не одобряет?',
                disabled: 'Сказочное заморское яство'
            },
            productName : 'Нямушка',
            option: 'с рыбой',
            extra: ['40 порций', '2 мыши в подарок'],
            weight: 2,
            footer: {
                default: 'Чего сидишь? Порадуй котэ, купи.',
                active: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
                selected: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
                disabled: 'Печалька, с рыбой закончился.'
            }
        },
        // 3
        {
            available : false,
            description: {
                default: 'Сказочное заморское яство',
                active: 'Сказочное заморское яство',
                selected: 'Котэ не одобряет?',
                disabled: 'Сказочное заморское яство'
            },
            productName : 'Нямушка',
            option: 'с курой',
            extra: ['100 порций', '5 мышей в подарок', 'заказчик доволен'],
            weight: 5,
            footer: {
                default: 'Чего сидишь? Порадуй котэ, купи.',
                active: 'Филе из цыплят с трюфелями в бульоне.',
                selected: 'Филе из цыплят с трюфелями в бульоне.',
                disabled: 'Печалька, с курой закончился.'
            }
        },
    ]


    return (
        <section className="cats">
            <div className="container">
                <div className="row">
                    <h2>Ты сегодня покормил кота?</h2>
                    <div className="product">

                        {data.map((cartData, i) => <FoodItem key={i} cartData={cartData}/>)}

                    </div>
                </div>
            </div>
        </section>
    )
}

export default FoodList
