# Bluemix Garage CHHS Prototype Overview


## Running the app locally
To install and run the prototype on another machine do the following:
* Download node.js from https://nodejs.org/ 
* Update npm if required (on Mac run ```sudo npm install npm -g```) 
* Download the application from Github (git clone or download zip file and unzip) 
* Open a terminal window and change to the root folder of the application 
* Run ```npm install``` in the root folder of the application 
* Run ```npm start```
* Open a browser and point URL displayed upon application start up

## Running the app on Bluemix
[![Deploy to Bluemix](https://bluemix.net/deploy/button.png)](https://bluemix.net/deploy)

## Troubleshooting

Tmhe primary source of debugging information for your Bluemix app is the logs. To see them, run the following command using the Cloud Foundry CLI:

  ```
  $ cf logs <application-name> --recent
  ```
For more detailed information on troubleshooting your application, see the [Troubleshooting section](https://www.ng.bluemix.net/docs/troubleshoot/tr.html) in the Bluemix documentation.
 
 
# Bluemix Garage Method
We used the IBM Bluemix Garage agile development methodology to build this prototype in accordance with the guidelines of the RFI. See: [Devops Method](https://www.ibm.com/devops/method)
 
## Sprintly to build stories
 
We developed a use case and then employed the [Mural] (https://mural.co/) tool to build personas, user stories and empathy maps to guide design and development activities.

The prototype was developed using responsive design techniques and is capable of working on desktop, laptop, and mobile browsers. It was developed using AngularJS and Angular Material which provides a set of reusable, well-tested, and accessible UI components based on Google’s Material Design Specification (a specification for a unified system of visual, motion, and interaction design that adapts across different devices and different screen sizes).
 
 
## Automated Testing
 
We used the Jasmine behavior-driven development framework with the Karma test runner (for automated unit testing). You can run ```npm test``` and ```npm run test-integration``` to run them.
 
 
## Devops Pipleline
 
IBM Continuous Delivery Pipeline for Bluemix is used to automated builds and deployment to support continuous integration and delivery. The DevOps pipeline is set up such that code changes delivered to the Github repositories are automatically built, tested and deployed to the Bluemix Cloud Foundry runtime. See: https://console.ng.bluemix.net/docs/services/DeliveryPipeline/index.html
 
 
## Setup or used continuous monitoring
 
The Bluemix platform continuously monitors the health of the application and restarts it if required. It provides tools to view/stream application logs and provides services such as Monitoring and Analytics and Alert Notification, Auto-scaling for handling spikes in traffic, and the use of third party services for external monitoring. These have not been set up for the prototype application but are recommended for production deployments. 
See: https://www.ibm.com/devops/method/content/manage/practice_automated_monitoring/
