import Header from '~/components/Layout/components/Header';
import SideBar from './SideBar/SideBar';
import styles from 'DefaultLayout.module.scss';
import classNames from 'classnames/bind';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <SideBar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
