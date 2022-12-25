import React from 'react'
import Item from './Item'
import '../styles/Newcomer.css'

const Newcomer = () => {
    const dataItem = [
        {
            name: 'Zeplin',
            price: 'Free & paid',
            icons: '/assets/componentIcon/zeplin.svg',
        },
        {
            name: 'PHPStorm',
            price: 'Free',
            icons: '/assets/componentIcon/phpstorm.svg'
        },
        {
            name: 'Toolbox',
            price: 'Free',
            icons: '/assets/componentIcon/toolbox.svg'

        },
        {
            name: 'Procreate',
            price: 'Paid',
            icons: '/assets/componentIcon/procreate.svg'

        }
    ]

    return (
        <div className='new_comer_main'>
            <div className='new_comer_title'>Newcomer tools
                <p className='new_comer_desc'>Wow! see the latest update of the most recommended tools from reliable designers and developers
                </p>
                <button className='sing_up'>Explore More</button>
            </div>
            <div className='new_comer_grid'>
                {dataItem.map(e => (
                    <Item  {...e} key={e.name} />
                ))}
            </div>
        </div>
    )
}

export default Newcomer
