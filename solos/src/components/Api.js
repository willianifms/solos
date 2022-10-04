import React from "react"
import axios from 'axios'

class Api extends React.Component{
  state={
    dados:[]
  }
  componentDidMount(){
      axios.get('https://api.thingspeak.com/channels/1548634/feeds.json?results=1')
      .then(res=>{
        const dadosSolo=res.data
        this.setState({dados:dadosSolo})
      })
  }
  render(){
    return(
<>
{this.state.dados.map(
  dado=> <div key={dado.id}>{dado.created_at} ahaahshhshhhshshshshshh</div>
    )
}
</>

    )
  }
}
export default  Api