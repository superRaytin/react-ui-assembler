const util = require('util');

export function transformSourceCode(code) {
  try {
    return Babel.transform(code, {
      presets: [
        'es2015',
        'react',
        'stage-0'
      ]
    }).code;
  } catch (e) {
    throw new Error(`Invalid widget code, ${e}`);
  }
}

export function applySourceCodeToDOM(sourceCode, id) {
  const renderedCode = transformSourceCode(sourceCode);

  try {
    let html = util.format('<script>mountNode=document.getElementById("%s");</script>', id);
    html += util.format('<script>(function(){%s})()</script>', renderedCode);
    jQuery(`#${id}`).after(html);
  } catch (e) {
    throw new Error(`Apply source code error, ${e}`);
  }
}

export function generateWidget(v) {
  const sourceCode = v.source;
  const dom = jQuery('<div id="__temp-widget-containter"></div>');
  const widgetRenderContainer = jQuery('#widget-render-container');

  widgetRenderContainer.html('');
  widgetRenderContainer.append(dom);

  // 添加样式
  if (v.style) {
    if (!jQuery(`#__temp-widget-style-${v.id}`).length) {
      jQuery('head').append(`<style id="__temp-widget-style-${v.id}">${v.style}</style>`);
    }
  }

  applySourceCodeToDOM(sourceCode, '__temp-widget-containter');
}

export function generateWidgetToDom(v, domId) {
  const domNode = jQuery(domId);
  generateWidget(v);
  domNode.append(jQuery('#__temp-widget-containter').removeAttr('id'));
}
