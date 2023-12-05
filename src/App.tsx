import { PersistGate } from 'redux-persist/integration/react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { persistStore } from 'redux-persist';
import { Provider } from 'react-redux';

import { theme } from './lib/theme';
import store from './redux/store';
import { router } from './router';

const persistor = persistStore(store);

function App() {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<ThemeProvider theme={theme}>
					<RouterProvider router={router} />
				</ThemeProvider>
			</PersistGate>
		</Provider>
	);
}

export default App;
