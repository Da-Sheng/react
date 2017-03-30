import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
    }
    getValue = (e) => {
        //事件的兼容
        e = (e) ? e : ((window.event) ? window.event : "")
        let keyCode = e.keyCode ? e.keyCode : (e.which ? e.which : e.charCode);
        if (keyCode === 13) {
            this.props.callback(e.target.value);
            this.setState({
                value: ''
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