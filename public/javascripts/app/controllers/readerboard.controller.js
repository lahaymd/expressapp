(function() {
	angular.module('myApp').
		controller('ReaderboardController',  function($document, $log){
			var vm = this;
			

			vm.clear = function() {
				$document.find('textarea').val('');
				
			}

			vm.areaOne = function() {
				 vm.letters = document.getElementById('one').value.replace(/\s+/g, '').split('').sort()

					.map(function(letter) {
						return letter.toLowerCase().match(/\S/g);
					})
					.reduce(function(last, now) {
						return last.concat(now)
					},[])
					.reduce(function(last, now) {
						var index = last[0].indexOf(now);
						if(index === -1) {
							last[0].push(now);
							last[1].push(1)
						} else {
							last[1][index] += 1;
						}
						return last
					}, [[], []])
					.reduce(function(last, now, index, context) {
						var zip = [];
						last.forEach(function(word, i) {
							zip.push([word, context[1][i]])
						});
						return zip;
					}) 
					console.log('letters',vm.letters)



				vm.lettersTwo = document.getElementById('two').value.replace(/\s+/g, '').split('').sort()

					.map(function(letter) {
						return letter.toLowerCase().match(/\S/g);
					})
					.reduce(function(last, now) {
						return last.concat(now)
					},[])
					.reduce(function(last, now) {
						var index = last[0].indexOf(now);
						if(index === -1) {
							last[0].push(now);
							last[1].push(1)
						} else {
							last[1][index] += 1;
						}
						return last
					}, [[], []])
					.reduce(function(last, now, index, context) {
						var zip = [];
						last.forEach(function(word, i) {
							zip.push([word,context[1][i]])
						});
						return zip;
					})

					console.log('lettersTwo',vm.lettersTwo)					


var test = vm.letters.filter(function(item, index, arr) {
				 foo = this.map(function(i){
					return i[0] 
				}) 
				 console.log('foo', foo)
				 console.log(foo.indexOf(item[0]))
				
				 return foo.indexOf(item[0]) >= 0 || item;
			}, vm.lettersTwo );

 console.log('test: ',test) 

var test2 = vm.lettersTwo.filter(function(item, index, arr) {
				 bar = this.map(function(i){
					return i[0]
				})
				
				 return bar.indexOf(item[0]) >= 0 ||item;
			}, vm.letters);

 console.log('test2: ',test2) 



// vm.difference = test.map(function(item, index, array){
// 				var reformatted = {};
// 				console.log('item',item[1])
// 				console.log('this',this[1])
// 				reformatted[item[0]] = (item[1] - this[index][1])
// 				return reformatted;

				
// }, test2)

vm.letterDifference = test2.map(function(item, index, array){
console.log(item[1])
console.log(this.length)
console.log((((this.length > 0 && this[index] !== undefined && this[index].indexOf(item[0]) !== -1)) ?  this[index][1] : 0))
// console.log(this[index].indexOf(item[0]))
// console.log(this[index][1])
							var obj = {};
							if(  (((this.length > 0 && this[index] !== undefined && this[index].indexOf(item[0]) !== -1)) ?  this[index][1] : 0)){
								obj[item[0]] = item[1] -  ((this.length > 0 && this[index] !== undefined && this[index].indexOf(item[0]) !== -1 ) ? this[index][1] : 0) 

							}else{
								obj[item[0]] = item[1]
							}
console.log(obj)
							return obj;
},test)




// vm.letterDifference = test2.map(function(item, index, array){
// console.log(item[1])
// console.log(this.length)
// console.log((((this.length > 0 && this[index] !== undefined && this[index].indexOf(item[0]) !== -1)) ?  this[index][1] : 0))
// // console.log(this[index].indexOf(item[0]))
// // console.log(this[index][1])
// 							var obj = {};
// 							if(item[1] >  (((this.length > 0 && this[index] !== undefined && this[index].indexOf(item[0]) !== -1)) ?  this[index][1] : 0)){
// 								obj[item[0]] = item[1] -  ((this.length > 0 && this[index] !== undefined && this[index].indexOf(item[0]) !== -1 ) ? this[index][1] : 0) 

// 							}else{
// 								obj
// 							}
// console.log(obj)
// 							return obj;
// },test)

				}
		})
})()