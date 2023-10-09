import Header from '../components/structure/Header';
import Footer from '../components/structure/Footer';

const mainStyle = "flex: 1 1 100%";

const DefaultLayout = ({ children, className }) => {

    return (
        
            <div className={className}>
                <Header></Header>
                <main style={{ mainStyle }} className='min-h-[84vh]'>
                    {children}
                </main>
                <Footer></Footer>
            </div>
    )
}

export default DefaultLayout