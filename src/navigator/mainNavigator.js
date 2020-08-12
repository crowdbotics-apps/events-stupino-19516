import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList89850Navigator from '../features/ArticleList89850/navigator';
import ArticleList89849Navigator from '../features/ArticleList89849/navigator';
import ArticleList89848Navigator from '../features/ArticleList89848/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList89850: { screen: ArticleList89850Navigator },
ArticleList89849: { screen: ArticleList89849Navigator },
ArticleList89848: { screen: ArticleList89848Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
