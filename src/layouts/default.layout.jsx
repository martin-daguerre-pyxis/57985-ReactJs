import Header from '../components/structure/Header';
import Footer from '../components/structure/Footer';

const mainStyle = "flex: 1 1 100%";

const DefaultLayout = ({ children, className, context }) => {
    // const {isAuthenticated, login, logout, signup, changePassword} = context.auth;
    const { isAuthenticated } = false; //context.auth.isAuthenticated;

    return (
        <div className={className}>
            <Header context={context} isAuthenticated={isAuthenticated}></Header>
            <main style={{ mainStyle }} className='min-h-[84vh]'>
                {children}
            </main>
            <Footer context={context}></Footer>
        </div>
    )
}

export default DefaultLayout