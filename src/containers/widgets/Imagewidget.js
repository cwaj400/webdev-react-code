import React from 'react';

export const ImageWidget = ({widget, updateWidget}) => {
    let src;
    let text;
    return (<div>
        <h3>Image</h3>
        <h4> {widget.name}</h4>
        <h2>Image Link:
        </h2>
        <input ref={node => src = node} id="URL" className='form-control' placeholder="Image Link" onChange={() => {
            widget.src = src.value;
            updateWidget(widget);
        }}/>

        <h4>Preview
        </h4>
        <div className="form-control">
            {
                widget.src && <img width="560" height="315"
                                   src={widget.src}/>
            }
            <br/>
            {widget.text}
        </div>
    </div>);
};