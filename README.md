# Bluemix Garage CHHS Prototype


## Running the app on Bluemix
* To install and run the prototype on another machine do the following:
* Download node.js from https://nodejs.org/ 
* Update npm if required (on Mac run ```sudo npm install npm -g```) 
* Download the application from Github (git clone or download zip file and unzip) 
* Open a terminal window and change to the root folder of the application 
* Run ```npm install``` in the root folder of the application 
* Run ```npm start```
* Open a browser and point URL displayed upon application start up
 
 
## Bluemix Garage Method
 We used the IBM Bluemix Garage agile development methodology to build this prototype in accordance with the guidelines of the RFI. See: [Devops Method](https://www.ibm.com/devops/method)
 
 
 a. Assigned one leader and gave that person authority and responsibility and held that person
 accountable for the quality of the prototype submitted
 
 
 We assigned a single person as the product manager for this prototype development effort.
 
 
 b. Assembled a multidisciplinary and collaborative team that includes, at a minimum, five of the labor categories as identified in Attachment C.
 
 
 Our team consisted of 6 core members: a product manager, a technical architect, a front-end developer, a back-end developer, and two interaction designers.
 
 
 c. Understood what people needed by including people in the prototype development and design process
 
 
 We used IBM Subject Matter Experts in the HHS realm to act as our users in this effort.
 
 
 d. Used at least three “human-centered design” techniques or tools
 
 
 We developed a use case and then employed the Mural (https://mural.co/) tool to build personas, user stories and empathy maps to guide design and development activities.
 
 
 e. Created or used a design style guide and/or a pattern library
 
 
 We used the IBM Design Thinking (http://www.ibm.com/design/thinking/) principles in building this prototype.
 
 
 f. Performed usability tests with people
 
 
 We performed usability tests with users (IBM SMEs) to refine the design and functionality of the prototype.
 g. Used an iterative approach, where feedback informed subsequent work or versions of the prototype
 
 
 The prototype was developed using an XP (eXtreme Programming) based Agile methodology. Specifically, the prototype used the following:
 
 One week iterations 
 Small user stories pulled from continuous backlog 
 Playbacks with product manager and designer 
 Pair programming 
 Test-driven development 
 Continuous integration/continuous delivery
 
 h. Created a prototype that works on multiple devices, and presents a responsive design
 
 The prototype was developed using responsive design techniques and is capable of working on desktop, laptop, and mobile browsers. It was developed using AngularJS and Angular Material which provides a set of reusable, well-tested, and accessible UI components based on Google’s Material Design Specification (a specification for a unified system of visual, motion, and interaction design that adapts across different devices and different screen sizes).
 
 i. Used at least five modern and open-source technologies, regardless of architectural layer
 
 The prototype is developed using Node.js, AngularJS, Angular Material, HTML5, CSS3, Github, and Jasmine open-source technologies.
 j. Deployed the prototype on an IaaS or PaaS provider, and indicated which provider they used
 The prototype is deployed on IBM’s Bluemix Platform, an open-standards, cloud-based platform for building, testing, running, and managing applications. On Bluemix, mobile and web developers can easily assemble existing services from IBM or third-party providers that run on 3 key open compute technologies: Cloud Foundry, Docker, and OpenStack. Bluemix facilitates and accelerates the provisioning of cloud infrastructure (storage, network, clustering, virtualization, etc.) so development teams can focus of what really matters: delivering value to their organizations.
 
 k. Developed automated unit tests for their code
 
 We used the Jasmine behavior-driven development framework with the Karma test runner (for automated unit testing).
 
 l. Setup or used a continuous integration system to automate the running of tests and continuously deployed their code to their IaaS or PaaS provider.
 
 IBM Continuous Delivery Pipeline for Bluemix is used to automated builds and deployment to support continuous integration and delivery. The DevOps pipeline is set up such that code changes delivered to the Github repositories are automatically built, tested and deployed to the Bluemix Cloud Foundry runtime. See: https://console.ng.bluemix.net/docs/services/DeliveryPipeline/index.html
 
 m. Setup or used configuration management
 
 The Bluemix PaaS uses configuration management systems such as Chef and Puppet that automatically provide and provision runtime containers and middleware services such as the Node.js servers and modules required by the prototype application. Node.js packages required by the application are defined in package.json and Bluemix deployment properties such as application name, route, memory requirements, etc. are defined in the manifest.yml file.
 
 n. Setup or used continuous monitoring
 
 The Bluemix platform continuously monitors the health of the application and restarts it if required. It provides tools to view/stream application logs and provides services such as Monitoring and Analytics and Alert Notification, Auto-scaling for handling spikes in traffic, and the use of third party services for external monitoring. These have not been set up for the prototype application but are recommended for production deployments. 
 See: https://www.ibm.com/devops/method/content/manage/practice_automated_monitoring/
 o. Deployed their software in a container (i.e., utilized operating-system-level virtualization)
 
 Bluemix automatically deploys applications by creating a “droplet” (Cloud Foundry unit of execution) for the application, selecting a Droplet Execution Agent (DEA) to run the application and starting the application on the selected DEA.  The DEA provides a container environment for the application to run in isolation from other applications running on the platform.  Cloud Foundry run-times provide an abstraction layer such that developers do not have to worry about infrastructure, operating system, virtualization, and application servers. Developers can focus on building their applications. 
 
 p. Provided sufficient documentation to install and run their prototype on another machine
 
 To install and run the prototype on another machine do the following:
 Download node.js from https://nodejs.org/ 
 Update npm if required (on Mac run “sudo npm install npm -g”) 
 Download the application from Github (git clone or download zip file and unzip) 
 Open a terminal window and change to the root folder of the application 
 Run “npm install” in the root folder of the application 
 Run “npm start” 
 Open a browser and point URL displayed upon application start up
 
 q. Prototype and underlying platforms used to create and run the prototype are openly licensed and free of charge
 
 All the technologies used to develop the prototype application are open-source technologies. While the prototype application is deployed on IBM’s Bluemix platform which requires payment (subscription or PAYG) beyond certain free monthly allotments for compute and other services used, it can run on non-Bluemix environments including desktops/laptops, VMs and Docker containers.