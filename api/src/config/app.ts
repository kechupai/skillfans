export default {
  port: process.env.HTTP_PORT || 8080,
  baseUrl: process.env.BASE_URL || 'http://ec2-18-222-228-243.us-east-2.compute.amazonaws.com'// 'http://localhost:9000' //
};
