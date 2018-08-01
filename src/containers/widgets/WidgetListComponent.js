import React from 'react'
import {WidgetType1} from './WidgetType1'
import {WidgetType2} from './WidgetType2'
import {WidgetType3} from './WidgetType3'
import {HeadingWidget} from "./HeadingWidget"
import {ListWidget} from "./ListWidget";
import {YouTubeWidget} from "./YouTubeWIdget"
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import {ParagraphWidget} from "./ParagraphWidget";
import {ImageWidget} from "./Imagewidget";

const WidgetListComponent = ({widgets, saveWidgets, deleteWidget, createWidget, updateWidget}) => {
    let widgetTitle;
    let widgetType;
    return (
        <div>
            <button onClick={saveWidgets}
                    className="btn btn-primary float-right">
                Save
            </button>
            <h1>Widget List ({widgets.length})</h1>
            <ul className="list-group">
                <li className="list-group-item">
                    <input ref={node => widgetTitle = node} className="form-control" placeholder="Please Input Widget Title"/>
                    <button onClick={() => {
                        let widget = {
                            title: widgetTitle.value,
                            id: (new Date()).getTime(),
                            widgetType: widgetType.value
                        };
                        widgetTitle.value = '';
                        createWidget(widget)
                    }} className="btn btn-success">Add Widget
                    </button>
                    <select ref={node => widgetType = node} className="form-control">
                        <option value="WT1">Widget Type 1</option>
                        <option value="WT2">Widget Type 2</option>
                        <option value="WT3">Widget Type 3</option>
                        <option value="HEADING">Heading Widget</option>
                        <option value="LIST">List</option>
                        <option value="PARAGRAPH">Paragraph</option>
                        <option value="IMAGE">Image Widget</option>
                    </select>
                </li>
                {widgets.map((widget, index) =>
                    <li className="list-group-item"
                        key={index}>
                        Title: {widget.title}
                        Type: {widget.widgetType}
                        <button type="button" className="float-right btn btn-danger"
                                onClick={() => deleteWidget(widget.id)}>
                            Delete Widget
                        </button>
                        <div>
                            {widget.widgetType === 'LIST' && <ListWidget widget={widget} updateWidget={updateWidget}/>}
                            {widget.widgetType === 'HEADING' && <HeadingWidget widget={widget} updateWidget={updateWidget}/>}
                            {widget.widgetType === 'WT1' && <WidgetType1 widget={widget} updateWidget={updateWidget}/>}
                            {widget.widgetType === 'WT2' && <WidgetType2 widget={widget} updateWidget={updateWidget}/>}
                            {widget.widgetType === 'WT3' && <WidgetType3 widget={widget} updateWidget={updateWidget}/>}
                            {widget.widgetType === 'PARAGRAPH' && <ParagraphWidget widget={widget} updateWidget={updateWidget}/>}
                            {widget.widgetType === 'IMAGE' && <ImageWidget widget={widget} updateWidget={updateWidget}/>}
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
};

export default WidgetListComponent