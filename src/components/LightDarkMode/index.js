// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    container: 'container',
    heading: 'heading',
    mode: 'Light Mode',
  }

  changeMode = () => {
    const {mode} = this.state
    if (mode === 'Light Mode') {
      this.setState(pre => ({
        container: 'container-light-mode',
        heading: 'heading-Light-mode',
        mode: 'Dark Mode',
      }))
    } else {
      this.setState(pre => ({
        container: 'container',
        heading: 'heading',
        mode: 'Light Mode',
      }))
    }
  }

  render() {
    const {container, heading, mode} = this.state
    return (
      <div className="outer-container">
        <div className={container}>
          <h1 className={heading}>Click To Change Mode</h1>
          <button type="button" onClick={this.changeMode}>
            {mode}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
