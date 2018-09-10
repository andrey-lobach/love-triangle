/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    var count = 0;
    for(var i = 0; i < preferences.length; i++) preferences[i]--;
    for(var i = 0; i < preferences.length; i++){
        if (preferences[i] == -1 || preferences[i] == i) continue;
        var a = preferences[i];
        var b = preferences[a];
        var c = preferences[b];
        if (c == i) {
            count++;
            preferences[i] = -1;
            preferences[a] = -1;
            preferences[b] = -1;
        }
    }
     return count;
};
