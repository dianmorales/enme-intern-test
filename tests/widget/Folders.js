define([
    'intern!object',
    'intern/chai!assert',
    'me/web/widget/folder/FolderOperations',
    'me/web/widget/folder/FoldersActions',
    'me/web/widget/folder/FolderSelect',
    'me/web/widget/folder/FoldersItemAction'
], function (
    registerSuite,
    assert,
    FolderOperations,
    FoldersActions,
    FolderSelect,
    FoldersItemAction) {
    registerSuite({
        name: 'Folder Widgets',
        
        'default data': function () {
            var foldersActions = new FoldersActions({

            });
        }      
    });
});