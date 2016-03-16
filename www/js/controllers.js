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

    $(function() {
      $("#wk").click(function () {
        $(this).attr("disabled", "disabled");
        $("#bi-wk").removeAttr("disabled");
        $("#mo").removeAttr("disabled");
        $("#qtr").removeAttr("disabled");
        $("#yr").removeAttr("disabled");
      });

      // if you want first button to be disabled when second button is clicked
      $("#bi-wk").click(function () {
        $(this).attr("disabled", "disabled");
        $("#wk").removeAttr("disabled");
        $("#mo").removeAttr("disabled");
        $("#qtr").removeAttr("disabled");
        $("#yr").removeAttr("disabled");
      });

      $("#mo").click(function () {
        $(this).attr("disabled", "disabled");
        $("#wk").removeAttr("disabled");
        $("#bi-wk").removeAttr("disabled");
        $("#qtr").removeAttr("disabled");
        $("#yr").removeAttr("disabled");

      });

      $("#qtr").click(function () {
        $(this).attr("disabled", "disabled");
        $("#wk").removeAttr("disabled");
        $("#bi-wk").removeAttr("disabled");
        $("#mo").removeAttr("disabled");
        $("#yr").removeAttr("disabled");
      });

      $("#yr").click(function () {
        $(this).attr("disabled", "disabled");
        $("#wk").removeAttr("disabled");
        $("#bi-wk").removeAttr("disabled");
        $("#mo").removeAttr("disabled");
        $("#qtr").removeAttr("disabled");
      });
    });









    })




.controller('CalculationCtrl', function($scope) {


})



.controller('ScheduleCtrl', function($scope) {


})


.controller('GraphCtrl', function($scope) {})




  .controller('SettingsCtrl', function($scope) {
    $(function() {

      $("#none").click(function () {
        $( "#payment" ).text( "Payment:___");
        $(this).attr("disabled", "disabled");
        $("#usd").removeAttr("disabled");
        $("#eur").removeAttr("disabled");
        $("#gbp").removeAttr("disabled");
        $("#yen").removeAttr("disabled");
      });

      // if you want first button to be disabled when second button is clicked
      $("#usd").click(function () {
        $(this).attr("disabled", "disabled");
        $("#none").removeAttr("disabled");
        $("#eur").removeAttr("disabled");
        $("#gbp").removeAttr("disabled");
        $("#yen").removeAttr("disabled");
      });

      $("#eur").click(function () {
        $(this).attr("disabled", "disabled");
        $("#none").removeAttr("disabled");
        $("#usd").removeAttr("disabled");
        $("#gbp").removeAttr("disabled");
        $("#yen").removeAttr("disabled");

      });

      $("#gbp").click(function () {
        $(this).attr("disabled", "disabled");
        $("#none").removeAttr("disabled");
        $("#usd").removeAttr("disabled");
        $("#eur").removeAttr("disabled");
        $("#yen").removeAttr("disabled");
      });

      $("#yen").click(function () {
        $(this).attr("disabled", "disabled");
        $("#none").removeAttr("disabled");
        $("#usd").removeAttr("disabled");
        $("#eur").removeAttr("disabled");
        $("#gbp").removeAttr("disabled");
      });
    });



  })


.controller('SavedCtrl', function($scope) {



  });
