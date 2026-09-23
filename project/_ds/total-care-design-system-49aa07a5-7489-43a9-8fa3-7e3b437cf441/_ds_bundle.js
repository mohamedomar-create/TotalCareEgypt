/* @ds-bundle: {"format":4,"namespace":"TotalCareDesignSystem_49aa07","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Icon","sourcePath":"components/brand/Icon.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"PulseLine","sourcePath":"components/brand/PulseLine.jsx"},{"name":"SectionDivider","sourcePath":"components/brand/SectionDivider.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"NumberBadge","sourcePath":"components/display/NumberBadge.jsx"},{"name":"ProgressBar","sourcePath":"components/display/ProgressBar.jsx"},{"name":"StatBlock","sourcePath":"components/display/StatBlock.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"fcfb944c756b","components/actions/IconButton.jsx":"0d55828ddff6","components/brand/Icon.jsx":"183d9d9927c5","components/brand/Logo.jsx":"940f795c5c4e","components/brand/PulseLine.jsx":"45d217ae8b05","components/brand/SectionDivider.jsx":"8fc451add1c4","components/display/Badge.jsx":"9cdd20d1cacb","components/display/Card.jsx":"4b8189c72167","components/display/NumberBadge.jsx":"9a93cb68ade9","components/display/ProgressBar.jsx":"ddcd43620b53","components/display/StatBlock.jsx":"6b399685bf19","components/display/Tag.jsx":"cf90360a5622","components/feedback/Dialog.jsx":"f11881ac3380","components/feedback/Toast.jsx":"2848593eec7b","components/feedback/Tooltip.jsx":"b359cfa2c3f2","components/forms/Checkbox.jsx":"cf187f09868c","components/forms/Input.jsx":"6b8f606b9f46","components/forms/Radio.jsx":"76f6f71c9802","components/forms/Select.jsx":"a6d00ed66be5","components/forms/Switch.jsx":"a946ecac4d94","components/navigation/Tabs.jsx":"74cf1855edcd","ui_kits/stationery/BusinessCard.jsx":"e18870999b6e","ui_kits/stationery/Envelope.jsx":"1f11dfb66a38","ui_kits/stationery/Letterhead.jsx":"0f9bc18c4fdf","ui_kits/stationery/SocialPost.jsx":"9dfb88d2c4db"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TotalCareDesignSystem_49aa07 = window.TotalCareDesignSystem_49aa07 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const V = {
  primary: {
    bg: 'var(--tc-red)',
    fg: '#fff',
    bd: 'var(--tc-red)',
    hbg: 'var(--tc-red-dark)',
    hbd: 'var(--tc-red-dark)'
  },
  secondary: {
    bg: 'var(--tc-blue)',
    fg: '#fff',
    bd: 'var(--tc-blue)',
    hbg: 'var(--tc-blue-dark)',
    hbd: 'var(--tc-blue-dark)'
  },
  outline: {
    bg: 'transparent',
    fg: 'var(--tc-ink)',
    bd: 'var(--tc-ink)',
    hbg: 'var(--tc-ink)',
    hfg: '#fff',
    hbd: 'var(--tc-ink)'
  },
  ghost: {
    bg: 'transparent',
    fg: 'var(--tc-blue)',
    bd: 'transparent',
    hbg: 'var(--tc-blue-tint)',
    hbd: 'transparent'
  },
  inverse: {
    bg: '#fff',
    fg: 'var(--tc-red)',
    bd: '#fff',
    hbg: 'var(--tc-mist)',
    hbd: 'var(--tc-mist)'
  }
};
const S = {
  sm: {
    h: 32,
    px: 14,
    fs: 12
  },
  md: {
    h: 42,
    px: 20,
    fs: 14
  },
  lg: {
    h: 52,
    px: 28,
    fs: 16
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  iconLeft,
  iconRight,
  children,
  style,
  onClick,
  type = 'button',
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const [p, setP] = React.useState(false);
  const v = V[variant] || V.primary,
    s = S[size] || S.md;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setP(false);
    },
    onMouseDown: () => setP(true),
    onMouseUp: () => setP(false),
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      height: s.h,
      padding: '0 ' + s.px + 'px',
      fontFamily: 'var(--font-primary)',
      fontWeight: 700,
      fontSize: s.fs,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      background: h && !disabled ? v.hbg : v.bg,
      color: h && !disabled && v.hfg ? v.hfg : v.fg,
      border: '1.5px solid ' + (h && !disabled ? v.hbd : v.bd),
      borderRadius: 0,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      transform: p && !disabled ? 'translateY(1px)' : 'none',
      transition: 'background var(--dur-fast) var(--ease-standard),color var(--dur-fast),border-color var(--dur-fast)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  variant = 'ghost',
  size = 40,
  label,
  disabled = false,
  children,
  onClick,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const m = {
    primary: ['var(--tc-red)', '#fff', 'var(--tc-red-dark)'],
    secondary: ['var(--tc-blue)', '#fff', 'var(--tc-blue-dark)'],
    ghost: ['transparent', 'var(--tc-ink)', 'var(--tc-mist)'],
    outline: ['transparent', 'var(--tc-ink)', 'var(--tc-mist)']
  }[variant] || [];
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      width: size,
      height: size,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 0,
      borderRadius: 0,
      background: h && !disabled ? m[2] : m[0],
      color: m[1],
      border: variant === 'outline' ? '1.5px solid var(--tc-ink)' : '1.5px solid transparent',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      transition: 'background var(--dur-fast)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/brand/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  style,
  ...rest
}) {
  const url = 'url(https://unpkg.com/lucide-static@0.456.0/icons/' + name + '.svg)';
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true",
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      background: color,
      WebkitMask: url + ' center/contain no-repeat',
      mask: url + ' center/contain no-repeat',
      flexShrink: 0,
      verticalAlign: 'middle',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Icon.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TC_BASE = (() => {
  try {
    const s = document.currentScript && document.currentScript.src;
    return s ? new URL('.', s).href : '';
  } catch (e) {
    return '';
  }
})();
function Logo({
  variant = 'color',
  height = 64,
  src,
  alt = 'Total Care',
  style,
  ...rest
}) {
  const file = variant === 'white' ? 'assets/logo-white.png' : 'assets/logo-digital.png';
  // Source PNGs are square with ~30% built-in clear space; crop to the lock-up.
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-block',
      height,
      width: height * 1.86,
      overflow: 'hidden',
      position: 'relative',
      flexShrink: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: src || TC_BASE + file,
    alt: alt,
    style: {
      position: 'absolute',
      height: height * 4,
      width: height * 4,
      left: '50%',
      top: '50%',
      transform: 'translate(-50%,-50%)',
      maxWidth: 'none'
    }
  }));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/PulseLine.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TC_BASE = (() => {
  try {
    const s = document.currentScript && document.currentScript.src;
    return s ? new URL('.', s).href : '';
  } catch (e) {
    return '';
  }
})();
function PulseLine({
  color = 'var(--tc-red)',
  height = 60,
  opacity = 1,
  style,
  ...rest
}) {
  const url = 'url(' + TC_BASE + 'assets/pulse-red.png)';
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true",
    style: {
      display: 'inline-block',
      height,
      width: height * 1.858,
      background: color,
      opacity,
      WebkitMask: url + ' center/contain no-repeat',
      mask: url + ' center/contain no-repeat',
      flexShrink: 0,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { PulseLine });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/PulseLine.jsx", error: String((e && e.message) || e) }); }

// components/brand/SectionDivider.jsx
try { (() => {
function SectionDivider({
  number,
  title,
  tone = 'red',
  height = 360,
  style
}) {
  const bg = tone === 'blue' ? 'var(--tc-blue)' : tone === 'black' ? 'var(--tc-black)' : 'var(--tc-red)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: bg,
      color: '#fff',
      height,
      fontFamily: 'var(--font-display)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.PulseLine, {
    color: "#fff",
    opacity: 0.14,
    height: height * 0.42,
    style: {
      position: 'absolute',
      left: -height * 0.08,
      top: -height * 0.06
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.PulseLine, {
    color: "#fff",
    opacity: 0.14,
    height: height * 0.9,
    style: {
      position: 'absolute',
      right: -height * 0.2,
      bottom: -height * 0.18
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '8%',
      top: '50%',
      transform: 'translateY(-50%)',
      textTransform: 'uppercase'
    }
  }, number != null && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: height * 0.13,
      lineHeight: 1.1,
      textDecoration: 'underline',
      textUnderlineOffset: '0.18em',
      textDecorationThickness: 2
    }
  }, number), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: height * 0.16,
      lineHeight: 1
    }
  }, title)));
}
Object.assign(__ds_scope, { SectionDivider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SectionDivider.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function Badge({
  tone = 'blue',
  variant = 'solid',
  children,
  style
}) {
  const c = {
    red: 'var(--tc-red)',
    blue: 'var(--tc-blue)',
    black: 'var(--tc-black)',
    orange: 'var(--tc-orange)',
    teal: 'var(--tc-teal)',
    grey: 'var(--tc-grey-500)'
  }[tone] || tone;
  const solid = variant === 'solid';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 22,
      padding: '0 8px',
      fontFamily: 'var(--font-primary)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      background: solid ? c : 'transparent',
      color: solid ? '#fff' : c,
      border: '1.5px solid ' + c,
      whiteSpace: 'nowrap',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function Card({
  media,
  mediaHeight = 180,
  eyebrow,
  title,
  children,
  footer,
  tone = 'plain',
  onClick,
  style
}) {
  const [h, setH] = React.useState(false);
  const t = {
    plain: ['#fff', 'var(--tc-ink)', 'var(--text-body)', '1px solid var(--border-default)'],
    subtle: ['var(--tc-mist)', 'var(--tc-ink)', 'var(--text-body)', '1px solid transparent'],
    inverse: ['var(--tc-black)', '#fff', '#C9C9C9', '1px solid transparent'],
    brand: ['var(--tc-red)', '#fff', '#fff', '1px solid transparent']
  }[tone];
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      background: t[0],
      color: t[1],
      border: t[3],
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      cursor: onClick ? 'pointer' : 'default',
      boxShadow: onClick && h ? 'var(--shadow-float)' : 'none',
      transition: 'box-shadow var(--dur-base)',
      fontFamily: 'var(--font-primary)',
      ...style
    }
  }, media && /*#__PURE__*/React.createElement("div", {
    style: {
      height: mediaHeight,
      background: typeof media === 'string' ? 'url(' + media + ') center/cover' : undefined,
      overflow: 'hidden'
    }
  }, typeof media === 'string' ? null : media), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      flex: 1
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: tone === 'plain' || tone === 'subtle' ? 'var(--tc-blue)' : 'inherit'
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      lineHeight: 1.15,
      textTransform: 'uppercase'
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      lineHeight: 1.5,
      color: t[2]
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 12
    }
  }, footer)));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/NumberBadge.jsx
try { (() => {
function NumberBadge({
  children,
  size = 36,
  tone = 'blue',
  style
}) {
  const bg = tone === 'red' ? 'var(--tc-red)' : tone === 'black' ? 'var(--tc-black)' : 'var(--tc-blue)';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      background: bg,
      color: '#fff',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-deck-body)',
      fontWeight: 700,
      fontSize: size * 0.4,
      flexShrink: 0,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { NumberBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/NumberBadge.jsx", error: String((e && e.message) || e) }); }

// components/display/ProgressBar.jsx
try { (() => {
function ProgressBar({
  label,
  value = 0,
  showValue = true,
  color = 'var(--tc-sky)',
  height = 12,
  style
}) {
  const v = Math.max(0, Math.min(100, value));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: label ? '110px 1fr auto' : '1fr auto',
      alignItems: 'center',
      gap: 16,
      fontFamily: 'var(--font-deck-body)',
      fontWeight: 700,
      fontSize: 14,
      color: 'var(--tc-ink)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("span", {
    style: {
      height,
      background: 'var(--tc-mist)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      width: v + '%',
      background: color,
      transition: 'width var(--dur-base) var(--ease-standard)'
    }
  })), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 36,
      textAlign: 'right'
    }
  }, v, "%"));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/display/StatBlock.jsx
try { (() => {
function StatBlock({
  label,
  value,
  description,
  color = 'var(--tc-blue)',
  align = 'left',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-deck-body)',
      textAlign: align,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 72,
      fontWeight: 700,
      lineHeight: 1.05,
      color,
      letterSpacing: '-0.01em'
    }
  }, value), description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: 'var(--tc-grey-700)',
      lineHeight: 1.45,
      marginTop: 6,
      maxWidth: 320
    }
  }, description));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function Tag({
  selected = false,
  onClick,
  onRemove,
  children,
  style
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 30,
      padding: '0 14px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-primary)',
      fontSize: 13,
      fontWeight: 500,
      cursor: onClick ? 'pointer' : 'default',
      background: selected ? 'var(--tc-blue)' : h && onClick ? 'var(--tc-blue-tint)' : '#fff',
      color: selected ? '#fff' : 'var(--tc-ink)',
      border: '1px solid ' + (selected ? 'var(--tc-blue)' : 'var(--border-default)'),
      transition: 'background var(--dur-fast)',
      ...style
    }
  }, children, onRemove && /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      cursor: 'pointer',
      fontSize: 15,
      lineHeight: 1,
      opacity: .7
    },
    "aria-label": "Remove"
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open = true,
  title,
  children,
  actions,
  onClose,
  width = 480,
  inline = false
}) {
  if (!open) return null;
  const box = /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    style: {
      width,
      maxWidth: '100%',
      background: '#fff',
      boxShadow: 'var(--shadow-float)',
      fontFamily: 'var(--font-primary)',
      borderTop: '4px solid var(--tc-red)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 16,
      padding: '24px 24px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      lineHeight: 1.15,
      textTransform: 'uppercase',
      color: 'var(--tc-ink)'
    }
  }, title), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      background: 'none',
      border: 0,
      fontSize: 22,
      lineHeight: 1,
      cursor: 'pointer',
      color: 'var(--tc-grey-500)',
      padding: 0
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 24px 24px',
      fontSize: 15,
      lineHeight: 1.5,
      color: 'var(--text-body)'
    }
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 12,
      padding: '16px 24px',
      background: 'var(--tc-paper)'
    }
  }, actions));
  if (inline) return box;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(23,23,23,.55)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
      zIndex: 1000
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation()
  }, box));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  tone = 'info',
  title,
  children,
  onClose,
  style
}) {
  const c = {
    info: 'var(--tc-blue)',
    success: 'var(--tc-teal)',
    warning: 'var(--tc-orange)',
    danger: 'var(--tc-red)'
  }[tone];
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      width: 360,
      maxWidth: '100%',
      padding: '14px 16px',
      background: 'var(--tc-black)',
      color: '#fff',
      boxShadow: 'var(--shadow-float)',
      fontFamily: 'var(--font-primary)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      background: c,
      marginTop: 5,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: '#C9C9C9',
      marginTop: 2,
      lineHeight: 1.45
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Dismiss",
    style: {
      background: 'none',
      border: 0,
      color: '#fff',
      opacity: .6,
      cursor: 'pointer',
      fontSize: 18,
      lineHeight: 1,
      padding: 0
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  content,
  placement = 'top',
  open,
  children
}) {
  const [h, setH] = React.useState(false);
  const show = open !== undefined ? open : h;
  const pos = placement === 'bottom' ? {
    top: '100%',
    marginTop: 8
  } : {
    bottom: '100%',
    marginBottom: 8
  };
  return /*#__PURE__*/React.createElement("span", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      position: 'relative',
      display: 'inline-flex'
    }
  }, children, show && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      ...pos,
      background: 'var(--tc-black)',
      color: '#fff',
      fontFamily: 'var(--font-primary)',
      fontSize: 12,
      lineHeight: 1.35,
      padding: '6px 10px',
      whiteSpace: 'nowrap',
      zIndex: 10,
      pointerEvents: 'none'
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  style
}) {
  const [inner, setInner] = React.useState(defaultChecked);
  const on = checked !== undefined ? checked : inner;
  const t = () => {
    if (disabled) return;
    const n = !on;
    setInner(n);
    onChange && onChange(n);
  };
  return /*#__PURE__*/React.createElement("label", {
    onClick: t,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      fontFamily: 'var(--font-primary)',
      fontSize: 15,
      color: 'var(--tc-ink)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "checkbox",
    "aria-checked": on,
    style: {
      width: 18,
      height: 18,
      border: '1.5px solid ' + (on ? 'var(--tc-blue)' : 'var(--border-strong)'),
      background: on ? 'var(--tc-blue)' : '#fff',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--dur-fast)'
    }
  }, on && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 10,
      borderRight: '2px solid #fff',
      borderBottom: '2px solid #fff',
      transform: 'rotate(45deg) translate(-1px,-1px)'
    }
  })), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tcLabel = {
  display: 'block',
  fontFamily: 'var(--font-primary)',
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  color: 'var(--tc-ink)',
  marginBottom: 6
};
const tcHint = err => ({
  fontSize: 12,
  marginTop: 6,
  color: err ? 'var(--tc-red)' : 'var(--text-muted)',
  fontFamily: 'var(--font-primary)'
});
function Input({
  label,
  hint,
  error,
  placeholder,
  value,
  defaultValue,
  onChange,
  type = 'text',
  disabled = false,
  iconLeft,
  style,
  id,
  ...rest
}) {
  const [f, setF] = React.useState(false);
  const iid = id || React.useId();
  const bc = error ? 'var(--tc-red)' : f ? 'var(--tc-blue)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-primary)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: iid,
    style: tcLabel
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: 44,
      padding: '0 12px',
      background: disabled ? 'var(--tc-paper)' : '#fff',
      border: '1px solid ' + bc,
      boxShadow: f ? 'inset 0 -2px 0 ' + (error ? 'var(--tc-red)' : 'var(--tc-blue)') : 'none',
      borderRadius: 'var(--radius-sm)',
      transition: 'border-color var(--dur-fast)'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      display: 'flex'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: iid,
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 0,
      outline: 0,
      background: 'transparent',
      fontFamily: 'inherit',
      fontSize: 15,
      color: 'var(--tc-ink)'
    }
  }, rest))), (error || hint) && /*#__PURE__*/React.createElement("div", {
    style: tcHint(error)
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  options = [],
  value,
  defaultValue,
  onChange,
  name,
  direction = 'column',
  disabled = false,
  style
}) {
  const [inner, setInner] = React.useState(defaultValue);
  const cur = value !== undefined ? value : inner;
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: 'flex',
      flexDirection: direction,
      gap: direction === 'row' ? 20 : 10,
      fontFamily: 'var(--font-primary)',
      ...style
    }
  }, options.map(o => {
    const v = typeof o === 'string' ? o : o.value,
      l = typeof o === 'string' ? o : o.label,
      on = cur === v;
    return /*#__PURE__*/React.createElement("label", {
      key: v,
      onClick: () => {
        if (disabled) return;
        setInner(v);
        onChange && onChange(v);
      },
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
        fontSize: 15,
        color: 'var(--tc-ink)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      role: "radio",
      "aria-checked": on,
      style: {
        width: 18,
        height: 18,
        borderRadius: '50%',
        border: '1.5px solid ' + (on ? 'var(--tc-blue)' : 'var(--border-strong)'),
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#fff'
      }
    }, on && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: 'var(--tc-blue)'
      }
    })), l);
  }));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
const tcLabel = {
  display: 'block',
  fontFamily: 'var(--font-primary)',
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  color: 'var(--tc-ink)',
  marginBottom: 6
};
const tcHint = err => ({
  fontSize: 12,
  marginTop: 6,
  color: err ? 'var(--tc-red)' : 'var(--text-muted)',
  fontFamily: 'var(--font-primary)'
});
function Select({
  label,
  hint,
  error,
  options = [],
  value,
  defaultValue,
  onChange,
  placeholder,
  disabled = false,
  style,
  id
}) {
  const [f, setF] = React.useState(false);
  const iid = id || React.useId();
  const bc = error ? 'var(--tc-red)' : f ? 'var(--tc-blue)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-primary)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: iid,
    style: tcLabel
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", {
    id: iid,
    value: value,
    defaultValue: defaultValue === undefined && value === undefined && placeholder ? '' : defaultValue,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      width: '100%',
      height: 44,
      padding: '0 36px 0 12px',
      appearance: 'none',
      WebkitAppearance: 'none',
      background: disabled ? 'var(--tc-paper)' : '#fff',
      border: '1px solid ' + bc,
      borderRadius: 'var(--radius-sm)',
      fontFamily: 'inherit',
      fontSize: 15,
      color: 'var(--tc-ink)',
      outline: 0,
      boxShadow: f ? 'inset 0 -2px 0 var(--tc-blue)' : 'none'
    }
  }, placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      width: 8,
      height: 8,
      borderRight: '2px solid var(--tc-ink)',
      borderBottom: '2px solid var(--tc-ink)',
      transform: 'translateY(-70%) rotate(45deg)',
      pointerEvents: 'none'
    }
  })), (error || hint) && /*#__PURE__*/React.createElement("div", {
    style: tcHint(error)
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  style
}) {
  const [inner, setInner] = React.useState(defaultChecked);
  const on = checked !== undefined ? checked : inner;
  const t = () => {
    if (disabled) return;
    setInner(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", {
    onClick: t,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      fontFamily: 'var(--font-primary)',
      fontSize: 15,
      color: 'var(--tc-ink)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "switch",
    "aria-checked": on,
    style: {
      width: 40,
      height: 22,
      background: on ? 'var(--tc-blue)' : 'var(--tc-grey-300)',
      position: 'relative',
      transition: 'background var(--dur-base)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: on ? 21 : 3,
      width: 16,
      height: 16,
      background: '#fff',
      transition: 'left var(--dur-base) var(--ease-standard)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  style
}) {
  const [inner, setInner] = React.useState(defaultValue ?? (tabs[0] && (tabs[0].value ?? tabs[0])));
  const cur = value !== undefined ? value : inner;
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 28,
      borderBottom: '1px solid var(--border-default)',
      fontFamily: 'var(--font-primary)',
      ...style
    }
  }, tabs.map(t => {
    const v = t.value ?? t,
      l = t.label ?? t,
      on = v === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": on,
      onClick: () => {
        setInner(v);
        onChange && onChange(v);
      },
      style: {
        background: 'none',
        border: 0,
        padding: '12px 0',
        marginBottom: -1,
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontSize: 13,
        fontWeight: 700,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: on ? 'var(--tc-ink)' : 'var(--text-muted)',
        borderBottom: '3px solid ' + (on ? 'var(--tc-red)' : 'transparent'),
        transition: 'color var(--dur-fast)'
      }
    }, l);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/stationery/BusinessCard.jsx
try { (() => {
function BusinessCard({
  side = 'back',
  tone = 'light',
  name = 'Name',
  title = 'Position',
  phone = '+20 000 000 0000',
  email = 'name@totalcareegypt.com'
}) {
  const {
    Logo,
    PulseLine
  } = window.TotalCareDesignSystem_49aa07;
  const red = tone === 'red';
  const base = {
    width: 336,
    height: 192,
    position: 'relative',
    overflow: 'hidden',
    boxShadow: 'var(--shadow-paper)',
    fontFamily: 'var(--font-primary)',
    background: red ? 'var(--grad-warm-diag)' : 'linear-gradient(160deg,#FFFFFF 0%,#E9EDEE 100%)'
  };
  if (side === 'front') return /*#__PURE__*/React.createElement("div", {
    style: {
      ...base,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: red ? 'white' : 'color',
    height: 62
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: base
  }, /*#__PURE__*/React.createElement(PulseLine, {
    color: red ? '#fff' : 'var(--tc-grey-300)',
    opacity: red ? 0.35 : 0.8,
    height: 96,
    style: {
      position: 'absolute',
      right: 34,
      top: 18
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 14,
      top: 12
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: red ? 'white' : 'color',
    height: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 24,
      top: 40,
      color: red ? '#fff' : 'var(--tc-red)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 30,
      lineHeight: 1,
      textTransform: 'uppercase'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      marginTop: 4,
      color: red ? '#fff' : 'var(--tc-grey-700)'
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 24,
      bottom: 20,
      fontSize: 10,
      lineHeight: 1.6,
      color: red ? '#fff' : 'var(--tc-red)'
    }
  }, phone, /*#__PURE__*/React.createElement("br", null), email, /*#__PURE__*/React.createElement("br", null), "totalcareegypt.com"));
}
window.BusinessCard = BusinessCard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/stationery/BusinessCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/stationery/Envelope.jsx
try { (() => {
function Envelope({
  to = 'Dr. Ahmed Hassan',
  addr = 'Cairo University Hospitals, Cairo'
}) {
  const {
    Logo,
    PulseLine
  } = window.TotalCareDesignSystem_49aa07;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 880,
      height: 440,
      background: '#fff',
      boxShadow: 'var(--shadow-paper)',
      position: 'relative',
      fontFamily: 'var(--font-primary)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 40,
      top: 32
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 54
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 40,
      top: 100,
      fontSize: 11,
      lineHeight: 1.6,
      color: 'var(--tc-red)'
    }
  }, "Address line, Cairo, Egypt", /*#__PURE__*/React.createElement("br", null), "totalcareegypt.com"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 460,
      top: 230,
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--tc-ink)'
    }
  }, /*#__PURE__*/React.createElement("b", null, to), /*#__PURE__*/React.createElement("br", null), addr), /*#__PURE__*/React.createElement(PulseLine, {
    color: "var(--tc-red)",
    height: 70,
    style: {
      position: 'absolute',
      right: 40,
      bottom: 30
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 40,
      right: 180,
      bottom: 52,
      height: 3,
      background: 'var(--tc-red)'
    }
  }));
}
window.Envelope = Envelope;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/stationery/Envelope.jsx", error: String((e && e.message) || e) }); }

// ui_kits/stationery/Letterhead.jsx
try { (() => {
function Letterhead({
  name = 'Dr. Ahmed Hassan',
  org = 'Procurement Department, Cairo University Hospitals',
  subject = 'Quotation — patient monitoring systems'
}) {
  const {
    Logo
  } = window.TotalCareDesignSystem_49aa07;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 816,
      height: 1056,
      background: '#fff',
      boxShadow: 'var(--shadow-paper)',
      position: 'relative',
      fontFamily: 'var(--font-primary)',
      color: 'var(--tc-ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 72,
      top: 48
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 58
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 200,
      right: 72,
      top: 60,
      height: 1,
      background: 'var(--tc-blue)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 96,
      right: 96,
      top: 190,
      fontSize: 14,
      lineHeight: 1.65,
      color: 'var(--tc-grey-700)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      color: 'var(--tc-grey-500)',
      fontSize: 13
    }
  }, "23 September 2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      color: 'var(--tc-ink)'
    }
  }, /*#__PURE__*/React.createElement("b", null, name), /*#__PURE__*/React.createElement("br", null), org), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      fontWeight: 700,
      color: 'var(--tc-ink)'
    }
  }, "Subject: ", subject), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 20
    }
  }, "Dear ", name.split(' ').slice(0, 2).join(' '), ","), /*#__PURE__*/React.createElement("p", null, "Thank you for your enquiry. Please find attached our quotation for twelve bedside monitors including installation, staff training and a two-year preventive maintenance contract."), /*#__PURE__*/React.createElement("p", null, "All devices are registered with the Egyptian Drug Authority and supported by our biomedical service team in Cairo."), /*#__PURE__*/React.createElement("p", null, "We would be glad to arrange a demonstration at your convenience."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 28
    }
  }, "Kind regards,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--tc-ink)'
    }
  }, "Total Care Egypt"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 72,
      bottom: 60,
      fontSize: 10.5,
      lineHeight: 1.6,
      color: 'var(--tc-red)'
    }
  }, "Address line, Cairo, Egypt", /*#__PURE__*/React.createElement("br", null), "Phone +20 000 000 0000", /*#__PURE__*/React.createElement("br", null), "totalcareegypt.com"), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/pulse-rule-grey.png",
    style: {
      position: 'absolute',
      left: 260,
      right: 72,
      bottom: 62,
      width: 484
    },
    alt: ""
  }));
}
window.Letterhead = Letterhead;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/stationery/Letterhead.jsx", error: String((e && e.message) || e) }); }

// ui_kits/stationery/SocialPost.jsx
try { (() => {
function SocialPost({
  kind = 'headline'
}) {
  const {
    Logo,
    PulseLine
  } = window.TotalCareDesignSystem_49aa07;
  const s = {
    width: 360,
    height: 360,
    position: 'relative',
    overflow: 'hidden',
    boxShadow: 'var(--shadow-paper)',
    color: '#fff',
    fontFamily: 'var(--font-display)',
    textTransform: 'uppercase'
  };
  if (kind === 'headline') return /*#__PURE__*/React.createElement("div", {
    style: {
      ...s,
      background: 'var(--grad-warm-diag)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 26,
      top: 30,
      fontSize: 28,
      lineHeight: 1.12,
      width: 260
    }
  }, "Health care is a right, not a privilege"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 'auto 0 0 0',
      height: 170,
      background: 'url(../../assets/imagery/mask-blue.jpg) center/cover',
      opacity: .9,
      mixBlendMode: 'multiply'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      bottom: 14,
      transform: 'translateX(-50%)'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "white",
    height: 34
  })));
  if (kind === 'text') return /*#__PURE__*/React.createElement("div", {
    style: {
      ...s,
      background: 'var(--grad-warm-diag)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 26,
      top: 22
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "white",
    height: 30
  })), /*#__PURE__*/React.createElement(PulseLine, {
    color: "#fff",
    opacity: 0.25,
    height: 220,
    style: {
      position: 'absolute',
      right: -40,
      top: 40
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 26,
      top: 150,
      width: 250,
      fontSize: 13,
      lineHeight: 1.5,
      letterSpacing: '.02em'
    }
  }, "Certified devices, trained engineers and spare parts in 48 hours \u2014 wherever your patients are."));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...s,
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'url(../../assets/imagery/glove-heart.jpg) center/cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 130,
      background: 'linear-gradient(#fff 55%,rgba(255,255,255,0))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 22,
      top: 14
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 24
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 22,
      top: 48,
      fontSize: 34,
      lineHeight: 1,
      color: 'var(--tc-red)'
    }
  }, "Health comes", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-primary)',
      fontWeight: 900
    }
  }, "first")));
}
window.SocialPost = SocialPost;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/stationery/SocialPost.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.PulseLine = __ds_scope.PulseLine;

__ds_ns.SectionDivider = __ds_scope.SectionDivider;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.NumberBadge = __ds_scope.NumberBadge;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
