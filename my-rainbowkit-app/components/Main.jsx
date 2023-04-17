import React from 'react';


function Main () {
    return ( 
        <div className='main'>
            <h1 className='main-text'>Buy Xyz a Coffee</h1>
            <form>
                <label>Send a message</label><br></br>
                <textarea type="text"
                  placeholder="Enjoy your coffee!"
                  id="message"
                  required></textarea>
            <button type='button' className='form-button'>
                Send 0.001ETH
            </button>
        </form>
        </div>
    );
}

export default Main;