export const calculateAverage = (data, key) => {
  if (!data || data.length === 0) return '0';
  const sum = data.reduce((acc, item) => acc + item[key], 0);
  return (sum / data.length).toFixed(1);
};

export const getRoomStatus = (roomData) => {
  const maxTemp = Math.max(...roomData.map(d => d.temperature));
  
  if (maxTemp > 30) {
    return { status: 'Danger', color: 'bg-red-100 text-red-800 border-red-300' };
  }
  if (maxTemp > 28) {
    return { status: 'Warning', color: 'bg-orange-100 text-orange-800 border-orange-300' };
  }
  return { status: 'Normal', color: 'bg-green-100 text-green-800 border-green-300' };
};

export const formatDateTime = (date) => {
  return date.toLocaleString('id-ID', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit' 
  });
};