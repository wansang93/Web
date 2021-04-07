import React, { Component } from "react";
import "./App.css";
import TOC from "./components/TOC";
import Article from "./components/Article";
import Subject from "./components/Subject";

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      subject: {title: 'WEB', desc: 'World Wide Web!'},
      // Key를 사용하기 위해서 이 부분을 추가
      contents: [
        {id:1, title: 'HTML', desc: 'HTML is information'},
        {id:2, title: 'CSS', desc: 'CSS is for design'},
        {id:3, title: 'JavaScript', desc: 'JavaScript is for interactive'},
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <Subject></Subject>
        <TOC data={this.state.contents}></TOC>
        <Article title="HTML" desc="HTML is HyperText Markup Language."></Article>
        <Article title="CSS" desc="CSS is the language we use to style an HTML document."></Article>
      </div>
    );
  }
}

export default App;
