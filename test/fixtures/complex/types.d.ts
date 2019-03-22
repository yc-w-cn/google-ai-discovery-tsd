/**
 * A Complex API Schema
 */
namespace complex {
  /**
   * A complex schema!
   */
  type ISchema = {
    custom?: IOtherSchema;
    literalUnion?: 'a' | 'b' | 'c';
    integer?: number;
    /**
     * A description
     */
    doc?: string;
    /**
     * A much longer description.
     * On multiple lines!
     */
    multilineDoc?: string;
    required: string;
    readonly readOnly?: string;
    array?: Array<IOtherSchema>;
    tuple?: [string, number];
    obj?: { key?: string; [key: string]: string };
    nested?: Array<{
      /**
       * A nested property
       */
      nestedProp?: IExtendedSchema;
    }>;
  };

  type IOtherSchema = { prop?: string };

  type IExtendedSchema = { id?: number } & IOtherSchema;
}

export default complex;
