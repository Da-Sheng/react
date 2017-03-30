import React, { Component } from "react";
import Thing from './Thing';
// import DeleteSelf from './DeleteSelf';
class Item extends Component {
	// constructor(props) {
	//     super(props);
	//         console.log(this.props.isDid)
	//     this.state = {
	//         isDid: this.props.isDid,
	//         isHidden: true
	//     };
	// }
	// doThings = () => {
	//     let id = this.props.id - 1;
	//     this.setState({
	//         isDid: true
	//     },() => {
	//         console.log(this.props.isDid)
	//         this.props.callbackDid(id);
	//     })
	// }
	// todoThings = () => {
	//     let id = this.props.id - 1;
	//     this.setState({
	//         isDid: false
	//     },() => {
	//         console.log(this.props.isDid)
	//         this.props.callbackDid(id);
	//     })
	// }
	// findId = () => {
	//     let id = this.props.id - 1;
	//     this.props.callbackDel(id);
	// }
	// hiddenX = () => {
	//     this.setState({
	//         isHidden: true
	//     })
	// }
	// showX = () => {
	//     this.setState({
	//         isHidden: false
	//     })
	// }
	render() {
		const status = this.props.status;
		// const isHidden = this.state.isHidden;
		let inner = [];
		switch (status) {
			case 'done':
				inner[0] = <Thing
										callback={this.todoThings}
										id={this.props.id}
										key="1"
										clasame='hasdone'
										tarValue={this.props.tarValue}
									/>;
				break;
			case 'undo':
				inner[0] = <Thing
										callback={this.doThings}
										id={this.props.id}
										key="1"
										clasame='notdone'
										tarValue={this.props.tarValue}
										callbackDel={this.props.callbackDel}
										index={this.props.index}
									/>
				break;
			default:
				break;
		}
		// if (isDid) {
		//     inner[0] = <Thing callback={this.todoThings} id={this.props.id} key="1" clasame='hasdone' tarValue={this.props.tarValue} />;
		// } else {
		//     inner[0] = <Thing callback={this.doThings} id={this.props.id} key="1" clasame='notdone' tarValue={this.props.tarValue} />
		// }
		// if (isHidden) {
		// 	inner[1] = <DeleteSelf callback={this.findId} key="2" clasame='vishid deleteSelf' />
		// } else {
		// 	inner[1] = <DeleteSelf callback={this.findId} key="2" clasame='visvis deleteSelf' />
		// }
		let oLi = <li id={this.props.id} >
			{inner}
		</li>
		return (
			oLi
		)
	}
}

export default Item;