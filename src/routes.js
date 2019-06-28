import React from "react";
import { View, Text } from "react-native";

import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import { Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import Feed from "./pages/Feed";
import New from "./pages/New";
import Camera from "./pages/Camera";

import logo from "./assets/logo.png";

import Tabs from "./components/Tabs";
import stylesTab from "./components/Tabs/stylesRoutes.js";

let FeedBar = createStackNavigator(
  {
    Feed
  },
  {
    defaultNavigationOptions: {
      //Será aplicado para todas as telas.
      //headerTitle: "InstaRocket",
      headerTintColor: "#000", //Cor do botão (<-) voltar
      //headerTitle: <Image source={logo} style={{ height: 35, width: 35 }} />,
      headerTitle: (
        <Image style={{ marginHorizontal: 200 / 2 }} source={logo} />
      ),
      headerBackTile: null
      //headerMode: "none"
    },
    mode: "modal" //Animação de baixo para cima.
  }
);
let NewBar = createStackNavigator({ New });

const Home = FeedBar; //Feed
Home.navigationOptions = {
  title: "Feed",
  tabBarLabel: "Feed",
  tabBarIcon: ({ tintColor }) => (
    <Icon name="home" size={24} style={[stylesTab.icon, stylesTab.active]} />
  )
};

const Search = () => (
  <View>
    <Text>Pesquisa perfis</Text>
  </View>
);
Search.navigationOptions = {
  title: "Search",
  tabBarLabel: "Search",
  tabBarIcon: ({ tintColor }) => (
    <Icon name="search" size={24} style={[stylesTab.icon, stylesTab.active]} />
  )
};

const Add = New; //Novo Post
Add.navigationOptions = {
  title: "Add",
  tabBarLabel: "Add",
  tabBarIcon: ({ tintColor }) => (
    <View style={stylesTab.main}>
      <Icon name="plus" size={16} style={stylesTab.mainIcon} />
    </View>
  )
};

const AbreCamera = Camera; //Abre a Camera
AbreCamera.navigationOptions = {
  title: "Camera",
  tabBarLabel: "Camera",
  tabBarVisible: false,
  tabBarIcon: ({ tintColor }) => (
    <View style={stylesTab.main}>
      <Icon name="plus" size={16} style={stylesTab.mainIcon} />
    </View>
  )
};

const Like = () => (
  <View>
    <Text>Históricos das curtidas</Text>
  </View>
);
Like.navigationOptions = {
  title: "Likes",
  tabBarLabel: "Likes",
  tabBarIcon: ({ tintColor }) => (
    <Icon name="heart" size={24} style={[stylesTab.icon, stylesTab.active]} />
  )
};

const User = () => (
  <View>
    <Text>Perfil do usuário</Text>
  </View>
);
User.navigationOptions = {
  title: "User",
  tabBarLabel: "User",
  tabBarIcon: ({ tintColor }) => (
    <Icon name="user" size={24} style={[stylesTab.icon, stylesTab.active]} />
  )
};

/*
export default createAppContainer(
  createBottomTabNavigator(
    {
     
      FeedBar: {
        screen: FeedBar,
        navigationOptions: () => ({
          title: "Feed",
          tabBarLabel: "Feed",
          tabBarIcon: ({ tintColor }) => (
            <Icon
              name="home"
              size={24}
              style={[stylesTab.icon, stylesTab.active]}
            />
          )
        })
      },
     

      Home: Home,
      Search: Search,
      Add: Add,
      Like: Like,
      User: User
    }
    /*
    {
      defaultNavigationOptions: {
        //Será aplicado para todas as telas.
        //headerTitle: "InstaRocket",
        headerTintColor: "#000", //Cor do botão (<-) voltar
        //headerTitle: <Image source={logo} style={{ height: 35, width: 35 }} />,
        headerTitle: <Image style={{ marginHorizontal: 20 }} source={logo} />
        //headerBackTile: null
        //headerMode: "none"
      },
      mode: "modal" //Animação de baixo para cima.
    }
    
  ),
  createStackNavigator(
    {
      Feed,
      New
    },
    {
      //initialRouteName: "New",
      defaultNavigationOptions: {
        //Será aplicado para todas as telas.
        //headerTitle: "InstaRocket",
        headerTintColor: "#000", //Cor do botão (<-) voltar
        //headerTitle: <Image source={logo} style={{ height: 35, width: 35 }} />,
        headerTitle: <Image style={{ marginHorizontal: 20 }} source={logo} />,
        headerBackTile: null
        //headerMode: "none"
      },
      mode: "modal" //Animação de baixo para cima.
    }
  )
);
*/
/*
export default createAppContainer(
  createBottomTabNavigator({
    HomeStack,
    SettingsStack
  }),
  createStackNavigator({
    Feed,
    New
  })
);
*/

var RouteConfigs = {
  Home: Home,
  //AbreCamera: AbreCamera,
  //Home: { screen: () => null }, //this.props.navigation.navigate('screen3Modal')
  Search: Search,
  Add: Add,
  Like: Like,
  User: User
};

var BottomTabNavigatorConfig = {
  navigationOptions: ({ navigation }) => {
    is_visible = navigation.state.routeName != "AbreCamera";
    return { tabBarVisible: false };
  }
};

var ListTabNavigator = createBottomTabNavigator(
  RouteConfigs,
  BottomTabNavigatorConfig
);

export default createAppContainer(
  ListTabNavigator
  /*
  createBottomTabNavigator(
    {
      /*
    FeedBar: {
      screen: FeedBar,
      navigationOptions: () => ({
        title: "Feed",
        tabBarLabel: "Feed",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="home"
            size={24}
            style={[stylesTab.icon, stylesTab.active]}
          />
        )
      })
    },

      Home: Home,
      AbreCamera: AbreCamera,
      // Home: { screen: () => null }, //this.props.navigation.navigate('screen3Modal')
      Search: Search,
      Add: Add,
      Like: Like,
      User: User
    },
    { tabBarVisible: false }
  )
  /*
  createStackNavigator(
    {
      Feed,
      New
    }
    /*
    ,
    {
      //initialRouteName: 'New',
      defaultNavigationOptions: {
        //Será aplicado para todas as telas.
        //headerTitle: 'InstaRocket'
        headerTintColor: "#000", //Cor do botão (<-) voltar
        //headerTitle: <Image source={logo} style={{ height: 35, width: 35 }} />,
        headerTitle: <Image style={{ marginHorizontal: 20 }} source={logo} />
        //headerBackTile: null
      },
      mode: "modal" //Animação de baixo para cima.
    }   
  )
  */
);
