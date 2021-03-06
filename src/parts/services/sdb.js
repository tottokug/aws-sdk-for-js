/**
 * @class AmazonSDBClient
 * @param {String} access_key 
 * @param {String} secret_key
 */
function AmazonSDB(access_key,secret_key){
  this.__proto__ = $.extend(this.__proto__,AWS.prototype);
  this.initialize(access_key,secret_key);
}
AmazonSDB.prototype = {
  service:'sdb',
  api_version:'2009-04-15',
  auth_class: new AuthV2Query(),
  operation_prefix: '',
  /**
   * @memberOf AmazonSDB
   * @constructor 
   */
  initialize : function(access_key,secret_key){
    this.init(access_key,secret_key);
    
  },
 
  /**
   * Performs multiple DeleteAttributes operations in a single call, which reduces round trips and latencies.
   * This enables Amazon SimpleDB to optimize requests, which generally yields better throughput.
   *
   * If you specify BatchDeleteAttributes without attributes or values, all the attributes for the item are
   * deleted. BatchDeleteAttributes is an idempotent operation; running it multiple times on the same item
   * or attribute doesn't result in an error. The BatchDeleteAttributes operation succeeds or fails in its
   * entirety. There are no partial deletes.
   *
   * You can execute multiple BatchDeleteAttributes operations and other operations in parallel. However,
   * large numbers of concurrent BatchDeleteAttributes calls can result in Service Unavailable (503) responses.
   * This operation does not support conditions using <code>Expected.X.Name</code>, <code>Expected.X.Value</code>,
   * or <code>Expected.X.Exists</code>.
   *
   * The following limitations are enforced for this operation:
   *
   * <ul>
   *   <li>1 MB request size</li>
   *   <li>25 item limit per BatchDeleteAttributes operation</li>
   * </ul>
   *
   * @param {String} [domain_name] The name of the domain in which the attributes are being deleted.   * @param {Object} [item_keypairs] Associative array of parameters which are treated as item-key-value and item-key-multivalue pairs (i.e. a key can have one or more values; think tags). <ul>   *   <li><code>[item]</code> - <code>array</code> - Set the custom item name as the key for this value.<ul>
   *     <li><code>[key]</code> - <code>array</code> - Set the custom key name as the key for this value. For the value, pass a string for a single value, or an indexed array for multiple values.</li>
   * </ul>
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   *   <li><code>Item</code> - <code>array</code> - Optional - A list of items on which to perform the operation. <ul>
   *     <li><code>x</code> - <code>array</code> - This represents a simple array index. <ul>
   *       <li><code>ItemName</code> - <code>string</code> - Optional - This is the parameter format supported by the web service API. This is the item name to use.</li>
   *       <li><code>Attribute</code> - <code>array</code> - Optional -  This is the parameter format supported by the web service API. This is the attribute node. <ul>
   *         <li><code>x</code> - <code>array</code> - This represents a simple array index. <ul>
   *           <li><code>Name</code> - <code>string</code> - Required - The name of the attribute. </li>
   *           <li><code>AlternateNameEncoding</code> - <code>string</code> - Optional - This is the parameter format supported by the web service API. This is the alternate name encoding to use.</li>
   *           <li><code>Value</code> - <code>string</code> - Required - The value of the attribute. </li>
   *           <li><code>AlternateValueEncoding</code> - <code>string</code> - Optional - This is the parameter format supported by the web service API. This is the alternate value encoding to use.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *  <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This is useful for manually-managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  batch_delete_attributes: function(domain_name,item_keypairs,opt){
    var payload = {};
    payload.domain_name = domain_name;
    payload.item_keypairs = item_keypairs;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("BatchDeleteAttributes", payload );
    return response;
  }, 
  /**
   * The BatchPutAttributes operation creates or replaces attributes within one or more items.
   *
   * Attributes are uniquely identified within an item by their name/value combination. For example, a single item can
   * have the attributes <code>{ "first_name", "first_value" }</code> and <code>{"first_name", "second_value" }</code>.
   * However, it cannot have two attribute instances where both the item attribute name and item attribute value are
   * the same.
   *
   * Optionally, the requester can supply the <code>Replace</code> parameter for each individual value. Setting this value to
   * true will cause the new attribute value to replace the existing attribute value(s). For example, if an item I has the
   * attributes <code>{ 'a', '1' }, { 'b', '2'}</code> and <code>{ 'b', '3' }</code> and the requester does a
   * <code>BatchPutAttributes</code> of <code>{'I', 'b', '4' }</code> with the <code>Replace</code> parameter set to true,
   * the final attributes of the item will be { 'a', '1' } and { 'b', '4' }, replacing the previous values of the 'b'
   * attribute with the new value. You cannot specify an empty string as an item or attribute name.
   *
   * The BatchPutAttributes operation succeeds or fails in its entirety. There are no partial puts. You can execute multiple
   * BatchPutAttributes operations and other operations in parallel. However, large numbers of concurrent BatchPutAttributes
   * calls can result in Service Unavailable (503) responses. The following limitations are enforced for this operation:
   *
   * <ul>
   *   <li>256 attribute name-value pairs per item</li>
   *   <li>1 MB request size</li>
   *   <li>1 billion attributes per domain</li>
   *   <li>10 GB of total user data storage per domain</li>
   *   <li>25 item limit per BatchPutAttributes operation</li>
   * </ul>
   *
   * @param {String} [domain_name] The name of the domain in which the attributes are being deleted.   * @param {Object} [item_keypairs] Associative array of parameters which are treated as item-key-value and item-key-multivalue pairs (i.e. a key can have one or more values; think tags). <ul>   *   <li><code>[item]</code> - <code>array</code> - Set the custom item name as the key for this value.<ul>
   *     <li><code>[key]</code> - <code>array</code> - Set the custom key name as the key for this value. For the value, pass a string for a single value, or an indexed array for multiple values.</li></ul>
   *   </li></ul>
   * @param {Boolean|array} [replace] Whether to replace a key-value pair if a matching key already exists. Supports either a boolean (which affects ALL key-value pairs) or an indexed array of key names (which affects only the keys specified). Defaults to boolean <code>false</code>.   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   *   <li><code>Item</code> - <code>array</code> - Optional - A list of items on which to perform the operation. <ul>
   *     <li><code>x</code> - <code>array</code> - This represents a simple array index. <ul>
   *       <li><code>ItemName</code> - <code>string</code> - Optional - This is the parameter format supported by the web service API. This is the item name to use.</li>
   *       <li><code>Attribute</code> - <code>array</code> - Optional -  This is the parameter format supported by the web service API. This is the attribute node. <ul>
   *         <li><code>x</code> - <code>array</code> - This represents a simple array index. <ul>
   *           <li><code>Name</code> - <code>string</code> - Required - The name of the attribute. </li>
   *           <li><code>AlternateNameEncoding</code> - <code>string</code> - Optional - This is the parameter format supported by the web service API. This is the alternate name encoding to use.</li>
   *           <li><code>Value</code> - <code>string</code> - Required - The value of the attribute. </li>
   *           <li><code>AlternateValueEncoding</code> - <code>string</code> - Optional - This is the parameter format supported by the web service API. This is the alternate value encoding to use.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *  <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This is useful for manually-managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  batch_put_attributes: function(domain_name,item_keypairs,replace,opt){
    var payload = {};
    payload.domain_name = domain_name;
    payload.item_keypairs = item_keypairs;
    payload.replace = replace;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("BatchPutAttributes", payload );
    return response;
  }, 
  /**
   * The <code>CreateDomain</code> operation creates a new domain. The domain name should be unique
   * among the domains associated with the Access Key ID provided in the request. The
   * <code>CreateDomain</code> operation may take 10 or more seconds to complete.
   * 
   * <p class="note">
   * CreateDomain is an idempotent operation; running it multiple times using the same domain name
   * will not result in an error response.
   * </p> 
   * The client can create up to 100 domains per account.
   *  
   * If the client requires additional domains, go to <a href=
   * "http://aws.amazon.com/contact-us/simpledb-limit-request/">http://aws.amazon.com/contact-us/simpledb-limit-request/</a>.
   *
   * @param {String} [domain_name] The name of the domain to create. The name can range between 3 and 255 characters and can contain the following characters: a-z, A-Z, 0-9, '_', '-', and '.'.   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  create_domain: function(domain_name,opt){
    var payload = {};
    payload.domain_name = domain_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("CreateDomain", payload );
    return response;
  }, 
  /**
   * Deletes one or more attributes associated with the item. If all attributes of an item are deleted,
   * the item is deleted.
   *
   * If you specify DeleteAttributes without attributes or values, all the attributes for the item are
   * deleted.
   *
   * DeleteAttributes is an idempotent operation; running it multiple times on the same item or
   * attribute does not result in an error response.
   *
   * Because Amazon SimpleDB makes multiple copies of your data and uses an eventual consistency update
   * model, performing a GetAttributes or Select request (read) immediately after a DeleteAttributes or
   * PutAttributes request (write) might not return the updated data.
   *
   * @param {String} [domain_name] The name of the domain in which the attributes are being deleted.   * @param {String} [item_name] The name of the base item which will contain the series of keypairs.   * @param {Object} [attributes] Similar to columns on a spreadsheet, attributes represent categories of data that can be assigned to items. Takes an associative array of parameters that can have the following keys: <ul>   *   <li><code>Attribute</code> - <code>array</code> - Optional -  This is the parameter format supported by the web service API. This is the attribute node.<ul>
   *     <li><code>x</code> - <code>array</code> - This represents a simple array index. <ul>
   *       <li><code>Name</code> - <code>string</code> - Required - The name of the attribute. </li>
   *       <li><code>AlternateNameEncoding</code> - <code>string</code> - Optional - This is the parameter format supported by the web service API. This is the alternate name encoding to use.</li>
   *       <li><code>Value</code> - <code>string</code> - Required - The value of the attribute. </li>
   *       <li><code>AlternateValueEncoding</code> - <code>string</code> - Optional - This is the parameter format supported by the web service API. This is the alternate value encoding to use.</li>
   *   </ul></li></ul>
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   *   <li><code>Expected</code> - <code>array</code> - Optional - The update condition which, if specified, determines if the specified attributes will be updated or not. The update condition must be satisfied in order for this request to be processed and the attributes to be updated. <ul>
   *     <li><code>Name</code> - <code>string</code> - Optional - The name of the attribute involved in the condition.</li>
   *     <li><code>Value</code> - <code>string</code> - Optional - The value of an attribute. This value can only be specified when the exists parameter is equal to true.</li>
   *     <li><code>Exists</code> - <code>string</code> - Optional - True if the specified attribute must exist with the specified value in order for this update condition to be satisfied, otherwise false if the specified attribute should not exist in order for this update condition to be satisfied.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *  <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This is useful for manually-managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  delete_attributes: function(domain_name,item_name,attributes,opt){
    var payload = {};
    payload.domain_name = domain_name;
    payload.item_name = item_name;
    payload.attributes = attributes;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DeleteAttributes", payload );
    return response;
  }, 
  /**
   * The <code>DeleteDomain</code> operation deletes a domain. Any items (and their attributes) in
   * the domain are deleted as well. The <code>DeleteDomain</code> operation might take 10 or more
   * seconds to complete.
   * 
   * <p class="note">
   * Running <code>DeleteDomain</code> on a domain that does not exist or running the function
   * multiple times using the same domain name will not result in an error response.
   * </p>
   *
   * @param {String} [domain_name] The name of the domain to delete.   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  delete_domain: function(domain_name,opt){
    var payload = {};
    payload.domain_name = domain_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DeleteDomain", payload );
    return response;
  }, 
  /**
   * Returns information about the domain, including when the domain was created, the number of
   * items and attributes in the domain, and the size of the attribute names and values.
   *
   * @param {String} [domain_name] The name of the domain for which to display the metadata of.   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  domain_metadata: function(domain_name,opt){
    var payload = {};
    payload.domain_name = domain_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DomainMetadata", payload );
    return response;
  }, 
  /**
   * Returns all of the attributes associated with the item. Optionally, the attributes returned can be
   * limited to one or more specified attribute name parameters.
   *
   * If the item does not exist on the replica that was accessed for this operation, an empty set is
   * returned. The system does not return an error as it cannot guarantee the item does not exist on
   * other replicas.
   *
   * If you specify GetAttributes without any attribute names, all the attributes for the item are
   * returned.
   *
   * @param {String} [domain_name] The name of the domain in which to perform the operation.   * @param {String} [item_name] The name of the base item which will contain the series of keypairs.   * @param {String|array} [attribute_name] The names of the attributes. Pass a string for a single value, or an indexed array for multiple values.   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Boolean} [opt.ConsistentRead] True if strong consistency should be enforced when data is read from SimpleDB, meaning that any data previously written to SimpleDB will be returned. Without specifying this parameter, results will be eventually consistent, and you may not see data that was written immediately before your read.
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This is useful for manually-managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  get_attributes: function(domain_name,item_name,attribute_name,opt){
    var payload = {};
    payload.domain_name = domain_name;
    payload.item_name = item_name;
    payload.attribute_name = attribute_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("GetAttributes", payload );
    return response;
  }, 
  /**
   * The <code>ListDomains</code> operation lists all domains associated with the Access Key ID. It
   * returns domain names up to the limit set by <a href=
   * "#MaxNumberOfDomains">MaxNumberOfDomains</a>. A <a href="#NextToken">NextToken</a> is returned
   * if there are more than <code>MaxNumberOfDomains</code> domains. Calling
   * <code>ListDomains</code> successive times with the <code>NextToken</code> provided by the
   * operation returns up to <code>MaxNumberOfDomains</code> more domain names with each successive
   * operation call.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Number} [opt.MaxNumberOfDomains] The maximum number of domain names you want returned. The range is 1 to 100. The default setting is 100.
   * @param {String} [opt.NextToken] A string informing Amazon SimpleDB where to start the next list of domain names.
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  list_domains: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("ListDomains", payload );
    return response;
  }, 
  /**
   * The PutAttributes operation creates or replaces attributes in an item.
   *
   * A single item can have the attributes <code>{ "first_name", "first_value" }</code> and
   * <code>{ "first_name", "second_value" }</code>. However, it cannot have two attribute instances where
   * both the attribute name and attribute value are the same. Optionally, the requestor can supply the
   * <code>Replace</code> parameter for each individual attribute. Setting this value to true causes the
   * new attribute value to replace the existing attribute value(s).
   *
   * For example, if an item has the attributes <code>{ 'a', '1' }, { 'b', '2'}</code> and <code>{ 'b', '3' }</code>
   * and the requestor calls <code>PutAttributes</code> using the attributes <code>{ 'b', '4' }</code> with
   * the <code>Replace</code> parameter set to <code>true</code>, the final attributes of the item are changed
   * to <code>{ 'a', '1' }</code> and <code>{ 'b', '4' }</code>, which replaces the previous values of the 'b'
   * attribute with the new value.
   *
   * Using PutAttributes to replace attribute values that do not exist will not result in an error
   * response.
   *
   * You cannot specify an empty string as an attribute name.
   *
   * Because Amazon SimpleDB makes multiple copies of your data and uses an eventual consistency update
   * model, an immediate GetAttributes or Select request (read) immediately after a DeleteAttributes
   * request (write) might not return the updated data.
   *
   * The following limitations are enforced for this operation:
   *
   * <ul>
   *   <li>256 attribute name-value pairs per item</li>
   *   <li>1 billion attributes per domain</li>
   *   <li>10 GB of total user data storage per domain</li>
   * </ul>
   *
   * @param {String} [domain_name] The name of the domain in which the attributes are being deleted.   * @param {String} [item_name] The name of the base item which will contain the series of keypairs.   * @param {Object} [keypairs] Associative array of parameters which are treated as key-value and key-multivalue pairs (i.e. a key can have one or more values; think tags). <ul>   *   <li><code>[key]</code> - <code>array</code> - Set the custom key name as the key for this value. For the value, pass a string for a single value, or an indexed array for multiple values.</li>
   * </ul>
   * @param {Boolean|array} [replace] Whether to replace a key-value pair if a matching key already exists. Supports either a boolean (which affects ALL key-value pairs) or an indexed array of key names (which affects only the keys specified). Defaults to boolean <code>false</code>.   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   *   <li><code>Expected</code> - <code>array</code> - Optional - The update condition which, if specified, determines if the specified attributes will be updated or not. The update condition must be satisfied in order for this request to be processed and the attributes to be updated. <ul>
   *     <li><code>Name</code> - <code>string</code> - Optional - The name of the attribute involved in the condition.</li>
   *     <li><code>Value</code> - <code>string</code> - Optional - The value of an attribute. This value can only be specified when the exists parameter is equal to true.</li>
   *     <li><code>Exists</code> - <code>string</code> - Optional - True if the specified attribute must exist with the specified value in order for this update condition to be satisfied, otherwise false if the specified attribute should not exist in order for this update condition to be satisfied.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *  <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This is useful for manually-managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  put_attributes: function(domain_name,item_name,keypairs,replace,opt){
    var payload = {};
    payload.domain_name = domain_name;
    payload.item_name = item_name;
    payload.keypairs = keypairs;
    payload.replace = replace;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("PutAttributes", payload );
    return response;
  }, 
  /**
   * The <code>Select</code> operation returns a set of attributes for <code>ItemNames</code> that
   * match the select expression. <code>Select</code> is similar to the standard SQL SELECT
   * statement.
   *  
   * The total size of the response cannot exceed 1 MB in total size. Amazon SimpleDB automatically
   * adjusts the number of items returned per page to enforce this limit. For example, if the client
   * asks to retrieve 2500 items, but each individual item is 10 kB in size, the system returns 100
   * items and an appropriate <code>NextToken</code> so the client can access the next page of
   * results.
   *  
   * For information on how to construct select expressions, see Using Select to Create Amazon
   * SimpleDB Queries in the Developer Guide.
   *
   * @param {String} [select_expression] The expression used to query the domain.   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.NextToken] A string informing Amazon SimpleDB where to start the next list of 
   * @param {Boolean} [opt.ConsistentRead] Determines whether or not strong consistency should be enforced when data is read from SimpleDB. If 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  select: function(select_expression,opt){
    var payload = {};
    payload.select_expression = select_expression;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("Select", payload );
    return response;
  }
}