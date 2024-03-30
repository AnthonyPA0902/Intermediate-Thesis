import React, { useEffect } from 'react';
import NavigationBar from './NavigationBar'

const Header = () => {
    useEffect(() => {
            const style1 = document.createElement('link');
            style1.rel = 'stylesheet'
            style1.href = '/assets/css/bootstrap.min.css';
            document.head.appendChild(style1);

            const style2 = document.createElement('link');
            style2.rel = 'stylesheet'
            style2.href = '/assets/css/style.css';
            document.head.appendChild(style2);

            const style3 = document.createElement('link');
            style3.rel = 'stylesheet'
            style3.href = '/assets/css/responsive.css';
            document.head.appendChild(style3);

            const style4 = document.createElement('link');
            style4.rel = 'icon'
            style4.icon = 'image/gif'
            style4.href = '/assets/images/fevicon.png';
            document.head.appendChild(style4);

            const style5 = document.createElement('link');
            style5.rel = 'stylesheet'
            style5.href = '/assets/css/jquery.mCustomScrollbar.min.css';
            document.head.appendChild(style5);

            const style6 = document.createElement('link');
            style6.rel = 'stylesheet'
            style6.href = '/assets/css/owl.carousel.min.css';
            document.head.appendChild(style6);

            const style7 = document.createElement('link');
            style7.rel = 'stylesheet'
            style7.href = '/assets/css/owl.theme.default.min.css';
            document.head.appendChild(style7);

            const style8 = document.createElement('link');
            style8.rel = 'stylesheet';
            style8.href = '/assets/css/vietnamtravel.css';
            document.head.appendChild(style8);

            const style9 = document.createElement('link');
            style9.rel = 'stylesheet';
            style9.href = '/assets/css/tourdetails.css';
            document.head.appendChild(style9);

            const style10 = document.createElement('link');
            style10.rel = 'stylesheet';
            style10.href = '/assets/css/checkout.css';
            document.head.appendChild(style10);

            const style11 = document.createElement('link');
            style11.rel = 'stylesheet';
            style11.href = '/assets/css/userinfo.css';
            document.head.appendChild(style11);
    });
    return (
        <div>
            {/* <div class="loader_bg">
                <div class="loader"><img src="/assets/images/loading.gif" alt="#" /></div>
            </div> */}
            <NavigationBar/>
        </div>
    );
};

export default Header;