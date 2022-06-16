/**
 * This file was generated from NativePinInput.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";
import { ActionValue, DynamicValue, EditableValue, NativeIcon } from "mendix";

export type DarkModeEnum = "device" | "dark" | "light";

export type ButtonStyleEnum = "circle" | "numKeyboard";

export interface NativePinInputProps<Style> {
    name: string;
    style: Style[];
    bottomLeft?: ReactNode;
    dataAttr: EditableValue<string>;
    maxLength: number;
    deleteButtonIcon: DynamicValue<NativeIcon>;
    darkMode: DarkModeEnum;
    buttonStyle: ButtonStyleEnum;
    onChangeAction?: ActionValue;
    onInputCompleteAction?: ActionValue;
}

export interface NativePinInputPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    bottomLeft: { widgetCount: number; renderer: ComponentType<{ caption?: string }> };
    dataAttr: string;
    maxLength: number | null;
    deleteButtonIcon: { type: "glyph"; iconClass: string; } | { type: "image"; imageUrl: string; } | null;
    darkMode: DarkModeEnum;
    buttonStyle: ButtonStyleEnum;
    onChangeAction: {} | null;
    onInputCompleteAction: {} | null;
}
