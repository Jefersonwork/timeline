import React from 'react'

import { Card, CardContent, CardHeader, ListUnstyled, Item, CardBody,Table, Tr } from '../style/content'
import Icon from './icon'

const CardContainer = props => (
  <CardContent>
    <Icon type="check" width="26" height="26" />
    <Card>
      <CardHeader>
        <ListUnstyled>
          <Item>
            <Icon type="calendar" width="12" height="12"/>
            <label>{props.date}</label>
          </Item>
          
          <Item>
            <Icon type="clock" width="12" height="12"/>
            <label>{props.clock}</label>
          </Item>

          <Item>
            <Icon type="place" width="12" height="12"/>
            <label>{props.place}</label>
          </Item>

          <Item>
            <Icon type="money" width="12" height="12"/>
            <label>{props.money}</label>
          </Item>
        </ListUnstyled>
      </CardHeader>

      <CardBody>
        <Table>
          <thead>
            <Tr>
              <th> Produto </th>
              <th> Preço </th>
            </Tr>
          </thead>

          <tbody>
            <Tr>
              <td>Camisa azul</td>
              <td>R$ 100,00</td>
            </Tr>
          </tbody>
        </Table>
      </CardBody>
    </Card>
  </CardContent>
)

export default CardContainer