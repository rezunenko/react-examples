import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="playlist">
        <h1>Hello, {this.props.name}</h1>
        <input type="text" className="playlist__input" placeholder="Введите название трека"/>
        <input type="button" className="playlist__btn-add" value="Добавить"/>
        <ul className="playlist__list">
          <li>asd</li>
          <li>asdf</li>
          <li>fff</li>
        </ul>
      </div>
    )
  }
}

export default App;
