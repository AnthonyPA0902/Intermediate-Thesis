import React, {useEffect} from 'react';

const Header = () => {
    useEffect(() => {
        if(!document.getElementById('main-style')){
            const style1 = document.createElement('link');
            style1.id = 'main-style';
            style1.rel = 'stylesheet';
            style1.href = 'https://cdn.jsdelivr.net/npm/simple-datatables@7.1.2/dist/style.min.css';
            document.head.appendChild(style1);
        
            const style2 = document.createElement('link');
            style2.rel = 'stylesheet';
            style2.href = '/admin_assets/css/styles.css'; 
            document.head.appendChild(style2);

            const style3 = document.createElement('link');
            style3.rel = 'stylesheet';
            style3.href = '/admin_assets/css/customer.css'; 
            document.head.appendChild(style3);
        }
    });
    return (
        <div>

        </div>
    );
};

export default Header;