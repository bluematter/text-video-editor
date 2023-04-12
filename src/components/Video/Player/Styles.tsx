import styled from 'styled-components';

export const PlayerContainer = styled.div`
  .css-1w3ibup {
    display: block;
    vertical-align: middle;
    padding-right: var(--lns-space-small);
  }
  .css-1ncqx8v {
    background-color: transparent;
    border: none;
    appearance: none;
    cursor: pointer;
    padding: 0px;
    width: calc(4 * var(--lns-unit, 8px));
    height: calc(4 * var(--lns-unit, 8px));
    position: relative;
    outline: none;
    transition: background-color 0.6s ease 0s;
    display: inline-flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    vertical-align: middle;
    border-radius: var(--lns-radius-full);
    font: inherit;
  }
  .css-1ncqx8v:hover {
    transition: background-color 0.3s ease 0s;
    background-color: var(--lns-color-backgroundHover);
  }
  .css-1ncqx8v:active {
    transition: background-color 0s ease 0s;
    background-color: var(--lns-color-backgroundActive);
  }
  .css-1ncqx8v:disabled {
    color: var(--lns-color-disabledContent);
    pointer-events: none;
  }
  .css-1ncqx8v::before {
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    top: 0px;
    border-radius: var(--lns-radius-full);
  }
  .css-1ncqx8v:focus-visible::before {
    box-shadow: 0 0 0 2px var(--lns-color-focusRing);
  }
  .css-bkdk6o {
    display: block;
    color: var(--lns-color-body);
  }
  .css-bkdk6o > svg,
  .css-bkdk6o > img {
    display: block;
    width: calc(3 * var(--lns-unit, 8px));
    height: calc(3 * var(--lns-unit, 8px));
  }
  .css-bvoxlv {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-wrap: wrap;
    --gap: initial;
    margin-right: calc(-1 * var(--gap));
    margin-bottom: calc(-1 * var(--gap));
  }
  .css-1hdab9k {
    -webkit-box-flex: 1;
    flex-grow: 1;
    margin-right: var(--gap);
    margin-bottom: var(--gap);
  }
  .css-1xm32e0 {
    position: relative;
    width: 100%;
  }
  .css-44whkg {
    position: absolute;
    pointer-events: none;
    width: calc(6 * var(--lns-unit, 8px));
    height: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
  }
  .css-523ux4 {
    appearance: none;
    font-family: inherit;
    width: 100%;
    height: var(--lns-formFieldHeight);
    border: none;
    color: inherit;
    background-color: var(--lns-color-formFieldBackground);
    transition: box-shadow 0.3s ease 0s;
    padding-top: 0px;
    padding-bottom: 0px;
    padding-left: calc(5.5 * var(--lns-unit, 8px));
    padding-right: calc(5.5 * var(--lns-unit, 8px));
    border-radius: var(--lns-formFieldRadius);
    box-shadow: inset 0 0 0 var(--lns-formFieldBorderWidth)
      var(--lns-color-formFieldBorder);
    font-size: var(--lns-fontSize-medium);
    line-height: var(--lns-lineHeight-medium);
  }
  .css-523ux4:hover {
    box-shadow: inset 0 0 0 var(--lns-formFieldBorderWidthFocus)
      var(--lns-color-blurple);
  }
  .css-523ux4:focus {
    outline: none;
    box-shadow: var(--lns-formFieldBorderShadowFocus);
  }
  .css-523ux4:disabled {
    color: var(--lns-color-disabledContent);
    background-color: var(--lns-color-disabledBackground);
  }
  .css-523ux4:disabled:hover {
    box-shadow: inset 0 0 0 var(--lns-formFieldBorderWidth)
      var(--lns-color-formFieldBorder);
  }
  .css-523ux4::-webkit-input-placeholder {
    color: var(--lns-color-grey5);
  }
  .css-523ux4::placeholder {
    color: var(--lns-color-grey5);
  }
  .css-88cmas {
    margin-right: var(--gap);
    margin-bottom: var(--gap);
  }
  .css-333jr0 {
    display: block;
    vertical-align: middle;
    padding-left: var(--lns-space-large);
  }
  .css-1v675ey {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-wrap: wrap;
    --gap: var(--lns-space-medium);
    margin-right: calc(-1 * var(--gap));
    margin-bottom: calc(-1 * var(--gap));
  }
  .css-1qk3pj0 {
    display: grid;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: start;
    grid-auto-flow: column;
    gap: var(--lns-space-small);
  }
  .css-jw4xnd {
    color: var(--lns-color-orangeDark);
    background-color: var(--lns-color-background);
    border-radius: var(--lns-radius-full);
    overflow: hidden;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    line-height: 1;
    font-weight: var(--lns-fontWeight-medium);
    width: calc(3 * var(--lns-unit, 8px));
    height: calc(3 * var(--lns-unit, 8px));
    font-size: calc(calc(3 * var(--lns-unit, 8px)) / 1.75);
    position: relative;
    z-index: 0;
  }
  .css-jw4xnd::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
    opacity: 0.2;
    z-index: -1;
  }
  .css-1ago99h {
    width: 100%;
  }
  .css-1ma7i7u {
    overflow: hidden;
  }
  .css-15nffxn {
    display: grid;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: start;
    grid-auto-flow: column;
    gap: var(--lns-space-xsmall);
  }
  .css-1868wy5 {
    display: block;
    font-size: var(--lns-fontSize-medium);
    line-height: var(--lns-lineHeight-medium);
    color: var(--lns-color-bodyDimmed);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .css-qc3iy2 {
    display: block;
    font-size: var(--lns-fontSize-medium);
    line-height: var(--lns-lineHeight-medium);
    font-weight: var(--lns-fontWeight-regular);
    color: var(--lns-color-border);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .css-igxd9 {
    display: block;
    font-size: var(--lns-fontSize-medium);
    line-height: var(--lns-lineHeight-medium);
    font-weight: var(--lns-fontWeight-regular);
    color: var(--lns-color-bodyDimmed);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .css-8a0jj7 {
    display: block;
    font-size: var(--lns-fontSize-medium);
    line-height: var(--lns-lineHeight-medium);
    font-weight: var(--lns-fontWeight-regular);
    color: var(--lns-color-bodyDimmed);
  }
  .css-whoebk {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-wrap: nowrap;
    --gap: var(--lns-space-medium);
    margin-right: calc(-1 * var(--gap));
    margin-bottom: calc(-1 * var(--gap));
  }
  .css-hacrcv {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
  }
  .css-1u4fmxp {
    background-color: var(--lns-color-background);
    border-radius: var(--lns-radius-full);
    width: calc(11 * var(--lns-unit, 8px));
    height: calc(4 * var(--lns-unit, 8px));
  }
  .css-mg1ur {
    display: block;
    vertical-align: middle;
    padding-bottom: calc(2 * var(--lns-unit, 8px));
  }
  .css-1uoejt {
    background-color: var(--lns-color-disabledBackground);
    border-radius: var(--lns-radius-full);
  }
  .css-13t27hl {
    display: block;
    vertical-align: middle;
    padding-bottom: calc(4 * var(--lns-unit, 8px));
  }
  .css-1jrrt17 {
    display: grid;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    place-content: end start;
    grid-auto-flow: column;
    gap: var(--lns-space-medium);
  }
  .css-q3dumb {
    background-color: var(--lns-color-disabledBackground);
    border-radius: var(--lns-radius-medium);
    width: 13vw;
    height: calc(2 * var(--lns-unit, 8px));
  }
  .css-17dfseg {
    background-color: var(--lns-color-disabledBackground);
    border-radius: var(--lns-radius-medium);
    width: 8vw;
    height: calc(2 * var(--lns-unit, 8px));
  }
  .css-1fojicj {
    background-color: var(--lns-color-disabledBackground);
    border-radius: var(--lns-radius-medium);
    width: 3vw;
    height: calc(2 * var(--lns-unit, 8px));
  }
  .css-1yjrco6 {
    display: grid;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: start;
    grid-template-columns: auto 1fr;
  }
  .css-1e3t45d {
    background-color: var(--lns-color-disabledBackground);
    border-radius: var(--lns-radius-full);
    width: calc(6 * var(--lns-unit, 8px));
    height: calc(6 * var(--lns-unit, 8px));
  }
  .css-1bfqw4o {
    display: block;
    vertical-align: middle;
    padding-bottom: calc(2 * var(--lns-unit, 8px));
    padding-left: calc(2 * var(--lns-unit, 8px));
  }
  .css-128ocyh {
    background-color: var(--lns-color-disabledBackground);
    border-radius: var(--lns-radius-medium);
    width: 15%;
    height: calc(1 * var(--lns-unit, 8px));
  }
  .css-1qkh0gy {
    display: block;
    vertical-align: middle;
    padding-left: calc(2 * var(--lns-unit, 8px));
  }
  .css-1s4spi {
    background-color: var(--lns-color-disabledBackground);
    border-radius: var(--lns-radius-medium);
    width: 12%;
    height: calc(1 * var(--lns-unit, 8px));
  }
  .css-3z031i {
    display: block;
    vertical-align: middle;
    padding-bottom: calc(8 * var(--lns-unit, 8px));
  }
  .css-js1wqj {
    display: block;
    vertical-align: middle;
    padding-bottom: calc(3 * var(--lns-unit, 8px));
  }
  .css-1dj4lxh {
    display: block;
    vertical-align: middle;
    padding-top: calc(3 * var(--lns-unit, 8px));
    padding-bottom: calc(3 * var(--lns-unit, 8px));
  }
  .css-f6zed1 {
    background-color: var(--lns-color-disabledBackground);
    border-radius: var(--lns-radius-full);
    width: calc(4 * var(--lns-unit, 8px));
    height: calc(4 * var(--lns-unit, 8px));
  }
  .css-1az2p25 {
    height: calc(7 * var(--lns-unit, 8px));
  }
  .css-n9ei49 {
    display: grid;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: start;
    grid-template-columns: auto auto;
    gap: var(--lns-space-small);
  }
  .css-bhpbav {
    background-color: var(--lns-color-disabledBackground);
    border-radius: var(--lns-radius-medium);
    width: 172px;
    height: calc(1 * var(--lns-unit, 8px));
  }
  .css-1afoo38 {
    background-color: var(--lns-color-disabledBackground);
    border-radius: var(--lns-radius-medium);
    width: 38px;
    height: calc(1 * var(--lns-unit, 8px));
  }
  .css-m2fbtc {
    background-color: var(--lns-color-disabledBackground);
    border-radius: var(--lns-radius-medium);
    width: 60%;
    height: calc(1 * var(--lns-unit, 8px));
  }
  .css-l2yj73 {
    background-color: var(--lns-color-disabledBackground);
    border-radius: var(--lns-radius-medium);
    width: 35%;
    height: calc(1 * var(--lns-unit, 8px));
  }
  .css-aoxte5 {
    background-color: var(--lns-color-disabledBackground);
    border-radius: var(--lns-radius-medium);
    width: 10%;
    height: calc(1 * var(--lns-unit, 8px));
  }
  .css-l3r58 {
    --lvp-reactionsBar-height: calc(2.75 * var(--lns-unit, 8px));
    --lvp-progress-height: calc(0.5 * var(--lns-unit, 8px));
    position: relative;
    --lns-fontSize-small: calc(1.5 * var(--lns-unit, 8px));
    --lns-lineHeight-small: 1.5;
    --lns-fontSize-medium: calc(1.75 * var(--lns-unit, 8px));
    --lns-lineHeight-medium: 1.6;
    --lns-fontSize-large: calc(2.25 * var(--lns-unit, 8px));
    --lns-lineHeight-large: 1.45;
    --lns-fontSize-xlarge: calc(3 * var(--lns-unit, 8px));
    --lns-lineHeight-xlarge: 1.35;
    --lns-fontSize-xxlarge: calc(4 * var(--lns-unit, 8px));
    --lns-lineHeight-xxlarge: 1.2;
    --lns-fontSize-xxxlarge: calc(6 * var(--lns-unit, 8px));
    --lns-lineHeight-xxxlarge: 1.15;
    --lns-radius-medium: calc(1 * var(--lns-unit, 8px));
    --lns-radius-large: calc(2 * var(--lns-unit, 8px));
    --lns-radius-xlarge: calc(3 * var(--lns-unit, 8px));
    --lns-radius-full: calc(999 * var(--lns-unit, 8px));
    --lns-shadow-small: 0 calc(0.5 * var(--lns-unit, 8px))
      calc(1.25 * var(--lns-unit, 8px)) hsla(0, 0%, 0%, 0.05);
    --lns-shadow-medium: 0 calc(0.5 * var(--lns-unit, 8px))
      calc(1.25 * var(--lns-unit, 8px)) hsla(0, 0%, 0%, 0.1);
    --lns-shadow-large: 0 calc(0.75 * var(--lns-unit, 8px))
      calc(3 * var(--lns-unit, 8px)) hsla(0, 0%, 0%, 0.1);
    --lns-space-xsmall: calc(0.5 * var(--lns-unit, 8px));
    --lns-space-small: calc(1 * var(--lns-unit, 8px));
    --lns-space-medium: calc(2 * var(--lns-unit, 8px));
    --lns-space-large: calc(3 * var(--lns-unit, 8px));
    --lns-space-xlarge: calc(5 * var(--lns-unit, 8px));
    --lns-space-xxlarge: calc(8 * var(--lns-unit, 8px));
    --lns-formFieldBorderWidth: 1px;
    --lns-formFieldBorderWidthFocus: 2px;
    --lns-formFieldHeight: calc(4.5 * var(--lns-unit, 8px));
    --lns-formFieldRadius: calc(2.25 * var(--lns-unit, 8px));
    --lns-formFieldHorizontalPadding: calc(2 * var(--lns-unit, 8px));
    --lns-formFieldBorderShadow: inset 0 0 0 var(--lns-formFieldBorderWidth)
      var(--lns-color-formFieldBorder);
    --lns-formFieldBorderShadowFocus: inset 0 0 0
        var(--lns-formFieldBorderWidthFocus) var(--lns-color-blurple),
      0 0 0 var(--lns-formFieldBorderWidthFocus) var(--lns-color-focusRing);
    width: 100%;
    height: 100%;
    isolation: isolate;
    --lns-unit: var(--lvp-unit);
    color-scheme: dark;
    font-size: var(--lns-fontSize-medium);
    line-height: var(--lns-lineHeight-medium);
  }
  .css-l3r58:fullscreen [data-hide-if-fullscreen] {
    display: none;
  }
  .css-l3r58:-webkit-full-screen [data-hide-if-fullscreen] {
    display: none;
  }
  .css-l3r58:not(:fullscreen) [data-hide-ifnot-fullscreen] {
    display: none;
  }
  .css-l3r58:not(:-webkit-full-screen) [data-hide-ifnot-fullscreen] {
    display: none;
  }
  .theaterMode .css-l3r58 [data-hide-if-theater] {
    display: none;
  }
  .css-l3r58 [data-hide-ifnot-theater] {
    display: none;
  }
  .css-1eu2t89 {
    height: clamp(
      calc(6 * var(--lns-unit, 8px)),
      169.286px,
      calc(12 * var(--lns-unit, 8px))
    );
    width: clamp(
      calc(6 * var(--lns-unit, 8px)),
      169.286px,
      calc(12 * var(--lns-unit, 8px))
    );
    background: rgb(25 25 31 / 60%);
    border-radius: 100%;
    display: grid;
    place-items: center;
  }
  .css-1veskq3 {
    display: block;
    color: var(--lns-color-white);
    > svg,
    .css-1veskq3 > img {
      display: block;
      width: calc(
        clamp(
            calc(6 * var(--lns-unit, 8px)),
            169.286px,
            calc(12 * var(--lns-unit, 8px))
          ) / 2
      );
      height: calc(
        clamp(
            calc(6 * var(--lns-unit, 8px)),
            169.286px,
            calc(12 * var(--lns-unit, 8px))
          ) / 2
      );
    }
  }
  .theaterMode .css-l3r58 [data-hide-ifnot-theater] {
    display: block;
  }
  .css-13u2tm2 {
    border-radius: var(--lns-radius-full);
    margin-right: var(--lns-space-medium);
    margin-left: var(--lns-space-medium);
  }
  .css-vr7hc9 {
    display: block;
    vertical-align: middle;
    padding-top: var(--lns-space-medium);
    padding-bottom: var(--lns-space-medium);
  }
  .css-gb8zr7 {
    display: grid;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: start;
    gap: var(--lns-space-medium);
    grid-auto-flow: row;
  }
  .css-nez7wg {
    display: inline-block;
    vertical-align: middle;
  }
  .css-nez7wg:focus-visible {
    outline: transparent solid 0px;
    box-shadow: var(--lns-formFieldBorderShadowFocus);
  }
  .css-7pa1vc {
    height: 100%;
    z-index: 1;
    position: relative;
  }
  .css-1aml642 {
    display: grid;
    grid-template-areas: 'layersStack';
    width: 100%;
    height: 100%;
    background-color: black;
    color: var(--lns-color-body);
    grid-template-rows: minmax(0px, 1fr);
  }
  .css-1aml642 > * {
    grid-area: layersStack / layersStack / layersStack / layersStack;
  }
  .css-hejfr8 {
    overflow: clip;
    z-index: 100;
    height: 100%;
    display: grid;
    position: relative;
    pointer-events: none;
    -webkit-box-align: center;
    align-items: center;
  }
  .css-hejfr8 > * {
    pointer-events: initial;
  }
  .css-1r9v6bn {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    width: fit-content;
    margin: 0px auto;
  }
  .css-163kwjt {
    --size: clamp(
      calc(6 * var(--lns-unit, 8px)),
      0px,
      calc(12 * var(--lns-unit, 8px))
    );
    appearance: none;
    background: none;
    border: none;
    padding: 0px;
    box-shadow: var(--lns-shadow-small);
    width: var(--size);
    height: var(--size);
    border-radius: 100%;
    transition: transform 200ms ease 0s;
    cursor: pointer;
  }
  .LayersContainer:hover .css-163kwjt {
    transform: scale(1.1);
  }
  .css-10ke77c {
    position: absolute;
    top: calc(100% + var(--lns-space-small));
    display: flex;
    gap: var(--lns-space-small);
    -webkit-box-align: center;
    align-items: center;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    width: max-content;
    pointer-events: none;
  }
  .css-10ke77c > * {
    pointer-events: initial;
  }
  .css-1e8k6ue {
    background-color: var(--lns-color-background);
    border-radius: 19px;
    font-size: 14px;
    padding: calc(0.5 * var(--lns-unit, 8px));
  }
  .css-nc1r5p {
    margin: auto;
    min-width: 75px;
    padding: calc(0.25 * var(--lns-unit, 8px)) calc(0.8 * var(--lns-unit, 8px))
      calc(0.75 * var(--lns-unit, 8px));
    text-align: center;
    transition: all 0.1s ease-in-out 0s;
  }
  .css-nc1r5p:hover {
    min-width: auto;
  }
  .css-49cel7 {
    display: grid;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    grid-auto-flow: column;
  }
  .css-icngx9 {
    color: white;
    cursor: pointer;
    display: inline-flex;
    -webkit-box-pack: center;
    justify-content: center;
    overflow: hidden;
    font-size: 18px;
    line-height: 18px;
    transition: font-size 0.1s ease-in-out 0s, color 0.1s ease-in-out 0s;
    white-space: nowrap;
    width: auto;
  }
  .css-icngx9:hover {
    color: white;
    font-size: 18px;
  }
  .css-icngx9:active {
    color: var(--lns-color-grey2);
    font-size: 15px;
  }
  .css-1jiiktu {
    display: grid;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    grid-auto-flow: column;
    gap: var(--lns-space-xsmall);
  }
  .css-13jxloa {
    display: block;
    color: var(--lns-color-grey4);
  }
  .css-13jxloa > svg,
  .css-13jxloa > img {
    display: block;
    width: 1rem;
    height: 1rem;
  }
  .css-142gkko {
    color: var(--lns-color-grey5);
    cursor: pointer;
    display: inline-flex;
    -webkit-box-pack: center;
    justify-content: center;
    overflow: hidden;
    font-size: 14px;
    line-height: 18px;
    transition: font-size 0.1s ease-in-out 0s, color 0.1s ease-in-out 0s;
    white-space: nowrap;
    width: 0px;
  }
  .css-142gkko:hover {
    color: var(--lns-color-grey4);
    font-size: 18px;
  }
  .css-142gkko:active {
    color: var(--lns-color-grey2);
    font-size: 15px;
  }
  .css-na49gf {
    background-color: var(--lns-color-overlay);
    border-radius: 0px 0px 15px 15px;
    font-weight: var(--lns-fontWeight-medium);
    padding: calc(0.5 * var(--lns-unit, 8px)) calc(1 * var(--lns-unit, 8px));
    text-align: center;
  }
  .css-2mn8mx {
    display: grid;
    -webkit-box-align: start;
    align-items: start;
    -webkit-box-pack: center;
    justify-content: center;
    grid-auto-flow: column;
  }
  .css-ag2gtn {
    color: white;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
  }
  .css-123m8j9 {
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    width: 0px;
  }
  .css-z37975 {
    color: white;
    display: inline-block;
    height: 20px;
    overflow: hidden;
    position: relative;
    text-align: left;
    white-space: nowrap;
    width: 0px;
  }
  .css-wb3e27 {
    opacity: 1;
    position: absolute;
    transform: translateY(0px);
    transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s;
  }
  .css-198zj2u {
    opacity: 0;
    position: absolute;
    transform: translateY(20px);
    transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s;
  }
  .css-1sy9rjy {
    --playBarTranslateY: 0;
    --overlayOpacity: 0;
    position: absolute;
    bottom: 0px;
    width: 100%;
    transition: all 200ms ease 0s;
    pointer-events: initial;
    transform: translateY(var(--playBarTranslateY));
  }
  .videoMouseIsActive .css-1sy9rjy,
  .transportIsOpen .css-1sy9rjy {
    --playBarTranslateY: calc(2.75 * var(--lns-unit, 8px));
    --overlayOpacity: 0;
  }
  .video-global-container:hover .css-1sy9rjy {
    --playBarTranslateY: 0;
  }
  .css-1sy9rjy::after {
    content: '';
    position: absolute;
    bottom: 0px;
    left: 0px;
    height: calc(
      calc(6 * var(--lns-unit, 8px)) + calc(40 * var(--lns-unit, 8px))
    );
    width: 100%;
    display: block;
    z-index: -1;
    pointer-events: none;
    box-shadow: inset 0 calc(-9 * var(--lns-unit, 8px))
        calc(3 * var(--lns-unit, 8px)) calc(-6 * var(--lns-unit, 8px))
        hsl(0 0% 0% / 0.35),
      inset 0 calc(-18 * var(--lns-unit, 8px)) calc(6 * var(--lns-unit, 8px))
        calc(-12 * var(--lns-unit, 8px)) hsl(0 0% 0% / 0.35),
      inset 0 calc(-27 * var(--lns-unit, 8px)) calc(9 * var(--lns-unit, 8px))
        calc(-18 * var(--lns-unit, 8px)) hsl(0 0% 0% / 0.35);
    transition: opacity 200ms ease 0s;
    opacity: var(--overlayOpacity);
  }
  .css-ya1irb {
    max-width: 100%;
    height: 100%;
    z-index: 10;
    -webkit-box-align: stretch;
    align-items: stretch;
    grid-template-rows: minmax(0px, 1fr);
    overflow: hidden;
    display: grid;
    animation: 0.3s ease 0s 1 normal forwards running animation-15rtrmt;
  }
  .css-ya1irb img,
  .css-ya1irb video {
    height: 100%;
  }
  @-webkit-keyframes animation-15rtrmt {
    0% {
      opacity: 0;
    }
  }
  @keyframes animation-15rtrmt {
    0% {
      opacity: 0;
    }
  }
  .css-1dd3ex7 {
    width: 100%;
    animation: 0.3s ease 0s 1 normal forwards running animation-15rtrmt;
    max-height: 100%;
    z-index: 10;
    display: block;
    object-fit: contain;
  }
  @-webkit-keyframes animation-15rtrmt {
    0% {
      opacity: 0;
    }
  }
  @keyframes animation-15rtrmt {
    0% {
      opacity: 0;
    }
  }
  .css-2jflql {
    background-color: rgba(51, 51, 51, 0.1);
    z-index: 30;
    transition: background 200ms ease 0s;
  }
  .LayersContainer:hover .css-2jflql {
    background-color: rgba(51, 51, 51, 0.23);
  }
  .css-9g5j4e {
    display: grid;
    grid-template-areas: 'layersStack';
    background-color: black;
    color: var(--lns-color-body);
    grid-template-rows: minmax(0px, 1fr);
    clip: rect(0px, 0px, 0px, 0px);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
  .css-9g5j4e > * {
    grid-area: layersStack / layersStack / layersStack / layersStack;
  }
  .css-1c01yk9 {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .css-fzaaiv {
    position: absolute;
    z-index: 1;
    margin: auto;
    inset: 0px;
    width: fit-content;
    place-items: center;
    pointer-events: none;
    display: none;
    animation: 400ms ease 0s 1 normal forwards running animation-9n3ep6;
  }
  @-webkit-keyframes animation-9n3ep6 {
    0% {
      opacity: 0;
      transform: scale(0.5);
    }
    30% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes animation-9n3ep6 {
    0% {
      opacity: 0;
      transform: scale(0.5);
    }
    30% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0;
    }
  }
  .css-11flg9f {
    height: clamp(
      calc(6 * var(--lns-unit, 8px)),
      0px,
      calc(12 * var(--lns-unit, 8px))
    );
    width: clamp(
      calc(6 * var(--lns-unit, 8px)),
      0px,
      calc(12 * var(--lns-unit, 8px))
    );
    background: rgba(51, 51, 51, 0.6);
    border-radius: 100%;
    display: grid;
    place-items: center;
  }
  .css-97z899 {
    display: block;
    color: var(--lns-color-white);
  }
  .css-97z899 > svg,
  .css-97z899 > img {
    display: block;
    width: calc(
      clamp(
          calc(6 * var(--lns-unit, 8px)),
          0px,
          calc(12 * var(--lns-unit, 8px))
        ) / 2
    );
    height: calc(
      clamp(
          calc(6 * var(--lns-unit, 8px)),
          0px,
          calc(12 * var(--lns-unit, 8px))
        ) / 2
    );
  }
  .css-1qbueyq {
    width: 100%;
    height: 100%;
  }
  .css-1qbueyq::-webkit-media-text-track-display {
    display: none;
  }
  .css-4s4m7w {
    display: grid;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: start;
    grid-auto-flow: column;
  }
  .css-1el843h span {
    letter-spacing: normal;
    padding-top: 2px;
  }
  .css-1el843h button {
    font-size: var(--lns-fontSize-xlarge);
    font-family: 'Twemoji Mozilla', 'Apple Color Emoji', 'Noto Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol', 'Segoe UI', 'EmojiOne Color',
      'Android Emoji';
  }
  .css-utvy5 {
    position: relative;
    width: fit-content;
  }
  .css-xuhww0 {
    position: absolute;
    z-index: 500;
    opacity: 0;
    pointer-events: none;
    transition: opacity 150ms ease 50ms;
  }
  .css-uu6h57 {
    white-space: nowrap;
  }
  .css-glgapd {
    background-color: var(--lns-color-background);
    color: var(--lns-color-body);
    border-radius: var(--lns-radius-large);
    font-weight: var(--lns-fontWeight-medium);
    font-size: var(--lns-fontSize-small);
    line-height: var(--lns-lineHeight-small);
    box-shadow: var(--lns-shadow-medium);
    z-index: 1100;
    padding: calc(0.875 * var(--lns-unit, 8px)) calc(1.5 * var(--lns-unit, 8px));
  }
  .css-1kcr850 {
    display: block;
    font-size: var(--lns-fontSize-small);
    line-height: var(--lns-lineHeight-small);
    font-weight: var(--lns-fontWeight-medium);
  }
  .css-1wtux5t {
    background-color: var(--lns-color-backgroundActive);
    padding-top: calc(0 * var(--lns-unit, 8px));
    padding-right: var(--lns-space-xsmall);
    padding-bottom: calc(0 * var(--lns-unit, 8px));
    padding-left: var(--lns-space-xsmall);
  }
  .css-j950af {
    display: block;
    font-size: var(--lns-fontSize-small);
    line-height: var(--lns-lineHeight-small);
    font-weight: var(--lns-fontWeight-medium);
    color: var(--lns-color-grey3);
  }
  .css-10z6pux {
    position: absolute;
    z-index: 400;
    opacity: 0;
    pointer-events: none;
  }
  .css-1mflkmj {
    background-color: var(--lns-color-overlay);
    color: var(--lns-color-body);
    border-radius: var(--lns-radius-medium);
    width: max-content;
    padding: unset;
    margin-bottom: var(--lns-space-xsmall);
    z-index: 1;
  }
  .css-pe5cz7 {
    height: calc(34 * var(--lns-unit, 8px));
    width: calc(44 * var(--lns-unit, 8px));
  }
  .css-pe5cz7 div {
    font-family: Circular, 'Twemoji Mozilla', 'Apple Color Emoji',
      'Noto Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Segoe UI',
      'EmojiOne Color', 'Android Emoji';
  }
  .css-1hgjxjz {
    background-color: transparent;
    display: inline-flex;
    vertical-align: middle;
    -webkit-box-align: center;
    align-items: center;
    font-style: inherit;
    font-variant: inherit;
    font-stretch: inherit;
    font-family: inherit;
    text-decoration: none;
    border: none;
    appearance: none;
    height: calc(4 * var(--lns-unit, 8px));
    cursor: pointer;
    transition: background-color 0.6s ease 0s;
    color: var(--lns-color-body);
    font-weight: var(--lns-fontWeight-medium);
    border-radius: var(--lns-radius-full);
    font-size: var(--lns-fontSize-medium);
    line-height: var(--lns-lineHeight-medium);
    padding: 0 calc(1.5 * var(--lns-unit, 8px));
  }
  .css-1hgjxjz:focus {
    outline: none;
  }
  .css-1hgjxjz:focus-visible {
    box-shadow: 0 0 0 2px var(--lns-color-focusRing);
  }
  .css-1hgjxjz:hover {
    transition: background-color 0.3s ease 0s;
    background-color: var(--lns-color-backgroundHover);
  }
  .css-1hgjxjz:active {
    transition: background-color 0s ease 0s;
    background-color: var(--lns-color-backgroundActive);
  }
  .css-1hgjxjz:disabled {
    color: var(--lns-color-disabledContent);
    pointer-events: none;
  }
  .css-4e9s {
    padding-right: var(--lns-space-small);
  }
  .css-157n8k4 {
    display: block;
    color: var(--lns-color-body);
  }
  .css-157n8k4 > svg,
  .css-157n8k4 > img {
    display: block;
    height: calc(3 * var(--lns-unit, 8px));
  }
  .css-1n3mju3 {
    display: grid;
    -webkit-box-align: start;
    align-items: start;
    justify-content: stretch;
    grid-template-columns: 100%;
    gap: var(--lns-space-medium);
    grid-auto-flow: column;
  }
  .css-1k99zbo {
    display: grid;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    grid-auto-flow: column;
  }
  .css-1gdpif {
    display: block;
    font-size: var(--lns-fontSize-medium);
    line-height: var(--lns-lineHeight-medium);
    font-weight: var(--lns-fontWeight-regular);
  }
  .css-cmnfi4 {
    display: block;
    vertical-align: middle;
    padding-bottom: calc(1 * var(--lns-unit, 8px));
  }
  .css-3bslmb {
    display: grid;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: start;
    grid-template-columns: auto 1fr;
    gap: var(--lns-space-small);
  }
  .css-1i14szt {
    background-color: var(--lns-color-disabledBackground);
    border-radius: var(--lns-radius-full);
    width: calc(3 * var(--lns-unit, 8px));
    height: calc(3 * var(--lns-unit, 8px));
  }
  .css-1ptb7a8 {
    border-radius: var(--lns-radius-medium);
    width: calc(3 * var(--lns-unit, 8px));
    height: calc(1.5 * var(--lns-unit, 8px));
  }
  .css-1xnn0oi {
    display: block;
    vertical-align: middle;
    padding-top: calc(2 * var(--lns-unit, 8px));
  }
  .css-td7jny {
    background-color: var(--lns-color-disabledBackground);
    width: calc(10 * var(--lns-unit, 8px));
    height: calc(1.5 * var(--lns-unit, 8px));
  }
  .css-z2q6cb {
    background-color: var(--lns-color-disabledBackground);
    width: calc(4 * var(--lns-unit, 8px));
    height: calc(1.5 * var(--lns-unit, 8px));
  }
  .css-1ilsvrv {
    background-color: var(--lns-color-disabledBackground);
    width: 90%;
    height: calc(1.5 * var(--lns-unit, 8px));
  }
  .css-fwtobv {
    background-color: var(--lns-color-disabledBackground);
    width: 95%;
    height: calc(1.5 * var(--lns-unit, 8px));
  }
  .css-1unu50d {
    background-color: var(--lns-color-disabledBackground);
    width: 70%;
    height: calc(1.5 * var(--lns-unit, 8px));
  }
  .css-19n4vh0 {
    display: grid;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: start;
    grid-auto-flow: column;
    gap: var(--lns-space-medium);
  }
  .css-gn0a2q {
    display: block;
    vertical-align: middle;
  }
  .css-gn0a2q:focus-visible {
    outline: transparent solid 0px;
    box-shadow: var(--lns-formFieldBorderShadowFocus);
  }
  .css-1o0j6ez {
    display: inline-block;
    vertical-align: middle;
  }
  .css-1a7qhz7 {
    --size: clamp(
      calc(6 * var(--lns-unit, 8px)),
      272.143px,
      calc(12 * var(--lns-unit, 8px))
    );
    appearance: none;
    background: none;
    border: none;
    padding: 0px;
    box-shadow: var(--lns-shadow-small);
    width: var(--size);
    height: var(--size);
    border-radius: 100%;
    transition: transform 200ms ease 0s;
    cursor: pointer;
  }
  .LayersContainer:hover .css-1a7qhz7 {
    transform: scale(1.1);
  }
  .css-1tpjivs {
    position: absolute;
    top: calc(100% + var(--lns-space-medium));
    display: flex;
    gap: var(--lns-space-medium);
    -webkit-box-align: center;
    align-items: center;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    width: max-content;
    pointer-events: none;
  }
  .css-1tpjivs > * {
    pointer-events: initial;
  }
  .css-12o43xg {
    height: clamp(
      calc(6 * var(--lns-unit, 8px)),
      272.143px,
      calc(12 * var(--lns-unit, 8px))
    );
    width: clamp(
      calc(6 * var(--lns-unit, 8px)),
      272.143px,
      calc(12 * var(--lns-unit, 8px))
    );
    background: rgba(51, 51, 51, 0.6);
    border-radius: 100%;
    display: grid;
    place-items: center;
  }
  .css-1bqlam6 {
    display: block;
    color: var(--lns-color-white);
  }
  .css-1bqlam6 > svg,
  .css-1bqlam6 > img {
    display: block;
    width: calc(
      clamp(
          calc(6 * var(--lns-unit, 8px)),
          272.143px,
          calc(12 * var(--lns-unit, 8px))
        ) / 2
    );
    height: calc(
      clamp(
          calc(6 * var(--lns-unit, 8px)),
          272.143px,
          calc(12 * var(--lns-unit, 8px))
        ) / 2
    );
  }
  .css-1f0s391 {
    position: absolute;
    z-index: 1;
    margin: auto;
    inset: 0px;
    width: fit-content;
    display: flex;
    place-items: center;
    pointer-events: none;
    animation: 400ms ease 0s 1 normal forwards running animation-9n3ep6;
  }
  @-webkit-keyframes animation-9n3ep6 {
    0% {
      opacity: 0;
      transform: scale(0.5);
    }
    30% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes animation-9n3ep6 {
    0% {
      opacity: 0;
      transform: scale(0.5);
    }
    30% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0;
    }
  }
  .css-r1mdrn {
    border: 1px solid var(--lns-color-border);
    border-radius: var(--lns-radius-medium);
    box-shadow: var(--lns-shadow-large);
    height: 100%;
  }
  .css-1t2kzyo {
    display: block;
    vertical-align: middle;
    padding-top: var(--lns-space-medium);
  }
  .css-qrtw2o {
    display: block;
    font-size: var(--lns-fontSize-xlarge);
    line-height: var(--lns-lineHeight-xlarge);
    font-weight: var(--lns-fontWeight-regular);
    color: var(--lns-color-grey8);
  }
  .css-1ejv5kd {
    height: 100%;
    padding-top: var(--lns-space-medium);
    padding-right: var(--lns-space-small);
    padding-left: var(--lns-space-small);
  }
  .css-1jen4w4 {
    display: block;
    vertical-align: middle;
    padding-top: var(--lns-space-xsmall);
    padding-bottom: var(--lns-space-large);
    padding-left: var(--lns-space-small);
  }
  .css-suc0dd {
    width: calc(13.3333 * var(--lns-unit, 8px));
    height: calc(4 * var(--lns-unit, 8px));
  }
  .css-1l8qjb4 {
    display: block;
  }
  .css-1l8qjb4 > svg.lns-logoSvg {
    display: block;
    width: 100%;
    height: 100%;
  }
  .css-1xoofd7 {
    display: grid;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: start;
    grid-template-columns: 1fr;
    gap: 2px;
    grid-auto-flow: row;
  }
  .css-1eflel7 {
    display: block;
    color: currentcolor;
  }
  .css-1eflel7 > svg,
  .css-1eflel7 > img {
    display: block;
    width: calc(3 * var(--lns-unit, 8px));
    height: calc(3 * var(--lns-unit, 8px));
  }
  .css-15yw5r5 {
    display: block;
    font-size: var(--lns-fontSize-medium);
    line-height: var(--lns-lineHeight-medium);
    font-weight: var(--lns-fontWeight-regular);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .css-mrqdy5 {
    display: block;
    font-size: var(--lns-fontSize-medium);
    line-height: var(--lns-lineHeight-medium);
    font-weight: var(--lns-fontWeight-medium);
  }
  .css-cg0y77 {
    display: block;
    vertical-align: middle;
    padding-top: var(--lns-space-large);
    padding-bottom: var(--lns-space-large);
  }
  .css-g5oqna {
    border-bottom: 1px solid var(--lns-color-border);
  }
  .css-1ck3qbg {
    display: grid;
    -webkit-box-align: baseline;
    align-items: baseline;
    -webkit-box-pack: start;
    justify-content: start;
    grid-auto-flow: column;
    gap: var(--lns-space-xsmall);
  }
  .css-s5pb0v {
    display: block;
    font-size: var(--lns-fontSize-medium);
    line-height: var(--lns-lineHeight-medium);
    font-weight: var(--lns-fontWeight-medium);
    color: var(--lns-color-bodyDimmed);
  }
  .css-193jjat {
    background-color: transparent;
    border: none;
    appearance: none;
    cursor: pointer;
    padding: 0px;
    width: calc(3 * var(--lns-unit, 8px));
    height: calc(3 * var(--lns-unit, 8px));
    position: relative;
    outline: none;
    transition: background-color 0.6s ease 0s;
    display: inline-flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    vertical-align: middle;
    border-radius: var(--lns-radius-full);
    font: inherit;
  }
  .css-193jjat:hover {
    transition: background-color 0.3s ease 0s;
    background-color: var(--lns-color-backgroundHover);
  }
  .css-193jjat:active {
    transition: background-color 0s ease 0s;
    background-color: var(--lns-color-backgroundActive);
  }
  .css-193jjat:disabled {
    color: var(--lns-color-disabledContent);
    pointer-events: none;
  }
  .css-193jjat::before {
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    top: 0px;
    border-radius: var(--lns-radius-full);
  }
  .css-193jjat:focus-visible::before {
    box-shadow: 0 0 0 2px var(--lns-color-focusRing);
  }
  .css-1221erl {
    display: block;
    color: var(--lns-color-body);
  }
  .css-1221erl > svg,
  .css-1221erl > img {
    display: block;
    width: calc(2.25 * var(--lns-unit, 8px));
    height: calc(2.25 * var(--lns-unit, 8px));
  }
  .css-1gco8dr {
    --size: clamp(
      calc(6 * var(--lns-unit, 8px)),
      237.857px,
      calc(12 * var(--lns-unit, 8px))
    );
    appearance: none;
    background: none;
    border: none;
    padding: 0px;
    box-shadow: var(--lns-shadow-small);
    width: var(--size);
    height: var(--size);
    border-radius: 100%;
    transition: transform 200ms ease 0s;
    cursor: pointer;
  }
  .LayersContainer:hover .css-1gco8dr {
    transform: scale(1.1);
  }
  .css-65qdp5 {
    height: clamp(
      calc(6 * var(--lns-unit, 8px)),
      237.857px,
      calc(12 * var(--lns-unit, 8px))
    );
    width: clamp(
      calc(6 * var(--lns-unit, 8px)),
      237.857px,
      calc(12 * var(--lns-unit, 8px))
    );
    background: rgba(51, 51, 51, 0.6);
    border-radius: 100%;
    display: grid;
    place-items: center;
  }
  .css-hnmudm {
    display: block;
    color: var(--lns-color-white);
  }
  .css-hnmudm > svg,
  .css-hnmudm > img {
    display: block;
    width: calc(
      clamp(
          calc(6 * var(--lns-unit, 8px)),
          237.857px,
          calc(12 * var(--lns-unit, 8px))
        ) / 2
    );
    height: calc(
      clamp(
          calc(6 * var(--lns-unit, 8px)),
          237.857px,
          calc(12 * var(--lns-unit, 8px))
        ) / 2
    );
  }
  .css-1d26qcc {
    background-color: var(--lns-color-backgroundSecondary);
    border-radius: var(--lns-radius-large);
    padding-top: var(--lns-space-medium);
    padding-bottom: var(--lns-space-medium);
  }
  .css-15mtr14 {
    display: inline-block;
    vertical-align: middle;
    height: 24px;
    width: 24px;
  }
  .css-nncmw8 {
    display: grid;
    grid-template-areas: 'stack';
    height: 100%;
    width: 100%;
  }
  .css-1c0bfzb {
    grid-area: stack / stack / stack / stack;
    place-self: center;
    transform: rotate(0deg) translateY(10px);
  }
  .css-1c0bfzb::after {
    content: '';
    height: 4px;
    width: 4px;
    border-radius: 4px;
    background-color: var(--lns-color-body);
    display: block;
    transform: scale(0.65);
    animation: 1s ease-in-out 0s infinite normal none running animation-w7dv0m;
  }
  @-webkit-keyframes animation-w7dv0m {
    50% {
      transform: scale(1);
    }
  }
  @keyframes animation-w7dv0m {
    50% {
      transform: scale(1);
    }
  }
  .css-1bcn9rw {
    grid-area: stack / stack / stack / stack;
    place-self: center;
    transform: rotate(45deg) translateY(10px);
  }
  .css-1bcn9rw::after {
    content: '';
    height: 4px;
    width: 4px;
    border-radius: 4px;
    background-color: var(--lns-color-body);
    display: block;
    transform: scale(0.65);
    animation: 1s ease-in-out 0.125s infinite normal none running
      animation-w7dv0m;
  }
  @-webkit-keyframes animation-w7dv0m {
    50% {
      transform: scale(1);
    }
  }
  @keyframes animation-w7dv0m {
    50% {
      transform: scale(1);
    }
  }
  .css-1hg48k8 {
    grid-area: stack / stack / stack / stack;
    place-self: center;
    transform: rotate(90deg) translateY(10px);
  }
  .css-1hg48k8::after {
    content: '';
    height: 4px;
    width: 4px;
    border-radius: 4px;
    background-color: var(--lns-color-body);
    display: block;
    transform: scale(0.65);
    animation: 1s ease-in-out 0.25s infinite normal none running
      animation-w7dv0m;
  }
  @-webkit-keyframes animation-w7dv0m {
    50% {
      transform: scale(1);
    }
  }
  @keyframes animation-w7dv0m {
    50% {
      transform: scale(1);
    }
  }
  .css-14qw6gy {
    grid-area: stack / stack / stack / stack;
    place-self: center;
    transform: rotate(135deg) translateY(10px);
  }
  .css-14qw6gy::after {
    content: '';
    height: 4px;
    width: 4px;
    border-radius: 4px;
    background-color: var(--lns-color-body);
    display: block;
    transform: scale(0.65);
    animation: 1s ease-in-out 0.375s infinite normal none running
      animation-w7dv0m;
  }
  @-webkit-keyframes animation-w7dv0m {
    50% {
      transform: scale(1);
    }
  }
  @keyframes animation-w7dv0m {
    50% {
      transform: scale(1);
    }
  }
  .css-xjed50 {
    grid-area: stack / stack / stack / stack;
    place-self: center;
    transform: rotate(180deg) translateY(10px);
  }
  .css-xjed50::after {
    content: '';
    height: 4px;
    width: 4px;
    border-radius: 4px;
    background-color: var(--lns-color-body);
    display: block;
    transform: scale(0.65);
    animation: 1s ease-in-out 0.5s infinite normal none running animation-w7dv0m;
  }
  @-webkit-keyframes animation-w7dv0m {
    50% {
      transform: scale(1);
    }
  }
  @keyframes animation-w7dv0m {
    50% {
      transform: scale(1);
    }
  }
  .css-1oiw0a1 {
    grid-area: stack / stack / stack / stack;
    place-self: center;
    transform: rotate(225deg) translateY(10px);
  }
  .css-1oiw0a1::after {
    content: '';
    height: 4px;
    width: 4px;
    border-radius: 4px;
    background-color: var(--lns-color-body);
    display: block;
    transform: scale(0.65);
    animation: 1s ease-in-out 0.625s infinite normal none running
      animation-w7dv0m;
  }
  @-webkit-keyframes animation-w7dv0m {
    50% {
      transform: scale(1);
    }
  }
  @keyframes animation-w7dv0m {
    50% {
      transform: scale(1);
    }
  }
  .css-1o1vuf0 {
    grid-area: stack / stack / stack / stack;
    place-self: center;
    transform: rotate(270deg) translateY(10px);
  }
  .css-1o1vuf0::after {
    content: '';
    height: 4px;
    width: 4px;
    border-radius: 4px;
    background-color: var(--lns-color-body);
    display: block;
    transform: scale(0.65);
    animation: 1s ease-in-out 0.75s infinite normal none running
      animation-w7dv0m;
  }
  @-webkit-keyframes animation-w7dv0m {
    50% {
      transform: scale(1);
    }
  }
  @keyframes animation-w7dv0m {
    50% {
      transform: scale(1);
    }
  }
  .css-ypiqrm {
    grid-area: stack / stack / stack / stack;
    place-self: center;
    transform: rotate(315deg) translateY(10px);
  }
  .css-ypiqrm::after {
    content: '';
    height: 4px;
    width: 4px;
    border-radius: 4px;
    background-color: var(--lns-color-body);
    display: block;
    transform: scale(0.65);
    animation: 1s ease-in-out 0.875s infinite normal none running
      animation-w7dv0m;
  }
  @-webkit-keyframes animation-w7dv0m {
    50% {
      transform: scale(1);
    }
  }
  @keyframes animation-w7dv0m {
    50% {
      transform: scale(1);
    }
  }
  .css-1rhevhx {
    position: relative;
    padding-top: var(--lns-space-small);
    padding-bottom: calc(1.5 * var(--lns-unit, 8px));
    left: calc(-1 * var(--lns-space-small));
  }
  .css-721tvh {
    display: block;
    color: var(--lns-color-body);
  }
  .css-721tvh > svg,
  .css-721tvh > img {
    display: block;
    width: calc(1.5 * var(--lns-unit, 8px));
    height: calc(1.5 * var(--lns-unit, 8px));
  }
  .css-xqpj4f {
    appearance: none;
    padding: 0 calc(2 * var(--lns-unit, 8px));
    font-style: inherit;
    font-variant: inherit;
    font-stretch: inherit;
    font-family: inherit;
    text-decoration: none;
    transition: background-color 0.6s ease 0s, border-color 0.6s ease 0s;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    vertical-align: middle;
    white-space: nowrap;
    border: 1px solid transparent;
    font-weight: var(--lns-fontWeight-medium);
    border-radius: var(--lns-radius-full);
    display: inline-flex;
    height: calc(4.5 * var(--lns-unit, 8px));
    min-width: calc(4.5 * var(--lns-unit, 8px));
    font-size: var(--lns-fontSize-medium);
    line-height: var(--lns-lineHeight-medium);
    cursor: pointer;
    background-color: var(--lns-color-primary);
    color: var(--lns-color-white);
  }
  .css-xqpj4f:hover {
    transition: background-color 0.3s ease 0s, border-color 0.3s ease 0s;
    background-color: var(--lns-color-primaryHover);
  }
  .css-xqpj4f:active {
    transition: background-color 0s ease 0s, border-color 0s ease 0s;
    background-color: var(--lns-color-primaryActive);
  }
  .css-xqpj4f:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px var(--lns-color-focusRing);
  }
  .css-fwofpb {
    padding-right: calc(1 * var(--lns-unit, 8px));
    transition: opacity 0.5s ease 0s;
  }
  .css-216yut {
    display: block;
    color: currentcolor;
  }
  .css-216yut > svg,
  .css-216yut > img {
    display: block;
    height: calc(3 * var(--lns-unit, 8px));
  }
  .css-18biw47 {
    transition: opacity 0.5s ease 0s;
  }
  .css-18dkmvr {
    display: block;
    font-size: var(--lns-fontSize-medium);
    line-height: var(--lns-lineHeight-medium);
    font-weight: var(--lns-fontWeight-regular);
    color: var(--lns-color-bodyDimmed);
    text-align: center;
  }
  .css-1a90ofs {
    color: var(--lns-color-orangeDark);
    background-color: var(--lns-color-background);
    border-radius: var(--lns-radius-full);
    overflow: hidden;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    line-height: 1;
    font-weight: var(--lns-fontWeight-medium);
    width: calc(4.5 * var(--lns-unit, 8px));
    height: calc(4.5 * var(--lns-unit, 8px));
    font-size: calc(calc(4.5 * var(--lns-unit, 8px)) / 1.75);
    position: relative;
    z-index: 0;
  }
  .css-1a90ofs::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
    opacity: 0.2;
    z-index: -1;
  }
  .css-z96kg5 {
    border-radius: var(--lns-radius-xlarge);
    padding-top: var(--lns-space-small);
    padding-right: var(--lns-space-small);
    padding-left: var(--lns-space-small);
  }
  .css-1cgi8oj {
    display: grid;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    grid-auto-flow: column;
    gap: var(--lns-space-xsmall);
  }
  .css-1cdyfc2 {
    display: inline-grid;
    grid-auto-flow: column;
    -webkit-box-align: center;
    align-items: center;
    vertical-align: middle;
    padding: 0 calc(1.5 * var(--lns-unit, 8px));
    min-height: calc(3.25 * var(--lns-unit, 8px));
    color: var(--lns-color-bodyDimmed);
    border-radius: var(--lns-radius-full);
    font-size: var(--lns-fontSize-small);
    line-height: var(--lns-lineHeight-small);
    font-weight: var(--lns-fontWeight-medium);
    gap: var(--lns-space-xsmall);
  }
  .css-l85odn {
    position: relative;
    width: fit-content;
    transform: translate(0px);
    z-index: 1;
  }
  .css-10y4m8v {
    background-color: var(--lns-color-backgroundSecondary);
    border-radius: var(--lns-radius-full);
    width: calc(5 * var(--lns-unit, 8px));
    height: calc(5 * var(--lns-unit, 8px));
  }
  .css-hr28za {
    display: grid;
    -webkit-box-align: center;
    place-items: center start;
    -webkit-box-pack: start;
    justify-content: start;
    grid-auto-flow: row;
  }
  .css-19eij5q {
    display: block;
    font-size: var(--lns-fontSize-medium);
    line-height: var(--lns-lineHeight-medium);
    font-weight: var(--lns-fontWeight-bold);
  }
  .css-3xxfxt {
    display: block;
    color: var(--lns-color-bodyDimmed);
  }
  .css-3xxfxt > svg,
  .css-3xxfxt > img {
    display: block;
    width: calc(3 * var(--lns-unit, 8px));
    height: calc(3 * var(--lns-unit, 8px));
  }
  .css-ya71sy {
    background-color: var(--lns-color-yellowLight);
    width: 24px;
    height: 24px;
    padding-top: 1px;
  }
  .css-15wlohy {
    display: block;
    font-size: var(--lns-fontSize-medium);
    line-height: var(--lns-lineHeight-medium);
    font-weight: var(--lns-fontWeight-medium);
    color: rgb(146, 94, 65);
  }
  .css-x0229t {
    width: 18px;
    height: 18px;
    padding-bottom: 2px;
    padding-left: 4px;
  }
  .css-16k6q0g {
    display: block;
  }
  .css-16k6q0g > svg,
  .css-16k6q0g > img {
    display: block;
    height: calc(3 * var(--lns-unit, 8px));
  }
  .css-5v3vv4 {
    display: grid;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    grid-auto-flow: column;
    height: calc(6 * var(--lns-unit, 8px));
  }
  .css-3nqzpd {
    color: var(--lns-color-orangeDark);
    background-color: var(--lns-color-background);
    border-radius: var(--lns-radius-full);
    overflow: hidden;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    line-height: 1;
    font-weight: var(--lns-fontWeight-medium);
    width: calc(4 * var(--lns-unit, 8px));
    height: calc(4 * var(--lns-unit, 8px));
    font-size: calc(calc(4 * var(--lns-unit, 8px)) / 1.75);
    position: relative;
    z-index: 0;
  }
  .css-3nqzpd::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
    opacity: 0.2;
    z-index: -1;
    background-color: var(--lns-color-orangeDark);
  }
  .css-1w4rt5v {
    display: grid;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: start;
    grid-template-columns: 1fr 1.5rem;
    width: 100%;
  }
  .css-nzc5mw {
    display: block;
    font-size: var(--lns-fontSize-medium);
    line-height: var(--lns-lineHeight-medium);
    font-weight: var(--lns-fontWeight-bold);
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .css-r0sxtt {
    display: block;
    font-size: var(--lns-fontSize-small);
    line-height: var(--lns-lineHeight-small);
    font-weight: var(--lns-fontWeight-regular);
    color: var(--lns-color-bodyDimmed);
    text-align: left;
  }
  .css-1d3hh07 {
    display: block;
    font-size: var(--lns-fontSize-small);
    line-height: var(--lns-lineHeight-small);
    font-weight: var(--lns-fontWeight-medium);
    color: currentcolor;
  }
  .css-1w00yze {
    display: flex;
    position: relative;
    height: calc(2.75 * var(--lns-unit, 8px));
    transition: transform 200ms ease 0s, opacity 200ms ease 0s;
    opacity: 0;
    transform: translateY(calc(2.75 * var(--lns-unit, 8px)));
  }
  .video-global-container:hover .css-1w00yze {
    opacity: 1;
    transform: translateY(0px);
  }
  .css-7no7g9 {
    display: block;
    color: var(--lns-color-white);
  }
  .css-7no7g9 > svg,
  .css-7no7g9 > img {
    display: block;
    width: calc(3 * var(--lns-unit, 8px));
    height: calc(3 * var(--lns-unit, 8px));
  }
  .css-19dn1c6 {
    width: 100%;
    outline: none;
    height: calc(2 * var(--lns-unit, 8px));
    margin: calc(
        (calc(2 * var(--lns-unit, 8px)) - calc(0.5 * var(--lns-unit, 8px))) / -2
      )
      0;
    user-select: none;
    touch-action: none;
    position: relative;
    border-radius: var(--progressRadius);
    --thumbScale: 0;
    --thumbSize: calc(1.6 * var(--lns-unit, 8px));
    --progressValue: 10%;
    --progressHeightScale: 1;
    --progressColor: var(--lns-color-blue);
    --progressTransition: 150ms 50ms;
    backface-visibility: hidden;
    transform: translate3d(0px, 0px, 0px);
    pointer-events: none;
  }
  .css-19dn1c6:hover,
  .css-19dn1c6:focus,
  .css-19dn1c6[mouse-down],
  .css-19dn1c6.alwaysVisible {
    cursor: pointer;
    --thumbScale: 1;
    --progressHeightScale: 1.5;
  }
  .css-19dn1c6 * {
    backface-visibility: hidden;
  }
  .css-1uofusf {
    height: calc(2 * var(--lns-unit, 8px));
    position: relative;
    border-radius: var(--progressRadius);
    transition: height var(--progressTransition);
  }
  .css-3ftbbt {
    position: absolute;
    top: 0px;
    bottom: 0px;
    margin: auto;
    height: calc(0.5 * var(--lns-unit, 8px));
    width: 100%;
  }
  .css-4mf3eb {
    position: absolute;
    left: 0px;
    bottom: 0px;
    width: 100%;
    height: 100%;
    transition: transform var(--progressTransition);
  }
  .css-rlenjc {
    position: absolute;
    top: calc(-0.5 * var(--lns-unit, 8px));
    left: 0px;
    width: fit-content;
    padding: calc(0.5 * var(--lns-unit, 8px)) calc(1 * var(--lns-unit, 8px));
    transform: translate(-50%, -100%);
    font-size: var(--lns-fontSize-small);
    line-height: var(--lns-lineHeight-small);
    font-weight: var(--lns-fontWeight-book);
    color: var(--lns-color-body);
    background: var(--lns-color-background);
    border-radius: var(--lns-radius-medium);
    box-shadow: var(--lns-shadow-medium);
    opacity: 0;
    transition: opacity 200ms ease-in 0s;
    pointer-events: none;
    font-feature-settings: 'tnum';
  }
  .css-nf0072 {
    z-index: 1;
    position: absolute;
    top: 0px;
    bottom: 0px;
    margin: auto;
    height: calc(0.5 * var(--lns-unit, 8px));
    transform: translate3d(0, 0, 0) scaleY(var(--progressHeightScale));
    left: 0px;
    width: var(--progressValue);
    background: var(--progressColor);
    border-radius: var(--progressRadius);
    transition: transform var(--progressTransition);
  }
  .css-1wct823 {
    --thumbOffset: calc(var(--thumbSize) / 2);
    position: absolute;
    bottom: 0px;
    z-index: 1;
    width: var(--thumbSize);
    height: var(--thumbSize);
    border-radius: 100%;
    background-color: var(--progressColor);
    box-shadow: 0 calc(0.25 * var(--lns-unit, 8px))
      calc(0.5 * var(--lns-unit, 8px)) rgba(0, 0, 0, 0.2);
    top: 0px;
    left: min(
      calc(100% - var(--thumbOffset)),
      max(var(--thumbOffset), var(--progressValue))
    );
    margin-left: calc(var(--thumbOffset) * -1);
    margin-top: auto;
    margin-bottom: auto;
    transform: translate3d(0, 0, 0) scale(var(--thumbScale));
    opacity: var(--thumbScale);
    transition: opacity var(--progressTransition),
      transform var(--progressTransition);
  }
  .css-ghvljy {
    position: absolute;
    top: 0px;
    bottom: 0px;
    margin: auto;
    height: calc(0.5 * var(--lns-unit, 8px));
    transform: translate3d(0, 0, 0) scaleY(var(--progressHeightScale));
    left: 0px;
    width: 100%;
    background: rgba(255, 255, 255, 0.298);
    transition: transform var(--progressTransition);
    border-radius: var(--progressRadius);
  }
  .css-1vn9cwm {
    position: absolute;
    top: 0px;
    height: 100%;
    background: rgba(255, 255, 255, 0.4);
    transform: translate3d(0, 0, 0) scaleY(var(--progressHeightScale));
    transition: transform var(--progressTransition);
  }
  .css-o7pn1l {
    font-size: calc(
      clamp(
          calc(6 * var(--lns-unit, 8px)),
          237.857px,
          calc(12 * var(--lns-unit, 8px))
        ) / 2.5
    );
  }
  .css-fnuian {
    display: flex;
    position: relative;
    height: calc(2.75 * var(--lns-unit, 8px));
    transition: transform 200ms ease 0s, opacity 200ms ease 0s;
  }
  .css-1xf4yxn {
    --playBarTranslateY: calc(6 * var(--lns-unit, 8px));
    --overlayOpacity: 0;
    position: absolute;
    bottom: 0px;
    width: 100%;
    transition: all 200ms ease 0s;
    pointer-events: initial;
    transform: translateY(var(--playBarTranslateY));
  }
  .videoMouseIsActive .css-1xf4yxn,
  .transportIsOpen .css-1xf4yxn {
    --playBarTranslateY: 0;
    --overlayOpacity: 1;
  }
  .css-1xf4yxn::after {
    content: '';
    position: absolute;
    bottom: 0px;
    left: 0px;
    height: calc(
      calc(6 * var(--lns-unit, 8px)) + calc(40 * var(--lns-unit, 8px))
    );
    width: 100%;
    display: block;
    z-index: -1;
    pointer-events: none;
    box-shadow: inset 0 calc(-9 * var(--lns-unit, 8px))
        calc(3 * var(--lns-unit, 8px)) calc(-6 * var(--lns-unit, 8px))
        hsl(0 0% 0% / 0.35),
      inset 0 calc(-18 * var(--lns-unit, 8px)) calc(6 * var(--lns-unit, 8px))
        calc(-12 * var(--lns-unit, 8px)) hsl(0 0% 0% / 0.35),
      inset 0 calc(-27 * var(--lns-unit, 8px)) calc(9 * var(--lns-unit, 8px))
        calc(-18 * var(--lns-unit, 8px)) hsl(0 0% 0% / 0.35);
    transition: opacity 200ms ease 0s;
    opacity: var(--overlayOpacity);
  }
  .css-1igfvxv {
    z-index: 30;
    padding: 0 calc(1 * var(--lns-unit, 8px));
    min-height: calc(6 * var(--lns-unit, 8px));
    display: grid;
    -webkit-box-align: center;
    align-items: center;
  }
  .css-7gxj9i {
    display: grid;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: start;
    grid-template-columns: 1fr auto 1fr;
  }
  .css-1fkvtp6 {
    position: absolute;
    width: calc(15 * var(--lns-unit, 8px));
    left: 100%;
    top: 0px;
    bottom: 0px;
    display: grid;
    place-items: center;
    align-content: center;
    z-index: 2;
    padding: 0 calc(1.5 * var(--lns-unit, 8px));
    transition: all 150ms ease 70ms;
    backdrop-filter: blur(calc(0.875 * var(--lns-unit, 8px)));
    opacity: 0;
    transform: translateX(calc(-1 * var(--lns-unit, 8px)));
    border-radius: var(--lns-radius-medium);
    pointer-events: none;
  }
  .VolumeBtnWrapper:hover .css-1fkvtp6,
  .css-1fkvtp6:focus-within {
    opacity: 1;
    transform: translateX(0px);
    pointer-events: unset;
  }
  .css-1fkvtp6::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    border-radius: var(--lns-radius-medium);
    background: rgba(33, 33, 33, 0.9);
    opacity: 0.9;
    z-index: -2;
  }
  @supports (-webkit-backdrop-filter: blur(calc(0.875 * var(--lns-unit, 8px))))
    or (backdrop-filter: blur(calc(0.875 * var(--lns-unit, 8px)))) {
    .css-1fkvtp6::before {
      display: none;
    }
  }
  .css-vtad7s {
    width: 100%;
    outline: none;
    height: calc(2 * var(--lns-unit, 8px));
    margin: calc(
        (calc(2 * var(--lns-unit, 8px)) - calc(0.5 * var(--lns-unit, 8px))) / -2
      )
      0;
    user-select: none;
    touch-action: none;
    position: relative;
    border-radius: var(--progressRadius);
    --thumbScale: 0;
    --thumbSize: calc(1.6 * var(--lns-unit, 8px));
    --progressValue: 10%;
    --progressHeightScale: 1;
    --progressColor: var(--lns-color-body);
    --progressRadius: var(--lns-radius-medium);
    --progressTransition: 150ms 50ms;
    backface-visibility: hidden;
    transform: translate3d(0px, 0px, 0px);
  }
  .css-vtad7s:hover,
  .css-vtad7s:focus,
  .css-vtad7s[mouse-down],
  .css-vtad7s.alwaysVisible {
    cursor: pointer;
    --thumbScale: 1;
    --progressHeightScale: 1.5;
  }
  .css-vtad7s * {
    backface-visibility: hidden;
  }
  .css-7w8bej {
    display: block;
    vertical-align: middle;
    padding-left: var(--lns-space-small);
  }
  .css-1r8ulaz {
    color: var(--lns-color-body);
    font-feature-settings: 'tnum';
    white-space: nowrap;
  }
  @font-face {
    font-family: 'Noto Color Emoji';
    font-style: normal;
    font-weight: 400;
    src: url('https://cdn.loom.com/assets/fonts/NotoColorEmoji/NotoColorEmoji.0.woff2')
      format('woff2');
    unicode-range: U+1F1E6-1F1FF;
  }
  @font-face {
    font-family: 'Noto Color Emoji';
    font-style: normal;
    font-weight: 400;
    src: url('https://cdn.loom.com/assets/fonts/NotoColorEmoji/NotoColorEmoji.1.woff2')
      format('woff2');
    unicode-range: U+200D, U+2620, U+26A7, U+FE0F, U+1F308, U+1F38C, U+1F3C1,
      U+1F3F3-1F3F4, U+1F6A9, U+E0062-E0063, U+E0065, U+E0067, U+E006C, U+E006E,
      U+E0073-E0074, U+E0077, U+E007F;
  }
  @font-face {
    font-family: 'Noto Color Emoji';
    font-style: normal;
    font-weight: 400;
    src: url('https://cdn.loom.com/assets/fonts/NotoColorEmoji/NotoColorEmoji.2.woff2')
      format('woff2');
    unicode-range: U+23, U+2A, U+30-39, U+A9, U+AE, U+200D, U+203C, U+2049,
      U+20E3, U+2122, U+2139, U+2194-2199, U+21A9-21AA, U+23CF, U+23E9-23EF,
      U+23F8-23FA, U+24C2, U+25AA-25AB, U+25B6, U+25C0, U+25FB-25FE, U+2611,
      U+2622-2623, U+2626, U+262A, U+262E-262F, U+2638, U+2640, U+2642,
      U+2648-2653, U+2660, U+2663, U+2665-2666, U+2668, U+267B, U+267E-267F,
      U+2695, U+269B-269C, U+26A0, U+26A7, U+26AA-26AB, U+26CE, U+26D4, U+2705,
      U+2714, U+2716, U+271D, U+2721, U+2733-2734, U+2747, U+274C, U+274E,
      U+2753-2755, U+2757, U+2764, U+2795-2797, U+27A1, U+27B0, U+27BF,
      U+2934-2935, U+2B05-2B07, U+2B1B-2B1C, U+2B55, U+3030, U+303D, U+3297,
      U+3299, U+FE0F, U+1F170-1F171, U+1F17E-1F17F, U+1F18E, U+1F191-1F19A,
      U+1F201-1F202, U+1F21A, U+1F22F, U+1F232-1F23A, U+1F250-1F251, U+1F310,
      U+1F3A6, U+1F3B5-1F3B6, U+1F3BC, U+1F3E7, U+1F441, U+1F499-1F49C,
      U+1F49F-1F4A0, U+1F4AC-1F4AD, U+1F4B1-1F4B2, U+1F4B9, U+1F4DB,
      U+1F4F2-1F4F6, U+1F500-1F50A, U+1F515, U+1F518-1F524, U+1F52F-1F53D,
      U+1F549, U+1F54E, U+1F5A4, U+1F5E8, U+1F5EF, U+1F6AB, U+1F6AD-1F6B1,
      U+1F6B3, U+1F6B7-1F6BC, U+1F6BE, U+1F6C2-1F6C5, U+1F6D0-1F6D1, U+1F6D7,
      U+1F7E0-1F7EB, U+1F7F0, U+1F90D-1F90E, U+1F9E1;
  }
  @font-face {
    font-family: 'Noto Color Emoji';
    font-style: normal;
    font-weight: 400;
    src: url('https://cdn.loom.com/assets/fonts/NotoColorEmoji/NotoColorEmoji.3.woff2')
      format('woff2');
    unicode-range: U+231A-231B, U+2328, U+23F0-23F3, U+2602, U+260E, U+2692,
      U+2694, U+2696-2697, U+2699, U+26B0-26B1, U+26CF, U+26D1, U+26D3, U+2702,
      U+2709, U+270F, U+2712, U+FE0F, U+1F302, U+1F321, U+1F392-1F393, U+1F3A9,
      U+1F3BD, U+1F3EE, U+1F3F7, U+1F3FA, U+1F451-1F462, U+1F484, U+1F489-1F48A,
      U+1F48C-1F48E, U+1F4A1, U+1F4A3, U+1F4B0, U+1F4B3-1F4B8, U+1F4BB-1F4DA,
      U+1F4DC-1F4F1, U+1F4FF, U+1F50B-1F514, U+1F516-1F517, U+1F526-1F529,
      U+1F52C-1F52E, U+1F550-1F567, U+1F56F-1F570, U+1F576, U+1F587,
      U+1F58A-1F58D, U+1F5A5, U+1F5A8, U+1F5B1-1F5B2, U+1F5C2-1F5C4,
      U+1F5D1-1F5D3, U+1F5DC-1F5DE, U+1F5E1, U+1F5F3, U+1F6AA, U+1F6AC, U+1F6BD,
      U+1F6BF, U+1F6C1, U+1F6CB, U+1F6CD-1F6CF, U+1F6D2, U+1F6E0-1F6E1, U+1F6F0,
      U+1F97B-1F97F, U+1F9AF, U+1F9BA, U+1F9E2-1F9E6, U+1F9EA-1F9EC,
      U+1F9EE-1F9F4, U+1F9F7-1F9FF, U+1FA71-1FA74, U+1FA79-1FA7B, U+1FA86,
      U+1FA91-1FA93, U+1FA96, U+1FA99-1FAA0, U+1FAA2-1FAA7, U+1FAAA-1FAAC;
  }
  @font-face {
    font-family: 'Noto Color Emoji';
    font-style: normal;
    font-weight: 400;
    src: url('https://cdn.loom.com/assets/fonts/NotoColorEmoji/NotoColorEmoji.4.woff2')
      format('woff2');
    unicode-range: U+265F, U+26BD-26BE, U+26F3, U+26F8, U+FE0F, U+1F004, U+1F0CF,
      U+1F380-1F384, U+1F386-1F38B, U+1F38D-1F391, U+1F396-1F397, U+1F399-1F39B,
      U+1F39E-1F39F, U+1F3A3-1F3A5, U+1F3A7-1F3A9, U+1F3AB-1F3B4, U+1F3B7-1F3BB,
      U+1F3BD-1F3C0, U+1F3C5-1F3C6, U+1F3C8-1F3C9, U+1F3CF-1F3D3, U+1F3F8-1F3F9,
      U+1F47E, U+1F4E2, U+1F4F7-1F4FD, U+1F52B, U+1F579, U+1F58C-1F58D, U+1F5BC,
      U+1F6F7, U+1F6F9, U+1F6FC, U+1F93F, U+1F941, U+1F945, U+1F947-1F94F,
      U+1F9E7-1F9E9, U+1F9F5-1F9F6, U+1FA70-1FA71, U+1FA80-1FA81, U+1FA83-1FA85,
      U+1FA94-1FA95, U+1FA97-1FA98, U+1FAA1, U+1FAA9;
  }
  @font-face {
    font-family: 'Noto Color Emoji';
    font-style: normal;
    font-weight: 400;
    src: url('https://cdn.loom.com/assets/fonts/NotoColorEmoji/NotoColorEmoji.5.woff2')
      format('woff2');
    unicode-range: U+2693, U+26E9-26EA, U+26F2, U+26F4-26F5, U+26FA, U+26FD,
      U+2708, U+FE0F, U+1F301, U+1F303, U+1F306-1F307, U+1F309, U+1F310,
      U+1F3A0-1F3A2, U+1F3AA, U+1F3CD-1F3CE, U+1F3D5, U+1F3D7-1F3DB, U+1F3DD,
      U+1F3DF-1F3E6, U+1F3E8-1F3ED, U+1F3EF-1F3F0, U+1F488, U+1F492, U+1F4BA,
      U+1F54B-1F54D, U+1F5FA-1F5FF, U+1F680-1F6A2, U+1F6A4-1F6A8, U+1F6B2,
      U+1F6D1, U+1F6D5-1F6D6, U+1F6DD-1F6DF, U+1F6E2-1F6E5, U+1F6E9,
      U+1F6EB-1F6EC, U+1F6F3-1F6F6, U+1F6F8, U+1F6FA-1F6FB, U+1F9BC-1F9BD,
      U+1F9ED, U+1F9F3, U+1FA7C;
  }
  @font-face {
    font-family: 'Noto Color Emoji';
    font-style: normal;
    font-weight: 400;
    src: url('https://cdn.loom.com/assets/fonts/NotoColorEmoji/NotoColorEmoji.6.woff2')
      format('woff2');
    unicode-range: U+2615, U+FE0F, U+1F32D-1F330, U+1F336, U+1F33D,
      U+1F345-1F37F, U+1F382, U+1F52A, U+1F942-1F944, U+1F950-1F96F, U+1F99E,
      U+1F9AA, U+1F9C0-1F9CB, U+1FAD0-1FAD9;
  }
  @font-face {
    font-family: 'Noto Color Emoji';
    font-style: normal;
    font-weight: 400;
    src: url('https://cdn.loom.com/assets/fonts/NotoColorEmoji/NotoColorEmoji.7.woff2')
      format('woff2');
    unicode-range: U+200D, U+2600-2601, U+2603-2604, U+2614, U+2618, U+26A1,
      U+26C4-26C5, U+26C8, U+26F0-26F1, U+2728, U+2744, U+2B1B, U+2B50, U+FE0F,
      U+1F300-1F301, U+1F304-1F305, U+1F308, U+1F30A-1F30F, U+1F311-1F319,
      U+1F31F-1F321, U+1F324-1F32C, U+1F331-1F335, U+1F337-1F33C, U+1F33E-1F344,
      U+1F3D4, U+1F3D6, U+1F3DC, U+1F3DE, U+1F3F5, U+1F400-1F43F, U+1F490,
      U+1F4A7, U+1F4AB, U+1F4AE, U+1F525, U+1F54A, U+1F577-1F578, U+1F648-1F64A,
      U+1F940, U+1F980-1F9AE, U+1F9BA, U+1FA90, U+1FAA8, U+1FAB0-1FABA, U+1FAE7;
  }
  @font-face {
    font-family: 'Noto Color Emoji';
    font-style: normal;
    font-weight: 400;
    src: url('https://cdn.loom.com/assets/fonts/NotoColorEmoji/NotoColorEmoji.8.woff2')
      format('woff2');
    unicode-range: U+200D, U+2640, U+2642, U+2695-2696, U+26F7, U+26F9, U+2708,
      U+2764, U+FE0F, U+1F33E, U+1F373, U+1F37C, U+1F384-1F385, U+1F393, U+1F3A4,
      U+1F3A8, U+1F3C2-1F3C4, U+1F3C7, U+1F3CA-1F3CC, U+1F3EB, U+1F3ED,
      U+1F3FB-1F3FF, U+1F466-1F478, U+1F47C, U+1F481-1F483, U+1F486-1F487,
      U+1F48B, U+1F48F, U+1F491, U+1F4BB-1F4BC, U+1F527, U+1F52C, U+1F574-1F575,
      U+1F57A, U+1F645-1F647, U+1F64B, U+1F64D-1F64E, U+1F680, U+1F692, U+1F6A3,
      U+1F6B4-1F6B6, U+1F6C0, U+1F6CC, U+1F91D, U+1F926, U+1F930-1F931,
      U+1F934-1F93A, U+1F93C-1F93E, U+1F977, U+1F9AF-1F9B3, U+1F9B8-1F9B9,
      U+1F9BC-1F9BD, U+1F9CC-1F9CF, U+1F9D1-1F9DF, U+1FA82, U+1FAC3-1FAC5;
  }
  @font-face {
    font-family: 'Noto Color Emoji';
    font-style: normal;
    font-weight: 400;
    src: url('https://cdn.loom.com/assets/fonts/NotoColorEmoji/NotoColorEmoji.9.woff2')
      format('woff2');
    unicode-range: U+200D, U+261D, U+2620, U+2639-263A, U+2665, U+270A-270D,
      U+2728, U+2763-2764, U+2B50, U+FE0F, U+1F31A-1F31F, U+1F32B, U+1F383,
      U+1F389-1F38A, U+1F3FB-1F3FF, U+1F440-1F450, U+1F463-1F465, U+1F479-1F47B,
      U+1F47D, U+1F47F-1F480, U+1F485, U+1F48B-1F48C, U+1F493-1F49F, U+1F4A2,
      U+1F4A4-1F4A6, U+1F4A8-1F4AB, U+1F4AF, U+1F525, U+1F573, U+1F590,
      U+1F595-1F596, U+1F5A4, U+1F5E3, U+1F600-1F644, U+1F648-1F64A, U+1F64C,
      U+1F64F, U+1F90C-1F925, U+1F927-1F92F, U+1F932-1F933, U+1F970-1F976,
      U+1F978-1F97A, U+1F9A0, U+1F9B4-1F9B7, U+1F9BB, U+1F9BE-1F9BF, U+1F9D0,
      U+1F9E0-1F9E1, U+1FA78-1FA79, U+1FAC0-1FAC2, U+1FAE0-1FAE7, U+1FAF0-1FAF6;
  }
  .css-3i8gsp {
    letter-spacing: normal;
    padding-top: 2px;
    font-size: calc(2.75 * var(--lns-unit, 8px));
    font-family: 'Twemoji Mozilla', 'Apple Color Emoji', 'Noto Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol', 'Segoe UI', 'EmojiOne Color',
      'Android Emoji';
  }
  .css-6dw9y0 {
    height: min(
      calc(34 * var(--lns-unit, 8px)),
      calc(545px - var(--lvp-playBar-height) - var(--lns-space-medium))
    );
    width: min(
      calc(44 * var(--lns-unit, 8px)),
      calc(1665px - var(--lns-space-small))
    );
  }
  .css-16tasy4 {
    padding-right: var(--lns-space-medium);
    padding-left: var(--lns-space-medium);
  }
  .css-1gadnng {
    display: grid;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: end;
    justify-content: end;
    grid-auto-flow: column;
    gap: var(--lns-space-small);
  }
  .css-rnapth {
    font-size: calc(2.125 * var(--lns-unit, 8px));
    font-weight: var(--lns-fontWeight-bold);
    color: var(--lns-color-body);
    letter-spacing: -0.03em;
  }
  .css-ld7uvw {
    position: absolute;
    z-index: 500;
    opacity: 0;
    pointer-events: none;
  }
  .css-1bkmert {
    background-color: var(--lns-color-overlay);
    color: var(--lns-color-body);
    border-radius: var(--lns-radius-medium);
    width: max-content;
    padding: var(--lns-space-medium);
    margin-bottom: var(--lns-space-xsmall);
    z-index: 1;
  }
  .css-1lifjlz {
    width: fit-content;
  }
  .css-7kp13n {
    display: inline-block;
  }
  .css-19fgn76 {
    appearance: none;
    border: none;
    font-style: inherit;
    font-variant: inherit;
    font-stretch: inherit;
    font-size: inherit;
    line-height: inherit;
    font-family: inherit;
    font-weight: var(--lns-fontWeight-medium);
    border-radius: var(--lns-radius-medium);
    color: inherit;
    background: var(--lns-color-backgroundActive);
    text-align: center;
    padding: calc(0.2 * var(--lns-unit, 8px)) calc(1.6 * var(--lns-unit, 8px));
    cursor: pointer;
    transition: background-color 300ms ease 0s;
  }
  .css-19fgn76:hover {
    transition: background-color 200ms ease 0s;
  }
  .css-19fgn76:active {
    transition: background-color 0s ease 0s;
    background-color: var(--lns-color-backgroundActive);
  }
  .css-14nn886 {
    appearance: none;
    border: none;
    font-style: inherit;
    font-variant: inherit;
    font-stretch: inherit;
    font-size: inherit;
    line-height: inherit;
    font-family: inherit;
    font-weight: var(--lns-fontWeight-medium);
    border-radius: var(--lns-radius-medium);
    color: inherit;
    background: transparent;
    text-align: center;
    padding: calc(0.2 * var(--lns-unit, 8px)) calc(1.6 * var(--lns-unit, 8px));
    cursor: pointer;
    transition: background-color 300ms ease 0s;
  }
  .css-14nn886:hover {
    transition: background-color 200ms ease 0s;
    background: var(--lns-color-backgroundHover);
  }
  .css-14nn886:active {
    transition: background-color 0s ease 0s;
    background-color: var(--lns-color-backgroundActive);
  }
  .css-1tji3eu {
    z-index: 30;
    transition: background 200ms ease 0s;
    pointer-events: none;
  }
  .css-y6j7gp {
    width: 100%;
    outline: none;
    height: calc(2 * var(--lns-unit, 8px));
    margin: calc(
        (calc(2 * var(--lns-unit, 8px)) - calc(0.5 * var(--lns-unit, 8px))) / -2
      )
      0;
    user-select: none;
    touch-action: none;
    position: relative;
    border-radius: var(--progressRadius);
    --thumbScale: 0;
    --thumbSize: calc(1.6 * var(--lns-unit, 8px));
    --progressValue: 10%;
    --progressHeightScale: 1;
    --progressColor: var(--lns-color-blue);
    --progressTransition: 150ms 50ms;
    backface-visibility: hidden;
    transform: translate3d(0px, 0px, 0px);
  }
  .css-y6j7gp:hover,
  .css-y6j7gp:focus,
  .css-y6j7gp[mouse-down],
  .css-y6j7gp.alwaysVisible {
    cursor: pointer;
    --thumbScale: 1;
    --progressHeightScale: 1.5;
  }
  .css-y6j7gp * {
    backface-visibility: hidden;
  }
  .css-1tj5x1a {
    position: absolute;
    z-index: 500;
    transition: opacity 150ms ease 50ms;
  }
`;

export const LayersContainer = styled.div`
  grid-template-rows: minmax(0px, 1fr);
  grid-template-areas: 'layersStack';
`;

export const ControlsLayerShare = styled.div``;
