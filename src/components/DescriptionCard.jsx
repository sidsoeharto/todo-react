import React, { Component } from 'react';

class DescriptionCard extends Component () {
  render () {
    return (
      <div className="column is-6 p-0">
        <section className="hero is-primary is-bold is-medium"> 
          <div className="hero-body"> 
            <div className="container"> 
              <h1 className="title"> 
                Fancy To-Do 
              </h1> 
              <h3 className="description"> 
                A simple todo app to organize
                your daily tasks, plan an event,
                increase your productivity, and manage your life
              </h3> 
            </div> 
          </div> 
        </section> 
      </div>
    );
  }
}

export default DescriptionCard;