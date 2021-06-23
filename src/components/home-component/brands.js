import React from 'react';
import HexagonGrid from 'react-hexagon-grid';
import times from 'lodash/times';
import logo from './logo-big.png';
import { GridGenerator, HexGrid, Layout, Path, Hexagon, Text, Pattern, Hex } from 'react-hexgrid';

var width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
    
var height = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

let hexagons = times(20, id => id);
const getHexProps = (hexagon) => {
  return {
    style: {
      fill: {
        backgroundImage: `url(${logo})`,
      },
      stroke: 'white'
    }
    // <Pattern id="pat-2" link="http://lorempixel.com/400/400/cats/2/" size={hexagonSize} />

  };
}

function Brands() {
  return (
    <div>
        <HexagonGrid
      gridWidth={width}
      gridHeight={height/2}
      hexagons={hexagons}
      hexProps={getHexProps}
      // renderHexagonContent={renderHexagonContent}
      />
    </div>
  )
}

export default Brands
