<h1>Readme for CHHS RFI #75001</h1>

<p>The Git repository: <a href="http://github.com/ibmbluemixgarage/angular-healthcare">http://github.com/ibmbluemixgarage/angular-healthcare</a>.</p>

<p>The deployed prototype: <a href="http://angular-healthcare.mybluemix.net/#/">http://angular-healthcare.mybluemix.net/#/</a>. </p>

<p>IBM used our Bluemix Garage agile development methodology to build this prototype in accordance with the guidelines of the RFI. See: <a href="https://www.ibm.com/devops/method">https://www.ibm.com/devops/method</a>. </p>

<ol>
<li><p><strong><em>Assigned one leader and gave that person authority and responsibility and held that person
accountable for the quality of the prototype submitted.</em></strong></p>

<p>IBM assigned a single person as the product manager for this prototype development effort.</p></li>
<li><p><strong><em>Assembled a multidisciplinary and collaborative team that includes, at a minimum, five of the labor categories as identified in Attachment C.</em></strong></p>

<p>Our team consisted of 6 core members: a product manager, a technical architect, a front-end developer, a back-end developer, and two interaction designers.</p></li>
<li><p><strong><em>Understood what people needed by including people in the prototype development and design process.</em></strong></p>

<p>IBM used our Health and Human Services Subject Matter Experts to act as our users for this effort.</p></li>
<li><p><strong><em>Used at least three “human-centered design” techniques or tools.</em></strong></p>

<p>We developed a use case and then employed Mural (<a href="https://mural.co/">https://mural.co/</a> - for personas, empathy maps) and Moqup (<a href="https://moqups.com/">https://moqups.com/</a>- for wireframes) to guide design and development activities.</p></li>
<li><p><strong><em>Created or used a design style guide and/or a pattern library.</em></strong></p>

<p>We used Google&#39;s Materials design language (<a href="https://design.google.com/resources/">https://design.google.com/resources/</a>) as our style guide. </p></li>
<li><p><strong><em>Performed usability tests with people.</em></strong></p>

<p>We performed usability tests with users (SMEs) to refine the design and functionality of the prototype.</p></li>
<li><p><strong><em>Used an iterative approach, where feedback informed subsequent work or versions of the prototype.</em></strong></p>

<p>The prototype was developed using an XP (eXtreme Programming) based Agile methodology. Specifically, the prototype used the following:</p>

<ol>
<li>   One week iterations.</li>
<li>   Small user stories pulled from continuous backlog.</li>
<li>   Playbacks with product manager and designer.</li>
<li>   Pair programming.</li>
<li>   Test-driven development.</li>
<li>   Continuous integration/continuous delivery.</li>
</ol></li>
<li><p><strong><em>Created a prototype that works on multiple devices, and presents a responsive design.</em></strong></p>

<p>The prototype was developed using responsive design techniques and is capable of working on desktop, laptop, and mobile browsers. It was developed using AngularJS and Angular Material which provides a set of reusable, well-tested, and accessible UI components based on Google’s Material Design Specification (a specification for a unified system of visual, motion, and interaction design that adapts across different devices and different screen sizes).</p></li>
<li><p><strong><em>Used at least five modern and open-source technologies, regardless of architectural layer.</em></strong></p>

<p>The prototype is developed using Node.js, AngularJS, Angular Material, HTML5, CSS3, Github, and Jasmine open-source technologies.</p></li>
<li><p><strong><em>Deployed the prototype on an IaaS or PaaS provider, and indicated which provider they used.</em></strong></p>

<p>The prototype is deployed on IBM’s Bluemix Platform, an open-standards, cloud-based platform for building, testing, running, and managing applications. On Bluemix, mobile and web developers can easily assemble existing services from IBM or third-party providers that run on 3 key open compute technologies: Cloud Foundry, Docker, and OpenStack. Bluemix facilitates and accelerates the provisioning of cloud infrastructure (storage, network, clustering, virtualization, etc.) so development teams can focus of what really matters: delivering value to their organizations.</p></li>
<li><p><strong><em>Developed automated unit tests for their code.</em></strong></p>

<p>We used the Jasmine behavior-driven development framework with the Karma test runner (for automated unit testing).</p></li>
<li><p><strong><em>Setup or used a continuous integration system to automate the running of tests and continuously deployed their code to their IaaS or PaaS provider.</em></strong></p>

<p>IBM Continuous Delivery Pipeline for Bluemix is used to automated builds and deployment to support continuous integration and delivery. The DevOps pipeline is set up such that code changes delivered to the Github repositories are automatically built, tested and deployed to the Bluemix Cloud Foundry runtime. See: <a href="https://console.ng.bluemix.net/docs/services/DeliveryPipeline/index.html">https://console.ng.bluemix.net/docs/services/DeliveryPipeline/index.html</a></p></li>
<li><p><strong><em>Setup or used configuration management.</em></strong></p>

<p>The Bluemix PaaS uses the configuration management system built into Cloud Foundry that automatically provide and provision runtime containers and middleware services such as the Node.js servers and modules required by the prototype application. Node.js packages required by the application are defined in package.json and deployment properties such as application name, route, memory requirements, etc. are defined in the manifest.yml file.</p></li>
<li><p><strong><em>Setup or used continuous monitoring.</em></strong></p>

<p>The Bluemix platform continuously monitors the health of the application and restarts it if required. It provides tools to view/stream application logs and provides services such as Monitoring and Analytics and Alert Notification, Auto-scaling for handling spikes in traffic, and the use of third party services for external monitoring. These have not been set up for the prototype application but are recommended for production deployments. 
See: <a href="https://www.ibm.com/devops/method/content/manage/practice_automated_monitoring/">https://www.ibm.com/devops/method/content/manage/practice_automated_monitoring/</a></p></li>
<li><p><strong><em>Deployed their software in a container (i.e., utilized operating-system-level virtualization).</em></strong></p>

<p>Bluemix automatically deploys applications by creating a “droplet” (Cloud Foundry unit of execution) for the application, selecting a Droplet Execution Agent (DEA) to run the application and starting the application on the selected DEA. The DEA provides a container environment for the application to run in isolation from other applications running on the platform.  Cloud Foundry run-times provide an abstraction layer such that developers do not have to worry about infrastructure, operating system, virtualization, and application servers. Developers can focus on building their applications. </p></li>
<li><p><strong><em>Provided sufficient documentation to install and run their prototype on another machine.</em></strong></p>

<p>To install and run the prototype on another machine do the following:</p>

<ol>
<li>   Download node.js from <a href="https://nodejs.org/">https://nodejs.org/</a>.</li>
<li>   Update npm if required (on Mac run `sudo npm install npm -g`).</li>
<li>   Download the application from Github (git clone or download zip file and unzip).</li>
<li>   Open a terminal window and change to the root folder of the application.</li>
<li>   Run `npm install` in the root folder of the application.</li>
<li>   Run `npm start`.</li>
<li>   Open a browser and point URL displayed upon application start up.</li>
</ol></li>
<li><p><strong><em>Prototype and underlying platforms used to create and run the prototype are openly licensed and free of charge.</em></strong></p>

<p>All the technologies used to develop the prototype application are open-source technologies. While the prototype application was developed on IBM’s Bluemix platform, the app can be deployed on non-Bluemix environments including desktops/laptops, VMs and Docker containers in other cloud environments. The app is freely available under the Apache v2.0 license. </p></li>
</ol>
