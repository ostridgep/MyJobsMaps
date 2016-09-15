/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var mapmode=""
var map_x="";
var map_y="";
 var handleOpenURL = function(url) {
        
            checkCall(url)
        };
var caller=""
function closeTheApp(val){
	window.plugins.clipboard.copy(val)
	if (navigator.app) {
		navigator.app.exitApp();
		}
		else if (navigator.device) {
		  navigator.device.exitApp();
		}
		else {
		          window.close();
		}
}

function checkCall(url){

	
   
    	
      		      if (url.indexOf('myjobsmap://' > -1)) {
		    	  url_parameters=url.split("?")
		    	  subprameters=url_parameters[1].split("=")
		    	  if(subprameters[0]=="MYJOBS")
		    	  	{
		    		 functions=subprameters[1].split("|")
		    		 mapmopde=subprameters[1];
		    		 alert(mapmode)
		    		 if(functions[0]=="plotjob") {
		    			 
		    				 may_x=functions[1]
		    			 	 may_x=functions[2]
		    		 }
		    		  }
		    	  
		    	  
		    	  
		       
		      }else{
		    	  alert("Not a MYJOBS CAll")
		      }
    }  



function openMap(){
	checkPassedParams();
	location.href='GoogleMapsGetLocation.html'
}