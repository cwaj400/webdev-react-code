import React from 'react';

export const ParagraphWidget = ({widget, updateWidget}) => {
    let paragraph;
    return (
        <div>
            <h3>Paragraph Widget - {widget.title}</h3>
            <p>Enter topic description: </p>
            <textarea ref={node => paragraph = node}
                      className='form-control'
                      placeholder="Paragraph Text"
                      onChange={() => {
                          widget.paragraph = paragraph.value;
                          updateWidget(widget);
                      }}/>
        </div>
    );
};