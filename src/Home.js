import React , {Component} from 'react';
import fire from './config/fire';
class Home extends Component{
	constructor(props){
		super(props)
		this.state={
			
		}
	}
	logout(){
		fire.auth().signOut();
	}
	render(){
		return (
			<div>
			<h1>you are logged in</h1>
			<button onClick={this.logout}>log out</button>
			</div>
			);
	}
}
export default Home;