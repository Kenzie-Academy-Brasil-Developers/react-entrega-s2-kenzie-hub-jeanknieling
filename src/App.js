import Routes from './Routes';
import GlobalStyled from './styles/global';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { css } from 'styled-components';

const App = () => {

    return (

        <>

            <GlobalStyled/>

            <ToastContainer

                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                toastStyle={{ 
                    backgroundColor: css`var(--gray-2)`,
                    color: css`var(--gray-0)` 
                }}

            />

            <Routes/>

        </>
        
    );

}

export default App;