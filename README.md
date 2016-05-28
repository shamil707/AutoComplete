  
  Information -
  
  		To use the feature please add the below line in html -
  
			  	<autocomplete options="options" selected-item = "selectedValue"></autocomplete>
		  
		options is the data set which we wants to display in the Autocomplete
  
		selected-item(Model Value) is the user selected value from the Autocomplete

		Declare $scope.selectedValue = null;
  
  
  Dependency File..
  
		 Template url - autoSuggetions.html
		  
		 Directive    - autocomplete.directive.js
		  
		 css          - app.css
  
  Installation - 
  
  This POC is a Angular JS directive with AutoComplete feature
			
	Included : AngularJS,Javascript,CSS3,HTML5,Bootstrap,NodeJS,Karma

  Clone AutoComplete

      Clone the AutoComplete repository using git:

      git clone https://github.com/shamil707/AutoComplete.git
    
  Run the Application

	We have preconfigured the project with a simple development web server. The simplest way to start this server is:
	(It will install the bower packages and node modules which is needed for this project to run)
	
	cd AutoComplete
	
	npm start
	
	Now browse to the app at http://localhost:8000/index.html.
	
  Run the Application (Manually)

	Download the node modules from the below url, extract it paste inside the TennisBookingApplication Folder(Root Folder)
	
	https://github.com/shamil707/node_modules  
        
        cd TennisBookingApplication
        
	http-server -a localhost -p 8000
	
	Now browse to the app at http://localhost:8000/index.html.

 Contact

	For more information on the POC please contact me with shamil707@gmail.com
