/**
 * Helios dialog interface
 */
export interface IHeliosDialog {
    Caption?: string;
    Msg?: string;
    IconIndex?: string;
    SetFocus?: boolean;
    SecretText?: string;
    Buttons?: any[];
}