import React from 'react';
import './Timeline.css'
import InfoBox from './InfoBox'
 
const Data = [
    {
        text: 'Im just writing some random stuff to test some stuff out',
        date: 'Decemeber 03 2020',
        category: {
            tag: 'Post 1',
            color: 'rgba(53, 181, 255, 0.514)'
        }
    },
    {
        text: 'Just some other random stuff to test this shit out',
        date: 'December 10 2020',
        category: {
            tag: 'post 2',
            color: 'rgba(53, 181, 255, 0.514)'
        }
    }
]

const Timeline = () =>
    Data.length > 0 && (
        <div className="timeline-container">
            {Data.map((data, idx) => (
                <InfoBox data={data} key={idx} />
            ))}
        </div>
    );

export default Timeline