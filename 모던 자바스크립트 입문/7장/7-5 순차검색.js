function linearSearch(lst, v) {
    var i = 0;
    var n = lst.length;

    while (i < n && v > lst[i]) i ++;
    if (v == lst[i]) return i;
    return null;
}
