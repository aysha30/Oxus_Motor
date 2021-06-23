import React, { Component } from 'react';
import { GridGenerator, HexGrid, Layout, Path, Hexagon, Text, Pattern, Hex } from 'react-hexgrid';

export default function Brands() {
    var width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
    
    var height = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;
    const hexagonSize = { x: 2, y: 2 };
    const moreHexas = GridGenerator.parallelogram(0, width, height, 0);

    

    return(
        <div className="App">
        <HexGrid width={width} height={height/2} viewBox="-50 -50 300 100">
          {/* Main grid with bit hexagons, all manual */}
          {/*<Layout size={hexagonSize} flat={true} spacing={1.1} origin={{ x: 0, y: 0 }}>
            <Hexagon q={0} r={0} s={0} />
            Using pattern (defined below) to fill the hexagon
            <Hexagon q={0} r={-1} s={1} fill="pat-1" />
            <Hexagon q={0} r={1} s={-1} />
            <Hexagon q={1} r={-1} s={0} />
            <Hexagon q={1} r={0} s={-1} />
            Pattern and text
            <Hexagon q={-1} r={1} s={0} fill="pat-2" />
            <Hexagon q={-1} r={0} s={1} />
            <Hexagon q={-2} r={0} s={1} />
            <Path start={new Hex(0, 0, 0)} end={new Hex(-2, 0, 1)} />
          </Layout>*/}
          {/* Additional small grid, hexagons generated with generator */}
          <Layout size={{ x: 2, y: 2 }} origin={{ x: 50, y: -30 }}>
            { moreHexas.map((hex, i) => <Hexagon key={i} q={hex.q} r={hex.r} s={hex.s} />) }
          </Layout>
          {/* You can define multiple patterns and switch between them with "fill" prop on Hexagon */}
          <Pattern id="pat-1" link="./logo-big.png" size={hexagonSize} />
          <Pattern id="pat-2" link="http://lorempixel.com/400/400/cats/2/" size={hexagonSize} />
          
        </HexGrid>
      </div>
    );
}