var _ = require("lodash");
//疾病选择数据
var data = [{
      "name": "按部位选择",
      "data": [{
          "en":"head",
          "name": "头部",
          "data": [{
            "en":"h1",
            "name": "头痛"
          }, {
            "en":"h2",
            "name": "头晕"
          }]
      },
        {
            "en":"qugan",
            "name": "躯干",
            "data": [{
              "en":"q1",
              "name": "颈痛"
            }, {
              "en":"q2",
              "name": "腰痛"
            }, {
              "en":"q3",
              "name": "肩背痛"
            }, {
              "en":"q4",
              "name": "腰背痛"
            }, {
              "en":"q5",
              "name": "痛经"
            }, {
              "en":"q6",
              "name": "子宫肌瘤"
            }, {
              "en":"q7",
              "name": "内分泌紊乱"
            }]
          },
          {
              "en":"sizhi",
              "name": "四肢",
              "data": [{
                "en":"s1",
                "name": "肩痛"
              }, {
                "en":"s2",
                "name": "手臂痛"
              }, {
                "en":"s3",
                "name": "手臂麻"
              }, {
                "en":"s4",
                "name": "手肘痛"
              }, {
                "en":"s5",
                "name": "手指麻木"
              }, {
                "en":"s6",
                "name": "坐骨神经痛"
              }, {
                "en":"s7",
                "name": "腿痛"
              }, {
                "en":"s8",
                "name": "腿麻"
              }]
            }
          ]
      }, {
        "name": "按疾病（选择首字母排序）",
        "data": [{
          "name": "口腔溃疡"
        }, {
          "name": "颈椎病"
        }, {
          "name": "腰椎病"
        }, {
          "name": "坐骨神经痛"
        }, {
          "name": "痛经"
        }, {
          "name": "月经不调"
        }, {
          "name": "痤疮"
        }, {
          "name": "经期头疼症"
        }, {
          "name": "膝关节病"
        }, {
          "name": "肥胖症"
        }, {
          "name": "肩周炎"
        }, {
          "name": "肩袖"
        }, {
          "name": "网球肘（肱骨外上髁炎）"
        }, {
          "name": "类风湿关节炎"
        }, {
          "name": "中风"
        }, {
          "name": "更年期综合症"
        }]
      }, {
        "name": "按症状选择",
        "data": [{
          "name": "痰湿内阻"
        }, {
          "name": "气血亏虚"
        }, {
          "name": "肝郁气滞"
        }, {
          "name": "肝风内动"
        }, {
          "name": "脾气亏虚"
        }, {
          "name": "瘀血阻络"
        }, {
          "name": "气滞血瘀"
        }]
      }];

      var illData = {
        getData: function() {
          return adapter(data[0]);
        }
      }

      function adapter(inputdata) {
        // console.log(data['name']);
        var section = [];
        var row = [];
        var data = {};
        _.each(inputdata['data'], function(val, i) {
          section.push( val['en'] );
          rowIndex = [];
          data[val['en']] = val['name'];
          _.each(val['data'],function(rowdata,j) {
            rowIndex.push(rowdata['en']);
            data[val['en']+":"+rowdata['en']] = rowdata;
          });
          row.push(rowIndex);
        });
        return {section,row,data};
      }
      // console.log( illData.getData() );


      module.exports = illData;
