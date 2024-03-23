import React from 'react';
import { format } from 'date-fns';

function getTimeEstimate({ start, end }) {
  // return Math.abs(start - end) / 36e5;
  return format(start, 'y/MM/dd HH:mm');//new Date(start).toLocaleDateString()
}
function getTimeLeft({ start, end, progress }) {
  const timeEstimate = Math.abs(start - end) / 36e5;
  // return Math.floor(((100 - progress) / 100) * timeEstimate);
  return format(end, 'y/MM/dd HH:mm');//new Date(end).toLocaleDateString()
}
export default function TaskTooltipTemplate(task) {
  return (
    <div className="custom-task-edit-tooltip">
      <div className="custom-tooltip-title">{task.title}</div>
      <div className="custom-tooltip-row">
        <span> 開始日時: </span>
        {getTimeEstimate(task)}
      </div>
      <div className="custom-tooltip-row">
        <span> 終了日時: </span>
        {getTimeLeft(task)}
      </div>
    </div>
  );
}
