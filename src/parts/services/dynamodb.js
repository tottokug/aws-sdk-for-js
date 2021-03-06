/**
 * @class AmazonDynamoDBClient
 * @param {String} access_key 
 * @param {String} secret_key
 */
function AmazonDynamoDB(access_key,secret_key){
  this.__proto__ = $.extend(this.__proto__,AWS.prototype);
  this.initialize(access_key,secret_key);
}
AmazonDynamoDB.prototype = {
  service:'dynamodb',
  api_version:'2011-12-05',
  auth_class: new AuthV4JSON(),
  operation_prefix: 'x-amz-target:DynamoDB_20111205.',
  /**
   * @memberOf AmazonDynamoDB
   * @constructor 
   */
  initialize : function(access_key,secret_key){
    this.init(access_key,secret_key);
    
  },
 
  /**
   * Retrieves the attributes for multiple items from multiple tables using their primary keys.
   *  
   * The maximum number of item attributes that can be retrieved for a single operation is 100.
   * Also, the number of items retrieved is constrained by a 1 MB the size limit. If the response
   * size limit is exceeded or a partial result is returned due to an internal processing failure,
   * Amazon DynamoDB returns an <code>UnprocessedKeys</code> value so you can retry the operation
   * starting with the next item to get.
   *  
   * Amazon DynamoDB automatically adjusts the number of items returned per page to enforce this
   * limit. For example, even if you ask to retrieve 100 items, but each individual item is 50k in
   * size, the system returns 20 items and an appropriate <code>UnprocessedKeys</code> value so you
   * can get the next page of results. If necessary, your application needs its own logic to
   * assemble the pages of results into one set.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} opt.RequestItems A map of the table name and corresponding items to get by primary key. While requesting items, each table name can be invoked only once per operation. 
   * @param {Object} [opt.[custom-key]] This key is variable (e.g., user-specified). [Constraints: The value must be between 3 and 255 characters, and must match the following regular expression pattern: 
   * @param {Object} opt.Keys The primary key that uniquely identifies each item in a table. A primary key can be a one attribute (hash) primary key or a two attribute (hash-and-range) primary key. 
   * @param {Object} [opt.x] This represents a simple array index. 
   * @param {Object} opt.HashKeyElement A hash key element is treated as the primary key, and can be a string or a number. Single attribute primary keys have one index value. The value can be 
   * @param {String} [opt.S] Strings are Unicode with UTF-8 binary encoding. The maximum size is limited by the size of the primary key (1024 bytes as a range part of a key or 2048 bytes as a single part hash key) or the item size (64k).
   * @param {String} [opt.N] Numbers are positive or negative exact-value decimals and integers. A number can have up to 38 digits precision and can be between 10^-128 to 10^+126.
   * @param {Blob} [opt.B] Binary attributes are sequences of unsigned bytes.
   * @param {String|array} [opt.SS] A set of strings. Pass a string for a single value, or an indexed array for multiple values.
   * @param {String|array} [opt.NS] A set of numbers. Pass a string for a single value, or an indexed array for multiple values.
   * @param {Blob} [opt.BS] A set of binary attributes.
   * @param {Object} [opt.RangeKeyElement] A range key element is treated as a secondary key (used in conjunction with the primary key), and can be a string or a number, and is only used for hash-and-range primary keys. The value can be 
   * @param {String} [opt.S] Strings are Unicode with UTF-8 binary encoding. The maximum size is limited by the size of the primary key (1024 bytes as a range part of a key or 2048 bytes as a single part hash key) or the item size (64k).
   * @param {String} [opt.N] Numbers are positive or negative exact-value decimals and integers. A number can have up to 38 digits precision and can be between 10^-128 to 10^+126.
   * @param {Blob} [opt.B] Binary attributes are sequences of unsigned bytes.
   * @param {String|array} [opt.SS] A set of strings. Pass a string for a single value, or an indexed array for multiple values.
   * @param {String|array} [opt.NS] A set of numbers. Pass a string for a single value, or an indexed array for multiple values.
   * @param {Blob} [opt.BS] A set of binary attributes.
   * @param {String|array} [opt.AttributesToGet] List of 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  batch_get_item: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("BatchGetItem", payload );
    return response;
  }, 
  /**
   * Allows to execute a batch of Put and/or Delete Requests for many tables in a single call. A
   * total of 25 requests are allowed.
   *  
   * There are no transaction guarantees provided by this API. It does not allow conditional puts
   * nor does it support return values.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} opt.RequestItems A map of table name to list-of-write-requests. Used as input to the 
   * @param {Object} [opt.[custom-key]] This key is variable (e.g., user-specified). 
   * @param {Object} [opt.x] This represents a simple array index. 
   * @param {Object} [opt.PutRequest] A container for a Put BatchWrite request 
   * @param {Object} opt.Item The item to put 
   * @param {Object} [opt.[custom-key]] AttributeValue can be 
   * @param {String} [opt.S] Strings are Unicode with UTF-8 binary encoding. The maximum size is limited by the size of the primary key (1024 bytes as a range part of a key or 2048 bytes as a single part hash key) or the item size (64k).
   * @param {String} [opt.N] Numbers are positive or negative exact-value decimals and integers. A number can have up to 38 digits precision and can be between 10^-128 to 10^+126.
   * @param {Blob} [opt.B] Binary attributes are sequences of unsigned bytes.
   * @param {String|array} [opt.SS] A set of strings. Pass a string for a single value, or an indexed array for multiple values.
   * @param {String|array} [opt.NS] A set of numbers. Pass a string for a single value, or an indexed array for multiple values.
   * @param {Blob} [opt.BS] A set of binary attributes.
   * @param {Object} [opt.DeleteRequest] A container for a Delete BatchWrite request 
   * @param {Object} opt.Key The item's key to be delete 
   * @param {Object} opt.HashKeyElement A hash key element is treated as the primary key, and can be a string or a number. Single attribute primary keys have one index value. The value can be 
   * @param {String} [opt.S] Strings are Unicode with UTF-8 binary encoding. The maximum size is limited by the size of the primary key (1024 bytes as a range part of a key or 2048 bytes as a single part hash key) or the item size (64k).
   * @param {String} [opt.N] Numbers are positive or negative exact-value decimals and integers. A number can have up to 38 digits precision and can be between 10^-128 to 10^+126.
   * @param {Blob} [opt.B] Binary attributes are sequences of unsigned bytes.
   * @param {String|array} [opt.SS] A set of strings. Pass a string for a single value, or an indexed array for multiple values.
   * @param {String|array} [opt.NS] A set of numbers. Pass a string for a single value, or an indexed array for multiple values.
   * @param {Blob} [opt.BS] A set of binary attributes.
   * @param {Object} [opt.RangeKeyElement] A range key element is treated as a secondary key (used in conjunction with the primary key), and can be a string or a number, and is only used for hash-and-range primary keys. The value can be 
   * @param {String} [opt.S] Strings are Unicode with UTF-8 binary encoding. The maximum size is limited by the size of the primary key (1024 bytes as a range part of a key or 2048 bytes as a single part hash key) or the item size (64k).
   * @param {String} [opt.N] Numbers are positive or negative exact-value decimals and integers. A number can have up to 38 digits precision and can be between 10^-128 to 10^+126.
   * @param {Blob} [opt.B] Binary attributes are sequences of unsigned bytes.
   * @param {String|array} [opt.SS] A set of strings. Pass a string for a single value, or an indexed array for multiple values.
   * @param {String|array} [opt.NS] A set of numbers. Pass a string for a single value, or an indexed array for multiple values.
   * @param {Blob} [opt.BS] A set of binary attributes.
   * @param {Object} [opt.value] AttributeValue can be 
   * @param {String} [opt.S] Strings are Unicode with UTF-8 binary encoding. The maximum size is limited by the size of the primary key (1024 bytes as a range part of a key or 2048 bytes as a single part hash key) or the item size (64k).
   * @param {String} [opt.N] Numbers are positive or negative exact-value decimals and integers. A number can have up to 38 digits precision and can be between 10^-128 to 10^+126.
   * @param {Blob} [opt.B] Binary attributes are sequences of unsigned bytes.
   * @param {String|array} [opt.SS] A set of strings. Pass a string for a single value, or an indexed array for multiple values.
   * @param {String|array} [opt.NS] A set of numbers. Pass a string for a single value, or an indexed array for multiple values.
   * @param {Blob} [opt.BS] A set of binary attributes.
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  batch_write_item: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("BatchWriteItem", payload );
    return response;
  }, 
  /**
   * Adds a new table to your account.
   *  
   * The table name must be unique among those associated with the AWS Account issuing the request,
   * and the AWS Region that receives the request (e.g. <code>us-east-1</code>).
   *  
   * The <code>CreateTable</code> operation triggers an asynchronous workflow to begin creating the
   * table. Amazon DynamoDB immediately returns the state of the table (<code>CREATING</code>) until
   * the table is in the <code>ACTIVE</code> state. Once the table is in the <code>ACTIVE</code>
   * state, you can perform data plane operations.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.TableName The name of the table you want to create. Allowed characters are 
   * @param {Object} opt.KeySchema The KeySchema identifies the primary key as a one attribute primary key (hash) or a composite two attribute (hash-and-range) primary key. Single attribute primary keys have one index value: a 
   * @param {Object} opt.HashKeyElement A hash key element is treated as the primary key, and can be a string or a number. Single attribute primary keys have one index value. The value can be 
   * @param {String} opt.AttributeName The 
   * @param {String} opt.AttributeType The 
   * @param {Object} [opt.RangeKeyElement] A range key element is treated as a secondary key (used in conjunction with the primary key), and can be a string or a number, and is only used for hash-and-range primary keys. The value can be 
   * @param {String} opt.AttributeName The 
   * @param {String} opt.AttributeType The 
   * @param {Object} opt.ProvisionedThroughput Provisioned throughput reserves the required read and write resources for your table in terms of 
   *     <li><code>WriteCapacityUnits</code> - <code>long</code> - Required - <code>WriteCapacityUnits</code> are in terms of strictly consistent reads, assuming items of 1k. 2k items require twice the <code>WriteCapacityUnits</code>.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  create_table: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("CreateTable", payload );
    return response;
  }, 
  /**
   * Deletes a single item in a table by primary key.
   *  
   * You can perform a conditional delete operation that deletes the item if it exists, or if it has
   * an expected attribute value.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.TableName The name of the table in which you want to delete an item. Allowed characters are 
   * @param {Object} opt.Key The primary key that uniquely identifies each item in a table. A primary key can be a one attribute (hash) primary key or a two attribute (hash-and-range) primary key. 
   * @param {Object} opt.HashKeyElement A hash key element is treated as the primary key, and can be a string or a number. Single attribute primary keys have one index value. The value can be 
   * @param {String} [opt.S] Strings are Unicode with UTF-8 binary encoding. The maximum size is limited by the size of the primary key (1024 bytes as a range part of a key or 2048 bytes as a single part hash key) or the item size (64k).
   * @param {String} [opt.N] Numbers are positive or negative exact-value decimals and integers. A number can have up to 38 digits precision and can be between 10^-128 to 10^+126.
   * @param {Blob} [opt.B] Binary attributes are sequences of unsigned bytes.
   * @param {String|array} [opt.SS] A set of strings. Pass a string for a single value, or an indexed array for multiple values.
   * @param {String|array} [opt.NS] A set of numbers. Pass a string for a single value, or an indexed array for multiple values.
   * @param {Blob} [opt.BS] A set of binary attributes.
   * @param {Object} [opt.RangeKeyElement] A range key element is treated as a secondary key (used in conjunction with the primary key), and can be a string or a number, and is only used for hash-and-range primary keys. The value can be 
   * @param {String} [opt.S] Strings are Unicode with UTF-8 binary encoding. The maximum size is limited by the size of the primary key (1024 bytes as a range part of a key or 2048 bytes as a single part hash key) or the item size (64k).
   * @param {String} [opt.N] Numbers are positive or negative exact-value decimals and integers. A number can have up to 38 digits precision and can be between 10^-128 to 10^+126.
   * @param {Blob} [opt.B] Binary attributes are sequences of unsigned bytes.
   * @param {String|array} [opt.SS] A set of strings. Pass a string for a single value, or an indexed array for multiple values.
   * @param {String|array} [opt.NS] A set of numbers. Pass a string for a single value, or an indexed array for multiple values.
   * @param {Blob} [opt.BS] A set of binary attributes.
   * @param {Object} [opt.Expected] Designates an attribute for a conditional modification. The 
   * @param {Object} [opt.[custom-key]] Allows you to provide an attribute name, and whether or not Amazon DynamoDB should check to see if the attribute value already exists; or if the attribute value exists and has a particular value before changing it. 
   * @param {Object} [opt.Value] Specify whether or not a value already exists and has a specific content for the attribute name-value pair. 
   * @param {String} [opt.S] Strings are Unicode with UTF-8 binary encoding. The maximum size is limited by the size of the primary key (1024 bytes as a range part of a key or 2048 bytes as a single part hash key) or the item size (64k).
   * @param {String} [opt.N] Numbers are positive or negative exact-value decimals and integers. A number can have up to 38 digits precision and can be between 10^-128 to 10^+126.
   * @param {Blob} [opt.B] Binary attributes are sequences of unsigned bytes.
   * @param {String|array} [opt.SS] A set of strings. Pass a string for a single value, or an indexed array for multiple values.
   * @param {String|array} [opt.NS] A set of numbers. Pass a string for a single value, or an indexed array for multiple values.
   * @param {Blob} [opt.BS] A set of binary attributes.
   * @param {Boolean} [opt.Exists] Specify whether or not a value already exists for the attribute name-value pair.
   * @param {String} [opt.ReturnValues] Use this parameter if you want to get the attribute name-value pairs before or after they are modified. For 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  delete_item: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DeleteItem", payload );
    return response;
  }, 
  /**
   * Deletes a table and all of its items.
   *  
   * If the table is in the <code>ACTIVE</code> state, you can delete it. If a table is in
   * <code>CREATING</code> or <code>UPDATING</code> states then Amazon DynamoDB returns a
   * <code>ResourceInUseException</code>. If the specified table does not exist, Amazon DynamoDB
   * returns a <code>ResourceNotFoundException</code>.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.TableName The name of the table you want to delete. Allowed characters are 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  delete_table: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DeleteTable", payload );
    return response;
  }, 
  /**
   * Retrieves information about the table, including the current status of the table, the primary
   * key schema and when the table was created.
   *  
   * If the table does not exist, Amazon DynamoDB returns a <code>ResourceNotFoundException</code>.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.TableName The name of the table you want to describe. Allowed characters are 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  describe_table: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DescribeTable", payload );
    return response;
  }, 
  /**
   * Retrieves a set of Attributes for an item that matches the primary key.
   *  
   * The <code>GetItem</code> operation provides an eventually-consistent read by default. If
   * eventually-consistent reads are not acceptable for your application, use
   * <code>ConsistentRead</code>. Although this operation might take longer than a standard read, it
   * always returns the last updated value.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.TableName The name of the table in which you want to get an item. Allowed characters are 
   * @param {Object} opt.Key The primary key that uniquely identifies each item in a table. A primary key can be a one attribute (hash) primary key or a two attribute (hash-and-range) primary key. 
   * @param {Object} opt.HashKeyElement A hash key element is treated as the primary key, and can be a string or a number. Single attribute primary keys have one index value. The value can be 
   * @param {String} [opt.S] Strings are Unicode with UTF-8 binary encoding. The maximum size is limited by the size of the primary key (1024 bytes as a range part of a key or 2048 bytes as a single part hash key) or the item size (64k).
   * @param {String} [opt.N] Numbers are positive or negative exact-value decimals and integers. A number can have up to 38 digits precision and can be between 10^-128 to 10^+126.
   * @param {Blob} [opt.B] Binary attributes are sequences of unsigned bytes.
   * @param {String|array} [opt.SS] A set of strings. Pass a string for a single value, or an indexed array for multiple values.
   * @param {String|array} [opt.NS] A set of numbers. Pass a string for a single value, or an indexed array for multiple values.
   * @param {Blob} [opt.BS] A set of binary attributes.
   * @param {Object} [opt.RangeKeyElement] A range key element is treated as a secondary key (used in conjunction with the primary key), and can be a string or a number, and is only used for hash-and-range primary keys. The value can be 
   * @param {String} [opt.S] Strings are Unicode with UTF-8 binary encoding. The maximum size is limited by the size of the primary key (1024 bytes as a range part of a key or 2048 bytes as a single part hash key) or the item size (64k).
   * @param {String} [opt.N] Numbers are positive or negative exact-value decimals and integers. A number can have up to 38 digits precision and can be between 10^-128 to 10^+126.
   * @param {Blob} [opt.B] Binary attributes are sequences of unsigned bytes.
   * @param {String|array} [opt.SS] A set of strings. Pass a string for a single value, or an indexed array for multiple values.
   * @param {String|array} [opt.NS] A set of numbers. Pass a string for a single value, or an indexed array for multiple values.
   * @param {Blob} [opt.BS] A set of binary attributes.
   * @param {String|array} [opt.AttributesToGet] List of 
   * @param {Boolean} [opt.ConsistentRead] If set to 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  get_item: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("GetItem", payload );
    return response;
  }, 
  /**
   * Retrieves a paginated list of table names created by the AWS Account of the caller in the AWS
   * Region (e.g. <code>us-east-1</code>).
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.ExclusiveStartTableName] The name of the table that starts the list. If you already ran a 
   * @param {Number} [opt.Limit] A number of maximum table names to return.
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  list_tables: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("ListTables", payload );
    return response;
  }, 
  /**
   * Creates a new item, or replaces an old item with a new item (including all the attributes).
   *  
   * If an item already exists in the specified table with the same primary key, the new item
   * completely replaces the existing item. You can perform a conditional put (insert a new item if
   * one with the specified primary key doesn't exist), or replace an existing item if it has
   * certain attribute values.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.TableName The name of the table in which you want to put an item. Allowed characters are 
   * @param {Object} opt.Item A map of the attributes for the item, and must include the primary key values that define the item. Other attribute name-value pairs can be provided for the item. 
   * @param {Object} [opt.[custom-key]] AttributeValue can be 
   * @param {String} [opt.S] Strings are Unicode with UTF-8 binary encoding. The maximum size is limited by the size of the primary key (1024 bytes as a range part of a key or 2048 bytes as a single part hash key) or the item size (64k).
   * @param {String} [opt.N] Numbers are positive or negative exact-value decimals and integers. A number can have up to 38 digits precision and can be between 10^-128 to 10^+126.
   * @param {Blob} [opt.B] Binary attributes are sequences of unsigned bytes.
   * @param {String|array} [opt.SS] A set of strings. Pass a string for a single value, or an indexed array for multiple values.
   * @param {String|array} [opt.NS] A set of numbers. Pass a string for a single value, or an indexed array for multiple values.
   * @param {Blob} [opt.BS] A set of binary attributes.
   * @param {Object} [opt.Expected] Designates an attribute for a conditional modification. The 
   * @param {Object} [opt.[custom-key]] Allows you to provide an attribute name, and whether or not Amazon DynamoDB should check to see if the attribute value already exists; or if the attribute value exists and has a particular value before changing it. 
   * @param {Object} [opt.Value] Specify whether or not a value already exists and has a specific content for the attribute name-value pair. 
   * @param {String} [opt.S] Strings are Unicode with UTF-8 binary encoding. The maximum size is limited by the size of the primary key (1024 bytes as a range part of a key or 2048 bytes as a single part hash key) or the item size (64k).
   * @param {String} [opt.N] Numbers are positive or negative exact-value decimals and integers. A number can have up to 38 digits precision and can be between 10^-128 to 10^+126.
   * @param {Blob} [opt.B] Binary attributes are sequences of unsigned bytes.
   * @param {String|array} [opt.SS] A set of strings. Pass a string for a single value, or an indexed array for multiple values.
   * @param {String|array} [opt.NS] A set of numbers. Pass a string for a single value, or an indexed array for multiple values.
   * @param {Blob} [opt.BS] A set of binary attributes.
   * @param {Boolean} [opt.Exists] Specify whether or not a value already exists for the attribute name-value pair.
   * @param {String} [opt.ReturnValues] Use this parameter if you want to get the attribute name-value pairs before or after they are modified. For 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  put_item: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("PutItem", payload );
    return response;
  }, 
  /**
   * Gets the values of one or more items and its attributes by primary key (composite primary key,
   * only).
   *  
   * Narrow the scope of the query using comparison operators on the <code>RangeKeyValue</code> of
   * the composite key. Use the <code>ScanIndexForward</code> parameter to get results in forward or
   * reverse order by range key.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.TableName The name of the table in which you want to query. Allowed characters are 
   * @param {String|array} [opt.AttributesToGet] List of 
   * @param {Number} [opt.Limit] The maximum number of items to return. If Amazon DynamoDB hits this limit while querying the table, it stops the query and returns the matching values up to the limit, and a 
   * @param {Boolean} [opt.ConsistentRead] If set to 
   * @param {Boolean} [opt.Count] If set to 
   * @param {Object} opt.HashKeyValue Attribute value of the hash component of the composite primary key. 
   * @param {String} [opt.S] Strings are Unicode with UTF-8 binary encoding. The maximum size is limited by the size of the primary key (1024 bytes as a range part of a key or 2048 bytes as a single part hash key) or the item size (64k).
   * @param {String} [opt.N] Numbers are positive or negative exact-value decimals and integers. A number can have up to 38 digits precision and can be between 10^-128 to 10^+126.
   * @param {Blob} [opt.B] Binary attributes are sequences of unsigned bytes.
   * @param {String|array} [opt.SS] A set of strings. Pass a string for a single value, or an indexed array for multiple values.
   * @param {String|array} [opt.NS] A set of numbers. Pass a string for a single value, or an indexed array for multiple values.
   * @param {Blob} [opt.BS] A set of binary attributes.
   * @param {Object} [opt.RangeKeyCondition] A container for the attribute values and comparison operators to use for the query. 
   * @param {Object} [opt.AttributeValueList] A list of attribute values to be used with a comparison operator for a scan or query operation. For comparisons that require more than one value, such as a 
   * @param {Object} [opt.x] This represents a simple array index. 
   * @param {String} [opt.S] Strings are Unicode with UTF-8 binary encoding. The maximum size is limited by the size of the primary key (1024 bytes as a range part of a key or 2048 bytes as a single part hash key) or the item size (64k).
   * @param {String} [opt.N] Numbers are positive or negative exact-value decimals and integers. A number can have up to 38 digits precision and can be between 10^-128 to 10^+126.
   * @param {Blob} [opt.B] Binary attributes are sequences of unsigned bytes.
   * @param {String|array} [opt.SS] A set of strings. Pass a string for a single value, or an indexed array for multiple values.
   * @param {String|array} [opt.NS] A set of numbers. Pass a string for a single value, or an indexed array for multiple values.
   * @param {Blob} [opt.BS] A set of binary attributes.
   * @param {String} opt.ComparisonOperator A comparison operator is an enumeration of several operations:
   * @param {Boolean} [opt.ScanIndexForward] Specifies forward or backward traversal of the index. Amazon DynamoDB returns results reflecting the requested order, determined by the range key. The default value is 
   * @param {Object} [opt.ExclusiveStartKey] Primary key of the item from which to continue an earlier query. An earlier query might provide this value as the 
   * @param {Object} opt.HashKeyElement A hash key element is treated as the primary key, and can be a string or a number. Single attribute primary keys have one index value. The value can be 
   * @param {String} [opt.S] Strings are Unicode with UTF-8 binary encoding. The maximum size is limited by the size of the primary key (1024 bytes as a range part of a key or 2048 bytes as a single part hash key) or the item size (64k).
   * @param {String} [opt.N] Numbers are positive or negative exact-value decimals and integers. A number can have up to 38 digits precision and can be between 10^-128 to 10^+126.
   * @param {Blob} [opt.B] Binary attributes are sequences of unsigned bytes.
   * @param {String|array} [opt.SS] A set of strings. Pass a string for a single value, or an indexed array for multiple values.
   * @param {String|array} [opt.NS] A set of numbers. Pass a string for a single value, or an indexed array for multiple values.
   * @param {Blob} [opt.BS] A set of binary attributes.
   * @param {Object} [opt.RangeKeyElement] A range key element is treated as a secondary key (used in conjunction with the primary key), and can be a string or a number, and is only used for hash-and-range primary keys. The value can be 
   * @param {String} [opt.S] Strings are Unicode with UTF-8 binary encoding. The maximum size is limited by the size of the primary key (1024 bytes as a range part of a key or 2048 bytes as a single part hash key) or the item size (64k).
   * @param {String} [opt.N] Numbers are positive or negative exact-value decimals and integers. A number can have up to 38 digits precision and can be between 10^-128 to 10^+126.
   * @param {Blob} [opt.B] Binary attributes are sequences of unsigned bytes.
   * @param {String|array} [opt.SS] A set of strings. Pass a string for a single value, or an indexed array for multiple values.
   * @param {String|array} [opt.NS] A set of numbers. Pass a string for a single value, or an indexed array for multiple values.
   * @param {Blob} [opt.BS] A set of binary attributes.
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  query: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("Query", payload );
    return response;
  }, 
  /**
   * Retrieves one or more items and its attributes by performing a full scan of a table.
   *  
   * Provide a <code>ScanFilter</code> to get more specific results.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.TableName The name of the table in which you want to scan. Allowed characters are 
   * @param {String|array} [opt.AttributesToGet] List of 
   * @param {Number} [opt.Limit] The maximum number of items to return. If Amazon DynamoDB hits this limit while scanning the table, it stops the scan and returns the matching values up to the limit, and a 
   * @param {Boolean} [opt.Count] If set to 
   * @param {Object} [opt.ScanFilter] Evaluates the scan results and returns only the desired values. 
   * @param {Object} [opt.[custom-key]] This key is variable (e.g., user-specified). 
   * @param {Object} [opt.AttributeValueList] A list of attribute values to be used with a comparison operator for a scan or query operation. For comparisons that require more than one value, such as a 
   * @param {Object} [opt.x] This represents a simple array index. 
   * @param {String} [opt.S] Strings are Unicode with UTF-8 binary encoding. The maximum size is limited by the size of the primary key (1024 bytes as a range part of a key or 2048 bytes as a single part hash key) or the item size (64k).
   * @param {String} [opt.N] Numbers are positive or negative exact-value decimals and integers. A number can have up to 38 digits precision and can be between 10^-128 to 10^+126.
   * @param {Blob} [opt.B] Binary attributes are sequences of unsigned bytes.
   * @param {String|array} [opt.SS] A set of strings. Pass a string for a single value, or an indexed array for multiple values.
   * @param {String|array} [opt.NS] A set of numbers. Pass a string for a single value, or an indexed array for multiple values.
   * @param {Blob} [opt.BS] A set of binary attributes.
   * @param {String} opt.ComparisonOperator A comparison operator is an enumeration of several operations:
   * @param {Object} [opt.ExclusiveStartKey] Primary key of the item from which to continue an earlier scan. An earlier scan might provide this value if that scan operation was interrupted before scanning the entire table; either because of the result set size or the 
   * @param {Object} opt.HashKeyElement A hash key element is treated as the primary key, and can be a string or a number. Single attribute primary keys have one index value. The value can be 
   * @param {String} [opt.S] Strings are Unicode with UTF-8 binary encoding. The maximum size is limited by the size of the primary key (1024 bytes as a range part of a key or 2048 bytes as a single part hash key) or the item size (64k).
   * @param {String} [opt.N] Numbers are positive or negative exact-value decimals and integers. A number can have up to 38 digits precision and can be between 10^-128 to 10^+126.
   * @param {Blob} [opt.B] Binary attributes are sequences of unsigned bytes.
   * @param {String|array} [opt.SS] A set of strings. Pass a string for a single value, or an indexed array for multiple values.
   * @param {String|array} [opt.NS] A set of numbers. Pass a string for a single value, or an indexed array for multiple values.
   * @param {Blob} [opt.BS] A set of binary attributes.
   * @param {Object} [opt.RangeKeyElement] A range key element is treated as a secondary key (used in conjunction with the primary key), and can be a string or a number, and is only used for hash-and-range primary keys. The value can be 
   * @param {String} [opt.S] Strings are Unicode with UTF-8 binary encoding. The maximum size is limited by the size of the primary key (1024 bytes as a range part of a key or 2048 bytes as a single part hash key) or the item size (64k).
   * @param {String} [opt.N] Numbers are positive or negative exact-value decimals and integers. A number can have up to 38 digits precision and can be between 10^-128 to 10^+126.
   * @param {Blob} [opt.B] Binary attributes are sequences of unsigned bytes.
   * @param {String|array} [opt.SS] A set of strings. Pass a string for a single value, or an indexed array for multiple values.
   * @param {String|array} [opt.NS] A set of numbers. Pass a string for a single value, or an indexed array for multiple values.
   * @param {Blob} [opt.BS] A set of binary attributes.
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  scan: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("Scan", payload );
    return response;
  }, 
  /**
   * Edits an existing item's attributes.
   *  
   * You can perform a conditional update (insert a new attribute name-value pair if it doesn't
   * exist, or replace an existing name-value pair if it has certain expected attribute values).
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.TableName The name of the table in which you want to update an item. Allowed characters are 
   * @param {Object} opt.Key The primary key that uniquely identifies each item in a table. A primary key can be a one attribute (hash) primary key or a two attribute (hash-and-range) primary key. 
   * @param {Object} opt.HashKeyElement A hash key element is treated as the primary key, and can be a string or a number. Single attribute primary keys have one index value. The value can be 
   * @param {String} [opt.S] Strings are Unicode with UTF-8 binary encoding. The maximum size is limited by the size of the primary key (1024 bytes as a range part of a key or 2048 bytes as a single part hash key) or the item size (64k).
   * @param {String} [opt.N] Numbers are positive or negative exact-value decimals and integers. A number can have up to 38 digits precision and can be between 10^-128 to 10^+126.
   * @param {Blob} [opt.B] Binary attributes are sequences of unsigned bytes.
   * @param {String|array} [opt.SS] A set of strings. Pass a string for a single value, or an indexed array for multiple values.
   * @param {String|array} [opt.NS] A set of numbers. Pass a string for a single value, or an indexed array for multiple values.
   * @param {Blob} [opt.BS] A set of binary attributes.
   * @param {Object} [opt.RangeKeyElement] A range key element is treated as a secondary key (used in conjunction with the primary key), and can be a string or a number, and is only used for hash-and-range primary keys. The value can be 
   * @param {String} [opt.S] Strings are Unicode with UTF-8 binary encoding. The maximum size is limited by the size of the primary key (1024 bytes as a range part of a key or 2048 bytes as a single part hash key) or the item size (64k).
   * @param {String} [opt.N] Numbers are positive or negative exact-value decimals and integers. A number can have up to 38 digits precision and can be between 10^-128 to 10^+126.
   * @param {Blob} [opt.B] Binary attributes are sequences of unsigned bytes.
   * @param {String|array} [opt.SS] A set of strings. Pass a string for a single value, or an indexed array for multiple values.
   * @param {String|array} [opt.NS] A set of numbers. Pass a string for a single value, or an indexed array for multiple values.
   * @param {Blob} [opt.BS] A set of binary attributes.
   * @param {Object} opt.AttributeUpdates Map of attribute name to the new value and action for the update. The attribute names specify the attributes to modify, and cannot contain any primary key attributes. 
   * @param {Object} [opt.[custom-key]] Specifies the attribute to update and how to perform the update. Possible values: 
   * @param {Object} [opt.Value] AttributeValue can be 
   * @param {String} [opt.S] Strings are Unicode with UTF-8 binary encoding. The maximum size is limited by the size of the primary key (1024 bytes as a range part of a key or 2048 bytes as a single part hash key) or the item size (64k).
   * @param {String} [opt.N] Numbers are positive or negative exact-value decimals and integers. A number can have up to 38 digits precision and can be between 10^-128 to 10^+126.
   * @param {Blob} [opt.B] Binary attributes are sequences of unsigned bytes.
   * @param {String|array} [opt.SS] A set of strings. Pass a string for a single value, or an indexed array for multiple values.
   * @param {String|array} [opt.NS] A set of numbers. Pass a string for a single value, or an indexed array for multiple values.
   * @param {Blob} [opt.BS] A set of binary attributes.
   * @param {String} [opt.Action] The type of action for an item update operation. Only use the add action for numbers or sets; the specified value is added to the existing value. If a set of values is specified, the values are added to the existing set. Adds the specified attribute. If the attribute exists, it is replaced by the new value. If no value is specified, this removes the attribute and its value. If a set of values is specified, then the values in the specified set are removed from the old set. [Allowed values: 
   * @param {Object} [opt.Expected] Designates an attribute for a conditional modification. The 
   * @param {Object} [opt.[custom-key]] Allows you to provide an attribute name, and whether or not Amazon DynamoDB should check to see if the attribute value already exists; or if the attribute value exists and has a particular value before changing it. 
   * @param {Object} [opt.Value] Specify whether or not a value already exists and has a specific content for the attribute name-value pair. 
   * @param {String} [opt.S] Strings are Unicode with UTF-8 binary encoding. The maximum size is limited by the size of the primary key (1024 bytes as a range part of a key or 2048 bytes as a single part hash key) or the item size (64k).
   * @param {String} [opt.N] Numbers are positive or negative exact-value decimals and integers. A number can have up to 38 digits precision and can be between 10^-128 to 10^+126.
   * @param {Blob} [opt.B] Binary attributes are sequences of unsigned bytes.
   * @param {String|array} [opt.SS] A set of strings. Pass a string for a single value, or an indexed array for multiple values.
   * @param {String|array} [opt.NS] A set of numbers. Pass a string for a single value, or an indexed array for multiple values.
   * @param {Blob} [opt.BS] A set of binary attributes.
   * @param {Boolean} [opt.Exists] Specify whether or not a value already exists for the attribute name-value pair.
   * @param {String} [opt.ReturnValues] Use this parameter if you want to get the attribute name-value pairs before or after they are modified. For 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  update_item: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("UpdateItem", payload );
    return response;
  }, 
  /**
   * Updates the provisioned throughput for the given table.
   *  
   * Setting the throughput for a table helps you manage performance and is part of the Provisioned
   * Throughput feature of Amazon DynamoDB.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} opt.TableName The name of the table you want to update. Allowed characters are 
   * @param {Object} opt.ProvisionedThroughput Provisioned throughput reserves the required read and write resources for your table in terms of 
   *     <li><code>WriteCapacityUnits</code> - <code>long</code> - Required - <code>WriteCapacityUnits</code> are in terms of strictly consistent reads, assuming items of 1k. 2k items require twice the <code>WriteCapacityUnits</code>.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  update_table: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("UpdateTable", payload );
    return response;
  }
}