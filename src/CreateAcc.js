
import {useEffect, useRef, useState} from "react"
import {Link,useNavigate} from "react-router-dom";


export default function Createaccount({users,setUsers}){

    const [dp,setdp] = useState();
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [phone,setPhone] = useState('');
    const [oldUser,setolduser] = useState(JSON.parse(localStorage.getItem("users"))||[])
    const navigate = useNavigate();

    useEffect(function(){
        document.title="Walmart | Signup"
    
        return function(){
            document.title="Walmart"
        }
    },[])
   

    const handleChnage=(e)=>{
        console.log(e.target.files)
        const data = new FileReader()
        data.addEventListener('load',()=>{
            setdp(data.result)
        })
        data.readAsDataURL(e.target.files[0])
    }

    function createAcc(e){
        e.preventDefault();
        const newuser = {name,email,password,phone,dp,cart:[]}
        
        let isalready=false;
        if(oldUser.length)oldUser.map(old=>old.email===newuser.email&&(isalready=true))

        if(isalready){
            alert("email id already register")
            return
        }
        else{
            if(oldUser.length){
                localStorage.setItem("users",JSON.stringify([...oldUser,newuser]))
                alert("Account created succuessfull")
                navigate('/signin')
            }
            else{
                localStorage.setItem("users",JSON.stringify([newuser]))
                alert("Account created succuessfull")
                navigate('/signin')
            }
        }
        
     
    }

    return<div className='crt-acc-con'>
        <div className='crt-acc-box'>
            <h1 style={{color:"#222"}}>Create Account</h1>
            <p style={{fontSize:"13px"}}>or <Link to="/signin" className='create-acc-btn'>Sign in</Link></p>
            <form className='crtacc-input-boxes' onSubmit={createAcc} >
                <p>Profile Dp</p>
                <div style={{display:"flex",alignItems:"center"}}> <input type="file"  onChange={handleChnage} required style={{width:"260px"}}/>{dp&&<span style={{color:"green"}}>✔</span>}</div>
                <p>Name</p>
                <input type="text" value={name} onChange={e=>setName(e.target.value)} required/>
                <p>Email</p>
                <input type="text" value={email} onChange={e=>setEmail(e.target.value)} required/>
                <p>Password</p>
                <input type="text" value={password} onChange={e=>setPassword(e.target.value)} required/>
                <p>Phone No</p>
                <input type="tel" value={phone} onChange={e=>setPhone(e.target.value)} required/>
                <button className='crt-acc-sub-btn' type="submit">Sign in</button>
            </form>
        </div>
    </div>
}



