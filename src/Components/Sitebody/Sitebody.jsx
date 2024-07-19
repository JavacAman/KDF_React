import React from 'react'
import './Sitebody.css';
import bg from '../../image/bg.jpg';

function Sitebody() {
    return (
        <div>
            <div className='bg-body'>
                <img src={bg} alt="bg" className='background-image' />
            </div>

            <div className='hc'>
                <div className='home-content'>
                    <h4>DISCUSS • DISCOVER • SHARE</h4>
                    <p>CREATIVE & EXPERIENCED</p>
                    <h5>OUR BEST COMES OUT WHEN WE HAVE HONEST DISCUSSIONS</h5>
                    <button type='submit'>Join</button>
                </div>
            </div>
        </div>
    );
}

export default Sitebody

