import React from 'react';
import { ConnectWallet } from "@thirdweb-dev/react";

function Header() {
    return ( 
        <div className="header">
            <p>BuyMeACoffee</p>
            <ConnectWallet />
        </div>
     );
}

export default Header ;