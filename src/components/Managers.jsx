import React from 'react'
import '../styles/Managers.css'

const Managers = () => {


    return (

        <div className='main_managers'>
            <div className='managers_wrapper'>
                <div className='arrow'>
                    <img src="\assets\managerImg\chevron-left.svg" alt="arrow" />
                </div>
                <div className='arrow_active'>
                    <img src="\assets\managerImg\arrow_left.svg" alt="arrow" />
                </div>
                <div className='managers_img'>
                    <img src="\assets\managerImg\img_hero.svg" alt="hero" />
                    <div className='managers_table'>
                        <p className='managers_name'>Ronald Richards</p>
                        <p className='Managers_position'>Product Manager</p>
                    </div>
                </div>
                <img className='img_back' src="\assets\managerImg\img_back.svg" alt="back" />
                <div className='managers_desc'>
                    Incididunt cillum do sint sint enim ullamco id deserunt mollit qui reprehenderit do.
                    Velit ex tempor cillum ad sint occaecat.
                    Do nulla velit labore occaecat do deserunt Lorem magna officia incididunt consectetur amet.
                    Sunt consectetur veniam minim ex commodo sint non. Occaecat aute officia excepteur non laboris id qui ad.
                </div>
            </div>
            <div className='managers_cliker'>
                <div className='cliker'></div>
                <div className='cliker cliker_active'></div>
                <div className='cliker'></div>
            </div>

        </div>
    )
}

export default Managers