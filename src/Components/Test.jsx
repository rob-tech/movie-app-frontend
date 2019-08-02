import React, { Component } from "react";
import {Slider} from "react-slick";

class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
  settings: {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
  }
}
  }
  render() {

    return this.props.movies.map(item => (
<div>
<h2> Single Item</h2>
{this.state.settings}
<Slider >
  <div>
    <h3>1</h3>
  </div>
  <div>
    <h3>2</h3>
  </div>
  <div>
    <h3>3</h3>
  </div>
  <div>
    <h3>4</h3>
  </div>
  <div>
    <h3>5</h3>
  </div>
  <div>
    <h3>6</h3>
  </div>
</Slider>
</div>
));
}
        

  
  export default Test;