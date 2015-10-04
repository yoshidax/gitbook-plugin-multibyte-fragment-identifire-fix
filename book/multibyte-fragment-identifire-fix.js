require(['gitbook', 'jQuery'], function (gitbook, $) {
	gitbook.events.bind('page.change', function () {
		$('.page-wrapper a[href^=#]').each(function (index, elm) {
			var encodedHashAnchor = '#' + encodeURIComponent($(elm).attr('href').slice(1));
			$(elm).attr('href', encodedHashAnchor);
		});
	});
});
