import Header from '../components/structure/Header';
import Footer from '../components/structure/Footer';

const mainStyle = "flex: 1 1 100%";

const DefaultLayout = ({ children, className, auth }) => {
    // const {isAuthenticated, login, logout, signup, changePassword} = auth;
    const { isAuthenticated } = auth;

    return (
        <div className={className}>
            <Header isAuthenticated={isAuthenticated}></Header>
            <main style={{ mainStyle }}>
                {children}
            </main>
            <Footer></Footer>
        </div>
    )
}

export default DefaultLayout