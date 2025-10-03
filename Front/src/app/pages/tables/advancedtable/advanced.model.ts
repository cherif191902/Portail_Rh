// Table data
export interface Pointage {
     id: number;
    matricule: string;
    typePoint: 'E' | 'S' | 'I';  // Restricted to these values
    datePoint: string;
    nCarte: string;
    numPoint: number;
    heure: number;
    minute: number;
    duration?: string;
        status: string;                  // Added
    totalMinutesWorked: number;      // Added
    lateMinutes: number;             // Added
    earlyDepartureMinutes: number;   // Added
    overtimeMinutes: number;         // Added
   personnel: {
        nom: string;
        prenom: string;
       
    };
}

// Search Data
export interface GroupedPointage {
    matricule: string;
    pointages: Pointage[];
    totalEntries: number;
}
