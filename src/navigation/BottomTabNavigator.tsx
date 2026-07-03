import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Bookmark, ChefHat, Home, ShoppingCart } from 'lucide-react-native';

import HomeScreen from '../screens/Home/HomeScreen';
import { KitchenScreen } from '../screens/Kitchen/KitchenScreen';
import { SavedScreen } from '../screens/Saved/SavedScreen';
import { ShoppingScreen } from '../screens/Shopping/ShoppingScreen';
import { colors, typography } from '../theme';
import type { RootTabParamList } from '../types/navigation';

const Tab = createBottomTabNavigator<RootTabParamList>();

export function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.tabActive,
        tabBarInactiveTintColor: colors.tabInactive,
        tabBarLabelStyle: typography.tabLabel,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopColor: colors.border,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Kitchen"
        component={KitchenScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <ChefHat color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Shopping"
        component={ShoppingScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <ShoppingCart color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Saved"
        component={SavedScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Bookmark color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
