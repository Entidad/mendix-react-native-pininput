## NativePinInput
Native mobile PIN input.

From a security point of view, the regular input widgets are not suitable for PIN entry, because the regular onscreen keyboard could be comprimised.

This widget uses buttons and shows the number of entered digits in a readonly text box.

## Features
- Secure PIN entry
- Configurable number of digits
- Configurable icon for the delete button
- Supports validation feedback on the attribute
- On change action
- On input complete action
- Widget styling responds to dark mode setting of the device, can also be fixed on dark/normal mode
- Two basic layouts: circle buttons and a more compact numeric keyboard layout
- Styling can easily be overruled. 

## Usage
- Your entity needs to have a string attribute for the PIN value. Integer does not work because leading zero's would be lost.
- Configure the number of digits for your situation.
- Configure the action events where appropriate.

## Remarks
- The widget will never show an existing value, not even the number of characters.
- The widget value will clear if you set the attribute to empty in a nanoflow.
- First clear the value and then send validation feedback. Feedback will not be visible the other way around.
- To center the widget horizontally, place the widget in a container that has Size=Minimum space and Align=Center

## Demo project
./test

## Issues, suggestions and feature requests
[GitHub](https://github.com/Entidad/mendix-react-native-pininput/issues)

## Development and contribution

1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing `npm -v`, execute: `npm install --legacy-peer-deps`.
2. `npm install react-select`
3. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.

Contributions welcome

