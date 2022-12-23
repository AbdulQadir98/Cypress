const Register = () => {
    return ( 
        <div>
            <h1>Register form</h1>
            <form>
                <div className="form">
                    <label for="email">Email address</label>
                    <input type="email" class="action-email" id="email" placeholder="Email"></input>
                </div>
            </form>
        </div>
     );
}
 
export default Register;