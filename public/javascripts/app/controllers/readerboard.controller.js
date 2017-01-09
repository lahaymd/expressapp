(function() {
	angular.module('myApp').
		controller('ReaderboardController',  function($document, $log, $timeout){
			var vm = this;

			vm.isVowel = function(foo) {
				var vowel = ['a','e','i','o','u']
				if(vowel.indexOf(foo) !== -1){
					
					return 'green';
				}else { 
					return 'pink';
					
				}
			}


			vm.highest = function(number){
				console.log(number);
				return Math.max(...number);
			}
			
			

			vm.clear = () => $document.find('textarea').val('');
			

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
				var foo = this.map(function(i){
					return i[0] 
				}) 
				 console.log('foo', foo)
				 console.log(foo.indexOf(item[0]))
				
				 return foo.indexOf(item[0]) >= 0 || item;
			}, vm.lettersTwo );

 console.log('test: ',test) 

var test2 = vm.lettersTwo.filter(function(item, index, arr) {
				var bar = this.map(function(i){
					return i[0]
				})
				
				 return bar.indexOf(item[0]) >= 0 ||item;
			}, vm.letters);

 console.log('test2: ',test2) 

vm.letterDifference = vm.lettersTwo.map(function(item, index, array){

console.log('item', item)
console.log('index', index)
console.log('array', array)
console.log('this[index]', this[index])
console.log('this', this)
							var thisMapped= this.map(function(i, idx, arr) {
							  	return i[0]
							  })
							  	console.log('thisMapped', thisMapped)
							var thisMappedFindIndex =thisMapped.findIndex(function(i, idx, arr){
								return i === item[0];
							});
							console.log(thisMappedFindIndex)
							var obj = {};
							  if( this.length > 0 && thisMapped.indexOf(item[0] !== -1) && thisMappedFindIndex !== -1) {
								obj[item[0]] =  item[1] - this[thisMappedFindIndex][1];
							} else {
							
								obj[item[0]] = item[1]
							}
							
console.log('thisMappedFindIndex',thisMappedFindIndex)
console.log('obj', obj)
							return obj;
},vm.letters)


				}
		})
})()