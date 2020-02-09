import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CommentApp from './CommentApp'
import './index.css';


// class Clock extends Component {
//     constructor () {
//       super()
//       this.state = {
//         date: new Date()
//       }
//     }
//     //我们给 Clock 启动定时器
//     componentWillMount () {
//         this.timer = setInterval(() => {
//           this.setState({ date: new Date() })
//         }, 1000)
//       }
  
//     render () {
//       return (
//         <div>
//           <h1>
//             <p>现在的时间是</p>
//             {this.state.date.toLocaleTimeString()}
//           </h1>
//         </div>
//       )
//     }
//   }
//   class Index extends Component {
//     render () {
//       return (
//         <div>
//           <Clock />
//         </div>
//       )
//     }
//   }
ReactDOM.render(<CommentApp />, document.getElementById('root'));
// ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
