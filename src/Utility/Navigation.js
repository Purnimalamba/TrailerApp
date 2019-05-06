/**
 * Navigation Component
 * Contains all the navigations of the app
 * @author Purnima Lamba
 */



import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';
import SplashComponent from '../Components/SplashScreens/SplashScreenComponent';
import LoginComponent from '../Components/LoginScreen/LoginScreenComponent';
import DashboardHome from '../Components/DashboardScreens/DashboardHome/DashboardHomeComponent'
import EditDetails from '../Components/DashboardScreens/EditDetails/EditDetailsComponent'
import ViewDetails from '../Components/DashboardScreens/ViewDetails/ViewDetailsComponent'



const SplashStack = createStackNavigator(
  {
    Splash: { screen: SplashComponent }
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
);

const LoginStack = createStackNavigator(
  {
    Login:{screen:LoginComponent}
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
)

const DashboardStack = createStackNavigator(
  {
    Dashboard: { screen: DashboardHome , navigationOptions: {
      header: null,
  },},
    EditDetails: { screen: EditDetails , navigationOptions: {
      header: null,
  },},
    ViewDetails: { screen: ViewDetails },
  }
);


const CustomNavigation = createAppContainer(createSwitchNavigator(
  { 
    splashNav: { screen: SplashStack },
    LoginNav: { screen: LoginStack },
    dashBoardNav: { screen: DashboardStack },
  }
));

export default CustomNavigation
  