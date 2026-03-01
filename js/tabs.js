$(function () {
    $('.form-tabs>.tabs').on('click', function (e) {


        if (e.target.tagName.toLowerCase() === 'li' && !e.target.classList.contains('active')) {

            $(e.target).siblings('.active').removeClass('active');

            $(e.target).addClass('active');

            let tabSelector = $(e.target).data('tab');

            const $parentTabs = $(e.target).parents('.form-tabs');
            $parentTabs.children('div:not(.hidden)').addClass('hidden');
            $parentTabs.children(tabSelector).removeClass('hidden');
        }
    });
})