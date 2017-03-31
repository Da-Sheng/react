import React, { Component } from 'react';
import './App.css';
import Input from './Input';
import List from './List';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todoList: [],
      filter: 'all'
    }
  }

  onInput = (value) => {
    const currentTime = new Date();
    this.setState({
      todoList: [
        ...this.state.todoList,
        {
          content: value,
          status: 'undo',
          createTime: currentTime,
          updateTime: currentTime,
        }
      ]
    })
  }
  selectSelf = (index) => {
    let todoList = [...this.state.todoList];
    let preStatus = todoList[index].status;
    let nextStatus = '';
    if (preStatus === 'undo'){
      nextStatus = 'done';
    }else{
      nextStatus = 'undo';
    }
    todoList[index].status = nextStatus;
    this.setState({
      todoList: todoList
    });
  }
  deleteSelf = (index) => {
    console.log(index);
        let todoArr = this.state.todoList;
        todoArr.splice(index,1);
        this.setState({
          todoList: todoArr
        })
  }
  changeDid = (idx) => {
    let isDid = this.state.todoArr[idx];
    isDid = !isDid;
    this.setState({
      todoArr: isDid
    })
    console.log(isDid,"change");
  }
  render() {
    return (
      <div className="App">
        <Input callback={this.onInput} />
        <List 
          todoArr={this.state.todoList} 
          filter={this.state.filter}
          callbackDel={this.deleteSelf} 
          callbackDid={this.changeDid}
          callbackSelectSelf={this.selectSelf}
        />
      </div>
    );
  }
}

export default App;
