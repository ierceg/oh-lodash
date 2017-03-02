
'use strict';

const _ = require('lodash');

_.mixin({
    sortWithComparator(array, comparatorFn) {
        return array.sort(comparatorFn);
    }
});

_.mixin({
    dump(arg) {
        // lazy ignore-once no-console
        console.log(arg);
        return arg;
    }
});

module.exports = _;
