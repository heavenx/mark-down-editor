import './App.css';
import { marked } from "marked";
import React from "react";
import defaultReadMe from './READ.md'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { content: '' };
    this.handleChange = this.handleChange.bind(this)
    marked.setOptions({
      breaks: true,
      sanitize: true,
    });
  }

  handleChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }

  getMarkdownText() {
    var rawMarkup = marked.parse(this.state.content);
    return { __html: rawMarkup };
  }
  componentWillMount() {
    fetch(defaultReadMe).then((response) => response.text()).then((text) => {
      this.setState({ content: text })
    })
  }

  render() {

    return (
      <div className='container' >
        <textarea value={this.state.content} id="editor" type="textarea" onChange={this.handleChange} />
        <div id="preview" dangerouslySetInnerHTML={this.getMarkdownText()} />
      </div>
    );

  }
}

export default App;
