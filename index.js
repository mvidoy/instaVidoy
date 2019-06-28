/**
 * @format
 */

 /*
Intalando:

react-native init instarocket

Semelhanças c/ ReactJS

View = Div
style => Estilização (classes) - css
não ten -X no nome da propriedade e o valor tem que estar ente ''

Desenvolvendo:

1)Criar a pasta src;
2)Criar o arquivo index.js;
3)Passar o conteúdo do App.js (raiz) para o index.js, criado na pasta src;
4)Deletar o App.js (raiz)
5)No index.js (raiz), trocar o import App from './App' para import App from './src';
6)Criar a pasta pages em ./src;
7)Criar a duas páginas da aplicação: Feed.js e New.js;
8)yarn add react-navigation react-native-gesture-handler;
9)Fazer o link para modificar os códigos nativos do Android e IOS;
10)react-native link react-native-gesture-handler;
11)Reinstalar a aplicação dentro do emulador;
12)react-native start --reset-cache
13)Criar o arquivo routes.js no ./src
14)No ./src/index.js, importar as rotas criadas anteriormente, import Routes from './routes';
15)Apos instalar novas dependência executar novamente: 
react-native run-android
react-native start --reset-cache
16)Download da pasta assetes (imagens), colocar dentro do ./src;
17)No routes.js, criar os itens do header;
18)yarn add axios;
19)Criar pasta services no ./src
20)Dentro de ./src/services, criar o arquivo api.js;
21)Feed.js -> Inicia-se pela parte estrutual da aplicação.
22)Feed.js -> Estilização.
23)yarn add socket.io-client
24)yarn add react-native-image-picker
25)react-native link react-native-image-picker
26)https://github.com/react-native-community/react-native-image-picker/blob/master/docs/Install.md
27)Copiar para IOS:
    <key>NSPhotoLibraryUsageDescription</key>
    <string>$(PRODUCT_NAME) would like access to your photo gallery</string>
    <key>NSCameraUsageDescription</key>
    <string>$(PRODUCT_NAME) would like to use your camera</string>
    <key>NSPhotoLibraryAddUsageDescription</key>
    <string>$(PRODUCT_NAME) would like to save photos to your photo gallery</string>
    <key>NSMicrophoneUsageDescription</key>
    <string>$(PRODUCT_NAME) would like to use your microphone (for videos)</string>
28)Colar em C:\Users\osvaldo\Desktop\meusApps\instarocket\ios\instarocket\Info.plist    
29)Copiar para Android:
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
30)Colar em 

*/

import {AppRegistry} from 'react-native';
import App from './src';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);