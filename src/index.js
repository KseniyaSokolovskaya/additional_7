module.exports = function solveSudoku(matrix) {
  var possibleValues = [1,2,3,4,5,6,7,8,9];
  var possibleCell;
  for (var row = 0; row < 9; row++) {
  	for(var col = 0; col < 9; col++){
  		if(matrix[row][col] === 0){
  			var gridRow = Math.floor(row / 3) *3;  			
  			var gridCol = Math.floor(col / 3) *3;
  			var grid = [];
  			for (var i = gridRow; i < (gridRow + 3); i++) {
  				for (var j = gridCol; j < (gridCol + 3); j++) {
  					grid.push(matrix[i][j]);
  				}
  			}
  			 var gridRowColValues = grid;
         for (var i = 0; i < matrix.length; i++) {
          gridRowColValues.push(matrix[row][i]);
          gridRowColValues.push(matrix[i][col]);
         }
        var res = possibleValues.filter(f => !gridRowColValues.includes(f));
        var result;
        for (var i = 0; i < res.length; i++) {
          matrix[row][col] = res[i];
          result = solveSudoku(matrix);
          if(result != false){
            return result}
             
        } 
        matrix[row][col] = 0;
        return false;
      }
  	}
  }
  return matrix;
}

