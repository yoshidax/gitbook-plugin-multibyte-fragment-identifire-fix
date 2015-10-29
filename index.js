/// <reference path="typings/tsd.d.ts" />

var cheerio = require('cheerio');
var _ = require('lodash');
var semver = require('semver')

module.exports = {
    hooks: {
        'page': function(page) {
            var sections = _.filter(page.sections, function(section) {
                return section.type === 'normal';
            });
    		    var version = this.config.options.gitbook;
            sections.forEach(function(section) {

                var $ = cheerio.load(section.content);
                $('a[href^=#]').each(function(){
                    var href = $(this).attr('href');
                    var offset = href.indexOf('#') + 1;
          					var markdSectionId;
          					if (semver.gte(version, '2.5.0')) {
                      markdSectionId =
                          href.slice(offset)
                              .toLowerCase()
                              .replace(/[!-/:-@[-`{-~\s]+/g, '');
          					} else {
                      markdSectionId = encodeURI(
                          href.slice(offset)
                              .toLowerCase()
                              .replace(/[!-/:-@[-`{-~\s]+/g, '-')
              							  .replace(/-$/, ''));
          					}
                    $(this).attr('href', href.slice(0, offset) + markdSectionId);
                });
                section.content = $.html();
            });
            return page;
        }
    }
};
