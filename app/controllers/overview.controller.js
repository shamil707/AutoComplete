
myApp.controller('overviewCtrl', function ($scope,$rootScope,mockDetailService) {
    
        
         
          mockDetailService.getData().then(function (data) {
               $scope.options =  data;
          });
          
          $scope.selectedValue   =  null;
   

      }
);
