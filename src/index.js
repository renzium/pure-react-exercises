import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Word = { Message: 'I am the tallest man in the world' }
const App = (props) => {
  return (
    <div style={Styles.Stuff} >
        1
      <button style={Styles.eee}>
      <i className="fa fa-exclamation-triangle" aria-hidden="true" style = {Styles.good}/>
      {props.Word.Message}
      </button>
      <div id = 'Timer' className = 'Timer' />
    </div>
  )
}
const Styles = {
  eee: {
    color: 'red',
    height: '6em',
    width: '35em',
    display: 'flex',
    padding: '1em',
    margin: '8em auto',
    backgroundColor: 'pink',
    alignItems: 'center',
    borderRadius: '0.8em'
  },
  good: {
    // height: '4em',
    // backgroundColor: 'green'
    fontSize: '3em',
  },
  
  Stuff: {
    margin: 'auto',
    fontSize: '4em',
    textAlign: 'center'
  }
}




// Creating a Nav bar
let children = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/contact', 'Contact']
]
const Nav = ({ children }) => {
  let items = (children);
    items = items.map(item => (
      <div >
        <a href={`${item[0]}`}>
          {item[1]}
        </a>
      </div>));
  console.log(items);
  return (
    <div
      style={{
      fontSize:'3em'
    }}
    >
      {items}
    </div>
  ) 
}






ReactDOM.render(
  <>
  <App Word={Word} />
  <Nav children={children}/>
</>
,
  document.querySelector('#root')
)