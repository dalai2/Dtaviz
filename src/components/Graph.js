import Plotly from 'react-plotly.js'
import { Flex } from './styles/Flex'



export default function Graph(){

  
  
  return(
    <Flex>
      <div style={{background:"red"}}>
        Hola
      </div>
      <Plotly 
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
          {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
        ]}
        layout={ {width: 520, height: 540, title: 'A Fancy Plot'} }
      />
    </Flex>

    )
};