const usersThree = [
  {
    first_name: 'Mike',
    location: 'London'
  },
  {
    first_name: 'Tim',
    location: 'US'
  },
  {
    first_name: 'John',
    location: 'Australia'
  }
];
let result2= usersThree.map(function(last){
	
	return last.first_name +" " + "lives in" +" "+ last.location;
});
document.write(result2);
document.write("<br>");