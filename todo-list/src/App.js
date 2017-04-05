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
      isHasList: false,
      fifter_div_classname: 'footer visibility-hidden'
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
          index,
          // del_classname: 'delete-self visibility-hidden'
        },
        ...this.state.todoList
      ];
    this.setState({
      todoList,
      isHasList: true,
    },() => {
      this.displayFilter();
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
    let isHasList = this.decideHasDelAll(todoList);
    this.setState({
      todoList,
      isHasList
    },() => {
      this.displayFilter();
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
    let isHasList = this.decideHasDelAll(todoList);
    this.setState({
      todoList,
      isHasList,
    },() => {
      this.displayFilter();
    });
  }
  //全做
  doneAll = () => {
    let todoList = [...this.state.todoList];
    let isDoneAll = this.judgeSelectAll(todoList);
    let status = 'done';
    if(isDoneAll){
      status = 'undo';
    }
    todoList.map(
      x => {
        x.status=status;
        return x;
      }
    );
    this.setState({
      todoList
    });
  }
  //判断全选
  judgeSelectAll = (todoList) => {
    return todoList.every(x => x.status === 'done');
    
  }
  //显示隐藏底部的选择框
  displayFilter = () => {
    let isHasList = this.state.isHasList;
    if(isHasList){
      this.setState({
        fifter_div_classname: 'footer visibility-visible'
      })
    }else{
      this.setState({
        fifter_div_classname: 'footer visibility-hidden'
      })
    }
  }
  //判断是否全部删除
  decideHasDelAll = (todoList) => {
    let len = todoList.length;
    // debugger;
    if(!len){
      return false;
    }else{
      todoList = [...todoList].filter(x => x!==undefined);
      len = todoList.length;
      if(len){
        return true;
      }else{
        return false;
      }
    }
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
          fifter_div_classname={this.state.fifter_div_classname}
        />
      </div>
    );
  }
}

export default App;
