module.exports = function createDreamTeam(members) {
    if (members instanceof Array) {
        var names = members.filter(function(elem) {
            if (typeof elem == "string") {
                return elem;
            };
        });
        var letters = names.map(function(string) {
            var letter = string.trim();
            return letter[0].toUpperCase();
        });
        letters.sort();
        var result = letters.join('');
        return result;
    } else {
        return false;
    };
};
