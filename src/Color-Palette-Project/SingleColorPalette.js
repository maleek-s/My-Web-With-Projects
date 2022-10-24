import React from "react";

function SingleColorPalette(props) {
  //props
  function gatherShades() {
    //return all shades of given colors
  }
  return (
    <div>
      <span>SingleColorPalette</span>
      {console.log(props)}
      {gatherShades()}
    </div>
  );
}

export default SingleColorPalette;
