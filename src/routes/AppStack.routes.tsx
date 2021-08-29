import React from 'react';
import Home from '../pages/Homepage/';
import AddQuestionario from '../pages/AddQuestionario/';
import Answer from '../pages/Answer/';
import Inspect from '../pages/Inspect/';

import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();
const AppStack: React.FC = () => {
    return (
        <Navigator initialRouteName="Home" screenOptions={{ animationEnabled: false, headerShown: false }}>
            <Screen name="Home" options={{animationEnabled: false,}} component={Home} />
            <Screen name="AddQuestionario" options={{animationEnabled: false,}} component={AddQuestionario} />
            <Screen name="Answer" options={{animationEnabled: false,}} component={Answer} />
            <Screen name="Inspect" options={{animationEnabled: false,}} component={Inspect} />
        </Navigator>
    );
}
export default AppStack;