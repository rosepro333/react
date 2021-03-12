import Test from './Test';
import './Login.css';

function Login(){
    // return <h1>login here<Test></Test></h1>

     return <div className="container">

      <div className="main">

        <div className="row" style={{marginTop:"10%"}}>
          <div className="col"></div>
          <div className="col"><h1>Login SBI BANK</h1></div>
          <div className="col"></div>
        </div>

        <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">username</label>
        <input type="text" className="form-control" id="username" aria-describedby="emailHelp" />
        <div id="uinvalid" className="form-text"></div>
        </div>

        <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" />
        <div id="pinvalid" className="form-text"></div> 
        </div>
    
    <button type="button" onclick="Bank.login()" className="btn btn-primary">Login</button>


</div>

</div>


}

export default Login;
