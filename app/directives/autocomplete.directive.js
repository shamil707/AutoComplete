'use strict';

  myApp.directive('autocomplete', function () {
     return {
            templateUrl: 'partials/template/autoSuggetions.html',
            restrict:'E',
            scope: {
              options      : '=',
              selectedItem : '='
            },
            link:function(scope,elem,attrs){
                 scope.showSearch = false;
                
              
                scope.showToolTip =  false;
                
                scope.selected  = function(item){
                    scope.selectedItem   =   item;
                    scope.search = null;
                    scope.showSearch = false;
                }
                
                scope.setPositionAttribute =  function(event){
                   if (event) {
                        scope.top  = event.clientY;
                        scope.left = event.clientX;
                   }
                }
            },
            controller: function($scope, $element){
                     
            }

     };
   
  });