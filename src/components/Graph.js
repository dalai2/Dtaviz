import Plotly from 'react-plotly.js'




export default function Graph(){

  
  
  return(
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
    )
};