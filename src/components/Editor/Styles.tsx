import { transparentize } from 'polished';
import styled from 'styled-components';

export const WordsStyle = styled.div`
  &.is-playing {
    [data-between='true'] {
      color: #fff;
    }
    [data-between='true']:before {
      --tw-bg-opacity: 1;
      background-color: rgb(37 99 235 / var(--tw-bg-opacity));
      animation: bubble-scale 0.4s, bubble-color 0.82s;
    }
  }
  @keyframes bubble-scale {
    0% {
      transform: scale(0.9);
    }
    30% {
      transform: scale(1.1);
    }
    80% {
      transform: scale(1);
    }
    to {
      transform: scale(1);
    }
  }
  @keyframes bubble-color {
    0% {
      background-color: rgb(37 99 235 / var(--tw-bg-opacity));
    }
    39% {
      background-color: rgb(37 99 235 / var(--tw-bg-opacity));
    }
    61% {
      background-color: rgb(156 163 175 / var(--tw-bg-opacity));
    }
    to {
      background-color: rgb(156 163 175 / var(--tw-bg-opacity));
    }
  }
`;

export const Span = styled.span<{
  bold?: boolean;
  color?: string;
  italic?: boolean;
  before?: boolean;
  isLast?: boolean;
  strike?: boolean;
}>`
  ${({ bold, color, italic, before, isLast, strike }) => {
    const styles = [
      'display: inline-block;',
      'white-space: pre-wrap;',
      'user-select: text;',
    ];
    if (isLast) return;
    if (bold) {
      styles.push(`font-weight: bold;`);
    }
    if (italic) {
      styles.push(`font-style: italic;`);
    }
    if (strike) {
      styles.push(`text-decoration: line-through;`);
    }
    if (color && !before) {
      styles.push(`background-color: ${transparentize(0.6, color)};`);
    }
    if (before && color) {
      styles.push(`
        &:before {
          background-color: ${transparentize(0.6, color)};
        }
      `);
    }
    styles.push(
      `
      &:before {
        border-radius: 5px;
        box-sizing: content-box;
        content: "";
        height: 100%;
        left: 0;
        margin: 0 -4px;
        padding: 0 4px;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: -1;
      }
    `
    );
    return styles.join('');
  }}
`;
