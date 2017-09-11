	(function($, doc) {
		
				var addresRresult = $('#addressResult')[0];
				$.init();
				$.ready(function() {
					//普通示例
					var JobPicker = new $.PopPicker();
					JobPicker.setData([{
						value: 'jy',
						text: '教育'
					}, {
						value: 'wh',
						text: '文化'
					}, {
						value: 'ys',
						text: '艺术'
					}, {
						value: 'by',
						text: '表演'
					}, {
						value: 'yl',
						text: '娱乐'
					}, {
						value: 'cm',
						text: '传媒'
					}, {
						value: 'mt',
						text: '模特'
					}, {
						value: 'gg',
						text: '广告'
					}, {
						value: 'xs', 
						text: '学生'
					}]);
					var showUserPickerButton = doc.getElementById('Occupation');
					var jobResult = doc.getElementById('JobResult');
					showUserPickerButton.addEventListener('tap', function(event) {
						JobPicker.show(function(items) {
							var jsonObj = items[0]
							jobResult.innerText=eval('jsonObj.'+'text'); 
							//返回 false 可以阻止选择框的关闭
							//return false;
						});
					}, false);
					//-----------------------------------------
					//级联示例
					var cityPicker = new $.PopPicker({
						layer: 2
					});
					cityPicker.setData(cityData);
					var showCityPickerButton = doc.getElementById('Address');
					var cityResult = doc.getElementById('cityResult');
					showCityPickerButton.addEventListener('tap', function(event) {
						cityPicker.show(function(items) {
							addressResult.innerText = items[0].text + " " + items[1].text;
							//返回 false 可以阻止选择框的关闭
							//return false;
						});
					}, false);
					
				});
			})(mui, document);