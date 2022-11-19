import './App.css';
import store, { persistor } from './store';
import { Provider } from 'react-redux';
import HttpService from './services/http.service';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-datepicker/dist/react-datepicker.css';
import { Navigation } from './routes/Navigation';
import { PersistGate } from 'redux-persist/integration/react';
import { ModalProvider } from 'styled-react-modal';
import { FadingBackground } from './styles/shared/modalStyles';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';

HttpService.setup();
registerLocale('pt-br', ptBR);
setDefaultLocale('pt-br');

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <div className="App">
                    <ModalProvider backgroundComponent={FadingBackground}>
                        <Navigation />
                        <ToastContainer />
                    </ModalProvider>
                </div>
            </PersistGate>
        </Provider>
    );
};

export default App;
