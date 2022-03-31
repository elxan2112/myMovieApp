import 'react-native-gesture-handler';
import React, { FC } from 'react';
import { SafeAreaView } from 'react-native';
import { RootNavigation } from './modules/navigation';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { persisStore, store } from './modules/redux/store';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const App: FC = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persisStore}>
                    <RootNavigation />
                </PersistGate>
            </Provider>
        </SafeAreaView>
    )
}

export default App;