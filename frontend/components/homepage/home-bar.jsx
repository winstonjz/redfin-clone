import React, { Component } from 'react';
import Header from './header';
import { withRouter } from 'react-router';
import HomeBarLeft from './home-bar-left';
import MarketingSections from './marketing-sections';

class HomeBar extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <div className="home-page">
            <div id="home-bar" className="clearfix">
               <Header/>
               <HomeBarLeft/>
            </div>
            <MarketingSections />
         </div>
      );
   }
}

export default withRouter(HomeBar);
