import React, {useEffect} from 'react';

const Header = () => {
    useEffect(() => {
        if(!document.getElementById('main-style')){
            const style1 = document.createElement('link');
            style1.id = 'main-style'
            style1.rel = 'stylesheet'
            style1.href = '/assets/css/bootstrap.min.css';
            document.head.appendChild(style1);
        }
    });
    return (
        <div>

        </div>
    );
};

export default Header;