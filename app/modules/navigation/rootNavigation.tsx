import React, { FC } from 'react';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SearchStackNavigator } from './stackNavigator';
import { KeyboardAvoidingView } from 'react-native';

const navigationRef = createNavigationContainerRef();

export function setNavigate(name: string, params?: Object) {
	navigationRef.isReady() && navigationRef.navigate(name, params);
};

export const RootNavigation: FC = () => {
    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }}>
                <NavigationContainer ref={navigationRef}>
                    <SearchStackNavigator />
                </NavigationContainer>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
};
