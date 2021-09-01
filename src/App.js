import photo from './photo.png'

import React from 'react'




 class App extends React.Component{

  constructor(props) {
    super(props)
  
    this.state = { 
    
  Person : {
    name:"Fleur",
    prenon:"Jaune",
     imgsrc:photo,
    met:"Nature"},
   
   count :0,
    shows: true,
  };
}
 toggle = () => {
    this.setState({shows :!this.state.shows });
   }

// toggle = () => {
//     this.setState({Person:! (<div> 
//     <h1>{this.state.Person.name}</h1>
//      <h2>{this.state.Person.imgsrc}</h2> 
//      <h2>{this.state.Person.prenon}</h2>  
//      <h3>{this.state.Person.met}</h3> 
//        </div>) });
//   }
 
  
componentDidMount(){
    setInterval(() => {
     this.setState({count:this.state.count+1}); 
    },2000 );
  }


  
  


 

  

  render() {
  
    return (
      <div>
      {/* <nav style={{border:"50%",backgroundColor:"gold"}}>Person</nav> */}
       <button onClick={this.toggle} >{this.state.shows?"hide":"shows"} </button>
      {this.state.shows?  <h1 style={{backgroundColor:"hotpink"}} >Magic </h1>:"show"}
      <hr/>

    <button style={{margin:"15%"}} onClick={this.toggle} >
    <div> 
     <h1>{this.state.Person.name}</h1>     
    <h2>{this.state.Person.prenon}</h2>  
    <img    style={{ width:"50%"}} src= {this.state.Person.imgsrc}  alt= "phot" />   
     
    <h3>{this.state.Person.met}</h3> 
    </div> 
    </button> 
     
     
    
<h1>{this.state.count }</h1> 


      </div>
    )
  };

 }


export default App;