import React, {useEffect} from 'react';

const Header = () => {
    useEffect(() => {
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

            const style4 = document.createElement('link');
            style4.rel = 'stylesheet';
            style4.href = '/admin_assets/css/delete.css'; 
            document.head.appendChild(style4);

            const style5 = document.createElement('link');
            style5.rel = 'stylesheet';
            style5.href = '/admin_assets/css/create.css'; 
            document.head.appendChild(style5);
    });
    return (
        <div>

        </div>
    );
};

export default Header;