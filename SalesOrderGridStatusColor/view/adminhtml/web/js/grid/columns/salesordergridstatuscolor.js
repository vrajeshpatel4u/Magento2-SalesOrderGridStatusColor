define([
    'underscore',
    'Magento_Ui/js/grid/columns/select'
], function(_, Column) {
    'use strict';

    return Column.extend({
        defaults: {
            bodyTmpl: 'V4U_SalesOrderGridStatusColor/ui/grid/cells/text'
        },
        getOrderStatusColor: function(row) {
            if (row.status == 'pending') {
                return 'pending-status';
            } else if (row.status == 'processing') {
                return 'processing-status';
            } else if (row.status == 'complete') {
                return 'complete-status';
            } else if (row.status == 'closed') {
                return 'closed-status';
            } else if (row.status == 'holded') {
                return 'holded-status';
            }
            return '#303030';
        }
    });
});