interface LoginResponse {
    status: number;
    message: string;
    domain: string;
    parsedPhoneNumber: number;
    parsedCountryCode: string;
    requestId: string;
    method: string;
    tokenTtl: number;
  }
  
  /**
   * Login to Truecaller.
   *
   * @param {string} phoneNumber - Phone number in international format.
   * @returns {Promise<LoginResponse>} - Promise that resolves to the login response containing the requestId used for OTP verification.
   */
  declare function login(phoneNumber: string): Promise<LoginResponse>;
  
  /**
   * Verifying mobile number with OTP
   *
   * @name truecallerjs.verifyOtp
   * @function verifyOtp
   * @param {string} phonenumber - Phone number in international format.
   * @param {Object} json_data - JSON response of the login(phonenumber) function.
   * @param {string} otp - 6-digit OTP.
   * @returns {Promise<Object>} - JSON output containing the installationId.
   *
   * Follow this documentation for more details: https://github.com/sumithemmadi/truecallerjs/tree/main/docs
   */
  declare function verifyOtp(
    phonenumber: string,
    json_data: LoginResponse,
    otp: string
  ): Promise<object>;
  
  interface Address {
    city: string;
    countryCode: string;
    timeZone: string;
    type: string;
  }
  interface InternetAddress {
    id: string;
    service: string;
    caption: string;
    type: string;
  }
  interface CountryDetails {
    name: string;
    native: string;
    phone: number[];
    continent: string;
    capital: string;
    currency: string[];
    languages: string[];
    flag: string;
    flagURL: string;
  }
  interface Data {
    name?: string;
    altName?: string;
    addresses?: Address[];
    internetAddresses?: InternetAddress[];
  }
  interface SearchData {
    number: string;
    countryCode: string;
    installationId: string;
  }
  interface ResponseData {
    data: Data[];
  }
  declare class Format {
    private data;
    constructor(data: ResponseData);
    json(): ResponseData;
    xml(color?: boolean): string;
    yaml(color?: boolean): string;
    text(color?: boolean, space?: boolean): string;
    getName(): string;
    getAlternateName(): string;
    getAddresses(): Address[];
    getEmailId(): string;
    getCountryDetails(): CountryDetails;
  }
  /**
   * @var response => {...}
   * @method response.json(color) JSON response. @param {Boolean} color
   * @method response.xml(color)  XML output. @param {Boolean} color .
   * @method response.yaml(color) YAML output. @param {Boolean} color
   * @method response.html(color) HTML output. @param {Boolean} color
   * @method response.text(color,space) JSON response. @param {Boolean} color . @param {Boolean} space Spacing between keys and values.
   *
   *
   * @method response.getName() => "Sumith Emmadi"
   * @method response.getAlternateName() => "sumith"
   * @method response.getAddresses() => {....}
   * @method response.getEmailId() => sumithemmadi244@gmail.com
   * @method response.getCountryDetails() => {...}
   */
  /**
   *  Searching phone number on truecallerjs
   *
   * @name search
   * @function truecallerjs.search(search_data)
   * @param {Object} search_data It is a json containing phonenumber,countryCode,installationId
   * @return {Object} It contains details of the phone number
   */
  declare function search(searchData: SearchData): Promise<Format>;
  /**
   * Bulk search on truecallerjs
   *
   * @name bulkSearch
   * @function truecallerjs.bulkSearch(phoneNumbers,countryCode,installationId)
   * @param {String} phoneNumbers phone number separted with coma.
   * @param {String} countryCode Country code to use by default if any phone number is not in `e164` format(Internation format)
   * @param {String} installationId 6-digits OTP .
   *
   * @return {Object} It contains phone numbers information in a array
   */
  declare function bulkSearch(
    phoneNumbers: string,
    regionCode: string,
    installationId: string
  ): Promise<ResponseData>;
  export { login, verifyOtp, search, bulkSearch };
  