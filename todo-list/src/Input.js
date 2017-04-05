import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            index: 0
        };
    }
    getValue = (e) => {
        //事件的兼容
        e = (e) ? e : ((window.event) ? window.event : "")
        let keyCode = e.keyCode ? e.keyCode : (e.which ? e.which : e.charCode);
        let index = this.state.index;

        if (keyCode === 13) {
            if(!e.target.value){
                return;
            }
            this.props.callback(e.target.value,index);
            index++;
            this.setState({
                value: '',
                index: index
            });
        }
    }
    onChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    render() {
        const { value } = this.state;
        return (
            <div className="App">
                <input
                    value={value}
                    type="text"
                    name="todoInput"
                    placeholder="What needs to be done"
                    onChange={(e) => this.onChange(e)}
                    onKeyPress={this.getValue} className="todoInput"
                />
            </div>
        );
    }
}

export default Input;