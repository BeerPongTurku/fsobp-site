import React from 'react';

const Rules = () => {
  return (
    <div className="rule_page page-wrapper line-height-high" >
      <div className="row center-xs" >
        <h1 className="text-center margin-1">Finnish Series of Beer Pong Rules</h1>
      </div>
      <div>
        <h3 className="text_left">Official Beer Pong Tournament Rules for Finnish Series of Beer Pong</h3>
        <div>
          <h4 className="text_left">Game Setup</h4>
        </div>
        <div className="text_left">
          <p><strong>Cup Formation</strong></p>
          <ol>
            <li>1. 10 cups per team</li>
            <li>2. Starting formation is a "tight triangle" formation (rims touching), pointing towards the opposing side. BPONG Racks are used to maintain formations.</li>
            <li>3. The 10-cup triangle must be centered on the table and the back of the rack must be in line with the back edge of the table. Cups must not be tilted or leaned against the surrounding cups.</li>
          </ol>
        </div>
        <div>
          <h4 className="text_left">Playing the Game</h4>
          <p><strong>First possession</strong></p>
          <ol>
            <li>1. In prelims, first possession will be determined by rock-paper-scissors. The winner gets to choose which team gets the first possession.</li>
            <li>2. The team with first possession will get one (1) shot. Each team will get two (2) shots for each turn thereafter, one shot per team member, subject to any other rules below.</li>
          </ol>
        </div>
      </div>
    </div>
  )
}
export default Rules;
