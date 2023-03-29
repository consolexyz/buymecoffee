import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

function Header() {
    return ( 
        <div className="header">
            <p>BuyMeACoffee</p>
            <ConnectButton/>
        </div>
     );
}

export default Header ;