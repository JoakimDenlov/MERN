import React from 'react';
import CommentBox from './Comment'
import Styles from './Review.module.css'

const data = [
    {
        Author: 'Joakim',
        Time: '2020-12-05',
        Text: 'Wow this website sucks'
        },
    {
        Author: 'Joakims Mom',
        Time: '2020-12-05',
        Text: 'wow no this website is amazing!'
        }
]

const Review = ( ) => {
    return (
        data.length > 0 && (
            <div className={Styles.Main}>
                {data.map((data, idx) => (
                    <CommentBox data={data} key={idx} />
                ))}
            </div>
        )
    );
}
export default Review