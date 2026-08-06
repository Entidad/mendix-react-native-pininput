## NativePinInput
Native mobile PIN input.

From a security point of view, the regular input widgets are not suitable for PIN entry, because the regular onscreen keyboard could be comprimised.

This widget uses buttons and shows the number of entered digits in a readonly text box.

## Features
- Secure PIN entry
- Configurable number of digits
- Configurable icons for the delete and undo buttons
- Supports validation feedback on the attribute
- On change, input complete and undo actions
- Widget styling responds to dark mode setting of the device, can also be fixed on dark/normal mode
- Two basic layouts: circle buttons and a more compact numeric keyboard layout
- Styling can easily be overruled

## Requirements
Studio Pro **11.12** or higher.

Version `2.0.0` is built against Mendix Pluggable Widgets Tools 11.12 (React 19, React
Native 0.84) and is **not backward compatible**. Stay on the `1.x` release for Studio Pro 10.

## Usage
Download one of the [releases](https://github.com/Entidad/mendix-react-native-pininput/releases)
or build from source as follows

```
git clone https://github.com/Entidad/mendix-react-native-pininput.git
cd ./mendix-react-native-pininput
npm install
npm run build
```

Deploy `entidad.io.NativePinInput.mpk` to `$PROJ/widgets`, then run
`Synchronize App Directory` in Studio Pro (`F4`, or `Menu / App / Synchronize App Directory`).

The widget needs an entity context, so place it inside a **Data view** or a **List view** row.

- Your entity needs to have a string attribute for the PIN value. Integer does not work because leading zero's would be lost.
- Configure the number of digits for your situation.
- Configure the action events where appropriate.

### Properties

| Property | Type | Required | Description |
| --- | --- | --- | --- |
| `dataAttr` | String attribute | yes | Holds the PIN. Written on every digit, delete and undo. |
| `maxLength` | Integer | yes (default `4`) | Number of digits before the input is considered complete. |
| `deleteButtonIcon` | Icon | yes | Icon for the delete button, bottom right. |
| `undoButtonIcon` | Icon | no | Icon for the undo button, bottom left. Required in practice — see below. |
| `showUndoButton` | Boolean | yes (default `false`) | Show the undo button. |
| `darkMode` | Enumeration | yes (default `Device`) | `Device`, `Dark` or `Light`. |
| `buttonStyle` | Enumeration | yes (default `Circle`) | `Circle` or `Num keyboard`. |
| `onChangeAction` | Action | no | Runs on every digit added or removed. |
| `onInputCompleteAction` | Action | no | Runs when the last digit completes the PIN. |
| `onUndoAction` | Action | no | Runs when undo is pressed. |

The standard **Visibility** property is supported.

### Behaviour

**Undo clears the whole PIN, it does not step back one digit.** Despite the name, pressing
undo empties the attribute and the display in one go. Use delete for single-digit
corrections. Undo fires `onChangeAction` *and* `onUndoAction`, in that order.

**The undo button needs both `showUndoButton` and `undoButtonIcon`.** It is rendered only
when the flag is on *and* an icon is available. Turning the flag on without mapping an icon
renders nothing at all — and because the placeholder that normally holds that slot is only
drawn when the flag is *off*, the bottom row loses its left cell and the `0` and delete
buttons shift left. If the bottom row looks misaligned, this is why.

**`onChangeAction` and `onInputCompleteAction` are mutually exclusive per keystroke.** For a
`maxLength` of 4, entering four digits fires `onChangeAction` three times and
`onInputCompleteAction` once — `onChangeAction` does not fire on the digit that completes the
PIN. Put verification on `onInputCompleteAction`.

**The attribute is written before the events run**, so a nanoflow triggered by either event
reads the current PIN rather than the previous one.

**Input stops at `maxLength`.** Further presses are ignored rather than replacing digits.

All actions respect the standard guards, so nothing runs when an action cannot execute or is
already executing.

## Remarks
- The widget will never show an existing value, not even the number of characters.
- The widget value will clear if you set the attribute to empty in a nanoflow.
- First clear the value and then send validation feedback. Feedback will not be visible the other way around.
- To center the widget horizontally, place the widget in a container that has Size=Minimum space and Align=Center

## Sample Content Area Button Styling

The widget reads eleven style keys:

| Key | Applied to |
| --- | --- |
| `container` | the outer wrapper |
| `valueRow` | the row holding the masked value |
| `readonlyText` | the readonly text showing one `*` per entered digit |
| `validationMessage` | the validation feedback line |
| `buttonRow` | each row of buttons |
| `pinInputView` | each digit button |
| `caption` | the digit inside each button |
| `deleteButtonTouchable` | the delete button cell |
| `undoButtonTouchable` | the undo button cell |
| `emptyContainer` | the placeholder used when the undo button is hidden |
| `icon` | **both** the delete and undo icons |

**`icon` drives both icons and there is no way to style them separately.** Its `fontSize`
sets the rendered size and its `color` sets the tint for delete *and* undo alike.

**A mapped icon is scaled to `icon.fontSize`, not drawn at its own size.** Mapping a 48×48
image and leaving `fontSize` at 25 renders it at 25. Set `icon:{fontSize:48}` to get the
asset at its native size.

Sizes for the button cells come from the `buttonStyle` you picked — `Circle` gives 70×70
cells, `Num keyboard` gives 50×85 — so you do not normally need to set width or height
yourself. Setting them in your own class overrules the layout entirely.

Class names may contain only letters and numbers — following Mendix convention, a custom
class is lowerCamelCase.

Export the class from `theme/native/main.js`, then enter its name in the widget's
**Class** property in Studio Pro. **Styling has no effect until that property is set** — the
widget silently falls back to its defaults, which most often shows up as icons and text
appearing at the wrong size.

```
export const customNativePinInput={
	container:{
		borderWidth:0
	},
	valueRow:{
		paddingHorizontal:20,
		maxWidth:360
	},
	readonlyText:{
		textAlign:"center",
		fontSize:25,
		backgroundColor:"transparent"
	},
	validationMessage:{
		textAlign:"center",
		color:"#ed1c24",
		height:20
	},
	buttonRow:{
		flexDirection:"row",
		paddingHorizontal:0,
		justifyContent:"center"
	},
	pinInputView:{/* the round buttons */
		justifyContent:"center",
		borderRadius:0
	},
	deleteButtonTouchable:{
		justifyContent:"center",
		alignItems:"center",
		backgroundColor:"transparent"
	},
	undoButtonTouchable:{
		justifyContent:"center",
		alignItems:"center",
		backgroundColor:"transparent"
	},
	emptyContainer:{
		backgroundColor:"transparent"
	},
	icon:{
		fontSize:25
	},
	caption:{
		textAlign:"center",
		fontSize:25
	}
}
```

## Demo project
./test

## Issues, suggestions and feature requests
[GitHub](https://github.com/Entidad/mendix-react-native-pininput/issues)

## Development and contribution

1. Install NPM package dependencies by using: `npm install`. Node 20.19.4 or higher is required.
1. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.

Contributions welcome

## References

* [https://docs.mendix.com/refguide/mobile/designing-mobile-user-interfaces/native-styling/](https://docs.mendix.com/refguide/mobile/designing-mobile-user-interfaces/native-styling/)
* [https://docs.mendix.com/apidocs-mxsdk/apidocs/pluggable-widgets-property-types/](https://docs.mendix.com/apidocs-mxsdk/apidocs/pluggable-widgets-property-types/)
