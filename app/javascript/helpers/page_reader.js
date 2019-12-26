import React from 'react';
import reactStringReplace from 'react-string-replace';

export const pageReader = (text) => {
  return reactStringReplace(text, /(\[.*?\])/g, (match, ii) => {
    match = match.slice(1,-1);
    match = match.match(/(\d+)(.*)/);
    const pageNumber = match[1];
    const body = match[2];
    return (
      <span key={ii} style={{color:'#99F'}}>{body}</span>
    )
  });
}
