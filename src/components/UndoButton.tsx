import { ReactElement, createElement, useMemo } from "react";
import { Pressable, View } from "react-native";
import { DynamicValue, NativeIcon, ValueStatus } from "mendix";
import { Icon } from "mendix/components/native/Icon";
import { CustomStyle } from "src/ui/styles";

export interface UndoButtonProps {
    undoButtonIcon: DynamicValue<NativeIcon>;
    style: CustomStyle;
    onClick: () => void;
}

export function UndoButton({ undoButtonIcon, style, onClick }: UndoButtonProps): ReactElement {
    const renderIcon = useMemo((): ReactElement => {
        const defaultIconGlyph = "glyphicon-trash";
        const nativeIcon: NativeIcon =
            undoButtonIcon && undoButtonIcon.status === ValueStatus.Available
                ? undoButtonIcon.value
                : { type: "glyph", iconClass: defaultIconGlyph };
        // Do not apply styling to pressable, but to the child view
        return (
            <View style={style.undoButtonTouchable}>
                <Icon color={style.icon.color as string} icon={nativeIcon} size={style.icon.fontSize} />
            </View>
        );
    }, [undoButtonIcon, style]);

    return <Pressable onPress={() => onClick()}>{renderIcon}</Pressable>;
}
