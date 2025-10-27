import React from 'react';
import { STATUS_BADGE_STYLES } from '@/data/loans';

const StatusBadge = ({ status }) => {
  const colorClass = STATUS_BADGE_STYLES[status] || STATUS_BADGE_STYLES.menunggu;
  const displayStatus = status.charAt(0).toUpperCase() + status.slice(1);
  
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors ${colorClass}`}>
      {displayStatus}
    </span>
  );
};

export default StatusBadge;