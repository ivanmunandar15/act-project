export const INITIAL_LOANS = [
  { 
    id: 1, 
    borrower: "Ivan", 
    tool: "Oscilloscope Tektronix", 
    date: "2025-10-20", 
    status: "aktif" 
  },
  { 
    id: 2, 
    borrower: "Dita", 
    tool: "Multimeter", 
    date: "2025-10-19", 
    status: "selesai" 
  },
  { 
    id: 3, 
    borrower: "Rudi", 
    tool: "Power Supply", 
    date: "2025-10-21", 
    status: "menunggu" 
  },
  { 
    id: 4, 
    borrower: "Sarah", 
    tool: "Function Generator", 
    date: "2025-10-18", 
    status: "selesai" 
  }
];

export const STATUS_BADGE_STYLES = {
  menunggu: 'bg-gray-100 text-gray-800 border-gray-300',
  aktif: 'bg-blue-100 text-blue-800 border-blue-300',
  selesai: 'bg-green-100 text-green-800 border-green-300'
};