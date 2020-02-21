import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    /* TODO: This method should capture the `x` and `y` coordinates of the mouse */
  
    drawChromeBoiAtCoords(event.clientX, event.clientY)
     /* from the event and use them to invoke the `drawChromeBoiAtCoords`
     * function that has been provided and is already imported
     * (`drawChromeBoiAtCoords` expects two arguments, an x and a y coordinate)
     */
  }
  
  
   
   handleOnClick (e) {
        toggleCycling()
   }

   handleKeyDown (e) {
    console.log(e);
    if (e.key === 'a') {
      resize('+')
    }else if (e.key === 's') {
      resize('-') 
    }

 }

  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        width='900'
        height='600'
        tabIndex="0"
        onKeyDown={this.handleKeyDown}
        onClick={this.handleOnClick}>
      </canvas>
    )
  }
}
