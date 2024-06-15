import { FriendList } from './FriendList/FriendList';
import friends from '../json/friends.json';
import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOption } from './FeedbackOption/FeedbackOption';
import  Section  from './Section/Section';

export class App extends Component {
  //initial state
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    count: 0,
  };
  //
  countTotalFeedback = () => {
    const {good, neutral, bad} = this.state;
    return good + neutral + bad;
  };
  //change state when clicked
  handleClick = type => {
    this.setState(prevState => ({
      ...prevState,
      [type]: prevState[type]+1,
    }));
  };
  //simple change state
  handleClick2 = () => {
    this.setState(prevState => ({
      ...prevState,
      count: prevState.count + 1,
    }));
  };

  render() {
    const {good, neutral, bad, count} = this.state;
    const total = this.countTotalFeedback();
    const options = ['good', 'neutral', 'bad'];
    return (
      <>
      <FriendList friends={friends}/>
      {/*button to setState simple
      <div>
        <button onClick={this.handleClick2}>Counter</button>
      </div>
      */}
      <Section title="Please leave feedback">
      {/*make this a components*/}
      <FeedbackOption options={options} onLeaveFeedback={this.handleClick}/>
      </Section>
      <Section title="Statistics">
      {/*make this components*/}
      <Statistics good={good} neutral={neutral} bad={bad} total={total} count={count} />
      </Section>
      </>
    );
  }
}



// class components
// export class App extends Component {

//   handleClick = () => {
//     console.log("I'm clicked");
//   };

//   //whenever there is parameter witht the handler, use callback
//   handleClickTest = name => {
//     console.log(`Hello! I'm clicked by ${name}.`)
//   };

//   render() {
//     return (
//       <div>
//       <FriendList friends={friends} />
//       <button onClick={this.handleClick}>Click Here</button>
//       <br></br>
//       <button onClick={() => this.handleClickTest("Joseph")}>Click Me</button>
//       </div>
//     );
//   }
// }



// functional components
// export const App = () => {
//   return (
//       <FriendList friends={friends} />
//   );
// };
