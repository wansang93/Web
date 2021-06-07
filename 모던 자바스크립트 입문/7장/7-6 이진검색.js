function binarySearch(x, a) {
    var n = a.length;
    var left = 0, right = n-1;
    while ( left < right ) {
        var middle = Math.floor((left + right) / 2);
        if ( x <= a[middle]) {
            right = middle;
        } else {
            left = middle + 1;
        }
    }
    if ( x == a[right] ) return right;
    return null;
}

a = [2, 4, 7, 12, 15, 21]
binarySearch(21, a)