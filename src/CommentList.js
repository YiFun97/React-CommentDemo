import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {
  static defaultProps = {
    comments: []
  }
  handleDeleteComment(index) {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(index)
    }
  }

  render() {
    return (
      <div>
        {this.props.comments.map((comment, i) => <Comment
         key={i}
        index={i}
        onDeleteComment={this.handleDeleteComment.bind(this)} 
         comment={comment}
        
        />)}
      </div>
    )
  }
}

export default CommentList