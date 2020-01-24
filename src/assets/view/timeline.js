import React from 'react'

import { TimeLineContainer } from '../style/content'
import CardContainer from './card.js'

const timeline = props => (
  <TimeLineContainer>
    <CardContainer date="22/09/2016" clock="13:57" place="Pátio Savassi" money="R$ 250,00"/>
    <CardContainer date="22/09/2016" clock="13:57" place="Pátio Savassi" money="R$ 250,00"/>
    <CardContainer date="22/09/2016" clock="13:57" place="Pátio Savassi" money="R$ 250,00"/>
  </TimeLineContainer>
)

export default timeline