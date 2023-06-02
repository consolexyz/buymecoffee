import React from 'react';


function Main () {

    function buy () {
        console.log('bought');
    }
    return ( 
        <div className='main'>
            <h1 className='main-text'>Buy Xyz a Coffee</h1>
            <form>
                <label>Send a message</label>
                <textarea type="text"
                  placeholder="Enjoy your coffee!"
                  id="message"
                  required></textarea>
            <button type='button' className='form-button' onClick={buy}>
                Buy
            </button>
        </form>
        </div>
    );
}

export default Main;