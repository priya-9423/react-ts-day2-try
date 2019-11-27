import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class TimerComponet extends Component
{
constructor(props)
{
  super(props);
  this.state = {
    Timer : new Date()
  }
}

componentDidMount()
{
  this.functionhandler = this.UpdateTimer()
  setInterval(() => this.UpdateTimer(), 1000)
}

componentWillUnmount()
{
  clearInterval(this.UpdateTimer());
}

UpdateTimer()
{
  this.setState({
    Timer: new Date()
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
