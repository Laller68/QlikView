/*! qliksense-orgchart-extension - v0.1.0 - 2015-01-08 14:01 */requirejs.config({shim:{"extensions/com-qliktech-orgchart/libs/qs-orgchart":{deps:["extensions/com-qliktech-orgchart/libs/d3.min"]}}}),define(["jquery","./orgchart-properties","text!./orgchart.css","./libs/qs-orgchart"],function(a,b,c,d){"use strict";a("<style>").html(c).appendTo("head");var e=new d;return{initialProperties:{version:1,qHyperCubeDef:{qDimensions:[],qMeasures:[],qInitialDataFetch:[{qWidth:10,qHeight:1e3}]}},definition:b,snapshot:{canTakeSnapshot:!0},paint:function(b,c){b.empty(),e.initialize(b[0],{fieldTarget:"managerID",fieldSource:"employeeID",tooltipTpl:function(){return"<div></div>"},image_default:"/extensions/com-qliktech-orgchart/person.png",width:b.width(),height:b.height(),url_pathname:window.location.pathname});var d=c.qHyperCube.qDataPages,f=d[0];a.each(this.backendApi.getDimensionInfos(),function(a,b){}),a.each(this.backendApi.getMeasureInfos(),function(a,b){});var g={nodes:[],links:[]},h=[];f&&f.qMatrix&&(a.each(f.qMatrix,function(a,b){var c=b[0],d=b[2];c.qText&&-1===h.indexOf(c.qText)&&(h.push(c.qText),g.nodes.push({employeeID:c.qText,color:d?d.qText:null}))}),a.each(f.qMatrix,function(a,b){var c=b[1];c.qText&&-1===h.indexOf(c.qText)&&(h.push(c.qText),g.nodes.push({employeeID:c.qText}))}),a.each(f.qMatrix,function(a,b){var c=b[0],d=b[1];c.qText&&d.qText&&g.links.push({source:h.indexOf(c.qText),target:h.indexOf(d.qText)})})),e.setValues(g,"")}}});