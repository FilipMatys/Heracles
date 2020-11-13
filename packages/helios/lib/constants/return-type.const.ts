/**
 * Helios return type
 * @description Return type of Helios
 * response
 */
export abstract class HeliosReturnType {

    /**
     * Boolean
     * @description Boolean type
     */
    public static readonly Boolean: string = "HeliosResultTypes.ResultBoolean.THeliosResultBoolean";

    /**
     * String
     * @description String type
     */
    public static readonly String: string = "HeliosResultTypes.ResultString.THeliosResultString";

    /**
     * Integer 
     * @description Integer type
     */
    public static readonly Integer: string = "HeliosResultTypes.ResultInteger.HeliosResultInteger";

    /**
     * DateTime
     * @description Date time type
     */
    public static readonly DateTime: string = "HeliosResultTypes.ResultDateTime.THeliosResultDateTime";

    /**
     * DataSet
     * @description Data set type
     */
    public static readonly DataSet: string = "HeliosResultTypes.ResultDataSet.THeliosResultDataSet";

    /**
     * Browse
     * @description Browse type
     */
    public static readonly Browse: string = "HeliosResultTypes.ResultBrowse.THeliosResultBrowse";

    /**
     * Stream
     * @description Stream type
     */
    public static readonly Stream: string = "HeliosResultTypes.ResultStream.THeliosResultStream";

    /**
     * Editor
     * @description Editor type
     */
    public static readonly Editor: string = "HeliosResultTypes.ResultEditor.THeliosResultEditor";

    /**
     * Dialog
     * @description Dialog type
     */
    public static readonly Dialog: string = "HeliosResultTypes.ResultDialog.THeliosResultDialog";
}