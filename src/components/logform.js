import { useState } from 'react';
import{BiShow, BiHide} from 'react-icons/all';
import './style.css';

const Logform = () =>{

	const [lusername, setlUsername] = useState('');
	const [lpassword, setlPassword] = useState('');
	const [ltoggle, setlToggle] = useState(true);

	const [rname, setrName] = useState('');
	const [rusername, setrUsername] = useState('');
	const [rpassword, setrPassword] = useState('');
	const [rtoggle, setrToggle] = useState(true);

	function onChangelUser(e){
		setlUsername(e.target.value);
		// console.log(lusername);
	}
	function onChangelPass(e){
		setlPassword(e.target.value);
		// console.log(lpassword);
	}
	function onChangerName(e){
		setrName(e.target.value);
		// console.log(lusername);
	}
	function onChangerUser(e){
		setrUsername(e.target.value);
		// console.log(lusername);
	}
	function onChangerPass(e){
		setrPassword(e.target.value);
		// console.log(lpassword);
	}

	function validateEmail(email) {
		const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}

	const ltoggler = ()=>{
		setlToggle(!ltoggle);
		// console.log(ltoggle)
	}
	const rtoggler = ()=>{
		setrToggle(!rtoggle);
		// console.log(ltoggle)
	}
	
	const Login = () =>{
		// console.log('lg')
	}
	const Register = () =>{
		console.log('re')
		const users=[]
		if(validateEmail(!rusername)){
			alert('invalid email')
		}
		
		users.push(rname, rusername, rpassword)
		localStorage.setItem('users', JSON.stringify(users));
		setrName('');
		setrUsername('')
		setrPassword('');
	}

	return(
		<div className="lg">

			<div className="lg-form">

				<h3>Login</h3>
				<div className="lg-li">
					<span>Email</span>
					<input className="lg-input" type="text" onChange={onChangelUser} value={lusername}/>
				</div>
				<div className="lg-li">
				<span>Password</span>
					<input className="lg-input lg-pass" type={!ltoggle ? 'text' : 'password'} onChange={onChangelPass} value={lpassword} />
					{
					!ltoggle ? <BiShow onClick={ltoggler} className="pass-i"/> : <BiHide onClick={ltoggler} className="pass-i"/>
					}
					
				</div>
				<button className="btn-lg" onClick={Login}>Login</button>
				
			</div>

			<div className="lg-form">
			<h3>Register</h3>
				<div className="lg-li">
					<span>Name</span>
					<input className="rg-input" type="text" value={rname} onChange={onChangerName} />
				</div>
				<div className="lg-li">
					<span>Email</span>
					<input className="rg-input" type="text" value={rusername} onChange={onChangerUser} />
				</div>
				<div className="lg-li">
				<span>Password</span>
				<input className="rg-input rg-pass" type={!rtoggle ? 'text' : 'password'} onChange={onChangerPass} value={rpassword} />
					{
					!rtoggle ? <BiShow onClick={rtoggler} className="pass-ir"/> : <BiHide onClick={rtoggler} className="pass-ir"/>
					}
				</div>
				<button className="btn-lg" onClick={Register}>Register</button>
			</div>
		</div>
	)
}
export default Logform;