import Header from './Header/Header';
import SideBar from './SideBar/SideBar';

function DefaultLayout() {
    return (
        <div>
            <Header />
            <div className="container">
                <SideBar />
                <div>Content</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
