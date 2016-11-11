app.controller('MainCtrl', function ($scope, $http) {
    $scope.data = {};
console.log("MAIN");
})

 app.controller("GaugeChartCtrl", function($scope) {

    $scope.myChartObject = {};
    $scope.myChartObject.type = "Gauge";

    $scope.myChartObject.options = {
      width: 400,
      height: 200,
      redFrom: 0,
      redTo: 80,
      yellowFrom: 81,
      yellowTo: 89,
      greenFrom: 90,
      greenTo: 100,
      minorTicks: 5
    };

    $scope.myChartObject.data = [
      ['Label', 'Value'],
      ['Memory', 80],
      ['CPU', 55],
      ['Network', 68]
    ];
  });


  app.controller("GenericChartCtrl", function ($scope) {
    $scope.myChartObject = {};
    
    $scope.myChartObject.type = "BarChart";
    
    $scope.onions = [
        {v: "Onions"},
        {v: 3},
    ];

    $scope.myChartObject.data = {"cols": [
        {id: "t", label: "Topping", type: "string"},
        {id: "s", label: "Slices", type: "number"}
    ], "rows": [
        {c: [
            {v: "Mushrooms"},
            {v: 3},
        ]},
        {c: $scope.onions},
        {c: [
            {v: "Olives"},
            {v: 31}
        ]},
        {c: [
            {v: "Zucchini"},
            {v: 1},
        ]},
        {c: [
            {v: "Pepperoni"},
            {v: 2},
        ]}
    ]};

    $scope.myChartObject.options = {
        'title': 'How Much Pizza I Ate Last Night'
    };
});

app.controller('MyController', function ($scope) {
              $scope.myDataSource = {
             "chart": {
        "caption": "Customer Satisfaction Score",
        "subcaption": "Last week",
        "lowerLimit": "0",
        "upperLimit": "100",
        "theme": "fint"
    },
    "colorRange": {
        "color": [
            {
                "minValue": "0",
                "maxValue": "50",
                "code": "#e44a00"
            },
            {
                "minValue": "50",
                "maxValue": "75",
                "code": "#f8bd19"
            },
            {
                "minValue": "75",
                "maxValue": "100",
                "code": "#6baa01"
            }
        ]
    },
                "dials": {
        "dial": [
            {
                "value": "67"
            }
        ]
    }
              };
            });