import React from 'react'
import TimelineEntryList from '../TimelineEntryList'

import './index.less'
class MainContainer extends React.Component {
  render() {
    return (
      <div className="main-container">
        <TimelineEntryList />
      </div>
    )
  }
}

export default MainContainer