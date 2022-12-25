import React from 'react'
import '../styles/Popular.css'
import Item from './Item'

const Popular = () => {

    const dataItem = [
        {
            name: 'FIGMA',
            price: 'Free',
            icons: '/assets/componentIcon/figma.svg',
        },
        {
            name: 'Sketch',
            price: 'Trial&Paid',
            icons: '/assets/componentIcon/sketch.svg'
        },
        {
            name: 'Visual Studio Code',
            price: 'Free',
            icons: '/assets/componentIcon/visual-studio-code.svg'

        },
        {
            name: 'Slack',
            price: 'Free & Paid',
            icons: '/assets/componentIcon/slack.svg'

        },
        {
            name: 'Notion',
            price: 'Free & Paid',
            icons: '/assets/componentIcon/notion.svg'

        },
        {
            name: 'Invision',
            price: 'Free & Paid',
            icons: '/assets/componentIcon/invision.svg'

        }
    ]

    return (
        <div className='main_pipular'>
            <div className='title_popular'>
                <h1 className='title_popular_tag'>Most popular tools</h1>
                <p className='title_popular_desc'>Tools for the best Designers and Developers
                    most popularly used in the world</p>
            </div>
            <div className='grid_items'>
                {dataItem.map(e => (
                    <Item name={e.name} price={e.price} icons={e.icons} key={e.name} />
                ))}
            </div>
            <div className='_main_load'>Load More</div>
        </div>
    )
}

export default Popular