import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      detailsToDisplay: Profile
    }
  }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    const handleClick = (e) => {

      let content;

      switch(e.target.name) {
        case "Profile":
          content = <Profile />;
          break;
        case "Cocktails":
          content = <Cocktails />;
          break;
        case "Photos":
          content = <Photos />;
          break;
        case "Pokemon":
          content = <Pokemon />;
          break
      }

      console.log(e.target.name)
      this.setState({
        detailsToDisplay: content
      })

    }

    return (
      <div>
        <MenuBar handleClick={handleClick}/>
        {this.state.detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
