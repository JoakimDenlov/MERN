import React from 'react';
import { Comment } from 'semantic-ui-react'
import Styles from './Review.module.css'

const CommentBox =  ({ data }) => {
    return (
        <div className={Styles.Comment}>
        <Comment.Group>
        <Comment>
        <Comment.Content>
        <Comment.Author as='a'>{data.Author}</Comment.Author>
        <Comment.Metadata>
        <div>{data.Time}</div>
        </Comment.Metadata>
        <Comment.Text>{data.Text}</Comment.Text>
        </Comment.Content>
        </Comment>
        </Comment.Group>
        </div>
    )
}
export default CommentBox