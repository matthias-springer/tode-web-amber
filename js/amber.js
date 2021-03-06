/* Amber package loading
   usage example:
   amber.load({
   files: ['MyCategory1.js', 'MyCategory2.js'],
   ready: function() {smalltalk.Browser._open()}
   })
*/

amber = (function() {
	var that = {};

	var scripts = document.getElementsByTagName("script");
	var src     = scripts[ scripts.length - 1 ].src;
	var home    = resolveViaDOM(src).replace(/[^\/]+\/[^\/]+$/, "");

	var debug;
	var deploy;

	var spec;
	var jsToLoad = [];
	var loadJS;
	var nocache = '';

    function resolveViaDOM(url) {
        var a = document.createElement("a");
        a.href = url;
        return a.href;
    }

  that.perform = function() {
    obj = arguments[0];
    selector = arguments[1];
    parameters = [];

    for (var i = 2; i < arguments.length; i++) {
      parameters.push(arguments[i]);
    }
  
    func = obj['_' + selector.replace(/:/gi, '_')];

    if (func === undefined) {
      // TODO: throw MessageNotUnderstood
      smalltalk["Error"]["_signal_"]("does not understand: " + selector);
    } else {
      return func.apply(obj, parameters);
    }
  }

	that.load = function(obj) {
		spec = obj || {};

		// In deployment mode, only the compressed version of Kernel
		// and Canvas are loaded
		deploy = spec.deploy || false;
		debug = spec.debug || false;

		// When debug is turned on, logs are written to the console,
		// and the user will be prompted before they leave the page.
		if (debug) {
			window.onbeforeunload = function(){ return 'You will loose all code that you have not committed'; }
		}

		// Allow loading default Amber files from a different location
		// e.g. http://amber-lang.net/amber/
		if (spec.home) home = spec.home;

		// Specify a version string to avoid wrong browser caching
		if (spec.version) {
			nocache = '?' + spec.version;
		}

		loadDependencies();
		addJSToLoad('js/lib/es5-shim-2.0.2/es5-shim.min.js');
		addJSToLoad('js/lib/es5-shim-2.0.2/es5-sham.min.js');
		addJSToLoad('js/boot.js');

		if (deploy) {
			loadPackages([
				'Kernel-Objects.deploy',
				'Kernel-Classes.deploy',
				'Kernel-Methods.deploy',
				'Kernel-Collections.deploy',
				'Kernel-Exceptions.deploy',
				'Kernel-Transcript.deploy',
				'Kernel-Announcements.deploy',
				'Canvas.deploy'
			]);
		} else {
			loadIDEDependencies();
			loadCSS('amber.css');

			loadPackages([
				'Kernel-Objects',
				'Kernel-Classes',
				'Kernel-Methods',
				'Kernel-Collections',
				'Kernel-Exceptions',
				'Kernel-Transcript',
				'Kernel-Announcements',
        'NicEditor',
				'Canvas',
				'SUnit',
				'Importer-Exporter',
				'Compiler-Exceptions',
				'Compiler-Core',
				'Compiler-AST',
				'Compiler-Semantic',
				'Compiler-IR',
				'Compiler-Inlining',
				'Compiler-Interpreter',
				'Compiler-Tests',
				'parser',
				'IDE',
				'Examples',
				'Benchfib',
				'Kernel-Tests',
				'SUnit-Tests',
        'JQuery',
        'Morphic',
        'STON-Core',
        'Topez-Client-Common',
        'Topez-Client-GCI',
        'Topez-Client-Session',
        'Topez-Client-GemStone',
        'Topez-Web-Common-Console'
			]);
		}

		var additionalFiles = spec.packages || spec.files;
		if (additionalFiles) {
			that.commitPath = loadPackages(additionalFiles, spec.prefix, spec.packageHome);
		}

		// Be sure to setup & initialize smalltalk classes
		addJSToLoad('js/init.js');
		initializeSmalltalk();
	};

	function loadPackages(names, prefix, urlHome){
		var name;
		prefix = prefix || 'js';
		urlHome = urlHome || home;

		for (var i=0; i < names.length; i++) {
			name = names[i].split(/\.js$/)[0];
			addJSToLoad(name + '.js', prefix, urlHome);
		}

		return  {
			js: urlHome + prefix,
			st: urlHome + (prefix.match(/\/js$/) ? prefix.replace(/\/js$/, "/st") : "st")
		};
	}

	function addJSToLoad(name, prefix, urlHome) {
		urlHome = urlHome || home;
		jsToLoad.push(buildJSURL(name, prefix, urlHome));
	}

	function resolve(base, path) {
		if (/(^|:)\/\//.test(path)) {
			// path: [http:]//foo.com/bar/; base: whatever/
			// -> http://foo.com/bar/
			return path;
		}
		if (!/^\//.test(path)) {
			// path: relative/; base: whatever/
			// -> whatever/relative/
			return base + path;
		}
		var match = base.match(/^(([^:/]*:|^)\/\/[^/]*)/);
		if (match) {
			// path: /absolute/; base: [http:]//foo.com/whatever/
			// -> [http:]//foo.com/absolute/
			return match[1] + path;
		}
		// path: /absolute/; base: whatever/path/
		// -> /absolute/
		return path;
	}

	function buildJSURL(name, prefix, urlHome) {
		prefix = prefix ? prefix + '/' : '';
		urlHome = urlHome || home;

		var parts = name.match(/^(.*\/)([^/]*)$/);
		if (parts) {
			name = parts[2];
			urlHome = resolve(urlHome, parts[1]);
		}

		if (!deploy) {
			name = name + nocache;
		}

		return urlHome + prefix + name;
	}

	function loadCSS(name, prefix) {
		prefix = prefix || 'css';
		if (!deploy) {
			name = name + nocache;
		}

		var url = home + prefix + '/' + name;

		var link = document.createElement("link");
		link.setAttribute("rel", "stylesheet");
		link.setAttribute("type", "text/css");
		link.setAttribute("href", url);
		document.getElementsByTagName("head")[0].appendChild(link);
	}

	function loadDependencies() {
		if (typeof jQuery == 'undefined') {
			writeScriptTag(buildJSURL('js/lib/jQuery/jquery-1.8.2.min.js'));
		}

		if ((typeof jQuery == 'undefined') || (typeof jQuery.ui == 'undefined')) {      
			writeScriptTag(buildJSURL('js/lib/jQuery/jquery-ui-1.8.16.custom.min.js'));
		}
	}

	function loadIDEDependencies() {
		addJSToLoad('js/lib/jQuery/jquery.textarea.js');
		addJSToLoad('js/lib/CodeMirror/codemirror.js');
		addJSToLoad('js/lib/CodeMirror/smalltalk.js');
		addJSToLoad('js/lib/CodeMirror/addon/hint/show-hint.js');
		loadCSS('lib/CodeMirror/codemirror.css', 'js');
		loadCSS('lib/CodeMirror/addon/hint/show-hint.css', 'js');
		loadCSS('lib/CodeMirror/amber.css', 'js');
	}

	// This will be called after JS files have been loaded
	function initializeSmalltalk() {
		that.smalltalkReady = function() {
            if (spec.ready) {
                spec.ready();
            }
            evaluateSmalltalkScripts();
        };

        loadAllJS();
	}

	/*
	 * When loaded using AJAX, scripts order not guaranteed.
	 * Load JS in the order they have been added using addJSToLoad().
	 * If loaded, will use jQuery's getScript instead of adding a script element
	 */
	function loadAllJS() {
		loadJS = loadJSViaScriptTag;
		if (typeof jQuery != 'undefined') {
			loadJS = loadJSViaJQuery;
		}
		loadNextJS();
	}

	function loadNextJS() {
		loadJS(jsToLoad[0], function(){
			jsToLoad.shift();
			if (jsToLoad.length > 0) {
				loadNextJS();
			}
		});
	}

	function loadJSViaScriptTag(url, callback) {
		writeScriptTag(url);
		callback();
	}

	function loadJSViaJQuery(url, callback) {
		$.ajax({
			dataType: "script",
			url: url,
			cache: deploy,
			success: callback
		});
	}

	function writeScriptTag(src) {
		var scriptString = '<script src="' + src + '" type="text/javascript"></script>';
		document.write(scriptString);
	}

	function evaluateSmalltalkScripts() {
		jQuery(document).ready(function() {
			jQuery('script[type="text/smalltalk"]').each(function(i, elt) {
				smalltalk.Compiler._new()._evaluateExpression_(jQuery(elt).html());
			});
		})
	}

	var localPackages;

	function populateLocalPackages(){
		var localStorageRE = /^smalltalk\.packages\.(.*)$/;
		localPackages = {};

		var match, key;

		for(var i=0; i < localStorage.length; i++) {
			key = localStorage.key(i);

			if (match = key.match(localStorageRE)) {
				localPackages[match[1]] = localStorage[key];
			}
		}

		return localPackages;
	}

	function clearLocalPackages() {
		for (var name in localPackages) {
			log('Removing ' + name + ' from local storage');
			localStorage.removeItem('smalltalk.packages.' + name);
		}
	}

	function log(string) {
		if (debug) {
			console.log(string);
		}
	}

	that.loadHelios = function() {
        loadCSS('helios_frame.css');
        var frame = jQuery('<div id="helios"><iframe frameborder=0 src="../helios.html"></iframe></div>');

        jQuery('body').append(frame);
        jQuery(frame).resizable({
            handles: 'n',
            start: onResizeStart,
            stop: onResizeStop,
            resize: onResize,
            
        });

        function onResize() {
            jQuery('#helios')
                .css('top', '')
                .css('width', '100%')
                .css('bottom', '0px');
        }

        function onResizeStart() {
            jQuery('#helios').append('<div class="overlay"></div>')
        }

        function onResizeStop() {
            jQuery('#helios').find('.overlay').remove();
        }
    };

	return that;
})();

window.loadAmber  = amber.load;
window.loadHelios = amber.loadHelios;

// Backward compatibility
function toggleAmberIDE () {
    return smalltalk.TabManager._toggleAmberIDE();
}

function htmlDecodeWithLineBreaks(html) {
    // TODO: quick and dirty, copied from http://stackoverflow.com/questions/4502673/jquery-text-function-loses-line-breaks-in-ie
    var breakToken = '_______break_______',
       lineBreakedHtml = html.replace(/<br\s?\/?>/gi, breakToken).replace(/<p\.*?>(.*?)<\/p>/gi, breakToken + '$1' + breakToken);
    return $('<div>').html(lineBreakedHtml).text().replace(new RegExp(breakToken, 'g'), '\n');
}


function getTextNodesIn(node) {
    var textNodes = [];
    if (node.nodeType == 3) {
        textNodes.push(node);
    } else if (node.nodeType == 1 && node.nodeName === "BR") {
        node.length = 1;
        textNodes.push(node);
    } else {
        var children = node.childNodes;
        for (var i = 0, len = children.length; i < len; ++i) {
            textNodes.push.apply(textNodes, getTextNodesIn(children[i]));
        }
    }
    return textNodes;
}

function childIndex(elem) {
    var i = 0;
    while ((elem = elem.previousSibling) != null) ++i;
    return i;
}

function setSelectionRange(el, start, end) {
    if (document.createRange && window.getSelection) {
        var range = document.createRange();
        range.selectNodeContents(el);
        var textNodes = getTextNodesIn(el);
        var foundStart = false;
        var charCount = 0, endCharCount;

        for (var i = 0, textNode; textNode = textNodes[i++]; ) {
            endCharCount = charCount + textNode.length;
            
            if (!foundStart && start >= charCount && (start < endCharCount || (start == endCharCount && i < textNodes.length))) {
                if (textNode.nodeType == 1 && textNode.nodeName === "BR") {
                    range.setStart(textNode.parentNode, childIndex(textNode) + 1);
                }
                else {
                    range.setStart(textNode, start - charCount);
                }

                foundStart = true;
            }
            if (foundStart && end <= endCharCount) {
                if (textNode.nodeType == 1 && textNode.nodeName === "BR") {
                    range.setEnd(textNode.parentNode, childIndex(textNode) + 1);
                }
                else {
                    range.setEnd(textNode, end - charCount);
                }
                break;
            }
            charCount = endCharCount;
        }

        if (!foundStart) {
            var textNode = textNodes[textNodes.length - 1];
            if (textNode !== undefined) {
                range.setStart(textNode, textNode.length);
                range.setEnd(textNode, textNode.length);
            }
        }

        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    } else if (document.selection && document.body.createTextRange) {
        var textRange = document.body.createTextRange();
        textRange.moveToElementText(el);
        textRange.collapse(true);
        textRange.moveEnd("character", end);
        textRange.moveStart("character", start);
        textRange.select();
    }
}

function numBitShiftLeft(num, st) {
  return num << st;
}

function numBitShiftRight(num, st) {
  return num >> st;
}
