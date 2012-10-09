/**
 * @class AmazonASClient
 * @param {String} access_key 
 * @param {String} secret_key
 */
function AmazonAS(access_key,secret_key){
  this.__proto__ = $.extend(this.__proto__,AWS.prototype);
  this.initialize(access_key,secret_key);
}
AmazonAS.prototype = {
  service:'autoscaling',
  version:'2011-01-01',
  auth_class: new AuthV4Query(),
  /**
   * @memberOf AmazonAS
   */
  initialize : function(access_key,secret_key){
    this.init(access_key,secret_key);
  },
 
  /**
   * Creates a new Auto Scaling group with the specified name. When the creation request is
   * completed, the Auto Scaling group is ready to be used in other calls.
   * 
   * <p class="note">
   * The Auto Scaling group name must be unique within the scope of your AWS account, and under the
   * quota of Auto Scaling groups allowed for your account.
   * </p>
   *
   * @param {String} auto_scaling_group_name (Required) The name of the Auto Scaling group. [Constraints: The value must be between 1 and 255 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]
   * @param {String} launch_configuration_name (Required) The name of the launch configuration to use with the Auto Scaling group. [Constraints: The value must be between 1 and 1600 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]
   * @param {Number} min_size (Required) The minimum size of the Auto Scaling group.
   * @param {Number} max_size (Required) The maximum size of the Auto Scaling group.
   * @param string|array $availability_zones (Required) A list of availability zones for the Auto Scaling group. Pass a string for a single value, or an indexed array for multiple values.
   * @param opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>DesiredCapacity</code> - <code>integer</code> - Optional - The number of Amazon EC2 instances that should be running in the group.</li>
   *   <li><code>DefaultCooldown</code> - <code>integer</code> - Optional - The amount of time, in seconds, after a scaling activity completes before any further trigger-related scaling activities can start.</li>
   *   <li><code>LoadBalancerNames</code> - <code>string|array</code> - Optional - A list of LoadBalancers to use. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>HealthCheckType</code> - <code>string</code> - Optional - The service you want the health status from, Amazon EC2 or Elastic Load Balancer. Valid values are <code>EC2</code> or <code>ELB</code>. [Constraints: The value must be between 1 and 32 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *   <li><code>HealthCheckGracePeriod</code> - <code>integer</code> - Optional - Length of time in seconds after a new EC2 instance comes into service that Auto Scaling starts checking its health.</li>
   *   <li><code>PlacementGroup</code> - <code>string</code> - Optional - Physical location of your cluster placement group created in Amazon EC2. For more information about cluster placement group, see <a href="http://docs.amazonwebservices.com/AWSEC2/latest/UserGuide/using_cluster_computing.html">Using Cluster Instances</a> [Constraints: The value must be between 1 and 255 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *   <li><code>VPCZoneIdentifier</code> - <code>string</code> - Optional - A comma-separated list of subnet identifiers of Amazon Virtual Private Clouds (Amazon VPCs). When you specify subnets and Availability Zones with this call, ensure that the subnets' Availability Zones match the Availability Zones specified. [Constraints: The value must be between 1 and 255 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *   <li><code>Tags</code> - <code>array</code> - Optional -  <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>ResourceId</code> - <code>string</code> - Optional -  [Constraints: The value must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *       <li><code>ResourceType</code> - <code>string</code> - Optional -  [Constraints: The value must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *       <li><code>Key</code> - <code>string</code> - Required -  [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *       <li><code>Value</code> - <code>string</code> - Optional -  [Constraints: The value must be between 0 and 256 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *       <li><code>PropagateAtLaunch</code> - <code>boolean</code> - Optional - </li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  create_auto_scaling_group: function(auto_scaling_group_name,launch_configuration_name,min_size,max_size,availability_zones,opt){
    var payload = {};
    payload.auto_scaling_group_name = auto_scaling_group_name;
    payload.launch_configuration_name = launch_configuration_name;
    payload.min_size = min_size;
    payload.max_size = max_size;
    payload.availability_zones = availability_zones;

    payload = this.marge_param(payload,opt);
    var response = this.request("CreateAutoScalingGroup", payload );
    return response;
  }, 
  /**
   * Creates a new launch configuration. The launch configuration name must be unique within the
   * scope of the client's AWS account. The maximum limit of launch configurations, which by default
   * is 100, must not yet have been met; otherwise, the call will fail. When created, the new launch
   * configuration is available for immediate use.
   *  
   * You can create a launch configuration with Amazon EC2 security groups or with Amazon VPC
   * security groups. However, you can't use Amazon EC2 security groups together with Amazon VPC
   * security groups, or vice versa.
   * 
   * <p class="note">
   * At this time, Auto Scaling launch configurations don't support compressed (e.g. gzipped) user
   * data files.
   * </p>
   *
   * @param {String} launch_configuration_name (Required) The name of the launch configuration to create. [Constraints: The value must be between 1 and 255 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]
   * @param {String} image_id (Required) Unique ID of the <em>Amazon Machine Image</em> (AMI) which was assigned during registration. For more information about Amazon EC2 images, please see <a href="http://aws.amazon.com/ec2/">Amazon EC2 product documentation</a> [Constraints: The value must be between 1 and 255 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]
   * @param {String} instance_type (Required) The instance type of the EC2 instance. For more information about Amazon EC2 instance types, please see <a href="http://aws.amazon.com/ec2/">Amazon EC2 product documentation</a> [Constraints: The value must be between 1 and 255 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]
   * @param opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>KeyName</code> - <code>string</code> - Optional - The name of the EC2 key pair. [Constraints: The value must be between 1 and 255 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *   <li><code>SecurityGroups</code> - <code>string|array</code> - Optional - The names of the security groups with which to associate Amazon EC2 or Amazon VPC instances. Specify Amazon EC2 security groups using security group names, such as <code>websrv</code>. Specify Amazon VPC security groups using security group IDs, such as <code>sg-12345678</code>. For more information about Amazon EC2 security groups, go to <a href="http://docs.amazonwebservices.com/AWSEC2/latest/UserGuide/index.html?using-network-security.html">Using Security Groups</a> in the Amazon EC2 product documentation. For more information about Amazon VPC security groups, go to <a href="http://docs.amazonwebservices.com/AmazonVPC/latest/UserGuide/index.html?VPC_SecurityGroups.html">Security Groups</a> in the Amazon VPC product documentation. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>UserData</code> - <code>string</code> - Optional - The user data available to the launched Amazon EC2 instances. For more information about Amazon EC2 user data, please see <a href="http://aws.amazon.com/ec2/">Amazon EC2 product documentation</a>. [Constraints: The value must be between 0 and 21847 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *   <li><code>KernelId</code> - <code>string</code> - Optional - The ID of the kernel associated with the EC2 AMI. [Constraints: The value must be between 1 and 255 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *   <li><code>RamdiskId</code> - <code>string</code> - Optional - The ID of the RAM disk associated with the EC2 AMI. [Constraints: The value must be between 1 and 255 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *   <li><code>BlockDeviceMappings</code> - <code>array</code> - Optional - A list of mappings that specify how block devices are exposed to the instance. Each mapping is made up of a <em>VirtualName</em>, a <em>DeviceName</em>, and an <em>ebs</em> data structure that contains information about the associated Elastic Block Storage volume. For more information about Amazon EC2 BlockDeviceMappings, please go to <a href="http://docs.amazonwebservices.com/AWSEC2/latest/UserGuide/index.html?block-device-mapping-concepts.html">Block Device Mapping</a> in the Amazon EC2 product documentation. <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>VirtualName</code> - <code>string</code> - Optional - The virtual name associated with the device. [Constraints: The value must be between 1 and 255 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *       <li><code>DeviceName</code> - <code>string</code> - Required - The name of the device within Amazon EC2. [Constraints: The value must be between 1 and 255 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *       <li><code>Ebs</code> - <code>array</code> - Optional - The Elastic Block Storage volume information. <ul>
   *         <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *           <li><code>SnapshotId</code> - <code>string</code> - Optional - The Snapshot ID. [Constraints: The value must be between 1 and 255 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *           <li><code>VolumeSize</code> - <code>integer</code> - Optional - The volume size, in GigaBytes.</li>
   *         </ul></li>
   *       </ul></li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>InstanceMonitoring</code> - <code>array</code> - Optional - Enables detailed monitoring, which is enabled by default. When detailed monitoring is enabled, CloudWatch will generate metrics every minute and your account will be charged a fee. When you disable detailed monitoring, by specifying <code>False</code>, Cloudwatch will generate metrics every 5 minutes. For information about monitoring, see the <a href="http://aws.amazon.com/cloudwatch/">Amazon CloudWatch</a> product page. <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>Enabled</code> - <code>boolean</code> - Optional - If <code>True</code>, instance monitoring is enabled.</li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>SpotPrice</code> - <code>string</code> - Optional - </li>
   *   <li><code>IamInstanceProfile</code> - <code>string</code> - Optional -  [Constraints: The value must be between 1 and 1600 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  create_launch_configuration: function(launch_configuration_name,image_id,instance_type,opt){
    var payload = {};
    payload.launch_configuration_name = launch_configuration_name;
    payload.image_id = image_id;
    payload.instance_type = instance_type;

    payload = this.marge_param(payload,opt);
    var response = this.request("CreateLaunchConfiguration", payload );
    return response;
  }, 
  /**
   * 
   *
   * @param tags (Required)  <ul>
   *   <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *     <li><code>ResourceId</code> - <code>string</code> - Optional -  [Constraints: The value must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *     <li><code>ResourceType</code> - <code>string</code> - Optional -  [Constraints: The value must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *     <li><code>Key</code> - <code>string</code> - Required -  [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *     <li><code>Value</code> - <code>string</code> - Optional -  [Constraints: The value must be between 0 and 256 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *     <li><code>PropagateAtLaunch</code> - <code>boolean</code> - Optional - </li>
   *   </ul></li>
   * </ul>
   * @param opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  create_or_update_tags: function(tags,opt){
    var payload = {};
    payload.tags = tags;

    payload = this.marge_param(payload,opt);
    var response = this.request("CreateOrUpdateTags", payload );
    return response;
  }, 
  /**
   * Deletes the specified auto scaling group if the group has no instances and no scaling
   * activities in progress.
   * 
   * <p class="note">
   * To remove all instances before calling <code>DeleteAutoScalingGroup</code>, you can call
   * <code>UpdateAutoScalingGroup</code> to set the minimum and maximum size of the AutoScalingGroup
   * to zero.
   * </p>
   *
   * @param {String} auto_scaling_group_name (Required) The name of the Auto Scaling group. [Constraints: The value must be between 1 and 1600 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]
   * @param opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>ForceDelete</code> - <code>boolean</code> - Optional - Starting with API version 2011-01-01, specifies that the Auto Scaling group will be deleted along with all instances associated with the group, without waiting for all instances to be terminated.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  delete_auto_scaling_group: function(auto_scaling_group_name,opt){
    var payload = {};
    payload.auto_scaling_group_name = auto_scaling_group_name;

    payload = this.marge_param(payload,opt);
    var response = this.request("DeleteAutoScalingGroup", payload );
    return response;
  }, 
  /**
   * Deletes the specified <code>LaunchConfiguration</code>.
   *  
   * The specified launch configuration must not be attached to an Auto Scaling group. When this
   * call completes, the launch configuration is no longer available for use.
   *
   * @param {String} launch_configuration_name (Required) The name of the launch configuration. [Constraints: The value must be between 1 and 1600 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]
   * @param opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  delete_launch_configuration: function(launch_configuration_name,opt){
    var payload = {};
    payload.launch_configuration_name = launch_configuration_name;

    payload = this.marge_param(payload,opt);
    var response = this.request("DeleteLaunchConfiguration", payload );
    return response;
  }, 
  /**
   * Deletes notifications created by <code>PutNotificationConfiguration</code>.
   *
   * @param {String} auto_scaling_group_name (Required) The name of the Auto Scaling group. [Constraints: The value must be between 1 and 1600 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]
   * @param {String} topic_arn (Required) The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic. [Constraints: The value must be between 1 and 1600 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]
   * @param opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  delete_notification_configuration: function(auto_scaling_group_name,topic_arn,opt){
    var payload = {};
    payload.auto_scaling_group_name = auto_scaling_group_name;
    payload.topic_arn = topic_arn;

    payload = this.marge_param(payload,opt);
    var response = this.request("DeleteNotificationConfiguration", payload );
    return response;
  }, 
  /**
   * Deletes a policy created by <code>PutScalingPolicy</code>
   *
   * @param {String} policy_name (Required) The name or PolicyARN of the policy you want to delete [Constraints: The value must be between 1 and 1600 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]
   * @param opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>AutoScalingGroupName</code> - <code>string</code> - Optional - The name of the Auto Scaling group. [Constraints: The value must be between 1 and 1600 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  delete_policy: function(policy_name,opt){
    var payload = {};
    payload.policy_name = policy_name;

    payload = this.marge_param(payload,opt);
    var response = this.request("DeletePolicy", payload );
    return response;
  }, 
  /**
   * Deletes a scheduled action previously created using the
   * <code>PutScheduledUpdateGroupAction</code>.
   *
   * @param {String} scheduled_action_name (Required) The name of the action you want to delete. [Constraints: The value must be between 1 and 1600 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]
   * @param opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>AutoScalingGroupName</code> - <code>string</code> - Optional - The name of the Auto Scaling group [Constraints: The value must be between 1 and 1600 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  delete_scheduled_action: function(scheduled_action_name,opt){
    var payload = {};
    payload.scheduled_action_name = scheduled_action_name;

    payload = this.marge_param(payload,opt);
    var response = this.request("DeleteScheduledAction", payload );
    return response;
  }, 
  /**
   * 
   *
   * @param tags (Required)  <ul>
   *   <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *     <li><code>ResourceId</code> - <code>string</code> - Optional -  [Constraints: The value must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *     <li><code>ResourceType</code> - <code>string</code> - Optional -  [Constraints: The value must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *     <li><code>Key</code> - <code>string</code> - Required -  [Constraints: The value must be between 1 and 128 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *     <li><code>Value</code> - <code>string</code> - Optional -  [Constraints: The value must be between 0 and 256 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *     <li><code>PropagateAtLaunch</code> - <code>boolean</code> - Optional - </li>
   *   </ul></li>
   * </ul>
   * @param opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  delete_tags: function(tags,opt){
    var payload = {};
    payload.tags = tags;

    payload = this.marge_param(payload,opt);
    var response = this.request("DeleteTags", payload );
    return response;
  }, 
  /**
   * Returns policy adjustment types for use in the <code>PutScalingPolicy</code> action.
   *
   * @param opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_adjustment_types: function(opt){
    var payload = {};

    payload = this.marge_param(payload,opt);
    var response = this.request("DescribeAdjustmentTypes", payload );
    return response;
  }, 
  /**
   * Returns a full description of each Auto Scaling group in the given list. This includes all
   * Amazon EC2 instances that are members of the group. If a list of names is not provided, the
   * service returns the full details of all Auto Scaling groups.
   *  
   * This action supports pagination by returning a token if there are more pages to retrieve. To
   * get the next page, call this action again with the returned token as the <code>NextToken</code>
   * parameter.
   *
   * @param opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>AutoScalingGroupNames</code> - <code>string|array</code> - Optional - A list of Auto Scaling group names. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>NextToken</code> - <code>string</code> - Optional - A string that marks the start of the next batch of returned results. [Constraints: The value must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *   <li><code>MaxRecords</code> - <code>integer</code> - Optional - The maximum number of records to return.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_auto_scaling_groups: function(opt){
    var payload = {};

    payload = this.marge_param(payload,opt);
    var response = this.request("DescribeAutoScalingGroups", payload );
    return response;
  }, 
  /**
   * Returns a description of each Auto Scaling instance in the <code>InstanceIds</code> list. If a
   * list is not provided, the service returns the full details of all instances up to a maximum of
   * 50. By default, the service returns a list of 20 items.
   *  
   * This action supports pagination by returning a token if there are more pages to retrieve. To
   * get the next page, call this action again with the returned token as the <code>NextToken</code>
   * parameter.
   *
   * @param opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>InstanceIds</code> - <code>string|array</code> - Optional - The list of Auto Scaling instances to describe. If this list is omitted, all auto scaling instances are described. The list of requested instances cannot contain more than 50 items. If unknown instances are requested, they are ignored with no error. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>MaxRecords</code> - <code>integer</code> - Optional - The maximum number of Auto Scaling instances to be described with each call.</li>
   *   <li><code>NextToken</code> - <code>string</code> - Optional - The token returned by a previous call to indicate that there is more data available. [Constraints: The value must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_auto_scaling_instances: function(opt){
    var payload = {};

    payload = this.marge_param(payload,opt);
    var response = this.request("DescribeAutoScalingInstances", payload );
    return response;
  }, 
  /**
   * Returns a list of all notification types that are supported by Auto Scaling.
   *
   * @param opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_auto_scaling_notification_types: function(opt){
    var payload = {};

    payload = this.marge_param(payload,opt);
    var response = this.request("DescribeAutoScalingNotificationTypes", payload );
    return response;
  }, 
  /**
   * Returns a full description of the launch configurations given the specified names.
   *  
   * If no names are specified, then the full details of all launch configurations are returned.
   *
   * @param opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>LaunchConfigurationNames</code> - <code>string|array</code> - Optional - A list of launch configuration names. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>NextToken</code> - <code>string</code> - Optional - A string that marks the start of the next batch of returned results. [Constraints: The value must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *   <li><code>MaxRecords</code> - <code>integer</code> - Optional - The maximum number of launch configurations. The default is 100.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_launch_configurations: function(opt){
    var payload = {};

    payload = this.marge_param(payload,opt);
    var response = this.request("DescribeLaunchConfigurations", payload );
    return response;
  }, 
  /**
   * Returns a list of metrics and a corresponding list of granularities for each metric.
   *
   * @param opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_metric_collection_types: function(opt){
    var payload = {};

    payload = this.marge_param(payload,opt);
    var response = this.request("DescribeMetricCollectionTypes", payload );
    return response;
  }, 
  /**
   * Returns a list of notification actions associated with Auto Scaling groups for specified
   * events.
   *
   * @param opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>AutoScalingGroupNames</code> - <code>string|array</code> - Optional - The name of the Auto Scaling group. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>NextToken</code> - <code>string</code> - Optional - A string that is used to mark the start of the next batch of returned results for pagination. [Constraints: The value must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *   <li><code>MaxRecords</code> - <code>integer</code> - Optional - Maximum number of records to be returned.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_notification_configurations: function(opt){
    var payload = {};

    payload = this.marge_param(payload,opt);
    var response = this.request("DescribeNotificationConfigurations", payload );
    return response;
  }, 
  /**
   * Returns descriptions of what each policy does. This action supports pagination. If the response
   * includes a token, there are more records available. To get the additional records, repeat the
   * request with the response token as the <code>NextToken</code> parameter.
   *
   * @param opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>AutoScalingGroupName</code> - <code>string</code> - Optional - The name of the Auto Scaling group. [Constraints: The value must be between 1 and 1600 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *   <li><code>PolicyNames</code> - <code>string|array</code> - Optional - A list of policy names or policy ARNs to be described. If this list is omitted, all policy names are described. If an auto scaling group name is provided, the results are limited to that group.The list of requested policy names cannot contain more than 50 items. If unknown policy names are requested, they are ignored with no error. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>NextToken</code> - <code>string</code> - Optional - A string that is used to mark the start of the next batch of returned results for pagination. [Constraints: The value must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *   <li><code>MaxRecords</code> - <code>integer</code> - Optional - The maximum number of policies that will be described with each call.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_policies: function(opt){
    var payload = {};

    payload = this.marge_param(payload,opt);
    var response = this.request("DescribePolicies", payload );
    return response;
  }, 
  /**
   * Returns the scaling activities for the specified Auto Scaling group.
   *  
   * If the specified <code>ActivityIds</code> list is empty, all the activities from the past six
   * weeks are returned. Activities are sorted by completion time. Activities still in progress
   * appear first on the list.
   *  
   * This action supports pagination. If the response includes a token, there are more records
   * available. To get the additional records, repeat the request with the response token as the
   * <code>NextToken</code> parameter.
   *
   * @param opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>ActivityIds</code> - <code>string|array</code> - Optional - A list containing the activity IDs of the desired scaling activities. If this list is omitted, all activities are described. If an AutoScalingGroupName is provided, the results are limited to that group. The list of requested activities cannot contain more than 50 items. If unknown activities are requested, they are ignored with no error. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>AutoScalingGroupName</code> - <code>string</code> - Optional - The name of the <code>AutoScalingGroup</code>. [Constraints: The value must be between 1 and 1600 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *   <li><code>MaxRecords</code> - <code>integer</code> - Optional - The maximum number of scaling activities to return.</li>
   *   <li><code>NextToken</code> - <code>string</code> - Optional - A string that marks the start of the next batch of returned results for pagination. [Constraints: The value must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_scaling_activities: function(opt){
    var payload = {};

    payload = this.marge_param(payload,opt);
    var response = this.request("DescribeScalingActivities", payload );
    return response;
  }, 
  /**
   * Returns scaling process types for use in the <code>ResumeProcesses</code> and
   * <code>SuspendProcesses</code> actions.
   *
   * @param opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_scaling_process_types: function(opt){
    var payload = {};

    payload = this.marge_param(payload,opt);
    var response = this.request("DescribeScalingProcessTypes", payload );
    return response;
  }, 
  /**
   * Lists all the actions scheduled for your Auto Scaling group that haven't been executed. To see
   * a list of action already executed, see the activity record returned in
   * <code>DescribeScalingActivities</code>.
   *
   * @param opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>AutoScalingGroupName</code> - <code>string</code> - Optional - The name of the Auto Scaling group. [Constraints: The value must be between 1 and 1600 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *   <li><code>ScheduledActionNames</code> - <code>string|array</code> - Optional - A list of scheduled actions to be described. If this list is omitted, all scheduled actions are described. The list of requested scheduled actions cannot contain more than 50 items. If an auto scaling group name is provided, the results are limited to that group. If unknown scheduled actions are requested, they are ignored with no error. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>StartTime</code> - <code>string</code> - Optional - The earliest scheduled start time to return. If scheduled action names are provided, this field will be ignored. May be passed as a number of seconds since UNIX Epoch, or any string compatible with <php:strtotime()>.</li>
   *   <li><code>EndTime</code> - <code>string</code> - Optional - The latest scheduled start time to return. If scheduled action names are provided, this field will be ignored. May be passed as a number of seconds since UNIX Epoch, or any string compatible with <php:strtotime()>.</li>
   *   <li><code>NextToken</code> - <code>string</code> - Optional - A string that marks the start of the next batch of returned results. [Constraints: The value must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *   <li><code>MaxRecords</code> - <code>integer</code> - Optional - The maximum number of scheduled actions to return.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_scheduled_actions: function(opt){
    var payload = {};

    payload = this.marge_param(payload,opt);
    var response = this.request("DescribeScheduledActions", payload );
    return response;
  }, 
  /**
   * 
   *
   * @param opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>Filters</code> - <code>array</code> - Optional -  <ul>
   *     <li><code>x</code> - <code>array</code> - Optional - This represents a simple array index. <ul>
   *       <li><code>Name</code> - <code>string</code> - Optional -  [Constraints: The value must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *       <li><code>Values</code> - <code>string|array</code> - Optional -  Pass a string for a single value, or an indexed array for multiple values.</li>
   *     </ul></li>
   *   </ul></li>
   *   <li><code>NextToken</code> - <code>string</code> - Optional -  [Constraints: The value must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *   <li><code>MaxRecords</code> - <code>integer</code> - Optional - </li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  describe_tags: function(opt){
    var payload = {};

    payload = this.marge_param(payload,opt);
    var response = this.request("DescribeTags", payload );
    return response;
  }, 
  /**
   * Disables monitoring of group metrics for the Auto Scaling group specified in
   * AutoScalingGroupName. You can specify the list of affected metrics with the Metrics parameter.
   *
   * @param {String} auto_scaling_group_name (Required) The name or ARN of the Auto Scaling Group. [Constraints: The value must be between 1 and 1600 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]
   * @param opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>Metrics</code> - <code>string|array</code> - Optional - The list of metrics to disable. If no metrics are specified, all metrics are disabled. The following metrics are supported:<ul><li>GroupMinSize</li><li>GroupMaxSize</li><li>GroupDesiredCapacity</li><li>GroupInServiceInstances</li><li>GroupPendingInstances</li><li>GroupTerminatingInstances</li><li>GroupTotalInstances</li></ul> Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  disable_metrics_collection: function(auto_scaling_group_name,opt){
    var payload = {};
    payload.auto_scaling_group_name = auto_scaling_group_name;

    payload = this.marge_param(payload,opt);
    var response = this.request("DisableMetricsCollection", payload );
    return response;
  }, 
  /**
   * Enables monitoring of group metrics for the Auto Scaling group specified in
   * AutoScalingGroupName. You can specify the list of enabled metrics with the Metrics parameter.
   *  
   * Auto scaling metrics collection can be turned on only if the <code>InstanceMonitoring</code>
   * flag, in the Auto Scaling group's launch configuration, is set to <code>True</code>.
   *
   * @param {String} auto_scaling_group_name (Required) The name or ARN of the Auto Scaling Group. [Constraints: The value must be between 1 and 1600 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]
   * @param {String} granularity (Required) The granularity to associate with the metrics to collect. Currently, the only legal granularity is "1Minute". [Constraints: The value must be between 1 and 255 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]
   * @param opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>Metrics</code> - <code>string|array</code> - Optional - The list of metrics to collect. If no metrics are specified, all metrics are enabled. The following metrics are supported:<ul><li>GroupMinSize</li><li>GroupMaxSize</li><li>GroupDesiredCapacity</li><li>GroupInServiceInstances</li><li>GroupPendingInstances</li><li>GroupTerminatingInstances</li><li>GroupTotalInstances</li></ul> Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  enable_metrics_collection: function(auto_scaling_group_name,granularity,opt){
    var payload = {};
    payload.auto_scaling_group_name = auto_scaling_group_name;
    payload.granularity = granularity;

    payload = this.marge_param(payload,opt);
    var response = this.request("EnableMetricsCollection", payload );
    return response;
  }, 
  /**
   * Runs the policy you create for your Auto Scaling group in <code>PutScalingPolicy</code>.
   *
   * @param {String} policy_name (Required) The name or PolicyARN of the policy you want to run. [Constraints: The value must be between 1 and 1600 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]
   * @param opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>AutoScalingGroupName</code> - <code>string</code> - Optional - The name or ARN of the Auto Scaling Group. [Constraints: The value must be between 1 and 1600 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *   <li><code>HonorCooldown</code> - <code>boolean</code> - Optional - Set to True if you want Auto Scaling to reject this request when the Auto Scaling group is in cooldown.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  execute_policy: function(policy_name,opt){
    var payload = {};
    payload.policy_name = policy_name;

    payload = this.marge_param(payload,opt);
    var response = this.request("ExecutePolicy", payload );
    return response;
  }, 
  /**
   * Configures an Auto Scaling group to send notifications when specified events take place.
   * Subscribers to this topic can have messages for events delivered to an endpoint such as a web
   * server or email address.
   *  
   * A new <code>PutNotificationConfiguration</code> overwrites an existing configuration.
   *
   * @param {String} auto_scaling_group_name (Required) The name of the Auto Scaling Group. [Constraints: The value must be between 1 and 1600 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]
   * @param {String} topic_arn (Required) The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic. [Constraints: The value must be between 1 and 1600 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]
   * @param string|array $notification_types (Required) The type of events that will trigger the notification. For more information, go to <code>DescribeAutoScalingNotificationTypes</code>. Pass a string for a single value, or an indexed array for multiple values.
   * @param opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  put_notification_configuration: function(auto_scaling_group_name,topic_arn,notification_types,opt){
    var payload = {};
    payload.auto_scaling_group_name = auto_scaling_group_name;
    payload.topic_arn = topic_arn;
    payload.notification_types = notification_types;

    payload = this.marge_param(payload,opt);
    var response = this.request("PutNotificationConfiguration", payload );
    return response;
  }, 
  /**
   * Creates or updates a policy for an Auto Scaling group. To update an existing policy, use the
   * existing policy name and set the parameter(s) you want to change. Any existing parameter not
   * changed in an update to an existing policy is not changed in this update request.
   *
   * @param {String} auto_scaling_group_name (Required) The name or ARN of the Auto Scaling Group. [Constraints: The value must be between 1 and 1600 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]
   * @param {String} policy_name (Required) The name of the policy you want to create or update. [Constraints: The value must be between 1 and 255 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]
   * @param {Number} scaling_adjustment (Required) The number of instances by which to scale. <code>AdjustmentType</code> determines the interpretation of this number (e.g., as an absolute number or as a percentage of the existing Auto Scaling group size). A positive increment adds to the current capacity and a negative value removes from the current capacity.
   * @param {String} adjustment_type (Required) Specifies whether the <code>ScalingAdjustment</code> is an absolute number or a percentage of the current capacity. Valid values are <code>ChangeInCapacity</code>, <code>ExactCapacity</code>, and <code>PercentChangeInCapacity</code>. [Constraints: The value must be between 1 and 255 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]
   * @param opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>Cooldown</code> - <code>integer</code> - Optional - The amount of time, in seconds, after a scaling activity completes before any further trigger-related scaling activities can start.</li>
   *   <li><code>MinAdjustmentStep</code> - <code>integer</code> - Optional - </li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  put_scaling_policy: function(auto_scaling_group_name,policy_name,scaling_adjustment,adjustment_type,opt){
    var payload = {};
    payload.auto_scaling_group_name = auto_scaling_group_name;
    payload.policy_name = policy_name;
    payload.scaling_adjustment = scaling_adjustment;
    payload.adjustment_type = adjustment_type;

    payload = this.marge_param(payload,opt);
    var response = this.request("PutScalingPolicy", payload );
    return response;
  }, 
  /**
   * Creates a scheduled scaling action for a Auto Scaling group. If you leave a parameter
   * unspecified, the corresponding value remains unchanged in the affected Auto Scaling group.
   *
   * @param {String} auto_scaling_group_name (Required) The name or ARN of the Auto Scaling Group. [Constraints: The value must be between 1 and 1600 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]
   * @param {String} scheduled_action_name (Required) The name of this scaling action. [Constraints: The value must be between 1 and 255 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]
   * @param opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>Time</code> - <code>string</code> - Optional - <code>Time</code> is deprecated. The time for this action to start. <code>Time</code> is an alias for <code>StartTime</code> and can be specified instead of <code>StartTime</code>, or vice versa. If both <code>Time</code> and <code>StartTime</code> are specified, their values should be identical. Otherwise, <code>PutScheduledUpdateGroupAction</code> will return an error. May be passed as a number of seconds since UNIX Epoch, or any string compatible with <php:strtotime()>.</li>
   *   <li><code>StartTime</code> - <code>string</code> - Optional - The time for this action to start, as in <code>--start-time 2010-06-01T00:00:00Z</code>. When <code>StartTime</code> and <code>EndTime</code> are specified with <code>Recurrence</code>, they form the boundaries of when the recurring action will start and stop. May be passed as a number of seconds since UNIX Epoch, or any string compatible with <php:strtotime()>.</li>
   *   <li><code>EndTime</code> - <code>string</code> - Optional - The time for this action to end. May be passed as a number of seconds since UNIX Epoch, or any string compatible with <php:strtotime()>.</li>
   *   <li><code>Recurrence</code> - <code>string</code> - Optional - The time when recurring future actions will start. Start time is specified by the user following the Unix cron syntax format. For information about cron syntax, go to <a href="http://en.wikipedia.org/wiki/Cron">Wikipedia, The Free Encyclopedia</a>. When <code>StartTime</code> and <code>EndTime</code> are specified with <code>Recurrence</code>, they form the boundaries of when the recurring action will start and stop. [Constraints: The value must be between 1 and 255 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *   <li><code>MinSize</code> - <code>integer</code> - Optional - The minimum size for the new Auto Scaling group.</li>
   *   <li><code>MaxSize</code> - <code>integer</code> - Optional - The maximum size for the Auto Scaling group.</li>
   *   <li><code>DesiredCapacity</code> - <code>integer</code> - Optional - The number of Amazon EC2 instances that should be running in the group.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  put_scheduled_update_group_action: function(auto_scaling_group_name,scheduled_action_name,opt){
    var payload = {};
    payload.auto_scaling_group_name = auto_scaling_group_name;
    payload.scheduled_action_name = scheduled_action_name;

    payload = this.marge_param(payload,opt);
    var response = this.request("PutScheduledUpdateGroupAction", payload );
    return response;
  }, 
  /**
   * Resumes Auto Scaling processes for an Auto Scaling group. For more information, see
   * <code>SuspendProcesses</code> and <code>ProcessType</code>.
   *
   * @param {String} auto_scaling_group_name (Required) The name or Amazon Resource Name (ARN) of the Auto Scaling group. [Constraints: The value must be between 1 and 1600 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]
   * @param opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>ScalingProcesses</code> - <code>string|array</code> - Optional - The processes that you want to suspend or resume, which can include one or more of the following:<ul><li>Launch</li><li>Terminate</li><li>HealthCheck</li><li>ReplaceUnhealthy</li><li>AZRebalance</li><li>AlarmNotifications</li><li>ScheduledActions</li><li>AddToLoadBalancer</li></ul>To suspend all process types, omit this parameter. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  resume_processes: function(auto_scaling_group_name,opt){
    var payload = {};
    payload.auto_scaling_group_name = auto_scaling_group_name;

    payload = this.marge_param(payload,opt);
    var response = this.request("ResumeProcesses", payload );
    return response;
  }, 
  /**
   * Adjusts the desired size of the <code>AutoScalingGroup</code> by initiating scaling activities.
   * When reducing the size of the group, it is not possible to define which EC2 instances will be
   * terminated. This applies to any Auto Scaling decisions that might result in terminating
   * instances.
   *  
   * There are two common use cases for <code>SetDesiredCapacity</code>: one for users of the Auto
   * Scaling triggering system, and another for developers who write their own triggering systems.
   * Both use cases relate to the concept of cooldown.
   *  
   * In the first case, if you use the Auto Scaling triggering system,
   * <code>SetDesiredCapacity</code> changes the size of your Auto Scaling group without regard to
   * the cooldown period. This could be useful, for example, if Auto Scaling did something
   * unexpected for some reason. If your cooldown period is 10 minutes, Auto Scaling would normally
   * reject requests to change the size of the group for that entire 10 minute period. The
   * <code>SetDesiredCapacity</code> command allows you to circumvent this restriction and change
   * the size of the group before the end of the cooldown period.
   *  
   * In the second case, if you write your own triggering system, you can use
   * <code>SetDesiredCapacity</code> to control the size of your Auto Scaling group. If you want the
   * same cooldown functionality that Auto Scaling offers, you can configure
   * <code>SetDesiredCapacity</code> to honor cooldown by setting the <code>HonorCooldown</code>
   * parameter to <code>true</code>.
   *
   * @param {String} auto_scaling_group_name (Required) The name of the AutoScalingGroup. [Constraints: The value must be between 1 and 1600 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]
   * @param {Number} desired_capacity (Required) The new capacity setting for the AutoScalingGroup.
   * @param opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>HonorCooldown</code> - <code>boolean</code> - Optional - By default, <code>SetDesiredCapacity</code> overrides any cooldown period. Set to True if you want Auto Scaling to reject this request when the Auto Scaling group is in cooldown.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  set_desired_capacity: function(auto_scaling_group_name,desired_capacity,opt){
    var payload = {};
    payload.auto_scaling_group_name = auto_scaling_group_name;
    payload.desired_capacity = desired_capacity;

    payload = this.marge_param(payload,opt);
    var response = this.request("SetDesiredCapacity", payload );
    return response;
  }, 
  /**
   * Sets the health status of an instance.
   *
   * @param {String} instance_id (Required) The identifier of the EC2 instance. [Constraints: The value must be between 1 and 16 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]
   * @param {String} health_status (Required) The health status of the instance. "Healthy" means that the instance is healthy and should remain in service. "Unhealthy" means that the instance is unhealthy. Auto Scaling should terminate and replace it. [Constraints: The value must be between 1 and 32 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]
   * @param opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>ShouldRespectGracePeriod</code> - <code>boolean</code> - Optional - If True, this call should respect the grace period associated with the group.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  set_instance_health: function(instance_id,health_status,opt){
    var payload = {};
    payload.instance_id = instance_id;
    payload.health_status = health_status;

    payload = this.marge_param(payload,opt);
    var response = this.request("SetInstanceHealth", payload );
    return response;
  }, 
  /**
   * Suspends Auto Scaling processes for an Auto Scaling group. To suspend specific process types,
   * specify them by name with the <code>ScalingProcesses.member.N</code> parameter. To suspend all
   * process types, omit the <code>ScalingProcesses.member.N</code> parameter.
   * 
   * <p class="important"></p> 
   * Suspending either of the two primary process types, <code>Launch</code> or
   * <code>Terminate</code>, can prevent other process types from functioning properly. For more
   * information about processes and their dependencies, see <code>ProcessType</code>.
   *  
   * To resume processes that have been suspended, use <code>ResumeProcesses</code>.
   *
   * @param {String} auto_scaling_group_name (Required) The name or Amazon Resource Name (ARN) of the Auto Scaling group. [Constraints: The value must be between 1 and 1600 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]
   * @param opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>ScalingProcesses</code> - <code>string|array</code> - Optional - The processes that you want to suspend or resume, which can include one or more of the following:<ul><li>Launch</li><li>Terminate</li><li>HealthCheck</li><li>ReplaceUnhealthy</li><li>AZRebalance</li><li>AlarmNotifications</li><li>ScheduledActions</li><li>AddToLoadBalancer</li></ul>To suspend all process types, omit this parameter. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  suspend_processes: function(auto_scaling_group_name,opt){
    var payload = {};
    payload.auto_scaling_group_name = auto_scaling_group_name;

    payload = this.marge_param(payload,opt);
    var response = this.request("SuspendProcesses", payload );
    return response;
  }, 
  /**
   * Terminates the specified instance. Optionally, the desired group size can be adjusted.
   * 
   * <p class="note">
   * This call simply registers a termination request. The termination of the instance cannot happen
   * immediately.
   * </p>
   *
   * @param {String} instance_id (Required) The ID of the EC2 instance to be terminated. [Constraints: The value must be between 1 and 16 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]
   * @param boolean $should_decrement_desired_capacity (Required) Specifies whether (<em>true</em>) or not (<em>false</em>) terminating this instance should also decrement the size of the <code>AutoScalingGroup</code>.
   * @param opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  terminate_instance_in_auto_scaling_group: function(instance_id,should_decrement_desired_capacity,opt){
    var payload = {};
    payload.instance_id = instance_id;
    payload.should_decrement_desired_capacity = should_decrement_desired_capacity;

    payload = this.marge_param(payload,opt);
    var response = this.request("TerminateInstanceInAutoScalingGroup", payload );
    return response;
  }, 
  /**
   * Updates the configuration for the specified <code>AutoScalingGroup</code>.
   * 
   * <p class="note"></p> 
   * To update an Auto Scaling group with a launch configuration that has the
   * <code>InstanceMonitoring</code> flag set to <code>False</code>, you must first ensure that
   * collection of group metrics is disabled. Otherwise, calls to
   * <code>UpdateAutoScalingGroup</code> will fail. If you have previously enabled group metrics
   * collection, you can disable collection of all group metrics by calling
   * <code>DisableMetricsCollection</code>.
   *  
   * The new settings are registered upon the completion of this call. Any launch configuration
   * settings take effect on any triggers after this call returns. Triggers that are currently in
   * progress aren't affected.
   * 
   * <p class="note">
   * If the new values are specified for the <em>MinSize</em> or <em>MaxSize</em> parameters, then
   * there will be an implicit call to <code>SetDesiredCapacity</code> to set the group to the new
   * <em>MaxSize</em>. All optional parameters are left unchanged if not passed in the request.
   * </p>
   *
   * @param {String} auto_scaling_group_name (Required) The name of the Auto Scaling group. [Constraints: The value must be between 1 and 1600 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]
   * @param opt (Optional) An associative array of parameters that can have the following keys: <ul>
   *   <li><code>LaunchConfigurationName</code> - <code>string</code> - Optional - The name of the launch configuration. [Constraints: The value must be between 1 and 1600 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *   <li><code>MinSize</code> - <code>integer</code> - Optional - The minimum size of the Auto Scaling group.</li>
   *   <li><code>MaxSize</code> - <code>integer</code> - Optional - The maximum size of the Auto Scaling group.</li>
   *   <li><code>DesiredCapacity</code> - <code>integer</code> - Optional - The desired capacity for the Auto Scaling group.</li>
   *   <li><code>DefaultCooldown</code> - <code>integer</code> - Optional - The amount of time, in seconds, after a scaling activity completes before any further trigger-related scaling activities can start.</li>
   *   <li><code>AvailabilityZones</code> - <code>string|array</code> - Optional - Availability zones for the group. Pass a string for a single value, or an indexed array for multiple values.</li>
   *   <li><code>HealthCheckType</code> - <code>string</code> - Optional - The service of interest for the health status check, either "EC2" for Amazon EC2 or "ELB" for Elastic Load Balancing. [Constraints: The value must be between 1 and 32 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *   <li><code>HealthCheckGracePeriod</code> - <code>integer</code> - Optional - The length of time that Auto Scaling waits before checking an instance's health status. The grace period begins when an instance comes into service.</li>
   *   <li><code>PlacementGroup</code> - <code>string</code> - Optional - The name of the cluster placement group, if applicable. For more information, go to <a href="http://docs.amazonwebservices.com/AWSEC2/latest/UserGuide/using_cluster_computing.html">Using Cluster Instances</a> in the Amazon EC2 User Guide. [Constraints: The value must be between 1 and 255 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *   <li><code>VPCZoneIdentifier</code> - <code>string</code> - Optional - The subnet identifier for the Amazon VPC connection, if applicable. You can specify several subnets in a comma-separated list. When you specify <code>VPCZoneIdentifier</code> with <code>AvailabilityZones</code>, ensure that the subnets' Availability Zones match the values you specify for <code>AvailabilityZones</code>. [Constraints: The value must be between 1 and 255 characters, and must match the following regular expression pattern: <code>[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*</code>]</li>
   *   <li><code>curlopts</code> - <code>array</code> - Optional - A set of values to pass directly into <code>curl_setopt()</code>, where the key is a pre-defined <code>CURLOPT_*</code> constant.</li>
   *   <li><code>returnCurlHandle</code> - <code>boolean</code> - Optional - A private toggle specifying that the cURL handle be returned rather than actually completing the request. This toggle is useful for manually managed batch requests.</li></ul>
   * @return CFResponse A <CFResponse> object containing a parsed HTTP response.
   */
  update_auto_scaling_group: function(auto_scaling_group_name,opt){
    var payload = {};
    payload.auto_scaling_group_name = auto_scaling_group_name;

    payload = this.marge_param(payload,opt);
    var response = this.request("UpdateAutoScalingGroup", payload );
    return response;
  }
}