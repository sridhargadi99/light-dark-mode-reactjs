// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    stage: false,
    description: 'Light Mode',
    styling: 'card-container-background1',
    headStyle: 'heading-color1',
  }

  modeButton = () => {
    const {stage} = this.state

    if (stage === false) {
      this.setState(() => ({stage: true}))
      this.setState(() => ({description: 'Dark Mode'}))
      this.setState(() => ({styling: 'card-container-background2'}))
      this.setState(() => ({headStyle: 'heading-color2'}))
    } else {
      this.setState(() => ({stage: false}))
      this.setState(() => ({description: 'Light Mode'}))
      this.setState(() => ({styling: 'card-container-background1'}))
      this.setState(() => ({headStyle: 'heading-color1'}))
    }
  }

  render() {
    const {description, styling, headStyle} = this.state

    return (
      <div className="main-container">
        <div className={`card-container ${styling}`}>
          <h1 className={`heading-style ${headStyle}`}>Click To Change Mode</h1>
          <button
            className="button-style"
            type="button"
            onClick={this.modeButton}
          >
            {description}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
