import React from 'react';

function Signin() {
    function go(e){
        e.preventDefault();
        if (document.form.password.value ==='123456'){ 
            document.form.submit(); 
            } 
            else{ 
                 alert("Por favor, ingrese nombre de usuario y contraseña correctos."); 
            } 
        } 

    return (
        <div className="signin-container">
        <div className="signin-box">
            <div className="signin-title">
                <h2>Bienvenido</h2>
            </div>
            <form name="form" action="/home" className="form">
                <label htmlFor="username">Usuario:</label>
                <input type="text" name="login" id="username" required/>
                <label htmlFor="password">Contraseña:</label>
                <input type="password" name="password" id="password" required/>
                <input type="submit" value="Acceder" className="submit" onClick={go} />
            </form>
        </div>
        </div>
        
    );
}

export default Signin;
