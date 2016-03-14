angular.module('starter.controllers', [])


.controller('InputCtrl', function($scope) {
    $scope.clear = function(){

      $('#Main').find('input').each(function () {
        $(this).val('');
      });

      $('#Main').find('textarea').each(function () {
        $(this).val('');
      });




    };


})

.controller('CalculationCtrl', function($scope) {


})



.controller('ScheduleCtrl', function($scope) {


})


.controller('GraphCtrl', function($scope) {})




  .controller('SettingsCtrl', function($scope) {})


.controller('SavedCtrl', function($scope) {});
