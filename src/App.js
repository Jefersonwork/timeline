import React from 'react';

import { Card, TimeLineContainer, CardContent } from './assets/style/content'
import Icon from './assets/view/icon'

function App() {
  return (
    <div className="App">
      <TimeLineContainer>
        <CardContent>
          <Icon type="check" width="26" height="26" />
          <Card />
        </CardContent>
      </TimeLineContainer>
    </div>
  );
}

export default App;
