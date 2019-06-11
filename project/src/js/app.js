var app = angular.module("testTask", []);

app.controller('productsCtrl', ['$scope', function ($scope) {
	
	$scope.users = [
		{
			"usertype" : "child",
			"img" : "item1",
			"price" : "3.20",
			"name" : "T-SHIRT",
			"options": ["Size", "S", "M", "L", "XL"]
		}
		,{
			"usertype" : "child",
			"img" : "item2",
			"price" : "13.30",
			"name" : "Pants FORCLAZ",
			"options": ["Size", "M", "XL"]
		}
		,{
			"usertype" : "men",
			"img" : "item1",
			"price" : "5.00",
			"name" : "T-SHIRT",
			"options": ["Size", "XL"]
		}
		,{
			"usertype" : "women",
			"img" : "item2",
			"price" : "3.21",
			"name" : "T-SHIRT",
			"options":  ["Size", "S", "M", "L", "XL"]
		}
		,{
			"usertype" : "women",
			"img" : "item3",
			"price" : "31",
			"name" : "backpack",
			"options": ["color", "red", "blue", "black"]
		}
		, {
			"usertype" : "other",
			"img" : "item3",
			"price" : "0",
			"name" : "car",
			"options": ["color", "red", "blue", "black"]
		}
  	];
    
    $scope.filter = {
            "men"   : true,
			"women" : true,
			"child" : false
    }
    
   $scope.filterByCategory  = function(user) {
       var displayUser;
       if( user.usertype != 'other' ){
           displayUser =  $scope.filter[user.usertype] || noFilter($scope.filter);    
       }
       
       return displayUser;
   };


    function noFilter(filterObj) {
      return Object.
        keys(filterObj).
        every(function (key) { return !filterObj[key]; });
    }                    

}]);



app.controller('menuCtrl', ['$scope', function ($scope) {
	
	$scope.data = {
		"footerMenu" : [
			{
				"name": "Credits",
				"link": "https://softswiss.com/",
				"title": "credits"
			},
			{
				"name": "Privacy",
				"link": "https://softswiss.com/",
				"title": "privacy"
			},
			{
				"name": "About",
				"link": "https://www.softswiss.com/about-us/",
				"title": "about us"
			},
			{
				"name": "Contact",
				"link": "https://www.softswiss.com/contact-us/",
				"title": "contact us"
			}
		]};

}]);