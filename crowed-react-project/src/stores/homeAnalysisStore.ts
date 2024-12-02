import { create } from 'zustand';
import { AnalysisOptions, CreatMainAnalysisState } from './storeTypes/mainAnalysisTypes';


export const useHomeAnalysisStore = create<CreatMainAnalysisState>((set) => ({
    selectedImage: null,
    setSelectedImage: (image) => set(() => ({ selectedImage: image })),
    
    mainResponse: null, 
    setMainResponse: (response) =>
        set(() => ({ mainResponse: response })),

    analysisOptions : {
        headCounting: false,
        heatMap: false,
        graphAnalysis: false,
    },
    setAnalysisOptions: (options: AnalysisOptions) => set(() =>  ({ analysisOptions: options })),
}));
