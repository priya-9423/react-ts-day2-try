import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class TimerComponet extends Component
{
constructor(props)
{
  super(props);
  this.state = {
    Timer : new Date().toString()
  }
}

componentDidMount()
{
  setInterval(() => this.UpdateTimer(), 1000)
}

UpdateTimer()
{
  this.setState({
    Timer: new Date().toString()
  })
}

render()
{
return(
<div>
  Timer: {this.state.Timer.toString()}
</div>
)
};
} 
