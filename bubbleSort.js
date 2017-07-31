var bSort = function(arr, opposite) {
    for (var j = 0; j < arr.length; ++j) {
        var control = true;
        for (var i = 0; i < arr.length -1; ++i) {
            if (!opposite) {
                //lowest to highest
                if (arr[i] > arr[i+1]) {
                    var assist = arr[i];
                    arr[i] = arr[i+1];
                    arr[i+1] = assist;
                    control = false;
                }
            } else {
                //highest to lowest
                if (arr[i] < arr[i+1]) {
                    var assist = arr[i];
                    arr[i] = arr[i+1];
                    arr[i+1] = assist;
                    control = false;
                }
            }
        }
    }
    return arr;
};

var A = [1, 3, 2, 4, 6, 5, 8, 7, 0, 9];
print('A = ['+A+'];\n\n');

println('bSort(A);\n//' + bSort(A));
//[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

println('bSort(A, true);\n//' + bSort(A, true));
//[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]