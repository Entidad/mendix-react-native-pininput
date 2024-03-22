/**
 * This file was generated from NativePinInput.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ActionValue, DynamicValue, EditableValue, NativeIcon } from "mendix";

export type DarkModeEnum = "device" | "dark" | "light";

export type ButtonStyleEnum = "circle" | "numKeyboard";

export interface NativePinInputProps<Style> {
    name: string;
    style: Style[];
    dataAttr: EditableValue<string>;
    maxLength: number;
    deleteButtonIcon: DynamicValue<NativeIcon>;
    undoButtonIcon?: DynamicValue<NativeIcon>;
    showUndoButton: boolean;
    darkMode: DarkModeEnum;
    buttonStyle: ButtonStyleEnum;
    onChangeAction?: ActionValue;
    onInputCompleteAction?: ActionValue;
    onUndoAction?: ActionValue;
    version: string;
}

export interface NativePinInputPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    dataAttr: string;
    maxLength: number | null;
    deleteButtonIcon: { type: "glyph"; iconClass: string; } | { type: "image"; imageUrl: string; } | null;
    undoButtonIcon: { type: "glyph"; iconClass: string; } | { type: "image"; imageUrl: string; } | null;
    showUndoButton: boolean;
    darkMode: DarkModeEnum;
    buttonStyle: ButtonStyleEnum;
    onChangeAction: {} | null;
    onInputCompleteAction: {} | null;
    onUndoAction: {} | null;
    version: string;
}
