/**
 * @class AmazonIAMClient
 * @param {String} access_key 
 * @param {String} secret_key
 */
function AmazonIAM(access_key,secret_key){
  this.__proto__ = $.extend(this.__proto__,AWS.prototype);
  this.initialize(access_key,secret_key);
}
AmazonIAM.prototype = {
  service:'iam',
  api_version:'2010-05-08',
  auth_class: new AuthV4Query(),
  operation_prefix: '',
  /**
   * @memberOf AmazonIAM
   * @constructor 
   */
  initialize : function(access_key,secret_key){
    this.init(access_key,secret_key);
    
  },
 
  /**
   * Adds the specified role to the specified instance profile.
   *
   * @param {String} [instance_profile_name] Name of the instance profile to update. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]   * @param {String} [role_name] Name of the role to add. [Constraints: The value must be between 1 and 64 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  add_role_to_instance_profile: function(instance_profile_name,role_name,opt){
    var payload = {};
    payload.instance_profile_name = instance_profile_name;
    payload.role_name = role_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("AddRoleToInstanceProfile", payload );
    return response;
  }, 
  /**
   * Adds the specified user to the specified group.
   *
   * @param {String} [group_name] Name of the group to update. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]   * @param {String} [user_name] Name of the user to add. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  add_user_to_group: function(group_name,user_name,opt){
    var payload = {};
    payload.group_name = group_name;
    payload.user_name = user_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("AddUserToGroup", payload );
    return response;
  }, 
  /**
   * Changes the password of the IAM user calling <code>ChangePassword</code>. The root account
   * password is not affected by this action. For information about modifying passwords, see
   *   <a href="http://docs.amazonwebservices.com/IAM/latest/UserGuide/Using_ManagingLogins.html"
   * target="_blank">Managing Passwords</a>.
   *
   * @param {String} [old_password]  [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\u0009\u000A\u000D\u0020-\u00FF]+</code>]   * @param {String} [new_password]  [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\u0009\u000A\u000D\u0020-\u00FF]+</code>]   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  change_password: function(old_password,new_password,opt){
    var payload = {};
    payload.old_password = old_password;
    payload.new_password = new_password;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("ChangePassword", payload );
    return response;
  }, 
  /**
   * Creates a new AWS Secret Access Key and corresponding AWS Access Key ID for the specified user.
   * The default status for new keys is <code>Active</code>.
   *  
   * If you do not specify a user name, IAM determines the user name implicitly based on the AWS
   * Access Key ID signing the request. Because this action works for access keys under the AWS
   * account, you can use this API to manage root credentials even if the AWS account has no
   * associated users.
   *  
   * For information about limits on the number of keys you can create, see <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/index.html?LimitationsOnEntities.html"
   * target="_blank">Limitations on IAM Entities</a> in <em>Using AWS Identity and Access
   * Management</em>.
   * 
   * <p class="important">
   * To ensure the security of your AWS account, the Secret Access Key is accessible only during key
   * and user creation. You must save the key (for example, in a text file) if you want to be able
   * to access it again. If a secret key is lost, you can delete the access keys for the associated
   * user and then create new keys.
   * </p>
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.UserName] The user name that the new key will belong to. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  create_access_key: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("CreateAccessKey", payload );
    return response;
  }, 
  /**
   * This action creates an alias for your AWS account. For information about using an AWS account
   * alias, see <a href="http://docs.amazonwebservices.com/IAM/latest/UserGuide/AccountAlias.html"
   * target="_blank">Using an Alias for Your AWS Account ID</a> in <em>Using AWS Identity and Access
   * Management</em>.
   *
   * @param {String} [account_alias] Name of the account alias to create. [Constraints: The value must be between 3 and 63 characters, and must match the following regular expression pattern: <code>^[a-z0-9](([a-z0-9]|-(?!-))*[a-z0-9])?$</code>]   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  create_account_alias: function(account_alias,opt){
    var payload = {};
    payload.account_alias = account_alias;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("CreateAccountAlias", payload );
    return response;
  }, 
  /**
   * Creates a new group.
   *  
   * For information about the number of groups you can create, see <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/index.html?LimitationsOnEntities.html"
   * target="_blank">Limitations on IAM Entities</a> in <em>Using AWS Identity and Access
   * Management</em>.
   *
   * @param {String} [group_name] Name of the group to create. Do not include the path in this value. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.Path] The path to the group. For more information about paths, see 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  create_group: function(group_name,opt){
    var payload = {};
    payload.group_name = group_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("CreateGroup", payload );
    return response;
  }, 
  /**
   * Creates a new instance profile.
   *  
   * For information about the number of instance profiles you can create, see <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/index.html?LimitationsOnEntities.html"
   * target="_blank">Limitations on IAM Entities</a> in <em>Using AWS Identity and Access
   * Management</em>.
   *
   * @param {String} [instance_profile_name] Name of the instance profile to create. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.Path] The path to the instance profile. For more information about paths, see 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  create_instance_profile: function(instance_profile_name,opt){
    var payload = {};
    payload.instance_profile_name = instance_profile_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("CreateInstanceProfile", payload );
    return response;
  }, 
  /**
   * Creates a password for the specified user, giving the user the ability to access AWS services
   * through the AWS Management Console. For more information about managing passwords, see <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/index.html?Using_ManagingLogins.html"
   * target="_blank">Managing Passwords</a> in <em>Using IAM</em>.
   *
   * @param {String} [user_name] Name of the user to create a password for. [Constraints: The value must be between 1 and 64 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]   * @param {String} [password] The new password for the user name. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\u0009\u000A\u000D\u0020-\u00FF]+</code>]   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  create_login_profile: function(user_name,password,opt){
    var payload = {};
    payload.user_name = user_name;
    payload.password = password;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("CreateLoginProfile", payload );
    return response;
  }, 
  /**
   * Creates a new role for your AWS account.
   *  
   * For information about limitations on the number of roles you can create, see <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/index.html?LimitationsOnEntities.html"
   * target="_blank">Limitations on IAM Entities</a> in <em>Using AWS Identity and Access
   * Management</em>.
   *
   * @param {String} [role_name] Name of the role to create. [Constraints: The value must be between 1 and 64 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]   * @param {String} [assume_role_policy_document] The policy govering by who and under what conditions the role can be assumed. [Constraints: The value must be between 1 and 131072 characters, and must match the following regular expression pattern: <code>[\u0009\u000A\u000D\u0020-\u00FF]+</code>]   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.Path] The path to the role. For more information about paths, see 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  create_role: function(role_name,assume_role_policy_document,opt){
    var payload = {};
    payload.role_name = role_name;
    payload.assume_role_policy_document = assume_role_policy_document;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("CreateRole", payload );
    return response;
  }, 
  /**
   * Creates a new user for your AWS account.
   *  
   * For information about limitations on the number of users you can create, see <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/index.html?LimitationsOnEntities.html"
   * target="_blank">Limitations on IAM Entities</a> in <em>Using AWS Identity and Access
   * Management</em>.
   *
   * @param {String} [user_name] Name of the user to create. [Constraints: The value must be between 1 and 64 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.Path] The path for the user name. For more information about paths, see 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  create_user: function(user_name,opt){
    var payload = {};
    payload.user_name = user_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("CreateUser", payload );
    return response;
  }, 
  /**
   * Creates a new virtual MFA device for the AWS account. After creating the virtual MFA, use
   *   <a href="http://docs.amazonwebservices.com/IAM/latest/APIReference/API_EnableMFADevice.html"
   * target="_blank">EnableMFADevice</a> to attach the MFA device to an IAM user. For more
   * information about creating and working with virtual MFA devices, go to <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/index.html?Using_VirtualMFA.html"
   * target="_blank">Using a Virtual MFA Device</a> in <em>Using AWS Identity and Access
   * Management</em>.
   *  
   * For information about limits on the number of MFA devices you can create, see <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/index.html?LimitationsOnEntities.html"
   * target="_blank">Limitations on Entities</a> in <em>Using AWS Identity and Access
   * Management</em>.
   * 
   * <p class="important">
   * The seed information contained in the QR code and the Base32 string should be treated like any
   * other secret access information, such as your AWS access keys or your passwords. After you
   * provision your virtual device, you should ensure that the information is destroyed following
   * secure procedures.
   * </p>
   *
   * @param {String} [virtual_mfa_device_name] The name of the virtual MFA device. Use with path to uniquely identify a virtual MFA device. [Constraints: The value must be more than 1 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.Path] The path for the virtual MFA device. For more information about paths, see 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  create_virtual_mfa_device: function(virtual_mfa_device_name,opt){
    var payload = {};
    payload.virtual_mfa_device_name = virtual_mfa_device_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("CreateVirtualMfaDevice", payload );
    return response;
  }, 
  /**
   * Deactivates the specified MFA device and removes it from association with the user name for
   * which it was originally enabled.
   *
   * @param {String} [user_name] Name of the user whose MFA device you want to deactivate. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]   * @param {String} [serial_number] The serial number that uniquely identifies the MFA device. For virtual MFA devices, the serial number is the device ARN. [Constraints: The value must be between 9 and 256 characters, and must match the following regular expression pattern: <code>[\w+=/:,.@-]*</code>]   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  deactivate_mfa_device: function(user_name,serial_number,opt){
    var payload = {};
    payload.user_name = user_name;
    payload.serial_number = serial_number;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DeactivateMfaDevice", payload );
    return response;
  }, 
  /**
   * Deletes the access key associated with the specified user.
   *  
   * If you do not specify a user name, IAM determines the user name implicitly based on the AWS
   * Access Key ID signing the request. Because this action works for access keys under the AWS
   * account, you can use this API to manage root credentials even if the AWS account has no
   * associated users.
   *
   * @param {String} [access_key_id] The Access Key ID for the Access Key ID and Secret Access Key you want to delete. [Constraints: The value must be between 16 and 32 characters, and must match the following regular expression pattern: <code>[\w]*</code>]   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.UserName] Name of the user whose key you want to delete. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  delete_access_key: function(access_key_id,opt){
    var payload = {};
    payload.access_key_id = access_key_id;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DeleteAccessKey", payload );
    return response;
  }, 
  /**
   * Deletes the specified AWS account alias. For information about using an AWS account alias, see
   *   <a href="http://docs.amazonwebservices.com/IAM/latest/UserGuide/AccountAlias.html" target=
   * "_blank">Using an Alias for Your AWS Account ID</a> in <em>Using AWS Identity and Access
   * Management</em>.
   *
   * @param {String} [account_alias] Name of the account alias to delete. [Constraints: The value must be between 3 and 63 characters, and must match the following regular expression pattern: <code>^[a-z0-9](([a-z0-9]|-(?!-))*[a-z0-9])?$</code>]   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  delete_account_alias: function(account_alias,opt){
    var payload = {};
    payload.account_alias = account_alias;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DeleteAccountAlias", payload );
    return response;
  }, 
  /**
   * Deletes the password policy for the AWS account.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  delete_account_password_policy: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DeleteAccountPasswordPolicy", payload );
    return response;
  }, 
  /**
   * Deletes the specified group. The group must not contain any users or have any attached
   * policies.
   *
   * @param {String} [group_name] Name of the group to delete. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  delete_group: function(group_name,opt){
    var payload = {};
    payload.group_name = group_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DeleteGroup", payload );
    return response;
  }, 
  /**
   * Deletes the specified policy that is associated with the specified group.
   *
   * @param {String} [group_name] Name of the group the policy is associated with. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]   * @param {String} [policy_name] Name of the policy document to delete. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  delete_group_policy: function(group_name,policy_name,opt){
    var payload = {};
    payload.group_name = group_name;
    payload.policy_name = policy_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DeleteGroupPolicy", payload );
    return response;
  }, 
  /**
   * Deletes the specified instance profile. The instance profile must have an associated role.
   *
   * @param {String} [instance_profile_name] Name of the instance profile to delete. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  delete_instance_profile: function(instance_profile_name,opt){
    var payload = {};
    payload.instance_profile_name = instance_profile_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DeleteInstanceProfile", payload );
    return response;
  }, 
  /**
   * Deletes the password for the specified user, which terminates the user's ability to access AWS
   * services through the AWS Management Console.
   * 
   * <p class="important">
   * Deleting a user's password does not prevent a user from accessing IAM through the command line
   * interface or the API. To prevent all user access you must also either make the access key
   * inactive or delete it. For more information about making keys inactive or deleting them, see
   * <code>UpdateAccessKey</code> and <code>DeleteAccessKey</code>.
   * </p>
   *
   * @param {String} [user_name] Name of the user whose password you want to delete. [Constraints: The value must be between 1 and 64 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  delete_login_profile: function(user_name,opt){
    var payload = {};
    payload.user_name = user_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DeleteLoginProfile", payload );
    return response;
  }, 
  /**
   * Deletes the specified role. The role must not have any attached policies.
   *
   * @param {String} [role_name] Name of the role to delete. [Constraints: The value must be between 1 and 64 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  delete_role: function(role_name,opt){
    var payload = {};
    payload.role_name = role_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DeleteRole", payload );
    return response;
  }, 
  /**
   * Deletes the specified policy associated with the specified role.
   *
   * @param {String} [role_name] Name of the role the policy is associated with. [Constraints: The value must be between 1 and 64 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]   * @param {String} [policy_name] Name of the policy document to delete. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  delete_role_policy: function(role_name,policy_name,opt){
    var payload = {};
    payload.role_name = role_name;
    payload.policy_name = policy_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DeleteRolePolicy", payload );
    return response;
  }, 
  /**
   * Deletes the specified server certificate.
   * 
   * <p class="important">
   * If you are using a server certificate with Elastic Load Balancing, deleting the certificate
   * could have implications for your application. If Elastic Load Balancing doesn't detect the
   * deletion of bound certificates, it may continue to use the certificates. This could cause
   * Elastic Load Balancing to stop accepting traffic. We recommend that you remove the reference to
   * the certificate from Elastic Load Balancing before using this command to delete the
   * certificate. For more information, go to <a href=
   * "http://docs.amazonwebservices.com/ElasticLoadBalancing/latest/APIReference/API_DeleteLoadBalancerListeners.html"
   * target="blank">DeleteLoadBalancerListeners</a> in the <em>Elastic Load Balancing API
   * Reference</em>.
   * </p>
   *
   * @param {String} [server_certificate_name] The name of the server certificate you want to delete. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  delete_server_certificate: function(server_certificate_name,opt){
    var payload = {};
    payload.server_certificate_name = server_certificate_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DeleteServerCertificate", payload );
    return response;
  }, 
  /**
   * Deletes the specified signing certificate associated with the specified user.
   *  
   * If you do not specify a user name, IAM determines the user name implicitly based on the AWS
   * Access Key ID signing the request. Because this action works for access keys under the AWS
   * account, you can use this API to manage root credentials even if the AWS account has no
   * associated users.
   *
   * @param {String} [certificate_id] ID of the signing certificate to delete. [Constraints: The value must be between 24 and 128 characters, and must match the following regular expression pattern: <code>[\w]*</code>]   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.UserName] Name of the user the signing certificate belongs to. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  delete_signing_certificate: function(certificate_id,opt){
    var payload = {};
    payload.certificate_id = certificate_id;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DeleteSigningCertificate", payload );
    return response;
  }, 
  /**
   * Deletes the specified user. The user must not belong to any groups, have any keys or signing
   * certificates, or have any attached policies.
   *
   * @param {String} [user_name] Name of the user to delete. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  delete_user: function(user_name,opt){
    var payload = {};
    payload.user_name = user_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DeleteUser", payload );
    return response;
  }, 
  /**
   * Deletes the specified policy associated with the specified user.
   *
   * @param {String} [user_name] Name of the user the policy is associated with. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]   * @param {String} [policy_name] Name of the policy document to delete. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  delete_user_policy: function(user_name,policy_name,opt){
    var payload = {};
    payload.user_name = user_name;
    payload.policy_name = policy_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DeleteUserPolicy", payload );
    return response;
  }, 
  /**
   * Deletes a virtual MFA device.
   * 
   * <p class="note">
   * You must deactivate a user's virtual MFA device before you can delete it. For information about
   * deactivating MFA devices, see <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/APIReference/API_DeactivateMFADevice.html">DeactivateMFADevice</a>.
   * </p>
   *
   * @param {String} [serial_number] The serial number that uniquely identifies the MFA device. For virtual MFA devices, the serial number is the same as the ARN. [Constraints: The value must be between 9 and 256 characters, and must match the following regular expression pattern: <code>[\w+=/:,.@-]*</code>]   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  delete_virtual_mfa_device: function(serial_number,opt){
    var payload = {};
    payload.serial_number = serial_number;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("DeleteVirtualMfaDevice", payload );
    return response;
  }, 
  /**
   * Enables the specified MFA device and associates it with the specified user name. When enabled,
   * the MFA device is required for every subsequent login by the user name associated with the
   * device.
   *
   * @param {String} [user_name] Name of the user for whom you want to enable the MFA device. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]   * @param {String} [serial_number] The serial number that uniquely identifies the MFA device. For virtual MFA devices, the serial number is the device ARN. [Constraints: The value must be between 9 and 256 characters, and must match the following regular expression pattern: <code>[\w+=/:,.@-]*</code>]   * @param {String} [authentication_code1] An authentication code emitted by the device. [Constraints: The value must be between 6 and 6 characters, and must match the following regular expression pattern: <code>[\d]*</code>]   * @param {String} [authentication_code2] A subsequent authentication code emitted by the device. [Constraints: The value must be between 6 and 6 characters, and must match the following regular expression pattern: <code>[\d]*</code>]   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  enable_mfa_device: function(user_name,serial_number,authentication_code1,authentication_code2,opt){
    var payload = {};
    payload.user_name = user_name;
    payload.serial_number = serial_number;
    payload.authentication_code1 = authentication_code1;
    payload.authentication_code2 = authentication_code2;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("EnableMfaDevice", payload );
    return response;
  }, 
  /**
   * Retrieves the password policy for the AWS account. For more information about using a password
   * policy, go to <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/Using_ManagingPasswordPolicies.html">Managing
   * an IAM Password Policy</a>.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  get_account_password_policy: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("GetAccountPasswordPolicy", payload );
    return response;
  }, 
  /**
   * Retrieves account level information about account entity usage and IAM quotas.
   *  
   * For information about limitations on IAM entities, see <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/index.html?LimitationsOnEntities.html"
   * target="_blank">Limitations on IAM Entities</a> in <em>Using AWS Identity and Access
   * Management</em>.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  get_account_summary: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("GetAccountSummary", payload );
    return response;
  }, 
  /**
   * Returns a list of users that are in the specified group. You can paginate the results using the
   * <code>MaxItems</code> and <code>Marker</code> parameters.
   *
   * @param {String} [group_name] Name of the group. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.Marker] Use this only when paginating results, and only in a subsequent request after you've received a response where the results are truncated. Set it to the value of the 
   * @param {Number} [opt.MaxItems] Use this only when paginating results to indicate the maximum number of user names you want in the response. If there are additional user names beyond the maximum you specify, the 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  get_group: function(group_name,opt){
    var payload = {};
    payload.group_name = group_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("GetGroup", payload );
    return response;
  }, 
  /**
   * Retrieves the specified policy document for the specified group. The returned policy is
   * URL-encoded according to RFC 3986. For more information about RFC 3986, go to <a href=
   * "http://www.faqs.org/rfcs/rfc3986.html">http://www.faqs.org/rfcs/rfc3986.html</a>.
   *
   * @param {String} [group_name] Name of the group the policy is associated with. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]   * @param {String} [policy_name] Name of the policy document to get. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  get_group_policy: function(group_name,policy_name,opt){
    var payload = {};
    payload.group_name = group_name;
    payload.policy_name = policy_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("GetGroupPolicy", payload );
    return response;
  }, 
  /**
   * Retrieves information about the specified instance profile, including the instance profile's
   * path, GUID, ARN, and role.
   *
   * @param {String} [instance_profile_name] Name of the instance profile to get information about. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  get_instance_profile: function(instance_profile_name,opt){
    var payload = {};
    payload.instance_profile_name = instance_profile_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("GetInstanceProfile", payload );
    return response;
  }, 
  /**
   * Retrieves the user name and password create date for the specified user.
   *
   * @param {String} [user_name] Name of the user whose login profile you want to retrieve. [Constraints: The value must be between 1 and 64 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  get_login_profile: function(user_name,opt){
    var payload = {};
    payload.user_name = user_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("GetLoginProfile", payload );
    return response;
  }, 
  /**
   * Retrieves information about the specified role, including the role's path, GUID, ARN, and the
   * assume role policy.
   *
   * @param {String} [role_name] Name of the role to get information about. [Constraints: The value must be between 1 and 64 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  get_role: function(role_name,opt){
    var payload = {};
    payload.role_name = role_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("GetRole", payload );
    return response;
  }, 
  /**
   * Retrieves the specified policy document for the specified role. The returned policy is
   * URL-encoded according to RFC 3986. For more information about RFC 3986, go to <a href=
   * "http://www.faqs.org/rfcs/rfc3986.html">http://www.faqs.org/rfcs/rfc3986.html</a>.
   *
   * @param {String} [role_name] Name of the role who the policy is associated with. [Constraints: The value must be between 1 and 64 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]   * @param {String} [policy_name] Name of the policy document to get. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  get_role_policy: function(role_name,policy_name,opt){
    var payload = {};
    payload.role_name = role_name;
    payload.policy_name = policy_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("GetRolePolicy", payload );
    return response;
  }, 
  /**
   * Retrieves information about the specified server certificate.
   *
   * @param {String} [server_certificate_name] The name of the server certificate you want to retrieve information about. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  get_server_certificate: function(server_certificate_name,opt){
    var payload = {};
    payload.server_certificate_name = server_certificate_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("GetServerCertificate", payload );
    return response;
  }, 
  /**
   * Retrieves information about the specified user, including the user's path, GUID, and ARN.
   *  
   * If you do not specify a user name, IAM determines the user name implicitly based on the AWS
   * Access Key ID signing the request.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.UserName] Name of the user to get information about. This parameter is optional. If it is not included, it defaults to the user making the request. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  get_user: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("GetUser", payload );
    return response;
  }, 
  /**
   * Retrieves the specified policy document for the specified user. The returned policy is
   * URL-encoded according to RFC 3986. For more information about RFC 3986, go to <a href=
   * "http://www.faqs.org/rfcs/rfc3986.html">http://www.faqs.org/rfcs/rfc3986.html</a>.
   *
   * @param {String} [user_name] Name of the user who the policy is associated with. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]   * @param {String} [policy_name] Name of the policy document to get. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  get_user_policy: function(user_name,policy_name,opt){
    var payload = {};
    payload.user_name = user_name;
    payload.policy_name = policy_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("GetUserPolicy", payload );
    return response;
  }, 
  /**
   * Returns information about the Access Key IDs associated with the specified user. If there are
   * none, the action returns an empty list.
   *  
   * Although each user is limited to a small number of keys, you can still paginate the results
   * using the <code>MaxItems</code> and <code>Marker</code> parameters.
   *  
   * If the <code>UserName</code> field is not specified, the UserName is determined implicitly
   * based on the AWS Access Key ID used to sign the request. Because this action works for access
   * keys under the AWS account, this API can be used to manage root credentials even if the AWS
   * account has no associated users.
   * 
   * <p class="note">
   * To ensure the security of your AWS account, the secret access key is accessible only during key
   * and user creation.
   * </p>
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.UserName] Name of the user. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: 
   * @param {String} [opt.Marker] Use this parameter only when paginating results, and only in a subsequent request after you've received a response where the results are truncated. Set it to the value of the 
   * @param {Number} [opt.MaxItems] Use this parameter only when paginating results to indicate the maximum number of keys you want in the response. If there are additional keys beyond the maximum you specify, the 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  list_access_keys: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("ListAccessKeys", payload );
    return response;
  }, 
  /**
   * Lists the account aliases associated with the account. For information about using an AWS
   * account alias, see <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/AccountAlias.html" target=
   * "_blank">Using an Alias for Your AWS Account ID</a> in <em>Using AWS Identity and Access
   * Management</em>.
   *  
   * You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
   * parameters.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.Marker] Use this only when paginating results, and only in a subsequent request after you've received a response where the results are truncated. Set it to the value of the 
   * @param {Number} [opt.MaxItems] Use this only when paginating results to indicate the maximum number of account aliases you want in the response. If there are additional account aliases beyond the maximum you specify, the 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  list_account_aliases: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("ListAccountAliases", payload );
    return response;
  }, 
  /**
   * Lists the names of the policies associated with the specified group. If there are none, the
   * action returns an empty list.
   *  
   * You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
   * parameters.
   *
   * @param {String} [group_name] The name of the group to list policies for. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.Marker] Use this only when paginating results, and only in a subsequent request after you've received a response where the results are truncated. Set it to the value of the 
   * @param {Number} [opt.MaxItems] Use this only when paginating results to indicate the maximum number of policy names you want in the response. If there are additional policy names beyond the maximum you specify, the 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  list_group_policies: function(group_name,opt){
    var payload = {};
    payload.group_name = group_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("ListGroupPolicies", payload );
    return response;
  }, 
  /**
   * Lists the groups that have the specified path prefix.
   *  
   * You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
   * parameters.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.PathPrefix] The path prefix for filtering the results. For example: 
   * @param {String} [opt.Marker] Use this only when paginating results, and only in a subsequent request after you've received a response where the results are truncated. Set it to the value of the 
   * @param {Number} [opt.MaxItems] Use this only when paginating results to indicate the maximum number of groups you want in the response. If there are additional groups beyond the maximum you specify, the 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  list_groups: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("ListGroups", payload );
    return response;
  }, 
  /**
   * Lists the groups the specified user belongs to.
   *  
   * You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
   * parameters.
   *
   * @param {String} [user_name] The name of the user to list groups for. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.Marker] Use this only when paginating results, and only in a subsequent request after you've received a response where the results are truncated. Set it to the value of the 
   * @param {Number} [opt.MaxItems] Use this only when paginating results to indicate the maximum number of groups you want in the response. If there are additional groups beyond the maximum you specify, the 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  list_groups_for_user: function(user_name,opt){
    var payload = {};
    payload.user_name = user_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("ListGroupsForUser", payload );
    return response;
  }, 
  /**
   * Lists the instance profiles that have the specified path prefix. If there are none, the action
   * returns an empty list.
   *  
   * You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
   * parameters.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.PathPrefix] The path prefix for filtering the results. For example: 
   * @param {String} [opt.Marker] Use this parameter only when paginating results, and only in a subsequent request after you've received a response where the results are truncated. Set it to the value of the 
   * @param {Number} [opt.MaxItems] Use this parameter only when paginating results to indicate the maximum number of user names you want in the response. If there are additional user names beyond the maximum you specify, the 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  list_instance_profiles: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("ListInstanceProfiles", payload );
    return response;
  }, 
  /**
   * Lists the instance profiles that have the specified associated role. If there are none, the
   * action returns an empty list.
   *  
   * You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
   * parameters.
   *
   * @param {String} [role_name] The name of the role to list instance profiles for. [Constraints: The value must be between 1 and 64 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.Marker] Use this parameter only when paginating results, and only in a subsequent request after you've received a response where the results are truncated. Set it to the value of the 
   * @param {Number} [opt.MaxItems] Use this parameter only when paginating results to indicate the maximum number of user names you want in the response. If there are additional user names beyond the maximum you specify, the 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  list_instance_profiles_for_role: function(role_name,opt){
    var payload = {};
    payload.role_name = role_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("ListInstanceProfilesForRole", payload );
    return response;
  }, 
  /**
   * Lists the MFA devices. If the request includes the user name, then this action lists all the
   * MFA devices associated with the specified user name. If you do not specify a user name, IAM
   * determines the user name implicitly based on the AWS Access Key ID signing the request.
   *  
   * You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
   * parameters.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.UserName] Name of the user whose MFA devices you want to list. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: 
   * @param {String} [opt.Marker] Use this only when paginating results, and only in a subsequent request after you've received a response where the results are truncated. Set it to the value of the 
   * @param {Number} [opt.MaxItems] Use this only when paginating results to indicate the maximum number of MFA devices you want in the response. If there are additional MFA devices beyond the maximum you specify, the 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  list_mfa_devices: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("ListMfaDevices", payload );
    return response;
  }, 
  /**
   * Lists the names of the policies associated with the specified role. If there are none, the
   * action returns an empty list.
   *  
   * You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
   * parameters.
   *
   * @param {String} [role_name] The name of the role to list policies for. [Constraints: The value must be between 1 and 64 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.Marker] Use this parameter only when paginating results, and only in a subsequent request after you've received a response where the results are truncated. Set it to the value of the 
   * @param {Number} [opt.MaxItems] Use this parameter only when paginating results to indicate the maximum number of user names you want in the response. If there are additional user names beyond the maximum you specify, the 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  list_role_policies: function(role_name,opt){
    var payload = {};
    payload.role_name = role_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("ListRolePolicies", payload );
    return response;
  }, 
  /**
   * Lists the roles have the specified path prefix. If there are none, the action returns an empty
   * list.
   *  
   * You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
   * parameters.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.PathPrefix] The path prefix for filtering the results. For example: 
   * @param {String} [opt.Marker] Use this parameter only when paginating results, and only in a subsequent request after you've received a response where the results are truncated. Set it to the value of the 
   * @param {Number} [opt.MaxItems] Use this parameter only when paginating results to indicate the maximum number of user names you want in the response. If there are additional user names beyond the maximum you specify, the 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  list_roles: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("ListRoles", payload );
    return response;
  }, 
  /**
   * Lists the server certificates that have the specified path prefix. If none exist, the action
   * returns an empty list.
   *  
   * You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
   * parameters.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.PathPrefix] The path prefix for filtering the results. For example: 
   * @param {String} [opt.Marker] Use this only when paginating results, and only in a subsequent request after you've received a response where the results are truncated. Set it to the value of the 
   * @param {Number} [opt.MaxItems] Use this only when paginating results to indicate the maximum number of server certificates you want in the response. If there are additional server certificates beyond the maximum you specify, the 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  list_server_certificates: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("ListServerCertificates", payload );
    return response;
  }, 
  /**
   * Returns information about the signing certificates associated with the specified user. If there
   * are none, the action returns an empty list.
   *  
   * Although each user is limited to a small number of signing certificates, you can still paginate
   * the results using the <code>MaxItems</code> and <code>Marker</code> parameters.
   *  
   * If the <code>UserName</code> field is not specified, the user name is determined implicitly
   * based on the AWS Access Key ID used to sign the request. Because this action works for access
   * keys under the AWS account, this API can be used to manage root credentials even if the AWS
   * account has no associated users.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.UserName] The name of the user. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: 
   * @param {String} [opt.Marker] Use this only when paginating results, and only in a subsequent request after you've received a response where the results are truncated. Set it to the value of the 
   * @param {Number} [opt.MaxItems] Use this only when paginating results to indicate the maximum number of certificate IDs you want in the response. If there are additional certificate IDs beyond the maximum you specify, the 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  list_signing_certificates: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("ListSigningCertificates", payload );
    return response;
  }, 
  /**
   * Lists the names of the policies associated with the specified user. If there are none, the
   * action returns an empty list.
   *  
   * You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
   * parameters.
   *
   * @param {String} [user_name] The name of the user to list policies for. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.Marker] Use this only when paginating results, and only in a subsequent request after you've received a response where the results are truncated. Set it to the value of the 
   * @param {Number} [opt.MaxItems] Use this only when paginating results to indicate the maximum number of policy names you want in the response. If there are additional policy names beyond the maximum you specify, the 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  list_user_policies: function(user_name,opt){
    var payload = {};
    payload.user_name = user_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("ListUserPolicies", payload );
    return response;
  }, 
  /**
   * Lists the users that have the specified path prefix. If there are none, the action returns an
   * empty list.
   *  
   * You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
   * parameters.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.PathPrefix] The path prefix for filtering the results. For example: 
   * @param {String} [opt.Marker] Use this parameter only when paginating results, and only in a subsequent request after you've received a response where the results are truncated. Set it to the value of the 
   * @param {Number} [opt.MaxItems] Use this parameter only when paginating results to indicate the maximum number of user names you want in the response. If there are additional user names beyond the maximum you specify, the 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  list_users: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("ListUsers", payload );
    return response;
  }, 
  /**
   * Lists the virtual MFA devices under the AWS account by assignment status. If you do not specify
   * an assignment status, the action returns a list of all virtual MFA devices. Assignment status
   * can be <code>Assigned</code>, <code>Unassigned</code>, or <code>Any</code>.
   *  
   * You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
   * parameters.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.AssignmentStatus] The status (unassigned or assigned) of the devices to list. If you do not specify an 
   * @param {String} [opt.Marker] Use this parameter only when paginating results, and only in a subsequent request after you've received a response where the results are truncated. Set it to the value of the 
   * @param {Number} [opt.MaxItems] Use this parameter only when paginating results to indicate the maximum number of user names you want in the response. If there are additional user names beyond the maximum you specify, the 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  list_virtual_mfa_devices: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("ListVirtualMfaDevices", payload );
    return response;
  }, 
  /**
   * Adds (or updates) a policy document associated with the specified group. For information about
   * policies, refer to <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/index.html?PoliciesOverview.html"
   * target="_blank">Overview of Policies</a> in <em>Using AWS Identity and Access Management</em>.
   *  
   * For information about limits on the number of policies you can associate with a group, see
   *   <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/index.html?LimitationsOnEntities.html"
   * target="_blank">Limitations on IAM Entities</a> in <em>Using AWS Identity and Access
   * Management</em>.
   * 
   * <p class="note">
   * Because policy documents can be large, you should use POST rather than GET when calling
   * <code>PutGroupPolicy</code>. For information about setting up signatures and authorization
   * through the API, go to <a href=
   * "http://docs.amazonwebservices.com/general/latest/gr/signing_aws_api_requests.html" target=
   * "_blank">Signing AWS API Requests</a> in the <em>AWS General Reference</em>. For general
   * information about using the Query API with IAM, go to <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html" target=
   * "_blank">Making Query Requests</a> in <em>Using IAM</em>.
   * </p>
   *
   * @param {String} [group_name] Name of the group to associate the policy with. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]   * @param {String} [policy_name] Name of the policy document. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]   * @param {String} [policy_document] The policy document. [Constraints: The value must be between 1 and 131072 characters, and must match the following regular expression pattern: <code>[\u0009\u000A\u000D\u0020-\u00FF]+</code>]   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  put_group_policy: function(group_name,policy_name,policy_document,opt){
    var payload = {};
    payload.group_name = group_name;
    payload.policy_name = policy_name;
    payload.policy_document = policy_document;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("PutGroupPolicy", payload );
    return response;
  }, 
  /**
   * Adds (or updates) a policy document associated with the specified role. For information about
   * policies, refer to <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/index.html?PoliciesOverview.html"
   * target="_blank">Overview of Policies</a> in <em>Using AWS Identity and Access Management</em>.
   *  
   * For information about limits on the number of policies you can associate with a role, see
   *   <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/index.html?LimitationsOnEntities.html"
   * target="_blank">Limitations on IAM Entities</a> in <em>Using AWS Identity and Access
   * Management</em>.
   * 
   * <p class="note">
   * Because policy documents can be large, you should use POST rather than GET when calling
   * <code>PutRolePolicy</code>. For information about setting up signatures and authorization
   * through the API, go to <a href=
   * "http://docs.amazonwebservices.com/general/latest/gr/signing_aws_api_requests.html" target=
   * "_blank">Signing AWS API Requests</a> in the <em>AWS General Reference</em>. For general
   * information about using the Query API with IAM, go to <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html" target=
   * "_blank">Making Query Requests</a> in <em>Using IAM</em>.
   * </p>
   *
   * @param {String} [role_name] Name of the role to associate the policy with. [Constraints: The value must be between 1 and 64 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]   * @param {String} [policy_name] Name of the policy document. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]   * @param {String} [policy_document] The policy document. [Constraints: The value must be between 1 and 131072 characters, and must match the following regular expression pattern: <code>[\u0009\u000A\u000D\u0020-\u00FF]+</code>]   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  put_role_policy: function(role_name,policy_name,policy_document,opt){
    var payload = {};
    payload.role_name = role_name;
    payload.policy_name = policy_name;
    payload.policy_document = policy_document;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("PutRolePolicy", payload );
    return response;
  }, 
  /**
   * Adds (or updates) a policy document associated with the specified user. For information about
   * policies, refer to <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/index.html?PoliciesOverview.html"
   * target="_blank">Overview of Policies</a> in <em>Using AWS Identity and Access Management</em>.
   *  
   * For information about limits on the number of policies you can associate with a user, see
   *   <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/index.html?LimitationsOnEntities.html"
   * target="_blank">Limitations on IAM Entities</a> in <em>Using AWS Identity and Access
   * Management</em>.
   * 
   * <p class="note">
   * Because policy documents can be large, you should use POST rather than GET when calling
   * <code>PutUserPolicy</code>. For information about setting up signatures and authorization
   * through the API, go to <a href=
   * "http://docs.amazonwebservices.com/general/latest/gr/signing_aws_api_requests.html" target=
   * "_blank">Signing AWS API Requests</a> in the <em>AWS General Reference</em>. For general
   * information about using the Query API with IAM, go to <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html" target=
   * "_blank">Making Query Requests</a> in <em>Using IAM</em>.
   * </p>
   *
   * @param {String} [user_name] Name of the user to associate the policy with. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]   * @param {String} [policy_name] Name of the policy document. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]   * @param {String} [policy_document] The policy document. [Constraints: The value must be between 1 and 131072 characters, and must match the following regular expression pattern: <code>[\u0009\u000A\u000D\u0020-\u00FF]+</code>]   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  put_user_policy: function(user_name,policy_name,policy_document,opt){
    var payload = {};
    payload.user_name = user_name;
    payload.policy_name = policy_name;
    payload.policy_document = policy_document;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("PutUserPolicy", payload );
    return response;
  }, 
  /**
   * Removes the specified role from the specified instance profile.
   *
   * @param {String} [instance_profile_name] Name of the instance profile to update. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]   * @param {String} [role_name] Name of the role to remove. [Constraints: The value must be between 1 and 64 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  remove_role_from_instance_profile: function(instance_profile_name,role_name,opt){
    var payload = {};
    payload.instance_profile_name = instance_profile_name;
    payload.role_name = role_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("RemoveRoleFromInstanceProfile", payload );
    return response;
  }, 
  /**
   * Removes the specified user from the specified group.
   *
   * @param {String} [group_name] Name of the group to update. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]   * @param {String} [user_name] Name of the user to remove. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  remove_user_from_group: function(group_name,user_name,opt){
    var payload = {};
    payload.group_name = group_name;
    payload.user_name = user_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("RemoveUserFromGroup", payload );
    return response;
  }, 
  /**
   * Synchronizes the specified MFA device with AWS servers.
   *
   * @param {String} [user_name] Name of the user whose MFA device you want to resynchronize. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]   * @param {String} [serial_number] Serial number that uniquely identifies the MFA device. [Constraints: The value must be between 9 and 256 characters, and must match the following regular expression pattern: <code>[\w+=/:,.@-]*</code>]   * @param {String} [authentication_code1] An authentication code emitted by the device. [Constraints: The value must be between 6 and 6 characters, and must match the following regular expression pattern: <code>[\d]*</code>]   * @param {String} [authentication_code2] A subsequent authentication code emitted by the device. [Constraints: The value must be between 6 and 6 characters, and must match the following regular expression pattern: <code>[\d]*</code>]   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  resync_mfa_device: function(user_name,serial_number,authentication_code1,authentication_code2,opt){
    var payload = {};
    payload.user_name = user_name;
    payload.serial_number = serial_number;
    payload.authentication_code1 = authentication_code1;
    payload.authentication_code2 = authentication_code2;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("ResyncMfaDevice", payload );
    return response;
  }, 
  /**
   * Changes the status of the specified access key from Active to Inactive, or vice versa. This
   * action can be used to disable a user's key as part of a key rotation work flow.
   *  
   * If the <code>UserName</code> field is not specified, the UserName is determined implicitly
   * based on the AWS Access Key ID used to sign the request. Because this action works for access
   * keys under the AWS account, this API can be used to manage root credentials even if the AWS
   * account has no associated users.
   *  
   * For information about rotating keys, see <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/index.html?ManagingCredentials.html"
   * target="_blank">Managing Keys and Certificates</a> in <em>Using AWS Identity and Access
   * Management</em>.
   *
   * @param {String} [access_key_id] The Access Key ID of the Secret Access Key you want to update. [Constraints: The value must be between 16 and 32 characters, and must match the following regular expression pattern: <code>[\w]*</code>]   * @param {String} [status] The status you want to assign to the Secret Access Key. <code>Active</code> means the key can be used for API calls to AWS, while <code>Inactive</code> means the key cannot be used. [Allowed values: <code>Active</code>, <code>Inactive</code>]   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.UserName] Name of the user whose key you want to update. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  update_access_key: function(access_key_id,status,opt){
    var payload = {};
    payload.access_key_id = access_key_id;
    payload.status = status;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("UpdateAccessKey", payload );
    return response;
  }, 
  /**
   * Updates the password policy settings for the account. For more information about using a
   * password policy, go to <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/Using_ManagingPasswordPolicies.html">Managing
   * an IAM Password Policy</a>.
   *
   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   *   <li><code>RequireSymbols</code> - <code>boolean</code> - Optional - </li>
   *   <li><code>RequireNumbers</code> - <code>boolean</code> - Optional - </li>
   *   <li><code>RequireUppercaseCharacters</code> - <code>boolean</code> - Optional - </li>
   *   <li><code>RequireLowercaseCharacters</code> - <code>boolean</code> - Optional - </li>
   *   <li><code>AllowUsersToChangePassword</code> - <code>boolean</code> - Optional - </li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  update_account_password_policy: function(opt){
    var payload = {};
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("UpdateAccountPasswordPolicy", payload );
    return response;
  }, 
  /**
   * Updates the policy governing how the given role can be assumed.
   *
   * @param {String} [role_name] Name of the role to update. [Constraints: The value must be between 1 and 64 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]   * @param {String} [policy_document] The policy govering by who and under what conditions the role can be assumed. [Constraints: The value must be between 1 and 131072 characters, and must match the following regular expression pattern: <code>[\u0009\u000A\u000D\u0020-\u00FF]+</code>]   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  update_assume_role_policy: function(role_name,policy_document,opt){
    var payload = {};
    payload.role_name = role_name;
    payload.policy_document = policy_document;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("UpdateAssumeRolePolicy", payload );
    return response;
  }, 
  /**
   * Updates the name and/or the path of the specified group.
   * 
   * <p class="important">
   * You should understand the implications of changing a group's path or name. For more
   * information, see <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/index.html?Using_Renaming.html" target=
   * "_blank">Renaming Users and Groups</a> in <em>Using AWS Identity and Access Management</em>.
   * </p>
   * <p class="note">
   * To change a group name the requester must have appropriate permissions on both the source
   * object and the target object. For example, to change Managers to MGRs, the entity making the
   * request must have permission on Managers and MGRs, or must have permission on all (*). For more
   * information about permissions, see <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/PermissionsAndPolicies.html" target=
   * "blank">Permissions and Policies</a>.
   * </p>
   *
   * @param {String} [group_name] Name of the group to update. If you're changing the name of the group, this is the original name. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.NewPath] New path for the group. Only include this if changing the group's path. [Constraints: The value must be between 1 and 512 characters, and must match the following regular expression pattern: 
   * @param {String} [opt.NewGroupName] New name for the group. Only include this if changing the group's name. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  update_group: function(group_name,opt){
    var payload = {};
    payload.group_name = group_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("UpdateGroup", payload );
    return response;
  }, 
  /**
   * Changes the password for the specified user.
   *
   * @param {String} [user_name] Name of the user whose password you want to update. [Constraints: The value must be between 1 and 64 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.Password] The new password for the user name. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  update_login_profile: function(user_name,opt){
    var payload = {};
    payload.user_name = user_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("UpdateLoginProfile", payload );
    return response;
  }, 
  /**
   * Updates the name and/or the path of the specified server certificate.
   * 
   * <p class="important">
   * You should understand the implications of changing a server certificate's path or name. For
   * more information, see <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/ManagingServerCerts.html" target=
   * "_blank">Managing Server Certificates</a> in <em>Using AWS Identity and Access Management</em>.
   * </p>
   * <p class="note">
   * To change a server certificate name the requester must have appropriate permissions on both the
   * source object and the target object. For example, to change the name from ProductionCert to
   * ProdCert, the entity making the request must have permission on ProductionCert and ProdCert, or
   * must have permission on all (*). For more information about permissions, see <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/PermissionsAndPolicies.html" target=
   * "blank">Permissions and Policies</a>.
   * </p>
   *
   * @param {String} [server_certificate_name] The name of the server certificate that you want to update. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.NewPath] The new path for the server certificate. Include this only if you are updating the server certificate's path. [Constraints: The value must be between 1 and 512 characters, and must match the following regular expression pattern: 
   * @param {String} [opt.NewServerCertificateName] The new name for the server certificate. Include this only if you are updating the server certificate's name. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  update_server_certificate: function(server_certificate_name,opt){
    var payload = {};
    payload.server_certificate_name = server_certificate_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("UpdateServerCertificate", payload );
    return response;
  }, 
  /**
   * Changes the status of the specified signing certificate from active to disabled, or vice versa.
   * This action can be used to disable a user's signing certificate as part of a certificate
   * rotation work flow.
   *  
   * If the <code>UserName</code> field is not specified, the UserName is determined implicitly
   * based on the AWS Access Key ID used to sign the request. Because this action works for access
   * keys under the AWS account, this API can be used to manage root credentials even if the AWS
   * account has no associated users.
   *  
   * For information about rotating certificates, see <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/index.html?ManagingCredentials.html"
   * target="_blank">Managing Keys and Certificates</a> in <em>Using AWS Identity and Access
   * Management</em>.
   *
   * @param {String} [certificate_id] The ID of the signing certificate you want to update. [Constraints: The value must be between 24 and 128 characters, and must match the following regular expression pattern: <code>[\w]*</code>]   * @param {String} [status] The status you want to assign to the certificate. <code>Active</code> means the certificate can be used for API calls to AWS, while <code>Inactive</code> means the certificate cannot be used. [Allowed values: <code>Active</code>, <code>Inactive</code>]   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.UserName] Name of the user the signing certificate belongs to. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  update_signing_certificate: function(certificate_id,status,opt){
    var payload = {};
    payload.certificate_id = certificate_id;
    payload.status = status;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("UpdateSigningCertificate", payload );
    return response;
  }, 
  /**
   * Updates the name and/or the path of the specified user.
   * 
   * <p class="important">
   * You should understand the implications of changing a user's path or name. For more information,
   * see <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/index.html?Using_Renaming.html" target=
   * "_blank">Renaming Users and Groups</a> in <em>Using AWS Identity and Access Management</em>.
   * </p>
   * <p class="note">
   * To change a user name the requester must have appropriate permissions on both the source object
   * and the target object. For example, to change Bob to Robert, the entity making the request must
   * have permission on Bob and Robert, or must have permission on all (*). For more information
   * about permissions, see <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/PermissionsAndPolicies.html" target=
   * "blank">Permissions and Policies</a>.
   * </p>
   *
   * @param {String} [user_name] Name of the user to update. If you're changing the name of the user, this is the original user name. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.NewPath] New path for the user. Include this parameter only if you're changing the user's path. [Constraints: The value must be between 1 and 512 characters, and must match the following regular expression pattern: 
   * @param {String} [opt.NewUserName] New name for the user. Include this parameter only if you're changing the user's name. [Constraints: The value must be between 1 and 64 characters, and must match the following regular expression pattern: 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  update_user: function(user_name,opt){
    var payload = {};
    payload.user_name = user_name;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("UpdateUser", payload );
    return response;
  }, 
  /**
   * Uploads a server certificate entity for the AWS account. The server certificate entity includes
   * a public key certificate, a private key, and an optional certificate chain, which should all be
   * PEM-encoded.
   *  
   * For information about the number of server certificates you can upload, see <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/index.html?LimitationsOnEntities.html"
   * target="_blank">Limitations on IAM Entities</a> in <em>Using AWS Identity and Access
   * Management</em>.
   * 
   * <p class="note">
   * Because the body of the public key certificate, private key, and the certificate chain can be
   * large, you should use POST rather than GET when calling <code>UploadServerCertificate</code>.
   * For information about setting up signatures and authorization through the API, go to <a href=
   * "http://docs.amazonwebservices.com/general/latest/gr/signing_aws_api_requests.html" target=
   * "_blank">Signing AWS API Requests</a> in the <em>AWS General Reference</em>. For general
   * information about using the Query API with IAM, go to <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html" target=
   * "_blank">Making Query Requests</a> in <em>Using IAM</em>.
   * </p>
   *
   * @param {String} [server_certificate_name] The name for the server certificate. Do not include the path in this value. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\w+=,.@-]*</code>]   * @param {String} [certificate_body] The contents of the public key certificate in PEM-encoded format. [Constraints: The value must be between 1 and 16384 characters, and must match the following regular expression pattern: <code>[\u0009\u000A\u000D\u0020-\u00FF]+</code>]   * @param {String} [private_key] The contents of the private key in PEM-encoded format. [Constraints: The value must be between 1 and 16384 characters, and must match the following regular expression pattern: <code>[\u0009\u000A\u000D\u0020-\u00FF]*</code>]   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.Path] The path for the server certificate. For more information about paths, see 
   * @param {String} [opt.CertificateChain] The contents of the certificate chain. This is typically a concatenation of the PEM-encoded public key certificates of the chain. [Constraints: The value must be between 1 and 2097152 characters, and must match the following regular expression pattern: 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  upload_server_certificate: function(server_certificate_name,certificate_body,private_key,opt){
    var payload = {};
    payload.server_certificate_name = server_certificate_name;
    payload.certificate_body = certificate_body;
    payload.private_key = private_key;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("UploadServerCertificate", payload );
    return response;
  }, 
  /**
   * Uploads an X.509 signing certificate and associates it with the specified user. Some AWS
   * services use X.509 signing certificates to validate requests that are signed with a
   * corresponding private key. When you upload the certificate, its default status is
   * <code>Active</code>.
   *  
   * If the <code>UserName</code> field is not specified, the user name is determined implicitly
   * based on the AWS Access Key ID used to sign the request. Because this action works for access
   * keys under the AWS account, this API can be used to manage root credentials even if the AWS
   * account has no associated users.
   * 
   * <p class="note">
   * Because the body of a X.509 certificate can be large, you should use POST rather than GET when
   * calling <code>UploadSigningCertificate</code>. For information about setting up signatures and
   * authorization through the API, go to <a href=
   * "http://docs.amazonwebservices.com/general/latest/gr/signing_aws_api_requests.html" target=
   * "_blank">Signing AWS API Requests</a> in the <em>AWS General Reference</em>. For general
   * information about using the Query API with IAM, go to <a href=
   * "http://docs.amazonwebservices.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html" target=
   * "_blank">Making Query Requests</a> in <em>Using IAM</em>.
   * </p>
   *
   * @param {String} [certificate_body] The contents of the signing certificate. [Constraints: The value must be between 1 and 16384 characters, and must match the following regular expression pattern: <code>[\u0009\u000A\u000D\u0020-\u00FF]+</code>]   * @param {Object} [opt] An associative array of parameters that can have the following keys: <ul>   * @param {String} [opt.UserName] Name of the user the signing certificate is for. [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: 
   * @param {Object} [opt.curlopts] A set of values to pass directly into 
   * @param {Boolean} [opt.returnCurlHandle] A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */

  upload_signing_certificate: function(certificate_body,opt){
    var payload = {};
    payload.certificate_body = certificate_body;
    payload = this.marge_param(payload,opt);
    var response = this.authenticate("UploadSigningCertificate", payload );
    return response;
  }
}