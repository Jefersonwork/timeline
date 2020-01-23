import React from 'react'
import calendar from '../img/icons/calendar.svg'

const card = props => (
  <div>
    <div>
      <ul>
        <li>22/09/2016</li>
        <li>13:57</li>
        <li>Pátio Savassi</li>
        <li>R$ 250,00</li>
      </ul>
    </div>
    <table>
      <thead>
        <tr>
          <th> Produto </th>
          <th> Preço </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Camisa azul</td>
          <td>R$ 100,00</td>
        </tr>
      </tbody>
    </table>
  </div>
)

export default card