# CusroReactNative
proyectos de React Native




MiPrimerApp

crear el proyecto
--> npx react-native init NombreProyecto --template react-native-template-typescript

--> cd NombreProyecto

iniciar aplicacion en diferentes dispositivos
- Android
--> npx react-native run-android

-IOS
--> npx react-native run-ios
(si se genera un error - Flipper) podemos ir en la carpeta de ios buscar el podfile (archivo),
se debe seleccionar desde la linea donde dice: 
use_flipper!
hasta la linea donde dice 
end
y debemos de comentarlo, abrimos una terminal y ejecutamos:
--> npx pod-install
y ya podemos ejecutar el comando para iniciar el proyecto para ios



o podemos iniciar metro para seleccionar un tipo de dispositivo (ubuntu):
-->  npx react-native start




