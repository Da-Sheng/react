import React, { Component } from 'react';
import './App.css';
import Input from './Input';
import List from './List';
import Filter from './Filter';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      filter: 'all',
      filter_classname: [     //初始选中全部
        'fifter has-fifter',
        'fifter',
        'fifter'
      ],
    };
  }
// 获取输入框数据
  onInput = (value, index) => {
    const currentTime = new Date();
    let todoList =  [
        {
          content: value,
          status: 'undo',
          createTime: currentTime,
          updateTime: currentTime,
          ishover: false,
          index
          // del_classname: 'delete-self visibility-hidden'
        },
        ...this.state.todoList
      ];
    this.setState({
      todoList
    });
  }
//鼠标切换叉叉显示
	showX = (idx) =>{
		let index = this.handleIndex(idx);
//  console.log(index);
    let todoList = [...this.state.todoList];
    todoList[index].ishover = true;
    this.setState({
      todoList
    });
	}
	hiddenX = (idx) =>{
		let index = this.handleIndex(idx);
//  console.log(index);
    let todoList = [...this.state.todoList];
    todoList[index].ishover = false;
    this.setState({
      todoList
    });
	}
  //切换btn边框
  filterBtn = (index) => {
    let filter_classname = [
                            'fifter',
                            'fifter',
                            'fifter',
                            ];
    filter_classname[index] = 'fifter has-fifter';
    this.setState({
      filter_classname: filter_classname,
      filter_status: index
    })
  }
  //处理index
  handleIndex = (index) => {
      let todoList = [...this.state.todoList];
      return todoList.findIndex(x => x.index === index);
  }
  //点击出现删除线
  selectSelf = (idx) => {
  	let index = this.handleIndex(idx);
    let todoList = [...this.state.todoList];
    let preStatus = todoList[index].status;
    let nextStatus = '';
    if (preStatus === 'undo') {
      nextStatus = 'done';
    } else {
      nextStatus = 'undo';
    }
    todoList[index].status = nextStatus;
    this.setState({
      todoList
    });
  }
  //删除自己
  deleteSelf = (idx) => {
  	let index = this.handleIndex(idx);
    let todoList = [...this.state.todoList];
    todoList.splice(index, 1);
    this.setState({
      todoList
    });
  }
  //选择所有
  filterAll = () => {
    this.setState({
      filter: 'all'
    });
  }
  //选择未做
  filterUndo = () => {
    this.setState({
      filter: 'undo'
    })
  }
  //选择已做
  filterDone = () => {
    this.setState({
      filter: 'done'
    })
  }
  //删除已做状态
  clearDone = () => {
    let todoList = [...this.state.todoList].filter(x => x.status==='undo');
    this.setState({
      todoList
    });
  }
  //全做
  doneAll = () => {
    let todoList = [...this.state.todoList].map(
      x => {
        x.status='done';
        return x;
      }
    );
    this.setState({
      todoList
    });
  }
  render() {
    return (
      <div className="App">
        <Input
         callback={this.onInput}
        />
        <List
          todoArr={this.state.todoList}
          todoList={this.state.todoList}
          filter={this.state.filter}
          callbackDel={this.deleteSelf}
          callbackDid={this.changeDid}
          callbackSelectSelf={this.selectSelf}
          callbackShow={this.showX}
          callbackHidden={this.hiddenX}
        />
        <Filter
          filter_classname={this.state.filter_classname}
          callbackFilterBtn={this.filterBtn}
          callbackFilterAll={this.filterAll}
          callbackFilterUndo={this.filterUndo}
          callbackFilterDone={this.filterDone}
          callbackClearDone={this.clearDone}
          callbackDoneAll={this.doneAll}
        />
      </div>
    );
  }
}

export default App;
